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
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, c, d) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[c] = d.value;
  return a;
};

$jscomp.getGlobal = function (a) {
  a = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, a, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global];

  for (var c = 0; c < a.length; ++c) {
    var d = a[c];
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

var $jscomp$lookupPolyfilledValue = function $jscomp$lookupPolyfilledValue(a, c) {
  var d = $jscomp.propertyToPolyfillSymbol[c];
  if (null == d) return a[c];
  d = a[d];
  return void 0 !== d ? d : a[c];
};

$jscomp.polyfill = function (a, c, d, h) {
  c && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, c, d, h) : $jscomp.polyfillUnisolated(a, c, d, h));
};

$jscomp.polyfillUnisolated = function (a, c, d, h) {
  d = $jscomp.global;
  a = a.split(".");

  for (h = 0; h < a.length - 1; h++) {
    var f = a[h];
    if (!(f in d)) return;
    d = d[f];
  }

  a = a[a.length - 1];
  h = d[a];
  c = c(h);
  c != h && null != c && $jscomp.defineProperty(d, a, {
    configurable: !0,
    writable: !0,
    value: c
  });
};

$jscomp.polyfillIsolated = function (a, c, d, h) {
  var f = a.split(".");
  a = 1 === f.length;
  h = f[0];
  h = !a && h in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var m = 0; m < f.length - 1; m++) {
    var q = f[m];
    if (!(q in h)) return;
    h = h[q];
  }

  f = f[f.length - 1];
  d = $jscomp.IS_SYMBOL_NATIVE && "es6" === d ? h[f] : null;
  c = c(d);
  null != c && (a ? $jscomp.defineProperty($jscomp.polyfills, f, {
    configurable: !0,
    writable: !0,
    value: c
  }) : c !== d && ($jscomp.propertyToPolyfillSymbol[f] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(f) : $jscomp.POLYFILL_PREFIX + f, f = $jscomp.propertyToPolyfillSymbol[f], $jscomp.defineProperty(h, f, {
    configurable: !0,
    writable: !0,
    value: c
  })));
};

$jscomp.initSymbol = function () {};

$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;

  var c = function c(f, m) {
    this.$jscomp$symbol$id_ = f;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: m
    });
  };

  c.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };

  var d = 0,
      h = function h(f) {
    if (this instanceof h) throw new TypeError("Symbol is not a constructor");
    return new c("jscomp_symbol_" + (f || "") + "_" + d++, f);
  };

  return h;
}, "es6", "es3");

$jscomp.initSymbolIterator = function () {};

$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var c = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), d = 0; d < c.length; d++) {
    var h = $jscomp.global[c[d]];
    "function" === typeof h && "function" != typeof h.prototype[a] && $jscomp.defineProperty(h.prototype, a, {
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

$jscomp.iteratorFromArray = function (a, c) {
  a instanceof String && (a += "");
  var d = 0,
      h = !1,
      f = {
    next: function next() {
      if (!h && d < a.length) {
        var m = d++;
        return {
          value: c(m, a[m]),
          done: !1
        };
      }

      h = !0;
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
    return $jscomp.iteratorFromArray(this, function (c) {
      return c;
    });
  };
}, "es6", "es3");

$jscomp.checkStringArgs = function (a, c, d) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + d + " must not be null or undefined");
  if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + d + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (c) {
    var d = $jscomp.checkStringArgs(this, null, "codePointAt"),
        h = d.length;
    c = Number(c) || 0;

    if (0 <= c && c < h) {
      c |= 0;
      var f = d.charCodeAt(c);
      if (55296 > f || 56319 < f || c + 1 === h) return f;
      c = d.charCodeAt(c + 1);
      return 56320 > c || 57343 < c ? f : 1024 * (f - 55296) + c + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (c) {
    for (var d = "", h = 0; h < arguments.length; h++) {
      var f = Number(arguments[h]);
      if (0 > f || 1114111 < f || f !== Math.floor(f)) throw new RangeError("invalid_code_point " + f);
      65535 >= f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(f >>> 10 & 1023 | 55296), d += String.fromCharCode(f & 1023 | 56320));
    }

    return d;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (c, d, h) {
    d = null != d ? d : function (k) {
      return k;
    };
    var f = [],
        m = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];

    if ("function" == typeof m) {
      c = m.call(c);

      for (var q = 0; !(m = c.next()).done;) {
        f.push(d.call(h, m.value, q++));
      }
    } else for (m = c.length, q = 0; q < m; q++) {
      f.push(d.call(h, c[q], q));
    }

    return f;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (c, d) {
    var h = $jscomp.checkStringArgs(this, c, "endsWith");
    c += "";
    void 0 === d && (d = h.length);
    d = Math.max(0, Math.min(d | 0, h.length));

    for (var f = c.length; 0 < f && 0 < d;) {
      if (h[--d] != c[--f]) return !1;
    }

    return 0 >= f;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (c, d) {
    var h = $jscomp.checkStringArgs(this, c, "startsWith");
    c += "";
    var f = h.length,
        m = c.length;
    d = Math.max(0, Math.min(d | 0, h.length));

    for (var q = 0; q < m && d < f;) {
      if (h[d++] != c[q++]) return !1;
    }

    return q >= m;
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, c, d) {
  a instanceof String && (a = String(a));

  for (var h = a.length, f = 0; f < h; f++) {
    var m = a[f];
    if (c.call(d, m, f, a)) return {
      i: f,
      v: m
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (c, d) {
    return $jscomp.findInternal(this, c, d).v;
  };
}, "es6", "es3");
var PS = {};

(function (a) {
  a._ajax = function () {
    var c = {};
    "undefined" === typeof module || !module.require || "undefined" !== typeof process && process.versions.electron ? (c.newXHR = function () {
      return new XMLHttpRequest();
    }, c.fixupUrl = function (d) {
      return d || "/";
    }, c.getResponse = function (d) {
      return d.response;
    }) : (c.newXHR = function () {
      return new (module.require("xhr2"))();
    }, c.fixupUrl = function (d, h) {
      return null === h.nodejsBaseUrl ? (h = module.require("url"), d = h.parse(d), d.protocol = d.protocol || "http:", d.hostname = d.hostname || "localhost", h.format(d)) : d || "/";
    }, c.getResponse = function (d) {
      return d.response;
    });
    return function (d, h) {
      return function (f, m) {
        var q = c.newXHR(),
            k = c.fixupUrl(h.url, q);
        q.open(h.method || "GET", k, !0, h.username, h.password);
        if (h.headers) try {
          k = 0;

          for (var p; null != (p = h.headers[k]); k++) {
            q.setRequestHeader(p.field, p.value);
          }
        } catch (t) {
          f(t);
        }

        p = function p(t) {
          return function () {
            f(Error(t + ": " + h.method + " " + h.url));
          };
        };

        q.onerror = p("AJAX request failed");
        q.ontimeout = p("AJAX request timed out");

        q.onload = function () {
          m({
            status: q.status,
            statusText: q.statusText,
            headers: q.getAllResponseHeaders().split("\r\n").filter(function (t) {
              return 0 < t.length;
            }).map(function (t) {
              var y = t.indexOf(":");
              return d(t.substring(0, y))(t.substring(y + 2));
            }),
            body: c.getResponse(q)
          });
        };

        q.responseType = h.responseType;
        q.withCredentials = h.withCredentials;
        q.send(h.content);
        return function (t, y, b) {
          try {
            q.abort();
          } catch (g) {
            return y(g);
          }

          return b();
        };
      };
    };
  }();
})(PS.Affjax = PS.Affjax || {});

(function (a) {
  a.arrayApply = function (c) {
    return function (d) {
      for (var h = c.length, f = d.length, m = Array(h * f), q = 0, k = 0; k < h; k++) {
        for (var p = c[k], t = 0; t < f; t++) {
          m[q++] = p(d[t]);
        }
      }

      return m;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var c = new function (d) {
    this.compose = d;
  }(function (d) {
    return function (h) {
      return function (f) {
        return d(h(f));
      };
    };
  });

  a.compose = function (d) {
    return d.compose;
  };

  a.composeFlipped = function (d) {
    return function (h) {
      return function (f) {
        return (0, d.compose)(f)(h);
      };
    };
  };

  a.semigroupoidFn = c;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var c = a["Control.Category"],
      d = a["Control.Semigroupoid"];
  a = new function (h, f) {
    this.Semigroupoid0 = h;
    this.identity = f;
  }(function () {
    return d.semigroupoidFn;
  }, function (h) {
    return h;
  });

  c.identity = function (h) {
    return h.identity;
  };

  c.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (c) {
    return function (d) {
      return function (h) {
        return c(h)(d);
      };
    };
  };

  a["const"] = function (c) {
    return function (d) {
      return c;
    };
  };

  a.on = function (c) {
    return function (d) {
      return function (h) {
        return function (f) {
          return c(d(h))(d(f));
        };
      };
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (c) {
    return function (d) {
      for (var h = d.length, f = Array(h), m = 0; m < h; m++) {
        f[m] = c(d[m]);
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
  var c = a["Data.Functor"],
      d = a["Data.Functor"],
      h = a["Control.Semigroupoid"],
      f = a["Data.Function"],
      m = a["Data.Unit"];

  a = function a(q) {
    this.map = q;
  };

  h = new a(h.compose(h.semigroupoidFn));
  d = new a(d.arrayMap);
  c.Functor = a;

  c.map = function (q) {
    return q.map;
  };

  c.mapFlipped = function (q) {
    return function (k) {
      return function (p) {
        return (0, q.map)(p)(k);
      };
    };
  };

  c["void"] = function (q) {
    return (0, q.map)(f["const"](m.unit));
  };

  c.voidRight = function (q) {
    return function (k) {
      return (0, q.map)(f["const"](k));
    };
  };

  c.functorFn = h;
  c.functorArray = d;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var c = a["Control.Apply"],
      d = a["Control.Apply"],
      h = a["Control.Category"],
      f = a["Data.Function"],
      m = a["Data.Functor"];

  a = function a(k, p) {
    this.Functor0 = k;
    this.apply = p;
  };

  var q = new a(function () {
    return m.functorFn;
  }, function (k) {
    return function (p) {
      return function (t) {
        return k(t)(p(t));
      };
    };
  });
  d = new a(function () {
    return m.functorArray;
  }, d.arrayApply);
  c.Apply = a;

  c.apply = function (k) {
    return k.apply;
  };

  c.applySecond = function (k) {
    return function (p) {
      return function (t) {
        return (0, k.apply)(m.map(k.Functor0())(f["const"](h.identity(h.categoryFn)))(p))(t);
      };
    };
  };

  c.lift2 = function (k) {
    return function (p) {
      return function (t) {
        return function (y) {
          return (0, k.apply)(m.map(k.Functor0())(p)(t))(y);
        };
      };
    };
  };

  c.applyFn = q;
  c.applyArray = d;
})(PS);

(function (a) {
  a["Control.Applicative"] = a["Control.Applicative"] || {};
  var c = a["Control.Applicative"],
      d = a["Control.Apply"];

  a = function a(f, m) {
    this.Apply0 = f;
    this.pure = m;
  };

  var h = new a(function () {
    return d.applyArray;
  }, function (f) {
    return [f];
  });
  c.Applicative = a;

  c.pure = function (f) {
    return f.pure;
  };

  c.liftA1 = function (f) {
    return function (m) {
      return function (q) {
        return d.apply(f.Apply0())((0, f.pure)(m))(q);
      };
    };
  };

  c.applicativeArray = h;
})(PS);

(function (a) {
  a.arrayBind = function (c) {
    return function (d) {
      for (var h = [], f = 0, m = c.length; f < m; f++) {
        Array.prototype.push.apply(h, d(c[f]));
      }

      return h;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var c = a["Control.Bind"],
      d = a["Control.Apply"],
      h = a["Control.Category"],
      f = a["Data.Function"],
      m = function m(p, t) {
    this.Apply0 = p;
    this.bind = t;
  };

  a = new m(function () {
    return d.applyArray;
  }, a["Control.Bind"].arrayBind);

  var q = function q(p) {
    return f.flip(p.bind);
  },
      k = new function (p) {
    this.discard = p;
  }(function (p) {
    return p.bind;
  });

  c.Bind = m;

  c.bind = function (p) {
    return p.bind;
  };

  c.bindFlipped = q;

  c.discard = function (p) {
    return p.discard;
  };

  c.join = function (p) {
    return function (t) {
      return (0, p.bind)(t)(h.identity(h.categoryFn));
    };
  };

  c.composeKleisliFlipped = function (p) {
    return function (t) {
      return function (y) {
        return function (b) {
          return q(p)(t)(y(b));
        };
      };
    };
  };

  c.bindArray = a;
  c.discardUnit = k;
})(PS);

(function (a) {
  a.topInt = 2147483647;
  a.bottomInt = -2147483648;
  a.topChar = String.fromCharCode(65535);
  a.bottomChar = String.fromCharCode(0);
})(PS["Data.Bounded"] = PS["Data.Bounded"] || {});

(function (a) {
  var c = function c(d) {
    return function (h) {
      return function (f) {
        return function (m) {
          return function (q) {
            return m < q ? d : m === q ? h : f;
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
  var c = function c(d) {
    return function (h) {
      return d === h;
    };
  };

  a.eqBooleanImpl = c;
  a.eqIntImpl = c;
  a.eqCharImpl = c;
  a.eqStringImpl = c;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});

(function (a) {
  a["Data.Eq"] = a["Data.Eq"] || {};
  var c = a["Data.Eq"],
      d = a["Data.Eq"];

  a = function a(q) {
    this.eq = q;
  };

  var h = new a(d.eqStringImpl),
      f = new a(d.eqIntImpl),
      m = new a(d.eqCharImpl);
  d = new a(d.eqBooleanImpl);
  c.Eq = a;

  c.eq = function (q) {
    return q.eq;
  };

  c.eqBoolean = d;
  c.eqInt = f;
  c.eqChar = m;
  c.eqString = h;
})(PS);

(function (a) {
  a["Data.Ordering"] = a["Data.Ordering"] || {};
  a = a["Data.Ordering"];

  var c = function () {
    function f() {}

    f.value = new f();
    return f;
  }(),
      d = function () {
    function f() {}

    f.value = new f();
    return f;
  }(),
      h = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.LT = c;
  a.GT = d;
  a.EQ = h;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var c = a["Data.Ord"],
      d = a["Data.Ord"],
      h = a["Data.Eq"],
      f = a["Data.Ordering"];

  a = function a(k, p) {
    this.Eq0 = k;
    this.compare = p;
  };

  var m = new a(function () {
    return h.eqInt;
  }, d.ordIntImpl(f.LT.value)(f.EQ.value)(f.GT.value)),
      q = new a(function () {
    return h.eqChar;
  }, d.ordCharImpl(f.LT.value)(f.EQ.value)(f.GT.value));
  d = new a(function () {
    return h.eqBoolean;
  }, d.ordBooleanImpl(f.LT.value)(f.EQ.value)(f.GT.value));
  c.Ord = a;

  c.compare = function (k) {
    return k.compare;
  };

  c.max = function (k) {
    return function (p) {
      return function (t) {
        var y = (0, k.compare)(p)(t);
        if (y instanceof f.LT) return t;
        if (y instanceof f.EQ || y instanceof f.GT) return p;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [y.constructor.name]);
      };
    };
  };

  c.ordBoolean = d;
  c.ordInt = m;
  c.ordChar = q;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var c = a["Data.Bounded"],
      d = a["Data.Bounded"],
      h = a["Data.Ord"];

  a = function a(q, k, p) {
    this.Ord0 = q;
    this.bottom = k;
    this.top = p;
  };

  var f = new a(function () {
    return h.ordInt;
  }, d.bottomInt, d.topInt);
  d = new a(function () {
    return h.ordChar;
  }, d.bottomChar, d.topChar);
  var m = new a(function () {
    return h.ordBoolean;
  }, !1, !0);
  c.Bounded = a;

  c.bottom = function (q) {
    return q.bottom;
  };

  c.top = function (q) {
    return q.top;
  };

  c.boundedBoolean = m;
  c.boundedInt = f;
  c.boundedChar = d;
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var c = a["Data.Maybe"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Category"],
      q = a["Data.Bounded"],
      k = a["Data.Eq"],
      p = a["Data.Function"],
      t = a["Data.Functor"],
      y = a["Data.Ord"],
      b = a["Data.Ordering"],
      g = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      e = function () {
    function z(u) {
      this.value0 = u;
    }

    z.create = function (u) {
      return new z(u);
    };

    return z;
  }(),
      l = function l(z) {
    return function (u) {
      return function (E) {
        if (E instanceof g) return z;
        if (E instanceof e) return u(E.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [z.constructor.name, u.constructor.name, E.constructor.name]);
      };
    };
  };

  a = l(!0)(p["const"](!1));
  p = l(!1)(p["const"](!0));

  var r = new t.Functor(function (z) {
    return function (u) {
      return u instanceof e ? new e(z(u.value0)) : g.value;
    };
  }),
      v = function v(z) {
    return new k.Eq(function (u) {
      return function (E) {
        return u instanceof g && E instanceof g ? !0 : u instanceof e && E instanceof e ? k.eq(z)(u.value0)(E.value0) : !1;
      };
    });
  },
      D = function D(z) {
    return new y.Ord(function () {
      return v(z.Eq0());
    }, function (u) {
      return function (E) {
        if (u instanceof g && E instanceof g) return b.EQ.value;
        if (u instanceof g) return b.LT.value;
        if (E instanceof g) return b.GT.value;
        if (u instanceof e && E instanceof e) return y.compare(z)(u.value0)(E.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [u.constructor.name, E.constructor.name]);
      };
    });
  },
      B = new h.Apply(function () {
    return r;
  }, function (z) {
    return function (u) {
      if (z instanceof e) return t.map(r)(z.value0)(u);
      if (z instanceof g) return g.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [z.constructor.name, u.constructor.name]);
    };
  });

  h = new f.Bind(function () {
    return B;
  }, function (z) {
    return function (u) {
      if (z instanceof e) return u(z.value0);
      if (z instanceof g) return g.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [z.constructor.name, u.constructor.name]);
    };
  });
  d = new d.Applicative(function () {
    return B;
  }, e.create);
  c.Nothing = g;
  c.Just = e;
  c.maybe = l;

  c.fromMaybe = function (z) {
    return l(z)(m.identity(m.categoryFn));
  };

  c.isJust = p;
  c.isNothing = a;

  c.fromJust = function (z) {
    return function (u) {
      if (u instanceof e) return u.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [u.constructor.name]);
    };
  };

  c.functorMaybe = r;
  c.applyMaybe = B;
  c.applicativeMaybe = d;
  c.bindMaybe = h;
  c.ordMaybe = D;

  c.boundedMaybe = function (z) {
    return new q.Bounded(function () {
      return D(z.Ord0());
    }, g.value, new e(q.top(z)));
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
  var c = a["Affjax.RequestBody"],
      d = a["Data.Maybe"],
      h = a["Data.MediaType.Common"];

  a = function () {
    function y(b) {
      this.value0 = b;
    }

    y.create = function (b) {
      return new y(b);
    };

    return y;
  }();

  var f = function () {
    function y(b) {
      this.value0 = b;
    }

    y.create = function (b) {
      return new y(b);
    };

    return y;
  }(),
      m = function () {
    function y(b) {
      this.value0 = b;
    }

    y.create = function (b) {
      return new y(b);
    };

    return y;
  }(),
      q = function () {
    function y(b) {
      this.value0 = b;
    }

    y.create = function (b) {
      return new y(b);
    };

    return y;
  }(),
      k = function () {
    function y(b) {
      this.value0 = b;
    }

    y.create = function (b) {
      return new y(b);
    };

    return y;
  }(),
      p = function () {
    function y(b) {
      this.value0 = b;
    }

    y.create = function (b) {
      return new y(b);
    };

    return y;
  }(),
      t = function () {
    function y(b) {
      this.value0 = b;
    }

    y.create = function (b) {
      return new y(b);
    };

    return y;
  }();

  c.ArrayView = a;
  c.Blob = f;
  c.Document = m;
  c.String = q;
  c.FormData = k;
  c.FormURLEncoded = p;
  c.Json = t;

  c.toMediaType = function (y) {
    return y instanceof p ? new d.Just(h.applicationFormURLEncoded) : y instanceof t ? new d.Just(h.applicationJSON) : d.Nothing.value;
  };
})(PS);

(function (a) {
  a.boolConj = function (c) {
    return function (d) {
      return c && d;
    };
  };

  a.boolDisj = function (c) {
    return function (d) {
      return c || d;
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
  var d = new function (h, f, m, q, k, p) {
    this.conj = h;
    this.disj = f;
    this.ff = m;
    this.implies = q;
    this.not = k;
    this.tt = p;
  }(a.boolConj, a.boolDisj, !1, function (h) {
    return function (f) {
      return (0, d.disj)((0, d.not)(h))(f);
    };
  }, a.boolNot, !0);

  c.ff = function (h) {
    return h.ff;
  };

  c.disj = function (h) {
    return h.disj;
  };

  c.heytingAlgebraBoolean = d;
})(PS);

(function (a) {
  a.concatString = function (c) {
    return function (d) {
      return c + d;
    };
  };

  a.concatArray = function (c) {
    return function (d) {
      return 0 === c.length ? d : 0 === d.length ? c : c.concat(d);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};
  var c = a["Data.Semigroup"],
      d = a["Data.Semigroup"],
      h = a["Data.Unit"];

  a = function a(q) {
    this.append = q;
  };

  var f = new a(function (q) {
    return function (k) {
      return h.unit;
    };
  }),
      m = new a(d.concatString);
  d = new a(d.concatArray);
  c.Semigroup = a;

  c.append = function (q) {
    return q.append;
  };

  c.semigroupString = m;
  c.semigroupUnit = f;
  c.semigroupArray = d;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var c = a["Data.Monoid"],
      d = a["Data.Semigroup"],
      h = function h(q, k) {
    this.Semigroup0 = q;
    this.mempty = k;
  };

  a = new h(function () {
    return d.semigroupUnit;
  }, a["Data.Unit"].unit);
  var f = new h(function () {
    return d.semigroupString;
  }, ""),
      m = new h(function () {
    return d.semigroupArray;
  }, []);
  c.Monoid = h;

  c.mempty = function (q) {
    return q.mempty;
  };

  c.monoidUnit = a;
  c.monoidString = f;
  c.monoidArray = m;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var c = a["Data.Monoid.Disj"],
      d = a["Data.HeytingAlgebra"],
      h = a["Data.Monoid"],
      f = a["Data.Semigroup"],
      m = function m(q) {
    return new f.Semigroup(function (k) {
      return function (p) {
        return d.disj(q)(k)(p);
      };
    });
  };

  c.Disj = function (q) {
    return q;
  };

  c.monoidDisj = function (q) {
    return new h.Monoid(function () {
      return m(q);
    }, d.ff(q));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var c = a["Data.Newtype"],
      d = a["Data.Functor"],
      h = function h(f, m) {
    this.unwrap = f;
    this.wrap = m;
  };

  a = new h(function (f) {
    return f;
  }, a["Data.Monoid.Disj"].Disj);

  c.unwrap = function (f) {
    return f.unwrap;
  };

  c.Newtype = h;

  c.alaF = function (f) {
    return function (m) {
      return function (q) {
        return function (k) {
          return function (p) {
            return function (t) {
              var y = d.map(m)(k.unwrap),
                  b = d.map(f)(q.wrap);
              return function (g) {
                return y(t(b(g)));
              };
            };
          };
        };
      };
    };
  };

  c.newtypeDisj = a;
})(PS);

(function (a) {
  a["Data.MediaType"] = a["Data.MediaType"] || {};
  var c = a["Data.MediaType"];
  a = new a["Data.Newtype"].Newtype(function (d) {
    return d;
  }, function (d) {
    return d;
  });
  c.newtypeMediaType = a;
})(PS);

(function (a) {
  a["Affjax.RequestHeader"] = a["Affjax.RequestHeader"] || {};

  var c = a["Affjax.RequestHeader"],
      d = a["Data.MediaType"],
      h = a["Data.Newtype"],
      f = function () {
    function k(p) {
      this.value0 = p;
    }

    k.create = function (p) {
      return new k(p);
    };

    return k;
  }(),
      m = function () {
    function k(p) {
      this.value0 = p;
    }

    k.create = function (p) {
      return new k(p);
    };

    return k;
  }(),
      q = function () {
    function k(p, t) {
      this.value0 = p;
      this.value1 = t;
    }

    k.create = function (p) {
      return function (t) {
        return new k(p, t);
      };
    };

    return k;
  }();

  c.Accept = f;
  c.ContentType = m;

  c.name = function (k) {
    if (k instanceof f) return "Accept";
    if (k instanceof m) return "Content-Type";
    if (k instanceof q) return k.value0;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): " + [k.constructor.name]);
  };

  c.value = function (k) {
    if (k instanceof f || k instanceof m) return h.unwrap(d.newtypeMediaType)(k.value0);
    if (k instanceof q) return k.value1;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): " + [k.constructor.name]);
  };
})(PS);

(function (a) {
  a["Affjax.ResponseFormat"] = a["Affjax.ResponseFormat"] || {};

  var c = a["Affjax.ResponseFormat"],
      d = a["Control.Category"],
      h = a["Data.Maybe"],
      f = a["Data.MediaType.Common"],
      m = function () {
    function b(g) {
      this.value0 = g;
    }

    b.create = function (g) {
      return new b(g);
    };

    return b;
  }(),
      q = function () {
    function b(g) {
      this.value0 = g;
    }

    b.create = function (g) {
      return new b(g);
    };

    return b;
  }(),
      k = function () {
    function b(g) {
      this.value0 = g;
    }

    b.create = function (g) {
      return new b(g);
    };

    return b;
  }(),
      p = function () {
    function b(g) {
      this.value0 = g;
    }

    b.create = function (g) {
      return new b(g);
    };

    return b;
  }(),
      t = function () {
    function b(g) {
      this.value0 = g;
    }

    b.create = function (g) {
      return new b(g);
    };

    return b;
  }(),
      y = function () {
    function b(g) {
      this.value0 = g;
    }

    b.create = function (g) {
      return new b(g);
    };

    return b;
  }();

  a = new t(d.identity(d.categoryFn));
  d = new y(d.identity(d.categoryFn));
  c.ArrayBuffer = m;
  c.Blob = q;
  c.Document = k;
  c.Json = p;
  c.String = t;
  c.Ignore = y;
  c.string = a;
  c.ignore = d;

  c.toResponseType = function (b) {
    if (b instanceof m) return "arraybuffer";
    if (b instanceof q) return "blob";
    if (b instanceof k) return "document";
    if (b instanceof p || b instanceof t) return "text";
    if (b instanceof y) return "";
    throw Error("Failed pattern match at Affjax.ResponseFormat (line 46, column 3 - line 52, column 19): " + [b.constructor.name]);
  };

  c.toMediaType = function (b) {
    return b instanceof p ? new h.Just(f.applicationJSON) : h.Nothing.value;
  };
})(PS);

(function (a) {
  a["Affjax.ResponseHeader"] = a["Affjax.ResponseHeader"] || {};
  a = a["Affjax.ResponseHeader"];

  var c = function () {
    function d(h, f) {
      this.value0 = h;
      this.value1 = f;
    }

    d.create = function (h) {
      return function (f) {
        return new d(h, f);
      };
    };

    return d;
  }();

  a.ResponseHeader = c;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var c = a["Control.Monad"],
      d = a["Control.Applicative"],
      h = a["Control.Bind"];

  a = function a(m, q) {
    this.Applicative0 = m;
    this.Bind1 = q;
  };

  var f = new a(function () {
    return d.applicativeArray;
  }, function () {
    return h.bindArray;
  });
  c.Monad = a;

  c.ap = function (m) {
    return function (q) {
      return function (k) {
        return h.bind(m.Bind1())(q)(function (p) {
          return h.bind(m.Bind1())(k)(function (t) {
            return d.pure(m.Applicative0())(p(t));
          });
        });
      };
    };
  };

  c.monadArray = f;
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var c = a["Data.Bifunctor"],
      d = a["Control.Category"];

  c.bimap = function (h) {
    return h.bimap;
  };

  c.Bifunctor = function (h) {
    this.bimap = h;
  };

  c.lmap = function (h) {
    return function (f) {
      return (0, h.bimap)(f)(d.identity(d.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var c = a["Data.Either"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Data.Bifunctor"],
      k = a["Data.Function"],
      p = a["Data.Functor"],
      t = a["Data.Maybe"],
      y = function () {
    function v(D) {
      this.value0 = D;
    }

    v.create = function (D) {
      return new v(D);
    };

    return v;
  }(),
      b = function () {
    function v(D) {
      this.value0 = D;
    }

    v.create = function (D) {
      return new v(D);
    };

    return v;
  }(),
      g = new p.Functor(function (v) {
    return function (D) {
      if (D instanceof y) return new y(D.value0);
      if (D instanceof b) return new b(v(D.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [D.constructor.name]);
    };
  });

  a = function a(v) {
    return function (D) {
      return function (B) {
        if (B instanceof y) return v(B.value0);
        if (B instanceof b) return D(B.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [v.constructor.name, D.constructor.name, B.constructor.name]);
      };
    };
  };

  k = a(k["const"](t.Nothing.value))(t.Just.create);
  q = new q.Bifunctor(function (v) {
    return function (D) {
      return function (B) {
        if (B instanceof y) return new y(v(B.value0));
        if (B instanceof b) return new b(D(B.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [v.constructor.name, D.constructor.name, B.constructor.name]);
      };
    };
  });
  var e = new h.Apply(function () {
    return g;
  }, function (v) {
    return function (D) {
      if (v instanceof y) return new y(v.value0);
      if (v instanceof b) return p.map(g)(v.value0)(D);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [v.constructor.name, D.constructor.name]);
    };
  }),
      l = new f.Bind(function () {
    return e;
  }, a(function (v) {
    return function (D) {
      return new y(v);
    };
  })(function (v) {
    return function (D) {
      return D(v);
    };
  })),
      r = new d.Applicative(function () {
    return e;
  }, b.create);
  d = new m.Monad(function () {
    return r;
  }, function () {
    return l;
  });
  c.Left = y;
  c.Right = b;
  c.either = a;

  c.note = function (v) {
    return t.maybe(new y(v))(b.create);
  };

  c.hush = k;
  c.functorEither = g;
  c.bifunctorEither = q;
  c.applicativeEither = r;
  c.bindEither = l;
  c.monadEither = d;
})(PS);

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var c = a["Control.Monad.Error.Class"],
      d = a["Control.Applicative"],
      h = a["Data.Either"],
      f = a["Data.Functor"];

  c.catchError = function (m) {
    return m.catchError;
  };

  c.throwError = function (m) {
    return m.throwError;
  };

  c.MonadThrow = function (m, q) {
    this.Monad0 = m;
    this.throwError = q;
  };

  c.MonadError = function (m, q) {
    this.MonadThrow0 = m;
    this.catchError = q;
  };

  c["try"] = function (m) {
    return function (q) {
      return (0, m.catchError)(f.map(m.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(h.Right.create)(q))(function () {
        var k = d.pure(m.MonadThrow0().Monad0().Applicative0());
        return function (p) {
          return k(h.Left.create(p));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Alt"] = a["Control.Alt"] || {};
  var c = a["Control.Alt"],
      d = a["Data.Functor"],
      h = a["Data.Semigroup"];

  a = function a(f, m) {
    this.Functor0 = f;
    this.alt = m;
  };

  h = new a(function () {
    return d.functorArray;
  }, h.append(h.semigroupArray));
  c.Alt = a;

  c.alt = function (f) {
    return f.alt;
  };

  c.altArray = h;
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
  a["Control.Monad.Writer.Class"] = a["Control.Monad.Writer.Class"] || {};
  a = a["Control.Monad.Writer.Class"];

  a.tell = function (c) {
    return c.tell;
  };

  a.MonadTell = function (c, d) {
    this.Monad0 = c;
    this.tell = d;
  };
})(PS);

(function (a) {
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var c = a["Control.Monad.Except.Trans"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Control.Monad"],
      k = a["Control.Monad.Error.Class"],
      p = a["Control.Monad.Trans.Class"],
      t = a["Control.Monad.Writer.Class"],
      y = a["Data.Either"],
      b = a["Data.Functor"],
      g = a["Data.Semigroup"],
      e = function e(E) {
    return E;
  };

  a = new a["Data.Newtype"].Newtype(function (E) {
    return E;
  }, e);

  var l = new p.MonadTrans(function (E) {
    return function (H) {
      return m.bind(E.Bind1())(H)(function (G) {
        return h.pure(E.Applicative0())(new y.Right(G));
      });
    };
  }),
      r = function r(E) {
    return function (H) {
      return E(H);
    };
  },
      v = function v(E) {
    return new b.Functor(function (H) {
      return r(b.map(E)(b.map(y.functorEither)(H)));
    });
  },
      D = function D(E) {
    return new q.Monad(function () {
      return u(E);
    }, function () {
      return B(E);
    });
  },
      B = function B(E) {
    return new m.Bind(function () {
      return z(E);
    }, function (H) {
      return function (G) {
        return m.bind(E.Bind1())(H)(y.either(function () {
          var J = h.pure(E.Applicative0());
          return function (K) {
            return J(y.Left.create(K));
          };
        }())(function (J) {
          return G(J);
        }));
      };
    });
  },
      z = function z(E) {
    return new f.Apply(function () {
      return v(E.Bind1().Apply0().Functor0());
    }, q.ap(D(E)));
  },
      u = function u(E) {
    return new h.Applicative(function () {
      return z(E);
    }, function () {
      var H = h.pure(E.Applicative0());
      return function (G) {
        return H(y.Right.create(G));
      };
    }());
  };

  c.ExceptT = e;

  c.runExceptT = function (E) {
    return E;
  };

  c.withExceptT = function (E) {
    return function (H) {
      return function (G) {
        return b.map(E)(function (J) {
          return function (K) {
            if (K instanceof y.Right) return new y.Right(K.value0);
            if (K instanceof y.Left) return new y.Left(J(K.value0));
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 42, column 3 - line 42, column 32): " + [J.constructor.name, K.constructor.name]);
          };
        }(H))(G);
      };
    };
  };

  c.newtypeExceptT = a;
  c.functorExceptT = v;
  c.applicativeExceptT = u;
  c.bindExceptT = B;

  c.altExceptT = function (E) {
    return function (H) {
      return new d.Alt(function () {
        return v(H.Bind1().Apply0().Functor0());
      }, function (G) {
        return function (J) {
          return m.bind(H.Bind1())(G)(function (K) {
            if (K instanceof y.Right) return h.pure(H.Applicative0())(new y.Right(K.value0));
            if (K instanceof y.Left) return m.bind(H.Bind1())(J)(function (N) {
              if (N instanceof y.Right) return h.pure(H.Applicative0())(new y.Right(N.value0));
              if (N instanceof y.Left) return h.pure(H.Applicative0())(new y.Left(g.append(E)(K.value0)(N.value0)));
              throw Error("Failed pattern match at Control.Monad.Except.Trans (line 86, column 9 - line 88, column 49): " + [N.constructor.name]);
            });
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 82, column 5 - line 88, column 49): " + [K.constructor.name]);
          });
        };
      });
    };
  };

  c.monadThrowExceptT = function (E) {
    return new k.MonadThrow(function () {
      return D(E);
    }, function () {
      var H = h.pure(E.Applicative0());
      return function (G) {
        return H(y.Left.create(G));
      };
    }());
  };

  c.monadTellExceptT = function (E) {
    return new t.MonadTell(function () {
      return D(E.Monad0());
    }, function () {
      var H = p.lift(l)(E.Monad0()),
          G = t.tell(E);
      return function (J) {
        return H(G(J));
      };
    }());
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var c = a["Data.Identity"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Data.Functor"],
      k = function k(g) {
    return g;
  };

  a = new a["Data.Newtype"].Newtype(function (g) {
    return g;
  }, k);
  var p = new q.Functor(function (g) {
    return function (e) {
      return g(e);
    };
  }),
      t = new h.Apply(function () {
    return p;
  }, function (g) {
    return function (e) {
      return g(e);
    };
  }),
      y = new f.Bind(function () {
    return t;
  }, function (g) {
    return function (e) {
      return e(g);
    };
  }),
      b = new d.Applicative(function () {
    return t;
  }, k);
  d = new m.Monad(function () {
    return b;
  }, function () {
    return y;
  });
  c.Identity = k;
  c.newtypeIdentity = a;
  c.functorIdentity = p;
  c.applicativeIdentity = b;
  c.monadIdentity = d;
})(PS);

(function (a) {
  a["Control.Monad.Except"] = a["Control.Monad.Except"] || {};
  var c = a["Control.Monad.Except"],
      d = a["Control.Monad.Except.Trans"],
      h = a["Data.Identity"],
      f = a["Data.Newtype"];
  a = d.withExceptT(h.functorIdentity);

  var m = function () {
    var q = f.unwrap(h.newtypeIdentity);
    return function (k) {
      return q(d.runExceptT(k));
    };
  }();

  c.runExcept = m;
  c.withExcept = a;
})(PS);

(function (a) {
  a.fromObject = function (c) {
    return c;
  };

  a.stringify = function (c) {
    return JSON.stringify(c);
  };
})(PS["Data.Argonaut.Core"] = PS["Data.Argonaut.Core"] || {});

(function (a) {
  function c(d) {
    return function (h) {
      var f = [],
          m;

      for (m in h) {
        hasOwnProperty.call(h, m) && f.push(d(m)(h[m]));
      }

      return f;
    };
  }

  a._copyST = function (d) {
    return function () {
      var h = {},
          f;

      for (f in d) {
        hasOwnProperty.call(d, f) && (h[f] = d[f]);
      }

      return h;
    };
  };

  a.empty = {};

  a.runST = function (d) {
    return d();
  };

  a._foldM = function (d) {
    return function (h) {
      return function (f) {
        return function (m) {
          function q(t) {
            return function (y) {
              return h(y)(t)(m[t]);
            };
          }

          var k = f,
              p;

          for (p in m) {
            hasOwnProperty.call(m, p) && (k = d(k)(q(p)));
          }

          return k;
        };
      };
    };
  };

  a._lookup = function (d, h, f, m) {
    return f in m ? h(m[f]) : d;
  };

  a._lookupST = function (d, h, f, m) {
    return function () {
      return f in m ? h(m[f]) : d;
    };
  };

  a.keys = Object.keys || c(function (d) {
    return function () {
      return d;
    };
  });
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});

(function (a) {
  a.map_ = function (c) {
    return function (d) {
      return function () {
        return c(d());
      };
    };
  };

  a.pure_ = function (c) {
    return function () {
      return c;
    };
  };

  a.bind_ = function (c) {
    return function (d) {
      return function () {
        return d(c())();
      };
    };
  };
})(PS["Control.Monad.ST.Internal"] = PS["Control.Monad.ST.Internal"] || {});

(function (a) {
  a["Control.Monad.ST.Internal"] = a["Control.Monad.ST.Internal"] || {};
  var c = a["Control.Monad.ST.Internal"],
      d = a["Control.Monad.ST.Internal"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Control.Monad"],
      k = new a["Data.Functor"].Functor(d.map_);
  a = new q.Monad(function () {
    return y;
  }, function () {
    return p;
  });
  var p = new m.Bind(function () {
    return t;
  }, d.bind_),
      t = new f.Apply(function () {
    return k;
  }, q.ap(a)),
      y = new h.Applicative(function () {
    return t;
  }, d.pure_);
  c.applicativeST = y;
  c.monadST = a;
})(PS);

(function (a) {
  a.foldrArray = function (c) {
    return function (d) {
      return function (h) {
        for (var f = d, m = h.length - 1; 0 <= m; m--) {
          f = c(h[m])(f);
        }

        return f;
      };
    };
  };

  a.foldlArray = function (c) {
    return function (d) {
      return function (h) {
        for (var f = d, m = h.length, q = 0; q < m; q++) {
          f = c(f)(h[q]);
        }

        return f;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a["Data.Foldable"] = a["Data.Foldable"] || {};
  var c = a["Data.Foldable"],
      d = a["Data.Foldable"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Category"],
      q = a["Data.Function"],
      k = a["Data.Functor"],
      p = a["Data.Maybe"],
      t = a["Data.Monoid"],
      y = a["Data.Monoid.Disj"],
      b = a["Data.Newtype"],
      g = a["Data.Semigroup"],
      e = a["Data.Unit"];

  a = function a(B, z, u) {
    this.foldMap = B;
    this.foldl = z;
    this.foldr = u;
  };

  var l = function l(B) {
    return function (z) {
      return function (u) {
        return (0, z.foldr)(function () {
          var E = f.applySecond(B.Apply0());
          return function (H) {
            return E(u(H));
          };
        }())(h.pure(B)(e.unit));
      };
    };
  },
      r = new a(function (B) {
    return function (z) {
      return function (u) {
        if (u instanceof p.Nothing) return t.mempty(B);
        if (u instanceof p.Just) return z(u.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [z.constructor.name, u.constructor.name]);
      };
    };
  }, function (B) {
    return function (z) {
      return function (u) {
        if (u instanceof p.Nothing) return z;
        if (u instanceof p.Just) return B(z)(u.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [B.constructor.name, z.constructor.name, u.constructor.name]);
      };
    };
  }, function (B) {
    return function (z) {
      return function (u) {
        if (u instanceof p.Nothing) return z;
        if (u instanceof p.Just) return B(u.value0)(z);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [B.constructor.name, z.constructor.name, u.constructor.name]);
      };
    };
  }),
      v = function v(B) {
    return function (z) {
      return function (u) {
        return (0, B.foldr)(function (E) {
          return function (H) {
            return g.append(z.Semigroup0())(u(E))(H);
          };
        })(t.mempty(z));
      };
    };
  },
      D = new a(function (B) {
    return v(D)(B);
  }, d.foldlArray, d.foldrArray);

  c.Foldable = a;

  c.foldr = function (B) {
    return B.foldr;
  };

  c.foldl = function (B) {
    return B.foldl;
  };

  c.foldMap = function (B) {
    return B.foldMap;
  };

  c.fold = function (B) {
    return function (z) {
      return (0, B.foldMap)(z)(m.identity(m.categoryFn));
    };
  };

  c.traverse_ = l;

  c.for_ = function (B) {
    return function (z) {
      return q.flip(l(B)(z));
    };
  };

  c.intercalate = function (B) {
    return function (z) {
      return function (u) {
        return function (E) {
          return (0, B.foldl)(function (H) {
            return function (G) {
              return H.init ? {
                init: !1,
                acc: G
              } : {
                init: !1,
                acc: g.append(z.Semigroup0())(H.acc)(g.append(z.Semigroup0())(u)(G))
              };
            };
          })({
            init: !0,
            acc: t.mempty(z)
          })(E).acc;
        };
      };
    };
  };

  c.any = function (B) {
    return function (z) {
      return b.alaF(k.functorFn)(k.functorFn)(b.newtypeDisj)(b.newtypeDisj)(y.Disj)((0, B.foldMap)(y.monoidDisj(z)));
    };
  };

  c.find = function (B) {
    return function (z) {
      return (0, B.foldl)(function (u) {
        return function (E) {
          return u instanceof p.Nothing && z(E) ? new p.Just(E) : u;
        };
      })(p.Nothing.value);
    };
  };

  c.foldableArray = D;
  c.foldableMaybe = r;
})(PS);

(function (a) {
  a.runFn2 = function (c) {
    return function (d) {
      return function (h) {
        return c(d, h);
      };
    };
  };

  a.runFn4 = function (c) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function (m) {
            return c(d, h, f, m);
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
  a["new"] = function () {
    return {};
  };

  a.poke = function (c) {
    return function (d) {
      return function (h) {
        return function () {
          h[c] = d;
          return h;
        };
      };
    };
  };

  a["delete"] = function (c) {
    return function (d) {
      return function () {
        delete d[c];
        return d;
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
  a.unsafeCoerce = function (c) {
    return c;
  };
})(PS["Unsafe.Coerce"] = PS["Unsafe.Coerce"] || {});

(function (a) {
  a["Unsafe.Coerce"] = a["Unsafe.Coerce"] || {};
  a["Unsafe.Coerce"].unsafeCoerce = a["Unsafe.Coerce"].unsafeCoerce;
})(PS);

(function (a) {
  a["Foreign.Object"] = a["Foreign.Object"] || {};

  var c = a["Foreign.Object"],
      d = a["Foreign.Object"],
      h = a["Control.Applicative"],
      f = a["Control.Bind"],
      m = a["Control.Monad.ST.Internal"],
      q = a["Data.Foldable"],
      k = a["Data.Maybe"],
      p = a["Foreign.Object.ST"],
      t = a["Unsafe.Coerce"],
      y = d._copyST,
      b = function b(v) {
    return function (D) {
      return d.runST(function () {
        var B = y(D)();
        v(B)();
        return B;
      });
    };
  },
      g = a["Data.Function.Uncurried"].runFn4(d._lookup)(k.Nothing.value)(k.Just.create),
      e = function e(v) {
    return function (D) {
      return b(p.poke(v)(D));
    };
  },
      l = function l(v) {
    return function (D) {
      return function (B) {
        return d._foldM(f.bind(v.Bind1()))(D)(h.pure(v.Applicative0())(B));
      };
    };
  },
      r = function r(v) {
    return b(function (D) {
      return l(m.monadST)(function (B) {
        return function (z) {
          return function (u) {
            return p.poke(z)(u)(B);
          };
        };
      })(D)(v);
    });
  };

  c.lookup = g;

  c.fromFoldableWith = function (v) {
    return function (D) {
      return function (B) {
        return d.runST(function () {
          var z = p["new"]();
          q.for_(m.applicativeST)(v)(B)(function (u) {
            return function () {
              var E = d._lookupST(u.value1, D(u.value1), u.value0, z)();

              return p.poke(u.value0)(E)(z)();
            };
          })();
          return z;
        });
      };
    };
  };

  c.fromHomogeneous = function (v) {
    return t.unsafeCoerce;
  };

  c.alter = function (v) {
    return function (D) {
      return function (B) {
        var z = v(g(D)(B));
        if (z instanceof k.Nothing) return b(p["delete"](D))(B);
        if (z instanceof k.Just) return e(D)(z.value0)(B);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [z.constructor.name]);
      };
    };
  };

  c.unions = function (v) {
    return q.foldl(v)(r)(d.empty);
  };

  c.empty = d.empty;
  c.keys = d.keys;
})(PS);

(function (a) {
  a["Data.Argonaut.Core"] = a["Data.Argonaut.Core"] || {};
  var c = a["Data.Argonaut.Core"],
      d = a["Data.Argonaut.Core"];
  a = d.fromObject(a["Foreign.Object"].empty);
  c.jsonEmptyObject = a;
  c.stringify = d.stringify;
})(PS);

(function (a) {
  a._jsonParser = function (c, d, h) {
    try {
      return d(JSON.parse(h));
    } catch (f) {
      return c(f.message);
    }
  };
})(PS["Data.Argonaut.Parser"] = PS["Data.Argonaut.Parser"] || {});

(function (a) {
  a["Data.Argonaut.Parser"] = a["Data.Argonaut.Parser"] || {};
  var c = a["Data.Argonaut.Parser"],
      d = a["Data.Either"];

  a["Data.Argonaut.Parser"].jsonParser = function (h) {
    return c._jsonParser(d.Left.create, d.Right.create, h);
  };
})(PS);

(function (a) {
  a.range = function (c) {
    return function (d) {
      for (var h = c > d ? -1 : 1, f = Array(h * (d - c) + 1), m = c, q = 0; m !== d;) {
        f[q++] = m, m += h;
      }

      f[q] = m;
      return f;
    };
  };

  a.fromFoldableImpl = function () {
    function c(f, m) {
      this.head = f;
      this.tail = m;
    }

    function d(f) {
      return function (m) {
        return new c(f, m);
      };
    }

    var h = {};
    return function (f) {
      return function (m) {
        var q = [],
            k = 0;

        for (m = f(d)(h)(m); m !== h;) {
          q[k++] = m.head, m = m.tail;
        }

        return q;
      };
    };
  }();

  a.length = function (c) {
    return c.length;
  };

  a.cons = function (c) {
    return function (d) {
      return [c].concat(d);
    };
  };

  a.snoc = function (c) {
    return function (d) {
      var h = c.slice();
      h.push(d);
      return h;
    };
  };

  a["uncons'"] = function (c) {
    return function (d) {
      return function (h) {
        return 0 === h.length ? c({}) : d(h[0])(h.slice(1));
      };
    };
  };

  a.indexImpl = function (c) {
    return function (d) {
      return function (h) {
        return function (f) {
          return 0 > f || f >= h.length ? d : c(h[f]);
        };
      };
    };
  };

  a._updateAt = function (c) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function (m) {
            if (0 > h || h >= m.length) return d;
            m = m.slice();
            m[h] = f;
            return c(m);
          };
        };
      };
    };
  };

  a.filter = function (c) {
    return function (d) {
      return d.filter(c);
    };
  };

  a.slice = function (c) {
    return function (d) {
      return function (h) {
        return h.slice(c, d);
      };
    };
  };

  a.zipWith = function (c) {
    return function (d) {
      return function (h) {
        for (var f = d.length < h.length ? d.length : h.length, m = Array(f), q = 0; q < f; q++) {
          m[q] = c(d[q])(h[q]);
        }

        return m;
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
  var c = a["Data.Tuple"];
  a = a["Data.Functor"];

  var d = function () {
    function h(f, m) {
      this.value0 = f;
      this.value1 = m;
    }

    h.create = function (f) {
      return function (m) {
        return new h(f, m);
      };
    };

    return h;
  }();

  a = new a.Functor(function (h) {
    return function (f) {
      return new d(f.value0, h(f.value1));
    };
  });
  c.Tuple = d;

  c.fst = function (h) {
    return h.value0;
  };

  c.snd = function (h) {
    return h.value1;
  };

  c.functorTuple = a;
})(PS);

(function (a) {
  a["Data.Array"] = a["Data.Array"] || {};
  var c = a["Data.Array"],
      d = a["Data.Array"],
      h = a["Control.Bind"],
      f = a["Control.Category"],
      m = a["Data.Boolean"],
      q = a["Data.Foldable"],
      k = a["Data.Function"],
      p = a["Data.Maybe"];
  a = d.zipWith(a["Data.Tuple"].Tuple.create);

  var t = d._updateAt(p.Just.create)(p.Nothing.value),
      y = d["uncons'"](k["const"](p.Nothing.value))(function (r) {
    return function (v) {
      return new p.Just({
        head: r,
        tail: v
      });
    };
  }),
      b = function b(r) {
    return [r];
  },
      g = function g(r) {
    return 0 === d.length(r);
  },
      e = d.indexImpl(p.Just.create)(p.Nothing.value),
      l = k.flip(h.bind(h.bindArray));

  h = function (r) {
    return l(function () {
      var v = p.maybe([])(b);
      return function (D) {
        return v(r(D));
      };
    }());
  }(f.identity(f.categoryFn));

  c.fromFoldable = function (r) {
    return d.fromFoldableImpl(q.foldr(r));
  };

  c.singleton = b;
  c["null"] = g;

  c.head = function (r) {
    return e(r)(0);
  };

  c.init = function (r) {
    if (g(r)) return p.Nothing.value;
    if (m.otherwise) return new p.Just(d.slice(0)(d.length(r) - 1 | 0)(r));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [r.constructor.name]);
  };

  c.uncons = y;
  c.index = e;
  c.updateAt = t;
  c.concatMap = l;
  c.catMaybes = h;
  c.zip = a;
  c.range = d.range;
  c.length = d.length;
  c.cons = d.cons;
  c.snoc = d.snoc;
  c.filter = d.filter;
})(PS);

(function (a) {
  a.toUpper = function (c) {
    return c.toUpperCase();
  };

  a.trim = function (c) {
    return c.trim();
  };

  a.joinWith = function (c) {
    return function (d) {
      return d.join(c);
    };
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});

(function (a) {
  a["Data.String.Common"] = a["Data.String.Common"] || {};
  var c = a["Data.String.Common"];
  a = a["Data.String.Common"];

  c["null"] = function (d) {
    return "" === d;
  };

  c.toUpper = a.toUpper;
  c.trim = a.trim;
  c.joinWith = a.joinWith;
})(PS);

(function (a) {
  a.traverseArrayImpl = function () {
    function c(m) {
      return [m];
    }

    function d(m) {
      return function (q) {
        return [m, q];
      };
    }

    function h(m) {
      return function (q) {
        return function (k) {
          return [m, q, k];
        };
      };
    }

    function f(m) {
      return function (q) {
        return m.concat(q);
      };
    }

    return function (m) {
      return function (q) {
        return function (k) {
          return function (p) {
            return function (t) {
              function y(b, g) {
                switch (g - b) {
                  case 0:
                    return k([]);

                  case 1:
                    return q(c)(p(t[b]));

                  case 2:
                    return m(q(d)(p(t[b])))(p(t[b + 1]));

                  case 3:
                    return m(m(q(h)(p(t[b])))(p(t[b + 1])))(p(t[b + 2]));

                  default:
                    var e = b + 2 * Math.floor((g - b) / 4);
                    return m(q(f)(y(b, e)))(y(e, g));
                }
              }

              return y(0, t.length);
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
      d = a["Data.Traversable"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Category"],
      q = a["Data.Foldable"],
      k = a["Data.Functor"],
      p = a["Data.Maybe"];

  a = function a(g, e, l, r) {
    this.Foldable1 = g;
    this.Functor0 = e;
    this.sequence = l;
    this.traverse = r;
  };

  var t = new a(function () {
    return q.foldableMaybe;
  }, function () {
    return p.functorMaybe;
  }, function (g) {
    return function (e) {
      if (e instanceof p.Nothing) return h.pure(g)(p.Nothing.value);
      if (e instanceof p.Just) return k.map(g.Apply0().Functor0())(p.Just.create)(e.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [e.constructor.name]);
    };
  }, function (g) {
    return function (e) {
      return function (l) {
        if (l instanceof p.Nothing) return h.pure(g)(p.Nothing.value);
        if (l instanceof p.Just) return k.map(g.Apply0().Functor0())(p.Just.create)(e(l.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [e.constructor.name, l.constructor.name]);
      };
    };
  }),
      y = function y(g) {
    return function (e) {
      return (0, g.traverse)(e)(m.identity(m.categoryFn));
    };
  },
      b = new a(function () {
    return q.foldableArray;
  }, function () {
    return k.functorArray;
  }, function (g) {
    return y(b)(g);
  }, function (g) {
    return d.traverseArrayImpl(f.apply(g.Apply0()))(k.map(g.Apply0().Functor0()))(h.pure(g));
  });

  c.traverse = function (g) {
    return g.traverse;
  };

  c.sequence = function (g) {
    return g.sequence;
  };

  c.traversableArray = b;
  c.traversableMaybe = t;
})(PS);

(function (a) {
  a.infinity = Infinity;

  a.readInt = function (c) {
    return function (d) {
      return parseInt(d, c);
    };
  };

  a._encodeURIComponent = function (c) {
    return function (d, h, f) {
      try {
        return h(c(f));
      } catch (m) {
        return d(m.message);
      }
    };
  }(encodeURIComponent);
})(PS.Global = PS.Global || {});

(function (a) {
  a.Global = a.Global || {};
  var c = a.Global,
      d = a.Global,
      h = a["Data.Function"],
      f = a["Data.Maybe"];

  c.encodeURIComponent = function (m) {
    return d._encodeURIComponent(h["const"](f.Nothing.value), f.Just.create, m);
  };

  c.infinity = d.infinity;
  c.readInt = d.readInt;
})(PS);

(function (a) {
  a["Data.FormURLEncoded"] = a["Data.FormURLEncoded"] || {};
  var c = a["Data.FormURLEncoded"],
      d = a["Control.Apply"],
      h = a["Data.Functor"],
      f = a["Data.Maybe"],
      m = a["Data.String.Common"],
      q = a["Data.Traversable"],
      k = a.Global;

  a = function () {
    var p = h.map(f.functorMaybe)(m.joinWith("&")),
        t = q.traverse(q.traversableArray)(f.applicativeMaybe)(function (y) {
      if (y.value1 instanceof f.Nothing) return k.encodeURIComponent(y.value0);
      if (y.value1 instanceof f.Just) return d.apply(f.applyMaybe)(h.map(f.functorMaybe)(function (b) {
        return function (g) {
          return b + ("=" + g);
        };
      })(k.encodeURIComponent(y.value0)))(k.encodeURIComponent(y.value1.value0));
      throw Error("Failed pattern match at Data.FormURLEncoded (line 37, column 18 - line 39, column 108): " + [y.constructor.name]);
    });
    return function (y) {
      return p(t(y));
    };
  }();

  c.encode = a;
})(PS);

(function (a) {
  a.showIntImpl = function (c) {
    return c.toString();
  };

  a.showCharImpl = function (c) {
    var d = c.charCodeAt(0);

    if (32 > d || 127 === d) {
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

      return "'\\" + d.toString(10) + "'";
    }

    return "'" === c || "\\" === c ? "'\\" + c + "'" : "'" + c + "'";
  };

  a.showStringImpl = function (c) {
    var d = c.length;
    return '"' + c.replace(/[\0-\x1F\x7F"\\]/g, function (h, f) {
      switch (h) {
        case '"':
        case "\\":
          return "\\" + h;

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
      f = f < d && "0" <= c[f] && "9" >= c[f] ? "\\&" : "";
      return "\\" + h.charCodeAt(0).toString(10) + f;
    }) + '"';
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};
  var c = a["Data.Show"],
      d = a["Data.Show"];

  a = function a(q) {
    this.show = q;
  };

  var h = new a(d.showStringImpl),
      f = new a(d.showIntImpl);
  d = new a(d.showCharImpl);
  var m = new a(function (q) {
    if (q) return "true";
    if (!q) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [q.constructor.name]);
  });
  c.Show = a;

  c.show = function (q) {
    return q.show;
  };

  c.showBoolean = m;
  c.showInt = f;
  c.showChar = d;
  c.showString = h;
})(PS);

(function (a) {
  a["Data.HTTP.Method"] = a["Data.HTTP.Method"] || {};
  var c = a["Data.HTTP.Method"],
      d = a["Data.Either"];
  a = a["Data.Show"];

  var h = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      f = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      m = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      q = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      k = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      p = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      t = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      y = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      b = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      g = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      e = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      l = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      r = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      v = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      D = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      B = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      z = new a.Show(function (u) {
    if (u instanceof h) return "OPTIONS";
    if (u instanceof f) return "GET";
    if (u instanceof m) return "HEAD";
    if (u instanceof q) return "POST";
    if (u instanceof k) return "PUT";
    if (u instanceof p) return "DELETE";
    if (u instanceof t) return "TRACE";
    if (u instanceof y) return "CONNECT";
    if (u instanceof b) return "PROPFIND";
    if (u instanceof g) return "PROPPATCH";
    if (u instanceof e) return "MKCOL";
    if (u instanceof l) return "COPY";
    if (u instanceof r) return "MOVE";
    if (u instanceof v) return "LOCK";
    if (u instanceof D) return "UNLOCK";
    if (u instanceof B) return "PATCH";
    throw Error("Failed pattern match at Data.HTTP.Method (line 40, column 1 - line 56, column 23): " + [u.constructor.name]);
  });

  d = d.either(a.show(z))(function (u) {
    return u;
  });
  c.GET = f;
  c.print = d;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var c = a["Control.Monad.Rec.Class"],
      d = a["Data.Bifunctor"],
      h = a["Data.Either"],
      f = function () {
    function p(t) {
      this.value0 = t;
    }

    p.create = function (t) {
      return new p(t);
    };

    return p;
  }(),
      m = function () {
    function p(t) {
      this.value0 = t;
    }

    p.create = function (t) {
      return new p(t);
    };

    return p;
  }();

  a = function a(p, t) {
    this.Monad0 = p;
    this.tailRecM = t;
  };

  var q = function q(p) {
    return function (t) {
      t = p(t);

      for (var y = !1, b; !y;) {
        if (b = t, b instanceof f) t = p(b.value0), b = void 0;else if (b instanceof m) y = !0, b = b.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [b.constructor.name]);
      }

      return b;
    };
  },
      k = new a(function () {
    return h.monadEither;
  }, function (p) {
    return function (t) {
      return q(function (y) {
        if (y instanceof h.Left) return new m(new h.Left(y.value0));
        if (y instanceof h.Right && y.value0 instanceof f) return new f(p(y.value0.value0));
        if (y instanceof h.Right && y.value0 instanceof m) return new m(new h.Right(y.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [y.constructor.name]);
      })(p(t));
    };
  });

  d = new d.Bifunctor(function (p) {
    return function (t) {
      return function (y) {
        if (y instanceof f) return new f(p(y.value0));
        if (y instanceof m) return new m(t(y.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [p.constructor.name, t.constructor.name, y.constructor.name]);
      };
    };
  });
  c.Loop = f;
  c.Done = m;
  c.MonadRec = a;

  c.tailRecM = function (p) {
    return p.tailRecM;
  };

  c.bifunctorStep = d;
  c.monadRecEither = k;
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  var c = a["Control.Plus"],
      d = a["Control.Alt"];

  a = function a(f, m) {
    this.Alt0 = f;
    this.empty = m;
  };

  var h = new a(function () {
    return d.altArray;
  }, []);
  c.Plus = a;

  c.empty = function (f) {
    return f.empty;
  };

  c.plusArray = h;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var c = a["Data.NonEmpty"],
      d = a["Control.Plus"],
      h = a["Data.Foldable"],
      f = a["Data.Functor"],
      m = a["Data.Semigroup"],
      q = a["Data.Show"],
      k = function () {
    function p(t, y) {
      this.value0 = t;
      this.value1 = y;
    }

    p.create = function (t) {
      return function (y) {
        return new p(t, y);
      };
    };

    return p;
  }();

  c.NonEmpty = k;

  c.singleton = function (p) {
    return function (t) {
      return new k(t, d.empty(p));
    };
  };

  c.showNonEmpty = function (p) {
    return function (t) {
      return new q.Show(function (y) {
        return "(NonEmpty " + (q.show(p)(y.value0) + (" " + (q.show(t)(y.value1) + ")")));
      });
    };
  };

  c.functorNonEmpty = function (p) {
    return new f.Functor(function (t) {
      return function (y) {
        return new k(t(y.value0), f.map(p)(t)(y.value1));
      };
    });
  };

  c.foldableNonEmpty = function (p) {
    return new h.Foldable(function (t) {
      return function (y) {
        return function (b) {
          return m.append(t.Semigroup0())(y(b.value0))(h.foldMap(p)(t)(y)(b.value1));
        };
      };
    }, function (t) {
      return function (y) {
        return function (b) {
          return h.foldl(p)(t)(t(y)(b.value0))(b.value1);
        };
      };
    }, function (t) {
      return function (y) {
        return function (b) {
          return t(b.value0)(h.foldr(p)(t)(y)(b.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var c = a["Data.List.Types"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Plus"],
      q = a["Data.Foldable"],
      k = a["Data.Function"],
      p = a["Data.Functor"],
      t = a["Data.Monoid"],
      y = a["Data.NonEmpty"],
      b = a["Data.Semigroup"],
      g = a["Data.Show"],
      e = function () {
    function N() {}

    N.value = new N();
    return N;
  }(),
      l = function () {
    function N(S, V) {
      this.value0 = S;
      this.value1 = V;
    }

    N.create = function (S) {
      return function (V) {
        return new N(S, V);
      };
    };

    return N;
  }(),
      r = new p.Functor(function (N) {
    return function (S) {
      return function (V) {
        function L(I, F) {
          if (F instanceof l && F.value1 instanceof l && F.value1.value1 instanceof l) M = new l(F, I), V = F.value1.value1.value1;else return w = !0, function (A) {
            return function (Y) {
              for (var ra = A, Ba = !1, Ca; !Ba;) {
                Ca = ra;
                var za = Y;
                Ca instanceof l && Ca.value0 instanceof l && Ca.value0.value1 instanceof l && Ca.value0.value1.value1 instanceof l ? (ra = Ca.value1, Y = new l(N(Ca.value0.value0), new l(N(Ca.value0.value1.value0), new l(N(Ca.value0.value1.value1.value0), za))), Ca = void 0) : (Ba = !0, Ca = za);
              }

              return Ca;
            };
          }(I)(function (A) {
            return A instanceof l && A.value1 instanceof l && A.value1.value1 instanceof e ? new l(N(A.value0), new l(N(A.value1.value0), e.value)) : A instanceof l && A.value1 instanceof e ? new l(N(A.value0), e.value) : e.value;
          }(F));
        }

        for (var M = S, w = !1, P; !w;) {
          P = L(M, V);
        }

        return P;
      };
    }(e.value);
  }),
      v = y.functorNonEmpty(r),
      D = new q.Foldable(function (N) {
    return function (S) {
      return q.foldl(D)(function (V) {
        var L = b.append(N.Semigroup0())(V);
        return function (M) {
          return L(S(M));
        };
      })(t.mempty(N));
    };
  }, function (N) {
    return function (S) {
      return function (V) {
        for (var L = S, M = !1, w; !M;) {
          w = L;
          var P = V;
          if (P instanceof e) M = !0;else {
            if (P instanceof l) L = N(w)(P.value0), V = P.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [P.constructor.name]);
            w = void 0;
          }
        }

        return w;
      };
    };
  }, function (N) {
    return function (S) {
      var V = q.foldl(D)(k.flip(l.create))(e.value),
          L = q.foldl(D)(k.flip(N))(S);
      return function (M) {
        return L(V(M));
      };
    };
  });

  a = y.foldableNonEmpty(D);

  var B = new b.Semigroup(function (N) {
    return function (S) {
      return q.foldr(D)(l.create)(S)(N);
    };
  }),
      z = new t.Monoid(function () {
    return B;
  }, e.value),
      u = new b.Semigroup(function (N) {
    return function (S) {
      return new y.NonEmpty(N.value0, b.append(B)(N.value1)(new l(S.value0, S.value1)));
    };
  }),
      E = function E(N) {
    return new g.Show(function (S) {
      return S instanceof e ? "Nil" : "(" + (q.intercalate(D)(t.monoidString)(" : ")(p.map(r)(g.show(N))(S)) + " : Nil)");
    });
  },
      H = new f.Apply(function () {
    return r;
  }, function (N) {
    return function (S) {
      if (N instanceof e) return e.value;
      if (N instanceof l) return b.append(B)(p.map(r)(N.value0)(S))(f.apply(H)(N.value1)(S));
      throw Error("Failed pattern match at Data.List.Types (line 155, column 1 - line 157, column 48): " + [N.constructor.name, S.constructor.name]);
    };
  }),
      G = new f.Apply(function () {
    return v;
  }, function (N) {
    return function (S) {
      return new y.NonEmpty(N.value0(S.value0), b.append(B)(f.apply(H)(N.value1)(new l(S.value0, e.value)))(f.apply(H)(new l(N.value0, N.value1))(S.value1)));
    };
  }),
      J = new d.Alt(function () {
    return r;
  }, b.append(B)),
      K = new m.Plus(function () {
    return J;
  }, e.value);

  d = new h.Applicative(function () {
    return G;
  }, function () {
    var N = y.singleton(K);
    return function (S) {
      return N(S);
    };
  }());
  c.Nil = e;
  c.Cons = l;

  c.NonEmptyList = function (N) {
    return N;
  };

  c.monoidList = z;
  c.foldableList = D;
  c.plusList = K;

  c.showNonEmptyList = function (N) {
    return new g.Show(function (S) {
      return "(NonEmptyList " + (g.show(y.showNonEmpty(N)(E(N)))(S) + ")");
    });
  };

  c.functorNonEmptyList = v;
  c.applicativeNonEmptyList = d;
  c.semigroupNonEmptyList = u;
  c.foldableNonEmptyList = a;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var c = a["Data.List"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Bind"],
      m = a["Control.Monad.Rec.Class"],
      q = a["Data.Bifunctor"],
      k = a["Data.Functor"],
      p = a["Data.List.Types"],
      t = a["Data.Maybe"],
      y = a["Data.Unit"],
      b = function () {
    return function (g) {
      return function (e) {
        for (var l = g, r = !1, v; !r;) {
          v = l;
          var D = e;
          if (D instanceof p.Nil) r = !0;else {
            if (D instanceof p.Cons) l = new p.Cons(D.value0, v), e = D.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [v.constructor.name, D.constructor.name]);
            v = void 0;
          }
        }

        return v;
      };
    }(p.Nil.value);
  }();

  c.manyRec = function (g) {
    return function (e) {
      return function (l) {
        return m.tailRecM(g)(function (r) {
          return f.bind(g.Monad0().Bind1())(d.alt(e.Plus1().Alt0())(k.map(e.Plus1().Alt0().Functor0())(m.Loop.create)(l))(h.pure(e.Applicative0())(new m.Done(y.unit))))(function (v) {
            return h.pure(e.Applicative0())(q.bimap(m.bifunctorStep)(function (D) {
              return new p.Cons(D, r);
            })(function (D) {
              return b(r);
            })(v));
          });
        })(p.Nil.value);
      };
    };
  };

  c.uncons = function (g) {
    if (g instanceof p.Nil) return t.Nothing.value;
    if (g instanceof p.Cons) return new t.Just({
      head: g.value0,
      tail: g.value1
    });
    throw Error("Failed pattern match at Data.List (line 259, column 1 - line 259, column 66): " + [g.constructor.name]);
  };

  c.reverse = b;
})(PS);

(function (a) {
  a.unfoldrArrayImpl = function (c) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function (m) {
            return function (q) {
              for (var k = [];;) {
                q = m(q);
                if (c(q)) return k;
                q = d(q);
                k.push(h(q));
                q = f(q);
              }
            };
          };
        };
      };
    };
  };
})(PS["Data.Unfoldable"] = PS["Data.Unfoldable"] || {});

(function (a) {
  a.unfoldr1ArrayImpl = function (c) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function (m) {
            return function (q) {
              for (var k = [];;) {
                q = m(q);
                k.push(h(q));
                q = f(q);
                if (c(q)) return k;
                q = d(q);
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
      d = a["Data.Boolean"],
      h = a["Data.Maybe"],
      f = a["Data.Tuple"];
  a = new function (q) {
    this.unfoldr1 = q;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(h.isNothing)(h.fromJust())(f.fst)(f.snd));

  var m = function m(q) {
    return function (k) {
      return function (p) {
        return (0, q.unfoldr1)(function (t) {
          if (0 >= t) return new f.Tuple(p, h.Nothing.value);
          if (d.otherwise) return new f.Tuple(p, new h.Just(t - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [t.constructor.name]);
        })(k - 1 | 0);
      };
    };
  };

  c.unfoldr1 = function (q) {
    return q.unfoldr1;
  };

  c.singleton = function (q) {
    return m(q)(1);
  };

  c.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Unfoldable"] = a["Data.Unfoldable"] || {};
  var c = a["Data.Unfoldable"],
      d = a["Data.Function"],
      h = a["Data.Functor"],
      f = a["Data.Maybe"],
      m = a["Data.Tuple"],
      q = a["Data.Unfoldable1"];
  a = new function (k, p) {
    this.Unfoldable10 = k;
    this.unfoldr = p;
  }(function () {
    return q.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(f.isNothing)(f.fromJust())(m.fst)(m.snd));

  c.unfoldr = function (k) {
    return k.unfoldr;
  };

  c.fromMaybe = function (k) {
    return (0, k.unfoldr)(function (p) {
      return h.map(f.functorMaybe)(d.flip(m.Tuple.create)(f.Nothing.value))(p);
    });
  };

  c.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.List.NonEmpty"] = a["Data.List.NonEmpty"] || {};
  var c = a["Data.List.NonEmpty"],
      d = a["Data.Functor"],
      h = a["Data.List"],
      f = a["Data.List.Types"],
      m = a["Data.Maybe"],
      q = a["Data.NonEmpty"],
      k = a["Data.Tuple"],
      p = a["Data.Unfoldable"];

  a = function () {
    var t = q.singleton(f.plusList);
    return function (y) {
      return f.NonEmptyList(t(y));
    };
  }();

  c.toUnfoldable = function (t) {
    var y = p.unfoldr(t)(function (b) {
      return d.map(m.functorMaybe)(function (g) {
        return new k.Tuple(g.head, g.tail);
      })(h.uncons(b));
    });
    return function (b) {
      return y(new f.Cons(b.value0, b.value1));
    };
  };

  c.singleton = a;

  c.head = function (t) {
    return t.value0;
  };
})(PS);

(function (a) {
  a["null"] = null;

  a.nullable = function (c, d, h) {
    return null == c ? d : h(c);
  };

  a.notNull = function (c) {
    return c;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var c = a["Data.Nullable"],
      d = a["Data.Nullable"],
      h = a["Data.Maybe"];
  a = h.maybe(d["null"])(d.notNull);

  c.toMaybe = function (f) {
    return d.nullable(f, h.Nothing.value, h.Just.create);
  };

  c.toNullable = a;
})(PS);

(function (a) {
  var c = function () {
    function d(e, l, r, v) {
      this.tag = e;
      this._1 = l;
      this._2 = r;
      this._3 = v;
    }

    function h(e) {
      var l = function l(r, v, D) {
        return new d(e, r, v, D);
      };

      l.tag = e;
      return l;
    }

    function f(e) {
      return new d("Pure", void 0);
    }

    function m(e) {
      try {
        e();
      } catch (l) {
        setTimeout(function () {
          throw l;
        }, 0);
      }
    }

    function q(e, l, r) {
      try {
        return l(r());
      } catch (v) {
        return e(v);
      }
    }

    function k(e, l, r) {
      try {
        return l(r)();
      } catch (v) {
        return r(e(v))(), f;
      }
    }

    function p(e, l, r) {
      function v(M) {
        for (var w, P, I;;) {
          switch (I = P = w = null, z) {
            case 2:
              z = 1;

              try {
                u = G(u), null === J ? G = null : (G = J._1, J = J._2);
              } catch (A) {
                z = 5, E = e.left(A), u = null;
              }

              break;

            case 3:
              e.isLeft(u) ? (z = 5, E = u, u = null) : null === G ? z = 5 : (z = 2, u = e.fromRight(u));
              break;

            case 1:
              switch (u.tag) {
                case "Bind":
                  G && (J = new d("Cons", G, J));
                  G = u._2;
                  z = 1;
                  u = u._1;
                  break;

                case "Pure":
                  null === G ? (z = 5, u = e.right(u._1)) : (z = 2, u = u._1);
                  break;

                case "Sync":
                  z = 3;
                  u = q(e.left, e.right, u._1);
                  break;

                case "Async":
                  z = 4;
                  u = k(e.left, u._1, function (A) {
                    return function () {
                      B === M && (B++, g.enqueue(function () {
                        B === M + 1 && (z = 3, u = A, v(B));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  z = 5;
                  E = e.left(u._1);
                  u = null;
                  break;

                case "Catch":
                  K = null === G ? new d("Cons", u, K, H) : new d("Cons", u, new d("Cons", new d("Resume", G, J), K, H), H);
                  J = G = null;
                  z = 1;
                  u = u._1;
                  break;

                case "Bracket":
                  N++;
                  K = null === G ? new d("Cons", u, K, H) : new d("Cons", u, new d("Cons", new d("Resume", G, J), K, H), H);
                  J = G = null;
                  z = 1;
                  u = u._1;
                  break;

                case "Fork":
                  z = 3;
                  w = p(e, l, u._2);
                  l && l.register(w);
                  u._1 && w.run();
                  u = e.right(w);
                  break;

                case "Sequential":
                  z = 1, u = y(e, l, u._1);
              }

              break;

            case 5:
              J = G = null;
              if (null === K) z = 6, u = H || E || u;else switch (w = K._3, I = K._1, K = K._2, I.tag) {
                case "Catch":
                  H && H !== w && 0 === N ? z = 5 : E && (z = 1, u = I._2(e.fromLeft(E)), E = null);
                  break;

                case "Resume":
                  H && H !== w && 0 === N || E ? z = 5 : (G = I._1, J = I._2, z = 2, u = e.fromRight(u));
                  break;

                case "Bracket":
                  N--;
                  null === E && (P = e.fromRight(u), K = new d("Cons", new d("Release", I._2, P), K, w), H === w || 0 < N) && (z = 1, u = I._3(P));
                  break;

                case "Release":
                  K = new d("Cons", new d("Finalized", u, E), K, H);
                  z = 1;
                  u = H && H !== w && 0 === N ? I._1.killed(e.fromLeft(H))(I._2) : E ? I._1.failed(e.fromLeft(E))(I._2) : I._1.completed(e.fromRight(u))(I._2);
                  E = null;
                  N++;
                  break;

                case "Finalizer":
                  N++;
                  K = new d("Cons", new d("Finalized", u, E), K, H);
                  z = 1;
                  u = I._1;
                  break;

                case "Finalized":
                  N--, z = 5, u = I._1, E = I._2;
              }
              break;

            case 6:
              for (var F in V) {
                V.hasOwnProperty(F) && (L = L && V[F].rethrow, m(V[F].handler(u)));
              }

              V = null;
              H && E ? setTimeout(function () {
                throw e.fromLeft(E);
              }, 0) : e.isLeft(u) && L && setTimeout(function () {
                if (L) throw e.fromLeft(u);
              }, 0);
              return;

            case 0:
              z = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function D(M) {
        return function () {
          if (6 === z) return L = L && M.rethrow, M.handler(u)(), function () {};
          var w = S++;
          V = V || {};
          V[w] = M;
          return function () {
            null !== V && delete V[w];
          };
        };
      }

      var B = 0,
          z = 0,
          u = r,
          E = null,
          H = null,
          G = null,
          J = null,
          K = null,
          N = 0,
          S = 0,
          V = null,
          L = !0;
      return {
        kill: function kill(M, w) {
          return function () {
            if (6 === z) return w(e.right(void 0))(), function () {};
            var P = D({
              rethrow: !1,
              handler: function handler() {
                return w(e.right(void 0));
              }
            })();

            switch (z) {
              case 0:
                H = e.left(M);
                z = 6;
                u = H;
                v(B);
                break;

              case 4:
                null === H && (H = e.left(M));
                0 === N && (4 === z && (K = new d("Cons", new d("Finalizer", u(M)), K, H)), z = 5, E = u = null, v(++B));
                break;

              default:
                null === H && (H = e.left(M)), 0 === N && (z = 5, E = u = null);
            }

            return P;
          };
        },
        join: function join(M) {
          return function () {
            var w = D({
              rethrow: !1,
              handler: M
            })();
            0 === z && v(B);
            return w;
          };
        },
        onComplete: D,
        isSuspended: function isSuspended() {
          return 0 === z;
        },
        run: function run() {
          0 === z && (g.isDraining() ? v(B) : g.enqueue(function () {
            v(B);
          }));
        }
      };
    }

    function t(e, l, r, v) {
      function D(V, L, M) {
        var w = L,
            P = null,
            I = null,
            F = 0;
        L = {};

        a: for (;;) {
          var A = null;

          switch (w.tag) {
            case "Forked":
              w._3 === b && (A = H[w._1], L[F++] = A.kill(V, function (Y) {
                return function () {
                  F--;
                  0 === F && M(Y)();
                };
              }));
              if (null === P) break a;
              w = P._2;
              null === I ? P = null : (P = I._1, I = I._2);
              break;

            case "Map":
              w = w._2;
              break;

            case "Apply":
            case "Alt":
              P && (I = new d("Cons", P, I)), P = w, w = w._1;
          }
        }

        if (0 === F) M(e.right(void 0))();else for (V = 0, A = F; V < A; V++) {
          L[V] = L[V]();
        }
        return L;
      }

      function B(V, L, M) {
        var w, P;

        if (e.isLeft(V)) {
          var I = V;
          var F = null;
        } else F = V, I = null;

        for (;;) {
          var A = P = w = V = null;
          if (null !== N) break;

          if (null === L) {
            v(I || F)();
            break;
          }

          if (L._3 !== b) break;

          switch (L.tag) {
            case "Map":
              null === I ? (L._3 = e.right(L._1(e.fromRight(F))), F = L._3) : L._3 = I;
              break;

            case "Apply":
              V = L._1._3;
              w = L._2._3;

              if (I) {
                if (L._3 = I, P = !0, A = G++, J[A] = D(K, I === V ? L._2 : L._1, function () {
                  return function () {
                    delete J[A];
                    P ? P = !1 : null === M ? B(I, null, null) : B(I, M._1, M._2);
                  };
                }), P) {
                  P = !1;
                  return;
                }
              } else {
                if (V === b || w === b) return;
                F = e.right(e.fromRight(V)(e.fromRight(w)));
                L._3 = F;
              }

              break;

            case "Alt":
              V = L._1._3;
              w = L._2._3;
              if (V === b && e.isLeft(w) || w === b && e.isLeft(V)) return;
              if (V !== b && e.isLeft(V) && w !== b && e.isLeft(w)) I = F === V ? w : V, F = null, L._3 = I;else if (L._3 = F, P = !0, A = G++, J[A] = D(K, F === V ? L._2 : L._1, function () {
                return function () {
                  delete J[A];
                  P ? P = !1 : null === M ? B(F, null, null) : B(F, M._1, M._2);
                };
              }), P) {
                P = !1;
                return;
              }
          }

          null === M ? L = null : (L = M._1, M = M._2);
        }
      }

      function z(V) {
        return function (L) {
          return function () {
            delete H[V._1];
            V._3 = L;
            B(L, V._2._1, V._2._2);
          };
        };
      }

      function u(V, L) {
        N = e.left(V);
        var M;

        for (M in J) {
          if (J.hasOwnProperty(M)) {
            var w = J[M];

            for (M in w) {
              if (w.hasOwnProperty(M)) w[M]();
            }
          }
        }

        J = null;
        var P = D(V, S, L);
        return function (I) {
          return new d("Async", function (F) {
            return function () {
              for (var A in P) {
                if (P.hasOwnProperty(A)) P[A]();
              }

              return f;
            };
          });
        };
      }

      var E = 0,
          H = {},
          G = 0,
          J = {},
          K = Error("[ParAff] Early exit"),
          N = null,
          S = b;

      (function () {
        var V = 1,
            L = r,
            M = null,
            w = null;

        a: for (;;) {
          switch (V) {
            case 1:
              switch (L.tag) {
                case "Map":
                  M && (w = new d("Cons", M, w));
                  M = new d("Map", L._1, b, b);
                  L = L._2;
                  break;

                case "Apply":
                  M && (w = new d("Cons", M, w));
                  M = new d("Apply", b, L._2, b);
                  L = L._1;
                  break;

                case "Alt":
                  M && (w = new d("Cons", M, w));
                  M = new d("Alt", b, L._2, b);
                  L = L._1;
                  break;

                default:
                  var P = E++;
                  V = 5;
                  var I = L;
                  L = new d("Forked", P, new d("Cons", M, w), b);
                  I = p(e, l, I);
                  I.onComplete({
                    rethrow: !1,
                    handler: z(L)
                  })();
                  H[P] = I;
                  l && l.register(I);
              }

              break;

            case 5:
              if (null === M) break a;
              M._1 === b ? (M._1 = L, V = 1, L = M._2, M._2 = b) : (M._2 = L, L = M, null === w ? M = null : (M = w._1, w = w._2));
          }
        }

        S = L;

        for (P = 0; P < E; P++) {
          H[P].run();
        }
      })();

      return function (V) {
        return new d("Async", function (L) {
          return function () {
            return u(V, L);
          };
        });
      };
    }

    function y(e, l, r) {
      return new d("Async", function (v) {
        return function () {
          return t(e, l, r, v);
        };
      });
    }

    var b = {},
        g = function () {
      function e() {
        for (D = !0; 0 !== l;) {
          l--;
          var B = v[r];
          v[r] = void 0;
          r = (r + 1) % 1024;
          B();
        }

        D = !1;
      }

      var l = 0,
          r = 0,
          v = Array(1024),
          D = !1;
      return {
        isDraining: function isDraining() {
          return D;
        },
        enqueue: function enqueue(B) {
          if (1024 === l) {
            var z = D;
            e();
            D = z;
          }

          v[(r + l) % 1024] = B;
          l++;
          D || e();
        }
      };
    }();

    d.EMPTY = b;
    d.Pure = h("Pure");
    d.Throw = h("Throw");
    d.Catch = h("Catch");
    d.Sync = h("Sync");
    d.Async = h("Async");
    d.Bind = h("Bind");
    d.Bracket = h("Bracket");
    d.Fork = h("Fork");
    d.Seq = h("Sequential");
    d.ParMap = h("Map");
    d.ParApply = h("Apply");
    d.ParAlt = h("Alt");
    d.Fiber = p;

    d.Supervisor = function (e) {
      var l = {},
          r = 0,
          v = 0;
      return {
        register: function register(D) {
          var B = r++;
          D.onComplete({
            rethrow: !0,
            handler: function handler(z) {
              return function () {
                v--;
                delete l[B];
              };
            }
          })();
          l[B] = D;
          v++;
        },
        isEmpty: function isEmpty() {
          return 0 === v;
        },
        killAll: function killAll(D, B) {
          return function () {
            function z(G) {
              E[G] = l[G].kill(D, function (J) {
                return function () {
                  delete E[G];
                  u--;
                  e.isLeft(J) && e.fromLeft(J) && setTimeout(function () {
                    throw e.fromLeft(J);
                  }, 0);
                  0 === u && B();
                };
              })();
            }

            if (0 === v) return B();
            var u = 0,
                E = {},
                H;

            for (H in l) {
              l.hasOwnProperty(H) && (u++, z(H));
            }

            l = {};
            v = r = 0;
            return function (G) {
              return new d("Sync", function () {
                for (var J in E) {
                  if (E.hasOwnProperty(J)) E[J]();
                }
              });
            };
          };
        }
      };
    };

    d.Scheduler = g;
    d.nonCanceler = f;
    return d;
  }();

  a._pure = c.Pure;
  a._throwError = c.Throw;

  a._catchError = function (d) {
    return function (h) {
      return c.Catch(d, h);
    };
  };

  a._map = function (d) {
    return function (h) {
      return h.tag === c.Pure.tag ? c.Pure(d(h._1)) : c.Bind(h, function (f) {
        return c.Pure(d(f));
      });
    };
  };

  a._bind = function (d) {
    return function (h) {
      return c.Bind(d, h);
    };
  };

  a._liftEffect = c.Sync;

  a._parAffMap = function (d) {
    return function (h) {
      return c.ParMap(d, h);
    };
  };

  a._parAffApply = function (d) {
    return function (h) {
      return c.ParApply(d, h);
    };
  };

  a._parAffAlt = function (d) {
    return function (h) {
      return c.ParAlt(d, h);
    };
  };

  a.makeAff = c.Async;

  a._makeFiber = function (d, h) {
    return function () {
      return c.Fiber(d, null, h);
    };
  };

  a._delay = function () {
    function d(h, f) {
      return 0 === h && "undefined" !== typeof setImmediate ? setImmediate(f) : setTimeout(f, h);
    }

    return function (h, f) {
      return c.Async(function (m) {
        return function () {
          var q = d(f, m(h()));
          return function () {
            return c.Sync(function () {
              var k = 0 === f && "undefined" !== typeof clearImmediate ? clearImmediate(q) : clearTimeout(q);
              return h(k);
            });
          };
        };
      });
    };
  }();

  a._sequential = c.Seq;
})(PS["Effect.Aff"] = PS["Effect.Aff"] || {});

(function (a) {
  a["Control.Parallel.Class"] = a["Control.Parallel.Class"] || {};
  a = a["Control.Parallel.Class"];

  a.parallel = function (c) {
    return c.parallel;
  };

  a.sequential = function (c) {
    return c.sequential;
  };

  a.Parallel = function (c, d, h, f) {
    this.Applicative1 = c;
    this.Monad0 = d;
    this.parallel = h;
    this.sequential = f;
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var c = a["Control.Category"],
      d = a["Control.Parallel.Class"],
      h = a["Data.Foldable"],
      f = function f(m) {
    return function (q) {
      return function (k) {
        var p = d.sequential(m),
            t = h.traverse_(m.Applicative1())(q)(function () {
          var y = d.parallel(m);
          return function (b) {
            return y(k(b));
          };
        }());
        return function (y) {
          return p(t(y));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (m) {
    return function (q) {
      return f(m)(q)(c.identity(c.categoryFn));
    };
  };
})(PS);

(function (a) {
  a.pureE = function (c) {
    return function () {
      return c;
    };
  };

  a.bindE = function (c) {
    return function (d) {
      return function () {
        return d(c())();
      };
    };
  };
})(PS.Effect = PS.Effect || {});

(function (a) {
  a.Effect = a.Effect || {};
  var c = a.Effect,
      d = a.Effect,
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Control.Monad"],
      k = a["Data.Functor"],
      p = a["Data.Monoid"],
      t = a["Data.Semigroup"];
  a = new q.Monad(function () {
    return g;
  }, function () {
    return y;
  });
  var y = new m.Bind(function () {
    return b;
  }, d.bindE),
      b = new f.Apply(function () {
    return e;
  }, q.ap(a)),
      g = new h.Applicative(function () {
    return b;
  }, d.pureE),
      e = new k.Functor(h.liftA1(g));
  c.functorEffect = e;
  c.applyEffect = b;
  c.applicativeEffect = g;
  c.bindEffect = y;
  c.monadEffect = a;

  c.monoidEffect = function (l) {
    return new p.Monoid(function () {
      var r = l.Semigroup0();
      return new t.Semigroup(f.lift2(b)(t.append(r)));
    }, d.pureE(p.mempty(l)));
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var c = a["Effect.Class"],
      d = a["Control.Category"],
      h = a.Effect;

  a = function a(f, m) {
    this.Monad0 = f;
    this.liftEffect = m;
  };

  d = new a(function () {
    return h.monadEffect;
  }, d.identity(d.categoryFn));

  c.liftEffect = function (f) {
    return f.liftEffect;
  };

  c.MonadEffect = a;
  c.monadEffectEffect = d;
})(PS);

(function (a) {
  a.showErrorImpl = function (c) {
    return c.stack || c.toString();
  };

  a.error = function (c) {
    return Error(c);
  };

  a.message = function (c) {
    return c.message;
  };

  a.throwException = function (c) {
    return function () {
      throw c;
    };
  };

  a.catchException = function (c) {
    return function (d) {
      return function () {
        try {
          return d();
        } catch (h) {
          return h instanceof Error || "[object Error]" === Object.prototype.toString.call(h) ? c(h)() : c(Error(h.toString()))();
        }
      };
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var c = a["Effect.Exception"],
      d = a["Effect.Exception"],
      h = a["Control.Applicative"],
      f = a["Data.Either"],
      m = a["Data.Functor"],
      q = a.Effect;
  a = new a["Data.Show"].Show(d.showErrorImpl);

  c["throw"] = function (k) {
    return d.throwException(d.error(k));
  };

  c["try"] = function (k) {
    return d.catchException(function () {
      var p = h.pure(q.applicativeEffect);
      return function (t) {
        return p(f.Left.create(t));
      };
    }())(m.map(q.functorEffect)(f.Right.create)(k));
  };

  c.showError = a;
  c.error = d.error;
  c.message = d.message;
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
      d = a.Partial;

  a["Partial.Unsafe"].unsafeCrashWith = function (h) {
    return c.unsafePartial(function (f) {
      return d.crashWith()(h);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var c = a["Effect.Aff"],
      d = a["Effect.Aff"],
      h = a["Control.Alt"],
      f = a["Control.Applicative"],
      m = a["Control.Apply"],
      q = a["Control.Bind"],
      k = a["Control.Monad"],
      p = a["Control.Monad.Error.Class"],
      t = a["Control.Parallel"],
      y = a["Control.Parallel.Class"],
      b = a["Control.Plus"],
      g = a["Data.Either"],
      e = a["Data.Foldable"],
      l = a["Data.Function"],
      r = a["Data.Functor"],
      v = a["Data.Monoid"],
      D = a["Data.Semigroup"],
      B = a["Data.Unit"],
      z = a.Effect,
      u = a["Effect.Class"],
      E = a["Effect.Exception"],
      H = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var G = new r.Functor(d._parAffMap),
      J = new r.Functor(d._map),
      K = function () {
    return {
      isLeft: function isLeft(ka) {
        if (ka instanceof g.Left) return !0;
        if (ka instanceof g.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [ka.constructor.name]);
      },
      fromLeft: function fromLeft(ka) {
        if (ka instanceof g.Left) return ka.value0;
        if (ka instanceof g.Right) return H.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [ka.constructor.name]);
      },
      fromRight: function fromRight(ka) {
        if (ka instanceof g.Right) return ka.value0;
        if (ka instanceof g.Left) return H.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [ka.constructor.name]);
      },
      left: g.Left.create,
      right: g.Right.create
    };
  }(),
      N = function N(ka) {
    return function () {
      var pa = d._makeFiber(K, ka)();

      pa.run();
      return pa;
    };
  },
      S = new m.Apply(function () {
    return G;
  }, d._parAffApply),
      V = new k.Monad(function () {
    return w;
  }, function () {
    return L;
  }),
      L = new q.Bind(function () {
    return M;
  }, d._bind),
      M = new m.Apply(function () {
    return J;
  }, k.ap(V)),
      w = new f.Applicative(function () {
    return M;
  }, d._pure),
      P = new u.MonadEffect(function () {
    return V;
  }, d._liftEffect);

  m = function () {
    var ka = u.liftEffect(P);
    return function (pa) {
      return l["const"](ka(pa));
    };
  }();

  var I = new p.MonadThrow(function () {
    return V;
  }, d._throwError),
      F = new p.MonadError(function () {
    return I;
  }, d._catchError),
      A = function A(ka) {
    return function (pa) {
      return N(q.bindFlipped(L)(function () {
        var R = u.liftEffect(P);
        return function (ha) {
          return R(ka(ha));
        };
      }())(p["try"](F)(pa)));
    };
  },
      Y = new y.Parallel(function () {
    return ra;
  }, function () {
    return V;
  }, a.unsafeCoerce, d._sequential),
      ra = new f.Applicative(function () {
    return S;
  }, function () {
    var ka = y.parallel(Y),
        pa = f.pure(w);
    return function (R) {
      return ka(pa(R));
    };
  }()),
      Ba = new D.Semigroup(function (ka) {
    return function (pa) {
      return function (R) {
        return t.parSequence_(Y)(e.foldableArray)([ka(R), pa(R)]);
      };
    };
  });

  D = l["const"](f.pure(w)(B.unit));
  var Ca = new v.Monoid(function () {
    return Ba;
  }, D);
  B = d.makeAff(function (ka) {
    return f.pure(z.applicativeEffect)(v.mempty(Ca));
  });
  var za = new h.Alt(function () {
    return G;
  }, d._parAffAlt),
      x = new h.Alt(function () {
    return J;
  }, function (ka) {
    return function (pa) {
      return p.catchError(F)(ka)(l["const"](pa));
    };
  });
  h = new b.Plus(function () {
    return x;
  }, p.throwError(I)(E.error("Always fails")));
  b = new b.Plus(function () {
    return za;
  }, y.parallel(Y)(b.empty(h)));

  c.runAff_ = function (ka) {
    return function (pa) {
      return r["void"](z.functorEffect)(A(ka)(pa));
    };
  };

  c.delay = function (ka) {
    return d._delay(g.Right.create, ka);
  };

  c.never = B;
  c.nonCanceler = D;
  c.effectCanceler = m;
  c.functorAff = J;
  c.applicativeAff = w;
  c.bindAff = L;
  c.monadErrorAff = F;
  c.monadEffectAff = P;
  c.altParAff = za;
  c.plusParAff = b;
  c.parallelAff = Y;
  c.monoidCanceler = Ca;
  c.makeAff = d.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.Compat"] = a["Effect.Aff.Compat"] || {};
  var c = a["Data.Either"],
      d = a["Effect.Aff"];

  a["Effect.Aff.Compat"].fromEffectFnAff = function (h) {
    return d.makeAff(function (f) {
      return function () {
        var m = h(function (q) {
          return f(c.Left.create(q))();
        }, function (q) {
          return f(c.Right.create(q))();
        });
        return function (q) {
          return d.makeAff(function (k) {
            return function () {
              m(q, function (p) {
                return k(c.Left.create(p))();
              }, function (p) {
                return k(c.Right.create(p))();
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
  a.unsafeToForeign = function (c) {
    return c;
  };

  a.unsafeFromForeign = function (c) {
    return c;
  };

  a.typeOf = function (c) {
    return _typeof(c);
  };

  a.tagOf = function (c) {
    return Object.prototype.toString.call(c).slice(8, -1);
  };

  a.isNull = function (c) {
    return null === c;
  };

  a.isUndefined = function (c) {
    return void 0 === c;
  };

  a.isArray = Array.isArray || function (c) {
    return "[object Array]" === Object.prototype.toString.call(c);
  };
})(PS.Foreign = PS.Foreign || {});

(function (a) {
  a.Foreign = a.Foreign || {};

  var c = a.Foreign,
      d = a.Foreign,
      h = a["Control.Applicative"],
      f = a["Control.Monad.Error.Class"],
      m = a["Control.Monad.Except.Trans"],
      q = a["Data.Boolean"],
      k = a["Data.Identity"],
      p = a["Data.List.NonEmpty"],
      t = a["Data.Show"],
      y = function () {
    function B(z) {
      this.value0 = z;
    }

    B.create = function (z) {
      return new B(z);
    };

    return B;
  }(),
      b = function () {
    function B(z, u) {
      this.value0 = z;
      this.value1 = u;
    }

    B.create = function (z) {
      return function (u) {
        return new B(z, u);
      };
    };

    return B;
  }(),
      g = function () {
    function B(z, u) {
      this.value0 = z;
      this.value1 = u;
    }

    B.create = function (z) {
      return function (u) {
        return new B(z, u);
      };
    };

    return B;
  }(),
      e = function () {
    function B(z, u) {
      this.value0 = z;
      this.value1 = u;
    }

    B.create = function (z) {
      return function (u) {
        return new B(z, u);
      };
    };

    return B;
  }(),
      l = new t.Show(function (B) {
    if (B instanceof y) return "(ForeignError " + (t.show(t.showString)(B.value0) + ")");
    if (B instanceof g) return "(ErrorAtIndex " + (t.show(t.showInt)(B.value0) + (" " + (t.show(l)(B.value1) + ")")));
    if (B instanceof e) return "(ErrorAtProperty " + (t.show(t.showString)(B.value0) + (" " + (t.show(l)(B.value1) + ")")));
    if (B instanceof b) return "(TypeMismatch " + (t.show(t.showString)(B.value0) + (" " + (t.show(t.showString)(B.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [B.constructor.name]);
  }),
      r = function r(B) {
    if (B instanceof y) return B.value0;
    if (B instanceof g) return "Error at array index " + (t.show(t.showInt)(B.value0) + (": " + r(B.value1)));
    if (B instanceof e) return "Error at property " + (t.show(t.showString)(B.value0) + (": " + r(B.value1)));
    if (B instanceof b) return "Type mismatch: expected " + (B.value0 + (", found " + B.value1));
    throw Error("Failed pattern match at Foreign (line 72, column 1 - line 72, column 45): " + [B.constructor.name]);
  },
      v = function () {
    var B = f.throwError(m.monadThrowExceptT(k.monadIdentity));
    return function (z) {
      return B(p.singleton(z));
    };
  }();

  a = function a(B) {
    return function (z) {
      if (d.tagOf(z) === B) return h.pure(m.applicativeExceptT(k.monadIdentity))(d.unsafeFromForeign(z));
      if (q.otherwise) return v(new b(B, d.tagOf(z)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [B.constructor.name, z.constructor.name]);
    };
  };

  var D = a("String");
  c.ForeignError = y;
  c.TypeMismatch = b;
  c.ErrorAtIndex = g;
  c.ErrorAtProperty = e;
  c.renderForeignError = r;
  c.unsafeReadTagged = a;
  c.readString = D;

  c.readArray = function (B) {
    if (d.isArray(B)) return h.pure(m.applicativeExceptT(k.monadIdentity))(d.unsafeFromForeign(B));
    if (q.otherwise) return v(new b("array", d.tagOf(B)));
    throw Error("Failed pattern match at Foreign (line 147, column 1 - line 147, column 42): " + [B.constructor.name]);
  };

  c.fail = v;
  c.showForeignError = l;
  c.unsafeToForeign = d.unsafeToForeign;
  c.typeOf = d.typeOf;
  c.isNull = d.isNull;
  c.isUndefined = d.isUndefined;
})(PS);

(function (a) {
  a.Affjax = a.Affjax || {};

  var c = a.Affjax,
      d = a.Affjax,
      h = a["Affjax.RequestBody"],
      f = a["Affjax.RequestHeader"],
      m = a["Affjax.ResponseFormat"],
      q = a["Affjax.ResponseHeader"],
      k = a["Control.Applicative"],
      p = a["Control.Bind"],
      t = a["Control.Monad.Error.Class"],
      y = a["Control.Monad.Except"],
      b = a["Control.Monad.Except.Trans"],
      g = a["Data.Argonaut.Core"],
      e = a["Data.Argonaut.Parser"],
      l = a["Data.Array"],
      r = a["Data.Either"],
      v = a["Data.Eq"],
      D = a["Data.Foldable"],
      B = a["Data.FormURLEncoded"],
      z = a["Data.Function"],
      u = a["Data.Functor"],
      E = a["Data.HTTP.Method"],
      H = a["Data.HeytingAlgebra"],
      G = a["Data.Identity"],
      J = a["Data.List.NonEmpty"],
      K = a["Data.Maybe"],
      N = a["Data.Nullable"],
      S = a["Data.Unit"],
      V = a["Effect.Aff"],
      L = a["Effect.Aff.Compat"],
      M = a["Effect.Exception"],
      w = a.Foreign,
      P = function () {
    function x(ka) {
      this.value0 = ka;
    }

    x.create = function (ka) {
      return new x(ka);
    };

    return x;
  }(),
      I = function () {
    function x(ka, pa) {
      this.value0 = ka;
      this.value1 = pa;
    }

    x.create = function (ka) {
      return function (pa) {
        return new x(ka, pa);
      };
    };

    return x;
  }(),
      F = function () {
    function x(ka) {
      this.value0 = ka;
    }

    x.create = function (ka) {
      return new x(ka);
    };

    return x;
  }(),
      A = function A(x) {
    var ka = function ka(ua) {
      return "" === ua ? k.pure(b.applicativeExceptT(G.monadIdentity))(g.jsonEmptyObject) : r.either(function (Aa) {
        return w.fail(w.ForeignError.create(Aa));
      })(k.pure(b.applicativeExceptT(G.monadIdentity)))(e.jsonParser(ua));
    },
        pa = function () {
      if (x.responseFormat instanceof m.ArrayBuffer) return w.unsafeReadTagged("ArrayBuffer");
      if (x.responseFormat instanceof m.Blob) return w.unsafeReadTagged("Blob");
      if (x.responseFormat instanceof m.Document) return w.unsafeReadTagged("Document");
      if (x.responseFormat instanceof m.Json) return p.composeKleisliFlipped(b.bindExceptT(G.monadIdentity))(function (ua) {
        return x.responseFormat.value0(ka(ua));
      })(w.unsafeReadTagged("String"));
      if (x.responseFormat instanceof m.String) return w.unsafeReadTagged("String");
      if (x.responseFormat instanceof m.Ignore) return z["const"](x.responseFormat.value0(k.pure(b.applicativeExceptT(G.monadIdentity))(S.unit)));
      throw Error("Failed pattern match at Affjax (line 237, column 18 - line 243, column 57): " + [x.responseFormat.constructor.name]);
    }(),
        R = function R(ua) {
      if (ua instanceof h.ArrayView) return r.Right.create(ua.value0(w.unsafeToForeign));
      if (ua instanceof h.Blob || ua instanceof h.Document || ua instanceof h.String || ua instanceof h.FormData) return r.Right.create(w.unsafeToForeign(ua.value0));
      if (ua instanceof h.FormURLEncoded) return r.note("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(u.map(K.functorMaybe)(w.unsafeToForeign)(B.encode(ua.value0)));
      if (ua instanceof h.Json) return r.Right.create(w.unsafeToForeign(g.stringify(ua.value0)));
      throw Error("Failed pattern match at Affjax (line 203, column 20 - line 218, column 69): " + [ua.constructor.name]);
    },
        ha = function ha(ua) {
      return function (Aa) {
        return ua instanceof K.Just && !D.any(D.foldableArray)(H.heytingAlgebraBoolean)(z.on(v.eq(v.eqString))(f.name)(ua.value0))(Aa) ? l.snoc(Aa)(ua.value0) : Aa;
      };
    },
        Fa = function Fa(ua) {
      return ha(u.map(K.functorMaybe)(f.ContentType.create)(p.bindFlipped(K.bindMaybe)(h.toMediaType)(ua)))(ha(u.map(K.functorMaybe)(f.Accept.create)(m.toMediaType(x.responseFormat)))(x.headers));
    },
        sa = function sa(ua) {
      return {
        method: E.print(x.method),
        url: x.url,
        headers: u.map(u.functorArray)(function (Aa) {
          return {
            field: f.name(Aa),
            value: f.value(Aa)
          };
        })(Fa(x.content)),
        content: ua,
        responseType: m.toResponseType(x.responseFormat),
        username: N.toNullable(x.username),
        password: N.toNullable(x.password),
        withCredentials: x.withCredentials
      };
    },
        ya = function ya(ua) {
      return u.mapFlipped(V.functorAff)(t["try"](V.monadErrorAff)(L.fromEffectFnAff(d._ajax(q.ResponseHeader.create, sa(ua)))))(function (Aa) {
        if (Aa instanceof r.Right) {
          var Ia = y.runExcept(pa(Aa.value0.body));
          if (Ia instanceof r.Left) return new r.Left(new I(J.head(Ia.value0), Aa.value0));
          if (Ia instanceof r.Right) return new r.Right({
            body: Ia.value0,
            headers: Aa.value0.headers,
            status: Aa.value0.status,
            statusText: Aa.value0.statusText
          });
          throw Error("Failed pattern match at Affjax (line 184, column 9 - line 186, column 52): " + [Ia.constructor.name]);
        }

        if (Aa instanceof r.Left) return new r.Left(new F(Aa.value0));
        throw Error("Failed pattern match at Affjax (line 182, column 86 - line 188, column 28): " + [Aa.constructor.name]);
      });
    };

    if (x.content instanceof K.Nothing) return ya(N.toNullable(K.Nothing.value));

    if (x.content instanceof K.Just) {
      R = R(x.content.value0);
      if (R instanceof r.Right) return ya(N.toNullable(new K.Just(R.value0)));
      if (R instanceof r.Left) return k.pure(V.applicativeAff)(new r.Left(new P(R.value0)));
      throw Error("Failed pattern match at Affjax (line 173, column 7 - line 177, column 48): " + [R.constructor.name]);
    }

    throw Error("Failed pattern match at Affjax (line 169, column 3 - line 177, column 48): " + [x.content.constructor.name]);
  },
      Y = new r.Left(E.GET.value),
      ra = [],
      Ba = K.Nothing.value,
      Ca = K.Nothing.value,
      za = K.Nothing.value;

  c.printError = function (x) {
    if (x instanceof P) return "There was a problem with the request content: " + x.value0;
    if (x instanceof I) return "There was a problem with the response body: " + w.renderForeignError(x.value0);
    if (x instanceof F) return "There was a problem making the request: " + M.message(x.value0);
    throw Error("Failed pattern match at Affjax (line 91, column 14 - line 97, column 66): " + [x.constructor.name]);
  };

  c.get = function (x) {
    return function (ka) {
      return A({
        method: Y,
        url: ka,
        headers: ra,
        content: Ba,
        username: Ca,
        password: za,
        withCredentials: !1,
        responseFormat: x
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Alternative"] = a["Control.Alternative"] || {};

  a["Control.Alternative"].Alternative = function (c, d) {
    this.Applicative0 = c;
    this.Plus1 = d;
  };
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var c = a["Data.CatQueue"],
      d = a["Data.List"],
      h = a["Data.List.Types"],
      f = a["Data.Maybe"],
      m = a["Data.Tuple"],
      q = function () {
    function k(p, t) {
      this.value0 = p;
      this.value1 = t;
    }

    k.create = function (p) {
      return function (t) {
        return new k(p, t);
      };
    };

    return k;
  }();

  a = new q(h.Nil.value, h.Nil.value);
  c.empty = a;

  c["null"] = function (k) {
    return k.value0 instanceof h.Nil && k.value1 instanceof h.Nil ? !0 : !1;
  };

  c.snoc = function (k) {
    return function (p) {
      return new q(k.value0, new h.Cons(p, k.value1));
    };
  };

  c.uncons = function (k) {
    for (var p = !1, t; !p;) {
      if (t = k, t.value0 instanceof h.Nil && t.value1 instanceof h.Nil) p = !0, t = f.Nothing.value;else if (t.value0 instanceof h.Nil) k = new q(d.reverse(t.value1), h.Nil.value), t = void 0;else if (t.value0 instanceof h.Cons) p = !0, t = new f.Just(new m.Tuple(t.value0.value0, new q(t.value0.value1, t.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [t.constructor.name]);
    }

    return t;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var c = a["Data.CatList"],
      d = a["Data.CatQueue"],
      h = a["Data.List.Types"],
      f = a["Data.Maybe"],
      m = a["Data.Semigroup"],
      q = a["Data.Tuple"],
      k = function () {
    function b() {}

    b.value = new b();
    return b;
  }(),
      p = function () {
    function b(g, e) {
      this.value0 = g;
      this.value1 = e;
    }

    b.create = function (g) {
      return function (e) {
        return new b(g, e);
      };
    };

    return b;
  }(),
      t = function t(b) {
    return function (g) {
      if (b instanceof k) return g;
      if (g instanceof k) return b;
      if (b instanceof p) return new p(b.value0, d.snoc(b.value1)(g));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [b.constructor.name, g.constructor.name]);
    };
  },
      y = function y(b) {
    return function (g) {
      return function (e) {
        var l = function l(r) {
          return function (v) {
            return function (D) {
              for (var B = r, z = v, u = !1, E; !u;) {
                E = B;
                var H = z,
                    G = D;
                if (G instanceof h.Nil) u = !0, E = H;else {
                  if (G instanceof h.Cons) B = E, z = E(H)(G.value0), D = G.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [E.constructor.name, H.constructor.name, G.constructor.name]);
                  E = void 0;
                }
              }

              return E;
            };
          };
        };

        return function (r) {
          return function (v) {
            function D(E, H) {
              E = d.uncons(E);
              if (E instanceof f.Nothing) return z = !0, l(function (G) {
                return function (J) {
                  return J(G);
                };
              })(g)(H);
              if (E instanceof f.Just) B = E.value0.value1, v = new h.Cons(b(E.value0.value0), H);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [E.constructor.name]);
            }

            for (var B = r, z = !1, u; !z;) {
              u = D(B, v);
            }

            return u;
          };
        }(e)(h.Nil.value);
      };
    };
  };

  a = k.value;
  m = new m.Semigroup(t);
  c.empty = a;

  c.snoc = function (b) {
    return function (g) {
      return t(b)(new p(g, d.empty));
    };
  };

  c.uncons = function (b) {
    if (b instanceof k) return f.Nothing.value;

    if (b instanceof p) {
      var g = f.Just,
          e = q.Tuple,
          l = b.value0;
      b = d["null"](b.value1) ? k.value : y(t)(k.value)(b.value1);
      return new g(new e(l, b));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [b.constructor.name]);
  };

  c.semigroupCatList = m;
})(PS);

(function (a) {
  a["Control.Monad.Free"] = a["Control.Monad.Free"] || {};

  var c = a["Control.Monad.Free"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Data.CatList"],
      k = a["Data.Either"],
      p = a["Data.Functor"],
      t = a["Data.Maybe"],
      y = a["Data.Semigroup"],
      b = a["Unsafe.Coerce"],
      g = function () {
    function E(H, G) {
      this.value0 = H;
      this.value1 = G;
    }

    E.create = function (H) {
      return function (G) {
        return new E(H, G);
      };
    };

    return E;
  }(),
      e = function () {
    function E(H) {
      this.value0 = H;
    }

    E.create = function (H) {
      return new E(H);
    };

    return E;
  }(),
      l = function () {
    function E(H, G) {
      this.value0 = H;
      this.value1 = G;
    }

    E.create = function (H) {
      return function (G) {
        return new E(H, G);
      };
    };

    return E;
  }(),
      r = function r(E) {
    function H(K) {
      var N = function N(V) {
        return function (L) {
          return new g(V.value0, y.append(q.semigroupCatList)(V.value1)(L));
        };
      };

      if (K.value0 instanceof e) {
        var S = q.uncons(K.value1);
        if (S instanceof t.Nothing) return G = !0, new e(K.value0.value0);

        if (S instanceof t.Just) {
          E = N((0, S.value0.value0)(K.value0.value0))(S.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [S.constructor.name]);
      }

      if (K.value0 instanceof l) return G = !0, new l(K.value0.value0, function (V) {
        return N(K.value0.value1(V))(K.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [K.value0.constructor.name]);
    }

    for (var G = !1, J; !G;) {
      J = H(E);
    }

    return J;
  },
      v = function v(E) {
    return function (H) {
      return function (G) {
        G = r(G);
        if (G instanceof e) return H(G.value0);
        if (G instanceof l) return E(G.value0)(G.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [G.constructor.name]);
      };
    };
  };

  a = new m.Monad(function () {
    return u;
  }, function () {
    return B;
  });
  var D = new p.Functor(function (E) {
    return function (H) {
      return f.bindFlipped(B)(function () {
        var G = d.pure(u);
        return function (J) {
          return G(E(J));
        };
      }())(H);
    };
  }),
      B = new f.Bind(function () {
    return z;
  }, function (E) {
    return function (H) {
      return new g(E.value0, q.snoc(E.value1)(H));
    };
  }),
      z = new h.Apply(function () {
    return D;
  }, m.ap(a)),
      u = new d.Applicative(function () {
    return z;
  }, function (E) {
    return new g(e.create(E), q.empty);
  });

  c.wrap = function (E) {
    return new g(new l(E, b.unsafeCoerce), q.empty);
  };

  c.liftF = function (E) {
    return new g(new l(E, function () {
      var H = d.pure(u);
      return function (G) {
        return H(G);
      };
    }()), q.empty);
  };

  c.resume = function (E) {
    return v(function (H) {
      return function (G) {
        return new k.Left(p.map(E)(G)(H));
      };
    })(k.Right.create);
  };

  c["resume'"] = v;
  c.freeFunctor = D;
  c.freeBind = B;
  c.freeApplicative = u;
  c.freeApply = z;
})(PS);

(function (a) {
  a["Control.MultiAlternative"] = a["Control.MultiAlternative"] || {};
  a = a["Control.MultiAlternative"];

  a.orr = function (c) {
    return c.orr;
  };

  a.MultiAlternative = function (c, d) {
    this.Plus0 = c;
    this.orr = d;
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
  a["Data.Array.NonEmpty"] = a["Data.Array.NonEmpty"] || {};
  var c = a["Data.Array.NonEmpty"],
      d = a["Data.Array"],
      h = a["Data.Boolean"],
      f = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var m = a.unsafeCoerce,
      q = a.unsafeCoerce,
      k = a.unsafeCoerce;

  a = function (t) {
    var y = f.fromJust();
    return function (b) {
      return y(t(k(b)));
    };
  }(d.uncons);

  var p = function (t) {
    return function (y) {
      return t(k(y));
    };
  }(d.length);

  c.fromArray = function (t) {
    if (0 < d.length(t)) return new f.Just(q(t));
    if (h.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [t.constructor.name]);
  };

  c.toArray = k;

  c.singleton = function (t) {
    return q(d.singleton(t));
  };

  c.length = p;

  c["cons'"] = function (t) {
    return function (y) {
      return q(d.cons(t)(y));
    };
  };

  c.snoc = function (t) {
    return function (y) {
      return q(d.snoc(k(t))(y));
    };
  };

  c.uncons = a;

  c.updateAt = function (t) {
    return function (y) {
      var b = d.updateAt(t)(y);
      return function (g) {
        return m(b(k(g)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (c) {
    return function (d) {
      for (var h = d[0], f = d.length, m = 1; m < f; m++) {
        h = c(h)(d[m]);
      }

      return h;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (c) {
    return function (d) {
      for (var h = d.length, f = Array(h), m = 0; m < h; m++) {
        f[m] = c(m)(d[m]);
      }

      return f;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var c = a["Data.FunctorWithIndex"],
      d = a["Data.Functor"];
  a = new function (h, f) {
    this.Functor0 = h;
    this.mapWithIndex = f;
  }(function () {
    return d.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  c.mapWithIndex = function (h) {
    return h.mapWithIndex;
  };

  c.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var c = a["Data.FoldableWithIndex"],
      d = a["Data.Foldable"],
      h = a["Data.FunctorWithIndex"],
      f = a["Data.Monoid"],
      m = a["Data.Semigroup"],
      q = function () {
    function t(y, b) {
      this.value0 = y;
      this.value1 = b;
    }

    t.create = function (y) {
      return function (b) {
        return new t(y, b);
      };
    };

    return t;
  }(),
      k = function k(t) {
    return function (y) {
      return function (b) {
        return (0, t.foldrWithIndex)(function (g) {
          return function (e) {
            return function (l) {
              return m.append(y.Semigroup0())(b(g)(e))(l);
            };
          };
        })(f.mempty(y));
      };
    };
  },
      p = new function (t, y, b, g) {
    this.Foldable0 = t;
    this.foldMapWithIndex = y;
    this.foldlWithIndex = b;
    this.foldrWithIndex = g;
  }(function () {
    return d.foldableArray;
  }, function (t) {
    return k(p)(t);
  }, function (t) {
    return function (y) {
      var b = d.foldl(d.foldableArray)(function (e) {
        return function (l) {
          return t(l.value0)(e)(l.value1);
        };
      })(y),
          g = h.mapWithIndex(h.functorWithIndexArray)(q.create);
      return function (e) {
        return b(g(e));
      };
    };
  }, function (t) {
    return function (y) {
      var b = d.foldr(d.foldableArray)(function (e) {
        return function (l) {
          return t(e.value0)(e.value1)(l);
        };
      })(y),
          g = h.mapWithIndex(h.functorWithIndexArray)(q.create);
      return function (e) {
        return b(g(e));
      };
    };
  });

  c.foldlWithIndex = function (t) {
    return t.foldlWithIndex;
  };

  c.foldableWithIndexArray = p;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var c = a["Data.Semigroup.Foldable"],
      d = a["Data.Functor"];

  c.Foldable1 = function (h, f, m) {
    this.Foldable0 = h;
    this.fold1 = f;
    this.foldMap1 = m;
  };

  c.foldMap1 = function (h) {
    return h.foldMap1;
  };

  c.foldMap1Default = function (h) {
    return function (f) {
      return function (m) {
        return function (q) {
          var k = (0, h.fold1)(m),
              p = d.map(f)(q);
          return function (t) {
            return k(p(t));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var c = a["Data.Array.NonEmpty.Internal"],
      d = a["Data.Array.NonEmpty.Internal"],
      h = a["Data.Semigroup"],
      f = a["Data.Semigroup.Foldable"],
      m = a["Data.Unfoldable1"].unfoldable1Array,
      q = a["Data.Traversable"].traversableArray,
      k = h.semigroupArray,
      p = a["Data.Functor"].functorArray,
      t = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      y = a["Data.Foldable"].foldableArray,
      b = new f.Foldable1(function () {
    return y;
  }, function (g) {
    return d.fold1Impl(h.append(g));
  }, function (g) {
    return f.foldMap1Default(b)(p)(g);
  });
  c.semigroupNonEmptyArray = k;
  c.functorNonEmptyArray = p;
  c.foldableNonEmptyArray = y;
  c.foldableWithIndexNonEmptyArray = t;
  c.foldable1NonEmptyArray = b;
  c.unfoldable1NonEmptyArray = m;
  c.traversableNonEmptyArray = q;
})(PS);

(function (a) {
  var c = function () {
    function d() {
      this.last = this.head = null;
      this.size = 0;
    }

    function h(t, y) {
      this.queue = t;
      this.value = y;
      this.prev = this.next = null;
    }

    function f(t) {
      this.draining = !1;
      this.error = null;
      this.value = t;
      this.takes = new d();
      this.reads = new d();
      this.puts = new d();
    }

    function m(t) {
      try {
        t();
      } catch (y) {
        setTimeout(function () {
          throw y;
        }, 0);
      }
    }

    function q(t) {
      switch (t.size) {
        case 0:
          return null;

        case 1:
          var y = t.head;
          t.head = null;
          break;

        case 2:
          y = t.last;
          t.head.next = null;
          t.last = null;
          break;

        default:
          y = t.last, t.last = y.prev, t.last.next = null;
      }

      y.prev = null;
      y.queue = null;
      t.size--;
      return y.value;
    }

    function k(t) {
      switch (t.size) {
        case 0:
          return null;

        case 1:
          var y = t.head;
          t.head = null;
          break;

        case 2:
          y = t.head;
          t.last.prev = null;
          t.head = t.last;
          t.last = null;
          break;

        default:
          y = t.head, t.head = y.next, t.head.prev = null;
      }

      y.next = null;
      y.queue = null;
      t.size--;
      return y.value;
    }

    var p = {};
    f.EMPTY = p;

    f.putLast = function (t, y) {
      y = new h(t, y);

      switch (t.size) {
        case 0:
          t.head = y;
          break;

        case 1:
          y.prev = t.head;
          t.head.next = y;
          t.last = y;
          break;

        default:
          y.prev = t.last, t.last.next = y, t.last = y;
      }

      t.size++;
      return y;
    };

    f.takeLast = q;
    f.takeHead = k;

    f.deleteCell = function (t) {
      null !== t.queue && (t.queue.last === t ? q(t.queue) : t.queue.head === t ? k(t.queue) : (t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t.queue.size--, t.queue = null, t.value = null, t.next = null, t.prev = null));
    };

    f.drainVar = function (t, y) {
      if (!y.draining) {
        var b = y.puts,
            g = y.takes,
            e = y.reads,
            l,
            r;

        for (y.draining = !0;;) {
          var v = l = null;
          var D = y.value;
          var B = e.size;

          if (null !== y.error) {
            for (D = t.left(y.error); l = k(b);) {
              m(l.cb(D));
            }

            for (; v = k(e);) {
              m(v(D));
            }

            for (; r = k(g);) {
              m(r(D));
            }

            break;
          }

          D === p && (l = k(b)) && (y.value = D = l.value);

          if (D !== p) {
            for (r = k(g); B-- && (v = k(e));) {
              m(v(t.right(D)));
            }

            null !== r && (y.value = p, m(r(t.right(D))));
          }

          null !== l && m(l.cb(t.right(void 0)));
          if (y.value === p && 0 === b.size || y.value !== p && 0 === g.size) break;
        }

        y.draining = !1;
      }
    };

    return f;
  }();

  a.empty = function () {
    return new c(c.EMPTY);
  };

  a._takeVar = function (d, h, f) {
    return function () {
      var m = c.putLast(h.takes, f);
      c.drainVar(d, h);
      return function () {
        c.deleteCell(m);
      };
    };
  };

  a._tryPutVar = function (d, h, f) {
    return function () {
      return f.value === c.EMPTY && null === f.error ? (f.value = h, c.drainVar(d, f), !0) : !1;
    };
  };

  a._tryTakeVar = function (d, h) {
    return function () {
      var f = h.value;
      if (f === c.EMPTY) return d.nothing;
      h.value = c.EMPTY;
      c.drainVar(d, h);
      return d.just(f);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var c = a["Effect.AVar"],
      d = a["Effect.AVar"],
      h = a["Data.Either"];
  a = a["Data.Maybe"];

  var f = function () {
    function p(t) {
      this.value0 = t;
    }

    p.create = function (t) {
      return new p(t);
    };

    return p;
  }(),
      m = function () {
    function p(t) {
      this.value0 = t;
    }

    p.create = function (t) {
      return new p(t);
    };

    return p;
  }(),
      q = function () {
    function p() {}

    p.value = new p();
    return p;
  }(),
      k = {
    left: h.Left.create,
    right: h.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: f.create,
    filled: m.create,
    empty: q.value
  };

  c.take = function (p) {
    return function (t) {
      return d._takeVar(k, p, t);
    };
  };

  c.tryTake = function (p) {
    return d._tryTakeVar(k, p);
  };

  c.tryPut = function (p) {
    return function (t) {
      return d._tryPutVar(k, p, t);
    };
  };

  c.empty = d.empty;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var c = a["Effect.AVar"],
      d = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (h) {
    return d.makeAff(function (f) {
      return function () {
        var m = c.take(h)(f)();
        return d.effectCanceler(m);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var c = a["Effect.Aff.Class"],
      d = a["Control.Category"],
      h = a["Effect.Aff"];

  a = function a(f, m) {
    this.MonadEffect0 = f;
    this.liftAff = m;
  };

  d = new a(function () {
    return h.monadEffectAff;
  }, d.identity(d.categoryFn));

  c.liftAff = function (f) {
    return f.liftAff;
  };

  c.MonadAff = a;
  c.monadAffAff = d;
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
  a["Effect.Console"].log = a["Effect.Console"].log;
})(PS);

(function (a) {
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};
  var c = a["Concur.Core.Types"],
      d = a["Control.Alt"],
      h = a["Control.Alternative"],
      f = a["Control.Applicative"],
      m = a["Control.Bind"],
      q = a["Control.Category"],
      k = a["Control.Monad"],
      p = a["Control.Monad.Free"],
      t = a["Control.MultiAlternative"],
      y = a["Control.Parallel.Class"],
      b = a["Control.Plus"],
      g = a["Data.Array.NonEmpty"],
      e = a["Data.Array.NonEmpty.Internal"],
      l = a["Data.Either"],
      r = a["Data.FoldableWithIndex"],
      v = a["Data.Functor"],
      D = a["Data.Maybe"],
      B = a["Data.Monoid"],
      z = a["Data.Semigroup"],
      u = a["Data.Semigroup.Foldable"],
      E = a["Data.Show"],
      H = a["Data.Tuple"],
      G = a.Effect,
      J = a["Effect.AVar"],
      K = a["Effect.Aff"],
      N = a["Effect.Aff.AVar"],
      S = a["Effect.Aff.Class"],
      V = a["Effect.Class"],
      L = a["Effect.Console"],
      M = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (sa) {
    return sa(q.identity(q.categoryFn));
  });

  var w = p.freeFunctor,
      P = p.freeBind,
      I = p.freeApply,
      F = p.freeApplicative,
      A = new k.Monad(function () {
    return F;
  }, function () {
    return P;
  }),
      Y = function Y(sa) {
    return sa;
  },
      ra = function ra(sa) {
    return p["resume'"](function (ya) {
      return function (ua) {
        return new l.Right(v.map(sa)(ua)(ya));
      };
    })(l.Left.create);
  },
      Ba = new v.Functor(function (sa) {
    return function (ya) {
      if (ya instanceof l.Right) ya = new l.Right({
        cont: v.map(K.functorAff)(sa)(ya.value0.cont),
        view: ya.value0.view
      });else if (ya instanceof l.Left) ya = new l.Left(v.map(G.functorEffect)(sa)(ya.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [ya.constructor.name]);
      return ya;
    };
  }),
      Ca = function Ca(sa) {
    return p.liftF(l.Left.create(sa));
  },
      za = function za(sa) {
    return new V.MonadEffect(function () {
      return A;
    }, Ca);
  },
      x = function x(sa) {
    return p.liftF(new l.Right({
      view: sa,
      cont: K.never
    }));
  },
      ka = function ka(sa) {
    return new z.Semigroup(function (ya) {
      return function (ua) {
        return t.orr(R(sa))([ya, ua]);
      };
    });
  },
      pa = function pa(sa) {
    return new b.Plus(function () {
      return ha(sa);
    }, x(B.mempty(sa)));
  },
      R = function R(sa) {
    return new t.MultiAlternative(function () {
      return pa(sa);
    }, function (ya) {
      var ua = function ua(da) {
        return function (O) {
          return function (Z) {
            var xa = v.map(e.functorNonEmptyArray)(function (Ga) {
              return p.wrap(l.Right.create(Ga));
            })(O);
            return m.bind(K.bindAff)(y.sequential(K.parallelAff)(r.foldlWithIndex(e.foldableWithIndexNonEmptyArray)(function (Ga) {
              return function (X) {
                return function (Oa) {
                  return d.alt(K.altParAff)(y.parallel(K.parallelAff)(v.map(K.functorAff)(H.Tuple.create(Ga))(Oa)))(X);
                };
              };
            })(b.empty(K.plusParAff))(Z)))(function (Ga) {
              return f.pure(K.applicativeAff)(ma(da)(D.fromMaybe(xa)(g.updateAt(Ga.value0)(Ga.value1)(xa))));
            });
          };
        };
      },
          Aa = function Aa(da) {
        return function (O) {
          return p.wrap(new l.Right({
            view: u.foldMap1(e.foldable1NonEmptyArray)(da.Semigroup0())(function (Z) {
              return Z.view;
            })(O),
            cont: ua(da)(O)(v.map(e.functorNonEmptyArray)(function (Z) {
              return Z.cont;
            })(O))
          }));
        };
      },
          Ia = function Ia(da) {
        return function (O) {
          return function (Z) {
            var xa = g.uncons(Z),
                Ga = ra(Ba)(xa.head);
            if (Ga instanceof l.Left) return f.pure(p.freeApplicative)(Ga.value0);

            if (Ga instanceof l.Right) {
              if (Ga.value0 instanceof l.Left) return p.wrap(new l.Left(function () {
                var X = Ga.value0.value0();
                return Ia(da)(O)(g["cons'"](X)(xa.tail));
              }));
              if (Ga.value0 instanceof l.Right) return ea(da)(g.snoc(O)(Ga.value0.value0))(xa.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [Ga.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [Ga.constructor.name]);
          };
        };
      },
          ea = function ea(da) {
        return function (O) {
          return function (Z) {
            Z = g.fromArray(Z);
            if (Z instanceof D.Nothing) return Aa(da)(O);
            if (Z instanceof D.Just) return Ia(da)(O)(Z.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [Z.constructor.name]);
          };
        };
      },
          ma = function ma(da) {
        return function (O) {
          var Z = g.uncons(O),
              xa = ra(Ba)(Z.head);
          if (xa instanceof l.Left) return f.pure(p.freeApplicative)(xa.value0);

          if (xa instanceof l.Right) {
            if (xa.value0 instanceof l.Left) return p.wrap(new l.Left(function () {
              var Ga = xa.value0.value0();
              return ma(da)(g["cons'"](Ga)(Z.tail));
            }));
            if (xa.value0 instanceof l.Right) return ea(da)(g.singleton(xa.value0.value0))(Z.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [xa.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [xa.constructor.name]);
        };
      };

      ya = g.fromArray(ya);
      if (ya instanceof D.Just) return ma(sa)(v.map(e.functorNonEmptyArray)(Y)(ya.value0));
      if (ya instanceof D.Nothing) return b.empty(pa(sa));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [ya.constructor.name]);
    });
  },
      ha = function ha(sa) {
    return new d.Alt(function () {
      return w;
    }, z.append(ka(sa)));
  },
      Fa = function Fa(sa) {
    return function (ya) {
      var ua = function ua(Aa) {
        return function (Ia) {
          if (Ia instanceof l.Left) return L.log("Aff failed - " + E.show(M.showError)(Ia.value0));
          if (Ia instanceof l.Right) return v["void"](G.functorEffect)(J.tryPut(Ia.value0)(Aa));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [Aa.constructor.name, Ia.constructor.name]);
        };
      };

      return p.wrap(new l.Left(function () {
        var Aa = J.empty();
        K.runAff_(ua(Aa))(ya)();
        var Ia = J.tryTake(Aa)();
        if (Ia instanceof D.Just) return f.pure(p.freeApplicative)(Ia.value0);
        if (Ia instanceof D.Nothing) return p.liftF(new l.Right({
          view: sa,
          cont: N.take(Aa)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [Ia.constructor.name]);
      }));
    };
  };

  c.WidgetStep = function (sa) {
    return sa;
  };

  c.Widget = function (sa) {
    return sa;
  };

  c.unWidget = Y;
  c.resume = ra;
  c.display = x;
  c.functorWidgetStep = Ba;
  c.widgetFunctor = w;
  c.widgetBind = P;
  c.widgetApplicative = F;
  c.widgetApply = I;
  c.widgetShiftMap = a;
  c.widgetMultiAlternative = R;

  c.widgetMonoid = function (sa) {
    return new B.Monoid(function () {
      return ka(sa);
    }, b.empty(pa(sa)));
  };

  c.widgetAlt = ha;
  c.widgetPlus = pa;

  c.widgetAlternative = function (sa) {
    return new h.Alternative(function () {
      return F;
    }, function () {
      return pa(sa);
    });
  };

  c.widgetMonadEff = za;

  c.widgetMonadAff = function (sa) {
    return new S.MonadAff(function () {
      return za(sa);
    }, Fa(B.mempty(sa)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var c = a["Concur.Core"],
      d = a["Concur.Core.Types"],
      h = a["Control.Alt"],
      f = a["Control.Applicative"],
      m = a["Control.Monad.Free"],
      q = a["Control.Parallel.Class"],
      k = a["Data.Either"],
      p = a["Data.Functor"],
      t = a.Effect,
      y = a["Effect.AVar"],
      b = a["Effect.Aff"],
      g = a["Effect.Aff.AVar"],
      e = a["Effect.Aff.Class"],
      l = function l(r) {
    return function (v) {
      var D = d.resume(d.functorWidgetStep)(v);
      if (D instanceof k.Left) return f.pure(m.freeApplicative)(D.value0);

      if (D instanceof k.Right) {
        if (D.value0 instanceof k.Left) return m.wrap(d.WidgetStep(new k.Left(function () {
          var B = D.value0.value0();
          return l(r)(B);
        })));
        if (D.value0 instanceof k.Right) return m.wrap(d.WidgetStep(new k.Left(function () {
          var B = y.empty(),
              z = q.sequential(b.parallelAff)(h.alt(b.altParAff)(q.parallel(b.parallelAff)(e.liftAff(e.monadAffAff)(g.take(B))))(q.parallel(b.parallelAff)(p.map(b.functorAff)(l(r))(D.value0.value0.cont))));
          return m.wrap(d.WidgetStep(new k.Right({
            view: r(function (u) {
              return p["void"](t.functorEffect)(y.tryPut(f.pure(m.freeApplicative)(u))(B));
            })(D.value0.value0.view),
            cont: z
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [D.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [D.constructor.name]);
    };
  };

  c.mkLeafWidget = function (r) {
    return d.Widget(m.wrap(d.WidgetStep(new k.Left(function () {
      var v = y.empty();
      return m.wrap(d.WidgetStep(new k.Right({
        view: r(function (D) {
          return p["void"](t.functorEffect)(y.tryPut(f.pure(m.freeApplicative)(D))(v));
        }),
        cont: e.liftAff(e.monadAffAff)(g.take(v))
      })));
    }))));
  };

  c.mkNodeWidget = function (r) {
    return function (v) {
      return l(r)(v);
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var c = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (d) {
    this.liftWidget = d;
  }(a.identity(a.categoryFn));

  c.liftWidget = function (d) {
    return d.liftWidget;
  };

  c.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var c = a["Concur.Core.Props"];
  a = a["Data.Functor"];

  var d = function () {
    function f(m) {
      this.value0 = m;
    }

    f.create = function (m) {
      return new f(m);
    };

    return f;
  }(),
      h = function () {
    function f(m) {
      this.value0 = m;
    }

    f.create = function (m) {
      return new f(m);
    };

    return f;
  }();

  a = new a.Functor(function (f) {
    return function (m) {
      if (m instanceof d) return new d(m.value0);
      if (m instanceof h) return new h(function (q) {
        return m.value0(function (k) {
          return q(f(k));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [f.constructor.name, m.constructor.name]);
    };
  });
  c.PrimProp = d;
  c.Handler = h;

  c.mkProp = function (f) {
    return function (m) {
      if (m instanceof d) return m.value0;
      if (m instanceof h) return m.value0(f);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [f.constructor.name, m.constructor.name]);
    };
  };

  c.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var c = a["Concur.Core.DOM"],
      d = a["Concur.Core"],
      h = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Props"],
      m = a["Control.MultiAlternative"],
      q = a["Control.ShiftMap"],
      k = a["Data.Functor"],
      p = function p(t) {
    return function (y) {
      return function (b) {
        return function (g) {
          return q.shiftMap(t)(function (e) {
            return function (l) {
              return d.mkNodeWidget(function (r) {
                return function (v) {
                  return b(k.map(y)(function () {
                    var D = f.mkProp(r),
                        B = k.map(f.functorProps)(e);
                    return function (z) {
                      return D(B(z));
                    };
                  }())(g))(v);
                };
              })(l);
            };
          });
        };
      };
    };
  };

  c.el = p;

  c.elLeaf = function (t) {
    return function (y) {
      return function (b) {
        return function (g) {
          return h.liftWidget(t)(d.mkLeafWidget(function (e) {
            return b(k.map(y)(f.mkProp(e))(g));
          }));
        };
      };
    };
  };

  c["el'"] = function (t) {
    return function (y) {
      return function (b) {
        return function (g) {
          return function (e) {
            var l = p(t)(b)(g)(e),
                r = m.orr(y);
            return function (v) {
              return l(r(v));
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
      d = a["Concur.Core.Types"],
      h = a["Control.Applicative"],
      f = a["Control.Monad.Free"],
      m = a["Data.Either"],
      q = a["Data.Functor"],
      k = a["Data.Monoid"],
      p = a["Data.Tuple"],
      t = a.Effect,
      y = a["Effect.Aff"],
      b = function b(e) {
    return function (l) {
      var r = f.resume(d.functorWidgetStep)(d.unWidget(l));
      if (r instanceof m.Right) return h.pure(t.applicativeEffect)(new p.Tuple(l, k.mempty(e)));

      if (r instanceof m.Left) {
        if (r.value0 instanceof m.Left) return function () {
          var v = r.value0.value0();
          return b(e)(v)();
        };
        if (r.value0 instanceof m.Right) return h.pure(t.applicativeEffect)(new p.Tuple(f.wrap(new m.Right(r.value0.value0)), r.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [r.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [r.constructor.name]);
    };
  },
      g = function g(e) {
    return function (l) {
      return function (r) {
        var v = f.resume(d.functorWidgetStep)(r);
        if (v instanceof m.Right) return h.pure(t.applicativeEffect)(k.mempty(e));

        if (v instanceof m.Left) {
          if (v.value0 instanceof m.Left) return function () {
            var D = v.value0.value0();
            return g(e)(l)(D)();
          };
          if (v.value0 instanceof m.Right) return function () {
            y.runAff_(function () {
              var D = q.map(m.functorEither)(d.Widget);
              return function (B) {
                return l(D(B));
              };
            }())(v.value0.value0.cont)();
            return v.value0.value0.view;
          };
          throw Error("Failed pattern match at Concur.Core.Discharge (line 26, column 28 - line 32, column 19): " + [v.value0.constructor.name]);
        }

        throw Error("Failed pattern match at Concur.Core.Discharge (line 24, column 32 - line 32, column 19): " + [v.constructor.name]);
      };
    };
  };

  c.discharge = g;
  c.dischargePartialEffect = b;
})(PS);

(function (a) {
  a["Control.Comonad"] = a["Control.Comonad"] || {};
  a = a["Control.Comonad"];

  a.Comonad = function (c, d) {
    this.Extend0 = c;
    this.extract = d;
  };

  a.extract = function (c) {
    return c.extract;
  };
})(PS);

(function (a) {
  a["Control.Extend"] = a["Control.Extend"] || {};

  a["Control.Extend"].Extend = function (c, d) {
    this.Functor0 = c;
    this.extend = d;
  };
})(PS);

(function (a) {
  a.defer = function (c) {
    var d = null;
    return function () {
      if (void 0 === c) return d;
      d = c();
      c = void 0;
      return d;
    };
  };

  a.force = function (c) {
    return c();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var c = a["Data.Lazy"],
      d = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (h) {
    return function (f) {
      return d.defer(function (m) {
        return h(d.force(f));
      });
    };
  });
  c.functorLazy = a;
  c.defer = d.defer;
  c.force = d.force;
})(PS);

(function (a) {
  a["Control.Cofree"] = a["Control.Cofree"] || {};

  var c = a["Control.Cofree"],
      d = a["Concur.Core.Types"],
      h = a["Control.Alt"],
      f = a["Control.Applicative"],
      m = a["Control.Apply"],
      q = a["Control.Bind"],
      k = a["Control.Comonad"],
      p = a["Control.Extend"],
      t = a["Control.Monad"],
      y = a["Control.Plus"],
      b = a["Control.ShiftMap"],
      g = a["Data.Functor"],
      e = a["Data.Lazy"],
      l = a["Data.Tuple"],
      r = function r(J) {
    return l.snd(e.force(J));
  },
      v = function v(J) {
    return function (K) {
      return e.defer(function (N) {
        return new l.Tuple(J, K);
      });
    };
  },
      D = function D(J) {
    return l.fst(e.force(J));
  },
      B = function B(J) {
    return new g.Functor(function (K) {
      var N = function N(S) {
        return g.map(e.functorLazy)(function (V) {
          return new l.Tuple(K(V.value0), g.map(J)(N)(V.value1));
        })(S);
      };

      return N;
    });
  },
      z = function z(J) {
    return new p.Extend(function () {
      return B(J);
    }, function (K) {
      var N = function N(S) {
        return g.map(e.functorLazy)(function (V) {
          return new l.Tuple(K(S), g.map(J)(N)(V.value1));
        })(S);
      };

      return N;
    });
  },
      u = function u(J) {
    return new t.Monad(function () {
      return G(J);
    }, function () {
      return E(J);
    });
  },
      E = function E(J) {
    return new q.Bind(function () {
      return H(J);
    }, function (K) {
      return function (N) {
        var S = function S(L) {
          return function (M) {
            var w = g.map(J.Plus1().Alt0().Functor0())(S(L))(r(M)),
                P = g.map(J.Plus1().Alt0().Functor0())(V)(r(L));
            return v(D(M))(h.alt(J.Plus1().Alt0())(P)(w));
          };
        },
            V = function V(L) {
          return S(L)(N(D(L)));
        };

        return V(K);
      };
    });
  },
      H = function H(J) {
    return new m.Apply(function () {
      return B(J.Plus1().Alt0().Functor0());
    }, t.ap(u(J)));
  },
      G = function G(J) {
    return new f.Applicative(function () {
      return H(J);
    }, function (K) {
      return v(K)(y.empty(J.Plus1()));
    });
  };

  c.mkCofree = v;
  c.tail = r;

  c.comonadCofree = function (J) {
    return new k.Comonad(function () {
      return z(J);
    }, D);
  };

  c.applicativeCofree = G;
  c.bindCofree = E;

  c.shiftMapCofree = function (J) {
    return new b.ShiftMap(function (K) {
      return function (N) {
        return e.defer(function (S) {
          S = e.force(N);
          return new l.Tuple(S.value0, K(f.pure(G(d.widgetAlternative(J))))(S.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var c = a["Concur.Core.FRP"],
      d = a["Concur.Core.Types"],
      h = a["Control.Alt"],
      f = a["Control.Applicative"],
      m = a["Control.Bind"],
      q = a["Control.Cofree"],
      k = a["Control.Comonad"],
      p = a["Data.Functor"],
      t = a["Data.Maybe"],
      y = a["Data.Unit"],
      b = a["Effect.Aff"],
      g = a["Effect.Aff.Class"],
      e = q.tail,
      l = q.mkCofree,
      r = function r(B) {
    return function (z) {
      return l(B)(p.map(d.widgetFunctor)(function (u) {
        return r(u)(z);
      })(z(B)));
    };
  },
      v = function v(B) {
    return function (z) {
      return function (u) {
        var E = u(z);
        return l(k.extract(q.comonadCofree(d.widgetFunctor))(E))(m.bind(d.widgetBind)(e(E))(function (H) {
          return f.pure(d.widgetApplicative)(v(B)(k.extract(q.comonadCofree(d.widgetFunctor))(H))(u));
        }));
      };
    };
  },
      D = function D(B) {
    return m.bind(d.widgetBind)(e(B))(D);
  };

  c.step = l;

  c.display = function (B) {
    return l(y.unit)(B);
  };

  c.loopW = r;
  c.loopS = v;
  c.dyn = D;

  c.debounce = function (B) {
    return function (z) {
      return function (u) {
        return function (E) {
          var H = function H(J) {
            return function (K) {
              return m.bind(d.widgetBind)(h.alt(d.widgetAlt(B))(p.map(d.widgetFunctor)(t.Just.create)(K(J)))(p.voidRight(d.widgetFunctor)(t.Nothing.value)(g.liftAff(d.widgetMonadAff(B))(b.delay(z)))))(function (N) {
                if (N instanceof t.Nothing) return f.pure(d.widgetApplicative)(G(J)(K));
                if (N instanceof t.Just) return H(N.value0)(K);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [N.constructor.name]);
              });
            };
          },
              G = function G(J) {
            return function (K) {
              return l(J)(m.bind(d.widgetBind)(K(J))(function (N) {
                return H(N)(K);
              }));
            };
          };

          return G(u)(E);
        };
      };
    };
  };
})(PS);

(function (a) {
  function c(f) {
    return function (m) {
      return function (q) {
        return d.createElement.apply(d, [f, m].concat(q));
      };
    };
  }

  var d = require("react"),
      h = function (f) {
    function m(q, k, p) {
      switch (k) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          q[k] = p;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          q[k] = function (t, y) {
            return p(t)(y)();
          };

          break;

        case "componentDidUpdate":
          q[k] = function (t, y, b) {
            return p(t)(y)(b)();
          };

          break;

        case "unsafeComponentWillMount":
          q.UNSAFE_componentWillMount = p;
          break;

        case "unsafeComponentWillReceiveProps":
          q.UNSAFE_componentWillReceiveProps = function (t) {
            return p(t)();
          };

          break;

        case "unsafeComponentWillUpdate":
          q.UNSAFE_componentWillUpdate = function (t, y) {
            return p(t)(y)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + k);
      }
    }

    return function (q) {
      return function (k) {
        var p = function p(t) {
          f.call(this, t);
          t = k(this)();

          for (var y in t) {
            m(this, y, t[y]);
          }
        };

        p.displayName = q;
        p.prototype = Object.create(f.prototype);
        return p.prototype.constructor = p;
      };
    };
  }(d.Component);

  a.componentImpl = h;
  a.fragment = d.Fragment;

  a.setStateImpl = function (f) {
    return function (m) {
      return function () {
        f.setState(m);
      };
    };
  };

  a.getState = function (f) {
    return function () {
      if (!f.state) throw Error("[purescript-react] Cannot get state within constructor");
      return f.state;
    };
  };

  a.createElementImpl = c;
  a.createElementTagName = c;

  a.createLeafElementImpl = function (f) {
    return function (m) {
      return d.createElement(f, m);
    };
  };

  a.createElementTagNameDynamic = function (f) {
    return function (m) {
      return function (q) {
        return d.createElement(f, m, q);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var c = a.React,
      d = a.React;
  a = d.setStateImpl;
  var h = new function (f) {
    this.toElement = f;
  }((0, d.createElementImpl)(d.fragment)({}));

  c.component = function (f) {
    return d.componentImpl;
  };

  c.writeState = a;

  c.createLeafElement = function (f) {
    return d.createLeafElementImpl;
  };

  c.toElement = function (f) {
    return f.toElement;
  };

  c.isReactElementArray = h;
  c.getState = d.getState;
  c.createElementTagName = d.createElementTagName;
  c.createElementTagNameDynamic = d.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var c = a["Concur.React"],
      d = a["Concur.Core.Discharge"],
      h = a["Control.Apply"],
      f = a["Data.Either"],
      m = a["Data.Functor"],
      q = a["Data.Monoid"],
      k = a["Data.Show"],
      p = a["Data.Unit"],
      t = a.Effect,
      y = a["Effect.Console"],
      b = a["Effect.Exception"],
      g = a.React,
      e = function (l) {
    return function (r) {
      var v = function v(B) {
        return g.toElement(g.isReactElementArray)(B.view);
      },
          D = function D(B) {
        return function (z) {
          if (z instanceof f.Right) return function () {
            var u = d.discharge(q.monoidArray)(D(B))(z.value0)();
            return m["void"](t.functorEffect)(g.writeState(B)({
              view: u
            }))();
          };
          if (z instanceof f.Left) return function () {
            y.log("FAILED! " + k.show(b.showError)(z.value0))();
            return p.unit;
          };
          throw Error("Failed pattern match at Concur.React (line 32, column 5 - line 34, column 52): " + [B.constructor.name, z.constructor.name]);
        };
      };

      return g.component()("Concur")(function (B) {
        return function () {
          var z = d.dischargePartialEffect(q.monoidArray)(r)();
          return {
            state: {
              view: z.value1
            },
            render: m.map(t.functorEffect)(v)(g.getState(B)),
            componentDidMount: h.applySecond(t.applyEffect)(l)(D(B)(new f.Right(z.value0)))
          };
        };
      });
    };
  }(q.mempty(t.monoidEffect(q.monoidUnit)));

  c.renderComponent = function (l) {
    return g.createLeafElement()(e(l))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (c) {
    return function (d) {
      var h = {};
      h[c] = d;
      return h;
    };
  };

  a.unsafeUnfoldProps = function (c) {
    return function (d) {
      var h = {},
          f = {};
      f[c] = h;

      for (var m in d) {
        d.hasOwnProperty(m) && (h[m] = d[m]);
      }

      return f;
    };
  };

  a.unsafeFromPropsArray = function (c) {
    for (var d = {}, h = 0, f = c.length; h < f; h++) {
      var m = c[h],
          q;

      for (q in m) {
        m.hasOwnProperty(q) && (d[q] = m[q]);
      }
    }

    return d;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (c) {
    return function (d) {
      return c(d)();
    };
  };

  a.runEffectFn1 = function (c) {
    return function (d) {
      return function () {
        return c(d);
      };
    };
  };
})(PS["Effect.Uncurried"] = PS["Effect.Uncurried"] || {});

(function (a) {
  a["Effect.Uncurried"] = a["Effect.Uncurried"] || {};
  var c = a["Effect.Uncurried"];
  a = a["Effect.Uncurried"];
  c.mkEffectFn1 = a.mkEffectFn1;
  c.runEffectFn1 = a.runEffectFn1;
})(PS);

(function (a) {
  a["React.DOM.Props"] = a["React.DOM.Props"] || {};
  var c = a["React.DOM.Props"],
      d = a["React.DOM.Props"],
      h = a["Effect.Uncurried"];
  a = d.unsafeMkProps("value");
  var f = d.unsafeMkProps("target"),
      m = d.unsafeUnfoldProps("style"),
      q = d.unsafeMkProps("rel"),
      k = d.unsafeMkProps("placeholder"),
      p = d.unsafeMkProps("href"),
      t = d.unsafeMkProps("disabled"),
      y = d.unsafeMkProps("defaultValue"),
      b = d.unsafeMkProps("className"),
      g = d.unsafeMkProps("checked"),
      e = d.unsafeMkProps("type"),
      l = d.unsafeMkProps("id");
  c.style = m;
  c.checked = g;
  c.className = b;
  c.defaultValue = y;
  c.disabled = t;
  c.href = p;
  c._id = l;
  c.placeholder = k;
  c.rel = q;
  c.target = f;
  c._type = e;
  c.value = a;

  c.onChange = function (r) {
    return d.unsafeMkProps("onChange")(h.mkEffectFn1(r));
  };

  c.onClick = function (r) {
    return d.unsafeMkProps("onClick")(h.mkEffectFn1(r));
  };

  c.unsafeFromPropsArray = d.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var c = a["React.DOM"],
      d = a.React,
      h = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var f = function f(D) {
    return function (B) {
      return function (z) {
        if (D) {
          if (D) var u = d.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [D.constructor.name]);
        } else u = d.createElementTagName;
        return u(B)(h.unsafeFromPropsArray(z));
      };
    };
  },
      m = f(!1)("nav"),
      q = f(!1)("option"),
      k = f(!1)("p"),
      p = f(!1)("select"),
      t = f(!1)("span"),
      y = f(!1)("ul"),
      b = f(!1)("li"),
      g = f(!1)("div"),
      e = f(!1)("code"),
      l = f(!1)("cite"),
      r = f(!1)("button"),
      v = f(!1)("a");

  c.text = a;
  c.a = v;

  c.br = function (D) {
    return f(!1)("br")(D)([]);
  };

  c.button = r;
  c.cite = l;
  c.code = e;
  c.div = g;

  c.input = function (D) {
    return f(!1)("input")(D)([]);
  };

  c.li = b;
  c.nav = m;
  c.option = q;
  c.p = k;
  c.select = p;
  c.span = t;
  c.ul = y;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var c = a["Concur.React.DOM"],
      d = a["Concur.Core.DOM"],
      h = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Types"],
      m = a["Data.Functor"],
      q = a["React.DOM"],
      k = function k(v) {
    return function (D) {
      return function (B) {
        return [v(D)(B)];
      };
    };
  },
      p = function p(v) {
    return function (D) {
      return d.elLeaf(v)(m.functorArray)(function (B) {
        return [D(B)];
      });
    };
  },
      t = function t(v) {
    return function (D) {
      return function (B) {
        return d["el'"](v)(D)(m.functorArray)(k(B));
      };
    };
  },
      y = function y(v) {
    return function (D) {
      return t(D)(v)(q.li);
    };
  },
      b = function b(v) {
    return function (D) {
      return t(D)(v)(q.span);
    };
  },
      g = function g(v) {
    return function (D) {
      return d.el(v)(m.functorArray)(k(D));
    };
  },
      e = function e(v) {
    return function (D) {
      return t(D)(v)(q.div);
    };
  },
      l = function l(v) {
    return function (D) {
      return t(D)(v)(q.code);
    };
  },
      r = function r(v) {
    return function (D) {
      return t(D)(v)(q.cite);
    };
  };

  c.text = function (v) {
    return function (D) {
      return h.liftWidget(v)(f.display([q.text(D)]));
    };
  };

  c.a_ = function (v) {
    return g(v)(q.a);
  };

  c.a = function (v) {
    return function (D) {
      return t(D)(v)(q.a);
    };
  };

  c["br'"] = function (v) {
    return p(v)(q.br)([]);
  };

  c.button_ = function (v) {
    return g(v)(q.button);
  };

  c.button = function (v) {
    return function (D) {
      return t(D)(v)(q.button);
    };
  };

  c["cite'"] = function (v) {
    return function (D) {
      return r(v)(D)([]);
    };
  };

  c["code'"] = function (v) {
    return function (D) {
      return l(v)(D)([]);
    };
  };

  c.div_ = function (v) {
    return g(v)(q.div);
  };

  c.div = e;

  c["div'"] = function (v) {
    return function (D) {
      return e(v)(D)([]);
    };
  };

  c.input = function (v) {
    return p(v)(q.input);
  };

  c.li_ = function (v) {
    return g(v)(q.li);
  };

  c.li = y;

  c["li'"] = function (v) {
    return function (D) {
      return y(v)(D)([]);
    };
  };

  c.nav = function (v) {
    return function (D) {
      return t(D)(v)(q.nav);
    };
  };

  c.option = function (v) {
    return function (D) {
      return t(D)(v)(q.option);
    };
  };

  c.p_ = function (v) {
    return g(v)(q.p);
  };

  c.select = function (v) {
    return function (D) {
      return t(D)(v)(q.select);
    };
  };

  c.span_ = function (v) {
    return g(v)(q.span);
  };

  c.span = b;

  c["span'"] = function (v) {
    return function (D) {
      return b(v)(D)([]);
    };
  };

  c.ul_ = function (v) {
    return g(v)(q.ul);
  };

  c.ul = function (v) {
    return function (D) {
      return t(D)(v)(q.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var c = a["Concur.React.Props"],
      d = a["Concur.Core.Props"],
      h = a["Data.Array"],
      f = a["Data.Foldable"],
      m = a["Data.Maybe"],
      q = a["Data.Monoid"],
      k = a["React.DOM.Props"];
  a = new d.Handler(k.onClick);

  var p = new d.Handler(k.onChange),
      t = function t(b) {
    return d.PrimProp.create(k.className(b));
  },
      y = function () {
    var b = f.intercalate(f.foldableArray)(q.monoidString)(" "),
        g = h.concatMap(m.maybe([])(function (e) {
      return [e];
    }));
    return function (e) {
      return t(b(g(e)));
    };
  }();

  c.classList = y;

  c.unsafeTargetValue = function (b) {
    return b.target.value;
  };

  c.style = function (b) {
    return d.PrimProp.create(k.style(b));
  };

  c.checked = function (b) {
    return d.PrimProp.create(k.checked(b));
  };

  c.className = t;

  c.defaultValue = function (b) {
    return d.PrimProp.create(k.defaultValue(b));
  };

  c.disabled = function (b) {
    return d.PrimProp.create(k.disabled(b));
  };

  c.href = function (b) {
    return d.PrimProp.create(k.href(b));
  };

  c._id = function (b) {
    return d.PrimProp.create(k._id(b));
  };

  c.placeholder = function (b) {
    return d.PrimProp.create(k.placeholder(b));
  };

  c.rel = function (b) {
    return d.PrimProp.create(k.rel(b));
  };

  c.target = function (b) {
    return d.PrimProp.create(k.target(b));
  };

  c._type = function (b) {
    return d.PrimProp.create(k._type(b));
  };

  c.value = function (b) {
    return d.PrimProp.create(k.value(b));
  };

  c.onChange = p;
  c.onClick = a;
})(PS);

(function (a) {
  var c = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (d, h) {
    return c.render(d, h);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var c = a.ReactDOM,
      d = a["Data.Functor"],
      h = a["Data.Nullable"],
      f = a.Effect;

  a.ReactDOM.render = function (m) {
    return function (q) {
      return d.map(f.functorEffect)(h.toMaybe)(function () {
        return c.renderImpl(m, q);
      });
    };
  };
})(PS);

(function (a) {
  a._getElementById = function (c) {
    return function (d) {
      return function () {
        return d.getElementById(c);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});

(function (a) {
  a["Web.DOM.NonElementParentNode"] = a["Web.DOM.NonElementParentNode"] || {};
  var c = a["Web.DOM.NonElementParentNode"],
      d = a["Data.Functor"],
      h = a["Data.Nullable"],
      f = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (m) {
    var q = d.map(f.functorEffect)(h.toMaybe),
        k = c._getElementById(m);

    return function (p) {
      return q(k(p));
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
  var d = a.unsafeCoerce;
  c.toDocument = a.unsafeCoerce;
  c.toNonElementParentNode = d;
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
      d = a["Data.Functor"],
      h = a["Data.Maybe"],
      f = a["Data.Unit"],
      m = a.Effect,
      q = a.ReactDOM,
      k = a["Web.DOM.NonElementParentNode"],
      p = a["Web.HTML"],
      t = a["Web.HTML.HTMLDocument"],
      y = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (b) {
    return function (g) {
      return function () {
        var e = p.window();
        e = y.document(e)();
        e = t.toNonElementParentNode(e);
        e = k.getElementById(b)(e)();
        if (e instanceof h.Nothing) return f.unit;
        if (e instanceof h.Just) return d["void"](m.functorEffect)(q.render(c.renderComponent(g))(e.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [e.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Maybe.Trans"] = a["Control.Monad.Maybe.Trans"] || {};

  var c = a["Control.Monad.Maybe.Trans"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Data.Functor"],
      k = a["Data.Maybe"],
      p = function p(e) {
    return new q.Functor(function (l) {
      return function (r) {
        return q.map(e)(q.map(k.functorMaybe)(l))(r);
      };
    });
  },
      t = function t(e) {
    return new m.Monad(function () {
      return g(e);
    }, function () {
      return y(e);
    });
  },
      y = function y(e) {
    return new f.Bind(function () {
      return b(e);
    }, function (l) {
      return function (r) {
        return f.bind(e.Bind1())(l)(function (v) {
          if (v instanceof k.Nothing) return d.pure(e.Applicative0())(k.Nothing.value);
          if (v instanceof k.Just) return r(v.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [v.constructor.name]);
        });
      };
    });
  },
      b = function b(e) {
    return new h.Apply(function () {
      return p(e.Bind1().Apply0().Functor0());
    }, m.ap(t(e)));
  },
      g = function g(e) {
    return new d.Applicative(function () {
      return b(e);
    }, function () {
      var l = d.pure(e.Applicative0());
      return function (r) {
        return l(k.Just.create(r));
      };
    }());
  };

  c.MaybeT = function (e) {
    return e;
  };

  c.runMaybeT = function (e) {
    return e;
  };

  c.applicativeMaybeT = g;
  c.bindMaybeT = y;
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (c) {
    return function (d) {
      return c(d).value1;
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var c = a["Control.Monad.State.Class"],
      d = a["Data.Tuple"],
      h = a["Data.Unit"];

  c.MonadState = function (f, m) {
    this.Monad0 = f;
    this.state = m;
  };

  c.get = function (f) {
    return (0, f.state)(function (m) {
      return new d.Tuple(m, m);
    });
  };

  c.put = function (f) {
    return function (m) {
      return (0, f.state)(function (q) {
        return new d.Tuple(h.unit, m);
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};

  var c = a["Control.Monad.State.Trans"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Control.Monad.State.Class"],
      k = a["Data.Functor"],
      p = a["Data.Tuple"],
      t = function t(l) {
    return new k.Functor(function (r) {
      return function (v) {
        return function (D) {
          return k.map(l)(function (B) {
            return new p.Tuple(r(B.value0), B.value1);
          })(v(D));
        };
      };
    });
  },
      y = function y(l) {
    return new m.Monad(function () {
      return e(l);
    }, function () {
      return b(l);
    });
  },
      b = function b(l) {
    return new f.Bind(function () {
      return g(l);
    }, function (r) {
      return function (v) {
        return function (D) {
          return f.bind(l.Bind1())(r(D))(function (B) {
            return v(B.value0)(B.value1);
          });
        };
      };
    });
  },
      g = function g(l) {
    return new h.Apply(function () {
      return t(l.Bind1().Apply0().Functor0());
    }, m.ap(y(l)));
  },
      e = function e(l) {
    return new d.Applicative(function () {
      return g(l);
    }, function (r) {
      return function (v) {
        return d.pure(l.Applicative0())(new p.Tuple(r, v));
      };
    });
  };

  c.bindStateT = b;

  c.monadStateStateT = function (l) {
    return new q.MonadState(function () {
      return y(l);
    }, function (r) {
      return function () {
        var v = d.pure(l.Applicative0());
        return function (D) {
          return v(r(D));
        };
      }();
    });
  };
})(PS);

(function (a) {
  a["Control.Monad.Writer.Trans"] = a["Control.Monad.Writer.Trans"] || {};

  var c = a["Control.Monad.Writer.Trans"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Control.Monad.Writer.Class"],
      k = a["Data.Functor"],
      p = a["Data.Monoid"],
      t = a["Data.Semigroup"],
      y = a["Data.Tuple"],
      b = a["Data.Unit"],
      g = function g(B) {
    return function (z) {
      return B(z);
    };
  },
      e = function e(B) {
    return new k.Functor(function (z) {
      return g(k.map(B)(function (u) {
        return new y.Tuple(z(u.value0), u.value1);
      }));
    });
  },
      l = function l(B) {
    return function (z) {
      return new h.Apply(function () {
        return e(z.Functor0());
      }, function (u) {
        return function (E) {
          return h.apply(z)(k.map(z.Functor0())(function (H) {
            return function (G) {
              return new y.Tuple(H.value0(G.value0), t.append(B)(H.value1)(G.value1));
            };
          })(u))(E);
        };
      });
    };
  },
      r = function r(B) {
    return function (z) {
      return new f.Bind(function () {
        return l(B)(z.Apply0());
      }, function (u) {
        return function (E) {
          return f.bind(z)(u)(function (H) {
            var G = E(H.value0);
            return k.map(z.Apply0().Functor0())(function (J) {
              return new y.Tuple(J.value0, t.append(B)(H.value1)(J.value1));
            })(G);
          });
        };
      });
    };
  },
      v = function v(B) {
    return function (z) {
      return new d.Applicative(function () {
        return l(B.Semigroup0())(z.Apply0());
      }, function (u) {
        return d.pure(z)(new y.Tuple(u, p.mempty(B)));
      });
    };
  },
      D = function D(B) {
    return function (z) {
      return new m.Monad(function () {
        return v(B)(z.Applicative0());
      }, function () {
        return r(B.Semigroup0())(z.Bind1());
      });
    };
  };

  c.runWriterT = function (B) {
    return B;
  };

  c.monadWriterT = D;

  c.monadTellWriterT = function (B) {
    return function (z) {
      return new q.MonadTell(function () {
        return D(B)(z);
      }, function () {
        var u = d.pure(z.Applicative0()),
            E = y.Tuple.create(b.unit);
        return function (H) {
          return u(E(H));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Writer"] = a["Control.Monad.Writer"] || {};
  var c = a["Control.Monad.Writer"],
      d = a["Control.Monad.Writer.Trans"],
      h = a["Data.Identity"],
      f = a["Data.Newtype"];

  a = function () {
    var m = f.unwrap(h.newtypeIdentity);
    return function (q) {
      return m(d.runWriterT(q));
    };
  }();

  c.runWriter = a;
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
      d = a["Data.Enum"],
      h = a["Control.Apply"],
      f = a["Data.Bounded"],
      m = a["Data.Functor"],
      q = a["Data.Maybe"],
      k = a["Data.Newtype"],
      p = a["Data.Ord"],
      t = a["Data.Tuple"],
      y = a["Data.Unfoldable1"];

  a = function a(G) {
    return G;
  };

  var b = function b(G) {
    this.Bounded0 = G;
  },
      g = function g(G, J, K) {
    this.Ord0 = G;
    this.pred = J;
    this.succ = K;
  },
      e = function e(G, J, K, N, S) {
    this.Bounded0 = G;
    this.Enum1 = J;
    this.cardinality = K;
    this.fromEnum = N;
    this.toEnum = S;
  },
      l = new b(function () {
    return f.boundedBoolean;
  }),
      r = new k.Newtype(function (G) {
    return G;
  }, a),
      v = function v(G) {
    return new g(function () {
      return q.ordMaybe(G.Enum1().Ord0());
    }, function (J) {
      if (J instanceof q.Nothing) return q.Nothing.value;
      if (J instanceof q.Just) return new q.Just((0, G.Enum1().pred)(J.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [J.constructor.name]);
    }, function (J) {
      if (J instanceof q.Nothing) return new q.Just(new q.Just(f.bottom(G.Bounded0())));
      if (J instanceof q.Just) return m.map(q.functorMaybe)(q.Just.create)((0, G.Enum1().succ)(J.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [J.constructor.name]);
    });
  },
      D = new g(function () {
    return p.ordBoolean;
  }, function (G) {
    return G ? new q.Just(!1) : q.Nothing.value;
  }, function (G) {
    return G ? q.Nothing.value : new q.Just(!0);
  }),
      B = function B(G) {
    return function (J) {
      return function (K) {
        return G(J(K) + 1 | 0);
      };
    };
  },
      z = function z(G) {
    return function (J) {
      return function (K) {
        return G(J(K) - 1 | 0);
      };
    };
  },
      u = function u(G) {
    return G >= f.bottom(f.boundedInt) && G <= f.top(f.boundedInt) ? new q.Just(d.fromCharCode(G)) : q.Nothing.value;
  },
      E = new g(function () {
    return p.ordChar;
  }, z(u)(d.toCharCode), B(u)(d.toCharCode));

  u = new e(function () {
    return f.boundedChar;
  }, function () {
    return E;
  }, d.toCharCode(f.top(f.boundedChar)) - d.toCharCode(f.bottom(f.boundedChar)) | 0, d.toCharCode, u);
  var H = new e(function () {
    return f.boundedBoolean;
  }, function () {
    return D;
  }, 2, function (G) {
    if (!G) return 0;
    if (G) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [G.constructor.name]);
  }, function (G) {
    return 0 === G ? new q.Just(!1) : 1 === G ? new q.Just(!0) : q.Nothing.value;
  });
  c.Enum = g;
  c.BoundedEnum = e;

  c.toEnum = function (G) {
    return G.toEnum;
  };

  c.fromEnum = function (G) {
    return G.fromEnum;
  };

  c.toEnumWithDefaults = function (G) {
    return function (J) {
      return function (K) {
        return function (N) {
          var S = (0, G.toEnum)(N);
          if (S instanceof q.Just) return S.value0;
          if (S instanceof q.Nothing) return N < (0, G.fromEnum)(f.bottom(G.Bounded0())) ? J : K;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [S.constructor.name]);
        };
      };
    };
  };

  c.Cardinality = a;

  c.upFromIncluding = function (G) {
    return function (J) {
      return y.unfoldr1(J)(h.apply(h.applyFn)(t.Tuple.create)(G.succ));
    };
  };

  c.defaultSucc = B;
  c.defaultPred = z;
  c.SmallBounded = b;
  c.boundedEnumBoolean = H;
  c.boundedEnumChar = u;
  c.newtypeCardinality = r;

  c.boundedEnumMaybe = function (G) {
    return function (J) {
      return new e(function () {
        return q.boundedMaybe(J.Bounded0());
      }, function () {
        return v(J);
      }, k.unwrap(r)(J.cardinality) + 1 | 0, function (K) {
        if (K instanceof q.Nothing) return 0;
        if (K instanceof q.Just) return (0, J.fromEnum)(K.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [K.constructor.name]);
      }, function (K) {
        return 0 === K ? q.Nothing.value : m.map(q.functorMaybe)(q.Just.create)((0, J.toEnum)(K - 1 | 0));
      });
    };
  };

  c.smallBoundedBoolean = l;
})(PS);

(function (a) {
  a["Data.Char"] = a["Data.Char"] || {};
  var c = a["Data.Char"];
  a = a["Data.Enum"];
  a = a.toEnum(a.boundedEnumChar);
  c.fromCharCode = a;
})(PS);

(function (a) {
  a.intSub = function (c) {
    return function (d) {
      return c - d | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (c) {
    return function (d) {
      return c + d | 0;
    };
  };

  a.intMul = function (c) {
    return function (d) {
      return c * d | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var c = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (d, h, f, m) {
    this.add = d;
    this.mul = h;
    this.one = f;
    this.zero = m;
  }(a.intAdd, a.intMul, 1, 0);
  c.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var c = a["Data.Ring"],
      d = a["Data.Semiring"];
  a = new function (h, f) {
    this.Semiring0 = h;
    this.sub = f;
  }(function () {
    return d.semiringInt;
  }, a["Data.Ring"].intSub);
  c.ringInt = a;
})(PS);

(function (a) {
  a["Data.CommutativeRing"] = a["Data.CommutativeRing"] || {};
  var c = a["Data.CommutativeRing"],
      d = a["Data.Ring"];
  a = new function (h) {
    this.Ring0 = h;
  }(function () {
    return d.ringInt;
  });
  c.commutativeRingInt = a;
})(PS);

(function (a) {
  a.canonicalDateImpl = function (c, d, h, f) {
    h = new Date(Date.UTC(d, h - 1, f));
    0 <= d && 100 > d && h.setUTCFullYear(d);
    return c(h.getUTCFullYear())(h.getUTCMonth() + 1)(h.getUTCDate());
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var c = a["Data.Date.Component"],
      d = a["Data.Boolean"],
      h = a["Data.Bounded"],
      f = a["Data.Enum"],
      m = a["Data.Eq"],
      q = a["Data.Maybe"],
      k = a["Data.Ord"],
      p = a["Data.Ordering"],
      t = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      y = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      b = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      g = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      e = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      l = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      r = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      v = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      D = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      B = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      z = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      u = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      E = k.ordInt,
      H = k.ordInt;

  a = m.eqInt;
  var G = new m.Eq(function (F) {
    return function (A) {
      return F instanceof t && A instanceof t || F instanceof y && A instanceof y || F instanceof b && A instanceof b || F instanceof g && A instanceof g || F instanceof e && A instanceof e || F instanceof l && A instanceof l || F instanceof r && A instanceof r || F instanceof v && A instanceof v || F instanceof D && A instanceof D || F instanceof B && A instanceof B || F instanceof z && A instanceof z || F instanceof u && A instanceof u ? !0 : !1;
    };
  }),
      J = new k.Ord(function () {
    return G;
  }, function (F) {
    return function (A) {
      if (F instanceof t && A instanceof t) return p.EQ.value;
      if (F instanceof t) return p.LT.value;
      if (A instanceof t) return p.GT.value;
      if (F instanceof y && A instanceof y) return p.EQ.value;
      if (F instanceof y) return p.LT.value;
      if (A instanceof y) return p.GT.value;
      if (F instanceof b && A instanceof b) return p.EQ.value;
      if (F instanceof b) return p.LT.value;
      if (A instanceof b) return p.GT.value;
      if (F instanceof g && A instanceof g) return p.EQ.value;
      if (F instanceof g) return p.LT.value;
      if (A instanceof g) return p.GT.value;
      if (F instanceof e && A instanceof e) return p.EQ.value;
      if (F instanceof e) return p.LT.value;
      if (A instanceof e) return p.GT.value;
      if (F instanceof l && A instanceof l) return p.EQ.value;
      if (F instanceof l) return p.LT.value;
      if (A instanceof l) return p.GT.value;
      if (F instanceof r && A instanceof r) return p.EQ.value;
      if (F instanceof r) return p.LT.value;
      if (A instanceof r) return p.GT.value;
      if (F instanceof v && A instanceof v) return p.EQ.value;
      if (F instanceof v) return p.LT.value;
      if (A instanceof v) return p.GT.value;
      if (F instanceof D && A instanceof D) return p.EQ.value;
      if (F instanceof D) return p.LT.value;
      if (A instanceof D) return p.GT.value;
      if (F instanceof B && A instanceof B) return p.EQ.value;
      if (F instanceof B) return p.LT.value;
      if (A instanceof B) return p.GT.value;
      if (F instanceof z && A instanceof z) return p.EQ.value;
      if (F instanceof z) return p.LT.value;
      if (A instanceof z) return p.GT.value;
      if (F instanceof u && A instanceof u) return p.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [F.constructor.name, A.constructor.name]);
    };
  });
  m = m.eqInt;
  var K = new h.Bounded(function () {
    return E;
  }, -271820, 275759),
      N = new h.Bounded(function () {
    return J;
  }, t.value, u.value),
      S = new f.BoundedEnum(function () {
    return K;
  }, function () {
    return V;
  }, 547580, function (F) {
    return F;
  }, function (F) {
    if (-271820 <= F && 275759 >= F) return new q.Just(F);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [F.constructor.name]);
  }),
      V = new f.Enum(function () {
    return E;
  }, function () {
    var F = f.toEnum(S),
        A = f.fromEnum(S);
    return function (Y) {
      return F(A(Y) - 1 | 0);
    };
  }(), function () {
    var F = f.toEnum(S),
        A = f.fromEnum(S);
    return function (Y) {
      return F(A(Y) + 1 | 0);
    };
  }()),
      L = new f.BoundedEnum(function () {
    return N;
  }, function () {
    return M;
  }, 12, function (F) {
    if (F instanceof t) return 1;
    if (F instanceof y) return 2;
    if (F instanceof b) return 3;
    if (F instanceof g) return 4;
    if (F instanceof e) return 5;
    if (F instanceof l) return 6;
    if (F instanceof r) return 7;
    if (F instanceof v) return 8;
    if (F instanceof D) return 9;
    if (F instanceof B) return 10;
    if (F instanceof z) return 11;
    if (F instanceof u) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [F.constructor.name]);
  }, function (F) {
    return 1 === F ? new q.Just(t.value) : 2 === F ? new q.Just(y.value) : 3 === F ? new q.Just(b.value) : 4 === F ? new q.Just(g.value) : 5 === F ? new q.Just(e.value) : 6 === F ? new q.Just(l.value) : 7 === F ? new q.Just(r.value) : 8 === F ? new q.Just(v.value) : 9 === F ? new q.Just(D.value) : 10 === F ? new q.Just(B.value) : 11 === F ? new q.Just(z.value) : 12 === F ? new q.Just(u.value) : q.Nothing.value;
  }),
      M = new f.Enum(function () {
    return J;
  }, function () {
    var F = f.toEnum(L),
        A = f.fromEnum(L);
    return function (Y) {
      return F(A(Y) - 1 | 0);
    };
  }(), function () {
    var F = f.toEnum(L),
        A = f.fromEnum(L);
    return function (Y) {
      return F(A(Y) + 1 | 0);
    };
  }()),
      w = new h.Bounded(function () {
    return H;
  }, 1, 31),
      P = new f.BoundedEnum(function () {
    return w;
  }, function () {
    return I;
  }, 31, function (F) {
    return F;
  }, function (F) {
    if (1 <= F && 31 >= F) return new q.Just(F);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [F.constructor.name]);
  }),
      I = new f.Enum(function () {
    return H;
  }, function () {
    var F = f.toEnum(P),
        A = f.fromEnum(P);
    return function (Y) {
      return F(A(Y) - 1 | 0);
    };
  }(), function () {
    var F = f.toEnum(P),
        A = f.fromEnum(P);
    return function (Y) {
      return F(A(Y) + 1 | 0);
    };
  }());
  c.eqYear = a;
  c.ordYear = E;
  c.boundedYear = K;
  c.boundedEnumYear = S;
  c.eqMonth = G;
  c.ordMonth = J;
  c.boundedMonth = N;
  c.boundedEnumMonth = L;
  c.eqDay = m;
  c.ordDay = H;
  c.boundedDay = w;
  c.boundedEnumDay = P;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var c = a["Data.Date"],
      d = a["Data.Date"],
      h = a["Data.Bounded"],
      f = a["Data.Date.Component"],
      m = a["Data.Enum"],
      q = a["Data.Eq"],
      k = a["Data.Maybe"],
      p = a["Data.Ord"],
      t = a["Data.Ordering"],
      y = function () {
    function e(l, r, v) {
      this.value0 = l;
      this.value1 = r;
      this.value2 = v;
    }

    e.create = function (l) {
      return function (r) {
        return function (v) {
          return new e(l, r, v);
        };
      };
    };

    return e;
  }(),
      b = new q.Eq(function (e) {
    return function (l) {
      return q.eq(f.eqYear)(e.value0)(l.value0) && q.eq(f.eqMonth)(e.value1)(l.value1) && q.eq(f.eqDay)(e.value2)(l.value2);
    };
  }),
      g = new p.Ord(function () {
    return b;
  }, function (e) {
    return function (l) {
      var r = p.compare(f.ordYear)(e.value0)(l.value0);
      if (r instanceof t.LT) return t.LT.value;
      if (r instanceof t.GT) return t.GT.value;
      r = p.compare(f.ordMonth)(e.value1)(l.value1);
      return r instanceof t.LT ? t.LT.value : r instanceof t.GT ? t.GT.value : p.compare(f.ordDay)(e.value2)(l.value2);
    };
  });

  a = new h.Bounded(function () {
    return g;
  }, new y(h.bottom(f.boundedYear), h.bottom(f.boundedMonth), h.bottom(f.boundedDay)), new y(h.top(f.boundedYear), h.top(f.boundedMonth), h.top(f.boundedDay)));

  c.canonicalDate = function (e) {
    return function (l) {
      return function (r) {
        return d.canonicalDateImpl(function (v) {
          return function (D) {
            return function (B) {
              return new y(v, k.fromJust()(m.toEnum(f.boundedEnumMonth)(D)), B);
            };
          };
        }, e, m.fromEnum(f.boundedEnumMonth)(l), r);
      };
    };
  };

  c.year = function (e) {
    return e.value0;
  };

  c.month = function (e) {
    return e.value1;
  };

  c.day = function (e) {
    return e.value2;
  };

  c.eqDate = b;
  c.ordDate = g;
  c.boundedDate = a;
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var c = a["Data.Time.Component"],
      d = a["Data.Boolean"],
      h = a["Data.Bounded"],
      f = a["Data.Enum"],
      m = a["Data.Eq"],
      q = a["Data.Maybe"];
  a = a["Data.Ord"];
  var k = a.ordInt,
      p = a.ordInt,
      t = a.ordInt,
      y = a.ordInt,
      b = a = m.eqInt,
      g = m.eqInt;
  m = m.eqInt;
  var e = new h.Bounded(function () {
    return k;
  }, 0, 59),
      l = new h.Bounded(function () {
    return p;
  }, 0, 59),
      r = new h.Bounded(function () {
    return t;
  }, 0, 999),
      v = new h.Bounded(function () {
    return y;
  }, 0, 23),
      D = new f.BoundedEnum(function () {
    return e;
  }, function () {
    return B;
  }, 60, function (K) {
    return K;
  }, function (K) {
    if (0 <= K && 59 >= K) return new q.Just(K);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [K.constructor.name]);
  }),
      B = new f.Enum(function () {
    return k;
  }, function () {
    var K = f.toEnum(D),
        N = f.fromEnum(D);
    return function (S) {
      return K(N(S) - 1 | 0);
    };
  }(), function () {
    var K = f.toEnum(D),
        N = f.fromEnum(D);
    return function (S) {
      return K(N(S) + 1 | 0);
    };
  }()),
      z = new f.BoundedEnum(function () {
    return l;
  }, function () {
    return u;
  }, 60, function (K) {
    return K;
  }, function (K) {
    if (0 <= K && 59 >= K) return new q.Just(K);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [K.constructor.name]);
  }),
      u = new f.Enum(function () {
    return p;
  }, function () {
    var K = f.toEnum(z),
        N = f.fromEnum(z);
    return function (S) {
      return K(N(S) - 1 | 0);
    };
  }(), function () {
    var K = f.toEnum(z),
        N = f.fromEnum(z);
    return function (S) {
      return K(N(S) + 1 | 0);
    };
  }()),
      E = new f.BoundedEnum(function () {
    return r;
  }, function () {
    return H;
  }, 1E3, function (K) {
    return K;
  }, function (K) {
    if (0 <= K && 999 >= K) return new q.Just(K);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [K.constructor.name]);
  }),
      H = new f.Enum(function () {
    return t;
  }, function () {
    var K = f.toEnum(E),
        N = f.fromEnum(E);
    return function (S) {
      return K(N(S) - 1 | 0);
    };
  }(), function () {
    var K = f.toEnum(E),
        N = f.fromEnum(E);
    return function (S) {
      return K(N(S) + 1 | 0);
    };
  }()),
      G = new f.BoundedEnum(function () {
    return v;
  }, function () {
    return J;
  }, 24, function (K) {
    return K;
  }, function (K) {
    if (0 <= K && 23 >= K) return new q.Just(K);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [K.constructor.name]);
  }),
      J = new f.Enum(function () {
    return y;
  }, function () {
    var K = f.toEnum(G),
        N = f.fromEnum(G);
    return function (S) {
      return K(N(S) - 1 | 0);
    };
  }(), function () {
    var K = f.toEnum(G),
        N = f.fromEnum(G);
    return function (S) {
      return K(N(S) + 1 | 0);
    };
  }());
  c.eqHour = m;
  c.ordHour = y;
  c.boundedHour = v;
  c.boundedEnumHour = G;
  c.eqMinute = b;
  c.ordMinute = p;
  c.boundedMinute = l;
  c.boundedEnumMinute = z;
  c.eqSecond = a;
  c.ordSecond = k;
  c.boundedSecond = e;
  c.boundedEnumSecond = D;
  c.eqMillisecond = g;
  c.ordMillisecond = t;
  c.boundedMillisecond = r;
  c.boundedEnumMillisecond = E;
})(PS);

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  var c = a["Data.Time"],
      d = a["Data.Bounded"],
      h = a["Data.Eq"],
      f = a["Data.Ord"],
      m = a["Data.Ordering"],
      q = a["Data.Time.Component"];

  a = function () {
    function t(y, b, g, e) {
      this.value0 = y;
      this.value1 = b;
      this.value2 = g;
      this.value3 = e;
    }

    t.create = function (y) {
      return function (b) {
        return function (g) {
          return function (e) {
            return new t(y, b, g, e);
          };
        };
      };
    };

    return t;
  }();

  var k = new h.Eq(function (t) {
    return function (y) {
      return h.eq(q.eqHour)(t.value0)(y.value0) && h.eq(q.eqMinute)(t.value1)(y.value1) && h.eq(q.eqSecond)(t.value2)(y.value2) && h.eq(q.eqMillisecond)(t.value3)(y.value3);
    };
  }),
      p = new f.Ord(function () {
    return k;
  }, function (t) {
    return function (y) {
      var b = f.compare(q.ordHour)(t.value0)(y.value0);
      if (b instanceof m.LT) return m.LT.value;
      if (b instanceof m.GT) return m.GT.value;
      b = f.compare(q.ordMinute)(t.value1)(y.value1);
      if (b instanceof m.LT) return m.LT.value;
      if (b instanceof m.GT) return m.GT.value;
      b = f.compare(q.ordSecond)(t.value2)(y.value2);
      return b instanceof m.LT ? m.LT.value : b instanceof m.GT ? m.GT.value : f.compare(q.ordMillisecond)(t.value3)(y.value3);
    };
  });
  d = new d.Bounded(function () {
    return p;
  }, new a(d.bottom(q.boundedHour), d.bottom(q.boundedMinute), d.bottom(q.boundedSecond), d.bottom(q.boundedMillisecond)), new a(d.top(q.boundedHour), d.top(q.boundedMinute), d.top(q.boundedSecond), d.top(q.boundedMillisecond)));
  c.Time = a;

  c.hour = function (t) {
    return t.value0;
  };

  c.minute = function (t) {
    return t.value1;
  };

  c.second = function (t) {
    return t.value2;
  };

  c.millisecond = function (t) {
    return t.value3;
  };

  c.eqTime = k;
  c.ordTime = p;
  c.boundedTime = d;
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  var c = a["Data.DateTime"],
      d = a["Data.Bounded"],
      h = a["Data.Date"],
      f = a["Data.Eq"],
      m = a["Data.Ord"],
      q = a["Data.Ordering"],
      k = a["Data.Time"];

  a = function () {
    function y(b, g) {
      this.value0 = b;
      this.value1 = g;
    }

    y.create = function (b) {
      return function (g) {
        return new y(b, g);
      };
    };

    return y;
  }();

  var p = new f.Eq(function (y) {
    return function (b) {
      return f.eq(h.eqDate)(y.value0)(b.value0) && f.eq(k.eqTime)(y.value1)(b.value1);
    };
  }),
      t = new m.Ord(function () {
    return p;
  }, function (y) {
    return function (b) {
      var g = m.compare(h.ordDate)(y.value0)(b.value0);
      return g instanceof q.LT ? q.LT.value : g instanceof q.GT ? q.GT.value : m.compare(k.ordTime)(y.value1)(b.value1);
    };
  });
  d = new d.Bounded(function () {
    return t;
  }, new a(d.bottom(h.boundedDate), d.bottom(k.boundedTime)), new a(d.top(h.boundedDate), d.top(k.boundedTime)));
  c.DateTime = a;
  c.boundedDateTime = d;
})(PS);

(function (a) {
  a.toDateTimeImpl = function (c) {
    return function (d) {
      d = new Date(d);
      return c(d.getUTCFullYear())(d.getUTCMonth() + 1)(d.getUTCDate())(d.getUTCHours())(d.getUTCMinutes())(d.getUTCSeconds())(d.getUTCMilliseconds());
    };
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.DateTime.Instant"] = a["Data.DateTime.Instant"] || {};
  var c = a["Data.DateTime.Instant"],
      d = a["Data.DateTime.Instant"],
      h = a["Data.Boolean"],
      f = a["Data.Date"],
      m = a["Data.Date.Component"],
      q = a["Data.DateTime"],
      k = a["Data.Enum"],
      p = a["Data.Maybe"],
      t = a["Data.Time"];

  a = function () {
    return d.toDateTimeImpl(function (y) {
      return function (b) {
        return function (g) {
          return function (e) {
            return function (l) {
              return function (r) {
                return function (v) {
                  return new q.DateTime(f.canonicalDate(y)(p.fromJust()(k.toEnum(m.boundedEnumMonth)(b)))(g), new t.Time(e, l, r, v));
                };
              };
            };
          };
        };
      };
    });
  }();

  c.instant = function (y) {
    if (-86399778816E5 <= y && 8639977881599999 >= y) return new p.Just(y);
    if (h.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.DateTime.Instant (line 44, column 1 - line 44, column 41): " + [y.constructor.name]);
  };

  c.toDateTime = a;
})(PS);

(function (a) {
  a["Data.Either.Extra"] = a["Data.Either.Extra"] || {};

  var c = a["Data.Either.Extra"],
      d = a["Control.Applicative"],
      h = a["Control.Bind"],
      f = a["Control.Category"],
      m = a["Control.Plus"],
      q = a["Data.Either"],
      k = a["Data.Function"],
      p = function p(g) {
    return function (e) {
      return function (l) {
        if (l instanceof q.Left) return g;
        if (l instanceof q.Right) return e(l.value0);
        throw Error("Failed pattern match at Data.Either.Extra (line 29, column 1 - line 29, column 58): " + [g.constructor.name, e.constructor.name, l.constructor.name]);
      };
    };
  },
      t = function t(g) {
    return function (e) {
      return function (l) {
        if (l instanceof q.Left) return e(l.value0);
        if (l instanceof q.Right) return g;
        throw Error("Failed pattern match at Data.Either.Extra (line 18, column 1 - line 18, column 57): " + [g.constructor.name, e.constructor.name, l.constructor.name]);
      };
    };
  },
      y = function y(g) {
    return function (e) {
      return function (l) {
        return k.flip(h.bind(g.Bind1()))(p(m.empty(e))(function () {
          var r = d.pure(g.Applicative0());
          return function (v) {
            return r(l(v));
          };
        }()));
      };
    };
  },
      b = function b(g) {
    return function (e) {
      return function (l) {
        return k.flip(h.bind(g.Bind1()))(t(m.empty(e))(function () {
          var r = d.pure(g.Applicative0());
          return function (v) {
            return r(l(v));
          };
        }()));
      };
    };
  };

  c.catLefts = function (g) {
    return function (e) {
      return b(g)(e)(f.identity(f.categoryFn));
    };
  };

  c.catRights = function (g) {
    return function (e) {
      return y(g)(e)(f.identity(f.categoryFn));
    };
  };
})(PS);

(function (a) {
  a.intDegree = function (c) {
    return Math.min(Math.abs(c), 2147483647);
  };

  a.intDiv = function (c) {
    return function (d) {
      return 0 === d ? 0 : 0 < d ? Math.floor(c / d) : -Math.floor(c / -d);
    };
  };

  a.intMod = function (c) {
    return function (d) {
      if (0 === d) return 0;
      d = Math.abs(d);
      return (c % d + d) % d;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var c = a["Data.EuclideanRing"],
      d = a["Data.EuclideanRing"],
      h = a["Data.CommutativeRing"];
  a = new function (f, m, q, k) {
    this.CommutativeRing0 = f;
    this.degree = m;
    this.div = q;
    this.mod = k;
  }(function () {
    return h.commutativeRingInt;
  }, d.intDegree, d.intDiv, d.intMod);

  c.div = function (f) {
    return f.div;
  };

  c.mod = function (f) {
    return f.mod;
  };

  c.euclideanRingInt = a;
})(PS);

(function (a) {
  a["Data.Generic.Rep"] = a["Data.Generic.Rep"] || {};
  a = a["Data.Generic.Rep"];

  var c = function () {
    function f(m) {
      this.value0 = m;
    }

    f.create = function (m) {
      return new f(m);
    };

    return f;
  }(),
      d = function () {
    function f(m) {
      this.value0 = m;
    }

    f.create = function (m) {
      return new f(m);
    };

    return f;
  }(),
      h = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.Generic = function (f, m) {
    this.from = f;
    this.to = m;
  };

  a.to = function (f) {
    return f.to;
  };

  a.from = function (f) {
    return f.from;
  };

  a.NoArguments = h;
  a.Inl = c;
  a.Inr = d;

  a.Constructor = function (f) {
    return f;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var c = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Generic.Rep"],
      h = function h(p) {
    this["genericTop'"] = p;
  },
      f = function f(p) {
    this["genericBottom'"] = p;
  };

  a = new h(d.NoArguments.value);

  var m = function m(p) {
    return p["genericTop'"];
  },
      q = new f(d.NoArguments.value),
      k = function k(p) {
    return p["genericBottom'"];
  };

  c["genericBottom'"] = k;

  c.genericBottom = function (p) {
    return function (t) {
      return d.to(p)(k(t));
    };
  };

  c["genericTop'"] = m;

  c.genericTop = function (p) {
    return function (t) {
      return d.to(p)(m(t));
    };
  };

  c.genericBottomNoArguments = q;

  c.genericBottomSum = function (p) {
    return new f(new d.Inl(k(p)));
  };

  c.genericBottomConstructor = function (p) {
    return new f(k(p));
  };

  c.genericTopNoArguments = a;

  c.genericTopSum = function (p) {
    return new h(new d.Inr(m(p)));
  };

  c.genericTopConstructor = function (p) {
    return new h(m(p));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var c = a["Data.Generic.Rep.Enum"],
      d = a["Data.Boolean"],
      h = a["Data.Enum"],
      f = a["Data.Functor"],
      m = a["Data.Generic.Rep"],
      q = a["Data.Generic.Rep.Bounded"],
      k = a["Data.Maybe"],
      p = a["Data.Newtype"],
      t = function t(D, B) {
    this["genericPred'"] = D;
    this["genericSucc'"] = B;
  },
      y = function y(D, B, z) {
    this["genericCardinality'"] = D;
    this["genericFromEnum'"] = B;
    this["genericToEnum'"] = z;
  },
      b = function b(D) {
    return D["genericToEnum'"];
  },
      g = function g(D) {
    return D["genericSucc'"];
  },
      e = function e(D) {
    return D["genericPred'"];
  },
      l = function l(D) {
    return D["genericFromEnum'"];
  };

  a = new t(function (D) {
    return k.Nothing.value;
  }, function (D) {
    return k.Nothing.value;
  });

  var r = function r(D) {
    return D["genericCardinality'"];
  },
      v = new y(1, function (D) {
    return 0;
  }, function (D) {
    return 0 === D ? new k.Just(m.NoArguments.value) : k.Nothing.value;
  });

  c.genericPred = function (D) {
    return function (B) {
      var z = f.map(k.functorMaybe)(m.to(D)),
          u = e(B),
          E = m.from(D);
      return function (H) {
        return z(u(E(H)));
      };
    };
  };

  c.genericSucc = function (D) {
    return function (B) {
      var z = f.map(k.functorMaybe)(m.to(D)),
          u = g(B),
          E = m.from(D);
      return function (H) {
        return z(u(E(H)));
      };
    };
  };

  c.genericCardinality = function (D) {
    return function (B) {
      return p.unwrap(h.newtypeCardinality)(r(B));
    };
  };

  c.genericToEnum = function (D) {
    return function (B) {
      var z = f.map(k.functorMaybe)(m.to(D)),
          u = b(B);
      return function (E) {
        return z(u(E));
      };
    };
  };

  c.genericFromEnum = function (D) {
    return function (B) {
      var z = l(B),
          u = m.from(D);
      return function (E) {
        return z(u(E));
      };
    };
  };

  c.genericEnumNoArguments = a;

  c.genericEnumConstructor = function (D) {
    return new t(function (B) {
      return f.map(k.functorMaybe)(m.Constructor)(e(D)(B));
    }, function (B) {
      return f.map(k.functorMaybe)(m.Constructor)(g(D)(B));
    });
  };

  c.genericEnumSum = function (D) {
    return function (B) {
      return function (z) {
        return function (u) {
          return new t(function (E) {
            if (E instanceof m.Inl) return f.map(k.functorMaybe)(m.Inl.create)(e(D)(E.value0));

            if (E instanceof m.Inr) {
              E = e(z)(E.value0);
              if (E instanceof k.Nothing) return new k.Just(new m.Inl(q["genericTop'"](B)));
              if (E instanceof k.Just) return new k.Just(new m.Inr(E.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [E.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [E.constructor.name]);
          }, function (E) {
            if (E instanceof m.Inl) {
              E = g(D)(E.value0);
              if (E instanceof k.Nothing) return new k.Just(new m.Inr(q["genericBottom'"](u)));
              if (E instanceof k.Just) return new k.Just(new m.Inl(E.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [E.constructor.name]);
            }

            if (E instanceof m.Inr) return f.map(k.functorMaybe)(m.Inr.create)(g(z)(E.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [E.constructor.name]);
          });
        };
      };
    };
  };

  c.genericBoundedEnumNoArguments = v;

  c.genericBoundedEnumConstructor = function (D) {
    return new y(p.unwrap(h.newtypeCardinality)(r(D)), function (B) {
      return l(D)(B);
    }, function (B) {
      return f.map(k.functorMaybe)(m.Constructor)(b(D)(B));
    });
  };

  c.genericBoundedEnumSum = function (D) {
    return function (B) {
      return new y(h.Cardinality(p.unwrap(h.newtypeCardinality)(r(D)) + p.unwrap(h.newtypeCardinality)(r(B)) | 0), function (z) {
        if (z instanceof m.Inl) return l(D)(z.value0);
        if (z instanceof m.Inr) return l(B)(z.value0) + p.unwrap(h.newtypeCardinality)(r(D)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [z.constructor.name]);
      }, function (z) {
        var u = r(D);
        if (0 <= z && z < u) z = f.map(k.functorMaybe)(m.Inl.create)(b(D)(z));else if (d.otherwise) z = f.map(k.functorMaybe)(m.Inr.create)(b(B)(z - u | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [u.constructor.name]);
        return z;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var c = a["Data.Generic.Rep.Eq"],
      d = a["Data.Generic.Rep"],
      h = function h(f) {
    this["genericEq'"] = f;
  };

  a = new h(function (f) {
    return function (m) {
      return !0;
    };
  });

  c.genericEq = function (f) {
    return function (m) {
      return function (q) {
        return function (k) {
          return (0, m["genericEq'"])(d.from(f)(q))(d.from(f)(k));
        };
      };
    };
  };

  c.genericEqNoArguments = a;

  c.genericEqSum = function (f) {
    return function (m) {
      return new h(function (q) {
        return function (k) {
          return q instanceof d.Inl && k instanceof d.Inl ? (0, f["genericEq'"])(q.value0)(k.value0) : q instanceof d.Inr && k instanceof d.Inr ? (0, m["genericEq'"])(q.value0)(k.value0) : !1;
        };
      });
    };
  };

  c.genericEqConstructor = function (f) {
    return new h(function (m) {
      return function (q) {
        return (0, f["genericEq'"])(m)(q);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var c = a["Data.Generic.Rep.Ord"],
      d = a["Data.Generic.Rep"],
      h = a["Data.Ordering"],
      f = function f(q) {
    this["genericCompare'"] = q;
  };

  a = new f(function (q) {
    return function (k) {
      return h.EQ.value;
    };
  });

  var m = function m(q) {
    return q["genericCompare'"];
  };

  c.genericCompare = function (q) {
    return function (k) {
      return function (p) {
        return function (t) {
          return m(k)(d.from(q)(p))(d.from(q)(t));
        };
      };
    };
  };

  c.genericOrdNoArguments = a;

  c.genericOrdSum = function (q) {
    return function (k) {
      return new f(function (p) {
        return function (t) {
          if (p instanceof d.Inl && t instanceof d.Inl) return m(q)(p.value0)(t.value0);
          if (p instanceof d.Inr && t instanceof d.Inr) return m(k)(p.value0)(t.value0);
          if (p instanceof d.Inl && t instanceof d.Inr) return h.LT.value;
          if (p instanceof d.Inr && t instanceof d.Inl) return h.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [p.constructor.name, t.constructor.name]);
        };
      });
    };
  };

  c.genericOrdConstructor = function (q) {
    return new f(function (k) {
      return function (p) {
        return m(q)(k)(p);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Symbol"] = a["Data.Symbol"] || {};
  a = a["Data.Symbol"];

  var c = function () {
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

  a.SProxy = c;
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var c = a["Data.Generic.Rep.Show"],
      d = a["Data.Foldable"],
      h = a["Data.Generic.Rep"],
      f = a["Data.Monoid"],
      m = a["Data.Semigroup"],
      q = a["Data.Symbol"],
      k = function k(p) {
    this["genericShow'"] = p;
  };

  a = new function (p) {
    this.genericShowArgs = p;
  }(function (p) {
    return [];
  });

  c.genericShow = function (p) {
    return function (t) {
      return function (y) {
        return (0, t["genericShow'"])(h.from(p)(y));
      };
    };
  };

  c.genericShowArgsNoArguments = a;

  c.genericShowSum = function (p) {
    return function (t) {
      return new k(function (y) {
        if (y instanceof h.Inl) return (0, p["genericShow'"])(y.value0);
        if (y instanceof h.Inr) return (0, t["genericShow'"])(y.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [y.constructor.name]);
      });
    };
  };

  c.genericShowConstructor = function (p) {
    return function (t) {
      return new k(function (y) {
        var b = q.reflectSymbol(t)(q.SProxy.value);
        y = (0, p.genericShowArgs)(y);
        return 0 === y.length ? b : "(" + (d.intercalate(d.foldableArray)(f.monoidString)(" ")(m.append(m.semigroupArray)([b])(y)) + ")");
      });
    };
  };
})(PS);

(function (a) {
  a.fromNumberImpl = function (c) {
    return function (d) {
      return function (h) {
        return (h | 0) === h ? c(h) : d;
      };
    };
  };

  a.toNumber = function (c) {
    return c;
  };

  a.toStringAs = function (c) {
    return function (d) {
      return d.toString(c);
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

  var c = a["Data.Int"],
      d = a["Data.Int"],
      h = a["Data.Boolean"],
      f = a["Data.Bounded"],
      m = a["Data.Maybe"],
      q = a.Global,
      k = a.Math,
      p = d.fromNumberImpl(m.Just.create)(m.Nothing.value),
      t = function t(y) {
    if (y === q.infinity || y === -q.infinity) return 0;
    if (y >= d.toNumber(f.top(f.boundedInt))) return f.top(f.boundedInt);
    if (y <= d.toNumber(f.bottom(f.boundedInt))) return f.bottom(f.boundedInt);
    if (h.otherwise) return m.fromMaybe(0)(p(y));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [y.constructor.name]);
  };

  c.round = function (y) {
    return t(k.round(y));
  };

  c.hexadecimal = 16;
  c.toNumber = d.toNumber;
  c.toStringAs = d.toStringAs;
})(PS);

(function (a) {
  a.toInstantImpl = function (c) {
    return function (d) {
      return function (h) {
        h = h.getTime();
        return isNaN(h) ? d : c(h);
      };
    };
  };

  a.jsdate = function (c) {
    var d = c.year;
    c = new Date(Date.UTC(d, c.month, c.day, c.hour, c.minute, c.second, c.millisecond));
    0 <= d && 100 > d && c.setUTCFullYear(d);
    return c;
  };

  a.dateMethodEff = function (c, d) {
    return function () {
      return d[c]();
    };
  };

  a.parse = function (c) {
    return function () {
      return new Date(c);
    };
  };
})(PS["Data.JSDate"] = PS["Data.JSDate"] || {});

(function (a) {
  a["Data.Time.Duration"] = a["Data.Time.Duration"] || {};

  a["Data.Time.Duration"].Milliseconds = function (c) {
    return c;
  };
})(PS);

(function (a) {
  a["Data.JSDate"] = a["Data.JSDate"] || {};
  var c = a["Data.JSDate"],
      d = a["Data.JSDate"],
      h = a["Data.Date"],
      f = a["Data.Date.Component"],
      m = a["Data.DateTime.Instant"],
      q = a["Data.Enum"],
      k = a["Data.Functor"],
      p = a["Data.Int"],
      t = a["Data.Maybe"],
      y = a["Data.Time"],
      b = a["Data.Time.Component"],
      g = a["Data.Time.Duration"];
  a = a["Control.Bind"].composeKleisliFlipped(t.bindMaybe)(function (e) {
    return m.instant(g.Milliseconds(e));
  })(d.toInstantImpl(t.Just.create)(t.Nothing.value));
  k = k.map(k.functorFn)(k.map(t.functorMaybe)(m.toDateTime))(a);

  c.fromDateTime = function (e) {
    return d.jsdate({
      year: p.toNumber(q.fromEnum(f.boundedEnumYear)(h.year(e.value0))),
      month: p.toNumber(q.fromEnum(f.boundedEnumMonth)(h.month(e.value0)) - 1 | 0),
      day: p.toNumber(q.fromEnum(f.boundedEnumDay)(h.day(e.value0))),
      hour: p.toNumber(q.fromEnum(b.boundedEnumHour)(y.hour(e.value1))),
      minute: p.toNumber(q.fromEnum(b.boundedEnumMinute)(y.minute(e.value1))),
      second: p.toNumber(q.fromEnum(b.boundedEnumSecond)(y.second(e.value1))),
      millisecond: p.toNumber(q.fromEnum(b.boundedEnumMillisecond)(y.millisecond(e.value1)))
    });
  };

  c.toDateTime = k;

  c.toISOString = function (e) {
    return d.dateMethodEff("toISOString", e);
  };

  c.parse = d.parse;
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};
  var c = a["Data.Maybe.First"],
      d = a["Data.Maybe"];
  a = new a["Data.Semigroup"].Semigroup(function (h) {
    return function (f) {
      return h instanceof d.Just ? h : f;
    };
  });

  c.First = function (h) {
    return h;
  };

  c.semigroupFirst = a;
})(PS);

(function (a) {
  a["Data.Natural"] = a["Data.Natural"] || {};
  var c = a["Data.Natural"],
      d = a["Data.Show"];
  a = new d.Show(function () {
    var h = d.show(d.showInt);
    return function (f) {
      return h(f);
    };
  }());

  c.intToNat = function (h) {
    return 0 <= h ? h : 0;
  };

  c.natToInt = function (h) {
    return h;
  };

  c.showNatural = a;
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  a = a["Data.Profunctor"];
  var c = new function (d) {
    this.dimap = d;
  }(function (d) {
    return function (h) {
      return function (f) {
        return function (m) {
          return h(f(d(m)));
        };
      };
    };
  });

  a.dimap = function (d) {
    return d.dimap;
  };

  a.profunctorFn = c;
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};
  var c = a["Data.Profunctor.Strong"],
      d = a["Control.Category"],
      h = a["Control.Semigroupoid"],
      f = a["Data.Profunctor"],
      m = a["Data.Tuple"];
  a = new function (k, p, t) {
    this.Profunctor0 = k;
    this.first = p;
    this.second = t;
  }(function () {
    return f.profunctorFn;
  }, function (k) {
    return function (p) {
      return new m.Tuple(k(p.value0), p.value1);
    };
  }, a["Data.Functor"].map(m.functorTuple));

  var q = function q(k) {
    return function (p) {
      return function (t) {
        return function (y) {
          return h.composeFlipped(k.Semigroupoid0())((0, p.first)(t))((0, p.second)(y));
        };
      };
    };
  };

  c.second = function (k) {
    return k.second;
  };

  c.fanout = function (k) {
    return function (p) {
      return function (t) {
        return function (y) {
          var b = f.dimap(p.Profunctor0())(d.identity(d.categoryFn))(function (g) {
            return new m.Tuple(g, g);
          })(d.identity(k));
          return h.composeFlipped(k.Semigroupoid0())(b)(q(k)(p)(t)(y));
        };
      };
    };
  };

  c.strongFn = a;
})(PS);

(function (a) {
  var c = "function" === typeof Array.from,
      d = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      h = "function" === typeof String.prototype.fromCodePoint,
      f = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (m) {
    return f ? function (q) {
      return q.codePointAt(0);
    } : m;
  };

  a._codePointAt = function (m) {
    return function (q) {
      return function (k) {
        return function (p) {
          return function (t) {
            return function (y) {
              var b = y.length;
              if (0 > t || t >= b) return k;
              if (d) for (y = y[Symbol.iterator](), b = t;; --b) {
                var g = y.next();
                if (g.done) return k;
                if (0 === b) return q(p(g.value));
              }
              return m(t)(y);
            };
          };
        };
      };
    };
  };

  a._singleton = function (m) {
    return h ? String.fromCodePoint : m;
  };

  a._take = function (m) {
    return function (q) {
      return d ? function (k) {
        var p = "";
        k = k[Symbol.iterator]();

        for (var t = 0; t < q; ++t) {
          var y = k.next();
          if (y.done) break;
          p += y.value;
        }

        return p;
      } : m(q);
    };
  };

  a._toCodePointArray = function (m) {
    return function (q) {
      return c ? function (k) {
        return Array.from(k, q);
      } : m;
    };
  };
})(PS["Data.String.CodePoints"] = PS["Data.String.CodePoints"] || {});

(function (a) {
  a.singleton = function (c) {
    return c;
  };

  a.length = function (c) {
    return c.length;
  };

  a._indexOf = function (c) {
    return function (d) {
      return function (h) {
        return function (f) {
          f = f.indexOf(h);
          return -1 === f ? d : c(f);
        };
      };
    };
  };

  a._lastIndexOf = function (c) {
    return function (d) {
      return function (h) {
        return function (f) {
          f = f.lastIndexOf(h);
          return -1 === f ? d : c(f);
        };
      };
    };
  };

  a.take = function (c) {
    return function (d) {
      return d.substr(0, c);
    };
  };

  a.drop = function (c) {
    return function (d) {
      return d.substring(c);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a["Data.String.CodeUnits"] = a["Data.String.CodeUnits"] || {};

  var c = a["Data.String.CodeUnits"],
      d = a["Data.String.CodeUnits"],
      h = a["Data.Maybe"],
      f = d._lastIndexOf(h.Just.create)(h.Nothing.value),
      m = d._indexOf(h.Just.create)(h.Nothing.value);

  c.stripSuffix = function (q) {
    return function (k) {
      var p = f(q)(k);
      return p instanceof h.Just && p.value0 === (d.length(k) - d.length(q) | 0) ? h.Just.create(d.take(p.value0)(k)) : h.Nothing.value;
    };
  };

  c.contains = function (q) {
    var k = m(q);
    return function (p) {
      return h.isJust(k(p));
    };
  };

  c.singleton = d.singleton;
  c.length = d.length;
  c.drop = d.drop;
})(PS);

(function (a) {
  a.charAt = function (c) {
    return function (d) {
      if (0 <= c && c < d.length) return d.charAt(c);
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

  var c = a["Data.String.CodePoints"],
      d = a["Data.String.CodePoints"],
      h = a["Data.Array"],
      f = a["Data.Boolean"],
      m = a["Data.Bounded"],
      q = a["Data.Enum"],
      k = a["Data.Eq"],
      p = a["Data.EuclideanRing"],
      t = a["Data.Functor"],
      y = a["Data.Int"],
      b = a["Data.Maybe"],
      g = a["Data.Ord"],
      e = a["Data.String.CodeUnits"],
      l = a["Data.String.Common"],
      r = a["Data.String.Unsafe"],
      v = a["Data.Tuple"],
      D = a["Data.Unfoldable"],
      B = function B(w) {
    return function (P) {
      return ((1024 * (w - 55296 | 0) | 0) + (P - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (w) {
    return "(CodePoint 0x" + (l.toUpper(y.toStringAs(y.hexadecimal)(w)) + ")");
  });

  var z = function z(w) {
    var P = e.length(w);
    if (0 === P) return b.Nothing.value;
    if (1 === P) return new b.Just({
      head: q.fromEnum(q.boundedEnumChar)(r.charAt(0)(w)),
      tail: ""
    });
    P = q.fromEnum(q.boundedEnumChar)(r.charAt(1)(w));
    var I = q.fromEnum(q.boundedEnumChar)(r.charAt(0)(w));
    return 55296 <= I && 56319 >= I && 56320 <= P && 57343 >= P ? new b.Just({
      head: B(I)(P),
      tail: e.drop(2)(w)
    }) : new b.Just({
      head: I,
      tail: e.drop(1)(w)
    });
  },
      u = function u(w) {
    return t.map(b.functorMaybe)(function (P) {
      return new v.Tuple(P.head, P.tail);
    })(z(w));
  },
      E = d._unsafeCodePointAt0(function (w) {
    var P = q.fromEnum(q.boundedEnumChar)(r.charAt(0)(w));
    return 55296 <= P && 56319 >= P && 1 < e.length(w) && (w = q.fromEnum(q.boundedEnumChar)(r.charAt(1)(w)), 56320 <= w && 57343 >= w) ? B(P)(w) : P;
  }),
      H = d._toCodePointArray(function (w) {
    return D.unfoldr(D.unfoldableArray)(u)(w);
  })(E),
      G = function () {
    var w = q.toEnumWithDefaults(q.boundedEnumChar)(m.bottom(m.boundedChar))(m.top(m.boundedChar));
    return function (P) {
      return e.singleton(w(P));
    };
  }(),
      J = d._singleton(function (w) {
    if (65535 >= w) return G(w);
    var P = p.div(p.euclideanRingInt)(w - 65536 | 0)(1024) + 55296 | 0;
    w = p.mod(p.euclideanRingInt)(w - 65536 | 0)(1024) + 56320 | 0;
    return G(P) + G(w);
  }),
      K = function K(w) {
    return function (P) {
      if (1 > w) return "";
      var I = z(P);
      return I instanceof b.Just ? J(I.value0.head) + K(w - 1 | 0)(I.value0.tail) : P;
    };
  };

  d._take(K);

  var N = new k.Eq(function (w) {
    return function (P) {
      return w === P;
    };
  }),
      S = new g.Ord(function () {
    return N;
  }, function (w) {
    return function (P) {
      return g.compare(g.ordInt)(w)(P);
    };
  }),
      V = function V(w) {
    return function (P) {
      for (var I = w, F = !1, A; !F;) {
        A = I;
        var Y = z(P);
        Y instanceof b.Just ? 0 === A ? (F = !0, A = new b.Just(Y.value0.head)) : (I = A - 1 | 0, P = Y.value0.tail, A = void 0) : (F = !0, A = b.Nothing.value);
      }

      return A;
    };
  },
      L = new m.Bounded(function () {
    return S;
  }, 0, 1114111);

  k = new q.BoundedEnum(function () {
    return L;
  }, function () {
    return M;
  }, 1114112, function (w) {
    return w;
  }, function (w) {
    if (0 <= w && 1114111 >= w) return new b.Just(w);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [w.constructor.name]);
  });
  var M = new q.Enum(function () {
    return S;
  }, q.defaultPred(q.toEnum(k))(q.fromEnum(k)), q.defaultSucc(q.toEnum(k))(q.fromEnum(k)));
  c.singleton = J;
  c.toCodePointArray = H;

  c.codePointAt = function (w) {
    return function (P) {
      return 0 > w || 0 === w && "" === P ? b.Nothing.value : 0 === w ? new b.Just(E(P)) : d._codePointAt(V)(b.Just.create)(b.Nothing.value)(E)(w)(P);
    };
  };

  c.length = function (w) {
    return h.length(H(w));
  };

  c.showCodePoint = a;
  c.boundedEnumCodePoint = k;
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var c = a["Data.String.NonEmpty.Internal"],
      d = a["Data.Maybe"];
  a = a["Data.Semigroup"].semigroupString;

  c.fromString = function (h) {
    return "" === h ? d.Nothing.value : new d.Just(h);
  };

  c.toString = function (h) {
    return h;
  };

  c.semigroupNonEmptyString = a;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  a["Data.String.Pattern"].Pattern = function (c) {
    return c;
  };
})(PS);

(function (a) {
  a.endsWith = function (c) {
    return function (d) {
      return d.endsWith(c);
    };
  };

  a.fromCharArray = function (c) {
    return c.join("");
  };

  a.startsWith = function (c) {
    return function (d) {
      return d.startsWith(c);
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
  a["Data.TraversableWithIndex"] = a["Data.TraversableWithIndex"] || {};

  var c = a["Data.TraversableWithIndex"],
      d = a["Data.FoldableWithIndex"],
      h = a["Data.FunctorWithIndex"],
      f = a["Data.Traversable"],
      m = function m(k) {
    return function (p) {
      return function (t) {
        var y = f.sequence(k.Traversable2())(p),
            b = h.mapWithIndex(k.FunctorWithIndex0())(t);
        return function (g) {
          return y(b(g));
        };
      };
    };
  },
      q = new function (k, p, t, y) {
    this.FoldableWithIndex1 = k;
    this.FunctorWithIndex0 = p;
    this.Traversable2 = t;
    this.traverseWithIndex = y;
  }(function () {
    return d.foldableWithIndexArray;
  }, function () {
    return h.functorWithIndexArray;
  }, function () {
    return f.traversableArray;
  }, function (k) {
    return m(q)(k);
  });

  c.traverseWithIndex = function (k) {
    return k.traverseWithIndex;
  };

  c.traversableWithIndexArray = q;
})(PS);

(function (a) {
  var c = null;

  a.getUUIDImpl = function () {
    null === c && (c = require("uuid/v4"));
    return c();
  };
})(PS["Data.UUID"] = PS["Data.UUID"] || {});

(function (a) {
  a["Data.UUID"] = a["Data.UUID"] || {};
  var c = a["Data.UUID"],
      d = a["Data.UUID"],
      h = a["Control.Applicative"],
      f = a.Effect;
  a = a["Control.Bind"].bind(f.bindEffect)(d.getUUIDImpl)(function () {
    var m = h.pure(f.applicativeEffect);
    return function (q) {
      return m(q);
    };
  }());
  c.emptyUUID = "00000000-0000-0000-0000-000000000000";
  c.genUUID = a;

  c.toString = function (m) {
    return m;
  };
})(PS);

(function (a) {
  a["Data.Void"] = a["Data.Void"] || {};

  a["Data.Void"].absurd = function (c) {
    for (;;) {
      ;
    }
  };
})(PS);

(function (a) {
  a["Data.XPath"] = a["Data.XPath"] || {};
  var c = a["Data.XPath"],
      d = a["Data.Semigroup"],
      h = new function (f, m, q, k, p, t) {
    this.Semigroup0 = f;
    this.at = m;
    this.pathAppend = q;
    this.pathAppendNSx = k;
    this.root = p;
    this.xx = t;
  }(function () {
    return d.semigroupString;
  }, function (f) {
    return "@" + f;
  }, function (f) {
    return function (m) {
      return f === h.root ? h.root + m : f + ("/" + m);
    };
  }, function (f) {
    return function (m) {
      return f === h.root ? h.root + ("x:" + m) : f + ("/x:" + m);
    };
  }, "/", function (f) {
    return "x:" + f;
  });

  c.pathAppend = function (f) {
    return f.pathAppend;
  };

  c.pathAppendNSx = function (f) {
    return f.pathAppendNSx;
  };

  c.at = function (f) {
    return f.at;
  };

  c.xx = function (f) {
    return f.xx;
  };

  c.root = function (f) {
    return f.root;
  };

  c.stringXPath = h;
})(PS);

(function (a) {
  a.tryPrettyJson = function (c) {
    var d = c;
    return function () {
      if (void 0 === c) return null;
      var h = JSON.stringify(JSON.parse(c), void 0, 2);
      return d = void 0 === h || null === h ? c : h;
    };
  };

  a.preParse = function (c) {
    c = JSON.parse(c);
    c.data.attributes.xml = void 0;
    c = JSON.stringify(c);
    return void 0 === c || null === c ? "" : c;
  };
})(PS["DataCite.JSON.Util"] = PS["DataCite.JSON.Util"] || {});

(function (a) {
  a["DataCite.JSON.Util"] = a["DataCite.JSON.Util"] || {};
  var c = a["DataCite.JSON.Util"];
  a = a["DataCite.JSON.Util"];
  c.tryPrettyJson = a.tryPrettyJson;
  c.preParse = a.preParse;
})(PS);

(function (a) {
  a._parseJSON = JSON.parse;
})(PS["Simple.JSON"] = PS["Simple.JSON"] || {});

(function (a) {
  a.unsafePerformEffect = function (c) {
    return c();
  };
})(PS["Effect.Unsafe"] = PS["Effect.Unsafe"] || {});

(function (a) {
  a["Effect.Unsafe"] = a["Effect.Unsafe"] || {};
  a["Effect.Unsafe"].unsafePerformEffect = a["Effect.Unsafe"].unsafePerformEffect;
})(PS);

(function (a) {
  a.unsafeReadPropImpl = function (c, d, h, f) {
    return null == f ? c : d(f[h]);
  };
})(PS["Foreign.Index"] = PS["Foreign.Index"] || {});

(function (a) {
  a["Foreign.Index"] = a["Foreign.Index"] || {};
  var c = a["Foreign.Index"],
      d = a["Control.Applicative"],
      h = a["Control.Monad.Except.Trans"],
      f = a["Data.Identity"],
      m = a.Foreign;

  a["Foreign.Index"].readProp = function (q) {
    return function (k) {
      return c.unsafeReadPropImpl(m.fail(new m.TypeMismatch("object", m.typeOf(k))), d.pure(h.applicativeExceptT(f.monadIdentity)), q, k);
    };
  };
})(PS);

(function (a) {
  a.copyRecord = function (c) {
    var d = {},
        h;

    for (h in c) {
      ({}).hasOwnProperty.call(c, h) && (d[h] = c[h]);
    }

    return d;
  };

  a.unsafeInsert = function (c) {
    return function (d) {
      return function (h) {
        h[c] = d;
        return h;
      };
    };
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});

(function (a) {
  a["Record.Builder"] = a["Record.Builder"] || {};
  var c = a["Record.Builder"],
      d = a["Record.Builder"],
      h = a["Data.Symbol"],
      f = a["Control.Semigroupoid"].semigroupoidFn;
  a = a["Control.Category"].categoryFn;

  c.build = function (m) {
    return function (q) {
      return m(d.copyRecord(q));
    };
  };

  c.insert = function (m) {
    return function (q) {
      return function (k) {
        return function (p) {
          return function (t) {
            return function (y) {
              return d.unsafeInsert(h.reflectSymbol(k)(p))(t)(y);
            };
          };
        };
      };
    };
  };

  c.semigroupoidBuilder = f;
  c.categoryBuilder = a;
})(PS);

(function (a) {
  a["Type.Data.RowList"] = a["Type.Data.RowList"] || {};
  a = a["Type.Data.RowList"];

  var c = function () {
    function d() {}

    d.value = new d();
    return d;
  }();

  a.RLProxy = c;
})(PS);

(function (a) {
  a["Simple.JSON"] = a["Simple.JSON"] || {};

  var c = a["Simple.JSON"],
      d = a["Simple.JSON"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Control.Category"],
      k = a["Control.Monad.Except"],
      p = a["Control.Monad.Except.Trans"],
      t = a["Control.Semigroupoid"],
      y = a["Data.Bifunctor"],
      b = a["Data.Either"],
      g = a["Data.Function"],
      e = a["Data.Functor"],
      l = a["Data.Identity"],
      r = a["Data.List.Types"],
      v = a["Data.Maybe"],
      D = a["Data.Semigroup"],
      B = a["Data.Symbol"],
      z = a["Data.TraversableWithIndex"],
      u = a["Effect.Exception"],
      E = a["Effect.Uncurried"],
      H = a["Effect.Unsafe"],
      G = a.Foreign,
      J = a["Foreign.Index"],
      K = a["Record.Builder"],
      N = a["Type.Data.RowList"],
      S = function S(F) {
    this.getFields = F;
  },
      V = function V(F) {
    this.readImpl = F;
  };

  a = new V(G.readString);

  var L = new V(h.pure(p.applicativeExceptT(l.monadIdentity))),
      M = new S(function (F) {
    return function (A) {
      return h.pure(p.applicativeExceptT(l.monadIdentity))(q.identity(K.categoryBuilder));
    };
  }),
      w = function () {
    var F = y.lmap(b.bifunctorEither)(function () {
      var Y = h.pure(r.applicativeNonEmptyList);
      return function (ra) {
        return Y(G.ForeignError.create(u.message(ra)));
      };
    }()),
        A = E.runEffectFn1(d._parseJSON);
    return function (Y) {
      return p.ExceptT(l.Identity(F(H.unsafePerformEffect(u["try"](A(Y))))));
    };
  }(),
      P = function P(F) {
    return function (A) {
      return function (Y) {
        if (A instanceof b.Left && Y instanceof b.Right) return new b.Left(A.value0);
        if (A instanceof b.Left && Y instanceof b.Left) return new b.Left(D.append(F)(A.value0)(Y.value0));
        if (A instanceof b.Right && Y instanceof b.Left) return new b.Left(Y.value0);
        if (A instanceof b.Right && Y instanceof b.Right) return new b.Right(A.value0(Y.value0));
        throw Error("Failed pattern match at Simple.JSON (line 234, column 1 - line 234, column 90): " + [A.constructor.name, Y.constructor.name]);
      };
    };
  },
      I = function I(F) {
    return function (A) {
      return function (Y) {
        return function (ra) {
          return p.ExceptT(f.apply(A.Apply0())(e.map(A.Apply0().Functor0())(P(F))(p.runExceptT(Y)))(p.runExceptT(ra)));
        };
      };
    };
  };

  c["readJSON'"] = function (F) {
    return m.composeKleisliFlipped(p.bindExceptT(l.monadIdentity))(F.readImpl)(w);
  };

  c["read'"] = function (F) {
    return F.readImpl;
  };

  c.ReadForeign = V;

  c.readImpl = function (F) {
    return F.readImpl;
  };

  c.readForeign = L;
  c.readString = a;

  c.readArray = function (F) {
    return new V(function () {
      return m.composeKleisliFlipped(p.bindExceptT(l.monadIdentity))(z.traverseWithIndex(z.traversableWithIndexArray)(p.applicativeExceptT(l.monadIdentity))(function (A) {
        return function (Y) {
          return k.withExcept(e.map(r.functorNonEmptyList)(G.ErrorAtIndex.create(A)))((0, F.readImpl)(Y));
        };
      }))(G.readArray);
    }());
  };

  c.readMaybe = function (F) {
    return new V(function () {
      return function (A) {
        return function (Y) {
          return G.isNull(Y) || G.isUndefined(Y) ? h.pure(p.applicativeExceptT(l.monadIdentity))(v.Nothing.value) : e.map(p.functorExceptT(l.functorIdentity))(v.Just.create)(A(Y));
        };
      }(F.readImpl);
    }());
  };

  c.readRecord = function (F) {
    return function (A) {
      return new V(function (Y) {
        return e.map(p.functorExceptT(l.functorIdentity))(g.flip(K.build)({}))((0, A.getFields)(N.RLProxy.value)(Y));
      });
    };
  };

  c.readFieldsCons = function (F) {
    return function (A) {
      return function (Y) {
        return function (ra) {
          return function (Ba) {
            return new S(function (Ca) {
              return function (za) {
                var x = (0, Y.getFields)(N.RLProxy.value)(za),
                    ka = B.reflectSymbol(F)(B.SProxy.value),
                    pa = k.withExcept(e.map(r.functorNonEmptyList)(G.ErrorAtProperty.create(ka)));
                za = m.bind(p.bindExceptT(l.monadIdentity))(pa(m.bindFlipped(p.bindExceptT(l.monadIdentity))(A.readImpl)(J.readProp(ka)(za))))(function (R) {
                  return h.pure(p.applicativeExceptT(l.monadIdentity))(K.insert()()(F)(B.SProxy.value)(R));
                });
                return I(r.semigroupNonEmptyList)(l.applicativeIdentity)(e.map(p.functorExceptT(l.functorIdentity))(t.compose(K.semigroupoidBuilder))(za))(x);
              };
            });
          };
        };
      };
    };
  };

  c.readFieldsNil = M;
})(PS);

(function (a) {
  a["DataCite.Types.Common"] = a["DataCite.Types.Common"] || {};

  var c = a["DataCite.Types.Common"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Bind"],
      m = a["Control.Monad.Error.Class"],
      q = a["Control.Monad.Except.Trans"],
      k = a["Data.Bounded"],
      p = a["Data.Enum"],
      t = a["Data.Eq"],
      y = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      g = a["Data.Generic.Rep.Bounded"],
      e = a["Data.Generic.Rep.Enum"],
      l = a["Data.Generic.Rep.Eq"],
      r = a["Data.Generic.Rep.Ord"],
      v = a["Data.Generic.Rep.Show"],
      D = a["Data.Identity"],
      B = a["Data.List.Types"],
      z = a["Data.Ord"],
      u = a["Data.Show"],
      E = a["Data.Symbol"],
      H = a.Foreign,
      G = a["Simple.JSON"],
      J = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      K = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      N = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      S = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      V = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      L = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      M = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      w = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      P = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      I = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      F = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      A = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Y = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ra = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ba = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ca = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      za = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      x = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ka = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      pa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      R = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ha = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Fa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      sa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ya = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ua = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Aa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ia = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ea = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ma = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      da = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      O = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Z = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      xa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ga = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      X = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Oa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Q = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ba = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      aa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      la = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      fa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ia = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      va = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      wa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      C = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      oa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ka = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ha = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Pa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ta = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      bb = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      cb = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      hb = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ib = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      db = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      eb = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      nb = function nb(n) {
    this.enumReadForeignImpl = n;
  },
      Wa = new b.Generic(function (n) {
    if (n instanceof J) return new b.Inl(b.NoArguments.value);
    if (n instanceof K) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (n instanceof N) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (n instanceof S) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (n instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (n instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (n instanceof M) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (n instanceof w) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (n instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (n instanceof I) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (n instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (n instanceof A) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (n instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (n instanceof ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [n.constructor.name]);
  }, function (n) {
    if (n instanceof b.Inl) return J.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inl) return K.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inl) return N.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inl) return S.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inl) return L.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return M.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return w.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return I.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return A.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Y.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ra.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [n.constructor.name]);
  }),
      ob = new u.Show(v.genericShow(Wa)(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Audiovisual";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Dataset";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Event";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Image";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "InteractiveResource";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Model";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "PhysicalObject";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "ResourceCollection";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Service";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Software";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Sound";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Text";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Workflow";
  })))(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      $a = new b.Generic(function (n) {
    if (n instanceof Ba) return new b.Inl(b.NoArguments.value);
    if (n instanceof Ca) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (n instanceof za) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (n instanceof x) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (n instanceof ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (n instanceof pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (n instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (n instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (n instanceof Fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (n instanceof sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (n instanceof ya) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (n instanceof ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (n instanceof Aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (n instanceof Ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (n instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (n instanceof ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (n instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (n instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (n instanceof Z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (n instanceof xa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (n instanceof Ga) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (n instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (n instanceof Oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (n instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (n instanceof ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [n.constructor.name]);
  }, function (n) {
    if (n instanceof b.Inl) return Ba.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inl) return Ca.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inl) return za.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inl) return x.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inl) return ka.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inl) return pa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Fa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return sa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ya.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ua.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Aa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ia.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ma.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Z.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return xa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ga.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return X.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Oa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ba.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [n.constructor.name]);
  }),
      vb = new u.Show(v.genericShow($a)(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsCitedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Cites";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsSupplementTo";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsContinuedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Continues";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsPartOf";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "HasPart";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsReferencedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "References";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Documents";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsCompiledBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Compiles";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "HasMetadata";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsMetadataFor";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Reviews";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsReviewedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      La = new b.Generic(function (n) {
    if (n instanceof aa) return new b.Inl(b.NoArguments.value);
    if (n instanceof la) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (n instanceof fa) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (n instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (n instanceof va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (n instanceof wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (n instanceof C) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (n instanceof oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (n instanceof Ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (n instanceof Ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (n instanceof Pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (n instanceof Ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (n instanceof bb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (n instanceof cb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (n instanceof hb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (n instanceof ib) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (n instanceof db) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (n instanceof eb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [n.constructor.name]);
  }, function (n) {
    if (n instanceof b.Inl) return aa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inl) return la.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inl) return fa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inl) return va.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inl) return wa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return C.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return oa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ka.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ha.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Pa.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ta.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return bb.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return cb.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return hb.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ib.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return db.value;
    if (n instanceof b.Inr && n.value0 instanceof b.Inr && n.value0.value0 instanceof b.Inr && n.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return eb.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [n.constructor.name]);
  }),
      wb = new u.Show(function (n) {
    return n instanceof la ? "arXiv" : n instanceof fa ? "bibcode" : v.genericShow(La)(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "ARK";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "ArXiv";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "Bibcode";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "DOI";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "EAN13";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "EISSN";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "Handle";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "IGSN";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "ISBN";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "ISSN";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "ISTC";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "LISSN";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "LSID";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "PMID";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "PURL";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "UPC";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "URL";
    })))(v.genericShowConstructor(v.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(n);
  }),
      xb = new t.Eq(l.genericEq(Wa)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))),
      pb = new z.Ord(function () {
    return xb;
  }, function (n) {
    return function (Xa) {
      return r.genericCompare(Wa)(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdConstructor(r.genericOrdNoArguments)))))))))))))))(n)(Xa);
    };
  }),
      yb = new t.Eq(l.genericEq($a)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments))))))))))))))))))))))))))),
      qb = new z.Ord(function () {
    return yb;
  }, function (n) {
    return function (Xa) {
      return r.genericCompare($a)(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdConstructor(r.genericOrdNoArguments))))))))))))))))))))))))))(n)(Xa);
    };
  }),
      zb = new t.Eq(l.genericEq(La)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))))))),
      Ya = new z.Ord(function () {
    return zb;
  }, function (n) {
    return function (Xa) {
      return r.genericCompare(La)(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdConstructor(r.genericOrdNoArguments)))))))))))))))))))(n)(Xa);
    };
  }),
      rb = new p.Enum(function () {
    return pb;
  }, e.genericPred(Wa)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments)))), e.genericSucc(Wa)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))),
      Ab = new p.Enum(function () {
    return qb;
  }, e.genericPred($a)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments)))), e.genericSucc($a)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))),
      Qa = function Qa(n) {
    return function (Xa) {
      return new nb(function (fb) {
        return d.alt(q.altExceptT(B.semigroupNonEmptyList)(D.monadIdentity))(y.map(q.functorExceptT(D.functorIdentity))(b.Inl.create)((0, n.enumReadForeignImpl)(fb)))(y.map(q.functorExceptT(D.functorIdentity))(b.Inr.create)((0, Xa.enumReadForeignImpl)(fb)));
      });
    };
  },
      sb = new p.Enum(function () {
    return Ya;
  }, e.genericPred(La)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments)))), e.genericSucc(La)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))),
      Ma = function Ma(n) {
    return new nb(function (Xa) {
      var fb = E.reflectSymbol(n)(E.SProxy.value);
      return f.bind(q.bindExceptT(D.monadIdentity))(G.readImpl(G.readString)(Xa))(function (Bb) {
        return Bb === fb ? h.pure(q.applicativeExceptT(D.monadIdentity))(b.NoArguments.value) : m.throwError(q.monadThrowExceptT(D.monadIdentity))(h.pure(B.applicativeNonEmptyList)(H.ForeignError.create("Enum string " + (Bb + (" did not match expected string " + fb)))));
      });
    });
  },
      gb = new G.ReadForeign(function (n) {
    return function (Xa) {
      return function (fb) {
        return y.map(q.functorExceptT(D.functorIdentity))(b.to(n))((0, Xa.enumReadForeignImpl)(fb));
      };
    };
  }(La)(Qa(Ma(new E.IsSymbol(function () {
    return "ARK";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "ArXiv";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "Bibcode";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "DOI";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "EAN13";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "EISSN";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "Handle";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "IGSN";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "ISBN";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "ISSN";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "ISTC";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "LISSN";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "LSID";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "PMID";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "PURL";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "UPC";
  })))(Qa(Ma(new E.IsSymbol(function () {
    return "URL";
  })))(Ma(new E.IsSymbol(function () {
    return "URN";
  }))))))))))))))))))))),
      jb = new k.Bounded(function () {
    return pb;
  }, g.genericBottom(Wa)(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))), g.genericTop(Wa)(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopConstructor(g.genericTopNoArguments)))))))))))))))),
      Cb = new k.Bounded(function () {
    return qb;
  }, g.genericBottom($a)(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))), g.genericTop($a)(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopConstructor(g.genericTopNoArguments))))))))))))))))))))))))))),
      tb = new k.Bounded(function () {
    return Ya;
  }, g.genericBottom(La)(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))), g.genericTop(La)(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopConstructor(g.genericTopNoArguments)))))))))))))))))))),
      Db = new p.BoundedEnum(function () {
    return jb;
  }, function () {
    return rb;
  }, e.genericCardinality(Wa)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))), e.genericFromEnum(Wa)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))), e.genericToEnum(Wa)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments)))))))))))))))),
      lb = new p.BoundedEnum(function () {
    return Cb;
  }, function () {
    return Ab;
  }, e.genericCardinality($a)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments)))))))))))))))))))))))))), e.genericFromEnum($a)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments)))))))))))))))))))))))))), e.genericToEnum($a)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      ub = new p.BoundedEnum(function () {
    return tb;
  }, function () {
    return sb;
  }, e.genericCardinality(La)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))), e.genericFromEnum(La)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))), e.genericToEnum(La)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))));

  c.ARK = aa;
  c.ArXiv = la;
  c.Bibcode = fa;
  c.DOI = ia;
  c.EAN13 = va;
  c.EISSN = wa;
  c.Handle = C;
  c.IGSN = oa;
  c.ISBN = Ka;
  c.ISSN = Ha;
  c.ISTC = Pa;
  c.LISSN = Ta;
  c.LSID = bb;
  c.PMID = cb;
  c.PURL = hb;
  c.UPC = ib;
  c.URL = db;
  c.URN = eb;
  c.IsCitedBy = Ba;
  c.Cites = Ca;
  c.IsSupplementTo = za;
  c.IsSupplementedBy = x;
  c.IsContinuedBy = ka;
  c.Continues = pa;
  c.IsNewVersionOf = R;
  c.IsPreviousVersionOf = ha;
  c.IsPartOf = Fa;
  c.HasPart = sa;
  c.IsReferencedBy = ya;
  c.References = ua;
  c.IsDocumentedBy = Aa;
  c.Documents = Ia;
  c.IsCompiledBy = ea;
  c.Compiles = ma;
  c.IsVariantFormOf = da;
  c.IsOriginalFormOf = O;
  c.IsIdenticalTo = Z;
  c.HasMetadata = xa;
  c.IsMetadataFor = Ga;
  c.Reviews = X;
  c.IsReviewedBy = Oa;
  c.IsDerivedFrom = Q;
  c.IsSourceOf = ba;
  c.Audiovisual = J;
  c.Dataset = K;
  c.Event = N;
  c.Image = S;
  c.InteractiveResource = V;
  c.Model = L;
  c.PhysicalObject = M;
  c.ResourceCollection = w;
  c.Service = P;
  c.Software = I;
  c.Sound = F;
  c.Text = A;
  c.Workflow = Y;
  c.Other = ra;

  c.altIdToId = function (n) {
    return {
      identifier: n.alternateIdentifier,
      identifierType: n.alternateIdentifierType
    };
  };

  c.showIdentifierType = wb;
  c.boundedEnumIdentifierType = ub;
  c.identifierTypeReadForeign = gb;
  c.showRelationType = vb;
  c.boundedEnumRelationType = lb;
  c.showResourceTypeGeneral = ob;
  c.boundedEnumResourceTypeGeneral = Db;
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var c = function () {
    function d() {}

    d.value = new d();
    return d;
  }();

  a.RProxy = c;
})(PS);

(function (a) {
  a["DataCite.JSON.Decode.Simple"] = a["DataCite.JSON.Decode.Simple"] || {};
  var c = a["DataCite.JSON.Decode.Simple"],
      d = a["Control.Applicative"],
      h = a["Control.Bind"],
      f = a["Control.Monad"],
      m = a["Control.Monad.Error.Class"],
      q = a["Control.Monad.Except"],
      k = a["Control.Monad.Except.Trans"],
      p = a["Control.Monad.Writer"],
      t = a["Control.Monad.Writer.Class"],
      y = a["Control.Monad.Writer.Trans"],
      b = a["Control.Plus"],
      g = a["Data.Array.NonEmpty"],
      e = a["Data.Array.NonEmpty.Internal"],
      l = a["Data.Either"],
      r = a["Data.Either.Extra"],
      v = a["Data.Foldable"],
      D = a["Data.Functor"],
      B = a["Data.Identity"],
      z = a["Data.Lazy"],
      u = a["Data.List.NonEmpty"],
      E = a["Data.List.Types"],
      H = a["Data.Maybe"],
      G = a["Data.Monoid"],
      J = a["Data.Newtype"],
      K = a["Data.String.NonEmpty.Internal"],
      N = a["Data.Symbol"],
      S = a["Data.Traversable"],
      V = a["Data.Tuple"],
      L = a["Data.Unfoldable"],
      M = a["DataCite.JSON.Util"],
      w = a["DataCite.Types.Common"],
      P = a.Foreign,
      I = a["Foreign.Index"],
      F = a["Simple.JSON"];
  a = a["Type.Data.Row"];

  var A = new J.Newtype(function (aa) {
    return aa;
  }, function (aa) {
    return aa;
  }),
      Y = new J.Newtype(function (aa) {
    return aa;
  }, function (aa) {
    return aa;
  }),
      ra = y.monadTellWriterT(G.monoidArray)(B.monadIdentity),
      Ba = y.monadWriterT(G.monoidArray)(B.monadIdentity),
      Ca = k.monadThrowExceptT(Ba),
      za = k.monadTellExceptT(ra),
      x = k.bindExceptT(Ba),
      ka = k.applicativeExceptT(Ba),
      pa = function pa(aa) {
    return function (la) {
      var fa = p.runWriter(J.unwrap(A)(k.runExceptT(J.unwrap(Y)(la))));
      if (fa.value0 instanceof l.Left) return h.discard(h.discardUnit)(x)(t.tell(za)(u.toUnfoldable(L.unfoldableArray)(fa.value0.value0)))(function () {
        return d.pure(ka)(aa);
      });
      if (fa.value0 instanceof l.Right) return la;
      throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 70, column 28 - line 74, column 24): " + [fa.value0.constructor.name]);
    };
  },
      R = function R(aa) {
    return P.isNull(aa) || P.isUndefined(aa);
  },
      ha = function ha(aa) {
    var la = d.pure(aa.Applicative0()),
        fa = J.unwrap(B.newtypeIdentity);
    return function (ia) {
      return la(fa(ia));
    };
  },
      Fa = function Fa(aa) {
    var la = ha(aa),
        fa = J.unwrap(k.newtypeExceptT);
    return function (ia) {
      return k.ExceptT(la(fa(ia)));
    };
  },
      sa = function sa(aa) {
    var la = Fa(Ba),
        fa = F["read'"](aa);
    return function (ia) {
      return la(fa(ia));
    };
  },
      ya = function ya(aa) {
    return pa("")(sa(F.readString)(aa));
  },
      ua = function ua(aa) {
    return function (la) {
      return h.bind(x)(ya(la))(function (fa) {
        fa = K.fromString(fa);
        if (fa instanceof H.Just) return d.pure(ka)(fa.value0);
        if (fa instanceof H.Nothing) return m.throwError(Ca)(d.pure(E.applicativeNonEmptyList)(P.ForeignError.create("Nonempty string expected in:\n" + z.force(aa))));
        throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 194, column 3 - line 197, column 55): " + [fa.constructor.name]);
      });
    };
  },
      Aa = function Aa(aa) {
    return function (la) {
      return h.bind(x)(ua(aa)(la.alternateIdentifier))(function (fa) {
        var ia = sa(w.identifierTypeReadForeign)(la.alternateIdentifierType);
        return h.bind(x)(pa(w.Handle.value)(ia))(function (va) {
          return d.pure(ka)(w.altIdToId({
            alternateIdentifier: fa,
            alternateIdentifierType: va
          }));
        });
      });
    };
  },
      Ia = function Ia(aa) {
    return function (la) {
      return function (fa) {
        return Aa(la)(fa);
      };
    };
  },
      ea = function ea(aa) {
    return function (la) {
      return h.bind(x)(ua(aa)(la.identifier))(function (fa) {
        var ia = sa(w.identifierTypeReadForeign)(la.identifierType);
        return h.bind(x)(pa(w.Handle.value)(ia))(function (va) {
          return d.pure(ka)({
            identifier: fa,
            identifierType: va
          });
        });
      });
    };
  },
      ma = function ma(aa) {
    return function (la) {
      return function (fa) {
        return ea(la)(fa);
      };
    };
  },
      da = function () {
    var aa = Fa(Ba);
    return function (la) {
      return aa(P.readArray(la));
    };
  }(),
      O = function O(aa) {
    return function (la) {
      return function (fa) {
        return h.bind(x)(da(fa))(function (ia) {
          var va = D.map(D.functorArray)(function () {
            var wa = F["read'"](aa);
            return function (C) {
              return q.runExcept(wa(C));
            };
          }())(ia);
          return h.discard(h.discardUnit)(x)(v.traverse_(ka)(v.foldableArray)(t.tell(za))(D.map(D.functorArray)(u.toUnfoldable(L.unfoldableArray))(r.catLefts(f.monadArray)(b.plusArray)(va))))(function () {
            var wa = r.catRights(f.monadArray)(b.plusArray)(va);
            wa = g.fromArray(wa);
            if (wa instanceof H.Just) return d.pure(ka)(wa.value0);
            if (wa instanceof H.Nothing) return m.throwError(Ca)(d.pure(E.applicativeNonEmptyList)(P.ForeignError.create("Nonempty array expected in:\n" + z.force(la))));
            throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 206, column 3 - line 209, column 54): " + [wa.constructor.name]);
          });
        });
      };
    };
  },
      Z = function Z(aa) {
    return function (la) {
      return function (fa) {
        return h.bind(x)(da(fa))(function (ia) {
          ia = D.map(D.functorArray)(function () {
            var C = J.unwrap(A),
                oa = J.unwrap(Y),
                Ka = la(aa);
            return function (Ha) {
              return p.runWriter(C(k.runExceptT(oa(Ka(Ha)))));
            };
          }())(ia);
          var va = D.map(D.functorArray)(V.fst)(ia),
              wa = D.map(D.functorArray)(V.snd)(ia);
          return h.discard(h.discardUnit)(x)(v.traverse_(ka)(v.foldableArray)(t.tell(za))(D.map(D.functorArray)(u.toUnfoldable(L.unfoldableArray))(r.catLefts(f.monadArray)(b.plusArray)(va))))(function () {
            return h.discard(h.discardUnit)(x)(v.traverse_(ka)(v.foldableArray)(t.tell(za))(wa))(function () {
              var C = r.catRights(f.monadArray)(b.plusArray)(va);
              C = g.fromArray(C);
              if (C instanceof H.Just) return d.pure(ka)(C.value0);
              if (C instanceof H.Nothing) return m.throwError(Ca)(d.pure(E.applicativeNonEmptyList)(P.ForeignError.create("Nonempty array expected in:\n" + z.force(aa))));
              throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 224, column 3 - line 227, column 54): " + [C.constructor.name]);
            });
          });
        });
      };
    };
  },
      xa = function xa(aa) {
    var la = Fa(Ba),
        fa = F["readJSON'"](aa);
    return function (ia) {
      return la(fa(ia));
    };
  },
      Ga = function Ga(aa) {
    return function (la) {
      return Fa(Ba)(I.readProp(aa)(la));
    };
  },
      X = function X(aa) {
    return function (la) {
      return h.bind(x)(Ga("title")(la))(function (fa) {
        return h.bind(x)(ua(aa)(fa))(function (ia) {
          return d.pure(ka)({
            title: ia
          });
        });
      });
    };
  },
      Oa = a.RProxy.value,
      Q = function Q(aa) {
    return function (la) {
      return z.defer(function (fa) {
        return "Couldn't read for " + (la + (" in: \n" + z.force(aa)));
      });
    };
  },
      ba = function ba(aa) {
    var la = M.tryPrettyJson(aa),
        fa = Q(la),
        ia = function ia(wa) {
      return R(wa.type) && R(wa.identifier) && R(wa.identifierType) ? d.pure(ka)(H.Nothing.value) : h.bind(x)(sa(F.readString)(wa.type))(function (C) {
        var oa = K.fromString(C);
        return h.bind(x)(ea(fa("container"))(wa))(function (Ka) {
          return d.pure(ka)(H.Just.create({
            type: oa,
            identifier: Ka.identifier,
            identifierType: Ka.identifierType
          }));
        });
      });
    },
        va = function va(wa) {
      return S.traverse(e.traversableNonEmptyArray)(ka)(function (C) {
        return h.bind(x)(ua(fa("Creator name"))(C.name))(function (oa) {
          return h.bind(x)(S.traverse(S.traversableArray)(ka)(ua(fa("Creator affiliations")))(C.affiliation))(function (Ka) {
            return d.pure(ka)({
              name: oa,
              nameType: h.bind(H.bindMaybe)(C.nameType)(K.fromString),
              givenName: h.bind(H.bindMaybe)(C.givenName)(K.fromString),
              familyName: h.bind(H.bindMaybe)(C.familyName)(K.fromString),
              affiliation: Ka
            });
          });
        });
      })(wa);
    };

    return h.bind(x)(xa(F.readRecord()(F.readFieldsCons(new N.IsSymbol(function () {
      return "data";
    }))(F.readRecord()(F.readFieldsCons(new N.IsSymbol(function () {
      return "attributes";
    }))(F.readRecord()(F.readFieldsCons(new N.IsSymbol(function () {
      return "alternateIdentifiers";
    }))(F.readArray(F.readRecord()(F.readFieldsCons(new N.IsSymbol(function () {
      return "alternateIdentifier";
    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
      return "alternateIdentifierType";
    }))(F.readForeign)(F.readFieldsNil)()())()())))(F.readFieldsCons(new N.IsSymbol(function () {
      return "container";
    }))(F.readRecord()(F.readFieldsCons(new N.IsSymbol(function () {
      return "identifier";
    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
      return "identifierType";
    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
      return "type";
    }))(F.readForeign)(F.readFieldsNil)()())()())()()))(F.readFieldsCons(new N.IsSymbol(function () {
      return "creators";
    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
      return "doi";
    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
      return "identifiers";
    }))(F.readArray(F.readRecord()(F.readFieldsCons(new N.IsSymbol(function () {
      return "identifier";
    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
      return "identifierType";
    }))(F.readForeign)(F.readFieldsNil)()())()())))(F.readFieldsCons(new N.IsSymbol(function () {
      return "prefix";
    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
      return "publisher";
    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
      return "suffix";
    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
      return "titles";
    }))(F.readForeign)(F.readFieldsNil)()())()())()())()())()())()())()())()())()()))(F.readFieldsCons(new N.IsSymbol(function () {
      return "id";
    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
      return "relationships";
    }))(F.readRecord()(F.readFieldsNil))(F.readFieldsCons(new N.IsSymbol(function () {
      return "type";
    }))(F.readForeign)(F.readFieldsNil)()())()())()())()()))(F.readFieldsNil)()()))(aa))(function (wa) {
      return h.bind(x)(ua(fa("data.id"))(wa.data.id))(function (C) {
        return h.bind(x)(ua(fa("data.type"))(wa.data.type))(function (oa) {
          return h.bind(x)(ua(fa("data.attributes.doi"))(wa.data.attributes.doi))(function (Ka) {
            return h.bind(x)(ua(fa("data.attributes.prefix"))(wa.data.attributes.prefix))(function (Ha) {
              return h.bind(x)(ua(fa("data.attributes.suffix"))(wa.data.attributes.suffix))(function (Pa) {
                return h.bind(x)(S.traverse(S.traversableArray)(ka)(ma(Oa)(fa("data.attributes.identifiers")))(wa.data.attributes.identifiers))(function (Ta) {
                  return h.bind(x)(S.traverse(S.traversableArray)(ka)(Ia(Oa)(fa("data.attributes.alternateIdentifiers")))(wa.data.attributes.alternateIdentifiers))(function (bb) {
                    return h.bind(x)(O(F.readRecord()(F.readFieldsCons(new N.IsSymbol(function () {
                      return "affiliation";
                    }))(F.readArray(F.readForeign))(F.readFieldsCons(new N.IsSymbol(function () {
                      return "familyName";
                    }))(F.readMaybe(F.readString))(F.readFieldsCons(new N.IsSymbol(function () {
                      return "givenName";
                    }))(F.readMaybe(F.readString))(F.readFieldsCons(new N.IsSymbol(function () {
                      return "name";
                    }))(F.readForeign)(F.readFieldsCons(new N.IsSymbol(function () {
                      return "nameType";
                    }))(F.readMaybe(F.readString))(F.readFieldsNil)()())()())()())()())()()))(fa("data.attributes.creators"))(wa.data.attributes.creators))(function (cb) {
                      return h.bind(x)(va(cb))(function (hb) {
                        return h.bind(x)(Z(fa("data.attributes.titles"))(X)(wa.data.attributes.titles))(function (ib) {
                          return h.bind(x)(ua(fa("data.attributes.publisher"))(wa.data.attributes.publisher))(function (db) {
                            return h.bind(x)(ia(wa.data.attributes.container))(function (eb) {
                              return d.pure(ka)({
                                data: {
                                  id: C,
                                  type: oa,
                                  attributes: {
                                    doi: Ka,
                                    prefix: Ha,
                                    suffix: Pa,
                                    identifiers: Ta,
                                    alternateIdentifiers: bb,
                                    creators: hb,
                                    titles: ib,
                                    publisher: db,
                                    container: eb
                                  },
                                  relationships: wa.data.relationships
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
  };

  c.readRecordJSON = function (aa) {
    return k.runExceptT(J.unwrap(Y)(ba(M.preParse(aa))));
  };

  c.newtypeJSONWithErr = A;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var c = a["Effect.Class"],
      d = a["Effect.Console"];

  a["Effect.Class.Console"].log = function (h) {
    var f = c.liftEffect(h);
    return function (m) {
      return f(d.log(m));
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
      d = a["Effect.Now"],
      h = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(h.toDateTime)(d.now);
  c.nowDateTime = a;
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
  var c = a["Concur.React.Props"],
      d = a["Data.Functor"],
      h = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (f) {
    return c.classList(d.map(d.functorArray)(h.Just.create)(f));
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassNamesPrivate"] = a["Metajelo.CSS.UI.ClassNamesPrivate"] || {};
  a = a["Metajelo.CSS.UI.ClassNamesPrivate"];
  a.page = "page";
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
  var c = a["Metajelo.CSS.UI.Util"],
      d = a["Concur.React.Props"];
  c.mjUiClassPfx = "metajelo-ui_";

  c.mjUiClass = function (h) {
    return d.className("metajelo-ui_" + h);
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassProps"] = a["Metajelo.CSS.UI.ClassProps"] || {};
  var c = a["Metajelo.CSS.UI.ClassProps"],
      d = a["Metajelo.CSS.Common.ClassNames"],
      h = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      f = a["Metajelo.CSS.UI.Util"],
      m = f.mjUiClass(d.versioningHeader),
      q = f.mjUiClass(d.versioning),
      k = f.mjUiClass(d.url),
      p = f.mjUiClass(h.uploadDescr),
      t = f.mjUiClass(d.titleList),
      y = f.mjUiClass(d.titleHeader),
      b = f.mjUiClass(d.title),
      g = f.mjUiClass(d.sustainabilityHeader),
      e = f.mjUiClass(d.sustainability),
      l = f.mjUiClass(d.superOrgHeader),
      r = f.mjUiClass(d.superOrg),
      v = f.mjUiClass(h.sideBarTab),
      D = f.mjUiClass(h.sideBar),
      B = f.mjUiClass(h.sideBarMenu),
      z = f.mjUiClass(h.sideBarGrid),
      u = f.mjUiClass(h.sideBarCol),
      E = f.mjUiClass(h.sideBar),
      H = f.mjUiClass(d.resourceTypeHeader),
      G = f.mjUiClass(d.resourceTypeGenHeader),
      J = f.mjUiClass(d.resourceTypeGen),
      K = f.mjUiClass(d.resourceTypeDescrHeader),
      N = f.mjUiClass(d.resourceTypeDescr),
      S = f.mjUiClass(d.resourceType),
      V = f.mjUiClass(d.resourceMDSourceHeader),
      L = f.mjUiClass(d.resourceMDSource),
      M = f.mjUiClass(d.resourceIdHeader),
      w = f.mjUiClass(d.resourceId),
      P = f.mjUiClass(h.reloadDescr),
      I = f.mjUiClass(d.relatedIdsHeader),
      F = f.mjUiClass(d.relatedIds),
      A = f.mjUiClass(d.relatedIdList),
      Y = f.mjUiClass(d.relatedIdHeader),
      ra = f.mjUiClass(d.relatedId),
      Ba = f.mjUiClass(d.relTypeHeader),
      Ca = f.mjUiClass(d.relType),
      za = f.mjUiClass(d.recordHeader),
      x = f.mjUiClass(d.record),
      ka = f.mjUiClass(h.recPreviewHeader),
      pa = f.mjUiClass(h.recPreview),
      R = f.mjUiClass(h.recFlexBox),
      ha = f.mjUiClass(h.recEditor),
      Fa = f.mjUiClass(d.pubyearHeader),
      sa = f.mjUiClass(d.pubyear),
      ya = f.mjUiClass(d.productsHeader),
      ua = f.mjUiClass(d.products),
      Aa = f.mjUiClass(d.productList),
      Ia = f.mjUiClass(d.productHeader),
      ea = f.mjUiClass(d.product),
      ma = f.mjUiClass(h.prodPreviewHeader),
      da = f.mjUiClass(h.prodPreview),
      O = f.mjUiClass(h.previewButtons),
      Z = f.mjUiClass(d.policyTypeHeader),
      xa = f.mjUiClass(d.policyType),
      Ga = f.mjUiClass(d.policyHeader),
      X = f.mjUiClass(d.policy),
      Oa = f.mjUiClass(h.page),
      Q = f.mjUiClass(d.missionStatementHeader),
      ba = f.mjUiClass(d.missionStatement),
      aa = f.mjUiClass(d.locationHeader),
      la = f.mjUiClass(d.location),
      fa = f.mjUiClass(h.locPreviewHeader),
      ia = f.mjUiClass(h.locPreview),
      va = f.mjUiClass(d.institutionTypeHeader),
      wa = f.mjUiClass(d.institutionType),
      C = f.mjUiClass(d.institutionPolicyHeader),
      oa = f.mjUiClass(d.institutionPolicy),
      Ka = f.mjUiClass(d.institutionPoliciesHeader),
      Ha = f.mjUiClass(d.institutionPolicies),
      Pa = f.mjUiClass(d.institutionNameHeader),
      Ta = f.mjUiClass(d.institutionName),
      bb = f.mjUiClass(d.institutionId),
      cb = f.mjUiClass(d.institutionContactHeader),
      hb = f.mjUiClass(d.institutionContact),
      ib = f.mjUiClass(d.identifier),
      db = f.mjUiClass(d.idTypeHeader),
      eb = f.mjUiClass(d.idType),
      nb = f.mjUiClass(d.idHeader),
      Wa = f.mjUiClass(d.id),
      ob = f.mjUiClass(d.fundingStatementHeader),
      $a = f.mjUiClass(d.fundingStatement),
      vb = f.mjUiClass(d.formatListHeader),
      La = f.mjUiClass(d.formatList),
      wb = f.mjUiClass(d.formatHeader),
      xb = f.mjUiClass(d.format),
      pb = f.mjUiClass(h.downloadBtn),
      yb = f.mjUiClass(h.deleteItem),
      qb = f.mjUiClass(h.dateHeader),
      zb = f.mjUiClass(h.date),
      Ya = f.mjUiClass(h.dataCiteNonFatal),
      rb = f.mjUiClass(h.dataCiteFatal),
      Ab = f.mjUiClass(d.creatorList),
      Qa = f.mjUiClass(d.creatorHeader),
      sb = f.mjUiClass(d.creator),
      Ma = f.mjUiClass(d.contactTypeHeader),
      gb = f.mjUiClass(d.contactType),
      jb = f.mjUiClass(d.contactEmailHeader),
      Cb = f.mjUiClass(d.contactEmail),
      tb = f.mjUiClass(h.clipBtn),
      Db = f.mjUiClass(d.basicMetadataHeader),
      lb = f.mjUiClass(d.basicMetadata),
      ub = f.mjUiClass(d.appliesHeader),
      n = f.mjUiClass(d.applies),
      Xa = f.mjUiClass(h.addItem);
  c.page = Oa;
  c.date = zb;
  c.dateHeader = qb;
  c.recFlexBox = R;
  c.recPreview = pa;
  c.recPreviewHeader = ka;
  c.recEditor = ha;
  c.sideBar = E;
  c.sideBarNav = D;
  c.sideBarTab = v;
  c.sideBarGrid = z;
  c.sideBarMenu = B;
  c.sideBarCol = u;
  c.dataCiteFatal = rb;
  c.dataCiteNonFatal = Ya;
  c.prodPreview = da;
  c.prodPreviewHeader = ma;
  c.locPreview = ia;
  c.locPreviewHeader = fa;
  c.downloadBtn = pb;
  c.clipBtn = tb;
  c.previewButtons = O;
  c.addItem = Xa;
  c.deleteItem = yb;
  c.uploadDescr = p;
  c.reloadDescr = P;
  c.record = x;
  c.recordHeader = za;
  c.product = ea;
  c.productHeader = Ia;
  c.productList = Aa;
  c.productsHeader = ya;
  c.products = ua;
  c.location = la;
  c.locationHeader = aa;
  c.sustainability = e;
  c.sustainabilityHeader = g;
  c.missionStatement = ba;
  c.missionStatementHeader = Q;
  c.fundingStatement = $a;
  c.fundingStatementHeader = ob;
  c.identifier = ib;
  c.id = Wa;
  c.idHeader = nb;
  c.idType = eb;
  c.idTypeHeader = db;
  c.relatedId = ra;
  c.relatedIdHeader = Y;
  c.relType = Ca;
  c.relTypeHeader = Ba;
  c.relatedIdList = A;
  c.relatedIdsHeader = I;
  c.relatedIds = F;
  c.basicMetadata = lb;
  c.basicMetadataHeader = Db;
  c.creator = sb;
  c.creatorHeader = Qa;
  c.creatorList = Ab;
  c.pubyear = sa;
  c.pubyearHeader = Fa;
  c.title = b;
  c.titleHeader = y;
  c.titleList = t;
  c.resourceId = w;
  c.resourceIdHeader = M;
  c.resourceType = S;
  c.resourceTypeHeader = H;
  c.resourceTypeGen = J;
  c.resourceTypeGenHeader = G;
  c.resourceTypeDescr = N;
  c.resourceTypeDescrHeader = K;
  c.resourceMDSource = L;
  c.resourceMDSourceHeader = V;
  c.institutionName = Ta;
  c.institutionNameHeader = Pa;
  c.institutionId = bb;
  c.institutionType = wa;
  c.institutionTypeHeader = va;
  c.institutionContact = hb;
  c.institutionContactHeader = cb;
  c.contactEmail = Cb;
  c.contactEmailHeader = jb;
  c.contactType = gb;
  c.contactTypeHeader = Ma;
  c.institutionPolicy = oa;
  c.institutionPolicyHeader = C;
  c.institutionPolicies = Ha;
  c.institutionPoliciesHeader = Ka;
  c.policy = X;
  c.policyHeader = Ga;
  c.policyType = xa;
  c.policyTypeHeader = Z;
  c.applies = n;
  c.appliesHeader = ub;
  c.superOrg = r;
  c.superOrgHeader = l;
  c.versioning = q;
  c.versioningHeader = m;
  c.format = xb;
  c.formatHeader = wb;
  c.formatList = La;
  c.formatListHeader = vb;
  c.url = k;
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
      d = a["Concur.React.Props"],
      h = a["Data.Functor"],
      f = a["Metajelo.CSS.Common.Util"],
      m = function m(q) {
    return "metajelo_" + q;
  };

  a = function () {
    var q = h.map(h.functorArray)(m);
    return function (k) {
      return f.cList(q(k));
    };
  }();

  c.mjWebClass = function (q) {
    return d.className("metajelo_" + q);
  };

  c.cList = a;
})(PS);

(function (a) {
  a["Metajelo.CSS.Web.ClassProps"] = a["Metajelo.CSS.Web.ClassProps"] || {};
  var c = a["Metajelo.CSS.Web.ClassProps"],
      d = a["Metajelo.CSS.Common.ClassNames"],
      h = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      f = a["Metajelo.CSS.Web.Util"];
  a = f.mjWebClass(d.versioning);
  f.mjWebClass(d.url);
  var m = f.mjWebClass(d.title),
      q = f.mjWebClass(d.sustainability),
      k = f.mjWebClass(d.superOrg),
      p = f.mjWebClass(d.resourceTypeGen),
      t = f.mjWebClass(d.resourceTypeDescr),
      y = f.mjWebClass(d.resourceType),
      b = f.mjWebClass(d.resourceId),
      g = f.mjWebClass(d.relatedIdsHeader),
      e = f.mjWebClass(d.relatedIdList),
      l = f.mjWebClass(d.relatedId),
      r = f.mjWebClass(d.relType),
      v = f.mjWebClass(d.recordId),
      D = f.mjWebClass(d.record),
      B = f.mjWebClass(d.pubyear),
      z = f.mjWebClass(d.productsHeader),
      u = f.mjWebClass(d.productList),
      E = f.mjWebClass(h.productGroup),
      H = f.mjWebClass(h.productCitation),
      G = f.mjWebClass(d.product),
      J = f.mjWebClass(d.policyType),
      K = f.mjWebClass(d.policy),
      N = f.cList([d.url, d.missionStatement]),
      S = f.mjWebClass(d.institutionType),
      V = f.mjWebClass(d.institutionPolicy),
      L = f.mjWebClass(d.institutionPolicies),
      M = f.mjWebClass(d.institutionName),
      w = f.mjWebClass(d.institutionId),
      P = f.mjWebClass(d.institutionContact),
      I = f.mjWebClass(d.identifier),
      F = f.cList([d.url, h.idUrl]),
      A = f.mjWebClass(d.idType),
      Y = f.cList([d.url, d.fundingStatement]),
      ra = f.mjWebClass(d.formatList),
      Ba = f.mjWebClass(d.format),
      Ca = f.mjWebClass(h.errorDisplayBox),
      za = f.mjWebClass(h.errorDisplay),
      x = f.mjWebClass(d.creatorList),
      ka = f.mjWebClass(d.creator),
      pa = f.mjWebClass(d.contactType),
      R = f.mjWebClass(d.contactEmail);
  d = f.mjWebClass(d.basicMetadata);
  h = f.mjWebClass(h.appliesInfo);
  c.productGroup = E;
  c.productCitation = H;
  c.appliesInfo = h;
  c.idUrl = F;
  c.errorDisplayBox = Ca;
  c.errorDisplay = za;
  c.record = D;
  c.recordId = v;
  c.product = G;
  c.productList = u;
  c.productsHeader = z;
  c.sustainability = q;
  c.missionStatement = N;
  c.fundingStatement = Y;
  c.identifier = I;
  c.idType = A;
  c.relatedId = l;
  c.relType = r;
  c.relatedIdList = e;
  c.relatedIdsHeader = g;
  c.basicMetadata = d;
  c.creator = ka;
  c.creatorList = x;
  c.pubyear = B;
  c.title = m;
  c.resourceId = b;
  c.resourceType = y;
  c.resourceTypeGen = p;
  c.resourceTypeDescr = t;
  c.institutionName = M;
  c.institutionId = w;
  c.institutionType = S;
  c.institutionContact = P;
  c.contactEmail = R;
  c.contactType = pa;
  c.institutionPolicy = V;
  c.institutionPolicies = L;
  c.policy = K;
  c.policyType = J;
  c.superOrg = k;
  c.versioning = a;
  c.format = Ba;
  c.formatList = ra;
})(PS);

(function (a) {
  a["Metajelo.SchemaInfo"] = a["Metajelo.SchemaInfo"] || {};
  var c = a["Metajelo.SchemaInfo"],
      d = a["Foreign.Object"];
  a = d.fromHomogeneous()({
    identifierTypeSTyp: "The type of the RelatedIdentifier.",
    relationTypeSTyp: "Description of the relationship of the resource being registered (A) and the related resource (B).",
    resourceTypeSTyp: "The general type of a resource."
  });
  var h = d.fromHomogeneous()({
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
  c.descrAttrMap = d;
  c.descrCTypMap = h;
  c.descrEleMap = f;
  c.descrSTypMap = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var c = a["Metajelo.Types"],
      d = a["Data.Bounded"],
      h = a["Data.Enum"],
      f = a["Data.Eq"],
      m = a["Data.Generic.Rep"],
      q = a["Data.Generic.Rep.Bounded"],
      k = a["Data.Generic.Rep.Enum"],
      p = a["Data.Generic.Rep.Eq"],
      t = a["Data.Generic.Rep.Ord"],
      y = a["Data.Generic.Rep.Show"],
      b = a["Data.Ord"],
      g = a["Data.Show"],
      e = a["Data.Symbol"],
      l = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      r = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      v = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      D = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      B = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      z = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      u = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      E = function () {
    function R() {}

    R.value = new R();
    return R;
  }();

  a = function () {
    function R(ha) {
      this.value0 = ha;
    }

    R.create = function (ha) {
      return new R(ha);
    };

    return R;
  }();

  var H = function () {
    function R(ha) {
      this.value0 = ha;
    }

    R.create = function (ha) {
      return new R(ha);
    };

    return R;
  }(),
      G = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      J = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      K = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      N = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      S = new g.Show(function (R) {
    if (R instanceof G) return "commercial";
    if (R instanceof J) return "non-profit";
    if (R instanceof K) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 102, column 1 - line 105, column 37): " + [R.constructor.name]);
  }),
      V = new g.Show(function (R) {
    return "dataCustodian";
  }),
      L = new m.Generic(function (R) {
    if (R instanceof l) return new m.Inl(m.NoArguments.value);
    if (R instanceof r) return new m.Inr(new m.Inl(m.NoArguments.value));
    if (R instanceof v) return new m.Inr(new m.Inr(new m.Inl(m.NoArguments.value)));
    if (R instanceof D) return new m.Inr(new m.Inr(new m.Inr(new m.Inl(m.NoArguments.value))));
    if (R instanceof B) return new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inl(m.NoArguments.value)))));
    if (R instanceof z) return new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inl(m.NoArguments.value))))));
    if (R instanceof u) return new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inl(m.NoArguments.value)))))));
    if (R instanceof E) return new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(m.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [R.constructor.name]);
  }, function (R) {
    if (R instanceof m.Inl) return l.value;
    if (R instanceof m.Inr && R.value0 instanceof m.Inl) return r.value;
    if (R instanceof m.Inr && R.value0 instanceof m.Inr && R.value0.value0 instanceof m.Inl) return v.value;
    if (R instanceof m.Inr && R.value0 instanceof m.Inr && R.value0.value0 instanceof m.Inr && R.value0.value0.value0 instanceof m.Inl) return D.value;
    if (R instanceof m.Inr && R.value0 instanceof m.Inr && R.value0.value0 instanceof m.Inr && R.value0.value0.value0 instanceof m.Inr && R.value0.value0.value0.value0 instanceof m.Inl) return B.value;
    if (R instanceof m.Inr && R.value0 instanceof m.Inr && R.value0.value0 instanceof m.Inr && R.value0.value0.value0 instanceof m.Inr && R.value0.value0.value0.value0 instanceof m.Inr && R.value0.value0.value0.value0.value0 instanceof m.Inl) return z.value;
    if (R instanceof m.Inr && R.value0 instanceof m.Inr && R.value0.value0 instanceof m.Inr && R.value0.value0.value0 instanceof m.Inr && R.value0.value0.value0.value0 instanceof m.Inr && R.value0.value0.value0.value0.value0 instanceof m.Inr && R.value0.value0.value0.value0.value0.value0 instanceof m.Inl) return u.value;
    if (R instanceof m.Inr && R.value0 instanceof m.Inr && R.value0.value0 instanceof m.Inr && R.value0.value0.value0 instanceof m.Inr && R.value0.value0.value0.value0 instanceof m.Inr && R.value0.value0.value0.value0.value0 instanceof m.Inr && R.value0.value0.value0.value0.value0.value0 instanceof m.Inr) return E.value;
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [R.constructor.name]);
  });

  g = new g.Show(function (R) {
    return R instanceof E ? "Terms of Use" : y.genericShow(L)(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Access";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Collection";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Data";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Metadata";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Preservation";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Submission";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "Quality";
    })))(y.genericShowConstructor(y.genericShowArgsNoArguments)(new e.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(R);
  });
  var M = new m.Generic(function (R) {
    if (R instanceof G) return new m.Inl(m.NoArguments.value);
    if (R instanceof J) return new m.Inr(new m.Inl(m.NoArguments.value));
    if (R instanceof K) return new m.Inr(new m.Inr(m.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [R.constructor.name]);
  }, function (R) {
    if (R instanceof m.Inl) return G.value;
    if (R instanceof m.Inr && R.value0 instanceof m.Inl) return J.value;
    if (R instanceof m.Inr && R.value0 instanceof m.Inr) return K.value;
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [R.constructor.name]);
  }),
      w = new m.Generic(function (R) {
    return m.NoArguments.value;
  }, function (R) {
    return N.value;
  }),
      P = new f.Eq(p.genericEq(L)(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqConstructor(p.genericEqNoArguments)))))))))),
      I = new b.Ord(function () {
    return P;
  }, function (R) {
    return function (ha) {
      return t.genericCompare(L)(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdConstructor(t.genericOrdNoArguments)))))))))(R)(ha);
    };
  }),
      F = new f.Eq(p.genericEq(M)(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqConstructor(p.genericEqNoArguments))))),
      A = new b.Ord(function () {
    return F;
  }, function (R) {
    return function (ha) {
      return t.genericCompare(M)(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdConstructor(t.genericOrdNoArguments))))(R)(ha);
    };
  }),
      Y = new f.Eq(p.genericEq(w)(p.genericEqConstructor(p.genericEqNoArguments))),
      ra = new b.Ord(function () {
    return Y;
  }, function (R) {
    return function (ha) {
      return t.genericCompare(w)(t.genericOrdConstructor(t.genericOrdNoArguments))(R)(ha);
    };
  }),
      Ba = new h.Enum(function () {
    return I;
  }, k.genericPred(L)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericBottomConstructor(q.genericBottomNoArguments)))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments)))), k.genericSucc(L)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericBottomConstructor(q.genericBottomNoArguments)))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))),
      Ca = new h.Enum(function () {
    return A;
  }, k.genericPred(M)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericBottomConstructor(q.genericBottomNoArguments)))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments)))), k.genericSucc(M)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericBottomConstructor(q.genericBottomNoArguments)))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))),
      za = new h.Enum(function () {
    return ra;
  }, k.genericPred(w)(k.genericEnumConstructor(k.genericEnumNoArguments)), k.genericSucc(w)(k.genericEnumConstructor(k.genericEnumNoArguments))),
      x = new d.Bounded(function () {
    return I;
  }, q.genericBottom(L)(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))), q.genericTop(L)(q.genericTopSum(q.genericTopSum(q.genericTopSum(q.genericTopSum(q.genericTopSum(q.genericTopSum(q.genericTopSum(q.genericTopConstructor(q.genericTopNoArguments))))))))));
  f = new h.SmallBounded(function () {
    return x;
  });
  var ka = new d.Bounded(function () {
    return A;
  }, q.genericBottom(M)(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))), q.genericTop(M)(q.genericTopSum(q.genericTopSum(q.genericTopConstructor(q.genericTopNoArguments))))),
      pa = new d.Bounded(function () {
    return ra;
  }, q.genericBottom(w)(q.genericBottomConstructor(q.genericBottomNoArguments)), q.genericTop(w)(q.genericTopConstructor(q.genericTopNoArguments)));
  d = new h.SmallBounded(function () {
    return pa;
  });
  q = new h.BoundedEnum(function () {
    return x;
  }, function () {
    return Ba;
  }, k.genericCardinality(L)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))), k.genericFromEnum(L)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))), k.genericToEnum(L)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))));
  p = new h.BoundedEnum(function () {
    return ka;
  }, function () {
    return Ca;
  }, k.genericCardinality(M)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))), k.genericFromEnum(M)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))), k.genericToEnum(M)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))));
  h = new h.BoundedEnum(function () {
    return pa;
  }, function () {
    return za;
  }, k.genericCardinality(w)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)), k.genericFromEnum(w)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)), k.genericToEnum(w)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)));
  c.DataCustodian = N;
  c.Commercial = G;
  c.NonProfit = J;
  c.Governmental = K;
  c.FreeTextPolicy = a;
  c.RefPolicy = H;
  c.Access = l;
  c.Collection = r;
  c.Data = v;
  c.Metadata = D;
  c.Preservation = B;
  c.Submission = z;
  c.Quality = u;
  c.TermsOfUse = E;
  c.showInstitutionType = S;
  c.boundedEnumInstitutionType = p;
  c.showInstitutionContactType = V;
  c.boundedEnumInstitutionContactType = h;
  c.smallBoundedInstitutionContactType = d;
  c.showPolicyType = g;
  c.boundedEnumPolicyType = q;
  c.smallBoundedPolicyType = f;
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (c) {
    return function (d) {
      return function (h) {
        return function () {
          return h.parseFromString(d, c);
        };
      };
    };
  };
})(PS["Web.DOM.DOMParser"] = PS["Web.DOM.DOMParser"] || {});

(function (a) {
  a._documentElement = function (c) {
    return function (d) {
      return function () {
        return d[c];
      };
    };
  }("documentElement");

  a.getElementsByTagName = function (c) {
    return function (d) {
      return function () {
        return d.getElementsByTagName(c);
      };
    };
  };

  a._getElementsByTagNameNS = function (c) {
    return function (d) {
      return function (h) {
        return function () {
          return h.getElementsByTagNameNS(c, d);
        };
      };
    };
  };

  a.createElement = function (c) {
    return function (d) {
      return function () {
        return d.createElement(c);
      };
    };
  };

  a._createElementNS = function (c) {
    return function (d) {
      return function (h) {
        return function () {
          return h.createElementNS(c, d);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (c, d, h, f) {
    if ("undefined" !== typeof window) return h = window[h], null != h && f instanceof h ? d(f) : c;

    for (var m = f; null != m;) {
      m = Object.getPrototypeOf(m);
      var q = m.constructor.name;
      if (q === h) return d(f);
      if ("Object" === q) break;
    }

    return c;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var c = a["Web.Internal.FFI"],
      d = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (h) {
    return function (f) {
      return c._unsafeReadProtoTagged(d.Nothing.value, d.Just.create, h, f);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var c = a["Web.DOM.Document"],
      d = a["Web.DOM.Document"],
      h = a["Data.Functor"],
      f = a["Data.Nullable"],
      m = a.Effect,
      q = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var k = function () {
    var p = h.map(m.functorEffect)(f.toMaybe);
    return function (t) {
      return p(d._documentElement(t));
    };
  }();

  c.fromNode = a;
  c.toNonElementParentNode = q;
  c.documentElement = k;

  c.getElementsByTagNameNS = function (p) {
    return d._getElementsByTagNameNS(f.toNullable(p));
  };

  c.createElementNS = function (p) {
    return d._createElementNS(f.toNullable(p));
  };

  c.getElementsByTagName = d.getElementsByTagName;
  c.createElement = d.createElement;
})(PS);

(function (a) {
  var c = function c(d) {
    return function (h) {
      return h[d];
    };
  };

  a._prefix = c("prefix");
  a.localName = c("localName");
  a.tagName = c("tagName");

  a.setAttribute = function (d) {
    return function (h) {
      return function (f) {
        return function () {
          f.setAttribute(d, h);
          return {};
        };
      };
    };
  };

  a._getAttribute = function (d) {
    return function (h) {
      return function () {
        return h.getAttribute(d);
      };
    };
  };
})(PS["Web.DOM.Element"] = PS["Web.DOM.Element"] || {});

(function (a) {
  a["Web.DOM.Element"] = a["Web.DOM.Element"] || {};
  var c = a["Web.DOM.Element"],
      d = a["Web.DOM.Element"],
      h = a["Data.Functor"],
      f = a["Data.Nullable"],
      m = a.Effect,
      q = a["Unsafe.Coerce"],
      k = q.unsafeCoerce;
  q = q.unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  c.fromNode = a;
  c.toNode = q;
  c.toParentNode = k;

  c.prefix = function (p) {
    return f.toMaybe(d._prefix(p));
  };

  c.getAttribute = function (p) {
    var t = h.map(m.functorEffect)(f.toMaybe),
        y = d._getAttribute(p);

    return function (b) {
      return t(y(b));
    };
  };

  c.localName = d.localName;
  c.tagName = d.tagName;
  c.setAttribute = d.setAttribute;
})(PS);

(function (a) {
  a.toArray = function (c) {
    return function () {
      return [].slice.call(c);
    };
  };

  a._item = function (c) {
    return function (d) {
      return function () {
        return d.item(c);
      };
    };
  };
})(PS["Web.DOM.HTMLCollection"] = PS["Web.DOM.HTMLCollection"] || {});

(function (a) {
  a["Web.DOM.HTMLCollection"] = a["Web.DOM.HTMLCollection"] || {};
  var c = a["Web.DOM.HTMLCollection"],
      d = a["Web.DOM.HTMLCollection"],
      h = a["Data.Functor"],
      f = a["Data.Nullable"],
      m = a.Effect;

  c.item = function (q) {
    var k = h.map(m.functorEffect)(f.toMaybe),
        p = d._item(q);

    return function (t) {
      return k(p(t));
    };
  };

  c.toArray = d.toArray;
})(PS);

(function (a) {
  var c = function c(d) {
    return function (h) {
      return function () {
        return h[d];
      };
    };
  };

  a.nodeName = function (d) {
    return d.nodeName;
  };

  a._ownerDocument = c("ownerDocument");
  a.childNodes = c("childNodes");
  a.textContent = c("textContent");

  a.setTextContent = function (d) {
    return function (h) {
      return function () {
        h.textContent = d;
        return {};
      };
    };
  };

  a.appendChild = function (d) {
    return function (h) {
      return function () {
        return h.appendChild(d);
      };
    };
  };
})(PS["Web.DOM.Node"] = PS["Web.DOM.Node"] || {});

(function (a) {
  a["Web.DOM.Node"] = a["Web.DOM.Node"] || {};
  var c = a["Web.DOM.Node"],
      d = a["Web.DOM.Node"],
      h = a["Data.Functor"],
      f = a["Data.Nullable"],
      m = a.Effect;

  a = function () {
    var q = h.map(m.functorEffect)(f.toMaybe);
    return function (k) {
      return q(d._ownerDocument(k));
    };
  }();

  c.ownerDocument = a;
  c.nodeName = d.nodeName;
  c.childNodes = d.childNodes;
  c.textContent = d.textContent;
  c.setTextContent = d.setTextContent;
  c.appendChild = d.appendChild;
})(PS);

(function (a) {
  a["Web.DOM.DOMParser"] = a["Web.DOM.DOMParser"] || {};

  var c = a["Web.DOM.DOMParser"],
      d = a["Web.DOM.DOMParser"],
      h = a["Control.Applicative"],
      f = a["Control.Bind"],
      m = a["Data.Array"],
      q = a["Data.Either"],
      k = a["Data.Functor"],
      p = a["Data.Maybe"],
      t = a.Effect,
      y = a["Web.DOM.Document"],
      b = a["Web.DOM.Element"],
      g = a["Web.DOM.HTMLCollection"],
      e = a["Web.DOM.Node"],
      l = function l(v) {
    return function (D) {
      if (v instanceof p.Nothing) return new q.Right(D);
      if (v instanceof p.Just) return new q.Left(v.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [v.constructor.name]);
    };
  },
      r = function r(v) {
    return function () {
      var D = f.join(t.bindEffect)(k.map(t.functorEffect)(g.toArray)(y.getElementsByTagName("parsererror")(v)))();
      D = m.head(D);
      D = k.map(p.functorMaybe)(b.toNode)(D);
      if (D instanceof p.Nothing) D = h.pure(t.applicativeEffect)(p.Nothing.value);else if (D instanceof p.Just) D = k.map(t.functorEffect)(p.Just.create)(e.textContent(D.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [D.constructor.name]);
      return D();
    };
  };

  c.parseXMLFromString = function (v) {
    return function (D) {
      return function () {
        var B = d.parseFromString("application/xml")(v)(D)(),
            z = r(B)();
        return l(z)(B);
      };
    };
  };

  c.makeDOMParser = d.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (c) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function (m) {
            return function (q) {
              return function () {
                return q.evaluate(c, d, h, f, m);
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
    return function (d) {
      return function () {
        return c.snapshotItem(d);
      };
    };
  };

  a.customNSResolver = function (c) {
    return {
      lookupNamespaceURI: c
    };
  };

  a.createNSResolver = function (c) {
    return function (d) {
      return d.createNSResolver(c);
    };
  };

  a.lookupNamespaceURIInternal = function (c) {
    return function (d) {
      return c.lookupNamespaceURI(d);
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
      d = a["Web.DOM.Document.XPath.ResultType"],
      h = a["Data.Eq"],
      f = a["Data.Maybe"],
      m = function () {
    function p() {}

    p.value = new p();
    return p;
  }(),
      q = function () {
    function p() {}

    p.value = new p();
    return p;
  }(),
      k = new h.Eq(function (p) {
    return function (t) {
      return p === t;
    };
  });

  c.res2SnapType = function (p) {
    return h.eq(k)(p)(d.unordered_node_snapshot_type) ? new f.Just(m.value) : h.eq(k)(p)(d.ordered_node_snapshot_type) ? new f.Just(q.value) : f.Nothing.value;
  };

  c.number_type = d.number_type;
  c.string_type = d.string_type;
  c.boolean_type = d.boolean_type;
  c.ordered_node_snapshot_type = d.ordered_node_snapshot_type;
  c.any_unordered_node_type = d.any_unordered_node_type;
})(PS);

(function (a) {
  a["Web.DOM.Document.XPath"] = a["Web.DOM.Document.XPath"] || {};

  var c = a["Web.DOM.Document.XPath"],
      d = a["Web.DOM.Document.XPath"],
      h = a["Control.Applicative"],
      f = a["Data.Array"],
      m = a["Data.Functor"],
      q = a["Data.Int"],
      k = a["Data.Maybe"],
      p = a["Data.Monoid"],
      t = a["Data.Natural"],
      y = a["Data.Nullable"],
      b = a["Data.Traversable"],
      g = a.Effect,
      e = a["Web.DOM.Document"],
      l = a["Web.DOM.Document.XPath.ResultType"],
      r = a["Web.DOM.Element"],
      v = a["Web.DOM.Node"],
      D = function () {
    var z = m.map(g.functorEffect)(function (u) {
      return t.intToNat(q.round(u));
    });
    return function (u) {
      return z(d.snapshotLengthInternal(u));
    };
  }(),
      B = function B(z) {
    return function (u) {
      return m.map(g.functorEffect)(y.toMaybe)(d.snapshotItemInternal(z)(q.toNumber(t.natToInt(u))));
    };
  };

  a = function () {
    var z = m.map(g.functorEffect)(y.toMaybe);
    return function (u) {
      return z(d.singleNodeValueInternal(u));
    };
  }();

  c.evaluate = function (z) {
    return function (u) {
      return function (E) {
        return function (H) {
          return function (G) {
            return function (J) {
              return d.evaluateInternal(z)(u)(y.toNullable(E))(H)(y.toNullable(G))(J);
            };
          };
        };
      };
    };
  };

  c.evaluateNumber = function (z) {
    return function (u) {
      return function (E) {
        return function (H) {
          return function (G) {
            return function () {
              var J = d.evaluateInternal(z)(u)(y.toNullable(E))(l.number_type)(y.toNullable(H))(G)();
              return d.numberValue(J)();
            };
          };
        };
      };
    };
  };

  c.evaluateString = function (z) {
    return function (u) {
      return function (E) {
        return function (H) {
          return function (G) {
            return function () {
              var J = d.evaluateInternal(z)(u)(y.toNullable(E))(l.string_type)(y.toNullable(H))(G)();
              return d.stringValue(J)();
            };
          };
        };
      };
    };
  };

  c.evaluateBoolean = function (z) {
    return function (u) {
      return function (E) {
        return function (H) {
          return function (G) {
            return function () {
              var J = d.evaluateInternal(z)(u)(y.toNullable(E))(l.boolean_type)(y.toNullable(H))(G)();
              return d.booleanValue(J)();
            };
          };
        };
      };
    };
  };

  c.singleNodeValue = a;

  c.snapshot = function (z) {
    var u = l.res2SnapType(d.resultType(z)),
        E = B(z);
    u = m.map(k.functorMaybe)(function (H) {
      return function () {
        var G = D(z)();
        G = t.natToInt(G);
        G = m.map(m.functorArray)(t.intToNat)(f.range(0)(G - 1 | 0));
        G = b.sequence(b.traversableArray)(g.applicativeEffect)(m.map(m.functorArray)(E)(G))();
        return f.catMaybes(G);
      };
    })(u);
    if (u instanceof k.Nothing) return h.pure(g.applicativeEffect)(p.mempty(p.monoidArray));
    if (u instanceof k.Just) return u.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [u.constructor.name]);
  };

  c.lookupNamespaceURI = function (z) {
    return function (u) {
      return y.toMaybe(d.lookupNamespaceURIInternal(z)(u));
    };
  };

  c.defaultNSResolver = function (z) {
    return function (u) {
      var E = function E(H) {
        return function () {
          var G = e.documentElement(H)();
          if (G instanceof k.Nothing) return z;
          if (G instanceof k.Just) return r.toNode(G.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [G.constructor.name]);
        };
      };

      return function () {
        var H = v.ownerDocument(z)(),
            G = function () {
          if (H instanceof k.Nothing) {
            var J = e.fromNode(z);
            if (J instanceof k.Nothing) return z;
            if (J instanceof k.Just) return E(J.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [J.constructor.name]);
          }

          if (H instanceof k.Just) return E(H.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [H.constructor.name]);
        }();

        return d.createNSResolver(G)(u);
      };
    };
  };

  c.customNSResolver = d.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var c = a["Metajelo.XPaths"],
      d = a["Control.Applicative"],
      h = a["Control.Bind"],
      f = a["Data.Array.NonEmpty"],
      m = a["Data.Array.NonEmpty.Internal"],
      q = a["Data.Either"],
      k = a["Data.Foldable"],
      p = a["Data.Functor"],
      t = a["Data.Maybe"],
      y = a["Data.String.Common"],
      b = a["Data.String.NonEmpty.Internal"],
      g = a["Data.Traversable"],
      e = a["Data.XPath"],
      l = a.Effect,
      r = a["Effect.Exception"],
      v = a["Web.DOM.DOMParser"],
      D = a["Web.DOM.Document"],
      B = a["Web.DOM.Document.XPath"],
      z = a["Web.DOM.Document.XPath.ResultType"],
      u = a["Web.DOM.Element"],
      E = a["Web.DOM.HTMLCollection"],
      H = e.pathAppendNSx(e.stringXPath)(e.root(e.stringXPath))("record");
  a = e.pathAppendNSx(e.stringXPath)(H)("relatedIdentifier");
  var G = e.pathAppendNSx(e.stringXPath)(H)("supplementaryProducts");
  G = e.pathAppendNSx(e.stringXPath)(G)("supplementaryProduct");

  var J = function J(P) {
    return function (I) {
      return {
        any: function any(F) {
          return function (A) {
            return function (Y) {
              return B.evaluate(A)(F)(I)(Y)(t.Nothing.value)(P);
            };
          };
        },
        num: function num(F) {
          return function (A) {
            return B.evaluateNumber(A)(F)(I)(t.Nothing.value)(P);
          };
        },
        str: function str(F) {
          return function (A) {
            return B.evaluateString(A)(F)(I)(t.Nothing.value)(P);
          };
        },
        bool: function bool(F) {
          return function (A) {
            return B.evaluateBoolean(A)(F)(I)(t.Nothing.value)(P);
          };
        },
        nodeMay: function nodeMay(F) {
          return function (A) {
            return h.bind(l.bindEffect)(B.evaluate(A)(F)(I)(z.any_unordered_node_type)(t.Nothing.value)(P))(B.singleNodeValue);
          };
        }
      };
    };
  },
      K = f["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      N = function N(P) {
    var I = function I(F) {
      return function () {
        var A = D.getElementsByTagNameNS(new t.Just(F))("record")(P)();
        return E.item(0)(A)();
      };
    };

    return function () {
      var F = D.getElementsByTagName("record")(P)();
      F = E.item(0)(F)();
      if (F instanceof t.Nothing) F = g.sequence(m.traversableNonEmptyArray)(l.applicativeEffect)(p.map(m.functorNonEmptyArray)(I)(K))(), F = h.join(t.bindMaybe)(k.find(m.foldableNonEmptyArray)(t.isJust)(F));else if (F instanceof t.Just) F = new t.Just(F.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 277, column 16 - line 281, column 38): " + [F.constructor.name]);
      return p.map(t.functorMaybe)(u.toNode)(F);
    };
  },
      S = e.pathAppendNSx(e.stringXPath)(H)("lastModified"),
      V = e.pathAppendNSx(e.stringXPath)(H)("identifier"),
      L = e.pathAppend(e.stringXPath)(V)(e.at(e.stringXPath)("identifierType")),
      M = function M(P) {
    var I = function I(F) {
      return t.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(F);
    };

    if (P instanceof t.Nothing) return d.pure(l.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (P instanceof t.Just) return p.map(l.functorEffect)(I)(u.getAttribute("xmlns")(P.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 185, column 3 - line 187, column 59): " + [P.constructor.name]);
  },
      w = function w(P) {
    return function (I) {
      var F = function F(A) {
        return function (Y) {
          return function (ra) {
            ra = B.lookupNamespaceURI(A)(ra);
            if (ra instanceof t.Nothing) return Y;
            if (ra instanceof t.Just) return ra.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 202, column 39 - line 204, column 20): " + [ra.constructor.name]);
          };
        };
      };

      return function () {
        var A = B.defaultNSResolver(P)(I)(),
            Y = u.fromNode(P);
        Y = M(Y)();
        return B.customNSResolver(F(A)(Y));
      };
    };
  };

  e = e.pathAppendNSx(e.stringXPath)(H)("date");
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
  c.idTypeRootAP = L;
  c.idRootP = V;
  c.dateRootP = e;
  c.lastModRootP = S;
  c.relIdRootP = a;
  c.sProdRootP = G;

  c.getDefaultParseEnv = function (P) {
    return function () {
      var I = v.makeDOMParser();
      I = v.parseXMLFromString(P)(I)();
      if (I instanceof q.Left) I = r["throw"]("XML parsing error: " + I.value0)();else if (I instanceof q.Right) I = I.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 245, column 13 - line 247, column 26): " + [I.constructor.name]);
      var F = N(I)();
      if (F instanceof t.Nothing) F = r["throw"]("Could not find <record> node!")();else if (F instanceof t.Just) F = F.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 249, column 14 - line 251, column 23): " + [F.constructor.name]);
      var A = u.fromNode(F);
      if (A instanceof t.Nothing) A = r["throw"]("<record> node could not be cast to an element!")();else if (A instanceof t.Just) A = A.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 252, column 14 - line 254, column 23): " + [A.constructor.name]);
      var Y = M(new t.Just(A))(),
          ra = w(F)(I)();
      ra = J(I)(new t.Just(ra));
      return {
        doc: I,
        ns: Y,
        recNode: F,
        recElem: A,
        xeval: ra,
        xevalRoot: {
          any: ra.any(F),
          num: ra.num(F),
          str: ra.str(F),
          bool: ra.bool(F),
          nodeMay: ra.nodeMay(F)
        }
      };
    };
  };

  c.unsafeSingleNodeValue = function (P) {
    return function (I) {
      return function (F) {
        return function () {
          var A = P.xeval.nodeMay(I)(F)();
          if (A instanceof t.Just) return A.value0;
          if (A instanceof t.Nothing) return r["throw"]("Couldn't find required node at: " + F)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 294, column 3 - line 296, column 40): " + [A.constructor.name]);
        };
      };
    };
  };

  c.readNonEmptyString = function (P) {
    return function (I) {
      I = b.fromString(y.trim(I));
      if (I instanceof t.Nothing) return q.Left.create("Empty string found for " + P);
      if (I instanceof t.Just) return new q.Right(I.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 303, column 3 - line 305, column 26): " + [I.constructor.name]);
    };
  };

  c.readNonEmptyArray = function (P) {
    return function (I) {
      I = f.fromArray(I);
      if (I instanceof t.Nothing) return q.Left.create("Empty array found for " + P);
      if (I instanceof t.Just) return new q.Right(I.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 310, column 3 - line 312, column 26): " + [I.constructor.name]);
    };
  };

  c.rightOrThrow = function (P) {
    if (P instanceof q.Right) return d.pure(l.applicativeEffect)(P.value0);
    if (P instanceof q.Left) return r["throw"](P.value0);
    throw Error("Failed pattern match at Metajelo.XPaths (line 315, column 19 - line 317, column 24): " + [P.constructor.name]);
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var c = a["Text.Parsing.StringParser"],
      d = a["Control.Alt"],
      h = a["Control.Alternative"],
      f = a["Control.Applicative"],
      m = a["Control.Apply"],
      q = a["Control.Bind"],
      k = a["Control.Monad"],
      p = a["Control.Monad.Rec.Class"],
      t = a["Control.Plus"],
      y = a["Data.Bifunctor"],
      b = a["Data.Boolean"],
      g = a["Data.Either"],
      e = a["Data.Functor"];
  a = a["Data.Show"];

  var l = function () {
    function G(J) {
      this.value0 = J;
    }

    G.create = function (J) {
      return new G(J);
    };

    return G;
  }();

  a = new a.Show(function (G) {
    return G.value0;
  });

  var r = new e.Functor(function (G) {
    return function (J) {
      var K = e.map(g.functorEither)(function (N) {
        return {
          result: G(N.result),
          suffix: N.suffix
        };
      });
      return function (N) {
        return K(J(N));
      };
    };
  }),
      v = function v(G) {
    return function (J) {
      return new g.Left({
        pos: J.pos,
        error: new l(G)
      });
    };
  },
      D = new m.Apply(function () {
    return r;
  }, function (G) {
    return function (J) {
      return function (K) {
        return q.bind(g.bindEither)(G(K))(function (N) {
          return q.bind(g.bindEither)(J(N.suffix))(function (S) {
            return f.pure(g.applicativeEither)({
              result: N.result(S.result),
              suffix: S.suffix
            });
          });
        });
      };
    };
  }),
      B = new q.Bind(function () {
    return D;
  }, function (G) {
    return function (J) {
      return function (K) {
        return q.bind(g.bindEither)(G(K))(function (N) {
          return J(N.result)(N.suffix);
        });
      };
    };
  }),
      z = new f.Applicative(function () {
    return D;
  }, function (G) {
    return function (J) {
      return new g.Right({
        result: G,
        suffix: J
      });
    };
  }),
      u = new k.Monad(function () {
    return z;
  }, function () {
    return B;
  });

  m = new p.MonadRec(function () {
    return u;
  }, function (G) {
    return function (J) {
      var K = function K(N) {
        if (N.result instanceof p.Loop) return new p.Loop({
          state: N.result.value0,
          str: N.suffix
        });
        if (N.result instanceof p.Done) return new p.Done({
          result: N.result.value0,
          suffix: N.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [N.constructor.name]);
      };

      return function (N) {
        return p.tailRecM(p.monadRecEither)(function (S) {
          return e.map(g.functorEither)(K)(G(S.state)(S.str));
        })({
          state: J,
          str: N
        });
      };
    };
  });
  var E = new d.Alt(function () {
    return r;
  }, function (G) {
    return function (J) {
      return function (K) {
        var N = G(K);

        if (N instanceof g.Left) {
          if (K.pos === N.value0.pos) return J(K);
          if (b.otherwise) return new g.Left({
            error: N.value0.error,
            pos: N.value0.pos
          });
        }

        return N;
      };
    };
  }),
      H = new t.Plus(function () {
    return E;
  }, v("No alternative"));
  d = new h.Alternative(function () {
    return z;
  }, function () {
    return H;
  });
  c.ParseError = l;

  c.runParser = function (G) {
    return function (J) {
      return y.bimap(g.bifunctorEither)(function (K) {
        return K.error;
      })(function (K) {
        return K.result;
      })(G({
        str: J,
        pos: 0
      }));
    };
  };

  c.fail = v;

  c["try"] = function (G) {
    return function (J) {
      return y.lmap(g.bifunctorEither)(function (K) {
        return {
          pos: J.pos,
          error: K.error
        };
      })(G(J));
    };
  };

  c.showParseError = a;
  c.functorParser = r;
  c.applyParser = D;
  c.applicativeParser = z;
  c.altParser = E;
  c.alternativeParser = d;
  c.bindParser = B;
  c.monadRecParser = m;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var c = a["Text.Parsing.StringParser.Combinators"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Data.Functor"],
      k = a["Data.NonEmpty"],
      p = a["Data.Unit"],
      t = a["Text.Parsing.StringParser"],
      y = a["Data.List"].manyRec(t.monadRecParser)(t.alternativeParser),
      b = function b(g) {
    return function (e) {
      return new k.NonEmpty(g, e);
    };
  };

  c.many = y;

  c.many1 = function (g) {
    return f.apply(t.applyParser)(q.map(t.functorParser)(b)(g))(y(g));
  };

  c.withError = function (g) {
    return function (e) {
      return d.alt(t.altParser)(g)(t.fail(e));
    };
  };

  c.optional = function (g) {
    return d.alt(t.altParser)(m.bind(t.bindParser)(g)(function (e) {
      return h.pure(t.applicativeParser)(p.unit);
    }))(h.pure(t.applicativeParser)(p.unit));
  };

  c.sepBy1 = function (g) {
    return function (e) {
      return m.bind(t.bindParser)(g)(function (l) {
        return m.bind(t.bindParser)(y(f.applySecond(t.applyParser)(e)(g)))(function (r) {
          return h.pure(t.applicativeParser)(b(l)(r));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var c = a["Text.Parsing.StringParser.CodePoints"],
      d = a["Control.Applicative"],
      h = a["Control.Bind"],
      f = a["Data.Char"],
      m = a["Data.Either"],
      q = a["Data.Enum"],
      k = a["Data.Maybe"],
      p = a["Data.Show"],
      t = a["Data.String.CodePoints"],
      y = a["Data.Unit"],
      b = a["Text.Parsing.StringParser"],
      g = a["Text.Parsing.StringParser.Combinators"],
      e = function () {
    var r = function () {
      var v = q.fromEnum(t.boundedEnumCodePoint);
      return function (D) {
        return f.fromCharCode(v(D));
      };
    }();

    return function (v) {
      var D = t.codePointAt(v.pos)(v.str);

      if (D instanceof k.Just) {
        var B = r(D.value0);
        if (B instanceof k.Just) return new m.Right({
          result: B.value0,
          suffix: {
            str: v.str,
            pos: v.pos + 1 | 0
          }
        });
        if (B instanceof k.Nothing) return new m.Left({
          pos: v.pos,
          error: b.ParseError.create("CodePoint " + (p.show(t.showCodePoint)(D.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [B.constructor.name]);
      }

      if (D instanceof k.Nothing) return new m.Left({
        pos: v.pos,
        error: new b.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [D.constructor.name]);
    };
  }(),
      l = function l(r) {
    return b["try"](h.bind(b.bindParser)(e)(function (v) {
      return r(v) ? d.pure(b.applicativeParser)(v) : b.fail("Character " + (p.show(p.showChar)(v) + " did not satisfy predicate"));
    }));
  };

  c.eof = function (r) {
    return r.pos < t.length(r.str) ? new m.Left({
      pos: r.pos,
      error: new b.ParseError("Expected EOF")
    }) : new m.Right({
      result: y.unit,
      suffix: r
    });
  };

  c.satisfy = l;

  c["char"] = function (r) {
    return g.withError(l(function (v) {
      return v === r;
    }))("Could not match character " + p.show(p.showChar)(r));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var c = a["Text.Email.Parser"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Data.Char"],
      k = a["Data.Foldable"],
      p = a["Data.Functor"],
      t = a["Data.List.Types"],
      y = a["Data.Maybe"],
      b = a["Data.Monoid"],
      g = a["Data.String.CodeUnits"],
      e = a["Data.String.Pattern"],
      l = a["Data.Unit"],
      r = a["Text.Parsing.StringParser"],
      v = a["Text.Parsing.StringParser.CodePoints"],
      D = a["Text.Parsing.StringParser.Combinators"],
      B = function (ha) {
    var Fa = y.fromJust();
    return function (sa) {
      return Fa(q.fromCharCode(sa));
    };
  }(),
      z = function z(ha) {
    return p.map(r.functorParser)(function () {
      var Fa = k.fold(t.foldableNonEmptyList)(b.monoidString),
          sa = p.map(t.functorNonEmptyList)(g.singleton);
      return function (ya) {
        return Fa(sa(ya));
      };
    }())(D.many1(v.satisfy(ha)));
  },
      u = function u(ha) {
    return m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(ha))(function () {
      return m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(E(ha)))(function () {
        return h.pure(r.applicativeParser)(l.unit);
      });
    });
  },
      E = function E(ha) {
    return d.alt(r.altParser)(u(ha))(h.pure(r.applicativeParser)(l.unit));
  },
      H = function H(ha) {
    return m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(v.satisfy(ha)))(function () {
      return m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(E(v.satisfy(ha))))(function () {
        return h.pure(r.applicativeParser)(l.unit);
      });
    });
  },
      G = v["char"](B(0)),
      J = v["char"]("\n");

  a = function a(ha) {
    return " " === ha || "\t" === ha;
  };

  var K = v.satisfy(a),
      N = H(a),
      S = function S(ha) {
    return function (Fa) {
      return function (sa) {
        return sa >= ha && sa <= Fa;
      };
    };
  };

  a = S(B(33))(B(126));

  var V = v.satisfy(a),
      L = function L(ha) {
    return function (Fa) {
      return g.contains(e.Pattern(g.singleton(Fa)))(ha);
    };
  },
      M = function M(ha) {
    return S(B(1))(B(8))(ha) || S(B(14))(B(31))(ha) || L("\x0B\f\x7F")(ha);
  },
      w = function w(ha) {
    return S(B(33))(B(39))(ha) || S(B(42))(B(91))(ha) || S(B(93))(B(126))(ha) || M(ha);
  },
      P = function P(ha) {
    return S(B(33))(B(90))(ha) || S(B(94))(B(126))(ha) || M(ha);
  },
      I = v.satisfy(M),
      F = v["char"]("\r"),
      A = p["void"](r.functorParser)(f.applySecond(r.applyParser)(F)(J)),
      Y = function () {
    var ha = u(f.applySecond(r.applyParser)(A)(N)),
        Fa = f.applySecond(r.applyParser)(N)(D.optional(f.applySecond(r.applyParser)(A)(N)));
    return d.alt(r.altParser)(Fa)(ha);
  }(),
      ra = function () {
    var ha = m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(v["char"]("\\")))(function () {
      return d.alt(r.altParser)(d.alt(r.altParser)(d.alt(r.altParser)(d.alt(r.altParser)(d.alt(r.altParser)(V)(K))(J))(F))(I))(G);
    });
    return m.bind(r.bindParser)(ha)(function (Fa) {
      return h.pure(r.applicativeParser)("\\" + g.singleton(Fa));
    });
  }(),
      Ba = d.alt(r.altParser)(z(function (ha) {
    return L(g.singleton(B(33)))(ha) || S(B(35))(B(91))(ha) || S(B(93))(B(126))(ha) || M(ha);
  }))(ra),
      Ca = function () {
    var ha = m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(v["char"]('"')))(function () {
      return m.bind(r.bindParser)(D.many(f.applySecond(r.applyParser)(D.optional(Y))(Ba)))(function (Fa) {
        return m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(D.optional(Y)))(function () {
          return m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(v["char"]('"')))(function () {
            return h.pure(r.applicativeParser)(Fa);
          });
        });
      });
    });
    return p.map(r.functorParser)(function (Fa) {
      return '"' + (k.fold(t.foldableList)(b.monoidString)(Fa) + '"');
    })(ha);
  }(),
      za = m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(v["char"]("(")))(function () {
    return m.discard(m.discardUnit)(r.bindParser)(E(d.alt(r.altParser)(d.alt(r.altParser)(d.alt(r.altParser)(H(w))(p["void"](r.functorParser)(ra)))(za))(Y)))(function () {
      return m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(v["char"](")")))(function () {
        return h.pure(r.applicativeParser)(l.unit);
      });
    });
  }),
      x = E(d.alt(r.altParser)(za)(Y));

  a = m.discard(m.discardUnit)(r.bindParser)(D.optional(x))(function () {
    return m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(v["char"]("[")))(function () {
      return m.bind(r.bindParser)(D.many(f.applySecond(r.applyParser)(D.optional(Y))(z(P))))(function (ha) {
        return m.discard(m.discardUnit)(r.bindParser)(D.optional(Y))(function () {
          return m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(v["char"]("]")))(function () {
            return m.discard(m.discardUnit)(r.bindParser)(D.optional(x))(function () {
              return h.pure(r.applicativeParser)("[" + (k.fold(t.foldableList)(b.monoidString)(ha) + "]"));
            });
          });
        });
      });
    });
  });

  var ka = function () {
    return z(function (ha) {
      return "0" <= ha && "9" >= ha || "a" <= ha && "z" >= ha || "A" <= ha && "Z" >= ha || L("!#$%&'*+/=?^_`{|}~-")(ha);
    });
  }(),
      pa = function () {
    var ha = m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(D.optional(x)))(function () {
      return m.bind(r.bindParser)(d.alt(r.altParser)(ka)(Ca))(function (Fa) {
        return m.discard(m.discardUnit)(r.bindParser)(p["void"](r.functorParser)(D.optional(x)))(function () {
          return h.pure(r.applicativeParser)(Fa);
        });
      });
    });
    ha = D.sepBy1(ha)(v["char"]("."));
    return p.map(r.functorParser)(k.intercalate(t.foldableNonEmptyList)(b.monoidString)("."))(ha);
  }(),
      R = d.alt(r.altParser)(pa)(a);

  a = m.bind(r.bindParser)(pa)(function (ha) {
    return m.bind(r.bindParser)(v["char"]("@"))(function () {
      return m.bind(r.bindParser)(R)(function (Fa) {
        return m.bind(r.bindParser)(v.eof)(function () {
          return h.pure(r.applicativeParser)({
            localPart: ha,
            domainPart: Fa
          });
        });
      });
    });
  });
  c.addrSpec = a;

  c.toString = function (ha) {
    return ha.localPart + ("@" + ha.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var c = a["Text.Email.Validate"],
      d = a["Data.Bifunctor"],
      h = a["Data.Either"],
      f = a["Data.Show"],
      m = a["Text.Email.Parser"],
      q = a["Text.Parsing.StringParser"];

  a = function () {
    var k = d.lmap(h.bifunctorEither)(f.show(q.showParseError));
    return function (p) {
      p = q.runParser(m.addrSpec)(p);
      return k(p);
    };
  }();

  c.validate = a;
})(PS);

(function (a) {
  a._validateURL = function (c) {
    return function (d) {
      if (!d || !/^https?:\/\//.test(d)) return "Unknown or missing protocol format in url: " + d;
      var h = document.createElement("a");
      h.href = d;

      if (c) {
        if (h.username) return "URL " + d + " contains a username: " + h.username;
        if (h.password) return "URL " + d + " contains a password: " + h.password;
      }

      return /\.[^0-9.]/.test(h.hostname) ? /(\s|^\.|\.$)/.test(h.hostname) ? "Hostname '" + h.href + "' contains whitespace in " + d : h.href.toLowerCase().replace(/\/+$/g, "") !== d.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + d + " doesn't match parsed href " + h.href : "SUCCESS" : "Invalid hostname '" + h.href + "' in " + d;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};

  var c = a["Text.URL.Validate"],
      d = a["Text.URL.Validate"],
      h = a["Data.Either"],
      f = a["Data.Maybe"],
      m = a["Data.String.NonEmpty.Internal"],
      q = function q(k) {
    return function (p) {
      var t = "SUCCESS" === p ? !0 : !1;

      if (t) {
        p = m.fromString(k);
        if (p instanceof f.Just) return new h.Right(p.value0);
        if (p instanceof f.Nothing) return new h.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [p.constructor.name]);
      }

      if (!t) return new h.Left(p);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [t.constructor.name]);
    };
  };

  c.parsePublicURL = function (k) {
    var p = d._validateURL(!0)(k);

    return q(k)(p);
  };

  c.urlToNEString = function (k) {
    return k;
  };

  c.urlToString = function (k) {
    return m.toString(k);
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
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Control.Plus"],
      k = a["Data.Array"],
      p = a["Data.Array.NonEmpty"],
      t = a["Data.Bounded"],
      y = a["Data.DateTime"],
      b = a["Data.Either"],
      g = a["Data.Either.Extra"],
      e = a["Data.Functor"],
      l = a["Data.Int"],
      r = a["Data.JSDate"],
      v = a["Data.Maybe"],
      D = a["Data.Natural"],
      B = a["Data.String.CodePoints"],
      z = a["Data.String.CodeUnits"],
      u = a["Data.String.NonEmpty.Internal"],
      E = a["Data.String.Utils"],
      H = a["Data.Traversable"],
      G = a["Data.XPath"],
      J = a["DataCite.Types.Common"],
      K = a.Effect,
      N = a["Effect.Exception"],
      S = a.Global,
      V = a["Metajelo.Types"],
      L = a["Metajelo.XPaths"],
      M = a["Text.Email.Validate"],
      w = a["Text.URL.Validate"],
      P = a["Web.DOM.Document.XPath"],
      I = a["Web.DOM.Document.XPath.ResultType"],
      F = a["Web.DOM.Element"],
      A = a["Web.DOM.Node"],
      Y = a["Web.DOM.NodeList"],
      ra = function ra(Q) {
    return "Audiovisual" === Q ? d.pure(b.applicativeEither)(J.Audiovisual.value) : "Dataset" === Q ? d.pure(b.applicativeEither)(J.Dataset.value) : "Event" === Q ? d.pure(b.applicativeEither)(J.Event.value) : "Image" === Q ? d.pure(b.applicativeEither)(J.Image.value) : "InteractiveResource" === Q ? d.pure(b.applicativeEither)(J.InteractiveResource.value) : "Model" === Q ? d.pure(b.applicativeEither)(J.Model.value) : "PhysicalObject" === Q ? d.pure(b.applicativeEither)(J.PhysicalObject.value) : "ResourceCollection" === Q ? d.pure(b.applicativeEither)(J.ResourceCollection.value) : "Service" === Q ? d.pure(b.applicativeEither)(J.Service.value) : "Software" === Q ? d.pure(b.applicativeEither)(J.Software.value) : "Sound" === Q ? d.pure(b.applicativeEither)(J.Sound.value) : "Text" === Q ? d.pure(b.applicativeEither)(J.Text.value) : "Workflow" === Q ? d.pure(b.applicativeEither)(J.Workflow.value) : "Other" === Q ? d.pure(b.applicativeEither)(J.Other.value) : b.Left.create("Unknown ResourceTypeGeneral: '" + (Q + "'"));
  },
      Ba = function Ba(Q) {
    return function (ba) {
      return function () {
        var aa = L.unsafeSingleNodeValue(Q)(ba)(G.xx(G.stringXPath)(L.resTypeP))(),
            la = Q.xeval.str(aa)(".")();
        aa = Q.xeval.str(aa)(G.at(G.stringXPath)(L.resTypeGenAT))();
        aa = L.rightOrThrow(ra(aa))();
        return {
          description: la,
          generalType: aa
        };
      };
    };
  },
      Ca = function Ca(Q) {
    return "IsCitedBy" === Q ? d.pure(b.applicativeEither)(J.IsCitedBy.value) : "Cites" === Q ? d.pure(b.applicativeEither)(J.Cites.value) : "IsSupplementTo" === Q ? d.pure(b.applicativeEither)(J.IsSupplementTo.value) : "IsSupplementedBy" === Q ? d.pure(b.applicativeEither)(J.IsSupplementedBy.value) : "IsContinuedBy" === Q ? d.pure(b.applicativeEither)(J.IsContinuedBy.value) : "Continues" === Q ? d.pure(b.applicativeEither)(J.Continues.value) : "IsNewVersionOf" === Q ? d.pure(b.applicativeEither)(J.IsNewVersionOf.value) : "IsPreviousVersionOf" === Q ? d.pure(b.applicativeEither)(J.IsPreviousVersionOf.value) : "IsPartOf" === Q ? d.pure(b.applicativeEither)(J.IsPartOf.value) : "HasPart" === Q ? d.pure(b.applicativeEither)(J.HasPart.value) : "IsReferencedBy" === Q ? d.pure(b.applicativeEither)(J.IsReferencedBy.value) : "References" === Q ? d.pure(b.applicativeEither)(J.References.value) : "IsDocumentedBy" === Q ? d.pure(b.applicativeEither)(J.IsDocumentedBy.value) : "Documents" === Q ? d.pure(b.applicativeEither)(J.Documents.value) : "IsCompiledBy" === Q ? d.pure(b.applicativeEither)(J.IsCompiledBy.value) : "Compiles" === Q ? d.pure(b.applicativeEither)(J.Compiles.value) : "IsVariantFormOf" === Q ? d.pure(b.applicativeEither)(J.IsVariantFormOf.value) : "IsOriginalFormOf" === Q ? d.pure(b.applicativeEither)(J.IsOriginalFormOf.value) : "IsIdenticalTo" === Q ? d.pure(b.applicativeEither)(J.IsIdenticalTo.value) : "HasMetadata" === Q ? d.pure(b.applicativeEither)(J.HasMetadata.value) : "IsMetadataFor" === Q ? d.pure(b.applicativeEither)(J.IsMetadataFor.value) : "Reviews" === Q ? d.pure(b.applicativeEither)(J.Reviews.value) : "IsReviewedBy" === Q ? d.pure(b.applicativeEither)(J.IsReviewedBy.value) : "IsDerivedFrom" === Q ? d.pure(b.applicativeEither)(J.IsDerivedFrom.value) : "IsSourceOf" === Q ? d.pure(b.applicativeEither)(J.IsSourceOf.value) : b.Left.create("Unknown RelationType: '" + (Q + "'"));
  },
      za = function za(Q) {
    return "Access" === Q ? d.pure(b.applicativeEither)(new v.Just(V.Access.value)) : "Collection" === Q ? d.pure(b.applicativeEither)(new v.Just(V.Collection.value)) : "Data" === Q ? d.pure(b.applicativeEither)(new v.Just(V.Data.value)) : "Metadata" === Q ? d.pure(b.applicativeEither)(new v.Just(V.Metadata.value)) : "Preservation" === Q ? d.pure(b.applicativeEither)(new v.Just(V.Preservation.value)) : "Submission" === Q ? d.pure(b.applicativeEither)(new v.Just(V.Submission.value)) : "Quality" === Q ? d.pure(b.applicativeEither)(new v.Just(V.Quality.value)) : "Terms of Use" === Q ? d.pure(b.applicativeEither)(new v.Just(V.TermsOfUse.value)) : "" === Q ? d.pure(b.applicativeEither)(v.Nothing.value) : b.Left.create("Unknown PolicyType: '" + (Q + "'"));
  },
      x = function x(Q) {
    return function (ba) {
      return function (aa) {
        return function () {
          var la = Q.xeval.any(aa)(G.xx(G.stringXPath)(ba))(I.ordered_node_snapshot_type)();
          la = P.snapshot(la)();
          la = H.traverse(H.traversableArray)(K.applicativeEffect)(function (fa) {
            return Q.xeval.str(fa)(".");
          })(la)();
          la = e.map(e.functorArray)(function (fa) {
            return L.readNonEmptyString(ba)(fa);
          })(la);
          g.catLefts(m.monadArray)(q.plusArray)(la);
          la = g.catRights(m.monadArray)(q.plusArray)(la);
          return L.readNonEmptyArray(ba + "s")(la);
        };
      };
    };
  },
      ka = function ka(Q) {
    return "commercial" === Q ? d.pure(b.applicativeEither)(V.Commercial.value) : "non-profit" === Q ? d.pure(b.applicativeEither)(V.NonProfit.value) : "governmental" === Q ? d.pure(b.applicativeEither)(V.Governmental.value) : b.Left.create("Unknown InstitutionType: '" + (Q + "'"));
  },
      pa = function pa(Q) {
    return "dataCustodian" === Q ? d.pure(b.applicativeEither)(new v.Just(V.DataCustodian.value)) : "" === Q ? d.pure(b.applicativeEither)(v.Nothing.value) : b.Left.create("Unknown InstitutionContactType: '" + (Q + "'"));
  },
      R = function R(Q) {
    return "ARK" === Q ? d.pure(b.applicativeEither)(J.ARK.value) : "arXiv" === Q ? d.pure(b.applicativeEither)(J.ArXiv.value) : "bibcode" === Q ? d.pure(b.applicativeEither)(J.Bibcode.value) : "DOI" === Q ? d.pure(b.applicativeEither)(J.DOI.value) : "EAN13" === Q ? d.pure(b.applicativeEither)(J.EAN13.value) : "EISSN" === Q ? d.pure(b.applicativeEither)(J.EISSN.value) : "Handle" === Q ? d.pure(b.applicativeEither)(J.Handle.value) : "IGSN" === Q ? d.pure(b.applicativeEither)(J.IGSN.value) : "ISBN" === Q ? d.pure(b.applicativeEither)(J.ISBN.value) : "ISSN" === Q ? d.pure(b.applicativeEither)(J.ISSN.value) : "ISTC" === Q ? d.pure(b.applicativeEither)(J.ISTC.value) : "LISSN" === Q ? d.pure(b.applicativeEither)(J.LISSN.value) : "LSID" === Q ? d.pure(b.applicativeEither)(J.LSID.value) : "PMID" === Q ? d.pure(b.applicativeEither)(J.PMID.value) : "PURL" === Q ? d.pure(b.applicativeEither)(J.PURL.value) : "UPC" === Q ? d.pure(b.applicativeEither)(J.UPC.value) : "URL" === Q ? d.pure(b.applicativeEither)(J.URL.value) : "URN" === Q ? d.pure(b.applicativeEither)(J.URN.value) : b.Left.create("Unknown IdentifierType: '" + (Q + "'"));
  },
      ha = function ha(Q) {
    return function (ba) {
      var aa = function aa(fa) {
        return function () {
          var ia = Q.xeval.str(fa)(G.at(G.stringXPath)(L.idTypeAT))();
          return L.rightOrThrow(R(ia))();
        };
      },
          la = function la(fa) {
        return function () {
          var ia = Q.xeval.str(fa)(".")();
          return L.rightOrThrow(L.readNonEmptyString("InstitutionID")(ia))();
        };
      };

      return function () {
        var fa = L.unsafeSingleNodeValue(Q)(ba)(G.xx(G.stringXPath)(L.instIdP))(),
            ia = la(fa)();
        fa = aa(fa)();
        return {
          identifier: ia,
          identifierType: fa
        };
      };
    };
  },
      Fa = function Fa(Q) {
    var ba = function ba(ia) {
      return function () {
        var va = Q.xeval.str(ia)(G.at(G.stringXPath)(L.relTypeAT))();
        return L.rightOrThrow(Ca(va))();
      };
    },
        aa = function aa(ia) {
      return function () {
        var va = Q.xeval.str(ia)(G.at(G.stringXPath)(L.relIdTypeAT))();
        return L.rightOrThrow(R(va))();
      };
    },
        la = function la(ia) {
      return function () {
        var va = Q.xeval.str(ia)(".")();
        return L.rightOrThrow(L.readNonEmptyString("RelatedIdentifier")(va))();
      };
    },
        fa = function fa(ia) {
      return function () {
        var va = la(ia)(),
            wa = aa(ia)(),
            C = ba(ia)();
        return {
          identifier: va,
          identifierType: wa,
          relationType: C
        };
      };
    };

    return function () {
      var ia = Q.xevalRoot.any(L.relIdRootP)(I.ordered_node_snapshot_type)();
      ia = P.snapshot(ia)();
      ia = H.sequence(H.traversableArray)(K.applicativeEffect)(e.map(e.functorArray)(fa)(ia))();
      ia = p.fromArray(ia);
      if (ia instanceof v.Just) return ia.value0;
      if (ia instanceof v.Nothing) return N["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 112, column 3 - line 114, column 67): " + [ia.constructor.name]);
    };
  },
      sa = function sa(Q) {
    return function (ba) {
      var aa = function aa(ia) {
        return function () {
          var va = Q.xeval.str(ia)(G.at(G.stringXPath)(L.resIdTypeAT))();
          return L.rightOrThrow(R(va))();
        };
      },
          la = function la(ia) {
        return function () {
          var va = Q.xeval.str(ia)(".")();
          return L.rightOrThrow(L.readNonEmptyString("ResourceID")(va))();
        };
      },
          fa = function fa(ia) {
        return function (va) {
          return H.sequence(H.traversableMaybe)(K.applicativeEffect)(f.bind(v.bindMaybe)(ia)(function (wa) {
            return f.bind(v.bindMaybe)(va)(function (C) {
              return d.pure(v.applicativeMaybe)(h.lift2(K.applyEffect)(function (oa) {
                return function (Ka) {
                  return {
                    identifier: oa,
                    identifierType: Ka
                  };
                };
              })(wa)(C));
            });
          }));
        };
      };

      return function () {
        var ia = Q.xeval.nodeMay(ba)(G.xx(G.stringXPath)(L.resIdP))(),
            va = e.map(v.functorMaybe)(la)(ia);
        ia = e.map(v.functorMaybe)(aa)(ia);
        return fa(va)(ia)();
      };
    };
  },
      ya = function ya(Q) {
    return function () {
      var ba = Q.xevalRoot.str(L.idRootP)();
      ba = L.rightOrThrow(L.readNonEmptyString("Identifier")(ba))();
      var aa = Q.xevalRoot.str(L.idTypeRootAP)();
      aa = L.rightOrThrow(R(aa))();
      return {
        identifier: ba,
        identifierType: aa
      };
    };
  },
      ua = function ua(Q) {
    return function (ba) {
      var aa = function aa(la) {
        return function () {
          var fa = Q.xeval.str(la)(".")();
          return L.rightOrThrow(L.readNonEmptyString("Format")(fa))();
        };
      };

      return function () {
        var la = Q.xeval.any(ba)(G.pathAppendNSx(G.stringXPath)(G.xx(G.stringXPath)(L.formatCP))(L.formatP))(I.ordered_node_snapshot_type)();
        la = P.snapshot(la)();
        return H.traverse(H.traversableArray)(K.applicativeEffect)(aa)(la)();
      };
    };
  },
      Aa = function Aa(Q) {
    return "0" === Q ? d.pure(b.applicativeEither)(!1) : "1" === Q ? d.pure(b.applicativeEither)(!0) : "false" === Q ? d.pure(b.applicativeEither)(!1) : "true" === Q ? d.pure(b.applicativeEither)(!0) : b.Left.create("Invalid xs:boolean value: '" + (Q + "'"));
  },
      Ia = function Ia(Q) {
    return "" === Q ? d.pure(b.applicativeEither)(v.Nothing.value) : e.map(b.functorEither)(v.Just.create)(Aa(Q));
  },
      ea = function ea(Q) {
    return function (ba) {
      var aa = G.pathAppendNSx(G.stringXPath)(G.xx(G.stringXPath)(L.instPolicyCP))(L.instPolicyP),
          la = function la(fa) {
        return function () {
          var ia = A.childNodes(fa)();
          ia = Y.toArray(ia)();
          ia = k.head(k.filter(function (Ha) {
            return !E.startsWith("#")(A.nodeName(Ha));
          })(ia));
          if (ia instanceof v.Just) var va = ia.value0;else if (ia instanceof v.Nothing) va = N["throw"]("Couldn't find child node of " + A.nodeName(fa))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 394, column 30 - line 396, column 80): " + [ia.constructor.name]);
          var wa = Q.xeval.str(va)(".")(),
              C = L.rightOrThrow(L.readNonEmptyString("Policy")(wa))();

          ia = function () {
            var Ha = e.map(v.functorMaybe)(F.localName)(F.fromNode(va));
            if (Ha instanceof v.Just && Ha.value0 === L.freeTextPolicyP) return new V.FreeTextPolicy(C);

            if (Ha instanceof v.Just && Ha.value0 === L.refPolicyP) {
              Ha = w.parsePublicURL(wa);
              if (Ha instanceof b.Left) return N["throw"]("In refPolicy URL parsing: " + Ha.value0)();
              if (Ha instanceof b.Right) return new V.RefPolicy(Ha.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 401, column 37 - line 403, column 45): " + [Ha.constructor.name]);
            }

            if (Ha instanceof v.Just) return N["throw"]("invalid element '" + (Ha.value0 + "' as child of institutionPolicy"))();
            if (Ha instanceof v.Nothing) return N["throw"]("unable to convert policy child Node with name '" + (A.nodeName(va) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 399, column 17 - line 407, column 56): " + [Ha.constructor.name]);
          }();

          var oa = Q.xeval.str(fa)(G.at(G.stringXPath)(L.polTypeAT))();
          oa = L.rightOrThrow(za(oa))();
          var Ka = Q.xeval.str(fa)(G.at(G.stringXPath)(L.appliesToProdAT))();
          Ka = L.rightOrThrow(Ia(Ka))();
          return {
            policy: ia,
            policyType: oa,
            appliesToProduct: Ka
          };
        };
      };

      return function () {
        var fa = Q.xeval.any(ba)(aa)(I.ordered_node_snapshot_type)();
        fa = P.snapshot(fa)();
        fa = H.sequence(H.traversableArray)(K.applicativeEffect)(e.map(e.functorArray)(la)(fa))();
        fa = p.fromArray(fa);
        if (fa instanceof v.Just) return fa.value0;
        if (fa instanceof v.Nothing) return N["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 381, column 3 - line 383, column 67): " + [fa.constructor.name]);
      };
    };
  },
      ma = function ma(Q) {
    return function (ba) {
      var aa = function aa(fa) {
        return function () {
          var ia = Q.xeval.str(fa)(G.xx(G.stringXPath)(L.pubYearP))();
          ia = L.rightOrThrow(L.readNonEmptyString("PubYear")(ia))();
          return D.intToNat(l.round(S.readInt(10)(u.toString(ia))));
        };
      },
          la = G.xx(G.stringXPath)(L.basicMetaP);

      return function () {
        var fa = L.unsafeSingleNodeValue(Q)(ba)(la)(),
            ia = f.bindFlipped(K.bindEffect)(L.rightOrThrow)(x(Q)(L.titleP)(fa))(),
            va = f.bindFlipped(K.bindEffect)(L.rightOrThrow)(x(Q)(L.creatorP)(fa))();
        fa = aa(fa)();
        return {
          titles: ia,
          creators: va,
          publicationYear: fa
        };
      };
    };
  },
      da = function da(Q) {
    var ba = u.toString(Q);
    return function () {
      var aa = z.stripSuffix("Z")(ba);
      if (aa instanceof v.Just) aa = 10 >= B.length(aa.value0) ? aa.value0 + "T00:00:00.000Z" : ba;else if (aa instanceof v.Nothing) aa = ba;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 98, column 24 - line 100, column 23): " + [aa.constructor.name]);
      aa = r.parse(aa)();
      return v.fromMaybe(t.bottom(y.boundedDateTime))(r.toDateTime(aa));
    };
  },
      O = function O(Q) {
    return function () {
      var ba = Q.xevalRoot.str(L.dateRootP)();
      ba = L.rightOrThrow(L.readNonEmptyString("Date")(ba))();
      return da(ba)();
    };
  },
      Z = function Z(Q) {
    return function () {
      var ba = Q.xevalRoot.str(L.lastModRootP)();
      ba = L.rightOrThrow(L.readNonEmptyString("ModDate")(ba))();
      return da(ba)();
    };
  },
      xa = function xa(Q) {
    return function (ba) {
      return function (aa) {
        return function () {
          var la = Q.xeval.str(aa)(ba)();
          la = w.parsePublicURL(la);
          if (la instanceof b.Left) return N["throw"](la.value0)();
          if (la instanceof b.Right) return la.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 442, column 3 - line 444, column 26): " + [la.constructor.name]);
        };
      };
    };
  },
      Ga = function Ga(Q) {
    return function (ba) {
      var aa = function aa(va) {
        return function () {
          var wa = va();
          return L.rightOrThrow(L.readNonEmptyString("SuperOrg")(wa))();
        };
      },
          la = function la(va) {
        return function () {
          var wa = Q.xeval.nodeMay(va)(G.xx(G.stringXPath)(L.superOrgNameP))();
          return H.traverse(H.traversableMaybe)(K.applicativeEffect)(function (C) {
            return aa(Q.xeval.str(C)("."));
          })(wa)();
        };
      },
          fa = function fa(va) {
        return function () {
          var wa = L.unsafeSingleNodeValue(Q)(va)(G.xx(G.stringXPath)(L.instSustainP))(),
              C = xa(Q)(G.xx(G.stringXPath)(L.missionUrlP))(wa)();
          wa = xa(Q)(G.xx(G.stringXPath)(L.fundingUrlP))(wa)();
          return {
            missionStatementURL: C,
            fundingStatementURL: wa
          };
        };
      },
          ia = function ia(va) {
        var wa = G.xx(G.stringXPath)(L.instContactP);
        return function () {
          var C = L.unsafeSingleNodeValue(Q)(va)(wa)(),
              oa = Q.xeval.str(C)(G.at(G.stringXPath)(L.instContactTypeAT))();
          oa = L.rightOrThrow(pa(oa))();
          C = Q.xeval.str(C)(".")();
          C = M.validate(C);
          if (C instanceof b.Left) C = N["throw"]("Error in validating email address for InstitutionContact: " + C.value0)();else if (C instanceof b.Right) C = C.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 345, column 23 - line 349, column 28): " + [C.constructor.name]);
          return {
            emailAddress: C,
            contactType: oa
          };
        };
      };

      return function () {
        var va = L.unsafeSingleNodeValue(Q)(ba)(G.xx(G.stringXPath)(L.locP))(),
            wa = ha(Q)(va)(),
            C = f.join(K.bindEffect)(e.mapFlipped(K.functorEffect)(Q.xeval.str(va)(G.xx(G.stringXPath)(L.instNameP)))(function (bb) {
          return L.rightOrThrow(L.readNonEmptyString("Institution Name")(bb));
        }))(),
            oa = Q.xeval.str(va)(G.xx(G.stringXPath)(L.instTypeP))();
        oa = L.rightOrThrow(ka(oa))();
        var Ka = la(va)(),
            Ha = ia(va)(),
            Pa = fa(va)(),
            Ta = ea(Q)(va)();
        va = Q.xeval.str(va)(G.xx(G.stringXPath)(L.versioningP))();
        va = L.rightOrThrow(Aa(va))();
        return {
          institutionID: wa,
          institutionName: C,
          institutionType: oa,
          superOrganizationName: Ka,
          institutionContact: Ha,
          institutionSustainability: Pa,
          institutionPolicies: Ta,
          versioning: va
        };
      };
    };
  },
      X = function X(Q) {
    return function (ba) {
      var aa = function aa(fa) {
        return function () {
          var ia = Q.xeval.str(fa)(G.at(G.stringXPath)(L.relTypeAT))();
          return L.rightOrThrow(Ca(ia))();
        };
      },
          la = function la(fa) {
        return function (ia) {
          return H.sequence(H.traversableMaybe)(K.applicativeEffect)(f.bind(v.bindMaybe)(fa)(function (va) {
            return f.bind(v.bindMaybe)(ia)(function (wa) {
              return d.pure(v.applicativeMaybe)(h.lift2(K.applyEffect)(function (C) {
                return function (oa) {
                  return {
                    url: C,
                    relationType: oa
                  };
                };
              })(va)(wa));
            });
          }));
        };
      };

      return function () {
        var fa = Q.xeval.nodeMay(ba)(G.xx(G.stringXPath)(L.resMetaSourceP))(),
            ia = e.map(v.functorMaybe)(xa(Q)("."))(fa);
        fa = e.map(v.functorMaybe)(aa)(fa);
        return la(ia)(fa)();
      };
    };
  },
      Oa = function Oa(Q) {
    var ba = function ba(aa) {
      return function () {
        var la = ma(Q)(aa)(),
            fa = sa(Q)(aa)(),
            ia = Ba(Q)(aa)(),
            va = ua(Q)(aa)(),
            wa = X(Q)(aa)(),
            C = Ga(Q)(aa)();
        return {
          basicMetadata: la,
          resourceID: fa,
          resourceType: ia,
          format: va,
          resourceMetadataSource: wa,
          location: C
        };
      };
    };

    return function () {
      var aa = Q.xevalRoot.any(L.sProdRootP)(I.ordered_node_snapshot_type)();
      aa = P.snapshot(aa)();
      aa = H.sequence(H.traversableArray)(K.applicativeEffect)(e.map(e.functorArray)(ba)(aa))();
      aa = p.fromArray(aa);
      if (aa instanceof v.Just) return aa.value0;
      if (aa instanceof v.Nothing) return N["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 170, column 3 - line 172, column 70): " + [aa.constructor.name]);
    };
  };

  c.readRecord = function (Q) {
    return function () {
      var ba = ya(Q)(),
          aa = O(Q)(),
          la = Z(Q)(),
          fa = Fa(Q)(),
          ia = Oa(Q)();
      return {
        identifier: ba,
        date: aa,
        lastModified: la,
        relatedIdentifiers: fa,
        supplementaryProducts: ia
      };
    };
  };

  c.readIdentifierType = R;
  c.parseDate = da;
  c.readRelationType = Ca;
  c.readResourceTypeGeneral = ra;
  c.readInstitutionType = ka;
  c.readInstitutionContactType = pa;
  c.readPolicyType = za;
  c.readBoolean = Aa;
})(PS);

(function (a) {
  a.copyToClipboard = function (c) {
    return function () {
      var d = document.createElement("textarea");
      d.type = "text";
      d.value = c;
      d.style.position = "absolute";
      d.style.left = -1E4;
      document.body.appendChild(d);
      d.select();
      document.execCommand("copy");
      document.body.removeChild(d);
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

  var c = a["Metajelo.XPaths.Write"],
      d = a["Control.Applicative"],
      h = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Foldable"],
      m = a["Data.Functor"],
      q = a["Data.JSDate"],
      k = a["Data.Maybe"],
      p = a["Data.Natural"],
      t = a["Data.Show"],
      y = a["Data.Traversable"],
      b = a["Data.Unit"],
      g = a["Data.XPath"],
      e = a["DataCite.Types.Common"],
      l = a.Effect,
      r = a["Metajelo.Types"],
      v = a["Metajelo.XPaths"],
      D = a["Nonbili.DOM"],
      B = a["Text.Email.Parser"],
      z = a["Text.URL.Validate"],
      u = a["Web.DOM.Document"],
      E = a["Web.DOM.Element"],
      H = a["Web.DOM.Node"],
      G = function G(ea) {
    return function (ma) {
      return function (da) {
        return function (O) {
          var Z = E.fromNode(da);
          return function () {
            y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(Z)(function (xa) {
              return E.setAttribute(ea)(t.show(e.showIdentifierType)(O))(xa);
            }))();
            return b.unit;
          };
        };
      };
    };
  },
      J = a["Data.String.NonEmpty.Internal"].toString,
      K = function K(ea) {
    return function (ma) {
      return function (da) {
        return function (O) {
          return function () {
            H.setTextContent(J(O.identifier))(da)();
            return G(ea)(ma)(da)(O.identifierType)();
          };
        };
      };
    };
  },
      N = function N(ea) {
    return function (ma) {
      return function () {
        var da = v.unsafeSingleNodeValue(ea)(ea.recNode)(g.xx(g.stringXPath)(v.idP))();
        return K(v.idTypeAT)(ea)(da)(ma)();
      };
    };
  },
      S = function S(ea) {
    return function (ma) {
      return function () {
        y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.map(k.functorMaybe)(H.setTextContent(J(ea)))(ma))();
        return b.unit;
      };
    };
  },
      V = function V(ea) {
    return function () {
      var ma = q.toISOString(q.fromDateTime(ea))();
      return v.rightOrThrow(v.readNonEmptyString("(generic date)")(ma))();
    };
  },
      L = function L(ea) {
    return function (ma) {
      return function () {
        var da = V(ma)(),
            O = ea.xevalRoot.nodeMay(v.dateRootP)();
        return S(da)(O)();
      };
    };
  },
      M = function M(ea) {
    return function (ma) {
      return function () {
        var da = V(ma)(),
            O = ea.xevalRoot.nodeMay(v.lastModRootP)();
        return S(da)(O)();
      };
    };
  },
      w = function w(ea) {
    return function (ma) {
      var da = E.prefix(ea.recElem);
      return function () {
        if (da instanceof k.Just) var O = da.value0 + ":";else if (da instanceof k.Nothing) O = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 250, column 20 - line 252, column 18): " + [da.constructor.name]);
        O += ma;
        return u.createElementNS(new k.Just(ea.ns))(O)(ea.doc)();
      };
    };
  },
      P = function P(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = w(ea)(da)();
          H.appendChild(E.toNode(O))(ma)();
          return O;
        };
      };
    };
  },
      I = function I(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = P(ea)(ma)(v.instContactP)();
          y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(da.contactType)(function (Z) {
            return E.setAttribute(v.instContactTypeAT)(t.show(r.showInstitutionContactType)(Z))(O);
          }))();
          return H.setTextContent(B.toString(da.emailAddress))(E.toNode(O))();
        };
      };
    };
  },
      F = function F(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = m.map(l.functorEffect)(E.toNode)(P(ea)(ma)(v.instIdP))();
          return K(v.idTypeAT)(ea)(O)(da)();
        };
      };
    };
  },
      A = function A(ea) {
    return function (ma) {
      return f.for_(l.applicativeEffect)(h.foldableNonEmptyArray)(ma)(function (da) {
        return function () {
          var O = P(ea)(ea.recNode)(v.relIdP)(),
              Z = E.toNode(O);
          H.setTextContent(J(da.identifier))(Z)();
          E.setAttribute(v.relIdTypeAT)(t.show(e.showIdentifierType)(da.identifierType))(O)();
          return E.setAttribute(v.relTypeAT)(t.show(e.showRelationType)(da.relationType))(O)();
        };
      });
    };
  },
      Y = function Y(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = m.map(l.functorEffect)(E.toNode)(P(ea)(ma)(v.resIdP))();
          return K(v.resIdTypeAT)(ea)(O)(da)();
        };
      };
    };
  },
      ra = function ra(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = P(ea)(ma)(v.resMetaSourceP)();
          H.setTextContent(z.urlToString(da.url))(E.toNode(O))();
          return E.setAttribute(v.relTypeAT)(t.show(e.showRelationType)(da.relationType))(O)();
        };
      };
    };
  },
      Ba = function Ba(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = P(ea)(ma)(v.resTypeP)();
          H.setTextContent(da.description)(E.toNode(O))();
          return E.setAttribute(v.resTypeGenAT)(t.show(e.showResourceTypeGeneral)(da.generalType))(O)();
        };
      };
    };
  },
      Ca = function Ca(ea) {
    return function (ma) {
      return function (da) {
        return function (O) {
          return function () {
            var Z = m.map(l.functorEffect)(E.toNode)(P(ma)(da)(ea))();
            return H.setTextContent(O)(Z)();
          };
        };
      };
    };
  },
      za = function za(ea) {
    return function (ma) {
      return function (da) {
        return function (O) {
          return Ca(ea)(ma)(da)(J(O));
        };
      };
    };
  },
      x = function x(ea) {
    return function (ma) {
      return function (da) {
        return f.for_(l.applicativeEffect)(h.foldableNonEmptyArray)(da)(function (O) {
          return za(v.creatorP)(ea)(ma)(O);
        });
      };
    };
  },
      ka = function ka(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = m.map(l.functorEffect)(E.toNode)(P(ea)(ma)(v.formatCP))();
          return f.for_(l.applicativeEffect)(f.foldableArray)(da)(function (Z) {
            return za(v.formatP)(ea)(O)(Z);
          })();
        };
      };
    };
  },
      pa = function pa(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = P(ea)(ma)(v.instPolicyP)(),
              Z = E.toNode(O);
          y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(da.policyType)(function (xa) {
            return E.setAttribute(v.polTypeAT)(t.show(r.showPolicyType)(xa))(O);
          }))();
          y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(da.appliesToProduct)(function (xa) {
            return E.setAttribute(v.appliesToProdAT)(t.show(t.showBoolean)(xa))(O);
          }))();
          if (da.policy instanceof r.FreeTextPolicy) return za(v.freeTextPolicyP)(ea)(Z)(da.policy.value0)();
          if (da.policy instanceof r.RefPolicy) return za(v.refPolicyP)(ea)(Z)(z.urlToNEString(da.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 217, column 3 - line 220, column 27): " + [da.policy.constructor.name]);
        };
      };
    };
  },
      R = function R(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = m.map(l.functorEffect)(E.toNode)(P(ea)(ma)(v.instPolicyCP))();
          return f.for_(l.applicativeEffect)(h.foldableNonEmptyArray)(da)(function (Z) {
            return pa(ea)(O)(Z);
          })();
        };
      };
    };
  },
      ha = function ha(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = m.map(l.functorEffect)(E.toNode)(P(ea)(ma)(v.instSustainP))();
          za(v.missionUrlP)(ea)(O)(z.urlToNEString(da.missionStatementURL))();
          return za(v.fundingUrlP)(ea)(O)(z.urlToNEString(da.fundingStatementURL))();
        };
      };
    };
  },
      Fa = function Fa(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = P(ea)(ma)(v.locP)(),
              Z = E.toNode(O);
          F(ea)(Z)(da.institutionID)();
          za(v.instNameP)(ea)(Z)(da.institutionName)();
          Ca(v.instTypeP)(ea)(Z)(t.show(r.showInstitutionType)(da.institutionType))();
          y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(da.superOrganizationName)(function (xa) {
            return za(v.superOrgNameP)(ea)(Z)(xa);
          }))();
          I(ea)(Z)(da.institutionContact)();
          ha(ea)(Z)(da.institutionSustainability)();
          R(ea)(Z)(da.institutionPolicies)();
          return Ca(v.versioningP)(ea)(Z)(t.show(t.showBoolean)(da.versioning))();
        };
      };
    };
  },
      sa = function sa(ea) {
    return function (ma) {
      return function (da) {
        return f.for_(l.applicativeEffect)(h.foldableNonEmptyArray)(da)(function (O) {
          return za(v.titleP)(ea)(ma)(O);
        });
      };
    };
  },
      ya = function ya(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var O = m.map(l.functorEffect)(E.toNode)(P(ea)(ma)(v.basicMetaP))();
          sa(ea)(O)(da.titles)();
          x(ea)(O)(da.creators)();
          O = m.map(l.functorEffect)(E.toNode)(P(ea)(O)(v.pubYearP))();
          return H.setTextContent(t.show(p.showNatural)(da.publicationYear))(O)();
        };
      };
    };
  },
      ua = function ua(ea) {
    return function (ma) {
      return function () {
        var da = v.unsafeSingleNodeValue(ea)(ea.recNode)(g.xx(g.stringXPath)(v.sProdCP))(),
            O = m.map(l.functorEffect)(E.toNode)(P(ea)(da)(v.sProdP))();
        ya(ea)(O)(ma.basicMetadata)();
        y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(ma.resourceID)(function (Z) {
          return Y(ea)(O)(Z);
        }))();
        Ba(ea)(O)(ma.resourceType)();
        ka(ea)(O)(ma.format)();
        y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(ma.resourceMetadataSource)(function (Z) {
          return ra(ea)(O)(Z);
        }))();
        return Fa(ea)(O)(ma.location)();
      };
    };
  },
      Aa = function Aa(ea) {
    return function (ma) {
      return f.for_(l.applicativeEffect)(h.foldableNonEmptyArray)(ma)(function (da) {
        return ua(ea)(da);
      });
    };
  },
      Ia = function Ia(ea) {
    return function (ma) {
      return function () {
        N(ea)(ma.identifier)();
        L(ea)(ma.date)();
        M(ea)(ma.lastModified)();
        A(ea)(ma.relatedIdentifiers)();
        return Aa(ea)(ma.supplementaryProducts)();
      };
    };
  };

  c.recordToString = function (ea) {
    return function () {
      var ma = v.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      Ia(ma)(ea)();
      ma = u.documentElement(ma.doc)();
      return k.maybe(d.pure(l.applicativeEffect)(""))(D.outerHTML)(ma)();
    };
  };

  c.dateTimeToStr = V;
})(PS);

(function (a) {
  a.unsafeGet = function (c) {
    return function (d) {
      return function () {
        return d[c];
      };
    };
  };
})(PS["React.SyntheticEvent"] = PS["React.SyntheticEvent"] || {});

(function (a) {
  a["React.SyntheticEvent"] = a["React.SyntheticEvent"] || {};
  var c = a["React.SyntheticEvent"],
      d = a["React.SyntheticEvent"],
      h = a["Data.Symbol"];

  a = function (f) {
    return function (m) {
      return function (q) {
        return function (k) {
          return d.unsafeGet(h.reflectSymbol(m)(q))(k);
        };
      };
    };
  }()(new h.IsSymbol(function () {
    return "target";
  }))(h.SProxy.value);

  c.target = a;
})(PS);

(function (a) {
  a.children = function (c) {
    return function (d) {
      return function () {
        return d[c];
      };
    };
  }("children");
})(PS["Web.DOM.ParentNode"] = PS["Web.DOM.ParentNode"] || {});

(function (a) {
  a["Web.DOM.ParentNode"] = a["Web.DOM.ParentNode"] || {};
  a["Web.DOM.ParentNode"].children = a["Web.DOM.ParentNode"].children;
})(PS);

(function (a) {
  a._files = function (c) {
    return function () {
      return c.files;
    };
  };

  a.value = function (c) {
    return function () {
      return c.value;
    };
  };

  a.setValue = function (c) {
    return function (d) {
      return function () {
        d.value = c;
      };
    };
  };
})(PS["Web.HTML.HTMLInputElement"] = PS["Web.HTML.HTMLInputElement"] || {});

(function (a) {
  a["Web.HTML.HTMLInputElement"] = a["Web.HTML.HTMLInputElement"] || {};
  var c = a["Web.HTML.HTMLInputElement"],
      d = a["Web.HTML.HTMLInputElement"],
      h = a["Data.Functor"],
      f = a["Data.Nullable"],
      m = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("HTMLInputElement");

  var q = function () {
    var k = h.map(m.functorEffect)(f.toMaybe);
    return function (p) {
      return k(d._files(p));
    };
  }();

  c.fromElement = a;
  c.files = q;
  c.value = d.value;
  c.setValue = d.setValue;
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var c = a["Metajelo.FormUtil"],
      d = a["Concur.Core.FRP"],
      h = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Props"],
      m = a["Concur.Core.Types"],
      q = a["Concur.React.DOM"],
      k = a["Concur.React.Props"],
      p = a["Control.Alt"],
      t = a["Control.Applicative"],
      y = a["Control.Apply"],
      b = a["Control.Bind"],
      g = a["Control.Cofree"],
      e = a["Control.Plus"],
      l = a["Data.Array"],
      r = a["Data.Array.NonEmpty"],
      v = a["Data.Bifunctor"],
      D = a["Data.Bounded"],
      B = a["Data.Either"],
      z = a["Data.Enum"],
      u = a["Data.Eq"],
      E = a["Data.Foldable"],
      H = a["Data.Functor"],
      G = a["Data.Generic.Rep"],
      J = a["Data.Generic.Rep.Bounded"],
      K = a["Data.Generic.Rep.Enum"],
      N = a["Data.Generic.Rep.Eq"],
      S = a["Data.Generic.Rep.Ord"],
      V = a["Data.Generic.Rep.Show"],
      L = a["Data.Int"],
      M = a["Data.Maybe"],
      w = a["Data.Monoid"],
      P = a["Data.Natural"],
      I = a["Data.Ord"],
      F = a["Data.Profunctor.Strong"],
      A = a["Data.Semigroup"],
      Y = a["Data.Show"],
      ra = a["Data.String.Common"],
      Ba = a["Data.String.NonEmpty.Internal"],
      Ca = a["Data.Symbol"],
      za = a["Data.Traversable"],
      x = a["Data.Tuple"],
      ka = a["Data.Unfoldable1"],
      pa = a["Data.Unit"],
      R = a["DataCite.Types.Common"],
      ha = a.Effect,
      Fa = a["Effect.Class"],
      sa = a["Effect.Exception"],
      ya = a["Effect.Now"],
      ua = a["Effect.Unsafe"],
      Aa = a["Foreign.Object"],
      Ia = a.Global,
      ea = a["Metajelo.CSS.UI.ClassProps"],
      ma = a["Metajelo.SchemaInfo"],
      da = a["Metajelo.Types"],
      O = a["Metajelo.XPaths.Read"],
      Z = a["Metajelo.XPaths.Write"],
      xa = a["React.SyntheticEvent"],
      Ga = a["Text.Email.Parser"],
      X = a["Text.Email.Validate"],
      Oa = a["Text.URL.Validate"],
      Q = a["Web.DOM.Document"],
      ba = a["Web.DOM.Element"],
      aa = a["Web.DOM.HTMLCollection"],
      la = a["Web.DOM.NonElementParentNode"],
      fa = a["Web.DOM.ParentNode"],
      ia = a["Web.HTML"],
      va = a["Web.HTML.HTMLDocument"],
      wa = a["Web.HTML.HTMLInputElement"],
      C = a["Web.HTML.Window"],
      oa = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      Ka = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      Ha = function () {
    function T(ca) {
      this.value0 = ca;
    }

    T.create = function (ca) {
      return new T(ca);
    };

    return T;
  }(),
      Pa = function () {
    function T(ca) {
      this.value0 = ca;
    }

    T.create = function (ca) {
      return new T(ca);
    };

    return T;
  }(),
      Ta = function Ta(T, ca, Ja) {
    this.fromOptionValue = T;
    this.toOptionLabel = ca;
    this.toOptionValue = Ja;
  },
      bb = function bb() {
    var T = ia.window();
    T = C.document(T)();
    return va.toDocument(T);
  },
      cb = function cb(T) {
    if (T instanceof Ha || T instanceof Pa) return T.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 376, column 1 - line 376, column 34): " + [T.constructor.name]);
  },
      hb = function hb(T) {
    return q.input(h.widgetLiftWidget)([k.defaultValue(T), H.map(f.functorProps)(k.unsafeTargetValue)(k.onChange)]);
  },
      ib = function ib(T) {
    return b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(T)(function (ca) {
      return t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(Ba.fromString(ra.trim(ca)));
    });
  },
      db = function db(T) {
    return function (ca) {
      ca = Aa.lookup(T)(ca);
      if (ca instanceof M.Just) return ca.value0;
      if (ca instanceof M.Nothing) return "";
      throw Error("Failed pattern match at Metajelo.FormUtil (line 90, column 21 - line 92, column 16): " + [ca.constructor.name]);
    };
  },
      eb = function eb(T) {
    var ca = T ? "Hide Descriptions" : "Show Descriptions";
    return q.div_(m.widgetShiftMap)([])(H.voidRight(m.widgetFunctor)(!T)(q.button_(m.widgetShiftMap)([k.onClick])(q.text(h.widgetLiftWidget)(ca))));
  },
      nb = function nb(T) {
    return d.step(T)(b.bind(m.widgetBind)(eb(T))(function (ca) {
      return t.pure(m.widgetApplicative)(nb(ca));
    }));
  },
      Wa = function Wa(T) {
    return function (ca) {
      return function (Ja) {
        return function () {
          var Da = bb();
          Da = Q.toNonElementParentNode(Da);
          Da = la.getElementById(T)(Da)();
          if (Da instanceof M.Just) return Da = ba.toParentNode(Da.value0), Da = fa.children(Da)(), Da = aa.toArray(Da)(), Da = l.filter(function (Na) {
            return ba.tagName(Na) === ca;
          })(Da), Da = l.catMaybes(H.map(H.functorArray)(wa.fromElement)(Da)), E.for_(ha.applicativeEffect)(E.foldableArray)(Da)(wa.setValue(Ja))();
          if (Da instanceof M.Nothing) return pa.unit;
          throw Error("Failed pattern match at Metajelo.FormUtil (line 506, column 3 - line 519, column 25): " + [Da.constructor.name]);
        };
      };
    };
  },
      ob = function ob(T) {
    return function (ca) {
      return ca < T ? [] : l.range(T)(ca);
    };
  },
      $a = function $a(T) {
    return "FreeTextPolicy" === T ? t.pure(B.applicativeEither)(oa.value) : "RefPolicy" === T ? t.pure(B.applicativeEither)(Ka.value) : B.Left.create("Unknown Policy: '" + (T + "'"));
  },
      vb = Aa.unions(E.foldableArray)([ma.descrAttrMap, ma.descrCTypMap, ma.descrEleMap, ma.descrSTypMap]),
      La = function La(T) {
    return function (ca) {
      return E.fold(E.foldableMaybe)(w.monoidString)(H.map(M.functorMaybe)(Y.show(T))(ca));
    };
  },
      wb = new Ta(function (T) {
    return M.fromJust()(B.hush(O.readResourceTypeGeneral(T)));
  }, Y.show(R.showResourceTypeGeneral), Y.show(R.showResourceTypeGeneral)),
      xb = new Ta(function (T) {
    return M.fromJust()(B.hush(O.readRelationType(T)));
  }, Y.show(R.showRelationType), Y.show(R.showRelationType)),
      pb = new Ta(function (T) {
    return M.fromJust()(B.hush(O.readInstitutionType(T)));
  }, Y.show(da.showInstitutionType), Y.show(da.showInstitutionType)),
      yb = new Ta(function (T) {
    return M.fromJust()(B.hush(O.readIdentifierType(T)));
  }, Y.show(R.showIdentifierType), Y.show(R.showIdentifierType)),
      qb = function qb(T) {
    return T instanceof Ha ? !0 : !1;
  },
      zb = function zb(T) {
    return function () {
      var ca = bb();
      ca = Q.toNonElementParentNode(ca);
      ca = la.getElementById(T)(ca)();
      return za.traverse(za.traversableMaybe)(ha.applicativeEffect)(wa.value)(b.bind(M.bindMaybe)(ca)(function (Ja) {
        return wa.fromElement(Ja);
      }))();
    };
  },
      Ya = new G.Generic(function (T) {
    if (T instanceof oa) return new G.Inl(G.NoArguments.value);
    if (T instanceof Ka) return new G.Inr(G.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 318, column 1 - line 318, column 58): " + [T.constructor.name]);
  }, function (T) {
    if (T instanceof G.Inl) return oa.value;
    if (T instanceof G.Inr) return Ka.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 318, column 1 - line 318, column 58): " + [T.constructor.name]);
  }),
      rb = new Y.Show(V.genericShow(Ya)(V.genericShowSum(V.genericShowConstructor(V.genericShowArgsNoArguments)(new Ca.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(V.genericShowConstructor(V.genericShowArgsNoArguments)(new Ca.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      Ab = new Ta(function () {
    var T = M.fromMaybe(oa.value);
    return function (ca) {
      return T(B.hush($a(ca)));
    };
  }(), Y.show(rb), Y.show(rb)),
      Qa = new H.Functor(function (T) {
    return function (ca) {
      if (ca instanceof Ha) return Ha.create(H.map(M.functorMaybe)(T)(ca.value0));
      if (ca instanceof Pa) return Pa.create(H.map(M.functorMaybe)(T)(ca.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 363, column 1 - line 365, column 48): " + [T.constructor.name, ca.constructor.name]);
    };
  }),
      sb = function sb(T) {
    return function (ca) {
      return function (Ja) {
        return d.step(Ja)(function () {
          var Da = M.isJust(Ja) ? !0 : !1;
          return b.bind(m.widgetBind)(q.select(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.value(M.maybe("")(ca.toOptionValue)(Ja)), H.map(f.functorProps)(function () {
            var Na = ca.fromOptionValue;
            return function (Ua) {
              return Na(k.unsafeTargetValue(Ua));
            };
          }())(k.onChange)])(l.cons(q.option(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.disabled(Da)])([q.text(h.widgetLiftWidget)("Select ...")]))(H.mapFlipped(H.functorArray)(z.upFromIncluding(T.Enum1())(ka.unfoldable1Array)(D.bottom(T.Bounded0())))(function (Na) {
            return q.option(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.value((0, ca.toOptionValue)(Na))])([q.text(h.widgetLiftWidget)((0, ca.toOptionLabel)(Na))]);
          }))))(function (Na) {
            return t.pure(m.widgetApplicative)(sb(T)(ca)(new M.Just(Na)));
          });
        }());
      };
    };
  },
      Ma = function Ma(T) {
    return function (ca) {
      return function (Ja) {
        return function (Da) {
          return function (Na) {
            return E.fold(T)(Ja)(H.map(ca)(Da)(Na));
          };
        };
      };
    };
  },
      gb = function gb(T) {
    T = Ma(E.foldableMaybe)(M.functorMaybe)(w.monoidString)(Ba.toString)(T);
    T = d.debounce(w.monoidArray)(1E3)(T)(hb);
    return ib(T);
  },
      jb = function jb(T) {
    return M.maybe(w.mempty(m.widgetMonoid(w.monoidArray)))(function (ca) {
      return q.div(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.style({
        color: "red"
      })])([q.text(h.widgetLiftWidget)(Y.show(T)(ca))]);
    });
  },
      Cb = new u.Eq(N.genericEq(Ya)(N.genericEqSum(N.genericEqConstructor(N.genericEqNoArguments))(N.genericEqConstructor(N.genericEqNoArguments)))),
      tb = new I.Ord(function () {
    return Cb;
  }, function (T) {
    return function (ca) {
      return S.genericCompare(Ya)(S.genericOrdSum(S.genericOrdConstructor(S.genericOrdNoArguments))(S.genericOrdConstructor(S.genericOrdNoArguments)))(T)(ca);
    };
  }),
      Db = new z.Enum(function () {
    return tb;
  }, K.genericPred(Ya)(K.genericEnumSum(K.genericEnumConstructor(K.genericEnumNoArguments))(J.genericTopConstructor(J.genericTopNoArguments))(K.genericEnumConstructor(K.genericEnumNoArguments))(J.genericBottomConstructor(J.genericBottomNoArguments))), K.genericSucc(Ya)(K.genericEnumSum(K.genericEnumConstructor(K.genericEnumNoArguments))(J.genericTopConstructor(J.genericTopNoArguments))(K.genericEnumConstructor(K.genericEnumNoArguments))(J.genericBottomConstructor(J.genericBottomNoArguments)))),
      lb = function lb(T) {
    return function (ca) {
      return ca instanceof M.Nothing ? "(None)" : La(T)(ca);
    };
  },
      ub = new Ta(function (T) {
    return B.hush(O.readBoolean(T));
  }, lb(Y.showBoolean), La(Y.showBoolean)),
      n = new Ta(function () {
    var T = b.join(M.bindMaybe);
    return function (ca) {
      return T(B.hush(O.readInstitutionContactType(ca)));
    };
  }(), lb(da.showInstitutionContactType), La(da.showInstitutionContactType)),
      Xa = new Ta(function () {
    var T = b.join(M.bindMaybe);
    return function (ca) {
      return T(B.hush(O.readPolicyType(ca)));
    };
  }(), lb(da.showPolicyType), La(da.showPolicyType)),
      fb = function fb(T) {
    return H.voidRight(m.widgetFunctor)(!T)(q.input(h.widgetLiftWidget)([k._type("checkbox"), k.checked(T), k.onChange]));
  },
      Bb = function Bb(T) {
    return d.step(T)(b.bind(m.widgetBind)(fb(T))(function (ca) {
      return t.pure(m.widgetApplicative)(Bb(ca));
    }));
  },
      Jb = new D.Bounded(function () {
    return tb;
  }, J.genericBottom(Ya)(J.genericBottomSum(J.genericBottomConstructor(J.genericBottomNoArguments))), J.genericTop(Ya)(J.genericTopSum(J.genericTopConstructor(J.genericTopNoArguments)))),
      Kb = new z.BoundedEnum(function () {
    return Jb;
  }, function () {
    return Db;
  }, K.genericCardinality(Ya)(K.genericBoundedEnumSum(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))), K.genericFromEnum(Ya)(K.genericBoundedEnumSum(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))), K.genericToEnum(Ya)(K.genericBoundedEnumSum(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments))(K.genericBoundedEnumConstructor(K.genericBoundedEnumNoArguments)))),
      Lb = new y.Apply(function () {
    return Qa;
  }, function (T) {
    return function (ca) {
      if (T instanceof Ha && ca instanceof Ha || T instanceof Ha && ca instanceof Pa || T instanceof Pa && ca instanceof Ha) return Ha.create(y.apply(M.applyMaybe)(T.value0)(ca.value0));
      if (T instanceof Pa && ca instanceof Pa) return Pa.create(y.apply(M.applyMaybe)(T.value0)(ca.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 366, column 1 - line 370, column 63): " + [T.constructor.name, ca.constructor.name]);
    };
  }),
      Mb = new t.Applicative(function () {
    return Lb;
  }, function (T) {
    return Ha.create(new M.Just(T));
  }),
      Hb = function Hb(T) {
    return function (ca) {
      var Ja = x.snd(ca),
          Da = x.fst(ca),
          Na = new Ha(M.Nothing.value);

      ca = function () {
        var Va = I.max(I.ordInt)(0)(Da - l.length(Ja) | 0);
        return A.append(A.semigroupArray)(H.map(H.functorArray)(t.pure(Mb))(Ja))(H.mapFlipped(H.functorArray)(ob(1)(Va))(function (ab) {
          return Na;
        }));
      }();

      var Ua = function Ua(Va) {
        return d.step(Va)(b.bind(m.widgetBind)(H.voidRight(m.widgetFunctor)(Pa.create(cb(Va)))(q.button(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.onClick, ea.deleteItem])([q.text(h.widgetLiftWidget)("Delete")])))(function (ab) {
          return t.pure(m.widgetApplicative)(Ua(ab));
        }));
      },
          Za = function Za(Va) {
        return q.li_(g.shiftMapCofree(w.monoidArray))([])(b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(T(cb(Va)))(function (ab) {
          return b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(Ua(new Ha(ab)))(function (U) {
            return t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(U);
          });
        }));
      },
          Fb = function Fb(Va) {
        if (Va instanceof Pa) return d.step(new Pa(M.Nothing.value))(w.mempty(m.widgetMonoid(w.monoidArray)));
        if (Va instanceof Ha) return Za(Va);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 397, column 23 - line 399, column 35): " + [Va.constructor.name]);
      };

      return q.div_(g.shiftMapCofree(w.monoidArray))([])(b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(function (Va) {
        return function (ab) {
          return d.loopS(w.monoidArray)(new x.Tuple(Va, ab))(function (U) {
            return q.ul_(g.shiftMapCofree(w.monoidArray))([])(function () {
              x.fst(U);
              var W = x.snd(U);
              return b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(za.traverse(za.traversableArray)(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(Fb)(W))(function (na) {
                return b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(d.step(0)(H.voidRight(m.widgetFunctor)(t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(1))(q.button(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.onClick, ea.addItem])([q.text(h.widgetLiftWidget)("Add item")]))))(function (ja) {
                  var qa = l.filter(qb)(na),
                      ta = l.length(qa) + ja | 0;
                  ja = H.mapFlipped(H.functorArray)(ob(1)(ja))(function (Ea) {
                    return Na;
                  });
                  return t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(x.Tuple.create(ta)(A.append(A.semigroupArray)(qa)(ja)));
                });
              });
            }());
          });
        };
      }(Da)(ca))(function (Va) {
        return t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(F.second(F.strongFn)(function () {
          var ab = H.map(H.functorArray)(cb);
          return function (U) {
            return l.catMaybes(ab(U));
          };
        }())(Va));
      }));
    };
  };

  c.menuSignal = sb;
  c.textInput = gb;

  c.dateInput = function (T) {
    var ca = ua.unsafePerformEffect(function (Na) {
      return function () {
        var Ua = ya.nowDateTime();
        Ua = M.fromMaybe(Ua)(B.hush(Na));
        Ua = sa["try"](Z.dateTimeToStr(Ua))();
        return v.lmap(B.bifunctorEither)(Y.show(sa.showError))(Ua);
      };
    }(T));
    T = b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)));
    var Ja = t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)));
    if (ca instanceof B.Left) var Da = "";else if (ca instanceof B.Right) Da = Ba.toString(ca.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 170, column 31 - line 172, column 34): " + [ca.constructor.name]);
    return T(Ja(Da))(function (Na) {
      var Ua = b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray))),
          Za = t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)));
      if (ca instanceof B.Left) var Fb = ca.value0;else if (ca instanceof B.Right) Fb = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 173, column 21 - line 175, column 18): " + [ca.constructor.name]);
      return Ua(Za(Fb))(function (Va) {
        return b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(q.div_(g.shiftMapCofree(w.monoidArray))([k._id("mjUI_dateInput")])(gb(Ba.fromString(Na))))(function (ab) {
          return b.discard(b.discardUnit)(g.bindCofree(m.widgetAlternative(w.monoidArray)))(t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(ua.unsafePerformEffect(Wa("mjUI_dateInput")("INPUT")(Na))))(function () {
            return b.discard(b.discardUnit)(g.bindCofree(m.widgetAlternative(w.monoidArray)))(d.display(function () {
              if (ca instanceof B.Right) return w.mempty(m.widgetMonoid(w.monoidArray));
              if (ca instanceof B.Left) return jb(Y.showString)(new M.Just(ca.value0));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 179, column 13 - line 181, column 40): " + [ca.constructor.name]);
            }()))(function () {
              if (ab instanceof M.Just) return t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(ua.unsafePerformEffect(H.map(ha.functorEffect)(v.lmap(B.bifunctorEither)(Y.show(sa.showError)))(sa["try"](O.parseDate(ab.value0)))));
              if (ab instanceof M.Nothing) return t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(new B.Left("no date input"));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 182, column 3 - line 185, column 43): " + [ab.constructor.name]);
            });
          });
        });
      });
    });
  };

  c.natInput = function (T) {
    T = b.bind(M.bindMaybe)(H.mapFlipped(M.functorMaybe)(T)(function () {
      var ca = Y.show(Y.showInt);
      return function (Ja) {
        return ca(P.natToInt(Ja));
      };
    }()))(Ba.fromString);
    return b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(gb(T))(function (ca) {
      return t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(H.map(M.functorMaybe)(function () {
        var Ja = Ia.readInt(10);
        return function (Da) {
          return P.intToNat(L.round(Ja(Ba.toString(Da))));
        };
      }())(ca));
    });
  };

  c.urlInput = function (T) {
    if (T instanceof B.Left) var ca = "";else if (T instanceof B.Right) ca = Ba.toString(Oa.urlToNEString(T.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 218, column 15 - line 220, column 48): " + [T.constructor.name]);
    if (T instanceof B.Left) var Ja = T.value0;else if (T instanceof B.Right) Ja = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 214, column 15 - line 216, column 20): " + [T.constructor.name]);
    return b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(gb(Ba.fromString(ca)))(function (Da) {
      var Na = b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray))),
          Ua = t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)));
      if (Da instanceof M.Nothing) Da = new B.Left(Ja);else if (Da instanceof M.Just) Da = Oa.parsePublicURL(Ba.toString(Da.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 205, column 19 - line 207, column 46): " + [Da.constructor.name]);
      return Na(Ua(Da))(function (Za) {
        return b.discard(b.discardUnit)(g.bindCofree(m.widgetAlternative(w.monoidArray)))(d.display(function () {
          if (Za instanceof B.Right) return w.mempty(m.widgetMonoid(w.monoidArray));
          if (Za instanceof B.Left) return jb(Y.showString)(new M.Just(Za.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 208, column 13 - line 210, column 40): " + [Za.constructor.name]);
        }()))(function () {
          return t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(Za);
        });
      });
    });
  };

  c.emailInput = function (T) {
    if (T instanceof B.Left) var ca = "";else if (T instanceof B.Right) ca = Ga.toString(T.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 238, column 15 - line 240, column 33): " + [T.constructor.name]);
    if (T instanceof B.Left) var Ja = T.value0;else if (T instanceof B.Right) Ja = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 15 - line 236, column 20): " + [T.constructor.name]);
    return b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(gb(Ba.fromString(ca)))(function (Da) {
      var Na = b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray))),
          Ua = t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)));
      if (Da instanceof M.Nothing) Da = new B.Left(Ja);else if (Da instanceof M.Just) Da = X.validate(Ba.toString(Da.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 225, column 21 - line 227, column 43): " + [Da.constructor.name]);
      return Na(Ua(Da))(function (Za) {
        return b.discard(b.discardUnit)(g.bindCofree(m.widgetAlternative(w.monoidArray)))(d.display(function () {
          if (Za instanceof B.Right) return w.mempty(m.widgetMonoid(w.monoidArray));
          if (Za instanceof B.Left) return jb(Y.showString)(new M.Just(Za.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 228, column 13 - line 230, column 40): " + [Za.constructor.name]);
        }()))(function () {
          return t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(Za);
        });
      });
    });
  };

  c.checkBoxS = Bb;
  c.showDescSig = nb;

  c.mkDesc = function (T) {
    return function (ca) {
      var Ja = db(T)(vb),
          Da = p.alt(m.widgetAlt(w.monoidArray))(q.text(h.widgetLiftWidget)(Ja))(q["code'"](m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([q.text(h.widgetLiftWidget)(" ")]));
      return ca && !ra["null"](Ja) ? Da : w.mempty(m.widgetMonoid(w.monoidArray));
    };
  };

  c.FreeTextPolicy = oa;

  c.checkPolicy = function (T) {
    return function (ca) {
      if (T instanceof oa) {
        var Ja = H.mapFlipped(B.functorEither);
        ca = Ba.fromString(ra.trim(ca));
        if (ca instanceof M.Just) ca = new B.Right(ca.value0);else if (ca instanceof M.Nothing) ca = new B.Left("Empty string when NonEmptyString expected.");else throw Error("Failed pattern match at Metajelo.FormUtil (line 438, column 22 - line 440, column 63): " + [ca.constructor.name]);
        return Ja(ca)(da.FreeTextPolicy.create);
      }

      if (T instanceof Ka) return H.mapFlipped(B.functorEither)(Oa.parsePublicURL(ca))(da.RefPolicy.create);
      throw Error("Failed pattern match at Metajelo.FormUtil (line 348, column 25 - line 350, column 52): " + [T.constructor.name]);
    };
  };

  c.polPolTypeIs = function (T) {
    if (T instanceof da.FreeTextPolicy) return oa.value;
    if (T instanceof da.RefPolicy) return Ka.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 353, column 18 - line 355, column 29): " + [T.constructor.name]);
  };

  c.arrayView = Hb;

  c.nonEmptyArrayView = function (T) {
    return function (ca) {
      return b.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(Hb(T)(F.second(F.strongFn)(Ma(E.foldableMaybe)(M.functorMaybe)(w.monoidArray)(r.toArray))(ca)))(function (Ja) {
        return t.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(F.second(F.strongFn)(r.fromArray)(Ja));
      });
    };
  };

  c.errorDisplay = jb;

  c.runEffectInit = function (T) {
    return function (ca) {
      return d.step(T)(b.bind(m.widgetBind)(Fa.liftEffect(m.widgetMonadEff(w.monoidArray))(ca))(function (Ja) {
        return t.pure(m.widgetApplicative)(d.step(Ja)(e.empty(m.widgetPlus(w.monoidArray))));
      }));
    };
  };

  c.evTargetElem = function (T) {
    return H.map(ha.functorEffect)(ba.fromNode)(xa.target(T));
  };

  c.getInputTextLE = function (T) {
    return function (ca) {
      return Fa.liftEffect(T)(zb(ca));
    };
  };

  c.tabLink = function (T) {
    return function (ca) {
      return q.a_(m.widgetShiftMap)([k.href(T), k.target("_blank"), k.rel("noopener noreferrer")])(ca);
    };
  };

  c.isOptionMaybeBoolean = ub;
  c.isOptionIdentifierType = yb;
  c.isOptionInstitutionType = pb;
  c.isOptionMaybeInstitutionContactType = n;
  c.isOptionMaybePolicyType = Xa;
  c.isOptionRelationType = xb;
  c.isOptionResourceTypeGeneral = wb;
  c.boundedEnumPolPolType = Kb;
  c.isOptionPolPolType = Ab;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var c = a["Metajelo.View"],
      d = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      f = a["Concur.React.DOM"],
      m = a["Concur.React.Props"],
      q = a["Control.Alt"],
      k = a["Control.Bind"],
      p = a["Control.Category"],
      t = a["Data.Array"],
      y = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      g = a["Data.Foldable"],
      e = a["Data.Functor"],
      l = a["Data.HeytingAlgebra"],
      r = a["Data.Maybe"],
      v = a["Data.Monoid"],
      D = a["Data.Natural"],
      B = a["Data.Profunctor.Strong"],
      z = a["Data.Semigroup"],
      u = a["Data.Show"],
      E = a["Data.String.CodePoints"],
      H = a["Data.String.NonEmpty.Internal"],
      G = a["Data.String.Utils"],
      J = a["Data.Unfoldable"],
      K = a["Data.Unfoldable1"],
      N = a["DataCite.Types.Common"],
      S = a["Foreign.Object"],
      V = a["Metajelo.CSS.Common.ClassNames"],
      L = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      M = a["Metajelo.CSS.Web.ClassProps"],
      w = a["Metajelo.CSS.Web.Util"],
      P = a["Metajelo.Types"],
      I = a["Text.Email.Parser"],
      F = a["Text.URL.Validate"],
      A = function () {
    var O = e.map(e.functorArray)(E.singleton);
    return function (Z) {
      return O(E.toCodePointArray(Z));
    };
  }(),
      Y = function Y(O) {
    var Z = f.text(O);
    return function (xa) {
      return Z(H.toString(xa));
    };
  },
      ra = f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.text(d.widgetLiftWidget)(" ")]),
      Ba = function () {
    var O = g.intercalate(g.foldableArray)(v.monoidArray)([ra]),
        Z = e.map(e.functorArray)(K.singleton(K.unfoldable1Array));
    return function (xa) {
      return O(Z(xa));
    };
  }(),
      Ca = function Ca(O) {
    return f.div(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.institutionPolicy])(Ba([function (Z) {
      var xa = function () {
        if (Z instanceof r.Nothing) return {
          text: "May apply to product (unverified)",
          cls: L.appliesMaybe
        };
        if (Z instanceof r.Just && Z.value0) return {
          text: "Applies to product",
          cls: L.appliesYes
        };
        if (Z instanceof r.Just && !Z.value0) return {
          text: "Does not apply to product",
          cls: L.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 272, column 10 - line 275, column 75): " + [Z.constructor.name]);
      }();

      return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([w.cList([V.applies, xa.cls])])([function (Ga) {
        return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.appliesInfo])([f.text(d.widgetLiftWidget)(Ga)]);
      }(xa.text)]);
    }(O.appliesToProduct), g.foldMap(g.foldableMaybe)(h.widgetMonoid(v.monoidArray))(function (Z) {
      return f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.policyType])([f.text(d.widgetLiftWidget)(u.show(P.showPolicyType)(Z))]), f.text(d.widgetLiftWidget)(" Policy:")]);
    })(O.policyType), function (Z) {
      var xa = f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.policy]),
          Ga = K.singleton(K.unfoldable1Array);
      if (Z instanceof P.FreeTextPolicy) Z = Y(d.widgetLiftWidget)(Z.value0);else if (Z instanceof P.RefPolicy) Z = F.urlToString(Z.value0), Z = f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([f.text(d.widgetLiftWidget)(Z)]);else throw Error("Failed pattern match at Metajelo.View (line 265, column 5 - line 268, column 40): " + [Z.constructor.name]);
      return xa(Ga(Z));
    }(O.policy)]));
  },
      za = function za(O) {
    return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.institutionName])([Y(d.widgetLiftWidget)(O.institutionName)]);
  },
      x = function x(O) {
    return function (Z) {
      return g.foldMap(g.foldableMaybe)(v.monoidArray)(p.identity(p.categoryFn))(t.init(Z));
    };
  },
      ka = function ka(O) {
    return function (Z) {
      return function (xa) {
        return function (Ga) {
          return function (X) {
            var Oa = S.fromFoldableWith(O)(z.append(Ga)),
                Q = e.map(Z)(B.fanout(p.categoryFn)(B.strongFn)(X)(K.singleton(xa)));
            return function (ba) {
              return Oa(Q(ba));
            };
          };
        };
      };
    };
  },
      pa = function pa(O) {
    return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.basicMetadata, M.creatorList])(e.mapFlipped(e.functorArray)(y.toArray(O))(function (Z) {
      return f.span_(h.widgetShiftMap)([M.creator])(Y(d.widgetLiftWidget)(Z));
    }));
  },
      R = function R(O) {
    var Z = I.toString(O.emailAddress),
        xa = f.text(d.widgetLiftWidget);
    if (O.contactType instanceof r.Nothing) O = ".";else if (O.contactType instanceof r.Just) O = " (" + (u.show(P.showInstitutionContactType)(O.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 199, column 24 - line 201, column 41): " + [O.contactType.constructor.name]);
    xa = xa(O);
    return f.span_(h.widgetShiftMap)([M.institutionContact])(q.alt(h.widgetAlt(v.monoidArray))(q.alt(h.widgetAlt(v.monoidArray))(f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.text(d.widgetLiftWidget)("Institution Contact: ")]))(f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.contactEmail, m.href("mailto:" + Z)])([f.text(d.widgetLiftWidget)(Z)])))(f.span_(h.widgetShiftMap)([M.contactType])(xa)));
  },
      ha = f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.text(d.widgetLiftWidget)(", ")]),
      Fa = function Fa(O) {
    return f.span_(h.widgetShiftMap)([M.formatList])(g.intercalate(g.foldableArray)(h.widgetMonoid(v.monoidArray))(ha)(e.mapFlipped(e.functorArray)(O)(function (Z) {
      return f.span_(h.widgetShiftMap)([M.format])(Y(d.widgetLiftWidget)(Z));
    })));
  },
      sa = function sa(O) {
    return f.span_(h.widgetShiftMap)([])(g.intercalate(g.foldableArray)(h.widgetMonoid(v.monoidArray))(ha)(e.mapFlipped(e.functorArray)(y.toArray(O))(function (Z) {
      return f.span_(h.widgetShiftMap)([M.title])(Y(d.widgetLiftWidget)(Z));
    })));
  },
      ya = function ya(O) {
    return f["cite'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([Y(d.widgetLiftWidget)(O)]);
  },
      ua = function ua(O) {
    if (O.identifierType instanceof N.ARK) return f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(H.toString(O.identifier))])([ya(O.identifier)]);

    if (O.identifierType instanceof N.ArXiv) {
      var Z = "https://arxiv.org/abs/" + H.toString(O.identifier);
      return f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ya(O.identifier)]);
    }

    if (O.identifierType instanceof N.Bibcode) return Z = "https://ui.adsabs.harvard.edu/abs/" + (H.toString(O.identifier) + "/abstract"), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ya(O.identifier)]);
    if (O.identifierType instanceof N.DOI) return Z = "https://doi.org/" + H.toString(O.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ya(O.identifier)]);
    if (O.identifierType instanceof N.EAN13) return ya(O.identifier);
    if (O.identifierType instanceof N.EISSN) return Z = "https://www.worldcat.org/ISSN/" + H.toString(O.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ya(O.identifier)]);
    if (O.identifierType instanceof N.Handle) return Z = "http://hdl.handle.net/" + H.toString(O.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ya(O.identifier)]);
    if (O.identifierType instanceof N.IGSN) return Z = "http://igsn.org/" + H.toString(O.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ya(O.identifier)]);
    if (O.identifierType instanceof N.ISBN) return ya(O.identifier);
    if (O.identifierType instanceof N.ISSN) return Z = "https://www.worldcat.org/ISSN/" + H.toString(O.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ya(O.identifier)]);
    if (O.identifierType instanceof N.ISTC) return ya(O.identifier);
    if (O.identifierType instanceof N.LISSN) return Z = "https://www.worldcat.org/ISSN/" + H.toString(O.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ya(O.identifier)]);
    if (O.identifierType instanceof N.LSID) return Z = "http://www.lsid.info/resolver/?lsid=" + H.toString(O.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ya(O.identifier)]);
    if (O.identifierType instanceof N.PMID) return Z = "https://www.ncbi.nlm.nih.gov/pubmed/" + H.toString(O.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ya(O.identifier)]);
    if (O.identifierType instanceof N.PURL) return f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(H.toString(O.identifier))])([ya(O.identifier)]);
    if (O.identifierType instanceof N.UPC) return ya(O.identifier);
    if (O.identifierType instanceof N.URL) return f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(H.toString(O.identifier))])([ya(O.identifier)]);
    if (O.identifierType instanceof N.URN) return ya(O.identifier);
    throw Error("Failed pattern match at Metajelo.View (line 221, column 1 - line 221, column 47): " + [O.constructor.name]);
  },
      Aa = function Aa(O) {
    return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.identifier])([f.span_(h.widgetShiftMap)([M.idType])(f.text(d.widgetLiftWidget)(u.show(N.showIdentifierType)(O.identifierType))), f.span_(h.widgetShiftMap)([M.idUrl])(ua(O))]);
  },
      Ia = function Ia(O) {
    return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.relatedId])([f.span_(h.widgetShiftMap)([M.relType])(f.text(d.widgetLiftWidget)(u.show(N.showRelationType)(O.relationType))), ra, Aa({
      identifier: O.identifier,
      identifierType: O.identifierType
    })]);
  },
      ea = function ea(O) {
    return function (Z) {
      return function (xa) {
        if (Z) return O;

        if (g.any(g.foldableArray)(l.heytingAlgebraBoolean)(function (X) {
          return G.endsWith(X)(O);
        })([";", ".", ","])) {
          var Ga = A(O);
          return G.fromCharArray(x(v.monoidString)(Ga)) + xa;
        }

        return O + xa;
      };
    };
  },
      ma = function ma(O) {
    var Z = za(O),
        xa = f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.text(d.widgetLiftWidget)("("), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.institutionId])([Aa(O.institutionID)]), f.text(d.widgetLiftWidget)("; "), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.institutionType])([f.text(d.widgetLiftWidget)(u.show(P.showInstitutionType)(O.institutionType))]), f.text(d.widgetLiftWidget)(ea(")")(r.isNothing(O.superOrganizationName))(","))]);
    if (O.superOrganizationName instanceof r.Nothing) var Ga = v.mempty(h.widgetMonoid(v.monoidArray));else if (O.superOrganizationName instanceof r.Just) Ga = f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.text(d.widgetLiftWidget)("a member of "), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.superOrg])([f.text(d.widgetLiftWidget)(ea(H.toString(O.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 161, column 7 - line 167, column 10): " + [O.superOrganizationName.constructor.name]);
    return Ba([Z, xa, Ga, R(O.institutionContact), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.sustainability])([f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.missionStatement, m.href(F.urlToString(O.institutionSustainability.missionStatementURL))])([f.text(d.widgetLiftWidget)("Mission Statement")]), f.text(d.widgetLiftWidget)("; "), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.fundingStatement, m.href(F.urlToString(O.institutionSustainability.fundingStatementURL))])([f.text(d.widgetLiftWidget)("Funding Statement")]), f.text(d.widgetLiftWidget)(".")]), f.ul(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.institutionPolicies])(e.map(e.functorArray)(function (X) {
      return f["li'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([Ca(X)]);
    })(y.toArray(O.institutionPolicies))), function (X) {
      if (X) X = "Versioned";else {
        if (X) throw Error("Failed pattern match at Metajelo.View (line 188, column 14 - line 190, column 31): " + [X.constructor.name]);
        X = "Unversioned";
      }
      return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.versioning])([f.text(d.widgetLiftWidget)(X)]);
    }(O.versioning)]);
  },
      da = function da(O) {
    if (O.resourceID instanceof r.Just) var Z = f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.resourceId])([Aa(O.resourceID.value0), f.text(d.widgetLiftWidget)(".")]);else if (O.resourceID instanceof r.Nothing) Z = v.mempty(h.widgetMonoid(v.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 127, column 17 - line 129, column 24): " + [O.resourceID.constructor.name]);
    var xa = [pa(O.basicMetadata.creators), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.basicMetadata, M.pubyear])([f.text(d.widgetLiftWidget)(u.show(u.showInt)(D.natToInt(O.basicMetadata.publicationYear)))]), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.basicMetadata, M.title])([sa(O.basicMetadata.titles), f.text(d.widgetLiftWidget)(ea("")(r.isNothing(O.resourceID))(","))])];
    Z = z.append(z.semigroupArray)(xa)([f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([za(O.location), f.text(d.widgetLiftWidget)(".")]), Z]);
    return f.div(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.product])(Ba(z.append(z.semigroupArray)([f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.productCitation])([f["cite'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)(Ba(Z))])])(z.append(z.semigroupArray)([Fa(O.format)])(ma(O.location)))));
  };

  c.spacify = Ba;

  c.mkRecordWidget = function (O) {
    var Z = function () {
      var X = e.map(b.functorNonEmptyArray)(function (Oa) {
        return f.li(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.relatedId])([Oa]);
      })(e.map(b.functorNonEmptyArray)(Ia)(O.relatedIdentifiers));
      return f.ul(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.relatedIdList])(y.toArray(X));
    }(),
        xa = ka(b.foldableNonEmptyArray)(b.functorNonEmptyArray)(b.unfoldable1NonEmptyArray)(b.semigroupNonEmptyArray)(function (X) {
      return u.show(N.showResourceTypeGeneral)(X.resourceType.generalType) + (": " + X.resourceType.description);
    })(O.supplementaryProducts),
        Ga = function Ga(X) {
      X = k.join(k.bindArray)(J.fromMaybe(J.unfoldableArray)(e.map(r.functorMaybe)(y.toArray)(S.lookup(X)(xa))));
      var Oa = f.span_(h.widgetShiftMap)([M.resourceType])(g.fold(g.foldableMaybe)(h.widgetMonoid(v.monoidArray))(e.mapFlipped(r.functorMaybe)(t.head(X))(function (Q) {
        return q.alt(h.widgetAlt(v.monoidArray))(q.alt(h.widgetAlt(v.monoidArray))(f.span_(h.widgetShiftMap)([M.resourceTypeGen])(f.text(d.widgetLiftWidget)(u.show(N.showResourceTypeGeneral)(Q.resourceType.generalType))))(f.span_(h.widgetShiftMap)([M.resourceTypeDescr])(f.text(d.widgetLiftWidget)(Q.resourceType.description))))(f["br'"](d.widgetLiftWidget));
      })));
      return f["div'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)(t.cons(Oa)(e.map(e.functorArray)(da)(X)));
    };

    u.show(N.showIdentifierType)(O.identifier.identifierType);
    return f.div(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.record])([f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.productsHeader])([f.span_(h.widgetShiftMap)([M.recordId])(Aa(O.identifier))]), f.ul(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.productList])(e.map(e.functorArray)(function (X) {
      return f.li_(h.widgetShiftMap)([M.productGroup])(Ga(X));
    })(S.keys(xa))), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([M.relatedIdsHeader])([]), Z]);
  };

  c.mkSupplementaryProductWidget = da;
  c.locElems = ma;
})(PS);

(function (a) {
  a.pickFn = function (c, d) {
    for (var h = {}, f = 0; f < c.length; f++) {
      "undefined" !== typeof d[c[f]] && (h[c[f]] = d[c[f]]);
    }

    return h;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a.unsafeGet = function (c) {
    return function (d) {
      return d[c];
    };
  };

  a.unsafeSet = function (c) {
    return function (d) {
      return function (h) {
        var f = {},
            m;

        for (m in h) {
          ({}).hasOwnProperty.call(h, m) && (f[m] = h[m]);
        }

        f[c] = d;
        return f;
      };
    };
  };

  a.unsafeDelete = function (c) {
    return function (d) {
      var h = {},
          f;

      for (f in d) {
        f !== c && {}.hasOwnProperty.call(d, f) && (h[f] = d[f]);
      }

      return h;
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
  a.Record = a.Record || {};
  var c = a.Record,
      d = a["Data.Symbol"],
      h = a["Record.Unsafe"];

  c.get = function (f) {
    return function (m) {
      return function (q) {
        return function (k) {
          return h.unsafeGet(d.reflectSymbol(f)(q))(k);
        };
      };
    };
  };

  c.insert = function (f) {
    return function (m) {
      return function (q) {
        return function (k) {
          return function (p) {
            return function (t) {
              return h.unsafeSet(d.reflectSymbol(f)(k))(p)(t);
            };
          };
        };
      };
    };
  };

  c["delete"] = function (f) {
    return function (m) {
      return function (q) {
        return function (k) {
          return function (p) {
            return h.unsafeDelete(d.reflectSymbol(f)(k))(p);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var c = a["Record.Extra"],
      d = a["Data.List.Types"],
      h = a["Data.Monoid"],
      f = a["Data.Symbol"],
      m = a["Type.Data.RowList"],
      q = function q(k) {
    this.keysImpl = k;
  };

  a = new q(function (k) {
    return h.mempty(d.monoidList);
  });

  c.keys = function (k) {
    return function (p) {
      return function (t) {
        return (0, p.keysImpl)(m.RLProxy.value);
      };
    };
  };

  c.nilKeys = a;

  c.consKeys = function (k) {
    return function (p) {
      return new q(function (t) {
        t = (0, p.keysImpl)(m.RLProxy.value);
        var y = f.reflectSymbol(k)(f.SProxy.value);
        return new d.Cons(y, t);
      });
    };
  };
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var c = a.Option,
      d = a.Option,
      h = a["Control.Monad.State.Class"],
      f = a["Control.Monad.State.Trans"],
      m = a["Data.Array"],
      q = a["Data.Function.Uncurried"],
      k = a["Data.Identity"],
      p = a["Data.List.Types"],
      t = a["Data.Maybe"],
      y = a["Data.Symbol"],
      b = a["Foreign.Object"],
      g = a.Record,
      e = a["Record.Extra"],
      l = a["Type.Data.Row"],
      r = function () {
    function L() {}

    L.value = new L();
    return L;
  }(),
      v = function v(L) {
    this.getAllOption = L;
  },
      D = function D(L) {
    this["getAll'"] = L;
  },
      B = function B(L) {
    this.fromRecordOption = L;
  },
      z = function z(L) {
    this["fromRecord'"] = L;
  },
      u = function u(L) {
    return function (M) {
      return function (w) {
        w = m.fromFoldable(p.foldableList)(e.keys()(w)(l.RProxy.value));
        return q.runFn2(d.pickFn)(w);
      };
    };
  };

  a = new v(function (L) {
    return function (M) {
      return new t.Just({});
    };
  });

  var E = b.empty,
      H = new B(function (L) {
    return function (M) {
      return E;
    };
  }),
      G = function G(L) {
    return function (M) {
      return function (w) {
        return function (P) {
          var I = y.reflectSymbol(L)(y.SProxy.value),
              F = b.alter(function (A) {
            return M(A);
          })(I)(P);
          P = M(b.lookup(I)(P));
          return {
            option: F,
            value: P
          };
        };
      };
    };
  },
      J = function J(L) {
    return function (M) {
      return function (w) {
        return function (P) {
          return function (I) {
            return G(L)(function (F) {
              return t.Nothing.value;
            })(P)(I).option;
          };
        };
      };
    };
  },
      K = function K(L) {
    return function (M) {
      return function (w) {
        return function (P) {
          return G(L)(function (I) {
            return I;
          })(w)(P).value;
        };
      };
    };
  },
      N = function N(L) {
    return function (M) {
      return function (w) {
        return function (P) {
          return function (I) {
            return G(L)(function (F) {
              return new t.Just(P);
            })(w)(I).option;
          };
        };
      };
    };
  },
      S = function S(L) {
    return function (M) {
      return function (w) {
        return function (P) {
          return function (I) {
            if (P instanceof t.Just) return N(L)()(w)(P.value0)(I);
            if (P instanceof t.Nothing) return I;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [P.constructor.name]);
          };
        };
      };
    };
  },
      V = function V(L) {
    return function (M) {
      return function (w) {
        return function (P) {
          return function (I) {
            return function (F) {
              return G(L)(function (A) {
                return new t.Just(I);
              })(P)(F).option;
            };
          };
        };
      };
    };
  };

  c.fromRecord = function (L) {
    return L["fromRecord'"];
  };

  c.empty = E;
  c.get = K;

  c.getAll = function (L) {
    return L["getAll'"];
  };

  c.getSubset = function (L) {
    return function (M) {
      return function (w) {
        return function (P) {
          return function (I) {
            return (0, P["getAll'"])(u()()(w)(I));
          };
        };
      };
    };
  };

  c.getWithDefault = function (L) {
    return function (M) {
      return function (w) {
        return function (P) {
          return function (I) {
            I = K(L)()(P)(I);
            if (I instanceof t.Just) return I.value0;
            if (I instanceof t.Nothing) return w;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [I.constructor.name]);
          };
        };
      };
    };
  };

  c.maySetOptState = function (L) {
    return function (M) {
      return function (w) {
        return function (P) {
          return function (I) {
            return h.put(f.monadStateStateT(k.monadIdentity))(S(L)()(w)(P)(I));
          };
        };
      };
    };
  };

  c.fromRecordAny = function (L) {
    return function (M) {
      return new z((0, L.fromRecordOption)(r.value));
    };
  };

  c.fromRecordOptionNil = H;

  c.fromRecordOptionCons = function (L) {
    return function (M) {
      return function (w) {
        return function (P) {
          return function (I) {
            return function (F) {
              return new B(function (A) {
                return function (Y) {
                  var ra = g["delete"](L)()()(y.SProxy.value)(Y);
                  ra = (0, M.fromRecordOption)(r.value)(ra);
                  Y = g.get(L)()(y.SProxy.value)(Y);
                  return V(L)()()(y.SProxy.value)(Y)(ra);
                };
              });
            };
          };
        };
      };
    };
  };

  c.getAllAny = function (L) {
    return function (M) {
      return new D((0, M.getAllOption)(r.value));
    };
  };

  c.getAllOptionNil = a;

  c.getAllOptionCons = function (L) {
    return function (M) {
      return function (w) {
        return function (P) {
          return function (I) {
            return function (F) {
              return new v(function (A) {
                return function (Y) {
                  var ra = J(L)()()(y.SProxy.value)(Y);
                  ra = (0, F.getAllOption)(r.value)(ra);
                  Y = K(L)()(y.SProxy.value)(Y);

                  if (ra instanceof t.Just) {
                    if (Y instanceof t.Just) return new t.Just(g.insert(L)()()(y.SProxy.value)(Y.value0)(ra.value0));
                    if (Y instanceof t.Nothing) return t.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [Y.constructor.name]);
                  }

                  if (ra instanceof t.Nothing) return t.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [ra.constructor.name]);
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
    return function (d) {
      return d.item(c);
    };
  };
})(PS["Web.File.FileList"] = PS["Web.File.FileList"] || {});

(function (a) {
  a["Web.File.FileList"] = a["Web.File.FileList"] || {};
  var c = a["Web.File.FileList"],
      d = a["Data.Nullable"];

  a["Web.File.FileList"].item = function (h) {
    var f = c._item(h);

    return function (m) {
      return d.toMaybe(f(m));
    };
  };
})(PS);

(function (a) {
  a.eventListener = function (c) {
    return function () {
      return function (d) {
        return c(d)();
      };
    };
  };

  a.addEventListener = function (c) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function () {
            return f.addEventListener(c, d, h);
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
    return function (d) {
      return function () {
        d.readAsText(c);
      };
    };
  };
})(PS["Web.File.FileReader"] = PS["Web.File.FileReader"] || {});

(function (a) {
  a["Web.File.FileReader"] = a["Web.File.FileReader"] || {};
  var c = a["Web.File.FileReader"],
      d = a["Web.File.FileReader"];
  c.toEventTarget = a["Unsafe.Coerce"].unsafeCoerce;
  c.fileReader = d.fileReader;
  c.result = d.result;
  c.readAsText = d.readAsText;
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
      d = a["Control.Monad.Except"],
      h = a["Data.Either"],
      f = a["Data.List.Types"],
      m = a["Data.Monoid"],
      q = a["Data.Show"],
      k = a["Effect.Aff"],
      p = a["Effect.Exception"],
      t = a.Foreign,
      y = a["Web.Event.EventTarget"],
      b = a["Web.File.FileReader"],
      g = a["Web.HTML.Event.EventTypes"];

  a = function (e) {
    return function (l) {
      return function (r) {
        return k.makeAff(function (v) {
          var D = function D(B) {
            return v(h.Right.create(B));
          };

          return function () {
            var B = b.fileReader(),
                z = b.toEventTarget(B),
                u = y.eventListener(function (H) {
              return v(h.Left.create(p.error("error")));
            })(),
                E = y.eventListener(function (H) {
              return function () {
                var G = b.result(B)();
                return h.either(function (J) {
                  return v(h.Left.create(p.error(q.show(f.showNonEmptyList(t.showForeignError))(J))));
                })(D)(d.runExcept(e(G)))();
              };
            })();
            y.addEventListener(g.error)(u)(!1)(z)();
            y.addEventListener(g.load)(E)(!1)(z)();
            l(r)(B)();
            return m.mempty(k.monoidCanceler);
          };
        });
      };
    };
  }(t.readString)(b.readAsText);

  c.readAsText = a;
})(PS);

(function (a) {
  a._read = function (c, d, h) {
    var f = Object.prototype.toString.call(h);
    return 0 === f.indexOf("[object HTML") && f.indexOf("Element]") === f.length - 8 ? d(h) : c;
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
      d = a["Web.HTML.HTMLElement"],
      h = a["Data.Maybe"];

  c.fromElement = function (f) {
    return d._read(h.Nothing.value, h.Just.create, f);
  };

  c.click = d.click;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var c = a["Metajelo.UI"],
      d = a.Affjax,
      h = a["Affjax.ResponseFormat"],
      f = a["Concur.Core.FRP"],
      m = a["Concur.Core.LiftWidget"],
      q = a["Concur.Core.Props"],
      k = a["Concur.Core.Types"],
      p = a["Concur.React.DOM"],
      t = a["Concur.React.Props"],
      y = a["Concur.React.Run"],
      b = a["Control.Alt"],
      g = a["Control.Applicative"],
      e = a["Control.Apply"],
      l = a["Control.Bind"],
      r = a["Control.Cofree"],
      v = a["Control.Monad.Except.Trans"],
      D = a["Control.Monad.Maybe.Trans"],
      B = a["Control.Monad.State"],
      z = a["Control.Monad.State.Class"],
      u = a["Control.Monad.State.Trans"],
      E = a["Control.Monad.Writer"],
      H = a["Control.Plus"],
      G = a["Data.Array"],
      J = a["Data.Array.NonEmpty"],
      K = a["Data.Array.NonEmpty.Internal"],
      N = a["Data.Bifunctor"],
      S = a["Data.Either"],
      V = a["Data.Enum"],
      L = a["Data.Foldable"],
      M = a["Data.Functor"],
      w = a["Data.Identity"],
      P = a["Data.List.NonEmpty"],
      I = a["Data.Maybe"],
      F = a["Data.Maybe.First"],
      A = a["Data.Monoid"],
      Y = a["Data.Newtype"],
      ra = a["Data.Semigroup"],
      Ba = a["Data.Show"],
      Ca = a["Data.String.Common"],
      za = a["Data.String.NonEmpty.Internal"],
      x = a["Data.Symbol"],
      ka = a["Data.Traversable"],
      pa = a["Data.Tuple"],
      R = a["Data.UUID"],
      ha = a["Data.Unfoldable"],
      Fa = a["Data.Unit"],
      sa = a["Data.Void"],
      ya = a["DataCite.JSON.Decode.Simple"],
      ua = a["DataCite.Types.Common"],
      Aa = a.Effect,
      Ia = a["Effect.Aff.Class"],
      ea = a["Effect.Class"],
      ma = a["Effect.Class.Console"],
      da = a["Effect.Exception"],
      O = a["Effect.Now"],
      Z = a["Effect.Unsafe"],
      xa = a.Foreign,
      Ga = a.Global,
      X = a["Metajelo.CSS.UI.ClassProps"],
      Oa = a["Metajelo.CSS.UI.Util"],
      Q = a["Metajelo.CSS.Web.ClassProps"],
      ba = a["Metajelo.FormUtil"],
      aa = a["Metajelo.Types"],
      la = a["Metajelo.View"],
      fa = a["Metajelo.XPaths"],
      ia = a["Metajelo.XPaths.Read"],
      va = a["Metajelo.XPaths.Write"],
      wa = a["Nonbili.DOM"],
      C = a.Option,
      oa = a["Record.Extra"],
      Ka = a["Text.URL.Validate"],
      Ha = a["Web.DOM.Document"],
      Pa = a["Web.DOM.Element"],
      Ta = a["Web.File.File"],
      bb = a["Web.File.FileList"],
      cb = a["Web.File.FileReader.Aff"],
      hb = a["Web.HTML"],
      ib = a["Web.HTML.HTMLDocument"],
      db = a["Web.HTML.HTMLElement"],
      eb = a["Web.HTML.HTMLInputElement"],
      nb = a["Web.HTML.Window"],
      Wa = function Wa(U) {
    return function (W) {
      return function (na) {
        return function (ja) {
          return function (qa) {
            return M.mapFlipped(I.functorMaybe)(C.get(U)(W)(na)(ja))(function (ta) {
              return B.execState(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                return "descs_on";
              }))()(x.SProxy.value)(new I.Just(qa))))(ta);
            });
          };
        };
      };
    };
  },
      ob = function ob(U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.title])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.titleHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      return ba.textInput(U);
    }));
  },
      $a = function $a(U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.titleList])(ba.nonEmptyArrayView(ob)(U));
  },
      vb = function vb(U) {
    return function () {
      var W = hb.window();
      W = nb.document(W)();
      W = ib.toDocument(W);
      W = Ha.createElement("a")(W)();
      Pa.setAttribute("download")("metajelo.xml")(W)();
      Pa.setAttribute("href")("data:text/plain;charset=utf-8," + U)(W)();
      W = db.fromElement(W);
      if (W instanceof I.Just) W = db.click(W.value0);else if (W instanceof I.Nothing) W = ma.log(ea.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + U);else throw Error("Failed pattern match at Metajelo.UI (line 132, column 26 - line 136, column 18): " + [W.constructor.name]);
      return W;
    };
  },
      La = function La(U) {
    return function (W) {
      return C.getWithDefault(U)()(C.empty);
    };
  },
      wb = function wb(U) {
    var W = za.fromString("urn:uuid:"),
        na = C.get(new x.IsSymbol(function () {
      return "identifier";
    }))()(x.SProxy.value)(U);
    return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(function () {
      if (na instanceof I.Just) return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(new I.Just(na.value0));
      if (na instanceof I.Nothing) return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(ba.runEffectInit(R.emptyUUID)(R.genUUID))(function (ja) {
        return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(l.bind(I.bindMaybe)(W)(function (qa) {
          return l.bind(I.bindMaybe)(za.fromString(R.toString(ja)))(function (ta) {
            return g.pure(I.applicativeMaybe)(ra.append(za.semigroupNonEmptyString)(qa)(ta));
          });
        }));
      });
      throw Error("Failed pattern match at Metajelo.UI (line 775, column 15 - line 782, column 30): " + [na.constructor.name]);
    }())(function (ja) {
      return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "identifier";
      }))()(x.SProxy.value)(ja)))(function () {
        return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
          return "identifierType";
        }))()(x.SProxy.value)(new I.Just(ua.URN.value)));
      }))(U));
    });
  },
      xb = function xb(U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.format])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.formatHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      return ba.textInput(U);
    }));
  },
      pb = function pb(U) {
    return function (W) {
      return p.div_(r.shiftMapCofree(A.monoidArray))([X.formatList])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.formatListHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("formatEle")(U)))(function () {
          return ba.arrayView(xb)(W);
        });
      }));
    };
  },
      yb = function yb(U) {
    return function () {
      return {
        lastModified: O.nowDateTime(),
        date: U.date,
        identifier: U.identifier,
        relatedIdentifiers: U.relatedIdentifiers,
        supplementaryProducts: U.supplementaryProducts
      };
    };
  },
      qb = function qb(U) {
    return function (W) {
      var na = M.map(K.functorNonEmptyArray)(function (Ra) {
        return Ra.title;
      })(W.data.attributes.titles),
          ja = M.map(K.functorNonEmptyArray)(function (Ra) {
        return Ra.name;
      })(W.data.attributes.creators);
      W = La(new x.IsSymbol(function () {
        return "basicMetadata_opt";
      }))()(x.SProxy.value)(U);
      var qa = C.get(new x.IsSymbol(function () {
        return "creators";
      }))()(x.SProxy.value)(W),
          ta = I.maybe(ja)(function (Ra) {
        return ra.append(K.semigroupNonEmptyArray)(Ra)(ja);
      })(qa);
      qa = C.get(new x.IsSymbol(function () {
        return "titles";
      }))()(x.SProxy.value)(W);
      qa = I.maybe(na)(function (Ra) {
        return ra.append(K.semigroupNonEmptyArray)(Ra)(na);
      })(qa);
      var Ea = J.length(qa),
          Sa = J.length(ta);
      W = B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "titles";
      }))()(x.SProxy.value)(new I.Just(qa))))(function () {
        return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
          return "_numTitles";
        }))()(x.SProxy.value)(new I.Just(Ea))))(function () {
          return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "creators";
          }))()(x.SProxy.value)(new I.Just(ta))))(function () {
            return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
              return "_numCreators";
            }))()(x.SProxy.value)(new I.Just(Sa)));
          });
        });
      }))(W);
      return B.execState(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "basicMetadata_opt";
      }))()(x.SProxy.value)(new I.Just(W))))(U);
    };
  },
      zb = function zb(U) {
    var W = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "fundingStatementURL";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "missionStatementURL";
    }))(C.fromRecordOptionNil)()()()())()()()())())(U),
        na = new S.Right(U.missionStatementURL),
        ja = new S.Right(U.fundingStatementURL);
    return B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(x.SProxy.value)(new I.Just(na))))(function () {
      return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(x.SProxy.value)(new I.Just(ja))))(function () {
        return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
          return "descs_on";
        }))()(x.SProxy.value)(new I.Just(!0)));
      });
    }))(W);
  },
      Ya = function Ya(U) {
    var W = new S.Right(U.url);
    U = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "relationType";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "url";
    }))(C.fromRecordOptionNil)()()()())()()()())())(U);
    return B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
      return "url_Ei";
    }))()(x.SProxy.value)(new I.Just(W))))(function () {
      return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "descs_on";
      }))()(x.SProxy.value)(new I.Just(!0)));
    }))(U);
  },
      rb = function rb(U) {
    if (U.policy instanceof aa.FreeTextPolicy) var W = new I.Just(U.policy.value0);else if (U.policy instanceof aa.RefPolicy) W = za.fromString(Ka.urlToString(U.policy.value0));else throw Error("Failed pattern match at Metajelo.UI (line 474, column 20 - line 476, column 54): " + [U.policy.constructor.name]);
    var na = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "appliesToProduct";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "policy";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "policyType";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())())(U);
    return B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
      return "policy_str";
    }))()(x.SProxy.value)(W)))(function () {
      return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "polPolType";
      }))()(x.SProxy.value)(I.Just.create(ba.polPolTypeIs(U.policy)))))(function () {
        return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
          return "policy_ei";
        }))()(x.SProxy.value)(I.Just.create(new S.Right(U.policy)))))(function () {
          return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "descs_on";
          }))()(x.SProxy.value)(new I.Just(!0)));
        });
      });
    }))(na);
  },
      Ab = function Ab(U) {
    return B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
      return "email_Ei";
    }))()(x.SProxy.value)(I.Just.create(new S.Right(U.emailAddress)))))(function () {
      return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "descs_on";
      }))()(x.SProxy.value)(new I.Just(!0)));
    }))(C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "contactType";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "emailAddress";
    }))(C.fromRecordOptionNil)()()()())()()()())())(U));
  },
      Qa = function Qa(U) {
    var W = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionContact";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionID";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionName";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionPolicies";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionSustainability";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionType";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "superOrganizationName";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "versioning";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(U),
        na = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifier";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifierType";
    }))(C.fromRecordOptionNil)()()()())()()()())())(U.institutionID),
        ja = Ab(U.institutionContact),
        qa = zb(U.institutionSustainability),
        ta = M.map(K.functorNonEmptyArray)(rb)(U.institutionPolicies),
        Ea = J.length(U.institutionPolicies);
    return B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
      return "institutionID_opt";
    }))()(x.SProxy.value)(new I.Just(na))))(function () {
      return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "_numPolicies";
      }))()(x.SProxy.value)(new I.Just(Ea))))(function () {
        return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
          return "iSustain_opt";
        }))()(x.SProxy.value)(new I.Just(qa))))(function () {
          return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "institutionContact_opt";
          }))()(x.SProxy.value)(new I.Just(ja))))(function () {
            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
              return "institutionPolicies_opt";
            }))()(x.SProxy.value)(new I.Just(ta))))(function () {
              return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                return "descs_on";
              }))()(x.SProxy.value)(new I.Just(!0)));
            });
          });
        });
      });
    }))(W);
  },
      sb = function sb(U) {
    var W = J.length(U.titles),
        na = J.length(U.creators);
    return B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
      return "_numTitles";
    }))()(x.SProxy.value)(new I.Just(W))))(function () {
      return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "_numCreators";
      }))()(x.SProxy.value)(new I.Just(na)));
    }))(C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "creators";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "publicationYear";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "titles";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())())(U));
  },
      Ma = function Ma(U) {
    var W = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "basicMetadata";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "format";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "location";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "resourceID";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "resourceType";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(U),
        na = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "description";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "generalType";
    }))(C.fromRecordOptionNil)()()()())()()()())())(U.resourceType),
        ja = M.map(I.functorMaybe)(C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifier";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifierType";
    }))(C.fromRecordOptionNil)()()()())()()()())()))(U.resourceID),
        qa = M.map(I.functorMaybe)(Ya)(U.resourceMetadataSource),
        ta = Qa(U.location),
        Ea = sb(U.basicMetadata),
        Sa = G.length(U.format);
    return B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(x.SProxy.value)(new I.Just(Ea))))(function () {
      return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "resourceID_opt";
      }))()(x.SProxy.value)(ja)))(function () {
        return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
          return "resourceType_opt";
        }))()(x.SProxy.value)(new I.Just(na))))(function () {
          return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "_numFormats";
          }))()(x.SProxy.value)(new I.Just(Sa))))(function () {
            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(x.SProxy.value)(qa)))(function () {
              return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(x.SProxy.value)(new I.Just(ta))))(function () {
                return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                  return "descs_on";
                }))()(x.SProxy.value)(new I.Just(!0)));
              });
            });
          });
        });
      });
    }))(W);
  },
      gb = function gb(U) {
    var W = M.map(K.functorNonEmptyArray)(Ma)(U.supplementaryProducts),
        na = M.map(K.functorNonEmptyArray)(C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifier";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifierType";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "relationType";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())()))(U.relatedIdentifiers),
        ja = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "date";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifier";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "lastModified";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "supplementaryProducts";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(U),
        qa = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifier";
    }))(C.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifierType";
    }))(C.fromRecordOptionNil)()()()())()()()())())(U.identifier),
        ta = J.length(U.supplementaryProducts),
        Ea = J.length(U.relatedIdentifiers);
    return B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
      return "identifier_opt";
    }))()(x.SProxy.value)(new I.Just(qa))))(function () {
      return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
        return "date_Ei";
      }))()(x.SProxy.value)(I.Just.create(new S.Right(U.date)))))(function () {
        return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
          return "_numRelIds";
        }))()(x.SProxy.value)(new I.Just(Ea))))(function () {
          return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "relId_opts";
          }))()(x.SProxy.value)(new I.Just(na))))(function () {
            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
              return "_numSupProds";
            }))()(x.SProxy.value)(new I.Just(ta))))(function () {
              return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                return "supProd_opts";
              }))()(x.SProxy.value)(new I.Just(W))))(function () {
                return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                  return "descs_on";
                }))()(x.SProxy.value)(new I.Just(!0)));
              });
            });
          });
        });
      });
    }))(ja);
  },
      jb = function () {
    var U = N.lmap(S.bifunctorEither)(function (na) {
      return da.error("Error reading XML - please make sure it is well-formed.");
    }),
        W = l.bind(k.widgetBind)(p.span(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([])([p.div_(k.widgetShiftMap)([X.uploadDescr])(H.empty(k.widgetPlus(A.monoidArray))), p.input(m.widgetLiftWidget)([t._type("file"), M.map(q.functorProps)(ba.evTargetElem)(t.onChange)])]))(function (na) {
      return l.bind(k.widgetBind)(ea.liftEffect(k.widgetMonadEff(A.monoidArray))(D.runMaybeT(l.bind(D.bindMaybeT(Aa.monadEffect))(na)(function (ja) {
        return l.bind(D.bindMaybeT(Aa.monadEffect))(D.MaybeT(g.pure(Aa.applicativeEffect)(eb.fromElement(ja))))(function (qa) {
          return l.bind(D.bindMaybeT(Aa.monadEffect))(D.MaybeT(eb.files(qa)))(function (ta) {
            return l.bind(D.bindMaybeT(Aa.monadEffect))(D.MaybeT(g.pure(Aa.applicativeEffect)(bb.item(0)(ta))))(function (Ea) {
              return g.pure(D.applicativeMaybeT(Aa.monadEffect))(Ta.toBlob(Ea));
            });
          });
        });
      }))))(function (ja) {
        if (ja instanceof I.Nothing) return W;
        if (ja instanceof I.Just) return l.bind(k.widgetBind)(Ia.liftAff(k.widgetMonadAff(A.monoidArray))(cb.readAsText(ja.value0)))(function (qa) {
          return l.bind(k.widgetBind)(ea.liftEffect(k.widgetMonadEff(A.monoidArray))(v.runExceptT(l.bind(v.bindExceptT(Aa.monadEffect))(v.ExceptT(M.map(Aa.functorEffect)(U)(da["try"](fa.getDefaultParseEnv(qa)))))(function (ta) {
            return v.ExceptT(da["try"](ia.readRecord(ta)));
          }))))(function (ta) {
            if (ta instanceof S.Right) return g.pure(k.widgetApplicative)(ta.value0);

            if (ta instanceof S.Left) {
              var Ea = ta.value0;
              ta = p.div(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([]);
              var Sa = W,
                  Ra = p.div_(k.widgetShiftMap)([Q.errorDisplayBox]),
                  kb = p.div_(k.widgetShiftMap)([]),
                  mb = p.span(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([Q.errorDisplay]),
                  Gb = p.text(m.widgetLiftWidget);
              Ea = "Couldn't decode MetajeloXML: " + Ba.show(da.showError)(Ea);
              return ta([Sa, Ra(kb(mb([Gb(Ea)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 164, column 11 - line 166, column 37): " + [ta.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 157, column 7 - line 166, column 37): " + [ja.constructor.name]);
      });
    });
    return f.loopW(C.empty)(function (na) {
      return p.div_(k.widgetShiftMap)([])(l.bind(k.widgetBind)(W)(function (ja) {
        return g.pure(k.widgetApplicative)(gb(ja));
      }));
    });
  }(),
      Cb = function Cb(U) {
    var W = p.div_(k.widgetShiftMap)([Q.errorDisplayBox])(p.div_(k.widgetShiftMap)([])(p.span(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([Q.errorDisplay])([p.text(m.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        na = function na(ja) {
      return function (qa) {
        var ta = function ta(Ea) {
          return f.step(Ea)(l.bind(k.widgetBind)(p.button_(k.widgetShiftMap)([X.downloadBtn, t.onClick, t.disabled(Ca["null"](Ea))])(p.text(m.widgetLiftWidget)("Download XML")))(function () {
            return l.bind(k.widgetBind)(ea.liftEffect(k.widgetMonadEff(A.monoidArray))(ja))(function () {
              return g.pure(k.widgetApplicative)(ta(Ea));
            });
          }));
        };

        return f.dyn(ta(qa));
      };
    };

    return p.div_(k.widgetShiftMap)([])(function () {
      var ja = Ga.encodeURIComponent(U);
      return l.bind(k.widgetBind)(ea.liftEffect(k.widgetMonadEff(A.monoidArray))(vb(I.fromMaybe("")(ja))))(function (qa) {
        return I.maybe(W)(na(qa))(ja);
      });
    }());
  },
      tb = function () {
    var U = Oa.mjUiClassPfx + "dataCiteDOI_Input",
        W = function W(ja) {
      var qa = p.div(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([]),
          ta = na,
          Ea = p.div_(k.widgetShiftMap)([Q.errorDisplayBox]),
          Sa = p.div_(k.widgetShiftMap)([]),
          Ra = p.span(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([Q.errorDisplay]),
          kb = p.text(m.widgetLiftWidget);
      ja = "In DataCite retrieval: " + Ba.show(da.showError)(ja);
      return qa([ta, Ea(Sa(Ra([kb(ja)])))]);
    },
        na = p.div_(k.widgetShiftMap)([])(l.discard(l.discardUnit)(k.widgetBind)(M["void"](k.widgetFunctor)(p.button_(k.widgetShiftMap)([t.onClick])(p.text(m.widgetLiftWidget)("Retrieve DataCite Record"))))(function () {
      return l.bind(k.widgetBind)(p.span(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([])([p.input(m.widgetLiftWidget)([t._id(U), t.placeholder("Input DOI here")]), e.applySecond(k.widgetApply)(p.button_(k.widgetShiftMap)([t.onClick])(p.text(m.widgetLiftWidget)("Retrieve")))(ba.getInputTextLE(k.widgetMonadEff(A.monoidArray))(U)), M.voidRight(k.widgetFunctor)(I.Nothing.value)(p.button_(k.widgetShiftMap)([t.onClick])(p.text(m.widgetLiftWidget)("Cancel")))]))(function (ja) {
        if (ja instanceof I.Nothing) return na;

        if (ja instanceof I.Just) {
          ja = Ka.parsePublicURL("https://api.datacite.org/dois/" + ja.value0);
          if (ja instanceof S.Left) return W(da.error(ja.value0));
          if (ja instanceof S.Right) return l.bind(k.widgetBind)(Ia.liftAff(k.widgetMonadAff(A.monoidArray))(d.get(h.string)(Ka.urlToString(ja.value0))))(function (qa) {
            if (qa instanceof S.Left) qa = W(da.error("GET /api response failed to decode: " + d.printError(qa.value0)));else if (qa instanceof S.Right) qa = g.pure(k.widgetApplicative)(I.Just.create(ya.readRecordJSON(qa.value0.body)));else throw Error("Failed pattern match at Metajelo.UI (line 208, column 27 - line 211, column 67): " + [qa.constructor.name]);
            return qa;
          });
          throw Error("Failed pattern match at Metajelo.UI (line 201, column 21 - line 205, column 32): " + [ja.constructor.name]);
        }

        throw Error("Failed pattern match at Metajelo.UI (line 199, column 7 - line 205, column 32): " + [ja.constructor.name]);
      });
    }));

    return f.loopW(I.Nothing.value)(function (ja) {
      return p.div_(k.widgetShiftMap)([])(na);
    });
  }(),
      Db = function Db(U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.creator])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.creatorHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      return ba.textInput(U);
    }));
  },
      lb = function lb(U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.creatorList])(ba.nonEmptyArrayView(Db)(U));
  },
      ub = function ub(U) {
    return function (W) {
      var na = M.map(M.functorArray)(function (ta) {
        return ta.tab;
      })(U),
          ja = M.map(M.functorArray)(function (ta) {
        return ta.page;
      })(U),
          qa = p["div'"](k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([p.text(m.widgetLiftWidget)("No pages to show!")]);
      return l.bind(k.widgetBind)(function (ta) {
        return function (Ea) {
          return function (Sa) {
            return p.div(ta)(Ea)([X.sideBarGrid])([p.div(ta)(Ea)([X.sideBarMenu])([p.div(ta)(Ea)([X.sideBarCol])(Sa)])]);
          };
        };
      }(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([p.nav(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([X.sideBarNav])(function (ta) {
        return M.map(M.functorArray)(function (Ea) {
          return l.discard(l.discardUnit)(k.widgetBind)(M["void"](k.widgetFunctor)(p.div(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([t.onClick, X.sideBarTab])([M.map(k.widgetFunctor)(sa.absurd)(pa.snd(Ea))])))(function () {
            return g.pure(k.widgetApplicative)(pa.fst(Ea));
          });
        })(G.zip(G.range(0)(G.length(ta)))(ta));
      }(na)), M.voidRight(k.widgetFunctor)(W)(function (ta) {
        return I.fromMaybe(qa)(G.index(ja)(ta));
      }(W))]))(function (ta) {
        return ub(U)(ta);
      });
    };
  },
      n = function n(U) {
    var W = function W(na) {
      return f.step(na)(l.bind(k.widgetBind)(p.button_(k.widgetShiftMap)([X.clipBtn, t.onClick, t.disabled(Ca["null"](na))])(p.text(m.widgetLiftWidget)("Copy XML to Clipboard")))(function () {
        return l.bind(k.widgetBind)(ea.liftEffect(k.widgetMonadEff(A.monoidArray))(wa.copyToClipboard(na)))(function () {
          return g.pure(k.widgetApplicative)(W(na));
        });
      }));
    };

    return f.dyn(W(U));
  },
      Xa = function Xa(U) {
    var W = function W(na) {
      return I.maybe(g.pure(Aa.applicativeEffect)(""))(va.recordToString)(na);
    };

    return l.bind(k.widgetBind)(ea.liftEffect(k.widgetMonadEff(A.monoidArray))(ka.sequence(ka.traversableMaybe)(Aa.applicativeEffect)(M.map(I.functorMaybe)(yb)(U))))(function (na) {
      return p.div(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([X.recPreview])([p.div_(k.widgetShiftMap)([X.recPreviewHeader])(H.empty(k.widgetPlus(A.monoidArray))), l.bind(k.widgetBind)(ea.liftEffect(k.widgetMonadEff(A.monoidArray))(W(na)))(function (ja) {
        return p.div(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([X.previewButtons])([Cb(ja), n(ja)]);
      }), p["br'"](m.widgetLiftWidget), L.fold(L.foldableMaybe)(k.widgetMonoid(A.monoidArray))(M.map(I.functorMaybe)(la.mkRecordWidget)(na))]);
    });
  },
      fb = function fb(U) {
    return function (W) {
      return function (na) {
        na = {
          tab: p.text(m.widgetLiftWidget)("Preview"),
          page: Xa(U)
        };
        var ja = {
          tab: p.text(m.widgetLiftWidget)("DataCite Retrieval"),
          page: p.text(m.widgetLiftWidget)("TODO")
        };
        return ub([na, ja])(0);
      };
    };
  },
      Bb = function Bb(U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.sustainability])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.sustainabilityHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.span_(r.shiftMapCofree(A.monoidArray))([X.missionStatement])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.missionStatementHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
        return ba.urlInput(C.getWithDefault(new x.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(new S.Left(""))(x.SProxy.value)(U));
      })))(function (W) {
        var na = S.hush(W);
        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.span_(r.shiftMapCofree(A.monoidArray))([X.fundingStatement])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.fundingStatementHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
          return ba.urlInput(C.getWithDefault(new x.IsSymbol(function () {
            return "fundingUrl_Ei";
          }))()(new S.Left(""))(x.SProxy.value)(U));
        })))(function (ja) {
          var qa = S.hush(ja);
          return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "missionUrl_Ei";
          }))()(x.SProxy.value)(new I.Just(W))))(function () {
            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
              return "missionStatementURL";
            }))()(x.SProxy.value)(na)))(function () {
              return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                return "fundingUrl_Ei";
              }))()(x.SProxy.value)(new I.Just(ja))))(function () {
                return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                  return "fundingStatementURL";
                }))()(x.SProxy.value)(qa));
              });
            });
          }))(U));
        });
      });
    }));
  },
      Jb = function Jb(U) {
    return function (W) {
      return p.div_(r.shiftMapCofree(A.monoidArray))([X.resourceType])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.resourceTypeHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("resourceTypeEle")(U)))(function () {
          return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("resourceTypeSTyp")(U)))(function () {
            return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.resourceTypeGen])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.resourceTypeGenHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
              return ba.menuSignal(ua.boundedEnumResourceTypeGeneral)(ba.isOptionResourceTypeGeneral)(C.get(new x.IsSymbol(function () {
                return "generalType";
              }))()(x.SProxy.value)(W));
            })))(function (na) {
              return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.resourceTypeDescr])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.resourceTypeDescrHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
                return ba.textInput(l.join(I.bindMaybe)(M.map(I.functorMaybe)(za.fromString)(C.get(new x.IsSymbol(function () {
                  return "description";
                }))()(x.SProxy.value)(W))));
              })))(function (ja) {
                return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                  return "description";
                }))()(x.SProxy.value)(M.map(I.functorMaybe)(za.toString)(ja))))(function () {
                  return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                    return "generalType";
                  }))()(x.SProxy.value)(na));
                }))(W));
              });
            });
          });
        });
      }));
    };
  },
      Kb = function Kb(U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.resourceMDSource])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.resourceMDSourceHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      var W = C.getWithDefault(new x.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(x.SProxy.value)(U);
      return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.url])(ba.urlInput(C.getWithDefault(new x.IsSymbol(function () {
        return "url_Ei";
      }))()(new S.Left(""))(x.SProxy.value)(U))))(function (na) {
        var ja = S.hush(na);
        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.relType])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([X.relTypeHeader])(H.empty(H.plusArray))))(function () {
          return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("relationTypeSTyp")(W)))(function () {
            return ba.menuSignal(ua.boundedEnumRelationType)(ba.isOptionRelationType)(C.get(new x.IsSymbol(function () {
              return "relationType";
            }))()(x.SProxy.value)(U));
          });
        })))(function (qa) {
          return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "url_Ei";
          }))()(x.SProxy.value)(new I.Just(na))))(function () {
            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
              return "url";
            }))()(x.SProxy.value)(ja)))(function () {
              return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                return "relationType";
              }))()(x.SProxy.value)(qa));
            });
          }))(U));
        });
      });
    }));
  },
      Lb = function Lb(U) {
    var W = I.fromMaybe(C.empty)(U);
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.relatedId])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.relatedIdHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.id])(ba.textInput(C.get(new x.IsSymbol(function () {
        return "identifier";
      }))()(x.SProxy.value)(W))))(function (na) {
        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.idType])(ba.menuSignal(ua.boundedEnumIdentifierType)(ba.isOptionIdentifierType)(C.get(new x.IsSymbol(function () {
          return "identifierType";
        }))()(x.SProxy.value)(W))))(function (ja) {
          return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.relType])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.relTypeHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
            return ba.menuSignal(ua.boundedEnumRelationType)(ba.isOptionRelationType)(C.get(new x.IsSymbol(function () {
              return "relationType";
            }))()(x.SProxy.value)(W));
          })))(function (qa) {
            return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(I.Just.create(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
              return "identifier";
            }))()(x.SProxy.value)(na)))(function () {
              return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                return "identifierType";
              }))()(x.SProxy.value)(ja)))(function () {
                return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                  return "relationType";
                }))()(x.SProxy.value)(qa));
              });
            }))(W)));
          });
        });
      });
    }));
  },
      Mb = function Mb(U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.relatedIds])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.relatedIdsHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      return p.div_(r.shiftMapCofree(A.monoidArray))([X.relatedIdList])(ba.nonEmptyArrayView(Lb)(U));
    }));
  },
      Hb = function Hb(U) {
    var W = I.fromMaybe(C.empty)(U);
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.institutionPolicy])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.institutionPolicyHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      var na = C.getWithDefault(new x.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(x.SProxy.value)(W);
      return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.policy])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.policyHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
        return ba.menuSignal(ba.boundedEnumPolPolType)(ba.isOptionPolPolType)(I.Just.create(C.getWithDefault(new x.IsSymbol(function () {
          return "polPolType";
        }))()(ba.FreeTextPolicy.value)(x.SProxy.value)(W)));
      })))(function (ja) {
        var qa = I.fromMaybe(ba.FreeTextPolicy.value)(ja);
        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.policy])(ba.textInput(C.get(new x.IsSymbol(function () {
          return "policy_str";
        }))()(x.SProxy.value)(W))))(function (ta) {
          var Ea = ba.checkPolicy(qa)(I.maybe("")(za.toString)(ta));
          return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(function () {
            if (Ea instanceof S.Right) return A.mempty(k.widgetMonoid(A.monoidArray));
            if (Ea instanceof S.Left) return ba.errorDisplay(Ba.showString)(new I.Just(Ea.value0));
            throw Error("Failed pattern match at Metajelo.UI (line 933, column 13 - line 935, column 40): " + [Ea.constructor.name]);
          }()))(function () {
            var Sa = S.hush(Ea);
            return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.policyType])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.policyTypeHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
              return ba.menuSignal(V.boundedEnumMaybe(aa.smallBoundedPolicyType)(aa.boundedEnumPolicyType))(ba.isOptionMaybePolicyType)(C.get(new x.IsSymbol(function () {
                return "policyType";
              }))()(x.SProxy.value)(W));
            })))(function (Ra) {
              return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.applies])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.appliesHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
                return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("appliesToProductAttr")(na)))(function () {
                  return ba.menuSignal(V.boundedEnumMaybe(V.smallBoundedBoolean)(V.boundedEnumBoolean))(ba.isOptionMaybeBoolean)(C.get(new x.IsSymbol(function () {
                    return "appliesToProduct";
                  }))()(x.SProxy.value)(W));
                });
              })))(function (kb) {
                return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(I.Just.create(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                  return "polPolType";
                }))()(x.SProxy.value)(new I.Just(qa))))(function () {
                  return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                    return "policy_str";
                  }))()(x.SProxy.value)(ta)))(function () {
                    return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                      return "policy_ei";
                    }))()(x.SProxy.value)(new I.Just(Ea))))(function () {
                      return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                        return "policy";
                      }))()(x.SProxy.value)(Sa)))(function () {
                        return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                          return "policyType";
                        }))()(x.SProxy.value)(Ra)))(function () {
                          return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                            return "appliesToProduct";
                          }))()(x.SProxy.value)(kb));
                        });
                      });
                    });
                  });
                }))(W)));
              });
            });
          });
        });
      });
    }));
  },
      T = function T(U) {
    return function (W) {
      var na = M.mapFlipped(I.functorMaybe)(pa.snd(W))(function (ja) {
        return M.mapFlipped(K.functorNonEmptyArray)(ja)(function (qa) {
          return B.execState(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "descs_on";
          }))()(x.SProxy.value)(new I.Just(U))))(qa);
        });
      });
      return p.div_(r.shiftMapCofree(A.monoidArray))([X.institutionPolicies])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.institutionPoliciesHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("institutionPoliciesEle")(U)))(function () {
          return ba.nonEmptyArrayView(Hb)(new pa.Tuple(pa.fst(W), na));
        });
      }));
    };
  },
      ca = function ca(U) {
    return function (W) {
      return p.div_(r.shiftMapCofree(A.monoidArray))([X.identifier])(l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.id])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.idHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
        return ba.textInput(C.get(new x.IsSymbol(function () {
          return "identifier";
        }))()(x.SProxy.value)(W));
      })))(function (na) {
        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.idType])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.idTypeHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
          return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("identifierTypeSTyp")(U)))(function () {
            return ba.menuSignal(ua.boundedEnumIdentifierType)(ba.isOptionIdentifierType)(C.get(new x.IsSymbol(function () {
              return "identifierType";
            }))()(x.SProxy.value)(W));
          });
        })))(function (ja) {
          return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "identifier";
          }))()(x.SProxy.value)(na)))(function () {
            return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
              return "identifierType";
            }))()(x.SProxy.value)(ja));
          }))(W));
        });
      }));
    };
  },
      Ja = function Ja(U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.institutionContact])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.institutionContactHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.contactEmail])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.contactEmailHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
        return ba.emailInput(C.getWithDefault(new x.IsSymbol(function () {
          return "email_Ei";
        }))()(new S.Left(""))(x.SProxy.value)(U));
      })))(function (W) {
        var na = S.hush(W);
        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.contactType])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.contactTypeHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
          return ba.menuSignal(V.boundedEnumMaybe(aa.smallBoundedInstitutionContactType)(aa.boundedEnumInstitutionContactType))(ba.isOptionMaybeInstitutionContactType)(C.get(new x.IsSymbol(function () {
            return "contactType";
          }))()(x.SProxy.value)(U));
        })))(function (ja) {
          return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "email_Ei";
          }))()(x.SProxy.value)(new I.Just(W))))(function () {
            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
              return "emailAddress";
            }))()(x.SProxy.value)(na)))(function () {
              return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                return "contactType";
              }))()(x.SProxy.value)(ja));
            });
          }))(U));
        });
      });
    }));
  },
      Da = function Da(U) {
    var W = I.fromMaybe(C.empty)(U);
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.location])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.locationHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      var na = C.getWithDefault(new x.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(x.SProxy.value)(W);
      return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("locationEle")(na)))(function () {
        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([])(p.span_(r.shiftMapCofree(A.monoidArray))([X.institutionId])(ca(na)(La(new x.IsSymbol(function () {
          return "institutionID_opt";
        }))()(x.SProxy.value)(W)))))(function (ja) {
          var qa = C.getAll(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
            return "identifier";
          }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
            return "identifierType";
          }))()()()()(C.getAllOptionNil))))(ja);
          return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.institutionName])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.institutionNameHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
            return ba.textInput(C.get(new x.IsSymbol(function () {
              return "institutionName";
            }))()(x.SProxy.value)(W));
          })))(function (ta) {
            return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.institutionType])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.institutionTypeHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
              return ba.menuSignal(aa.boundedEnumInstitutionType)(ba.isOptionInstitutionType)(C.get(new x.IsSymbol(function () {
                return "institutionType";
              }))()(x.SProxy.value)(W));
            })))(function (Ea) {
              return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p["br'"](m.widgetLiftWidget)))(function () {
                return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.superOrg])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.superOrgHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
                  return ba.textInput(l.join(I.bindMaybe)(C.get(new x.IsSymbol(function () {
                    return "superOrganizationName";
                  }))()(x.SProxy.value)(W)));
                })))(function (Sa) {
                  return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(Ja(La(new x.IsSymbol(function () {
                    return "institutionContact_opt";
                  }))()(x.SProxy.value)(W)))(function (Ra) {
                    var kb = C.getSubset()()(oa.consKeys(new x.IsSymbol(function () {
                      return "contactType";
                    }))(oa.consKeys(new x.IsSymbol(function () {
                      return "emailAddress";
                    }))(oa.nilKeys)))(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                      return "contactType";
                    }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                      return "emailAddress";
                    }))()()()()(C.getAllOptionNil))))(Ra);
                    return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(Bb(La(new x.IsSymbol(function () {
                      return "iSustain_opt";
                    }))()(x.SProxy.value)(W)))(function (mb) {
                      var Gb = C.getSubset()()(oa.consKeys(new x.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))(oa.consKeys(new x.IsSymbol(function () {
                        return "missionStatementURL";
                      }))(oa.nilKeys)))(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                        return "missionStatementURL";
                      }))()()()()(C.getAllOptionNil))))(mb);
                      return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(T(na)(new pa.Tuple(C.getWithDefault(new x.IsSymbol(function () {
                        return "_numPolicies";
                      }))()(1)(x.SProxy.value)(W), C.get(new x.IsSymbol(function () {
                        return "institutionPolicies_opt";
                      }))()(x.SProxy.value)(W))))(function (Eb) {
                        var Ib = pa.fst(Eb),
                            Nb = pa.snd(Eb),
                            Ob = l.join(I.bindMaybe)(M.map(I.functorMaybe)(ka.sequence(K.traversableNonEmptyArray)(I.applicativeMaybe))(M.map(I.functorMaybe)(M.map(K.functorNonEmptyArray)(C.getSubset()()(oa.consKeys(new x.IsSymbol(function () {
                          return "appliesToProduct";
                        }))(oa.consKeys(new x.IsSymbol(function () {
                          return "policy";
                        }))(oa.consKeys(new x.IsSymbol(function () {
                          return "policyType";
                        }))(oa.nilKeys))))(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "appliesToProduct";
                        }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "policy";
                        }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "policyType";
                        }))()()()()(C.getAllOptionNil)))))))(Nb)));
                        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.versioning])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.versioningHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
                          return ba.checkBoxS(C.getWithDefault(new x.IsSymbol(function () {
                            return "versioning";
                          }))()(!1)(x.SProxy.value)(W));
                        })))(function (Qb) {
                          return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                            return "institutionID_opt";
                          }))()(x.SProxy.value)(new I.Just(ja))))(function () {
                            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                              return "institutionID";
                            }))()(x.SProxy.value)(qa)))(function () {
                              return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                return "institutionName";
                              }))()(x.SProxy.value)(ta)))(function () {
                                return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                  return "institutionType";
                                }))()(x.SProxy.value)(Ea)))(function () {
                                  return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                    return "superOrganizationName";
                                  }))()(x.SProxy.value)(new I.Just(Sa))))(function () {
                                    return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                      return "institutionContact_opt";
                                    }))()(x.SProxy.value)(new I.Just(Ra))))(function () {
                                      return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                        return "institutionContact";
                                      }))()(x.SProxy.value)(kb)))(function () {
                                        return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                          return "iSustain_opt";
                                        }))()(x.SProxy.value)(new I.Just(mb))))(function () {
                                          return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                            return "institutionSustainability";
                                          }))()(x.SProxy.value)(Gb)))(function () {
                                            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                              return "_numPolicies";
                                            }))()(x.SProxy.value)(new I.Just(Ib))))(function () {
                                              return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                                return "institutionPolicies_opt";
                                              }))()(x.SProxy.value)(Nb)))(function () {
                                                return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                                  return "institutionPolicies";
                                                }))()(x.SProxy.value)(Ob)))(function () {
                                                  return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                                    return "versioning";
                                                  }))()(x.SProxy.value)(new I.Just(Qb))))(function () {
                                                    return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                                      return "descs_on";
                                                    }))()(x.SProxy.value)(new I.Just(na)));
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
                          }))(W)))(function (Pb) {
                            return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(new I.Just(Pb));
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
      Na = function Na(U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.basicMetadata])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.basicMetadataHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))($a(new pa.Tuple(C.getWithDefault(new x.IsSymbol(function () {
        return "_numTitles";
      }))()(1)(x.SProxy.value)(U), C.get(new x.IsSymbol(function () {
        return "titles";
      }))()(x.SProxy.value)(U))))(function (W) {
        var na = pa.fst(W),
            ja = pa.snd(W);
        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(lb(new pa.Tuple(C.getWithDefault(new x.IsSymbol(function () {
          return "_numCreators";
        }))()(1)(x.SProxy.value)(U), C.get(new x.IsSymbol(function () {
          return "creators";
        }))()(x.SProxy.value)(U))))(function (qa) {
          var ta = pa.fst(qa),
              Ea = pa.snd(qa);
          return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.pubyear])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.pubyearHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
            return ba.natInput(C.get(new x.IsSymbol(function () {
              return "publicationYear";
            }))()(x.SProxy.value)(U));
          })))(function (Sa) {
            return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
              return "titles";
            }))()(x.SProxy.value)(ja)))(function () {
              return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                return "_numTitles";
              }))()(x.SProxy.value)(new I.Just(na))))(function () {
                return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                  return "creators";
                }))()(x.SProxy.value)(Ea)))(function () {
                  return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                    return "_numCreators";
                  }))()(x.SProxy.value)(new I.Just(ta))))(function () {
                    return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                      return "publicationYear";
                    }))()(x.SProxy.value)(Sa));
                  });
                });
              });
            }))(U));
          });
        });
      });
    }));
  },
      Ua = function Ua(U) {
    var W = I.fromMaybe(C.empty)(U);
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.product])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.productHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(tb)(function (na) {
        var ja = M.map(I.functorMaybe)(function () {
          var qa = Y.unwrap(ya.newtypeJSONWithErr);
          return function (ta) {
            return E.runWriter(qa(ta));
          };
        }())(na);
        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(function () {
          if (ja instanceof I.Nothing) return W;

          if (ja instanceof I.Just) {
            if (ja.value0.value0 instanceof S.Right) return qb(W)(ja.value0.value0.value0);
            if (ja.value0.value0 instanceof S.Left) return W;
            throw Error("Failed pattern match at Metajelo.UI (line 601, column 47 - line 603, column 25): " + [ja.value0.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Metajelo.UI (line 599, column 21 - line 603, column 25): " + [ja.constructor.name]);
        }()))(function (qa) {
          var ta = C.getWithDefault(new x.IsSymbol(function () {
            return "descs_on";
          }))()(!0)(x.SProxy.value)(qa);
          return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("supplementaryProductEle")(ta)))(function () {
            return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(Na(La(new x.IsSymbol(function () {
              return "basicMetadata_opt";
            }))()(x.SProxy.value)(qa)))(function (Ea) {
              var Sa = C.getSubset()()(oa.consKeys(new x.IsSymbol(function () {
                return "creators";
              }))(oa.consKeys(new x.IsSymbol(function () {
                return "publicationYear";
              }))(oa.consKeys(new x.IsSymbol(function () {
                return "titles";
              }))(oa.nilKeys))))(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "creators";
              }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "publicationYear";
              }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "titles";
              }))()()()()(C.getAllOptionNil)))))(Ea);
              return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.resourceId])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.resourceIdHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
                return ca(ta)(La(new x.IsSymbol(function () {
                  return "resourceID_opt";
                }))()(x.SProxy.value)(qa));
              })))(function (Ra) {
                var kb = C.getAll(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                  return "identifier";
                }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                  return "identifierType";
                }))()()()()(C.getAllOptionNil))))(Ra);
                return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(Jb(ta)(La(new x.IsSymbol(function () {
                  return "resourceType_opt";
                }))()(x.SProxy.value)(qa)))(function (mb) {
                  var Gb = C.getSubset()()(oa.consKeys(new x.IsSymbol(function () {
                    return "description";
                  }))(oa.consKeys(new x.IsSymbol(function () {
                    return "generalType";
                  }))(oa.nilKeys)))(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                    return "description";
                  }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                    return "generalType";
                  }))()()()()(C.getAllOptionNil))))(mb);
                  return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(pb(ta)(new pa.Tuple(C.getWithDefault(new x.IsSymbol(function () {
                    return "_numFormats";
                  }))()(0)(x.SProxy.value)(qa), C.getWithDefault(new x.IsSymbol(function () {
                    return "format";
                  }))()([])(x.SProxy.value)(qa))))(function (Eb) {
                    var Ib = pa.fst(Eb),
                        Nb = pa.snd(Eb);
                    return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(Kb(I.fromMaybe(C.empty)(Wa(new x.IsSymbol(function () {
                      return "resMdsOpts_opt";
                    }))()(x.SProxy.value)(qa)(ta))))(function (Ob) {
                      var Qb = C.getSubset()()(oa.consKeys(new x.IsSymbol(function () {
                        return "relationType";
                      }))(oa.consKeys(new x.IsSymbol(function () {
                        return "url";
                      }))(oa.nilKeys)))(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                        return "relationType";
                      }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                        return "url";
                      }))()()()()(C.getAllOptionNil))))(Ob);
                      return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(Da(Wa(new x.IsSymbol(function () {
                        return "locationOpts_opt";
                      }))()(x.SProxy.value)(qa)(ta)))(function (Pb) {
                        var Rb = l.join(I.bindMaybe)(M.map(I.functorMaybe)(C.getSubset()()(oa.consKeys(new x.IsSymbol(function () {
                          return "institutionContact";
                        }))(oa.consKeys(new x.IsSymbol(function () {
                          return "institutionID";
                        }))(oa.consKeys(new x.IsSymbol(function () {
                          return "institutionName";
                        }))(oa.consKeys(new x.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(oa.consKeys(new x.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(oa.consKeys(new x.IsSymbol(function () {
                          return "institutionType";
                        }))(oa.consKeys(new x.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(oa.consKeys(new x.IsSymbol(function () {
                          return "versioning";
                        }))(oa.nilKeys)))))))))(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(C.getAllOptionNil)))))))))))(Pb));
                        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                          return "basicMetadata_opt";
                        }))()(x.SProxy.value)(new I.Just(Ea))))(function () {
                          return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                            return "basicMetadata";
                          }))()(x.SProxy.value)(Sa)))(function () {
                            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                              return "resourceID_opt";
                            }))()(x.SProxy.value)(new I.Just(Ra))))(function () {
                              return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                return "resourceID";
                              }))()(x.SProxy.value)(new I.Just(kb))))(function () {
                                return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                  return "resourceType_opt";
                                }))()(x.SProxy.value)(new I.Just(mb))))(function () {
                                  return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                    return "resourceType";
                                  }))()(x.SProxy.value)(Gb)))(function () {
                                    return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                      return "_numFormats";
                                    }))()(x.SProxy.value)(new I.Just(Ib))))(function () {
                                      return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                        return "format";
                                      }))()(x.SProxy.value)(new I.Just(Nb))))(function () {
                                        return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                          return "resMdsOpts_opt";
                                        }))()(x.SProxy.value)(new I.Just(Ob))))(function () {
                                          return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                            return "resourceMetadataSource";
                                          }))()(x.SProxy.value)(new I.Just(Qb))))(function () {
                                            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                              return "locationOpts_opt";
                                            }))()(x.SProxy.value)(Pb)))(function () {
                                              return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                                return "location";
                                              }))()(x.SProxy.value)(Rb)))(function () {
                                                return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                                  return "descs_on";
                                                }))()(x.SProxy.value)(new I.Just(ta)));
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
                        }))(qa)))(function (Sb) {
                          return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(new I.Just(Sb));
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
      Za = function Za(U) {
    return function (W) {
      var na = M.mapFlipped(I.functorMaybe)(pa.snd(W))(function (ja) {
        return M.mapFlipped(K.functorNonEmptyArray)(ja)(function (qa) {
          return B.execState(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
            return "descs_on";
          }))()(x.SProxy.value)(new I.Just(U))))(qa);
        });
      });
      return p.div_(r.shiftMapCofree(A.monoidArray))([X.products])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.productsHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("supplementaryProductsEle")(U)))(function () {
          return p.div_(r.shiftMapCofree(A.monoidArray))([X.productList])(ba.nonEmptyArrayView(Ua)(new pa.Tuple(pa.fst(W), na)));
        });
      }));
    };
  },
      Fb = function Fb(U) {
    var W = C.getWithDefault(new x.IsSymbol(function () {
      return "descs_on";
    }))()(!0)(x.SProxy.value)(U);
    return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("recordEle")(W)))(function () {
      return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("recordTypeCTyp")(W)))(function () {
        return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(wb(La(new x.IsSymbol(function () {
          return "identifier_opt";
        }))()(x.SProxy.value)(U)))(function (na) {
          var ja = C.getAll(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
            return "identifier";
          }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
            return "identifierType";
          }))()()()()(C.getAllOptionNil))))(na);
          C.getWithDefault(new x.IsSymbol(function () {
            return "date_Ei";
          }))()(new S.Left(""))(x.SProxy.value)(U);
          return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.date])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.dateHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
            return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(ba.mkDesc("dateEle")(W)))(function () {
              return ba.dateInput(C.getWithDefault(new x.IsSymbol(function () {
                return "date_Ei";
              }))()(new S.Left(""))(x.SProxy.value)(U));
            });
          })))(function (qa) {
            var ta = S.hush(qa);
            return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(Mb(new pa.Tuple(C.getWithDefault(new x.IsSymbol(function () {
              return "_numRelIds";
            }))()(0)(x.SProxy.value)(U), C.get(new x.IsSymbol(function () {
              return "relId_opts";
            }))()(x.SProxy.value)(U))))(function (Ea) {
              var Sa = pa.fst(Ea),
                  Ra = pa.snd(Ea),
                  kb = l.join(I.bindMaybe)(M.map(I.functorMaybe)(ka.sequence(K.traversableNonEmptyArray)(I.applicativeMaybe))(M.map(I.functorMaybe)(M.map(K.functorNonEmptyArray)(C.getAll(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "identifier";
              }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "identifierType";
              }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "relationType";
              }))()()()()(C.getAllOptionNil)))))))(Ra)));
              return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(Za(W)(new pa.Tuple(C.getWithDefault(new x.IsSymbol(function () {
                return "_numSupProds";
              }))()(0)(x.SProxy.value)(U), C.get(new x.IsSymbol(function () {
                return "supProd_opts";
              }))()(x.SProxy.value)(U))))(function (mb) {
                var Gb = pa.fst(mb),
                    Eb = pa.snd(mb),
                    Ib = l.join(I.bindMaybe)(M.map(I.functorMaybe)(ka.sequence(K.traversableNonEmptyArray)(I.applicativeMaybe))(M.map(I.functorMaybe)(M.map(K.functorNonEmptyArray)(C.getSubset()()(oa.consKeys(new x.IsSymbol(function () {
                  return "basicMetadata";
                }))(oa.consKeys(new x.IsSymbol(function () {
                  return "format";
                }))(oa.consKeys(new x.IsSymbol(function () {
                  return "location";
                }))(oa.consKeys(new x.IsSymbol(function () {
                  return "resourceID";
                }))(oa.consKeys(new x.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))(oa.consKeys(new x.IsSymbol(function () {
                  return "resourceType";
                }))(oa.nilKeys)))))))(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                  return "basicMetadata";
                }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                  return "format";
                }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                  return "location";
                }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                  return "resourceID";
                }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                  return "resourceType";
                }))()()()()(C.getAllOptionNil))))))))))(Eb)));
                return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                  return "identifier_opt";
                }))()(x.SProxy.value)(new I.Just(na))))(function () {
                  return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                    return "identifier";
                  }))()(x.SProxy.value)(ja)))(function () {
                    return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                      return "date_Ei";
                    }))()(x.SProxy.value)(new I.Just(qa))))(function () {
                      return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                        return "date";
                      }))()(x.SProxy.value)(ta)))(function () {
                        return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                          return "_numRelIds";
                        }))()(x.SProxy.value)(new I.Just(Sa))))(function () {
                          return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                            return "relId_opts";
                          }))()(x.SProxy.value)(Ra)))(function () {
                            return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                              return "relatedIdentifiers";
                            }))()(x.SProxy.value)(kb)))(function () {
                              return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                return "_numSupProds";
                              }))()(x.SProxy.value)(new I.Just(Gb))))(function () {
                                return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                  return "supProd_opts";
                                }))()(x.SProxy.value)(Eb)))(function () {
                                  return l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                    return "supplementaryProducts";
                                  }))()(x.SProxy.value)(Ib)))(function () {
                                    return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                                      return "descs_on";
                                    }))()(x.SProxy.value)(new I.Just(W)));
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                }))(U));
              });
            });
          });
        });
      });
    });
  },
      Va = f.loopS(A.monoidArray)(C.empty)(function (U) {
    return p.div_(r.shiftMapCofree(A.monoidArray))([X.record])(l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.recordHeader])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
      return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([X.reloadDescr])(H.empty(k.widgetPlus(A.monoidArray)))))(function () {
        return p.div_(r.shiftMapCofree(A.monoidArray))([X.recFlexBox])(l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.recEditor])(function () {
          var W = C.getWithDefault(new x.IsSymbol(function () {
            return "descs_on";
          }))()(!0)(x.SProxy.value)(U);
          return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(ba.showDescSig(W))(function (na) {
            return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(jb)(function (ja) {
              var qa = C.getSubset()()(oa.consKeys(new x.IsSymbol(function () {
                return "date";
              }))(oa.consKeys(new x.IsSymbol(function () {
                return "identifier";
              }))(oa.consKeys(new x.IsSymbol(function () {
                return "lastModified";
              }))(oa.consKeys(new x.IsSymbol(function () {
                return "relatedIdentifiers";
              }))(oa.consKeys(new x.IsSymbol(function () {
                return "supplementaryProducts";
              }))(oa.nilKeys))))))(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "date";
              }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "identifier";
              }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "lastModified";
              }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "relatedIdentifiers";
              }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
                return "supplementaryProducts";
              }))()()()()(C.getAllOptionNil)))))))(ja);
              ja = I.isNothing(qa) ? U : ja;
              return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(Fb(ja))(function (ta) {
                var Ea = C.get(new x.IsSymbol(function () {
                  return "lastModified";
                }))()(x.SProxy.value)(ta),
                    Sa = Z.unsafePerformEffect(O.nowDateTime);
                return l.bind(r.bindCofree(k.widgetAlternative(A.monoidArray)))(g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(ra.append(F.semigroupFirst)(Ea)(F.First(new I.Just(Sa)))))(function (Ra) {
                  return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(B.execState(l.discard(l.discardUnit)(u.bindStateT(w.monadIdentity))(l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                    return "lastModified";
                  }))()(x.SProxy.value)(Ra)))(function () {
                    return l.bind(u.bindStateT(w.monadIdentity))(z.get(u.monadStateStateT(w.monadIdentity)))(C.maySetOptState(new x.IsSymbol(function () {
                      return "descs_on";
                    }))()(x.SProxy.value)(new I.Just(na)));
                  }))(ta));
                });
              });
            });
          });
        }()))(function (W) {
          var na = C.getSubset()()(oa.consKeys(new x.IsSymbol(function () {
            return "date";
          }))(oa.consKeys(new x.IsSymbol(function () {
            return "identifier";
          }))(oa.consKeys(new x.IsSymbol(function () {
            return "lastModified";
          }))(oa.consKeys(new x.IsSymbol(function () {
            return "relatedIdentifiers";
          }))(oa.consKeys(new x.IsSymbol(function () {
            return "supplementaryProducts";
          }))(oa.nilKeys))))))(C.getAllAny()(C.getAllOptionCons(new x.IsSymbol(function () {
            return "date";
          }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
            return "identifier";
          }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
            return "lastModified";
          }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
            return "relatedIdentifiers";
          }))()()()()(C.getAllOptionCons(new x.IsSymbol(function () {
            return "supplementaryProducts";
          }))()()()()(C.getAllOptionNil)))))))(W);
          return l.discard(l.discardUnit)(r.bindCofree(k.widgetAlternative(A.monoidArray)))(p.div_(r.shiftMapCofree(A.monoidArray))([X.sideBar])(f.display(fb(na)(Fa.unit)(0))))(function () {
            return g.pure(r.applicativeCofree(k.widgetAlternative(A.monoidArray)))(W);
          });
        }));
      });
    }));
  }),
      ab = p["div'"](k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([p.div(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([X.page])(g.pure(g.applicativeArray)(f.dyn(Va)))]);

  c.runFormSPA = function (U) {
    return y.runWidgetInDom(U)(ab);
  };

  c.page = ab;
  c.utf8DataAttr = "data:text/plain;charset=utf-8";
  c.downloadButton = Cb;
  c.mkDLAnchorAndClicker = vb;
  c.uploadButtonSig = jb;
  c.dataCiteButtonSig = tb;
  c.fillWithDataCite = qb;

  c.dataCiteErrorWidg = function (U) {
    return function (W) {
      var na = function na(qa) {
        return function (ta) {
          return G["null"](ta) ? H.empty(k.widgetPlus(A.monoidArray)) : p.div_(k.widgetShiftMap)(qa)(p.ul(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([])(M.mapFlipped(M.functorArray)(ta)(function (Ea) {
            return p.li_(k.widgetShiftMap)([])(p.text(m.widgetLiftWidget)(xa.renderForeignError(Ea)));
          })));
        };
      };

      if (W instanceof I.Nothing) return H.empty(k.widgetPlus(A.monoidArray));

      if (W instanceof I.Just) {
        var ja = na([X.dataCiteNonFatal])(W.value0.value1);
        if (W.value0.value0 instanceof S.Left) W = P.toUnfoldable(ha.unfoldableArray)(W.value0.value0.value0);else if (W.value0.value0 instanceof S.Right) W = [];else throw Error("Failed pattern match at Metajelo.UI (line 251, column 21 - line 253, column 22): " + [W.value0.value0.constructor.name]);
        na = na([X.dataCiteFatal])(W);
        return p.div(k.widgetMultiAlternative(A.monoidArray))(k.widgetShiftMap)([])([p.p_(k.widgetShiftMap)([])(b.alt(k.widgetAlt(A.monoidArray))(b.alt(k.widgetAlt(A.monoidArray))(b.alt(k.widgetAlt(A.monoidArray))(b.alt(k.widgetAlt(A.monoidArray))(p.text(m.widgetLiftWidget)("For more information on this record, see "))(ba.tabLink("https://search.datacite.org/works/" + U)(p.text(m.widgetLiftWidget)("DataCite"))))(p.text(m.widgetLiftWidget)(" or ")))(ba.tabLink("https://dx.doi.org/" + U)(p.text(m.widgetLiftWidget)("resolve the DOI"))))(p.text(m.widgetLiftWidget)("."))), p["br'"](m.widgetLiftWidget), na, ja]);
      }

      throw Error("Failed pattern match at Metajelo.UI (line 247, column 37 - line 265, column 8): " + [W.constructor.name]);
    };
  };

  c.copyButton = n;
  c.fillMetajeloRecordExtra = gb;
  c.fillSProdExtra = Ma;
  c.fillBasicMetadataExtra = sb;
  c.fillLocationRowExtra = Qa;
  c.fillIContactExtra = Ab;
  c.fillSustainExtra = zb;
  c.fillPolicyExtra = rb;
  c.fillResourceMDSExtra = Ya;
  c.accumulateMetajeloRecord = Va;
  c.recWidg = Xa;
  c.finalizeRecord = yb;
  c.accumulateMetajeloRecUI = Fb;
  c.accumulateSuppProd = Ua;
  c.supProdSigArray = Za;
  c.accumulateLocation = Da;
  c.accumulateSustain = Bb;
  c.accumulateIdent = ca;
  c.genRecIdent = wb;
  c.accumulateRelatedIdent = Lb;
  c.relIdSigArray = Mb;
  c.accumulateBasicMetadata = Na;
  c.accumulateResType = Jb;
  c.formatSignal = xb;
  c.formatSigArray = pb;
  c.titleSignal = ob;
  c.titleSigArray = $a;
  c.creatorSignal = Db;
  c.creatorSigArray = lb;
  c.accumulateResMdSource = Kb;
  c.accumulateContact = Ja;
  c.accumulatePolicy = Hb;
  c.policySigArray = T;
  c.getOpt = La;
  c.updateDescOn = Wa;
  c.makeSidebar = fb;
  c.createTabWidget = ub;
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
//# sourceMappingURL=prod.8ec9ebae.js.map