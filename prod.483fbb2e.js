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
/** @license React v16.14.0
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
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.14.0",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.14.0";

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
/** @license React v16.14.0
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
},version:"16.14.0"};module.exports=ab.default||ab;

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

$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, d, f) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[d] = f.value;
  return a;
};

$jscomp.getGlobal = function (a) {
  a = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, a, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global];

  for (var d = 0; d < a.length; ++d) {
    var f = a[d];
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

var $jscomp$lookupPolyfilledValue = function $jscomp$lookupPolyfilledValue(a, d) {
  var f = $jscomp.propertyToPolyfillSymbol[d];
  if (null == f) return a[d];
  f = a[f];
  return void 0 !== f ? f : a[d];
};

$jscomp.polyfill = function (a, d, f, l) {
  d && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, d, f, l) : $jscomp.polyfillUnisolated(a, d, f, l));
};

$jscomp.polyfillUnisolated = function (a, d, f, l) {
  f = $jscomp.global;
  a = a.split(".");

  for (l = 0; l < a.length - 1; l++) {
    var h = a[l];
    if (!(h in f)) return;
    f = f[h];
  }

  a = a[a.length - 1];
  l = f[a];
  d = d(l);
  d != l && null != d && $jscomp.defineProperty(f, a, {
    configurable: !0,
    writable: !0,
    value: d
  });
};

$jscomp.polyfillIsolated = function (a, d, f, l) {
  var h = a.split(".");
  a = 1 === h.length;
  l = h[0];
  l = !a && l in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var b = 0; b < h.length - 1; b++) {
    var e = h[b];
    if (!(e in l)) return;
    l = l[e];
  }

  h = h[h.length - 1];
  f = $jscomp.IS_SYMBOL_NATIVE && "es6" === f ? l[h] : null;
  d = d(f);
  null != d && (a ? $jscomp.defineProperty($jscomp.polyfills, h, {
    configurable: !0,
    writable: !0,
    value: d
  }) : d !== f && ($jscomp.propertyToPolyfillSymbol[h] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(h) : $jscomp.POLYFILL_PREFIX + h, h = $jscomp.propertyToPolyfillSymbol[h], $jscomp.defineProperty(l, h, {
    configurable: !0,
    writable: !0,
    value: d
  })));
};

$jscomp.initSymbol = function () {};

$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;

  var d = function d(h, b) {
    this.$jscomp$symbol$id_ = h;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: b
    });
  };

  d.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };

  var f = 0,
      l = function l(h) {
    if (this instanceof l) throw new TypeError("Symbol is not a constructor");
    return new d("jscomp_symbol_" + (h || "") + "_" + f++, h);
  };

  return l;
}, "es6", "es3");

$jscomp.initSymbolIterator = function () {};

$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var d = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), f = 0; f < d.length; f++) {
    var l = $jscomp.global[d[f]];
    "function" === typeof l && "function" != typeof l.prototype[a] && $jscomp.defineProperty(l.prototype, a, {
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

$jscomp.checkStringArgs = function (a, d, f) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + f + " must not be null or undefined");
  if (d instanceof RegExp) throw new TypeError("First argument to String.prototype." + f + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (d) {
    var f = $jscomp.checkStringArgs(this, null, "codePointAt"),
        l = f.length;
    d = Number(d) || 0;

    if (0 <= d && d < l) {
      d |= 0;
      var h = f.charCodeAt(d);
      if (55296 > h || 56319 < h || d + 1 === l) return h;
      d = f.charCodeAt(d + 1);
      return 56320 > d || 57343 < d ? h : 1024 * (h - 55296) + d + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (d) {
    for (var f = "", l = 0; l < arguments.length; l++) {
      var h = Number(arguments[l]);
      if (0 > h || 1114111 < h || h !== Math.floor(h)) throw new RangeError("invalid_code_point " + h);
      65535 >= h ? f += String.fromCharCode(h) : (h -= 65536, f += String.fromCharCode(h >>> 10 & 1023 | 55296), f += String.fromCharCode(h & 1023 | 56320));
    }

    return f;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (d, f, l) {
    f = null != f ? f : function (c) {
      return c;
    };
    var h = [],
        b = "undefined" != typeof Symbol && Symbol.iterator && d[Symbol.iterator];

    if ("function" == typeof b) {
      d = b.call(d);

      for (var e = 0; !(b = d.next()).done;) {
        h.push(f.call(l, b.value, e++));
      }
    } else for (b = d.length, e = 0; e < b; e++) {
      h.push(f.call(l, d[e], e));
    }

    return h;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (d, f) {
    var l = $jscomp.checkStringArgs(this, d, "endsWith");
    d += "";
    void 0 === f && (f = l.length);
    f = Math.max(0, Math.min(f | 0, l.length));

    for (var h = d.length; 0 < h && 0 < f;) {
      if (l[--f] != d[--h]) return !1;
    }

    return 0 >= h;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (d, f) {
    var l = $jscomp.checkStringArgs(this, d, "startsWith");
    d += "";
    var h = l.length,
        b = d.length;
    f = Math.max(0, Math.min(f | 0, l.length));

    for (var e = 0; e < b && f < h;) {
      if (l[f++] != d[e++]) return !1;
    }

    return e >= b;
  };
}, "es6", "es3");

$jscomp.iteratorFromArray = function (a, d) {
  a instanceof String && (a += "");
  var f = 0,
      l = !1,
      h = {
    next: function next() {
      if (!l && f < a.length) {
        var b = f++;
        return {
          value: d(b, a[b]),
          done: !1
        };
      }

      l = !0;
      return {
        done: !0,
        value: void 0
      };
    }
  };

  h[Symbol.iterator] = function () {
    return h;
  };

  return h;
};

$jscomp.polyfill("Array.prototype.keys", function (a) {
  return a ? a : function () {
    return $jscomp.iteratorFromArray(this, function (d) {
      return d;
    });
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, d, f) {
  a instanceof String && (a = String(a));

  for (var l = a.length, h = 0; h < l; h++) {
    var b = a[h];
    if (d.call(f, b, h, a)) return {
      i: h,
      v: b
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (d, f) {
    return $jscomp.findInternal(this, d, f).v;
  };
}, "es6", "es3");
var PS = {};

(function (a) {
  a["Control.Alt"] = a["Control.Alt"] || {};
  a = a["Control.Alt"];

  a.Alt = function (d, f) {
    this.Functor0 = d;
    this.alt = f;
  };

  a.alt = function (d) {
    return d.alt;
  };
})(PS);

(function (a) {
  a["Control.Alternative"] = a["Control.Alternative"] || {};

  a["Control.Alternative"].Alternative = function (d, f) {
    this.Applicative0 = d;
    this.Plus1 = f;
  };
})(PS);

(function (a) {
  a.arrayApply = function (d) {
    return function (f) {
      for (var l = d.length, h = f.length, b = Array(l * h), e = 0, c = 0; c < l; c++) {
        for (var n = d[c], m = 0; m < h; m++) {
          b[e++] = n(f[m]);
        }
      }

      return b;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var d = new function (f) {
    this.compose = f;
  }(function (f) {
    return function (l) {
      return function (h) {
        return f(l(h));
      };
    };
  });

  a.compose = function (f) {
    return f.compose;
  };

  a.composeFlipped = function (f) {
    return function (l) {
      return function (h) {
        return (0, f.compose)(h)(l);
      };
    };
  };

  a.semigroupoidFn = d;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var d = a["Control.Category"],
      f = a["Control.Semigroupoid"];
  a = new function (l, h) {
    this.Semigroupoid0 = l;
    this.identity = h;
  }(function () {
    return f.semigroupoidFn;
  }, function (l) {
    return l;
  });

  d.identity = function (l) {
    return l.identity;
  };

  d.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (d) {
    return function (f) {
      return function (l) {
        return d(l)(f);
      };
    };
  };

  a["const"] = function (d) {
    return function (f) {
      return d;
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (d) {
    return function (f) {
      for (var l = f.length, h = Array(l), b = 0; b < l; b++) {
        h[b] = d(f[b]);
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
      l = a["Control.Semigroupoid"],
      h = a["Data.Function"],
      b = a["Data.Unit"];

  a = function a(e) {
    this.map = e;
  };

  l = new a(l.compose(l.semigroupoidFn));
  f = new a(f.arrayMap);
  d.Functor = a;

  d.map = function (e) {
    return e.map;
  };

  d.mapFlipped = function (e) {
    return function (c) {
      return function (n) {
        return (0, e.map)(n)(c);
      };
    };
  };

  d["void"] = function (e) {
    return (0, e.map)(h["const"](b.unit));
  };

  d.voidRight = function (e) {
    return function (c) {
      return (0, e.map)(h["const"](c));
    };
  };

  d.voidLeft = function (e) {
    return function (c) {
      return function (n) {
        return (0, e.map)(h["const"](n))(c);
      };
    };
  };

  d.functorFn = l;
  d.functorArray = f;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var d = a["Control.Apply"],
      f = a["Control.Apply"],
      l = a["Control.Category"],
      h = a["Data.Function"],
      b = a["Data.Functor"];

  a = function a(c, n) {
    this.Functor0 = c;
    this.apply = n;
  };

  var e = new a(function () {
    return b.functorFn;
  }, function (c) {
    return function (n) {
      return function (m) {
        return c(m)(n(m));
      };
    };
  });
  f = new a(function () {
    return b.functorArray;
  }, f.arrayApply);
  d.Apply = a;

  d.apply = function (c) {
    return c.apply;
  };

  d.applyFirst = function (c) {
    return function (n) {
      return function (m) {
        return (0, c.apply)(b.map(c.Functor0())(h["const"])(n))(m);
      };
    };
  };

  d.applySecond = function (c) {
    return function (n) {
      return function (m) {
        return (0, c.apply)(b.map(c.Functor0())(h["const"](l.identity(l.categoryFn)))(n))(m);
      };
    };
  };

  d.lift2 = function (c) {
    return function (n) {
      return function (m) {
        return function (k) {
          return (0, c.apply)(b.map(c.Functor0())(n)(m))(k);
        };
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
      l = a["Data.Unit"];

  a = function a(b, e) {
    this.Apply0 = b;
    this.pure = e;
  };

  var h = new a(function () {
    return f.applyArray;
  }, function (b) {
    return [b];
  });
  d.Applicative = a;

  d.pure = function (b) {
    return b.pure;
  };

  d.liftA1 = function (b) {
    return function (e) {
      return function (c) {
        return f.apply(b.Apply0())((0, b.pure)(e))(c);
      };
    };
  };

  d.unless = function (b) {
    return function (e) {
      return function (c) {
        if (!e) return c;
        if (e) return (0, b.pure)(l.unit);
        throw Error("Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " + [e.constructor.name, c.constructor.name]);
      };
    };
  };

  d.applicativeArray = h;
})(PS);

(function (a) {
  a.arrayBind = function (d) {
    return function (f) {
      for (var l = [], h = 0, b = d.length; h < b; h++) {
        Array.prototype.push.apply(l, f(d[h]));
      }

      return l;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var d = a["Control.Bind"],
      f = a["Control.Apply"],
      l = a["Control.Category"],
      h = a["Data.Function"],
      b = function b(c, n) {
    this.Apply0 = c;
    this.bind = n;
  };

  a = new b(function () {
    return f.applyArray;
  }, a["Control.Bind"].arrayBind);
  var e = new function (c) {
    this.discard = c;
  }(function (c) {
    return c.bind;
  });
  d.Bind = b;

  d.bind = function (c) {
    return c.bind;
  };

  d.bindFlipped = function (c) {
    return h.flip(c.bind);
  };

  d.discard = function (c) {
    return c.discard;
  };

  d.join = function (c) {
    return function (n) {
      return (0, c.bind)(n)(l.identity(l.categoryFn));
    };
  };

  d.bindArray = a;
  d.discardUnit = e;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var d = a["Control.Monad"],
      f = a["Control.Applicative"],
      l = a["Control.Bind"];

  d.Monad = function (h, b) {
    this.Applicative0 = h;
    this.Bind1 = b;
  };

  d.ap = function (h) {
    return function (b) {
      return function (e) {
        return l.bind(h.Bind1())(b)(function (c) {
          return l.bind(h.Bind1())(e)(function (n) {
            return f.pure(h.Applicative0())(c(n));
          });
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Lazy"] = a["Control.Lazy"] || {};
  a = a["Control.Lazy"];

  a.defer = function (d) {
    return d.defer;
  };

  a.Lazy = function (d) {
    this.defer = d;
  };
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var d = a["Data.Bifunctor"],
      f = a["Control.Category"];

  d.bimap = function (l) {
    return l.bimap;
  };

  d.Bifunctor = function (l) {
    this.bimap = l;
  };

  d.lmap = function (l) {
    return function (h) {
      return (0, l.bimap)(h)(f.identity(f.categoryFn));
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
  var d = function d(f) {
    return function (l) {
      return function (h) {
        return function (b) {
          return function (e) {
            return b < e ? f : b === e ? l : h;
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
  var d = function d(f) {
    return function (l) {
      return f === l;
    };
  };

  a.eqBooleanImpl = d;
  a.eqIntImpl = d;
  a.eqCharImpl = d;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});

(function (a) {
  a["Data.Eq"] = a["Data.Eq"] || {};
  var d = a["Data.Eq"],
      f = a["Data.Eq"];

  a = function a(b) {
    this.eq = b;
  };

  var l = new a(f.eqIntImpl),
      h = new a(f.eqCharImpl);
  f = new a(f.eqBooleanImpl);
  d.Eq = a;

  d.eq = function (b) {
    return b.eq;
  };

  d.eqBoolean = f;
  d.eqInt = l;
  d.eqChar = h;
})(PS);

(function (a) {
  a["Data.Ordering"] = a["Data.Ordering"] || {};
  a = a["Data.Ordering"];

  var d = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      f = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      l = function () {
    function h() {}

    h.value = new h();
    return h;
  }();

  a.LT = d;
  a.GT = f;
  a.EQ = l;
})(PS);

(function (a) {
  a.intSub = function (d) {
    return function (f) {
      return d - f | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (d) {
    return function (f) {
      return d + f | 0;
    };
  };

  a.intMul = function (d) {
    return function (f) {
      return d * f | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var d = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (f, l, h, b) {
    this.add = f;
    this.mul = l;
    this.one = h;
    this.zero = b;
  }(a.intAdd, a.intMul, 1, 0);

  d.zero = function (f) {
    return f.zero;
  };

  d.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var d = a["Data.Ring"],
      f = a["Data.Semiring"];
  a = new function (l, h) {
    this.Semiring0 = l;
    this.sub = h;
  }(function () {
    return f.semiringInt;
  }, a["Data.Ring"].intSub);

  d.negate = function (l) {
    return function (h) {
      return (0, l.sub)(f.zero(l.Semiring0()))(h);
    };
  };

  d.ringInt = a;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var d = a["Data.Ord"],
      f = a["Data.Ord"],
      l = a["Data.Eq"],
      h = a["Data.Ordering"],
      b = a["Data.Ring"],
      e = a["Data.Semiring"];

  a = function a(k, q) {
    this.Eq0 = k;
    this.compare = q;
  };

  var c = new a(function () {
    return l.eqInt;
  }, f.ordIntImpl(h.LT.value)(h.EQ.value)(h.GT.value)),
      n = new a(function () {
    return l.eqChar;
  }, f.ordCharImpl(h.LT.value)(h.EQ.value)(h.GT.value));
  f = new a(function () {
    return l.eqBoolean;
  }, f.ordBooleanImpl(h.LT.value)(h.EQ.value)(h.GT.value));

  var m = function m(k) {
    return function (q) {
      return function (w) {
        return (0, k.compare)(q)(w) instanceof h.LT ? !1 : !0;
      };
    };
  };

  d.Ord = a;

  d.compare = function (k) {
    return k.compare;
  };

  d.max = function (k) {
    return function (q) {
      return function (w) {
        var u = (0, k.compare)(q)(w);
        if (u instanceof h.LT) return w;
        if (u instanceof h.EQ || u instanceof h.GT) return q;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [u.constructor.name]);
      };
    };
  };

  d.abs = function (k) {
    return function (q) {
      return function (w) {
        return m(k)(w)(e.zero(q.Semiring0())) ? w : b.negate(q)(w);
      };
    };
  };

  d.ordBoolean = f;
  d.ordInt = c;
  d.ordChar = n;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var d = a["Data.Bounded"],
      f = a["Data.Bounded"],
      l = a["Data.Ord"];

  a = function a(e, c, n) {
    this.Ord0 = e;
    this.bottom = c;
    this.top = n;
  };

  var h = new a(function () {
    return l.ordInt;
  }, f.bottomInt, f.topInt);
  f = new a(function () {
    return l.ordChar;
  }, f.bottomChar, f.topChar);
  var b = new a(function () {
    return l.ordBoolean;
  }, !1, !0);
  d.Bounded = a;

  d.bottom = function (e) {
    return e.bottom;
  };

  d.top = function (e) {
    return e.top;
  };

  d.boundedBoolean = b;
  d.boundedInt = h;
  d.boundedChar = f;
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var d = a["Data.Maybe"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Data.Bounded"],
      c = a["Data.Eq"],
      n = a["Data.Function"],
      m = a["Data.Functor"],
      k = a["Data.Ord"],
      q = a["Data.Ordering"],
      w = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      u = function () {
    function G(D) {
      this.value0 = D;
    }

    G.create = function (D) {
      return new G(D);
    };

    return G;
  }(),
      z = function z(G) {
    return function (D) {
      return function (H) {
        if (H instanceof w) return G;
        if (H instanceof u) return D(H.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [G.constructor.name, D.constructor.name, H.constructor.name]);
      };
    };
  };

  a = z(!0)(n["const"](!1));
  n = z(!1)(n["const"](!0));

  var t = new m.Functor(function (G) {
    return function (D) {
      return D instanceof u ? new u(G(D.value0)) : w.value;
    };
  }),
      p = function p(G) {
    return new c.Eq(function (D) {
      return function (H) {
        return D instanceof w && H instanceof w ? !0 : D instanceof u && H instanceof u ? c.eq(G)(D.value0)(H.value0) : !1;
      };
    });
  },
      x = function x(G) {
    return new k.Ord(function () {
      return p(G.Eq0());
    }, function (D) {
      return function (H) {
        if (D instanceof w && H instanceof w) return q.EQ.value;
        if (D instanceof w) return q.LT.value;
        if (H instanceof w) return q.GT.value;
        if (D instanceof u && H instanceof u) return k.compare(G)(D.value0)(H.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [D.constructor.name, H.constructor.name]);
      };
    });
  },
      A = new l.Apply(function () {
    return t;
  }, function (G) {
    return function (D) {
      if (G instanceof u) return m.map(t)(G.value0)(D);
      if (G instanceof w) return w.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [G.constructor.name, D.constructor.name]);
    };
  });

  l = new h.Bind(function () {
    return A;
  }, function (G) {
    return function (D) {
      if (G instanceof u) return D(G.value0);
      if (G instanceof w) return w.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [G.constructor.name, D.constructor.name]);
    };
  });
  f = new f.Applicative(function () {
    return A;
  }, u.create);
  d.Nothing = w;
  d.Just = u;
  d.maybe = z;

  d.fromMaybe = function (G) {
    return z(G)(b.identity(b.categoryFn));
  };

  d.isJust = n;
  d.isNothing = a;

  d.fromJust = function (G) {
    return function (D) {
      if (D instanceof u) return D.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [D.constructor.name]);
    };
  };

  d.functorMaybe = t;
  d.applyMaybe = A;
  d.applicativeMaybe = f;
  d.bindMaybe = l;
  d.ordMaybe = x;

  d.boundedMaybe = function (G) {
    return new e.Bounded(function () {
      return x(G.Ord0());
    }, w.value, new u(e.top(G)));
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var d = a["Data.Either"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Bifunctor"],
      c = a["Data.Function"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      k = function () {
    function p(x) {
      this.value0 = x;
    }

    p.create = function (x) {
      return new p(x);
    };

    return p;
  }(),
      q = function () {
    function p(x) {
      this.value0 = x;
    }

    p.create = function (x) {
      return new p(x);
    };

    return p;
  }(),
      w = new n.Functor(function (p) {
    return function (x) {
      if (x instanceof k) return new k(x.value0);
      if (x instanceof q) return new q(p(x.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [x.constructor.name]);
    };
  });

  a = function a(p) {
    return function (x) {
      return function (A) {
        if (A instanceof k) return p(A.value0);
        if (A instanceof q) return x(A.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [p.constructor.name, x.constructor.name, A.constructor.name]);
      };
    };
  };

  c = a(c["const"](m.Nothing.value))(m.Just.create);
  e = new e.Bifunctor(function (p) {
    return function (x) {
      return function (A) {
        if (A instanceof k) return new k(p(A.value0));
        if (A instanceof q) return new q(x(A.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [p.constructor.name, x.constructor.name, A.constructor.name]);
      };
    };
  });
  var u = new l.Apply(function () {
    return w;
  }, function (p) {
    return function (x) {
      if (p instanceof k) return new k(p.value0);
      if (p instanceof q) return n.map(w)(p.value0)(x);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [p.constructor.name, x.constructor.name]);
    };
  }),
      z = new h.Bind(function () {
    return u;
  }, a(function (p) {
    return function (x) {
      return new k(p);
    };
  })(function (p) {
    return function (x) {
      return x(p);
    };
  })),
      t = new f.Applicative(function () {
    return u;
  }, q.create);
  f = new b.Monad(function () {
    return t;
  }, function () {
    return z;
  });
  d.Left = k;
  d.Right = q;
  d.either = a;
  d.hush = c;
  d.functorEither = w;
  d.bifunctorEither = e;
  d.applicativeEither = t;
  d.bindEither = z;
  d.monadEither = f;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var d = a["Control.Monad.Rec.Class"],
      f = a["Data.Bifunctor"],
      l = a["Data.Either"],
      h = function () {
    function n(m) {
      this.value0 = m;
    }

    n.create = function (m) {
      return new n(m);
    };

    return n;
  }(),
      b = function () {
    function n(m) {
      this.value0 = m;
    }

    n.create = function (m) {
      return new n(m);
    };

    return n;
  }();

  a = function a(n, m) {
    this.Monad0 = n;
    this.tailRecM = m;
  };

  var e = function e(n) {
    return function (m) {
      m = n(m);

      for (var k = !1, q; !k;) {
        if (q = m, q instanceof h) m = n(q.value0), q = void 0;else if (q instanceof b) k = !0, q = q.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [q.constructor.name]);
      }

      return q;
    };
  },
      c = new a(function () {
    return l.monadEither;
  }, function (n) {
    return function (m) {
      return e(function (k) {
        if (k instanceof l.Left) return new b(new l.Left(k.value0));
        if (k instanceof l.Right && k.value0 instanceof h) return new h(n(k.value0.value0));
        if (k instanceof l.Right && k.value0 instanceof b) return new b(new l.Right(k.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [k.constructor.name]);
      })(n(m));
    };
  });

  f = new f.Bifunctor(function (n) {
    return function (m) {
      return function (k) {
        if (k instanceof h) return new h(n(k.value0));
        if (k instanceof b) return new b(m(k.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [n.constructor.name, m.constructor.name, k.constructor.name]);
      };
    };
  });
  d.Loop = h;
  d.Done = b;
  d.MonadRec = a;

  d.tailRecM = function (n) {
    return n.tailRecM;
  };

  d.bifunctorStep = f;
  d.monadRecEither = c;
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  a = a["Control.Plus"];

  a.Plus = function (d, f) {
    this.Alt0 = d;
    this.empty = f;
  };

  a.empty = function (d) {
    return d.empty;
  };
})(PS);

(function (a) {
  a.foldrArray = function (d) {
    return function (f) {
      return function (l) {
        for (var h = f, b = l.length - 1; 0 <= b; b--) {
          h = d(l[b])(h);
        }

        return h;
      };
    };
  };

  a.foldlArray = function (d) {
    return function (f) {
      return function (l) {
        for (var h = f, b = l.length, e = 0; e < b; e++) {
          h = d(h)(l[e]);
        }

        return h;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a.boolConj = function (d) {
    return function (f) {
      return d && f;
    };
  };

  a.boolDisj = function (d) {
    return function (f) {
      return d || f;
    };
  };

  a.boolNot = function (d) {
    return !d;
  };
})(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});

(function (a) {
  a["Data.HeytingAlgebra"] = a["Data.HeytingAlgebra"] || {};
  var d = a["Data.HeytingAlgebra"];
  a = a["Data.HeytingAlgebra"];
  var f = new function (l, h, b, e, c, n) {
    this.conj = l;
    this.disj = h;
    this.ff = b;
    this.implies = e;
    this.not = c;
    this.tt = n;
  }(a.boolConj, a.boolDisj, !1, function (l) {
    return function (h) {
      return (0, f.disj)((0, f.not)(l))(h);
    };
  }, a.boolNot, !0);

  d.ff = function (l) {
    return l.ff;
  };

  d.disj = function (l) {
    return l.disj;
  };

  d.not = function (l) {
    return l.not;
  };

  d.heytingAlgebraBoolean = f;
})(PS);

(function (a) {
  a.concatString = function (d) {
    return function (f) {
      return d + f;
    };
  };

  a.concatArray = function (d) {
    return function (f) {
      return 0 === d.length ? f : 0 === f.length ? d : d.concat(f);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};
  var d = a["Data.Semigroup"],
      f = a["Data.Semigroup"],
      l = a["Data.Unit"];

  a = function a(e) {
    this.append = e;
  };

  var h = new a(function (e) {
    return function (c) {
      return l.unit;
    };
  }),
      b = new a(f.concatString);
  f = new a(f.concatArray);
  d.Semigroup = a;

  d.append = function (e) {
    return e.append;
  };

  d.semigroupString = b;
  d.semigroupUnit = h;
  d.semigroupArray = f;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var d = a["Data.Monoid"],
      f = a["Data.Semigroup"],
      l = function l(e, c) {
    this.Semigroup0 = e;
    this.mempty = c;
  };

  a = new l(function () {
    return f.semigroupUnit;
  }, a["Data.Unit"].unit);
  var h = new l(function () {
    return f.semigroupString;
  }, ""),
      b = new l(function () {
    return f.semigroupArray;
  }, []);
  d.Monoid = l;

  d.mempty = function (e) {
    return e.mempty;
  };

  d.monoidUnit = a;
  d.monoidString = h;
  d.monoidArray = b;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var d = a["Data.Monoid.Disj"],
      f = a["Data.HeytingAlgebra"],
      l = a["Data.Monoid"],
      h = a["Data.Semigroup"],
      b = function b(e) {
    return new h.Semigroup(function (c) {
      return function (n) {
        return f.disj(e)(c)(n);
      };
    });
  };

  d.Disj = function (e) {
    return e;
  };

  d.monoidDisj = function (e) {
    return new l.Monoid(function () {
      return b(e);
    }, f.ff(e));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var d = a["Data.Newtype"],
      f = a["Data.Functor"],
      l = function l(h, b) {
    this.unwrap = h;
    this.wrap = b;
  };

  a = new l(function (h) {
    return h;
  }, a["Data.Monoid.Disj"].Disj);

  d.unwrap = function (h) {
    return h.unwrap;
  };

  d.wrap = function (h) {
    return h.wrap;
  };

  d.Newtype = l;

  d.alaF = function (h) {
    return function (b) {
      return function (e) {
        return function (c) {
          return function (n) {
            return function (m) {
              var k = f.map(b)(c.unwrap),
                  q = f.map(h)(e.wrap);
              return function (w) {
                return k(m(q(w)));
              };
            };
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
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Eq"],
      c = a["Data.Function"],
      n = a["Data.Functor"],
      m = a["Data.HeytingAlgebra"],
      k = a["Data.Maybe"],
      q = a["Data.Monoid"],
      w = a["Data.Monoid.Disj"],
      u = a["Data.Newtype"],
      z = a["Data.Semigroup"],
      t = a["Data.Unit"];

  a = function a(E, F, K) {
    this.foldMap = E;
    this.foldl = F;
    this.foldr = K;
  };

  var p = function p(E) {
    return function (F) {
      return function (K) {
        return (0, F.foldr)(function () {
          var L = h.applySecond(E.Apply0());
          return function (v) {
            return L(K(v));
          };
        }())(l.pure(E)(t.unit));
      };
    };
  },
      x = new a(function (E) {
    return function (F) {
      return function (K) {
        if (K instanceof k.Nothing) return q.mempty(E);
        if (K instanceof k.Just) return F(K.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [F.constructor.name, K.constructor.name]);
      };
    };
  }, function (E) {
    return function (F) {
      return function (K) {
        if (K instanceof k.Nothing) return F;
        if (K instanceof k.Just) return E(F)(K.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [E.constructor.name, F.constructor.name, K.constructor.name]);
      };
    };
  }, function (E) {
    return function (F) {
      return function (K) {
        if (K instanceof k.Nothing) return F;
        if (K instanceof k.Just) return E(K.value0)(F);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [E.constructor.name, F.constructor.name, K.constructor.name]);
      };
    };
  }),
      A = function A(E) {
    return function (F) {
      return function (K) {
        return (0, E.foldr)(function (L) {
          return function (v) {
            return z.append(F.Semigroup0())(K(L))(v);
          };
        })(q.mempty(F));
      };
    };
  },
      G = new a(function (E) {
    return A(G)(E);
  }, f.foldlArray, f.foldrArray),
      D = function D(E) {
    return function (F) {
      return u.alaF(n.functorFn)(n.functorFn)(u.newtypeDisj)(u.newtypeDisj)(w.Disj)((0, E.foldMap)(w.monoidDisj(F)));
    };
  },
      H = function H(E) {
    return function (F) {
      var K = D(E)(m.heytingAlgebraBoolean),
          L = e.eq(F);
      return function (v) {
        return K(L(v));
      };
    };
  };

  d.Foldable = a;

  d.foldr = function (E) {
    return E.foldr;
  };

  d.foldl = function (E) {
    return E.foldl;
  };

  d.foldMap = function (E) {
    return E.foldMap;
  };

  d.fold = function (E) {
    return function (F) {
      return (0, E.foldMap)(F)(b.identity(b.categoryFn));
    };
  };

  d.traverse_ = p;

  d.for_ = function (E) {
    return function (F) {
      return c.flip(p(E)(F));
    };
  };

  d.intercalate = function (E) {
    return function (F) {
      return function (K) {
        return function (L) {
          return (0, E.foldl)(function (v) {
            return function (M) {
              return v.init ? {
                init: !1,
                acc: M
              } : {
                init: !1,
                acc: z.append(F.Semigroup0())(v.acc)(z.append(F.Semigroup0())(K)(M))
              };
            };
          })({
            init: !0,
            acc: q.mempty(F)
          })(L).acc;
        };
      };
    };
  };

  d.any = D;

  d.notElem = function (E) {
    return function (F) {
      return function (K) {
        var L = m.not(m.heytingAlgebraBoolean),
            v = H(E)(F)(K);
        return function (M) {
          return L(v(M));
        };
      };
    };
  };

  d.find = function (E) {
    return function (F) {
      return (0, E.foldl)(function (K) {
        return function (L) {
          return K instanceof k.Nothing && F(L) ? new k.Just(L) : K;
        };
      })(k.Nothing.value);
    };
  };

  d.foldableArray = G;
  d.foldableMaybe = x;
})(PS);

(function (a) {
  a.showIntImpl = function (d) {
    return d.toString();
  };

  a.showCharImpl = function (d) {
    var f = d.charCodeAt(0);

    if (32 > f || 127 === f) {
      switch (d) {
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

    return "'" === d || "\\" === d ? "'\\" + d + "'" : "'" + d + "'";
  };

  a.showStringImpl = function (d) {
    var f = d.length;
    return '"' + d.replace(/[\0-\x1F\x7F"\\]/g, function (l, h) {
      switch (l) {
        case '"':
        case "\\":
          return "\\" + l;

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
      h = h < f && "0" <= d[h] && "9" >= d[h] ? "\\&" : "";
      return "\\" + l.charCodeAt(0).toString(10) + h;
    }) + '"';
  };

  a.showArrayImpl = function (d) {
    return function (f) {
      for (var l = [], h = 0, b = f.length; h < b; h++) {
        l[h] = d(f[h]);
      }

      return "[" + l.join(",") + "]";
    };
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};

  var d = a["Data.Show"],
      f = a["Data.Show"],
      l = function l(c) {
    this.show = c;
  };

  a = new l(f.showStringImpl);
  var h = new l(f.showIntImpl),
      b = new l(f.showCharImpl),
      e = new l(function (c) {
    if (c) return "true";
    if (!c) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [c.constructor.name]);
  });
  d.Show = l;

  d.show = function (c) {
    return c.show;
  };

  d.showBoolean = e;
  d.showInt = h;
  d.showChar = b;
  d.showString = a;

  d.showArray = function (c) {
    return new l(f.showArrayImpl(c.show));
  };
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var d = a["Data.NonEmpty"],
      f = a["Control.Plus"],
      l = a["Data.Foldable"],
      h = a["Data.Functor"],
      b = a["Data.Semigroup"],
      e = a["Data.Show"],
      c = function () {
    function n(m, k) {
      this.value0 = m;
      this.value1 = k;
    }

    n.create = function (m) {
      return function (k) {
        return new n(m, k);
      };
    };

    return n;
  }();

  d.NonEmpty = c;

  d.singleton = function (n) {
    return function (m) {
      return new c(m, f.empty(n));
    };
  };

  d.showNonEmpty = function (n) {
    return function (m) {
      return new e.Show(function (k) {
        return "(NonEmpty " + (e.show(n)(k.value0) + (" " + (e.show(m)(k.value1) + ")")));
      });
    };
  };

  d.functorNonEmpty = function (n) {
    return new h.Functor(function (m) {
      return function (k) {
        return new c(m(k.value0), h.map(n)(m)(k.value1));
      };
    });
  };

  d.foldableNonEmpty = function (n) {
    return new l.Foldable(function (m) {
      return function (k) {
        return function (q) {
          return b.append(m.Semigroup0())(k(q.value0))(l.foldMap(n)(m)(k)(q.value1));
        };
      };
    }, function (m) {
      return function (k) {
        return function (q) {
          return l.foldl(n)(m)(m(k)(q.value0))(q.value1);
        };
      };
    }, function (m) {
      return function (k) {
        return function (q) {
          return m(q.value0)(l.foldr(n)(m)(k)(q.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var d = a["Data.List.Types"],
      f = a["Control.Alt"],
      l = a["Control.Plus"],
      h = a["Data.Foldable"],
      b = a["Data.Function"],
      e = a["Data.Functor"],
      c = a["Data.Monoid"],
      n = a["Data.NonEmpty"],
      m = a["Data.Semigroup"],
      k = a["Data.Show"],
      q = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      w = function () {
    function D(H, E) {
      this.value0 = H;
      this.value1 = E;
    }

    D.create = function (H) {
      return function (E) {
        return new D(H, E);
      };
    };

    return D;
  }(),
      u = new e.Functor(function (D) {
    return function (H) {
      return function (E) {
        function F(M, T) {
          if (T instanceof w && T.value1 instanceof w && T.value1.value1 instanceof w) K = new w(T, M), E = T.value1.value1.value1;else return L = !0, function (B) {
            return function (N) {
              for (var I = B, V = !1, O; !V;) {
                O = I;
                var r = N;
                O instanceof w && O.value0 instanceof w && O.value0.value1 instanceof w && O.value0.value1.value1 instanceof w ? (I = O.value1, N = new w(D(O.value0.value0), new w(D(O.value0.value1.value0), new w(D(O.value0.value1.value1.value0), r))), O = void 0) : (V = !0, O = r);
              }

              return O;
            };
          }(M)(function (B) {
            return B instanceof w && B.value1 instanceof w && B.value1.value1 instanceof q ? new w(D(B.value0), new w(D(B.value1.value0), q.value)) : B instanceof w && B.value1 instanceof q ? new w(D(B.value0), q.value) : q.value;
          }(T));
        }

        for (var K = H, L = !1, v; !L;) {
          v = F(K, E);
        }

        return v;
      };
    }(q.value);
  });

  a = n.functorNonEmpty(u);

  var z = new h.Foldable(function (D) {
    return function (H) {
      return h.foldl(z)(function (E) {
        var F = m.append(D.Semigroup0())(E);
        return function (K) {
          return F(H(K));
        };
      })(c.mempty(D));
    };
  }, function (D) {
    return function (H) {
      return function (E) {
        for (var F = H, K = !1, L; !K;) {
          L = F;
          var v = E;
          if (v instanceof q) K = !0;else {
            if (v instanceof w) F = D(L)(v.value0), E = v.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [v.constructor.name]);
            L = void 0;
          }
        }

        return L;
      };
    };
  }, function (D) {
    return function (H) {
      var E = h.foldl(z)(b.flip(w.create))(q.value),
          F = h.foldl(z)(b.flip(D))(H);
      return function (K) {
        return F(E(K));
      };
    };
  }),
      t = n.foldableNonEmpty(z),
      p = new m.Semigroup(function (D) {
    return function (H) {
      return h.foldr(z)(w.create)(H)(D);
    };
  }),
      x = new c.Monoid(function () {
    return p;
  }, q.value),
      A = function A(D) {
    return new k.Show(function (H) {
      return H instanceof q ? "Nil" : "(" + (h.intercalate(z)(c.monoidString)(" : ")(e.map(u)(k.show(D))(H)) + " : Nil)");
    });
  },
      G = new f.Alt(function () {
    return u;
  }, m.append(p));

  f = new l.Plus(function () {
    return G;
  }, q.value);
  d.Nil = q;
  d.Cons = w;

  d.NonEmptyList = function (D) {
    return D;
  };

  d.monoidList = x;
  d.foldableList = z;
  d.plusList = f;

  d.showNonEmptyList = function (D) {
    return new k.Show(function (H) {
      return "(NonEmptyList " + (k.show(n.showNonEmpty(D)(A(D)))(H) + ")");
    });
  };

  d.functorNonEmptyList = a;
  d.foldableNonEmptyList = t;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var d = a["Data.List"],
      f = a["Control.Alt"],
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      c = a["Control.Monad.Rec.Class"],
      n = a["Data.Bifunctor"],
      m = a["Data.Functor"],
      k = a["Data.List.Types"],
      q = a["Data.Unit"],
      w = function () {
    return function (t) {
      return function (p) {
        for (var x = t, A = !1, G; !A;) {
          G = x;
          var D = p;
          if (D instanceof k.Nil) A = !0;else {
            if (D instanceof k.Cons) x = new k.Cons(D.value0, G), p = D.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [G.constructor.name, D.constructor.name]);
            G = void 0;
          }
        }

        return G;
      };
    }(k.Nil.value);
  }(),
      u = function u(t) {
    return function (p) {
      return function (x) {
        return h.apply(t.Applicative0().Apply0())(m.map(t.Plus1().Alt0().Functor0())(k.Cons.create)(x))(e.defer(p)(function (A) {
          return z(t)(p)(x);
        }));
      };
    };
  },
      z = function z(t) {
    return function (p) {
      return function (x) {
        return f.alt(t.Plus1().Alt0())(u(t)(p)(x))(l.pure(t.Applicative0())(k.Nil.value));
      };
    };
  };

  d.some = u;

  d.manyRec = function (t) {
    return function (p) {
      return function (x) {
        return c.tailRecM(t)(function (A) {
          return b.bind(t.Monad0().Bind1())(f.alt(p.Plus1().Alt0())(m.map(p.Plus1().Alt0().Functor0())(c.Loop.create)(x))(l.pure(p.Applicative0())(new c.Done(q.unit))))(function (G) {
            return l.pure(p.Applicative0())(n.bimap(c.bifunctorStep)(function (D) {
              return new k.Cons(D, A);
            })(function (D) {
              return w(A);
            })(G));
          });
        })(k.Nil.value);
      };
    };
  };

  d.reverse = w;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var d = a["Data.Tuple"];
  a = a["Data.Functor"];

  var f = function () {
    function l(h, b) {
      this.value0 = h;
      this.value1 = b;
    }

    l.create = function (h) {
      return function (b) {
        return new l(h, b);
      };
    };

    return l;
  }();

  a = new a.Functor(function (l) {
    return function (h) {
      return new f(h.value0, l(h.value1));
    };
  });
  d.Tuple = f;

  d.fst = function (l) {
    return l.value0;
  };

  d.snd = function (l) {
    return l.value1;
  };

  d.functorTuple = a;
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var d = a["Data.CatQueue"],
      f = a["Data.List"],
      l = a["Data.List.Types"],
      h = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = function () {
    function c(n, m) {
      this.value0 = n;
      this.value1 = m;
    }

    c.create = function (n) {
      return function (m) {
        return new c(n, m);
      };
    };

    return c;
  }();

  a = new e(l.Nil.value, l.Nil.value);
  d.empty = a;

  d["null"] = function (c) {
    return c.value0 instanceof l.Nil && c.value1 instanceof l.Nil ? !0 : !1;
  };

  d.snoc = function (c) {
    return function (n) {
      return new e(c.value0, new l.Cons(n, c.value1));
    };
  };

  d.uncons = function (c) {
    for (var n = !1, m; !n;) {
      if (m = c, m.value0 instanceof l.Nil && m.value1 instanceof l.Nil) n = !0, m = h.Nothing.value;else if (m.value0 instanceof l.Nil) c = new e(f.reverse(m.value1), l.Nil.value), m = void 0;else if (m.value0 instanceof l.Cons) n = !0, m = new h.Just(new b.Tuple(m.value0.value0, new e(m.value0.value1, m.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [m.constructor.name]);
    }

    return m;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var d = a["Data.CatList"],
      f = a["Data.CatQueue"],
      l = a["Data.List.Types"],
      h = a["Data.Maybe"],
      b = a["Data.Semigroup"],
      e = a["Data.Tuple"],
      c = function () {
    function q() {}

    q.value = new q();
    return q;
  }(),
      n = function () {
    function q(w, u) {
      this.value0 = w;
      this.value1 = u;
    }

    q.create = function (w) {
      return function (u) {
        return new q(w, u);
      };
    };

    return q;
  }(),
      m = function m(q) {
    return function (w) {
      if (q instanceof c) return w;
      if (w instanceof c) return q;
      if (q instanceof n) return new n(q.value0, f.snoc(q.value1)(w));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [q.constructor.name, w.constructor.name]);
    };
  },
      k = function k(q) {
    return function (w) {
      return function (u) {
        var z = function z(t) {
          return function (p) {
            return function (x) {
              for (var A = t, G = p, D = !1, H; !D;) {
                H = A;
                var E = G,
                    F = x;
                if (F instanceof l.Nil) D = !0, H = E;else {
                  if (F instanceof l.Cons) A = H, G = H(E)(F.value0), x = F.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [H.constructor.name, E.constructor.name, F.constructor.name]);
                  H = void 0;
                }
              }

              return H;
            };
          };
        };

        return function (t) {
          return function (p) {
            function x(H, E) {
              H = f.uncons(H);
              if (H instanceof h.Nothing) return G = !0, z(function (F) {
                return function (K) {
                  return K(F);
                };
              })(w)(E);
              if (H instanceof h.Just) A = H.value0.value1, p = new l.Cons(q(H.value0.value0), E);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [H.constructor.name]);
            }

            for (var A = t, G = !1, D; !G;) {
              D = x(A, p);
            }

            return D;
          };
        }(u)(l.Nil.value);
      };
    };
  };

  a = c.value;
  b = new b.Semigroup(m);
  d.empty = a;

  d.snoc = function (q) {
    return function (w) {
      return m(q)(new n(w, f.empty));
    };
  };

  d.uncons = function (q) {
    if (q instanceof c) return h.Nothing.value;

    if (q instanceof n) {
      var w = h.Just,
          u = e.Tuple,
          z = q.value0;
      q = f["null"](q.value1) ? c.value : k(m)(c.value)(q.value1);
      return new w(new u(z, q));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [q.constructor.name]);
  };

  d.semigroupCatList = b;
})(PS);

(function (a) {
  a.unsafeCoerce = function (d) {
    return d;
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
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.CatList"],
      c = a["Data.Either"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      k = a["Data.Semigroup"],
      q = a["Unsafe.Coerce"],
      w = function () {
    function H(E, F) {
      this.value0 = E;
      this.value1 = F;
    }

    H.create = function (E) {
      return function (F) {
        return new H(E, F);
      };
    };

    return H;
  }(),
      u = function () {
    function H(E) {
      this.value0 = E;
    }

    H.create = function (E) {
      return new H(E);
    };

    return H;
  }(),
      z = function () {
    function H(E, F) {
      this.value0 = E;
      this.value1 = F;
    }

    H.create = function (E) {
      return function (F) {
        return new H(E, F);
      };
    };

    return H;
  }(),
      t = function t(H) {
    function E(L) {
      var v = function v(T) {
        return function (B) {
          return new w(T.value0, k.append(e.semigroupCatList)(T.value1)(B));
        };
      };

      if (L.value0 instanceof u) {
        var M = e.uncons(L.value1);
        if (M instanceof m.Nothing) return F = !0, new u(L.value0.value0);

        if (M instanceof m.Just) {
          H = v((0, M.value0.value0)(L.value0.value0))(M.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [M.constructor.name]);
      }

      if (L.value0 instanceof z) return F = !0, new z(L.value0.value0, function (T) {
        return v(L.value0.value1(T))(L.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [L.value0.constructor.name]);
    }

    for (var F = !1, K; !F;) {
      K = E(H);
    }

    return K;
  },
      p = function p(H) {
    return function (E) {
      return function (F) {
        F = t(F);
        if (F instanceof u) return E(F.value0);
        if (F instanceof z) return H(F.value0)(F.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [F.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return D;
  }, function () {
    return A;
  });
  var x = new n.Functor(function (H) {
    return function (E) {
      return h.bindFlipped(A)(function () {
        var F = f.pure(D);
        return function (K) {
          return F(H(K));
        };
      }())(E);
    };
  }),
      A = new h.Bind(function () {
    return G;
  }, function (H) {
    return function (E) {
      return new w(H.value0, e.snoc(H.value1)(E));
    };
  }),
      G = new l.Apply(function () {
    return x;
  }, b.ap(a)),
      D = new f.Applicative(function () {
    return G;
  }, function (H) {
    return new w(u.create(H), e.empty);
  });

  d.wrap = function (H) {
    return new w(new z(H, q.unsafeCoerce), e.empty);
  };

  d.liftF = function (H) {
    return new w(new z(H, function () {
      var E = f.pure(D);
      return function (F) {
        return E(F);
      };
    }()), e.empty);
  };

  d.resume = function (H) {
    return p(function (E) {
      return function (F) {
        return new c.Left(n.map(H)(F)(E));
      };
    })(c.Right.create);
  };

  d["resume'"] = p;
  d.freeFunctor = x;
  d.freeBind = A;
  d.freeApplicative = D;
})(PS);

(function (a) {
  a["Control.MultiAlternative"] = a["Control.MultiAlternative"] || {};
  a = a["Control.MultiAlternative"];

  a.orr = function (d) {
    return d.orr;
  };

  a.MultiAlternative = function (d, f) {
    this.Plus0 = d;
    this.orr = f;
  };
})(PS);

(function (a) {
  a["Control.Parallel.Class"] = a["Control.Parallel.Class"] || {};
  a = a["Control.Parallel.Class"];

  a.parallel = function (d) {
    return d.parallel;
  };

  a.sequential = function (d) {
    return d.sequential;
  };

  a.Parallel = function (d, f, l, h) {
    this.Applicative1 = d;
    this.Monad0 = f;
    this.parallel = l;
    this.sequential = h;
  };
})(PS);

(function (a) {
  a["Control.ShiftMap"] = a["Control.ShiftMap"] || {};
  a = a["Control.ShiftMap"];

  a.shiftMap = function (d) {
    return d.shiftMap;
  };

  a.ShiftMap = function (d) {
    this.shiftMap = d;
  };
})(PS);

(function (a) {
  a.range = function (d) {
    return function (f) {
      for (var l = d > f ? -1 : 1, h = Array(l * (f - d) + 1), b = d, e = 0; b !== f;) {
        h[e++] = b, b += l;
      }

      h[e] = b;
      return h;
    };
  };

  a.fromFoldableImpl = function () {
    function d(h, b) {
      this.head = h;
      this.tail = b;
    }

    function f(h) {
      return function (b) {
        return new d(h, b);
      };
    }

    var l = {};
    return function (h) {
      return function (b) {
        var e = [],
            c = 0;

        for (b = h(f)(l)(b); b !== l;) {
          e[c++] = b.head, b = b.tail;
        }

        return e;
      };
    };
  }();

  a.length = function (d) {
    return d.length;
  };

  a.cons = function (d) {
    return function (f) {
      return [d].concat(f);
    };
  };

  a.snoc = function (d) {
    return function (f) {
      var l = d.slice();
      l.push(f);
      return l;
    };
  };

  a["uncons'"] = function (d) {
    return function (f) {
      return function (l) {
        return 0 === l.length ? d({}) : f(l[0])(l.slice(1));
      };
    };
  };

  a.indexImpl = function (d) {
    return function (f) {
      return function (l) {
        return function (h) {
          return 0 > h || h >= l.length ? f : d(l[h]);
        };
      };
    };
  };

  a._updateAt = function (d) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function (b) {
            if (0 > l || l >= b.length) return f;
            b = b.slice();
            b[l] = h;
            return d(b);
          };
        };
      };
    };
  };

  a.filter = function (d) {
    return function (f) {
      return f.filter(d);
    };
  };

  a.slice = function (d) {
    return function (f) {
      return function (l) {
        return l.slice(d, f);
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
      l = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Category"],
      n = a["Control.Lazy"],
      m = a["Data.Boolean"],
      k = a["Data.Foldable"],
      q = a["Data.Function"],
      w = a["Data.Functor"],
      u = a["Data.Maybe"];
  a = f._updateAt(u.Just.create)(u.Nothing.value);

  var z = f["uncons'"](q["const"](u.Nothing.value))(function (D) {
    return function (H) {
      return new u.Just({
        head: D,
        tail: H
      });
    };
  }),
      t = function t(D) {
    return [D];
  },
      p = function p(D) {
    return function (H) {
      return function (E) {
        return b.apply(D.Applicative0().Apply0())(w.map(D.Plus1().Alt0().Functor0())(f.cons)(E))(n.defer(H)(function (F) {
          return x(D)(H)(E);
        }));
      };
    };
  },
      x = function x(D) {
    return function (H) {
      return function (E) {
        return l.alt(D.Plus1().Alt0())(p(D)(H)(E))(h.pure(D.Applicative0())([]));
      };
    };
  },
      A = f.indexImpl(u.Just.create)(u.Nothing.value),
      G = q.flip(e.bind(e.bindArray));

  e = function (D) {
    return G(function () {
      var H = u.maybe([])(t);
      return function (E) {
        return H(D(E));
      };
    }());
  }(c.identity(c.categoryFn));

  d.fromFoldable = function (D) {
    return f.fromFoldableImpl(k.foldr(D));
  };

  d.singleton = t;
  d.some = p;

  d.head = function (D) {
    return A(D)(0);
  };

  d.init = function (D) {
    if (0 === f.length(D)) return u.Nothing.value;
    if (m.otherwise) return new u.Just(f.slice(0)(f.length(D) - 1 | 0)(D));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [D.constructor.name]);
  };

  d.uncons = z;
  d.updateAt = a;
  d.concatMap = G;
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
      l = a["Data.Boolean"],
      h = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var b = a.unsafeCoerce,
      e = a.unsafeCoerce,
      c = a.unsafeCoerce;

  a = function (m) {
    var k = h.fromJust();
    return function (q) {
      return k(m(c(q)));
    };
  }(f.uncons);

  var n = function (m) {
    return function (k) {
      return m(c(k));
    };
  }(f.length);

  d.fromArray = function (m) {
    if (0 < f.length(m)) return new h.Just(e(m));
    if (l.otherwise) return h.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [m.constructor.name]);
  };

  d.toArray = c;

  d.singleton = function (m) {
    return e(f.singleton(m));
  };

  d.length = n;

  d["cons'"] = function (m) {
    return function (k) {
      return e(f.cons(m)(k));
    };
  };

  d.snoc = function (m) {
    return function (k) {
      return e(f.snoc(c(m))(k));
    };
  };

  d.uncons = a;

  d.updateAt = function (m) {
    return function (k) {
      var q = f.updateAt(m)(k);
      return function (w) {
        return b(q(c(w)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (d) {
    return function (f) {
      for (var l = f[0], h = f.length, b = 1; b < h; b++) {
        l = d(l)(f[b]);
      }

      return l;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (d) {
    return function (f) {
      for (var l = f.length, h = Array(l), b = 0; b < l; b++) {
        h[b] = d(b)(f[b]);
      }

      return h;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var d = a["Data.FunctorWithIndex"],
      f = a["Data.Functor"];
  a = new function (l, h) {
    this.Functor0 = l;
    this.mapWithIndex = h;
  }(function () {
    return f.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  d.mapWithIndex = function (l) {
    return l.mapWithIndex;
  };

  d.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var d = a["Data.FoldableWithIndex"],
      f = a["Data.Foldable"],
      l = a["Data.FunctorWithIndex"],
      h = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = function () {
    function m(k, q) {
      this.value0 = k;
      this.value1 = q;
    }

    m.create = function (k) {
      return function (q) {
        return new m(k, q);
      };
    };

    return m;
  }(),
      c = function c(m) {
    return function (k) {
      return function (q) {
        return (0, m.foldrWithIndex)(function (w) {
          return function (u) {
            return function (z) {
              return b.append(k.Semigroup0())(q(w)(u))(z);
            };
          };
        })(h.mempty(k));
      };
    };
  },
      n = new function (m, k, q, w) {
    this.Foldable0 = m;
    this.foldMapWithIndex = k;
    this.foldlWithIndex = q;
    this.foldrWithIndex = w;
  }(function () {
    return f.foldableArray;
  }, function (m) {
    return c(n)(m);
  }, function (m) {
    return function (k) {
      var q = f.foldl(f.foldableArray)(function (u) {
        return function (z) {
          return m(z.value0)(u)(z.value1);
        };
      })(k),
          w = l.mapWithIndex(l.functorWithIndexArray)(e.create);
      return function (u) {
        return q(w(u));
      };
    };
  }, function (m) {
    return function (k) {
      var q = f.foldr(f.foldableArray)(function (u) {
        return function (z) {
          return m(u.value0)(u.value1)(z);
        };
      })(k),
          w = l.mapWithIndex(l.functorWithIndexArray)(e.create);
      return function (u) {
        return q(w(u));
      };
    };
  });

  d.foldlWithIndex = function (m) {
    return m.foldlWithIndex;
  };

  d.foldableWithIndexArray = n;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var d = a["Data.Semigroup.Foldable"],
      f = a["Data.Functor"];

  d.Foldable1 = function (l, h, b) {
    this.Foldable0 = l;
    this.fold1 = h;
    this.foldMap1 = b;
  };

  d.foldMap1 = function (l) {
    return l.foldMap1;
  };

  d.foldMap1Default = function (l) {
    return function (h) {
      return function (b) {
        return function (e) {
          var c = (0, l.fold1)(b),
              n = f.map(h)(e);
          return function (m) {
            return c(n(m));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a.traverseArrayImpl = function () {
    function d(b) {
      return [b];
    }

    function f(b) {
      return function (e) {
        return [b, e];
      };
    }

    function l(b) {
      return function (e) {
        return function (c) {
          return [b, e, c];
        };
      };
    }

    function h(b) {
      return function (e) {
        return b.concat(e);
      };
    }

    return function (b) {
      return function (e) {
        return function (c) {
          return function (n) {
            return function (m) {
              function k(q, w) {
                switch (w - q) {
                  case 0:
                    return c([]);

                  case 1:
                    return e(d)(n(m[q]));

                  case 2:
                    return b(e(f)(n(m[q])))(n(m[q + 1]));

                  case 3:
                    return b(b(e(l)(n(m[q])))(n(m[q + 1])))(n(m[q + 2]));

                  default:
                    var u = q + 2 * Math.floor((w - q) / 4);
                    return b(e(h)(k(q, u)))(k(u, w));
                }
              }

              return k(0, m.length);
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
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Foldable"],
      c = a["Data.Functor"],
      n = a["Data.Maybe"];

  a = function a(w, u, z, t) {
    this.Foldable1 = w;
    this.Functor0 = u;
    this.sequence = z;
    this.traverse = t;
  };

  var m = new a(function () {
    return e.foldableMaybe;
  }, function () {
    return n.functorMaybe;
  }, function (w) {
    return function (u) {
      if (u instanceof n.Nothing) return l.pure(w)(n.Nothing.value);
      if (u instanceof n.Just) return c.map(w.Apply0().Functor0())(n.Just.create)(u.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [u.constructor.name]);
    };
  }, function (w) {
    return function (u) {
      return function (z) {
        if (z instanceof n.Nothing) return l.pure(w)(n.Nothing.value);
        if (z instanceof n.Just) return c.map(w.Apply0().Functor0())(n.Just.create)(u(z.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [u.constructor.name, z.constructor.name]);
      };
    };
  }),
      k = function k(w) {
    return function (u) {
      return (0, w.traverse)(u)(b.identity(b.categoryFn));
    };
  },
      q = new a(function () {
    return e.foldableArray;
  }, function () {
    return c.functorArray;
  }, function (w) {
    return k(q)(w);
  }, function (w) {
    return f.traverseArrayImpl(h.apply(w.Apply0()))(c.map(w.Apply0().Functor0()))(l.pure(w));
  });

  d.traverse = function (w) {
    return w.traverse;
  };

  d.sequence = function (w) {
    return w.sequence;
  };

  d.traversableArray = q;
  d.traversableMaybe = m;
})(PS);

(function (a) {
  a.unfoldr1ArrayImpl = function (d) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function (b) {
            return function (e) {
              for (var c = [];;) {
                e = b(e);
                c.push(l(e));
                e = h(e);
                if (d(e)) return c;
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
  var d = a["Data.Unfoldable1"],
      f = a["Data.Boolean"],
      l = a["Data.Maybe"],
      h = a["Data.Tuple"];
  a = new function (e) {
    this.unfoldr1 = e;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(l.isNothing)(l.fromJust())(h.fst)(h.snd));

  var b = function b(e) {
    return function (c) {
      return function (n) {
        return (0, e.unfoldr1)(function (m) {
          if (0 >= m) return new h.Tuple(n, l.Nothing.value);
          if (f.otherwise) return new h.Tuple(n, new l.Just(m - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [m.constructor.name]);
        })(c - 1 | 0);
      };
    };
  };

  d.unfoldr1 = function (e) {
    return e.unfoldr1;
  };

  d.singleton = function (e) {
    return b(e)(1);
  };

  d.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var d = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Array.NonEmpty.Internal"],
      l = a["Data.Semigroup"],
      h = a["Data.Semigroup.Foldable"],
      b = a["Data.Unfoldable1"].unfoldable1Array,
      e = a["Data.Traversable"].traversableArray,
      c = l.semigroupArray,
      n = a["Data.Functor"].functorArray,
      m = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      k = a["Data.Foldable"].foldableArray,
      q = new h.Foldable1(function () {
    return k;
  }, function (w) {
    return f.fold1Impl(l.append(w));
  }, function (w) {
    return h.foldMap1Default(q)(n)(w);
  });
  d.semigroupNonEmptyArray = c;
  d.functorNonEmptyArray = n;
  d.foldableNonEmptyArray = k;
  d.foldableWithIndexNonEmptyArray = m;
  d.foldable1NonEmptyArray = q;
  d.unfoldable1NonEmptyArray = b;
  d.traversableNonEmptyArray = e;
})(PS);

(function (a) {
  a.pureE = function (d) {
    return function () {
      return d;
    };
  };

  a.bindE = function (d) {
    return function (f) {
      return function () {
        return f(d())();
      };
    };
  };
})(PS.Effect = PS.Effect || {});

(function (a) {
  a.Effect = a.Effect || {};
  var d = a.Effect,
      f = a.Effect,
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"],
      c = a["Data.Functor"],
      n = a["Data.Monoid"],
      m = a["Data.Semigroup"];
  a = new e.Monad(function () {
    return w;
  }, function () {
    return k;
  });
  var k = new b.Bind(function () {
    return q;
  }, f.bindE),
      q = new h.Apply(function () {
    return u;
  }, e.ap(a)),
      w = new l.Applicative(function () {
    return q;
  }, f.pureE),
      u = new c.Functor(l.liftA1(w));
  d.functorEffect = u;
  d.applyEffect = q;
  d.applicativeEffect = w;
  d.bindEffect = k;
  d.monadEffect = a;

  d.monoidEffect = function (z) {
    return new n.Monoid(function () {
      var t = z.Semigroup0();
      return new m.Semigroup(h.lift2(q)(m.append(t)));
    }, f.pureE(n.mempty(z)));
  };
})(PS);

(function (a) {
  var d = function () {
    function f() {
      this.last = this.head = null;
      this.size = 0;
    }

    function l(m, k) {
      this.queue = m;
      this.value = k;
      this.prev = this.next = null;
    }

    function h(m) {
      this.draining = !1;
      this.error = null;
      this.value = m;
      this.takes = new f();
      this.reads = new f();
      this.puts = new f();
    }

    function b(m) {
      try {
        m();
      } catch (k) {
        setTimeout(function () {
          throw k;
        }, 0);
      }
    }

    function e(m) {
      switch (m.size) {
        case 0:
          return null;

        case 1:
          var k = m.head;
          m.head = null;
          break;

        case 2:
          k = m.last;
          m.head.next = null;
          m.last = null;
          break;

        default:
          k = m.last, m.last = k.prev, m.last.next = null;
      }

      k.prev = null;
      k.queue = null;
      m.size--;
      return k.value;
    }

    function c(m) {
      switch (m.size) {
        case 0:
          return null;

        case 1:
          var k = m.head;
          m.head = null;
          break;

        case 2:
          k = m.head;
          m.last.prev = null;
          m.head = m.last;
          m.last = null;
          break;

        default:
          k = m.head, m.head = k.next, m.head.prev = null;
      }

      k.next = null;
      k.queue = null;
      m.size--;
      return k.value;
    }

    var n = {};
    h.EMPTY = n;

    h.putLast = function (m, k) {
      k = new l(m, k);

      switch (m.size) {
        case 0:
          m.head = k;
          break;

        case 1:
          k.prev = m.head;
          m.head.next = k;
          m.last = k;
          break;

        default:
          k.prev = m.last, m.last.next = k, m.last = k;
      }

      m.size++;
      return k;
    };

    h.takeLast = e;
    h.takeHead = c;

    h.deleteCell = function (m) {
      null !== m.queue && (m.queue.last === m ? e(m.queue) : m.queue.head === m ? c(m.queue) : (m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), m.queue.size--, m.queue = null, m.value = null, m.next = null, m.prev = null));
    };

    h.drainVar = function (m, k) {
      if (!k.draining) {
        var q = k.puts,
            w = k.takes,
            u = k.reads,
            z,
            t;

        for (k.draining = !0;;) {
          var p = z = null;
          var x = k.value;
          var A = u.size;

          if (null !== k.error) {
            for (x = m.left(k.error); z = c(q);) {
              b(z.cb(x));
            }

            for (; p = c(u);) {
              b(p(x));
            }

            for (; t = c(w);) {
              b(t(x));
            }

            break;
          }

          x === n && (z = c(q)) && (k.value = x = z.value);

          if (x !== n) {
            for (t = c(w); A-- && (p = c(u));) {
              b(p(m.right(x)));
            }

            null !== t && (k.value = n, b(t(m.right(x))));
          }

          null !== z && b(z.cb(m.right(void 0)));
          if (k.value === n && 0 === q.size || k.value !== n && 0 === w.size) break;
        }

        k.draining = !1;
      }
    };

    return h;
  }();

  a.empty = function () {
    return new d(d.EMPTY);
  };

  a._takeVar = function (f, l, h) {
    return function () {
      var b = d.putLast(l.takes, h);
      d.drainVar(f, l);
      return function () {
        d.deleteCell(b);
      };
    };
  };

  a._tryPutVar = function (f, l, h) {
    return function () {
      return h.value === d.EMPTY && null === h.error ? (h.value = l, d.drainVar(f, h), !0) : !1;
    };
  };

  a._tryTakeVar = function (f, l) {
    return function () {
      var h = l.value;
      if (h === d.EMPTY) return f.nothing;
      l.value = d.EMPTY;
      d.drainVar(f, l);
      return f.just(h);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var d = a["Effect.AVar"],
      f = a["Effect.AVar"],
      l = a["Data.Either"];
  a = a["Data.Maybe"];

  var h = function () {
    function n(m) {
      this.value0 = m;
    }

    n.create = function (m) {
      return new n(m);
    };

    return n;
  }(),
      b = function () {
    function n(m) {
      this.value0 = m;
    }

    n.create = function (m) {
      return new n(m);
    };

    return n;
  }(),
      e = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      c = {
    left: l.Left.create,
    right: l.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: h.create,
    filled: b.create,
    empty: e.value
  };

  d.take = function (n) {
    return function (m) {
      return f._takeVar(c, n, m);
    };
  };

  d.tryTake = function (n) {
    return f._tryTakeVar(c, n);
  };

  d.tryPut = function (n) {
    return function (m) {
      return f._tryPutVar(c, n, m);
    };
  };

  d.empty = f.empty;
})(PS);

(function (a) {
  var d = function () {
    function f(u, z, t, p) {
      this.tag = u;
      this._1 = z;
      this._2 = t;
      this._3 = p;
    }

    function l(u) {
      var z = function z(t, p, x) {
        return new f(u, t, p, x);
      };

      z.tag = u;
      return z;
    }

    function h(u) {
      return new f("Pure", void 0);
    }

    function b(u) {
      try {
        u();
      } catch (z) {
        setTimeout(function () {
          throw z;
        }, 0);
      }
    }

    function e(u, z, t) {
      try {
        return z(t());
      } catch (p) {
        return u(p);
      }
    }

    function c(u, z, t) {
      try {
        return z(t)();
      } catch (p) {
        return t(u(p))(), h;
      }
    }

    function n(u, z, t) {
      function p(N) {
        for (var I, V, O;;) {
          switch (O = V = I = null, G) {
            case 2:
              G = 1;

              try {
                D = F(D), null === K ? F = null : (F = K._1, K = K._2);
              } catch (aa) {
                G = 5, H = u.left(aa), D = null;
              }

              break;

            case 3:
              u.isLeft(D) ? (G = 5, H = D, D = null) : null === F ? G = 5 : (G = 2, D = u.fromRight(D));
              break;

            case 1:
              switch (D.tag) {
                case "Bind":
                  F && (K = new f("Cons", F, K));
                  F = D._2;
                  G = 1;
                  D = D._1;
                  break;

                case "Pure":
                  null === F ? (G = 5, D = u.right(D._1)) : (G = 2, D = D._1);
                  break;

                case "Sync":
                  G = 3;
                  D = e(u.left, u.right, D._1);
                  break;

                case "Async":
                  G = 4;
                  D = c(u.left, D._1, function (aa) {
                    return function () {
                      A === N && (A++, w.enqueue(function () {
                        A === N + 1 && (G = 3, D = aa, p(A));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  G = 5;
                  H = u.left(D._1);
                  D = null;
                  break;

                case "Catch":
                  L = null === F ? new f("Cons", D, L, E) : new f("Cons", D, new f("Cons", new f("Resume", F, K), L, E), E);
                  K = F = null;
                  G = 1;
                  D = D._1;
                  break;

                case "Bracket":
                  v++;
                  L = null === F ? new f("Cons", D, L, E) : new f("Cons", D, new f("Cons", new f("Resume", F, K), L, E), E);
                  K = F = null;
                  G = 1;
                  D = D._1;
                  break;

                case "Fork":
                  G = 3;
                  I = n(u, z, D._2);
                  z && z.register(I);
                  D._1 && I.run();
                  D = u.right(I);
                  break;

                case "Sequential":
                  G = 1, D = k(u, z, D._1);
              }

              break;

            case 5:
              K = F = null;
              if (null === L) G = 6, D = E || H || D;else switch (I = L._3, O = L._1, L = L._2, O.tag) {
                case "Catch":
                  E && E !== I && 0 === v ? G = 5 : H && (G = 1, D = O._2(u.fromLeft(H)), H = null);
                  break;

                case "Resume":
                  E && E !== I && 0 === v || H ? G = 5 : (F = O._1, K = O._2, G = 2, D = u.fromRight(D));
                  break;

                case "Bracket":
                  v--;
                  null === H && (V = u.fromRight(D), L = new f("Cons", new f("Release", O._2, V), L, I), E === I || 0 < v) && (G = 1, D = O._3(V));
                  break;

                case "Release":
                  L = new f("Cons", new f("Finalized", D, H), L, E);
                  G = 1;
                  D = E && E !== I && 0 === v ? O._1.killed(u.fromLeft(E))(O._2) : H ? O._1.failed(u.fromLeft(H))(O._2) : O._1.completed(u.fromRight(D))(O._2);
                  H = null;
                  v++;
                  break;

                case "Finalizer":
                  v++;
                  L = new f("Cons", new f("Finalized", D, H), L, E);
                  G = 1;
                  D = O._1;
                  break;

                case "Finalized":
                  v--, G = 5, D = O._1, H = O._2;
              }
              break;

            case 6:
              for (var r in T) {
                T.hasOwnProperty(r) && (B = B && T[r].rethrow, b(T[r].handler(D)));
              }

              T = null;
              E && H ? setTimeout(function () {
                throw u.fromLeft(H);
              }, 0) : u.isLeft(D) && B && setTimeout(function () {
                if (B) throw u.fromLeft(D);
              }, 0);
              return;

            case 0:
              G = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function x(N) {
        return function () {
          if (6 === G) return B = B && N.rethrow, N.handler(D)(), function () {};
          var I = M++;
          T = T || {};
          T[I] = N;
          return function () {
            null !== T && delete T[I];
          };
        };
      }

      var A = 0,
          G = 0,
          D = t,
          H = null,
          E = null,
          F = null,
          K = null,
          L = null,
          v = 0,
          M = 0,
          T = null,
          B = !0;
      return {
        kill: function kill(N, I) {
          return function () {
            if (6 === G) return I(u.right(void 0))(), function () {};
            var V = x({
              rethrow: !1,
              handler: function handler() {
                return I(u.right(void 0));
              }
            })();

            switch (G) {
              case 0:
                E = u.left(N);
                G = 6;
                D = E;
                p(A);
                break;

              case 4:
                null === E && (E = u.left(N));
                0 === v && (4 === G && (L = new f("Cons", new f("Finalizer", D(N)), L, E)), G = 5, H = D = null, p(++A));
                break;

              default:
                null === E && (E = u.left(N)), 0 === v && (G = 5, H = D = null);
            }

            return V;
          };
        },
        join: function join(N) {
          return function () {
            var I = x({
              rethrow: !1,
              handler: N
            })();
            0 === G && p(A);
            return I;
          };
        },
        onComplete: x,
        isSuspended: function isSuspended() {
          return 0 === G;
        },
        run: function run() {
          0 === G && (w.isDraining() ? p(A) : w.enqueue(function () {
            p(A);
          }));
        }
      };
    }

    function m(u, z, t, p) {
      function x(T, B, N) {
        var I = B,
            V = null,
            O = null,
            r = 0;
        B = {};

        a: for (;;) {
          var aa = null;

          switch (I.tag) {
            case "Forked":
              I._3 === q && (aa = E[I._1], B[r++] = aa.kill(T, function (ia) {
                return function () {
                  r--;
                  0 === r && N(ia)();
                };
              }));
              if (null === V) break a;
              I = V._2;
              null === O ? V = null : (V = O._1, O = O._2);
              break;

            case "Map":
              I = I._2;
              break;

            case "Apply":
            case "Alt":
              V && (O = new f("Cons", V, O)), V = I, I = I._1;
          }
        }

        if (0 === r) N(u.right(void 0))();else for (T = 0, aa = r; T < aa; T++) {
          B[T] = B[T]();
        }
        return B;
      }

      function A(T, B, N) {
        var I, V;

        if (u.isLeft(T)) {
          var O = T;
          var r = null;
        } else r = T, O = null;

        for (;;) {
          var aa = V = I = T = null;
          if (null !== v) break;

          if (null === B) {
            p(O || r)();
            break;
          }

          if (B._3 !== q) break;

          switch (B.tag) {
            case "Map":
              null === O ? (B._3 = u.right(B._1(u.fromRight(r))), r = B._3) : B._3 = O;
              break;

            case "Apply":
              T = B._1._3;
              I = B._2._3;

              if (O) {
                if (B._3 = O, V = !0, aa = F++, K[aa] = x(L, O === T ? B._2 : B._1, function () {
                  return function () {
                    delete K[aa];
                    V ? V = !1 : null === N ? A(O, null, null) : A(O, N._1, N._2);
                  };
                }), V) {
                  V = !1;
                  return;
                }
              } else {
                if (T === q || I === q) return;
                r = u.right(u.fromRight(T)(u.fromRight(I)));
                B._3 = r;
              }

              break;

            case "Alt":
              T = B._1._3;
              I = B._2._3;
              if (T === q && u.isLeft(I) || I === q && u.isLeft(T)) return;
              if (T !== q && u.isLeft(T) && I !== q && u.isLeft(I)) O = r === T ? I : T, r = null, B._3 = O;else if (B._3 = r, V = !0, aa = F++, K[aa] = x(L, r === T ? B._2 : B._1, function () {
                return function () {
                  delete K[aa];
                  V ? V = !1 : null === N ? A(r, null, null) : A(r, N._1, N._2);
                };
              }), V) {
                V = !1;
                return;
              }
          }

          null === N ? B = null : (B = N._1, N = N._2);
        }
      }

      function G(T) {
        return function (B) {
          return function () {
            delete E[T._1];
            T._3 = B;
            A(B, T._2._1, T._2._2);
          };
        };
      }

      function D(T, B) {
        v = u.left(T);
        var N;

        for (N in K) {
          if (K.hasOwnProperty(N)) {
            var I = K[N];

            for (N in I) {
              if (I.hasOwnProperty(N)) I[N]();
            }
          }
        }

        K = null;
        var V = x(T, M, B);
        return function (O) {
          return new f("Async", function (r) {
            return function () {
              for (var aa in V) {
                if (V.hasOwnProperty(aa)) V[aa]();
              }

              return h;
            };
          });
        };
      }

      var H = 0,
          E = {},
          F = 0,
          K = {},
          L = Error("[ParAff] Early exit"),
          v = null,
          M = q;

      (function () {
        var T = 1,
            B = t,
            N = null,
            I = null;

        a: for (;;) {
          switch (T) {
            case 1:
              switch (B.tag) {
                case "Map":
                  N && (I = new f("Cons", N, I));
                  N = new f("Map", B._1, q, q);
                  B = B._2;
                  break;

                case "Apply":
                  N && (I = new f("Cons", N, I));
                  N = new f("Apply", q, B._2, q);
                  B = B._1;
                  break;

                case "Alt":
                  N && (I = new f("Cons", N, I));
                  N = new f("Alt", q, B._2, q);
                  B = B._1;
                  break;

                default:
                  var V = H++;
                  T = 5;
                  var O = B;
                  B = new f("Forked", V, new f("Cons", N, I), q);
                  O = n(u, z, O);
                  O.onComplete({
                    rethrow: !1,
                    handler: G(B)
                  })();
                  E[V] = O;
                  z && z.register(O);
              }

              break;

            case 5:
              if (null === N) break a;
              N._1 === q ? (N._1 = B, T = 1, B = N._2, N._2 = q) : (N._2 = B, B = N, null === I ? N = null : (N = I._1, I = I._2));
          }
        }

        M = B;

        for (V = 0; V < H; V++) {
          E[V].run();
        }
      })();

      return function (T) {
        return new f("Async", function (B) {
          return function () {
            return D(T, B);
          };
        });
      };
    }

    function k(u, z, t) {
      return new f("Async", function (p) {
        return function () {
          return m(u, z, t, p);
        };
      });
    }

    var q = {},
        w = function () {
      function u() {
        for (x = !0; 0 !== z;) {
          z--;
          var A = p[t];
          p[t] = void 0;
          t = (t + 1) % 1024;
          A();
        }

        x = !1;
      }

      var z = 0,
          t = 0,
          p = Array(1024),
          x = !1;
      return {
        isDraining: function isDraining() {
          return x;
        },
        enqueue: function enqueue(A) {
          if (1024 === z) {
            var G = x;
            u();
            x = G;
          }

          p[(t + z) % 1024] = A;
          z++;
          x || u();
        }
      };
    }();

    f.EMPTY = q;
    f.Pure = l("Pure");
    f.Throw = l("Throw");
    f.Catch = l("Catch");
    f.Sync = l("Sync");
    f.Async = l("Async");
    f.Bind = l("Bind");
    f.Bracket = l("Bracket");
    f.Fork = l("Fork");
    f.Seq = l("Sequential");
    f.ParMap = l("Map");
    f.ParApply = l("Apply");
    f.ParAlt = l("Alt");
    f.Fiber = n;

    f.Supervisor = function (u) {
      var z = {},
          t = 0,
          p = 0;
      return {
        register: function register(x) {
          var A = t++;
          x.onComplete({
            rethrow: !0,
            handler: function handler(G) {
              return function () {
                p--;
                delete z[A];
              };
            }
          })();
          z[A] = x;
          p++;
        },
        isEmpty: function isEmpty() {
          return 0 === p;
        },
        killAll: function killAll(x, A) {
          return function () {
            function G(F) {
              H[F] = z[F].kill(x, function (K) {
                return function () {
                  delete H[F];
                  D--;
                  u.isLeft(K) && u.fromLeft(K) && setTimeout(function () {
                    throw u.fromLeft(K);
                  }, 0);
                  0 === D && A();
                };
              })();
            }

            if (0 === p) return A();
            var D = 0,
                H = {},
                E;

            for (E in z) {
              z.hasOwnProperty(E) && (D++, G(E));
            }

            z = {};
            p = t = 0;
            return function (F) {
              return new f("Sync", function () {
                for (var K in H) {
                  if (H.hasOwnProperty(K)) H[K]();
                }
              });
            };
          };
        }
      };
    };

    f.Scheduler = w;
    f.nonCanceler = h;
    return f;
  }();

  a._pure = d.Pure;
  a._throwError = d.Throw;

  a._catchError = function (f) {
    return function (l) {
      return d.Catch(f, l);
    };
  };

  a._map = function (f) {
    return function (l) {
      return l.tag === d.Pure.tag ? d.Pure(f(l._1)) : d.Bind(l, function (h) {
        return d.Pure(f(h));
      });
    };
  };

  a._bind = function (f) {
    return function (l) {
      return d.Bind(f, l);
    };
  };

  a._liftEffect = d.Sync;

  a._parAffMap = function (f) {
    return function (l) {
      return d.ParMap(f, l);
    };
  };

  a._parAffApply = function (f) {
    return function (l) {
      return d.ParApply(f, l);
    };
  };

  a._parAffAlt = function (f) {
    return function (l) {
      return d.ParAlt(f, l);
    };
  };

  a.makeAff = d.Async;

  a._makeFiber = function (f, l) {
    return function () {
      return d.Fiber(f, null, l);
    };
  };

  a._delay = function () {
    function f(l, h) {
      return 0 === l && "undefined" !== typeof setImmediate ? setImmediate(h) : setTimeout(h, l);
    }

    return function (l, h) {
      return d.Async(function (b) {
        return function () {
          var e = f(h, b(l()));
          return function () {
            return d.Sync(function () {
              var c = 0 === h && "undefined" !== typeof clearImmediate ? clearImmediate(e) : clearTimeout(e);
              return l(c);
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
      l = a["Data.Either"],
      h = a["Data.Functor"];

  d.catchError = function (b) {
    return b.catchError;
  };

  d.throwError = function (b) {
    return b.throwError;
  };

  d.MonadThrow = function (b, e) {
    this.Monad0 = b;
    this.throwError = e;
  };

  d.MonadError = function (b, e) {
    this.MonadThrow0 = b;
    this.catchError = e;
  };

  d["try"] = function (b) {
    return function (e) {
      return (0, b.catchError)(h.map(b.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(l.Right.create)(e))(function () {
        var c = f.pure(b.MonadThrow0().Monad0().Applicative0());
        return function (n) {
          return c(l.Left.create(n));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var d = a["Control.Category"],
      f = a["Control.Parallel.Class"],
      l = a["Data.Foldable"],
      h = function h(b) {
    return function (e) {
      return function (c) {
        var n = f.sequential(b),
            m = l.traverse_(b.Applicative1())(e)(function () {
          var k = f.parallel(b);
          return function (q) {
            return k(c(q));
          };
        }());
        return function (k) {
          return n(m(k));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (b) {
    return function (e) {
      return h(b)(e)(d.identity(d.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var d = a["Effect.Class"],
      f = a["Control.Category"],
      l = a.Effect;

  a = function a(h, b) {
    this.Monad0 = h;
    this.liftEffect = b;
  };

  f = new a(function () {
    return l.monadEffect;
  }, f.identity(f.categoryFn));

  d.liftEffect = function (h) {
    return h.liftEffect;
  };

  d.MonadEffect = a;
  d.monadEffectEffect = f;
})(PS);

(function (a) {
  a.showErrorImpl = function (d) {
    return d.stack || d.toString();
  };

  a.error = function (d) {
    return Error(d);
  };

  a.throwException = function (d) {
    return function () {
      throw d;
    };
  };

  a.catchException = function (d) {
    return function (f) {
      return function () {
        try {
          return f();
        } catch (l) {
          return l instanceof Error || "[object Error]" === Object.prototype.toString.call(l) ? d(l)() : d(Error(l.toString()))();
        }
      };
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var d = a["Effect.Exception"],
      f = a["Effect.Exception"],
      l = a["Control.Applicative"],
      h = a["Data.Either"],
      b = a["Data.Functor"],
      e = a.Effect;
  a = new a["Data.Show"].Show(f.showErrorImpl);

  d["throw"] = function (c) {
    return f.throwException(f.error(c));
  };

  d["try"] = function (c) {
    return f.catchException(function () {
      var n = l.pure(e.applicativeEffect);
      return function (m) {
        return n(h.Left.create(m));
      };
    }())(b.map(e.functorEffect)(h.Right.create)(c));
  };

  d.showError = a;
  d.error = f.error;
})(PS);

(function (a) {
  a.unsafePartial = function (d) {
    return d();
  };
})(PS["Partial.Unsafe"] = PS["Partial.Unsafe"] || {});

(function (a) {
  a.crashWith = function () {
    return function (d) {
      throw Error(d);
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

  a["Partial.Unsafe"].unsafeCrashWith = function (l) {
    return d.unsafePartial(function (h) {
      return f.crashWith()(l);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var d = a["Effect.Aff"],
      f = a["Effect.Aff"],
      l = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Monad"],
      n = a["Control.Monad.Error.Class"],
      m = a["Control.Parallel"],
      k = a["Control.Parallel.Class"],
      q = a["Control.Plus"],
      w = a["Data.Either"],
      u = a["Data.Foldable"],
      z = a["Data.Function"],
      t = a["Data.Functor"],
      p = a["Data.Monoid"],
      x = a["Data.Semigroup"],
      A = a["Data.Unit"],
      G = a.Effect,
      D = a["Effect.Class"],
      H = a["Effect.Exception"],
      E = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var F = new t.Functor(f._parAffMap),
      K = new t.Functor(f._map),
      L = function () {
    return {
      isLeft: function isLeft(ea) {
        if (ea instanceof w.Left) return !0;
        if (ea instanceof w.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [ea.constructor.name]);
      },
      fromLeft: function fromLeft(ea) {
        if (ea instanceof w.Left) return ea.value0;
        if (ea instanceof w.Right) return E.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [ea.constructor.name]);
      },
      fromRight: function fromRight(ea) {
        if (ea instanceof w.Right) return ea.value0;
        if (ea instanceof w.Left) return E.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [ea.constructor.name]);
      },
      left: w.Left.create,
      right: w.Right.create
    };
  }(),
      v = function v(ea) {
    return function () {
      var sa = f._makeFiber(L, ea)();

      sa.run();
      return sa;
    };
  },
      M = new b.Apply(function () {
    return F;
  }, f._parAffApply),
      T = new c.Monad(function () {
    return I;
  }, function () {
    return B;
  }),
      B = new e.Bind(function () {
    return N;
  }, f._bind),
      N = new b.Apply(function () {
    return K;
  }, c.ap(T)),
      I = new h.Applicative(function () {
    return N;
  }, f._pure),
      V = new D.MonadEffect(function () {
    return T;
  }, f._liftEffect);

  b = function () {
    var ea = D.liftEffect(V);
    return function (sa) {
      return z["const"](ea(sa));
    };
  }();

  var O = new n.MonadThrow(function () {
    return T;
  }, f._throwError),
      r = new n.MonadError(function () {
    return O;
  }, f._catchError),
      aa = function aa(ea) {
    return function (sa) {
      return v(e.bindFlipped(B)(function () {
        var ca = D.liftEffect(V);
        return function (Q) {
          return ca(ea(Q));
        };
      }())(n["try"](r)(sa)));
    };
  },
      ia = new k.Parallel(function () {
    return ka;
  }, function () {
    return T;
  }, a.unsafeCoerce, f._sequential),
      ka = new h.Applicative(function () {
    return M;
  }, function () {
    var ea = k.parallel(ia),
        sa = h.pure(I);
    return function (ca) {
      return ea(sa(ca));
    };
  }()),
      qa = new x.Semigroup(function (ea) {
    return function (sa) {
      return function (ca) {
        return m.parSequence_(ia)(u.foldableArray)([ea(ca), sa(ca)]);
      };
    };
  });

  x = z["const"](h.pure(I)(A.unit));
  var ua = new p.Monoid(function () {
    return qa;
  }, x);
  x = f.makeAff(function (ea) {
    return h.pure(G.applicativeEffect)(p.mempty(ua));
  });
  var ra = new l.Alt(function () {
    return F;
  }, f._parAffAlt),
      wa = new l.Alt(function () {
    return K;
  }, function (ea) {
    return function (sa) {
      return n.catchError(r)(ea)(z["const"](sa));
    };
  });
  l = new q.Plus(function () {
    return wa;
  }, n.throwError(O)(H.error("Always fails")));
  q = new q.Plus(function () {
    return ra;
  }, k.parallel(ia)(q.empty(l)));

  d.runAff_ = function (ea) {
    return function (sa) {
      return t["void"](G.functorEffect)(aa(ea)(sa));
    };
  };

  d.delay = function (ea) {
    return f._delay(w.Right.create, ea);
  };

  d.never = x;
  d.effectCanceler = b;
  d.functorAff = K;
  d.applicativeAff = I;
  d.bindAff = B;
  d.monadEffectAff = V;
  d.altParAff = ra;
  d.plusParAff = q;
  d.parallelAff = ia;
  d.monoidCanceler = ua;
  d.makeAff = f.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var d = a["Effect.AVar"],
      f = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (l) {
    return f.makeAff(function (h) {
      return function () {
        var b = d.take(l)(h)();
        return f.effectCanceler(b);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var d = a["Effect.Aff.Class"],
      f = a["Control.Category"],
      l = a["Effect.Aff"];

  a = function a(h, b) {
    this.MonadEffect0 = h;
    this.liftAff = b;
  };

  f = new a(function () {
    return l.monadEffectAff;
  }, f.identity(f.categoryFn));

  d.liftAff = function (h) {
    return h.liftAff;
  };

  d.MonadAff = a;
  d.monadAffAff = f;
})(PS);

(function (a) {
  a.log = function (d) {
    return function () {
      console.log(d);
      return {};
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});

(function (a) {
  a["Effect.Console"] = a["Effect.Console"] || {};
  a["Effect.Console"].log = a["Effect.Console"].log;
})(PS);

(function (a) {
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};
  var d = a["Concur.Core.Types"],
      f = a["Control.Alt"],
      l = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Category"],
      c = a["Control.Monad"],
      n = a["Control.Monad.Free"],
      m = a["Control.MultiAlternative"],
      k = a["Control.Parallel.Class"],
      q = a["Control.Plus"],
      w = a["Data.Array.NonEmpty"],
      u = a["Data.Array.NonEmpty.Internal"],
      z = a["Data.Either"],
      t = a["Data.FoldableWithIndex"],
      p = a["Data.Functor"],
      x = a["Data.Maybe"],
      A = a["Data.Monoid"],
      G = a["Data.Semigroup"],
      D = a["Data.Semigroup.Foldable"],
      H = a["Data.Show"],
      E = a["Data.Tuple"],
      F = a.Effect,
      K = a["Effect.AVar"],
      L = a["Effect.Aff"],
      v = a["Effect.Aff.AVar"],
      M = a["Effect.Aff.Class"],
      T = a["Effect.Class"],
      B = a["Effect.Console"],
      N = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (P) {
    return P(e.identity(e.categoryFn));
  });

  var I = n.freeFunctor,
      V = n.freeBind,
      O = n.freeApplicative,
      r = new c.Monad(function () {
    return O;
  }, function () {
    return V;
  }),
      aa = function aa(P) {
    return P;
  },
      ia = function ia(P) {
    return n["resume'"](function (C) {
      return function (U) {
        return new z.Right(p.map(P)(U)(C));
      };
    })(z.Left.create);
  },
      ka = new p.Functor(function (P) {
    return function (C) {
      if (C instanceof z.Right) C = new z.Right({
        cont: p.map(L.functorAff)(P)(C.value0.cont),
        view: C.value0.view
      });else if (C instanceof z.Left) C = new z.Left(p.map(F.functorEffect)(P)(C.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [C.constructor.name]);
      return C;
    };
  }),
      qa = function qa(P) {
    return n.liftF(z.Left.create(P));
  },
      ua = function ua(P) {
    return new T.MonadEffect(function () {
      return r;
    }, qa);
  },
      ra = function ra(P) {
    return n.liftF(new z.Right({
      view: P,
      cont: L.never
    }));
  },
      wa = function wa(P) {
    return new G.Semigroup(function (C) {
      return function (U) {
        return m.orr(sa(P))([C, U]);
      };
    });
  },
      ea = function ea(P) {
    return new q.Plus(function () {
      return ca(P);
    }, ra(A.mempty(P)));
  },
      sa = function sa(P) {
    return new m.MultiAlternative(function () {
      return ea(P);
    }, function (C) {
      var U = function U(y) {
        return function (W) {
          return function (Z) {
            var ba = p.map(u.functorNonEmptyArray)(function (na) {
              return n.wrap(z.Right.create(na));
            })(W);
            return b.bind(L.bindAff)(k.sequential(L.parallelAff)(t.foldlWithIndex(u.foldableWithIndexNonEmptyArray)(function (na) {
              return function (pa) {
                return function (Da) {
                  return f.alt(L.altParAff)(k.parallel(L.parallelAff)(p.map(L.functorAff)(E.Tuple.create(na))(Da)))(pa);
                };
              };
            })(q.empty(L.plusParAff))(Z)))(function (na) {
              return h.pure(L.applicativeAff)(fa(y)(x.fromMaybe(ba)(w.updateAt(na.value0)(na.value1)(ba))));
            });
          };
        };
      },
          R = function R(y) {
        return function (W) {
          return n.wrap(new z.Right({
            view: D.foldMap1(u.foldable1NonEmptyArray)(y.Semigroup0())(function (Z) {
              return Z.view;
            })(W),
            cont: U(y)(W)(p.map(u.functorNonEmptyArray)(function (Z) {
              return Z.cont;
            })(W))
          }));
        };
      },
          J = function J(y) {
        return function (W) {
          return function (Z) {
            var ba = w.uncons(Z),
                na = ia(ka)(ba.head);
            if (na instanceof z.Left) return h.pure(n.freeApplicative)(na.value0);

            if (na instanceof z.Right) {
              if (na.value0 instanceof z.Left) return n.wrap(new z.Left(function () {
                var pa = na.value0.value0();
                return J(y)(W)(w["cons'"](pa)(ba.tail));
              }));
              if (na.value0 instanceof z.Right) return ja(y)(w.snoc(W)(na.value0.value0))(ba.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [na.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [na.constructor.name]);
          };
        };
      },
          ja = function ja(y) {
        return function (W) {
          return function (Z) {
            Z = w.fromArray(Z);
            if (Z instanceof x.Nothing) return R(y)(W);
            if (Z instanceof x.Just) return J(y)(W)(Z.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [Z.constructor.name]);
          };
        };
      },
          fa = function fa(y) {
        return function (W) {
          var Z = w.uncons(W),
              ba = ia(ka)(Z.head);
          if (ba instanceof z.Left) return h.pure(n.freeApplicative)(ba.value0);

          if (ba instanceof z.Right) {
            if (ba.value0 instanceof z.Left) return n.wrap(new z.Left(function () {
              var na = ba.value0.value0();
              return fa(y)(w["cons'"](na)(Z.tail));
            }));
            if (ba.value0 instanceof z.Right) return ja(y)(w.singleton(ba.value0.value0))(Z.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [ba.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [ba.constructor.name]);
        };
      };

      C = w.fromArray(C);
      if (C instanceof x.Just) return fa(P)(p.map(u.functorNonEmptyArray)(aa)(C.value0));
      if (C instanceof x.Nothing) return q.empty(ea(P));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [C.constructor.name]);
    });
  },
      ca = function ca(P) {
    return new f.Alt(function () {
      return I;
    }, G.append(wa(P)));
  },
      Q = function Q(P) {
    return function (C) {
      var U = function U(R) {
        return function (J) {
          if (J instanceof z.Left) return B.log("Aff failed - " + H.show(N.showError)(J.value0));
          if (J instanceof z.Right) return p["void"](F.functorEffect)(K.tryPut(J.value0)(R));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [R.constructor.name, J.constructor.name]);
        };
      };

      return n.wrap(new z.Left(function () {
        var R = K.empty();
        L.runAff_(U(R))(C)();
        var J = K.tryTake(R)();
        if (J instanceof x.Just) return h.pure(n.freeApplicative)(J.value0);
        if (J instanceof x.Nothing) return n.liftF(new z.Right({
          view: P,
          cont: v.take(R)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [J.constructor.name]);
      }));
    };
  };

  d.WidgetStep = function (P) {
    return P;
  };

  d.Widget = function (P) {
    return P;
  };

  d.unWidget = aa;
  d.resume = ia;
  d.display = ra;
  d.functorWidgetStep = ka;
  d.widgetFunctor = I;
  d.widgetBind = V;
  d.widgetApplicative = O;
  d.widgetShiftMap = a;
  d.widgetMultiAlternative = sa;

  d.widgetMonoid = function (P) {
    return new A.Monoid(function () {
      return wa(P);
    }, q.empty(ea(P)));
  };

  d.widgetAlt = ca;
  d.widgetPlus = ea;

  d.widgetAlternative = function (P) {
    return new l.Alternative(function () {
      return O;
    }, function () {
      return ea(P);
    });
  };

  d.widgetMonadEff = ua;

  d.widgetMonadAff = function (P) {
    return new M.MonadAff(function () {
      return ua(P);
    }, Q(A.mempty(P)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var d = a["Concur.Core"],
      f = a["Concur.Core.Types"],
      l = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Monad.Free"],
      e = a["Control.Parallel.Class"],
      c = a["Data.Either"],
      n = a["Data.Functor"],
      m = a.Effect,
      k = a["Effect.AVar"],
      q = a["Effect.Aff"],
      w = a["Effect.Aff.AVar"],
      u = a["Effect.Aff.Class"],
      z = function z(t) {
    return function (p) {
      var x = f.resume(f.functorWidgetStep)(p);
      if (x instanceof c.Left) return h.pure(b.freeApplicative)(x.value0);

      if (x instanceof c.Right) {
        if (x.value0 instanceof c.Left) return b.wrap(f.WidgetStep(new c.Left(function () {
          var A = x.value0.value0();
          return z(t)(A);
        })));
        if (x.value0 instanceof c.Right) return b.wrap(f.WidgetStep(new c.Left(function () {
          var A = k.empty(),
              G = e.sequential(q.parallelAff)(l.alt(q.altParAff)(e.parallel(q.parallelAff)(u.liftAff(u.monadAffAff)(w.take(A))))(e.parallel(q.parallelAff)(n.map(q.functorAff)(z(t))(x.value0.value0.cont))));
          return b.wrap(f.WidgetStep(new c.Right({
            view: t(function (D) {
              return n["void"](m.functorEffect)(k.tryPut(h.pure(b.freeApplicative)(D))(A));
            })(x.value0.value0.view),
            cont: G
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [x.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [x.constructor.name]);
    };
  };

  d.mkLeafWidget = function (t) {
    return f.Widget(b.wrap(f.WidgetStep(new c.Left(function () {
      var p = k.empty();
      return b.wrap(f.WidgetStep(new c.Right({
        view: t(function (x) {
          return n["void"](m.functorEffect)(k.tryPut(h.pure(b.freeApplicative)(x))(p));
        }),
        cont: u.liftAff(u.monadAffAff)(w.take(p))
      })));
    }))));
  };

  d.mkNodeWidget = function (t) {
    return function (p) {
      return z(t)(p);
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var d = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (f) {
    this.liftWidget = f;
  }(a.identity(a.categoryFn));

  d.liftWidget = function (f) {
    return f.liftWidget;
  };

  d.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var d = a["Concur.Core.Props"];
  a = a["Data.Functor"];

  var f = function () {
    function h(b) {
      this.value0 = b;
    }

    h.create = function (b) {
      return new h(b);
    };

    return h;
  }(),
      l = function () {
    function h(b) {
      this.value0 = b;
    }

    h.create = function (b) {
      return new h(b);
    };

    return h;
  }();

  a = new a.Functor(function (h) {
    return function (b) {
      if (b instanceof f) return new f(b.value0);
      if (b instanceof l) return new l(function (e) {
        return b.value0(function (c) {
          return e(h(c));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [h.constructor.name, b.constructor.name]);
    };
  });
  d.PrimProp = f;
  d.Handler = l;

  d.mkProp = function (h) {
    return function (b) {
      if (b instanceof f) return b.value0;
      if (b instanceof l) return b.value0(h);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [h.constructor.name, b.constructor.name]);
    };
  };

  d.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var d = a["Concur.Core.DOM"],
      f = a["Concur.Core"],
      l = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Control.MultiAlternative"],
      e = a["Control.ShiftMap"],
      c = a["Data.Functor"],
      n = function n(m) {
    return function (k) {
      return function (q) {
        return function (w) {
          return e.shiftMap(m)(function (u) {
            return function (z) {
              return f.mkNodeWidget(function (t) {
                return function (p) {
                  return q(c.map(k)(function () {
                    var x = h.mkProp(t),
                        A = c.map(h.functorProps)(u);
                    return function (G) {
                      return x(A(G));
                    };
                  }())(w))(p);
                };
              })(z);
            };
          });
        };
      };
    };
  };

  d.el = n;

  d.elLeaf = function (m) {
    return function (k) {
      return function (q) {
        return function (w) {
          return l.liftWidget(m)(f.mkLeafWidget(function (u) {
            return q(c.map(k)(h.mkProp(u))(w));
          }));
        };
      };
    };
  };

  d["el'"] = function (m) {
    return function (k) {
      return function (q) {
        return function (w) {
          return function (u) {
            var z = n(m)(q)(w)(u),
                t = b.orr(k);
            return function (p) {
              return z(t(p));
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
      l = a["Control.Applicative"],
      h = a["Control.Monad.Free"],
      b = a["Data.Either"],
      e = a["Data.Functor"],
      c = a["Data.Monoid"],
      n = a["Data.Tuple"],
      m = a.Effect,
      k = a["Effect.Aff"],
      q = function q(u) {
    return function (z) {
      var t = h.resume(f.functorWidgetStep)(f.unWidget(z));
      if (t instanceof b.Right) return l.pure(m.applicativeEffect)(new n.Tuple(z, c.mempty(u)));

      if (t instanceof b.Left) {
        if (t.value0 instanceof b.Left) return function () {
          var p = t.value0.value0();
          return q(u)(p)();
        };
        if (t.value0 instanceof b.Right) return l.pure(m.applicativeEffect)(new n.Tuple(h.wrap(new b.Right(t.value0.value0)), t.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [t.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [t.constructor.name]);
    };
  },
      w = function w(u) {
    return function (z) {
      return function (t) {
        var p = h.resume(f.functorWidgetStep)(t);
        if (p instanceof b.Right) return l.pure(m.applicativeEffect)(c.mempty(u));

        if (p instanceof b.Left) {
          if (p.value0 instanceof b.Left) return function () {
            var x = p.value0.value0();
            return w(u)(z)(x)();
          };
          if (p.value0 instanceof b.Right) return function () {
            k.runAff_(function () {
              var x = e.map(b.functorEither)(f.Widget);
              return function (A) {
                return z(x(A));
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

  d.discharge = w;
  d.dischargePartialEffect = q;
})(PS);

(function (a) {
  a["Control.Comonad"] = a["Control.Comonad"] || {};
  a = a["Control.Comonad"];

  a.Comonad = function (d, f) {
    this.Extend0 = d;
    this.extract = f;
  };

  a.extract = function (d) {
    return d.extract;
  };
})(PS);

(function (a) {
  a["Control.Extend"] = a["Control.Extend"] || {};

  a["Control.Extend"].Extend = function (d, f) {
    this.Functor0 = d;
    this.extend = f;
  };
})(PS);

(function (a) {
  a.defer = function (d) {
    var f = null;
    return function () {
      if (void 0 === d) return f;
      f = d();
      d = void 0;
      return f;
    };
  };

  a.force = function (d) {
    return d();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var d = a["Data.Lazy"],
      f = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (l) {
    return function (h) {
      return f.defer(function (b) {
        return l(f.force(h));
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
      l = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Comonad"],
      n = a["Control.Extend"],
      m = a["Control.Monad"],
      k = a["Control.Plus"],
      q = a["Control.ShiftMap"],
      w = a["Data.Functor"],
      u = a["Data.Lazy"],
      z = a["Data.Tuple"],
      t = function t(K) {
    return z.snd(u.force(K));
  },
      p = function p(K) {
    return function (L) {
      return u.defer(function (v) {
        return new z.Tuple(K, L);
      });
    };
  },
      x = function x(K) {
    return z.fst(u.force(K));
  },
      A = function A(K) {
    return new w.Functor(function (L) {
      var v = function v(M) {
        return w.map(u.functorLazy)(function (T) {
          return new z.Tuple(L(T.value0), w.map(K)(v)(T.value1));
        })(M);
      };

      return v;
    });
  },
      G = function G(K) {
    return new n.Extend(function () {
      return A(K);
    }, function (L) {
      var v = function v(M) {
        return w.map(u.functorLazy)(function (T) {
          return new z.Tuple(L(M), w.map(K)(v)(T.value1));
        })(M);
      };

      return v;
    });
  },
      D = function D(K) {
    return new m.Monad(function () {
      return F(K);
    }, function () {
      return H(K);
    });
  },
      H = function H(K) {
    return new e.Bind(function () {
      return E(K);
    }, function (L) {
      return function (v) {
        var M = function M(B) {
          return function (N) {
            var I = w.map(K.Plus1().Alt0().Functor0())(M(B))(t(N)),
                V = w.map(K.Plus1().Alt0().Functor0())(T)(t(B));
            return p(x(N))(l.alt(K.Plus1().Alt0())(V)(I));
          };
        },
            T = function T(B) {
          return M(B)(v(x(B)));
        };

        return T(L);
      };
    });
  },
      E = function E(K) {
    return new b.Apply(function () {
      return A(K.Plus1().Alt0().Functor0());
    }, m.ap(D(K)));
  },
      F = function F(K) {
    return new h.Applicative(function () {
      return E(K);
    }, function (L) {
      return p(L)(k.empty(K.Plus1()));
    });
  };

  d.mkCofree = p;
  d.tail = t;

  d.comonadCofree = function (K) {
    return new c.Comonad(function () {
      return G(K);
    }, x);
  };

  d.applicativeCofree = F;
  d.bindCofree = H;

  d.shiftMapCofree = function (K) {
    return new q.ShiftMap(function (L) {
      return function (v) {
        return u.defer(function (M) {
          M = u.force(v);
          return new z.Tuple(M.value0, L(h.pure(F(f.widgetAlternative(K))))(M.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var d = a["Concur.Core.FRP"],
      f = a["Concur.Core.Types"],
      l = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Cofree"],
      c = a["Control.Comonad"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      k = a["Data.Unit"],
      q = a["Effect.Aff"],
      w = a["Effect.Aff.Class"],
      u = e.tail,
      z = e.mkCofree,
      t = function t(A) {
    return function (G) {
      return z(A)(n.map(f.widgetFunctor)(function (D) {
        return t(D)(G);
      })(G(A)));
    };
  },
      p = function p(A) {
    return function (G) {
      return function (D) {
        var H = D(G);
        return z(c.extract(e.comonadCofree(f.widgetFunctor))(H))(b.bind(f.widgetBind)(u(H))(function (E) {
          return h.pure(f.widgetApplicative)(p(A)(c.extract(e.comonadCofree(f.widgetFunctor))(E))(D));
        }));
      };
    };
  },
      x = function x(A) {
    return b.bind(f.widgetBind)(u(A))(x);
  };

  d.step = z;

  d.display = function (A) {
    return z(k.unit)(A);
  };

  d.loopW = t;
  d.loopS = p;
  d.dyn = x;

  d.debounce = function (A) {
    return function (G) {
      return function (D) {
        return function (H) {
          var E = function E(K) {
            return function (L) {
              return b.bind(f.widgetBind)(l.alt(f.widgetAlt(A))(n.map(f.widgetFunctor)(m.Just.create)(L(K)))(n.voidRight(f.widgetFunctor)(m.Nothing.value)(w.liftAff(f.widgetMonadAff(A))(q.delay(G)))))(function (v) {
                if (v instanceof m.Nothing) return h.pure(f.widgetApplicative)(F(K)(L));
                if (v instanceof m.Just) return E(v.value0)(L);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [v.constructor.name]);
              });
            };
          },
              F = function F(K) {
            return function (L) {
              return z(K)(b.bind(f.widgetBind)(L(K))(function (v) {
                return E(v)(L);
              }));
            };
          };

          return F(D)(H);
        };
      };
    };
  };
})(PS);

(function (a) {
  function d(h) {
    return function (b) {
      return function (e) {
        return f.createElement.apply(f, [h, b].concat(e));
      };
    };
  }

  var f = require("react"),
      l = function (h) {
    function b(e, c, n) {
      switch (c) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          e[c] = n;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          e[c] = function (m, k) {
            return n(m)(k)();
          };

          break;

        case "componentDidUpdate":
          e[c] = function (m, k, q) {
            return n(m)(k)(q)();
          };

          break;

        case "unsafeComponentWillMount":
          e.UNSAFE_componentWillMount = n;
          break;

        case "unsafeComponentWillReceiveProps":
          e.UNSAFE_componentWillReceiveProps = function (m) {
            return n(m)();
          };

          break;

        case "unsafeComponentWillUpdate":
          e.UNSAFE_componentWillUpdate = function (m, k) {
            return n(m)(k)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + c);
      }
    }

    return function (e) {
      return function (c) {
        var n = function n(m) {
          h.call(this, m);
          m = c(this)();

          for (var k in m) {
            b(this, k, m[k]);
          }
        };

        n.displayName = e;
        n.prototype = Object.create(h.prototype);
        return n.prototype.constructor = n;
      };
    };
  }(f.Component);

  a.componentImpl = l;
  a.fragment = f.Fragment;

  a.setStateImpl = function (h) {
    return function (b) {
      return function () {
        h.setState(b);
      };
    };
  };

  a.getState = function (h) {
    return function () {
      if (!h.state) throw Error("[purescript-react] Cannot get state within constructor");
      return h.state;
    };
  };

  a.createElementImpl = d;
  a.createElementTagName = d;

  a.createLeafElementImpl = function (h) {
    return function (b) {
      return f.createElement(h, b);
    };
  };

  a.createElementTagNameDynamic = function (h) {
    return function (b) {
      return function (e) {
        return f.createElement(h, b, e);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var d = a.React,
      f = a.React;
  a = f.setStateImpl;
  var l = new function (h) {
    this.toElement = h;
  }((0, f.createElementImpl)(f.fragment)({}));

  d.component = function (h) {
    return f.componentImpl;
  };

  d.writeState = a;

  d.createLeafElement = function (h) {
    return f.createLeafElementImpl;
  };

  d.toElement = function (h) {
    return h.toElement;
  };

  d.isReactElementArray = l;
  d.getState = f.getState;
  d.createElementTagName = f.createElementTagName;
  d.createElementTagNameDynamic = f.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var d = a["Concur.React"],
      f = a["Concur.Core.Discharge"],
      l = a["Control.Apply"],
      h = a["Data.Either"],
      b = a["Data.Functor"],
      e = a["Data.Monoid"],
      c = a["Data.Show"],
      n = a["Data.Unit"],
      m = a.Effect,
      k = a["Effect.Console"],
      q = a["Effect.Exception"],
      w = a.React,
      u = function (z) {
    return function (t) {
      var p = function p(A) {
        return w.toElement(w.isReactElementArray)(A.view);
      },
          x = function x(A) {
        return function (G) {
          if (G instanceof h.Right) return function () {
            var D = f.discharge(e.monoidArray)(x(A))(G.value0)();
            return b["void"](m.functorEffect)(w.writeState(A)({
              view: D
            }))();
          };
          if (G instanceof h.Left) return function () {
            k.log("FAILED! " + c.show(q.showError)(G.value0))();
            return n.unit;
          };
          throw Error("Failed pattern match at Concur.React (line 32, column 5 - line 34, column 52): " + [A.constructor.name, G.constructor.name]);
        };
      };

      return w.component()("Concur")(function (A) {
        return function () {
          var G = f.dischargePartialEffect(e.monoidArray)(t)();
          return {
            state: {
              view: G.value1
            },
            render: b.map(m.functorEffect)(p)(w.getState(A)),
            componentDidMount: l.applySecond(m.applyEffect)(z)(x(A)(new h.Right(G.value0)))
          };
        };
      });
    };
  }(e.mempty(m.monoidEffect(e.monoidUnit)));

  d.renderComponent = function (z) {
    return w.createLeafElement()(u(z))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (d) {
    return function (f) {
      var l = {};
      l[d] = f;
      return l;
    };
  };

  a.unsafeUnfoldProps = function (d) {
    return function (f) {
      var l = {},
          h = {};
      h[d] = l;

      for (var b in f) {
        f.hasOwnProperty(b) && (l[b] = f[b]);
      }

      return h;
    };
  };

  a.unsafeFromPropsArray = function (d) {
    for (var f = {}, l = 0, h = d.length; l < h; l++) {
      var b = d[l],
          e;

      for (e in b) {
        b.hasOwnProperty(e) && (f[e] = b[e]);
      }
    }

    return f;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (d) {
    return function (f) {
      return d(f)();
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
      l = a["Effect.Uncurried"];
  a = f.unsafeMkProps("value");
  var h = f.unsafeMkProps("target"),
      b = f.unsafeUnfoldProps("style"),
      e = f.unsafeMkProps("href"),
      c = f.unsafeMkProps("disabled"),
      n = f.unsafeMkProps("defaultValue"),
      m = f.unsafeMkProps("className"),
      k = f.unsafeMkProps("checked"),
      q = f.unsafeMkProps("type");
  d.style = b;
  d.checked = k;
  d.className = m;
  d.defaultValue = n;
  d.disabled = c;
  d.href = e;
  d.target = h;
  d._type = q;
  d.value = a;

  d.onChange = function (w) {
    return f.unsafeMkProps("onChange")(l.mkEffectFn1(w));
  };

  d.onClick = function (w) {
    return f.unsafeMkProps("onClick")(l.mkEffectFn1(w));
  };

  d.unsafeFromPropsArray = f.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var d = a["React.DOM"],
      f = a.React,
      l = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var h = function h(z) {
    return function (t) {
      return function (p) {
        if (z) {
          if (z) var x = f.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [z.constructor.name]);
        } else x = f.createElementTagName;
        return x(t)(l.unsafeFromPropsArray(p));
      };
    };
  },
      b = h(!1)("option"),
      e = h(!1)("select"),
      c = h(!1)("span"),
      n = h(!1)("ul"),
      m = h(!1)("li"),
      k = h(!1)("div"),
      q = h(!1)("cite"),
      w = h(!1)("button"),
      u = h(!1)("a");

  d.text = a;
  d.a = u;

  d.br = function (z) {
    return h(!1)("br")(z)([]);
  };

  d.button = w;
  d.cite = q;
  d.div = k;

  d.input = function (z) {
    return h(!1)("input")(z)([]);
  };

  d.li = m;
  d.option = b;
  d.select = e;
  d.span = c;
  d.ul = n;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var d = a["Concur.React.DOM"],
      f = a["Concur.Core.DOM"],
      l = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      b = a["Data.Functor"],
      e = a["React.DOM"],
      c = function c(t) {
    return function (p) {
      return function (x) {
        return [t(p)(x)];
      };
    };
  },
      n = function n(t) {
    return function (p) {
      return f.elLeaf(t)(b.functorArray)(function (x) {
        return [p(x)];
      });
    };
  },
      m = function m(t) {
    return function (p) {
      return function (x) {
        return f["el'"](t)(p)(b.functorArray)(c(x));
      };
    };
  },
      k = function k(t) {
    return function (p) {
      return m(p)(t)(e.li);
    };
  },
      q = function q(t) {
    return function (p) {
      return m(p)(t)(e.span);
    };
  },
      w = function w(t) {
    return function (p) {
      return f.el(t)(b.functorArray)(c(p));
    };
  },
      u = function u(t) {
    return function (p) {
      return m(p)(t)(e.div);
    };
  },
      z = function z(t) {
    return function (p) {
      return m(p)(t)(e.cite);
    };
  };

  d.text = function (t) {
    return function (p) {
      return l.liftWidget(t)(h.display([e.text(p)]));
    };
  };

  d.a = function (t) {
    return function (p) {
      return m(p)(t)(e.a);
    };
  };

  d["br'"] = function (t) {
    return n(t)(e.br)([]);
  };

  d.button_ = function (t) {
    return w(t)(e.button);
  };

  d.button = function (t) {
    return function (p) {
      return m(p)(t)(e.button);
    };
  };

  d["cite'"] = function (t) {
    return function (p) {
      return z(t)(p)([]);
    };
  };

  d.div_ = function (t) {
    return w(t)(e.div);
  };

  d.div = u;

  d["div'"] = function (t) {
    return function (p) {
      return u(t)(p)([]);
    };
  };

  d.input = function (t) {
    return n(t)(e.input);
  };

  d.li_ = function (t) {
    return w(t)(e.li);
  };

  d.li = k;

  d["li'"] = function (t) {
    return function (p) {
      return k(t)(p)([]);
    };
  };

  d.option = function (t) {
    return function (p) {
      return m(p)(t)(e.option);
    };
  };

  d.select = function (t) {
    return function (p) {
      return m(p)(t)(e.select);
    };
  };

  d.span_ = function (t) {
    return w(t)(e.span);
  };

  d.span = q;

  d["span'"] = function (t) {
    return function (p) {
      return q(t)(p)([]);
    };
  };

  d.ul_ = function (t) {
    return w(t)(e.ul);
  };

  d.ul = function (t) {
    return function (p) {
      return m(p)(t)(e.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var d = a["Concur.React.Props"],
      f = a["Concur.Core.Props"],
      l = a["Data.Array"],
      h = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Data.Monoid"],
      c = a["React.DOM.Props"];
  a = new f.Handler(c.onClick);

  var n = new f.Handler(c.onChange),
      m = function m(q) {
    return f.PrimProp.create(c.className(q));
  },
      k = function () {
    var q = h.intercalate(h.foldableArray)(e.monoidString)(" "),
        w = l.concatMap(b.maybe([])(function (u) {
      return [u];
    }));
    return function (u) {
      return m(q(w(u)));
    };
  }();

  d.classList = k;

  d.unsafeTargetValue = function (q) {
    return q.target.value;
  };

  d.style = function (q) {
    return f.PrimProp.create(c.style(q));
  };

  d.checked = function (q) {
    return f.PrimProp.create(c.checked(q));
  };

  d.className = m;

  d.defaultValue = function (q) {
    return f.PrimProp.create(c.defaultValue(q));
  };

  d.disabled = function (q) {
    return f.PrimProp.create(c.disabled(q));
  };

  d.href = function (q) {
    return f.PrimProp.create(c.href(q));
  };

  d._type = function (q) {
    return f.PrimProp.create(c._type(q));
  };

  d.value = function (q) {
    return f.PrimProp.create(c.value(q));
  };

  d.onChange = n;
  d.onClick = a;
})(PS);

(function (a) {
  var d = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (f, l) {
    return d.render(f, l);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a["null"] = null;

  a.nullable = function (d, f, l) {
    return null == d ? f : l(d);
  };

  a.notNull = function (d) {
    return d;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var d = a["Data.Nullable"],
      f = a["Data.Nullable"],
      l = a["Data.Maybe"];
  a = l.maybe(f["null"])(f.notNull);

  d.toMaybe = function (h) {
    return f.nullable(h, l.Nothing.value, l.Just.create);
  };

  d.toNullable = a;
})(PS);

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var d = a.ReactDOM,
      f = a["Data.Functor"],
      l = a["Data.Nullable"],
      h = a.Effect;

  a.ReactDOM.render = function (b) {
    return function (e) {
      return f.map(h.functorEffect)(l.toMaybe)(function () {
        return d.renderImpl(b, e);
      });
    };
  };
})(PS);

(function (a) {
  a._getElementById = function (d) {
    return function (f) {
      return function () {
        return f.getElementById(d);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});

(function (a) {
  a["Web.DOM.NonElementParentNode"] = a["Web.DOM.NonElementParentNode"] || {};
  var d = a["Web.DOM.NonElementParentNode"],
      f = a["Data.Functor"],
      l = a["Data.Nullable"],
      h = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (b) {
    var e = f.map(h.functorEffect)(l.toMaybe),
        c = d._getElementById(b);

    return function (n) {
      return e(c(n));
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
  var d = a["Web.HTML.HTMLDocument"];
  a = a["Unsafe.Coerce"];
  var f = a.unsafeCoerce;
  d.toDocument = a.unsafeCoerce;
  d.toNonElementParentNode = f;
})(PS);

(function (a) {
  a.document = function (d) {
    return function () {
      return d.document;
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
      l = a["Data.Maybe"],
      h = a["Data.Unit"],
      b = a.Effect,
      e = a.ReactDOM,
      c = a["Web.DOM.NonElementParentNode"],
      n = a["Web.HTML"],
      m = a["Web.HTML.HTMLDocument"],
      k = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (q) {
    return function (w) {
      return function () {
        var u = n.window();
        u = k.document(u)();
        u = m.toNonElementParentNode(u);
        u = c.getElementById(q)(u)();
        if (u instanceof l.Nothing) return h.unit;
        if (u instanceof l.Just) return f["void"](b.functorEffect)(e.render(d.renderComponent(w))(u.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [u.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var d = a["Control.Monad.State.Class"],
      f = a["Data.Tuple"],
      l = a["Data.Unit"];

  d.state = function (h) {
    return h.state;
  };

  d.MonadState = function (h, b) {
    this.Monad0 = h;
    this.state = b;
  };

  d.get = function (h) {
    return (0, h.state)(function (b) {
      return new f.Tuple(b, b);
    });
  };

  d.gets = function (h) {
    return function (b) {
      return (0, h.state)(function (e) {
        return new f.Tuple(b(e), e);
      });
    };
  };

  d.put = function (h) {
    return function (b) {
      return (0, h.state)(function (e) {
        return new f.Tuple(l.unit, b);
      });
    };
  };

  d.modify_ = function (h) {
    return function (b) {
      return (0, h.state)(function (e) {
        return new f.Tuple(l.unit, b(e));
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Trans.Class"] = a["Control.Monad.Trans.Class"] || {};
  a = a["Control.Monad.Trans.Class"];

  a.lift = function (d) {
    return d.lift;
  };

  a.MonadTrans = function (d) {
    this.lift = d;
  };
})(PS);

(function (a) {
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var d = a["Control.Monad.Except.Trans"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.Error.Class"],
      c = a["Control.Monad.State.Class"],
      n = a["Control.Monad.Trans.Class"],
      m = a["Data.Either"],
      k = a["Data.Functor"],
      q = new n.MonadTrans(function (A) {
    return function (G) {
      return h.bind(A.Bind1())(G)(function (D) {
        return f.pure(A.Applicative0())(new m.Right(D));
      });
    };
  }),
      w = function w(A) {
    return function (G) {
      return A(G);
    };
  },
      u = function u(A) {
    return new k.Functor(function (G) {
      return w(k.map(A)(k.map(m.functorEither)(G)));
    });
  },
      z = function z(A) {
    return new b.Monad(function () {
      return x(A);
    }, function () {
      return t(A);
    });
  },
      t = function t(A) {
    return new h.Bind(function () {
      return p(A);
    }, function (G) {
      return function (D) {
        return h.bind(A.Bind1())(G)(m.either(function () {
          var H = f.pure(A.Applicative0());
          return function (E) {
            return H(m.Left.create(E));
          };
        }())(function (H) {
          return D(H);
        }));
      };
    });
  },
      p = function p(A) {
    return new l.Apply(function () {
      return u(A.Bind1().Apply0().Functor0());
    }, b.ap(z(A)));
  },
      x = function x(A) {
    return new f.Applicative(function () {
      return p(A);
    }, function () {
      var G = f.pure(A.Applicative0());
      return function (D) {
        return G(m.Right.create(D));
      };
    }());
  };

  d.ExceptT = function (A) {
    return A;
  };

  d.runExceptT = function (A) {
    return A;
  };

  d.functorExceptT = u;
  d.applyExceptT = p;
  d.applicativeExceptT = x;
  d.bindExceptT = t;

  d.monadThrowExceptT = function (A) {
    return new e.MonadThrow(function () {
      return z(A);
    }, function () {
      var G = f.pure(A.Applicative0());
      return function (D) {
        return G(m.Left.create(D));
      };
    }());
  };

  d.monadStateExceptT = function (A) {
    return new c.MonadState(function () {
      return z(A.Monad0());
    }, function (G) {
      return n.lift(q)(A.Monad0())(c.state(A)(G));
    });
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var d = a["Data.Identity"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      c = function c(w) {
    return w;
  };

  a = new a["Data.Newtype"].Newtype(function (w) {
    return w;
  }, c);
  var n = new e.Functor(function (w) {
    return function (u) {
      return w(u);
    };
  }),
      m = new l.Apply(function () {
    return n;
  }, function (w) {
    return function (u) {
      return w(u);
    };
  }),
      k = new h.Bind(function () {
    return m;
  }, function (w) {
    return function (u) {
      return u(w);
    };
  }),
      q = new f.Applicative(function () {
    return m;
  }, c);
  f = new b.Monad(function () {
    return q;
  }, function () {
    return k;
  });
  d.newtypeIdentity = a;
  d.functorIdentity = n;
  d.monadIdentity = f;
})(PS);

(function (a) {
  a["Control.Monad.Except"] = a["Control.Monad.Except"] || {};
  var d = a["Control.Monad.Except"],
      f = a["Control.Monad.Except.Trans"],
      l = a["Data.Identity"],
      h = a["Data.Newtype"];

  a = function () {
    var b = h.unwrap(l.newtypeIdentity);
    return function (e) {
      return b(f.runExceptT(e));
    };
  }();

  d.runExcept = a;
})(PS);

(function (a) {
  a["Control.Monad.Maybe.Trans"] = a["Control.Monad.Maybe.Trans"] || {};

  var d = a["Control.Monad.Maybe.Trans"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      c = a["Data.Maybe"],
      n = function n(u) {
    return new e.Functor(function (z) {
      return function (t) {
        return e.map(u)(e.map(c.functorMaybe)(z))(t);
      };
    });
  },
      m = function m(u) {
    return new b.Monad(function () {
      return w(u);
    }, function () {
      return k(u);
    });
  },
      k = function k(u) {
    return new h.Bind(function () {
      return q(u);
    }, function (z) {
      return function (t) {
        return h.bind(u.Bind1())(z)(function (p) {
          if (p instanceof c.Nothing) return f.pure(u.Applicative0())(c.Nothing.value);
          if (p instanceof c.Just) return t(p.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [p.constructor.name]);
        });
      };
    });
  },
      q = function q(u) {
    return new l.Apply(function () {
      return n(u.Bind1().Apply0().Functor0());
    }, b.ap(m(u)));
  },
      w = function w(u) {
    return new f.Applicative(function () {
      return q(u);
    }, function () {
      var z = f.pure(u.Applicative0());
      return function (t) {
        return z(c.Just.create(t));
      };
    }());
  };

  d.MaybeT = function (u) {
    return u;
  };

  d.runMaybeT = function (u) {
    return u;
  };

  d.applicativeMaybeT = w;
  d.bindMaybeT = k;
})(PS);

(function (a) {
  a.map_ = function (d) {
    return function (f) {
      return function () {
        return d(f());
      };
    };
  };

  a.pure_ = function (d) {
    return function () {
      return d;
    };
  };

  a.bind_ = function (d) {
    return function (f) {
      return function () {
        return f(d())();
      };
    };
  };
})(PS["Control.Monad.ST.Internal"] = PS["Control.Monad.ST.Internal"] || {});

(function (a) {
  a["Control.Monad.ST.Internal"] = a["Control.Monad.ST.Internal"] || {};
  var d = a["Control.Monad.ST.Internal"],
      f = a["Control.Monad.ST.Internal"],
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"],
      c = new a["Data.Functor"].Functor(f.map_);
  a = new e.Monad(function () {
    return k;
  }, function () {
    return n;
  });
  var n = new b.Bind(function () {
    return m;
  }, f.bind_),
      m = new h.Apply(function () {
    return c;
  }, e.ap(a)),
      k = new l.Applicative(function () {
    return m;
  }, f.pure_);
  d.applicativeST = k;
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (d) {
    return function (f) {
      return d(f).value1;
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};
  var d = a["Control.Monad.State.Trans"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.State.Class"],
      c = a["Data.Functor"],
      n = a["Data.Tuple"],
      m = a["Data.Unit"];
  a = new a["Control.Lazy"].Lazy(function (t) {
    return function (p) {
      return t(m.unit)(p);
    };
  });

  var k = function k(t) {
    return new c.Functor(function (p) {
      return function (x) {
        return function (A) {
          return c.map(t)(function (G) {
            return new n.Tuple(p(G.value0), G.value1);
          })(x(A));
        };
      };
    });
  },
      q = function q(t) {
    return new b.Monad(function () {
      return z(t);
    }, function () {
      return w(t);
    });
  },
      w = function w(t) {
    return new h.Bind(function () {
      return u(t);
    }, function (p) {
      return function (x) {
        return function (A) {
          return h.bind(t.Bind1())(p(A))(function (G) {
            return x(G.value0)(G.value1);
          });
        };
      };
    });
  },
      u = function u(t) {
    return new l.Apply(function () {
      return k(t.Bind1().Apply0().Functor0());
    }, b.ap(q(t)));
  },
      z = function z(t) {
    return new f.Applicative(function () {
      return u(t);
    }, function (p) {
      return function (x) {
        return f.pure(t.Applicative0())(new n.Tuple(p, x));
      };
    });
  };

  d.StateT = function (t) {
    return t;
  };

  d.runStateT = function (t) {
    return t;
  };

  d.evalStateT = function (t) {
    return function (p) {
      return function (x) {
        return c.map(t)(n.fst)(p(x));
      };
    };
  };

  d.functorStateT = k;
  d.bindStateT = w;
  d.monadStateT = q;
  d.lazyStateT = a;

  d.monadStateStateT = function (t) {
    return new e.MonadState(function () {
      return q(t);
    }, function (p) {
      return function () {
        var x = f.pure(t.Applicative0());
        return function (A) {
          return x(p(A));
        };
      }();
    });
  };
})(PS);

(function (a) {
  a.toCharCode = function (d) {
    return d.charCodeAt(0);
  };

  a.fromCharCode = function (d) {
    return String.fromCharCode(d);
  };
})(PS["Data.Enum"] = PS["Data.Enum"] || {});

(function (a) {
  a["Data.Enum"] = a["Data.Enum"] || {};
  var d = a["Data.Enum"],
      f = a["Data.Enum"],
      l = a["Control.Apply"],
      h = a["Data.Bounded"],
      b = a["Data.Functor"],
      e = a["Data.Maybe"],
      c = a["Data.Newtype"],
      n = a["Data.Ord"],
      m = a["Data.Tuple"],
      k = a["Data.Unfoldable1"];

  a = function a(F) {
    return F;
  };

  var q = function q(F) {
    this.Bounded0 = F;
  },
      w = function w(F, K, L) {
    this.Ord0 = F;
    this.pred = K;
    this.succ = L;
  },
      u = function u(F, K, L, v, M) {
    this.Bounded0 = F;
    this.Enum1 = K;
    this.cardinality = L;
    this.fromEnum = v;
    this.toEnum = M;
  },
      z = new q(function () {
    return h.boundedBoolean;
  }),
      t = new c.Newtype(function (F) {
    return F;
  }, a),
      p = function p(F) {
    return new w(function () {
      return e.ordMaybe(F.Enum1().Ord0());
    }, function (K) {
      if (K instanceof e.Nothing) return e.Nothing.value;
      if (K instanceof e.Just) return new e.Just((0, F.Enum1().pred)(K.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [K.constructor.name]);
    }, function (K) {
      if (K instanceof e.Nothing) return new e.Just(new e.Just(h.bottom(F.Bounded0())));
      if (K instanceof e.Just) return b.map(e.functorMaybe)(e.Just.create)((0, F.Enum1().succ)(K.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [K.constructor.name]);
    });
  },
      x = new w(function () {
    return n.ordBoolean;
  }, function (F) {
    return F ? new e.Just(!1) : e.Nothing.value;
  }, function (F) {
    return F ? e.Nothing.value : new e.Just(!0);
  }),
      A = function A(F) {
    return function (K) {
      return function (L) {
        return F(K(L) + 1 | 0);
      };
    };
  },
      G = function G(F) {
    return function (K) {
      return function (L) {
        return F(K(L) - 1 | 0);
      };
    };
  },
      D = function D(F) {
    return F >= h.bottom(h.boundedInt) && F <= h.top(h.boundedInt) ? new e.Just(f.fromCharCode(F)) : e.Nothing.value;
  },
      H = new w(function () {
    return n.ordChar;
  }, G(D)(f.toCharCode), A(D)(f.toCharCode));

  D = new u(function () {
    return h.boundedChar;
  }, function () {
    return H;
  }, f.toCharCode(h.top(h.boundedChar)) - f.toCharCode(h.bottom(h.boundedChar)) | 0, f.toCharCode, D);
  var E = new u(function () {
    return h.boundedBoolean;
  }, function () {
    return x;
  }, 2, function (F) {
    if (!F) return 0;
    if (F) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [F.constructor.name]);
  }, function (F) {
    return 0 === F ? new e.Just(!1) : 1 === F ? new e.Just(!0) : e.Nothing.value;
  });
  d.Enum = w;
  d.BoundedEnum = u;

  d.toEnum = function (F) {
    return F.toEnum;
  };

  d.fromEnum = function (F) {
    return F.fromEnum;
  };

  d.toEnumWithDefaults = function (F) {
    return function (K) {
      return function (L) {
        return function (v) {
          var M = (0, F.toEnum)(v);
          if (M instanceof e.Just) return M.value0;
          if (M instanceof e.Nothing) return v < (0, F.fromEnum)(h.bottom(F.Bounded0())) ? K : L;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [M.constructor.name]);
        };
      };
    };
  };

  d.Cardinality = a;

  d.upFromIncluding = function (F) {
    return function (K) {
      return k.unfoldr1(K)(l.apply(l.applyFn)(m.Tuple.create)(F.succ));
    };
  };

  d.defaultSucc = A;
  d.defaultPred = G;
  d.SmallBounded = q;
  d.boundedEnumBoolean = E;
  d.boundedEnumChar = D;
  d.newtypeCardinality = t;

  d.boundedEnumMaybe = function (F) {
    return function (K) {
      return new u(function () {
        return e.boundedMaybe(K.Bounded0());
      }, function () {
        return p(K);
      }, c.unwrap(t)(K.cardinality) + 1 | 0, function (L) {
        if (L instanceof e.Nothing) return 0;
        if (L instanceof e.Just) return (0, K.fromEnum)(L.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [L.constructor.name]);
      }, function (L) {
        return 0 === L ? e.Nothing.value : b.map(e.functorMaybe)(e.Just.create)((0, K.toEnum)(L - 1 | 0));
      });
    };
  };

  d.smallBoundedBoolean = z;
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
  a = new function (l) {
    this.Ring0 = l;
  }(function () {
    return f.ringInt;
  });
  d.commutativeRingInt = a;
})(PS);

(function (a) {
  var d = function d(f, l, h) {
    l = new Date(Date.UTC(f, l, h));
    0 <= f && 100 > f && l.setUTCFullYear(f);
    return l;
  };

  a.canonicalDateImpl = function (f, l, h, b) {
    l = d(l, h - 1, b);
    return f(l.getUTCFullYear())(l.getUTCMonth() + 1)(l.getUTCDate());
  };

  a.calcWeekday = function (f, l, h) {
    return d(f, l - 1, h).getUTCDay();
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var d = a["Data.Date.Component"],
      f = a["Data.Boolean"],
      l = a["Data.Bounded"],
      h = a["Data.Enum"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      c = a["Data.Ord"],
      n = a["Data.Ordering"],
      m = a["Data.Show"],
      k = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      q = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      w = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      u = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      z = function () {
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
      G = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      D = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      H = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      E = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      F = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      K = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      L = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      v = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      M = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      T = function () {
    function C() {}

    C.value = new C();
    return C;
  }();

  a = new m.Show(function (C) {
    if (C instanceof k) return "Monday";
    if (C instanceof q) return "Tuesday";
    if (C instanceof w) return "Wednesday";
    if (C instanceof u) return "Thursday";
    if (C instanceof z) return "Friday";
    if (C instanceof t) return "Saturday";
    if (C instanceof p) return "Sunday";
    throw Error("Failed pattern match at Data.Date.Component (line 184, column 1 - line 191, column 25): " + [C.constructor.name]);
  });
  m = new m.Show(function (C) {
    if (C instanceof x) return "January";
    if (C instanceof A) return "February";
    if (C instanceof G) return "March";
    if (C instanceof D) return "April";
    if (C instanceof H) return "May";
    if (C instanceof E) return "June";
    if (C instanceof F) return "July";
    if (C instanceof K) return "August";
    if (C instanceof L) return "September";
    if (C instanceof v) return "October";
    if (C instanceof M) return "November";
    if (C instanceof T) return "December";
    throw Error("Failed pattern match at Data.Date.Component (line 101, column 1 - line 113, column 29): " + [C.constructor.name]);
  });
  var B = c.ordInt,
      N = c.ordInt,
      I = new b.Eq(function (C) {
    return function (U) {
      return C instanceof k && U instanceof k || C instanceof q && U instanceof q || C instanceof w && U instanceof w || C instanceof u && U instanceof u || C instanceof z && U instanceof z || C instanceof t && U instanceof t || C instanceof p && U instanceof p ? !0 : !1;
    };
  }),
      V = new c.Ord(function () {
    return I;
  }, function (C) {
    return function (U) {
      if (C instanceof k && U instanceof k) return n.EQ.value;
      if (C instanceof k) return n.LT.value;
      if (U instanceof k) return n.GT.value;
      if (C instanceof q && U instanceof q) return n.EQ.value;
      if (C instanceof q) return n.LT.value;
      if (U instanceof q) return n.GT.value;
      if (C instanceof w && U instanceof w) return n.EQ.value;
      if (C instanceof w) return n.LT.value;
      if (U instanceof w) return n.GT.value;
      if (C instanceof u && U instanceof u) return n.EQ.value;
      if (C instanceof u) return n.LT.value;
      if (U instanceof u) return n.GT.value;
      if (C instanceof z && U instanceof z) return n.EQ.value;
      if (C instanceof z) return n.LT.value;
      if (U instanceof z) return n.GT.value;
      if (C instanceof t && U instanceof t) return n.EQ.value;
      if (C instanceof t) return n.LT.value;
      if (U instanceof t) return n.GT.value;
      if (C instanceof p && U instanceof p) return n.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 154, column 1 - line 154, column 42): " + [C.constructor.name, U.constructor.name]);
    };
  }),
      O = new b.Eq(function (C) {
    return function (U) {
      return C instanceof x && U instanceof x || C instanceof A && U instanceof A || C instanceof G && U instanceof G || C instanceof D && U instanceof D || C instanceof H && U instanceof H || C instanceof E && U instanceof E || C instanceof F && U instanceof F || C instanceof K && U instanceof K || C instanceof L && U instanceof L || C instanceof v && U instanceof v || C instanceof M && U instanceof M || C instanceof T && U instanceof T ? !0 : !1;
    };
  }),
      r = new c.Ord(function () {
    return O;
  }, function (C) {
    return function (U) {
      if (C instanceof x && U instanceof x) return n.EQ.value;
      if (C instanceof x) return n.LT.value;
      if (U instanceof x) return n.GT.value;
      if (C instanceof A && U instanceof A) return n.EQ.value;
      if (C instanceof A) return n.LT.value;
      if (U instanceof A) return n.GT.value;
      if (C instanceof G && U instanceof G) return n.EQ.value;
      if (C instanceof G) return n.LT.value;
      if (U instanceof G) return n.GT.value;
      if (C instanceof D && U instanceof D) return n.EQ.value;
      if (C instanceof D) return n.LT.value;
      if (U instanceof D) return n.GT.value;
      if (C instanceof H && U instanceof H) return n.EQ.value;
      if (C instanceof H) return n.LT.value;
      if (U instanceof H) return n.GT.value;
      if (C instanceof E && U instanceof E) return n.EQ.value;
      if (C instanceof E) return n.LT.value;
      if (U instanceof E) return n.GT.value;
      if (C instanceof F && U instanceof F) return n.EQ.value;
      if (C instanceof F) return n.LT.value;
      if (U instanceof F) return n.GT.value;
      if (C instanceof K && U instanceof K) return n.EQ.value;
      if (C instanceof K) return n.LT.value;
      if (U instanceof K) return n.GT.value;
      if (C instanceof L && U instanceof L) return n.EQ.value;
      if (C instanceof L) return n.LT.value;
      if (U instanceof L) return n.GT.value;
      if (C instanceof v && U instanceof v) return n.EQ.value;
      if (C instanceof v) return n.LT.value;
      if (U instanceof v) return n.GT.value;
      if (C instanceof M && U instanceof M) return n.EQ.value;
      if (C instanceof M) return n.LT.value;
      if (U instanceof M) return n.GT.value;
      if (C instanceof T && U instanceof T) return n.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [C.constructor.name, U.constructor.name]);
    };
  }),
      aa = new l.Bounded(function () {
    return B;
  }, -271820, 275759),
      ia = new l.Bounded(function () {
    return V;
  }, k.value, p.value),
      ka = new l.Bounded(function () {
    return r;
  }, x.value, T.value),
      qa = new h.BoundedEnum(function () {
    return aa;
  }, function () {
    return ua;
  }, 547580, function (C) {
    return C;
  }, function (C) {
    if (-271820 <= C && 275759 >= C) return new e.Just(C);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [C.constructor.name]);
  }),
      ua = new h.Enum(function () {
    return B;
  }, function () {
    var C = h.toEnum(qa),
        U = h.fromEnum(qa);
    return function (R) {
      return C(U(R) - 1 | 0);
    };
  }(), function () {
    var C = h.toEnum(qa),
        U = h.fromEnum(qa);
    return function (R) {
      return C(U(R) + 1 | 0);
    };
  }()),
      ra = new h.BoundedEnum(function () {
    return ia;
  }, function () {
    return wa;
  }, 7, function (C) {
    if (C instanceof k) return 1;
    if (C instanceof q) return 2;
    if (C instanceof w) return 3;
    if (C instanceof u) return 4;
    if (C instanceof z) return 5;
    if (C instanceof t) return 6;
    if (C instanceof p) return 7;
    throw Error("Failed pattern match at Data.Date.Component (line 175, column 14 - line 182, column 16): " + [C.constructor.name]);
  }, function (C) {
    return 1 === C ? new e.Just(k.value) : 2 === C ? new e.Just(q.value) : 3 === C ? new e.Just(w.value) : 4 === C ? new e.Just(u.value) : 5 === C ? new e.Just(z.value) : 6 === C ? new e.Just(t.value) : 7 === C ? new e.Just(p.value) : e.Nothing.value;
  }),
      wa = new h.Enum(function () {
    return V;
  }, function () {
    var C = h.toEnum(ra),
        U = h.fromEnum(ra);
    return function (R) {
      return C(U(R) - 1 | 0);
    };
  }(), function () {
    var C = h.toEnum(ra),
        U = h.fromEnum(ra);
    return function (R) {
      return C(U(R) + 1 | 0);
    };
  }()),
      ea = new h.BoundedEnum(function () {
    return ka;
  }, function () {
    return sa;
  }, 12, function (C) {
    if (C instanceof x) return 1;
    if (C instanceof A) return 2;
    if (C instanceof G) return 3;
    if (C instanceof D) return 4;
    if (C instanceof H) return 5;
    if (C instanceof E) return 6;
    if (C instanceof F) return 7;
    if (C instanceof K) return 8;
    if (C instanceof L) return 9;
    if (C instanceof v) return 10;
    if (C instanceof M) return 11;
    if (C instanceof T) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [C.constructor.name]);
  }, function (C) {
    return 1 === C ? new e.Just(x.value) : 2 === C ? new e.Just(A.value) : 3 === C ? new e.Just(G.value) : 4 === C ? new e.Just(D.value) : 5 === C ? new e.Just(H.value) : 6 === C ? new e.Just(E.value) : 7 === C ? new e.Just(F.value) : 8 === C ? new e.Just(K.value) : 9 === C ? new e.Just(L.value) : 10 === C ? new e.Just(v.value) : 11 === C ? new e.Just(M.value) : 12 === C ? new e.Just(T.value) : e.Nothing.value;
  }),
      sa = new h.Enum(function () {
    return r;
  }, function () {
    var C = h.toEnum(ea),
        U = h.fromEnum(ea);
    return function (R) {
      return C(U(R) - 1 | 0);
    };
  }(), function () {
    var C = h.toEnum(ea),
        U = h.fromEnum(ea);
    return function (R) {
      return C(U(R) + 1 | 0);
    };
  }()),
      ca = new l.Bounded(function () {
    return N;
  }, 1, 31),
      Q = new h.BoundedEnum(function () {
    return ca;
  }, function () {
    return P;
  }, 31, function (C) {
    return C;
  }, function (C) {
    if (1 <= C && 31 >= C) return new e.Just(C);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [C.constructor.name]);
  }),
      P = new h.Enum(function () {
    return N;
  }, function () {
    var C = h.toEnum(Q),
        U = h.fromEnum(Q);
    return function (R) {
      return C(U(R) - 1 | 0);
    };
  }(), function () {
    var C = h.toEnum(Q),
        U = h.fromEnum(Q);
    return function (R) {
      return C(U(R) + 1 | 0);
    };
  }());
  d.January = x;
  d.February = A;
  d.March = G;
  d.April = D;
  d.May = H;
  d.June = E;
  d.July = F;
  d.August = K;
  d.September = L;
  d.October = v;
  d.November = M;
  d.December = T;
  d.boundedYear = aa;
  d.boundedEnumYear = qa;
  d.boundedMonth = ka;
  d.boundedEnumMonth = ea;
  d.showMonth = m;
  d.boundedDay = ca;
  d.boundedEnumDay = Q;
  d.boundedEnumWeekday = ra;
  d.showWeekday = a;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var d = a["Data.Date"],
      f = a["Data.Date"],
      l = a["Data.Date.Component"],
      h = a["Data.Enum"],
      b = a["Data.Maybe"],
      e = function () {
    function c(n, m, k) {
      this.value0 = n;
      this.value1 = m;
      this.value2 = k;
    }

    c.create = function (n) {
      return function (m) {
        return function (k) {
          return new c(n, m, k);
        };
      };
    };

    return c;
  }();

  d.canonicalDate = function (c) {
    return function (n) {
      return function (m) {
        return f.canonicalDateImpl(function (k) {
          return function (q) {
            return function (w) {
              return new e(k, b.fromJust()(h.toEnum(l.boundedEnumMonth)(q)), w);
            };
          };
        }, c, h.fromEnum(l.boundedEnumMonth)(n), m);
      };
    };
  };

  d.year = function (c) {
    return c.value0;
  };

  d.month = function (c) {
    return c.value1;
  };

  d.day = function (c) {
    return c.value2;
  };

  d.weekday = function (c) {
    c = f.calcWeekday(c.value0, h.fromEnum(l.boundedEnumMonth)(c.value1), c.value2);
    return 0 === c ? b.fromJust()(h.toEnum(l.boundedEnumWeekday)(7)) : b.fromJust()(h.toEnum(l.boundedEnumWeekday)(c));
  };
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  a = a["Data.DateTime"];

  var d = function () {
    function f(l, h) {
      this.value0 = l;
      this.value1 = h;
    }

    f.create = function (l) {
      return function (h) {
        return new f(l, h);
      };
    };

    return f;
  }();

  a.DateTime = d;
})(PS);

(function (a) {
  a.fromDateTimeImpl = function (d, f, l, h, b, e, c) {
    f = new Date(Date.UTC(d, f - 1, l, h, b, e, c));
    0 <= d && 100 > d && f.setUTCFullYear(d);
    return f.getTime();
  };

  a.toDateTimeImpl = function (d) {
    return function (f) {
      f = new Date(f);
      return d(f.getUTCFullYear())(f.getUTCMonth() + 1)(f.getUTCDate())(f.getUTCHours())(f.getUTCMinutes())(f.getUTCSeconds())(f.getUTCMilliseconds());
    };
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  a = a["Data.Time"];

  var d = function () {
    function f(l, h, b, e) {
      this.value0 = l;
      this.value1 = h;
      this.value2 = b;
      this.value3 = e;
    }

    f.create = function (l) {
      return function (h) {
        return function (b) {
          return function (e) {
            return new f(l, h, b, e);
          };
        };
      };
    };

    return f;
  }();

  a.Time = d;

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
  var d = a["Data.DateTime.Instant"],
      f = a["Data.DateTime.Instant"],
      l = a["Data.Date"],
      h = a["Data.Date.Component"],
      b = a["Data.DateTime"],
      e = a["Data.Enum"],
      c = a["Data.Maybe"],
      n = a["Data.Time"];

  a = function () {
    return f.toDateTimeImpl(function (m) {
      return function (k) {
        return function (q) {
          return function (w) {
            return function (u) {
              return function (z) {
                return function (t) {
                  return new b.DateTime(l.canonicalDate(m)(c.fromJust()(e.toEnum(h.boundedEnumMonth)(k)))(q), new n.Time(w, u, z, t));
                };
              };
            };
          };
        };
      };
    });
  }();

  d.unInstant = function (m) {
    return m;
  };

  d.fromDateTime = function (m) {
    return f.fromDateTimeImpl(l.year(m.value0), e.fromEnum(h.boundedEnumMonth)(l.month(m.value0)), l.day(m.value0), n.hour(m.value1), n.minute(m.value1), n.second(m.value1), n.millisecond(m.value1));
  };

  d.toDateTime = a;
})(PS);

(function (a) {
  a.intDegree = function (d) {
    return Math.min(Math.abs(d), 2147483647);
  };

  a.intDiv = function (d) {
    return function (f) {
      return 0 === f ? 0 : 0 < f ? Math.floor(d / f) : -Math.floor(d / -f);
    };
  };

  a.intMod = function (d) {
    return function (f) {
      if (0 === f) return 0;
      f = Math.abs(f);
      return (d % f + f) % f;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var d = a["Data.EuclideanRing"],
      f = a["Data.EuclideanRing"],
      l = a["Data.CommutativeRing"];
  a = new function (h, b, e, c) {
    this.CommutativeRing0 = h;
    this.degree = b;
    this.div = e;
    this.mod = c;
  }(function () {
    return l.commutativeRingInt;
  }, f.intDegree, f.intDiv, f.intMod);

  d.div = function (h) {
    return h.div;
  };

  d.mod = function (h) {
    return h.mod;
  };

  d.euclideanRingInt = a;
})(PS);

(function (a) {
  a.split = function (d) {
    return function (f) {
      return f.split(d);
    };
  };

  a.toUpper = function (d) {
    return d.toUpperCase();
  };

  a.trim = function (d) {
    return d.trim();
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});

(function (a) {
  a["Data.String.Common"] = a["Data.String.Common"] || {};
  var d = a["Data.String.Common"];
  a = a["Data.String.Common"];

  d["null"] = function (f) {
    return "" === f;
  };

  d.split = a.split;
  d.toUpper = a.toUpper;
  d.trim = a.trim;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  var d = a["Data.String.Pattern"],
      f = function f(l) {
    return l;
  };

  a = new a["Data.Newtype"].Newtype(function (l) {
    return l;
  }, f);
  d.Pattern = f;
  d.newtypePattern = a;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Pos"] = a["Text.Parsing.Parser.Pos"] || {};
  var d = a["Text.Parsing.Parser.Pos"],
      f = a["Data.EuclideanRing"],
      l = a["Data.Foldable"],
      h = a["Data.Newtype"],
      b = a["Data.String.Common"],
      e = a["Data.String.Pattern"];
  d.initialPos = {
    line: 1,
    column: 1
  };

  d.updatePosString = function (c) {
    return function (n) {
      return l.foldl(l.foldableArray)(function (m) {
        return function (k) {
          return "\n" === k || "\r" === k ? {
            line: m.line + 1 | 0,
            column: 1
          } : "\t" === k ? {
            line: m.line,
            column: (m.column + 8 | 0) - f.mod(f.euclideanRingInt)(m.column - 1 | 0)(8) | 0
          } : {
            line: m.line,
            column: m.column + 1 | 0
          };
        };
      })(c)(b.split(h.wrap(e.newtypePattern)(""))(n));
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser"] = a["Text.Parsing.Parser"] || {};

  var d = a["Text.Parsing.Parser"],
      f = a["Control.Alt"],
      l = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      c = a["Control.Monad.Error.Class"],
      n = a["Control.Monad.Except.Trans"],
      m = a["Control.Monad.State.Class"],
      k = a["Control.Monad.State.Trans"],
      q = a["Control.Plus"],
      w = a["Data.Either"],
      u = a["Data.Identity"],
      z = a["Data.Newtype"],
      t = a["Data.Tuple"],
      p = a["Text.Parsing.Parser.Pos"],
      x = function () {
    function I(V, O, r) {
      this.value0 = V;
      this.value1 = O;
      this.value2 = r;
    }

    I.create = function (V) {
      return function (O) {
        return function (r) {
          return new I(V, O, r);
        };
      };
    };

    return I;
  }(),
      A = function () {
    function I(V, O) {
      this.value0 = V;
      this.value1 = O;
    }

    I.create = function (V) {
      return function (O) {
        return new I(V, O);
      };
    };

    return I;
  }();

  a = function a(I) {
    return I;
  };

  var G = new z.Newtype(function (I) {
    return I;
  }, a),
      D = function D(I) {
    return function (V) {
      return function (O) {
        var r = new x(V, p.initialPos, !1);
        return k.evalStateT(I.Bind1().Apply0().Functor0())(n.runExceptT(z.unwrap(G)(O)))(r);
      };
    };
  },
      H = function H(I) {
    return n.monadStateExceptT(k.monadStateStateT(I));
  },
      E = function E(I) {
    return m.gets(H(I))(function (V) {
      return V.value1;
    });
  },
      F = new e.Lazy(function (I) {
    return e.defer(k.lazyStateT)(function () {
      var V = z.unwrap(G);
      return function (O) {
        return n.runExceptT(V(I(O)));
      };
    }());
  }),
      K = function K(I) {
    return n.functorExceptT(k.functorStateT(I));
  },
      L = function L(I) {
    return function (V) {
      return function (O) {
        return c.throwError(n.monadThrowExceptT(k.monadStateT(I)))(new A(V, O));
      };
    };
  },
      v = function v(I) {
    return n.bindExceptT(k.monadStateT(I));
  },
      M = function M(I) {
    return function (V) {
      return b.bindFlipped(v(I))(L(I)(V))(E(I));
    };
  },
      T = function T(I) {
    return n.applicativeExceptT(k.monadStateT(I));
  },
      B = function B(I) {
    return new f.Alt(function () {
      return K(I.Bind1().Apply0().Functor0());
    }, function (V) {
      return function (O) {
        return n.ExceptT(k.StateT(function (r) {
          return b.bind(I.Bind1())(k.runStateT(n.runExceptT(z.unwrap(G)(V)))(new x(r.value0, r.value1, !1)))(function (aa) {
            return aa.value0 instanceof w.Left && !aa.value1.value2 ? k.runStateT(n.runExceptT(z.unwrap(G)(O)))(r) : h.pure(I.Applicative0())(new t.Tuple(aa.value0, aa.value1));
          });
        }));
      };
    });
  },
      N = function N(I) {
    return new q.Plus(function () {
      return B(I);
    }, M(I)("No alternative"));
  };

  d.ParseError = A;

  d.parseErrorMessage = function (I) {
    return I.value0;
  };

  d.parseErrorPosition = function (I) {
    return I.value1;
  };

  d.ParseState = x;
  d.ParserT = a;

  d.runParser = function (I) {
    var V = z.unwrap(u.newtypeIdentity),
        O = D(u.monadIdentity)(I);
    return function (r) {
      return V(O(r));
    };
  };

  d.fail = M;
  d.newtypeParserT = G;
  d.lazyParserT = F;
  d.functorParserT = K;

  d.applyParserT = function (I) {
    return n.applyExceptT(k.monadStateT(I));
  };

  d.applicativeParserT = T;
  d.bindParserT = v;
  d.monadStateParserT = H;
  d.altParserT = B;
  d.plusParserT = N;

  d.alternativeParserT = function (I) {
    return new l.Alternative(function () {
      return T(I);
    }, function () {
      return N(I);
    });
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Combinators"] = a["Text.Parsing.Parser.Combinators"] || {};
  var d = a["Text.Parsing.Parser.Combinators"],
      f = a["Control.Alt"],
      l = a["Control.Applicative"],
      h = a["Control.Bind"],
      b = a["Control.Monad.Except.Trans"],
      e = a["Control.Monad.State.Trans"],
      c = a["Control.Plus"],
      n = a["Data.Either"],
      m = a["Data.Foldable"],
      k = a["Data.Newtype"],
      q = a["Data.Tuple"],
      w = a["Text.Parsing.Parser"];

  d.withErrorMessage = function (u) {
    return function (z) {
      return function (t) {
        return f.alt(w.altParserT(u))(z)(w.fail(u)("Expected " + t));
      };
    };
  };

  d["try"] = function (u) {
    return function (z) {
      return w.ParserT(b.ExceptT(e.StateT(function (t) {
        return h.bind(u.Bind1())(e.runStateT(b.runExceptT(k.unwrap(w.newtypeParserT)(z)))(t))(function (p) {
          return p.value0 instanceof n.Left ? l.pure(u.Applicative0())(new q.Tuple(p.value0, new w.ParseState(p.value1.value0, p.value1.value1, t.value2))) : l.pure(u.Applicative0())(new q.Tuple(p.value0, p.value1));
        });
      })));
    };
  };

  d.tryRethrow = function (u) {
    return function (z) {
      return w.ParserT(b.ExceptT(e.StateT(function (t) {
        return h.bind(u.Bind1())(e.runStateT(b.runExceptT(k.unwrap(w.newtypeParserT)(z)))(t))(function (p) {
          return p.value0 instanceof n.Left ? l.pure(u.Applicative0())(new q.Tuple(new n.Left(new w.ParseError(p.value0.value0.value0, t.value1)), new w.ParseState(p.value1.value0, p.value1.value1, t.value2))) : l.pure(u.Applicative0())(new q.Tuple(p.value0, p.value1));
        });
      })));
    };
  };

  d.choice = function (u) {
    return function (z) {
      return m.foldl(u)(f.alt(w.altParserT(z)))(c.empty(w.plusParserT(z)));
    };
  };
})(PS);

(function (a) {
  var d = "function" === typeof Array.from,
      f = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      l = "function" === typeof String.prototype.fromCodePoint,
      h = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (b) {
    return h ? function (e) {
      return e.codePointAt(0);
    } : b;
  };

  a._codePointAt = function (b) {
    return function (e) {
      return function (c) {
        return function (n) {
          return function (m) {
            return function (k) {
              var q = k.length;
              if (0 > m || m >= q) return c;
              if (f) for (k = k[Symbol.iterator](), q = m;; --q) {
                var w = k.next();
                if (w.done) return c;
                if (0 === q) return e(n(w.value));
              }
              return b(m)(k);
            };
          };
        };
      };
    };
  };

  a._singleton = function (b) {
    return l ? String.fromCodePoint : b;
  };

  a._take = function (b) {
    return function (e) {
      return f ? function (c) {
        var n = "";
        c = c[Symbol.iterator]();

        for (var m = 0; m < e; ++m) {
          var k = c.next();
          if (k.done) break;
          n += k.value;
        }

        return n;
      } : b(e);
    };
  };

  a._toCodePointArray = function (b) {
    return function (e) {
      return d ? function (c) {
        return Array.from(c, e);
      } : b;
    };
  };
})(PS["Data.String.CodePoints"] = PS["Data.String.CodePoints"] || {});

(function (a) {
  a.fromNumberImpl = function (d) {
    return function (f) {
      return function (l) {
        return (l | 0) === l ? d(l) : f;
      };
    };
  };

  a.toNumber = function (d) {
    return d;
  };

  a.toStringAs = function (d) {
    return function (f) {
      return f.toString(d);
    };
  };
})(PS["Data.Int"] = PS["Data.Int"] || {});

(function (a) {
  a.infinity = Infinity;

  a._encodeURIComponent = function (d) {
    return function (f, l, h) {
      try {
        return l(d(h));
      } catch (b) {
        return f(b.message);
      }
    };
  }(encodeURIComponent);
})(PS.Global = PS.Global || {});

(function (a) {
  a.Global = a.Global || {};
  var d = a.Global,
      f = a.Global,
      l = a["Data.Function"],
      h = a["Data.Maybe"];

  d.encodeURIComponent = function (b) {
    return f._encodeURIComponent(l["const"](h.Nothing.value), h.Just.create, b);
  };

  d.infinity = f.infinity;
})(PS);

(function (a) {
  a.floor = Math.floor;
  a.round = Math.round;
})(PS.Math = PS.Math || {});

(function (a) {
  a.Math = a.Math || {};
  var d = a.Math;
  a = a.Math;
  d.floor = a.floor;
  d.round = a.round;
})(PS);

(function (a) {
  a["Data.Int"] = a["Data.Int"] || {};

  var d = a["Data.Int"],
      f = a["Data.Int"],
      l = a["Data.Boolean"],
      h = a["Data.Bounded"],
      b = a["Data.Maybe"],
      e = a.Global,
      c = a.Math,
      n = f.fromNumberImpl(b.Just.create)(b.Nothing.value),
      m = function m(k) {
    if (k === e.infinity || k === -e.infinity) return 0;
    if (k >= f.toNumber(h.top(h.boundedInt))) return h.top(h.boundedInt);
    if (k <= f.toNumber(h.bottom(h.boundedInt))) return h.bottom(h.boundedInt);
    if (l.otherwise) return b.fromMaybe(0)(n(k));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [k.constructor.name]);
  };

  d.floor = function (k) {
    return m(c.floor(k));
  };

  d.round = function (k) {
    return m(c.round(k));
  };

  d.hexadecimal = 16;
  d.toNumber = f.toNumber;
  d.toStringAs = f.toStringAs;
})(PS);

(function (a) {
  a.fromCharArray = function (d) {
    return d.join("");
  };

  a.toCharArray = function (d) {
    return d.split("");
  };

  a.singleton = function (d) {
    return d;
  };

  a._charAt = function (d) {
    return function (f) {
      return function (l) {
        return function (h) {
          return 0 <= l && l < h.length ? d(h.charAt(l)) : f;
        };
      };
    };
  };

  a.length = function (d) {
    return d.length;
  };

  a._indexOf = function (d) {
    return function (f) {
      return function (l) {
        return function (h) {
          h = h.indexOf(l);
          return -1 === h ? f : d(h);
        };
      };
    };
  };

  a.take = function (d) {
    return function (f) {
      return f.substr(0, d);
    };
  };

  a.drop = function (d) {
    return function (f) {
      return f.substring(d);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a.charAt = function (d) {
    return function (f) {
      if (0 <= d && d < f.length) return f.charAt(d);
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
      l = a["Data.Maybe"],
      h = a["Data.String.Unsafe"],
      b = f._indexOf(l.Just.create)(l.Nothing.value);

  f._charAt(l.Just.create)(l.Nothing.value);

  d.contains = function (e) {
    var c = b(e);
    return function (n) {
      return l.isJust(c(n));
    };
  };

  d.uncons = function (e) {
    return "" === e ? l.Nothing.value : new l.Just({
      head: h.charAt(0)(e),
      tail: f.drop(1)(e)
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
  a.unfoldrArrayImpl = function (d) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function (b) {
            return function (e) {
              for (var c = [];;) {
                e = b(e);
                if (d(e)) return c;
                e = f(e);
                c.push(l(e));
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
      l = a["Data.Functor"],
      h = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = a["Data.Unfoldable1"];
  a = new function (c, n) {
    this.Unfoldable10 = c;
    this.unfoldr = n;
  }(function () {
    return e.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(h.isNothing)(h.fromJust())(b.fst)(b.snd));

  d.unfoldr = function (c) {
    return c.unfoldr;
  };

  d.fromMaybe = function (c) {
    return (0, c.unfoldr)(function (n) {
      return l.map(h.functorMaybe)(f.flip(b.Tuple.create)(h.Nothing.value))(n);
    });
  };

  d.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var d = a["Data.String.CodePoints"],
      f = a["Data.String.CodePoints"],
      l = a["Data.Array"],
      h = a["Data.Boolean"],
      b = a["Data.Bounded"],
      e = a["Data.Enum"],
      c = a["Data.Eq"],
      n = a["Data.EuclideanRing"],
      m = a["Data.Functor"],
      k = a["Data.Int"],
      q = a["Data.Maybe"],
      w = a["Data.Ord"],
      u = a["Data.String.CodeUnits"],
      z = a["Data.String.Common"],
      t = a["Data.String.Unsafe"],
      p = a["Data.Tuple"],
      x = a["Data.Unfoldable"],
      A = function A(O) {
    return function (r) {
      return ((1024 * (O - 55296 | 0) | 0) + (r - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (O) {
    return "(CodePoint 0x" + (z.toUpper(k.toStringAs(k.hexadecimal)(O)) + ")");
  });

  var G = function G(O) {
    var r = u.length(O);
    if (0 === r) return q.Nothing.value;
    if (1 === r) return new q.Just({
      head: e.fromEnum(e.boundedEnumChar)(t.charAt(0)(O)),
      tail: ""
    });
    r = e.fromEnum(e.boundedEnumChar)(t.charAt(1)(O));
    var aa = e.fromEnum(e.boundedEnumChar)(t.charAt(0)(O));
    return 55296 <= aa && 56319 >= aa && 56320 <= r && 57343 >= r ? new q.Just({
      head: A(aa)(r),
      tail: u.drop(2)(O)
    }) : new q.Just({
      head: aa,
      tail: u.drop(1)(O)
    });
  },
      D = function D(O) {
    return m.map(q.functorMaybe)(function (r) {
      return new p.Tuple(r.head, r.tail);
    })(G(O));
  },
      H = f._unsafeCodePointAt0(function (O) {
    var r = e.fromEnum(e.boundedEnumChar)(t.charAt(0)(O));
    return 55296 <= r && 56319 >= r && 1 < u.length(O) && (O = e.fromEnum(e.boundedEnumChar)(t.charAt(1)(O)), 56320 <= O && 57343 >= O) ? A(r)(O) : r;
  }),
      E = f._toCodePointArray(function (O) {
    return x.unfoldr(x.unfoldableArray)(D)(O);
  })(H),
      F = function F(O) {
    return l.length(E(O));
  },
      K = function () {
    var O = e.toEnumWithDefaults(e.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (r) {
      return u.singleton(O(r));
    };
  }(),
      L = f._singleton(function (O) {
    if (65535 >= O) return K(O);
    var r = n.div(n.euclideanRingInt)(O - 65536 | 0)(1024) + 55296 | 0;
    O = n.mod(n.euclideanRingInt)(O - 65536 | 0)(1024) + 56320 | 0;
    return K(r) + K(O);
  }),
      v = function v(O) {
    return function (r) {
      if (1 > O) return "";
      var aa = G(r);
      return aa instanceof q.Just ? L(aa.value0.head) + v(O - 1 | 0)(aa.value0.tail) : r;
    };
  },
      M = f._take(v),
      T = new c.Eq(function (O) {
    return function (r) {
      return O === r;
    };
  }),
      B = new w.Ord(function () {
    return T;
  }, function (O) {
    return function (r) {
      return w.compare(w.ordInt)(O)(r);
    };
  }),
      N = function N(O) {
    return function (r) {
      for (var aa = O, ia = !1, ka; !ia;) {
        ka = aa;
        var qa = G(r);
        qa instanceof q.Just ? 0 === ka ? (ia = !0, ka = new q.Just(qa.value0.head)) : (aa = ka - 1 | 0, r = qa.value0.tail, ka = void 0) : (ia = !0, ka = q.Nothing.value);
      }

      return ka;
    };
  },
      I = new b.Bounded(function () {
    return B;
  }, 0, 1114111);

  c = new e.BoundedEnum(function () {
    return I;
  }, function () {
    return V;
  }, 1114112, function (O) {
    return O;
  }, function (O) {
    if (0 <= O && 1114111 >= O) return new q.Just(O);
    if (h.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [O.constructor.name]);
  });
  var V = new e.Enum(function () {
    return B;
  }, e.defaultPred(e.toEnum(c))(e.fromEnum(c)), e.defaultSucc(e.toEnum(c))(e.fromEnum(c)));
  d.singleton = L;
  d.toCodePointArray = E;

  d.codePointAt = function (O) {
    return function (r) {
      return 0 > O || 0 === O && "" === r ? q.Nothing.value : 0 === O ? new q.Just(H(r)) : f._codePointAt(N)(q.Just.create)(q.Nothing.value)(H)(O)(r);
    };
  };

  d.length = F;

  d.indexOf = function (O) {
    return function (r) {
      return m.map(q.functorMaybe)(function (aa) {
        return F(u.take(aa)(r));
      })(u.indexOf(O)(r));
    };
  };

  d.take = M;

  d.drop = function (O) {
    return function (r) {
      return u.drop(u.length(M(O)(r)))(r);
    };
  };

  d.showCodePoint = a;
  d.boundedEnumCodePoint = c;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.String"] = a["Text.Parsing.Parser.String"] || {};
  var d = a["Text.Parsing.Parser.String"],
      f = a["Control.Applicative"],
      l = a["Control.Bind"],
      h = a["Control.Monad.State.Class"],
      b = a["Data.Eq"],
      e = a["Data.Foldable"],
      c = a["Data.Function"],
      n = a["Data.Maybe"],
      m = a["Data.Newtype"],
      k = a["Data.Show"],
      q = a["Data.String.CodePoints"],
      w = a["Data.String.CodeUnits"],
      u = a["Data.String.Pattern"],
      z = a["Text.Parsing.Parser"],
      t = a["Text.Parsing.Parser.Combinators"],
      p = a["Text.Parsing.Parser.Pos"];
  a = new function (G, D, H, E) {
    this.drop = G;
    this.indexOf = D;
    this["null"] = H;
    this.uncons = E;
  }(q.drop, q.indexOf, a["Data.String.Common"]["null"], w.uncons);

  var x = function x(G) {
    return function (D) {
      return l.bind(z.bindParserT(D))(h.gets(z.monadStateParserT(D))(function (H) {
        return H.value0;
      }))(function (H) {
        var E = (0, G.uncons)(H);
        if (E instanceof n.Nothing) return z.fail(D)("Unexpected EOF");
        if (E instanceof n.Just) return l.discard(l.discardUnit)(z.bindParserT(D))(h.modify_(z.monadStateParserT(D))(function (F) {
          return new z.ParseState(E.value0.tail, p.updatePosString(F.value1)(w.singleton(E.value0.head)), !0);
        }))(function () {
          return f.pure(z.applicativeParserT(D))(E.value0.head);
        });
        throw Error("Failed pattern match at Text.Parsing.Parser.String (line 56, column 3 - line 63, column 16): " + [E.constructor.name]);
      });
    };
  },
      A = function A(G) {
    return function (D) {
      return function (H) {
        return t.tryRethrow(D)(l.bind(z.bindParserT(D))(x(G)(D))(function (E) {
          return H(E) ? f.pure(z.applicativeParserT(D))(E) : z.fail(D)("Character '" + (w.singleton(E) + "' did not satisfy predicate"));
        }));
      };
    };
  };

  d.eof = function (G) {
    return function (D) {
      return l.bind(z.bindParserT(D))(h.gets(z.monadStateParserT(D))(function (H) {
        return H.value0;
      }))(function (H) {
        return f.unless(z.applicativeParserT(D))((0, G["null"])(H))(z.fail(D)("Expected EOF"));
      });
    };
  };

  d.string = function (G) {
    return function (D) {
      return function (H) {
        return l.bind(z.bindParserT(D))(h.gets(z.monadStateParserT(D))(function (E) {
          return E.value0;
        }))(function (E) {
          var F = (0, G.indexOf)(m.wrap(u.newtypePattern)(H))(E);
          return F instanceof n.Just && 0 === F.value0 ? l.discard(l.discardUnit)(z.bindParserT(D))(h.modify_(z.monadStateParserT(D))(function (K) {
            return new z.ParseState((0, G.drop)(q.length(H))(E), p.updatePosString(K.value1)(H), !0);
          }))(function () {
            return f.pure(z.applicativeParserT(D))(H);
          }) : z.fail(D)("Expected " + k.show(k.showString)(H));
        });
      };
    };
  };

  d.noneOf = function (G) {
    return function (D) {
      return function (H) {
        return t.withErrorMessage(D)(A(G)(D)(c.flip(e.notElem(e.foldableArray)(b.eqChar))(H)))("none of " + k.show(k.showArray(k.showChar))(H));
      };
    };
  };

  d.stringLikeString = a;
})(PS);

(function (a) {
  a["Data.Formatter.Parser.Utils"] = a["Data.Formatter.Parser.Utils"] || {};

  var d = a["Data.Formatter.Parser.Utils"],
      f = a["Control.Apply"],
      l = a["Data.Bifunctor"],
      h = a["Data.Either"],
      b = a["Data.Functor"],
      e = a["Data.Identity"],
      c = a["Data.Show"],
      n = a["Text.Parsing.Parser"],
      m = a["Text.Parsing.Parser.Combinators"],
      k = a["Text.Parsing.Parser.String"],
      q = function q(w) {
    var u = n.parseErrorMessage(w);
    w = n.parseErrorPosition(w);
    w = "(line " + (c.show(c.showInt)(w.line) + (", col " + (c.show(c.showInt)(w.column) + ")")));
    return u + (" " + w);
  };

  d.oneOfAs = function (w) {
    return function (u) {
      return function (z) {
        return function (t) {
          return function (p) {
            return m.choice(u)(z)(b.map(w)(function (x) {
              return b.voidLeft(n.functorParserT(z.Bind1().Apply0().Functor0()))(t(x.value0))(x.value1);
            })(p));
          };
        };
      };
    };
  };

  d.runP = function (w) {
    return function (u) {
      return function (z) {
        return l.lmap(h.bifunctorEither)(q)(n.runParser(z)(f.applyFirst(n.applyParserT(e.monadIdentity))(u)(k.eof(w)(e.monadIdentity))));
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var d = a["Data.Time.Component"],
      f = a["Data.Boolean"],
      l = a["Data.Bounded"],
      h = a["Data.Enum"],
      b = a["Data.Maybe"];
  a = a["Data.Ord"];
  var e = a.ordInt,
      c = a.ordInt,
      n = a.ordInt,
      m = a.ordInt,
      k = new l.Bounded(function () {
    return e;
  }, 0, 59),
      q = new l.Bounded(function () {
    return c;
  }, 0, 59),
      w = new l.Bounded(function () {
    return n;
  }, 0, 999),
      u = new l.Bounded(function () {
    return m;
  }, 0, 23),
      z = new h.BoundedEnum(function () {
    return k;
  }, function () {
    return t;
  }, 60, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 59 >= E) return new b.Just(E);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [E.constructor.name]);
  }),
      t = new h.Enum(function () {
    return e;
  }, function () {
    var E = h.toEnum(z),
        F = h.fromEnum(z);
    return function (K) {
      return E(F(K) - 1 | 0);
    };
  }(), function () {
    var E = h.toEnum(z),
        F = h.fromEnum(z);
    return function (K) {
      return E(F(K) + 1 | 0);
    };
  }()),
      p = new h.BoundedEnum(function () {
    return q;
  }, function () {
    return x;
  }, 60, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 59 >= E) return new b.Just(E);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [E.constructor.name]);
  }),
      x = new h.Enum(function () {
    return c;
  }, function () {
    var E = h.toEnum(p),
        F = h.fromEnum(p);
    return function (K) {
      return E(F(K) - 1 | 0);
    };
  }(), function () {
    var E = h.toEnum(p),
        F = h.fromEnum(p);
    return function (K) {
      return E(F(K) + 1 | 0);
    };
  }()),
      A = new h.BoundedEnum(function () {
    return w;
  }, function () {
    return G;
  }, 1E3, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 999 >= E) return new b.Just(E);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [E.constructor.name]);
  }),
      G = new h.Enum(function () {
    return n;
  }, function () {
    var E = h.toEnum(A),
        F = h.fromEnum(A);
    return function (K) {
      return E(F(K) - 1 | 0);
    };
  }(), function () {
    var E = h.toEnum(A),
        F = h.fromEnum(A);
    return function (K) {
      return E(F(K) + 1 | 0);
    };
  }()),
      D = new h.BoundedEnum(function () {
    return u;
  }, function () {
    return H;
  }, 24, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 23 >= E) return new b.Just(E);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [E.constructor.name]);
  }),
      H = new h.Enum(function () {
    return m;
  }, function () {
    var E = h.toEnum(D),
        F = h.fromEnum(D);
    return function (K) {
      return E(F(K) - 1 | 0);
    };
  }(), function () {
    var E = h.toEnum(D),
        F = h.fromEnum(D);
    return function (K) {
      return E(F(K) + 1 | 0);
    };
  }());
  d.boundedHour = u;
  d.boundedEnumHour = D;
  d.boundedMinute = q;
  d.boundedEnumMinute = p;
  d.boundedSecond = k;
  d.boundedEnumSecond = z;
  d.boundedMillisecond = w;
  d.boundedEnumMillisecond = A;
})(PS);

(function (a) {
  a["Data.Time.Duration"] = a["Data.Time.Duration"] || {};
  var d = a["Data.Time.Duration"];
  a = new a["Data.Newtype"].Newtype(function (f) {
    return f;
  }, function (f) {
    return f;
  });
  d.newtypeMilliseconds = a;
})(PS);

(function (a) {
  a["Data.Formatter.DateTime"] = a["Data.Formatter.DateTime"] || {};

  var d = a["Data.Formatter.DateTime"],
      f = a["Control.Alt"],
      l = a["Data.Array"],
      h = a["Data.Boolean"],
      b = a["Data.Date"],
      e = a["Data.Date.Component"],
      c = a["Data.DateTime.Instant"],
      n = a["Data.Either"],
      m = a["Data.Enum"],
      k = a["Data.EuclideanRing"],
      q = a["Data.Foldable"],
      w = a["Data.Formatter.Parser.Utils"],
      u = a["Data.Functor"],
      z = a["Data.Identity"],
      t = a["Data.Int"],
      p = a["Data.List"],
      x = a["Data.List.Types"],
      A = a["Data.Monoid"],
      G = a["Data.Newtype"],
      D = a["Data.Ord"],
      H = a["Data.Ring"],
      E = a["Data.Show"],
      F = a["Data.String.CodePoints"],
      K = a["Data.String.CodeUnits"],
      L = a["Data.Time"],
      v = a["Data.Time.Component"],
      M = a["Data.Time.Duration"],
      T = a["Data.Tuple"],
      B = a["Text.Parsing.Parser"],
      N = a["Text.Parsing.Parser.Combinators"],
      I = a["Text.Parsing.Parser.String"],
      V = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      O = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      r = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      aa = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ia = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ka = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      qa = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ua = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ra = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      wa = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ea = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      sa = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ca = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      Q = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      P = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      C = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      U = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      R = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      J = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ja = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      fa = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      y = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      W = function () {
    function S(oa) {
      this.value0 = oa;
    }

    S.create = function (oa) {
      return new S(oa);
    };

    return S;
  }(),
      Z = function Z(S) {
    if (S instanceof e.January) return "Jan";
    if (S instanceof e.February) return "Feb";
    if (S instanceof e.March) return "Mar";
    if (S instanceof e.April) return "Apr";
    if (S instanceof e.May) return "May";
    if (S instanceof e.June) return "Jun";
    if (S instanceof e.July) return "Jul";
    if (S instanceof e.August) return "Aug";
    if (S instanceof e.September) return "Sep";
    if (S instanceof e.October) return "Oct";
    if (S instanceof e.November) return "Nov";
    if (S instanceof e.December) return "Dec";
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 482, column 19 - line 494, column 21): " + [S.constructor.name]);
  };

  a = u.mapFlipped(B.functorParserT(z.functorIdentity))(l.some(B.alternativeParserT(z.monadIdentity))(B.lazyParserT)(I.noneOf(I.stringLikeString)(z.monadIdentity)(K.toCharArray("YMDEHhamsS"))))(K.fromCharArray);

  var ba = function ba(S) {
    if (0 > S) return "-" + ba(-S | 0);
    if (10 > S) return "0" + E.show(E.showInt)(S);
    if (h.otherwise) return E.show(E.showInt)(S);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 192, column 1 - line 192, column 30): " + [S.constructor.name]);
  },
      na = function na(S) {
    if (0 > S) return "-" + na(-S | 0);
    if (10 > S) return "000" + E.show(E.showInt)(S);
    if (100 > S) return "00" + E.show(E.showInt)(S);
    if (1E3 > S) return "0" + E.show(E.showInt)(S);
    if (h.otherwise) return E.show(E.showInt)(S);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 205, column 1 - line 205, column 33): " + [S.constructor.name]);
  },
      pa = function pa(S) {
    if (0 > S) return "-" + pa(-S | 0);
    if (10 > S) return "00" + E.show(E.showInt)(S);
    if (100 > S) return "0" + E.show(E.showInt)(S);
    if (h.otherwise) return E.show(E.showInt)(S);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 198, column 1 - line 198, column 30): " + [S.constructor.name]);
  };

  f = f.alt(B.altParserT(z.monadIdentity))(w.oneOfAs(u.functorArray)(q.foldableArray)(z.monadIdentity)(function () {
    var S = N["try"](z.monadIdentity),
        oa = I.string(I.stringLikeString)(z.monadIdentity);
    return function (Ma) {
      return S(oa(Ma));
    };
  }())([new T.Tuple("YYYY", V.value), new T.Tuple("YY", O.value), new T.Tuple("Y", r.value), new T.Tuple("MMMM", aa.value), new T.Tuple("MMM", ia.value), new T.Tuple("MM", ka.value), new T.Tuple("DD", qa.value), new T.Tuple("D", ua.value), new T.Tuple("E", wa.value), new T.Tuple("X", ra.value), new T.Tuple("dddd", ea.value), new T.Tuple("ddd", sa.value), new T.Tuple("HH", ca.value), new T.Tuple("hh", Q.value), new T.Tuple("a", P.value), new T.Tuple("mm", U.value), new T.Tuple("m", C.value), new T.Tuple("ss", J.value), new T.Tuple("s", R.value), new T.Tuple("SSS", ja.value), new T.Tuple("SS", y.value), new T.Tuple("S", fa.value)]))(u.map(B.functorParserT(z.functorIdentity))(W.create)(a));

  var Da = function Da(S) {
    S = E.show(E.showInt)(D.abs(D.ordInt)(H.ringInt)(S));
    var oa = F.length(S);
    return 1 === oa ? "0" + S : 2 === oa ? S : F.drop(oa - 2 | 0)(S);
  };

  p = p.some(B.alternativeParserT(z.monadIdentity))(B.lazyParserT)(f);

  var Ga = w.runP(I.stringLikeString)(p),
      Ea = function Ea(S) {
    return 0 === S ? 12 : S;
  },
      Sa = function Sa(S) {
    return function (oa) {
      if (oa instanceof V) return na(m.fromEnum(e.boundedEnumYear)(b.year(S.value0)));
      if (oa instanceof O) return Da(m.fromEnum(e.boundedEnumYear)(b.year(S.value0)));
      if (oa instanceof r) return E.show(E.showInt)(m.fromEnum(e.boundedEnumYear)(b.year(S.value0)));
      if (oa instanceof aa) return E.show(e.showMonth)(b.month(S.value0));
      if (oa instanceof ia) return Z(b.month(S.value0));
      if (oa instanceof ka) return ba(m.fromEnum(e.boundedEnumMonth)(b.month(S.value0)));
      if (oa instanceof qa) return ba(m.fromEnum(e.boundedEnumDay)(b.day(S.value0)));
      if (oa instanceof ua) return E.show(E.showInt)(m.fromEnum(e.boundedEnumDay)(b.day(S.value0)));
      if (oa instanceof ra) return E.show(E.showInt)(t.floor(G.unwrap(M.newtypeMilliseconds)(c.unInstant(c.fromDateTime(S))) / 1E3));
      if (oa instanceof wa) return E.show(E.showInt)(m.fromEnum(e.boundedEnumWeekday)(b.weekday(S.value0)));
      if (oa instanceof ea) return E.show(e.showWeekday)(b.weekday(S.value0));
      if (oa instanceof sa) return F.take(3)(E.show(e.showWeekday)(b.weekday(S.value0)));
      if (oa instanceof ca) return ba(m.fromEnum(v.boundedEnumHour)(L.hour(S.value1)));
      if (oa instanceof Q) return ba(Ea(k.mod(k.euclideanRingInt)(m.fromEnum(v.boundedEnumHour)(L.hour(S.value1)))(12)));
      if (oa instanceof P) return 12 <= m.fromEnum(v.boundedEnumHour)(L.hour(S.value1)) ? "PM" : "AM";
      if (oa instanceof C) return E.show(E.showInt)(m.fromEnum(v.boundedEnumMinute)(L.minute(S.value1)));
      if (oa instanceof U) return ba(m.fromEnum(v.boundedEnumMinute)(L.minute(S.value1)));
      if (oa instanceof R) return E.show(E.showInt)(m.fromEnum(v.boundedEnumSecond)(L.second(S.value1)));
      if (oa instanceof J) return ba(m.fromEnum(v.boundedEnumSecond)(L.second(S.value1)));
      if (oa instanceof ja) return pa(m.fromEnum(v.boundedEnumMillisecond)(L.millisecond(S.value1)));
      if (oa instanceof fa) return E.show(E.showInt)(function (Ma) {
        return k.div(k.euclideanRingInt)(Ma)(100);
      }(m.fromEnum(v.boundedEnumMillisecond)(L.millisecond(S.value1))));
      if (oa instanceof y) return ba(function (Ma) {
        return k.div(k.euclideanRingInt)(Ma)(10);
      }(m.fromEnum(v.boundedEnumMillisecond)(L.millisecond(S.value1))));
      if (oa instanceof W) return oa.value0;
      throw Error("Failed pattern match at Data.Formatter.DateTime (line 167, column 38 - line 190, column 20): " + [oa.constructor.name]);
    };
  },
      Pa = function Pa(S) {
    return function (oa) {
      return q.foldMap(x.foldableList)(A.monoidString)(Sa(oa))(S);
    };
  };

  d.formatDateTime = function (S) {
    return function (oa) {
      return u.mapFlipped(n.functorEither)(Ga(S))(function (Ma) {
        return Pa(Ma)(oa);
      });
    };
  };
})(PS);

(function (a) {
  a.runFn2 = function (d) {
    return function (f) {
      return function (l) {
        return d(f, l);
      };
    };
  };

  a.runFn4 = function (d) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function (b) {
            return d(f, l, h, b);
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
    function h(b) {
      this.value0 = b;
    }

    h.create = function (b) {
      return new h(b);
    };

    return h;
  }(),
      f = function () {
    function h(b) {
      this.value0 = b;
    }

    h.create = function (b) {
      return new h(b);
    };

    return h;
  }(),
      l = function () {
    function h() {}

    h.value = new h();
    return h;
  }();

  a.Generic = function (h, b) {
    this.from = h;
    this.to = b;
  };

  a.to = function (h) {
    return h.to;
  };

  a.from = function (h) {
    return h.from;
  };

  a.NoArguments = l;
  a.Inl = d;
  a.Inr = f;

  a.Constructor = function (h) {
    return h;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var d = a["Data.Generic.Rep.Bounded"],
      f = a["Data.Generic.Rep"],
      l = function l(n) {
    this["genericTop'"] = n;
  },
      h = function h(n) {
    this["genericBottom'"] = n;
  };

  a = new l(f.NoArguments.value);

  var b = function b(n) {
    return n["genericTop'"];
  },
      e = new h(f.NoArguments.value),
      c = function c(n) {
    return n["genericBottom'"];
  };

  d["genericBottom'"] = c;

  d.genericBottom = function (n) {
    return function (m) {
      return f.to(n)(c(m));
    };
  };

  d["genericTop'"] = b;

  d.genericTop = function (n) {
    return function (m) {
      return f.to(n)(b(m));
    };
  };

  d.genericBottomNoArguments = e;

  d.genericBottomSum = function (n) {
    return new h(new f.Inl(c(n)));
  };

  d.genericBottomConstructor = function (n) {
    return new h(c(n));
  };

  d.genericTopNoArguments = a;

  d.genericTopSum = function (n) {
    return new l(new f.Inr(b(n)));
  };

  d.genericTopConstructor = function (n) {
    return new l(b(n));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var d = a["Data.Generic.Rep.Enum"],
      f = a["Data.Boolean"],
      l = a["Data.Enum"],
      h = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Maybe"],
      n = a["Data.Newtype"],
      m = function m(x, A) {
    this["genericPred'"] = x;
    this["genericSucc'"] = A;
  },
      k = function k(x, A, G) {
    this["genericCardinality'"] = x;
    this["genericFromEnum'"] = A;
    this["genericToEnum'"] = G;
  },
      q = function q(x) {
    return x["genericToEnum'"];
  },
      w = function w(x) {
    return x["genericSucc'"];
  },
      u = function u(x) {
    return x["genericPred'"];
  },
      z = function z(x) {
    return x["genericFromEnum'"];
  };

  a = new m(function (x) {
    return c.Nothing.value;
  }, function (x) {
    return c.Nothing.value;
  });

  var t = function t(x) {
    return x["genericCardinality'"];
  },
      p = new k(1, function (x) {
    return 0;
  }, function (x) {
    return 0 === x ? new c.Just(b.NoArguments.value) : c.Nothing.value;
  });

  d.genericPred = function (x) {
    return function (A) {
      var G = h.map(c.functorMaybe)(b.to(x)),
          D = u(A),
          H = b.from(x);
      return function (E) {
        return G(D(H(E)));
      };
    };
  };

  d.genericSucc = function (x) {
    return function (A) {
      var G = h.map(c.functorMaybe)(b.to(x)),
          D = w(A),
          H = b.from(x);
      return function (E) {
        return G(D(H(E)));
      };
    };
  };

  d.genericCardinality = function (x) {
    return function (A) {
      return n.unwrap(l.newtypeCardinality)(t(A));
    };
  };

  d.genericToEnum = function (x) {
    return function (A) {
      var G = h.map(c.functorMaybe)(b.to(x)),
          D = q(A);
      return function (H) {
        return G(D(H));
      };
    };
  };

  d.genericFromEnum = function (x) {
    return function (A) {
      var G = z(A),
          D = b.from(x);
      return function (H) {
        return G(D(H));
      };
    };
  };

  d.genericEnumNoArguments = a;

  d.genericEnumConstructor = function (x) {
    return new m(function (A) {
      return h.map(c.functorMaybe)(b.Constructor)(u(x)(A));
    }, function (A) {
      return h.map(c.functorMaybe)(b.Constructor)(w(x)(A));
    });
  };

  d.genericEnumSum = function (x) {
    return function (A) {
      return function (G) {
        return function (D) {
          return new m(function (H) {
            if (H instanceof b.Inl) return h.map(c.functorMaybe)(b.Inl.create)(u(x)(H.value0));

            if (H instanceof b.Inr) {
              H = u(G)(H.value0);
              if (H instanceof c.Nothing) return new c.Just(new b.Inl(e["genericTop'"](A)));
              if (H instanceof c.Just) return new c.Just(new b.Inr(H.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [H.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [H.constructor.name]);
          }, function (H) {
            if (H instanceof b.Inl) {
              H = w(x)(H.value0);
              if (H instanceof c.Nothing) return new c.Just(new b.Inr(e["genericBottom'"](D)));
              if (H instanceof c.Just) return new c.Just(new b.Inl(H.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [H.constructor.name]);
            }

            if (H instanceof b.Inr) return h.map(c.functorMaybe)(b.Inr.create)(w(G)(H.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [H.constructor.name]);
          });
        };
      };
    };
  };

  d.genericBoundedEnumNoArguments = p;

  d.genericBoundedEnumConstructor = function (x) {
    return new k(n.unwrap(l.newtypeCardinality)(t(x)), function (A) {
      return z(x)(A);
    }, function (A) {
      return h.map(c.functorMaybe)(b.Constructor)(q(x)(A));
    });
  };

  d.genericBoundedEnumSum = function (x) {
    return function (A) {
      return new k(l.Cardinality(n.unwrap(l.newtypeCardinality)(t(x)) + n.unwrap(l.newtypeCardinality)(t(A)) | 0), function (G) {
        if (G instanceof b.Inl) return z(x)(G.value0);
        if (G instanceof b.Inr) return z(A)(G.value0) + n.unwrap(l.newtypeCardinality)(t(x)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [G.constructor.name]);
      }, function (G) {
        var D = t(x);
        if (0 <= G && G < D) G = h.map(c.functorMaybe)(b.Inl.create)(q(x)(G));else if (f.otherwise) G = h.map(c.functorMaybe)(b.Inr.create)(q(A)(G - D | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [D.constructor.name]);
        return G;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var d = a["Data.Generic.Rep.Eq"],
      f = a["Data.Generic.Rep"],
      l = function l(h) {
    this["genericEq'"] = h;
  };

  a = new l(function (h) {
    return function (b) {
      return !0;
    };
  });

  d.genericEq = function (h) {
    return function (b) {
      return function (e) {
        return function (c) {
          return (0, b["genericEq'"])(f.from(h)(e))(f.from(h)(c));
        };
      };
    };
  };

  d.genericEqNoArguments = a;

  d.genericEqSum = function (h) {
    return function (b) {
      return new l(function (e) {
        return function (c) {
          return e instanceof f.Inl && c instanceof f.Inl ? (0, h["genericEq'"])(e.value0)(c.value0) : e instanceof f.Inr && c instanceof f.Inr ? (0, b["genericEq'"])(e.value0)(c.value0) : !1;
        };
      });
    };
  };

  d.genericEqConstructor = function (h) {
    return new l(function (b) {
      return function (e) {
        return (0, h["genericEq'"])(b)(e);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var d = a["Data.Generic.Rep.Ord"],
      f = a["Data.Generic.Rep"],
      l = a["Data.Ordering"],
      h = function h(e) {
    this["genericCompare'"] = e;
  };

  a = new h(function (e) {
    return function (c) {
      return l.EQ.value;
    };
  });

  var b = function b(e) {
    return e["genericCompare'"];
  };

  d.genericCompare = function (e) {
    return function (c) {
      return function (n) {
        return function (m) {
          return b(c)(f.from(e)(n))(f.from(e)(m));
        };
      };
    };
  };

  d.genericOrdNoArguments = a;

  d.genericOrdSum = function (e) {
    return function (c) {
      return new h(function (n) {
        return function (m) {
          if (n instanceof f.Inl && m instanceof f.Inl) return b(e)(n.value0)(m.value0);
          if (n instanceof f.Inr && m instanceof f.Inr) return b(c)(n.value0)(m.value0);
          if (n instanceof f.Inl && m instanceof f.Inr) return l.LT.value;
          if (n instanceof f.Inr && m instanceof f.Inl) return l.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [n.constructor.name, m.constructor.name]);
        };
      });
    };
  };

  d.genericOrdConstructor = function (e) {
    return new h(function (c) {
      return function (n) {
        return b(e)(c)(n);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Symbol"] = a["Data.Symbol"] || {};
  a = a["Data.Symbol"];

  var d = function () {
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

  a.SProxy = d;
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var d = a["Data.Generic.Rep.Show"],
      f = a["Data.Foldable"],
      l = a["Data.Generic.Rep"],
      h = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = a["Data.Symbol"],
      c = function c(n) {
    this["genericShow'"] = n;
  };

  a = new function (n) {
    this.genericShowArgs = n;
  }(function (n) {
    return [];
  });

  d.genericShow = function (n) {
    return function (m) {
      return function (k) {
        return (0, m["genericShow'"])(l.from(n)(k));
      };
    };
  };

  d.genericShowArgsNoArguments = a;

  d.genericShowSum = function (n) {
    return function (m) {
      return new c(function (k) {
        if (k instanceof l.Inl) return (0, n["genericShow'"])(k.value0);
        if (k instanceof l.Inr) return (0, m["genericShow'"])(k.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [k.constructor.name]);
      });
    };
  };

  d.genericShowConstructor = function (n) {
    return function (m) {
      return new c(function (k) {
        var q = e.reflectSymbol(m)(e.SProxy.value);
        k = (0, n.genericShowArgs)(k);
        return 0 === k.length ? q : "(" + (f.intercalate(f.foldableArray)(h.monoidString)(" ")(b.append(b.semigroupArray)([q])(k)) + ")");
      });
    };
  };
})(PS);

(function (a) {
  a["Data.List.NonEmpty"] = a["Data.List.NonEmpty"] || {};
  var d = a["Data.List.NonEmpty"],
      f = a["Data.List.Types"],
      l = a["Data.NonEmpty"];

  a = function () {
    var h = l.singleton(f.plusList);
    return function (b) {
      return f.NonEmptyList(h(b));
    };
  }();

  d.singleton = a;
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};
  var d = a["Data.Maybe.First"],
      f = a["Data.Maybe"];
  a = new a["Data.Semigroup"].Semigroup(function (l) {
    return function (h) {
      return l instanceof f.Just ? l : h;
    };
  });
  d.semigroupFirst = a;
})(PS);

(function (a) {
  a["Data.Natural"] = a["Data.Natural"] || {};
  a = a["Data.Natural"];

  a.intToNat = function (d) {
    return 0 <= d ? d : 0;
  };

  a.natToInt = function (d) {
    return d;
  };
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  a = a["Data.Profunctor"];
  var d = new function (f) {
    this.dimap = f;
  }(function (f) {
    return function (l) {
      return function (h) {
        return function (b) {
          return l(h(f(b)));
        };
      };
    };
  });

  a.dimap = function (f) {
    return f.dimap;
  };

  a.profunctorFn = d;
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};
  var d = a["Data.Profunctor.Strong"],
      f = a["Control.Category"],
      l = a["Control.Semigroupoid"],
      h = a["Data.Profunctor"],
      b = a["Data.Tuple"];
  a = new function (c, n, m) {
    this.Profunctor0 = c;
    this.first = n;
    this.second = m;
  }(function () {
    return h.profunctorFn;
  }, function (c) {
    return function (n) {
      return new b.Tuple(c(n.value0), n.value1);
    };
  }, a["Data.Functor"].map(b.functorTuple));

  var e = function e(c) {
    return function (n) {
      return function (m) {
        return function (k) {
          return l.composeFlipped(c.Semigroupoid0())((0, n.first)(m))((0, n.second)(k));
        };
      };
    };
  };

  d.second = function (c) {
    return c.second;
  };

  d.fanout = function (c) {
    return function (n) {
      return function (m) {
        return function (k) {
          var q = h.dimap(n.Profunctor0())(f.identity(f.categoryFn))(function (w) {
            return new b.Tuple(w, w);
          })(f.identity(c));
          return l.composeFlipped(c.Semigroupoid0())(q)(e(c)(n)(m)(k));
        };
      };
    };
  };

  d.strongFn = a;
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var d = a["Data.String.NonEmpty.Internal"],
      f = a["Data.Maybe"];

  d.fromString = function (l) {
    return "" === l ? f.Nothing.value : new f.Just(l);
  };

  d.toString = function (l) {
    return l;
  };
})(PS);

(function (a) {
  a.endsWith = function (d) {
    return function (f) {
      return f.endsWith(d);
    };
  };

  a.fromCharArray = function (d) {
    return d.join("");
  };

  a.startsWith = function (d) {
    return function (f) {
      return f.startsWith(d);
    };
  };
})(PS["Data.String.Utils"] = PS["Data.String.Utils"] || {});

(function (a) {
  a["Data.String.Utils"] = a["Data.String.Utils"] || {};
  var d = a["Data.String.Utils"];
  a = a["Data.String.Utils"];
  d.endsWith = a.endsWith;
  d.fromCharArray = a.fromCharArray;
  d.startsWith = a.startsWith;
})(PS);

(function (a) {
  a["Data.XPath"] = a["Data.XPath"] || {};
  var d = a["Data.XPath"],
      f = a["Data.Semigroup"],
      l = new function (h, b, e, c, n, m) {
    this.Semigroup0 = h;
    this.at = b;
    this.pathAppend = e;
    this.pathAppendNSx = c;
    this.root = n;
    this.xx = m;
  }(function () {
    return f.semigroupString;
  }, function (h) {
    return "@" + h;
  }, function (h) {
    return function (b) {
      return h === l.root ? l.root + b : h + ("/" + b);
    };
  }, function (h) {
    return function (b) {
      return h === l.root ? l.root + ("x:" + b) : h + ("/x:" + b);
    };
  }, "/", function (h) {
    return "x:" + h;
  });

  d.pathAppend = function (h) {
    return h.pathAppend;
  };

  d.pathAppendNSx = function (h) {
    return h.pathAppendNSx;
  };

  d.at = function (h) {
    return h.at;
  };

  d.xx = function (h) {
    return h.xx;
  };

  d.root = function (h) {
    return h.root;
  };

  d.stringXPath = l;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var d = a["Effect.Class"],
      f = a["Effect.Console"];

  a["Effect.Class.Console"].log = function (l) {
    var h = d.liftEffect(l);
    return function (b) {
      return h(f.log(b));
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
  var d = a["Effect.Now"],
      f = a["Effect.Now"],
      l = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(l.toDateTime)(f.now);
  d.nowDateTime = a;
})(PS);

(function (a) {
  a.unsafeFromForeign = function (d) {
    return d;
  };

  a.tagOf = function (d) {
    return Object.prototype.toString.call(d).slice(8, -1);
  };
})(PS.Foreign = PS.Foreign || {});

(function (a) {
  a.Foreign = a.Foreign || {};

  var d = a.Foreign,
      f = a.Foreign,
      l = a["Control.Applicative"],
      h = a["Control.Monad.Error.Class"],
      b = a["Control.Monad.Except.Trans"],
      e = a["Data.Boolean"],
      c = a["Data.Identity"],
      n = a["Data.List.NonEmpty"],
      m = a["Data.Show"],
      k = function () {
    function p(x) {
      this.value0 = x;
    }

    p.create = function (x) {
      return new p(x);
    };

    return p;
  }(),
      q = function () {
    function p(x, A) {
      this.value0 = x;
      this.value1 = A;
    }

    p.create = function (x) {
      return function (A) {
        return new p(x, A);
      };
    };

    return p;
  }(),
      w = function () {
    function p(x, A) {
      this.value0 = x;
      this.value1 = A;
    }

    p.create = function (x) {
      return function (A) {
        return new p(x, A);
      };
    };

    return p;
  }(),
      u = function () {
    function p(x, A) {
      this.value0 = x;
      this.value1 = A;
    }

    p.create = function (x) {
      return function (A) {
        return new p(x, A);
      };
    };

    return p;
  }(),
      z = new m.Show(function (p) {
    if (p instanceof k) return "(ForeignError " + (m.show(m.showString)(p.value0) + ")");
    if (p instanceof w) return "(ErrorAtIndex " + (m.show(m.showInt)(p.value0) + (" " + (m.show(z)(p.value1) + ")")));
    if (p instanceof u) return "(ErrorAtProperty " + (m.show(m.showString)(p.value0) + (" " + (m.show(z)(p.value1) + ")")));
    if (p instanceof q) return "(TypeMismatch " + (m.show(m.showString)(p.value0) + (" " + (m.show(m.showString)(p.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [p.constructor.name]);
  }),
      t = function () {
    var p = h.throwError(b.monadThrowExceptT(c.monadIdentity));
    return function (x) {
      return p(n.singleton(x));
    };
  }();

  a = function (p) {
    return function (x) {
      if (f.tagOf(x) === p) return l.pure(b.applicativeExceptT(c.monadIdentity))(f.unsafeFromForeign(x));
      if (e.otherwise) return t(new q(p, f.tagOf(x)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [p.constructor.name, x.constructor.name]);
    };
  }("String");

  d.readString = a;
  d.showForeignError = z;
})(PS);

(function (a) {
  function d(f) {
    return function (l) {
      var h = [],
          b;

      for (b in l) {
        hasOwnProperty.call(l, b) && h.push(f(b)(l[b]));
      }

      return h;
    };
  }

  a._copyST = function (f) {
    return function () {
      var l = {},
          h;

      for (h in f) {
        hasOwnProperty.call(f, h) && (l[h] = f[h]);
      }

      return l;
    };
  };

  a.empty = {};

  a.runST = function (f) {
    return f();
  };

  a._lookup = function (f, l, h, b) {
    return h in b ? l(b[h]) : f;
  };

  a._lookupST = function (f, l, h, b) {
    return function () {
      return h in b ? l(b[h]) : f;
    };
  };

  a.keys = Object.keys || d(function (f) {
    return function () {
      return f;
    };
  });
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});

(function (a) {
  a["new"] = function () {
    return {};
  };

  a.poke = function (d) {
    return function (f) {
      return function (l) {
        return function () {
          l[d] = f;
          return l;
        };
      };
    };
  };

  a["delete"] = function (d) {
    return function (f) {
      return function () {
        delete f[d];
        return f;
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
      l = a["Control.Monad.ST.Internal"],
      h = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Foreign.Object.ST"],
      c = f._copyST,
      n = function n(q) {
    return function (w) {
      return f.runST(function () {
        var u = c(w)();
        q(u)();
        return u;
      });
    };
  },
      m = a["Data.Function.Uncurried"].runFn4(f._lookup)(b.Nothing.value)(b.Just.create),
      k = function k(q) {
    return function (w) {
      return n(e.poke(q)(w));
    };
  };

  d.lookup = m;

  d.fromFoldableWith = function (q) {
    return function (w) {
      return function (u) {
        return f.runST(function () {
          var z = e["new"]();
          h.for_(l.applicativeST)(q)(u)(function (t) {
            return function () {
              var p = f._lookupST(t.value1, w(t.value1), t.value0, z)();

              return e.poke(t.value0)(p)(z)();
            };
          })();
          return z;
        });
      };
    };
  };

  d.alter = function (q) {
    return function (w) {
      return function (u) {
        var z = q(m(w)(u));
        if (z instanceof b.Nothing) return n(e["delete"](w))(u);
        if (z instanceof b.Just) return k(w)(z.value0)(u);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [z.constructor.name]);
      };
    };
  };

  d.empty = f.empty;
  d.keys = f.keys;
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
  var d = a["Concur.React.Props"],
      f = a["Data.Functor"],
      l = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (h) {
    return d.classList(f.map(f.functorArray)(l.Just.create)(h));
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
  var d = a["Concur.React.Props"];

  a["Metajelo.CSS.UI.Util"].mjUiClass = function (f) {
    return d.className("metajelo-ui_" + f);
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassProps"] = a["Metajelo.CSS.UI.ClassProps"] || {};
  var d = a["Metajelo.CSS.UI.ClassProps"],
      f = a["Metajelo.CSS.Common.ClassNames"],
      l = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      h = a["Metajelo.CSS.UI.Util"];
  a = h.mjUiClass(f.versioning);
  var b = h.mjUiClass(f.url),
      e = h.mjUiClass(l.tooltip),
      c = h.mjUiClass(f.title),
      n = h.mjUiClass(f.sustainability),
      m = h.mjUiClass(f.superOrg),
      k = h.mjUiClass(f.resourceTypeGen),
      q = h.mjUiClass(f.resourceTypeDescr),
      w = h.mjUiClass(f.resourceType),
      u = h.mjUiClass(f.resourceMDSource),
      z = h.mjUiClass(f.resourceId),
      t = h.mjUiClass(f.relatedIdsHeader),
      p = h.mjUiClass(f.relatedIds),
      x = h.mjUiClass(f.relatedIdList),
      A = h.mjUiClass(f.relatedId),
      G = h.mjUiClass(f.relType),
      D = h.mjUiClass(f.recordId),
      H = h.mjUiClass(f.record),
      E = h.mjUiClass(l.recPreview),
      F = h.mjUiClass(f.pubyear),
      K = h.mjUiClass(f.productsHeader),
      L = h.mjUiClass(f.products),
      v = h.mjUiClass(f.productList),
      M = h.mjUiClass(f.product),
      T = h.mjUiClass(l.prodPreview),
      B = h.mjUiClass(l.previewButtons),
      N = h.mjUiClass(f.policyType),
      I = h.mjUiClass(f.policy),
      V = h.mjUiClass(l.page),
      O = h.mjUiClass(f.missionStatement),
      r = h.mjUiClass(f.location),
      aa = h.mjUiClass(l.locPreview),
      ia = h.mjUiClass(f.institutionType),
      ka = h.mjUiClass(f.institutionPolicy),
      qa = h.mjUiClass(f.institutionPolicies),
      ua = h.mjUiClass(f.institutionName),
      ra = h.mjUiClass(f.institutionId),
      wa = h.mjUiClass(f.institutionContact),
      ea = h.mjUiClass(f.identifier),
      sa = h.mjUiClass(f.idType),
      ca = h.mjUiClass(f.id),
      Q = h.mjUiClass(f.fundingStatement),
      P = h.mjUiClass(f.formatList),
      C = h.mjUiClass(f.format),
      U = h.mjUiClass(l.downloadBtn),
      R = h.mjUiClass(l.date),
      J = h.mjUiClass(f.creator),
      ja = h.mjUiClass(f.contactType),
      fa = h.mjUiClass(f.contactEmail);
  l = h.mjUiClass(l.clipBtn);
  var y = h.mjUiClass(f.basicMetadata);
  f = h.mjUiClass(f.applies);
  d.page = V;
  d.date = R;
  d.recPreview = E;
  d.prodPreview = T;
  d.locPreview = aa;
  d.tooltip = e;
  d.downloadBtn = U;
  d.clipBtn = l;
  d.previewButtons = B;
  d.record = H;
  d.recordId = D;
  d.product = M;
  d.productList = v;
  d.productsHeader = K;
  d.products = L;
  d.location = r;
  d.sustainability = n;
  d.missionStatement = O;
  d.fundingStatement = Q;
  d.identifier = ea;
  d.id = ca;
  d.idType = sa;
  d.relatedId = A;
  d.relType = G;
  d.relatedIdList = x;
  d.relatedIdsHeader = t;
  d.relatedIds = p;
  d.basicMetadata = y;
  d.creator = J;
  d.pubyear = F;
  d.title = c;
  d.resourceId = z;
  d.resourceType = w;
  d.resourceTypeGen = k;
  d.resourceTypeDescr = q;
  d.resourceMDSource = u;
  d.institutionName = ua;
  d.institutionId = ra;
  d.institutionType = ia;
  d.institutionContact = wa;
  d.contactEmail = fa;
  d.contactType = ja;
  d.institutionPolicy = ka;
  d.institutionPolicies = qa;
  d.policy = I;
  d.policyType = N;
  d.applies = f;
  d.superOrg = m;
  d.versioning = a;
  d.format = C;
  d.formatList = P;
  d.url = b;
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

  var d = a["Metajelo.CSS.Web.Util"],
      f = a["Concur.React.Props"],
      l = a["Data.Functor"],
      h = a["Metajelo.CSS.Common.Util"],
      b = function b(e) {
    return "metajelo_" + e;
  };

  a = function () {
    var e = l.map(l.functorArray)(b);
    return function (c) {
      return h.cList(e(c));
    };
  }();

  d.mjWebClass = function (e) {
    return f.className("metajelo_" + e);
  };

  d.cList = a;
})(PS);

(function (a) {
  a["Metajelo.CSS.Web.ClassProps"] = a["Metajelo.CSS.Web.ClassProps"] || {};
  var d = a["Metajelo.CSS.Web.ClassProps"],
      f = a["Metajelo.CSS.Common.ClassNames"],
      l = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      h = a["Metajelo.CSS.Web.Util"];
  a = h.mjWebClass(f.versioning);
  h.mjWebClass(f.url);
  var b = h.mjWebClass(f.title),
      e = h.mjWebClass(f.sustainability),
      c = h.mjWebClass(f.superOrg),
      n = h.mjWebClass(f.resourceTypeGen),
      m = h.mjWebClass(f.resourceTypeDescr),
      k = h.mjWebClass(f.resourceType),
      q = h.mjWebClass(f.resourceId),
      w = h.mjWebClass(f.relatedIdsHeader),
      u = h.mjWebClass(f.relatedIdList),
      z = h.mjWebClass(f.relatedId),
      t = h.mjWebClass(f.relType),
      p = h.mjWebClass(f.recordId),
      x = h.mjWebClass(f.record),
      A = h.mjWebClass(f.pubyear),
      G = h.mjWebClass(f.productsHeader),
      D = h.mjWebClass(f.productList),
      H = h.mjWebClass(l.productGroup),
      E = h.mjWebClass(l.productCitation),
      F = h.mjWebClass(f.product),
      K = h.mjWebClass(f.policyType),
      L = h.mjWebClass(f.policy),
      v = h.cList([f.url, f.missionStatement]),
      M = h.mjWebClass(f.institutionType),
      T = h.mjWebClass(f.institutionPolicy),
      B = h.mjWebClass(f.institutionPolicies),
      N = h.mjWebClass(f.institutionName),
      I = h.mjWebClass(f.institutionId),
      V = h.mjWebClass(f.institutionContact),
      O = h.mjWebClass(f.identifier),
      r = h.cList([f.url, l.idUrl]),
      aa = h.mjWebClass(f.idType),
      ia = h.cList([f.url, f.fundingStatement]),
      ka = h.mjWebClass(l.errorDisplayBox),
      qa = h.mjWebClass(l.errorDisplay),
      ua = h.mjWebClass(f.creator),
      ra = h.mjWebClass(f.contactType),
      wa = h.mjWebClass(f.contactEmail);
  f = h.mjWebClass(f.basicMetadata);
  l = h.mjWebClass(l.appliesInfo);
  d.productGroup = H;
  d.productCitation = E;
  d.appliesInfo = l;
  d.idUrl = r;
  d.errorDisplayBox = ka;
  d.errorDisplay = qa;
  d.record = x;
  d.recordId = p;
  d.product = F;
  d.productList = D;
  d.productsHeader = G;
  d.sustainability = e;
  d.missionStatement = v;
  d.fundingStatement = ia;
  d.identifier = O;
  d.idType = aa;
  d.relatedId = z;
  d.relType = t;
  d.relatedIdList = u;
  d.relatedIdsHeader = w;
  d.basicMetadata = f;
  d.creator = ua;
  d.pubyear = A;
  d.title = b;
  d.resourceId = q;
  d.resourceType = k;
  d.resourceTypeGen = n;
  d.resourceTypeDescr = m;
  d.institutionName = N;
  d.institutionId = I;
  d.institutionType = M;
  d.institutionContact = V;
  d.contactEmail = wa;
  d.contactType = ra;
  d.institutionPolicy = T;
  d.institutionPolicies = B;
  d.policy = L;
  d.policyType = K;
  d.superOrg = c;
  d.versioning = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var d = a["Metajelo.Types"],
      f = a["Data.Bounded"],
      l = a["Data.Enum"],
      h = a["Data.Eq"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Generic.Rep.Enum"],
      n = a["Data.Generic.Rep.Eq"],
      m = a["Data.Generic.Rep.Ord"],
      k = a["Data.Generic.Rep.Show"],
      q = a["Data.Ord"],
      w = a["Data.Show"],
      u = a["Data.Symbol"],
      z = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      t = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      p = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      x = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      A = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      G = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      D = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      H = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      E = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      F = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      K = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      L = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      v = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      M = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      T = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      B = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      N = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      I = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      V = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      O = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      r = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      aa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ia = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ka = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      qa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ua = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ra = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      wa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ea = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      sa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ca = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Q = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      P = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      C = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      U = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      R = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      J = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ja = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      fa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      y = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      W = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Z = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ba = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      na = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      pa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Da = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ga = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ea = function () {
    function g(Ha) {
      this.value0 = Ha;
    }

    g.create = function (Ha) {
      return new g(Ha);
    };

    return g;
  }(),
      Sa = function () {
    function g(Ha) {
      this.value0 = Ha;
    }

    g.create = function (Ha) {
      return new g(Ha);
    };

    return g;
  }(),
      Pa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      S = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      oa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ma = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      db = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Fa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Xa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ya = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Za = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ua = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Va = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      eb = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      $a = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      fb = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      gb = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ab = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      hb = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ib = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      jb = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      bb = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      X = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      da = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      xa = new w.Show(function (g) {
    if (g instanceof Pa) return "commercial";
    if (g instanceof S) return "non-profit";
    if (g instanceof oa) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 237, column 1 - line 240, column 37): " + [g.constructor.name]);
  }),
      Aa = new w.Show(function (g) {
    return "dataCustodian";
  }),
      ya = new b.Generic(function (g) {
    if (g instanceof z) return new b.Inl(b.NoArguments.value);
    if (g instanceof t) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (g instanceof p) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (g instanceof x) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (g instanceof A) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (g instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (g instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (g instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (g instanceof E) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (g instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (g instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (g instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (g instanceof v) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (g instanceof M) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [g.constructor.name]);
  }, function (g) {
    if (g instanceof b.Inl) return z.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inl) return t.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inl) return p.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inl) return x.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inl) return A.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return E.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return K.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return L.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return v.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return M.value;
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [g.constructor.name]);
  }),
      Na = new w.Show(k.genericShow(ya)(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Audiovisual";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Dataset";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Event";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Image";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "InteractiveResource";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Model";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "PhysicalObject";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "ResourceCollection";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Service";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Software";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Sound";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Text";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Workflow";
  })))(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      za = new b.Generic(function (g) {
    if (g instanceof T) return new b.Inl(b.NoArguments.value);
    if (g instanceof B) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (g instanceof N) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (g instanceof I) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (g instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (g instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (g instanceof r) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (g instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (g instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (g instanceof ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (g instanceof qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (g instanceof ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (g instanceof ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (g instanceof wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (g instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (g instanceof sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (g instanceof ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (g instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (g instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (g instanceof C) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (g instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (g instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (g instanceof J) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (g instanceof ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (g instanceof fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [g.constructor.name]);
  }, function (g) {
    if (g instanceof b.Inl) return T.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inl) return B.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inl) return N.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inl) return I.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return r.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return aa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ka.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return qa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ua.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ra.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return wa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return sa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ca.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return C.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return U.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return J.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ja.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return fa.value;
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [g.constructor.name]);
  }),
      mb = new w.Show(k.genericShow(za)(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsCitedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Cites";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsSupplementTo";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsContinuedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Continues";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsPartOf";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "HasPart";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsReferencedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "References";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Documents";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsCompiledBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Compiles";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "HasMetadata";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsMetadataFor";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "Reviews";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsReviewedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      Ba = new b.Generic(function (g) {
    if (g instanceof y) return new b.Inl(b.NoArguments.value);
    if (g instanceof W) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (g instanceof Z) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (g instanceof ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (g instanceof na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (g instanceof pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (g instanceof Da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (g instanceof Ga) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [g.constructor.name]);
  }, function (g) {
    if (g instanceof b.Inl) return y.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inl) return W.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inl) return Z.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inl) return ba.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inl) return na.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inl) return pa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Da.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Ga.value;
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [g.constructor.name]);
  }),
      Qa = new w.Show(function (g) {
    return g instanceof Ga ? "Terms of Use" : k.genericShow(Ba)(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Access";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Collection";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Data";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Metadata";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Preservation";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Submission";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Quality";
    })))(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(g);
  }),
      Ia = new b.Generic(function (g) {
    if (g instanceof Pa) return new b.Inl(b.NoArguments.value);
    if (g instanceof S) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (g instanceof oa) return new b.Inr(new b.Inr(b.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [g.constructor.name]);
  }, function (g) {
    if (g instanceof b.Inl) return Pa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inl) return S.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr) return oa.value;
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [g.constructor.name]);
  }),
      Oa = new b.Generic(function (g) {
    return b.NoArguments.value;
  }, function (g) {
    return Ma.value;
  }),
      Ka = new b.Generic(function (g) {
    if (g instanceof db) return new b.Inl(b.NoArguments.value);
    if (g instanceof Fa) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (g instanceof Xa) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (g instanceof Ya) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (g instanceof Za) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (g instanceof Ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (g instanceof Va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (g instanceof eb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (g instanceof $a) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (g instanceof fb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (g instanceof gb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (g instanceof ab) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (g instanceof hb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (g instanceof ib) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (g instanceof jb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (g instanceof bb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (g instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (g instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [g.constructor.name]);
  }, function (g) {
    if (g instanceof b.Inl) return db.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inl) return Fa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inl) return Xa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inl) return Ya.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inl) return Za.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inl) return Ua.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Va.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return eb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return $a.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return gb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ab.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return hb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ib.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return jb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return bb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return X.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return da.value;
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [g.constructor.name]);
  }),
      cb = new w.Show(function (g) {
    return g instanceof Fa ? "arXiv" : g instanceof Xa ? "bibcode" : k.genericShow(Ka)(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "ARK";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "ArXiv";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Bibcode";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "DOI";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "EAN13";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "EISSN";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "Handle";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "IGSN";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "ISBN";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "ISSN";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "ISTC";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "LISSN";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "LSID";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "PMID";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "PURL";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "UPC";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "URL";
    })))(k.genericShowConstructor(k.genericShowArgsNoArguments)(new u.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(g);
  }),
      Y = new h.Eq(n.genericEq(ya)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))))))))),
      ha = new q.Ord(function () {
    return Y;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(ya)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))))))))(g)(Ha);
    };
  }),
      la = new h.Eq(n.genericEq(za)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))))))))))))))))))))))))),
      ma = new q.Ord(function () {
    return la;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(za)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments))))))))))))))))))))))))))(g)(Ha);
    };
  }),
      va = new h.Eq(n.genericEq(Ba)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))),
      ta = new q.Ord(function () {
    return va;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(Ba)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))(g)(Ha);
    };
  }),
      Ca = new h.Eq(n.genericEq(Ia)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))),
      Ja = new q.Ord(function () {
    return Ca;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(Ia)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments))))(g)(Ha);
    };
  }),
      La = new h.Eq(n.genericEq(Oa)(n.genericEqConstructor(n.genericEqNoArguments))),
      Ra = new q.Ord(function () {
    return La;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(Oa)(m.genericOrdConstructor(m.genericOrdNoArguments))(g)(Ha);
    };
  }),
      Ta = new h.Eq(n.genericEq(Ka)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))))))))))))),
      Wa = new q.Ord(function () {
    return Ta;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(Ka)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))))))))))))(g)(Ha);
    };
  }),
      kb = new l.Enum(function () {
    return ha;
  }, c.genericPred(ya)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(ya)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      pb = new l.Enum(function () {
    return ma;
  }, c.genericPred(za)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(za)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      lb = new l.Enum(function () {
    return ta;
  }, c.genericPred(Ba)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(Ba)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      qb = new l.Enum(function () {
    return Ja;
  }, c.genericPred(Ia)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(Ia)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      nb = new l.Enum(function () {
    return Ra;
  }, c.genericPred(Oa)(c.genericEnumConstructor(c.genericEnumNoArguments)), c.genericSucc(Oa)(c.genericEnumConstructor(c.genericEnumNoArguments))),
      ob = new l.Enum(function () {
    return Wa;
  }, c.genericPred(Ka)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), c.genericSucc(Ka)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      rb = new f.Bounded(function () {
    return ha;
  }, e.genericBottom(ya)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(ya)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))),
      ub = new f.Bounded(function () {
    return ma;
  }, e.genericBottom(za)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(za)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))))))))))))))))))))))))),
      sb = new f.Bounded(function () {
    return ta;
  }, e.genericBottom(Ba)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Ba)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))),
      vb = new l.SmallBounded(function () {
    return sb;
  }),
      wb = new f.Bounded(function () {
    return Ja;
  }, e.genericBottom(Ia)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Ia)(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))),
      tb = new f.Bounded(function () {
    return Ra;
  }, e.genericBottom(Oa)(e.genericBottomConstructor(e.genericBottomNoArguments)), e.genericTop(Oa)(e.genericTopConstructor(e.genericTopNoArguments))),
      xb = new l.SmallBounded(function () {
    return tb;
  }),
      yb = new f.Bounded(function () {
    return Wa;
  }, e.genericBottom(Ka)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Ka)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))))))),
      zb = new l.BoundedEnum(function () {
    return rb;
  }, function () {
    return kb;
  }, c.genericCardinality(ya)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericFromEnum(ya)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericToEnum(ya)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))),
      Ab = new l.BoundedEnum(function () {
    return ub;
  }, function () {
    return pb;
  }, c.genericCardinality(za)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericFromEnum(za)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericToEnum(za)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Bb = new l.BoundedEnum(function () {
    return sb;
  }, function () {
    return lb;
  }, c.genericCardinality(Ba)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericFromEnum(Ba)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericToEnum(Ba)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))),
      Cb = new l.BoundedEnum(function () {
    return wb;
  }, function () {
    return qb;
  }, c.genericCardinality(Ia)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericFromEnum(Ia)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericToEnum(Ia)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))),
      Db = new l.BoundedEnum(function () {
    return tb;
  }, function () {
    return nb;
  }, c.genericCardinality(Oa)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericFromEnum(Oa)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericToEnum(Oa)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))),
      Eb = new l.BoundedEnum(function () {
    return yb;
  }, function () {
    return ob;
  }, c.genericCardinality(Ka)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericFromEnum(Ka)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericToEnum(Ka)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))));

  d.ARK = db;
  d.ArXiv = Fa;
  d.Bibcode = Xa;
  d.DOI = Ya;
  d.EAN13 = Za;
  d.EISSN = Ua;
  d.Handle = Va;
  d.IGSN = eb;
  d.ISBN = $a;
  d.ISSN = fb;
  d.ISTC = gb;
  d.LISSN = ab;
  d.LSID = hb;
  d.PMID = ib;
  d.PURL = jb;
  d.UPC = bb;
  d.URL = X;
  d.URN = da;
  d.Audiovisual = z;
  d.Dataset = t;
  d.Event = p;
  d.Image = x;
  d.InteractiveResource = A;
  d.Model = G;
  d.PhysicalObject = D;
  d.ResourceCollection = H;
  d.Service = E;
  d.Software = F;
  d.Sound = K;
  d.Text = L;
  d.Workflow = v;
  d.Other = M;
  d.IsCitedBy = T;
  d.Cites = B;
  d.IsSupplementTo = N;
  d.IsSupplementedBy = I;
  d.IsContinuedBy = V;
  d.Continues = O;
  d.IsNewVersionOf = r;
  d.IsPreviousVersionOf = aa;
  d.IsPartOf = ia;
  d.HasPart = ka;
  d.IsReferencedBy = qa;
  d.References = ua;
  d.IsDocumentedBy = ra;
  d.Documents = wa;
  d.IsCompiledBy = ea;
  d.Compiles = sa;
  d.IsVariantFormOf = ca;
  d.IsOriginalFormOf = Q;
  d.IsIdenticalTo = P;
  d.HasMetadata = C;
  d.IsMetadataFor = U;
  d.Reviews = R;
  d.IsReviewedBy = J;
  d.IsDerivedFrom = ja;
  d.IsSourceOf = fa;
  d.Commercial = Pa;
  d.NonProfit = S;
  d.Governmental = oa;
  d.DataCustodian = Ma;
  d.Access = y;
  d.Collection = W;
  d.Data = Z;
  d.Metadata = ba;
  d.Preservation = na;
  d.Submission = pa;
  d.Quality = Da;
  d.TermsOfUse = Ga;
  d.FreeTextPolicy = Ea;
  d.RefPolicy = Sa;
  d.showIdentifierType = cb;
  d.boundedEnumIdentifierType = Eb;
  d.showResourceTypeGeneral = Na;
  d.boundedEnumResourceTypeGeneral = zb;
  d.showRelationType = mb;
  d.boundedEnumRelationType = Ab;
  d.showInstitutionType = xa;
  d.boundedEnumInstitutionType = Cb;
  d.showInstitutionContactType = Aa;
  d.boundedEnumInstitutionContactType = Db;
  d.smallBoundedInstitutionContactType = xb;
  d.showPolicyType = Qa;
  d.boundedEnumPolicyType = Bb;
  d.smallBoundedPolicyType = vb;
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (d) {
    return function (f) {
      return function (l) {
        return function () {
          return l.parseFromString(f, d);
        };
      };
    };
  };
})(PS["Web.DOM.DOMParser"] = PS["Web.DOM.DOMParser"] || {});

(function (a) {
  a._documentElement = function (d) {
    return function (f) {
      return function () {
        return f[d];
      };
    };
  }("documentElement");

  a.getElementsByTagName = function (d) {
    return function (f) {
      return function () {
        return f.getElementsByTagName(d);
      };
    };
  };

  a._getElementsByTagNameNS = function (d) {
    return function (f) {
      return function (l) {
        return function () {
          return l.getElementsByTagNameNS(d, f);
        };
      };
    };
  };

  a.createElement = function (d) {
    return function (f) {
      return function () {
        return f.createElement(d);
      };
    };
  };

  a._createElementNS = function (d) {
    return function (f) {
      return function (l) {
        return function () {
          return l.createElementNS(d, f);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (d, f, l, h) {
    if ("undefined" !== typeof window) return l = window[l], null != l && h instanceof l ? f(h) : d;

    for (var b = h; null != b;) {
      b = Object.getPrototypeOf(b);
      var e = b.constructor.name;
      if (e === l) return f(h);
      if ("Object" === e) break;
    }

    return d;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var d = a["Web.Internal.FFI"],
      f = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (l) {
    return function (h) {
      return d._unsafeReadProtoTagged(f.Nothing.value, f.Just.create, l, h);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var d = a["Web.DOM.Document"],
      f = a["Web.DOM.Document"],
      l = a["Data.Functor"],
      h = a["Data.Nullable"],
      b = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var e = function () {
    var c = l.map(b.functorEffect)(h.toMaybe);
    return function (n) {
      return c(f._documentElement(n));
    };
  }();

  d.fromNode = a;
  d.documentElement = e;

  d.getElementsByTagNameNS = function (c) {
    return f._getElementsByTagNameNS(h.toNullable(c));
  };

  d.createElementNS = function (c) {
    return f._createElementNS(h.toNullable(c));
  };

  d.getElementsByTagName = f.getElementsByTagName;
  d.createElement = f.createElement;
})(PS);

(function (a) {
  var d = function d(f) {
    return function (l) {
      return l[f];
    };
  };

  a._prefix = d("prefix");
  a.localName = d("localName");

  a.setAttribute = function (f) {
    return function (l) {
      return function (h) {
        return function () {
          h.setAttribute(f, l);
          return {};
        };
      };
    };
  };

  a._getAttribute = function (f) {
    return function (l) {
      return function () {
        return l.getAttribute(f);
      };
    };
  };
})(PS["Web.DOM.Element"] = PS["Web.DOM.Element"] || {});

(function (a) {
  a["Web.DOM.Element"] = a["Web.DOM.Element"] || {};
  var d = a["Web.DOM.Element"],
      f = a["Web.DOM.Element"],
      l = a["Data.Functor"],
      h = a["Data.Nullable"],
      b = a.Effect,
      e = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  d.fromNode = a;
  d.toNode = e;

  d.prefix = function (c) {
    return h.toMaybe(f._prefix(c));
  };

  d.getAttribute = function (c) {
    var n = l.map(b.functorEffect)(h.toMaybe),
        m = f._getAttribute(c);

    return function (k) {
      return n(m(k));
    };
  };

  d.localName = f.localName;
  d.setAttribute = f.setAttribute;
})(PS);

(function (a) {
  a.toArray = function (d) {
    return function () {
      return [].slice.call(d);
    };
  };

  a._item = function (d) {
    return function (f) {
      return function () {
        return f.item(d);
      };
    };
  };
})(PS["Web.DOM.HTMLCollection"] = PS["Web.DOM.HTMLCollection"] || {});

(function (a) {
  a["Web.DOM.HTMLCollection"] = a["Web.DOM.HTMLCollection"] || {};
  var d = a["Web.DOM.HTMLCollection"],
      f = a["Web.DOM.HTMLCollection"],
      l = a["Data.Functor"],
      h = a["Data.Nullable"],
      b = a.Effect;

  d.item = function (e) {
    var c = l.map(b.functorEffect)(h.toMaybe),
        n = f._item(e);

    return function (m) {
      return c(n(m));
    };
  };

  d.toArray = f.toArray;
})(PS);

(function (a) {
  var d = function d(f) {
    return function (l) {
      return function () {
        return l[f];
      };
    };
  };

  a.nodeName = function (f) {
    return f.nodeName;
  };

  a._ownerDocument = d("ownerDocument");
  a.childNodes = d("childNodes");
  a.textContent = d("textContent");

  a.setTextContent = function (f) {
    return function (l) {
      return function () {
        l.textContent = f;
        return {};
      };
    };
  };

  a.appendChild = function (f) {
    return function (l) {
      return function () {
        return l.appendChild(f);
      };
    };
  };
})(PS["Web.DOM.Node"] = PS["Web.DOM.Node"] || {});

(function (a) {
  a["Web.DOM.Node"] = a["Web.DOM.Node"] || {};
  var d = a["Web.DOM.Node"],
      f = a["Web.DOM.Node"],
      l = a["Data.Functor"],
      h = a["Data.Nullable"],
      b = a.Effect;

  a = function () {
    var e = l.map(b.functorEffect)(h.toMaybe);
    return function (c) {
      return e(f._ownerDocument(c));
    };
  }();

  d.ownerDocument = a;
  d.nodeName = f.nodeName;
  d.childNodes = f.childNodes;
  d.textContent = f.textContent;
  d.setTextContent = f.setTextContent;
  d.appendChild = f.appendChild;
})(PS);

(function (a) {
  a["Web.DOM.DOMParser"] = a["Web.DOM.DOMParser"] || {};

  var d = a["Web.DOM.DOMParser"],
      f = a["Web.DOM.DOMParser"],
      l = a["Control.Applicative"],
      h = a["Control.Bind"],
      b = a["Data.Array"],
      e = a["Data.Either"],
      c = a["Data.Functor"],
      n = a["Data.Maybe"],
      m = a.Effect,
      k = a["Web.DOM.Document"],
      q = a["Web.DOM.Element"],
      w = a["Web.DOM.HTMLCollection"],
      u = a["Web.DOM.Node"],
      z = function z(p) {
    return function (x) {
      if (p instanceof n.Nothing) return new e.Right(x);
      if (p instanceof n.Just) return new e.Left(p.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [p.constructor.name]);
    };
  },
      t = function t(p) {
    return function () {
      var x = h.join(m.bindEffect)(c.map(m.functorEffect)(w.toArray)(k.getElementsByTagName("parsererror")(p)))();
      x = b.head(x);
      x = c.map(n.functorMaybe)(q.toNode)(x);
      if (x instanceof n.Nothing) x = l.pure(m.applicativeEffect)(n.Nothing.value);else if (x instanceof n.Just) x = c.map(m.functorEffect)(n.Just.create)(u.textContent(x.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [x.constructor.name]);
      return x();
    };
  };

  d.parseXMLFromString = function (p) {
    return function (x) {
      return function () {
        var A = f.parseFromString("application/xml")(p)(x)(),
            G = t(A)();
        return z(G)(A);
      };
    };
  };

  d.makeDOMParser = f.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (d) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function (b) {
            return function (e) {
              return function () {
                return e.evaluate(d, f, l, h, b);
              };
            };
          };
        };
      };
    };
  };

  a.resultType = function (d) {
    return d.resultType;
  };

  a.numberValue = function (d) {
    return function () {
      return d.numberValue;
    };
  };

  a.stringValue = function (d) {
    return function () {
      return d.stringValue;
    };
  };

  a.booleanValue = function (d) {
    return function () {
      return d.booleanValue;
    };
  };

  a.singleNodeValueInternal = function (d) {
    return function () {
      return d.singleNodeValue;
    };
  };

  a.snapshotLengthInternal = function (d) {
    return function () {
      return d.snapshotLength;
    };
  };

  a.snapshotItemInternal = function (d) {
    return function (f) {
      return function () {
        return d.snapshotItem(f);
      };
    };
  };

  a.customNSResolver = function (d) {
    return {
      lookupNamespaceURI: d
    };
  };

  a.createNSResolver = function (d) {
    return function (f) {
      return f.createNSResolver(d);
    };
  };

  a.lookupNamespaceURIInternal = function (d) {
    return function (f) {
      return d.lookupNamespaceURI(f);
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

  var d = a["Web.DOM.Document.XPath.ResultType"],
      f = a["Web.DOM.Document.XPath.ResultType"],
      l = a["Data.Eq"],
      h = a["Data.Maybe"],
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
      c = new l.Eq(function (n) {
    return function (m) {
      return n === m;
    };
  });

  d.res2SnapType = function (n) {
    return l.eq(c)(n)(f.unordered_node_snapshot_type) ? new h.Just(b.value) : l.eq(c)(n)(f.ordered_node_snapshot_type) ? new h.Just(e.value) : h.Nothing.value;
  };

  d.number_type = f.number_type;
  d.string_type = f.string_type;
  d.boolean_type = f.boolean_type;
  d.ordered_node_snapshot_type = f.ordered_node_snapshot_type;
  d.any_unordered_node_type = f.any_unordered_node_type;
})(PS);

(function (a) {
  a["Web.DOM.Document.XPath"] = a["Web.DOM.Document.XPath"] || {};

  var d = a["Web.DOM.Document.XPath"],
      f = a["Web.DOM.Document.XPath"],
      l = a["Control.Applicative"],
      h = a["Data.Array"],
      b = a["Data.Functor"],
      e = a["Data.Int"],
      c = a["Data.Maybe"],
      n = a["Data.Monoid"],
      m = a["Data.Natural"],
      k = a["Data.Nullable"],
      q = a["Data.Traversable"],
      w = a.Effect,
      u = a["Web.DOM.Document"],
      z = a["Web.DOM.Document.XPath.ResultType"],
      t = a["Web.DOM.Element"],
      p = a["Web.DOM.Node"],
      x = function () {
    var G = b.map(w.functorEffect)(function (D) {
      return m.intToNat(e.round(D));
    });
    return function (D) {
      return G(f.snapshotLengthInternal(D));
    };
  }(),
      A = function A(G) {
    return function (D) {
      return b.map(w.functorEffect)(k.toMaybe)(f.snapshotItemInternal(G)(e.toNumber(m.natToInt(D))));
    };
  };

  a = function () {
    var G = b.map(w.functorEffect)(k.toMaybe);
    return function (D) {
      return G(f.singleNodeValueInternal(D));
    };
  }();

  d.evaluate = function (G) {
    return function (D) {
      return function (H) {
        return function (E) {
          return function (F) {
            return function (K) {
              return f.evaluateInternal(G)(D)(k.toNullable(H))(E)(k.toNullable(F))(K);
            };
          };
        };
      };
    };
  };

  d.evaluateNumber = function (G) {
    return function (D) {
      return function (H) {
        return function (E) {
          return function (F) {
            return function () {
              var K = f.evaluateInternal(G)(D)(k.toNullable(H))(z.number_type)(k.toNullable(E))(F)();
              return f.numberValue(K)();
            };
          };
        };
      };
    };
  };

  d.evaluateString = function (G) {
    return function (D) {
      return function (H) {
        return function (E) {
          return function (F) {
            return function () {
              var K = f.evaluateInternal(G)(D)(k.toNullable(H))(z.string_type)(k.toNullable(E))(F)();
              return f.stringValue(K)();
            };
          };
        };
      };
    };
  };

  d.evaluateBoolean = function (G) {
    return function (D) {
      return function (H) {
        return function (E) {
          return function (F) {
            return function () {
              var K = f.evaluateInternal(G)(D)(k.toNullable(H))(z.boolean_type)(k.toNullable(E))(F)();
              return f.booleanValue(K)();
            };
          };
        };
      };
    };
  };

  d.singleNodeValue = a;

  d.snapshot = function (G) {
    var D = z.res2SnapType(f.resultType(G)),
        H = A(G);
    D = b.map(c.functorMaybe)(function (E) {
      return function () {
        var F = x(G)();
        F = m.natToInt(F);
        F = b.map(b.functorArray)(m.intToNat)(h.range(0)(F - 1 | 0));
        F = q.sequence(q.traversableArray)(w.applicativeEffect)(b.map(b.functorArray)(H)(F))();
        return h.catMaybes(F);
      };
    })(D);
    if (D instanceof c.Nothing) return l.pure(w.applicativeEffect)(n.mempty(n.monoidArray));
    if (D instanceof c.Just) return D.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [D.constructor.name]);
  };

  d.lookupNamespaceURI = function (G) {
    return function (D) {
      return k.toMaybe(f.lookupNamespaceURIInternal(G)(D));
    };
  };

  d.defaultNSResolver = function (G) {
    return function (D) {
      var H = function H(E) {
        return function () {
          var F = u.documentElement(E)();
          if (F instanceof c.Nothing) return G;
          if (F instanceof c.Just) return t.toNode(F.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [F.constructor.name]);
        };
      };

      return function () {
        var E = p.ownerDocument(G)(),
            F = function () {
          if (E instanceof c.Nothing) {
            var K = u.fromNode(G);
            if (K instanceof c.Nothing) return G;
            if (K instanceof c.Just) return H(K.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [K.constructor.name]);
          }

          if (E instanceof c.Just) return H(E.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [E.constructor.name]);
        }();

        return f.createNSResolver(F)(D);
      };
    };
  };

  d.customNSResolver = f.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var d = a["Metajelo.XPaths"],
      f = a["Control.Applicative"],
      l = a["Control.Bind"],
      h = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      e = a["Data.Either"],
      c = a["Data.Foldable"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      k = a["Data.Traversable"],
      q = a["Data.XPath"],
      w = a.Effect,
      u = a["Effect.Exception"],
      z = a["Web.DOM.DOMParser"],
      t = a["Web.DOM.Document"],
      p = a["Web.DOM.Document.XPath"],
      x = a["Web.DOM.Document.XPath.ResultType"],
      A = a["Web.DOM.Element"],
      G = a["Web.DOM.HTMLCollection"],
      D = q.pathAppendNSx(q.stringXPath)(q.root(q.stringXPath))("record");
  a = q.pathAppendNSx(q.stringXPath)(D)("relatedIdentifier");
  var H = q.pathAppendNSx(q.stringXPath)(D)("supplementaryProducts");
  H = q.pathAppendNSx(q.stringXPath)(H)("supplementaryProduct");

  var E = function E(B) {
    return function (N) {
      return {
        any: function any(I) {
          return function (V) {
            return function (O) {
              return p.evaluate(V)(I)(N)(O)(m.Nothing.value)(B);
            };
          };
        },
        num: function num(I) {
          return function (V) {
            return p.evaluateNumber(V)(I)(N)(m.Nothing.value)(B);
          };
        },
        str: function str(I) {
          return function (V) {
            return p.evaluateString(V)(I)(N)(m.Nothing.value)(B);
          };
        },
        bool: function bool(I) {
          return function (V) {
            return p.evaluateBoolean(V)(I)(N)(m.Nothing.value)(B);
          };
        },
        nodeMay: function nodeMay(I) {
          return function (V) {
            return l.bind(w.bindEffect)(p.evaluate(V)(I)(N)(x.any_unordered_node_type)(m.Nothing.value)(B))(p.singleNodeValue);
          };
        }
      };
    };
  },
      F = h["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      K = function K(B) {
    var N = function N(I) {
      return function () {
        var V = t.getElementsByTagNameNS(new m.Just(I))("record")(B)();
        return G.item(0)(V)();
      };
    };

    return function () {
      var I = t.getElementsByTagName("record")(B)();
      I = G.item(0)(I)();
      if (I instanceof m.Nothing) I = k.sequence(b.traversableNonEmptyArray)(w.applicativeEffect)(n.map(b.functorNonEmptyArray)(N)(F))(), I = l.join(m.bindMaybe)(c.find(b.foldableNonEmptyArray)(m.isJust)(I));else if (I instanceof m.Just) I = new m.Just(I.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 275, column 16 - line 279, column 38): " + [I.constructor.name]);
      return n.map(m.functorMaybe)(A.toNode)(I);
    };
  };

  h = q.pathAppendNSx(q.stringXPath)(D)("lastModified");

  var L = q.pathAppendNSx(q.stringXPath)(D)("identifier"),
      v = q.pathAppend(q.stringXPath)(L)(q.at(q.stringXPath)("identifierType")),
      M = function M(B) {
    var N = function N(I) {
      return m.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(I);
    };

    if (B instanceof m.Nothing) return f.pure(w.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (B instanceof m.Just) return n.map(w.functorEffect)(N)(A.getAttribute("xmlns")(B.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 183, column 3 - line 185, column 59): " + [B.constructor.name]);
  },
      T = function T(B) {
    return function (N) {
      var I = function I(V) {
        return function (O) {
          return function (r) {
            r = p.lookupNamespaceURI(V)(r);
            if (r instanceof m.Nothing) return O;
            if (r instanceof m.Just) return r.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 200, column 39 - line 202, column 20): " + [r.constructor.name]);
          };
        };
      };

      return function () {
        var V = p.defaultNSResolver(B)(N)(),
            O = A.fromNode(B);
        O = M(O)();
        return p.customNSResolver(I(V)(O));
      };
    };
  };

  q = q.pathAppendNSx(q.stringXPath)(D)("date");
  d.idP = "identifier";
  d.relIdP = "relatedIdentifier";
  d.sProdCP = "supplementaryProducts";
  d.sProdP = "supplementaryProduct";
  d.instIdP = "institutionID";
  d.instNameP = "institutionName";
  d.instTypeP = "institutionType";
  d.instContactP = "institutionContact";
  d.instSustainP = "institutionSustainability";
  d.instPolicyCP = "institutionPolicies";
  d.instPolicyP = "institutionPolicy";
  d.versioningP = "versioning";
  d.locP = "location";
  d.superOrgNameP = "superOrganizationName";
  d.missionUrlP = "missionStatementURL";
  d.fundingUrlP = "fundingStatementURL";
  d.basicMetaP = "basicMetadata";
  d.titleP = "Title";
  d.creatorP = "Creator";
  d.pubYearP = "PublicationYear";
  d.resIdP = "resourceID";
  d.resTypeP = "resourceType";
  d.formatCP = "Format";
  d.formatP = "format";
  d.freeTextPolicyP = "freeTextPolicy";
  d.refPolicyP = "refPolicy";
  d.resMetaSourceP = "resourceMetadataSource";
  d.idTypeAT = "identifierType";
  d.resIdTypeAT = "relatedIdentifierType";
  d.relIdTypeAT = "relatedIdentifierType";
  d.relTypeAT = "relationType";
  d.resTypeGenAT = "resourceTypeGeneral";
  d.instContactTypeAT = "institutionContactType";
  d.polTypeAT = "policyType";
  d.appliesToProdAT = "appliesToProduct";
  d.idTypeRootAP = v;
  d.idRootP = L;
  d.dateRootP = q;
  d.lastModRootP = h;
  d.relIdRootP = a;
  d.sProdRootP = H;

  d.getDefaultParseEnv = function (B) {
    return function () {
      var N = z.makeDOMParser();
      N = z.parseXMLFromString(B)(N)();
      if (N instanceof e.Left) N = u["throw"]("XML parsing error: " + N.value0)();else if (N instanceof e.Right) N = N.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 243, column 13 - line 245, column 26): " + [N.constructor.name]);
      var I = K(N)();
      if (I instanceof m.Nothing) I = u["throw"]("Could not find <record> node!")();else if (I instanceof m.Just) I = I.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 247, column 14 - line 249, column 23): " + [I.constructor.name]);
      var V = A.fromNode(I);
      if (V instanceof m.Nothing) V = u["throw"]("<record> node could not be cast to an element!")();else if (V instanceof m.Just) V = V.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 250, column 14 - line 252, column 23): " + [V.constructor.name]);
      var O = M(new m.Just(V))(),
          r = T(I)(N)();
      r = E(N)(new m.Just(r));
      return {
        doc: N,
        ns: O,
        recNode: I,
        recElem: V,
        xeval: r,
        xevalRoot: {
          any: r.any(I),
          num: r.num(I),
          str: r.str(I),
          bool: r.bool(I),
          nodeMay: r.nodeMay(I)
        }
      };
    };
  };

  d.unsafeSingleNodeValue = function (B) {
    return function (N) {
      return function (I) {
        return function () {
          var V = B.xeval.nodeMay(N)(I)();
          if (V instanceof m.Just) return V.value0;
          if (V instanceof m.Nothing) return u["throw"]("Couldn't find required node at: " + I)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 292, column 3 - line 294, column 40): " + [V.constructor.name]);
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var d = a["Text.Parsing.StringParser"],
      f = a["Control.Alt"],
      l = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      c = a["Control.Monad"],
      n = a["Control.Monad.Rec.Class"],
      m = a["Control.Plus"],
      k = a["Data.Bifunctor"],
      q = a["Data.Boolean"],
      w = a["Data.Either"],
      u = a["Data.Functor"];
  a = a["Data.Show"];

  var z = function () {
    function F(K) {
      this.value0 = K;
    }

    F.create = function (K) {
      return new F(K);
    };

    return F;
  }();

  a = new a.Show(function (F) {
    return F.value0;
  });

  var t = new u.Functor(function (F) {
    return function (K) {
      var L = u.map(w.functorEither)(function (v) {
        return {
          result: F(v.result),
          suffix: v.suffix
        };
      });
      return function (v) {
        return L(K(v));
      };
    };
  }),
      p = function p(F) {
    return function (K) {
      return new w.Left({
        pos: K.pos,
        error: new z(F)
      });
    };
  },
      x = new b.Apply(function () {
    return t;
  }, function (F) {
    return function (K) {
      return function (L) {
        return e.bind(w.bindEither)(F(L))(function (v) {
          return e.bind(w.bindEither)(K(v.suffix))(function (M) {
            return h.pure(w.applicativeEither)({
              result: v.result(M.result),
              suffix: M.suffix
            });
          });
        });
      };
    };
  }),
      A = new e.Bind(function () {
    return x;
  }, function (F) {
    return function (K) {
      return function (L) {
        return e.bind(w.bindEither)(F(L))(function (v) {
          return K(v.result)(v.suffix);
        });
      };
    };
  }),
      G = new h.Applicative(function () {
    return x;
  }, function (F) {
    return function (K) {
      return new w.Right({
        result: F,
        suffix: K
      });
    };
  }),
      D = new c.Monad(function () {
    return G;
  }, function () {
    return A;
  });

  b = new n.MonadRec(function () {
    return D;
  }, function (F) {
    return function (K) {
      var L = function L(v) {
        if (v.result instanceof n.Loop) return new n.Loop({
          state: v.result.value0,
          str: v.suffix
        });
        if (v.result instanceof n.Done) return new n.Done({
          result: v.result.value0,
          suffix: v.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [v.constructor.name]);
      };

      return function (v) {
        return n.tailRecM(n.monadRecEither)(function (M) {
          return u.map(w.functorEither)(L)(F(M.state)(M.str));
        })({
          state: K,
          str: v
        });
      };
    };
  });
  var H = new f.Alt(function () {
    return t;
  }, function (F) {
    return function (K) {
      return function (L) {
        var v = F(L);

        if (v instanceof w.Left) {
          if (L.pos === v.value0.pos) return K(L);
          if (q.otherwise) return new w.Left({
            error: v.value0.error,
            pos: v.value0.pos
          });
        }

        return v;
      };
    };
  }),
      E = new m.Plus(function () {
    return H;
  }, p("No alternative"));
  f = new l.Alternative(function () {
    return G;
  }, function () {
    return E;
  });
  d.ParseError = z;

  d.runParser = function (F) {
    return function (K) {
      return k.bimap(w.bifunctorEither)(function (L) {
        return L.error;
      })(function (L) {
        return L.result;
      })(F({
        str: K,
        pos: 0
      }));
    };
  };

  d.fail = p;

  d["try"] = function (F) {
    return function (K) {
      return k.lmap(w.bifunctorEither)(function (L) {
        return {
          pos: K.pos,
          error: L.error
        };
      })(F(K));
    };
  };

  d.showParseError = a;
  d.functorParser = t;
  d.applyParser = x;
  d.applicativeParser = G;
  d.altParser = H;
  d.alternativeParser = f;
  d.bindParser = A;
  d.monadRecParser = b;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var d = a["Text.Parsing.StringParser.Combinators"],
      f = a["Control.Alt"],
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Functor"],
      c = a["Data.NonEmpty"],
      n = a["Data.Unit"],
      m = a["Text.Parsing.StringParser"],
      k = a["Data.List"].manyRec(m.monadRecParser)(m.alternativeParser),
      q = function q(w) {
    return function (u) {
      return new c.NonEmpty(w, u);
    };
  };

  d.many = k;

  d.many1 = function (w) {
    return h.apply(m.applyParser)(e.map(m.functorParser)(q)(w))(k(w));
  };

  d.withError = function (w) {
    return function (u) {
      return f.alt(m.altParser)(w)(m.fail(u));
    };
  };

  d.optional = function (w) {
    return f.alt(m.altParser)(b.bind(m.bindParser)(w)(function (u) {
      return l.pure(m.applicativeParser)(n.unit);
    }))(l.pure(m.applicativeParser)(n.unit));
  };

  d.sepBy1 = function (w) {
    return function (u) {
      return b.bind(m.bindParser)(w)(function (z) {
        return b.bind(m.bindParser)(k(h.applySecond(m.applyParser)(u)(w)))(function (t) {
          return l.pure(m.applicativeParser)(q(z)(t));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var d = a["Text.Parsing.StringParser.CodePoints"],
      f = a["Control.Applicative"],
      l = a["Control.Bind"],
      h = a["Data.Char"],
      b = a["Data.Either"],
      e = a["Data.Enum"],
      c = a["Data.Maybe"],
      n = a["Data.Show"],
      m = a["Data.String.CodePoints"],
      k = a["Data.Unit"],
      q = a["Text.Parsing.StringParser"],
      w = a["Text.Parsing.StringParser.Combinators"],
      u = function () {
    var t = function () {
      var p = e.fromEnum(m.boundedEnumCodePoint);
      return function (x) {
        return h.fromCharCode(p(x));
      };
    }();

    return function (p) {
      var x = m.codePointAt(p.pos)(p.str);

      if (x instanceof c.Just) {
        var A = t(x.value0);
        if (A instanceof c.Just) return new b.Right({
          result: A.value0,
          suffix: {
            str: p.str,
            pos: p.pos + 1 | 0
          }
        });
        if (A instanceof c.Nothing) return new b.Left({
          pos: p.pos,
          error: q.ParseError.create("CodePoint " + (n.show(m.showCodePoint)(x.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [A.constructor.name]);
      }

      if (x instanceof c.Nothing) return new b.Left({
        pos: p.pos,
        error: new q.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [x.constructor.name]);
    };
  }(),
      z = function z(t) {
    return q["try"](l.bind(q.bindParser)(u)(function (p) {
      return t(p) ? f.pure(q.applicativeParser)(p) : q.fail("Character " + (n.show(n.showChar)(p) + " did not satisfy predicate"));
    }));
  };

  d.eof = function (t) {
    return t.pos < m.length(t.str) ? new b.Left({
      pos: t.pos,
      error: new q.ParseError("Expected EOF")
    }) : new b.Right({
      result: k.unit,
      suffix: t
    });
  };

  d.satisfy = z;

  d["char"] = function (t) {
    return w.withError(z(function (p) {
      return p === t;
    }))("Could not match character " + n.show(n.showChar)(t));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var d = a["Text.Email.Parser"],
      f = a["Control.Alt"],
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Char"],
      c = a["Data.Foldable"],
      n = a["Data.Functor"],
      m = a["Data.List.Types"],
      k = a["Data.Maybe"],
      q = a["Data.Monoid"],
      w = a["Data.String.CodeUnits"],
      u = a["Data.String.Pattern"],
      z = a["Data.Unit"],
      t = a["Text.Parsing.StringParser"],
      p = a["Text.Parsing.StringParser.CodePoints"],
      x = a["Text.Parsing.StringParser.Combinators"],
      A = function (Q) {
    var P = k.fromJust();
    return function (C) {
      return P(e.fromCharCode(C));
    };
  }(),
      G = function G(Q) {
    return n.map(t.functorParser)(function () {
      var P = c.fold(m.foldableNonEmptyList)(q.monoidString),
          C = n.map(m.functorNonEmptyList)(w.singleton);
      return function (U) {
        return P(C(U));
      };
    }())(x.many1(p.satisfy(Q)));
  },
      D = function D(Q) {
    return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(Q))(function () {
      return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(H(Q)))(function () {
        return l.pure(t.applicativeParser)(z.unit);
      });
    });
  },
      H = function H(Q) {
    return f.alt(t.altParser)(D(Q))(l.pure(t.applicativeParser)(z.unit));
  },
      E = function E(Q) {
    return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p.satisfy(Q)))(function () {
      return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(H(p.satisfy(Q))))(function () {
        return l.pure(t.applicativeParser)(z.unit);
      });
    });
  },
      F = p["char"](A(0)),
      K = p["char"]("\n");

  a = function a(Q) {
    return " " === Q || "\t" === Q;
  };

  var L = p.satisfy(a),
      v = E(a),
      M = function M(Q) {
    return function (P) {
      return function (C) {
        return C >= Q && C <= P;
      };
    };
  };

  a = M(A(33))(A(126));

  var T = p.satisfy(a),
      B = function B(Q) {
    return function (P) {
      return w.contains(u.Pattern(w.singleton(P)))(Q);
    };
  },
      N = function N(Q) {
    return M(A(1))(A(8))(Q) || M(A(14))(A(31))(Q) || B("\x0B\f\x7F")(Q);
  },
      I = function I(Q) {
    return M(A(33))(A(39))(Q) || M(A(42))(A(91))(Q) || M(A(93))(A(126))(Q) || N(Q);
  },
      V = function V(Q) {
    return M(A(33))(A(90))(Q) || M(A(94))(A(126))(Q) || N(Q);
  },
      O = p.satisfy(N),
      r = p["char"]("\r"),
      aa = n["void"](t.functorParser)(h.applySecond(t.applyParser)(r)(K)),
      ia = function () {
    var Q = D(h.applySecond(t.applyParser)(aa)(v)),
        P = h.applySecond(t.applyParser)(v)(x.optional(h.applySecond(t.applyParser)(aa)(v)));
    return f.alt(t.altParser)(P)(Q);
  }(),
      ka = function () {
    var Q = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("\\")))(function () {
      return f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(T)(L))(K))(r))(O))(F);
    });
    return b.bind(t.bindParser)(Q)(function (P) {
      return l.pure(t.applicativeParser)("\\" + w.singleton(P));
    });
  }(),
      qa = f.alt(t.altParser)(G(function (Q) {
    return B(w.singleton(A(33)))(Q) || M(A(35))(A(91))(Q) || M(A(93))(A(126))(Q) || N(Q);
  }))(ka),
      ua = function () {
    var Q = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]('"')))(function () {
      return b.bind(t.bindParser)(x.many(h.applySecond(t.applyParser)(x.optional(ia))(qa)))(function (P) {
        return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(x.optional(ia)))(function () {
          return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]('"')))(function () {
            return l.pure(t.applicativeParser)(P);
          });
        });
      });
    });
    return n.map(t.functorParser)(function (P) {
      return '"' + (c.fold(m.foldableList)(q.monoidString)(P) + '"');
    })(Q);
  }(),
      ra = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("(")))(function () {
    return b.discard(b.discardUnit)(t.bindParser)(H(f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(E(I))(n["void"](t.functorParser)(ka)))(ra))(ia)))(function () {
      return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"](")")))(function () {
        return l.pure(t.applicativeParser)(z.unit);
      });
    });
  }),
      wa = H(f.alt(t.altParser)(ra)(ia));

  a = b.discard(b.discardUnit)(t.bindParser)(x.optional(wa))(function () {
    return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("[")))(function () {
      return b.bind(t.bindParser)(x.many(h.applySecond(t.applyParser)(x.optional(ia))(G(V))))(function (Q) {
        return b.discard(b.discardUnit)(t.bindParser)(x.optional(ia))(function () {
          return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("]")))(function () {
            return b.discard(b.discardUnit)(t.bindParser)(x.optional(wa))(function () {
              return l.pure(t.applicativeParser)("[" + (c.fold(m.foldableList)(q.monoidString)(Q) + "]"));
            });
          });
        });
      });
    });
  });

  var ea = function () {
    return G(function (Q) {
      return "0" <= Q && "9" >= Q || "a" <= Q && "z" >= Q || "A" <= Q && "Z" >= Q || B("!#$%&'*+/=?^_`{|}~-")(Q);
    });
  }(),
      sa = function () {
    var Q = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(x.optional(wa)))(function () {
      return b.bind(t.bindParser)(f.alt(t.altParser)(ea)(ua))(function (P) {
        return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(x.optional(wa)))(function () {
          return l.pure(t.applicativeParser)(P);
        });
      });
    });
    Q = x.sepBy1(Q)(p["char"]("."));
    return n.map(t.functorParser)(c.intercalate(m.foldableNonEmptyList)(q.monoidString)("."))(Q);
  }(),
      ca = f.alt(t.altParser)(sa)(a);

  a = b.bind(t.bindParser)(sa)(function (Q) {
    return b.bind(t.bindParser)(p["char"]("@"))(function () {
      return b.bind(t.bindParser)(ca)(function (P) {
        return b.bind(t.bindParser)(p.eof)(function () {
          return l.pure(t.applicativeParser)({
            localPart: Q,
            domainPart: P
          });
        });
      });
    });
  });
  d.addrSpec = a;

  d.toString = function (Q) {
    return Q.localPart + ("@" + Q.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var d = a["Text.Email.Validate"],
      f = a["Data.Bifunctor"],
      l = a["Data.Either"],
      h = a["Data.Show"],
      b = a["Text.Email.Parser"],
      e = a["Text.Parsing.StringParser"];

  a = function () {
    var c = f.lmap(l.bifunctorEither)(h.show(e.showParseError));
    return function (n) {
      n = e.runParser(b.addrSpec)(n);
      return c(n);
    };
  }();

  d.validate = a;
})(PS);

(function (a) {
  a._validateURL = function (d) {
    return function (f) {
      if (!f || !/^https?:\/\//.test(f)) return "Unknown or missing protocol format in url: " + f;
      var l = document.createElement("a");
      l.href = f;

      if (d) {
        if (l.username) return "URL " + f + " contains a username: " + l.username;
        if (l.password) return "URL " + f + " contains a password: " + l.password;
      }

      return /\.[^0-9.]/.test(l.hostname) ? /(\s|^\.|\.$)/.test(l.hostname) ? "Hostname '" + l.href + "' contains whitespace in " + f : l.href.toLowerCase().replace(/\/+$/g, "") !== f.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + f + " doesn't match parsed href " + l.href : "SUCCESS" : "Invalid hostname '" + l.href + "' in " + f;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};

  var d = a["Text.URL.Validate"],
      f = a["Text.URL.Validate"],
      l = a["Data.Either"],
      h = a["Data.Maybe"],
      b = a["Data.String.NonEmpty.Internal"],
      e = function e(c) {
    return function (n) {
      var m = "SUCCESS" === n ? !0 : !1;

      if (m) {
        n = b.fromString(c);
        if (n instanceof h.Just) return new l.Right(n.value0);
        if (n instanceof h.Nothing) return new l.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [n.constructor.name]);
      }

      if (!m) return new l.Left(n);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [m.constructor.name]);
    };
  };

  d.parsePublicURL = function (c) {
    var n = f._validateURL(!0)(c);

    return e(c)(n);
  };

  d.urlToNEString = function (c) {
    return c;
  };

  d.urlToString = function (c) {
    return b.toString(c);
  };
})(PS);

(function (a) {
  a.toArray = function (d) {
    return function () {
      return [].slice.call(d);
    };
  };
})(PS["Web.DOM.NodeList"] = PS["Web.DOM.NodeList"] || {});

(function (a) {
  a["Web.DOM.NodeList"] = a["Web.DOM.NodeList"] || {};
  a["Web.DOM.NodeList"].toArray = a["Web.DOM.NodeList"].toArray;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Read"] = a["Metajelo.XPaths.Read"] || {};

  var d = a["Metajelo.XPaths.Read"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Data.Array"],
      e = a["Data.Array.NonEmpty"],
      c = a["Data.Either"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      k = a["Data.String.Common"],
      q = a["Data.String.NonEmpty.Internal"],
      w = a["Data.String.Utils"],
      u = a["Data.Traversable"],
      z = a["Data.XPath"],
      t = a.Effect,
      p = a["Effect.Exception"],
      x = a["Metajelo.Types"],
      A = a["Metajelo.XPaths"],
      G = a["Text.Email.Validate"],
      D = a["Text.URL.Validate"],
      H = a["Web.DOM.Document.XPath"],
      E = a["Web.DOM.Document.XPath.ResultType"],
      F = a["Web.DOM.Element"],
      K = a["Web.DOM.Node"],
      L = a["Web.DOM.NodeList"],
      v = function v(J) {
    if (J instanceof c.Right) return f.pure(t.applicativeEffect)(J.value0);
    if (J instanceof c.Left) return p["throw"](J.value0);
    throw Error("Failed pattern match at Metajelo.XPaths.Read (line 444, column 19 - line 446, column 24): " + [J.constructor.name]);
  },
      M = function M(J) {
    return "Audiovisual" === J ? f.pure(c.applicativeEither)(x.Audiovisual.value) : "Dataset" === J ? f.pure(c.applicativeEither)(x.Dataset.value) : "Event" === J ? f.pure(c.applicativeEither)(x.Event.value) : "Image" === J ? f.pure(c.applicativeEither)(x.Image.value) : "InteractiveResource" === J ? f.pure(c.applicativeEither)(x.InteractiveResource.value) : "Model" === J ? f.pure(c.applicativeEither)(x.Model.value) : "PhysicalObject" === J ? f.pure(c.applicativeEither)(x.PhysicalObject.value) : "ResourceCollection" === J ? f.pure(c.applicativeEither)(x.ResourceCollection.value) : "Service" === J ? f.pure(c.applicativeEither)(x.Service.value) : "Software" === J ? f.pure(c.applicativeEither)(x.Software.value) : "Sound" === J ? f.pure(c.applicativeEither)(x.Sound.value) : "Text" === J ? f.pure(c.applicativeEither)(x.Text.value) : "Workflow" === J ? f.pure(c.applicativeEither)(x.Workflow.value) : "Other" === J ? f.pure(c.applicativeEither)(x.Other.value) : c.Left.create("Unknown ResourceTypeGeneral: '" + (J + "'"));
  },
      T = function T(J) {
    return function (ja) {
      return function () {
        var fa = A.unsafeSingleNodeValue(J)(ja)(z.xx(z.stringXPath)(A.resTypeP))(),
            y = J.xeval.str(fa)(".")();
        fa = J.xeval.str(fa)(z.at(z.stringXPath)(A.resTypeGenAT))();
        fa = v(M(fa))();
        return {
          description: y,
          generalType: fa
        };
      };
    };
  },
      B = function B(J) {
    return "IsCitedBy" === J ? f.pure(c.applicativeEither)(x.IsCitedBy.value) : "Cites" === J ? f.pure(c.applicativeEither)(x.Cites.value) : "IsSupplementTo" === J ? f.pure(c.applicativeEither)(x.IsSupplementTo.value) : "IsSupplementedBy" === J ? f.pure(c.applicativeEither)(x.IsSupplementedBy.value) : "IsContinuedBy" === J ? f.pure(c.applicativeEither)(x.IsContinuedBy.value) : "Continues" === J ? f.pure(c.applicativeEither)(x.Continues.value) : "IsNewVersionOf" === J ? f.pure(c.applicativeEither)(x.IsNewVersionOf.value) : "IsPreviousVersionOf" === J ? f.pure(c.applicativeEither)(x.IsPreviousVersionOf.value) : "IsPartOf" === J ? f.pure(c.applicativeEither)(x.IsPartOf.value) : "HasPart" === J ? f.pure(c.applicativeEither)(x.HasPart.value) : "IsReferencedBy" === J ? f.pure(c.applicativeEither)(x.IsReferencedBy.value) : "References" === J ? f.pure(c.applicativeEither)(x.References.value) : "IsDocumentedBy" === J ? f.pure(c.applicativeEither)(x.IsDocumentedBy.value) : "Documents" === J ? f.pure(c.applicativeEither)(x.Documents.value) : "IsCompiledBy" === J ? f.pure(c.applicativeEither)(x.IsCompiledBy.value) : "Compiles" === J ? f.pure(c.applicativeEither)(x.Compiles.value) : "IsVariantFormOf" === J ? f.pure(c.applicativeEither)(x.IsVariantFormOf.value) : "IsOriginalFormOf" === J ? f.pure(c.applicativeEither)(x.IsOriginalFormOf.value) : "IsIdenticalTo" === J ? f.pure(c.applicativeEither)(x.IsIdenticalTo.value) : "HasMetadata" === J ? f.pure(c.applicativeEither)(x.HasMetadata.value) : "IsMetadataFor" === J ? f.pure(c.applicativeEither)(x.IsMetadataFor.value) : "Reviews" === J ? f.pure(c.applicativeEither)(x.Reviews.value) : "IsReviewedBy" === J ? f.pure(c.applicativeEither)(x.IsReviewedBy.value) : "IsDerivedFrom" === J ? f.pure(c.applicativeEither)(x.IsDerivedFrom.value) : "IsSourceOf" === J ? f.pure(c.applicativeEither)(x.IsSourceOf.value) : c.Left.create("Unknown RelationType: '" + (J + "'"));
  },
      N = function N(J) {
    return "Access" === J ? f.pure(c.applicativeEither)(new m.Just(x.Access.value)) : "Collection" === J ? f.pure(c.applicativeEither)(new m.Just(x.Collection.value)) : "Data" === J ? f.pure(c.applicativeEither)(new m.Just(x.Data.value)) : "Metadata" === J ? f.pure(c.applicativeEither)(new m.Just(x.Metadata.value)) : "Preservation" === J ? f.pure(c.applicativeEither)(new m.Just(x.Preservation.value)) : "Submission" === J ? f.pure(c.applicativeEither)(new m.Just(x.Submission.value)) : "Quality" === J ? f.pure(c.applicativeEither)(new m.Just(x.Quality.value)) : "Terms of Use" === J ? f.pure(c.applicativeEither)(new m.Just(x.TermsOfUse.value)) : "" === J ? f.pure(c.applicativeEither)(m.Nothing.value) : c.Left.create("Unknown PolicyType: '" + (J + "'"));
  },
      I = function I(J) {
    return function (ja) {
      ja = q.fromString(k.trim(ja));
      if (ja instanceof m.Nothing) return c.Left.create("Empty string found for " + J);
      if (ja instanceof m.Just) return new c.Right(ja.value0);
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 57, column 3 - line 59, column 26): " + [ja.constructor.name]);
    };
  },
      V = function V(J) {
    return function () {
      var ja = J.xevalRoot.str(A.lastModRootP)();
      return v(I("ModDate")(ja))();
    };
  },
      O = function O(J) {
    return "commercial" === J ? f.pure(c.applicativeEither)(x.Commercial.value) : "non-profit" === J ? f.pure(c.applicativeEither)(x.NonProfit.value) : "governmental" === J ? f.pure(c.applicativeEither)(x.Governmental.value) : c.Left.create("Unknown InstitutionType: '" + (J + "'"));
  },
      r = function r(J) {
    return "dataCustodian" === J ? f.pure(c.applicativeEither)(new m.Just(x.DataCustodian.value)) : "" === J ? f.pure(c.applicativeEither)(m.Nothing.value) : c.Left.create("Unknown InstitutionContactType: '" + (J + "'"));
  },
      aa = function aa(J) {
    return "ARK" === J ? f.pure(c.applicativeEither)(x.ARK.value) : "arXiv" === J ? f.pure(c.applicativeEither)(x.ArXiv.value) : "bibcode" === J ? f.pure(c.applicativeEither)(x.Bibcode.value) : "DOI" === J ? f.pure(c.applicativeEither)(x.DOI.value) : "EAN13" === J ? f.pure(c.applicativeEither)(x.EAN13.value) : "EISSN" === J ? f.pure(c.applicativeEither)(x.EISSN.value) : "Handle" === J ? f.pure(c.applicativeEither)(x.Handle.value) : "IGSN" === J ? f.pure(c.applicativeEither)(x.IGSN.value) : "ISBN" === J ? f.pure(c.applicativeEither)(x.ISBN.value) : "ISSN" === J ? f.pure(c.applicativeEither)(x.ISSN.value) : "ISTC" === J ? f.pure(c.applicativeEither)(x.ISTC.value) : "LISSN" === J ? f.pure(c.applicativeEither)(x.LISSN.value) : "LSID" === J ? f.pure(c.applicativeEither)(x.LSID.value) : "PMID" === J ? f.pure(c.applicativeEither)(x.PMID.value) : "PURL" === J ? f.pure(c.applicativeEither)(x.PURL.value) : "UPC" === J ? f.pure(c.applicativeEither)(x.UPC.value) : "URL" === J ? f.pure(c.applicativeEither)(x.URL.value) : "URN" === J ? f.pure(c.applicativeEither)(x.URN.value) : c.Left.create("Unknown IdentifierType: '" + (J + "'"));
  },
      ia = function ia(J) {
    return function (ja) {
      var fa = function fa(W) {
        return function () {
          var Z = J.xeval.str(W)(z.at(z.stringXPath)(A.idTypeAT))();
          return v(aa(Z))();
        };
      },
          y = function y(W) {
        return function () {
          var Z = J.xeval.str(W)(".")();
          return v(I("InstitutionID")(Z))();
        };
      };

      return function () {
        var W = A.unsafeSingleNodeValue(J)(ja)(z.xx(z.stringXPath)(A.instIdP))(),
            Z = y(W)();
        W = fa(W)();
        return {
          id: Z,
          idType: W
        };
      };
    };
  },
      ka = function ka(J) {
    var ja = function ja(Z) {
      return function () {
        var ba = J.xeval.str(Z)(z.at(z.stringXPath)(A.relTypeAT))();
        return v(B(ba))();
      };
    },
        fa = function fa(Z) {
      return function () {
        var ba = J.xeval.str(Z)(z.at(z.stringXPath)(A.relIdTypeAT))();
        return v(aa(ba))();
      };
    },
        y = function y(Z) {
      return function () {
        var ba = J.xeval.str(Z)(".")();
        return v(I("RelatedIdentifier")(ba))();
      };
    },
        W = function W(Z) {
      return function () {
        var ba = y(Z)(),
            na = fa(Z)(),
            pa = ja(Z)();
        return {
          id: ba,
          idType: na,
          relType: pa
        };
      };
    };

    return function () {
      var Z = J.xevalRoot.any(A.relIdRootP)(E.ordered_node_snapshot_type)();
      Z = H.snapshot(Z)();
      Z = u.sequence(u.traversableArray)(t.applicativeEffect)(n.map(n.functorArray)(W)(Z))();
      Z = e.fromArray(Z);
      if (Z instanceof m.Just) return Z.value0;
      if (Z instanceof m.Nothing) return p["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 107, column 3 - line 109, column 67): " + [Z.constructor.name]);
    };
  },
      qa = function qa(J) {
    return function (ja) {
      var fa = function fa(Z) {
        return function () {
          var ba = J.xeval.str(Z)(z.at(z.stringXPath)(A.resIdTypeAT))();
          return v(aa(ba))();
        };
      },
          y = function y(Z) {
        return function () {
          var ba = J.xeval.str(Z)(".")();
          return v(I("ResourceID")(ba))();
        };
      },
          W = function W(Z) {
        return function (ba) {
          return u.sequence(u.traversableMaybe)(t.applicativeEffect)(h.bind(m.bindMaybe)(Z)(function (na) {
            return h.bind(m.bindMaybe)(ba)(function (pa) {
              return f.pure(m.applicativeMaybe)(l.lift2(t.applyEffect)(function (Da) {
                return function (Ga) {
                  return {
                    id: Da,
                    idType: Ga
                  };
                };
              })(na)(pa));
            });
          }));
        };
      };

      return function () {
        var Z = J.xeval.nodeMay(ja)(z.xx(z.stringXPath)(A.resIdP))(),
            ba = n.map(m.functorMaybe)(y)(Z);
        Z = n.map(m.functorMaybe)(fa)(Z);
        return W(ba)(Z)();
      };
    };
  },
      ua = function ua(J) {
    return function () {
      var ja = J.xevalRoot.str(A.idRootP)();
      ja = v(I("Identifier")(ja))();
      var fa = J.xevalRoot.str(A.idTypeRootAP)();
      fa = v(aa(fa))();
      return {
        id: ja,
        idType: fa
      };
    };
  },
      ra = function ra(J) {
    return function (ja) {
      var fa = function fa(y) {
        return function () {
          var W = J.xeval.str(y)(".")();
          return v(I("Format")(W))();
        };
      };

      return function () {
        var y = J.xeval.any(ja)(z.pathAppendNSx(z.stringXPath)(z.xx(z.stringXPath)(A.formatCP))(A.formatP))(E.ordered_node_snapshot_type)();
        y = H.snapshot(y)();
        return u.sequence(u.traversableArray)(t.applicativeEffect)(n.map(n.functorArray)(fa)(y))();
      };
    };
  },
      wa = function wa(J) {
    return function () {
      var ja = J.xevalRoot.str(A.dateRootP)();
      return v(I("Date")(ja))();
    };
  },
      ea = function ea(J) {
    return "0" === J ? f.pure(c.applicativeEither)(!1) : "1" === J ? f.pure(c.applicativeEither)(!0) : "false" === J ? f.pure(c.applicativeEither)(!1) : "true" === J ? f.pure(c.applicativeEither)(!0) : c.Left.create("Invalid xs:boolean value: '" + (J + "'"));
  },
      sa = function sa(J) {
    return "" === J ? f.pure(c.applicativeEither)(m.Nothing.value) : n.map(c.functorEither)(m.Just.create)(ea(J));
  },
      ca = function ca(J) {
    return function (ja) {
      var fa = z.pathAppendNSx(z.stringXPath)(z.xx(z.stringXPath)(A.instPolicyCP))(A.instPolicyP),
          y = function y(W) {
        return function () {
          var Z = K.childNodes(W)();
          Z = L.toArray(Z)();
          Z = b.head(b.filter(function (Ea) {
            return !w.startsWith("#")(K.nodeName(Ea));
          })(Z));
          if (Z instanceof m.Just) var ba = Z.value0;else if (Z instanceof m.Nothing) ba = p["throw"]("Couldn't find child node of " + K.nodeName(W))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 390, column 30 - line 392, column 80): " + [Z.constructor.name]);
          var na = J.xeval.str(ba)(".")(),
              pa = v(I("Policy")(na))();

          Z = function () {
            var Ea = n.map(m.functorMaybe)(F.localName)(F.fromNode(ba));
            if (Ea instanceof m.Just && Ea.value0 === A.freeTextPolicyP) return new x.FreeTextPolicy(pa);

            if (Ea instanceof m.Just && Ea.value0 === A.refPolicyP) {
              Ea = D.parsePublicURL(na);
              if (Ea instanceof c.Left) return p["throw"]("In refPolicy URL parsing: " + Ea.value0)();
              if (Ea instanceof c.Right) return new x.RefPolicy(Ea.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 397, column 37 - line 399, column 45): " + [Ea.constructor.name]);
            }

            if (Ea instanceof m.Just) return p["throw"]("invalid element '" + (Ea.value0 + "' as child of institutionPolicy"))();
            if (Ea instanceof m.Nothing) return p["throw"]("unable to convert policy child Node with name '" + (K.nodeName(ba) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 395, column 17 - line 403, column 56): " + [Ea.constructor.name]);
          }();

          var Da = J.xeval.str(W)(z.at(z.stringXPath)(A.polTypeAT))();
          Da = v(N(Da))();
          var Ga = J.xeval.str(W)(z.at(z.stringXPath)(A.appliesToProdAT))();
          Ga = v(sa(Ga))();
          return {
            policy: Z,
            policyType: Da,
            appliesToProduct: Ga
          };
        };
      };

      return function () {
        var W = J.xeval.any(ja)(fa)(E.ordered_node_snapshot_type)();
        W = H.snapshot(W)();
        W = u.sequence(u.traversableArray)(t.applicativeEffect)(n.map(n.functorArray)(y)(W))();
        W = e.fromArray(W);
        if (W instanceof m.Just) return W.value0;
        if (W instanceof m.Nothing) return p["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 377, column 3 - line 379, column 67): " + [W.constructor.name]);
      };
    };
  },
      Q = function Q(J) {
    return function (ja) {
      var fa = function fa(W) {
        return function () {
          var Z = J.xeval.str(W)(z.xx(z.stringXPath)(A.pubYearP))();
          return v(I("PubYear")(Z))();
        };
      },
          y = z.xx(z.stringXPath)(A.basicMetaP);

      return function () {
        var W = A.unsafeSingleNodeValue(J)(ja)(y)(),
            Z = J.xeval.str(W)(z.xx(z.stringXPath)(A.titleP))(),
            ba = J.xeval.str(W)(z.xx(z.stringXPath)(A.creatorP))();
        Z = v(I("Title")(Z))();
        ba = v(I("Creator")(ba))();
        W = fa(W)();
        return {
          title: Z,
          creator: ba,
          publicationYear: W
        };
      };
    };
  },
      P = function P(J) {
    return function (ja) {
      return function (fa) {
        return function () {
          var y = J.xeval.str(fa)(ja)();
          y = D.parsePublicURL(y);
          if (y instanceof c.Left) return p["throw"](y.value0)();
          if (y instanceof c.Right) return y.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 438, column 3 - line 440, column 26): " + [y.constructor.name]);
        };
      };
    };
  },
      C = function C(J) {
    return function (ja) {
      var fa = function fa(ba) {
        return function () {
          var na = ba();
          return v(I("SuperOrg")(na))();
        };
      },
          y = function y(ba) {
        return function () {
          var na = J.xeval.nodeMay(ba)(z.xx(z.stringXPath)(A.superOrgNameP))();
          return u.sequence(u.traversableMaybe)(t.applicativeEffect)(n.map(m.functorMaybe)(function (pa) {
            return fa(J.xeval.str(pa)("."));
          })(na))();
        };
      },
          W = function W(ba) {
        return function () {
          var na = A.unsafeSingleNodeValue(J)(ba)(z.xx(z.stringXPath)(A.instSustainP))(),
              pa = P(J)(z.xx(z.stringXPath)(A.missionUrlP))(na)();
          na = P(J)(z.xx(z.stringXPath)(A.fundingUrlP))(na)();
          return {
            missionStatementURL: pa,
            fundingStatementURL: na
          };
        };
      },
          Z = function Z(ba) {
        var na = z.xx(z.stringXPath)(A.instContactP);
        return function () {
          var pa = A.unsafeSingleNodeValue(J)(ba)(na)(),
              Da = J.xeval.str(pa)(z.at(z.stringXPath)(A.instContactTypeAT))();
          Da = v(r(Da))();
          pa = J.xeval.str(pa)(".")();
          pa = G.validate(pa);
          if (pa instanceof c.Left) pa = p["throw"]("Error in validating email address for InstitutionContact: " + pa.value0)();else if (pa instanceof c.Right) pa = pa.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 341, column 23 - line 345, column 28): " + [pa.constructor.name]);
          return {
            emailAddress: pa,
            contactType: Da
          };
        };
      };

      return function () {
        var ba = A.unsafeSingleNodeValue(J)(ja)(z.xx(z.stringXPath)(A.locP))(),
            na = ia(J)(ba)(),
            pa = h.join(t.bindEffect)(n.mapFlipped(t.functorEffect)(J.xeval.str(ba)(z.xx(z.stringXPath)(A.instNameP)))(function (S) {
          return v(I("Institution Name")(S));
        }))(),
            Da = J.xeval.str(ba)(z.xx(z.stringXPath)(A.instTypeP))();
        Da = v(O(Da))();
        var Ga = y(ba)(),
            Ea = Z(ba)(),
            Sa = W(ba)(),
            Pa = ca(J)(ba)();
        ba = J.xeval.str(ba)(z.xx(z.stringXPath)(A.versioningP))();
        ba = v(ea(ba))();
        return {
          institutionID: na,
          institutionName: pa,
          institutionType: Da,
          superOrganizationName: Ga,
          institutionContact: Ea,
          institutionSustainability: Sa,
          institutionPolicies: Pa,
          versioning: ba
        };
      };
    };
  },
      U = function U(J) {
    return function (ja) {
      var fa = function fa(W) {
        return function () {
          var Z = J.xeval.str(W)(z.at(z.stringXPath)(A.relTypeAT))();
          return v(B(Z))();
        };
      },
          y = function y(W) {
        return function (Z) {
          return u.sequence(u.traversableMaybe)(t.applicativeEffect)(h.bind(m.bindMaybe)(W)(function (ba) {
            return h.bind(m.bindMaybe)(Z)(function (na) {
              return f.pure(m.applicativeMaybe)(l.lift2(t.applyEffect)(function (pa) {
                return function (Da) {
                  return {
                    url: pa,
                    relationType: Da
                  };
                };
              })(ba)(na));
            });
          }));
        };
      };

      return function () {
        var W = J.xeval.nodeMay(ja)(z.xx(z.stringXPath)(A.resMetaSourceP))(),
            Z = n.map(m.functorMaybe)(P(J)("."))(W);
        W = n.map(m.functorMaybe)(fa)(W);
        return y(Z)(W)();
      };
    };
  },
      R = function R(J) {
    var ja = function ja(fa) {
      return function () {
        var y = Q(J)(fa)(),
            W = qa(J)(fa)(),
            Z = T(J)(fa)(),
            ba = ra(J)(fa)(),
            na = U(J)(fa)(),
            pa = C(J)(fa)();
        return {
          basicMetadata: y,
          resourceID: W,
          resourceType: Z,
          format: ba,
          resourceMetadataSource: na,
          location: pa
        };
      };
    };

    return function () {
      var fa = J.xevalRoot.any(A.sProdRootP)(E.ordered_node_snapshot_type)();
      fa = H.snapshot(fa)();
      fa = u.sequence(u.traversableArray)(t.applicativeEffect)(n.map(n.functorArray)(ja)(fa))();
      fa = e.fromArray(fa);
      if (fa instanceof m.Just) return fa.value0;
      if (fa instanceof m.Nothing) return p["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 165, column 3 - line 167, column 70): " + [fa.constructor.name]);
    };
  };

  d.readRecord = function (J) {
    return function () {
      var ja = ua(J)(),
          fa = wa(J)(),
          y = V(J)(),
          W = ka(J)(),
          Z = R(J)();
      return {
        identifier: ja,
        date: fa,
        lastModified: y,
        relatedIdentifiers: W,
        supplementaryProducts: Z
      };
    };
  };

  d.readIdentifierType = aa;
  d.readRelationType = B;
  d.readResourceTypeGeneral = M;
  d.readInstitutionType = O;
  d.readInstitutionContactType = r;
  d.readPolicyType = N;
  d.readBoolean = ea;
  d.rightOrThrow = v;
})(PS);

(function (a) {
  a.unsafeGet = function (d) {
    return function (f) {
      return function () {
        return f[d];
      };
    };
  };
})(PS["React.SyntheticEvent"] = PS["React.SyntheticEvent"] || {});

(function (a) {
  a["React.SyntheticEvent"] = a["React.SyntheticEvent"] || {};
  var d = a["React.SyntheticEvent"],
      f = a["React.SyntheticEvent"],
      l = a["Data.Symbol"];

  a = function (h) {
    return function (b) {
      return function (e) {
        return function (c) {
          return f.unsafeGet(l.reflectSymbol(b)(e))(c);
        };
      };
    };
  }()(new l.IsSymbol(function () {
    return "target";
  }))(l.SProxy.value);

  d.target = a;
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var d = a["Metajelo.FormUtil"],
      f = a["Concur.Core.FRP"],
      l = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      n = a["Control.Applicative"],
      m = a["Control.Apply"],
      k = a["Control.Bind"],
      q = a["Control.Cofree"],
      w = a["Data.Array"],
      u = a["Data.Array.NonEmpty"],
      z = a["Data.Bounded"],
      t = a["Data.Date"],
      p = a["Data.Date.Component"],
      x = a["Data.DateTime"],
      A = a["Data.Either"],
      G = a["Data.Enum"],
      D = a["Data.Eq"],
      H = a["Data.Foldable"],
      E = a["Data.Formatter.DateTime"],
      F = a["Data.Functor"],
      K = a["Data.Generic.Rep"],
      L = a["Data.Generic.Rep.Bounded"],
      v = a["Data.Generic.Rep.Enum"],
      M = a["Data.Generic.Rep.Eq"],
      T = a["Data.Generic.Rep.Ord"],
      B = a["Data.Generic.Rep.Show"],
      N = a["Data.Maybe"],
      I = a["Data.Monoid"],
      V = a["Data.Ord"],
      O = a["Data.Profunctor.Strong"],
      r = a["Data.Semigroup"],
      aa = a["Data.Show"],
      ia = a["Data.String.Common"],
      ka = a["Data.String.NonEmpty.Internal"],
      qa = a["Data.Symbol"],
      ua = a["Data.Time"],
      ra = a["Data.Time.Component"],
      wa = a["Data.Traversable"],
      ea = a["Data.Tuple"],
      sa = a["Data.Unfoldable1"],
      ca = a.Effect,
      Q = a["Metajelo.Types"],
      P = a["Metajelo.XPaths.Read"],
      C = a["React.SyntheticEvent"],
      U = a["Text.Email.Parser"],
      R = a["Text.Email.Validate"],
      J = a["Text.URL.Validate"],
      ja = a["Web.DOM.Element"],
      fa = function () {
    function X() {}

    X.value = new X();
    return X;
  }(),
      y = function () {
    function X() {}

    X.value = new X();
    return X;
  }(),
      W = function () {
    function X(da) {
      this.value0 = da;
    }

    X.create = function (da) {
      return new X(da);
    };

    return X;
  }(),
      Z = function () {
    function X(da) {
      this.value0 = da;
    }

    X.create = function (da) {
      return new X(da);
    };

    return X;
  }(),
      ba = function ba(X, da, xa) {
    this.fromOptionValue = X;
    this.toOptionLabel = da;
    this.toOptionValue = xa;
  },
      na = function na(X) {
    if (X instanceof W || X instanceof Z) return X.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 284, column 1 - line 284, column 34): " + [X.constructor.name]);
  },
      pa = function pa(X) {
    return e.input(l.widgetLiftWidget)([c.defaultValue(X), F.map(h.functorProps)(c.unsafeTargetValue)(c.onChange)]);
  },
      Da = function Da(X) {
    return k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray)))(X)(function (da) {
      return n.pure(q.applicativeCofree(b.widgetAlternative(I.monoidArray)))(ka.fromString(ia.trim(da)));
    });
  },
      Ga = function Ga(X) {
    return function (da) {
      return da < X ? [] : w.range(X)(da);
    };
  },
      Ea = function Ea(X) {
    return "FreeTextPolicy" === X ? n.pure(A.applicativeEither)(fa.value) : "RefPolicy" === X ? n.pure(A.applicativeEither)(y.value) : A.Left.create("Unknown Policy: '" + (X + "'"));
  },
      Sa = function Sa(X) {
    return function (da) {
      return H.fold(H.foldableMaybe)(I.monoidString)(F.map(N.functorMaybe)(aa.show(X))(da));
    };
  };

  a = new ba(function (X) {
    return N.fromJust()(A.hush(P.readResourceTypeGeneral(X)));
  }, aa.show(Q.showResourceTypeGeneral), aa.show(Q.showResourceTypeGeneral));

  var Pa = new ba(function (X) {
    return N.fromJust()(A.hush(P.readRelationType(X)));
  }, aa.show(Q.showRelationType), aa.show(Q.showRelationType)),
      S = new ba(function (X) {
    return N.fromJust()(A.hush(P.readInstitutionType(X)));
  }, aa.show(Q.showInstitutionType), aa.show(Q.showInstitutionType)),
      oa = new ba(function (X) {
    return N.fromJust()(A.hush(P.readIdentifierType(X)));
  }, aa.show(Q.showIdentifierType), aa.show(Q.showIdentifierType)),
      Ma = function Ma(X) {
    return X instanceof W ? !0 : !1;
  },
      db = function (X) {
    return function (da) {
      return function (xa) {
        return function (Aa) {
          return function (ya) {
            return function (Na) {
              return function (za) {
                return new x.DateTime(t.canonicalDate(N.fromMaybe(z.bottom(p.boundedYear))(G.toEnum(p.boundedEnumYear)(X)))(N.fromMaybe(z.bottom(p.boundedMonth))(G.toEnum(p.boundedEnumMonth)(da)))(N.fromMaybe(z.bottom(p.boundedDay))(G.toEnum(p.boundedEnumDay)(xa))), new ua.Time(N.fromMaybe(z.bottom(ra.boundedHour))(G.toEnum(ra.boundedEnumHour)(Aa)), N.fromMaybe(z.bottom(ra.boundedMinute))(G.toEnum(ra.boundedEnumMinute)(ya)), N.fromMaybe(z.bottom(ra.boundedSecond))(G.toEnum(ra.boundedEnumSecond)(Na)), N.fromMaybe(z.bottom(ra.boundedMillisecond))(G.toEnum(ra.boundedEnumMillisecond)(za))));
              };
            };
          };
        };
      };
    };
  }(0)(0)(0)(0)(0)(0)(0),
      Fa = new K.Generic(function (X) {
    if (X instanceof fa) return new K.Inl(K.NoArguments.value);
    if (X instanceof y) return new K.Inr(K.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 226, column 1 - line 226, column 58): " + [X.constructor.name]);
  }, function (X) {
    if (X instanceof K.Inl) return fa.value;
    if (X instanceof K.Inr) return y.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 226, column 1 - line 226, column 58): " + [X.constructor.name]);
  });

  B = new aa.Show(B.genericShow(Fa)(B.genericShowSum(B.genericShowConstructor(B.genericShowArgsNoArguments)(new qa.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(B.genericShowConstructor(B.genericShowArgsNoArguments)(new qa.IsSymbol(function () {
    return "RefPolicy";
  })))));
  B = new ba(function () {
    var X = N.fromMaybe(fa.value);
    return function (da) {
      return X(A.hush(Ea(da)));
    };
  }(), aa.show(B), aa.show(B));

  var Xa = new F.Functor(function (X) {
    return function (da) {
      if (da instanceof W) return W.create(F.map(N.functorMaybe)(X)(da.value0));
      if (da instanceof Z) return Z.create(F.map(N.functorMaybe)(X)(da.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 271, column 1 - line 273, column 48): " + [X.constructor.name, da.constructor.name]);
    };
  }),
      Ya = function Ya(X) {
    return function (da) {
      return function (xa) {
        return f.step(xa)(function () {
          var Aa = N.isJust(xa) ? !0 : !1;
          return k.bind(b.widgetBind)(e.select(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([c.value(N.maybe("")(da.toOptionValue)(xa)), F.map(h.functorProps)(function () {
            var ya = da.fromOptionValue;
            return function (Na) {
              return ya(c.unsafeTargetValue(Na));
            };
          }())(c.onChange)])(w.cons(e.option(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([c.disabled(Aa)])([e.text(l.widgetLiftWidget)("Select ...")]))(F.mapFlipped(F.functorArray)(G.upFromIncluding(X.Enum1())(sa.unfoldable1Array)(z.bottom(X.Bounded0())))(function (ya) {
            return e.option(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([c.value((0, da.toOptionValue)(ya))])([e.text(l.widgetLiftWidget)((0, da.toOptionLabel)(ya))]);
          }))))(function (ya) {
            return n.pure(b.widgetApplicative)(Ya(X)(da)(new N.Just(ya)));
          });
        }());
      };
    };
  },
      Za = function Za(X) {
    return function (da) {
      return function (xa) {
        return function (Aa) {
          return function (ya) {
            return H.fold(X)(xa)(F.map(da)(Aa)(ya));
          };
        };
      };
    };
  },
      Ua = function Ua(X) {
    X = Za(H.foldableMaybe)(N.functorMaybe)(I.monoidString)(ka.toString)(X);
    X = f.debounce(I.monoidArray)(500)(X)(pa);
    return Da(X);
  },
      Va = function Va(X) {
    return N.maybe(I.mempty(b.widgetMonoid(I.monoidArray)))(function (da) {
      return e.div(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([c.style({
        color: "red"
      })])([e.text(l.widgetLiftWidget)(aa.show(X)(da))]);
    });
  },
      eb = new D.Eq(M.genericEq(Fa)(M.genericEqSum(M.genericEqConstructor(M.genericEqNoArguments))(M.genericEqConstructor(M.genericEqNoArguments)))),
      $a = new V.Ord(function () {
    return eb;
  }, function (X) {
    return function (da) {
      return T.genericCompare(Fa)(T.genericOrdSum(T.genericOrdConstructor(T.genericOrdNoArguments))(T.genericOrdConstructor(T.genericOrdNoArguments)))(X)(da);
    };
  }),
      fb = new G.Enum(function () {
    return $a;
  }, v.genericPred(Fa)(v.genericEnumSum(v.genericEnumConstructor(v.genericEnumNoArguments))(L.genericTopConstructor(L.genericTopNoArguments))(v.genericEnumConstructor(v.genericEnumNoArguments))(L.genericBottomConstructor(L.genericBottomNoArguments))), v.genericSucc(Fa)(v.genericEnumSum(v.genericEnumConstructor(v.genericEnumNoArguments))(L.genericTopConstructor(L.genericTopNoArguments))(v.genericEnumConstructor(v.genericEnumNoArguments))(L.genericBottomConstructor(L.genericBottomNoArguments))));

  qa = function qa(X) {
    return function (da) {
      return da instanceof N.Nothing ? "(None)" : Sa(X)(da);
    };
  };

  D = new ba(function (X) {
    return A.hush(P.readBoolean(X));
  }, qa(aa.showBoolean), Sa(aa.showBoolean));
  M = new ba(function () {
    var X = k.join(N.bindMaybe);
    return function (da) {
      return X(A.hush(P.readInstitutionContactType(da)));
    };
  }(), qa(Q.showInstitutionContactType), Sa(Q.showInstitutionContactType));
  ba = new ba(function () {
    var X = k.join(N.bindMaybe);
    return function (da) {
      return X(A.hush(P.readPolicyType(da)));
    };
  }(), qa(Q.showPolicyType), Sa(Q.showPolicyType));

  var gb = function gb(X) {
    return F.voidRight(b.widgetFunctor)(!X)(e.input(l.widgetLiftWidget)([c._type("checkbox"), c.checked(X), c.onChange]));
  },
      ab = function ab(X) {
    var da = gb(X);
    return f.step(X)(k.bind(b.widgetBind)(da)(function (xa) {
      return n.pure(b.widgetApplicative)(ab(xa));
    }));
  },
      hb = new z.Bounded(function () {
    return $a;
  }, L.genericBottom(Fa)(L.genericBottomSum(L.genericBottomConstructor(L.genericBottomNoArguments))), L.genericTop(Fa)(L.genericTopSum(L.genericTopConstructor(L.genericTopNoArguments))));

  L = new G.BoundedEnum(function () {
    return hb;
  }, function () {
    return fb;
  }, v.genericCardinality(Fa)(v.genericBoundedEnumSum(v.genericBoundedEnumConstructor(v.genericBoundedEnumNoArguments))(v.genericBoundedEnumConstructor(v.genericBoundedEnumNoArguments))), v.genericFromEnum(Fa)(v.genericBoundedEnumSum(v.genericBoundedEnumConstructor(v.genericBoundedEnumNoArguments))(v.genericBoundedEnumConstructor(v.genericBoundedEnumNoArguments))), v.genericToEnum(Fa)(v.genericBoundedEnumSum(v.genericBoundedEnumConstructor(v.genericBoundedEnumNoArguments))(v.genericBoundedEnumConstructor(v.genericBoundedEnumNoArguments))));

  var ib = new m.Apply(function () {
    return Xa;
  }, function (X) {
    return function (da) {
      if (X instanceof W && da instanceof W || X instanceof W && da instanceof Z || X instanceof Z && da instanceof W) return W.create(m.apply(N.applyMaybe)(X.value0)(da.value0));
      if (X instanceof Z && da instanceof Z) return Z.create(m.apply(N.applyMaybe)(X.value0)(da.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 274, column 1 - line 278, column 63): " + [X.constructor.name, da.constructor.name]);
    };
  }),
      jb = new n.Applicative(function () {
    return ib;
  }, function (X) {
    return W.create(new N.Just(X));
  }),
      bb = function bb(X) {
    return function (da) {
      var xa = ea.snd(da),
          Aa = ea.fst(da),
          ya = new W(N.Nothing.value);

      da = function () {
        var Ba = V.max(V.ordInt)(0)(Aa - w.length(xa) | 0);
        return r.append(r.semigroupArray)(F.map(F.functorArray)(n.pure(jb))(xa))(F.mapFlipped(F.functorArray)(Ga(1)(Ba))(function (Qa) {
          return ya;
        }));
      }();

      var Na = function Na(Ba) {
        return f.step(Ba)(k.bind(b.widgetBind)(F.voidRight(b.widgetFunctor)(Z.create(na(Ba)))(e.button(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([c.onClick])([e.text(l.widgetLiftWidget)("Delete")])))(function (Qa) {
          return n.pure(b.widgetApplicative)(Na(Qa));
        }));
      },
          za = function za(Ba) {
        return e.li_(q.shiftMapCofree(I.monoidArray))([])(k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray)))(X(na(Ba)))(function (Qa) {
          return k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray)))(Na(new W(Qa)))(function (Ia) {
            return n.pure(q.applicativeCofree(b.widgetAlternative(I.monoidArray)))(Ia);
          });
        }));
      },
          mb = function mb(Ba) {
        if (Ba instanceof Z) return f.step(new Z(N.Nothing.value))(I.mempty(b.widgetMonoid(I.monoidArray)));
        if (Ba instanceof W) return za(Ba);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 305, column 23 - line 307, column 35): " + [Ba.constructor.name]);
      };

      return e.div_(q.shiftMapCofree(I.monoidArray))([])(k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray)))(function (Ba) {
        return function (Qa) {
          return f.loopS(I.monoidArray)(new ea.Tuple(Ba, Qa))(function (Ia) {
            return e.ul_(q.shiftMapCofree(I.monoidArray))([])(function () {
              ea.fst(Ia);
              var Oa = ea.snd(Ia);
              return k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray)))(f.step(0)(F.voidRight(b.widgetFunctor)(n.pure(q.applicativeCofree(b.widgetAlternative(I.monoidArray)))(1))(e.button(b.widgetMultiAlternative(I.monoidArray))(b.widgetShiftMap)([c.onClick])([e.text(l.widgetLiftWidget)("Add item")]))))(function (Ka) {
                return k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray)))(wa.traverse(wa.traversableArray)(q.applicativeCofree(b.widgetAlternative(I.monoidArray)))(mb)(Oa))(function (cb) {
                  cb = w.filter(Ma)(cb);
                  var Y = w.length(cb) + Ka | 0,
                      ha = F.mapFlipped(F.functorArray)(Ga(1)(Ka))(function (la) {
                    return ya;
                  });
                  return n.pure(q.applicativeCofree(b.widgetAlternative(I.monoidArray)))(ea.Tuple.create(Y)(r.append(r.semigroupArray)(cb)(ha)));
                });
              });
            }());
          });
        };
      }(Aa)(da))(function (Ba) {
        return n.pure(q.applicativeCofree(b.widgetAlternative(I.monoidArray)))(O.second(O.strongFn)(function () {
          var Qa = F.map(F.functorArray)(na);
          return function (Ia) {
            return w.catMaybes(Qa(Ia));
          };
        }())(Ba));
      }));
    };
  };

  d.menuSignal = Ya;
  d.textInput = Ua;

  d.urlInput = function (X) {
    if (X instanceof A.Left) var da = "";else if (X instanceof A.Right) da = ka.toString(J.urlToNEString(X.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 141, column 15 - line 143, column 48): " + [X.constructor.name]);
    if (X instanceof A.Left) var xa = X.value0;else if (X instanceof A.Right) xa = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 137, column 15 - line 139, column 20): " + [X.constructor.name]);
    return k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray)))(Ua(ka.fromString(da)))(function (Aa) {
      var ya = k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray))),
          Na = n.pure(q.applicativeCofree(b.widgetAlternative(I.monoidArray)));
      if (Aa instanceof N.Nothing) Aa = new A.Left(xa);else if (Aa instanceof N.Just) Aa = J.parsePublicURL(ka.toString(Aa.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 128, column 19 - line 130, column 46): " + [Aa.constructor.name]);
      return ya(Na(Aa))(function (za) {
        return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(I.monoidArray)))(f.display(function () {
          if (za instanceof A.Right) return I.mempty(b.widgetMonoid(I.monoidArray));
          if (za instanceof A.Left) return Va(aa.showString)(new N.Just(za.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 131, column 13 - line 133, column 40): " + [za.constructor.name]);
        }()))(function () {
          return n.pure(q.applicativeCofree(b.widgetAlternative(I.monoidArray)))(za);
        });
      });
    });
  };

  d.emailInput = function (X) {
    if (X instanceof A.Left) var da = "";else if (X instanceof A.Right) da = U.toString(X.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 161, column 15 - line 163, column 33): " + [X.constructor.name]);
    if (X instanceof A.Left) var xa = X.value0;else if (X instanceof A.Right) xa = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 157, column 15 - line 159, column 20): " + [X.constructor.name]);
    return k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray)))(Ua(ka.fromString(da)))(function (Aa) {
      var ya = k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray))),
          Na = n.pure(q.applicativeCofree(b.widgetAlternative(I.monoidArray)));
      if (Aa instanceof N.Nothing) Aa = new A.Left(xa);else if (Aa instanceof N.Just) Aa = R.validate(ka.toString(Aa.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 148, column 21 - line 150, column 43): " + [Aa.constructor.name]);
      return ya(Na(Aa))(function (za) {
        return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(I.monoidArray)))(f.display(function () {
          if (za instanceof A.Right) return I.mempty(b.widgetMonoid(I.monoidArray));
          if (za instanceof A.Left) return Va(aa.showString)(new N.Just(za.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 151, column 13 - line 153, column 40): " + [za.constructor.name]);
        }()))(function () {
          return n.pure(q.applicativeCofree(b.widgetAlternative(I.monoidArray)))(za);
        });
      });
    });
  };

  d.checkBoxS = ab;
  d.FreeTextPolicy = fa;

  d.checkPolicy = function (X) {
    return function (da) {
      if (X instanceof fa) {
        var xa = F.mapFlipped(A.functorEither);
        da = ka.fromString(ia.trim(da));
        if (da instanceof N.Just) da = new A.Right(da.value0);else if (da instanceof N.Nothing) da = new A.Left("Empty string when NonEmptyString expected.");else throw Error("Failed pattern match at Metajelo.FormUtil (line 345, column 22 - line 347, column 63): " + [da.constructor.name]);
        return xa(da)(Q.FreeTextPolicy.create);
      }

      if (X instanceof y) return F.mapFlipped(A.functorEither)(J.parsePublicURL(da))(Q.RefPolicy.create);
      throw Error("Failed pattern match at Metajelo.FormUtil (line 256, column 25 - line 258, column 52): " + [X.constructor.name]);
    };
  };

  d.polPolTypeIs = function (X) {
    if (X instanceof Q.FreeTextPolicy) return fa.value;
    if (X instanceof Q.RefPolicy) return y.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 261, column 18 - line 263, column 29): " + [X.constructor.name]);
  };

  d.arrayView = bb;

  d.nonEmptyArrayView = function (X) {
    return function (da) {
      return k.bind(q.bindCofree(b.widgetAlternative(I.monoidArray)))(bb(X)(O.second(O.strongFn)(Za(H.foldableMaybe)(N.functorMaybe)(I.monoidArray)(u.toArray))(da)))(function (xa) {
        return n.pure(q.applicativeCofree(b.widgetAlternative(I.monoidArray)))(O.second(O.strongFn)(u.fromArray)(xa));
      });
    };
  };

  d.errorDisplay = Va;

  d.formatXsdDate = function (X) {
    var da = E.formatDateTime("YYYY-MM-DD")(X);
    return function () {
      if (da instanceof A.Left) return new A.Left(da.value0);

      if (da instanceof A.Right) {
        var xa = ka.fromString(da.value0);
        if (xa instanceof N.Nothing) return new A.Left("Empty Date output from formatXsdDate");
        if (xa instanceof N.Just) return new A.Right(xa.value0);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 387, column 27 - line 389, column 30): " + [xa.constructor.name]);
      }

      throw Error("Failed pattern match at Metajelo.FormUtil (line 385, column 15 - line 389, column 30): " + [da.constructor.name]);
    }();
  };

  d.initDate = db;

  d.evTargetElem = function (X) {
    return F.map(ca.functorEffect)(ja.fromNode)(C.target(X));
  };

  d.isOptionMaybeBoolean = D;
  d.isOptionIdentifierType = oa;
  d.isOptionInstitutionType = S;
  d.isOptionMaybeInstitutionContactType = M;
  d.isOptionMaybePolicyType = ba;
  d.isOptionRelationType = Pa;
  d.isOptionResourceTypeGeneral = a;
  d.boundedEnumPolPolType = L;
  d.isOptionPolPolType = B;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var d = a["Metajelo.View"],
      f = a["Concur.Core.LiftWidget"],
      l = a["Concur.Core.Types"],
      h = a["Concur.React.DOM"],
      b = a["Concur.React.Props"],
      e = a["Control.Alt"],
      c = a["Control.Bind"],
      n = a["Control.Category"],
      m = a["Data.Array"],
      k = a["Data.Array.NonEmpty"],
      q = a["Data.Array.NonEmpty.Internal"],
      w = a["Data.Foldable"],
      u = a["Data.Functor"],
      z = a["Data.HeytingAlgebra"],
      t = a["Data.Maybe"],
      p = a["Data.Monoid"],
      x = a["Data.Profunctor.Strong"],
      A = a["Data.Semigroup"],
      G = a["Data.Show"],
      D = a["Data.String.CodePoints"],
      H = a["Data.String.NonEmpty.Internal"],
      E = a["Data.String.Utils"],
      F = a["Data.Unfoldable"],
      K = a["Data.Unfoldable1"],
      L = a["Foreign.Object"],
      v = a["Metajelo.CSS.Common.ClassNames"],
      M = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      T = a["Metajelo.CSS.Web.ClassProps"],
      B = a["Metajelo.CSS.Web.Util"],
      N = a["Metajelo.Types"],
      I = a["Text.Email.Parser"],
      V = a["Text.URL.Validate"],
      O = function () {
    var R = u.map(u.functorArray)(D.singleton);
    return function (J) {
      return R(D.toCodePointArray(J));
    };
  }(),
      r = function r(R) {
    var J = h.text(R);
    return function (ja) {
      return J(H.toString(ja));
    };
  },
      aa = h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([h.text(f.widgetLiftWidget)(" ")]),
      ia = function () {
    var R = w.intercalate(w.foldableArray)(p.monoidArray)([aa]),
        J = u.map(u.functorArray)(K.singleton(K.unfoldable1Array));
    return function (ja) {
      return R(J(ja));
    };
  }(),
      ka = function ka(R) {
    return h.div(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.institutionPolicy])(ia([function (J) {
      var ja = function () {
        if (J instanceof t.Nothing) return {
          text: "May apply to product (unverified)",
          cls: M.appliesMaybe
        };
        if (J instanceof t.Just && J.value0) return {
          text: "Applies to product",
          cls: M.appliesYes
        };
        if (J instanceof t.Just && !J.value0) return {
          text: "Does not apply to product",
          cls: M.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 258, column 10 - line 261, column 75): " + [J.constructor.name]);
      }();

      return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([B.cList([v.applies, ja.cls])])([function (fa) {
        return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.appliesInfo])([h.text(f.widgetLiftWidget)(fa)]);
      }(ja.text)]);
    }(R.appliesToProduct), w.foldMap(w.foldableMaybe)(l.widgetMonoid(p.monoidArray))(function (J) {
      return h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.policyType])([h.text(f.widgetLiftWidget)(G.show(N.showPolicyType)(J))]), h.text(f.widgetLiftWidget)(" Policy:")]);
    })(R.policyType), function (J) {
      var ja = h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.policy]),
          fa = K.singleton(K.unfoldable1Array);
      if (J instanceof N.FreeTextPolicy) J = r(f.widgetLiftWidget)(J.value0);else if (J instanceof N.RefPolicy) J = V.urlToString(J.value0), J = h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([h.text(f.widgetLiftWidget)(J)]);else throw Error("Failed pattern match at Metajelo.View (line 251, column 5 - line 254, column 40): " + [J.constructor.name]);
      return ja(fa(J));
    }(R.policy)]));
  },
      qa = function qa(R) {
    return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.institutionName])([r(f.widgetLiftWidget)(R.institutionName)]);
  },
      ua = function ua(R) {
    return function (J) {
      return w.foldMap(w.foldableMaybe)(p.monoidArray)(n.identity(n.categoryFn))(m.init(J));
    };
  },
      ra = function ra(R) {
    return function (J) {
      return function (ja) {
        return function (fa) {
          return function (y) {
            var W = L.fromFoldableWith(R)(A.append(fa)),
                Z = u.map(J)(x.fanout(n.categoryFn)(x.strongFn)(y)(K.singleton(ja)));
            return function (ba) {
              return W(Z(ba));
            };
          };
        };
      };
    };
  },
      wa = function wa(R) {
    var J = I.toString(R.emailAddress),
        ja = h.text(f.widgetLiftWidget);
    if (R.contactType instanceof t.Nothing) R = ".";else if (R.contactType instanceof t.Just) R = " (" + (G.show(N.showInstitutionContactType)(R.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 185, column 24 - line 187, column 41): " + [R.contactType.constructor.name]);
    ja = ja(R);
    return h.span_(l.widgetShiftMap)([T.institutionContact])(e.alt(l.widgetAlt(p.monoidArray))(e.alt(l.widgetAlt(p.monoidArray))(h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([h.text(f.widgetLiftWidget)("Institution Contact: ")]))(h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.contactEmail, b.href("mailto:" + J)])([h.text(f.widgetLiftWidget)(J)])))(h.span_(l.widgetShiftMap)([T.contactType])(ja)));
  },
      ea = function ea(R) {
    return h["cite'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([r(f.widgetLiftWidget)(R)]);
  },
      sa = function sa(R) {
    if (R.idType instanceof N.ARK) return h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(H.toString(R.id))])([ea(R.id)]);

    if (R.idType instanceof N.ArXiv) {
      var J = "https://arxiv.org/abs/" + H.toString(R.id);
      return h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([ea(R.id)]);
    }

    if (R.idType instanceof N.Bibcode) return J = "https://ui.adsabs.harvard.edu/abs/" + (H.toString(R.id) + "/abstract"), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([ea(R.id)]);
    if (R.idType instanceof N.DOI) return J = "https://doi.org/" + H.toString(R.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([ea(R.id)]);
    if (R.idType instanceof N.EAN13) return ea(R.id);
    if (R.idType instanceof N.EISSN) return J = "https://www.worldcat.org/ISSN/" + H.toString(R.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([ea(R.id)]);
    if (R.idType instanceof N.Handle) return J = "http://hdl.handle.net/" + H.toString(R.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([ea(R.id)]);
    if (R.idType instanceof N.IGSN) return J = "http://igsn.org/" + H.toString(R.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([ea(R.id)]);
    if (R.idType instanceof N.ISBN) return ea(R.id);
    if (R.idType instanceof N.ISSN) return J = "https://www.worldcat.org/ISSN/" + H.toString(R.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([ea(R.id)]);
    if (R.idType instanceof N.ISTC) return ea(R.id);
    if (R.idType instanceof N.LISSN) return J = "https://www.worldcat.org/ISSN/" + H.toString(R.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([ea(R.id)]);
    if (R.idType instanceof N.LSID) return J = "http://www.lsid.info/resolver/?lsid=" + H.toString(R.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([ea(R.id)]);
    if (R.idType instanceof N.PMID) return J = "https://www.ncbi.nlm.nih.gov/pubmed/" + H.toString(R.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(J)])([ea(R.id)]);
    if (R.idType instanceof N.PURL) return h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(H.toString(R.id))])([ea(R.id)]);
    if (R.idType instanceof N.UPC) return ea(R.id);
    if (R.idType instanceof N.URL) return h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(H.toString(R.id))])([ea(R.id)]);
    if (R.idType instanceof N.URN) return ea(R.id);
    throw Error("Failed pattern match at Metajelo.View (line 207, column 1 - line 207, column 47): " + [R.constructor.name]);
  },
      ca = function ca(R) {
    return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.identifier])([h.span_(l.widgetShiftMap)([T.idType])(h.text(f.widgetLiftWidget)(G.show(N.showIdentifierType)(R.idType))), h.span_(l.widgetShiftMap)([T.idUrl])(sa(R))]);
  },
      Q = function Q(R) {
    return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.relatedId])([h.span_(l.widgetShiftMap)([T.relType])(h.text(f.widgetLiftWidget)(G.show(N.showRelationType)(R.relType))), aa, ca({
      id: R.id,
      idType: R.idType
    })]);
  },
      P = function P(R) {
    return function (J) {
      return function (ja) {
        if (J) return R;

        if (w.any(w.foldableArray)(z.heytingAlgebraBoolean)(function (y) {
          return E.endsWith(y)(R);
        })([";", ".", ","])) {
          var fa = O(R);
          return E.fromCharArray(ua(p.monoidString)(fa)) + ja;
        }

        return R + ja;
      };
    };
  },
      C = function C(R) {
    var J = qa(R),
        ja = h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([h.text(f.widgetLiftWidget)("("), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.institutionId])([ca(R.institutionID)]), h.text(f.widgetLiftWidget)("; "), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.institutionType])([h.text(f.widgetLiftWidget)(G.show(N.showInstitutionType)(R.institutionType))]), h.text(f.widgetLiftWidget)(P(")")(t.isNothing(R.superOrganizationName))(","))]);
    if (R.superOrganizationName instanceof t.Nothing) var fa = p.mempty(l.widgetMonoid(p.monoidArray));else if (R.superOrganizationName instanceof t.Just) fa = h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([h.text(f.widgetLiftWidget)("a member of "), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.superOrg])([h.text(f.widgetLiftWidget)(P(H.toString(R.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 147, column 7 - line 153, column 10): " + [R.superOrganizationName.constructor.name]);
    return ia([J, ja, fa, wa(R.institutionContact), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.sustainability])([h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.missionStatement, b.href(V.urlToString(R.institutionSustainability.missionStatementURL))])([h.text(f.widgetLiftWidget)("Mission Statement")]), h.text(f.widgetLiftWidget)("; "), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.fundingStatement, b.href(V.urlToString(R.institutionSustainability.fundingStatementURL))])([h.text(f.widgetLiftWidget)("Funding Statement")]), h.text(f.widgetLiftWidget)(".")]), h.ul(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.institutionPolicies])(u.map(u.functorArray)(function (y) {
      return h["li'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([ka(y)]);
    })(k.toArray(R.institutionPolicies))), function (y) {
      if (y) y = "Versioned";else {
        if (y) throw Error("Failed pattern match at Metajelo.View (line 174, column 14 - line 176, column 31): " + [y.constructor.name]);
        y = "Unversioned";
      }
      return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.versioning])([h.text(f.widgetLiftWidget)(y)]);
    }(R.versioning)]);
  },
      U = function U(R) {
    if (R.resourceID instanceof t.Just) var J = h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.resourceId])([ca(R.resourceID.value0), h.text(f.widgetLiftWidget)(".")]);else if (R.resourceID instanceof t.Nothing) J = p.mempty(l.widgetMonoid(p.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 125, column 17 - line 127, column 24): " + [R.resourceID.constructor.name]);
    var ja = [h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.basicMetadata, T.creator])([r(f.widgetLiftWidget)(R.basicMetadata.creator)]), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.basicMetadata, T.pubyear])([r(f.widgetLiftWidget)(R.basicMetadata.publicationYear)]), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.basicMetadata, T.title])([h.text(f.widgetLiftWidget)(P(H.toString(R.basicMetadata.title))(t.isNothing(R.resourceID))(","))])];
    J = A.append(A.semigroupArray)(ja)([h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([qa(R.location), h.text(f.widgetLiftWidget)(".")]), J]);
    return h.div(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.product])(ia(A.append(A.semigroupArray)([h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.productCitation])([h["cite'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)(ia(J))])])(C(R.location))));
  };

  d.spacify = ia;

  d.mkRecordWidget = function (R) {
    var J = function () {
      var y = u.map(q.functorNonEmptyArray)(function (W) {
        return h.li(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.relatedId])([W]);
      })(u.map(q.functorNonEmptyArray)(Q)(R.relatedIdentifiers));
      return h.ul(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.relatedIdList])(k.toArray(y));
    }(),
        ja = ra(q.foldableNonEmptyArray)(q.functorNonEmptyArray)(q.unfoldable1NonEmptyArray)(q.semigroupNonEmptyArray)(function (y) {
      return G.show(N.showResourceTypeGeneral)(y.resourceType.generalType) + (": " + y.resourceType.description);
    })(R.supplementaryProducts),
        fa = function fa(y) {
      y = c.join(c.bindArray)(F.fromMaybe(F.unfoldableArray)(u.map(t.functorMaybe)(k.toArray)(L.lookup(y)(ja))));
      var W = h.span_(l.widgetShiftMap)([T.resourceType])(w.fold(w.foldableMaybe)(l.widgetMonoid(p.monoidArray))(u.mapFlipped(t.functorMaybe)(m.head(y))(function (Z) {
        return e.alt(l.widgetAlt(p.monoidArray))(e.alt(l.widgetAlt(p.monoidArray))(h.span_(l.widgetShiftMap)([T.resourceTypeGen])(h.text(f.widgetLiftWidget)(G.show(N.showResourceTypeGeneral)(Z.resourceType.generalType))))(h.span_(l.widgetShiftMap)([T.resourceTypeDescr])(h.text(f.widgetLiftWidget)(Z.resourceType.description))))(h["br'"](f.widgetLiftWidget));
      })));
      return h["div'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)(m.cons(W)(u.map(u.functorArray)(U)(y)));
    };

    G.show(N.showIdentifierType)(R.identifier.idType);
    return h.div(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.record])([h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.productsHeader])([h.span_(l.widgetShiftMap)([T.recordId])(ca(R.identifier))]), h.ul(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.productList])(u.map(u.functorArray)(function (y) {
      return h.li_(l.widgetShiftMap)([T.productGroup])(fa(y));
    })(L.keys(ja))), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([T.relatedIdsHeader])([]), J]);
  };

  d.mkSupplementaryProductWidget = U;
  d.locElems = C;
})(PS);

(function (a) {
  a.copyToClipboard = function (d) {
    return function () {
      var f = document.createElement("textarea");
      f.type = "text";
      f.value = d;
      f.style.position = "absolute";
      f.style.left = -1E4;
      document.body.appendChild(f);
      f.select();
      document.execCommand("copy");
      document.body.removeChild(f);
    };
  };

  a.outerHTML = function (d) {
    return function () {
      return d.outerHTML;
    };
  };
})(PS["Nonbili.DOM"] = PS["Nonbili.DOM"] || {});

(function (a) {
  a["Nonbili.DOM"] = a["Nonbili.DOM"] || {};
  var d = a["Nonbili.DOM"];
  a = a["Nonbili.DOM"];
  d.copyToClipboard = a.copyToClipboard;
  d.outerHTML = a.outerHTML;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Write"] = a["Metajelo.XPaths.Write"] || {};

  var d = a["Control.Applicative"],
      f = a["Data.Array.NonEmpty.Internal"],
      l = a["Data.Foldable"],
      h = a["Data.Functor"],
      b = a["Data.Maybe"],
      e = a["Data.Show"],
      c = a["Data.Traversable"],
      n = a["Data.Unit"],
      m = a["Data.XPath"],
      k = a.Effect,
      q = a["Metajelo.Types"],
      w = a["Metajelo.XPaths"],
      u = a["Nonbili.DOM"],
      z = a["Text.Email.Parser"],
      t = a["Text.URL.Validate"],
      p = a["Web.DOM.Document"],
      x = a["Web.DOM.Element"],
      A = a["Web.DOM.Node"],
      G = function G(Q) {
    return function (P) {
      return function (C) {
        return function (U) {
          var R = x.fromNode(C);
          return function () {
            c.sequence(c.traversableMaybe)(k.applicativeEffect)(h.mapFlipped(b.functorMaybe)(R)(function (J) {
              return x.setAttribute(Q)(e.show(q.showIdentifierType)(U))(J);
            }))();
            return n.unit;
          };
        };
      };
    };
  },
      D = a["Data.String.NonEmpty.Internal"].toString,
      H = function H(Q) {
    return function (P) {
      return function (C) {
        return function (U) {
          return function () {
            A.setTextContent(D(U.id))(C)();
            return G(Q)(P)(C)(U.idType)();
          };
        };
      };
    };
  },
      E = function E(Q) {
    return function (P) {
      return function () {
        var C = w.unsafeSingleNodeValue(Q)(Q.recNode)(m.xx(m.stringXPath)(w.idP))();
        return H(w.idTypeAT)(Q)(C)(P)();
      };
    };
  },
      F = function F(Q) {
    return function (P) {
      return function () {
        c.sequence(c.traversableMaybe)(k.applicativeEffect)(h.map(b.functorMaybe)(A.setTextContent(D(Q)))(P))();
        return n.unit;
      };
    };
  },
      K = function K(Q) {
    return function (P) {
      return function () {
        var C = Q.xevalRoot.nodeMay(w.dateRootP)();
        return F(P)(C)();
      };
    };
  },
      L = function L(Q) {
    return function (P) {
      return function () {
        var C = Q.xevalRoot.nodeMay(w.lastModRootP)();
        return F(P)(C)();
      };
    };
  },
      v = function v(Q) {
    return function (P) {
      var C = x.prefix(Q.recElem);
      return function () {
        if (C instanceof b.Just) var U = C.value0 + ":";else if (C instanceof b.Nothing) U = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 235, column 20 - line 237, column 18): " + [C.constructor.name]);
        U += P;
        return p.createElementNS(new b.Just(Q.ns))(U)(Q.doc)();
      };
    };
  },
      M = function M(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = v(Q)(C)();
          A.appendChild(x.toNode(U))(P)();
          return U;
        };
      };
    };
  },
      T = function T(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = h.map(k.functorEffect)(x.toNode)(M(Q)(P)(w.basicMetaP))(),
              R = h.map(k.functorEffect)(x.toNode)(M(Q)(U)(w.titleP))();
          A.setTextContent(D(C.title))(R)();
          R = h.map(k.functorEffect)(x.toNode)(M(Q)(U)(w.creatorP))();
          A.setTextContent(D(C.creator))(R)();
          U = h.map(k.functorEffect)(x.toNode)(M(Q)(U)(w.pubYearP))();
          return A.setTextContent(D(C.publicationYear))(U)();
        };
      };
    };
  },
      B = function B(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = M(Q)(P)(w.instContactP)();
          c.sequence(c.traversableMaybe)(k.applicativeEffect)(h.mapFlipped(b.functorMaybe)(C.contactType)(function (R) {
            return x.setAttribute(w.instContactTypeAT)(e.show(q.showInstitutionContactType)(R))(U);
          }))();
          return A.setTextContent(z.toString(C.emailAddress))(x.toNode(U))();
        };
      };
    };
  },
      N = function N(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = h.map(k.functorEffect)(x.toNode)(M(Q)(P)(w.instIdP))();
          return H(w.idTypeAT)(Q)(U)(C)();
        };
      };
    };
  },
      I = function I(Q) {
    return function (P) {
      return l.for_(k.applicativeEffect)(f.foldableNonEmptyArray)(P)(function (C) {
        return function () {
          var U = M(Q)(Q.recNode)(w.relIdP)(),
              R = x.toNode(U);
          A.setTextContent(D(C.id))(R)();
          x.setAttribute(w.relIdTypeAT)(e.show(q.showIdentifierType)(C.idType))(U)();
          return x.setAttribute(w.relTypeAT)(e.show(q.showRelationType)(C.relType))(U)();
        };
      });
    };
  },
      V = function V(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = h.map(k.functorEffect)(x.toNode)(M(Q)(P)(w.resIdP))();
          return H(w.resIdTypeAT)(Q)(U)(C)();
        };
      };
    };
  },
      O = function O(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = M(Q)(P)(w.resMetaSourceP)();
          A.setTextContent(t.urlToString(C.url))(x.toNode(U))();
          return x.setAttribute(w.relTypeAT)(e.show(q.showRelationType)(C.relationType))(U)();
        };
      };
    };
  },
      r = function r(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = M(Q)(P)(w.resTypeP)();
          A.setTextContent(C.description)(x.toNode(U))();
          return x.setAttribute(w.resTypeGenAT)(e.show(q.showResourceTypeGeneral)(C.generalType))(U)();
        };
      };
    };
  },
      aa = function aa(Q) {
    return function (P) {
      return function (C) {
        return function (U) {
          return function () {
            var R = h.map(k.functorEffect)(x.toNode)(M(P)(C)(Q))();
            return A.setTextContent(U)(R)();
          };
        };
      };
    };
  },
      ia = function ia(Q) {
    return function (P) {
      return function (C) {
        return function (U) {
          return aa(Q)(P)(C)(D(U));
        };
      };
    };
  },
      ka = function ka(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = h.map(k.functorEffect)(x.toNode)(M(Q)(P)(w.formatCP))();
          return l.for_(k.applicativeEffect)(l.foldableArray)(C)(function (R) {
            return ia(w.formatP)(Q)(U)(R);
          })();
        };
      };
    };
  },
      qa = function qa(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = M(Q)(P)(w.instPolicyP)(),
              R = x.toNode(U);
          c.sequence(c.traversableMaybe)(k.applicativeEffect)(h.mapFlipped(b.functorMaybe)(C.policyType)(function (J) {
            return x.setAttribute(w.polTypeAT)(e.show(q.showPolicyType)(J))(U);
          }))();
          c.sequence(c.traversableMaybe)(k.applicativeEffect)(h.mapFlipped(b.functorMaybe)(C.appliesToProduct)(function (J) {
            return x.setAttribute(w.appliesToProdAT)(e.show(e.showBoolean)(J))(U);
          }))();
          if (C.policy instanceof q.FreeTextPolicy) return ia(w.freeTextPolicyP)(Q)(R)(C.policy.value0)();
          if (C.policy instanceof q.RefPolicy) return ia(w.refPolicyP)(Q)(R)(t.urlToNEString(C.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 202, column 3 - line 205, column 27): " + [C.policy.constructor.name]);
        };
      };
    };
  },
      ua = function ua(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = h.map(k.functorEffect)(x.toNode)(M(Q)(P)(w.instPolicyCP))();
          return l.for_(k.applicativeEffect)(f.foldableNonEmptyArray)(C)(function (R) {
            return qa(Q)(U)(R);
          })();
        };
      };
    };
  },
      ra = function ra(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = h.map(k.functorEffect)(x.toNode)(M(Q)(P)(w.instSustainP))();
          ia(w.missionUrlP)(Q)(U)(t.urlToNEString(C.missionStatementURL))();
          return ia(w.fundingUrlP)(Q)(U)(t.urlToNEString(C.fundingStatementURL))();
        };
      };
    };
  },
      wa = function wa(Q) {
    return function (P) {
      return function (C) {
        return function () {
          var U = M(Q)(P)(w.locP)(),
              R = x.toNode(U);
          N(Q)(R)(C.institutionID)();
          ia(w.instNameP)(Q)(R)(C.institutionName)();
          aa(w.instTypeP)(Q)(R)(e.show(q.showInstitutionType)(C.institutionType))();
          c.sequence(c.traversableMaybe)(k.applicativeEffect)(h.mapFlipped(b.functorMaybe)(C.superOrganizationName)(function (J) {
            return ia(w.superOrgNameP)(Q)(R)(J);
          }))();
          B(Q)(R)(C.institutionContact)();
          ra(Q)(R)(C.institutionSustainability)();
          ua(Q)(R)(C.institutionPolicies)();
          return aa(w.versioningP)(Q)(R)(e.show(e.showBoolean)(C.versioning))();
        };
      };
    };
  },
      ea = function ea(Q) {
    return function (P) {
      return function () {
        var C = w.unsafeSingleNodeValue(Q)(Q.recNode)(m.xx(m.stringXPath)(w.sProdCP))(),
            U = h.map(k.functorEffect)(x.toNode)(M(Q)(C)(w.sProdP))();
        T(Q)(U)(P.basicMetadata)();
        c.sequence(c.traversableMaybe)(k.applicativeEffect)(h.mapFlipped(b.functorMaybe)(P.resourceID)(function (R) {
          return V(Q)(U)(R);
        }))();
        r(Q)(U)(P.resourceType)();
        ka(Q)(U)(P.format)();
        c.sequence(c.traversableMaybe)(k.applicativeEffect)(h.mapFlipped(b.functorMaybe)(P.resourceMetadataSource)(function (R) {
          return O(Q)(U)(R);
        }))();
        return wa(Q)(U)(P.location)();
      };
    };
  },
      sa = function sa(Q) {
    return function (P) {
      return l.for_(k.applicativeEffect)(f.foldableNonEmptyArray)(P)(function (C) {
        return ea(Q)(C);
      });
    };
  },
      ca = function ca(Q) {
    return function (P) {
      return function () {
        E(Q)(P.identifier)();
        K(Q)(P.date)();
        L(Q)(P.lastModified)();
        I(Q)(P.relatedIdentifiers)();
        return sa(Q)(P.supplementaryProducts)();
      };
    };
  };

  a["Metajelo.XPaths.Write"].recordToString = function (Q) {
    return function () {
      var P = w.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      ca(P)(Q)();
      P = p.documentElement(P.doc)();
      return b.maybe(d.pure(k.applicativeEffect)(""))(u.outerHTML)(P)();
    };
  };
})(PS);

(function (a) {
  a.pickFn = function (d, f) {
    for (var l = {}, h = 0; h < d.length; h++) {
      "undefined" !== typeof f[d[h]] && (l[d[h]] = f[d[h]]);
    }

    return l;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a.unsafeGet = function (d) {
    return function (f) {
      return f[d];
    };
  };

  a.unsafeSet = function (d) {
    return function (f) {
      return function (l) {
        var h = {},
            b;

        for (b in l) {
          ({}).hasOwnProperty.call(l, b) && (h[b] = l[b]);
        }

        h[d] = f;
        return h;
      };
    };
  };

  a.unsafeDelete = function (d) {
    return function (f) {
      var l = {},
          h;

      for (h in f) {
        h !== d && {}.hasOwnProperty.call(f, h) && (l[h] = f[h]);
      }

      return l;
    };
  };
})(PS["Record.Unsafe"] = PS["Record.Unsafe"] || {});

(function (a) {
  a["Record.Unsafe"] = a["Record.Unsafe"] || {};
  var d = a["Record.Unsafe"];
  a = a["Record.Unsafe"];
  d.unsafeGet = a.unsafeGet;
  d.unsafeSet = a.unsafeSet;
  d.unsafeDelete = a.unsafeDelete;
})(PS);

(function (a) {
  a.Record = a.Record || {};
  var d = a.Record,
      f = a["Data.Symbol"],
      l = a["Record.Unsafe"];

  d.get = function (h) {
    return function (b) {
      return function (e) {
        return function (c) {
          return l.unsafeGet(f.reflectSymbol(h)(e))(c);
        };
      };
    };
  };

  d.insert = function (h) {
    return function (b) {
      return function (e) {
        return function (c) {
          return function (n) {
            return function (m) {
              return l.unsafeSet(f.reflectSymbol(h)(c))(n)(m);
            };
          };
        };
      };
    };
  };

  d["delete"] = function (h) {
    return function (b) {
      return function (e) {
        return function (c) {
          return function (n) {
            return l.unsafeDelete(f.reflectSymbol(h)(c))(n);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Type.Data.RowList"] = a["Type.Data.RowList"] || {};
  a = a["Type.Data.RowList"];

  var d = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.RLProxy = d;
})(PS);

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var d = a["Record.Extra"],
      f = a["Data.List.Types"],
      l = a["Data.Monoid"],
      h = a["Data.Symbol"],
      b = a["Type.Data.RowList"],
      e = function e(c) {
    this.keysImpl = c;
  };

  a = new e(function (c) {
    return l.mempty(f.monoidList);
  });

  d.keys = function (c) {
    return function (n) {
      return function (m) {
        return (0, n.keysImpl)(b.RLProxy.value);
      };
    };
  };

  d.nilKeys = a;

  d.consKeys = function (c) {
    return function (n) {
      return new e(function (m) {
        m = (0, n.keysImpl)(b.RLProxy.value);
        var k = h.reflectSymbol(c)(h.SProxy.value);
        return new f.Cons(k, m);
      });
    };
  };
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var d = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.RProxy = d;
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var d = a.Option,
      f = a.Option,
      l = a["Control.Monad.State.Class"],
      h = a["Control.Monad.State.Trans"],
      b = a["Data.Array"],
      e = a["Data.Function.Uncurried"],
      c = a["Data.Identity"],
      n = a["Data.List.Types"],
      m = a["Data.Maybe"],
      k = a["Data.Symbol"],
      q = a["Foreign.Object"],
      w = a.Record,
      u = a["Record.Extra"],
      z = a["Type.Data.Row"],
      t = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      p = function p(B) {
    this.getAllOption = B;
  },
      x = function x(B) {
    this["getAll'"] = B;
  },
      A = function A(B) {
    this.fromRecordOption = B;
  },
      G = function G(B) {
    this["fromRecord'"] = B;
  },
      D = function D(B) {
    return function (N) {
      return function (I) {
        I = b.fromFoldable(n.foldableList)(u.keys()(I)(z.RProxy.value));
        return e.runFn2(f.pickFn)(I);
      };
    };
  };

  a = new p(function (B) {
    return function (N) {
      return new m.Just({});
    };
  });

  var H = q.empty,
      E = new A(function (B) {
    return function (N) {
      return H;
    };
  }),
      F = function F(B) {
    return function (N) {
      return function (I) {
        return function (V) {
          var O = k.reflectSymbol(B)(k.SProxy.value),
              r = q.alter(function (aa) {
            return N(aa);
          })(O)(V);
          V = N(q.lookup(O)(V));
          return {
            option: r,
            value: V
          };
        };
      };
    };
  },
      K = function K(B) {
    return function (N) {
      return function (I) {
        return function (V) {
          return function (O) {
            return F(B)(function (r) {
              return m.Nothing.value;
            })(V)(O).option;
          };
        };
      };
    };
  },
      L = function L(B) {
    return function (N) {
      return function (I) {
        return function (V) {
          return F(B)(function (O) {
            return O;
          })(I)(V).value;
        };
      };
    };
  },
      v = function v(B) {
    return function (N) {
      return function (I) {
        return function (V) {
          return function (O) {
            return F(B)(function (r) {
              return new m.Just(V);
            })(I)(O).option;
          };
        };
      };
    };
  },
      M = function M(B) {
    return function (N) {
      return function (I) {
        return function (V) {
          return function (O) {
            if (V instanceof m.Just) return v(B)()(I)(V.value0)(O);
            if (V instanceof m.Nothing) return O;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [V.constructor.name]);
          };
        };
      };
    };
  },
      T = function T(B) {
    return function (N) {
      return function (I) {
        return function (V) {
          return function (O) {
            return function (r) {
              return F(B)(function (aa) {
                return new m.Just(O);
              })(V)(r).option;
            };
          };
        };
      };
    };
  };

  d.fromRecord = function (B) {
    return B["fromRecord'"];
  };

  d.empty = H;
  d.get = L;

  d.getAll = function (B) {
    return B["getAll'"];
  };

  d.getSubset = function (B) {
    return function (N) {
      return function (I) {
        return function (V) {
          return function (O) {
            return (0, V["getAll'"])(D()()(I)(O));
          };
        };
      };
    };
  };

  d.getWithDefault = function (B) {
    return function (N) {
      return function (I) {
        return function (V) {
          return function (O) {
            O = L(B)()(V)(O);
            if (O instanceof m.Just) return O.value0;
            if (O instanceof m.Nothing) return I;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [O.constructor.name]);
          };
        };
      };
    };
  };

  d.maySetOptState = function (B) {
    return function (N) {
      return function (I) {
        return function (V) {
          return function (O) {
            return l.put(h.monadStateStateT(c.monadIdentity))(M(B)()(I)(V)(O));
          };
        };
      };
    };
  };

  d.fromRecordAny = function (B) {
    return function (N) {
      return new G((0, B.fromRecordOption)(t.value));
    };
  };

  d.fromRecordOptionNil = E;

  d.fromRecordOptionCons = function (B) {
    return function (N) {
      return function (I) {
        return function (V) {
          return function (O) {
            return function (r) {
              return new A(function (aa) {
                return function (ia) {
                  var ka = w["delete"](B)()()(k.SProxy.value)(ia);
                  ka = (0, N.fromRecordOption)(t.value)(ka);
                  ia = w.get(B)()(k.SProxy.value)(ia);
                  return T(B)()()(k.SProxy.value)(ia)(ka);
                };
              });
            };
          };
        };
      };
    };
  };

  d.getAllAny = function (B) {
    return function (N) {
      return new x((0, N.getAllOption)(t.value));
    };
  };

  d.getAllOptionNil = a;

  d.getAllOptionCons = function (B) {
    return function (N) {
      return function (I) {
        return function (V) {
          return function (O) {
            return function (r) {
              return new p(function (aa) {
                return function (ia) {
                  var ka = K(B)()()(k.SProxy.value)(ia);
                  ka = (0, r.getAllOption)(t.value)(ka);
                  ia = L(B)()(k.SProxy.value)(ia);

                  if (ka instanceof m.Just) {
                    if (ia instanceof m.Just) return new m.Just(w.insert(B)()()(k.SProxy.value)(ia.value0)(ka.value0));
                    if (ia instanceof m.Nothing) return m.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [ia.constructor.name]);
                  }

                  if (ka instanceof m.Nothing) return m.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [ka.constructor.name]);
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
  a._item = function (d) {
    return function (f) {
      return f.item(d);
    };
  };
})(PS["Web.File.FileList"] = PS["Web.File.FileList"] || {});

(function (a) {
  a["Web.File.FileList"] = a["Web.File.FileList"] || {};
  var d = a["Web.File.FileList"],
      f = a["Data.Nullable"];

  a["Web.File.FileList"].item = function (l) {
    var h = d._item(l);

    return function (b) {
      return f.toMaybe(h(b));
    };
  };
})(PS);

(function (a) {
  a.eventListener = function (d) {
    return function () {
      return function (f) {
        return d(f)();
      };
    };
  };

  a.addEventListener = function (d) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function () {
            return h.addEventListener(d, f, l);
          };
        };
      };
    };
  };
})(PS["Web.Event.EventTarget"] = PS["Web.Event.EventTarget"] || {});

(function (a) {
  a["Web.Event.EventTarget"] = a["Web.Event.EventTarget"] || {};
  var d = a["Web.Event.EventTarget"];
  a = a["Web.Event.EventTarget"];
  d.eventListener = a.eventListener;
  d.addEventListener = a.addEventListener;
})(PS);

(function (a) {
  a.fileReader = function () {
    return new FileReader();
  };

  a.result = function (d) {
    return function () {
      return d.result;
    };
  };

  a.readAsText = function (d) {
    return function (f) {
      return function () {
        f.readAsText(d);
      };
    };
  };
})(PS["Web.File.FileReader"] = PS["Web.File.FileReader"] || {});

(function (a) {
  a["Web.File.FileReader"] = a["Web.File.FileReader"] || {};
  var d = a["Web.File.FileReader"],
      f = a["Web.File.FileReader"];
  d.toEventTarget = a["Unsafe.Coerce"].unsafeCoerce;
  d.fileReader = f.fileReader;
  d.result = f.result;
  d.readAsText = f.readAsText;
})(PS);

(function (a) {
  a["Web.HTML.Event.EventTypes"] = a["Web.HTML.Event.EventTypes"] || {};
  a = a["Web.HTML.Event.EventTypes"];
  a.error = "error";
  a.load = "load";
})(PS);

(function (a) {
  a["Web.File.FileReader.Aff"] = a["Web.File.FileReader.Aff"] || {};
  var d = a["Web.File.FileReader.Aff"],
      f = a["Control.Monad.Except"],
      l = a["Data.Either"],
      h = a["Data.List.Types"],
      b = a["Data.Monoid"],
      e = a["Data.Show"],
      c = a["Effect.Aff"],
      n = a["Effect.Exception"],
      m = a.Foreign,
      k = a["Web.Event.EventTarget"],
      q = a["Web.File.FileReader"],
      w = a["Web.HTML.Event.EventTypes"];

  a = function (u) {
    return function (z) {
      return function (t) {
        return c.makeAff(function (p) {
          var x = function x(A) {
            return p(l.Right.create(A));
          };

          return function () {
            var A = q.fileReader(),
                G = q.toEventTarget(A),
                D = k.eventListener(function (E) {
              return p(l.Left.create(n.error("error")));
            })(),
                H = k.eventListener(function (E) {
              return function () {
                var F = q.result(A)();
                return l.either(function (K) {
                  return p(l.Left.create(n.error(e.show(h.showNonEmptyList(m.showForeignError))(K))));
                })(x)(f.runExcept(u(F)))();
              };
            })();
            k.addEventListener(w.error)(D)(!1)(G)();
            k.addEventListener(w.load)(H)(!1)(G)();
            z(t)(A)();
            return b.mempty(c.monoidCanceler);
          };
        });
      };
    };
  }(m.readString)(q.readAsText);

  d.readAsText = a;
})(PS);

(function (a) {
  a._read = function (d, f, l) {
    var h = Object.prototype.toString.call(l);
    return 0 === h.indexOf("[object HTML") && h.indexOf("Element]") === h.length - 8 ? f(l) : d;
  };

  a.click = function (d) {
    return function () {
      return d.click();
    };
  };
})(PS["Web.HTML.HTMLElement"] = PS["Web.HTML.HTMLElement"] || {});

(function (a) {
  a["Web.HTML.HTMLElement"] = a["Web.HTML.HTMLElement"] || {};
  var d = a["Web.HTML.HTMLElement"],
      f = a["Web.HTML.HTMLElement"],
      l = a["Data.Maybe"];

  d.fromElement = function (h) {
    return f._read(l.Nothing.value, l.Just.create, h);
  };

  d.click = f.click;
})(PS);

(function (a) {
  a._files = function (d) {
    return function () {
      return d.files;
    };
  };
})(PS["Web.HTML.HTMLInputElement"] = PS["Web.HTML.HTMLInputElement"] || {});

(function (a) {
  a["Web.HTML.HTMLInputElement"] = a["Web.HTML.HTMLInputElement"] || {};
  var d = a["Web.HTML.HTMLInputElement"],
      f = a["Web.HTML.HTMLInputElement"],
      l = a["Data.Functor"],
      h = a["Data.Nullable"],
      b = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("HTMLInputElement");

  var e = function () {
    var c = l.map(b.functorEffect)(h.toMaybe);
    return function (n) {
      return c(f._files(n));
    };
  }();

  d.fromElement = a;
  d.files = e;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var d = a["Metajelo.UI"],
      f = a["Concur.Core.FRP"],
      l = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      n = a["Concur.React.Run"],
      m = a["Control.Applicative"],
      k = a["Control.Bind"],
      q = a["Control.Cofree"],
      w = a["Control.Monad.Except.Trans"],
      u = a["Control.Monad.Maybe.Trans"],
      z = a["Control.Monad.State"],
      t = a["Control.Monad.State.Class"],
      p = a["Control.Monad.State.Trans"],
      x = a["Control.Plus"],
      A = a["Data.Array"],
      G = a["Data.Array.NonEmpty"],
      D = a["Data.Array.NonEmpty.Internal"],
      H = a["Data.Bifunctor"],
      E = a["Data.Either"],
      F = a["Data.Enum"],
      K = a["Data.Foldable"],
      L = a["Data.Functor"],
      v = a["Data.Identity"],
      M = a["Data.Maybe"],
      T = a["Data.Maybe.First"],
      B = a["Data.Monoid"],
      N = a["Data.Semigroup"],
      I = a["Data.Show"],
      V = a["Data.String.Common"],
      O = a["Data.String.NonEmpty.Internal"],
      r = a["Data.Symbol"],
      aa = a["Data.Traversable"],
      ia = a["Data.Tuple"],
      ka = a.Effect,
      qa = a["Effect.Aff.Class"],
      ua = a["Effect.Class"],
      ra = a["Effect.Class.Console"],
      wa = a["Effect.Exception"],
      ea = a["Effect.Now"],
      sa = a.Global,
      ca = a["Metajelo.CSS.UI.ClassProps"],
      Q = a["Metajelo.CSS.Web.ClassProps"],
      P = a["Metajelo.FormUtil"],
      C = a["Metajelo.Types"],
      U = a["Metajelo.View"],
      R = a["Metajelo.XPaths"],
      J = a["Metajelo.XPaths.Read"],
      ja = a["Metajelo.XPaths.Write"],
      fa = a["Nonbili.DOM"],
      y = a.Option,
      W = a["Record.Extra"],
      Z = a["Text.URL.Validate"],
      ba = a["Web.DOM.Document"],
      na = a["Web.DOM.Element"],
      pa = a["Web.File.File"],
      Da = a["Web.File.FileList"],
      Ga = a["Web.File.FileReader.Aff"],
      Ea = a["Web.HTML"],
      Sa = a["Web.HTML.HTMLDocument"],
      Pa = a["Web.HTML.HTMLElement"],
      S = a["Web.HTML.HTMLInputElement"],
      oa = a["Web.HTML.Window"],
      Ma = function Ma(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.tooltip])(Y);
  };

  a = e.div_(b.widgetShiftMap)([ca.tooltip])(x.empty(b.widgetPlus(B.monoidArray)));

  var db = function db(Y) {
    return function () {
      var ha = Ea.window();
      ha = oa.document(ha)();
      ha = Sa.toDocument(ha);
      ha = ba.createElement("a")(ha)();
      na.setAttribute("download")("metajelo.xml")(ha)();
      na.setAttribute("href")("data:text/plain;charset=utf-8," + Y)(ha)();
      ha = Pa.fromElement(ha);
      if (ha instanceof M.Just) ha = Pa.click(ha.value0);else if (ha instanceof M.Nothing) ha = ra.log(ua.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + Y);else throw Error("Failed pattern match at Metajelo.UI (line 115, column 26 - line 119, column 18): " + [ha.constructor.name]);
      return ha;
    };
  },
      Fa = function Fa(Y) {
    return function (ha) {
      return y.getWithDefault(Y)()(y.empty);
    };
  },
      Xa = function Xa(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.format])(Ma(P.textInput(Y)));
  },
      Ya = function Ya(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.formatList])(P.arrayView(Xa)(Y));
  },
      Za = function Za(Y) {
    return function () {
      return {
        lastModified: k.join(ka.bindEffect)(L.map(ka.functorEffect)(L.map(L.functorFn)(J.rightOrThrow)(P.formatXsdDate))(ea.nowDateTime))(),
        date: Y.date,
        identifier: Y.identifier,
        relatedIdentifiers: Y.relatedIdentifiers,
        supplementaryProducts: Y.supplementaryProducts
      };
    };
  },
      Ua = function Ua(Y) {
    var ha = y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "fundingStatementURL";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "missionStatementURL";
    }))(y.fromRecordOptionNil)()()()())()()()())())(Y),
        la = new E.Right(Y.missionStatementURL),
        ma = new E.Right(Y.fundingStatementURL);
    return z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(r.SProxy.value)(new M.Just(la))))(function () {
      return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(r.SProxy.value)(new M.Just(ma)));
    }))(ha);
  },
      Va = function Va(Y) {
    var ha = new E.Right(Y.url);
    Y = y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "relationType";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "url";
    }))(y.fromRecordOptionNil)()()()())()()()())())(Y);
    return z.execState(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
      return "url_Ei";
    }))()(r.SProxy.value)(new M.Just(ha))))(Y);
  },
      eb = function eb(Y) {
    if (Y.policy instanceof C.FreeTextPolicy) var ha = new M.Just(Y.policy.value0);else if (Y.policy instanceof C.RefPolicy) ha = O.fromString(Z.urlToString(Y.policy.value0));else throw Error("Failed pattern match at Metajelo.UI (line 324, column 20 - line 326, column 54): " + [Y.policy.constructor.name]);
    var la = y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "appliesToProduct";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "policy";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "policyType";
    }))(y.fromRecordOptionNil)()()()())()()()())()()()())())(Y);
    return z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
      return "policy_str";
    }))()(r.SProxy.value)(ha)))(function () {
      return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
        return "polPolType";
      }))()(r.SProxy.value)(M.Just.create(P.polPolTypeIs(Y.policy)))))(function () {
        return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
          return "policy_ei";
        }))()(r.SProxy.value)(M.Just.create(new E.Right(Y.policy))));
      });
    }))(la);
  },
      $a = function $a(Y) {
    return z.execState(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
      return "email_Ei";
    }))()(r.SProxy.value)(M.Just.create(new E.Right(Y.emailAddress)))))(y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "contactType";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "emailAddress";
    }))(y.fromRecordOptionNil)()()()())()()()())())(Y));
  },
      fb = function fb(Y) {
    var ha = y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "institutionContact";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "institutionID";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "institutionName";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "institutionPolicies";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "institutionSustainability";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "institutionType";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "superOrganizationName";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "versioning";
    }))(y.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(Y),
        la = y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "id";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "idType";
    }))(y.fromRecordOptionNil)()()()())()()()())())(Y.institutionID),
        ma = $a(Y.institutionContact),
        va = Ua(Y.institutionSustainability),
        ta = L.map(D.functorNonEmptyArray)(eb)(Y.institutionPolicies),
        Ca = G.length(Y.institutionPolicies);
    return z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
      return "institutionID_opt";
    }))()(r.SProxy.value)(new M.Just(la))))(function () {
      return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
        return "_numPolicies";
      }))()(r.SProxy.value)(new M.Just(Ca))))(function () {
        return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
          return "iSustain_opt";
        }))()(r.SProxy.value)(new M.Just(va))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
            return "institutionContact_opt";
          }))()(r.SProxy.value)(new M.Just(ma))))(function () {
            return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
              return "institutionPolicies_opt";
            }))()(r.SProxy.value)(new M.Just(ta)));
          });
        });
      });
    }))(ha);
  },
      gb = function gb(Y) {
    var ha = y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "basicMetadata";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "format";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "location";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "resourceID";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "resourceType";
    }))(y.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(Y),
        la = y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "description";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "generalType";
    }))(y.fromRecordOptionNil)()()()())()()()())())(Y.resourceType),
        ma = L.map(M.functorMaybe)(y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "id";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "idType";
    }))(y.fromRecordOptionNil)()()()())()()()())()))(Y.resourceID),
        va = L.map(M.functorMaybe)(Va)(Y.resourceMetadataSource),
        ta = fb(Y.location),
        Ca = y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "creator";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "publicationYear";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "title";
    }))(y.fromRecordOptionNil)()()()())()()()())()()()())())(Y.basicMetadata),
        Ja = A.length(Y.format);
    return z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(r.SProxy.value)(new M.Just(Ca))))(function () {
      return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
        return "resourceID_opt";
      }))()(r.SProxy.value)(ma)))(function () {
        return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
          return "resourceType_opt";
        }))()(r.SProxy.value)(new M.Just(la))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
            return "_numFormats";
          }))()(r.SProxy.value)(new M.Just(Ja))))(function () {
            return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(r.SProxy.value)(va)))(function () {
              return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(r.SProxy.value)(new M.Just(ta)));
            });
          });
        });
      });
    }))(ha);
  },
      ab = function ab(Y) {
    var ha = L.map(D.functorNonEmptyArray)(gb)(Y.supplementaryProducts),
        la = L.map(D.functorNonEmptyArray)(y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "id";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "idType";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "relType";
    }))(y.fromRecordOptionNil)()()()())()()()())()()()())()))(Y.relatedIdentifiers),
        ma = y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "date";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "identifier";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "lastModified";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "supplementaryProducts";
    }))(y.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(Y),
        va = y.fromRecord(y.fromRecordAny(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "id";
    }))(y.fromRecordOptionCons(new r.IsSymbol(function () {
      return "idType";
    }))(y.fromRecordOptionNil)()()()())()()()())())(Y.identifier),
        ta = G.length(Y.supplementaryProducts),
        Ca = G.length(Y.relatedIdentifiers);
    return z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
      return "identifier_opt";
    }))()(r.SProxy.value)(new M.Just(va))))(function () {
      return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
        return "_numRelIds";
      }))()(r.SProxy.value)(new M.Just(Ca))))(function () {
        return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
          return "relId_opts";
        }))()(r.SProxy.value)(new M.Just(la))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
            return "_numSupProds";
          }))()(r.SProxy.value)(new M.Just(ta))))(function () {
            return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
              return "supProd_opts";
            }))()(r.SProxy.value)(new M.Just(ha)));
          });
        });
      });
    }))(ma);
  },
      hb = function () {
    var Y = H.lmap(E.bifunctorEither)(function (la) {
      return wa.error("Error reading XML - please make sure it is well-formed.");
    }),
        ha = k.bind(b.widgetBind)(e.input(l.widgetLiftWidget)([c._type("file"), L.map(h.functorProps)(P.evTargetElem)(c.onChange)]))(function (la) {
      return k.bind(b.widgetBind)(ua.liftEffect(b.widgetMonadEff(B.monoidArray))(u.runMaybeT(k.bind(u.bindMaybeT(ka.monadEffect))(la)(function (ma) {
        return k.bind(u.bindMaybeT(ka.monadEffect))(u.MaybeT(m.pure(ka.applicativeEffect)(S.fromElement(ma))))(function (va) {
          return k.bind(u.bindMaybeT(ka.monadEffect))(u.MaybeT(S.files(va)))(function (ta) {
            return k.bind(u.bindMaybeT(ka.monadEffect))(u.MaybeT(m.pure(ka.applicativeEffect)(Da.item(0)(ta))))(function (Ca) {
              return m.pure(u.applicativeMaybeT(ka.monadEffect))(pa.toBlob(Ca));
            });
          });
        });
      }))))(function (ma) {
        if (ma instanceof M.Nothing) return ha;
        if (ma instanceof M.Just) return k.bind(b.widgetBind)(qa.liftAff(b.widgetMonadAff(B.monoidArray))(Ga.readAsText(ma.value0)))(function (va) {
          return k.bind(b.widgetBind)(ua.liftEffect(b.widgetMonadEff(B.monoidArray))(w.runExceptT(k.bind(w.bindExceptT(ka.monadEffect))(w.ExceptT(L.map(ka.functorEffect)(Y)(wa["try"](R.getDefaultParseEnv(va)))))(function (ta) {
            return w.ExceptT(wa["try"](J.readRecord(ta)));
          }))))(function (ta) {
            if (ta instanceof E.Right) return m.pure(b.widgetApplicative)(ta.value0);

            if (ta instanceof E.Left) {
              var Ca = ta.value0;
              ta = e.div(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([]);
              var Ja = ha,
                  La = e.div_(b.widgetShiftMap)([Q.errorDisplayBox]),
                  Ra = e.div_(b.widgetShiftMap)([]),
                  Ta = e.span(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([Q.errorDisplay]),
                  Wa = e.text(l.widgetLiftWidget);
              Ca = "Couldn't decode MetajeloXML: " + I.show(wa.showError)(Ca);
              return ta([Ja, La(Ra(Ta([Wa(Ca)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 142, column 11 - line 144, column 37): " + [ta.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 135, column 7 - line 144, column 37): " + [ma.constructor.name]);
      });
    });
    return f.loopW(y.empty)(function (la) {
      return e.div_(b.widgetShiftMap)([])(k.bind(b.widgetBind)(ha)(function (ma) {
        return m.pure(b.widgetApplicative)(ab(ma));
      }));
    });
  }(),
      ib = function ib(Y) {
    var ha = e.div_(b.widgetShiftMap)([Q.errorDisplayBox])(e.div_(b.widgetShiftMap)([])(e.span(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([Q.errorDisplay])([e.text(l.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        la = function la(ma) {
      return function (va) {
        var ta = function ta(Ca) {
          return f.step(Ca)(k.bind(b.widgetBind)(e.button_(b.widgetShiftMap)([ca.downloadBtn, c.onClick, c.disabled(V["null"](Ca))])(e.text(l.widgetLiftWidget)("Download")))(function () {
            return k.bind(b.widgetBind)(ua.liftEffect(b.widgetMonadEff(B.monoidArray))(ma))(function () {
              return m.pure(b.widgetApplicative)(ta(Ca));
            });
          }));
        };

        return f.dyn(ta(va));
      };
    };

    return e.div_(b.widgetShiftMap)([])(function () {
      var ma = sa.encodeURIComponent(Y);
      return k.bind(b.widgetBind)(ua.liftEffect(b.widgetMonadEff(B.monoidArray))(db(M.fromMaybe("")(ma))))(function (va) {
        return M.maybe(ha)(la(va))(ma);
      });
    }());
  },
      jb = function jb(Y) {
    var ha = function ha(la) {
      return f.step(la)(k.bind(b.widgetBind)(e.button_(b.widgetShiftMap)([ca.clipBtn, c.onClick, c.disabled(V["null"](la))])(e.text(l.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return k.bind(b.widgetBind)(ua.liftEffect(b.widgetMonadEff(B.monoidArray))(fa.copyToClipboard(la)))(function () {
          return m.pure(b.widgetApplicative)(ha(la));
        });
      }));
    };

    return f.dyn(ha(Y));
  },
      bb = function bb(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.sustainability])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.span_(q.shiftMapCofree(B.monoidArray))([ca.missionStatement])(P.urlInput(y.getWithDefault(new r.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new E.Left(""))(r.SProxy.value)(Y))))(function (ha) {
      var la = E.hush(ha);
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.span_(q.shiftMapCofree(B.monoidArray))([ca.fundingStatement])(P.urlInput(y.getWithDefault(new r.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new E.Left(""))(r.SProxy.value)(Y))))(function (ma) {
        var va = E.hush(ma);
        return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(r.SProxy.value)(new M.Just(ha))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
            return "missionStatementURL";
          }))()(r.SProxy.value)(la)))(function () {
            return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(r.SProxy.value)(new M.Just(ma))))(function () {
              return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(r.SProxy.value)(va));
            });
          });
        }))(Y));
      });
    }));
  },
      X = function X(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.resourceType])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.resourceTypeGen])(P.menuSignal(C.boundedEnumResourceTypeGeneral)(P.isOptionResourceTypeGeneral)(y.get(new r.IsSymbol(function () {
      return "generalType";
    }))()(r.SProxy.value)(Y)))))(function (ha) {
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.resourceTypeDescr])(P.textInput(k.join(M.bindMaybe)(L.map(M.functorMaybe)(O.fromString)(y.get(new r.IsSymbol(function () {
        return "description";
      }))()(r.SProxy.value)(Y)))))))(function (la) {
        return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
          return "description";
        }))()(r.SProxy.value)(L.map(M.functorMaybe)(O.toString)(la))))(function () {
          return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
            return "generalType";
          }))()(r.SProxy.value)(ha));
        }))(Y));
      });
    }));
  },
      da = function da(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.resourceMDSource])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.url])(P.urlInput(y.getWithDefault(new r.IsSymbol(function () {
      return "url_Ei";
    }))()(new E.Left(""))(r.SProxy.value)(Y)))))(function (ha) {
      var la = E.hush(ha);
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.relType])(P.menuSignal(C.boundedEnumRelationType)(P.isOptionRelationType)(y.get(new r.IsSymbol(function () {
        return "relationType";
      }))()(r.SProxy.value)(Y)))))(function (ma) {
        return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
          return "url_Ei";
        }))()(r.SProxy.value)(new M.Just(ha))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
            return "url";
          }))()(r.SProxy.value)(la)))(function () {
            return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
              return "relationType";
            }))()(r.SProxy.value)(ma));
          });
        }))(Y));
      });
    }));
  },
      xa = function xa(Y) {
    var ha = M.fromMaybe(y.empty)(Y);
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.relatedId])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.id])(P.textInput(y.get(new r.IsSymbol(function () {
      return "id";
    }))()(r.SProxy.value)(ha)))))(function (la) {
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.idType])(P.menuSignal(C.boundedEnumIdentifierType)(P.isOptionIdentifierType)(y.get(new r.IsSymbol(function () {
        return "idType";
      }))()(r.SProxy.value)(ha)))))(function (ma) {
        return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.relType])(P.menuSignal(C.boundedEnumRelationType)(P.isOptionRelationType)(y.get(new r.IsSymbol(function () {
          return "relType";
        }))()(r.SProxy.value)(ha)))))(function (va) {
          return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(M.Just.create(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
            return "id";
          }))()(r.SProxy.value)(la)))(function () {
            return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
              return "idType";
            }))()(r.SProxy.value)(ma)))(function () {
              return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                return "relType";
              }))()(r.SProxy.value)(va));
            });
          }))(ha)));
        });
      });
    }));
  },
      Aa = function Aa(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.relatedIds])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.relatedIdsHeader])(e.div_(q.shiftMapCofree(B.monoidArray))([ca.relatedIdList])(P.nonEmptyArrayView(xa)(Y))));
  },
      ya = function ya(Y) {
    var ha = M.fromMaybe(y.empty)(Y);
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.institutionPolicy])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.policy])(P.menuSignal(P.boundedEnumPolPolType)(P.isOptionPolPolType)(M.Just.create(y.getWithDefault(new r.IsSymbol(function () {
      return "polPolType";
    }))()(P.FreeTextPolicy.value)(r.SProxy.value)(ha))))))(function (la) {
      var ma = M.fromMaybe(P.FreeTextPolicy.value)(la);
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.policy])(P.textInput(y.get(new r.IsSymbol(function () {
        return "policy_str";
      }))()(r.SProxy.value)(ha)))))(function (va) {
        var ta = P.checkPolicy(ma)(M.maybe("")(O.toString)(va));
        return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(B.monoidArray)))(f.display(function () {
          if (ta instanceof E.Right) return B.mempty(b.widgetMonoid(B.monoidArray));
          if (ta instanceof E.Left) return P.errorDisplay(I.showString)(new M.Just(ta.value0));
          throw Error("Failed pattern match at Metajelo.UI (line 665, column 13 - line 667, column 40): " + [ta.constructor.name]);
        }()))(function () {
          var Ca = E.hush(ta);
          return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.policyType])(P.menuSignal(F.boundedEnumMaybe(C.smallBoundedPolicyType)(C.boundedEnumPolicyType))(P.isOptionMaybePolicyType)(y.get(new r.IsSymbol(function () {
            return "policyType";
          }))()(r.SProxy.value)(ha)))))(function (Ja) {
            return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.applies])(P.menuSignal(F.boundedEnumMaybe(F.smallBoundedBoolean)(F.boundedEnumBoolean))(P.isOptionMaybeBoolean)(y.get(new r.IsSymbol(function () {
              return "appliesToProduct";
            }))()(r.SProxy.value)(ha)))))(function (La) {
              return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(M.Just.create(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                return "polPolType";
              }))()(r.SProxy.value)(new M.Just(ma))))(function () {
                return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                  return "policy_str";
                }))()(r.SProxy.value)(va)))(function () {
                  return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                    return "policy_ei";
                  }))()(r.SProxy.value)(new M.Just(ta))))(function () {
                    return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                      return "policy";
                    }))()(r.SProxy.value)(Ca)))(function () {
                      return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                        return "policyType";
                      }))()(r.SProxy.value)(Ja)))(function () {
                        return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                          return "appliesToProduct";
                        }))()(r.SProxy.value)(La));
                      });
                    });
                  });
                });
              }))(ha)));
            });
          });
        });
      });
    }));
  },
      Na = function Na(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.institutionPolicies])(P.nonEmptyArrayView(ya)(Y));
  },
      za = function za(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.identifier])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.id])(P.textInput(y.get(new r.IsSymbol(function () {
      return "id";
    }))()(r.SProxy.value)(Y)))))(function (ha) {
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.idType])(P.menuSignal(C.boundedEnumIdentifierType)(P.isOptionIdentifierType)(y.get(new r.IsSymbol(function () {
        return "idType";
      }))()(r.SProxy.value)(Y)))))(function (la) {
        return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
          return "id";
        }))()(r.SProxy.value)(ha)))(function () {
          return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
            return "idType";
          }))()(r.SProxy.value)(la));
        }))(Y));
      });
    }));
  },
      mb = function mb(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.institutionContact])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.contactEmail])(P.emailInput(y.getWithDefault(new r.IsSymbol(function () {
      return "email_Ei";
    }))()(new E.Left(""))(r.SProxy.value)(Y)))))(function (ha) {
      var la = E.hush(ha);
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.contactType])(P.menuSignal(F.boundedEnumMaybe(C.smallBoundedInstitutionContactType)(C.boundedEnumInstitutionContactType))(P.isOptionMaybeInstitutionContactType)(y.get(new r.IsSymbol(function () {
        return "contactType";
      }))()(r.SProxy.value)(Y)))))(function (ma) {
        return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
          return "email_Ei";
        }))()(r.SProxy.value)(new M.Just(ha))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
            return "emailAddress";
          }))()(r.SProxy.value)(la)))(function () {
            return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
              return "contactType";
            }))()(r.SProxy.value)(ma));
          });
        }))(Y));
      });
    }));
  },
      Ba = function Ba(Y) {
    var ha = function ha(ma) {
      return e.div(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([ca.locPreview])([e["br'"](l.widgetLiftWidget), K.foldMap(K.foldableMaybe)(b.widgetMonoid(B.monoidArray))(function (va) {
        return K.fold(K.foldableArray)(b.widgetMonoid(B.monoidArray))(U.spacify(U.locElems(va)));
      })(ma)]);
    },
        la = M.fromMaybe(y.empty)(Y);

    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.location])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.institutionId])(za(Fa(new r.IsSymbol(function () {
      return "institutionID_opt";
    }))()(r.SProxy.value)(la)))))(function (ma) {
      var va = y.getAll(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
        return "id";
      }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
        return "idType";
      }))()()()()(y.getAllOptionNil))))(ma);
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.institutionName])(P.textInput(y.get(new r.IsSymbol(function () {
        return "institutionName";
      }))()(r.SProxy.value)(la)))))(function (ta) {
        return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.institutionType])(P.menuSignal(C.boundedEnumInstitutionType)(P.isOptionInstitutionType)(y.get(new r.IsSymbol(function () {
          return "institutionType";
        }))()(r.SProxy.value)(la)))))(function (Ca) {
          return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(B.monoidArray)))(f.display(e["br'"](l.widgetLiftWidget)))(function () {
            return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.superOrg])(P.textInput(k.join(M.bindMaybe)(y.get(new r.IsSymbol(function () {
              return "superOrganizationName";
            }))()(r.SProxy.value)(la))))))(function (Ja) {
              return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(mb(Fa(new r.IsSymbol(function () {
                return "institutionContact_opt";
              }))()(r.SProxy.value)(la)))(function (La) {
                var Ra = y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
                  return "contactType";
                }))(W.consKeys(new r.IsSymbol(function () {
                  return "emailAddress";
                }))(W.nilKeys)))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
                  return "contactType";
                }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                  return "emailAddress";
                }))()()()()(y.getAllOptionNil))))(La);
                return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(bb(Fa(new r.IsSymbol(function () {
                  return "iSustain_opt";
                }))()(r.SProxy.value)(la)))(function (Ta) {
                  var Wa = y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))(W.consKeys(new r.IsSymbol(function () {
                    return "missionStatementURL";
                  }))(W.nilKeys)))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                    return "missionStatementURL";
                  }))()()()()(y.getAllOptionNil))))(Ta);
                  return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(Na(new ia.Tuple(y.getWithDefault(new r.IsSymbol(function () {
                    return "_numPolicies";
                  }))()(1)(r.SProxy.value)(la), y.get(new r.IsSymbol(function () {
                    return "institutionPolicies_opt";
                  }))()(r.SProxy.value)(la))))(function (kb) {
                    var pb = ia.fst(kb),
                        lb = ia.snd(kb),
                        qb = k.join(M.bindMaybe)(L.map(M.functorMaybe)(aa.sequence(D.traversableNonEmptyArray)(M.applicativeMaybe))(L.map(M.functorMaybe)(L.map(D.functorNonEmptyArray)(y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
                      return "appliesToProduct";
                    }))(W.consKeys(new r.IsSymbol(function () {
                      return "policy";
                    }))(W.consKeys(new r.IsSymbol(function () {
                      return "policyType";
                    }))(W.nilKeys))))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
                      return "appliesToProduct";
                    }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                      return "policy";
                    }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                      return "policyType";
                    }))()()()()(y.getAllOptionNil)))))))(lb)));
                    return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.versioning])(P.checkBoxS(y.getWithDefault(new r.IsSymbol(function () {
                      return "versioning";
                    }))()(!1)(r.SProxy.value)(la)))))(function (nb) {
                      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                        return "institutionID_opt";
                      }))()(r.SProxy.value)(new M.Just(ma))))(function () {
                        return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                          return "institutionID";
                        }))()(r.SProxy.value)(va)))(function () {
                          return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                            return "institutionName";
                          }))()(r.SProxy.value)(ta)))(function () {
                            return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                              return "institutionType";
                            }))()(r.SProxy.value)(Ca)))(function () {
                              return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                return "superOrganizationName";
                              }))()(r.SProxy.value)(new M.Just(Ja))))(function () {
                                return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                  return "institutionContact_opt";
                                }))()(r.SProxy.value)(new M.Just(La))))(function () {
                                  return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                    return "institutionContact";
                                  }))()(r.SProxy.value)(Ra)))(function () {
                                    return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                      return "iSustain_opt";
                                    }))()(r.SProxy.value)(new M.Just(Ta))))(function () {
                                      return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                        return "institutionSustainability";
                                      }))()(r.SProxy.value)(Wa)))(function () {
                                        return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                          return "_numPolicies";
                                        }))()(r.SProxy.value)(new M.Just(pb))))(function () {
                                          return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                            return "institutionPolicies_opt";
                                          }))()(r.SProxy.value)(lb)))(function () {
                                            return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                              return "institutionPolicies";
                                            }))()(r.SProxy.value)(qb)))(function () {
                                              return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                                return "versioning";
                                              }))()(r.SProxy.value)(new M.Just(nb)));
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
                        });
                      }))(la)))(function (ob) {
                        var rb = y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
                          return "institutionContact";
                        }))(W.consKeys(new r.IsSymbol(function () {
                          return "institutionID";
                        }))(W.consKeys(new r.IsSymbol(function () {
                          return "institutionName";
                        }))(W.consKeys(new r.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(W.consKeys(new r.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(W.consKeys(new r.IsSymbol(function () {
                          return "institutionType";
                        }))(W.consKeys(new r.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(W.consKeys(new r.IsSymbol(function () {
                          return "versioning";
                        }))(W.nilKeys)))))))))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(y.getAllOptionNil))))))))))(ob);
                        return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(B.monoidArray)))(f.display(ha(rb)))(function () {
                          return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(new M.Just(ob));
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
      Qa = function Qa(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.basicMetadata])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.title])(P.textInput(y.get(new r.IsSymbol(function () {
      return "title";
    }))()(r.SProxy.value)(Y)))))(function (ha) {
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.creator])(P.textInput(y.get(new r.IsSymbol(function () {
        return "creator";
      }))()(r.SProxy.value)(Y)))))(function (la) {
        return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.pubyear])(P.textInput(y.get(new r.IsSymbol(function () {
          return "publicationYear";
        }))()(r.SProxy.value)(Y)))))(function (ma) {
          return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
            return "title";
          }))()(r.SProxy.value)(ha)))(function () {
            return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
              return "creator";
            }))()(r.SProxy.value)(la)))(function () {
              return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                return "publicationYear";
              }))()(r.SProxy.value)(ma));
            });
          }))(Y));
        });
      });
    }));
  },
      Ia = function Ia(Y) {
    var ha = function ha(ma) {
      return e.div(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([ca.prodPreview])([e["br'"](l.widgetLiftWidget), K.fold(K.foldableMaybe)(b.widgetMonoid(B.monoidArray))(L.map(M.functorMaybe)(U.mkSupplementaryProductWidget)(ma))]);
    },
        la = M.fromMaybe(y.empty)(Y);

    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.product])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(Qa(Fa(new r.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(r.SProxy.value)(la)))(function (ma) {
      var va = y.getAll(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
        return "creator";
      }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
        return "publicationYear";
      }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
        return "title";
      }))()()()()(y.getAllOptionNil)))))(ma);
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([ca.resourceId])(za(Fa(new r.IsSymbol(function () {
        return "resourceID_opt";
      }))()(r.SProxy.value)(la))))(function (ta) {
        var Ca = y.getAll(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
          return "id";
        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
          return "idType";
        }))()()()()(y.getAllOptionNil))))(ta);
        return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(X(Fa(new r.IsSymbol(function () {
          return "resourceType_opt";
        }))()(r.SProxy.value)(la)))(function (Ja) {
          var La = y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
            return "description";
          }))(W.consKeys(new r.IsSymbol(function () {
            return "generalType";
          }))(W.nilKeys)))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
            return "description";
          }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
            return "generalType";
          }))()()()()(y.getAllOptionNil))))(Ja);
          return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(Ya(new ia.Tuple(y.getWithDefault(new r.IsSymbol(function () {
            return "_numFormats";
          }))()(0)(r.SProxy.value)(la), y.getWithDefault(new r.IsSymbol(function () {
            return "format";
          }))()([])(r.SProxy.value)(la))))(function (Ra) {
            var Ta = ia.fst(Ra),
                Wa = ia.snd(Ra);
            return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(da(Fa(new r.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(r.SProxy.value)(la)))(function (kb) {
              var pb = y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
                return "relationType";
              }))(W.consKeys(new r.IsSymbol(function () {
                return "url";
              }))(W.nilKeys)))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
                return "relationType";
              }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                return "url";
              }))()()()()(y.getAllOptionNil))))(kb);
              return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(Ba(y.get(new r.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(r.SProxy.value)(la)))(function (lb) {
                var qb = k.join(M.bindMaybe)(L.map(M.functorMaybe)(y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
                  return "institutionContact";
                }))(W.consKeys(new r.IsSymbol(function () {
                  return "institutionID";
                }))(W.consKeys(new r.IsSymbol(function () {
                  return "institutionName";
                }))(W.consKeys(new r.IsSymbol(function () {
                  return "institutionPolicies";
                }))(W.consKeys(new r.IsSymbol(function () {
                  return "institutionSustainability";
                }))(W.consKeys(new r.IsSymbol(function () {
                  return "institutionType";
                }))(W.consKeys(new r.IsSymbol(function () {
                  return "superOrganizationName";
                }))(W.consKeys(new r.IsSymbol(function () {
                  return "versioning";
                }))(W.nilKeys)))))))))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
                  return "institutionContact";
                }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                  return "institutionID";
                }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                  return "institutionName";
                }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                  return "institutionPolicies";
                }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                  return "institutionSustainability";
                }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                  return "institutionType";
                }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                  return "superOrganizationName";
                }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                  return "versioning";
                }))()()()()(y.getAllOptionNil)))))))))))(lb));
                return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                  return "basicMetadata_opt";
                }))()(r.SProxy.value)(new M.Just(ma))))(function () {
                  return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                    return "basicMetadata";
                  }))()(r.SProxy.value)(va)))(function () {
                    return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                      return "resourceID_opt";
                    }))()(r.SProxy.value)(new M.Just(ta))))(function () {
                      return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                        return "resourceID";
                      }))()(r.SProxy.value)(new M.Just(Ca))))(function () {
                        return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                          return "resourceType_opt";
                        }))()(r.SProxy.value)(new M.Just(Ja))))(function () {
                          return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                            return "resourceType";
                          }))()(r.SProxy.value)(La)))(function () {
                            return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                              return "_numFormats";
                            }))()(r.SProxy.value)(new M.Just(Ta))))(function () {
                              return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                return "format";
                              }))()(r.SProxy.value)(new M.Just(Wa))))(function () {
                                return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                  return "resMdsOpts_opt";
                                }))()(r.SProxy.value)(new M.Just(kb))))(function () {
                                  return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                    return "resourceMetadataSource";
                                  }))()(r.SProxy.value)(new M.Just(pb))))(function () {
                                    return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                      return "locationOpts_opt";
                                    }))()(r.SProxy.value)(lb)))(function () {
                                      return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                                        return "location";
                                      }))()(r.SProxy.value)(qb));
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
                }))(la)))(function (nb) {
                  var ob = y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
                    return "basicMetadata";
                  }))(W.consKeys(new r.IsSymbol(function () {
                    return "format";
                  }))(W.consKeys(new r.IsSymbol(function () {
                    return "location";
                  }))(W.consKeys(new r.IsSymbol(function () {
                    return "resourceID";
                  }))(W.consKeys(new r.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))(W.consKeys(new r.IsSymbol(function () {
                    return "resourceType";
                  }))(W.nilKeys)))))))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
                    return "basicMetadata";
                  }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                    return "format";
                  }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                    return "location";
                  }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                    return "resourceID";
                  }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                    return "resourceType";
                  }))()()()()(y.getAllOptionNil))))))))(nb);
                  return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(B.monoidArray)))(f.display(ha(ob)))(function () {
                    return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(new M.Just(nb));
                  });
                });
              });
            });
          });
        });
      });
    }));
  },
      Oa = function Oa(Y) {
    return e.div_(q.shiftMapCofree(B.monoidArray))([ca.products])(e.span_(q.shiftMapCofree(B.monoidArray))([ca.productsHeader])(e.div_(q.shiftMapCofree(B.monoidArray))([ca.productList])(P.nonEmptyArrayView(Ia)(Y))));
  },
      Ka = function Ka(Y) {
    return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(e.div_(q.shiftMapCofree(B.monoidArray))([ca.recordId])(za(Fa(new r.IsSymbol(function () {
      return "identifier_opt";
    }))()(r.SProxy.value)(Y))))(function (ha) {
      var la = y.getAll(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
        return "id";
      }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
        return "idType";
      }))()()()()(y.getAllOptionNil))))(ha);
      return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(L.map(L.functorFn)(e.div_(q.shiftMapCofree(B.monoidArray))([ca.date]))(P.textInput)(y.get(new r.IsSymbol(function () {
        return "date";
      }))()(r.SProxy.value)(Y)))(function (ma) {
        return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(Aa(new ia.Tuple(y.getWithDefault(new r.IsSymbol(function () {
          return "_numRelIds";
        }))()(0)(r.SProxy.value)(Y), y.get(new r.IsSymbol(function () {
          return "relId_opts";
        }))()(r.SProxy.value)(Y))))(function (va) {
          var ta = ia.fst(va),
              Ca = ia.snd(va),
              Ja = k.join(M.bindMaybe)(L.map(M.functorMaybe)(aa.sequence(D.traversableNonEmptyArray)(M.applicativeMaybe))(L.map(M.functorMaybe)(L.map(D.functorNonEmptyArray)(y.getAll(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
            return "id";
          }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
            return "idType";
          }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
            return "relType";
          }))()()()()(y.getAllOptionNil)))))))(Ca)));
          return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(Oa(new ia.Tuple(y.getWithDefault(new r.IsSymbol(function () {
            return "_numSupProds";
          }))()(0)(r.SProxy.value)(Y), y.get(new r.IsSymbol(function () {
            return "supProd_opts";
          }))()(r.SProxy.value)(Y))))(function (La) {
            var Ra = ia.fst(La),
                Ta = ia.snd(La),
                Wa = k.join(M.bindMaybe)(L.map(M.functorMaybe)(aa.sequence(D.traversableNonEmptyArray)(M.applicativeMaybe))(L.map(M.functorMaybe)(L.map(D.functorNonEmptyArray)(y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
              return "basicMetadata";
            }))(W.consKeys(new r.IsSymbol(function () {
              return "format";
            }))(W.consKeys(new r.IsSymbol(function () {
              return "location";
            }))(W.consKeys(new r.IsSymbol(function () {
              return "resourceID";
            }))(W.consKeys(new r.IsSymbol(function () {
              return "resourceMetadataSource";
            }))(W.consKeys(new r.IsSymbol(function () {
              return "resourceType";
            }))(W.nilKeys)))))))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
              return "basicMetadata";
            }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
              return "format";
            }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
              return "location";
            }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
              return "resourceID";
            }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
              return "resourceMetadataSource";
            }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
              return "resourceType";
            }))()()()()(y.getAllOptionNil))))))))))(Ta)));
            return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
              return "identifier_opt";
            }))()(r.SProxy.value)(new M.Just(ha))))(function () {
              return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                return "identifier";
              }))()(r.SProxy.value)(la)))(function () {
                return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                  return "date";
                }))()(r.SProxy.value)(ma)))(function () {
                  return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                    return "_numRelIds";
                  }))()(r.SProxy.value)(new M.Just(ta))))(function () {
                    return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                      return "relId_opts";
                    }))()(r.SProxy.value)(Ca)))(function () {
                      return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                        return "relatedIdentifiers";
                      }))()(r.SProxy.value)(Ja)))(function () {
                        return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                          return "_numSupProds";
                        }))()(r.SProxy.value)(new M.Just(Ra))))(function () {
                          return k.discard(k.discardUnit)(p.bindStateT(v.monadIdentity))(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                            return "supProd_opts";
                          }))()(r.SProxy.value)(Ta)))(function () {
                            return k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
                              return "supplementaryProducts";
                            }))()(r.SProxy.value)(Wa));
                          });
                        });
                      });
                    });
                  });
                });
              });
            }))(Y));
          });
        });
      });
    });
  };

  x = function () {
    var Y = function Y(ha) {
      var la = function la(ma) {
        return M.maybe(m.pure(ka.applicativeEffect)(""))(ja.recordToString)(ma);
      };

      return k.bind(b.widgetBind)(ua.liftEffect(b.widgetMonadEff(B.monoidArray))(aa.sequence(aa.traversableMaybe)(ka.applicativeEffect)(L.map(M.functorMaybe)(Za)(ha))))(function (ma) {
        return e.div(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([ca.recPreview])([k.bind(b.widgetBind)(ua.liftEffect(b.widgetMonadEff(B.monoidArray))(la(ma)))(function (va) {
          return e.div(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([ca.previewButtons])([ib(va), jb(va)]);
        }), e["br'"](l.widgetLiftWidget), K.fold(K.foldableMaybe)(b.widgetMonoid(B.monoidArray))(L.map(M.functorMaybe)(U.mkRecordWidget)(ma))]);
      });
    };

    return f.loopS(B.monoidArray)(y.empty)(function (ha) {
      return e.div_(q.shiftMapCofree(B.monoidArray))([ca.record])(k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(hb)(function (la) {
        var ma = y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
          return "date";
        }))(W.consKeys(new r.IsSymbol(function () {
          return "identifier";
        }))(W.consKeys(new r.IsSymbol(function () {
          return "lastModified";
        }))(W.consKeys(new r.IsSymbol(function () {
          return "relatedIdentifiers";
        }))(W.consKeys(new r.IsSymbol(function () {
          return "supplementaryProducts";
        }))(W.nilKeys))))))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
          return "date";
        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
          return "identifier";
        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
          return "lastModified";
        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
          return "relatedIdentifiers";
        }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
          return "supplementaryProducts";
        }))()()()()(y.getAllOptionNil)))))))(la);
        la = M.isNothing(ma) ? ha : la;
        return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(Ka(la))(function (va) {
          var ta = P.formatXsdDate(P.initDate);
          ta = E.hush(ta);
          var Ca = y.get(new r.IsSymbol(function () {
            return "lastModified";
          }))()(r.SProxy.value)(va);
          return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(N.append(T.semigroupFirst)(Ca)(ta)))(function (Ja) {
            return k.bind(q.bindCofree(b.widgetAlternative(B.monoidArray)))(m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(z.execState(k.bind(p.bindStateT(v.monadIdentity))(t.get(p.monadStateStateT(v.monadIdentity)))(y.maySetOptState(new r.IsSymbol(function () {
              return "lastModified";
            }))()(r.SProxy.value)(Ja)))(va)))(function (La) {
              var Ra = y.getSubset()()(W.consKeys(new r.IsSymbol(function () {
                return "date";
              }))(W.consKeys(new r.IsSymbol(function () {
                return "identifier";
              }))(W.consKeys(new r.IsSymbol(function () {
                return "lastModified";
              }))(W.consKeys(new r.IsSymbol(function () {
                return "relatedIdentifiers";
              }))(W.consKeys(new r.IsSymbol(function () {
                return "supplementaryProducts";
              }))(W.nilKeys))))))(y.getAllAny()(y.getAllOptionCons(new r.IsSymbol(function () {
                return "date";
              }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                return "identifier";
              }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                return "lastModified";
              }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                return "relatedIdentifiers";
              }))()()()()(y.getAllOptionCons(new r.IsSymbol(function () {
                return "supplementaryProducts";
              }))()()()()(y.getAllOptionNil)))))))(La);
              return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(B.monoidArray)))(f.display(Y(Ra)))(function () {
                return m.pure(q.applicativeCofree(b.widgetAlternative(B.monoidArray)))(La);
              });
            });
          });
        });
      }));
    });
  }();

  var cb = e["div'"](b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([e.div(b.widgetMultiAlternative(B.monoidArray))(b.widgetShiftMap)([ca.page])(m.pure(m.applicativeArray)(f.dyn(x)))]);

  d.runFormSPA = function (Y) {
    return n.runWidgetInDom(Y)(cb);
  };

  d.page = cb;
  d.utf8DataAttr = "data:text/plain;charset=utf-8";
  d.downloadButton = ib;
  d.mkDLAnchorAndClicker = db;
  d.uploadButtonSig = hb;
  d.copyButton = jb;
  d.fillMetajeloRecordExtra = ab;
  d.fillSProdExtra = gb;
  d.fillLocationRowExtra = fb;
  d.fillIContactExtra = $a;
  d.fillSustainExtra = Ua;
  d.fillPolicyExtra = eb;
  d.fillResourceMDSExtra = Va;
  d.accumulateMetajeloRecord = x;
  d.finalizeRecord = Za;
  d.accumulateMetajeloRecUI = Ka;
  d.accumulateSuppProd = Ia;
  d.supProdSigArray = Oa;
  d.accumulateLocation = Ba;
  d.accumulateSustain = bb;
  d.accumulateIdent = za;
  d.accumulateRelatedIdent = xa;
  d.relIdSigArray = Aa;
  d.accumulateBasicMetaData = Qa;
  d.accumulateResType = X;
  d.formatSignal = Xa;
  d.formatSigArray = Ya;
  d.accumulateResMdSource = da;
  d.accumulateContact = mb;
  d.accumulatePolicy = ya;
  d.policySigArray = Na;
  d.tooltip = a;
  d.tooltipS = Ma;
  d.getOpt = Fa;
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
//# sourceMappingURL=prod.483fbb2e.js.map