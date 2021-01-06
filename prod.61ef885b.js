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
},{"./cjs/react-dom-server.browser.production.min.js":"KA3k"}],"fDBh":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],"dAjQ":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;

},{}],"hYHi":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/rng":"fDBh","./lib/bytesToUuid":"dAjQ"}],"pBGv":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
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
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
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

  while (len) {
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
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
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

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"xbCx":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
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
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, d, e) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[d] = e.value;
  return a;
};

$jscomp.getGlobal = function (a) {
  a = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, a, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global];

  for (var d = 0; d < a.length; ++d) {
    var e = a[d];
    if (e && e.Math == Math) return e;
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
  var e = $jscomp.propertyToPolyfillSymbol[d];
  if (null == e) return a[d];
  e = a[e];
  return void 0 !== e ? e : a[d];
};

$jscomp.polyfill = function (a, d, e, k) {
  d && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, d, e, k) : $jscomp.polyfillUnisolated(a, d, e, k));
};

$jscomp.polyfillUnisolated = function (a, d, e, k) {
  e = $jscomp.global;
  a = a.split(".");

  for (k = 0; k < a.length - 1; k++) {
    var g = a[k];
    if (!(g in e)) return;
    e = e[g];
  }

  a = a[a.length - 1];
  k = e[a];
  d = d(k);
  d != k && null != d && $jscomp.defineProperty(e, a, {
    configurable: !0,
    writable: !0,
    value: d
  });
};

$jscomp.polyfillIsolated = function (a, d, e, k) {
  var g = a.split(".");
  a = 1 === g.length;
  k = g[0];
  k = !a && k in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var b = 0; b < g.length - 1; b++) {
    var f = g[b];
    if (!(f in k)) return;
    k = k[f];
  }

  g = g[g.length - 1];
  e = $jscomp.IS_SYMBOL_NATIVE && "es6" === e ? k[g] : null;
  d = d(e);
  null != d && (a ? $jscomp.defineProperty($jscomp.polyfills, g, {
    configurable: !0,
    writable: !0,
    value: d
  }) : d !== e && ($jscomp.propertyToPolyfillSymbol[g] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(g) : $jscomp.POLYFILL_PREFIX + g, g = $jscomp.propertyToPolyfillSymbol[g], $jscomp.defineProperty(k, g, {
    configurable: !0,
    writable: !0,
    value: d
  })));
};

$jscomp.initSymbol = function () {};

$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;

  var d = function d(g, b) {
    this.$jscomp$symbol$id_ = g;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: b
    });
  };

  d.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };

  var e = 0,
      k = function k(g) {
    if (this instanceof k) throw new TypeError("Symbol is not a constructor");
    return new d("jscomp_symbol_" + (g || "") + "_" + e++, g);
  };

  return k;
}, "es6", "es3");

$jscomp.initSymbolIterator = function () {};

$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var d = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < d.length; e++) {
    var k = $jscomp.global[d[e]];
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

$jscomp.iteratorFromArray = function (a, d) {
  a instanceof String && (a += "");
  var e = 0,
      k = !1,
      g = {
    next: function next() {
      if (!k && e < a.length) {
        var b = e++;
        return {
          value: d(b, a[b]),
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
    return $jscomp.iteratorFromArray(this, function (d) {
      return d;
    });
  };
}, "es6", "es3");

$jscomp.checkStringArgs = function (a, d, e) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + e + " must not be null or undefined");
  if (d instanceof RegExp) throw new TypeError("First argument to String.prototype." + e + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (d) {
    var e = $jscomp.checkStringArgs(this, null, "codePointAt"),
        k = e.length;
    d = Number(d) || 0;

    if (0 <= d && d < k) {
      d |= 0;
      var g = e.charCodeAt(d);
      if (55296 > g || 56319 < g || d + 1 === k) return g;
      d = e.charCodeAt(d + 1);
      return 56320 > d || 57343 < d ? g : 1024 * (g - 55296) + d + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (d) {
    for (var e = "", k = 0; k < arguments.length; k++) {
      var g = Number(arguments[k]);
      if (0 > g || 1114111 < g || g !== Math.floor(g)) throw new RangeError("invalid_code_point " + g);
      65535 >= g ? e += String.fromCharCode(g) : (g -= 65536, e += String.fromCharCode(g >>> 10 & 1023 | 55296), e += String.fromCharCode(g & 1023 | 56320));
    }

    return e;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (d, e, k) {
    e = null != e ? e : function (c) {
      return c;
    };
    var g = [],
        b = "undefined" != typeof Symbol && Symbol.iterator && d[Symbol.iterator];

    if ("function" == typeof b) {
      d = b.call(d);

      for (var f = 0; !(b = d.next()).done;) {
        g.push(e.call(k, b.value, f++));
      }
    } else for (b = d.length, f = 0; f < b; f++) {
      g.push(e.call(k, d[f], f));
    }

    return g;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (d, e) {
    var k = $jscomp.checkStringArgs(this, d, "endsWith");
    d += "";
    void 0 === e && (e = k.length);
    e = Math.max(0, Math.min(e | 0, k.length));

    for (var g = d.length; 0 < g && 0 < e;) {
      if (k[--e] != d[--g]) return !1;
    }

    return 0 >= g;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (d, e) {
    var k = $jscomp.checkStringArgs(this, d, "startsWith");
    d += "";
    var g = k.length,
        b = d.length;
    e = Math.max(0, Math.min(e | 0, k.length));

    for (var f = 0; f < b && e < g;) {
      if (k[e++] != d[f++]) return !1;
    }

    return f >= b;
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, d, e) {
  a instanceof String && (a = String(a));

  for (var k = a.length, g = 0; g < k; g++) {
    var b = a[g];
    if (d.call(e, b, g, a)) return {
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
  return a ? a : function (d, e) {
    return $jscomp.findInternal(this, d, e).v;
  };
}, "es6", "es3");
var PS = {};

(function (a) {
  a._ajax = function () {
    var d = {};
    "undefined" === typeof module || !module.require || "undefined" !== typeof process && process.versions.electron ? (d.newXHR = function () {
      return new XMLHttpRequest();
    }, d.fixupUrl = function (e) {
      return e || "/";
    }, d.getResponse = function (e) {
      return e.response;
    }) : (d.newXHR = function () {
      return new (module.require("xhr2"))();
    }, d.fixupUrl = function (e, k) {
      return null === k.nodejsBaseUrl ? (k = module.require("url"), e = k.parse(e), e.protocol = e.protocol || "http:", e.hostname = e.hostname || "localhost", k.format(e)) : e || "/";
    }, d.getResponse = function (e) {
      return e.response;
    });
    return function (e, k) {
      return function (g, b) {
        var f = d.newXHR(),
            c = d.fixupUrl(k.url, f);
        f.open(k.method || "GET", c, !0, k.username, k.password);
        if (k.headers) try {
          c = 0;

          for (var m; null != (m = k.headers[c]); c++) {
            f.setRequestHeader(m.field, m.value);
          }
        } catch (l) {
          g(l);
        }

        m = function m(l) {
          return function () {
            g(Error(l + ": " + k.method + " " + k.url));
          };
        };

        f.onerror = m("AJAX request failed");
        f.ontimeout = m("AJAX request timed out");

        f.onload = function () {
          b({
            status: f.status,
            statusText: f.statusText,
            headers: f.getAllResponseHeaders().split("\r\n").filter(function (l) {
              return 0 < l.length;
            }).map(function (l) {
              var q = l.indexOf(":");
              return e(l.substring(0, q))(l.substring(q + 2));
            }),
            body: d.getResponse(f)
          });
        };

        f.responseType = k.responseType;
        f.withCredentials = k.withCredentials;
        f.send(k.content);
        return function (l, q, t) {
          try {
            f.abort();
          } catch (n) {
            return q(n);
          }

          return t();
        };
      };
    };
  }();
})(PS.Affjax = PS.Affjax || {});

(function (a) {
  a.arrayApply = function (d) {
    return function (e) {
      for (var k = d.length, g = e.length, b = Array(k * g), f = 0, c = 0; c < k; c++) {
        for (var m = d[c], l = 0; l < g; l++) {
          b[f++] = m(e[l]);
        }
      }

      return b;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var d = new function (e) {
    this.compose = e;
  }(function (e) {
    return function (k) {
      return function (g) {
        return e(k(g));
      };
    };
  });

  a.compose = function (e) {
    return e.compose;
  };

  a.composeFlipped = function (e) {
    return function (k) {
      return function (g) {
        return (0, e.compose)(g)(k);
      };
    };
  };

  a.semigroupoidFn = d;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var d = a["Control.Category"],
      e = a["Control.Semigroupoid"];
  a = new function (k, g) {
    this.Semigroupoid0 = k;
    this.identity = g;
  }(function () {
    return e.semigroupoidFn;
  }, function (k) {
    return k;
  });

  d.identity = function (k) {
    return k.identity;
  };

  d.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (d) {
    return function (e) {
      return function (k) {
        return d(k)(e);
      };
    };
  };

  a["const"] = function (d) {
    return function (e) {
      return d;
    };
  };

  a.on = function (d) {
    return function (e) {
      return function (k) {
        return function (g) {
          return d(e(k))(e(g));
        };
      };
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (d) {
    return function (e) {
      for (var k = e.length, g = Array(k), b = 0; b < k; b++) {
        g[b] = d(e[b]);
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
  var d = a["Data.Functor"],
      e = a["Data.Functor"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Function"],
      b = a["Data.Unit"];

  a = function a(f) {
    this.map = f;
  };

  k = new a(k.compose(k.semigroupoidFn));
  e = new a(e.arrayMap);
  d.Functor = a;

  d.map = function (f) {
    return f.map;
  };

  d.mapFlipped = function (f) {
    return function (c) {
      return function (m) {
        return (0, f.map)(m)(c);
      };
    };
  };

  d["void"] = function (f) {
    return (0, f.map)(g["const"](b.unit));
  };

  d.voidRight = function (f) {
    return function (c) {
      return (0, f.map)(g["const"](c));
    };
  };

  d.functorFn = k;
  d.functorArray = e;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var d = a["Control.Apply"],
      e = a["Control.Apply"],
      k = a["Control.Category"],
      g = a["Data.Function"],
      b = a["Data.Functor"];

  a = function a(c, m) {
    this.Functor0 = c;
    this.apply = m;
  };

  var f = new a(function () {
    return b.functorFn;
  }, function (c) {
    return function (m) {
      return function (l) {
        return c(l)(m(l));
      };
    };
  });
  e = new a(function () {
    return b.functorArray;
  }, e.arrayApply);
  d.Apply = a;

  d.apply = function (c) {
    return c.apply;
  };

  d.applySecond = function (c) {
    return function (m) {
      return function (l) {
        return (0, c.apply)(b.map(c.Functor0())(g["const"](k.identity(k.categoryFn)))(m))(l);
      };
    };
  };

  d.lift2 = function (c) {
    return function (m) {
      return function (l) {
        return function (q) {
          return (0, c.apply)(b.map(c.Functor0())(m)(l))(q);
        };
      };
    };
  };

  d.applyFn = f;
  d.applyArray = e;
})(PS);

(function (a) {
  a["Control.Applicative"] = a["Control.Applicative"] || {};
  var d = a["Control.Applicative"],
      e = a["Control.Apply"];

  a = function a(g, b) {
    this.Apply0 = g;
    this.pure = b;
  };

  var k = new a(function () {
    return e.applyArray;
  }, function (g) {
    return [g];
  });
  d.Applicative = a;

  d.pure = function (g) {
    return g.pure;
  };

  d.liftA1 = function (g) {
    return function (b) {
      return function (f) {
        return e.apply(g.Apply0())((0, g.pure)(b))(f);
      };
    };
  };

  d.applicativeArray = k;
})(PS);

(function (a) {
  a.arrayBind = function (d) {
    return function (e) {
      for (var k = [], g = 0, b = d.length; g < b; g++) {
        Array.prototype.push.apply(k, e(d[g]));
      }

      return k;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var d = a["Control.Bind"],
      e = a["Control.Apply"],
      k = a["Control.Category"],
      g = a["Data.Function"],
      b = function b(m, l) {
    this.Apply0 = m;
    this.bind = l;
  };

  a = new b(function () {
    return e.applyArray;
  }, a["Control.Bind"].arrayBind);

  var f = function f(m) {
    return g.flip(m.bind);
  },
      c = new function (m) {
    this.discard = m;
  }(function (m) {
    return m.bind;
  });

  d.Bind = b;

  d.bind = function (m) {
    return m.bind;
  };

  d.bindFlipped = f;

  d.discard = function (m) {
    return m.discard;
  };

  d.join = function (m) {
    return function (l) {
      return (0, m.bind)(l)(k.identity(k.categoryFn));
    };
  };

  d.composeKleisliFlipped = function (m) {
    return function (l) {
      return function (q) {
        return function (t) {
          return f(m)(l)(q(t));
        };
      };
    };
  };

  d.bindArray = a;
  d.discardUnit = c;
})(PS);

(function (a) {
  a.topInt = 2147483647;
  a.bottomInt = -2147483648;
  a.topChar = String.fromCharCode(65535);
  a.bottomChar = String.fromCharCode(0);
})(PS["Data.Bounded"] = PS["Data.Bounded"] || {});

(function (a) {
  var d = function d(e) {
    return function (k) {
      return function (g) {
        return function (b) {
          return function (f) {
            return b < f ? e : b === f ? k : g;
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
  var d = function d(e) {
    return function (k) {
      return e === k;
    };
  };

  a.eqBooleanImpl = d;
  a.eqIntImpl = d;
  a.eqCharImpl = d;
  a.eqStringImpl = d;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});

(function (a) {
  a["Data.Eq"] = a["Data.Eq"] || {};
  var d = a["Data.Eq"],
      e = a["Data.Eq"];

  a = function a(f) {
    this.eq = f;
  };

  var k = new a(e.eqStringImpl),
      g = new a(e.eqIntImpl),
      b = new a(e.eqCharImpl);
  e = new a(e.eqBooleanImpl);
  d.Eq = a;

  d.eq = function (f) {
    return f.eq;
  };

  d.eqBoolean = e;
  d.eqInt = g;
  d.eqChar = b;
  d.eqString = k;
})(PS);

(function (a) {
  a["Data.Ordering"] = a["Data.Ordering"] || {};
  a = a["Data.Ordering"];

  var d = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      e = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      k = function () {
    function g() {}

    g.value = new g();
    return g;
  }();

  a.LT = d;
  a.GT = e;
  a.EQ = k;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var d = a["Data.Ord"],
      e = a["Data.Ord"],
      k = a["Data.Eq"],
      g = a["Data.Ordering"];

  a = function a(c, m) {
    this.Eq0 = c;
    this.compare = m;
  };

  var b = new a(function () {
    return k.eqInt;
  }, e.ordIntImpl(g.LT.value)(g.EQ.value)(g.GT.value)),
      f = new a(function () {
    return k.eqChar;
  }, e.ordCharImpl(g.LT.value)(g.EQ.value)(g.GT.value));
  e = new a(function () {
    return k.eqBoolean;
  }, e.ordBooleanImpl(g.LT.value)(g.EQ.value)(g.GT.value));
  d.Ord = a;

  d.compare = function (c) {
    return c.compare;
  };

  d.max = function (c) {
    return function (m) {
      return function (l) {
        var q = (0, c.compare)(m)(l);
        if (q instanceof g.LT) return l;
        if (q instanceof g.EQ || q instanceof g.GT) return m;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [q.constructor.name]);
      };
    };
  };

  d.ordBoolean = e;
  d.ordInt = b;
  d.ordChar = f;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var d = a["Data.Bounded"],
      e = a["Data.Bounded"],
      k = a["Data.Ord"];

  a = function a(f, c, m) {
    this.Ord0 = f;
    this.bottom = c;
    this.top = m;
  };

  var g = new a(function () {
    return k.ordInt;
  }, e.bottomInt, e.topInt);
  e = new a(function () {
    return k.ordChar;
  }, e.bottomChar, e.topChar);
  var b = new a(function () {
    return k.ordBoolean;
  }, !1, !0);
  d.Bounded = a;

  d.bottom = function (f) {
    return f.bottom;
  };

  d.top = function (f) {
    return f.top;
  };

  d.boundedBoolean = b;
  d.boundedInt = g;
  d.boundedChar = e;
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var d = a["Data.Maybe"],
      e = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Category"],
      f = a["Data.Bounded"],
      c = a["Data.Eq"],
      m = a["Data.Function"],
      l = a["Data.Functor"],
      q = a["Data.Ord"],
      t = a["Data.Ordering"],
      n = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      p = function () {
    function D(v) {
      this.value0 = v;
    }

    D.create = function (v) {
      return new D(v);
    };

    return D;
  }(),
      F = function F(D) {
    return function (v) {
      return function (I) {
        if (I instanceof n) return D;
        if (I instanceof p) return v(I.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [D.constructor.name, v.constructor.name, I.constructor.name]);
      };
    };
  };

  a = F(!0)(m["const"](!1));
  m = F(!1)(m["const"](!0));

  var z = new l.Functor(function (D) {
    return function (v) {
      return v instanceof p ? new p(D(v.value0)) : n.value;
    };
  }),
      y = function y(D) {
    return new c.Eq(function (v) {
      return function (I) {
        return v instanceof n && I instanceof n ? !0 : v instanceof p && I instanceof p ? c.eq(D)(v.value0)(I.value0) : !1;
      };
    });
  },
      x = function x(D) {
    return new q.Ord(function () {
      return y(D.Eq0());
    }, function (v) {
      return function (I) {
        if (v instanceof n && I instanceof n) return t.EQ.value;
        if (v instanceof n) return t.LT.value;
        if (I instanceof n) return t.GT.value;
        if (v instanceof p && I instanceof p) return q.compare(D)(v.value0)(I.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [v.constructor.name, I.constructor.name]);
      };
    });
  },
      r = new k.Apply(function () {
    return z;
  }, function (D) {
    return function (v) {
      if (D instanceof p) return l.map(z)(D.value0)(v);
      if (D instanceof n) return n.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [D.constructor.name, v.constructor.name]);
    };
  });

  k = new g.Bind(function () {
    return r;
  }, function (D) {
    return function (v) {
      if (D instanceof p) return v(D.value0);
      if (D instanceof n) return n.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [D.constructor.name, v.constructor.name]);
    };
  });
  e = new e.Applicative(function () {
    return r;
  }, p.create);
  d.Nothing = n;
  d.Just = p;
  d.maybe = F;

  d.fromMaybe = function (D) {
    return F(D)(b.identity(b.categoryFn));
  };

  d.isJust = m;
  d.isNothing = a;

  d.fromJust = function (D) {
    return function (v) {
      if (v instanceof p) return v.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [v.constructor.name]);
    };
  };

  d.functorMaybe = z;
  d.applyMaybe = r;
  d.applicativeMaybe = e;
  d.bindMaybe = k;
  d.ordMaybe = x;

  d.boundedMaybe = function (D) {
    return new f.Bounded(function () {
      return x(D.Ord0());
    }, n.value, new p(f.top(D)));
  };
})(PS);

(function (a) {
  a["Data.MediaType.Common"] = a["Data.MediaType.Common"] || {};
  a = a["Data.MediaType.Common"];
  a.applicationFormURLEncoded = "application/x-www-form-urlencoded";
  a.applicationJSON = "application/json";
})(PS);

(function (a) {
  a["Affjax.RequestBody"] = a["Affjax.RequestBody"] || {};
  var d = a["Affjax.RequestBody"],
      e = a["Data.Maybe"],
      k = a["Data.MediaType.Common"];

  a = function () {
    function q(t) {
      this.value0 = t;
    }

    q.create = function (t) {
      return new q(t);
    };

    return q;
  }();

  var g = function () {
    function q(t) {
      this.value0 = t;
    }

    q.create = function (t) {
      return new q(t);
    };

    return q;
  }(),
      b = function () {
    function q(t) {
      this.value0 = t;
    }

    q.create = function (t) {
      return new q(t);
    };

    return q;
  }(),
      f = function () {
    function q(t) {
      this.value0 = t;
    }

    q.create = function (t) {
      return new q(t);
    };

    return q;
  }(),
      c = function () {
    function q(t) {
      this.value0 = t;
    }

    q.create = function (t) {
      return new q(t);
    };

    return q;
  }(),
      m = function () {
    function q(t) {
      this.value0 = t;
    }

    q.create = function (t) {
      return new q(t);
    };

    return q;
  }(),
      l = function () {
    function q(t) {
      this.value0 = t;
    }

    q.create = function (t) {
      return new q(t);
    };

    return q;
  }();

  d.ArrayView = a;
  d.Blob = g;
  d.Document = b;
  d.String = f;
  d.FormData = c;
  d.FormURLEncoded = m;
  d.Json = l;

  d.toMediaType = function (q) {
    return q instanceof m ? new e.Just(k.applicationFormURLEncoded) : q instanceof l ? new e.Just(k.applicationJSON) : e.Nothing.value;
  };
})(PS);

(function (a) {
  a.boolConj = function (d) {
    return function (e) {
      return d && e;
    };
  };

  a.boolDisj = function (d) {
    return function (e) {
      return d || e;
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
  var e = new function (k, g, b, f, c, m) {
    this.conj = k;
    this.disj = g;
    this.ff = b;
    this.implies = f;
    this.not = c;
    this.tt = m;
  }(a.boolConj, a.boolDisj, !1, function (k) {
    return function (g) {
      return (0, e.disj)((0, e.not)(k))(g);
    };
  }, a.boolNot, !0);

  d.ff = function (k) {
    return k.ff;
  };

  d.disj = function (k) {
    return k.disj;
  };

  d.heytingAlgebraBoolean = e;
})(PS);

(function (a) {
  a.concatString = function (d) {
    return function (e) {
      return d + e;
    };
  };

  a.concatArray = function (d) {
    return function (e) {
      return 0 === d.length ? e : 0 === e.length ? d : d.concat(e);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};
  var d = a["Data.Semigroup"],
      e = a["Data.Semigroup"],
      k = a["Data.Unit"];

  a = function a(f) {
    this.append = f;
  };

  var g = new a(function (f) {
    return function (c) {
      return k.unit;
    };
  }),
      b = new a(e.concatString);
  e = new a(e.concatArray);
  d.Semigroup = a;

  d.append = function (f) {
    return f.append;
  };

  d.semigroupString = b;
  d.semigroupUnit = g;
  d.semigroupArray = e;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var d = a["Data.Monoid"],
      e = a["Data.Semigroup"],
      k = function k(f, c) {
    this.Semigroup0 = f;
    this.mempty = c;
  };

  a = new k(function () {
    return e.semigroupUnit;
  }, a["Data.Unit"].unit);
  var g = new k(function () {
    return e.semigroupString;
  }, ""),
      b = new k(function () {
    return e.semigroupArray;
  }, []);
  d.Monoid = k;

  d.mempty = function (f) {
    return f.mempty;
  };

  d.monoidUnit = a;
  d.monoidString = g;
  d.monoidArray = b;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var d = a["Data.Monoid.Disj"],
      e = a["Data.HeytingAlgebra"],
      k = a["Data.Monoid"],
      g = a["Data.Semigroup"],
      b = function b(f) {
    return new g.Semigroup(function (c) {
      return function (m) {
        return e.disj(f)(c)(m);
      };
    });
  };

  d.Disj = function (f) {
    return f;
  };

  d.monoidDisj = function (f) {
    return new k.Monoid(function () {
      return b(f);
    }, e.ff(f));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var d = a["Data.Newtype"],
      e = a["Data.Functor"],
      k = function k(g, b) {
    this.unwrap = g;
    this.wrap = b;
  };

  a = new k(function (g) {
    return g;
  }, a["Data.Monoid.Disj"].Disj);

  d.unwrap = function (g) {
    return g.unwrap;
  };

  d.Newtype = k;

  d.alaF = function (g) {
    return function (b) {
      return function (f) {
        return function (c) {
          return function (m) {
            return function (l) {
              var q = e.map(b)(c.unwrap),
                  t = e.map(g)(f.wrap);
              return function (n) {
                return q(l(t(n)));
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
  a["Data.MediaType"] = a["Data.MediaType"] || {};
  var d = a["Data.MediaType"];
  a = new a["Data.Newtype"].Newtype(function (e) {
    return e;
  }, function (e) {
    return e;
  });
  d.newtypeMediaType = a;
})(PS);

(function (a) {
  a["Affjax.RequestHeader"] = a["Affjax.RequestHeader"] || {};

  var d = a["Affjax.RequestHeader"],
      e = a["Data.MediaType"],
      k = a["Data.Newtype"],
      g = function () {
    function c(m) {
      this.value0 = m;
    }

    c.create = function (m) {
      return new c(m);
    };

    return c;
  }(),
      b = function () {
    function c(m) {
      this.value0 = m;
    }

    c.create = function (m) {
      return new c(m);
    };

    return c;
  }(),
      f = function () {
    function c(m, l) {
      this.value0 = m;
      this.value1 = l;
    }

    c.create = function (m) {
      return function (l) {
        return new c(m, l);
      };
    };

    return c;
  }();

  d.Accept = g;
  d.ContentType = b;

  d.name = function (c) {
    if (c instanceof g) return "Accept";
    if (c instanceof b) return "Content-Type";
    if (c instanceof f) return c.value0;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): " + [c.constructor.name]);
  };

  d.value = function (c) {
    if (c instanceof g || c instanceof b) return k.unwrap(e.newtypeMediaType)(c.value0);
    if (c instanceof f) return c.value1;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): " + [c.constructor.name]);
  };
})(PS);

(function (a) {
  a["Affjax.ResponseFormat"] = a["Affjax.ResponseFormat"] || {};

  var d = a["Affjax.ResponseFormat"],
      e = a["Control.Category"],
      k = a["Data.Maybe"],
      g = a["Data.MediaType.Common"],
      b = function () {
    function t(n) {
      this.value0 = n;
    }

    t.create = function (n) {
      return new t(n);
    };

    return t;
  }(),
      f = function () {
    function t(n) {
      this.value0 = n;
    }

    t.create = function (n) {
      return new t(n);
    };

    return t;
  }(),
      c = function () {
    function t(n) {
      this.value0 = n;
    }

    t.create = function (n) {
      return new t(n);
    };

    return t;
  }(),
      m = function () {
    function t(n) {
      this.value0 = n;
    }

    t.create = function (n) {
      return new t(n);
    };

    return t;
  }(),
      l = function () {
    function t(n) {
      this.value0 = n;
    }

    t.create = function (n) {
      return new t(n);
    };

    return t;
  }(),
      q = function () {
    function t(n) {
      this.value0 = n;
    }

    t.create = function (n) {
      return new t(n);
    };

    return t;
  }();

  a = new l(e.identity(e.categoryFn));
  e = new q(e.identity(e.categoryFn));
  d.ArrayBuffer = b;
  d.Blob = f;
  d.Document = c;
  d.Json = m;
  d.String = l;
  d.Ignore = q;
  d.string = a;
  d.ignore = e;

  d.toResponseType = function (t) {
    if (t instanceof b) return "arraybuffer";
    if (t instanceof f) return "blob";
    if (t instanceof c) return "document";
    if (t instanceof m || t instanceof l) return "text";
    if (t instanceof q) return "";
    throw Error("Failed pattern match at Affjax.ResponseFormat (line 46, column 3 - line 52, column 19): " + [t.constructor.name]);
  };

  d.toMediaType = function (t) {
    return t instanceof m ? new k.Just(g.applicationJSON) : k.Nothing.value;
  };
})(PS);

(function (a) {
  a["Affjax.ResponseHeader"] = a["Affjax.ResponseHeader"] || {};
  a = a["Affjax.ResponseHeader"];

  var d = function () {
    function e(k, g) {
      this.value0 = k;
      this.value1 = g;
    }

    e.create = function (k) {
      return function (g) {
        return new e(k, g);
      };
    };

    return e;
  }();

  a.ResponseHeader = d;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var d = a["Control.Monad"],
      e = a["Control.Applicative"],
      k = a["Control.Bind"];

  d.Monad = function (g, b) {
    this.Applicative0 = g;
    this.Bind1 = b;
  };

  d.ap = function (g) {
    return function (b) {
      return function (f) {
        return k.bind(g.Bind1())(b)(function (c) {
          return k.bind(g.Bind1())(f)(function (m) {
            return e.pure(g.Applicative0())(c(m));
          });
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var d = a["Data.Bifunctor"],
      e = a["Control.Category"];

  d.bimap = function (k) {
    return k.bimap;
  };

  d.Bifunctor = function (k) {
    this.bimap = k;
  };

  d.lmap = function (k) {
    return function (g) {
      return (0, k.bimap)(g)(e.identity(e.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var d = a["Data.Either"],
      e = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Data.Bifunctor"],
      c = a["Data.Function"],
      m = a["Data.Functor"],
      l = a["Data.Maybe"],
      q = function () {
    function y(x) {
      this.value0 = x;
    }

    y.create = function (x) {
      return new y(x);
    };

    return y;
  }(),
      t = function () {
    function y(x) {
      this.value0 = x;
    }

    y.create = function (x) {
      return new y(x);
    };

    return y;
  }(),
      n = new m.Functor(function (y) {
    return function (x) {
      if (x instanceof q) return new q(x.value0);
      if (x instanceof t) return new t(y(x.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [x.constructor.name]);
    };
  });

  a = function a(y) {
    return function (x) {
      return function (r) {
        if (r instanceof q) return y(r.value0);
        if (r instanceof t) return x(r.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [y.constructor.name, x.constructor.name, r.constructor.name]);
      };
    };
  };

  c = a(c["const"](l.Nothing.value))(l.Just.create);
  f = new f.Bifunctor(function (y) {
    return function (x) {
      return function (r) {
        if (r instanceof q) return new q(y(r.value0));
        if (r instanceof t) return new t(x(r.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [y.constructor.name, x.constructor.name, r.constructor.name]);
      };
    };
  });
  var p = new k.Apply(function () {
    return n;
  }, function (y) {
    return function (x) {
      if (y instanceof q) return new q(y.value0);
      if (y instanceof t) return m.map(n)(y.value0)(x);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [y.constructor.name, x.constructor.name]);
    };
  }),
      F = new g.Bind(function () {
    return p;
  }, a(function (y) {
    return function (x) {
      return new q(y);
    };
  })(function (y) {
    return function (x) {
      return x(y);
    };
  })),
      z = new e.Applicative(function () {
    return p;
  }, t.create);
  e = new b.Monad(function () {
    return z;
  }, function () {
    return F;
  });
  d.Left = q;
  d.Right = t;
  d.either = a;

  d.note = function (y) {
    return l.maybe(new q(y))(t.create);
  };

  d.hush = c;
  d.functorEither = n;
  d.bifunctorEither = f;
  d.applicativeEither = z;
  d.bindEither = F;
  d.monadEither = e;
})(PS);

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var d = a["Control.Monad.Error.Class"],
      e = a["Control.Applicative"],
      k = a["Data.Either"],
      g = a["Data.Functor"];

  d.catchError = function (b) {
    return b.catchError;
  };

  d.throwError = function (b) {
    return b.throwError;
  };

  d.MonadThrow = function (b, f) {
    this.Monad0 = b;
    this.throwError = f;
  };

  d.MonadError = function (b, f) {
    this.MonadThrow0 = b;
    this.catchError = f;
  };

  d["try"] = function (b) {
    return function (f) {
      return (0, b.catchError)(g.map(b.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(k.Right.create)(f))(function () {
        var c = e.pure(b.MonadThrow0().Monad0().Applicative0());
        return function (m) {
          return c(k.Left.create(m));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var d = a["Control.Monad.Except.Trans"],
      e = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Control.Monad.Error.Class"],
      c = a["Data.Either"],
      m = a["Data.Functor"],
      l = function l(z) {
    return function (y) {
      return z(y);
    };
  },
      q = function q(z) {
    return new m.Functor(function (y) {
      return l(m.map(z)(m.map(c.functorEither)(y)));
    });
  },
      t = function t(z) {
    return new b.Monad(function () {
      return F(z);
    }, function () {
      return n(z);
    });
  },
      n = function n(z) {
    return new g.Bind(function () {
      return p(z);
    }, function (y) {
      return function (x) {
        return g.bind(z.Bind1())(y)(c.either(function () {
          var r = e.pure(z.Applicative0());
          return function (D) {
            return r(c.Left.create(D));
          };
        }())(function (r) {
          return x(r);
        }));
      };
    });
  },
      p = function p(z) {
    return new k.Apply(function () {
      return q(z.Bind1().Apply0().Functor0());
    }, b.ap(t(z)));
  },
      F = function F(z) {
    return new e.Applicative(function () {
      return p(z);
    }, function () {
      var y = e.pure(z.Applicative0());
      return function (x) {
        return y(c.Right.create(x));
      };
    }());
  };

  d.ExceptT = function (z) {
    return z;
  };

  d.runExceptT = function (z) {
    return z;
  };

  d.applicativeExceptT = F;
  d.bindExceptT = n;

  d.monadThrowExceptT = function (z) {
    return new f.MonadThrow(function () {
      return t(z);
    }, function () {
      var y = e.pure(z.Applicative0());
      return function (x) {
        return y(c.Left.create(x));
      };
    }());
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var d = a["Data.Identity"],
      e = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Data.Functor"],
      c = function c(n) {
    return n;
  };

  a = new a["Data.Newtype"].Newtype(function (n) {
    return n;
  }, c);
  var m = new f.Functor(function (n) {
    return function (p) {
      return n(p);
    };
  }),
      l = new k.Apply(function () {
    return m;
  }, function (n) {
    return function (p) {
      return n(p);
    };
  }),
      q = new g.Bind(function () {
    return l;
  }, function (n) {
    return function (p) {
      return p(n);
    };
  }),
      t = new e.Applicative(function () {
    return l;
  }, c);
  e = new b.Monad(function () {
    return t;
  }, function () {
    return q;
  });
  d.newtypeIdentity = a;
  d.monadIdentity = e;
})(PS);

(function (a) {
  a["Control.Monad.Except"] = a["Control.Monad.Except"] || {};
  var d = a["Control.Monad.Except"],
      e = a["Control.Monad.Except.Trans"],
      k = a["Data.Identity"],
      g = a["Data.Newtype"];

  a = function () {
    var b = g.unwrap(k.newtypeIdentity);
    return function (f) {
      return b(e.runExceptT(f));
    };
  }();

  d.runExcept = a;
})(PS);

(function (a) {
  a.fromObject = function (d) {
    return d;
  };

  a.stringify = function (d) {
    return JSON.stringify(d);
  };
})(PS["Data.Argonaut.Core"] = PS["Data.Argonaut.Core"] || {});

(function (a) {
  function d(e) {
    return function (k) {
      var g = [],
          b;

      for (b in k) {
        hasOwnProperty.call(k, b) && g.push(e(b)(k[b]));
      }

      return g;
    };
  }

  a._copyST = function (e) {
    return function () {
      var k = {},
          g;

      for (g in e) {
        hasOwnProperty.call(e, g) && (k[g] = e[g]);
      }

      return k;
    };
  };

  a.empty = {};

  a.runST = function (e) {
    return e();
  };

  a._foldM = function (e) {
    return function (k) {
      return function (g) {
        return function (b) {
          function f(l) {
            return function (q) {
              return k(q)(l)(b[l]);
            };
          }

          var c = g,
              m;

          for (m in b) {
            hasOwnProperty.call(b, m) && (c = e(c)(f(m)));
          }

          return c;
        };
      };
    };
  };

  a._lookup = function (e, k, g, b) {
    return g in b ? k(b[g]) : e;
  };

  a._lookupST = function (e, k, g, b) {
    return function () {
      return g in b ? k(b[g]) : e;
    };
  };

  a.keys = Object.keys || d(function (e) {
    return function () {
      return e;
    };
  });
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});

(function (a) {
  a.map_ = function (d) {
    return function (e) {
      return function () {
        return d(e());
      };
    };
  };

  a.pure_ = function (d) {
    return function () {
      return d;
    };
  };

  a.bind_ = function (d) {
    return function (e) {
      return function () {
        return e(d())();
      };
    };
  };
})(PS["Control.Monad.ST.Internal"] = PS["Control.Monad.ST.Internal"] || {});

(function (a) {
  a["Control.Monad.ST.Internal"] = a["Control.Monad.ST.Internal"] || {};
  var d = a["Control.Monad.ST.Internal"],
      e = a["Control.Monad.ST.Internal"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      f = a["Control.Monad"],
      c = new a["Data.Functor"].Functor(e.map_);
  a = new f.Monad(function () {
    return q;
  }, function () {
    return m;
  });
  var m = new b.Bind(function () {
    return l;
  }, e.bind_),
      l = new g.Apply(function () {
    return c;
  }, f.ap(a)),
      q = new k.Applicative(function () {
    return l;
  }, e.pure_);
  d.applicativeST = q;
  d.monadST = a;
})(PS);

(function (a) {
  a.foldrArray = function (d) {
    return function (e) {
      return function (k) {
        for (var g = e, b = k.length - 1; 0 <= b; b--) {
          g = d(k[b])(g);
        }

        return g;
      };
    };
  };

  a.foldlArray = function (d) {
    return function (e) {
      return function (k) {
        for (var g = e, b = k.length, f = 0; f < b; f++) {
          g = d(g)(k[f]);
        }

        return g;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a["Data.Foldable"] = a["Data.Foldable"] || {};
  var d = a["Data.Foldable"],
      e = a["Data.Foldable"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Category"],
      f = a["Data.Function"],
      c = a["Data.Functor"],
      m = a["Data.Maybe"],
      l = a["Data.Monoid"],
      q = a["Data.Monoid.Disj"],
      t = a["Data.Newtype"],
      n = a["Data.Semigroup"],
      p = a["Data.Unit"];

  a = function a(r, D, v) {
    this.foldMap = r;
    this.foldl = D;
    this.foldr = v;
  };

  var F = function F(r) {
    return function (D) {
      return function (v) {
        return (0, D.foldr)(function () {
          var I = g.applySecond(r.Apply0());
          return function (L) {
            return I(v(L));
          };
        }())(k.pure(r)(p.unit));
      };
    };
  },
      z = new a(function (r) {
    return function (D) {
      return function (v) {
        if (v instanceof m.Nothing) return l.mempty(r);
        if (v instanceof m.Just) return D(v.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [D.constructor.name, v.constructor.name]);
      };
    };
  }, function (r) {
    return function (D) {
      return function (v) {
        if (v instanceof m.Nothing) return D;
        if (v instanceof m.Just) return r(D)(v.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [r.constructor.name, D.constructor.name, v.constructor.name]);
      };
    };
  }, function (r) {
    return function (D) {
      return function (v) {
        if (v instanceof m.Nothing) return D;
        if (v instanceof m.Just) return r(v.value0)(D);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [r.constructor.name, D.constructor.name, v.constructor.name]);
      };
    };
  }),
      y = function y(r) {
    return function (D) {
      return function (v) {
        return (0, r.foldr)(function (I) {
          return function (L) {
            return n.append(D.Semigroup0())(v(I))(L);
          };
        })(l.mempty(D));
      };
    };
  },
      x = new a(function (r) {
    return y(x)(r);
  }, e.foldlArray, e.foldrArray);

  d.Foldable = a;

  d.foldr = function (r) {
    return r.foldr;
  };

  d.foldl = function (r) {
    return r.foldl;
  };

  d.foldMap = function (r) {
    return r.foldMap;
  };

  d.fold = function (r) {
    return function (D) {
      return (0, r.foldMap)(D)(b.identity(b.categoryFn));
    };
  };

  d.traverse_ = F;

  d.for_ = function (r) {
    return function (D) {
      return f.flip(F(r)(D));
    };
  };

  d.intercalate = function (r) {
    return function (D) {
      return function (v) {
        return function (I) {
          return (0, r.foldl)(function (L) {
            return function (K) {
              return L.init ? {
                init: !1,
                acc: K
              } : {
                init: !1,
                acc: n.append(D.Semigroup0())(L.acc)(n.append(D.Semigroup0())(v)(K))
              };
            };
          })({
            init: !0,
            acc: l.mempty(D)
          })(I).acc;
        };
      };
    };
  };

  d.any = function (r) {
    return function (D) {
      return t.alaF(c.functorFn)(c.functorFn)(t.newtypeDisj)(t.newtypeDisj)(q.Disj)((0, r.foldMap)(q.monoidDisj(D)));
    };
  };

  d.find = function (r) {
    return function (D) {
      return (0, r.foldl)(function (v) {
        return function (I) {
          return v instanceof m.Nothing && D(I) ? new m.Just(I) : v;
        };
      })(m.Nothing.value);
    };
  };

  d.foldableArray = x;
  d.foldableMaybe = z;
})(PS);

(function (a) {
  a.runFn2 = function (d) {
    return function (e) {
      return function (k) {
        return d(e, k);
      };
    };
  };

  a.runFn4 = function (d) {
    return function (e) {
      return function (k) {
        return function (g) {
          return function (b) {
            return d(e, k, g, b);
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
  a["new"] = function () {
    return {};
  };

  a.poke = function (d) {
    return function (e) {
      return function (k) {
        return function () {
          k[d] = e;
          return k;
        };
      };
    };
  };

  a["delete"] = function (d) {
    return function (e) {
      return function () {
        delete e[d];
        return e;
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
  a.unsafeCoerce = function (d) {
    return d;
  };
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});

(function (a) {
  a["Unsafe.Coerce"] = a["Unsafe.Coerce"] || {};
  a["Unsafe.Coerce"].unsafeCoerce = a["Unsafe.Coerce"].unsafeCoerce;
})(PS);

(function (a) {
  a["Foreign.Object"] = a["Foreign.Object"] || {};

  var d = a["Foreign.Object"],
      e = a["Foreign.Object"],
      k = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Control.Monad.ST.Internal"],
      f = a["Data.Foldable"],
      c = a["Data.Maybe"],
      m = a["Foreign.Object.ST"],
      l = a["Unsafe.Coerce"],
      q = e._copyST,
      t = function t(y) {
    return function (x) {
      return e.runST(function () {
        var r = q(x)();
        y(r)();
        return r;
      });
    };
  },
      n = a["Data.Function.Uncurried"].runFn4(e._lookup)(c.Nothing.value)(c.Just.create),
      p = function p(y) {
    return function (x) {
      return t(m.poke(y)(x));
    };
  },
      F = function F(y) {
    return function (x) {
      return function (r) {
        return e._foldM(g.bind(y.Bind1()))(x)(k.pure(y.Applicative0())(r));
      };
    };
  },
      z = function z(y) {
    return t(function (x) {
      return F(b.monadST)(function (r) {
        return function (D) {
          return function (v) {
            return m.poke(D)(v)(r);
          };
        };
      })(x)(y);
    });
  };

  d.lookup = n;

  d.fromFoldableWith = function (y) {
    return function (x) {
      return function (r) {
        return e.runST(function () {
          var D = m["new"]();
          f.for_(b.applicativeST)(y)(r)(function (v) {
            return function () {
              var I = e._lookupST(v.value1, x(v.value1), v.value0, D)();

              return m.poke(v.value0)(I)(D)();
            };
          })();
          return D;
        });
      };
    };
  };

  d.fromHomogeneous = function (y) {
    return l.unsafeCoerce;
  };

  d.alter = function (y) {
    return function (x) {
      return function (r) {
        var D = y(n(x)(r));
        if (D instanceof c.Nothing) return t(m["delete"](x))(r);
        if (D instanceof c.Just) return p(x)(D.value0)(r);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [D.constructor.name]);
      };
    };
  };

  d.unions = function (y) {
    return f.foldl(y)(z)(e.empty);
  };

  d.empty = e.empty;
  d.keys = e.keys;
})(PS);

(function (a) {
  a["Data.Argonaut.Core"] = a["Data.Argonaut.Core"] || {};
  var d = a["Data.Argonaut.Core"],
      e = a["Data.Argonaut.Core"];
  a = e.fromObject(a["Foreign.Object"].empty);
  d.jsonEmptyObject = a;
  d.stringify = e.stringify;
})(PS);

(function (a) {
  a._jsonParser = function (d, e, k) {
    try {
      return e(JSON.parse(k));
    } catch (g) {
      return d(g.message);
    }
  };
})(PS["Data.Argonaut.Parser"] = PS["Data.Argonaut.Parser"] || {});

(function (a) {
  a["Data.Argonaut.Parser"] = a["Data.Argonaut.Parser"] || {};
  var d = a["Data.Argonaut.Parser"],
      e = a["Data.Either"];

  a["Data.Argonaut.Parser"].jsonParser = function (k) {
    return d._jsonParser(e.Left.create, e.Right.create, k);
  };
})(PS);

(function (a) {
  a.range = function (d) {
    return function (e) {
      for (var k = d > e ? -1 : 1, g = Array(k * (e - d) + 1), b = d, f = 0; b !== e;) {
        g[f++] = b, b += k;
      }

      g[f] = b;
      return g;
    };
  };

  a.fromFoldableImpl = function () {
    function d(g, b) {
      this.head = g;
      this.tail = b;
    }

    function e(g) {
      return function (b) {
        return new d(g, b);
      };
    }

    var k = {};
    return function (g) {
      return function (b) {
        var f = [],
            c = 0;

        for (b = g(e)(k)(b); b !== k;) {
          f[c++] = b.head, b = b.tail;
        }

        return f;
      };
    };
  }();

  a.length = function (d) {
    return d.length;
  };

  a.cons = function (d) {
    return function (e) {
      return [d].concat(e);
    };
  };

  a.snoc = function (d) {
    return function (e) {
      var k = d.slice();
      k.push(e);
      return k;
    };
  };

  a["uncons'"] = function (d) {
    return function (e) {
      return function (k) {
        return 0 === k.length ? d({}) : e(k[0])(k.slice(1));
      };
    };
  };

  a.indexImpl = function (d) {
    return function (e) {
      return function (k) {
        return function (g) {
          return 0 > g || g >= k.length ? e : d(k[g]);
        };
      };
    };
  };

  a._updateAt = function (d) {
    return function (e) {
      return function (k) {
        return function (g) {
          return function (b) {
            if (0 > k || k >= b.length) return e;
            b = b.slice();
            b[k] = g;
            return d(b);
          };
        };
      };
    };
  };

  a.filter = function (d) {
    return function (e) {
      return e.filter(d);
    };
  };

  a.slice = function (d) {
    return function (e) {
      return function (k) {
        return k.slice(d, e);
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
      e = a["Data.Array"],
      k = a["Control.Bind"],
      g = a["Control.Category"],
      b = a["Data.Boolean"],
      f = a["Data.Foldable"],
      c = a["Data.Function"],
      m = a["Data.Maybe"];
  a = e._updateAt(m.Just.create)(m.Nothing.value);

  var l = e["uncons'"](c["const"](m.Nothing.value))(function (p) {
    return function (F) {
      return new m.Just({
        head: p,
        tail: F
      });
    };
  }),
      q = function q(p) {
    return [p];
  },
      t = e.indexImpl(m.Just.create)(m.Nothing.value),
      n = c.flip(k.bind(k.bindArray));

  k = function (p) {
    return n(function () {
      var F = m.maybe([])(q);
      return function (z) {
        return F(p(z));
      };
    }());
  }(g.identity(g.categoryFn));

  d.fromFoldable = function (p) {
    return e.fromFoldableImpl(f.foldr(p));
  };

  d.singleton = q;

  d.head = function (p) {
    return t(p)(0);
  };

  d.init = function (p) {
    if (0 === e.length(p)) return m.Nothing.value;
    if (b.otherwise) return new m.Just(e.slice(0)(e.length(p) - 1 | 0)(p));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [p.constructor.name]);
  };

  d.uncons = l;
  d.updateAt = a;
  d.concatMap = n;
  d.catMaybes = k;
  d.range = e.range;
  d.length = e.length;
  d.cons = e.cons;
  d.snoc = e.snoc;
  d.filter = e.filter;
})(PS);

(function (a) {
  a.toUpper = function (d) {
    return d.toUpperCase();
  };

  a.trim = function (d) {
    return d.trim();
  };

  a.joinWith = function (d) {
    return function (e) {
      return e.join(d);
    };
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});

(function (a) {
  a["Data.String.Common"] = a["Data.String.Common"] || {};
  var d = a["Data.String.Common"];
  a = a["Data.String.Common"];

  d["null"] = function (e) {
    return "" === e;
  };

  d.toUpper = a.toUpper;
  d.trim = a.trim;
  d.joinWith = a.joinWith;
})(PS);

(function (a) {
  a.traverseArrayImpl = function () {
    function d(b) {
      return [b];
    }

    function e(b) {
      return function (f) {
        return [b, f];
      };
    }

    function k(b) {
      return function (f) {
        return function (c) {
          return [b, f, c];
        };
      };
    }

    function g(b) {
      return function (f) {
        return b.concat(f);
      };
    }

    return function (b) {
      return function (f) {
        return function (c) {
          return function (m) {
            return function (l) {
              function q(t, n) {
                switch (n - t) {
                  case 0:
                    return c([]);

                  case 1:
                    return f(d)(m(l[t]));

                  case 2:
                    return b(f(e)(m(l[t])))(m(l[t + 1]));

                  case 3:
                    return b(b(f(k)(m(l[t])))(m(l[t + 1])))(m(l[t + 2]));

                  default:
                    var p = t + 2 * Math.floor((n - t) / 4);
                    return b(f(g)(q(t, p)))(q(p, n));
                }
              }

              return q(0, l.length);
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
      e = a["Data.Traversable"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Category"],
      f = a["Data.Foldable"],
      c = a["Data.Functor"],
      m = a["Data.Maybe"];

  a = function a(n, p, F, z) {
    this.Foldable1 = n;
    this.Functor0 = p;
    this.sequence = F;
    this.traverse = z;
  };

  var l = new a(function () {
    return f.foldableMaybe;
  }, function () {
    return m.functorMaybe;
  }, function (n) {
    return function (p) {
      if (p instanceof m.Nothing) return k.pure(n)(m.Nothing.value);
      if (p instanceof m.Just) return c.map(n.Apply0().Functor0())(m.Just.create)(p.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [p.constructor.name]);
    };
  }, function (n) {
    return function (p) {
      return function (F) {
        if (F instanceof m.Nothing) return k.pure(n)(m.Nothing.value);
        if (F instanceof m.Just) return c.map(n.Apply0().Functor0())(m.Just.create)(p(F.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [p.constructor.name, F.constructor.name]);
      };
    };
  }),
      q = function q(n) {
    return function (p) {
      return (0, n.traverse)(p)(b.identity(b.categoryFn));
    };
  },
      t = new a(function () {
    return f.foldableArray;
  }, function () {
    return c.functorArray;
  }, function (n) {
    return q(t)(n);
  }, function (n) {
    return e.traverseArrayImpl(g.apply(n.Apply0()))(c.map(n.Apply0().Functor0()))(k.pure(n));
  });

  d.traverse = function (n) {
    return n.traverse;
  };

  d.sequence = function (n) {
    return n.sequence;
  };

  d.traversableArray = t;
  d.traversableMaybe = l;
})(PS);

(function (a) {
  a.infinity = Infinity;

  a.readInt = function (d) {
    return function (e) {
      return parseInt(e, d);
    };
  };

  a._encodeURIComponent = function (d) {
    return function (e, k, g) {
      try {
        return k(d(g));
      } catch (b) {
        return e(b.message);
      }
    };
  }(encodeURIComponent);
})(PS.Global = PS.Global || {});

(function (a) {
  a.Global = a.Global || {};
  var d = a.Global,
      e = a.Global,
      k = a["Data.Function"],
      g = a["Data.Maybe"];

  d.encodeURIComponent = function (b) {
    return e._encodeURIComponent(k["const"](g.Nothing.value), g.Just.create, b);
  };

  d.infinity = e.infinity;
  d.readInt = e.readInt;
})(PS);

(function (a) {
  a["Data.FormURLEncoded"] = a["Data.FormURLEncoded"] || {};
  var d = a["Data.FormURLEncoded"],
      e = a["Control.Apply"],
      k = a["Data.Functor"],
      g = a["Data.Maybe"],
      b = a["Data.String.Common"],
      f = a["Data.Traversable"],
      c = a.Global;

  a = function () {
    var m = k.map(g.functorMaybe)(b.joinWith("&")),
        l = f.traverse(f.traversableArray)(g.applicativeMaybe)(function (q) {
      if (q.value1 instanceof g.Nothing) return c.encodeURIComponent(q.value0);
      if (q.value1 instanceof g.Just) return e.apply(g.applyMaybe)(k.map(g.functorMaybe)(function (t) {
        return function (n) {
          return t + ("=" + n);
        };
      })(c.encodeURIComponent(q.value0)))(c.encodeURIComponent(q.value1.value0));
      throw Error("Failed pattern match at Data.FormURLEncoded (line 37, column 18 - line 39, column 108): " + [q.constructor.name]);
    });
    return function (q) {
      return m(l(q));
    };
  }();

  d.encode = a;
})(PS);

(function (a) {
  a.showIntImpl = function (d) {
    return d.toString();
  };

  a.showCharImpl = function (d) {
    var e = d.charCodeAt(0);

    if (32 > e || 127 === e) {
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

      return "'\\" + e.toString(10) + "'";
    }

    return "'" === d || "\\" === d ? "'\\" + d + "'" : "'" + d + "'";
  };

  a.showStringImpl = function (d) {
    var e = d.length;
    return '"' + d.replace(/[\0-\x1F\x7F"\\]/g, function (k, g) {
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
      g = g < e && "0" <= d[g] && "9" >= d[g] ? "\\&" : "";
      return "\\" + k.charCodeAt(0).toString(10) + g;
    }) + '"';
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};
  var d = a["Data.Show"],
      e = a["Data.Show"];

  a = function a(f) {
    this.show = f;
  };

  var k = new a(e.showStringImpl),
      g = new a(e.showIntImpl);
  e = new a(e.showCharImpl);
  var b = new a(function (f) {
    if (f) return "true";
    if (!f) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [f.constructor.name]);
  });
  d.Show = a;

  d.show = function (f) {
    return f.show;
  };

  d.showBoolean = b;
  d.showInt = g;
  d.showChar = e;
  d.showString = k;
})(PS);

(function (a) {
  a["Data.HTTP.Method"] = a["Data.HTTP.Method"] || {};
  var d = a["Data.HTTP.Method"],
      e = a["Data.Either"];
  a = a["Data.Show"];

  var k = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      g = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      b = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      f = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      c = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      m = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      l = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      q = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      t = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      n = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      p = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      F = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      z = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      y = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      x = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      r = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      D = new a.Show(function (v) {
    if (v instanceof k) return "OPTIONS";
    if (v instanceof g) return "GET";
    if (v instanceof b) return "HEAD";
    if (v instanceof f) return "POST";
    if (v instanceof c) return "PUT";
    if (v instanceof m) return "DELETE";
    if (v instanceof l) return "TRACE";
    if (v instanceof q) return "CONNECT";
    if (v instanceof t) return "PROPFIND";
    if (v instanceof n) return "PROPPATCH";
    if (v instanceof p) return "MKCOL";
    if (v instanceof F) return "COPY";
    if (v instanceof z) return "MOVE";
    if (v instanceof y) return "LOCK";
    if (v instanceof x) return "UNLOCK";
    if (v instanceof r) return "PATCH";
    throw Error("Failed pattern match at Data.HTTP.Method (line 40, column 1 - line 56, column 23): " + [v.constructor.name]);
  });

  e = e.either(a.show(D))(function (v) {
    return v;
  });
  d.GET = g;
  d.print = e;
})(PS);

(function (a) {
  a["Control.Alt"] = a["Control.Alt"] || {};
  a = a["Control.Alt"];

  a.Alt = function (d, e) {
    this.Functor0 = d;
    this.alt = e;
  };

  a.alt = function (d) {
    return d.alt;
  };
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  a = a["Control.Plus"];

  a.Plus = function (d, e) {
    this.Alt0 = d;
    this.empty = e;
  };

  a.empty = function (d) {
    return d.empty;
  };
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var d = a["Data.NonEmpty"],
      e = a["Control.Plus"],
      k = a["Data.Foldable"],
      g = a["Data.Functor"],
      b = a["Data.Semigroup"],
      f = a["Data.Show"],
      c = function () {
    function m(l, q) {
      this.value0 = l;
      this.value1 = q;
    }

    m.create = function (l) {
      return function (q) {
        return new m(l, q);
      };
    };

    return m;
  }();

  d.NonEmpty = c;

  d.singleton = function (m) {
    return function (l) {
      return new c(l, e.empty(m));
    };
  };

  d.showNonEmpty = function (m) {
    return function (l) {
      return new f.Show(function (q) {
        return "(NonEmpty " + (f.show(m)(q.value0) + (" " + (f.show(l)(q.value1) + ")")));
      });
    };
  };

  d.functorNonEmpty = function (m) {
    return new g.Functor(function (l) {
      return function (q) {
        return new c(l(q.value0), g.map(m)(l)(q.value1));
      };
    });
  };

  d.foldableNonEmpty = function (m) {
    return new k.Foldable(function (l) {
      return function (q) {
        return function (t) {
          return b.append(l.Semigroup0())(q(t.value0))(k.foldMap(m)(l)(q)(t.value1));
        };
      };
    }, function (l) {
      return function (q) {
        return function (t) {
          return k.foldl(m)(l)(l(q)(t.value0))(t.value1);
        };
      };
    }, function (l) {
      return function (q) {
        return function (t) {
          return l(t.value0)(k.foldr(m)(l)(q)(t.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var d = a["Data.List.Types"],
      e = a["Control.Alt"],
      k = a["Control.Plus"],
      g = a["Data.Foldable"],
      b = a["Data.Function"],
      f = a["Data.Functor"],
      c = a["Data.Monoid"],
      m = a["Data.NonEmpty"],
      l = a["Data.Semigroup"],
      q = a["Data.Show"],
      t = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      n = function () {
    function v(I, L) {
      this.value0 = I;
      this.value1 = L;
    }

    v.create = function (I) {
      return function (L) {
        return new v(I, L);
      };
    };

    return v;
  }(),
      p = new f.Functor(function (v) {
    return function (I) {
      return function (L) {
        function K(W, A) {
          if (A instanceof n && A.value1 instanceof n && A.value1.value1 instanceof n) G = new n(A, W), L = A.value1.value1.value1;else return E = !0, function (C) {
            return function (S) {
              for (var w = C, N = !1, M; !N;) {
                M = w;
                var J = S;
                M instanceof n && M.value0 instanceof n && M.value0.value1 instanceof n && M.value0.value1.value1 instanceof n ? (w = M.value1, S = new n(v(M.value0.value0), new n(v(M.value0.value1.value0), new n(v(M.value0.value1.value1.value0), J))), M = void 0) : (N = !0, M = J);
              }

              return M;
            };
          }(W)(function (C) {
            return C instanceof n && C.value1 instanceof n && C.value1.value1 instanceof t ? new n(v(C.value0), new n(v(C.value1.value0), t.value)) : C instanceof n && C.value1 instanceof t ? new n(v(C.value0), t.value) : t.value;
          }(A));
        }

        for (var G = I, E = !1, T; !E;) {
          T = K(G, L);
        }

        return T;
      };
    }(t.value);
  });

  a = m.functorNonEmpty(p);

  var F = new g.Foldable(function (v) {
    return function (I) {
      return g.foldl(F)(function (L) {
        var K = l.append(v.Semigroup0())(L);
        return function (G) {
          return K(I(G));
        };
      })(c.mempty(v));
    };
  }, function (v) {
    return function (I) {
      return function (L) {
        for (var K = I, G = !1, E; !G;) {
          E = K;
          var T = L;
          if (T instanceof t) G = !0;else {
            if (T instanceof n) K = v(E)(T.value0), L = T.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [T.constructor.name]);
            E = void 0;
          }
        }

        return E;
      };
    };
  }, function (v) {
    return function (I) {
      var L = g.foldl(F)(b.flip(n.create))(t.value),
          K = g.foldl(F)(b.flip(v))(I);
      return function (G) {
        return K(L(G));
      };
    };
  }),
      z = m.foldableNonEmpty(F),
      y = new l.Semigroup(function (v) {
    return function (I) {
      return g.foldr(F)(n.create)(I)(v);
    };
  }),
      x = new c.Monoid(function () {
    return y;
  }, t.value),
      r = function r(v) {
    return new q.Show(function (I) {
      return I instanceof t ? "Nil" : "(" + (g.intercalate(F)(c.monoidString)(" : ")(f.map(p)(q.show(v))(I)) + " : Nil)");
    });
  },
      D = new e.Alt(function () {
    return p;
  }, l.append(y));

  e = new k.Plus(function () {
    return D;
  }, t.value);
  d.Nil = t;
  d.Cons = n;

  d.NonEmptyList = function (v) {
    return v;
  };

  d.monoidList = x;
  d.foldableList = F;
  d.plusList = e;

  d.showNonEmptyList = function (v) {
    return new q.Show(function (I) {
      return "(NonEmptyList " + (q.show(m.showNonEmpty(v)(r(v)))(I) + ")");
    });
  };

  d.functorNonEmptyList = a;
  d.foldableNonEmptyList = z;
})(PS);

(function (a) {
  a["Data.List.NonEmpty"] = a["Data.List.NonEmpty"] || {};
  var d = a["Data.List.NonEmpty"],
      e = a["Data.List.Types"],
      k = a["Data.NonEmpty"];

  a = function () {
    var g = k.singleton(e.plusList);
    return function (b) {
      return e.NonEmptyList(g(b));
    };
  }();

  d.singleton = a;

  d.head = function (g) {
    return g.value0;
  };
})(PS);

(function (a) {
  a["null"] = null;

  a.nullable = function (d, e, k) {
    return null == d ? e : k(d);
  };

  a.notNull = function (d) {
    return d;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var d = a["Data.Nullable"],
      e = a["Data.Nullable"],
      k = a["Data.Maybe"];
  a = k.maybe(e["null"])(e.notNull);

  d.toMaybe = function (g) {
    return e.nullable(g, k.Nothing.value, k.Just.create);
  };

  d.toNullable = a;
})(PS);

(function (a) {
  var d = function () {
    function e(p, F, z, y) {
      this.tag = p;
      this._1 = F;
      this._2 = z;
      this._3 = y;
    }

    function k(p) {
      var F = function F(z, y, x) {
        return new e(p, z, y, x);
      };

      F.tag = p;
      return F;
    }

    function g(p) {
      return new e("Pure", void 0);
    }

    function b(p) {
      try {
        p();
      } catch (F) {
        setTimeout(function () {
          throw F;
        }, 0);
      }
    }

    function f(p, F, z) {
      try {
        return F(z());
      } catch (y) {
        return p(y);
      }
    }

    function c(p, F, z) {
      try {
        return F(z)();
      } catch (y) {
        return z(p(y))(), g;
      }
    }

    function m(p, F, z) {
      function y(S) {
        for (var w, N, M;;) {
          switch (M = N = w = null, D) {
            case 2:
              D = 1;

              try {
                v = K(v), null === G ? K = null : (K = G._1, G = G._2);
              } catch (Y) {
                D = 5, I = p.left(Y), v = null;
              }

              break;

            case 3:
              p.isLeft(v) ? (D = 5, I = v, v = null) : null === K ? D = 5 : (D = 2, v = p.fromRight(v));
              break;

            case 1:
              switch (v.tag) {
                case "Bind":
                  K && (G = new e("Cons", K, G));
                  K = v._2;
                  D = 1;
                  v = v._1;
                  break;

                case "Pure":
                  null === K ? (D = 5, v = p.right(v._1)) : (D = 2, v = v._1);
                  break;

                case "Sync":
                  D = 3;
                  v = f(p.left, p.right, v._1);
                  break;

                case "Async":
                  D = 4;
                  v = c(p.left, v._1, function (Y) {
                    return function () {
                      r === S && (r++, n.enqueue(function () {
                        r === S + 1 && (D = 3, v = Y, y(r));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  D = 5;
                  I = p.left(v._1);
                  v = null;
                  break;

                case "Catch":
                  E = null === K ? new e("Cons", v, E, L) : new e("Cons", v, new e("Cons", new e("Resume", K, G), E, L), L);
                  G = K = null;
                  D = 1;
                  v = v._1;
                  break;

                case "Bracket":
                  T++;
                  E = null === K ? new e("Cons", v, E, L) : new e("Cons", v, new e("Cons", new e("Resume", K, G), E, L), L);
                  G = K = null;
                  D = 1;
                  v = v._1;
                  break;

                case "Fork":
                  D = 3;
                  w = m(p, F, v._2);
                  F && F.register(w);
                  v._1 && w.run();
                  v = p.right(w);
                  break;

                case "Sequential":
                  D = 1, v = q(p, F, v._1);
              }

              break;

            case 5:
              G = K = null;
              if (null === E) D = 6, v = L || I || v;else switch (w = E._3, M = E._1, E = E._2, M.tag) {
                case "Catch":
                  L && L !== w && 0 === T ? D = 5 : I && (D = 1, v = M._2(p.fromLeft(I)), I = null);
                  break;

                case "Resume":
                  L && L !== w && 0 === T || I ? D = 5 : (K = M._1, G = M._2, D = 2, v = p.fromRight(v));
                  break;

                case "Bracket":
                  T--;
                  null === I && (N = p.fromRight(v), E = new e("Cons", new e("Release", M._2, N), E, w), L === w || 0 < T) && (D = 1, v = M._3(N));
                  break;

                case "Release":
                  E = new e("Cons", new e("Finalized", v, I), E, L);
                  D = 1;
                  v = L && L !== w && 0 === T ? M._1.killed(p.fromLeft(L))(M._2) : I ? M._1.failed(p.fromLeft(I))(M._2) : M._1.completed(p.fromRight(v))(M._2);
                  I = null;
                  T++;
                  break;

                case "Finalizer":
                  T++;
                  E = new e("Cons", new e("Finalized", v, I), E, L);
                  D = 1;
                  v = M._1;
                  break;

                case "Finalized":
                  T--, D = 5, v = M._1, I = M._2;
              }
              break;

            case 6:
              for (var J in A) {
                A.hasOwnProperty(J) && (C = C && A[J].rethrow, b(A[J].handler(v)));
              }

              A = null;
              L && I ? setTimeout(function () {
                throw p.fromLeft(I);
              }, 0) : p.isLeft(v) && C && setTimeout(function () {
                if (C) throw p.fromLeft(v);
              }, 0);
              return;

            case 0:
              D = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function x(S) {
        return function () {
          if (6 === D) return C = C && S.rethrow, S.handler(v)(), function () {};
          var w = W++;
          A = A || {};
          A[w] = S;
          return function () {
            null !== A && delete A[w];
          };
        };
      }

      var r = 0,
          D = 0,
          v = z,
          I = null,
          L = null,
          K = null,
          G = null,
          E = null,
          T = 0,
          W = 0,
          A = null,
          C = !0;
      return {
        kill: function kill(S, w) {
          return function () {
            if (6 === D) return w(p.right(void 0))(), function () {};
            var N = x({
              rethrow: !1,
              handler: function handler() {
                return w(p.right(void 0));
              }
            })();

            switch (D) {
              case 0:
                L = p.left(S);
                D = 6;
                v = L;
                y(r);
                break;

              case 4:
                null === L && (L = p.left(S));
                0 === T && (4 === D && (E = new e("Cons", new e("Finalizer", v(S)), E, L)), D = 5, I = v = null, y(++r));
                break;

              default:
                null === L && (L = p.left(S)), 0 === T && (D = 5, I = v = null);
            }

            return N;
          };
        },
        join: function join(S) {
          return function () {
            var w = x({
              rethrow: !1,
              handler: S
            })();
            0 === D && y(r);
            return w;
          };
        },
        onComplete: x,
        isSuspended: function isSuspended() {
          return 0 === D;
        },
        run: function run() {
          0 === D && (n.isDraining() ? y(r) : n.enqueue(function () {
            y(r);
          }));
        }
      };
    }

    function l(p, F, z, y) {
      function x(A, C, S) {
        var w = C,
            N = null,
            M = null,
            J = 0;
        C = {};

        a: for (;;) {
          var Y = null;

          switch (w.tag) {
            case "Forked":
              w._3 === t && (Y = L[w._1], C[J++] = Y.kill(A, function (aa) {
                return function () {
                  J--;
                  0 === J && S(aa)();
                };
              }));
              if (null === N) break a;
              w = N._2;
              null === M ? N = null : (N = M._1, M = M._2);
              break;

            case "Map":
              w = w._2;
              break;

            case "Apply":
            case "Alt":
              N && (M = new e("Cons", N, M)), N = w, w = w._1;
          }
        }

        if (0 === J) S(p.right(void 0))();else for (A = 0, Y = J; A < Y; A++) {
          C[A] = C[A]();
        }
        return C;
      }

      function r(A, C, S) {
        var w, N;

        if (p.isLeft(A)) {
          var M = A;
          var J = null;
        } else J = A, M = null;

        for (;;) {
          var Y = N = w = A = null;
          if (null !== T) break;

          if (null === C) {
            y(M || J)();
            break;
          }

          if (C._3 !== t) break;

          switch (C.tag) {
            case "Map":
              null === M ? (C._3 = p.right(C._1(p.fromRight(J))), J = C._3) : C._3 = M;
              break;

            case "Apply":
              A = C._1._3;
              w = C._2._3;

              if (M) {
                if (C._3 = M, N = !0, Y = K++, G[Y] = x(E, M === A ? C._2 : C._1, function () {
                  return function () {
                    delete G[Y];
                    N ? N = !1 : null === S ? r(M, null, null) : r(M, S._1, S._2);
                  };
                }), N) {
                  N = !1;
                  return;
                }
              } else {
                if (A === t || w === t) return;
                J = p.right(p.fromRight(A)(p.fromRight(w)));
                C._3 = J;
              }

              break;

            case "Alt":
              A = C._1._3;
              w = C._2._3;
              if (A === t && p.isLeft(w) || w === t && p.isLeft(A)) return;
              if (A !== t && p.isLeft(A) && w !== t && p.isLeft(w)) M = J === A ? w : A, J = null, C._3 = M;else if (C._3 = J, N = !0, Y = K++, G[Y] = x(E, J === A ? C._2 : C._1, function () {
                return function () {
                  delete G[Y];
                  N ? N = !1 : null === S ? r(J, null, null) : r(J, S._1, S._2);
                };
              }), N) {
                N = !1;
                return;
              }
          }

          null === S ? C = null : (C = S._1, S = S._2);
        }
      }

      function D(A) {
        return function (C) {
          return function () {
            delete L[A._1];
            A._3 = C;
            r(C, A._2._1, A._2._2);
          };
        };
      }

      function v(A, C) {
        T = p.left(A);
        var S;

        for (S in G) {
          if (G.hasOwnProperty(S)) {
            var w = G[S];

            for (S in w) {
              if (w.hasOwnProperty(S)) w[S]();
            }
          }
        }

        G = null;
        var N = x(A, W, C);
        return function (M) {
          return new e("Async", function (J) {
            return function () {
              for (var Y in N) {
                if (N.hasOwnProperty(Y)) N[Y]();
              }

              return g;
            };
          });
        };
      }

      var I = 0,
          L = {},
          K = 0,
          G = {},
          E = Error("[ParAff] Early exit"),
          T = null,
          W = t;

      (function () {
        var A = 1,
            C = z,
            S = null,
            w = null;

        a: for (;;) {
          switch (A) {
            case 1:
              switch (C.tag) {
                case "Map":
                  S && (w = new e("Cons", S, w));
                  S = new e("Map", C._1, t, t);
                  C = C._2;
                  break;

                case "Apply":
                  S && (w = new e("Cons", S, w));
                  S = new e("Apply", t, C._2, t);
                  C = C._1;
                  break;

                case "Alt":
                  S && (w = new e("Cons", S, w));
                  S = new e("Alt", t, C._2, t);
                  C = C._1;
                  break;

                default:
                  var N = I++;
                  A = 5;
                  var M = C;
                  C = new e("Forked", N, new e("Cons", S, w), t);
                  M = m(p, F, M);
                  M.onComplete({
                    rethrow: !1,
                    handler: D(C)
                  })();
                  L[N] = M;
                  F && F.register(M);
              }

              break;

            case 5:
              if (null === S) break a;
              S._1 === t ? (S._1 = C, A = 1, C = S._2, S._2 = t) : (S._2 = C, C = S, null === w ? S = null : (S = w._1, w = w._2));
          }
        }

        W = C;

        for (N = 0; N < I; N++) {
          L[N].run();
        }
      })();

      return function (A) {
        return new e("Async", function (C) {
          return function () {
            return v(A, C);
          };
        });
      };
    }

    function q(p, F, z) {
      return new e("Async", function (y) {
        return function () {
          return l(p, F, z, y);
        };
      });
    }

    var t = {},
        n = function () {
      function p() {
        for (x = !0; 0 !== F;) {
          F--;
          var r = y[z];
          y[z] = void 0;
          z = (z + 1) % 1024;
          r();
        }

        x = !1;
      }

      var F = 0,
          z = 0,
          y = Array(1024),
          x = !1;
      return {
        isDraining: function isDraining() {
          return x;
        },
        enqueue: function enqueue(r) {
          if (1024 === F) {
            var D = x;
            p();
            x = D;
          }

          y[(z + F) % 1024] = r;
          F++;
          x || p();
        }
      };
    }();

    e.EMPTY = t;
    e.Pure = k("Pure");
    e.Throw = k("Throw");
    e.Catch = k("Catch");
    e.Sync = k("Sync");
    e.Async = k("Async");
    e.Bind = k("Bind");
    e.Bracket = k("Bracket");
    e.Fork = k("Fork");
    e.Seq = k("Sequential");
    e.ParMap = k("Map");
    e.ParApply = k("Apply");
    e.ParAlt = k("Alt");
    e.Fiber = m;

    e.Supervisor = function (p) {
      var F = {},
          z = 0,
          y = 0;
      return {
        register: function register(x) {
          var r = z++;
          x.onComplete({
            rethrow: !0,
            handler: function handler(D) {
              return function () {
                y--;
                delete F[r];
              };
            }
          })();
          F[r] = x;
          y++;
        },
        isEmpty: function isEmpty() {
          return 0 === y;
        },
        killAll: function killAll(x, r) {
          return function () {
            function D(K) {
              I[K] = F[K].kill(x, function (G) {
                return function () {
                  delete I[K];
                  v--;
                  p.isLeft(G) && p.fromLeft(G) && setTimeout(function () {
                    throw p.fromLeft(G);
                  }, 0);
                  0 === v && r();
                };
              })();
            }

            if (0 === y) return r();
            var v = 0,
                I = {},
                L;

            for (L in F) {
              F.hasOwnProperty(L) && (v++, D(L));
            }

            F = {};
            y = z = 0;
            return function (K) {
              return new e("Sync", function () {
                for (var G in I) {
                  if (I.hasOwnProperty(G)) I[G]();
                }
              });
            };
          };
        }
      };
    };

    e.Scheduler = n;
    e.nonCanceler = g;
    return e;
  }();

  a._pure = d.Pure;
  a._throwError = d.Throw;

  a._catchError = function (e) {
    return function (k) {
      return d.Catch(e, k);
    };
  };

  a._map = function (e) {
    return function (k) {
      return k.tag === d.Pure.tag ? d.Pure(e(k._1)) : d.Bind(k, function (g) {
        return d.Pure(e(g));
      });
    };
  };

  a._bind = function (e) {
    return function (k) {
      return d.Bind(e, k);
    };
  };

  a._liftEffect = d.Sync;

  a._parAffMap = function (e) {
    return function (k) {
      return d.ParMap(e, k);
    };
  };

  a._parAffApply = function (e) {
    return function (k) {
      return d.ParApply(e, k);
    };
  };

  a._parAffAlt = function (e) {
    return function (k) {
      return d.ParAlt(e, k);
    };
  };

  a.makeAff = d.Async;

  a._makeFiber = function (e, k) {
    return function () {
      return d.Fiber(e, null, k);
    };
  };

  a._delay = function () {
    function e(k, g) {
      return 0 === k && "undefined" !== typeof setImmediate ? setImmediate(g) : setTimeout(g, k);
    }

    return function (k, g) {
      return d.Async(function (b) {
        return function () {
          var f = e(g, b(k()));
          return function () {
            return d.Sync(function () {
              var c = 0 === g && "undefined" !== typeof clearImmediate ? clearImmediate(f) : clearTimeout(f);
              return k(c);
            });
          };
        };
      });
    };
  }();

  a._sequential = d.Seq;
})(PS["Effect.Aff"] = PS["Effect.Aff"] || {});

(function (a) {
  a["Control.Parallel.Class"] = a["Control.Parallel.Class"] || {};
  a = a["Control.Parallel.Class"];

  a.parallel = function (d) {
    return d.parallel;
  };

  a.sequential = function (d) {
    return d.sequential;
  };

  a.Parallel = function (d, e, k, g) {
    this.Applicative1 = d;
    this.Monad0 = e;
    this.parallel = k;
    this.sequential = g;
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var d = a["Control.Category"],
      e = a["Control.Parallel.Class"],
      k = a["Data.Foldable"],
      g = function g(b) {
    return function (f) {
      return function (c) {
        var m = e.sequential(b),
            l = k.traverse_(b.Applicative1())(f)(function () {
          var q = e.parallel(b);
          return function (t) {
            return q(c(t));
          };
        }());
        return function (q) {
          return m(l(q));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (b) {
    return function (f) {
      return g(b)(f)(d.identity(d.categoryFn));
    };
  };
})(PS);

(function (a) {
  a.pureE = function (d) {
    return function () {
      return d;
    };
  };

  a.bindE = function (d) {
    return function (e) {
      return function () {
        return e(d())();
      };
    };
  };
})(PS.Effect = PS.Effect || {});

(function (a) {
  a.Effect = a.Effect || {};
  var d = a.Effect,
      e = a.Effect,
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      f = a["Control.Monad"],
      c = a["Data.Functor"],
      m = a["Data.Monoid"],
      l = a["Data.Semigroup"];
  a = new f.Monad(function () {
    return n;
  }, function () {
    return q;
  });
  var q = new b.Bind(function () {
    return t;
  }, e.bindE),
      t = new g.Apply(function () {
    return p;
  }, f.ap(a)),
      n = new k.Applicative(function () {
    return t;
  }, e.pureE),
      p = new c.Functor(k.liftA1(n));
  d.functorEffect = p;
  d.applyEffect = t;
  d.applicativeEffect = n;
  d.bindEffect = q;
  d.monadEffect = a;

  d.monoidEffect = function (F) {
    return new m.Monoid(function () {
      var z = F.Semigroup0();
      return new l.Semigroup(g.lift2(t)(l.append(z)));
    }, e.pureE(m.mempty(F)));
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var d = a["Effect.Class"],
      e = a["Control.Category"],
      k = a.Effect;

  a = function a(g, b) {
    this.Monad0 = g;
    this.liftEffect = b;
  };

  e = new a(function () {
    return k.monadEffect;
  }, e.identity(e.categoryFn));

  d.liftEffect = function (g) {
    return g.liftEffect;
  };

  d.MonadEffect = a;
  d.monadEffectEffect = e;
})(PS);

(function (a) {
  a.showErrorImpl = function (d) {
    return d.stack || d.toString();
  };

  a.error = function (d) {
    return Error(d);
  };

  a.message = function (d) {
    return d.message;
  };

  a.throwException = function (d) {
    return function () {
      throw d;
    };
  };

  a.catchException = function (d) {
    return function (e) {
      return function () {
        try {
          return e();
        } catch (k) {
          return k instanceof Error || "[object Error]" === Object.prototype.toString.call(k) ? d(k)() : d(Error(k.toString()))();
        }
      };
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var d = a["Effect.Exception"],
      e = a["Effect.Exception"],
      k = a["Control.Applicative"],
      g = a["Data.Either"],
      b = a["Data.Functor"],
      f = a.Effect;
  a = new a["Data.Show"].Show(e.showErrorImpl);

  d["throw"] = function (c) {
    return e.throwException(e.error(c));
  };

  d["try"] = function (c) {
    return e.catchException(function () {
      var m = k.pure(f.applicativeEffect);
      return function (l) {
        return m(g.Left.create(l));
      };
    }())(b.map(f.functorEffect)(g.Right.create)(c));
  };

  d.showError = a;
  d.error = e.error;
  d.message = e.message;
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
      e = a.Partial;

  a["Partial.Unsafe"].unsafeCrashWith = function (k) {
    return d.unsafePartial(function (g) {
      return e.crashWith()(k);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var d = a["Effect.Aff"],
      e = a["Effect.Aff"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      f = a["Control.Bind"],
      c = a["Control.Monad"],
      m = a["Control.Monad.Error.Class"],
      l = a["Control.Parallel"],
      q = a["Control.Parallel.Class"],
      t = a["Control.Plus"],
      n = a["Data.Either"],
      p = a["Data.Foldable"],
      F = a["Data.Function"],
      z = a["Data.Functor"],
      y = a["Data.Monoid"],
      x = a["Data.Semigroup"],
      r = a["Data.Unit"],
      D = a.Effect,
      v = a["Effect.Class"],
      I = a["Effect.Exception"],
      L = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var K = new z.Functor(e._parAffMap),
      G = new z.Functor(e._map),
      E = function () {
    return {
      isLeft: function isLeft(la) {
        if (la instanceof n.Left) return !0;
        if (la instanceof n.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [la.constructor.name]);
      },
      fromLeft: function fromLeft(la) {
        if (la instanceof n.Left) return la.value0;
        if (la instanceof n.Right) return L.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [la.constructor.name]);
      },
      fromRight: function fromRight(la) {
        if (la instanceof n.Right) return la.value0;
        if (la instanceof n.Left) return L.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [la.constructor.name]);
      },
      left: n.Left.create,
      right: n.Right.create
    };
  }(),
      T = function T(la) {
    return function () {
      var oa = e._makeFiber(E, la)();

      oa.run();
      return oa;
    };
  },
      W = new b.Apply(function () {
    return K;
  }, e._parAffApply),
      A = new c.Monad(function () {
    return w;
  }, function () {
    return C;
  }),
      C = new f.Bind(function () {
    return S;
  }, e._bind),
      S = new b.Apply(function () {
    return G;
  }, c.ap(A)),
      w = new g.Applicative(function () {
    return S;
  }, e._pure),
      N = new v.MonadEffect(function () {
    return A;
  }, e._liftEffect);

  b = function () {
    var la = v.liftEffect(N);
    return function (oa) {
      return F["const"](la(oa));
    };
  }();

  var M = new m.MonadThrow(function () {
    return A;
  }, e._throwError),
      J = new m.MonadError(function () {
    return M;
  }, e._catchError),
      Y = function Y(la) {
    return function (oa) {
      return T(f.bindFlipped(C)(function () {
        var va = v.liftEffect(N);
        return function (ca) {
          return va(la(ca));
        };
      }())(m["try"](J)(oa)));
    };
  },
      aa = new q.Parallel(function () {
    return u;
  }, function () {
    return A;
  }, a.unsafeCoerce, e._sequential),
      u = new g.Applicative(function () {
    return W;
  }, function () {
    var la = q.parallel(aa),
        oa = g.pure(w);
    return function (va) {
      return la(oa(va));
    };
  }()),
      wa = new x.Semigroup(function (la) {
    return function (oa) {
      return function (va) {
        return l.parSequence_(aa)(p.foldableArray)([la(va), oa(va)]);
      };
    };
  });

  x = F["const"](g.pure(w)(r.unit));
  var sa = new y.Monoid(function () {
    return wa;
  }, x);
  r = e.makeAff(function (la) {
    return g.pure(D.applicativeEffect)(y.mempty(sa));
  });
  var ya = new k.Alt(function () {
    return K;
  }, e._parAffAlt),
      da = new k.Alt(function () {
    return G;
  }, function (la) {
    return function (oa) {
      return m.catchError(J)(la)(F["const"](oa));
    };
  });
  k = new t.Plus(function () {
    return da;
  }, m.throwError(M)(I.error("Always fails")));
  t = new t.Plus(function () {
    return ya;
  }, q.parallel(aa)(t.empty(k)));

  d.runAff_ = function (la) {
    return function (oa) {
      return z["void"](D.functorEffect)(Y(la)(oa));
    };
  };

  d.delay = function (la) {
    return e._delay(n.Right.create, la);
  };

  d.never = r;
  d.nonCanceler = x;
  d.effectCanceler = b;
  d.functorAff = G;
  d.applicativeAff = w;
  d.bindAff = C;
  d.monadErrorAff = J;
  d.monadEffectAff = N;
  d.altParAff = ya;
  d.plusParAff = t;
  d.parallelAff = aa;
  d.monoidCanceler = sa;
  d.makeAff = e.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.Compat"] = a["Effect.Aff.Compat"] || {};
  var d = a["Data.Either"],
      e = a["Effect.Aff"];

  a["Effect.Aff.Compat"].fromEffectFnAff = function (k) {
    return e.makeAff(function (g) {
      return function () {
        var b = k(function (f) {
          return g(d.Left.create(f))();
        }, function (f) {
          return g(d.Right.create(f))();
        });
        return function (f) {
          return e.makeAff(function (c) {
            return function () {
              b(f, function (m) {
                return c(d.Left.create(m))();
              }, function (m) {
                return c(d.Right.create(m))();
              });
              return e.nonCanceler;
            };
          });
        };
      };
    });
  };
})(PS);

(function (a) {
  a.unsafeToForeign = function (d) {
    return d;
  };

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
      e = a.Foreign,
      k = a["Control.Applicative"],
      g = a["Control.Monad.Error.Class"],
      b = a["Control.Monad.Except.Trans"],
      f = a["Data.Boolean"],
      c = a["Data.Identity"],
      m = a["Data.List.NonEmpty"],
      l = a["Data.Show"],
      q = function () {
    function r(D) {
      this.value0 = D;
    }

    r.create = function (D) {
      return new r(D);
    };

    return r;
  }(),
      t = function () {
    function r(D, v) {
      this.value0 = D;
      this.value1 = v;
    }

    r.create = function (D) {
      return function (v) {
        return new r(D, v);
      };
    };

    return r;
  }(),
      n = function () {
    function r(D, v) {
      this.value0 = D;
      this.value1 = v;
    }

    r.create = function (D) {
      return function (v) {
        return new r(D, v);
      };
    };

    return r;
  }(),
      p = function () {
    function r(D, v) {
      this.value0 = D;
      this.value1 = v;
    }

    r.create = function (D) {
      return function (v) {
        return new r(D, v);
      };
    };

    return r;
  }(),
      F = new l.Show(function (r) {
    if (r instanceof q) return "(ForeignError " + (l.show(l.showString)(r.value0) + ")");
    if (r instanceof n) return "(ErrorAtIndex " + (l.show(l.showInt)(r.value0) + (" " + (l.show(F)(r.value1) + ")")));
    if (r instanceof p) return "(ErrorAtProperty " + (l.show(l.showString)(r.value0) + (" " + (l.show(F)(r.value1) + ")")));
    if (r instanceof t) return "(TypeMismatch " + (l.show(l.showString)(r.value0) + (" " + (l.show(l.showString)(r.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [r.constructor.name]);
  }),
      z = function z(r) {
    if (r instanceof q) return r.value0;
    if (r instanceof n) return "Error at array index " + (l.show(l.showInt)(r.value0) + (": " + z(r.value1)));
    if (r instanceof p) return "Error at property " + (l.show(l.showString)(r.value0) + (": " + z(r.value1)));
    if (r instanceof t) return "Type mismatch: expected " + (r.value0 + (", found " + r.value1));
    throw Error("Failed pattern match at Foreign (line 72, column 1 - line 72, column 45): " + [r.constructor.name]);
  },
      y = function () {
    var r = g.throwError(b.monadThrowExceptT(c.monadIdentity));
    return function (D) {
      return r(m.singleton(D));
    };
  }();

  a = function a(r) {
    return function (D) {
      if (e.tagOf(D) === r) return k.pure(b.applicativeExceptT(c.monadIdentity))(e.unsafeFromForeign(D));
      if (f.otherwise) return y(new t(r, e.tagOf(D)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [r.constructor.name, D.constructor.name]);
    };
  };

  var x = a("String");
  d.ForeignError = q;
  d.renderForeignError = z;
  d.unsafeReadTagged = a;
  d.readString = x;
  d.fail = y;
  d.showForeignError = F;
  d.unsafeToForeign = e.unsafeToForeign;
})(PS);

(function (a) {
  a.Affjax = a.Affjax || {};

  var d = a.Affjax,
      e = a.Affjax,
      k = a["Affjax.RequestBody"],
      g = a["Affjax.RequestHeader"],
      b = a["Affjax.ResponseFormat"],
      f = a["Affjax.ResponseHeader"],
      c = a["Control.Applicative"],
      m = a["Control.Bind"],
      l = a["Control.Monad.Error.Class"],
      q = a["Control.Monad.Except"],
      t = a["Control.Monad.Except.Trans"],
      n = a["Data.Argonaut.Core"],
      p = a["Data.Argonaut.Parser"],
      F = a["Data.Array"],
      z = a["Data.Either"],
      y = a["Data.Eq"],
      x = a["Data.Foldable"],
      r = a["Data.FormURLEncoded"],
      D = a["Data.Function"],
      v = a["Data.Functor"],
      I = a["Data.HTTP.Method"],
      L = a["Data.HeytingAlgebra"],
      K = a["Data.Identity"],
      G = a["Data.List.NonEmpty"],
      E = a["Data.Maybe"],
      T = a["Data.Nullable"],
      W = a["Data.Unit"],
      A = a["Effect.Aff"],
      C = a["Effect.Aff.Compat"],
      S = a["Effect.Exception"],
      w = a.Foreign,
      N = function () {
    function da(la) {
      this.value0 = la;
    }

    da.create = function (la) {
      return new da(la);
    };

    return da;
  }(),
      M = function () {
    function da(la, oa) {
      this.value0 = la;
      this.value1 = oa;
    }

    da.create = function (la) {
      return function (oa) {
        return new da(la, oa);
      };
    };

    return da;
  }(),
      J = function () {
    function da(la) {
      this.value0 = la;
    }

    da.create = function (la) {
      return new da(la);
    };

    return da;
  }(),
      Y = function Y(da) {
    var la = function la(V) {
      return "" === V ? c.pure(t.applicativeExceptT(K.monadIdentity))(n.jsonEmptyObject) : z.either(function (H) {
        return w.fail(w.ForeignError.create(H));
      })(c.pure(t.applicativeExceptT(K.monadIdentity)))(p.jsonParser(V));
    },
        oa = function () {
      if (da.responseFormat instanceof b.ArrayBuffer) return w.unsafeReadTagged("ArrayBuffer");
      if (da.responseFormat instanceof b.Blob) return w.unsafeReadTagged("Blob");
      if (da.responseFormat instanceof b.Document) return w.unsafeReadTagged("Document");
      if (da.responseFormat instanceof b.Json) return m.composeKleisliFlipped(t.bindExceptT(K.monadIdentity))(function (V) {
        return da.responseFormat.value0(la(V));
      })(w.unsafeReadTagged("String"));
      if (da.responseFormat instanceof b.String) return w.unsafeReadTagged("String");
      if (da.responseFormat instanceof b.Ignore) return D["const"](da.responseFormat.value0(c.pure(t.applicativeExceptT(K.monadIdentity))(W.unit)));
      throw Error("Failed pattern match at Affjax (line 237, column 18 - line 243, column 57): " + [da.responseFormat.constructor.name]);
    }(),
        va = function va(V) {
      if (V instanceof k.ArrayView) return z.Right.create(V.value0(w.unsafeToForeign));
      if (V instanceof k.Blob || V instanceof k.Document || V instanceof k.String || V instanceof k.FormData) return z.Right.create(w.unsafeToForeign(V.value0));
      if (V instanceof k.FormURLEncoded) return z.note("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(v.map(E.functorMaybe)(w.unsafeToForeign)(r.encode(V.value0)));
      if (V instanceof k.Json) return z.Right.create(w.unsafeToForeign(n.stringify(V.value0)));
      throw Error("Failed pattern match at Affjax (line 203, column 20 - line 218, column 69): " + [V.constructor.name]);
    },
        ca = function ca(V) {
      return function (H) {
        return V instanceof E.Just && !x.any(x.foldableArray)(L.heytingAlgebraBoolean)(D.on(y.eq(y.eqString))(g.name)(V.value0))(H) ? F.snoc(H)(V.value0) : H;
      };
    },
        fa = function fa(V) {
      return ca(v.map(E.functorMaybe)(g.ContentType.create)(m.bindFlipped(E.bindMaybe)(k.toMediaType)(V)))(ca(v.map(E.functorMaybe)(g.Accept.create)(b.toMediaType(da.responseFormat)))(da.headers));
    },
        ta = function ta(V) {
      return {
        method: I.print(da.method),
        url: da.url,
        headers: v.map(v.functorArray)(function (H) {
          return {
            field: g.name(H),
            value: g.value(H)
          };
        })(fa(da.content)),
        content: V,
        responseType: b.toResponseType(da.responseFormat),
        username: T.toNullable(da.username),
        password: T.toNullable(da.password),
        withCredentials: da.withCredentials
      };
    },
        Da = function Da(V) {
      return v.mapFlipped(A.functorAff)(l["try"](A.monadErrorAff)(C.fromEffectFnAff(e._ajax(f.ResponseHeader.create, ta(V)))))(function (H) {
        if (H instanceof z.Right) {
          var R = q.runExcept(oa(H.value0.body));
          if (R instanceof z.Left) return new z.Left(new M(G.head(R.value0), H.value0));
          if (R instanceof z.Right) return new z.Right({
            body: R.value0,
            headers: H.value0.headers,
            status: H.value0.status,
            statusText: H.value0.statusText
          });
          throw Error("Failed pattern match at Affjax (line 184, column 9 - line 186, column 52): " + [R.constructor.name]);
        }

        if (H instanceof z.Left) return new z.Left(new J(H.value0));
        throw Error("Failed pattern match at Affjax (line 182, column 86 - line 188, column 28): " + [H.constructor.name]);
      });
    };

    if (da.content instanceof E.Nothing) return Da(T.toNullable(E.Nothing.value));

    if (da.content instanceof E.Just) {
      va = va(da.content.value0);
      if (va instanceof z.Right) return Da(T.toNullable(new E.Just(va.value0)));
      if (va instanceof z.Left) return c.pure(A.applicativeAff)(new z.Left(new N(va.value0)));
      throw Error("Failed pattern match at Affjax (line 173, column 7 - line 177, column 48): " + [va.constructor.name]);
    }

    throw Error("Failed pattern match at Affjax (line 169, column 3 - line 177, column 48): " + [da.content.constructor.name]);
  },
      aa = new z.Left(I.GET.value),
      u = [],
      wa = E.Nothing.value,
      sa = E.Nothing.value,
      ya = E.Nothing.value;

  d.printError = function (da) {
    if (da instanceof N) return "There was a problem with the request content: " + da.value0;
    if (da instanceof M) return "There was a problem with the response body: " + w.renderForeignError(da.value0);
    if (da instanceof J) return "There was a problem making the request: " + S.message(da.value0);
    throw Error("Failed pattern match at Affjax (line 91, column 14 - line 97, column 66): " + [da.constructor.name]);
  };

  d.get = function (da) {
    return function (la) {
      return Y({
        method: aa,
        url: la,
        headers: u,
        content: wa,
        username: sa,
        password: ya,
        withCredentials: !1,
        responseFormat: da
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Alternative"] = a["Control.Alternative"] || {};

  a["Control.Alternative"].Alternative = function (d, e) {
    this.Applicative0 = d;
    this.Plus1 = e;
  };
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var d = a["Control.Monad.Rec.Class"],
      e = a["Data.Bifunctor"],
      k = a["Data.Either"],
      g = function () {
    function m(l) {
      this.value0 = l;
    }

    m.create = function (l) {
      return new m(l);
    };

    return m;
  }(),
      b = function () {
    function m(l) {
      this.value0 = l;
    }

    m.create = function (l) {
      return new m(l);
    };

    return m;
  }();

  a = function a(m, l) {
    this.Monad0 = m;
    this.tailRecM = l;
  };

  var f = function f(m) {
    return function (l) {
      l = m(l);

      for (var q = !1, t; !q;) {
        if (t = l, t instanceof g) l = m(t.value0), t = void 0;else if (t instanceof b) q = !0, t = t.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [t.constructor.name]);
      }

      return t;
    };
  },
      c = new a(function () {
    return k.monadEither;
  }, function (m) {
    return function (l) {
      return f(function (q) {
        if (q instanceof k.Left) return new b(new k.Left(q.value0));
        if (q instanceof k.Right && q.value0 instanceof g) return new g(m(q.value0.value0));
        if (q instanceof k.Right && q.value0 instanceof b) return new b(new k.Right(q.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [q.constructor.name]);
      })(m(l));
    };
  });

  e = new e.Bifunctor(function (m) {
    return function (l) {
      return function (q) {
        if (q instanceof g) return new g(m(q.value0));
        if (q instanceof b) return new b(l(q.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [m.constructor.name, l.constructor.name, q.constructor.name]);
      };
    };
  });
  d.Loop = g;
  d.Done = b;
  d.MonadRec = a;

  d.tailRecM = function (m) {
    return m.tailRecM;
  };

  d.bifunctorStep = e;
  d.monadRecEither = c;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var d = a["Data.List"],
      e = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Control.Monad.Rec.Class"],
      f = a["Data.Bifunctor"],
      c = a["Data.Functor"],
      m = a["Data.List.Types"],
      l = a["Data.Unit"],
      q = function () {
    return function (t) {
      return function (n) {
        for (var p = t, F = !1, z; !F;) {
          z = p;
          var y = n;
          if (y instanceof m.Nil) F = !0;else {
            if (y instanceof m.Cons) p = new m.Cons(y.value0, z), n = y.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [z.constructor.name, y.constructor.name]);
            z = void 0;
          }
        }

        return z;
      };
    }(m.Nil.value);
  }();

  d.manyRec = function (t) {
    return function (n) {
      return function (p) {
        return b.tailRecM(t)(function (F) {
          return g.bind(t.Monad0().Bind1())(e.alt(n.Plus1().Alt0())(c.map(n.Plus1().Alt0().Functor0())(b.Loop.create)(p))(k.pure(n.Applicative0())(new b.Done(l.unit))))(function (z) {
            return k.pure(n.Applicative0())(f.bimap(b.bifunctorStep)(function (y) {
              return new m.Cons(y, F);
            })(function (y) {
              return q(F);
            })(z));
          });
        })(m.Nil.value);
      };
    };
  };

  d.reverse = q;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var d = a["Data.Tuple"];
  a = a["Data.Functor"];

  var e = function () {
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
      return new e(g.value0, k(g.value1));
    };
  });
  d.Tuple = e;

  d.fst = function (k) {
    return k.value0;
  };

  d.snd = function (k) {
    return k.value1;
  };

  d.functorTuple = a;
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var d = a["Data.CatQueue"],
      e = a["Data.List"],
      k = a["Data.List.Types"],
      g = a["Data.Maybe"],
      b = a["Data.Tuple"],
      f = function () {
    function c(m, l) {
      this.value0 = m;
      this.value1 = l;
    }

    c.create = function (m) {
      return function (l) {
        return new c(m, l);
      };
    };

    return c;
  }();

  a = new f(k.Nil.value, k.Nil.value);
  d.empty = a;

  d["null"] = function (c) {
    return c.value0 instanceof k.Nil && c.value1 instanceof k.Nil ? !0 : !1;
  };

  d.snoc = function (c) {
    return function (m) {
      return new f(c.value0, new k.Cons(m, c.value1));
    };
  };

  d.uncons = function (c) {
    for (var m = !1, l; !m;) {
      if (l = c, l.value0 instanceof k.Nil && l.value1 instanceof k.Nil) m = !0, l = g.Nothing.value;else if (l.value0 instanceof k.Nil) c = new f(e.reverse(l.value1), k.Nil.value), l = void 0;else if (l.value0 instanceof k.Cons) m = !0, l = new g.Just(new b.Tuple(l.value0.value0, new f(l.value0.value1, l.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [l.constructor.name]);
    }

    return l;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var d = a["Data.CatList"],
      e = a["Data.CatQueue"],
      k = a["Data.List.Types"],
      g = a["Data.Maybe"],
      b = a["Data.Semigroup"],
      f = a["Data.Tuple"],
      c = function () {
    function t() {}

    t.value = new t();
    return t;
  }(),
      m = function () {
    function t(n, p) {
      this.value0 = n;
      this.value1 = p;
    }

    t.create = function (n) {
      return function (p) {
        return new t(n, p);
      };
    };

    return t;
  }(),
      l = function l(t) {
    return function (n) {
      if (t instanceof c) return n;
      if (n instanceof c) return t;
      if (t instanceof m) return new m(t.value0, e.snoc(t.value1)(n));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [t.constructor.name, n.constructor.name]);
    };
  },
      q = function q(t) {
    return function (n) {
      return function (p) {
        var F = function F(z) {
          return function (y) {
            return function (x) {
              for (var r = z, D = y, v = !1, I; !v;) {
                I = r;
                var L = D,
                    K = x;
                if (K instanceof k.Nil) v = !0, I = L;else {
                  if (K instanceof k.Cons) r = I, D = I(L)(K.value0), x = K.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [I.constructor.name, L.constructor.name, K.constructor.name]);
                  I = void 0;
                }
              }

              return I;
            };
          };
        };

        return function (z) {
          return function (y) {
            function x(I, L) {
              I = e.uncons(I);
              if (I instanceof g.Nothing) return D = !0, F(function (K) {
                return function (G) {
                  return G(K);
                };
              })(n)(L);
              if (I instanceof g.Just) r = I.value0.value1, y = new k.Cons(t(I.value0.value0), L);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [I.constructor.name]);
            }

            for (var r = z, D = !1, v; !D;) {
              v = x(r, y);
            }

            return v;
          };
        }(p)(k.Nil.value);
      };
    };
  };

  a = c.value;
  b = new b.Semigroup(l);
  d.empty = a;

  d.snoc = function (t) {
    return function (n) {
      return l(t)(new m(n, e.empty));
    };
  };

  d.uncons = function (t) {
    if (t instanceof c) return g.Nothing.value;

    if (t instanceof m) {
      var n = g.Just,
          p = f.Tuple,
          F = t.value0;
      t = e["null"](t.value1) ? c.value : q(l)(c.value)(t.value1);
      return new n(new p(F, t));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [t.constructor.name]);
  };

  d.semigroupCatList = b;
})(PS);

(function (a) {
  a["Control.Monad.Free"] = a["Control.Monad.Free"] || {};

  var d = a["Control.Monad.Free"],
      e = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Data.CatList"],
      c = a["Data.Either"],
      m = a["Data.Functor"],
      l = a["Data.Maybe"],
      q = a["Data.Semigroup"],
      t = a["Unsafe.Coerce"],
      n = function () {
    function I(L, K) {
      this.value0 = L;
      this.value1 = K;
    }

    I.create = function (L) {
      return function (K) {
        return new I(L, K);
      };
    };

    return I;
  }(),
      p = function () {
    function I(L) {
      this.value0 = L;
    }

    I.create = function (L) {
      return new I(L);
    };

    return I;
  }(),
      F = function () {
    function I(L, K) {
      this.value0 = L;
      this.value1 = K;
    }

    I.create = function (L) {
      return function (K) {
        return new I(L, K);
      };
    };

    return I;
  }(),
      z = function z(I) {
    function L(E) {
      var T = function T(A) {
        return function (C) {
          return new n(A.value0, q.append(f.semigroupCatList)(A.value1)(C));
        };
      };

      if (E.value0 instanceof p) {
        var W = f.uncons(E.value1);
        if (W instanceof l.Nothing) return K = !0, new p(E.value0.value0);

        if (W instanceof l.Just) {
          I = T((0, W.value0.value0)(E.value0.value0))(W.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [W.constructor.name]);
      }

      if (E.value0 instanceof F) return K = !0, new F(E.value0.value0, function (A) {
        return T(E.value0.value1(A))(E.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [E.value0.constructor.name]);
    }

    for (var K = !1, G; !K;) {
      G = L(I);
    }

    return G;
  },
      y = function y(I) {
    return function (L) {
      return function (K) {
        K = z(K);
        if (K instanceof p) return L(K.value0);
        if (K instanceof F) return I(K.value0)(K.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [K.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return v;
  }, function () {
    return r;
  });
  var x = new m.Functor(function (I) {
    return function (L) {
      return g.bindFlipped(r)(function () {
        var K = e.pure(v);
        return function (G) {
          return K(I(G));
        };
      }())(L);
    };
  }),
      r = new g.Bind(function () {
    return D;
  }, function (I) {
    return function (L) {
      return new n(I.value0, f.snoc(I.value1)(L));
    };
  }),
      D = new k.Apply(function () {
    return x;
  }, b.ap(a)),
      v = new e.Applicative(function () {
    return D;
  }, function (I) {
    return new n(p.create(I), f.empty);
  });

  d.wrap = function (I) {
    return new n(new F(I, t.unsafeCoerce), f.empty);
  };

  d.liftF = function (I) {
    return new n(new F(I, function () {
      var L = e.pure(v);
      return function (K) {
        return L(K);
      };
    }()), f.empty);
  };

  d.resume = function (I) {
    return y(function (L) {
      return function (K) {
        return new c.Left(m.map(I)(K)(L));
      };
    })(c.Right.create);
  };

  d["resume'"] = y;
  d.freeFunctor = x;
  d.freeBind = r;
  d.freeApplicative = v;
})(PS);

(function (a) {
  a["Control.MultiAlternative"] = a["Control.MultiAlternative"] || {};
  a = a["Control.MultiAlternative"];

  a.orr = function (d) {
    return d.orr;
  };

  a.MultiAlternative = function (d, e) {
    this.Plus0 = d;
    this.orr = e;
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
  a["Data.Array.NonEmpty"] = a["Data.Array.NonEmpty"] || {};
  var d = a["Data.Array.NonEmpty"],
      e = a["Data.Array"],
      k = a["Data.Boolean"],
      g = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var b = a.unsafeCoerce,
      f = a.unsafeCoerce,
      c = a.unsafeCoerce;

  a = function (l) {
    var q = g.fromJust();
    return function (t) {
      return q(l(c(t)));
    };
  }(e.uncons);

  var m = function (l) {
    return function (q) {
      return l(c(q));
    };
  }(e.length);

  d.fromArray = function (l) {
    if (0 < e.length(l)) return new g.Just(f(l));
    if (k.otherwise) return g.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [l.constructor.name]);
  };

  d.toArray = c;

  d.singleton = function (l) {
    return f(e.singleton(l));
  };

  d.length = m;

  d["cons'"] = function (l) {
    return function (q) {
      return f(e.cons(l)(q));
    };
  };

  d.snoc = function (l) {
    return function (q) {
      return f(e.snoc(c(l))(q));
    };
  };

  d.uncons = a;

  d.updateAt = function (l) {
    return function (q) {
      var t = e.updateAt(l)(q);
      return function (n) {
        return b(t(c(n)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (d) {
    return function (e) {
      for (var k = e[0], g = e.length, b = 1; b < g; b++) {
        k = d(k)(e[b]);
      }

      return k;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (d) {
    return function (e) {
      for (var k = e.length, g = Array(k), b = 0; b < k; b++) {
        g[b] = d(b)(e[b]);
      }

      return g;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var d = a["Data.FunctorWithIndex"],
      e = a["Data.Functor"];
  a = new function (k, g) {
    this.Functor0 = k;
    this.mapWithIndex = g;
  }(function () {
    return e.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  d.mapWithIndex = function (k) {
    return k.mapWithIndex;
  };

  d.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var d = a["Data.FoldableWithIndex"],
      e = a["Data.Foldable"],
      k = a["Data.FunctorWithIndex"],
      g = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      f = function () {
    function l(q, t) {
      this.value0 = q;
      this.value1 = t;
    }

    l.create = function (q) {
      return function (t) {
        return new l(q, t);
      };
    };

    return l;
  }(),
      c = function c(l) {
    return function (q) {
      return function (t) {
        return (0, l.foldrWithIndex)(function (n) {
          return function (p) {
            return function (F) {
              return b.append(q.Semigroup0())(t(n)(p))(F);
            };
          };
        })(g.mempty(q));
      };
    };
  },
      m = new function (l, q, t, n) {
    this.Foldable0 = l;
    this.foldMapWithIndex = q;
    this.foldlWithIndex = t;
    this.foldrWithIndex = n;
  }(function () {
    return e.foldableArray;
  }, function (l) {
    return c(m)(l);
  }, function (l) {
    return function (q) {
      var t = e.foldl(e.foldableArray)(function (p) {
        return function (F) {
          return l(F.value0)(p)(F.value1);
        };
      })(q),
          n = k.mapWithIndex(k.functorWithIndexArray)(f.create);
      return function (p) {
        return t(n(p));
      };
    };
  }, function (l) {
    return function (q) {
      var t = e.foldr(e.foldableArray)(function (p) {
        return function (F) {
          return l(p.value0)(p.value1)(F);
        };
      })(q),
          n = k.mapWithIndex(k.functorWithIndexArray)(f.create);
      return function (p) {
        return t(n(p));
      };
    };
  });

  d.foldlWithIndex = function (l) {
    return l.foldlWithIndex;
  };

  d.foldableWithIndexArray = m;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var d = a["Data.Semigroup.Foldable"],
      e = a["Data.Functor"];

  d.Foldable1 = function (k, g, b) {
    this.Foldable0 = k;
    this.fold1 = g;
    this.foldMap1 = b;
  };

  d.foldMap1 = function (k) {
    return k.foldMap1;
  };

  d.foldMap1Default = function (k) {
    return function (g) {
      return function (b) {
        return function (f) {
          var c = (0, k.fold1)(b),
              m = e.map(g)(f);
          return function (l) {
            return c(m(l));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a.unfoldr1ArrayImpl = function (d) {
    return function (e) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (f) {
              for (var c = [];;) {
                f = b(f);
                c.push(k(f));
                f = g(f);
                if (d(f)) return c;
                f = e(f);
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
      e = a["Data.Boolean"],
      k = a["Data.Maybe"],
      g = a["Data.Tuple"];
  a = new function (f) {
    this.unfoldr1 = f;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(k.isNothing)(k.fromJust())(g.fst)(g.snd));

  var b = function b(f) {
    return function (c) {
      return function (m) {
        return (0, f.unfoldr1)(function (l) {
          if (0 >= l) return new g.Tuple(m, k.Nothing.value);
          if (e.otherwise) return new g.Tuple(m, new k.Just(l - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [l.constructor.name]);
        })(c - 1 | 0);
      };
    };
  };

  d.unfoldr1 = function (f) {
    return f.unfoldr1;
  };

  d.singleton = function (f) {
    return b(f)(1);
  };

  d.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var d = a["Data.Array.NonEmpty.Internal"],
      e = a["Data.Array.NonEmpty.Internal"],
      k = a["Data.Semigroup"],
      g = a["Data.Semigroup.Foldable"],
      b = a["Data.Unfoldable1"].unfoldable1Array,
      f = a["Data.Traversable"].traversableArray,
      c = k.semigroupArray,
      m = a["Data.Functor"].functorArray,
      l = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      q = a["Data.Foldable"].foldableArray,
      t = new g.Foldable1(function () {
    return q;
  }, function (n) {
    return e.fold1Impl(k.append(n));
  }, function (n) {
    return g.foldMap1Default(t)(m)(n);
  });
  d.semigroupNonEmptyArray = c;
  d.functorNonEmptyArray = m;
  d.foldableNonEmptyArray = q;
  d.foldableWithIndexNonEmptyArray = l;
  d.foldable1NonEmptyArray = t;
  d.unfoldable1NonEmptyArray = b;
  d.traversableNonEmptyArray = f;
})(PS);

(function (a) {
  var d = function () {
    function e() {
      this.last = this.head = null;
      this.size = 0;
    }

    function k(l, q) {
      this.queue = l;
      this.value = q;
      this.prev = this.next = null;
    }

    function g(l) {
      this.draining = !1;
      this.error = null;
      this.value = l;
      this.takes = new e();
      this.reads = new e();
      this.puts = new e();
    }

    function b(l) {
      try {
        l();
      } catch (q) {
        setTimeout(function () {
          throw q;
        }, 0);
      }
    }

    function f(l) {
      switch (l.size) {
        case 0:
          return null;

        case 1:
          var q = l.head;
          l.head = null;
          break;

        case 2:
          q = l.last;
          l.head.next = null;
          l.last = null;
          break;

        default:
          q = l.last, l.last = q.prev, l.last.next = null;
      }

      q.prev = null;
      q.queue = null;
      l.size--;
      return q.value;
    }

    function c(l) {
      switch (l.size) {
        case 0:
          return null;

        case 1:
          var q = l.head;
          l.head = null;
          break;

        case 2:
          q = l.head;
          l.last.prev = null;
          l.head = l.last;
          l.last = null;
          break;

        default:
          q = l.head, l.head = q.next, l.head.prev = null;
      }

      q.next = null;
      q.queue = null;
      l.size--;
      return q.value;
    }

    var m = {};
    g.EMPTY = m;

    g.putLast = function (l, q) {
      q = new k(l, q);

      switch (l.size) {
        case 0:
          l.head = q;
          break;

        case 1:
          q.prev = l.head;
          l.head.next = q;
          l.last = q;
          break;

        default:
          q.prev = l.last, l.last.next = q, l.last = q;
      }

      l.size++;
      return q;
    };

    g.takeLast = f;
    g.takeHead = c;

    g.deleteCell = function (l) {
      null !== l.queue && (l.queue.last === l ? f(l.queue) : l.queue.head === l ? c(l.queue) : (l.prev && (l.prev.next = l.next), l.next && (l.next.prev = l.prev), l.queue.size--, l.queue = null, l.value = null, l.next = null, l.prev = null));
    };

    g.drainVar = function (l, q) {
      if (!q.draining) {
        var t = q.puts,
            n = q.takes,
            p = q.reads,
            F,
            z;

        for (q.draining = !0;;) {
          var y = F = null;
          var x = q.value;
          var r = p.size;

          if (null !== q.error) {
            for (x = l.left(q.error); F = c(t);) {
              b(F.cb(x));
            }

            for (; y = c(p);) {
              b(y(x));
            }

            for (; z = c(n);) {
              b(z(x));
            }

            break;
          }

          x === m && (F = c(t)) && (q.value = x = F.value);

          if (x !== m) {
            for (z = c(n); r-- && (y = c(p));) {
              b(y(l.right(x)));
            }

            null !== z && (q.value = m, b(z(l.right(x))));
          }

          null !== F && b(F.cb(l.right(void 0)));
          if (q.value === m && 0 === t.size || q.value !== m && 0 === n.size) break;
        }

        q.draining = !1;
      }
    };

    return g;
  }();

  a.empty = function () {
    return new d(d.EMPTY);
  };

  a._takeVar = function (e, k, g) {
    return function () {
      var b = d.putLast(k.takes, g);
      d.drainVar(e, k);
      return function () {
        d.deleteCell(b);
      };
    };
  };

  a._tryPutVar = function (e, k, g) {
    return function () {
      return g.value === d.EMPTY && null === g.error ? (g.value = k, d.drainVar(e, g), !0) : !1;
    };
  };

  a._tryTakeVar = function (e, k) {
    return function () {
      var g = k.value;
      if (g === d.EMPTY) return e.nothing;
      k.value = d.EMPTY;
      d.drainVar(e, k);
      return e.just(g);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var d = a["Effect.AVar"],
      e = a["Effect.AVar"],
      k = a["Data.Either"];
  a = a["Data.Maybe"];

  var g = function () {
    function m(l) {
      this.value0 = l;
    }

    m.create = function (l) {
      return new m(l);
    };

    return m;
  }(),
      b = function () {
    function m(l) {
      this.value0 = l;
    }

    m.create = function (l) {
      return new m(l);
    };

    return m;
  }(),
      f = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      c = {
    left: k.Left.create,
    right: k.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: g.create,
    filled: b.create,
    empty: f.value
  };

  d.take = function (m) {
    return function (l) {
      return e._takeVar(c, m, l);
    };
  };

  d.tryTake = function (m) {
    return e._tryTakeVar(c, m);
  };

  d.tryPut = function (m) {
    return function (l) {
      return e._tryPutVar(c, m, l);
    };
  };

  d.empty = e.empty;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var d = a["Effect.AVar"],
      e = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (k) {
    return e.makeAff(function (g) {
      return function () {
        var b = d.take(k)(g)();
        return e.effectCanceler(b);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var d = a["Effect.Aff.Class"],
      e = a["Control.Category"],
      k = a["Effect.Aff"];

  a = function a(g, b) {
    this.MonadEffect0 = g;
    this.liftAff = b;
  };

  e = new a(function () {
    return k.monadEffectAff;
  }, e.identity(e.categoryFn));

  d.liftAff = function (g) {
    return g.liftAff;
  };

  d.MonadAff = a;
  d.monadAffAff = e;
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
      e = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      f = a["Control.Category"],
      c = a["Control.Monad"],
      m = a["Control.Monad.Free"],
      l = a["Control.MultiAlternative"],
      q = a["Control.Parallel.Class"],
      t = a["Control.Plus"],
      n = a["Data.Array.NonEmpty"],
      p = a["Data.Array.NonEmpty.Internal"],
      F = a["Data.Either"],
      z = a["Data.FoldableWithIndex"],
      y = a["Data.Functor"],
      x = a["Data.Maybe"],
      r = a["Data.Monoid"],
      D = a["Data.Semigroup"],
      v = a["Data.Semigroup.Foldable"],
      I = a["Data.Show"],
      L = a["Data.Tuple"],
      K = a.Effect,
      G = a["Effect.AVar"],
      E = a["Effect.Aff"],
      T = a["Effect.Aff.AVar"],
      W = a["Effect.Aff.Class"],
      A = a["Effect.Class"],
      C = a["Effect.Console"],
      S = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (fa) {
    return fa(f.identity(f.categoryFn));
  });

  var w = m.freeFunctor,
      N = m.freeBind,
      M = m.freeApplicative,
      J = new c.Monad(function () {
    return M;
  }, function () {
    return N;
  }),
      Y = function Y(fa) {
    return fa;
  },
      aa = function aa(fa) {
    return m["resume'"](function (ta) {
      return function (Da) {
        return new F.Right(y.map(fa)(Da)(ta));
      };
    })(F.Left.create);
  },
      u = new y.Functor(function (fa) {
    return function (ta) {
      if (ta instanceof F.Right) ta = new F.Right({
        cont: y.map(E.functorAff)(fa)(ta.value0.cont),
        view: ta.value0.view
      });else if (ta instanceof F.Left) ta = new F.Left(y.map(K.functorEffect)(fa)(ta.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [ta.constructor.name]);
      return ta;
    };
  }),
      wa = function wa(fa) {
    return m.liftF(F.Left.create(fa));
  },
      sa = function sa(fa) {
    return new A.MonadEffect(function () {
      return J;
    }, wa);
  },
      ya = function ya(fa) {
    return m.liftF(new F.Right({
      view: fa,
      cont: E.never
    }));
  },
      da = function da(fa) {
    return new D.Semigroup(function (ta) {
      return function (Da) {
        return l.orr(oa(fa))([ta, Da]);
      };
    });
  },
      la = function la(fa) {
    return new t.Plus(function () {
      return va(fa);
    }, ya(r.mempty(fa)));
  },
      oa = function oa(fa) {
    return new l.MultiAlternative(function () {
      return la(fa);
    }, function (ta) {
      var Da = function Da(ea) {
        return function (pa) {
          return function (Aa) {
            var O = y.map(p.functorNonEmptyArray)(function (ma) {
              return m.wrap(F.Right.create(ma));
            })(pa);
            return b.bind(E.bindAff)(q.sequential(E.parallelAff)(z.foldlWithIndex(p.foldableWithIndexNonEmptyArray)(function (ma) {
              return function (ka) {
                return function (B) {
                  return e.alt(E.altParAff)(q.parallel(E.parallelAff)(y.map(E.functorAff)(L.Tuple.create(ma))(B)))(ka);
                };
              };
            })(t.empty(E.plusParAff))(Aa)))(function (ma) {
              return g.pure(E.applicativeAff)(Q(ea)(x.fromMaybe(O)(n.updateAt(ma.value0)(ma.value1)(O))));
            });
          };
        };
      },
          V = function V(ea) {
        return function (pa) {
          return m.wrap(new F.Right({
            view: v.foldMap1(p.foldable1NonEmptyArray)(ea.Semigroup0())(function (Aa) {
              return Aa.view;
            })(pa),
            cont: Da(ea)(pa)(y.map(p.functorNonEmptyArray)(function (Aa) {
              return Aa.cont;
            })(pa))
          }));
        };
      },
          H = function H(ea) {
        return function (pa) {
          return function (Aa) {
            var O = n.uncons(Aa),
                ma = aa(u)(O.head);
            if (ma instanceof F.Left) return g.pure(m.freeApplicative)(ma.value0);

            if (ma instanceof F.Right) {
              if (ma.value0 instanceof F.Left) return m.wrap(new F.Left(function () {
                var ka = ma.value0.value0();
                return H(ea)(pa)(n["cons'"](ka)(O.tail));
              }));
              if (ma.value0 instanceof F.Right) return R(ea)(n.snoc(pa)(ma.value0.value0))(O.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [ma.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [ma.constructor.name]);
          };
        };
      },
          R = function R(ea) {
        return function (pa) {
          return function (Aa) {
            Aa = n.fromArray(Aa);
            if (Aa instanceof x.Nothing) return V(ea)(pa);
            if (Aa instanceof x.Just) return H(ea)(pa)(Aa.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [Aa.constructor.name]);
          };
        };
      },
          Q = function Q(ea) {
        return function (pa) {
          var Aa = n.uncons(pa),
              O = aa(u)(Aa.head);
          if (O instanceof F.Left) return g.pure(m.freeApplicative)(O.value0);

          if (O instanceof F.Right) {
            if (O.value0 instanceof F.Left) return m.wrap(new F.Left(function () {
              var ma = O.value0.value0();
              return Q(ea)(n["cons'"](ma)(Aa.tail));
            }));
            if (O.value0 instanceof F.Right) return R(ea)(n.singleton(O.value0.value0))(Aa.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [O.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [O.constructor.name]);
        };
      };

      ta = n.fromArray(ta);
      if (ta instanceof x.Just) return Q(fa)(y.map(p.functorNonEmptyArray)(Y)(ta.value0));
      if (ta instanceof x.Nothing) return t.empty(la(fa));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [ta.constructor.name]);
    });
  },
      va = function va(fa) {
    return new e.Alt(function () {
      return w;
    }, D.append(da(fa)));
  },
      ca = function ca(fa) {
    return function (ta) {
      var Da = function Da(V) {
        return function (H) {
          if (H instanceof F.Left) return C.log("Aff failed - " + I.show(S.showError)(H.value0));
          if (H instanceof F.Right) return y["void"](K.functorEffect)(G.tryPut(H.value0)(V));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [V.constructor.name, H.constructor.name]);
        };
      };

      return m.wrap(new F.Left(function () {
        var V = G.empty();
        E.runAff_(Da(V))(ta)();
        var H = G.tryTake(V)();
        if (H instanceof x.Just) return g.pure(m.freeApplicative)(H.value0);
        if (H instanceof x.Nothing) return m.liftF(new F.Right({
          view: fa,
          cont: T.take(V)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [H.constructor.name]);
      }));
    };
  };

  d.WidgetStep = function (fa) {
    return fa;
  };

  d.Widget = function (fa) {
    return fa;
  };

  d.unWidget = Y;
  d.resume = aa;
  d.display = ya;
  d.functorWidgetStep = u;
  d.widgetFunctor = w;
  d.widgetBind = N;
  d.widgetApplicative = M;
  d.widgetShiftMap = a;
  d.widgetMultiAlternative = oa;

  d.widgetMonoid = function (fa) {
    return new r.Monoid(function () {
      return da(fa);
    }, t.empty(la(fa)));
  };

  d.widgetAlt = va;
  d.widgetPlus = la;

  d.widgetAlternative = function (fa) {
    return new k.Alternative(function () {
      return M;
    }, function () {
      return la(fa);
    });
  };

  d.widgetMonadEff = sa;

  d.widgetMonadAff = function (fa) {
    return new W.MonadAff(function () {
      return sa(fa);
    }, ca(r.mempty(fa)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var d = a["Concur.Core"],
      e = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Monad.Free"],
      f = a["Control.Parallel.Class"],
      c = a["Data.Either"],
      m = a["Data.Functor"],
      l = a.Effect,
      q = a["Effect.AVar"],
      t = a["Effect.Aff"],
      n = a["Effect.Aff.AVar"],
      p = a["Effect.Aff.Class"],
      F = function F(z) {
    return function (y) {
      var x = e.resume(e.functorWidgetStep)(y);
      if (x instanceof c.Left) return g.pure(b.freeApplicative)(x.value0);

      if (x instanceof c.Right) {
        if (x.value0 instanceof c.Left) return b.wrap(e.WidgetStep(new c.Left(function () {
          var r = x.value0.value0();
          return F(z)(r);
        })));
        if (x.value0 instanceof c.Right) return b.wrap(e.WidgetStep(new c.Left(function () {
          var r = q.empty(),
              D = f.sequential(t.parallelAff)(k.alt(t.altParAff)(f.parallel(t.parallelAff)(p.liftAff(p.monadAffAff)(n.take(r))))(f.parallel(t.parallelAff)(m.map(t.functorAff)(F(z))(x.value0.value0.cont))));
          return b.wrap(e.WidgetStep(new c.Right({
            view: z(function (v) {
              return m["void"](l.functorEffect)(q.tryPut(g.pure(b.freeApplicative)(v))(r));
            })(x.value0.value0.view),
            cont: D
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [x.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [x.constructor.name]);
    };
  };

  d.mkLeafWidget = function (z) {
    return e.Widget(b.wrap(e.WidgetStep(new c.Left(function () {
      var y = q.empty();
      return b.wrap(e.WidgetStep(new c.Right({
        view: z(function (x) {
          return m["void"](l.functorEffect)(q.tryPut(g.pure(b.freeApplicative)(x))(y));
        }),
        cont: p.liftAff(p.monadAffAff)(n.take(y))
      })));
    }))));
  };

  d.mkNodeWidget = function (z) {
    return function (y) {
      return F(z)(y);
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var d = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (e) {
    this.liftWidget = e;
  }(a.identity(a.categoryFn));

  d.liftWidget = function (e) {
    return e.liftWidget;
  };

  d.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var d = a["Concur.Core.Props"];
  a = a["Data.Functor"];

  var e = function () {
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
      if (b instanceof e) return new e(b.value0);
      if (b instanceof k) return new k(function (f) {
        return b.value0(function (c) {
          return f(g(c));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [g.constructor.name, b.constructor.name]);
    };
  });
  d.PrimProp = e;
  d.Handler = k;

  d.mkProp = function (g) {
    return function (b) {
      if (b instanceof e) return b.value0;
      if (b instanceof k) return b.value0(g);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [g.constructor.name, b.constructor.name]);
    };
  };

  d.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var d = a["Concur.Core.DOM"],
      e = a["Concur.Core"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Control.MultiAlternative"],
      f = a["Control.ShiftMap"],
      c = a["Data.Functor"],
      m = function m(l) {
    return function (q) {
      return function (t) {
        return function (n) {
          return f.shiftMap(l)(function (p) {
            return function (F) {
              return e.mkNodeWidget(function (z) {
                return function (y) {
                  return t(c.map(q)(function () {
                    var x = g.mkProp(z),
                        r = c.map(g.functorProps)(p);
                    return function (D) {
                      return x(r(D));
                    };
                  }())(n))(y);
                };
              })(F);
            };
          });
        };
      };
    };
  };

  d.el = m;

  d.elLeaf = function (l) {
    return function (q) {
      return function (t) {
        return function (n) {
          return k.liftWidget(l)(e.mkLeafWidget(function (p) {
            return t(c.map(q)(g.mkProp(p))(n));
          }));
        };
      };
    };
  };

  d["el'"] = function (l) {
    return function (q) {
      return function (t) {
        return function (n) {
          return function (p) {
            var F = m(l)(t)(n)(p),
                z = b.orr(q);
            return function (y) {
              return F(z(y));
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
      e = a["Concur.Core.Types"],
      k = a["Control.Applicative"],
      g = a["Control.Monad.Free"],
      b = a["Data.Either"],
      f = a["Data.Functor"],
      c = a["Data.Monoid"],
      m = a["Data.Tuple"],
      l = a.Effect,
      q = a["Effect.Aff"],
      t = function t(p) {
    return function (F) {
      var z = g.resume(e.functorWidgetStep)(e.unWidget(F));
      if (z instanceof b.Right) return k.pure(l.applicativeEffect)(new m.Tuple(F, c.mempty(p)));

      if (z instanceof b.Left) {
        if (z.value0 instanceof b.Left) return function () {
          var y = z.value0.value0();
          return t(p)(y)();
        };
        if (z.value0 instanceof b.Right) return k.pure(l.applicativeEffect)(new m.Tuple(g.wrap(new b.Right(z.value0.value0)), z.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [z.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [z.constructor.name]);
    };
  },
      n = function n(p) {
    return function (F) {
      return function (z) {
        var y = g.resume(e.functorWidgetStep)(z);
        if (y instanceof b.Right) return k.pure(l.applicativeEffect)(c.mempty(p));

        if (y instanceof b.Left) {
          if (y.value0 instanceof b.Left) return function () {
            var x = y.value0.value0();
            return n(p)(F)(x)();
          };
          if (y.value0 instanceof b.Right) return function () {
            q.runAff_(function () {
              var x = f.map(b.functorEither)(e.Widget);
              return function (r) {
                return F(x(r));
              };
            }())(y.value0.value0.cont)();
            return y.value0.value0.view;
          };
          throw Error("Failed pattern match at Concur.Core.Discharge (line 26, column 28 - line 32, column 19): " + [y.value0.constructor.name]);
        }

        throw Error("Failed pattern match at Concur.Core.Discharge (line 24, column 32 - line 32, column 19): " + [y.constructor.name]);
      };
    };
  };

  d.discharge = n;
  d.dischargePartialEffect = t;
})(PS);

(function (a) {
  a["Control.Comonad"] = a["Control.Comonad"] || {};
  a = a["Control.Comonad"];

  a.Comonad = function (d, e) {
    this.Extend0 = d;
    this.extract = e;
  };

  a.extract = function (d) {
    return d.extract;
  };
})(PS);

(function (a) {
  a["Control.Extend"] = a["Control.Extend"] || {};

  a["Control.Extend"].Extend = function (d, e) {
    this.Functor0 = d;
    this.extend = e;
  };
})(PS);

(function (a) {
  a.defer = function (d) {
    var e = null;
    return function () {
      if (void 0 === d) return e;
      e = d();
      d = void 0;
      return e;
    };
  };

  a.force = function (d) {
    return d();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var d = a["Data.Lazy"],
      e = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (k) {
    return function (g) {
      return e.defer(function (b) {
        return k(e.force(g));
      });
    };
  });
  d.functorLazy = a;
  d.defer = e.defer;
  d.force = e.force;
})(PS);

(function (a) {
  a["Control.Cofree"] = a["Control.Cofree"] || {};

  var d = a["Control.Cofree"],
      e = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      f = a["Control.Bind"],
      c = a["Control.Comonad"],
      m = a["Control.Extend"],
      l = a["Control.Monad"],
      q = a["Control.Plus"],
      t = a["Control.ShiftMap"],
      n = a["Data.Functor"],
      p = a["Data.Lazy"],
      F = a["Data.Tuple"],
      z = function z(G) {
    return F.snd(p.force(G));
  },
      y = function y(G) {
    return function (E) {
      return p.defer(function (T) {
        return new F.Tuple(G, E);
      });
    };
  },
      x = function x(G) {
    return F.fst(p.force(G));
  },
      r = function r(G) {
    return new n.Functor(function (E) {
      var T = function T(W) {
        return n.map(p.functorLazy)(function (A) {
          return new F.Tuple(E(A.value0), n.map(G)(T)(A.value1));
        })(W);
      };

      return T;
    });
  },
      D = function D(G) {
    return new m.Extend(function () {
      return r(G);
    }, function (E) {
      var T = function T(W) {
        return n.map(p.functorLazy)(function (A) {
          return new F.Tuple(E(W), n.map(G)(T)(A.value1));
        })(W);
      };

      return T;
    });
  },
      v = function v(G) {
    return new l.Monad(function () {
      return K(G);
    }, function () {
      return I(G);
    });
  },
      I = function I(G) {
    return new f.Bind(function () {
      return L(G);
    }, function (E) {
      return function (T) {
        var W = function W(C) {
          return function (S) {
            var w = n.map(G.Plus1().Alt0().Functor0())(W(C))(z(S)),
                N = n.map(G.Plus1().Alt0().Functor0())(A)(z(C));
            return y(x(S))(k.alt(G.Plus1().Alt0())(N)(w));
          };
        },
            A = function A(C) {
          return W(C)(T(x(C)));
        };

        return A(E);
      };
    });
  },
      L = function L(G) {
    return new b.Apply(function () {
      return r(G.Plus1().Alt0().Functor0());
    }, l.ap(v(G)));
  },
      K = function K(G) {
    return new g.Applicative(function () {
      return L(G);
    }, function (E) {
      return y(E)(q.empty(G.Plus1()));
    });
  };

  d.mkCofree = y;
  d.tail = z;

  d.comonadCofree = function (G) {
    return new c.Comonad(function () {
      return D(G);
    }, x);
  };

  d.applicativeCofree = K;
  d.bindCofree = I;

  d.shiftMapCofree = function (G) {
    return new t.ShiftMap(function (E) {
      return function (T) {
        return p.defer(function (W) {
          W = p.force(T);
          return new F.Tuple(W.value0, E(g.pure(K(e.widgetAlternative(G))))(W.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var d = a["Concur.Core.FRP"],
      e = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      f = a["Control.Cofree"],
      c = a["Control.Comonad"],
      m = a["Data.Functor"],
      l = a["Data.Maybe"],
      q = a["Data.Unit"],
      t = a["Effect.Aff"],
      n = a["Effect.Aff.Class"],
      p = f.tail,
      F = f.mkCofree,
      z = function z(r) {
    return function (D) {
      return F(r)(m.map(e.widgetFunctor)(function (v) {
        return z(v)(D);
      })(D(r)));
    };
  },
      y = function y(r) {
    return function (D) {
      return function (v) {
        var I = v(D);
        return F(c.extract(f.comonadCofree(e.widgetFunctor))(I))(b.bind(e.widgetBind)(p(I))(function (L) {
          return g.pure(e.widgetApplicative)(y(r)(c.extract(f.comonadCofree(e.widgetFunctor))(L))(v));
        }));
      };
    };
  },
      x = function x(r) {
    return b.bind(e.widgetBind)(p(r))(x);
  };

  d.step = F;

  d.display = function (r) {
    return F(q.unit)(r);
  };

  d.loopW = z;
  d.loopS = y;
  d.dyn = x;

  d.debounce = function (r) {
    return function (D) {
      return function (v) {
        return function (I) {
          var L = function L(G) {
            return function (E) {
              return b.bind(e.widgetBind)(k.alt(e.widgetAlt(r))(m.map(e.widgetFunctor)(l.Just.create)(E(G)))(m.voidRight(e.widgetFunctor)(l.Nothing.value)(n.liftAff(e.widgetMonadAff(r))(t.delay(D)))))(function (T) {
                if (T instanceof l.Nothing) return g.pure(e.widgetApplicative)(K(G)(E));
                if (T instanceof l.Just) return L(T.value0)(E);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [T.constructor.name]);
              });
            };
          },
              K = function K(G) {
            return function (E) {
              return F(G)(b.bind(e.widgetBind)(E(G))(function (T) {
                return L(T)(E);
              }));
            };
          };

          return K(v)(I);
        };
      };
    };
  };
})(PS);

(function (a) {
  function d(g) {
    return function (b) {
      return function (f) {
        return e.createElement.apply(e, [g, b].concat(f));
      };
    };
  }

  var e = require("react"),
      k = function (g) {
    function b(f, c, m) {
      switch (c) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          f[c] = m;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          f[c] = function (l, q) {
            return m(l)(q)();
          };

          break;

        case "componentDidUpdate":
          f[c] = function (l, q, t) {
            return m(l)(q)(t)();
          };

          break;

        case "unsafeComponentWillMount":
          f.UNSAFE_componentWillMount = m;
          break;

        case "unsafeComponentWillReceiveProps":
          f.UNSAFE_componentWillReceiveProps = function (l) {
            return m(l)();
          };

          break;

        case "unsafeComponentWillUpdate":
          f.UNSAFE_componentWillUpdate = function (l, q) {
            return m(l)(q)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + c);
      }
    }

    return function (f) {
      return function (c) {
        var m = function m(l) {
          g.call(this, l);
          l = c(this)();

          for (var q in l) {
            b(this, q, l[q]);
          }
        };

        m.displayName = f;
        m.prototype = Object.create(g.prototype);
        return m.prototype.constructor = m;
      };
    };
  }(e.Component);

  a.componentImpl = k;
  a.fragment = e.Fragment;

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

  a.createElementImpl = d;
  a.createElementTagName = d;

  a.createLeafElementImpl = function (g) {
    return function (b) {
      return e.createElement(g, b);
    };
  };

  a.createElementTagNameDynamic = function (g) {
    return function (b) {
      return function (f) {
        return e.createElement(g, b, f);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var d = a.React,
      e = a.React;
  a = e.setStateImpl;
  var k = new function (g) {
    this.toElement = g;
  }((0, e.createElementImpl)(e.fragment)({}));

  d.component = function (g) {
    return e.componentImpl;
  };

  d.writeState = a;

  d.createLeafElement = function (g) {
    return e.createLeafElementImpl;
  };

  d.toElement = function (g) {
    return g.toElement;
  };

  d.isReactElementArray = k;
  d.getState = e.getState;
  d.createElementTagName = e.createElementTagName;
  d.createElementTagNameDynamic = e.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var d = a["Concur.React"],
      e = a["Concur.Core.Discharge"],
      k = a["Control.Apply"],
      g = a["Data.Either"],
      b = a["Data.Functor"],
      f = a["Data.Monoid"],
      c = a["Data.Show"],
      m = a["Data.Unit"],
      l = a.Effect,
      q = a["Effect.Console"],
      t = a["Effect.Exception"],
      n = a.React,
      p = function (F) {
    return function (z) {
      var y = function y(r) {
        return n.toElement(n.isReactElementArray)(r.view);
      },
          x = function x(r) {
        return function (D) {
          if (D instanceof g.Right) return function () {
            var v = e.discharge(f.monoidArray)(x(r))(D.value0)();
            return b["void"](l.functorEffect)(n.writeState(r)({
              view: v
            }))();
          };
          if (D instanceof g.Left) return function () {
            q.log("FAILED! " + c.show(t.showError)(D.value0))();
            return m.unit;
          };
          throw Error("Failed pattern match at Concur.React (line 32, column 5 - line 34, column 52): " + [r.constructor.name, D.constructor.name]);
        };
      };

      return n.component()("Concur")(function (r) {
        return function () {
          var D = e.dischargePartialEffect(f.monoidArray)(z)();
          return {
            state: {
              view: D.value1
            },
            render: b.map(l.functorEffect)(y)(n.getState(r)),
            componentDidMount: k.applySecond(l.applyEffect)(F)(x(r)(new g.Right(D.value0)))
          };
        };
      });
    };
  }(f.mempty(l.monoidEffect(f.monoidUnit)));

  d.renderComponent = function (F) {
    return n.createLeafElement()(p(F))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (d) {
    return function (e) {
      var k = {};
      k[d] = e;
      return k;
    };
  };

  a.unsafeUnfoldProps = function (d) {
    return function (e) {
      var k = {},
          g = {};
      g[d] = k;

      for (var b in e) {
        e.hasOwnProperty(b) && (k[b] = e[b]);
      }

      return g;
    };
  };

  a.unsafeFromPropsArray = function (d) {
    for (var e = {}, k = 0, g = d.length; k < g; k++) {
      var b = d[k],
          f;

      for (f in b) {
        b.hasOwnProperty(f) && (e[f] = b[f]);
      }
    }

    return e;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (d) {
    return function (e) {
      return d(e)();
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
      e = a["React.DOM.Props"],
      k = a["Effect.Uncurried"];
  a = e.unsafeMkProps("value");
  var g = e.unsafeMkProps("target"),
      b = e.unsafeUnfoldProps("style"),
      f = e.unsafeMkProps("href"),
      c = e.unsafeMkProps("disabled"),
      m = e.unsafeMkProps("defaultValue"),
      l = e.unsafeMkProps("className"),
      q = e.unsafeMkProps("checked"),
      t = e.unsafeMkProps("type"),
      n = e.unsafeMkProps("id");
  d.style = b;
  d.checked = q;
  d.className = l;
  d.defaultValue = m;
  d.disabled = c;
  d.href = f;
  d._id = n;
  d.target = g;
  d._type = t;
  d.value = a;

  d.onChange = function (p) {
    return e.unsafeMkProps("onChange")(k.mkEffectFn1(p));
  };

  d.onClick = function (p) {
    return e.unsafeMkProps("onClick")(k.mkEffectFn1(p));
  };

  d.unsafeFromPropsArray = e.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var d = a["React.DOM"],
      e = a.React,
      k = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var g = function g(z) {
    return function (y) {
      return function (x) {
        if (z) {
          if (z) var r = e.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [z.constructor.name]);
        } else r = e.createElementTagName;
        return r(y)(k.unsafeFromPropsArray(x));
      };
    };
  },
      b = g(!1)("option"),
      f = g(!1)("select"),
      c = g(!1)("span"),
      m = g(!1)("ul"),
      l = g(!1)("li"),
      q = g(!1)("div"),
      t = g(!1)("code"),
      n = g(!1)("cite"),
      p = g(!1)("button"),
      F = g(!1)("a");

  d.text = a;
  d.a = F;

  d.br = function (z) {
    return g(!1)("br")(z)([]);
  };

  d.button = p;
  d.cite = n;
  d.code = t;
  d.div = q;

  d.input = function (z) {
    return g(!1)("input")(z)([]);
  };

  d.li = l;
  d.option = b;
  d.select = f;
  d.span = c;
  d.ul = m;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var d = a["Concur.React.DOM"],
      e = a["Concur.Core.DOM"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      b = a["Data.Functor"],
      f = a["React.DOM"],
      c = function c(y) {
    return function (x) {
      return function (r) {
        return [y(x)(r)];
      };
    };
  },
      m = function m(y) {
    return function (x) {
      return e.elLeaf(y)(b.functorArray)(function (r) {
        return [x(r)];
      });
    };
  },
      l = function l(y) {
    return function (x) {
      return function (r) {
        return e["el'"](y)(x)(b.functorArray)(c(r));
      };
    };
  },
      q = function q(y) {
    return function (x) {
      return l(x)(y)(f.li);
    };
  },
      t = function t(y) {
    return function (x) {
      return l(x)(y)(f.span);
    };
  },
      n = function n(y) {
    return function (x) {
      return e.el(y)(b.functorArray)(c(x));
    };
  },
      p = function p(y) {
    return function (x) {
      return l(x)(y)(f.div);
    };
  },
      F = function F(y) {
    return function (x) {
      return l(x)(y)(f.code);
    };
  },
      z = function z(y) {
    return function (x) {
      return l(x)(y)(f.cite);
    };
  };

  d.text = function (y) {
    return function (x) {
      return k.liftWidget(y)(g.display([f.text(x)]));
    };
  };

  d.a = function (y) {
    return function (x) {
      return l(x)(y)(f.a);
    };
  };

  d["br'"] = function (y) {
    return m(y)(f.br)([]);
  };

  d.button_ = function (y) {
    return n(y)(f.button);
  };

  d.button = function (y) {
    return function (x) {
      return l(x)(y)(f.button);
    };
  };

  d["cite'"] = function (y) {
    return function (x) {
      return z(y)(x)([]);
    };
  };

  d["code'"] = function (y) {
    return function (x) {
      return F(y)(x)([]);
    };
  };

  d.div_ = function (y) {
    return n(y)(f.div);
  };

  d.div = p;

  d["div'"] = function (y) {
    return function (x) {
      return p(y)(x)([]);
    };
  };

  d.input = function (y) {
    return m(y)(f.input);
  };

  d.li_ = function (y) {
    return n(y)(f.li);
  };

  d.li = q;

  d["li'"] = function (y) {
    return function (x) {
      return q(y)(x)([]);
    };
  };

  d.option = function (y) {
    return function (x) {
      return l(x)(y)(f.option);
    };
  };

  d.select = function (y) {
    return function (x) {
      return l(x)(y)(f.select);
    };
  };

  d.span_ = function (y) {
    return n(y)(f.span);
  };

  d.span = t;

  d["span'"] = function (y) {
    return function (x) {
      return t(y)(x)([]);
    };
  };

  d.ul_ = function (y) {
    return n(y)(f.ul);
  };

  d.ul = function (y) {
    return function (x) {
      return l(x)(y)(f.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var d = a["Concur.React.Props"],
      e = a["Concur.Core.Props"],
      k = a["Data.Array"],
      g = a["Data.Foldable"],
      b = a["Data.Maybe"],
      f = a["Data.Monoid"],
      c = a["React.DOM.Props"];
  a = new e.Handler(c.onClick);

  var m = new e.Handler(c.onChange),
      l = function l(t) {
    return e.PrimProp.create(c.className(t));
  },
      q = function () {
    var t = g.intercalate(g.foldableArray)(f.monoidString)(" "),
        n = k.concatMap(b.maybe([])(function (p) {
      return [p];
    }));
    return function (p) {
      return l(t(n(p)));
    };
  }();

  d.classList = q;

  d.unsafeTargetValue = function (t) {
    return t.target.value;
  };

  d.style = function (t) {
    return e.PrimProp.create(c.style(t));
  };

  d.checked = function (t) {
    return e.PrimProp.create(c.checked(t));
  };

  d.className = l;

  d.defaultValue = function (t) {
    return e.PrimProp.create(c.defaultValue(t));
  };

  d.disabled = function (t) {
    return e.PrimProp.create(c.disabled(t));
  };

  d.href = function (t) {
    return e.PrimProp.create(c.href(t));
  };

  d._id = function (t) {
    return e.PrimProp.create(c._id(t));
  };

  d._type = function (t) {
    return e.PrimProp.create(c._type(t));
  };

  d.value = function (t) {
    return e.PrimProp.create(c.value(t));
  };

  d.onChange = m;
  d.onClick = a;
})(PS);

(function (a) {
  var d = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (e, k) {
    return d.render(e, k);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var d = a.ReactDOM,
      e = a["Data.Functor"],
      k = a["Data.Nullable"],
      g = a.Effect;

  a.ReactDOM.render = function (b) {
    return function (f) {
      return e.map(g.functorEffect)(k.toMaybe)(function () {
        return d.renderImpl(b, f);
      });
    };
  };
})(PS);

(function (a) {
  a._getElementById = function (d) {
    return function (e) {
      return function () {
        return e.getElementById(d);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});

(function (a) {
  a["Web.DOM.NonElementParentNode"] = a["Web.DOM.NonElementParentNode"] || {};
  var d = a["Web.DOM.NonElementParentNode"],
      e = a["Data.Functor"],
      k = a["Data.Nullable"],
      g = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (b) {
    var f = e.map(g.functorEffect)(k.toMaybe),
        c = d._getElementById(b);

    return function (m) {
      return f(c(m));
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
  var e = a.unsafeCoerce;
  d.toDocument = a.unsafeCoerce;
  d.toNonElementParentNode = e;
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
      e = a["Data.Functor"],
      k = a["Data.Maybe"],
      g = a["Data.Unit"],
      b = a.Effect,
      f = a.ReactDOM,
      c = a["Web.DOM.NonElementParentNode"],
      m = a["Web.HTML"],
      l = a["Web.HTML.HTMLDocument"],
      q = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (t) {
    return function (n) {
      return function () {
        var p = m.window();
        p = q.document(p)();
        p = l.toNonElementParentNode(p);
        p = c.getElementById(t)(p)();
        if (p instanceof k.Nothing) return g.unit;
        if (p instanceof k.Just) return e["void"](b.functorEffect)(f.render(d.renderComponent(n))(p.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [p.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Maybe.Trans"] = a["Control.Monad.Maybe.Trans"] || {};

  var d = a["Control.Monad.Maybe.Trans"],
      e = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Data.Functor"],
      c = a["Data.Maybe"],
      m = function m(p) {
    return new f.Functor(function (F) {
      return function (z) {
        return f.map(p)(f.map(c.functorMaybe)(F))(z);
      };
    });
  },
      l = function l(p) {
    return new b.Monad(function () {
      return n(p);
    }, function () {
      return q(p);
    });
  },
      q = function q(p) {
    return new g.Bind(function () {
      return t(p);
    }, function (F) {
      return function (z) {
        return g.bind(p.Bind1())(F)(function (y) {
          if (y instanceof c.Nothing) return e.pure(p.Applicative0())(c.Nothing.value);
          if (y instanceof c.Just) return z(y.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [y.constructor.name]);
        });
      };
    });
  },
      t = function t(p) {
    return new k.Apply(function () {
      return m(p.Bind1().Apply0().Functor0());
    }, b.ap(l(p)));
  },
      n = function n(p) {
    return new e.Applicative(function () {
      return t(p);
    }, function () {
      var F = e.pure(p.Applicative0());
      return function (z) {
        return F(c.Just.create(z));
      };
    }());
  };

  d.MaybeT = function (p) {
    return p;
  };

  d.runMaybeT = function (p) {
    return p;
  };

  d.applicativeMaybeT = n;
  d.bindMaybeT = q;
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (d) {
    return function (e) {
      return d(e).value1;
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var d = a["Control.Monad.State.Class"],
      e = a["Data.Tuple"],
      k = a["Data.Unit"];

  d.MonadState = function (g, b) {
    this.Monad0 = g;
    this.state = b;
  };

  d.get = function (g) {
    return (0, g.state)(function (b) {
      return new e.Tuple(b, b);
    });
  };

  d.put = function (g) {
    return function (b) {
      return (0, g.state)(function (f) {
        return new e.Tuple(k.unit, b);
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};

  var d = a["Control.Monad.State.Trans"],
      e = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Control.Monad.State.Class"],
      c = a["Data.Functor"],
      m = a["Data.Tuple"],
      l = function l(F) {
    return new c.Functor(function (z) {
      return function (y) {
        return function (x) {
          return c.map(F)(function (r) {
            return new m.Tuple(z(r.value0), r.value1);
          })(y(x));
        };
      };
    });
  },
      q = function q(F) {
    return new b.Monad(function () {
      return p(F);
    }, function () {
      return t(F);
    });
  },
      t = function t(F) {
    return new g.Bind(function () {
      return n(F);
    }, function (z) {
      return function (y) {
        return function (x) {
          return g.bind(F.Bind1())(z(x))(function (r) {
            return y(r.value0)(r.value1);
          });
        };
      };
    });
  },
      n = function n(F) {
    return new k.Apply(function () {
      return l(F.Bind1().Apply0().Functor0());
    }, b.ap(q(F)));
  },
      p = function p(F) {
    return new e.Applicative(function () {
      return n(F);
    }, function (z) {
      return function (y) {
        return e.pure(F.Applicative0())(new m.Tuple(z, y));
      };
    });
  };

  d.bindStateT = t;

  d.monadStateStateT = function (F) {
    return new f.MonadState(function () {
      return q(F);
    }, function (z) {
      return function () {
        var y = e.pure(F.Applicative0());
        return function (x) {
          return y(z(x));
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
      e = a["Data.Enum"],
      k = a["Control.Apply"],
      g = a["Data.Bounded"],
      b = a["Data.Functor"],
      f = a["Data.Maybe"],
      c = a["Data.Newtype"],
      m = a["Data.Ord"],
      l = a["Data.Tuple"],
      q = a["Data.Unfoldable1"];

  a = function a(K) {
    return K;
  };

  var t = function t(K) {
    this.Bounded0 = K;
  },
      n = function n(K, G, E) {
    this.Ord0 = K;
    this.pred = G;
    this.succ = E;
  },
      p = function p(K, G, E, T, W) {
    this.Bounded0 = K;
    this.Enum1 = G;
    this.cardinality = E;
    this.fromEnum = T;
    this.toEnum = W;
  },
      F = new t(function () {
    return g.boundedBoolean;
  }),
      z = new c.Newtype(function (K) {
    return K;
  }, a),
      y = function y(K) {
    return new n(function () {
      return f.ordMaybe(K.Enum1().Ord0());
    }, function (G) {
      if (G instanceof f.Nothing) return f.Nothing.value;
      if (G instanceof f.Just) return new f.Just((0, K.Enum1().pred)(G.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [G.constructor.name]);
    }, function (G) {
      if (G instanceof f.Nothing) return new f.Just(new f.Just(g.bottom(K.Bounded0())));
      if (G instanceof f.Just) return b.map(f.functorMaybe)(f.Just.create)((0, K.Enum1().succ)(G.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [G.constructor.name]);
    });
  },
      x = new n(function () {
    return m.ordBoolean;
  }, function (K) {
    return K ? new f.Just(!1) : f.Nothing.value;
  }, function (K) {
    return K ? f.Nothing.value : new f.Just(!0);
  }),
      r = function r(K) {
    return function (G) {
      return function (E) {
        return K(G(E) + 1 | 0);
      };
    };
  },
      D = function D(K) {
    return function (G) {
      return function (E) {
        return K(G(E) - 1 | 0);
      };
    };
  },
      v = function v(K) {
    return K >= g.bottom(g.boundedInt) && K <= g.top(g.boundedInt) ? new f.Just(e.fromCharCode(K)) : f.Nothing.value;
  },
      I = new n(function () {
    return m.ordChar;
  }, D(v)(e.toCharCode), r(v)(e.toCharCode));

  v = new p(function () {
    return g.boundedChar;
  }, function () {
    return I;
  }, e.toCharCode(g.top(g.boundedChar)) - e.toCharCode(g.bottom(g.boundedChar)) | 0, e.toCharCode, v);
  var L = new p(function () {
    return g.boundedBoolean;
  }, function () {
    return x;
  }, 2, function (K) {
    if (!K) return 0;
    if (K) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [K.constructor.name]);
  }, function (K) {
    return 0 === K ? new f.Just(!1) : 1 === K ? new f.Just(!0) : f.Nothing.value;
  });
  d.Enum = n;
  d.BoundedEnum = p;

  d.toEnum = function (K) {
    return K.toEnum;
  };

  d.fromEnum = function (K) {
    return K.fromEnum;
  };

  d.toEnumWithDefaults = function (K) {
    return function (G) {
      return function (E) {
        return function (T) {
          var W = (0, K.toEnum)(T);
          if (W instanceof f.Just) return W.value0;
          if (W instanceof f.Nothing) return T < (0, K.fromEnum)(g.bottom(K.Bounded0())) ? G : E;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [W.constructor.name]);
        };
      };
    };
  };

  d.Cardinality = a;

  d.upFromIncluding = function (K) {
    return function (G) {
      return q.unfoldr1(G)(k.apply(k.applyFn)(l.Tuple.create)(K.succ));
    };
  };

  d.defaultSucc = r;
  d.defaultPred = D;
  d.SmallBounded = t;
  d.boundedEnumBoolean = L;
  d.boundedEnumChar = v;
  d.newtypeCardinality = z;

  d.boundedEnumMaybe = function (K) {
    return function (G) {
      return new p(function () {
        return f.boundedMaybe(G.Bounded0());
      }, function () {
        return y(G);
      }, c.unwrap(z)(G.cardinality) + 1 | 0, function (E) {
        if (E instanceof f.Nothing) return 0;
        if (E instanceof f.Just) return (0, G.fromEnum)(E.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [E.constructor.name]);
      }, function (E) {
        return 0 === E ? f.Nothing.value : b.map(f.functorMaybe)(f.Just.create)((0, G.toEnum)(E - 1 | 0));
      });
    };
  };

  d.smallBoundedBoolean = F;
})(PS);

(function (a) {
  a["Data.Char"] = a["Data.Char"] || {};
  var d = a["Data.Char"];
  a = a["Data.Enum"];
  a = a.toEnum(a.boundedEnumChar);
  d.fromCharCode = a;
})(PS);

(function (a) {
  a.intSub = function (d) {
    return function (e) {
      return d - e | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (d) {
    return function (e) {
      return d + e | 0;
    };
  };

  a.intMul = function (d) {
    return function (e) {
      return d * e | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var d = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (e, k, g, b) {
    this.add = e;
    this.mul = k;
    this.one = g;
    this.zero = b;
  }(a.intAdd, a.intMul, 1, 0);
  d.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var d = a["Data.Ring"],
      e = a["Data.Semiring"];
  a = new function (k, g) {
    this.Semiring0 = k;
    this.sub = g;
  }(function () {
    return e.semiringInt;
  }, a["Data.Ring"].intSub);
  d.ringInt = a;
})(PS);

(function (a) {
  a["Data.CommutativeRing"] = a["Data.CommutativeRing"] || {};
  var d = a["Data.CommutativeRing"],
      e = a["Data.Ring"];
  a = new function (k) {
    this.Ring0 = k;
  }(function () {
    return e.ringInt;
  });
  d.commutativeRingInt = a;
})(PS);

(function (a) {
  a.canonicalDateImpl = function (d, e, k, g) {
    k = new Date(Date.UTC(e, k - 1, g));
    0 <= e && 100 > e && k.setUTCFullYear(e);
    return d(k.getUTCFullYear())(k.getUTCMonth() + 1)(k.getUTCDate());
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var d = a["Data.Date.Component"],
      e = a["Data.Boolean"],
      k = a["Data.Bounded"],
      g = a["Data.Enum"],
      b = a["Data.Eq"],
      f = a["Data.Maybe"],
      c = a["Data.Ord"],
      m = a["Data.Ordering"],
      l = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      q = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      t = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      n = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      p = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      F = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      z = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      y = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      x = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      r = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      D = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      v = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      I = c.ordInt,
      L = c.ordInt;

  a = b.eqInt;
  var K = new b.Eq(function (J) {
    return function (Y) {
      return J instanceof l && Y instanceof l || J instanceof q && Y instanceof q || J instanceof t && Y instanceof t || J instanceof n && Y instanceof n || J instanceof p && Y instanceof p || J instanceof F && Y instanceof F || J instanceof z && Y instanceof z || J instanceof y && Y instanceof y || J instanceof x && Y instanceof x || J instanceof r && Y instanceof r || J instanceof D && Y instanceof D || J instanceof v && Y instanceof v ? !0 : !1;
    };
  }),
      G = new c.Ord(function () {
    return K;
  }, function (J) {
    return function (Y) {
      if (J instanceof l && Y instanceof l) return m.EQ.value;
      if (J instanceof l) return m.LT.value;
      if (Y instanceof l) return m.GT.value;
      if (J instanceof q && Y instanceof q) return m.EQ.value;
      if (J instanceof q) return m.LT.value;
      if (Y instanceof q) return m.GT.value;
      if (J instanceof t && Y instanceof t) return m.EQ.value;
      if (J instanceof t) return m.LT.value;
      if (Y instanceof t) return m.GT.value;
      if (J instanceof n && Y instanceof n) return m.EQ.value;
      if (J instanceof n) return m.LT.value;
      if (Y instanceof n) return m.GT.value;
      if (J instanceof p && Y instanceof p) return m.EQ.value;
      if (J instanceof p) return m.LT.value;
      if (Y instanceof p) return m.GT.value;
      if (J instanceof F && Y instanceof F) return m.EQ.value;
      if (J instanceof F) return m.LT.value;
      if (Y instanceof F) return m.GT.value;
      if (J instanceof z && Y instanceof z) return m.EQ.value;
      if (J instanceof z) return m.LT.value;
      if (Y instanceof z) return m.GT.value;
      if (J instanceof y && Y instanceof y) return m.EQ.value;
      if (J instanceof y) return m.LT.value;
      if (Y instanceof y) return m.GT.value;
      if (J instanceof x && Y instanceof x) return m.EQ.value;
      if (J instanceof x) return m.LT.value;
      if (Y instanceof x) return m.GT.value;
      if (J instanceof r && Y instanceof r) return m.EQ.value;
      if (J instanceof r) return m.LT.value;
      if (Y instanceof r) return m.GT.value;
      if (J instanceof D && Y instanceof D) return m.EQ.value;
      if (J instanceof D) return m.LT.value;
      if (Y instanceof D) return m.GT.value;
      if (J instanceof v && Y instanceof v) return m.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [J.constructor.name, Y.constructor.name]);
    };
  });
  b = b.eqInt;
  var E = new k.Bounded(function () {
    return I;
  }, -271820, 275759),
      T = new k.Bounded(function () {
    return G;
  }, l.value, v.value),
      W = new g.BoundedEnum(function () {
    return E;
  }, function () {
    return A;
  }, 547580, function (J) {
    return J;
  }, function (J) {
    if (-271820 <= J && 275759 >= J) return new f.Just(J);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [J.constructor.name]);
  }),
      A = new g.Enum(function () {
    return I;
  }, function () {
    var J = g.toEnum(W),
        Y = g.fromEnum(W);
    return function (aa) {
      return J(Y(aa) - 1 | 0);
    };
  }(), function () {
    var J = g.toEnum(W),
        Y = g.fromEnum(W);
    return function (aa) {
      return J(Y(aa) + 1 | 0);
    };
  }()),
      C = new g.BoundedEnum(function () {
    return T;
  }, function () {
    return S;
  }, 12, function (J) {
    if (J instanceof l) return 1;
    if (J instanceof q) return 2;
    if (J instanceof t) return 3;
    if (J instanceof n) return 4;
    if (J instanceof p) return 5;
    if (J instanceof F) return 6;
    if (J instanceof z) return 7;
    if (J instanceof y) return 8;
    if (J instanceof x) return 9;
    if (J instanceof r) return 10;
    if (J instanceof D) return 11;
    if (J instanceof v) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [J.constructor.name]);
  }, function (J) {
    return 1 === J ? new f.Just(l.value) : 2 === J ? new f.Just(q.value) : 3 === J ? new f.Just(t.value) : 4 === J ? new f.Just(n.value) : 5 === J ? new f.Just(p.value) : 6 === J ? new f.Just(F.value) : 7 === J ? new f.Just(z.value) : 8 === J ? new f.Just(y.value) : 9 === J ? new f.Just(x.value) : 10 === J ? new f.Just(r.value) : 11 === J ? new f.Just(D.value) : 12 === J ? new f.Just(v.value) : f.Nothing.value;
  }),
      S = new g.Enum(function () {
    return G;
  }, function () {
    var J = g.toEnum(C),
        Y = g.fromEnum(C);
    return function (aa) {
      return J(Y(aa) - 1 | 0);
    };
  }(), function () {
    var J = g.toEnum(C),
        Y = g.fromEnum(C);
    return function (aa) {
      return J(Y(aa) + 1 | 0);
    };
  }()),
      w = new k.Bounded(function () {
    return L;
  }, 1, 31),
      N = new g.BoundedEnum(function () {
    return w;
  }, function () {
    return M;
  }, 31, function (J) {
    return J;
  }, function (J) {
    if (1 <= J && 31 >= J) return new f.Just(J);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [J.constructor.name]);
  }),
      M = new g.Enum(function () {
    return L;
  }, function () {
    var J = g.toEnum(N),
        Y = g.fromEnum(N);
    return function (aa) {
      return J(Y(aa) - 1 | 0);
    };
  }(), function () {
    var J = g.toEnum(N),
        Y = g.fromEnum(N);
    return function (aa) {
      return J(Y(aa) + 1 | 0);
    };
  }());
  d.eqYear = a;
  d.ordYear = I;
  d.boundedYear = E;
  d.boundedEnumYear = W;
  d.eqMonth = K;
  d.ordMonth = G;
  d.boundedMonth = T;
  d.boundedEnumMonth = C;
  d.eqDay = b;
  d.ordDay = L;
  d.boundedDay = w;
  d.boundedEnumDay = N;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var d = a["Data.Date"],
      e = a["Data.Date"],
      k = a["Data.Bounded"],
      g = a["Data.Date.Component"],
      b = a["Data.Enum"],
      f = a["Data.Eq"],
      c = a["Data.Maybe"],
      m = a["Data.Ord"],
      l = a["Data.Ordering"],
      q = function () {
    function p(F, z, y) {
      this.value0 = F;
      this.value1 = z;
      this.value2 = y;
    }

    p.create = function (F) {
      return function (z) {
        return function (y) {
          return new p(F, z, y);
        };
      };
    };

    return p;
  }(),
      t = new f.Eq(function (p) {
    return function (F) {
      return f.eq(g.eqYear)(p.value0)(F.value0) && f.eq(g.eqMonth)(p.value1)(F.value1) && f.eq(g.eqDay)(p.value2)(F.value2);
    };
  }),
      n = new m.Ord(function () {
    return t;
  }, function (p) {
    return function (F) {
      var z = m.compare(g.ordYear)(p.value0)(F.value0);
      if (z instanceof l.LT) return l.LT.value;
      if (z instanceof l.GT) return l.GT.value;
      z = m.compare(g.ordMonth)(p.value1)(F.value1);
      return z instanceof l.LT ? l.LT.value : z instanceof l.GT ? l.GT.value : m.compare(g.ordDay)(p.value2)(F.value2);
    };
  });

  a = new k.Bounded(function () {
    return n;
  }, new q(k.bottom(g.boundedYear), k.bottom(g.boundedMonth), k.bottom(g.boundedDay)), new q(k.top(g.boundedYear), k.top(g.boundedMonth), k.top(g.boundedDay)));

  d.canonicalDate = function (p) {
    return function (F) {
      return function (z) {
        return e.canonicalDateImpl(function (y) {
          return function (x) {
            return function (r) {
              return new q(y, c.fromJust()(b.toEnum(g.boundedEnumMonth)(x)), r);
            };
          };
        }, p, b.fromEnum(g.boundedEnumMonth)(F), z);
      };
    };
  };

  d.year = function (p) {
    return p.value0;
  };

  d.month = function (p) {
    return p.value1;
  };

  d.day = function (p) {
    return p.value2;
  };

  d.eqDate = t;
  d.ordDate = n;
  d.boundedDate = a;
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var d = a["Data.Time.Component"],
      e = a["Data.Boolean"],
      k = a["Data.Bounded"],
      g = a["Data.Enum"],
      b = a["Data.Eq"],
      f = a["Data.Maybe"];
  a = a["Data.Ord"];
  var c = a.ordInt,
      m = a.ordInt,
      l = a.ordInt,
      q = a.ordInt,
      t = a = b.eqInt,
      n = b.eqInt;
  b = b.eqInt;
  var p = new k.Bounded(function () {
    return c;
  }, 0, 59),
      F = new k.Bounded(function () {
    return m;
  }, 0, 59),
      z = new k.Bounded(function () {
    return l;
  }, 0, 999),
      y = new k.Bounded(function () {
    return q;
  }, 0, 23),
      x = new g.BoundedEnum(function () {
    return p;
  }, function () {
    return r;
  }, 60, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 59 >= E) return new f.Just(E);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [E.constructor.name]);
  }),
      r = new g.Enum(function () {
    return c;
  }, function () {
    var E = g.toEnum(x),
        T = g.fromEnum(x);
    return function (W) {
      return E(T(W) - 1 | 0);
    };
  }(), function () {
    var E = g.toEnum(x),
        T = g.fromEnum(x);
    return function (W) {
      return E(T(W) + 1 | 0);
    };
  }()),
      D = new g.BoundedEnum(function () {
    return F;
  }, function () {
    return v;
  }, 60, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 59 >= E) return new f.Just(E);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [E.constructor.name]);
  }),
      v = new g.Enum(function () {
    return m;
  }, function () {
    var E = g.toEnum(D),
        T = g.fromEnum(D);
    return function (W) {
      return E(T(W) - 1 | 0);
    };
  }(), function () {
    var E = g.toEnum(D),
        T = g.fromEnum(D);
    return function (W) {
      return E(T(W) + 1 | 0);
    };
  }()),
      I = new g.BoundedEnum(function () {
    return z;
  }, function () {
    return L;
  }, 1E3, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 999 >= E) return new f.Just(E);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [E.constructor.name]);
  }),
      L = new g.Enum(function () {
    return l;
  }, function () {
    var E = g.toEnum(I),
        T = g.fromEnum(I);
    return function (W) {
      return E(T(W) - 1 | 0);
    };
  }(), function () {
    var E = g.toEnum(I),
        T = g.fromEnum(I);
    return function (W) {
      return E(T(W) + 1 | 0);
    };
  }()),
      K = new g.BoundedEnum(function () {
    return y;
  }, function () {
    return G;
  }, 24, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 23 >= E) return new f.Just(E);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [E.constructor.name]);
  }),
      G = new g.Enum(function () {
    return q;
  }, function () {
    var E = g.toEnum(K),
        T = g.fromEnum(K);
    return function (W) {
      return E(T(W) - 1 | 0);
    };
  }(), function () {
    var E = g.toEnum(K),
        T = g.fromEnum(K);
    return function (W) {
      return E(T(W) + 1 | 0);
    };
  }());
  d.eqHour = b;
  d.ordHour = q;
  d.boundedHour = y;
  d.boundedEnumHour = K;
  d.eqMinute = t;
  d.ordMinute = m;
  d.boundedMinute = F;
  d.boundedEnumMinute = D;
  d.eqSecond = a;
  d.ordSecond = c;
  d.boundedSecond = p;
  d.boundedEnumSecond = x;
  d.eqMillisecond = n;
  d.ordMillisecond = l;
  d.boundedMillisecond = z;
  d.boundedEnumMillisecond = I;
})(PS);

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  var d = a["Data.Time"],
      e = a["Data.Bounded"],
      k = a["Data.Eq"],
      g = a["Data.Ord"],
      b = a["Data.Ordering"],
      f = a["Data.Time.Component"];

  a = function () {
    function l(q, t, n, p) {
      this.value0 = q;
      this.value1 = t;
      this.value2 = n;
      this.value3 = p;
    }

    l.create = function (q) {
      return function (t) {
        return function (n) {
          return function (p) {
            return new l(q, t, n, p);
          };
        };
      };
    };

    return l;
  }();

  var c = new k.Eq(function (l) {
    return function (q) {
      return k.eq(f.eqHour)(l.value0)(q.value0) && k.eq(f.eqMinute)(l.value1)(q.value1) && k.eq(f.eqSecond)(l.value2)(q.value2) && k.eq(f.eqMillisecond)(l.value3)(q.value3);
    };
  }),
      m = new g.Ord(function () {
    return c;
  }, function (l) {
    return function (q) {
      var t = g.compare(f.ordHour)(l.value0)(q.value0);
      if (t instanceof b.LT) return b.LT.value;
      if (t instanceof b.GT) return b.GT.value;
      t = g.compare(f.ordMinute)(l.value1)(q.value1);
      if (t instanceof b.LT) return b.LT.value;
      if (t instanceof b.GT) return b.GT.value;
      t = g.compare(f.ordSecond)(l.value2)(q.value2);
      return t instanceof b.LT ? b.LT.value : t instanceof b.GT ? b.GT.value : g.compare(f.ordMillisecond)(l.value3)(q.value3);
    };
  });
  e = new e.Bounded(function () {
    return m;
  }, new a(e.bottom(f.boundedHour), e.bottom(f.boundedMinute), e.bottom(f.boundedSecond), e.bottom(f.boundedMillisecond)), new a(e.top(f.boundedHour), e.top(f.boundedMinute), e.top(f.boundedSecond), e.top(f.boundedMillisecond)));
  d.Time = a;

  d.hour = function (l) {
    return l.value0;
  };

  d.minute = function (l) {
    return l.value1;
  };

  d.second = function (l) {
    return l.value2;
  };

  d.millisecond = function (l) {
    return l.value3;
  };

  d.eqTime = c;
  d.ordTime = m;
  d.boundedTime = e;
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  var d = a["Data.DateTime"],
      e = a["Data.Bounded"],
      k = a["Data.Date"],
      g = a["Data.Eq"],
      b = a["Data.Ord"],
      f = a["Data.Ordering"],
      c = a["Data.Time"];

  a = function () {
    function q(t, n) {
      this.value0 = t;
      this.value1 = n;
    }

    q.create = function (t) {
      return function (n) {
        return new q(t, n);
      };
    };

    return q;
  }();

  var m = new g.Eq(function (q) {
    return function (t) {
      return g.eq(k.eqDate)(q.value0)(t.value0) && g.eq(c.eqTime)(q.value1)(t.value1);
    };
  }),
      l = new b.Ord(function () {
    return m;
  }, function (q) {
    return function (t) {
      var n = b.compare(k.ordDate)(q.value0)(t.value0);
      return n instanceof f.LT ? f.LT.value : n instanceof f.GT ? f.GT.value : b.compare(c.ordTime)(q.value1)(t.value1);
    };
  });
  e = new e.Bounded(function () {
    return l;
  }, new a(e.bottom(k.boundedDate), e.bottom(c.boundedTime)), new a(e.top(k.boundedDate), e.top(c.boundedTime)));
  d.DateTime = a;
  d.boundedDateTime = e;
})(PS);

(function (a) {
  a.toDateTimeImpl = function (d) {
    return function (e) {
      e = new Date(e);
      return d(e.getUTCFullYear())(e.getUTCMonth() + 1)(e.getUTCDate())(e.getUTCHours())(e.getUTCMinutes())(e.getUTCSeconds())(e.getUTCMilliseconds());
    };
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.DateTime.Instant"] = a["Data.DateTime.Instant"] || {};
  var d = a["Data.DateTime.Instant"],
      e = a["Data.DateTime.Instant"],
      k = a["Data.Boolean"],
      g = a["Data.Date"],
      b = a["Data.Date.Component"],
      f = a["Data.DateTime"],
      c = a["Data.Enum"],
      m = a["Data.Maybe"],
      l = a["Data.Time"];

  a = function () {
    return e.toDateTimeImpl(function (q) {
      return function (t) {
        return function (n) {
          return function (p) {
            return function (F) {
              return function (z) {
                return function (y) {
                  return new f.DateTime(g.canonicalDate(q)(m.fromJust()(c.toEnum(b.boundedEnumMonth)(t)))(n), new l.Time(p, F, z, y));
                };
              };
            };
          };
        };
      };
    });
  }();

  d.instant = function (q) {
    if (-86399778816E5 <= q && 8639977881599999 >= q) return new m.Just(q);
    if (k.otherwise) return m.Nothing.value;
    throw Error("Failed pattern match at Data.DateTime.Instant (line 44, column 1 - line 44, column 41): " + [q.constructor.name]);
  };

  d.toDateTime = a;
})(PS);

(function (a) {
  a.intDegree = function (d) {
    return Math.min(Math.abs(d), 2147483647);
  };

  a.intDiv = function (d) {
    return function (e) {
      return 0 === e ? 0 : 0 < e ? Math.floor(d / e) : -Math.floor(d / -e);
    };
  };

  a.intMod = function (d) {
    return function (e) {
      if (0 === e) return 0;
      e = Math.abs(e);
      return (d % e + e) % e;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var d = a["Data.EuclideanRing"],
      e = a["Data.EuclideanRing"],
      k = a["Data.CommutativeRing"];
  a = new function (g, b, f, c) {
    this.CommutativeRing0 = g;
    this.degree = b;
    this.div = f;
    this.mod = c;
  }(function () {
    return k.commutativeRingInt;
  }, e.intDegree, e.intDiv, e.intMod);

  d.div = function (g) {
    return g.div;
  };

  d.mod = function (g) {
    return g.mod;
  };

  d.euclideanRingInt = a;
})(PS);

(function (a) {
  a["Data.Generic.Rep"] = a["Data.Generic.Rep"] || {};
  a = a["Data.Generic.Rep"];

  var d = function () {
    function g(b) {
      this.value0 = b;
    }

    g.create = function (b) {
      return new g(b);
    };

    return g;
  }(),
      e = function () {
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
  a.Inl = d;
  a.Inr = e;

  a.Constructor = function (g) {
    return g;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var d = a["Data.Generic.Rep.Bounded"],
      e = a["Data.Generic.Rep"],
      k = function k(m) {
    this["genericTop'"] = m;
  },
      g = function g(m) {
    this["genericBottom'"] = m;
  };

  a = new k(e.NoArguments.value);

  var b = function b(m) {
    return m["genericTop'"];
  },
      f = new g(e.NoArguments.value),
      c = function c(m) {
    return m["genericBottom'"];
  };

  d["genericBottom'"] = c;

  d.genericBottom = function (m) {
    return function (l) {
      return e.to(m)(c(l));
    };
  };

  d["genericTop'"] = b;

  d.genericTop = function (m) {
    return function (l) {
      return e.to(m)(b(l));
    };
  };

  d.genericBottomNoArguments = f;

  d.genericBottomSum = function (m) {
    return new g(new e.Inl(c(m)));
  };

  d.genericBottomConstructor = function (m) {
    return new g(c(m));
  };

  d.genericTopNoArguments = a;

  d.genericTopSum = function (m) {
    return new k(new e.Inr(b(m)));
  };

  d.genericTopConstructor = function (m) {
    return new k(b(m));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var d = a["Data.Generic.Rep.Enum"],
      e = a["Data.Boolean"],
      k = a["Data.Enum"],
      g = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      f = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Maybe"],
      m = a["Data.Newtype"],
      l = function l(x, r) {
    this["genericPred'"] = x;
    this["genericSucc'"] = r;
  },
      q = function q(x, r, D) {
    this["genericCardinality'"] = x;
    this["genericFromEnum'"] = r;
    this["genericToEnum'"] = D;
  },
      t = function t(x) {
    return x["genericToEnum'"];
  },
      n = function n(x) {
    return x["genericSucc'"];
  },
      p = function p(x) {
    return x["genericPred'"];
  },
      F = function F(x) {
    return x["genericFromEnum'"];
  };

  a = new l(function (x) {
    return c.Nothing.value;
  }, function (x) {
    return c.Nothing.value;
  });

  var z = function z(x) {
    return x["genericCardinality'"];
  },
      y = new q(1, function (x) {
    return 0;
  }, function (x) {
    return 0 === x ? new c.Just(b.NoArguments.value) : c.Nothing.value;
  });

  d.genericPred = function (x) {
    return function (r) {
      var D = g.map(c.functorMaybe)(b.to(x)),
          v = p(r),
          I = b.from(x);
      return function (L) {
        return D(v(I(L)));
      };
    };
  };

  d.genericSucc = function (x) {
    return function (r) {
      var D = g.map(c.functorMaybe)(b.to(x)),
          v = n(r),
          I = b.from(x);
      return function (L) {
        return D(v(I(L)));
      };
    };
  };

  d.genericCardinality = function (x) {
    return function (r) {
      return m.unwrap(k.newtypeCardinality)(z(r));
    };
  };

  d.genericToEnum = function (x) {
    return function (r) {
      var D = g.map(c.functorMaybe)(b.to(x)),
          v = t(r);
      return function (I) {
        return D(v(I));
      };
    };
  };

  d.genericFromEnum = function (x) {
    return function (r) {
      var D = F(r),
          v = b.from(x);
      return function (I) {
        return D(v(I));
      };
    };
  };

  d.genericEnumNoArguments = a;

  d.genericEnumConstructor = function (x) {
    return new l(function (r) {
      return g.map(c.functorMaybe)(b.Constructor)(p(x)(r));
    }, function (r) {
      return g.map(c.functorMaybe)(b.Constructor)(n(x)(r));
    });
  };

  d.genericEnumSum = function (x) {
    return function (r) {
      return function (D) {
        return function (v) {
          return new l(function (I) {
            if (I instanceof b.Inl) return g.map(c.functorMaybe)(b.Inl.create)(p(x)(I.value0));

            if (I instanceof b.Inr) {
              I = p(D)(I.value0);
              if (I instanceof c.Nothing) return new c.Just(new b.Inl(f["genericTop'"](r)));
              if (I instanceof c.Just) return new c.Just(new b.Inr(I.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [I.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [I.constructor.name]);
          }, function (I) {
            if (I instanceof b.Inl) {
              I = n(x)(I.value0);
              if (I instanceof c.Nothing) return new c.Just(new b.Inr(f["genericBottom'"](v)));
              if (I instanceof c.Just) return new c.Just(new b.Inl(I.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [I.constructor.name]);
            }

            if (I instanceof b.Inr) return g.map(c.functorMaybe)(b.Inr.create)(n(D)(I.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [I.constructor.name]);
          });
        };
      };
    };
  };

  d.genericBoundedEnumNoArguments = y;

  d.genericBoundedEnumConstructor = function (x) {
    return new q(m.unwrap(k.newtypeCardinality)(z(x)), function (r) {
      return F(x)(r);
    }, function (r) {
      return g.map(c.functorMaybe)(b.Constructor)(t(x)(r));
    });
  };

  d.genericBoundedEnumSum = function (x) {
    return function (r) {
      return new q(k.Cardinality(m.unwrap(k.newtypeCardinality)(z(x)) + m.unwrap(k.newtypeCardinality)(z(r)) | 0), function (D) {
        if (D instanceof b.Inl) return F(x)(D.value0);
        if (D instanceof b.Inr) return F(r)(D.value0) + m.unwrap(k.newtypeCardinality)(z(x)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [D.constructor.name]);
      }, function (D) {
        var v = z(x);
        if (0 <= D && D < v) D = g.map(c.functorMaybe)(b.Inl.create)(t(x)(D));else if (e.otherwise) D = g.map(c.functorMaybe)(b.Inr.create)(t(r)(D - v | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [v.constructor.name]);
        return D;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var d = a["Data.Generic.Rep.Eq"],
      e = a["Data.Generic.Rep"],
      k = function k(g) {
    this["genericEq'"] = g;
  };

  a = new k(function (g) {
    return function (b) {
      return !0;
    };
  });

  d.genericEq = function (g) {
    return function (b) {
      return function (f) {
        return function (c) {
          return (0, b["genericEq'"])(e.from(g)(f))(e.from(g)(c));
        };
      };
    };
  };

  d.genericEqNoArguments = a;

  d.genericEqSum = function (g) {
    return function (b) {
      return new k(function (f) {
        return function (c) {
          return f instanceof e.Inl && c instanceof e.Inl ? (0, g["genericEq'"])(f.value0)(c.value0) : f instanceof e.Inr && c instanceof e.Inr ? (0, b["genericEq'"])(f.value0)(c.value0) : !1;
        };
      });
    };
  };

  d.genericEqConstructor = function (g) {
    return new k(function (b) {
      return function (f) {
        return (0, g["genericEq'"])(b)(f);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var d = a["Data.Generic.Rep.Ord"],
      e = a["Data.Generic.Rep"],
      k = a["Data.Ordering"],
      g = function g(f) {
    this["genericCompare'"] = f;
  };

  a = new g(function (f) {
    return function (c) {
      return k.EQ.value;
    };
  });

  var b = function b(f) {
    return f["genericCompare'"];
  };

  d.genericCompare = function (f) {
    return function (c) {
      return function (m) {
        return function (l) {
          return b(c)(e.from(f)(m))(e.from(f)(l));
        };
      };
    };
  };

  d.genericOrdNoArguments = a;

  d.genericOrdSum = function (f) {
    return function (c) {
      return new g(function (m) {
        return function (l) {
          if (m instanceof e.Inl && l instanceof e.Inl) return b(f)(m.value0)(l.value0);
          if (m instanceof e.Inr && l instanceof e.Inr) return b(c)(m.value0)(l.value0);
          if (m instanceof e.Inl && l instanceof e.Inr) return k.LT.value;
          if (m instanceof e.Inr && l instanceof e.Inl) return k.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [m.constructor.name, l.constructor.name]);
        };
      });
    };
  };

  d.genericOrdConstructor = function (f) {
    return new g(function (c) {
      return function (m) {
        return b(f)(c)(m);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Symbol"] = a["Data.Symbol"] || {};
  a = a["Data.Symbol"];

  var d = function () {
    function e() {}

    e.value = new e();
    return e;
  }();

  a.IsSymbol = function (e) {
    this.reflectSymbol = e;
  };

  a.reflectSymbol = function (e) {
    return e.reflectSymbol;
  };

  a.SProxy = d;
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var d = a["Data.Generic.Rep.Show"],
      e = a["Data.Foldable"],
      k = a["Data.Generic.Rep"],
      g = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      f = a["Data.Symbol"],
      c = function c(m) {
    this["genericShow'"] = m;
  };

  a = new function (m) {
    this.genericShowArgs = m;
  }(function (m) {
    return [];
  });

  d.genericShow = function (m) {
    return function (l) {
      return function (q) {
        return (0, l["genericShow'"])(k.from(m)(q));
      };
    };
  };

  d.genericShowArgsNoArguments = a;

  d.genericShowSum = function (m) {
    return function (l) {
      return new c(function (q) {
        if (q instanceof k.Inl) return (0, m["genericShow'"])(q.value0);
        if (q instanceof k.Inr) return (0, l["genericShow'"])(q.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [q.constructor.name]);
      });
    };
  };

  d.genericShowConstructor = function (m) {
    return function (l) {
      return new c(function (q) {
        var t = f.reflectSymbol(l)(f.SProxy.value);
        q = (0, m.genericShowArgs)(q);
        return 0 === q.length ? t : "(" + (e.intercalate(e.foldableArray)(g.monoidString)(" ")(b.append(b.semigroupArray)([t])(q)) + ")");
      });
    };
  };
})(PS);

(function (a) {
  a.fromNumberImpl = function (d) {
    return function (e) {
      return function (k) {
        return (k | 0) === k ? d(k) : e;
      };
    };
  };

  a.toNumber = function (d) {
    return d;
  };

  a.toStringAs = function (d) {
    return function (e) {
      return e.toString(d);
    };
  };
})(PS["Data.Int"] = PS["Data.Int"] || {});

(function (a) {
  a.round = Math.round;
})(PS.Math = PS.Math || {});

(function (a) {
  a.Math = a.Math || {};
  a.Math.round = a.Math.round;
})(PS);

(function (a) {
  a["Data.Int"] = a["Data.Int"] || {};

  var d = a["Data.Int"],
      e = a["Data.Int"],
      k = a["Data.Boolean"],
      g = a["Data.Bounded"],
      b = a["Data.Maybe"],
      f = a.Global,
      c = a.Math,
      m = e.fromNumberImpl(b.Just.create)(b.Nothing.value),
      l = function l(q) {
    if (q === f.infinity || q === -f.infinity) return 0;
    if (q >= e.toNumber(g.top(g.boundedInt))) return g.top(g.boundedInt);
    if (q <= e.toNumber(g.bottom(g.boundedInt))) return g.bottom(g.boundedInt);
    if (k.otherwise) return b.fromMaybe(0)(m(q));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [q.constructor.name]);
  };

  d.round = function (q) {
    return l(c.round(q));
  };

  d.hexadecimal = 16;
  d.toNumber = e.toNumber;
  d.toStringAs = e.toStringAs;
})(PS);

(function (a) {
  a.toInstantImpl = function (d) {
    return function (e) {
      return function (k) {
        k = k.getTime();
        return isNaN(k) ? e : d(k);
      };
    };
  };

  a.jsdate = function (d) {
    var e = d.year;
    d = new Date(Date.UTC(e, d.month, d.day, d.hour, d.minute, d.second, d.millisecond));
    0 <= e && 100 > e && d.setUTCFullYear(e);
    return d;
  };

  a.dateMethodEff = function (d, e) {
    return function () {
      return e[d]();
    };
  };

  a.parse = function (d) {
    return function () {
      return new Date(d);
    };
  };
})(PS["Data.JSDate"] = PS["Data.JSDate"] || {});

(function (a) {
  a["Data.Time.Duration"] = a["Data.Time.Duration"] || {};

  a["Data.Time.Duration"].Milliseconds = function (d) {
    return d;
  };
})(PS);

(function (a) {
  a["Data.JSDate"] = a["Data.JSDate"] || {};
  var d = a["Data.JSDate"],
      e = a["Data.JSDate"],
      k = a["Data.Date"],
      g = a["Data.Date.Component"],
      b = a["Data.DateTime.Instant"],
      f = a["Data.Enum"],
      c = a["Data.Functor"],
      m = a["Data.Int"],
      l = a["Data.Maybe"],
      q = a["Data.Time"],
      t = a["Data.Time.Component"],
      n = a["Data.Time.Duration"];
  a = a["Control.Bind"].composeKleisliFlipped(l.bindMaybe)(function (p) {
    return b.instant(n.Milliseconds(p));
  })(e.toInstantImpl(l.Just.create)(l.Nothing.value));
  c = c.map(c.functorFn)(c.map(l.functorMaybe)(b.toDateTime))(a);

  d.fromDateTime = function (p) {
    return e.jsdate({
      year: m.toNumber(f.fromEnum(g.boundedEnumYear)(k.year(p.value0))),
      month: m.toNumber(f.fromEnum(g.boundedEnumMonth)(k.month(p.value0)) - 1 | 0),
      day: m.toNumber(f.fromEnum(g.boundedEnumDay)(k.day(p.value0))),
      hour: m.toNumber(f.fromEnum(t.boundedEnumHour)(q.hour(p.value1))),
      minute: m.toNumber(f.fromEnum(t.boundedEnumMinute)(q.minute(p.value1))),
      second: m.toNumber(f.fromEnum(t.boundedEnumSecond)(q.second(p.value1))),
      millisecond: m.toNumber(f.fromEnum(t.boundedEnumMillisecond)(q.millisecond(p.value1)))
    });
  };

  d.toDateTime = c;

  d.toISOString = function (p) {
    return e.dateMethodEff("toISOString", p);
  };

  d.parse = e.parse;
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};
  var d = a["Data.Maybe.First"],
      e = a["Data.Maybe"];
  a = new a["Data.Semigroup"].Semigroup(function (k) {
    return function (g) {
      return k instanceof e.Just ? k : g;
    };
  });

  d.First = function (k) {
    return k;
  };

  d.semigroupFirst = a;
})(PS);

(function (a) {
  a["Data.Natural"] = a["Data.Natural"] || {};
  var d = a["Data.Natural"],
      e = a["Data.Show"];
  a = new e.Show(function () {
    var k = e.show(e.showInt);
    return function (g) {
      return k(g);
    };
  }());

  d.intToNat = function (k) {
    return 0 <= k ? k : 0;
  };

  d.natToInt = function (k) {
    return k;
  };

  d.showNatural = a;
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  a = a["Data.Profunctor"];
  var d = new function (e) {
    this.dimap = e;
  }(function (e) {
    return function (k) {
      return function (g) {
        return function (b) {
          return k(g(e(b)));
        };
      };
    };
  });

  a.dimap = function (e) {
    return e.dimap;
  };

  a.profunctorFn = d;
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};
  var d = a["Data.Profunctor.Strong"],
      e = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Profunctor"],
      b = a["Data.Tuple"];
  a = new function (c, m, l) {
    this.Profunctor0 = c;
    this.first = m;
    this.second = l;
  }(function () {
    return g.profunctorFn;
  }, function (c) {
    return function (m) {
      return new b.Tuple(c(m.value0), m.value1);
    };
  }, a["Data.Functor"].map(b.functorTuple));

  var f = function f(c) {
    return function (m) {
      return function (l) {
        return function (q) {
          return k.composeFlipped(c.Semigroupoid0())((0, m.first)(l))((0, m.second)(q));
        };
      };
    };
  };

  d.second = function (c) {
    return c.second;
  };

  d.fanout = function (c) {
    return function (m) {
      return function (l) {
        return function (q) {
          var t = g.dimap(m.Profunctor0())(e.identity(e.categoryFn))(function (n) {
            return new b.Tuple(n, n);
          })(e.identity(c));
          return k.composeFlipped(c.Semigroupoid0())(t)(f(c)(m)(l)(q));
        };
      };
    };
  };

  d.strongFn = a;
})(PS);

(function (a) {
  var d = "function" === typeof Array.from,
      e = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      k = "function" === typeof String.prototype.fromCodePoint,
      g = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (b) {
    return g ? function (f) {
      return f.codePointAt(0);
    } : b;
  };

  a._codePointAt = function (b) {
    return function (f) {
      return function (c) {
        return function (m) {
          return function (l) {
            return function (q) {
              var t = q.length;
              if (0 > l || l >= t) return c;
              if (e) for (q = q[Symbol.iterator](), t = l;; --t) {
                var n = q.next();
                if (n.done) return c;
                if (0 === t) return f(m(n.value));
              }
              return b(l)(q);
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
    return function (f) {
      return e ? function (c) {
        var m = "";
        c = c[Symbol.iterator]();

        for (var l = 0; l < f; ++l) {
          var q = c.next();
          if (q.done) break;
          m += q.value;
        }

        return m;
      } : b(f);
    };
  };

  a._toCodePointArray = function (b) {
    return function (f) {
      return d ? function (c) {
        return Array.from(c, f);
      } : b;
    };
  };
})(PS["Data.String.CodePoints"] = PS["Data.String.CodePoints"] || {});

(function (a) {
  a.singleton = function (d) {
    return d;
  };

  a.length = function (d) {
    return d.length;
  };

  a._indexOf = function (d) {
    return function (e) {
      return function (k) {
        return function (g) {
          g = g.indexOf(k);
          return -1 === g ? e : d(g);
        };
      };
    };
  };

  a._lastIndexOf = function (d) {
    return function (e) {
      return function (k) {
        return function (g) {
          g = g.lastIndexOf(k);
          return -1 === g ? e : d(g);
        };
      };
    };
  };

  a.take = function (d) {
    return function (e) {
      return e.substr(0, d);
    };
  };

  a.drop = function (d) {
    return function (e) {
      return e.substring(d);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a["Data.String.CodeUnits"] = a["Data.String.CodeUnits"] || {};

  var d = a["Data.String.CodeUnits"],
      e = a["Data.String.CodeUnits"],
      k = a["Data.Maybe"],
      g = e._lastIndexOf(k.Just.create)(k.Nothing.value),
      b = e._indexOf(k.Just.create)(k.Nothing.value);

  d.stripSuffix = function (f) {
    return function (c) {
      var m = g(f)(c);
      return m instanceof k.Just && m.value0 === (e.length(c) - e.length(f) | 0) ? k.Just.create(e.take(m.value0)(c)) : k.Nothing.value;
    };
  };

  d.contains = function (f) {
    var c = b(f);
    return function (m) {
      return k.isJust(c(m));
    };
  };

  d.singleton = e.singleton;
  d.length = e.length;
  d.drop = e.drop;
})(PS);

(function (a) {
  a.charAt = function (d) {
    return function (e) {
      if (0 <= d && d < e.length) return e.charAt(d);
      throw Error("Data.String.Unsafe.charAt: Invalid index.");
    };
  };
})(PS["Data.String.Unsafe"] = PS["Data.String.Unsafe"] || {});

(function (a) {
  a["Data.String.Unsafe"] = a["Data.String.Unsafe"] || {};
  a["Data.String.Unsafe"].charAt = a["Data.String.Unsafe"].charAt;
})(PS);

(function (a) {
  a.unfoldrArrayImpl = function (d) {
    return function (e) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (f) {
              for (var c = [];;) {
                f = b(f);
                if (d(f)) return c;
                f = e(f);
                c.push(k(f));
                f = g(f);
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
      e = a["Data.Function"],
      k = a["Data.Functor"],
      g = a["Data.Maybe"],
      b = a["Data.Tuple"],
      f = a["Data.Unfoldable1"];
  a = new function (c, m) {
    this.Unfoldable10 = c;
    this.unfoldr = m;
  }(function () {
    return f.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(g.isNothing)(g.fromJust())(b.fst)(b.snd));

  d.unfoldr = function (c) {
    return c.unfoldr;
  };

  d.fromMaybe = function (c) {
    return (0, c.unfoldr)(function (m) {
      return k.map(g.functorMaybe)(e.flip(b.Tuple.create)(g.Nothing.value))(m);
    });
  };

  d.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var d = a["Data.String.CodePoints"],
      e = a["Data.String.CodePoints"],
      k = a["Data.Array"],
      g = a["Data.Boolean"],
      b = a["Data.Bounded"],
      f = a["Data.Enum"],
      c = a["Data.Eq"],
      m = a["Data.EuclideanRing"],
      l = a["Data.Functor"],
      q = a["Data.Int"],
      t = a["Data.Maybe"],
      n = a["Data.Ord"],
      p = a["Data.String.CodeUnits"],
      F = a["Data.String.Common"],
      z = a["Data.String.Unsafe"],
      y = a["Data.Tuple"],
      x = a["Data.Unfoldable"],
      r = function r(N) {
    return function (M) {
      return ((1024 * (N - 55296 | 0) | 0) + (M - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (N) {
    return "(CodePoint 0x" + (F.toUpper(q.toStringAs(q.hexadecimal)(N)) + ")");
  });

  var D = function D(N) {
    var M = p.length(N);
    if (0 === M) return t.Nothing.value;
    if (1 === M) return new t.Just({
      head: f.fromEnum(f.boundedEnumChar)(z.charAt(0)(N)),
      tail: ""
    });
    M = f.fromEnum(f.boundedEnumChar)(z.charAt(1)(N));
    var J = f.fromEnum(f.boundedEnumChar)(z.charAt(0)(N));
    return 55296 <= J && 56319 >= J && 56320 <= M && 57343 >= M ? new t.Just({
      head: r(J)(M),
      tail: p.drop(2)(N)
    }) : new t.Just({
      head: J,
      tail: p.drop(1)(N)
    });
  },
      v = function v(N) {
    return l.map(t.functorMaybe)(function (M) {
      return new y.Tuple(M.head, M.tail);
    })(D(N));
  },
      I = e._unsafeCodePointAt0(function (N) {
    var M = f.fromEnum(f.boundedEnumChar)(z.charAt(0)(N));
    return 55296 <= M && 56319 >= M && 1 < p.length(N) && (N = f.fromEnum(f.boundedEnumChar)(z.charAt(1)(N)), 56320 <= N && 57343 >= N) ? r(M)(N) : M;
  }),
      L = e._toCodePointArray(function (N) {
    return x.unfoldr(x.unfoldableArray)(v)(N);
  })(I),
      K = function () {
    var N = f.toEnumWithDefaults(f.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (M) {
      return p.singleton(N(M));
    };
  }(),
      G = e._singleton(function (N) {
    if (65535 >= N) return K(N);
    var M = m.div(m.euclideanRingInt)(N - 65536 | 0)(1024) + 55296 | 0;
    N = m.mod(m.euclideanRingInt)(N - 65536 | 0)(1024) + 56320 | 0;
    return K(M) + K(N);
  }),
      E = function E(N) {
    return function (M) {
      if (1 > N) return "";
      var J = D(M);
      return J instanceof t.Just ? G(J.value0.head) + E(N - 1 | 0)(J.value0.tail) : M;
    };
  },
      T = e._take(E),
      W = new c.Eq(function (N) {
    return function (M) {
      return N === M;
    };
  }),
      A = new n.Ord(function () {
    return W;
  }, function (N) {
    return function (M) {
      return n.compare(n.ordInt)(N)(M);
    };
  }),
      C = function C(N) {
    return function (M) {
      for (var J = N, Y = !1, aa; !Y;) {
        aa = J;
        var u = D(M);
        u instanceof t.Just ? 0 === aa ? (Y = !0, aa = new t.Just(u.value0.head)) : (J = aa - 1 | 0, M = u.value0.tail, aa = void 0) : (Y = !0, aa = t.Nothing.value);
      }

      return aa;
    };
  },
      S = new b.Bounded(function () {
    return A;
  }, 0, 1114111);

  c = new f.BoundedEnum(function () {
    return S;
  }, function () {
    return w;
  }, 1114112, function (N) {
    return N;
  }, function (N) {
    if (0 <= N && 1114111 >= N) return new t.Just(N);
    if (g.otherwise) return t.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [N.constructor.name]);
  });
  var w = new f.Enum(function () {
    return A;
  }, f.defaultPred(f.toEnum(c))(f.fromEnum(c)), f.defaultSucc(f.toEnum(c))(f.fromEnum(c)));
  d.singleton = G;
  d.toCodePointArray = L;

  d.codePointAt = function (N) {
    return function (M) {
      return 0 > N || 0 === N && "" === M ? t.Nothing.value : 0 === N ? new t.Just(I(M)) : e._codePointAt(C)(t.Just.create)(t.Nothing.value)(I)(N)(M);
    };
  };

  d.length = function (N) {
    return k.length(L(N));
  };

  d.take = T;
  d.showCodePoint = a;
  d.boundedEnumCodePoint = c;
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var d = a["Data.String.NonEmpty.Internal"],
      e = a["Data.Maybe"];
  a = a["Data.Semigroup"].semigroupString;

  d.fromString = function (k) {
    return "" === k ? e.Nothing.value : new e.Just(k);
  };

  d.toString = function (k) {
    return k;
  };

  d.semigroupNonEmptyString = a;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  a["Data.String.Pattern"].Pattern = function (d) {
    return d;
  };
})(PS);

(function (a) {
  a.endsWith = function (d) {
    return function (e) {
      return e.endsWith(d);
    };
  };

  a.fromCharArray = function (d) {
    return d.join("");
  };

  a.startsWith = function (d) {
    return function (e) {
      return e.startsWith(d);
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
  var d = null;

  a.getUUIDImpl = function () {
    null === d && (d = require("uuid/v4"));
    return d();
  };
})(PS["Data.UUID"] = PS["Data.UUID"] || {});

(function (a) {
  a["Data.UUID"] = a["Data.UUID"] || {};
  var d = a["Data.UUID"],
      e = a["Data.UUID"],
      k = a["Control.Applicative"],
      g = a.Effect;
  a = a["Control.Bind"].bind(g.bindEffect)(e.getUUIDImpl)(function () {
    var b = k.pure(g.applicativeEffect);
    return function (f) {
      return b(f);
    };
  }());
  d.emptyUUID = "00000000-0000-0000-0000-000000000000";
  d.genUUID = a;

  d.toString = function (b) {
    return b;
  };
})(PS);

(function (a) {
  a["Data.XPath"] = a["Data.XPath"] || {};
  var d = a["Data.XPath"],
      e = a["Data.Semigroup"],
      k = new function (g, b, f, c, m, l) {
    this.Semigroup0 = g;
    this.at = b;
    this.pathAppend = f;
    this.pathAppendNSx = c;
    this.root = m;
    this.xx = l;
  }(function () {
    return e.semigroupString;
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

  d.pathAppend = function (g) {
    return g.pathAppend;
  };

  d.pathAppendNSx = function (g) {
    return g.pathAppendNSx;
  };

  d.at = function (g) {
    return g.at;
  };

  d.xx = function (g) {
    return g.xx;
  };

  d.root = function (g) {
    return g.root;
  };

  d.stringXPath = k;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var d = a["Effect.Class"],
      e = a["Effect.Console"];

  a["Effect.Class.Console"].log = function (k) {
    var g = d.liftEffect(k);
    return function (b) {
      return g(e.log(b));
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
      e = a["Effect.Now"],
      k = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(k.toDateTime)(e.now);
  d.nowDateTime = a;
})(PS);

(function (a) {
  a.unsafePerformEffect = function (d) {
    return d();
  };
})(PS["Effect.Unsafe"] = PS["Effect.Unsafe"] || {});

(function (a) {
  a["Effect.Unsafe"] = a["Effect.Unsafe"] || {};
  a["Effect.Unsafe"].unsafePerformEffect = a["Effect.Unsafe"].unsafePerformEffect;
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
      e = a["Data.Functor"],
      k = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (g) {
    return d.classList(e.map(e.functorArray)(k.Just.create)(g));
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

  a["Metajelo.CSS.UI.Util"].mjUiClass = function (e) {
    return d.className("metajelo-ui_" + e);
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassProps"] = a["Metajelo.CSS.UI.ClassProps"] || {};
  var d = a["Metajelo.CSS.UI.ClassProps"],
      e = a["Metajelo.CSS.Common.ClassNames"],
      k = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      g = a["Metajelo.CSS.UI.Util"];
  a = g.mjUiClass(e.versioning);
  var b = g.mjUiClass(e.url),
      f = g.mjUiClass(k.tooltip),
      c = g.mjUiClass(e.title),
      m = g.mjUiClass(e.sustainability),
      l = g.mjUiClass(e.superOrg),
      q = g.mjUiClass(e.resourceTypeGen),
      t = g.mjUiClass(e.resourceTypeDescr),
      n = g.mjUiClass(e.resourceType),
      p = g.mjUiClass(e.resourceMDSource),
      F = g.mjUiClass(e.resourceId),
      z = g.mjUiClass(e.relatedIdsHeader),
      y = g.mjUiClass(e.relatedIds),
      x = g.mjUiClass(e.relatedIdList),
      r = g.mjUiClass(e.relatedId),
      D = g.mjUiClass(e.relType),
      v = g.mjUiClass(e.record),
      I = g.mjUiClass(k.recPreview),
      L = g.mjUiClass(e.pubyear),
      K = g.mjUiClass(e.productsHeader),
      G = g.mjUiClass(e.products),
      E = g.mjUiClass(e.productList),
      T = g.mjUiClass(e.product),
      W = g.mjUiClass(k.prodPreview),
      A = g.mjUiClass(k.previewButtons),
      C = g.mjUiClass(e.policyType),
      S = g.mjUiClass(e.policy),
      w = g.mjUiClass(k.page),
      N = g.mjUiClass(e.missionStatement),
      M = g.mjUiClass(e.location),
      J = g.mjUiClass(k.locPreview),
      Y = g.mjUiClass(e.institutionType),
      aa = g.mjUiClass(e.institutionPolicy),
      u = g.mjUiClass(e.institutionPolicies),
      wa = g.mjUiClass(e.institutionName),
      sa = g.mjUiClass(e.institutionId),
      ya = g.mjUiClass(e.institutionContact),
      da = g.mjUiClass(e.identifier),
      la = g.mjUiClass(e.idType),
      oa = g.mjUiClass(e.id),
      va = g.mjUiClass(e.fundingStatement),
      ca = g.mjUiClass(e.formatList),
      fa = g.mjUiClass(e.format),
      ta = g.mjUiClass(k.downloadBtn),
      Da = g.mjUiClass(k.date),
      V = g.mjUiClass(e.creator),
      H = g.mjUiClass(e.contactType),
      R = g.mjUiClass(e.contactEmail);
  k = g.mjUiClass(k.clipBtn);
  var Q = g.mjUiClass(e.basicMetadata);
  e = g.mjUiClass(e.applies);
  d.page = w;
  d.date = Da;
  d.recPreview = I;
  d.prodPreview = W;
  d.locPreview = J;
  d.tooltip = f;
  d.downloadBtn = ta;
  d.clipBtn = k;
  d.previewButtons = A;
  d.record = v;
  d.product = T;
  d.productList = E;
  d.productsHeader = K;
  d.products = G;
  d.location = M;
  d.sustainability = m;
  d.missionStatement = N;
  d.fundingStatement = va;
  d.identifier = da;
  d.id = oa;
  d.idType = la;
  d.relatedId = r;
  d.relType = D;
  d.relatedIdList = x;
  d.relatedIdsHeader = z;
  d.relatedIds = y;
  d.basicMetadata = Q;
  d.creator = V;
  d.pubyear = L;
  d.title = c;
  d.resourceId = F;
  d.resourceType = n;
  d.resourceTypeGen = q;
  d.resourceTypeDescr = t;
  d.resourceMDSource = p;
  d.institutionName = wa;
  d.institutionId = sa;
  d.institutionType = Y;
  d.institutionContact = ya;
  d.contactEmail = R;
  d.contactType = H;
  d.institutionPolicy = aa;
  d.institutionPolicies = u;
  d.policy = S;
  d.policyType = C;
  d.applies = e;
  d.superOrg = l;
  d.versioning = a;
  d.format = fa;
  d.formatList = ca;
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
      e = a["Concur.React.Props"],
      k = a["Data.Functor"],
      g = a["Metajelo.CSS.Common.Util"],
      b = function b(f) {
    return "metajelo_" + f;
  };

  a = function () {
    var f = k.map(k.functorArray)(b);
    return function (c) {
      return g.cList(f(c));
    };
  }();

  d.mjWebClass = function (f) {
    return e.className("metajelo_" + f);
  };

  d.cList = a;
})(PS);

(function (a) {
  a["Metajelo.CSS.Web.ClassProps"] = a["Metajelo.CSS.Web.ClassProps"] || {};
  var d = a["Metajelo.CSS.Web.ClassProps"],
      e = a["Metajelo.CSS.Common.ClassNames"],
      k = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      g = a["Metajelo.CSS.Web.Util"];
  a = g.mjWebClass(e.versioning);
  g.mjWebClass(e.url);
  var b = g.mjWebClass(e.title),
      f = g.mjWebClass(e.sustainability),
      c = g.mjWebClass(e.superOrg),
      m = g.mjWebClass(e.resourceTypeGen),
      l = g.mjWebClass(e.resourceTypeDescr),
      q = g.mjWebClass(e.resourceType),
      t = g.mjWebClass(e.resourceId),
      n = g.mjWebClass(e.relatedIdsHeader),
      p = g.mjWebClass(e.relatedIdList),
      F = g.mjWebClass(e.relatedId),
      z = g.mjWebClass(e.relType),
      y = g.mjWebClass(e.recordId),
      x = g.mjWebClass(e.record),
      r = g.mjWebClass(e.pubyear),
      D = g.mjWebClass(e.productsHeader),
      v = g.mjWebClass(e.productList),
      I = g.mjWebClass(k.productGroup),
      L = g.mjWebClass(k.productCitation),
      K = g.mjWebClass(e.product),
      G = g.mjWebClass(e.policyType),
      E = g.mjWebClass(e.policy),
      T = g.cList([e.url, e.missionStatement]),
      W = g.mjWebClass(e.institutionType),
      A = g.mjWebClass(e.institutionPolicy),
      C = g.mjWebClass(e.institutionPolicies),
      S = g.mjWebClass(e.institutionName),
      w = g.mjWebClass(e.institutionId),
      N = g.mjWebClass(e.institutionContact),
      M = g.mjWebClass(e.identifier),
      J = g.cList([e.url, k.idUrl]),
      Y = g.mjWebClass(e.idType),
      aa = g.cList([e.url, e.fundingStatement]),
      u = g.mjWebClass(k.errorDisplayBox),
      wa = g.mjWebClass(k.errorDisplay),
      sa = g.mjWebClass(e.creator),
      ya = g.mjWebClass(e.contactType),
      da = g.mjWebClass(e.contactEmail);
  e = g.mjWebClass(e.basicMetadata);
  k = g.mjWebClass(k.appliesInfo);
  d.productGroup = I;
  d.productCitation = L;
  d.appliesInfo = k;
  d.idUrl = J;
  d.errorDisplayBox = u;
  d.errorDisplay = wa;
  d.record = x;
  d.recordId = y;
  d.product = K;
  d.productList = v;
  d.productsHeader = D;
  d.sustainability = f;
  d.missionStatement = T;
  d.fundingStatement = aa;
  d.identifier = M;
  d.idType = Y;
  d.relatedId = F;
  d.relType = z;
  d.relatedIdList = p;
  d.relatedIdsHeader = n;
  d.basicMetadata = e;
  d.creator = sa;
  d.pubyear = r;
  d.title = b;
  d.resourceId = t;
  d.resourceType = q;
  d.resourceTypeGen = m;
  d.resourceTypeDescr = l;
  d.institutionName = S;
  d.institutionId = w;
  d.institutionType = W;
  d.institutionContact = N;
  d.contactEmail = da;
  d.contactType = ya;
  d.institutionPolicy = A;
  d.institutionPolicies = C;
  d.policy = E;
  d.policyType = G;
  d.superOrg = c;
  d.versioning = a;
})(PS);

(function (a) {
  a["Metajelo.SchemaInfo"] = a["Metajelo.SchemaInfo"] || {};
  var d = a["Metajelo.SchemaInfo"],
      e = a["Foreign.Object"];
  a = e.fromHomogeneous()({
    identifierTypeSTyp: "The type of the RelatedIdentifier.",
    relationTypeSTyp: "Description of the relationship of the resource being registered (A) and the related resource (B).",
    resourceTypeSTyp: "The general type of a resource."
  });
  var k = e.fromHomogeneous()({
    recordTypeCTyp: "metadata about the publication and links to unlimited number of suppementary products"
  }),
      g = e.fromHomogeneous()({
    dateEle: "The date of the original creation of this metadata record",
    formatEle: "Technical format of the resource. Use file extension or MIME type where possible.",
    institutionPoliciesEle: "set of possible policies for this location",
    lastModifiedEle: "The date of the most recent modification of this recocrd",
    locationEle: "Metadata about a location (institution, archive, library) at which the supplementary product was deposited",
    recordEle: "This is the root element. Defined as metadata describing the linkage of a pulication to supplementary products (data, software, etc.)",
    resourceTypeEle: "The type of the supplementary product. You may enter an additional free text description. The format is open, but the preferred format is a single term of some detail so that a pair can be formed with the sub-property. same structure as in DataCite",
    supplementaryProductEle: "An artifact associated with the resource corresponding to this record. Examples are software, data, audio, video, etc.",
    supplementaryProductsEle: "The link to the set of supplemenary products"
  });
  e = e.fromHomogeneous()({
    appliesToProductAttr: "appliesToProduct is true for policies that apply to this product. It may be absent, for example, if the creator of the record has pulled policies for an an institution from an external service (e.g. re3data), and has not explicitly annotated all the entries as applying to the product (or not)."
  });
  d.descrAttrMap = e;
  d.descrCTypMap = k;
  d.descrEleMap = g;
  d.descrSTypMap = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var d = a["Metajelo.Types"],
      e = a["Data.Bounded"],
      k = a["Data.Enum"],
      g = a["Data.Eq"],
      b = a["Data.Generic.Rep"],
      f = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Generic.Rep.Enum"],
      m = a["Data.Generic.Rep.Eq"],
      l = a["Data.Generic.Rep.Ord"],
      q = a["Data.Generic.Rep.Show"],
      t = a["Data.Ord"],
      n = a["Data.Show"],
      p = a["Data.Symbol"],
      F = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      z = function () {
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
      r = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      D = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      v = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      I = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      L = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      K = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      G = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      E = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      T = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      W = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      A = function () {
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
      w = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      N = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      M = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      J = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Y = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      aa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      u = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      wa = function () {
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
      da = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      la = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      oa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      va = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ca = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      fa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ta = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Da = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      V = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      H = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      R = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Q = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ea = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      pa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Aa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      O = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ma = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ka = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      B = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Z = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ja = function () {
    function h(Ja) {
      this.value0 = Ja;
    }

    h.create = function (Ja) {
      return new h(Ja);
    };

    return h;
  }(),
      qa = function () {
    function h(Ja) {
      this.value0 = Ja;
    }

    h.create = function (Ja) {
      return new h(Ja);
    };

    return h;
  }(),
      Ba = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      xa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ha = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Qa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ga = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ma = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ra = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ia = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      La = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Na = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      hb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      cb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ib = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Wa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      jb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      kb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      db = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      lb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      eb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      mb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      nb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      $a = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      wb = new n.Show(function (h) {
    if (h instanceof Ba) return "commercial";
    if (h instanceof xa) return "non-profit";
    if (h instanceof Ha) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 239, column 1 - line 242, column 37): " + [h.constructor.name]);
  }),
      xb = new n.Show(function (h) {
    return "dataCustodian";
  }),
      Sa = new b.Generic(function (h) {
    if (h instanceof F) return new b.Inl(b.NoArguments.value);
    if (h instanceof z) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof y) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof x) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof r) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof v) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof I) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (h instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (h instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (h instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (h instanceof E) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (h instanceof T) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (h instanceof W) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 142, column 1 - line 142, column 76): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return F.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return z.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return y.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return x.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return r.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return v.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return I.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return L.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return K.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return E.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return T.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return W.value;
    throw Error("Failed pattern match at Metajelo.Types (line 142, column 1 - line 142, column 76): " + [h.constructor.name]);
  }),
      yb = new n.Show(q.genericShow(Sa)(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Audiovisual";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Dataset";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Event";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Image";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "InteractiveResource";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Model";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "PhysicalObject";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "ResourceCollection";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Service";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Software";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Sound";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Text";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Workflow";
  })))(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      Ta = new b.Generic(function (h) {
    if (h instanceof A) return new b.Inl(b.NoArguments.value);
    if (h instanceof C) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof S) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof w) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof N) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof M) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof J) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (h instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (h instanceof u) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (h instanceof wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (h instanceof sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (h instanceof ya) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (h instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (h instanceof la) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (h instanceof oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (h instanceof va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (h instanceof ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (h instanceof fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (h instanceof ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (h instanceof Da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (h instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (h instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (h instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (h instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 199, column 1 - line 199, column 62): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return A.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return C.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return S.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return w.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return N.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return M.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return J.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Y.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return aa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return u.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return wa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return sa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ya.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return la.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return oa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return va.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ca.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ta.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Da.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Q.value;
    throw Error("Failed pattern match at Metajelo.Types (line 199, column 1 - line 199, column 62): " + [h.constructor.name]);
  }),
      Ua = new n.Show(q.genericShow(Ta)(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsCitedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Cites";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsSupplementTo";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsContinuedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Continues";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsPartOf";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "HasPart";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsReferencedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "References";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Documents";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsCompiledBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Compiles";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "HasMetadata";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsMetadataFor";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "Reviews";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsReviewedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      Oa = new b.Generic(function (h) {
    if (h instanceof ea) return new b.Inl(b.NoArguments.value);
    if (h instanceof pa) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof Aa) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof B) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof Z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 309, column 1 - line 309, column 58): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return ea.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return pa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return Aa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return O.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return ma.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return ka.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return B.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Z.value;
    throw Error("Failed pattern match at Metajelo.Types (line 309, column 1 - line 309, column 58): " + [h.constructor.name]);
  }),
      zb = new n.Show(function (h) {
    return h instanceof Z ? "Terms of Use" : q.genericShow(Oa)(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "Access";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "Collection";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "Data";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "Metadata";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "Preservation";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "Submission";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "Quality";
    })))(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(h);
  }),
      Xa = new b.Generic(function (h) {
    if (h instanceof Ba) return new b.Inl(b.NoArguments.value);
    if (h instanceof xa) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof Ha) return new b.Inr(new b.Inr(b.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 238, column 1 - line 238, column 68): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return Ba.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return xa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr) return Ha.value;
    throw Error("Failed pattern match at Metajelo.Types (line 238, column 1 - line 238, column 68): " + [h.constructor.name]);
  }),
      Va = new b.Generic(function (h) {
    return b.NoArguments.value;
  }, function (h) {
    return Qa.value;
  }),
      Pa = new b.Generic(function (h) {
    if (h instanceof Ga) return new b.Inl(b.NoArguments.value);
    if (h instanceof Ma) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof Ra) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof Ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof La) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof Na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof hb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof cb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (h instanceof ib) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (h instanceof Wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (h instanceof jb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (h instanceof kb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (h instanceof db) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (h instanceof lb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (h instanceof eb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (h instanceof mb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (h instanceof nb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (h instanceof $a) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 76, column 1 - line 76, column 66): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return Ga.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return Ma.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return Ra.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return Ia.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return La.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return Na.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return hb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return cb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ib.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Wa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return jb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return kb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return db.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return lb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return eb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return mb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return nb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return $a.value;
    throw Error("Failed pattern match at Metajelo.Types (line 76, column 1 - line 76, column 66): " + [h.constructor.name]);
  }),
      bb = new n.Show(function (h) {
    return h instanceof Ma ? "arXiv" : h instanceof Ra ? "bibcode" : q.genericShow(Pa)(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "ARK";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "ArXiv";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "Bibcode";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "DOI";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "EAN13";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "EISSN";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "Handle";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "IGSN";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "ISBN";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "ISSN";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "ISTC";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "LISSN";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "LSID";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "PMID";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "PURL";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "UPC";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "URL";
    })))(q.genericShowConstructor(q.genericShowArgsNoArguments)(new p.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(h);
  }),
      fb = new g.Eq(m.genericEq(Sa)(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqConstructor(m.genericEqNoArguments)))))))))))))))),
      ob = new t.Ord(function () {
    return fb;
  }, function (h) {
    return function (Ja) {
      return l.genericCompare(Sa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))))))))(h)(Ja);
    };
  }),
      rb = new g.Eq(m.genericEq(Ta)(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqConstructor(m.genericEqNoArguments))))))))))))))))))))))))))),
      sb = new t.Ord(function () {
    return rb;
  }, function (h) {
    return function (Ja) {
      return l.genericCompare(Ta)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments))))))))))))))))))))))))))(h)(Ja);
    };
  }),
      pb = new g.Eq(m.genericEq(Oa)(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqConstructor(m.genericEqNoArguments)))))))))),
      tb = new t.Ord(function () {
    return pb;
  }, function (h) {
    return function (Ja) {
      return l.genericCompare(Oa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))(h)(Ja);
    };
  }),
      Ab = new g.Eq(m.genericEq(Xa)(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqConstructor(m.genericEqNoArguments))))),
      ub = new t.Ord(function () {
    return Ab;
  }, function (h) {
    return function (Ja) {
      return l.genericCompare(Xa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments))))(h)(Ja);
    };
  }),
      Bb = new g.Eq(m.genericEq(Va)(m.genericEqConstructor(m.genericEqNoArguments))),
      qb = new t.Ord(function () {
    return Bb;
  }, function (h) {
    return function (Ja) {
      return l.genericCompare(Va)(l.genericOrdConstructor(l.genericOrdNoArguments))(h)(Ja);
    };
  }),
      X = new g.Eq(m.genericEq(Pa)(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqSum(m.genericEqConstructor(m.genericEqNoArguments))(m.genericEqConstructor(m.genericEqNoArguments)))))))))))))))))))),
      ba = new t.Ord(function () {
    return X;
  }, function (h) {
    return function (Ja) {
      return l.genericCompare(Pa)(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdSum(l.genericOrdConstructor(l.genericOrdNoArguments))(l.genericOrdConstructor(l.genericOrdNoArguments)))))))))))))))))))(h)(Ja);
    };
  }),
      ha = new k.Enum(function () {
    return ob;
  }, c.genericPred(Sa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), c.genericSucc(Sa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      ia = new k.Enum(function () {
    return sb;
  }, c.genericPred(Ta)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), c.genericSucc(Ta)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      ra = new k.Enum(function () {
    return tb;
  }, c.genericPred(Oa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), c.genericSucc(Oa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      P = new k.Enum(function () {
    return ub;
  }, c.genericPred(Xa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), c.genericSucc(Xa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      U = new k.Enum(function () {
    return qb;
  }, c.genericPred(Va)(c.genericEnumConstructor(c.genericEnumNoArguments)), c.genericSucc(Va)(c.genericEnumConstructor(c.genericEnumNoArguments))),
      ua = new k.Enum(function () {
    return ba;
  }, c.genericPred(Pa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), c.genericSucc(Pa)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      na = new e.Bounded(function () {
    return ob;
  }, f.genericBottom(Sa)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(Sa)(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments)))))))))))))))),
      za = new e.Bounded(function () {
    return sb;
  }, f.genericBottom(Ta)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(Ta)(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments))))))))))))))))))))))))))),
      Ca = new e.Bounded(function () {
    return tb;
  }, f.genericBottom(Oa)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(Oa)(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments)))))))))),
      Ea = new k.SmallBounded(function () {
    return Ca;
  }),
      Za = new e.Bounded(function () {
    return ub;
  }, f.genericBottom(Xa)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(Xa)(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments))))),
      Fa = new e.Bounded(function () {
    return qb;
  }, f.genericBottom(Va)(f.genericBottomConstructor(f.genericBottomNoArguments)), f.genericTop(Va)(f.genericTopConstructor(f.genericTopNoArguments))),
      Ka = new k.SmallBounded(function () {
    return Fa;
  }),
      Ya = new e.Bounded(function () {
    return ba;
  }, f.genericBottom(Pa)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(Pa)(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments)))))))))))))))))))),
      vb = new k.BoundedEnum(function () {
    return na;
  }, function () {
    return ha;
  }, c.genericCardinality(Sa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericFromEnum(Sa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericToEnum(Sa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))),
      gb = new k.BoundedEnum(function () {
    return za;
  }, function () {
    return ia;
  }, c.genericCardinality(Ta)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericFromEnum(Ta)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericToEnum(Ta)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      ab = new k.BoundedEnum(function () {
    return Ca;
  }, function () {
    return ra;
  }, c.genericCardinality(Oa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericFromEnum(Oa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericToEnum(Oa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))),
      Cb = new k.BoundedEnum(function () {
    return Za;
  }, function () {
    return P;
  }, c.genericCardinality(Xa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericFromEnum(Xa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericToEnum(Xa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))),
      Db = new k.BoundedEnum(function () {
    return Fa;
  }, function () {
    return U;
  }, c.genericCardinality(Va)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericFromEnum(Va)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericToEnum(Va)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))),
      Eb = new k.BoundedEnum(function () {
    return Ya;
  }, function () {
    return ua;
  }, c.genericCardinality(Pa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericFromEnum(Pa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericToEnum(Pa)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))));

  d.ARK = Ga;
  d.ArXiv = Ma;
  d.Bibcode = Ra;
  d.DOI = Ia;
  d.EAN13 = La;
  d.EISSN = Na;
  d.Handle = hb;
  d.IGSN = cb;
  d.ISBN = ib;
  d.ISSN = Wa;
  d.ISTC = jb;
  d.LISSN = kb;
  d.LSID = db;
  d.PMID = lb;
  d.PURL = eb;
  d.UPC = mb;
  d.URL = nb;
  d.URN = $a;
  d.Audiovisual = F;
  d.Dataset = z;
  d.Event = y;
  d.Image = x;
  d.InteractiveResource = r;
  d.Model = D;
  d.PhysicalObject = v;
  d.ResourceCollection = I;
  d.Service = L;
  d.Software = K;
  d.Sound = G;
  d.Text = E;
  d.Workflow = T;
  d.Other = W;
  d.IsCitedBy = A;
  d.Cites = C;
  d.IsSupplementTo = S;
  d.IsSupplementedBy = w;
  d.IsContinuedBy = N;
  d.Continues = M;
  d.IsNewVersionOf = J;
  d.IsPreviousVersionOf = Y;
  d.IsPartOf = aa;
  d.HasPart = u;
  d.IsReferencedBy = wa;
  d.References = sa;
  d.IsDocumentedBy = ya;
  d.Documents = da;
  d.IsCompiledBy = la;
  d.Compiles = oa;
  d.IsVariantFormOf = va;
  d.IsOriginalFormOf = ca;
  d.IsIdenticalTo = fa;
  d.HasMetadata = ta;
  d.IsMetadataFor = Da;
  d.Reviews = V;
  d.IsReviewedBy = H;
  d.IsDerivedFrom = R;
  d.IsSourceOf = Q;
  d.Commercial = Ba;
  d.NonProfit = xa;
  d.Governmental = Ha;
  d.DataCustodian = Qa;
  d.Access = ea;
  d.Collection = pa;
  d.Data = Aa;
  d.Metadata = O;
  d.Preservation = ma;
  d.Submission = ka;
  d.Quality = B;
  d.TermsOfUse = Z;
  d.FreeTextPolicy = ja;
  d.RefPolicy = qa;
  d.showIdentifierType = bb;
  d.boundedEnumIdentifierType = Eb;
  d.showResourceTypeGeneral = yb;
  d.boundedEnumResourceTypeGeneral = vb;
  d.showRelationType = Ua;
  d.boundedEnumRelationType = gb;
  d.showInstitutionType = wb;
  d.boundedEnumInstitutionType = Cb;
  d.showInstitutionContactType = xb;
  d.boundedEnumInstitutionContactType = Db;
  d.smallBoundedInstitutionContactType = Ka;
  d.showPolicyType = zb;
  d.boundedEnumPolicyType = ab;
  d.smallBoundedPolicyType = Ea;
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (d) {
    return function (e) {
      return function (k) {
        return function () {
          return k.parseFromString(e, d);
        };
      };
    };
  };
})(PS["Web.DOM.DOMParser"] = PS["Web.DOM.DOMParser"] || {});

(function (a) {
  a._documentElement = function (d) {
    return function (e) {
      return function () {
        return e[d];
      };
    };
  }("documentElement");

  a.getElementsByTagName = function (d) {
    return function (e) {
      return function () {
        return e.getElementsByTagName(d);
      };
    };
  };

  a._getElementsByTagNameNS = function (d) {
    return function (e) {
      return function (k) {
        return function () {
          return k.getElementsByTagNameNS(d, e);
        };
      };
    };
  };

  a.createElement = function (d) {
    return function (e) {
      return function () {
        return e.createElement(d);
      };
    };
  };

  a._createElementNS = function (d) {
    return function (e) {
      return function (k) {
        return function () {
          return k.createElementNS(d, e);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (d, e, k, g) {
    if ("undefined" !== typeof window) return k = window[k], null != k && g instanceof k ? e(g) : d;

    for (var b = g; null != b;) {
      b = Object.getPrototypeOf(b);
      var f = b.constructor.name;
      if (f === k) return e(g);
      if ("Object" === f) break;
    }

    return d;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var d = a["Web.Internal.FFI"],
      e = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (k) {
    return function (g) {
      return d._unsafeReadProtoTagged(e.Nothing.value, e.Just.create, k, g);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var d = a["Web.DOM.Document"],
      e = a["Web.DOM.Document"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect,
      f = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var c = function () {
    var m = k.map(b.functorEffect)(g.toMaybe);
    return function (l) {
      return m(e._documentElement(l));
    };
  }();

  d.fromNode = a;
  d.toNonElementParentNode = f;
  d.documentElement = c;

  d.getElementsByTagNameNS = function (m) {
    return e._getElementsByTagNameNS(g.toNullable(m));
  };

  d.createElementNS = function (m) {
    return e._createElementNS(g.toNullable(m));
  };

  d.getElementsByTagName = e.getElementsByTagName;
  d.createElement = e.createElement;
})(PS);

(function (a) {
  var d = function d(e) {
    return function (k) {
      return k[e];
    };
  };

  a._prefix = d("prefix");
  a.localName = d("localName");
  a.tagName = d("tagName");

  a.setAttribute = function (e) {
    return function (k) {
      return function (g) {
        return function () {
          g.setAttribute(e, k);
          return {};
        };
      };
    };
  };

  a._getAttribute = function (e) {
    return function (k) {
      return function () {
        return k.getAttribute(e);
      };
    };
  };
})(PS["Web.DOM.Element"] = PS["Web.DOM.Element"] || {});

(function (a) {
  a["Web.DOM.Element"] = a["Web.DOM.Element"] || {};
  var d = a["Web.DOM.Element"],
      e = a["Web.DOM.Element"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect,
      f = a["Unsafe.Coerce"],
      c = f.unsafeCoerce;
  f = f.unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  d.fromNode = a;
  d.toNode = f;
  d.toParentNode = c;

  d.prefix = function (m) {
    return g.toMaybe(e._prefix(m));
  };

  d.getAttribute = function (m) {
    var l = k.map(b.functorEffect)(g.toMaybe),
        q = e._getAttribute(m);

    return function (t) {
      return l(q(t));
    };
  };

  d.localName = e.localName;
  d.tagName = e.tagName;
  d.setAttribute = e.setAttribute;
})(PS);

(function (a) {
  a.toArray = function (d) {
    return function () {
      return [].slice.call(d);
    };
  };

  a._item = function (d) {
    return function (e) {
      return function () {
        return e.item(d);
      };
    };
  };
})(PS["Web.DOM.HTMLCollection"] = PS["Web.DOM.HTMLCollection"] || {});

(function (a) {
  a["Web.DOM.HTMLCollection"] = a["Web.DOM.HTMLCollection"] || {};
  var d = a["Web.DOM.HTMLCollection"],
      e = a["Web.DOM.HTMLCollection"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;

  d.item = function (f) {
    var c = k.map(b.functorEffect)(g.toMaybe),
        m = e._item(f);

    return function (l) {
      return c(m(l));
    };
  };

  d.toArray = e.toArray;
})(PS);

(function (a) {
  var d = function d(e) {
    return function (k) {
      return function () {
        return k[e];
      };
    };
  };

  a.nodeName = function (e) {
    return e.nodeName;
  };

  a._ownerDocument = d("ownerDocument");
  a.childNodes = d("childNodes");
  a.textContent = d("textContent");

  a.setTextContent = function (e) {
    return function (k) {
      return function () {
        k.textContent = e;
        return {};
      };
    };
  };

  a.appendChild = function (e) {
    return function (k) {
      return function () {
        return k.appendChild(e);
      };
    };
  };
})(PS["Web.DOM.Node"] = PS["Web.DOM.Node"] || {});

(function (a) {
  a["Web.DOM.Node"] = a["Web.DOM.Node"] || {};
  var d = a["Web.DOM.Node"],
      e = a["Web.DOM.Node"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;

  a = function () {
    var f = k.map(b.functorEffect)(g.toMaybe);
    return function (c) {
      return f(e._ownerDocument(c));
    };
  }();

  d.ownerDocument = a;
  d.nodeName = e.nodeName;
  d.childNodes = e.childNodes;
  d.textContent = e.textContent;
  d.setTextContent = e.setTextContent;
  d.appendChild = e.appendChild;
})(PS);

(function (a) {
  a["Web.DOM.DOMParser"] = a["Web.DOM.DOMParser"] || {};

  var d = a["Web.DOM.DOMParser"],
      e = a["Web.DOM.DOMParser"],
      k = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Data.Array"],
      f = a["Data.Either"],
      c = a["Data.Functor"],
      m = a["Data.Maybe"],
      l = a.Effect,
      q = a["Web.DOM.Document"],
      t = a["Web.DOM.Element"],
      n = a["Web.DOM.HTMLCollection"],
      p = a["Web.DOM.Node"],
      F = function F(y) {
    return function (x) {
      if (y instanceof m.Nothing) return new f.Right(x);
      if (y instanceof m.Just) return new f.Left(y.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [y.constructor.name]);
    };
  },
      z = function z(y) {
    return function () {
      var x = g.join(l.bindEffect)(c.map(l.functorEffect)(n.toArray)(q.getElementsByTagName("parsererror")(y)))();
      x = b.head(x);
      x = c.map(m.functorMaybe)(t.toNode)(x);
      if (x instanceof m.Nothing) x = k.pure(l.applicativeEffect)(m.Nothing.value);else if (x instanceof m.Just) x = c.map(l.functorEffect)(m.Just.create)(p.textContent(x.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [x.constructor.name]);
      return x();
    };
  };

  d.parseXMLFromString = function (y) {
    return function (x) {
      return function () {
        var r = e.parseFromString("application/xml")(y)(x)(),
            D = z(r)();
        return F(D)(r);
      };
    };
  };

  d.makeDOMParser = e.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (d) {
    return function (e) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (f) {
              return function () {
                return f.evaluate(d, e, k, g, b);
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
    return function (e) {
      return function () {
        return d.snapshotItem(e);
      };
    };
  };

  a.customNSResolver = function (d) {
    return {
      lookupNamespaceURI: d
    };
  };

  a.createNSResolver = function (d) {
    return function (e) {
      return e.createNSResolver(d);
    };
  };

  a.lookupNamespaceURIInternal = function (d) {
    return function (e) {
      return d.lookupNamespaceURI(e);
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
      e = a["Web.DOM.Document.XPath.ResultType"],
      k = a["Data.Eq"],
      g = a["Data.Maybe"],
      b = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      f = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      c = new k.Eq(function (m) {
    return function (l) {
      return m === l;
    };
  });

  d.res2SnapType = function (m) {
    return k.eq(c)(m)(e.unordered_node_snapshot_type) ? new g.Just(b.value) : k.eq(c)(m)(e.ordered_node_snapshot_type) ? new g.Just(f.value) : g.Nothing.value;
  };

  d.number_type = e.number_type;
  d.string_type = e.string_type;
  d.boolean_type = e.boolean_type;
  d.ordered_node_snapshot_type = e.ordered_node_snapshot_type;
  d.any_unordered_node_type = e.any_unordered_node_type;
})(PS);

(function (a) {
  a["Web.DOM.Document.XPath"] = a["Web.DOM.Document.XPath"] || {};

  var d = a["Web.DOM.Document.XPath"],
      e = a["Web.DOM.Document.XPath"],
      k = a["Control.Applicative"],
      g = a["Data.Array"],
      b = a["Data.Functor"],
      f = a["Data.Int"],
      c = a["Data.Maybe"],
      m = a["Data.Monoid"],
      l = a["Data.Natural"],
      q = a["Data.Nullable"],
      t = a["Data.Traversable"],
      n = a.Effect,
      p = a["Web.DOM.Document"],
      F = a["Web.DOM.Document.XPath.ResultType"],
      z = a["Web.DOM.Element"],
      y = a["Web.DOM.Node"],
      x = function () {
    var D = b.map(n.functorEffect)(function (v) {
      return l.intToNat(f.round(v));
    });
    return function (v) {
      return D(e.snapshotLengthInternal(v));
    };
  }(),
      r = function r(D) {
    return function (v) {
      return b.map(n.functorEffect)(q.toMaybe)(e.snapshotItemInternal(D)(f.toNumber(l.natToInt(v))));
    };
  };

  a = function () {
    var D = b.map(n.functorEffect)(q.toMaybe);
    return function (v) {
      return D(e.singleNodeValueInternal(v));
    };
  }();

  d.evaluate = function (D) {
    return function (v) {
      return function (I) {
        return function (L) {
          return function (K) {
            return function (G) {
              return e.evaluateInternal(D)(v)(q.toNullable(I))(L)(q.toNullable(K))(G);
            };
          };
        };
      };
    };
  };

  d.evaluateNumber = function (D) {
    return function (v) {
      return function (I) {
        return function (L) {
          return function (K) {
            return function () {
              var G = e.evaluateInternal(D)(v)(q.toNullable(I))(F.number_type)(q.toNullable(L))(K)();
              return e.numberValue(G)();
            };
          };
        };
      };
    };
  };

  d.evaluateString = function (D) {
    return function (v) {
      return function (I) {
        return function (L) {
          return function (K) {
            return function () {
              var G = e.evaluateInternal(D)(v)(q.toNullable(I))(F.string_type)(q.toNullable(L))(K)();
              return e.stringValue(G)();
            };
          };
        };
      };
    };
  };

  d.evaluateBoolean = function (D) {
    return function (v) {
      return function (I) {
        return function (L) {
          return function (K) {
            return function () {
              var G = e.evaluateInternal(D)(v)(q.toNullable(I))(F.boolean_type)(q.toNullable(L))(K)();
              return e.booleanValue(G)();
            };
          };
        };
      };
    };
  };

  d.singleNodeValue = a;

  d.snapshot = function (D) {
    var v = F.res2SnapType(e.resultType(D)),
        I = r(D);
    v = b.map(c.functorMaybe)(function (L) {
      return function () {
        var K = x(D)();
        K = l.natToInt(K);
        K = b.map(b.functorArray)(l.intToNat)(g.range(0)(K - 1 | 0));
        K = t.sequence(t.traversableArray)(n.applicativeEffect)(b.map(b.functorArray)(I)(K))();
        return g.catMaybes(K);
      };
    })(v);
    if (v instanceof c.Nothing) return k.pure(n.applicativeEffect)(m.mempty(m.monoidArray));
    if (v instanceof c.Just) return v.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [v.constructor.name]);
  };

  d.lookupNamespaceURI = function (D) {
    return function (v) {
      return q.toMaybe(e.lookupNamespaceURIInternal(D)(v));
    };
  };

  d.defaultNSResolver = function (D) {
    return function (v) {
      var I = function I(L) {
        return function () {
          var K = p.documentElement(L)();
          if (K instanceof c.Nothing) return D;
          if (K instanceof c.Just) return z.toNode(K.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [K.constructor.name]);
        };
      };

      return function () {
        var L = y.ownerDocument(D)(),
            K = function () {
          if (L instanceof c.Nothing) {
            var G = p.fromNode(D);
            if (G instanceof c.Nothing) return D;
            if (G instanceof c.Just) return I(G.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [G.constructor.name]);
          }

          if (L instanceof c.Just) return I(L.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [L.constructor.name]);
        }();

        return e.createNSResolver(K)(v);
      };
    };
  };

  d.customNSResolver = e.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var d = a["Metajelo.XPaths"],
      e = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Either"],
      c = a["Data.Foldable"],
      m = a["Data.Functor"],
      l = a["Data.Maybe"],
      q = a["Data.String.Common"],
      t = a["Data.String.NonEmpty.Internal"],
      n = a["Data.Traversable"],
      p = a["Data.XPath"],
      F = a.Effect,
      z = a["Effect.Exception"],
      y = a["Web.DOM.DOMParser"],
      x = a["Web.DOM.Document"],
      r = a["Web.DOM.Document.XPath"],
      D = a["Web.DOM.Document.XPath.ResultType"],
      v = a["Web.DOM.Element"],
      I = a["Web.DOM.HTMLCollection"],
      L = p.pathAppendNSx(p.stringXPath)(p.root(p.stringXPath))("record");
  a = p.pathAppendNSx(p.stringXPath)(L)("relatedIdentifier");
  var K = p.pathAppendNSx(p.stringXPath)(L)("supplementaryProducts");
  K = p.pathAppendNSx(p.stringXPath)(K)("supplementaryProduct");

  var G = function G(w) {
    return function (N) {
      return {
        any: function any(M) {
          return function (J) {
            return function (Y) {
              return r.evaluate(J)(M)(N)(Y)(l.Nothing.value)(w);
            };
          };
        },
        num: function num(M) {
          return function (J) {
            return r.evaluateNumber(J)(M)(N)(l.Nothing.value)(w);
          };
        },
        str: function str(M) {
          return function (J) {
            return r.evaluateString(J)(M)(N)(l.Nothing.value)(w);
          };
        },
        bool: function bool(M) {
          return function (J) {
            return r.evaluateBoolean(J)(M)(N)(l.Nothing.value)(w);
          };
        },
        nodeMay: function nodeMay(M) {
          return function (J) {
            return k.bind(F.bindEffect)(r.evaluate(J)(M)(N)(D.any_unordered_node_type)(l.Nothing.value)(w))(r.singleNodeValue);
          };
        }
      };
    };
  },
      E = g["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      T = function T(w) {
    var N = function N(M) {
      return function () {
        var J = x.getElementsByTagNameNS(new l.Just(M))("record")(w)();
        return I.item(0)(J)();
      };
    };

    return function () {
      var M = x.getElementsByTagName("record")(w)();
      M = I.item(0)(M)();
      if (M instanceof l.Nothing) M = n.sequence(b.traversableNonEmptyArray)(F.applicativeEffect)(m.map(b.functorNonEmptyArray)(N)(E))(), M = k.join(l.bindMaybe)(c.find(b.foldableNonEmptyArray)(l.isJust)(M));else if (M instanceof l.Just) M = new l.Just(M.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 277, column 16 - line 281, column 38): " + [M.constructor.name]);
      return m.map(l.functorMaybe)(v.toNode)(M);
    };
  };

  g = p.pathAppendNSx(p.stringXPath)(L)("lastModified");

  var W = p.pathAppendNSx(p.stringXPath)(L)("identifier"),
      A = p.pathAppend(p.stringXPath)(W)(p.at(p.stringXPath)("identifierType")),
      C = function C(w) {
    var N = function N(M) {
      return l.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(M);
    };

    if (w instanceof l.Nothing) return e.pure(F.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (w instanceof l.Just) return m.map(F.functorEffect)(N)(v.getAttribute("xmlns")(w.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 185, column 3 - line 187, column 59): " + [w.constructor.name]);
  },
      S = function S(w) {
    return function (N) {
      var M = function M(J) {
        return function (Y) {
          return function (aa) {
            aa = r.lookupNamespaceURI(J)(aa);
            if (aa instanceof l.Nothing) return Y;
            if (aa instanceof l.Just) return aa.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 202, column 39 - line 204, column 20): " + [aa.constructor.name]);
          };
        };
      };

      return function () {
        var J = r.defaultNSResolver(w)(N)(),
            Y = v.fromNode(w);
        Y = C(Y)();
        return r.customNSResolver(M(J)(Y));
      };
    };
  };

  p = p.pathAppendNSx(p.stringXPath)(L)("date");
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
  d.idTypeRootAP = A;
  d.idRootP = W;
  d.dateRootP = p;
  d.lastModRootP = g;
  d.relIdRootP = a;
  d.sProdRootP = K;

  d.getDefaultParseEnv = function (w) {
    return function () {
      var N = y.makeDOMParser();
      N = y.parseXMLFromString(w)(N)();
      if (N instanceof f.Left) N = z["throw"]("XML parsing error: " + N.value0)();else if (N instanceof f.Right) N = N.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 245, column 13 - line 247, column 26): " + [N.constructor.name]);
      var M = T(N)();
      if (M instanceof l.Nothing) M = z["throw"]("Could not find <record> node!")();else if (M instanceof l.Just) M = M.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 249, column 14 - line 251, column 23): " + [M.constructor.name]);
      var J = v.fromNode(M);
      if (J instanceof l.Nothing) J = z["throw"]("<record> node could not be cast to an element!")();else if (J instanceof l.Just) J = J.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 252, column 14 - line 254, column 23): " + [J.constructor.name]);
      var Y = C(new l.Just(J))(),
          aa = S(M)(N)();
      aa = G(N)(new l.Just(aa));
      return {
        doc: N,
        ns: Y,
        recNode: M,
        recElem: J,
        xeval: aa,
        xevalRoot: {
          any: aa.any(M),
          num: aa.num(M),
          str: aa.str(M),
          bool: aa.bool(M),
          nodeMay: aa.nodeMay(M)
        }
      };
    };
  };

  d.unsafeSingleNodeValue = function (w) {
    return function (N) {
      return function (M) {
        return function () {
          var J = w.xeval.nodeMay(N)(M)();
          if (J instanceof l.Just) return J.value0;
          if (J instanceof l.Nothing) return z["throw"]("Couldn't find required node at: " + M)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 294, column 3 - line 296, column 40): " + [J.constructor.name]);
        };
      };
    };
  };

  d.readNonEmptyString = function (w) {
    return function (N) {
      N = t.fromString(q.trim(N));
      if (N instanceof l.Nothing) return f.Left.create("Empty string found for " + w);
      if (N instanceof l.Just) return new f.Right(N.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 303, column 3 - line 305, column 26): " + [N.constructor.name]);
    };
  };

  d.rightOrThrow = function (w) {
    if (w instanceof f.Right) return e.pure(F.applicativeEffect)(w.value0);
    if (w instanceof f.Left) return z["throw"](w.value0);
    throw Error("Failed pattern match at Metajelo.XPaths (line 308, column 19 - line 310, column 24): " + [w.constructor.name]);
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var d = a["Text.Parsing.StringParser"],
      e = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      f = a["Control.Bind"],
      c = a["Control.Monad"],
      m = a["Control.Monad.Rec.Class"],
      l = a["Control.Plus"],
      q = a["Data.Bifunctor"],
      t = a["Data.Boolean"],
      n = a["Data.Either"],
      p = a["Data.Functor"];
  a = a["Data.Show"];

  var F = function () {
    function K(G) {
      this.value0 = G;
    }

    K.create = function (G) {
      return new K(G);
    };

    return K;
  }();

  a = new a.Show(function (K) {
    return K.value0;
  });

  var z = new p.Functor(function (K) {
    return function (G) {
      var E = p.map(n.functorEither)(function (T) {
        return {
          result: K(T.result),
          suffix: T.suffix
        };
      });
      return function (T) {
        return E(G(T));
      };
    };
  }),
      y = function y(K) {
    return function (G) {
      return new n.Left({
        pos: G.pos,
        error: new F(K)
      });
    };
  },
      x = new b.Apply(function () {
    return z;
  }, function (K) {
    return function (G) {
      return function (E) {
        return f.bind(n.bindEither)(K(E))(function (T) {
          return f.bind(n.bindEither)(G(T.suffix))(function (W) {
            return g.pure(n.applicativeEither)({
              result: T.result(W.result),
              suffix: W.suffix
            });
          });
        });
      };
    };
  }),
      r = new f.Bind(function () {
    return x;
  }, function (K) {
    return function (G) {
      return function (E) {
        return f.bind(n.bindEither)(K(E))(function (T) {
          return G(T.result)(T.suffix);
        });
      };
    };
  }),
      D = new g.Applicative(function () {
    return x;
  }, function (K) {
    return function (G) {
      return new n.Right({
        result: K,
        suffix: G
      });
    };
  }),
      v = new c.Monad(function () {
    return D;
  }, function () {
    return r;
  });

  b = new m.MonadRec(function () {
    return v;
  }, function (K) {
    return function (G) {
      var E = function E(T) {
        if (T.result instanceof m.Loop) return new m.Loop({
          state: T.result.value0,
          str: T.suffix
        });
        if (T.result instanceof m.Done) return new m.Done({
          result: T.result.value0,
          suffix: T.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [T.constructor.name]);
      };

      return function (T) {
        return m.tailRecM(m.monadRecEither)(function (W) {
          return p.map(n.functorEither)(E)(K(W.state)(W.str));
        })({
          state: G,
          str: T
        });
      };
    };
  });
  var I = new e.Alt(function () {
    return z;
  }, function (K) {
    return function (G) {
      return function (E) {
        var T = K(E);

        if (T instanceof n.Left) {
          if (E.pos === T.value0.pos) return G(E);
          if (t.otherwise) return new n.Left({
            error: T.value0.error,
            pos: T.value0.pos
          });
        }

        return T;
      };
    };
  }),
      L = new l.Plus(function () {
    return I;
  }, y("No alternative"));
  e = new k.Alternative(function () {
    return D;
  }, function () {
    return L;
  });
  d.ParseError = F;

  d.runParser = function (K) {
    return function (G) {
      return q.bimap(n.bifunctorEither)(function (E) {
        return E.error;
      })(function (E) {
        return E.result;
      })(K({
        str: G,
        pos: 0
      }));
    };
  };

  d.fail = y;

  d["try"] = function (K) {
    return function (G) {
      return q.lmap(n.bifunctorEither)(function (E) {
        return {
          pos: G.pos,
          error: E.error
        };
      })(K(G));
    };
  };

  d.showParseError = a;
  d.functorParser = z;
  d.applyParser = x;
  d.applicativeParser = D;
  d.altParser = I;
  d.alternativeParser = e;
  d.bindParser = r;
  d.monadRecParser = b;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var d = a["Text.Parsing.StringParser.Combinators"],
      e = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      f = a["Data.Functor"],
      c = a["Data.NonEmpty"],
      m = a["Data.Unit"],
      l = a["Text.Parsing.StringParser"],
      q = a["Data.List"].manyRec(l.monadRecParser)(l.alternativeParser),
      t = function t(n) {
    return function (p) {
      return new c.NonEmpty(n, p);
    };
  };

  d.many = q;

  d.many1 = function (n) {
    return g.apply(l.applyParser)(f.map(l.functorParser)(t)(n))(q(n));
  };

  d.withError = function (n) {
    return function (p) {
      return e.alt(l.altParser)(n)(l.fail(p));
    };
  };

  d.optional = function (n) {
    return e.alt(l.altParser)(b.bind(l.bindParser)(n)(function (p) {
      return k.pure(l.applicativeParser)(m.unit);
    }))(k.pure(l.applicativeParser)(m.unit));
  };

  d.sepBy1 = function (n) {
    return function (p) {
      return b.bind(l.bindParser)(n)(function (F) {
        return b.bind(l.bindParser)(q(g.applySecond(l.applyParser)(p)(n)))(function (z) {
          return k.pure(l.applicativeParser)(t(F)(z));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var d = a["Text.Parsing.StringParser.CodePoints"],
      e = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Data.Char"],
      b = a["Data.Either"],
      f = a["Data.Enum"],
      c = a["Data.Maybe"],
      m = a["Data.Show"],
      l = a["Data.String.CodePoints"],
      q = a["Data.Unit"],
      t = a["Text.Parsing.StringParser"],
      n = a["Text.Parsing.StringParser.Combinators"],
      p = function () {
    var z = function () {
      var y = f.fromEnum(l.boundedEnumCodePoint);
      return function (x) {
        return g.fromCharCode(y(x));
      };
    }();

    return function (y) {
      var x = l.codePointAt(y.pos)(y.str);

      if (x instanceof c.Just) {
        var r = z(x.value0);
        if (r instanceof c.Just) return new b.Right({
          result: r.value0,
          suffix: {
            str: y.str,
            pos: y.pos + 1 | 0
          }
        });
        if (r instanceof c.Nothing) return new b.Left({
          pos: y.pos,
          error: t.ParseError.create("CodePoint " + (m.show(l.showCodePoint)(x.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [r.constructor.name]);
      }

      if (x instanceof c.Nothing) return new b.Left({
        pos: y.pos,
        error: new t.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [x.constructor.name]);
    };
  }(),
      F = function F(z) {
    return t["try"](k.bind(t.bindParser)(p)(function (y) {
      return z(y) ? e.pure(t.applicativeParser)(y) : t.fail("Character " + (m.show(m.showChar)(y) + " did not satisfy predicate"));
    }));
  };

  d.eof = function (z) {
    return z.pos < l.length(z.str) ? new b.Left({
      pos: z.pos,
      error: new t.ParseError("Expected EOF")
    }) : new b.Right({
      result: q.unit,
      suffix: z
    });
  };

  d.satisfy = F;

  d["char"] = function (z) {
    return n.withError(F(function (y) {
      return y === z;
    }))("Could not match character " + m.show(m.showChar)(z));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var d = a["Text.Email.Parser"],
      e = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      f = a["Data.Char"],
      c = a["Data.Foldable"],
      m = a["Data.Functor"],
      l = a["Data.List.Types"],
      q = a["Data.Maybe"],
      t = a["Data.Monoid"],
      n = a["Data.String.CodeUnits"],
      p = a["Data.String.Pattern"],
      F = a["Data.Unit"],
      z = a["Text.Parsing.StringParser"],
      y = a["Text.Parsing.StringParser.CodePoints"],
      x = a["Text.Parsing.StringParser.Combinators"],
      r = function (ca) {
    var fa = q.fromJust();
    return function (ta) {
      return fa(f.fromCharCode(ta));
    };
  }(),
      D = function D(ca) {
    return m.map(z.functorParser)(function () {
      var fa = c.fold(l.foldableNonEmptyList)(t.monoidString),
          ta = m.map(l.functorNonEmptyList)(n.singleton);
      return function (Da) {
        return fa(ta(Da));
      };
    }())(x.many1(y.satisfy(ca)));
  },
      v = function v(ca) {
    return b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(ca))(function () {
      return b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(I(ca)))(function () {
        return k.pure(z.applicativeParser)(F.unit);
      });
    });
  },
      I = function I(ca) {
    return e.alt(z.altParser)(v(ca))(k.pure(z.applicativeParser)(F.unit));
  },
      L = function L(ca) {
    return b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(y.satisfy(ca)))(function () {
      return b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(I(y.satisfy(ca))))(function () {
        return k.pure(z.applicativeParser)(F.unit);
      });
    });
  },
      K = y["char"](r(0)),
      G = y["char"]("\n");

  a = function a(ca) {
    return " " === ca || "\t" === ca;
  };

  var E = y.satisfy(a),
      T = L(a),
      W = function W(ca) {
    return function (fa) {
      return function (ta) {
        return ta >= ca && ta <= fa;
      };
    };
  };

  a = W(r(33))(r(126));

  var A = y.satisfy(a),
      C = function C(ca) {
    return function (fa) {
      return n.contains(p.Pattern(n.singleton(fa)))(ca);
    };
  },
      S = function S(ca) {
    return W(r(1))(r(8))(ca) || W(r(14))(r(31))(ca) || C("\x0B\f\x7F")(ca);
  },
      w = function w(ca) {
    return W(r(33))(r(39))(ca) || W(r(42))(r(91))(ca) || W(r(93))(r(126))(ca) || S(ca);
  },
      N = function N(ca) {
    return W(r(33))(r(90))(ca) || W(r(94))(r(126))(ca) || S(ca);
  },
      M = y.satisfy(S),
      J = y["char"]("\r"),
      Y = m["void"](z.functorParser)(g.applySecond(z.applyParser)(J)(G)),
      aa = function () {
    var ca = v(g.applySecond(z.applyParser)(Y)(T)),
        fa = g.applySecond(z.applyParser)(T)(x.optional(g.applySecond(z.applyParser)(Y)(T)));
    return e.alt(z.altParser)(fa)(ca);
  }(),
      u = function () {
    var ca = b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(y["char"]("\\")))(function () {
      return e.alt(z.altParser)(e.alt(z.altParser)(e.alt(z.altParser)(e.alt(z.altParser)(e.alt(z.altParser)(A)(E))(G))(J))(M))(K);
    });
    return b.bind(z.bindParser)(ca)(function (fa) {
      return k.pure(z.applicativeParser)("\\" + n.singleton(fa));
    });
  }(),
      wa = e.alt(z.altParser)(D(function (ca) {
    return C(n.singleton(r(33)))(ca) || W(r(35))(r(91))(ca) || W(r(93))(r(126))(ca) || S(ca);
  }))(u),
      sa = function () {
    var ca = b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(y["char"]('"')))(function () {
      return b.bind(z.bindParser)(x.many(g.applySecond(z.applyParser)(x.optional(aa))(wa)))(function (fa) {
        return b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(x.optional(aa)))(function () {
          return b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(y["char"]('"')))(function () {
            return k.pure(z.applicativeParser)(fa);
          });
        });
      });
    });
    return m.map(z.functorParser)(function (fa) {
      return '"' + (c.fold(l.foldableList)(t.monoidString)(fa) + '"');
    })(ca);
  }(),
      ya = b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(y["char"]("(")))(function () {
    return b.discard(b.discardUnit)(z.bindParser)(I(e.alt(z.altParser)(e.alt(z.altParser)(e.alt(z.altParser)(L(w))(m["void"](z.functorParser)(u)))(ya))(aa)))(function () {
      return b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(y["char"](")")))(function () {
        return k.pure(z.applicativeParser)(F.unit);
      });
    });
  }),
      da = I(e.alt(z.altParser)(ya)(aa));

  a = b.discard(b.discardUnit)(z.bindParser)(x.optional(da))(function () {
    return b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(y["char"]("[")))(function () {
      return b.bind(z.bindParser)(x.many(g.applySecond(z.applyParser)(x.optional(aa))(D(N))))(function (ca) {
        return b.discard(b.discardUnit)(z.bindParser)(x.optional(aa))(function () {
          return b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(y["char"]("]")))(function () {
            return b.discard(b.discardUnit)(z.bindParser)(x.optional(da))(function () {
              return k.pure(z.applicativeParser)("[" + (c.fold(l.foldableList)(t.monoidString)(ca) + "]"));
            });
          });
        });
      });
    });
  });

  var la = function () {
    return D(function (ca) {
      return "0" <= ca && "9" >= ca || "a" <= ca && "z" >= ca || "A" <= ca && "Z" >= ca || C("!#$%&'*+/=?^_`{|}~-")(ca);
    });
  }(),
      oa = function () {
    var ca = b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(x.optional(da)))(function () {
      return b.bind(z.bindParser)(e.alt(z.altParser)(la)(sa))(function (fa) {
        return b.discard(b.discardUnit)(z.bindParser)(m["void"](z.functorParser)(x.optional(da)))(function () {
          return k.pure(z.applicativeParser)(fa);
        });
      });
    });
    ca = x.sepBy1(ca)(y["char"]("."));
    return m.map(z.functorParser)(c.intercalate(l.foldableNonEmptyList)(t.monoidString)("."))(ca);
  }(),
      va = e.alt(z.altParser)(oa)(a);

  a = b.bind(z.bindParser)(oa)(function (ca) {
    return b.bind(z.bindParser)(y["char"]("@"))(function () {
      return b.bind(z.bindParser)(va)(function (fa) {
        return b.bind(z.bindParser)(y.eof)(function () {
          return k.pure(z.applicativeParser)({
            localPart: ca,
            domainPart: fa
          });
        });
      });
    });
  });
  d.addrSpec = a;

  d.toString = function (ca) {
    return ca.localPart + ("@" + ca.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var d = a["Text.Email.Validate"],
      e = a["Data.Bifunctor"],
      k = a["Data.Either"],
      g = a["Data.Show"],
      b = a["Text.Email.Parser"],
      f = a["Text.Parsing.StringParser"];

  a = function () {
    var c = e.lmap(k.bifunctorEither)(g.show(f.showParseError));
    return function (m) {
      m = f.runParser(b.addrSpec)(m);
      return c(m);
    };
  }();

  d.validate = a;
})(PS);

(function (a) {
  a._validateURL = function (d) {
    return function (e) {
      if (!e || !/^https?:\/\//.test(e)) return "Unknown or missing protocol format in url: " + e;
      var k = document.createElement("a");
      k.href = e;

      if (d) {
        if (k.username) return "URL " + e + " contains a username: " + k.username;
        if (k.password) return "URL " + e + " contains a password: " + k.password;
      }

      return /\.[^0-9.]/.test(k.hostname) ? /(\s|^\.|\.$)/.test(k.hostname) ? "Hostname '" + k.href + "' contains whitespace in " + e : k.href.toLowerCase().replace(/\/+$/g, "") !== e.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + e + " doesn't match parsed href " + k.href : "SUCCESS" : "Invalid hostname '" + k.href + "' in " + e;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};

  var d = a["Text.URL.Validate"],
      e = a["Text.URL.Validate"],
      k = a["Data.Either"],
      g = a["Data.Maybe"],
      b = a["Data.String.NonEmpty.Internal"],
      f = function f(c) {
    return function (m) {
      var l = "SUCCESS" === m ? !0 : !1;

      if (l) {
        m = b.fromString(c);
        if (m instanceof g.Just) return new k.Right(m.value0);
        if (m instanceof g.Nothing) return new k.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [m.constructor.name]);
      }

      if (!l) return new k.Left(m);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [l.constructor.name]);
    };
  };

  d.parsePublicURL = function (c) {
    var m = e._validateURL(!0)(c);

    return f(c)(m);
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
      e = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Data.Array"],
      f = a["Data.Array.NonEmpty"],
      c = a["Data.Bounded"],
      m = a["Data.DateTime"],
      l = a["Data.Either"],
      q = a["Data.Functor"],
      t = a["Data.Int"],
      n = a["Data.JSDate"],
      p = a["Data.Maybe"],
      F = a["Data.Natural"],
      z = a["Data.String.CodePoints"],
      y = a["Data.String.CodeUnits"],
      x = a["Data.String.NonEmpty.Internal"],
      r = a["Data.String.Utils"],
      D = a["Data.Traversable"],
      v = a["Data.XPath"],
      I = a.Effect,
      L = a["Effect.Exception"],
      K = a.Global,
      G = a["Metajelo.Types"],
      E = a["Metajelo.XPaths"],
      T = a["Text.Email.Validate"],
      W = a["Text.URL.Validate"],
      A = a["Web.DOM.Document.XPath"],
      C = a["Web.DOM.Document.XPath.ResultType"],
      S = a["Web.DOM.Element"],
      w = a["Web.DOM.Node"],
      N = a["Web.DOM.NodeList"],
      M = function M(O) {
    return "Audiovisual" === O ? e.pure(l.applicativeEither)(G.Audiovisual.value) : "Dataset" === O ? e.pure(l.applicativeEither)(G.Dataset.value) : "Event" === O ? e.pure(l.applicativeEither)(G.Event.value) : "Image" === O ? e.pure(l.applicativeEither)(G.Image.value) : "InteractiveResource" === O ? e.pure(l.applicativeEither)(G.InteractiveResource.value) : "Model" === O ? e.pure(l.applicativeEither)(G.Model.value) : "PhysicalObject" === O ? e.pure(l.applicativeEither)(G.PhysicalObject.value) : "ResourceCollection" === O ? e.pure(l.applicativeEither)(G.ResourceCollection.value) : "Service" === O ? e.pure(l.applicativeEither)(G.Service.value) : "Software" === O ? e.pure(l.applicativeEither)(G.Software.value) : "Sound" === O ? e.pure(l.applicativeEither)(G.Sound.value) : "Text" === O ? e.pure(l.applicativeEither)(G.Text.value) : "Workflow" === O ? e.pure(l.applicativeEither)(G.Workflow.value) : "Other" === O ? e.pure(l.applicativeEither)(G.Other.value) : l.Left.create("Unknown ResourceTypeGeneral: '" + (O + "'"));
  },
      J = function J(O) {
    return function (ma) {
      return function () {
        var ka = E.unsafeSingleNodeValue(O)(ma)(v.xx(v.stringXPath)(E.resTypeP))(),
            B = O.xeval.str(ka)(".")();
        ka = O.xeval.str(ka)(v.at(v.stringXPath)(E.resTypeGenAT))();
        ka = E.rightOrThrow(M(ka))();
        return {
          description: B,
          generalType: ka
        };
      };
    };
  },
      Y = function Y(O) {
    return "IsCitedBy" === O ? e.pure(l.applicativeEither)(G.IsCitedBy.value) : "Cites" === O ? e.pure(l.applicativeEither)(G.Cites.value) : "IsSupplementTo" === O ? e.pure(l.applicativeEither)(G.IsSupplementTo.value) : "IsSupplementedBy" === O ? e.pure(l.applicativeEither)(G.IsSupplementedBy.value) : "IsContinuedBy" === O ? e.pure(l.applicativeEither)(G.IsContinuedBy.value) : "Continues" === O ? e.pure(l.applicativeEither)(G.Continues.value) : "IsNewVersionOf" === O ? e.pure(l.applicativeEither)(G.IsNewVersionOf.value) : "IsPreviousVersionOf" === O ? e.pure(l.applicativeEither)(G.IsPreviousVersionOf.value) : "IsPartOf" === O ? e.pure(l.applicativeEither)(G.IsPartOf.value) : "HasPart" === O ? e.pure(l.applicativeEither)(G.HasPart.value) : "IsReferencedBy" === O ? e.pure(l.applicativeEither)(G.IsReferencedBy.value) : "References" === O ? e.pure(l.applicativeEither)(G.References.value) : "IsDocumentedBy" === O ? e.pure(l.applicativeEither)(G.IsDocumentedBy.value) : "Documents" === O ? e.pure(l.applicativeEither)(G.Documents.value) : "IsCompiledBy" === O ? e.pure(l.applicativeEither)(G.IsCompiledBy.value) : "Compiles" === O ? e.pure(l.applicativeEither)(G.Compiles.value) : "IsVariantFormOf" === O ? e.pure(l.applicativeEither)(G.IsVariantFormOf.value) : "IsOriginalFormOf" === O ? e.pure(l.applicativeEither)(G.IsOriginalFormOf.value) : "IsIdenticalTo" === O ? e.pure(l.applicativeEither)(G.IsIdenticalTo.value) : "HasMetadata" === O ? e.pure(l.applicativeEither)(G.HasMetadata.value) : "IsMetadataFor" === O ? e.pure(l.applicativeEither)(G.IsMetadataFor.value) : "Reviews" === O ? e.pure(l.applicativeEither)(G.Reviews.value) : "IsReviewedBy" === O ? e.pure(l.applicativeEither)(G.IsReviewedBy.value) : "IsDerivedFrom" === O ? e.pure(l.applicativeEither)(G.IsDerivedFrom.value) : "IsSourceOf" === O ? e.pure(l.applicativeEither)(G.IsSourceOf.value) : l.Left.create("Unknown RelationType: '" + (O + "'"));
  },
      aa = function aa(O) {
    return "Access" === O ? e.pure(l.applicativeEither)(new p.Just(G.Access.value)) : "Collection" === O ? e.pure(l.applicativeEither)(new p.Just(G.Collection.value)) : "Data" === O ? e.pure(l.applicativeEither)(new p.Just(G.Data.value)) : "Metadata" === O ? e.pure(l.applicativeEither)(new p.Just(G.Metadata.value)) : "Preservation" === O ? e.pure(l.applicativeEither)(new p.Just(G.Preservation.value)) : "Submission" === O ? e.pure(l.applicativeEither)(new p.Just(G.Submission.value)) : "Quality" === O ? e.pure(l.applicativeEither)(new p.Just(G.Quality.value)) : "Terms of Use" === O ? e.pure(l.applicativeEither)(new p.Just(G.TermsOfUse.value)) : "" === O ? e.pure(l.applicativeEither)(p.Nothing.value) : l.Left.create("Unknown PolicyType: '" + (O + "'"));
  },
      u = function u(O) {
    return "commercial" === O ? e.pure(l.applicativeEither)(G.Commercial.value) : "non-profit" === O ? e.pure(l.applicativeEither)(G.NonProfit.value) : "governmental" === O ? e.pure(l.applicativeEither)(G.Governmental.value) : l.Left.create("Unknown InstitutionType: '" + (O + "'"));
  },
      wa = function wa(O) {
    return "dataCustodian" === O ? e.pure(l.applicativeEither)(new p.Just(G.DataCustodian.value)) : "" === O ? e.pure(l.applicativeEither)(p.Nothing.value) : l.Left.create("Unknown InstitutionContactType: '" + (O + "'"));
  },
      sa = function sa(O) {
    return "ARK" === O ? e.pure(l.applicativeEither)(G.ARK.value) : "arXiv" === O ? e.pure(l.applicativeEither)(G.ArXiv.value) : "bibcode" === O ? e.pure(l.applicativeEither)(G.Bibcode.value) : "DOI" === O ? e.pure(l.applicativeEither)(G.DOI.value) : "EAN13" === O ? e.pure(l.applicativeEither)(G.EAN13.value) : "EISSN" === O ? e.pure(l.applicativeEither)(G.EISSN.value) : "Handle" === O ? e.pure(l.applicativeEither)(G.Handle.value) : "IGSN" === O ? e.pure(l.applicativeEither)(G.IGSN.value) : "ISBN" === O ? e.pure(l.applicativeEither)(G.ISBN.value) : "ISSN" === O ? e.pure(l.applicativeEither)(G.ISSN.value) : "ISTC" === O ? e.pure(l.applicativeEither)(G.ISTC.value) : "LISSN" === O ? e.pure(l.applicativeEither)(G.LISSN.value) : "LSID" === O ? e.pure(l.applicativeEither)(G.LSID.value) : "PMID" === O ? e.pure(l.applicativeEither)(G.PMID.value) : "PURL" === O ? e.pure(l.applicativeEither)(G.PURL.value) : "UPC" === O ? e.pure(l.applicativeEither)(G.UPC.value) : "URL" === O ? e.pure(l.applicativeEither)(G.URL.value) : "URN" === O ? e.pure(l.applicativeEither)(G.URN.value) : l.Left.create("Unknown IdentifierType: '" + (O + "'"));
  },
      ya = function ya(O) {
    return function (ma) {
      var ka = function ka(Z) {
        return function () {
          var ja = O.xeval.str(Z)(v.at(v.stringXPath)(E.idTypeAT))();
          return E.rightOrThrow(sa(ja))();
        };
      },
          B = function B(Z) {
        return function () {
          var ja = O.xeval.str(Z)(".")();
          return E.rightOrThrow(E.readNonEmptyString("InstitutionID")(ja))();
        };
      };

      return function () {
        var Z = E.unsafeSingleNodeValue(O)(ma)(v.xx(v.stringXPath)(E.instIdP))(),
            ja = B(Z)();
        Z = ka(Z)();
        return {
          id: ja,
          idType: Z
        };
      };
    };
  },
      da = function da(O) {
    var ma = function ma(ja) {
      return function () {
        var qa = O.xeval.str(ja)(v.at(v.stringXPath)(E.relTypeAT))();
        return E.rightOrThrow(Y(qa))();
      };
    },
        ka = function ka(ja) {
      return function () {
        var qa = O.xeval.str(ja)(v.at(v.stringXPath)(E.relIdTypeAT))();
        return E.rightOrThrow(sa(qa))();
      };
    },
        B = function B(ja) {
      return function () {
        var qa = O.xeval.str(ja)(".")();
        return E.rightOrThrow(E.readNonEmptyString("RelatedIdentifier")(qa))();
      };
    },
        Z = function Z(ja) {
      return function () {
        var qa = B(ja)(),
            Ba = ka(ja)(),
            xa = ma(ja)();
        return {
          id: qa,
          idType: Ba,
          relType: xa
        };
      };
    };

    return function () {
      var ja = O.xevalRoot.any(E.relIdRootP)(C.ordered_node_snapshot_type)();
      ja = A.snapshot(ja)();
      ja = D.sequence(D.traversableArray)(I.applicativeEffect)(q.map(q.functorArray)(Z)(ja))();
      ja = f.fromArray(ja);
      if (ja instanceof p.Just) return ja.value0;
      if (ja instanceof p.Nothing) return L["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 120, column 3 - line 122, column 67): " + [ja.constructor.name]);
    };
  },
      la = function la(O) {
    return function (ma) {
      var ka = function ka(ja) {
        return function () {
          var qa = O.xeval.str(ja)(v.at(v.stringXPath)(E.resIdTypeAT))();
          return E.rightOrThrow(sa(qa))();
        };
      },
          B = function B(ja) {
        return function () {
          var qa = O.xeval.str(ja)(".")();
          return E.rightOrThrow(E.readNonEmptyString("ResourceID")(qa))();
        };
      },
          Z = function Z(ja) {
        return function (qa) {
          return D.sequence(D.traversableMaybe)(I.applicativeEffect)(g.bind(p.bindMaybe)(ja)(function (Ba) {
            return g.bind(p.bindMaybe)(qa)(function (xa) {
              return e.pure(p.applicativeMaybe)(k.lift2(I.applyEffect)(function (Ha) {
                return function (Qa) {
                  return {
                    id: Ha,
                    idType: Qa
                  };
                };
              })(Ba)(xa));
            });
          }));
        };
      };

      return function () {
        var ja = O.xeval.nodeMay(ma)(v.xx(v.stringXPath)(E.resIdP))(),
            qa = q.map(p.functorMaybe)(B)(ja);
        ja = q.map(p.functorMaybe)(ka)(ja);
        return Z(qa)(ja)();
      };
    };
  },
      oa = function oa(O) {
    return function () {
      var ma = O.xevalRoot.str(E.idRootP)();
      ma = E.rightOrThrow(E.readNonEmptyString("Identifier")(ma))();
      var ka = O.xevalRoot.str(E.idTypeRootAP)();
      ka = E.rightOrThrow(sa(ka))();
      return {
        id: ma,
        idType: ka
      };
    };
  },
      va = function va(O) {
    return function (ma) {
      var ka = function ka(B) {
        return function () {
          var Z = O.xeval.str(B)(".")();
          return E.rightOrThrow(E.readNonEmptyString("Format")(Z))();
        };
      };

      return function () {
        var B = O.xeval.any(ma)(v.pathAppendNSx(v.stringXPath)(v.xx(v.stringXPath)(E.formatCP))(E.formatP))(C.ordered_node_snapshot_type)();
        B = A.snapshot(B)();
        return D.sequence(D.traversableArray)(I.applicativeEffect)(q.map(q.functorArray)(ka)(B))();
      };
    };
  },
      ca = function ca(O) {
    return "0" === O ? e.pure(l.applicativeEither)(!1) : "1" === O ? e.pure(l.applicativeEither)(!0) : "false" === O ? e.pure(l.applicativeEither)(!1) : "true" === O ? e.pure(l.applicativeEither)(!0) : l.Left.create("Invalid xs:boolean value: '" + (O + "'"));
  },
      fa = function fa(O) {
    return "" === O ? e.pure(l.applicativeEither)(p.Nothing.value) : q.map(l.functorEither)(p.Just.create)(ca(O));
  },
      ta = function ta(O) {
    return function (ma) {
      var ka = v.pathAppendNSx(v.stringXPath)(v.xx(v.stringXPath)(E.instPolicyCP))(E.instPolicyP),
          B = function B(Z) {
        return function () {
          var ja = w.childNodes(Z)();
          ja = N.toArray(ja)();
          ja = b.head(b.filter(function (Ga) {
            return !r.startsWith("#")(w.nodeName(Ga));
          })(ja));
          if (ja instanceof p.Just) var qa = ja.value0;else if (ja instanceof p.Nothing) qa = L["throw"]("Couldn't find child node of " + w.nodeName(Z))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 404, column 30 - line 406, column 80): " + [ja.constructor.name]);
          var Ba = O.xeval.str(qa)(".")(),
              xa = E.rightOrThrow(E.readNonEmptyString("Policy")(Ba))();

          ja = function () {
            var Ga = q.map(p.functorMaybe)(S.localName)(S.fromNode(qa));
            if (Ga instanceof p.Just && Ga.value0 === E.freeTextPolicyP) return new G.FreeTextPolicy(xa);

            if (Ga instanceof p.Just && Ga.value0 === E.refPolicyP) {
              Ga = W.parsePublicURL(Ba);
              if (Ga instanceof l.Left) return L["throw"]("In refPolicy URL parsing: " + Ga.value0)();
              if (Ga instanceof l.Right) return new G.RefPolicy(Ga.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 411, column 37 - line 413, column 45): " + [Ga.constructor.name]);
            }

            if (Ga instanceof p.Just) return L["throw"]("invalid element '" + (Ga.value0 + "' as child of institutionPolicy"))();
            if (Ga instanceof p.Nothing) return L["throw"]("unable to convert policy child Node with name '" + (w.nodeName(qa) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 409, column 17 - line 417, column 56): " + [Ga.constructor.name]);
          }();

          var Ha = O.xeval.str(Z)(v.at(v.stringXPath)(E.polTypeAT))();
          Ha = E.rightOrThrow(aa(Ha))();
          var Qa = O.xeval.str(Z)(v.at(v.stringXPath)(E.appliesToProdAT))();
          Qa = E.rightOrThrow(fa(Qa))();
          return {
            policy: ja,
            policyType: Ha,
            appliesToProduct: Qa
          };
        };
      };

      return function () {
        var Z = O.xeval.any(ma)(ka)(C.ordered_node_snapshot_type)();
        Z = A.snapshot(Z)();
        Z = D.sequence(D.traversableArray)(I.applicativeEffect)(q.map(q.functorArray)(B)(Z))();
        Z = f.fromArray(Z);
        if (Z instanceof p.Just) return Z.value0;
        if (Z instanceof p.Nothing) return L["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 391, column 3 - line 393, column 67): " + [Z.constructor.name]);
      };
    };
  },
      Da = function Da(O) {
    return function (ma) {
      var ka = function ka(Z) {
        return function () {
          var ja = O.xeval.str(Z)(v.xx(v.stringXPath)(E.pubYearP))();
          ja = E.rightOrThrow(E.readNonEmptyString("PubYear")(ja))();
          return F.intToNat(t.round(K.readInt(10)(x.toString(ja))));
        };
      },
          B = v.xx(v.stringXPath)(E.basicMetaP);

      return function () {
        var Z = E.unsafeSingleNodeValue(O)(ma)(B)(),
            ja = O.xeval.str(Z)(v.xx(v.stringXPath)(E.titleP))(),
            qa = O.xeval.str(Z)(v.xx(v.stringXPath)(E.creatorP))();
        ja = E.rightOrThrow(E.readNonEmptyString("Title")(ja))();
        qa = E.rightOrThrow(E.readNonEmptyString("Creator")(qa))();
        Z = ka(Z)();
        return {
          title: ja,
          creator: qa,
          publicationYear: Z
        };
      };
    };
  },
      V = function V(O) {
    var ma = x.toString(O);
    return function () {
      var ka = y.stripSuffix("Z")(ma);
      if (ka instanceof p.Just) ka = 10 >= z.length(ka.value0) ? ka.value0 + "T00:00:00.000Z" : ma;else if (ka instanceof p.Nothing) ka = ma;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 106, column 24 - line 108, column 23): " + [ka.constructor.name]);
      ka = n.parse(ka)();
      return p.fromMaybe(c.bottom(m.boundedDateTime))(n.toDateTime(ka));
    };
  },
      H = function H(O) {
    return function () {
      var ma = O.xevalRoot.str(E.dateRootP)();
      ma = E.rightOrThrow(E.readNonEmptyString("Date")(ma))();
      return V(ma)();
    };
  },
      R = function R(O) {
    return function () {
      var ma = O.xevalRoot.str(E.lastModRootP)();
      ma = E.rightOrThrow(E.readNonEmptyString("ModDate")(ma))();
      return V(ma)();
    };
  },
      Q = function Q(O) {
    return function (ma) {
      return function (ka) {
        return function () {
          var B = O.xeval.str(ka)(ma)();
          B = W.parsePublicURL(B);
          if (B instanceof l.Left) return L["throw"](B.value0)();
          if (B instanceof l.Right) return B.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 452, column 3 - line 454, column 26): " + [B.constructor.name]);
        };
      };
    };
  },
      ea = function ea(O) {
    return function (ma) {
      var ka = function ka(qa) {
        return function () {
          var Ba = qa();
          return E.rightOrThrow(E.readNonEmptyString("SuperOrg")(Ba))();
        };
      },
          B = function B(qa) {
        return function () {
          var Ba = O.xeval.nodeMay(qa)(v.xx(v.stringXPath)(E.superOrgNameP))();
          return D.sequence(D.traversableMaybe)(I.applicativeEffect)(q.map(p.functorMaybe)(function (xa) {
            return ka(O.xeval.str(xa)("."));
          })(Ba))();
        };
      },
          Z = function Z(qa) {
        return function () {
          var Ba = E.unsafeSingleNodeValue(O)(qa)(v.xx(v.stringXPath)(E.instSustainP))(),
              xa = Q(O)(v.xx(v.stringXPath)(E.missionUrlP))(Ba)();
          Ba = Q(O)(v.xx(v.stringXPath)(E.fundingUrlP))(Ba)();
          return {
            missionStatementURL: xa,
            fundingStatementURL: Ba
          };
        };
      },
          ja = function ja(qa) {
        var Ba = v.xx(v.stringXPath)(E.instContactP);
        return function () {
          var xa = E.unsafeSingleNodeValue(O)(qa)(Ba)(),
              Ha = O.xeval.str(xa)(v.at(v.stringXPath)(E.instContactTypeAT))();
          Ha = E.rightOrThrow(wa(Ha))();
          xa = O.xeval.str(xa)(".")();
          xa = T.validate(xa);
          if (xa instanceof l.Left) xa = L["throw"]("Error in validating email address for InstitutionContact: " + xa.value0)();else if (xa instanceof l.Right) xa = xa.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 355, column 23 - line 359, column 28): " + [xa.constructor.name]);
          return {
            emailAddress: xa,
            contactType: Ha
          };
        };
      };

      return function () {
        var qa = E.unsafeSingleNodeValue(O)(ma)(v.xx(v.stringXPath)(E.locP))(),
            Ba = ya(O)(qa)(),
            xa = g.join(I.bindEffect)(q.mapFlipped(I.functorEffect)(O.xeval.str(qa)(v.xx(v.stringXPath)(E.instNameP)))(function (Ia) {
          return E.rightOrThrow(E.readNonEmptyString("Institution Name")(Ia));
        }))(),
            Ha = O.xeval.str(qa)(v.xx(v.stringXPath)(E.instTypeP))();
        Ha = E.rightOrThrow(u(Ha))();
        var Qa = B(qa)(),
            Ga = ja(qa)(),
            Ma = Z(qa)(),
            Ra = ta(O)(qa)();
        qa = O.xeval.str(qa)(v.xx(v.stringXPath)(E.versioningP))();
        qa = E.rightOrThrow(ca(qa))();
        return {
          institutionID: Ba,
          institutionName: xa,
          institutionType: Ha,
          superOrganizationName: Qa,
          institutionContact: Ga,
          institutionSustainability: Ma,
          institutionPolicies: Ra,
          versioning: qa
        };
      };
    };
  },
      pa = function pa(O) {
    return function (ma) {
      var ka = function ka(Z) {
        return function () {
          var ja = O.xeval.str(Z)(v.at(v.stringXPath)(E.relTypeAT))();
          return E.rightOrThrow(Y(ja))();
        };
      },
          B = function B(Z) {
        return function (ja) {
          return D.sequence(D.traversableMaybe)(I.applicativeEffect)(g.bind(p.bindMaybe)(Z)(function (qa) {
            return g.bind(p.bindMaybe)(ja)(function (Ba) {
              return e.pure(p.applicativeMaybe)(k.lift2(I.applyEffect)(function (xa) {
                return function (Ha) {
                  return {
                    url: xa,
                    relationType: Ha
                  };
                };
              })(qa)(Ba));
            });
          }));
        };
      };

      return function () {
        var Z = O.xeval.nodeMay(ma)(v.xx(v.stringXPath)(E.resMetaSourceP))(),
            ja = q.map(p.functorMaybe)(Q(O)("."))(Z);
        Z = q.map(p.functorMaybe)(ka)(Z);
        return B(ja)(Z)();
      };
    };
  },
      Aa = function Aa(O) {
    var ma = function ma(ka) {
      return function () {
        var B = Da(O)(ka)(),
            Z = la(O)(ka)(),
            ja = J(O)(ka)(),
            qa = va(O)(ka)(),
            Ba = pa(O)(ka)(),
            xa = ea(O)(ka)();
        return {
          basicMetadata: B,
          resourceID: Z,
          resourceType: ja,
          format: qa,
          resourceMetadataSource: Ba,
          location: xa
        };
      };
    };

    return function () {
      var ka = O.xevalRoot.any(E.sProdRootP)(C.ordered_node_snapshot_type)();
      ka = A.snapshot(ka)();
      ka = D.sequence(D.traversableArray)(I.applicativeEffect)(q.map(q.functorArray)(ma)(ka))();
      ka = f.fromArray(ka);
      if (ka instanceof p.Just) return ka.value0;
      if (ka instanceof p.Nothing) return L["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 178, column 3 - line 180, column 70): " + [ka.constructor.name]);
    };
  };

  d.readRecord = function (O) {
    return function () {
      var ma = oa(O)(),
          ka = H(O)(),
          B = R(O)(),
          Z = da(O)(),
          ja = Aa(O)();
      return {
        identifier: ma,
        date: ka,
        lastModified: B,
        relatedIdentifiers: Z,
        supplementaryProducts: ja
      };
    };
  };

  d.readIdentifierType = sa;
  d.parseDate = V;
  d.readRelationType = Y;
  d.readResourceTypeGeneral = M;
  d.readInstitutionType = u;
  d.readInstitutionContactType = wa;
  d.readPolicyType = aa;
  d.readBoolean = ca;
})(PS);

(function (a) {
  a.copyToClipboard = function (d) {
    return function () {
      var e = document.createElement("textarea");
      e.type = "text";
      e.value = d;
      e.style.position = "absolute";
      e.style.left = -1E4;
      document.body.appendChild(e);
      e.select();
      document.execCommand("copy");
      document.body.removeChild(e);
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

  var d = a["Metajelo.XPaths.Write"],
      e = a["Control.Applicative"],
      k = a["Data.Array.NonEmpty.Internal"],
      g = a["Data.Foldable"],
      b = a["Data.Functor"],
      f = a["Data.JSDate"],
      c = a["Data.Maybe"],
      m = a["Data.Natural"],
      l = a["Data.Show"],
      q = a["Data.Traversable"],
      t = a["Data.Unit"],
      n = a["Data.XPath"],
      p = a.Effect,
      F = a["Metajelo.Types"],
      z = a["Metajelo.XPaths"],
      y = a["Nonbili.DOM"],
      x = a["Text.Email.Parser"],
      r = a["Text.URL.Validate"],
      D = a["Web.DOM.Document"],
      v = a["Web.DOM.Element"],
      I = a["Web.DOM.Node"],
      L = function L(V) {
    return function (H) {
      return function (R) {
        return function (Q) {
          var ea = v.fromNode(R);
          return function () {
            q.sequence(q.traversableMaybe)(p.applicativeEffect)(b.mapFlipped(c.functorMaybe)(ea)(function (pa) {
              return v.setAttribute(V)(l.show(F.showIdentifierType)(Q))(pa);
            }))();
            return t.unit;
          };
        };
      };
    };
  },
      K = a["Data.String.NonEmpty.Internal"].toString,
      G = function G(V) {
    return function (H) {
      return function (R) {
        return function (Q) {
          return function () {
            I.setTextContent(K(Q.id))(R)();
            return L(V)(H)(R)(Q.idType)();
          };
        };
      };
    };
  },
      E = function E(V) {
    return function (H) {
      return function () {
        var R = z.unsafeSingleNodeValue(V)(V.recNode)(n.xx(n.stringXPath)(z.idP))();
        return G(z.idTypeAT)(V)(R)(H)();
      };
    };
  },
      T = function T(V) {
    return function (H) {
      return function () {
        q.sequence(q.traversableMaybe)(p.applicativeEffect)(b.map(c.functorMaybe)(I.setTextContent(K(V)))(H))();
        return t.unit;
      };
    };
  },
      W = function W(V) {
    return function () {
      var H = f.toISOString(f.fromDateTime(V))();
      return z.rightOrThrow(z.readNonEmptyString("(generic date)")(H))();
    };
  },
      A = function A(V) {
    return function (H) {
      return function () {
        var R = W(H)(),
            Q = V.xevalRoot.nodeMay(z.dateRootP)();
        return T(R)(Q)();
      };
    };
  },
      C = function C(V) {
    return function (H) {
      return function () {
        var R = W(H)(),
            Q = V.xevalRoot.nodeMay(z.lastModRootP)();
        return T(R)(Q)();
      };
    };
  },
      S = function S(V) {
    return function (H) {
      var R = v.prefix(V.recElem);
      return function () {
        if (R instanceof c.Just) var Q = R.value0 + ":";else if (R instanceof c.Nothing) Q = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 244, column 20 - line 246, column 18): " + [R.constructor.name]);
        Q += H;
        return D.createElementNS(new c.Just(V.ns))(Q)(V.doc)();
      };
    };
  },
      w = function w(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = S(V)(R)();
          I.appendChild(v.toNode(Q))(H)();
          return Q;
        };
      };
    };
  },
      N = function N(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = b.map(p.functorEffect)(v.toNode)(w(V)(H)(z.basicMetaP))(),
              ea = b.map(p.functorEffect)(v.toNode)(w(V)(Q)(z.titleP))();
          I.setTextContent(K(R.title))(ea)();
          ea = b.map(p.functorEffect)(v.toNode)(w(V)(Q)(z.creatorP))();
          I.setTextContent(K(R.creator))(ea)();
          Q = b.map(p.functorEffect)(v.toNode)(w(V)(Q)(z.pubYearP))();
          return I.setTextContent(l.show(m.showNatural)(R.publicationYear))(Q)();
        };
      };
    };
  },
      M = function M(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = w(V)(H)(z.instContactP)();
          q.sequence(q.traversableMaybe)(p.applicativeEffect)(b.mapFlipped(c.functorMaybe)(R.contactType)(function (ea) {
            return v.setAttribute(z.instContactTypeAT)(l.show(F.showInstitutionContactType)(ea))(Q);
          }))();
          return I.setTextContent(x.toString(R.emailAddress))(v.toNode(Q))();
        };
      };
    };
  },
      J = function J(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = b.map(p.functorEffect)(v.toNode)(w(V)(H)(z.instIdP))();
          return G(z.idTypeAT)(V)(Q)(R)();
        };
      };
    };
  },
      Y = function Y(V) {
    return function (H) {
      return g.for_(p.applicativeEffect)(k.foldableNonEmptyArray)(H)(function (R) {
        return function () {
          var Q = w(V)(V.recNode)(z.relIdP)(),
              ea = v.toNode(Q);
          I.setTextContent(K(R.id))(ea)();
          v.setAttribute(z.relIdTypeAT)(l.show(F.showIdentifierType)(R.idType))(Q)();
          return v.setAttribute(z.relTypeAT)(l.show(F.showRelationType)(R.relType))(Q)();
        };
      });
    };
  },
      aa = function aa(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = b.map(p.functorEffect)(v.toNode)(w(V)(H)(z.resIdP))();
          return G(z.resIdTypeAT)(V)(Q)(R)();
        };
      };
    };
  },
      u = function u(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = w(V)(H)(z.resMetaSourceP)();
          I.setTextContent(r.urlToString(R.url))(v.toNode(Q))();
          return v.setAttribute(z.relTypeAT)(l.show(F.showRelationType)(R.relationType))(Q)();
        };
      };
    };
  },
      wa = function wa(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = w(V)(H)(z.resTypeP)();
          I.setTextContent(R.description)(v.toNode(Q))();
          return v.setAttribute(z.resTypeGenAT)(l.show(F.showResourceTypeGeneral)(R.generalType))(Q)();
        };
      };
    };
  },
      sa = function sa(V) {
    return function (H) {
      return function (R) {
        return function (Q) {
          return function () {
            var ea = b.map(p.functorEffect)(v.toNode)(w(H)(R)(V))();
            return I.setTextContent(Q)(ea)();
          };
        };
      };
    };
  },
      ya = function ya(V) {
    return function (H) {
      return function (R) {
        return function (Q) {
          return sa(V)(H)(R)(K(Q));
        };
      };
    };
  },
      da = function da(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = b.map(p.functorEffect)(v.toNode)(w(V)(H)(z.formatCP))();
          return g.for_(p.applicativeEffect)(g.foldableArray)(R)(function (ea) {
            return ya(z.formatP)(V)(Q)(ea);
          })();
        };
      };
    };
  },
      la = function la(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = w(V)(H)(z.instPolicyP)(),
              ea = v.toNode(Q);
          q.sequence(q.traversableMaybe)(p.applicativeEffect)(b.mapFlipped(c.functorMaybe)(R.policyType)(function (pa) {
            return v.setAttribute(z.polTypeAT)(l.show(F.showPolicyType)(pa))(Q);
          }))();
          q.sequence(q.traversableMaybe)(p.applicativeEffect)(b.mapFlipped(c.functorMaybe)(R.appliesToProduct)(function (pa) {
            return v.setAttribute(z.appliesToProdAT)(l.show(l.showBoolean)(pa))(Q);
          }))();
          if (R.policy instanceof F.FreeTextPolicy) return ya(z.freeTextPolicyP)(V)(ea)(R.policy.value0)();
          if (R.policy instanceof F.RefPolicy) return ya(z.refPolicyP)(V)(ea)(r.urlToNEString(R.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 211, column 3 - line 214, column 27): " + [R.policy.constructor.name]);
        };
      };
    };
  },
      oa = function oa(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = b.map(p.functorEffect)(v.toNode)(w(V)(H)(z.instPolicyCP))();
          return g.for_(p.applicativeEffect)(k.foldableNonEmptyArray)(R)(function (ea) {
            return la(V)(Q)(ea);
          })();
        };
      };
    };
  },
      va = function va(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = b.map(p.functorEffect)(v.toNode)(w(V)(H)(z.instSustainP))();
          ya(z.missionUrlP)(V)(Q)(r.urlToNEString(R.missionStatementURL))();
          return ya(z.fundingUrlP)(V)(Q)(r.urlToNEString(R.fundingStatementURL))();
        };
      };
    };
  },
      ca = function ca(V) {
    return function (H) {
      return function (R) {
        return function () {
          var Q = w(V)(H)(z.locP)(),
              ea = v.toNode(Q);
          J(V)(ea)(R.institutionID)();
          ya(z.instNameP)(V)(ea)(R.institutionName)();
          sa(z.instTypeP)(V)(ea)(l.show(F.showInstitutionType)(R.institutionType))();
          q.sequence(q.traversableMaybe)(p.applicativeEffect)(b.mapFlipped(c.functorMaybe)(R.superOrganizationName)(function (pa) {
            return ya(z.superOrgNameP)(V)(ea)(pa);
          }))();
          M(V)(ea)(R.institutionContact)();
          va(V)(ea)(R.institutionSustainability)();
          oa(V)(ea)(R.institutionPolicies)();
          return sa(z.versioningP)(V)(ea)(l.show(l.showBoolean)(R.versioning))();
        };
      };
    };
  },
      fa = function fa(V) {
    return function (H) {
      return function () {
        var R = z.unsafeSingleNodeValue(V)(V.recNode)(n.xx(n.stringXPath)(z.sProdCP))(),
            Q = b.map(p.functorEffect)(v.toNode)(w(V)(R)(z.sProdP))();
        N(V)(Q)(H.basicMetadata)();
        q.sequence(q.traversableMaybe)(p.applicativeEffect)(b.mapFlipped(c.functorMaybe)(H.resourceID)(function (ea) {
          return aa(V)(Q)(ea);
        }))();
        wa(V)(Q)(H.resourceType)();
        da(V)(Q)(H.format)();
        q.sequence(q.traversableMaybe)(p.applicativeEffect)(b.mapFlipped(c.functorMaybe)(H.resourceMetadataSource)(function (ea) {
          return u(V)(Q)(ea);
        }))();
        return ca(V)(Q)(H.location)();
      };
    };
  },
      ta = function ta(V) {
    return function (H) {
      return g.for_(p.applicativeEffect)(k.foldableNonEmptyArray)(H)(function (R) {
        return fa(V)(R);
      });
    };
  },
      Da = function Da(V) {
    return function (H) {
      return function () {
        E(V)(H.identifier)();
        A(V)(H.date)();
        C(V)(H.lastModified)();
        Y(V)(H.relatedIdentifiers)();
        return ta(V)(H.supplementaryProducts)();
      };
    };
  };

  d.recordToString = function (V) {
    return function () {
      var H = z.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      Da(H)(V)();
      H = D.documentElement(H.doc)();
      return c.maybe(e.pure(p.applicativeEffect)(""))(y.outerHTML)(H)();
    };
  };

  d.dateTimeToStr = W;
})(PS);

(function (a) {
  a.unsafeGet = function (d) {
    return function (e) {
      return function () {
        return e[d];
      };
    };
  };
})(PS["React.SyntheticEvent"] = PS["React.SyntheticEvent"] || {});

(function (a) {
  a["React.SyntheticEvent"] = a["React.SyntheticEvent"] || {};
  var d = a["React.SyntheticEvent"],
      e = a["React.SyntheticEvent"],
      k = a["Data.Symbol"];

  a = function (g) {
    return function (b) {
      return function (f) {
        return function (c) {
          return e.unsafeGet(k.reflectSymbol(b)(f))(c);
        };
      };
    };
  }()(new k.IsSymbol(function () {
    return "target";
  }))(k.SProxy.value);

  d.target = a;
})(PS);

(function (a) {
  a.children = function (d) {
    return function (e) {
      return function () {
        return e[d];
      };
    };
  }("children");
})(PS["Web.DOM.ParentNode"] = PS["Web.DOM.ParentNode"] || {});

(function (a) {
  a["Web.DOM.ParentNode"] = a["Web.DOM.ParentNode"] || {};
  a["Web.DOM.ParentNode"].children = a["Web.DOM.ParentNode"].children;
})(PS);

(function (a) {
  a._files = function (d) {
    return function () {
      return d.files;
    };
  };

  a.setValue = function (d) {
    return function (e) {
      return function () {
        e.value = d;
      };
    };
  };
})(PS["Web.HTML.HTMLInputElement"] = PS["Web.HTML.HTMLInputElement"] || {});

(function (a) {
  a["Web.HTML.HTMLInputElement"] = a["Web.HTML.HTMLInputElement"] || {};
  var d = a["Web.HTML.HTMLInputElement"],
      e = a["Web.HTML.HTMLInputElement"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("HTMLInputElement");

  var f = function () {
    var c = k.map(b.functorEffect)(g.toMaybe);
    return function (m) {
      return c(e._files(m));
    };
  }();

  d.fromElement = a;
  d.files = f;
  d.setValue = e.setValue;
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var d = a["Metajelo.FormUtil"],
      e = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      f = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      m = a["Control.Alt"],
      l = a["Control.Applicative"],
      q = a["Control.Apply"],
      t = a["Control.Bind"],
      n = a["Control.Cofree"],
      p = a["Control.Plus"],
      F = a["Data.Array"],
      z = a["Data.Array.NonEmpty"],
      y = a["Data.Bifunctor"],
      x = a["Data.Bounded"],
      r = a["Data.Either"],
      D = a["Data.Enum"],
      v = a["Data.Eq"],
      I = a["Data.Foldable"],
      L = a["Data.Functor"],
      K = a["Data.Generic.Rep"],
      G = a["Data.Generic.Rep.Bounded"],
      E = a["Data.Generic.Rep.Enum"],
      T = a["Data.Generic.Rep.Eq"],
      W = a["Data.Generic.Rep.Ord"],
      A = a["Data.Generic.Rep.Show"],
      C = a["Data.Int"],
      S = a["Data.Maybe"],
      w = a["Data.Monoid"],
      N = a["Data.Natural"],
      M = a["Data.Ord"],
      J = a["Data.Profunctor.Strong"],
      Y = a["Data.Semigroup"],
      aa = a["Data.Show"],
      u = a["Data.String.Common"],
      wa = a["Data.String.NonEmpty.Internal"],
      sa = a["Data.Symbol"],
      ya = a["Data.Traversable"],
      da = a["Data.Tuple"],
      la = a["Data.Unfoldable1"],
      oa = a["Data.Unit"],
      va = a.Effect,
      ca = a["Effect.Class"],
      fa = a["Effect.Exception"],
      ta = a["Effect.Now"],
      Da = a["Effect.Unsafe"],
      V = a["Foreign.Object"],
      H = a.Global,
      R = a["Metajelo.SchemaInfo"],
      Q = a["Metajelo.Types"],
      ea = a["Metajelo.XPaths.Read"],
      pa = a["Metajelo.XPaths.Write"],
      Aa = a["React.SyntheticEvent"],
      O = a["Text.Email.Parser"],
      ma = a["Text.Email.Validate"],
      ka = a["Text.URL.Validate"],
      B = a["Web.DOM.Document"],
      Z = a["Web.DOM.Element"],
      ja = a["Web.DOM.HTMLCollection"],
      qa = a["Web.DOM.NonElementParentNode"],
      Ba = a["Web.DOM.ParentNode"],
      xa = a["Web.HTML"],
      Ha = a["Web.HTML.HTMLDocument"],
      Qa = a["Web.HTML.HTMLInputElement"],
      Ga = a["Web.HTML.Window"],
      Ma = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      Ra = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      Ia = function () {
    function P(U) {
      this.value0 = U;
    }

    P.create = function (U) {
      return new P(U);
    };

    return P;
  }(),
      La = function () {
    function P(U) {
      this.value0 = U;
    }

    P.create = function (U) {
      return new P(U);
    };

    return P;
  }(),
      Na = function Na(P, U, ua) {
    this.fromOptionValue = P;
    this.toOptionLabel = U;
    this.toOptionValue = ua;
  },
      hb = function hb() {
    var P = xa.window();
    P = Ga.document(P)();
    return Ha.toDocument(P);
  },
      cb = function cb(P) {
    if (P instanceof Ia || P instanceof La) return P.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 375, column 1 - line 375, column 34): " + [P.constructor.name]);
  },
      ib = function ib(P) {
    return f.input(k.widgetLiftWidget)([c.defaultValue(P), L.map(g.functorProps)(c.unsafeTargetValue)(c.onChange)]);
  },
      Wa = function Wa(P) {
    return t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(P)(function (U) {
      return l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(wa.fromString(u.trim(U)));
    });
  },
      jb = function jb(P) {
    return function (U) {
      U = V.lookup(P)(U);
      if (U instanceof S.Just) return U.value0;
      if (U instanceof S.Nothing) return "";
      throw Error("Failed pattern match at Metajelo.FormUtil (line 89, column 21 - line 91, column 16): " + [U.constructor.name]);
    };
  },
      kb = function kb(P) {
    var U = P ? "Hide Descriptions" : "Show Descriptions";
    return f.div_(b.widgetShiftMap)([])(L.voidRight(b.widgetFunctor)(!P)(f.button_(b.widgetShiftMap)([c.onClick])(f.text(k.widgetLiftWidget)(U))));
  },
      db = function db(P) {
    return e.step(P)(t.bind(b.widgetBind)(kb(P))(function (U) {
      return l.pure(b.widgetApplicative)(db(U));
    }));
  },
      lb = function lb(P) {
    return function (U) {
      return function (ua) {
        return function () {
          var na = hb();
          na = B.toNonElementParentNode(na);
          na = qa.getElementById(P)(na)();
          if (na instanceof S.Just) return na = Z.toParentNode(na.value0), na = Ba.children(na)(), na = ja.toArray(na)(), na = F.filter(function (za) {
            return Z.tagName(za) === U;
          })(na), na = F.catMaybes(L.map(L.functorArray)(Qa.fromElement)(na)), I.for_(va.applicativeEffect)(I.foldableArray)(na)(Qa.setValue(ua))();
          if (na instanceof S.Nothing) return oa.unit;
          throw Error("Failed pattern match at Metajelo.FormUtil (line 504, column 3 - line 517, column 25): " + [na.constructor.name]);
        };
      };
    };
  },
      eb = function eb(P) {
    return function (U) {
      return U < P ? [] : F.range(P)(U);
    };
  },
      mb = function mb(P) {
    return "FreeTextPolicy" === P ? l.pure(r.applicativeEither)(Ma.value) : "RefPolicy" === P ? l.pure(r.applicativeEither)(Ra.value) : r.Left.create("Unknown Policy: '" + (P + "'"));
  },
      nb = V.unions(I.foldableArray)([R.descrAttrMap, R.descrCTypMap, R.descrEleMap, R.descrSTypMap]),
      $a = function $a(P) {
    return function (U) {
      return I.fold(I.foldableMaybe)(w.monoidString)(L.map(S.functorMaybe)(aa.show(P))(U));
    };
  },
      wb = new Na(function (P) {
    return S.fromJust()(r.hush(ea.readResourceTypeGeneral(P)));
  }, aa.show(Q.showResourceTypeGeneral), aa.show(Q.showResourceTypeGeneral)),
      xb = new Na(function (P) {
    return S.fromJust()(r.hush(ea.readRelationType(P)));
  }, aa.show(Q.showRelationType), aa.show(Q.showRelationType)),
      Sa = new Na(function (P) {
    return S.fromJust()(r.hush(ea.readInstitutionType(P)));
  }, aa.show(Q.showInstitutionType), aa.show(Q.showInstitutionType)),
      yb = new Na(function (P) {
    return S.fromJust()(r.hush(ea.readIdentifierType(P)));
  }, aa.show(Q.showIdentifierType), aa.show(Q.showIdentifierType)),
      Ta = function Ta(P) {
    return P instanceof Ia ? !0 : !1;
  },
      Ua = new K.Generic(function (P) {
    if (P instanceof Ma) return new K.Inl(K.NoArguments.value);
    if (P instanceof Ra) return new K.Inr(K.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 317, column 1 - line 317, column 58): " + [P.constructor.name]);
  }, function (P) {
    if (P instanceof K.Inl) return Ma.value;
    if (P instanceof K.Inr) return Ra.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 317, column 1 - line 317, column 58): " + [P.constructor.name]);
  }),
      Oa = new aa.Show(A.genericShow(Ua)(A.genericShowSum(A.genericShowConstructor(A.genericShowArgsNoArguments)(new sa.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(A.genericShowConstructor(A.genericShowArgsNoArguments)(new sa.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      zb = new Na(function () {
    var P = S.fromMaybe(Ma.value);
    return function (U) {
      return P(r.hush(mb(U)));
    };
  }(), aa.show(Oa), aa.show(Oa)),
      Xa = new L.Functor(function (P) {
    return function (U) {
      if (U instanceof Ia) return Ia.create(L.map(S.functorMaybe)(P)(U.value0));
      if (U instanceof La) return La.create(L.map(S.functorMaybe)(P)(U.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 362, column 1 - line 364, column 48): " + [P.constructor.name, U.constructor.name]);
    };
  }),
      Va = function Va(P) {
    return function (U) {
      return function (ua) {
        return e.step(ua)(function () {
          var na = S.isJust(ua) ? !0 : !1;
          return t.bind(b.widgetBind)(f.select(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.value(S.maybe("")(U.toOptionValue)(ua)), L.map(g.functorProps)(function () {
            var za = U.fromOptionValue;
            return function (Ca) {
              return za(c.unsafeTargetValue(Ca));
            };
          }())(c.onChange)])(F.cons(f.option(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.disabled(na)])([f.text(k.widgetLiftWidget)("Select ...")]))(L.mapFlipped(L.functorArray)(D.upFromIncluding(P.Enum1())(la.unfoldable1Array)(x.bottom(P.Bounded0())))(function (za) {
            return f.option(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.value((0, U.toOptionValue)(za))])([f.text(k.widgetLiftWidget)((0, U.toOptionLabel)(za))]);
          }))))(function (za) {
            return l.pure(b.widgetApplicative)(Va(P)(U)(new S.Just(za)));
          });
        }());
      };
    };
  },
      Pa = function Pa(P) {
    return function (U) {
      return function (ua) {
        return function (na) {
          return function (za) {
            return I.fold(P)(ua)(L.map(U)(na)(za));
          };
        };
      };
    };
  },
      bb = function bb(P) {
    P = Pa(I.foldableMaybe)(S.functorMaybe)(w.monoidString)(wa.toString)(P);
    P = e.debounce(w.monoidArray)(1E3)(P)(ib);
    return Wa(P);
  },
      fb = function fb(P) {
    return S.maybe(w.mempty(b.widgetMonoid(w.monoidArray)))(function (U) {
      return f.div(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.style({
        color: "red"
      })])([f.text(k.widgetLiftWidget)(aa.show(P)(U))]);
    });
  },
      ob = new v.Eq(T.genericEq(Ua)(T.genericEqSum(T.genericEqConstructor(T.genericEqNoArguments))(T.genericEqConstructor(T.genericEqNoArguments)))),
      rb = new M.Ord(function () {
    return ob;
  }, function (P) {
    return function (U) {
      return W.genericCompare(Ua)(W.genericOrdSum(W.genericOrdConstructor(W.genericOrdNoArguments))(W.genericOrdConstructor(W.genericOrdNoArguments)))(P)(U);
    };
  }),
      sb = new D.Enum(function () {
    return rb;
  }, E.genericPred(Ua)(E.genericEnumSum(E.genericEnumConstructor(E.genericEnumNoArguments))(G.genericTopConstructor(G.genericTopNoArguments))(E.genericEnumConstructor(E.genericEnumNoArguments))(G.genericBottomConstructor(G.genericBottomNoArguments))), E.genericSucc(Ua)(E.genericEnumSum(E.genericEnumConstructor(E.genericEnumNoArguments))(G.genericTopConstructor(G.genericTopNoArguments))(E.genericEnumConstructor(E.genericEnumNoArguments))(G.genericBottomConstructor(G.genericBottomNoArguments)))),
      pb = function pb(P) {
    return function (U) {
      return U instanceof S.Nothing ? "(None)" : $a(P)(U);
    };
  },
      tb = new Na(function (P) {
    return r.hush(ea.readBoolean(P));
  }, pb(aa.showBoolean), $a(aa.showBoolean)),
      Ab = new Na(function () {
    var P = t.join(S.bindMaybe);
    return function (U) {
      return P(r.hush(ea.readInstitutionContactType(U)));
    };
  }(), pb(Q.showInstitutionContactType), $a(Q.showInstitutionContactType)),
      ub = new Na(function () {
    var P = t.join(S.bindMaybe);
    return function (U) {
      return P(r.hush(ea.readPolicyType(U)));
    };
  }(), pb(Q.showPolicyType), $a(Q.showPolicyType)),
      Bb = function Bb(P) {
    return L.voidRight(b.widgetFunctor)(!P)(f.input(k.widgetLiftWidget)([c._type("checkbox"), c.checked(P), c.onChange]));
  },
      qb = function qb(P) {
    return e.step(P)(t.bind(b.widgetBind)(Bb(P))(function (U) {
      return l.pure(b.widgetApplicative)(qb(U));
    }));
  },
      X = new x.Bounded(function () {
    return rb;
  }, G.genericBottom(Ua)(G.genericBottomSum(G.genericBottomConstructor(G.genericBottomNoArguments))), G.genericTop(Ua)(G.genericTopSum(G.genericTopConstructor(G.genericTopNoArguments)))),
      ba = new D.BoundedEnum(function () {
    return X;
  }, function () {
    return sb;
  }, E.genericCardinality(Ua)(E.genericBoundedEnumSum(E.genericBoundedEnumConstructor(E.genericBoundedEnumNoArguments))(E.genericBoundedEnumConstructor(E.genericBoundedEnumNoArguments))), E.genericFromEnum(Ua)(E.genericBoundedEnumSum(E.genericBoundedEnumConstructor(E.genericBoundedEnumNoArguments))(E.genericBoundedEnumConstructor(E.genericBoundedEnumNoArguments))), E.genericToEnum(Ua)(E.genericBoundedEnumSum(E.genericBoundedEnumConstructor(E.genericBoundedEnumNoArguments))(E.genericBoundedEnumConstructor(E.genericBoundedEnumNoArguments)))),
      ha = new q.Apply(function () {
    return Xa;
  }, function (P) {
    return function (U) {
      if (P instanceof Ia && U instanceof Ia || P instanceof Ia && U instanceof La || P instanceof La && U instanceof Ia) return Ia.create(q.apply(S.applyMaybe)(P.value0)(U.value0));
      if (P instanceof La && U instanceof La) return La.create(q.apply(S.applyMaybe)(P.value0)(U.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 365, column 1 - line 369, column 63): " + [P.constructor.name, U.constructor.name]);
    };
  }),
      ia = new l.Applicative(function () {
    return ha;
  }, function (P) {
    return Ia.create(new S.Just(P));
  }),
      ra = function ra(P) {
    return function (U) {
      var ua = da.snd(U),
          na = da.fst(U),
          za = new Ia(S.Nothing.value);

      U = function () {
        var Fa = M.max(M.ordInt)(0)(na - F.length(ua) | 0);
        return Y.append(Y.semigroupArray)(L.map(L.functorArray)(l.pure(ia))(ua))(L.mapFlipped(L.functorArray)(eb(1)(Fa))(function (Ka) {
          return za;
        }));
      }();

      var Ca = function Ca(Fa) {
        return e.step(Fa)(t.bind(b.widgetBind)(L.voidRight(b.widgetFunctor)(La.create(cb(Fa)))(f.button(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.onClick])([f.text(k.widgetLiftWidget)("Delete")])))(function (Ka) {
          return l.pure(b.widgetApplicative)(Ca(Ka));
        }));
      },
          Ea = function Ea(Fa) {
        return f.li_(n.shiftMapCofree(w.monoidArray))([])(t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(P(cb(Fa)))(function (Ka) {
          return t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(Ca(new Ia(Ka)))(function (Ya) {
            return l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Ya);
          });
        }));
      },
          Za = function Za(Fa) {
        if (Fa instanceof La) return e.step(new La(S.Nothing.value))(w.mempty(b.widgetMonoid(w.monoidArray)));
        if (Fa instanceof Ia) return Ea(Fa);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 396, column 23 - line 398, column 35): " + [Fa.constructor.name]);
      };

      return f.div_(n.shiftMapCofree(w.monoidArray))([])(t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(function (Fa) {
        return function (Ka) {
          return e.loopS(w.monoidArray)(new da.Tuple(Fa, Ka))(function (Ya) {
            return f.ul_(n.shiftMapCofree(w.monoidArray))([])(function () {
              da.fst(Ya);
              var vb = da.snd(Ya);
              return t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(e.step(0)(L.voidRight(b.widgetFunctor)(l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(1))(f.button(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([c.onClick])([f.text(k.widgetLiftWidget)("Add item")]))))(function (gb) {
                return t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(ya.traverse(ya.traversableArray)(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Za)(vb))(function (ab) {
                  ab = F.filter(Ta)(ab);
                  var Cb = F.length(ab) + gb | 0,
                      Db = L.mapFlipped(L.functorArray)(eb(1)(gb))(function (Eb) {
                    return za;
                  });
                  return l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(da.Tuple.create(Cb)(Y.append(Y.semigroupArray)(ab)(Db)));
                });
              });
            }());
          });
        };
      }(na)(U))(function (Fa) {
        return l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(J.second(J.strongFn)(function () {
          var Ka = L.map(L.functorArray)(cb);
          return function (Ya) {
            return F.catMaybes(Ka(Ya));
          };
        }())(Fa));
      }));
    };
  };

  d.menuSignal = Va;
  d.textInput = bb;

  d.dateInput = function (P) {
    var U = Da.unsafePerformEffect(function (za) {
      return function () {
        var Ca = ta.nowDateTime();
        Ca = S.fromMaybe(Ca)(r.hush(za));
        Ca = fa["try"](pa.dateTimeToStr(Ca))();
        return y.lmap(r.bifunctorEither)(aa.show(fa.showError))(Ca);
      };
    }(P));
    P = t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)));
    var ua = l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)));
    if (U instanceof r.Left) var na = "";else if (U instanceof r.Right) na = wa.toString(U.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 169, column 31 - line 171, column 34): " + [U.constructor.name]);
    return P(ua(na))(function (za) {
      var Ca = t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray))),
          Ea = l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)));
      if (U instanceof r.Left) var Za = U.value0;else if (U instanceof r.Right) Za = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 172, column 21 - line 174, column 18): " + [U.constructor.name]);
      return Ca(Ea(Za))(function (Fa) {
        return t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(f.div_(n.shiftMapCofree(w.monoidArray))([c._id("mjUI_dateInput")])(bb(wa.fromString(za))))(function (Ka) {
          return t.discard(t.discardUnit)(n.bindCofree(b.widgetAlternative(w.monoidArray)))(l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Da.unsafePerformEffect(lb("mjUI_dateInput")("INPUT")(za))))(function () {
            return t.discard(t.discardUnit)(n.bindCofree(b.widgetAlternative(w.monoidArray)))(e.display(function () {
              if (U instanceof r.Right) return w.mempty(b.widgetMonoid(w.monoidArray));
              if (U instanceof r.Left) return fb(aa.showString)(new S.Just(U.value0));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 178, column 13 - line 180, column 40): " + [U.constructor.name]);
            }()))(function () {
              if (Ka instanceof S.Just) return l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Da.unsafePerformEffect(L.map(va.functorEffect)(y.lmap(r.bifunctorEither)(aa.show(fa.showError)))(fa["try"](ea.parseDate(Ka.value0)))));
              if (Ka instanceof S.Nothing) return l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(new r.Left("no date input"));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 181, column 3 - line 184, column 43): " + [Ka.constructor.name]);
            });
          });
        });
      });
    });
  };

  d.natInput = function (P) {
    P = t.bind(S.bindMaybe)(L.mapFlipped(S.functorMaybe)(P)(function () {
      var U = aa.show(aa.showInt);
      return function (ua) {
        return U(N.natToInt(ua));
      };
    }()))(wa.fromString);
    return t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(bb(P))(function (U) {
      return l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(L.map(S.functorMaybe)(function () {
        var ua = H.readInt(10);
        return function (na) {
          return N.intToNat(C.round(ua(wa.toString(na))));
        };
      }())(U));
    });
  };

  d.urlInput = function (P) {
    if (P instanceof r.Left) var U = "";else if (P instanceof r.Right) U = wa.toString(ka.urlToNEString(P.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 217, column 15 - line 219, column 48): " + [P.constructor.name]);
    if (P instanceof r.Left) var ua = P.value0;else if (P instanceof r.Right) ua = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 213, column 15 - line 215, column 20): " + [P.constructor.name]);
    return t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(bb(wa.fromString(U)))(function (na) {
      var za = t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray))),
          Ca = l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)));
      if (na instanceof S.Nothing) na = new r.Left(ua);else if (na instanceof S.Just) na = ka.parsePublicURL(wa.toString(na.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 204, column 19 - line 206, column 46): " + [na.constructor.name]);
      return za(Ca(na))(function (Ea) {
        return t.discard(t.discardUnit)(n.bindCofree(b.widgetAlternative(w.monoidArray)))(e.display(function () {
          if (Ea instanceof r.Right) return w.mempty(b.widgetMonoid(w.monoidArray));
          if (Ea instanceof r.Left) return fb(aa.showString)(new S.Just(Ea.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 207, column 13 - line 209, column 40): " + [Ea.constructor.name]);
        }()))(function () {
          return l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Ea);
        });
      });
    });
  };

  d.emailInput = function (P) {
    if (P instanceof r.Left) var U = "";else if (P instanceof r.Right) U = O.toString(P.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 237, column 15 - line 239, column 33): " + [P.constructor.name]);
    if (P instanceof r.Left) var ua = P.value0;else if (P instanceof r.Right) ua = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 233, column 15 - line 235, column 20): " + [P.constructor.name]);
    return t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(bb(wa.fromString(U)))(function (na) {
      var za = t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray))),
          Ca = l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)));
      if (na instanceof S.Nothing) na = new r.Left(ua);else if (na instanceof S.Just) na = ma.validate(wa.toString(na.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 224, column 21 - line 226, column 43): " + [na.constructor.name]);
      return za(Ca(na))(function (Ea) {
        return t.discard(t.discardUnit)(n.bindCofree(b.widgetAlternative(w.monoidArray)))(e.display(function () {
          if (Ea instanceof r.Right) return w.mempty(b.widgetMonoid(w.monoidArray));
          if (Ea instanceof r.Left) return fb(aa.showString)(new S.Just(Ea.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 227, column 13 - line 229, column 40): " + [Ea.constructor.name]);
        }()))(function () {
          return l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Ea);
        });
      });
    });
  };

  d.checkBoxS = qb;
  d.showDescSig = db;

  d.mkDesc = function (P) {
    return function (U) {
      var ua = jb(P)(nb),
          na = m.alt(b.widgetAlt(w.monoidArray))(f.text(k.widgetLiftWidget)(ua))(f["code'"](b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([f.text(k.widgetLiftWidget)(" ")]));
      return U && !u["null"](ua) ? na : w.mempty(b.widgetMonoid(w.monoidArray));
    };
  };

  d.FreeTextPolicy = Ma;

  d.checkPolicy = function (P) {
    return function (U) {
      if (P instanceof Ma) {
        var ua = L.mapFlipped(r.functorEither);
        U = wa.fromString(u.trim(U));
        if (U instanceof S.Just) U = new r.Right(U.value0);else if (U instanceof S.Nothing) U = new r.Left("Empty string when NonEmptyString expected.");else throw Error("Failed pattern match at Metajelo.FormUtil (line 436, column 22 - line 438, column 63): " + [U.constructor.name]);
        return ua(U)(Q.FreeTextPolicy.create);
      }

      if (P instanceof Ra) return L.mapFlipped(r.functorEither)(ka.parsePublicURL(U))(Q.RefPolicy.create);
      throw Error("Failed pattern match at Metajelo.FormUtil (line 347, column 25 - line 349, column 52): " + [P.constructor.name]);
    };
  };

  d.polPolTypeIs = function (P) {
    if (P instanceof Q.FreeTextPolicy) return Ma.value;
    if (P instanceof Q.RefPolicy) return Ra.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 352, column 18 - line 354, column 29): " + [P.constructor.name]);
  };

  d.arrayView = ra;

  d.nonEmptyArrayView = function (P) {
    return function (U) {
      return t.bind(n.bindCofree(b.widgetAlternative(w.monoidArray)))(ra(P)(J.second(J.strongFn)(Pa(I.foldableMaybe)(S.functorMaybe)(w.monoidArray)(z.toArray))(U)))(function (ua) {
        return l.pure(n.applicativeCofree(b.widgetAlternative(w.monoidArray)))(J.second(J.strongFn)(z.fromArray)(ua));
      });
    };
  };

  d.errorDisplay = fb;

  d.runEffectInit = function (P) {
    return function (U) {
      return e.step(P)(t.bind(b.widgetBind)(ca.liftEffect(b.widgetMonadEff(w.monoidArray))(U))(function (ua) {
        return l.pure(b.widgetApplicative)(e.step(ua)(p.empty(b.widgetPlus(w.monoidArray))));
      }));
    };
  };

  d.evTargetElem = function (P) {
    return L.map(va.functorEffect)(Z.fromNode)(Aa.target(P));
  };

  d.isOptionMaybeBoolean = tb;
  d.isOptionIdentifierType = yb;
  d.isOptionInstitutionType = Sa;
  d.isOptionMaybeInstitutionContactType = Ab;
  d.isOptionMaybePolicyType = ub;
  d.isOptionRelationType = xb;
  d.isOptionResourceTypeGeneral = wb;
  d.boundedEnumPolPolType = ba;
  d.isOptionPolPolType = zb;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var d = a["Metajelo.View"],
      e = a["Concur.Core.LiftWidget"],
      k = a["Concur.Core.Types"],
      g = a["Concur.React.DOM"],
      b = a["Concur.React.Props"],
      f = a["Control.Alt"],
      c = a["Control.Bind"],
      m = a["Control.Category"],
      l = a["Data.Array"],
      q = a["Data.Array.NonEmpty"],
      t = a["Data.Array.NonEmpty.Internal"],
      n = a["Data.Foldable"],
      p = a["Data.Functor"],
      F = a["Data.HeytingAlgebra"],
      z = a["Data.Maybe"],
      y = a["Data.Monoid"],
      x = a["Data.Natural"],
      r = a["Data.Profunctor.Strong"],
      D = a["Data.Semigroup"],
      v = a["Data.Show"],
      I = a["Data.String.CodePoints"],
      L = a["Data.String.NonEmpty.Internal"],
      K = a["Data.String.Utils"],
      G = a["Data.Unfoldable"],
      E = a["Data.Unfoldable1"],
      T = a["Foreign.Object"],
      W = a["Metajelo.CSS.Common.ClassNames"],
      A = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      C = a["Metajelo.CSS.Web.ClassProps"],
      S = a["Metajelo.CSS.Web.Util"],
      w = a["Metajelo.Types"],
      N = a["Text.Email.Parser"],
      M = a["Text.URL.Validate"],
      J = function () {
    var H = p.map(p.functorArray)(I.singleton);
    return function (R) {
      return H(I.toCodePointArray(R));
    };
  }(),
      Y = function Y(H) {
    var R = g.text(H);
    return function (Q) {
      return R(L.toString(Q));
    };
  },
      aa = g["span'"](k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([g.text(e.widgetLiftWidget)(" ")]),
      u = function () {
    var H = n.intercalate(n.foldableArray)(y.monoidArray)([aa]),
        R = p.map(p.functorArray)(E.singleton(E.unfoldable1Array));
    return function (Q) {
      return H(R(Q));
    };
  }(),
      wa = function wa(H) {
    return g.div(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.institutionPolicy])(u([function (R) {
      var Q = function () {
        if (R instanceof z.Nothing) return {
          text: "May apply to product (unverified)",
          cls: A.appliesMaybe
        };
        if (R instanceof z.Just && R.value0) return {
          text: "Applies to product",
          cls: A.appliesYes
        };
        if (R instanceof z.Just && !R.value0) return {
          text: "Does not apply to product",
          cls: A.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 259, column 10 - line 262, column 75): " + [R.constructor.name]);
      }();

      return g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([S.cList([W.applies, Q.cls])])([function (ea) {
        return g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.appliesInfo])([g.text(e.widgetLiftWidget)(ea)]);
      }(Q.text)]);
    }(H.appliesToProduct), n.foldMap(n.foldableMaybe)(k.widgetMonoid(y.monoidArray))(function (R) {
      return g["span'"](k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.policyType])([g.text(e.widgetLiftWidget)(v.show(w.showPolicyType)(R))]), g.text(e.widgetLiftWidget)(" Policy:")]);
    })(H.policyType), function (R) {
      var Q = g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.policy]),
          ea = E.singleton(E.unfoldable1Array);
      if (R instanceof w.FreeTextPolicy) R = Y(e.widgetLiftWidget)(R.value0);else if (R instanceof w.RefPolicy) R = M.urlToString(R.value0), R = g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([g.text(e.widgetLiftWidget)(R)]);else throw Error("Failed pattern match at Metajelo.View (line 252, column 5 - line 255, column 40): " + [R.constructor.name]);
      return Q(ea(R));
    }(H.policy)]));
  },
      sa = function sa(H) {
    return g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.institutionName])([Y(e.widgetLiftWidget)(H.institutionName)]);
  },
      ya = function ya(H) {
    return function (R) {
      return n.foldMap(n.foldableMaybe)(y.monoidArray)(m.identity(m.categoryFn))(l.init(R));
    };
  },
      da = function da(H) {
    return function (R) {
      return function (Q) {
        return function (ea) {
          return function (pa) {
            var Aa = T.fromFoldableWith(H)(D.append(ea)),
                O = p.map(R)(r.fanout(m.categoryFn)(r.strongFn)(pa)(E.singleton(Q)));
            return function (ma) {
              return Aa(O(ma));
            };
          };
        };
      };
    };
  },
      la = function la(H) {
    var R = N.toString(H.emailAddress),
        Q = g.text(e.widgetLiftWidget);
    if (H.contactType instanceof z.Nothing) H = ".";else if (H.contactType instanceof z.Just) H = " (" + (v.show(w.showInstitutionContactType)(H.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 186, column 24 - line 188, column 41): " + [H.contactType.constructor.name]);
    Q = Q(H);
    return g.span_(k.widgetShiftMap)([C.institutionContact])(f.alt(k.widgetAlt(y.monoidArray))(f.alt(k.widgetAlt(y.monoidArray))(g["span'"](k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([g.text(e.widgetLiftWidget)("Institution Contact: ")]))(g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.contactEmail, b.href("mailto:" + R)])([g.text(e.widgetLiftWidget)(R)])))(g.span_(k.widgetShiftMap)([C.contactType])(Q)));
  },
      oa = function oa(H) {
    return g["cite'"](k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([Y(e.widgetLiftWidget)(H)]);
  },
      va = function va(H) {
    if (H.idType instanceof w.ARK) return g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(L.toString(H.id))])([oa(H.id)]);

    if (H.idType instanceof w.ArXiv) {
      var R = "https://arxiv.org/abs/" + L.toString(H.id);
      return g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([oa(H.id)]);
    }

    if (H.idType instanceof w.Bibcode) return R = "https://ui.adsabs.harvard.edu/abs/" + (L.toString(H.id) + "/abstract"), g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([oa(H.id)]);
    if (H.idType instanceof w.DOI) return R = "https://doi.org/" + L.toString(H.id), g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([oa(H.id)]);
    if (H.idType instanceof w.EAN13) return oa(H.id);
    if (H.idType instanceof w.EISSN) return R = "https://www.worldcat.org/ISSN/" + L.toString(H.id), g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([oa(H.id)]);
    if (H.idType instanceof w.Handle) return R = "http://hdl.handle.net/" + L.toString(H.id), g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([oa(H.id)]);
    if (H.idType instanceof w.IGSN) return R = "http://igsn.org/" + L.toString(H.id), g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([oa(H.id)]);
    if (H.idType instanceof w.ISBN) return oa(H.id);
    if (H.idType instanceof w.ISSN) return R = "https://www.worldcat.org/ISSN/" + L.toString(H.id), g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([oa(H.id)]);
    if (H.idType instanceof w.ISTC) return oa(H.id);
    if (H.idType instanceof w.LISSN) return R = "https://www.worldcat.org/ISSN/" + L.toString(H.id), g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([oa(H.id)]);
    if (H.idType instanceof w.LSID) return R = "http://www.lsid.info/resolver/?lsid=" + L.toString(H.id), g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([oa(H.id)]);
    if (H.idType instanceof w.PMID) return R = "https://www.ncbi.nlm.nih.gov/pubmed/" + L.toString(H.id), g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(R)])([oa(H.id)]);
    if (H.idType instanceof w.PURL) return g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(L.toString(H.id))])([oa(H.id)]);
    if (H.idType instanceof w.UPC) return oa(H.id);
    if (H.idType instanceof w.URL) return g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([b.href(L.toString(H.id))])([oa(H.id)]);
    if (H.idType instanceof w.URN) return oa(H.id);
    throw Error("Failed pattern match at Metajelo.View (line 208, column 1 - line 208, column 47): " + [H.constructor.name]);
  },
      ca = function ca(H) {
    return g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.identifier])([g.span_(k.widgetShiftMap)([C.idType])(g.text(e.widgetLiftWidget)(v.show(w.showIdentifierType)(H.idType))), g.span_(k.widgetShiftMap)([C.idUrl])(va(H))]);
  },
      fa = function fa(H) {
    return g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.relatedId])([g.span_(k.widgetShiftMap)([C.relType])(g.text(e.widgetLiftWidget)(v.show(w.showRelationType)(H.relType))), aa, ca({
      id: H.id,
      idType: H.idType
    })]);
  },
      ta = function ta(H) {
    return function (R) {
      return function (Q) {
        if (R) return H;

        if (n.any(n.foldableArray)(F.heytingAlgebraBoolean)(function (pa) {
          return K.endsWith(pa)(H);
        })([";", ".", ","])) {
          var ea = J(H);
          return K.fromCharArray(ya(y.monoidString)(ea)) + Q;
        }

        return H + Q;
      };
    };
  },
      Da = function Da(H) {
    var R = sa(H),
        Q = g["span'"](k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([g.text(e.widgetLiftWidget)("("), g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.institutionId])([ca(H.institutionID)]), g.text(e.widgetLiftWidget)("; "), g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.institutionType])([g.text(e.widgetLiftWidget)(v.show(w.showInstitutionType)(H.institutionType))]), g.text(e.widgetLiftWidget)(ta(")")(z.isNothing(H.superOrganizationName))(","))]);
    if (H.superOrganizationName instanceof z.Nothing) var ea = y.mempty(k.widgetMonoid(y.monoidArray));else if (H.superOrganizationName instanceof z.Just) ea = g["span'"](k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([g.text(e.widgetLiftWidget)("a member of "), g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.superOrg])([g.text(e.widgetLiftWidget)(ta(L.toString(H.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 148, column 7 - line 154, column 10): " + [H.superOrganizationName.constructor.name]);
    return u([R, Q, ea, la(H.institutionContact), g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.sustainability])([g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.missionStatement, b.href(M.urlToString(H.institutionSustainability.missionStatementURL))])([g.text(e.widgetLiftWidget)("Mission Statement")]), g.text(e.widgetLiftWidget)("; "), g.a(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.fundingStatement, b.href(M.urlToString(H.institutionSustainability.fundingStatementURL))])([g.text(e.widgetLiftWidget)("Funding Statement")]), g.text(e.widgetLiftWidget)(".")]), g.ul(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.institutionPolicies])(p.map(p.functorArray)(function (pa) {
      return g["li'"](k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([wa(pa)]);
    })(q.toArray(H.institutionPolicies))), function (pa) {
      if (pa) pa = "Versioned";else {
        if (pa) throw Error("Failed pattern match at Metajelo.View (line 175, column 14 - line 177, column 31): " + [pa.constructor.name]);
        pa = "Unversioned";
      }
      return g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.versioning])([g.text(e.widgetLiftWidget)(pa)]);
    }(H.versioning)]);
  },
      V = function V(H) {
    if (H.resourceID instanceof z.Just) var R = g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.resourceId])([ca(H.resourceID.value0), g.text(e.widgetLiftWidget)(".")]);else if (H.resourceID instanceof z.Nothing) R = y.mempty(k.widgetMonoid(y.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 126, column 17 - line 128, column 24): " + [H.resourceID.constructor.name]);
    var Q = [g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.basicMetadata, C.creator])([Y(e.widgetLiftWidget)(H.basicMetadata.creator)]), g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.basicMetadata, C.pubyear])([g.text(e.widgetLiftWidget)(v.show(v.showInt)(x.natToInt(H.basicMetadata.publicationYear)))]), g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.basicMetadata, C.title])([g.text(e.widgetLiftWidget)(ta(L.toString(H.basicMetadata.title))(z.isNothing(H.resourceID))(","))])];
    R = D.append(D.semigroupArray)(Q)([g["span'"](k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([sa(H.location), g.text(e.widgetLiftWidget)(".")]), R]);
    return g.div(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.product])(u(D.append(D.semigroupArray)([g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.productCitation])([g["cite'"](k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)(u(R))])])(Da(H.location))));
  };

  d.spacify = u;

  d.mkRecordWidget = function (H) {
    var R = function () {
      var pa = p.map(t.functorNonEmptyArray)(function (Aa) {
        return g.li(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.relatedId])([Aa]);
      })(p.map(t.functorNonEmptyArray)(fa)(H.relatedIdentifiers));
      return g.ul(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.relatedIdList])(q.toArray(pa));
    }(),
        Q = da(t.foldableNonEmptyArray)(t.functorNonEmptyArray)(t.unfoldable1NonEmptyArray)(t.semigroupNonEmptyArray)(function (pa) {
      return v.show(w.showResourceTypeGeneral)(pa.resourceType.generalType) + (": " + pa.resourceType.description);
    })(H.supplementaryProducts),
        ea = function ea(pa) {
      pa = c.join(c.bindArray)(G.fromMaybe(G.unfoldableArray)(p.map(z.functorMaybe)(q.toArray)(T.lookup(pa)(Q))));
      var Aa = g.span_(k.widgetShiftMap)([C.resourceType])(n.fold(n.foldableMaybe)(k.widgetMonoid(y.monoidArray))(p.mapFlipped(z.functorMaybe)(l.head(pa))(function (O) {
        return f.alt(k.widgetAlt(y.monoidArray))(f.alt(k.widgetAlt(y.monoidArray))(g.span_(k.widgetShiftMap)([C.resourceTypeGen])(g.text(e.widgetLiftWidget)(v.show(w.showResourceTypeGeneral)(O.resourceType.generalType))))(g.span_(k.widgetShiftMap)([C.resourceTypeDescr])(g.text(e.widgetLiftWidget)(O.resourceType.description))))(g["br'"](e.widgetLiftWidget));
      })));
      return g["div'"](k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)(l.cons(Aa)(p.map(p.functorArray)(V)(pa)));
    };

    v.show(w.showIdentifierType)(H.identifier.idType);
    return g.div(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.record])([g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.productsHeader])([g.span_(k.widgetShiftMap)([C.recordId])(ca(H.identifier))]), g.ul(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.productList])(p.map(p.functorArray)(function (pa) {
      return g.li_(k.widgetShiftMap)([C.productGroup])(ea(pa));
    })(T.keys(Q))), g.span(k.widgetMultiAlternative(y.monoidArray))(k.widgetShiftMap)([C.relatedIdsHeader])([]), R]);
  };

  d.mkSupplementaryProductWidget = V;
  d.locElems = Da;
})(PS);

(function (a) {
  a.pickFn = function (d, e) {
    for (var k = {}, g = 0; g < d.length; g++) {
      "undefined" !== typeof e[d[g]] && (k[d[g]] = e[d[g]]);
    }

    return k;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a.unsafeGet = function (d) {
    return function (e) {
      return e[d];
    };
  };

  a.unsafeSet = function (d) {
    return function (e) {
      return function (k) {
        var g = {},
            b;

        for (b in k) {
          ({}).hasOwnProperty.call(k, b) && (g[b] = k[b]);
        }

        g[d] = e;
        return g;
      };
    };
  };

  a.unsafeDelete = function (d) {
    return function (e) {
      var k = {},
          g;

      for (g in e) {
        g !== d && {}.hasOwnProperty.call(e, g) && (k[g] = e[g]);
      }

      return k;
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
      e = a["Data.Symbol"],
      k = a["Record.Unsafe"];

  d.get = function (g) {
    return function (b) {
      return function (f) {
        return function (c) {
          return k.unsafeGet(e.reflectSymbol(g)(f))(c);
        };
      };
    };
  };

  d.insert = function (g) {
    return function (b) {
      return function (f) {
        return function (c) {
          return function (m) {
            return function (l) {
              return k.unsafeSet(e.reflectSymbol(g)(c))(m)(l);
            };
          };
        };
      };
    };
  };

  d["delete"] = function (g) {
    return function (b) {
      return function (f) {
        return function (c) {
          return function (m) {
            return k.unsafeDelete(e.reflectSymbol(g)(c))(m);
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
    function e() {}

    e.value = new e();
    return e;
  }();

  a.RLProxy = d;
})(PS);

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var d = a["Record.Extra"],
      e = a["Data.List.Types"],
      k = a["Data.Monoid"],
      g = a["Data.Symbol"],
      b = a["Type.Data.RowList"],
      f = function f(c) {
    this.keysImpl = c;
  };

  a = new f(function (c) {
    return k.mempty(e.monoidList);
  });

  d.keys = function (c) {
    return function (m) {
      return function (l) {
        return (0, m.keysImpl)(b.RLProxy.value);
      };
    };
  };

  d.nilKeys = a;

  d.consKeys = function (c) {
    return function (m) {
      return new f(function (l) {
        l = (0, m.keysImpl)(b.RLProxy.value);
        var q = g.reflectSymbol(c)(g.SProxy.value);
        return new e.Cons(q, l);
      });
    };
  };
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var d = function () {
    function e() {}

    e.value = new e();
    return e;
  }();

  a.RProxy = d;
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var d = a.Option,
      e = a.Option,
      k = a["Control.Monad.State.Class"],
      g = a["Control.Monad.State.Trans"],
      b = a["Data.Array"],
      f = a["Data.Function.Uncurried"],
      c = a["Data.Identity"],
      m = a["Data.List.Types"],
      l = a["Data.Maybe"],
      q = a["Data.Symbol"],
      t = a["Foreign.Object"],
      n = a.Record,
      p = a["Record.Extra"],
      F = a["Type.Data.Row"],
      z = function () {
    function C() {}

    C.value = new C();
    return C;
  }(),
      y = function y(C) {
    this.getAllOption = C;
  },
      x = function x(C) {
    this["getAll'"] = C;
  },
      r = function r(C) {
    this.fromRecordOption = C;
  },
      D = function D(C) {
    this["fromRecord'"] = C;
  },
      v = function v(C) {
    return function (S) {
      return function (w) {
        w = b.fromFoldable(m.foldableList)(p.keys()(w)(F.RProxy.value));
        return f.runFn2(e.pickFn)(w);
      };
    };
  };

  a = new y(function (C) {
    return function (S) {
      return new l.Just({});
    };
  });

  var I = t.empty,
      L = new r(function (C) {
    return function (S) {
      return I;
    };
  }),
      K = function K(C) {
    return function (S) {
      return function (w) {
        return function (N) {
          var M = q.reflectSymbol(C)(q.SProxy.value),
              J = t.alter(function (Y) {
            return S(Y);
          })(M)(N);
          N = S(t.lookup(M)(N));
          return {
            option: J,
            value: N
          };
        };
      };
    };
  },
      G = function G(C) {
    return function (S) {
      return function (w) {
        return function (N) {
          return function (M) {
            return K(C)(function (J) {
              return l.Nothing.value;
            })(N)(M).option;
          };
        };
      };
    };
  },
      E = function E(C) {
    return function (S) {
      return function (w) {
        return function (N) {
          return K(C)(function (M) {
            return M;
          })(w)(N).value;
        };
      };
    };
  },
      T = function T(C) {
    return function (S) {
      return function (w) {
        return function (N) {
          return function (M) {
            return K(C)(function (J) {
              return new l.Just(N);
            })(w)(M).option;
          };
        };
      };
    };
  },
      W = function W(C) {
    return function (S) {
      return function (w) {
        return function (N) {
          return function (M) {
            if (N instanceof l.Just) return T(C)()(w)(N.value0)(M);
            if (N instanceof l.Nothing) return M;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [N.constructor.name]);
          };
        };
      };
    };
  },
      A = function A(C) {
    return function (S) {
      return function (w) {
        return function (N) {
          return function (M) {
            return function (J) {
              return K(C)(function (Y) {
                return new l.Just(M);
              })(N)(J).option;
            };
          };
        };
      };
    };
  };

  d.fromRecord = function (C) {
    return C["fromRecord'"];
  };

  d.empty = I;
  d.get = E;

  d.getAll = function (C) {
    return C["getAll'"];
  };

  d.getSubset = function (C) {
    return function (S) {
      return function (w) {
        return function (N) {
          return function (M) {
            return (0, N["getAll'"])(v()()(w)(M));
          };
        };
      };
    };
  };

  d.getWithDefault = function (C) {
    return function (S) {
      return function (w) {
        return function (N) {
          return function (M) {
            M = E(C)()(N)(M);
            if (M instanceof l.Just) return M.value0;
            if (M instanceof l.Nothing) return w;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [M.constructor.name]);
          };
        };
      };
    };
  };

  d.maySetOptState = function (C) {
    return function (S) {
      return function (w) {
        return function (N) {
          return function (M) {
            return k.put(g.monadStateStateT(c.monadIdentity))(W(C)()(w)(N)(M));
          };
        };
      };
    };
  };

  d.fromRecordAny = function (C) {
    return function (S) {
      return new D((0, C.fromRecordOption)(z.value));
    };
  };

  d.fromRecordOptionNil = L;

  d.fromRecordOptionCons = function (C) {
    return function (S) {
      return function (w) {
        return function (N) {
          return function (M) {
            return function (J) {
              return new r(function (Y) {
                return function (aa) {
                  var u = n["delete"](C)()()(q.SProxy.value)(aa);
                  u = (0, S.fromRecordOption)(z.value)(u);
                  aa = n.get(C)()(q.SProxy.value)(aa);
                  return A(C)()()(q.SProxy.value)(aa)(u);
                };
              });
            };
          };
        };
      };
    };
  };

  d.getAllAny = function (C) {
    return function (S) {
      return new x((0, S.getAllOption)(z.value));
    };
  };

  d.getAllOptionNil = a;

  d.getAllOptionCons = function (C) {
    return function (S) {
      return function (w) {
        return function (N) {
          return function (M) {
            return function (J) {
              return new y(function (Y) {
                return function (aa) {
                  var u = G(C)()()(q.SProxy.value)(aa);
                  u = (0, J.getAllOption)(z.value)(u);
                  aa = E(C)()(q.SProxy.value)(aa);

                  if (u instanceof l.Just) {
                    if (aa instanceof l.Just) return new l.Just(n.insert(C)()()(q.SProxy.value)(aa.value0)(u.value0));
                    if (aa instanceof l.Nothing) return l.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [aa.constructor.name]);
                  }

                  if (u instanceof l.Nothing) return l.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [u.constructor.name]);
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
    return function (e) {
      return e.item(d);
    };
  };
})(PS["Web.File.FileList"] = PS["Web.File.FileList"] || {});

(function (a) {
  a["Web.File.FileList"] = a["Web.File.FileList"] || {};
  var d = a["Web.File.FileList"],
      e = a["Data.Nullable"];

  a["Web.File.FileList"].item = function (k) {
    var g = d._item(k);

    return function (b) {
      return e.toMaybe(g(b));
    };
  };
})(PS);

(function (a) {
  a.eventListener = function (d) {
    return function () {
      return function (e) {
        return d(e)();
      };
    };
  };

  a.addEventListener = function (d) {
    return function (e) {
      return function (k) {
        return function (g) {
          return function () {
            return g.addEventListener(d, e, k);
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
    return function (e) {
      return function () {
        e.readAsText(d);
      };
    };
  };
})(PS["Web.File.FileReader"] = PS["Web.File.FileReader"] || {});

(function (a) {
  a["Web.File.FileReader"] = a["Web.File.FileReader"] || {};
  var d = a["Web.File.FileReader"],
      e = a["Web.File.FileReader"];
  d.toEventTarget = a["Unsafe.Coerce"].unsafeCoerce;
  d.fileReader = e.fileReader;
  d.result = e.result;
  d.readAsText = e.readAsText;
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
      e = a["Control.Monad.Except"],
      k = a["Data.Either"],
      g = a["Data.List.Types"],
      b = a["Data.Monoid"],
      f = a["Data.Show"],
      c = a["Effect.Aff"],
      m = a["Effect.Exception"],
      l = a.Foreign,
      q = a["Web.Event.EventTarget"],
      t = a["Web.File.FileReader"],
      n = a["Web.HTML.Event.EventTypes"];

  a = function (p) {
    return function (F) {
      return function (z) {
        return c.makeAff(function (y) {
          var x = function x(r) {
            return y(k.Right.create(r));
          };

          return function () {
            var r = t.fileReader(),
                D = t.toEventTarget(r),
                v = q.eventListener(function (L) {
              return y(k.Left.create(m.error("error")));
            })(),
                I = q.eventListener(function (L) {
              return function () {
                var K = t.result(r)();
                return k.either(function (G) {
                  return y(k.Left.create(m.error(f.show(g.showNonEmptyList(l.showForeignError))(G))));
                })(x)(e.runExcept(p(K)))();
              };
            })();
            q.addEventListener(n.error)(v)(!1)(D)();
            q.addEventListener(n.load)(I)(!1)(D)();
            F(z)(r)();
            return b.mempty(c.monoidCanceler);
          };
        });
      };
    };
  }(l.readString)(t.readAsText);

  d.readAsText = a;
})(PS);

(function (a) {
  a._read = function (d, e, k) {
    var g = Object.prototype.toString.call(k);
    return 0 === g.indexOf("[object HTML") && g.indexOf("Element]") === g.length - 8 ? e(k) : d;
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
      e = a["Web.HTML.HTMLElement"],
      k = a["Data.Maybe"];

  d.fromElement = function (g) {
    return e._read(k.Nothing.value, k.Just.create, g);
  };

  d.click = e.click;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var d = a["Metajelo.UI"],
      e = a.Affjax,
      k = a["Affjax.ResponseFormat"],
      g = a["Concur.Core.FRP"],
      b = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Props"],
      c = a["Concur.Core.Types"],
      m = a["Concur.React.DOM"],
      l = a["Concur.React.Props"],
      q = a["Concur.React.Run"],
      t = a["Control.Applicative"],
      n = a["Control.Bind"],
      p = a["Control.Cofree"],
      F = a["Control.Monad.Except.Trans"],
      z = a["Control.Monad.Maybe.Trans"],
      y = a["Control.Monad.State"],
      x = a["Control.Monad.State.Class"],
      r = a["Control.Monad.State.Trans"],
      D = a["Control.Plus"],
      v = a["Data.Array"],
      I = a["Data.Array.NonEmpty"],
      L = a["Data.Array.NonEmpty.Internal"],
      K = a["Data.Bifunctor"],
      G = a["Data.Either"],
      E = a["Data.Enum"],
      T = a["Data.Foldable"],
      W = a["Data.Functor"],
      A = a["Data.Identity"],
      C = a["Data.Maybe"],
      S = a["Data.Maybe.First"],
      w = a["Data.Monoid"],
      N = a["Data.Semigroup"],
      M = a["Data.Show"],
      J = a["Data.String.CodePoints"],
      Y = a["Data.String.Common"],
      aa = a["Data.String.NonEmpty.Internal"],
      u = a["Data.Symbol"],
      wa = a["Data.Traversable"],
      sa = a["Data.Tuple"],
      ya = a["Data.UUID"],
      da = a.Effect,
      la = a["Effect.Aff"],
      oa = a["Effect.Aff.Class"],
      va = a["Effect.Class"],
      ca = a["Effect.Class.Console"],
      fa = a["Effect.Exception"],
      ta = a["Effect.Now"],
      Da = a["Effect.Unsafe"],
      V = a.Global,
      H = a["Metajelo.CSS.UI.ClassProps"],
      R = a["Metajelo.CSS.Web.ClassProps"],
      Q = a["Metajelo.FormUtil"],
      ea = a["Metajelo.Types"],
      pa = a["Metajelo.View"],
      Aa = a["Metajelo.XPaths"],
      O = a["Metajelo.XPaths.Read"],
      ma = a["Metajelo.XPaths.Write"],
      ka = a["Nonbili.DOM"],
      B = a.Option,
      Z = a["Record.Extra"],
      ja = a["Text.URL.Validate"],
      qa = a["Web.DOM.Document"],
      Ba = a["Web.DOM.Element"],
      xa = a["Web.File.File"],
      Ha = a["Web.File.FileList"],
      Qa = a["Web.File.FileReader.Aff"],
      Ga = a["Web.HTML"],
      Ma = a["Web.HTML.HTMLDocument"],
      Ra = a["Web.HTML.HTMLElement"],
      Ia = a["Web.HTML.HTMLInputElement"],
      La = a["Web.HTML.Window"],
      Na = function Na(X) {
    return function (ba) {
      return function (ha) {
        return function (ia) {
          return function (ra) {
            return W.mapFlipped(C.functorMaybe)(B.get(X)(ba)(ha)(ia))(function (P) {
              return y.execState(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                return "descs_on";
              }))()(u.SProxy.value)(new C.Just(ra))))(P);
            });
          };
        };
      };
    };
  },
      hb = function hb(X) {
    return m.div_(p.shiftMapCofree(w.monoidArray))([H.tooltip])(X);
  },
      cb = m.div_(c.widgetShiftMap)([H.tooltip])(D.empty(c.widgetPlus(w.monoidArray))),
      ib = function ib(X) {
    return function () {
      var ba = Ga.window();
      ba = La.document(ba)();
      ba = Ma.toDocument(ba);
      ba = qa.createElement("a")(ba)();
      Ba.setAttribute("download")("metajelo.xml")(ba)();
      Ba.setAttribute("href")("data:text/plain;charset=utf-8," + X)(ba)();
      ba = Ra.fromElement(ba);
      if (ba instanceof C.Just) ba = Ra.click(ba.value0);else if (ba instanceof C.Nothing) ba = ca.log(va.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + X);else throw Error("Failed pattern match at Metajelo.UI (line 131, column 26 - line 135, column 18): " + [ba.constructor.name]);
      return ba;
    };
  },
      Wa = function Wa(X) {
    return function (ba) {
      return B.getWithDefault(X)()(B.empty);
    };
  },
      jb = function jb(X) {
    var ba = aa.fromString("urn:uuid:"),
        ha = B.get(new u.IsSymbol(function () {
      return "id";
    }))()(u.SProxy.value)(X);
    return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(function () {
      if (ha instanceof C.Just) return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(new C.Just(ha.value0));
      if (ha instanceof C.Nothing) return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(Q.runEffectInit(ya.emptyUUID)(ya.genUUID))(function (ia) {
        return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(n.bind(C.bindMaybe)(ba)(function (ra) {
          return n.bind(C.bindMaybe)(aa.fromString(ya.toString(ia)))(function (P) {
            return t.pure(C.applicativeMaybe)(N.append(aa.semigroupNonEmptyString)(ra)(P));
          });
        }));
      });
      throw Error("Failed pattern match at Metajelo.UI (line 625, column 15 - line 632, column 30): " + [ha.constructor.name]);
    }())(function (ia) {
      return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
        return "id";
      }))()(u.SProxy.value)(ia)))(function () {
        return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
          return "idType";
        }))()(u.SProxy.value)(new C.Just(ea.URN.value)));
      }))(X));
    });
  },
      kb = function kb(X) {
    return m.div_(p.shiftMapCofree(w.monoidArray))([H.format])(hb(Q.textInput(X)));
  },
      db = function db(X) {
    return function (ba) {
      return m.div_(p.shiftMapCofree(w.monoidArray))([H.formatList])(n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("formatEle")(X)))(function () {
        return Q.arrayView(kb)(ba);
      }));
    };
  },
      lb = function lb(X) {
    return function () {
      return {
        lastModified: ta.nowDateTime(),
        date: X.date,
        identifier: X.identifier,
        relatedIdentifiers: X.relatedIdentifiers,
        supplementaryProducts: X.supplementaryProducts
      };
    };
  },
      eb = function eb(X) {
    var ba = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "fundingStatementURL";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "missionStatementURL";
    }))(B.fromRecordOptionNil)()()()())()()()())())(X),
        ha = new G.Right(X.missionStatementURL),
        ia = new G.Right(X.fundingStatementURL);
    return y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(u.SProxy.value)(new C.Just(ha))))(function () {
      return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(u.SProxy.value)(new C.Just(ia))))(function () {
        return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
          return "descs_on";
        }))()(u.SProxy.value)(new C.Just(!0)));
      });
    }))(ba);
  },
      mb = function mb(X) {
    var ba = new G.Right(X.url);
    X = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "relationType";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "url";
    }))(B.fromRecordOptionNil)()()()())()()()())())(X);
    return y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
      return "url_Ei";
    }))()(u.SProxy.value)(new C.Just(ba))))(function () {
      return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
        return "descs_on";
      }))()(u.SProxy.value)(new C.Just(!0)));
    }))(X);
  },
      nb = function nb(X) {
    if (X.policy instanceof ea.FreeTextPolicy) var ba = new C.Just(X.policy.value0);else if (X.policy instanceof ea.RefPolicy) ba = aa.fromString(ja.urlToString(X.policy.value0));else throw Error("Failed pattern match at Metajelo.UI (line 355, column 20 - line 357, column 54): " + [X.policy.constructor.name]);
    var ha = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "appliesToProduct";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "policy";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "policyType";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())())(X);
    return y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
      return "policy_str";
    }))()(u.SProxy.value)(ba)))(function () {
      return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
        return "polPolType";
      }))()(u.SProxy.value)(C.Just.create(Q.polPolTypeIs(X.policy)))))(function () {
        return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
          return "policy_ei";
        }))()(u.SProxy.value)(C.Just.create(new G.Right(X.policy)))))(function () {
          return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "descs_on";
          }))()(u.SProxy.value)(new C.Just(!0)));
        });
      });
    }))(ha);
  },
      $a = function $a(X) {
    return y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
      return "email_Ei";
    }))()(u.SProxy.value)(C.Just.create(new G.Right(X.emailAddress)))))(function () {
      return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
        return "descs_on";
      }))()(u.SProxy.value)(new C.Just(!0)));
    }))(B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "contactType";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "emailAddress";
    }))(B.fromRecordOptionNil)()()()())()()()())())(X));
  },
      wb = function wb(X) {
    var ba = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionContact";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionID";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionName";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionPolicies";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionSustainability";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionType";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "superOrganizationName";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "versioning";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(X),
        ha = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "id";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "idType";
    }))(B.fromRecordOptionNil)()()()())()()()())())(X.institutionID),
        ia = $a(X.institutionContact),
        ra = eb(X.institutionSustainability),
        P = W.map(L.functorNonEmptyArray)(nb)(X.institutionPolicies),
        U = I.length(X.institutionPolicies);
    return y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
      return "institutionID_opt";
    }))()(u.SProxy.value)(new C.Just(ha))))(function () {
      return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
        return "_numPolicies";
      }))()(u.SProxy.value)(new C.Just(U))))(function () {
        return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
          return "iSustain_opt";
        }))()(u.SProxy.value)(new C.Just(ra))))(function () {
          return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "institutionContact_opt";
          }))()(u.SProxy.value)(new C.Just(ia))))(function () {
            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
              return "institutionPolicies_opt";
            }))()(u.SProxy.value)(new C.Just(P))))(function () {
              return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                return "descs_on";
              }))()(u.SProxy.value)(new C.Just(!0)));
            });
          });
        });
      });
    }))(ba);
  },
      xb = function xb(X) {
    var ba = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "basicMetadata";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "format";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "location";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "resourceID";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "resourceType";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(X),
        ha = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "description";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "generalType";
    }))(B.fromRecordOptionNil)()()()())()()()())())(X.resourceType),
        ia = W.map(C.functorMaybe)(B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "id";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "idType";
    }))(B.fromRecordOptionNil)()()()())()()()())()))(X.resourceID),
        ra = W.map(C.functorMaybe)(mb)(X.resourceMetadataSource),
        P = wb(X.location),
        U = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "creator";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "publicationYear";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "title";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())())(X.basicMetadata),
        ua = v.length(X.format);
    return y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(u.SProxy.value)(new C.Just(U))))(function () {
      return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
        return "resourceID_opt";
      }))()(u.SProxy.value)(ia)))(function () {
        return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
          return "resourceType_opt";
        }))()(u.SProxy.value)(new C.Just(ha))))(function () {
          return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "_numFormats";
          }))()(u.SProxy.value)(new C.Just(ua))))(function () {
            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(u.SProxy.value)(ra)))(function () {
              return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(u.SProxy.value)(new C.Just(P))))(function () {
                return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                  return "descs_on";
                }))()(u.SProxy.value)(new C.Just(!0)));
              });
            });
          });
        });
      });
    }))(ba);
  },
      Sa = function Sa(X) {
    var ba = W.map(L.functorNonEmptyArray)(xb)(X.supplementaryProducts),
        ha = W.map(L.functorNonEmptyArray)(B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "id";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "idType";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "relType";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())()))(X.relatedIdentifiers),
        ia = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "date";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "identifier";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "lastModified";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "supplementaryProducts";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(X),
        ra = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "id";
    }))(B.fromRecordOptionCons(new u.IsSymbol(function () {
      return "idType";
    }))(B.fromRecordOptionNil)()()()())()()()())())(X.identifier),
        P = I.length(X.supplementaryProducts),
        U = I.length(X.relatedIdentifiers);
    return y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
      return "identifier_opt";
    }))()(u.SProxy.value)(new C.Just(ra))))(function () {
      return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
        return "date_Ei";
      }))()(u.SProxy.value)(C.Just.create(new G.Right(X.date)))))(function () {
        return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
          return "_numRelIds";
        }))()(u.SProxy.value)(new C.Just(U))))(function () {
          return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "relId_opts";
          }))()(u.SProxy.value)(new C.Just(ha))))(function () {
            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
              return "_numSupProds";
            }))()(u.SProxy.value)(new C.Just(P))))(function () {
              return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                return "supProd_opts";
              }))()(u.SProxy.value)(new C.Just(ba))))(function () {
                return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                  return "descs_on";
                }))()(u.SProxy.value)(new C.Just(!0)));
              });
            });
          });
        });
      });
    }))(ia);
  },
      yb = function () {
    var X = K.lmap(G.bifunctorEither)(function (ha) {
      return fa.error("Error reading XML - please make sure it is well-formed.");
    }),
        ba = n.bind(c.widgetBind)(m.input(b.widgetLiftWidget)([l._type("file"), W.map(f.functorProps)(Q.evTargetElem)(l.onChange)]))(function (ha) {
      return n.bind(c.widgetBind)(va.liftEffect(c.widgetMonadEff(w.monoidArray))(z.runMaybeT(n.bind(z.bindMaybeT(da.monadEffect))(ha)(function (ia) {
        return n.bind(z.bindMaybeT(da.monadEffect))(z.MaybeT(t.pure(da.applicativeEffect)(Ia.fromElement(ia))))(function (ra) {
          return n.bind(z.bindMaybeT(da.monadEffect))(z.MaybeT(Ia.files(ra)))(function (P) {
            return n.bind(z.bindMaybeT(da.monadEffect))(z.MaybeT(t.pure(da.applicativeEffect)(Ha.item(0)(P))))(function (U) {
              return t.pure(z.applicativeMaybeT(da.monadEffect))(xa.toBlob(U));
            });
          });
        });
      }))))(function (ia) {
        if (ia instanceof C.Nothing) return ba;
        if (ia instanceof C.Just) return n.bind(c.widgetBind)(oa.liftAff(c.widgetMonadAff(w.monoidArray))(Qa.readAsText(ia.value0)))(function (ra) {
          return n.bind(c.widgetBind)(va.liftEffect(c.widgetMonadEff(w.monoidArray))(F.runExceptT(n.bind(F.bindExceptT(da.monadEffect))(F.ExceptT(W.map(da.functorEffect)(X)(fa["try"](Aa.getDefaultParseEnv(ra)))))(function (P) {
            return F.ExceptT(fa["try"](O.readRecord(P)));
          }))))(function (P) {
            if (P instanceof G.Right) return t.pure(c.widgetApplicative)(P.value0);

            if (P instanceof G.Left) {
              var U = P.value0;
              P = m.div(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([]);
              var ua = ba,
                  na = m.div_(c.widgetShiftMap)([R.errorDisplayBox]),
                  za = m.div_(c.widgetShiftMap)([]),
                  Ca = m.span(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([R.errorDisplay]),
                  Ea = m.text(b.widgetLiftWidget);
              U = "Couldn't decode MetajeloXML: " + M.show(fa.showError)(U);
              return P([ua, na(za(Ca([Ea(U)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 159, column 11 - line 161, column 37): " + [P.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 152, column 7 - line 161, column 37): " + [ia.constructor.name]);
      });
    });
    return g.loopW(B.empty)(function (ha) {
      return m.div_(c.widgetShiftMap)([])(n.bind(c.widgetBind)(ba)(function (ia) {
        return t.pure(c.widgetApplicative)(Sa(ia));
      }));
    });
  }(),
      Ta = function Ta(X) {
    var ba = m.div_(c.widgetShiftMap)([R.errorDisplayBox])(m.div_(c.widgetShiftMap)([])(m.span(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([R.errorDisplay])([m.text(b.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        ha = function ha(ia) {
      return function (ra) {
        var P = function P(U) {
          return g.step(U)(n.bind(c.widgetBind)(m.button_(c.widgetShiftMap)([H.downloadBtn, l.onClick, l.disabled(Y["null"](U))])(m.text(b.widgetLiftWidget)("Download")))(function () {
            return n.bind(c.widgetBind)(va.liftEffect(c.widgetMonadEff(w.monoidArray))(ia))(function () {
              return t.pure(c.widgetApplicative)(P(U));
            });
          }));
        };

        return g.dyn(P(ra));
      };
    };

    return m.div_(c.widgetShiftMap)([])(function () {
      var ia = V.encodeURIComponent(X);
      return n.bind(c.widgetBind)(va.liftEffect(c.widgetMonadEff(w.monoidArray))(ib(C.fromMaybe("")(ia))))(function (ra) {
        return C.maybe(ba)(ha(ra))(ia);
      });
    }());
  },
      Ua = function Ua(X) {
    var ba = function ba(ha) {
      return g.step(ha)(n.bind(c.widgetBind)(m.button_(c.widgetShiftMap)([H.clipBtn, l.onClick, l.disabled(Y["null"](ha))])(m.text(b.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return n.bind(c.widgetBind)(va.liftEffect(c.widgetMonadEff(w.monoidArray))(ka.copyToClipboard(ha)))(function () {
          return t.pure(c.widgetApplicative)(ba(ha));
        });
      }));
    };

    return g.dyn(ba(X));
  },
      Oa = function Oa(X) {
    return m.div_(p.shiftMapCofree(w.monoidArray))([H.sustainability])(n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.span_(p.shiftMapCofree(w.monoidArray))([H.missionStatement])(Q.urlInput(B.getWithDefault(new u.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new G.Left(""))(u.SProxy.value)(X))))(function (ba) {
      var ha = G.hush(ba);
      return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.span_(p.shiftMapCofree(w.monoidArray))([H.fundingStatement])(Q.urlInput(B.getWithDefault(new u.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new G.Left(""))(u.SProxy.value)(X))))(function (ia) {
        var ra = G.hush(ia);
        return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(u.SProxy.value)(new C.Just(ba))))(function () {
          return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "missionStatementURL";
          }))()(u.SProxy.value)(ha)))(function () {
            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(u.SProxy.value)(new C.Just(ia))))(function () {
              return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(u.SProxy.value)(ra));
            });
          });
        }))(X));
      });
    }));
  },
      zb = function zb(X) {
    return function (ba) {
      return m.div_(p.shiftMapCofree(w.monoidArray))([H.resourceType])(n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("resourceTypeEle")(X)))(function () {
        return n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("resourceTypeSTyp")(X)))(function () {
          return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.resourceTypeGen])(Q.menuSignal(ea.boundedEnumResourceTypeGeneral)(Q.isOptionResourceTypeGeneral)(B.get(new u.IsSymbol(function () {
            return "generalType";
          }))()(u.SProxy.value)(ba)))))(function (ha) {
            return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.resourceTypeDescr])(Q.textInput(n.join(C.bindMaybe)(W.map(C.functorMaybe)(aa.fromString)(B.get(new u.IsSymbol(function () {
              return "description";
            }))()(u.SProxy.value)(ba)))))))(function (ia) {
              return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                return "description";
              }))()(u.SProxy.value)(W.map(C.functorMaybe)(aa.toString)(ia))))(function () {
                return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                  return "generalType";
                }))()(u.SProxy.value)(ha));
              }))(ba));
            });
          });
        });
      }));
    };
  },
      Xa = function Xa(X) {
    return m.div_(p.shiftMapCofree(w.monoidArray))([H.resourceMDSource])(function () {
      var ba = B.getWithDefault(new u.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(u.SProxy.value)(X);
      return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.url])(Q.urlInput(B.getWithDefault(new u.IsSymbol(function () {
        return "url_Ei";
      }))()(new G.Left(""))(u.SProxy.value)(X)))))(function (ha) {
        var ia = G.hush(ha);
        return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([H.relType])(m.span_(p.shiftMapCofree(w.monoidArray))([])(n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("relationTypeSTyp")(ba)))(function () {
          return Q.menuSignal(ea.boundedEnumRelationType)(Q.isOptionRelationType)(B.get(new u.IsSymbol(function () {
            return "relationType";
          }))()(u.SProxy.value)(X));
        }))))(function (ra) {
          return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "url_Ei";
          }))()(u.SProxy.value)(new C.Just(ha))))(function () {
            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
              return "url";
            }))()(u.SProxy.value)(ia)))(function () {
              return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                return "relationType";
              }))()(u.SProxy.value)(ra));
            });
          }))(X));
        });
      });
    }());
  },
      Va = function Va(X) {
    var ba = C.fromMaybe(B.empty)(X);
    return m.div_(p.shiftMapCofree(w.monoidArray))([H.relatedId])(n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.id])(Q.textInput(B.get(new u.IsSymbol(function () {
      return "id";
    }))()(u.SProxy.value)(ba)))))(function (ha) {
      return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.idType])(Q.menuSignal(ea.boundedEnumIdentifierType)(Q.isOptionIdentifierType)(B.get(new u.IsSymbol(function () {
        return "idType";
      }))()(u.SProxy.value)(ba)))))(function (ia) {
        return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.relType])(Q.menuSignal(ea.boundedEnumRelationType)(Q.isOptionRelationType)(B.get(new u.IsSymbol(function () {
          return "relType";
        }))()(u.SProxy.value)(ba)))))(function (ra) {
          return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(C.Just.create(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "id";
          }))()(u.SProxy.value)(ha)))(function () {
            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
              return "idType";
            }))()(u.SProxy.value)(ia)))(function () {
              return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                return "relType";
              }))()(u.SProxy.value)(ra));
            });
          }))(ba)));
        });
      });
    }));
  },
      Pa = function Pa(X) {
    return m.div_(p.shiftMapCofree(w.monoidArray))([H.relatedIds])(m.span_(p.shiftMapCofree(w.monoidArray))([H.relatedIdsHeader])(m.div_(p.shiftMapCofree(w.monoidArray))([H.relatedIdList])(Q.nonEmptyArrayView(Va)(X))));
  },
      bb = function bb(X) {
    var ba = C.fromMaybe(B.empty)(X);
    return m.div_(p.shiftMapCofree(w.monoidArray))([H.institutionPolicy])(function () {
      var ha = B.getWithDefault(new u.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(u.SProxy.value)(ba);
      return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.policy])(Q.menuSignal(Q.boundedEnumPolPolType)(Q.isOptionPolPolType)(C.Just.create(B.getWithDefault(new u.IsSymbol(function () {
        return "polPolType";
      }))()(Q.FreeTextPolicy.value)(u.SProxy.value)(ba))))))(function (ia) {
        var ra = C.fromMaybe(Q.FreeTextPolicy.value)(ia);
        return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.policy])(Q.textInput(B.get(new u.IsSymbol(function () {
          return "policy_str";
        }))()(u.SProxy.value)(ba)))))(function (P) {
          var U = Q.checkPolicy(ra)(C.maybe("")(aa.toString)(P));
          return n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(function () {
            if (U instanceof G.Right) return w.mempty(c.widgetMonoid(w.monoidArray));
            if (U instanceof G.Left) return Q.errorDisplay(M.showString)(new C.Just(U.value0));
            throw Error("Failed pattern match at Metajelo.UI (line 740, column 13 - line 742, column 40): " + [U.constructor.name]);
          }()))(function () {
            var ua = G.hush(U);
            return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([H.policyType])(m.span_(p.shiftMapCofree(w.monoidArray))([])(Q.menuSignal(E.boundedEnumMaybe(ea.smallBoundedPolicyType)(ea.boundedEnumPolicyType))(Q.isOptionMaybePolicyType)(B.get(new u.IsSymbol(function () {
              return "policyType";
            }))()(u.SProxy.value)(ba)))))(function (na) {
              return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([H.applies])(m.span_(p.shiftMapCofree(w.monoidArray))([])(n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("appliesToProductAttr")(ha)))(function () {
                return Q.menuSignal(E.boundedEnumMaybe(E.smallBoundedBoolean)(E.boundedEnumBoolean))(Q.isOptionMaybeBoolean)(B.get(new u.IsSymbol(function () {
                  return "appliesToProduct";
                }))()(u.SProxy.value)(ba));
              }))))(function (za) {
                return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(C.Just.create(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                  return "polPolType";
                }))()(u.SProxy.value)(new C.Just(ra))))(function () {
                  return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                    return "policy_str";
                  }))()(u.SProxy.value)(P)))(function () {
                    return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                      return "policy_ei";
                    }))()(u.SProxy.value)(new C.Just(U))))(function () {
                      return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                        return "policy";
                      }))()(u.SProxy.value)(ua)))(function () {
                        return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                          return "policyType";
                        }))()(u.SProxy.value)(na)))(function () {
                          return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                            return "appliesToProduct";
                          }))()(u.SProxy.value)(za));
                        });
                      });
                    });
                  });
                }))(ba)));
              });
            });
          });
        });
      });
    }());
  },
      fb = function fb(X) {
    return function (ba) {
      var ha = W.mapFlipped(C.functorMaybe)(sa.snd(ba))(function (ia) {
        return W.mapFlipped(L.functorNonEmptyArray)(ia)(function (ra) {
          return y.execState(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "descs_on";
          }))()(u.SProxy.value)(new C.Just(X))))(ra);
        });
      });
      return m.div_(p.shiftMapCofree(w.monoidArray))([H.institutionPolicies])(n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("institutionPoliciesEle")(X)))(function () {
        return Q.nonEmptyArrayView(bb)(new sa.Tuple(sa.fst(ba), ha));
      }));
    };
  },
      ob = function ob(X) {
    return function (ba) {
      return m.div_(p.shiftMapCofree(w.monoidArray))([H.identifier])(n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("identifierTypeSTyp")(X)))(function () {
        return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.id])(Q.textInput(B.get(new u.IsSymbol(function () {
          return "id";
        }))()(u.SProxy.value)(ba)))))(function (ha) {
          return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.idType])(Q.menuSignal(ea.boundedEnumIdentifierType)(Q.isOptionIdentifierType)(B.get(new u.IsSymbol(function () {
            return "idType";
          }))()(u.SProxy.value)(ba)))))(function (ia) {
            return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
              return "id";
            }))()(u.SProxy.value)(ha)))(function () {
              return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                return "idType";
              }))()(u.SProxy.value)(ia));
            }))(ba));
          });
        });
      }));
    };
  },
      rb = function rb(X) {
    return m.div_(p.shiftMapCofree(w.monoidArray))([H.institutionContact])(n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.contactEmail])(Q.emailInput(B.getWithDefault(new u.IsSymbol(function () {
      return "email_Ei";
    }))()(new G.Left(""))(u.SProxy.value)(X)))))(function (ba) {
      var ha = G.hush(ba);
      return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.contactType])(Q.menuSignal(E.boundedEnumMaybe(ea.smallBoundedInstitutionContactType)(ea.boundedEnumInstitutionContactType))(Q.isOptionMaybeInstitutionContactType)(B.get(new u.IsSymbol(function () {
        return "contactType";
      }))()(u.SProxy.value)(X)))))(function (ia) {
        return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
          return "email_Ei";
        }))()(u.SProxy.value)(new C.Just(ba))))(function () {
          return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "emailAddress";
          }))()(u.SProxy.value)(ha)))(function () {
            return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
              return "contactType";
            }))()(u.SProxy.value)(ia));
          });
        }))(X));
      });
    }));
  },
      sb = function sb(X) {
    var ba = function ba(ia) {
      return m.div(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([H.locPreview])([m["br'"](b.widgetLiftWidget), T.foldMap(T.foldableMaybe)(c.widgetMonoid(w.monoidArray))(function (ra) {
        return T.fold(T.foldableArray)(c.widgetMonoid(w.monoidArray))(pa.spacify(pa.locElems(ra)));
      })(ia)]);
    },
        ha = C.fromMaybe(B.empty)(X);

    return m.div_(p.shiftMapCofree(w.monoidArray))([H.location])(function () {
      var ia = B.getWithDefault(new u.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(u.SProxy.value)(ha);
      return n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("locationEle")(ia)))(function () {
        return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.institutionId])(ob(ia)(Wa(new u.IsSymbol(function () {
          return "institutionID_opt";
        }))()(u.SProxy.value)(ha)))))(function (ra) {
          var P = B.getAll(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
            return "id";
          }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
            return "idType";
          }))()()()()(B.getAllOptionNil))))(ra);
          return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.institutionName])(Q.textInput(B.get(new u.IsSymbol(function () {
            return "institutionName";
          }))()(u.SProxy.value)(ha)))))(function (U) {
            return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.institutionType])(Q.menuSignal(ea.boundedEnumInstitutionType)(Q.isOptionInstitutionType)(B.get(new u.IsSymbol(function () {
              return "institutionType";
            }))()(u.SProxy.value)(ha)))))(function (ua) {
              return n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(m["br'"](b.widgetLiftWidget)))(function () {
                return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.superOrg])(Q.textInput(n.join(C.bindMaybe)(B.get(new u.IsSymbol(function () {
                  return "superOrganizationName";
                }))()(u.SProxy.value)(ha))))))(function (na) {
                  return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(rb(Wa(new u.IsSymbol(function () {
                    return "institutionContact_opt";
                  }))()(u.SProxy.value)(ha)))(function (za) {
                    var Ca = B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
                      return "contactType";
                    }))(Z.consKeys(new u.IsSymbol(function () {
                      return "emailAddress";
                    }))(Z.nilKeys)))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                      return "contactType";
                    }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                      return "emailAddress";
                    }))()()()()(B.getAllOptionNil))))(za);
                    return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(Oa(Wa(new u.IsSymbol(function () {
                      return "iSustain_opt";
                    }))()(u.SProxy.value)(ha)))(function (Ea) {
                      var Za = B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))(Z.consKeys(new u.IsSymbol(function () {
                        return "missionStatementURL";
                      }))(Z.nilKeys)))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                        return "missionStatementURL";
                      }))()()()()(B.getAllOptionNil))))(Ea);
                      return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(fb(ia)(new sa.Tuple(B.getWithDefault(new u.IsSymbol(function () {
                        return "_numPolicies";
                      }))()(1)(u.SProxy.value)(ha), B.get(new u.IsSymbol(function () {
                        return "institutionPolicies_opt";
                      }))()(u.SProxy.value)(ha))))(function (Fa) {
                        var Ka = sa.fst(Fa),
                            Ya = sa.snd(Fa),
                            vb = n.join(C.bindMaybe)(W.map(C.functorMaybe)(wa.sequence(L.traversableNonEmptyArray)(C.applicativeMaybe))(W.map(C.functorMaybe)(W.map(L.functorNonEmptyArray)(B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
                          return "appliesToProduct";
                        }))(Z.consKeys(new u.IsSymbol(function () {
                          return "policy";
                        }))(Z.consKeys(new u.IsSymbol(function () {
                          return "policyType";
                        }))(Z.nilKeys))))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                          return "appliesToProduct";
                        }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                          return "policy";
                        }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                          return "policyType";
                        }))()()()()(B.getAllOptionNil)))))))(Ya)));
                        return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.versioning])(Q.checkBoxS(B.getWithDefault(new u.IsSymbol(function () {
                          return "versioning";
                        }))()(!1)(u.SProxy.value)(ha)))))(function (gb) {
                          return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                            return "institutionID_opt";
                          }))()(u.SProxy.value)(new C.Just(ra))))(function () {
                            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                              return "institutionID";
                            }))()(u.SProxy.value)(P)))(function () {
                              return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                return "institutionName";
                              }))()(u.SProxy.value)(U)))(function () {
                                return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                  return "institutionType";
                                }))()(u.SProxy.value)(ua)))(function () {
                                  return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                    return "superOrganizationName";
                                  }))()(u.SProxy.value)(new C.Just(na))))(function () {
                                    return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                      return "institutionContact_opt";
                                    }))()(u.SProxy.value)(new C.Just(za))))(function () {
                                      return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                        return "institutionContact";
                                      }))()(u.SProxy.value)(Ca)))(function () {
                                        return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                          return "iSustain_opt";
                                        }))()(u.SProxy.value)(new C.Just(Ea))))(function () {
                                          return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                            return "institutionSustainability";
                                          }))()(u.SProxy.value)(Za)))(function () {
                                            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                              return "_numPolicies";
                                            }))()(u.SProxy.value)(new C.Just(Ka))))(function () {
                                              return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                                return "institutionPolicies_opt";
                                              }))()(u.SProxy.value)(Ya)))(function () {
                                                return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                                  return "institutionPolicies";
                                                }))()(u.SProxy.value)(vb)))(function () {
                                                  return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                                    return "versioning";
                                                  }))()(u.SProxy.value)(new C.Just(gb))))(function () {
                                                    return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                                      return "descs_on";
                                                    }))()(u.SProxy.value)(new C.Just(ia)));
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
                            });
                          }))(ha)))(function (ab) {
                            var Cb = B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
                              return "institutionContact";
                            }))(Z.consKeys(new u.IsSymbol(function () {
                              return "institutionID";
                            }))(Z.consKeys(new u.IsSymbol(function () {
                              return "institutionName";
                            }))(Z.consKeys(new u.IsSymbol(function () {
                              return "institutionPolicies";
                            }))(Z.consKeys(new u.IsSymbol(function () {
                              return "institutionSustainability";
                            }))(Z.consKeys(new u.IsSymbol(function () {
                              return "institutionType";
                            }))(Z.consKeys(new u.IsSymbol(function () {
                              return "superOrganizationName";
                            }))(Z.consKeys(new u.IsSymbol(function () {
                              return "versioning";
                            }))(Z.nilKeys)))))))))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                              return "institutionContact";
                            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                              return "institutionID";
                            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                              return "institutionName";
                            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                              return "institutionPolicies";
                            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                              return "institutionSustainability";
                            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                              return "institutionType";
                            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                              return "superOrganizationName";
                            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                              return "versioning";
                            }))()()()()(B.getAllOptionNil))))))))))(ab);
                            return n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(ba(Cb)))(function () {
                              return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(new C.Just(ab));
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
      });
    }());
  },
      pb = function pb(X) {
    return m.div_(p.shiftMapCofree(w.monoidArray))([H.basicMetadata])(n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.title])(Q.textInput(B.get(new u.IsSymbol(function () {
      return "title";
    }))()(u.SProxy.value)(X)))))(function (ba) {
      return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.creator])(Q.textInput(B.get(new u.IsSymbol(function () {
        return "creator";
      }))()(u.SProxy.value)(X)))))(function (ha) {
        return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([])(m.span_(p.shiftMapCofree(w.monoidArray))([H.pubyear])(Q.natInput(B.get(new u.IsSymbol(function () {
          return "publicationYear";
        }))()(u.SProxy.value)(X)))))(function (ia) {
          return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "title";
          }))()(u.SProxy.value)(ba)))(function () {
            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
              return "creator";
            }))()(u.SProxy.value)(ha)))(function () {
              return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                return "publicationYear";
              }))()(u.SProxy.value)(ia));
            });
          }))(X));
        });
      });
    }));
  },
      tb = function tb(X) {
    var ba = function ba(ia) {
      return m.div(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([H.prodPreview])([m["br'"](b.widgetLiftWidget), T.fold(T.foldableMaybe)(c.widgetMonoid(w.monoidArray))(W.map(C.functorMaybe)(pa.mkSupplementaryProductWidget)(ia))]);
    },
        ha = C.fromMaybe(B.empty)(X);

    return m.div_(p.shiftMapCofree(w.monoidArray))([H.product])(function () {
      var ia = B.getWithDefault(new u.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(u.SProxy.value)(ha);
      return n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("supplementaryProductEle")(ia)))(function () {
        return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(pb(Wa(new u.IsSymbol(function () {
          return "basicMetadata_opt";
        }))()(u.SProxy.value)(ha)))(function (ra) {
          var P = B.getAll(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
            return "creator";
          }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
            return "publicationYear";
          }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
            return "title";
          }))()()()()(B.getAllOptionNil)))))(ra);
          return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([H.resourceId])(ob(ia)(Wa(new u.IsSymbol(function () {
            return "resourceID_opt";
          }))()(u.SProxy.value)(ha))))(function (U) {
            var ua = B.getAll(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
              return "id";
            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
              return "idType";
            }))()()()()(B.getAllOptionNil))))(U);
            return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(zb(ia)(Wa(new u.IsSymbol(function () {
              return "resourceType_opt";
            }))()(u.SProxy.value)(ha)))(function (na) {
              var za = B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
                return "description";
              }))(Z.consKeys(new u.IsSymbol(function () {
                return "generalType";
              }))(Z.nilKeys)))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                return "description";
              }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                return "generalType";
              }))()()()()(B.getAllOptionNil))))(na);
              return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(db(ia)(new sa.Tuple(B.getWithDefault(new u.IsSymbol(function () {
                return "_numFormats";
              }))()(0)(u.SProxy.value)(ha), B.getWithDefault(new u.IsSymbol(function () {
                return "format";
              }))()([])(u.SProxy.value)(ha))))(function (Ca) {
                var Ea = sa.fst(Ca),
                    Za = sa.snd(Ca);
                return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(Xa(C.fromMaybe(B.empty)(Na(new u.IsSymbol(function () {
                  return "resMdsOpts_opt";
                }))()(u.SProxy.value)(ha)(ia))))(function (Fa) {
                  var Ka = B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
                    return "relationType";
                  }))(Z.consKeys(new u.IsSymbol(function () {
                    return "url";
                  }))(Z.nilKeys)))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                    return "relationType";
                  }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                    return "url";
                  }))()()()()(B.getAllOptionNil))))(Fa);
                  return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(sb(Na(new u.IsSymbol(function () {
                    return "locationOpts_opt";
                  }))()(u.SProxy.value)(ha)(ia)))(function (Ya) {
                    var vb = n.join(C.bindMaybe)(W.map(C.functorMaybe)(B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
                      return "institutionContact";
                    }))(Z.consKeys(new u.IsSymbol(function () {
                      return "institutionID";
                    }))(Z.consKeys(new u.IsSymbol(function () {
                      return "institutionName";
                    }))(Z.consKeys(new u.IsSymbol(function () {
                      return "institutionPolicies";
                    }))(Z.consKeys(new u.IsSymbol(function () {
                      return "institutionSustainability";
                    }))(Z.consKeys(new u.IsSymbol(function () {
                      return "institutionType";
                    }))(Z.consKeys(new u.IsSymbol(function () {
                      return "superOrganizationName";
                    }))(Z.consKeys(new u.IsSymbol(function () {
                      return "versioning";
                    }))(Z.nilKeys)))))))))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionContact";
                    }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionID";
                    }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionName";
                    }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionPolicies";
                    }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionSustainability";
                    }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionType";
                    }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                      return "superOrganizationName";
                    }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                      return "versioning";
                    }))()()()()(B.getAllOptionNil)))))))))))(Ya));
                    return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                      return "basicMetadata_opt";
                    }))()(u.SProxy.value)(new C.Just(ra))))(function () {
                      return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                        return "basicMetadata";
                      }))()(u.SProxy.value)(P)))(function () {
                        return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                          return "resourceID_opt";
                        }))()(u.SProxy.value)(new C.Just(U))))(function () {
                          return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                            return "resourceID";
                          }))()(u.SProxy.value)(new C.Just(ua))))(function () {
                            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                              return "resourceType_opt";
                            }))()(u.SProxy.value)(new C.Just(na))))(function () {
                              return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                return "resourceType";
                              }))()(u.SProxy.value)(za)))(function () {
                                return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                  return "_numFormats";
                                }))()(u.SProxy.value)(new C.Just(Ea))))(function () {
                                  return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                    return "format";
                                  }))()(u.SProxy.value)(new C.Just(Za))))(function () {
                                    return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                      return "resMdsOpts_opt";
                                    }))()(u.SProxy.value)(new C.Just(Fa))))(function () {
                                      return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                        return "resourceMetadataSource";
                                      }))()(u.SProxy.value)(new C.Just(Ka))))(function () {
                                        return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                          return "locationOpts_opt";
                                        }))()(u.SProxy.value)(Ya)))(function () {
                                          return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                            return "location";
                                          }))()(u.SProxy.value)(vb)))(function () {
                                            return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                              return "descs_on";
                                            }))()(u.SProxy.value)(new C.Just(ia)));
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
                    }))(ha)))(function (gb) {
                      var ab = B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
                        return "basicMetadata";
                      }))(Z.consKeys(new u.IsSymbol(function () {
                        return "format";
                      }))(Z.consKeys(new u.IsSymbol(function () {
                        return "location";
                      }))(Z.consKeys(new u.IsSymbol(function () {
                        return "resourceID";
                      }))(Z.consKeys(new u.IsSymbol(function () {
                        return "resourceMetadataSource";
                      }))(Z.consKeys(new u.IsSymbol(function () {
                        return "resourceType";
                      }))(Z.nilKeys)))))))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                        return "basicMetadata";
                      }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                        return "format";
                      }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                        return "location";
                      }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                        return "resourceID";
                      }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                        return "resourceMetadataSource";
                      }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                        return "resourceType";
                      }))()()()()(B.getAllOptionNil))))))))(gb);
                      return n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(ba(ab)))(function () {
                        return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(new C.Just(gb));
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    }());
  },
      Ab = function Ab(X) {
    return function (ba) {
      var ha = W.mapFlipped(C.functorMaybe)(sa.snd(ba))(function (ia) {
        return W.mapFlipped(L.functorNonEmptyArray)(ia)(function (ra) {
          return y.execState(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
            return "descs_on";
          }))()(u.SProxy.value)(new C.Just(X))))(ra);
        });
      });
      return m.div_(p.shiftMapCofree(w.monoidArray))([H.products])(m.span_(p.shiftMapCofree(w.monoidArray))([H.productsHeader])(n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("supplementaryProductsEle")(X)))(function () {
        return m.div_(p.shiftMapCofree(w.monoidArray))([H.productList])(Q.nonEmptyArrayView(tb)(new sa.Tuple(sa.fst(ba), ha)));
      })));
    };
  },
      ub = function ub(X) {
    var ba = B.getWithDefault(new u.IsSymbol(function () {
      return "descs_on";
    }))()(!0)(u.SProxy.value)(X);
    return n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("recordEle")(ba)))(function () {
      return n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("recordTypeCTyp")(ba)))(function () {
        return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(jb(Wa(new u.IsSymbol(function () {
          return "identifier_opt";
        }))()(u.SProxy.value)(X)))(function (ha) {
          var ia = B.getAll(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
            return "id";
          }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
            return "idType";
          }))()()()()(B.getAllOptionNil))))(ha);
          B.getWithDefault(new u.IsSymbol(function () {
            return "date_Ei";
          }))()(new G.Left(""))(u.SProxy.value)(X);
          return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(m.div_(p.shiftMapCofree(w.monoidArray))([H.date])(n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(Q.mkDesc("dateEle")(ba)))(function () {
            return Q.dateInput(B.getWithDefault(new u.IsSymbol(function () {
              return "date_Ei";
            }))()(new G.Left(""))(u.SProxy.value)(X));
          })))(function (ra) {
            var P = G.hush(ra);
            return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(Pa(new sa.Tuple(B.getWithDefault(new u.IsSymbol(function () {
              return "_numRelIds";
            }))()(0)(u.SProxy.value)(X), B.get(new u.IsSymbol(function () {
              return "relId_opts";
            }))()(u.SProxy.value)(X))))(function (U) {
              var ua = sa.fst(U),
                  na = sa.snd(U),
                  za = n.join(C.bindMaybe)(W.map(C.functorMaybe)(wa.sequence(L.traversableNonEmptyArray)(C.applicativeMaybe))(W.map(C.functorMaybe)(W.map(L.functorNonEmptyArray)(B.getAll(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                return "id";
              }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                return "idType";
              }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                return "relType";
              }))()()()()(B.getAllOptionNil)))))))(na)));
              return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(Ab(ba)(new sa.Tuple(B.getWithDefault(new u.IsSymbol(function () {
                return "_numSupProds";
              }))()(0)(u.SProxy.value)(X), B.get(new u.IsSymbol(function () {
                return "supProd_opts";
              }))()(u.SProxy.value)(X))))(function (Ca) {
                var Ea = sa.fst(Ca),
                    Za = sa.snd(Ca),
                    Fa = n.join(C.bindMaybe)(W.map(C.functorMaybe)(wa.sequence(L.traversableNonEmptyArray)(C.applicativeMaybe))(W.map(C.functorMaybe)(W.map(L.functorNonEmptyArray)(B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
                  return "basicMetadata";
                }))(Z.consKeys(new u.IsSymbol(function () {
                  return "format";
                }))(Z.consKeys(new u.IsSymbol(function () {
                  return "location";
                }))(Z.consKeys(new u.IsSymbol(function () {
                  return "resourceID";
                }))(Z.consKeys(new u.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))(Z.consKeys(new u.IsSymbol(function () {
                  return "resourceType";
                }))(Z.nilKeys)))))))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                  return "basicMetadata";
                }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                  return "format";
                }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                  return "location";
                }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                  return "resourceID";
                }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                  return "resourceType";
                }))()()()()(B.getAllOptionNil))))))))))(Za)));
                return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                  return "identifier_opt";
                }))()(u.SProxy.value)(new C.Just(ha))))(function () {
                  return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                    return "identifier";
                  }))()(u.SProxy.value)(ia)))(function () {
                    return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                      return "date_Ei";
                    }))()(u.SProxy.value)(new C.Just(ra))))(function () {
                      return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                        return "date";
                      }))()(u.SProxy.value)(P)))(function () {
                        return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                          return "_numRelIds";
                        }))()(u.SProxy.value)(new C.Just(ua))))(function () {
                          return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                            return "relId_opts";
                          }))()(u.SProxy.value)(na)))(function () {
                            return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                              return "relatedIdentifiers";
                            }))()(u.SProxy.value)(za)))(function () {
                              return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                return "_numSupProds";
                              }))()(u.SProxy.value)(new C.Just(Ea))))(function () {
                                return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                  return "supProd_opts";
                                }))()(u.SProxy.value)(Za)))(function () {
                                  return n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                    return "supplementaryProducts";
                                  }))()(u.SProxy.value)(Fa)))(function () {
                                    return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                                      return "descs_on";
                                    }))()(u.SProxy.value)(new C.Just(ba)));
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                }))(X));
              });
            });
          });
        });
      });
    });
  },
      Bb = function () {
    var X = function X(ba) {
      var ha = function ha(ia) {
        return C.maybe(t.pure(da.applicativeEffect)(""))(ma.recordToString)(ia);
      };

      return n.bind(c.widgetBind)(va.liftEffect(c.widgetMonadEff(w.monoidArray))(wa.sequence(wa.traversableMaybe)(da.applicativeEffect)(W.map(C.functorMaybe)(lb)(ba))))(function (ia) {
        return m.div(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([H.recPreview])([n.bind(c.widgetBind)(va.liftEffect(c.widgetMonadEff(w.monoidArray))(ha(ia)))(function (ra) {
          return m.div(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([H.previewButtons])([Ta(ra), Ua(ra)]);
        }), m["br'"](b.widgetLiftWidget), T.fold(T.foldableMaybe)(c.widgetMonoid(w.monoidArray))(W.map(C.functorMaybe)(pa.mkRecordWidget)(ia))]);
      });
    };

    return g.loopS(w.monoidArray)(B.empty)(function (ba) {
      return m.div_(p.shiftMapCofree(w.monoidArray))([H.record])(function () {
        var ha = B.getWithDefault(new u.IsSymbol(function () {
          return "descs_on";
        }))()(!0)(u.SProxy.value)(ba);
        return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(Q.showDescSig(ha))(function (ia) {
          return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(yb)(function (ra) {
            var P = B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
              return "date";
            }))(Z.consKeys(new u.IsSymbol(function () {
              return "identifier";
            }))(Z.consKeys(new u.IsSymbol(function () {
              return "lastModified";
            }))(Z.consKeys(new u.IsSymbol(function () {
              return "relatedIdentifiers";
            }))(Z.consKeys(new u.IsSymbol(function () {
              return "supplementaryProducts";
            }))(Z.nilKeys))))))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
              return "date";
            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
              return "identifier";
            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
              return "lastModified";
            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
              return "relatedIdentifiers";
            }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
              return "supplementaryProducts";
            }))()()()()(B.getAllOptionNil)))))))(ra);
            ra = C.isNothing(P) ? ba : ra;
            return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(ub(ra))(function (U) {
              var ua = B.get(new u.IsSymbol(function () {
                return "lastModified";
              }))()(u.SProxy.value)(U),
                  na = Da.unsafePerformEffect(ta.nowDateTime);
              return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(N.append(S.semigroupFirst)(ua)(S.First(new C.Just(na)))))(function (za) {
                return n.bind(p.bindCofree(c.widgetAlternative(w.monoidArray)))(t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(y.execState(n.discard(n.discardUnit)(r.bindStateT(A.monadIdentity))(n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                  return "lastModified";
                }))()(u.SProxy.value)(za)))(function () {
                  return n.bind(r.bindStateT(A.monadIdentity))(x.get(r.monadStateStateT(A.monadIdentity)))(B.maySetOptState(new u.IsSymbol(function () {
                    return "descs_on";
                  }))()(u.SProxy.value)(new C.Just(ia)));
                }))(U)))(function (Ca) {
                  var Ea = B.getSubset()()(Z.consKeys(new u.IsSymbol(function () {
                    return "date";
                  }))(Z.consKeys(new u.IsSymbol(function () {
                    return "identifier";
                  }))(Z.consKeys(new u.IsSymbol(function () {
                    return "lastModified";
                  }))(Z.consKeys(new u.IsSymbol(function () {
                    return "relatedIdentifiers";
                  }))(Z.consKeys(new u.IsSymbol(function () {
                    return "supplementaryProducts";
                  }))(Z.nilKeys))))))(B.getAllAny()(B.getAllOptionCons(new u.IsSymbol(function () {
                    return "date";
                  }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                    return "identifier";
                  }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                    return "lastModified";
                  }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                    return "relatedIdentifiers";
                  }))()()()()(B.getAllOptionCons(new u.IsSymbol(function () {
                    return "supplementaryProducts";
                  }))()()()()(B.getAllOptionNil)))))))(Ca);
                  return n.discard(n.discardUnit)(p.bindCofree(c.widgetAlternative(w.monoidArray)))(g.display(X(Ea)))(function () {
                    return t.pure(p.applicativeCofree(c.widgetAlternative(w.monoidArray)))(Ca);
                  });
                });
              });
            });
          });
        });
      }());
    });
  }(),
      qb = n.bind(c.widgetBind)(oa.liftAff(c.widgetMonadAff(w.monoidArray))(n.bind(la.bindAff)(e.get(k.string)("https://api.datacite.org/dois/10.3886/E100590V1"))(function (X) {
    if (X instanceof G.Left) return ca.log(la.monadEffectAff)("GET /api response failed to decode: " + e.printError(X.value0));
    if (X instanceof G.Right) return ca.log(la.monadEffectAff)("Received response, first 100 chars: " + J.take(100)(X.value0.body));
    throw Error("Failed pattern match at Metajelo.UI (line 81, column 5 - line 85, column 79): " + [X.constructor.name]);
  })))(function () {
    return m["div'"](c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([m.div(c.widgetMultiAlternative(w.monoidArray))(c.widgetShiftMap)([H.page])(t.pure(t.applicativeArray)(g.dyn(Bb)))]);
  });

  d.runFormSPA = function (X) {
    return q.runWidgetInDom(X)(qb);
  };

  d.page = qb;
  d.utf8DataAttr = "data:text/plain;charset=utf-8";
  d.downloadButton = Ta;
  d.mkDLAnchorAndClicker = ib;
  d.uploadButtonSig = yb;
  d.copyButton = Ua;
  d.fillMetajeloRecordExtra = Sa;
  d.fillSProdExtra = xb;
  d.fillLocationRowExtra = wb;
  d.fillIContactExtra = $a;
  d.fillSustainExtra = eb;
  d.fillPolicyExtra = nb;
  d.fillResourceMDSExtra = mb;
  d.accumulateMetajeloRecord = Bb;
  d.finalizeRecord = lb;
  d.accumulateMetajeloRecUI = ub;
  d.accumulateSuppProd = tb;
  d.supProdSigArray = Ab;
  d.accumulateLocation = sb;
  d.accumulateSustain = Oa;
  d.accumulateIdent = ob;
  d.genRecIdent = jb;
  d.accumulateRelatedIdent = Va;
  d.relIdSigArray = Pa;
  d.accumulateBasicMetaData = pb;
  d.accumulateResType = zb;
  d.formatSignal = kb;
  d.formatSigArray = db;
  d.accumulateResMdSource = Xa;
  d.accumulateContact = rb;
  d.accumulatePolicy = bb;
  d.policySigArray = fb;
  d.tooltip = cb;
  d.tooltipS = hb;
  d.getOpt = Wa;
  d.updateDescOn = Na;
})(PS);

module.exports = PS["Metajelo.UI"];
},{"react":"n8MK","react-dom":"NKHc","react-dom/server":"KpxE","uuid/v4":"hYHi","process":"pBGv"}],"Focm":[function(require,module,exports) {
"use strict";

var MetajeloUI = _interopRequireWildcard(require("./index.opt.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// var Metajelo = require("../output/Metajelo"); // For bower
window.MetajeloUI = MetajeloUI;
},{"./index.opt.js":"xbCx"}]},{},["Focm"], null)
//# sourceMappingURL=prod.61ef885b.js.map