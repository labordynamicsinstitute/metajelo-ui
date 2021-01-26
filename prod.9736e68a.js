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

$jscomp.polyfill = function (a, b, d, h) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, d, h) : $jscomp.polyfillUnisolated(a, b, d, h));
};

$jscomp.polyfillUnisolated = function (a, b, d, h) {
  d = $jscomp.global;
  a = a.split(".");

  for (h = 0; h < a.length - 1; h++) {
    var f = a[h];
    if (!(f in d)) return;
    d = d[f];
  }

  a = a[a.length - 1];
  h = d[a];
  b = b(h);
  b != h && null != b && $jscomp.defineProperty(d, a, {
    configurable: !0,
    writable: !0,
    value: b
  });
};

$jscomp.polyfillIsolated = function (a, b, d, h) {
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
  b = b(d);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, f, {
    configurable: !0,
    writable: !0,
    value: b
  }) : b !== d && ($jscomp.propertyToPolyfillSymbol[f] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(f) : $jscomp.POLYFILL_PREFIX + f, f = $jscomp.propertyToPolyfillSymbol[f], $jscomp.defineProperty(h, f, {
    configurable: !0,
    writable: !0,
    value: b
  })));
};

$jscomp.initSymbol = function () {};

$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;

  var b = function b(f, m) {
    this.$jscomp$symbol$id_ = f;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: m
    });
  };

  b.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };

  var d = 0,
      h = function h(f) {
    if (this instanceof h) throw new TypeError("Symbol is not a constructor");
    return new b("jscomp_symbol_" + (f || "") + "_" + d++, f);
  };

  return h;
}, "es6", "es3");

$jscomp.initSymbolIterator = function () {};

$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), d = 0; d < b.length; d++) {
    var h = $jscomp.global[b[d]];
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

$jscomp.iteratorFromArray = function (a, b) {
  a instanceof String && (a += "");
  var d = 0,
      h = !1,
      f = {
    next: function next() {
      if (!h && d < a.length) {
        var m = d++;
        return {
          value: b(m, a[m]),
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
    return $jscomp.iteratorFromArray(this, function (b) {
      return b;
    });
  };
}, "es6", "es3");

$jscomp.checkStringArgs = function (a, b, d) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + d + " must not be null or undefined");
  if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + d + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (b) {
    var d = $jscomp.checkStringArgs(this, null, "codePointAt"),
        h = d.length;
    b = Number(b) || 0;

    if (0 <= b && b < h) {
      b |= 0;
      var f = d.charCodeAt(b);
      if (55296 > f || 56319 < f || b + 1 === h) return f;
      b = d.charCodeAt(b + 1);
      return 56320 > b || 57343 < b ? f : 1024 * (f - 55296) + b + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (b) {
    for (var d = "", h = 0; h < arguments.length; h++) {
      var f = Number(arguments[h]);
      if (0 > f || 1114111 < f || f !== Math.floor(f)) throw new RangeError("invalid_code_point " + f);
      65535 >= f ? d += String.fromCharCode(f) : (f -= 65536, d += String.fromCharCode(f >>> 10 & 1023 | 55296), d += String.fromCharCode(f & 1023 | 56320));
    }

    return d;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (b, d, h) {
    d = null != d ? d : function (k) {
      return k;
    };
    var f = [],
        m = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];

    if ("function" == typeof m) {
      b = m.call(b);

      for (var q = 0; !(m = b.next()).done;) {
        f.push(d.call(h, m.value, q++));
      }
    } else for (m = b.length, q = 0; q < m; q++) {
      f.push(d.call(h, b[q], q));
    }

    return f;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (b, d) {
    var h = $jscomp.checkStringArgs(this, b, "endsWith");
    b += "";
    void 0 === d && (d = h.length);
    d = Math.max(0, Math.min(d | 0, h.length));

    for (var f = b.length; 0 < f && 0 < d;) {
      if (h[--d] != b[--f]) return !1;
    }

    return 0 >= f;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (b, d) {
    var h = $jscomp.checkStringArgs(this, b, "startsWith");
    b += "";
    var f = h.length,
        m = b.length;
    d = Math.max(0, Math.min(d | 0, h.length));

    for (var q = 0; q < m && d < f;) {
      if (h[d++] != b[q++]) return !1;
    }

    return q >= m;
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, b, d) {
  a instanceof String && (a = String(a));

  for (var h = a.length, f = 0; f < h; f++) {
    var m = a[f];
    if (b.call(d, m, f, a)) return {
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
    }, b.fixupUrl = function (d, h) {
      return null === h.nodejsBaseUrl ? (h = module.require("url"), d = h.parse(d), d.protocol = d.protocol || "http:", d.hostname = d.hostname || "localhost", h.format(d)) : d || "/";
    }, b.getResponse = function (d) {
      return d.response;
    });
    return function (d, h) {
      return function (f, m) {
        var q = b.newXHR(),
            k = b.fixupUrl(h.url, q);
        q.open(h.method || "GET", k, !0, h.username, h.password);
        if (h.headers) try {
          k = 0;

          for (var p; null != (p = h.headers[k]); k++) {
            q.setRequestHeader(p.field, p.value);
          }
        } catch (u) {
          f(u);
        }

        p = function p(u) {
          return function () {
            f(Error(u + ": " + h.method + " " + h.url));
          };
        };

        q.onerror = p("AJAX request failed");
        q.ontimeout = p("AJAX request timed out");

        q.onload = function () {
          m({
            status: q.status,
            statusText: q.statusText,
            headers: q.getAllResponseHeaders().split("\r\n").filter(function (u) {
              return 0 < u.length;
            }).map(function (u) {
              var y = u.indexOf(":");
              return d(u.substring(0, y))(u.substring(y + 2));
            }),
            body: b.getResponse(q)
          });
        };

        q.responseType = h.responseType;
        q.withCredentials = h.withCredentials;
        q.send(h.content);
        return function (u, y, c) {
          try {
            q.abort();
          } catch (g) {
            return y(g);
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
      for (var h = b.length, f = d.length, m = Array(h * f), q = 0, k = 0; k < h; k++) {
        for (var p = b[k], u = 0; u < f; u++) {
          m[q++] = p(d[u]);
        }
      }

      return m;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var b = new function (d) {
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

  a.semigroupoidFn = b;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var b = a["Control.Category"],
      d = a["Control.Semigroupoid"];
  a = new function (h, f) {
    this.Semigroupoid0 = h;
    this.identity = f;
  }(function () {
    return d.semigroupoidFn;
  }, function (h) {
    return h;
  });

  b.identity = function (h) {
    return h.identity;
  };

  b.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (b) {
    return function (d) {
      return function (h) {
        return b(h)(d);
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
      return function (h) {
        return function (f) {
          return b(d(h))(d(f));
        };
      };
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (b) {
    return function (d) {
      for (var h = d.length, f = Array(h), m = 0; m < h; m++) {
        f[m] = b(d[m]);
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
      h = a["Control.Semigroupoid"],
      f = a["Data.Function"],
      m = a["Data.Unit"];

  a = function a(q) {
    this.map = q;
  };

  h = new a(h.compose(h.semigroupoidFn));
  d = new a(d.arrayMap);
  b.Functor = a;

  b.map = function (q) {
    return q.map;
  };

  b.mapFlipped = function (q) {
    return function (k) {
      return function (p) {
        return (0, q.map)(p)(k);
      };
    };
  };

  b["void"] = function (q) {
    return (0, q.map)(f["const"](m.unit));
  };

  b.voidRight = function (q) {
    return function (k) {
      return (0, q.map)(f["const"](k));
    };
  };

  b.functorFn = h;
  b.functorArray = d;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var b = a["Control.Apply"],
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
      return function (u) {
        return k(u)(p(u));
      };
    };
  });
  d = new a(function () {
    return m.functorArray;
  }, d.arrayApply);
  b.Apply = a;

  b.apply = function (k) {
    return k.apply;
  };

  b.applySecond = function (k) {
    return function (p) {
      return function (u) {
        return (0, k.apply)(m.map(k.Functor0())(f["const"](h.identity(h.categoryFn)))(p))(u);
      };
    };
  };

  b.lift2 = function (k) {
    return function (p) {
      return function (u) {
        return function (y) {
          return (0, k.apply)(m.map(k.Functor0())(p)(u))(y);
        };
      };
    };
  };

  b.applyFn = q;
  b.applyArray = d;
})(PS);

(function (a) {
  a["Control.Applicative"] = a["Control.Applicative"] || {};
  var b = a["Control.Applicative"],
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
  b.Applicative = a;

  b.pure = function (f) {
    return f.pure;
  };

  b.liftA1 = function (f) {
    return function (m) {
      return function (q) {
        return d.apply(f.Apply0())((0, f.pure)(m))(q);
      };
    };
  };

  b.applicativeArray = h;
})(PS);

(function (a) {
  a.arrayBind = function (b) {
    return function (d) {
      for (var h = [], f = 0, m = b.length; f < m; f++) {
        Array.prototype.push.apply(h, d(b[f]));
      }

      return h;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var b = a["Control.Bind"],
      d = a["Control.Apply"],
      h = a["Control.Category"],
      f = a["Data.Function"],
      m = function m(p, u) {
    this.Apply0 = p;
    this.bind = u;
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

  b.Bind = m;

  b.bind = function (p) {
    return p.bind;
  };

  b.bindFlipped = q;

  b.discard = function (p) {
    return p.discard;
  };

  b.join = function (p) {
    return function (u) {
      return (0, p.bind)(u)(h.identity(h.categoryFn));
    };
  };

  b.composeKleisliFlipped = function (p) {
    return function (u) {
      return function (y) {
        return function (c) {
          return q(p)(u)(y(c));
        };
      };
    };
  };

  b.bindArray = a;
  b.discardUnit = k;
})(PS);

(function (a) {
  a.topInt = 2147483647;
  a.bottomInt = -2147483648;
  a.topChar = String.fromCharCode(65535);
  a.bottomChar = String.fromCharCode(0);
})(PS["Data.Bounded"] = PS["Data.Bounded"] || {});

(function (a) {
  var b = function b(d) {
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

  a.ordBooleanImpl = b;
  a.ordIntImpl = b;
  a.ordCharImpl = b;
})(PS["Data.Ord"] = PS["Data.Ord"] || {});

(function (a) {
  var b = function b(d) {
    return function (h) {
      return d === h;
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

  a = function a(q) {
    this.eq = q;
  };

  var h = new a(d.eqStringImpl),
      f = new a(d.eqIntImpl),
      m = new a(d.eqCharImpl);
  d = new a(d.eqBooleanImpl);
  b.Eq = a;

  b.eq = function (q) {
    return q.eq;
  };

  b.eqBoolean = d;
  b.eqInt = f;
  b.eqChar = m;
  b.eqString = h;
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
      h = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.LT = b;
  a.GT = d;
  a.EQ = h;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var b = a["Data.Ord"],
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
  b.Ord = a;

  b.compare = function (k) {
    return k.compare;
  };

  b.max = function (k) {
    return function (p) {
      return function (u) {
        var y = (0, k.compare)(p)(u);
        if (y instanceof f.LT) return u;
        if (y instanceof f.EQ || y instanceof f.GT) return p;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [y.constructor.name]);
      };
    };
  };

  b.ordBoolean = d;
  b.ordInt = m;
  b.ordChar = q;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var b = a["Data.Bounded"],
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
  b.Bounded = a;

  b.bottom = function (q) {
    return q.bottom;
  };

  b.top = function (q) {
    return q.top;
  };

  b.boundedBoolean = m;
  b.boundedInt = f;
  b.boundedChar = d;
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var b = a["Data.Maybe"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Category"],
      q = a["Data.Bounded"],
      k = a["Data.Eq"],
      p = a["Data.Function"],
      u = a["Data.Functor"],
      y = a["Data.Ord"],
      c = a["Data.Ordering"],
      g = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      e = function () {
    function B(r) {
      this.value0 = r;
    }

    B.create = function (r) {
      return new B(r);
    };

    return B;
  }(),
      l = function l(B) {
    return function (r) {
      return function (C) {
        if (C instanceof g) return B;
        if (C instanceof e) return r(C.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [B.constructor.name, r.constructor.name, C.constructor.name]);
      };
    };
  };

  a = l(!0)(p["const"](!1));
  p = l(!1)(p["const"](!0));

  var t = new u.Functor(function (B) {
    return function (r) {
      return r instanceof e ? new e(B(r.value0)) : g.value;
    };
  }),
      v = function v(B) {
    return new k.Eq(function (r) {
      return function (C) {
        return r instanceof g && C instanceof g ? !0 : r instanceof e && C instanceof e ? k.eq(B)(r.value0)(C.value0) : !1;
      };
    });
  },
      D = function D(B) {
    return new y.Ord(function () {
      return v(B.Eq0());
    }, function (r) {
      return function (C) {
        if (r instanceof g && C instanceof g) return c.EQ.value;
        if (r instanceof g) return c.LT.value;
        if (C instanceof g) return c.GT.value;
        if (r instanceof e && C instanceof e) return y.compare(B)(r.value0)(C.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [r.constructor.name, C.constructor.name]);
      };
    });
  },
      E = new h.Apply(function () {
    return t;
  }, function (B) {
    return function (r) {
      if (B instanceof e) return u.map(t)(B.value0)(r);
      if (B instanceof g) return g.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [B.constructor.name, r.constructor.name]);
    };
  });

  h = new f.Bind(function () {
    return E;
  }, function (B) {
    return function (r) {
      if (B instanceof e) return r(B.value0);
      if (B instanceof g) return g.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [B.constructor.name, r.constructor.name]);
    };
  });
  d = new d.Applicative(function () {
    return E;
  }, e.create);
  b.Nothing = g;
  b.Just = e;
  b.maybe = l;

  b.fromMaybe = function (B) {
    return l(B)(m.identity(m.categoryFn));
  };

  b.isJust = p;
  b.isNothing = a;

  b.fromJust = function (B) {
    return function (r) {
      if (r instanceof e) return r.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [r.constructor.name]);
    };
  };

  b.functorMaybe = t;
  b.applyMaybe = E;
  b.applicativeMaybe = d;
  b.bindMaybe = h;
  b.ordMaybe = D;

  b.boundedMaybe = function (B) {
    return new q.Bounded(function () {
      return D(B.Ord0());
    }, g.value, new e(q.top(B)));
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
      h = a["Data.MediaType.Common"];

  a = function () {
    function y(c) {
      this.value0 = c;
    }

    y.create = function (c) {
      return new y(c);
    };

    return y;
  }();

  var f = function () {
    function y(c) {
      this.value0 = c;
    }

    y.create = function (c) {
      return new y(c);
    };

    return y;
  }(),
      m = function () {
    function y(c) {
      this.value0 = c;
    }

    y.create = function (c) {
      return new y(c);
    };

    return y;
  }(),
      q = function () {
    function y(c) {
      this.value0 = c;
    }

    y.create = function (c) {
      return new y(c);
    };

    return y;
  }(),
      k = function () {
    function y(c) {
      this.value0 = c;
    }

    y.create = function (c) {
      return new y(c);
    };

    return y;
  }(),
      p = function () {
    function y(c) {
      this.value0 = c;
    }

    y.create = function (c) {
      return new y(c);
    };

    return y;
  }(),
      u = function () {
    function y(c) {
      this.value0 = c;
    }

    y.create = function (c) {
      return new y(c);
    };

    return y;
  }();

  b.ArrayView = a;
  b.Blob = f;
  b.Document = m;
  b.String = q;
  b.FormData = k;
  b.FormURLEncoded = p;
  b.Json = u;

  b.toMediaType = function (y) {
    return y instanceof p ? new d.Just(h.applicationFormURLEncoded) : y instanceof u ? new d.Just(h.applicationJSON) : d.Nothing.value;
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

  b.ff = function (h) {
    return h.ff;
  };

  b.disj = function (h) {
    return h.disj;
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
  b.Semigroup = a;

  b.append = function (q) {
    return q.append;
  };

  b.semigroupString = m;
  b.semigroupUnit = f;
  b.semigroupArray = d;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var b = a["Data.Monoid"],
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
  b.Monoid = h;

  b.mempty = function (q) {
    return q.mempty;
  };

  b.monoidUnit = a;
  b.monoidString = f;
  b.monoidArray = m;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var b = a["Data.Monoid.Disj"],
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

  b.Disj = function (q) {
    return q;
  };

  b.monoidDisj = function (q) {
    return new h.Monoid(function () {
      return m(q);
    }, d.ff(q));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var b = a["Data.Newtype"],
      d = a["Data.Functor"],
      h = function h(f, m) {
    this.unwrap = f;
    this.wrap = m;
  };

  a = new h(function (f) {
    return f;
  }, a["Data.Monoid.Disj"].Disj);

  b.unwrap = function (f) {
    return f.unwrap;
  };

  b.Newtype = h;

  b.alaF = function (f) {
    return function (m) {
      return function (q) {
        return function (k) {
          return function (p) {
            return function (u) {
              var y = d.map(m)(k.unwrap),
                  c = d.map(f)(q.wrap);
              return function (g) {
                return y(u(c(g)));
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
    function k(p, u) {
      this.value0 = p;
      this.value1 = u;
    }

    k.create = function (p) {
      return function (u) {
        return new k(p, u);
      };
    };

    return k;
  }();

  b.Accept = f;
  b.ContentType = m;

  b.name = function (k) {
    if (k instanceof f) return "Accept";
    if (k instanceof m) return "Content-Type";
    if (k instanceof q) return k.value0;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): " + [k.constructor.name]);
  };

  b.value = function (k) {
    if (k instanceof f || k instanceof m) return h.unwrap(d.newtypeMediaType)(k.value0);
    if (k instanceof q) return k.value1;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): " + [k.constructor.name]);
  };
})(PS);

(function (a) {
  a["Affjax.ResponseFormat"] = a["Affjax.ResponseFormat"] || {};

  var b = a["Affjax.ResponseFormat"],
      d = a["Control.Category"],
      h = a["Data.Maybe"],
      f = a["Data.MediaType.Common"],
      m = function () {
    function c(g) {
      this.value0 = g;
    }

    c.create = function (g) {
      return new c(g);
    };

    return c;
  }(),
      q = function () {
    function c(g) {
      this.value0 = g;
    }

    c.create = function (g) {
      return new c(g);
    };

    return c;
  }(),
      k = function () {
    function c(g) {
      this.value0 = g;
    }

    c.create = function (g) {
      return new c(g);
    };

    return c;
  }(),
      p = function () {
    function c(g) {
      this.value0 = g;
    }

    c.create = function (g) {
      return new c(g);
    };

    return c;
  }(),
      u = function () {
    function c(g) {
      this.value0 = g;
    }

    c.create = function (g) {
      return new c(g);
    };

    return c;
  }(),
      y = function () {
    function c(g) {
      this.value0 = g;
    }

    c.create = function (g) {
      return new c(g);
    };

    return c;
  }();

  a = new u(d.identity(d.categoryFn));
  d = new y(d.identity(d.categoryFn));
  b.ArrayBuffer = m;
  b.Blob = q;
  b.Document = k;
  b.Json = p;
  b.String = u;
  b.Ignore = y;
  b.string = a;
  b.ignore = d;

  b.toResponseType = function (c) {
    if (c instanceof m) return "arraybuffer";
    if (c instanceof q) return "blob";
    if (c instanceof k) return "document";
    if (c instanceof p || c instanceof u) return "text";
    if (c instanceof y) return "";
    throw Error("Failed pattern match at Affjax.ResponseFormat (line 46, column 3 - line 52, column 19): " + [c.constructor.name]);
  };

  b.toMediaType = function (c) {
    return c instanceof p ? new h.Just(f.applicationJSON) : h.Nothing.value;
  };
})(PS);

(function (a) {
  a["Affjax.ResponseHeader"] = a["Affjax.ResponseHeader"] || {};
  a = a["Affjax.ResponseHeader"];

  var b = function () {
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

  a.ResponseHeader = b;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var b = a["Control.Monad"],
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
  b.Monad = a;

  b.ap = function (m) {
    return function (q) {
      return function (k) {
        return h.bind(m.Bind1())(q)(function (p) {
          return h.bind(m.Bind1())(k)(function (u) {
            return d.pure(m.Applicative0())(p(u));
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

  b.bimap = function (h) {
    return h.bimap;
  };

  b.Bifunctor = function (h) {
    this.bimap = h;
  };

  b.lmap = function (h) {
    return function (f) {
      return (0, h.bimap)(f)(d.identity(d.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var b = a["Data.Either"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Data.Bifunctor"],
      k = a["Data.Function"],
      p = a["Data.Functor"],
      u = a["Data.Maybe"],
      y = function () {
    function v(D) {
      this.value0 = D;
    }

    v.create = function (D) {
      return new v(D);
    };

    return v;
  }(),
      c = function () {
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
      if (D instanceof c) return new c(v(D.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [D.constructor.name]);
    };
  });

  a = function a(v) {
    return function (D) {
      return function (E) {
        if (E instanceof y) return v(E.value0);
        if (E instanceof c) return D(E.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [v.constructor.name, D.constructor.name, E.constructor.name]);
      };
    };
  };

  k = a(k["const"](u.Nothing.value))(u.Just.create);
  q = new q.Bifunctor(function (v) {
    return function (D) {
      return function (E) {
        if (E instanceof y) return new y(v(E.value0));
        if (E instanceof c) return new c(D(E.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [v.constructor.name, D.constructor.name, E.constructor.name]);
      };
    };
  });
  var e = new h.Apply(function () {
    return g;
  }, function (v) {
    return function (D) {
      if (v instanceof y) return new y(v.value0);
      if (v instanceof c) return p.map(g)(v.value0)(D);
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
      t = new d.Applicative(function () {
    return e;
  }, c.create);
  d = new m.Monad(function () {
    return t;
  }, function () {
    return l;
  });
  b.Left = y;
  b.Right = c;
  b.either = a;

  b.note = function (v) {
    return u.maybe(new y(v))(c.create);
  };

  b.hush = k;
  b.functorEither = g;
  b.bifunctorEither = q;
  b.applicativeEither = t;
  b.bindEither = l;
  b.monadEither = d;
})(PS);

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var b = a["Control.Monad.Error.Class"],
      d = a["Control.Applicative"],
      h = a["Data.Either"],
      f = a["Data.Functor"];

  b.catchError = function (m) {
    return m.catchError;
  };

  b.throwError = function (m) {
    return m.throwError;
  };

  b.MonadThrow = function (m, q) {
    this.Monad0 = m;
    this.throwError = q;
  };

  b.MonadError = function (m, q) {
    this.MonadThrow0 = m;
    this.catchError = q;
  };

  b["try"] = function (m) {
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
  var b = a["Control.Alt"],
      d = a["Data.Functor"],
      h = a["Data.Semigroup"];

  a = function a(f, m) {
    this.Functor0 = f;
    this.alt = m;
  };

  h = new a(function () {
    return d.functorArray;
  }, h.append(h.semigroupArray));
  b.Alt = a;

  b.alt = function (f) {
    return f.alt;
  };

  b.altArray = h;
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
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Control.Monad"],
      k = a["Control.Monad.Error.Class"],
      p = a["Control.Monad.Trans.Class"],
      u = a["Control.Monad.Writer.Class"],
      y = a["Data.Either"],
      c = a["Data.Functor"],
      g = a["Data.Semigroup"],
      e = function e(C) {
    return C;
  };

  a = new a["Data.Newtype"].Newtype(function (C) {
    return C;
  }, e);

  var l = new p.MonadTrans(function (C) {
    return function (H) {
      return m.bind(C.Bind1())(H)(function (G) {
        return h.pure(C.Applicative0())(new y.Right(G));
      });
    };
  }),
      t = function t(C) {
    return function (H) {
      return C(H);
    };
  },
      v = function v(C) {
    return new c.Functor(function (H) {
      return t(c.map(C)(c.map(y.functorEither)(H)));
    });
  },
      D = function D(C) {
    return new q.Monad(function () {
      return r(C);
    }, function () {
      return E(C);
    });
  },
      E = function E(C) {
    return new m.Bind(function () {
      return B(C);
    }, function (H) {
      return function (G) {
        return m.bind(C.Bind1())(H)(y.either(function () {
          var F = h.pure(C.Applicative0());
          return function (J) {
            return F(y.Left.create(J));
          };
        }())(function (F) {
          return G(F);
        }));
      };
    });
  },
      B = function B(C) {
    return new f.Apply(function () {
      return v(C.Bind1().Apply0().Functor0());
    }, q.ap(D(C)));
  },
      r = function r(C) {
    return new h.Applicative(function () {
      return B(C);
    }, function () {
      var H = h.pure(C.Applicative0());
      return function (G) {
        return H(y.Right.create(G));
      };
    }());
  };

  b.ExceptT = e;

  b.runExceptT = function (C) {
    return C;
  };

  b.withExceptT = function (C) {
    return function (H) {
      return function (G) {
        return c.map(C)(function (F) {
          return function (J) {
            if (J instanceof y.Right) return new y.Right(J.value0);
            if (J instanceof y.Left) return new y.Left(F(J.value0));
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 42, column 3 - line 42, column 32): " + [F.constructor.name, J.constructor.name]);
          };
        }(H))(G);
      };
    };
  };

  b.mapExceptT = t;
  b.newtypeExceptT = a;
  b.functorExceptT = v;
  b.applicativeExceptT = r;
  b.bindExceptT = E;

  b.altExceptT = function (C) {
    return function (H) {
      return new d.Alt(function () {
        return v(H.Bind1().Apply0().Functor0());
      }, function (G) {
        return function (F) {
          return m.bind(H.Bind1())(G)(function (J) {
            if (J instanceof y.Right) return h.pure(H.Applicative0())(new y.Right(J.value0));
            if (J instanceof y.Left) return m.bind(H.Bind1())(F)(function (O) {
              if (O instanceof y.Right) return h.pure(H.Applicative0())(new y.Right(O.value0));
              if (O instanceof y.Left) return h.pure(H.Applicative0())(new y.Left(g.append(C)(J.value0)(O.value0)));
              throw Error("Failed pattern match at Control.Monad.Except.Trans (line 86, column 9 - line 88, column 49): " + [O.constructor.name]);
            });
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 82, column 5 - line 88, column 49): " + [J.constructor.name]);
          });
        };
      });
    };
  };

  b.monadThrowExceptT = function (C) {
    return new k.MonadThrow(function () {
      return D(C);
    }, function () {
      var H = h.pure(C.Applicative0());
      return function (G) {
        return H(y.Left.create(G));
      };
    }());
  };

  b.monadTellExceptT = function (C) {
    return new u.MonadTell(function () {
      return D(C.Monad0());
    }, function () {
      var H = p.lift(l)(C.Monad0()),
          G = u.tell(C);
      return function (F) {
        return H(G(F));
      };
    }());
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var b = a["Data.Identity"],
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
      u = new h.Apply(function () {
    return p;
  }, function (g) {
    return function (e) {
      return g(e);
    };
  }),
      y = new f.Bind(function () {
    return u;
  }, function (g) {
    return function (e) {
      return e(g);
    };
  }),
      c = new d.Applicative(function () {
    return u;
  }, k);
  d = new m.Monad(function () {
    return c;
  }, function () {
    return y;
  });
  b.Identity = k;
  b.newtypeIdentity = a;
  b.functorIdentity = p;
  b.applicativeIdentity = c;
  b.monadIdentity = d;
})(PS);

(function (a) {
  a["Control.Monad.Except"] = a["Control.Monad.Except"] || {};
  var b = a["Control.Monad.Except"],
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

  b.runExcept = m;

  b.mapExcept = function (q) {
    return d.mapExceptT(function () {
      var k = f.unwrap(h.newtypeIdentity);
      return function (p) {
        return h.Identity(q(k(p)));
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
          function q(u) {
            return function (y) {
              return h(y)(u)(m[u]);
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
    return u;
  }, d.bind_),
      u = new f.Apply(function () {
    return k;
  }, q.ap(a)),
      y = new h.Applicative(function () {
    return u;
  }, d.pure_);
  b.applicativeST = y;
  b.monadST = a;
})(PS);

(function (a) {
  a.foldrArray = function (b) {
    return function (d) {
      return function (h) {
        for (var f = d, m = h.length - 1; 0 <= m; m--) {
          f = b(h[m])(f);
        }

        return f;
      };
    };
  };

  a.foldlArray = function (b) {
    return function (d) {
      return function (h) {
        for (var f = d, m = h.length, q = 0; q < m; q++) {
          f = b(f)(h[q]);
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

  a = function a(f, m) {
    this.Alt0 = f;
    this.empty = m;
  };

  var h = new a(function () {
    return d.altArray;
  }, []);
  b.Plus = a;

  b.empty = function (f) {
    return f.empty;
  };

  b.plusArray = h;
})(PS);

(function (a) {
  a["Data.Foldable"] = a["Data.Foldable"] || {};
  var b = a["Data.Foldable"],
      d = a["Data.Foldable"],
      h = a["Control.Alt"],
      f = a["Control.Applicative"],
      m = a["Control.Apply"],
      q = a["Control.Category"],
      k = a["Control.Plus"],
      p = a["Data.Function"],
      u = a["Data.Functor"],
      y = a["Data.Maybe"],
      c = a["Data.Monoid"],
      g = a["Data.Monoid.Disj"],
      e = a["Data.Newtype"],
      l = a["Data.Semigroup"],
      t = a["Data.Unit"];

  a = function a(r, C, H) {
    this.foldMap = r;
    this.foldl = C;
    this.foldr = H;
  };

  var v = function v(r) {
    return function (C) {
      return function (H) {
        return (0, C.foldr)(function () {
          var G = m.applySecond(r.Apply0());
          return function (F) {
            return G(H(F));
          };
        }())(f.pure(r)(t.unit));
      };
    };
  },
      D = new a(function (r) {
    return function (C) {
      return function (H) {
        if (H instanceof y.Nothing) return c.mempty(r);
        if (H instanceof y.Just) return C(H.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [C.constructor.name, H.constructor.name]);
      };
    };
  }, function (r) {
    return function (C) {
      return function (H) {
        if (H instanceof y.Nothing) return C;
        if (H instanceof y.Just) return r(C)(H.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [r.constructor.name, C.constructor.name, H.constructor.name]);
      };
    };
  }, function (r) {
    return function (C) {
      return function (H) {
        if (H instanceof y.Nothing) return C;
        if (H instanceof y.Just) return r(H.value0)(C);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [r.constructor.name, C.constructor.name, H.constructor.name]);
      };
    };
  }),
      E = function E(r) {
    return function (C) {
      return function (H) {
        return (0, r.foldr)(function (G) {
          return function (F) {
            return l.append(C.Semigroup0())(H(G))(F);
          };
        })(c.mempty(C));
      };
    };
  },
      B = new a(function (r) {
    return E(B)(r);
  }, d.foldlArray, d.foldrArray);

  b.Foldable = a;

  b.foldr = function (r) {
    return r.foldr;
  };

  b.foldl = function (r) {
    return r.foldl;
  };

  b.foldMap = function (r) {
    return r.foldMap;
  };

  b.fold = function (r) {
    return function (C) {
      return (0, r.foldMap)(C)(q.identity(q.categoryFn));
    };
  };

  b.traverse_ = v;

  b.for_ = function (r) {
    return function (C) {
      return p.flip(v(r)(C));
    };
  };

  b.oneOf = function (r) {
    return function (C) {
      return (0, r.foldr)(h.alt(C.Alt0()))(k.empty(C));
    };
  };

  b.intercalate = function (r) {
    return function (C) {
      return function (H) {
        return function (G) {
          return (0, r.foldl)(function (F) {
            return function (J) {
              return F.init ? {
                init: !1,
                acc: J
              } : {
                init: !1,
                acc: l.append(C.Semigroup0())(F.acc)(l.append(C.Semigroup0())(H)(J))
              };
            };
          })({
            init: !0,
            acc: c.mempty(C)
          })(G).acc;
        };
      };
    };
  };

  b.any = function (r) {
    return function (C) {
      return e.alaF(u.functorFn)(u.functorFn)(e.newtypeDisj)(e.newtypeDisj)(g.Disj)((0, r.foldMap)(g.monoidDisj(C)));
    };
  };

  b.find = function (r) {
    return function (C) {
      return (0, r.foldl)(function (H) {
        return function (G) {
          return H instanceof y.Nothing && C(G) ? new y.Just(G) : H;
        };
      })(y.Nothing.value);
    };
  };

  b.foldableArray = B;
  b.foldableMaybe = D;
})(PS);

(function (a) {
  a.runFn2 = function (b) {
    return function (d) {
      return function (h) {
        return b(d, h);
      };
    };
  };

  a.runFn4 = function (b) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function (m) {
            return b(d, h, f, m);
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
      return function (h) {
        return function () {
          h[b] = d;
          return h;
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
      h = a["Control.Applicative"],
      f = a["Control.Bind"],
      m = a["Control.Monad.ST.Internal"],
      q = a["Data.Foldable"],
      k = a["Data.Maybe"],
      p = a["Foreign.Object.ST"],
      u = a["Unsafe.Coerce"],
      y = d._copyST,
      c = function c(v) {
    return function (D) {
      return d.runST(function () {
        var E = y(D)();
        v(E)();
        return E;
      });
    };
  },
      g = a["Data.Function.Uncurried"].runFn4(d._lookup)(k.Nothing.value)(k.Just.create),
      e = function e(v) {
    return function (D) {
      return c(p.poke(v)(D));
    };
  },
      l = function l(v) {
    return function (D) {
      return function (E) {
        return d._foldM(f.bind(v.Bind1()))(D)(h.pure(v.Applicative0())(E));
      };
    };
  },
      t = function t(v) {
    return c(function (D) {
      return l(m.monadST)(function (E) {
        return function (B) {
          return function (r) {
            return p.poke(B)(r)(E);
          };
        };
      })(D)(v);
    });
  };

  b.lookup = g;

  b.fromFoldableWith = function (v) {
    return function (D) {
      return function (E) {
        return d.runST(function () {
          var B = p["new"]();
          q.for_(m.applicativeST)(v)(E)(function (r) {
            return function () {
              var C = d._lookupST(r.value1, D(r.value1), r.value0, B)();

              return p.poke(r.value0)(C)(B)();
            };
          })();
          return B;
        });
      };
    };
  };

  b.fromHomogeneous = function (v) {
    return u.unsafeCoerce;
  };

  b.alter = function (v) {
    return function (D) {
      return function (E) {
        var B = v(g(D)(E));
        if (B instanceof k.Nothing) return c(p["delete"](D))(E);
        if (B instanceof k.Just) return e(D)(B.value0)(E);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [B.constructor.name]);
      };
    };
  };

  b.unions = function (v) {
    return q.foldl(v)(t)(d.empty);
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
  a._jsonParser = function (b, d, h) {
    try {
      return d(JSON.parse(h));
    } catch (f) {
      return b(f.message);
    }
  };
})(PS["Data.Argonaut.Parser"] = PS["Data.Argonaut.Parser"] || {});

(function (a) {
  a["Data.Argonaut.Parser"] = a["Data.Argonaut.Parser"] || {};
  var b = a["Data.Argonaut.Parser"],
      d = a["Data.Either"];

  a["Data.Argonaut.Parser"].jsonParser = function (h) {
    return b._jsonParser(d.Left.create, d.Right.create, h);
  };
})(PS);

(function (a) {
  a.range = function (b) {
    return function (d) {
      for (var h = b > d ? -1 : 1, f = Array(h * (d - b) + 1), m = b, q = 0; m !== d;) {
        f[q++] = m, m += h;
      }

      f[q] = m;
      return f;
    };
  };

  a.fromFoldableImpl = function () {
    function b(f, m) {
      this.head = f;
      this.tail = m;
    }

    function d(f) {
      return function (m) {
        return new b(f, m);
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

  a.length = function (b) {
    return b.length;
  };

  a.cons = function (b) {
    return function (d) {
      return [b].concat(d);
    };
  };

  a.snoc = function (b) {
    return function (d) {
      var h = b.slice();
      h.push(d);
      return h;
    };
  };

  a["uncons'"] = function (b) {
    return function (d) {
      return function (h) {
        return 0 === h.length ? b({}) : d(h[0])(h.slice(1));
      };
    };
  };

  a.indexImpl = function (b) {
    return function (d) {
      return function (h) {
        return function (f) {
          return 0 > f || f >= h.length ? d : b(h[f]);
        };
      };
    };
  };

  a._updateAt = function (b) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function (m) {
            if (0 > h || h >= m.length) return d;
            m = m.slice();
            m[h] = f;
            return b(m);
          };
        };
      };
    };
  };

  a.filter = function (b) {
    return function (d) {
      return d.filter(b);
    };
  };

  a.slice = function (b) {
    return function (d) {
      return function (h) {
        return h.slice(b, d);
      };
    };
  };

  a.zipWith = function (b) {
    return function (d) {
      return function (h) {
        for (var f = d.length < h.length ? d.length : h.length, m = Array(f), q = 0; q < f; q++) {
          m[q] = b(d[q])(h[q]);
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
  var b = a["Data.Tuple"];
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
  b.Tuple = d;

  b.fst = function (h) {
    return h.value0;
  };

  b.snd = function (h) {
    return h.value1;
  };

  b.functorTuple = a;
})(PS);

(function (a) {
  a["Data.Array"] = a["Data.Array"] || {};
  var b = a["Data.Array"],
      d = a["Data.Array"],
      h = a["Control.Bind"],
      f = a["Control.Category"],
      m = a["Data.Boolean"],
      q = a["Data.Foldable"],
      k = a["Data.Function"],
      p = a["Data.Maybe"];
  a = d.zipWith(a["Data.Tuple"].Tuple.create);

  var u = d._updateAt(p.Just.create)(p.Nothing.value),
      y = d["uncons'"](k["const"](p.Nothing.value))(function (t) {
    return function (v) {
      return new p.Just({
        head: t,
        tail: v
      });
    };
  }),
      c = function c(t) {
    return [t];
  },
      g = function g(t) {
    return 0 === d.length(t);
  },
      e = d.indexImpl(p.Just.create)(p.Nothing.value),
      l = k.flip(h.bind(h.bindArray));

  h = function (t) {
    return l(function () {
      var v = p.maybe([])(c);
      return function (D) {
        return v(t(D));
      };
    }());
  }(f.identity(f.categoryFn));

  b.fromFoldable = function (t) {
    return d.fromFoldableImpl(q.foldr(t));
  };

  b.singleton = c;
  b["null"] = g;

  b.head = function (t) {
    return e(t)(0);
  };

  b.init = function (t) {
    if (g(t)) return p.Nothing.value;
    if (m.otherwise) return new p.Just(d.slice(0)(d.length(t) - 1 | 0)(t));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [t.constructor.name]);
  };

  b.uncons = y;
  b.index = e;
  b.updateAt = u;
  b.concatMap = l;
  b.catMaybes = h;
  b.zip = a;
  b.range = d.range;
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
    function b(m) {
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
            return function (u) {
              function y(c, g) {
                switch (g - c) {
                  case 0:
                    return k([]);

                  case 1:
                    return q(b)(p(u[c]));

                  case 2:
                    return m(q(d)(p(u[c])))(p(u[c + 1]));

                  case 3:
                    return m(m(q(h)(p(u[c])))(p(u[c + 1])))(p(u[c + 2]));

                  default:
                    var e = c + 2 * Math.floor((g - c) / 4);
                    return m(q(f)(y(c, e)))(y(e, g));
                }
              }

              return y(0, u.length);
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
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Category"],
      q = a["Data.Foldable"],
      k = a["Data.Functor"],
      p = a["Data.Maybe"];

  a = function a(g, e, l, t) {
    this.Foldable1 = g;
    this.Functor0 = e;
    this.sequence = l;
    this.traverse = t;
  };

  var u = new a(function () {
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
      c = new a(function () {
    return q.foldableArray;
  }, function () {
    return k.functorArray;
  }, function (g) {
    return y(c)(g);
  }, function (g) {
    return d.traverseArrayImpl(f.apply(g.Apply0()))(k.map(g.Apply0().Functor0()))(h.pure(g));
  });

  b.traverse = function (g) {
    return g.traverse;
  };

  b.sequence = function (g) {
    return g.sequence;
  };

  b.traversableArray = c;
  b.traversableMaybe = u;
})(PS);

(function (a) {
  a.infinity = Infinity;

  a.readInt = function (b) {
    return function (d) {
      return parseInt(d, b);
    };
  };

  a._encodeURIComponent = function (b) {
    return function (d, h, f) {
      try {
        return h(b(f));
      } catch (m) {
        return d(m.message);
      }
    };
  }(encodeURIComponent);
})(PS.Global = PS.Global || {});

(function (a) {
  a.Global = a.Global || {};
  var b = a.Global,
      d = a.Global,
      h = a["Data.Function"],
      f = a["Data.Maybe"];

  b.encodeURIComponent = function (m) {
    return d._encodeURIComponent(h["const"](f.Nothing.value), f.Just.create, m);
  };

  b.infinity = d.infinity;
  b.readInt = d.readInt;
})(PS);

(function (a) {
  a["Data.FormURLEncoded"] = a["Data.FormURLEncoded"] || {};
  var b = a["Data.FormURLEncoded"],
      d = a["Control.Apply"],
      h = a["Data.Functor"],
      f = a["Data.Maybe"],
      m = a["Data.String.Common"],
      q = a["Data.Traversable"],
      k = a.Global;

  a = function () {
    var p = h.map(f.functorMaybe)(m.joinWith("&")),
        u = q.traverse(q.traversableArray)(f.applicativeMaybe)(function (y) {
      if (y.value1 instanceof f.Nothing) return k.encodeURIComponent(y.value0);
      if (y.value1 instanceof f.Just) return d.apply(f.applyMaybe)(h.map(f.functorMaybe)(function (c) {
        return function (g) {
          return c + ("=" + g);
        };
      })(k.encodeURIComponent(y.value0)))(k.encodeURIComponent(y.value1.value0));
      throw Error("Failed pattern match at Data.FormURLEncoded (line 37, column 18 - line 39, column 108): " + [y.constructor.name]);
    });
    return function (y) {
      return p(u(y));
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
    return '"' + b.replace(/[\0-\x1F\x7F"\\]/g, function (h, f) {
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
      f = f < d && "0" <= b[f] && "9" >= b[f] ? "\\&" : "";
      return "\\" + h.charCodeAt(0).toString(10) + f;
    }) + '"';
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};
  var b = a["Data.Show"],
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
  b.Show = a;

  b.show = function (q) {
    return q.show;
  };

  b.showBoolean = m;
  b.showInt = f;
  b.showChar = d;
  b.showString = h;
})(PS);

(function (a) {
  a["Data.HTTP.Method"] = a["Data.HTTP.Method"] || {};
  var b = a["Data.HTTP.Method"],
      d = a["Data.Either"];
  a = a["Data.Show"];

  var h = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      f = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      m = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      q = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      k = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      p = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      u = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      y = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      c = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      g = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      e = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      l = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      t = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      v = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      D = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      E = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      B = new a.Show(function (r) {
    if (r instanceof h) return "OPTIONS";
    if (r instanceof f) return "GET";
    if (r instanceof m) return "HEAD";
    if (r instanceof q) return "POST";
    if (r instanceof k) return "PUT";
    if (r instanceof p) return "DELETE";
    if (r instanceof u) return "TRACE";
    if (r instanceof y) return "CONNECT";
    if (r instanceof c) return "PROPFIND";
    if (r instanceof g) return "PROPPATCH";
    if (r instanceof e) return "MKCOL";
    if (r instanceof l) return "COPY";
    if (r instanceof t) return "MOVE";
    if (r instanceof v) return "LOCK";
    if (r instanceof D) return "UNLOCK";
    if (r instanceof E) return "PATCH";
    throw Error("Failed pattern match at Data.HTTP.Method (line 40, column 1 - line 56, column 23): " + [r.constructor.name]);
  });

  d = d.either(a.show(B))(function (r) {
    return r;
  });
  b.GET = f;
  b.print = d;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var b = a["Control.Monad.Rec.Class"],
      d = a["Data.Bifunctor"],
      h = a["Data.Either"],
      f = function () {
    function p(u) {
      this.value0 = u;
    }

    p.create = function (u) {
      return new p(u);
    };

    return p;
  }(),
      m = function () {
    function p(u) {
      this.value0 = u;
    }

    p.create = function (u) {
      return new p(u);
    };

    return p;
  }();

  a = function a(p, u) {
    this.Monad0 = p;
    this.tailRecM = u;
  };

  var q = function q(p) {
    return function (u) {
      u = p(u);

      for (var y = !1, c; !y;) {
        if (c = u, c instanceof f) u = p(c.value0), c = void 0;else if (c instanceof m) y = !0, c = c.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [c.constructor.name]);
      }

      return c;
    };
  },
      k = new a(function () {
    return h.monadEither;
  }, function (p) {
    return function (u) {
      return q(function (y) {
        if (y instanceof h.Left) return new m(new h.Left(y.value0));
        if (y instanceof h.Right && y.value0 instanceof f) return new f(p(y.value0.value0));
        if (y instanceof h.Right && y.value0 instanceof m) return new m(new h.Right(y.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [y.constructor.name]);
      })(p(u));
    };
  });

  d = new d.Bifunctor(function (p) {
    return function (u) {
      return function (y) {
        if (y instanceof f) return new f(p(y.value0));
        if (y instanceof m) return new m(u(y.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [p.constructor.name, u.constructor.name, y.constructor.name]);
      };
    };
  });
  b.Loop = f;
  b.Done = m;
  b.MonadRec = a;

  b.tailRecM = function (p) {
    return p.tailRecM;
  };

  b.bifunctorStep = d;
  b.monadRecEither = k;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var b = a["Data.NonEmpty"],
      d = a["Control.Plus"],
      h = a["Data.Foldable"],
      f = a["Data.Functor"],
      m = a["Data.Semigroup"],
      q = a["Data.Show"],
      k = function () {
    function p(u, y) {
      this.value0 = u;
      this.value1 = y;
    }

    p.create = function (u) {
      return function (y) {
        return new p(u, y);
      };
    };

    return p;
  }();

  b.NonEmpty = k;

  b.singleton = function (p) {
    return function (u) {
      return new k(u, d.empty(p));
    };
  };

  b.showNonEmpty = function (p) {
    return function (u) {
      return new q.Show(function (y) {
        return "(NonEmpty " + (q.show(p)(y.value0) + (" " + (q.show(u)(y.value1) + ")")));
      });
    };
  };

  b.functorNonEmpty = function (p) {
    return new f.Functor(function (u) {
      return function (y) {
        return new k(u(y.value0), f.map(p)(u)(y.value1));
      };
    });
  };

  b.foldableNonEmpty = function (p) {
    return new h.Foldable(function (u) {
      return function (y) {
        return function (c) {
          return m.append(u.Semigroup0())(y(c.value0))(h.foldMap(p)(u)(y)(c.value1));
        };
      };
    }, function (u) {
      return function (y) {
        return function (c) {
          return h.foldl(p)(u)(u(y)(c.value0))(c.value1);
        };
      };
    }, function (u) {
      return function (y) {
        return function (c) {
          return u(c.value0)(h.foldr(p)(u)(y)(c.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var b = a["Data.List.Types"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Plus"],
      q = a["Data.Foldable"],
      k = a["Data.Function"],
      p = a["Data.Functor"],
      u = a["Data.Monoid"],
      y = a["Data.NonEmpty"],
      c = a["Data.Semigroup"],
      g = a["Data.Show"],
      e = function () {
    function O() {}

    O.value = new O();
    return O;
  }(),
      l = function () {
    function O(Q, V) {
      this.value0 = Q;
      this.value1 = V;
    }

    O.create = function (Q) {
      return function (V) {
        return new O(Q, V);
      };
    };

    return O;
  }(),
      t = new p.Functor(function (O) {
    return function (Q) {
      return function (V) {
        function M(I, K) {
          if (K instanceof l && K.value1 instanceof l && K.value1.value1 instanceof l) L = new l(K, I), V = K.value1.value1.value1;else return w = !0, function (z) {
            return function (Y) {
              for (var ma = z, za = !1, Da; !za;) {
                Da = ma;
                var Ba = Y;
                Da instanceof l && Da.value0 instanceof l && Da.value0.value1 instanceof l && Da.value0.value1.value1 instanceof l ? (ma = Da.value1, Y = new l(O(Da.value0.value0), new l(O(Da.value0.value1.value0), new l(O(Da.value0.value1.value1.value0), Ba))), Da = void 0) : (za = !0, Da = Ba);
              }

              return Da;
            };
          }(I)(function (z) {
            return z instanceof l && z.value1 instanceof l && z.value1.value1 instanceof e ? new l(O(z.value0), new l(O(z.value1.value0), e.value)) : z instanceof l && z.value1 instanceof e ? new l(O(z.value0), e.value) : e.value;
          }(K));
        }

        for (var L = Q, w = !1, R; !w;) {
          R = M(L, V);
        }

        return R;
      };
    }(e.value);
  }),
      v = y.functorNonEmpty(t),
      D = new q.Foldable(function (O) {
    return function (Q) {
      return q.foldl(D)(function (V) {
        var M = c.append(O.Semigroup0())(V);
        return function (L) {
          return M(Q(L));
        };
      })(u.mempty(O));
    };
  }, function (O) {
    return function (Q) {
      return function (V) {
        for (var M = Q, L = !1, w; !L;) {
          w = M;
          var R = V;
          if (R instanceof e) L = !0;else {
            if (R instanceof l) M = O(w)(R.value0), V = R.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [R.constructor.name]);
            w = void 0;
          }
        }

        return w;
      };
    };
  }, function (O) {
    return function (Q) {
      var V = q.foldl(D)(k.flip(l.create))(e.value),
          M = q.foldl(D)(k.flip(O))(Q);
      return function (L) {
        return M(V(L));
      };
    };
  });

  a = y.foldableNonEmpty(D);

  var E = new c.Semigroup(function (O) {
    return function (Q) {
      return q.foldr(D)(l.create)(Q)(O);
    };
  }),
      B = new u.Monoid(function () {
    return E;
  }, e.value),
      r = new c.Semigroup(function (O) {
    return function (Q) {
      return new y.NonEmpty(O.value0, c.append(E)(O.value1)(new l(Q.value0, Q.value1)));
    };
  }),
      C = function C(O) {
    return new g.Show(function (Q) {
      return Q instanceof e ? "Nil" : "(" + (q.intercalate(D)(u.monoidString)(" : ")(p.map(t)(g.show(O))(Q)) + " : Nil)");
    });
  },
      H = new f.Apply(function () {
    return t;
  }, function (O) {
    return function (Q) {
      if (O instanceof e) return e.value;
      if (O instanceof l) return c.append(E)(p.map(t)(O.value0)(Q))(f.apply(H)(O.value1)(Q));
      throw Error("Failed pattern match at Data.List.Types (line 155, column 1 - line 157, column 48): " + [O.constructor.name, Q.constructor.name]);
    };
  }),
      G = new f.Apply(function () {
    return v;
  }, function (O) {
    return function (Q) {
      return new y.NonEmpty(O.value0(Q.value0), c.append(E)(f.apply(H)(O.value1)(new l(Q.value0, e.value)))(f.apply(H)(new l(O.value0, O.value1))(Q.value1)));
    };
  }),
      F = new d.Alt(function () {
    return t;
  }, c.append(E)),
      J = new m.Plus(function () {
    return F;
  }, e.value);

  d = new h.Applicative(function () {
    return G;
  }, function () {
    var O = y.singleton(J);
    return function (Q) {
      return O(Q);
    };
  }());
  b.Nil = e;
  b.Cons = l;

  b.NonEmptyList = function (O) {
    return O;
  };

  b.monoidList = B;
  b.foldableList = D;
  b.plusList = J;

  b.showNonEmptyList = function (O) {
    return new g.Show(function (Q) {
      return "(NonEmptyList " + (g.show(y.showNonEmpty(O)(C(O)))(Q) + ")");
    });
  };

  b.functorNonEmptyList = v;
  b.applicativeNonEmptyList = d;
  b.semigroupNonEmptyList = r;
  b.foldableNonEmptyList = a;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var b = a["Data.List"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Bind"],
      m = a["Control.Monad.Rec.Class"],
      q = a["Data.Bifunctor"],
      k = a["Data.Functor"],
      p = a["Data.List.Types"],
      u = a["Data.Maybe"],
      y = a["Data.Unit"],
      c = function () {
    return function (g) {
      return function (e) {
        for (var l = g, t = !1, v; !t;) {
          v = l;
          var D = e;
          if (D instanceof p.Nil) t = !0;else {
            if (D instanceof p.Cons) l = new p.Cons(D.value0, v), e = D.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [v.constructor.name, D.constructor.name]);
            v = void 0;
          }
        }

        return v;
      };
    }(p.Nil.value);
  }();

  b.manyRec = function (g) {
    return function (e) {
      return function (l) {
        return m.tailRecM(g)(function (t) {
          return f.bind(g.Monad0().Bind1())(d.alt(e.Plus1().Alt0())(k.map(e.Plus1().Alt0().Functor0())(m.Loop.create)(l))(h.pure(e.Applicative0())(new m.Done(y.unit))))(function (v) {
            return h.pure(e.Applicative0())(q.bimap(m.bifunctorStep)(function (D) {
              return new p.Cons(D, t);
            })(function (D) {
              return c(t);
            })(v));
          });
        })(p.Nil.value);
      };
    };
  };

  b.uncons = function (g) {
    if (g instanceof p.Nil) return u.Nothing.value;
    if (g instanceof p.Cons) return new u.Just({
      head: g.value0,
      tail: g.value1
    });
    throw Error("Failed pattern match at Data.List (line 259, column 1 - line 259, column 66): " + [g.constructor.name]);
  };

  b.reverse = c;
})(PS);

(function (a) {
  a.unfoldrArrayImpl = function (b) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function (m) {
            return function (q) {
              for (var k = [];;) {
                q = m(q);
                if (b(q)) return k;
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
  a.unfoldr1ArrayImpl = function (b) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function (m) {
            return function (q) {
              for (var k = [];;) {
                q = m(q);
                k.push(h(q));
                q = f(q);
                if (b(q)) return k;
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
  var b = a["Data.Unfoldable1"],
      d = a["Data.Boolean"],
      h = a["Data.Maybe"],
      f = a["Data.Tuple"];
  a = new function (q) {
    this.unfoldr1 = q;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(h.isNothing)(h.fromJust())(f.fst)(f.snd));

  var m = function m(q) {
    return function (k) {
      return function (p) {
        return (0, q.unfoldr1)(function (u) {
          if (0 >= u) return new f.Tuple(p, h.Nothing.value);
          if (d.otherwise) return new f.Tuple(p, new h.Just(u - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [u.constructor.name]);
        })(k - 1 | 0);
      };
    };
  };

  b.unfoldr1 = function (q) {
    return q.unfoldr1;
  };

  b.singleton = function (q) {
    return m(q)(1);
  };

  b.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Unfoldable"] = a["Data.Unfoldable"] || {};
  var b = a["Data.Unfoldable"],
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

  b.unfoldr = function (k) {
    return k.unfoldr;
  };

  b.fromMaybe = function (k) {
    return (0, k.unfoldr)(function (p) {
      return h.map(f.functorMaybe)(d.flip(m.Tuple.create)(f.Nothing.value))(p);
    });
  };

  b.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.List.NonEmpty"] = a["Data.List.NonEmpty"] || {};
  var b = a["Data.List.NonEmpty"],
      d = a["Data.Functor"],
      h = a["Data.List"],
      f = a["Data.List.Types"],
      m = a["Data.Maybe"],
      q = a["Data.NonEmpty"],
      k = a["Data.Tuple"],
      p = a["Data.Unfoldable"];

  a = function () {
    var u = q.singleton(f.plusList);
    return function (y) {
      return f.NonEmptyList(u(y));
    };
  }();

  b.toUnfoldable = function (u) {
    var y = p.unfoldr(u)(function (c) {
      return d.map(m.functorMaybe)(function (g) {
        return new k.Tuple(g.head, g.tail);
      })(h.uncons(c));
    });
    return function (c) {
      return y(new f.Cons(c.value0, c.value1));
    };
  };

  b.singleton = a;

  b.head = function (u) {
    return u.value0;
  };
})(PS);

(function (a) {
  a["null"] = null;

  a.nullable = function (b, d, h) {
    return null == b ? d : h(b);
  };

  a.notNull = function (b) {
    return b;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var b = a["Data.Nullable"],
      d = a["Data.Nullable"],
      h = a["Data.Maybe"];
  a = h.maybe(d["null"])(d.notNull);

  b.toMaybe = function (f) {
    return d.nullable(f, h.Nothing.value, h.Just.create);
  };

  b.toNullable = a;
})(PS);

(function (a) {
  var b = function () {
    function d(e, l, t, v) {
      this.tag = e;
      this._1 = l;
      this._2 = t;
      this._3 = v;
    }

    function h(e) {
      var l = function l(t, v, D) {
        return new d(e, t, v, D);
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

    function q(e, l, t) {
      try {
        return l(t());
      } catch (v) {
        return e(v);
      }
    }

    function k(e, l, t) {
      try {
        return l(t)();
      } catch (v) {
        return t(e(v))(), f;
      }
    }

    function p(e, l, t) {
      function v(L) {
        for (var w, R, I;;) {
          switch (I = R = w = null, B) {
            case 2:
              B = 1;

              try {
                r = G(r), null === F ? G = null : (G = F._1, F = F._2);
              } catch (z) {
                B = 5, C = e.left(z), r = null;
              }

              break;

            case 3:
              e.isLeft(r) ? (B = 5, C = r, r = null) : null === G ? B = 5 : (B = 2, r = e.fromRight(r));
              break;

            case 1:
              switch (r.tag) {
                case "Bind":
                  G && (F = new d("Cons", G, F));
                  G = r._2;
                  B = 1;
                  r = r._1;
                  break;

                case "Pure":
                  null === G ? (B = 5, r = e.right(r._1)) : (B = 2, r = r._1);
                  break;

                case "Sync":
                  B = 3;
                  r = q(e.left, e.right, r._1);
                  break;

                case "Async":
                  B = 4;
                  r = k(e.left, r._1, function (z) {
                    return function () {
                      E === L && (E++, g.enqueue(function () {
                        E === L + 1 && (B = 3, r = z, v(E));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  B = 5;
                  C = e.left(r._1);
                  r = null;
                  break;

                case "Catch":
                  J = null === G ? new d("Cons", r, J, H) : new d("Cons", r, new d("Cons", new d("Resume", G, F), J, H), H);
                  F = G = null;
                  B = 1;
                  r = r._1;
                  break;

                case "Bracket":
                  O++;
                  J = null === G ? new d("Cons", r, J, H) : new d("Cons", r, new d("Cons", new d("Resume", G, F), J, H), H);
                  F = G = null;
                  B = 1;
                  r = r._1;
                  break;

                case "Fork":
                  B = 3;
                  w = p(e, l, r._2);
                  l && l.register(w);
                  r._1 && w.run();
                  r = e.right(w);
                  break;

                case "Sequential":
                  B = 1, r = y(e, l, r._1);
              }

              break;

            case 5:
              F = G = null;
              if (null === J) B = 6, r = H || C || r;else switch (w = J._3, I = J._1, J = J._2, I.tag) {
                case "Catch":
                  H && H !== w && 0 === O ? B = 5 : C && (B = 1, r = I._2(e.fromLeft(C)), C = null);
                  break;

                case "Resume":
                  H && H !== w && 0 === O || C ? B = 5 : (G = I._1, F = I._2, B = 2, r = e.fromRight(r));
                  break;

                case "Bracket":
                  O--;
                  null === C && (R = e.fromRight(r), J = new d("Cons", new d("Release", I._2, R), J, w), H === w || 0 < O) && (B = 1, r = I._3(R));
                  break;

                case "Release":
                  J = new d("Cons", new d("Finalized", r, C), J, H);
                  B = 1;
                  r = H && H !== w && 0 === O ? I._1.killed(e.fromLeft(H))(I._2) : C ? I._1.failed(e.fromLeft(C))(I._2) : I._1.completed(e.fromRight(r))(I._2);
                  C = null;
                  O++;
                  break;

                case "Finalizer":
                  O++;
                  J = new d("Cons", new d("Finalized", r, C), J, H);
                  B = 1;
                  r = I._1;
                  break;

                case "Finalized":
                  O--, B = 5, r = I._1, C = I._2;
              }
              break;

            case 6:
              for (var K in V) {
                V.hasOwnProperty(K) && (M = M && V[K].rethrow, m(V[K].handler(r)));
              }

              V = null;
              H && C ? setTimeout(function () {
                throw e.fromLeft(C);
              }, 0) : e.isLeft(r) && M && setTimeout(function () {
                if (M) throw e.fromLeft(r);
              }, 0);
              return;

            case 0:
              B = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function D(L) {
        return function () {
          if (6 === B) return M = M && L.rethrow, L.handler(r)(), function () {};
          var w = Q++;
          V = V || {};
          V[w] = L;
          return function () {
            null !== V && delete V[w];
          };
        };
      }

      var E = 0,
          B = 0,
          r = t,
          C = null,
          H = null,
          G = null,
          F = null,
          J = null,
          O = 0,
          Q = 0,
          V = null,
          M = !0;
      return {
        kill: function kill(L, w) {
          return function () {
            if (6 === B) return w(e.right(void 0))(), function () {};
            var R = D({
              rethrow: !1,
              handler: function handler() {
                return w(e.right(void 0));
              }
            })();

            switch (B) {
              case 0:
                H = e.left(L);
                B = 6;
                r = H;
                v(E);
                break;

              case 4:
                null === H && (H = e.left(L));
                0 === O && (4 === B && (J = new d("Cons", new d("Finalizer", r(L)), J, H)), B = 5, C = r = null, v(++E));
                break;

              default:
                null === H && (H = e.left(L)), 0 === O && (B = 5, C = r = null);
            }

            return R;
          };
        },
        join: function join(L) {
          return function () {
            var w = D({
              rethrow: !1,
              handler: L
            })();
            0 === B && v(E);
            return w;
          };
        },
        onComplete: D,
        isSuspended: function isSuspended() {
          return 0 === B;
        },
        run: function run() {
          0 === B && (g.isDraining() ? v(E) : g.enqueue(function () {
            v(E);
          }));
        }
      };
    }

    function u(e, l, t, v) {
      function D(V, M, L) {
        var w = M,
            R = null,
            I = null,
            K = 0;
        M = {};

        a: for (;;) {
          var z = null;

          switch (w.tag) {
            case "Forked":
              w._3 === c && (z = H[w._1], M[K++] = z.kill(V, function (Y) {
                return function () {
                  K--;
                  0 === K && L(Y)();
                };
              }));
              if (null === R) break a;
              w = R._2;
              null === I ? R = null : (R = I._1, I = I._2);
              break;

            case "Map":
              w = w._2;
              break;

            case "Apply":
            case "Alt":
              R && (I = new d("Cons", R, I)), R = w, w = w._1;
          }
        }

        if (0 === K) L(e.right(void 0))();else for (V = 0, z = K; V < z; V++) {
          M[V] = M[V]();
        }
        return M;
      }

      function E(V, M, L) {
        var w, R;

        if (e.isLeft(V)) {
          var I = V;
          var K = null;
        } else K = V, I = null;

        for (;;) {
          var z = R = w = V = null;
          if (null !== O) break;

          if (null === M) {
            v(I || K)();
            break;
          }

          if (M._3 !== c) break;

          switch (M.tag) {
            case "Map":
              null === I ? (M._3 = e.right(M._1(e.fromRight(K))), K = M._3) : M._3 = I;
              break;

            case "Apply":
              V = M._1._3;
              w = M._2._3;

              if (I) {
                if (M._3 = I, R = !0, z = G++, F[z] = D(J, I === V ? M._2 : M._1, function () {
                  return function () {
                    delete F[z];
                    R ? R = !1 : null === L ? E(I, null, null) : E(I, L._1, L._2);
                  };
                }), R) {
                  R = !1;
                  return;
                }
              } else {
                if (V === c || w === c) return;
                K = e.right(e.fromRight(V)(e.fromRight(w)));
                M._3 = K;
              }

              break;

            case "Alt":
              V = M._1._3;
              w = M._2._3;
              if (V === c && e.isLeft(w) || w === c && e.isLeft(V)) return;
              if (V !== c && e.isLeft(V) && w !== c && e.isLeft(w)) I = K === V ? w : V, K = null, M._3 = I;else if (M._3 = K, R = !0, z = G++, F[z] = D(J, K === V ? M._2 : M._1, function () {
                return function () {
                  delete F[z];
                  R ? R = !1 : null === L ? E(K, null, null) : E(K, L._1, L._2);
                };
              }), R) {
                R = !1;
                return;
              }
          }

          null === L ? M = null : (M = L._1, L = L._2);
        }
      }

      function B(V) {
        return function (M) {
          return function () {
            delete H[V._1];
            V._3 = M;
            E(M, V._2._1, V._2._2);
          };
        };
      }

      function r(V, M) {
        O = e.left(V);
        var L;

        for (L in F) {
          if (F.hasOwnProperty(L)) {
            var w = F[L];

            for (L in w) {
              if (w.hasOwnProperty(L)) w[L]();
            }
          }
        }

        F = null;
        var R = D(V, Q, M);
        return function (I) {
          return new d("Async", function (K) {
            return function () {
              for (var z in R) {
                if (R.hasOwnProperty(z)) R[z]();
              }

              return f;
            };
          });
        };
      }

      var C = 0,
          H = {},
          G = 0,
          F = {},
          J = Error("[ParAff] Early exit"),
          O = null,
          Q = c;

      (function () {
        var V = 1,
            M = t,
            L = null,
            w = null;

        a: for (;;) {
          switch (V) {
            case 1:
              switch (M.tag) {
                case "Map":
                  L && (w = new d("Cons", L, w));
                  L = new d("Map", M._1, c, c);
                  M = M._2;
                  break;

                case "Apply":
                  L && (w = new d("Cons", L, w));
                  L = new d("Apply", c, M._2, c);
                  M = M._1;
                  break;

                case "Alt":
                  L && (w = new d("Cons", L, w));
                  L = new d("Alt", c, M._2, c);
                  M = M._1;
                  break;

                default:
                  var R = C++;
                  V = 5;
                  var I = M;
                  M = new d("Forked", R, new d("Cons", L, w), c);
                  I = p(e, l, I);
                  I.onComplete({
                    rethrow: !1,
                    handler: B(M)
                  })();
                  H[R] = I;
                  l && l.register(I);
              }

              break;

            case 5:
              if (null === L) break a;
              L._1 === c ? (L._1 = M, V = 1, M = L._2, L._2 = c) : (L._2 = M, M = L, null === w ? L = null : (L = w._1, w = w._2));
          }
        }

        Q = M;

        for (R = 0; R < C; R++) {
          H[R].run();
        }
      })();

      return function (V) {
        return new d("Async", function (M) {
          return function () {
            return r(V, M);
          };
        });
      };
    }

    function y(e, l, t) {
      return new d("Async", function (v) {
        return function () {
          return u(e, l, t, v);
        };
      });
    }

    var c = {},
        g = function () {
      function e() {
        for (D = !0; 0 !== l;) {
          l--;
          var E = v[t];
          v[t] = void 0;
          t = (t + 1) % 1024;
          E();
        }

        D = !1;
      }

      var l = 0,
          t = 0,
          v = Array(1024),
          D = !1;
      return {
        isDraining: function isDraining() {
          return D;
        },
        enqueue: function enqueue(E) {
          if (1024 === l) {
            var B = D;
            e();
            D = B;
          }

          v[(t + l) % 1024] = E;
          l++;
          D || e();
        }
      };
    }();

    d.EMPTY = c;
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
          t = 0,
          v = 0;
      return {
        register: function register(D) {
          var E = t++;
          D.onComplete({
            rethrow: !0,
            handler: function handler(B) {
              return function () {
                v--;
                delete l[E];
              };
            }
          })();
          l[E] = D;
          v++;
        },
        isEmpty: function isEmpty() {
          return 0 === v;
        },
        killAll: function killAll(D, E) {
          return function () {
            function B(G) {
              C[G] = l[G].kill(D, function (F) {
                return function () {
                  delete C[G];
                  r--;
                  e.isLeft(F) && e.fromLeft(F) && setTimeout(function () {
                    throw e.fromLeft(F);
                  }, 0);
                  0 === r && E();
                };
              })();
            }

            if (0 === v) return E();
            var r = 0,
                C = {},
                H;

            for (H in l) {
              l.hasOwnProperty(H) && (r++, B(H));
            }

            l = {};
            v = t = 0;
            return function (G) {
              return new d("Sync", function () {
                for (var F in C) {
                  if (C.hasOwnProperty(F)) C[F]();
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

  a._pure = b.Pure;
  a._throwError = b.Throw;

  a._catchError = function (d) {
    return function (h) {
      return b.Catch(d, h);
    };
  };

  a._map = function (d) {
    return function (h) {
      return h.tag === b.Pure.tag ? b.Pure(d(h._1)) : b.Bind(h, function (f) {
        return b.Pure(d(f));
      });
    };
  };

  a._bind = function (d) {
    return function (h) {
      return b.Bind(d, h);
    };
  };

  a._liftEffect = b.Sync;

  a._parAffMap = function (d) {
    return function (h) {
      return b.ParMap(d, h);
    };
  };

  a._parAffApply = function (d) {
    return function (h) {
      return b.ParApply(d, h);
    };
  };

  a._parAffAlt = function (d) {
    return function (h) {
      return b.ParAlt(d, h);
    };
  };

  a.makeAff = b.Async;

  a._makeFiber = function (d, h) {
    return function () {
      return b.Fiber(d, null, h);
    };
  };

  a._delay = function () {
    function d(h, f) {
      return 0 === h && "undefined" !== typeof setImmediate ? setImmediate(f) : setTimeout(f, h);
    }

    return function (h, f) {
      return b.Async(function (m) {
        return function () {
          var q = d(f, m(h()));
          return function () {
            return b.Sync(function () {
              var k = 0 === f && "undefined" !== typeof clearImmediate ? clearImmediate(q) : clearTimeout(q);
              return h(k);
            });
          };
        };
      });
    };
  }();

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

  a.Parallel = function (b, d, h, f) {
    this.Applicative1 = b;
    this.Monad0 = d;
    this.parallel = h;
    this.sequential = f;
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var b = a["Control.Category"],
      d = a["Control.Parallel.Class"],
      h = a["Data.Foldable"],
      f = function f(m) {
    return function (q) {
      return function (k) {
        var p = d.sequential(m),
            u = h.traverse_(m.Applicative1())(q)(function () {
          var y = d.parallel(m);
          return function (c) {
            return y(k(c));
          };
        }());
        return function (y) {
          return p(u(y));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (m) {
    return function (q) {
      return f(m)(q)(b.identity(b.categoryFn));
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
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Control.Monad"],
      k = a["Data.Functor"],
      p = a["Data.Monoid"],
      u = a["Data.Semigroup"];
  a = new q.Monad(function () {
    return g;
  }, function () {
    return y;
  });
  var y = new m.Bind(function () {
    return c;
  }, d.bindE),
      c = new f.Apply(function () {
    return e;
  }, q.ap(a)),
      g = new h.Applicative(function () {
    return c;
  }, d.pureE),
      e = new k.Functor(h.liftA1(g));
  b.functorEffect = e;
  b.applyEffect = c;
  b.applicativeEffect = g;
  b.bindEffect = y;
  b.monadEffect = a;

  b.monoidEffect = function (l) {
    return new p.Monoid(function () {
      var t = l.Semigroup0();
      return new u.Semigroup(f.lift2(c)(u.append(t)));
    }, d.pureE(p.mempty(l)));
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var b = a["Effect.Class"],
      d = a["Control.Category"],
      h = a.Effect;

  a = function a(f, m) {
    this.Monad0 = f;
    this.liftEffect = m;
  };

  d = new a(function () {
    return h.monadEffect;
  }, d.identity(d.categoryFn));

  b.liftEffect = function (f) {
    return f.liftEffect;
  };

  b.MonadEffect = a;
  b.monadEffectEffect = d;
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
        } catch (h) {
          return h instanceof Error || "[object Error]" === Object.prototype.toString.call(h) ? b(h)() : b(Error(h.toString()))();
        }
      };
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var b = a["Effect.Exception"],
      d = a["Effect.Exception"],
      h = a["Control.Applicative"],
      f = a["Data.Either"],
      m = a["Data.Functor"],
      q = a.Effect;
  a = new a["Data.Show"].Show(d.showErrorImpl);

  b["throw"] = function (k) {
    return d.throwException(d.error(k));
  };

  b["try"] = function (k) {
    return d.catchException(function () {
      var p = h.pure(q.applicativeEffect);
      return function (u) {
        return p(f.Left.create(u));
      };
    }())(m.map(q.functorEffect)(f.Right.create)(k));
  };

  b.showError = a;
  b.error = d.error;
  b.message = d.message;
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

  a["Partial.Unsafe"].unsafeCrashWith = function (h) {
    return b.unsafePartial(function (f) {
      return d.crashWith()(h);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var b = a["Effect.Aff"],
      d = a["Effect.Aff"],
      h = a["Control.Alt"],
      f = a["Control.Applicative"],
      m = a["Control.Apply"],
      q = a["Control.Bind"],
      k = a["Control.Monad"],
      p = a["Control.Monad.Error.Class"],
      u = a["Control.Parallel"],
      y = a["Control.Parallel.Class"],
      c = a["Control.Plus"],
      g = a["Data.Either"],
      e = a["Data.Foldable"],
      l = a["Data.Function"],
      t = a["Data.Functor"],
      v = a["Data.Monoid"],
      D = a["Data.Semigroup"],
      E = a["Data.Unit"],
      B = a.Effect,
      r = a["Effect.Class"],
      C = a["Effect.Exception"],
      H = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var G = new t.Functor(d._parAffMap),
      F = new t.Functor(d._map),
      J = function () {
    return {
      isLeft: function isLeft(fa) {
        if (fa instanceof g.Left) return !0;
        if (fa instanceof g.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [fa.constructor.name]);
      },
      fromLeft: function fromLeft(fa) {
        if (fa instanceof g.Left) return fa.value0;
        if (fa instanceof g.Right) return H.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [fa.constructor.name]);
      },
      fromRight: function fromRight(fa) {
        if (fa instanceof g.Right) return fa.value0;
        if (fa instanceof g.Left) return H.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [fa.constructor.name]);
      },
      left: g.Left.create,
      right: g.Right.create
    };
  }(),
      O = function O(fa) {
    return function () {
      var ja = d._makeFiber(J, fa)();

      ja.run();
      return ja;
    };
  },
      Q = new m.Apply(function () {
    return G;
  }, d._parAffApply),
      V = new k.Monad(function () {
    return w;
  }, function () {
    return M;
  }),
      M = new q.Bind(function () {
    return L;
  }, d._bind),
      L = new m.Apply(function () {
    return F;
  }, k.ap(V)),
      w = new f.Applicative(function () {
    return L;
  }, d._pure),
      R = new r.MonadEffect(function () {
    return V;
  }, d._liftEffect);

  m = function () {
    var fa = r.liftEffect(R);
    return function (ja) {
      return l["const"](fa(ja));
    };
  }();

  var I = new p.MonadThrow(function () {
    return V;
  }, d._throwError),
      K = new p.MonadError(function () {
    return I;
  }, d._catchError),
      z = function z(fa) {
    return function (ja) {
      return O(q.bindFlipped(M)(function () {
        var S = r.liftEffect(R);
        return function (ia) {
          return S(fa(ia));
        };
      }())(p["try"](K)(ja)));
    };
  },
      Y = new y.Parallel(function () {
    return ma;
  }, function () {
    return V;
  }, a.unsafeCoerce, d._sequential),
      ma = new f.Applicative(function () {
    return Q;
  }, function () {
    var fa = y.parallel(Y),
        ja = f.pure(w);
    return function (S) {
      return fa(ja(S));
    };
  }()),
      za = new D.Semigroup(function (fa) {
    return function (ja) {
      return function (S) {
        return u.parSequence_(Y)(e.foldableArray)([fa(S), ja(S)]);
      };
    };
  });

  D = l["const"](f.pure(w)(E.unit));
  var Da = new v.Monoid(function () {
    return za;
  }, D);
  E = d.makeAff(function (fa) {
    return f.pure(B.applicativeEffect)(v.mempty(Da));
  });
  var Ba = new h.Alt(function () {
    return G;
  }, d._parAffAlt),
      x = new h.Alt(function () {
    return F;
  }, function (fa) {
    return function (ja) {
      return p.catchError(K)(fa)(l["const"](ja));
    };
  });
  h = new c.Plus(function () {
    return x;
  }, p.throwError(I)(C.error("Always fails")));
  c = new c.Plus(function () {
    return Ba;
  }, y.parallel(Y)(c.empty(h)));

  b.runAff_ = function (fa) {
    return function (ja) {
      return t["void"](B.functorEffect)(z(fa)(ja));
    };
  };

  b.delay = function (fa) {
    return d._delay(g.Right.create, fa);
  };

  b.never = E;
  b.nonCanceler = D;
  b.effectCanceler = m;
  b.functorAff = F;
  b.applicativeAff = w;
  b.bindAff = M;
  b.monadErrorAff = K;
  b.monadEffectAff = R;
  b.altParAff = Ba;
  b.plusParAff = c;
  b.parallelAff = Y;
  b.monoidCanceler = Da;
  b.makeAff = d.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.Compat"] = a["Effect.Aff.Compat"] || {};
  var b = a["Data.Either"],
      d = a["Effect.Aff"];

  a["Effect.Aff.Compat"].fromEffectFnAff = function (h) {
    return d.makeAff(function (f) {
      return function () {
        var m = h(function (q) {
          return f(b.Left.create(q))();
        }, function (q) {
          return f(b.Right.create(q))();
        });
        return function (q) {
          return d.makeAff(function (k) {
            return function () {
              m(q, function (p) {
                return k(b.Left.create(p))();
              }, function (p) {
                return k(b.Right.create(p))();
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
      return function (h) {
        return (h | 0) === h ? b(h) : d;
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
      h = a["Data.Boolean"],
      f = a["Data.Bounded"],
      m = a["Data.Maybe"],
      q = a.Global,
      k = a.Math,
      p = d.fromNumberImpl(m.Just.create)(m.Nothing.value),
      u = function u(y) {
    if (y === q.infinity || y === -q.infinity) return 0;
    if (y >= d.toNumber(f.top(f.boundedInt))) return f.top(f.boundedInt);
    if (y <= d.toNumber(f.bottom(f.boundedInt))) return f.bottom(f.boundedInt);
    if (h.otherwise) return m.fromMaybe(0)(p(y));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [y.constructor.name]);
  };

  b.fromNumber = p;

  b.round = function (y) {
    return u(k.round(y));
  };

  b.hexadecimal = 16;
  b.toNumber = d.toNumber;
  b.toStringAs = d.toStringAs;
})(PS);

(function (a) {
  a.Foreign = a.Foreign || {};

  var b = a.Foreign,
      d = a.Foreign,
      h = a["Control.Applicative"],
      f = a["Control.Monad.Error.Class"],
      m = a["Control.Monad.Except"],
      q = a["Control.Monad.Except.Trans"],
      k = a["Data.Boolean"],
      p = a["Data.Either"],
      u = a["Data.Function"],
      y = a["Data.Identity"],
      c = a["Data.Int"],
      g = a["Data.List.NonEmpty"],
      e = a["Data.Maybe"],
      l = a["Data.Show"],
      t = function () {
    function F(J) {
      this.value0 = J;
    }

    F.create = function (J) {
      return new F(J);
    };

    return F;
  }(),
      v = function () {
    function F(J, O) {
      this.value0 = J;
      this.value1 = O;
    }

    F.create = function (J) {
      return function (O) {
        return new F(J, O);
      };
    };

    return F;
  }(),
      D = function () {
    function F(J, O) {
      this.value0 = J;
      this.value1 = O;
    }

    F.create = function (J) {
      return function (O) {
        return new F(J, O);
      };
    };

    return F;
  }(),
      E = function () {
    function F(J, O) {
      this.value0 = J;
      this.value1 = O;
    }

    F.create = function (J) {
      return function (O) {
        return new F(J, O);
      };
    };

    return F;
  }(),
      B = new l.Show(function (F) {
    if (F instanceof t) return "(ForeignError " + (l.show(l.showString)(F.value0) + ")");
    if (F instanceof D) return "(ErrorAtIndex " + (l.show(l.showInt)(F.value0) + (" " + (l.show(B)(F.value1) + ")")));
    if (F instanceof E) return "(ErrorAtProperty " + (l.show(l.showString)(F.value0) + (" " + (l.show(B)(F.value1) + ")")));
    if (F instanceof v) return "(TypeMismatch " + (l.show(l.showString)(F.value0) + (" " + (l.show(l.showString)(F.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [F.constructor.name]);
  }),
      r = function r(F) {
    if (F instanceof t) return F.value0;
    if (F instanceof D) return "Error at array index " + (l.show(l.showInt)(F.value0) + (": " + r(F.value1)));
    if (F instanceof E) return "Error at property " + (l.show(l.showString)(F.value0) + (": " + r(F.value1)));
    if (F instanceof v) return "Type mismatch: expected " + (F.value0 + (", found " + F.value1));
    throw Error("Failed pattern match at Foreign (line 72, column 1 - line 72, column 45): " + [F.constructor.name]);
  },
      C = function () {
    var F = f.throwError(q.monadThrowExceptT(y.monadIdentity));
    return function (J) {
      return F(g.singleton(J));
    };
  }();

  a = function a(F) {
    return function (J) {
      if (d.tagOf(J) === F) return h.pure(q.applicativeExceptT(y.monadIdentity))(d.unsafeFromForeign(J));
      if (k.otherwise) return C(new v(F, d.tagOf(J)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [F.constructor.name, J.constructor.name]);
    };
  };

  var H = a("Number"),
      G = a("String");
  b.ForeignError = t;
  b.TypeMismatch = v;
  b.ErrorAtIndex = D;
  b.ErrorAtProperty = E;
  b.renderForeignError = r;
  b.unsafeReadTagged = a;
  b.readString = G;

  b.readInt = function (F) {
    var J = p.Left.create(g.singleton(new v("Int", d.tagOf(F)))),
        O = function () {
      var Q = e.maybe(J)(h.pure(p.applicativeEither));
      return function (V) {
        return Q(c.fromNumber(V));
      };
    }();

    return m.mapExcept(p.either(u["const"](J))(O))(H(F));
  };

  b.readArray = function (F) {
    if (d.isArray(F)) return h.pure(q.applicativeExceptT(y.monadIdentity))(d.unsafeFromForeign(F));
    if (k.otherwise) return C(new v("array", d.tagOf(F)));
    throw Error("Failed pattern match at Foreign (line 147, column 1 - line 147, column 42): " + [F.constructor.name]);
  };

  b.fail = C;
  b.showForeignError = B;
  b.unsafeToForeign = d.unsafeToForeign;
  b.typeOf = d.typeOf;
  b.isNull = d.isNull;
  b.isUndefined = d.isUndefined;
})(PS);

(function (a) {
  a.Affjax = a.Affjax || {};

  var b = a.Affjax,
      d = a.Affjax,
      h = a["Affjax.RequestBody"],
      f = a["Affjax.RequestHeader"],
      m = a["Affjax.ResponseFormat"],
      q = a["Affjax.ResponseHeader"],
      k = a["Control.Applicative"],
      p = a["Control.Bind"],
      u = a["Control.Monad.Error.Class"],
      y = a["Control.Monad.Except"],
      c = a["Control.Monad.Except.Trans"],
      g = a["Data.Argonaut.Core"],
      e = a["Data.Argonaut.Parser"],
      l = a["Data.Array"],
      t = a["Data.Either"],
      v = a["Data.Eq"],
      D = a["Data.Foldable"],
      E = a["Data.FormURLEncoded"],
      B = a["Data.Function"],
      r = a["Data.Functor"],
      C = a["Data.HTTP.Method"],
      H = a["Data.HeytingAlgebra"],
      G = a["Data.Identity"],
      F = a["Data.List.NonEmpty"],
      J = a["Data.Maybe"],
      O = a["Data.Nullable"],
      Q = a["Data.Unit"],
      V = a["Effect.Aff"],
      M = a["Effect.Aff.Compat"],
      L = a["Effect.Exception"],
      w = a.Foreign,
      R = function () {
    function x(fa) {
      this.value0 = fa;
    }

    x.create = function (fa) {
      return new x(fa);
    };

    return x;
  }(),
      I = function () {
    function x(fa, ja) {
      this.value0 = fa;
      this.value1 = ja;
    }

    x.create = function (fa) {
      return function (ja) {
        return new x(fa, ja);
      };
    };

    return x;
  }(),
      K = function () {
    function x(fa) {
      this.value0 = fa;
    }

    x.create = function (fa) {
      return new x(fa);
    };

    return x;
  }(),
      z = function z(x) {
    var fa = function fa(wa) {
      return "" === wa ? k.pure(c.applicativeExceptT(G.monadIdentity))(g.jsonEmptyObject) : t.either(function (ya) {
        return w.fail(w.ForeignError.create(ya));
      })(k.pure(c.applicativeExceptT(G.monadIdentity)))(e.jsonParser(wa));
    },
        ja = function () {
      if (x.responseFormat instanceof m.ArrayBuffer) return w.unsafeReadTagged("ArrayBuffer");
      if (x.responseFormat instanceof m.Blob) return w.unsafeReadTagged("Blob");
      if (x.responseFormat instanceof m.Document) return w.unsafeReadTagged("Document");
      if (x.responseFormat instanceof m.Json) return p.composeKleisliFlipped(c.bindExceptT(G.monadIdentity))(function (wa) {
        return x.responseFormat.value0(fa(wa));
      })(w.unsafeReadTagged("String"));
      if (x.responseFormat instanceof m.String) return w.unsafeReadTagged("String");
      if (x.responseFormat instanceof m.Ignore) return B["const"](x.responseFormat.value0(k.pure(c.applicativeExceptT(G.monadIdentity))(Q.unit)));
      throw Error("Failed pattern match at Affjax (line 237, column 18 - line 243, column 57): " + [x.responseFormat.constructor.name]);
    }(),
        S = function S(wa) {
      if (wa instanceof h.ArrayView) return t.Right.create(wa.value0(w.unsafeToForeign));
      if (wa instanceof h.Blob || wa instanceof h.Document || wa instanceof h.String || wa instanceof h.FormData) return t.Right.create(w.unsafeToForeign(wa.value0));
      if (wa instanceof h.FormURLEncoded) return t.note("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(r.map(J.functorMaybe)(w.unsafeToForeign)(E.encode(wa.value0)));
      if (wa instanceof h.Json) return t.Right.create(w.unsafeToForeign(g.stringify(wa.value0)));
      throw Error("Failed pattern match at Affjax (line 203, column 20 - line 218, column 69): " + [wa.constructor.name]);
    },
        ia = function ia(wa) {
      return function (ya) {
        return wa instanceof J.Just && !D.any(D.foldableArray)(H.heytingAlgebraBoolean)(B.on(v.eq(v.eqString))(f.name)(wa.value0))(ya) ? l.snoc(ya)(wa.value0) : ya;
      };
    },
        Ia = function Ia(wa) {
      return ia(r.map(J.functorMaybe)(f.ContentType.create)(p.bindFlipped(J.bindMaybe)(h.toMediaType)(wa)))(ia(r.map(J.functorMaybe)(f.Accept.create)(m.toMediaType(x.responseFormat)))(x.headers));
    },
        sa = function sa(wa) {
      return {
        method: C.print(x.method),
        url: x.url,
        headers: r.map(r.functorArray)(function (ya) {
          return {
            field: f.name(ya),
            value: f.value(ya)
          };
        })(Ia(x.content)),
        content: wa,
        responseType: m.toResponseType(x.responseFormat),
        username: O.toNullable(x.username),
        password: O.toNullable(x.password),
        withCredentials: x.withCredentials
      };
    },
        ta = function ta(wa) {
      return r.mapFlipped(V.functorAff)(u["try"](V.monadErrorAff)(M.fromEffectFnAff(d._ajax(q.ResponseHeader.create, sa(wa)))))(function (ya) {
        if (ya instanceof t.Right) {
          var Ga = y.runExcept(ja(ya.value0.body));
          if (Ga instanceof t.Left) return new t.Left(new I(F.head(Ga.value0), ya.value0));
          if (Ga instanceof t.Right) return new t.Right({
            body: Ga.value0,
            headers: ya.value0.headers,
            status: ya.value0.status,
            statusText: ya.value0.statusText
          });
          throw Error("Failed pattern match at Affjax (line 184, column 9 - line 186, column 52): " + [Ga.constructor.name]);
        }

        if (ya instanceof t.Left) return new t.Left(new K(ya.value0));
        throw Error("Failed pattern match at Affjax (line 182, column 86 - line 188, column 28): " + [ya.constructor.name]);
      });
    };

    if (x.content instanceof J.Nothing) return ta(O.toNullable(J.Nothing.value));

    if (x.content instanceof J.Just) {
      S = S(x.content.value0);
      if (S instanceof t.Right) return ta(O.toNullable(new J.Just(S.value0)));
      if (S instanceof t.Left) return k.pure(V.applicativeAff)(new t.Left(new R(S.value0)));
      throw Error("Failed pattern match at Affjax (line 173, column 7 - line 177, column 48): " + [S.constructor.name]);
    }

    throw Error("Failed pattern match at Affjax (line 169, column 3 - line 177, column 48): " + [x.content.constructor.name]);
  },
      Y = new t.Left(C.GET.value),
      ma = [],
      za = J.Nothing.value,
      Da = J.Nothing.value,
      Ba = J.Nothing.value;

  b.printError = function (x) {
    if (x instanceof R) return "There was a problem with the request content: " + x.value0;
    if (x instanceof I) return "There was a problem with the response body: " + w.renderForeignError(x.value0);
    if (x instanceof K) return "There was a problem making the request: " + L.message(x.value0);
    throw Error("Failed pattern match at Affjax (line 91, column 14 - line 97, column 66): " + [x.constructor.name]);
  };

  b.get = function (x) {
    return function (fa) {
      return z({
        method: Y,
        url: fa,
        headers: ma,
        content: za,
        username: Da,
        password: Ba,
        withCredentials: !1,
        responseFormat: x
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
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var b = a["Data.CatQueue"],
      d = a["Data.List"],
      h = a["Data.List.Types"],
      f = a["Data.Maybe"],
      m = a["Data.Tuple"],
      q = function () {
    function k(p, u) {
      this.value0 = p;
      this.value1 = u;
    }

    k.create = function (p) {
      return function (u) {
        return new k(p, u);
      };
    };

    return k;
  }();

  a = new q(h.Nil.value, h.Nil.value);
  b.empty = a;

  b["null"] = function (k) {
    return k.value0 instanceof h.Nil && k.value1 instanceof h.Nil ? !0 : !1;
  };

  b.snoc = function (k) {
    return function (p) {
      return new q(k.value0, new h.Cons(p, k.value1));
    };
  };

  b.uncons = function (k) {
    for (var p = !1, u; !p;) {
      if (u = k, u.value0 instanceof h.Nil && u.value1 instanceof h.Nil) p = !0, u = f.Nothing.value;else if (u.value0 instanceof h.Nil) k = new q(d.reverse(u.value1), h.Nil.value), u = void 0;else if (u.value0 instanceof h.Cons) p = !0, u = new f.Just(new m.Tuple(u.value0.value0, new q(u.value0.value1, u.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [u.constructor.name]);
    }

    return u;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var b = a["Data.CatList"],
      d = a["Data.CatQueue"],
      h = a["Data.List.Types"],
      f = a["Data.Maybe"],
      m = a["Data.Semigroup"],
      q = a["Data.Tuple"],
      k = function () {
    function c() {}

    c.value = new c();
    return c;
  }(),
      p = function () {
    function c(g, e) {
      this.value0 = g;
      this.value1 = e;
    }

    c.create = function (g) {
      return function (e) {
        return new c(g, e);
      };
    };

    return c;
  }(),
      u = function u(c) {
    return function (g) {
      if (c instanceof k) return g;
      if (g instanceof k) return c;
      if (c instanceof p) return new p(c.value0, d.snoc(c.value1)(g));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [c.constructor.name, g.constructor.name]);
    };
  },
      y = function y(c) {
    return function (g) {
      return function (e) {
        var l = function l(t) {
          return function (v) {
            return function (D) {
              for (var E = t, B = v, r = !1, C; !r;) {
                C = E;
                var H = B,
                    G = D;
                if (G instanceof h.Nil) r = !0, C = H;else {
                  if (G instanceof h.Cons) E = C, B = C(H)(G.value0), D = G.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [C.constructor.name, H.constructor.name, G.constructor.name]);
                  C = void 0;
                }
              }

              return C;
            };
          };
        };

        return function (t) {
          return function (v) {
            function D(C, H) {
              C = d.uncons(C);
              if (C instanceof f.Nothing) return B = !0, l(function (G) {
                return function (F) {
                  return F(G);
                };
              })(g)(H);
              if (C instanceof f.Just) E = C.value0.value1, v = new h.Cons(c(C.value0.value0), H);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [C.constructor.name]);
            }

            for (var E = t, B = !1, r; !B;) {
              r = D(E, v);
            }

            return r;
          };
        }(e)(h.Nil.value);
      };
    };
  };

  a = k.value;
  m = new m.Semigroup(u);
  b.empty = a;

  b.snoc = function (c) {
    return function (g) {
      return u(c)(new p(g, d.empty));
    };
  };

  b.uncons = function (c) {
    if (c instanceof k) return f.Nothing.value;

    if (c instanceof p) {
      var g = f.Just,
          e = q.Tuple,
          l = c.value0;
      c = d["null"](c.value1) ? k.value : y(u)(k.value)(c.value1);
      return new g(new e(l, c));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [c.constructor.name]);
  };

  b.semigroupCatList = m;
})(PS);

(function (a) {
  a["Control.Monad.Free"] = a["Control.Monad.Free"] || {};

  var b = a["Control.Monad.Free"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Data.CatList"],
      k = a["Data.Either"],
      p = a["Data.Functor"],
      u = a["Data.Maybe"],
      y = a["Data.Semigroup"],
      c = a["Unsafe.Coerce"],
      g = function () {
    function C(H, G) {
      this.value0 = H;
      this.value1 = G;
    }

    C.create = function (H) {
      return function (G) {
        return new C(H, G);
      };
    };

    return C;
  }(),
      e = function () {
    function C(H) {
      this.value0 = H;
    }

    C.create = function (H) {
      return new C(H);
    };

    return C;
  }(),
      l = function () {
    function C(H, G) {
      this.value0 = H;
      this.value1 = G;
    }

    C.create = function (H) {
      return function (G) {
        return new C(H, G);
      };
    };

    return C;
  }(),
      t = function t(C) {
    function H(J) {
      var O = function O(V) {
        return function (M) {
          return new g(V.value0, y.append(q.semigroupCatList)(V.value1)(M));
        };
      };

      if (J.value0 instanceof e) {
        var Q = q.uncons(J.value1);
        if (Q instanceof u.Nothing) return G = !0, new e(J.value0.value0);

        if (Q instanceof u.Just) {
          C = O((0, Q.value0.value0)(J.value0.value0))(Q.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [Q.constructor.name]);
      }

      if (J.value0 instanceof l) return G = !0, new l(J.value0.value0, function (V) {
        return O(J.value0.value1(V))(J.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [J.value0.constructor.name]);
    }

    for (var G = !1, F; !G;) {
      F = H(C);
    }

    return F;
  },
      v = function v(C) {
    return function (H) {
      return function (G) {
        G = t(G);
        if (G instanceof e) return H(G.value0);
        if (G instanceof l) return C(G.value0)(G.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [G.constructor.name]);
      };
    };
  };

  a = new m.Monad(function () {
    return r;
  }, function () {
    return E;
  });
  var D = new p.Functor(function (C) {
    return function (H) {
      return f.bindFlipped(E)(function () {
        var G = d.pure(r);
        return function (F) {
          return G(C(F));
        };
      }())(H);
    };
  }),
      E = new f.Bind(function () {
    return B;
  }, function (C) {
    return function (H) {
      return new g(C.value0, q.snoc(C.value1)(H));
    };
  }),
      B = new h.Apply(function () {
    return D;
  }, m.ap(a)),
      r = new d.Applicative(function () {
    return B;
  }, function (C) {
    return new g(e.create(C), q.empty);
  });

  b.wrap = function (C) {
    return new g(new l(C, c.unsafeCoerce), q.empty);
  };

  b.liftF = function (C) {
    return new g(new l(C, function () {
      var H = d.pure(r);
      return function (G) {
        return H(G);
      };
    }()), q.empty);
  };

  b.resume = function (C) {
    return v(function (H) {
      return function (G) {
        return new k.Left(p.map(C)(G)(H));
      };
    })(k.Right.create);
  };

  b["resume'"] = v;
  b.freeFunctor = D;
  b.freeBind = E;
  b.freeApplicative = r;
  b.freeApply = B;
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
  a["Data.Array.NonEmpty"] = a["Data.Array.NonEmpty"] || {};
  var b = a["Data.Array.NonEmpty"],
      d = a["Data.Array"],
      h = a["Data.Boolean"],
      f = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var m = a.unsafeCoerce,
      q = a.unsafeCoerce,
      k = a.unsafeCoerce;

  a = function (u) {
    var y = f.fromJust();
    return function (c) {
      return y(u(k(c)));
    };
  }(d.uncons);

  var p = function (u) {
    return function (y) {
      return u(k(y));
    };
  }(d.length);

  b.fromArray = function (u) {
    if (0 < d.length(u)) return new f.Just(q(u));
    if (h.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [u.constructor.name]);
  };

  b.toArray = k;

  b.singleton = function (u) {
    return q(d.singleton(u));
  };

  b.length = p;

  b["cons'"] = function (u) {
    return function (y) {
      return q(d.cons(u)(y));
    };
  };

  b.snoc = function (u) {
    return function (y) {
      return q(d.snoc(k(u))(y));
    };
  };

  b.uncons = a;

  b.updateAt = function (u) {
    return function (y) {
      var c = d.updateAt(u)(y);
      return function (g) {
        return m(c(k(g)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (b) {
    return function (d) {
      for (var h = d[0], f = d.length, m = 1; m < f; m++) {
        h = b(h)(d[m]);
      }

      return h;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (b) {
    return function (d) {
      for (var h = d.length, f = Array(h), m = 0; m < h; m++) {
        f[m] = b(m)(d[m]);
      }

      return f;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var b = a["Data.FunctorWithIndex"],
      d = a["Data.Functor"];
  a = new function (h, f) {
    this.Functor0 = h;
    this.mapWithIndex = f;
  }(function () {
    return d.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  b.mapWithIndex = function (h) {
    return h.mapWithIndex;
  };

  b.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var b = a["Data.FoldableWithIndex"],
      d = a["Data.Foldable"],
      h = a["Data.FunctorWithIndex"],
      f = a["Data.Monoid"],
      m = a["Data.Semigroup"],
      q = function () {
    function u(y, c) {
      this.value0 = y;
      this.value1 = c;
    }

    u.create = function (y) {
      return function (c) {
        return new u(y, c);
      };
    };

    return u;
  }(),
      k = function k(u) {
    return function (y) {
      return function (c) {
        return (0, u.foldrWithIndex)(function (g) {
          return function (e) {
            return function (l) {
              return m.append(y.Semigroup0())(c(g)(e))(l);
            };
          };
        })(f.mempty(y));
      };
    };
  },
      p = new function (u, y, c, g) {
    this.Foldable0 = u;
    this.foldMapWithIndex = y;
    this.foldlWithIndex = c;
    this.foldrWithIndex = g;
  }(function () {
    return d.foldableArray;
  }, function (u) {
    return k(p)(u);
  }, function (u) {
    return function (y) {
      var c = d.foldl(d.foldableArray)(function (e) {
        return function (l) {
          return u(l.value0)(e)(l.value1);
        };
      })(y),
          g = h.mapWithIndex(h.functorWithIndexArray)(q.create);
      return function (e) {
        return c(g(e));
      };
    };
  }, function (u) {
    return function (y) {
      var c = d.foldr(d.foldableArray)(function (e) {
        return function (l) {
          return u(e.value0)(e.value1)(l);
        };
      })(y),
          g = h.mapWithIndex(h.functorWithIndexArray)(q.create);
      return function (e) {
        return c(g(e));
      };
    };
  });

  b.foldlWithIndex = function (u) {
    return u.foldlWithIndex;
  };

  b.foldableWithIndexArray = p;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var b = a["Data.Semigroup.Foldable"],
      d = a["Data.Functor"];

  b.Foldable1 = function (h, f, m) {
    this.Foldable0 = h;
    this.fold1 = f;
    this.foldMap1 = m;
  };

  b.foldMap1 = function (h) {
    return h.foldMap1;
  };

  b.foldMap1Default = function (h) {
    return function (f) {
      return function (m) {
        return function (q) {
          var k = (0, h.fold1)(m),
              p = d.map(f)(q);
          return function (u) {
            return k(p(u));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var b = a["Data.Array.NonEmpty.Internal"],
      d = a["Data.Array.NonEmpty.Internal"],
      h = a["Data.Semigroup"],
      f = a["Data.Semigroup.Foldable"],
      m = a["Data.Unfoldable1"].unfoldable1Array,
      q = a["Data.Traversable"].traversableArray,
      k = h.semigroupArray,
      p = a["Data.Functor"].functorArray,
      u = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      y = a["Data.Foldable"].foldableArray,
      c = new f.Foldable1(function () {
    return y;
  }, function (g) {
    return d.fold1Impl(h.append(g));
  }, function (g) {
    return f.foldMap1Default(c)(p)(g);
  });
  b.semigroupNonEmptyArray = k;
  b.functorNonEmptyArray = p;
  b.foldableNonEmptyArray = y;
  b.foldableWithIndexNonEmptyArray = u;
  b.foldable1NonEmptyArray = c;
  b.unfoldable1NonEmptyArray = m;
  b.traversableNonEmptyArray = q;
})(PS);

(function (a) {
  var b = function () {
    function d() {
      this.last = this.head = null;
      this.size = 0;
    }

    function h(u, y) {
      this.queue = u;
      this.value = y;
      this.prev = this.next = null;
    }

    function f(u) {
      this.draining = !1;
      this.error = null;
      this.value = u;
      this.takes = new d();
      this.reads = new d();
      this.puts = new d();
    }

    function m(u) {
      try {
        u();
      } catch (y) {
        setTimeout(function () {
          throw y;
        }, 0);
      }
    }

    function q(u) {
      switch (u.size) {
        case 0:
          return null;

        case 1:
          var y = u.head;
          u.head = null;
          break;

        case 2:
          y = u.last;
          u.head.next = null;
          u.last = null;
          break;

        default:
          y = u.last, u.last = y.prev, u.last.next = null;
      }

      y.prev = null;
      y.queue = null;
      u.size--;
      return y.value;
    }

    function k(u) {
      switch (u.size) {
        case 0:
          return null;

        case 1:
          var y = u.head;
          u.head = null;
          break;

        case 2:
          y = u.head;
          u.last.prev = null;
          u.head = u.last;
          u.last = null;
          break;

        default:
          y = u.head, u.head = y.next, u.head.prev = null;
      }

      y.next = null;
      y.queue = null;
      u.size--;
      return y.value;
    }

    var p = {};
    f.EMPTY = p;

    f.putLast = function (u, y) {
      y = new h(u, y);

      switch (u.size) {
        case 0:
          u.head = y;
          break;

        case 1:
          y.prev = u.head;
          u.head.next = y;
          u.last = y;
          break;

        default:
          y.prev = u.last, u.last.next = y, u.last = y;
      }

      u.size++;
      return y;
    };

    f.takeLast = q;
    f.takeHead = k;

    f.deleteCell = function (u) {
      null !== u.queue && (u.queue.last === u ? q(u.queue) : u.queue.head === u ? k(u.queue) : (u.prev && (u.prev.next = u.next), u.next && (u.next.prev = u.prev), u.queue.size--, u.queue = null, u.value = null, u.next = null, u.prev = null));
    };

    f.drainVar = function (u, y) {
      if (!y.draining) {
        var c = y.puts,
            g = y.takes,
            e = y.reads,
            l,
            t;

        for (y.draining = !0;;) {
          var v = l = null;
          var D = y.value;
          var E = e.size;

          if (null !== y.error) {
            for (D = u.left(y.error); l = k(c);) {
              m(l.cb(D));
            }

            for (; v = k(e);) {
              m(v(D));
            }

            for (; t = k(g);) {
              m(t(D));
            }

            break;
          }

          D === p && (l = k(c)) && (y.value = D = l.value);

          if (D !== p) {
            for (t = k(g); E-- && (v = k(e));) {
              m(v(u.right(D)));
            }

            null !== t && (y.value = p, m(t(u.right(D))));
          }

          null !== l && m(l.cb(u.right(void 0)));
          if (y.value === p && 0 === c.size || y.value !== p && 0 === g.size) break;
        }

        y.draining = !1;
      }
    };

    return f;
  }();

  a.empty = function () {
    return new b(b.EMPTY);
  };

  a._takeVar = function (d, h, f) {
    return function () {
      var m = b.putLast(h.takes, f);
      b.drainVar(d, h);
      return function () {
        b.deleteCell(m);
      };
    };
  };

  a._tryPutVar = function (d, h, f) {
    return function () {
      return f.value === b.EMPTY && null === f.error ? (f.value = h, b.drainVar(d, f), !0) : !1;
    };
  };

  a._tryTakeVar = function (d, h) {
    return function () {
      var f = h.value;
      if (f === b.EMPTY) return d.nothing;
      h.value = b.EMPTY;
      b.drainVar(d, h);
      return d.just(f);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var b = a["Effect.AVar"],
      d = a["Effect.AVar"],
      h = a["Data.Either"];
  a = a["Data.Maybe"];

  var f = function () {
    function p(u) {
      this.value0 = u;
    }

    p.create = function (u) {
      return new p(u);
    };

    return p;
  }(),
      m = function () {
    function p(u) {
      this.value0 = u;
    }

    p.create = function (u) {
      return new p(u);
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

  b.take = function (p) {
    return function (u) {
      return d._takeVar(k, p, u);
    };
  };

  b.tryTake = function (p) {
    return d._tryTakeVar(k, p);
  };

  b.tryPut = function (p) {
    return function (u) {
      return d._tryPutVar(k, p, u);
    };
  };

  b.empty = d.empty;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var b = a["Effect.AVar"],
      d = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (h) {
    return d.makeAff(function (f) {
      return function () {
        var m = b.take(h)(f)();
        return d.effectCanceler(m);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var b = a["Effect.Aff.Class"],
      d = a["Control.Category"],
      h = a["Effect.Aff"];

  a = function a(f, m) {
    this.MonadEffect0 = f;
    this.liftAff = m;
  };

  d = new a(function () {
    return h.monadEffectAff;
  }, d.identity(d.categoryFn));

  b.liftAff = function (f) {
    return f.liftAff;
  };

  b.MonadAff = a;
  b.monadAffAff = d;
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
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};
  var b = a["Concur.Core.Types"],
      d = a["Control.Alt"],
      h = a["Control.Alternative"],
      f = a["Control.Applicative"],
      m = a["Control.Bind"],
      q = a["Control.Category"],
      k = a["Control.Monad"],
      p = a["Control.Monad.Free"],
      u = a["Control.MultiAlternative"],
      y = a["Control.Parallel.Class"],
      c = a["Control.Plus"],
      g = a["Data.Array.NonEmpty"],
      e = a["Data.Array.NonEmpty.Internal"],
      l = a["Data.Either"],
      t = a["Data.FoldableWithIndex"],
      v = a["Data.Functor"],
      D = a["Data.Maybe"],
      E = a["Data.Monoid"],
      B = a["Data.Semigroup"],
      r = a["Data.Semigroup.Foldable"],
      C = a["Data.Show"],
      H = a["Data.Tuple"],
      G = a.Effect,
      F = a["Effect.AVar"],
      J = a["Effect.Aff"],
      O = a["Effect.Aff.AVar"],
      Q = a["Effect.Aff.Class"],
      V = a["Effect.Class"],
      M = a["Effect.Console"],
      L = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (sa) {
    return sa(q.identity(q.categoryFn));
  });

  var w = p.freeFunctor,
      R = p.freeBind,
      I = p.freeApply,
      K = p.freeApplicative,
      z = new k.Monad(function () {
    return K;
  }, function () {
    return R;
  }),
      Y = function Y(sa) {
    return sa;
  },
      ma = function ma(sa) {
    return p["resume'"](function (ta) {
      return function (wa) {
        return new l.Right(v.map(sa)(wa)(ta));
      };
    })(l.Left.create);
  },
      za = new v.Functor(function (sa) {
    return function (ta) {
      if (ta instanceof l.Right) ta = new l.Right({
        cont: v.map(J.functorAff)(sa)(ta.value0.cont),
        view: ta.value0.view
      });else if (ta instanceof l.Left) ta = new l.Left(v.map(G.functorEffect)(sa)(ta.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [ta.constructor.name]);
      return ta;
    };
  }),
      Da = function Da(sa) {
    return p.liftF(l.Left.create(sa));
  },
      Ba = function Ba(sa) {
    return new V.MonadEffect(function () {
      return z;
    }, Da);
  },
      x = function x(sa) {
    return p.liftF(new l.Right({
      view: sa,
      cont: J.never
    }));
  },
      fa = function fa(sa) {
    return new B.Semigroup(function (ta) {
      return function (wa) {
        return u.orr(S(sa))([ta, wa]);
      };
    });
  },
      ja = function ja(sa) {
    return new c.Plus(function () {
      return ia(sa);
    }, x(E.mempty(sa)));
  },
      S = function S(sa) {
    return new u.MultiAlternative(function () {
      return ja(sa);
    }, function (ta) {
      var wa = function wa(ca) {
        return function (P) {
          return function (Z) {
            var xa = v.map(e.functorNonEmptyArray)(function (W) {
              return p.wrap(l.Right.create(W));
            })(P);
            return m.bind(J.bindAff)(y.sequential(J.parallelAff)(t.foldlWithIndex(e.foldableWithIndexNonEmptyArray)(function (W) {
              return function (Ja) {
                return function (Oa) {
                  return d.alt(J.altParAff)(y.parallel(J.parallelAff)(v.map(J.functorAff)(H.Tuple.create(W))(Oa)))(Ja);
                };
              };
            })(c.empty(J.plusParAff))(Z)))(function (W) {
              return f.pure(J.applicativeAff)(ka(ca)(D.fromMaybe(xa)(g.updateAt(W.value0)(W.value1)(xa))));
            });
          };
        };
      },
          ya = function ya(ca) {
        return function (P) {
          return p.wrap(new l.Right({
            view: r.foldMap1(e.foldable1NonEmptyArray)(ca.Semigroup0())(function (Z) {
              return Z.view;
            })(P),
            cont: wa(ca)(P)(v.map(e.functorNonEmptyArray)(function (Z) {
              return Z.cont;
            })(P))
          }));
        };
      },
          Ga = function Ga(ca) {
        return function (P) {
          return function (Z) {
            var xa = g.uncons(Z),
                W = ma(za)(xa.head);
            if (W instanceof l.Left) return f.pure(p.freeApplicative)(W.value0);

            if (W instanceof l.Right) {
              if (W.value0 instanceof l.Left) return p.wrap(new l.Left(function () {
                var Ja = W.value0.value0();
                return Ga(ca)(P)(g["cons'"](Ja)(xa.tail));
              }));
              if (W.value0 instanceof l.Right) return da(ca)(g.snoc(P)(W.value0.value0))(xa.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [W.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [W.constructor.name]);
          };
        };
      },
          da = function da(ca) {
        return function (P) {
          return function (Z) {
            Z = g.fromArray(Z);
            if (Z instanceof D.Nothing) return ya(ca)(P);
            if (Z instanceof D.Just) return Ga(ca)(P)(Z.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [Z.constructor.name]);
          };
        };
      },
          ka = function ka(ca) {
        return function (P) {
          var Z = g.uncons(P),
              xa = ma(za)(Z.head);
          if (xa instanceof l.Left) return f.pure(p.freeApplicative)(xa.value0);

          if (xa instanceof l.Right) {
            if (xa.value0 instanceof l.Left) return p.wrap(new l.Left(function () {
              var W = xa.value0.value0();
              return ka(ca)(g["cons'"](W)(Z.tail));
            }));
            if (xa.value0 instanceof l.Right) return da(ca)(g.singleton(xa.value0.value0))(Z.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [xa.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [xa.constructor.name]);
        };
      };

      ta = g.fromArray(ta);
      if (ta instanceof D.Just) return ka(sa)(v.map(e.functorNonEmptyArray)(Y)(ta.value0));
      if (ta instanceof D.Nothing) return c.empty(ja(sa));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [ta.constructor.name]);
    });
  },
      ia = function ia(sa) {
    return new d.Alt(function () {
      return w;
    }, B.append(fa(sa)));
  },
      Ia = function Ia(sa) {
    return function (ta) {
      var wa = function wa(ya) {
        return function (Ga) {
          if (Ga instanceof l.Left) return M.log("Aff failed - " + C.show(L.showError)(Ga.value0));
          if (Ga instanceof l.Right) return v["void"](G.functorEffect)(F.tryPut(Ga.value0)(ya));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [ya.constructor.name, Ga.constructor.name]);
        };
      };

      return p.wrap(new l.Left(function () {
        var ya = F.empty();
        J.runAff_(wa(ya))(ta)();
        var Ga = F.tryTake(ya)();
        if (Ga instanceof D.Just) return f.pure(p.freeApplicative)(Ga.value0);
        if (Ga instanceof D.Nothing) return p.liftF(new l.Right({
          view: sa,
          cont: O.take(ya)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [Ga.constructor.name]);
      }));
    };
  };

  b.WidgetStep = function (sa) {
    return sa;
  };

  b.Widget = function (sa) {
    return sa;
  };

  b.unWidget = Y;
  b.resume = ma;
  b.display = x;
  b.functorWidgetStep = za;
  b.widgetFunctor = w;
  b.widgetBind = R;
  b.widgetApplicative = K;
  b.widgetApply = I;
  b.widgetShiftMap = a;
  b.widgetMultiAlternative = S;

  b.widgetMonoid = function (sa) {
    return new E.Monoid(function () {
      return fa(sa);
    }, c.empty(ja(sa)));
  };

  b.widgetAlt = ia;
  b.widgetPlus = ja;

  b.widgetAlternative = function (sa) {
    return new h.Alternative(function () {
      return K;
    }, function () {
      return ja(sa);
    });
  };

  b.widgetMonadEff = Ba;

  b.widgetMonadAff = function (sa) {
    return new Q.MonadAff(function () {
      return Ba(sa);
    }, Ia(E.mempty(sa)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var b = a["Concur.Core"],
      d = a["Concur.Core.Types"],
      h = a["Control.Alt"],
      f = a["Control.Applicative"],
      m = a["Control.Monad.Free"],
      q = a["Control.Parallel.Class"],
      k = a["Data.Either"],
      p = a["Data.Functor"],
      u = a.Effect,
      y = a["Effect.AVar"],
      c = a["Effect.Aff"],
      g = a["Effect.Aff.AVar"],
      e = a["Effect.Aff.Class"],
      l = function l(t) {
    return function (v) {
      var D = d.resume(d.functorWidgetStep)(v);
      if (D instanceof k.Left) return f.pure(m.freeApplicative)(D.value0);

      if (D instanceof k.Right) {
        if (D.value0 instanceof k.Left) return m.wrap(d.WidgetStep(new k.Left(function () {
          var E = D.value0.value0();
          return l(t)(E);
        })));
        if (D.value0 instanceof k.Right) return m.wrap(d.WidgetStep(new k.Left(function () {
          var E = y.empty(),
              B = q.sequential(c.parallelAff)(h.alt(c.altParAff)(q.parallel(c.parallelAff)(e.liftAff(e.monadAffAff)(g.take(E))))(q.parallel(c.parallelAff)(p.map(c.functorAff)(l(t))(D.value0.value0.cont))));
          return m.wrap(d.WidgetStep(new k.Right({
            view: t(function (r) {
              return p["void"](u.functorEffect)(y.tryPut(f.pure(m.freeApplicative)(r))(E));
            })(D.value0.value0.view),
            cont: B
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [D.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [D.constructor.name]);
    };
  };

  b.mkLeafWidget = function (t) {
    return d.Widget(m.wrap(d.WidgetStep(new k.Left(function () {
      var v = y.empty();
      return m.wrap(d.WidgetStep(new k.Right({
        view: t(function (D) {
          return p["void"](u.functorEffect)(y.tryPut(f.pure(m.freeApplicative)(D))(v));
        }),
        cont: e.liftAff(e.monadAffAff)(g.take(v))
      })));
    }))));
  };

  b.mkNodeWidget = function (t) {
    return function (v) {
      return l(t)(v);
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
  b.PrimProp = d;
  b.Handler = h;

  b.mkProp = function (f) {
    return function (m) {
      if (m instanceof d) return m.value0;
      if (m instanceof h) return m.value0(f);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [f.constructor.name, m.constructor.name]);
    };
  };

  b.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var b = a["Concur.Core.DOM"],
      d = a["Concur.Core"],
      h = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Props"],
      m = a["Control.MultiAlternative"],
      q = a["Control.ShiftMap"],
      k = a["Data.Functor"],
      p = function p(u) {
    return function (y) {
      return function (c) {
        return function (g) {
          return q.shiftMap(u)(function (e) {
            return function (l) {
              return d.mkNodeWidget(function (t) {
                return function (v) {
                  return c(k.map(y)(function () {
                    var D = f.mkProp(t),
                        E = k.map(f.functorProps)(e);
                    return function (B) {
                      return D(E(B));
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

  b.el = p;

  b.elLeaf = function (u) {
    return function (y) {
      return function (c) {
        return function (g) {
          return h.liftWidget(u)(d.mkLeafWidget(function (e) {
            return c(k.map(y)(f.mkProp(e))(g));
          }));
        };
      };
    };
  };

  b["el'"] = function (u) {
    return function (y) {
      return function (c) {
        return function (g) {
          return function (e) {
            var l = p(u)(c)(g)(e),
                t = m.orr(y);
            return function (v) {
              return l(t(v));
            };
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.Discharge"] = a["Concur.Core.Discharge"] || {};

  var b = a["Concur.Core.Discharge"],
      d = a["Concur.Core.Types"],
      h = a["Control.Applicative"],
      f = a["Control.Monad.Free"],
      m = a["Data.Either"],
      q = a["Data.Functor"],
      k = a["Data.Monoid"],
      p = a["Data.Tuple"],
      u = a.Effect,
      y = a["Effect.Aff"],
      c = function c(e) {
    return function (l) {
      var t = f.resume(d.functorWidgetStep)(d.unWidget(l));
      if (t instanceof m.Right) return h.pure(u.applicativeEffect)(new p.Tuple(l, k.mempty(e)));

      if (t instanceof m.Left) {
        if (t.value0 instanceof m.Left) return function () {
          var v = t.value0.value0();
          return c(e)(v)();
        };
        if (t.value0 instanceof m.Right) return h.pure(u.applicativeEffect)(new p.Tuple(f.wrap(new m.Right(t.value0.value0)), t.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [t.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [t.constructor.name]);
    };
  },
      g = function g(e) {
    return function (l) {
      return function (t) {
        var v = f.resume(d.functorWidgetStep)(t);
        if (v instanceof m.Right) return h.pure(u.applicativeEffect)(k.mempty(e));

        if (v instanceof m.Left) {
          if (v.value0 instanceof m.Left) return function () {
            var D = v.value0.value0();
            return g(e)(l)(D)();
          };
          if (v.value0 instanceof m.Right) return function () {
            y.runAff_(function () {
              var D = q.map(m.functorEither)(d.Widget);
              return function (E) {
                return l(D(E));
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

  b.discharge = g;
  b.dischargePartialEffect = c;
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
  a = new a["Data.Functor"].Functor(function (h) {
    return function (f) {
      return d.defer(function (m) {
        return h(d.force(f));
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
      h = a["Control.Alt"],
      f = a["Control.Applicative"],
      m = a["Control.Apply"],
      q = a["Control.Bind"],
      k = a["Control.Comonad"],
      p = a["Control.Extend"],
      u = a["Control.Monad"],
      y = a["Control.Plus"],
      c = a["Control.ShiftMap"],
      g = a["Data.Functor"],
      e = a["Data.Lazy"],
      l = a["Data.Tuple"],
      t = function t(F) {
    return l.snd(e.force(F));
  },
      v = function v(F) {
    return function (J) {
      return e.defer(function (O) {
        return new l.Tuple(F, J);
      });
    };
  },
      D = function D(F) {
    return l.fst(e.force(F));
  },
      E = function E(F) {
    return new g.Functor(function (J) {
      var O = function O(Q) {
        return g.map(e.functorLazy)(function (V) {
          return new l.Tuple(J(V.value0), g.map(F)(O)(V.value1));
        })(Q);
      };

      return O;
    });
  },
      B = function B(F) {
    return new p.Extend(function () {
      return E(F);
    }, function (J) {
      var O = function O(Q) {
        return g.map(e.functorLazy)(function (V) {
          return new l.Tuple(J(Q), g.map(F)(O)(V.value1));
        })(Q);
      };

      return O;
    });
  },
      r = function r(F) {
    return new u.Monad(function () {
      return G(F);
    }, function () {
      return C(F);
    });
  },
      C = function C(F) {
    return new q.Bind(function () {
      return H(F);
    }, function (J) {
      return function (O) {
        var Q = function Q(M) {
          return function (L) {
            var w = g.map(F.Plus1().Alt0().Functor0())(Q(M))(t(L)),
                R = g.map(F.Plus1().Alt0().Functor0())(V)(t(M));
            return v(D(L))(h.alt(F.Plus1().Alt0())(R)(w));
          };
        },
            V = function V(M) {
          return Q(M)(O(D(M)));
        };

        return V(J);
      };
    });
  },
      H = function H(F) {
    return new m.Apply(function () {
      return E(F.Plus1().Alt0().Functor0());
    }, u.ap(r(F)));
  },
      G = function G(F) {
    return new f.Applicative(function () {
      return H(F);
    }, function (J) {
      return v(J)(y.empty(F.Plus1()));
    });
  };

  b.mkCofree = v;
  b.tail = t;

  b.comonadCofree = function (F) {
    return new k.Comonad(function () {
      return B(F);
    }, D);
  };

  b.applicativeCofree = G;
  b.bindCofree = C;

  b.shiftMapCofree = function (F) {
    return new c.ShiftMap(function (J) {
      return function (O) {
        return e.defer(function (Q) {
          Q = e.force(O);
          return new l.Tuple(Q.value0, J(f.pure(G(d.widgetAlternative(F))))(Q.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var b = a["Concur.Core.FRP"],
      d = a["Concur.Core.Types"],
      h = a["Control.Alt"],
      f = a["Control.Applicative"],
      m = a["Control.Bind"],
      q = a["Control.Cofree"],
      k = a["Control.Comonad"],
      p = a["Data.Functor"],
      u = a["Data.Maybe"],
      y = a["Data.Unit"],
      c = a["Effect.Aff"],
      g = a["Effect.Aff.Class"],
      e = q.tail,
      l = q.mkCofree,
      t = function t(E) {
    return function (B) {
      return l(E)(p.map(d.widgetFunctor)(function (r) {
        return t(r)(B);
      })(B(E)));
    };
  },
      v = function v(E) {
    return function (B) {
      return function (r) {
        var C = r(B);
        return l(k.extract(q.comonadCofree(d.widgetFunctor))(C))(m.bind(d.widgetBind)(e(C))(function (H) {
          return f.pure(d.widgetApplicative)(v(E)(k.extract(q.comonadCofree(d.widgetFunctor))(H))(r));
        }));
      };
    };
  },
      D = function D(E) {
    return m.bind(d.widgetBind)(e(E))(D);
  };

  b.step = l;

  b.display = function (E) {
    return l(y.unit)(E);
  };

  b.loopW = t;
  b.loopS = v;
  b.dyn = D;

  b.debounce = function (E) {
    return function (B) {
      return function (r) {
        return function (C) {
          var H = function H(F) {
            return function (J) {
              return m.bind(d.widgetBind)(h.alt(d.widgetAlt(E))(p.map(d.widgetFunctor)(u.Just.create)(J(F)))(p.voidRight(d.widgetFunctor)(u.Nothing.value)(g.liftAff(d.widgetMonadAff(E))(c.delay(B)))))(function (O) {
                if (O instanceof u.Nothing) return f.pure(d.widgetApplicative)(G(F)(J));
                if (O instanceof u.Just) return H(O.value0)(J);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [O.constructor.name]);
              });
            };
          },
              G = function G(F) {
            return function (J) {
              return l(F)(m.bind(d.widgetBind)(J(F))(function (O) {
                return H(O)(J);
              }));
            };
          };

          return G(r)(C);
        };
      };
    };
  };
})(PS);

(function (a) {
  function b(f) {
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
          q[k] = function (u, y) {
            return p(u)(y)();
          };

          break;

        case "componentDidUpdate":
          q[k] = function (u, y, c) {
            return p(u)(y)(c)();
          };

          break;

        case "unsafeComponentWillMount":
          q.UNSAFE_componentWillMount = p;
          break;

        case "unsafeComponentWillReceiveProps":
          q.UNSAFE_componentWillReceiveProps = function (u) {
            return p(u)();
          };

          break;

        case "unsafeComponentWillUpdate":
          q.UNSAFE_componentWillUpdate = function (u, y) {
            return p(u)(y)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + k);
      }
    }

    return function (q) {
      return function (k) {
        var p = function p(u) {
          f.call(this, u);
          u = k(this)();

          for (var y in u) {
            m(this, y, u[y]);
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

  a.createElementImpl = b;
  a.createElementTagName = b;

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
  var b = a.React,
      d = a.React;
  a = d.setStateImpl;
  var h = new function (f) {
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

  b.isReactElementArray = h;
  b.getState = d.getState;
  b.createElementTagName = d.createElementTagName;
  b.createElementTagNameDynamic = d.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var b = a["Concur.React"],
      d = a["Concur.Core.Discharge"],
      h = a["Control.Apply"],
      f = a["Data.Either"],
      m = a["Data.Functor"],
      q = a["Data.Monoid"],
      k = a["Data.Show"],
      p = a["Data.Unit"],
      u = a.Effect,
      y = a["Effect.Console"],
      c = a["Effect.Exception"],
      g = a.React,
      e = function (l) {
    return function (t) {
      var v = function v(E) {
        return g.toElement(g.isReactElementArray)(E.view);
      },
          D = function D(E) {
        return function (B) {
          if (B instanceof f.Right) return function () {
            var r = d.discharge(q.monoidArray)(D(E))(B.value0)();
            return m["void"](u.functorEffect)(g.writeState(E)({
              view: r
            }))();
          };
          if (B instanceof f.Left) return function () {
            y.log("FAILED! " + k.show(c.showError)(B.value0))();
            return p.unit;
          };
          throw Error("Failed pattern match at Concur.React (line 32, column 5 - line 34, column 52): " + [E.constructor.name, B.constructor.name]);
        };
      };

      return g.component()("Concur")(function (E) {
        return function () {
          var B = d.dischargePartialEffect(q.monoidArray)(t)();
          return {
            state: {
              view: B.value1
            },
            render: m.map(u.functorEffect)(v)(g.getState(E)),
            componentDidMount: h.applySecond(u.applyEffect)(l)(D(E)(new f.Right(B.value0)))
          };
        };
      });
    };
  }(q.mempty(u.monoidEffect(q.monoidUnit)));

  b.renderComponent = function (l) {
    return g.createLeafElement()(e(l))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (b) {
    return function (d) {
      var h = {};
      h[b] = d;
      return h;
    };
  };

  a.unsafeUnfoldProps = function (b) {
    return function (d) {
      var h = {},
          f = {};
      f[b] = h;

      for (var m in d) {
        d.hasOwnProperty(m) && (h[m] = d[m]);
      }

      return f;
    };
  };

  a.unsafeFromPropsArray = function (b) {
    for (var d = {}, h = 0, f = b.length; h < f; h++) {
      var m = b[h],
          q;

      for (q in m) {
        m.hasOwnProperty(q) && (d[q] = m[q]);
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
      h = a["Effect.Uncurried"];
  a = d.unsafeMkProps("value");
  var f = d.unsafeMkProps("target"),
      m = d.unsafeUnfoldProps("style"),
      q = d.unsafeMkProps("rel"),
      k = d.unsafeMkProps("placeholder"),
      p = d.unsafeMkProps("href"),
      u = d.unsafeMkProps("disabled"),
      y = d.unsafeMkProps("defaultValue"),
      c = d.unsafeMkProps("className"),
      g = d.unsafeMkProps("checked"),
      e = d.unsafeMkProps("type"),
      l = d.unsafeMkProps("id");
  b.style = m;
  b.checked = g;
  b.className = c;
  b.defaultValue = y;
  b.disabled = u;
  b.href = p;
  b._id = l;
  b.placeholder = k;
  b.rel = q;
  b.target = f;
  b._type = e;
  b.value = a;

  b.onChange = function (t) {
    return d.unsafeMkProps("onChange")(h.mkEffectFn1(t));
  };

  b.onClick = function (t) {
    return d.unsafeMkProps("onClick")(h.mkEffectFn1(t));
  };

  b.unsafeFromPropsArray = d.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var b = a["React.DOM"],
      d = a.React,
      h = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var f = function f(D) {
    return function (E) {
      return function (B) {
        if (D) {
          if (D) var r = d.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [D.constructor.name]);
        } else r = d.createElementTagName;
        return r(E)(h.unsafeFromPropsArray(B));
      };
    };
  },
      m = f(!1)("nav"),
      q = f(!1)("option"),
      k = f(!1)("p"),
      p = f(!1)("select"),
      u = f(!1)("span"),
      y = f(!1)("ul"),
      c = f(!1)("li"),
      g = f(!1)("div"),
      e = f(!1)("code"),
      l = f(!1)("cite"),
      t = f(!1)("button"),
      v = f(!1)("a");

  b.text = a;
  b.a = v;

  b.br = function (D) {
    return f(!1)("br")(D)([]);
  };

  b.button = t;
  b.cite = l;
  b.code = e;
  b.div = g;

  b.input = function (D) {
    return f(!1)("input")(D)([]);
  };

  b.li = c;
  b.nav = m;
  b.option = q;
  b.p = k;
  b.select = p;
  b.span = u;
  b.ul = y;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var b = a["Concur.React.DOM"],
      d = a["Concur.Core.DOM"],
      h = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Types"],
      m = a["Data.Functor"],
      q = a["React.DOM"],
      k = function k(v) {
    return function (D) {
      return function (E) {
        return [v(D)(E)];
      };
    };
  },
      p = function p(v) {
    return function (D) {
      return d.elLeaf(v)(m.functorArray)(function (E) {
        return [D(E)];
      });
    };
  },
      u = function u(v) {
    return function (D) {
      return function (E) {
        return d["el'"](v)(D)(m.functorArray)(k(E));
      };
    };
  },
      y = function y(v) {
    return function (D) {
      return u(D)(v)(q.li);
    };
  },
      c = function c(v) {
    return function (D) {
      return u(D)(v)(q.span);
    };
  },
      g = function g(v) {
    return function (D) {
      return d.el(v)(m.functorArray)(k(D));
    };
  },
      e = function e(v) {
    return function (D) {
      return u(D)(v)(q.div);
    };
  },
      l = function l(v) {
    return function (D) {
      return u(D)(v)(q.code);
    };
  },
      t = function t(v) {
    return function (D) {
      return u(D)(v)(q.cite);
    };
  };

  b.text = function (v) {
    return function (D) {
      return h.liftWidget(v)(f.display([q.text(D)]));
    };
  };

  b.a_ = function (v) {
    return g(v)(q.a);
  };

  b.a = function (v) {
    return function (D) {
      return u(D)(v)(q.a);
    };
  };

  b["br'"] = function (v) {
    return p(v)(q.br)([]);
  };

  b.button_ = function (v) {
    return g(v)(q.button);
  };

  b.button = function (v) {
    return function (D) {
      return u(D)(v)(q.button);
    };
  };

  b["cite'"] = function (v) {
    return function (D) {
      return t(v)(D)([]);
    };
  };

  b["code'"] = function (v) {
    return function (D) {
      return l(v)(D)([]);
    };
  };

  b.div_ = function (v) {
    return g(v)(q.div);
  };

  b.div = e;

  b["div'"] = function (v) {
    return function (D) {
      return e(v)(D)([]);
    };
  };

  b.input = function (v) {
    return p(v)(q.input);
  };

  b.li_ = function (v) {
    return g(v)(q.li);
  };

  b.li = y;

  b["li'"] = function (v) {
    return function (D) {
      return y(v)(D)([]);
    };
  };

  b.nav = function (v) {
    return function (D) {
      return u(D)(v)(q.nav);
    };
  };

  b.option = function (v) {
    return function (D) {
      return u(D)(v)(q.option);
    };
  };

  b.p_ = function (v) {
    return g(v)(q.p);
  };

  b.select = function (v) {
    return function (D) {
      return u(D)(v)(q.select);
    };
  };

  b.span_ = function (v) {
    return g(v)(q.span);
  };

  b.span = c;

  b["span'"] = function (v) {
    return function (D) {
      return c(v)(D)([]);
    };
  };

  b.ul_ = function (v) {
    return g(v)(q.ul);
  };

  b.ul = function (v) {
    return function (D) {
      return u(D)(v)(q.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var b = a["Concur.React.Props"],
      d = a["Concur.Core.Props"],
      h = a["Data.Array"],
      f = a["Data.Foldable"],
      m = a["Data.Maybe"],
      q = a["Data.Monoid"],
      k = a["React.DOM.Props"];
  a = new d.Handler(k.onClick);

  var p = new d.Handler(k.onChange),
      u = function u(c) {
    return d.PrimProp.create(k.className(c));
  },
      y = function () {
    var c = f.intercalate(f.foldableArray)(q.monoidString)(" "),
        g = h.concatMap(m.maybe([])(function (e) {
      return [e];
    }));
    return function (e) {
      return u(c(g(e)));
    };
  }();

  b.classList = y;

  b.unsafeTargetValue = function (c) {
    return c.target.value;
  };

  b.style = function (c) {
    return d.PrimProp.create(k.style(c));
  };

  b.checked = function (c) {
    return d.PrimProp.create(k.checked(c));
  };

  b.className = u;

  b.defaultValue = function (c) {
    return d.PrimProp.create(k.defaultValue(c));
  };

  b.disabled = function (c) {
    return d.PrimProp.create(k.disabled(c));
  };

  b.href = function (c) {
    return d.PrimProp.create(k.href(c));
  };

  b._id = function (c) {
    return d.PrimProp.create(k._id(c));
  };

  b.placeholder = function (c) {
    return d.PrimProp.create(k.placeholder(c));
  };

  b.rel = function (c) {
    return d.PrimProp.create(k.rel(c));
  };

  b.target = function (c) {
    return d.PrimProp.create(k.target(c));
  };

  b._type = function (c) {
    return d.PrimProp.create(k._type(c));
  };

  b.value = function (c) {
    return d.PrimProp.create(k.value(c));
  };

  b.onChange = p;
  b.onClick = a;
})(PS);

(function (a) {
  var b = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (d, h) {
    return b.render(d, h);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var b = a.ReactDOM,
      d = a["Data.Functor"],
      h = a["Data.Nullable"],
      f = a.Effect;

  a.ReactDOM.render = function (m) {
    return function (q) {
      return d.map(f.functorEffect)(h.toMaybe)(function () {
        return b.renderImpl(m, q);
      });
    };
  };
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
      h = a["Data.Nullable"],
      f = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (m) {
    var q = d.map(f.functorEffect)(h.toMaybe),
        k = b._getElementById(m);

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
  var b = a["Web.HTML.HTMLDocument"];
  a = a["Unsafe.Coerce"];
  var d = a.unsafeCoerce;
  b.toDocument = a.unsafeCoerce;
  b.toNonElementParentNode = d;
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
  a["Web.HTML.Window"].document = a["Web.HTML.Window"].document;
})(PS);

(function (a) {
  a["Concur.React.Run"] = a["Concur.React.Run"] || {};
  var b = a["Concur.React"],
      d = a["Data.Functor"],
      h = a["Data.Maybe"],
      f = a["Data.Unit"],
      m = a.Effect,
      q = a.ReactDOM,
      k = a["Web.DOM.NonElementParentNode"],
      p = a["Web.HTML"],
      u = a["Web.HTML.HTMLDocument"],
      y = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (c) {
    return function (g) {
      return function () {
        var e = p.window();
        e = y.document(e)();
        e = u.toNonElementParentNode(e);
        e = k.getElementById(c)(e)();
        if (e instanceof h.Nothing) return f.unit;
        if (e instanceof h.Just) return d["void"](m.functorEffect)(q.render(b.renderComponent(g))(e.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [e.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Maybe.Trans"] = a["Control.Monad.Maybe.Trans"] || {};

  var b = a["Control.Monad.Maybe.Trans"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Data.Functor"],
      k = a["Data.Maybe"],
      p = function p(e) {
    return new q.Functor(function (l) {
      return function (t) {
        return q.map(e)(q.map(k.functorMaybe)(l))(t);
      };
    });
  },
      u = function u(e) {
    return new m.Monad(function () {
      return g(e);
    }, function () {
      return y(e);
    });
  },
      y = function y(e) {
    return new f.Bind(function () {
      return c(e);
    }, function (l) {
      return function (t) {
        return f.bind(e.Bind1())(l)(function (v) {
          if (v instanceof k.Nothing) return d.pure(e.Applicative0())(k.Nothing.value);
          if (v instanceof k.Just) return t(v.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [v.constructor.name]);
        });
      };
    });
  },
      c = function c(e) {
    return new h.Apply(function () {
      return p(e.Bind1().Apply0().Functor0());
    }, m.ap(u(e)));
  },
      g = function g(e) {
    return new d.Applicative(function () {
      return c(e);
    }, function () {
      var l = d.pure(e.Applicative0());
      return function (t) {
        return l(k.Just.create(t));
      };
    }());
  };

  b.MaybeT = function (e) {
    return e;
  };

  b.runMaybeT = function (e) {
    return e;
  };

  b.applicativeMaybeT = g;
  b.bindMaybeT = y;
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
      h = a["Data.Unit"];

  b.MonadState = function (f, m) {
    this.Monad0 = f;
    this.state = m;
  };

  b.get = function (f) {
    return (0, f.state)(function (m) {
      return new d.Tuple(m, m);
    });
  };

  b.put = function (f) {
    return function (m) {
      return (0, f.state)(function (q) {
        return new d.Tuple(h.unit, m);
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};

  var b = a["Control.Monad.State.Trans"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Control.Monad.State.Class"],
      k = a["Data.Functor"],
      p = a["Data.Tuple"],
      u = function u(l) {
    return new k.Functor(function (t) {
      return function (v) {
        return function (D) {
          return k.map(l)(function (E) {
            return new p.Tuple(t(E.value0), E.value1);
          })(v(D));
        };
      };
    });
  },
      y = function y(l) {
    return new m.Monad(function () {
      return e(l);
    }, function () {
      return c(l);
    });
  },
      c = function c(l) {
    return new f.Bind(function () {
      return g(l);
    }, function (t) {
      return function (v) {
        return function (D) {
          return f.bind(l.Bind1())(t(D))(function (E) {
            return v(E.value0)(E.value1);
          });
        };
      };
    });
  },
      g = function g(l) {
    return new h.Apply(function () {
      return u(l.Bind1().Apply0().Functor0());
    }, m.ap(y(l)));
  },
      e = function e(l) {
    return new d.Applicative(function () {
      return g(l);
    }, function (t) {
      return function (v) {
        return d.pure(l.Applicative0())(new p.Tuple(t, v));
      };
    });
  };

  b.bindStateT = c;

  b.monadStateStateT = function (l) {
    return new q.MonadState(function () {
      return y(l);
    }, function (t) {
      return function () {
        var v = d.pure(l.Applicative0());
        return function (D) {
          return v(t(D));
        };
      }();
    });
  };
})(PS);

(function (a) {
  a["Control.Monad.Writer.Trans"] = a["Control.Monad.Writer.Trans"] || {};

  var b = a["Control.Monad.Writer.Trans"],
      d = a["Control.Applicative"],
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Control.Monad.Writer.Class"],
      k = a["Data.Functor"],
      p = a["Data.Monoid"],
      u = a["Data.Semigroup"],
      y = a["Data.Tuple"],
      c = a["Data.Unit"],
      g = function g(E) {
    return function (B) {
      return E(B);
    };
  },
      e = function e(E) {
    return new k.Functor(function (B) {
      return g(k.map(E)(function (r) {
        return new y.Tuple(B(r.value0), r.value1);
      }));
    });
  },
      l = function l(E) {
    return function (B) {
      return new h.Apply(function () {
        return e(B.Functor0());
      }, function (r) {
        return function (C) {
          return h.apply(B)(k.map(B.Functor0())(function (H) {
            return function (G) {
              return new y.Tuple(H.value0(G.value0), u.append(E)(H.value1)(G.value1));
            };
          })(r))(C);
        };
      });
    };
  },
      t = function t(E) {
    return function (B) {
      return new f.Bind(function () {
        return l(E)(B.Apply0());
      }, function (r) {
        return function (C) {
          return f.bind(B)(r)(function (H) {
            var G = C(H.value0);
            return k.map(B.Apply0().Functor0())(function (F) {
              return new y.Tuple(F.value0, u.append(E)(H.value1)(F.value1));
            })(G);
          });
        };
      });
    };
  },
      v = function v(E) {
    return function (B) {
      return new d.Applicative(function () {
        return l(E.Semigroup0())(B.Apply0());
      }, function (r) {
        return d.pure(B)(new y.Tuple(r, p.mempty(E)));
      });
    };
  },
      D = function D(E) {
    return function (B) {
      return new m.Monad(function () {
        return v(E)(B.Applicative0());
      }, function () {
        return t(E.Semigroup0())(B.Bind1());
      });
    };
  };

  b.runWriterT = function (E) {
    return E;
  };

  b.monadWriterT = D;

  b.monadTellWriterT = function (E) {
    return function (B) {
      return new q.MonadTell(function () {
        return D(E)(B);
      }, function () {
        var r = d.pure(B.Applicative0()),
            C = y.Tuple.create(c.unit);
        return function (H) {
          return r(C(H));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Writer"] = a["Control.Monad.Writer"] || {};
  var b = a["Control.Monad.Writer"],
      d = a["Control.Monad.Writer.Trans"],
      h = a["Data.Identity"],
      f = a["Data.Newtype"];

  a = function () {
    var m = f.unwrap(h.newtypeIdentity);
    return function (q) {
      return m(d.runWriterT(q));
    };
  }();

  b.runWriter = a;
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
      h = a["Control.Apply"],
      f = a["Data.Bounded"],
      m = a["Data.Functor"],
      q = a["Data.Maybe"],
      k = a["Data.Newtype"],
      p = a["Data.Ord"],
      u = a["Data.Tuple"],
      y = a["Data.Unfoldable1"];

  a = function a(G) {
    return G;
  };

  var c = function c(G) {
    this.Bounded0 = G;
  },
      g = function g(G, F, J) {
    this.Ord0 = G;
    this.pred = F;
    this.succ = J;
  },
      e = function e(G, F, J, O, Q) {
    this.Bounded0 = G;
    this.Enum1 = F;
    this.cardinality = J;
    this.fromEnum = O;
    this.toEnum = Q;
  },
      l = new c(function () {
    return f.boundedBoolean;
  }),
      t = new k.Newtype(function (G) {
    return G;
  }, a),
      v = function v(G) {
    return new g(function () {
      return q.ordMaybe(G.Enum1().Ord0());
    }, function (F) {
      if (F instanceof q.Nothing) return q.Nothing.value;
      if (F instanceof q.Just) return new q.Just((0, G.Enum1().pred)(F.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [F.constructor.name]);
    }, function (F) {
      if (F instanceof q.Nothing) return new q.Just(new q.Just(f.bottom(G.Bounded0())));
      if (F instanceof q.Just) return m.map(q.functorMaybe)(q.Just.create)((0, G.Enum1().succ)(F.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [F.constructor.name]);
    });
  },
      D = new g(function () {
    return p.ordBoolean;
  }, function (G) {
    return G ? new q.Just(!1) : q.Nothing.value;
  }, function (G) {
    return G ? q.Nothing.value : new q.Just(!0);
  }),
      E = function E(G) {
    return function (F) {
      return function (J) {
        return G(F(J) + 1 | 0);
      };
    };
  },
      B = function B(G) {
    return function (F) {
      return function (J) {
        return G(F(J) - 1 | 0);
      };
    };
  },
      r = function r(G) {
    return G >= f.bottom(f.boundedInt) && G <= f.top(f.boundedInt) ? new q.Just(d.fromCharCode(G)) : q.Nothing.value;
  },
      C = new g(function () {
    return p.ordChar;
  }, B(r)(d.toCharCode), E(r)(d.toCharCode));

  r = new e(function () {
    return f.boundedChar;
  }, function () {
    return C;
  }, d.toCharCode(f.top(f.boundedChar)) - d.toCharCode(f.bottom(f.boundedChar)) | 0, d.toCharCode, r);
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
  b.Enum = g;
  b.BoundedEnum = e;

  b.toEnum = function (G) {
    return G.toEnum;
  };

  b.fromEnum = function (G) {
    return G.fromEnum;
  };

  b.toEnumWithDefaults = function (G) {
    return function (F) {
      return function (J) {
        return function (O) {
          var Q = (0, G.toEnum)(O);
          if (Q instanceof q.Just) return Q.value0;
          if (Q instanceof q.Nothing) return O < (0, G.fromEnum)(f.bottom(G.Bounded0())) ? F : J;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [Q.constructor.name]);
        };
      };
    };
  };

  b.Cardinality = a;

  b.upFromIncluding = function (G) {
    return function (F) {
      return y.unfoldr1(F)(h.apply(h.applyFn)(u.Tuple.create)(G.succ));
    };
  };

  b.defaultSucc = E;
  b.defaultPred = B;
  b.SmallBounded = c;
  b.boundedEnumBoolean = H;
  b.boundedEnumChar = r;
  b.newtypeCardinality = t;

  b.boundedEnumMaybe = function (G) {
    return function (F) {
      return new e(function () {
        return q.boundedMaybe(F.Bounded0());
      }, function () {
        return v(F);
      }, k.unwrap(t)(F.cardinality) + 1 | 0, function (J) {
        if (J instanceof q.Nothing) return 0;
        if (J instanceof q.Just) return (0, F.fromEnum)(J.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [J.constructor.name]);
      }, function (J) {
        return 0 === J ? q.Nothing.value : m.map(q.functorMaybe)(q.Just.create)((0, F.toEnum)(J - 1 | 0));
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
  a = new function (d, h, f, m) {
    this.add = d;
    this.mul = h;
    this.one = f;
    this.zero = m;
  }(a.intAdd, a.intMul, 1, 0);
  b.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var b = a["Data.Ring"],
      d = a["Data.Semiring"];
  a = new function (h, f) {
    this.Semiring0 = h;
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
  a = new function (h) {
    this.Ring0 = h;
  }(function () {
    return d.ringInt;
  });
  b.commutativeRingInt = a;
})(PS);

(function (a) {
  a.canonicalDateImpl = function (b, d, h, f) {
    h = new Date(Date.UTC(d, h - 1, f));
    0 <= d && 100 > d && h.setUTCFullYear(d);
    return b(h.getUTCFullYear())(h.getUTCMonth() + 1)(h.getUTCDate());
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var b = a["Data.Date.Component"],
      d = a["Data.Boolean"],
      h = a["Data.Bounded"],
      f = a["Data.Enum"],
      m = a["Data.Eq"],
      q = a["Data.Maybe"],
      k = a["Data.Ord"],
      p = a["Data.Ordering"],
      u = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      y = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      c = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      g = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      e = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      l = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      t = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      v = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      D = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      E = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      B = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      r = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      C = k.ordInt,
      H = k.ordInt;

  a = m.eqInt;
  var G = new m.Eq(function (K) {
    return function (z) {
      return K instanceof u && z instanceof u || K instanceof y && z instanceof y || K instanceof c && z instanceof c || K instanceof g && z instanceof g || K instanceof e && z instanceof e || K instanceof l && z instanceof l || K instanceof t && z instanceof t || K instanceof v && z instanceof v || K instanceof D && z instanceof D || K instanceof E && z instanceof E || K instanceof B && z instanceof B || K instanceof r && z instanceof r ? !0 : !1;
    };
  }),
      F = new k.Ord(function () {
    return G;
  }, function (K) {
    return function (z) {
      if (K instanceof u && z instanceof u) return p.EQ.value;
      if (K instanceof u) return p.LT.value;
      if (z instanceof u) return p.GT.value;
      if (K instanceof y && z instanceof y) return p.EQ.value;
      if (K instanceof y) return p.LT.value;
      if (z instanceof y) return p.GT.value;
      if (K instanceof c && z instanceof c) return p.EQ.value;
      if (K instanceof c) return p.LT.value;
      if (z instanceof c) return p.GT.value;
      if (K instanceof g && z instanceof g) return p.EQ.value;
      if (K instanceof g) return p.LT.value;
      if (z instanceof g) return p.GT.value;
      if (K instanceof e && z instanceof e) return p.EQ.value;
      if (K instanceof e) return p.LT.value;
      if (z instanceof e) return p.GT.value;
      if (K instanceof l && z instanceof l) return p.EQ.value;
      if (K instanceof l) return p.LT.value;
      if (z instanceof l) return p.GT.value;
      if (K instanceof t && z instanceof t) return p.EQ.value;
      if (K instanceof t) return p.LT.value;
      if (z instanceof t) return p.GT.value;
      if (K instanceof v && z instanceof v) return p.EQ.value;
      if (K instanceof v) return p.LT.value;
      if (z instanceof v) return p.GT.value;
      if (K instanceof D && z instanceof D) return p.EQ.value;
      if (K instanceof D) return p.LT.value;
      if (z instanceof D) return p.GT.value;
      if (K instanceof E && z instanceof E) return p.EQ.value;
      if (K instanceof E) return p.LT.value;
      if (z instanceof E) return p.GT.value;
      if (K instanceof B && z instanceof B) return p.EQ.value;
      if (K instanceof B) return p.LT.value;
      if (z instanceof B) return p.GT.value;
      if (K instanceof r && z instanceof r) return p.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [K.constructor.name, z.constructor.name]);
    };
  });
  m = m.eqInt;
  var J = new h.Bounded(function () {
    return C;
  }, -271820, 275759),
      O = new h.Bounded(function () {
    return F;
  }, u.value, r.value),
      Q = new f.BoundedEnum(function () {
    return J;
  }, function () {
    return V;
  }, 547580, function (K) {
    return K;
  }, function (K) {
    if (-271820 <= K && 275759 >= K) return new q.Just(K);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [K.constructor.name]);
  }),
      V = new f.Enum(function () {
    return C;
  }, function () {
    var K = f.toEnum(Q),
        z = f.fromEnum(Q);
    return function (Y) {
      return K(z(Y) - 1 | 0);
    };
  }(), function () {
    var K = f.toEnum(Q),
        z = f.fromEnum(Q);
    return function (Y) {
      return K(z(Y) + 1 | 0);
    };
  }()),
      M = new f.BoundedEnum(function () {
    return O;
  }, function () {
    return L;
  }, 12, function (K) {
    if (K instanceof u) return 1;
    if (K instanceof y) return 2;
    if (K instanceof c) return 3;
    if (K instanceof g) return 4;
    if (K instanceof e) return 5;
    if (K instanceof l) return 6;
    if (K instanceof t) return 7;
    if (K instanceof v) return 8;
    if (K instanceof D) return 9;
    if (K instanceof E) return 10;
    if (K instanceof B) return 11;
    if (K instanceof r) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [K.constructor.name]);
  }, function (K) {
    return 1 === K ? new q.Just(u.value) : 2 === K ? new q.Just(y.value) : 3 === K ? new q.Just(c.value) : 4 === K ? new q.Just(g.value) : 5 === K ? new q.Just(e.value) : 6 === K ? new q.Just(l.value) : 7 === K ? new q.Just(t.value) : 8 === K ? new q.Just(v.value) : 9 === K ? new q.Just(D.value) : 10 === K ? new q.Just(E.value) : 11 === K ? new q.Just(B.value) : 12 === K ? new q.Just(r.value) : q.Nothing.value;
  }),
      L = new f.Enum(function () {
    return F;
  }, function () {
    var K = f.toEnum(M),
        z = f.fromEnum(M);
    return function (Y) {
      return K(z(Y) - 1 | 0);
    };
  }(), function () {
    var K = f.toEnum(M),
        z = f.fromEnum(M);
    return function (Y) {
      return K(z(Y) + 1 | 0);
    };
  }()),
      w = new h.Bounded(function () {
    return H;
  }, 1, 31),
      R = new f.BoundedEnum(function () {
    return w;
  }, function () {
    return I;
  }, 31, function (K) {
    return K;
  }, function (K) {
    if (1 <= K && 31 >= K) return new q.Just(K);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [K.constructor.name]);
  }),
      I = new f.Enum(function () {
    return H;
  }, function () {
    var K = f.toEnum(R),
        z = f.fromEnum(R);
    return function (Y) {
      return K(z(Y) - 1 | 0);
    };
  }(), function () {
    var K = f.toEnum(R),
        z = f.fromEnum(R);
    return function (Y) {
      return K(z(Y) + 1 | 0);
    };
  }());
  b.eqYear = a;
  b.ordYear = C;
  b.boundedYear = J;
  b.boundedEnumYear = Q;
  b.eqMonth = G;
  b.ordMonth = F;
  b.boundedMonth = O;
  b.boundedEnumMonth = M;
  b.eqDay = m;
  b.ordDay = H;
  b.boundedDay = w;
  b.boundedEnumDay = R;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var b = a["Data.Date"],
      d = a["Data.Date"],
      h = a["Data.Bounded"],
      f = a["Data.Date.Component"],
      m = a["Data.Enum"],
      q = a["Data.Eq"],
      k = a["Data.Maybe"],
      p = a["Data.Ord"],
      u = a["Data.Ordering"],
      y = function () {
    function e(l, t, v) {
      this.value0 = l;
      this.value1 = t;
      this.value2 = v;
    }

    e.create = function (l) {
      return function (t) {
        return function (v) {
          return new e(l, t, v);
        };
      };
    };

    return e;
  }(),
      c = new q.Eq(function (e) {
    return function (l) {
      return q.eq(f.eqYear)(e.value0)(l.value0) && q.eq(f.eqMonth)(e.value1)(l.value1) && q.eq(f.eqDay)(e.value2)(l.value2);
    };
  }),
      g = new p.Ord(function () {
    return c;
  }, function (e) {
    return function (l) {
      var t = p.compare(f.ordYear)(e.value0)(l.value0);
      if (t instanceof u.LT) return u.LT.value;
      if (t instanceof u.GT) return u.GT.value;
      t = p.compare(f.ordMonth)(e.value1)(l.value1);
      return t instanceof u.LT ? u.LT.value : t instanceof u.GT ? u.GT.value : p.compare(f.ordDay)(e.value2)(l.value2);
    };
  });

  a = new h.Bounded(function () {
    return g;
  }, new y(h.bottom(f.boundedYear), h.bottom(f.boundedMonth), h.bottom(f.boundedDay)), new y(h.top(f.boundedYear), h.top(f.boundedMonth), h.top(f.boundedDay)));

  b.canonicalDate = function (e) {
    return function (l) {
      return function (t) {
        return d.canonicalDateImpl(function (v) {
          return function (D) {
            return function (E) {
              return new y(v, k.fromJust()(m.toEnum(f.boundedEnumMonth)(D)), E);
            };
          };
        }, e, m.fromEnum(f.boundedEnumMonth)(l), t);
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
  b.ordDate = g;
  b.boundedDate = a;
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var b = a["Data.Time.Component"],
      d = a["Data.Boolean"],
      h = a["Data.Bounded"],
      f = a["Data.Enum"],
      m = a["Data.Eq"],
      q = a["Data.Maybe"];
  a = a["Data.Ord"];
  var k = a.ordInt,
      p = a.ordInt,
      u = a.ordInt,
      y = a.ordInt,
      c = a = m.eqInt,
      g = m.eqInt;
  m = m.eqInt;
  var e = new h.Bounded(function () {
    return k;
  }, 0, 59),
      l = new h.Bounded(function () {
    return p;
  }, 0, 59),
      t = new h.Bounded(function () {
    return u;
  }, 0, 999),
      v = new h.Bounded(function () {
    return y;
  }, 0, 23),
      D = new f.BoundedEnum(function () {
    return e;
  }, function () {
    return E;
  }, 60, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 59 >= J) return new q.Just(J);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [J.constructor.name]);
  }),
      E = new f.Enum(function () {
    return k;
  }, function () {
    var J = f.toEnum(D),
        O = f.fromEnum(D);
    return function (Q) {
      return J(O(Q) - 1 | 0);
    };
  }(), function () {
    var J = f.toEnum(D),
        O = f.fromEnum(D);
    return function (Q) {
      return J(O(Q) + 1 | 0);
    };
  }()),
      B = new f.BoundedEnum(function () {
    return l;
  }, function () {
    return r;
  }, 60, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 59 >= J) return new q.Just(J);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [J.constructor.name]);
  }),
      r = new f.Enum(function () {
    return p;
  }, function () {
    var J = f.toEnum(B),
        O = f.fromEnum(B);
    return function (Q) {
      return J(O(Q) - 1 | 0);
    };
  }(), function () {
    var J = f.toEnum(B),
        O = f.fromEnum(B);
    return function (Q) {
      return J(O(Q) + 1 | 0);
    };
  }()),
      C = new f.BoundedEnum(function () {
    return t;
  }, function () {
    return H;
  }, 1E3, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 999 >= J) return new q.Just(J);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [J.constructor.name]);
  }),
      H = new f.Enum(function () {
    return u;
  }, function () {
    var J = f.toEnum(C),
        O = f.fromEnum(C);
    return function (Q) {
      return J(O(Q) - 1 | 0);
    };
  }(), function () {
    var J = f.toEnum(C),
        O = f.fromEnum(C);
    return function (Q) {
      return J(O(Q) + 1 | 0);
    };
  }()),
      G = new f.BoundedEnum(function () {
    return v;
  }, function () {
    return F;
  }, 24, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 23 >= J) return new q.Just(J);
    if (d.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [J.constructor.name]);
  }),
      F = new f.Enum(function () {
    return y;
  }, function () {
    var J = f.toEnum(G),
        O = f.fromEnum(G);
    return function (Q) {
      return J(O(Q) - 1 | 0);
    };
  }(), function () {
    var J = f.toEnum(G),
        O = f.fromEnum(G);
    return function (Q) {
      return J(O(Q) + 1 | 0);
    };
  }());
  b.eqHour = m;
  b.ordHour = y;
  b.boundedHour = v;
  b.boundedEnumHour = G;
  b.eqMinute = c;
  b.ordMinute = p;
  b.boundedMinute = l;
  b.boundedEnumMinute = B;
  b.eqSecond = a;
  b.ordSecond = k;
  b.boundedSecond = e;
  b.boundedEnumSecond = D;
  b.eqMillisecond = g;
  b.ordMillisecond = u;
  b.boundedMillisecond = t;
  b.boundedEnumMillisecond = C;
})(PS);

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  var b = a["Data.Time"],
      d = a["Data.Bounded"],
      h = a["Data.Eq"],
      f = a["Data.Ord"],
      m = a["Data.Ordering"],
      q = a["Data.Time.Component"];

  a = function () {
    function u(y, c, g, e) {
      this.value0 = y;
      this.value1 = c;
      this.value2 = g;
      this.value3 = e;
    }

    u.create = function (y) {
      return function (c) {
        return function (g) {
          return function (e) {
            return new u(y, c, g, e);
          };
        };
      };
    };

    return u;
  }();

  var k = new h.Eq(function (u) {
    return function (y) {
      return h.eq(q.eqHour)(u.value0)(y.value0) && h.eq(q.eqMinute)(u.value1)(y.value1) && h.eq(q.eqSecond)(u.value2)(y.value2) && h.eq(q.eqMillisecond)(u.value3)(y.value3);
    };
  }),
      p = new f.Ord(function () {
    return k;
  }, function (u) {
    return function (y) {
      var c = f.compare(q.ordHour)(u.value0)(y.value0);
      if (c instanceof m.LT) return m.LT.value;
      if (c instanceof m.GT) return m.GT.value;
      c = f.compare(q.ordMinute)(u.value1)(y.value1);
      if (c instanceof m.LT) return m.LT.value;
      if (c instanceof m.GT) return m.GT.value;
      c = f.compare(q.ordSecond)(u.value2)(y.value2);
      return c instanceof m.LT ? m.LT.value : c instanceof m.GT ? m.GT.value : f.compare(q.ordMillisecond)(u.value3)(y.value3);
    };
  });
  d = new d.Bounded(function () {
    return p;
  }, new a(d.bottom(q.boundedHour), d.bottom(q.boundedMinute), d.bottom(q.boundedSecond), d.bottom(q.boundedMillisecond)), new a(d.top(q.boundedHour), d.top(q.boundedMinute), d.top(q.boundedSecond), d.top(q.boundedMillisecond)));
  b.Time = a;

  b.hour = function (u) {
    return u.value0;
  };

  b.minute = function (u) {
    return u.value1;
  };

  b.second = function (u) {
    return u.value2;
  };

  b.millisecond = function (u) {
    return u.value3;
  };

  b.eqTime = k;
  b.ordTime = p;
  b.boundedTime = d;
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  var b = a["Data.DateTime"],
      d = a["Data.Bounded"],
      h = a["Data.Date"],
      f = a["Data.Eq"],
      m = a["Data.Ord"],
      q = a["Data.Ordering"],
      k = a["Data.Time"];

  a = function () {
    function y(c, g) {
      this.value0 = c;
      this.value1 = g;
    }

    y.create = function (c) {
      return function (g) {
        return new y(c, g);
      };
    };

    return y;
  }();

  var p = new f.Eq(function (y) {
    return function (c) {
      return f.eq(h.eqDate)(y.value0)(c.value0) && f.eq(k.eqTime)(y.value1)(c.value1);
    };
  }),
      u = new m.Ord(function () {
    return p;
  }, function (y) {
    return function (c) {
      var g = m.compare(h.ordDate)(y.value0)(c.value0);
      return g instanceof q.LT ? q.LT.value : g instanceof q.GT ? q.GT.value : m.compare(k.ordTime)(y.value1)(c.value1);
    };
  });
  d = new d.Bounded(function () {
    return u;
  }, new a(d.bottom(h.boundedDate), d.bottom(k.boundedTime)), new a(d.top(h.boundedDate), d.top(k.boundedTime)));
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
      h = a["Data.Boolean"],
      f = a["Data.Date"],
      m = a["Data.Date.Component"],
      q = a["Data.DateTime"],
      k = a["Data.Enum"],
      p = a["Data.Maybe"],
      u = a["Data.Time"];

  a = function () {
    return d.toDateTimeImpl(function (y) {
      return function (c) {
        return function (g) {
          return function (e) {
            return function (l) {
              return function (t) {
                return function (v) {
                  return new q.DateTime(f.canonicalDate(y)(p.fromJust()(k.toEnum(m.boundedEnumMonth)(c)))(g), new u.Time(e, l, t, v));
                };
              };
            };
          };
        };
      };
    });
  }();

  b.instant = function (y) {
    if (-86399778816E5 <= y && 8639977881599999 >= y) return new p.Just(y);
    if (h.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.DateTime.Instant (line 44, column 1 - line 44, column 41): " + [y.constructor.name]);
  };

  b.toDateTime = a;
})(PS);

(function (a) {
  a["Data.Either.Extra"] = a["Data.Either.Extra"] || {};

  var b = a["Data.Either.Extra"],
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
      u = function u(g) {
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
          var t = d.pure(g.Applicative0());
          return function (v) {
            return t(l(v));
          };
        }()));
      };
    };
  },
      c = function c(g) {
    return function (e) {
      return function (l) {
        return k.flip(h.bind(g.Bind1()))(u(m.empty(e))(function () {
          var t = d.pure(g.Applicative0());
          return function (v) {
            return t(l(v));
          };
        }()));
      };
    };
  };

  b.catLefts = function (g) {
    return function (e) {
      return c(g)(e)(f.identity(f.categoryFn));
    };
  };

  b.catRights = function (g) {
    return function (e) {
      return y(g)(e)(f.identity(f.categoryFn));
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
      h = a["Data.CommutativeRing"];
  a = new function (f, m, q, k) {
    this.CommutativeRing0 = f;
    this.degree = m;
    this.div = q;
    this.mod = k;
  }(function () {
    return h.commutativeRingInt;
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

  b["genericBottom'"] = k;

  b.genericBottom = function (p) {
    return function (u) {
      return d.to(p)(k(u));
    };
  };

  b["genericTop'"] = m;

  b.genericTop = function (p) {
    return function (u) {
      return d.to(p)(m(u));
    };
  };

  b.genericBottomNoArguments = q;

  b.genericBottomSum = function (p) {
    return new f(new d.Inl(k(p)));
  };

  b.genericBottomConstructor = function (p) {
    return new f(k(p));
  };

  b.genericTopNoArguments = a;

  b.genericTopSum = function (p) {
    return new h(new d.Inr(m(p)));
  };

  b.genericTopConstructor = function (p) {
    return new h(m(p));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var b = a["Data.Generic.Rep.Enum"],
      d = a["Data.Boolean"],
      h = a["Data.Enum"],
      f = a["Data.Functor"],
      m = a["Data.Generic.Rep"],
      q = a["Data.Generic.Rep.Bounded"],
      k = a["Data.Maybe"],
      p = a["Data.Newtype"],
      u = function u(D, E) {
    this["genericPred'"] = D;
    this["genericSucc'"] = E;
  },
      y = function y(D, E, B) {
    this["genericCardinality'"] = D;
    this["genericFromEnum'"] = E;
    this["genericToEnum'"] = B;
  },
      c = function c(D) {
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

  a = new u(function (D) {
    return k.Nothing.value;
  }, function (D) {
    return k.Nothing.value;
  });

  var t = function t(D) {
    return D["genericCardinality'"];
  },
      v = new y(1, function (D) {
    return 0;
  }, function (D) {
    return 0 === D ? new k.Just(m.NoArguments.value) : k.Nothing.value;
  });

  b.genericPred = function (D) {
    return function (E) {
      var B = f.map(k.functorMaybe)(m.to(D)),
          r = e(E),
          C = m.from(D);
      return function (H) {
        return B(r(C(H)));
      };
    };
  };

  b.genericSucc = function (D) {
    return function (E) {
      var B = f.map(k.functorMaybe)(m.to(D)),
          r = g(E),
          C = m.from(D);
      return function (H) {
        return B(r(C(H)));
      };
    };
  };

  b.genericCardinality = function (D) {
    return function (E) {
      return p.unwrap(h.newtypeCardinality)(t(E));
    };
  };

  b.genericToEnum = function (D) {
    return function (E) {
      var B = f.map(k.functorMaybe)(m.to(D)),
          r = c(E);
      return function (C) {
        return B(r(C));
      };
    };
  };

  b.genericFromEnum = function (D) {
    return function (E) {
      var B = l(E),
          r = m.from(D);
      return function (C) {
        return B(r(C));
      };
    };
  };

  b.genericEnumNoArguments = a;

  b.genericEnumConstructor = function (D) {
    return new u(function (E) {
      return f.map(k.functorMaybe)(m.Constructor)(e(D)(E));
    }, function (E) {
      return f.map(k.functorMaybe)(m.Constructor)(g(D)(E));
    });
  };

  b.genericEnumSum = function (D) {
    return function (E) {
      return function (B) {
        return function (r) {
          return new u(function (C) {
            if (C instanceof m.Inl) return f.map(k.functorMaybe)(m.Inl.create)(e(D)(C.value0));

            if (C instanceof m.Inr) {
              C = e(B)(C.value0);
              if (C instanceof k.Nothing) return new k.Just(new m.Inl(q["genericTop'"](E)));
              if (C instanceof k.Just) return new k.Just(new m.Inr(C.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [C.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [C.constructor.name]);
          }, function (C) {
            if (C instanceof m.Inl) {
              C = g(D)(C.value0);
              if (C instanceof k.Nothing) return new k.Just(new m.Inr(q["genericBottom'"](r)));
              if (C instanceof k.Just) return new k.Just(new m.Inl(C.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [C.constructor.name]);
            }

            if (C instanceof m.Inr) return f.map(k.functorMaybe)(m.Inr.create)(g(B)(C.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [C.constructor.name]);
          });
        };
      };
    };
  };

  b.genericBoundedEnumNoArguments = v;

  b.genericBoundedEnumConstructor = function (D) {
    return new y(p.unwrap(h.newtypeCardinality)(t(D)), function (E) {
      return l(D)(E);
    }, function (E) {
      return f.map(k.functorMaybe)(m.Constructor)(c(D)(E));
    });
  };

  b.genericBoundedEnumSum = function (D) {
    return function (E) {
      return new y(h.Cardinality(p.unwrap(h.newtypeCardinality)(t(D)) + p.unwrap(h.newtypeCardinality)(t(E)) | 0), function (B) {
        if (B instanceof m.Inl) return l(D)(B.value0);
        if (B instanceof m.Inr) return l(E)(B.value0) + p.unwrap(h.newtypeCardinality)(t(D)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [B.constructor.name]);
      }, function (B) {
        var r = t(D);
        if (0 <= B && B < r) B = f.map(k.functorMaybe)(m.Inl.create)(c(D)(B));else if (d.otherwise) B = f.map(k.functorMaybe)(m.Inr.create)(c(E)(B - r | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [r.constructor.name]);
        return B;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var b = a["Data.Generic.Rep.Eq"],
      d = a["Data.Generic.Rep"],
      h = function h(f) {
    this["genericEq'"] = f;
  };

  a = new h(function (f) {
    return function (m) {
      return !0;
    };
  });

  b.genericEq = function (f) {
    return function (m) {
      return function (q) {
        return function (k) {
          return (0, m["genericEq'"])(d.from(f)(q))(d.from(f)(k));
        };
      };
    };
  };

  b.genericEqNoArguments = a;

  b.genericEqSum = function (f) {
    return function (m) {
      return new h(function (q) {
        return function (k) {
          return q instanceof d.Inl && k instanceof d.Inl ? (0, f["genericEq'"])(q.value0)(k.value0) : q instanceof d.Inr && k instanceof d.Inr ? (0, m["genericEq'"])(q.value0)(k.value0) : !1;
        };
      });
    };
  };

  b.genericEqConstructor = function (f) {
    return new h(function (m) {
      return function (q) {
        return (0, f["genericEq'"])(m)(q);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var b = a["Data.Generic.Rep.Ord"],
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

  b.genericCompare = function (q) {
    return function (k) {
      return function (p) {
        return function (u) {
          return m(k)(d.from(q)(p))(d.from(q)(u));
        };
      };
    };
  };

  b.genericOrdNoArguments = a;

  b.genericOrdSum = function (q) {
    return function (k) {
      return new f(function (p) {
        return function (u) {
          if (p instanceof d.Inl && u instanceof d.Inl) return m(q)(p.value0)(u.value0);
          if (p instanceof d.Inr && u instanceof d.Inr) return m(k)(p.value0)(u.value0);
          if (p instanceof d.Inl && u instanceof d.Inr) return h.LT.value;
          if (p instanceof d.Inr && u instanceof d.Inl) return h.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [p.constructor.name, u.constructor.name]);
        };
      });
    };
  };

  b.genericOrdConstructor = function (q) {
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

  b.genericShow = function (p) {
    return function (u) {
      return function (y) {
        return (0, u["genericShow'"])(h.from(p)(y));
      };
    };
  };

  b.genericShowArgsNoArguments = a;

  b.genericShowSum = function (p) {
    return function (u) {
      return new k(function (y) {
        if (y instanceof h.Inl) return (0, p["genericShow'"])(y.value0);
        if (y instanceof h.Inr) return (0, u["genericShow'"])(y.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [y.constructor.name]);
      });
    };
  };

  b.genericShowConstructor = function (p) {
    return function (u) {
      return new k(function (y) {
        var c = q.reflectSymbol(u)(q.SProxy.value);
        y = (0, p.genericShowArgs)(y);
        return 0 === y.length ? c : "(" + (d.intercalate(d.foldableArray)(f.monoidString)(" ")(m.append(m.semigroupArray)([c])(y)) + ")");
      });
    };
  };
})(PS);

(function (a) {
  a.toInstantImpl = function (b) {
    return function (d) {
      return function (h) {
        h = h.getTime();
        return isNaN(h) ? d : b(h);
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
      h = a["Data.Date"],
      f = a["Data.Date.Component"],
      m = a["Data.DateTime.Instant"],
      q = a["Data.Enum"],
      k = a["Data.Functor"],
      p = a["Data.Int"],
      u = a["Data.Maybe"],
      y = a["Data.Time"],
      c = a["Data.Time.Component"],
      g = a["Data.Time.Duration"];
  a = a["Control.Bind"].composeKleisliFlipped(u.bindMaybe)(function (e) {
    return m.instant(g.Milliseconds(e));
  })(d.toInstantImpl(u.Just.create)(u.Nothing.value));
  k = k.map(k.functorFn)(k.map(u.functorMaybe)(m.toDateTime))(a);

  b.fromDateTime = function (e) {
    return d.jsdate({
      year: p.toNumber(q.fromEnum(f.boundedEnumYear)(h.year(e.value0))),
      month: p.toNumber(q.fromEnum(f.boundedEnumMonth)(h.month(e.value0)) - 1 | 0),
      day: p.toNumber(q.fromEnum(f.boundedEnumDay)(h.day(e.value0))),
      hour: p.toNumber(q.fromEnum(c.boundedEnumHour)(y.hour(e.value1))),
      minute: p.toNumber(q.fromEnum(c.boundedEnumMinute)(y.minute(e.value1))),
      second: p.toNumber(q.fromEnum(c.boundedEnumSecond)(y.second(e.value1))),
      millisecond: p.toNumber(q.fromEnum(c.boundedEnumMillisecond)(y.millisecond(e.value1)))
    });
  };

  b.toDateTime = k;

  b.toISOString = function (e) {
    return d.dateMethodEff("toISOString", e);
  };

  b.parse = d.parse;
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};
  var b = a["Data.Maybe.First"],
      d = a["Data.Maybe"];
  a = new a["Data.Semigroup"].Semigroup(function (h) {
    return function (f) {
      return h instanceof d.Just ? h : f;
    };
  });

  b.First = function (h) {
    return h;
  };

  b.semigroupFirst = a;
})(PS);

(function (a) {
  a["Data.Natural"] = a["Data.Natural"] || {};
  var b = a["Data.Natural"],
      d = a["Data.Show"];
  a = new d.Show(function () {
    var h = d.show(d.showInt);
    return function (f) {
      return h(f);
    };
  }());

  b.intToNat = function (h) {
    return 0 <= h ? h : 0;
  };

  b.natToInt = function (h) {
    return h;
  };

  b.showNatural = a;
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  a = a["Data.Profunctor"];
  var b = new function (d) {
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

  a.profunctorFn = b;
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};
  var b = a["Data.Profunctor.Strong"],
      d = a["Control.Category"],
      h = a["Control.Semigroupoid"],
      f = a["Data.Profunctor"],
      m = a["Data.Tuple"];
  a = new function (k, p, u) {
    this.Profunctor0 = k;
    this.first = p;
    this.second = u;
  }(function () {
    return f.profunctorFn;
  }, function (k) {
    return function (p) {
      return new m.Tuple(k(p.value0), p.value1);
    };
  }, a["Data.Functor"].map(m.functorTuple));

  var q = function q(k) {
    return function (p) {
      return function (u) {
        return function (y) {
          return h.composeFlipped(k.Semigroupoid0())((0, p.first)(u))((0, p.second)(y));
        };
      };
    };
  };

  b.second = function (k) {
    return k.second;
  };

  b.fanout = function (k) {
    return function (p) {
      return function (u) {
        return function (y) {
          var c = f.dimap(p.Profunctor0())(d.identity(d.categoryFn))(function (g) {
            return new m.Tuple(g, g);
          })(d.identity(k));
          return h.composeFlipped(k.Semigroupoid0())(c)(q(k)(p)(u)(y));
        };
      };
    };
  };

  b.strongFn = a;
})(PS);

(function (a) {
  var b = "function" === typeof Array.from,
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
          return function (u) {
            return function (y) {
              var c = y.length;
              if (0 > u || u >= c) return k;
              if (d) for (y = y[Symbol.iterator](), c = u;; --c) {
                var g = y.next();
                if (g.done) return k;
                if (0 === c) return q(p(g.value));
              }
              return m(u)(y);
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

        for (var u = 0; u < q; ++u) {
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
      return b ? function (k) {
        return Array.from(k, q);
      } : m;
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
      return function (h) {
        return function (f) {
          f = f.indexOf(h);
          return -1 === f ? d : b(f);
        };
      };
    };
  };

  a._lastIndexOf = function (b) {
    return function (d) {
      return function (h) {
        return function (f) {
          f = f.lastIndexOf(h);
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
      h = a["Data.Maybe"],
      f = d._lastIndexOf(h.Just.create)(h.Nothing.value),
      m = d._indexOf(h.Just.create)(h.Nothing.value);

  b.stripSuffix = function (q) {
    return function (k) {
      var p = f(q)(k);
      return p instanceof h.Just && p.value0 === (d.length(k) - d.length(q) | 0) ? h.Just.create(d.take(p.value0)(k)) : h.Nothing.value;
    };
  };

  b.contains = function (q) {
    var k = m(q);
    return function (p) {
      return h.isJust(k(p));
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
      h = a["Data.Array"],
      f = a["Data.Boolean"],
      m = a["Data.Bounded"],
      q = a["Data.Enum"],
      k = a["Data.Eq"],
      p = a["Data.EuclideanRing"],
      u = a["Data.Functor"],
      y = a["Data.Int"],
      c = a["Data.Maybe"],
      g = a["Data.Ord"],
      e = a["Data.String.CodeUnits"],
      l = a["Data.String.Common"],
      t = a["Data.String.Unsafe"],
      v = a["Data.Tuple"],
      D = a["Data.Unfoldable"],
      E = function E(w) {
    return function (R) {
      return ((1024 * (w - 55296 | 0) | 0) + (R - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (w) {
    return "(CodePoint 0x" + (l.toUpper(y.toStringAs(y.hexadecimal)(w)) + ")");
  });

  var B = function B(w) {
    var R = e.length(w);
    if (0 === R) return c.Nothing.value;
    if (1 === R) return new c.Just({
      head: q.fromEnum(q.boundedEnumChar)(t.charAt(0)(w)),
      tail: ""
    });
    R = q.fromEnum(q.boundedEnumChar)(t.charAt(1)(w));
    var I = q.fromEnum(q.boundedEnumChar)(t.charAt(0)(w));
    return 55296 <= I && 56319 >= I && 56320 <= R && 57343 >= R ? new c.Just({
      head: E(I)(R),
      tail: e.drop(2)(w)
    }) : new c.Just({
      head: I,
      tail: e.drop(1)(w)
    });
  },
      r = function r(w) {
    return u.map(c.functorMaybe)(function (R) {
      return new v.Tuple(R.head, R.tail);
    })(B(w));
  },
      C = d._unsafeCodePointAt0(function (w) {
    var R = q.fromEnum(q.boundedEnumChar)(t.charAt(0)(w));
    return 55296 <= R && 56319 >= R && 1 < e.length(w) && (w = q.fromEnum(q.boundedEnumChar)(t.charAt(1)(w)), 56320 <= w && 57343 >= w) ? E(R)(w) : R;
  }),
      H = d._toCodePointArray(function (w) {
    return D.unfoldr(D.unfoldableArray)(r)(w);
  })(C),
      G = function () {
    var w = q.toEnumWithDefaults(q.boundedEnumChar)(m.bottom(m.boundedChar))(m.top(m.boundedChar));
    return function (R) {
      return e.singleton(w(R));
    };
  }(),
      F = d._singleton(function (w) {
    if (65535 >= w) return G(w);
    var R = p.div(p.euclideanRingInt)(w - 65536 | 0)(1024) + 55296 | 0;
    w = p.mod(p.euclideanRingInt)(w - 65536 | 0)(1024) + 56320 | 0;
    return G(R) + G(w);
  }),
      J = function J(w) {
    return function (R) {
      if (1 > w) return "";
      var I = B(R);
      return I instanceof c.Just ? F(I.value0.head) + J(w - 1 | 0)(I.value0.tail) : R;
    };
  };

  d._take(J);

  var O = new k.Eq(function (w) {
    return function (R) {
      return w === R;
    };
  }),
      Q = new g.Ord(function () {
    return O;
  }, function (w) {
    return function (R) {
      return g.compare(g.ordInt)(w)(R);
    };
  }),
      V = function V(w) {
    return function (R) {
      for (var I = w, K = !1, z; !K;) {
        z = I;
        var Y = B(R);
        Y instanceof c.Just ? 0 === z ? (K = !0, z = new c.Just(Y.value0.head)) : (I = z - 1 | 0, R = Y.value0.tail, z = void 0) : (K = !0, z = c.Nothing.value);
      }

      return z;
    };
  },
      M = new m.Bounded(function () {
    return Q;
  }, 0, 1114111);

  k = new q.BoundedEnum(function () {
    return M;
  }, function () {
    return L;
  }, 1114112, function (w) {
    return w;
  }, function (w) {
    if (0 <= w && 1114111 >= w) return new c.Just(w);
    if (f.otherwise) return c.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [w.constructor.name]);
  });
  var L = new q.Enum(function () {
    return Q;
  }, q.defaultPred(q.toEnum(k))(q.fromEnum(k)), q.defaultSucc(q.toEnum(k))(q.fromEnum(k)));
  b.singleton = F;
  b.toCodePointArray = H;

  b.codePointAt = function (w) {
    return function (R) {
      return 0 > w || 0 === w && "" === R ? c.Nothing.value : 0 === w ? new c.Just(C(R)) : d._codePointAt(V)(c.Just.create)(c.Nothing.value)(C)(w)(R);
    };
  };

  b.length = function (w) {
    return h.length(H(w));
  };

  b.showCodePoint = a;
  b.boundedEnumCodePoint = k;
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var b = a["Data.String.NonEmpty.Internal"],
      d = a["Data.Maybe"];
  a = a["Data.Semigroup"].semigroupString;

  b.fromString = function (h) {
    return "" === h ? d.Nothing.value : new d.Just(h);
  };

  b.toString = function (h) {
    return h;
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
      h = a["Data.FunctorWithIndex"],
      f = a["Data.Traversable"],
      m = function m(k) {
    return function (p) {
      return function (u) {
        var y = f.sequence(k.Traversable2())(p),
            c = h.mapWithIndex(k.FunctorWithIndex0())(u);
        return function (g) {
          return y(c(g));
        };
      };
    };
  },
      q = new function (k, p, u, y) {
    this.FoldableWithIndex1 = k;
    this.FunctorWithIndex0 = p;
    this.Traversable2 = u;
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

  b.traverseWithIndex = function (k) {
    return k.traverseWithIndex;
  };

  b.traversableWithIndexArray = q;
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
      h = a["Control.Applicative"],
      f = a.Effect;
  a = a["Control.Bind"].bind(f.bindEffect)(d.getUUIDImpl)(function () {
    var m = h.pure(f.applicativeEffect);
    return function (q) {
      return m(q);
    };
  }());
  b.emptyUUID = "00000000-0000-0000-0000-000000000000";
  b.genUUID = a;

  b.toString = function (m) {
    return m;
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
      h = new function (f, m, q, k, p, u) {
    this.Semigroup0 = f;
    this.at = m;
    this.pathAppend = q;
    this.pathAppendNSx = k;
    this.root = p;
    this.xx = u;
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

  b.stringXPath = h;
})(PS);

(function (a) {
  a.tryPrettyJson = function (b) {
    var d = b;
    return function () {
      if (void 0 === b) return null;
      var h = JSON.stringify(JSON.parse(b), void 0, 2);
      return d = void 0 === h || null === h ? b : h;
    };
  };

  a.preParse = function (b) {
    b = JSON.parse(b);
    b.data.attributes.xml = void 0;
    b = JSON.stringify(b);
    return void 0 === b || null === b ? "" : b;
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
  a.unsafeReadPropImpl = function (b, d, h, f) {
    return null == f ? b : d(f[h]);
  };
})(PS["Foreign.Index"] = PS["Foreign.Index"] || {});

(function (a) {
  a["Foreign.Index"] = a["Foreign.Index"] || {};
  var b = a["Foreign.Index"],
      d = a["Control.Applicative"],
      h = a["Control.Monad.Except.Trans"],
      f = a["Data.Identity"],
      m = a.Foreign;

  a["Foreign.Index"].readProp = function (q) {
    return function (k) {
      return b.unsafeReadPropImpl(m.fail(new m.TypeMismatch("object", m.typeOf(k))), d.pure(h.applicativeExceptT(f.monadIdentity)), q, k);
    };
  };
})(PS);

(function (a) {
  a.copyRecord = function (b) {
    var d = {},
        h;

    for (h in b) {
      ({}).hasOwnProperty.call(b, h) && (d[h] = b[h]);
    }

    return d;
  };

  a.unsafeInsert = function (b) {
    return function (d) {
      return function (h) {
        h[b] = d;
        return h;
      };
    };
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});

(function (a) {
  a["Record.Builder"] = a["Record.Builder"] || {};
  var b = a["Record.Builder"],
      d = a["Record.Builder"],
      h = a["Data.Symbol"],
      f = a["Control.Semigroupoid"].semigroupoidFn;
  a = a["Control.Category"].categoryFn;

  b.build = function (m) {
    return function (q) {
      return m(d.copyRecord(q));
    };
  };

  b.insert = function (m) {
    return function (q) {
      return function (k) {
        return function (p) {
          return function (u) {
            return function (y) {
              return d.unsafeInsert(h.reflectSymbol(k)(p))(u)(y);
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
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Control.Category"],
      k = a["Control.Monad.Except"],
      p = a["Control.Monad.Except.Trans"],
      u = a["Control.Semigroupoid"],
      y = a["Data.Bifunctor"],
      c = a["Data.Either"],
      g = a["Data.Function"],
      e = a["Data.Functor"],
      l = a["Data.Identity"],
      t = a["Data.List.Types"],
      v = a["Data.Maybe"],
      D = a["Data.Semigroup"],
      E = a["Data.Symbol"],
      B = a["Data.TraversableWithIndex"],
      r = a["Effect.Exception"],
      C = a["Effect.Uncurried"],
      H = a["Effect.Unsafe"],
      G = a.Foreign,
      F = a["Foreign.Index"],
      J = a["Record.Builder"],
      O = a["Type.Data.RowList"],
      Q = function Q(z) {
    this.getFields = z;
  },
      V = function V(z) {
    this.readImpl = z;
  };

  a = new V(G.readString);

  var M = new V(G.readInt),
      L = new V(h.pure(p.applicativeExceptT(l.monadIdentity))),
      w = new Q(function (z) {
    return function (Y) {
      return h.pure(p.applicativeExceptT(l.monadIdentity))(q.identity(J.categoryBuilder));
    };
  }),
      R = function () {
    var z = y.lmap(c.bifunctorEither)(function () {
      var ma = h.pure(t.applicativeNonEmptyList);
      return function (za) {
        return ma(G.ForeignError.create(r.message(za)));
      };
    }()),
        Y = C.runEffectFn1(d._parseJSON);
    return function (ma) {
      return p.ExceptT(l.Identity(z(H.unsafePerformEffect(r["try"](Y(ma))))));
    };
  }(),
      I = function I(z) {
    return function (Y) {
      return function (ma) {
        if (Y instanceof c.Left && ma instanceof c.Right) return new c.Left(Y.value0);
        if (Y instanceof c.Left && ma instanceof c.Left) return new c.Left(D.append(z)(Y.value0)(ma.value0));
        if (Y instanceof c.Right && ma instanceof c.Left) return new c.Left(ma.value0);
        if (Y instanceof c.Right && ma instanceof c.Right) return new c.Right(Y.value0(ma.value0));
        throw Error("Failed pattern match at Simple.JSON (line 234, column 1 - line 234, column 90): " + [Y.constructor.name, ma.constructor.name]);
      };
    };
  },
      K = function K(z) {
    return function (Y) {
      return function (ma) {
        return function (za) {
          return p.ExceptT(f.apply(Y.Apply0())(e.map(Y.Apply0().Functor0())(I(z))(p.runExceptT(ma)))(p.runExceptT(za)));
        };
      };
    };
  };

  b["readJSON'"] = function (z) {
    return m.composeKleisliFlipped(p.bindExceptT(l.monadIdentity))(z.readImpl)(R);
  };

  b["read'"] = function (z) {
    return z.readImpl;
  };

  b.ReadForeign = V;

  b.readImpl = function (z) {
    return z.readImpl;
  };

  b.readForeign = L;
  b.readInt = M;
  b.readString = a;

  b.readArray = function (z) {
    return new V(function () {
      return m.composeKleisliFlipped(p.bindExceptT(l.monadIdentity))(B.traverseWithIndex(B.traversableWithIndexArray)(p.applicativeExceptT(l.monadIdentity))(function (Y) {
        return function (ma) {
          return k.withExcept(e.map(t.functorNonEmptyList)(G.ErrorAtIndex.create(Y)))((0, z.readImpl)(ma));
        };
      }))(G.readArray);
    }());
  };

  b.readMaybe = function (z) {
    return new V(function () {
      return function (Y) {
        return function (ma) {
          return G.isNull(ma) || G.isUndefined(ma) ? h.pure(p.applicativeExceptT(l.monadIdentity))(v.Nothing.value) : e.map(p.functorExceptT(l.functorIdentity))(v.Just.create)(Y(ma));
        };
      }(z.readImpl);
    }());
  };

  b.readRecord = function (z) {
    return function (Y) {
      return new V(function (ma) {
        return e.map(p.functorExceptT(l.functorIdentity))(g.flip(J.build)({}))((0, Y.getFields)(O.RLProxy.value)(ma));
      });
    };
  };

  b.readFieldsCons = function (z) {
    return function (Y) {
      return function (ma) {
        return function (za) {
          return function (Da) {
            return new Q(function (Ba) {
              return function (x) {
                var fa = (0, ma.getFields)(O.RLProxy.value)(x),
                    ja = E.reflectSymbol(z)(E.SProxy.value),
                    S = k.withExcept(e.map(t.functorNonEmptyList)(G.ErrorAtProperty.create(ja)));
                x = m.bind(p.bindExceptT(l.monadIdentity))(S(m.bindFlipped(p.bindExceptT(l.monadIdentity))(Y.readImpl)(F.readProp(ja)(x))))(function (ia) {
                  return h.pure(p.applicativeExceptT(l.monadIdentity))(J.insert()()(z)(E.SProxy.value)(ia));
                });
                return K(t.semigroupNonEmptyList)(l.applicativeIdentity)(e.map(p.functorExceptT(l.functorIdentity))(u.compose(J.semigroupoidBuilder))(x))(fa);
              };
            });
          };
        };
      };
    };
  };

  b.readFieldsNil = w;
})(PS);

(function (a) {
  a["DataCite.Types.Common"] = a["DataCite.Types.Common"] || {};

  var b = a["DataCite.Types.Common"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Bind"],
      m = a["Control.Monad.Error.Class"],
      q = a["Control.Monad.Except.Trans"],
      k = a["Data.Bounded"],
      p = a["Data.Enum"],
      u = a["Data.Eq"],
      y = a["Data.Functor"],
      c = a["Data.Generic.Rep"],
      g = a["Data.Generic.Rep.Bounded"],
      e = a["Data.Generic.Rep.Enum"],
      l = a["Data.Generic.Rep.Eq"],
      t = a["Data.Generic.Rep.Ord"],
      v = a["Data.Generic.Rep.Show"],
      D = a["Data.Identity"],
      E = a["Data.List.Types"],
      B = a["Data.Ord"],
      r = a["Data.Show"],
      C = a["Data.Symbol"],
      H = a.Foreign,
      G = a["Simple.JSON"],
      F = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      J = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      O = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Q = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      V = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      M = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      L = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      w = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      R = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      I = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      K = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      z = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Y = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ma = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      za = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Da = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ba = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      x = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      fa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ja = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      S = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ia = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ia = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      sa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ta = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      wa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ya = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ga = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      da = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ka = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ca = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      P = function () {
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
      W = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ja = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Oa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      N = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      va = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ra = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Aa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ba = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ea = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ha = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      A = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      la = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ua = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ma = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Fa = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Na = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      Ra = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      fb = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      gb = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      lb = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      ib = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      jb = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      mb = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      hb = function hb(n) {
    this.enumReadForeignImpl = n;
  },
      Ua = new c.Generic(function (n) {
    if (n instanceof F) return new c.Inl(c.NoArguments.value);
    if (n instanceof J) return new c.Inr(new c.Inl(c.NoArguments.value));
    if (n instanceof O) return new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)));
    if (n instanceof Q) return new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))));
    if (n instanceof V) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))));
    if (n instanceof M) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))));
    if (n instanceof L) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))));
    if (n instanceof w) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))));
    if (n instanceof R) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))));
    if (n instanceof I) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))));
    if (n instanceof K) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))));
    if (n instanceof z) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))));
    if (n instanceof Y) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))));
    if (n instanceof ma) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(c.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [n.constructor.name]);
  }, function (n) {
    if (n instanceof c.Inl) return F.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inl) return J.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inl) return O.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inl) return Q.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inl) return V.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inl) return M.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return L.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return w.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return R.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return I.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return K.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return z.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Y.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr) return ma.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [n.constructor.name]);
  }),
      nb = new r.Show(v.genericShow(Ua)(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Audiovisual";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Dataset";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Event";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Image";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "InteractiveResource";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Model";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "PhysicalObject";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "ResourceCollection";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Service";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Software";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Sound";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Text";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Workflow";
  })))(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      Za = new c.Generic(function (n) {
    if (n instanceof za) return new c.Inl(c.NoArguments.value);
    if (n instanceof Da) return new c.Inr(new c.Inl(c.NoArguments.value));
    if (n instanceof Ba) return new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)));
    if (n instanceof x) return new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))));
    if (n instanceof fa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))));
    if (n instanceof ja) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))));
    if (n instanceof S) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))));
    if (n instanceof ia) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))));
    if (n instanceof Ia) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))));
    if (n instanceof sa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))));
    if (n instanceof ta) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))));
    if (n instanceof wa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))));
    if (n instanceof ya) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))));
    if (n instanceof Ga) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))));
    if (n instanceof da) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))));
    if (n instanceof ka) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))));
    if (n instanceof ca) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))));
    if (n instanceof P) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))))));
    if (n instanceof Z) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))))));
    if (n instanceof xa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))))))));
    if (n instanceof W) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))))))));
    if (n instanceof Ja) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))))))))));
    if (n instanceof Oa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))))))))));
    if (n instanceof N) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))))))))))));
    if (n instanceof va) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(c.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [n.constructor.name]);
  }, function (n) {
    if (n instanceof c.Inl) return za.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inl) return Da.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inl) return Ba.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inl) return x.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inl) return fa.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inl) return ja.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return S.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ia.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ia.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return sa.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ta.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return wa.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ya.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ga.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return da.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ka.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ca.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return P.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Z.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return xa.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return W.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ja.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Oa.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return N.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr) return va.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [n.constructor.name]);
  }),
      bb = new r.Show(v.genericShow(Za)(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsCitedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Cites";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsSupplementTo";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsContinuedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Continues";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsPartOf";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "HasPart";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsReferencedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "References";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Documents";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsCompiledBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Compiles";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "HasMetadata";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsMetadataFor";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Reviews";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsReviewedBy";
  })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      Ta = new c.Generic(function (n) {
    if (n instanceof ra) return new c.Inl(c.NoArguments.value);
    if (n instanceof Aa) return new c.Inr(new c.Inl(c.NoArguments.value));
    if (n instanceof ba) return new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)));
    if (n instanceof ea) return new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))));
    if (n instanceof ha) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))));
    if (n instanceof A) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))));
    if (n instanceof la) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))));
    if (n instanceof ua) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))));
    if (n instanceof Ma) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))));
    if (n instanceof Fa) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))));
    if (n instanceof Na) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))));
    if (n instanceof Ra) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))));
    if (n instanceof fb) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))));
    if (n instanceof gb) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))));
    if (n instanceof lb) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))));
    if (n instanceof ib) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value))))))))))))))));
    if (n instanceof jb) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inl(c.NoArguments.value)))))))))))))))));
    if (n instanceof mb) return new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(new c.Inr(c.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [n.constructor.name]);
  }, function (n) {
    if (n instanceof c.Inl) return ra.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inl) return Aa.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inl) return ba.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inl) return ea.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inl) return ha.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inl) return A.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return la.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ua.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ma.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Fa.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Na.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return Ra.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return fb.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return gb.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return lb.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return ib.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inl) return jb.value;
    if (n instanceof c.Inr && n.value0 instanceof c.Inr && n.value0.value0 instanceof c.Inr && n.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr && n.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof c.Inr) return mb.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [n.constructor.name]);
  }),
      zb = new r.Show(function (n) {
    return n instanceof Aa ? "arXiv" : n instanceof ba ? "bibcode" : v.genericShow(Ta)(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "ARK";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "ArXiv";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "Bibcode";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "DOI";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "EAN13";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "EISSN";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "Handle";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "IGSN";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "ISBN";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "ISSN";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "ISTC";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "LISSN";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "LSID";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "PMID";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "PURL";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "UPC";
    })))(v.genericShowSum(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "URL";
    })))(v.genericShowConstructor(v.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(n);
  }),
      Ab = new u.Eq(l.genericEq(Ua)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))),
      sb = new B.Ord(function () {
    return Ab;
  }, function (n) {
    return function ($a) {
      return t.genericCompare(Ua)(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdConstructor(t.genericOrdNoArguments)))))))))))))))(n)($a);
    };
  }),
      Bb = new u.Eq(l.genericEq(Za)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments))))))))))))))))))))))))))),
      tb = new B.Ord(function () {
    return Bb;
  }, function (n) {
    return function ($a) {
      return t.genericCompare(Za)(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdConstructor(t.genericOrdNoArguments))))))))))))))))))))))))))(n)($a);
    };
  }),
      Cb = new u.Eq(l.genericEq(Ta)(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqSum(l.genericEqConstructor(l.genericEqNoArguments))(l.genericEqConstructor(l.genericEqNoArguments)))))))))))))))))))),
      Xa = new B.Ord(function () {
    return Cb;
  }, function (n) {
    return function ($a) {
      return t.genericCompare(Ta)(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdSum(t.genericOrdConstructor(t.genericOrdNoArguments))(t.genericOrdConstructor(t.genericOrdNoArguments)))))))))))))))))))(n)($a);
    };
  }),
      ub = new p.Enum(function () {
    return sb;
  }, e.genericPred(Ua)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments)))), e.genericSucc(Ua)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))),
      Db = new p.Enum(function () {
    return tb;
  }, e.genericPred(Za)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments)))), e.genericSucc(Za)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))),
      La = function La(n) {
    return function ($a) {
      return new hb(function (kb) {
        return d.alt(q.altExceptT(E.semigroupNonEmptyList)(D.monadIdentity))(y.map(q.functorExceptT(D.functorIdentity))(c.Inl.create)((0, n.enumReadForeignImpl)(kb)))(y.map(q.functorExceptT(D.functorIdentity))(c.Inr.create)((0, $a.enumReadForeignImpl)(kb)));
      });
    };
  },
      pb = function pb(n) {
    return function ($a) {
      return function (kb) {
        return y.map(q.functorExceptT(D.functorIdentity))(c.to(n))((0, $a.enumReadForeignImpl)(kb));
      };
    };
  },
      vb = new p.Enum(function () {
    return Xa;
  }, e.genericPred(Ta)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments)))), e.genericSucc(Ta)(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumSum(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericTopConstructor(g.genericTopNoArguments))(e.genericEnumConstructor(e.genericEnumNoArguments))(g.genericBottomConstructor(g.genericBottomNoArguments)))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))))),
      Ha = function Ha(n) {
    return new hb(function ($a) {
      var kb = C.reflectSymbol(n)(C.SProxy.value);
      return f.bind(q.bindExceptT(D.monadIdentity))(G.readImpl(G.readString)($a))(function (Jb) {
        return Jb === kb ? h.pure(q.applicativeExceptT(D.monadIdentity))(c.NoArguments.value) : m.throwError(q.monadThrowExceptT(D.monadIdentity))(h.pure(E.applicativeNonEmptyList)(H.ForeignError.create("Enum string " + (Jb + (" did not match expected string " + kb)))));
      });
    });
  },
      ob = new G.ReadForeign(pb(Ta)(La(Ha(new C.IsSymbol(function () {
    return "ARK";
  })))(La(Ha(new C.IsSymbol(function () {
    return "ArXiv";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Bibcode";
  })))(La(Ha(new C.IsSymbol(function () {
    return "DOI";
  })))(La(Ha(new C.IsSymbol(function () {
    return "EAN13";
  })))(La(Ha(new C.IsSymbol(function () {
    return "EISSN";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Handle";
  })))(La(Ha(new C.IsSymbol(function () {
    return "IGSN";
  })))(La(Ha(new C.IsSymbol(function () {
    return "ISBN";
  })))(La(Ha(new C.IsSymbol(function () {
    return "ISSN";
  })))(La(Ha(new C.IsSymbol(function () {
    return "ISTC";
  })))(La(Ha(new C.IsSymbol(function () {
    return "LISSN";
  })))(La(Ha(new C.IsSymbol(function () {
    return "LSID";
  })))(La(Ha(new C.IsSymbol(function () {
    return "PMID";
  })))(La(Ha(new C.IsSymbol(function () {
    return "PURL";
  })))(La(Ha(new C.IsSymbol(function () {
    return "UPC";
  })))(La(Ha(new C.IsSymbol(function () {
    return "URL";
  })))(Ha(new C.IsSymbol(function () {
    return "URN";
  }))))))))))))))))))))),
      Eb = new G.ReadForeign(pb(Ua)(La(Ha(new C.IsSymbol(function () {
    return "Audiovisual";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Dataset";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Event";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Image";
  })))(La(Ha(new C.IsSymbol(function () {
    return "InteractiveResource";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Model";
  })))(La(Ha(new C.IsSymbol(function () {
    return "PhysicalObject";
  })))(La(Ha(new C.IsSymbol(function () {
    return "ResourceCollection";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Service";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Software";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Sound";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Text";
  })))(La(Ha(new C.IsSymbol(function () {
    return "Workflow";
  })))(Ha(new C.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      wb = new k.Bounded(function () {
    return sb;
  }, g.genericBottom(Ua)(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))), g.genericTop(Ua)(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopConstructor(g.genericTopNoArguments)))))))))))))))),
      Fb = new k.Bounded(function () {
    return tb;
  }, g.genericBottom(Za)(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))), g.genericTop(Za)(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopConstructor(g.genericTopNoArguments))))))))))))))))))))))))))),
      qb = new k.Bounded(function () {
    return Xa;
  }, g.genericBottom(Ta)(g.genericBottomSum(g.genericBottomConstructor(g.genericBottomNoArguments))), g.genericTop(Ta)(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopSum(g.genericTopConstructor(g.genericTopNoArguments)))))))))))))))))))),
      Gb = new p.BoundedEnum(function () {
    return wb;
  }, function () {
    return ub;
  }, e.genericCardinality(Ua)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))), e.genericFromEnum(Ua)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))), e.genericToEnum(Ua)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments)))))))))))))))),
      Hb = new p.BoundedEnum(function () {
    return Fb;
  }, function () {
    return Db;
  }, e.genericCardinality(Za)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments)))))))))))))))))))))))))), e.genericFromEnum(Za)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments)))))))))))))))))))))))))), e.genericToEnum(Za)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Ib = new p.BoundedEnum(function () {
    return qb;
  }, function () {
    return vb;
  }, e.genericCardinality(Ta)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))), e.genericFromEnum(Ta)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))), e.genericToEnum(Ta)(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumSum(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))(e.genericBoundedEnumConstructor(e.genericBoundedEnumNoArguments))))))))))))))))))));

  b.ARK = ra;
  b.ArXiv = Aa;
  b.Bibcode = ba;
  b.DOI = ea;
  b.EAN13 = ha;
  b.EISSN = A;
  b.Handle = la;
  b.IGSN = ua;
  b.ISBN = Ma;
  b.ISSN = Fa;
  b.ISTC = Na;
  b.LISSN = Ra;
  b.LSID = fb;
  b.PMID = gb;
  b.PURL = lb;
  b.UPC = ib;
  b.URL = jb;
  b.URN = mb;
  b.IsCitedBy = za;
  b.Cites = Da;
  b.IsSupplementTo = Ba;
  b.IsSupplementedBy = x;
  b.IsContinuedBy = fa;
  b.Continues = ja;
  b.IsNewVersionOf = S;
  b.IsPreviousVersionOf = ia;
  b.IsPartOf = Ia;
  b.HasPart = sa;
  b.IsReferencedBy = ta;
  b.References = wa;
  b.IsDocumentedBy = ya;
  b.Documents = Ga;
  b.IsCompiledBy = da;
  b.Compiles = ka;
  b.IsVariantFormOf = ca;
  b.IsOriginalFormOf = P;
  b.IsIdenticalTo = Z;
  b.HasMetadata = xa;
  b.IsMetadataFor = W;
  b.Reviews = Ja;
  b.IsReviewedBy = Oa;
  b.IsDerivedFrom = N;
  b.IsSourceOf = va;
  b.Audiovisual = F;
  b.Dataset = J;
  b.Event = O;
  b.Image = Q;
  b.InteractiveResource = V;
  b.Model = M;
  b.PhysicalObject = L;
  b.ResourceCollection = w;
  b.Service = R;
  b.Software = I;
  b.Sound = K;
  b.Text = z;
  b.Workflow = Y;
  b.Other = ma;

  b.altIdToId = function (n) {
    return {
      identifier: n.alternateIdentifier,
      identifierType: n.alternateIdentifierType
    };
  };

  b.showIdentifierType = zb;
  b.boundedEnumIdentifierType = Ib;
  b.identifierTypeReadForeign = ob;
  b.showRelationType = bb;
  b.boundedEnumRelationType = Hb;
  b.showResourceTypeGeneral = nb;
  b.boundedEnumResourceTypeGeneral = Gb;
  b.resourceTypeGeneralReadForeign = Eb;
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
      h = a["Control.Bind"],
      f = a["Control.Monad"],
      m = a["Control.Monad.Error.Class"],
      q = a["Control.Monad.Except"],
      k = a["Control.Monad.Except.Trans"],
      p = a["Control.Monad.Writer"],
      u = a["Control.Monad.Writer.Class"],
      y = a["Control.Monad.Writer.Trans"],
      c = a["Control.Plus"],
      g = a["Data.Array.NonEmpty"],
      e = a["Data.Array.NonEmpty.Internal"],
      l = a["Data.Either"],
      t = a["Data.Either.Extra"],
      v = a["Data.Foldable"],
      D = a["Data.Functor"],
      E = a["Data.Identity"],
      B = a["Data.Lazy"],
      r = a["Data.List.NonEmpty"],
      C = a["Data.List.Types"],
      H = a["Data.Maybe"],
      G = a["Data.Monoid"],
      F = a["Data.Natural"],
      J = a["Data.Newtype"],
      O = a["Data.String.NonEmpty.Internal"],
      Q = a["Data.Symbol"],
      V = a["Data.Traversable"],
      M = a["Data.Tuple"],
      L = a["Data.Unfoldable"],
      w = a["DataCite.JSON.Util"],
      R = a["DataCite.Types.Common"],
      I = a.Foreign,
      K = a["Foreign.Index"],
      z = a["Simple.JSON"];
  a = a["Type.Data.Row"];

  var Y = new J.Newtype(function (ba) {
    return ba;
  }, function (ba) {
    return ba;
  }),
      ma = new J.Newtype(function (ba) {
    return ba;
  }, function (ba) {
    return ba;
  }),
      za = y.monadTellWriterT(G.monoidArray)(E.monadIdentity),
      Da = y.monadWriterT(G.monoidArray)(E.monadIdentity),
      Ba = k.monadThrowExceptT(Da),
      x = k.monadTellExceptT(za),
      fa = k.bindExceptT(Da),
      ja = k.applicativeExceptT(Da),
      S = function S(ba) {
    return function (ea) {
      var ha = p.runWriter(J.unwrap(Y)(k.runExceptT(J.unwrap(ma)(ea))));
      if (ha.value0 instanceof l.Left) return h.discard(h.discardUnit)(fa)(u.tell(x)(r.toUnfoldable(L.unfoldableArray)(ha.value0.value0)))(function () {
        return d.pure(ja)(ba);
      });
      if (ha.value0 instanceof l.Right) return ea;
      throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 71, column 28 - line 75, column 24): " + [ha.value0.constructor.name]);
    };
  },
      ia = function ia(ba) {
    return I.isNull(ba) || I.isUndefined(ba);
  },
      Ia = function Ia(ba) {
    var ea = d.pure(ba.Applicative0()),
        ha = J.unwrap(E.newtypeIdentity);
    return function (A) {
      return ea(ha(A));
    };
  },
      sa = function sa(ba) {
    var ea = Ia(ba),
        ha = J.unwrap(k.newtypeExceptT);
    return function (A) {
      return k.ExceptT(ea(ha(A)));
    };
  },
      ta = function ta(ba) {
    var ea = sa(Da),
        ha = z["read'"](ba);
    return function (A) {
      return ea(ha(A));
    };
  },
      wa = function wa(ba) {
    return S("")(ta(z.readString)(ba));
  },
      ya = function ya(ba) {
    return function (ea) {
      return h.bind(fa)(wa(ea))(function (ha) {
        ha = O.fromString(ha);
        if (ha instanceof H.Just) return d.pure(ja)(ha.value0);
        if (ha instanceof H.Nothing) return m.throwError(Ba)(d.pure(C.applicativeNonEmptyList)(I.ForeignError.create("Nonempty string expected in:\n" + B.force(ba))));
        throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 212, column 3 - line 215, column 55): " + [ha.constructor.name]);
      });
    };
  },
      Ga = function Ga(ba) {
    return function (ea) {
      return h.bind(fa)(ya(ba)(ea.alternateIdentifier))(function (ha) {
        var A = ta(R.identifierTypeReadForeign)(ea.alternateIdentifierType);
        return h.bind(fa)(S(R.Handle.value)(A))(function (la) {
          return d.pure(ja)(R.altIdToId({
            alternateIdentifier: ha,
            alternateIdentifierType: la
          }));
        });
      });
    };
  },
      da = function da(ba) {
    return function (ea) {
      return function (ha) {
        return Ga(ea)(ha);
      };
    };
  },
      ka = function ka(ba) {
    return function (ea) {
      return h.bind(fa)(ya(ba)(ea.identifier))(function (ha) {
        var A = ta(R.identifierTypeReadForeign)(ea.identifierType);
        return h.bind(fa)(S(R.Handle.value)(A))(function (la) {
          return d.pure(ja)({
            identifier: ha,
            identifierType: la
          });
        });
      });
    };
  },
      ca = function ca(ba) {
    return function (ea) {
      return function (ha) {
        return ka(ea)(ha);
      };
    };
  },
      P = function () {
    var ba = sa(Da);
    return function (ea) {
      return ba(I.readArray(ea));
    };
  }(),
      Z = function Z(ba) {
    return function (ea) {
      return function (ha) {
        return h.bind(fa)(P(ha))(function (A) {
          A = D.map(D.functorArray)(function () {
            var Ma = J.unwrap(Y),
                Fa = J.unwrap(ma),
                Na = ea(ba);
            return function (Ra) {
              return p.runWriter(Ma(k.runExceptT(Fa(Na(Ra)))));
            };
          }())(A);
          var la = D.map(D.functorArray)(M.fst)(A),
              ua = D.map(D.functorArray)(M.snd)(A);
          return h.discard(h.discardUnit)(fa)(v.traverse_(ja)(v.foldableArray)(u.tell(x))(D.map(D.functorArray)(r.toUnfoldable(L.unfoldableArray))(t.catLefts(f.monadArray)(c.plusArray)(la))))(function () {
            return h.discard(h.discardUnit)(fa)(v.traverse_(ja)(v.foldableArray)(u.tell(x))(ua))(function () {
              return d.pure(ja)(t.catRights(f.monadArray)(c.plusArray)(la));
            });
          });
        });
      };
    };
  },
      xa = function xa(ba) {
    return function (ea) {
      return function (ha) {
        return h.bind(fa)(Z(ba)(ea)(ha))(function (A) {
          A = g.fromArray(A);
          if (A instanceof H.Just) return d.pure(ja)(A.value0);
          if (A instanceof H.Nothing) return m.throwError(Ba)(d.pure(C.applicativeNonEmptyList)(I.ForeignError.create("Nonempty array expected in:\n" + B.force(ba))));
          throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 250, column 3 - line 253, column 54): " + [A.constructor.name]);
        });
      };
    };
  },
      W = function W(ba) {
    return function (ea) {
      return function (ha) {
        return h.bind(fa)(P(ha))(function (A) {
          var la = D.map(D.functorArray)(function () {
            var ua = z["read'"](ba);
            return function (Ma) {
              return q.runExcept(ua(Ma));
            };
          }())(A);
          return h.discard(h.discardUnit)(fa)(v.traverse_(ja)(v.foldableArray)(u.tell(x))(D.map(D.functorArray)(r.toUnfoldable(L.unfoldableArray))(t.catLefts(f.monadArray)(c.plusArray)(la))))(function () {
            var ua = t.catRights(f.monadArray)(c.plusArray)(la);
            ua = g.fromArray(ua);
            if (ua instanceof H.Just) return d.pure(ja)(ua.value0);
            if (ua instanceof H.Nothing) return m.throwError(Ba)(d.pure(C.applicativeNonEmptyList)(I.ForeignError.create("Nonempty array expected in:\n" + B.force(ea))));
            throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 224, column 3 - line 227, column 54): " + [ua.constructor.name]);
          });
        });
      };
    };
  },
      Ja = function Ja(ba) {
    var ea = sa(Da),
        ha = z["readJSON'"](ba);
    return function (A) {
      return ea(ha(A));
    };
  },
      Oa = function Oa(ba) {
    return function (ea) {
      return sa(Da)(K.readProp(ba)(ea));
    };
  },
      N = function N(ba) {
    return function (ea) {
      return h.bind(fa)(Oa("title")(ea))(function (ha) {
        return h.bind(fa)(ya(ba)(ha))(function (A) {
          return d.pure(ja)({
            title: A
          });
        });
      });
    };
  },
      va = a.RProxy.value,
      ra = function ra(ba) {
    return function (ea) {
      return B.defer(function (ha) {
        return "Couldn't read for " + (ea + (" in: \n" + B.force(ba)));
      });
    };
  },
      Aa = function Aa(ba) {
    var ea = w.tryPrettyJson(ba),
        ha = ra(ea),
        A = function A(ua) {
      return ia(ua.type) && ia(ua.identifier) && ia(ua.identifierType) ? d.pure(ja)(H.Nothing.value) : h.bind(fa)(ta(z.readString)(ua.type))(function (Ma) {
        var Fa = O.fromString(Ma);
        return h.bind(fa)(ka(ha("container"))(ua))(function (Na) {
          return d.pure(ja)(H.Just.create({
            type: Fa,
            identifier: Na.identifier,
            identifierType: Na.identifierType
          }));
        });
      });
    },
        la = function la(ua) {
      return V.traverse(e.traversableNonEmptyArray)(ja)(function (Ma) {
        return h.bind(fa)(ya(ha("Creator name"))(Ma.name))(function (Fa) {
          return h.bind(fa)(V.traverse(V.traversableArray)(ja)(ya(ha("Creator affiliations")))(Ma.affiliation))(function (Na) {
            return d.pure(ja)({
              name: Fa,
              nameType: h.bind(H.bindMaybe)(Ma.nameType)(O.fromString),
              givenName: h.bind(H.bindMaybe)(Ma.givenName)(O.fromString),
              familyName: h.bind(H.bindMaybe)(Ma.familyName)(O.fromString),
              affiliation: Na
            });
          });
        });
      })(ua);
    };

    return h.bind(fa)(Ja(z.readRecord()(z.readFieldsCons(new Q.IsSymbol(function () {
      return "data";
    }))(z.readRecord()(z.readFieldsCons(new Q.IsSymbol(function () {
      return "attributes";
    }))(z.readRecord()(z.readFieldsCons(new Q.IsSymbol(function () {
      return "alternateIdentifiers";
    }))(z.readArray(z.readRecord()(z.readFieldsCons(new Q.IsSymbol(function () {
      return "alternateIdentifier";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "alternateIdentifierType";
    }))(z.readForeign)(z.readFieldsNil)()())()())))(z.readFieldsCons(new Q.IsSymbol(function () {
      return "container";
    }))(z.readRecord()(z.readFieldsCons(new Q.IsSymbol(function () {
      return "identifier";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "identifierType";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "type";
    }))(z.readForeign)(z.readFieldsNil)()())()())()()))(z.readFieldsCons(new Q.IsSymbol(function () {
      return "creators";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "descriptions";
    }))(z.readArray(z.readRecord()(z.readFieldsCons(new Q.IsSymbol(function () {
      return "description";
    }))(z.readString)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "descriptionType";
    }))(z.readString)(z.readFieldsNil)()())()())))(z.readFieldsCons(new Q.IsSymbol(function () {
      return "doi";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "formats";
    }))(z.readArray(z.readForeign))(z.readFieldsCons(new Q.IsSymbol(function () {
      return "identifiers";
    }))(z.readArray(z.readRecord()(z.readFieldsCons(new Q.IsSymbol(function () {
      return "identifier";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "identifierType";
    }))(z.readForeign)(z.readFieldsNil)()())()())))(z.readFieldsCons(new Q.IsSymbol(function () {
      return "prefix";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "publicationYear";
    }))(z.readInt)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "publisher";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "suffix";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "titles";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "types";
    }))(z.readRecord()(z.readFieldsCons(new Q.IsSymbol(function () {
      return "resourceTypeGeneral";
    }))(R.resourceTypeGeneralReadForeign)(z.readFieldsNil)()()))(z.readFieldsCons(new Q.IsSymbol(function () {
      return "version";
    }))(z.readMaybe(z.readString))(z.readFieldsNil)()())()())()())()())()())()())()())()())()())()())()())()())()())()()))(z.readFieldsCons(new Q.IsSymbol(function () {
      return "id";
    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
      return "relationships";
    }))(z.readRecord()(z.readFieldsNil))(z.readFieldsCons(new Q.IsSymbol(function () {
      return "type";
    }))(z.readForeign)(z.readFieldsNil)()())()())()())()()))(z.readFieldsNil)()()))(ba))(function (ua) {
      return h.bind(fa)(ya(ha("data.id"))(ua.data.id))(function (Ma) {
        return h.bind(fa)(ya(ha("data.type"))(ua.data.type))(function (Fa) {
          return h.bind(fa)(ya(ha("data.attributes.doi"))(ua.data.attributes.doi))(function (Na) {
            return h.bind(fa)(ya(ha("data.attributes.prefix"))(ua.data.attributes.prefix))(function (Ra) {
              return h.bind(fa)(ya(ha("data.attributes.suffix"))(ua.data.attributes.suffix))(function (fb) {
                return h.bind(fa)(V.traverse(V.traversableArray)(ja)(ca(va)(ha("data.attributes.identifiers")))(ua.data.attributes.identifiers))(function (gb) {
                  return h.bind(fa)(V.traverse(V.traversableArray)(ja)(da(va)(ha("data.attributes.alternateIdentifiers")))(ua.data.attributes.alternateIdentifiers))(function (lb) {
                    return h.bind(fa)(W(z.readRecord()(z.readFieldsCons(new Q.IsSymbol(function () {
                      return "affiliation";
                    }))(z.readArray(z.readForeign))(z.readFieldsCons(new Q.IsSymbol(function () {
                      return "familyName";
                    }))(z.readMaybe(z.readString))(z.readFieldsCons(new Q.IsSymbol(function () {
                      return "givenName";
                    }))(z.readMaybe(z.readString))(z.readFieldsCons(new Q.IsSymbol(function () {
                      return "name";
                    }))(z.readForeign)(z.readFieldsCons(new Q.IsSymbol(function () {
                      return "nameType";
                    }))(z.readMaybe(z.readString))(z.readFieldsNil)()())()())()())()())()()))(ha("data.attributes.creators"))(ua.data.attributes.creators))(function (ib) {
                      return h.bind(fa)(la(ib))(function (jb) {
                        return h.bind(fa)(xa(ha("data.attributes.titles"))(N)(ua.data.attributes.titles))(function (mb) {
                          return h.bind(fa)(ya(ha("data.attributes.publisher"))(ua.data.attributes.publisher))(function (hb) {
                            return h.bind(fa)(A(ua.data.attributes.container))(function (Ua) {
                              return h.bind(fa)(V.traverse(V.traversableArray)(ja)(ya(ha("Formats")))(ua.data.attributes.formats))(function (nb) {
                                return d.pure(ja)({
                                  data: {
                                    id: Ma,
                                    type: Fa,
                                    attributes: {
                                      doi: Na,
                                      prefix: Ra,
                                      suffix: fb,
                                      identifiers: gb,
                                      alternateIdentifiers: lb,
                                      creators: jb,
                                      titles: mb,
                                      publisher: hb,
                                      container: Ua,
                                      publicationYear: F.intToNat(ua.data.attributes.publicationYear),
                                      formats: nb,
                                      descriptions: ua.data.attributes.descriptions,
                                      types: ua.data.attributes.types,
                                      version: ua.data.attributes.version
                                    },
                                    relationships: ua.data.relationships
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

  b.readRecordJSON = function (ba) {
    return k.runExceptT(J.unwrap(ma)(Aa(w.preParse(ba))));
  };

  b.newtypeJSONWithErr = Y;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var b = a["Effect.Class"],
      d = a["Effect.Console"];

  a["Effect.Class.Console"].log = function (h) {
    var f = b.liftEffect(h);
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
  var b = a["Effect.Now"],
      d = a["Effect.Now"],
      h = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(h.toDateTime)(d.now);
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
      h = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (f) {
    return b.classList(d.map(d.functorArray)(h.Just.create)(f));
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
  var b = a["Metajelo.CSS.UI.Util"],
      d = a["Concur.React.Props"];
  b.mjUiClassPfx = "metajelo-ui_";

  b.mjUiClass = function (h) {
    return d.className("metajelo-ui_" + h);
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassProps"] = a["Metajelo.CSS.UI.ClassProps"] || {};
  var b = a["Metajelo.CSS.UI.ClassProps"],
      d = a["Metajelo.CSS.Common.ClassNames"],
      h = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      f = a["Metajelo.CSS.UI.Util"],
      m = f.mjUiClass(d.versioningHeader),
      q = f.mjUiClass(d.versioning),
      k = f.mjUiClass(d.url),
      p = f.mjUiClass(h.uploadDescr),
      u = f.mjUiClass(d.titleList),
      y = f.mjUiClass(d.titleHeader),
      c = f.mjUiClass(d.title),
      g = f.mjUiClass(d.sustainabilityHeader),
      e = f.mjUiClass(d.sustainability),
      l = f.mjUiClass(d.superOrgHeader),
      t = f.mjUiClass(d.superOrg),
      v = f.mjUiClass(h.sideBarTab),
      D = f.mjUiClass(h.sideBar),
      E = f.mjUiClass(h.sideBarMenu),
      B = f.mjUiClass(h.sideBarGrid),
      r = f.mjUiClass(h.sideBarCol),
      C = f.mjUiClass(h.sideBar),
      H = f.mjUiClass(d.resourceTypeHeader),
      G = f.mjUiClass(d.resourceTypeGenHeader),
      F = f.mjUiClass(d.resourceTypeGen),
      J = f.mjUiClass(d.resourceTypeDescrHeader),
      O = f.mjUiClass(d.resourceTypeDescr),
      Q = f.mjUiClass(d.resourceType),
      V = f.mjUiClass(d.resourceMDSourceHeader),
      M = f.mjUiClass(d.resourceMDSource),
      L = f.mjUiClass(d.resourceIdHeader),
      w = f.mjUiClass(d.resourceId),
      R = f.mjUiClass(h.reloadDescr),
      I = f.mjUiClass(d.relatedIdsHeader),
      K = f.mjUiClass(d.relatedIds),
      z = f.mjUiClass(d.relatedIdList),
      Y = f.mjUiClass(d.relatedIdHeader),
      ma = f.mjUiClass(d.relatedId),
      za = f.mjUiClass(d.relTypeHeader),
      Da = f.mjUiClass(d.relType),
      Ba = f.mjUiClass(d.recordHeader),
      x = f.mjUiClass(d.record),
      fa = f.mjUiClass(h.recPreviewHeader),
      ja = f.mjUiClass(h.recPreview),
      S = f.mjUiClass(h.recFlexBox),
      ia = f.mjUiClass(h.recEditor),
      Ia = f.mjUiClass(d.pubyearHeader),
      sa = f.mjUiClass(d.pubyear),
      ta = f.mjUiClass(d.productsHeader),
      wa = f.mjUiClass(d.products),
      ya = f.mjUiClass(d.productList),
      Ga = f.mjUiClass(d.productHeader),
      da = f.mjUiClass(d.product),
      ka = f.mjUiClass(h.prodPreviewHeader),
      ca = f.mjUiClass(h.prodPreview),
      P = f.mjUiClass(h.previewButtons),
      Z = f.mjUiClass(d.policyTypeHeader),
      xa = f.mjUiClass(d.policyType),
      W = f.mjUiClass(d.policyHeader),
      Ja = f.mjUiClass(d.policy),
      Oa = f.mjUiClass(h.page),
      N = f.mjUiClass(d.missionStatementHeader),
      va = f.mjUiClass(d.missionStatement),
      ra = f.mjUiClass(d.locationHeader),
      Aa = f.mjUiClass(d.location),
      ba = f.mjUiClass(h.locPreviewHeader),
      ea = f.mjUiClass(h.locPreview),
      ha = f.mjUiClass(d.institutionTypeHeader),
      A = f.mjUiClass(d.institutionType),
      la = f.mjUiClass(d.institutionPolicyHeader),
      ua = f.mjUiClass(d.institutionPolicy),
      Ma = f.mjUiClass(d.institutionPoliciesHeader),
      Fa = f.mjUiClass(d.institutionPolicies),
      Na = f.mjUiClass(d.institutionNameHeader),
      Ra = f.mjUiClass(d.institutionName),
      fb = f.mjUiClass(d.institutionId),
      gb = f.mjUiClass(d.institutionContactHeader),
      lb = f.mjUiClass(d.institutionContact),
      ib = f.mjUiClass(d.identifier),
      jb = f.mjUiClass(d.idTypeHeader),
      mb = f.mjUiClass(d.idType),
      hb = f.mjUiClass(d.idHeader),
      Ua = f.mjUiClass(d.id),
      nb = f.mjUiClass(d.fundingStatementHeader),
      Za = f.mjUiClass(d.fundingStatement),
      bb = f.mjUiClass(d.formatListHeader),
      Ta = f.mjUiClass(d.formatList),
      zb = f.mjUiClass(d.formatHeader),
      Ab = f.mjUiClass(d.format),
      sb = f.mjUiClass(h.downloadBtn),
      Bb = f.mjUiClass(h.deleteItem),
      tb = f.mjUiClass(h.dateHeader),
      Cb = f.mjUiClass(h.date),
      Xa = f.mjUiClass(h.dataCiteNonFatal),
      ub = f.mjUiClass(h.dataCiteFatal),
      Db = f.mjUiClass(d.creatorList),
      La = f.mjUiClass(d.creatorHeader),
      pb = f.mjUiClass(d.creator),
      vb = f.mjUiClass(d.contactTypeHeader),
      Ha = f.mjUiClass(d.contactType),
      ob = f.mjUiClass(d.contactEmailHeader),
      Eb = f.mjUiClass(d.contactEmail),
      wb = f.mjUiClass(h.clipBtn),
      Fb = f.mjUiClass(d.basicMetadataHeader),
      qb = f.mjUiClass(d.basicMetadata),
      Gb = f.mjUiClass(d.appliesHeader),
      Hb = f.mjUiClass(d.applies),
      Ib = f.mjUiClass(h.addItem);
  b.page = Oa;
  b.date = Cb;
  b.dateHeader = tb;
  b.recFlexBox = S;
  b.recPreview = ja;
  b.recPreviewHeader = fa;
  b.recEditor = ia;
  b.sideBar = C;
  b.sideBarNav = D;
  b.sideBarTab = v;
  b.sideBarGrid = B;
  b.sideBarMenu = E;
  b.sideBarCol = r;
  b.dataCiteFatal = ub;
  b.dataCiteNonFatal = Xa;
  b.prodPreview = ca;
  b.prodPreviewHeader = ka;
  b.locPreview = ea;
  b.locPreviewHeader = ba;
  b.downloadBtn = sb;
  b.clipBtn = wb;
  b.previewButtons = P;
  b.addItem = Ib;
  b.deleteItem = Bb;
  b.uploadDescr = p;
  b.reloadDescr = R;
  b.record = x;
  b.recordHeader = Ba;
  b.product = da;
  b.productHeader = Ga;
  b.productList = ya;
  b.productsHeader = ta;
  b.products = wa;
  b.location = Aa;
  b.locationHeader = ra;
  b.sustainability = e;
  b.sustainabilityHeader = g;
  b.missionStatement = va;
  b.missionStatementHeader = N;
  b.fundingStatement = Za;
  b.fundingStatementHeader = nb;
  b.identifier = ib;
  b.id = Ua;
  b.idHeader = hb;
  b.idType = mb;
  b.idTypeHeader = jb;
  b.relatedId = ma;
  b.relatedIdHeader = Y;
  b.relType = Da;
  b.relTypeHeader = za;
  b.relatedIdList = z;
  b.relatedIdsHeader = I;
  b.relatedIds = K;
  b.basicMetadata = qb;
  b.basicMetadataHeader = Fb;
  b.creator = pb;
  b.creatorHeader = La;
  b.creatorList = Db;
  b.pubyear = sa;
  b.pubyearHeader = Ia;
  b.title = c;
  b.titleHeader = y;
  b.titleList = u;
  b.resourceId = w;
  b.resourceIdHeader = L;
  b.resourceType = Q;
  b.resourceTypeHeader = H;
  b.resourceTypeGen = F;
  b.resourceTypeGenHeader = G;
  b.resourceTypeDescr = O;
  b.resourceTypeDescrHeader = J;
  b.resourceMDSource = M;
  b.resourceMDSourceHeader = V;
  b.institutionName = Ra;
  b.institutionNameHeader = Na;
  b.institutionId = fb;
  b.institutionType = A;
  b.institutionTypeHeader = ha;
  b.institutionContact = lb;
  b.institutionContactHeader = gb;
  b.contactEmail = Eb;
  b.contactEmailHeader = ob;
  b.contactType = Ha;
  b.contactTypeHeader = vb;
  b.institutionPolicy = ua;
  b.institutionPolicyHeader = la;
  b.institutionPolicies = Fa;
  b.institutionPoliciesHeader = Ma;
  b.policy = Ja;
  b.policyHeader = W;
  b.policyType = xa;
  b.policyTypeHeader = Z;
  b.applies = Hb;
  b.appliesHeader = Gb;
  b.superOrg = t;
  b.superOrgHeader = l;
  b.versioning = q;
  b.versioningHeader = m;
  b.format = Ab;
  b.formatHeader = zb;
  b.formatList = Ta;
  b.formatListHeader = bb;
  b.url = k;
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

  b.mjWebClass = function (q) {
    return d.className("metajelo_" + q);
  };

  b.cList = a;
})(PS);

(function (a) {
  a["Metajelo.CSS.Web.ClassProps"] = a["Metajelo.CSS.Web.ClassProps"] || {};
  var b = a["Metajelo.CSS.Web.ClassProps"],
      d = a["Metajelo.CSS.Common.ClassNames"],
      h = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      f = a["Metajelo.CSS.Web.Util"];
  a = f.mjWebClass(d.versioning);
  f.mjWebClass(d.url);
  var m = f.mjWebClass(d.title),
      q = f.mjWebClass(d.sustainability),
      k = f.mjWebClass(d.superOrg),
      p = f.mjWebClass(d.resourceTypeGen),
      u = f.mjWebClass(d.resourceTypeDescr),
      y = f.mjWebClass(d.resourceType),
      c = f.mjWebClass(d.resourceId),
      g = f.mjWebClass(d.relatedIdsHeader),
      e = f.mjWebClass(d.relatedIdList),
      l = f.mjWebClass(d.relatedId),
      t = f.mjWebClass(d.relType),
      v = f.mjWebClass(d.recordId),
      D = f.mjWebClass(d.record),
      E = f.mjWebClass(d.pubyear),
      B = f.mjWebClass(d.productsHeader),
      r = f.mjWebClass(d.productList),
      C = f.mjWebClass(h.productGroup),
      H = f.mjWebClass(h.productCitation),
      G = f.mjWebClass(d.product),
      F = f.mjWebClass(d.policyType),
      J = f.mjWebClass(d.policy),
      O = f.cList([d.url, d.missionStatement]),
      Q = f.mjWebClass(d.institutionType),
      V = f.mjWebClass(d.institutionPolicy),
      M = f.mjWebClass(d.institutionPolicies),
      L = f.mjWebClass(d.institutionName),
      w = f.mjWebClass(d.institutionId),
      R = f.mjWebClass(d.institutionContact),
      I = f.mjWebClass(d.identifier),
      K = f.cList([d.url, h.idUrl]),
      z = f.mjWebClass(d.idType),
      Y = f.cList([d.url, d.fundingStatement]),
      ma = f.mjWebClass(d.formatList),
      za = f.mjWebClass(d.format),
      Da = f.mjWebClass(h.errorDisplayBox),
      Ba = f.mjWebClass(h.errorDisplay),
      x = f.mjWebClass(d.creatorList),
      fa = f.mjWebClass(d.creator),
      ja = f.mjWebClass(d.contactType),
      S = f.mjWebClass(d.contactEmail);
  d = f.mjWebClass(d.basicMetadata);
  h = f.mjWebClass(h.appliesInfo);
  b.productGroup = C;
  b.productCitation = H;
  b.appliesInfo = h;
  b.idUrl = K;
  b.errorDisplayBox = Da;
  b.errorDisplay = Ba;
  b.record = D;
  b.recordId = v;
  b.product = G;
  b.productList = r;
  b.productsHeader = B;
  b.sustainability = q;
  b.missionStatement = O;
  b.fundingStatement = Y;
  b.identifier = I;
  b.idType = z;
  b.relatedId = l;
  b.relType = t;
  b.relatedIdList = e;
  b.relatedIdsHeader = g;
  b.basicMetadata = d;
  b.creator = fa;
  b.creatorList = x;
  b.pubyear = E;
  b.title = m;
  b.resourceId = c;
  b.resourceType = y;
  b.resourceTypeGen = p;
  b.resourceTypeDescr = u;
  b.institutionName = L;
  b.institutionId = w;
  b.institutionType = Q;
  b.institutionContact = R;
  b.contactEmail = S;
  b.contactType = ja;
  b.institutionPolicy = V;
  b.institutionPolicies = M;
  b.policy = J;
  b.policyType = F;
  b.superOrg = k;
  b.versioning = a;
  b.format = za;
  b.formatList = ma;
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
  b.descrAttrMap = d;
  b.descrCTypMap = h;
  b.descrEleMap = f;
  b.descrSTypMap = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var b = a["Metajelo.Types"],
      d = a["Data.Bounded"],
      h = a["Data.Enum"],
      f = a["Data.Eq"],
      m = a["Data.Generic.Rep"],
      q = a["Data.Generic.Rep.Bounded"],
      k = a["Data.Generic.Rep.Enum"],
      p = a["Data.Generic.Rep.Eq"],
      u = a["Data.Generic.Rep.Ord"],
      y = a["Data.Generic.Rep.Show"],
      c = a["Data.Ord"],
      g = a["Data.Show"],
      e = a["Data.Symbol"],
      l = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      t = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      v = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      D = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      E = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      B = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      r = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      C = function () {
    function S() {}

    S.value = new S();
    return S;
  }();

  a = function () {
    function S(ia) {
      this.value0 = ia;
    }

    S.create = function (ia) {
      return new S(ia);
    };

    return S;
  }();

  var H = function () {
    function S(ia) {
      this.value0 = ia;
    }

    S.create = function (ia) {
      return new S(ia);
    };

    return S;
  }(),
      G = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      F = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      J = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      O = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      Q = new g.Show(function (S) {
    if (S instanceof G) return "commercial";
    if (S instanceof F) return "non-profit";
    if (S instanceof J) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 102, column 1 - line 105, column 37): " + [S.constructor.name]);
  }),
      V = new g.Show(function (S) {
    return "dataCustodian";
  }),
      M = new m.Generic(function (S) {
    if (S instanceof l) return new m.Inl(m.NoArguments.value);
    if (S instanceof t) return new m.Inr(new m.Inl(m.NoArguments.value));
    if (S instanceof v) return new m.Inr(new m.Inr(new m.Inl(m.NoArguments.value)));
    if (S instanceof D) return new m.Inr(new m.Inr(new m.Inr(new m.Inl(m.NoArguments.value))));
    if (S instanceof E) return new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inl(m.NoArguments.value)))));
    if (S instanceof B) return new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inl(m.NoArguments.value))))));
    if (S instanceof r) return new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inl(m.NoArguments.value)))))));
    if (S instanceof C) return new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(new m.Inr(m.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [S.constructor.name]);
  }, function (S) {
    if (S instanceof m.Inl) return l.value;
    if (S instanceof m.Inr && S.value0 instanceof m.Inl) return t.value;
    if (S instanceof m.Inr && S.value0 instanceof m.Inr && S.value0.value0 instanceof m.Inl) return v.value;
    if (S instanceof m.Inr && S.value0 instanceof m.Inr && S.value0.value0 instanceof m.Inr && S.value0.value0.value0 instanceof m.Inl) return D.value;
    if (S instanceof m.Inr && S.value0 instanceof m.Inr && S.value0.value0 instanceof m.Inr && S.value0.value0.value0 instanceof m.Inr && S.value0.value0.value0.value0 instanceof m.Inl) return E.value;
    if (S instanceof m.Inr && S.value0 instanceof m.Inr && S.value0.value0 instanceof m.Inr && S.value0.value0.value0 instanceof m.Inr && S.value0.value0.value0.value0 instanceof m.Inr && S.value0.value0.value0.value0.value0 instanceof m.Inl) return B.value;
    if (S instanceof m.Inr && S.value0 instanceof m.Inr && S.value0.value0 instanceof m.Inr && S.value0.value0.value0 instanceof m.Inr && S.value0.value0.value0.value0 instanceof m.Inr && S.value0.value0.value0.value0.value0 instanceof m.Inr && S.value0.value0.value0.value0.value0.value0 instanceof m.Inl) return r.value;
    if (S instanceof m.Inr && S.value0 instanceof m.Inr && S.value0.value0 instanceof m.Inr && S.value0.value0.value0 instanceof m.Inr && S.value0.value0.value0.value0 instanceof m.Inr && S.value0.value0.value0.value0.value0 instanceof m.Inr && S.value0.value0.value0.value0.value0.value0 instanceof m.Inr) return C.value;
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [S.constructor.name]);
  });

  g = new g.Show(function (S) {
    return S instanceof C ? "Terms of Use" : y.genericShow(M)(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new e.IsSymbol(function () {
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
    }))))))))))(S);
  });
  var L = new m.Generic(function (S) {
    if (S instanceof G) return new m.Inl(m.NoArguments.value);
    if (S instanceof F) return new m.Inr(new m.Inl(m.NoArguments.value));
    if (S instanceof J) return new m.Inr(new m.Inr(m.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [S.constructor.name]);
  }, function (S) {
    if (S instanceof m.Inl) return G.value;
    if (S instanceof m.Inr && S.value0 instanceof m.Inl) return F.value;
    if (S instanceof m.Inr && S.value0 instanceof m.Inr) return J.value;
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [S.constructor.name]);
  }),
      w = new m.Generic(function (S) {
    return m.NoArguments.value;
  }, function (S) {
    return O.value;
  }),
      R = new f.Eq(p.genericEq(M)(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqConstructor(p.genericEqNoArguments)))))))))),
      I = new c.Ord(function () {
    return R;
  }, function (S) {
    return function (ia) {
      return u.genericCompare(M)(u.genericOrdSum(u.genericOrdConstructor(u.genericOrdNoArguments))(u.genericOrdSum(u.genericOrdConstructor(u.genericOrdNoArguments))(u.genericOrdSum(u.genericOrdConstructor(u.genericOrdNoArguments))(u.genericOrdSum(u.genericOrdConstructor(u.genericOrdNoArguments))(u.genericOrdSum(u.genericOrdConstructor(u.genericOrdNoArguments))(u.genericOrdSum(u.genericOrdConstructor(u.genericOrdNoArguments))(u.genericOrdSum(u.genericOrdConstructor(u.genericOrdNoArguments))(u.genericOrdConstructor(u.genericOrdNoArguments)))))))))(S)(ia);
    };
  }),
      K = new f.Eq(p.genericEq(L)(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqSum(p.genericEqConstructor(p.genericEqNoArguments))(p.genericEqConstructor(p.genericEqNoArguments))))),
      z = new c.Ord(function () {
    return K;
  }, function (S) {
    return function (ia) {
      return u.genericCompare(L)(u.genericOrdSum(u.genericOrdConstructor(u.genericOrdNoArguments))(u.genericOrdSum(u.genericOrdConstructor(u.genericOrdNoArguments))(u.genericOrdConstructor(u.genericOrdNoArguments))))(S)(ia);
    };
  }),
      Y = new f.Eq(p.genericEq(w)(p.genericEqConstructor(p.genericEqNoArguments))),
      ma = new c.Ord(function () {
    return Y;
  }, function (S) {
    return function (ia) {
      return u.genericCompare(w)(u.genericOrdConstructor(u.genericOrdNoArguments))(S)(ia);
    };
  }),
      za = new h.Enum(function () {
    return I;
  }, k.genericPred(M)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericBottomConstructor(q.genericBottomNoArguments)))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments)))), k.genericSucc(M)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericBottomConstructor(q.genericBottomNoArguments)))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))),
      Da = new h.Enum(function () {
    return z;
  }, k.genericPred(L)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericBottomConstructor(q.genericBottomNoArguments)))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments)))), k.genericSucc(L)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericTopConstructor(q.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(q.genericBottomConstructor(q.genericBottomNoArguments)))(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))))),
      Ba = new h.Enum(function () {
    return ma;
  }, k.genericPred(w)(k.genericEnumConstructor(k.genericEnumNoArguments)), k.genericSucc(w)(k.genericEnumConstructor(k.genericEnumNoArguments))),
      x = new d.Bounded(function () {
    return I;
  }, q.genericBottom(M)(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))), q.genericTop(M)(q.genericTopSum(q.genericTopSum(q.genericTopSum(q.genericTopSum(q.genericTopSum(q.genericTopSum(q.genericTopSum(q.genericTopConstructor(q.genericTopNoArguments))))))))));
  f = new h.SmallBounded(function () {
    return x;
  });
  var fa = new d.Bounded(function () {
    return z;
  }, q.genericBottom(L)(q.genericBottomSum(q.genericBottomConstructor(q.genericBottomNoArguments))), q.genericTop(L)(q.genericTopSum(q.genericTopSum(q.genericTopConstructor(q.genericTopNoArguments))))),
      ja = new d.Bounded(function () {
    return ma;
  }, q.genericBottom(w)(q.genericBottomConstructor(q.genericBottomNoArguments)), q.genericTop(w)(q.genericTopConstructor(q.genericTopNoArguments)));
  d = new h.SmallBounded(function () {
    return ja;
  });
  q = new h.BoundedEnum(function () {
    return x;
  }, function () {
    return za;
  }, k.genericCardinality(M)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))), k.genericFromEnum(M)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))), k.genericToEnum(M)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))));
  p = new h.BoundedEnum(function () {
    return fa;
  }, function () {
    return Da;
  }, k.genericCardinality(L)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))), k.genericFromEnum(L)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))), k.genericToEnum(L)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))));
  h = new h.BoundedEnum(function () {
    return ja;
  }, function () {
    return Ba;
  }, k.genericCardinality(w)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)), k.genericFromEnum(w)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)), k.genericToEnum(w)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)));
  b.DataCustodian = O;
  b.Commercial = G;
  b.NonProfit = F;
  b.Governmental = J;
  b.FreeTextPolicy = a;
  b.RefPolicy = H;
  b.Access = l;
  b.Collection = t;
  b.Data = v;
  b.Metadata = D;
  b.Preservation = E;
  b.Submission = B;
  b.Quality = r;
  b.TermsOfUse = C;
  b.showInstitutionType = Q;
  b.boundedEnumInstitutionType = p;
  b.showInstitutionContactType = V;
  b.boundedEnumInstitutionContactType = h;
  b.smallBoundedInstitutionContactType = d;
  b.showPolicyType = g;
  b.boundedEnumPolicyType = q;
  b.smallBoundedPolicyType = f;
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (b) {
    return function (d) {
      return function (h) {
        return function () {
          return h.parseFromString(d, b);
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
      return function (h) {
        return function () {
          return h.getElementsByTagNameNS(b, d);
        };
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
      return function (h) {
        return function () {
          return h.createElementNS(b, d);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (b, d, h, f) {
    if ("undefined" !== typeof window) return h = window[h], null != h && f instanceof h ? d(f) : b;

    for (var m = f; null != m;) {
      m = Object.getPrototypeOf(m);
      var q = m.constructor.name;
      if (q === h) return d(f);
      if ("Object" === q) break;
    }

    return b;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var b = a["Web.Internal.FFI"],
      d = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (h) {
    return function (f) {
      return b._unsafeReadProtoTagged(d.Nothing.value, d.Just.create, h, f);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var b = a["Web.DOM.Document"],
      d = a["Web.DOM.Document"],
      h = a["Data.Functor"],
      f = a["Data.Nullable"],
      m = a.Effect,
      q = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var k = function () {
    var p = h.map(m.functorEffect)(f.toMaybe);
    return function (u) {
      return p(d._documentElement(u));
    };
  }();

  b.fromNode = a;
  b.toNonElementParentNode = q;
  b.documentElement = k;

  b.getElementsByTagNameNS = function (p) {
    return d._getElementsByTagNameNS(f.toNullable(p));
  };

  b.createElementNS = function (p) {
    return d._createElementNS(f.toNullable(p));
  };

  b.getElementsByTagName = d.getElementsByTagName;
  b.createElement = d.createElement;
})(PS);

(function (a) {
  var b = function b(d) {
    return function (h) {
      return h[d];
    };
  };

  a._prefix = b("prefix");
  a.localName = b("localName");
  a.tagName = b("tagName");

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
  var b = a["Web.DOM.Element"],
      d = a["Web.DOM.Element"],
      h = a["Data.Functor"],
      f = a["Data.Nullable"],
      m = a.Effect,
      q = a["Unsafe.Coerce"],
      k = q.unsafeCoerce;
  q = q.unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  b.fromNode = a;
  b.toNode = q;
  b.toParentNode = k;

  b.prefix = function (p) {
    return f.toMaybe(d._prefix(p));
  };

  b.getAttribute = function (p) {
    var u = h.map(m.functorEffect)(f.toMaybe),
        y = d._getAttribute(p);

    return function (c) {
      return u(y(c));
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
      h = a["Data.Functor"],
      f = a["Data.Nullable"],
      m = a.Effect;

  b.item = function (q) {
    var k = h.map(m.functorEffect)(f.toMaybe),
        p = d._item(q);

    return function (u) {
      return k(p(u));
    };
  };

  b.toArray = d.toArray;
})(PS);

(function (a) {
  var b = function b(d) {
    return function (h) {
      return function () {
        return h[d];
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
  var b = a["Web.DOM.Node"],
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
      h = a["Control.Applicative"],
      f = a["Control.Bind"],
      m = a["Data.Array"],
      q = a["Data.Either"],
      k = a["Data.Functor"],
      p = a["Data.Maybe"],
      u = a.Effect,
      y = a["Web.DOM.Document"],
      c = a["Web.DOM.Element"],
      g = a["Web.DOM.HTMLCollection"],
      e = a["Web.DOM.Node"],
      l = function l(v) {
    return function (D) {
      if (v instanceof p.Nothing) return new q.Right(D);
      if (v instanceof p.Just) return new q.Left(v.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [v.constructor.name]);
    };
  },
      t = function t(v) {
    return function () {
      var D = f.join(u.bindEffect)(k.map(u.functorEffect)(g.toArray)(y.getElementsByTagName("parsererror")(v)))();
      D = m.head(D);
      D = k.map(p.functorMaybe)(c.toNode)(D);
      if (D instanceof p.Nothing) D = h.pure(u.applicativeEffect)(p.Nothing.value);else if (D instanceof p.Just) D = k.map(u.functorEffect)(p.Just.create)(e.textContent(D.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [D.constructor.name]);
      return D();
    };
  };

  b.parseXMLFromString = function (v) {
    return function (D) {
      return function () {
        var E = d.parseFromString("application/xml")(v)(D)(),
            B = t(E)();
        return l(B)(E);
      };
    };
  };

  b.makeDOMParser = d.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (b) {
    return function (d) {
      return function (h) {
        return function (f) {
          return function (m) {
            return function (q) {
              return function () {
                return q.evaluate(b, d, h, f, m);
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
    return function (u) {
      return p === u;
    };
  });

  b.res2SnapType = function (p) {
    return h.eq(k)(p)(d.unordered_node_snapshot_type) ? new f.Just(m.value) : h.eq(k)(p)(d.ordered_node_snapshot_type) ? new f.Just(q.value) : f.Nothing.value;
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
      h = a["Control.Applicative"],
      f = a["Data.Array"],
      m = a["Data.Functor"],
      q = a["Data.Int"],
      k = a["Data.Maybe"],
      p = a["Data.Monoid"],
      u = a["Data.Natural"],
      y = a["Data.Nullable"],
      c = a["Data.Traversable"],
      g = a.Effect,
      e = a["Web.DOM.Document"],
      l = a["Web.DOM.Document.XPath.ResultType"],
      t = a["Web.DOM.Element"],
      v = a["Web.DOM.Node"],
      D = function () {
    var B = m.map(g.functorEffect)(function (r) {
      return u.intToNat(q.round(r));
    });
    return function (r) {
      return B(d.snapshotLengthInternal(r));
    };
  }(),
      E = function E(B) {
    return function (r) {
      return m.map(g.functorEffect)(y.toMaybe)(d.snapshotItemInternal(B)(q.toNumber(u.natToInt(r))));
    };
  };

  a = function () {
    var B = m.map(g.functorEffect)(y.toMaybe);
    return function (r) {
      return B(d.singleNodeValueInternal(r));
    };
  }();

  b.evaluate = function (B) {
    return function (r) {
      return function (C) {
        return function (H) {
          return function (G) {
            return function (F) {
              return d.evaluateInternal(B)(r)(y.toNullable(C))(H)(y.toNullable(G))(F);
            };
          };
        };
      };
    };
  };

  b.evaluateNumber = function (B) {
    return function (r) {
      return function (C) {
        return function (H) {
          return function (G) {
            return function () {
              var F = d.evaluateInternal(B)(r)(y.toNullable(C))(l.number_type)(y.toNullable(H))(G)();
              return d.numberValue(F)();
            };
          };
        };
      };
    };
  };

  b.evaluateString = function (B) {
    return function (r) {
      return function (C) {
        return function (H) {
          return function (G) {
            return function () {
              var F = d.evaluateInternal(B)(r)(y.toNullable(C))(l.string_type)(y.toNullable(H))(G)();
              return d.stringValue(F)();
            };
          };
        };
      };
    };
  };

  b.evaluateBoolean = function (B) {
    return function (r) {
      return function (C) {
        return function (H) {
          return function (G) {
            return function () {
              var F = d.evaluateInternal(B)(r)(y.toNullable(C))(l.boolean_type)(y.toNullable(H))(G)();
              return d.booleanValue(F)();
            };
          };
        };
      };
    };
  };

  b.singleNodeValue = a;

  b.snapshot = function (B) {
    var r = l.res2SnapType(d.resultType(B)),
        C = E(B);
    r = m.map(k.functorMaybe)(function (H) {
      return function () {
        var G = D(B)();
        G = u.natToInt(G);
        G = m.map(m.functorArray)(u.intToNat)(f.range(0)(G - 1 | 0));
        G = c.sequence(c.traversableArray)(g.applicativeEffect)(m.map(m.functorArray)(C)(G))();
        return f.catMaybes(G);
      };
    })(r);
    if (r instanceof k.Nothing) return h.pure(g.applicativeEffect)(p.mempty(p.monoidArray));
    if (r instanceof k.Just) return r.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [r.constructor.name]);
  };

  b.lookupNamespaceURI = function (B) {
    return function (r) {
      return y.toMaybe(d.lookupNamespaceURIInternal(B)(r));
    };
  };

  b.defaultNSResolver = function (B) {
    return function (r) {
      var C = function C(H) {
        return function () {
          var G = e.documentElement(H)();
          if (G instanceof k.Nothing) return B;
          if (G instanceof k.Just) return t.toNode(G.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [G.constructor.name]);
        };
      };

      return function () {
        var H = v.ownerDocument(B)(),
            G = function () {
          if (H instanceof k.Nothing) {
            var F = e.fromNode(B);
            if (F instanceof k.Nothing) return B;
            if (F instanceof k.Just) return C(F.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [F.constructor.name]);
          }

          if (H instanceof k.Just) return C(H.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [H.constructor.name]);
        }();

        return d.createNSResolver(G)(r);
      };
    };
  };

  b.customNSResolver = d.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var b = a["Metajelo.XPaths"],
      d = a["Control.Applicative"],
      h = a["Control.Bind"],
      f = a["Data.Array.NonEmpty"],
      m = a["Data.Array.NonEmpty.Internal"],
      q = a["Data.Either"],
      k = a["Data.Foldable"],
      p = a["Data.Functor"],
      u = a["Data.Maybe"],
      y = a["Data.String.Common"],
      c = a["Data.String.NonEmpty.Internal"],
      g = a["Data.Traversable"],
      e = a["Data.XPath"],
      l = a.Effect,
      t = a["Effect.Exception"],
      v = a["Web.DOM.DOMParser"],
      D = a["Web.DOM.Document"],
      E = a["Web.DOM.Document.XPath"],
      B = a["Web.DOM.Document.XPath.ResultType"],
      r = a["Web.DOM.Element"],
      C = a["Web.DOM.HTMLCollection"],
      H = e.pathAppendNSx(e.stringXPath)(e.root(e.stringXPath))("record");
  a = e.pathAppendNSx(e.stringXPath)(H)("relatedIdentifier");
  var G = e.pathAppendNSx(e.stringXPath)(H)("supplementaryProducts");
  G = e.pathAppendNSx(e.stringXPath)(G)("supplementaryProduct");

  var F = function F(R) {
    return function (I) {
      return {
        any: function any(K) {
          return function (z) {
            return function (Y) {
              return E.evaluate(z)(K)(I)(Y)(u.Nothing.value)(R);
            };
          };
        },
        num: function num(K) {
          return function (z) {
            return E.evaluateNumber(z)(K)(I)(u.Nothing.value)(R);
          };
        },
        str: function str(K) {
          return function (z) {
            return E.evaluateString(z)(K)(I)(u.Nothing.value)(R);
          };
        },
        bool: function bool(K) {
          return function (z) {
            return E.evaluateBoolean(z)(K)(I)(u.Nothing.value)(R);
          };
        },
        nodeMay: function nodeMay(K) {
          return function (z) {
            return h.bind(l.bindEffect)(E.evaluate(z)(K)(I)(B.any_unordered_node_type)(u.Nothing.value)(R))(E.singleNodeValue);
          };
        }
      };
    };
  },
      J = f["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      O = function O(R) {
    var I = function I(K) {
      return function () {
        var z = D.getElementsByTagNameNS(new u.Just(K))("record")(R)();
        return C.item(0)(z)();
      };
    };

    return function () {
      var K = D.getElementsByTagName("record")(R)();
      K = C.item(0)(K)();
      if (K instanceof u.Nothing) K = g.sequence(m.traversableNonEmptyArray)(l.applicativeEffect)(p.map(m.functorNonEmptyArray)(I)(J))(), K = h.join(u.bindMaybe)(k.find(m.foldableNonEmptyArray)(u.isJust)(K));else if (K instanceof u.Just) K = new u.Just(K.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 277, column 16 - line 281, column 38): " + [K.constructor.name]);
      return p.map(u.functorMaybe)(r.toNode)(K);
    };
  },
      Q = e.pathAppendNSx(e.stringXPath)(H)("lastModified"),
      V = e.pathAppendNSx(e.stringXPath)(H)("identifier"),
      M = e.pathAppend(e.stringXPath)(V)(e.at(e.stringXPath)("identifierType")),
      L = function L(R) {
    var I = function I(K) {
      return u.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(K);
    };

    if (R instanceof u.Nothing) return d.pure(l.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (R instanceof u.Just) return p.map(l.functorEffect)(I)(r.getAttribute("xmlns")(R.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 185, column 3 - line 187, column 59): " + [R.constructor.name]);
  },
      w = function w(R) {
    return function (I) {
      var K = function K(z) {
        return function (Y) {
          return function (ma) {
            ma = E.lookupNamespaceURI(z)(ma);
            if (ma instanceof u.Nothing) return Y;
            if (ma instanceof u.Just) return ma.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 202, column 39 - line 204, column 20): " + [ma.constructor.name]);
          };
        };
      };

      return function () {
        var z = E.defaultNSResolver(R)(I)(),
            Y = r.fromNode(R);
        Y = L(Y)();
        return E.customNSResolver(K(z)(Y));
      };
    };
  };

  e = e.pathAppendNSx(e.stringXPath)(H)("date");
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
  b.idTypeRootAP = M;
  b.idRootP = V;
  b.dateRootP = e;
  b.lastModRootP = Q;
  b.relIdRootP = a;
  b.sProdRootP = G;

  b.getDefaultParseEnv = function (R) {
    return function () {
      var I = v.makeDOMParser();
      I = v.parseXMLFromString(R)(I)();
      if (I instanceof q.Left) I = t["throw"]("XML parsing error: " + I.value0)();else if (I instanceof q.Right) I = I.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 245, column 13 - line 247, column 26): " + [I.constructor.name]);
      var K = O(I)();
      if (K instanceof u.Nothing) K = t["throw"]("Could not find <record> node!")();else if (K instanceof u.Just) K = K.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 249, column 14 - line 251, column 23): " + [K.constructor.name]);
      var z = r.fromNode(K);
      if (z instanceof u.Nothing) z = t["throw"]("<record> node could not be cast to an element!")();else if (z instanceof u.Just) z = z.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 252, column 14 - line 254, column 23): " + [z.constructor.name]);
      var Y = L(new u.Just(z))(),
          ma = w(K)(I)();
      ma = F(I)(new u.Just(ma));
      return {
        doc: I,
        ns: Y,
        recNode: K,
        recElem: z,
        xeval: ma,
        xevalRoot: {
          any: ma.any(K),
          num: ma.num(K),
          str: ma.str(K),
          bool: ma.bool(K),
          nodeMay: ma.nodeMay(K)
        }
      };
    };
  };

  b.unsafeSingleNodeValue = function (R) {
    return function (I) {
      return function (K) {
        return function () {
          var z = R.xeval.nodeMay(I)(K)();
          if (z instanceof u.Just) return z.value0;
          if (z instanceof u.Nothing) return t["throw"]("Couldn't find required node at: " + K)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 294, column 3 - line 296, column 40): " + [z.constructor.name]);
        };
      };
    };
  };

  b.readNonEmptyString = function (R) {
    return function (I) {
      I = c.fromString(y.trim(I));
      if (I instanceof u.Nothing) return q.Left.create("Empty string found for " + R);
      if (I instanceof u.Just) return new q.Right(I.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 303, column 3 - line 305, column 26): " + [I.constructor.name]);
    };
  };

  b.readNonEmptyArray = function (R) {
    return function (I) {
      I = f.fromArray(I);
      if (I instanceof u.Nothing) return q.Left.create("Empty array found for " + R);
      if (I instanceof u.Just) return new q.Right(I.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 310, column 3 - line 312, column 26): " + [I.constructor.name]);
    };
  };

  b.rightOrThrow = function (R) {
    if (R instanceof q.Right) return d.pure(l.applicativeEffect)(R.value0);
    if (R instanceof q.Left) return t["throw"](R.value0);
    throw Error("Failed pattern match at Metajelo.XPaths (line 315, column 19 - line 317, column 24): " + [R.constructor.name]);
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var b = a["Text.Parsing.StringParser"],
      d = a["Control.Alt"],
      h = a["Control.Alternative"],
      f = a["Control.Applicative"],
      m = a["Control.Apply"],
      q = a["Control.Bind"],
      k = a["Control.Monad"],
      p = a["Control.Monad.Rec.Class"],
      u = a["Control.Plus"],
      y = a["Data.Bifunctor"],
      c = a["Data.Boolean"],
      g = a["Data.Either"],
      e = a["Data.Functor"];
  a = a["Data.Show"];

  var l = function () {
    function G(F) {
      this.value0 = F;
    }

    G.create = function (F) {
      return new G(F);
    };

    return G;
  }();

  a = new a.Show(function (G) {
    return G.value0;
  });

  var t = new e.Functor(function (G) {
    return function (F) {
      var J = e.map(g.functorEither)(function (O) {
        return {
          result: G(O.result),
          suffix: O.suffix
        };
      });
      return function (O) {
        return J(F(O));
      };
    };
  }),
      v = function v(G) {
    return function (F) {
      return new g.Left({
        pos: F.pos,
        error: new l(G)
      });
    };
  },
      D = new m.Apply(function () {
    return t;
  }, function (G) {
    return function (F) {
      return function (J) {
        return q.bind(g.bindEither)(G(J))(function (O) {
          return q.bind(g.bindEither)(F(O.suffix))(function (Q) {
            return f.pure(g.applicativeEither)({
              result: O.result(Q.result),
              suffix: Q.suffix
            });
          });
        });
      };
    };
  }),
      E = new q.Bind(function () {
    return D;
  }, function (G) {
    return function (F) {
      return function (J) {
        return q.bind(g.bindEither)(G(J))(function (O) {
          return F(O.result)(O.suffix);
        });
      };
    };
  }),
      B = new f.Applicative(function () {
    return D;
  }, function (G) {
    return function (F) {
      return new g.Right({
        result: G,
        suffix: F
      });
    };
  }),
      r = new k.Monad(function () {
    return B;
  }, function () {
    return E;
  });

  m = new p.MonadRec(function () {
    return r;
  }, function (G) {
    return function (F) {
      var J = function J(O) {
        if (O.result instanceof p.Loop) return new p.Loop({
          state: O.result.value0,
          str: O.suffix
        });
        if (O.result instanceof p.Done) return new p.Done({
          result: O.result.value0,
          suffix: O.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [O.constructor.name]);
      };

      return function (O) {
        return p.tailRecM(p.monadRecEither)(function (Q) {
          return e.map(g.functorEither)(J)(G(Q.state)(Q.str));
        })({
          state: F,
          str: O
        });
      };
    };
  });
  var C = new d.Alt(function () {
    return t;
  }, function (G) {
    return function (F) {
      return function (J) {
        var O = G(J);

        if (O instanceof g.Left) {
          if (J.pos === O.value0.pos) return F(J);
          if (c.otherwise) return new g.Left({
            error: O.value0.error,
            pos: O.value0.pos
          });
        }

        return O;
      };
    };
  }),
      H = new u.Plus(function () {
    return C;
  }, v("No alternative"));
  d = new h.Alternative(function () {
    return B;
  }, function () {
    return H;
  });
  b.ParseError = l;

  b.runParser = function (G) {
    return function (F) {
      return y.bimap(g.bifunctorEither)(function (J) {
        return J.error;
      })(function (J) {
        return J.result;
      })(G({
        str: F,
        pos: 0
      }));
    };
  };

  b.fail = v;

  b["try"] = function (G) {
    return function (F) {
      return y.lmap(g.bifunctorEither)(function (J) {
        return {
          pos: F.pos,
          error: J.error
        };
      })(G(F));
    };
  };

  b.showParseError = a;
  b.functorParser = t;
  b.applyParser = D;
  b.applicativeParser = B;
  b.altParser = C;
  b.alternativeParser = d;
  b.bindParser = E;
  b.monadRecParser = m;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var b = a["Text.Parsing.StringParser.Combinators"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Data.Functor"],
      k = a["Data.NonEmpty"],
      p = a["Data.Unit"],
      u = a["Text.Parsing.StringParser"],
      y = a["Data.List"].manyRec(u.monadRecParser)(u.alternativeParser),
      c = function c(g) {
    return function (e) {
      return new k.NonEmpty(g, e);
    };
  };

  b.many = y;

  b.many1 = function (g) {
    return f.apply(u.applyParser)(q.map(u.functorParser)(c)(g))(y(g));
  };

  b.withError = function (g) {
    return function (e) {
      return d.alt(u.altParser)(g)(u.fail(e));
    };
  };

  b.optional = function (g) {
    return d.alt(u.altParser)(m.bind(u.bindParser)(g)(function (e) {
      return h.pure(u.applicativeParser)(p.unit);
    }))(h.pure(u.applicativeParser)(p.unit));
  };

  b.sepBy1 = function (g) {
    return function (e) {
      return m.bind(u.bindParser)(g)(function (l) {
        return m.bind(u.bindParser)(y(f.applySecond(u.applyParser)(e)(g)))(function (t) {
          return h.pure(u.applicativeParser)(c(l)(t));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var b = a["Text.Parsing.StringParser.CodePoints"],
      d = a["Control.Applicative"],
      h = a["Control.Bind"],
      f = a["Data.Char"],
      m = a["Data.Either"],
      q = a["Data.Enum"],
      k = a["Data.Maybe"],
      p = a["Data.Show"],
      u = a["Data.String.CodePoints"],
      y = a["Data.Unit"],
      c = a["Text.Parsing.StringParser"],
      g = a["Text.Parsing.StringParser.Combinators"],
      e = function () {
    var t = function () {
      var v = q.fromEnum(u.boundedEnumCodePoint);
      return function (D) {
        return f.fromCharCode(v(D));
      };
    }();

    return function (v) {
      var D = u.codePointAt(v.pos)(v.str);

      if (D instanceof k.Just) {
        var E = t(D.value0);
        if (E instanceof k.Just) return new m.Right({
          result: E.value0,
          suffix: {
            str: v.str,
            pos: v.pos + 1 | 0
          }
        });
        if (E instanceof k.Nothing) return new m.Left({
          pos: v.pos,
          error: c.ParseError.create("CodePoint " + (p.show(u.showCodePoint)(D.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [E.constructor.name]);
      }

      if (D instanceof k.Nothing) return new m.Left({
        pos: v.pos,
        error: new c.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [D.constructor.name]);
    };
  }(),
      l = function l(t) {
    return c["try"](h.bind(c.bindParser)(e)(function (v) {
      return t(v) ? d.pure(c.applicativeParser)(v) : c.fail("Character " + (p.show(p.showChar)(v) + " did not satisfy predicate"));
    }));
  };

  b.eof = function (t) {
    return t.pos < u.length(t.str) ? new m.Left({
      pos: t.pos,
      error: new c.ParseError("Expected EOF")
    }) : new m.Right({
      result: y.unit,
      suffix: t
    });
  };

  b.satisfy = l;

  b["char"] = function (t) {
    return g.withError(l(function (v) {
      return v === t;
    }))("Could not match character " + p.show(p.showChar)(t));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var b = a["Text.Email.Parser"],
      d = a["Control.Alt"],
      h = a["Control.Applicative"],
      f = a["Control.Apply"],
      m = a["Control.Bind"],
      q = a["Data.Char"],
      k = a["Data.Foldable"],
      p = a["Data.Functor"],
      u = a["Data.List.Types"],
      y = a["Data.Maybe"],
      c = a["Data.Monoid"],
      g = a["Data.String.CodeUnits"],
      e = a["Data.String.Pattern"],
      l = a["Data.Unit"],
      t = a["Text.Parsing.StringParser"],
      v = a["Text.Parsing.StringParser.CodePoints"],
      D = a["Text.Parsing.StringParser.Combinators"],
      E = function (ia) {
    var Ia = y.fromJust();
    return function (sa) {
      return Ia(q.fromCharCode(sa));
    };
  }(),
      B = function B(ia) {
    return p.map(t.functorParser)(function () {
      var Ia = k.fold(u.foldableNonEmptyList)(c.monoidString),
          sa = p.map(u.functorNonEmptyList)(g.singleton);
      return function (ta) {
        return Ia(sa(ta));
      };
    }())(D.many1(v.satisfy(ia)));
  },
      r = function r(ia) {
    return m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(ia))(function () {
      return m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(C(ia)))(function () {
        return h.pure(t.applicativeParser)(l.unit);
      });
    });
  },
      C = function C(ia) {
    return d.alt(t.altParser)(r(ia))(h.pure(t.applicativeParser)(l.unit));
  },
      H = function H(ia) {
    return m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(v.satisfy(ia)))(function () {
      return m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(C(v.satisfy(ia))))(function () {
        return h.pure(t.applicativeParser)(l.unit);
      });
    });
  },
      G = v["char"](E(0)),
      F = v["char"]("\n");

  a = function a(ia) {
    return " " === ia || "\t" === ia;
  };

  var J = v.satisfy(a),
      O = H(a),
      Q = function Q(ia) {
    return function (Ia) {
      return function (sa) {
        return sa >= ia && sa <= Ia;
      };
    };
  };

  a = Q(E(33))(E(126));

  var V = v.satisfy(a),
      M = function M(ia) {
    return function (Ia) {
      return g.contains(e.Pattern(g.singleton(Ia)))(ia);
    };
  },
      L = function L(ia) {
    return Q(E(1))(E(8))(ia) || Q(E(14))(E(31))(ia) || M("\x0B\f\x7F")(ia);
  },
      w = function w(ia) {
    return Q(E(33))(E(39))(ia) || Q(E(42))(E(91))(ia) || Q(E(93))(E(126))(ia) || L(ia);
  },
      R = function R(ia) {
    return Q(E(33))(E(90))(ia) || Q(E(94))(E(126))(ia) || L(ia);
  },
      I = v.satisfy(L),
      K = v["char"]("\r"),
      z = p["void"](t.functorParser)(f.applySecond(t.applyParser)(K)(F)),
      Y = function () {
    var ia = r(f.applySecond(t.applyParser)(z)(O)),
        Ia = f.applySecond(t.applyParser)(O)(D.optional(f.applySecond(t.applyParser)(z)(O)));
    return d.alt(t.altParser)(Ia)(ia);
  }(),
      ma = function () {
    var ia = m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(v["char"]("\\")))(function () {
      return d.alt(t.altParser)(d.alt(t.altParser)(d.alt(t.altParser)(d.alt(t.altParser)(d.alt(t.altParser)(V)(J))(F))(K))(I))(G);
    });
    return m.bind(t.bindParser)(ia)(function (Ia) {
      return h.pure(t.applicativeParser)("\\" + g.singleton(Ia));
    });
  }(),
      za = d.alt(t.altParser)(B(function (ia) {
    return M(g.singleton(E(33)))(ia) || Q(E(35))(E(91))(ia) || Q(E(93))(E(126))(ia) || L(ia);
  }))(ma),
      Da = function () {
    var ia = m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(v["char"]('"')))(function () {
      return m.bind(t.bindParser)(D.many(f.applySecond(t.applyParser)(D.optional(Y))(za)))(function (Ia) {
        return m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(D.optional(Y)))(function () {
          return m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(v["char"]('"')))(function () {
            return h.pure(t.applicativeParser)(Ia);
          });
        });
      });
    });
    return p.map(t.functorParser)(function (Ia) {
      return '"' + (k.fold(u.foldableList)(c.monoidString)(Ia) + '"');
    })(ia);
  }(),
      Ba = m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(v["char"]("(")))(function () {
    return m.discard(m.discardUnit)(t.bindParser)(C(d.alt(t.altParser)(d.alt(t.altParser)(d.alt(t.altParser)(H(w))(p["void"](t.functorParser)(ma)))(Ba))(Y)))(function () {
      return m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(v["char"](")")))(function () {
        return h.pure(t.applicativeParser)(l.unit);
      });
    });
  }),
      x = C(d.alt(t.altParser)(Ba)(Y));

  a = m.discard(m.discardUnit)(t.bindParser)(D.optional(x))(function () {
    return m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(v["char"]("[")))(function () {
      return m.bind(t.bindParser)(D.many(f.applySecond(t.applyParser)(D.optional(Y))(B(R))))(function (ia) {
        return m.discard(m.discardUnit)(t.bindParser)(D.optional(Y))(function () {
          return m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(v["char"]("]")))(function () {
            return m.discard(m.discardUnit)(t.bindParser)(D.optional(x))(function () {
              return h.pure(t.applicativeParser)("[" + (k.fold(u.foldableList)(c.monoidString)(ia) + "]"));
            });
          });
        });
      });
    });
  });

  var fa = function () {
    return B(function (ia) {
      return "0" <= ia && "9" >= ia || "a" <= ia && "z" >= ia || "A" <= ia && "Z" >= ia || M("!#$%&'*+/=?^_`{|}~-")(ia);
    });
  }(),
      ja = function () {
    var ia = m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(D.optional(x)))(function () {
      return m.bind(t.bindParser)(d.alt(t.altParser)(fa)(Da))(function (Ia) {
        return m.discard(m.discardUnit)(t.bindParser)(p["void"](t.functorParser)(D.optional(x)))(function () {
          return h.pure(t.applicativeParser)(Ia);
        });
      });
    });
    ia = D.sepBy1(ia)(v["char"]("."));
    return p.map(t.functorParser)(k.intercalate(u.foldableNonEmptyList)(c.monoidString)("."))(ia);
  }(),
      S = d.alt(t.altParser)(ja)(a);

  a = m.bind(t.bindParser)(ja)(function (ia) {
    return m.bind(t.bindParser)(v["char"]("@"))(function () {
      return m.bind(t.bindParser)(S)(function (Ia) {
        return m.bind(t.bindParser)(v.eof)(function () {
          return h.pure(t.applicativeParser)({
            localPart: ia,
            domainPart: Ia
          });
        });
      });
    });
  });
  b.addrSpec = a;

  b.toString = function (ia) {
    return ia.localPart + ("@" + ia.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var b = a["Text.Email.Validate"],
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

  b.validate = a;
})(PS);

(function (a) {
  a._validateURL = function (b) {
    return function (d) {
      if (!d || !/^https?:\/\//.test(d)) return "Unknown or missing protocol format in url: " + d;
      var h = document.createElement("a");
      h.href = d;

      if (b) {
        if (h.username) return "URL " + d + " contains a username: " + h.username;
        if (h.password) return "URL " + d + " contains a password: " + h.password;
      }

      return /\.[^0-9.]/.test(h.hostname) ? /(\s|^\.|\.$)/.test(h.hostname) ? "Hostname '" + h.href + "' contains whitespace in " + d : h.href.toLowerCase().replace(/\/+$/g, "") !== d.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + d + " doesn't match parsed href " + h.href : "SUCCESS" : "Invalid hostname '" + h.href + "' in " + d;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};

  var b = a["Text.URL.Validate"],
      d = a["Text.URL.Validate"],
      h = a["Data.Either"],
      f = a["Data.Maybe"],
      m = a["Data.String.NonEmpty.Internal"],
      q = function q(k) {
    return function (p) {
      var u = "SUCCESS" === p ? !0 : !1;

      if (u) {
        p = m.fromString(k);
        if (p instanceof f.Just) return new h.Right(p.value0);
        if (p instanceof f.Nothing) return new h.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [p.constructor.name]);
      }

      if (!u) return new h.Left(p);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [u.constructor.name]);
    };
  };

  b.parsePublicURL = function (k) {
    var p = d._validateURL(!0)(k);

    return q(k)(p);
  };

  b.urlToNEString = function (k) {
    return k;
  };

  b.urlToString = function (k) {
    return m.toString(k);
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
      h = a["Control.Apply"],
      f = a["Control.Bind"],
      m = a["Control.Monad"],
      q = a["Control.Plus"],
      k = a["Data.Array"],
      p = a["Data.Array.NonEmpty"],
      u = a["Data.Bounded"],
      y = a["Data.DateTime"],
      c = a["Data.Either"],
      g = a["Data.Either.Extra"],
      e = a["Data.Functor"],
      l = a["Data.Int"],
      t = a["Data.JSDate"],
      v = a["Data.Maybe"],
      D = a["Data.Natural"],
      E = a["Data.String.CodePoints"],
      B = a["Data.String.CodeUnits"],
      r = a["Data.String.NonEmpty.Internal"],
      C = a["Data.String.Utils"],
      H = a["Data.Traversable"],
      G = a["Data.XPath"],
      F = a["DataCite.Types.Common"],
      J = a.Effect,
      O = a["Effect.Exception"],
      Q = a.Global,
      V = a["Metajelo.Types"],
      M = a["Metajelo.XPaths"],
      L = a["Text.Email.Validate"],
      w = a["Text.URL.Validate"],
      R = a["Web.DOM.Document.XPath"],
      I = a["Web.DOM.Document.XPath.ResultType"],
      K = a["Web.DOM.Element"],
      z = a["Web.DOM.Node"],
      Y = a["Web.DOM.NodeList"],
      ma = function ma(N) {
    return "Audiovisual" === N ? d.pure(c.applicativeEither)(F.Audiovisual.value) : "Dataset" === N ? d.pure(c.applicativeEither)(F.Dataset.value) : "Event" === N ? d.pure(c.applicativeEither)(F.Event.value) : "Image" === N ? d.pure(c.applicativeEither)(F.Image.value) : "InteractiveResource" === N ? d.pure(c.applicativeEither)(F.InteractiveResource.value) : "Model" === N ? d.pure(c.applicativeEither)(F.Model.value) : "PhysicalObject" === N ? d.pure(c.applicativeEither)(F.PhysicalObject.value) : "ResourceCollection" === N ? d.pure(c.applicativeEither)(F.ResourceCollection.value) : "Service" === N ? d.pure(c.applicativeEither)(F.Service.value) : "Software" === N ? d.pure(c.applicativeEither)(F.Software.value) : "Sound" === N ? d.pure(c.applicativeEither)(F.Sound.value) : "Text" === N ? d.pure(c.applicativeEither)(F.Text.value) : "Workflow" === N ? d.pure(c.applicativeEither)(F.Workflow.value) : "Other" === N ? d.pure(c.applicativeEither)(F.Other.value) : c.Left.create("Unknown ResourceTypeGeneral: '" + (N + "'"));
  },
      za = function za(N) {
    return function (va) {
      return function () {
        var ra = M.unsafeSingleNodeValue(N)(va)(G.xx(G.stringXPath)(M.resTypeP))(),
            Aa = N.xeval.str(ra)(".")();
        ra = N.xeval.str(ra)(G.at(G.stringXPath)(M.resTypeGenAT))();
        ra = M.rightOrThrow(ma(ra))();
        return {
          description: Aa,
          generalType: ra
        };
      };
    };
  },
      Da = function Da(N) {
    return "IsCitedBy" === N ? d.pure(c.applicativeEither)(F.IsCitedBy.value) : "Cites" === N ? d.pure(c.applicativeEither)(F.Cites.value) : "IsSupplementTo" === N ? d.pure(c.applicativeEither)(F.IsSupplementTo.value) : "IsSupplementedBy" === N ? d.pure(c.applicativeEither)(F.IsSupplementedBy.value) : "IsContinuedBy" === N ? d.pure(c.applicativeEither)(F.IsContinuedBy.value) : "Continues" === N ? d.pure(c.applicativeEither)(F.Continues.value) : "IsNewVersionOf" === N ? d.pure(c.applicativeEither)(F.IsNewVersionOf.value) : "IsPreviousVersionOf" === N ? d.pure(c.applicativeEither)(F.IsPreviousVersionOf.value) : "IsPartOf" === N ? d.pure(c.applicativeEither)(F.IsPartOf.value) : "HasPart" === N ? d.pure(c.applicativeEither)(F.HasPart.value) : "IsReferencedBy" === N ? d.pure(c.applicativeEither)(F.IsReferencedBy.value) : "References" === N ? d.pure(c.applicativeEither)(F.References.value) : "IsDocumentedBy" === N ? d.pure(c.applicativeEither)(F.IsDocumentedBy.value) : "Documents" === N ? d.pure(c.applicativeEither)(F.Documents.value) : "IsCompiledBy" === N ? d.pure(c.applicativeEither)(F.IsCompiledBy.value) : "Compiles" === N ? d.pure(c.applicativeEither)(F.Compiles.value) : "IsVariantFormOf" === N ? d.pure(c.applicativeEither)(F.IsVariantFormOf.value) : "IsOriginalFormOf" === N ? d.pure(c.applicativeEither)(F.IsOriginalFormOf.value) : "IsIdenticalTo" === N ? d.pure(c.applicativeEither)(F.IsIdenticalTo.value) : "HasMetadata" === N ? d.pure(c.applicativeEither)(F.HasMetadata.value) : "IsMetadataFor" === N ? d.pure(c.applicativeEither)(F.IsMetadataFor.value) : "Reviews" === N ? d.pure(c.applicativeEither)(F.Reviews.value) : "IsReviewedBy" === N ? d.pure(c.applicativeEither)(F.IsReviewedBy.value) : "IsDerivedFrom" === N ? d.pure(c.applicativeEither)(F.IsDerivedFrom.value) : "IsSourceOf" === N ? d.pure(c.applicativeEither)(F.IsSourceOf.value) : c.Left.create("Unknown RelationType: '" + (N + "'"));
  },
      Ba = function Ba(N) {
    return "Access" === N ? d.pure(c.applicativeEither)(new v.Just(V.Access.value)) : "Collection" === N ? d.pure(c.applicativeEither)(new v.Just(V.Collection.value)) : "Data" === N ? d.pure(c.applicativeEither)(new v.Just(V.Data.value)) : "Metadata" === N ? d.pure(c.applicativeEither)(new v.Just(V.Metadata.value)) : "Preservation" === N ? d.pure(c.applicativeEither)(new v.Just(V.Preservation.value)) : "Submission" === N ? d.pure(c.applicativeEither)(new v.Just(V.Submission.value)) : "Quality" === N ? d.pure(c.applicativeEither)(new v.Just(V.Quality.value)) : "Terms of Use" === N ? d.pure(c.applicativeEither)(new v.Just(V.TermsOfUse.value)) : "" === N ? d.pure(c.applicativeEither)(v.Nothing.value) : c.Left.create("Unknown PolicyType: '" + (N + "'"));
  },
      x = function x(N) {
    return function (va) {
      return function (ra) {
        return function () {
          var Aa = N.xeval.any(ra)(G.xx(G.stringXPath)(va))(I.ordered_node_snapshot_type)();
          Aa = R.snapshot(Aa)();
          Aa = H.traverse(H.traversableArray)(J.applicativeEffect)(function (ba) {
            return N.xeval.str(ba)(".");
          })(Aa)();
          Aa = e.map(e.functorArray)(function (ba) {
            return M.readNonEmptyString(va)(ba);
          })(Aa);
          g.catLefts(m.monadArray)(q.plusArray)(Aa);
          Aa = g.catRights(m.monadArray)(q.plusArray)(Aa);
          return M.readNonEmptyArray(va + "s")(Aa);
        };
      };
    };
  },
      fa = function fa(N) {
    return "commercial" === N ? d.pure(c.applicativeEither)(V.Commercial.value) : "non-profit" === N ? d.pure(c.applicativeEither)(V.NonProfit.value) : "governmental" === N ? d.pure(c.applicativeEither)(V.Governmental.value) : c.Left.create("Unknown InstitutionType: '" + (N + "'"));
  },
      ja = function ja(N) {
    return "dataCustodian" === N ? d.pure(c.applicativeEither)(new v.Just(V.DataCustodian.value)) : "" === N ? d.pure(c.applicativeEither)(v.Nothing.value) : c.Left.create("Unknown InstitutionContactType: '" + (N + "'"));
  },
      S = function S(N) {
    return "ARK" === N ? d.pure(c.applicativeEither)(F.ARK.value) : "arXiv" === N ? d.pure(c.applicativeEither)(F.ArXiv.value) : "bibcode" === N ? d.pure(c.applicativeEither)(F.Bibcode.value) : "DOI" === N ? d.pure(c.applicativeEither)(F.DOI.value) : "EAN13" === N ? d.pure(c.applicativeEither)(F.EAN13.value) : "EISSN" === N ? d.pure(c.applicativeEither)(F.EISSN.value) : "Handle" === N ? d.pure(c.applicativeEither)(F.Handle.value) : "IGSN" === N ? d.pure(c.applicativeEither)(F.IGSN.value) : "ISBN" === N ? d.pure(c.applicativeEither)(F.ISBN.value) : "ISSN" === N ? d.pure(c.applicativeEither)(F.ISSN.value) : "ISTC" === N ? d.pure(c.applicativeEither)(F.ISTC.value) : "LISSN" === N ? d.pure(c.applicativeEither)(F.LISSN.value) : "LSID" === N ? d.pure(c.applicativeEither)(F.LSID.value) : "PMID" === N ? d.pure(c.applicativeEither)(F.PMID.value) : "PURL" === N ? d.pure(c.applicativeEither)(F.PURL.value) : "UPC" === N ? d.pure(c.applicativeEither)(F.UPC.value) : "URL" === N ? d.pure(c.applicativeEither)(F.URL.value) : "URN" === N ? d.pure(c.applicativeEither)(F.URN.value) : c.Left.create("Unknown IdentifierType: '" + (N + "'"));
  },
      ia = function ia(N) {
    return function (va) {
      var ra = function ra(ba) {
        return function () {
          var ea = N.xeval.str(ba)(G.at(G.stringXPath)(M.idTypeAT))();
          return M.rightOrThrow(S(ea))();
        };
      },
          Aa = function Aa(ba) {
        return function () {
          var ea = N.xeval.str(ba)(".")();
          return M.rightOrThrow(M.readNonEmptyString("InstitutionID")(ea))();
        };
      };

      return function () {
        var ba = M.unsafeSingleNodeValue(N)(va)(G.xx(G.stringXPath)(M.instIdP))(),
            ea = Aa(ba)();
        ba = ra(ba)();
        return {
          identifier: ea,
          identifierType: ba
        };
      };
    };
  },
      Ia = function Ia(N) {
    var va = function va(ea) {
      return function () {
        var ha = N.xeval.str(ea)(G.at(G.stringXPath)(M.relTypeAT))();
        return M.rightOrThrow(Da(ha))();
      };
    },
        ra = function ra(ea) {
      return function () {
        var ha = N.xeval.str(ea)(G.at(G.stringXPath)(M.relIdTypeAT))();
        return M.rightOrThrow(S(ha))();
      };
    },
        Aa = function Aa(ea) {
      return function () {
        var ha = N.xeval.str(ea)(".")();
        return M.rightOrThrow(M.readNonEmptyString("RelatedIdentifier")(ha))();
      };
    },
        ba = function ba(ea) {
      return function () {
        var ha = Aa(ea)(),
            A = ra(ea)(),
            la = va(ea)();
        return {
          identifier: ha,
          identifierType: A,
          relationType: la
        };
      };
    };

    return function () {
      var ea = N.xevalRoot.any(M.relIdRootP)(I.ordered_node_snapshot_type)();
      ea = R.snapshot(ea)();
      ea = H.sequence(H.traversableArray)(J.applicativeEffect)(e.map(e.functorArray)(ba)(ea))();
      ea = p.fromArray(ea);
      if (ea instanceof v.Just) return ea.value0;
      if (ea instanceof v.Nothing) return O["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 112, column 3 - line 114, column 67): " + [ea.constructor.name]);
    };
  },
      sa = function sa(N) {
    return function (va) {
      var ra = function ra(ea) {
        return function () {
          var ha = N.xeval.str(ea)(G.at(G.stringXPath)(M.resIdTypeAT))();
          return M.rightOrThrow(S(ha))();
        };
      },
          Aa = function Aa(ea) {
        return function () {
          var ha = N.xeval.str(ea)(".")();
          return M.rightOrThrow(M.readNonEmptyString("ResourceID")(ha))();
        };
      },
          ba = function ba(ea) {
        return function (ha) {
          return H.sequence(H.traversableMaybe)(J.applicativeEffect)(f.bind(v.bindMaybe)(ea)(function (A) {
            return f.bind(v.bindMaybe)(ha)(function (la) {
              return d.pure(v.applicativeMaybe)(h.lift2(J.applyEffect)(function (ua) {
                return function (Ma) {
                  return {
                    identifier: ua,
                    identifierType: Ma
                  };
                };
              })(A)(la));
            });
          }));
        };
      };

      return function () {
        var ea = N.xeval.nodeMay(va)(G.xx(G.stringXPath)(M.resIdP))(),
            ha = e.map(v.functorMaybe)(Aa)(ea);
        ea = e.map(v.functorMaybe)(ra)(ea);
        return ba(ha)(ea)();
      };
    };
  },
      ta = function ta(N) {
    return function () {
      var va = N.xevalRoot.str(M.idRootP)();
      va = M.rightOrThrow(M.readNonEmptyString("Identifier")(va))();
      var ra = N.xevalRoot.str(M.idTypeRootAP)();
      ra = M.rightOrThrow(S(ra))();
      return {
        identifier: va,
        identifierType: ra
      };
    };
  },
      wa = function wa(N) {
    return function (va) {
      var ra = function ra(Aa) {
        return function () {
          var ba = N.xeval.str(Aa)(".")();
          return M.rightOrThrow(M.readNonEmptyString("Format")(ba))();
        };
      };

      return function () {
        var Aa = N.xeval.any(va)(G.pathAppendNSx(G.stringXPath)(G.xx(G.stringXPath)(M.formatCP))(M.formatP))(I.ordered_node_snapshot_type)();
        Aa = R.snapshot(Aa)();
        return H.traverse(H.traversableArray)(J.applicativeEffect)(ra)(Aa)();
      };
    };
  },
      ya = function ya(N) {
    return "0" === N ? d.pure(c.applicativeEither)(!1) : "1" === N ? d.pure(c.applicativeEither)(!0) : "false" === N ? d.pure(c.applicativeEither)(!1) : "true" === N ? d.pure(c.applicativeEither)(!0) : c.Left.create("Invalid xs:boolean value: '" + (N + "'"));
  },
      Ga = function Ga(N) {
    return "" === N ? d.pure(c.applicativeEither)(v.Nothing.value) : e.map(c.functorEither)(v.Just.create)(ya(N));
  },
      da = function da(N) {
    return function (va) {
      var ra = G.pathAppendNSx(G.stringXPath)(G.xx(G.stringXPath)(M.instPolicyCP))(M.instPolicyP),
          Aa = function Aa(ba) {
        return function () {
          var ea = z.childNodes(ba)();
          ea = Y.toArray(ea)();
          ea = k.head(k.filter(function (Fa) {
            return !C.startsWith("#")(z.nodeName(Fa));
          })(ea));
          if (ea instanceof v.Just) var ha = ea.value0;else if (ea instanceof v.Nothing) ha = O["throw"]("Couldn't find child node of " + z.nodeName(ba))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 394, column 30 - line 396, column 80): " + [ea.constructor.name]);
          var A = N.xeval.str(ha)(".")(),
              la = M.rightOrThrow(M.readNonEmptyString("Policy")(A))();

          ea = function () {
            var Fa = e.map(v.functorMaybe)(K.localName)(K.fromNode(ha));
            if (Fa instanceof v.Just && Fa.value0 === M.freeTextPolicyP) return new V.FreeTextPolicy(la);

            if (Fa instanceof v.Just && Fa.value0 === M.refPolicyP) {
              Fa = w.parsePublicURL(A);
              if (Fa instanceof c.Left) return O["throw"]("In refPolicy URL parsing: " + Fa.value0)();
              if (Fa instanceof c.Right) return new V.RefPolicy(Fa.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 401, column 37 - line 403, column 45): " + [Fa.constructor.name]);
            }

            if (Fa instanceof v.Just) return O["throw"]("invalid element '" + (Fa.value0 + "' as child of institutionPolicy"))();
            if (Fa instanceof v.Nothing) return O["throw"]("unable to convert policy child Node with name '" + (z.nodeName(ha) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 399, column 17 - line 407, column 56): " + [Fa.constructor.name]);
          }();

          var ua = N.xeval.str(ba)(G.at(G.stringXPath)(M.polTypeAT))();
          ua = M.rightOrThrow(Ba(ua))();
          var Ma = N.xeval.str(ba)(G.at(G.stringXPath)(M.appliesToProdAT))();
          Ma = M.rightOrThrow(Ga(Ma))();
          return {
            policy: ea,
            policyType: ua,
            appliesToProduct: Ma
          };
        };
      };

      return function () {
        var ba = N.xeval.any(va)(ra)(I.ordered_node_snapshot_type)();
        ba = R.snapshot(ba)();
        ba = H.sequence(H.traversableArray)(J.applicativeEffect)(e.map(e.functorArray)(Aa)(ba))();
        ba = p.fromArray(ba);
        if (ba instanceof v.Just) return ba.value0;
        if (ba instanceof v.Nothing) return O["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 381, column 3 - line 383, column 67): " + [ba.constructor.name]);
      };
    };
  },
      ka = function ka(N) {
    return function (va) {
      var ra = function ra(ba) {
        return function () {
          var ea = N.xeval.str(ba)(G.xx(G.stringXPath)(M.pubYearP))();
          ea = M.rightOrThrow(M.readNonEmptyString("PubYear")(ea))();
          return D.intToNat(l.round(Q.readInt(10)(r.toString(ea))));
        };
      },
          Aa = G.xx(G.stringXPath)(M.basicMetaP);

      return function () {
        var ba = M.unsafeSingleNodeValue(N)(va)(Aa)(),
            ea = f.bindFlipped(J.bindEffect)(M.rightOrThrow)(x(N)(M.titleP)(ba))(),
            ha = f.bindFlipped(J.bindEffect)(M.rightOrThrow)(x(N)(M.creatorP)(ba))();
        ba = ra(ba)();
        return {
          titles: ea,
          creators: ha,
          publicationYear: ba
        };
      };
    };
  },
      ca = function ca(N) {
    var va = r.toString(N);
    return function () {
      var ra = B.stripSuffix("Z")(va);
      if (ra instanceof v.Just) ra = 10 >= E.length(ra.value0) ? ra.value0 + "T00:00:00.000Z" : va;else if (ra instanceof v.Nothing) ra = va;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 98, column 24 - line 100, column 23): " + [ra.constructor.name]);
      ra = t.parse(ra)();
      return v.fromMaybe(u.bottom(y.boundedDateTime))(t.toDateTime(ra));
    };
  },
      P = function P(N) {
    return function () {
      var va = N.xevalRoot.str(M.dateRootP)();
      va = M.rightOrThrow(M.readNonEmptyString("Date")(va))();
      return ca(va)();
    };
  },
      Z = function Z(N) {
    return function () {
      var va = N.xevalRoot.str(M.lastModRootP)();
      va = M.rightOrThrow(M.readNonEmptyString("ModDate")(va))();
      return ca(va)();
    };
  },
      xa = function xa(N) {
    return function (va) {
      return function (ra) {
        return function () {
          var Aa = N.xeval.str(ra)(va)();
          Aa = w.parsePublicURL(Aa);
          if (Aa instanceof c.Left) return O["throw"](Aa.value0)();
          if (Aa instanceof c.Right) return Aa.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 442, column 3 - line 444, column 26): " + [Aa.constructor.name]);
        };
      };
    };
  },
      W = function W(N) {
    return function (va) {
      var ra = function ra(ha) {
        return function () {
          var A = ha();
          return M.rightOrThrow(M.readNonEmptyString("SuperOrg")(A))();
        };
      },
          Aa = function Aa(ha) {
        return function () {
          var A = N.xeval.nodeMay(ha)(G.xx(G.stringXPath)(M.superOrgNameP))();
          return H.traverse(H.traversableMaybe)(J.applicativeEffect)(function (la) {
            return ra(N.xeval.str(la)("."));
          })(A)();
        };
      },
          ba = function ba(ha) {
        return function () {
          var A = M.unsafeSingleNodeValue(N)(ha)(G.xx(G.stringXPath)(M.instSustainP))(),
              la = xa(N)(G.xx(G.stringXPath)(M.missionUrlP))(A)();
          A = xa(N)(G.xx(G.stringXPath)(M.fundingUrlP))(A)();
          return {
            missionStatementURL: la,
            fundingStatementURL: A
          };
        };
      },
          ea = function ea(ha) {
        var A = G.xx(G.stringXPath)(M.instContactP);
        return function () {
          var la = M.unsafeSingleNodeValue(N)(ha)(A)(),
              ua = N.xeval.str(la)(G.at(G.stringXPath)(M.instContactTypeAT))();
          ua = M.rightOrThrow(ja(ua))();
          la = N.xeval.str(la)(".")();
          la = L.validate(la);
          if (la instanceof c.Left) la = O["throw"]("Error in validating email address for InstitutionContact: " + la.value0)();else if (la instanceof c.Right) la = la.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 345, column 23 - line 349, column 28): " + [la.constructor.name]);
          return {
            emailAddress: la,
            contactType: ua
          };
        };
      };

      return function () {
        var ha = M.unsafeSingleNodeValue(N)(va)(G.xx(G.stringXPath)(M.locP))(),
            A = ia(N)(ha)(),
            la = f.join(J.bindEffect)(e.mapFlipped(J.functorEffect)(N.xeval.str(ha)(G.xx(G.stringXPath)(M.instNameP)))(function (fb) {
          return M.rightOrThrow(M.readNonEmptyString("Institution Name")(fb));
        }))(),
            ua = N.xeval.str(ha)(G.xx(G.stringXPath)(M.instTypeP))();
        ua = M.rightOrThrow(fa(ua))();
        var Ma = Aa(ha)(),
            Fa = ea(ha)(),
            Na = ba(ha)(),
            Ra = da(N)(ha)();
        ha = N.xeval.str(ha)(G.xx(G.stringXPath)(M.versioningP))();
        ha = M.rightOrThrow(ya(ha))();
        return {
          institutionID: A,
          institutionName: la,
          institutionType: ua,
          superOrganizationName: Ma,
          institutionContact: Fa,
          institutionSustainability: Na,
          institutionPolicies: Ra,
          versioning: ha
        };
      };
    };
  },
      Ja = function Ja(N) {
    return function (va) {
      var ra = function ra(ba) {
        return function () {
          var ea = N.xeval.str(ba)(G.at(G.stringXPath)(M.relTypeAT))();
          return M.rightOrThrow(Da(ea))();
        };
      },
          Aa = function Aa(ba) {
        return function (ea) {
          return H.sequence(H.traversableMaybe)(J.applicativeEffect)(f.bind(v.bindMaybe)(ba)(function (ha) {
            return f.bind(v.bindMaybe)(ea)(function (A) {
              return d.pure(v.applicativeMaybe)(h.lift2(J.applyEffect)(function (la) {
                return function (ua) {
                  return {
                    url: la,
                    relationType: ua
                  };
                };
              })(ha)(A));
            });
          }));
        };
      };

      return function () {
        var ba = N.xeval.nodeMay(va)(G.xx(G.stringXPath)(M.resMetaSourceP))(),
            ea = e.map(v.functorMaybe)(xa(N)("."))(ba);
        ba = e.map(v.functorMaybe)(ra)(ba);
        return Aa(ea)(ba)();
      };
    };
  },
      Oa = function Oa(N) {
    var va = function va(ra) {
      return function () {
        var Aa = ka(N)(ra)(),
            ba = sa(N)(ra)(),
            ea = za(N)(ra)(),
            ha = wa(N)(ra)(),
            A = Ja(N)(ra)(),
            la = W(N)(ra)();
        return {
          basicMetadata: Aa,
          resourceID: ba,
          resourceType: ea,
          format: ha,
          resourceMetadataSource: A,
          location: la
        };
      };
    };

    return function () {
      var ra = N.xevalRoot.any(M.sProdRootP)(I.ordered_node_snapshot_type)();
      ra = R.snapshot(ra)();
      ra = H.sequence(H.traversableArray)(J.applicativeEffect)(e.map(e.functorArray)(va)(ra))();
      ra = p.fromArray(ra);
      if (ra instanceof v.Just) return ra.value0;
      if (ra instanceof v.Nothing) return O["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 170, column 3 - line 172, column 70): " + [ra.constructor.name]);
    };
  };

  b.readRecord = function (N) {
    return function () {
      var va = ta(N)(),
          ra = P(N)(),
          Aa = Z(N)(),
          ba = Ia(N)(),
          ea = Oa(N)();
      return {
        identifier: va,
        date: ra,
        lastModified: Aa,
        relatedIdentifiers: ba,
        supplementaryProducts: ea
      };
    };
  };

  b.readIdentifierType = S;
  b.parseDate = ca;
  b.readRelationType = Da;
  b.readResourceTypeGeneral = ma;
  b.readInstitutionType = fa;
  b.readInstitutionContactType = ja;
  b.readPolicyType = Ba;
  b.readBoolean = ya;
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
  b.outerHTML = a.outerHTML;
})(PS);

(function (a) {
  a["Metajelo.XPaths.Write"] = a["Metajelo.XPaths.Write"] || {};

  var b = a["Metajelo.XPaths.Write"],
      d = a["Control.Applicative"],
      h = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Foldable"],
      m = a["Data.Functor"],
      q = a["Data.JSDate"],
      k = a["Data.Maybe"],
      p = a["Data.Natural"],
      u = a["Data.Show"],
      y = a["Data.Traversable"],
      c = a["Data.Unit"],
      g = a["Data.XPath"],
      e = a["DataCite.Types.Common"],
      l = a.Effect,
      t = a["Metajelo.Types"],
      v = a["Metajelo.XPaths"],
      D = a["Nonbili.DOM"],
      E = a["Text.Email.Parser"],
      B = a["Text.URL.Validate"],
      r = a["Web.DOM.Document"],
      C = a["Web.DOM.Element"],
      H = a["Web.DOM.Node"],
      G = function G(da) {
    return function (ka) {
      return function (ca) {
        return function (P) {
          var Z = C.fromNode(ca);
          return function () {
            y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(Z)(function (xa) {
              return C.setAttribute(da)(u.show(e.showIdentifierType)(P))(xa);
            }))();
            return c.unit;
          };
        };
      };
    };
  },
      F = a["Data.String.NonEmpty.Internal"].toString,
      J = function J(da) {
    return function (ka) {
      return function (ca) {
        return function (P) {
          return function () {
            H.setTextContent(F(P.identifier))(ca)();
            return G(da)(ka)(ca)(P.identifierType)();
          };
        };
      };
    };
  },
      O = function O(da) {
    return function (ka) {
      return function () {
        var ca = v.unsafeSingleNodeValue(da)(da.recNode)(g.xx(g.stringXPath)(v.idP))();
        return J(v.idTypeAT)(da)(ca)(ka)();
      };
    };
  },
      Q = function Q(da) {
    return function (ka) {
      return function () {
        y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.map(k.functorMaybe)(H.setTextContent(F(da)))(ka))();
        return c.unit;
      };
    };
  },
      V = function V(da) {
    return function () {
      var ka = q.toISOString(q.fromDateTime(da))();
      return v.rightOrThrow(v.readNonEmptyString("(generic date)")(ka))();
    };
  },
      M = function M(da) {
    return function (ka) {
      return function () {
        var ca = V(ka)(),
            P = da.xevalRoot.nodeMay(v.dateRootP)();
        return Q(ca)(P)();
      };
    };
  },
      L = function L(da) {
    return function (ka) {
      return function () {
        var ca = V(ka)(),
            P = da.xevalRoot.nodeMay(v.lastModRootP)();
        return Q(ca)(P)();
      };
    };
  },
      w = function w(da) {
    return function (ka) {
      var ca = C.prefix(da.recElem);
      return function () {
        if (ca instanceof k.Just) var P = ca.value0 + ":";else if (ca instanceof k.Nothing) P = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 250, column 20 - line 252, column 18): " + [ca.constructor.name]);
        P += ka;
        return r.createElementNS(new k.Just(da.ns))(P)(da.doc)();
      };
    };
  },
      R = function R(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = w(da)(ca)();
          H.appendChild(C.toNode(P))(ka)();
          return P;
        };
      };
    };
  },
      I = function I(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = R(da)(ka)(v.instContactP)();
          y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(ca.contactType)(function (Z) {
            return C.setAttribute(v.instContactTypeAT)(u.show(t.showInstitutionContactType)(Z))(P);
          }))();
          return H.setTextContent(E.toString(ca.emailAddress))(C.toNode(P))();
        };
      };
    };
  },
      K = function K(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = m.map(l.functorEffect)(C.toNode)(R(da)(ka)(v.instIdP))();
          return J(v.idTypeAT)(da)(P)(ca)();
        };
      };
    };
  },
      z = function z(da) {
    return function (ka) {
      return f.for_(l.applicativeEffect)(h.foldableNonEmptyArray)(ka)(function (ca) {
        return function () {
          var P = R(da)(da.recNode)(v.relIdP)(),
              Z = C.toNode(P);
          H.setTextContent(F(ca.identifier))(Z)();
          C.setAttribute(v.relIdTypeAT)(u.show(e.showIdentifierType)(ca.identifierType))(P)();
          return C.setAttribute(v.relTypeAT)(u.show(e.showRelationType)(ca.relationType))(P)();
        };
      });
    };
  },
      Y = function Y(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = m.map(l.functorEffect)(C.toNode)(R(da)(ka)(v.resIdP))();
          return J(v.resIdTypeAT)(da)(P)(ca)();
        };
      };
    };
  },
      ma = function ma(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = R(da)(ka)(v.resMetaSourceP)();
          H.setTextContent(B.urlToString(ca.url))(C.toNode(P))();
          return C.setAttribute(v.relTypeAT)(u.show(e.showRelationType)(ca.relationType))(P)();
        };
      };
    };
  },
      za = function za(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = R(da)(ka)(v.resTypeP)();
          H.setTextContent(ca.description)(C.toNode(P))();
          return C.setAttribute(v.resTypeGenAT)(u.show(e.showResourceTypeGeneral)(ca.generalType))(P)();
        };
      };
    };
  },
      Da = function Da(da) {
    return function (ka) {
      return function (ca) {
        return function (P) {
          return function () {
            var Z = m.map(l.functorEffect)(C.toNode)(R(ka)(ca)(da))();
            return H.setTextContent(P)(Z)();
          };
        };
      };
    };
  },
      Ba = function Ba(da) {
    return function (ka) {
      return function (ca) {
        return function (P) {
          return Da(da)(ka)(ca)(F(P));
        };
      };
    };
  },
      x = function x(da) {
    return function (ka) {
      return function (ca) {
        return f.for_(l.applicativeEffect)(h.foldableNonEmptyArray)(ca)(function (P) {
          return Ba(v.creatorP)(da)(ka)(P);
        });
      };
    };
  },
      fa = function fa(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = m.map(l.functorEffect)(C.toNode)(R(da)(ka)(v.formatCP))();
          return f.for_(l.applicativeEffect)(f.foldableArray)(ca)(function (Z) {
            return Ba(v.formatP)(da)(P)(Z);
          })();
        };
      };
    };
  },
      ja = function ja(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = R(da)(ka)(v.instPolicyP)(),
              Z = C.toNode(P);
          y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(ca.policyType)(function (xa) {
            return C.setAttribute(v.polTypeAT)(u.show(t.showPolicyType)(xa))(P);
          }))();
          y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(ca.appliesToProduct)(function (xa) {
            return C.setAttribute(v.appliesToProdAT)(u.show(u.showBoolean)(xa))(P);
          }))();
          if (ca.policy instanceof t.FreeTextPolicy) return Ba(v.freeTextPolicyP)(da)(Z)(ca.policy.value0)();
          if (ca.policy instanceof t.RefPolicy) return Ba(v.refPolicyP)(da)(Z)(B.urlToNEString(ca.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 217, column 3 - line 220, column 27): " + [ca.policy.constructor.name]);
        };
      };
    };
  },
      S = function S(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = m.map(l.functorEffect)(C.toNode)(R(da)(ka)(v.instPolicyCP))();
          return f.for_(l.applicativeEffect)(h.foldableNonEmptyArray)(ca)(function (Z) {
            return ja(da)(P)(Z);
          })();
        };
      };
    };
  },
      ia = function ia(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = m.map(l.functorEffect)(C.toNode)(R(da)(ka)(v.instSustainP))();
          Ba(v.missionUrlP)(da)(P)(B.urlToNEString(ca.missionStatementURL))();
          return Ba(v.fundingUrlP)(da)(P)(B.urlToNEString(ca.fundingStatementURL))();
        };
      };
    };
  },
      Ia = function Ia(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = R(da)(ka)(v.locP)(),
              Z = C.toNode(P);
          K(da)(Z)(ca.institutionID)();
          Ba(v.instNameP)(da)(Z)(ca.institutionName)();
          Da(v.instTypeP)(da)(Z)(u.show(t.showInstitutionType)(ca.institutionType))();
          y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(ca.superOrganizationName)(function (xa) {
            return Ba(v.superOrgNameP)(da)(Z)(xa);
          }))();
          I(da)(Z)(ca.institutionContact)();
          ia(da)(Z)(ca.institutionSustainability)();
          S(da)(Z)(ca.institutionPolicies)();
          return Da(v.versioningP)(da)(Z)(u.show(u.showBoolean)(ca.versioning))();
        };
      };
    };
  },
      sa = function sa(da) {
    return function (ka) {
      return function (ca) {
        return f.for_(l.applicativeEffect)(h.foldableNonEmptyArray)(ca)(function (P) {
          return Ba(v.titleP)(da)(ka)(P);
        });
      };
    };
  },
      ta = function ta(da) {
    return function (ka) {
      return function (ca) {
        return function () {
          var P = m.map(l.functorEffect)(C.toNode)(R(da)(ka)(v.basicMetaP))();
          sa(da)(P)(ca.titles)();
          x(da)(P)(ca.creators)();
          P = m.map(l.functorEffect)(C.toNode)(R(da)(P)(v.pubYearP))();
          return H.setTextContent(u.show(p.showNatural)(ca.publicationYear))(P)();
        };
      };
    };
  },
      wa = function wa(da) {
    return function (ka) {
      return function () {
        var ca = v.unsafeSingleNodeValue(da)(da.recNode)(g.xx(g.stringXPath)(v.sProdCP))(),
            P = m.map(l.functorEffect)(C.toNode)(R(da)(ca)(v.sProdP))();
        ta(da)(P)(ka.basicMetadata)();
        y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(ka.resourceID)(function (Z) {
          return Y(da)(P)(Z);
        }))();
        za(da)(P)(ka.resourceType)();
        fa(da)(P)(ka.format)();
        y.sequence(y.traversableMaybe)(l.applicativeEffect)(m.mapFlipped(k.functorMaybe)(ka.resourceMetadataSource)(function (Z) {
          return ma(da)(P)(Z);
        }))();
        return Ia(da)(P)(ka.location)();
      };
    };
  },
      ya = function ya(da) {
    return function (ka) {
      return f.for_(l.applicativeEffect)(h.foldableNonEmptyArray)(ka)(function (ca) {
        return wa(da)(ca);
      });
    };
  },
      Ga = function Ga(da) {
    return function (ka) {
      return function () {
        O(da)(ka.identifier)();
        M(da)(ka.date)();
        L(da)(ka.lastModified)();
        z(da)(ka.relatedIdentifiers)();
        return ya(da)(ka.supplementaryProducts)();
      };
    };
  };

  b.recordToString = function (da) {
    return function () {
      var ka = v.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      Ga(ka)(da)();
      ka = r.documentElement(ka.doc)();
      return k.maybe(d.pure(l.applicativeEffect)(""))(D.outerHTML)(ka)();
    };
  };

  b.dateTimeToStr = V;
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

  b.target = a;
})(PS);

(function (a) {
  a.children = function (b) {
    return function (d) {
      return function () {
        return d[b];
      };
    };
  }("children");
})(PS["Web.DOM.ParentNode"] = PS["Web.DOM.ParentNode"] || {});

(function (a) {
  a["Web.DOM.ParentNode"] = a["Web.DOM.ParentNode"] || {};
  a["Web.DOM.ParentNode"].children = a["Web.DOM.ParentNode"].children;
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

  b.fromElement = a;
  b.files = q;
  b.value = d.value;
  b.setValue = d.setValue;
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var b = a["Metajelo.FormUtil"],
      d = a["Concur.Core.FRP"],
      h = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Props"],
      m = a["Concur.Core.Types"],
      q = a["Concur.React.DOM"],
      k = a["Concur.React.Props"],
      p = a["Control.Alt"],
      u = a["Control.Applicative"],
      y = a["Control.Apply"],
      c = a["Control.Bind"],
      g = a["Control.Cofree"],
      e = a["Control.Plus"],
      l = a["Data.Array"],
      t = a["Data.Array.NonEmpty"],
      v = a["Data.Bifunctor"],
      D = a["Data.Bounded"],
      E = a["Data.Either"],
      B = a["Data.Enum"],
      r = a["Data.Eq"],
      C = a["Data.Foldable"],
      H = a["Data.Functor"],
      G = a["Data.Generic.Rep"],
      F = a["Data.Generic.Rep.Bounded"],
      J = a["Data.Generic.Rep.Enum"],
      O = a["Data.Generic.Rep.Eq"],
      Q = a["Data.Generic.Rep.Ord"],
      V = a["Data.Generic.Rep.Show"],
      M = a["Data.Int"],
      L = a["Data.Maybe"],
      w = a["Data.Monoid"],
      R = a["Data.Natural"],
      I = a["Data.Ord"],
      K = a["Data.Profunctor.Strong"],
      z = a["Data.Semigroup"],
      Y = a["Data.Show"],
      ma = a["Data.String.Common"],
      za = a["Data.String.NonEmpty.Internal"],
      Da = a["Data.Symbol"],
      Ba = a["Data.Traversable"],
      x = a["Data.Tuple"],
      fa = a["Data.Unfoldable1"],
      ja = a["Data.Unit"],
      S = a["DataCite.Types.Common"],
      ia = a.Effect,
      Ia = a["Effect.Class"],
      sa = a["Effect.Exception"],
      ta = a["Effect.Now"],
      wa = a["Effect.Unsafe"],
      ya = a["Foreign.Object"],
      Ga = a.Global,
      da = a["Metajelo.CSS.UI.ClassProps"],
      ka = a["Metajelo.SchemaInfo"],
      ca = a["Metajelo.Types"],
      P = a["Metajelo.XPaths.Read"],
      Z = a["Metajelo.XPaths.Write"],
      xa = a["React.SyntheticEvent"],
      W = a["Text.Email.Parser"],
      Ja = a["Text.Email.Validate"],
      Oa = a["Text.URL.Validate"],
      N = a["Web.DOM.Document"],
      va = a["Web.DOM.Element"],
      ra = a["Web.DOM.HTMLCollection"],
      Aa = a["Web.DOM.NonElementParentNode"],
      ba = a["Web.DOM.ParentNode"],
      ea = a["Web.HTML"],
      ha = a["Web.HTML.HTMLDocument"],
      A = a["Web.HTML.HTMLInputElement"],
      la = a["Web.HTML.Window"],
      ua = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      Ma = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      Fa = function () {
    function T(aa) {
      this.value0 = aa;
    }

    T.create = function (aa) {
      return new T(aa);
    };

    return T;
  }(),
      Na = function () {
    function T(aa) {
      this.value0 = aa;
    }

    T.create = function (aa) {
      return new T(aa);
    };

    return T;
  }(),
      Ra = function Ra(T, aa, Ka) {
    this.fromOptionValue = T;
    this.toOptionLabel = aa;
    this.toOptionValue = Ka;
  },
      fb = function fb() {
    var T = ea.window();
    T = la.document(T)();
    return ha.toDocument(T);
  },
      gb = function gb(T) {
    if (T instanceof Fa || T instanceof Na) return T.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 376, column 1 - line 376, column 34): " + [T.constructor.name]);
  },
      lb = function lb(T) {
    return q.input(h.widgetLiftWidget)([k.defaultValue(T), H.map(f.functorProps)(k.unsafeTargetValue)(k.onChange)]);
  },
      ib = function ib(T) {
    return c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(T)(function (aa) {
      return u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(za.fromString(ma.trim(aa)));
    });
  },
      jb = function jb(T) {
    return function (aa) {
      aa = ya.lookup(T)(aa);
      if (aa instanceof L.Just) return aa.value0;
      if (aa instanceof L.Nothing) return "";
      throw Error("Failed pattern match at Metajelo.FormUtil (line 90, column 21 - line 92, column 16): " + [aa.constructor.name]);
    };
  },
      mb = function mb(T) {
    var aa = T ? "Hide Descriptions" : "Show Descriptions";
    return q.div_(m.widgetShiftMap)([])(H.voidRight(m.widgetFunctor)(!T)(q.button_(m.widgetShiftMap)([k.onClick])(q.text(h.widgetLiftWidget)(aa))));
  },
      hb = function hb(T) {
    return d.step(T)(c.bind(m.widgetBind)(mb(T))(function (aa) {
      return u.pure(m.widgetApplicative)(hb(aa));
    }));
  },
      Ua = function Ua(T) {
    return function (aa) {
      return function (Ka) {
        return function () {
          var Ea = fb();
          Ea = N.toNonElementParentNode(Ea);
          Ea = Aa.getElementById(T)(Ea)();
          if (Ea instanceof L.Just) return Ea = va.toParentNode(Ea.value0), Ea = ba.children(Ea)(), Ea = ra.toArray(Ea)(), Ea = l.filter(function (Pa) {
            return va.tagName(Pa) === aa;
          })(Ea), Ea = l.catMaybes(H.map(H.functorArray)(A.fromElement)(Ea)), C.for_(ia.applicativeEffect)(C.foldableArray)(Ea)(A.setValue(Ka))();
          if (Ea instanceof L.Nothing) return ja.unit;
          throw Error("Failed pattern match at Metajelo.FormUtil (line 506, column 3 - line 519, column 25): " + [Ea.constructor.name]);
        };
      };
    };
  },
      nb = function nb(T) {
    return function (aa) {
      return aa < T ? [] : l.range(T)(aa);
    };
  },
      Za = function Za(T) {
    return "FreeTextPolicy" === T ? u.pure(E.applicativeEither)(ua.value) : "RefPolicy" === T ? u.pure(E.applicativeEither)(Ma.value) : E.Left.create("Unknown Policy: '" + (T + "'"));
  },
      bb = ya.unions(C.foldableArray)([ka.descrAttrMap, ka.descrCTypMap, ka.descrEleMap, ka.descrSTypMap]),
      Ta = function Ta(T) {
    return function (aa) {
      return C.fold(C.foldableMaybe)(w.monoidString)(H.map(L.functorMaybe)(Y.show(T))(aa));
    };
  },
      zb = new Ra(function (T) {
    return L.fromJust()(E.hush(P.readResourceTypeGeneral(T)));
  }, Y.show(S.showResourceTypeGeneral), Y.show(S.showResourceTypeGeneral)),
      Ab = new Ra(function (T) {
    return L.fromJust()(E.hush(P.readRelationType(T)));
  }, Y.show(S.showRelationType), Y.show(S.showRelationType)),
      sb = new Ra(function (T) {
    return L.fromJust()(E.hush(P.readInstitutionType(T)));
  }, Y.show(ca.showInstitutionType), Y.show(ca.showInstitutionType)),
      Bb = new Ra(function (T) {
    return L.fromJust()(E.hush(P.readIdentifierType(T)));
  }, Y.show(S.showIdentifierType), Y.show(S.showIdentifierType)),
      tb = function tb(T) {
    return T instanceof Fa ? !0 : !1;
  },
      Cb = function Cb(T) {
    return function () {
      var aa = fb();
      aa = N.toNonElementParentNode(aa);
      aa = Aa.getElementById(T)(aa)();
      return Ba.traverse(Ba.traversableMaybe)(ia.applicativeEffect)(A.value)(c.bind(L.bindMaybe)(aa)(function (Ka) {
        return A.fromElement(Ka);
      }))();
    };
  },
      Xa = new G.Generic(function (T) {
    if (T instanceof ua) return new G.Inl(G.NoArguments.value);
    if (T instanceof Ma) return new G.Inr(G.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 318, column 1 - line 318, column 58): " + [T.constructor.name]);
  }, function (T) {
    if (T instanceof G.Inl) return ua.value;
    if (T instanceof G.Inr) return Ma.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 318, column 1 - line 318, column 58): " + [T.constructor.name]);
  }),
      ub = new Y.Show(V.genericShow(Xa)(V.genericShowSum(V.genericShowConstructor(V.genericShowArgsNoArguments)(new Da.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(V.genericShowConstructor(V.genericShowArgsNoArguments)(new Da.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      Db = new Ra(function () {
    var T = L.fromMaybe(ua.value);
    return function (aa) {
      return T(E.hush(Za(aa)));
    };
  }(), Y.show(ub), Y.show(ub)),
      La = new H.Functor(function (T) {
    return function (aa) {
      if (aa instanceof Fa) return Fa.create(H.map(L.functorMaybe)(T)(aa.value0));
      if (aa instanceof Na) return Na.create(H.map(L.functorMaybe)(T)(aa.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 363, column 1 - line 365, column 48): " + [T.constructor.name, aa.constructor.name]);
    };
  }),
      pb = function pb(T) {
    return function (aa) {
      return function (Ka) {
        return d.step(Ka)(function () {
          var Ea = L.isJust(Ka) ? !0 : !1;
          return c.bind(m.widgetBind)(q.select(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.value(L.maybe("")(aa.toOptionValue)(Ka)), H.map(f.functorProps)(function () {
            var Pa = aa.fromOptionValue;
            return function (Va) {
              return Pa(k.unsafeTargetValue(Va));
            };
          }())(k.onChange)])(l.cons(q.option(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.disabled(Ea)])([q.text(h.widgetLiftWidget)("Select ...")]))(H.mapFlipped(H.functorArray)(B.upFromIncluding(T.Enum1())(fa.unfoldable1Array)(D.bottom(T.Bounded0())))(function (Pa) {
            return q.option(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.value((0, aa.toOptionValue)(Pa))])([q.text(h.widgetLiftWidget)((0, aa.toOptionLabel)(Pa))]);
          }))))(function (Pa) {
            return u.pure(m.widgetApplicative)(pb(T)(aa)(new L.Just(Pa)));
          });
        }());
      };
    };
  },
      vb = function vb(T) {
    return function (aa) {
      return function (Ka) {
        return function (Ea) {
          return function (Pa) {
            return C.fold(T)(Ka)(H.map(aa)(Ea)(Pa));
          };
        };
      };
    };
  },
      Ha = function Ha(T) {
    T = vb(C.foldableMaybe)(L.functorMaybe)(w.monoidString)(za.toString)(T);
    T = d.debounce(w.monoidArray)(1E3)(T)(lb);
    return ib(T);
  },
      ob = function ob(T) {
    return L.maybe(w.mempty(m.widgetMonoid(w.monoidArray)))(function (aa) {
      return q.div(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.style({
        color: "red"
      })])([q.text(h.widgetLiftWidget)(Y.show(T)(aa))]);
    });
  },
      Eb = new r.Eq(O.genericEq(Xa)(O.genericEqSum(O.genericEqConstructor(O.genericEqNoArguments))(O.genericEqConstructor(O.genericEqNoArguments)))),
      wb = new I.Ord(function () {
    return Eb;
  }, function (T) {
    return function (aa) {
      return Q.genericCompare(Xa)(Q.genericOrdSum(Q.genericOrdConstructor(Q.genericOrdNoArguments))(Q.genericOrdConstructor(Q.genericOrdNoArguments)))(T)(aa);
    };
  }),
      Fb = new B.Enum(function () {
    return wb;
  }, J.genericPred(Xa)(J.genericEnumSum(J.genericEnumConstructor(J.genericEnumNoArguments))(F.genericTopConstructor(F.genericTopNoArguments))(J.genericEnumConstructor(J.genericEnumNoArguments))(F.genericBottomConstructor(F.genericBottomNoArguments))), J.genericSucc(Xa)(J.genericEnumSum(J.genericEnumConstructor(J.genericEnumNoArguments))(F.genericTopConstructor(F.genericTopNoArguments))(J.genericEnumConstructor(J.genericEnumNoArguments))(F.genericBottomConstructor(F.genericBottomNoArguments)))),
      qb = function qb(T) {
    return function (aa) {
      return aa instanceof L.Nothing ? "(None)" : Ta(T)(aa);
    };
  },
      Gb = new Ra(function (T) {
    return E.hush(P.readBoolean(T));
  }, qb(Y.showBoolean), Ta(Y.showBoolean)),
      Hb = new Ra(function () {
    var T = c.join(L.bindMaybe);
    return function (aa) {
      return T(E.hush(P.readInstitutionContactType(aa)));
    };
  }(), qb(ca.showInstitutionContactType), Ta(ca.showInstitutionContactType)),
      Ib = new Ra(function () {
    var T = c.join(L.bindMaybe);
    return function (aa) {
      return T(E.hush(P.readPolicyType(aa)));
    };
  }(), qb(ca.showPolicyType), Ta(ca.showPolicyType)),
      n = function n(T) {
    return H.voidRight(m.widgetFunctor)(!T)(q.input(h.widgetLiftWidget)([k._type("checkbox"), k.checked(T), k.onChange]));
  },
      $a = function $a(T) {
    return d.step(T)(c.bind(m.widgetBind)(n(T))(function (aa) {
      return u.pure(m.widgetApplicative)($a(aa));
    }));
  },
      kb = new D.Bounded(function () {
    return wb;
  }, F.genericBottom(Xa)(F.genericBottomSum(F.genericBottomConstructor(F.genericBottomNoArguments))), F.genericTop(Xa)(F.genericTopSum(F.genericTopConstructor(F.genericTopNoArguments)))),
      Jb = new B.BoundedEnum(function () {
    return kb;
  }, function () {
    return Fb;
  }, J.genericCardinality(Xa)(J.genericBoundedEnumSum(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))), J.genericFromEnum(Xa)(J.genericBoundedEnumSum(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))), J.genericToEnum(Xa)(J.genericBoundedEnumSum(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments)))),
      Mb = new y.Apply(function () {
    return La;
  }, function (T) {
    return function (aa) {
      if (T instanceof Fa && aa instanceof Fa || T instanceof Fa && aa instanceof Na || T instanceof Na && aa instanceof Fa) return Fa.create(y.apply(L.applyMaybe)(T.value0)(aa.value0));
      if (T instanceof Na && aa instanceof Na) return Na.create(y.apply(L.applyMaybe)(T.value0)(aa.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 366, column 1 - line 370, column 63): " + [T.constructor.name, aa.constructor.name]);
    };
  }),
      Nb = new u.Applicative(function () {
    return Mb;
  }, function (T) {
    return Fa.create(new L.Just(T));
  }),
      Lb = function Lb(T) {
    return function (aa) {
      var Ka = x.snd(aa),
          Ea = x.fst(aa),
          Pa = new Fa(L.Nothing.value);

      aa = function () {
        var Wa = I.max(I.ordInt)(0)(Ea - l.length(Ka) | 0);
        return z.append(z.semigroupArray)(H.map(H.functorArray)(u.pure(Nb))(Ka))(H.mapFlipped(H.functorArray)(nb(1)(Wa))(function (cb) {
          return Pa;
        }));
      }();

      var Va = function Va(Wa) {
        return d.step(Wa)(c.bind(m.widgetBind)(H.voidRight(m.widgetFunctor)(Na.create(gb(Wa)))(q.button(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.onClick, da.deleteItem])([q.text(h.widgetLiftWidget)("Delete")])))(function (cb) {
          return u.pure(m.widgetApplicative)(Va(cb));
        }));
      },
          Ya = function Ya(Wa) {
        return q.li_(g.shiftMapCofree(w.monoidArray))([])(c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(T(gb(Wa)))(function (cb) {
          return c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(Va(new Fa(cb)))(function (xb) {
            return u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(xb);
          });
        }));
      },
          Kb = function Kb(Wa) {
        if (Wa instanceof Na) return d.step(new Na(L.Nothing.value))(w.mempty(m.widgetMonoid(w.monoidArray)));
        if (Wa instanceof Fa) return Ya(Wa);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 397, column 23 - line 399, column 35): " + [Wa.constructor.name]);
      };

      return q.div_(g.shiftMapCofree(w.monoidArray))([])(c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(function (Wa) {
        return function (cb) {
          return d.loopS(w.monoidArray)(new x.Tuple(Wa, cb))(function (xb) {
            return q.ul_(g.shiftMapCofree(w.monoidArray))([])(function () {
              x.fst(xb);
              var U = x.snd(xb);
              return c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(Ba.traverse(Ba.traversableArray)(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(Kb)(U))(function (X) {
                return c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(d.step(0)(H.voidRight(m.widgetFunctor)(u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(1))(q.button(m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([k.onClick, da.addItem])([q.text(h.widgetLiftWidget)("Add item")]))))(function (oa) {
                  var na = l.filter(tb)(X),
                      pa = l.length(na) + oa | 0;
                  oa = H.mapFlipped(H.functorArray)(nb(1)(oa))(function (qa) {
                    return Pa;
                  });
                  return u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(x.Tuple.create(pa)(z.append(z.semigroupArray)(na)(oa)));
                });
              });
            }());
          });
        };
      }(Ea)(aa))(function (Wa) {
        return u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(K.second(K.strongFn)(function () {
          var cb = H.map(H.functorArray)(gb);
          return function (xb) {
            return l.catMaybes(cb(xb));
          };
        }())(Wa));
      }));
    };
  };

  b.menuSignal = pb;
  b.textInput = Ha;

  b.dateInput = function (T) {
    var aa = wa.unsafePerformEffect(function (Pa) {
      return function () {
        var Va = ta.nowDateTime();
        Va = L.fromMaybe(Va)(E.hush(Pa));
        Va = sa["try"](Z.dateTimeToStr(Va))();
        return v.lmap(E.bifunctorEither)(Y.show(sa.showError))(Va);
      };
    }(T));
    T = c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)));
    var Ka = u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)));
    if (aa instanceof E.Left) var Ea = "";else if (aa instanceof E.Right) Ea = za.toString(aa.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 170, column 31 - line 172, column 34): " + [aa.constructor.name]);
    return T(Ka(Ea))(function (Pa) {
      var Va = c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray))),
          Ya = u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)));
      if (aa instanceof E.Left) var Kb = aa.value0;else if (aa instanceof E.Right) Kb = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 173, column 21 - line 175, column 18): " + [aa.constructor.name]);
      return Va(Ya(Kb))(function (Wa) {
        return c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(q.div_(g.shiftMapCofree(w.monoidArray))([k._id("mjUI_dateInput")])(Ha(za.fromString(Pa))))(function (cb) {
          return c.discard(c.discardUnit)(g.bindCofree(m.widgetAlternative(w.monoidArray)))(u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(wa.unsafePerformEffect(Ua("mjUI_dateInput")("INPUT")(Pa))))(function () {
            return c.discard(c.discardUnit)(g.bindCofree(m.widgetAlternative(w.monoidArray)))(d.display(function () {
              if (aa instanceof E.Right) return w.mempty(m.widgetMonoid(w.monoidArray));
              if (aa instanceof E.Left) return ob(Y.showString)(new L.Just(aa.value0));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 179, column 13 - line 181, column 40): " + [aa.constructor.name]);
            }()))(function () {
              if (cb instanceof L.Just) return u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(wa.unsafePerformEffect(H.map(ia.functorEffect)(v.lmap(E.bifunctorEither)(Y.show(sa.showError)))(sa["try"](P.parseDate(cb.value0)))));
              if (cb instanceof L.Nothing) return u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(new E.Left("no date input"));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 182, column 3 - line 185, column 43): " + [cb.constructor.name]);
            });
          });
        });
      });
    });
  };

  b.natInput = function (T) {
    T = c.bind(L.bindMaybe)(H.mapFlipped(L.functorMaybe)(T)(function () {
      var aa = Y.show(Y.showInt);
      return function (Ka) {
        return aa(R.natToInt(Ka));
      };
    }()))(za.fromString);
    return c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(Ha(T))(function (aa) {
      return u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(H.map(L.functorMaybe)(function () {
        var Ka = Ga.readInt(10);
        return function (Ea) {
          return R.intToNat(M.round(Ka(za.toString(Ea))));
        };
      }())(aa));
    });
  };

  b.urlInput = function (T) {
    if (T instanceof E.Left) var aa = "";else if (T instanceof E.Right) aa = za.toString(Oa.urlToNEString(T.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 218, column 15 - line 220, column 48): " + [T.constructor.name]);
    if (T instanceof E.Left) var Ka = T.value0;else if (T instanceof E.Right) Ka = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 214, column 15 - line 216, column 20): " + [T.constructor.name]);
    return c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(Ha(za.fromString(aa)))(function (Ea) {
      var Pa = c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray))),
          Va = u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)));
      if (Ea instanceof L.Nothing) Ea = new E.Left(Ka);else if (Ea instanceof L.Just) Ea = Oa.parsePublicURL(za.toString(Ea.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 205, column 19 - line 207, column 46): " + [Ea.constructor.name]);
      return Pa(Va(Ea))(function (Ya) {
        return c.discard(c.discardUnit)(g.bindCofree(m.widgetAlternative(w.monoidArray)))(d.display(function () {
          if (Ya instanceof E.Right) return w.mempty(m.widgetMonoid(w.monoidArray));
          if (Ya instanceof E.Left) return ob(Y.showString)(new L.Just(Ya.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 208, column 13 - line 210, column 40): " + [Ya.constructor.name]);
        }()))(function () {
          return u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(Ya);
        });
      });
    });
  };

  b.emailInput = function (T) {
    if (T instanceof E.Left) var aa = "";else if (T instanceof E.Right) aa = W.toString(T.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 238, column 15 - line 240, column 33): " + [T.constructor.name]);
    if (T instanceof E.Left) var Ka = T.value0;else if (T instanceof E.Right) Ka = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 15 - line 236, column 20): " + [T.constructor.name]);
    return c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(Ha(za.fromString(aa)))(function (Ea) {
      var Pa = c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray))),
          Va = u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)));
      if (Ea instanceof L.Nothing) Ea = new E.Left(Ka);else if (Ea instanceof L.Just) Ea = Ja.validate(za.toString(Ea.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 225, column 21 - line 227, column 43): " + [Ea.constructor.name]);
      return Pa(Va(Ea))(function (Ya) {
        return c.discard(c.discardUnit)(g.bindCofree(m.widgetAlternative(w.monoidArray)))(d.display(function () {
          if (Ya instanceof E.Right) return w.mempty(m.widgetMonoid(w.monoidArray));
          if (Ya instanceof E.Left) return ob(Y.showString)(new L.Just(Ya.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 228, column 13 - line 230, column 40): " + [Ya.constructor.name]);
        }()))(function () {
          return u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(Ya);
        });
      });
    });
  };

  b.checkBoxS = $a;
  b.showDescSig = hb;

  b.mkDesc = function (T) {
    return function (aa) {
      var Ka = jb(T)(bb),
          Ea = p.alt(m.widgetAlt(w.monoidArray))(q.text(h.widgetLiftWidget)(Ka))(q["code'"](m.widgetMultiAlternative(w.monoidArray))(m.widgetShiftMap)([q.text(h.widgetLiftWidget)(" ")]));
      return aa && !ma["null"](Ka) ? Ea : w.mempty(m.widgetMonoid(w.monoidArray));
    };
  };

  b.FreeTextPolicy = ua;

  b.checkPolicy = function (T) {
    return function (aa) {
      if (T instanceof ua) {
        var Ka = H.mapFlipped(E.functorEither);
        aa = za.fromString(ma.trim(aa));
        if (aa instanceof L.Just) aa = new E.Right(aa.value0);else if (aa instanceof L.Nothing) aa = new E.Left("Empty string when NonEmptyString expected.");else throw Error("Failed pattern match at Metajelo.FormUtil (line 438, column 22 - line 440, column 63): " + [aa.constructor.name]);
        return Ka(aa)(ca.FreeTextPolicy.create);
      }

      if (T instanceof Ma) return H.mapFlipped(E.functorEither)(Oa.parsePublicURL(aa))(ca.RefPolicy.create);
      throw Error("Failed pattern match at Metajelo.FormUtil (line 348, column 25 - line 350, column 52): " + [T.constructor.name]);
    };
  };

  b.polPolTypeIs = function (T) {
    if (T instanceof ca.FreeTextPolicy) return ua.value;
    if (T instanceof ca.RefPolicy) return Ma.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 353, column 18 - line 355, column 29): " + [T.constructor.name]);
  };

  b.arrayView = Lb;

  b.nonEmptyArrayView = function (T) {
    return function (aa) {
      return c.bind(g.bindCofree(m.widgetAlternative(w.monoidArray)))(Lb(T)(K.second(K.strongFn)(vb(C.foldableMaybe)(L.functorMaybe)(w.monoidArray)(t.toArray))(aa)))(function (Ka) {
        return u.pure(g.applicativeCofree(m.widgetAlternative(w.monoidArray)))(K.second(K.strongFn)(t.fromArray)(Ka));
      });
    };
  };

  b.errorDisplay = ob;

  b.runEffectInit = function (T) {
    return function (aa) {
      return d.step(T)(c.bind(m.widgetBind)(Ia.liftEffect(m.widgetMonadEff(w.monoidArray))(aa))(function (Ka) {
        return u.pure(m.widgetApplicative)(d.step(Ka)(e.empty(m.widgetPlus(w.monoidArray))));
      }));
    };
  };

  b.evTargetElem = function (T) {
    return H.map(ia.functorEffect)(va.fromNode)(xa.target(T));
  };

  b.getInputTextLE = function (T) {
    return function (aa) {
      return Ia.liftEffect(T)(Cb(aa));
    };
  };

  b.tabLink = function (T) {
    return function (aa) {
      return q.a_(m.widgetShiftMap)([k.href(T), k.target("_blank"), k.rel("noopener noreferrer")])(aa);
    };
  };

  b.isOptionMaybeBoolean = Gb;
  b.isOptionIdentifierType = Bb;
  b.isOptionInstitutionType = sb;
  b.isOptionMaybeInstitutionContactType = Hb;
  b.isOptionMaybePolicyType = Ib;
  b.isOptionRelationType = Ab;
  b.isOptionResourceTypeGeneral = zb;
  b.boundedEnumPolPolType = Jb;
  b.isOptionPolPolType = Db;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var b = a["Metajelo.View"],
      d = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      f = a["Concur.React.DOM"],
      m = a["Concur.React.Props"],
      q = a["Control.Alt"],
      k = a["Control.Bind"],
      p = a["Control.Category"],
      u = a["Data.Array"],
      y = a["Data.Array.NonEmpty"],
      c = a["Data.Array.NonEmpty.Internal"],
      g = a["Data.Foldable"],
      e = a["Data.Functor"],
      l = a["Data.HeytingAlgebra"],
      t = a["Data.Maybe"],
      v = a["Data.Monoid"],
      D = a["Data.Natural"],
      E = a["Data.Profunctor.Strong"],
      B = a["Data.Semigroup"],
      r = a["Data.Show"],
      C = a["Data.String.CodePoints"],
      H = a["Data.String.NonEmpty.Internal"],
      G = a["Data.String.Utils"],
      F = a["Data.Unfoldable"],
      J = a["Data.Unfoldable1"],
      O = a["DataCite.Types.Common"],
      Q = a["Foreign.Object"],
      V = a["Metajelo.CSS.Common.ClassNames"],
      M = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      L = a["Metajelo.CSS.Web.ClassProps"],
      w = a["Metajelo.CSS.Web.Util"],
      R = a["Metajelo.Types"],
      I = a["Text.Email.Parser"],
      K = a["Text.URL.Validate"],
      z = function () {
    var P = e.map(e.functorArray)(C.singleton);
    return function (Z) {
      return P(C.toCodePointArray(Z));
    };
  }(),
      Y = function Y(P) {
    var Z = f.text(P);
    return function (xa) {
      return Z(H.toString(xa));
    };
  },
      ma = f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.text(d.widgetLiftWidget)(" ")]),
      za = function () {
    var P = g.intercalate(g.foldableArray)(v.monoidArray)([ma]),
        Z = e.map(e.functorArray)(J.singleton(J.unfoldable1Array));
    return function (xa) {
      return P(Z(xa));
    };
  }(),
      Da = function Da(P) {
    return f.div(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.institutionPolicy])(za([function (Z) {
      var xa = function () {
        if (Z instanceof t.Nothing) return {
          text: "May apply to product (unverified)",
          cls: M.appliesMaybe
        };
        if (Z instanceof t.Just && Z.value0) return {
          text: "Applies to product",
          cls: M.appliesYes
        };
        if (Z instanceof t.Just && !Z.value0) return {
          text: "Does not apply to product",
          cls: M.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 272, column 10 - line 275, column 75): " + [Z.constructor.name]);
      }();

      return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([w.cList([V.applies, xa.cls])])([function (W) {
        return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.appliesInfo])([f.text(d.widgetLiftWidget)(W)]);
      }(xa.text)]);
    }(P.appliesToProduct), g.foldMap(g.foldableMaybe)(h.widgetMonoid(v.monoidArray))(function (Z) {
      return f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.policyType])([f.text(d.widgetLiftWidget)(r.show(R.showPolicyType)(Z))]), f.text(d.widgetLiftWidget)(" Policy:")]);
    })(P.policyType), function (Z) {
      var xa = f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.policy]),
          W = J.singleton(J.unfoldable1Array);
      if (Z instanceof R.FreeTextPolicy) Z = Y(d.widgetLiftWidget)(Z.value0);else if (Z instanceof R.RefPolicy) Z = K.urlToString(Z.value0), Z = f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([f.text(d.widgetLiftWidget)(Z)]);else throw Error("Failed pattern match at Metajelo.View (line 265, column 5 - line 268, column 40): " + [Z.constructor.name]);
      return xa(W(Z));
    }(P.policy)]));
  },
      Ba = function Ba(P) {
    return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.institutionName])([Y(d.widgetLiftWidget)(P.institutionName)]);
  },
      x = function x(P) {
    return function (Z) {
      return g.foldMap(g.foldableMaybe)(v.monoidArray)(p.identity(p.categoryFn))(u.init(Z));
    };
  },
      fa = function fa(P) {
    return function (Z) {
      return function (xa) {
        return function (W) {
          return function (Ja) {
            var Oa = Q.fromFoldableWith(P)(B.append(W)),
                N = e.map(Z)(E.fanout(p.categoryFn)(E.strongFn)(Ja)(J.singleton(xa)));
            return function (va) {
              return Oa(N(va));
            };
          };
        };
      };
    };
  },
      ja = function ja(P) {
    return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.basicMetadata, L.creatorList])(e.mapFlipped(e.functorArray)(y.toArray(P))(function (Z) {
      return f.span_(h.widgetShiftMap)([L.creator])(Y(d.widgetLiftWidget)(Z));
    }));
  },
      S = function S(P) {
    var Z = I.toString(P.emailAddress),
        xa = f.text(d.widgetLiftWidget);
    if (P.contactType instanceof t.Nothing) P = ".";else if (P.contactType instanceof t.Just) P = " (" + (r.show(R.showInstitutionContactType)(P.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 199, column 24 - line 201, column 41): " + [P.contactType.constructor.name]);
    xa = xa(P);
    return f.span_(h.widgetShiftMap)([L.institutionContact])(q.alt(h.widgetAlt(v.monoidArray))(q.alt(h.widgetAlt(v.monoidArray))(f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.text(d.widgetLiftWidget)("Institution Contact: ")]))(f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.contactEmail, m.href("mailto:" + Z)])([f.text(d.widgetLiftWidget)(Z)])))(f.span_(h.widgetShiftMap)([L.contactType])(xa)));
  },
      ia = f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.text(d.widgetLiftWidget)(", ")]),
      Ia = function Ia(P) {
    return f.span_(h.widgetShiftMap)([L.formatList])(g.intercalate(g.foldableArray)(h.widgetMonoid(v.monoidArray))(ia)(e.mapFlipped(e.functorArray)(P)(function (Z) {
      return f.span_(h.widgetShiftMap)([L.format])(Y(d.widgetLiftWidget)(Z));
    })));
  },
      sa = function sa(P) {
    return f.span_(h.widgetShiftMap)([])(g.intercalate(g.foldableArray)(h.widgetMonoid(v.monoidArray))(ia)(e.mapFlipped(e.functorArray)(y.toArray(P))(function (Z) {
      return f.span_(h.widgetShiftMap)([L.title])(Y(d.widgetLiftWidget)(Z));
    })));
  },
      ta = function ta(P) {
    return f["cite'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([Y(d.widgetLiftWidget)(P)]);
  },
      wa = function wa(P) {
    if (P.identifierType instanceof O.ARK) return f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(H.toString(P.identifier))])([ta(P.identifier)]);

    if (P.identifierType instanceof O.ArXiv) {
      var Z = "https://arxiv.org/abs/" + H.toString(P.identifier);
      return f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ta(P.identifier)]);
    }

    if (P.identifierType instanceof O.Bibcode) return Z = "https://ui.adsabs.harvard.edu/abs/" + (H.toString(P.identifier) + "/abstract"), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ta(P.identifier)]);
    if (P.identifierType instanceof O.DOI) return Z = "https://doi.org/" + H.toString(P.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ta(P.identifier)]);
    if (P.identifierType instanceof O.EAN13) return ta(P.identifier);
    if (P.identifierType instanceof O.EISSN) return Z = "https://www.worldcat.org/ISSN/" + H.toString(P.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ta(P.identifier)]);
    if (P.identifierType instanceof O.Handle) return Z = "http://hdl.handle.net/" + H.toString(P.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ta(P.identifier)]);
    if (P.identifierType instanceof O.IGSN) return Z = "http://igsn.org/" + H.toString(P.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ta(P.identifier)]);
    if (P.identifierType instanceof O.ISBN) return ta(P.identifier);
    if (P.identifierType instanceof O.ISSN) return Z = "https://www.worldcat.org/ISSN/" + H.toString(P.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ta(P.identifier)]);
    if (P.identifierType instanceof O.ISTC) return ta(P.identifier);
    if (P.identifierType instanceof O.LISSN) return Z = "https://www.worldcat.org/ISSN/" + H.toString(P.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ta(P.identifier)]);
    if (P.identifierType instanceof O.LSID) return Z = "http://www.lsid.info/resolver/?lsid=" + H.toString(P.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ta(P.identifier)]);
    if (P.identifierType instanceof O.PMID) return Z = "https://www.ncbi.nlm.nih.gov/pubmed/" + H.toString(P.identifier), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(Z)])([ta(P.identifier)]);
    if (P.identifierType instanceof O.PURL) return f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(H.toString(P.identifier))])([ta(P.identifier)]);
    if (P.identifierType instanceof O.UPC) return ta(P.identifier);
    if (P.identifierType instanceof O.URL) return f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([m.href(H.toString(P.identifier))])([ta(P.identifier)]);
    if (P.identifierType instanceof O.URN) return ta(P.identifier);
    throw Error("Failed pattern match at Metajelo.View (line 221, column 1 - line 221, column 47): " + [P.constructor.name]);
  },
      ya = function ya(P) {
    return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.identifier])([f.span_(h.widgetShiftMap)([L.idType])(f.text(d.widgetLiftWidget)(r.show(O.showIdentifierType)(P.identifierType))), f.span_(h.widgetShiftMap)([L.idUrl])(wa(P))]);
  },
      Ga = function Ga(P) {
    return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.relatedId])([f.span_(h.widgetShiftMap)([L.relType])(f.text(d.widgetLiftWidget)(r.show(O.showRelationType)(P.relationType))), ma, ya({
      identifier: P.identifier,
      identifierType: P.identifierType
    })]);
  },
      da = function da(P) {
    return function (Z) {
      return function (xa) {
        if (Z) return P;

        if (g.any(g.foldableArray)(l.heytingAlgebraBoolean)(function (Ja) {
          return G.endsWith(Ja)(P);
        })([";", ".", ","])) {
          var W = z(P);
          return G.fromCharArray(x(v.monoidString)(W)) + xa;
        }

        return P + xa;
      };
    };
  },
      ka = function ka(P) {
    var Z = Ba(P),
        xa = f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.text(d.widgetLiftWidget)("("), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.institutionId])([ya(P.institutionID)]), f.text(d.widgetLiftWidget)("; "), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.institutionType])([f.text(d.widgetLiftWidget)(r.show(R.showInstitutionType)(P.institutionType))]), f.text(d.widgetLiftWidget)(da(")")(t.isNothing(P.superOrganizationName))(","))]);
    if (P.superOrganizationName instanceof t.Nothing) var W = v.mempty(h.widgetMonoid(v.monoidArray));else if (P.superOrganizationName instanceof t.Just) W = f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([f.text(d.widgetLiftWidget)("a member of "), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.superOrg])([f.text(d.widgetLiftWidget)(da(H.toString(P.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 161, column 7 - line 167, column 10): " + [P.superOrganizationName.constructor.name]);
    return za([Z, xa, W, S(P.institutionContact), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.sustainability])([f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.missionStatement, m.href(K.urlToString(P.institutionSustainability.missionStatementURL))])([f.text(d.widgetLiftWidget)("Mission Statement")]), f.text(d.widgetLiftWidget)("; "), f.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.fundingStatement, m.href(K.urlToString(P.institutionSustainability.fundingStatementURL))])([f.text(d.widgetLiftWidget)("Funding Statement")]), f.text(d.widgetLiftWidget)(".")]), f.ul(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.institutionPolicies])(e.map(e.functorArray)(function (Ja) {
      return f["li'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([Da(Ja)]);
    })(y.toArray(P.institutionPolicies))), function (Ja) {
      if (Ja) Ja = "Versioned";else {
        if (Ja) throw Error("Failed pattern match at Metajelo.View (line 188, column 14 - line 190, column 31): " + [Ja.constructor.name]);
        Ja = "Unversioned";
      }
      return f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.versioning])([f.text(d.widgetLiftWidget)(Ja)]);
    }(P.versioning)]);
  },
      ca = function ca(P) {
    if (P.resourceID instanceof t.Just) var Z = f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.resourceId])([ya(P.resourceID.value0), f.text(d.widgetLiftWidget)(".")]);else if (P.resourceID instanceof t.Nothing) Z = v.mempty(h.widgetMonoid(v.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 127, column 17 - line 129, column 24): " + [P.resourceID.constructor.name]);
    var xa = [ja(P.basicMetadata.creators), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.basicMetadata, L.pubyear])([f.text(d.widgetLiftWidget)(r.show(r.showInt)(D.natToInt(P.basicMetadata.publicationYear)))]), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.basicMetadata, L.title])([sa(P.basicMetadata.titles), f.text(d.widgetLiftWidget)(da("")(t.isNothing(P.resourceID))(","))])];
    Z = B.append(B.semigroupArray)(xa)([f["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([Ba(P.location), f.text(d.widgetLiftWidget)(".")]), Z]);
    return f.div(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.product])(za(B.append(B.semigroupArray)([f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.productCitation])([f["cite'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)(za(Z))])])(B.append(B.semigroupArray)([Ia(P.format)])(ka(P.location)))));
  };

  b.spacify = za;

  b.mkRecordWidget = function (P) {
    var Z = function () {
      var Ja = e.map(c.functorNonEmptyArray)(function (Oa) {
        return f.li(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.relatedId])([Oa]);
      })(e.map(c.functorNonEmptyArray)(Ga)(P.relatedIdentifiers));
      return f.ul(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.relatedIdList])(y.toArray(Ja));
    }(),
        xa = fa(c.foldableNonEmptyArray)(c.functorNonEmptyArray)(c.unfoldable1NonEmptyArray)(c.semigroupNonEmptyArray)(function (Ja) {
      return r.show(O.showResourceTypeGeneral)(Ja.resourceType.generalType) + (": " + Ja.resourceType.description);
    })(P.supplementaryProducts),
        W = function W(Ja) {
      Ja = k.join(k.bindArray)(F.fromMaybe(F.unfoldableArray)(e.map(t.functorMaybe)(y.toArray)(Q.lookup(Ja)(xa))));
      var Oa = f.span_(h.widgetShiftMap)([L.resourceType])(g.fold(g.foldableMaybe)(h.widgetMonoid(v.monoidArray))(e.mapFlipped(t.functorMaybe)(u.head(Ja))(function (N) {
        return q.alt(h.widgetAlt(v.monoidArray))(q.alt(h.widgetAlt(v.monoidArray))(f.span_(h.widgetShiftMap)([L.resourceTypeGen])(f.text(d.widgetLiftWidget)(r.show(O.showResourceTypeGeneral)(N.resourceType.generalType))))(f.span_(h.widgetShiftMap)([L.resourceTypeDescr])(f.text(d.widgetLiftWidget)(N.resourceType.description))))(f["br'"](d.widgetLiftWidget));
      })));
      return f["div'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)(u.cons(Oa)(e.map(e.functorArray)(ca)(Ja)));
    };

    r.show(O.showIdentifierType)(P.identifier.identifierType);
    return f.div(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.record])([f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.productsHeader])([f.span_(h.widgetShiftMap)([L.recordId])(ya(P.identifier))]), f.ul(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.productList])(e.map(e.functorArray)(function (Ja) {
      return f.li_(h.widgetShiftMap)([L.productGroup])(W(Ja));
    })(Q.keys(xa))), f.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([L.relatedIdsHeader])([]), Z]);
  };

  b.mkSupplementaryProductWidget = ca;
  b.locElems = ka;
})(PS);

(function (a) {
  a.pickFn = function (b, d) {
    for (var h = {}, f = 0; f < b.length; f++) {
      "undefined" !== typeof d[b[f]] && (h[b[f]] = d[b[f]]);
    }

    return h;
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
      return function (h) {
        var f = {},
            m;

        for (m in h) {
          ({}).hasOwnProperty.call(h, m) && (f[m] = h[m]);
        }

        f[b] = d;
        return f;
      };
    };
  };

  a.unsafeDelete = function (b) {
    return function (d) {
      var h = {},
          f;

      for (f in d) {
        f !== b && {}.hasOwnProperty.call(d, f) && (h[f] = d[f]);
      }

      return h;
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
      h = a["Record.Unsafe"];

  b.get = function (f) {
    return function (m) {
      return function (q) {
        return function (k) {
          return h.unsafeGet(d.reflectSymbol(f)(q))(k);
        };
      };
    };
  };

  b.insert = function (f) {
    return function (m) {
      return function (q) {
        return function (k) {
          return function (p) {
            return function (u) {
              return h.unsafeSet(d.reflectSymbol(f)(k))(p)(u);
            };
          };
        };
      };
    };
  };

  b["delete"] = function (f) {
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

  var b = a["Record.Extra"],
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

  b.keys = function (k) {
    return function (p) {
      return function (u) {
        return (0, p.keysImpl)(m.RLProxy.value);
      };
    };
  };

  b.nilKeys = a;

  b.consKeys = function (k) {
    return function (p) {
      return new q(function (u) {
        u = (0, p.keysImpl)(m.RLProxy.value);
        var y = f.reflectSymbol(k)(f.SProxy.value);
        return new d.Cons(y, u);
      });
    };
  };
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var b = a.Option,
      d = a.Option,
      h = a["Control.Monad.State.Class"],
      f = a["Control.Monad.State.Trans"],
      m = a["Data.Array"],
      q = a["Data.Function.Uncurried"],
      k = a["Data.Identity"],
      p = a["Data.List.Types"],
      u = a["Data.Maybe"],
      y = a["Data.Symbol"],
      c = a["Foreign.Object"],
      g = a.Record,
      e = a["Record.Extra"],
      l = a["Type.Data.Row"],
      t = function () {
    function M() {}

    M.value = new M();
    return M;
  }(),
      v = function v(M) {
    this.getAllOption = M;
  },
      D = function D(M) {
    this["getAll'"] = M;
  },
      E = function E(M) {
    this.fromRecordOption = M;
  },
      B = function B(M) {
    this["fromRecord'"] = M;
  },
      r = function r(M) {
    return function (L) {
      return function (w) {
        w = m.fromFoldable(p.foldableList)(e.keys()(w)(l.RProxy.value));
        return q.runFn2(d.pickFn)(w);
      };
    };
  };

  a = new v(function (M) {
    return function (L) {
      return new u.Just({});
    };
  });

  var C = c.empty,
      H = new E(function (M) {
    return function (L) {
      return C;
    };
  }),
      G = function G(M) {
    return function (L) {
      return function (w) {
        return function (R) {
          var I = y.reflectSymbol(M)(y.SProxy.value),
              K = c.alter(function (z) {
            return L(z);
          })(I)(R);
          R = L(c.lookup(I)(R));
          return {
            option: K,
            value: R
          };
        };
      };
    };
  },
      F = function F(M) {
    return function (L) {
      return function (w) {
        return function (R) {
          return function (I) {
            return G(M)(function (K) {
              return u.Nothing.value;
            })(R)(I).option;
          };
        };
      };
    };
  },
      J = function J(M) {
    return function (L) {
      return function (w) {
        return function (R) {
          return G(M)(function (I) {
            return I;
          })(w)(R).value;
        };
      };
    };
  },
      O = function O(M) {
    return function (L) {
      return function (w) {
        return function (R) {
          return function (I) {
            return G(M)(function (K) {
              return new u.Just(R);
            })(w)(I).option;
          };
        };
      };
    };
  },
      Q = function Q(M) {
    return function (L) {
      return function (w) {
        return function (R) {
          return function (I) {
            if (R instanceof u.Just) return O(M)()(w)(R.value0)(I);
            if (R instanceof u.Nothing) return I;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [R.constructor.name]);
          };
        };
      };
    };
  },
      V = function V(M) {
    return function (L) {
      return function (w) {
        return function (R) {
          return function (I) {
            return function (K) {
              return G(M)(function (z) {
                return new u.Just(I);
              })(R)(K).option;
            };
          };
        };
      };
    };
  };

  b.fromRecord = function (M) {
    return M["fromRecord'"];
  };

  b.empty = C;
  b.get = J;

  b.getAll = function (M) {
    return M["getAll'"];
  };

  b.getSubset = function (M) {
    return function (L) {
      return function (w) {
        return function (R) {
          return function (I) {
            return (0, R["getAll'"])(r()()(w)(I));
          };
        };
      };
    };
  };

  b.getWithDefault = function (M) {
    return function (L) {
      return function (w) {
        return function (R) {
          return function (I) {
            I = J(M)()(R)(I);
            if (I instanceof u.Just) return I.value0;
            if (I instanceof u.Nothing) return w;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [I.constructor.name]);
          };
        };
      };
    };
  };

  b.maySetOptState = function (M) {
    return function (L) {
      return function (w) {
        return function (R) {
          return function (I) {
            return h.put(f.monadStateStateT(k.monadIdentity))(Q(M)()(w)(R)(I));
          };
        };
      };
    };
  };

  b.fromRecordAny = function (M) {
    return function (L) {
      return new B((0, M.fromRecordOption)(t.value));
    };
  };

  b.fromRecordOptionNil = H;

  b.fromRecordOptionCons = function (M) {
    return function (L) {
      return function (w) {
        return function (R) {
          return function (I) {
            return function (K) {
              return new E(function (z) {
                return function (Y) {
                  var ma = g["delete"](M)()()(y.SProxy.value)(Y);
                  ma = (0, L.fromRecordOption)(t.value)(ma);
                  Y = g.get(M)()(y.SProxy.value)(Y);
                  return V(M)()()(y.SProxy.value)(Y)(ma);
                };
              });
            };
          };
        };
      };
    };
  };

  b.getAllAny = function (M) {
    return function (L) {
      return new D((0, L.getAllOption)(t.value));
    };
  };

  b.getAllOptionNil = a;

  b.getAllOptionCons = function (M) {
    return function (L) {
      return function (w) {
        return function (R) {
          return function (I) {
            return function (K) {
              return new v(function (z) {
                return function (Y) {
                  var ma = F(M)()()(y.SProxy.value)(Y);
                  ma = (0, K.getAllOption)(t.value)(ma);
                  Y = J(M)()(y.SProxy.value)(Y);

                  if (ma instanceof u.Just) {
                    if (Y instanceof u.Just) return new u.Just(g.insert(M)()()(y.SProxy.value)(Y.value0)(ma.value0));
                    if (Y instanceof u.Nothing) return u.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [Y.constructor.name]);
                  }

                  if (ma instanceof u.Nothing) return u.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [ma.constructor.name]);
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

  a["Web.File.FileList"].item = function (h) {
    var f = b._item(h);

    return function (m) {
      return d.toMaybe(f(m));
    };
  };
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
      return function (h) {
        return function (f) {
          return function () {
            return f.addEventListener(b, d, h);
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
  a["Web.HTML.Event.EventTypes"] = a["Web.HTML.Event.EventTypes"] || {};
  a = a["Web.HTML.Event.EventTypes"];
  a.error = "error";
  a.load = "load";
})(PS);

(function (a) {
  a["Web.File.FileReader.Aff"] = a["Web.File.FileReader.Aff"] || {};
  var b = a["Web.File.FileReader.Aff"],
      d = a["Control.Monad.Except"],
      h = a["Data.Either"],
      f = a["Data.List.Types"],
      m = a["Data.Monoid"],
      q = a["Data.Show"],
      k = a["Effect.Aff"],
      p = a["Effect.Exception"],
      u = a.Foreign,
      y = a["Web.Event.EventTarget"],
      c = a["Web.File.FileReader"],
      g = a["Web.HTML.Event.EventTypes"];

  a = function (e) {
    return function (l) {
      return function (t) {
        return k.makeAff(function (v) {
          var D = function D(E) {
            return v(h.Right.create(E));
          };

          return function () {
            var E = c.fileReader(),
                B = c.toEventTarget(E),
                r = y.eventListener(function (H) {
              return v(h.Left.create(p.error("error")));
            })(),
                C = y.eventListener(function (H) {
              return function () {
                var G = c.result(E)();
                return h.either(function (F) {
                  return v(h.Left.create(p.error(q.show(f.showNonEmptyList(u.showForeignError))(F))));
                })(D)(d.runExcept(e(G)))();
              };
            })();
            y.addEventListener(g.error)(r)(!1)(B)();
            y.addEventListener(g.load)(C)(!1)(B)();
            l(t)(E)();
            return m.mempty(k.monoidCanceler);
          };
        });
      };
    };
  }(u.readString)(c.readAsText);

  b.readAsText = a;
})(PS);

(function (a) {
  a._read = function (b, d, h) {
    var f = Object.prototype.toString.call(h);
    return 0 === f.indexOf("[object HTML") && f.indexOf("Element]") === f.length - 8 ? d(h) : b;
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
      h = a["Data.Maybe"];

  b.fromElement = function (f) {
    return d._read(h.Nothing.value, h.Just.create, f);
  };

  b.click = d.click;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var b = a["Metajelo.UI"],
      d = a.Affjax,
      h = a["Affjax.ResponseFormat"],
      f = a["Concur.Core.FRP"],
      m = a["Concur.Core.LiftWidget"],
      q = a["Concur.Core.Props"],
      k = a["Concur.Core.Types"],
      p = a["Concur.React.DOM"],
      u = a["Concur.React.Props"],
      y = a["Concur.React.Run"],
      c = a["Control.Alt"],
      g = a["Control.Applicative"],
      e = a["Control.Apply"],
      l = a["Control.Bind"],
      t = a["Control.Cofree"],
      v = a["Control.Monad.Except.Trans"],
      D = a["Control.Monad.Maybe.Trans"],
      E = a["Control.Monad.State"],
      B = a["Control.Monad.State.Class"],
      r = a["Control.Monad.State.Trans"],
      C = a["Control.Monad.Writer"],
      H = a["Control.Plus"],
      G = a["Data.Array"],
      F = a["Data.Array.NonEmpty"],
      J = a["Data.Array.NonEmpty.Internal"],
      O = a["Data.Bifunctor"],
      Q = a["Data.Either"],
      V = a["Data.Enum"],
      M = a["Data.Foldable"],
      L = a["Data.Functor"],
      w = a["Data.Identity"],
      R = a["Data.List.NonEmpty"],
      I = a["Data.Maybe"],
      K = a["Data.Maybe.First"],
      z = a["Data.Monoid"],
      Y = a["Data.Newtype"],
      ma = a["Data.Semigroup"],
      za = a["Data.Show"],
      Da = a["Data.String.Common"],
      Ba = a["Data.String.NonEmpty.Internal"],
      x = a["Data.Symbol"],
      fa = a["Data.Traversable"],
      ja = a["Data.Tuple"],
      S = a["Data.UUID"],
      ia = a["Data.Unfoldable"],
      Ia = a["Data.Void"],
      sa = a["DataCite.JSON.Decode.Simple"],
      ta = a["DataCite.Types.Common"],
      wa = a.Effect,
      ya = a["Effect.Aff.Class"],
      Ga = a["Effect.Class"],
      da = a["Effect.Class.Console"],
      ka = a["Effect.Exception"],
      ca = a["Effect.Now"],
      P = a["Effect.Unsafe"],
      Z = a.Foreign,
      xa = a.Global,
      W = a["Metajelo.CSS.UI.ClassProps"],
      Ja = a["Metajelo.CSS.UI.Util"],
      Oa = a["Metajelo.CSS.Web.ClassProps"],
      N = a["Metajelo.FormUtil"],
      va = a["Metajelo.Types"],
      ra = a["Metajelo.View"],
      Aa = a["Metajelo.XPaths"],
      ba = a["Metajelo.XPaths.Read"],
      ea = a["Metajelo.XPaths.Write"],
      ha = a["Nonbili.DOM"],
      A = a.Option,
      la = a["Record.Extra"],
      ua = a["Text.URL.Validate"],
      Ma = a["Web.DOM.Document"],
      Fa = a["Web.DOM.Element"],
      Na = a["Web.File.File"],
      Ra = a["Web.File.FileList"],
      fb = a["Web.File.FileReader.Aff"],
      gb = a["Web.HTML"],
      lb = a["Web.HTML.HTMLDocument"],
      ib = a["Web.HTML.HTMLElement"],
      jb = a["Web.HTML.HTMLInputElement"],
      mb = a["Web.HTML.Window"],
      hb = function hb(U) {
    return function (X) {
      return function (oa) {
        return function (na) {
          return function (pa) {
            return L.mapFlipped(I.functorMaybe)(A.get(U)(X)(oa)(na))(function (qa) {
              return E.execState(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "descs_on";
              }))()(x.SProxy.value)(new I.Just(pa))))(qa);
            });
          };
        };
      };
    };
  },
      Ua = function Ua(U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.title])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.titleHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      return N.textInput(U);
    }));
  },
      nb = function nb(U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.titleList])(N.nonEmptyArrayView(Ua)(U));
  },
      Za = function Za(U) {
    return function () {
      var X = gb.window();
      X = mb.document(X)();
      X = lb.toDocument(X);
      X = Ma.createElement("a")(X)();
      Fa.setAttribute("download")("metajelo.xml")(X)();
      Fa.setAttribute("href")("data:text/plain;charset=utf-8," + U)(X)();
      X = ib.fromElement(X);
      if (X instanceof I.Just) X = ib.click(X.value0);else if (X instanceof I.Nothing) X = da.log(Ga.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + U);else throw Error("Failed pattern match at Metajelo.UI (line 132, column 26 - line 136, column 18): " + [X.constructor.name]);
      return X;
    };
  },
      bb = function bb(U) {
    return function (X) {
      return A.getWithDefault(U)()(A.empty);
    };
  },
      Ta = function Ta(U) {
    var X = Ba.fromString("urn:uuid:"),
        oa = A.get(new x.IsSymbol(function () {
      return "identifier";
    }))()(x.SProxy.value)(U);
    return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(function () {
      if (oa instanceof I.Just) return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(new I.Just(oa.value0));
      if (oa instanceof I.Nothing) return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(N.runEffectInit(S.emptyUUID)(S.genUUID))(function (na) {
        return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(l.bind(I.bindMaybe)(X)(function (pa) {
          return l.bind(I.bindMaybe)(Ba.fromString(S.toString(na)))(function (qa) {
            return g.pure(I.applicativeMaybe)(ma.append(Ba.semigroupNonEmptyString)(pa)(qa));
          });
        }));
      });
      throw Error("Failed pattern match at Metajelo.UI (line 812, column 15 - line 819, column 30): " + [oa.constructor.name]);
    }())(function (na) {
      return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "identifier";
      }))()(x.SProxy.value)(na)))(function () {
        return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
          return "identifierType";
        }))()(x.SProxy.value)(new I.Just(ta.URN.value)));
      }))(U));
    });
  },
      zb = function zb(U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.format])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.formatHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      return N.textInput(U);
    }));
  },
      Ab = function Ab(U) {
    return function (X) {
      return p.div_(t.shiftMapCofree(z.monoidArray))([W.formatList])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.formatListHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("formatEle")(U)))(function () {
          return N.arrayView(zb)(X);
        });
      }));
    };
  },
      sb = function sb(U) {
    return function () {
      return {
        lastModified: ca.nowDateTime(),
        date: U.date,
        identifier: U.identifier,
        relatedIdentifiers: U.relatedIdentifiers,
        supplementaryProducts: U.supplementaryProducts
      };
    };
  },
      Bb = function Bb(U) {
    return function (X) {
      var oa = I.Just.create(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
        return "identifier";
      }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
        return "identifierType";
      }))(A.fromRecordOptionNil)()()()())()()()())())({
        identifier: X.data.attributes.doi,
        identifierType: ta.DOI.value
      })),
          na = bb(new x.IsSymbol(function () {
        return "locationOpts_opt";
      }))()(x.SProxy.value)(U),
          pa = E.execState(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "versioning";
      }))()(x.SProxy.value)(I.Just.create(I.isJust(X.data.attributes.version)))))(na);
      na = M.intercalate(M.foldableArray)(z.monoidString)("\n\n")(L.map(L.functorArray)(function (db) {
        return db.description;
      })(X.data.attributes.descriptions));
      var qa = I.Just.create(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
        return "description";
      }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
        return "generalType";
      }))(A.fromRecordOptionNil)()()()())()()()())())({
        description: na,
        generalType: X.data.attributes.types.resourceTypeGeneral
      })),
          Ca = L.map(J.functorNonEmptyArray)(function (db) {
        return db.title;
      })(X.data.attributes.titles),
          Qa = L.map(J.functorNonEmptyArray)(function (db) {
        return db.name;
      })(X.data.attributes.creators);
      na = bb(new x.IsSymbol(function () {
        return "basicMetadata_opt";
      }))()(x.SProxy.value)(U);
      var Sa = A.get(new x.IsSymbol(function () {
        return "creators";
      }))()(x.SProxy.value)(na),
          ab = I.maybe(Qa)(function (db) {
        return ma.append(J.semigroupNonEmptyArray)(db)(Qa);
      })(Sa);
      Sa = A.get(new x.IsSymbol(function () {
        return "titles";
      }))()(x.SProxy.value)(na);
      Sa = I.maybe(Ca)(function (db) {
        return ma.append(J.semigroupNonEmptyArray)(db)(Ca);
      })(Sa);
      var eb = F.length(Sa),
          rb = F.length(ab),
          yb = E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "titles";
      }))()(x.SProxy.value)(new I.Just(Sa))))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
          return "_numTitles";
        }))()(x.SProxy.value)(new I.Just(eb))))(function () {
          return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "creators";
          }))()(x.SProxy.value)(new I.Just(ab))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "_numCreators";
            }))()(x.SProxy.value)(new I.Just(rb))))(function () {
              return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "publicationYear";
              }))()(x.SProxy.value)(new I.Just(X.data.attributes.publicationYear)));
            });
          });
        });
      }))(na);
      return E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "resourceID_opt";
      }))()(x.SProxy.value)(oa)))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
          return "basicMetadata_opt";
        }))()(x.SProxy.value)(new I.Just(yb))))(function () {
          return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "format";
          }))()(x.SProxy.value)(new I.Just(X.data.attributes.formats))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "resourceType_opt";
            }))()(x.SProxy.value)(qa)))(function () {
              return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(x.SProxy.value)(new I.Just(pa)));
            });
          });
        });
      }))(U);
    };
  },
      tb = function tb(U) {
    var X = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "fundingStatementURL";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "missionStatementURL";
    }))(A.fromRecordOptionNil)()()()())()()()())())(U),
        oa = new Q.Right(U.missionStatementURL),
        na = new Q.Right(U.fundingStatementURL);
    return E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(x.SProxy.value)(new I.Just(oa))))(function () {
      return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(x.SProxy.value)(new I.Just(na))))(function () {
        return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
          return "descs_on";
        }))()(x.SProxy.value)(new I.Just(!0)));
      });
    }))(X);
  },
      Cb = function Cb(U) {
    var X = new Q.Right(U.url);
    U = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "relationType";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "url";
    }))(A.fromRecordOptionNil)()()()())()()()())())(U);
    return E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
      return "url_Ei";
    }))()(x.SProxy.value)(new I.Just(X))))(function () {
      return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "descs_on";
      }))()(x.SProxy.value)(new I.Just(!0)));
    }))(U);
  },
      Xa = function Xa(U) {
    if (U.policy instanceof va.FreeTextPolicy) var X = new I.Just(U.policy.value0);else if (U.policy instanceof va.RefPolicy) X = Ba.fromString(ua.urlToString(U.policy.value0));else throw Error("Failed pattern match at Metajelo.UI (line 501, column 20 - line 503, column 54): " + [U.policy.constructor.name]);
    var oa = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "appliesToProduct";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "policy";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "policyType";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())())(U);
    return E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
      return "policy_str";
    }))()(x.SProxy.value)(X)))(function () {
      return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "polPolType";
      }))()(x.SProxy.value)(I.Just.create(N.polPolTypeIs(U.policy)))))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
          return "policy_ei";
        }))()(x.SProxy.value)(I.Just.create(new Q.Right(U.policy)))))(function () {
          return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "descs_on";
          }))()(x.SProxy.value)(new I.Just(!0)));
        });
      });
    }))(oa);
  },
      ub = function ub(U) {
    return E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
      return "email_Ei";
    }))()(x.SProxy.value)(I.Just.create(new Q.Right(U.emailAddress)))))(function () {
      return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "descs_on";
      }))()(x.SProxy.value)(new I.Just(!0)));
    }))(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "contactType";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "emailAddress";
    }))(A.fromRecordOptionNil)()()()())()()()())())(U));
  },
      Db = function Db(U) {
    var X = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionContact";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionID";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionName";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionPolicies";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionSustainability";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "institutionType";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "superOrganizationName";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "versioning";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(U),
        oa = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifierType";
    }))(A.fromRecordOptionNil)()()()())()()()())())(U.institutionID),
        na = ub(U.institutionContact),
        pa = tb(U.institutionSustainability),
        qa = L.map(J.functorNonEmptyArray)(Xa)(U.institutionPolicies),
        Ca = F.length(U.institutionPolicies);
    return E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
      return "institutionID_opt";
    }))()(x.SProxy.value)(new I.Just(oa))))(function () {
      return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "_numPolicies";
      }))()(x.SProxy.value)(new I.Just(Ca))))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
          return "iSustain_opt";
        }))()(x.SProxy.value)(new I.Just(pa))))(function () {
          return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "institutionContact_opt";
          }))()(x.SProxy.value)(new I.Just(na))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "institutionPolicies_opt";
            }))()(x.SProxy.value)(new I.Just(qa))))(function () {
              return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "descs_on";
              }))()(x.SProxy.value)(new I.Just(!0)));
            });
          });
        });
      });
    }))(X);
  },
      La = function La(U) {
    var X = F.length(U.titles),
        oa = F.length(U.creators);
    return E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
      return "_numTitles";
    }))()(x.SProxy.value)(new I.Just(X))))(function () {
      return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "_numCreators";
      }))()(x.SProxy.value)(new I.Just(oa)));
    }))(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "creators";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "publicationYear";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "titles";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())())(U));
  },
      pb = function pb(U) {
    var X = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "basicMetadata";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "format";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "location";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "resourceID";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "resourceType";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(U),
        oa = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "description";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "generalType";
    }))(A.fromRecordOptionNil)()()()())()()()())())(U.resourceType),
        na = L.map(I.functorMaybe)(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifierType";
    }))(A.fromRecordOptionNil)()()()())()()()())()))(U.resourceID),
        pa = L.map(I.functorMaybe)(Cb)(U.resourceMetadataSource),
        qa = Db(U.location),
        Ca = La(U.basicMetadata),
        Qa = G.length(U.format);
    return E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(x.SProxy.value)(new I.Just(Ca))))(function () {
      return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "resourceID_opt";
      }))()(x.SProxy.value)(na)))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
          return "resourceType_opt";
        }))()(x.SProxy.value)(new I.Just(oa))))(function () {
          return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "_numFormats";
          }))()(x.SProxy.value)(new I.Just(Qa))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(x.SProxy.value)(pa)))(function () {
              return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(x.SProxy.value)(new I.Just(qa))))(function () {
                return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                  return "descs_on";
                }))()(x.SProxy.value)(new I.Just(!0)));
              });
            });
          });
        });
      });
    }))(X);
  },
      vb = function vb(U) {
    var X = L.map(J.functorNonEmptyArray)(pb)(U.supplementaryProducts),
        oa = L.map(J.functorNonEmptyArray)(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifierType";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "relationType";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())()))(U.relatedIdentifiers),
        na = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "date";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "lastModified";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "supplementaryProducts";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(U),
        pa = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new x.IsSymbol(function () {
      return "identifierType";
    }))(A.fromRecordOptionNil)()()()())()()()())())(U.identifier),
        qa = F.length(U.supplementaryProducts),
        Ca = F.length(U.relatedIdentifiers);
    return E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
      return "identifier_opt";
    }))()(x.SProxy.value)(new I.Just(pa))))(function () {
      return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
        return "date_Ei";
      }))()(x.SProxy.value)(I.Just.create(new Q.Right(U.date)))))(function () {
        return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
          return "_numRelIds";
        }))()(x.SProxy.value)(new I.Just(Ca))))(function () {
          return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "relId_opts";
          }))()(x.SProxy.value)(new I.Just(oa))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "_numSupProds";
            }))()(x.SProxy.value)(new I.Just(qa))))(function () {
              return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "supProd_opts";
              }))()(x.SProxy.value)(new I.Just(X))))(function () {
                return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                  return "descs_on";
                }))()(x.SProxy.value)(new I.Just(!0)));
              });
            });
          });
        });
      });
    }))(na);
  },
      Ha = function () {
    var U = O.lmap(Q.bifunctorEither)(function (oa) {
      return ka.error("Error reading XML - please make sure it is well-formed.");
    }),
        X = l.bind(k.widgetBind)(p.span(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([])([p.div_(k.widgetShiftMap)([W.uploadDescr])(H.empty(k.widgetPlus(z.monoidArray))), p.input(m.widgetLiftWidget)([u._type("file"), L.map(q.functorProps)(N.evTargetElem)(u.onChange)])]))(function (oa) {
      return l.bind(k.widgetBind)(Ga.liftEffect(k.widgetMonadEff(z.monoidArray))(D.runMaybeT(l.bind(D.bindMaybeT(wa.monadEffect))(oa)(function (na) {
        return l.bind(D.bindMaybeT(wa.monadEffect))(D.MaybeT(g.pure(wa.applicativeEffect)(jb.fromElement(na))))(function (pa) {
          return l.bind(D.bindMaybeT(wa.monadEffect))(D.MaybeT(jb.files(pa)))(function (qa) {
            return l.bind(D.bindMaybeT(wa.monadEffect))(D.MaybeT(g.pure(wa.applicativeEffect)(Ra.item(0)(qa))))(function (Ca) {
              return g.pure(D.applicativeMaybeT(wa.monadEffect))(Na.toBlob(Ca));
            });
          });
        });
      }))))(function (na) {
        if (na instanceof I.Nothing) return X;
        if (na instanceof I.Just) return l.bind(k.widgetBind)(ya.liftAff(k.widgetMonadAff(z.monoidArray))(fb.readAsText(na.value0)))(function (pa) {
          return l.bind(k.widgetBind)(Ga.liftEffect(k.widgetMonadEff(z.monoidArray))(v.runExceptT(l.bind(v.bindExceptT(wa.monadEffect))(v.ExceptT(L.map(wa.functorEffect)(U)(ka["try"](Aa.getDefaultParseEnv(pa)))))(function (qa) {
            return v.ExceptT(ka["try"](ba.readRecord(qa)));
          }))))(function (qa) {
            if (qa instanceof Q.Right) return g.pure(k.widgetApplicative)(qa.value0);

            if (qa instanceof Q.Left) {
              var Ca = qa.value0;
              qa = p.div(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([]);
              var Qa = X,
                  Sa = p.div_(k.widgetShiftMap)([Oa.errorDisplayBox]),
                  ab = p.div_(k.widgetShiftMap)([]),
                  eb = p.span(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([Oa.errorDisplay]),
                  rb = p.text(m.widgetLiftWidget);
              Ca = "Couldn't decode MetajeloXML: " + za.show(ka.showError)(Ca);
              return qa([Qa, Sa(ab(eb([rb(Ca)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 164, column 11 - line 166, column 37): " + [qa.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 157, column 7 - line 166, column 37): " + [na.constructor.name]);
      });
    });
    return f.loopW(A.empty)(function (oa) {
      return p.div_(k.widgetShiftMap)([])(l.bind(k.widgetBind)(X)(function (na) {
        return g.pure(k.widgetApplicative)(vb(na));
      }));
    });
  }(),
      ob = function ob(U) {
    var X = p.div_(k.widgetShiftMap)([Oa.errorDisplayBox])(p.div_(k.widgetShiftMap)([])(p.span(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([Oa.errorDisplay])([p.text(m.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        oa = function oa(na) {
      return function (pa) {
        var qa = function qa(Ca) {
          return f.step(Ca)(l.bind(k.widgetBind)(p.button_(k.widgetShiftMap)([W.downloadBtn, u.onClick, u.disabled(Da["null"](Ca))])(p.text(m.widgetLiftWidget)("Download XML")))(function () {
            return l.bind(k.widgetBind)(Ga.liftEffect(k.widgetMonadEff(z.monoidArray))(na))(function () {
              return g.pure(k.widgetApplicative)(qa(Ca));
            });
          }));
        };

        return f.dyn(qa(pa));
      };
    };

    return p.div_(k.widgetShiftMap)([])(function () {
      var na = xa.encodeURIComponent(U);
      return l.bind(k.widgetBind)(Ga.liftEffect(k.widgetMonadEff(z.monoidArray))(Za(I.fromMaybe("")(na))))(function (pa) {
        return I.maybe(X)(oa(pa))(na);
      });
    }());
  },
      Eb = function Eb(U) {
    var X = function X(pa) {
      return function (qa) {
        return G["null"](qa) ? H.empty(k.widgetPlus(z.monoidArray)) : p.div_(k.widgetShiftMap)(pa)(p.ul(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([])(L.mapFlipped(L.functorArray)(qa)(function (Ca) {
          return p.li_(k.widgetShiftMap)([])(p.text(m.widgetLiftWidget)(Z.renderForeignError(Ca)));
        })));
      };
    };

    if (U.dCiteTupMay instanceof I.Nothing) return p.text(m.widgetLiftWidget)("Nothing");

    if (U.dCiteTupMay instanceof I.Just) {
      var oa = X([W.dataCiteNonFatal])(U.dCiteTupMay.value0.value1);
      if (U.dCiteTupMay.value0.value0 instanceof Q.Left) var na = R.toUnfoldable(ia.unfoldableArray)(U.dCiteTupMay.value0.value0.value0);else if (U.dCiteTupMay.value0.value0 instanceof Q.Right) na = [];else throw Error("Failed pattern match at Metajelo.UI (line 276, column 21 - line 278, column 22): " + [U.dCiteTupMay.value0.value0.constructor.name]);
      X = X([W.dataCiteFatal])(na);
      return p.div(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([])([p.p_(k.widgetShiftMap)([])(c.alt(k.widgetAlt(z.monoidArray))(c.alt(k.widgetAlt(z.monoidArray))(c.alt(k.widgetAlt(z.monoidArray))(c.alt(k.widgetAlt(z.monoidArray))(p.text(m.widgetLiftWidget)("For more information on this record, see "))(N.tabLink("https://search.datacite.org/works/" + U.doi)(p.text(m.widgetLiftWidget)("DataCite"))))(p.text(m.widgetLiftWidget)(" or ")))(N.tabLink("https://dx.doi.org/" + U.doi)(p.text(m.widgetLiftWidget)("resolve the DOI"))))(p.text(m.widgetLiftWidget)("."))), p["br'"](m.widgetLiftWidget), X, oa]);
    }

    throw Error("Failed pattern match at Metajelo.UI (line 272, column 29 - line 290, column 8): " + [U.dCiteTupMay.constructor.name]);
  },
      wb = function () {
    var U = Ja.mjUiClassPfx + "dataCiteDOI_Input",
        X = function X(pa) {
      return function (qa) {
        if (qa instanceof Q.Left) return oa(ka.error("GET /api response failed to decode: " + d.printError(qa.value0)));
        if (qa instanceof Q.Right) return g.pure(k.widgetApplicative)(new ja.Tuple(pa, I.Just.create(sa.readRecordJSON(qa.value0.body))));
        throw Error("Failed pattern match at Metajelo.UI (line 211, column 31 - line 214, column 79): " + [qa.constructor.name]);
      };
    },
        oa = function oa(pa) {
      var qa = p.div(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([]),
          Ca = na,
          Qa = p.div_(k.widgetShiftMap)([Oa.errorDisplayBox]),
          Sa = p.div_(k.widgetShiftMap)([]),
          ab = p.span(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([Oa.errorDisplay]),
          eb = p.text(m.widgetLiftWidget);
      pa = "In DataCite retrieval: " + za.show(ka.showError)(pa);
      return qa([Ca, Qa(Sa(ab([eb(pa)])))]);
    },
        na = p.div_(k.widgetShiftMap)([])(l.discard(l.discardUnit)(k.widgetBind)(L["void"](k.widgetFunctor)(p.button_(k.widgetShiftMap)([u.onClick])(p.text(m.widgetLiftWidget)("Retrieve DataCite Record"))))(function () {
      return l.bind(k.widgetBind)(p.span(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([])([p.input(m.widgetLiftWidget)([u._id(U), u.placeholder("Input DOI here")]), e.applySecond(k.widgetApply)(p.button_(k.widgetShiftMap)([u.onClick])(p.text(m.widgetLiftWidget)("Retrieve")))(N.getInputTextLE(k.widgetMonadEff(z.monoidArray))(U)), L.voidRight(k.widgetFunctor)(I.Nothing.value)(p.button_(k.widgetShiftMap)([u.onClick])(p.text(m.widgetLiftWidget)("Cancel")))]))(function (pa) {
        if (pa instanceof I.Nothing) return na;

        if (pa instanceof I.Just) {
          var qa = ua.parsePublicURL("https://api.datacite.org/dois/" + pa.value0);
          if (qa instanceof Q.Left) return oa(ka.error(qa.value0));
          if (qa instanceof Q.Right) return l.bind(k.widgetBind)(ya.liftAff(k.widgetMonadAff(z.monoidArray))(d.get(h.string)(ua.urlToString(qa.value0))))(function (Ca) {
            return X(pa.value0)(Ca);
          });
          throw Error("Failed pattern match at Metajelo.UI (line 204, column 21 - line 208, column 36): " + [qa.constructor.name]);
        }

        throw Error("Failed pattern match at Metajelo.UI (line 202, column 7 - line 208, column 36): " + [pa.constructor.name]);
      });
    }));

    return f.loopW(new ja.Tuple("", I.Nothing.value))(function (pa) {
      return p.div_(k.widgetShiftMap)([])(na);
    });
  }(),
      Fb = function Fb(U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.creator])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.creatorHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      return N.textInput(U);
    }));
  },
      qb = function qb(U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.creatorList])(N.nonEmptyArrayView(Fb)(U));
  },
      Gb = function Gb(U) {
    return function (X) {
      var oa = L.map(L.functorArray)(function (qa) {
        return qa.tab;
      })(U),
          na = L.map(L.functorArray)(function (qa) {
        return qa.page;
      })(U),
          pa = p["div'"](k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([p.text(m.widgetLiftWidget)("No pages to show!")]);
      return function (qa) {
        return function (Ca) {
          return function (Qa) {
            return p.div(qa)(Ca)([W.sideBarGrid])([p.div(qa)(Ca)([W.sideBarMenu])([p.div(qa)(Ca)([W.sideBarCol])(Qa)])]);
          };
        };
      }(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([p.nav(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([W.sideBarNav])(function (qa) {
        return L.map(L.functorArray)(function (Ca) {
          return l.discard(l.discardUnit)(k.widgetBind)(L["void"](k.widgetFunctor)(p.div(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([u.onClick, W.sideBarTab])([L.map(k.widgetFunctor)(Ia.absurd)(ja.snd(Ca))])))(function () {
            return g.pure(k.widgetApplicative)(ja.fst(Ca));
          });
        })(G.zip(G.range(0)(G.length(qa)))(qa));
      }(oa)), L.voidRight(k.widgetFunctor)(X)(function (qa) {
        return I.fromMaybe(pa)(G.index(na)(qa));
      }(X))]);
    };
  },
      Hb = function Hb(U) {
    return function (X) {
      return f.loopW(X)(Gb(U));
    };
  },
      Ib = function Ib(U) {
    var X = function X(oa) {
      return f.step(oa)(l.bind(k.widgetBind)(p.button_(k.widgetShiftMap)([W.clipBtn, u.onClick, u.disabled(Da["null"](oa))])(p.text(m.widgetLiftWidget)("Copy XML to Clipboard")))(function () {
        return l.bind(k.widgetBind)(Ga.liftEffect(k.widgetMonadEff(z.monoidArray))(ha.copyToClipboard(oa)))(function () {
          return g.pure(k.widgetApplicative)(X(oa));
        });
      }));
    };

    return f.dyn(X(U));
  },
      n = function n(U) {
    var X = function X(oa) {
      return I.maybe(g.pure(wa.applicativeEffect)(""))(ea.recordToString)(oa);
    };

    return l.bind(k.widgetBind)(Ga.liftEffect(k.widgetMonadEff(z.monoidArray))(fa.sequence(fa.traversableMaybe)(wa.applicativeEffect)(L.map(I.functorMaybe)(sb)(U))))(function (oa) {
      return p.div(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([W.recPreview])([p.div_(k.widgetShiftMap)([W.recPreviewHeader])(H.empty(k.widgetPlus(z.monoidArray))), l.bind(k.widgetBind)(Ga.liftEffect(k.widgetMonadEff(z.monoidArray))(X(oa)))(function (na) {
        return p.div(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([W.previewButtons])([ob(na), Ib(na)]);
      }), p["br'"](m.widgetLiftWidget), M.fold(M.foldableMaybe)(k.widgetMonoid(z.monoidArray))(L.map(I.functorMaybe)(ra.mkRecordWidget)(oa))]);
    });
  },
      $a = function $a(U) {
    return function (X) {
      return function (oa) {
        var na = {
          tab: p.text(m.widgetLiftWidget)("Preview"),
          page: n(U)
        },
            pa = {
          tab: p.text(m.widgetLiftWidget)("DataCite Retrieval"),
          page: M.oneOf(M.foldableArray)(k.widgetPlus(z.monoidArray))(L.map(L.functorArray)(Eb)(X))
        };
        na = [na, pa];
        return p.div_(t.shiftMapCofree(z.monoidArray))([W.sideBar])(Hb(na)(oa));
      };
    };
  },
      kb = function kb(U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.sustainability])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.sustainabilityHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.span_(t.shiftMapCofree(z.monoidArray))([W.missionStatement])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.missionStatementHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
        return N.urlInput(A.getWithDefault(new x.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(new Q.Left(""))(x.SProxy.value)(U));
      })))(function (X) {
        var oa = Q.hush(X);
        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.span_(t.shiftMapCofree(z.monoidArray))([W.fundingStatement])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.fundingStatementHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
          return N.urlInput(A.getWithDefault(new x.IsSymbol(function () {
            return "fundingUrl_Ei";
          }))()(new Q.Left(""))(x.SProxy.value)(U));
        })))(function (na) {
          var pa = Q.hush(na);
          return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "missionUrl_Ei";
          }))()(x.SProxy.value)(new I.Just(X))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "missionStatementURL";
            }))()(x.SProxy.value)(oa)))(function () {
              return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "fundingUrl_Ei";
              }))()(x.SProxy.value)(new I.Just(na))))(function () {
                return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                  return "fundingStatementURL";
                }))()(x.SProxy.value)(pa));
              });
            });
          }))(U));
        });
      });
    }));
  },
      Jb = function Jb(U) {
    return function (X) {
      return p.div_(t.shiftMapCofree(z.monoidArray))([W.resourceType])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.resourceTypeHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("resourceTypeEle")(U)))(function () {
          return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("resourceTypeSTyp")(U)))(function () {
            return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.resourceTypeGen])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.resourceTypeGenHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
              return N.menuSignal(ta.boundedEnumResourceTypeGeneral)(N.isOptionResourceTypeGeneral)(A.get(new x.IsSymbol(function () {
                return "generalType";
              }))()(x.SProxy.value)(X));
            })))(function (oa) {
              return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.resourceTypeDescr])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.resourceTypeDescrHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
                return N.textInput(l.join(I.bindMaybe)(L.map(I.functorMaybe)(Ba.fromString)(A.get(new x.IsSymbol(function () {
                  return "description";
                }))()(x.SProxy.value)(X))));
              })))(function (na) {
                return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                  return "description";
                }))()(x.SProxy.value)(L.map(I.functorMaybe)(Ba.toString)(na))))(function () {
                  return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                    return "generalType";
                  }))()(x.SProxy.value)(oa));
                }))(X));
              });
            });
          });
        });
      }));
    };
  },
      Mb = function Mb(U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.resourceMDSource])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.resourceMDSourceHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      var X = A.getWithDefault(new x.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(x.SProxy.value)(U);
      return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.url])(N.urlInput(A.getWithDefault(new x.IsSymbol(function () {
        return "url_Ei";
      }))()(new Q.Left(""))(x.SProxy.value)(U))))(function (oa) {
        var na = Q.hush(oa);
        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.relType])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([W.relTypeHeader])(H.empty(H.plusArray))))(function () {
          return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("relationTypeSTyp")(X)))(function () {
            return N.menuSignal(ta.boundedEnumRelationType)(N.isOptionRelationType)(A.get(new x.IsSymbol(function () {
              return "relationType";
            }))()(x.SProxy.value)(U));
          });
        })))(function (pa) {
          return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "url_Ei";
          }))()(x.SProxy.value)(new I.Just(oa))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "url";
            }))()(x.SProxy.value)(na)))(function () {
              return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "relationType";
              }))()(x.SProxy.value)(pa));
            });
          }))(U));
        });
      });
    }));
  },
      Nb = function Nb(U) {
    var X = I.fromMaybe(A.empty)(U);
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.relatedId])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.relatedIdHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.id])(N.textInput(A.get(new x.IsSymbol(function () {
        return "identifier";
      }))()(x.SProxy.value)(X))))(function (oa) {
        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.idType])(N.menuSignal(ta.boundedEnumIdentifierType)(N.isOptionIdentifierType)(A.get(new x.IsSymbol(function () {
          return "identifierType";
        }))()(x.SProxy.value)(X))))(function (na) {
          return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.relType])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.relTypeHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
            return N.menuSignal(ta.boundedEnumRelationType)(N.isOptionRelationType)(A.get(new x.IsSymbol(function () {
              return "relationType";
            }))()(x.SProxy.value)(X));
          })))(function (pa) {
            return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(I.Just.create(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "identifier";
            }))()(x.SProxy.value)(oa)))(function () {
              return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "identifierType";
              }))()(x.SProxy.value)(na)))(function () {
                return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                  return "relationType";
                }))()(x.SProxy.value)(pa));
              });
            }))(X)));
          });
        });
      });
    }));
  },
      Lb = function Lb(U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.relatedIds])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.relatedIdsHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      return p.div_(t.shiftMapCofree(z.monoidArray))([W.relatedIdList])(N.nonEmptyArrayView(Nb)(U));
    }));
  },
      T = function T(U) {
    var X = I.fromMaybe(A.empty)(U);
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.institutionPolicy])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.institutionPolicyHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      var oa = A.getWithDefault(new x.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(x.SProxy.value)(X);
      return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.policy])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.policyHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
        return N.menuSignal(N.boundedEnumPolPolType)(N.isOptionPolPolType)(I.Just.create(A.getWithDefault(new x.IsSymbol(function () {
          return "polPolType";
        }))()(N.FreeTextPolicy.value)(x.SProxy.value)(X)));
      })))(function (na) {
        var pa = I.fromMaybe(N.FreeTextPolicy.value)(na);
        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.policy])(N.textInput(A.get(new x.IsSymbol(function () {
          return "policy_str";
        }))()(x.SProxy.value)(X))))(function (qa) {
          var Ca = N.checkPolicy(pa)(I.maybe("")(Ba.toString)(qa));
          return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(function () {
            if (Ca instanceof Q.Right) return z.mempty(k.widgetMonoid(z.monoidArray));
            if (Ca instanceof Q.Left) return N.errorDisplay(za.showString)(new I.Just(Ca.value0));
            throw Error("Failed pattern match at Metajelo.UI (line 970, column 13 - line 972, column 40): " + [Ca.constructor.name]);
          }()))(function () {
            var Qa = Q.hush(Ca);
            return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.policyType])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.policyTypeHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
              return N.menuSignal(V.boundedEnumMaybe(va.smallBoundedPolicyType)(va.boundedEnumPolicyType))(N.isOptionMaybePolicyType)(A.get(new x.IsSymbol(function () {
                return "policyType";
              }))()(x.SProxy.value)(X));
            })))(function (Sa) {
              return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.applies])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.appliesHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
                return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("appliesToProductAttr")(oa)))(function () {
                  return N.menuSignal(V.boundedEnumMaybe(V.smallBoundedBoolean)(V.boundedEnumBoolean))(N.isOptionMaybeBoolean)(A.get(new x.IsSymbol(function () {
                    return "appliesToProduct";
                  }))()(x.SProxy.value)(X));
                });
              })))(function (ab) {
                return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(I.Just.create(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                  return "polPolType";
                }))()(x.SProxy.value)(new I.Just(pa))))(function () {
                  return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                    return "policy_str";
                  }))()(x.SProxy.value)(qa)))(function () {
                    return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                      return "policy_ei";
                    }))()(x.SProxy.value)(new I.Just(Ca))))(function () {
                      return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                        return "policy";
                      }))()(x.SProxy.value)(Qa)))(function () {
                        return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                          return "policyType";
                        }))()(x.SProxy.value)(Sa)))(function () {
                          return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                            return "appliesToProduct";
                          }))()(x.SProxy.value)(ab));
                        });
                      });
                    });
                  });
                }))(X)));
              });
            });
          });
        });
      });
    }));
  },
      aa = function aa(U) {
    return function (X) {
      var oa = L.mapFlipped(I.functorMaybe)(ja.snd(X))(function (na) {
        return L.mapFlipped(J.functorNonEmptyArray)(na)(function (pa) {
          return E.execState(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "descs_on";
          }))()(x.SProxy.value)(new I.Just(U))))(pa);
        });
      });
      return p.div_(t.shiftMapCofree(z.monoidArray))([W.institutionPolicies])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.institutionPoliciesHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("institutionPoliciesEle")(U)))(function () {
          return N.nonEmptyArrayView(T)(new ja.Tuple(ja.fst(X), oa));
        });
      }));
    };
  },
      Ka = function Ka(U) {
    return function (X) {
      return p.div_(t.shiftMapCofree(z.monoidArray))([W.identifier])(l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.id])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.idHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
        return N.textInput(A.get(new x.IsSymbol(function () {
          return "identifier";
        }))()(x.SProxy.value)(X));
      })))(function (oa) {
        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.idType])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.idTypeHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
          return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("identifierTypeSTyp")(U)))(function () {
            return N.menuSignal(ta.boundedEnumIdentifierType)(N.isOptionIdentifierType)(A.get(new x.IsSymbol(function () {
              return "identifierType";
            }))()(x.SProxy.value)(X));
          });
        })))(function (na) {
          return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "identifier";
          }))()(x.SProxy.value)(oa)))(function () {
            return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "identifierType";
            }))()(x.SProxy.value)(na));
          }))(X));
        });
      }));
    };
  },
      Ea = function Ea(U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.institutionContact])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.institutionContactHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.contactEmail])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.contactEmailHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
        return N.emailInput(A.getWithDefault(new x.IsSymbol(function () {
          return "email_Ei";
        }))()(new Q.Left(""))(x.SProxy.value)(U));
      })))(function (X) {
        var oa = Q.hush(X);
        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.contactType])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.contactTypeHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
          return N.menuSignal(V.boundedEnumMaybe(va.smallBoundedInstitutionContactType)(va.boundedEnumInstitutionContactType))(N.isOptionMaybeInstitutionContactType)(A.get(new x.IsSymbol(function () {
            return "contactType";
          }))()(x.SProxy.value)(U));
        })))(function (na) {
          return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "email_Ei";
          }))()(x.SProxy.value)(new I.Just(X))))(function () {
            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "emailAddress";
            }))()(x.SProxy.value)(oa)))(function () {
              return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "contactType";
              }))()(x.SProxy.value)(na));
            });
          }))(U));
        });
      });
    }));
  },
      Pa = function Pa(U) {
    var X = I.fromMaybe(A.empty)(U);
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.location])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.locationHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      var oa = A.getWithDefault(new x.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(x.SProxy.value)(X);
      return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("locationEle")(oa)))(function () {
        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([])(p.span_(t.shiftMapCofree(z.monoidArray))([W.institutionId])(Ka(oa)(bb(new x.IsSymbol(function () {
          return "institutionID_opt";
        }))()(x.SProxy.value)(X)))))(function (na) {
          var pa = A.getAll(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
            return "identifier";
          }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
            return "identifierType";
          }))()()()()(A.getAllOptionNil))))(na);
          return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.institutionName])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.institutionNameHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
            return N.textInput(A.get(new x.IsSymbol(function () {
              return "institutionName";
            }))()(x.SProxy.value)(X));
          })))(function (qa) {
            return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.institutionType])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.institutionTypeHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
              return N.menuSignal(va.boundedEnumInstitutionType)(N.isOptionInstitutionType)(A.get(new x.IsSymbol(function () {
                return "institutionType";
              }))()(x.SProxy.value)(X));
            })))(function (Ca) {
              return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p["br'"](m.widgetLiftWidget)))(function () {
                return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.superOrg])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.superOrgHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
                  return N.textInput(l.join(I.bindMaybe)(A.get(new x.IsSymbol(function () {
                    return "superOrganizationName";
                  }))()(x.SProxy.value)(X)));
                })))(function (Qa) {
                  return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Ea(bb(new x.IsSymbol(function () {
                    return "institutionContact_opt";
                  }))()(x.SProxy.value)(X)))(function (Sa) {
                    var ab = A.getSubset()()(la.consKeys(new x.IsSymbol(function () {
                      return "contactType";
                    }))(la.consKeys(new x.IsSymbol(function () {
                      return "emailAddress";
                    }))(la.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                      return "contactType";
                    }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                      return "emailAddress";
                    }))()()()()(A.getAllOptionNil))))(Sa);
                    return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(kb(bb(new x.IsSymbol(function () {
                      return "iSustain_opt";
                    }))()(x.SProxy.value)(X)))(function (eb) {
                      var rb = A.getSubset()()(la.consKeys(new x.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))(la.consKeys(new x.IsSymbol(function () {
                        return "missionStatementURL";
                      }))(la.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                        return "missionStatementURL";
                      }))()()()()(A.getAllOptionNil))))(eb);
                      return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(aa(oa)(new ja.Tuple(A.getWithDefault(new x.IsSymbol(function () {
                        return "_numPolicies";
                      }))()(1)(x.SProxy.value)(X), A.get(new x.IsSymbol(function () {
                        return "institutionPolicies_opt";
                      }))()(x.SProxy.value)(X))))(function (yb) {
                        var db = ja.fst(yb),
                            Ob = ja.snd(yb),
                            Qb = l.join(I.bindMaybe)(L.map(I.functorMaybe)(fa.sequence(J.traversableNonEmptyArray)(I.applicativeMaybe))(L.map(I.functorMaybe)(L.map(J.functorNonEmptyArray)(A.getSubset()()(la.consKeys(new x.IsSymbol(function () {
                          return "appliesToProduct";
                        }))(la.consKeys(new x.IsSymbol(function () {
                          return "policy";
                        }))(la.consKeys(new x.IsSymbol(function () {
                          return "policyType";
                        }))(la.nilKeys))))(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "appliesToProduct";
                        }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "policy";
                        }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "policyType";
                        }))()()()()(A.getAllOptionNil)))))))(Ob)));
                        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.versioning])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.versioningHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
                          return N.checkBoxS(A.getWithDefault(new x.IsSymbol(function () {
                            return "versioning";
                          }))()(!1)(x.SProxy.value)(X));
                        })))(function (Pb) {
                          return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                            return "institutionID_opt";
                          }))()(x.SProxy.value)(new I.Just(na))))(function () {
                            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                              return "institutionID";
                            }))()(x.SProxy.value)(pa)))(function () {
                              return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                return "institutionName";
                              }))()(x.SProxy.value)(qa)))(function () {
                                return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                  return "institutionType";
                                }))()(x.SProxy.value)(Ca)))(function () {
                                  return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                    return "superOrganizationName";
                                  }))()(x.SProxy.value)(new I.Just(Qa))))(function () {
                                    return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                      return "institutionContact_opt";
                                    }))()(x.SProxy.value)(new I.Just(Sa))))(function () {
                                      return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                        return "institutionContact";
                                      }))()(x.SProxy.value)(ab)))(function () {
                                        return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                          return "iSustain_opt";
                                        }))()(x.SProxy.value)(new I.Just(eb))))(function () {
                                          return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                            return "institutionSustainability";
                                          }))()(x.SProxy.value)(rb)))(function () {
                                            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                              return "_numPolicies";
                                            }))()(x.SProxy.value)(new I.Just(db))))(function () {
                                              return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                                return "institutionPolicies_opt";
                                              }))()(x.SProxy.value)(Ob)))(function () {
                                                return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                                  return "institutionPolicies";
                                                }))()(x.SProxy.value)(Qb)))(function () {
                                                  return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                                    return "versioning";
                                                  }))()(x.SProxy.value)(new I.Just(Pb))))(function () {
                                                    return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                                      return "descs_on";
                                                    }))()(x.SProxy.value)(new I.Just(oa)));
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
                          }))(X)))(function (Rb) {
                            return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(new I.Just(Rb));
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
      Va = function Va(U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.basicMetadata])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.basicMetadataHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(nb(new ja.Tuple(A.getWithDefault(new x.IsSymbol(function () {
        return "_numTitles";
      }))()(1)(x.SProxy.value)(U), A.get(new x.IsSymbol(function () {
        return "titles";
      }))()(x.SProxy.value)(U))))(function (X) {
        var oa = ja.fst(X),
            na = ja.snd(X);
        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(qb(new ja.Tuple(A.getWithDefault(new x.IsSymbol(function () {
          return "_numCreators";
        }))()(1)(x.SProxy.value)(U), A.get(new x.IsSymbol(function () {
          return "creators";
        }))()(x.SProxy.value)(U))))(function (pa) {
          var qa = ja.fst(pa),
              Ca = ja.snd(pa);
          return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.pubyear])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.pubyearHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
            return N.natInput(A.get(new x.IsSymbol(function () {
              return "publicationYear";
            }))()(x.SProxy.value)(U));
          })))(function (Qa) {
            return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
              return "titles";
            }))()(x.SProxy.value)(na)))(function () {
              return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                return "_numTitles";
              }))()(x.SProxy.value)(new I.Just(oa))))(function () {
                return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                  return "creators";
                }))()(x.SProxy.value)(Ca)))(function () {
                  return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                    return "_numCreators";
                  }))()(x.SProxy.value)(new I.Just(qa))))(function () {
                    return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                      return "publicationYear";
                    }))()(x.SProxy.value)(Qa));
                  });
                });
              });
            }))(U));
          });
        });
      });
    }));
  },
      Ya = function Ya(U) {
    var X = I.fromMaybe(A.empty)(U);
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.product])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.productHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(wb)(function (oa) {
        var na = L.map(I.functorMaybe)(function () {
          var pa = Y.unwrap(sa.newtypeJSONWithErr);
          return function (qa) {
            return C.runWriter(pa(qa));
          };
        }())(oa.value1);
        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(function () {
          if (na instanceof I.Nothing) return X;

          if (na instanceof I.Just) {
            if (na.value0.value0 instanceof Q.Right) return Bb(X)(na.value0.value0.value0);
            if (na.value0.value0 instanceof Q.Left) return X;
            throw Error("Failed pattern match at Metajelo.UI (line 636, column 47 - line 638, column 25): " + [na.value0.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Metajelo.UI (line 634, column 21 - line 638, column 25): " + [na.constructor.name]);
        }()))(function (pa) {
          var qa = A.getWithDefault(new x.IsSymbol(function () {
            return "dataCiteState";
          }))()({
            doi: oa.value0,
            dCiteTupMay: na
          })(x.SProxy.value)(pa),
              Ca = A.getWithDefault(new x.IsSymbol(function () {
            return "descs_on";
          }))()(!0)(x.SProxy.value)(pa);
          return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("supplementaryProductEle")(Ca)))(function () {
            return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Va(bb(new x.IsSymbol(function () {
              return "basicMetadata_opt";
            }))()(x.SProxy.value)(pa)))(function (Qa) {
              var Sa = A.getSubset()()(la.consKeys(new x.IsSymbol(function () {
                return "creators";
              }))(la.consKeys(new x.IsSymbol(function () {
                return "publicationYear";
              }))(la.consKeys(new x.IsSymbol(function () {
                return "titles";
              }))(la.nilKeys))))(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "creators";
              }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "publicationYear";
              }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "titles";
              }))()()()()(A.getAllOptionNil)))))(Qa);
              return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.resourceId])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.resourceIdHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
                return Ka(Ca)(bb(new x.IsSymbol(function () {
                  return "resourceID_opt";
                }))()(x.SProxy.value)(pa));
              })))(function (ab) {
                var eb = A.getAll(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                  return "identifier";
                }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                  return "identifierType";
                }))()()()()(A.getAllOptionNil))))(ab);
                return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Jb(Ca)(bb(new x.IsSymbol(function () {
                  return "resourceType_opt";
                }))()(x.SProxy.value)(pa)))(function (rb) {
                  var yb = A.getSubset()()(la.consKeys(new x.IsSymbol(function () {
                    return "description";
                  }))(la.consKeys(new x.IsSymbol(function () {
                    return "generalType";
                  }))(la.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                    return "description";
                  }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                    return "generalType";
                  }))()()()()(A.getAllOptionNil))))(rb);
                  return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Ab(Ca)(new ja.Tuple(A.getWithDefault(new x.IsSymbol(function () {
                    return "_numFormats";
                  }))()(0)(x.SProxy.value)(pa), A.getWithDefault(new x.IsSymbol(function () {
                    return "format";
                  }))()([])(x.SProxy.value)(pa))))(function (db) {
                    var Ob = ja.fst(db),
                        Qb = ja.snd(db);
                    return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Mb(I.fromMaybe(A.empty)(hb(new x.IsSymbol(function () {
                      return "resMdsOpts_opt";
                    }))()(x.SProxy.value)(pa)(Ca))))(function (Pb) {
                      var Rb = A.getSubset()()(la.consKeys(new x.IsSymbol(function () {
                        return "relationType";
                      }))(la.consKeys(new x.IsSymbol(function () {
                        return "url";
                      }))(la.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                        return "relationType";
                      }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                        return "url";
                      }))()()()()(A.getAllOptionNil))))(Pb);
                      return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Pa(hb(new x.IsSymbol(function () {
                        return "locationOpts_opt";
                      }))()(x.SProxy.value)(pa)(Ca)))(function (Sb) {
                        var Tb = l.join(I.bindMaybe)(L.map(I.functorMaybe)(A.getSubset()()(la.consKeys(new x.IsSymbol(function () {
                          return "institutionContact";
                        }))(la.consKeys(new x.IsSymbol(function () {
                          return "institutionID";
                        }))(la.consKeys(new x.IsSymbol(function () {
                          return "institutionName";
                        }))(la.consKeys(new x.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(la.consKeys(new x.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(la.consKeys(new x.IsSymbol(function () {
                          return "institutionType";
                        }))(la.consKeys(new x.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(la.consKeys(new x.IsSymbol(function () {
                          return "versioning";
                        }))(la.nilKeys)))))))))(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(A.getAllOptionNil)))))))))))(Sb));
                        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                          return "basicMetadata_opt";
                        }))()(x.SProxy.value)(new I.Just(Qa))))(function () {
                          return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                            return "basicMetadata";
                          }))()(x.SProxy.value)(Sa)))(function () {
                            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                              return "resourceID_opt";
                            }))()(x.SProxy.value)(new I.Just(ab))))(function () {
                              return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                return "resourceID";
                              }))()(x.SProxy.value)(new I.Just(eb))))(function () {
                                return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                  return "resourceType_opt";
                                }))()(x.SProxy.value)(new I.Just(rb))))(function () {
                                  return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                    return "resourceType";
                                  }))()(x.SProxy.value)(yb)))(function () {
                                    return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                      return "_numFormats";
                                    }))()(x.SProxy.value)(new I.Just(Ob))))(function () {
                                      return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                        return "format";
                                      }))()(x.SProxy.value)(new I.Just(Qb))))(function () {
                                        return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                          return "resMdsOpts_opt";
                                        }))()(x.SProxy.value)(new I.Just(Pb))))(function () {
                                          return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                            return "resourceMetadataSource";
                                          }))()(x.SProxy.value)(new I.Just(Rb))))(function () {
                                            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                              return "locationOpts_opt";
                                            }))()(x.SProxy.value)(Sb)))(function () {
                                              return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                                return "location";
                                              }))()(x.SProxy.value)(Tb)))(function () {
                                                return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                                  return "dataCiteState";
                                                }))()(x.SProxy.value)(new I.Just(qa))))(function () {
                                                  return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                                    return "descs_on";
                                                  }))()(x.SProxy.value)(new I.Just(Ca)));
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
                        }))(pa)))(function (Ub) {
                          return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(new I.Just(Ub));
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
      Kb = function Kb(U) {
    return function (X) {
      var oa = L.mapFlipped(I.functorMaybe)(ja.snd(X))(function (na) {
        return L.mapFlipped(J.functorNonEmptyArray)(na)(function (pa) {
          return E.execState(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
            return "descs_on";
          }))()(x.SProxy.value)(new I.Just(U))))(pa);
        });
      });
      return p.div_(t.shiftMapCofree(z.monoidArray))([W.products])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.productsHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
        return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("supplementaryProductsEle")(U)))(function () {
          return p.div_(t.shiftMapCofree(z.monoidArray))([W.productList])(N.nonEmptyArrayView(Ya)(new ja.Tuple(ja.fst(X), oa)));
        });
      }));
    };
  },
      Wa = function Wa(U) {
    var X = A.getWithDefault(new x.IsSymbol(function () {
      return "descs_on";
    }))()(!0)(x.SProxy.value)(U);
    return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("recordEle")(X)))(function () {
      return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("recordTypeCTyp")(X)))(function () {
        return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Ta(bb(new x.IsSymbol(function () {
          return "identifier_opt";
        }))()(x.SProxy.value)(U)))(function (oa) {
          var na = A.getAll(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
            return "identifier";
          }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
            return "identifierType";
          }))()()()()(A.getAllOptionNil))))(oa);
          A.getWithDefault(new x.IsSymbol(function () {
            return "date_Ei";
          }))()(new Q.Left(""))(x.SProxy.value)(U);
          return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.date])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.dateHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
            return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(N.mkDesc("dateEle")(X)))(function () {
              return N.dateInput(A.getWithDefault(new x.IsSymbol(function () {
                return "date_Ei";
              }))()(new Q.Left(""))(x.SProxy.value)(U));
            });
          })))(function (pa) {
            var qa = Q.hush(pa);
            return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Lb(new ja.Tuple(A.getWithDefault(new x.IsSymbol(function () {
              return "_numRelIds";
            }))()(0)(x.SProxy.value)(U), A.get(new x.IsSymbol(function () {
              return "relId_opts";
            }))()(x.SProxy.value)(U))))(function (Ca) {
              var Qa = ja.fst(Ca),
                  Sa = ja.snd(Ca),
                  ab = l.join(I.bindMaybe)(L.map(I.functorMaybe)(fa.sequence(J.traversableNonEmptyArray)(I.applicativeMaybe))(L.map(I.functorMaybe)(L.map(J.functorNonEmptyArray)(A.getAll(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "identifier";
              }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "identifierType";
              }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "relationType";
              }))()()()()(A.getAllOptionNil)))))))(Sa)));
              return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Kb(X)(new ja.Tuple(A.getWithDefault(new x.IsSymbol(function () {
                return "_numSupProds";
              }))()(0)(x.SProxy.value)(U), A.get(new x.IsSymbol(function () {
                return "supProd_opts";
              }))()(x.SProxy.value)(U))))(function (eb) {
                var rb = ja.fst(eb),
                    yb = ja.snd(eb),
                    db = l.join(I.bindMaybe)(L.map(I.functorMaybe)(fa.sequence(J.traversableNonEmptyArray)(I.applicativeMaybe))(L.map(I.functorMaybe)(L.map(J.functorNonEmptyArray)(A.getSubset()()(la.consKeys(new x.IsSymbol(function () {
                  return "basicMetadata";
                }))(la.consKeys(new x.IsSymbol(function () {
                  return "format";
                }))(la.consKeys(new x.IsSymbol(function () {
                  return "location";
                }))(la.consKeys(new x.IsSymbol(function () {
                  return "resourceID";
                }))(la.consKeys(new x.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))(la.consKeys(new x.IsSymbol(function () {
                  return "resourceType";
                }))(la.nilKeys)))))))(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                  return "basicMetadata";
                }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                  return "format";
                }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                  return "location";
                }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                  return "resourceID";
                }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                  return "resourceType";
                }))()()()()(A.getAllOptionNil))))))))))(yb)));
                return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                  return "identifier_opt";
                }))()(x.SProxy.value)(new I.Just(oa))))(function () {
                  return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                    return "identifier";
                  }))()(x.SProxy.value)(na)))(function () {
                    return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                      return "date_Ei";
                    }))()(x.SProxy.value)(new I.Just(pa))))(function () {
                      return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                        return "date";
                      }))()(x.SProxy.value)(qa)))(function () {
                        return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                          return "_numRelIds";
                        }))()(x.SProxy.value)(new I.Just(Qa))))(function () {
                          return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                            return "relId_opts";
                          }))()(x.SProxy.value)(Sa)))(function () {
                            return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                              return "relatedIdentifiers";
                            }))()(x.SProxy.value)(ab)))(function () {
                              return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                return "_numSupProds";
                              }))()(x.SProxy.value)(new I.Just(rb))))(function () {
                                return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                  return "supProd_opts";
                                }))()(x.SProxy.value)(yb)))(function () {
                                  return l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                    return "supplementaryProducts";
                                  }))()(x.SProxy.value)(db)))(function () {
                                    return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                                      return "descs_on";
                                    }))()(x.SProxy.value)(new I.Just(X)));
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
      cb = f.loopS(z.monoidArray)(A.empty)(function (U) {
    return p.div_(t.shiftMapCofree(z.monoidArray))([W.record])(l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.recordHeader])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
      return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(f.display(p.div_(k.widgetShiftMap)([W.reloadDescr])(H.empty(k.widgetPlus(z.monoidArray)))))(function () {
        return p.div_(t.shiftMapCofree(z.monoidArray))([W.recFlexBox])(function () {
          var X = I.fromMaybe([])(L.map(I.functorMaybe)(F.toArray)(A.get(new x.IsSymbol(function () {
            return "supProd_opts";
          }))()(x.SProxy.value)(U))),
              oa = G.catMaybes(L.map(L.functorArray)(function (na) {
            return A.get(new x.IsSymbol(function () {
              return "dataCiteState";
            }))()(x.SProxy.value)(na);
          })(X));
          return l.discard(l.discardUnit)(t.bindCofree(k.widgetAlternative(z.monoidArray)))(g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(P.unsafePerformEffect(da.log(Ga.monadEffectEffect)("dcParseTups len is " + za.show(za.showInt)(G.length(oa))))))(function () {
            return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(p.div_(t.shiftMapCofree(z.monoidArray))([W.recEditor])(function () {
              var na = A.getWithDefault(new x.IsSymbol(function () {
                return "descs_on";
              }))()(!0)(x.SProxy.value)(U);
              return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(N.showDescSig(na))(function (pa) {
                return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Ha)(function (qa) {
                  var Ca = A.getSubset()()(la.consKeys(new x.IsSymbol(function () {
                    return "date";
                  }))(la.consKeys(new x.IsSymbol(function () {
                    return "identifier";
                  }))(la.consKeys(new x.IsSymbol(function () {
                    return "lastModified";
                  }))(la.consKeys(new x.IsSymbol(function () {
                    return "relatedIdentifiers";
                  }))(la.consKeys(new x.IsSymbol(function () {
                    return "supplementaryProducts";
                  }))(la.nilKeys))))))(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                    return "date";
                  }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                    return "identifier";
                  }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                    return "lastModified";
                  }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                    return "relatedIdentifiers";
                  }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                    return "supplementaryProducts";
                  }))()()()()(A.getAllOptionNil)))))))(qa);
                  qa = I.isNothing(Ca) ? U : qa;
                  return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(Wa(qa))(function (Qa) {
                    var Sa = A.get(new x.IsSymbol(function () {
                      return "lastModified";
                    }))()(x.SProxy.value)(Qa),
                        ab = P.unsafePerformEffect(ca.nowDateTime);
                    return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))(g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(ma.append(K.semigroupFirst)(Sa)(K.First(new I.Just(ab)))))(function (eb) {
                      return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.discard(l.discardUnit)(r.bindStateT(w.monadIdentity))(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                        return "lastModified";
                      }))()(x.SProxy.value)(eb)))(function () {
                        return l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                          return "descs_on";
                        }))()(x.SProxy.value)(new I.Just(pa)));
                      }))(Qa));
                    });
                  });
                });
              });
            }()))(function (na) {
              var pa = A.getSubset()()(la.consKeys(new x.IsSymbol(function () {
                return "date";
              }))(la.consKeys(new x.IsSymbol(function () {
                return "identifier";
              }))(la.consKeys(new x.IsSymbol(function () {
                return "lastModified";
              }))(la.consKeys(new x.IsSymbol(function () {
                return "relatedIdentifiers";
              }))(la.consKeys(new x.IsSymbol(function () {
                return "supplementaryProducts";
              }))(la.nilKeys))))))(A.getAllAny()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "date";
              }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "identifier";
              }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "lastModified";
              }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "relatedIdentifiers";
              }))()()()()(A.getAllOptionCons(new x.IsSymbol(function () {
                return "supplementaryProducts";
              }))()()()()(A.getAllOptionNil)))))))(na),
                  qa = A.getWithDefault(new x.IsSymbol(function () {
                return "tabIx";
              }))()(0)(x.SProxy.value)(na);
              return l.bind(t.bindCofree(k.widgetAlternative(z.monoidArray)))($a(pa)(oa)(qa))(function (Ca) {
                return g.pure(t.applicativeCofree(k.widgetAlternative(z.monoidArray)))(E.execState(l.bind(r.bindStateT(w.monadIdentity))(B.get(r.monadStateStateT(w.monadIdentity)))(A.maySetOptState(new x.IsSymbol(function () {
                  return "tabIx";
                }))()(x.SProxy.value)(new I.Just(Ca))))(na));
              });
            });
          });
        }());
      });
    }));
  }),
      xb = p["div'"](k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([p.div(k.widgetMultiAlternative(z.monoidArray))(k.widgetShiftMap)([W.page])(g.pure(g.applicativeArray)(f.dyn(cb)))]);

  b.runFormSPA = function (U) {
    return y.runWidgetInDom(U)(xb);
  };

  b.page = xb;
  b.utf8DataAttr = "data:text/plain;charset=utf-8";
  b.downloadButton = ob;
  b.mkDLAnchorAndClicker = Za;
  b.uploadButtonSig = Ha;
  b.dataCiteButtonSig = wb;
  b.fillWithDataCite = Bb;
  b.dataCiteErrorWidg = Eb;
  b.copyButton = Ib;
  b.fillMetajeloRecordExtra = vb;
  b.fillSProdExtra = pb;
  b.fillBasicMetadataExtra = La;
  b.fillLocationRowExtra = Db;
  b.fillIContactExtra = ub;
  b.fillSustainExtra = tb;
  b.fillPolicyExtra = Xa;
  b.fillResourceMDSExtra = Cb;
  b.accumulateMetajeloRecord = cb;
  b.recWidg = n;
  b.finalizeRecord = sb;
  b.accumulateMetajeloRecUI = Wa;
  b.accumulateSuppProd = Ya;
  b.supProdSigArray = Kb;
  b.accumulateLocation = Pa;
  b.accumulateSustain = kb;
  b.accumulateIdent = Ka;
  b.genRecIdent = Ta;
  b.accumulateRelatedIdent = Nb;
  b.relIdSigArray = Lb;
  b.accumulateBasicMetadata = Va;
  b.accumulateResType = Jb;
  b.formatSignal = zb;
  b.formatSigArray = Ab;
  b.titleSignal = Ua;
  b.titleSigArray = nb;
  b.creatorSignal = Fb;
  b.creatorSigArray = qb;
  b.accumulateResMdSource = Mb;
  b.accumulateContact = Ea;
  b.accumulatePolicy = T;
  b.policySigArray = aa;
  b.getOpt = bb;
  b.updateDescOn = hb;
  b.makeSidebar = $a;
  b.createTabSignal = Hb;
  b.createTabWidget = Gb;
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
//# sourceMappingURL=prod.9736e68a.js.map