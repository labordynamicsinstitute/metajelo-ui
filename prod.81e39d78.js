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
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $jscomp = $jscomp || {};
$jscomp.scope = {};

$jscomp.arrayIteratorImpl = function (a) {
  var b = 0;
  return function () {
    return b < a.length ? {
      done: !1,
      value: a[b++]
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
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, d) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[b] = d.value;
  return a;
};

$jscomp.getGlobal = function (a) {
  a = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, a, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global];

  for (var b = 0; b < a.length; ++b) {
    var d = a[b];
    if (d && d.Math == Math) return d;
  }

  throw Error("Cannot find global object");
};

$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === _typeof(Symbol("x"));
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";

var $jscomp$lookupPolyfilledValue = function $jscomp$lookupPolyfilledValue(a, b) {
  var d = $jscomp.propertyToPolyfillSymbol[b];
  if (null == d) return a[b];
  d = a[d];
  return void 0 !== d ? d : a[b];
};

$jscomp.polyfill = function (a, b, d, k) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, d, k) : $jscomp.polyfillUnisolated(a, b, d, k));
};

$jscomp.polyfillUnisolated = function (a, b, d, k) {
  d = $jscomp.global;
  a = a.split(".");

  for (k = 0; k < a.length - 1; k++) {
    var f = a[k];
    if (!(f in d)) return;
    d = d[f];
  }

  a = a[a.length - 1];
  k = d[a];
  b = b(k);
  b != k && null != b && $jscomp.defineProperty(d, a, {
    configurable: !0,
    writable: !0,
    value: b
  });
};

$jscomp.polyfillIsolated = function (a, b, d, k) {
  var f = a.split(".");
  a = 1 === f.length;
  k = f[0];
  k = !a && k in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var n = 0; n < f.length - 1; n++) {
    var p = f[n];
    if (!(p in k)) return;
    k = k[p];
  }

  f = f[f.length - 1];
  d = $jscomp.IS_SYMBOL_NATIVE && "es6" === d ? k[f] : null;
  b = b(d);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, f, {
    configurable: !0,
    writable: !0,
    value: b
  }) : b !== d && (void 0 === $jscomp.propertyToPolyfillSymbol[f] && (d = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[f] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(f) : $jscomp.POLYFILL_PREFIX + d + "$" + f), $jscomp.defineProperty(k, $jscomp.propertyToPolyfillSymbol[f], {
    configurable: !0,
    writable: !0,
    value: b
  })));
};

$jscomp.initSymbol = function () {};

$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;

  var b = function b(n, p) {
    this.$jscomp$symbol$id_ = n;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: p
    });
  };

  b.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };

  var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
      k = 0,
      f = function f(n) {
    if (this instanceof f) throw new TypeError("Symbol is not a constructor");
    return new b(d + (n || "") + "_" + k++, n);
  };

  return f;
}, "es6", "es3");
$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), d = 0; d < b.length; d++) {
    var k = $jscomp.global[b[d]];
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

$jscomp.iteratorPrototype = function (a) {
  a = {
    next: a
  };

  a[Symbol.iterator] = function () {
    return this;
  };

  return a;
};

$jscomp.iteratorFromArray = function (a, b) {
  a instanceof String && (a += "");
  var d = 0,
      k = !1,
      f = {
    next: function next() {
      if (!k && d < a.length) {
        var n = d++;
        return {
          value: b(n, a[n]),
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

  f[Symbol.iterator] = function () {
    return f;
  };

  return f;
};

$jscomp.polyfill("Array.prototype.keys", function (a) {
  return a ? a : function () {
    return $jscomp.iteratorFromArray(this, function (b) {
      return b;
    });
  };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.fill", function (a) {
  return a ? a : function (b, d, k) {
    var f = this.length || 0;
    0 > d && (d = Math.max(0, f + d));
    if (null == k || k > f) k = f;
    k = Number(k);
    0 > k && (k = Math.max(0, f + k));

    for (d = Number(d || 0); d < k; d++) {
      this[d] = b;
    }

    return this;
  };
}, "es6", "es3");

$jscomp.typedArrayFill = function (a) {
  return a ? a : Array.prototype.fill;
};

$jscomp.polyfill("Int8Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Uint8Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Uint8ClampedArray.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Int16Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Uint16Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Int32Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Uint32Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Float32Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");
$jscomp.polyfill("Float64Array.prototype.fill", $jscomp.typedArrayFill, "es6", "es5");

$jscomp.checkStringArgs = function (a, b, d) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + d + " must not be null or undefined");
  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + d + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (b) {
    var d = $jscomp.checkStringArgs(this, null, "codePointAt"),
        k = d.length;
    b = Number(b) || 0;

    if (0 <= b && b < k) {
      b |= 0;
      var f = d.charCodeAt(b);
      if (55296 > f || 56319 < f || b + 1 === k) return f;
      b = d.charCodeAt(b + 1);
      return 56320 > b || 57343 < b ? f : 1024 * (f - 55296) + b + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (b) {
    for (var d = "", k = 0; k < arguments.length; k++) {
      var f = Number(arguments[k]);
      if (0 > f || 1114111 < f || f !== Math.floor(f)) throw new RangeError("invalid_code_point " + f);
      65535 >= f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(f >>> 10 & 1023 | 55296), d += String.fromCharCode(f & 1023 | 56320));
    }

    return d;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (b, d, k) {
    d = null != d ? d : function (g) {
      return g;
    };
    var f = [],
        n = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];

    if ("function" == typeof n) {
      b = n.call(b);

      for (var p = 0; !(n = b.next()).done;) {
        f.push(d.call(k, n.value, p++));
      }
    } else for (n = b.length, p = 0; p < n; p++) {
      f.push(d.call(k, b[p], p));
    }

    return f;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (b, d) {
    var k = $jscomp.checkStringArgs(this, b, "endsWith");
    b += "";
    void 0 === d && (d = k.length);
    d = Math.max(0, Math.min(d | 0, k.length));

    for (var f = b.length; 0 < f && 0 < d;) {
      if (k[--d] != b[--f]) return !1;
    }

    return 0 >= f;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (b, d) {
    var k = $jscomp.checkStringArgs(this, b, "startsWith");
    b += "";
    var f = k.length,
        n = b.length;
    d = Math.max(0, Math.min(d | 0, k.length));

    for (var p = 0; p < n && d < f;) {
      if (k[d++] != b[p++]) return !1;
    }

    return p >= n;
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, b, d) {
  a instanceof String && (a = String(a));

  for (var k = a.length, f = 0; f < k; f++) {
    var n = a[f];
    if (b.call(d, n, f, a)) return {
      i: f,
      v: n
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (b, d) {
    return $jscomp.findInternal(this, b, d).v;
  };
}, "es6", "es3");
var PS = {};

(function (a) {
  a._ajax = function () {
    var b = {};
    "undefined" === typeof module || !module.require || "undefined" !== typeof process && process.versions.electron ? (b.newXHR = function () {
      return new XMLHttpRequest();
    }, b.fixupUrl = function (d) {
      return d || "/";
    }, b.getResponse = function (d) {
      return d.response;
    }) : (b.newXHR = function () {
      return new (module.require("xhr2"))();
    }, b.fixupUrl = function (d, k) {
      return null === k.nodejsBaseUrl ? (k = module.require("url"), d = k.parse(d), d.protocol = d.protocol || "http:", d.hostname = d.hostname || "localhost", k.format(d)) : d || "/";
    }, b.getResponse = function (d) {
      return d.response;
    });
    return function (d, k) {
      return function (f, n) {
        var p = b.newXHR(),
            g = b.fixupUrl(k.url, p);
        p.open(k.method || "GET", g, !0, k.username, k.password);
        if (k.headers) try {
          g = 0;

          for (var q; null != (q = k.headers[g]); g++) {
            p.setRequestHeader(q.field, q.value);
          }
        } catch (w) {
          f(w);
        }

        q = function q(w) {
          return function () {
            f(Error(w + ": " + k.method + " " + k.url));
          };
        };

        p.onerror = q("AJAX request failed");
        p.ontimeout = q("AJAX request timed out");

        p.onload = function () {
          n({
            status: p.status,
            statusText: p.statusText,
            headers: p.getAllResponseHeaders().split("\r\n").filter(function (w) {
              return 0 < w.length;
            }).map(function (w) {
              var z = w.indexOf(":");
              return d(w.substring(0, z))(w.substring(z + 2));
            }),
            body: b.getResponse(p)
          });
        };

        p.responseType = k.responseType;
        p.withCredentials = k.withCredentials;
        p.send(k.content);
        return function (w, z, c) {
          try {
            p.abort();
          } catch (h) {
            return z(h);
          }

          return c();
        };
      };
    };
  }();
})(PS.Affjax = PS.Affjax || {});

(function (a) {
  a.arrayApply = function (b) {
    return function (d) {
      for (var k = b.length, f = d.length, n = Array(k * f), p = 0, g = 0; g < k; g++) {
        for (var q = b[g], w = 0; w < f; w++) {
          n[p++] = q(d[w]);
        }
      }

      return n;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var b = new function (d) {
    this.compose = d;
  }(function (d) {
    return function (k) {
      return function (f) {
        return d(k(f));
      };
    };
  });

  a.compose = function (d) {
    return d.compose;
  };

  a.composeFlipped = function (d) {
    return function (k) {
      return function (f) {
        return (0, d.compose)(f)(k);
      };
    };
  };

  a.semigroupoidFn = b;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var b = a["Control.Category"],
      d = a["Control.Semigroupoid"];
  a = new function (k, f) {
    this.Semigroupoid0 = k;
    this.identity = f;
  }(function () {
    return d.semigroupoidFn;
  }, function (k) {
    return k;
  });

  b.identity = function (k) {
    return k.identity;
  };

  b.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (b) {
    return function (d) {
      return function (k) {
        return b(k)(d);
      };
    };
  };

  a["const"] = function (b) {
    return function (d) {
      return b;
    };
  };

  a.on = function (b) {
    return function (d) {
      return function (k) {
        return function (f) {
          return b(d(k))(d(f));
        };
      };
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (b) {
    return function (d) {
      for (var k = d.length, f = Array(k), n = 0; n < k; n++) {
        f[n] = b(d[n]);
      }

      return f;
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
  var b = a["Data.Functor"],
      d = a["Data.Functor"],
      k = a["Control.Semigroupoid"],
      f = a["Data.Function"],
      n = a["Data.Unit"];

  a = function a(p) {
    this.map = p;
  };

  k = new a(k.compose(k.semigroupoidFn));
  d = new a(d.arrayMap);
  b.Functor = a;

  b.map = function (p) {
    return p.map;
  };

  b.mapFlipped = function (p) {
    return function (g) {
      return function (q) {
        return (0, p.map)(q)(g);
      };
    };
  };

  b["void"] = function (p) {
    return (0, p.map)(f["const"](n.unit));
  };

  b.voidRight = function (p) {
    return function (g) {
      return (0, p.map)(f["const"](g));
    };
  };

  b.voidLeft = function (p) {
    return function (g) {
      return function (q) {
        return (0, p.map)(f["const"](q))(g);
      };
    };
  };

  b.functorFn = k;
  b.functorArray = d;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var b = a["Control.Apply"],
      d = a["Control.Apply"],
      k = a["Control.Category"],
      f = a["Data.Function"],
      n = a["Data.Functor"];

  a = function a(g, q) {
    this.Functor0 = g;
    this.apply = q;
  };

  var p = new a(function () {
    return n.functorFn;
  }, function (g) {
    return function (q) {
      return function (w) {
        return g(w)(q(w));
      };
    };
  });
  d = new a(function () {
    return n.functorArray;
  }, d.arrayApply);
  b.Apply = a;

  b.apply = function (g) {
    return g.apply;
  };

  b.applySecond = function (g) {
    return function (q) {
      return function (w) {
        return (0, g.apply)(n.map(g.Functor0())(f["const"](k.identity(k.categoryFn)))(q))(w);
      };
    };
  };

  b.lift2 = function (g) {
    return function (q) {
      return function (w) {
        return function (z) {
          return (0, g.apply)(n.map(g.Functor0())(q)(w))(z);
        };
      };
    };
  };

  b.applyFn = p;
  b.applyArray = d;
})(PS);

(function (a) {
  a["Control.Applicative"] = a["Control.Applicative"] || {};
  var b = a["Control.Applicative"],
      d = a["Control.Apply"];

  a = function a(f, n) {
    this.Apply0 = f;
    this.pure = n;
  };

  var k = new a(function () {
    return d.applyArray;
  }, function (f) {
    return [f];
  });
  b.Applicative = a;

  b.pure = function (f) {
    return f.pure;
  };

  b.liftA1 = function (f) {
    return function (n) {
      return function (p) {
        return d.apply(f.Apply0())((0, f.pure)(n))(p);
      };
    };
  };

  b.applicativeArray = k;
})(PS);

(function (a) {
  a.arrayBind = function (b) {
    return function (d) {
      for (var k = [], f = 0, n = b.length; f < n; f++) {
        Array.prototype.push.apply(k, d(b[f]));
      }

      return k;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var b = a["Control.Bind"],
      d = a["Control.Apply"],
      k = a["Control.Category"],
      f = a["Data.Function"],
      n = function n(q, w) {
    this.Apply0 = q;
    this.bind = w;
  };

  a = new n(function () {
    return d.applyArray;
  }, a["Control.Bind"].arrayBind);

  var p = function p(q) {
    return f.flip(q.bind);
  },
      g = new function (q) {
    this.discard = q;
  }(function (q) {
    return q.bind;
  });

  b.Bind = n;

  b.bind = function (q) {
    return q.bind;
  };

  b.bindFlipped = p;

  b.discard = function (q) {
    return q.discard;
  };

  b.join = function (q) {
    return function (w) {
      return (0, q.bind)(w)(k.identity(k.categoryFn));
    };
  };

  b.composeKleisliFlipped = function (q) {
    return function (w) {
      return function (z) {
        return function (c) {
          return p(q)(w)(z(c));
        };
      };
    };
  };

  b.bindArray = a;
  b.discardUnit = g;
})(PS);

(function (a) {
  a.topInt = 2147483647;
  a.bottomInt = -2147483648;
  a.topChar = String.fromCharCode(65535);
  a.bottomChar = String.fromCharCode(0);
})(PS["Data.Bounded"] = PS["Data.Bounded"] || {});

(function (a) {
  var b = function b(d) {
    return function (k) {
      return function (f) {
        return function (n) {
          return function (p) {
            return n < p ? d : n === p ? k : f;
          };
        };
      };
    };
  };

  a.ordBooleanImpl = b;
  a.ordIntImpl = b;
  a.ordCharImpl = b;
})(PS["Data.Ord"] = PS["Data.Ord"] || {});

(function (a) {
  var b = function b(d) {
    return function (k) {
      return d === k;
    };
  };

  a.eqBooleanImpl = b;
  a.eqIntImpl = b;
  a.eqCharImpl = b;
  a.eqStringImpl = b;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});

(function (a) {
  a["Data.Eq"] = a["Data.Eq"] || {};
  var b = a["Data.Eq"],
      d = a["Data.Eq"];

  a = function a(p) {
    this.eq = p;
  };

  var k = new a(d.eqStringImpl),
      f = new a(d.eqIntImpl),
      n = new a(d.eqCharImpl);
  d = new a(d.eqBooleanImpl);
  b.Eq = a;

  b.eq = function (p) {
    return p.eq;
  };

  b.eqBoolean = d;
  b.eqInt = f;
  b.eqChar = n;
  b.eqString = k;
})(PS);

(function (a) {
  a["Data.Ordering"] = a["Data.Ordering"] || {};
  a = a["Data.Ordering"];

  var b = function () {
    function f() {}

    f.value = new f();
    return f;
  }(),
      d = function () {
    function f() {}

    f.value = new f();
    return f;
  }(),
      k = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.LT = b;
  a.GT = d;
  a.EQ = k;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var b = a["Data.Ord"],
      d = a["Data.Ord"],
      k = a["Data.Eq"],
      f = a["Data.Ordering"];

  a = function a(g, q) {
    this.Eq0 = g;
    this.compare = q;
  };

  var n = new a(function () {
    return k.eqInt;
  }, d.ordIntImpl(f.LT.value)(f.EQ.value)(f.GT.value)),
      p = new a(function () {
    return k.eqChar;
  }, d.ordCharImpl(f.LT.value)(f.EQ.value)(f.GT.value));
  d = new a(function () {
    return k.eqBoolean;
  }, d.ordBooleanImpl(f.LT.value)(f.EQ.value)(f.GT.value));
  b.Ord = a;

  b.compare = function (g) {
    return g.compare;
  };

  b.max = function (g) {
    return function (q) {
      return function (w) {
        var z = (0, g.compare)(q)(w);
        if (z instanceof f.LT) return w;
        if (z instanceof f.EQ || z instanceof f.GT) return q;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [z.constructor.name]);
      };
    };
  };

  b.ordBoolean = d;
  b.ordInt = n;
  b.ordChar = p;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var b = a["Data.Bounded"],
      d = a["Data.Bounded"],
      k = a["Data.Ord"];

  a = function a(p, g, q) {
    this.Ord0 = p;
    this.bottom = g;
    this.top = q;
  };

  var f = new a(function () {
    return k.ordInt;
  }, d.bottomInt, d.topInt);
  d = new a(function () {
    return k.ordChar;
  }, d.bottomChar, d.topChar);
  var n = new a(function () {
    return k.ordBoolean;
  }, !1, !0);
  b.Bounded = a;

  b.bottom = function (p) {
    return p.bottom;
  };

  b.top = function (p) {
    return p.top;
  };

  b.boundedBoolean = n;
  b.boundedInt = f;
  b.boundedChar = d;
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var b = a["Data.Maybe"],
      d = a["Control.Applicative"],
      k = a["Control.Apply"],
      f = a["Control.Bind"],
      n = a["Control.Category"],
      p = a["Data.Bounded"],
      g = a["Data.Eq"],
      q = a["Data.Function"],
      w = a["Data.Functor"],
      z = a["Data.Ord"],
      c = a["Data.Ordering"],
      h = function () {
    function I() {}

    I.value = new I();
    return I;
  }(),
      e = function () {
    function I(y) {
      this.value0 = y;
    }

    I.create = function (y) {
      return new I(y);
    };

    return I;
  }(),
      l = function l(I) {
    return function (y) {
      return function (r) {
        if (r instanceof h) return I;
        if (r instanceof e) return y(r.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [I.constructor.name, y.constructor.name, r.constructor.name]);
      };
    };
  };

  a = l(!0)(q["const"](!1));
  q = l(!1)(q["const"](!0));

  var t = new w.Functor(function (I) {
    return function (y) {
      return y instanceof e ? new e(I(y.value0)) : h.value;
    };
  }),
      u = function u(I) {
    return new g.Eq(function (y) {
      return function (r) {
        return y instanceof h && r instanceof h ? !0 : y instanceof e && r instanceof e ? g.eq(I)(y.value0)(r.value0) : !1;
      };
    });
  },
      D = function D(I) {
    return new z.Ord(function () {
      return u(I.Eq0());
    }, function (y) {
      return function (r) {
        if (y instanceof h && r instanceof h) return c.EQ.value;
        if (y instanceof h) return c.LT.value;
        if (r instanceof h) return c.GT.value;
        if (y instanceof e && r instanceof e) return z.compare(I)(y.value0)(r.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [y.constructor.name, r.constructor.name]);
      };
    });
  },
      H = new k.Apply(function () {
    return t;
  }, function (I) {
    return function (y) {
      if (I instanceof e) return w.map(t)(I.value0)(y);
      if (I instanceof h) return h.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [I.constructor.name, y.constructor.name]);
    };
  });

  k = new f.Bind(function () {
    return H;
  }, function (I) {
    return function (y) {
      if (I instanceof e) return y(I.value0);
      if (I instanceof h) return h.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [I.constructor.name, y.constructor.name]);
    };
  });
  d = new d.Applicative(function () {
    return H;
  }, e.create);
  b.Nothing = h;
  b.Just = e;
  b.maybe = l;

  b.fromMaybe = function (I) {
    return l(I)(n.identity(n.categoryFn));
  };

  b.isJust = q;
  b.isNothing = a;

  b.fromJust = function (I) {
    return function (y) {
      if (y instanceof e) return y.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [y.constructor.name]);
    };
  };

  b.functorMaybe = t;
  b.applyMaybe = H;
  b.applicativeMaybe = d;
  b.bindMaybe = k;
  b.ordMaybe = D;

  b.boundedMaybe = function (I) {
    return new p.Bounded(function () {
      return D(I.Ord0());
    }, h.value, new e(p.top(I)));
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
  var b = a["Affjax.RequestBody"],
      d = a["Data.Maybe"],
      k = a["Data.MediaType.Common"];

  a = function () {
    function z(c) {
      this.value0 = c;
    }

    z.create = function (c) {
      return new z(c);
    };

    return z;
  }();

  var f = function () {
    function z(c) {
      this.value0 = c;
    }

    z.create = function (c) {
      return new z(c);
    };

    return z;
  }(),
      n = function () {
    function z(c) {
      this.value0 = c;
    }

    z.create = function (c) {
      return new z(c);
    };

    return z;
  }(),
      p = function () {
    function z(c) {
      this.value0 = c;
    }

    z.create = function (c) {
      return new z(c);
    };

    return z;
  }(),
      g = function () {
    function z(c) {
      this.value0 = c;
    }

    z.create = function (c) {
      return new z(c);
    };

    return z;
  }(),
      q = function () {
    function z(c) {
      this.value0 = c;
    }

    z.create = function (c) {
      return new z(c);
    };

    return z;
  }(),
      w = function () {
    function z(c) {
      this.value0 = c;
    }

    z.create = function (c) {
      return new z(c);
    };

    return z;
  }();

  b.ArrayView = a;
  b.Blob = f;
  b.Document = n;
  b.String = p;
  b.FormData = g;
  b.FormURLEncoded = q;
  b.Json = w;

  b.toMediaType = function (z) {
    return z instanceof q ? new d.Just(k.applicationFormURLEncoded) : z instanceof w ? new d.Just(k.applicationJSON) : d.Nothing.value;
  };
})(PS);

(function (a) {
  a.boolConj = function (b) {
    return function (d) {
      return b && d;
    };
  };

  a.boolDisj = function (b) {
    return function (d) {
      return b || d;
    };
  };

  a.boolNot = function (b) {
    return !b;
  };
})(PS["Data.HeytingAlgebra"] = PS["Data.HeytingAlgebra"] || {});

(function (a) {
  a["Data.HeytingAlgebra"] = a["Data.HeytingAlgebra"] || {};
  var b = a["Data.HeytingAlgebra"];
  a = a["Data.HeytingAlgebra"];
  var d = new function (k, f, n, p, g, q) {
    this.conj = k;
    this.disj = f;
    this.ff = n;
    this.implies = p;
    this.not = g;
    this.tt = q;
  }(a.boolConj, a.boolDisj, !1, function (k) {
    return function (f) {
      return (0, d.disj)((0, d.not)(k))(f);
    };
  }, a.boolNot, !0);

  b.ff = function (k) {
    return k.ff;
  };

  b.disj = function (k) {
    return k.disj;
  };

  b.heytingAlgebraBoolean = d;
})(PS);

(function (a) {
  a.concatString = function (b) {
    return function (d) {
      return b + d;
    };
  };

  a.concatArray = function (b) {
    return function (d) {
      return 0 === b.length ? d : 0 === d.length ? b : b.concat(d);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};
  var b = a["Data.Semigroup"],
      d = a["Data.Semigroup"],
      k = a["Data.Unit"];

  a = function a(p) {
    this.append = p;
  };

  var f = new a(function (p) {
    return function (g) {
      return k.unit;
    };
  }),
      n = new a(d.concatString);
  d = new a(d.concatArray);
  b.Semigroup = a;

  b.append = function (p) {
    return p.append;
  };

  b.semigroupString = n;
  b.semigroupUnit = f;
  b.semigroupArray = d;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var b = a["Data.Monoid"],
      d = a["Data.Semigroup"],
      k = function k(p, g) {
    this.Semigroup0 = p;
    this.mempty = g;
  };

  a = new k(function () {
    return d.semigroupUnit;
  }, a["Data.Unit"].unit);
  var f = new k(function () {
    return d.semigroupString;
  }, ""),
      n = new k(function () {
    return d.semigroupArray;
  }, []);
  b.Monoid = k;

  b.mempty = function (p) {
    return p.mempty;
  };

  b.monoidUnit = a;
  b.monoidString = f;
  b.monoidArray = n;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var b = a["Data.Monoid.Disj"],
      d = a["Data.HeytingAlgebra"],
      k = a["Data.Monoid"],
      f = a["Data.Semigroup"],
      n = function n(p) {
    return new f.Semigroup(function (g) {
      return function (q) {
        return d.disj(p)(g)(q);
      };
    });
  };

  b.Disj = function (p) {
    return p;
  };

  b.monoidDisj = function (p) {
    return new k.Monoid(function () {
      return n(p);
    }, d.ff(p));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var b = a["Data.Newtype"],
      d = a["Data.Functor"],
      k = function k(f, n) {
    this.unwrap = f;
    this.wrap = n;
  };

  a = new k(function (f) {
    return f;
  }, a["Data.Monoid.Disj"].Disj);

  b.unwrap = function (f) {
    return f.unwrap;
  };

  b.Newtype = k;

  b.alaF = function (f) {
    return function (n) {
      return function (p) {
        return function (g) {
          return function (q) {
            return function (w) {
              var z = d.map(n)(g.unwrap),
                  c = d.map(f)(p.wrap);
              return function (h) {
                return z(w(c(h)));
              };
            };
          };
        };
      };
    };
  };

  b.newtypeDisj = a;
})(PS);

(function (a) {
  a["Data.MediaType"] = a["Data.MediaType"] || {};
  var b = a["Data.MediaType"];
  a = new a["Data.Newtype"].Newtype(function (d) {
    return d;
  }, function (d) {
    return d;
  });
  b.newtypeMediaType = a;
})(PS);

(function (a) {
  a["Affjax.RequestHeader"] = a["Affjax.RequestHeader"] || {};

  var b = a["Affjax.RequestHeader"],
      d = a["Data.MediaType"],
      k = a["Data.Newtype"],
      f = function () {
    function g(q) {
      this.value0 = q;
    }

    g.create = function (q) {
      return new g(q);
    };

    return g;
  }(),
      n = function () {
    function g(q) {
      this.value0 = q;
    }

    g.create = function (q) {
      return new g(q);
    };

    return g;
  }(),
      p = function () {
    function g(q, w) {
      this.value0 = q;
      this.value1 = w;
    }

    g.create = function (q) {
      return function (w) {
        return new g(q, w);
      };
    };

    return g;
  }();

  b.Accept = f;
  b.ContentType = n;

  b.name = function (g) {
    if (g instanceof f) return "Accept";
    if (g instanceof n) return "Content-Type";
    if (g instanceof p) return g.value0;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): " + [g.constructor.name]);
  };

  b.value = function (g) {
    if (g instanceof f || g instanceof n) return k.unwrap(d.newtypeMediaType)(g.value0);
    if (g instanceof p) return g.value1;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): " + [g.constructor.name]);
  };
})(PS);

(function (a) {
  a["Affjax.ResponseFormat"] = a["Affjax.ResponseFormat"] || {};

  var b = a["Affjax.ResponseFormat"],
      d = a["Control.Category"],
      k = a["Data.Maybe"],
      f = a["Data.MediaType.Common"],
      n = function () {
    function c(h) {
      this.value0 = h;
    }

    c.create = function (h) {
      return new c(h);
    };

    return c;
  }(),
      p = function () {
    function c(h) {
      this.value0 = h;
    }

    c.create = function (h) {
      return new c(h);
    };

    return c;
  }(),
      g = function () {
    function c(h) {
      this.value0 = h;
    }

    c.create = function (h) {
      return new c(h);
    };

    return c;
  }(),
      q = function () {
    function c(h) {
      this.value0 = h;
    }

    c.create = function (h) {
      return new c(h);
    };

    return c;
  }(),
      w = function () {
    function c(h) {
      this.value0 = h;
    }

    c.create = function (h) {
      return new c(h);
    };

    return c;
  }(),
      z = function () {
    function c(h) {
      this.value0 = h;
    }

    c.create = function (h) {
      return new c(h);
    };

    return c;
  }();

  a = new w(d.identity(d.categoryFn));
  d = new z(d.identity(d.categoryFn));
  b.ArrayBuffer = n;
  b.Blob = p;
  b.Document = g;
  b.Json = q;
  b.String = w;
  b.Ignore = z;
  b.string = a;
  b.ignore = d;

  b.toResponseType = function (c) {
    if (c instanceof n) return "arraybuffer";
    if (c instanceof p) return "blob";
    if (c instanceof g) return "document";
    if (c instanceof q || c instanceof w) return "text";
    if (c instanceof z) return "";
    throw Error("Failed pattern match at Affjax.ResponseFormat (line 46, column 3 - line 52, column 19): " + [c.constructor.name]);
  };

  b.toMediaType = function (c) {
    return c instanceof q ? new k.Just(f.applicationJSON) : k.Nothing.value;
  };
})(PS);

(function (a) {
  a["Affjax.ResponseHeader"] = a["Affjax.ResponseHeader"] || {};
  a = a["Affjax.ResponseHeader"];

  var b = function () {
    function d(k, f) {
      this.value0 = k;
      this.value1 = f;
    }

    d.create = function (k) {
      return function (f) {
        return new d(k, f);
      };
    };

    return d;
  }();

  a.ResponseHeader = b;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var b = a["Control.Monad"],
      d = a["Control.Applicative"],
      k = a["Control.Bind"];

  a = function a(n, p) {
    this.Applicative0 = n;
    this.Bind1 = p;
  };

  var f = new a(function () {
    return d.applicativeArray;
  }, function () {
    return k.bindArray;
  });
  b.Monad = a;

  b.ap = function (n) {
    return function (p) {
      return function (g) {
        return k.bind(n.Bind1())(p)(function (q) {
          return k.bind(n.Bind1())(g)(function (w) {
            return d.pure(n.Applicative0())(q(w));
          });
        });
      };
    };
  };

  b.monadArray = f;
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var b = a["Data.Bifunctor"],
      d = a["Control.Category"];

  b.bimap = function (k) {
    return k.bimap;
  };

  b.Bifunctor = function (k) {
    this.bimap = k;
  };

  b.lmap = function (k) {
    return function (f) {
      return (0, k.bimap)(f)(d.identity(d.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var b = a["Data.Either"],
      d = a["Control.Applicative"],
      k = a["Control.Apply"],
      f = a["Control.Bind"],
      n = a["Control.Monad"],
      p = a["Data.Bifunctor"],
      g = a["Data.Function"],
      q = a["Data.Functor"],
      w = a["Data.Maybe"],
      z = function () {
    function u(D) {
      this.value0 = D;
    }

    u.create = function (D) {
      return new u(D);
    };

    return u;
  }(),
      c = function () {
    function u(D) {
      this.value0 = D;
    }

    u.create = function (D) {
      return new u(D);
    };

    return u;
  }(),
      h = new q.Functor(function (u) {
    return function (D) {
      if (D instanceof z) return new z(D.value0);
      if (D instanceof c) return new c(u(D.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [D.constructor.name]);
    };
  });

  a = function a(u) {
    return function (D) {
      return function (H) {
        if (H instanceof z) return u(H.value0);
        if (H instanceof c) return D(H.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [u.constructor.name, D.constructor.name, H.constructor.name]);
      };
    };
  };

  g = a(g["const"](w.Nothing.value))(w.Just.create);
  p = new p.Bifunctor(function (u) {
    return function (D) {
      return function (H) {
        if (H instanceof z) return new z(u(H.value0));
        if (H instanceof c) return new c(D(H.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [u.constructor.name, D.constructor.name, H.constructor.name]);
      };
    };
  });
  var e = new k.Apply(function () {
    return h;
  }, function (u) {
    return function (D) {
      if (u instanceof z) return new z(u.value0);
      if (u instanceof c) return q.map(h)(u.value0)(D);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [u.constructor.name, D.constructor.name]);
    };
  }),
      l = new f.Bind(function () {
    return e;
  }, a(function (u) {
    return function (D) {
      return new z(u);
    };
  })(function (u) {
    return function (D) {
      return D(u);
    };
  })),
      t = new d.Applicative(function () {
    return e;
  }, c.create);
  d = new n.Monad(function () {
    return t;
  }, function () {
    return l;
  });
  b.Left = z;
  b.Right = c;
  b.either = a;

  b.note = function (u) {
    return w.maybe(new z(u))(c.create);
  };

  b.hush = g;
  b.functorEither = h;
  b.bifunctorEither = p;
  b.applicativeEither = t;
  b.bindEither = l;
  b.monadEither = d;
})(PS);

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var b = a["Control.Monad.Error.Class"],
      d = a["Control.Applicative"],
      k = a["Data.Either"],
      f = a["Data.Functor"];

  b.throwError = function (n) {
    return n.throwError;
  };

  b.MonadThrow = function (n, p) {
    this.Monad0 = n;
    this.throwError = p;
  };

  b.MonadError = function (n, p) {
    this.MonadThrow0 = n;
    this.catchError = p;
  };

  b["try"] = function (n) {
    return function (p) {
      return (0, n.catchError)(f.map(n.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(k.Right.create)(p))(function () {
        var g = d.pure(n.MonadThrow0().Monad0().Applicative0());
        return function (q) {
          return g(k.Left.create(q));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Alt"] = a["Control.Alt"] || {};
  var b = a["Control.Alt"],
      d = a["Data.Functor"],
      k = a["Data.Semigroup"];

  a = function a(f, n) {
    this.Functor0 = f;
    this.alt = n;
  };

  k = new a(function () {
    return d.functorArray;
  }, k.append(k.semigroupArray));
  b.Alt = a;

  b.alt = function (f) {
    return f.alt;
  };

  b.altArray = k;
})(PS);

(function (a) {
  a["Control.Monad.Trans.Class"] = a["Control.Monad.Trans.Class"] || {};
  a = a["Control.Monad.Trans.Class"];

  a.lift = function (b) {
    return b.lift;
  };

  a.MonadTrans = function (b) {
    this.lift = b;
  };
})(PS);

(function (a) {
  a["Control.Monad.Writer.Class"] = a["Control.Monad.Writer.Class"] || {};
  a = a["Control.Monad.Writer.Class"];

  a.tell = function (b) {
    return b.tell;
  };

  a.MonadTell = function (b, d) {
    this.Monad0 = b;
    this.tell = d;
  };
})(PS);

(function (a) {
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var b = a["Control.Monad.Except.Trans"],
      d = a["Control.Alt"],
      k = a["Control.Applicative"],
      f = a["Control.Apply"],
      n = a["Control.Bind"],
      p = a["Control.Monad"],
      g = a["Control.Monad.Error.Class"],
      q = a["Control.Monad.Trans.Class"],
      w = a["Control.Monad.Writer.Class"],
      z = a["Data.Either"],
      c = a["Data.Functor"],
      h = a["Data.Semigroup"],
      e = function e(r) {
    return r;
  };

  a = new a["Data.Newtype"].Newtype(function (r) {
    return r;
  }, e);

  var l = new q.MonadTrans(function (r) {
    return function (M) {
      return n.bind(r.Bind1())(M)(function (F) {
        return k.pure(r.Applicative0())(new z.Right(F));
      });
    };
  }),
      t = function t(r) {
    return function (M) {
      return r(M);
    };
  },
      u = function u(r) {
    return new c.Functor(function (M) {
      return t(c.map(r)(c.map(z.functorEither)(M)));
    });
  },
      D = function D(r) {
    return new p.Monad(function () {
      return y(r);
    }, function () {
      return H(r);
    });
  },
      H = function H(r) {
    return new n.Bind(function () {
      return I(r);
    }, function (M) {
      return function (F) {
        return n.bind(r.Bind1())(M)(z.either(function () {
          var E = k.pure(r.Applicative0());
          return function (J) {
            return E(z.Left.create(J));
          };
        }())(function (E) {
          return F(E);
        }));
      };
    });
  },
      I = function I(r) {
    return new f.Apply(function () {
      return u(r.Bind1().Apply0().Functor0());
    }, p.ap(D(r)));
  },
      y = function y(r) {
    return new k.Applicative(function () {
      return I(r);
    }, function () {
      var M = k.pure(r.Applicative0());
      return function (F) {
        return M(z.Right.create(F));
      };
    }());
  };

  b.ExceptT = e;

  b.runExceptT = function (r) {
    return r;
  };

  b.withExceptT = function (r) {
    return function (M) {
      return function (F) {
        return c.map(r)(function (E) {
          return function (J) {
            if (J instanceof z.Right) return new z.Right(J.value0);
            if (J instanceof z.Left) return new z.Left(E(J.value0));
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 42, column 3 - line 42, column 32): " + [E.constructor.name, J.constructor.name]);
          };
        }(M))(F);
      };
    };
  };

  b.mapExceptT = t;
  b.newtypeExceptT = a;
  b.functorExceptT = u;
  b.applicativeExceptT = y;
  b.bindExceptT = H;

  b.altExceptT = function (r) {
    return function (M) {
      return new d.Alt(function () {
        return u(M.Bind1().Apply0().Functor0());
      }, function (F) {
        return function (E) {
          return n.bind(M.Bind1())(F)(function (J) {
            if (J instanceof z.Right) return k.pure(M.Applicative0())(new z.Right(J.value0));
            if (J instanceof z.Left) return n.bind(M.Bind1())(E)(function (N) {
              if (N instanceof z.Right) return k.pure(M.Applicative0())(new z.Right(N.value0));
              if (N instanceof z.Left) return k.pure(M.Applicative0())(new z.Left(h.append(r)(J.value0)(N.value0)));
              throw Error("Failed pattern match at Control.Monad.Except.Trans (line 86, column 9 - line 88, column 49): " + [N.constructor.name]);
            });
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 82, column 5 - line 88, column 49): " + [J.constructor.name]);
          });
        };
      });
    };
  };

  b.monadThrowExceptT = function (r) {
    return new g.MonadThrow(function () {
      return D(r);
    }, function () {
      var M = k.pure(r.Applicative0());
      return function (F) {
        return M(z.Left.create(F));
      };
    }());
  };

  b.monadTellExceptT = function (r) {
    return new w.MonadTell(function () {
      return D(r.Monad0());
    }, function () {
      var M = q.lift(l)(r.Monad0()),
          F = w.tell(r);
      return function (E) {
        return M(F(E));
      };
    }());
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var b = a["Data.Identity"],
      d = a["Control.Applicative"],
      k = a["Control.Apply"],
      f = a["Control.Bind"],
      n = a["Control.Monad"],
      p = a["Data.Functor"],
      g = function g(h) {
    return h;
  };

  a = new a["Data.Newtype"].Newtype(function (h) {
    return h;
  }, g);
  var q = new p.Functor(function (h) {
    return function (e) {
      return h(e);
    };
  }),
      w = new k.Apply(function () {
    return q;
  }, function (h) {
    return function (e) {
      return h(e);
    };
  }),
      z = new f.Bind(function () {
    return w;
  }, function (h) {
    return function (e) {
      return e(h);
    };
  }),
      c = new d.Applicative(function () {
    return w;
  }, g);
  d = new n.Monad(function () {
    return c;
  }, function () {
    return z;
  });
  b.Identity = g;
  b.newtypeIdentity = a;
  b.functorIdentity = q;
  b.applicativeIdentity = c;
  b.monadIdentity = d;
})(PS);

(function (a) {
  a["Control.Monad.Except"] = a["Control.Monad.Except"] || {};
  var b = a["Control.Monad.Except"],
      d = a["Control.Monad.Except.Trans"],
      k = a["Data.Identity"],
      f = a["Data.Newtype"];
  a = d.withExceptT(k.functorIdentity);

  var n = function () {
    var p = f.unwrap(k.newtypeIdentity);
    return function (g) {
      return p(d.runExceptT(g));
    };
  }();

  b.runExcept = n;

  b.mapExcept = function (p) {
    return d.mapExceptT(function () {
      var g = f.unwrap(k.newtypeIdentity);
      return function (q) {
        return k.Identity(p(g(q)));
      };
    }());
  };

  b.withExcept = a;
})(PS);

(function (a) {
  a.fromObject = function (b) {
    return b;
  };

  a.stringify = function (b) {
    return JSON.stringify(b);
  };
})(PS["Data.Argonaut.Core"] = PS["Data.Argonaut.Core"] || {});

(function (a) {
  function b(d) {
    return function (k) {
      var f = [],
          n;

      for (n in k) {
        hasOwnProperty.call(k, n) && f.push(d(n)(k[n]));
      }

      return f;
    };
  }

  a._copyST = function (d) {
    return function () {
      var k = {},
          f;

      for (f in d) {
        hasOwnProperty.call(d, f) && (k[f] = d[f]);
      }

      return k;
    };
  };

  a.empty = {};

  a.runST = function (d) {
    return d();
  };

  a._foldM = function (d) {
    return function (k) {
      return function (f) {
        return function (n) {
          function p(w) {
            return function (z) {
              return k(z)(w)(n[w]);
            };
          }

          var g = f,
              q;

          for (q in n) {
            hasOwnProperty.call(n, q) && (g = d(g)(p(q)));
          }

          return g;
        };
      };
    };
  };

  a._lookup = function (d, k, f, n) {
    return f in n ? k(n[f]) : d;
  };

  a._lookupST = function (d, k, f, n) {
    return function () {
      return f in n ? k(n[f]) : d;
    };
  };

  a.keys = Object.keys || b(function (d) {
    return function () {
      return d;
    };
  });
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});

(function (a) {
  a.map_ = function (b) {
    return function (d) {
      return function () {
        return b(d());
      };
    };
  };

  a.pure_ = function (b) {
    return function () {
      return b;
    };
  };

  a.bind_ = function (b) {
    return function (d) {
      return function () {
        return d(b())();
      };
    };
  };
})(PS["Control.Monad.ST.Internal"] = PS["Control.Monad.ST.Internal"] || {});

(function (a) {
  a["Control.Monad.ST.Internal"] = a["Control.Monad.ST.Internal"] || {};
  var b = a["Control.Monad.ST.Internal"],
      d = a["Control.Monad.ST.Internal"],
      k = a["Control.Applicative"],
      f = a["Control.Apply"],
      n = a["Control.Bind"],
      p = a["Control.Monad"],
      g = new a["Data.Functor"].Functor(d.map_);
  a = new p.Monad(function () {
    return z;
  }, function () {
    return q;
  });
  var q = new n.Bind(function () {
    return w;
  }, d.bind_),
      w = new f.Apply(function () {
    return g;
  }, p.ap(a)),
      z = new k.Applicative(function () {
    return w;
  }, d.pure_);
  b.applicativeST = z;
  b.monadST = a;
})(PS);

(function (a) {
  a.foldrArray = function (b) {
    return function (d) {
      return function (k) {
        for (var f = d, n = k.length - 1; 0 <= n; n--) {
          f = b(k[n])(f);
        }

        return f;
      };
    };
  };

  a.foldlArray = function (b) {
    return function (d) {
      return function (k) {
        for (var f = d, n = k.length, p = 0; p < n; p++) {
          f = b(f)(k[p]);
        }

        return f;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  var b = a["Control.Plus"],
      d = a["Control.Alt"];

  a = function a(f, n) {
    this.Alt0 = f;
    this.empty = n;
  };

  var k = new a(function () {
    return d.altArray;
  }, []);
  b.Plus = a;

  b.empty = function (f) {
    return f.empty;
  };

  b.plusArray = k;
})(PS);

(function (a) {
  a["Data.Foldable"] = a["Data.Foldable"] || {};
  var b = a["Data.Foldable"],
      d = a["Data.Foldable"],
      k = a["Control.Alt"],
      f = a["Control.Applicative"],
      n = a["Control.Apply"],
      p = a["Control.Category"],
      g = a["Control.Plus"],
      q = a["Data.Function"],
      w = a["Data.Functor"],
      z = a["Data.Maybe"],
      c = a["Data.Monoid"],
      h = a["Data.Monoid.Disj"],
      e = a["Data.Newtype"],
      l = a["Data.Semigroup"],
      t = a["Data.Unit"];

  a = function a(y, r, M) {
    this.foldMap = y;
    this.foldl = r;
    this.foldr = M;
  };

  var u = function u(y) {
    return function (r) {
      return function (M) {
        return (0, r.foldr)(function () {
          var F = n.applySecond(y.Apply0());
          return function (E) {
            return F(M(E));
          };
        }())(f.pure(y)(t.unit));
      };
    };
  },
      D = new a(function (y) {
    return function (r) {
      return function (M) {
        if (M instanceof z.Nothing) return c.mempty(y);
        if (M instanceof z.Just) return r(M.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [r.constructor.name, M.constructor.name]);
      };
    };
  }, function (y) {
    return function (r) {
      return function (M) {
        if (M instanceof z.Nothing) return r;
        if (M instanceof z.Just) return y(r)(M.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [y.constructor.name, r.constructor.name, M.constructor.name]);
      };
    };
  }, function (y) {
    return function (r) {
      return function (M) {
        if (M instanceof z.Nothing) return r;
        if (M instanceof z.Just) return y(M.value0)(r);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [y.constructor.name, r.constructor.name, M.constructor.name]);
      };
    };
  }),
      H = function H(y) {
    return function (r) {
      return function (M) {
        return (0, y.foldr)(function (F) {
          return function (E) {
            return l.append(r.Semigroup0())(M(F))(E);
          };
        })(c.mempty(r));
      };
    };
  },
      I = new a(function (y) {
    return H(I)(y);
  }, d.foldlArray, d.foldrArray);

  b.Foldable = a;

  b.foldr = function (y) {
    return y.foldr;
  };

  b.foldl = function (y) {
    return y.foldl;
  };

  b.foldMap = function (y) {
    return y.foldMap;
  };

  b.fold = function (y) {
    return function (r) {
      return (0, y.foldMap)(r)(p.identity(p.categoryFn));
    };
  };

  b.traverse_ = u;

  b.for_ = function (y) {
    return function (r) {
      return q.flip(u(y)(r));
    };
  };

  b.oneOf = function (y) {
    return function (r) {
      return (0, y.foldr)(k.alt(r.Alt0()))(g.empty(r));
    };
  };

  b.intercalate = function (y) {
    return function (r) {
      return function (M) {
        return function (F) {
          return (0, y.foldl)(function (E) {
            return function (J) {
              return E.init ? {
                init: !1,
                acc: J
              } : {
                init: !1,
                acc: l.append(r.Semigroup0())(E.acc)(l.append(r.Semigroup0())(M)(J))
              };
            };
          })({
            init: !0,
            acc: c.mempty(r)
          })(F).acc;
        };
      };
    };
  };

  b.any = function (y) {
    return function (r) {
      return e.alaF(w.functorFn)(w.functorFn)(e.newtypeDisj)(e.newtypeDisj)(h.Disj)((0, y.foldMap)(h.monoidDisj(r)));
    };
  };

  b.find = function (y) {
    return function (r) {
      return (0, y.foldl)(function (M) {
        return function (F) {
          return M instanceof z.Nothing && r(F) ? new z.Just(F) : M;
        };
      })(z.Nothing.value);
    };
  };

  b.foldableArray = I;
  b.foldableMaybe = D;
})(PS);

(function (a) {
  a.runFn2 = function (b) {
    return function (d) {
      return function (k) {
        return b(d, k);
      };
    };
  };

  a.runFn4 = function (b) {
    return function (d) {
      return function (k) {
        return function (f) {
          return function (n) {
            return b(d, k, f, n);
          };
        };
      };
    };
  };
})(PS["Data.Function.Uncurried"] = PS["Data.Function.Uncurried"] || {});

(function (a) {
  a["Data.Function.Uncurried"] = a["Data.Function.Uncurried"] || {};
  var b = a["Data.Function.Uncurried"];
  a = a["Data.Function.Uncurried"];
  b.runFn2 = a.runFn2;
  b.runFn4 = a.runFn4;
})(PS);

(function (a) {
  a["new"] = function () {
    return {};
  };

  a.poke = function (b) {
    return function (d) {
      return function (k) {
        return function () {
          k[b] = d;
          return k;
        };
      };
    };
  };

  a["delete"] = function (b) {
    return function (d) {
      return function () {
        delete d[b];
        return d;
      };
    };
  };
})(PS["Foreign.Object.ST"] = PS["Foreign.Object.ST"] || {});

(function (a) {
  a["Foreign.Object.ST"] = a["Foreign.Object.ST"] || {};
  var b = a["Foreign.Object.ST"];
  a = a["Foreign.Object.ST"];
  b["new"] = a["new"];
  b.poke = a.poke;
  b["delete"] = a["delete"];
})(PS);

(function (a) {
  a.unsafeCoerce = function (b) {
    return b;
  };
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});

(function (a) {
  a["Unsafe.Coerce"] = a["Unsafe.Coerce"] || {};
  a["Unsafe.Coerce"].unsafeCoerce = a["Unsafe.Coerce"].unsafeCoerce;
})(PS);

(function (a) {
  a["Foreign.Object"] = a["Foreign.Object"] || {};

  var b = a["Foreign.Object"],
      d = a["Foreign.Object"],
      k = a["Control.Applicative"],
      f = a["Control.Bind"],
      n = a["Control.Monad.ST.Internal"],
      p = a["Data.Foldable"],
      g = a["Data.Maybe"],
      q = a["Foreign.Object.ST"],
      w = a["Unsafe.Coerce"],
      z = d._copyST,
      c = function c(u) {
    return function (D) {
      return d.runST(function () {
        var H = z(D)();
        u(H)();
        return H;
      });
    };
  },
      h = a["Data.Function.Uncurried"].runFn4(d._lookup)(g.Nothing.value)(g.Just.create),
      e = function e(u) {
    return function (D) {
      return c(q.poke(u)(D));
    };
  },
      l = function l(u) {
    return function (D) {
      return function (H) {
        return d._foldM(f.bind(u.Bind1()))(D)(k.pure(u.Applicative0())(H));
      };
    };
  },
      t = function t(u) {
    return c(function (D) {
      return l(n.monadST)(function (H) {
        return function (I) {
          return function (y) {
            return q.poke(I)(y)(H);
          };
        };
      })(D)(u);
    });
  };

  b.lookup = h;

  b.fromFoldableWith = function (u) {
    return function (D) {
      return function (H) {
        return d.runST(function () {
          var I = q["new"]();
          p.for_(n.applicativeST)(u)(H)(function (y) {
            return function () {
              var r = d._lookupST(y.value1, D(y.value1), y.value0, I)();

              return q.poke(y.value0)(r)(I)();
            };
          })();
          return I;
        });
      };
    };
  };

  b.fromHomogeneous = function (u) {
    return w.unsafeCoerce;
  };

  b.alter = function (u) {
    return function (D) {
      return function (H) {
        var I = u(h(D)(H));
        if (I instanceof g.Nothing) return c(q["delete"](D))(H);
        if (I instanceof g.Just) return e(D)(I.value0)(H);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [I.constructor.name]);
      };
    };
  };

  b.unions = function (u) {
    return p.foldl(u)(t)(d.empty);
  };

  b.empty = d.empty;
  b.keys = d.keys;
})(PS);

(function (a) {
  a["Data.Argonaut.Core"] = a["Data.Argonaut.Core"] || {};
  var b = a["Data.Argonaut.Core"],
      d = a["Data.Argonaut.Core"];
  a = d.fromObject(a["Foreign.Object"].empty);
  b.jsonEmptyObject = a;
  b.stringify = d.stringify;
})(PS);

(function (a) {
  a._jsonParser = function (b, d, k) {
    try {
      return d(JSON.parse(k));
    } catch (f) {
      return b(f.message);
    }
  };
})(PS["Data.Argonaut.Parser"] = PS["Data.Argonaut.Parser"] || {});

(function (a) {
  a["Data.Argonaut.Parser"] = a["Data.Argonaut.Parser"] || {};
  var b = a["Data.Argonaut.Parser"],
      d = a["Data.Either"];

  a["Data.Argonaut.Parser"].jsonParser = function (k) {
    return b._jsonParser(d.Left.create, d.Right.create, k);
  };
})(PS);

(function (a) {
  a.range = function (k) {
    return function (f) {
      for (var n = k > f ? -1 : 1, p = Array(n * (f - k) + 1), g = k, q = 0; g !== f;) {
        p[q++] = g, g += n;
      }

      p[q] = g;
      return p;
    };
  };

  var b = function b(k) {
    return function (f) {
      return 1 > k ? [] : Array(k).fill(f);
    };
  },
      d = function d(k) {
    return function (f) {
      for (var n = [], p = 0, g = 0; g < k; g++) {
        n[p++] = f;
      }

      return n;
    };
  };

  a.replicate = "function" === typeof Array.prototype.fill ? b : d;

  a.fromFoldableImpl = function () {
    function k(p, g) {
      this.head = p;
      this.tail = g;
    }

    function f(p) {
      return function (g) {
        return new k(p, g);
      };
    }

    var n = {};
    return function (p) {
      return function (g) {
        var q = [],
            w = 0;

        for (g = p(f)(n)(g); g !== n;) {
          q[w++] = g.head, g = g.tail;
        }

        return q;
      };
    };
  }();

  a.length = function (k) {
    return k.length;
  };

  a.cons = function (k) {
    return function (f) {
      return [k].concat(f);
    };
  };

  a.snoc = function (k) {
    return function (f) {
      var n = k.slice();
      n.push(f);
      return n;
    };
  };

  a["uncons'"] = function (k) {
    return function (f) {
      return function (n) {
        return 0 === n.length ? k({}) : f(n[0])(n.slice(1));
      };
    };
  };

  a.indexImpl = function (k) {
    return function (f) {
      return function (n) {
        return function (p) {
          return 0 > p || p >= n.length ? f : k(n[p]);
        };
      };
    };
  };

  a._updateAt = function (k) {
    return function (f) {
      return function (n) {
        return function (p) {
          return function (g) {
            if (0 > n || n >= g.length) return f;
            g = g.slice();
            g[n] = p;
            return k(g);
          };
        };
      };
    };
  };

  a.filter = function (k) {
    return function (f) {
      return f.filter(k);
    };
  };

  a.slice = function (k) {
    return function (f) {
      return function (n) {
        return n.slice(k, f);
      };
    };
  };

  a.zipWith = function (k) {
    return function (f) {
      return function (n) {
        for (var p = f.length < n.length ? f.length : n.length, g = Array(p), q = 0; q < p; q++) {
          g[q] = k(f[q])(n[q]);
        }

        return g;
      };
    };
  };
})(PS["Data.Array"] = PS["Data.Array"] || {});

(function (a) {
  a["Data.Boolean"] = a["Data.Boolean"] || {};
  a["Data.Boolean"].otherwise = !0;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var b = a["Data.Tuple"];
  a = a["Data.Functor"];

  var d = function () {
    function k(f, n) {
      this.value0 = f;
      this.value1 = n;
    }

    k.create = function (f) {
      return function (n) {
        return new k(f, n);
      };
    };

    return k;
  }();

  a = new a.Functor(function (k) {
    return function (f) {
      return new d(f.value0, k(f.value1));
    };
  });
  b.Tuple = d;

  b.fst = function (k) {
    return k.value0;
  };

  b.snd = function (k) {
    return k.value1;
  };

  b.functorTuple = a;
})(PS);

(function (a) {
  a["Data.Array"] = a["Data.Array"] || {};
  var b = a["Data.Array"],
      d = a["Data.Array"],
      k = a["Control.Bind"],
      f = a["Control.Category"],
      n = a["Data.Boolean"],
      p = a["Data.Foldable"],
      g = a["Data.Function"],
      q = a["Data.Maybe"];
  a = d.zipWith(a["Data.Tuple"].Tuple.create);

  var w = d._updateAt(q.Just.create)(q.Nothing.value),
      z = d["uncons'"](g["const"](q.Nothing.value))(function (t) {
    return function (u) {
      return new q.Just({
        head: t,
        tail: u
      });
    };
  }),
      c = function c(t) {
    return [t];
  },
      h = function h(t) {
    return 0 === d.length(t);
  },
      e = d.indexImpl(q.Just.create)(q.Nothing.value),
      l = g.flip(k.bind(k.bindArray));

  k = function (t) {
    return l(function () {
      var u = q.maybe([])(c);
      return function (D) {
        return u(t(D));
      };
    }());
  }(f.identity(f.categoryFn));

  b.fromFoldable = function (t) {
    return d.fromFoldableImpl(p.foldr(t));
  };

  b["null"] = h;

  b.head = function (t) {
    return e(t)(0);
  };

  b.init = function (t) {
    if (h(t)) return q.Nothing.value;
    if (n.otherwise) return new q.Just(d.slice(0)(d.length(t) - 1 | 0)(t));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [t.constructor.name]);
  };

  b.uncons = z;
  b.index = e;
  b.updateAt = w;
  b.concatMap = l;
  b.catMaybes = k;
  b.zip = a;
  b.range = d.range;
  b.replicate = d.replicate;
  b.length = d.length;
  b.cons = d.cons;
  b.snoc = d.snoc;
  b.filter = d.filter;
})(PS);

(function (a) {
  a.toUpper = function (b) {
    return b.toUpperCase();
  };

  a.trim = function (b) {
    return b.trim();
  };

  a.joinWith = function (b) {
    return function (d) {
      return d.join(b);
    };
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});

(function (a) {
  a["Data.String.Common"] = a["Data.String.Common"] || {};
  var b = a["Data.String.Common"];
  a = a["Data.String.Common"];

  b["null"] = function (d) {
    return "" === d;
  };

  b.toUpper = a.toUpper;
  b.trim = a.trim;
  b.joinWith = a.joinWith;
})(PS);

(function (a) {
  a.traverseArrayImpl = function () {
    function b(n) {
      return [n];
    }

    function d(n) {
      return function (p) {
        return [n, p];
      };
    }

    function k(n) {
      return function (p) {
        return function (g) {
          return [n, p, g];
        };
      };
    }

    function f(n) {
      return function (p) {
        return n.concat(p);
      };
    }

    return function (n) {
      return function (p) {
        return function (g) {
          return function (q) {
            return function (w) {
              function z(c, h) {
                switch (h - c) {
                  case 0:
                    return g([]);

                  case 1:
                    return p(b)(q(w[c]));

                  case 2:
                    return n(p(d)(q(w[c])))(q(w[c + 1]));

                  case 3:
                    return n(n(p(k)(q(w[c])))(q(w[c + 1])))(q(w[c + 2]));

                  default:
                    var e = c + 2 * Math.floor((h - c) / 4);
                    return n(p(f)(z(c, e)))(z(e, h));
                }
              }

              return z(0, w.length);
            };
          };
        };
      };
    };
  }();
})(PS["Data.Traversable"] = PS["Data.Traversable"] || {});

(function (a) {
  a["Data.Traversable"] = a["Data.Traversable"] || {};
  var b = a["Data.Traversable"],
      d = a["Data.Traversable"],
      k = a["Control.Applicative"],
      f = a["Control.Apply"],
      n = a["Control.Category"],
      p = a["Data.Foldable"],
      g = a["Data.Functor"],
      q = a["Data.Maybe"];

  a = function a(h, e, l, t) {
    this.Foldable1 = h;
    this.Functor0 = e;
    this.sequence = l;
    this.traverse = t;
  };

  var w = new a(function () {
    return p.foldableMaybe;
  }, function () {
    return q.functorMaybe;
  }, function (h) {
    return function (e) {
      if (e instanceof q.Nothing) return k.pure(h)(q.Nothing.value);
      if (e instanceof q.Just) return g.map(h.Apply0().Functor0())(q.Just.create)(e.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [e.constructor.name]);
    };
  }, function (h) {
    return function (e) {
      return function (l) {
        if (l instanceof q.Nothing) return k.pure(h)(q.Nothing.value);
        if (l instanceof q.Just) return g.map(h.Apply0().Functor0())(q.Just.create)(e(l.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [e.constructor.name, l.constructor.name]);
      };
    };
  }),
      z = function z(h) {
    return function (e) {
      return (0, h.traverse)(e)(n.identity(n.categoryFn));
    };
  },
      c = new a(function () {
    return p.foldableArray;
  }, function () {
    return g.functorArray;
  }, function (h) {
    return z(c)(h);
  }, function (h) {
    return d.traverseArrayImpl(f.apply(h.Apply0()))(g.map(h.Apply0().Functor0()))(k.pure(h));
  });

  b.traverse = function (h) {
    return h.traverse;
  };

  b.sequence = function (h) {
    return h.sequence;
  };

  b["for"] = function (h) {
    return function (e) {
      return function (l) {
        return function (t) {
          return (0, e.traverse)(h)(t)(l);
        };
      };
    };
  };

  b.traversableArray = c;
  b.traversableMaybe = w;
})(PS);

(function (a) {
  a.infinity = Infinity;

  a.readInt = function (b) {
    return function (d) {
      return parseInt(d, b);
    };
  };

  a._encodeURIComponent = function (b) {
    return function (d, k, f) {
      try {
        return k(b(f));
      } catch (n) {
        return d(n.message);
      }
    };
  }(encodeURIComponent);
})(PS.Global = PS.Global || {});

(function (a) {
  a.Global = a.Global || {};
  var b = a.Global,
      d = a.Global,
      k = a["Data.Function"],
      f = a["Data.Maybe"];

  b.encodeURIComponent = function (n) {
    return d._encodeURIComponent(k["const"](f.Nothing.value), f.Just.create, n);
  };

  b.infinity = d.infinity;
  b.readInt = d.readInt;
})(PS);

(function (a) {
  a["Data.FormURLEncoded"] = a["Data.FormURLEncoded"] || {};
  var b = a["Data.FormURLEncoded"],
      d = a["Control.Apply"],
      k = a["Data.Functor"],
      f = a["Data.Maybe"],
      n = a["Data.String.Common"],
      p = a["Data.Traversable"],
      g = a.Global;

  a = function () {
    var q = k.map(f.functorMaybe)(n.joinWith("&")),
        w = p.traverse(p.traversableArray)(f.applicativeMaybe)(function (z) {
      if (z.value1 instanceof f.Nothing) return g.encodeURIComponent(z.value0);
      if (z.value1 instanceof f.Just) return d.apply(f.applyMaybe)(k.map(f.functorMaybe)(function (c) {
        return function (h) {
          return c + ("=" + h);
        };
      })(g.encodeURIComponent(z.value0)))(g.encodeURIComponent(z.value1.value0));
      throw Error("Failed pattern match at Data.FormURLEncoded (line 37, column 18 - line 39, column 108): " + [z.constructor.name]);
    });
    return function (z) {
      return q(w(z));
    };
  }();

  b.encode = a;
})(PS);

(function (a) {
  a.showIntImpl = function (b) {
    return b.toString();
  };

  a.showCharImpl = function (b) {
    var d = b.charCodeAt(0);

    if (32 > d || 127 === d) {
      switch (b) {
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

    return "'" === b || "\\" === b ? "'\\" + b + "'" : "'" + b + "'";
  };

  a.showStringImpl = function (b) {
    var d = b.length;
    return '"' + b.replace(/[\0-\x1F\x7F"\\]/g, function (k, f) {
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

      f += 1;
      f = f < d && "0" <= b[f] && "9" >= b[f] ? "\\&" : "";
      return "\\" + k.charCodeAt(0).toString(10) + f;
    }) + '"';
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};
  var b = a["Data.Show"],
      d = a["Data.Show"];

  a = function a(p) {
    this.show = p;
  };

  var k = new a(d.showStringImpl),
      f = new a(d.showIntImpl);
  d = new a(d.showCharImpl);
  var n = new a(function (p) {
    if (p) return "true";
    if (!p) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [p.constructor.name]);
  });
  b.Show = a;

  b.show = function (p) {
    return p.show;
  };

  b.showBoolean = n;
  b.showInt = f;
  b.showChar = d;
  b.showString = k;
})(PS);

(function (a) {
  a["Data.HTTP.Method"] = a["Data.HTTP.Method"] || {};
  var b = a["Data.HTTP.Method"],
      d = a["Data.Either"];
  a = a["Data.Show"];

  var k = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      f = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      n = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      p = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      g = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      q = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      w = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      z = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      c = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      h = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      e = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      l = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      t = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      u = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      D = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      H = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      I = new a.Show(function (y) {
    if (y instanceof k) return "OPTIONS";
    if (y instanceof f) return "GET";
    if (y instanceof n) return "HEAD";
    if (y instanceof p) return "POST";
    if (y instanceof g) return "PUT";
    if (y instanceof q) return "DELETE";
    if (y instanceof w) return "TRACE";
    if (y instanceof z) return "CONNECT";
    if (y instanceof c) return "PROPFIND";
    if (y instanceof h) return "PROPPATCH";
    if (y instanceof e) return "MKCOL";
    if (y instanceof l) return "COPY";
    if (y instanceof t) return "MOVE";
    if (y instanceof u) return "LOCK";
    if (y instanceof D) return "UNLOCK";
    if (y instanceof H) return "PATCH";
    throw Error("Failed pattern match at Data.HTTP.Method (line 40, column 1 - line 56, column 23): " + [y.constructor.name]);
  });

  d = d.either(a.show(I))(function (y) {
    return y;
  });
  b.GET = f;
  b.print = d;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var b = a["Control.Monad.Rec.Class"],
      d = a["Data.Bifunctor"],
      k = a["Data.Either"],
      f = function () {
    function q(w) {
      this.value0 = w;
    }

    q.create = function (w) {
      return new q(w);
    };

    return q;
  }(),
      n = function () {
    function q(w) {
      this.value0 = w;
    }

    q.create = function (w) {
      return new q(w);
    };

    return q;
  }();

  a = function a(q, w) {
    this.Monad0 = q;
    this.tailRecM = w;
  };

  var p = function p(q) {
    return function (w) {
      w = q(w);

      for (var z = !1, c; !z;) {
        if (c = w, c instanceof f) w = q(c.value0), c = void 0;else if (c instanceof n) z = !0, c = c.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [c.constructor.name]);
      }

      return c;
    };
  },
      g = new a(function () {
    return k.monadEither;
  }, function (q) {
    return function (w) {
      return p(function (z) {
        if (z instanceof k.Left) return new n(new k.Left(z.value0));
        if (z instanceof k.Right && z.value0 instanceof f) return new f(q(z.value0.value0));
        if (z instanceof k.Right && z.value0 instanceof n) return new n(new k.Right(z.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [z.constructor.name]);
      })(q(w));
    };
  });

  d = new d.Bifunctor(function (q) {
    return function (w) {
      return function (z) {
        if (z instanceof f) return new f(q(z.value0));
        if (z instanceof n) return new n(w(z.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [q.constructor.name, w.constructor.name, z.constructor.name]);
      };
    };
  });
  b.Loop = f;
  b.Done = n;
  b.MonadRec = a;

  b.tailRecM = function (q) {
    return q.tailRecM;
  };

  b.bifunctorStep = d;
  b.monadRecEither = g;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var b = a["Data.NonEmpty"],
      d = a["Control.Plus"],
      k = a["Data.Foldable"],
      f = a["Data.Functor"],
      n = a["Data.Semigroup"],
      p = a["Data.Show"],
      g = function () {
    function q(w, z) {
      this.value0 = w;
      this.value1 = z;
    }

    q.create = function (w) {
      return function (z) {
        return new q(w, z);
      };
    };

    return q;
  }();

  b.NonEmpty = g;

  b.singleton = function (q) {
    return function (w) {
      return new g(w, d.empty(q));
    };
  };

  b.showNonEmpty = function (q) {
    return function (w) {
      return new p.Show(function (z) {
        return "(NonEmpty " + (p.show(q)(z.value0) + (" " + (p.show(w)(z.value1) + ")")));
      });
    };
  };

  b.functorNonEmpty = function (q) {
    return new f.Functor(function (w) {
      return function (z) {
        return new g(w(z.value0), f.map(q)(w)(z.value1));
      };
    });
  };

  b.foldableNonEmpty = function (q) {
    return new k.Foldable(function (w) {
      return function (z) {
        return function (c) {
          return n.append(w.Semigroup0())(z(c.value0))(k.foldMap(q)(w)(z)(c.value1));
        };
      };
    }, function (w) {
      return function (z) {
        return function (c) {
          return k.foldl(q)(w)(w(z)(c.value0))(c.value1);
        };
      };
    }, function (w) {
      return function (z) {
        return function (c) {
          return w(c.value0)(k.foldr(q)(w)(z)(c.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var b = a["Data.List.Types"],
      d = a["Control.Alt"],
      k = a["Control.Applicative"],
      f = a["Control.Apply"],
      n = a["Control.Plus"],
      p = a["Data.Foldable"],
      g = a["Data.Function"],
      q = a["Data.Functor"],
      w = a["Data.Monoid"],
      z = a["Data.NonEmpty"],
      c = a["Data.Semigroup"],
      h = a["Data.Show"],
      e = function () {
    function N() {}

    N.value = new N();
    return N;
  }(),
      l = function () {
    function N(R, T) {
      this.value0 = R;
      this.value1 = T;
    }

    N.create = function (R) {
      return function (T) {
        return new N(R, T);
      };
    };

    return N;
  }(),
      t = new q.Functor(function (N) {
    return function (R) {
      return function (T) {
        function L(V, A) {
          if (A instanceof l && A.value1 instanceof l && A.value1.value1 instanceof l) O = new l(A, V), T = A.value1.value1.value1;else return G = !0, function (K) {
            return function (C) {
              for (var ha = K, sa = !1, za; !sa;) {
                za = ha;
                var Ca = C;
                za instanceof l && za.value0 instanceof l && za.value0.value1 instanceof l && za.value0.value1.value1 instanceof l ? (ha = za.value1, C = new l(N(za.value0.value0), new l(N(za.value0.value1.value0), new l(N(za.value0.value1.value1.value0), Ca))), za = void 0) : (sa = !0, za = Ca);
              }

              return za;
            };
          }(V)(function (K) {
            return K instanceof l && K.value1 instanceof l && K.value1.value1 instanceof e ? new l(N(K.value0), new l(N(K.value1.value0), e.value)) : K instanceof l && K.value1 instanceof e ? new l(N(K.value0), e.value) : e.value;
          }(A));
        }

        for (var O = R, G = !1, x; !G;) {
          x = L(O, T);
        }

        return x;
      };
    }(e.value);
  }),
      u = z.functorNonEmpty(t),
      D = new p.Foldable(function (N) {
    return function (R) {
      return p.foldl(D)(function (T) {
        var L = c.append(N.Semigroup0())(T);
        return function (O) {
          return L(R(O));
        };
      })(w.mempty(N));
    };
  }, function (N) {
    return function (R) {
      return function (T) {
        for (var L = R, O = !1, G; !O;) {
          G = L;
          var x = T;
          if (x instanceof e) O = !0;else {
            if (x instanceof l) L = N(G)(x.value0), T = x.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [x.constructor.name]);
            G = void 0;
          }
        }

        return G;
      };
    };
  }, function (N) {
    return function (R) {
      var T = p.foldl(D)(g.flip(l.create))(e.value),
          L = p.foldl(D)(g.flip(N))(R);
      return function (O) {
        return L(T(O));
      };
    };
  });

  a = z.foldableNonEmpty(D);

  var H = new c.Semigroup(function (N) {
    return function (R) {
      return p.foldr(D)(l.create)(R)(N);
    };
  }),
      I = new w.Monoid(function () {
    return H;
  }, e.value),
      y = new c.Semigroup(function (N) {
    return function (R) {
      return new z.NonEmpty(N.value0, c.append(H)(N.value1)(new l(R.value0, R.value1)));
    };
  }),
      r = function r(N) {
    return new h.Show(function (R) {
      return R instanceof e ? "Nil" : "(" + (p.intercalate(D)(w.monoidString)(" : ")(q.map(t)(h.show(N))(R)) + " : Nil)");
    });
  },
      M = new f.Apply(function () {
    return t;
  }, function (N) {
    return function (R) {
      if (N instanceof e) return e.value;
      if (N instanceof l) return c.append(H)(q.map(t)(N.value0)(R))(f.apply(M)(N.value1)(R));
      throw Error("Failed pattern match at Data.List.Types (line 155, column 1 - line 157, column 48): " + [N.constructor.name, R.constructor.name]);
    };
  }),
      F = new f.Apply(function () {
    return u;
  }, function (N) {
    return function (R) {
      return new z.NonEmpty(N.value0(R.value0), c.append(H)(f.apply(M)(N.value1)(new l(R.value0, e.value)))(f.apply(M)(new l(N.value0, N.value1))(R.value1)));
    };
  }),
      E = new d.Alt(function () {
    return t;
  }, c.append(H)),
      J = new n.Plus(function () {
    return E;
  }, e.value);

  d = new k.Applicative(function () {
    return F;
  }, function () {
    var N = z.singleton(J);
    return function (R) {
      return N(R);
    };
  }());
  b.Nil = e;
  b.Cons = l;

  b.NonEmptyList = function (N) {
    return N;
  };

  b.monoidList = I;
  b.foldableList = D;
  b.plusList = J;

  b.showNonEmptyList = function (N) {
    return new h.Show(function (R) {
      return "(NonEmptyList " + (h.show(z.showNonEmpty(N)(r(N)))(R) + ")");
    });
  };

  b.functorNonEmptyList = u;
  b.applicativeNonEmptyList = d;
  b.semigroupNonEmptyList = y;
  b.foldableNonEmptyList = a;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var b = a["Data.List"],
      d = a["Control.Alt"],
      k = a["Control.Applicative"],
      f = a["Control.Bind"],
      n = a["Control.Monad.Rec.Class"],
      p = a["Data.Bifunctor"],
      g = a["Data.Functor"],
      q = a["Data.List.Types"],
      w = a["Data.Maybe"],
      z = a["Data.Unit"],
      c = function () {
    return function (h) {
      return function (e) {
        for (var l = h, t = !1, u; !t;) {
          u = l;
          var D = e;
          if (D instanceof q.Nil) t = !0;else {
            if (D instanceof q.Cons) l = new q.Cons(D.value0, u), e = D.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [u.constructor.name, D.constructor.name]);
            u = void 0;
          }
        }

        return u;
      };
    }(q.Nil.value);
  }();

  b.manyRec = function (h) {
    return function (e) {
      return function (l) {
        return n.tailRecM(h)(function (t) {
          return f.bind(h.Monad0().Bind1())(d.alt(e.Plus1().Alt0())(g.map(e.Plus1().Alt0().Functor0())(n.Loop.create)(l))(k.pure(e.Applicative0())(new n.Done(z.unit))))(function (u) {
            return k.pure(e.Applicative0())(p.bimap(n.bifunctorStep)(function (D) {
              return new q.Cons(D, t);
            })(function (D) {
              return c(t);
            })(u));
          });
        })(q.Nil.value);
      };
    };
  };

  b.uncons = function (h) {
    if (h instanceof q.Nil) return w.Nothing.value;
    if (h instanceof q.Cons) return new w.Just({
      head: h.value0,
      tail: h.value1
    });
    throw Error("Failed pattern match at Data.List (line 259, column 1 - line 259, column 66): " + [h.constructor.name]);
  };
})(PS);

(function (a) {
  a.unfoldrArrayImpl = function (b) {
    return function (d) {
      return function (k) {
        return function (f) {
          return function (n) {
            return function (p) {
              for (var g = [];;) {
                p = n(p);
                if (b(p)) return g;
                p = d(p);
                g.push(k(p));
                p = f(p);
              }
            };
          };
        };
      };
    };
  };
})(PS["Data.Unfoldable"] = PS["Data.Unfoldable"] || {});

(function (a) {
  a.unfoldr1ArrayImpl = function (b) {
    return function (d) {
      return function (k) {
        return function (f) {
          return function (n) {
            return function (p) {
              for (var g = [];;) {
                p = n(p);
                g.push(k(p));
                p = f(p);
                if (b(p)) return g;
                p = d(p);
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
  var b = a["Data.Unfoldable1"],
      d = a["Data.Boolean"],
      k = a["Data.Maybe"],
      f = a["Data.Tuple"];
  a = new function (p) {
    this.unfoldr1 = p;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(k.isNothing)(k.fromJust())(f.fst)(f.snd));

  var n = function n(p) {
    return function (g) {
      return function (q) {
        return (0, p.unfoldr1)(function (w) {
          if (0 >= w) return new f.Tuple(q, k.Nothing.value);
          if (d.otherwise) return new f.Tuple(q, new k.Just(w - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [w.constructor.name]);
        })(g - 1 | 0);
      };
    };
  };

  b.unfoldr1 = function (p) {
    return p.unfoldr1;
  };

  b.singleton = function (p) {
    return n(p)(1);
  };

  b.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Unfoldable"] = a["Data.Unfoldable"] || {};
  var b = a["Data.Unfoldable"],
      d = a["Data.Function"],
      k = a["Data.Functor"],
      f = a["Data.Maybe"],
      n = a["Data.Tuple"],
      p = a["Data.Unfoldable1"];
  a = new function (g, q) {
    this.Unfoldable10 = g;
    this.unfoldr = q;
  }(function () {
    return p.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(f.isNothing)(f.fromJust())(n.fst)(n.snd));

  b.unfoldr = function (g) {
    return g.unfoldr;
  };

  b.fromMaybe = function (g) {
    return (0, g.unfoldr)(function (q) {
      return k.map(f.functorMaybe)(d.flip(n.Tuple.create)(f.Nothing.value))(q);
    });
  };

  b.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.List.NonEmpty"] = a["Data.List.NonEmpty"] || {};
  var b = a["Data.List.NonEmpty"],
      d = a["Data.Functor"],
      k = a["Data.List"],
      f = a["Data.List.Types"],
      n = a["Data.Maybe"],
      p = a["Data.NonEmpty"],
      g = a["Data.Tuple"],
      q = a["Data.Unfoldable"];

  a = function () {
    var w = p.singleton(f.plusList);
    return function (z) {
      return f.NonEmptyList(w(z));
    };
  }();

  b.toUnfoldable = function (w) {
    var z = q.unfoldr(w)(function (c) {
      return d.map(n.functorMaybe)(function (h) {
        return new g.Tuple(h.head, h.tail);
      })(k.uncons(c));
    });
    return function (c) {
      return z(new f.Cons(c.value0, c.value1));
    };
  };

  b.singleton = a;

  b.head = function (w) {
    return w.value0;
  };
})(PS);

(function (a) {
  a["null"] = null;

  a.nullable = function (b, d, k) {
    return null == b ? d : k(b);
  };

  a.notNull = function (b) {
    return b;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var b = a["Data.Nullable"],
      d = a["Data.Nullable"],
      k = a["Data.Maybe"];
  a = k.maybe(d["null"])(d.notNull);

  b.toMaybe = function (f) {
    return d.nullable(f, k.Nothing.value, k.Just.create);
  };

  b.toNullable = a;
})(PS);

(function (a) {
  var b = function () {
    function d(e, l, t, u) {
      this.tag = e;
      this._1 = l;
      this._2 = t;
      this._3 = u;
    }

    function k(e) {
      var l = function l(t, u, D) {
        return new d(e, t, u, D);
      };

      l.tag = e;
      return l;
    }

    function f(e) {
      return new d("Pure", void 0);
    }

    function n(e) {
      try {
        e();
      } catch (l) {
        setTimeout(function () {
          throw l;
        }, 0);
      }
    }

    function p(e, l, t) {
      try {
        return l(t());
      } catch (u) {
        return e(u);
      }
    }

    function g(e, l, t) {
      try {
        return l(t)();
      } catch (u) {
        return t(e(u))(), f;
      }
    }

    function q(e, l, t) {
      function u(O) {
        for (var G, x, V;;) {
          switch (V = x = G = null, I) {
            case 2:
              I = 1;

              try {
                y = F(y), null === E ? F = null : (F = E._1, E = E._2);
              } catch (K) {
                I = 5, r = e.left(K), y = null;
              }

              break;

            case 3:
              e.isLeft(y) ? (I = 5, r = y, y = null) : null === F ? I = 5 : (I = 2, y = e.fromRight(y));
              break;

            case 1:
              switch (y.tag) {
                case "Bind":
                  F && (E = new d("Cons", F, E));
                  F = y._2;
                  I = 1;
                  y = y._1;
                  break;

                case "Pure":
                  null === F ? (I = 5, y = e.right(y._1)) : (I = 2, y = y._1);
                  break;

                case "Sync":
                  I = 3;
                  y = p(e.left, e.right, y._1);
                  break;

                case "Async":
                  I = 4;
                  y = g(e.left, y._1, function (K) {
                    return function () {
                      H === O && (H++, h.enqueue(function () {
                        H === O + 1 && (I = 3, y = K, u(H));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  I = 5;
                  r = e.left(y._1);
                  y = null;
                  break;

                case "Catch":
                  J = null === F ? new d("Cons", y, J, M) : new d("Cons", y, new d("Cons", new d("Resume", F, E), J, M), M);
                  E = F = null;
                  I = 1;
                  y = y._1;
                  break;

                case "Bracket":
                  N++;
                  J = null === F ? new d("Cons", y, J, M) : new d("Cons", y, new d("Cons", new d("Resume", F, E), J, M), M);
                  E = F = null;
                  I = 1;
                  y = y._1;
                  break;

                case "Fork":
                  I = 3;
                  G = q(e, l, y._2);
                  l && l.register(G);
                  y._1 && G.run();
                  y = e.right(G);
                  break;

                case "Sequential":
                  I = 1, y = z(e, l, y._1);
              }

              break;

            case 5:
              E = F = null;
              if (null === J) I = 6, y = M || r || y;else switch (G = J._3, V = J._1, J = J._2, V.tag) {
                case "Catch":
                  M && M !== G && 0 === N ? I = 5 : r && (I = 1, y = V._2(e.fromLeft(r)), r = null);
                  break;

                case "Resume":
                  M && M !== G && 0 === N || r ? I = 5 : (F = V._1, E = V._2, I = 2, y = e.fromRight(y));
                  break;

                case "Bracket":
                  N--;
                  null === r && (x = e.fromRight(y), J = new d("Cons", new d("Release", V._2, x), J, G), M === G || 0 < N) && (I = 1, y = V._3(x));
                  break;

                case "Release":
                  J = new d("Cons", new d("Finalized", y, r), J, M);
                  I = 1;
                  y = M && M !== G && 0 === N ? V._1.killed(e.fromLeft(M))(V._2) : r ? V._1.failed(e.fromLeft(r))(V._2) : V._1.completed(e.fromRight(y))(V._2);
                  r = null;
                  N++;
                  break;

                case "Finalizer":
                  N++;
                  J = new d("Cons", new d("Finalized", y, r), J, M);
                  I = 1;
                  y = V._1;
                  break;

                case "Finalized":
                  N--, I = 5, y = V._1, r = V._2;
              }
              break;

            case 6:
              for (var A in T) {
                T.hasOwnProperty(A) && (L = L && T[A].rethrow, n(T[A].handler(y)));
              }

              T = null;
              M && r ? setTimeout(function () {
                throw e.fromLeft(r);
              }, 0) : e.isLeft(y) && L && setTimeout(function () {
                if (L) throw e.fromLeft(y);
              }, 0);
              return;

            case 0:
              I = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function D(O) {
        return function () {
          if (6 === I) return L = L && O.rethrow, O.handler(y)(), function () {};
          var G = R++;
          T = T || {};
          T[G] = O;
          return function () {
            null !== T && delete T[G];
          };
        };
      }

      var H = 0,
          I = 0,
          y = t,
          r = null,
          M = null,
          F = null,
          E = null,
          J = null,
          N = 0,
          R = 0,
          T = null,
          L = !0;
      return {
        kill: function kill(O, G) {
          return function () {
            if (6 === I) return G(e.right(void 0))(), function () {};
            var x = D({
              rethrow: !1,
              handler: function handler() {
                return G(e.right(void 0));
              }
            })();

            switch (I) {
              case 0:
                M = e.left(O);
                I = 6;
                y = M;
                u(H);
                break;

              case 4:
                null === M && (M = e.left(O));
                0 === N && (4 === I && (J = new d("Cons", new d("Finalizer", y(O)), J, M)), I = 5, r = y = null, u(++H));
                break;

              default:
                null === M && (M = e.left(O)), 0 === N && (I = 5, r = y = null);
            }

            return x;
          };
        },
        join: function join(O) {
          return function () {
            var G = D({
              rethrow: !1,
              handler: O
            })();
            0 === I && u(H);
            return G;
          };
        },
        onComplete: D,
        isSuspended: function isSuspended() {
          return 0 === I;
        },
        run: function run() {
          0 === I && (h.isDraining() ? u(H) : h.enqueue(function () {
            u(H);
          }));
        }
      };
    }

    function w(e, l, t, u) {
      function D(T, L, O) {
        var G = L,
            x = null,
            V = null,
            A = 0;
        L = {};

        a: for (;;) {
          var K = null;

          switch (G.tag) {
            case "Forked":
              G._3 === c && (K = M[G._1], L[A++] = K.kill(T, function (C) {
                return function () {
                  A--;
                  0 === A && O(C)();
                };
              }));
              if (null === x) break a;
              G = x._2;
              null === V ? x = null : (x = V._1, V = V._2);
              break;

            case "Map":
              G = G._2;
              break;

            case "Apply":
            case "Alt":
              x && (V = new d("Cons", x, V)), x = G, G = G._1;
          }
        }

        if (0 === A) O(e.right(void 0))();else for (T = 0, K = A; T < K; T++) {
          L[T] = L[T]();
        }
        return L;
      }

      function H(T, L, O) {
        var G, x;

        if (e.isLeft(T)) {
          var V = T;
          var A = null;
        } else A = T, V = null;

        for (;;) {
          var K = x = G = T = null;
          if (null !== N) break;

          if (null === L) {
            u(V || A)();
            break;
          }

          if (L._3 !== c) break;

          switch (L.tag) {
            case "Map":
              null === V ? (L._3 = e.right(L._1(e.fromRight(A))), A = L._3) : L._3 = V;
              break;

            case "Apply":
              T = L._1._3;
              G = L._2._3;

              if (V) {
                if (L._3 = V, x = !0, K = F++, E[K] = D(J, V === T ? L._2 : L._1, function () {
                  return function () {
                    delete E[K];
                    x ? x = !1 : null === O ? H(V, null, null) : H(V, O._1, O._2);
                  };
                }), x) {
                  x = !1;
                  return;
                }
              } else {
                if (T === c || G === c) return;
                A = e.right(e.fromRight(T)(e.fromRight(G)));
                L._3 = A;
              }

              break;

            case "Alt":
              T = L._1._3;
              G = L._2._3;
              if (T === c && e.isLeft(G) || G === c && e.isLeft(T)) return;
              if (T !== c && e.isLeft(T) && G !== c && e.isLeft(G)) V = A === T ? G : T, A = null, L._3 = V;else if (L._3 = A, x = !0, K = F++, E[K] = D(J, A === T ? L._2 : L._1, function () {
                return function () {
                  delete E[K];
                  x ? x = !1 : null === O ? H(A, null, null) : H(A, O._1, O._2);
                };
              }), x) {
                x = !1;
                return;
              }
          }

          null === O ? L = null : (L = O._1, O = O._2);
        }
      }

      function I(T) {
        return function (L) {
          return function () {
            delete M[T._1];
            T._3 = L;
            H(L, T._2._1, T._2._2);
          };
        };
      }

      function y(T, L) {
        N = e.left(T);
        var O;

        for (O in E) {
          if (E.hasOwnProperty(O)) {
            var G = E[O];

            for (O in G) {
              if (G.hasOwnProperty(O)) G[O]();
            }
          }
        }

        E = null;
        var x = D(T, R, L);
        return function (V) {
          return new d("Async", function (A) {
            return function () {
              for (var K in x) {
                if (x.hasOwnProperty(K)) x[K]();
              }

              return f;
            };
          });
        };
      }

      var r = 0,
          M = {},
          F = 0,
          E = {},
          J = Error("[ParAff] Early exit"),
          N = null,
          R = c;

      (function () {
        var T = 1,
            L = t,
            O = null,
            G = null;

        a: for (;;) {
          switch (T) {
            case 1:
              switch (L.tag) {
                case "Map":
                  O && (G = new d("Cons", O, G));
                  O = new d("Map", L._1, c, c);
                  L = L._2;
                  break;

                case "Apply":
                  O && (G = new d("Cons", O, G));
                  O = new d("Apply", c, L._2, c);
                  L = L._1;
                  break;

                case "Alt":
                  O && (G = new d("Cons", O, G));
                  O = new d("Alt", c, L._2, c);
                  L = L._1;
                  break;

                default:
                  var x = r++;
                  T = 5;
                  var V = L;
                  L = new d("Forked", x, new d("Cons", O, G), c);
                  V = q(e, l, V);
                  V.onComplete({
                    rethrow: !1,
                    handler: I(L)
                  })();
                  M[x] = V;
                  l && l.register(V);
              }

              break;

            case 5:
              if (null === O) break a;
              O._1 === c ? (O._1 = L, T = 1, L = O._2, O._2 = c) : (O._2 = L, L = O, null === G ? O = null : (O = G._1, G = G._2));
          }
        }

        R = L;

        for (x = 0; x < r; x++) {
          M[x].run();
        }
      })();

      return function (T) {
        return new d("Async", function (L) {
          return function () {
            return y(T, L);
          };
        });
      };
    }

    function z(e, l, t) {
      return new d("Async", function (u) {
        return function () {
          return w(e, l, t, u);
        };
      });
    }

    var c = {},
        h = function () {
      function e() {
        for (D = !0; 0 !== l;) {
          l--;
          var H = u[t];
          u[t] = void 0;
          t = (t + 1) % 1024;
          H();
        }

        D = !1;
      }

      var l = 0,
          t = 0,
          u = Array(1024),
          D = !1;
      return {
        isDraining: function isDraining() {
          return D;
        },
        enqueue: function enqueue(H) {
          if (1024 === l) {
            var I = D;
            e();
            D = I;
          }

          u[(t + l) % 1024] = H;
          l++;
          D || e();
        }
      };
    }();

    d.EMPTY = c;
    d.Pure = k("Pure");
    d.Throw = k("Throw");
    d.Catch = k("Catch");
    d.Sync = k("Sync");
    d.Async = k("Async");
    d.Bind = k("Bind");
    d.Bracket = k("Bracket");
    d.Fork = k("Fork");
    d.Seq = k("Sequential");
    d.ParMap = k("Map");
    d.ParApply = k("Apply");
    d.ParAlt = k("Alt");
    d.Fiber = q;

    d.Supervisor = function (e) {
      var l = {},
          t = 0,
          u = 0;
      return {
        register: function register(D) {
          var H = t++;
          D.onComplete({
            rethrow: !0,
            handler: function handler(I) {
              return function () {
                u--;
                delete l[H];
              };
            }
          })();
          l[H] = D;
          u++;
        },
        isEmpty: function isEmpty() {
          return 0 === u;
        },
        killAll: function killAll(D, H) {
          return function () {
            function I(F) {
              r[F] = l[F].kill(D, function (E) {
                return function () {
                  delete r[F];
                  y--;
                  e.isLeft(E) && e.fromLeft(E) && setTimeout(function () {
                    throw e.fromLeft(E);
                  }, 0);
                  0 === y && H();
                };
              })();
            }

            if (0 === u) return H();
            var y = 0,
                r = {},
                M;

            for (M in l) {
              l.hasOwnProperty(M) && (y++, I(M));
            }

            l = {};
            u = t = 0;
            return function (F) {
              return new d("Sync", function () {
                for (var E in r) {
                  if (r.hasOwnProperty(E)) r[E]();
                }
              });
            };
          };
        }
      };
    };

    d.Scheduler = h;
    d.nonCanceler = f;
    return d;
  }();

  a._pure = b.Pure;
  a._throwError = b.Throw;

  a._catchError = function (d) {
    return function (k) {
      return b.Catch(d, k);
    };
  };

  a._map = function (d) {
    return function (k) {
      return k.tag === b.Pure.tag ? b.Pure(d(k._1)) : b.Bind(k, function (f) {
        return b.Pure(d(f));
      });
    };
  };

  a._bind = function (d) {
    return function (k) {
      return b.Bind(d, k);
    };
  };

  a._liftEffect = b.Sync;

  a._parAffMap = function (d) {
    return function (k) {
      return b.ParMap(d, k);
    };
  };

  a._parAffApply = function (d) {
    return function (k) {
      return b.ParApply(d, k);
    };
  };

  a.makeAff = b.Async;

  a._makeFiber = function (d, k) {
    return function () {
      return b.Fiber(d, null, k);
    };
  };

  a._sequential = b.Seq;
})(PS["Effect.Aff"] = PS["Effect.Aff"] || {});

(function (a) {
  a["Control.Parallel.Class"] = a["Control.Parallel.Class"] || {};
  a = a["Control.Parallel.Class"];

  a.parallel = function (b) {
    return b.parallel;
  };

  a.sequential = function (b) {
    return b.sequential;
  };

  a.Parallel = function (b, d, k, f) {
    this.Applicative1 = b;
    this.Monad0 = d;
    this.parallel = k;
    this.sequential = f;
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var b = a["Control.Category"],
      d = a["Control.Parallel.Class"],
      k = a["Data.Foldable"],
      f = function f(n) {
    return function (p) {
      return function (g) {
        var q = d.sequential(n),
            w = k.traverse_(n.Applicative1())(p)(function () {
          var z = d.parallel(n);
          return function (c) {
            return z(g(c));
          };
        }());
        return function (z) {
          return q(w(z));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (n) {
    return function (p) {
      return f(n)(p)(b.identity(b.categoryFn));
    };
  };
})(PS);

(function (a) {
  a.pureE = function (b) {
    return function () {
      return b;
    };
  };

  a.bindE = function (b) {
    return function (d) {
      return function () {
        return d(b())();
      };
    };
  };
})(PS.Effect = PS.Effect || {});

(function (a) {
  a.Effect = a.Effect || {};
  var b = a.Effect,
      d = a.Effect,
      k = a["Control.Applicative"],
      f = a["Control.Apply"],
      n = a["Control.Bind"],
      p = a["Control.Monad"],
      g = a["Data.Functor"],
      q = a["Data.Monoid"],
      w = a["Data.Semigroup"];
  a = new p.Monad(function () {
    return h;
  }, function () {
    return z;
  });
  var z = new n.Bind(function () {
    return c;
  }, d.bindE),
      c = new f.Apply(function () {
    return e;
  }, p.ap(a)),
      h = new k.Applicative(function () {
    return c;
  }, d.pureE),
      e = new g.Functor(k.liftA1(h));
  b.functorEffect = e;
  b.applyEffect = c;
  b.applicativeEffect = h;
  b.bindEffect = z;
  b.monadEffect = a;

  b.monoidEffect = function (l) {
    return new q.Monoid(function () {
      var t = l.Semigroup0();
      return new w.Semigroup(f.lift2(c)(w.append(t)));
    }, d.pureE(q.mempty(l)));
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var b = a["Effect.Class"],
      d = a["Control.Category"],
      k = a.Effect;

  a = function a(f, n) {
    this.Monad0 = f;
    this.liftEffect = n;
  };

  d = new a(function () {
    return k.monadEffect;
  }, d.identity(d.categoryFn));

  b.liftEffect = function (f) {
    return f.liftEffect;
  };

  b.MonadEffect = a;
  b.monadEffectEffect = d;
})(PS);

(function (a) {
  a.unsafePartial = function (b) {
    return b();
  };
})(PS["Partial.Unsafe"] = PS["Partial.Unsafe"] || {});

(function (a) {
  a.crashWith = function () {
    return function (b) {
      throw Error(b);
    };
  };
})(PS.Partial = PS.Partial || {});

(function (a) {
  a.Partial = a.Partial || {};
  a.Partial.crashWith = a.Partial.crashWith;
})(PS);

(function (a) {
  a["Partial.Unsafe"] = a["Partial.Unsafe"] || {};
  var b = a["Partial.Unsafe"],
      d = a.Partial;

  a["Partial.Unsafe"].unsafeCrashWith = function (k) {
    return b.unsafePartial(function (f) {
      return d.crashWith()(k);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var b = a["Effect.Aff"],
      d = a["Effect.Aff"],
      k = a["Control.Applicative"],
      f = a["Control.Apply"],
      n = a["Control.Bind"],
      p = a["Control.Monad"],
      g = a["Control.Monad.Error.Class"],
      q = a["Control.Parallel"],
      w = a["Control.Parallel.Class"],
      z = a["Data.Either"],
      c = a["Data.Foldable"],
      h = a["Data.Function"],
      e = a["Data.Functor"],
      l = a["Data.Monoid"],
      t = a["Data.Semigroup"],
      u = a["Data.Unit"],
      D = a.Effect,
      H = a["Effect.Class"],
      I = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var y = new e.Functor(d._parAffMap),
      r = new e.Functor(d._map),
      M = function () {
    return {
      isLeft: function isLeft(ha) {
        if (ha instanceof z.Left) return !0;
        if (ha instanceof z.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [ha.constructor.name]);
      },
      fromLeft: function fromLeft(ha) {
        if (ha instanceof z.Left) return ha.value0;
        if (ha instanceof z.Right) return I.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [ha.constructor.name]);
      },
      fromRight: function fromRight(ha) {
        if (ha instanceof z.Right) return ha.value0;
        if (ha instanceof z.Left) return I.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [ha.constructor.name]);
      },
      left: z.Left.create,
      right: z.Right.create
    };
  }(),
      F = function F(ha) {
    return function () {
      var sa = d._makeFiber(M, ha)();

      sa.run();
      return sa;
    };
  },
      E = new f.Apply(function () {
    return y;
  }, d._parAffApply),
      J = new p.Monad(function () {
    return T;
  }, function () {
    return N;
  }),
      N = new n.Bind(function () {
    return R;
  }, d._bind),
      R = new f.Apply(function () {
    return r;
  }, p.ap(J)),
      T = new k.Applicative(function () {
    return R;
  }, d._pure),
      L = new H.MonadEffect(function () {
    return J;
  }, d._liftEffect),
      O = function () {
    var ha = H.liftEffect(L);
    return function (sa) {
      return h["const"](ha(sa));
    };
  }(),
      G = new g.MonadThrow(function () {
    return J;
  }, d._throwError),
      x = new g.MonadError(function () {
    return G;
  }, d._catchError),
      V = function V(ha) {
    return function (sa) {
      return F(n.bindFlipped(N)(function () {
        var za = H.liftEffect(L);
        return function (Ca) {
          return za(ha(Ca));
        };
      }())(g["try"](x)(sa)));
    };
  },
      A = new w.Parallel(function () {
    return K;
  }, function () {
    return J;
  }, a.unsafeCoerce, d._sequential),
      K = new k.Applicative(function () {
    return E;
  }, function () {
    var ha = w.parallel(A),
        sa = k.pure(T);
    return function (za) {
      return ha(sa(za));
    };
  }()),
      C = new t.Semigroup(function (ha) {
    return function (sa) {
      return function (za) {
        return q.parSequence_(A)(c.foldableArray)([ha(za), sa(za)]);
      };
    };
  });

  f = h["const"](k.pure(T)(u.unit));
  l = new l.Monoid(function () {
    return C;
  }, f);
  b.runAff = V;

  b.runAff_ = function (ha) {
    return function (sa) {
      return e["void"](D.functorEffect)(V(ha)(sa));
    };
  };

  b.killFiber = function (ha) {
    return function (sa) {
      return n.bind(N)(H.liftEffect(L)(sa.isSuspended))(function (za) {
        return za ? H.liftEffect(L)(e["void"](D.functorEffect)(sa.kill(ha, h["const"](k.pure(D.applicativeEffect)(u.unit))))) : d.makeAff(function (Ca) {
          return e.map(D.functorEffect)(O)(sa.kill(ha, Ca));
        });
      });
    };
  };

  b.nonCanceler = f;
  b.effectCanceler = O;
  b.functorAff = r;
  b.applicativeAff = T;
  b.bindAff = N;
  b.monadErrorAff = x;
  b.monadEffectAff = L;
  b.monoidCanceler = l;
  b.makeAff = d.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.Compat"] = a["Effect.Aff.Compat"] || {};
  var b = a["Data.Either"],
      d = a["Effect.Aff"];

  a["Effect.Aff.Compat"].fromEffectFnAff = function (k) {
    return d.makeAff(function (f) {
      return function () {
        var n = k(function (p) {
          return f(b.Left.create(p))();
        }, function (p) {
          return f(b.Right.create(p))();
        });
        return function (p) {
          return d.makeAff(function (g) {
            return function () {
              n(p, function (q) {
                return g(b.Left.create(q))();
              }, function (q) {
                return g(b.Right.create(q))();
              });
              return d.nonCanceler;
            };
          });
        };
      };
    });
  };
})(PS);

(function (a) {
  a.showErrorImpl = function (b) {
    return b.stack || b.toString();
  };

  a.error = function (b) {
    return Error(b);
  };

  a.message = function (b) {
    return b.message;
  };

  a.throwException = function (b) {
    return function () {
      throw b;
    };
  };

  a.catchException = function (b) {
    return function (d) {
      return function () {
        try {
          return d();
        } catch (k) {
          return k instanceof Error || "[object Error]" === Object.prototype.toString.call(k) ? b(k)() : b(Error(k.toString()))();
        }
      };
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var b = a["Effect.Exception"],
      d = a["Effect.Exception"],
      k = a["Control.Applicative"],
      f = a["Data.Either"],
      n = a["Data.Functor"],
      p = a.Effect;
  a = new a["Data.Show"].Show(d.showErrorImpl);

  b["throw"] = function (g) {
    return d.throwException(d.error(g));
  };

  b["try"] = function (g) {
    return d.catchException(function () {
      var q = k.pure(p.applicativeEffect);
      return function (w) {
        return q(f.Left.create(w));
      };
    }())(n.map(p.functorEffect)(f.Right.create)(g));
  };

  b.showError = a;
  b.error = d.error;
  b.message = d.message;
  b.throwException = d.throwException;
})(PS);

(function (a) {
  a.unsafeToForeign = function (b) {
    return b;
  };

  a.unsafeFromForeign = function (b) {
    return b;
  };

  a.typeOf = function (b) {
    return _typeof(b);
  };

  a.tagOf = function (b) {
    return Object.prototype.toString.call(b).slice(8, -1);
  };

  a.isNull = function (b) {
    return null === b;
  };

  a.isUndefined = function (b) {
    return void 0 === b;
  };

  a.isArray = Array.isArray || function (b) {
    return "[object Array]" === Object.prototype.toString.call(b);
  };
})(PS.Foreign = PS.Foreign || {});

(function (a) {
  a.fromNumberImpl = function (b) {
    return function (d) {
      return function (k) {
        return (k | 0) === k ? b(k) : d;
      };
    };
  };

  a.toNumber = function (b) {
    return b;
  };

  a.toStringAs = function (b) {
    return function (d) {
      return d.toString(b);
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

  var b = a["Data.Int"],
      d = a["Data.Int"],
      k = a["Data.Boolean"],
      f = a["Data.Bounded"],
      n = a["Data.Maybe"],
      p = a.Global,
      g = a.Math,
      q = d.fromNumberImpl(n.Just.create)(n.Nothing.value),
      w = function w(z) {
    if (z === p.infinity || z === -p.infinity) return 0;
    if (z >= d.toNumber(f.top(f.boundedInt))) return f.top(f.boundedInt);
    if (z <= d.toNumber(f.bottom(f.boundedInt))) return f.bottom(f.boundedInt);
    if (k.otherwise) return n.fromMaybe(0)(q(z));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [z.constructor.name]);
  };

  b.fromNumber = q;

  b.round = function (z) {
    return w(g.round(z));
  };

  b.hexadecimal = 16;
  b.toNumber = d.toNumber;
  b.toStringAs = d.toStringAs;
})(PS);

(function (a) {
  a.Foreign = a.Foreign || {};

  var b = a.Foreign,
      d = a.Foreign,
      k = a["Control.Applicative"],
      f = a["Control.Monad.Error.Class"],
      n = a["Control.Monad.Except"],
      p = a["Control.Monad.Except.Trans"],
      g = a["Data.Boolean"],
      q = a["Data.Either"],
      w = a["Data.Function"],
      z = a["Data.Identity"],
      c = a["Data.Int"],
      h = a["Data.List.NonEmpty"],
      e = a["Data.Maybe"],
      l = a["Data.Show"],
      t = function () {
    function E(J) {
      this.value0 = J;
    }

    E.create = function (J) {
      return new E(J);
    };

    return E;
  }(),
      u = function () {
    function E(J, N) {
      this.value0 = J;
      this.value1 = N;
    }

    E.create = function (J) {
      return function (N) {
        return new E(J, N);
      };
    };

    return E;
  }(),
      D = function () {
    function E(J, N) {
      this.value0 = J;
      this.value1 = N;
    }

    E.create = function (J) {
      return function (N) {
        return new E(J, N);
      };
    };

    return E;
  }(),
      H = function () {
    function E(J, N) {
      this.value0 = J;
      this.value1 = N;
    }

    E.create = function (J) {
      return function (N) {
        return new E(J, N);
      };
    };

    return E;
  }(),
      I = new l.Show(function (E) {
    if (E instanceof t) return "(ForeignError " + (l.show(l.showString)(E.value0) + ")");
    if (E instanceof D) return "(ErrorAtIndex " + (l.show(l.showInt)(E.value0) + (" " + (l.show(I)(E.value1) + ")")));
    if (E instanceof H) return "(ErrorAtProperty " + (l.show(l.showString)(E.value0) + (" " + (l.show(I)(E.value1) + ")")));
    if (E instanceof u) return "(TypeMismatch " + (l.show(l.showString)(E.value0) + (" " + (l.show(l.showString)(E.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [E.constructor.name]);
  }),
      y = function y(E) {
    if (E instanceof t) return E.value0;
    if (E instanceof D) return "Error at array index " + (l.show(l.showInt)(E.value0) + (": " + y(E.value1)));
    if (E instanceof H) return "Error at property " + (l.show(l.showString)(E.value0) + (": " + y(E.value1)));
    if (E instanceof u) return "Type mismatch: expected " + (E.value0 + (", found " + E.value1));
    throw Error("Failed pattern match at Foreign (line 72, column 1 - line 72, column 45): " + [E.constructor.name]);
  },
      r = function () {
    var E = f.throwError(p.monadThrowExceptT(z.monadIdentity));
    return function (J) {
      return E(h.singleton(J));
    };
  }();

  a = function a(E) {
    return function (J) {
      if (d.tagOf(J) === E) return k.pure(p.applicativeExceptT(z.monadIdentity))(d.unsafeFromForeign(J));
      if (g.otherwise) return r(new u(E, d.tagOf(J)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [E.constructor.name, J.constructor.name]);
    };
  };

  var M = a("Number"),
      F = a("String");
  b.ForeignError = t;
  b.TypeMismatch = u;
  b.ErrorAtIndex = D;
  b.ErrorAtProperty = H;
  b.renderForeignError = y;
  b.unsafeReadTagged = a;
  b.readString = F;

  b.readInt = function (E) {
    var J = q.Left.create(h.singleton(new u("Int", d.tagOf(E)))),
        N = function () {
      var R = e.maybe(J)(k.pure(q.applicativeEither));
      return function (T) {
        return R(c.fromNumber(T));
      };
    }();

    return n.mapExcept(q.either(w["const"](J))(N))(M(E));
  };

  b.readArray = function (E) {
    if (d.isArray(E)) return k.pure(p.applicativeExceptT(z.monadIdentity))(d.unsafeFromForeign(E));
    if (g.otherwise) return r(new u("array", d.tagOf(E)));
    throw Error("Failed pattern match at Foreign (line 147, column 1 - line 147, column 42): " + [E.constructor.name]);
  };

  b.fail = r;
  b.showForeignError = I;
  b.unsafeToForeign = d.unsafeToForeign;
  b.typeOf = d.typeOf;
  b.isNull = d.isNull;
  b.isUndefined = d.isUndefined;
})(PS);

(function (a) {
  a.Affjax = a.Affjax || {};

  var b = a.Affjax,
      d = a.Affjax,
      k = a["Affjax.RequestBody"],
      f = a["Affjax.RequestHeader"],
      n = a["Affjax.ResponseFormat"],
      p = a["Affjax.ResponseHeader"],
      g = a["Control.Applicative"],
      q = a["Control.Bind"],
      w = a["Control.Monad.Error.Class"],
      z = a["Control.Monad.Except"],
      c = a["Control.Monad.Except.Trans"],
      h = a["Data.Argonaut.Core"],
      e = a["Data.Argonaut.Parser"],
      l = a["Data.Array"],
      t = a["Data.Either"],
      u = a["Data.Eq"],
      D = a["Data.Foldable"],
      H = a["Data.FormURLEncoded"],
      I = a["Data.Function"],
      y = a["Data.Functor"],
      r = a["Data.HTTP.Method"],
      M = a["Data.HeytingAlgebra"],
      F = a["Data.Identity"],
      E = a["Data.List.NonEmpty"],
      J = a["Data.Maybe"],
      N = a["Data.Nullable"],
      R = a["Data.Unit"],
      T = a["Effect.Aff"],
      L = a["Effect.Aff.Compat"],
      O = a["Effect.Exception"],
      G = a.Foreign,
      x = function () {
    function ma(v) {
      this.value0 = v;
    }

    ma.create = function (v) {
      return new ma(v);
    };

    return ma;
  }(),
      V = function () {
    function ma(v, Aa) {
      this.value0 = v;
      this.value1 = Aa;
    }

    ma.create = function (v) {
      return function (Aa) {
        return new ma(v, Aa);
      };
    };

    return ma;
  }(),
      A = function () {
    function ma(v) {
      this.value0 = v;
    }

    ma.create = function (v) {
      return new ma(v);
    };

    return ma;
  }(),
      K = function K(ma) {
    var v = function v(Ea) {
      return "" === Ea ? g.pure(c.applicativeExceptT(F.monadIdentity))(h.jsonEmptyObject) : t.either(function (da) {
        return G.fail(G.ForeignError.create(da));
      })(g.pure(c.applicativeExceptT(F.monadIdentity)))(e.jsonParser(Ea));
    },
        Aa = function () {
      if (ma.responseFormat instanceof n.ArrayBuffer) return G.unsafeReadTagged("ArrayBuffer");
      if (ma.responseFormat instanceof n.Blob) return G.unsafeReadTagged("Blob");
      if (ma.responseFormat instanceof n.Document) return G.unsafeReadTagged("Document");
      if (ma.responseFormat instanceof n.Json) return q.composeKleisliFlipped(c.bindExceptT(F.monadIdentity))(function (Ea) {
        return ma.responseFormat.value0(v(Ea));
      })(G.unsafeReadTagged("String"));
      if (ma.responseFormat instanceof n.String) return G.unsafeReadTagged("String");
      if (ma.responseFormat instanceof n.Ignore) return I["const"](ma.responseFormat.value0(g.pure(c.applicativeExceptT(F.monadIdentity))(R.unit)));
      throw Error("Failed pattern match at Affjax (line 237, column 18 - line 243, column 57): " + [ma.responseFormat.constructor.name]);
    }(),
        Q = function Q(Ea) {
      if (Ea instanceof k.ArrayView) return t.Right.create(Ea.value0(G.unsafeToForeign));
      if (Ea instanceof k.Blob || Ea instanceof k.Document || Ea instanceof k.String || Ea instanceof k.FormData) return t.Right.create(G.unsafeToForeign(Ea.value0));
      if (Ea instanceof k.FormURLEncoded) return t.note("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(y.map(J.functorMaybe)(G.unsafeToForeign)(H.encode(Ea.value0)));
      if (Ea instanceof k.Json) return t.Right.create(G.unsafeToForeign(h.stringify(Ea.value0)));
      throw Error("Failed pattern match at Affjax (line 203, column 20 - line 218, column 69): " + [Ea.constructor.name]);
    },
        ka = function ka(Ea) {
      return function (da) {
        return Ea instanceof J.Just && !D.any(D.foldableArray)(M.heytingAlgebraBoolean)(I.on(u.eq(u.eqString))(f.name)(Ea.value0))(da) ? l.snoc(da)(Ea.value0) : da;
      };
    },
        Ja = function Ja(Ea) {
      return ka(y.map(J.functorMaybe)(f.ContentType.create)(q.bindFlipped(J.bindMaybe)(k.toMediaType)(Ea)))(ka(y.map(J.functorMaybe)(f.Accept.create)(n.toMediaType(ma.responseFormat)))(ma.headers));
    },
        Pa = function Pa(Ea) {
      return {
        method: r.print(ma.method),
        url: ma.url,
        headers: y.map(y.functorArray)(function (da) {
          return {
            field: f.name(da),
            value: f.value(da)
          };
        })(Ja(ma.content)),
        content: Ea,
        responseType: n.toResponseType(ma.responseFormat),
        username: N.toNullable(ma.username),
        password: N.toNullable(ma.password),
        withCredentials: ma.withCredentials
      };
    },
        Fa = function Fa(Ea) {
      return y.mapFlipped(T.functorAff)(w["try"](T.monadErrorAff)(L.fromEffectFnAff(d._ajax(p.ResponseHeader.create, Pa(Ea)))))(function (da) {
        if (da instanceof t.Right) {
          var va = z.runExcept(Aa(da.value0.body));
          if (va instanceof t.Left) return new t.Left(new V(E.head(va.value0), da.value0));
          if (va instanceof t.Right) return new t.Right({
            body: va.value0,
            headers: da.value0.headers,
            status: da.value0.status,
            statusText: da.value0.statusText
          });
          throw Error("Failed pattern match at Affjax (line 184, column 9 - line 186, column 52): " + [va.constructor.name]);
        }

        if (da instanceof t.Left) return new t.Left(new A(da.value0));
        throw Error("Failed pattern match at Affjax (line 182, column 86 - line 188, column 28): " + [da.constructor.name]);
      });
    };

    if (ma.content instanceof J.Nothing) return Fa(N.toNullable(J.Nothing.value));

    if (ma.content instanceof J.Just) {
      Q = Q(ma.content.value0);
      if (Q instanceof t.Right) return Fa(N.toNullable(new J.Just(Q.value0)));
      if (Q instanceof t.Left) return g.pure(T.applicativeAff)(new t.Left(new x(Q.value0)));
      throw Error("Failed pattern match at Affjax (line 173, column 7 - line 177, column 48): " + [Q.constructor.name]);
    }

    throw Error("Failed pattern match at Affjax (line 169, column 3 - line 177, column 48): " + [ma.content.constructor.name]);
  },
      C = new t.Left(r.GET.value),
      ha = [],
      sa = J.Nothing.value,
      za = J.Nothing.value,
      Ca = J.Nothing.value;

  b.XHRError = A;

  b.printError = function (ma) {
    if (ma instanceof x) return "There was a problem with the request content: " + ma.value0;
    if (ma instanceof V) return "There was a problem with the response body: " + G.renderForeignError(ma.value0);
    if (ma instanceof A) return "There was a problem making the request: " + O.message(ma.value0);
    throw Error("Failed pattern match at Affjax (line 91, column 14 - line 97, column 66): " + [ma.constructor.name]);
  };

  b.get = function (ma) {
    return function (v) {
      return K({
        method: C,
        url: v,
        headers: ha,
        content: sa,
        username: za,
        password: Ca,
        withCredentials: !1,
        responseFormat: ma
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Alternative"] = a["Control.Alternative"] || {};

  a["Control.Alternative"].Alternative = function (b, d) {
    this.Applicative0 = b;
    this.Plus1 = d;
  };
})(PS);

(function (a) {
  a["Control.MultiAlternative"] = a["Control.MultiAlternative"] || {};
  a = a["Control.MultiAlternative"];

  a.orr = function (b) {
    return b.orr;
  };

  a.MultiAlternative = function (b, d) {
    this.Plus0 = b;
    this.orr = d;
  };
})(PS);

(function (a) {
  a["Control.ShiftMap"] = a["Control.ShiftMap"] || {};
  a = a["Control.ShiftMap"];

  a.shiftMap = function (b) {
    return b.shiftMap;
  };

  a.ShiftMap = function (b) {
    this.shiftMap = b;
  };
})(PS);

(function (a) {
  a.mapWithIndexArray = function (b) {
    return function (d) {
      for (var k = d.length, f = Array(k), n = 0; n < k; n++) {
        f[n] = b(n)(d[n]);
      }

      return f;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var b = a["Data.FunctorWithIndex"],
      d = a["Data.Functor"];
  a = new function (k, f) {
    this.Functor0 = k;
    this.mapWithIndex = f;
  }(function () {
    return d.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  b.mapWithIndex = function (k) {
    return k.mapWithIndex;
  };

  b.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var b = a["Data.FoldableWithIndex"],
      d = a["Control.Applicative"],
      k = a["Control.Apply"],
      f = a["Data.Foldable"],
      n = a["Data.FunctorWithIndex"],
      p = a["Data.Monoid"],
      g = a["Data.Semigroup"],
      q = a["Data.Unit"],
      w = function () {
    function h(e, l) {
      this.value0 = e;
      this.value1 = l;
    }

    h.create = function (e) {
      return function (l) {
        return new h(e, l);
      };
    };

    return h;
  }(),
      z = function z(h) {
    return function (e) {
      return function (l) {
        return (0, h.foldrWithIndex)(function (t) {
          return function (u) {
            return function (D) {
              return g.append(e.Semigroup0())(l(t)(u))(D);
            };
          };
        })(p.mempty(e));
      };
    };
  },
      c = new function (h, e, l, t) {
    this.Foldable0 = h;
    this.foldMapWithIndex = e;
    this.foldlWithIndex = l;
    this.foldrWithIndex = t;
  }(function () {
    return f.foldableArray;
  }, function (h) {
    return z(c)(h);
  }, function (h) {
    return function (e) {
      var l = f.foldl(f.foldableArray)(function (u) {
        return function (D) {
          return h(D.value0)(u)(D.value1);
        };
      })(e),
          t = n.mapWithIndex(n.functorWithIndexArray)(w.create);
      return function (u) {
        return l(t(u));
      };
    };
  }, function (h) {
    return function (e) {
      var l = f.foldr(f.foldableArray)(function (u) {
        return function (D) {
          return h(u.value0)(u.value1)(D);
        };
      })(e),
          t = n.mapWithIndex(n.functorWithIndexArray)(w.create);
      return function (u) {
        return l(t(u));
      };
    };
  });

  b.traverseWithIndex_ = function (h) {
    return function (e) {
      return function (l) {
        return (0, e.foldrWithIndex)(function (t) {
          var u = k.applySecond(h.Apply0()),
              D = l(t);
          return function (H) {
            return u(D(H));
          };
        })(d.pure(h)(q.unit));
      };
    };
  };

  b.foldableWithIndexArray = c;
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  a = a["Effect.Aff.Class"];

  a.liftAff = function (b) {
    return b.liftAff;
  };

  a.MonadAff = function (b, d) {
    this.MonadEffect0 = b;
    this.liftAff = d;
  };
})(PS);

(function (a) {
  a.log = function (b) {
    return function () {
      console.log(b);
      return {};
    };
  };
})(PS["Effect.Console"] = PS["Effect.Console"] || {});

(function (a) {
  a["Effect.Console"] = a["Effect.Console"] || {};
  a["Effect.Console"].log = a["Effect.Console"].log;
})(PS);

(function (a) {
  a.new = function (b) {
    return function () {
      return {
        value: b
      };
    };
  };

  a.read = function (b) {
    return function () {
      return b.value;
    };
  };

  a["modify'"] = function (b) {
    return function (d) {
      return function () {
        var k = b(d.value);
        d.value = k.state;
        return k.value;
      };
    };
  };

  a.write = function (b) {
    return function (d) {
      return function () {
        d.value = b;
        return {};
      };
    };
  };
})(PS["Effect.Ref"] = PS["Effect.Ref"] || {});

(function (a) {
  a["Effect.Ref"] = a["Effect.Ref"] || {};
  var b = a["Effect.Ref"],
      d = a["Effect.Ref"];

  b.modify = function (k) {
    return d["modify'"](function (f) {
      f = k(f);
      return {
        state: f,
        value: f
      };
    });
  };

  b["new"] = d["new"];
  b.read = d.read;
  b.write = d.write;
})(PS);

(function (a) {
  a.setTimeout = function (b) {
    return function (d) {
      return function () {
        return setTimeout(d, b);
      };
    };
  };

  a.clearTimeout = function (b) {
    return function () {
      clearTimeout(b);
    };
  };
})(PS["Effect.Timer"] = PS["Effect.Timer"] || {});

(function (a) {
  a["Effect.Timer"] = a["Effect.Timer"] || {};
  var b = a["Effect.Timer"];
  a = a["Effect.Timer"];
  b.setTimeout = a.setTimeout;
  b.clearTimeout = a.clearTimeout;
})(PS);

(function (a) {
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};

  var b = a["Concur.Core.Types"],
      d = a["Control.Alt"],
      k = a["Control.Alternative"],
      f = a["Control.Applicative"],
      n = a["Control.Apply"],
      p = a["Control.Bind"],
      g = a["Control.Category"],
      q = a["Control.Monad"],
      w = a["Control.MultiAlternative"],
      z = a["Control.Plus"],
      c = a["Control.ShiftMap"],
      h = a["Data.Array"],
      e = a["Data.Either"],
      l = a["Data.FoldableWithIndex"],
      t = a["Data.Functor"],
      u = a["Data.Maybe"],
      D = a["Data.Monoid"],
      H = a["Data.Semigroup"],
      I = a["Data.Traversable"],
      y = a["Data.Unit"],
      r = a.Effect,
      M = a["Effect.Aff"],
      F = a["Effect.Aff.Class"],
      E = a["Effect.Class"],
      J = a["Effect.Console"],
      N = a["Effect.Exception"],
      R = a["Effect.Ref"],
      T = a["Effect.Timer"],
      L = function () {
    function da() {}

    da.value = new da();
    return da;
  }(),
      O = function () {
    function da(va) {
      this.value0 = va;
    }

    da.create = function (va) {
      return new da(va);
    };

    return da;
  }(),
      G = function () {
    function da() {}

    da.value = new da();
    return da;
  }(),
      x = function x(da) {
    return da;
  };

  a = new c.ShiftMap(function (da) {
    return da(g.identity(g.categoryFn));
  });

  var V = function V(da) {
    return f.pure(r.applicativeEffect)(f.pure(r.applicativeEffect)(V));
  },
      A = function A(da) {
    return function (va) {
      var ca = function ca(ja) {
        return function (ea) {
          if (ea instanceof e.Right || ea instanceof e.Left) return f.pure(r.applicativeEffect)(y.unit);
          throw Error("Failed pattern match at Concur.Core.Types (line 193, column 5 - line 193, column 37): " + [ja.constructor.name, ea.constructor.name]);
        };
      };

      return function (ja) {
        return function () {
          ja(new e.Left(da))();
          var ea = M.killFiber(N.error("cancelling aff"))(va);
          M.runAff_(ca(ja))(ea)();
          return f.pure(r.applicativeEffect)(V);
        };
      };
    };
  },
      K = new t.Functor(function (da) {
    return function (va) {
      return function (ca) {
        return t.map(r.functorEffect)(t.map(r.functorEffect)(t.map(K)(da)))(va(function (ja) {
          return ca(da(ja));
        }));
      };
    };
  }),
      C = new t.Functor(function (da) {
    return function (va) {
      return t.map(K)(t.map(e.functorEither)(da))(va);
    };
  }),
      ha = function ha(da) {
    return function (va) {
      return function () {
        var ca = da();
        va(new e.Right(ca))();
        return f.pure(r.applicativeEffect)(ha(da));
      };
    };
  },
      sa = function sa(da) {
    return function (va) {
      return function () {
        va(new e.Left(da))();
        return f.pure(r.applicativeEffect)(sa(da));
      };
    };
  },
      za = function za(da) {
    return new H.Semigroup(function (va) {
      return function (ca) {
        return w.orr(ma(da))([va, ca]);
      };
    });
  },
      Ca = function Ca(da) {
    return new z.Plus(function () {
      return v(da);
    }, sa(D.mempty(da)));
  },
      ma = function ma(da) {
    return new w.MultiAlternative(function () {
      return Ca(da);
    }, function (va) {
      return function (ca) {
        var ja = function ja(ba) {
          return function (oa) {
            return R["new"](h.replicate(h.length(ba))(oa));
          };
        },
            ea = function ea(ba) {
          return function (oa) {
            return function (Ka) {
              return function (Ha) {
                function Ua(U, ia, xa, Da) {
                  var ta = h.uncons(xa);

                  if (ta instanceof u.Just) {
                    if (ta.value0.head instanceof e.Left) {
                      S = U;
                      Y = H.append(va.Semigroup0())(ia)(ta.value0.head.value0);
                      ra = ta.value0.tail;
                      Ha = Da;
                      return;
                    }

                    if (ta.value0.head instanceof e.Right) return ua = !0, function () {
                      U(new e.Right(ta.value0.head.value0))();
                      var Oa = R.read(Da)();
                      return t["void"](r.functorEffect)(I["for"](r.applicativeEffect)(I.traversableArray)(Oa)(function (La) {
                        return function () {
                          var B = La();
                          return t["void"](r.functorEffect)(B(function (wa) {
                            return f.pure(r.applicativeEffect)(y.unit);
                          }))();
                        };
                      }))();
                    };
                    throw Error("Failed pattern match at Concur.Core.Types (line 132, column 32 - line 142, column 55): " + [ta.value0.head.constructor.name]);
                  }

                  if (ta instanceof u.Nothing) return ua = !0, U(new e.Left(ia));
                  throw Error("Failed pattern match at Concur.Core.Types (line 131, column 29 - line 143, column 37): " + [ta.constructor.name]);
                }

                for (var S = ba, Y = oa, ra = Ka, ua = !1, fa; !ua;) {
                  fa = Ua(S, Y, ra, Ha);
                }

                return fa;
              };
            };
          };
        },
            P = function P(ba) {
          return function (oa) {
            return function (Ka) {
              return function (Ha) {
                return function (Ua) {
                  return function () {
                    var S = Ua(function (Y) {
                      return function () {
                        var ra = R.modify(function (ua) {
                          return u.fromMaybe(ua)(h.updateAt(Ha)(Y)(ua));
                        })(oa)();
                        return ea(ba)(D.mempty(va))(ra)(Ka)();
                      };
                    })();
                    return t["void"](r.functorEffect)(R.modify(function (Y) {
                      return u.fromMaybe(Y)(h.updateAt(Ha)(S)(Y));
                    })(Ka))();
                  };
                };
              };
            };
          };
        };

        return function (ba) {
          return function () {
            var oa = ja(ca)(f.pure(r.applicativeEffect)(V))(),
                Ka = ja(ca)(new e.Left(D.mempty(va)))();
            l.traverseWithIndex_(r.applicativeEffect)(l.foldableWithIndexArray)(P(ba)(Ka)(oa))(ca)();
            oa = R.read(oa)();
            oa = I.sequence(I.traversableArray)(r.applicativeEffect)(oa)();
            return f.pure(r.applicativeEffect)(w.orr(ma(va))(t.map(t.functorArray)(x)(oa)));
          };
        };
      };
    }(da));
  },
      v = function v(da) {
    return new d.Alt(function () {
      return C;
    }, H.append(za(da)));
  },
      Aa = function Aa(da) {
    return function (va) {
      return function (ca) {
        return function (ja) {
          var ea = function ea(P) {
            return function (ba) {
              return function (oa) {
                return function (Ka) {
                  return function () {
                    var Ha = T.setTimeout(da)(function () {
                      R.write(G.value)(ca)();
                      return Aa(ba)(P)(oa)(Ka)();
                    })();
                    return R.write(new O(Ha))(ca)();
                  };
                };
              };
            };
          };

          return function () {
            var P = R.read(ca)();
            if (P instanceof L) return ea(va)(da)(ca)(ja)();
            if (P instanceof O) return T.clearTimeout(P.value0)(), ea(va)(da)(ca)(ja)();
            if (P instanceof G) return va(new e.Right(ja))();
            throw Error("Failed pattern match at Concur.Core.Types (line 241, column 3 - line 246, column 34): " + [P.constructor.name]);
          };
        };
      };
    };
  },
      Q = new q.Monad(function () {
    return Pa;
  }, function () {
    return ka;
  }),
      ka = new p.Bind(function () {
    return Ja;
  }, function (da) {
    return function (va) {
      return function (ca) {
        var ja = R["new"](u.Nothing.value);
        return function () {
          var ea = ja(),
              P = da(function (oa) {
            if (oa instanceof e.Left) return ca(new e.Left(oa.value0));
            if (oa instanceof e.Right) return function () {
              var Ka = va(oa.value0)(ca)();
              return R.write(new u.Just(Ka))(ea)();
            };
            throw Error("Failed pattern match at Concur.Core.Types (line 86, column 7 - line 93, column 39): " + [oa.constructor.name]);
          })(),
              ba = R.read(ea)();
          if (ba instanceof u.Just) return ba.value0;
          if (ba instanceof u.Nothing) return function () {
            var oa = P();
            return p.bind(ka)(oa)(va);
          };
          throw Error("Failed pattern match at Concur.Core.Types (line 97, column 12 - line 101, column 41): " + [ba.constructor.name]);
        };
      };
    };
  }),
      Ja = new n.Apply(function () {
    return C;
  }, q.ap(Q)),
      Pa = new f.Applicative(function () {
    return Ja;
  }, function (da) {
    return function (va) {
      return t.voidLeft(r.functorEffect)(va(new e.Right(da)))(f.pure(r.applicativeEffect)(V));
    };
  }),
      Fa = function Fa(da) {
    return new E.MonadEffect(function () {
      return Q;
    }, ha);
  },
      Ea = function Ea(da) {
    return function (va) {
      var ca = function ca(ja) {
        return function (ea) {
          if (ea instanceof e.Right) return ja(new e.Right(ea.value0));
          if (ea instanceof e.Left) return J.log("error calling aff");
          throw Error("Failed pattern match at Concur.Core.Types (line 206, column 5 - line 206, column 40): " + [ja.constructor.name, ea.constructor.name]);
        };
      };

      return function (ja) {
        return function () {
          ja(new e.Left(da))();
          var ea = M.runAff(ca(ja))(va)();
          return f.pure(r.applicativeEffect)(A(da)(ea));
        };
      };
    };
  };

  b.display = sa;

  b.unWid = function (da) {
    return da;
  };

  b.runWidget = function (da) {
    return da;
  };

  b.mkWidget = function (da) {
    return da;
  };

  b.debounced = function (da) {
    return function (va) {
      var ca = function ca(ea) {
        return function (P) {
          return function (ba) {
            return function (oa) {
              if (oa instanceof e.Left) return ea(new e.Left(oa.value0));
              if (oa instanceof e.Right) return Aa(da)(ea)(ba)(oa.value0);
              throw Error("Failed pattern match at Concur.Core.Types (line 228, column 32 - line 230, column 48): " + [oa.constructor.name]);
            };
          };
        };
      },
          ja = R["new"](L.value);

      return function (ea) {
        return function () {
          var P = ja();
          return va(ca(ea)(da)(P))();
        };
      };
    };
  };

  b.widgetShiftMap = a;
  b.functorWidget = C;
  b.applyWidget = Ja;
  b.widgetMonad = Q;
  b.applicativeWidget = Pa;
  b.bindWidget = ka;
  b.widgetMultiAlternative = ma;

  b.widgetMonoid = function (da) {
    return new D.Monoid(function () {
      return za(da);
    }, z.empty(Ca(da)));
  };

  b.widgetAlt = v;
  b.widgetPlus = Ca;

  b.widgetAlternative = function (da) {
    return new k.Alternative(function () {
      return Pa;
    }, function () {
      return Ca(da);
    });
  };

  b.widgetMonadEff = Fa;

  b.widgetMonadAff = function (da) {
    return new F.MonadAff(function () {
      return Fa(da);
    }, Ea(D.mempty(da)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var b = a["Concur.Core"],
      d = a["Concur.Core.Types"],
      k = a["Control.Applicative"],
      f = a["Data.Either"],
      n = a.Effect,
      p = function p(g) {
    var q = function q(w) {
      return g(function (z) {
        return w(new f.Right(z));
      });
    };

    return d.mkWidget(function (w) {
      return function () {
        w(f.Left.create(q(w)))();
        return k.pure(n.applicativeEffect)(d.unWid(p(g)));
      };
    });
  };

  b.mkLeafWidget = p;

  b.mkNodeWidget = function (g) {
    return function (q) {
      var w = function w(c) {
        return function (h) {
          return g(function (e) {
            return h(new f.Right(e));
          })(c);
        };
      },
          z = function z(c) {
        return function (h) {
          if (h instanceof f.Left) return c(f.Left.create(w(h.value0)(c)));
          if (h instanceof f.Right) return c(new f.Right(h.value0));
          throw Error("Failed pattern match at Concur.Core (line 26, column 18 - line 28, column 30): " + [h.constructor.name]);
        };
      };

      return d.mkWidget(function (c) {
        return d.runWidget(q)(z(c));
      });
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var b = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (d) {
    this.liftWidget = d;
  }(a.identity(a.categoryFn));

  b.liftWidget = function (d) {
    return d.liftWidget;
  };

  b.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var b = a["Concur.Core.Props"];
  a = a["Data.Functor"];

  var d = function () {
    function f(n) {
      this.value0 = n;
    }

    f.create = function (n) {
      return new f(n);
    };

    return f;
  }(),
      k = function () {
    function f(n) {
      this.value0 = n;
    }

    f.create = function (n) {
      return new f(n);
    };

    return f;
  }();

  a = new a.Functor(function (f) {
    return function (n) {
      if (n instanceof d) return new d(n.value0);
      if (n instanceof k) return new k(function (p) {
        return n.value0(function (g) {
          return p(f(g));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [f.constructor.name, n.constructor.name]);
    };
  });
  b.PrimProp = d;
  b.Handler = k;

  b.mkProp = function (f) {
    return function (n) {
      if (n instanceof d) return n.value0;
      if (n instanceof k) return n.value0(f);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [f.constructor.name, n.constructor.name]);
    };
  };

  b.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var b = a["Concur.Core.DOM"],
      d = a["Concur.Core"],
      k = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Props"],
      n = a["Control.MultiAlternative"],
      p = a["Control.ShiftMap"],
      g = a["Data.Functor"],
      q = function q(w) {
    return function (z) {
      return function (c) {
        return function (h) {
          return p.shiftMap(w)(function (e) {
            return function (l) {
              return d.mkNodeWidget(function (t) {
                return function (u) {
                  return c(g.map(z)(function () {
                    var D = f.mkProp(t),
                        H = g.map(f.functorProps)(e);
                    return function (I) {
                      return D(H(I));
                    };
                  }())(h))(u);
                };
              })(l);
            };
          });
        };
      };
    };
  };

  b.el = q;

  b.elLeaf = function (w) {
    return function (z) {
      return function (c) {
        return function (h) {
          return k.liftWidget(w)(d.mkLeafWidget(function (e) {
            return c(g.map(z)(f.mkProp(e))(h));
          }));
        };
      };
    };
  };

  b["el'"] = function (w) {
    return function (z) {
      return function (c) {
        return function (h) {
          return function (e) {
            var l = q(w)(c)(h)(e),
                t = n.orr(z);
            return function (u) {
              return l(t(u));
            };
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Comonad"] = a["Control.Comonad"] || {};
  a = a["Control.Comonad"];

  a.Comonad = function (b, d) {
    this.Extend0 = b;
    this.extract = d;
  };

  a.extract = function (b) {
    return b.extract;
  };
})(PS);

(function (a) {
  a["Control.Extend"] = a["Control.Extend"] || {};

  a["Control.Extend"].Extend = function (b, d) {
    this.Functor0 = b;
    this.extend = d;
  };
})(PS);

(function (a) {
  a.defer = function (b) {
    var d = null;
    return function () {
      if (void 0 === b) return d;
      d = b();
      b = void 0;
      return d;
    };
  };

  a.force = function (b) {
    return b();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var b = a["Data.Lazy"],
      d = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (k) {
    return function (f) {
      return d.defer(function (n) {
        return k(d.force(f));
      });
    };
  });
  b.functorLazy = a;
  b.defer = d.defer;
  b.force = d.force;
})(PS);

(function (a) {
  a["Control.Cofree"] = a["Control.Cofree"] || {};

  var b = a["Control.Cofree"],
      d = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      f = a["Control.Applicative"],
      n = a["Control.Apply"],
      p = a["Control.Bind"],
      g = a["Control.Comonad"],
      q = a["Control.Extend"],
      w = a["Control.Monad"],
      z = a["Control.Plus"],
      c = a["Control.ShiftMap"],
      h = a["Data.Functor"],
      e = a["Data.Lazy"],
      l = a["Data.Tuple"],
      t = function t(E) {
    return l.snd(e.force(E));
  },
      u = function u(E) {
    return function (J) {
      return e.defer(function (N) {
        return new l.Tuple(E, J);
      });
    };
  },
      D = function D(E) {
    return l.fst(e.force(E));
  },
      H = function H(E) {
    return new h.Functor(function (J) {
      var N = function N(R) {
        return h.map(e.functorLazy)(function (T) {
          return new l.Tuple(J(T.value0), h.map(E)(N)(T.value1));
        })(R);
      };

      return N;
    });
  },
      I = function I(E) {
    return new q.Extend(function () {
      return H(E);
    }, function (J) {
      var N = function N(R) {
        return h.map(e.functorLazy)(function (T) {
          return new l.Tuple(J(R), h.map(E)(N)(T.value1));
        })(R);
      };

      return N;
    });
  },
      y = function y(E) {
    return new w.Monad(function () {
      return F(E);
    }, function () {
      return r(E);
    });
  },
      r = function r(E) {
    return new p.Bind(function () {
      return M(E);
    }, function (J) {
      return function (N) {
        var R = function R(L) {
          return function (O) {
            var G = h.map(E.Plus1().Alt0().Functor0())(R(L))(t(O)),
                x = h.map(E.Plus1().Alt0().Functor0())(T)(t(L));
            return u(D(O))(k.alt(E.Plus1().Alt0())(x)(G));
          };
        },
            T = function T(L) {
          return R(L)(N(D(L)));
        };

        return T(J);
      };
    });
  },
      M = function M(E) {
    return new n.Apply(function () {
      return H(E.Plus1().Alt0().Functor0());
    }, w.ap(y(E)));
  },
      F = function F(E) {
    return new f.Applicative(function () {
      return M(E);
    }, function (J) {
      return u(J)(z.empty(E.Plus1()));
    });
  };

  b.mkCofree = u;
  b.tail = t;

  b.comonadCofree = function (E) {
    return new g.Comonad(function () {
      return I(E);
    }, D);
  };

  b.applicativeCofree = F;
  b.bindCofree = r;

  b.shiftMapCofree = function (E) {
    return new c.ShiftMap(function (J) {
      return function (N) {
        return e.defer(function (R) {
          R = e.force(N);
          return new l.Tuple(R.value0, J(f.pure(F(d.widgetAlternative(E))))(R.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var b = a["Concur.Core.FRP"],
      d = a["Control.Applicative"],
      k = a["Control.Bind"],
      f = a["Control.Cofree"],
      n = a["Control.Comonad"],
      p = a["Data.Functor"],
      g = a["Data.Unit"],
      q = f.tail,
      w = f.mkCofree,
      z = function z(e) {
    return function (l) {
      return function (t) {
        return w(l)(p.map(e.Bind1().Apply0().Functor0())(function (u) {
          return z(e)(u)(t);
        })(t(l)));
      };
    };
  },
      c = function c(e) {
    return function (l) {
      return function (t) {
        var u = t(l);
        return w(n.extract(f.comonadCofree(e.Bind1().Apply0().Functor0()))(u))(k.bind(e.Bind1())(q(u))(function (D) {
          return d.pure(e.Applicative0())(c(e)(n.extract(f.comonadCofree(e.Bind1().Apply0().Functor0()))(D))(t));
        }));
      };
    };
  },
      h = function h(e) {
    return function (l) {
      return k.bind(e.Bind1())(q(l))(h(e));
    };
  };

  b.step = w;

  b.display = function (e) {
    return w(g.unit)(e);
  };

  b.loopW = z;
  b.loopS = c;
  b.dyn = h;
})(PS);

(function (a) {
  function b(f) {
    return function (n) {
      return function (p) {
        return d.createElement.apply(d, [f, n].concat(p));
      };
    };
  }

  var d = require("react"),
      k = function (f) {
    function n(p, g, q) {
      switch (g) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          p[g] = q;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          p[g] = function (w, z) {
            return q(w)(z)();
          };

          break;

        case "componentDidUpdate":
          p[g] = function (w, z, c) {
            return q(w)(z)(c)();
          };

          break;

        case "unsafeComponentWillMount":
          p.UNSAFE_componentWillMount = q;
          break;

        case "unsafeComponentWillReceiveProps":
          p.UNSAFE_componentWillReceiveProps = function (w) {
            return q(w)();
          };

          break;

        case "unsafeComponentWillUpdate":
          p.UNSAFE_componentWillUpdate = function (w, z) {
            return q(w)(z)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + g);
      }
    }

    return function (p) {
      return function (g) {
        var q = function q(w) {
          f.call(this, w);
          w = g(this)();

          for (var z in w) {
            n(this, z, w[z]);
          }
        };

        q.displayName = p;
        q.prototype = Object.create(f.prototype);
        return q.prototype.constructor = q;
      };
    };
  }(d.Component);

  a.componentImpl = k;
  a.fragment = d.Fragment;

  a.setStateImpl = function (f) {
    return function (n) {
      return function () {
        f.setState(n);
      };
    };
  };

  a.getState = function (f) {
    return function () {
      if (!f.state) throw Error("[purescript-react] Cannot get state within constructor");
      return f.state;
    };
  };

  a.createElementImpl = b;
  a.createElementTagName = b;

  a.createLeafElementImpl = function (f) {
    return function (n) {
      return d.createElement(f, n);
    };
  };

  a.createElementTagNameDynamic = function (f) {
    return function (n) {
      return function (p) {
        return d.createElement(f, n, p);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var b = a.React,
      d = a.React;
  a = d.setStateImpl;
  var k = new function (f) {
    this.toElement = f;
  }((0, d.createElementImpl)(d.fragment)({}));

  b.component = function (f) {
    return d.componentImpl;
  };

  b.writeState = a;

  b.createLeafElement = function (f) {
    return d.createLeafElementImpl;
  };

  b.toElement = function (f) {
    return f.toElement;
  };

  b.isReactElementArray = k;
  b.getState = d.getState;
  b.createElementTagName = d.createElementTagName;
  b.createElementTagNameDynamic = d.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var b = a["Concur.Core.Types"],
      d = a["Control.Applicative"],
      k = a["Control.Apply"],
      f = a["Data.Either"],
      n = a["Data.Functor"],
      p = a["Data.Maybe"],
      g = a["Data.Monoid"],
      q = a.Effect,
      w = a["Effect.Console"],
      z = a["Effect.Ref"],
      c = a.React,
      h = function h(u) {
    return c.toElement(c.isReactElementArray)(u.view);
  },
      e = function e(u) {
    return function (D) {
      return function (H) {
        return function (I) {
          return d.pure(q.applicativeEffect)({
            state: {
              view: D
            },
            render: n.map(q.functorEffect)(h)(c.getState(I)),
            componentDidMount: k.applySecond(q.applyEffect)(u)(function (y) {
              return function (r) {
                return function (M) {
                  return function () {
                    z.write(new p.Just(y))(M)();
                    return n["void"](q.functorEffect)(c.writeState(y)({
                      view: r
                    }))();
                  };
                };
              };
            }(I)(D)(H))
          });
        };
      };
    };
  },
      l = function l(u) {
    return function (D) {
      return function (H) {
        return c.createLeafElement()(c.component()("Concur")(e(u)(D)(H)))({});
      };
    };
  },
      t = function t(u) {
    return function (D) {
      return function (H) {
        return function () {
          var I = z["new"](p.Nothing.value)();
          return n["void"](q.functorEffect)(b.runWidget(D)(function (y) {
            if (y instanceof f.Left) return function () {
              var r = z.read(I)();
              if (r instanceof p.Just) return n["void"](q.functorEffect)(c.writeState(r.value0)({
                view: y.value0
              }))();
              if (r instanceof p.Nothing) return H(l(u)(y.value0)(I))();
              throw Error("Failed pattern match at Concur.React (line 37, column 9 - line 39, column 58): " + [r.constructor.name]);
            };
            if (y instanceof f.Right) return w.log("Application exited");
            throw Error("Failed pattern match at Concur.React (line 34, column 5 - line 40, column 42): " + [y.constructor.name]);
          }))();
        };
      };
    };
  };

  a["Concur.React"].renderComponent = function (u) {
    return function (D) {
      return t(g.mempty(q.monoidEffect(g.monoidUnit)))(u)(D);
    };
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (b) {
    return function (d) {
      var k = {};
      k[b] = d;
      return k;
    };
  };

  a.unsafeUnfoldProps = function (b) {
    return function (d) {
      var k = {},
          f = {};
      f[b] = k;

      for (var n in d) {
        d.hasOwnProperty(n) && (k[n] = d[n]);
      }

      return f;
    };
  };

  a.unsafeFromPropsArray = function (b) {
    for (var d = {}, k = 0, f = b.length; k < f; k++) {
      var n = b[k],
          p;

      for (p in n) {
        n.hasOwnProperty(p) && (d[p] = n[p]);
      }
    }

    return d;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (b) {
    return function (d) {
      return b(d)();
    };
  };

  a.runEffectFn1 = function (b) {
    return function (d) {
      return function () {
        return b(d);
      };
    };
  };
})(PS["Effect.Uncurried"] = PS["Effect.Uncurried"] || {});

(function (a) {
  a["Effect.Uncurried"] = a["Effect.Uncurried"] || {};
  var b = a["Effect.Uncurried"];
  a = a["Effect.Uncurried"];
  b.mkEffectFn1 = a.mkEffectFn1;
  b.runEffectFn1 = a.runEffectFn1;
})(PS);

(function (a) {
  a["React.DOM.Props"] = a["React.DOM.Props"] || {};
  var b = a["React.DOM.Props"],
      d = a["React.DOM.Props"],
      k = a["Effect.Uncurried"];
  a = d.unsafeMkProps("value");
  var f = d.unsafeMkProps("target"),
      n = d.unsafeUnfoldProps("style"),
      p = d.unsafeMkProps("rel"),
      g = d.unsafeMkProps("placeholder"),
      q = d.unsafeMkProps("href"),
      w = d.unsafeMkProps("disabled"),
      z = d.unsafeMkProps("defaultValue"),
      c = d.unsafeMkProps("className"),
      h = d.unsafeMkProps("checked"),
      e = d.unsafeMkProps("type"),
      l = d.unsafeMkProps("id");
  b.style = n;
  b.checked = h;
  b.className = c;
  b.defaultValue = z;
  b.disabled = w;
  b.href = q;
  b._id = l;
  b.placeholder = g;
  b.rel = p;
  b.target = f;
  b._type = e;
  b.value = a;

  b.onChange = function (t) {
    return d.unsafeMkProps("onChange")(k.mkEffectFn1(t));
  };

  b.onClick = function (t) {
    return d.unsafeMkProps("onClick")(k.mkEffectFn1(t));
  };

  b.unsafeFromPropsArray = d.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var b = a["React.DOM"],
      d = a.React,
      k = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var f = function f(D) {
    return function (H) {
      return function (I) {
        if (D) {
          if (D) var y = d.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [D.constructor.name]);
        } else y = d.createElementTagName;
        return y(H)(k.unsafeFromPropsArray(I));
      };
    };
  },
      n = f(!1)("nav"),
      p = f(!1)("option"),
      g = f(!1)("p"),
      q = f(!1)("select"),
      w = f(!1)("span"),
      z = f(!1)("ul"),
      c = f(!1)("li"),
      h = f(!1)("div"),
      e = f(!1)("code"),
      l = f(!1)("cite"),
      t = f(!1)("button"),
      u = f(!1)("a");

  b.text = a;
  b.a = u;

  b.br = function (D) {
    return f(!1)("br")(D)([]);
  };

  b.button = t;
  b.cite = l;
  b.code = e;
  b.div = h;

  b.input = function (D) {
    return f(!1)("input")(D)([]);
  };

  b.li = c;
  b.nav = n;
  b.option = p;
  b.p = g;
  b.select = q;
  b.span = w;
  b.ul = z;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var b = a["Concur.React.DOM"],
      d = a["Concur.Core.DOM"],
      k = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Types"],
      n = a["Data.Functor"],
      p = a["React.DOM"],
      g = function g(u) {
    return function (D) {
      return function (H) {
        return [u(D)(H)];
      };
    };
  },
      q = function q(u) {
    return function (D) {
      return d.elLeaf(u)(n.functorArray)(function (H) {
        return [D(H)];
      });
    };
  },
      w = function w(u) {
    return function (D) {
      return function (H) {
        return d["el'"](u)(D)(n.functorArray)(g(H));
      };
    };
  },
      z = function z(u) {
    return function (D) {
      return w(D)(u)(p.li);
    };
  },
      c = function c(u) {
    return function (D) {
      return w(D)(u)(p.span);
    };
  },
      h = function h(u) {
    return function (D) {
      return d.el(u)(n.functorArray)(g(D));
    };
  },
      e = function e(u) {
    return function (D) {
      return w(D)(u)(p.div);
    };
  },
      l = function l(u) {
    return function (D) {
      return w(D)(u)(p.code);
    };
  },
      t = function t(u) {
    return function (D) {
      return w(D)(u)(p.cite);
    };
  };

  b.text = function (u) {
    return function (D) {
      return k.liftWidget(u)(f.display([p.text(D)]));
    };
  };

  b.a_ = function (u) {
    return h(u)(p.a);
  };

  b.a = function (u) {
    return function (D) {
      return w(D)(u)(p.a);
    };
  };

  b["br'"] = function (u) {
    return q(u)(p.br)([]);
  };

  b.button_ = function (u) {
    return h(u)(p.button);
  };

  b.button = function (u) {
    return function (D) {
      return w(D)(u)(p.button);
    };
  };

  b["cite'"] = function (u) {
    return function (D) {
      return t(u)(D)([]);
    };
  };

  b["code'"] = function (u) {
    return function (D) {
      return l(u)(D)([]);
    };
  };

  b.div_ = function (u) {
    return h(u)(p.div);
  };

  b.div = e;

  b["div'"] = function (u) {
    return function (D) {
      return e(u)(D)([]);
    };
  };

  b.input = function (u) {
    return q(u)(p.input);
  };

  b.li_ = function (u) {
    return h(u)(p.li);
  };

  b.li = z;

  b["li'"] = function (u) {
    return function (D) {
      return z(u)(D)([]);
    };
  };

  b.nav = function (u) {
    return function (D) {
      return w(D)(u)(p.nav);
    };
  };

  b.option = function (u) {
    return function (D) {
      return w(D)(u)(p.option);
    };
  };

  b.p_ = function (u) {
    return h(u)(p.p);
  };

  b.select = function (u) {
    return function (D) {
      return w(D)(u)(p.select);
    };
  };

  b.span_ = function (u) {
    return h(u)(p.span);
  };

  b.span = c;

  b["span'"] = function (u) {
    return function (D) {
      return c(u)(D)([]);
    };
  };

  b.ul_ = function (u) {
    return h(u)(p.ul);
  };

  b.ul = function (u) {
    return function (D) {
      return w(D)(u)(p.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var b = a["Concur.React.Props"],
      d = a["Concur.Core.Props"],
      k = a["Data.Array"],
      f = a["Data.Foldable"],
      n = a["Data.Maybe"],
      p = a["Data.Monoid"],
      g = a["React.DOM.Props"];
  a = new d.Handler(g.onClick);

  var q = new d.Handler(g.onChange),
      w = function w(c) {
    return d.PrimProp.create(g.className(c));
  },
      z = function () {
    var c = f.intercalate(f.foldableArray)(p.monoidString)(" "),
        h = k.concatMap(n.maybe([])(function (e) {
      return [e];
    }));
    return function (e) {
      return w(c(h(e)));
    };
  }();

  b.classList = z;

  b.unsafeTargetValue = function (c) {
    return c.target.value;
  };

  b.style = function (c) {
    return d.PrimProp.create(g.style(c));
  };

  b.checked = function (c) {
    return d.PrimProp.create(g.checked(c));
  };

  b.className = w;

  b.defaultValue = function (c) {
    return d.PrimProp.create(g.defaultValue(c));
  };

  b.disabled = function (c) {
    return d.PrimProp.create(g.disabled(c));
  };

  b.href = function (c) {
    return d.PrimProp.create(g.href(c));
  };

  b._id = function (c) {
    return d.PrimProp.create(g._id(c));
  };

  b.placeholder = function (c) {
    return d.PrimProp.create(g.placeholder(c));
  };

  b.rel = function (c) {
    return d.PrimProp.create(g.rel(c));
  };

  b.target = function (c) {
    return d.PrimProp.create(g.target(c));
  };

  b._type = function (c) {
    return d.PrimProp.create(g._type(c));
  };

  b.value = function (c) {
    return d.PrimProp.create(g.value(c));
  };

  b.onChange = q;
  b.onClick = a;
})(PS);

(function (a) {
  var b = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (d, k) {
    return b.render(d, k);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var b = a.ReactDOM,
      d = a["Data.Functor"],
      k = a["Data.Nullable"],
      f = a.Effect;

  a.ReactDOM.render = function (n) {
    return function (p) {
      return d.map(f.functorEffect)(k.toMaybe)(function () {
        return b.renderImpl(n, p);
      });
    };
  };
})(PS);

(function (a) {
  a.children = function (b) {
    return function (d) {
      return function () {
        return d[b];
      };
    };
  }("children");

  a._querySelector = function (b) {
    return function (d) {
      return function () {
        return d.querySelector(b);
      };
    };
  };
})(PS["Web.DOM.ParentNode"] = PS["Web.DOM.ParentNode"] || {});

(function (a) {
  a["Web.DOM.ParentNode"] = a["Web.DOM.ParentNode"] || {};
  var b = a["Web.DOM.ParentNode"],
      d = a["Web.DOM.ParentNode"],
      k = a["Data.Functor"],
      f = a["Data.Nullable"],
      n = a.Effect;

  b.querySelector = function (p) {
    var g = k.map(n.functorEffect)(f.toMaybe),
        q = d._querySelector(p);

    return function (w) {
      return g(q(w));
    };
  };

  b.children = d.children;
})(PS);

(function (a) {
  a.eventListener = function (b) {
    return function () {
      return function (d) {
        return b(d)();
      };
    };
  };

  a.addEventListener = function (b) {
    return function (d) {
      return function (k) {
        return function (f) {
          return function () {
            return f.addEventListener(b, d, k);
          };
        };
      };
    };
  };

  a.removeEventListener = function (b) {
    return function (d) {
      return function (k) {
        return function (f) {
          return function () {
            return f.removeEventListener(b, d, k);
          };
        };
      };
    };
  };
})(PS["Web.Event.EventTarget"] = PS["Web.Event.EventTarget"] || {});

(function (a) {
  a["Web.Event.EventTarget"] = a["Web.Event.EventTarget"] || {};
  var b = a["Web.Event.EventTarget"];
  a = a["Web.Event.EventTarget"];
  b.eventListener = a.eventListener;
  b.addEventListener = a.addEventListener;
  b.removeEventListener = a.removeEventListener;
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
  a["Web.HTML.Event.EventTypes"] = a["Web.HTML.Event.EventTypes"] || {};
  a = a["Web.HTML.Event.EventTypes"];
  a.domcontentloaded = "DOMContentLoaded";
  a.error = "error";
  a.load = "load";
})(PS);

(function (a) {
  a._readyState = function (b) {
    return function () {
      return b.readyState;
    };
  };
})(PS["Web.HTML.HTMLDocument"] = PS["Web.HTML.HTMLDocument"] || {});

(function (a) {
  a["Web.HTML.HTMLDocument.ReadyState"] = a["Web.HTML.HTMLDocument.ReadyState"] || {};

  var b = a["Web.HTML.HTMLDocument.ReadyState"],
      d = a["Data.Maybe"],
      k = function () {
    function p() {}

    p.value = new p();
    return p;
  }(),
      f = function () {
    function p() {}

    p.value = new p();
    return p;
  }(),
      n = function () {
    function p() {}

    p.value = new p();
    return p;
  }();

  b.Loading = k;

  b.parse = function (p) {
    return "loading" === p ? new d.Just(k.value) : "interactive" === p ? new d.Just(f.value) : "complete" === p ? new d.Just(n.value) : d.Nothing.value;
  };
})(PS);

(function (a) {
  a["Web.HTML.HTMLDocument"] = a["Web.HTML.HTMLDocument"] || {};
  var b = a["Web.HTML.HTMLDocument"],
      d = a["Web.HTML.HTMLDocument"],
      k = a["Data.Functor"],
      f = a["Data.Maybe"],
      n = a.Effect,
      p = a["Unsafe.Coerce"],
      g = a["Web.HTML.HTMLDocument.ReadyState"];
  p = a = p.unsafeCoerce;

  var q = function () {
    var w = k.map(n.functorEffect)(function () {
      var z = f.fromMaybe(g.Loading.value);
      return function (c) {
        return z(g.parse(c));
      };
    }());
    return function (z) {
      return w(d._readyState(z));
    };
  }();

  b.toDocument = p;
  b.toParentNode = a;
  b.readyState = q;
})(PS);

(function (a) {
  a._read = function (b, d, k) {
    var f = Object.prototype.toString.call(k);
    return 0 === f.indexOf("[object HTML") && f.indexOf("Element]") === f.length - 8 ? d(k) : b;
  };

  a.click = function (b) {
    return function () {
      return b.click();
    };
  };
})(PS["Web.HTML.HTMLElement"] = PS["Web.HTML.HTMLElement"] || {});

(function (a) {
  a["Web.HTML.HTMLElement"] = a["Web.HTML.HTMLElement"] || {};
  var b = a["Web.HTML.HTMLElement"],
      d = a["Web.HTML.HTMLElement"],
      k = a["Data.Maybe"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  b.fromElement = function (f) {
    return d._read(k.Nothing.value, k.Just.create, f);
  };

  b.toElement = a;
  b.click = d.click;
})(PS);

(function (a) {
  a.document = function (b) {
    return function () {
      return b.document;
    };
  };
})(PS["Web.HTML.Window"] = PS["Web.HTML.Window"] || {});

(function (a) {
  a["Web.HTML.Window"] = a["Web.HTML.Window"] || {};
  var b = a["Web.HTML.Window"],
      d = a["Web.HTML.Window"];
  b.toEventTarget = a["Unsafe.Coerce"].unsafeCoerce;
  b.document = d.document;
})(PS);

(function (a) {
  a["Concur.React.Run"] = a["Concur.React.Run"] || {};

  var b = a["Concur.React.Run"],
      d = a["Concur.React"],
      k = a["Control.Applicative"],
      f = a["Control.Bind"],
      n = a["Data.Either"],
      p = a["Data.Function"],
      g = a["Data.Functor"],
      q = a["Data.Maybe"],
      w = a["Data.Unit"],
      z = a.Effect,
      c = a["Effect.Aff"],
      h = a["Effect.Class"],
      e = a.ReactDOM,
      l = a["Web.DOM.ParentNode"],
      t = a["Web.Event.EventTarget"],
      u = a["Web.HTML"],
      D = a["Web.HTML.Event.EventTypes"],
      H = a["Web.HTML.HTMLDocument"],
      I = a["Web.HTML.HTMLDocument.ReadyState"],
      y = a["Web.HTML.HTMLElement"],
      r = a["Web.HTML.Window"],
      M = function M(N) {
    return f.bind(c.bindAff)(h.liftEffect(c.monadEffectAff)(f.bindFlipped(z.bindEffect)(f.composeKleisliFlipped(z.bindEffect)(function () {
      var R = l.querySelector(N);
      return function (T) {
        return R(H.toParentNode(T));
      };
    }())(r.document))(u.window)))(function (R) {
      return k.pure(c.applicativeAff)(f.bindFlipped(q.bindMaybe)(y.fromElement)(R));
    });
  },
      F = c.runAff_(n.either(a["Effect.Exception"].throwException)(p["const"](k.pure(z.applicativeEffect)(w.unit)))),
      E = c.makeAff(function (N) {
    return function () {
      if (f.bindFlipped(z.bindEffect)(H.readyState)(f.bindFlipped(z.bindEffect)(r.document)(u.window))() instanceof I.Loading) {
        var R = g.map(z.functorEffect)(r.toEventTarget)(u.window)(),
            T = t.eventListener(function (L) {
          return N(new n.Right(w.unit));
        })();
        t.addEventListener(D.domcontentloaded)(T)(!1)(R)();
        return c.effectCanceler(t.removeEventListener(D.domcontentloaded)(T)(!1)(R));
      }

      N(new n.Right(w.unit))();
      return c.nonCanceler;
    };
  }),
      J = function J(N) {
    return function (R) {
      var T = function T(L) {
        return function (O) {
          return g["void"](z.functorEffect)(e.render(O)(y.toElement(L)));
        };
      };

      return F(f.discard(f.discardUnit)(c.bindAff)(E)(function () {
        return f.bind(c.bindAff)(M(N))(function (L) {
          if (L instanceof q.Nothing) return k.pure(c.applicativeAff)(w.unit);
          if (L instanceof q.Just) return h.liftEffect(c.monadEffectAff)(d.renderComponent(R)(T(L.value0)));
          throw Error("Failed pattern match at Concur.React.Run (line 38, column 3 - line 40, column 64): " + [L.constructor.name]);
        });
      }));
    };
  };

  b.runWidgetInDom = function (N) {
    return J("#" + N);
  };
})(PS);

(function (a) {
  a["Control.Monad.Maybe.Trans"] = a["Control.Monad.Maybe.Trans"] || {};

  var b = a["Control.Monad.Maybe.Trans"],
      d = a["Control.Applicative"],
      k = a["Control.Apply"],
      f = a["Control.Bind"],
      n = a["Control.Monad"],
      p = a["Data.Functor"],
      g = a["Data.Maybe"],
      q = function q(e) {
    return new p.Functor(function (l) {
      return function (t) {
        return p.map(e)(p.map(g.functorMaybe)(l))(t);
      };
    });
  },
      w = function w(e) {
    return new n.Monad(function () {
      return h(e);
    }, function () {
      return z(e);
    });
  },
      z = function z(e) {
    return new f.Bind(function () {
      return c(e);
    }, function (l) {
      return function (t) {
        return f.bind(e.Bind1())(l)(function (u) {
          if (u instanceof g.Nothing) return d.pure(e.Applicative0())(g.Nothing.value);
          if (u instanceof g.Just) return t(u.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [u.constructor.name]);
        });
      };
    });
  },
      c = function c(e) {
    return new k.Apply(function () {
      return q(e.Bind1().Apply0().Functor0());
    }, n.ap(w(e)));
  },
      h = function h(e) {
    return new d.Applicative(function () {
      return c(e);
    }, function () {
      var l = d.pure(e.Applicative0());
      return function (t) {
        return l(g.Just.create(t));
      };
    }());
  };

  b.MaybeT = function (e) {
    return e;
  };

  b.runMaybeT = function (e) {
    return e;
  };

  b.applicativeMaybeT = h;
  b.bindMaybeT = z;
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (b) {
    return function (d) {
      return b(d).value1;
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var b = a["Control.Monad.State.Class"],
      d = a["Data.Tuple"],
      k = a["Data.Unit"];

  b.MonadState = function (f, n) {
    this.Monad0 = f;
    this.state = n;
  };

  b.get = function (f) {
    return (0, f.state)(function (n) {
      return new d.Tuple(n, n);
    });
  };

  b.put = function (f) {
    return function (n) {
      return (0, f.state)(function (p) {
        return new d.Tuple(k.unit, n);
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};

  var b = a["Control.Monad.State.Trans"],
      d = a["Control.Applicative"],
      k = a["Control.Apply"],
      f = a["Control.Bind"],
      n = a["Control.Monad"],
      p = a["Control.Monad.State.Class"],
      g = a["Data.Functor"],
      q = a["Data.Tuple"],
      w = function w(l) {
    return new g.Functor(function (t) {
      return function (u) {
        return function (D) {
          return g.map(l)(function (H) {
            return new q.Tuple(t(H.value0), H.value1);
          })(u(D));
        };
      };
    });
  },
      z = function z(l) {
    return new n.Monad(function () {
      return e(l);
    }, function () {
      return c(l);
    });
  },
      c = function c(l) {
    return new f.Bind(function () {
      return h(l);
    }, function (t) {
      return function (u) {
        return function (D) {
          return f.bind(l.Bind1())(t(D))(function (H) {
            return u(H.value0)(H.value1);
          });
        };
      };
    });
  },
      h = function h(l) {
    return new k.Apply(function () {
      return w(l.Bind1().Apply0().Functor0());
    }, n.ap(z(l)));
  },
      e = function e(l) {
    return new d.Applicative(function () {
      return h(l);
    }, function (t) {
      return function (u) {
        return d.pure(l.Applicative0())(new q.Tuple(t, u));
      };
    });
  };

  b.bindStateT = c;

  b.monadStateStateT = function (l) {
    return new p.MonadState(function () {
      return z(l);
    }, function (t) {
      return function () {
        var u = d.pure(l.Applicative0());
        return function (D) {
          return u(t(D));
        };
      }();
    });
  };
})(PS);

(function (a) {
  a["Control.Monad.Writer.Trans"] = a["Control.Monad.Writer.Trans"] || {};

  var b = a["Control.Monad.Writer.Trans"],
      d = a["Control.Applicative"],
      k = a["Control.Apply"],
      f = a["Control.Bind"],
      n = a["Control.Monad"],
      p = a["Control.Monad.Writer.Class"],
      g = a["Data.Functor"],
      q = a["Data.Monoid"],
      w = a["Data.Semigroup"],
      z = a["Data.Tuple"],
      c = a["Data.Unit"],
      h = function h(H) {
    return function (I) {
      return H(I);
    };
  },
      e = function e(H) {
    return new g.Functor(function (I) {
      return h(g.map(H)(function (y) {
        return new z.Tuple(I(y.value0), y.value1);
      }));
    });
  },
      l = function l(H) {
    return function (I) {
      return new k.Apply(function () {
        return e(I.Functor0());
      }, function (y) {
        return function (r) {
          return k.apply(I)(g.map(I.Functor0())(function (M) {
            return function (F) {
              return new z.Tuple(M.value0(F.value0), w.append(H)(M.value1)(F.value1));
            };
          })(y))(r);
        };
      });
    };
  },
      t = function t(H) {
    return function (I) {
      return new f.Bind(function () {
        return l(H)(I.Apply0());
      }, function (y) {
        return function (r) {
          return f.bind(I)(y)(function (M) {
            var F = r(M.value0);
            return g.map(I.Apply0().Functor0())(function (E) {
              return new z.Tuple(E.value0, w.append(H)(M.value1)(E.value1));
            })(F);
          });
        };
      });
    };
  },
      u = function u(H) {
    return function (I) {
      return new d.Applicative(function () {
        return l(H.Semigroup0())(I.Apply0());
      }, function (y) {
        return d.pure(I)(new z.Tuple(y, q.mempty(H)));
      });
    };
  },
      D = function D(H) {
    return function (I) {
      return new n.Monad(function () {
        return u(H)(I.Applicative0());
      }, function () {
        return t(H.Semigroup0())(I.Bind1());
      });
    };
  };

  b.runWriterT = function (H) {
    return H;
  };

  b.monadWriterT = D;

  b.monadTellWriterT = function (H) {
    return function (I) {
      return new p.MonadTell(function () {
        return D(H)(I);
      }, function () {
        var y = d.pure(I.Applicative0()),
            r = z.Tuple.create(c.unit);
        return function (M) {
          return y(r(M));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Writer"] = a["Control.Monad.Writer"] || {};
  var b = a["Control.Monad.Writer"],
      d = a["Control.Monad.Writer.Trans"],
      k = a["Data.Identity"],
      f = a["Data.Newtype"];

  a = function () {
    var n = f.unwrap(k.newtypeIdentity);
    return function (p) {
      return n(d.runWriterT(p));
    };
  }();

  b.runWriter = a;
})(PS);

(function (a) {
  a["Data.Array.NonEmpty"] = a["Data.Array.NonEmpty"] || {};
  var b = a["Data.Array.NonEmpty"],
      d = a["Data.Array"],
      k = a["Data.Boolean"],
      f = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var n = a.unsafeCoerce,
      p = a.unsafeCoerce;

  a = function (g) {
    return function (q) {
      return g(p(q));
    };
  }(d.length);

  b.fromArray = function (g) {
    if (0 < d.length(g)) return new f.Just(n(g));
    if (k.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [g.constructor.name]);
  };

  b.toArray = p;
  b.length = a;

  b["cons'"] = function (g) {
    return function (q) {
      return n(d.cons(g)(q));
    };
  };
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var b = a["Data.Array.NonEmpty.Internal"],
      d = a["Data.Unfoldable1"].unfoldable1Array,
      k = a["Data.Traversable"].traversableArray,
      f = a["Data.Functor"].functorArray,
      n = a["Data.Foldable"].foldableArray;
  b.semigroupNonEmptyArray = a["Data.Semigroup"].semigroupArray;
  b.functorNonEmptyArray = f;
  b.foldableNonEmptyArray = n;
  b.unfoldable1NonEmptyArray = d;
  b.traversableNonEmptyArray = k;
})(PS);

(function (a) {
  a.toCharCode = function (b) {
    return b.charCodeAt(0);
  };

  a.fromCharCode = function (b) {
    return String.fromCharCode(b);
  };
})(PS["Data.Enum"] = PS["Data.Enum"] || {});

(function (a) {
  a["Data.Enum"] = a["Data.Enum"] || {};
  var b = a["Data.Enum"],
      d = a["Data.Enum"],
      k = a["Control.Apply"],
      f = a["Data.Bounded"],
      n = a["Data.Functor"],
      p = a["Data.Maybe"],
      g = a["Data.Newtype"],
      q = a["Data.Ord"],
      w = a["Data.Tuple"],
      z = a["Data.Unfoldable1"];

  a = function a(F) {
    return F;
  };

  var c = function c(F) {
    this.Bounded0 = F;
  },
      h = function h(F, E, J) {
    this.Ord0 = F;
    this.pred = E;
    this.succ = J;
  },
      e = function e(F, E, J, N, R) {
    this.Bounded0 = F;
    this.Enum1 = E;
    this.cardinality = J;
    this.fromEnum = N;
    this.toEnum = R;
  },
      l = new c(function () {
    return f.boundedBoolean;
  }),
      t = new g.Newtype(function (F) {
    return F;
  }, a),
      u = function u(F) {
    return new h(function () {
      return p.ordMaybe(F.Enum1().Ord0());
    }, function (E) {
      if (E instanceof p.Nothing) return p.Nothing.value;
      if (E instanceof p.Just) return new p.Just((0, F.Enum1().pred)(E.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [E.constructor.name]);
    }, function (E) {
      if (E instanceof p.Nothing) return new p.Just(new p.Just(f.bottom(F.Bounded0())));
      if (E instanceof p.Just) return n.map(p.functorMaybe)(p.Just.create)((0, F.Enum1().succ)(E.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [E.constructor.name]);
    });
  },
      D = new h(function () {
    return q.ordBoolean;
  }, function (F) {
    return F ? new p.Just(!1) : p.Nothing.value;
  }, function (F) {
    return F ? p.Nothing.value : new p.Just(!0);
  }),
      H = function H(F) {
    return function (E) {
      return function (J) {
        return F(E(J) + 1 | 0);
      };
    };
  },
      I = function I(F) {
    return function (E) {
      return function (J) {
        return F(E(J) - 1 | 0);
      };
    };
  },
      y = function y(F) {
    return F >= f.bottom(f.boundedInt) && F <= f.top(f.boundedInt) ? new p.Just(d.fromCharCode(F)) : p.Nothing.value;
  },
      r = new h(function () {
    return q.ordChar;
  }, I(y)(d.toCharCode), H(y)(d.toCharCode));

  y = new e(function () {
    return f.boundedChar;
  }, function () {
    return r;
  }, d.toCharCode(f.top(f.boundedChar)) - d.toCharCode(f.bottom(f.boundedChar)) | 0, d.toCharCode, y);
  var M = new e(function () {
    return f.boundedBoolean;
  }, function () {
    return D;
  }, 2, function (F) {
    if (!F) return 0;
    if (F) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [F.constructor.name]);
  }, function (F) {
    return 0 === F ? new p.Just(!1) : 1 === F ? new p.Just(!0) : p.Nothing.value;
  });
  b.Enum = h;
  b.BoundedEnum = e;

  b.toEnum = function (F) {
    return F.toEnum;
  };

  b.fromEnum = function (F) {
    return F.fromEnum;
  };

  b.toEnumWithDefaults = function (F) {
    return function (E) {
      return function (J) {
        return function (N) {
          var R = (0, F.toEnum)(N);
          if (R instanceof p.Just) return R.value0;
          if (R instanceof p.Nothing) return N < (0, F.fromEnum)(f.bottom(F.Bounded0())) ? E : J;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [R.constructor.name]);
        };
      };
    };
  };

  b.Cardinality = a;

  b.upFromIncluding = function (F) {
    return function (E) {
      return z.unfoldr1(E)(k.apply(k.applyFn)(w.Tuple.create)(F.succ));
    };
  };

  b.defaultSucc = H;
  b.defaultPred = I;
  b.SmallBounded = c;
  b.boundedEnumBoolean = M;
  b.boundedEnumChar = y;
  b.newtypeCardinality = t;

  b.boundedEnumMaybe = function (F) {
    return function (E) {
      return new e(function () {
        return p.boundedMaybe(E.Bounded0());
      }, function () {
        return u(E);
      }, g.unwrap(t)(E.cardinality) + 1 | 0, function (J) {
        if (J instanceof p.Nothing) return 0;
        if (J instanceof p.Just) return (0, E.fromEnum)(J.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [J.constructor.name]);
      }, function (J) {
        return 0 === J ? p.Nothing.value : n.map(p.functorMaybe)(p.Just.create)((0, E.toEnum)(J - 1 | 0));
      });
    };
  };

  b.smallBoundedBoolean = l;
})(PS);

(function (a) {
  a["Data.Char"] = a["Data.Char"] || {};
  var b = a["Data.Char"];
  a = a["Data.Enum"];
  a = a.toEnum(a.boundedEnumChar);
  b.fromCharCode = a;
})(PS);

(function (a) {
  a.intSub = function (b) {
    return function (d) {
      return b - d | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (b) {
    return function (d) {
      return b + d | 0;
    };
  };

  a.intMul = function (b) {
    return function (d) {
      return b * d | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var b = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (d, k, f, n) {
    this.add = d;
    this.mul = k;
    this.one = f;
    this.zero = n;
  }(a.intAdd, a.intMul, 1, 0);
  b.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var b = a["Data.Ring"],
      d = a["Data.Semiring"];
  a = new function (k, f) {
    this.Semiring0 = k;
    this.sub = f;
  }(function () {
    return d.semiringInt;
  }, a["Data.Ring"].intSub);
  b.ringInt = a;
})(PS);

(function (a) {
  a["Data.CommutativeRing"] = a["Data.CommutativeRing"] || {};
  var b = a["Data.CommutativeRing"],
      d = a["Data.Ring"];
  a = new function (k) {
    this.Ring0 = k;
  }(function () {
    return d.ringInt;
  });
  b.commutativeRingInt = a;
})(PS);

(function (a) {
  a.canonicalDateImpl = function (b, d, k, f) {
    k = new Date(Date.UTC(d, k - 1, f));
    0 <= d && 100 > d && k.setUTCFullYear(d);
    return b(k.getUTCFullYear())(k.getUTCMonth() + 1)(k.getUTCDate());
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var b = a["Data.Date.Component"],
      d = a["Data.Boolean"],
      k = a["Data.Bounded"],
      f = a["Data.Enum"],
      n = a["Data.Eq"],
      p = a["Data.Maybe"],
      g = a["Data.Ord"],
      q = a["Data.Ordering"],
      w = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      z = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      c = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      h = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      e = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      l = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      t = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      u = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      D = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      H = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      I = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      y = function () {
    function A() {}

    A.value = new A();
    return A;
  }(),
      r = g.ordInt,
      M = g.ordInt;

  a = n.eqInt;
  var F = new n.Eq(function (A) {
    return function (K) {
      return A instanceof w && K instanceof w || A instanceof z && K instanceof z || A instanceof c && K instanceof c || A instanceof h && K instanceof h || A instanceof e && K instanceof e || A instanceof l && K instanceof l || A instanceof t && K instanceof t || A instanceof u && K instanceof u || A instanceof D && K instanceof D || A instanceof H && K instanceof H || A instanceof I && K instanceof I || A instanceof y && K instanceof y ? !0 : !1;
    };
  }),
      E = new g.Ord(function () {
    return F;
  }, function (A) {
    return function (K) {
      if (A instanceof w && K instanceof w) return q.EQ.value;
      if (A instanceof w) return q.LT.value;
      if (K instanceof w) return q.GT.value;
      if (A instanceof z && K instanceof z) return q.EQ.value;
      if (A instanceof z) return q.LT.value;
      if (K instanceof z) return q.GT.value;
      if (A instanceof c && K instanceof c) return q.EQ.value;
      if (A instanceof c) return q.LT.value;
      if (K instanceof c) return q.GT.value;
      if (A instanceof h && K instanceof h) return q.EQ.value;
      if (A instanceof h) return q.LT.value;
      if (K instanceof h) return q.GT.value;
      if (A instanceof e && K instanceof e) return q.EQ.value;
      if (A instanceof e) return q.LT.value;
      if (K instanceof e) return q.GT.value;
      if (A instanceof l && K instanceof l) return q.EQ.value;
      if (A instanceof l) return q.LT.value;
      if (K instanceof l) return q.GT.value;
      if (A instanceof t && K instanceof t) return q.EQ.value;
      if (A instanceof t) return q.LT.value;
      if (K instanceof t) return q.GT.value;
      if (A instanceof u && K instanceof u) return q.EQ.value;
      if (A instanceof u) return q.LT.value;
      if (K instanceof u) return q.GT.value;
      if (A instanceof D && K instanceof D) return q.EQ.value;
      if (A instanceof D) return q.LT.value;
      if (K instanceof D) return q.GT.value;
      if (A instanceof H && K instanceof H) return q.EQ.value;
      if (A instanceof H) return q.LT.value;
      if (K instanceof H) return q.GT.value;
      if (A instanceof I && K instanceof I) return q.EQ.value;
      if (A instanceof I) return q.LT.value;
      if (K instanceof I) return q.GT.value;
      if (A instanceof y && K instanceof y) return q.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [A.constructor.name, K.constructor.name]);
    };
  });
  n = n.eqInt;
  var J = new k.Bounded(function () {
    return r;
  }, -271820, 275759),
      N = new k.Bounded(function () {
    return E;
  }, w.value, y.value),
      R = new f.BoundedEnum(function () {
    return J;
  }, function () {
    return T;
  }, 547580, function (A) {
    return A;
  }, function (A) {
    if (-271820 <= A && 275759 >= A) return new p.Just(A);
    if (d.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [A.constructor.name]);
  }),
      T = new f.Enum(function () {
    return r;
  }, function () {
    var A = f.toEnum(R),
        K = f.fromEnum(R);
    return function (C) {
      return A(K(C) - 1 | 0);
    };
  }(), function () {
    var A = f.toEnum(R),
        K = f.fromEnum(R);
    return function (C) {
      return A(K(C) + 1 | 0);
    };
  }()),
      L = new f.BoundedEnum(function () {
    return N;
  }, function () {
    return O;
  }, 12, function (A) {
    if (A instanceof w) return 1;
    if (A instanceof z) return 2;
    if (A instanceof c) return 3;
    if (A instanceof h) return 4;
    if (A instanceof e) return 5;
    if (A instanceof l) return 6;
    if (A instanceof t) return 7;
    if (A instanceof u) return 8;
    if (A instanceof D) return 9;
    if (A instanceof H) return 10;
    if (A instanceof I) return 11;
    if (A instanceof y) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [A.constructor.name]);
  }, function (A) {
    return 1 === A ? new p.Just(w.value) : 2 === A ? new p.Just(z.value) : 3 === A ? new p.Just(c.value) : 4 === A ? new p.Just(h.value) : 5 === A ? new p.Just(e.value) : 6 === A ? new p.Just(l.value) : 7 === A ? new p.Just(t.value) : 8 === A ? new p.Just(u.value) : 9 === A ? new p.Just(D.value) : 10 === A ? new p.Just(H.value) : 11 === A ? new p.Just(I.value) : 12 === A ? new p.Just(y.value) : p.Nothing.value;
  }),
      O = new f.Enum(function () {
    return E;
  }, function () {
    var A = f.toEnum(L),
        K = f.fromEnum(L);
    return function (C) {
      return A(K(C) - 1 | 0);
    };
  }(), function () {
    var A = f.toEnum(L),
        K = f.fromEnum(L);
    return function (C) {
      return A(K(C) + 1 | 0);
    };
  }()),
      G = new k.Bounded(function () {
    return M;
  }, 1, 31),
      x = new f.BoundedEnum(function () {
    return G;
  }, function () {
    return V;
  }, 31, function (A) {
    return A;
  }, function (A) {
    if (1 <= A && 31 >= A) return new p.Just(A);
    if (d.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [A.constructor.name]);
  }),
      V = new f.Enum(function () {
    return M;
  }, function () {
    var A = f.toEnum(x),
        K = f.fromEnum(x);
    return function (C) {
      return A(K(C) - 1 | 0);
    };
  }(), function () {
    var A = f.toEnum(x),
        K = f.fromEnum(x);
    return function (C) {
      return A(K(C) + 1 | 0);
    };
  }());
  b.eqYear = a;
  b.ordYear = r;
  b.boundedYear = J;
  b.boundedEnumYear = R;
  b.eqMonth = F;
  b.ordMonth = E;
  b.boundedMonth = N;
  b.boundedEnumMonth = L;
  b.eqDay = n;
  b.ordDay = M;
  b.boundedDay = G;
  b.boundedEnumDay = x;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var b = a["Data.Date"],
      d = a["Data.Date"],
      k = a["Data.Bounded"],
      f = a["Data.Date.Component"],
      n = a["Data.Enum"],
      p = a["Data.Eq"],
      g = a["Data.Maybe"],
      q = a["Data.Ord"],
      w = a["Data.Ordering"],
      z = function () {
    function e(l, t, u) {
      this.value0 = l;
      this.value1 = t;
      this.value2 = u;
    }

    e.create = function (l) {
      return function (t) {
        return function (u) {
          return new e(l, t, u);
        };
      };
    };

    return e;
  }(),
      c = new p.Eq(function (e) {
    return function (l) {
      return p.eq(f.eqYear)(e.value0)(l.value0) && p.eq(f.eqMonth)(e.value1)(l.value1) && p.eq(f.eqDay)(e.value2)(l.value2);
    };
  }),
      h = new q.Ord(function () {
    return c;
  }, function (e) {
    return function (l) {
      var t = q.compare(f.ordYear)(e.value0)(l.value0);
      if (t instanceof w.LT) return w.LT.value;
      if (t instanceof w.GT) return w.GT.value;
      t = q.compare(f.ordMonth)(e.value1)(l.value1);
      return t instanceof w.LT ? w.LT.value : t instanceof w.GT ? w.GT.value : q.compare(f.ordDay)(e.value2)(l.value2);
    };
  });

  a = new k.Bounded(function () {
    return h;
  }, new z(k.bottom(f.boundedYear), k.bottom(f.boundedMonth), k.bottom(f.boundedDay)), new z(k.top(f.boundedYear), k.top(f.boundedMonth), k.top(f.boundedDay)));

  b.canonicalDate = function (e) {
    return function (l) {
      return function (t) {
        return d.canonicalDateImpl(function (u) {
          return function (D) {
            return function (H) {
              return new z(u, g.fromJust()(n.toEnum(f.boundedEnumMonth)(D)), H);
            };
          };
        }, e, n.fromEnum(f.boundedEnumMonth)(l), t);
      };
    };
  };

  b.year = function (e) {
    return e.value0;
  };

  b.month = function (e) {
    return e.value1;
  };

  b.day = function (e) {
    return e.value2;
  };

  b.eqDate = c;
  b.ordDate = h;
  b.boundedDate = a;
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var b = a["Data.Time.Component"],
      d = a["Data.Boolean"],
      k = a["Data.Bounded"],
      f = a["Data.Enum"],
      n = a["Data.Eq"],
      p = a["Data.Maybe"];
  a = a["Data.Ord"];
  var g = a.ordInt,
      q = a.ordInt,
      w = a.ordInt,
      z = a.ordInt,
      c = a = n.eqInt,
      h = n.eqInt;
  n = n.eqInt;
  var e = new k.Bounded(function () {
    return g;
  }, 0, 59),
      l = new k.Bounded(function () {
    return q;
  }, 0, 59),
      t = new k.Bounded(function () {
    return w;
  }, 0, 999),
      u = new k.Bounded(function () {
    return z;
  }, 0, 23),
      D = new f.BoundedEnum(function () {
    return e;
  }, function () {
    return H;
  }, 60, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 59 >= J) return new p.Just(J);
    if (d.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [J.constructor.name]);
  }),
      H = new f.Enum(function () {
    return g;
  }, function () {
    var J = f.toEnum(D),
        N = f.fromEnum(D);
    return function (R) {
      return J(N(R) - 1 | 0);
    };
  }(), function () {
    var J = f.toEnum(D),
        N = f.fromEnum(D);
    return function (R) {
      return J(N(R) + 1 | 0);
    };
  }()),
      I = new f.BoundedEnum(function () {
    return l;
  }, function () {
    return y;
  }, 60, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 59 >= J) return new p.Just(J);
    if (d.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [J.constructor.name]);
  }),
      y = new f.Enum(function () {
    return q;
  }, function () {
    var J = f.toEnum(I),
        N = f.fromEnum(I);
    return function (R) {
      return J(N(R) - 1 | 0);
    };
  }(), function () {
    var J = f.toEnum(I),
        N = f.fromEnum(I);
    return function (R) {
      return J(N(R) + 1 | 0);
    };
  }()),
      r = new f.BoundedEnum(function () {
    return t;
  }, function () {
    return M;
  }, 1E3, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 999 >= J) return new p.Just(J);
    if (d.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [J.constructor.name]);
  }),
      M = new f.Enum(function () {
    return w;
  }, function () {
    var J = f.toEnum(r),
        N = f.fromEnum(r);
    return function (R) {
      return J(N(R) - 1 | 0);
    };
  }(), function () {
    var J = f.toEnum(r),
        N = f.fromEnum(r);
    return function (R) {
      return J(N(R) + 1 | 0);
    };
  }()),
      F = new f.BoundedEnum(function () {
    return u;
  }, function () {
    return E;
  }, 24, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 23 >= J) return new p.Just(J);
    if (d.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [J.constructor.name]);
  }),
      E = new f.Enum(function () {
    return z;
  }, function () {
    var J = f.toEnum(F),
        N = f.fromEnum(F);
    return function (R) {
      return J(N(R) - 1 | 0);
    };
  }(), function () {
    var J = f.toEnum(F),
        N = f.fromEnum(F);
    return function (R) {
      return J(N(R) + 1 | 0);
    };
  }());
  b.eqHour = n;
  b.ordHour = z;
  b.boundedHour = u;
  b.boundedEnumHour = F;
  b.eqMinute = c;
  b.ordMinute = q;
  b.boundedMinute = l;
  b.boundedEnumMinute = I;
  b.eqSecond = a;
  b.ordSecond = g;
  b.boundedSecond = e;
  b.boundedEnumSecond = D;
  b.eqMillisecond = h;
  b.ordMillisecond = w;
  b.boundedMillisecond = t;
  b.boundedEnumMillisecond = r;
})(PS);

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  var b = a["Data.Time"],
      d = a["Data.Bounded"],
      k = a["Data.Eq"],
      f = a["Data.Ord"],
      n = a["Data.Ordering"],
      p = a["Data.Time.Component"];

  a = function () {
    function w(z, c, h, e) {
      this.value0 = z;
      this.value1 = c;
      this.value2 = h;
      this.value3 = e;
    }

    w.create = function (z) {
      return function (c) {
        return function (h) {
          return function (e) {
            return new w(z, c, h, e);
          };
        };
      };
    };

    return w;
  }();

  var g = new k.Eq(function (w) {
    return function (z) {
      return k.eq(p.eqHour)(w.value0)(z.value0) && k.eq(p.eqMinute)(w.value1)(z.value1) && k.eq(p.eqSecond)(w.value2)(z.value2) && k.eq(p.eqMillisecond)(w.value3)(z.value3);
    };
  }),
      q = new f.Ord(function () {
    return g;
  }, function (w) {
    return function (z) {
      var c = f.compare(p.ordHour)(w.value0)(z.value0);
      if (c instanceof n.LT) return n.LT.value;
      if (c instanceof n.GT) return n.GT.value;
      c = f.compare(p.ordMinute)(w.value1)(z.value1);
      if (c instanceof n.LT) return n.LT.value;
      if (c instanceof n.GT) return n.GT.value;
      c = f.compare(p.ordSecond)(w.value2)(z.value2);
      return c instanceof n.LT ? n.LT.value : c instanceof n.GT ? n.GT.value : f.compare(p.ordMillisecond)(w.value3)(z.value3);
    };
  });
  d = new d.Bounded(function () {
    return q;
  }, new a(d.bottom(p.boundedHour), d.bottom(p.boundedMinute), d.bottom(p.boundedSecond), d.bottom(p.boundedMillisecond)), new a(d.top(p.boundedHour), d.top(p.boundedMinute), d.top(p.boundedSecond), d.top(p.boundedMillisecond)));
  b.Time = a;

  b.hour = function (w) {
    return w.value0;
  };

  b.minute = function (w) {
    return w.value1;
  };

  b.second = function (w) {
    return w.value2;
  };

  b.millisecond = function (w) {
    return w.value3;
  };

  b.eqTime = g;
  b.ordTime = q;
  b.boundedTime = d;
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  var b = a["Data.DateTime"],
      d = a["Data.Bounded"],
      k = a["Data.Date"],
      f = a["Data.Eq"],
      n = a["Data.Ord"],
      p = a["Data.Ordering"],
      g = a["Data.Time"];

  a = function () {
    function z(c, h) {
      this.value0 = c;
      this.value1 = h;
    }

    z.create = function (c) {
      return function (h) {
        return new z(c, h);
      };
    };

    return z;
  }();

  var q = new f.Eq(function (z) {
    return function (c) {
      return f.eq(k.eqDate)(z.value0)(c.value0) && f.eq(g.eqTime)(z.value1)(c.value1);
    };
  }),
      w = new n.Ord(function () {
    return q;
  }, function (z) {
    return function (c) {
      var h = n.compare(k.ordDate)(z.value0)(c.value0);
      return h instanceof p.LT ? p.LT.value : h instanceof p.GT ? p.GT.value : n.compare(g.ordTime)(z.value1)(c.value1);
    };
  });
  d = new d.Bounded(function () {
    return w;
  }, new a(d.bottom(k.boundedDate), d.bottom(g.boundedTime)), new a(d.top(k.boundedDate), d.top(g.boundedTime)));
  b.DateTime = a;
  b.boundedDateTime = d;
})(PS);

(function (a) {
  a.toDateTimeImpl = function (b) {
    return function (d) {
      d = new Date(d);
      return b(d.getUTCFullYear())(d.getUTCMonth() + 1)(d.getUTCDate())(d.getUTCHours())(d.getUTCMinutes())(d.getUTCSeconds())(d.getUTCMilliseconds());
    };
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.DateTime.Instant"] = a["Data.DateTime.Instant"] || {};
  var b = a["Data.DateTime.Instant"],
      d = a["Data.DateTime.Instant"],
      k = a["Data.Boolean"],
      f = a["Data.Date"],
      n = a["Data.Date.Component"],
      p = a["Data.DateTime"],
      g = a["Data.Enum"],
      q = a["Data.Maybe"],
      w = a["Data.Time"];

  a = function () {
    return d.toDateTimeImpl(function (z) {
      return function (c) {
        return function (h) {
          return function (e) {
            return function (l) {
              return function (t) {
                return function (u) {
                  return new p.DateTime(f.canonicalDate(z)(q.fromJust()(g.toEnum(n.boundedEnumMonth)(c)))(h), new w.Time(e, l, t, u));
                };
              };
            };
          };
        };
      };
    });
  }();

  b.instant = function (z) {
    if (-86399778816E5 <= z && 8639977881599999 >= z) return new q.Just(z);
    if (k.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.DateTime.Instant (line 44, column 1 - line 44, column 41): " + [z.constructor.name]);
  };

  b.toDateTime = a;
})(PS);

(function (a) {
  a["Data.Either.Extra"] = a["Data.Either.Extra"] || {};

  var b = a["Data.Either.Extra"],
      d = a["Control.Applicative"],
      k = a["Control.Bind"],
      f = a["Control.Category"],
      n = a["Control.Plus"],
      p = a["Data.Either"],
      g = a["Data.Function"],
      q = function q(h) {
    return function (e) {
      return function (l) {
        if (l instanceof p.Left) return h;
        if (l instanceof p.Right) return e(l.value0);
        throw Error("Failed pattern match at Data.Either.Extra (line 29, column 1 - line 29, column 58): " + [h.constructor.name, e.constructor.name, l.constructor.name]);
      };
    };
  },
      w = function w(h) {
    return function (e) {
      return function (l) {
        if (l instanceof p.Left) return e(l.value0);
        if (l instanceof p.Right) return h;
        throw Error("Failed pattern match at Data.Either.Extra (line 18, column 1 - line 18, column 57): " + [h.constructor.name, e.constructor.name, l.constructor.name]);
      };
    };
  },
      z = function z(h) {
    return function (e) {
      return function (l) {
        return g.flip(k.bind(h.Bind1()))(q(n.empty(e))(function () {
          var t = d.pure(h.Applicative0());
          return function (u) {
            return t(l(u));
          };
        }()));
      };
    };
  },
      c = function c(h) {
    return function (e) {
      return function (l) {
        return g.flip(k.bind(h.Bind1()))(w(n.empty(e))(function () {
          var t = d.pure(h.Applicative0());
          return function (u) {
            return t(l(u));
          };
        }()));
      };
    };
  };

  b.catLefts = function (h) {
    return function (e) {
      return c(h)(e)(f.identity(f.categoryFn));
    };
  };

  b.catRights = function (h) {
    return function (e) {
      return z(h)(e)(f.identity(f.categoryFn));
    };
  };
})(PS);

(function (a) {
  a.intDegree = function (b) {
    return Math.min(Math.abs(b), 2147483647);
  };

  a.intDiv = function (b) {
    return function (d) {
      return 0 === d ? 0 : 0 < d ? Math.floor(b / d) : -Math.floor(b / -d);
    };
  };

  a.intMod = function (b) {
    return function (d) {
      if (0 === d) return 0;
      d = Math.abs(d);
      return (b % d + d) % d;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var b = a["Data.EuclideanRing"],
      d = a["Data.EuclideanRing"],
      k = a["Data.CommutativeRing"];
  a = new function (f, n, p, g) {
    this.CommutativeRing0 = f;
    this.degree = n;
    this.div = p;
    this.mod = g;
  }(function () {
    return k.commutativeRingInt;
  }, d.intDegree, d.intDiv, d.intMod);

  b.div = function (f) {
    return f.div;
  };

  b.mod = function (f) {
    return f.mod;
  };

  b.euclideanRingInt = a;
})(PS);

(function (a) {
  a["Data.Generic.Rep"] = a["Data.Generic.Rep"] || {};
  a = a["Data.Generic.Rep"];

  var b = function () {
    function f(n) {
      this.value0 = n;
    }

    f.create = function (n) {
      return new f(n);
    };

    return f;
  }(),
      d = function () {
    function f(n) {
      this.value0 = n;
    }

    f.create = function (n) {
      return new f(n);
    };

    return f;
  }(),
      k = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.Generic = function (f, n) {
    this.from = f;
    this.to = n;
  };

  a.to = function (f) {
    return f.to;
  };

  a.from = function (f) {
    return f.from;
  };

  a.NoArguments = k;
  a.Inl = b;
  a.Inr = d;

  a.Constructor = function (f) {
    return f;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var b = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Generic.Rep"],
      k = function k(q) {
    this["genericTop'"] = q;
  },
      f = function f(q) {
    this["genericBottom'"] = q;
  };

  a = new k(d.NoArguments.value);

  var n = function n(q) {
    return q["genericTop'"];
  },
      p = new f(d.NoArguments.value),
      g = function g(q) {
    return q["genericBottom'"];
  };

  b["genericBottom'"] = g;

  b.genericBottom = function (q) {
    return function (w) {
      return d.to(q)(g(w));
    };
  };

  b["genericTop'"] = n;

  b.genericTop = function (q) {
    return function (w) {
      return d.to(q)(n(w));
    };
  };

  b.genericBottomNoArguments = p;

  b.genericBottomSum = function (q) {
    return new f(new d.Inl(g(q)));
  };

  b.genericBottomConstructor = function (q) {
    return new f(g(q));
  };

  b.genericTopNoArguments = a;

  b.genericTopSum = function (q) {
    return new k(new d.Inr(n(q)));
  };

  b.genericTopConstructor = function (q) {
    return new k(n(q));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var b = a["Data.Generic.Rep.Enum"],
      d = a["Data.Boolean"],
      k = a["Data.Enum"],
      f = a["Data.Functor"],
      n = a["Data.Generic.Rep"],
      p = a["Data.Generic.Rep.Bounded"],
      g = a["Data.Maybe"],
      q = a["Data.Newtype"],
      w = function w(D, H) {
    this["genericPred'"] = D;
    this["genericSucc'"] = H;
  },
      z = function z(D, H, I) {
    this["genericCardinality'"] = D;
    this["genericFromEnum'"] = H;
    this["genericToEnum'"] = I;
  },
      c = function c(D) {
    return D["genericToEnum'"];
  },
      h = function h(D) {
    return D["genericSucc'"];
  },
      e = function e(D) {
    return D["genericPred'"];
  },
      l = function l(D) {
    return D["genericFromEnum'"];
  };

  a = new w(function (D) {
    return g.Nothing.value;
  }, function (D) {
    return g.Nothing.value;
  });

  var t = function t(D) {
    return D["genericCardinality'"];
  },
      u = new z(1, function (D) {
    return 0;
  }, function (D) {
    return 0 === D ? new g.Just(n.NoArguments.value) : g.Nothing.value;
  });

  b.genericPred = function (D) {
    return function (H) {
      var I = f.map(g.functorMaybe)(n.to(D)),
          y = e(H),
          r = n.from(D);
      return function (M) {
        return I(y(r(M)));
      };
    };
  };

  b.genericSucc = function (D) {
    return function (H) {
      var I = f.map(g.functorMaybe)(n.to(D)),
          y = h(H),
          r = n.from(D);
      return function (M) {
        return I(y(r(M)));
      };
    };
  };

  b.genericCardinality = function (D) {
    return function (H) {
      return q.unwrap(k.newtypeCardinality)(t(H));
    };
  };

  b.genericToEnum = function (D) {
    return function (H) {
      var I = f.map(g.functorMaybe)(n.to(D)),
          y = c(H);
      return function (r) {
        return I(y(r));
      };
    };
  };

  b.genericFromEnum = function (D) {
    return function (H) {
      var I = l(H),
          y = n.from(D);
      return function (r) {
        return I(y(r));
      };
    };
  };

  b.genericEnumNoArguments = a;

  b.genericEnumConstructor = function (D) {
    return new w(function (H) {
      return f.map(g.functorMaybe)(n.Constructor)(e(D)(H));
    }, function (H) {
      return f.map(g.functorMaybe)(n.Constructor)(h(D)(H));
    });
  };

  b.genericEnumSum = function (D) {
    return function (H) {
      return function (I) {
        return function (y) {
          return new w(function (r) {
            if (r instanceof n.Inl) return f.map(g.functorMaybe)(n.Inl.create)(e(D)(r.value0));

            if (r instanceof n.Inr) {
              r = e(I)(r.value0);
              if (r instanceof g.Nothing) return new g.Just(new n.Inl(p["genericTop'"](H)));
              if (r instanceof g.Just) return new g.Just(new n.Inr(r.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [r.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [r.constructor.name]);
          }, function (r) {
            if (r instanceof n.Inl) {
              r = h(D)(r.value0);
              if (r instanceof g.Nothing) return new g.Just(new n.Inr(p["genericBottom'"](y)));
              if (r instanceof g.Just) return new g.Just(new n.Inl(r.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [r.constructor.name]);
            }

            if (r instanceof n.Inr) return f.map(g.functorMaybe)(n.Inr.create)(h(I)(r.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [r.constructor.name]);
          });
        };
      };
    };
  };

  b.genericBoundedEnumNoArguments = u;

  b.genericBoundedEnumConstructor = function (D) {
    return new z(q.unwrap(k.newtypeCardinality)(t(D)), function (H) {
      return l(D)(H);
    }, function (H) {
      return f.map(g.functorMaybe)(n.Constructor)(c(D)(H));
    });
  };

  b.genericBoundedEnumSum = function (D) {
    return function (H) {
      return new z(k.Cardinality(q.unwrap(k.newtypeCardinality)(t(D)) + q.unwrap(k.newtypeCardinality)(t(H)) | 0), function (I) {
        if (I instanceof n.Inl) return l(D)(I.value0);
        if (I instanceof n.Inr) return l(H)(I.value0) + q.unwrap(k.newtypeCardinality)(t(D)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [I.constructor.name]);
      }, function (I) {
        var y = t(D);
        if (0 <= I && I < y) I = f.map(g.functorMaybe)(n.Inl.create)(c(D)(I));else if (d.otherwise) I = f.map(g.functorMaybe)(n.Inr.create)(c(H)(I - y | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [y.constructor.name]);
        return I;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var b = a["Data.Generic.Rep.Eq"],
      d = a["Data.Generic.Rep"],
      k = function k(f) {
    this["genericEq'"] = f;
  };

  a = new k(function (f) {
    return function (n) {
      return !0;
    };
  });

  b.genericEq = function (f) {
    return function (n) {
      return function (p) {
        return function (g) {
          return (0, n["genericEq'"])(d.from(f)(p))(d.from(f)(g));
        };
      };
    };
  };

  b.genericEqNoArguments = a;

  b.genericEqSum = function (f) {
    return function (n) {
      return new k(function (p) {
        return function (g) {
          return p instanceof d.Inl && g instanceof d.Inl ? (0, f["genericEq'"])(p.value0)(g.value0) : p instanceof d.Inr && g instanceof d.Inr ? (0, n["genericEq'"])(p.value0)(g.value0) : !1;
        };
      });
    };
  };

  b.genericEqConstructor = function (f) {
    return new k(function (n) {
      return function (p) {
        return (0, f["genericEq'"])(n)(p);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var b = a["Data.Generic.Rep.Ord"],
      d = a["Data.Generic.Rep"],
      k = a["Data.Ordering"],
      f = function f(p) {
    this["genericCompare'"] = p;
  };

  a = new f(function (p) {
    return function (g) {
      return k.EQ.value;
    };
  });

  var n = function n(p) {
    return p["genericCompare'"];
  };

  b.genericCompare = function (p) {
    return function (g) {
      return function (q) {
        return function (w) {
          return n(g)(d.from(p)(q))(d.from(p)(w));
        };
      };
    };
  };

  b.genericOrdNoArguments = a;

  b.genericOrdSum = function (p) {
    return function (g) {
      return new f(function (q) {
        return function (w) {
          if (q instanceof d.Inl && w instanceof d.Inl) return n(p)(q.value0)(w.value0);
          if (q instanceof d.Inr && w instanceof d.Inr) return n(g)(q.value0)(w.value0);
          if (q instanceof d.Inl && w instanceof d.Inr) return k.LT.value;
          if (q instanceof d.Inr && w instanceof d.Inl) return k.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [q.constructor.name, w.constructor.name]);
        };
      });
    };
  };

  b.genericOrdConstructor = function (p) {
    return new f(function (g) {
      return function (q) {
        return n(p)(g)(q);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Symbol"] = a["Data.Symbol"] || {};
  a = a["Data.Symbol"];

  var b = function () {
    function d() {}

    d.value = new d();
    return d;
  }();

  a.IsSymbol = function (d) {
    this.reflectSymbol = d;
  };

  a.reflectSymbol = function (d) {
    return d.reflectSymbol;
  };

  a.SProxy = b;
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var b = a["Data.Generic.Rep.Show"],
      d = a["Data.Foldable"],
      k = a["Data.Generic.Rep"],
      f = a["Data.Monoid"],
      n = a["Data.Semigroup"],
      p = a["Data.Symbol"],
      g = function g(q) {
    this["genericShow'"] = q;
  };

  a = new function (q) {
    this.genericShowArgs = q;
  }(function (q) {
    return [];
  });

  b.genericShow = function (q) {
    return function (w) {
      return function (z) {
        return (0, w["genericShow'"])(k.from(q)(z));
      };
    };
  };

  b.genericShowArgsNoArguments = a;

  b.genericShowSum = function (q) {
    return function (w) {
      return new g(function (z) {
        if (z instanceof k.Inl) return (0, q["genericShow'"])(z.value0);
        if (z instanceof k.Inr) return (0, w["genericShow'"])(z.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [z.constructor.name]);
      });
    };
  };

  b.genericShowConstructor = function (q) {
    return function (w) {
      return new g(function (z) {
        var c = p.reflectSymbol(w)(p.SProxy.value);
        z = (0, q.genericShowArgs)(z);
        return 0 === z.length ? c : "(" + (d.intercalate(d.foldableArray)(f.monoidString)(" ")(n.append(n.semigroupArray)([c])(z)) + ")");
      });
    };
  };
})(PS);

(function (a) {
  a.toInstantImpl = function (b) {
    return function (d) {
      return function (k) {
        k = k.getTime();
        return isNaN(k) ? d : b(k);
      };
    };
  };

  a.jsdate = function (b) {
    var d = b.year;
    b = new Date(Date.UTC(d, b.month, b.day, b.hour, b.minute, b.second, b.millisecond));
    0 <= d && 100 > d && b.setUTCFullYear(d);
    return b;
  };

  a.dateMethodEff = function (b, d) {
    return function () {
      return d[b]();
    };
  };

  a.parse = function (b) {
    return function () {
      return new Date(b);
    };
  };
})(PS["Data.JSDate"] = PS["Data.JSDate"] || {});

(function (a) {
  a["Data.Time.Duration"] = a["Data.Time.Duration"] || {};

  a["Data.Time.Duration"].Milliseconds = function (b) {
    return b;
  };
})(PS);

(function (a) {
  a["Data.JSDate"] = a["Data.JSDate"] || {};
  var b = a["Data.JSDate"],
      d = a["Data.JSDate"],
      k = a["Data.Date"],
      f = a["Data.Date.Component"],
      n = a["Data.DateTime.Instant"],
      p = a["Data.Enum"],
      g = a["Data.Functor"],
      q = a["Data.Int"],
      w = a["Data.Maybe"],
      z = a["Data.Time"],
      c = a["Data.Time.Component"],
      h = a["Data.Time.Duration"];
  a = a["Control.Bind"].composeKleisliFlipped(w.bindMaybe)(function (e) {
    return n.instant(h.Milliseconds(e));
  })(d.toInstantImpl(w.Just.create)(w.Nothing.value));
  g = g.map(g.functorFn)(g.map(w.functorMaybe)(n.toDateTime))(a);

  b.fromDateTime = function (e) {
    return d.jsdate({
      year: q.toNumber(p.fromEnum(f.boundedEnumYear)(k.year(e.value0))),
      month: q.toNumber(p.fromEnum(f.boundedEnumMonth)(k.month(e.value0)) - 1 | 0),
      day: q.toNumber(p.fromEnum(f.boundedEnumDay)(k.day(e.value0))),
      hour: q.toNumber(p.fromEnum(c.boundedEnumHour)(z.hour(e.value1))),
      minute: q.toNumber(p.fromEnum(c.boundedEnumMinute)(z.minute(e.value1))),
      second: q.toNumber(p.fromEnum(c.boundedEnumSecond)(z.second(e.value1))),
      millisecond: q.toNumber(p.fromEnum(c.boundedEnumMillisecond)(z.millisecond(e.value1)))
    });
  };

  b.toDateTime = g;

  b.toISOString = function (e) {
    return d.dateMethodEff("toISOString", e);
  };

  b.parse = d.parse;
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};
  var b = a["Data.Maybe.First"],
      d = a["Data.Maybe"];
  a = new a["Data.Semigroup"].Semigroup(function (k) {
    return function (f) {
      return k instanceof d.Just ? k : f;
    };
  });

  b.First = function (k) {
    return k;
  };

  b.semigroupFirst = a;
})(PS);

(function (a) {
  a["Data.Natural"] = a["Data.Natural"] || {};
  var b = a["Data.Natural"],
      d = a["Data.Show"];
  a = new d.Show(function () {
    var k = d.show(d.showInt);
    return function (f) {
      return k(f);
    };
  }());

  b.intToNat = function (k) {
    return 0 <= k ? k : 0;
  };

  b.natToInt = function (k) {
    return k;
  };

  b.showNatural = a;
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  a = a["Data.Profunctor"];
  var b = new function (d) {
    this.dimap = d;
  }(function (d) {
    return function (k) {
      return function (f) {
        return function (n) {
          return k(f(d(n)));
        };
      };
    };
  });

  a.dimap = function (d) {
    return d.dimap;
  };

  a.profunctorFn = b;
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};
  var b = a["Data.Profunctor.Strong"],
      d = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      f = a["Data.Profunctor"],
      n = a["Data.Tuple"];
  a = new function (g, q, w) {
    this.Profunctor0 = g;
    this.first = q;
    this.second = w;
  }(function () {
    return f.profunctorFn;
  }, function (g) {
    return function (q) {
      return new n.Tuple(g(q.value0), q.value1);
    };
  }, a["Data.Functor"].map(n.functorTuple));

  var p = function p(g) {
    return function (q) {
      return function (w) {
        return function (z) {
          return k.composeFlipped(g.Semigroupoid0())((0, q.first)(w))((0, q.second)(z));
        };
      };
    };
  };

  b.second = function (g) {
    return g.second;
  };

  b.fanout = function (g) {
    return function (q) {
      return function (w) {
        return function (z) {
          var c = f.dimap(q.Profunctor0())(d.identity(d.categoryFn))(function (h) {
            return new n.Tuple(h, h);
          })(d.identity(g));
          return k.composeFlipped(g.Semigroupoid0())(c)(p(g)(q)(w)(z));
        };
      };
    };
  };

  b.strongFn = a;
})(PS);

(function (a) {
  var b = "function" === typeof Array.from,
      d = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      k = "function" === typeof String.prototype.fromCodePoint,
      f = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (n) {
    return f ? function (p) {
      return p.codePointAt(0);
    } : n;
  };

  a._codePointAt = function (n) {
    return function (p) {
      return function (g) {
        return function (q) {
          return function (w) {
            return function (z) {
              var c = z.length;
              if (0 > w || w >= c) return g;
              if (d) for (z = z[Symbol.iterator](), c = w;; --c) {
                var h = z.next();
                if (h.done) return g;
                if (0 === c) return p(q(h.value));
              }
              return n(w)(z);
            };
          };
        };
      };
    };
  };

  a._singleton = function (n) {
    return k ? String.fromCodePoint : n;
  };

  a._take = function (n) {
    return function (p) {
      return d ? function (g) {
        var q = "";
        g = g[Symbol.iterator]();

        for (var w = 0; w < p; ++w) {
          var z = g.next();
          if (z.done) break;
          q += z.value;
        }

        return q;
      } : n(p);
    };
  };

  a._toCodePointArray = function (n) {
    return function (p) {
      return b ? function (g) {
        return Array.from(g, p);
      } : n;
    };
  };
})(PS["Data.String.CodePoints"] = PS["Data.String.CodePoints"] || {});

(function (a) {
  a.singleton = function (b) {
    return b;
  };

  a.length = function (b) {
    return b.length;
  };

  a._indexOf = function (b) {
    return function (d) {
      return function (k) {
        return function (f) {
          f = f.indexOf(k);
          return -1 === f ? d : b(f);
        };
      };
    };
  };

  a._lastIndexOf = function (b) {
    return function (d) {
      return function (k) {
        return function (f) {
          f = f.lastIndexOf(k);
          return -1 === f ? d : b(f);
        };
      };
    };
  };

  a.take = function (b) {
    return function (d) {
      return d.substr(0, b);
    };
  };

  a.drop = function (b) {
    return function (d) {
      return d.substring(b);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a["Data.String.CodeUnits"] = a["Data.String.CodeUnits"] || {};

  var b = a["Data.String.CodeUnits"],
      d = a["Data.String.CodeUnits"],
      k = a["Data.Maybe"],
      f = d._lastIndexOf(k.Just.create)(k.Nothing.value),
      n = d._indexOf(k.Just.create)(k.Nothing.value);

  b.stripSuffix = function (p) {
    return function (g) {
      var q = f(p)(g);
      return q instanceof k.Just && q.value0 === (d.length(g) - d.length(p) | 0) ? k.Just.create(d.take(q.value0)(g)) : k.Nothing.value;
    };
  };

  b.contains = function (p) {
    var g = n(p);
    return function (q) {
      return k.isJust(g(q));
    };
  };

  b.singleton = d.singleton;
  b.length = d.length;
  b.drop = d.drop;
})(PS);

(function (a) {
  a.charAt = function (b) {
    return function (d) {
      if (0 <= b && b < d.length) return d.charAt(b);
      throw Error("Data.String.Unsafe.charAt: Invalid index.");
    };
  };
})(PS["Data.String.Unsafe"] = PS["Data.String.Unsafe"] || {});

(function (a) {
  a["Data.String.Unsafe"] = a["Data.String.Unsafe"] || {};
  a["Data.String.Unsafe"].charAt = a["Data.String.Unsafe"].charAt;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var b = a["Data.String.CodePoints"],
      d = a["Data.String.CodePoints"],
      k = a["Data.Array"],
      f = a["Data.Boolean"],
      n = a["Data.Bounded"],
      p = a["Data.Enum"],
      g = a["Data.Eq"],
      q = a["Data.EuclideanRing"],
      w = a["Data.Functor"],
      z = a["Data.Int"],
      c = a["Data.Maybe"],
      h = a["Data.Ord"],
      e = a["Data.String.CodeUnits"],
      l = a["Data.String.Common"],
      t = a["Data.String.Unsafe"],
      u = a["Data.Tuple"],
      D = a["Data.Unfoldable"],
      H = function H(G) {
    return function (x) {
      return ((1024 * (G - 55296 | 0) | 0) + (x - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (G) {
    return "(CodePoint 0x" + (l.toUpper(z.toStringAs(z.hexadecimal)(G)) + ")");
  });

  var I = function I(G) {
    var x = e.length(G);
    if (0 === x) return c.Nothing.value;
    if (1 === x) return new c.Just({
      head: p.fromEnum(p.boundedEnumChar)(t.charAt(0)(G)),
      tail: ""
    });
    x = p.fromEnum(p.boundedEnumChar)(t.charAt(1)(G));
    var V = p.fromEnum(p.boundedEnumChar)(t.charAt(0)(G));
    return 55296 <= V && 56319 >= V && 56320 <= x && 57343 >= x ? new c.Just({
      head: H(V)(x),
      tail: e.drop(2)(G)
    }) : new c.Just({
      head: V,
      tail: e.drop(1)(G)
    });
  },
      y = function y(G) {
    return w.map(c.functorMaybe)(function (x) {
      return new u.Tuple(x.head, x.tail);
    })(I(G));
  },
      r = d._unsafeCodePointAt0(function (G) {
    var x = p.fromEnum(p.boundedEnumChar)(t.charAt(0)(G));
    return 55296 <= x && 56319 >= x && 1 < e.length(G) && (G = p.fromEnum(p.boundedEnumChar)(t.charAt(1)(G)), 56320 <= G && 57343 >= G) ? H(x)(G) : x;
  }),
      M = d._toCodePointArray(function (G) {
    return D.unfoldr(D.unfoldableArray)(y)(G);
  })(r),
      F = function () {
    var G = p.toEnumWithDefaults(p.boundedEnumChar)(n.bottom(n.boundedChar))(n.top(n.boundedChar));
    return function (x) {
      return e.singleton(G(x));
    };
  }(),
      E = d._singleton(function (G) {
    if (65535 >= G) return F(G);
    var x = q.div(q.euclideanRingInt)(G - 65536 | 0)(1024) + 55296 | 0;
    G = q.mod(q.euclideanRingInt)(G - 65536 | 0)(1024) + 56320 | 0;
    return F(x) + F(G);
  }),
      J = function J(G) {
    return function (x) {
      if (1 > G) return "";
      var V = I(x);
      return V instanceof c.Just ? E(V.value0.head) + J(G - 1 | 0)(V.value0.tail) : x;
    };
  };

  d._take(J);

  var N = new g.Eq(function (G) {
    return function (x) {
      return G === x;
    };
  }),
      R = new h.Ord(function () {
    return N;
  }, function (G) {
    return function (x) {
      return h.compare(h.ordInt)(G)(x);
    };
  }),
      T = function T(G) {
    return function (x) {
      for (var V = G, A = !1, K; !A;) {
        K = V;
        var C = I(x);
        C instanceof c.Just ? 0 === K ? (A = !0, K = new c.Just(C.value0.head)) : (V = K - 1 | 0, x = C.value0.tail, K = void 0) : (A = !0, K = c.Nothing.value);
      }

      return K;
    };
  },
      L = new n.Bounded(function () {
    return R;
  }, 0, 1114111);

  g = new p.BoundedEnum(function () {
    return L;
  }, function () {
    return O;
  }, 1114112, function (G) {
    return G;
  }, function (G) {
    if (0 <= G && 1114111 >= G) return new c.Just(G);
    if (f.otherwise) return c.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [G.constructor.name]);
  });
  var O = new p.Enum(function () {
    return R;
  }, p.defaultPred(p.toEnum(g))(p.fromEnum(g)), p.defaultSucc(p.toEnum(g))(p.fromEnum(g)));
  b.singleton = E;
  b.toCodePointArray = M;

  b.codePointAt = function (G) {
    return function (x) {
      return 0 > G || 0 === G && "" === x ? c.Nothing.value : 0 === G ? new c.Just(r(x)) : d._codePointAt(T)(c.Just.create)(c.Nothing.value)(r)(G)(x);
    };
  };

  b.length = function (G) {
    return k.length(M(G));
  };

  b.showCodePoint = a;
  b.boundedEnumCodePoint = g;
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var b = a["Data.String.NonEmpty.Internal"],
      d = a["Data.Maybe"];
  a = a["Data.Semigroup"].semigroupString;

  b.fromString = function (k) {
    return "" === k ? d.Nothing.value : new d.Just(k);
  };

  b.toString = function (k) {
    return k;
  };

  b.semigroupNonEmptyString = a;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  a["Data.String.Pattern"].Pattern = function (b) {
    return b;
  };
})(PS);

(function (a) {
  a.endsWith = function (b) {
    return function (d) {
      return d.endsWith(b);
    };
  };

  a.fromCharArray = function (b) {
    return b.join("");
  };

  a.startsWith = function (b) {
    return function (d) {
      return d.startsWith(b);
    };
  };
})(PS["Data.String.Utils"] = PS["Data.String.Utils"] || {});

(function (a) {
  a["Data.String.Utils"] = a["Data.String.Utils"] || {};
  var b = a["Data.String.Utils"];
  a = a["Data.String.Utils"];
  b.endsWith = a.endsWith;
  b.fromCharArray = a.fromCharArray;
  b.startsWith = a.startsWith;
})(PS);

(function (a) {
  a["Data.TraversableWithIndex"] = a["Data.TraversableWithIndex"] || {};

  var b = a["Data.TraversableWithIndex"],
      d = a["Data.FoldableWithIndex"],
      k = a["Data.FunctorWithIndex"],
      f = a["Data.Traversable"],
      n = function n(g) {
    return function (q) {
      return function (w) {
        var z = f.sequence(g.Traversable2())(q),
            c = k.mapWithIndex(g.FunctorWithIndex0())(w);
        return function (h) {
          return z(c(h));
        };
      };
    };
  },
      p = new function (g, q, w, z) {
    this.FoldableWithIndex1 = g;
    this.FunctorWithIndex0 = q;
    this.Traversable2 = w;
    this.traverseWithIndex = z;
  }(function () {
    return d.foldableWithIndexArray;
  }, function () {
    return k.functorWithIndexArray;
  }, function () {
    return f.traversableArray;
  }, function (g) {
    return n(p)(g);
  });

  b.traverseWithIndex = function (g) {
    return g.traverseWithIndex;
  };

  b.traversableWithIndexArray = p;
})(PS);

(function (a) {
  var b = null;

  a.getUUIDImpl = function () {
    null === b && (b = require("uuid/v4"));
    return b();
  };
})(PS["Data.UUID"] = PS["Data.UUID"] || {});

(function (a) {
  a["Data.UUID"] = a["Data.UUID"] || {};
  var b = a["Data.UUID"],
      d = a["Data.UUID"],
      k = a["Control.Applicative"],
      f = a.Effect;
  a = a["Control.Bind"].bind(f.bindEffect)(d.getUUIDImpl)(function () {
    var n = k.pure(f.applicativeEffect);
    return function (p) {
      return n(p);
    };
  }());
  b.emptyUUID = "00000000-0000-0000-0000-000000000000";
  b.genUUID = a;

  b.toString = function (n) {
    return n;
  };
})(PS);

(function (a) {
  a["Data.Void"] = a["Data.Void"] || {};

  a["Data.Void"].absurd = function (b) {
    for (;;) {
      ;
    }
  };
})(PS);

(function (a) {
  a["Data.XPath"] = a["Data.XPath"] || {};
  var b = a["Data.XPath"],
      d = a["Data.Semigroup"],
      k = new function (f, n, p, g, q, w) {
    this.Semigroup0 = f;
    this.at = n;
    this.pathAppend = p;
    this.pathAppendNSx = g;
    this.root = q;
    this.xx = w;
  }(function () {
    return d.semigroupString;
  }, function (f) {
    return "@" + f;
  }, function (f) {
    return function (n) {
      return f === k.root ? k.root + n : f + ("/" + n);
    };
  }, function (f) {
    return function (n) {
      return f === k.root ? k.root + ("x:" + n) : f + ("/x:" + n);
    };
  }, "/", function (f) {
    return "x:" + f;
  });

  b.pathAppend = function (f) {
    return f.pathAppend;
  };

  b.pathAppendNSx = function (f) {
    return f.pathAppendNSx;
  };

  b.at = function (f) {
    return f.at;
  };

  b.xx = function (f) {
    return f.xx;
  };

  b.root = function (f) {
    return f.root;
  };

  b.stringXPath = k;
})(PS);

(function (a) {
  var b = function b(d) {
    return !("undefined" === typeof d || null === d);
  };

  a.tryPrettyJson = function (d) {
    var k = d;
    return function () {
      if (void 0 === d) return null;
      var f = JSON.stringify(JSON.parse(d), void 0, 2);
      return k = void 0 === f || null === f ? d : f;
    };
  };

  a.preParse = function (d) {
    d = JSON.parse(d);
    if (b(d.data) && b(d.data.attributes) && b(d.data.attributes.xml)) return d.data.attributes.xml = void 0, d = JSON.stringify(d), void 0 === d || null === d ? "" : d;
  };
})(PS["DataCite.JSON.Util"] = PS["DataCite.JSON.Util"] || {});

(function (a) {
  a["DataCite.JSON.Util"] = a["DataCite.JSON.Util"] || {};
  var b = a["DataCite.JSON.Util"];
  a = a["DataCite.JSON.Util"];
  b.tryPrettyJson = a.tryPrettyJson;
  b.preParse = a.preParse;
})(PS);

(function (a) {
  a._parseJSON = JSON.parse;
})(PS["Simple.JSON"] = PS["Simple.JSON"] || {});

(function (a) {
  a.unsafePerformEffect = function (b) {
    return b();
  };
})(PS["Effect.Unsafe"] = PS["Effect.Unsafe"] || {});

(function (a) {
  a["Effect.Unsafe"] = a["Effect.Unsafe"] || {};
  a["Effect.Unsafe"].unsafePerformEffect = a["Effect.Unsafe"].unsafePerformEffect;
})(PS);

(function (a) {
  a.unsafeReadPropImpl = function (b, d, k, f) {
    return null == f ? b : d(f[k]);
  };
})(PS["Foreign.Index"] = PS["Foreign.Index"] || {});

(function (a) {
  a["Foreign.Index"] = a["Foreign.Index"] || {};
  var b = a["Foreign.Index"],
      d = a["Control.Applicative"],
      k = a["Control.Monad.Except.Trans"],
      f = a["Data.Identity"],
      n = a.Foreign;

  a["Foreign.Index"].readProp = function (p) {
    return function (g) {
      return b.unsafeReadPropImpl(n.fail(new n.TypeMismatch("object", n.typeOf(g))), d.pure(k.applicativeExceptT(f.monadIdentity)), p, g);
    };
  };
})(PS);

(function (a) {
  a.copyRecord = function (b) {
    var d = {},
        k;

    for (k in b) {
      ({}).hasOwnProperty.call(b, k) && (d[k] = b[k]);
    }

    return d;
  };

  a.unsafeInsert = function (b) {
    return function (d) {
      return function (k) {
        k[b] = d;
        return k;
      };
    };
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});

(function (a) {
  a["Record.Builder"] = a["Record.Builder"] || {};
  var b = a["Record.Builder"],
      d = a["Record.Builder"],
      k = a["Data.Symbol"],
      f = a["Control.Semigroupoid"].semigroupoidFn;
  a = a["Control.Category"].categoryFn;

  b.build = function (n) {
    return function (p) {
      return n(d.copyRecord(p));
    };
  };

  b.insert = function (n) {
    return function (p) {
      return function (g) {
        return function (q) {
          return function (w) {
            return function (z) {
              return d.unsafeInsert(k.reflectSymbol(g)(q))(w)(z);
            };
          };
        };
      };
    };
  };

  b.semigroupoidBuilder = f;
  b.categoryBuilder = a;
})(PS);

(function (a) {
  a["Type.Data.RowList"] = a["Type.Data.RowList"] || {};
  a = a["Type.Data.RowList"];

  var b = function () {
    function d() {}

    d.value = new d();
    return d;
  }();

  a.RLProxy = b;
})(PS);

(function (a) {
  a["Simple.JSON"] = a["Simple.JSON"] || {};

  var b = a["Simple.JSON"],
      d = a["Simple.JSON"],
      k = a["Control.Applicative"],
      f = a["Control.Apply"],
      n = a["Control.Bind"],
      p = a["Control.Category"],
      g = a["Control.Monad.Except"],
      q = a["Control.Monad.Except.Trans"],
      w = a["Control.Semigroupoid"],
      z = a["Data.Bifunctor"],
      c = a["Data.Either"],
      h = a["Data.Function"],
      e = a["Data.Functor"],
      l = a["Data.Identity"],
      t = a["Data.List.Types"],
      u = a["Data.Maybe"],
      D = a["Data.Semigroup"],
      H = a["Data.Symbol"],
      I = a["Data.TraversableWithIndex"],
      y = a["Effect.Exception"],
      r = a["Effect.Uncurried"],
      M = a["Effect.Unsafe"],
      F = a.Foreign,
      E = a["Foreign.Index"],
      J = a["Record.Builder"],
      N = a["Type.Data.RowList"],
      R = function R(K) {
    this.getFields = K;
  },
      T = function T(K) {
    this.readImpl = K;
  };

  a = new T(F.readString);

  var L = new T(F.readInt),
      O = new T(k.pure(q.applicativeExceptT(l.monadIdentity))),
      G = new R(function (K) {
    return function (C) {
      return k.pure(q.applicativeExceptT(l.monadIdentity))(p.identity(J.categoryBuilder));
    };
  }),
      x = function () {
    var K = z.lmap(c.bifunctorEither)(function () {
      var ha = k.pure(t.applicativeNonEmptyList);
      return function (sa) {
        return ha(F.ForeignError.create(y.message(sa)));
      };
    }()),
        C = r.runEffectFn1(d._parseJSON);
    return function (ha) {
      return q.ExceptT(l.Identity(K(M.unsafePerformEffect(y["try"](C(ha))))));
    };
  }(),
      V = function V(K) {
    return function (C) {
      return function (ha) {
        if (C instanceof c.Left && ha instanceof c.Right) return new c.Left(C.value0);
        if (C instanceof c.Left && ha instanceof c.Left) return new c.Left(D.append(K)(C.value0)(ha.value0));
        if (C instanceof c.Right && ha instanceof c.Left) return new c.Left(ha.value0);
        if (C instanceof c.Right && ha instanceof c.Right) return new c.Right(C.value0(ha.value0));
        throw Error("Failed pattern match at Simple.JSON (line 234, column 1 - line 234, column 90): " + [C.constructor.name, ha.constructor.name]);
      };
    };
  },
      A = function A(K) {
    return function (C) {
      return function (ha) {
        return function (sa) {
          return q.ExceptT(f.apply(C.Apply0())(e.map(C.Apply0().Functor0())(V(K))(q.runExceptT(ha)))(q.runExceptT(sa)));
        };
      };
    };
  };

  b["readJSON'"] = function (K) {
    return n.composeKleisliFlipped(q.bindExceptT(l.monadIdentity))(K.readImpl)(x);
  };

  b["read'"] = function (K) {
    return K.readImpl;
  };

  b.ReadForeign = T;

  b.readImpl = function (K) {
    return K.readImpl;
  };

  b.readForeign = O;
  b.readInt = L;
  b.readString = a;

  b.readArray = function (K) {
    return new T(function () {
      return n.composeKleisliFlipped(q.bindExceptT(l.monadIdentity))(I.traverseWithIndex(I.traversableWithIndexArray)(q.applicativeExceptT(l.monadIdentity))(function (C) {
        return function (ha) {
          return g.withExcept(e.map(t.functorNonEmptyList)(F.ErrorAtIndex.create(C)))((0, K.readImpl)(ha));
        };
      }))(F.readArray);
    }());
  };

  b.readMaybe = function (K) {
    return new T(function () {
      return function (C) {
        return function (ha) {
          return F.isNull(ha) || F.isUndefined(ha) ? k.pure(q.applicativeExceptT(l.monadIdentity))(u.Nothing.value) : e.map(q.functorExceptT(l.functorIdentity))(u.Just.create)(C(ha));
        };
      }(K.readImpl);
    }());
  };

  b.readRecord = function (K) {
    return function (C) {
      return new T(function (ha) {
        return e.map(q.functorExceptT(l.functorIdentity))(h.flip(J.build)({}))((0, C.getFields)(N.RLProxy.value)(ha));
      });
    };
  };

  b.readFieldsCons = function (K) {
    return function (C) {
      return function (ha) {
        return function (sa) {
          return function (za) {
            return new R(function (Ca) {
              return function (ma) {
                var v = (0, ha.getFields)(N.RLProxy.value)(ma),
                    Aa = H.reflectSymbol(K)(H.SProxy.value),
                    Q = g.withExcept(e.map(t.functorNonEmptyList)(F.ErrorAtProperty.create(Aa)));
                ma = n.bind(q.bindExceptT(l.monadIdentity))(Q(n.bindFlipped(q.bindExceptT(l.monadIdentity))(C.readImpl)(E.readProp(Aa)(ma))))(function (ka) {
                  return k.pure(q.applicativeExceptT(l.monadIdentity))(J.insert()()(K)(H.SProxy.value)(ka));
                });
                return A(t.semigroupNonEmptyList)(l.applicativeIdentity)(e.map(q.functorExceptT(l.functorIdentity))(w.compose(J.semigroupoidBuilder))(ma))(v);
              };
            });
          };
        };
      };
    };
  };

  b.readFieldsNil = G;
})(PS);

(function (a) {
  a["DataCite.Types.Common"] = a["DataCite.Types.Common"] || {};

  var b = a["DataCite.Types.Common"],
      d = a["Control.Alt"],
      k = a["Control.Applicative"],
      f = a["Control.Bind"],
      n = a["Control.Monad.Error.Class"],
      p = a["Control.Monad.Except.Trans"],
      g = a["Data.Bounded"],
      q = a["Data.Enum"],
      w = a["Data.Eq"],
      z = a["Data.Functor"],
      c = a["Data.Generic.Rep"],
      h = a["Data.Generic.Rep.Bounded"],
      e = a["Data.Generic.Rep.Enum"],
      l = a["Data.Generic.Rep.Eq"],
      t = a["Data.Generic.Rep.Ord"],
      u = a["Data.Generic.Rep.Show"],
      D = a["Data.Identity"],
      H = a["Data.List.Types"],
      I = a["Data.Ord"],
      y = a["Data.Show"],
      r = a["Data.Symbol"],
      M = a.Foreign,
      F = a["Simple.JSON"],
      E = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      J = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      N = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      R = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      T = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      L = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      O = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      G = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      x = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      V = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      A = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      K = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      C = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ha = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      sa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      za = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ca = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ma = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      v = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Aa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Q = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ka = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ja = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Pa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Fa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ea = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      da = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      va = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ca = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ja = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ea = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      P = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ba = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      oa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ka = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ha = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ua = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      S = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Y = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ra = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ua = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      fa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      U = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ia = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      xa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Da = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ta = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Oa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      La = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      B = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      wa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Qa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ya = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ab = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ib = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      jb = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      pb = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      sb = function sb(m) {
    this.enumReadForeignImpl = m;
  },
      bb = new c.Generic(function (m) {
    if (m instanceof E) return new c.Inl(c.NoArguments.value);
    if (m instanceof J) return new c.Inr(new c.Inl(c.NoArguments.value));
    if (m instanceof N) return new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)));
    if (m instanceof R) return new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))));
    if (m instanceof T) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))));
    if (m instanceof L) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))));
    if (m instanceof O) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))));
    if (m instanceof G) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))));
    if (m instanceof x) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))));
    if (m instanceof V) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))));
    if (m instanceof A) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))));
    if (m instanceof K) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))));
    if (m instanceof C) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))));
    if (m instanceof ha) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(c.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof c.Inl) return E.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inl) return J.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inl) return N.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inl) return R.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inl) return T.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inl) return L.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return O.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return G.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return x.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return V.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return A.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return K.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return C.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr) return ha.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [m.constructor.name]);
  }),
      tb = new y.Show(u.genericShow(bb)(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Audiovisual";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Dataset";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Event";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Image";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "InteractiveResource";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Model";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "PhysicalObject";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "ResourceCollection";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Service";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Software";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Sound";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Text";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Workflow";
  })))(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      eb = new c.Generic(function (m) {
    if (m instanceof sa) return new c.Inl(c.NoArguments.value);
    if (m instanceof za) return new c.Inr(new c.Inl(c.NoArguments.value));
    if (m instanceof Ca) return new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)));
    if (m instanceof ma) return new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))));
    if (m instanceof v) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))));
    if (m instanceof Aa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))));
    if (m instanceof Q) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))));
    if (m instanceof ka) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))));
    if (m instanceof Ja) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))));
    if (m instanceof Pa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))));
    if (m instanceof Fa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))));
    if (m instanceof Ea) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))));
    if (m instanceof da) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))));
    if (m instanceof va) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))));
    if (m instanceof ca) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))));
    if (m instanceof ja) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))));
    if (m instanceof ea) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))));
    if (m instanceof P) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))))));
    if (m instanceof ba) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))))));
    if (m instanceof oa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))))))));
    if (m instanceof Ka) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))))))));
    if (m instanceof Ha) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))))))))));
    if (m instanceof Ua) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))))))))));
    if (m instanceof S) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))))))))))));
    if (m instanceof Y) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(c.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof c.Inl) return sa.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inl) return za.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inl) return Ca.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inl) return ma.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inl) return v.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inl) return Aa.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Q.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ka.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ja.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Pa.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Fa.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ea.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return da.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return va.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ca.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ja.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ea.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return P.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ba.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return oa.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ka.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ha.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ua.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return S.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr) return Y.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [m.constructor.name]);
  }),
      Ab = new y.Show(u.genericShow(eb)(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsCitedBy";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Cites";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsSupplementTo";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsContinuedBy";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Continues";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsPartOf";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "HasPart";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsReferencedBy";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "References";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Documents";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsCompiledBy";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Compiles";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "HasMetadata";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsMetadataFor";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Reviews";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsReviewedBy";
  })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      cb = new c.Generic(function (m) {
    if (m instanceof ra) return new c.Inl(c.NoArguments.value);
    if (m instanceof ua) return new c.Inr(new c.Inl(c.NoArguments.value));
    if (m instanceof fa) return new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)));
    if (m instanceof U) return new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))));
    if (m instanceof ia) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))));
    if (m instanceof xa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))));
    if (m instanceof Da) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))));
    if (m instanceof ta) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))));
    if (m instanceof Oa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))));
    if (m instanceof La) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))));
    if (m instanceof B) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))));
    if (m instanceof wa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))));
    if (m instanceof Qa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))));
    if (m instanceof Ya) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))));
    if (m instanceof ab) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))));
    if (m instanceof ib) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))));
    if (m instanceof jb) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))));
    if (m instanceof pb) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(c.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof c.Inl) return ra.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inl) return ua.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inl) return fa.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inl) return U.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inl) return ia.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inl) return xa.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Da.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ta.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Oa.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return La.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return B.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return wa.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Qa.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ya.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ab.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ib.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return jb.value;
    if (m instanceof c.Inr && m.value0 instanceof c.Inr && m.value0.value0 instanceof c.Inr && m.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr) return pb.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [m.constructor.name]);
  }),
      vb = new y.Show(function (m) {
    return m instanceof ua ? "arXiv" : m instanceof fa ? "bibcode" : u.genericShow(cb)(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ARK";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ArXiv";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Bibcode";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "DOI";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "EAN13";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "EISSN";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Handle";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "IGSN";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ISBN";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ISSN";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ISTC";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "LISSN";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "LSID";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "PMID";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "PURL";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "UPC";
    })))(u.genericShowSum(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "URL";
    })))(u.genericShowConstructor(u.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(m);
  }),
      Bb = new w.Eq(l.genericEq(bb)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))),
      kb = new I.Ord(function () {
    return Bb;
  }, function (m) {
    return function (gb) {
      return t.genericCompare(bb)(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdConstructor(t.genericOrdNoArguments)))))))))))))))(m)(gb);
    };
  }),
      wb = new w.Eq(l.genericEq(eb)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments))))))))))))))))))))))))))),
      fb = new I.Ord(function () {
    return wb;
  }, function (m) {
    return function (gb) {
      return t.genericCompare(eb)(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdConstructor(t.genericOrdNoArguments))))))))))))))))))))))))))(m)(gb);
    };
  }),
      Cb = new w.Eq(l.genericEq(cb)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))))))),
      xb = new I.Ord(function () {
    return Cb;
  }, function (m) {
    return function (gb) {
      return t.genericCompare(cb)(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdConstructor(t.genericOrdNoArguments)))))))))))))))))))(m)(gb);
    };
  }),
      Db = new q.Enum(function () {
    return kb;
  }, e.genericPred(bb)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), e.genericSucc(bb)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      Eb = new q.Enum(function () {
    return fb;
  }, e.genericPred(eb)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), e.genericSucc(eb)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      Ia = function Ia(m) {
    return function (gb) {
      return new sb(function (lb) {
        return d.alt(p.altExceptT(H.semigroupNonEmptyList)(D.monadIdentity))(z.map(p.functorExceptT(D.functorIdentity))(c.Inl.create)((0, m.enumReadForeignImpl)(lb)))(z.map(p.functorExceptT(D.functorIdentity))(c.Inr.create)((0, gb.enumReadForeignImpl)(lb)));
      });
    };
  },
      ub = function ub(m) {
    return function (gb) {
      return function (lb) {
        return z.map(p.functorExceptT(D.functorIdentity))(c.to(m))((0, gb.enumReadForeignImpl)(lb));
      };
    };
  },
      Fb = new q.Enum(function () {
    return xb;
  }, e.genericPred(cb)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), e.genericSucc(cb)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      Ma = function Ma(m) {
    return new sb(function (gb) {
      var lb = r.reflectSymbol(m)(r.SProxy.value);
      return f.bind(p.bindExceptT(D.monadIdentity))(F.readImpl(F.readString)(gb))(function (Ib) {
        return Ib === lb ? k.pure(p.applicativeExceptT(D.monadIdentity))(c.NoArguments.value) : n.throwError(p.monadThrowExceptT(D.monadIdentity))(k.pure(H.applicativeNonEmptyList)(M.ForeignError.create("Enum string " + (Ib + (" did not match expected string " + lb)))));
      });
    });
  },
      yb = new F.ReadForeign(ub(cb)(Ia(Ma(new r.IsSymbol(function () {
    return "ARK";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "ArXiv";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Bibcode";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "DOI";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "EAN13";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "EISSN";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Handle";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "IGSN";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "ISBN";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "ISSN";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "ISTC";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "LISSN";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "LSID";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "PMID";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "PURL";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "UPC";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "URL";
  })))(Ma(new r.IsSymbol(function () {
    return "URN";
  }))))))))))))))))))))),
      zb = new F.ReadForeign(ub(bb)(Ia(Ma(new r.IsSymbol(function () {
    return "Audiovisual";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Dataset";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Event";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Image";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "InteractiveResource";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Model";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "PhysicalObject";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "ResourceCollection";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Service";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Software";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Sound";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Text";
  })))(Ia(Ma(new r.IsSymbol(function () {
    return "Workflow";
  })))(Ma(new r.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      mb = new g.Bounded(function () {
    return kb;
  }, h.genericBottom(bb)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(bb)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments)))))))))))))))),
      qb = new g.Bounded(function () {
    return fb;
  }, h.genericBottom(eb)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(eb)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments))))))))))))))))))))))))))),
      Mb = new g.Bounded(function () {
    return xb;
  }, h.genericBottom(cb)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(cb)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments)))))))))))))))))))),
      Jb = new q.BoundedEnum(function () {
    return mb;
  }, function () {
    return Db;
  }, e.genericCardinality(bb)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))), e.genericFromEnum(bb)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))), e.genericToEnum(bb)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments)))))))))))))))),
      Nb = new q.BoundedEnum(function () {
    return qb;
  }, function () {
    return Eb;
  }, e.genericCardinality(eb)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments)))))))))))))))))))))))))), e.genericFromEnum(eb)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments)))))))))))))))))))))))))), e.genericToEnum(eb)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Gb = new q.BoundedEnum(function () {
    return Mb;
  }, function () {
    return Fb;
  }, e.genericCardinality(cb)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))), e.genericFromEnum(cb)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))), e.genericToEnum(cb)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))));

  b.ARK = ra;
  b.ArXiv = ua;
  b.Bibcode = fa;
  b.DOI = U;
  b.EAN13 = ia;
  b.EISSN = xa;
  b.Handle = Da;
  b.IGSN = ta;
  b.ISBN = Oa;
  b.ISSN = La;
  b.ISTC = B;
  b.LISSN = wa;
  b.LSID = Qa;
  b.PMID = Ya;
  b.PURL = ab;
  b.UPC = ib;
  b.URL = jb;
  b.URN = pb;
  b.IsCitedBy = sa;
  b.Cites = za;
  b.IsSupplementTo = Ca;
  b.IsSupplementedBy = ma;
  b.IsContinuedBy = v;
  b.Continues = Aa;
  b.IsNewVersionOf = Q;
  b.IsPreviousVersionOf = ka;
  b.IsPartOf = Ja;
  b.HasPart = Pa;
  b.IsReferencedBy = Fa;
  b.References = Ea;
  b.IsDocumentedBy = da;
  b.Documents = va;
  b.IsCompiledBy = ca;
  b.Compiles = ja;
  b.IsVariantFormOf = ea;
  b.IsOriginalFormOf = P;
  b.IsIdenticalTo = ba;
  b.HasMetadata = oa;
  b.IsMetadataFor = Ka;
  b.Reviews = Ha;
  b.IsReviewedBy = Ua;
  b.IsDerivedFrom = S;
  b.IsSourceOf = Y;
  b.Audiovisual = E;
  b.Dataset = J;
  b.Event = N;
  b.Image = R;
  b.InteractiveResource = T;
  b.Model = L;
  b.PhysicalObject = O;
  b.ResourceCollection = G;
  b.Service = x;
  b.Software = V;
  b.Sound = A;
  b.Text = K;
  b.Workflow = C;
  b.Other = ha;

  b.altIdToId = function (m) {
    return {
      identifier: m.alternateIdentifier,
      identifierType: m.alternateIdentifierType
    };
  };

  b.showIdentifierType = vb;
  b.boundedEnumIdentifierType = Gb;
  b.identifierTypeReadForeign = yb;
  b.showRelationType = Ab;
  b.boundedEnumRelationType = Nb;
  b.showResourceTypeGeneral = tb;
  b.boundedEnumResourceTypeGeneral = Jb;
  b.resourceTypeGeneralReadForeign = zb;
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var b = function () {
    function d() {}

    d.value = new d();
    return d;
  }();

  a.RProxy = b;
})(PS);

(function (a) {
  a["DataCite.JSON.Decode.Simple"] = a["DataCite.JSON.Decode.Simple"] || {};
  var b = a["DataCite.JSON.Decode.Simple"],
      d = a["Control.Applicative"],
      k = a["Control.Bind"],
      f = a["Control.Monad"],
      n = a["Control.Monad.Error.Class"],
      p = a["Control.Monad.Except"],
      g = a["Control.Monad.Except.Trans"],
      q = a["Control.Monad.Writer"],
      w = a["Control.Monad.Writer.Class"],
      z = a["Control.Monad.Writer.Trans"],
      c = a["Control.Plus"],
      h = a["Data.Array.NonEmpty"],
      e = a["Data.Array.NonEmpty.Internal"],
      l = a["Data.Either"],
      t = a["Data.Either.Extra"],
      u = a["Data.Foldable"],
      D = a["Data.Functor"],
      H = a["Data.Identity"],
      I = a["Data.Lazy"],
      y = a["Data.List.NonEmpty"],
      r = a["Data.List.Types"],
      M = a["Data.Maybe"],
      F = a["Data.Monoid"],
      E = a["Data.Natural"],
      J = a["Data.Newtype"],
      N = a["Data.String.NonEmpty.Internal"],
      R = a["Data.Symbol"],
      T = a["Data.Traversable"],
      L = a["Data.Tuple"],
      O = a["Data.Unfoldable"],
      G = a["DataCite.JSON.Util"],
      x = a["DataCite.Types.Common"],
      V = a.Foreign,
      A = a["Foreign.Index"],
      K = a["Simple.JSON"];
  a = a["Type.Data.Row"];

  var C = new J.Newtype(function (fa) {
    return fa;
  }, function (fa) {
    return fa;
  }),
      ha = new J.Newtype(function (fa) {
    return fa;
  }, function (fa) {
    return fa;
  }),
      sa = z.monadTellWriterT(F.monoidArray)(H.monadIdentity),
      za = z.monadWriterT(F.monoidArray)(H.monadIdentity),
      Ca = g.monadThrowExceptT(za),
      ma = g.monadTellExceptT(sa),
      v = g.bindExceptT(za),
      Aa = g.applicativeExceptT(za),
      Q = function Q(fa) {
    return function (U) {
      var ia = q.runWriter(J.unwrap(C)(g.runExceptT(J.unwrap(ha)(U))));
      if (ia.value0 instanceof l.Left) return k.discard(k.discardUnit)(v)(w.tell(ma)(y.toUnfoldable(O.unfoldableArray)(ia.value0.value0)))(function () {
        return d.pure(Aa)(fa);
      });
      if (ia.value0 instanceof l.Right) return U;
      throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 71, column 28 - line 75, column 24): " + [ia.value0.constructor.name]);
    };
  },
      ka = function ka(fa) {
    return V.isNull(fa) || V.isUndefined(fa);
  },
      Ja = function Ja(fa) {
    var U = d.pure(fa.Applicative0()),
        ia = J.unwrap(H.newtypeIdentity);
    return function (xa) {
      return U(ia(xa));
    };
  },
      Pa = function Pa(fa) {
    var U = Ja(fa),
        ia = J.unwrap(g.newtypeExceptT);
    return function (xa) {
      return g.ExceptT(U(ia(xa)));
    };
  },
      Fa = function Fa(fa) {
    var U = Pa(za),
        ia = K["read'"](fa);
    return function (xa) {
      return U(ia(xa));
    };
  },
      Ea = function Ea(fa) {
    return Q("")(Fa(K.readString)(fa));
  },
      da = function da(fa) {
    return function (U) {
      return k.bind(v)(Ea(U))(function (ia) {
        ia = N.fromString(ia);
        if (ia instanceof M.Just) return d.pure(Aa)(ia.value0);
        if (ia instanceof M.Nothing) return n.throwError(Ca)(d.pure(r.applicativeNonEmptyList)(V.ForeignError.create("Nonempty string expected in:\n" + I.force(fa))));
        throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 212, column 3 - line 215, column 55): " + [ia.constructor.name]);
      });
    };
  },
      va = function va(fa) {
    return function (U) {
      return k.bind(v)(da(fa)(U.alternateIdentifier))(function (ia) {
        var xa = Fa(x.identifierTypeReadForeign)(U.alternateIdentifierType);
        return k.bind(v)(Q(x.Handle.value)(xa))(function (Da) {
          return d.pure(Aa)(x.altIdToId({
            alternateIdentifier: ia,
            alternateIdentifierType: Da
          }));
        });
      });
    };
  },
      ca = function ca(fa) {
    return function (U) {
      return function (ia) {
        return va(U)(ia);
      };
    };
  },
      ja = function ja(fa) {
    return function (U) {
      return k.bind(v)(da(fa)(U.identifier))(function (ia) {
        var xa = Fa(x.identifierTypeReadForeign)(U.identifierType);
        return k.bind(v)(Q(x.Handle.value)(xa))(function (Da) {
          return d.pure(Aa)({
            identifier: ia,
            identifierType: Da
          });
        });
      });
    };
  },
      ea = function ea(fa) {
    return function (U) {
      return function (ia) {
        return ja(U)(ia);
      };
    };
  },
      P = function () {
    var fa = Pa(za);
    return function (U) {
      return fa(V.readArray(U));
    };
  }(),
      ba = function ba(fa) {
    return function (U) {
      return function (ia) {
        return k.bind(v)(P(ia))(function (xa) {
          xa = D.map(D.functorArray)(function () {
            var Oa = J.unwrap(C),
                La = J.unwrap(ha),
                B = U(fa);
            return function (wa) {
              return q.runWriter(Oa(g.runExceptT(La(B(wa)))));
            };
          }())(xa);
          var Da = D.map(D.functorArray)(L.fst)(xa),
              ta = D.map(D.functorArray)(L.snd)(xa);
          return k.discard(k.discardUnit)(v)(u.traverse_(Aa)(u.foldableArray)(w.tell(ma))(D.map(D.functorArray)(y.toUnfoldable(O.unfoldableArray))(t.catLefts(f.monadArray)(c.plusArray)(Da))))(function () {
            return k.discard(k.discardUnit)(v)(u.traverse_(Aa)(u.foldableArray)(w.tell(ma))(ta))(function () {
              return d.pure(Aa)(t.catRights(f.monadArray)(c.plusArray)(Da));
            });
          });
        });
      };
    };
  },
      oa = function oa(fa) {
    return function (U) {
      return function (ia) {
        return k.bind(v)(ba(fa)(U)(ia))(function (xa) {
          xa = h.fromArray(xa);
          if (xa instanceof M.Just) return d.pure(Aa)(xa.value0);
          if (xa instanceof M.Nothing) return n.throwError(Ca)(d.pure(r.applicativeNonEmptyList)(V.ForeignError.create("Nonempty array expected in:\n" + I.force(fa))));
          throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 250, column 3 - line 253, column 54): " + [xa.constructor.name]);
        });
      };
    };
  },
      Ka = function Ka(fa) {
    return function (U) {
      return function (ia) {
        return k.bind(v)(P(ia))(function (xa) {
          var Da = D.map(D.functorArray)(function () {
            var ta = K["read'"](fa);
            return function (Oa) {
              return p.runExcept(ta(Oa));
            };
          }())(xa);
          return k.discard(k.discardUnit)(v)(u.traverse_(Aa)(u.foldableArray)(w.tell(ma))(D.map(D.functorArray)(y.toUnfoldable(O.unfoldableArray))(t.catLefts(f.monadArray)(c.plusArray)(Da))))(function () {
            var ta = t.catRights(f.monadArray)(c.plusArray)(Da);
            ta = h.fromArray(ta);
            if (ta instanceof M.Just) return d.pure(Aa)(ta.value0);
            if (ta instanceof M.Nothing) return n.throwError(Ca)(d.pure(r.applicativeNonEmptyList)(V.ForeignError.create("Nonempty array expected in:\n" + I.force(U))));
            throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 224, column 3 - line 227, column 54): " + [ta.constructor.name]);
          });
        });
      };
    };
  },
      Ha = function Ha(fa) {
    var U = Pa(za),
        ia = K["readJSON'"](fa);
    return function (xa) {
      return U(ia(xa));
    };
  },
      Ua = function Ua(fa) {
    return function (U) {
      return Pa(za)(A.readProp(fa)(U));
    };
  },
      S = function S(fa) {
    return function (U) {
      return k.bind(v)(Ua("title")(U))(function (ia) {
        return k.bind(v)(da(fa)(ia))(function (xa) {
          return d.pure(Aa)({
            title: xa
          });
        });
      });
    };
  },
      Y = a.RProxy.value,
      ra = function ra(fa) {
    return function (U) {
      return I.defer(function (ia) {
        return "Couldn't read for " + (U + (" in: \n" + I.force(fa)));
      });
    };
  },
      ua = function ua(fa) {
    var U = G.tryPrettyJson(fa),
        ia = ra(U),
        xa = function xa(ta) {
      return ka(ta.type) && ka(ta.identifier) && ka(ta.identifierType) ? d.pure(Aa)(M.Nothing.value) : k.bind(v)(Fa(K.readString)(ta.type))(function (Oa) {
        var La = N.fromString(Oa);
        return k.bind(v)(ja(ia("container"))(ta))(function (B) {
          return d.pure(Aa)(M.Just.create({
            type: La,
            identifier: B.identifier,
            identifierType: B.identifierType
          }));
        });
      });
    },
        Da = function Da(ta) {
      return T.traverse(e.traversableNonEmptyArray)(Aa)(function (Oa) {
        return k.bind(v)(da(ia("Creator name"))(Oa.name))(function (La) {
          return k.bind(v)(T.traverse(T.traversableArray)(Aa)(da(ia("Creator affiliations")))(Oa.affiliation))(function (B) {
            return d.pure(Aa)({
              name: La,
              nameType: k.bind(M.bindMaybe)(Oa.nameType)(N.fromString),
              givenName: k.bind(M.bindMaybe)(Oa.givenName)(N.fromString),
              familyName: k.bind(M.bindMaybe)(Oa.familyName)(N.fromString),
              affiliation: B
            });
          });
        });
      })(ta);
    };

    return k.bind(v)(Ha(K.readRecord()(K.readFieldsCons(new R.IsSymbol(function () {
      return "data";
    }))(K.readRecord()(K.readFieldsCons(new R.IsSymbol(function () {
      return "attributes";
    }))(K.readRecord()(K.readFieldsCons(new R.IsSymbol(function () {
      return "alternateIdentifiers";
    }))(K.readArray(K.readRecord()(K.readFieldsCons(new R.IsSymbol(function () {
      return "alternateIdentifier";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "alternateIdentifierType";
    }))(K.readForeign)(K.readFieldsNil)()())()())))(K.readFieldsCons(new R.IsSymbol(function () {
      return "container";
    }))(K.readRecord()(K.readFieldsCons(new R.IsSymbol(function () {
      return "identifier";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "identifierType";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "type";
    }))(K.readForeign)(K.readFieldsNil)()())()())()()))(K.readFieldsCons(new R.IsSymbol(function () {
      return "creators";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "descriptions";
    }))(K.readArray(K.readRecord()(K.readFieldsCons(new R.IsSymbol(function () {
      return "description";
    }))(K.readString)(K.readFieldsCons(new R.IsSymbol(function () {
      return "descriptionType";
    }))(K.readString)(K.readFieldsNil)()())()())))(K.readFieldsCons(new R.IsSymbol(function () {
      return "doi";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "formats";
    }))(K.readArray(K.readForeign))(K.readFieldsCons(new R.IsSymbol(function () {
      return "identifiers";
    }))(K.readArray(K.readRecord()(K.readFieldsCons(new R.IsSymbol(function () {
      return "identifier";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "identifierType";
    }))(K.readForeign)(K.readFieldsNil)()())()())))(K.readFieldsCons(new R.IsSymbol(function () {
      return "prefix";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "publicationYear";
    }))(K.readInt)(K.readFieldsCons(new R.IsSymbol(function () {
      return "publisher";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "suffix";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "titles";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "types";
    }))(K.readRecord()(K.readFieldsCons(new R.IsSymbol(function () {
      return "resourceTypeGeneral";
    }))(x.resourceTypeGeneralReadForeign)(K.readFieldsNil)()()))(K.readFieldsCons(new R.IsSymbol(function () {
      return "version";
    }))(K.readMaybe(K.readString))(K.readFieldsNil)()())()())()())()())()())()())()())()())()())()())()())()())()())()()))(K.readFieldsCons(new R.IsSymbol(function () {
      return "id";
    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
      return "relationships";
    }))(K.readRecord()(K.readFieldsNil))(K.readFieldsCons(new R.IsSymbol(function () {
      return "type";
    }))(K.readForeign)(K.readFieldsNil)()())()())()())()()))(K.readFieldsNil)()()))(fa))(function (ta) {
      return k.bind(v)(da(ia("data.id"))(ta.data.id))(function (Oa) {
        return k.bind(v)(da(ia("data.type"))(ta.data.type))(function (La) {
          return k.bind(v)(da(ia("data.attributes.doi"))(ta.data.attributes.doi))(function (B) {
            return k.bind(v)(da(ia("data.attributes.prefix"))(ta.data.attributes.prefix))(function (wa) {
              return k.bind(v)(da(ia("data.attributes.suffix"))(ta.data.attributes.suffix))(function (Qa) {
                return k.bind(v)(T.traverse(T.traversableArray)(Aa)(ea(Y)(ia("data.attributes.identifiers")))(ta.data.attributes.identifiers))(function (Ya) {
                  return k.bind(v)(T.traverse(T.traversableArray)(Aa)(ca(Y)(ia("data.attributes.alternateIdentifiers")))(ta.data.attributes.alternateIdentifiers))(function (ab) {
                    return k.bind(v)(Ka(K.readRecord()(K.readFieldsCons(new R.IsSymbol(function () {
                      return "affiliation";
                    }))(K.readArray(K.readForeign))(K.readFieldsCons(new R.IsSymbol(function () {
                      return "familyName";
                    }))(K.readMaybe(K.readString))(K.readFieldsCons(new R.IsSymbol(function () {
                      return "givenName";
                    }))(K.readMaybe(K.readString))(K.readFieldsCons(new R.IsSymbol(function () {
                      return "name";
                    }))(K.readForeign)(K.readFieldsCons(new R.IsSymbol(function () {
                      return "nameType";
                    }))(K.readMaybe(K.readString))(K.readFieldsNil)()())()())()())()())()()))(ia("data.attributes.creators"))(ta.data.attributes.creators))(function (ib) {
                      return k.bind(v)(Da(ib))(function (jb) {
                        return k.bind(v)(oa(ia("data.attributes.titles"))(S)(ta.data.attributes.titles))(function (pb) {
                          return k.bind(v)(da(ia("data.attributes.publisher"))(ta.data.attributes.publisher))(function (sb) {
                            return k.bind(v)(xa(ta.data.attributes.container))(function (bb) {
                              return k.bind(v)(T.traverse(T.traversableArray)(Aa)(da(ia("Formats")))(ta.data.attributes.formats))(function (tb) {
                                return d.pure(Aa)({
                                  data: {
                                    id: Oa,
                                    type: La,
                                    attributes: {
                                      doi: B,
                                      prefix: wa,
                                      suffix: Qa,
                                      identifiers: Ya,
                                      alternateIdentifiers: ab,
                                      creators: jb,
                                      titles: pb,
                                      publisher: sb,
                                      container: bb,
                                      publicationYear: E.intToNat(ta.data.attributes.publicationYear),
                                      formats: tb,
                                      descriptions: ta.data.attributes.descriptions,
                                      types: ta.data.attributes.types,
                                      version: ta.data.attributes.version
                                    },
                                    relationships: ta.data.relationships
                                  }
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
        });
      });
    });
  };

  b.readRecordJSON = function (fa) {
    return g.runExceptT(J.unwrap(ha)(ua(G.preParse(fa))));
  };

  b.newtypeJSONWithErr = C;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var b = a["Effect.Class"],
      d = a["Effect.Console"];

  a["Effect.Class.Console"].log = function (k) {
    var f = b.liftEffect(k);
    return function (n) {
      return f(d.log(n));
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
  var b = a["Effect.Now"],
      d = a["Effect.Now"],
      k = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(k.toDateTime)(d.now);
  b.nowDateTime = a;
})(PS);

(function (a) {
  a["Metajelo.CSS.Common.ClassNames"] = a["Metajelo.CSS.Common.ClassNames"] || {};
  a = a["Metajelo.CSS.Common.ClassNames"];
  a.record = "record";
  a.recordHeader = "recordHeader";
  a.recordId = "recordId";
  a.product = "product";
  a.productHeader = "productHeader";
  a.productList = "productList";
  a.productsHeader = "productsHeader";
  a.products = "products";
  a.location = "location";
  a.locationHeader = "locationHeader";
  a.sustainability = "sustainability";
  a.sustainabilityHeader = "sustainabilityHeader";
  a.missionStatement = "missionStatement";
  a.missionStatementHeader = "missionStatementHeader";
  a.fundingStatementHeader = "fundingStatementHeader";
  a.fundingStatement = "fundingStatement";
  a.identifier = "identifier";
  a.id = "id";
  a.idHeader = "idHeader";
  a.idType = "idType";
  a.idTypeHeader = "idTypeHeader";
  a.relatedId = "relatedId";
  a.relatedIdHeader = "relatedIdHeader";
  a.relType = "relType";
  a.relTypeHeader = "relTypeHeader";
  a.relatedIdList = "relatedIdList";
  a.relatedIdsHeader = "relatedIdsHeader";
  a.relatedIds = "relatedIds";
  a.basicMetadata = "basicMetadata";
  a.basicMetadataHeader = "basicMetadataHeader";
  a.creator = "creator";
  a.creatorHeader = "creatorHeader";
  a.creatorList = "creatorList";
  a.pubyear = "pubyear";
  a.pubyearHeader = "pubyearHeader";
  a.title = "title";
  a.titleHeader = "titleHeader";
  a.titleList = "titleList";
  a.resourceId = "resourceId";
  a.resourceIdHeader = "resourceIdHeader";
  a.resourceType = "resourceType";
  a.resourceTypeHeader = "resourceTypeHeader";
  a.resourceTypeGen = "resourceTypeGen";
  a.resourceTypeGenHeader = "resourceTypeGenHeader";
  a.resourceTypeDescr = "resourceTypeDescr";
  a.resourceTypeDescrHeader = "resourceTypeDescrHeader";
  a.resourceMDSource = "resourceMDSource";
  a.resourceMDSourceHeader = "resourceMDSourceHeader";
  a.institutionName = "institutionName";
  a.institutionNameHeader = "institutionNameHeader";
  a.institutionId = "institutionId";
  a.institutionType = "institutionType";
  a.institutionTypeHeader = "institutionTypeHeader";
  a.institutionContact = "institutionContact";
  a.institutionContactHeader = "institutionContactHeader";
  a.contactEmail = "contactEmail";
  a.contactEmailHeader = "contactEmailHeader";
  a.contactType = "contactType";
  a.contactTypeHeader = "contactTypeHeader";
  a.institutionPolicy = "institutionPolicy";
  a.institutionPolicyHeader = "institutionPolicyHeader";
  a.institutionPolicies = "institutionPolicies";
  a.institutionPoliciesHeader = "institutionPoliciesHeader";
  a.policy = "policy";
  a.policyHeader = "policyHeader";
  a.policyType = "policyType";
  a.policyTypeHeader = "policyTypeHeader";
  a.applies = "applies";
  a.appliesHeader = "appliesHeader";
  a.superOrg = "superOrg";
  a.superOrgHeader = "superOrgHeader";
  a.versioning = "versioning";
  a.versioningHeader = "versioningHeader";
  a.format = "format";
  a.formatHeader = "formatHeader";
  a.formatList = "formatList";
  a.formatListHeader = "formatListHeader";
  a.url = "url";
})(PS);

(function (a) {
  a["Metajelo.CSS.Common.Util"] = a["Metajelo.CSS.Common.Util"] || {};
  var b = a["Concur.React.Props"],
      d = a["Data.Functor"],
      k = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (f) {
    return b.classList(d.map(d.functorArray)(k.Just.create)(f));
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassNamesPrivate"] = a["Metajelo.CSS.UI.ClassNamesPrivate"] || {};
  a = a["Metajelo.CSS.UI.ClassNamesPrivate"];
  a.page = "page";
  a.active = "active";
  a.date = "date";
  a.dateHeader = "dateHeader";
  a.recFlexBox = "recFlexBox";
  a.recPreview = "recPreview";
  a.recPreviewHeader = "recPreviewHeader";
  a.recEditor = "recEditor";
  a.sideBar = "sideBar";
  a.sideBarTab = "sideBarTab";
  a.sideBarGrid = "sideBarGrid";
  a.sideBarMenu = "sideBarMenu";
  a.sideBarCol = "sideBarCol";
  a.dataCiteFatal = "dataCiteFatal";
  a.dataCiteNonFatal = "dataCiteNonFatal";
  a.prodPreview = "prodPreview";
  a.prodPreviewHeader = "prodPreviewHeader";
  a.locPreview = "locPreview";
  a.locPreviewHeader = "locPreviewHeader";
  a.downloadBtn = "downloadBtn";
  a.clipBtn = "clipBtn";
  a.previewButtons = "previewButtons";
  a.addItem = "addItem";
  a.deleteItem = "deleteItem";
  a.uploadDescr = "uploadDescr";
  a.reloadDescr = "reloadDescr";
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.Util"] = a["Metajelo.CSS.UI.Util"] || {};

  var b = a["Metajelo.CSS.UI.Util"],
      d = a["Concur.React.Props"],
      k = a["Data.Functor"],
      f = a["Metajelo.CSS.Common.Util"],
      n = function n(p) {
    return "metajelo-ui_" + p;
  };

  a = function () {
    var p = k.map(k.functorArray)(n);
    return function (g) {
      return f.cList(p(g));
    };
  }();

  b.mjUiClassPfx = "metajelo-ui_";

  b.mjUiClass = function (p) {
    return d.className("metajelo-ui_" + p);
  };

  b.cList = a;
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassProps"] = a["Metajelo.CSS.UI.ClassProps"] || {};
  var b = a["Metajelo.CSS.UI.ClassProps"],
      d = a["Metajelo.CSS.Common.ClassNames"],
      k = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      f = a["Metajelo.CSS.UI.Util"],
      n = f.mjUiClass(d.versioningHeader),
      p = f.mjUiClass(d.versioning),
      g = f.mjUiClass(d.url),
      q = f.mjUiClass(k.uploadDescr),
      w = f.mjUiClass(d.titleList),
      z = f.mjUiClass(d.titleHeader),
      c = f.mjUiClass(d.title),
      h = f.mjUiClass(d.sustainabilityHeader),
      e = f.mjUiClass(d.sustainability),
      l = f.mjUiClass(d.superOrgHeader),
      t = f.mjUiClass(d.superOrg),
      u = f.mjUiClass(k.sideBarTab),
      D = f.mjUiClass(k.sideBar),
      H = f.mjUiClass(k.sideBarMenu),
      I = f.mjUiClass(k.sideBarGrid),
      y = f.mjUiClass(k.sideBarCol),
      r = f.mjUiClass(k.sideBar),
      M = f.mjUiClass(d.resourceTypeHeader),
      F = f.mjUiClass(d.resourceTypeGenHeader),
      E = f.mjUiClass(d.resourceTypeGen),
      J = f.mjUiClass(d.resourceTypeDescrHeader),
      N = f.mjUiClass(d.resourceTypeDescr),
      R = f.mjUiClass(d.resourceType),
      T = f.mjUiClass(d.resourceMDSourceHeader),
      L = f.mjUiClass(d.resourceMDSource),
      O = f.mjUiClass(d.resourceIdHeader),
      G = f.mjUiClass(d.resourceId),
      x = f.mjUiClass(k.reloadDescr),
      V = f.mjUiClass(d.relatedIds),
      A = f.mjUiClass(d.relatedIdList),
      K = f.mjUiClass(d.relatedIdHeader),
      C = f.mjUiClass(d.relatedId),
      ha = f.mjUiClass(d.relTypeHeader),
      sa = f.mjUiClass(d.relType),
      za = f.mjUiClass(d.recordHeader),
      Ca = f.mjUiClass(d.record),
      ma = f.mjUiClass(k.recPreviewHeader),
      v = f.mjUiClass(k.recPreview),
      Aa = f.mjUiClass(k.recFlexBox),
      Q = f.mjUiClass(k.recEditor),
      ka = f.mjUiClass(d.pubyearHeader),
      Ja = f.mjUiClass(d.pubyear),
      Pa = f.mjUiClass(d.products),
      Fa = f.mjUiClass(d.productList),
      Ea = f.mjUiClass(d.product),
      da = f.mjUiClass(k.prodPreviewHeader),
      va = f.mjUiClass(k.prodPreview),
      ca = f.mjUiClass(k.previewButtons),
      ja = f.mjUiClass(d.policyTypeHeader),
      ea = f.mjUiClass(d.policyType),
      P = f.mjUiClass(d.policyHeader),
      ba = f.mjUiClass(d.policy),
      oa = f.mjUiClass(k.page),
      Ka = f.mjUiClass(d.missionStatementHeader),
      Ha = f.mjUiClass(d.missionStatement),
      Ua = f.mjUiClass(d.locationHeader),
      S = f.mjUiClass(d.location),
      Y = f.mjUiClass(k.locPreviewHeader),
      ra = f.mjUiClass(k.locPreview),
      ua = f.mjUiClass(d.institutionTypeHeader),
      fa = f.mjUiClass(d.institutionType),
      U = f.mjUiClass(d.institutionPolicy),
      ia = f.mjUiClass(d.institutionPoliciesHeader),
      xa = f.mjUiClass(d.institutionPolicies),
      Da = f.mjUiClass(d.institutionNameHeader),
      ta = f.mjUiClass(d.institutionName),
      Oa = f.mjUiClass(d.institutionId),
      La = f.mjUiClass(d.institutionContactHeader),
      B = f.mjUiClass(d.institutionContact),
      wa = f.mjUiClass(d.identifier),
      Qa = f.mjUiClass(d.idTypeHeader),
      Ya = f.mjUiClass(d.idType),
      ab = f.mjUiClass(d.idHeader),
      ib = f.mjUiClass(d.id),
      jb = f.mjUiClass(d.fundingStatementHeader),
      pb = f.mjUiClass(d.fundingStatement),
      sb = f.mjUiClass(d.formatListHeader),
      bb = f.mjUiClass(d.formatList),
      tb = f.mjUiClass(d.formatHeader),
      eb = f.mjUiClass(d.format),
      Ab = f.mjUiClass(k.downloadBtn),
      cb = f.mjUiClass(k.deleteItem),
      vb = f.mjUiClass(k.dateHeader),
      Bb = f.mjUiClass(k.date),
      kb = f.mjUiClass(k.dataCiteNonFatal),
      wb = f.mjUiClass(k.dataCiteFatal),
      fb = f.mjUiClass(d.creatorList),
      Cb = f.mjUiClass(d.creatorHeader),
      xb = f.mjUiClass(d.creator),
      Db = f.mjUiClass(d.contactTypeHeader),
      Eb = f.mjUiClass(d.contactType),
      Ia = f.mjUiClass(d.contactEmailHeader),
      ub = f.mjUiClass(d.contactEmail),
      Fb = f.mjUiClass(k.clipBtn),
      Ma = f.mjUiClass(d.basicMetadataHeader),
      yb = f.mjUiClass(d.basicMetadata),
      zb = f.mjUiClass(d.appliesHeader),
      mb = f.mjUiClass(d.applies),
      qb = f.mjUiClass(k.addItem);
  b.page = oa;
  b.date = Bb;
  b.dateHeader = vb;
  b.recFlexBox = Aa;
  b.recPreview = v;
  b.recPreviewHeader = ma;
  b.recEditor = Q;
  b.sideBar = r;
  b.sideBarNav = D;
  b.sideBarTab = u;
  b.sideBarGrid = I;
  b.sideBarMenu = H;
  b.sideBarCol = y;
  b.dataCiteFatal = wb;
  b.dataCiteNonFatal = kb;
  b.prodPreview = va;
  b.prodPreviewHeader = da;
  b.locPreview = ra;
  b.locPreviewHeader = Y;
  b.downloadBtn = Ab;
  b.clipBtn = Fb;
  b.previewButtons = ca;
  b.addItem = qb;
  b.deleteItem = cb;
  b.uploadDescr = q;
  b.reloadDescr = x;
  b.record = Ca;
  b.recordHeader = za;
  b.product = Ea;
  b.productList = Fa;
  b.products = Pa;
  b.location = S;
  b.locationHeader = Ua;
  b.sustainability = e;
  b.sustainabilityHeader = h;
  b.missionStatement = Ha;
  b.missionStatementHeader = Ka;
  b.fundingStatement = pb;
  b.fundingStatementHeader = jb;
  b.identifier = wa;
  b.id = ib;
  b.idHeader = ab;
  b.idType = Ya;
  b.idTypeHeader = Qa;
  b.relatedId = C;
  b.relatedIdHeader = K;
  b.relType = sa;
  b.relTypeHeader = ha;
  b.relatedIdList = A;
  b.relatedIds = V;
  b.basicMetadata = yb;
  b.basicMetadataHeader = Ma;
  b.creator = xb;
  b.creatorHeader = Cb;
  b.creatorList = fb;
  b.pubyear = Ja;
  b.pubyearHeader = ka;
  b.title = c;
  b.titleHeader = z;
  b.titleList = w;
  b.resourceId = G;
  b.resourceIdHeader = O;
  b.resourceType = R;
  b.resourceTypeHeader = M;
  b.resourceTypeGen = E;
  b.resourceTypeGenHeader = F;
  b.resourceTypeDescr = N;
  b.resourceTypeDescrHeader = J;
  b.resourceMDSource = L;
  b.resourceMDSourceHeader = T;
  b.institutionName = ta;
  b.institutionNameHeader = Da;
  b.institutionId = Oa;
  b.institutionType = fa;
  b.institutionTypeHeader = ua;
  b.institutionContact = B;
  b.institutionContactHeader = La;
  b.contactEmail = ub;
  b.contactEmailHeader = Ia;
  b.contactType = Eb;
  b.contactTypeHeader = Db;
  b.institutionPolicy = U;
  b.institutionPolicies = xa;
  b.institutionPoliciesHeader = ia;
  b.policy = ba;
  b.policyHeader = P;
  b.policyType = ea;
  b.policyTypeHeader = ja;
  b.applies = mb;
  b.appliesHeader = zb;
  b.superOrg = t;
  b.superOrgHeader = l;
  b.versioning = p;
  b.versioningHeader = n;
  b.format = eb;
  b.formatHeader = tb;
  b.formatList = bb;
  b.formatListHeader = sb;
  b.url = g;
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

  var b = a["Metajelo.CSS.Web.Util"],
      d = a["Concur.React.Props"],
      k = a["Data.Functor"],
      f = a["Metajelo.CSS.Common.Util"],
      n = function n(p) {
    return "metajelo_" + p;
  };

  a = function () {
    var p = k.map(k.functorArray)(n);
    return function (g) {
      return f.cList(p(g));
    };
  }();

  b.prependWebPfx = n;

  b.mjWebClass = function (p) {
    return d.className("metajelo_" + p);
  };

  b.cList = a;
})(PS);

(function (a) {
  a["Metajelo.CSS.Web.ClassProps"] = a["Metajelo.CSS.Web.ClassProps"] || {};
  var b = a["Metajelo.CSS.Web.ClassProps"],
      d = a["Metajelo.CSS.Common.ClassNames"],
      k = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      f = a["Metajelo.CSS.Web.Util"];
  a = f.mjWebClass(d.versioning);
  f.mjWebClass(d.url);
  var n = f.mjWebClass(d.title),
      p = f.mjWebClass(d.sustainability),
      g = f.mjWebClass(d.superOrg),
      q = f.mjWebClass(d.resourceTypeGen),
      w = f.mjWebClass(d.resourceTypeDescr),
      z = f.mjWebClass(d.resourceType),
      c = f.mjWebClass(d.resourceId),
      h = f.mjWebClass(d.relatedIdsHeader),
      e = f.mjWebClass(d.relatedIdList),
      l = f.mjWebClass(d.relatedId),
      t = f.mjWebClass(d.relType),
      u = f.mjWebClass(d.recordId),
      D = f.mjWebClass(d.record),
      H = f.mjWebClass(d.pubyear),
      I = f.mjWebClass(d.productsHeader),
      y = f.mjWebClass(d.productList),
      r = f.mjWebClass(k.productGroup),
      M = f.mjWebClass(k.productCitation),
      F = f.mjWebClass(d.product),
      E = f.mjWebClass(d.policyType),
      J = f.mjWebClass(d.policy),
      N = f.cList([d.url, d.missionStatement]),
      R = f.mjWebClass(d.institutionType),
      T = f.mjWebClass(d.institutionPolicy),
      L = f.mjWebClass(d.institutionPolicies),
      O = f.mjWebClass(d.institutionName),
      G = f.mjWebClass(d.institutionId),
      x = f.mjWebClass(d.institutionContact),
      V = f.mjWebClass(d.identifier),
      A = f.cList([d.url, k.idUrl]),
      K = f.mjWebClass(d.idType),
      C = f.cList([d.url, d.fundingStatement]),
      ha = f.mjWebClass(d.formatList),
      sa = f.mjWebClass(d.format),
      za = f.mjWebClass(k.errorDisplayBox),
      Ca = f.mjWebClass(k.errorDisplay),
      ma = f.mjWebClass(d.creatorList),
      v = f.mjWebClass(d.creator),
      Aa = f.mjWebClass(d.contactType),
      Q = f.mjWebClass(d.contactEmail);
  d = f.mjWebClass(d.basicMetadata);
  k = f.mjWebClass(k.appliesInfo);
  b.productGroup = r;
  b.productCitation = M;
  b.appliesInfo = k;
  b.idUrl = A;
  b.errorDisplayBox = za;
  b.errorDisplay = Ca;
  b.record = D;
  b.recordId = u;
  b.product = F;
  b.productList = y;
  b.productsHeader = I;
  b.sustainability = p;
  b.missionStatement = N;
  b.fundingStatement = C;
  b.identifier = V;
  b.idType = K;
  b.relatedId = l;
  b.relType = t;
  b.relatedIdList = e;
  b.relatedIdsHeader = h;
  b.basicMetadata = d;
  b.creator = v;
  b.creatorList = ma;
  b.pubyear = H;
  b.title = n;
  b.resourceId = c;
  b.resourceType = z;
  b.resourceTypeGen = q;
  b.resourceTypeDescr = w;
  b.institutionName = O;
  b.institutionId = G;
  b.institutionType = R;
  b.institutionContact = x;
  b.contactEmail = Q;
  b.contactType = Aa;
  b.institutionPolicy = T;
  b.institutionPolicies = L;
  b.policy = J;
  b.policyType = E;
  b.superOrg = g;
  b.versioning = a;
  b.format = sa;
  b.formatList = ha;
})(PS);

(function (a) {
  a["Metajelo.SchemaInfo"] = a["Metajelo.SchemaInfo"] || {};
  var b = a["Metajelo.SchemaInfo"],
      d = a["Foreign.Object"];
  a = d.fromHomogeneous()({
    identifierTypeSTyp: "The type of the RelatedIdentifier.",
    relationTypeSTyp: "Description of the relationship of the resource being registered (A) and the related resource (B).",
    resourceTypeSTyp: "The general type of a resource."
  });
  var k = d.fromHomogeneous()({
    recordTypeCTyp: "metadata about the publication and links to unlimited number of suppementary products"
  }),
      f = d.fromHomogeneous()({
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
  d = d.fromHomogeneous()({
    appliesToProductAttr: "appliesToProduct is true for policies that apply to this product. It may be absent, for example, if the creator of the record has pulled policies for an an institution from an external service (e.g. re3data), and has not explicitly annotated all the entries as applying to the product (or not)."
  });
  b.descrAttrMap = d;
  b.descrCTypMap = k;
  b.descrEleMap = f;
  b.descrSTypMap = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var b = a["Metajelo.Types"],
      d = a["Data.Bounded"],
      k = a["Data.Enum"],
      f = a["Data.Eq"],
      n = a["Data.Generic.Rep"],
      p = a["Data.Generic.Rep.Bounded"],
      g = a["Data.Generic.Rep.Enum"],
      q = a["Data.Generic.Rep.Eq"],
      w = a["Data.Generic.Rep.Ord"],
      z = a["Data.Generic.Rep.Show"],
      c = a["Data.Ord"],
      h = a["Data.Show"],
      e = a["Data.Symbol"],
      l = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      t = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      u = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      D = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      H = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      I = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      y = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      r = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }();

  a = function () {
    function Q(ka) {
      this.value0 = ka;
    }

    Q.create = function (ka) {
      return new Q(ka);
    };

    return Q;
  }();

  var M = function () {
    function Q(ka) {
      this.value0 = ka;
    }

    Q.create = function (ka) {
      return new Q(ka);
    };

    return Q;
  }(),
      F = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      E = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      J = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      N = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      R = new h.Show(function (Q) {
    if (Q instanceof F) return "commercial";
    if (Q instanceof E) return "non-profit";
    if (Q instanceof J) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 102, column 1 - line 105, column 37): " + [Q.constructor.name]);
  }),
      T = new h.Show(function (Q) {
    return "dataCustodian";
  }),
      L = new n.Generic(function (Q) {
    if (Q instanceof l) return new n.Inl(n.NoArguments.value);
    if (Q instanceof t) return new n.Inr(new n.Inl(n.NoArguments.value));
    if (Q instanceof u) return new n.Inr(new n.Inr(new n.Inl(n.NoArguments.value)));
    if (Q instanceof D) return new n.Inr(new n.Inr(new n.Inr(new n.Inl(n.NoArguments.value))));
    if (Q instanceof H) return new n.Inr(new n.Inr(new n.Inr(new n.Inr(new n.Inl(n.NoArguments.value)))));
    if (Q instanceof I) return new n.Inr(new n.Inr(new n.Inr(new n.Inr(new n.Inr(new n.Inl(n.NoArguments.value))))));
    if (Q instanceof y) return new n.Inr(new n.Inr(new n.Inr(new n.Inr(new n.Inr(new n.Inr(new n.Inl(n.NoArguments.value)))))));
    if (Q instanceof r) return new n.Inr(new n.Inr(new n.Inr(new n.Inr(new n.Inr(new n.Inr(new n.Inr(n.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [Q.constructor.name]);
  }, function (Q) {
    if (Q instanceof n.Inl) return l.value;
    if (Q instanceof n.Inr && Q.value0 instanceof n.Inl) return t.value;
    if (Q instanceof n.Inr && Q.value0 instanceof n.Inr && Q.value0.value0 instanceof n.Inl) return u.value;
    if (Q instanceof n.Inr && Q.value0 instanceof n.Inr && Q.value0.value0 instanceof n.Inr && Q.value0.value0.value0 instanceof n.Inl) return D.value;
    if (Q instanceof n.Inr && Q.value0 instanceof n.Inr && Q.value0.value0 instanceof n.Inr && Q.value0.value0.value0 instanceof n.Inr && Q.value0.value0.value0.value0 instanceof n.Inl) return H.value;
    if (Q instanceof n.Inr && Q.value0 instanceof n.Inr && Q.value0.value0 instanceof n.Inr && Q.value0.value0.value0 instanceof n.Inr && Q.value0.value0.value0.value0 instanceof n.Inr && Q.value0.value0.value0.value0.value0 instanceof n.Inl) return I.value;
    if (Q instanceof n.Inr && Q.value0 instanceof n.Inr && Q.value0.value0 instanceof n.Inr && Q.value0.value0.value0 instanceof n.Inr && Q.value0.value0.value0.value0 instanceof n.Inr && Q.value0.value0.value0.value0.value0 instanceof n.Inr && Q.value0.value0.value0.value0.value0.value0 instanceof n.Inl) return y.value;
    if (Q instanceof n.Inr && Q.value0 instanceof n.Inr && Q.value0.value0 instanceof n.Inr && Q.value0.value0.value0 instanceof n.Inr && Q.value0.value0.value0.value0 instanceof n.Inr && Q.value0.value0.value0.value0.value0 instanceof n.Inr && Q.value0.value0.value0.value0.value0.value0 instanceof n.Inr) return r.value;
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [Q.constructor.name]);
  });

  h = new h.Show(function (Q) {
    return Q instanceof r ? "Terms of Use" : z.genericShow(L)(z.genericShowSum(z.genericShowConstructor(z.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Access";
    })))(z.genericShowSum(z.genericShowConstructor(z.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Collection";
    })))(z.genericShowSum(z.genericShowConstructor(z.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Data";
    })))(z.genericShowSum(z.genericShowConstructor(z.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Metadata";
    })))(z.genericShowSum(z.genericShowConstructor(z.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Preservation";
    })))(z.genericShowSum(z.genericShowConstructor(z.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Submission";
    })))(z.genericShowSum(z.genericShowConstructor(z.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Quality";
    })))(z.genericShowConstructor(z.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(Q);
  });
  var O = new n.Generic(function (Q) {
    if (Q instanceof F) return new n.Inl(n.NoArguments.value);
    if (Q instanceof E) return new n.Inr(new n.Inl(n.NoArguments.value));
    if (Q instanceof J) return new n.Inr(new n.Inr(n.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [Q.constructor.name]);
  }, function (Q) {
    if (Q instanceof n.Inl) return F.value;
    if (Q instanceof n.Inr && Q.value0 instanceof n.Inl) return E.value;
    if (Q instanceof n.Inr && Q.value0 instanceof n.Inr) return J.value;
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [Q.constructor.name]);
  }),
      G = new n.Generic(function (Q) {
    return n.NoArguments.value;
  }, function (Q) {
    return N.value;
  }),
      x = new f.Eq(q.genericEq(L)(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqConstructor(q.genericEqNoArguments)))))))))),
      V = new c.Ord(function () {
    return x;
  }, function (Q) {
    return function (ka) {
      return w.genericCompare(L)(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdConstructor(w.genericOrdNoArguments)))))))))(Q)(ka);
    };
  }),
      A = new f.Eq(q.genericEq(O)(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqConstructor(q.genericEqNoArguments))))),
      K = new c.Ord(function () {
    return A;
  }, function (Q) {
    return function (ka) {
      return w.genericCompare(O)(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdConstructor(w.genericOrdNoArguments))))(Q)(ka);
    };
  }),
      C = new f.Eq(q.genericEq(G)(q.genericEqConstructor(q.genericEqNoArguments))),
      ha = new c.Ord(function () {
    return C;
  }, function (Q) {
    return function (ka) {
      return w.genericCompare(G)(w.genericOrdConstructor(w.genericOrdNoArguments))(Q)(ka);
    };
  }),
      sa = new k.Enum(function () {
    return V;
  }, g.genericPred(L)(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments)))), g.genericSucc(L)(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))),
      za = new k.Enum(function () {
    return K;
  }, g.genericPred(O)(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments)))), g.genericSucc(O)(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumSum(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(g.genericEnumConstructor(g.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))),
      Ca = new k.Enum(function () {
    return ha;
  }, g.genericPred(G)(g.genericEnumConstructor(g.genericEnumNoArguments)), g.genericSucc(G)(g.genericEnumConstructor(g.genericEnumNoArguments))),
      ma = new d.Bounded(function () {
    return V;
  }, p.genericBottom(L)(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))), p.genericTop(L)(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopConstructor(p.genericTopNoArguments))))))))));
  f = new k.SmallBounded(function () {
    return ma;
  });
  var v = new d.Bounded(function () {
    return K;
  }, p.genericBottom(O)(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))), p.genericTop(O)(p.genericTopSum(p.genericTopSum(p.genericTopConstructor(p.genericTopNoArguments))))),
      Aa = new d.Bounded(function () {
    return ha;
  }, p.genericBottom(G)(p.genericBottomConstructor(p.genericBottomNoArguments)), p.genericTop(G)(p.genericTopConstructor(p.genericTopNoArguments)));
  d = new k.SmallBounded(function () {
    return Aa;
  });
  p = new k.BoundedEnum(function () {
    return ma;
  }, function () {
    return sa;
  }, g.genericCardinality(L)(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))))))))), g.genericFromEnum(L)(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))))))))), g.genericToEnum(L)(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))))))))));
  q = new k.BoundedEnum(function () {
    return v;
  }, function () {
    return za;
  }, g.genericCardinality(O)(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments)))), g.genericFromEnum(O)(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments)))), g.genericToEnum(O)(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumSum(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments))(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments)))));
  k = new k.BoundedEnum(function () {
    return Aa;
  }, function () {
    return Ca;
  }, g.genericCardinality(G)(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments)), g.genericFromEnum(G)(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments)), g.genericToEnum(G)(g.genericBoundedEnumConstructor(g.genericBoundedEnumNoArguments)));
  b.DataCustodian = N;
  b.Commercial = F;
  b.NonProfit = E;
  b.Governmental = J;
  b.FreeTextPolicy = a;
  b.RefPolicy = M;
  b.Access = l;
  b.Collection = t;
  b.Data = u;
  b.Metadata = D;
  b.Preservation = H;
  b.Submission = I;
  b.Quality = y;
  b.TermsOfUse = r;
  b.showInstitutionType = R;
  b.boundedEnumInstitutionType = q;
  b.showInstitutionContactType = T;
  b.boundedEnumInstitutionContactType = k;
  b.smallBoundedInstitutionContactType = d;
  b.showPolicyType = h;
  b.boundedEnumPolicyType = p;
  b.smallBoundedPolicyType = f;
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (b) {
    return function (d) {
      return function (k) {
        return function () {
          return k.parseFromString(d, b);
        };
      };
    };
  };
})(PS["Web.DOM.DOMParser"] = PS["Web.DOM.DOMParser"] || {});

(function (a) {
  a._documentElement = function (b) {
    return function (d) {
      return function () {
        return d[b];
      };
    };
  }("documentElement");

  a.getElementsByTagName = function (b) {
    return function (d) {
      return function () {
        return d.getElementsByTagName(b);
      };
    };
  };

  a._getElementsByTagNameNS = function (b) {
    return function (d) {
      return function (k) {
        return function () {
          return k.getElementsByTagNameNS(b, d);
        };
      };
    };
  };

  a.getElementsByClassName = function (b) {
    return function (d) {
      return function () {
        return d.getElementsByClassName(b);
      };
    };
  };

  a.createElement = function (b) {
    return function (d) {
      return function () {
        return d.createElement(b);
      };
    };
  };

  a._createElementNS = function (b) {
    return function (d) {
      return function (k) {
        return function () {
          return k.createElementNS(b, d);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (b, d, k, f) {
    if ("undefined" !== typeof window) return k = window[k], null != k && f instanceof k ? d(f) : b;

    for (var n = f; null != n;) {
      n = Object.getPrototypeOf(n);
      var p = n.constructor.name;
      if (p === k) return d(f);
      if ("Object" === p) break;
    }

    return b;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var b = a["Web.Internal.FFI"],
      d = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (k) {
    return function (f) {
      return b._unsafeReadProtoTagged(d.Nothing.value, d.Just.create, k, f);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var b = a["Web.DOM.Document"],
      d = a["Web.DOM.Document"],
      k = a["Data.Functor"],
      f = a["Data.Nullable"],
      n = a.Effect,
      p = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var g = function () {
    var q = k.map(n.functorEffect)(f.toMaybe);
    return function (w) {
      return q(d._documentElement(w));
    };
  }();

  b.fromNode = a;
  b.toNonElementParentNode = p;
  b.documentElement = g;

  b.getElementsByTagNameNS = function (q) {
    return d._getElementsByTagNameNS(f.toNullable(q));
  };

  b.createElementNS = function (q) {
    return d._createElementNS(f.toNullable(q));
  };

  b.getElementsByTagName = d.getElementsByTagName;
  b.getElementsByClassName = d.getElementsByClassName;
  b.createElement = d.createElement;
})(PS);

(function (a) {
  var b = function b(d) {
    return function (k) {
      return k[d];
    };
  };

  a._prefix = b("prefix");
  a.localName = b("localName");
  a.tagName = b("tagName");

  a.setAttribute = function (d) {
    return function (k) {
      return function (f) {
        return function () {
          f.setAttribute(d, k);
          return {};
        };
      };
    };
  };

  a._getAttribute = function (d) {
    return function (k) {
      return function () {
        return k.getAttribute(d);
      };
    };
  };
})(PS["Web.DOM.Element"] = PS["Web.DOM.Element"] || {});

(function (a) {
  a["Web.DOM.Element"] = a["Web.DOM.Element"] || {};
  var b = a["Web.DOM.Element"],
      d = a["Web.DOM.Element"],
      k = a["Data.Functor"],
      f = a["Data.Nullable"],
      n = a.Effect,
      p = a["Unsafe.Coerce"],
      g = p.unsafeCoerce;
  p = p.unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  b.fromNode = a;
  b.toNode = p;
  b.toParentNode = g;

  b.prefix = function (q) {
    return f.toMaybe(d._prefix(q));
  };

  b.getAttribute = function (q) {
    var w = k.map(n.functorEffect)(f.toMaybe),
        z = d._getAttribute(q);

    return function (c) {
      return w(z(c));
    };
  };

  b.localName = d.localName;
  b.tagName = d.tagName;
  b.setAttribute = d.setAttribute;
})(PS);

(function (a) {
  a.toArray = function (b) {
    return function () {
      return [].slice.call(b);
    };
  };

  a._item = function (b) {
    return function (d) {
      return function () {
        return d.item(b);
      };
    };
  };
})(PS["Web.DOM.HTMLCollection"] = PS["Web.DOM.HTMLCollection"] || {});

(function (a) {
  a["Web.DOM.HTMLCollection"] = a["Web.DOM.HTMLCollection"] || {};
  var b = a["Web.DOM.HTMLCollection"],
      d = a["Web.DOM.HTMLCollection"],
      k = a["Data.Functor"],
      f = a["Data.Nullable"],
      n = a.Effect;

  b.item = function (p) {
    var g = k.map(n.functorEffect)(f.toMaybe),
        q = d._item(p);

    return function (w) {
      return g(q(w));
    };
  };

  b.toArray = d.toArray;
})(PS);

(function (a) {
  var b = function b(d) {
    return function (k) {
      return function () {
        return k[d];
      };
    };
  };

  a.nodeName = function (d) {
    return d.nodeName;
  };

  a._ownerDocument = b("ownerDocument");
  a.childNodes = b("childNodes");
  a.textContent = b("textContent");

  a.setTextContent = function (d) {
    return function (k) {
      return function () {
        k.textContent = d;
        return {};
      };
    };
  };

  a.appendChild = function (d) {
    return function (k) {
      return function () {
        return k.appendChild(d);
      };
    };
  };
})(PS["Web.DOM.Node"] = PS["Web.DOM.Node"] || {});

(function (a) {
  a["Web.DOM.Node"] = a["Web.DOM.Node"] || {};
  var b = a["Web.DOM.Node"],
      d = a["Web.DOM.Node"],
      k = a["Data.Functor"],
      f = a["Data.Nullable"],
      n = a.Effect;

  a = function () {
    var p = k.map(n.functorEffect)(f.toMaybe);
    return function (g) {
      return p(d._ownerDocument(g));
    };
  }();

  b.ownerDocument = a;
  b.nodeName = d.nodeName;
  b.childNodes = d.childNodes;
  b.textContent = d.textContent;
  b.setTextContent = d.setTextContent;
  b.appendChild = d.appendChild;
})(PS);

(function (a) {
  a["Web.DOM.DOMParser"] = a["Web.DOM.DOMParser"] || {};

  var b = a["Web.DOM.DOMParser"],
      d = a["Web.DOM.DOMParser"],
      k = a["Control.Applicative"],
      f = a["Control.Bind"],
      n = a["Data.Array"],
      p = a["Data.Either"],
      g = a["Data.Functor"],
      q = a["Data.Maybe"],
      w = a.Effect,
      z = a["Web.DOM.Document"],
      c = a["Web.DOM.Element"],
      h = a["Web.DOM.HTMLCollection"],
      e = a["Web.DOM.Node"],
      l = function l(u) {
    return function (D) {
      if (u instanceof q.Nothing) return new p.Right(D);
      if (u instanceof q.Just) return new p.Left(u.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [u.constructor.name]);
    };
  },
      t = function t(u) {
    return function () {
      var D = f.join(w.bindEffect)(g.map(w.functorEffect)(h.toArray)(z.getElementsByTagName("parsererror")(u)))();
      D = n.head(D);
      D = g.map(q.functorMaybe)(c.toNode)(D);
      if (D instanceof q.Nothing) D = k.pure(w.applicativeEffect)(q.Nothing.value);else if (D instanceof q.Just) D = g.map(w.functorEffect)(q.Just.create)(e.textContent(D.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [D.constructor.name]);
      return D();
    };
  };

  b.parseXMLFromString = function (u) {
    return function (D) {
      return function () {
        var H = d.parseFromString("application/xml")(u)(D)(),
            I = t(H)();
        return l(I)(H);
      };
    };
  };

  b.makeDOMParser = d.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (b) {
    return function (d) {
      return function (k) {
        return function (f) {
          return function (n) {
            return function (p) {
              return function () {
                return p.evaluate(b, d, k, f, n);
              };
            };
          };
        };
      };
    };
  };

  a.resultType = function (b) {
    return b.resultType;
  };

  a.numberValue = function (b) {
    return function () {
      return b.numberValue;
    };
  };

  a.stringValue = function (b) {
    return function () {
      return b.stringValue;
    };
  };

  a.booleanValue = function (b) {
    return function () {
      return b.booleanValue;
    };
  };

  a.singleNodeValueInternal = function (b) {
    return function () {
      return b.singleNodeValue;
    };
  };

  a.snapshotLengthInternal = function (b) {
    return function () {
      return b.snapshotLength;
    };
  };

  a.snapshotItemInternal = function (b) {
    return function (d) {
      return function () {
        return b.snapshotItem(d);
      };
    };
  };

  a.customNSResolver = function (b) {
    return {
      lookupNamespaceURI: b
    };
  };

  a.createNSResolver = function (b) {
    return function (d) {
      return d.createNSResolver(b);
    };
  };

  a.lookupNamespaceURIInternal = function (b) {
    return function (d) {
      return b.lookupNamespaceURI(d);
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

  var b = a["Web.DOM.Document.XPath.ResultType"],
      d = a["Web.DOM.Document.XPath.ResultType"],
      k = a["Data.Eq"],
      f = a["Data.Maybe"],
      n = function () {
    function q() {}

    q.value = new q();
    return q;
  }(),
      p = function () {
    function q() {}

    q.value = new q();
    return q;
  }(),
      g = new k.Eq(function (q) {
    return function (w) {
      return q === w;
    };
  });

  b.res2SnapType = function (q) {
    return k.eq(g)(q)(d.unordered_node_snapshot_type) ? new f.Just(n.value) : k.eq(g)(q)(d.ordered_node_snapshot_type) ? new f.Just(p.value) : f.Nothing.value;
  };

  b.number_type = d.number_type;
  b.string_type = d.string_type;
  b.boolean_type = d.boolean_type;
  b.ordered_node_snapshot_type = d.ordered_node_snapshot_type;
  b.any_unordered_node_type = d.any_unordered_node_type;
})(PS);

(function (a) {
  a["Web.DOM.Document.XPath"] = a["Web.DOM.Document.XPath"] || {};

  var b = a["Web.DOM.Document.XPath"],
      d = a["Web.DOM.Document.XPath"],
      k = a["Control.Applicative"],
      f = a["Data.Array"],
      n = a["Data.Functor"],
      p = a["Data.Int"],
      g = a["Data.Maybe"],
      q = a["Data.Monoid"],
      w = a["Data.Natural"],
      z = a["Data.Nullable"],
      c = a["Data.Traversable"],
      h = a.Effect,
      e = a["Web.DOM.Document"],
      l = a["Web.DOM.Document.XPath.ResultType"],
      t = a["Web.DOM.Element"],
      u = a["Web.DOM.Node"],
      D = function () {
    var I = n.map(h.functorEffect)(function (y) {
      return w.intToNat(p.round(y));
    });
    return function (y) {
      return I(d.snapshotLengthInternal(y));
    };
  }(),
      H = function H(I) {
    return function (y) {
      return n.map(h.functorEffect)(z.toMaybe)(d.snapshotItemInternal(I)(p.toNumber(w.natToInt(y))));
    };
  };

  a = function () {
    var I = n.map(h.functorEffect)(z.toMaybe);
    return function (y) {
      return I(d.singleNodeValueInternal(y));
    };
  }();

  b.evaluate = function (I) {
    return function (y) {
      return function (r) {
        return function (M) {
          return function (F) {
            return function (E) {
              return d.evaluateInternal(I)(y)(z.toNullable(r))(M)(z.toNullable(F))(E);
            };
          };
        };
      };
    };
  };

  b.evaluateNumber = function (I) {
    return function (y) {
      return function (r) {
        return function (M) {
          return function (F) {
            return function () {
              var E = d.evaluateInternal(I)(y)(z.toNullable(r))(l.number_type)(z.toNullable(M))(F)();
              return d.numberValue(E)();
            };
          };
        };
      };
    };
  };

  b.evaluateString = function (I) {
    return function (y) {
      return function (r) {
        return function (M) {
          return function (F) {
            return function () {
              var E = d.evaluateInternal(I)(y)(z.toNullable(r))(l.string_type)(z.toNullable(M))(F)();
              return d.stringValue(E)();
            };
          };
        };
      };
    };
  };

  b.evaluateBoolean = function (I) {
    return function (y) {
      return function (r) {
        return function (M) {
          return function (F) {
            return function () {
              var E = d.evaluateInternal(I)(y)(z.toNullable(r))(l.boolean_type)(z.toNullable(M))(F)();
              return d.booleanValue(E)();
            };
          };
        };
      };
    };
  };

  b.singleNodeValue = a;

  b.snapshot = function (I) {
    var y = l.res2SnapType(d.resultType(I)),
        r = H(I);
    y = n.map(g.functorMaybe)(function (M) {
      return function () {
        var F = D(I)();
        F = w.natToInt(F);
        F = n.map(n.functorArray)(w.intToNat)(f.range(0)(F - 1 | 0));
        F = c.sequence(c.traversableArray)(h.applicativeEffect)(n.map(n.functorArray)(r)(F))();
        return f.catMaybes(F);
      };
    })(y);
    if (y instanceof g.Nothing) return k.pure(h.applicativeEffect)(q.mempty(q.monoidArray));
    if (y instanceof g.Just) return y.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [y.constructor.name]);
  };

  b.lookupNamespaceURI = function (I) {
    return function (y) {
      return z.toMaybe(d.lookupNamespaceURIInternal(I)(y));
    };
  };

  b.defaultNSResolver = function (I) {
    return function (y) {
      var r = function r(M) {
        return function () {
          var F = e.documentElement(M)();
          if (F instanceof g.Nothing) return I;
          if (F instanceof g.Just) return t.toNode(F.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [F.constructor.name]);
        };
      };

      return function () {
        var M = u.ownerDocument(I)(),
            F = function () {
          if (M instanceof g.Nothing) {
            var E = e.fromNode(I);
            if (E instanceof g.Nothing) return I;
            if (E instanceof g.Just) return r(E.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [E.constructor.name]);
          }

          if (M instanceof g.Just) return r(M.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [M.constructor.name]);
        }();

        return d.createNSResolver(F)(y);
      };
    };
  };

  b.customNSResolver = d.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var b = a["Metajelo.XPaths"],
      d = a["Control.Applicative"],
      k = a["Control.Bind"],
      f = a["Data.Array.NonEmpty"],
      n = a["Data.Array.NonEmpty.Internal"],
      p = a["Data.Either"],
      g = a["Data.Foldable"],
      q = a["Data.Functor"],
      w = a["Data.Maybe"],
      z = a["Data.String.Common"],
      c = a["Data.String.NonEmpty.Internal"],
      h = a["Data.Traversable"],
      e = a["Data.XPath"],
      l = a.Effect,
      t = a["Effect.Exception"],
      u = a["Web.DOM.DOMParser"],
      D = a["Web.DOM.Document"],
      H = a["Web.DOM.Document.XPath"],
      I = a["Web.DOM.Document.XPath.ResultType"],
      y = a["Web.DOM.Element"],
      r = a["Web.DOM.HTMLCollection"],
      M = e.pathAppendNSx(e.stringXPath)(e.root(e.stringXPath))("record");
  a = e.pathAppendNSx(e.stringXPath)(M)("relatedIdentifier");
  var F = e.pathAppendNSx(e.stringXPath)(M)("supplementaryProducts");
  F = e.pathAppendNSx(e.stringXPath)(F)("supplementaryProduct");

  var E = function E(x) {
    return function (V) {
      return {
        any: function any(A) {
          return function (K) {
            return function (C) {
              return H.evaluate(K)(A)(V)(C)(w.Nothing.value)(x);
            };
          };
        },
        num: function num(A) {
          return function (K) {
            return H.evaluateNumber(K)(A)(V)(w.Nothing.value)(x);
          };
        },
        str: function str(A) {
          return function (K) {
            return H.evaluateString(K)(A)(V)(w.Nothing.value)(x);
          };
        },
        bool: function bool(A) {
          return function (K) {
            return H.evaluateBoolean(K)(A)(V)(w.Nothing.value)(x);
          };
        },
        nodeMay: function nodeMay(A) {
          return function (K) {
            return k.bind(l.bindEffect)(H.evaluate(K)(A)(V)(I.any_unordered_node_type)(w.Nothing.value)(x))(H.singleNodeValue);
          };
        }
      };
    };
  },
      J = f["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      N = function N(x) {
    var V = function V(A) {
      return function () {
        var K = D.getElementsByTagNameNS(new w.Just(A))("record")(x)();
        return r.item(0)(K)();
      };
    };

    return function () {
      var A = D.getElementsByTagName("record")(x)();
      A = r.item(0)(A)();
      if (A instanceof w.Nothing) A = h.sequence(n.traversableNonEmptyArray)(l.applicativeEffect)(q.map(n.functorNonEmptyArray)(V)(J))(), A = k.join(w.bindMaybe)(g.find(n.foldableNonEmptyArray)(w.isJust)(A));else if (A instanceof w.Just) A = new w.Just(A.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 277, column 16 - line 281, column 38): " + [A.constructor.name]);
      return q.map(w.functorMaybe)(y.toNode)(A);
    };
  },
      R = e.pathAppendNSx(e.stringXPath)(M)("lastModified"),
      T = e.pathAppendNSx(e.stringXPath)(M)("identifier"),
      L = e.pathAppend(e.stringXPath)(T)(e.at(e.stringXPath)("identifierType")),
      O = function O(x) {
    var V = function V(A) {
      return w.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(A);
    };

    if (x instanceof w.Nothing) return d.pure(l.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (x instanceof w.Just) return q.map(l.functorEffect)(V)(y.getAttribute("xmlns")(x.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 185, column 3 - line 187, column 59): " + [x.constructor.name]);
  },
      G = function G(x) {
    return function (V) {
      var A = function A(K) {
        return function (C) {
          return function (ha) {
            ha = H.lookupNamespaceURI(K)(ha);
            if (ha instanceof w.Nothing) return C;
            if (ha instanceof w.Just) return ha.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 202, column 39 - line 204, column 20): " + [ha.constructor.name]);
          };
        };
      };

      return function () {
        var K = H.defaultNSResolver(x)(V)(),
            C = y.fromNode(x);
        C = O(C)();
        return H.customNSResolver(A(K)(C));
      };
    };
  };

  e = e.pathAppendNSx(e.stringXPath)(M)("date");
  b.idP = "identifier";
  b.relIdP = "relatedIdentifier";
  b.sProdCP = "supplementaryProducts";
  b.sProdP = "supplementaryProduct";
  b.instIdP = "institutionID";
  b.instNameP = "institutionName";
  b.instTypeP = "institutionType";
  b.instContactP = "institutionContact";
  b.instSustainP = "institutionSustainability";
  b.instPolicyCP = "institutionPolicies";
  b.instPolicyP = "institutionPolicy";
  b.versioningP = "versioning";
  b.locP = "location";
  b.superOrgNameP = "superOrganizationName";
  b.missionUrlP = "missionStatementURL";
  b.fundingUrlP = "fundingStatementURL";
  b.basicMetaP = "basicMetadata";
  b.titleP = "Title";
  b.creatorP = "Creator";
  b.pubYearP = "PublicationYear";
  b.resIdP = "resourceID";
  b.resTypeP = "resourceType";
  b.formatCP = "Format";
  b.formatP = "format";
  b.freeTextPolicyP = "freeTextPolicy";
  b.refPolicyP = "refPolicy";
  b.resMetaSourceP = "resourceMetadataSource";
  b.idTypeAT = "identifierType";
  b.resIdTypeAT = "relatedIdentifierType";
  b.relIdTypeAT = "relatedIdentifierType";
  b.relTypeAT = "relationType";
  b.resTypeGenAT = "resourceTypeGeneral";
  b.instContactTypeAT = "institutionContactType";
  b.polTypeAT = "policyType";
  b.appliesToProdAT = "appliesToProduct";
  b.idTypeRootAP = L;
  b.idRootP = T;
  b.dateRootP = e;
  b.lastModRootP = R;
  b.relIdRootP = a;
  b.sProdRootP = F;

  b.getDefaultParseEnv = function (x) {
    return function () {
      var V = u.makeDOMParser();
      V = u.parseXMLFromString(x)(V)();
      if (V instanceof p.Left) V = t["throw"]("XML parsing error: " + V.value0)();else if (V instanceof p.Right) V = V.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 245, column 13 - line 247, column 26): " + [V.constructor.name]);
      var A = N(V)();
      if (A instanceof w.Nothing) A = t["throw"]("Could not find <record> node!")();else if (A instanceof w.Just) A = A.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 249, column 14 - line 251, column 23): " + [A.constructor.name]);
      var K = y.fromNode(A);
      if (K instanceof w.Nothing) K = t["throw"]("<record> node could not be cast to an element!")();else if (K instanceof w.Just) K = K.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 252, column 14 - line 254, column 23): " + [K.constructor.name]);
      var C = O(new w.Just(K))(),
          ha = G(A)(V)();
      ha = E(V)(new w.Just(ha));
      return {
        doc: V,
        ns: C,
        recNode: A,
        recElem: K,
        xeval: ha,
        xevalRoot: {
          any: ha.any(A),
          num: ha.num(A),
          str: ha.str(A),
          bool: ha.bool(A),
          nodeMay: ha.nodeMay(A)
        }
      };
    };
  };

  b.unsafeSingleNodeValue = function (x) {
    return function (V) {
      return function (A) {
        return function () {
          var K = x.xeval.nodeMay(V)(A)();
          if (K instanceof w.Just) return K.value0;
          if (K instanceof w.Nothing) return t["throw"]("Couldn't find required node at: " + A)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 294, column 3 - line 296, column 40): " + [K.constructor.name]);
        };
      };
    };
  };

  b.readNonEmptyString = function (x) {
    return function (V) {
      V = c.fromString(z.trim(V));
      if (V instanceof w.Nothing) return p.Left.create("Empty string found for " + x);
      if (V instanceof w.Just) return new p.Right(V.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 303, column 3 - line 305, column 26): " + [V.constructor.name]);
    };
  };

  b.readNonEmptyArray = function (x) {
    return function (V) {
      V = f.fromArray(V);
      if (V instanceof w.Nothing) return p.Left.create("Empty array found for " + x);
      if (V instanceof w.Just) return new p.Right(V.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 310, column 3 - line 312, column 26): " + [V.constructor.name]);
    };
  };

  b.rightOrThrow = function (x) {
    if (x instanceof p.Right) return d.pure(l.applicativeEffect)(x.value0);
    if (x instanceof p.Left) return t["throw"](x.value0);
    throw Error("Failed pattern match at Metajelo.XPaths (line 315, column 19 - line 317, column 24): " + [x.constructor.name]);
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var b = a["Text.Parsing.StringParser"],
      d = a["Control.Alt"],
      k = a["Control.Alternative"],
      f = a["Control.Applicative"],
      n = a["Control.Apply"],
      p = a["Control.Bind"],
      g = a["Control.Monad"],
      q = a["Control.Monad.Rec.Class"],
      w = a["Control.Plus"],
      z = a["Data.Bifunctor"],
      c = a["Data.Boolean"],
      h = a["Data.Either"],
      e = a["Data.Functor"];
  a = a["Data.Show"];

  var l = function () {
    function F(E) {
      this.value0 = E;
    }

    F.create = function (E) {
      return new F(E);
    };

    return F;
  }();

  a = new a.Show(function (F) {
    return F.value0;
  });

  var t = new e.Functor(function (F) {
    return function (E) {
      var J = e.map(h.functorEither)(function (N) {
        return {
          result: F(N.result),
          suffix: N.suffix
        };
      });
      return function (N) {
        return J(E(N));
      };
    };
  }),
      u = function u(F) {
    return function (E) {
      return new h.Left({
        pos: E.pos,
        error: new l(F)
      });
    };
  },
      D = new n.Apply(function () {
    return t;
  }, function (F) {
    return function (E) {
      return function (J) {
        return p.bind(h.bindEither)(F(J))(function (N) {
          return p.bind(h.bindEither)(E(N.suffix))(function (R) {
            return f.pure(h.applicativeEither)({
              result: N.result(R.result),
              suffix: R.suffix
            });
          });
        });
      };
    };
  }),
      H = new p.Bind(function () {
    return D;
  }, function (F) {
    return function (E) {
      return function (J) {
        return p.bind(h.bindEither)(F(J))(function (N) {
          return E(N.result)(N.suffix);
        });
      };
    };
  }),
      I = new f.Applicative(function () {
    return D;
  }, function (F) {
    return function (E) {
      return new h.Right({
        result: F,
        suffix: E
      });
    };
  }),
      y = new g.Monad(function () {
    return I;
  }, function () {
    return H;
  });

  n = new q.MonadRec(function () {
    return y;
  }, function (F) {
    return function (E) {
      var J = function J(N) {
        if (N.result instanceof q.Loop) return new q.Loop({
          state: N.result.value0,
          str: N.suffix
        });
        if (N.result instanceof q.Done) return new q.Done({
          result: N.result.value0,
          suffix: N.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [N.constructor.name]);
      };

      return function (N) {
        return q.tailRecM(q.monadRecEither)(function (R) {
          return e.map(h.functorEither)(J)(F(R.state)(R.str));
        })({
          state: E,
          str: N
        });
      };
    };
  });
  var r = new d.Alt(function () {
    return t;
  }, function (F) {
    return function (E) {
      return function (J) {
        var N = F(J);

        if (N instanceof h.Left) {
          if (J.pos === N.value0.pos) return E(J);
          if (c.otherwise) return new h.Left({
            error: N.value0.error,
            pos: N.value0.pos
          });
        }

        return N;
      };
    };
  }),
      M = new w.Plus(function () {
    return r;
  }, u("No alternative"));
  d = new k.Alternative(function () {
    return I;
  }, function () {
    return M;
  });
  b.ParseError = l;

  b.runParser = function (F) {
    return function (E) {
      return z.bimap(h.bifunctorEither)(function (J) {
        return J.error;
      })(function (J) {
        return J.result;
      })(F({
        str: E,
        pos: 0
      }));
    };
  };

  b.fail = u;

  b["try"] = function (F) {
    return function (E) {
      return z.lmap(h.bifunctorEither)(function (J) {
        return {
          pos: E.pos,
          error: J.error
        };
      })(F(E));
    };
  };

  b.showParseError = a;
  b.functorParser = t;
  b.applyParser = D;
  b.applicativeParser = I;
  b.altParser = r;
  b.alternativeParser = d;
  b.bindParser = H;
  b.monadRecParser = n;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var b = a["Text.Parsing.StringParser.Combinators"],
      d = a["Control.Alt"],
      k = a["Control.Applicative"],
      f = a["Control.Apply"],
      n = a["Control.Bind"],
      p = a["Data.Functor"],
      g = a["Data.NonEmpty"],
      q = a["Data.Unit"],
      w = a["Text.Parsing.StringParser"],
      z = a["Data.List"].manyRec(w.monadRecParser)(w.alternativeParser),
      c = function c(h) {
    return function (e) {
      return new g.NonEmpty(h, e);
    };
  };

  b.many = z;

  b.many1 = function (h) {
    return f.apply(w.applyParser)(p.map(w.functorParser)(c)(h))(z(h));
  };

  b.withError = function (h) {
    return function (e) {
      return d.alt(w.altParser)(h)(w.fail(e));
    };
  };

  b.optional = function (h) {
    return d.alt(w.altParser)(n.bind(w.bindParser)(h)(function (e) {
      return k.pure(w.applicativeParser)(q.unit);
    }))(k.pure(w.applicativeParser)(q.unit));
  };

  b.sepBy1 = function (h) {
    return function (e) {
      return n.bind(w.bindParser)(h)(function (l) {
        return n.bind(w.bindParser)(z(f.applySecond(w.applyParser)(e)(h)))(function (t) {
          return k.pure(w.applicativeParser)(c(l)(t));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var b = a["Text.Parsing.StringParser.CodePoints"],
      d = a["Control.Applicative"],
      k = a["Control.Bind"],
      f = a["Data.Char"],
      n = a["Data.Either"],
      p = a["Data.Enum"],
      g = a["Data.Maybe"],
      q = a["Data.Show"],
      w = a["Data.String.CodePoints"],
      z = a["Data.Unit"],
      c = a["Text.Parsing.StringParser"],
      h = a["Text.Parsing.StringParser.Combinators"],
      e = function () {
    var t = function () {
      var u = p.fromEnum(w.boundedEnumCodePoint);
      return function (D) {
        return f.fromCharCode(u(D));
      };
    }();

    return function (u) {
      var D = w.codePointAt(u.pos)(u.str);

      if (D instanceof g.Just) {
        var H = t(D.value0);
        if (H instanceof g.Just) return new n.Right({
          result: H.value0,
          suffix: {
            str: u.str,
            pos: u.pos + 1 | 0
          }
        });
        if (H instanceof g.Nothing) return new n.Left({
          pos: u.pos,
          error: c.ParseError.create("CodePoint " + (q.show(w.showCodePoint)(D.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [H.constructor.name]);
      }

      if (D instanceof g.Nothing) return new n.Left({
        pos: u.pos,
        error: new c.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [D.constructor.name]);
    };
  }(),
      l = function l(t) {
    return c["try"](k.bind(c.bindParser)(e)(function (u) {
      return t(u) ? d.pure(c.applicativeParser)(u) : c.fail("Character " + (q.show(q.showChar)(u) + " did not satisfy predicate"));
    }));
  };

  b.eof = function (t) {
    return t.pos < w.length(t.str) ? new n.Left({
      pos: t.pos,
      error: new c.ParseError("Expected EOF")
    }) : new n.Right({
      result: z.unit,
      suffix: t
    });
  };

  b.satisfy = l;

  b["char"] = function (t) {
    return h.withError(l(function (u) {
      return u === t;
    }))("Could not match character " + q.show(q.showChar)(t));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var b = a["Text.Email.Parser"],
      d = a["Control.Alt"],
      k = a["Control.Applicative"],
      f = a["Control.Apply"],
      n = a["Control.Bind"],
      p = a["Data.Char"],
      g = a["Data.Foldable"],
      q = a["Data.Functor"],
      w = a["Data.List.Types"],
      z = a["Data.Maybe"],
      c = a["Data.Monoid"],
      h = a["Data.String.CodeUnits"],
      e = a["Data.String.Pattern"],
      l = a["Data.Unit"],
      t = a["Text.Parsing.StringParser"],
      u = a["Text.Parsing.StringParser.CodePoints"],
      D = a["Text.Parsing.StringParser.Combinators"],
      H = function (ka) {
    var Ja = z.fromJust();
    return function (Pa) {
      return Ja(p.fromCharCode(Pa));
    };
  }(),
      I = function I(ka) {
    return q.map(t.functorParser)(function () {
      var Ja = g.fold(w.foldableNonEmptyList)(c.monoidString),
          Pa = q.map(w.functorNonEmptyList)(h.singleton);
      return function (Fa) {
        return Ja(Pa(Fa));
      };
    }())(D.many1(u.satisfy(ka)));
  },
      y = function y(ka) {
    return n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(ka))(function () {
      return n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(r(ka)))(function () {
        return k.pure(t.applicativeParser)(l.unit);
      });
    });
  },
      r = function r(ka) {
    return d.alt(t.altParser)(y(ka))(k.pure(t.applicativeParser)(l.unit));
  },
      M = function M(ka) {
    return n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(u.satisfy(ka)))(function () {
      return n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(r(u.satisfy(ka))))(function () {
        return k.pure(t.applicativeParser)(l.unit);
      });
    });
  },
      F = u["char"](H(0)),
      E = u["char"]("\n");

  a = function a(ka) {
    return " " === ka || "\t" === ka;
  };

  var J = u.satisfy(a),
      N = M(a),
      R = function R(ka) {
    return function (Ja) {
      return function (Pa) {
        return Pa >= ka && Pa <= Ja;
      };
    };
  };

  a = R(H(33))(H(126));

  var T = u.satisfy(a),
      L = function L(ka) {
    return function (Ja) {
      return h.contains(e.Pattern(h.singleton(Ja)))(ka);
    };
  },
      O = function O(ka) {
    return R(H(1))(H(8))(ka) || R(H(14))(H(31))(ka) || L("\x0B\f\x7F")(ka);
  },
      G = function G(ka) {
    return R(H(33))(H(39))(ka) || R(H(42))(H(91))(ka) || R(H(93))(H(126))(ka) || O(ka);
  },
      x = function x(ka) {
    return R(H(33))(H(90))(ka) || R(H(94))(H(126))(ka) || O(ka);
  },
      V = u.satisfy(O),
      A = u["char"]("\r"),
      K = q["void"](t.functorParser)(f.applySecond(t.applyParser)(A)(E)),
      C = function () {
    var ka = y(f.applySecond(t.applyParser)(K)(N)),
        Ja = f.applySecond(t.applyParser)(N)(D.optional(f.applySecond(t.applyParser)(K)(N)));
    return d.alt(t.altParser)(Ja)(ka);
  }(),
      ha = function () {
    var ka = n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(u["char"]("\\")))(function () {
      return d.alt(t.altParser)(d.alt(t.altParser)(d.alt(t.altParser)(d.alt(t.altParser)(d.alt(t.altParser)(T)(J))(E))(A))(V))(F);
    });
    return n.bind(t.bindParser)(ka)(function (Ja) {
      return k.pure(t.applicativeParser)("\\" + h.singleton(Ja));
    });
  }(),
      sa = d.alt(t.altParser)(I(function (ka) {
    return L(h.singleton(H(33)))(ka) || R(H(35))(H(91))(ka) || R(H(93))(H(126))(ka) || O(ka);
  }))(ha),
      za = function () {
    var ka = n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(u["char"]('"')))(function () {
      return n.bind(t.bindParser)(D.many(f.applySecond(t.applyParser)(D.optional(C))(sa)))(function (Ja) {
        return n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(D.optional(C)))(function () {
          return n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(u["char"]('"')))(function () {
            return k.pure(t.applicativeParser)(Ja);
          });
        });
      });
    });
    return q.map(t.functorParser)(function (Ja) {
      return '"' + (g.fold(w.foldableList)(c.monoidString)(Ja) + '"');
    })(ka);
  }(),
      Ca = n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(u["char"]("(")))(function () {
    return n.discard(n.discardUnit)(t.bindParser)(r(d.alt(t.altParser)(d.alt(t.altParser)(d.alt(t.altParser)(M(G))(q["void"](t.functorParser)(ha)))(Ca))(C)))(function () {
      return n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(u["char"](")")))(function () {
        return k.pure(t.applicativeParser)(l.unit);
      });
    });
  }),
      ma = r(d.alt(t.altParser)(Ca)(C));

  a = n.discard(n.discardUnit)(t.bindParser)(D.optional(ma))(function () {
    return n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(u["char"]("[")))(function () {
      return n.bind(t.bindParser)(D.many(f.applySecond(t.applyParser)(D.optional(C))(I(x))))(function (ka) {
        return n.discard(n.discardUnit)(t.bindParser)(D.optional(C))(function () {
          return n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(u["char"]("]")))(function () {
            return n.discard(n.discardUnit)(t.bindParser)(D.optional(ma))(function () {
              return k.pure(t.applicativeParser)("[" + (g.fold(w.foldableList)(c.monoidString)(ka) + "]"));
            });
          });
        });
      });
    });
  });

  var v = function () {
    return I(function (ka) {
      return "0" <= ka && "9" >= ka || "a" <= ka && "z" >= ka || "A" <= ka && "Z" >= ka || L("!#$%&'*+/=?^_`{|}~-")(ka);
    });
  }(),
      Aa = function () {
    var ka = n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(D.optional(ma)))(function () {
      return n.bind(t.bindParser)(d.alt(t.altParser)(v)(za))(function (Ja) {
        return n.discard(n.discardUnit)(t.bindParser)(q["void"](t.functorParser)(D.optional(ma)))(function () {
          return k.pure(t.applicativeParser)(Ja);
        });
      });
    });
    ka = D.sepBy1(ka)(u["char"]("."));
    return q.map(t.functorParser)(g.intercalate(w.foldableNonEmptyList)(c.monoidString)("."))(ka);
  }(),
      Q = d.alt(t.altParser)(Aa)(a);

  a = n.bind(t.bindParser)(Aa)(function (ka) {
    return n.bind(t.bindParser)(u["char"]("@"))(function () {
      return n.bind(t.bindParser)(Q)(function (Ja) {
        return n.bind(t.bindParser)(u.eof)(function () {
          return k.pure(t.applicativeParser)({
            localPart: ka,
            domainPart: Ja
          });
        });
      });
    });
  });
  b.addrSpec = a;

  b.toString = function (ka) {
    return ka.localPart + ("@" + ka.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var b = a["Text.Email.Validate"],
      d = a["Data.Bifunctor"],
      k = a["Data.Either"],
      f = a["Data.Show"],
      n = a["Text.Email.Parser"],
      p = a["Text.Parsing.StringParser"];

  a = function () {
    var g = d.lmap(k.bifunctorEither)(f.show(p.showParseError));
    return function (q) {
      q = p.runParser(n.addrSpec)(q);
      return g(q);
    };
  }();

  b.validate = a;
})(PS);

(function (a) {
  a._validateURL = function (b) {
    return function (d) {
      if (!d || !/^https?:\/\//.test(d)) return "Unknown or missing protocol format in url: " + d;
      var k = document.createElement("a");
      k.href = d;

      if (b) {
        if (k.username) return "URL " + d + " contains a username: " + k.username;
        if (k.password) return "URL " + d + " contains a password: " + k.password;
      }

      return /\.[^0-9.]/.test(k.hostname) ? /(\s|^\.|\.$)/.test(k.hostname) ? "Hostname '" + k.href + "' contains whitespace in " + d : k.href.toLowerCase().replace(/\/+$/g, "") !== d.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + d + " doesn't match parsed href " + k.href : "SUCCESS" : "Invalid hostname '" + k.href + "' in " + d;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};

  var b = a["Text.URL.Validate"],
      d = a["Text.URL.Validate"],
      k = a["Data.Either"],
      f = a["Data.Maybe"],
      n = a["Data.String.NonEmpty.Internal"],
      p = function p(g) {
    return function (q) {
      var w = "SUCCESS" === q ? !0 : !1;

      if (w) {
        q = n.fromString(g);
        if (q instanceof f.Just) return new k.Right(q.value0);
        if (q instanceof f.Nothing) return new k.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [q.constructor.name]);
      }

      if (!w) return new k.Left(q);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [w.constructor.name]);
    };
  };

  b.parsePublicURL = function (g) {
    var q = d._validateURL(!0)(g);

    return p(g)(q);
  };

  b.urlToNEString = function (g) {
    return g;
  };

  b.urlToString = function (g) {
    return n.toString(g);
  };
})(PS);

(function (a) {
  a.toArray = function (b) {
    return function () {
      return [].slice.call(b);
    };
  };
})(PS["Web.DOM.NodeList"] = PS["Web.DOM.NodeList"] || {});

(function (a) {
  a["Web.DOM.NodeList"] = a["Web.DOM.NodeList"] || {};
  a["Web.DOM.NodeList"].toArray = a["Web.DOM.NodeList"].toArray;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Read"] = a["Metajelo.XPaths.Read"] || {};

  var b = a["Metajelo.XPaths.Read"],
      d = a["Control.Applicative"],
      k = a["Control.Apply"],
      f = a["Control.Bind"],
      n = a["Control.Monad"],
      p = a["Control.Plus"],
      g = a["Data.Array"],
      q = a["Data.Array.NonEmpty"],
      w = a["Data.Bounded"],
      z = a["Data.DateTime"],
      c = a["Data.Either"],
      h = a["Data.Either.Extra"],
      e = a["Data.Functor"],
      l = a["Data.Int"],
      t = a["Data.JSDate"],
      u = a["Data.Maybe"],
      D = a["Data.Natural"],
      H = a["Data.String.CodePoints"],
      I = a["Data.String.CodeUnits"],
      y = a["Data.String.NonEmpty.Internal"],
      r = a["Data.String.Utils"],
      M = a["Data.Traversable"],
      F = a["Data.XPath"],
      E = a["DataCite.Types.Common"],
      J = a.Effect,
      N = a["Effect.Exception"],
      R = a.Global,
      T = a["Metajelo.Types"],
      L = a["Metajelo.XPaths"],
      O = a["Text.Email.Validate"],
      G = a["Text.URL.Validate"],
      x = a["Web.DOM.Document.XPath"],
      V = a["Web.DOM.Document.XPath.ResultType"],
      A = a["Web.DOM.Element"],
      K = a["Web.DOM.Node"],
      C = a["Web.DOM.NodeList"],
      ha = function ha(S) {
    return "Audiovisual" === S ? d.pure(c.applicativeEither)(E.Audiovisual.value) : "Dataset" === S ? d.pure(c.applicativeEither)(E.Dataset.value) : "Event" === S ? d.pure(c.applicativeEither)(E.Event.value) : "Image" === S ? d.pure(c.applicativeEither)(E.Image.value) : "InteractiveResource" === S ? d.pure(c.applicativeEither)(E.InteractiveResource.value) : "Model" === S ? d.pure(c.applicativeEither)(E.Model.value) : "PhysicalObject" === S ? d.pure(c.applicativeEither)(E.PhysicalObject.value) : "ResourceCollection" === S ? d.pure(c.applicativeEither)(E.ResourceCollection.value) : "Service" === S ? d.pure(c.applicativeEither)(E.Service.value) : "Software" === S ? d.pure(c.applicativeEither)(E.Software.value) : "Sound" === S ? d.pure(c.applicativeEither)(E.Sound.value) : "Text" === S ? d.pure(c.applicativeEither)(E.Text.value) : "Workflow" === S ? d.pure(c.applicativeEither)(E.Workflow.value) : "Other" === S ? d.pure(c.applicativeEither)(E.Other.value) : c.Left.create("Unknown ResourceTypeGeneral: '" + (S + "'"));
  },
      sa = function sa(S) {
    return function (Y) {
      return function () {
        var ra = L.unsafeSingleNodeValue(S)(Y)(F.xx(F.stringXPath)(L.resTypeP))(),
            ua = S.xeval.str(ra)(".")();
        ra = S.xeval.str(ra)(F.at(F.stringXPath)(L.resTypeGenAT))();
        ra = L.rightOrThrow(ha(ra))();
        return {
          description: ua,
          generalType: ra
        };
      };
    };
  },
      za = function za(S) {
    return "IsCitedBy" === S ? d.pure(c.applicativeEither)(E.IsCitedBy.value) : "Cites" === S ? d.pure(c.applicativeEither)(E.Cites.value) : "IsSupplementTo" === S ? d.pure(c.applicativeEither)(E.IsSupplementTo.value) : "IsSupplementedBy" === S ? d.pure(c.applicativeEither)(E.IsSupplementedBy.value) : "IsContinuedBy" === S ? d.pure(c.applicativeEither)(E.IsContinuedBy.value) : "Continues" === S ? d.pure(c.applicativeEither)(E.Continues.value) : "IsNewVersionOf" === S ? d.pure(c.applicativeEither)(E.IsNewVersionOf.value) : "IsPreviousVersionOf" === S ? d.pure(c.applicativeEither)(E.IsPreviousVersionOf.value) : "IsPartOf" === S ? d.pure(c.applicativeEither)(E.IsPartOf.value) : "HasPart" === S ? d.pure(c.applicativeEither)(E.HasPart.value) : "IsReferencedBy" === S ? d.pure(c.applicativeEither)(E.IsReferencedBy.value) : "References" === S ? d.pure(c.applicativeEither)(E.References.value) : "IsDocumentedBy" === S ? d.pure(c.applicativeEither)(E.IsDocumentedBy.value) : "Documents" === S ? d.pure(c.applicativeEither)(E.Documents.value) : "IsCompiledBy" === S ? d.pure(c.applicativeEither)(E.IsCompiledBy.value) : "Compiles" === S ? d.pure(c.applicativeEither)(E.Compiles.value) : "IsVariantFormOf" === S ? d.pure(c.applicativeEither)(E.IsVariantFormOf.value) : "IsOriginalFormOf" === S ? d.pure(c.applicativeEither)(E.IsOriginalFormOf.value) : "IsIdenticalTo" === S ? d.pure(c.applicativeEither)(E.IsIdenticalTo.value) : "HasMetadata" === S ? d.pure(c.applicativeEither)(E.HasMetadata.value) : "IsMetadataFor" === S ? d.pure(c.applicativeEither)(E.IsMetadataFor.value) : "Reviews" === S ? d.pure(c.applicativeEither)(E.Reviews.value) : "IsReviewedBy" === S ? d.pure(c.applicativeEither)(E.IsReviewedBy.value) : "IsDerivedFrom" === S ? d.pure(c.applicativeEither)(E.IsDerivedFrom.value) : "IsSourceOf" === S ? d.pure(c.applicativeEither)(E.IsSourceOf.value) : c.Left.create("Unknown RelationType: '" + (S + "'"));
  },
      Ca = function Ca(S) {
    return "Access" === S ? d.pure(c.applicativeEither)(new u.Just(T.Access.value)) : "Collection" === S ? d.pure(c.applicativeEither)(new u.Just(T.Collection.value)) : "Data" === S ? d.pure(c.applicativeEither)(new u.Just(T.Data.value)) : "Metadata" === S ? d.pure(c.applicativeEither)(new u.Just(T.Metadata.value)) : "Preservation" === S ? d.pure(c.applicativeEither)(new u.Just(T.Preservation.value)) : "Submission" === S ? d.pure(c.applicativeEither)(new u.Just(T.Submission.value)) : "Quality" === S ? d.pure(c.applicativeEither)(new u.Just(T.Quality.value)) : "Terms of Use" === S ? d.pure(c.applicativeEither)(new u.Just(T.TermsOfUse.value)) : "" === S ? d.pure(c.applicativeEither)(u.Nothing.value) : c.Left.create("Unknown PolicyType: '" + (S + "'"));
  },
      ma = function ma(S) {
    return function (Y) {
      return function (ra) {
        return function () {
          var ua = S.xeval.any(ra)(F.xx(F.stringXPath)(Y))(V.ordered_node_snapshot_type)();
          ua = x.snapshot(ua)();
          ua = M.traverse(M.traversableArray)(J.applicativeEffect)(function (fa) {
            return S.xeval.str(fa)(".");
          })(ua)();
          ua = e.map(e.functorArray)(function (fa) {
            return L.readNonEmptyString(Y)(fa);
          })(ua);
          h.catLefts(n.monadArray)(p.plusArray)(ua);
          ua = h.catRights(n.monadArray)(p.plusArray)(ua);
          return L.readNonEmptyArray(Y + "s")(ua);
        };
      };
    };
  },
      v = function v(S) {
    return "commercial" === S ? d.pure(c.applicativeEither)(T.Commercial.value) : "non-profit" === S ? d.pure(c.applicativeEither)(T.NonProfit.value) : "governmental" === S ? d.pure(c.applicativeEither)(T.Governmental.value) : c.Left.create("Unknown InstitutionType: '" + (S + "'"));
  },
      Aa = function Aa(S) {
    return "dataCustodian" === S ? d.pure(c.applicativeEither)(new u.Just(T.DataCustodian.value)) : "" === S ? d.pure(c.applicativeEither)(u.Nothing.value) : c.Left.create("Unknown InstitutionContactType: '" + (S + "'"));
  },
      Q = function Q(S) {
    return "ARK" === S ? d.pure(c.applicativeEither)(E.ARK.value) : "arXiv" === S ? d.pure(c.applicativeEither)(E.ArXiv.value) : "bibcode" === S ? d.pure(c.applicativeEither)(E.Bibcode.value) : "DOI" === S ? d.pure(c.applicativeEither)(E.DOI.value) : "EAN13" === S ? d.pure(c.applicativeEither)(E.EAN13.value) : "EISSN" === S ? d.pure(c.applicativeEither)(E.EISSN.value) : "Handle" === S ? d.pure(c.applicativeEither)(E.Handle.value) : "IGSN" === S ? d.pure(c.applicativeEither)(E.IGSN.value) : "ISBN" === S ? d.pure(c.applicativeEither)(E.ISBN.value) : "ISSN" === S ? d.pure(c.applicativeEither)(E.ISSN.value) : "ISTC" === S ? d.pure(c.applicativeEither)(E.ISTC.value) : "LISSN" === S ? d.pure(c.applicativeEither)(E.LISSN.value) : "LSID" === S ? d.pure(c.applicativeEither)(E.LSID.value) : "PMID" === S ? d.pure(c.applicativeEither)(E.PMID.value) : "PURL" === S ? d.pure(c.applicativeEither)(E.PURL.value) : "UPC" === S ? d.pure(c.applicativeEither)(E.UPC.value) : "URL" === S ? d.pure(c.applicativeEither)(E.URL.value) : "URN" === S ? d.pure(c.applicativeEither)(E.URN.value) : c.Left.create("Unknown IdentifierType: '" + (S + "'"));
  },
      ka = function ka(S) {
    return function (Y) {
      var ra = function ra(fa) {
        return function () {
          var U = S.xeval.str(fa)(F.at(F.stringXPath)(L.idTypeAT))();
          return L.rightOrThrow(Q(U))();
        };
      },
          ua = function ua(fa) {
        return function () {
          var U = S.xeval.str(fa)(".")();
          return L.rightOrThrow(L.readNonEmptyString("InstitutionID")(U))();
        };
      };

      return function () {
        var fa = L.unsafeSingleNodeValue(S)(Y)(F.xx(F.stringXPath)(L.instIdP))(),
            U = ua(fa)();
        fa = ra(fa)();
        return {
          identifier: U,
          identifierType: fa
        };
      };
    };
  },
      Ja = function Ja(S) {
    var Y = function Y(U) {
      return function () {
        var ia = S.xeval.str(U)(F.at(F.stringXPath)(L.relTypeAT))();
        return L.rightOrThrow(za(ia))();
      };
    },
        ra = function ra(U) {
      return function () {
        var ia = S.xeval.str(U)(F.at(F.stringXPath)(L.relIdTypeAT))();
        return L.rightOrThrow(Q(ia))();
      };
    },
        ua = function ua(U) {
      return function () {
        var ia = S.xeval.str(U)(".")();
        return L.rightOrThrow(L.readNonEmptyString("RelatedIdentifier")(ia))();
      };
    },
        fa = function fa(U) {
      return function () {
        var ia = ua(U)(),
            xa = ra(U)(),
            Da = Y(U)();
        return {
          identifier: ia,
          identifierType: xa,
          relationType: Da
        };
      };
    };

    return function () {
      var U = S.xevalRoot.any(L.relIdRootP)(V.ordered_node_snapshot_type)();
      U = x.snapshot(U)();
      U = M.sequence(M.traversableArray)(J.applicativeEffect)(e.map(e.functorArray)(fa)(U))();
      U = q.fromArray(U);
      if (U instanceof u.Just) return U.value0;
      if (U instanceof u.Nothing) return N["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 112, column 3 - line 114, column 67): " + [U.constructor.name]);
    };
  },
      Pa = function Pa(S) {
    return function (Y) {
      var ra = function ra(U) {
        return function () {
          var ia = S.xeval.str(U)(F.at(F.stringXPath)(L.resIdTypeAT))();
          return L.rightOrThrow(Q(ia))();
        };
      },
          ua = function ua(U) {
        return function () {
          var ia = S.xeval.str(U)(".")();
          return L.rightOrThrow(L.readNonEmptyString("ResourceID")(ia))();
        };
      },
          fa = function fa(U) {
        return function (ia) {
          return M.sequence(M.traversableMaybe)(J.applicativeEffect)(f.bind(u.bindMaybe)(U)(function (xa) {
            return f.bind(u.bindMaybe)(ia)(function (Da) {
              return d.pure(u.applicativeMaybe)(k.lift2(J.applyEffect)(function (ta) {
                return function (Oa) {
                  return {
                    identifier: ta,
                    identifierType: Oa
                  };
                };
              })(xa)(Da));
            });
          }));
        };
      };

      return function () {
        var U = S.xeval.nodeMay(Y)(F.xx(F.stringXPath)(L.resIdP))(),
            ia = e.map(u.functorMaybe)(ua)(U);
        U = e.map(u.functorMaybe)(ra)(U);
        return fa(ia)(U)();
      };
    };
  },
      Fa = function Fa(S) {
    return function () {
      var Y = S.xevalRoot.str(L.idRootP)();
      Y = L.rightOrThrow(L.readNonEmptyString("Identifier")(Y))();
      var ra = S.xevalRoot.str(L.idTypeRootAP)();
      ra = L.rightOrThrow(Q(ra))();
      return {
        identifier: Y,
        identifierType: ra
      };
    };
  },
      Ea = function Ea(S) {
    return function (Y) {
      var ra = function ra(ua) {
        return function () {
          var fa = S.xeval.str(ua)(".")();
          return L.rightOrThrow(L.readNonEmptyString("Format")(fa))();
        };
      };

      return function () {
        var ua = S.xeval.any(Y)(F.pathAppendNSx(F.stringXPath)(F.xx(F.stringXPath)(L.formatCP))(L.formatP))(V.ordered_node_snapshot_type)();
        ua = x.snapshot(ua)();
        return M.traverse(M.traversableArray)(J.applicativeEffect)(ra)(ua)();
      };
    };
  },
      da = function da(S) {
    return "0" === S ? d.pure(c.applicativeEither)(!1) : "1" === S ? d.pure(c.applicativeEither)(!0) : "false" === S ? d.pure(c.applicativeEither)(!1) : "true" === S ? d.pure(c.applicativeEither)(!0) : c.Left.create("Invalid xs:boolean value: '" + (S + "'"));
  },
      va = function va(S) {
    return "" === S ? d.pure(c.applicativeEither)(u.Nothing.value) : e.map(c.functorEither)(u.Just.create)(da(S));
  },
      ca = function ca(S) {
    return function (Y) {
      var ra = F.pathAppendNSx(F.stringXPath)(F.xx(F.stringXPath)(L.instPolicyCP))(L.instPolicyP),
          ua = function ua(fa) {
        return function () {
          var U = K.childNodes(fa)();
          U = C.toArray(U)();
          U = g.head(g.filter(function (La) {
            return !r.startsWith("#")(K.nodeName(La));
          })(U));
          if (U instanceof u.Just) var ia = U.value0;else if (U instanceof u.Nothing) ia = N["throw"]("Couldn't find child node of " + K.nodeName(fa))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 394, column 30 - line 396, column 80): " + [U.constructor.name]);
          var xa = S.xeval.str(ia)(".")(),
              Da = L.rightOrThrow(L.readNonEmptyString("Policy")(xa))();

          U = function () {
            var La = e.map(u.functorMaybe)(A.localName)(A.fromNode(ia));
            if (La instanceof u.Just && La.value0 === L.freeTextPolicyP) return new T.FreeTextPolicy(Da);

            if (La instanceof u.Just && La.value0 === L.refPolicyP) {
              La = G.parsePublicURL(xa);
              if (La instanceof c.Left) return N["throw"]("In refPolicy URL parsing: " + La.value0)();
              if (La instanceof c.Right) return new T.RefPolicy(La.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 401, column 37 - line 403, column 45): " + [La.constructor.name]);
            }

            if (La instanceof u.Just) return N["throw"]("invalid element '" + (La.value0 + "' as child of institutionPolicy"))();
            if (La instanceof u.Nothing) return N["throw"]("unable to convert policy child Node with name '" + (K.nodeName(ia) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 399, column 17 - line 407, column 56): " + [La.constructor.name]);
          }();

          var ta = S.xeval.str(fa)(F.at(F.stringXPath)(L.polTypeAT))();
          ta = L.rightOrThrow(Ca(ta))();
          var Oa = S.xeval.str(fa)(F.at(F.stringXPath)(L.appliesToProdAT))();
          Oa = L.rightOrThrow(va(Oa))();
          return {
            policy: U,
            policyType: ta,
            appliesToProduct: Oa
          };
        };
      };

      return function () {
        var fa = S.xeval.any(Y)(ra)(V.ordered_node_snapshot_type)();
        fa = x.snapshot(fa)();
        fa = M.sequence(M.traversableArray)(J.applicativeEffect)(e.map(e.functorArray)(ua)(fa))();
        fa = q.fromArray(fa);
        if (fa instanceof u.Just) return fa.value0;
        if (fa instanceof u.Nothing) return N["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 381, column 3 - line 383, column 67): " + [fa.constructor.name]);
      };
    };
  },
      ja = function ja(S) {
    return function (Y) {
      var ra = function ra(fa) {
        return function () {
          var U = S.xeval.str(fa)(F.xx(F.stringXPath)(L.pubYearP))();
          U = L.rightOrThrow(L.readNonEmptyString("PubYear")(U))();
          return D.intToNat(l.round(R.readInt(10)(y.toString(U))));
        };
      },
          ua = F.xx(F.stringXPath)(L.basicMetaP);

      return function () {
        var fa = L.unsafeSingleNodeValue(S)(Y)(ua)(),
            U = f.bindFlipped(J.bindEffect)(L.rightOrThrow)(ma(S)(L.titleP)(fa))(),
            ia = f.bindFlipped(J.bindEffect)(L.rightOrThrow)(ma(S)(L.creatorP)(fa))();
        fa = ra(fa)();
        return {
          titles: U,
          creators: ia,
          publicationYear: fa
        };
      };
    };
  },
      ea = function ea(S) {
    var Y = y.toString(S);
    return function () {
      var ra = I.stripSuffix("Z")(Y);
      if (ra instanceof u.Just) ra = 10 >= H.length(ra.value0) ? ra.value0 + "T00:00:00.000Z" : Y;else if (ra instanceof u.Nothing) ra = Y;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 98, column 24 - line 100, column 23): " + [ra.constructor.name]);
      ra = t.parse(ra)();
      return u.fromMaybe(w.bottom(z.boundedDateTime))(t.toDateTime(ra));
    };
  },
      P = function P(S) {
    return function () {
      var Y = S.xevalRoot.str(L.dateRootP)();
      Y = L.rightOrThrow(L.readNonEmptyString("Date")(Y))();
      return ea(Y)();
    };
  },
      ba = function ba(S) {
    return function () {
      var Y = S.xevalRoot.str(L.lastModRootP)();
      Y = L.rightOrThrow(L.readNonEmptyString("ModDate")(Y))();
      return ea(Y)();
    };
  },
      oa = function oa(S) {
    return function (Y) {
      return function (ra) {
        return function () {
          var ua = S.xeval.str(ra)(Y)();
          ua = G.parsePublicURL(ua);
          if (ua instanceof c.Left) return N["throw"](ua.value0)();
          if (ua instanceof c.Right) return ua.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 442, column 3 - line 444, column 26): " + [ua.constructor.name]);
        };
      };
    };
  },
      Ka = function Ka(S) {
    return function (Y) {
      var ra = function ra(ia) {
        return function () {
          var xa = ia();
          return L.rightOrThrow(L.readNonEmptyString("SuperOrg")(xa))();
        };
      },
          ua = function ua(ia) {
        return function () {
          var xa = S.xeval.nodeMay(ia)(F.xx(F.stringXPath)(L.superOrgNameP))();
          return M.traverse(M.traversableMaybe)(J.applicativeEffect)(function (Da) {
            return ra(S.xeval.str(Da)("."));
          })(xa)();
        };
      },
          fa = function fa(ia) {
        return function () {
          var xa = L.unsafeSingleNodeValue(S)(ia)(F.xx(F.stringXPath)(L.instSustainP))(),
              Da = oa(S)(F.xx(F.stringXPath)(L.missionUrlP))(xa)();
          xa = oa(S)(F.xx(F.stringXPath)(L.fundingUrlP))(xa)();
          return {
            missionStatementURL: Da,
            fundingStatementURL: xa
          };
        };
      },
          U = function U(ia) {
        var xa = F.xx(F.stringXPath)(L.instContactP);
        return function () {
          var Da = L.unsafeSingleNodeValue(S)(ia)(xa)(),
              ta = S.xeval.str(Da)(F.at(F.stringXPath)(L.instContactTypeAT))();
          ta = L.rightOrThrow(Aa(ta))();
          Da = S.xeval.str(Da)(".")();
          Da = O.validate(Da);
          if (Da instanceof c.Left) Da = N["throw"]("Error in validating email address for InstitutionContact: " + Da.value0)();else if (Da instanceof c.Right) Da = Da.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 345, column 23 - line 349, column 28): " + [Da.constructor.name]);
          return {
            emailAddress: Da,
            contactType: ta
          };
        };
      };

      return function () {
        var ia = L.unsafeSingleNodeValue(S)(Y)(F.xx(F.stringXPath)(L.locP))(),
            xa = ka(S)(ia)(),
            Da = f.join(J.bindEffect)(e.mapFlipped(J.functorEffect)(S.xeval.str(ia)(F.xx(F.stringXPath)(L.instNameP)))(function (Qa) {
          return L.rightOrThrow(L.readNonEmptyString("Institution Name")(Qa));
        }))(),
            ta = S.xeval.str(ia)(F.xx(F.stringXPath)(L.instTypeP))();
        ta = L.rightOrThrow(v(ta))();
        var Oa = ua(ia)(),
            La = U(ia)(),
            B = fa(ia)(),
            wa = ca(S)(ia)();
        ia = S.xeval.str(ia)(F.xx(F.stringXPath)(L.versioningP))();
        ia = L.rightOrThrow(da(ia))();
        return {
          institutionID: xa,
          institutionName: Da,
          institutionType: ta,
          superOrganizationName: Oa,
          institutionContact: La,
          institutionSustainability: B,
          institutionPolicies: wa,
          versioning: ia
        };
      };
    };
  },
      Ha = function Ha(S) {
    return function (Y) {
      var ra = function ra(fa) {
        return function () {
          var U = S.xeval.str(fa)(F.at(F.stringXPath)(L.relTypeAT))();
          return L.rightOrThrow(za(U))();
        };
      },
          ua = function ua(fa) {
        return function (U) {
          return M.sequence(M.traversableMaybe)(J.applicativeEffect)(f.bind(u.bindMaybe)(fa)(function (ia) {
            return f.bind(u.bindMaybe)(U)(function (xa) {
              return d.pure(u.applicativeMaybe)(k.lift2(J.applyEffect)(function (Da) {
                return function (ta) {
                  return {
                    url: Da,
                    relationType: ta
                  };
                };
              })(ia)(xa));
            });
          }));
        };
      };

      return function () {
        var fa = S.xeval.nodeMay(Y)(F.xx(F.stringXPath)(L.resMetaSourceP))(),
            U = e.map(u.functorMaybe)(oa(S)("."))(fa);
        fa = e.map(u.functorMaybe)(ra)(fa);
        return ua(U)(fa)();
      };
    };
  },
      Ua = function Ua(S) {
    var Y = function Y(ra) {
      return function () {
        var ua = ja(S)(ra)(),
            fa = Pa(S)(ra)(),
            U = sa(S)(ra)(),
            ia = Ea(S)(ra)(),
            xa = Ha(S)(ra)(),
            Da = Ka(S)(ra)();
        return {
          basicMetadata: ua,
          resourceID: fa,
          resourceType: U,
          format: ia,
          resourceMetadataSource: xa,
          location: Da
        };
      };
    };

    return function () {
      var ra = S.xevalRoot.any(L.sProdRootP)(V.ordered_node_snapshot_type)();
      ra = x.snapshot(ra)();
      ra = M.sequence(M.traversableArray)(J.applicativeEffect)(e.map(e.functorArray)(Y)(ra))();
      ra = q.fromArray(ra);
      if (ra instanceof u.Just) return ra.value0;
      if (ra instanceof u.Nothing) return N["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 170, column 3 - line 172, column 70): " + [ra.constructor.name]);
    };
  };

  b.readRecord = function (S) {
    return function () {
      var Y = Fa(S)(),
          ra = P(S)(),
          ua = ba(S)(),
          fa = Ja(S)(),
          U = Ua(S)();
      return {
        identifier: Y,
        date: ra,
        lastModified: ua,
        relatedIdentifiers: fa,
        supplementaryProducts: U
      };
    };
  };

  b.readIdentifierType = Q;
  b.parseDate = ea;
  b.readRelationType = za;
  b.readResourceTypeGeneral = ha;
  b.readInstitutionType = v;
  b.readInstitutionContactType = Aa;
  b.readPolicyType = Ca;
  b.readBoolean = da;
})(PS);

(function (a) {
  a.copyToClipboard = function (b) {
    return function () {
      var d = document.createElement("textarea");
      d.type = "text";
      d.value = b;
      d.style.position = "absolute";
      d.style.left = -1E4;
      document.body.appendChild(d);
      d.select();
      document.execCommand("copy");
      document.body.removeChild(d);
    };
  };

  a.innerHTML = function (b) {
    return function () {
      return b.innerHTML;
    };
  };

  a.outerHTML = function (b) {
    return function () {
      return b.outerHTML;
    };
  };
})(PS["Nonbili.DOM"] = PS["Nonbili.DOM"] || {});

(function (a) {
  a["Nonbili.DOM"] = a["Nonbili.DOM"] || {};
  var b = a["Nonbili.DOM"];
  a = a["Nonbili.DOM"];
  b.copyToClipboard = a.copyToClipboard;
  b.innerHTML = a.innerHTML;
  b.outerHTML = a.outerHTML;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Write"] = a["Metajelo.XPaths.Write"] || {};

  var b = a["Metajelo.XPaths.Write"],
      d = a["Control.Applicative"],
      k = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Foldable"],
      n = a["Data.Functor"],
      p = a["Data.JSDate"],
      g = a["Data.Maybe"],
      q = a["Data.Natural"],
      w = a["Data.Show"],
      z = a["Data.Traversable"],
      c = a["Data.Unit"],
      h = a["Data.XPath"],
      e = a["DataCite.Types.Common"],
      l = a.Effect,
      t = a["Metajelo.Types"],
      u = a["Metajelo.XPaths"],
      D = a["Nonbili.DOM"],
      H = a["Text.Email.Parser"],
      I = a["Text.URL.Validate"],
      y = a["Web.DOM.Document"],
      r = a["Web.DOM.Element"],
      M = a["Web.DOM.Node"],
      F = function F(ca) {
    return function (ja) {
      return function (ea) {
        return function (P) {
          var ba = r.fromNode(ea);
          return function () {
            z.sequence(z.traversableMaybe)(l.applicativeEffect)(n.mapFlipped(g.functorMaybe)(ba)(function (oa) {
              return r.setAttribute(ca)(w.show(e.showIdentifierType)(P))(oa);
            }))();
            return c.unit;
          };
        };
      };
    };
  },
      E = a["Data.String.NonEmpty.Internal"].toString,
      J = function J(ca) {
    return function (ja) {
      return function (ea) {
        return function (P) {
          return function () {
            M.setTextContent(E(P.identifier))(ea)();
            return F(ca)(ja)(ea)(P.identifierType)();
          };
        };
      };
    };
  },
      N = function N(ca) {
    return function (ja) {
      return function () {
        var ea = u.unsafeSingleNodeValue(ca)(ca.recNode)(h.xx(h.stringXPath)(u.idP))();
        return J(u.idTypeAT)(ca)(ea)(ja)();
      };
    };
  },
      R = function R(ca) {
    return function (ja) {
      return function () {
        z.sequence(z.traversableMaybe)(l.applicativeEffect)(n.map(g.functorMaybe)(M.setTextContent(E(ca)))(ja))();
        return c.unit;
      };
    };
  },
      T = function T(ca) {
    return function () {
      var ja = p.toISOString(p.fromDateTime(ca))();
      return u.rightOrThrow(u.readNonEmptyString("(generic date)")(ja))();
    };
  },
      L = function L(ca) {
    return function (ja) {
      return function () {
        var ea = T(ja)(),
            P = ca.xevalRoot.nodeMay(u.dateRootP)();
        return R(ea)(P)();
      };
    };
  },
      O = function O(ca) {
    return function (ja) {
      return function () {
        var ea = T(ja)(),
            P = ca.xevalRoot.nodeMay(u.lastModRootP)();
        return R(ea)(P)();
      };
    };
  },
      G = function G(ca) {
    return function (ja) {
      var ea = r.prefix(ca.recElem);
      return function () {
        if (ea instanceof g.Just) var P = ea.value0 + ":";else if (ea instanceof g.Nothing) P = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 250, column 20 - line 252, column 18): " + [ea.constructor.name]);
        P += ja;
        return y.createElementNS(new g.Just(ca.ns))(P)(ca.doc)();
      };
    };
  },
      x = function x(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = G(ca)(ea)();
          M.appendChild(r.toNode(P))(ja)();
          return P;
        };
      };
    };
  },
      V = function V(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = x(ca)(ja)(u.instContactP)();
          z.sequence(z.traversableMaybe)(l.applicativeEffect)(n.mapFlipped(g.functorMaybe)(ea.contactType)(function (ba) {
            return r.setAttribute(u.instContactTypeAT)(w.show(t.showInstitutionContactType)(ba))(P);
          }))();
          return M.setTextContent(H.toString(ea.emailAddress))(r.toNode(P))();
        };
      };
    };
  },
      A = function A(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = n.map(l.functorEffect)(r.toNode)(x(ca)(ja)(u.instIdP))();
          return J(u.idTypeAT)(ca)(P)(ea)();
        };
      };
    };
  },
      K = function K(ca) {
    return function (ja) {
      return f.for_(l.applicativeEffect)(k.foldableNonEmptyArray)(ja)(function (ea) {
        return function () {
          var P = x(ca)(ca.recNode)(u.relIdP)(),
              ba = r.toNode(P);
          M.setTextContent(E(ea.identifier))(ba)();
          r.setAttribute(u.relIdTypeAT)(w.show(e.showIdentifierType)(ea.identifierType))(P)();
          return r.setAttribute(u.relTypeAT)(w.show(e.showRelationType)(ea.relationType))(P)();
        };
      });
    };
  },
      C = function C(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = n.map(l.functorEffect)(r.toNode)(x(ca)(ja)(u.resIdP))();
          return J(u.resIdTypeAT)(ca)(P)(ea)();
        };
      };
    };
  },
      ha = function ha(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = x(ca)(ja)(u.resMetaSourceP)();
          M.setTextContent(I.urlToString(ea.url))(r.toNode(P))();
          return r.setAttribute(u.relTypeAT)(w.show(e.showRelationType)(ea.relationType))(P)();
        };
      };
    };
  },
      sa = function sa(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = x(ca)(ja)(u.resTypeP)();
          M.setTextContent(ea.description)(r.toNode(P))();
          return r.setAttribute(u.resTypeGenAT)(w.show(e.showResourceTypeGeneral)(ea.generalType))(P)();
        };
      };
    };
  },
      za = function za(ca) {
    return function (ja) {
      return function (ea) {
        return function (P) {
          return function () {
            var ba = n.map(l.functorEffect)(r.toNode)(x(ja)(ea)(ca))();
            return M.setTextContent(P)(ba)();
          };
        };
      };
    };
  },
      Ca = function Ca(ca) {
    return function (ja) {
      return function (ea) {
        return function (P) {
          return za(ca)(ja)(ea)(E(P));
        };
      };
    };
  },
      ma = function ma(ca) {
    return function (ja) {
      return function (ea) {
        return f.for_(l.applicativeEffect)(k.foldableNonEmptyArray)(ea)(function (P) {
          return Ca(u.creatorP)(ca)(ja)(P);
        });
      };
    };
  },
      v = function v(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = n.map(l.functorEffect)(r.toNode)(x(ca)(ja)(u.formatCP))();
          return f.for_(l.applicativeEffect)(f.foldableArray)(ea)(function (ba) {
            return Ca(u.formatP)(ca)(P)(ba);
          })();
        };
      };
    };
  },
      Aa = function Aa(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = x(ca)(ja)(u.instPolicyP)(),
              ba = r.toNode(P);
          z.sequence(z.traversableMaybe)(l.applicativeEffect)(n.mapFlipped(g.functorMaybe)(ea.policyType)(function (oa) {
            return r.setAttribute(u.polTypeAT)(w.show(t.showPolicyType)(oa))(P);
          }))();
          z.sequence(z.traversableMaybe)(l.applicativeEffect)(n.mapFlipped(g.functorMaybe)(ea.appliesToProduct)(function (oa) {
            return r.setAttribute(u.appliesToProdAT)(w.show(w.showBoolean)(oa))(P);
          }))();
          if (ea.policy instanceof t.FreeTextPolicy) return Ca(u.freeTextPolicyP)(ca)(ba)(ea.policy.value0)();
          if (ea.policy instanceof t.RefPolicy) return Ca(u.refPolicyP)(ca)(ba)(I.urlToNEString(ea.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 217, column 3 - line 220, column 27): " + [ea.policy.constructor.name]);
        };
      };
    };
  },
      Q = function Q(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = n.map(l.functorEffect)(r.toNode)(x(ca)(ja)(u.instPolicyCP))();
          return f.for_(l.applicativeEffect)(k.foldableNonEmptyArray)(ea)(function (ba) {
            return Aa(ca)(P)(ba);
          })();
        };
      };
    };
  },
      ka = function ka(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = n.map(l.functorEffect)(r.toNode)(x(ca)(ja)(u.instSustainP))();
          Ca(u.missionUrlP)(ca)(P)(I.urlToNEString(ea.missionStatementURL))();
          return Ca(u.fundingUrlP)(ca)(P)(I.urlToNEString(ea.fundingStatementURL))();
        };
      };
    };
  },
      Ja = function Ja(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = x(ca)(ja)(u.locP)(),
              ba = r.toNode(P);
          A(ca)(ba)(ea.institutionID)();
          Ca(u.instNameP)(ca)(ba)(ea.institutionName)();
          za(u.instTypeP)(ca)(ba)(w.show(t.showInstitutionType)(ea.institutionType))();
          z.sequence(z.traversableMaybe)(l.applicativeEffect)(n.mapFlipped(g.functorMaybe)(ea.superOrganizationName)(function (oa) {
            return Ca(u.superOrgNameP)(ca)(ba)(oa);
          }))();
          V(ca)(ba)(ea.institutionContact)();
          ka(ca)(ba)(ea.institutionSustainability)();
          Q(ca)(ba)(ea.institutionPolicies)();
          return za(u.versioningP)(ca)(ba)(w.show(w.showBoolean)(ea.versioning))();
        };
      };
    };
  },
      Pa = function Pa(ca) {
    return function (ja) {
      return function (ea) {
        return f.for_(l.applicativeEffect)(k.foldableNonEmptyArray)(ea)(function (P) {
          return Ca(u.titleP)(ca)(ja)(P);
        });
      };
    };
  },
      Fa = function Fa(ca) {
    return function (ja) {
      return function (ea) {
        return function () {
          var P = n.map(l.functorEffect)(r.toNode)(x(ca)(ja)(u.basicMetaP))();
          Pa(ca)(P)(ea.titles)();
          ma(ca)(P)(ea.creators)();
          P = n.map(l.functorEffect)(r.toNode)(x(ca)(P)(u.pubYearP))();
          return M.setTextContent(w.show(q.showNatural)(ea.publicationYear))(P)();
        };
      };
    };
  },
      Ea = function Ea(ca) {
    return function (ja) {
      return function () {
        var ea = u.unsafeSingleNodeValue(ca)(ca.recNode)(h.xx(h.stringXPath)(u.sProdCP))(),
            P = n.map(l.functorEffect)(r.toNode)(x(ca)(ea)(u.sProdP))();
        Fa(ca)(P)(ja.basicMetadata)();
        z.sequence(z.traversableMaybe)(l.applicativeEffect)(n.mapFlipped(g.functorMaybe)(ja.resourceID)(function (ba) {
          return C(ca)(P)(ba);
        }))();
        sa(ca)(P)(ja.resourceType)();
        v(ca)(P)(ja.format)();
        z.sequence(z.traversableMaybe)(l.applicativeEffect)(n.mapFlipped(g.functorMaybe)(ja.resourceMetadataSource)(function (ba) {
          return ha(ca)(P)(ba);
        }))();
        return Ja(ca)(P)(ja.location)();
      };
    };
  },
      da = function da(ca) {
    return function (ja) {
      return f.for_(l.applicativeEffect)(k.foldableNonEmptyArray)(ja)(function (ea) {
        return Ea(ca)(ea);
      });
    };
  },
      va = function va(ca) {
    return function (ja) {
      return function () {
        N(ca)(ja.identifier)();
        L(ca)(ja.date)();
        O(ca)(ja.lastModified)();
        K(ca)(ja.relatedIdentifiers)();
        return da(ca)(ja.supplementaryProducts)();
      };
    };
  };

  b.recordToString = function (ca) {
    return function () {
      var ja = u.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      va(ja)(ca)();
      ja = y.documentElement(ja.doc)();
      return g.maybe(d.pure(l.applicativeEffect)(""))(D.outerHTML)(ja)();
    };
  };

  b.dateTimeToStr = T;
})(PS);

(function (a) {
  a.unsafeGet = function (b) {
    return function (d) {
      return function () {
        return d[b];
      };
    };
  };
})(PS["React.SyntheticEvent"] = PS["React.SyntheticEvent"] || {});

(function (a) {
  a["React.SyntheticEvent"] = a["React.SyntheticEvent"] || {};
  var b = a["React.SyntheticEvent"],
      d = a["React.SyntheticEvent"],
      k = a["Data.Symbol"];

  a = function (f) {
    return function (n) {
      return function (p) {
        return function (g) {
          return d.unsafeGet(k.reflectSymbol(n)(p))(g);
        };
      };
    };
  }()(new k.IsSymbol(function () {
    return "target";
  }))(k.SProxy.value);

  b.target = a;
})(PS);

(function (a) {
  a._getElementById = function (b) {
    return function (d) {
      return function () {
        return d.getElementById(b);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});

(function (a) {
  a["Web.DOM.NonElementParentNode"] = a["Web.DOM.NonElementParentNode"] || {};
  var b = a["Web.DOM.NonElementParentNode"],
      d = a["Data.Functor"],
      k = a["Data.Nullable"],
      f = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (n) {
    var p = d.map(f.functorEffect)(k.toMaybe),
        g = b._getElementById(n);

    return function (q) {
      return p(g(q));
    };
  };
})(PS);

(function (a) {
  a._files = function (b) {
    return function () {
      return b.files;
    };
  };

  a.value = function (b) {
    return function () {
      return b.value;
    };
  };

  a.setValue = function (b) {
    return function (d) {
      return function () {
        d.value = b;
      };
    };
  };
})(PS["Web.HTML.HTMLInputElement"] = PS["Web.HTML.HTMLInputElement"] || {});

(function (a) {
  a["Web.HTML.HTMLInputElement"] = a["Web.HTML.HTMLInputElement"] || {};
  var b = a["Web.HTML.HTMLInputElement"],
      d = a["Web.HTML.HTMLInputElement"],
      k = a["Data.Functor"],
      f = a["Data.Nullable"],
      n = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("HTMLInputElement");

  var p = function () {
    var g = k.map(n.functorEffect)(f.toMaybe);
    return function (q) {
      return g(d._files(q));
    };
  }();

  b.fromElement = a;
  b.files = p;
  b.value = d.value;
  b.setValue = d.setValue;
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var b = a["Metajelo.FormUtil"],
      d = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Props"],
      n = a["Concur.Core.Types"],
      p = a["Concur.React.DOM"],
      g = a["Concur.React.Props"],
      q = a["Control.Alt"],
      w = a["Control.Applicative"],
      z = a["Control.Apply"],
      c = a["Control.Bind"],
      h = a["Control.Cofree"],
      e = a["Control.Plus"],
      l = a["Data.Array"],
      t = a["Data.Array.NonEmpty"],
      u = a["Data.Bifunctor"],
      D = a["Data.Bounded"],
      H = a["Data.Either"],
      I = a["Data.Enum"],
      y = a["Data.Eq"],
      r = a["Data.Foldable"],
      M = a["Data.Functor"],
      F = a["Data.Generic.Rep"],
      E = a["Data.Generic.Rep.Bounded"],
      J = a["Data.Generic.Rep.Enum"],
      N = a["Data.Generic.Rep.Eq"],
      R = a["Data.Generic.Rep.Ord"],
      T = a["Data.Generic.Rep.Show"],
      L = a["Data.Int"],
      O = a["Data.Maybe"],
      G = a["Data.Monoid"],
      x = a["Data.Natural"],
      V = a["Data.Ord"],
      A = a["Data.Profunctor.Strong"],
      K = a["Data.Semigroup"],
      C = a["Data.Show"],
      ha = a["Data.String.Common"],
      sa = a["Data.String.NonEmpty.Internal"],
      za = a["Data.Symbol"],
      Ca = a["Data.Traversable"],
      ma = a["Data.Tuple"],
      v = a["Data.Unfoldable1"],
      Aa = a["Data.Unit"],
      Q = a["DataCite.Types.Common"],
      ka = a.Effect,
      Ja = a["Effect.Class"],
      Pa = a["Effect.Class.Console"],
      Fa = a["Effect.Exception"],
      Ea = a["Effect.Now"],
      da = a["Effect.Unsafe"],
      va = a["Foreign.Object"],
      ca = a.Global,
      ja = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      ea = a["Metajelo.CSS.UI.ClassProps"],
      P = a["Metajelo.CSS.UI.Util"],
      ba = a["Metajelo.SchemaInfo"],
      oa = a["Metajelo.Types"],
      Ka = a["Metajelo.XPaths.Read"],
      Ha = a["Metajelo.XPaths.Write"],
      Ua = a["React.SyntheticEvent"],
      S = a["Text.Email.Parser"],
      Y = a["Text.Email.Validate"],
      ra = a["Text.URL.Validate"],
      ua = a["Web.DOM.Document"],
      fa = a["Web.DOM.Element"],
      U = a["Web.DOM.HTMLCollection"],
      ia = a["Web.DOM.NonElementParentNode"],
      xa = a["Web.DOM.ParentNode"],
      Da = a["Web.HTML"],
      ta = a["Web.HTML.HTMLDocument"],
      Oa = a["Web.HTML.HTMLInputElement"],
      La = a["Web.HTML.Window"],
      B = function () {
    function X() {}

    X.value = new X();
    return X;
  }(),
      wa = function () {
    function X() {}

    X.value = new X();
    return X;
  }(),
      Qa = function () {
    function X(aa) {
      this.value0 = aa;
    }

    X.create = function (aa) {
      return new X(aa);
    };

    return X;
  }(),
      Ya = function () {
    function X(aa) {
      this.value0 = aa;
    }

    X.create = function (aa) {
      return new X(aa);
    };

    return X;
  }(),
      ab = function ab(X, aa, Ga) {
    this.fromOptionValue = X;
    this.toOptionLabel = aa;
    this.toOptionValue = Ga;
  },
      ib = function ib() {
    var X = Da.window();
    X = La.document(X)();
    return ta.toDocument(X);
  },
      jb = function jb(X) {
    if (X instanceof Qa || X instanceof Ya) return X.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 395, column 1 - line 395, column 34): " + [X.constructor.name]);
  },
      pb = function pb(X) {
    return n.debounced(1E3)(p.input(k.widgetLiftWidget)([g.defaultValue(X), M.map(f.functorProps)(g.unsafeTargetValue)(g.onChange)]));
  },
      sb = function sb(X) {
    var aa = function aa(Ga) {
      return d.step(Ga)(c.discard(c.discardUnit)(n.bindWidget)(w.pure(n.applicativeWidget)(da.unsafePerformEffect(Pa.log(Ja.monadEffectEffect)("refstr in textInput sigNow': " + C.show(C.showString)(Ga)))))(function () {
        return c.bind(n.bindWidget)(pb(Ga))(function (Ba) {
          return w.pure(n.applicativeWidget)(aa(Ba));
        });
      }));
    };

    return aa(X);
  },
      bb = function bb(X) {
    return c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))(X)(function (aa) {
      return w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(sa.fromString(ha.trim(aa)));
    });
  },
      tb = function tb(X) {
    return function (aa) {
      aa = va.lookup(X)(aa);
      if (aa instanceof O.Just) return aa.value0;
      if (aa instanceof O.Nothing) return "";
      throw Error("Failed pattern match at Metajelo.FormUtil (line 94, column 21 - line 96, column 16): " + [aa.constructor.name]);
    };
  },
      eb = function eb(X) {
    var aa = X ? "Hide Descriptions" : "Show Descriptions";
    return p.div_(n.widgetShiftMap)([])(M.voidRight(n.functorWidget)(!X)(p.button_(n.widgetShiftMap)([g.onClick])(p.text(k.widgetLiftWidget)(aa))));
  },
      Ab = function Ab(X) {
    return d.step(X)(c.bind(n.bindWidget)(eb(X))(function (aa) {
      return w.pure(n.applicativeWidget)(Ab(aa));
    }));
  },
      cb = function cb(X) {
    return function (aa) {
      return function (Ga) {
        return function () {
          var Ba = ib();
          Ba = ua.toNonElementParentNode(Ba);
          Ba = ia.getElementById(X)(Ba)();
          if (Ba instanceof O.Just) return Ba = fa.toParentNode(Ba.value0), Ba = xa.children(Ba)(), Ba = U.toArray(Ba)(), Ba = l.filter(function (Va) {
            return fa.tagName(Va) === aa;
          })(Ba), Ba = l.catMaybes(M.map(M.functorArray)(Oa.fromElement)(Ba)), r.for_(ka.applicativeEffect)(r.foldableArray)(Ba)(Oa.setValue(Ga))();
          if (Ba instanceof O.Nothing) return Aa.unit;
          throw Error("Failed pattern match at Metajelo.FormUtil (line 525, column 3 - line 538, column 25): " + [Ba.constructor.name]);
        };
      };
    };
  },
      vb = function vb(X) {
    return function (aa) {
      return aa < X ? [] : l.range(X)(aa);
    };
  },
      Bb = va.unions(r.foldableArray)([ba.descrAttrMap, ba.descrCTypMap, ba.descrEleMap, ba.descrSTypMap]),
      kb = function kb(X) {
    return function (aa) {
      return r.fold(r.foldableMaybe)(G.monoidString)(M.map(O.functorMaybe)(C.show(X))(aa));
    };
  },
      wb = new ab(function (X) {
    return O.fromJust()(H.hush(Ka.readResourceTypeGeneral(X)));
  }, C.show(Q.showResourceTypeGeneral), C.show(Q.showResourceTypeGeneral)),
      fb = new ab(function (X) {
    return O.fromJust()(H.hush(Ka.readRelationType(X)));
  }, C.show(Q.showRelationType), C.show(Q.showRelationType)),
      Cb = new ab(function (X) {
    return O.fromJust()(H.hush(Ka.readInstitutionType(X)));
  }, C.show(oa.showInstitutionType), C.show(oa.showInstitutionType)),
      xb = new ab(function (X) {
    return O.fromJust()(H.hush(Ka.readIdentifierType(X)));
  }, C.show(Q.showIdentifierType), C.show(Q.showIdentifierType)),
      Db = function Db(X) {
    return X instanceof Qa ? !0 : !1;
  },
      Eb = function Eb(X) {
    return function () {
      var aa = ib();
      aa = ua.toNonElementParentNode(aa);
      aa = ia.getElementById(X)(aa)();
      return Ca.traverse(Ca.traversableMaybe)(ka.applicativeEffect)(Oa.value)(c.bind(O.bindMaybe)(aa)(function (Ga) {
        return Oa.fromElement(Ga);
      }))();
    };
  },
      Ia = new F.Generic(function (X) {
    if (X instanceof B) return new F.Inl(F.NoArguments.value);
    if (X instanceof wa) return new F.Inr(F.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 337, column 1 - line 337, column 58): " + [X.constructor.name]);
  }, function (X) {
    if (X instanceof F.Inl) return B.value;
    if (X instanceof F.Inr) return wa.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 337, column 1 - line 337, column 58): " + [X.constructor.name]);
  }),
      ub = new C.Show(T.genericShow(Ia)(T.genericShowSum(T.genericShowConstructor(T.genericShowArgsNoArguments)(new za.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(T.genericShowConstructor(T.genericShowArgsNoArguments)(new za.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      Fb = new ab(function () {
    var X = O.fromMaybe(B.value);
    return function (aa) {
      var Ga = H.hush;
      aa = "FreeTextPolicy" === aa ? w.pure(H.applicativeEither)(B.value) : "RefPolicy" === aa ? w.pure(H.applicativeEither)(wa.value) : H.Left.create("Unknown Policy: '" + (aa + "'"));
      return X(Ga.call(H, aa));
    };
  }(), C.show(ub), C.show(ub)),
      Ma = new M.Functor(function (X) {
    return function (aa) {
      if (aa instanceof Qa) return Qa.create(M.map(O.functorMaybe)(X)(aa.value0));
      if (aa instanceof Ya) return Ya.create(M.map(O.functorMaybe)(X)(aa.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 382, column 1 - line 384, column 48): " + [X.constructor.name, aa.constructor.name]);
    };
  }),
      yb = function yb(X) {
    return function (aa) {
      return function (Ga) {
        return function (Ba) {
          var Va = function Va(Wa) {
            return p.option(n.widgetMultiAlternative(G.monoidArray))(n.widgetShiftMap)([g.value((0, aa.toOptionValue)(Wa))])([p.text(k.widgetLiftWidget)((0, aa.toOptionLabel)(Wa))]);
          },
              $a = l["null"](Ga) ? [] : l.snoc(M.mapFlipped(M.functorArray)(Ga)(Va))(p.option(n.widgetMultiAlternative(G.monoidArray))(n.widgetShiftMap)([g.disabled(!0)])([p.text(k.widgetLiftWidget)("\u2500\u2500\u2500\u2500")]));

          return d.step(Ba)(function () {
            var Wa = O.isJust(Ba);
            return c.bind(n.bindWidget)(p.select(n.widgetMultiAlternative(G.monoidArray))(n.widgetShiftMap)([g.value(O.maybe("")(aa.toOptionValue)(Ba)), M.map(f.functorProps)(function () {
              var hb = aa.fromOptionValue;
              return function (Sa) {
                return hb(g.unsafeTargetValue(Sa));
              };
            }())(g.onChange)])(K.append(K.semigroupArray)(l.cons(p.option(n.widgetMultiAlternative(G.monoidArray))(n.widgetShiftMap)([g.disabled(Wa)])([p.text(k.widgetLiftWidget)("Select ...")]))($a))(M.mapFlipped(M.functorArray)(I.upFromIncluding(X.Enum1())(v.unfoldable1Array)(D.bottom(X.Bounded0())))(Va))))(function (hb) {
              return w.pure(n.applicativeWidget)(yb(X)(aa)(Ga)(new O.Just(hb)));
            });
          }());
        };
      };
    };
  },
      zb = function zb(X) {
    return function (aa) {
      return function (Ga) {
        return function (Ba) {
          return function (Va) {
            return r.fold(X)(Ga)(M.map(aa)(Ba)(Va));
          };
        };
      };
    };
  },
      mb = function mb(X) {
    return bb(sb(zb(r.foldableMaybe)(O.functorMaybe)(G.monoidString)(sa.toString)(X)));
  },
      qb = function qb(X) {
    return O.maybe(G.mempty(n.widgetMonoid(G.monoidArray)))(function (aa) {
      return p.div(n.widgetMultiAlternative(G.monoidArray))(n.widgetShiftMap)([g.style({
        color: "red"
      })])([p.text(k.widgetLiftWidget)(C.show(X)(aa))]);
    });
  },
      Mb = new y.Eq(N.genericEq(Ia)(N.genericEqSum(N.genericEqConstructor(N.genericEqNoArguments))(N.genericEqConstructor(N.genericEqNoArguments)))),
      Jb = new V.Ord(function () {
    return Mb;
  }, function (X) {
    return function (aa) {
      return R.genericCompare(Ia)(R.genericOrdSum(R.genericOrdConstructor(R.genericOrdNoArguments))(R.genericOrdConstructor(R.genericOrdNoArguments)))(X)(aa);
    };
  }),
      Nb = new I.Enum(function () {
    return Jb;
  }, J.genericPred(Ia)(J.genericEnumSum(J.genericEnumConstructor(J.genericEnumNoArguments))(E.genericTopConstructor(E.genericTopNoArguments))(J.genericEnumConstructor(J.genericEnumNoArguments))(E.genericBottomConstructor(E.genericBottomNoArguments))), J.genericSucc(Ia)(J.genericEnumSum(J.genericEnumConstructor(J.genericEnumNoArguments))(E.genericTopConstructor(E.genericTopNoArguments))(J.genericEnumConstructor(J.genericEnumNoArguments))(E.genericBottomConstructor(E.genericBottomNoArguments)))),
      Gb = function Gb(X) {
    return function (aa) {
      return aa instanceof O.Nothing ? "(None)" : kb(X)(aa);
    };
  },
      m = new ab(function (X) {
    return H.hush(Ka.readBoolean(X));
  }, Gb(C.showBoolean), kb(C.showBoolean)),
      gb = new ab(function () {
    var X = c.join(O.bindMaybe);
    return function (aa) {
      return X(H.hush(Ka.readInstitutionContactType(aa)));
    };
  }(), Gb(oa.showInstitutionContactType), kb(oa.showInstitutionContactType)),
      lb = new ab(function () {
    var X = c.join(O.bindMaybe);
    return function (aa) {
      return X(H.hush(Ka.readPolicyType(aa)));
    };
  }(), Gb(oa.showPolicyType), kb(oa.showPolicyType)),
      Ib = function Ib(X) {
    return function (aa) {
      var Ga = [g.onClick],
          Ba = P.cList;
      var Va = aa ? l.cons(ja.active)(X) : X;
      Ba = Ba.call(P, Va);
      Ga = l.cons(Ba)(Ga);
      return M.voidRight(n.functorWidget)(!aa)(p.div_(n.widgetShiftMap)(Ga)(e.empty(n.widgetPlus(G.monoidArray))));
    };
  },
      Sb = function Sb(X) {
    return M.voidRight(n.functorWidget)(!X)(p.input(k.widgetLiftWidget)([g._type("checkbox"), g.checked(X), g.onChange]));
  },
      Qb = function Qb(X) {
    return d.step(X)(c.bind(n.bindWidget)(Sb(X))(function (aa) {
      return w.pure(n.applicativeWidget)(Qb(aa));
    }));
  },
      Tb = new D.Bounded(function () {
    return Jb;
  }, E.genericBottom(Ia)(E.genericBottomSum(E.genericBottomConstructor(E.genericBottomNoArguments))), E.genericTop(Ia)(E.genericTopSum(E.genericTopConstructor(E.genericTopNoArguments)))),
      Ub = new I.BoundedEnum(function () {
    return Tb;
  }, function () {
    return Nb;
  }, J.genericCardinality(Ia)(J.genericBoundedEnumSum(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))), J.genericFromEnum(Ia)(J.genericBoundedEnumSum(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))), J.genericToEnum(Ia)(J.genericBoundedEnumSum(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments)))),
      Vb = new z.Apply(function () {
    return Ma;
  }, function (X) {
    return function (aa) {
      if (X instanceof Qa && aa instanceof Qa || X instanceof Qa && aa instanceof Ya || X instanceof Ya && aa instanceof Qa) return Qa.create(z.apply(O.applyMaybe)(X.value0)(aa.value0));
      if (X instanceof Ya && aa instanceof Ya) return Ya.create(z.apply(O.applyMaybe)(X.value0)(aa.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 385, column 1 - line 389, column 63): " + [X.constructor.name, aa.constructor.name]);
    };
  }),
      Wb = new w.Applicative(function () {
    return Vb;
  }, function (X) {
    return Qa.create(new O.Just(X));
  }),
      Rb = function Rb(X) {
    return function (aa) {
      var Ga = ma.snd(aa),
          Ba = ma.fst(aa),
          Va = new Qa(O.Nothing.value);

      aa = function () {
        var Sa = V.max(V.ordInt)(0)(Ba - l.length(Ga) | 0);
        return K.append(K.semigroupArray)(M.map(M.functorArray)(w.pure(Wb))(Ga))(M.mapFlipped(M.functorArray)(vb(1)(Sa))(function (Xa) {
          return Va;
        }));
      }();

      var $a = function $a(Sa) {
        return d.step(Sa)(c.bind(n.bindWidget)(M.voidRight(n.functorWidget)(Ya.create(jb(Sa)))(p.button(n.widgetMultiAlternative(G.monoidArray))(n.widgetShiftMap)([g.onClick, ea.deleteItem])([p.text(k.widgetLiftWidget)("Delete")])))(function (Xa) {
          return w.pure(n.applicativeWidget)($a(Xa));
        }));
      },
          Wa = function Wa(Sa) {
        return p.li_(h.shiftMapCofree(G.monoidArray))([])(c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))(X(jb(Sa)))(function (Xa) {
          return c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))($a(new Qa(Xa)))(function (rb) {
            return w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(rb);
          });
        }));
      },
          hb = function hb(Sa) {
        if (Sa instanceof Ya) return d.step(new Ya(O.Nothing.value))(G.mempty(n.widgetMonoid(G.monoidArray)));
        if (Sa instanceof Qa) return Wa(Sa);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 416, column 23 - line 418, column 35): " + [Sa.constructor.name]);
      };

      return p.div_(h.shiftMapCofree(G.monoidArray))([])(c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))(function (Sa) {
        return function (Xa) {
          return d.loopS(n.widgetMonad)(new ma.Tuple(Sa, Xa))(function (rb) {
            return p.ul_(h.shiftMapCofree(G.monoidArray))([])(function () {
              ma.fst(rb);
              var Ob = ma.snd(rb);
              return c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))(Ca.traverse(Ca.traversableArray)(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(hb)(Ob))(function (Kb) {
                return c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))(d.step(0)(M.voidRight(n.functorWidget)(w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(1))(p.button(n.widgetMultiAlternative(G.monoidArray))(n.widgetShiftMap)([g.onClick, ea.addItem])([p.text(k.widgetLiftWidget)("Add item")]))))(function (Lb) {
                  var W = l.filter(Db)(Kb),
                      Z = l.length(W) + Lb | 0;
                  Lb = M.mapFlipped(M.functorArray)(vb(1)(Lb))(function (na) {
                    return Va;
                  });
                  return w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(ma.Tuple.create(Z)(K.append(K.semigroupArray)(W)(Lb)));
                });
              });
            }());
          });
        };
      }(Ba)(aa))(function (Sa) {
        return w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(A.second(A.strongFn)(function () {
          var Xa = M.map(M.functorArray)(jb);
          return function (rb) {
            return l.catMaybes(Xa(rb));
          };
        }())(Sa));
      }));
    };
  };

  b.menuSignal = yb;
  b.textInput = mb;

  b.dateInput = function (X) {
    var aa = da.unsafePerformEffect(function (Va) {
      return function () {
        var $a = Ea.nowDateTime();
        $a = O.fromMaybe($a)(H.hush(Va));
        $a = Fa["try"](Ha.dateTimeToStr($a))();
        return u.lmap(H.bifunctorEither)(C.show(Fa.showError))($a);
      };
    }(X));
    X = c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)));
    var Ga = w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)));
    if (aa instanceof H.Left) var Ba = "";else if (aa instanceof H.Right) Ba = sa.toString(aa.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 179, column 31 - line 181, column 34): " + [aa.constructor.name]);
    return X(Ga(Ba))(function (Va) {
      var $a = c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray))),
          Wa = w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)));
      if (aa instanceof H.Left) var hb = aa.value0;else if (aa instanceof H.Right) hb = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 182, column 21 - line 184, column 18): " + [aa.constructor.name]);
      return $a(Wa(hb))(function (Sa) {
        return c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))(p.div_(h.shiftMapCofree(G.monoidArray))([g._id("mjUI_dateInput")])(mb(sa.fromString(Va))))(function (Xa) {
          return c.discard(c.discardUnit)(h.bindCofree(n.widgetAlternative(G.monoidArray)))(w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(da.unsafePerformEffect(cb("mjUI_dateInput")("INPUT")(Va))))(function () {
            var rb = c.discard(c.discardUnit)(h.bindCofree(n.widgetAlternative(G.monoidArray))),
                Ob = d.display;
            if (aa instanceof H.Right) var Kb = G.mempty(n.widgetMonoid(G.monoidArray));else if (aa instanceof H.Left) Kb = qb(C.showString)(new O.Just(aa.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 188, column 13 - line 190, column 40): " + [aa.constructor.name]);
            return rb(Ob.call(d, Kb))(function () {
              if (Xa instanceof O.Just) return w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(da.unsafePerformEffect(M.map(ka.functorEffect)(u.lmap(H.bifunctorEither)(C.show(Fa.showError)))(Fa["try"](Ka.parseDate(Xa.value0)))));
              if (Xa instanceof O.Nothing) return w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(new H.Left("no date input"));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 191, column 3 - line 194, column 43): " + [Xa.constructor.name]);
            });
          });
        });
      });
    });
  };

  b.natInput = function (X) {
    X = c.bind(O.bindMaybe)(M.mapFlipped(O.functorMaybe)(X)(function () {
      var aa = C.show(C.showInt);
      return function (Ga) {
        return aa(x.natToInt(Ga));
      };
    }()))(sa.fromString);
    return c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))(mb(X))(function (aa) {
      return w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(M.map(O.functorMaybe)(function () {
        var Ga = ca.readInt(10);
        return function (Ba) {
          return x.intToNat(L.round(Ga(sa.toString(Ba))));
        };
      }())(aa));
    });
  };

  b.urlInput = function (X) {
    if (X instanceof H.Left) var aa = "";else if (X instanceof H.Right) aa = sa.toString(ra.urlToNEString(X.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 227, column 15 - line 229, column 48): " + [X.constructor.name]);
    if (X instanceof H.Left) var Ga = X.value0;else if (X instanceof H.Right) Ga = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 223, column 15 - line 225, column 20): " + [X.constructor.name]);
    return c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))(mb(sa.fromString(aa)))(function (Ba) {
      var Va = c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray))),
          $a = w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)));
      if (Ba instanceof O.Nothing) Ba = new H.Left(Ga);else if (Ba instanceof O.Just) Ba = ra.parsePublicURL(sa.toString(Ba.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 214, column 19 - line 216, column 46): " + [Ba.constructor.name]);
      return Va($a(Ba))(function (Wa) {
        var hb = c.discard(c.discardUnit)(h.bindCofree(n.widgetAlternative(G.monoidArray))),
            Sa = d.display;
        if (Wa instanceof H.Right) var Xa = G.mempty(n.widgetMonoid(G.monoidArray));else if (Wa instanceof H.Left) Xa = qb(C.showString)(new O.Just(Wa.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 217, column 13 - line 219, column 40): " + [Wa.constructor.name]);
        return hb(Sa.call(d, Xa))(function () {
          return w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(Wa);
        });
      });
    });
  };

  b.emailInput = function (X) {
    if (X instanceof H.Left) var aa = "";else if (X instanceof H.Right) aa = S.toString(X.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 247, column 15 - line 249, column 33): " + [X.constructor.name]);
    if (X instanceof H.Left) var Ga = X.value0;else if (X instanceof H.Right) Ga = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 243, column 15 - line 245, column 20): " + [X.constructor.name]);
    return c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))(mb(sa.fromString(aa)))(function (Ba) {
      var Va = c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray))),
          $a = w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)));
      if (Ba instanceof O.Nothing) Ba = new H.Left(Ga);else if (Ba instanceof O.Just) Ba = Y.validate(sa.toString(Ba.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 21 - line 236, column 43): " + [Ba.constructor.name]);
      return Va($a(Ba))(function (Wa) {
        var hb = c.discard(c.discardUnit)(h.bindCofree(n.widgetAlternative(G.monoidArray))),
            Sa = d.display;
        if (Wa instanceof H.Right) var Xa = G.mempty(n.widgetMonoid(G.monoidArray));else if (Wa instanceof H.Left) Xa = qb(C.showString)(new O.Just(Wa.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 237, column 13 - line 239, column 40): " + [Wa.constructor.name]);
        return hb(Sa.call(d, Xa))(function () {
          return w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(Wa);
        });
      });
    });
  };

  b.collapsibleS = function (X) {
    return function (aa) {
      return d.loopW(n.widgetMonad)(aa)(Ib(X));
    };
  };

  b.checkBoxS = Qb;
  b.showDescSig = Ab;

  b.mkDesc = function (X) {
    return function (aa) {
      var Ga = tb(X)(Bb),
          Ba = q.alt(n.widgetAlt(G.monoidArray))(p.text(k.widgetLiftWidget)(Ga))(p["code'"](n.widgetMultiAlternative(G.monoidArray))(n.widgetShiftMap)([p.text(k.widgetLiftWidget)(" ")]));
      return aa && !ha["null"](Ga) ? Ba : G.mempty(n.widgetMonoid(G.monoidArray));
    };
  };

  b.FreeTextPolicy = B;

  b.checkPolicy = function (X) {
    return function (aa) {
      if (X instanceof B) {
        var Ga = M.mapFlipped(H.functorEither);
        aa = sa.fromString(ha.trim(aa));
        if (aa instanceof O.Just) aa = new H.Right(aa.value0);else if (aa instanceof O.Nothing) aa = new H.Left("Empty string when NonEmptyString expected.");else throw Error("Failed pattern match at Metajelo.FormUtil (line 457, column 22 - line 459, column 63): " + [aa.constructor.name]);
        return Ga(aa)(oa.FreeTextPolicy.create);
      }

      if (X instanceof wa) return M.mapFlipped(H.functorEither)(ra.parsePublicURL(aa))(oa.RefPolicy.create);
      throw Error("Failed pattern match at Metajelo.FormUtil (line 367, column 25 - line 369, column 52): " + [X.constructor.name]);
    };
  };

  b.polPolTypeIs = function (X) {
    if (X instanceof oa.FreeTextPolicy) return B.value;
    if (X instanceof oa.RefPolicy) return wa.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 372, column 18 - line 374, column 29): " + [X.constructor.name]);
  };

  b.arrayView = Rb;

  b.nonEmptyArrayView = function (X) {
    return function (aa) {
      return c.bind(h.bindCofree(n.widgetAlternative(G.monoidArray)))(Rb(X)(A.second(A.strongFn)(zb(r.foldableMaybe)(O.functorMaybe)(G.monoidArray)(t.toArray))(aa)))(function (Ga) {
        return w.pure(h.applicativeCofree(n.widgetAlternative(G.monoidArray)))(A.second(A.strongFn)(t.fromArray)(Ga));
      });
    };
  };

  b.errorDisplay = qb;

  b.runEffectInit = function (X) {
    return function (aa) {
      return d.step(X)(c.bind(n.bindWidget)(Ja.liftEffect(n.widgetMonadEff(G.monoidArray))(aa))(function (Ga) {
        return w.pure(n.applicativeWidget)(d.step(Ga)(e.empty(n.widgetPlus(G.monoidArray))));
      }));
    };
  };

  b.evTargetElem = function (X) {
    return M.map(ka.functorEffect)(fa.fromNode)(Ua.target(X));
  };

  b.getInputTextLE = function (X) {
    return function (aa) {
      return Ja.liftEffect(X)(Eb(aa));
    };
  };

  b.tabLink = function (X) {
    return function (aa) {
      return p.a_(n.widgetShiftMap)([g.href(X), g.target("_blank"), g.rel("noopener noreferrer")])(aa);
    };
  };

  b.getFirstElemByClass = function (X) {
    return function () {
      var aa = ib();
      aa = ua.getElementsByClassName(X)(aa)();
      return U.item(0)(aa)();
    };
  };

  b.isOptionMaybeBoolean = m;
  b.isOptionIdentifierType = xb;
  b.isOptionInstitutionType = Cb;
  b.isOptionMaybeInstitutionContactType = gb;
  b.isOptionMaybePolicyType = lb;
  b.isOptionRelationType = fb;
  b.isOptionResourceTypeGeneral = wb;
  b.boundedEnumPolPolType = Ub;
  b.isOptionPolPolType = Fb;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var b = a["Metajelo.View"],
      d = a["Concur.Core.LiftWidget"],
      k = a["Concur.Core.Types"],
      f = a["Concur.React.DOM"],
      n = a["Concur.React.Props"],
      p = a["Control.Alt"],
      g = a["Control.Bind"],
      q = a["Control.Category"],
      w = a["Data.Array"],
      z = a["Data.Array.NonEmpty"],
      c = a["Data.Array.NonEmpty.Internal"],
      h = a["Data.Foldable"],
      e = a["Data.Functor"],
      l = a["Data.HeytingAlgebra"],
      t = a["Data.Maybe"],
      u = a["Data.Monoid"],
      D = a["Data.Natural"],
      H = a["Data.Profunctor.Strong"],
      I = a["Data.Semigroup"],
      y = a["Data.Show"],
      r = a["Data.String.CodePoints"],
      M = a["Data.String.NonEmpty.Internal"],
      F = a["Data.String.Utils"],
      E = a["Data.Unfoldable"],
      J = a["Data.Unfoldable1"],
      N = a["DataCite.Types.Common"],
      R = a["Foreign.Object"],
      T = a["Metajelo.CSS.Common.ClassNames"],
      L = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      O = a["Metajelo.CSS.Web.ClassProps"],
      G = a["Metajelo.CSS.Web.Util"],
      x = a["Metajelo.Types"],
      V = a["Text.Email.Parser"],
      A = a["Text.URL.Validate"],
      K = function () {
    var P = e.map(e.functorArray)(r.singleton);
    return function (ba) {
      return P(r.toCodePointArray(ba));
    };
  }(),
      C = function C(P) {
    var ba = f.text(P);
    return function (oa) {
      return ba(M.toString(oa));
    };
  },
      ha = f["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([f.text(d.widgetLiftWidget)(" ")]),
      sa = function () {
    var P = h.intercalate(h.foldableArray)(u.monoidArray)([ha]),
        ba = e.map(e.functorArray)(J.singleton(J.unfoldable1Array));
    return function (oa) {
      return P(ba(oa));
    };
  }(),
      za = function za(P) {
    return f.div(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.institutionPolicy])(sa([function (ba) {
      var oa = function () {
        if (ba instanceof t.Nothing) return {
          text: "May apply to product (unverified)",
          cls: L.appliesMaybe
        };
        if (ba instanceof t.Just && ba.value0) return {
          text: "Applies to product",
          cls: L.appliesYes
        };
        if (ba instanceof t.Just && !ba.value0) return {
          text: "Does not apply to product",
          cls: L.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 273, column 10 - line 276, column 75): " + [ba.constructor.name]);
      }();

      return f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([G.cList([T.applies, oa.cls])])([function (Ka) {
        return f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.appliesInfo])([f.text(d.widgetLiftWidget)(Ka)]);
      }(oa.text)]);
    }(P.appliesToProduct), h.foldMap(h.foldableMaybe)(k.widgetMonoid(u.monoidArray))(function (ba) {
      return f["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.policyType])([f.text(d.widgetLiftWidget)(y.show(x.showPolicyType)(ba))]), f.text(d.widgetLiftWidget)(" Policy:")]);
    })(P.policyType), function (ba) {
      var oa = f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.policy]),
          Ka = J.singleton(J.unfoldable1Array);
      if (ba instanceof x.FreeTextPolicy) ba = C(d.widgetLiftWidget)(ba.value0);else if (ba instanceof x.RefPolicy) ba = A.urlToString(ba.value0), ba = f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([f.text(d.widgetLiftWidget)(ba)]);else throw Error("Failed pattern match at Metajelo.View (line 266, column 5 - line 269, column 40): " + [ba.constructor.name]);
      return oa(Ka(ba));
    }(P.policy)]));
  },
      Ca = function Ca(P) {
    return f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.institutionName])([C(d.widgetLiftWidget)(P.institutionName)]);
  },
      ma = function ma(P) {
    return function (ba) {
      return h.foldMap(h.foldableMaybe)(u.monoidArray)(q.identity(q.categoryFn))(w.init(ba));
    };
  },
      v = function v(P) {
    return function (ba) {
      return function (oa) {
        return function (Ka) {
          return function (Ha) {
            var Ua = R.fromFoldableWith(P)(I.append(Ka)),
                S = e.map(ba)(H.fanout(q.categoryFn)(H.strongFn)(Ha)(J.singleton(oa)));
            return function (Y) {
              return Ua(S(Y));
            };
          };
        };
      };
    };
  },
      Aa = function Aa(P) {
    var ba = V.toString(P.emailAddress),
        oa = f.text(d.widgetLiftWidget);
    if (P.contactType instanceof t.Nothing) P = ".";else if (P.contactType instanceof t.Just) P = " (" + (y.show(x.showInstitutionContactType)(P.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 200, column 24 - line 202, column 41): " + [P.contactType.constructor.name]);
    oa = oa(P);
    return f.span_(k.widgetShiftMap)([O.institutionContact])(p.alt(k.widgetAlt(u.monoidArray))(p.alt(k.widgetAlt(u.monoidArray))(f["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([f.text(d.widgetLiftWidget)("Institution Contact: ")]))(f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.contactEmail, n.href("mailto:" + ba)])([f.text(d.widgetLiftWidget)(ba)])))(f.span_(k.widgetShiftMap)([O.contactType])(oa)));
  },
      Q = f["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([f.text(d.widgetLiftWidget)(", ")]),
      ka = function ka(P) {
    return f.span_(k.widgetShiftMap)([O.basicMetadata, O.creatorList])(h.intercalate(h.foldableArray)(k.widgetMonoid(u.monoidArray))(Q)(e.mapFlipped(e.functorArray)(z.toArray(P))(function (ba) {
      return f.span_(k.widgetShiftMap)([O.creator])(C(d.widgetLiftWidget)(ba));
    })));
  },
      Ja = function Ja(P) {
    return f.span_(k.widgetShiftMap)([O.formatList])(h.intercalate(h.foldableArray)(k.widgetMonoid(u.monoidArray))(Q)(e.mapFlipped(e.functorArray)(P)(function (ba) {
      return f.span_(k.widgetShiftMap)([O.format])(C(d.widgetLiftWidget)(ba));
    })));
  },
      Pa = function Pa(P) {
    return f.span_(k.widgetShiftMap)([])(h.intercalate(h.foldableArray)(k.widgetMonoid(u.monoidArray))(Q)(e.mapFlipped(e.functorArray)(z.toArray(P))(function (ba) {
      return f.span_(k.widgetShiftMap)([O.title])(C(d.widgetLiftWidget)(ba));
    })));
  },
      Fa = function Fa(P) {
    return f["cite'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([C(d.widgetLiftWidget)(P)]);
  },
      Ea = function Ea(P) {
    if (P.identifierType instanceof N.ARK) return f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(M.toString(P.identifier))])([Fa(P.identifier)]);

    if (P.identifierType instanceof N.ArXiv) {
      var ba = "https://arxiv.org/abs/" + M.toString(P.identifier);
      return f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([Fa(P.identifier)]);
    }

    if (P.identifierType instanceof N.Bibcode) return ba = "https://ui.adsabs.harvard.edu/abs/" + (M.toString(P.identifier) + "/abstract"), f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.DOI) return ba = "https://doi.org/" + M.toString(P.identifier), f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.EAN13) return Fa(P.identifier);
    if (P.identifierType instanceof N.EISSN) return ba = "https://www.worldcat.org/ISSN/" + M.toString(P.identifier), f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.Handle) return ba = "http://hdl.handle.net/" + M.toString(P.identifier), f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.IGSN) return ba = "http://igsn.org/" + M.toString(P.identifier), f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.ISBN) return Fa(P.identifier);
    if (P.identifierType instanceof N.ISSN) return ba = "https://www.worldcat.org/ISSN/" + M.toString(P.identifier), f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.ISTC) return Fa(P.identifier);
    if (P.identifierType instanceof N.LISSN) return ba = "https://www.worldcat.org/ISSN/" + M.toString(P.identifier), f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.LSID) return ba = "http://www.lsid.info/resolver/?lsid=" + M.toString(P.identifier), f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.PMID) return ba = "https://www.ncbi.nlm.nih.gov/pubmed/" + M.toString(P.identifier), f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(ba)])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.PURL) return f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(M.toString(P.identifier))])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.UPC) return Fa(P.identifier);
    if (P.identifierType instanceof N.URL) return f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([n.href(M.toString(P.identifier))])([Fa(P.identifier)]);
    if (P.identifierType instanceof N.URN) return Fa(P.identifier);
    throw Error("Failed pattern match at Metajelo.View (line 222, column 1 - line 222, column 47): " + [P.constructor.name]);
  },
      da = function da(P) {
    return f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.identifier])([f.span_(k.widgetShiftMap)([O.idType])(f.text(d.widgetLiftWidget)(y.show(N.showIdentifierType)(P.identifierType))), f.span_(k.widgetShiftMap)([O.idUrl])(Ea(P))]);
  },
      va = function va(P) {
    return f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.relatedId])([f.span_(k.widgetShiftMap)([O.relType])(f.text(d.widgetLiftWidget)(y.show(N.showRelationType)(P.relationType))), ha, da({
      identifier: P.identifier,
      identifierType: P.identifierType
    })]);
  },
      ca = function ca(P) {
    return function (ba) {
      return function (oa) {
        if (ba) return P;

        if (h.any(h.foldableArray)(l.heytingAlgebraBoolean)(function (Ha) {
          return F.endsWith(Ha)(P);
        })([";", ".", ","])) {
          var Ka = K(P);
          return F.fromCharArray(ma(u.monoidString)(Ka)) + oa;
        }

        return P + oa;
      };
    };
  },
      ja = function ja(P) {
    var ba = Ca(P),
        oa = f["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([f.text(d.widgetLiftWidget)("("), f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.institutionId])([da(P.institutionID)]), f.text(d.widgetLiftWidget)("; "), f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.institutionType])([f.text(d.widgetLiftWidget)(y.show(x.showInstitutionType)(P.institutionType))]), f.text(d.widgetLiftWidget)(ca(")")(t.isNothing(P.superOrganizationName))(","))]);
    if (P.superOrganizationName instanceof t.Nothing) var Ka = u.mempty(k.widgetMonoid(u.monoidArray));else if (P.superOrganizationName instanceof t.Just) Ka = f["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([f.text(d.widgetLiftWidget)("a member of "), f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.superOrg])([f.text(d.widgetLiftWidget)(ca(M.toString(P.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 162, column 7 - line 168, column 10): " + [P.superOrganizationName.constructor.name]);
    return sa([ba, oa, Ka, Aa(P.institutionContact), f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.sustainability])([f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.missionStatement, n.href(A.urlToString(P.institutionSustainability.missionStatementURL))])([f.text(d.widgetLiftWidget)("Mission Statement")]), f.text(d.widgetLiftWidget)("; "), f.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.fundingStatement, n.href(A.urlToString(P.institutionSustainability.fundingStatementURL))])([f.text(d.widgetLiftWidget)("Funding Statement")]), f.text(d.widgetLiftWidget)(".")]), f.ul(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.institutionPolicies])(e.map(e.functorArray)(function (Ha) {
      return f["li'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([za(Ha)]);
    })(z.toArray(P.institutionPolicies))), function (Ha) {
      if (Ha) Ha = "Versioned";else {
        if (Ha) throw Error("Failed pattern match at Metajelo.View (line 189, column 14 - line 191, column 31): " + [Ha.constructor.name]);
        Ha = "Unversioned";
      }
      return f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.versioning])([f.text(d.widgetLiftWidget)(Ha)]);
    }(P.versioning)]);
  },
      ea = function ea(P) {
    if (P.resourceID instanceof t.Just) var ba = f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.resourceId])([da(P.resourceID.value0), f.text(d.widgetLiftWidget)(".")]);else if (P.resourceID instanceof t.Nothing) ba = u.mempty(k.widgetMonoid(u.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 127, column 17 - line 129, column 24): " + [P.resourceID.constructor.name]);
    var oa = [ka(P.basicMetadata.creators), f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.basicMetadata, O.pubyear])([f.text(d.widgetLiftWidget)(y.show(y.showInt)(D.natToInt(P.basicMetadata.publicationYear)))]), f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.basicMetadata, O.title])([Pa(P.basicMetadata.titles), f.text(d.widgetLiftWidget)(ca("")(t.isNothing(P.resourceID))(","))])];
    ba = I.append(I.semigroupArray)(oa)([f["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([Ca(P.location), f.text(d.widgetLiftWidget)(".")]), ba]);
    return f.div(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.product])(sa(I.append(I.semigroupArray)([f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.productCitation])([f["cite'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)(sa(ba))])])(I.append(I.semigroupArray)([Ja(P.format)])(ja(P.location)))));
  };

  b.spacify = sa;

  b.mkRecordWidget = function (P) {
    var ba = function () {
      var Ha = e.map(c.functorNonEmptyArray)(function (Ua) {
        return f.li(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.relatedId])([Ua]);
      })(e.map(c.functorNonEmptyArray)(va)(P.relatedIdentifiers));
      return f.ul(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.relatedIdList])(z.toArray(Ha));
    }(),
        oa = v(c.foldableNonEmptyArray)(c.functorNonEmptyArray)(c.unfoldable1NonEmptyArray)(c.semigroupNonEmptyArray)(function (Ha) {
      return y.show(N.showResourceTypeGeneral)(Ha.resourceType.generalType) + (": " + Ha.resourceType.description);
    })(P.supplementaryProducts),
        Ka = function Ka(Ha) {
      Ha = g.join(g.bindArray)(E.fromMaybe(E.unfoldableArray)(e.map(t.functorMaybe)(z.toArray)(R.lookup(Ha)(oa))));
      var Ua = f.span_(k.widgetShiftMap)([O.resourceType])(h.fold(h.foldableMaybe)(k.widgetMonoid(u.monoidArray))(e.mapFlipped(t.functorMaybe)(w.head(Ha))(function (S) {
        return p.alt(k.widgetAlt(u.monoidArray))(p.alt(k.widgetAlt(u.monoidArray))(f.span_(k.widgetShiftMap)([O.resourceTypeGen])(f.text(d.widgetLiftWidget)(y.show(N.showResourceTypeGeneral)(S.resourceType.generalType))))(f.span_(k.widgetShiftMap)([O.resourceTypeDescr])(f.text(d.widgetLiftWidget)(S.resourceType.description))))(f["br'"](d.widgetLiftWidget));
      })));
      return f["div'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)(w.cons(Ua)(e.map(e.functorArray)(ea)(Ha)));
    };

    y.show(N.showIdentifierType)(P.identifier.identifierType);
    return f.div(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.record])([f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.relatedIdsHeader])([]), ba, f.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.productsHeader])([f.span_(k.widgetShiftMap)([O.recordId])(da(P.identifier))]), f.ul(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([O.productList])(e.map(e.functorArray)(function (Ha) {
      return f.li_(k.widgetShiftMap)([O.productGroup])(Ka(Ha));
    })(R.keys(oa)))]);
  };

  b.mkSupplementaryProductWidget = ea;
  b.locElems = ja;
})(PS);

(function (a) {
  a.pickFn = function (b, d) {
    for (var k = {}, f = 0; f < b.length; f++) {
      "undefined" !== typeof d[b[f]] && (k[b[f]] = d[b[f]]);
    }

    return k;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a.unsafeGet = function (b) {
    return function (d) {
      return d[b];
    };
  };

  a.unsafeSet = function (b) {
    return function (d) {
      return function (k) {
        var f = {},
            n;

        for (n in k) {
          ({}).hasOwnProperty.call(k, n) && (f[n] = k[n]);
        }

        f[b] = d;
        return f;
      };
    };
  };

  a.unsafeDelete = function (b) {
    return function (d) {
      var k = {},
          f;

      for (f in d) {
        f !== b && {}.hasOwnProperty.call(d, f) && (k[f] = d[f]);
      }

      return k;
    };
  };
})(PS["Record.Unsafe"] = PS["Record.Unsafe"] || {});

(function (a) {
  a["Record.Unsafe"] = a["Record.Unsafe"] || {};
  var b = a["Record.Unsafe"];
  a = a["Record.Unsafe"];
  b.unsafeGet = a.unsafeGet;
  b.unsafeSet = a.unsafeSet;
  b.unsafeDelete = a.unsafeDelete;
})(PS);

(function (a) {
  a.Record = a.Record || {};
  var b = a.Record,
      d = a["Data.Symbol"],
      k = a["Record.Unsafe"];

  b.get = function (f) {
    return function (n) {
      return function (p) {
        return function (g) {
          return k.unsafeGet(d.reflectSymbol(f)(p))(g);
        };
      };
    };
  };

  b.insert = function (f) {
    return function (n) {
      return function (p) {
        return function (g) {
          return function (q) {
            return function (w) {
              return k.unsafeSet(d.reflectSymbol(f)(g))(q)(w);
            };
          };
        };
      };
    };
  };

  b["delete"] = function (f) {
    return function (n) {
      return function (p) {
        return function (g) {
          return function (q) {
            return k.unsafeDelete(d.reflectSymbol(f)(g))(q);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var b = a["Record.Extra"],
      d = a["Data.List.Types"],
      k = a["Data.Monoid"],
      f = a["Data.Symbol"],
      n = a["Type.Data.RowList"],
      p = function p(g) {
    this.keysImpl = g;
  };

  a = new p(function (g) {
    return k.mempty(d.monoidList);
  });

  b.keys = function (g) {
    return function (q) {
      return function (w) {
        return (0, q.keysImpl)(n.RLProxy.value);
      };
    };
  };

  b.nilKeys = a;

  b.consKeys = function (g) {
    return function (q) {
      return new p(function (w) {
        w = (0, q.keysImpl)(n.RLProxy.value);
        var z = f.reflectSymbol(g)(f.SProxy.value);
        return new d.Cons(z, w);
      });
    };
  };
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var b = a.Option,
      d = a.Option,
      k = a["Control.Monad.State.Class"],
      f = a["Control.Monad.State.Trans"],
      n = a["Data.Array"],
      p = a["Data.Function.Uncurried"],
      g = a["Data.Identity"],
      q = a["Data.List.Types"],
      w = a["Data.Maybe"],
      z = a["Data.Symbol"],
      c = a["Foreign.Object"],
      h = a.Record,
      e = a["Record.Extra"],
      l = a["Type.Data.Row"],
      t = function () {
    function L() {}

    L.value = new L();
    return L;
  }(),
      u = function u(L) {
    this.getAllOption = L;
  },
      D = function D(L) {
    this["getAll'"] = L;
  },
      H = function H(L) {
    this.fromRecordOption = L;
  },
      I = function I(L) {
    this["fromRecord'"] = L;
  },
      y = function y(L) {
    return function (O) {
      return function (G) {
        G = n.fromFoldable(q.foldableList)(e.keys()(G)(l.RProxy.value));
        return p.runFn2(d.pickFn)(G);
      };
    };
  };

  a = new u(function (L) {
    return function (O) {
      return new w.Just({});
    };
  });

  var r = c.empty,
      M = new H(function (L) {
    return function (O) {
      return r;
    };
  }),
      F = function F(L) {
    return function (O) {
      return function (G) {
        return function (x) {
          var V = z.reflectSymbol(L)(z.SProxy.value),
              A = c.alter(function (K) {
            return O(K);
          })(V)(x);
          x = O(c.lookup(V)(x));
          return {
            option: A,
            value: x
          };
        };
      };
    };
  },
      E = function E(L) {
    return function (O) {
      return function (G) {
        return function (x) {
          return function (V) {
            return F(L)(function (A) {
              return w.Nothing.value;
            })(x)(V).option;
          };
        };
      };
    };
  },
      J = function J(L) {
    return function (O) {
      return function (G) {
        return function (x) {
          return F(L)(function (V) {
            return V;
          })(G)(x).value;
        };
      };
    };
  },
      N = function N(L) {
    return function (O) {
      return function (G) {
        return function (x) {
          return function (V) {
            return F(L)(function (A) {
              return new w.Just(x);
            })(G)(V).option;
          };
        };
      };
    };
  },
      R = function R(L) {
    return function (O) {
      return function (G) {
        return function (x) {
          return function (V) {
            if (x instanceof w.Just) return N(L)()(G)(x.value0)(V);
            if (x instanceof w.Nothing) return V;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [x.constructor.name]);
          };
        };
      };
    };
  },
      T = function T(L) {
    return function (O) {
      return function (G) {
        return function (x) {
          return function (V) {
            return function (A) {
              return F(L)(function (K) {
                return new w.Just(V);
              })(x)(A).option;
            };
          };
        };
      };
    };
  };

  b.fromRecord = function (L) {
    return L["fromRecord'"];
  };

  b.empty = r;
  b.get = J;

  b.getAll = function (L) {
    return L["getAll'"];
  };

  b.getSubset = function (L) {
    return function (O) {
      return function (G) {
        return function (x) {
          return function (V) {
            return (0, x["getAll'"])(y()()(G)(V));
          };
        };
      };
    };
  };

  b.getWithDefault = function (L) {
    return function (O) {
      return function (G) {
        return function (x) {
          return function (V) {
            V = J(L)()(x)(V);
            if (V instanceof w.Just) return V.value0;
            if (V instanceof w.Nothing) return G;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [V.constructor.name]);
          };
        };
      };
    };
  };

  b.maySetOptState = function (L) {
    return function (O) {
      return function (G) {
        return function (x) {
          return function (V) {
            return k.put(f.monadStateStateT(g.monadIdentity))(R(L)()(G)(x)(V));
          };
        };
      };
    };
  };

  b.fromRecordAny = function (L) {
    return function (O) {
      return new I((0, L.fromRecordOption)(t.value));
    };
  };

  b.fromRecordOptionNil = M;

  b.fromRecordOptionCons = function (L) {
    return function (O) {
      return function (G) {
        return function (x) {
          return function (V) {
            return function (A) {
              return new H(function (K) {
                return function (C) {
                  var ha = h["delete"](L)()()(z.SProxy.value)(C);
                  ha = (0, O.fromRecordOption)(t.value)(ha);
                  C = h.get(L)()(z.SProxy.value)(C);
                  return T(L)()()(z.SProxy.value)(C)(ha);
                };
              });
            };
          };
        };
      };
    };
  };

  b.getAllAny = function (L) {
    return function (O) {
      return new D((0, O.getAllOption)(t.value));
    };
  };

  b.getAllOptionNil = a;

  b.getAllOptionCons = function (L) {
    return function (O) {
      return function (G) {
        return function (x) {
          return function (V) {
            return function (A) {
              return new u(function (K) {
                return function (C) {
                  var ha = E(L)()()(z.SProxy.value)(C);
                  ha = (0, A.getAllOption)(t.value)(ha);
                  C = J(L)()(z.SProxy.value)(C);

                  if (ha instanceof w.Just) {
                    if (C instanceof w.Just) return new w.Just(h.insert(L)()()(z.SProxy.value)(C.value0)(ha.value0));
                    if (C instanceof w.Nothing) return w.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [C.constructor.name]);
                  }

                  if (ha instanceof w.Nothing) return w.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [ha.constructor.name]);
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
  a._item = function (b) {
    return function (d) {
      return d.item(b);
    };
  };
})(PS["Web.File.FileList"] = PS["Web.File.FileList"] || {});

(function (a) {
  a["Web.File.FileList"] = a["Web.File.FileList"] || {};
  var b = a["Web.File.FileList"],
      d = a["Data.Nullable"];

  a["Web.File.FileList"].item = function (k) {
    var f = b._item(k);

    return function (n) {
      return d.toMaybe(f(n));
    };
  };
})(PS);

(function (a) {
  a.fileReader = function () {
    return new FileReader();
  };

  a.result = function (b) {
    return function () {
      return b.result;
    };
  };

  a.readAsText = function (b) {
    return function (d) {
      return function () {
        d.readAsText(b);
      };
    };
  };
})(PS["Web.File.FileReader"] = PS["Web.File.FileReader"] || {});

(function (a) {
  a["Web.File.FileReader"] = a["Web.File.FileReader"] || {};
  var b = a["Web.File.FileReader"],
      d = a["Web.File.FileReader"];
  b.toEventTarget = a["Unsafe.Coerce"].unsafeCoerce;
  b.fileReader = d.fileReader;
  b.result = d.result;
  b.readAsText = d.readAsText;
})(PS);

(function (a) {
  a["Web.File.FileReader.Aff"] = a["Web.File.FileReader.Aff"] || {};
  var b = a["Web.File.FileReader.Aff"],
      d = a["Control.Monad.Except"],
      k = a["Data.Either"],
      f = a["Data.List.Types"],
      n = a["Data.Monoid"],
      p = a["Data.Show"],
      g = a["Effect.Aff"],
      q = a["Effect.Exception"],
      w = a.Foreign,
      z = a["Web.Event.EventTarget"],
      c = a["Web.File.FileReader"],
      h = a["Web.HTML.Event.EventTypes"];

  a = function (e) {
    return function (l) {
      return function (t) {
        return g.makeAff(function (u) {
          var D = function D(H) {
            return u(k.Right.create(H));
          };

          return function () {
            var H = c.fileReader(),
                I = c.toEventTarget(H),
                y = z.eventListener(function (M) {
              return u(k.Left.create(q.error("error")));
            })(),
                r = z.eventListener(function (M) {
              return function () {
                var F = c.result(H)();
                return k.either(function (E) {
                  return u(k.Left.create(q.error(p.show(f.showNonEmptyList(w.showForeignError))(E))));
                })(D)(d.runExcept(e(F)))();
              };
            })();
            z.addEventListener(h.error)(y)(!1)(I)();
            z.addEventListener(h.load)(r)(!1)(I)();
            l(t)(H)();
            return n.mempty(g.monoidCanceler);
          };
        });
      };
    };
  }(w.readString)(c.readAsText);

  b.readAsText = a;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var b = a["Metajelo.UI"],
      d = a.Affjax,
      k = a["Affjax.ResponseFormat"],
      f = a["Concur.Core.FRP"],
      n = a["Concur.Core.LiftWidget"],
      p = a["Concur.Core.Props"],
      g = a["Concur.Core.Types"],
      q = a["Concur.React.DOM"],
      w = a["Concur.React.Props"],
      z = a["Concur.React.Run"],
      c = a["Control.Alt"],
      h = a["Control.Applicative"],
      e = a["Control.Apply"],
      l = a["Control.Bind"],
      t = a["Control.Cofree"],
      u = a["Control.Monad.Error.Class"],
      D = a["Control.Monad.Except.Trans"],
      H = a["Control.Monad.Maybe.Trans"],
      I = a["Control.Monad.State"],
      y = a["Control.Monad.State.Class"],
      r = a["Control.Monad.State.Trans"],
      M = a["Control.Monad.Writer"],
      F = a["Control.Plus"],
      E = a["Data.Array"],
      J = a["Data.Array.NonEmpty"],
      N = a["Data.Array.NonEmpty.Internal"],
      R = a["Data.Bifunctor"],
      T = a["Data.Either"],
      L = a["Data.Enum"],
      O = a["Data.Foldable"],
      G = a["Data.Functor"],
      x = a["Data.Identity"],
      V = a["Data.List.NonEmpty"],
      A = a["Data.Maybe"],
      K = a["Data.Maybe.First"],
      C = a["Data.Monoid"],
      ha = a["Data.Newtype"],
      sa = a["Data.Semigroup"],
      za = a["Data.Show"],
      Ca = a["Data.String.Common"],
      ma = a["Data.String.NonEmpty.Internal"],
      v = a["Data.Symbol"],
      Aa = a["Data.Traversable"],
      Q = a["Data.Tuple"],
      ka = a["Data.UUID"],
      Ja = a["Data.Unfoldable"],
      Pa = a["Data.Unit"],
      Fa = a["Data.Void"],
      Ea = a["DataCite.JSON.Decode.Simple"],
      da = a["DataCite.Types.Common"],
      va = a.Effect,
      ca = a["Effect.Aff"],
      ja = a["Effect.Aff.Class"],
      ea = a["Effect.Class"],
      P = a["Effect.Class.Console"],
      ba = a["Effect.Exception"],
      oa = a["Effect.Now"],
      Ka = a["Effect.Unsafe"],
      Ha = a.Foreign,
      Ua = a.Global,
      S = a["Metajelo.CSS.Common.ClassNames"],
      Y = a["Metajelo.CSS.UI.ClassProps"],
      ra = a["Metajelo.CSS.UI.Util"],
      ua = a["Metajelo.CSS.Web.ClassProps"],
      fa = a["Metajelo.CSS.Web.Util"],
      U = a["Metajelo.FormUtil"],
      ia = a["Metajelo.Types"],
      xa = a["Metajelo.View"],
      Da = a["Metajelo.XPaths"],
      ta = a["Metajelo.XPaths.Read"],
      Oa = a["Metajelo.XPaths.Write"],
      La = a["Nonbili.DOM"],
      B = a.Option,
      wa = a["Record.Extra"],
      Qa = a["Text.URL.Validate"],
      Ya = a["Web.DOM.Document"],
      ab = a["Web.DOM.Element"],
      ib = a["Web.File.File"],
      jb = a["Web.File.FileList"],
      pb = a["Web.File.FileReader.Aff"],
      sb = a["Web.HTML"],
      bb = a["Web.HTML.HTMLDocument"],
      tb = a["Web.HTML.HTMLElement"],
      eb = a["Web.HTML.HTMLInputElement"],
      Ab = a["Web.HTML.Window"],
      cb = function cb(W) {
    return function (Z) {
      return function (na) {
        return function (la) {
          return function (qa) {
            return G.mapFlipped(A.functorMaybe)(B.get(W)(Z)(na)(la))(function (pa) {
              return I.execState(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "descs_on";
              }))()(v.SProxy.value)(new A.Just(qa))))(pa);
            });
          };
        };
      };
    };
  },
      vb = function vb(W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.title])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.titleHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
      return U.textInput(W);
    }));
  },
      Bb = function Bb(W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.titleList])(U.nonEmptyArrayView(vb)(W));
  },
      kb = function kb(W) {
    return function () {
      var Z = sb.window();
      Z = Ab.document(Z)();
      Z = bb.toDocument(Z);
      Z = Ya.createElement("a")(Z)();
      ab.setAttribute("download")("metajelo.xml")(Z)();
      ab.setAttribute("href")("data:text/plain;charset=utf-8," + W)(Z)();
      Z = tb.fromElement(Z);
      if (Z instanceof A.Just) Z = tb.click(Z.value0);else if (Z instanceof A.Nothing) Z = P.log(ea.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + W);else throw Error("Failed pattern match at Metajelo.UI (line 139, column 26 - line 143, column 18): " + [Z.constructor.name]);
      return Z;
    };
  },
      wb = function wb(W) {
    var Z = [da.ArXiv.value, da.DOI.value, da.URL.value];
    return U.menuSignal(da.boundedEnumIdentifierType)(U.isOptionIdentifierType)(Z)(W);
  },
      fb = function fb(W) {
    return function (Z) {
      return B.getWithDefault(W)()(B.empty);
    };
  },
      Cb = function Cb(W) {
    var Z = ma.fromString("urn:uuid:"),
        na = B.get(new v.IsSymbol(function () {
      return "identifier";
    }))()(v.SProxy.value)(W);
    return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(function () {
      if (na instanceof A.Just) return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(new A.Just(na.value0));
      if (na instanceof A.Nothing) return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(U.runEffectInit(ka.emptyUUID)(ka.genUUID))(function (la) {
        return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(l.bind(A.bindMaybe)(Z)(function (qa) {
          return l.bind(A.bindMaybe)(ma.fromString(ka.toString(la)))(function (pa) {
            return h.pure(A.applicativeMaybe)(sa.append(ma.semigroupNonEmptyString)(qa)(pa));
          });
        }));
      });
      throw Error("Failed pattern match at Metajelo.UI (line 865, column 15 - line 872, column 30): " + [na.constructor.name]);
    }())(function (la) {
      return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "identifier";
      }))()(v.SProxy.value)(la)))(function () {
        return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
          return "identifierType";
        }))()(v.SProxy.value)(new A.Just(da.URN.value)));
      }))(W));
    });
  },
      xb = function xb(W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.format])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.formatHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
      return U.textInput(W);
    }));
  },
      Db = function Db(W) {
    return function (Z) {
      return q.div_(t.shiftMapCofree(C.monoidArray))([Y.formatList])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.formatListHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("formatEle")(W)))(function () {
          return U.arrayView(xb)(Z);
        });
      }));
    };
  },
      Eb = function Eb(W) {
    return function () {
      return {
        lastModified: oa.nowDateTime(),
        date: W.date,
        identifier: W.identifier,
        relatedIdentifiers: W.relatedIdentifiers,
        supplementaryProducts: W.supplementaryProducts
      };
    };
  },
      Ia = function Ia(W) {
    return function (Z) {
      var na = A.Just.create(B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
        return "identifier";
      }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
        return "identifierType";
      }))(B.fromRecordOptionNil)()()()())()()()())())({
        identifier: Z.data.attributes.doi,
        identifierType: da.DOI.value
      })),
          la = fb(new v.IsSymbol(function () {
        return "locationOpts_opt";
      }))()(v.SProxy.value)(W),
          qa = I.execState(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "versioning";
      }))()(v.SProxy.value)(A.Just.create(A.isJust(Z.data.attributes.version)))))(la);
      la = O.intercalate(O.foldableArray)(C.monoidString)("\n\n")(G.map(G.functorArray)(function (db) {
        return db.description;
      })(Z.data.attributes.descriptions));
      var pa = A.Just.create(B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
        return "description";
      }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
        return "generalType";
      }))(B.fromRecordOptionNil)()()()())()()()())())({
        description: la,
        generalType: Z.data.attributes.types.resourceTypeGeneral
      })),
          ya = G.map(N.functorNonEmptyArray)(function (db) {
        return db.title;
      })(Z.data.attributes.titles),
          Na = G.map(N.functorNonEmptyArray)(function (db) {
        return db.name;
      })(Z.data.attributes.creators);
      la = fb(new v.IsSymbol(function () {
        return "basicMetadata_opt";
      }))()(v.SProxy.value)(W);
      var Ra = B.get(new v.IsSymbol(function () {
        return "creators";
      }))()(v.SProxy.value)(la),
          Za = A.maybe(Na)(function (db) {
        return sa.append(N.semigroupNonEmptyArray)(db)(Na);
      })(Ra);
      Ra = B.get(new v.IsSymbol(function () {
        return "titles";
      }))()(v.SProxy.value)(la);
      Ra = A.maybe(ya)(function (db) {
        return sa.append(N.semigroupNonEmptyArray)(db)(ya);
      })(Ra);
      var Ta = J.length(Ra),
          nb = J.length(Za),
          ob = I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "titles";
      }))()(v.SProxy.value)(new A.Just(Ra))))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
          return "_numTitles";
        }))()(v.SProxy.value)(new A.Just(Ta))))(function () {
          return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "creators";
          }))()(v.SProxy.value)(new A.Just(Za))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "_numCreators";
            }))()(v.SProxy.value)(new A.Just(nb))))(function () {
              return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "publicationYear";
              }))()(v.SProxy.value)(new A.Just(Z.data.attributes.publicationYear)));
            });
          });
        });
      }))(la);
      return I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "resourceID_opt";
      }))()(v.SProxy.value)(na)))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
          return "basicMetadata_opt";
        }))()(v.SProxy.value)(new A.Just(ob))))(function () {
          return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "format";
          }))()(v.SProxy.value)(new A.Just(Z.data.attributes.formats))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "resourceType_opt";
            }))()(v.SProxy.value)(pa)))(function () {
              return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(v.SProxy.value)(new A.Just(qa)));
            });
          });
        });
      }))(W);
    };
  },
      ub = function ub(W) {
    var Z = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "fundingStatementURL";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "missionStatementURL";
    }))(B.fromRecordOptionNil)()()()())()()()())())(W),
        na = new T.Right(W.missionStatementURL),
        la = new T.Right(W.fundingStatementURL);
    return I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(v.SProxy.value)(new A.Just(na))))(function () {
      return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(v.SProxy.value)(new A.Just(la))))(function () {
        return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
          return "descs_on";
        }))()(v.SProxy.value)(new A.Just(!0)));
      });
    }))(Z);
  },
      Fb = function Fb(W) {
    var Z = new T.Right(W.url);
    W = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "relationType";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "url";
    }))(B.fromRecordOptionNil)()()()())()()()())())(W);
    return I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
      return "url_Ei";
    }))()(v.SProxy.value)(new A.Just(Z))))(function () {
      return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "descs_on";
      }))()(v.SProxy.value)(new A.Just(!0)));
    }))(W);
  },
      Ma = function Ma(W) {
    if (W.policy instanceof ia.FreeTextPolicy) var Z = new A.Just(W.policy.value0);else if (W.policy instanceof ia.RefPolicy) Z = ma.fromString(Qa.urlToString(W.policy.value0));else throw Error("Failed pattern match at Metajelo.UI (line 538, column 20 - line 540, column 54): " + [W.policy.constructor.name]);
    var na = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "appliesToProduct";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "policy";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "policyType";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())())(W);
    return I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
      return "policy_str";
    }))()(v.SProxy.value)(Z)))(function () {
      return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "polPolType";
      }))()(v.SProxy.value)(A.Just.create(U.polPolTypeIs(W.policy)))))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
          return "policy_ei";
        }))()(v.SProxy.value)(A.Just.create(new T.Right(W.policy)))))(function () {
          return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "descs_on";
          }))()(v.SProxy.value)(new A.Just(!0)));
        });
      });
    }))(na);
  },
      yb = function yb(W) {
    return I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
      return "email_Ei";
    }))()(v.SProxy.value)(A.Just.create(new T.Right(W.emailAddress)))))(function () {
      return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "descs_on";
      }))()(v.SProxy.value)(new A.Just(!0)));
    }))(B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "contactType";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "emailAddress";
    }))(B.fromRecordOptionNil)()()()())()()()())())(W));
  },
      zb = function zb(W) {
    var Z = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionContact";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionID";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionName";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionPolicies";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionSustainability";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionType";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "superOrganizationName";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "versioning";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(W),
        na = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "identifier";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "identifierType";
    }))(B.fromRecordOptionNil)()()()())()()()())())(W.institutionID),
        la = yb(W.institutionContact),
        qa = ub(W.institutionSustainability),
        pa = G.map(N.functorNonEmptyArray)(Ma)(W.institutionPolicies),
        ya = J.length(W.institutionPolicies);
    return I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
      return "institutionID_opt";
    }))()(v.SProxy.value)(new A.Just(na))))(function () {
      return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "_numPolicies";
      }))()(v.SProxy.value)(new A.Just(ya))))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
          return "iSustain_opt";
        }))()(v.SProxy.value)(new A.Just(qa))))(function () {
          return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "institutionContact_opt";
          }))()(v.SProxy.value)(new A.Just(la))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "institutionPolicies_opt";
            }))()(v.SProxy.value)(new A.Just(pa))))(function () {
              return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "descs_on";
              }))()(v.SProxy.value)(new A.Just(!0)));
            });
          });
        });
      });
    }))(Z);
  },
      mb = function mb(W) {
    var Z = J.length(W.titles),
        na = J.length(W.creators);
    return I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
      return "_numTitles";
    }))()(v.SProxy.value)(new A.Just(Z))))(function () {
      return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "_numCreators";
      }))()(v.SProxy.value)(new A.Just(na)));
    }))(B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "creators";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "publicationYear";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "titles";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())())(W));
  },
      qb = function qb(W) {
    var Z = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "basicMetadata";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "format";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "location";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "resourceID";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "resourceType";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(W),
        na = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "description";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "generalType";
    }))(B.fromRecordOptionNil)()()()())()()()())())(W.resourceType),
        la = G.map(A.functorMaybe)(B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "identifier";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "identifierType";
    }))(B.fromRecordOptionNil)()()()())()()()())()))(W.resourceID),
        qa = G.map(A.functorMaybe)(Fb)(W.resourceMetadataSource),
        pa = zb(W.location),
        ya = mb(W.basicMetadata),
        Na = E.length(W.format);
    return I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(v.SProxy.value)(new A.Just(ya))))(function () {
      return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "resourceID_opt";
      }))()(v.SProxy.value)(la)))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
          return "resourceType_opt";
        }))()(v.SProxy.value)(new A.Just(na))))(function () {
          return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "_numFormats";
          }))()(v.SProxy.value)(new A.Just(Na))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(v.SProxy.value)(qa)))(function () {
              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(v.SProxy.value)(new A.Just(pa))))(function () {
                return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                  return "active";
                }))()(v.SProxy.value)(new A.Just(!0))))(function () {
                  return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                    return "descs_on";
                  }))()(v.SProxy.value)(new A.Just(!0)));
                });
              });
            });
          });
        });
      });
    }))(Z);
  },
      Mb = function Mb(W) {
    var Z = G.map(N.functorNonEmptyArray)(qb)(W.supplementaryProducts),
        na = G.map(N.functorNonEmptyArray)(B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "identifier";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "identifierType";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "relationType";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())()))(W.relatedIdentifiers),
        la = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "date";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "identifier";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "lastModified";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "supplementaryProducts";
    }))(B.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(W),
        qa = B.fromRecord(B.fromRecordAny(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "identifier";
    }))(B.fromRecordOptionCons(new v.IsSymbol(function () {
      return "identifierType";
    }))(B.fromRecordOptionNil)()()()())()()()())())(W.identifier),
        pa = J.length(W.supplementaryProducts),
        ya = J.length(W.relatedIdentifiers);
    return I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
      return "identifier_opt";
    }))()(v.SProxy.value)(new A.Just(qa))))(function () {
      return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
        return "date_Ei";
      }))()(v.SProxy.value)(A.Just.create(new T.Right(W.date)))))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
          return "_numRelIds";
        }))()(v.SProxy.value)(new A.Just(ya))))(function () {
          return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "relId_opts";
          }))()(v.SProxy.value)(new A.Just({
            active: !0,
            relids: na
          }))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "_numSupProds";
            }))()(v.SProxy.value)(new A.Just(pa))))(function () {
              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "supProd_opts";
              }))()(v.SProxy.value)(new A.Just({
                active: !0,
                sprods: Z
              }))))(function () {
                return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                  return "descs_on";
                }))()(v.SProxy.value)(new A.Just(!0)));
              });
            });
          });
        });
      });
    }))(la);
  },
      Jb = function () {
    var W = R.lmap(T.bifunctorEither)(function (na) {
      return ba.error("Error reading XML - please make sure it is well-formed.");
    }),
        Z = l.bind(g.bindWidget)(q.span(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([])([q.div_(g.widgetShiftMap)([Y.uploadDescr])(F.empty(g.widgetPlus(C.monoidArray))), q.input(n.widgetLiftWidget)([w._type("file"), G.map(p.functorProps)(U.evTargetElem)(w.onChange)])]))(function (na) {
      return l.bind(g.bindWidget)(ea.liftEffect(g.widgetMonadEff(C.monoidArray))(H.runMaybeT(l.bind(H.bindMaybeT(va.monadEffect))(na)(function (la) {
        return l.bind(H.bindMaybeT(va.monadEffect))(H.MaybeT(h.pure(va.applicativeEffect)(eb.fromElement(la))))(function (qa) {
          return l.bind(H.bindMaybeT(va.monadEffect))(H.MaybeT(eb.files(qa)))(function (pa) {
            return l.bind(H.bindMaybeT(va.monadEffect))(H.MaybeT(h.pure(va.applicativeEffect)(jb.item(0)(pa))))(function (ya) {
              return h.pure(H.applicativeMaybeT(va.monadEffect))(ib.toBlob(ya));
            });
          });
        });
      }))))(function (la) {
        if (la instanceof A.Nothing) return Z;
        if (la instanceof A.Just) return l.bind(g.bindWidget)(ja.liftAff(g.widgetMonadAff(C.monoidArray))(pb.readAsText(la.value0)))(function (qa) {
          return l.bind(g.bindWidget)(ea.liftEffect(g.widgetMonadEff(C.monoidArray))(D.runExceptT(l.bind(D.bindExceptT(va.monadEffect))(D.ExceptT(G.map(va.functorEffect)(W)(ba["try"](Da.getDefaultParseEnv(qa)))))(function (pa) {
            return D.ExceptT(ba["try"](ta.readRecord(pa)));
          }))))(function (pa) {
            if (pa instanceof T.Right) return h.pure(g.applicativeWidget)(pa.value0);

            if (pa instanceof T.Left) {
              var ya = pa.value0;
              pa = q.div(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([]);
              var Na = Z,
                  Ra = q.div_(g.widgetShiftMap)([ua.errorDisplayBox]),
                  Za = q.div_(g.widgetShiftMap)([]),
                  Ta = q.span(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([ua.errorDisplay]),
                  nb = q.text(n.widgetLiftWidget);
              ya = "Couldn't decode MetajeloXML: " + za.show(ba.showError)(ya);
              return pa([Na, Ra(Za(Ta([nb(ya)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 171, column 11 - line 173, column 37): " + [pa.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 164, column 7 - line 173, column 37): " + [la.constructor.name]);
      });
    });
    return f.loopW(g.widgetMonad)(B.empty)(function (na) {
      return q.div_(g.widgetShiftMap)([])(l.bind(g.bindWidget)(Z)(function (la) {
        return h.pure(g.applicativeWidget)(Mb(la));
      }));
    });
  }(),
      Nb = function Nb(W) {
    var Z = q.div_(g.widgetShiftMap)([ua.errorDisplayBox])(q.div_(g.widgetShiftMap)([])(q.span(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([ua.errorDisplay])([q.text(n.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        na = function na(la) {
      return function (qa) {
        var pa = function pa(ya) {
          return f.step(ya)(l.bind(g.bindWidget)(q.button_(g.widgetShiftMap)([Y.downloadBtn, w.onClick, w.disabled(Ca["null"](ya))])(q.text(n.widgetLiftWidget)("Download XML")))(function () {
            return l.bind(g.bindWidget)(ea.liftEffect(g.widgetMonadEff(C.monoidArray))(la))(function () {
              return h.pure(g.applicativeWidget)(pa(ya));
            });
          }));
        };

        return f.dyn(g.widgetMonad)(pa(qa));
      };
    };

    return q.div_(g.widgetShiftMap)([])(function () {
      var la = Ua.encodeURIComponent(W);
      return l.bind(g.bindWidget)(ea.liftEffect(g.widgetMonadEff(C.monoidArray))(kb(A.fromMaybe("")(la))))(function (qa) {
        return A.maybe(Z)(na(qa))(la);
      });
    }());
  },
      Gb = function Gb(W) {
    var Z = function Z(qa) {
      return function (pa) {
        return E["null"](pa) ? F.empty(g.widgetPlus(C.monoidArray)) : q.div_(g.widgetShiftMap)(qa)(q.ul(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([])(G.mapFlipped(G.functorArray)(pa)(function (ya) {
          return q.li_(g.widgetShiftMap)([])(q.text(n.widgetLiftWidget)(Ha.renderForeignError(ya)));
        })));
      };
    };

    if (W.dCiteTupMay instanceof A.Nothing) return F.empty(g.widgetPlus(C.monoidArray));

    if (W.dCiteTupMay instanceof A.Just) {
      var na = Z([Y.dataCiteNonFatal])(W.dCiteTupMay.value0.value1);
      if (W.dCiteTupMay.value0.value0 instanceof T.Left) var la = V.toUnfoldable(Ja.unfoldableArray)(W.dCiteTupMay.value0.value0.value0);else if (W.dCiteTupMay.value0.value0 instanceof T.Right) la = [];else throw Error("Failed pattern match at Metajelo.UI (line 293, column 21 - line 295, column 22): " + [W.dCiteTupMay.value0.value0.constructor.name]);
      Z = Z([Y.dataCiteFatal])(la);
      return q.div(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([])([q.p_(g.widgetShiftMap)([])(c.alt(g.widgetAlt(C.monoidArray))(c.alt(g.widgetAlt(C.monoidArray))(c.alt(g.widgetAlt(C.monoidArray))(c.alt(g.widgetAlt(C.monoidArray))(q.text(n.widgetLiftWidget)("For more information on the record for " + (W.doi + ", see ")))(U.tabLink("https://search.datacite.org/works/" + W.doi)(q.text(n.widgetLiftWidget)("DataCite"))))(q.text(n.widgetLiftWidget)(" or ")))(U.tabLink("https://dx.doi.org/" + W.doi)(q.text(n.widgetLiftWidget)("resolve the DOI"))))(q.text(n.widgetLiftWidget)("."))), q["br'"](n.widgetLiftWidget), Z, na]);
    }

    throw Error("Failed pattern match at Metajelo.UI (line 289, column 29 - line 308, column 8): " + [W.dCiteTupMay.constructor.name]);
  },
      m = function () {
    var W = ra.mjUiClassPfx + "dataCiteDOI_Input",
        Z = function Z(qa) {
      return function (pa) {
        pa = l.join(T.bindEither)(R.lmap(T.bifunctorEither)(d.XHRError.create)(pa));
        if (pa instanceof T.Left) return na(ba.error("GET /api response failed to decode: " + d.printError(pa.value0)));

        if (pa instanceof T.Right) {
          var ya = pa.value0.status;
          if (ya = 200 <= ya && 400 > ya) return h.pure(g.applicativeWidget)(new Q.Tuple(qa, A.Just.create(Ea.readRecordJSON(pa.value0.body))));
          if (!ya) return na(ba.error("Body undefined, status is: " + pa.value0.statusText));
          throw Error("Failed pattern match at Metajelo.UI (line 227, column 11 - line 229, column 96): " + [ya.constructor.name]);
        }

        throw Error("Failed pattern match at Metajelo.UI (line 220, column 10 - line 229, column 96): " + [pa.constructor.name]);
      };
    },
        na = function na(qa) {
      var pa = q.div(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([]),
          ya = la,
          Na = q.div_(g.widgetShiftMap)([ua.errorDisplayBox]),
          Ra = q.div_(g.widgetShiftMap)([]),
          Za = q.span(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([ua.errorDisplay]),
          Ta = q.text(n.widgetLiftWidget);
      qa = "In DataCite retrieval: " + za.show(ba.showError)(qa);
      return pa([ya, Na(Ra(Za([Ta(qa)])))]);
    },
        la = q.div_(g.widgetShiftMap)([])(l.discard(l.discardUnit)(g.bindWidget)(G["void"](g.functorWidget)(q.button_(g.widgetShiftMap)([w.onClick])(q.text(n.widgetLiftWidget)("Retrieve DataCite Record"))))(function () {
      return l.bind(g.bindWidget)(q.span(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([])([q.input(n.widgetLiftWidget)([w._id(W), w.placeholder("Input DOI here")]), e.applySecond(g.applyWidget)(q.button_(g.widgetShiftMap)([w.onClick])(q.text(n.widgetLiftWidget)("Retrieve")))(U.getInputTextLE(g.widgetMonadEff(C.monoidArray))(W)), G.voidRight(g.functorWidget)(A.Nothing.value)(q.button_(g.widgetShiftMap)([w.onClick])(q.text(n.widgetLiftWidget)("Cancel")))]))(function (qa) {
        if (qa instanceof A.Nothing) return la;

        if (qa instanceof A.Just) {
          var pa = Qa.parsePublicURL("https://api.datacite.org/dois/" + qa.value0);
          if (pa instanceof T.Left) return na(ba.error(pa.value0));
          if (pa instanceof T.Right) return l.bind(g.bindWidget)(ja.liftAff(g.widgetMonadAff(C.monoidArray))(u["try"](ca.monadErrorAff)(d.get(k.string)(Qa.urlToString(pa.value0)))))(function (ya) {
            return Z(qa.value0)(ya);
          });
          throw Error("Failed pattern match at Metajelo.UI (line 211, column 21 - line 215, column 36): " + [pa.constructor.name]);
        }

        throw Error("Failed pattern match at Metajelo.UI (line 209, column 7 - line 215, column 36): " + [qa.constructor.name]);
      });
    }));

    return f.loopW(g.widgetMonad)(new Q.Tuple("", A.Nothing.value))(function (qa) {
      return q.div_(g.widgetShiftMap)([])(la);
    });
  }(),
      gb = function gb(W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.creator])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.creatorHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
      return U.textInput(W);
    }));
  },
      lb = function lb(W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.creatorList])(U.nonEmptyArrayView(gb)(W));
  },
      Ib = function Ib(W) {
    return function (Z) {
      var na = G.map(G.functorArray)(function (pa) {
        return pa.tab;
      })(W),
          la = G.map(G.functorArray)(function (pa) {
        return pa.page;
      })(W),
          qa = q["div'"](g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([q.text(n.widgetLiftWidget)("No pages to show!")]);
      return function (pa) {
        return function (ya) {
          return function (Na) {
            return q.div(pa)(ya)([Y.sideBarGrid])([q.div(pa)(ya)([Y.sideBarMenu])([q.div(pa)(ya)([Y.sideBarCol])(Na)])]);
          };
        };
      }(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([q.nav(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([Y.sideBarNav])(function (pa) {
        return G.map(G.functorArray)(function (ya) {
          return l.discard(l.discardUnit)(g.bindWidget)(G["void"](g.functorWidget)(q.div(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([w.onClick, Y.sideBarTab])([G.map(g.functorWidget)(Fa.absurd)(Q.snd(ya))])))(function () {
            return h.pure(g.applicativeWidget)(Q.fst(ya));
          });
        })(E.zip(E.range(0)(E.length(pa)))(pa));
      }(na)), G.voidRight(g.functorWidget)(Z)(function (pa) {
        return A.fromMaybe(qa)(E.index(la)(pa));
      }(Z))]);
    };
  },
      Sb = function Sb(W) {
    return function (Z) {
      return f.loopW(g.widgetMonad)(Z)(Ib(W));
    };
  },
      Qb = function Qb(W) {
    var Z = function Z(na) {
      return f.step(na)(l.bind(g.bindWidget)(q.button_(g.widgetShiftMap)([Y.clipBtn, w.onClick, w.disabled(Ca["null"](na))])(q.text(n.widgetLiftWidget)("Copy HTML to Clipboard")))(function () {
        return l.bind(g.bindWidget)(ea.liftEffect(g.widgetMonadEff(C.monoidArray))(U.getFirstElemByClass(fa.prependWebPfx(S.record))))(function (la) {
          return l.bind(g.bindWidget)(ea.liftEffect(g.widgetMonadEff(C.monoidArray))(Aa.sequence(Aa.traversableMaybe)(va.applicativeEffect)(G.map(A.functorMaybe)(La.innerHTML)(la))))(function (qa) {
            var pa = l.bind(g.bindWidget),
                ya = ea.liftEffect(g.widgetMonadEff(C.monoidArray));
            if (qa instanceof A.Just) qa = La.copyToClipboard(qa.value0);else if (qa instanceof A.Nothing) qa = h.pure(va.applicativeEffect)(Pa.unit);else throw Error("Failed pattern match at Metajelo.UI (line 335, column 25 - line 337, column 29): " + [qa.constructor.name]);
            return pa(ya(qa))(function () {
              return h.pure(g.applicativeWidget)(Z(na));
            });
          });
        });
      }));
    };

    return f.dyn(g.widgetMonad)(Z(W));
  },
      Tb = function Tb(W) {
    var Z = function Z(na) {
      return f.step(na)(l.bind(g.bindWidget)(q.button_(g.widgetShiftMap)([Y.clipBtn, w.onClick, w.disabled(Ca["null"](na))])(q.text(n.widgetLiftWidget)("Copy XML to Clipboard")))(function () {
        return l.bind(g.bindWidget)(ea.liftEffect(g.widgetMonadEff(C.monoidArray))(La.copyToClipboard(na)))(function () {
          return h.pure(g.applicativeWidget)(Z(na));
        });
      }));
    };

    return f.dyn(g.widgetMonad)(Z(W));
  },
      Ub = function Ub(W) {
    var Z = function Z(na) {
      return A.maybe(h.pure(va.applicativeEffect)(""))(Oa.recordToString)(na);
    };

    return l.bind(g.bindWidget)(ea.liftEffect(g.widgetMonadEff(C.monoidArray))(Aa.sequence(Aa.traversableMaybe)(va.applicativeEffect)(G.map(A.functorMaybe)(Eb)(W))))(function (na) {
      return q.div(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([Y.recPreview])([q.div_(g.widgetShiftMap)([Y.recPreviewHeader])(F.empty(g.widgetPlus(C.monoidArray))), l.bind(g.bindWidget)(ea.liftEffect(g.widgetMonadEff(C.monoidArray))(Z(na)))(function (la) {
        return q.div(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([Y.previewButtons])([Nb(la), Tb(la), Qb(la)]);
      }), q["br'"](n.widgetLiftWidget), O.fold(O.foldableMaybe)(g.widgetMonoid(C.monoidArray))(G.map(A.functorMaybe)(xa.mkRecordWidget)(na))]);
    });
  },
      Vb = function Vb(W) {
    return function (Z) {
      return function (na) {
        var la = {
          tab: q.text(n.widgetLiftWidget)("Preview"),
          page: Ub(W)
        },
            qa = {
          tab: q.text(n.widgetLiftWidget)("DataCite Retrieval"),
          page: O.oneOf(O.foldableArray)(g.widgetPlus(C.monoidArray))(G.map(G.functorArray)(Gb)(Z))
        };
        la = [la, qa];
        return q.div_(t.shiftMapCofree(C.monoidArray))([Y.sideBar])(Sb(la)(na));
      };
    };
  },
      Wb = function Wb(W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.sustainability])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.sustainabilityHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
      return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.span_(t.shiftMapCofree(C.monoidArray))([Y.missionStatement])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.missionStatementHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
        return U.urlInput(B.getWithDefault(new v.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(new T.Left(""))(v.SProxy.value)(W));
      })))(function (Z) {
        var na = T.hush(Z);
        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.span_(t.shiftMapCofree(C.monoidArray))([Y.fundingStatement])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.fundingStatementHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
          return U.urlInput(B.getWithDefault(new v.IsSymbol(function () {
            return "fundingUrl_Ei";
          }))()(new T.Left(""))(v.SProxy.value)(W));
        })))(function (la) {
          var qa = T.hush(la);
          return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "missionUrl_Ei";
          }))()(v.SProxy.value)(new A.Just(Z))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "missionStatementURL";
            }))()(v.SProxy.value)(na)))(function () {
              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "fundingUrl_Ei";
              }))()(v.SProxy.value)(new A.Just(la))))(function () {
                return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                  return "fundingStatementURL";
                }))()(v.SProxy.value)(qa));
              });
            });
          }))(W));
        });
      });
    }));
  },
      Rb = function Rb(W) {
    return function (Z) {
      return q.div_(t.shiftMapCofree(C.monoidArray))([Y.resourceType])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.resourceTypeHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("resourceTypeEle")(W)))(function () {
          return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("resourceTypeSTyp")(W)))(function () {
            return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.resourceTypeGen])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.resourceTypeGenHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
              return U.menuSignal(da.boundedEnumResourceTypeGeneral)(U.isOptionResourceTypeGeneral)([])(B.get(new v.IsSymbol(function () {
                return "generalType";
              }))()(v.SProxy.value)(Z));
            })))(function (na) {
              return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.resourceTypeDescr])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.resourceTypeDescrHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
                return U.textInput(l.join(A.bindMaybe)(G.map(A.functorMaybe)(ma.fromString)(B.get(new v.IsSymbol(function () {
                  return "description";
                }))()(v.SProxy.value)(Z))));
              })))(function (la) {
                return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                  return "description";
                }))()(v.SProxy.value)(G.map(A.functorMaybe)(ma.toString)(la))))(function () {
                  return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                    return "generalType";
                  }))()(v.SProxy.value)(na));
                }))(Z));
              });
            });
          });
        });
      }));
    };
  },
      X = function X(W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.resourceMDSource])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.resourceMDSourceHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
      var Z = B.getWithDefault(new v.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(v.SProxy.value)(W);
      return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.url])(U.urlInput(B.getWithDefault(new v.IsSymbol(function () {
        return "url_Ei";
      }))()(new T.Left(""))(v.SProxy.value)(W))))(function (na) {
        var la = T.hush(na);
        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.relType])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([Y.relTypeHeader])(F.empty(F.plusArray))))(function () {
          return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("relationTypeSTyp")(Z)))(function () {
            return U.menuSignal(da.boundedEnumRelationType)(U.isOptionRelationType)([])(B.get(new v.IsSymbol(function () {
              return "relationType";
            }))()(v.SProxy.value)(W));
          });
        })))(function (qa) {
          return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "url_Ei";
          }))()(v.SProxy.value)(new A.Just(na))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "url";
            }))()(v.SProxy.value)(la)))(function () {
              return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "relationType";
              }))()(v.SProxy.value)(qa));
            });
          }))(W));
        });
      });
    }));
  },
      aa = function aa(W) {
    var Z = A.fromMaybe(B.empty)(W);
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.relatedId])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.relatedIdHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
      return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.id])(U.textInput(B.get(new v.IsSymbol(function () {
        return "identifier";
      }))()(v.SProxy.value)(Z))))(function (na) {
        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.idType])(wb(B.get(new v.IsSymbol(function () {
          return "identifierType";
        }))()(v.SProxy.value)(Z))))(function (la) {
          return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.relType])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.relTypeHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
            return U.menuSignal(da.boundedEnumRelationType)(U.isOptionRelationType)([])(B.get(new v.IsSymbol(function () {
              return "relationType";
            }))()(v.SProxy.value)(Z));
          })))(function (qa) {
            return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(A.Just.create(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "identifier";
            }))()(v.SProxy.value)(na)))(function () {
              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "identifierType";
              }))()(v.SProxy.value)(la)))(function () {
                return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                  return "relationType";
                }))()(v.SProxy.value)(qa));
              });
            }))(Z)));
          });
        });
      });
    }));
  },
      Ga = function Ga(W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.relatedIds])(function () {
      var Z = A.maybe(!0)(function (na) {
        return na.active;
      })(Q.snd(W));
      return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(U.collapsibleS([S.relatedIdsHeader])(Z))(function (na) {
        var la = na ? [] : [w.style({
          display: "none"
        })];
        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))(E.cons(Y.relatedIdList)(la))(U.nonEmptyArrayView(aa)(new Q.Tuple(Q.fst(W), G.map(A.functorMaybe)(function (qa) {
          return qa.relids;
        })(Q.snd(W))))))(function (qa) {
          return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(new Q.Tuple(Q.fst(qa), G.mapFlipped(A.functorMaybe)(Q.snd(qa))(function (pa) {
            return {
              active: na,
              relids: pa
            };
          })));
        });
      });
    }());
  },
      Ba = function Ba(W) {
    var Z = A.fromMaybe(B.empty)(W);
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.institutionPolicy])(function () {
      var na = A.fromMaybe(!0)(G.map(A.functorMaybe)(B.getWithDefault(new v.IsSymbol(function () {
        return "active";
      }))()(!0)(v.SProxy.value))(W));
      return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(U.collapsibleS([S.institutionPolicyHeader])(na))(function (la) {
        var qa = la ? [] : [w.style({
          display: "none"
        })];
        return q.div_(t.shiftMapCofree(C.monoidArray))(qa)(function () {
          var pa = B.getWithDefault(new v.IsSymbol(function () {
            return "descs_on";
          }))()(!0)(v.SProxy.value)(Z);
          return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.policy])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.policyHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
            return U.menuSignal(U.boundedEnumPolPolType)(U.isOptionPolPolType)([])(A.Just.create(B.getWithDefault(new v.IsSymbol(function () {
              return "polPolType";
            }))()(U.FreeTextPolicy.value)(v.SProxy.value)(Z)));
          })))(function (ya) {
            var Na = A.fromMaybe(U.FreeTextPolicy.value)(ya);
            return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.policy])(U.textInput(B.get(new v.IsSymbol(function () {
              return "policy_str";
            }))()(v.SProxy.value)(Z))))(function (Ra) {
              var Za = U.checkPolicy(Na)(A.maybe("")(ma.toString)(Ra)),
                  Ta = l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray))),
                  nb = f.display;
              if (Za instanceof T.Right) var ob = C.mempty(g.widgetMonoid(C.monoidArray));else if (Za instanceof T.Left) ob = U.errorDisplay(za.showString)(new A.Just(Za.value0));else throw Error("Failed pattern match at Metajelo.UI (line 1032, column 15 - line 1034, column 42): " + [Za.constructor.name]);
              return Ta(nb.call(f, ob))(function () {
                var db = T.hush(Za);
                return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.policyType])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.policyTypeHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
                  return U.menuSignal(L.boundedEnumMaybe(ia.smallBoundedPolicyType)(ia.boundedEnumPolicyType))(U.isOptionMaybePolicyType)([])(B.get(new v.IsSymbol(function () {
                    return "policyType";
                  }))()(v.SProxy.value)(Z));
                })))(function (Hb) {
                  return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.applies])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.appliesHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
                    return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("appliesToProductAttr")(pa)))(function () {
                      return U.menuSignal(L.boundedEnumMaybe(L.smallBoundedBoolean)(L.boundedEnumBoolean))(U.isOptionMaybeBoolean)([])(B.get(new v.IsSymbol(function () {
                        return "appliesToProduct";
                      }))()(v.SProxy.value)(Z));
                    });
                  })))(function (Pb) {
                    return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(A.Just.create(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                      return "polPolType";
                    }))()(v.SProxy.value)(new A.Just(Na))))(function () {
                      return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                        return "policy_str";
                      }))()(v.SProxy.value)(Ra)))(function () {
                        return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                          return "policy_ei";
                        }))()(v.SProxy.value)(new A.Just(Za))))(function () {
                          return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                            return "policy";
                          }))()(v.SProxy.value)(db)))(function () {
                            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                              return "policyType";
                            }))()(v.SProxy.value)(Hb)))(function () {
                              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                return "appliesToProduct";
                              }))()(v.SProxy.value)(Pb)))(function () {
                                return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                  return "active";
                                }))()(v.SProxy.value)(new A.Just(la)));
                              });
                            });
                          });
                        });
                      });
                    }))(Z)));
                  });
                });
              });
            });
          });
        }());
      });
    }());
  },
      Va = function Va(W) {
    return function (Z) {
      var na = G.mapFlipped(A.functorMaybe)(Q.snd(Z))(function (la) {
        return G.mapFlipped(N.functorNonEmptyArray)(la)(function (qa) {
          return I.execState(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "descs_on";
          }))()(v.SProxy.value)(new A.Just(W))))(qa);
        });
      });
      return q.div_(t.shiftMapCofree(C.monoidArray))([Y.institutionPolicies])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.institutionPoliciesHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("institutionPoliciesEle")(W)))(function () {
          return U.nonEmptyArrayView(Ba)(new Q.Tuple(Q.fst(Z), na));
        });
      }));
    };
  },
      $a = function $a(W) {
    return function (Z) {
      return q.div_(t.shiftMapCofree(C.monoidArray))([Y.identifier])(l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.id])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.idHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
        return U.textInput(B.get(new v.IsSymbol(function () {
          return "identifier";
        }))()(v.SProxy.value)(Z));
      })))(function (na) {
        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.idType])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.idTypeHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
          return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("identifierTypeSTyp")(W)))(function () {
            return wb(B.get(new v.IsSymbol(function () {
              return "identifierType";
            }))()(v.SProxy.value)(Z));
          });
        })))(function (la) {
          return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "identifier";
          }))()(v.SProxy.value)(na)))(function () {
            return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "identifierType";
            }))()(v.SProxy.value)(la));
          }))(Z));
        });
      }));
    };
  },
      Wa = function Wa(W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.institutionContact])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.institutionContactHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
      return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.contactEmail])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.contactEmailHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
        return U.emailInput(B.getWithDefault(new v.IsSymbol(function () {
          return "email_Ei";
        }))()(new T.Left(""))(v.SProxy.value)(W));
      })))(function (Z) {
        var na = T.hush(Z);
        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.contactType])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.contactTypeHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
          return U.menuSignal(L.boundedEnumMaybe(ia.smallBoundedInstitutionContactType)(ia.boundedEnumInstitutionContactType))(U.isOptionMaybeInstitutionContactType)([])(B.get(new v.IsSymbol(function () {
            return "contactType";
          }))()(v.SProxy.value)(W));
        })))(function (la) {
          return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "email_Ei";
          }))()(v.SProxy.value)(new A.Just(Z))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "emailAddress";
            }))()(v.SProxy.value)(na)))(function () {
              return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "contactType";
              }))()(v.SProxy.value)(la));
            });
          }))(W));
        });
      });
    }));
  },
      hb = function hb(W) {
    var Z = A.fromMaybe(B.empty)(W);
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.location])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.locationHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
      var na = B.getWithDefault(new v.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(v.SProxy.value)(Z);
      return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("locationEle")(na)))(function () {
        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([])(q.span_(t.shiftMapCofree(C.monoidArray))([Y.institutionId])($a(na)(fb(new v.IsSymbol(function () {
          return "institutionID_opt";
        }))()(v.SProxy.value)(Z)))))(function (la) {
          var qa = B.getAll(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
            return "identifier";
          }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
            return "identifierType";
          }))()()()()(B.getAllOptionNil))))(la);
          return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.institutionName])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.institutionNameHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
            return U.textInput(B.get(new v.IsSymbol(function () {
              return "institutionName";
            }))()(v.SProxy.value)(Z));
          })))(function (pa) {
            return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.institutionType])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.institutionTypeHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
              return U.menuSignal(ia.boundedEnumInstitutionType)(U.isOptionInstitutionType)([])(B.get(new v.IsSymbol(function () {
                return "institutionType";
              }))()(v.SProxy.value)(Z));
            })))(function (ya) {
              return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q["br'"](n.widgetLiftWidget)))(function () {
                return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.superOrg])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.superOrgHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
                  return U.textInput(l.join(A.bindMaybe)(B.get(new v.IsSymbol(function () {
                    return "superOrganizationName";
                  }))()(v.SProxy.value)(Z)));
                })))(function (Na) {
                  return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Wa(fb(new v.IsSymbol(function () {
                    return "institutionContact_opt";
                  }))()(v.SProxy.value)(Z)))(function (Ra) {
                    var Za = B.getSubset()()(wa.consKeys(new v.IsSymbol(function () {
                      return "contactType";
                    }))(wa.consKeys(new v.IsSymbol(function () {
                      return "emailAddress";
                    }))(wa.nilKeys)))(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                      return "contactType";
                    }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                      return "emailAddress";
                    }))()()()()(B.getAllOptionNil))))(Ra);
                    return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Wb(fb(new v.IsSymbol(function () {
                      return "iSustain_opt";
                    }))()(v.SProxy.value)(Z)))(function (Ta) {
                      var nb = B.getSubset()()(wa.consKeys(new v.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))(wa.consKeys(new v.IsSymbol(function () {
                        return "missionStatementURL";
                      }))(wa.nilKeys)))(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                        return "missionStatementURL";
                      }))()()()()(B.getAllOptionNil))))(Ta);
                      return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Va(na)(new Q.Tuple(B.getWithDefault(new v.IsSymbol(function () {
                        return "_numPolicies";
                      }))()(1)(v.SProxy.value)(Z), B.get(new v.IsSymbol(function () {
                        return "institutionPolicies_opt";
                      }))()(v.SProxy.value)(Z))))(function (ob) {
                        var db = Q.fst(ob),
                            Hb = Q.snd(ob),
                            Pb = l.join(A.bindMaybe)(G.map(A.functorMaybe)(Aa.sequence(N.traversableNonEmptyArray)(A.applicativeMaybe))(G.map(A.functorMaybe)(G.map(N.functorNonEmptyArray)(B.getSubset()()(wa.consKeys(new v.IsSymbol(function () {
                          return "appliesToProduct";
                        }))(wa.consKeys(new v.IsSymbol(function () {
                          return "policy";
                        }))(wa.consKeys(new v.IsSymbol(function () {
                          return "policyType";
                        }))(wa.nilKeys))))(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                          return "appliesToProduct";
                        }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                          return "policy";
                        }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                          return "policyType";
                        }))()()()()(B.getAllOptionNil)))))))(Hb)));
                        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.versioning])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.versioningHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
                          return U.checkBoxS(B.getWithDefault(new v.IsSymbol(function () {
                            return "versioning";
                          }))()(!1)(v.SProxy.value)(Z));
                        })))(function (Yb) {
                          return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                            return "institutionID_opt";
                          }))()(v.SProxy.value)(new A.Just(la))))(function () {
                            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                              return "institutionID";
                            }))()(v.SProxy.value)(qa)))(function () {
                              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                return "institutionName";
                              }))()(v.SProxy.value)(pa)))(function () {
                                return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                  return "institutionType";
                                }))()(v.SProxy.value)(ya)))(function () {
                                  return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                    return "superOrganizationName";
                                  }))()(v.SProxy.value)(new A.Just(Na))))(function () {
                                    return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                      return "institutionContact_opt";
                                    }))()(v.SProxy.value)(new A.Just(Ra))))(function () {
                                      return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                        return "institutionContact";
                                      }))()(v.SProxy.value)(Za)))(function () {
                                        return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                          return "iSustain_opt";
                                        }))()(v.SProxy.value)(new A.Just(Ta))))(function () {
                                          return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                            return "institutionSustainability";
                                          }))()(v.SProxy.value)(nb)))(function () {
                                            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                              return "_numPolicies";
                                            }))()(v.SProxy.value)(new A.Just(db))))(function () {
                                              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                                return "institutionPolicies_opt";
                                              }))()(v.SProxy.value)(Hb)))(function () {
                                                return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                                  return "institutionPolicies";
                                                }))()(v.SProxy.value)(Pb)))(function () {
                                                  return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                                    return "versioning";
                                                  }))()(v.SProxy.value)(new A.Just(Yb))))(function () {
                                                    return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                                      return "descs_on";
                                                    }))()(v.SProxy.value)(new A.Just(na)));
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
                          }))(Z)))(function (Xb) {
                            return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(new A.Just(Xb));
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
    }));
  },
      Sa = function Sa(W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.basicMetadata])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.basicMetadataHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
      return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Bb(new Q.Tuple(B.getWithDefault(new v.IsSymbol(function () {
        return "_numTitles";
      }))()(1)(v.SProxy.value)(W), B.get(new v.IsSymbol(function () {
        return "titles";
      }))()(v.SProxy.value)(W))))(function (Z) {
        var na = Q.fst(Z),
            la = Q.snd(Z);
        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(lb(new Q.Tuple(B.getWithDefault(new v.IsSymbol(function () {
          return "_numCreators";
        }))()(1)(v.SProxy.value)(W), B.get(new v.IsSymbol(function () {
          return "creators";
        }))()(v.SProxy.value)(W))))(function (qa) {
          var pa = Q.fst(qa),
              ya = Q.snd(qa);
          return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.pubyear])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.pubyearHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
            return U.natInput(B.get(new v.IsSymbol(function () {
              return "publicationYear";
            }))()(v.SProxy.value)(W));
          })))(function (Na) {
            return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
              return "titles";
            }))()(v.SProxy.value)(la)))(function () {
              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "_numTitles";
              }))()(v.SProxy.value)(new A.Just(na))))(function () {
                return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                  return "creators";
                }))()(v.SProxy.value)(ya)))(function () {
                  return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                    return "_numCreators";
                  }))()(v.SProxy.value)(new A.Just(pa))))(function () {
                    return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                      return "publicationYear";
                    }))()(v.SProxy.value)(Na));
                  });
                });
              });
            }))(W));
          });
        });
      });
    }));
  },
      Xa = function Xa(W) {
    var Z = A.fromMaybe(B.empty)(W);
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.product])(function () {
      var na = A.fromMaybe(!0)(G.map(A.functorMaybe)(B.getWithDefault(new v.IsSymbol(function () {
        return "active";
      }))()(!0)(v.SProxy.value))(W));
      return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(U.collapsibleS([S.productHeader])(na))(function (la) {
        var qa = la ? [] : [w.style({
          display: "none"
        })];
        return q.div_(t.shiftMapCofree(C.monoidArray))(qa)(l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(m)(function (pa) {
          var ya = G.map(A.functorMaybe)(function () {
            var Na = ha.unwrap(Ea.newtypeJSONWithErr);
            return function (Ra) {
              return M.runWriter(Na(Ra));
            };
          }())(pa.value1);
          return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(function () {
            if (ya instanceof A.Nothing) return Z;

            if (ya instanceof A.Just) {
              if (ya.value0.value0 instanceof T.Right) return Ia(Z)(ya.value0.value0.value0);
              if (ya.value0.value0 instanceof T.Left) return Z;
              throw Error("Failed pattern match at Metajelo.UI (line 687, column 49 - line 689, column 27): " + [ya.value0.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 685, column 23 - line 689, column 27): " + [ya.constructor.name]);
          }()))(function (Na) {
            var Ra = {
              doi: pa.value0,
              dCiteTupMay: ya
            },
                Za = function () {
              return A.isJust(ya) ? Ra : B.getWithDefault(new v.IsSymbol(function () {
                return "dataCiteState";
              }))()(Ra)(v.SProxy.value)(Na);
            }(),
                Ta = B.getWithDefault(new v.IsSymbol(function () {
              return "descs_on";
            }))()(!0)(v.SProxy.value)(Na);

            return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("supplementaryProductEle")(Ta)))(function () {
              return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Sa(fb(new v.IsSymbol(function () {
                return "basicMetadata_opt";
              }))()(v.SProxy.value)(Na)))(function (nb) {
                var ob = B.getSubset()()(wa.consKeys(new v.IsSymbol(function () {
                  return "creators";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "publicationYear";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "titles";
                }))(wa.nilKeys))))(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "creators";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "publicationYear";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "titles";
                }))()()()()(B.getAllOptionNil)))))(nb);
                return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.resourceId])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.resourceIdHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
                  return $a(Ta)(fb(new v.IsSymbol(function () {
                    return "resourceID_opt";
                  }))()(v.SProxy.value)(Na));
                })))(function (db) {
                  var Hb = B.getAll(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                    return "identifier";
                  }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                    return "identifierType";
                  }))()()()()(B.getAllOptionNil))))(db);
                  return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Rb(Ta)(fb(new v.IsSymbol(function () {
                    return "resourceType_opt";
                  }))()(v.SProxy.value)(Na)))(function (Pb) {
                    var Yb = B.getSubset()()(wa.consKeys(new v.IsSymbol(function () {
                      return "description";
                    }))(wa.consKeys(new v.IsSymbol(function () {
                      return "generalType";
                    }))(wa.nilKeys)))(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                      return "description";
                    }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                      return "generalType";
                    }))()()()()(B.getAllOptionNil))))(Pb);
                    return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Db(Ta)(new Q.Tuple(B.getWithDefault(new v.IsSymbol(function () {
                      return "_numFormats";
                    }))()(0)(v.SProxy.value)(Na), B.getWithDefault(new v.IsSymbol(function () {
                      return "format";
                    }))()([])(v.SProxy.value)(Na))))(function (Xb) {
                      var ac = Q.fst(Xb),
                          bc = Q.snd(Xb);
                      return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(X(A.fromMaybe(B.empty)(cb(new v.IsSymbol(function () {
                        return "resMdsOpts_opt";
                      }))()(v.SProxy.value)(Na)(Ta))))(function (Zb) {
                        var cc = B.getSubset()()(wa.consKeys(new v.IsSymbol(function () {
                          return "relationType";
                        }))(wa.consKeys(new v.IsSymbol(function () {
                          return "url";
                        }))(wa.nilKeys)))(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                          return "relationType";
                        }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                          return "url";
                        }))()()()()(B.getAllOptionNil))))(Zb);
                        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(hb(cb(new v.IsSymbol(function () {
                          return "locationOpts_opt";
                        }))()(v.SProxy.value)(Na)(Ta)))(function ($b) {
                          var dc = l.join(A.bindMaybe)(G.map(A.functorMaybe)(B.getSubset()()(wa.consKeys(new v.IsSymbol(function () {
                            return "institutionContact";
                          }))(wa.consKeys(new v.IsSymbol(function () {
                            return "institutionID";
                          }))(wa.consKeys(new v.IsSymbol(function () {
                            return "institutionName";
                          }))(wa.consKeys(new v.IsSymbol(function () {
                            return "institutionPolicies";
                          }))(wa.consKeys(new v.IsSymbol(function () {
                            return "institutionSustainability";
                          }))(wa.consKeys(new v.IsSymbol(function () {
                            return "institutionType";
                          }))(wa.consKeys(new v.IsSymbol(function () {
                            return "superOrganizationName";
                          }))(wa.consKeys(new v.IsSymbol(function () {
                            return "versioning";
                          }))(wa.nilKeys)))))))))(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                            return "institutionContact";
                          }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                            return "institutionID";
                          }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                            return "institutionName";
                          }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                            return "institutionPolicies";
                          }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                            return "institutionSustainability";
                          }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                            return "institutionType";
                          }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                            return "superOrganizationName";
                          }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                            return "versioning";
                          }))()()()()(B.getAllOptionNil)))))))))))($b));
                          return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(A.Just.create(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                            return "basicMetadata_opt";
                          }))()(v.SProxy.value)(new A.Just(nb))))(function () {
                            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                              return "basicMetadata";
                            }))()(v.SProxy.value)(ob)))(function () {
                              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                return "resourceID_opt";
                              }))()(v.SProxy.value)(new A.Just(db))))(function () {
                                return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                  return "resourceID";
                                }))()(v.SProxy.value)(new A.Just(Hb))))(function () {
                                  return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                    return "resourceType_opt";
                                  }))()(v.SProxy.value)(new A.Just(Pb))))(function () {
                                    return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                      return "resourceType";
                                    }))()(v.SProxy.value)(Yb)))(function () {
                                      return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                        return "_numFormats";
                                      }))()(v.SProxy.value)(new A.Just(ac))))(function () {
                                        return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                          return "format";
                                        }))()(v.SProxy.value)(new A.Just(bc))))(function () {
                                          return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                            return "resMdsOpts_opt";
                                          }))()(v.SProxy.value)(new A.Just(Zb))))(function () {
                                            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                              return "resourceMetadataSource";
                                            }))()(v.SProxy.value)(new A.Just(cc))))(function () {
                                              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                                return "locationOpts_opt";
                                              }))()(v.SProxy.value)($b)))(function () {
                                                return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                                  return "location";
                                                }))()(v.SProxy.value)(dc)))(function () {
                                                  return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                                    return "dataCiteState";
                                                  }))()(v.SProxy.value)(new A.Just(Za))))(function () {
                                                    return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                                      return "active";
                                                    }))()(v.SProxy.value)(new A.Just(la))))(function () {
                                                      return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                                        return "descs_on";
                                                      }))()(v.SProxy.value)(new A.Just(Ta)));
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
                            });
                          }))(Na)));
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        }));
      });
    }());
  },
      rb = function rb(W) {
    return function (Z) {
      var na = G.mapFlipped(A.functorMaybe)(Q.snd(Z))(function (la) {
        return G.mapFlipped(N.functorNonEmptyArray)(la.sprods)(function (qa) {
          return I.execState(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
            return "descs_on";
          }))()(v.SProxy.value)(new A.Just(W))))(qa);
        });
      });
      return q.div_(t.shiftMapCofree(C.monoidArray))([Y.products])(function () {
        var la = A.maybe(!0)(function (qa) {
          return qa.active;
        })(Q.snd(Z));
        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(U.collapsibleS([S.productsHeader])(la))(function (qa) {
          var pa = qa ? [] : [w.style({
            display: "none"
          })];
          return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("supplementaryProductsEle")(W)))(function () {
            return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))(E.cons(Y.productList)(pa))(U.nonEmptyArrayView(Xa)(new Q.Tuple(Q.fst(Z), na))))(function (ya) {
              return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(new Q.Tuple(Q.fst(ya), G.mapFlipped(A.functorMaybe)(Q.snd(ya))(function (Na) {
                return {
                  active: qa,
                  sprods: Na
                };
              })));
            });
          });
        });
      }());
    };
  },
      Ob = function Ob(W) {
    var Z = B.getWithDefault(new v.IsSymbol(function () {
      return "descs_on";
    }))()(!0)(v.SProxy.value)(W);
    return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("recordEle")(Z)))(function () {
      return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("recordTypeCTyp")(Z)))(function () {
        return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Cb(fb(new v.IsSymbol(function () {
          return "identifier_opt";
        }))()(v.SProxy.value)(W)))(function (na) {
          var la = B.getAll(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
            return "identifier";
          }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
            return "identifierType";
          }))()()()()(B.getAllOptionNil))))(na);
          B.getWithDefault(new v.IsSymbol(function () {
            return "date_Ei";
          }))()(new T.Left(""))(v.SProxy.value)(W);
          return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.date])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.dateHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
            return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(U.mkDesc("dateEle")(Z)))(function () {
              return U.dateInput(B.getWithDefault(new v.IsSymbol(function () {
                return "date_Ei";
              }))()(new T.Left(""))(v.SProxy.value)(W));
            });
          })))(function (qa) {
            var pa = T.hush(qa);
            return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Ga(new Q.Tuple(B.getWithDefault(new v.IsSymbol(function () {
              return "_numRelIds";
            }))()(0)(v.SProxy.value)(W), B.get(new v.IsSymbol(function () {
              return "relId_opts";
            }))()(v.SProxy.value)(W))))(function (ya) {
              var Na = Q.fst(ya),
                  Ra = Q.snd(ya),
                  Za = l.join(A.bindMaybe)(G.map(A.functorMaybe)(Aa.sequence(N.traversableNonEmptyArray)(A.applicativeMaybe))(G.map(A.functorMaybe)(G.map(N.functorNonEmptyArray)(B.getAll(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                return "identifier";
              }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                return "identifierType";
              }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                return "relationType";
              }))()()()()(B.getAllOptionNil)))))))(G.map(A.functorMaybe)(function (Ta) {
                return Ta.relids;
              })(Ra))));
              return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(rb(Z)(new Q.Tuple(B.getWithDefault(new v.IsSymbol(function () {
                return "_numSupProds";
              }))()(0)(v.SProxy.value)(W), B.get(new v.IsSymbol(function () {
                return "supProd_opts";
              }))()(v.SProxy.value)(W))))(function (Ta) {
                var nb = Q.fst(Ta),
                    ob = Q.snd(Ta),
                    db = l.join(A.bindMaybe)(G.map(A.functorMaybe)(Aa.sequence(N.traversableNonEmptyArray)(A.applicativeMaybe))(G.map(A.functorMaybe)(G.map(N.functorNonEmptyArray)(B.getSubset()()(wa.consKeys(new v.IsSymbol(function () {
                  return "basicMetadata";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "format";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "location";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "resourceID";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "resourceType";
                }))(wa.nilKeys)))))))(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "basicMetadata";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "format";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "location";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "resourceID";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "resourceType";
                }))()()()()(B.getAllOptionNil))))))))))(G.map(A.functorMaybe)(function (Hb) {
                  return Hb.sprods;
                })(ob))));
                return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                  return "identifier_opt";
                }))()(v.SProxy.value)(new A.Just(na))))(function () {
                  return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                    return "identifier";
                  }))()(v.SProxy.value)(la)))(function () {
                    return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                      return "date_Ei";
                    }))()(v.SProxy.value)(new A.Just(qa))))(function () {
                      return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                        return "date";
                      }))()(v.SProxy.value)(pa)))(function () {
                        return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                          return "_numRelIds";
                        }))()(v.SProxy.value)(new A.Just(Na))))(function () {
                          return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                            return "relId_opts";
                          }))()(v.SProxy.value)(Ra)))(function () {
                            return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                              return "relatedIdentifiers";
                            }))()(v.SProxy.value)(Za)))(function () {
                              return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                return "_numSupProds";
                              }))()(v.SProxy.value)(new A.Just(nb))))(function () {
                                return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                  return "supProd_opts";
                                }))()(v.SProxy.value)(ob)))(function () {
                                  return l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                    return "supplementaryProducts";
                                  }))()(v.SProxy.value)(db)))(function () {
                                    return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                                      return "descs_on";
                                    }))()(v.SProxy.value)(new A.Just(Z)));
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                }))(W));
              });
            });
          });
        });
      });
    });
  },
      Kb = f.loopS(g.widgetMonad)(B.empty)(function (W) {
    return q.div_(t.shiftMapCofree(C.monoidArray))([Y.record])(l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.recordHeader])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
      return l.discard(l.discardUnit)(t.bindCofree(g.widgetAlternative(C.monoidArray)))(f.display(q.div_(g.widgetShiftMap)([Y.reloadDescr])(F.empty(g.widgetPlus(C.monoidArray)))))(function () {
        return q.div_(t.shiftMapCofree(C.monoidArray))([Y.recFlexBox])(function () {
          var Z = A.maybe([])(function (la) {
            return J.toArray(la.sprods);
          })(B.get(new v.IsSymbol(function () {
            return "supProd_opts";
          }))()(v.SProxy.value)(W)),
              na = E.catMaybes(G.map(G.functorArray)(function (la) {
            return B.get(new v.IsSymbol(function () {
              return "dataCiteState";
            }))()(v.SProxy.value)(la);
          })(Z));
          return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(q.div_(t.shiftMapCofree(C.monoidArray))([Y.recEditor])(function () {
            var la = B.getWithDefault(new v.IsSymbol(function () {
              return "descs_on";
            }))()(!0)(v.SProxy.value)(W);
            return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(U.showDescSig(la))(function (qa) {
              return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Jb)(function (pa) {
                var ya = B.getSubset()()(wa.consKeys(new v.IsSymbol(function () {
                  return "date";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "identifier";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "lastModified";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "relatedIdentifiers";
                }))(wa.consKeys(new v.IsSymbol(function () {
                  return "supplementaryProducts";
                }))(wa.nilKeys))))))(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "date";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "identifier";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "lastModified";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "relatedIdentifiers";
                }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
                  return "supplementaryProducts";
                }))()()()()(B.getAllOptionNil)))))))(pa);
                pa = A.isNothing(ya) ? W : pa;
                return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Ob(pa))(function (Na) {
                  var Ra = B.get(new v.IsSymbol(function () {
                    return "lastModified";
                  }))()(v.SProxy.value)(Na),
                      Za = Ka.unsafePerformEffect(oa.nowDateTime);
                  return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(sa.append(K.semigroupFirst)(Ra)(K.First(new A.Just(Za)))))(function (Ta) {
                    return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.discard(l.discardUnit)(r.bindStateT(x.monadIdentity))(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                      return "lastModified";
                    }))()(v.SProxy.value)(Ta)))(function () {
                      return l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                        return "descs_on";
                      }))()(v.SProxy.value)(new A.Just(qa)));
                    }))(Na));
                  });
                });
              });
            });
          }()))(function (la) {
            var qa = B.getSubset()()(wa.consKeys(new v.IsSymbol(function () {
              return "date";
            }))(wa.consKeys(new v.IsSymbol(function () {
              return "identifier";
            }))(wa.consKeys(new v.IsSymbol(function () {
              return "lastModified";
            }))(wa.consKeys(new v.IsSymbol(function () {
              return "relatedIdentifiers";
            }))(wa.consKeys(new v.IsSymbol(function () {
              return "supplementaryProducts";
            }))(wa.nilKeys))))))(B.getAllAny()(B.getAllOptionCons(new v.IsSymbol(function () {
              return "date";
            }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
              return "identifier";
            }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
              return "lastModified";
            }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
              return "relatedIdentifiers";
            }))()()()()(B.getAllOptionCons(new v.IsSymbol(function () {
              return "supplementaryProducts";
            }))()()()()(B.getAllOptionNil)))))))(la),
                pa = B.getWithDefault(new v.IsSymbol(function () {
              return "tabIx";
            }))()(0)(v.SProxy.value)(la);
            return l.bind(t.bindCofree(g.widgetAlternative(C.monoidArray)))(Vb(qa)(na)(pa))(function (ya) {
              return h.pure(t.applicativeCofree(g.widgetAlternative(C.monoidArray)))(I.execState(l.bind(r.bindStateT(x.monadIdentity))(y.get(r.monadStateStateT(x.monadIdentity)))(B.maySetOptState(new v.IsSymbol(function () {
                return "tabIx";
              }))()(v.SProxy.value)(new A.Just(ya))))(la));
            });
          });
        }());
      });
    }));
  }),
      Lb = q["div'"](g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([q.div(g.widgetMultiAlternative(C.monoidArray))(g.widgetShiftMap)([Y.page])(h.pure(h.applicativeArray)(f.dyn(g.widgetMonad)(Kb)))]);

  b.runFormSPA = function (W) {
    return z.runWidgetInDom(W)(Lb);
  };

  b.page = Lb;
  b.utf8DataAttr = "data:text/plain;charset=utf-8";
  b.downloadButton = Nb;
  b.mkDLAnchorAndClicker = kb;
  b.uploadButtonSig = Jb;
  b.dataCiteButtonSig = m;
  b.fillWithDataCite = Ia;
  b.dataCiteErrorWidg = Gb;
  b.copyButton = Tb;
  b.copyHtmlButton = Qb;
  b.fillMetajeloRecordExtra = Mb;
  b.fillSProdExtra = qb;
  b.fillBasicMetadataExtra = mb;
  b.fillLocationRowExtra = zb;
  b.fillIContactExtra = yb;
  b.fillSustainExtra = ub;
  b.fillPolicyExtra = Ma;
  b.fillResourceMDSExtra = Fb;
  b.accumulateMetajeloRecord = Kb;
  b.recWidg = Ub;
  b.finalizeRecord = Eb;
  b.accumulateMetajeloRecUI = Ob;
  b.accumulateSuppProd = Xa;
  b.supProdSigArray = rb;
  b.accumulateLocation = hb;
  b.accumulateSustain = Wb;
  b.accumulateIdent = $a;
  b.genRecIdent = Cb;
  b.accumulateRelatedIdent = aa;
  b.relIdSigArray = Ga;
  b.accumulateBasicMetadata = Sa;
  b.accumulateResType = Rb;
  b.formatSignal = xb;
  b.formatSigArray = Db;
  b.titleSignal = vb;
  b.titleSigArray = Bb;
  b.creatorSignal = gb;
  b.creatorSigArray = lb;
  b.accumulateResMdSource = X;
  b.accumulateContact = Wa;
  b.accumulatePolicy = Ba;
  b.policySigArray = Va;
  b.getOpt = fb;
  b.updateDescOn = cb;
  b.makeSidebar = Vb;
  b.createTabSignal = Sb;
  b.createTabWidget = Ib;
  b.menuIdTypeSignal = wb;
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
//# sourceMappingURL=prod.81e39d78.js.map