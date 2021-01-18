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
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, c, e) {
  if (a == Array.prototype || a == Object.prototype) return a;
  a[c] = e.value;
  return a;
};

$jscomp.getGlobal = function (a) {
  a = ["object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) && globalThis, a, "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window, "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self, "object" == (typeof global === "undefined" ? "undefined" : _typeof(global)) && global];

  for (var c = 0; c < a.length; ++c) {
    var e = a[c];
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

var $jscomp$lookupPolyfilledValue = function $jscomp$lookupPolyfilledValue(a, c) {
  var e = $jscomp.propertyToPolyfillSymbol[c];
  if (null == e) return a[c];
  e = a[e];
  return void 0 !== e ? e : a[c];
};

$jscomp.polyfill = function (a, c, e, g) {
  c && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, c, e, g) : $jscomp.polyfillUnisolated(a, c, e, g));
};

$jscomp.polyfillUnisolated = function (a, c, e, g) {
  e = $jscomp.global;
  a = a.split(".");

  for (g = 0; g < a.length - 1; g++) {
    var f = a[g];
    if (!(f in e)) return;
    e = e[f];
  }

  a = a[a.length - 1];
  g = e[a];
  c = c(g);
  c != g && null != c && $jscomp.defineProperty(e, a, {
    configurable: !0,
    writable: !0,
    value: c
  });
};

$jscomp.polyfillIsolated = function (a, c, e, g) {
  var f = a.split(".");
  a = 1 === f.length;
  g = f[0];
  g = !a && g in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var l = 0; l < f.length - 1; l++) {
    var p = f[l];
    if (!(p in g)) return;
    g = g[p];
  }

  f = f[f.length - 1];
  e = $jscomp.IS_SYMBOL_NATIVE && "es6" === e ? g[f] : null;
  c = c(e);
  null != c && (a ? $jscomp.defineProperty($jscomp.polyfills, f, {
    configurable: !0,
    writable: !0,
    value: c
  }) : c !== e && ($jscomp.propertyToPolyfillSymbol[f] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(f) : $jscomp.POLYFILL_PREFIX + f, f = $jscomp.propertyToPolyfillSymbol[f], $jscomp.defineProperty(g, f, {
    configurable: !0,
    writable: !0,
    value: c
  })));
};

$jscomp.initSymbol = function () {};

$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;

  var c = function c(f, l) {
    this.$jscomp$symbol$id_ = f;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: l
    });
  };

  c.prototype.toString = function () {
    return this.$jscomp$symbol$id_;
  };

  var e = 0,
      g = function g(f) {
    if (this instanceof g) throw new TypeError("Symbol is not a constructor");
    return new c("jscomp_symbol_" + (f || "") + "_" + e++, f);
  };

  return g;
}, "es6", "es3");

$jscomp.initSymbolIterator = function () {};

$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var c = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < c.length; e++) {
    var g = $jscomp.global[c[e]];
    "function" === typeof g && "function" != typeof g.prototype[a] && $jscomp.defineProperty(g.prototype, a, {
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
  var e = 0,
      g = !1,
      f = {
    next: function next() {
      if (!g && e < a.length) {
        var l = e++;
        return {
          value: c(l, a[l]),
          done: !1
        };
      }

      g = !0;
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

$jscomp.checkStringArgs = function (a, c, e) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + e + " must not be null or undefined");
  if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + e + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (c) {
    var e = $jscomp.checkStringArgs(this, null, "codePointAt"),
        g = e.length;
    c = Number(c) || 0;

    if (0 <= c && c < g) {
      c |= 0;
      var f = e.charCodeAt(c);
      if (55296 > f || 56319 < f || c + 1 === g) return f;
      c = e.charCodeAt(c + 1);
      return 56320 > c || 57343 < c ? f : 1024 * (f - 55296) + c + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (c) {
    for (var e = "", g = 0; g < arguments.length; g++) {
      var f = Number(arguments[g]);
      if (0 > f || 1114111 < f || f !== Math.floor(f)) throw new RangeError("invalid_code_point " + f);
      65535 >= f ? e += String.fromCharCode(f) : (f -= 65536, e += String.fromCharCode(f >>> 10 & 1023 | 55296), e += String.fromCharCode(f & 1023 | 56320));
    }

    return e;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (c, e, g) {
    e = null != e ? e : function (k) {
      return k;
    };
    var f = [],
        l = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];

    if ("function" == typeof l) {
      c = l.call(c);

      for (var p = 0; !(l = c.next()).done;) {
        f.push(e.call(g, l.value, p++));
      }
    } else for (l = c.length, p = 0; p < l; p++) {
      f.push(e.call(g, c[p], p));
    }

    return f;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (c, e) {
    var g = $jscomp.checkStringArgs(this, c, "endsWith");
    c += "";
    void 0 === e && (e = g.length);
    e = Math.max(0, Math.min(e | 0, g.length));

    for (var f = c.length; 0 < f && 0 < e;) {
      if (g[--e] != c[--f]) return !1;
    }

    return 0 >= f;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (c, e) {
    var g = $jscomp.checkStringArgs(this, c, "startsWith");
    c += "";
    var f = g.length,
        l = c.length;
    e = Math.max(0, Math.min(e | 0, g.length));

    for (var p = 0; p < l && e < f;) {
      if (g[e++] != c[p++]) return !1;
    }

    return p >= l;
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, c, e) {
  a instanceof String && (a = String(a));

  for (var g = a.length, f = 0; f < g; f++) {
    var l = a[f];
    if (c.call(e, l, f, a)) return {
      i: f,
      v: l
    };
  }

  return {
    i: -1,
    v: void 0
  };
};

$jscomp.polyfill("Array.prototype.find", function (a) {
  return a ? a : function (c, e) {
    return $jscomp.findInternal(this, c, e).v;
  };
}, "es6", "es3");
var PS = {};

(function (a) {
  a._ajax = function () {
    var c = {};
    "undefined" === typeof module || !module.require || "undefined" !== typeof process && process.versions.electron ? (c.newXHR = function () {
      return new XMLHttpRequest();
    }, c.fixupUrl = function (e) {
      return e || "/";
    }, c.getResponse = function (e) {
      return e.response;
    }) : (c.newXHR = function () {
      return new (module.require("xhr2"))();
    }, c.fixupUrl = function (e, g) {
      return null === g.nodejsBaseUrl ? (g = module.require("url"), e = g.parse(e), e.protocol = e.protocol || "http:", e.hostname = e.hostname || "localhost", g.format(e)) : e || "/";
    }, c.getResponse = function (e) {
      return e.response;
    });
    return function (e, g) {
      return function (f, l) {
        var p = c.newXHR(),
            k = c.fixupUrl(g.url, p);
        p.open(g.method || "GET", k, !0, g.username, g.password);
        if (g.headers) try {
          k = 0;

          for (var n; null != (n = g.headers[k]); k++) {
            p.setRequestHeader(n.field, n.value);
          }
        } catch (r) {
          f(r);
        }

        n = function n(r) {
          return function () {
            f(Error(r + ": " + g.method + " " + g.url));
          };
        };

        p.onerror = n("AJAX request failed");
        p.ontimeout = n("AJAX request timed out");

        p.onload = function () {
          l({
            status: p.status,
            statusText: p.statusText,
            headers: p.getAllResponseHeaders().split("\r\n").filter(function (r) {
              return 0 < r.length;
            }).map(function (r) {
              var w = r.indexOf(":");
              return e(r.substring(0, w))(r.substring(w + 2));
            }),
            body: c.getResponse(p)
          });
        };

        p.responseType = g.responseType;
        p.withCredentials = g.withCredentials;
        p.send(g.content);
        return function (r, w, b) {
          try {
            p.abort();
          } catch (h) {
            return w(h);
          }

          return b();
        };
      };
    };
  }();
})(PS.Affjax = PS.Affjax || {});

(function (a) {
  a.arrayApply = function (c) {
    return function (e) {
      for (var g = c.length, f = e.length, l = Array(g * f), p = 0, k = 0; k < g; k++) {
        for (var n = c[k], r = 0; r < f; r++) {
          l[p++] = n(e[r]);
        }
      }

      return l;
    };
  };
})(PS["Control.Apply"] = PS["Control.Apply"] || {});

(function (a) {
  a["Control.Semigroupoid"] = a["Control.Semigroupoid"] || {};
  a = a["Control.Semigroupoid"];
  var c = new function (e) {
    this.compose = e;
  }(function (e) {
    return function (g) {
      return function (f) {
        return e(g(f));
      };
    };
  });

  a.compose = function (e) {
    return e.compose;
  };

  a.composeFlipped = function (e) {
    return function (g) {
      return function (f) {
        return (0, e.compose)(f)(g);
      };
    };
  };

  a.semigroupoidFn = c;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var c = a["Control.Category"],
      e = a["Control.Semigroupoid"];
  a = new function (g, f) {
    this.Semigroupoid0 = g;
    this.identity = f;
  }(function () {
    return e.semigroupoidFn;
  }, function (g) {
    return g;
  });

  c.identity = function (g) {
    return g.identity;
  };

  c.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (c) {
    return function (e) {
      return function (g) {
        return c(g)(e);
      };
    };
  };

  a["const"] = function (c) {
    return function (e) {
      return c;
    };
  };

  a.on = function (c) {
    return function (e) {
      return function (g) {
        return function (f) {
          return c(e(g))(e(f));
        };
      };
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (c) {
    return function (e) {
      for (var g = e.length, f = Array(g), l = 0; l < g; l++) {
        f[l] = c(e[l]);
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
      e = a["Data.Functor"],
      g = a["Control.Semigroupoid"],
      f = a["Data.Function"],
      l = a["Data.Unit"];

  a = function a(p) {
    this.map = p;
  };

  g = new a(g.compose(g.semigroupoidFn));
  e = new a(e.arrayMap);
  c.Functor = a;

  c.map = function (p) {
    return p.map;
  };

  c.mapFlipped = function (p) {
    return function (k) {
      return function (n) {
        return (0, p.map)(n)(k);
      };
    };
  };

  c["void"] = function (p) {
    return (0, p.map)(f["const"](l.unit));
  };

  c.voidRight = function (p) {
    return function (k) {
      return (0, p.map)(f["const"](k));
    };
  };

  c.functorFn = g;
  c.functorArray = e;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var c = a["Control.Apply"],
      e = a["Control.Apply"],
      g = a["Control.Category"],
      f = a["Data.Function"],
      l = a["Data.Functor"];

  a = function a(k, n) {
    this.Functor0 = k;
    this.apply = n;
  };

  var p = new a(function () {
    return l.functorFn;
  }, function (k) {
    return function (n) {
      return function (r) {
        return k(r)(n(r));
      };
    };
  });
  e = new a(function () {
    return l.functorArray;
  }, e.arrayApply);
  c.Apply = a;

  c.apply = function (k) {
    return k.apply;
  };

  c.applySecond = function (k) {
    return function (n) {
      return function (r) {
        return (0, k.apply)(l.map(k.Functor0())(f["const"](g.identity(g.categoryFn)))(n))(r);
      };
    };
  };

  c.lift2 = function (k) {
    return function (n) {
      return function (r) {
        return function (w) {
          return (0, k.apply)(l.map(k.Functor0())(n)(r))(w);
        };
      };
    };
  };

  c.applyFn = p;
  c.applyArray = e;
})(PS);

(function (a) {
  a["Control.Applicative"] = a["Control.Applicative"] || {};
  var c = a["Control.Applicative"],
      e = a["Control.Apply"];

  a = function a(f, l) {
    this.Apply0 = f;
    this.pure = l;
  };

  var g = new a(function () {
    return e.applyArray;
  }, function (f) {
    return [f];
  });
  c.Applicative = a;

  c.pure = function (f) {
    return f.pure;
  };

  c.liftA1 = function (f) {
    return function (l) {
      return function (p) {
        return e.apply(f.Apply0())((0, f.pure)(l))(p);
      };
    };
  };

  c.applicativeArray = g;
})(PS);

(function (a) {
  a.arrayBind = function (c) {
    return function (e) {
      for (var g = [], f = 0, l = c.length; f < l; f++) {
        Array.prototype.push.apply(g, e(c[f]));
      }

      return g;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var c = a["Control.Bind"],
      e = a["Control.Apply"],
      g = a["Control.Category"],
      f = a["Data.Function"],
      l = function l(n, r) {
    this.Apply0 = n;
    this.bind = r;
  };

  a = new l(function () {
    return e.applyArray;
  }, a["Control.Bind"].arrayBind);

  var p = function p(n) {
    return f.flip(n.bind);
  },
      k = new function (n) {
    this.discard = n;
  }(function (n) {
    return n.bind;
  });

  c.Bind = l;

  c.bind = function (n) {
    return n.bind;
  };

  c.bindFlipped = p;

  c.discard = function (n) {
    return n.discard;
  };

  c.join = function (n) {
    return function (r) {
      return (0, n.bind)(r)(g.identity(g.categoryFn));
    };
  };

  c.composeKleisliFlipped = function (n) {
    return function (r) {
      return function (w) {
        return function (b) {
          return p(n)(r)(w(b));
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
  var c = function c(e) {
    return function (g) {
      return function (f) {
        return function (l) {
          return function (p) {
            return l < p ? e : l === p ? g : f;
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
  var c = function c(e) {
    return function (g) {
      return e === g;
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
      e = a["Data.Eq"];

  a = function a(p) {
    this.eq = p;
  };

  var g = new a(e.eqStringImpl),
      f = new a(e.eqIntImpl),
      l = new a(e.eqCharImpl);
  e = new a(e.eqBooleanImpl);
  c.Eq = a;

  c.eq = function (p) {
    return p.eq;
  };

  c.eqBoolean = e;
  c.eqInt = f;
  c.eqChar = l;
  c.eqString = g;
})(PS);

(function (a) {
  a["Data.Ordering"] = a["Data.Ordering"] || {};
  a = a["Data.Ordering"];

  var c = function () {
    function f() {}

    f.value = new f();
    return f;
  }(),
      e = function () {
    function f() {}

    f.value = new f();
    return f;
  }(),
      g = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.LT = c;
  a.GT = e;
  a.EQ = g;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var c = a["Data.Ord"],
      e = a["Data.Ord"],
      g = a["Data.Eq"],
      f = a["Data.Ordering"];

  a = function a(k, n) {
    this.Eq0 = k;
    this.compare = n;
  };

  var l = new a(function () {
    return g.eqInt;
  }, e.ordIntImpl(f.LT.value)(f.EQ.value)(f.GT.value)),
      p = new a(function () {
    return g.eqChar;
  }, e.ordCharImpl(f.LT.value)(f.EQ.value)(f.GT.value));
  e = new a(function () {
    return g.eqBoolean;
  }, e.ordBooleanImpl(f.LT.value)(f.EQ.value)(f.GT.value));
  c.Ord = a;

  c.compare = function (k) {
    return k.compare;
  };

  c.max = function (k) {
    return function (n) {
      return function (r) {
        var w = (0, k.compare)(n)(r);
        if (w instanceof f.LT) return r;
        if (w instanceof f.EQ || w instanceof f.GT) return n;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [w.constructor.name]);
      };
    };
  };

  c.ordBoolean = e;
  c.ordInt = l;
  c.ordChar = p;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var c = a["Data.Bounded"],
      e = a["Data.Bounded"],
      g = a["Data.Ord"];

  a = function a(p, k, n) {
    this.Ord0 = p;
    this.bottom = k;
    this.top = n;
  };

  var f = new a(function () {
    return g.ordInt;
  }, e.bottomInt, e.topInt);
  e = new a(function () {
    return g.ordChar;
  }, e.bottomChar, e.topChar);
  var l = new a(function () {
    return g.ordBoolean;
  }, !1, !0);
  c.Bounded = a;

  c.bottom = function (p) {
    return p.bottom;
  };

  c.top = function (p) {
    return p.top;
  };

  c.boundedBoolean = l;
  c.boundedInt = f;
  c.boundedChar = e;
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var c = a["Data.Maybe"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      f = a["Control.Bind"],
      l = a["Control.Category"],
      p = a["Data.Bounded"],
      k = a["Data.Eq"],
      n = a["Data.Function"],
      r = a["Data.Functor"],
      w = a["Data.Ord"],
      b = a["Data.Ordering"],
      h = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      d = function () {
    function u(F) {
      this.value0 = F;
    }

    u.create = function (F) {
      return new u(F);
    };

    return u;
  }(),
      q = function q(u) {
    return function (F) {
      return function (C) {
        if (C instanceof h) return u;
        if (C instanceof d) return F(C.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [u.constructor.name, F.constructor.name, C.constructor.name]);
      };
    };
  };

  a = q(!0)(n["const"](!1));
  n = q(!1)(n["const"](!0));

  var x = new r.Functor(function (u) {
    return function (F) {
      return F instanceof d ? new d(u(F.value0)) : h.value;
    };
  }),
      t = function t(u) {
    return new k.Eq(function (F) {
      return function (C) {
        return F instanceof h && C instanceof h ? !0 : F instanceof d && C instanceof d ? k.eq(u)(F.value0)(C.value0) : !1;
      };
    });
  },
      E = function E(u) {
    return new w.Ord(function () {
      return t(u.Eq0());
    }, function (F) {
      return function (C) {
        if (F instanceof h && C instanceof h) return b.EQ.value;
        if (F instanceof h) return b.LT.value;
        if (C instanceof h) return b.GT.value;
        if (F instanceof d && C instanceof d) return w.compare(u)(F.value0)(C.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [F.constructor.name, C.constructor.name]);
      };
    });
  },
      y = new g.Apply(function () {
    return x;
  }, function (u) {
    return function (F) {
      if (u instanceof d) return r.map(x)(u.value0)(F);
      if (u instanceof h) return h.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [u.constructor.name, F.constructor.name]);
    };
  });

  g = new f.Bind(function () {
    return y;
  }, function (u) {
    return function (F) {
      if (u instanceof d) return F(u.value0);
      if (u instanceof h) return h.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [u.constructor.name, F.constructor.name]);
    };
  });
  e = new e.Applicative(function () {
    return y;
  }, d.create);
  c.Nothing = h;
  c.Just = d;
  c.maybe = q;

  c.fromMaybe = function (u) {
    return q(u)(l.identity(l.categoryFn));
  };

  c.isJust = n;
  c.isNothing = a;

  c.fromJust = function (u) {
    return function (F) {
      if (F instanceof d) return F.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [F.constructor.name]);
    };
  };

  c.functorMaybe = x;
  c.applyMaybe = y;
  c.applicativeMaybe = e;
  c.bindMaybe = g;
  c.ordMaybe = E;

  c.boundedMaybe = function (u) {
    return new p.Bounded(function () {
      return E(u.Ord0());
    }, h.value, new d(p.top(u)));
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
      e = a["Data.Maybe"],
      g = a["Data.MediaType.Common"];

  a = function () {
    function w(b) {
      this.value0 = b;
    }

    w.create = function (b) {
      return new w(b);
    };

    return w;
  }();

  var f = function () {
    function w(b) {
      this.value0 = b;
    }

    w.create = function (b) {
      return new w(b);
    };

    return w;
  }(),
      l = function () {
    function w(b) {
      this.value0 = b;
    }

    w.create = function (b) {
      return new w(b);
    };

    return w;
  }(),
      p = function () {
    function w(b) {
      this.value0 = b;
    }

    w.create = function (b) {
      return new w(b);
    };

    return w;
  }(),
      k = function () {
    function w(b) {
      this.value0 = b;
    }

    w.create = function (b) {
      return new w(b);
    };

    return w;
  }(),
      n = function () {
    function w(b) {
      this.value0 = b;
    }

    w.create = function (b) {
      return new w(b);
    };

    return w;
  }(),
      r = function () {
    function w(b) {
      this.value0 = b;
    }

    w.create = function (b) {
      return new w(b);
    };

    return w;
  }();

  c.ArrayView = a;
  c.Blob = f;
  c.Document = l;
  c.String = p;
  c.FormData = k;
  c.FormURLEncoded = n;
  c.Json = r;

  c.toMediaType = function (w) {
    return w instanceof n ? new e.Just(g.applicationFormURLEncoded) : w instanceof r ? new e.Just(g.applicationJSON) : e.Nothing.value;
  };
})(PS);

(function (a) {
  a.boolConj = function (c) {
    return function (e) {
      return c && e;
    };
  };

  a.boolDisj = function (c) {
    return function (e) {
      return c || e;
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
  var e = new function (g, f, l, p, k, n) {
    this.conj = g;
    this.disj = f;
    this.ff = l;
    this.implies = p;
    this.not = k;
    this.tt = n;
  }(a.boolConj, a.boolDisj, !1, function (g) {
    return function (f) {
      return (0, e.disj)((0, e.not)(g))(f);
    };
  }, a.boolNot, !0);

  c.ff = function (g) {
    return g.ff;
  };

  c.disj = function (g) {
    return g.disj;
  };

  c.heytingAlgebraBoolean = e;
})(PS);

(function (a) {
  a.concatString = function (c) {
    return function (e) {
      return c + e;
    };
  };

  a.concatArray = function (c) {
    return function (e) {
      return 0 === c.length ? e : 0 === e.length ? c : c.concat(e);
    };
  };
})(PS["Data.Semigroup"] = PS["Data.Semigroup"] || {});

(function (a) {
  a["Data.Semigroup"] = a["Data.Semigroup"] || {};
  var c = a["Data.Semigroup"],
      e = a["Data.Semigroup"],
      g = a["Data.Unit"];

  a = function a(p) {
    this.append = p;
  };

  var f = new a(function (p) {
    return function (k) {
      return g.unit;
    };
  }),
      l = new a(e.concatString);
  e = new a(e.concatArray);
  c.Semigroup = a;

  c.append = function (p) {
    return p.append;
  };

  c.semigroupString = l;
  c.semigroupUnit = f;
  c.semigroupArray = e;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var c = a["Data.Monoid"],
      e = a["Data.Semigroup"],
      g = function g(p, k) {
    this.Semigroup0 = p;
    this.mempty = k;
  };

  a = new g(function () {
    return e.semigroupUnit;
  }, a["Data.Unit"].unit);
  var f = new g(function () {
    return e.semigroupString;
  }, ""),
      l = new g(function () {
    return e.semigroupArray;
  }, []);
  c.Monoid = g;

  c.mempty = function (p) {
    return p.mempty;
  };

  c.monoidUnit = a;
  c.monoidString = f;
  c.monoidArray = l;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var c = a["Data.Monoid.Disj"],
      e = a["Data.HeytingAlgebra"],
      g = a["Data.Monoid"],
      f = a["Data.Semigroup"],
      l = function l(p) {
    return new f.Semigroup(function (k) {
      return function (n) {
        return e.disj(p)(k)(n);
      };
    });
  };

  c.Disj = function (p) {
    return p;
  };

  c.monoidDisj = function (p) {
    return new g.Monoid(function () {
      return l(p);
    }, e.ff(p));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var c = a["Data.Newtype"],
      e = a["Data.Functor"],
      g = function g(f, l) {
    this.unwrap = f;
    this.wrap = l;
  };

  a = new g(function (f) {
    return f;
  }, a["Data.Monoid.Disj"].Disj);

  c.unwrap = function (f) {
    return f.unwrap;
  };

  c.Newtype = g;

  c.alaF = function (f) {
    return function (l) {
      return function (p) {
        return function (k) {
          return function (n) {
            return function (r) {
              var w = e.map(l)(k.unwrap),
                  b = e.map(f)(p.wrap);
              return function (h) {
                return w(r(b(h)));
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
  a = new a["Data.Newtype"].Newtype(function (e) {
    return e;
  }, function (e) {
    return e;
  });
  c.newtypeMediaType = a;
})(PS);

(function (a) {
  a["Affjax.RequestHeader"] = a["Affjax.RequestHeader"] || {};

  var c = a["Affjax.RequestHeader"],
      e = a["Data.MediaType"],
      g = a["Data.Newtype"],
      f = function () {
    function k(n) {
      this.value0 = n;
    }

    k.create = function (n) {
      return new k(n);
    };

    return k;
  }(),
      l = function () {
    function k(n) {
      this.value0 = n;
    }

    k.create = function (n) {
      return new k(n);
    };

    return k;
  }(),
      p = function () {
    function k(n, r) {
      this.value0 = n;
      this.value1 = r;
    }

    k.create = function (n) {
      return function (r) {
        return new k(n, r);
      };
    };

    return k;
  }();

  c.Accept = f;
  c.ContentType = l;

  c.name = function (k) {
    if (k instanceof f) return "Accept";
    if (k instanceof l) return "Content-Type";
    if (k instanceof p) return k.value0;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): " + [k.constructor.name]);
  };

  c.value = function (k) {
    if (k instanceof f || k instanceof l) return g.unwrap(e.newtypeMediaType)(k.value0);
    if (k instanceof p) return k.value1;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): " + [k.constructor.name]);
  };
})(PS);

(function (a) {
  a["Affjax.ResponseFormat"] = a["Affjax.ResponseFormat"] || {};

  var c = a["Affjax.ResponseFormat"],
      e = a["Control.Category"],
      g = a["Data.Maybe"],
      f = a["Data.MediaType.Common"],
      l = function () {
    function b(h) {
      this.value0 = h;
    }

    b.create = function (h) {
      return new b(h);
    };

    return b;
  }(),
      p = function () {
    function b(h) {
      this.value0 = h;
    }

    b.create = function (h) {
      return new b(h);
    };

    return b;
  }(),
      k = function () {
    function b(h) {
      this.value0 = h;
    }

    b.create = function (h) {
      return new b(h);
    };

    return b;
  }(),
      n = function () {
    function b(h) {
      this.value0 = h;
    }

    b.create = function (h) {
      return new b(h);
    };

    return b;
  }(),
      r = function () {
    function b(h) {
      this.value0 = h;
    }

    b.create = function (h) {
      return new b(h);
    };

    return b;
  }(),
      w = function () {
    function b(h) {
      this.value0 = h;
    }

    b.create = function (h) {
      return new b(h);
    };

    return b;
  }();

  a = new r(e.identity(e.categoryFn));
  e = new w(e.identity(e.categoryFn));
  c.ArrayBuffer = l;
  c.Blob = p;
  c.Document = k;
  c.Json = n;
  c.String = r;
  c.Ignore = w;
  c.string = a;
  c.ignore = e;

  c.toResponseType = function (b) {
    if (b instanceof l) return "arraybuffer";
    if (b instanceof p) return "blob";
    if (b instanceof k) return "document";
    if (b instanceof n || b instanceof r) return "text";
    if (b instanceof w) return "";
    throw Error("Failed pattern match at Affjax.ResponseFormat (line 46, column 3 - line 52, column 19): " + [b.constructor.name]);
  };

  c.toMediaType = function (b) {
    return b instanceof n ? new g.Just(f.applicationJSON) : g.Nothing.value;
  };
})(PS);

(function (a) {
  a["Affjax.ResponseHeader"] = a["Affjax.ResponseHeader"] || {};
  a = a["Affjax.ResponseHeader"];

  var c = function () {
    function e(g, f) {
      this.value0 = g;
      this.value1 = f;
    }

    e.create = function (g) {
      return function (f) {
        return new e(g, f);
      };
    };

    return e;
  }();

  a.ResponseHeader = c;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var c = a["Control.Monad"],
      e = a["Control.Applicative"],
      g = a["Control.Bind"];

  a = function a(l, p) {
    this.Applicative0 = l;
    this.Bind1 = p;
  };

  var f = new a(function () {
    return e.applicativeArray;
  }, function () {
    return g.bindArray;
  });
  c.Monad = a;

  c.ap = function (l) {
    return function (p) {
      return function (k) {
        return g.bind(l.Bind1())(p)(function (n) {
          return g.bind(l.Bind1())(k)(function (r) {
            return e.pure(l.Applicative0())(n(r));
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
      e = a["Control.Category"];

  c.bimap = function (g) {
    return g.bimap;
  };

  c.Bifunctor = function (g) {
    this.bimap = g;
  };

  c.lmap = function (g) {
    return function (f) {
      return (0, g.bimap)(f)(e.identity(e.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var c = a["Data.Either"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      f = a["Control.Bind"],
      l = a["Control.Monad"],
      p = a["Data.Bifunctor"],
      k = a["Data.Function"],
      n = a["Data.Functor"],
      r = a["Data.Maybe"],
      w = function () {
    function t(E) {
      this.value0 = E;
    }

    t.create = function (E) {
      return new t(E);
    };

    return t;
  }(),
      b = function () {
    function t(E) {
      this.value0 = E;
    }

    t.create = function (E) {
      return new t(E);
    };

    return t;
  }(),
      h = new n.Functor(function (t) {
    return function (E) {
      if (E instanceof w) return new w(E.value0);
      if (E instanceof b) return new b(t(E.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [E.constructor.name]);
    };
  });

  a = function a(t) {
    return function (E) {
      return function (y) {
        if (y instanceof w) return t(y.value0);
        if (y instanceof b) return E(y.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [t.constructor.name, E.constructor.name, y.constructor.name]);
      };
    };
  };

  k = a(k["const"](r.Nothing.value))(r.Just.create);
  p = new p.Bifunctor(function (t) {
    return function (E) {
      return function (y) {
        if (y instanceof w) return new w(t(y.value0));
        if (y instanceof b) return new b(E(y.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [t.constructor.name, E.constructor.name, y.constructor.name]);
      };
    };
  });
  var d = new g.Apply(function () {
    return h;
  }, function (t) {
    return function (E) {
      if (t instanceof w) return new w(t.value0);
      if (t instanceof b) return n.map(h)(t.value0)(E);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [t.constructor.name, E.constructor.name]);
    };
  }),
      q = new f.Bind(function () {
    return d;
  }, a(function (t) {
    return function (E) {
      return new w(t);
    };
  })(function (t) {
    return function (E) {
      return E(t);
    };
  })),
      x = new e.Applicative(function () {
    return d;
  }, b.create);
  e = new l.Monad(function () {
    return x;
  }, function () {
    return q;
  });
  c.Left = w;
  c.Right = b;
  c.either = a;

  c.note = function (t) {
    return r.maybe(new w(t))(b.create);
  };

  c.hush = k;
  c.functorEither = h;
  c.bifunctorEither = p;
  c.applicativeEither = x;
  c.bindEither = q;
  c.monadEither = e;
})(PS);

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var c = a["Control.Monad.Error.Class"],
      e = a["Control.Applicative"],
      g = a["Data.Either"],
      f = a["Data.Functor"];

  c.catchError = function (l) {
    return l.catchError;
  };

  c.throwError = function (l) {
    return l.throwError;
  };

  c.MonadThrow = function (l, p) {
    this.Monad0 = l;
    this.throwError = p;
  };

  c.MonadError = function (l, p) {
    this.MonadThrow0 = l;
    this.catchError = p;
  };

  c["try"] = function (l) {
    return function (p) {
      return (0, l.catchError)(f.map(l.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(g.Right.create)(p))(function () {
        var k = e.pure(l.MonadThrow0().Monad0().Applicative0());
        return function (n) {
          return k(g.Left.create(n));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Alt"] = a["Control.Alt"] || {};
  var c = a["Control.Alt"],
      e = a["Data.Functor"],
      g = a["Data.Semigroup"];

  a = function a(f, l) {
    this.Functor0 = f;
    this.alt = l;
  };

  g = new a(function () {
    return e.functorArray;
  }, g.append(g.semigroupArray));
  c.Alt = a;

  c.alt = function (f) {
    return f.alt;
  };

  c.altArray = g;
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

  a.MonadTell = function (c, e) {
    this.Monad0 = c;
    this.tell = e;
  };
})(PS);

(function (a) {
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var c = a["Control.Monad.Except.Trans"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      f = a["Control.Apply"],
      l = a["Control.Bind"],
      p = a["Control.Monad"],
      k = a["Control.Monad.Error.Class"],
      n = a["Control.Monad.Trans.Class"],
      r = a["Control.Monad.Writer.Class"],
      w = a["Data.Either"],
      b = a["Data.Functor"],
      h = a["Data.Semigroup"],
      d = function d(C) {
    return C;
  };

  a = new a["Data.Newtype"].Newtype(function (C) {
    return C;
  }, d);

  var q = new n.MonadTrans(function (C) {
    return function (N) {
      return l.bind(C.Bind1())(N)(function (I) {
        return g.pure(C.Applicative0())(new w.Right(I));
      });
    };
  }),
      x = function x(C) {
    return function (N) {
      return C(N);
    };
  },
      t = function t(C) {
    return new b.Functor(function (N) {
      return x(b.map(C)(b.map(w.functorEither)(N)));
    });
  },
      E = function E(C) {
    return new p.Monad(function () {
      return F(C);
    }, function () {
      return y(C);
    });
  },
      y = function y(C) {
    return new l.Bind(function () {
      return u(C);
    }, function (N) {
      return function (I) {
        return l.bind(C.Bind1())(N)(w.either(function () {
          var K = g.pure(C.Applicative0());
          return function (M) {
            return K(w.Left.create(M));
          };
        }())(function (K) {
          return I(K);
        }));
      };
    });
  },
      u = function u(C) {
    return new f.Apply(function () {
      return t(C.Bind1().Apply0().Functor0());
    }, p.ap(E(C)));
  },
      F = function F(C) {
    return new g.Applicative(function () {
      return u(C);
    }, function () {
      var N = g.pure(C.Applicative0());
      return function (I) {
        return N(w.Right.create(I));
      };
    }());
  };

  c.ExceptT = d;

  c.runExceptT = function (C) {
    return C;
  };

  c.withExceptT = function (C) {
    return function (N) {
      return function (I) {
        return b.map(C)(function (K) {
          return function (M) {
            if (M instanceof w.Right) return new w.Right(M.value0);
            if (M instanceof w.Left) return new w.Left(K(M.value0));
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 42, column 3 - line 42, column 32): " + [K.constructor.name, M.constructor.name]);
          };
        }(N))(I);
      };
    };
  };

  c.newtypeExceptT = a;
  c.functorExceptT = t;
  c.applicativeExceptT = F;
  c.bindExceptT = y;

  c.altExceptT = function (C) {
    return function (N) {
      return new e.Alt(function () {
        return t(N.Bind1().Apply0().Functor0());
      }, function (I) {
        return function (K) {
          return l.bind(N.Bind1())(I)(function (M) {
            if (M instanceof w.Right) return g.pure(N.Applicative0())(new w.Right(M.value0));
            if (M instanceof w.Left) return l.bind(N.Bind1())(K)(function (L) {
              if (L instanceof w.Right) return g.pure(N.Applicative0())(new w.Right(L.value0));
              if (L instanceof w.Left) return g.pure(N.Applicative0())(new w.Left(h.append(C)(M.value0)(L.value0)));
              throw Error("Failed pattern match at Control.Monad.Except.Trans (line 86, column 9 - line 88, column 49): " + [L.constructor.name]);
            });
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 82, column 5 - line 88, column 49): " + [M.constructor.name]);
          });
        };
      });
    };
  };

  c.monadThrowExceptT = function (C) {
    return new k.MonadThrow(function () {
      return E(C);
    }, function () {
      var N = g.pure(C.Applicative0());
      return function (I) {
        return N(w.Left.create(I));
      };
    }());
  };

  c.monadTellExceptT = function (C) {
    return new r.MonadTell(function () {
      return E(C.Monad0());
    }, function () {
      var N = n.lift(q)(C.Monad0()),
          I = r.tell(C);
      return function (K) {
        return N(I(K));
      };
    }());
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var c = a["Data.Identity"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      f = a["Control.Bind"],
      l = a["Control.Monad"],
      p = a["Data.Functor"],
      k = function k(h) {
    return h;
  };

  a = new a["Data.Newtype"].Newtype(function (h) {
    return h;
  }, k);
  var n = new p.Functor(function (h) {
    return function (d) {
      return h(d);
    };
  }),
      r = new g.Apply(function () {
    return n;
  }, function (h) {
    return function (d) {
      return h(d);
    };
  }),
      w = new f.Bind(function () {
    return r;
  }, function (h) {
    return function (d) {
      return d(h);
    };
  }),
      b = new e.Applicative(function () {
    return r;
  }, k);
  e = new l.Monad(function () {
    return b;
  }, function () {
    return w;
  });
  c.Identity = k;
  c.newtypeIdentity = a;
  c.functorIdentity = n;
  c.applicativeIdentity = b;
  c.monadIdentity = e;
})(PS);

(function (a) {
  a["Control.Monad.Except"] = a["Control.Monad.Except"] || {};
  var c = a["Control.Monad.Except"],
      e = a["Control.Monad.Except.Trans"],
      g = a["Data.Identity"],
      f = a["Data.Newtype"];
  a = e.withExceptT(g.functorIdentity);

  var l = function () {
    var p = f.unwrap(g.newtypeIdentity);
    return function (k) {
      return p(e.runExceptT(k));
    };
  }();

  c.runExcept = l;
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
  function c(e) {
    return function (g) {
      var f = [],
          l;

      for (l in g) {
        hasOwnProperty.call(g, l) && f.push(e(l)(g[l]));
      }

      return f;
    };
  }

  a._copyST = function (e) {
    return function () {
      var g = {},
          f;

      for (f in e) {
        hasOwnProperty.call(e, f) && (g[f] = e[f]);
      }

      return g;
    };
  };

  a.empty = {};

  a.runST = function (e) {
    return e();
  };

  a._foldM = function (e) {
    return function (g) {
      return function (f) {
        return function (l) {
          function p(r) {
            return function (w) {
              return g(w)(r)(l[r]);
            };
          }

          var k = f,
              n;

          for (n in l) {
            hasOwnProperty.call(l, n) && (k = e(k)(p(n)));
          }

          return k;
        };
      };
    };
  };

  a._lookup = function (e, g, f, l) {
    return f in l ? g(l[f]) : e;
  };

  a._lookupST = function (e, g, f, l) {
    return function () {
      return f in l ? g(l[f]) : e;
    };
  };

  a.keys = Object.keys || c(function (e) {
    return function () {
      return e;
    };
  });
})(PS["Foreign.Object"] = PS["Foreign.Object"] || {});

(function (a) {
  a.map_ = function (c) {
    return function (e) {
      return function () {
        return c(e());
      };
    };
  };

  a.pure_ = function (c) {
    return function () {
      return c;
    };
  };

  a.bind_ = function (c) {
    return function (e) {
      return function () {
        return e(c())();
      };
    };
  };
})(PS["Control.Monad.ST.Internal"] = PS["Control.Monad.ST.Internal"] || {});

(function (a) {
  a["Control.Monad.ST.Internal"] = a["Control.Monad.ST.Internal"] || {};
  var c = a["Control.Monad.ST.Internal"],
      e = a["Control.Monad.ST.Internal"],
      g = a["Control.Applicative"],
      f = a["Control.Apply"],
      l = a["Control.Bind"],
      p = a["Control.Monad"],
      k = new a["Data.Functor"].Functor(e.map_);
  a = new p.Monad(function () {
    return w;
  }, function () {
    return n;
  });
  var n = new l.Bind(function () {
    return r;
  }, e.bind_),
      r = new f.Apply(function () {
    return k;
  }, p.ap(a)),
      w = new g.Applicative(function () {
    return r;
  }, e.pure_);
  c.applicativeST = w;
  c.monadST = a;
})(PS);

(function (a) {
  a.foldrArray = function (c) {
    return function (e) {
      return function (g) {
        for (var f = e, l = g.length - 1; 0 <= l; l--) {
          f = c(g[l])(f);
        }

        return f;
      };
    };
  };

  a.foldlArray = function (c) {
    return function (e) {
      return function (g) {
        for (var f = e, l = g.length, p = 0; p < l; p++) {
          f = c(f)(g[p]);
        }

        return f;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

(function (a) {
  a["Data.Foldable"] = a["Data.Foldable"] || {};
  var c = a["Data.Foldable"],
      e = a["Data.Foldable"],
      g = a["Control.Applicative"],
      f = a["Control.Apply"],
      l = a["Control.Category"],
      p = a["Data.Function"],
      k = a["Data.Functor"],
      n = a["Data.Maybe"],
      r = a["Data.Monoid"],
      w = a["Data.Monoid.Disj"],
      b = a["Data.Newtype"],
      h = a["Data.Semigroup"],
      d = a["Data.Unit"];

  a = function a(y, u, F) {
    this.foldMap = y;
    this.foldl = u;
    this.foldr = F;
  };

  var q = function q(y) {
    return function (u) {
      return function (F) {
        return (0, u.foldr)(function () {
          var C = f.applySecond(y.Apply0());
          return function (N) {
            return C(F(N));
          };
        }())(g.pure(y)(d.unit));
      };
    };
  },
      x = new a(function (y) {
    return function (u) {
      return function (F) {
        if (F instanceof n.Nothing) return r.mempty(y);
        if (F instanceof n.Just) return u(F.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [u.constructor.name, F.constructor.name]);
      };
    };
  }, function (y) {
    return function (u) {
      return function (F) {
        if (F instanceof n.Nothing) return u;
        if (F instanceof n.Just) return y(u)(F.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [y.constructor.name, u.constructor.name, F.constructor.name]);
      };
    };
  }, function (y) {
    return function (u) {
      return function (F) {
        if (F instanceof n.Nothing) return u;
        if (F instanceof n.Just) return y(F.value0)(u);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [y.constructor.name, u.constructor.name, F.constructor.name]);
      };
    };
  }),
      t = function t(y) {
    return function (u) {
      return function (F) {
        return (0, y.foldr)(function (C) {
          return function (N) {
            return h.append(u.Semigroup0())(F(C))(N);
          };
        })(r.mempty(u));
      };
    };
  },
      E = new a(function (y) {
    return t(E)(y);
  }, e.foldlArray, e.foldrArray);

  c.Foldable = a;

  c.foldr = function (y) {
    return y.foldr;
  };

  c.foldl = function (y) {
    return y.foldl;
  };

  c.foldMap = function (y) {
    return y.foldMap;
  };

  c.fold = function (y) {
    return function (u) {
      return (0, y.foldMap)(u)(l.identity(l.categoryFn));
    };
  };

  c.traverse_ = q;

  c.for_ = function (y) {
    return function (u) {
      return p.flip(q(y)(u));
    };
  };

  c.intercalate = function (y) {
    return function (u) {
      return function (F) {
        return function (C) {
          return (0, y.foldl)(function (N) {
            return function (I) {
              return N.init ? {
                init: !1,
                acc: I
              } : {
                init: !1,
                acc: h.append(u.Semigroup0())(N.acc)(h.append(u.Semigroup0())(F)(I))
              };
            };
          })({
            init: !0,
            acc: r.mempty(u)
          })(C).acc;
        };
      };
    };
  };

  c.any = function (y) {
    return function (u) {
      return b.alaF(k.functorFn)(k.functorFn)(b.newtypeDisj)(b.newtypeDisj)(w.Disj)((0, y.foldMap)(w.monoidDisj(u)));
    };
  };

  c.find = function (y) {
    return function (u) {
      return (0, y.foldl)(function (F) {
        return function (C) {
          return F instanceof n.Nothing && u(C) ? new n.Just(C) : F;
        };
      })(n.Nothing.value);
    };
  };

  c.foldableArray = E;
  c.foldableMaybe = x;
})(PS);

(function (a) {
  a.runFn2 = function (c) {
    return function (e) {
      return function (g) {
        return c(e, g);
      };
    };
  };

  a.runFn4 = function (c) {
    return function (e) {
      return function (g) {
        return function (f) {
          return function (l) {
            return c(e, g, f, l);
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
    return function (e) {
      return function (g) {
        return function () {
          g[c] = e;
          return g;
        };
      };
    };
  };

  a["delete"] = function (c) {
    return function (e) {
      return function () {
        delete e[c];
        return e;
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
      e = a["Foreign.Object"],
      g = a["Control.Applicative"],
      f = a["Control.Bind"],
      l = a["Control.Monad.ST.Internal"],
      p = a["Data.Foldable"],
      k = a["Data.Maybe"],
      n = a["Foreign.Object.ST"],
      r = a["Unsafe.Coerce"],
      w = e._copyST,
      b = function b(t) {
    return function (E) {
      return e.runST(function () {
        var y = w(E)();
        t(y)();
        return y;
      });
    };
  },
      h = a["Data.Function.Uncurried"].runFn4(e._lookup)(k.Nothing.value)(k.Just.create),
      d = function d(t) {
    return function (E) {
      return b(n.poke(t)(E));
    };
  },
      q = function q(t) {
    return function (E) {
      return function (y) {
        return e._foldM(f.bind(t.Bind1()))(E)(g.pure(t.Applicative0())(y));
      };
    };
  },
      x = function x(t) {
    return b(function (E) {
      return q(l.monadST)(function (y) {
        return function (u) {
          return function (F) {
            return n.poke(u)(F)(y);
          };
        };
      })(E)(t);
    });
  };

  c.lookup = h;

  c.fromFoldableWith = function (t) {
    return function (E) {
      return function (y) {
        return e.runST(function () {
          var u = n["new"]();
          p.for_(l.applicativeST)(t)(y)(function (F) {
            return function () {
              var C = e._lookupST(F.value1, E(F.value1), F.value0, u)();

              return n.poke(F.value0)(C)(u)();
            };
          })();
          return u;
        });
      };
    };
  };

  c.fromHomogeneous = function (t) {
    return r.unsafeCoerce;
  };

  c.alter = function (t) {
    return function (E) {
      return function (y) {
        var u = t(h(E)(y));
        if (u instanceof k.Nothing) return b(n["delete"](E))(y);
        if (u instanceof k.Just) return d(E)(u.value0)(y);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [u.constructor.name]);
      };
    };
  };

  c.unions = function (t) {
    return p.foldl(t)(x)(e.empty);
  };

  c.empty = e.empty;
  c.keys = e.keys;
})(PS);

(function (a) {
  a["Data.Argonaut.Core"] = a["Data.Argonaut.Core"] || {};
  var c = a["Data.Argonaut.Core"],
      e = a["Data.Argonaut.Core"];
  a = e.fromObject(a["Foreign.Object"].empty);
  c.jsonEmptyObject = a;
  c.stringify = e.stringify;
})(PS);

(function (a) {
  a._jsonParser = function (c, e, g) {
    try {
      return e(JSON.parse(g));
    } catch (f) {
      return c(f.message);
    }
  };
})(PS["Data.Argonaut.Parser"] = PS["Data.Argonaut.Parser"] || {});

(function (a) {
  a["Data.Argonaut.Parser"] = a["Data.Argonaut.Parser"] || {};
  var c = a["Data.Argonaut.Parser"],
      e = a["Data.Either"];

  a["Data.Argonaut.Parser"].jsonParser = function (g) {
    return c._jsonParser(e.Left.create, e.Right.create, g);
  };
})(PS);

(function (a) {
  a.range = function (c) {
    return function (e) {
      for (var g = c > e ? -1 : 1, f = Array(g * (e - c) + 1), l = c, p = 0; l !== e;) {
        f[p++] = l, l += g;
      }

      f[p] = l;
      return f;
    };
  };

  a.fromFoldableImpl = function () {
    function c(f, l) {
      this.head = f;
      this.tail = l;
    }

    function e(f) {
      return function (l) {
        return new c(f, l);
      };
    }

    var g = {};
    return function (f) {
      return function (l) {
        var p = [],
            k = 0;

        for (l = f(e)(g)(l); l !== g;) {
          p[k++] = l.head, l = l.tail;
        }

        return p;
      };
    };
  }();

  a.length = function (c) {
    return c.length;
  };

  a.cons = function (c) {
    return function (e) {
      return [c].concat(e);
    };
  };

  a.snoc = function (c) {
    return function (e) {
      var g = c.slice();
      g.push(e);
      return g;
    };
  };

  a["uncons'"] = function (c) {
    return function (e) {
      return function (g) {
        return 0 === g.length ? c({}) : e(g[0])(g.slice(1));
      };
    };
  };

  a.indexImpl = function (c) {
    return function (e) {
      return function (g) {
        return function (f) {
          return 0 > f || f >= g.length ? e : c(g[f]);
        };
      };
    };
  };

  a._updateAt = function (c) {
    return function (e) {
      return function (g) {
        return function (f) {
          return function (l) {
            if (0 > g || g >= l.length) return e;
            l = l.slice();
            l[g] = f;
            return c(l);
          };
        };
      };
    };
  };

  a.filter = function (c) {
    return function (e) {
      return e.filter(c);
    };
  };

  a.slice = function (c) {
    return function (e) {
      return function (g) {
        return g.slice(c, e);
      };
    };
  };

  a.zipWith = function (c) {
    return function (e) {
      return function (g) {
        for (var f = e.length < g.length ? e.length : g.length, l = Array(f), p = 0; p < f; p++) {
          l[p] = c(e[p])(g[p]);
        }

        return l;
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

  var e = function () {
    function g(f, l) {
      this.value0 = f;
      this.value1 = l;
    }

    g.create = function (f) {
      return function (l) {
        return new g(f, l);
      };
    };

    return g;
  }();

  a = new a.Functor(function (g) {
    return function (f) {
      return new e(f.value0, g(f.value1));
    };
  });
  c.Tuple = e;

  c.fst = function (g) {
    return g.value0;
  };

  c.snd = function (g) {
    return g.value1;
  };

  c.functorTuple = a;
})(PS);

(function (a) {
  a["Data.Array"] = a["Data.Array"] || {};
  var c = a["Data.Array"],
      e = a["Data.Array"],
      g = a["Control.Bind"],
      f = a["Control.Category"],
      l = a["Data.Boolean"],
      p = a["Data.Foldable"],
      k = a["Data.Function"],
      n = a["Data.Maybe"];
  a = e.zipWith(a["Data.Tuple"].Tuple.create);

  var r = e._updateAt(n.Just.create)(n.Nothing.value),
      w = e["uncons'"](k["const"](n.Nothing.value))(function (q) {
    return function (x) {
      return new n.Just({
        head: q,
        tail: x
      });
    };
  }),
      b = function b(q) {
    return [q];
  },
      h = e.indexImpl(n.Just.create)(n.Nothing.value),
      d = k.flip(g.bind(g.bindArray));

  g = function (q) {
    return d(function () {
      var x = n.maybe([])(b);
      return function (t) {
        return x(q(t));
      };
    }());
  }(f.identity(f.categoryFn));

  c.fromFoldable = function (q) {
    return e.fromFoldableImpl(p.foldr(q));
  };

  c.singleton = b;

  c.head = function (q) {
    return h(q)(0);
  };

  c.init = function (q) {
    if (0 === e.length(q)) return n.Nothing.value;
    if (l.otherwise) return new n.Just(e.slice(0)(e.length(q) - 1 | 0)(q));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [q.constructor.name]);
  };

  c.uncons = w;
  c.index = h;
  c.updateAt = r;
  c.concatMap = d;
  c.catMaybes = g;
  c.zip = a;
  c.range = e.range;
  c.length = e.length;
  c.cons = e.cons;
  c.snoc = e.snoc;
  c.filter = e.filter;
})(PS);

(function (a) {
  a.toUpper = function (c) {
    return c.toUpperCase();
  };

  a.trim = function (c) {
    return c.trim();
  };

  a.joinWith = function (c) {
    return function (e) {
      return e.join(c);
    };
  };
})(PS["Data.String.Common"] = PS["Data.String.Common"] || {});

(function (a) {
  a["Data.String.Common"] = a["Data.String.Common"] || {};
  var c = a["Data.String.Common"];
  a = a["Data.String.Common"];

  c["null"] = function (e) {
    return "" === e;
  };

  c.toUpper = a.toUpper;
  c.trim = a.trim;
  c.joinWith = a.joinWith;
})(PS);

(function (a) {
  a.traverseArrayImpl = function () {
    function c(l) {
      return [l];
    }

    function e(l) {
      return function (p) {
        return [l, p];
      };
    }

    function g(l) {
      return function (p) {
        return function (k) {
          return [l, p, k];
        };
      };
    }

    function f(l) {
      return function (p) {
        return l.concat(p);
      };
    }

    return function (l) {
      return function (p) {
        return function (k) {
          return function (n) {
            return function (r) {
              function w(b, h) {
                switch (h - b) {
                  case 0:
                    return k([]);

                  case 1:
                    return p(c)(n(r[b]));

                  case 2:
                    return l(p(e)(n(r[b])))(n(r[b + 1]));

                  case 3:
                    return l(l(p(g)(n(r[b])))(n(r[b + 1])))(n(r[b + 2]));

                  default:
                    var d = b + 2 * Math.floor((h - b) / 4);
                    return l(p(f)(w(b, d)))(w(d, h));
                }
              }

              return w(0, r.length);
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
      e = a["Data.Traversable"],
      g = a["Control.Applicative"],
      f = a["Control.Apply"],
      l = a["Control.Category"],
      p = a["Data.Foldable"],
      k = a["Data.Functor"],
      n = a["Data.Maybe"];

  a = function a(h, d, q, x) {
    this.Foldable1 = h;
    this.Functor0 = d;
    this.sequence = q;
    this.traverse = x;
  };

  var r = new a(function () {
    return p.foldableMaybe;
  }, function () {
    return n.functorMaybe;
  }, function (h) {
    return function (d) {
      if (d instanceof n.Nothing) return g.pure(h)(n.Nothing.value);
      if (d instanceof n.Just) return k.map(h.Apply0().Functor0())(n.Just.create)(d.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [d.constructor.name]);
    };
  }, function (h) {
    return function (d) {
      return function (q) {
        if (q instanceof n.Nothing) return g.pure(h)(n.Nothing.value);
        if (q instanceof n.Just) return k.map(h.Apply0().Functor0())(n.Just.create)(d(q.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [d.constructor.name, q.constructor.name]);
      };
    };
  }),
      w = function w(h) {
    return function (d) {
      return (0, h.traverse)(d)(l.identity(l.categoryFn));
    };
  },
      b = new a(function () {
    return p.foldableArray;
  }, function () {
    return k.functorArray;
  }, function (h) {
    return w(b)(h);
  }, function (h) {
    return e.traverseArrayImpl(f.apply(h.Apply0()))(k.map(h.Apply0().Functor0()))(g.pure(h));
  });

  c.traverse = function (h) {
    return h.traverse;
  };

  c.sequence = function (h) {
    return h.sequence;
  };

  c.traversableArray = b;
  c.traversableMaybe = r;
})(PS);

(function (a) {
  a.infinity = Infinity;

  a.readInt = function (c) {
    return function (e) {
      return parseInt(e, c);
    };
  };

  a._encodeURIComponent = function (c) {
    return function (e, g, f) {
      try {
        return g(c(f));
      } catch (l) {
        return e(l.message);
      }
    };
  }(encodeURIComponent);
})(PS.Global = PS.Global || {});

(function (a) {
  a.Global = a.Global || {};
  var c = a.Global,
      e = a.Global,
      g = a["Data.Function"],
      f = a["Data.Maybe"];

  c.encodeURIComponent = function (l) {
    return e._encodeURIComponent(g["const"](f.Nothing.value), f.Just.create, l);
  };

  c.infinity = e.infinity;
  c.readInt = e.readInt;
})(PS);

(function (a) {
  a["Data.FormURLEncoded"] = a["Data.FormURLEncoded"] || {};
  var c = a["Data.FormURLEncoded"],
      e = a["Control.Apply"],
      g = a["Data.Functor"],
      f = a["Data.Maybe"],
      l = a["Data.String.Common"],
      p = a["Data.Traversable"],
      k = a.Global;

  a = function () {
    var n = g.map(f.functorMaybe)(l.joinWith("&")),
        r = p.traverse(p.traversableArray)(f.applicativeMaybe)(function (w) {
      if (w.value1 instanceof f.Nothing) return k.encodeURIComponent(w.value0);
      if (w.value1 instanceof f.Just) return e.apply(f.applyMaybe)(g.map(f.functorMaybe)(function (b) {
        return function (h) {
          return b + ("=" + h);
        };
      })(k.encodeURIComponent(w.value0)))(k.encodeURIComponent(w.value1.value0));
      throw Error("Failed pattern match at Data.FormURLEncoded (line 37, column 18 - line 39, column 108): " + [w.constructor.name]);
    });
    return function (w) {
      return n(r(w));
    };
  }();

  c.encode = a;
})(PS);

(function (a) {
  a.showIntImpl = function (c) {
    return c.toString();
  };

  a.showCharImpl = function (c) {
    var e = c.charCodeAt(0);

    if (32 > e || 127 === e) {
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

      return "'\\" + e.toString(10) + "'";
    }

    return "'" === c || "\\" === c ? "'\\" + c + "'" : "'" + c + "'";
  };

  a.showStringImpl = function (c) {
    var e = c.length;
    return '"' + c.replace(/[\0-\x1F\x7F"\\]/g, function (g, f) {
      switch (g) {
        case '"':
        case "\\":
          return "\\" + g;

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
      f = f < e && "0" <= c[f] && "9" >= c[f] ? "\\&" : "";
      return "\\" + g.charCodeAt(0).toString(10) + f;
    }) + '"';
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};
  var c = a["Data.Show"],
      e = a["Data.Show"];

  a = function a(p) {
    this.show = p;
  };

  var g = new a(e.showStringImpl),
      f = new a(e.showIntImpl);
  e = new a(e.showCharImpl);
  var l = new a(function (p) {
    if (p) return "true";
    if (!p) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [p.constructor.name]);
  });
  c.Show = a;

  c.show = function (p) {
    return p.show;
  };

  c.showBoolean = l;
  c.showInt = f;
  c.showChar = e;
  c.showString = g;
})(PS);

(function (a) {
  a["Data.HTTP.Method"] = a["Data.HTTP.Method"] || {};
  var c = a["Data.HTTP.Method"],
      e = a["Data.Either"];
  a = a["Data.Show"];

  var g = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      f = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      l = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      p = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      k = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      n = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      r = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      w = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      b = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      h = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      d = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      q = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      x = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      t = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      E = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      y = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      u = new a.Show(function (F) {
    if (F instanceof g) return "OPTIONS";
    if (F instanceof f) return "GET";
    if (F instanceof l) return "HEAD";
    if (F instanceof p) return "POST";
    if (F instanceof k) return "PUT";
    if (F instanceof n) return "DELETE";
    if (F instanceof r) return "TRACE";
    if (F instanceof w) return "CONNECT";
    if (F instanceof b) return "PROPFIND";
    if (F instanceof h) return "PROPPATCH";
    if (F instanceof d) return "MKCOL";
    if (F instanceof q) return "COPY";
    if (F instanceof x) return "MOVE";
    if (F instanceof t) return "LOCK";
    if (F instanceof E) return "UNLOCK";
    if (F instanceof y) return "PATCH";
    throw Error("Failed pattern match at Data.HTTP.Method (line 40, column 1 - line 56, column 23): " + [F.constructor.name]);
  });

  e = e.either(a.show(u))(function (F) {
    return F;
  });
  c.GET = f;
  c.print = e;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var c = a["Control.Monad.Rec.Class"],
      e = a["Data.Bifunctor"],
      g = a["Data.Either"],
      f = function () {
    function n(r) {
      this.value0 = r;
    }

    n.create = function (r) {
      return new n(r);
    };

    return n;
  }(),
      l = function () {
    function n(r) {
      this.value0 = r;
    }

    n.create = function (r) {
      return new n(r);
    };

    return n;
  }();

  a = function a(n, r) {
    this.Monad0 = n;
    this.tailRecM = r;
  };

  var p = function p(n) {
    return function (r) {
      r = n(r);

      for (var w = !1, b; !w;) {
        if (b = r, b instanceof f) r = n(b.value0), b = void 0;else if (b instanceof l) w = !0, b = b.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [b.constructor.name]);
      }

      return b;
    };
  },
      k = new a(function () {
    return g.monadEither;
  }, function (n) {
    return function (r) {
      return p(function (w) {
        if (w instanceof g.Left) return new l(new g.Left(w.value0));
        if (w instanceof g.Right && w.value0 instanceof f) return new f(n(w.value0.value0));
        if (w instanceof g.Right && w.value0 instanceof l) return new l(new g.Right(w.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [w.constructor.name]);
      })(n(r));
    };
  });

  e = new e.Bifunctor(function (n) {
    return function (r) {
      return function (w) {
        if (w instanceof f) return new f(n(w.value0));
        if (w instanceof l) return new l(r(w.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [n.constructor.name, r.constructor.name, w.constructor.name]);
      };
    };
  });
  c.Loop = f;
  c.Done = l;
  c.MonadRec = a;

  c.tailRecM = function (n) {
    return n.tailRecM;
  };

  c.bifunctorStep = e;
  c.monadRecEither = k;
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  var c = a["Control.Plus"],
      e = a["Control.Alt"];

  a = function a(f, l) {
    this.Alt0 = f;
    this.empty = l;
  };

  var g = new a(function () {
    return e.altArray;
  }, []);
  c.Plus = a;

  c.empty = function (f) {
    return f.empty;
  };

  c.plusArray = g;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var c = a["Data.NonEmpty"],
      e = a["Control.Plus"],
      g = a["Data.Foldable"],
      f = a["Data.Functor"],
      l = a["Data.Semigroup"],
      p = a["Data.Show"],
      k = function () {
    function n(r, w) {
      this.value0 = r;
      this.value1 = w;
    }

    n.create = function (r) {
      return function (w) {
        return new n(r, w);
      };
    };

    return n;
  }();

  c.NonEmpty = k;

  c.singleton = function (n) {
    return function (r) {
      return new k(r, e.empty(n));
    };
  };

  c.showNonEmpty = function (n) {
    return function (r) {
      return new p.Show(function (w) {
        return "(NonEmpty " + (p.show(n)(w.value0) + (" " + (p.show(r)(w.value1) + ")")));
      });
    };
  };

  c.functorNonEmpty = function (n) {
    return new f.Functor(function (r) {
      return function (w) {
        return new k(r(w.value0), f.map(n)(r)(w.value1));
      };
    });
  };

  c.foldableNonEmpty = function (n) {
    return new g.Foldable(function (r) {
      return function (w) {
        return function (b) {
          return l.append(r.Semigroup0())(w(b.value0))(g.foldMap(n)(r)(w)(b.value1));
        };
      };
    }, function (r) {
      return function (w) {
        return function (b) {
          return g.foldl(n)(r)(r(w)(b.value0))(b.value1);
        };
      };
    }, function (r) {
      return function (w) {
        return function (b) {
          return r(b.value0)(g.foldr(n)(r)(w)(b.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var c = a["Data.List.Types"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      f = a["Control.Apply"],
      l = a["Control.Plus"],
      p = a["Data.Foldable"],
      k = a["Data.Function"],
      n = a["Data.Functor"],
      r = a["Data.Monoid"],
      w = a["Data.NonEmpty"],
      b = a["Data.Semigroup"],
      h = a["Data.Show"],
      d = function () {
    function L() {}

    L.value = new L();
    return L;
  }(),
      q = function () {
    function L(U, V) {
      this.value0 = U;
      this.value1 = V;
    }

    L.create = function (U) {
      return function (V) {
        return new L(U, V);
      };
    };

    return L;
  }(),
      x = new n.Functor(function (L) {
    return function (U) {
      return function (V) {
        function J(B, G) {
          if (G instanceof q && G.value1 instanceof q && G.value1.value1 instanceof q) v = new q(G, B), V = G.value1.value1.value1;else return D = !0, function (P) {
            return function (Y) {
              for (var pa = P, va = !1, z; !va;) {
                z = pa;
                var ya = Y;
                z instanceof q && z.value0 instanceof q && z.value0.value1 instanceof q && z.value0.value1.value1 instanceof q ? (pa = z.value1, Y = new q(L(z.value0.value0), new q(L(z.value0.value1.value0), new q(L(z.value0.value1.value1.value0), ya))), z = void 0) : (va = !0, z = ya);
              }

              return z;
            };
          }(B)(function (P) {
            return P instanceof q && P.value1 instanceof q && P.value1.value1 instanceof d ? new q(L(P.value0), new q(L(P.value1.value0), d.value)) : P instanceof q && P.value1 instanceof d ? new q(L(P.value0), d.value) : d.value;
          }(G));
        }

        for (var v = U, D = !1, O; !D;) {
          O = J(v, V);
        }

        return O;
      };
    }(d.value);
  }),
      t = w.functorNonEmpty(x),
      E = new p.Foldable(function (L) {
    return function (U) {
      return p.foldl(E)(function (V) {
        var J = b.append(L.Semigroup0())(V);
        return function (v) {
          return J(U(v));
        };
      })(r.mempty(L));
    };
  }, function (L) {
    return function (U) {
      return function (V) {
        for (var J = U, v = !1, D; !v;) {
          D = J;
          var O = V;
          if (O instanceof d) v = !0;else {
            if (O instanceof q) J = L(D)(O.value0), V = O.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [O.constructor.name]);
            D = void 0;
          }
        }

        return D;
      };
    };
  }, function (L) {
    return function (U) {
      var V = p.foldl(E)(k.flip(q.create))(d.value),
          J = p.foldl(E)(k.flip(L))(U);
      return function (v) {
        return J(V(v));
      };
    };
  });

  a = w.foldableNonEmpty(E);

  var y = new b.Semigroup(function (L) {
    return function (U) {
      return p.foldr(E)(q.create)(U)(L);
    };
  }),
      u = new r.Monoid(function () {
    return y;
  }, d.value),
      F = new b.Semigroup(function (L) {
    return function (U) {
      return new w.NonEmpty(L.value0, b.append(y)(L.value1)(new q(U.value0, U.value1)));
    };
  }),
      C = function C(L) {
    return new h.Show(function (U) {
      return U instanceof d ? "Nil" : "(" + (p.intercalate(E)(r.monoidString)(" : ")(n.map(x)(h.show(L))(U)) + " : Nil)");
    });
  },
      N = new f.Apply(function () {
    return x;
  }, function (L) {
    return function (U) {
      if (L instanceof d) return d.value;
      if (L instanceof q) return b.append(y)(n.map(x)(L.value0)(U))(f.apply(N)(L.value1)(U));
      throw Error("Failed pattern match at Data.List.Types (line 155, column 1 - line 157, column 48): " + [L.constructor.name, U.constructor.name]);
    };
  }),
      I = new f.Apply(function () {
    return t;
  }, function (L) {
    return function (U) {
      return new w.NonEmpty(L.value0(U.value0), b.append(y)(f.apply(N)(L.value1)(new q(U.value0, d.value)))(f.apply(N)(new q(L.value0, L.value1))(U.value1)));
    };
  }),
      K = new e.Alt(function () {
    return x;
  }, b.append(y)),
      M = new l.Plus(function () {
    return K;
  }, d.value);

  e = new g.Applicative(function () {
    return I;
  }, function () {
    var L = w.singleton(M);
    return function (U) {
      return L(U);
    };
  }());
  c.Nil = d;
  c.Cons = q;

  c.NonEmptyList = function (L) {
    return L;
  };

  c.monoidList = u;
  c.foldableList = E;
  c.plusList = M;

  c.showNonEmptyList = function (L) {
    return new h.Show(function (U) {
      return "(NonEmptyList " + (h.show(w.showNonEmpty(L)(C(L)))(U) + ")");
    });
  };

  c.functorNonEmptyList = t;
  c.applicativeNonEmptyList = e;
  c.semigroupNonEmptyList = F;
  c.foldableNonEmptyList = a;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var c = a["Data.List"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      f = a["Control.Bind"],
      l = a["Control.Monad.Rec.Class"],
      p = a["Data.Bifunctor"],
      k = a["Data.Functor"],
      n = a["Data.List.Types"],
      r = a["Data.Maybe"],
      w = a["Data.Unit"],
      b = function () {
    return function (h) {
      return function (d) {
        for (var q = h, x = !1, t; !x;) {
          t = q;
          var E = d;
          if (E instanceof n.Nil) x = !0;else {
            if (E instanceof n.Cons) q = new n.Cons(E.value0, t), d = E.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [t.constructor.name, E.constructor.name]);
            t = void 0;
          }
        }

        return t;
      };
    }(n.Nil.value);
  }();

  c.manyRec = function (h) {
    return function (d) {
      return function (q) {
        return l.tailRecM(h)(function (x) {
          return f.bind(h.Monad0().Bind1())(e.alt(d.Plus1().Alt0())(k.map(d.Plus1().Alt0().Functor0())(l.Loop.create)(q))(g.pure(d.Applicative0())(new l.Done(w.unit))))(function (t) {
            return g.pure(d.Applicative0())(p.bimap(l.bifunctorStep)(function (E) {
              return new n.Cons(E, x);
            })(function (E) {
              return b(x);
            })(t));
          });
        })(n.Nil.value);
      };
    };
  };

  c.uncons = function (h) {
    if (h instanceof n.Nil) return r.Nothing.value;
    if (h instanceof n.Cons) return new r.Just({
      head: h.value0,
      tail: h.value1
    });
    throw Error("Failed pattern match at Data.List (line 259, column 1 - line 259, column 66): " + [h.constructor.name]);
  };

  c.reverse = b;
})(PS);

(function (a) {
  a.unfoldrArrayImpl = function (c) {
    return function (e) {
      return function (g) {
        return function (f) {
          return function (l) {
            return function (p) {
              for (var k = [];;) {
                p = l(p);
                if (c(p)) return k;
                p = e(p);
                k.push(g(p));
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
  a.unfoldr1ArrayImpl = function (c) {
    return function (e) {
      return function (g) {
        return function (f) {
          return function (l) {
            return function (p) {
              for (var k = [];;) {
                p = l(p);
                k.push(g(p));
                p = f(p);
                if (c(p)) return k;
                p = e(p);
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
      e = a["Data.Boolean"],
      g = a["Data.Maybe"],
      f = a["Data.Tuple"];
  a = new function (p) {
    this.unfoldr1 = p;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(g.isNothing)(g.fromJust())(f.fst)(f.snd));

  var l = function l(p) {
    return function (k) {
      return function (n) {
        return (0, p.unfoldr1)(function (r) {
          if (0 >= r) return new f.Tuple(n, g.Nothing.value);
          if (e.otherwise) return new f.Tuple(n, new g.Just(r - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [r.constructor.name]);
        })(k - 1 | 0);
      };
    };
  };

  c.unfoldr1 = function (p) {
    return p.unfoldr1;
  };

  c.singleton = function (p) {
    return l(p)(1);
  };

  c.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Unfoldable"] = a["Data.Unfoldable"] || {};
  var c = a["Data.Unfoldable"],
      e = a["Data.Function"],
      g = a["Data.Functor"],
      f = a["Data.Maybe"],
      l = a["Data.Tuple"],
      p = a["Data.Unfoldable1"];
  a = new function (k, n) {
    this.Unfoldable10 = k;
    this.unfoldr = n;
  }(function () {
    return p.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(f.isNothing)(f.fromJust())(l.fst)(l.snd));

  c.unfoldr = function (k) {
    return k.unfoldr;
  };

  c.fromMaybe = function (k) {
    return (0, k.unfoldr)(function (n) {
      return g.map(f.functorMaybe)(e.flip(l.Tuple.create)(f.Nothing.value))(n);
    });
  };

  c.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.List.NonEmpty"] = a["Data.List.NonEmpty"] || {};
  var c = a["Data.List.NonEmpty"],
      e = a["Data.Functor"],
      g = a["Data.List"],
      f = a["Data.List.Types"],
      l = a["Data.Maybe"],
      p = a["Data.NonEmpty"],
      k = a["Data.Tuple"],
      n = a["Data.Unfoldable"];

  a = function () {
    var r = p.singleton(f.plusList);
    return function (w) {
      return f.NonEmptyList(r(w));
    };
  }();

  c.toUnfoldable = function (r) {
    var w = n.unfoldr(r)(function (b) {
      return e.map(l.functorMaybe)(function (h) {
        return new k.Tuple(h.head, h.tail);
      })(g.uncons(b));
    });
    return function (b) {
      return w(new f.Cons(b.value0, b.value1));
    };
  };

  c.singleton = a;

  c.head = function (r) {
    return r.value0;
  };
})(PS);

(function (a) {
  a["null"] = null;

  a.nullable = function (c, e, g) {
    return null == c ? e : g(c);
  };

  a.notNull = function (c) {
    return c;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var c = a["Data.Nullable"],
      e = a["Data.Nullable"],
      g = a["Data.Maybe"];
  a = g.maybe(e["null"])(e.notNull);

  c.toMaybe = function (f) {
    return e.nullable(f, g.Nothing.value, g.Just.create);
  };

  c.toNullable = a;
})(PS);

(function (a) {
  var c = function () {
    function e(d, q, x, t) {
      this.tag = d;
      this._1 = q;
      this._2 = x;
      this._3 = t;
    }

    function g(d) {
      var q = function q(x, t, E) {
        return new e(d, x, t, E);
      };

      q.tag = d;
      return q;
    }

    function f(d) {
      return new e("Pure", void 0);
    }

    function l(d) {
      try {
        d();
      } catch (q) {
        setTimeout(function () {
          throw q;
        }, 0);
      }
    }

    function p(d, q, x) {
      try {
        return q(x());
      } catch (t) {
        return d(t);
      }
    }

    function k(d, q, x) {
      try {
        return q(x)();
      } catch (t) {
        return x(d(t))(), f;
      }
    }

    function n(d, q, x) {
      function t(v) {
        for (var D, O, B;;) {
          switch (B = O = D = null, u) {
            case 2:
              u = 1;

              try {
                F = I(F), null === K ? I = null : (I = K._1, K = K._2);
              } catch (P) {
                u = 5, C = d.left(P), F = null;
              }

              break;

            case 3:
              d.isLeft(F) ? (u = 5, C = F, F = null) : null === I ? u = 5 : (u = 2, F = d.fromRight(F));
              break;

            case 1:
              switch (F.tag) {
                case "Bind":
                  I && (K = new e("Cons", I, K));
                  I = F._2;
                  u = 1;
                  F = F._1;
                  break;

                case "Pure":
                  null === I ? (u = 5, F = d.right(F._1)) : (u = 2, F = F._1);
                  break;

                case "Sync":
                  u = 3;
                  F = p(d.left, d.right, F._1);
                  break;

                case "Async":
                  u = 4;
                  F = k(d.left, F._1, function (P) {
                    return function () {
                      y === v && (y++, h.enqueue(function () {
                        y === v + 1 && (u = 3, F = P, t(y));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  u = 5;
                  C = d.left(F._1);
                  F = null;
                  break;

                case "Catch":
                  M = null === I ? new e("Cons", F, M, N) : new e("Cons", F, new e("Cons", new e("Resume", I, K), M, N), N);
                  K = I = null;
                  u = 1;
                  F = F._1;
                  break;

                case "Bracket":
                  L++;
                  M = null === I ? new e("Cons", F, M, N) : new e("Cons", F, new e("Cons", new e("Resume", I, K), M, N), N);
                  K = I = null;
                  u = 1;
                  F = F._1;
                  break;

                case "Fork":
                  u = 3;
                  D = n(d, q, F._2);
                  q && q.register(D);
                  F._1 && D.run();
                  F = d.right(D);
                  break;

                case "Sequential":
                  u = 1, F = w(d, q, F._1);
              }

              break;

            case 5:
              K = I = null;
              if (null === M) u = 6, F = N || C || F;else switch (D = M._3, B = M._1, M = M._2, B.tag) {
                case "Catch":
                  N && N !== D && 0 === L ? u = 5 : C && (u = 1, F = B._2(d.fromLeft(C)), C = null);
                  break;

                case "Resume":
                  N && N !== D && 0 === L || C ? u = 5 : (I = B._1, K = B._2, u = 2, F = d.fromRight(F));
                  break;

                case "Bracket":
                  L--;
                  null === C && (O = d.fromRight(F), M = new e("Cons", new e("Release", B._2, O), M, D), N === D || 0 < L) && (u = 1, F = B._3(O));
                  break;

                case "Release":
                  M = new e("Cons", new e("Finalized", F, C), M, N);
                  u = 1;
                  F = N && N !== D && 0 === L ? B._1.killed(d.fromLeft(N))(B._2) : C ? B._1.failed(d.fromLeft(C))(B._2) : B._1.completed(d.fromRight(F))(B._2);
                  C = null;
                  L++;
                  break;

                case "Finalizer":
                  L++;
                  M = new e("Cons", new e("Finalized", F, C), M, N);
                  u = 1;
                  F = B._1;
                  break;

                case "Finalized":
                  L--, u = 5, F = B._1, C = B._2;
              }
              break;

            case 6:
              for (var G in V) {
                V.hasOwnProperty(G) && (J = J && V[G].rethrow, l(V[G].handler(F)));
              }

              V = null;
              N && C ? setTimeout(function () {
                throw d.fromLeft(C);
              }, 0) : d.isLeft(F) && J && setTimeout(function () {
                if (J) throw d.fromLeft(F);
              }, 0);
              return;

            case 0:
              u = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function E(v) {
        return function () {
          if (6 === u) return J = J && v.rethrow, v.handler(F)(), function () {};
          var D = U++;
          V = V || {};
          V[D] = v;
          return function () {
            null !== V && delete V[D];
          };
        };
      }

      var y = 0,
          u = 0,
          F = x,
          C = null,
          N = null,
          I = null,
          K = null,
          M = null,
          L = 0,
          U = 0,
          V = null,
          J = !0;
      return {
        kill: function kill(v, D) {
          return function () {
            if (6 === u) return D(d.right(void 0))(), function () {};
            var O = E({
              rethrow: !1,
              handler: function handler() {
                return D(d.right(void 0));
              }
            })();

            switch (u) {
              case 0:
                N = d.left(v);
                u = 6;
                F = N;
                t(y);
                break;

              case 4:
                null === N && (N = d.left(v));
                0 === L && (4 === u && (M = new e("Cons", new e("Finalizer", F(v)), M, N)), u = 5, C = F = null, t(++y));
                break;

              default:
                null === N && (N = d.left(v)), 0 === L && (u = 5, C = F = null);
            }

            return O;
          };
        },
        join: function join(v) {
          return function () {
            var D = E({
              rethrow: !1,
              handler: v
            })();
            0 === u && t(y);
            return D;
          };
        },
        onComplete: E,
        isSuspended: function isSuspended() {
          return 0 === u;
        },
        run: function run() {
          0 === u && (h.isDraining() ? t(y) : h.enqueue(function () {
            t(y);
          }));
        }
      };
    }

    function r(d, q, x, t) {
      function E(V, J, v) {
        var D = J,
            O = null,
            B = null,
            G = 0;
        J = {};

        a: for (;;) {
          var P = null;

          switch (D.tag) {
            case "Forked":
              D._3 === b && (P = N[D._1], J[G++] = P.kill(V, function (Y) {
                return function () {
                  G--;
                  0 === G && v(Y)();
                };
              }));
              if (null === O) break a;
              D = O._2;
              null === B ? O = null : (O = B._1, B = B._2);
              break;

            case "Map":
              D = D._2;
              break;

            case "Apply":
            case "Alt":
              O && (B = new e("Cons", O, B)), O = D, D = D._1;
          }
        }

        if (0 === G) v(d.right(void 0))();else for (V = 0, P = G; V < P; V++) {
          J[V] = J[V]();
        }
        return J;
      }

      function y(V, J, v) {
        var D, O;

        if (d.isLeft(V)) {
          var B = V;
          var G = null;
        } else G = V, B = null;

        for (;;) {
          var P = O = D = V = null;
          if (null !== L) break;

          if (null === J) {
            t(B || G)();
            break;
          }

          if (J._3 !== b) break;

          switch (J.tag) {
            case "Map":
              null === B ? (J._3 = d.right(J._1(d.fromRight(G))), G = J._3) : J._3 = B;
              break;

            case "Apply":
              V = J._1._3;
              D = J._2._3;

              if (B) {
                if (J._3 = B, O = !0, P = I++, K[P] = E(M, B === V ? J._2 : J._1, function () {
                  return function () {
                    delete K[P];
                    O ? O = !1 : null === v ? y(B, null, null) : y(B, v._1, v._2);
                  };
                }), O) {
                  O = !1;
                  return;
                }
              } else {
                if (V === b || D === b) return;
                G = d.right(d.fromRight(V)(d.fromRight(D)));
                J._3 = G;
              }

              break;

            case "Alt":
              V = J._1._3;
              D = J._2._3;
              if (V === b && d.isLeft(D) || D === b && d.isLeft(V)) return;
              if (V !== b && d.isLeft(V) && D !== b && d.isLeft(D)) B = G === V ? D : V, G = null, J._3 = B;else if (J._3 = G, O = !0, P = I++, K[P] = E(M, G === V ? J._2 : J._1, function () {
                return function () {
                  delete K[P];
                  O ? O = !1 : null === v ? y(G, null, null) : y(G, v._1, v._2);
                };
              }), O) {
                O = !1;
                return;
              }
          }

          null === v ? J = null : (J = v._1, v = v._2);
        }
      }

      function u(V) {
        return function (J) {
          return function () {
            delete N[V._1];
            V._3 = J;
            y(J, V._2._1, V._2._2);
          };
        };
      }

      function F(V, J) {
        L = d.left(V);
        var v;

        for (v in K) {
          if (K.hasOwnProperty(v)) {
            var D = K[v];

            for (v in D) {
              if (D.hasOwnProperty(v)) D[v]();
            }
          }
        }

        K = null;
        var O = E(V, U, J);
        return function (B) {
          return new e("Async", function (G) {
            return function () {
              for (var P in O) {
                if (O.hasOwnProperty(P)) O[P]();
              }

              return f;
            };
          });
        };
      }

      var C = 0,
          N = {},
          I = 0,
          K = {},
          M = Error("[ParAff] Early exit"),
          L = null,
          U = b;

      (function () {
        var V = 1,
            J = x,
            v = null,
            D = null;

        a: for (;;) {
          switch (V) {
            case 1:
              switch (J.tag) {
                case "Map":
                  v && (D = new e("Cons", v, D));
                  v = new e("Map", J._1, b, b);
                  J = J._2;
                  break;

                case "Apply":
                  v && (D = new e("Cons", v, D));
                  v = new e("Apply", b, J._2, b);
                  J = J._1;
                  break;

                case "Alt":
                  v && (D = new e("Cons", v, D));
                  v = new e("Alt", b, J._2, b);
                  J = J._1;
                  break;

                default:
                  var O = C++;
                  V = 5;
                  var B = J;
                  J = new e("Forked", O, new e("Cons", v, D), b);
                  B = n(d, q, B);
                  B.onComplete({
                    rethrow: !1,
                    handler: u(J)
                  })();
                  N[O] = B;
                  q && q.register(B);
              }

              break;

            case 5:
              if (null === v) break a;
              v._1 === b ? (v._1 = J, V = 1, J = v._2, v._2 = b) : (v._2 = J, J = v, null === D ? v = null : (v = D._1, D = D._2));
          }
        }

        U = J;

        for (O = 0; O < C; O++) {
          N[O].run();
        }
      })();

      return function (V) {
        return new e("Async", function (J) {
          return function () {
            return F(V, J);
          };
        });
      };
    }

    function w(d, q, x) {
      return new e("Async", function (t) {
        return function () {
          return r(d, q, x, t);
        };
      });
    }

    var b = {},
        h = function () {
      function d() {
        for (E = !0; 0 !== q;) {
          q--;
          var y = t[x];
          t[x] = void 0;
          x = (x + 1) % 1024;
          y();
        }

        E = !1;
      }

      var q = 0,
          x = 0,
          t = Array(1024),
          E = !1;
      return {
        isDraining: function isDraining() {
          return E;
        },
        enqueue: function enqueue(y) {
          if (1024 === q) {
            var u = E;
            d();
            E = u;
          }

          t[(x + q) % 1024] = y;
          q++;
          E || d();
        }
      };
    }();

    e.EMPTY = b;
    e.Pure = g("Pure");
    e.Throw = g("Throw");
    e.Catch = g("Catch");
    e.Sync = g("Sync");
    e.Async = g("Async");
    e.Bind = g("Bind");
    e.Bracket = g("Bracket");
    e.Fork = g("Fork");
    e.Seq = g("Sequential");
    e.ParMap = g("Map");
    e.ParApply = g("Apply");
    e.ParAlt = g("Alt");
    e.Fiber = n;

    e.Supervisor = function (d) {
      var q = {},
          x = 0,
          t = 0;
      return {
        register: function register(E) {
          var y = x++;
          E.onComplete({
            rethrow: !0,
            handler: function handler(u) {
              return function () {
                t--;
                delete q[y];
              };
            }
          })();
          q[y] = E;
          t++;
        },
        isEmpty: function isEmpty() {
          return 0 === t;
        },
        killAll: function killAll(E, y) {
          return function () {
            function u(I) {
              C[I] = q[I].kill(E, function (K) {
                return function () {
                  delete C[I];
                  F--;
                  d.isLeft(K) && d.fromLeft(K) && setTimeout(function () {
                    throw d.fromLeft(K);
                  }, 0);
                  0 === F && y();
                };
              })();
            }

            if (0 === t) return y();
            var F = 0,
                C = {},
                N;

            for (N in q) {
              q.hasOwnProperty(N) && (F++, u(N));
            }

            q = {};
            t = x = 0;
            return function (I) {
              return new e("Sync", function () {
                for (var K in C) {
                  if (C.hasOwnProperty(K)) C[K]();
                }
              });
            };
          };
        }
      };
    };

    e.Scheduler = h;
    e.nonCanceler = f;
    return e;
  }();

  a._pure = c.Pure;
  a._throwError = c.Throw;

  a._catchError = function (e) {
    return function (g) {
      return c.Catch(e, g);
    };
  };

  a._map = function (e) {
    return function (g) {
      return g.tag === c.Pure.tag ? c.Pure(e(g._1)) : c.Bind(g, function (f) {
        return c.Pure(e(f));
      });
    };
  };

  a._bind = function (e) {
    return function (g) {
      return c.Bind(e, g);
    };
  };

  a._liftEffect = c.Sync;

  a._parAffMap = function (e) {
    return function (g) {
      return c.ParMap(e, g);
    };
  };

  a._parAffApply = function (e) {
    return function (g) {
      return c.ParApply(e, g);
    };
  };

  a._parAffAlt = function (e) {
    return function (g) {
      return c.ParAlt(e, g);
    };
  };

  a.makeAff = c.Async;

  a._makeFiber = function (e, g) {
    return function () {
      return c.Fiber(e, null, g);
    };
  };

  a._delay = function () {
    function e(g, f) {
      return 0 === g && "undefined" !== typeof setImmediate ? setImmediate(f) : setTimeout(f, g);
    }

    return function (g, f) {
      return c.Async(function (l) {
        return function () {
          var p = e(f, l(g()));
          return function () {
            return c.Sync(function () {
              var k = 0 === f && "undefined" !== typeof clearImmediate ? clearImmediate(p) : clearTimeout(p);
              return g(k);
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

  a.Parallel = function (c, e, g, f) {
    this.Applicative1 = c;
    this.Monad0 = e;
    this.parallel = g;
    this.sequential = f;
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var c = a["Control.Category"],
      e = a["Control.Parallel.Class"],
      g = a["Data.Foldable"],
      f = function f(l) {
    return function (p) {
      return function (k) {
        var n = e.sequential(l),
            r = g.traverse_(l.Applicative1())(p)(function () {
          var w = e.parallel(l);
          return function (b) {
            return w(k(b));
          };
        }());
        return function (w) {
          return n(r(w));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (l) {
    return function (p) {
      return f(l)(p)(c.identity(c.categoryFn));
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
    return function (e) {
      return function () {
        return e(c())();
      };
    };
  };
})(PS.Effect = PS.Effect || {});

(function (a) {
  a.Effect = a.Effect || {};
  var c = a.Effect,
      e = a.Effect,
      g = a["Control.Applicative"],
      f = a["Control.Apply"],
      l = a["Control.Bind"],
      p = a["Control.Monad"],
      k = a["Data.Functor"],
      n = a["Data.Monoid"],
      r = a["Data.Semigroup"];
  a = new p.Monad(function () {
    return h;
  }, function () {
    return w;
  });
  var w = new l.Bind(function () {
    return b;
  }, e.bindE),
      b = new f.Apply(function () {
    return d;
  }, p.ap(a)),
      h = new g.Applicative(function () {
    return b;
  }, e.pureE),
      d = new k.Functor(g.liftA1(h));
  c.functorEffect = d;
  c.applyEffect = b;
  c.applicativeEffect = h;
  c.bindEffect = w;
  c.monadEffect = a;

  c.monoidEffect = function (q) {
    return new n.Monoid(function () {
      var x = q.Semigroup0();
      return new r.Semigroup(f.lift2(b)(r.append(x)));
    }, e.pureE(n.mempty(q)));
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var c = a["Effect.Class"],
      e = a["Control.Category"],
      g = a.Effect;

  a = function a(f, l) {
    this.Monad0 = f;
    this.liftEffect = l;
  };

  e = new a(function () {
    return g.monadEffect;
  }, e.identity(e.categoryFn));

  c.liftEffect = function (f) {
    return f.liftEffect;
  };

  c.MonadEffect = a;
  c.monadEffectEffect = e;
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
    return function (e) {
      return function () {
        try {
          return e();
        } catch (g) {
          return g instanceof Error || "[object Error]" === Object.prototype.toString.call(g) ? c(g)() : c(Error(g.toString()))();
        }
      };
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var c = a["Effect.Exception"],
      e = a["Effect.Exception"],
      g = a["Control.Applicative"],
      f = a["Data.Either"],
      l = a["Data.Functor"],
      p = a.Effect;
  a = new a["Data.Show"].Show(e.showErrorImpl);

  c["throw"] = function (k) {
    return e.throwException(e.error(k));
  };

  c["try"] = function (k) {
    return e.catchException(function () {
      var n = g.pure(p.applicativeEffect);
      return function (r) {
        return n(f.Left.create(r));
      };
    }())(l.map(p.functorEffect)(f.Right.create)(k));
  };

  c.showError = a;
  c.error = e.error;
  c.message = e.message;
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
      e = a.Partial;

  a["Partial.Unsafe"].unsafeCrashWith = function (g) {
    return c.unsafePartial(function (f) {
      return e.crashWith()(g);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var c = a["Effect.Aff"],
      e = a["Effect.Aff"],
      g = a["Control.Alt"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      p = a["Control.Bind"],
      k = a["Control.Monad"],
      n = a["Control.Monad.Error.Class"],
      r = a["Control.Parallel"],
      w = a["Control.Parallel.Class"],
      b = a["Control.Plus"],
      h = a["Data.Either"],
      d = a["Data.Foldable"],
      q = a["Data.Function"],
      x = a["Data.Functor"],
      t = a["Data.Monoid"],
      E = a["Data.Semigroup"],
      y = a["Data.Unit"],
      u = a.Effect,
      F = a["Effect.Class"],
      C = a["Effect.Exception"],
      N = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var I = new x.Functor(e._parAffMap),
      K = new x.Functor(e._map),
      M = function () {
    return {
      isLeft: function isLeft(ka) {
        if (ka instanceof h.Left) return !0;
        if (ka instanceof h.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [ka.constructor.name]);
      },
      fromLeft: function fromLeft(ka) {
        if (ka instanceof h.Left) return ka.value0;
        if (ka instanceof h.Right) return N.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [ka.constructor.name]);
      },
      fromRight: function fromRight(ka) {
        if (ka instanceof h.Right) return ka.value0;
        if (ka instanceof h.Left) return N.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [ka.constructor.name]);
      },
      left: h.Left.create,
      right: h.Right.create
    };
  }(),
      L = function L(ka) {
    return function () {
      var Aa = e._makeFiber(M, ka)();

      Aa.run();
      return Aa;
    };
  },
      U = new l.Apply(function () {
    return I;
  }, e._parAffApply),
      V = new k.Monad(function () {
    return D;
  }, function () {
    return J;
  }),
      J = new p.Bind(function () {
    return v;
  }, e._bind),
      v = new l.Apply(function () {
    return K;
  }, k.ap(V)),
      D = new f.Applicative(function () {
    return v;
  }, e._pure),
      O = new F.MonadEffect(function () {
    return V;
  }, e._liftEffect);

  l = function () {
    var ka = F.liftEffect(O);
    return function (Aa) {
      return q["const"](ka(Aa));
    };
  }();

  var B = new n.MonadThrow(function () {
    return V;
  }, e._throwError),
      G = new n.MonadError(function () {
    return B;
  }, e._catchError),
      P = function P(ka) {
    return function (Aa) {
      return L(p.bindFlipped(J)(function () {
        var R = F.liftEffect(O);
        return function (ia) {
          return R(ka(ia));
        };
      }())(n["try"](G)(Aa)));
    };
  },
      Y = new w.Parallel(function () {
    return pa;
  }, function () {
    return V;
  }, a.unsafeCoerce, e._sequential),
      pa = new f.Applicative(function () {
    return U;
  }, function () {
    var ka = w.parallel(Y),
        Aa = f.pure(D);
    return function (R) {
      return ka(Aa(R));
    };
  }()),
      va = new E.Semigroup(function (ka) {
    return function (Aa) {
      return function (R) {
        return r.parSequence_(Y)(d.foldableArray)([ka(R), Aa(R)]);
      };
    };
  });

  E = q["const"](f.pure(D)(y.unit));
  var z = new t.Monoid(function () {
    return va;
  }, E);
  y = e.makeAff(function (ka) {
    return f.pure(u.applicativeEffect)(t.mempty(z));
  });
  var ya = new g.Alt(function () {
    return I;
  }, e._parAffAlt),
      X = new g.Alt(function () {
    return K;
  }, function (ka) {
    return function (Aa) {
      return n.catchError(G)(ka)(q["const"](Aa));
    };
  });
  g = new b.Plus(function () {
    return X;
  }, n.throwError(B)(C.error("Always fails")));
  b = new b.Plus(function () {
    return ya;
  }, w.parallel(Y)(b.empty(g)));

  c.runAff_ = function (ka) {
    return function (Aa) {
      return x["void"](u.functorEffect)(P(ka)(Aa));
    };
  };

  c.delay = function (ka) {
    return e._delay(h.Right.create, ka);
  };

  c.never = y;
  c.nonCanceler = E;
  c.effectCanceler = l;
  c.functorAff = K;
  c.applicativeAff = D;
  c.bindAff = J;
  c.monadErrorAff = G;
  c.monadEffectAff = O;
  c.altParAff = ya;
  c.plusParAff = b;
  c.parallelAff = Y;
  c.monoidCanceler = z;
  c.makeAff = e.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.Compat"] = a["Effect.Aff.Compat"] || {};
  var c = a["Data.Either"],
      e = a["Effect.Aff"];

  a["Effect.Aff.Compat"].fromEffectFnAff = function (g) {
    return e.makeAff(function (f) {
      return function () {
        var l = g(function (p) {
          return f(c.Left.create(p))();
        }, function (p) {
          return f(c.Right.create(p))();
        });
        return function (p) {
          return e.makeAff(function (k) {
            return function () {
              l(p, function (n) {
                return k(c.Left.create(n))();
              }, function (n) {
                return k(c.Right.create(n))();
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
      e = a.Foreign,
      g = a["Control.Applicative"],
      f = a["Control.Monad.Error.Class"],
      l = a["Control.Monad.Except.Trans"],
      p = a["Data.Boolean"],
      k = a["Data.Identity"],
      n = a["Data.List.NonEmpty"],
      r = a["Data.Show"],
      w = function () {
    function y(u) {
      this.value0 = u;
    }

    y.create = function (u) {
      return new y(u);
    };

    return y;
  }(),
      b = function () {
    function y(u, F) {
      this.value0 = u;
      this.value1 = F;
    }

    y.create = function (u) {
      return function (F) {
        return new y(u, F);
      };
    };

    return y;
  }(),
      h = function () {
    function y(u, F) {
      this.value0 = u;
      this.value1 = F;
    }

    y.create = function (u) {
      return function (F) {
        return new y(u, F);
      };
    };

    return y;
  }(),
      d = function () {
    function y(u, F) {
      this.value0 = u;
      this.value1 = F;
    }

    y.create = function (u) {
      return function (F) {
        return new y(u, F);
      };
    };

    return y;
  }(),
      q = new r.Show(function (y) {
    if (y instanceof w) return "(ForeignError " + (r.show(r.showString)(y.value0) + ")");
    if (y instanceof h) return "(ErrorAtIndex " + (r.show(r.showInt)(y.value0) + (" " + (r.show(q)(y.value1) + ")")));
    if (y instanceof d) return "(ErrorAtProperty " + (r.show(r.showString)(y.value0) + (" " + (r.show(q)(y.value1) + ")")));
    if (y instanceof b) return "(TypeMismatch " + (r.show(r.showString)(y.value0) + (" " + (r.show(r.showString)(y.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [y.constructor.name]);
  }),
      x = function x(y) {
    if (y instanceof w) return y.value0;
    if (y instanceof h) return "Error at array index " + (r.show(r.showInt)(y.value0) + (": " + x(y.value1)));
    if (y instanceof d) return "Error at property " + (r.show(r.showString)(y.value0) + (": " + x(y.value1)));
    if (y instanceof b) return "Type mismatch: expected " + (y.value0 + (", found " + y.value1));
    throw Error("Failed pattern match at Foreign (line 72, column 1 - line 72, column 45): " + [y.constructor.name]);
  },
      t = function () {
    var y = f.throwError(l.monadThrowExceptT(k.monadIdentity));
    return function (u) {
      return y(n.singleton(u));
    };
  }();

  a = function a(y) {
    return function (u) {
      if (e.tagOf(u) === y) return g.pure(l.applicativeExceptT(k.monadIdentity))(e.unsafeFromForeign(u));
      if (p.otherwise) return t(new b(y, e.tagOf(u)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [y.constructor.name, u.constructor.name]);
    };
  };

  var E = a("String");
  c.ForeignError = w;
  c.TypeMismatch = b;
  c.ErrorAtIndex = h;
  c.ErrorAtProperty = d;
  c.renderForeignError = x;
  c.unsafeReadTagged = a;
  c.readString = E;

  c.readArray = function (y) {
    if (e.isArray(y)) return g.pure(l.applicativeExceptT(k.monadIdentity))(e.unsafeFromForeign(y));
    if (p.otherwise) return t(new b("array", e.tagOf(y)));
    throw Error("Failed pattern match at Foreign (line 147, column 1 - line 147, column 42): " + [y.constructor.name]);
  };

  c.fail = t;
  c.showForeignError = q;
  c.unsafeToForeign = e.unsafeToForeign;
  c.typeOf = e.typeOf;
  c.isNull = e.isNull;
  c.isUndefined = e.isUndefined;
})(PS);

(function (a) {
  a.Affjax = a.Affjax || {};

  var c = a.Affjax,
      e = a.Affjax,
      g = a["Affjax.RequestBody"],
      f = a["Affjax.RequestHeader"],
      l = a["Affjax.ResponseFormat"],
      p = a["Affjax.ResponseHeader"],
      k = a["Control.Applicative"],
      n = a["Control.Bind"],
      r = a["Control.Monad.Error.Class"],
      w = a["Control.Monad.Except"],
      b = a["Control.Monad.Except.Trans"],
      h = a["Data.Argonaut.Core"],
      d = a["Data.Argonaut.Parser"],
      q = a["Data.Array"],
      x = a["Data.Either"],
      t = a["Data.Eq"],
      E = a["Data.Foldable"],
      y = a["Data.FormURLEncoded"],
      u = a["Data.Function"],
      F = a["Data.Functor"],
      C = a["Data.HTTP.Method"],
      N = a["Data.HeytingAlgebra"],
      I = a["Data.Identity"],
      K = a["Data.List.NonEmpty"],
      M = a["Data.Maybe"],
      L = a["Data.Nullable"],
      U = a["Data.Unit"],
      V = a["Effect.Aff"],
      J = a["Effect.Aff.Compat"],
      v = a["Effect.Exception"],
      D = a.Foreign,
      O = function () {
    function X(ka) {
      this.value0 = ka;
    }

    X.create = function (ka) {
      return new X(ka);
    };

    return X;
  }(),
      B = function () {
    function X(ka, Aa) {
      this.value0 = ka;
      this.value1 = Aa;
    }

    X.create = function (ka) {
      return function (Aa) {
        return new X(ka, Aa);
      };
    };

    return X;
  }(),
      G = function () {
    function X(ka) {
      this.value0 = ka;
    }

    X.create = function (ka) {
      return new X(ka);
    };

    return X;
  }(),
      P = function P(X) {
    var ka = function ka(qa) {
      return "" === qa ? k.pure(b.applicativeExceptT(I.monadIdentity))(h.jsonEmptyObject) : x.either(function (Ba) {
        return D.fail(D.ForeignError.create(Ba));
      })(k.pure(b.applicativeExceptT(I.monadIdentity)))(d.jsonParser(qa));
    },
        Aa = function () {
      if (X.responseFormat instanceof l.ArrayBuffer) return D.unsafeReadTagged("ArrayBuffer");
      if (X.responseFormat instanceof l.Blob) return D.unsafeReadTagged("Blob");
      if (X.responseFormat instanceof l.Document) return D.unsafeReadTagged("Document");
      if (X.responseFormat instanceof l.Json) return n.composeKleisliFlipped(b.bindExceptT(I.monadIdentity))(function (qa) {
        return X.responseFormat.value0(ka(qa));
      })(D.unsafeReadTagged("String"));
      if (X.responseFormat instanceof l.String) return D.unsafeReadTagged("String");
      if (X.responseFormat instanceof l.Ignore) return u["const"](X.responseFormat.value0(k.pure(b.applicativeExceptT(I.monadIdentity))(U.unit)));
      throw Error("Failed pattern match at Affjax (line 237, column 18 - line 243, column 57): " + [X.responseFormat.constructor.name]);
    }(),
        R = function R(qa) {
      if (qa instanceof g.ArrayView) return x.Right.create(qa.value0(D.unsafeToForeign));
      if (qa instanceof g.Blob || qa instanceof g.Document || qa instanceof g.String || qa instanceof g.FormData) return x.Right.create(D.unsafeToForeign(qa.value0));
      if (qa instanceof g.FormURLEncoded) return x.note("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(F.map(M.functorMaybe)(D.unsafeToForeign)(y.encode(qa.value0)));
      if (qa instanceof g.Json) return x.Right.create(D.unsafeToForeign(h.stringify(qa.value0)));
      throw Error("Failed pattern match at Affjax (line 203, column 20 - line 218, column 69): " + [qa.constructor.name]);
    },
        ia = function ia(qa) {
      return function (Ba) {
        return qa instanceof M.Just && !E.any(E.foldableArray)(N.heytingAlgebraBoolean)(u.on(t.eq(t.eqString))(f.name)(qa.value0))(Ba) ? q.snoc(Ba)(qa.value0) : Ba;
      };
    },
        Da = function Da(qa) {
      return ia(F.map(M.functorMaybe)(f.ContentType.create)(n.bindFlipped(M.bindMaybe)(g.toMediaType)(qa)))(ia(F.map(M.functorMaybe)(f.Accept.create)(l.toMediaType(X.responseFormat)))(X.headers));
    },
        na = function na(qa) {
      return {
        method: C.print(X.method),
        url: X.url,
        headers: F.map(F.functorArray)(function (Ba) {
          return {
            field: f.name(Ba),
            value: f.value(Ba)
          };
        })(Da(X.content)),
        content: qa,
        responseType: l.toResponseType(X.responseFormat),
        username: L.toNullable(X.username),
        password: L.toNullable(X.password),
        withCredentials: X.withCredentials
      };
    },
        ua = function ua(qa) {
      return F.mapFlipped(V.functorAff)(r["try"](V.monadErrorAff)(J.fromEffectFnAff(e._ajax(p.ResponseHeader.create, na(qa)))))(function (Ba) {
        if (Ba instanceof x.Right) {
          var Ha = w.runExcept(Aa(Ba.value0.body));
          if (Ha instanceof x.Left) return new x.Left(new B(K.head(Ha.value0), Ba.value0));
          if (Ha instanceof x.Right) return new x.Right({
            body: Ha.value0,
            headers: Ba.value0.headers,
            status: Ba.value0.status,
            statusText: Ba.value0.statusText
          });
          throw Error("Failed pattern match at Affjax (line 184, column 9 - line 186, column 52): " + [Ha.constructor.name]);
        }

        if (Ba instanceof x.Left) return new x.Left(new G(Ba.value0));
        throw Error("Failed pattern match at Affjax (line 182, column 86 - line 188, column 28): " + [Ba.constructor.name]);
      });
    };

    if (X.content instanceof M.Nothing) return ua(L.toNullable(M.Nothing.value));

    if (X.content instanceof M.Just) {
      R = R(X.content.value0);
      if (R instanceof x.Right) return ua(L.toNullable(new M.Just(R.value0)));
      if (R instanceof x.Left) return k.pure(V.applicativeAff)(new x.Left(new O(R.value0)));
      throw Error("Failed pattern match at Affjax (line 173, column 7 - line 177, column 48): " + [R.constructor.name]);
    }

    throw Error("Failed pattern match at Affjax (line 169, column 3 - line 177, column 48): " + [X.content.constructor.name]);
  },
      Y = new x.Left(C.GET.value),
      pa = [],
      va = M.Nothing.value,
      z = M.Nothing.value,
      ya = M.Nothing.value;

  c.printError = function (X) {
    if (X instanceof O) return "There was a problem with the request content: " + X.value0;
    if (X instanceof B) return "There was a problem with the response body: " + D.renderForeignError(X.value0);
    if (X instanceof G) return "There was a problem making the request: " + v.message(X.value0);
    throw Error("Failed pattern match at Affjax (line 91, column 14 - line 97, column 66): " + [X.constructor.name]);
  };

  c.get = function (X) {
    return function (ka) {
      return P({
        method: Y,
        url: ka,
        headers: pa,
        content: va,
        username: z,
        password: ya,
        withCredentials: !1,
        responseFormat: X
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Alternative"] = a["Control.Alternative"] || {};

  a["Control.Alternative"].Alternative = function (c, e) {
    this.Applicative0 = c;
    this.Plus1 = e;
  };
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var c = a["Data.CatQueue"],
      e = a["Data.List"],
      g = a["Data.List.Types"],
      f = a["Data.Maybe"],
      l = a["Data.Tuple"],
      p = function () {
    function k(n, r) {
      this.value0 = n;
      this.value1 = r;
    }

    k.create = function (n) {
      return function (r) {
        return new k(n, r);
      };
    };

    return k;
  }();

  a = new p(g.Nil.value, g.Nil.value);
  c.empty = a;

  c["null"] = function (k) {
    return k.value0 instanceof g.Nil && k.value1 instanceof g.Nil ? !0 : !1;
  };

  c.snoc = function (k) {
    return function (n) {
      return new p(k.value0, new g.Cons(n, k.value1));
    };
  };

  c.uncons = function (k) {
    for (var n = !1, r; !n;) {
      if (r = k, r.value0 instanceof g.Nil && r.value1 instanceof g.Nil) n = !0, r = f.Nothing.value;else if (r.value0 instanceof g.Nil) k = new p(e.reverse(r.value1), g.Nil.value), r = void 0;else if (r.value0 instanceof g.Cons) n = !0, r = new f.Just(new l.Tuple(r.value0.value0, new p(r.value0.value1, r.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [r.constructor.name]);
    }

    return r;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var c = a["Data.CatList"],
      e = a["Data.CatQueue"],
      g = a["Data.List.Types"],
      f = a["Data.Maybe"],
      l = a["Data.Semigroup"],
      p = a["Data.Tuple"],
      k = function () {
    function b() {}

    b.value = new b();
    return b;
  }(),
      n = function () {
    function b(h, d) {
      this.value0 = h;
      this.value1 = d;
    }

    b.create = function (h) {
      return function (d) {
        return new b(h, d);
      };
    };

    return b;
  }(),
      r = function r(b) {
    return function (h) {
      if (b instanceof k) return h;
      if (h instanceof k) return b;
      if (b instanceof n) return new n(b.value0, e.snoc(b.value1)(h));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [b.constructor.name, h.constructor.name]);
    };
  },
      w = function w(b) {
    return function (h) {
      return function (d) {
        var q = function q(x) {
          return function (t) {
            return function (E) {
              for (var y = x, u = t, F = !1, C; !F;) {
                C = y;
                var N = u,
                    I = E;
                if (I instanceof g.Nil) F = !0, C = N;else {
                  if (I instanceof g.Cons) y = C, u = C(N)(I.value0), E = I.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [C.constructor.name, N.constructor.name, I.constructor.name]);
                  C = void 0;
                }
              }

              return C;
            };
          };
        };

        return function (x) {
          return function (t) {
            function E(C, N) {
              C = e.uncons(C);
              if (C instanceof f.Nothing) return u = !0, q(function (I) {
                return function (K) {
                  return K(I);
                };
              })(h)(N);
              if (C instanceof f.Just) y = C.value0.value1, t = new g.Cons(b(C.value0.value0), N);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [C.constructor.name]);
            }

            for (var y = x, u = !1, F; !u;) {
              F = E(y, t);
            }

            return F;
          };
        }(d)(g.Nil.value);
      };
    };
  };

  a = k.value;
  l = new l.Semigroup(r);
  c.empty = a;

  c.snoc = function (b) {
    return function (h) {
      return r(b)(new n(h, e.empty));
    };
  };

  c.uncons = function (b) {
    if (b instanceof k) return f.Nothing.value;

    if (b instanceof n) {
      var h = f.Just,
          d = p.Tuple,
          q = b.value0;
      b = e["null"](b.value1) ? k.value : w(r)(k.value)(b.value1);
      return new h(new d(q, b));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [b.constructor.name]);
  };

  c.semigroupCatList = l;
})(PS);

(function (a) {
  a["Control.Monad.Free"] = a["Control.Monad.Free"] || {};

  var c = a["Control.Monad.Free"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      f = a["Control.Bind"],
      l = a["Control.Monad"],
      p = a["Data.CatList"],
      k = a["Data.Either"],
      n = a["Data.Functor"],
      r = a["Data.Maybe"],
      w = a["Data.Semigroup"],
      b = a["Unsafe.Coerce"],
      h = function () {
    function C(N, I) {
      this.value0 = N;
      this.value1 = I;
    }

    C.create = function (N) {
      return function (I) {
        return new C(N, I);
      };
    };

    return C;
  }(),
      d = function () {
    function C(N) {
      this.value0 = N;
    }

    C.create = function (N) {
      return new C(N);
    };

    return C;
  }(),
      q = function () {
    function C(N, I) {
      this.value0 = N;
      this.value1 = I;
    }

    C.create = function (N) {
      return function (I) {
        return new C(N, I);
      };
    };

    return C;
  }(),
      x = function x(C) {
    function N(M) {
      var L = function L(V) {
        return function (J) {
          return new h(V.value0, w.append(p.semigroupCatList)(V.value1)(J));
        };
      };

      if (M.value0 instanceof d) {
        var U = p.uncons(M.value1);
        if (U instanceof r.Nothing) return I = !0, new d(M.value0.value0);

        if (U instanceof r.Just) {
          C = L((0, U.value0.value0)(M.value0.value0))(U.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [U.constructor.name]);
      }

      if (M.value0 instanceof q) return I = !0, new q(M.value0.value0, function (V) {
        return L(M.value0.value1(V))(M.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [M.value0.constructor.name]);
    }

    for (var I = !1, K; !I;) {
      K = N(C);
    }

    return K;
  },
      t = function t(C) {
    return function (N) {
      return function (I) {
        I = x(I);
        if (I instanceof d) return N(I.value0);
        if (I instanceof q) return C(I.value0)(I.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [I.constructor.name]);
      };
    };
  };

  a = new l.Monad(function () {
    return F;
  }, function () {
    return y;
  });
  var E = new n.Functor(function (C) {
    return function (N) {
      return f.bindFlipped(y)(function () {
        var I = e.pure(F);
        return function (K) {
          return I(C(K));
        };
      }())(N);
    };
  }),
      y = new f.Bind(function () {
    return u;
  }, function (C) {
    return function (N) {
      return new h(C.value0, p.snoc(C.value1)(N));
    };
  }),
      u = new g.Apply(function () {
    return E;
  }, l.ap(a)),
      F = new e.Applicative(function () {
    return u;
  }, function (C) {
    return new h(d.create(C), p.empty);
  });

  c.wrap = function (C) {
    return new h(new q(C, b.unsafeCoerce), p.empty);
  };

  c.liftF = function (C) {
    return new h(new q(C, function () {
      var N = e.pure(F);
      return function (I) {
        return N(I);
      };
    }()), p.empty);
  };

  c.resume = function (C) {
    return t(function (N) {
      return function (I) {
        return new k.Left(n.map(C)(I)(N));
      };
    })(k.Right.create);
  };

  c["resume'"] = t;
  c.freeFunctor = E;
  c.freeBind = y;
  c.freeApplicative = F;
  c.freeApply = u;
})(PS);

(function (a) {
  a["Control.MultiAlternative"] = a["Control.MultiAlternative"] || {};
  a = a["Control.MultiAlternative"];

  a.orr = function (c) {
    return c.orr;
  };

  a.MultiAlternative = function (c, e) {
    this.Plus0 = c;
    this.orr = e;
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
      e = a["Data.Array"],
      g = a["Data.Boolean"],
      f = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var l = a.unsafeCoerce,
      p = a.unsafeCoerce,
      k = a.unsafeCoerce;

  a = function (r) {
    var w = f.fromJust();
    return function (b) {
      return w(r(k(b)));
    };
  }(e.uncons);

  var n = function (r) {
    return function (w) {
      return r(k(w));
    };
  }(e.length);

  c.fromArray = function (r) {
    if (0 < e.length(r)) return new f.Just(p(r));
    if (g.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [r.constructor.name]);
  };

  c.toArray = k;

  c.singleton = function (r) {
    return p(e.singleton(r));
  };

  c.length = n;

  c["cons'"] = function (r) {
    return function (w) {
      return p(e.cons(r)(w));
    };
  };

  c.snoc = function (r) {
    return function (w) {
      return p(e.snoc(k(r))(w));
    };
  };

  c.uncons = a;

  c.updateAt = function (r) {
    return function (w) {
      var b = e.updateAt(r)(w);
      return function (h) {
        return l(b(k(h)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (c) {
    return function (e) {
      for (var g = e[0], f = e.length, l = 1; l < f; l++) {
        g = c(g)(e[l]);
      }

      return g;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (c) {
    return function (e) {
      for (var g = e.length, f = Array(g), l = 0; l < g; l++) {
        f[l] = c(l)(e[l]);
      }

      return f;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var c = a["Data.FunctorWithIndex"],
      e = a["Data.Functor"];
  a = new function (g, f) {
    this.Functor0 = g;
    this.mapWithIndex = f;
  }(function () {
    return e.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  c.mapWithIndex = function (g) {
    return g.mapWithIndex;
  };

  c.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var c = a["Data.FoldableWithIndex"],
      e = a["Data.Foldable"],
      g = a["Data.FunctorWithIndex"],
      f = a["Data.Monoid"],
      l = a["Data.Semigroup"],
      p = function () {
    function r(w, b) {
      this.value0 = w;
      this.value1 = b;
    }

    r.create = function (w) {
      return function (b) {
        return new r(w, b);
      };
    };

    return r;
  }(),
      k = function k(r) {
    return function (w) {
      return function (b) {
        return (0, r.foldrWithIndex)(function (h) {
          return function (d) {
            return function (q) {
              return l.append(w.Semigroup0())(b(h)(d))(q);
            };
          };
        })(f.mempty(w));
      };
    };
  },
      n = new function (r, w, b, h) {
    this.Foldable0 = r;
    this.foldMapWithIndex = w;
    this.foldlWithIndex = b;
    this.foldrWithIndex = h;
  }(function () {
    return e.foldableArray;
  }, function (r) {
    return k(n)(r);
  }, function (r) {
    return function (w) {
      var b = e.foldl(e.foldableArray)(function (d) {
        return function (q) {
          return r(q.value0)(d)(q.value1);
        };
      })(w),
          h = g.mapWithIndex(g.functorWithIndexArray)(p.create);
      return function (d) {
        return b(h(d));
      };
    };
  }, function (r) {
    return function (w) {
      var b = e.foldr(e.foldableArray)(function (d) {
        return function (q) {
          return r(d.value0)(d.value1)(q);
        };
      })(w),
          h = g.mapWithIndex(g.functorWithIndexArray)(p.create);
      return function (d) {
        return b(h(d));
      };
    };
  });

  c.foldlWithIndex = function (r) {
    return r.foldlWithIndex;
  };

  c.foldableWithIndexArray = n;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var c = a["Data.Semigroup.Foldable"],
      e = a["Data.Functor"];

  c.Foldable1 = function (g, f, l) {
    this.Foldable0 = g;
    this.fold1 = f;
    this.foldMap1 = l;
  };

  c.foldMap1 = function (g) {
    return g.foldMap1;
  };

  c.foldMap1Default = function (g) {
    return function (f) {
      return function (l) {
        return function (p) {
          var k = (0, g.fold1)(l),
              n = e.map(f)(p);
          return function (r) {
            return k(n(r));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Array.NonEmpty.Internal"] = a["Data.Array.NonEmpty.Internal"] || {};
  var c = a["Data.Array.NonEmpty.Internal"],
      e = a["Data.Array.NonEmpty.Internal"],
      g = a["Data.Semigroup"],
      f = a["Data.Semigroup.Foldable"],
      l = a["Data.Unfoldable1"].unfoldable1Array,
      p = a["Data.Traversable"].traversableArray,
      k = g.semigroupArray,
      n = a["Data.Functor"].functorArray,
      r = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      w = a["Data.Foldable"].foldableArray,
      b = new f.Foldable1(function () {
    return w;
  }, function (h) {
    return e.fold1Impl(g.append(h));
  }, function (h) {
    return f.foldMap1Default(b)(n)(h);
  });
  c.semigroupNonEmptyArray = k;
  c.functorNonEmptyArray = n;
  c.foldableNonEmptyArray = w;
  c.foldableWithIndexNonEmptyArray = r;
  c.foldable1NonEmptyArray = b;
  c.unfoldable1NonEmptyArray = l;
  c.traversableNonEmptyArray = p;
})(PS);

(function (a) {
  var c = function () {
    function e() {
      this.last = this.head = null;
      this.size = 0;
    }

    function g(r, w) {
      this.queue = r;
      this.value = w;
      this.prev = this.next = null;
    }

    function f(r) {
      this.draining = !1;
      this.error = null;
      this.value = r;
      this.takes = new e();
      this.reads = new e();
      this.puts = new e();
    }

    function l(r) {
      try {
        r();
      } catch (w) {
        setTimeout(function () {
          throw w;
        }, 0);
      }
    }

    function p(r) {
      switch (r.size) {
        case 0:
          return null;

        case 1:
          var w = r.head;
          r.head = null;
          break;

        case 2:
          w = r.last;
          r.head.next = null;
          r.last = null;
          break;

        default:
          w = r.last, r.last = w.prev, r.last.next = null;
      }

      w.prev = null;
      w.queue = null;
      r.size--;
      return w.value;
    }

    function k(r) {
      switch (r.size) {
        case 0:
          return null;

        case 1:
          var w = r.head;
          r.head = null;
          break;

        case 2:
          w = r.head;
          r.last.prev = null;
          r.head = r.last;
          r.last = null;
          break;

        default:
          w = r.head, r.head = w.next, r.head.prev = null;
      }

      w.next = null;
      w.queue = null;
      r.size--;
      return w.value;
    }

    var n = {};
    f.EMPTY = n;

    f.putLast = function (r, w) {
      w = new g(r, w);

      switch (r.size) {
        case 0:
          r.head = w;
          break;

        case 1:
          w.prev = r.head;
          r.head.next = w;
          r.last = w;
          break;

        default:
          w.prev = r.last, r.last.next = w, r.last = w;
      }

      r.size++;
      return w;
    };

    f.takeLast = p;
    f.takeHead = k;

    f.deleteCell = function (r) {
      null !== r.queue && (r.queue.last === r ? p(r.queue) : r.queue.head === r ? k(r.queue) : (r.prev && (r.prev.next = r.next), r.next && (r.next.prev = r.prev), r.queue.size--, r.queue = null, r.value = null, r.next = null, r.prev = null));
    };

    f.drainVar = function (r, w) {
      if (!w.draining) {
        var b = w.puts,
            h = w.takes,
            d = w.reads,
            q,
            x;

        for (w.draining = !0;;) {
          var t = q = null;
          var E = w.value;
          var y = d.size;

          if (null !== w.error) {
            for (E = r.left(w.error); q = k(b);) {
              l(q.cb(E));
            }

            for (; t = k(d);) {
              l(t(E));
            }

            for (; x = k(h);) {
              l(x(E));
            }

            break;
          }

          E === n && (q = k(b)) && (w.value = E = q.value);

          if (E !== n) {
            for (x = k(h); y-- && (t = k(d));) {
              l(t(r.right(E)));
            }

            null !== x && (w.value = n, l(x(r.right(E))));
          }

          null !== q && l(q.cb(r.right(void 0)));
          if (w.value === n && 0 === b.size || w.value !== n && 0 === h.size) break;
        }

        w.draining = !1;
      }
    };

    return f;
  }();

  a.empty = function () {
    return new c(c.EMPTY);
  };

  a._takeVar = function (e, g, f) {
    return function () {
      var l = c.putLast(g.takes, f);
      c.drainVar(e, g);
      return function () {
        c.deleteCell(l);
      };
    };
  };

  a._tryPutVar = function (e, g, f) {
    return function () {
      return f.value === c.EMPTY && null === f.error ? (f.value = g, c.drainVar(e, f), !0) : !1;
    };
  };

  a._tryTakeVar = function (e, g) {
    return function () {
      var f = g.value;
      if (f === c.EMPTY) return e.nothing;
      g.value = c.EMPTY;
      c.drainVar(e, g);
      return e.just(f);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var c = a["Effect.AVar"],
      e = a["Effect.AVar"],
      g = a["Data.Either"];
  a = a["Data.Maybe"];

  var f = function () {
    function n(r) {
      this.value0 = r;
    }

    n.create = function (r) {
      return new n(r);
    };

    return n;
  }(),
      l = function () {
    function n(r) {
      this.value0 = r;
    }

    n.create = function (r) {
      return new n(r);
    };

    return n;
  }(),
      p = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      k = {
    left: g.Left.create,
    right: g.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: f.create,
    filled: l.create,
    empty: p.value
  };

  c.take = function (n) {
    return function (r) {
      return e._takeVar(k, n, r);
    };
  };

  c.tryTake = function (n) {
    return e._tryTakeVar(k, n);
  };

  c.tryPut = function (n) {
    return function (r) {
      return e._tryPutVar(k, n, r);
    };
  };

  c.empty = e.empty;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var c = a["Effect.AVar"],
      e = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (g) {
    return e.makeAff(function (f) {
      return function () {
        var l = c.take(g)(f)();
        return e.effectCanceler(l);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var c = a["Effect.Aff.Class"],
      e = a["Control.Category"],
      g = a["Effect.Aff"];

  a = function a(f, l) {
    this.MonadEffect0 = f;
    this.liftAff = l;
  };

  e = new a(function () {
    return g.monadEffectAff;
  }, e.identity(e.categoryFn));

  c.liftAff = function (f) {
    return f.liftAff;
  };

  c.MonadAff = a;
  c.monadAffAff = e;
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
      e = a["Control.Alt"],
      g = a["Control.Alternative"],
      f = a["Control.Applicative"],
      l = a["Control.Bind"],
      p = a["Control.Category"],
      k = a["Control.Monad"],
      n = a["Control.Monad.Free"],
      r = a["Control.MultiAlternative"],
      w = a["Control.Parallel.Class"],
      b = a["Control.Plus"],
      h = a["Data.Array.NonEmpty"],
      d = a["Data.Array.NonEmpty.Internal"],
      q = a["Data.Either"],
      x = a["Data.FoldableWithIndex"],
      t = a["Data.Functor"],
      E = a["Data.Maybe"],
      y = a["Data.Monoid"],
      u = a["Data.Semigroup"],
      F = a["Data.Semigroup.Foldable"],
      C = a["Data.Show"],
      N = a["Data.Tuple"],
      I = a.Effect,
      K = a["Effect.AVar"],
      M = a["Effect.Aff"],
      L = a["Effect.Aff.AVar"],
      U = a["Effect.Aff.Class"],
      V = a["Effect.Class"],
      J = a["Effect.Console"],
      v = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (na) {
    return na(p.identity(p.categoryFn));
  });

  var D = n.freeFunctor,
      O = n.freeBind,
      B = n.freeApply,
      G = n.freeApplicative,
      P = new k.Monad(function () {
    return G;
  }, function () {
    return O;
  }),
      Y = function Y(na) {
    return na;
  },
      pa = function pa(na) {
    return n["resume'"](function (ua) {
      return function (qa) {
        return new q.Right(t.map(na)(qa)(ua));
      };
    })(q.Left.create);
  },
      va = new t.Functor(function (na) {
    return function (ua) {
      if (ua instanceof q.Right) ua = new q.Right({
        cont: t.map(M.functorAff)(na)(ua.value0.cont),
        view: ua.value0.view
      });else if (ua instanceof q.Left) ua = new q.Left(t.map(I.functorEffect)(na)(ua.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [ua.constructor.name]);
      return ua;
    };
  }),
      z = function z(na) {
    return n.liftF(q.Left.create(na));
  },
      ya = function ya(na) {
    return new V.MonadEffect(function () {
      return P;
    }, z);
  },
      X = function X(na) {
    return n.liftF(new q.Right({
      view: na,
      cont: M.never
    }));
  },
      ka = function ka(na) {
    return new u.Semigroup(function (ua) {
      return function (qa) {
        return r.orr(R(na))([ua, qa]);
      };
    });
  },
      Aa = function Aa(na) {
    return new b.Plus(function () {
      return ia(na);
    }, X(y.mempty(na)));
  },
      R = function R(na) {
    return new r.MultiAlternative(function () {
      return Aa(na);
    }, function (ua) {
      var qa = function qa(da) {
        return function (H) {
          return function (aa) {
            var sa = t.map(d.functorNonEmptyArray)(function (ha) {
              return n.wrap(q.Right.create(ha));
            })(H);
            return l.bind(M.bindAff)(w.sequential(M.parallelAff)(x.foldlWithIndex(d.foldableWithIndexNonEmptyArray)(function (ha) {
              return function (Ea) {
                return function (Pa) {
                  return e.alt(M.altParAff)(w.parallel(M.parallelAff)(t.map(M.functorAff)(N.Tuple.create(ha))(Pa)))(Ea);
                };
              };
            })(b.empty(M.plusParAff))(aa)))(function (ha) {
              return f.pure(M.applicativeAff)(ma(da)(E.fromMaybe(sa)(h.updateAt(ha.value0)(ha.value1)(sa))));
            });
          };
        };
      },
          Ba = function Ba(da) {
        return function (H) {
          return n.wrap(new q.Right({
            view: F.foldMap1(d.foldable1NonEmptyArray)(da.Semigroup0())(function (aa) {
              return aa.view;
            })(H),
            cont: qa(da)(H)(t.map(d.functorNonEmptyArray)(function (aa) {
              return aa.cont;
            })(H))
          }));
        };
      },
          Ha = function Ha(da) {
        return function (H) {
          return function (aa) {
            var sa = h.uncons(aa),
                ha = pa(va)(sa.head);
            if (ha instanceof q.Left) return f.pure(n.freeApplicative)(ha.value0);

            if (ha instanceof q.Right) {
              if (ha.value0 instanceof q.Left) return n.wrap(new q.Left(function () {
                var Ea = ha.value0.value0();
                return Ha(da)(H)(h["cons'"](Ea)(sa.tail));
              }));
              if (ha.value0 instanceof q.Right) return ea(da)(h.snoc(H)(ha.value0.value0))(sa.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [ha.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [ha.constructor.name]);
          };
        };
      },
          ea = function ea(da) {
        return function (H) {
          return function (aa) {
            aa = h.fromArray(aa);
            if (aa instanceof E.Nothing) return Ba(da)(H);
            if (aa instanceof E.Just) return Ha(da)(H)(aa.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [aa.constructor.name]);
          };
        };
      },
          ma = function ma(da) {
        return function (H) {
          var aa = h.uncons(H),
              sa = pa(va)(aa.head);
          if (sa instanceof q.Left) return f.pure(n.freeApplicative)(sa.value0);

          if (sa instanceof q.Right) {
            if (sa.value0 instanceof q.Left) return n.wrap(new q.Left(function () {
              var ha = sa.value0.value0();
              return ma(da)(h["cons'"](ha)(aa.tail));
            }));
            if (sa.value0 instanceof q.Right) return ea(da)(h.singleton(sa.value0.value0))(aa.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [sa.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [sa.constructor.name]);
        };
      };

      ua = h.fromArray(ua);
      if (ua instanceof E.Just) return ma(na)(t.map(d.functorNonEmptyArray)(Y)(ua.value0));
      if (ua instanceof E.Nothing) return b.empty(Aa(na));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [ua.constructor.name]);
    });
  },
      ia = function ia(na) {
    return new e.Alt(function () {
      return D;
    }, u.append(ka(na)));
  },
      Da = function Da(na) {
    return function (ua) {
      var qa = function qa(Ba) {
        return function (Ha) {
          if (Ha instanceof q.Left) return J.log("Aff failed - " + C.show(v.showError)(Ha.value0));
          if (Ha instanceof q.Right) return t["void"](I.functorEffect)(K.tryPut(Ha.value0)(Ba));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [Ba.constructor.name, Ha.constructor.name]);
        };
      };

      return n.wrap(new q.Left(function () {
        var Ba = K.empty();
        M.runAff_(qa(Ba))(ua)();
        var Ha = K.tryTake(Ba)();
        if (Ha instanceof E.Just) return f.pure(n.freeApplicative)(Ha.value0);
        if (Ha instanceof E.Nothing) return n.liftF(new q.Right({
          view: na,
          cont: L.take(Ba)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [Ha.constructor.name]);
      }));
    };
  };

  c.WidgetStep = function (na) {
    return na;
  };

  c.Widget = function (na) {
    return na;
  };

  c.unWidget = Y;
  c.resume = pa;
  c.display = X;
  c.functorWidgetStep = va;
  c.widgetFunctor = D;
  c.widgetBind = O;
  c.widgetApplicative = G;
  c.widgetApply = B;
  c.widgetShiftMap = a;
  c.widgetMultiAlternative = R;

  c.widgetMonoid = function (na) {
    return new y.Monoid(function () {
      return ka(na);
    }, b.empty(Aa(na)));
  };

  c.widgetAlt = ia;
  c.widgetPlus = Aa;

  c.widgetAlternative = function (na) {
    return new g.Alternative(function () {
      return G;
    }, function () {
      return Aa(na);
    });
  };

  c.widgetMonadEff = ya;

  c.widgetMonadAff = function (na) {
    return new U.MonadAff(function () {
      return ya(na);
    }, Da(y.mempty(na)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var c = a["Concur.Core"],
      e = a["Concur.Core.Types"],
      g = a["Control.Alt"],
      f = a["Control.Applicative"],
      l = a["Control.Monad.Free"],
      p = a["Control.Parallel.Class"],
      k = a["Data.Either"],
      n = a["Data.Functor"],
      r = a.Effect,
      w = a["Effect.AVar"],
      b = a["Effect.Aff"],
      h = a["Effect.Aff.AVar"],
      d = a["Effect.Aff.Class"],
      q = function q(x) {
    return function (t) {
      var E = e.resume(e.functorWidgetStep)(t);
      if (E instanceof k.Left) return f.pure(l.freeApplicative)(E.value0);

      if (E instanceof k.Right) {
        if (E.value0 instanceof k.Left) return l.wrap(e.WidgetStep(new k.Left(function () {
          var y = E.value0.value0();
          return q(x)(y);
        })));
        if (E.value0 instanceof k.Right) return l.wrap(e.WidgetStep(new k.Left(function () {
          var y = w.empty(),
              u = p.sequential(b.parallelAff)(g.alt(b.altParAff)(p.parallel(b.parallelAff)(d.liftAff(d.monadAffAff)(h.take(y))))(p.parallel(b.parallelAff)(n.map(b.functorAff)(q(x))(E.value0.value0.cont))));
          return l.wrap(e.WidgetStep(new k.Right({
            view: x(function (F) {
              return n["void"](r.functorEffect)(w.tryPut(f.pure(l.freeApplicative)(F))(y));
            })(E.value0.value0.view),
            cont: u
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [E.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [E.constructor.name]);
    };
  };

  c.mkLeafWidget = function (x) {
    return e.Widget(l.wrap(e.WidgetStep(new k.Left(function () {
      var t = w.empty();
      return l.wrap(e.WidgetStep(new k.Right({
        view: x(function (E) {
          return n["void"](r.functorEffect)(w.tryPut(f.pure(l.freeApplicative)(E))(t));
        }),
        cont: d.liftAff(d.monadAffAff)(h.take(t))
      })));
    }))));
  };

  c.mkNodeWidget = function (x) {
    return function (t) {
      return q(x)(t);
    };
  };
})(PS);

(function (a) {
  a["Concur.Core.LiftWidget"] = a["Concur.Core.LiftWidget"] || {};
  var c = a["Concur.Core.LiftWidget"];
  a = a["Control.Category"];
  a = new function (e) {
    this.liftWidget = e;
  }(a.identity(a.categoryFn));

  c.liftWidget = function (e) {
    return e.liftWidget;
  };

  c.widgetLiftWidget = a;
})(PS);

(function (a) {
  a["Concur.Core.Props"] = a["Concur.Core.Props"] || {};
  var c = a["Concur.Core.Props"];
  a = a["Data.Functor"];

  var e = function () {
    function f(l) {
      this.value0 = l;
    }

    f.create = function (l) {
      return new f(l);
    };

    return f;
  }(),
      g = function () {
    function f(l) {
      this.value0 = l;
    }

    f.create = function (l) {
      return new f(l);
    };

    return f;
  }();

  a = new a.Functor(function (f) {
    return function (l) {
      if (l instanceof e) return new e(l.value0);
      if (l instanceof g) return new g(function (p) {
        return l.value0(function (k) {
          return p(f(k));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [f.constructor.name, l.constructor.name]);
    };
  });
  c.PrimProp = e;
  c.Handler = g;

  c.mkProp = function (f) {
    return function (l) {
      if (l instanceof e) return l.value0;
      if (l instanceof g) return l.value0(f);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [f.constructor.name, l.constructor.name]);
    };
  };

  c.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var c = a["Concur.Core.DOM"],
      e = a["Concur.Core"],
      g = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Props"],
      l = a["Control.MultiAlternative"],
      p = a["Control.ShiftMap"],
      k = a["Data.Functor"],
      n = function n(r) {
    return function (w) {
      return function (b) {
        return function (h) {
          return p.shiftMap(r)(function (d) {
            return function (q) {
              return e.mkNodeWidget(function (x) {
                return function (t) {
                  return b(k.map(w)(function () {
                    var E = f.mkProp(x),
                        y = k.map(f.functorProps)(d);
                    return function (u) {
                      return E(y(u));
                    };
                  }())(h))(t);
                };
              })(q);
            };
          });
        };
      };
    };
  };

  c.el = n;

  c.elLeaf = function (r) {
    return function (w) {
      return function (b) {
        return function (h) {
          return g.liftWidget(r)(e.mkLeafWidget(function (d) {
            return b(k.map(w)(f.mkProp(d))(h));
          }));
        };
      };
    };
  };

  c["el'"] = function (r) {
    return function (w) {
      return function (b) {
        return function (h) {
          return function (d) {
            var q = n(r)(b)(h)(d),
                x = l.orr(w);
            return function (t) {
              return q(x(t));
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
      e = a["Concur.Core.Types"],
      g = a["Control.Applicative"],
      f = a["Control.Monad.Free"],
      l = a["Data.Either"],
      p = a["Data.Functor"],
      k = a["Data.Monoid"],
      n = a["Data.Tuple"],
      r = a.Effect,
      w = a["Effect.Aff"],
      b = function b(d) {
    return function (q) {
      var x = f.resume(e.functorWidgetStep)(e.unWidget(q));
      if (x instanceof l.Right) return g.pure(r.applicativeEffect)(new n.Tuple(q, k.mempty(d)));

      if (x instanceof l.Left) {
        if (x.value0 instanceof l.Left) return function () {
          var t = x.value0.value0();
          return b(d)(t)();
        };
        if (x.value0 instanceof l.Right) return g.pure(r.applicativeEffect)(new n.Tuple(f.wrap(new l.Right(x.value0.value0)), x.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [x.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [x.constructor.name]);
    };
  },
      h = function h(d) {
    return function (q) {
      return function (x) {
        var t = f.resume(e.functorWidgetStep)(x);
        if (t instanceof l.Right) return g.pure(r.applicativeEffect)(k.mempty(d));

        if (t instanceof l.Left) {
          if (t.value0 instanceof l.Left) return function () {
            var E = t.value0.value0();
            return h(d)(q)(E)();
          };
          if (t.value0 instanceof l.Right) return function () {
            w.runAff_(function () {
              var E = p.map(l.functorEither)(e.Widget);
              return function (y) {
                return q(E(y));
              };
            }())(t.value0.value0.cont)();
            return t.value0.value0.view;
          };
          throw Error("Failed pattern match at Concur.Core.Discharge (line 26, column 28 - line 32, column 19): " + [t.value0.constructor.name]);
        }

        throw Error("Failed pattern match at Concur.Core.Discharge (line 24, column 32 - line 32, column 19): " + [t.constructor.name]);
      };
    };
  };

  c.discharge = h;
  c.dischargePartialEffect = b;
})(PS);

(function (a) {
  a["Control.Comonad"] = a["Control.Comonad"] || {};
  a = a["Control.Comonad"];

  a.Comonad = function (c, e) {
    this.Extend0 = c;
    this.extract = e;
  };

  a.extract = function (c) {
    return c.extract;
  };
})(PS);

(function (a) {
  a["Control.Extend"] = a["Control.Extend"] || {};

  a["Control.Extend"].Extend = function (c, e) {
    this.Functor0 = c;
    this.extend = e;
  };
})(PS);

(function (a) {
  a.defer = function (c) {
    var e = null;
    return function () {
      if (void 0 === c) return e;
      e = c();
      c = void 0;
      return e;
    };
  };

  a.force = function (c) {
    return c();
  };
})(PS["Data.Lazy"] = PS["Data.Lazy"] || {});

(function (a) {
  a["Data.Lazy"] = a["Data.Lazy"] || {};
  var c = a["Data.Lazy"],
      e = a["Data.Lazy"];
  a = new a["Data.Functor"].Functor(function (g) {
    return function (f) {
      return e.defer(function (l) {
        return g(e.force(f));
      });
    };
  });
  c.functorLazy = a;
  c.defer = e.defer;
  c.force = e.force;
})(PS);

(function (a) {
  a["Control.Cofree"] = a["Control.Cofree"] || {};

  var c = a["Control.Cofree"],
      e = a["Concur.Core.Types"],
      g = a["Control.Alt"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      p = a["Control.Bind"],
      k = a["Control.Comonad"],
      n = a["Control.Extend"],
      r = a["Control.Monad"],
      w = a["Control.Plus"],
      b = a["Control.ShiftMap"],
      h = a["Data.Functor"],
      d = a["Data.Lazy"],
      q = a["Data.Tuple"],
      x = function x(K) {
    return q.snd(d.force(K));
  },
      t = function t(K) {
    return function (M) {
      return d.defer(function (L) {
        return new q.Tuple(K, M);
      });
    };
  },
      E = function E(K) {
    return q.fst(d.force(K));
  },
      y = function y(K) {
    return new h.Functor(function (M) {
      var L = function L(U) {
        return h.map(d.functorLazy)(function (V) {
          return new q.Tuple(M(V.value0), h.map(K)(L)(V.value1));
        })(U);
      };

      return L;
    });
  },
      u = function u(K) {
    return new n.Extend(function () {
      return y(K);
    }, function (M) {
      var L = function L(U) {
        return h.map(d.functorLazy)(function (V) {
          return new q.Tuple(M(U), h.map(K)(L)(V.value1));
        })(U);
      };

      return L;
    });
  },
      F = function F(K) {
    return new r.Monad(function () {
      return I(K);
    }, function () {
      return C(K);
    });
  },
      C = function C(K) {
    return new p.Bind(function () {
      return N(K);
    }, function (M) {
      return function (L) {
        var U = function U(J) {
          return function (v) {
            var D = h.map(K.Plus1().Alt0().Functor0())(U(J))(x(v)),
                O = h.map(K.Plus1().Alt0().Functor0())(V)(x(J));
            return t(E(v))(g.alt(K.Plus1().Alt0())(O)(D));
          };
        },
            V = function V(J) {
          return U(J)(L(E(J)));
        };

        return V(M);
      };
    });
  },
      N = function N(K) {
    return new l.Apply(function () {
      return y(K.Plus1().Alt0().Functor0());
    }, r.ap(F(K)));
  },
      I = function I(K) {
    return new f.Applicative(function () {
      return N(K);
    }, function (M) {
      return t(M)(w.empty(K.Plus1()));
    });
  };

  c.mkCofree = t;
  c.tail = x;

  c.comonadCofree = function (K) {
    return new k.Comonad(function () {
      return u(K);
    }, E);
  };

  c.applicativeCofree = I;
  c.bindCofree = C;

  c.shiftMapCofree = function (K) {
    return new b.ShiftMap(function (M) {
      return function (L) {
        return d.defer(function (U) {
          U = d.force(L);
          return new q.Tuple(U.value0, M(f.pure(I(e.widgetAlternative(K))))(U.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var c = a["Concur.Core.FRP"],
      e = a["Concur.Core.Types"],
      g = a["Control.Alt"],
      f = a["Control.Applicative"],
      l = a["Control.Bind"],
      p = a["Control.Cofree"],
      k = a["Control.Comonad"],
      n = a["Data.Functor"],
      r = a["Data.Maybe"],
      w = a["Data.Unit"],
      b = a["Effect.Aff"],
      h = a["Effect.Aff.Class"],
      d = p.tail,
      q = p.mkCofree,
      x = function x(y) {
    return function (u) {
      return q(y)(n.map(e.widgetFunctor)(function (F) {
        return x(F)(u);
      })(u(y)));
    };
  },
      t = function t(y) {
    return function (u) {
      return function (F) {
        var C = F(u);
        return q(k.extract(p.comonadCofree(e.widgetFunctor))(C))(l.bind(e.widgetBind)(d(C))(function (N) {
          return f.pure(e.widgetApplicative)(t(y)(k.extract(p.comonadCofree(e.widgetFunctor))(N))(F));
        }));
      };
    };
  },
      E = function E(y) {
    return l.bind(e.widgetBind)(d(y))(E);
  };

  c.step = q;

  c.display = function (y) {
    return q(w.unit)(y);
  };

  c.loopW = x;
  c.loopS = t;
  c.dyn = E;

  c.debounce = function (y) {
    return function (u) {
      return function (F) {
        return function (C) {
          var N = function N(K) {
            return function (M) {
              return l.bind(e.widgetBind)(g.alt(e.widgetAlt(y))(n.map(e.widgetFunctor)(r.Just.create)(M(K)))(n.voidRight(e.widgetFunctor)(r.Nothing.value)(h.liftAff(e.widgetMonadAff(y))(b.delay(u)))))(function (L) {
                if (L instanceof r.Nothing) return f.pure(e.widgetApplicative)(I(K)(M));
                if (L instanceof r.Just) return N(L.value0)(M);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [L.constructor.name]);
              });
            };
          },
              I = function I(K) {
            return function (M) {
              return q(K)(l.bind(e.widgetBind)(M(K))(function (L) {
                return N(L)(M);
              }));
            };
          };

          return I(F)(C);
        };
      };
    };
  };
})(PS);

(function (a) {
  function c(f) {
    return function (l) {
      return function (p) {
        return e.createElement.apply(e, [f, l].concat(p));
      };
    };
  }

  var e = require("react"),
      g = function (f) {
    function l(p, k, n) {
      switch (k) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          p[k] = n;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          p[k] = function (r, w) {
            return n(r)(w)();
          };

          break;

        case "componentDidUpdate":
          p[k] = function (r, w, b) {
            return n(r)(w)(b)();
          };

          break;

        case "unsafeComponentWillMount":
          p.UNSAFE_componentWillMount = n;
          break;

        case "unsafeComponentWillReceiveProps":
          p.UNSAFE_componentWillReceiveProps = function (r) {
            return n(r)();
          };

          break;

        case "unsafeComponentWillUpdate":
          p.UNSAFE_componentWillUpdate = function (r, w) {
            return n(r)(w)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + k);
      }
    }

    return function (p) {
      return function (k) {
        var n = function n(r) {
          f.call(this, r);
          r = k(this)();

          for (var w in r) {
            l(this, w, r[w]);
          }
        };

        n.displayName = p;
        n.prototype = Object.create(f.prototype);
        return n.prototype.constructor = n;
      };
    };
  }(e.Component);

  a.componentImpl = g;
  a.fragment = e.Fragment;

  a.setStateImpl = function (f) {
    return function (l) {
      return function () {
        f.setState(l);
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
    return function (l) {
      return e.createElement(f, l);
    };
  };

  a.createElementTagNameDynamic = function (f) {
    return function (l) {
      return function (p) {
        return e.createElement(f, l, p);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var c = a.React,
      e = a.React;
  a = e.setStateImpl;
  var g = new function (f) {
    this.toElement = f;
  }((0, e.createElementImpl)(e.fragment)({}));

  c.component = function (f) {
    return e.componentImpl;
  };

  c.writeState = a;

  c.createLeafElement = function (f) {
    return e.createLeafElementImpl;
  };

  c.toElement = function (f) {
    return f.toElement;
  };

  c.isReactElementArray = g;
  c.getState = e.getState;
  c.createElementTagName = e.createElementTagName;
  c.createElementTagNameDynamic = e.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var c = a["Concur.React"],
      e = a["Concur.Core.Discharge"],
      g = a["Control.Apply"],
      f = a["Data.Either"],
      l = a["Data.Functor"],
      p = a["Data.Monoid"],
      k = a["Data.Show"],
      n = a["Data.Unit"],
      r = a.Effect,
      w = a["Effect.Console"],
      b = a["Effect.Exception"],
      h = a.React,
      d = function (q) {
    return function (x) {
      var t = function t(y) {
        return h.toElement(h.isReactElementArray)(y.view);
      },
          E = function E(y) {
        return function (u) {
          if (u instanceof f.Right) return function () {
            var F = e.discharge(p.monoidArray)(E(y))(u.value0)();
            return l["void"](r.functorEffect)(h.writeState(y)({
              view: F
            }))();
          };
          if (u instanceof f.Left) return function () {
            w.log("FAILED! " + k.show(b.showError)(u.value0))();
            return n.unit;
          };
          throw Error("Failed pattern match at Concur.React (line 32, column 5 - line 34, column 52): " + [y.constructor.name, u.constructor.name]);
        };
      };

      return h.component()("Concur")(function (y) {
        return function () {
          var u = e.dischargePartialEffect(p.monoidArray)(x)();
          return {
            state: {
              view: u.value1
            },
            render: l.map(r.functorEffect)(t)(h.getState(y)),
            componentDidMount: g.applySecond(r.applyEffect)(q)(E(y)(new f.Right(u.value0)))
          };
        };
      });
    };
  }(p.mempty(r.monoidEffect(p.monoidUnit)));

  c.renderComponent = function (q) {
    return h.createLeafElement()(d(q))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (c) {
    return function (e) {
      var g = {};
      g[c] = e;
      return g;
    };
  };

  a.unsafeUnfoldProps = function (c) {
    return function (e) {
      var g = {},
          f = {};
      f[c] = g;

      for (var l in e) {
        e.hasOwnProperty(l) && (g[l] = e[l]);
      }

      return f;
    };
  };

  a.unsafeFromPropsArray = function (c) {
    for (var e = {}, g = 0, f = c.length; g < f; g++) {
      var l = c[g],
          p;

      for (p in l) {
        l.hasOwnProperty(p) && (e[p] = l[p]);
      }
    }

    return e;
  };
})(PS["React.DOM.Props"] = PS["React.DOM.Props"] || {});

(function (a) {
  a.mkEffectFn1 = function (c) {
    return function (e) {
      return c(e)();
    };
  };

  a.runEffectFn1 = function (c) {
    return function (e) {
      return function () {
        return c(e);
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
      e = a["React.DOM.Props"],
      g = a["Effect.Uncurried"];
  a = e.unsafeMkProps("value");
  var f = e.unsafeMkProps("target"),
      l = e.unsafeUnfoldProps("style"),
      p = e.unsafeMkProps("placeholder"),
      k = e.unsafeMkProps("href"),
      n = e.unsafeMkProps("disabled"),
      r = e.unsafeMkProps("defaultValue"),
      w = e.unsafeMkProps("className"),
      b = e.unsafeMkProps("checked"),
      h = e.unsafeMkProps("type"),
      d = e.unsafeMkProps("id");
  c.style = l;
  c.checked = b;
  c.className = w;
  c.defaultValue = r;
  c.disabled = n;
  c.href = k;
  c._id = d;
  c.placeholder = p;
  c.target = f;
  c._type = h;
  c.value = a;

  c.onChange = function (q) {
    return e.unsafeMkProps("onChange")(g.mkEffectFn1(q));
  };

  c.onClick = function (q) {
    return e.unsafeMkProps("onClick")(g.mkEffectFn1(q));
  };

  c.unsafeFromPropsArray = e.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var c = a["React.DOM"],
      e = a.React,
      g = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var f = function f(t) {
    return function (E) {
      return function (y) {
        if (t) {
          if (t) var u = e.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [t.constructor.name]);
        } else u = e.createElementTagName;
        return u(E)(g.unsafeFromPropsArray(y));
      };
    };
  },
      l = f(!1)("nav"),
      p = f(!1)("option"),
      k = f(!1)("select"),
      n = f(!1)("span"),
      r = f(!1)("ul"),
      w = f(!1)("li"),
      b = f(!1)("div"),
      h = f(!1)("code"),
      d = f(!1)("cite"),
      q = f(!1)("button"),
      x = f(!1)("a");

  c.text = a;
  c.a = x;

  c.br = function (t) {
    return f(!1)("br")(t)([]);
  };

  c.button = q;
  c.cite = d;
  c.code = h;
  c.div = b;

  c.input = function (t) {
    return f(!1)("input")(t)([]);
  };

  c.li = w;
  c.nav = l;
  c.option = p;
  c.select = k;
  c.span = n;
  c.ul = r;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var c = a["Concur.React.DOM"],
      e = a["Concur.Core.DOM"],
      g = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Types"],
      l = a["Data.Functor"],
      p = a["React.DOM"],
      k = function k(t) {
    return function (E) {
      return function (y) {
        return [t(E)(y)];
      };
    };
  },
      n = function n(t) {
    return function (E) {
      return e.elLeaf(t)(l.functorArray)(function (y) {
        return [E(y)];
      });
    };
  },
      r = function r(t) {
    return function (E) {
      return function (y) {
        return e["el'"](t)(E)(l.functorArray)(k(y));
      };
    };
  },
      w = function w(t) {
    return function (E) {
      return r(E)(t)(p.li);
    };
  },
      b = function b(t) {
    return function (E) {
      return r(E)(t)(p.span);
    };
  },
      h = function h(t) {
    return function (E) {
      return e.el(t)(l.functorArray)(k(E));
    };
  },
      d = function d(t) {
    return function (E) {
      return r(E)(t)(p.div);
    };
  },
      q = function q(t) {
    return function (E) {
      return r(E)(t)(p.code);
    };
  },
      x = function x(t) {
    return function (E) {
      return r(E)(t)(p.cite);
    };
  };

  c.text = function (t) {
    return function (E) {
      return g.liftWidget(t)(f.display([p.text(E)]));
    };
  };

  c.a = function (t) {
    return function (E) {
      return r(E)(t)(p.a);
    };
  };

  c["br'"] = function (t) {
    return n(t)(p.br)([]);
  };

  c.button_ = function (t) {
    return h(t)(p.button);
  };

  c.button = function (t) {
    return function (E) {
      return r(E)(t)(p.button);
    };
  };

  c["cite'"] = function (t) {
    return function (E) {
      return x(t)(E)([]);
    };
  };

  c["code'"] = function (t) {
    return function (E) {
      return q(t)(E)([]);
    };
  };

  c.div_ = function (t) {
    return h(t)(p.div);
  };

  c.div = d;

  c["div'"] = function (t) {
    return function (E) {
      return d(t)(E)([]);
    };
  };

  c.input = function (t) {
    return n(t)(p.input);
  };

  c.li_ = function (t) {
    return h(t)(p.li);
  };

  c.li = w;

  c["li'"] = function (t) {
    return function (E) {
      return w(t)(E)([]);
    };
  };

  c.nav = function (t) {
    return function (E) {
      return r(E)(t)(p.nav);
    };
  };

  c.option = function (t) {
    return function (E) {
      return r(E)(t)(p.option);
    };
  };

  c.select = function (t) {
    return function (E) {
      return r(E)(t)(p.select);
    };
  };

  c.span_ = function (t) {
    return h(t)(p.span);
  };

  c.span = b;

  c["span'"] = function (t) {
    return function (E) {
      return b(t)(E)([]);
    };
  };

  c.ul_ = function (t) {
    return h(t)(p.ul);
  };

  c.ul = function (t) {
    return function (E) {
      return r(E)(t)(p.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var c = a["Concur.React.Props"],
      e = a["Concur.Core.Props"],
      g = a["Data.Array"],
      f = a["Data.Foldable"],
      l = a["Data.Maybe"],
      p = a["Data.Monoid"],
      k = a["React.DOM.Props"];
  a = new e.Handler(k.onClick);

  var n = new e.Handler(k.onChange),
      r = function r(b) {
    return e.PrimProp.create(k.className(b));
  },
      w = function () {
    var b = f.intercalate(f.foldableArray)(p.monoidString)(" "),
        h = g.concatMap(l.maybe([])(function (d) {
      return [d];
    }));
    return function (d) {
      return r(b(h(d)));
    };
  }();

  c.classList = w;

  c.unsafeTargetValue = function (b) {
    return b.target.value;
  };

  c.style = function (b) {
    return e.PrimProp.create(k.style(b));
  };

  c.checked = function (b) {
    return e.PrimProp.create(k.checked(b));
  };

  c.className = r;

  c.defaultValue = function (b) {
    return e.PrimProp.create(k.defaultValue(b));
  };

  c.disabled = function (b) {
    return e.PrimProp.create(k.disabled(b));
  };

  c.href = function (b) {
    return e.PrimProp.create(k.href(b));
  };

  c._id = function (b) {
    return e.PrimProp.create(k._id(b));
  };

  c.placeholder = function (b) {
    return e.PrimProp.create(k.placeholder(b));
  };

  c._type = function (b) {
    return e.PrimProp.create(k._type(b));
  };

  c.value = function (b) {
    return e.PrimProp.create(k.value(b));
  };

  c.onChange = n;
  c.onClick = a;
})(PS);

(function (a) {
  var c = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (e, g) {
    return c.render(e, g);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var c = a.ReactDOM,
      e = a["Data.Functor"],
      g = a["Data.Nullable"],
      f = a.Effect;

  a.ReactDOM.render = function (l) {
    return function (p) {
      return e.map(f.functorEffect)(g.toMaybe)(function () {
        return c.renderImpl(l, p);
      });
    };
  };
})(PS);

(function (a) {
  a._getElementById = function (c) {
    return function (e) {
      return function () {
        return e.getElementById(c);
      };
    };
  };
})(PS["Web.DOM.NonElementParentNode"] = PS["Web.DOM.NonElementParentNode"] || {});

(function (a) {
  a["Web.DOM.NonElementParentNode"] = a["Web.DOM.NonElementParentNode"] || {};
  var c = a["Web.DOM.NonElementParentNode"],
      e = a["Data.Functor"],
      g = a["Data.Nullable"],
      f = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (l) {
    var p = e.map(f.functorEffect)(g.toMaybe),
        k = c._getElementById(l);

    return function (n) {
      return p(k(n));
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
  var e = a.unsafeCoerce;
  c.toDocument = a.unsafeCoerce;
  c.toNonElementParentNode = e;
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
      e = a["Data.Functor"],
      g = a["Data.Maybe"],
      f = a["Data.Unit"],
      l = a.Effect,
      p = a.ReactDOM,
      k = a["Web.DOM.NonElementParentNode"],
      n = a["Web.HTML"],
      r = a["Web.HTML.HTMLDocument"],
      w = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (b) {
    return function (h) {
      return function () {
        var d = n.window();
        d = w.document(d)();
        d = r.toNonElementParentNode(d);
        d = k.getElementById(b)(d)();
        if (d instanceof g.Nothing) return f.unit;
        if (d instanceof g.Just) return e["void"](l.functorEffect)(p.render(c.renderComponent(h))(d.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [d.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Maybe.Trans"] = a["Control.Monad.Maybe.Trans"] || {};

  var c = a["Control.Monad.Maybe.Trans"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      f = a["Control.Bind"],
      l = a["Control.Monad"],
      p = a["Data.Functor"],
      k = a["Data.Maybe"],
      n = function n(d) {
    return new p.Functor(function (q) {
      return function (x) {
        return p.map(d)(p.map(k.functorMaybe)(q))(x);
      };
    });
  },
      r = function r(d) {
    return new l.Monad(function () {
      return h(d);
    }, function () {
      return w(d);
    });
  },
      w = function w(d) {
    return new f.Bind(function () {
      return b(d);
    }, function (q) {
      return function (x) {
        return f.bind(d.Bind1())(q)(function (t) {
          if (t instanceof k.Nothing) return e.pure(d.Applicative0())(k.Nothing.value);
          if (t instanceof k.Just) return x(t.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [t.constructor.name]);
        });
      };
    });
  },
      b = function b(d) {
    return new g.Apply(function () {
      return n(d.Bind1().Apply0().Functor0());
    }, l.ap(r(d)));
  },
      h = function h(d) {
    return new e.Applicative(function () {
      return b(d);
    }, function () {
      var q = e.pure(d.Applicative0());
      return function (x) {
        return q(k.Just.create(x));
      };
    }());
  };

  c.MaybeT = function (d) {
    return d;
  };

  c.runMaybeT = function (d) {
    return d;
  };

  c.applicativeMaybeT = h;
  c.bindMaybeT = w;
})(PS);

(function (a) {
  a["Control.Monad.State"] = a["Control.Monad.State"] || {};

  a["Control.Monad.State"].execState = function (c) {
    return function (e) {
      return c(e).value1;
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var c = a["Control.Monad.State.Class"],
      e = a["Data.Tuple"],
      g = a["Data.Unit"];

  c.MonadState = function (f, l) {
    this.Monad0 = f;
    this.state = l;
  };

  c.get = function (f) {
    return (0, f.state)(function (l) {
      return new e.Tuple(l, l);
    });
  };

  c.put = function (f) {
    return function (l) {
      return (0, f.state)(function (p) {
        return new e.Tuple(g.unit, l);
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};

  var c = a["Control.Monad.State.Trans"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      f = a["Control.Bind"],
      l = a["Control.Monad"],
      p = a["Control.Monad.State.Class"],
      k = a["Data.Functor"],
      n = a["Data.Tuple"],
      r = function r(q) {
    return new k.Functor(function (x) {
      return function (t) {
        return function (E) {
          return k.map(q)(function (y) {
            return new n.Tuple(x(y.value0), y.value1);
          })(t(E));
        };
      };
    });
  },
      w = function w(q) {
    return new l.Monad(function () {
      return d(q);
    }, function () {
      return b(q);
    });
  },
      b = function b(q) {
    return new f.Bind(function () {
      return h(q);
    }, function (x) {
      return function (t) {
        return function (E) {
          return f.bind(q.Bind1())(x(E))(function (y) {
            return t(y.value0)(y.value1);
          });
        };
      };
    });
  },
      h = function h(q) {
    return new g.Apply(function () {
      return r(q.Bind1().Apply0().Functor0());
    }, l.ap(w(q)));
  },
      d = function d(q) {
    return new e.Applicative(function () {
      return h(q);
    }, function (x) {
      return function (t) {
        return e.pure(q.Applicative0())(new n.Tuple(x, t));
      };
    });
  };

  c.bindStateT = b;

  c.monadStateStateT = function (q) {
    return new p.MonadState(function () {
      return w(q);
    }, function (x) {
      return function () {
        var t = e.pure(q.Applicative0());
        return function (E) {
          return t(x(E));
        };
      }();
    });
  };
})(PS);

(function (a) {
  a["Control.Monad.Writer.Trans"] = a["Control.Monad.Writer.Trans"] || {};

  var c = a["Control.Monad.Writer.Trans"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      f = a["Control.Bind"],
      l = a["Control.Monad"],
      p = a["Control.Monad.Writer.Class"],
      k = a["Data.Functor"],
      n = a["Data.Monoid"],
      r = a["Data.Semigroup"],
      w = a["Data.Tuple"],
      b = a["Data.Unit"],
      h = function h(y) {
    return function (u) {
      return y(u);
    };
  },
      d = function d(y) {
    return new k.Functor(function (u) {
      return h(k.map(y)(function (F) {
        return new w.Tuple(u(F.value0), F.value1);
      }));
    });
  },
      q = function q(y) {
    return function (u) {
      return new g.Apply(function () {
        return d(u.Functor0());
      }, function (F) {
        return function (C) {
          return g.apply(u)(k.map(u.Functor0())(function (N) {
            return function (I) {
              return new w.Tuple(N.value0(I.value0), r.append(y)(N.value1)(I.value1));
            };
          })(F))(C);
        };
      });
    };
  },
      x = function x(y) {
    return function (u) {
      return new f.Bind(function () {
        return q(y)(u.Apply0());
      }, function (F) {
        return function (C) {
          return f.bind(u)(F)(function (N) {
            var I = C(N.value0);
            return k.map(u.Apply0().Functor0())(function (K) {
              return new w.Tuple(K.value0, r.append(y)(N.value1)(K.value1));
            })(I);
          });
        };
      });
    };
  },
      t = function t(y) {
    return function (u) {
      return new e.Applicative(function () {
        return q(y.Semigroup0())(u.Apply0());
      }, function (F) {
        return e.pure(u)(new w.Tuple(F, n.mempty(y)));
      });
    };
  },
      E = function E(y) {
    return function (u) {
      return new l.Monad(function () {
        return t(y)(u.Applicative0());
      }, function () {
        return x(y.Semigroup0())(u.Bind1());
      });
    };
  };

  c.runWriterT = function (y) {
    return y;
  };

  c.monadWriterT = E;

  c.monadTellWriterT = function (y) {
    return function (u) {
      return new p.MonadTell(function () {
        return E(y)(u);
      }, function () {
        var F = e.pure(u.Applicative0()),
            C = w.Tuple.create(b.unit);
        return function (N) {
          return F(C(N));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Writer"] = a["Control.Monad.Writer"] || {};
  var c = a["Control.Monad.Writer"],
      e = a["Control.Monad.Writer.Trans"],
      g = a["Data.Identity"],
      f = a["Data.Newtype"];

  a = function () {
    var l = f.unwrap(g.newtypeIdentity);
    return function (p) {
      return l(e.runWriterT(p));
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
      e = a["Data.Enum"],
      g = a["Control.Apply"],
      f = a["Data.Bounded"],
      l = a["Data.Functor"],
      p = a["Data.Maybe"],
      k = a["Data.Newtype"],
      n = a["Data.Ord"],
      r = a["Data.Tuple"],
      w = a["Data.Unfoldable1"];

  a = function a(I) {
    return I;
  };

  var b = function b(I) {
    this.Bounded0 = I;
  },
      h = function h(I, K, M) {
    this.Ord0 = I;
    this.pred = K;
    this.succ = M;
  },
      d = function d(I, K, M, L, U) {
    this.Bounded0 = I;
    this.Enum1 = K;
    this.cardinality = M;
    this.fromEnum = L;
    this.toEnum = U;
  },
      q = new b(function () {
    return f.boundedBoolean;
  }),
      x = new k.Newtype(function (I) {
    return I;
  }, a),
      t = function t(I) {
    return new h(function () {
      return p.ordMaybe(I.Enum1().Ord0());
    }, function (K) {
      if (K instanceof p.Nothing) return p.Nothing.value;
      if (K instanceof p.Just) return new p.Just((0, I.Enum1().pred)(K.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [K.constructor.name]);
    }, function (K) {
      if (K instanceof p.Nothing) return new p.Just(new p.Just(f.bottom(I.Bounded0())));
      if (K instanceof p.Just) return l.map(p.functorMaybe)(p.Just.create)((0, I.Enum1().succ)(K.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [K.constructor.name]);
    });
  },
      E = new h(function () {
    return n.ordBoolean;
  }, function (I) {
    return I ? new p.Just(!1) : p.Nothing.value;
  }, function (I) {
    return I ? p.Nothing.value : new p.Just(!0);
  }),
      y = function y(I) {
    return function (K) {
      return function (M) {
        return I(K(M) + 1 | 0);
      };
    };
  },
      u = function u(I) {
    return function (K) {
      return function (M) {
        return I(K(M) - 1 | 0);
      };
    };
  },
      F = function F(I) {
    return I >= f.bottom(f.boundedInt) && I <= f.top(f.boundedInt) ? new p.Just(e.fromCharCode(I)) : p.Nothing.value;
  },
      C = new h(function () {
    return n.ordChar;
  }, u(F)(e.toCharCode), y(F)(e.toCharCode));

  F = new d(function () {
    return f.boundedChar;
  }, function () {
    return C;
  }, e.toCharCode(f.top(f.boundedChar)) - e.toCharCode(f.bottom(f.boundedChar)) | 0, e.toCharCode, F);
  var N = new d(function () {
    return f.boundedBoolean;
  }, function () {
    return E;
  }, 2, function (I) {
    if (!I) return 0;
    if (I) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [I.constructor.name]);
  }, function (I) {
    return 0 === I ? new p.Just(!1) : 1 === I ? new p.Just(!0) : p.Nothing.value;
  });
  c.Enum = h;
  c.BoundedEnum = d;

  c.toEnum = function (I) {
    return I.toEnum;
  };

  c.fromEnum = function (I) {
    return I.fromEnum;
  };

  c.toEnumWithDefaults = function (I) {
    return function (K) {
      return function (M) {
        return function (L) {
          var U = (0, I.toEnum)(L);
          if (U instanceof p.Just) return U.value0;
          if (U instanceof p.Nothing) return L < (0, I.fromEnum)(f.bottom(I.Bounded0())) ? K : M;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [U.constructor.name]);
        };
      };
    };
  };

  c.Cardinality = a;

  c.upFromIncluding = function (I) {
    return function (K) {
      return w.unfoldr1(K)(g.apply(g.applyFn)(r.Tuple.create)(I.succ));
    };
  };

  c.defaultSucc = y;
  c.defaultPred = u;
  c.SmallBounded = b;
  c.boundedEnumBoolean = N;
  c.boundedEnumChar = F;
  c.newtypeCardinality = x;

  c.boundedEnumMaybe = function (I) {
    return function (K) {
      return new d(function () {
        return p.boundedMaybe(K.Bounded0());
      }, function () {
        return t(K);
      }, k.unwrap(x)(K.cardinality) + 1 | 0, function (M) {
        if (M instanceof p.Nothing) return 0;
        if (M instanceof p.Just) return (0, K.fromEnum)(M.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [M.constructor.name]);
      }, function (M) {
        return 0 === M ? p.Nothing.value : l.map(p.functorMaybe)(p.Just.create)((0, K.toEnum)(M - 1 | 0));
      });
    };
  };

  c.smallBoundedBoolean = q;
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
    return function (e) {
      return c - e | 0;
    };
  };
})(PS["Data.Ring"] = PS["Data.Ring"] || {});

(function (a) {
  a.intAdd = function (c) {
    return function (e) {
      return c + e | 0;
    };
  };

  a.intMul = function (c) {
    return function (e) {
      return c * e | 0;
    };
  };
})(PS["Data.Semiring"] = PS["Data.Semiring"] || {});

(function (a) {
  a["Data.Semiring"] = a["Data.Semiring"] || {};
  var c = a["Data.Semiring"];
  a = a["Data.Semiring"];
  a = new function (e, g, f, l) {
    this.add = e;
    this.mul = g;
    this.one = f;
    this.zero = l;
  }(a.intAdd, a.intMul, 1, 0);
  c.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var c = a["Data.Ring"],
      e = a["Data.Semiring"];
  a = new function (g, f) {
    this.Semiring0 = g;
    this.sub = f;
  }(function () {
    return e.semiringInt;
  }, a["Data.Ring"].intSub);
  c.ringInt = a;
})(PS);

(function (a) {
  a["Data.CommutativeRing"] = a["Data.CommutativeRing"] || {};
  var c = a["Data.CommutativeRing"],
      e = a["Data.Ring"];
  a = new function (g) {
    this.Ring0 = g;
  }(function () {
    return e.ringInt;
  });
  c.commutativeRingInt = a;
})(PS);

(function (a) {
  a.canonicalDateImpl = function (c, e, g, f) {
    g = new Date(Date.UTC(e, g - 1, f));
    0 <= e && 100 > e && g.setUTCFullYear(e);
    return c(g.getUTCFullYear())(g.getUTCMonth() + 1)(g.getUTCDate());
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var c = a["Data.Date.Component"],
      e = a["Data.Boolean"],
      g = a["Data.Bounded"],
      f = a["Data.Enum"],
      l = a["Data.Eq"],
      p = a["Data.Maybe"],
      k = a["Data.Ord"],
      n = a["Data.Ordering"],
      r = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      w = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      b = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      h = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      d = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      q = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      x = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      t = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      E = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      y = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      u = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      F = function () {
    function G() {}

    G.value = new G();
    return G;
  }(),
      C = k.ordInt,
      N = k.ordInt;

  a = l.eqInt;
  var I = new l.Eq(function (G) {
    return function (P) {
      return G instanceof r && P instanceof r || G instanceof w && P instanceof w || G instanceof b && P instanceof b || G instanceof h && P instanceof h || G instanceof d && P instanceof d || G instanceof q && P instanceof q || G instanceof x && P instanceof x || G instanceof t && P instanceof t || G instanceof E && P instanceof E || G instanceof y && P instanceof y || G instanceof u && P instanceof u || G instanceof F && P instanceof F ? !0 : !1;
    };
  }),
      K = new k.Ord(function () {
    return I;
  }, function (G) {
    return function (P) {
      if (G instanceof r && P instanceof r) return n.EQ.value;
      if (G instanceof r) return n.LT.value;
      if (P instanceof r) return n.GT.value;
      if (G instanceof w && P instanceof w) return n.EQ.value;
      if (G instanceof w) return n.LT.value;
      if (P instanceof w) return n.GT.value;
      if (G instanceof b && P instanceof b) return n.EQ.value;
      if (G instanceof b) return n.LT.value;
      if (P instanceof b) return n.GT.value;
      if (G instanceof h && P instanceof h) return n.EQ.value;
      if (G instanceof h) return n.LT.value;
      if (P instanceof h) return n.GT.value;
      if (G instanceof d && P instanceof d) return n.EQ.value;
      if (G instanceof d) return n.LT.value;
      if (P instanceof d) return n.GT.value;
      if (G instanceof q && P instanceof q) return n.EQ.value;
      if (G instanceof q) return n.LT.value;
      if (P instanceof q) return n.GT.value;
      if (G instanceof x && P instanceof x) return n.EQ.value;
      if (G instanceof x) return n.LT.value;
      if (P instanceof x) return n.GT.value;
      if (G instanceof t && P instanceof t) return n.EQ.value;
      if (G instanceof t) return n.LT.value;
      if (P instanceof t) return n.GT.value;
      if (G instanceof E && P instanceof E) return n.EQ.value;
      if (G instanceof E) return n.LT.value;
      if (P instanceof E) return n.GT.value;
      if (G instanceof y && P instanceof y) return n.EQ.value;
      if (G instanceof y) return n.LT.value;
      if (P instanceof y) return n.GT.value;
      if (G instanceof u && P instanceof u) return n.EQ.value;
      if (G instanceof u) return n.LT.value;
      if (P instanceof u) return n.GT.value;
      if (G instanceof F && P instanceof F) return n.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [G.constructor.name, P.constructor.name]);
    };
  });
  l = l.eqInt;
  var M = new g.Bounded(function () {
    return C;
  }, -271820, 275759),
      L = new g.Bounded(function () {
    return K;
  }, r.value, F.value),
      U = new f.BoundedEnum(function () {
    return M;
  }, function () {
    return V;
  }, 547580, function (G) {
    return G;
  }, function (G) {
    if (-271820 <= G && 275759 >= G) return new p.Just(G);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [G.constructor.name]);
  }),
      V = new f.Enum(function () {
    return C;
  }, function () {
    var G = f.toEnum(U),
        P = f.fromEnum(U);
    return function (Y) {
      return G(P(Y) - 1 | 0);
    };
  }(), function () {
    var G = f.toEnum(U),
        P = f.fromEnum(U);
    return function (Y) {
      return G(P(Y) + 1 | 0);
    };
  }()),
      J = new f.BoundedEnum(function () {
    return L;
  }, function () {
    return v;
  }, 12, function (G) {
    if (G instanceof r) return 1;
    if (G instanceof w) return 2;
    if (G instanceof b) return 3;
    if (G instanceof h) return 4;
    if (G instanceof d) return 5;
    if (G instanceof q) return 6;
    if (G instanceof x) return 7;
    if (G instanceof t) return 8;
    if (G instanceof E) return 9;
    if (G instanceof y) return 10;
    if (G instanceof u) return 11;
    if (G instanceof F) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [G.constructor.name]);
  }, function (G) {
    return 1 === G ? new p.Just(r.value) : 2 === G ? new p.Just(w.value) : 3 === G ? new p.Just(b.value) : 4 === G ? new p.Just(h.value) : 5 === G ? new p.Just(d.value) : 6 === G ? new p.Just(q.value) : 7 === G ? new p.Just(x.value) : 8 === G ? new p.Just(t.value) : 9 === G ? new p.Just(E.value) : 10 === G ? new p.Just(y.value) : 11 === G ? new p.Just(u.value) : 12 === G ? new p.Just(F.value) : p.Nothing.value;
  }),
      v = new f.Enum(function () {
    return K;
  }, function () {
    var G = f.toEnum(J),
        P = f.fromEnum(J);
    return function (Y) {
      return G(P(Y) - 1 | 0);
    };
  }(), function () {
    var G = f.toEnum(J),
        P = f.fromEnum(J);
    return function (Y) {
      return G(P(Y) + 1 | 0);
    };
  }()),
      D = new g.Bounded(function () {
    return N;
  }, 1, 31),
      O = new f.BoundedEnum(function () {
    return D;
  }, function () {
    return B;
  }, 31, function (G) {
    return G;
  }, function (G) {
    if (1 <= G && 31 >= G) return new p.Just(G);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [G.constructor.name]);
  }),
      B = new f.Enum(function () {
    return N;
  }, function () {
    var G = f.toEnum(O),
        P = f.fromEnum(O);
    return function (Y) {
      return G(P(Y) - 1 | 0);
    };
  }(), function () {
    var G = f.toEnum(O),
        P = f.fromEnum(O);
    return function (Y) {
      return G(P(Y) + 1 | 0);
    };
  }());
  c.eqYear = a;
  c.ordYear = C;
  c.boundedYear = M;
  c.boundedEnumYear = U;
  c.eqMonth = I;
  c.ordMonth = K;
  c.boundedMonth = L;
  c.boundedEnumMonth = J;
  c.eqDay = l;
  c.ordDay = N;
  c.boundedDay = D;
  c.boundedEnumDay = O;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var c = a["Data.Date"],
      e = a["Data.Date"],
      g = a["Data.Bounded"],
      f = a["Data.Date.Component"],
      l = a["Data.Enum"],
      p = a["Data.Eq"],
      k = a["Data.Maybe"],
      n = a["Data.Ord"],
      r = a["Data.Ordering"],
      w = function () {
    function d(q, x, t) {
      this.value0 = q;
      this.value1 = x;
      this.value2 = t;
    }

    d.create = function (q) {
      return function (x) {
        return function (t) {
          return new d(q, x, t);
        };
      };
    };

    return d;
  }(),
      b = new p.Eq(function (d) {
    return function (q) {
      return p.eq(f.eqYear)(d.value0)(q.value0) && p.eq(f.eqMonth)(d.value1)(q.value1) && p.eq(f.eqDay)(d.value2)(q.value2);
    };
  }),
      h = new n.Ord(function () {
    return b;
  }, function (d) {
    return function (q) {
      var x = n.compare(f.ordYear)(d.value0)(q.value0);
      if (x instanceof r.LT) return r.LT.value;
      if (x instanceof r.GT) return r.GT.value;
      x = n.compare(f.ordMonth)(d.value1)(q.value1);
      return x instanceof r.LT ? r.LT.value : x instanceof r.GT ? r.GT.value : n.compare(f.ordDay)(d.value2)(q.value2);
    };
  });

  a = new g.Bounded(function () {
    return h;
  }, new w(g.bottom(f.boundedYear), g.bottom(f.boundedMonth), g.bottom(f.boundedDay)), new w(g.top(f.boundedYear), g.top(f.boundedMonth), g.top(f.boundedDay)));

  c.canonicalDate = function (d) {
    return function (q) {
      return function (x) {
        return e.canonicalDateImpl(function (t) {
          return function (E) {
            return function (y) {
              return new w(t, k.fromJust()(l.toEnum(f.boundedEnumMonth)(E)), y);
            };
          };
        }, d, l.fromEnum(f.boundedEnumMonth)(q), x);
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

  c.eqDate = b;
  c.ordDate = h;
  c.boundedDate = a;
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var c = a["Data.Time.Component"],
      e = a["Data.Boolean"],
      g = a["Data.Bounded"],
      f = a["Data.Enum"],
      l = a["Data.Eq"],
      p = a["Data.Maybe"];
  a = a["Data.Ord"];
  var k = a.ordInt,
      n = a.ordInt,
      r = a.ordInt,
      w = a.ordInt,
      b = a = l.eqInt,
      h = l.eqInt;
  l = l.eqInt;
  var d = new g.Bounded(function () {
    return k;
  }, 0, 59),
      q = new g.Bounded(function () {
    return n;
  }, 0, 59),
      x = new g.Bounded(function () {
    return r;
  }, 0, 999),
      t = new g.Bounded(function () {
    return w;
  }, 0, 23),
      E = new f.BoundedEnum(function () {
    return d;
  }, function () {
    return y;
  }, 60, function (M) {
    return M;
  }, function (M) {
    if (0 <= M && 59 >= M) return new p.Just(M);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [M.constructor.name]);
  }),
      y = new f.Enum(function () {
    return k;
  }, function () {
    var M = f.toEnum(E),
        L = f.fromEnum(E);
    return function (U) {
      return M(L(U) - 1 | 0);
    };
  }(), function () {
    var M = f.toEnum(E),
        L = f.fromEnum(E);
    return function (U) {
      return M(L(U) + 1 | 0);
    };
  }()),
      u = new f.BoundedEnum(function () {
    return q;
  }, function () {
    return F;
  }, 60, function (M) {
    return M;
  }, function (M) {
    if (0 <= M && 59 >= M) return new p.Just(M);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [M.constructor.name]);
  }),
      F = new f.Enum(function () {
    return n;
  }, function () {
    var M = f.toEnum(u),
        L = f.fromEnum(u);
    return function (U) {
      return M(L(U) - 1 | 0);
    };
  }(), function () {
    var M = f.toEnum(u),
        L = f.fromEnum(u);
    return function (U) {
      return M(L(U) + 1 | 0);
    };
  }()),
      C = new f.BoundedEnum(function () {
    return x;
  }, function () {
    return N;
  }, 1E3, function (M) {
    return M;
  }, function (M) {
    if (0 <= M && 999 >= M) return new p.Just(M);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [M.constructor.name]);
  }),
      N = new f.Enum(function () {
    return r;
  }, function () {
    var M = f.toEnum(C),
        L = f.fromEnum(C);
    return function (U) {
      return M(L(U) - 1 | 0);
    };
  }(), function () {
    var M = f.toEnum(C),
        L = f.fromEnum(C);
    return function (U) {
      return M(L(U) + 1 | 0);
    };
  }()),
      I = new f.BoundedEnum(function () {
    return t;
  }, function () {
    return K;
  }, 24, function (M) {
    return M;
  }, function (M) {
    if (0 <= M && 23 >= M) return new p.Just(M);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [M.constructor.name]);
  }),
      K = new f.Enum(function () {
    return w;
  }, function () {
    var M = f.toEnum(I),
        L = f.fromEnum(I);
    return function (U) {
      return M(L(U) - 1 | 0);
    };
  }(), function () {
    var M = f.toEnum(I),
        L = f.fromEnum(I);
    return function (U) {
      return M(L(U) + 1 | 0);
    };
  }());
  c.eqHour = l;
  c.ordHour = w;
  c.boundedHour = t;
  c.boundedEnumHour = I;
  c.eqMinute = b;
  c.ordMinute = n;
  c.boundedMinute = q;
  c.boundedEnumMinute = u;
  c.eqSecond = a;
  c.ordSecond = k;
  c.boundedSecond = d;
  c.boundedEnumSecond = E;
  c.eqMillisecond = h;
  c.ordMillisecond = r;
  c.boundedMillisecond = x;
  c.boundedEnumMillisecond = C;
})(PS);

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  var c = a["Data.Time"],
      e = a["Data.Bounded"],
      g = a["Data.Eq"],
      f = a["Data.Ord"],
      l = a["Data.Ordering"],
      p = a["Data.Time.Component"];

  a = function () {
    function r(w, b, h, d) {
      this.value0 = w;
      this.value1 = b;
      this.value2 = h;
      this.value3 = d;
    }

    r.create = function (w) {
      return function (b) {
        return function (h) {
          return function (d) {
            return new r(w, b, h, d);
          };
        };
      };
    };

    return r;
  }();

  var k = new g.Eq(function (r) {
    return function (w) {
      return g.eq(p.eqHour)(r.value0)(w.value0) && g.eq(p.eqMinute)(r.value1)(w.value1) && g.eq(p.eqSecond)(r.value2)(w.value2) && g.eq(p.eqMillisecond)(r.value3)(w.value3);
    };
  }),
      n = new f.Ord(function () {
    return k;
  }, function (r) {
    return function (w) {
      var b = f.compare(p.ordHour)(r.value0)(w.value0);
      if (b instanceof l.LT) return l.LT.value;
      if (b instanceof l.GT) return l.GT.value;
      b = f.compare(p.ordMinute)(r.value1)(w.value1);
      if (b instanceof l.LT) return l.LT.value;
      if (b instanceof l.GT) return l.GT.value;
      b = f.compare(p.ordSecond)(r.value2)(w.value2);
      return b instanceof l.LT ? l.LT.value : b instanceof l.GT ? l.GT.value : f.compare(p.ordMillisecond)(r.value3)(w.value3);
    };
  });
  e = new e.Bounded(function () {
    return n;
  }, new a(e.bottom(p.boundedHour), e.bottom(p.boundedMinute), e.bottom(p.boundedSecond), e.bottom(p.boundedMillisecond)), new a(e.top(p.boundedHour), e.top(p.boundedMinute), e.top(p.boundedSecond), e.top(p.boundedMillisecond)));
  c.Time = a;

  c.hour = function (r) {
    return r.value0;
  };

  c.minute = function (r) {
    return r.value1;
  };

  c.second = function (r) {
    return r.value2;
  };

  c.millisecond = function (r) {
    return r.value3;
  };

  c.eqTime = k;
  c.ordTime = n;
  c.boundedTime = e;
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  var c = a["Data.DateTime"],
      e = a["Data.Bounded"],
      g = a["Data.Date"],
      f = a["Data.Eq"],
      l = a["Data.Ord"],
      p = a["Data.Ordering"],
      k = a["Data.Time"];

  a = function () {
    function w(b, h) {
      this.value0 = b;
      this.value1 = h;
    }

    w.create = function (b) {
      return function (h) {
        return new w(b, h);
      };
    };

    return w;
  }();

  var n = new f.Eq(function (w) {
    return function (b) {
      return f.eq(g.eqDate)(w.value0)(b.value0) && f.eq(k.eqTime)(w.value1)(b.value1);
    };
  }),
      r = new l.Ord(function () {
    return n;
  }, function (w) {
    return function (b) {
      var h = l.compare(g.ordDate)(w.value0)(b.value0);
      return h instanceof p.LT ? p.LT.value : h instanceof p.GT ? p.GT.value : l.compare(k.ordTime)(w.value1)(b.value1);
    };
  });
  e = new e.Bounded(function () {
    return r;
  }, new a(e.bottom(g.boundedDate), e.bottom(k.boundedTime)), new a(e.top(g.boundedDate), e.top(k.boundedTime)));
  c.DateTime = a;
  c.boundedDateTime = e;
})(PS);

(function (a) {
  a.toDateTimeImpl = function (c) {
    return function (e) {
      e = new Date(e);
      return c(e.getUTCFullYear())(e.getUTCMonth() + 1)(e.getUTCDate())(e.getUTCHours())(e.getUTCMinutes())(e.getUTCSeconds())(e.getUTCMilliseconds());
    };
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.DateTime.Instant"] = a["Data.DateTime.Instant"] || {};
  var c = a["Data.DateTime.Instant"],
      e = a["Data.DateTime.Instant"],
      g = a["Data.Boolean"],
      f = a["Data.Date"],
      l = a["Data.Date.Component"],
      p = a["Data.DateTime"],
      k = a["Data.Enum"],
      n = a["Data.Maybe"],
      r = a["Data.Time"];

  a = function () {
    return e.toDateTimeImpl(function (w) {
      return function (b) {
        return function (h) {
          return function (d) {
            return function (q) {
              return function (x) {
                return function (t) {
                  return new p.DateTime(f.canonicalDate(w)(n.fromJust()(k.toEnum(l.boundedEnumMonth)(b)))(h), new r.Time(d, q, x, t));
                };
              };
            };
          };
        };
      };
    });
  }();

  c.instant = function (w) {
    if (-86399778816E5 <= w && 8639977881599999 >= w) return new n.Just(w);
    if (g.otherwise) return n.Nothing.value;
    throw Error("Failed pattern match at Data.DateTime.Instant (line 44, column 1 - line 44, column 41): " + [w.constructor.name]);
  };

  c.toDateTime = a;
})(PS);

(function (a) {
  a["Data.Either.Extra"] = a["Data.Either.Extra"] || {};

  var c = a["Data.Either.Extra"],
      e = a["Control.Applicative"],
      g = a["Control.Bind"],
      f = a["Control.Category"],
      l = a["Control.Plus"],
      p = a["Data.Either"],
      k = a["Data.Function"],
      n = function n(h) {
    return function (d) {
      return function (q) {
        if (q instanceof p.Left) return h;
        if (q instanceof p.Right) return d(q.value0);
        throw Error("Failed pattern match at Data.Either.Extra (line 29, column 1 - line 29, column 58): " + [h.constructor.name, d.constructor.name, q.constructor.name]);
      };
    };
  },
      r = function r(h) {
    return function (d) {
      return function (q) {
        if (q instanceof p.Left) return d(q.value0);
        if (q instanceof p.Right) return h;
        throw Error("Failed pattern match at Data.Either.Extra (line 18, column 1 - line 18, column 57): " + [h.constructor.name, d.constructor.name, q.constructor.name]);
      };
    };
  },
      w = function w(h) {
    return function (d) {
      return function (q) {
        return k.flip(g.bind(h.Bind1()))(n(l.empty(d))(function () {
          var x = e.pure(h.Applicative0());
          return function (t) {
            return x(q(t));
          };
        }()));
      };
    };
  },
      b = function b(h) {
    return function (d) {
      return function (q) {
        return k.flip(g.bind(h.Bind1()))(r(l.empty(d))(function () {
          var x = e.pure(h.Applicative0());
          return function (t) {
            return x(q(t));
          };
        }()));
      };
    };
  };

  c.catLefts = function (h) {
    return function (d) {
      return b(h)(d)(f.identity(f.categoryFn));
    };
  };

  c.catRights = function (h) {
    return function (d) {
      return w(h)(d)(f.identity(f.categoryFn));
    };
  };
})(PS);

(function (a) {
  a.intDegree = function (c) {
    return Math.min(Math.abs(c), 2147483647);
  };

  a.intDiv = function (c) {
    return function (e) {
      return 0 === e ? 0 : 0 < e ? Math.floor(c / e) : -Math.floor(c / -e);
    };
  };

  a.intMod = function (c) {
    return function (e) {
      if (0 === e) return 0;
      e = Math.abs(e);
      return (c % e + e) % e;
    };
  };
})(PS["Data.EuclideanRing"] = PS["Data.EuclideanRing"] || {});

(function (a) {
  a["Data.EuclideanRing"] = a["Data.EuclideanRing"] || {};
  var c = a["Data.EuclideanRing"],
      e = a["Data.EuclideanRing"],
      g = a["Data.CommutativeRing"];
  a = new function (f, l, p, k) {
    this.CommutativeRing0 = f;
    this.degree = l;
    this.div = p;
    this.mod = k;
  }(function () {
    return g.commutativeRingInt;
  }, e.intDegree, e.intDiv, e.intMod);

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
    function f(l) {
      this.value0 = l;
    }

    f.create = function (l) {
      return new f(l);
    };

    return f;
  }(),
      e = function () {
    function f(l) {
      this.value0 = l;
    }

    f.create = function (l) {
      return new f(l);
    };

    return f;
  }(),
      g = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.Generic = function (f, l) {
    this.from = f;
    this.to = l;
  };

  a.to = function (f) {
    return f.to;
  };

  a.from = function (f) {
    return f.from;
  };

  a.NoArguments = g;
  a.Inl = c;
  a.Inr = e;

  a.Constructor = function (f) {
    return f;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var c = a["Data.Generic.Rep.Bounded"],
      e = a["Data.Generic.Rep"],
      g = function g(n) {
    this["genericTop'"] = n;
  },
      f = function f(n) {
    this["genericBottom'"] = n;
  };

  a = new g(e.NoArguments.value);

  var l = function l(n) {
    return n["genericTop'"];
  },
      p = new f(e.NoArguments.value),
      k = function k(n) {
    return n["genericBottom'"];
  };

  c["genericBottom'"] = k;

  c.genericBottom = function (n) {
    return function (r) {
      return e.to(n)(k(r));
    };
  };

  c["genericTop'"] = l;

  c.genericTop = function (n) {
    return function (r) {
      return e.to(n)(l(r));
    };
  };

  c.genericBottomNoArguments = p;

  c.genericBottomSum = function (n) {
    return new f(new e.Inl(k(n)));
  };

  c.genericBottomConstructor = function (n) {
    return new f(k(n));
  };

  c.genericTopNoArguments = a;

  c.genericTopSum = function (n) {
    return new g(new e.Inr(l(n)));
  };

  c.genericTopConstructor = function (n) {
    return new g(l(n));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var c = a["Data.Generic.Rep.Enum"],
      e = a["Data.Boolean"],
      g = a["Data.Enum"],
      f = a["Data.Functor"],
      l = a["Data.Generic.Rep"],
      p = a["Data.Generic.Rep.Bounded"],
      k = a["Data.Maybe"],
      n = a["Data.Newtype"],
      r = function r(E, y) {
    this["genericPred'"] = E;
    this["genericSucc'"] = y;
  },
      w = function w(E, y, u) {
    this["genericCardinality'"] = E;
    this["genericFromEnum'"] = y;
    this["genericToEnum'"] = u;
  },
      b = function b(E) {
    return E["genericToEnum'"];
  },
      h = function h(E) {
    return E["genericSucc'"];
  },
      d = function d(E) {
    return E["genericPred'"];
  },
      q = function q(E) {
    return E["genericFromEnum'"];
  };

  a = new r(function (E) {
    return k.Nothing.value;
  }, function (E) {
    return k.Nothing.value;
  });

  var x = function x(E) {
    return E["genericCardinality'"];
  },
      t = new w(1, function (E) {
    return 0;
  }, function (E) {
    return 0 === E ? new k.Just(l.NoArguments.value) : k.Nothing.value;
  });

  c.genericPred = function (E) {
    return function (y) {
      var u = f.map(k.functorMaybe)(l.to(E)),
          F = d(y),
          C = l.from(E);
      return function (N) {
        return u(F(C(N)));
      };
    };
  };

  c.genericSucc = function (E) {
    return function (y) {
      var u = f.map(k.functorMaybe)(l.to(E)),
          F = h(y),
          C = l.from(E);
      return function (N) {
        return u(F(C(N)));
      };
    };
  };

  c.genericCardinality = function (E) {
    return function (y) {
      return n.unwrap(g.newtypeCardinality)(x(y));
    };
  };

  c.genericToEnum = function (E) {
    return function (y) {
      var u = f.map(k.functorMaybe)(l.to(E)),
          F = b(y);
      return function (C) {
        return u(F(C));
      };
    };
  };

  c.genericFromEnum = function (E) {
    return function (y) {
      var u = q(y),
          F = l.from(E);
      return function (C) {
        return u(F(C));
      };
    };
  };

  c.genericEnumNoArguments = a;

  c.genericEnumConstructor = function (E) {
    return new r(function (y) {
      return f.map(k.functorMaybe)(l.Constructor)(d(E)(y));
    }, function (y) {
      return f.map(k.functorMaybe)(l.Constructor)(h(E)(y));
    });
  };

  c.genericEnumSum = function (E) {
    return function (y) {
      return function (u) {
        return function (F) {
          return new r(function (C) {
            if (C instanceof l.Inl) return f.map(k.functorMaybe)(l.Inl.create)(d(E)(C.value0));

            if (C instanceof l.Inr) {
              C = d(u)(C.value0);
              if (C instanceof k.Nothing) return new k.Just(new l.Inl(p["genericTop'"](y)));
              if (C instanceof k.Just) return new k.Just(new l.Inr(C.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [C.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [C.constructor.name]);
          }, function (C) {
            if (C instanceof l.Inl) {
              C = h(E)(C.value0);
              if (C instanceof k.Nothing) return new k.Just(new l.Inr(p["genericBottom'"](F)));
              if (C instanceof k.Just) return new k.Just(new l.Inl(C.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [C.constructor.name]);
            }

            if (C instanceof l.Inr) return f.map(k.functorMaybe)(l.Inr.create)(h(u)(C.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [C.constructor.name]);
          });
        };
      };
    };
  };

  c.genericBoundedEnumNoArguments = t;

  c.genericBoundedEnumConstructor = function (E) {
    return new w(n.unwrap(g.newtypeCardinality)(x(E)), function (y) {
      return q(E)(y);
    }, function (y) {
      return f.map(k.functorMaybe)(l.Constructor)(b(E)(y));
    });
  };

  c.genericBoundedEnumSum = function (E) {
    return function (y) {
      return new w(g.Cardinality(n.unwrap(g.newtypeCardinality)(x(E)) + n.unwrap(g.newtypeCardinality)(x(y)) | 0), function (u) {
        if (u instanceof l.Inl) return q(E)(u.value0);
        if (u instanceof l.Inr) return q(y)(u.value0) + n.unwrap(g.newtypeCardinality)(x(E)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [u.constructor.name]);
      }, function (u) {
        var F = x(E);
        if (0 <= u && u < F) u = f.map(k.functorMaybe)(l.Inl.create)(b(E)(u));else if (e.otherwise) u = f.map(k.functorMaybe)(l.Inr.create)(b(y)(u - F | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [F.constructor.name]);
        return u;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var c = a["Data.Generic.Rep.Eq"],
      e = a["Data.Generic.Rep"],
      g = function g(f) {
    this["genericEq'"] = f;
  };

  a = new g(function (f) {
    return function (l) {
      return !0;
    };
  });

  c.genericEq = function (f) {
    return function (l) {
      return function (p) {
        return function (k) {
          return (0, l["genericEq'"])(e.from(f)(p))(e.from(f)(k));
        };
      };
    };
  };

  c.genericEqNoArguments = a;

  c.genericEqSum = function (f) {
    return function (l) {
      return new g(function (p) {
        return function (k) {
          return p instanceof e.Inl && k instanceof e.Inl ? (0, f["genericEq'"])(p.value0)(k.value0) : p instanceof e.Inr && k instanceof e.Inr ? (0, l["genericEq'"])(p.value0)(k.value0) : !1;
        };
      });
    };
  };

  c.genericEqConstructor = function (f) {
    return new g(function (l) {
      return function (p) {
        return (0, f["genericEq'"])(l)(p);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var c = a["Data.Generic.Rep.Ord"],
      e = a["Data.Generic.Rep"],
      g = a["Data.Ordering"],
      f = function f(p) {
    this["genericCompare'"] = p;
  };

  a = new f(function (p) {
    return function (k) {
      return g.EQ.value;
    };
  });

  var l = function l(p) {
    return p["genericCompare'"];
  };

  c.genericCompare = function (p) {
    return function (k) {
      return function (n) {
        return function (r) {
          return l(k)(e.from(p)(n))(e.from(p)(r));
        };
      };
    };
  };

  c.genericOrdNoArguments = a;

  c.genericOrdSum = function (p) {
    return function (k) {
      return new f(function (n) {
        return function (r) {
          if (n instanceof e.Inl && r instanceof e.Inl) return l(p)(n.value0)(r.value0);
          if (n instanceof e.Inr && r instanceof e.Inr) return l(k)(n.value0)(r.value0);
          if (n instanceof e.Inl && r instanceof e.Inr) return g.LT.value;
          if (n instanceof e.Inr && r instanceof e.Inl) return g.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [n.constructor.name, r.constructor.name]);
        };
      });
    };
  };

  c.genericOrdConstructor = function (p) {
    return new f(function (k) {
      return function (n) {
        return l(p)(k)(n);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Symbol"] = a["Data.Symbol"] || {};
  a = a["Data.Symbol"];

  var c = function () {
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

  a.SProxy = c;
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var c = a["Data.Generic.Rep.Show"],
      e = a["Data.Foldable"],
      g = a["Data.Generic.Rep"],
      f = a["Data.Monoid"],
      l = a["Data.Semigroup"],
      p = a["Data.Symbol"],
      k = function k(n) {
    this["genericShow'"] = n;
  };

  a = new function (n) {
    this.genericShowArgs = n;
  }(function (n) {
    return [];
  });

  c.genericShow = function (n) {
    return function (r) {
      return function (w) {
        return (0, r["genericShow'"])(g.from(n)(w));
      };
    };
  };

  c.genericShowArgsNoArguments = a;

  c.genericShowSum = function (n) {
    return function (r) {
      return new k(function (w) {
        if (w instanceof g.Inl) return (0, n["genericShow'"])(w.value0);
        if (w instanceof g.Inr) return (0, r["genericShow'"])(w.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [w.constructor.name]);
      });
    };
  };

  c.genericShowConstructor = function (n) {
    return function (r) {
      return new k(function (w) {
        var b = p.reflectSymbol(r)(p.SProxy.value);
        w = (0, n.genericShowArgs)(w);
        return 0 === w.length ? b : "(" + (e.intercalate(e.foldableArray)(f.monoidString)(" ")(l.append(l.semigroupArray)([b])(w)) + ")");
      });
    };
  };
})(PS);

(function (a) {
  a.fromNumberImpl = function (c) {
    return function (e) {
      return function (g) {
        return (g | 0) === g ? c(g) : e;
      };
    };
  };

  a.toNumber = function (c) {
    return c;
  };

  a.toStringAs = function (c) {
    return function (e) {
      return e.toString(c);
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
      e = a["Data.Int"],
      g = a["Data.Boolean"],
      f = a["Data.Bounded"],
      l = a["Data.Maybe"],
      p = a.Global,
      k = a.Math,
      n = e.fromNumberImpl(l.Just.create)(l.Nothing.value),
      r = function r(w) {
    if (w === p.infinity || w === -p.infinity) return 0;
    if (w >= e.toNumber(f.top(f.boundedInt))) return f.top(f.boundedInt);
    if (w <= e.toNumber(f.bottom(f.boundedInt))) return f.bottom(f.boundedInt);
    if (g.otherwise) return l.fromMaybe(0)(n(w));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [w.constructor.name]);
  };

  c.round = function (w) {
    return r(k.round(w));
  };

  c.hexadecimal = 16;
  c.toNumber = e.toNumber;
  c.toStringAs = e.toStringAs;
})(PS);

(function (a) {
  a.toInstantImpl = function (c) {
    return function (e) {
      return function (g) {
        g = g.getTime();
        return isNaN(g) ? e : c(g);
      };
    };
  };

  a.jsdate = function (c) {
    var e = c.year;
    c = new Date(Date.UTC(e, c.month, c.day, c.hour, c.minute, c.second, c.millisecond));
    0 <= e && 100 > e && c.setUTCFullYear(e);
    return c;
  };

  a.dateMethodEff = function (c, e) {
    return function () {
      return e[c]();
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
      e = a["Data.JSDate"],
      g = a["Data.Date"],
      f = a["Data.Date.Component"],
      l = a["Data.DateTime.Instant"],
      p = a["Data.Enum"],
      k = a["Data.Functor"],
      n = a["Data.Int"],
      r = a["Data.Maybe"],
      w = a["Data.Time"],
      b = a["Data.Time.Component"],
      h = a["Data.Time.Duration"];
  a = a["Control.Bind"].composeKleisliFlipped(r.bindMaybe)(function (d) {
    return l.instant(h.Milliseconds(d));
  })(e.toInstantImpl(r.Just.create)(r.Nothing.value));
  k = k.map(k.functorFn)(k.map(r.functorMaybe)(l.toDateTime))(a);

  c.fromDateTime = function (d) {
    return e.jsdate({
      year: n.toNumber(p.fromEnum(f.boundedEnumYear)(g.year(d.value0))),
      month: n.toNumber(p.fromEnum(f.boundedEnumMonth)(g.month(d.value0)) - 1 | 0),
      day: n.toNumber(p.fromEnum(f.boundedEnumDay)(g.day(d.value0))),
      hour: n.toNumber(p.fromEnum(b.boundedEnumHour)(w.hour(d.value1))),
      minute: n.toNumber(p.fromEnum(b.boundedEnumMinute)(w.minute(d.value1))),
      second: n.toNumber(p.fromEnum(b.boundedEnumSecond)(w.second(d.value1))),
      millisecond: n.toNumber(p.fromEnum(b.boundedEnumMillisecond)(w.millisecond(d.value1)))
    });
  };

  c.toDateTime = k;

  c.toISOString = function (d) {
    return e.dateMethodEff("toISOString", d);
  };

  c.parse = e.parse;
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};
  var c = a["Data.Maybe.First"],
      e = a["Data.Maybe"];
  a = new a["Data.Semigroup"].Semigroup(function (g) {
    return function (f) {
      return g instanceof e.Just ? g : f;
    };
  });

  c.First = function (g) {
    return g;
  };

  c.semigroupFirst = a;
})(PS);

(function (a) {
  a["Data.Natural"] = a["Data.Natural"] || {};
  var c = a["Data.Natural"],
      e = a["Data.Show"];
  a = new e.Show(function () {
    var g = e.show(e.showInt);
    return function (f) {
      return g(f);
    };
  }());

  c.intToNat = function (g) {
    return 0 <= g ? g : 0;
  };

  c.natToInt = function (g) {
    return g;
  };

  c.showNatural = a;
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  a = a["Data.Profunctor"];
  var c = new function (e) {
    this.dimap = e;
  }(function (e) {
    return function (g) {
      return function (f) {
        return function (l) {
          return g(f(e(l)));
        };
      };
    };
  });

  a.dimap = function (e) {
    return e.dimap;
  };

  a.profunctorFn = c;
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};
  var c = a["Data.Profunctor.Strong"],
      e = a["Control.Category"],
      g = a["Control.Semigroupoid"],
      f = a["Data.Profunctor"],
      l = a["Data.Tuple"];
  a = new function (k, n, r) {
    this.Profunctor0 = k;
    this.first = n;
    this.second = r;
  }(function () {
    return f.profunctorFn;
  }, function (k) {
    return function (n) {
      return new l.Tuple(k(n.value0), n.value1);
    };
  }, a["Data.Functor"].map(l.functorTuple));

  var p = function p(k) {
    return function (n) {
      return function (r) {
        return function (w) {
          return g.composeFlipped(k.Semigroupoid0())((0, n.first)(r))((0, n.second)(w));
        };
      };
    };
  };

  c.second = function (k) {
    return k.second;
  };

  c.fanout = function (k) {
    return function (n) {
      return function (r) {
        return function (w) {
          var b = f.dimap(n.Profunctor0())(e.identity(e.categoryFn))(function (h) {
            return new l.Tuple(h, h);
          })(e.identity(k));
          return g.composeFlipped(k.Semigroupoid0())(b)(p(k)(n)(r)(w));
        };
      };
    };
  };

  c.strongFn = a;
})(PS);

(function (a) {
  var c = "function" === typeof Array.from,
      e = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      g = "function" === typeof String.prototype.fromCodePoint,
      f = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (l) {
    return f ? function (p) {
      return p.codePointAt(0);
    } : l;
  };

  a._codePointAt = function (l) {
    return function (p) {
      return function (k) {
        return function (n) {
          return function (r) {
            return function (w) {
              var b = w.length;
              if (0 > r || r >= b) return k;
              if (e) for (w = w[Symbol.iterator](), b = r;; --b) {
                var h = w.next();
                if (h.done) return k;
                if (0 === b) return p(n(h.value));
              }
              return l(r)(w);
            };
          };
        };
      };
    };
  };

  a._singleton = function (l) {
    return g ? String.fromCodePoint : l;
  };

  a._take = function (l) {
    return function (p) {
      return e ? function (k) {
        var n = "";
        k = k[Symbol.iterator]();

        for (var r = 0; r < p; ++r) {
          var w = k.next();
          if (w.done) break;
          n += w.value;
        }

        return n;
      } : l(p);
    };
  };

  a._toCodePointArray = function (l) {
    return function (p) {
      return c ? function (k) {
        return Array.from(k, p);
      } : l;
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
    return function (e) {
      return function (g) {
        return function (f) {
          f = f.indexOf(g);
          return -1 === f ? e : c(f);
        };
      };
    };
  };

  a._lastIndexOf = function (c) {
    return function (e) {
      return function (g) {
        return function (f) {
          f = f.lastIndexOf(g);
          return -1 === f ? e : c(f);
        };
      };
    };
  };

  a.take = function (c) {
    return function (e) {
      return e.substr(0, c);
    };
  };

  a.drop = function (c) {
    return function (e) {
      return e.substring(c);
    };
  };
})(PS["Data.String.CodeUnits"] = PS["Data.String.CodeUnits"] || {});

(function (a) {
  a["Data.String.CodeUnits"] = a["Data.String.CodeUnits"] || {};

  var c = a["Data.String.CodeUnits"],
      e = a["Data.String.CodeUnits"],
      g = a["Data.Maybe"],
      f = e._lastIndexOf(g.Just.create)(g.Nothing.value),
      l = e._indexOf(g.Just.create)(g.Nothing.value);

  c.stripSuffix = function (p) {
    return function (k) {
      var n = f(p)(k);
      return n instanceof g.Just && n.value0 === (e.length(k) - e.length(p) | 0) ? g.Just.create(e.take(n.value0)(k)) : g.Nothing.value;
    };
  };

  c.contains = function (p) {
    var k = l(p);
    return function (n) {
      return g.isJust(k(n));
    };
  };

  c.singleton = e.singleton;
  c.length = e.length;
  c.drop = e.drop;
})(PS);

(function (a) {
  a.charAt = function (c) {
    return function (e) {
      if (0 <= c && c < e.length) return e.charAt(c);
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
      e = a["Data.String.CodePoints"],
      g = a["Data.Array"],
      f = a["Data.Boolean"],
      l = a["Data.Bounded"],
      p = a["Data.Enum"],
      k = a["Data.Eq"],
      n = a["Data.EuclideanRing"],
      r = a["Data.Functor"],
      w = a["Data.Int"],
      b = a["Data.Maybe"],
      h = a["Data.Ord"],
      d = a["Data.String.CodeUnits"],
      q = a["Data.String.Common"],
      x = a["Data.String.Unsafe"],
      t = a["Data.Tuple"],
      E = a["Data.Unfoldable"],
      y = function y(D) {
    return function (O) {
      return ((1024 * (D - 55296 | 0) | 0) + (O - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (D) {
    return "(CodePoint 0x" + (q.toUpper(w.toStringAs(w.hexadecimal)(D)) + ")");
  });

  var u = function u(D) {
    var O = d.length(D);
    if (0 === O) return b.Nothing.value;
    if (1 === O) return new b.Just({
      head: p.fromEnum(p.boundedEnumChar)(x.charAt(0)(D)),
      tail: ""
    });
    O = p.fromEnum(p.boundedEnumChar)(x.charAt(1)(D));
    var B = p.fromEnum(p.boundedEnumChar)(x.charAt(0)(D));
    return 55296 <= B && 56319 >= B && 56320 <= O && 57343 >= O ? new b.Just({
      head: y(B)(O),
      tail: d.drop(2)(D)
    }) : new b.Just({
      head: B,
      tail: d.drop(1)(D)
    });
  },
      F = function F(D) {
    return r.map(b.functorMaybe)(function (O) {
      return new t.Tuple(O.head, O.tail);
    })(u(D));
  },
      C = e._unsafeCodePointAt0(function (D) {
    var O = p.fromEnum(p.boundedEnumChar)(x.charAt(0)(D));
    return 55296 <= O && 56319 >= O && 1 < d.length(D) && (D = p.fromEnum(p.boundedEnumChar)(x.charAt(1)(D)), 56320 <= D && 57343 >= D) ? y(O)(D) : O;
  }),
      N = e._toCodePointArray(function (D) {
    return E.unfoldr(E.unfoldableArray)(F)(D);
  })(C),
      I = function () {
    var D = p.toEnumWithDefaults(p.boundedEnumChar)(l.bottom(l.boundedChar))(l.top(l.boundedChar));
    return function (O) {
      return d.singleton(D(O));
    };
  }(),
      K = e._singleton(function (D) {
    if (65535 >= D) return I(D);
    var O = n.div(n.euclideanRingInt)(D - 65536 | 0)(1024) + 55296 | 0;
    D = n.mod(n.euclideanRingInt)(D - 65536 | 0)(1024) + 56320 | 0;
    return I(O) + I(D);
  }),
      M = function M(D) {
    return function (O) {
      if (1 > D) return "";
      var B = u(O);
      return B instanceof b.Just ? K(B.value0.head) + M(D - 1 | 0)(B.value0.tail) : O;
    };
  };

  e._take(M);

  var L = new k.Eq(function (D) {
    return function (O) {
      return D === O;
    };
  }),
      U = new h.Ord(function () {
    return L;
  }, function (D) {
    return function (O) {
      return h.compare(h.ordInt)(D)(O);
    };
  }),
      V = function V(D) {
    return function (O) {
      for (var B = D, G = !1, P; !G;) {
        P = B;
        var Y = u(O);
        Y instanceof b.Just ? 0 === P ? (G = !0, P = new b.Just(Y.value0.head)) : (B = P - 1 | 0, O = Y.value0.tail, P = void 0) : (G = !0, P = b.Nothing.value);
      }

      return P;
    };
  },
      J = new l.Bounded(function () {
    return U;
  }, 0, 1114111);

  k = new p.BoundedEnum(function () {
    return J;
  }, function () {
    return v;
  }, 1114112, function (D) {
    return D;
  }, function (D) {
    if (0 <= D && 1114111 >= D) return new b.Just(D);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [D.constructor.name]);
  });
  var v = new p.Enum(function () {
    return U;
  }, p.defaultPred(p.toEnum(k))(p.fromEnum(k)), p.defaultSucc(p.toEnum(k))(p.fromEnum(k)));
  c.singleton = K;
  c.toCodePointArray = N;

  c.codePointAt = function (D) {
    return function (O) {
      return 0 > D || 0 === D && "" === O ? b.Nothing.value : 0 === D ? new b.Just(C(O)) : e._codePointAt(V)(b.Just.create)(b.Nothing.value)(C)(D)(O);
    };
  };

  c.length = function (D) {
    return g.length(N(D));
  };

  c.showCodePoint = a;
  c.boundedEnumCodePoint = k;
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var c = a["Data.String.NonEmpty.Internal"],
      e = a["Data.Maybe"];
  a = a["Data.Semigroup"].semigroupString;

  c.fromString = function (g) {
    return "" === g ? e.Nothing.value : new e.Just(g);
  };

  c.toString = function (g) {
    return g;
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
    return function (e) {
      return e.endsWith(c);
    };
  };

  a.fromCharArray = function (c) {
    return c.join("");
  };

  a.startsWith = function (c) {
    return function (e) {
      return e.startsWith(c);
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
      e = a["Data.FoldableWithIndex"],
      g = a["Data.FunctorWithIndex"],
      f = a["Data.Traversable"],
      l = function l(k) {
    return function (n) {
      return function (r) {
        var w = f.sequence(k.Traversable2())(n),
            b = g.mapWithIndex(k.FunctorWithIndex0())(r);
        return function (h) {
          return w(b(h));
        };
      };
    };
  },
      p = new function (k, n, r, w) {
    this.FoldableWithIndex1 = k;
    this.FunctorWithIndex0 = n;
    this.Traversable2 = r;
    this.traverseWithIndex = w;
  }(function () {
    return e.foldableWithIndexArray;
  }, function () {
    return g.functorWithIndexArray;
  }, function () {
    return f.traversableArray;
  }, function (k) {
    return l(p)(k);
  });

  c.traverseWithIndex = function (k) {
    return k.traverseWithIndex;
  };

  c.traversableWithIndexArray = p;
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
      e = a["Data.UUID"],
      g = a["Control.Applicative"],
      f = a.Effect;
  a = a["Control.Bind"].bind(f.bindEffect)(e.getUUIDImpl)(function () {
    var l = g.pure(f.applicativeEffect);
    return function (p) {
      return l(p);
    };
  }());
  c.emptyUUID = "00000000-0000-0000-0000-000000000000";
  c.genUUID = a;

  c.toString = function (l) {
    return l;
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
      e = a["Data.Semigroup"],
      g = new function (f, l, p, k, n, r) {
    this.Semigroup0 = f;
    this.at = l;
    this.pathAppend = p;
    this.pathAppendNSx = k;
    this.root = n;
    this.xx = r;
  }(function () {
    return e.semigroupString;
  }, function (f) {
    return "@" + f;
  }, function (f) {
    return function (l) {
      return f === g.root ? g.root + l : f + ("/" + l);
    };
  }, function (f) {
    return function (l) {
      return f === g.root ? g.root + ("x:" + l) : f + ("/x:" + l);
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

  c.stringXPath = g;
})(PS);

(function (a) {
  a.tryPrettyJson = function (c) {
    var e = c;
    return function () {
      if (void 0 === c) return null;
      var g = JSON.stringify(JSON.parse(c), void 0, 2);
      return e = void 0 === g || null === g ? c : g;
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
  a.unsafeReadPropImpl = function (c, e, g, f) {
    return null == f ? c : e(f[g]);
  };
})(PS["Foreign.Index"] = PS["Foreign.Index"] || {});

(function (a) {
  a["Foreign.Index"] = a["Foreign.Index"] || {};
  var c = a["Foreign.Index"],
      e = a["Control.Applicative"],
      g = a["Control.Monad.Except.Trans"],
      f = a["Data.Identity"],
      l = a.Foreign;

  a["Foreign.Index"].readProp = function (p) {
    return function (k) {
      return c.unsafeReadPropImpl(l.fail(new l.TypeMismatch("object", l.typeOf(k))), e.pure(g.applicativeExceptT(f.monadIdentity)), p, k);
    };
  };
})(PS);

(function (a) {
  a.copyRecord = function (c) {
    var e = {},
        g;

    for (g in c) {
      ({}).hasOwnProperty.call(c, g) && (e[g] = c[g]);
    }

    return e;
  };

  a.unsafeInsert = function (c) {
    return function (e) {
      return function (g) {
        g[c] = e;
        return g;
      };
    };
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});

(function (a) {
  a["Record.Builder"] = a["Record.Builder"] || {};
  var c = a["Record.Builder"],
      e = a["Record.Builder"],
      g = a["Data.Symbol"],
      f = a["Control.Semigroupoid"].semigroupoidFn;
  a = a["Control.Category"].categoryFn;

  c.build = function (l) {
    return function (p) {
      return l(e.copyRecord(p));
    };
  };

  c.insert = function (l) {
    return function (p) {
      return function (k) {
        return function (n) {
          return function (r) {
            return function (w) {
              return e.unsafeInsert(g.reflectSymbol(k)(n))(r)(w);
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
    function e() {}

    e.value = new e();
    return e;
  }();

  a.RLProxy = c;
})(PS);

(function (a) {
  a["Simple.JSON"] = a["Simple.JSON"] || {};

  var c = a["Simple.JSON"],
      e = a["Simple.JSON"],
      g = a["Control.Applicative"],
      f = a["Control.Apply"],
      l = a["Control.Bind"],
      p = a["Control.Category"],
      k = a["Control.Monad.Except"],
      n = a["Control.Monad.Except.Trans"],
      r = a["Control.Semigroupoid"],
      w = a["Data.Bifunctor"],
      b = a["Data.Either"],
      h = a["Data.Function"],
      d = a["Data.Functor"],
      q = a["Data.Identity"],
      x = a["Data.List.Types"],
      t = a["Data.Maybe"],
      E = a["Data.Semigroup"],
      y = a["Data.Symbol"],
      u = a["Data.TraversableWithIndex"],
      F = a["Effect.Exception"],
      C = a["Effect.Uncurried"],
      N = a["Effect.Unsafe"],
      I = a.Foreign,
      K = a["Foreign.Index"],
      M = a["Record.Builder"],
      L = a["Type.Data.RowList"],
      U = function U(G) {
    this.getFields = G;
  },
      V = function V(G) {
    this.readImpl = G;
  };

  a = new V(I.readString);

  var J = new V(g.pure(n.applicativeExceptT(q.monadIdentity))),
      v = new U(function (G) {
    return function (P) {
      return g.pure(n.applicativeExceptT(q.monadIdentity))(p.identity(M.categoryBuilder));
    };
  }),
      D = function () {
    var G = w.lmap(b.bifunctorEither)(function () {
      var Y = g.pure(x.applicativeNonEmptyList);
      return function (pa) {
        return Y(I.ForeignError.create(F.message(pa)));
      };
    }()),
        P = C.runEffectFn1(e._parseJSON);
    return function (Y) {
      return n.ExceptT(q.Identity(G(N.unsafePerformEffect(F["try"](P(Y))))));
    };
  }(),
      O = function O(G) {
    return function (P) {
      return function (Y) {
        if (P instanceof b.Left && Y instanceof b.Right) return new b.Left(P.value0);
        if (P instanceof b.Left && Y instanceof b.Left) return new b.Left(E.append(G)(P.value0)(Y.value0));
        if (P instanceof b.Right && Y instanceof b.Left) return new b.Left(Y.value0);
        if (P instanceof b.Right && Y instanceof b.Right) return new b.Right(P.value0(Y.value0));
        throw Error("Failed pattern match at Simple.JSON (line 234, column 1 - line 234, column 90): " + [P.constructor.name, Y.constructor.name]);
      };
    };
  },
      B = function B(G) {
    return function (P) {
      return function (Y) {
        return function (pa) {
          return n.ExceptT(f.apply(P.Apply0())(d.map(P.Apply0().Functor0())(O(G))(n.runExceptT(Y)))(n.runExceptT(pa)));
        };
      };
    };
  };

  c["readJSON'"] = function (G) {
    return l.composeKleisliFlipped(n.bindExceptT(q.monadIdentity))(G.readImpl)(D);
  };

  c["read'"] = function (G) {
    return G.readImpl;
  };

  c.ReadForeign = V;

  c.readImpl = function (G) {
    return G.readImpl;
  };

  c.readForeign = J;
  c.readString = a;

  c.readArray = function (G) {
    return new V(function () {
      return l.composeKleisliFlipped(n.bindExceptT(q.monadIdentity))(u.traverseWithIndex(u.traversableWithIndexArray)(n.applicativeExceptT(q.monadIdentity))(function (P) {
        return function (Y) {
          return k.withExcept(d.map(x.functorNonEmptyList)(I.ErrorAtIndex.create(P)))((0, G.readImpl)(Y));
        };
      }))(I.readArray);
    }());
  };

  c.readMaybe = function (G) {
    return new V(function () {
      return function (P) {
        return function (Y) {
          return I.isNull(Y) || I.isUndefined(Y) ? g.pure(n.applicativeExceptT(q.monadIdentity))(t.Nothing.value) : d.map(n.functorExceptT(q.functorIdentity))(t.Just.create)(P(Y));
        };
      }(G.readImpl);
    }());
  };

  c.readRecord = function (G) {
    return function (P) {
      return new V(function (Y) {
        return d.map(n.functorExceptT(q.functorIdentity))(h.flip(M.build)({}))((0, P.getFields)(L.RLProxy.value)(Y));
      });
    };
  };

  c.readFieldsCons = function (G) {
    return function (P) {
      return function (Y) {
        return function (pa) {
          return function (va) {
            return new U(function (z) {
              return function (ya) {
                var X = (0, Y.getFields)(L.RLProxy.value)(ya),
                    ka = y.reflectSymbol(G)(y.SProxy.value),
                    Aa = k.withExcept(d.map(x.functorNonEmptyList)(I.ErrorAtProperty.create(ka)));
                ya = l.bind(n.bindExceptT(q.monadIdentity))(Aa(l.bindFlipped(n.bindExceptT(q.monadIdentity))(P.readImpl)(K.readProp(ka)(ya))))(function (R) {
                  return g.pure(n.applicativeExceptT(q.monadIdentity))(M.insert()()(G)(y.SProxy.value)(R));
                });
                return B(x.semigroupNonEmptyList)(q.applicativeIdentity)(d.map(n.functorExceptT(q.functorIdentity))(r.compose(M.semigroupoidBuilder))(ya))(X);
              };
            });
          };
        };
      };
    };
  };

  c.readFieldsNil = v;
})(PS);

(function (a) {
  a["DataCite.Types.Common"] = a["DataCite.Types.Common"] || {};

  var c = a["DataCite.Types.Common"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      f = a["Control.Bind"],
      l = a["Control.Monad.Error.Class"],
      p = a["Control.Monad.Except.Trans"],
      k = a["Data.Bounded"],
      n = a["Data.Enum"],
      r = a["Data.Eq"],
      w = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      h = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Generic.Rep.Enum"],
      q = a["Data.Generic.Rep.Eq"],
      x = a["Data.Generic.Rep.Ord"],
      t = a["Data.Generic.Rep.Show"],
      E = a["Data.Identity"],
      y = a["Data.List.Types"],
      u = a["Data.Ord"],
      F = a["Data.Show"],
      C = a["Data.Symbol"],
      N = a.Foreign,
      I = a["Simple.JSON"],
      K = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      M = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      L = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      U = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      V = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      J = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      v = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      D = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      O = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      B = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      G = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      P = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Y = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      pa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      va = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      z = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ya = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      X = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ka = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Aa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      R = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ia = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Da = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      na = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ua = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      qa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ba = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ha = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ea = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ma = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      da = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      H = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      aa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      sa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ha = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ea = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Pa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Q = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      za = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ca = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      la = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      A = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      W = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ra = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ta = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      wa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ia = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ka = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ga = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Sa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ua = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Za = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      $a = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      gb = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      bb = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      cb = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      db = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ib = function ib(m) {
    this.enumReadForeignImpl = m;
  },
      Qa = new b.Generic(function (m) {
    if (m instanceof K) return new b.Inl(b.NoArguments.value);
    if (m instanceof M) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (m instanceof L) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (m instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (m instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (m instanceof J) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (m instanceof v) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (m instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (m instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (m instanceof B) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (m instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (m instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (m instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (m instanceof pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof b.Inl) return K.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inl) return M.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inl) return L.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inl) return U.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inl) return J.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return v.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return B.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Y.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return pa.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [m.constructor.name]);
  }),
      kb = new F.Show(t.genericShow(Qa)(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Audiovisual";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Dataset";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Event";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Image";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "InteractiveResource";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Model";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "PhysicalObject";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "ResourceCollection";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Service";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Software";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Sound";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Text";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Workflow";
  })))(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      Xa = new b.Generic(function (m) {
    if (m instanceof va) return new b.Inl(b.NoArguments.value);
    if (m instanceof z) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (m instanceof ya) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (m instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (m instanceof ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (m instanceof Aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (m instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (m instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (m instanceof Da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (m instanceof na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (m instanceof ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (m instanceof qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (m instanceof Ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (m instanceof Ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (m instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (m instanceof ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (m instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (m instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (m instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (m instanceof sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (m instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (m instanceof Ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (m instanceof Pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (m instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (m instanceof za) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof b.Inl) return va.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inl) return z.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inl) return ya.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inl) return X.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inl) return ka.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inl) return Aa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Da.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return na.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ua.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return qa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ba.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ha.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ma.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return aa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return sa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ea.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Pa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return za.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [m.constructor.name]);
  }),
      rb = new F.Show(t.genericShow(Xa)(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsCitedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Cites";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsSupplementTo";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsContinuedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Continues";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsPartOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "HasPart";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsReferencedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "References";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Documents";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsCompiledBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Compiles";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "HasMetadata";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsMetadataFor";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "Reviews";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsReviewedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      Ta = new b.Generic(function (m) {
    if (m instanceof ca) return new b.Inl(b.NoArguments.value);
    if (m instanceof la) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (m instanceof A) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (m instanceof W) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (m instanceof ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (m instanceof ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (m instanceof wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (m instanceof Ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (m instanceof Ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (m instanceof Ga) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (m instanceof Sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (m instanceof Ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (m instanceof Za) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (m instanceof $a) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (m instanceof gb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (m instanceof bb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (m instanceof cb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (m instanceof db) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof b.Inl) return ca.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inl) return la.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inl) return A.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inl) return W.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inl) return ra.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inl) return ta.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return wa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ia.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ka.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ga.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Sa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ua.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Za.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return $a.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return gb.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return bb.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return cb.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return db.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [m.constructor.name]);
  }),
      sb = new F.Show(function (m) {
    return m instanceof la ? "arXiv" : m instanceof A ? "bibcode" : t.genericShow(Ta)(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "ARK";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "ArXiv";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "Bibcode";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "DOI";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "EAN13";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "EISSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "Handle";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "IGSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "ISBN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "ISSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "ISTC";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "LISSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "LSID";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "PMID";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "PURL";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "UPC";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "URL";
    })))(t.genericShowConstructor(t.genericShowArgsNoArguments)(new C.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(m);
  }),
      tb = new r.Eq(q.genericEq(Qa)(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqConstructor(q.genericEqNoArguments)))))))))))))))),
      lb = new u.Ord(function () {
    return tb;
  }, function (m) {
    return function (Ya) {
      return x.genericCompare(Qa)(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdConstructor(x.genericOrdNoArguments)))))))))))))))(m)(Ya);
    };
  }),
      ub = new r.Eq(q.genericEq(Xa)(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqConstructor(q.genericEqNoArguments))))))))))))))))))))))))))),
      mb = new u.Ord(function () {
    return ub;
  }, function (m) {
    return function (Ya) {
      return x.genericCompare(Xa)(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdConstructor(x.genericOrdNoArguments))))))))))))))))))))))))))(m)(Ya);
    };
  }),
      vb = new r.Eq(q.genericEq(Ta)(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqConstructor(q.genericEqNoArguments)))))))))))))))))))),
      Wa = new u.Ord(function () {
    return vb;
  }, function (m) {
    return function (Ya) {
      return x.genericCompare(Ta)(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdConstructor(x.genericOrdNoArguments)))))))))))))))))))(m)(Ya);
    };
  }),
      nb = new n.Enum(function () {
    return lb;
  }, d.genericPred(Qa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), d.genericSucc(Qa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      wb = new n.Enum(function () {
    return mb;
  }, d.genericPred(Xa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), d.genericSucc(Xa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      Ra = function Ra(m) {
    return function (Ya) {
      return new ib(function (eb) {
        return e.alt(p.altExceptT(y.semigroupNonEmptyList)(E.monadIdentity))(w.map(p.functorExceptT(E.functorIdentity))(b.Inl.create)((0, m.enumReadForeignImpl)(eb)))(w.map(p.functorExceptT(E.functorIdentity))(b.Inr.create)((0, Ya.enumReadForeignImpl)(eb)));
      });
    };
  },
      ob = new n.Enum(function () {
    return Wa;
  }, d.genericPred(Ta)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), d.genericSucc(Ta)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      Ma = function Ma(m) {
    return new ib(function (Ya) {
      var eb = C.reflectSymbol(m)(C.SProxy.value);
      return f.bind(p.bindExceptT(E.monadIdentity))(I.readImpl(I.readString)(Ya))(function (xb) {
        return xb === eb ? g.pure(p.applicativeExceptT(E.monadIdentity))(b.NoArguments.value) : l.throwError(p.monadThrowExceptT(E.monadIdentity))(g.pure(y.applicativeNonEmptyList)(N.ForeignError.create("Enum string " + (xb + (" did not match expected string " + eb)))));
      });
    });
  },
      fb = new I.ReadForeign(function (m) {
    return function (Ya) {
      return function (eb) {
        return w.map(p.functorExceptT(E.functorIdentity))(b.to(m))((0, Ya.enumReadForeignImpl)(eb));
      };
    };
  }(Ta)(Ra(Ma(new C.IsSymbol(function () {
    return "ARK";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "ArXiv";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "Bibcode";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "DOI";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "EAN13";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "EISSN";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "Handle";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "IGSN";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "ISBN";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "ISSN";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "ISTC";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "LISSN";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "LSID";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "PMID";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "PURL";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "UPC";
  })))(Ra(Ma(new C.IsSymbol(function () {
    return "URL";
  })))(Ma(new C.IsSymbol(function () {
    return "URN";
  }))))))))))))))))))))),
      hb = new k.Bounded(function () {
    return lb;
  }, h.genericBottom(Qa)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(Qa)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments)))))))))))))))),
      pb = new k.Bounded(function () {
    return mb;
  }, h.genericBottom(Xa)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(Xa)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments))))))))))))))))))))))))))),
      qb = new k.Bounded(function () {
    return Wa;
  }, h.genericBottom(Ta)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(Ta)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments)))))))))))))))))))),
      yb = new n.BoundedEnum(function () {
    return hb;
  }, function () {
    return nb;
  }, d.genericCardinality(Qa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericFromEnum(Qa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericToEnum(Qa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))),
      zb = new n.BoundedEnum(function () {
    return pb;
  }, function () {
    return wb;
  }, d.genericCardinality(Xa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericFromEnum(Xa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericToEnum(Xa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Cb = new n.BoundedEnum(function () {
    return qb;
  }, function () {
    return ob;
  }, d.genericCardinality(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericFromEnum(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericToEnum(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))));

  c.ARK = ca;
  c.ArXiv = la;
  c.Bibcode = A;
  c.DOI = W;
  c.EAN13 = ra;
  c.EISSN = ta;
  c.Handle = wa;
  c.IGSN = Ia;
  c.ISBN = Ka;
  c.ISSN = Ga;
  c.ISTC = Sa;
  c.LISSN = Ua;
  c.LSID = Za;
  c.PMID = $a;
  c.PURL = gb;
  c.UPC = bb;
  c.URL = cb;
  c.URN = db;
  c.IsCitedBy = va;
  c.Cites = z;
  c.IsSupplementTo = ya;
  c.IsSupplementedBy = X;
  c.IsContinuedBy = ka;
  c.Continues = Aa;
  c.IsNewVersionOf = R;
  c.IsPreviousVersionOf = ia;
  c.IsPartOf = Da;
  c.HasPart = na;
  c.IsReferencedBy = ua;
  c.References = qa;
  c.IsDocumentedBy = Ba;
  c.Documents = Ha;
  c.IsCompiledBy = ea;
  c.Compiles = ma;
  c.IsVariantFormOf = da;
  c.IsOriginalFormOf = H;
  c.IsIdenticalTo = aa;
  c.HasMetadata = sa;
  c.IsMetadataFor = ha;
  c.Reviews = Ea;
  c.IsReviewedBy = Pa;
  c.IsDerivedFrom = Q;
  c.IsSourceOf = za;
  c.Audiovisual = K;
  c.Dataset = M;
  c.Event = L;
  c.Image = U;
  c.InteractiveResource = V;
  c.Model = J;
  c.PhysicalObject = v;
  c.ResourceCollection = D;
  c.Service = O;
  c.Software = B;
  c.Sound = G;
  c.Text = P;
  c.Workflow = Y;
  c.Other = pa;

  c.altIdToId = function (m) {
    return {
      identifier: m.alternateIdentifier,
      identifierType: m.alternateIdentifierType
    };
  };

  c.showIdentifierType = sb;
  c.boundedEnumIdentifierType = Cb;
  c.identifierTypeReadForeign = fb;
  c.showRelationType = rb;
  c.boundedEnumRelationType = zb;
  c.showResourceTypeGeneral = kb;
  c.boundedEnumResourceTypeGeneral = yb;
})(PS);

(function (a) {
  a["Type.Data.Row"] = a["Type.Data.Row"] || {};
  a = a["Type.Data.Row"];

  var c = function () {
    function e() {}

    e.value = new e();
    return e;
  }();

  a.RProxy = c;
})(PS);

(function (a) {
  a["DataCite.JSON.Decode.Simple"] = a["DataCite.JSON.Decode.Simple"] || {};
  var c = a["DataCite.JSON.Decode.Simple"],
      e = a["Control.Applicative"],
      g = a["Control.Bind"],
      f = a["Control.Monad"],
      l = a["Control.Monad.Error.Class"],
      p = a["Control.Monad.Except"],
      k = a["Control.Monad.Except.Trans"],
      n = a["Control.Monad.Writer"],
      r = a["Control.Monad.Writer.Class"],
      w = a["Control.Monad.Writer.Trans"],
      b = a["Control.Plus"],
      h = a["Data.Array.NonEmpty"],
      d = a["Data.Array.NonEmpty.Internal"],
      q = a["Data.Either"],
      x = a["Data.Either.Extra"],
      t = a["Data.Foldable"],
      E = a["Data.Functor"],
      y = a["Data.Identity"],
      u = a["Data.Lazy"],
      F = a["Data.List.NonEmpty"],
      C = a["Data.List.Types"],
      N = a["Data.Maybe"],
      I = a["Data.Monoid"],
      K = a["Data.Newtype"],
      M = a["Data.String.NonEmpty.Internal"],
      L = a["Data.Symbol"],
      U = a["Data.Traversable"],
      V = a["Data.Tuple"],
      J = a["Data.Unfoldable"],
      v = a["DataCite.JSON.Util"],
      D = a["DataCite.Types.Common"],
      O = a.Foreign,
      B = a["Foreign.Index"],
      G = a["Simple.JSON"];
  a = a["Type.Data.Row"];

  var P = new K.Newtype(function (ca) {
    return ca;
  }, function (ca) {
    return ca;
  }),
      Y = new K.Newtype(function (ca) {
    return ca;
  }, function (ca) {
    return ca;
  }),
      pa = w.monadTellWriterT(I.monoidArray)(y.monadIdentity),
      va = w.monadWriterT(I.monoidArray)(y.monadIdentity),
      z = k.monadThrowExceptT(va),
      ya = k.monadTellExceptT(pa),
      X = k.bindExceptT(va),
      ka = k.applicativeExceptT(va),
      Aa = function Aa(ca) {
    return function (la) {
      var A = n.runWriter(K.unwrap(P)(k.runExceptT(K.unwrap(Y)(la))));
      if (A.value0 instanceof q.Left) return g.discard(g.discardUnit)(X)(r.tell(ya)(F.toUnfoldable(J.unfoldableArray)(A.value0.value0)))(function () {
        return e.pure(ka)(ca);
      });
      if (A.value0 instanceof q.Right) return la;
      throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 70, column 28 - line 74, column 24): " + [A.value0.constructor.name]);
    };
  },
      R = function R(ca) {
    return O.isNull(ca) || O.isUndefined(ca);
  },
      ia = function ia(ca) {
    var la = e.pure(ca.Applicative0()),
        A = K.unwrap(y.newtypeIdentity);
    return function (W) {
      return la(A(W));
    };
  },
      Da = function Da(ca) {
    var la = ia(ca),
        A = K.unwrap(k.newtypeExceptT);
    return function (W) {
      return k.ExceptT(la(A(W)));
    };
  },
      na = function na(ca) {
    var la = Da(va),
        A = G["read'"](ca);
    return function (W) {
      return la(A(W));
    };
  },
      ua = function ua(ca) {
    return Aa("")(na(G.readString)(ca));
  },
      qa = function qa(ca) {
    return function (la) {
      return g.bind(X)(ua(la))(function (A) {
        A = M.fromString(A);
        if (A instanceof N.Just) return e.pure(ka)(A.value0);
        if (A instanceof N.Nothing) return l.throwError(z)(e.pure(C.applicativeNonEmptyList)(O.ForeignError.create("Nonempty string expected in:\n" + u.force(ca))));
        throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 194, column 3 - line 197, column 55): " + [A.constructor.name]);
      });
    };
  },
      Ba = function Ba(ca) {
    return function (la) {
      return g.bind(X)(qa(ca)(la.alternateIdentifier))(function (A) {
        var W = na(D.identifierTypeReadForeign)(la.alternateIdentifierType);
        return g.bind(X)(Aa(D.Handle.value)(W))(function (ra) {
          return e.pure(ka)(D.altIdToId({
            alternateIdentifier: A,
            alternateIdentifierType: ra
          }));
        });
      });
    };
  },
      Ha = function Ha(ca) {
    return function (la) {
      return function (A) {
        return Ba(la)(A);
      };
    };
  },
      ea = function ea(ca) {
    return function (la) {
      return g.bind(X)(qa(ca)(la.identifier))(function (A) {
        var W = na(D.identifierTypeReadForeign)(la.identifierType);
        return g.bind(X)(Aa(D.Handle.value)(W))(function (ra) {
          return e.pure(ka)({
            identifier: A,
            identifierType: ra
          });
        });
      });
    };
  },
      ma = function ma(ca) {
    return function (la) {
      return function (A) {
        return ea(la)(A);
      };
    };
  },
      da = function () {
    var ca = Da(va);
    return function (la) {
      return ca(O.readArray(la));
    };
  }(),
      H = function H(ca) {
    return function (la) {
      return function (A) {
        return g.bind(X)(da(A))(function (W) {
          var ra = E.map(E.functorArray)(function () {
            var ta = G["read'"](ca);
            return function (wa) {
              return p.runExcept(ta(wa));
            };
          }())(W);
          return g.discard(g.discardUnit)(X)(t.traverse_(ka)(t.foldableArray)(r.tell(ya))(E.map(E.functorArray)(F.toUnfoldable(J.unfoldableArray))(x.catLefts(f.monadArray)(b.plusArray)(ra))))(function () {
            var ta = x.catRights(f.monadArray)(b.plusArray)(ra);
            ta = h.fromArray(ta);
            if (ta instanceof N.Just) return e.pure(ka)(ta.value0);
            if (ta instanceof N.Nothing) return l.throwError(z)(e.pure(C.applicativeNonEmptyList)(O.ForeignError.create("Nonempty array expected in:\n" + u.force(la))));
            throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 206, column 3 - line 209, column 54): " + [ta.constructor.name]);
          });
        });
      };
    };
  },
      aa = function aa(ca) {
    return function (la) {
      return function (A) {
        return g.bind(X)(da(A))(function (W) {
          W = E.map(E.functorArray)(function () {
            var wa = K.unwrap(P),
                Ia = K.unwrap(Y),
                Ka = la(ca);
            return function (Ga) {
              return n.runWriter(wa(k.runExceptT(Ia(Ka(Ga)))));
            };
          }())(W);
          var ra = E.map(E.functorArray)(V.fst)(W),
              ta = E.map(E.functorArray)(V.snd)(W);
          return g.discard(g.discardUnit)(X)(t.traverse_(ka)(t.foldableArray)(r.tell(ya))(E.map(E.functorArray)(F.toUnfoldable(J.unfoldableArray))(x.catLefts(f.monadArray)(b.plusArray)(ra))))(function () {
            return g.discard(g.discardUnit)(X)(t.traverse_(ka)(t.foldableArray)(r.tell(ya))(ta))(function () {
              var wa = x.catRights(f.monadArray)(b.plusArray)(ra);
              wa = h.fromArray(wa);
              if (wa instanceof N.Just) return e.pure(ka)(wa.value0);
              if (wa instanceof N.Nothing) return l.throwError(z)(e.pure(C.applicativeNonEmptyList)(O.ForeignError.create("Nonempty array expected in:\n" + u.force(ca))));
              throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 224, column 3 - line 227, column 54): " + [wa.constructor.name]);
            });
          });
        });
      };
    };
  },
      sa = function sa(ca) {
    var la = Da(va),
        A = G["readJSON'"](ca);
    return function (W) {
      return la(A(W));
    };
  },
      ha = function ha(ca) {
    return function (la) {
      return Da(va)(B.readProp(ca)(la));
    };
  },
      Ea = function Ea(ca) {
    return function (la) {
      return g.bind(X)(ha("title")(la))(function (A) {
        return g.bind(X)(qa(ca)(A))(function (W) {
          return e.pure(ka)({
            title: W
          });
        });
      });
    };
  },
      Pa = a.RProxy.value,
      Q = function Q(ca) {
    return function (la) {
      return u.defer(function (A) {
        return "Couldn't read for " + (la + (" in: \n" + u.force(ca)));
      });
    };
  },
      za = function za(ca) {
    var la = v.tryPrettyJson(ca),
        A = Q(la),
        W = function W(ta) {
      return R(ta.type) && R(ta.identifier) && R(ta.identifierType) ? e.pure(ka)(N.Nothing.value) : g.bind(X)(na(G.readString)(ta.type))(function (wa) {
        var Ia = M.fromString(wa);
        return g.bind(X)(ea(A("container"))(ta))(function (Ka) {
          return e.pure(ka)(N.Just.create({
            type: Ia,
            identifier: Ka.identifier,
            identifierType: Ka.identifierType
          }));
        });
      });
    },
        ra = function ra(ta) {
      return U.traverse(d.traversableNonEmptyArray)(ka)(function (wa) {
        return g.bind(X)(qa(A("Creator name"))(wa.name))(function (Ia) {
          return g.bind(X)(U.traverse(U.traversableArray)(ka)(qa(A("Creator affiliations")))(wa.affiliation))(function (Ka) {
            return e.pure(ka)({
              name: Ia,
              nameType: g.bind(N.bindMaybe)(wa.nameType)(M.fromString),
              givenName: g.bind(N.bindMaybe)(wa.givenName)(M.fromString),
              familyName: g.bind(N.bindMaybe)(wa.familyName)(M.fromString),
              affiliation: Ka
            });
          });
        });
      })(ta);
    };

    return g.bind(X)(sa(G.readRecord()(G.readFieldsCons(new L.IsSymbol(function () {
      return "data";
    }))(G.readRecord()(G.readFieldsCons(new L.IsSymbol(function () {
      return "attributes";
    }))(G.readRecord()(G.readFieldsCons(new L.IsSymbol(function () {
      return "alternateIdentifiers";
    }))(G.readArray(G.readRecord()(G.readFieldsCons(new L.IsSymbol(function () {
      return "alternateIdentifier";
    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
      return "alternateIdentifierType";
    }))(G.readForeign)(G.readFieldsNil)()())()())))(G.readFieldsCons(new L.IsSymbol(function () {
      return "container";
    }))(G.readRecord()(G.readFieldsCons(new L.IsSymbol(function () {
      return "identifier";
    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
      return "identifierType";
    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
      return "type";
    }))(G.readForeign)(G.readFieldsNil)()())()())()()))(G.readFieldsCons(new L.IsSymbol(function () {
      return "creators";
    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
      return "doi";
    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
      return "identifiers";
    }))(G.readArray(G.readRecord()(G.readFieldsCons(new L.IsSymbol(function () {
      return "identifier";
    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
      return "identifierType";
    }))(G.readForeign)(G.readFieldsNil)()())()())))(G.readFieldsCons(new L.IsSymbol(function () {
      return "prefix";
    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
      return "publisher";
    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
      return "suffix";
    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
      return "titles";
    }))(G.readForeign)(G.readFieldsNil)()())()())()())()())()())()())()())()())()()))(G.readFieldsCons(new L.IsSymbol(function () {
      return "id";
    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
      return "relationships";
    }))(G.readRecord()(G.readFieldsNil))(G.readFieldsCons(new L.IsSymbol(function () {
      return "type";
    }))(G.readForeign)(G.readFieldsNil)()())()())()())()()))(G.readFieldsNil)()()))(ca))(function (ta) {
      return g.bind(X)(qa(A("data.id"))(ta.data.id))(function (wa) {
        return g.bind(X)(qa(A("data.type"))(ta.data.type))(function (Ia) {
          return g.bind(X)(qa(A("data.attributes.doi"))(ta.data.attributes.doi))(function (Ka) {
            return g.bind(X)(qa(A("data.attributes.prefix"))(ta.data.attributes.prefix))(function (Ga) {
              return g.bind(X)(qa(A("data.attributes.suffix"))(ta.data.attributes.suffix))(function (Sa) {
                return g.bind(X)(U.traverse(U.traversableArray)(ka)(ma(Pa)(A("data.attributes.identifiers")))(ta.data.attributes.identifiers))(function (Ua) {
                  return g.bind(X)(U.traverse(U.traversableArray)(ka)(Ha(Pa)(A("data.attributes.alternateIdentifiers")))(ta.data.attributes.alternateIdentifiers))(function (Za) {
                    return g.bind(X)(H(G.readRecord()(G.readFieldsCons(new L.IsSymbol(function () {
                      return "affiliation";
                    }))(G.readArray(G.readForeign))(G.readFieldsCons(new L.IsSymbol(function () {
                      return "familyName";
                    }))(G.readMaybe(G.readString))(G.readFieldsCons(new L.IsSymbol(function () {
                      return "givenName";
                    }))(G.readMaybe(G.readString))(G.readFieldsCons(new L.IsSymbol(function () {
                      return "name";
                    }))(G.readForeign)(G.readFieldsCons(new L.IsSymbol(function () {
                      return "nameType";
                    }))(G.readMaybe(G.readString))(G.readFieldsNil)()())()())()())()())()()))(A("data.attributes.creators"))(ta.data.attributes.creators))(function ($a) {
                      return g.bind(X)(ra($a))(function (gb) {
                        return g.bind(X)(aa(A("data.attributes.titles"))(Ea)(ta.data.attributes.titles))(function (bb) {
                          return g.bind(X)(qa(A("data.attributes.publisher"))(ta.data.attributes.publisher))(function (cb) {
                            return g.bind(X)(W(ta.data.attributes.container))(function (db) {
                              return e.pure(ka)({
                                data: {
                                  id: wa,
                                  type: Ia,
                                  attributes: {
                                    doi: Ka,
                                    prefix: Ga,
                                    suffix: Sa,
                                    identifiers: Ua,
                                    alternateIdentifiers: Za,
                                    creators: gb,
                                    titles: bb,
                                    publisher: cb,
                                    container: db
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
  };

  c.readRecordJSON = function (ca) {
    return k.runExceptT(K.unwrap(Y)(za(v.preParse(ca))));
  };

  c.newtypeJSONWithErr = P;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var c = a["Effect.Class"],
      e = a["Effect.Console"];

  a["Effect.Class.Console"].log = function (g) {
    var f = c.liftEffect(g);
    return function (l) {
      return f(e.log(l));
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
      e = a["Effect.Now"],
      g = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(g.toDateTime)(e.now);
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
      e = a["Data.Functor"],
      g = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (f) {
    return c.classList(e.map(e.functorArray)(g.Just.create)(f));
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
  a.prodPreview = "prodPreview";
  a.prodPreviewHeader = "prodPreviewHeader";
  a.locPreview = "locPreview";
  a.locPreviewHeader = "locPreviewHeader";
  a.downloadBtn = "downloadBtn";
  a.clipBtn = "clipBtn";
  a.previewButtons = "previewButtons";
  a.addItem = "addItem";
  a.deleteItem = "deleteItem";
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.Util"] = a["Metajelo.CSS.UI.Util"] || {};
  var c = a["Metajelo.CSS.UI.Util"],
      e = a["Concur.React.Props"];
  c.mjUiClassPfx = "metajelo-ui_";

  c.mjUiClass = function (g) {
    return e.className("metajelo-ui_" + g);
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassProps"] = a["Metajelo.CSS.UI.ClassProps"] || {};
  var c = a["Metajelo.CSS.UI.ClassProps"],
      e = a["Metajelo.CSS.Common.ClassNames"],
      g = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      f = a["Metajelo.CSS.UI.Util"],
      l = f.mjUiClass(e.versioningHeader),
      p = f.mjUiClass(e.versioning),
      k = f.mjUiClass(e.url),
      n = f.mjUiClass(e.titleList),
      r = f.mjUiClass(e.titleHeader),
      w = f.mjUiClass(e.title),
      b = f.mjUiClass(e.sustainabilityHeader),
      h = f.mjUiClass(e.sustainability),
      d = f.mjUiClass(e.superOrgHeader),
      q = f.mjUiClass(e.superOrg),
      x = f.mjUiClass(g.sideBarTab),
      t = f.mjUiClass(g.sideBar),
      E = f.mjUiClass(g.sideBarMenu),
      y = f.mjUiClass(g.sideBarGrid),
      u = f.mjUiClass(g.sideBarCol),
      F = f.mjUiClass(g.sideBar),
      C = f.mjUiClass(e.resourceTypeHeader),
      N = f.mjUiClass(e.resourceTypeGenHeader),
      I = f.mjUiClass(e.resourceTypeGen),
      K = f.mjUiClass(e.resourceTypeDescrHeader),
      M = f.mjUiClass(e.resourceTypeDescr),
      L = f.mjUiClass(e.resourceType),
      U = f.mjUiClass(e.resourceMDSourceHeader),
      V = f.mjUiClass(e.resourceMDSource),
      J = f.mjUiClass(e.resourceIdHeader),
      v = f.mjUiClass(e.resourceId),
      D = f.mjUiClass(e.relatedIdsHeader),
      O = f.mjUiClass(e.relatedIds),
      B = f.mjUiClass(e.relatedIdList),
      G = f.mjUiClass(e.relatedIdHeader),
      P = f.mjUiClass(e.relatedId),
      Y = f.mjUiClass(e.relTypeHeader),
      pa = f.mjUiClass(e.relType),
      va = f.mjUiClass(e.recordHeader),
      z = f.mjUiClass(e.record),
      ya = f.mjUiClass(g.recPreviewHeader),
      X = f.mjUiClass(g.recPreview),
      ka = f.mjUiClass(g.recFlexBox),
      Aa = f.mjUiClass(g.recEditor),
      R = f.mjUiClass(e.pubyearHeader),
      ia = f.mjUiClass(e.pubyear),
      Da = f.mjUiClass(e.productsHeader),
      na = f.mjUiClass(e.products),
      ua = f.mjUiClass(e.productList),
      qa = f.mjUiClass(e.productHeader),
      Ba = f.mjUiClass(e.product),
      Ha = f.mjUiClass(g.prodPreviewHeader),
      ea = f.mjUiClass(g.prodPreview),
      ma = f.mjUiClass(g.previewButtons),
      da = f.mjUiClass(e.policyTypeHeader),
      H = f.mjUiClass(e.policyType),
      aa = f.mjUiClass(e.policyHeader),
      sa = f.mjUiClass(e.policy),
      ha = f.mjUiClass(g.page),
      Ea = f.mjUiClass(e.missionStatementHeader),
      Pa = f.mjUiClass(e.missionStatement),
      Q = f.mjUiClass(e.locationHeader),
      za = f.mjUiClass(e.location),
      ca = f.mjUiClass(g.locPreviewHeader),
      la = f.mjUiClass(g.locPreview),
      A = f.mjUiClass(e.institutionTypeHeader),
      W = f.mjUiClass(e.institutionType),
      ra = f.mjUiClass(e.institutionPolicyHeader),
      ta = f.mjUiClass(e.institutionPolicy),
      wa = f.mjUiClass(e.institutionPoliciesHeader),
      Ia = f.mjUiClass(e.institutionPolicies),
      Ka = f.mjUiClass(e.institutionNameHeader),
      Ga = f.mjUiClass(e.institutionName),
      Sa = f.mjUiClass(e.institutionId),
      Ua = f.mjUiClass(e.institutionContactHeader),
      Za = f.mjUiClass(e.institutionContact),
      $a = f.mjUiClass(e.identifier),
      gb = f.mjUiClass(e.idTypeHeader),
      bb = f.mjUiClass(e.idType),
      cb = f.mjUiClass(e.idHeader),
      db = f.mjUiClass(e.id),
      ib = f.mjUiClass(e.fundingStatementHeader),
      Qa = f.mjUiClass(e.fundingStatement),
      kb = f.mjUiClass(e.formatListHeader),
      Xa = f.mjUiClass(e.formatList),
      rb = f.mjUiClass(e.formatHeader),
      Ta = f.mjUiClass(e.format),
      sb = f.mjUiClass(g.downloadBtn),
      tb = f.mjUiClass(g.deleteItem),
      lb = f.mjUiClass(g.dateHeader),
      ub = f.mjUiClass(g.date),
      mb = f.mjUiClass(e.creatorList),
      vb = f.mjUiClass(e.creatorHeader),
      Wa = f.mjUiClass(e.creator),
      nb = f.mjUiClass(e.contactTypeHeader),
      wb = f.mjUiClass(e.contactType),
      Ra = f.mjUiClass(e.contactEmailHeader),
      ob = f.mjUiClass(e.contactEmail),
      Ma = f.mjUiClass(g.clipBtn),
      fb = f.mjUiClass(e.basicMetadataHeader),
      hb = f.mjUiClass(e.basicMetadata),
      pb = f.mjUiClass(e.appliesHeader),
      qb = f.mjUiClass(e.applies),
      yb = f.mjUiClass(g.addItem);
  c.page = ha;
  c.date = ub;
  c.dateHeader = lb;
  c.recFlexBox = ka;
  c.recPreview = X;
  c.recPreviewHeader = ya;
  c.recEditor = Aa;
  c.sideBar = F;
  c.sideBarNav = t;
  c.sideBarTab = x;
  c.sideBarGrid = y;
  c.sideBarMenu = E;
  c.sideBarCol = u;
  c.prodPreview = ea;
  c.prodPreviewHeader = Ha;
  c.locPreview = la;
  c.locPreviewHeader = ca;
  c.downloadBtn = sb;
  c.clipBtn = Ma;
  c.previewButtons = ma;
  c.addItem = yb;
  c.deleteItem = tb;
  c.record = z;
  c.recordHeader = va;
  c.product = Ba;
  c.productHeader = qa;
  c.productList = ua;
  c.productsHeader = Da;
  c.products = na;
  c.location = za;
  c.locationHeader = Q;
  c.sustainability = h;
  c.sustainabilityHeader = b;
  c.missionStatement = Pa;
  c.missionStatementHeader = Ea;
  c.fundingStatement = Qa;
  c.fundingStatementHeader = ib;
  c.identifier = $a;
  c.id = db;
  c.idHeader = cb;
  c.idType = bb;
  c.idTypeHeader = gb;
  c.relatedId = P;
  c.relatedIdHeader = G;
  c.relType = pa;
  c.relTypeHeader = Y;
  c.relatedIdList = B;
  c.relatedIdsHeader = D;
  c.relatedIds = O;
  c.basicMetadata = hb;
  c.basicMetadataHeader = fb;
  c.creator = Wa;
  c.creatorHeader = vb;
  c.creatorList = mb;
  c.pubyear = ia;
  c.pubyearHeader = R;
  c.title = w;
  c.titleHeader = r;
  c.titleList = n;
  c.resourceId = v;
  c.resourceIdHeader = J;
  c.resourceType = L;
  c.resourceTypeHeader = C;
  c.resourceTypeGen = I;
  c.resourceTypeGenHeader = N;
  c.resourceTypeDescr = M;
  c.resourceTypeDescrHeader = K;
  c.resourceMDSource = V;
  c.resourceMDSourceHeader = U;
  c.institutionName = Ga;
  c.institutionNameHeader = Ka;
  c.institutionId = Sa;
  c.institutionType = W;
  c.institutionTypeHeader = A;
  c.institutionContact = Za;
  c.institutionContactHeader = Ua;
  c.contactEmail = ob;
  c.contactEmailHeader = Ra;
  c.contactType = wb;
  c.contactTypeHeader = nb;
  c.institutionPolicy = ta;
  c.institutionPolicyHeader = ra;
  c.institutionPolicies = Ia;
  c.institutionPoliciesHeader = wa;
  c.policy = sa;
  c.policyHeader = aa;
  c.policyType = H;
  c.policyTypeHeader = da;
  c.applies = qb;
  c.appliesHeader = pb;
  c.superOrg = q;
  c.superOrgHeader = d;
  c.versioning = p;
  c.versioningHeader = l;
  c.format = Ta;
  c.formatHeader = rb;
  c.formatList = Xa;
  c.formatListHeader = kb;
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
      e = a["Concur.React.Props"],
      g = a["Data.Functor"],
      f = a["Metajelo.CSS.Common.Util"],
      l = function l(p) {
    return "metajelo_" + p;
  };

  a = function () {
    var p = g.map(g.functorArray)(l);
    return function (k) {
      return f.cList(p(k));
    };
  }();

  c.mjWebClass = function (p) {
    return e.className("metajelo_" + p);
  };

  c.cList = a;
})(PS);

(function (a) {
  a["Metajelo.CSS.Web.ClassProps"] = a["Metajelo.CSS.Web.ClassProps"] || {};
  var c = a["Metajelo.CSS.Web.ClassProps"],
      e = a["Metajelo.CSS.Common.ClassNames"],
      g = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      f = a["Metajelo.CSS.Web.Util"];
  a = f.mjWebClass(e.versioning);
  f.mjWebClass(e.url);
  var l = f.mjWebClass(e.title),
      p = f.mjWebClass(e.sustainability),
      k = f.mjWebClass(e.superOrg),
      n = f.mjWebClass(e.resourceTypeGen),
      r = f.mjWebClass(e.resourceTypeDescr),
      w = f.mjWebClass(e.resourceType),
      b = f.mjWebClass(e.resourceId),
      h = f.mjWebClass(e.relatedIdsHeader),
      d = f.mjWebClass(e.relatedIdList),
      q = f.mjWebClass(e.relatedId),
      x = f.mjWebClass(e.relType),
      t = f.mjWebClass(e.recordId),
      E = f.mjWebClass(e.record),
      y = f.mjWebClass(e.pubyear),
      u = f.mjWebClass(e.productsHeader),
      F = f.mjWebClass(e.productList),
      C = f.mjWebClass(g.productGroup),
      N = f.mjWebClass(g.productCitation),
      I = f.mjWebClass(e.product),
      K = f.mjWebClass(e.policyType),
      M = f.mjWebClass(e.policy),
      L = f.cList([e.url, e.missionStatement]),
      U = f.mjWebClass(e.institutionType),
      V = f.mjWebClass(e.institutionPolicy),
      J = f.mjWebClass(e.institutionPolicies),
      v = f.mjWebClass(e.institutionName),
      D = f.mjWebClass(e.institutionId),
      O = f.mjWebClass(e.institutionContact),
      B = f.mjWebClass(e.identifier),
      G = f.cList([e.url, g.idUrl]),
      P = f.mjWebClass(e.idType),
      Y = f.cList([e.url, e.fundingStatement]),
      pa = f.mjWebClass(e.formatList),
      va = f.mjWebClass(e.format),
      z = f.mjWebClass(g.errorDisplayBox),
      ya = f.mjWebClass(g.errorDisplay),
      X = f.mjWebClass(e.creatorList),
      ka = f.mjWebClass(e.creator),
      Aa = f.mjWebClass(e.contactType),
      R = f.mjWebClass(e.contactEmail);
  e = f.mjWebClass(e.basicMetadata);
  g = f.mjWebClass(g.appliesInfo);
  c.productGroup = C;
  c.productCitation = N;
  c.appliesInfo = g;
  c.idUrl = G;
  c.errorDisplayBox = z;
  c.errorDisplay = ya;
  c.record = E;
  c.recordId = t;
  c.product = I;
  c.productList = F;
  c.productsHeader = u;
  c.sustainability = p;
  c.missionStatement = L;
  c.fundingStatement = Y;
  c.identifier = B;
  c.idType = P;
  c.relatedId = q;
  c.relType = x;
  c.relatedIdList = d;
  c.relatedIdsHeader = h;
  c.basicMetadata = e;
  c.creator = ka;
  c.creatorList = X;
  c.pubyear = y;
  c.title = l;
  c.resourceId = b;
  c.resourceType = w;
  c.resourceTypeGen = n;
  c.resourceTypeDescr = r;
  c.institutionName = v;
  c.institutionId = D;
  c.institutionType = U;
  c.institutionContact = O;
  c.contactEmail = R;
  c.contactType = Aa;
  c.institutionPolicy = V;
  c.institutionPolicies = J;
  c.policy = M;
  c.policyType = K;
  c.superOrg = k;
  c.versioning = a;
  c.format = va;
  c.formatList = pa;
})(PS);

(function (a) {
  a["Metajelo.SchemaInfo"] = a["Metajelo.SchemaInfo"] || {};
  var c = a["Metajelo.SchemaInfo"],
      e = a["Foreign.Object"];
  a = e.fromHomogeneous()({
    identifierTypeSTyp: "The type of the RelatedIdentifier.",
    relationTypeSTyp: "Description of the relationship of the resource being registered (A) and the related resource (B).",
    resourceTypeSTyp: "The general type of a resource."
  });
  var g = e.fromHomogeneous()({
    recordTypeCTyp: "metadata about the publication and links to unlimited number of suppementary products"
  }),
      f = e.fromHomogeneous()({
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
  c.descrAttrMap = e;
  c.descrCTypMap = g;
  c.descrEleMap = f;
  c.descrSTypMap = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var c = a["Metajelo.Types"],
      e = a["Data.Bounded"],
      g = a["Data.Enum"],
      f = a["Data.Eq"],
      l = a["Data.Generic.Rep"],
      p = a["Data.Generic.Rep.Bounded"],
      k = a["Data.Generic.Rep.Enum"],
      n = a["Data.Generic.Rep.Eq"],
      r = a["Data.Generic.Rep.Ord"],
      w = a["Data.Generic.Rep.Show"],
      b = a["Data.Ord"],
      h = a["Data.Show"],
      d = a["Data.Symbol"],
      q = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      x = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      t = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      E = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      y = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      u = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      F = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      C = function () {
    function R() {}

    R.value = new R();
    return R;
  }();

  a = function () {
    function R(ia) {
      this.value0 = ia;
    }

    R.create = function (ia) {
      return new R(ia);
    };

    return R;
  }();

  var N = function () {
    function R(ia) {
      this.value0 = ia;
    }

    R.create = function (ia) {
      return new R(ia);
    };

    return R;
  }(),
      I = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      K = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      M = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      L = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      U = new h.Show(function (R) {
    if (R instanceof I) return "commercial";
    if (R instanceof K) return "non-profit";
    if (R instanceof M) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 102, column 1 - line 105, column 37): " + [R.constructor.name]);
  }),
      V = new h.Show(function (R) {
    return "dataCustodian";
  }),
      J = new l.Generic(function (R) {
    if (R instanceof q) return new l.Inl(l.NoArguments.value);
    if (R instanceof x) return new l.Inr(new l.Inl(l.NoArguments.value));
    if (R instanceof t) return new l.Inr(new l.Inr(new l.Inl(l.NoArguments.value)));
    if (R instanceof E) return new l.Inr(new l.Inr(new l.Inr(new l.Inl(l.NoArguments.value))));
    if (R instanceof y) return new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inl(l.NoArguments.value)))));
    if (R instanceof u) return new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inl(l.NoArguments.value))))));
    if (R instanceof F) return new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inl(l.NoArguments.value)))))));
    if (R instanceof C) return new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(l.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [R.constructor.name]);
  }, function (R) {
    if (R instanceof l.Inl) return q.value;
    if (R instanceof l.Inr && R.value0 instanceof l.Inl) return x.value;
    if (R instanceof l.Inr && R.value0 instanceof l.Inr && R.value0.value0 instanceof l.Inl) return t.value;
    if (R instanceof l.Inr && R.value0 instanceof l.Inr && R.value0.value0 instanceof l.Inr && R.value0.value0.value0 instanceof l.Inl) return E.value;
    if (R instanceof l.Inr && R.value0 instanceof l.Inr && R.value0.value0 instanceof l.Inr && R.value0.value0.value0 instanceof l.Inr && R.value0.value0.value0.value0 instanceof l.Inl) return y.value;
    if (R instanceof l.Inr && R.value0 instanceof l.Inr && R.value0.value0 instanceof l.Inr && R.value0.value0.value0 instanceof l.Inr && R.value0.value0.value0.value0 instanceof l.Inr && R.value0.value0.value0.value0.value0 instanceof l.Inl) return u.value;
    if (R instanceof l.Inr && R.value0 instanceof l.Inr && R.value0.value0 instanceof l.Inr && R.value0.value0.value0 instanceof l.Inr && R.value0.value0.value0.value0 instanceof l.Inr && R.value0.value0.value0.value0.value0 instanceof l.Inr && R.value0.value0.value0.value0.value0.value0 instanceof l.Inl) return F.value;
    if (R instanceof l.Inr && R.value0 instanceof l.Inr && R.value0.value0 instanceof l.Inr && R.value0.value0.value0 instanceof l.Inr && R.value0.value0.value0.value0 instanceof l.Inr && R.value0.value0.value0.value0.value0 instanceof l.Inr && R.value0.value0.value0.value0.value0.value0 instanceof l.Inr) return C.value;
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [R.constructor.name]);
  });

  h = new h.Show(function (R) {
    return R instanceof C ? "Terms of Use" : w.genericShow(J)(w.genericShowSum(w.genericShowConstructor(w.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Access";
    })))(w.genericShowSum(w.genericShowConstructor(w.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Collection";
    })))(w.genericShowSum(w.genericShowConstructor(w.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Data";
    })))(w.genericShowSum(w.genericShowConstructor(w.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Metadata";
    })))(w.genericShowSum(w.genericShowConstructor(w.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Preservation";
    })))(w.genericShowSum(w.genericShowConstructor(w.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Submission";
    })))(w.genericShowSum(w.genericShowConstructor(w.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Quality";
    })))(w.genericShowConstructor(w.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(R);
  });
  var v = new l.Generic(function (R) {
    if (R instanceof I) return new l.Inl(l.NoArguments.value);
    if (R instanceof K) return new l.Inr(new l.Inl(l.NoArguments.value));
    if (R instanceof M) return new l.Inr(new l.Inr(l.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [R.constructor.name]);
  }, function (R) {
    if (R instanceof l.Inl) return I.value;
    if (R instanceof l.Inr && R.value0 instanceof l.Inl) return K.value;
    if (R instanceof l.Inr && R.value0 instanceof l.Inr) return M.value;
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [R.constructor.name]);
  }),
      D = new l.Generic(function (R) {
    return l.NoArguments.value;
  }, function (R) {
    return L.value;
  }),
      O = new f.Eq(n.genericEq(J)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))),
      B = new b.Ord(function () {
    return O;
  }, function (R) {
    return function (ia) {
      return r.genericCompare(J)(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdConstructor(r.genericOrdNoArguments)))))))))(R)(ia);
    };
  }),
      G = new f.Eq(n.genericEq(v)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))),
      P = new b.Ord(function () {
    return G;
  }, function (R) {
    return function (ia) {
      return r.genericCompare(v)(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdConstructor(r.genericOrdNoArguments))))(R)(ia);
    };
  }),
      Y = new f.Eq(n.genericEq(D)(n.genericEqConstructor(n.genericEqNoArguments))),
      pa = new b.Ord(function () {
    return Y;
  }, function (R) {
    return function (ia) {
      return r.genericCompare(D)(r.genericOrdConstructor(r.genericOrdNoArguments))(R)(ia);
    };
  }),
      va = new g.Enum(function () {
    return B;
  }, k.genericPred(J)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments)))), k.genericSucc(J)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))),
      z = new g.Enum(function () {
    return P;
  }, k.genericPred(v)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments)))), k.genericSucc(v)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))),
      ya = new g.Enum(function () {
    return pa;
  }, k.genericPred(D)(k.genericEnumConstructor(k.genericEnumNoArguments)), k.genericSucc(D)(k.genericEnumConstructor(k.genericEnumNoArguments))),
      X = new e.Bounded(function () {
    return B;
  }, p.genericBottom(J)(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))), p.genericTop(J)(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopConstructor(p.genericTopNoArguments))))))))));
  f = new g.SmallBounded(function () {
    return X;
  });
  var ka = new e.Bounded(function () {
    return P;
  }, p.genericBottom(v)(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))), p.genericTop(v)(p.genericTopSum(p.genericTopSum(p.genericTopConstructor(p.genericTopNoArguments))))),
      Aa = new e.Bounded(function () {
    return pa;
  }, p.genericBottom(D)(p.genericBottomConstructor(p.genericBottomNoArguments)), p.genericTop(D)(p.genericTopConstructor(p.genericTopNoArguments)));
  e = new g.SmallBounded(function () {
    return Aa;
  });
  p = new g.BoundedEnum(function () {
    return X;
  }, function () {
    return va;
  }, k.genericCardinality(J)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))), k.genericFromEnum(J)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))), k.genericToEnum(J)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))));
  n = new g.BoundedEnum(function () {
    return ka;
  }, function () {
    return z;
  }, k.genericCardinality(v)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))), k.genericFromEnum(v)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))), k.genericToEnum(v)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))));
  g = new g.BoundedEnum(function () {
    return Aa;
  }, function () {
    return ya;
  }, k.genericCardinality(D)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)), k.genericFromEnum(D)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)), k.genericToEnum(D)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)));
  c.DataCustodian = L;
  c.Commercial = I;
  c.NonProfit = K;
  c.Governmental = M;
  c.FreeTextPolicy = a;
  c.RefPolicy = N;
  c.Access = q;
  c.Collection = x;
  c.Data = t;
  c.Metadata = E;
  c.Preservation = y;
  c.Submission = u;
  c.Quality = F;
  c.TermsOfUse = C;
  c.showInstitutionType = U;
  c.boundedEnumInstitutionType = n;
  c.showInstitutionContactType = V;
  c.boundedEnumInstitutionContactType = g;
  c.smallBoundedInstitutionContactType = e;
  c.showPolicyType = h;
  c.boundedEnumPolicyType = p;
  c.smallBoundedPolicyType = f;
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (c) {
    return function (e) {
      return function (g) {
        return function () {
          return g.parseFromString(e, c);
        };
      };
    };
  };
})(PS["Web.DOM.DOMParser"] = PS["Web.DOM.DOMParser"] || {});

(function (a) {
  a._documentElement = function (c) {
    return function (e) {
      return function () {
        return e[c];
      };
    };
  }("documentElement");

  a.getElementsByTagName = function (c) {
    return function (e) {
      return function () {
        return e.getElementsByTagName(c);
      };
    };
  };

  a._getElementsByTagNameNS = function (c) {
    return function (e) {
      return function (g) {
        return function () {
          return g.getElementsByTagNameNS(c, e);
        };
      };
    };
  };

  a.createElement = function (c) {
    return function (e) {
      return function () {
        return e.createElement(c);
      };
    };
  };

  a._createElementNS = function (c) {
    return function (e) {
      return function (g) {
        return function () {
          return g.createElementNS(c, e);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (c, e, g, f) {
    if ("undefined" !== typeof window) return g = window[g], null != g && f instanceof g ? e(f) : c;

    for (var l = f; null != l;) {
      l = Object.getPrototypeOf(l);
      var p = l.constructor.name;
      if (p === g) return e(f);
      if ("Object" === p) break;
    }

    return c;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var c = a["Web.Internal.FFI"],
      e = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (g) {
    return function (f) {
      return c._unsafeReadProtoTagged(e.Nothing.value, e.Just.create, g, f);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var c = a["Web.DOM.Document"],
      e = a["Web.DOM.Document"],
      g = a["Data.Functor"],
      f = a["Data.Nullable"],
      l = a.Effect,
      p = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var k = function () {
    var n = g.map(l.functorEffect)(f.toMaybe);
    return function (r) {
      return n(e._documentElement(r));
    };
  }();

  c.fromNode = a;
  c.toNonElementParentNode = p;
  c.documentElement = k;

  c.getElementsByTagNameNS = function (n) {
    return e._getElementsByTagNameNS(f.toNullable(n));
  };

  c.createElementNS = function (n) {
    return e._createElementNS(f.toNullable(n));
  };

  c.getElementsByTagName = e.getElementsByTagName;
  c.createElement = e.createElement;
})(PS);

(function (a) {
  var c = function c(e) {
    return function (g) {
      return g[e];
    };
  };

  a._prefix = c("prefix");
  a.localName = c("localName");
  a.tagName = c("tagName");

  a.setAttribute = function (e) {
    return function (g) {
      return function (f) {
        return function () {
          f.setAttribute(e, g);
          return {};
        };
      };
    };
  };

  a._getAttribute = function (e) {
    return function (g) {
      return function () {
        return g.getAttribute(e);
      };
    };
  };
})(PS["Web.DOM.Element"] = PS["Web.DOM.Element"] || {});

(function (a) {
  a["Web.DOM.Element"] = a["Web.DOM.Element"] || {};
  var c = a["Web.DOM.Element"],
      e = a["Web.DOM.Element"],
      g = a["Data.Functor"],
      f = a["Data.Nullable"],
      l = a.Effect,
      p = a["Unsafe.Coerce"],
      k = p.unsafeCoerce;
  p = p.unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  c.fromNode = a;
  c.toNode = p;
  c.toParentNode = k;

  c.prefix = function (n) {
    return f.toMaybe(e._prefix(n));
  };

  c.getAttribute = function (n) {
    var r = g.map(l.functorEffect)(f.toMaybe),
        w = e._getAttribute(n);

    return function (b) {
      return r(w(b));
    };
  };

  c.localName = e.localName;
  c.tagName = e.tagName;
  c.setAttribute = e.setAttribute;
})(PS);

(function (a) {
  a.toArray = function (c) {
    return function () {
      return [].slice.call(c);
    };
  };

  a._item = function (c) {
    return function (e) {
      return function () {
        return e.item(c);
      };
    };
  };
})(PS["Web.DOM.HTMLCollection"] = PS["Web.DOM.HTMLCollection"] || {});

(function (a) {
  a["Web.DOM.HTMLCollection"] = a["Web.DOM.HTMLCollection"] || {};
  var c = a["Web.DOM.HTMLCollection"],
      e = a["Web.DOM.HTMLCollection"],
      g = a["Data.Functor"],
      f = a["Data.Nullable"],
      l = a.Effect;

  c.item = function (p) {
    var k = g.map(l.functorEffect)(f.toMaybe),
        n = e._item(p);

    return function (r) {
      return k(n(r));
    };
  };

  c.toArray = e.toArray;
})(PS);

(function (a) {
  var c = function c(e) {
    return function (g) {
      return function () {
        return g[e];
      };
    };
  };

  a.nodeName = function (e) {
    return e.nodeName;
  };

  a._ownerDocument = c("ownerDocument");
  a.childNodes = c("childNodes");
  a.textContent = c("textContent");

  a.setTextContent = function (e) {
    return function (g) {
      return function () {
        g.textContent = e;
        return {};
      };
    };
  };

  a.appendChild = function (e) {
    return function (g) {
      return function () {
        return g.appendChild(e);
      };
    };
  };
})(PS["Web.DOM.Node"] = PS["Web.DOM.Node"] || {});

(function (a) {
  a["Web.DOM.Node"] = a["Web.DOM.Node"] || {};
  var c = a["Web.DOM.Node"],
      e = a["Web.DOM.Node"],
      g = a["Data.Functor"],
      f = a["Data.Nullable"],
      l = a.Effect;

  a = function () {
    var p = g.map(l.functorEffect)(f.toMaybe);
    return function (k) {
      return p(e._ownerDocument(k));
    };
  }();

  c.ownerDocument = a;
  c.nodeName = e.nodeName;
  c.childNodes = e.childNodes;
  c.textContent = e.textContent;
  c.setTextContent = e.setTextContent;
  c.appendChild = e.appendChild;
})(PS);

(function (a) {
  a["Web.DOM.DOMParser"] = a["Web.DOM.DOMParser"] || {};

  var c = a["Web.DOM.DOMParser"],
      e = a["Web.DOM.DOMParser"],
      g = a["Control.Applicative"],
      f = a["Control.Bind"],
      l = a["Data.Array"],
      p = a["Data.Either"],
      k = a["Data.Functor"],
      n = a["Data.Maybe"],
      r = a.Effect,
      w = a["Web.DOM.Document"],
      b = a["Web.DOM.Element"],
      h = a["Web.DOM.HTMLCollection"],
      d = a["Web.DOM.Node"],
      q = function q(t) {
    return function (E) {
      if (t instanceof n.Nothing) return new p.Right(E);
      if (t instanceof n.Just) return new p.Left(t.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [t.constructor.name]);
    };
  },
      x = function x(t) {
    return function () {
      var E = f.join(r.bindEffect)(k.map(r.functorEffect)(h.toArray)(w.getElementsByTagName("parsererror")(t)))();
      E = l.head(E);
      E = k.map(n.functorMaybe)(b.toNode)(E);
      if (E instanceof n.Nothing) E = g.pure(r.applicativeEffect)(n.Nothing.value);else if (E instanceof n.Just) E = k.map(r.functorEffect)(n.Just.create)(d.textContent(E.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [E.constructor.name]);
      return E();
    };
  };

  c.parseXMLFromString = function (t) {
    return function (E) {
      return function () {
        var y = e.parseFromString("application/xml")(t)(E)(),
            u = x(y)();
        return q(u)(y);
      };
    };
  };

  c.makeDOMParser = e.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (c) {
    return function (e) {
      return function (g) {
        return function (f) {
          return function (l) {
            return function (p) {
              return function () {
                return p.evaluate(c, e, g, f, l);
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
    return function (e) {
      return function () {
        return c.snapshotItem(e);
      };
    };
  };

  a.customNSResolver = function (c) {
    return {
      lookupNamespaceURI: c
    };
  };

  a.createNSResolver = function (c) {
    return function (e) {
      return e.createNSResolver(c);
    };
  };

  a.lookupNamespaceURIInternal = function (c) {
    return function (e) {
      return c.lookupNamespaceURI(e);
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
      e = a["Web.DOM.Document.XPath.ResultType"],
      g = a["Data.Eq"],
      f = a["Data.Maybe"],
      l = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      p = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      k = new g.Eq(function (n) {
    return function (r) {
      return n === r;
    };
  });

  c.res2SnapType = function (n) {
    return g.eq(k)(n)(e.unordered_node_snapshot_type) ? new f.Just(l.value) : g.eq(k)(n)(e.ordered_node_snapshot_type) ? new f.Just(p.value) : f.Nothing.value;
  };

  c.number_type = e.number_type;
  c.string_type = e.string_type;
  c.boolean_type = e.boolean_type;
  c.ordered_node_snapshot_type = e.ordered_node_snapshot_type;
  c.any_unordered_node_type = e.any_unordered_node_type;
})(PS);

(function (a) {
  a["Web.DOM.Document.XPath"] = a["Web.DOM.Document.XPath"] || {};

  var c = a["Web.DOM.Document.XPath"],
      e = a["Web.DOM.Document.XPath"],
      g = a["Control.Applicative"],
      f = a["Data.Array"],
      l = a["Data.Functor"],
      p = a["Data.Int"],
      k = a["Data.Maybe"],
      n = a["Data.Monoid"],
      r = a["Data.Natural"],
      w = a["Data.Nullable"],
      b = a["Data.Traversable"],
      h = a.Effect,
      d = a["Web.DOM.Document"],
      q = a["Web.DOM.Document.XPath.ResultType"],
      x = a["Web.DOM.Element"],
      t = a["Web.DOM.Node"],
      E = function () {
    var u = l.map(h.functorEffect)(function (F) {
      return r.intToNat(p.round(F));
    });
    return function (F) {
      return u(e.snapshotLengthInternal(F));
    };
  }(),
      y = function y(u) {
    return function (F) {
      return l.map(h.functorEffect)(w.toMaybe)(e.snapshotItemInternal(u)(p.toNumber(r.natToInt(F))));
    };
  };

  a = function () {
    var u = l.map(h.functorEffect)(w.toMaybe);
    return function (F) {
      return u(e.singleNodeValueInternal(F));
    };
  }();

  c.evaluate = function (u) {
    return function (F) {
      return function (C) {
        return function (N) {
          return function (I) {
            return function (K) {
              return e.evaluateInternal(u)(F)(w.toNullable(C))(N)(w.toNullable(I))(K);
            };
          };
        };
      };
    };
  };

  c.evaluateNumber = function (u) {
    return function (F) {
      return function (C) {
        return function (N) {
          return function (I) {
            return function () {
              var K = e.evaluateInternal(u)(F)(w.toNullable(C))(q.number_type)(w.toNullable(N))(I)();
              return e.numberValue(K)();
            };
          };
        };
      };
    };
  };

  c.evaluateString = function (u) {
    return function (F) {
      return function (C) {
        return function (N) {
          return function (I) {
            return function () {
              var K = e.evaluateInternal(u)(F)(w.toNullable(C))(q.string_type)(w.toNullable(N))(I)();
              return e.stringValue(K)();
            };
          };
        };
      };
    };
  };

  c.evaluateBoolean = function (u) {
    return function (F) {
      return function (C) {
        return function (N) {
          return function (I) {
            return function () {
              var K = e.evaluateInternal(u)(F)(w.toNullable(C))(q.boolean_type)(w.toNullable(N))(I)();
              return e.booleanValue(K)();
            };
          };
        };
      };
    };
  };

  c.singleNodeValue = a;

  c.snapshot = function (u) {
    var F = q.res2SnapType(e.resultType(u)),
        C = y(u);
    F = l.map(k.functorMaybe)(function (N) {
      return function () {
        var I = E(u)();
        I = r.natToInt(I);
        I = l.map(l.functorArray)(r.intToNat)(f.range(0)(I - 1 | 0));
        I = b.sequence(b.traversableArray)(h.applicativeEffect)(l.map(l.functorArray)(C)(I))();
        return f.catMaybes(I);
      };
    })(F);
    if (F instanceof k.Nothing) return g.pure(h.applicativeEffect)(n.mempty(n.monoidArray));
    if (F instanceof k.Just) return F.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [F.constructor.name]);
  };

  c.lookupNamespaceURI = function (u) {
    return function (F) {
      return w.toMaybe(e.lookupNamespaceURIInternal(u)(F));
    };
  };

  c.defaultNSResolver = function (u) {
    return function (F) {
      var C = function C(N) {
        return function () {
          var I = d.documentElement(N)();
          if (I instanceof k.Nothing) return u;
          if (I instanceof k.Just) return x.toNode(I.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [I.constructor.name]);
        };
      };

      return function () {
        var N = t.ownerDocument(u)(),
            I = function () {
          if (N instanceof k.Nothing) {
            var K = d.fromNode(u);
            if (K instanceof k.Nothing) return u;
            if (K instanceof k.Just) return C(K.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [K.constructor.name]);
          }

          if (N instanceof k.Just) return C(N.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [N.constructor.name]);
        }();

        return e.createNSResolver(I)(F);
      };
    };
  };

  c.customNSResolver = e.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var c = a["Metajelo.XPaths"],
      e = a["Control.Applicative"],
      g = a["Control.Bind"],
      f = a["Data.Array.NonEmpty"],
      l = a["Data.Array.NonEmpty.Internal"],
      p = a["Data.Either"],
      k = a["Data.Foldable"],
      n = a["Data.Functor"],
      r = a["Data.Maybe"],
      w = a["Data.String.Common"],
      b = a["Data.String.NonEmpty.Internal"],
      h = a["Data.Traversable"],
      d = a["Data.XPath"],
      q = a.Effect,
      x = a["Effect.Exception"],
      t = a["Web.DOM.DOMParser"],
      E = a["Web.DOM.Document"],
      y = a["Web.DOM.Document.XPath"],
      u = a["Web.DOM.Document.XPath.ResultType"],
      F = a["Web.DOM.Element"],
      C = a["Web.DOM.HTMLCollection"],
      N = d.pathAppendNSx(d.stringXPath)(d.root(d.stringXPath))("record");
  a = d.pathAppendNSx(d.stringXPath)(N)("relatedIdentifier");
  var I = d.pathAppendNSx(d.stringXPath)(N)("supplementaryProducts");
  I = d.pathAppendNSx(d.stringXPath)(I)("supplementaryProduct");

  var K = function K(O) {
    return function (B) {
      return {
        any: function any(G) {
          return function (P) {
            return function (Y) {
              return y.evaluate(P)(G)(B)(Y)(r.Nothing.value)(O);
            };
          };
        },
        num: function num(G) {
          return function (P) {
            return y.evaluateNumber(P)(G)(B)(r.Nothing.value)(O);
          };
        },
        str: function str(G) {
          return function (P) {
            return y.evaluateString(P)(G)(B)(r.Nothing.value)(O);
          };
        },
        bool: function bool(G) {
          return function (P) {
            return y.evaluateBoolean(P)(G)(B)(r.Nothing.value)(O);
          };
        },
        nodeMay: function nodeMay(G) {
          return function (P) {
            return g.bind(q.bindEffect)(y.evaluate(P)(G)(B)(u.any_unordered_node_type)(r.Nothing.value)(O))(y.singleNodeValue);
          };
        }
      };
    };
  },
      M = f["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      L = function L(O) {
    var B = function B(G) {
      return function () {
        var P = E.getElementsByTagNameNS(new r.Just(G))("record")(O)();
        return C.item(0)(P)();
      };
    };

    return function () {
      var G = E.getElementsByTagName("record")(O)();
      G = C.item(0)(G)();
      if (G instanceof r.Nothing) G = h.sequence(l.traversableNonEmptyArray)(q.applicativeEffect)(n.map(l.functorNonEmptyArray)(B)(M))(), G = g.join(r.bindMaybe)(k.find(l.foldableNonEmptyArray)(r.isJust)(G));else if (G instanceof r.Just) G = new r.Just(G.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 277, column 16 - line 281, column 38): " + [G.constructor.name]);
      return n.map(r.functorMaybe)(F.toNode)(G);
    };
  },
      U = d.pathAppendNSx(d.stringXPath)(N)("lastModified"),
      V = d.pathAppendNSx(d.stringXPath)(N)("identifier"),
      J = d.pathAppend(d.stringXPath)(V)(d.at(d.stringXPath)("identifierType")),
      v = function v(O) {
    var B = function B(G) {
      return r.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(G);
    };

    if (O instanceof r.Nothing) return e.pure(q.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (O instanceof r.Just) return n.map(q.functorEffect)(B)(F.getAttribute("xmlns")(O.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 185, column 3 - line 187, column 59): " + [O.constructor.name]);
  },
      D = function D(O) {
    return function (B) {
      var G = function G(P) {
        return function (Y) {
          return function (pa) {
            pa = y.lookupNamespaceURI(P)(pa);
            if (pa instanceof r.Nothing) return Y;
            if (pa instanceof r.Just) return pa.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 202, column 39 - line 204, column 20): " + [pa.constructor.name]);
          };
        };
      };

      return function () {
        var P = y.defaultNSResolver(O)(B)(),
            Y = F.fromNode(O);
        Y = v(Y)();
        return y.customNSResolver(G(P)(Y));
      };
    };
  };

  d = d.pathAppendNSx(d.stringXPath)(N)("date");
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
  c.idTypeRootAP = J;
  c.idRootP = V;
  c.dateRootP = d;
  c.lastModRootP = U;
  c.relIdRootP = a;
  c.sProdRootP = I;

  c.getDefaultParseEnv = function (O) {
    return function () {
      var B = t.makeDOMParser();
      B = t.parseXMLFromString(O)(B)();
      if (B instanceof p.Left) B = x["throw"]("XML parsing error: " + B.value0)();else if (B instanceof p.Right) B = B.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 245, column 13 - line 247, column 26): " + [B.constructor.name]);
      var G = L(B)();
      if (G instanceof r.Nothing) G = x["throw"]("Could not find <record> node!")();else if (G instanceof r.Just) G = G.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 249, column 14 - line 251, column 23): " + [G.constructor.name]);
      var P = F.fromNode(G);
      if (P instanceof r.Nothing) P = x["throw"]("<record> node could not be cast to an element!")();else if (P instanceof r.Just) P = P.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 252, column 14 - line 254, column 23): " + [P.constructor.name]);
      var Y = v(new r.Just(P))(),
          pa = D(G)(B)();
      pa = K(B)(new r.Just(pa));
      return {
        doc: B,
        ns: Y,
        recNode: G,
        recElem: P,
        xeval: pa,
        xevalRoot: {
          any: pa.any(G),
          num: pa.num(G),
          str: pa.str(G),
          bool: pa.bool(G),
          nodeMay: pa.nodeMay(G)
        }
      };
    };
  };

  c.unsafeSingleNodeValue = function (O) {
    return function (B) {
      return function (G) {
        return function () {
          var P = O.xeval.nodeMay(B)(G)();
          if (P instanceof r.Just) return P.value0;
          if (P instanceof r.Nothing) return x["throw"]("Couldn't find required node at: " + G)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 294, column 3 - line 296, column 40): " + [P.constructor.name]);
        };
      };
    };
  };

  c.readNonEmptyString = function (O) {
    return function (B) {
      B = b.fromString(w.trim(B));
      if (B instanceof r.Nothing) return p.Left.create("Empty string found for " + O);
      if (B instanceof r.Just) return new p.Right(B.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 303, column 3 - line 305, column 26): " + [B.constructor.name]);
    };
  };

  c.readNonEmptyArray = function (O) {
    return function (B) {
      B = f.fromArray(B);
      if (B instanceof r.Nothing) return p.Left.create("Empty array found for " + O);
      if (B instanceof r.Just) return new p.Right(B.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 310, column 3 - line 312, column 26): " + [B.constructor.name]);
    };
  };

  c.rightOrThrow = function (O) {
    if (O instanceof p.Right) return e.pure(q.applicativeEffect)(O.value0);
    if (O instanceof p.Left) return x["throw"](O.value0);
    throw Error("Failed pattern match at Metajelo.XPaths (line 315, column 19 - line 317, column 24): " + [O.constructor.name]);
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var c = a["Text.Parsing.StringParser"],
      e = a["Control.Alt"],
      g = a["Control.Alternative"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      p = a["Control.Bind"],
      k = a["Control.Monad"],
      n = a["Control.Monad.Rec.Class"],
      r = a["Control.Plus"],
      w = a["Data.Bifunctor"],
      b = a["Data.Boolean"],
      h = a["Data.Either"],
      d = a["Data.Functor"];
  a = a["Data.Show"];

  var q = function () {
    function I(K) {
      this.value0 = K;
    }

    I.create = function (K) {
      return new I(K);
    };

    return I;
  }();

  a = new a.Show(function (I) {
    return I.value0;
  });

  var x = new d.Functor(function (I) {
    return function (K) {
      var M = d.map(h.functorEither)(function (L) {
        return {
          result: I(L.result),
          suffix: L.suffix
        };
      });
      return function (L) {
        return M(K(L));
      };
    };
  }),
      t = function t(I) {
    return function (K) {
      return new h.Left({
        pos: K.pos,
        error: new q(I)
      });
    };
  },
      E = new l.Apply(function () {
    return x;
  }, function (I) {
    return function (K) {
      return function (M) {
        return p.bind(h.bindEither)(I(M))(function (L) {
          return p.bind(h.bindEither)(K(L.suffix))(function (U) {
            return f.pure(h.applicativeEither)({
              result: L.result(U.result),
              suffix: U.suffix
            });
          });
        });
      };
    };
  }),
      y = new p.Bind(function () {
    return E;
  }, function (I) {
    return function (K) {
      return function (M) {
        return p.bind(h.bindEither)(I(M))(function (L) {
          return K(L.result)(L.suffix);
        });
      };
    };
  }),
      u = new f.Applicative(function () {
    return E;
  }, function (I) {
    return function (K) {
      return new h.Right({
        result: I,
        suffix: K
      });
    };
  }),
      F = new k.Monad(function () {
    return u;
  }, function () {
    return y;
  });

  l = new n.MonadRec(function () {
    return F;
  }, function (I) {
    return function (K) {
      var M = function M(L) {
        if (L.result instanceof n.Loop) return new n.Loop({
          state: L.result.value0,
          str: L.suffix
        });
        if (L.result instanceof n.Done) return new n.Done({
          result: L.result.value0,
          suffix: L.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [L.constructor.name]);
      };

      return function (L) {
        return n.tailRecM(n.monadRecEither)(function (U) {
          return d.map(h.functorEither)(M)(I(U.state)(U.str));
        })({
          state: K,
          str: L
        });
      };
    };
  });
  var C = new e.Alt(function () {
    return x;
  }, function (I) {
    return function (K) {
      return function (M) {
        var L = I(M);

        if (L instanceof h.Left) {
          if (M.pos === L.value0.pos) return K(M);
          if (b.otherwise) return new h.Left({
            error: L.value0.error,
            pos: L.value0.pos
          });
        }

        return L;
      };
    };
  }),
      N = new r.Plus(function () {
    return C;
  }, t("No alternative"));
  e = new g.Alternative(function () {
    return u;
  }, function () {
    return N;
  });
  c.ParseError = q;

  c.runParser = function (I) {
    return function (K) {
      return w.bimap(h.bifunctorEither)(function (M) {
        return M.error;
      })(function (M) {
        return M.result;
      })(I({
        str: K,
        pos: 0
      }));
    };
  };

  c.fail = t;

  c["try"] = function (I) {
    return function (K) {
      return w.lmap(h.bifunctorEither)(function (M) {
        return {
          pos: K.pos,
          error: M.error
        };
      })(I(K));
    };
  };

  c.showParseError = a;
  c.functorParser = x;
  c.applyParser = E;
  c.applicativeParser = u;
  c.altParser = C;
  c.alternativeParser = e;
  c.bindParser = y;
  c.monadRecParser = l;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var c = a["Text.Parsing.StringParser.Combinators"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      f = a["Control.Apply"],
      l = a["Control.Bind"],
      p = a["Data.Functor"],
      k = a["Data.NonEmpty"],
      n = a["Data.Unit"],
      r = a["Text.Parsing.StringParser"],
      w = a["Data.List"].manyRec(r.monadRecParser)(r.alternativeParser),
      b = function b(h) {
    return function (d) {
      return new k.NonEmpty(h, d);
    };
  };

  c.many = w;

  c.many1 = function (h) {
    return f.apply(r.applyParser)(p.map(r.functorParser)(b)(h))(w(h));
  };

  c.withError = function (h) {
    return function (d) {
      return e.alt(r.altParser)(h)(r.fail(d));
    };
  };

  c.optional = function (h) {
    return e.alt(r.altParser)(l.bind(r.bindParser)(h)(function (d) {
      return g.pure(r.applicativeParser)(n.unit);
    }))(g.pure(r.applicativeParser)(n.unit));
  };

  c.sepBy1 = function (h) {
    return function (d) {
      return l.bind(r.bindParser)(h)(function (q) {
        return l.bind(r.bindParser)(w(f.applySecond(r.applyParser)(d)(h)))(function (x) {
          return g.pure(r.applicativeParser)(b(q)(x));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var c = a["Text.Parsing.StringParser.CodePoints"],
      e = a["Control.Applicative"],
      g = a["Control.Bind"],
      f = a["Data.Char"],
      l = a["Data.Either"],
      p = a["Data.Enum"],
      k = a["Data.Maybe"],
      n = a["Data.Show"],
      r = a["Data.String.CodePoints"],
      w = a["Data.Unit"],
      b = a["Text.Parsing.StringParser"],
      h = a["Text.Parsing.StringParser.Combinators"],
      d = function () {
    var x = function () {
      var t = p.fromEnum(r.boundedEnumCodePoint);
      return function (E) {
        return f.fromCharCode(t(E));
      };
    }();

    return function (t) {
      var E = r.codePointAt(t.pos)(t.str);

      if (E instanceof k.Just) {
        var y = x(E.value0);
        if (y instanceof k.Just) return new l.Right({
          result: y.value0,
          suffix: {
            str: t.str,
            pos: t.pos + 1 | 0
          }
        });
        if (y instanceof k.Nothing) return new l.Left({
          pos: t.pos,
          error: b.ParseError.create("CodePoint " + (n.show(r.showCodePoint)(E.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [y.constructor.name]);
      }

      if (E instanceof k.Nothing) return new l.Left({
        pos: t.pos,
        error: new b.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [E.constructor.name]);
    };
  }(),
      q = function q(x) {
    return b["try"](g.bind(b.bindParser)(d)(function (t) {
      return x(t) ? e.pure(b.applicativeParser)(t) : b.fail("Character " + (n.show(n.showChar)(t) + " did not satisfy predicate"));
    }));
  };

  c.eof = function (x) {
    return x.pos < r.length(x.str) ? new l.Left({
      pos: x.pos,
      error: new b.ParseError("Expected EOF")
    }) : new l.Right({
      result: w.unit,
      suffix: x
    });
  };

  c.satisfy = q;

  c["char"] = function (x) {
    return h.withError(q(function (t) {
      return t === x;
    }))("Could not match character " + n.show(n.showChar)(x));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var c = a["Text.Email.Parser"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      f = a["Control.Apply"],
      l = a["Control.Bind"],
      p = a["Data.Char"],
      k = a["Data.Foldable"],
      n = a["Data.Functor"],
      r = a["Data.List.Types"],
      w = a["Data.Maybe"],
      b = a["Data.Monoid"],
      h = a["Data.String.CodeUnits"],
      d = a["Data.String.Pattern"],
      q = a["Data.Unit"],
      x = a["Text.Parsing.StringParser"],
      t = a["Text.Parsing.StringParser.CodePoints"],
      E = a["Text.Parsing.StringParser.Combinators"],
      y = function (ia) {
    var Da = w.fromJust();
    return function (na) {
      return Da(p.fromCharCode(na));
    };
  }(),
      u = function u(ia) {
    return n.map(x.functorParser)(function () {
      var Da = k.fold(r.foldableNonEmptyList)(b.monoidString),
          na = n.map(r.functorNonEmptyList)(h.singleton);
      return function (ua) {
        return Da(na(ua));
      };
    }())(E.many1(t.satisfy(ia)));
  },
      F = function F(ia) {
    return l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(ia))(function () {
      return l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(C(ia)))(function () {
        return g.pure(x.applicativeParser)(q.unit);
      });
    });
  },
      C = function C(ia) {
    return e.alt(x.altParser)(F(ia))(g.pure(x.applicativeParser)(q.unit));
  },
      N = function N(ia) {
    return l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t.satisfy(ia)))(function () {
      return l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(C(t.satisfy(ia))))(function () {
        return g.pure(x.applicativeParser)(q.unit);
      });
    });
  },
      I = t["char"](y(0)),
      K = t["char"]("\n");

  a = function a(ia) {
    return " " === ia || "\t" === ia;
  };

  var M = t.satisfy(a),
      L = N(a),
      U = function U(ia) {
    return function (Da) {
      return function (na) {
        return na >= ia && na <= Da;
      };
    };
  };

  a = U(y(33))(y(126));

  var V = t.satisfy(a),
      J = function J(ia) {
    return function (Da) {
      return h.contains(d.Pattern(h.singleton(Da)))(ia);
    };
  },
      v = function v(ia) {
    return U(y(1))(y(8))(ia) || U(y(14))(y(31))(ia) || J("\x0B\f\x7F")(ia);
  },
      D = function D(ia) {
    return U(y(33))(y(39))(ia) || U(y(42))(y(91))(ia) || U(y(93))(y(126))(ia) || v(ia);
  },
      O = function O(ia) {
    return U(y(33))(y(90))(ia) || U(y(94))(y(126))(ia) || v(ia);
  },
      B = t.satisfy(v),
      G = t["char"]("\r"),
      P = n["void"](x.functorParser)(f.applySecond(x.applyParser)(G)(K)),
      Y = function () {
    var ia = F(f.applySecond(x.applyParser)(P)(L)),
        Da = f.applySecond(x.applyParser)(L)(E.optional(f.applySecond(x.applyParser)(P)(L)));
    return e.alt(x.altParser)(Da)(ia);
  }(),
      pa = function () {
    var ia = l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]("\\")))(function () {
      return e.alt(x.altParser)(e.alt(x.altParser)(e.alt(x.altParser)(e.alt(x.altParser)(e.alt(x.altParser)(V)(M))(K))(G))(B))(I);
    });
    return l.bind(x.bindParser)(ia)(function (Da) {
      return g.pure(x.applicativeParser)("\\" + h.singleton(Da));
    });
  }(),
      va = e.alt(x.altParser)(u(function (ia) {
    return J(h.singleton(y(33)))(ia) || U(y(35))(y(91))(ia) || U(y(93))(y(126))(ia) || v(ia);
  }))(pa),
      z = function () {
    var ia = l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]('"')))(function () {
      return l.bind(x.bindParser)(E.many(f.applySecond(x.applyParser)(E.optional(Y))(va)))(function (Da) {
        return l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(E.optional(Y)))(function () {
          return l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]('"')))(function () {
            return g.pure(x.applicativeParser)(Da);
          });
        });
      });
    });
    return n.map(x.functorParser)(function (Da) {
      return '"' + (k.fold(r.foldableList)(b.monoidString)(Da) + '"');
    })(ia);
  }(),
      ya = l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]("(")))(function () {
    return l.discard(l.discardUnit)(x.bindParser)(C(e.alt(x.altParser)(e.alt(x.altParser)(e.alt(x.altParser)(N(D))(n["void"](x.functorParser)(pa)))(ya))(Y)))(function () {
      return l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"](")")))(function () {
        return g.pure(x.applicativeParser)(q.unit);
      });
    });
  }),
      X = C(e.alt(x.altParser)(ya)(Y));

  a = l.discard(l.discardUnit)(x.bindParser)(E.optional(X))(function () {
    return l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]("[")))(function () {
      return l.bind(x.bindParser)(E.many(f.applySecond(x.applyParser)(E.optional(Y))(u(O))))(function (ia) {
        return l.discard(l.discardUnit)(x.bindParser)(E.optional(Y))(function () {
          return l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]("]")))(function () {
            return l.discard(l.discardUnit)(x.bindParser)(E.optional(X))(function () {
              return g.pure(x.applicativeParser)("[" + (k.fold(r.foldableList)(b.monoidString)(ia) + "]"));
            });
          });
        });
      });
    });
  });

  var ka = function () {
    return u(function (ia) {
      return "0" <= ia && "9" >= ia || "a" <= ia && "z" >= ia || "A" <= ia && "Z" >= ia || J("!#$%&'*+/=?^_`{|}~-")(ia);
    });
  }(),
      Aa = function () {
    var ia = l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(E.optional(X)))(function () {
      return l.bind(x.bindParser)(e.alt(x.altParser)(ka)(z))(function (Da) {
        return l.discard(l.discardUnit)(x.bindParser)(n["void"](x.functorParser)(E.optional(X)))(function () {
          return g.pure(x.applicativeParser)(Da);
        });
      });
    });
    ia = E.sepBy1(ia)(t["char"]("."));
    return n.map(x.functorParser)(k.intercalate(r.foldableNonEmptyList)(b.monoidString)("."))(ia);
  }(),
      R = e.alt(x.altParser)(Aa)(a);

  a = l.bind(x.bindParser)(Aa)(function (ia) {
    return l.bind(x.bindParser)(t["char"]("@"))(function () {
      return l.bind(x.bindParser)(R)(function (Da) {
        return l.bind(x.bindParser)(t.eof)(function () {
          return g.pure(x.applicativeParser)({
            localPart: ia,
            domainPart: Da
          });
        });
      });
    });
  });
  c.addrSpec = a;

  c.toString = function (ia) {
    return ia.localPart + ("@" + ia.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var c = a["Text.Email.Validate"],
      e = a["Data.Bifunctor"],
      g = a["Data.Either"],
      f = a["Data.Show"],
      l = a["Text.Email.Parser"],
      p = a["Text.Parsing.StringParser"];

  a = function () {
    var k = e.lmap(g.bifunctorEither)(f.show(p.showParseError));
    return function (n) {
      n = p.runParser(l.addrSpec)(n);
      return k(n);
    };
  }();

  c.validate = a;
})(PS);

(function (a) {
  a._validateURL = function (c) {
    return function (e) {
      if (!e || !/^https?:\/\//.test(e)) return "Unknown or missing protocol format in url: " + e;
      var g = document.createElement("a");
      g.href = e;

      if (c) {
        if (g.username) return "URL " + e + " contains a username: " + g.username;
        if (g.password) return "URL " + e + " contains a password: " + g.password;
      }

      return /\.[^0-9.]/.test(g.hostname) ? /(\s|^\.|\.$)/.test(g.hostname) ? "Hostname '" + g.href + "' contains whitespace in " + e : g.href.toLowerCase().replace(/\/+$/g, "") !== e.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + e + " doesn't match parsed href " + g.href : "SUCCESS" : "Invalid hostname '" + g.href + "' in " + e;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};

  var c = a["Text.URL.Validate"],
      e = a["Text.URL.Validate"],
      g = a["Data.Either"],
      f = a["Data.Maybe"],
      l = a["Data.String.NonEmpty.Internal"],
      p = function p(k) {
    return function (n) {
      var r = "SUCCESS" === n ? !0 : !1;

      if (r) {
        n = l.fromString(k);
        if (n instanceof f.Just) return new g.Right(n.value0);
        if (n instanceof f.Nothing) return new g.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [n.constructor.name]);
      }

      if (!r) return new g.Left(n);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [r.constructor.name]);
    };
  };

  c.parsePublicURL = function (k) {
    var n = e._validateURL(!0)(k);

    return p(k)(n);
  };

  c.urlToNEString = function (k) {
    return k;
  };

  c.urlToString = function (k) {
    return l.toString(k);
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
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      f = a["Control.Bind"],
      l = a["Control.Monad"],
      p = a["Control.Plus"],
      k = a["Data.Array"],
      n = a["Data.Array.NonEmpty"],
      r = a["Data.Bounded"],
      w = a["Data.DateTime"],
      b = a["Data.Either"],
      h = a["Data.Either.Extra"],
      d = a["Data.Functor"],
      q = a["Data.Int"],
      x = a["Data.JSDate"],
      t = a["Data.Maybe"],
      E = a["Data.Natural"],
      y = a["Data.String.CodePoints"],
      u = a["Data.String.CodeUnits"],
      F = a["Data.String.NonEmpty.Internal"],
      C = a["Data.String.Utils"],
      N = a["Data.Traversable"],
      I = a["Data.XPath"],
      K = a["DataCite.Types.Common"],
      M = a.Effect,
      L = a["Effect.Exception"],
      U = a.Global,
      V = a["Metajelo.Types"],
      J = a["Metajelo.XPaths"],
      v = a["Text.Email.Validate"],
      D = a["Text.URL.Validate"],
      O = a["Web.DOM.Document.XPath"],
      B = a["Web.DOM.Document.XPath.ResultType"],
      G = a["Web.DOM.Element"],
      P = a["Web.DOM.Node"],
      Y = a["Web.DOM.NodeList"],
      pa = function pa(Q) {
    return "Audiovisual" === Q ? e.pure(b.applicativeEither)(K.Audiovisual.value) : "Dataset" === Q ? e.pure(b.applicativeEither)(K.Dataset.value) : "Event" === Q ? e.pure(b.applicativeEither)(K.Event.value) : "Image" === Q ? e.pure(b.applicativeEither)(K.Image.value) : "InteractiveResource" === Q ? e.pure(b.applicativeEither)(K.InteractiveResource.value) : "Model" === Q ? e.pure(b.applicativeEither)(K.Model.value) : "PhysicalObject" === Q ? e.pure(b.applicativeEither)(K.PhysicalObject.value) : "ResourceCollection" === Q ? e.pure(b.applicativeEither)(K.ResourceCollection.value) : "Service" === Q ? e.pure(b.applicativeEither)(K.Service.value) : "Software" === Q ? e.pure(b.applicativeEither)(K.Software.value) : "Sound" === Q ? e.pure(b.applicativeEither)(K.Sound.value) : "Text" === Q ? e.pure(b.applicativeEither)(K.Text.value) : "Workflow" === Q ? e.pure(b.applicativeEither)(K.Workflow.value) : "Other" === Q ? e.pure(b.applicativeEither)(K.Other.value) : b.Left.create("Unknown ResourceTypeGeneral: '" + (Q + "'"));
  },
      va = function va(Q) {
    return function (za) {
      return function () {
        var ca = J.unsafeSingleNodeValue(Q)(za)(I.xx(I.stringXPath)(J.resTypeP))(),
            la = Q.xeval.str(ca)(".")();
        ca = Q.xeval.str(ca)(I.at(I.stringXPath)(J.resTypeGenAT))();
        ca = J.rightOrThrow(pa(ca))();
        return {
          description: la,
          generalType: ca
        };
      };
    };
  },
      z = function z(Q) {
    return "IsCitedBy" === Q ? e.pure(b.applicativeEither)(K.IsCitedBy.value) : "Cites" === Q ? e.pure(b.applicativeEither)(K.Cites.value) : "IsSupplementTo" === Q ? e.pure(b.applicativeEither)(K.IsSupplementTo.value) : "IsSupplementedBy" === Q ? e.pure(b.applicativeEither)(K.IsSupplementedBy.value) : "IsContinuedBy" === Q ? e.pure(b.applicativeEither)(K.IsContinuedBy.value) : "Continues" === Q ? e.pure(b.applicativeEither)(K.Continues.value) : "IsNewVersionOf" === Q ? e.pure(b.applicativeEither)(K.IsNewVersionOf.value) : "IsPreviousVersionOf" === Q ? e.pure(b.applicativeEither)(K.IsPreviousVersionOf.value) : "IsPartOf" === Q ? e.pure(b.applicativeEither)(K.IsPartOf.value) : "HasPart" === Q ? e.pure(b.applicativeEither)(K.HasPart.value) : "IsReferencedBy" === Q ? e.pure(b.applicativeEither)(K.IsReferencedBy.value) : "References" === Q ? e.pure(b.applicativeEither)(K.References.value) : "IsDocumentedBy" === Q ? e.pure(b.applicativeEither)(K.IsDocumentedBy.value) : "Documents" === Q ? e.pure(b.applicativeEither)(K.Documents.value) : "IsCompiledBy" === Q ? e.pure(b.applicativeEither)(K.IsCompiledBy.value) : "Compiles" === Q ? e.pure(b.applicativeEither)(K.Compiles.value) : "IsVariantFormOf" === Q ? e.pure(b.applicativeEither)(K.IsVariantFormOf.value) : "IsOriginalFormOf" === Q ? e.pure(b.applicativeEither)(K.IsOriginalFormOf.value) : "IsIdenticalTo" === Q ? e.pure(b.applicativeEither)(K.IsIdenticalTo.value) : "HasMetadata" === Q ? e.pure(b.applicativeEither)(K.HasMetadata.value) : "IsMetadataFor" === Q ? e.pure(b.applicativeEither)(K.IsMetadataFor.value) : "Reviews" === Q ? e.pure(b.applicativeEither)(K.Reviews.value) : "IsReviewedBy" === Q ? e.pure(b.applicativeEither)(K.IsReviewedBy.value) : "IsDerivedFrom" === Q ? e.pure(b.applicativeEither)(K.IsDerivedFrom.value) : "IsSourceOf" === Q ? e.pure(b.applicativeEither)(K.IsSourceOf.value) : b.Left.create("Unknown RelationType: '" + (Q + "'"));
  },
      ya = function ya(Q) {
    return "Access" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Access.value)) : "Collection" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Collection.value)) : "Data" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Data.value)) : "Metadata" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Metadata.value)) : "Preservation" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Preservation.value)) : "Submission" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Submission.value)) : "Quality" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Quality.value)) : "Terms of Use" === Q ? e.pure(b.applicativeEither)(new t.Just(V.TermsOfUse.value)) : "" === Q ? e.pure(b.applicativeEither)(t.Nothing.value) : b.Left.create("Unknown PolicyType: '" + (Q + "'"));
  },
      X = function X(Q) {
    return function (za) {
      return function (ca) {
        return function () {
          var la = Q.xeval.any(ca)(I.xx(I.stringXPath)(za))(B.ordered_node_snapshot_type)();
          la = O.snapshot(la)();
          la = N.traverse(N.traversableArray)(M.applicativeEffect)(function (A) {
            return Q.xeval.str(A)(".");
          })(la)();
          la = d.map(d.functorArray)(function (A) {
            return J.readNonEmptyString(za)(A);
          })(la);
          h.catLefts(l.monadArray)(p.plusArray)(la);
          la = h.catRights(l.monadArray)(p.plusArray)(la);
          return J.readNonEmptyArray(za + "s")(la);
        };
      };
    };
  },
      ka = function ka(Q) {
    return "commercial" === Q ? e.pure(b.applicativeEither)(V.Commercial.value) : "non-profit" === Q ? e.pure(b.applicativeEither)(V.NonProfit.value) : "governmental" === Q ? e.pure(b.applicativeEither)(V.Governmental.value) : b.Left.create("Unknown InstitutionType: '" + (Q + "'"));
  },
      Aa = function Aa(Q) {
    return "dataCustodian" === Q ? e.pure(b.applicativeEither)(new t.Just(V.DataCustodian.value)) : "" === Q ? e.pure(b.applicativeEither)(t.Nothing.value) : b.Left.create("Unknown InstitutionContactType: '" + (Q + "'"));
  },
      R = function R(Q) {
    return "ARK" === Q ? e.pure(b.applicativeEither)(K.ARK.value) : "arXiv" === Q ? e.pure(b.applicativeEither)(K.ArXiv.value) : "bibcode" === Q ? e.pure(b.applicativeEither)(K.Bibcode.value) : "DOI" === Q ? e.pure(b.applicativeEither)(K.DOI.value) : "EAN13" === Q ? e.pure(b.applicativeEither)(K.EAN13.value) : "EISSN" === Q ? e.pure(b.applicativeEither)(K.EISSN.value) : "Handle" === Q ? e.pure(b.applicativeEither)(K.Handle.value) : "IGSN" === Q ? e.pure(b.applicativeEither)(K.IGSN.value) : "ISBN" === Q ? e.pure(b.applicativeEither)(K.ISBN.value) : "ISSN" === Q ? e.pure(b.applicativeEither)(K.ISSN.value) : "ISTC" === Q ? e.pure(b.applicativeEither)(K.ISTC.value) : "LISSN" === Q ? e.pure(b.applicativeEither)(K.LISSN.value) : "LSID" === Q ? e.pure(b.applicativeEither)(K.LSID.value) : "PMID" === Q ? e.pure(b.applicativeEither)(K.PMID.value) : "PURL" === Q ? e.pure(b.applicativeEither)(K.PURL.value) : "UPC" === Q ? e.pure(b.applicativeEither)(K.UPC.value) : "URL" === Q ? e.pure(b.applicativeEither)(K.URL.value) : "URN" === Q ? e.pure(b.applicativeEither)(K.URN.value) : b.Left.create("Unknown IdentifierType: '" + (Q + "'"));
  },
      ia = function ia(Q) {
    return function (za) {
      var ca = function ca(A) {
        return function () {
          var W = Q.xeval.str(A)(I.at(I.stringXPath)(J.idTypeAT))();
          return J.rightOrThrow(R(W))();
        };
      },
          la = function la(A) {
        return function () {
          var W = Q.xeval.str(A)(".")();
          return J.rightOrThrow(J.readNonEmptyString("InstitutionID")(W))();
        };
      };

      return function () {
        var A = J.unsafeSingleNodeValue(Q)(za)(I.xx(I.stringXPath)(J.instIdP))(),
            W = la(A)();
        A = ca(A)();
        return {
          identifier: W,
          identifierType: A
        };
      };
    };
  },
      Da = function Da(Q) {
    var za = function za(W) {
      return function () {
        var ra = Q.xeval.str(W)(I.at(I.stringXPath)(J.relTypeAT))();
        return J.rightOrThrow(z(ra))();
      };
    },
        ca = function ca(W) {
      return function () {
        var ra = Q.xeval.str(W)(I.at(I.stringXPath)(J.relIdTypeAT))();
        return J.rightOrThrow(R(ra))();
      };
    },
        la = function la(W) {
      return function () {
        var ra = Q.xeval.str(W)(".")();
        return J.rightOrThrow(J.readNonEmptyString("RelatedIdentifier")(ra))();
      };
    },
        A = function A(W) {
      return function () {
        var ra = la(W)(),
            ta = ca(W)(),
            wa = za(W)();
        return {
          identifier: ra,
          identifierType: ta,
          relationType: wa
        };
      };
    };

    return function () {
      var W = Q.xevalRoot.any(J.relIdRootP)(B.ordered_node_snapshot_type)();
      W = O.snapshot(W)();
      W = N.sequence(N.traversableArray)(M.applicativeEffect)(d.map(d.functorArray)(A)(W))();
      W = n.fromArray(W);
      if (W instanceof t.Just) return W.value0;
      if (W instanceof t.Nothing) return L["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 112, column 3 - line 114, column 67): " + [W.constructor.name]);
    };
  },
      na = function na(Q) {
    return function (za) {
      var ca = function ca(W) {
        return function () {
          var ra = Q.xeval.str(W)(I.at(I.stringXPath)(J.resIdTypeAT))();
          return J.rightOrThrow(R(ra))();
        };
      },
          la = function la(W) {
        return function () {
          var ra = Q.xeval.str(W)(".")();
          return J.rightOrThrow(J.readNonEmptyString("ResourceID")(ra))();
        };
      },
          A = function A(W) {
        return function (ra) {
          return N.sequence(N.traversableMaybe)(M.applicativeEffect)(f.bind(t.bindMaybe)(W)(function (ta) {
            return f.bind(t.bindMaybe)(ra)(function (wa) {
              return e.pure(t.applicativeMaybe)(g.lift2(M.applyEffect)(function (Ia) {
                return function (Ka) {
                  return {
                    identifier: Ia,
                    identifierType: Ka
                  };
                };
              })(ta)(wa));
            });
          }));
        };
      };

      return function () {
        var W = Q.xeval.nodeMay(za)(I.xx(I.stringXPath)(J.resIdP))(),
            ra = d.map(t.functorMaybe)(la)(W);
        W = d.map(t.functorMaybe)(ca)(W);
        return A(ra)(W)();
      };
    };
  },
      ua = function ua(Q) {
    return function () {
      var za = Q.xevalRoot.str(J.idRootP)();
      za = J.rightOrThrow(J.readNonEmptyString("Identifier")(za))();
      var ca = Q.xevalRoot.str(J.idTypeRootAP)();
      ca = J.rightOrThrow(R(ca))();
      return {
        identifier: za,
        identifierType: ca
      };
    };
  },
      qa = function qa(Q) {
    return function (za) {
      var ca = function ca(la) {
        return function () {
          var A = Q.xeval.str(la)(".")();
          return J.rightOrThrow(J.readNonEmptyString("Format")(A))();
        };
      };

      return function () {
        var la = Q.xeval.any(za)(I.pathAppendNSx(I.stringXPath)(I.xx(I.stringXPath)(J.formatCP))(J.formatP))(B.ordered_node_snapshot_type)();
        la = O.snapshot(la)();
        return N.traverse(N.traversableArray)(M.applicativeEffect)(ca)(la)();
      };
    };
  },
      Ba = function Ba(Q) {
    return "0" === Q ? e.pure(b.applicativeEither)(!1) : "1" === Q ? e.pure(b.applicativeEither)(!0) : "false" === Q ? e.pure(b.applicativeEither)(!1) : "true" === Q ? e.pure(b.applicativeEither)(!0) : b.Left.create("Invalid xs:boolean value: '" + (Q + "'"));
  },
      Ha = function Ha(Q) {
    return "" === Q ? e.pure(b.applicativeEither)(t.Nothing.value) : d.map(b.functorEither)(t.Just.create)(Ba(Q));
  },
      ea = function ea(Q) {
    return function (za) {
      var ca = I.pathAppendNSx(I.stringXPath)(I.xx(I.stringXPath)(J.instPolicyCP))(J.instPolicyP),
          la = function la(A) {
        return function () {
          var W = P.childNodes(A)();
          W = Y.toArray(W)();
          W = k.head(k.filter(function (Ga) {
            return !C.startsWith("#")(P.nodeName(Ga));
          })(W));
          if (W instanceof t.Just) var ra = W.value0;else if (W instanceof t.Nothing) ra = L["throw"]("Couldn't find child node of " + P.nodeName(A))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 394, column 30 - line 396, column 80): " + [W.constructor.name]);
          var ta = Q.xeval.str(ra)(".")(),
              wa = J.rightOrThrow(J.readNonEmptyString("Policy")(ta))();

          W = function () {
            var Ga = d.map(t.functorMaybe)(G.localName)(G.fromNode(ra));
            if (Ga instanceof t.Just && Ga.value0 === J.freeTextPolicyP) return new V.FreeTextPolicy(wa);

            if (Ga instanceof t.Just && Ga.value0 === J.refPolicyP) {
              Ga = D.parsePublicURL(ta);
              if (Ga instanceof b.Left) return L["throw"]("In refPolicy URL parsing: " + Ga.value0)();
              if (Ga instanceof b.Right) return new V.RefPolicy(Ga.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 401, column 37 - line 403, column 45): " + [Ga.constructor.name]);
            }

            if (Ga instanceof t.Just) return L["throw"]("invalid element '" + (Ga.value0 + "' as child of institutionPolicy"))();
            if (Ga instanceof t.Nothing) return L["throw"]("unable to convert policy child Node with name '" + (P.nodeName(ra) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 399, column 17 - line 407, column 56): " + [Ga.constructor.name]);
          }();

          var Ia = Q.xeval.str(A)(I.at(I.stringXPath)(J.polTypeAT))();
          Ia = J.rightOrThrow(ya(Ia))();
          var Ka = Q.xeval.str(A)(I.at(I.stringXPath)(J.appliesToProdAT))();
          Ka = J.rightOrThrow(Ha(Ka))();
          return {
            policy: W,
            policyType: Ia,
            appliesToProduct: Ka
          };
        };
      };

      return function () {
        var A = Q.xeval.any(za)(ca)(B.ordered_node_snapshot_type)();
        A = O.snapshot(A)();
        A = N.sequence(N.traversableArray)(M.applicativeEffect)(d.map(d.functorArray)(la)(A))();
        A = n.fromArray(A);
        if (A instanceof t.Just) return A.value0;
        if (A instanceof t.Nothing) return L["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 381, column 3 - line 383, column 67): " + [A.constructor.name]);
      };
    };
  },
      ma = function ma(Q) {
    return function (za) {
      var ca = function ca(A) {
        return function () {
          var W = Q.xeval.str(A)(I.xx(I.stringXPath)(J.pubYearP))();
          W = J.rightOrThrow(J.readNonEmptyString("PubYear")(W))();
          return E.intToNat(q.round(U.readInt(10)(F.toString(W))));
        };
      },
          la = I.xx(I.stringXPath)(J.basicMetaP);

      return function () {
        var A = J.unsafeSingleNodeValue(Q)(za)(la)(),
            W = f.bindFlipped(M.bindEffect)(J.rightOrThrow)(X(Q)(J.titleP)(A))(),
            ra = f.bindFlipped(M.bindEffect)(J.rightOrThrow)(X(Q)(J.creatorP)(A))();
        A = ca(A)();
        return {
          titles: W,
          creators: ra,
          publicationYear: A
        };
      };
    };
  },
      da = function da(Q) {
    var za = F.toString(Q);
    return function () {
      var ca = u.stripSuffix("Z")(za);
      if (ca instanceof t.Just) ca = 10 >= y.length(ca.value0) ? ca.value0 + "T00:00:00.000Z" : za;else if (ca instanceof t.Nothing) ca = za;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 98, column 24 - line 100, column 23): " + [ca.constructor.name]);
      ca = x.parse(ca)();
      return t.fromMaybe(r.bottom(w.boundedDateTime))(x.toDateTime(ca));
    };
  },
      H = function H(Q) {
    return function () {
      var za = Q.xevalRoot.str(J.dateRootP)();
      za = J.rightOrThrow(J.readNonEmptyString("Date")(za))();
      return da(za)();
    };
  },
      aa = function aa(Q) {
    return function () {
      var za = Q.xevalRoot.str(J.lastModRootP)();
      za = J.rightOrThrow(J.readNonEmptyString("ModDate")(za))();
      return da(za)();
    };
  },
      sa = function sa(Q) {
    return function (za) {
      return function (ca) {
        return function () {
          var la = Q.xeval.str(ca)(za)();
          la = D.parsePublicURL(la);
          if (la instanceof b.Left) return L["throw"](la.value0)();
          if (la instanceof b.Right) return la.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 442, column 3 - line 444, column 26): " + [la.constructor.name]);
        };
      };
    };
  },
      ha = function ha(Q) {
    return function (za) {
      var ca = function ca(ra) {
        return function () {
          var ta = ra();
          return J.rightOrThrow(J.readNonEmptyString("SuperOrg")(ta))();
        };
      },
          la = function la(ra) {
        return function () {
          var ta = Q.xeval.nodeMay(ra)(I.xx(I.stringXPath)(J.superOrgNameP))();
          return N.traverse(N.traversableMaybe)(M.applicativeEffect)(function (wa) {
            return ca(Q.xeval.str(wa)("."));
          })(ta)();
        };
      },
          A = function A(ra) {
        return function () {
          var ta = J.unsafeSingleNodeValue(Q)(ra)(I.xx(I.stringXPath)(J.instSustainP))(),
              wa = sa(Q)(I.xx(I.stringXPath)(J.missionUrlP))(ta)();
          ta = sa(Q)(I.xx(I.stringXPath)(J.fundingUrlP))(ta)();
          return {
            missionStatementURL: wa,
            fundingStatementURL: ta
          };
        };
      },
          W = function W(ra) {
        var ta = I.xx(I.stringXPath)(J.instContactP);
        return function () {
          var wa = J.unsafeSingleNodeValue(Q)(ra)(ta)(),
              Ia = Q.xeval.str(wa)(I.at(I.stringXPath)(J.instContactTypeAT))();
          Ia = J.rightOrThrow(Aa(Ia))();
          wa = Q.xeval.str(wa)(".")();
          wa = v.validate(wa);
          if (wa instanceof b.Left) wa = L["throw"]("Error in validating email address for InstitutionContact: " + wa.value0)();else if (wa instanceof b.Right) wa = wa.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 345, column 23 - line 349, column 28): " + [wa.constructor.name]);
          return {
            emailAddress: wa,
            contactType: Ia
          };
        };
      };

      return function () {
        var ra = J.unsafeSingleNodeValue(Q)(za)(I.xx(I.stringXPath)(J.locP))(),
            ta = ia(Q)(ra)(),
            wa = f.join(M.bindEffect)(d.mapFlipped(M.functorEffect)(Q.xeval.str(ra)(I.xx(I.stringXPath)(J.instNameP)))(function (Za) {
          return J.rightOrThrow(J.readNonEmptyString("Institution Name")(Za));
        }))(),
            Ia = Q.xeval.str(ra)(I.xx(I.stringXPath)(J.instTypeP))();
        Ia = J.rightOrThrow(ka(Ia))();
        var Ka = la(ra)(),
            Ga = W(ra)(),
            Sa = A(ra)(),
            Ua = ea(Q)(ra)();
        ra = Q.xeval.str(ra)(I.xx(I.stringXPath)(J.versioningP))();
        ra = J.rightOrThrow(Ba(ra))();
        return {
          institutionID: ta,
          institutionName: wa,
          institutionType: Ia,
          superOrganizationName: Ka,
          institutionContact: Ga,
          institutionSustainability: Sa,
          institutionPolicies: Ua,
          versioning: ra
        };
      };
    };
  },
      Ea = function Ea(Q) {
    return function (za) {
      var ca = function ca(A) {
        return function () {
          var W = Q.xeval.str(A)(I.at(I.stringXPath)(J.relTypeAT))();
          return J.rightOrThrow(z(W))();
        };
      },
          la = function la(A) {
        return function (W) {
          return N.sequence(N.traversableMaybe)(M.applicativeEffect)(f.bind(t.bindMaybe)(A)(function (ra) {
            return f.bind(t.bindMaybe)(W)(function (ta) {
              return e.pure(t.applicativeMaybe)(g.lift2(M.applyEffect)(function (wa) {
                return function (Ia) {
                  return {
                    url: wa,
                    relationType: Ia
                  };
                };
              })(ra)(ta));
            });
          }));
        };
      };

      return function () {
        var A = Q.xeval.nodeMay(za)(I.xx(I.stringXPath)(J.resMetaSourceP))(),
            W = d.map(t.functorMaybe)(sa(Q)("."))(A);
        A = d.map(t.functorMaybe)(ca)(A);
        return la(W)(A)();
      };
    };
  },
      Pa = function Pa(Q) {
    var za = function za(ca) {
      return function () {
        var la = ma(Q)(ca)(),
            A = na(Q)(ca)(),
            W = va(Q)(ca)(),
            ra = qa(Q)(ca)(),
            ta = Ea(Q)(ca)(),
            wa = ha(Q)(ca)();
        return {
          basicMetadata: la,
          resourceID: A,
          resourceType: W,
          format: ra,
          resourceMetadataSource: ta,
          location: wa
        };
      };
    };

    return function () {
      var ca = Q.xevalRoot.any(J.sProdRootP)(B.ordered_node_snapshot_type)();
      ca = O.snapshot(ca)();
      ca = N.sequence(N.traversableArray)(M.applicativeEffect)(d.map(d.functorArray)(za)(ca))();
      ca = n.fromArray(ca);
      if (ca instanceof t.Just) return ca.value0;
      if (ca instanceof t.Nothing) return L["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 170, column 3 - line 172, column 70): " + [ca.constructor.name]);
    };
  };

  c.readRecord = function (Q) {
    return function () {
      var za = ua(Q)(),
          ca = H(Q)(),
          la = aa(Q)(),
          A = Da(Q)(),
          W = Pa(Q)();
      return {
        identifier: za,
        date: ca,
        lastModified: la,
        relatedIdentifiers: A,
        supplementaryProducts: W
      };
    };
  };

  c.readIdentifierType = R;
  c.parseDate = da;
  c.readRelationType = z;
  c.readResourceTypeGeneral = pa;
  c.readInstitutionType = ka;
  c.readInstitutionContactType = Aa;
  c.readPolicyType = ya;
  c.readBoolean = Ba;
})(PS);

(function (a) {
  a.copyToClipboard = function (c) {
    return function () {
      var e = document.createElement("textarea");
      e.type = "text";
      e.value = c;
      e.style.position = "absolute";
      e.style.left = -1E4;
      document.body.appendChild(e);
      e.select();
      document.execCommand("copy");
      document.body.removeChild(e);
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
      e = a["Control.Applicative"],
      g = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Foldable"],
      l = a["Data.Functor"],
      p = a["Data.JSDate"],
      k = a["Data.Maybe"],
      n = a["Data.Natural"],
      r = a["Data.Show"],
      w = a["Data.Traversable"],
      b = a["Data.Unit"],
      h = a["Data.XPath"],
      d = a["DataCite.Types.Common"],
      q = a.Effect,
      x = a["Metajelo.Types"],
      t = a["Metajelo.XPaths"],
      E = a["Nonbili.DOM"],
      y = a["Text.Email.Parser"],
      u = a["Text.URL.Validate"],
      F = a["Web.DOM.Document"],
      C = a["Web.DOM.Element"],
      N = a["Web.DOM.Node"],
      I = function I(ea) {
    return function (ma) {
      return function (da) {
        return function (H) {
          var aa = C.fromNode(da);
          return function () {
            w.sequence(w.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(aa)(function (sa) {
              return C.setAttribute(ea)(r.show(d.showIdentifierType)(H))(sa);
            }))();
            return b.unit;
          };
        };
      };
    };
  },
      K = a["Data.String.NonEmpty.Internal"].toString,
      M = function M(ea) {
    return function (ma) {
      return function (da) {
        return function (H) {
          return function () {
            N.setTextContent(K(H.identifier))(da)();
            return I(ea)(ma)(da)(H.identifierType)();
          };
        };
      };
    };
  },
      L = function L(ea) {
    return function (ma) {
      return function () {
        var da = t.unsafeSingleNodeValue(ea)(ea.recNode)(h.xx(h.stringXPath)(t.idP))();
        return M(t.idTypeAT)(ea)(da)(ma)();
      };
    };
  },
      U = function U(ea) {
    return function (ma) {
      return function () {
        w.sequence(w.traversableMaybe)(q.applicativeEffect)(l.map(k.functorMaybe)(N.setTextContent(K(ea)))(ma))();
        return b.unit;
      };
    };
  },
      V = function V(ea) {
    return function () {
      var ma = p.toISOString(p.fromDateTime(ea))();
      return t.rightOrThrow(t.readNonEmptyString("(generic date)")(ma))();
    };
  },
      J = function J(ea) {
    return function (ma) {
      return function () {
        var da = V(ma)(),
            H = ea.xevalRoot.nodeMay(t.dateRootP)();
        return U(da)(H)();
      };
    };
  },
      v = function v(ea) {
    return function (ma) {
      return function () {
        var da = V(ma)(),
            H = ea.xevalRoot.nodeMay(t.lastModRootP)();
        return U(da)(H)();
      };
    };
  },
      D = function D(ea) {
    return function (ma) {
      var da = C.prefix(ea.recElem);
      return function () {
        if (da instanceof k.Just) var H = da.value0 + ":";else if (da instanceof k.Nothing) H = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 250, column 20 - line 252, column 18): " + [da.constructor.name]);
        H += ma;
        return F.createElementNS(new k.Just(ea.ns))(H)(ea.doc)();
      };
    };
  },
      O = function O(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = D(ea)(da)();
          N.appendChild(C.toNode(H))(ma)();
          return H;
        };
      };
    };
  },
      B = function B(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = O(ea)(ma)(t.instContactP)();
          w.sequence(w.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(da.contactType)(function (aa) {
            return C.setAttribute(t.instContactTypeAT)(r.show(x.showInstitutionContactType)(aa))(H);
          }))();
          return N.setTextContent(y.toString(da.emailAddress))(C.toNode(H))();
        };
      };
    };
  },
      G = function G(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = l.map(q.functorEffect)(C.toNode)(O(ea)(ma)(t.instIdP))();
          return M(t.idTypeAT)(ea)(H)(da)();
        };
      };
    };
  },
      P = function P(ea) {
    return function (ma) {
      return f.for_(q.applicativeEffect)(g.foldableNonEmptyArray)(ma)(function (da) {
        return function () {
          var H = O(ea)(ea.recNode)(t.relIdP)(),
              aa = C.toNode(H);
          N.setTextContent(K(da.identifier))(aa)();
          C.setAttribute(t.relIdTypeAT)(r.show(d.showIdentifierType)(da.identifierType))(H)();
          return C.setAttribute(t.relTypeAT)(r.show(d.showRelationType)(da.relationType))(H)();
        };
      });
    };
  },
      Y = function Y(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = l.map(q.functorEffect)(C.toNode)(O(ea)(ma)(t.resIdP))();
          return M(t.resIdTypeAT)(ea)(H)(da)();
        };
      };
    };
  },
      pa = function pa(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = O(ea)(ma)(t.resMetaSourceP)();
          N.setTextContent(u.urlToString(da.url))(C.toNode(H))();
          return C.setAttribute(t.relTypeAT)(r.show(d.showRelationType)(da.relationType))(H)();
        };
      };
    };
  },
      va = function va(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = O(ea)(ma)(t.resTypeP)();
          N.setTextContent(da.description)(C.toNode(H))();
          return C.setAttribute(t.resTypeGenAT)(r.show(d.showResourceTypeGeneral)(da.generalType))(H)();
        };
      };
    };
  },
      z = function z(ea) {
    return function (ma) {
      return function (da) {
        return function (H) {
          return function () {
            var aa = l.map(q.functorEffect)(C.toNode)(O(ma)(da)(ea))();
            return N.setTextContent(H)(aa)();
          };
        };
      };
    };
  },
      ya = function ya(ea) {
    return function (ma) {
      return function (da) {
        return function (H) {
          return z(ea)(ma)(da)(K(H));
        };
      };
    };
  },
      X = function X(ea) {
    return function (ma) {
      return function (da) {
        return f.for_(q.applicativeEffect)(g.foldableNonEmptyArray)(da)(function (H) {
          return ya(t.creatorP)(ea)(ma)(H);
        });
      };
    };
  },
      ka = function ka(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = l.map(q.functorEffect)(C.toNode)(O(ea)(ma)(t.formatCP))();
          return f.for_(q.applicativeEffect)(f.foldableArray)(da)(function (aa) {
            return ya(t.formatP)(ea)(H)(aa);
          })();
        };
      };
    };
  },
      Aa = function Aa(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = O(ea)(ma)(t.instPolicyP)(),
              aa = C.toNode(H);
          w.sequence(w.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(da.policyType)(function (sa) {
            return C.setAttribute(t.polTypeAT)(r.show(x.showPolicyType)(sa))(H);
          }))();
          w.sequence(w.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(da.appliesToProduct)(function (sa) {
            return C.setAttribute(t.appliesToProdAT)(r.show(r.showBoolean)(sa))(H);
          }))();
          if (da.policy instanceof x.FreeTextPolicy) return ya(t.freeTextPolicyP)(ea)(aa)(da.policy.value0)();
          if (da.policy instanceof x.RefPolicy) return ya(t.refPolicyP)(ea)(aa)(u.urlToNEString(da.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 217, column 3 - line 220, column 27): " + [da.policy.constructor.name]);
        };
      };
    };
  },
      R = function R(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = l.map(q.functorEffect)(C.toNode)(O(ea)(ma)(t.instPolicyCP))();
          return f.for_(q.applicativeEffect)(g.foldableNonEmptyArray)(da)(function (aa) {
            return Aa(ea)(H)(aa);
          })();
        };
      };
    };
  },
      ia = function ia(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = l.map(q.functorEffect)(C.toNode)(O(ea)(ma)(t.instSustainP))();
          ya(t.missionUrlP)(ea)(H)(u.urlToNEString(da.missionStatementURL))();
          return ya(t.fundingUrlP)(ea)(H)(u.urlToNEString(da.fundingStatementURL))();
        };
      };
    };
  },
      Da = function Da(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = O(ea)(ma)(t.locP)(),
              aa = C.toNode(H);
          G(ea)(aa)(da.institutionID)();
          ya(t.instNameP)(ea)(aa)(da.institutionName)();
          z(t.instTypeP)(ea)(aa)(r.show(x.showInstitutionType)(da.institutionType))();
          w.sequence(w.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(da.superOrganizationName)(function (sa) {
            return ya(t.superOrgNameP)(ea)(aa)(sa);
          }))();
          B(ea)(aa)(da.institutionContact)();
          ia(ea)(aa)(da.institutionSustainability)();
          R(ea)(aa)(da.institutionPolicies)();
          return z(t.versioningP)(ea)(aa)(r.show(r.showBoolean)(da.versioning))();
        };
      };
    };
  },
      na = function na(ea) {
    return function (ma) {
      return function (da) {
        return f.for_(q.applicativeEffect)(g.foldableNonEmptyArray)(da)(function (H) {
          return ya(t.titleP)(ea)(ma)(H);
        });
      };
    };
  },
      ua = function ua(ea) {
    return function (ma) {
      return function (da) {
        return function () {
          var H = l.map(q.functorEffect)(C.toNode)(O(ea)(ma)(t.basicMetaP))();
          na(ea)(H)(da.titles)();
          X(ea)(H)(da.creators)();
          H = l.map(q.functorEffect)(C.toNode)(O(ea)(H)(t.pubYearP))();
          return N.setTextContent(r.show(n.showNatural)(da.publicationYear))(H)();
        };
      };
    };
  },
      qa = function qa(ea) {
    return function (ma) {
      return function () {
        var da = t.unsafeSingleNodeValue(ea)(ea.recNode)(h.xx(h.stringXPath)(t.sProdCP))(),
            H = l.map(q.functorEffect)(C.toNode)(O(ea)(da)(t.sProdP))();
        ua(ea)(H)(ma.basicMetadata)();
        w.sequence(w.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(ma.resourceID)(function (aa) {
          return Y(ea)(H)(aa);
        }))();
        va(ea)(H)(ma.resourceType)();
        ka(ea)(H)(ma.format)();
        w.sequence(w.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(ma.resourceMetadataSource)(function (aa) {
          return pa(ea)(H)(aa);
        }))();
        return Da(ea)(H)(ma.location)();
      };
    };
  },
      Ba = function Ba(ea) {
    return function (ma) {
      return f.for_(q.applicativeEffect)(g.foldableNonEmptyArray)(ma)(function (da) {
        return qa(ea)(da);
      });
    };
  },
      Ha = function Ha(ea) {
    return function (ma) {
      return function () {
        L(ea)(ma.identifier)();
        J(ea)(ma.date)();
        v(ea)(ma.lastModified)();
        P(ea)(ma.relatedIdentifiers)();
        return Ba(ea)(ma.supplementaryProducts)();
      };
    };
  };

  c.recordToString = function (ea) {
    return function () {
      var ma = t.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      Ha(ma)(ea)();
      ma = F.documentElement(ma.doc)();
      return k.maybe(e.pure(q.applicativeEffect)(""))(E.outerHTML)(ma)();
    };
  };

  c.dateTimeToStr = V;
})(PS);

(function (a) {
  a.unsafeGet = function (c) {
    return function (e) {
      return function () {
        return e[c];
      };
    };
  };
})(PS["React.SyntheticEvent"] = PS["React.SyntheticEvent"] || {});

(function (a) {
  a["React.SyntheticEvent"] = a["React.SyntheticEvent"] || {};
  var c = a["React.SyntheticEvent"],
      e = a["React.SyntheticEvent"],
      g = a["Data.Symbol"];

  a = function (f) {
    return function (l) {
      return function (p) {
        return function (k) {
          return e.unsafeGet(g.reflectSymbol(l)(p))(k);
        };
      };
    };
  }()(new g.IsSymbol(function () {
    return "target";
  }))(g.SProxy.value);

  c.target = a;
})(PS);

(function (a) {
  a.children = function (c) {
    return function (e) {
      return function () {
        return e[c];
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
    return function (e) {
      return function () {
        e.value = c;
      };
    };
  };
})(PS["Web.HTML.HTMLInputElement"] = PS["Web.HTML.HTMLInputElement"] || {});

(function (a) {
  a["Web.HTML.HTMLInputElement"] = a["Web.HTML.HTMLInputElement"] || {};
  var c = a["Web.HTML.HTMLInputElement"],
      e = a["Web.HTML.HTMLInputElement"],
      g = a["Data.Functor"],
      f = a["Data.Nullable"],
      l = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("HTMLInputElement");

  var p = function () {
    var k = g.map(l.functorEffect)(f.toMaybe);
    return function (n) {
      return k(e._files(n));
    };
  }();

  c.fromElement = a;
  c.files = p;
  c.value = e.value;
  c.setValue = e.setValue;
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var c = a["Metajelo.FormUtil"],
      e = a["Concur.Core.FRP"],
      g = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Props"],
      l = a["Concur.Core.Types"],
      p = a["Concur.React.DOM"],
      k = a["Concur.React.Props"],
      n = a["Control.Alt"],
      r = a["Control.Applicative"],
      w = a["Control.Apply"],
      b = a["Control.Bind"],
      h = a["Control.Cofree"],
      d = a["Control.Plus"],
      q = a["Data.Array"],
      x = a["Data.Array.NonEmpty"],
      t = a["Data.Bifunctor"],
      E = a["Data.Bounded"],
      y = a["Data.Either"],
      u = a["Data.Enum"],
      F = a["Data.Eq"],
      C = a["Data.Foldable"],
      N = a["Data.Functor"],
      I = a["Data.Generic.Rep"],
      K = a["Data.Generic.Rep.Bounded"],
      M = a["Data.Generic.Rep.Enum"],
      L = a["Data.Generic.Rep.Eq"],
      U = a["Data.Generic.Rep.Ord"],
      V = a["Data.Generic.Rep.Show"],
      J = a["Data.Int"],
      v = a["Data.Maybe"],
      D = a["Data.Monoid"],
      O = a["Data.Natural"],
      B = a["Data.Ord"],
      G = a["Data.Profunctor.Strong"],
      P = a["Data.Semigroup"],
      Y = a["Data.Show"],
      pa = a["Data.String.Common"],
      va = a["Data.String.NonEmpty.Internal"],
      z = a["Data.Symbol"],
      ya = a["Data.Traversable"],
      X = a["Data.Tuple"],
      ka = a["Data.Unfoldable1"],
      Aa = a["Data.Unit"],
      R = a["DataCite.Types.Common"],
      ia = a.Effect,
      Da = a["Effect.Class"],
      na = a["Effect.Exception"],
      ua = a["Effect.Now"],
      qa = a["Effect.Unsafe"],
      Ba = a["Foreign.Object"],
      Ha = a.Global,
      ea = a["Metajelo.CSS.UI.ClassProps"],
      ma = a["Metajelo.SchemaInfo"],
      da = a["Metajelo.Types"],
      H = a["Metajelo.XPaths.Read"],
      aa = a["Metajelo.XPaths.Write"],
      sa = a["React.SyntheticEvent"],
      ha = a["Text.Email.Parser"],
      Ea = a["Text.Email.Validate"],
      Pa = a["Text.URL.Validate"],
      Q = a["Web.DOM.Document"],
      za = a["Web.DOM.Element"],
      ca = a["Web.DOM.HTMLCollection"],
      la = a["Web.DOM.NonElementParentNode"],
      A = a["Web.DOM.ParentNode"],
      W = a["Web.HTML"],
      ra = a["Web.HTML.HTMLDocument"],
      ta = a["Web.HTML.HTMLInputElement"],
      wa = a["Web.HTML.Window"],
      Ia = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      Ka = function () {
    function T() {}

    T.value = new T();
    return T;
  }(),
      Ga = function () {
    function T(ba) {
      this.value0 = ba;
    }

    T.create = function (ba) {
      return new T(ba);
    };

    return T;
  }(),
      Sa = function () {
    function T(ba) {
      this.value0 = ba;
    }

    T.create = function (ba) {
      return new T(ba);
    };

    return T;
  }(),
      Ua = function Ua(T, ba, Ja) {
    this.fromOptionValue = T;
    this.toOptionLabel = ba;
    this.toOptionValue = Ja;
  },
      Za = function Za() {
    var T = W.window();
    T = wa.document(T)();
    return ra.toDocument(T);
  },
      $a = function $a(T) {
    if (T instanceof Ga || T instanceof Sa) return T.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 376, column 1 - line 376, column 34): " + [T.constructor.name]);
  },
      gb = function gb(T) {
    return p.input(g.widgetLiftWidget)([k.defaultValue(T), N.map(f.functorProps)(k.unsafeTargetValue)(k.onChange)]);
  },
      bb = function bb(T) {
    return b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(T)(function (ba) {
      return r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(va.fromString(pa.trim(ba)));
    });
  },
      cb = function cb(T) {
    return function (ba) {
      ba = Ba.lookup(T)(ba);
      if (ba instanceof v.Just) return ba.value0;
      if (ba instanceof v.Nothing) return "";
      throw Error("Failed pattern match at Metajelo.FormUtil (line 90, column 21 - line 92, column 16): " + [ba.constructor.name]);
    };
  },
      db = function db(T) {
    var ba = T ? "Hide Descriptions" : "Show Descriptions";
    return p.div_(l.widgetShiftMap)([])(N.voidRight(l.widgetFunctor)(!T)(p.button_(l.widgetShiftMap)([k.onClick])(p.text(g.widgetLiftWidget)(ba))));
  },
      ib = function ib(T) {
    return e.step(T)(b.bind(l.widgetBind)(db(T))(function (ba) {
      return r.pure(l.widgetApplicative)(ib(ba));
    }));
  },
      Qa = function Qa(T) {
    return function (ba) {
      return function (Ja) {
        return function () {
          var Ca = Za();
          Ca = Q.toNonElementParentNode(Ca);
          Ca = la.getElementById(T)(Ca)();
          if (Ca instanceof v.Just) return Ca = za.toParentNode(Ca.value0), Ca = A.children(Ca)(), Ca = ca.toArray(Ca)(), Ca = q.filter(function (Oa) {
            return za.tagName(Oa) === ba;
          })(Ca), Ca = q.catMaybes(N.map(N.functorArray)(ta.fromElement)(Ca)), C.for_(ia.applicativeEffect)(C.foldableArray)(Ca)(ta.setValue(Ja))();
          if (Ca instanceof v.Nothing) return Aa.unit;
          throw Error("Failed pattern match at Metajelo.FormUtil (line 506, column 3 - line 519, column 25): " + [Ca.constructor.name]);
        };
      };
    };
  },
      kb = function kb(T) {
    return function (ba) {
      return ba < T ? [] : q.range(T)(ba);
    };
  },
      Xa = function Xa(T) {
    return "FreeTextPolicy" === T ? r.pure(y.applicativeEither)(Ia.value) : "RefPolicy" === T ? r.pure(y.applicativeEither)(Ka.value) : y.Left.create("Unknown Policy: '" + (T + "'"));
  },
      rb = Ba.unions(C.foldableArray)([ma.descrAttrMap, ma.descrCTypMap, ma.descrEleMap, ma.descrSTypMap]),
      Ta = function Ta(T) {
    return function (ba) {
      return C.fold(C.foldableMaybe)(D.monoidString)(N.map(v.functorMaybe)(Y.show(T))(ba));
    };
  },
      sb = new Ua(function (T) {
    return v.fromJust()(y.hush(H.readResourceTypeGeneral(T)));
  }, Y.show(R.showResourceTypeGeneral), Y.show(R.showResourceTypeGeneral)),
      tb = new Ua(function (T) {
    return v.fromJust()(y.hush(H.readRelationType(T)));
  }, Y.show(R.showRelationType), Y.show(R.showRelationType)),
      lb = new Ua(function (T) {
    return v.fromJust()(y.hush(H.readInstitutionType(T)));
  }, Y.show(da.showInstitutionType), Y.show(da.showInstitutionType)),
      ub = new Ua(function (T) {
    return v.fromJust()(y.hush(H.readIdentifierType(T)));
  }, Y.show(R.showIdentifierType), Y.show(R.showIdentifierType)),
      mb = function mb(T) {
    return T instanceof Ga ? !0 : !1;
  },
      vb = function vb(T) {
    return function () {
      var ba = Za();
      ba = Q.toNonElementParentNode(ba);
      ba = la.getElementById(T)(ba)();
      return ya.traverse(ya.traversableMaybe)(ia.applicativeEffect)(ta.value)(b.bind(v.bindMaybe)(ba)(function (Ja) {
        return ta.fromElement(Ja);
      }))();
    };
  },
      Wa = new I.Generic(function (T) {
    if (T instanceof Ia) return new I.Inl(I.NoArguments.value);
    if (T instanceof Ka) return new I.Inr(I.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 318, column 1 - line 318, column 58): " + [T.constructor.name]);
  }, function (T) {
    if (T instanceof I.Inl) return Ia.value;
    if (T instanceof I.Inr) return Ka.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 318, column 1 - line 318, column 58): " + [T.constructor.name]);
  }),
      nb = new Y.Show(V.genericShow(Wa)(V.genericShowSum(V.genericShowConstructor(V.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(V.genericShowConstructor(V.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      wb = new Ua(function () {
    var T = v.fromMaybe(Ia.value);
    return function (ba) {
      return T(y.hush(Xa(ba)));
    };
  }(), Y.show(nb), Y.show(nb)),
      Ra = new N.Functor(function (T) {
    return function (ba) {
      if (ba instanceof Ga) return Ga.create(N.map(v.functorMaybe)(T)(ba.value0));
      if (ba instanceof Sa) return Sa.create(N.map(v.functorMaybe)(T)(ba.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 363, column 1 - line 365, column 48): " + [T.constructor.name, ba.constructor.name]);
    };
  }),
      ob = function ob(T) {
    return function (ba) {
      return function (Ja) {
        return e.step(Ja)(function () {
          var Ca = v.isJust(Ja) ? !0 : !1;
          return b.bind(l.widgetBind)(p.select(l.widgetMultiAlternative(D.monoidArray))(l.widgetShiftMap)([k.value(v.maybe("")(ba.toOptionValue)(Ja)), N.map(f.functorProps)(function () {
            var Oa = ba.fromOptionValue;
            return function (Va) {
              return Oa(k.unsafeTargetValue(Va));
            };
          }())(k.onChange)])(q.cons(p.option(l.widgetMultiAlternative(D.monoidArray))(l.widgetShiftMap)([k.disabled(Ca)])([p.text(g.widgetLiftWidget)("Select ...")]))(N.mapFlipped(N.functorArray)(u.upFromIncluding(T.Enum1())(ka.unfoldable1Array)(E.bottom(T.Bounded0())))(function (Oa) {
            return p.option(l.widgetMultiAlternative(D.monoidArray))(l.widgetShiftMap)([k.value((0, ba.toOptionValue)(Oa))])([p.text(g.widgetLiftWidget)((0, ba.toOptionLabel)(Oa))]);
          }))))(function (Oa) {
            return r.pure(l.widgetApplicative)(ob(T)(ba)(new v.Just(Oa)));
          });
        }());
      };
    };
  },
      Ma = function Ma(T) {
    return function (ba) {
      return function (Ja) {
        return function (Ca) {
          return function (Oa) {
            return C.fold(T)(Ja)(N.map(ba)(Ca)(Oa));
          };
        };
      };
    };
  },
      fb = function fb(T) {
    T = Ma(C.foldableMaybe)(v.functorMaybe)(D.monoidString)(va.toString)(T);
    T = e.debounce(D.monoidArray)(1E3)(T)(gb);
    return bb(T);
  },
      hb = function hb(T) {
    return v.maybe(D.mempty(l.widgetMonoid(D.monoidArray)))(function (ba) {
      return p.div(l.widgetMultiAlternative(D.monoidArray))(l.widgetShiftMap)([k.style({
        color: "red"
      })])([p.text(g.widgetLiftWidget)(Y.show(T)(ba))]);
    });
  },
      pb = new F.Eq(L.genericEq(Wa)(L.genericEqSum(L.genericEqConstructor(L.genericEqNoArguments))(L.genericEqConstructor(L.genericEqNoArguments)))),
      qb = new B.Ord(function () {
    return pb;
  }, function (T) {
    return function (ba) {
      return U.genericCompare(Wa)(U.genericOrdSum(U.genericOrdConstructor(U.genericOrdNoArguments))(U.genericOrdConstructor(U.genericOrdNoArguments)))(T)(ba);
    };
  }),
      yb = new u.Enum(function () {
    return qb;
  }, M.genericPred(Wa)(M.genericEnumSum(M.genericEnumConstructor(M.genericEnumNoArguments))(K.genericTopConstructor(K.genericTopNoArguments))(M.genericEnumConstructor(M.genericEnumNoArguments))(K.genericBottomConstructor(K.genericBottomNoArguments))), M.genericSucc(Wa)(M.genericEnumSum(M.genericEnumConstructor(M.genericEnumNoArguments))(K.genericTopConstructor(K.genericTopNoArguments))(M.genericEnumConstructor(M.genericEnumNoArguments))(K.genericBottomConstructor(K.genericBottomNoArguments)))),
      zb = function zb(T) {
    return function (ba) {
      return ba instanceof v.Nothing ? "(None)" : Ta(T)(ba);
    };
  },
      Cb = new Ua(function (T) {
    return y.hush(H.readBoolean(T));
  }, zb(Y.showBoolean), Ta(Y.showBoolean)),
      m = new Ua(function () {
    var T = b.join(v.bindMaybe);
    return function (ba) {
      return T(y.hush(H.readInstitutionContactType(ba)));
    };
  }(), zb(da.showInstitutionContactType), Ta(da.showInstitutionContactType)),
      Ya = new Ua(function () {
    var T = b.join(v.bindMaybe);
    return function (ba) {
      return T(y.hush(H.readPolicyType(ba)));
    };
  }(), zb(da.showPolicyType), Ta(da.showPolicyType)),
      eb = function eb(T) {
    return N.voidRight(l.widgetFunctor)(!T)(p.input(g.widgetLiftWidget)([k._type("checkbox"), k.checked(T), k.onChange]));
  },
      xb = function xb(T) {
    return e.step(T)(b.bind(l.widgetBind)(eb(T))(function (ba) {
      return r.pure(l.widgetApplicative)(xb(ba));
    }));
  },
      Hb = new E.Bounded(function () {
    return qb;
  }, K.genericBottom(Wa)(K.genericBottomSum(K.genericBottomConstructor(K.genericBottomNoArguments))), K.genericTop(Wa)(K.genericTopSum(K.genericTopConstructor(K.genericTopNoArguments)))),
      Ib = new u.BoundedEnum(function () {
    return Hb;
  }, function () {
    return yb;
  }, M.genericCardinality(Wa)(M.genericBoundedEnumSum(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments))(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments))), M.genericFromEnum(Wa)(M.genericBoundedEnumSum(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments))(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments))), M.genericToEnum(Wa)(M.genericBoundedEnumSum(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments))(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments)))),
      Db = new w.Apply(function () {
    return Ra;
  }, function (T) {
    return function (ba) {
      if (T instanceof Ga && ba instanceof Ga || T instanceof Ga && ba instanceof Sa || T instanceof Sa && ba instanceof Ga) return Ga.create(w.apply(v.applyMaybe)(T.value0)(ba.value0));
      if (T instanceof Sa && ba instanceof Sa) return Sa.create(w.apply(v.applyMaybe)(T.value0)(ba.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 366, column 1 - line 370, column 63): " + [T.constructor.name, ba.constructor.name]);
    };
  }),
      Jb = new r.Applicative(function () {
    return Db;
  }, function (T) {
    return Ga.create(new v.Just(T));
  }),
      Eb = function Eb(T) {
    return function (ba) {
      var Ja = X.snd(ba),
          Ca = X.fst(ba),
          Oa = new Ga(v.Nothing.value);

      ba = function () {
        var ja = B.max(B.ordInt)(0)(Ca - q.length(Ja) | 0);
        return P.append(P.semigroupArray)(N.map(N.functorArray)(r.pure(Jb))(Ja))(N.mapFlipped(N.functorArray)(kb(1)(ja))(function (fa) {
          return Oa;
        }));
      }();

      var Va = function Va(ja) {
        return e.step(ja)(b.bind(l.widgetBind)(N.voidRight(l.widgetFunctor)(Sa.create($a(ja)))(p.button(l.widgetMultiAlternative(D.monoidArray))(l.widgetShiftMap)([k.onClick, ea.deleteItem])([p.text(g.widgetLiftWidget)("Delete")])))(function (fa) {
          return r.pure(l.widgetApplicative)(Va(fa));
        }));
      },
          S = function S(ja) {
        return p.li_(h.shiftMapCofree(D.monoidArray))([])(b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(T($a(ja)))(function (fa) {
          return b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(Va(new Ga(fa)))(function (oa) {
            return r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(oa);
          });
        }));
      },
          Z = function Z(ja) {
        if (ja instanceof Sa) return e.step(new Sa(v.Nothing.value))(D.mempty(l.widgetMonoid(D.monoidArray)));
        if (ja instanceof Ga) return S(ja);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 397, column 23 - line 399, column 35): " + [ja.constructor.name]);
      };

      return p.div_(h.shiftMapCofree(D.monoidArray))([])(b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(function (ja) {
        return function (fa) {
          return e.loopS(D.monoidArray)(new X.Tuple(ja, fa))(function (oa) {
            return p.ul_(h.shiftMapCofree(D.monoidArray))([])(function () {
              X.fst(oa);
              var xa = X.snd(oa);
              return b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(ya.traverse(ya.traversableArray)(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(Z)(xa))(function (Fa) {
                return b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(e.step(0)(N.voidRight(l.widgetFunctor)(r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(1))(p.button(l.widgetMultiAlternative(D.monoidArray))(l.widgetShiftMap)([k.onClick, ea.addItem])([p.text(g.widgetLiftWidget)("Add item")]))))(function (La) {
                  var Na = q.filter(mb)(Fa),
                      ab = q.length(Na) + La | 0;
                  La = N.mapFlipped(N.functorArray)(kb(1)(La))(function (jb) {
                    return Oa;
                  });
                  return r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(X.Tuple.create(ab)(P.append(P.semigroupArray)(Na)(La)));
                });
              });
            }());
          });
        };
      }(Ca)(ba))(function (ja) {
        return r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(G.second(G.strongFn)(function () {
          var fa = N.map(N.functorArray)($a);
          return function (oa) {
            return q.catMaybes(fa(oa));
          };
        }())(ja));
      }));
    };
  };

  c.menuSignal = ob;
  c.textInput = fb;

  c.dateInput = function (T) {
    var ba = qa.unsafePerformEffect(function (Oa) {
      return function () {
        var Va = ua.nowDateTime();
        Va = v.fromMaybe(Va)(y.hush(Oa));
        Va = na["try"](aa.dateTimeToStr(Va))();
        return t.lmap(y.bifunctorEither)(Y.show(na.showError))(Va);
      };
    }(T));
    T = b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)));
    var Ja = r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)));
    if (ba instanceof y.Left) var Ca = "";else if (ba instanceof y.Right) Ca = va.toString(ba.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 170, column 31 - line 172, column 34): " + [ba.constructor.name]);
    return T(Ja(Ca))(function (Oa) {
      var Va = b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray))),
          S = r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)));
      if (ba instanceof y.Left) var Z = ba.value0;else if (ba instanceof y.Right) Z = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 173, column 21 - line 175, column 18): " + [ba.constructor.name]);
      return Va(S(Z))(function (ja) {
        return b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(p.div_(h.shiftMapCofree(D.monoidArray))([k._id("mjUI_dateInput")])(fb(va.fromString(Oa))))(function (fa) {
          return b.discard(b.discardUnit)(h.bindCofree(l.widgetAlternative(D.monoidArray)))(r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(qa.unsafePerformEffect(Qa("mjUI_dateInput")("INPUT")(Oa))))(function () {
            return b.discard(b.discardUnit)(h.bindCofree(l.widgetAlternative(D.monoidArray)))(e.display(function () {
              if (ba instanceof y.Right) return D.mempty(l.widgetMonoid(D.monoidArray));
              if (ba instanceof y.Left) return hb(Y.showString)(new v.Just(ba.value0));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 179, column 13 - line 181, column 40): " + [ba.constructor.name]);
            }()))(function () {
              if (fa instanceof v.Just) return r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(qa.unsafePerformEffect(N.map(ia.functorEffect)(t.lmap(y.bifunctorEither)(Y.show(na.showError)))(na["try"](H.parseDate(fa.value0)))));
              if (fa instanceof v.Nothing) return r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(new y.Left("no date input"));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 182, column 3 - line 185, column 43): " + [fa.constructor.name]);
            });
          });
        });
      });
    });
  };

  c.natInput = function (T) {
    T = b.bind(v.bindMaybe)(N.mapFlipped(v.functorMaybe)(T)(function () {
      var ba = Y.show(Y.showInt);
      return function (Ja) {
        return ba(O.natToInt(Ja));
      };
    }()))(va.fromString);
    return b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(fb(T))(function (ba) {
      return r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(N.map(v.functorMaybe)(function () {
        var Ja = Ha.readInt(10);
        return function (Ca) {
          return O.intToNat(J.round(Ja(va.toString(Ca))));
        };
      }())(ba));
    });
  };

  c.urlInput = function (T) {
    if (T instanceof y.Left) var ba = "";else if (T instanceof y.Right) ba = va.toString(Pa.urlToNEString(T.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 218, column 15 - line 220, column 48): " + [T.constructor.name]);
    if (T instanceof y.Left) var Ja = T.value0;else if (T instanceof y.Right) Ja = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 214, column 15 - line 216, column 20): " + [T.constructor.name]);
    return b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(fb(va.fromString(ba)))(function (Ca) {
      var Oa = b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray))),
          Va = r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)));
      if (Ca instanceof v.Nothing) Ca = new y.Left(Ja);else if (Ca instanceof v.Just) Ca = Pa.parsePublicURL(va.toString(Ca.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 205, column 19 - line 207, column 46): " + [Ca.constructor.name]);
      return Oa(Va(Ca))(function (S) {
        return b.discard(b.discardUnit)(h.bindCofree(l.widgetAlternative(D.monoidArray)))(e.display(function () {
          if (S instanceof y.Right) return D.mempty(l.widgetMonoid(D.monoidArray));
          if (S instanceof y.Left) return hb(Y.showString)(new v.Just(S.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 208, column 13 - line 210, column 40): " + [S.constructor.name]);
        }()))(function () {
          return r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(S);
        });
      });
    });
  };

  c.emailInput = function (T) {
    if (T instanceof y.Left) var ba = "";else if (T instanceof y.Right) ba = ha.toString(T.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 238, column 15 - line 240, column 33): " + [T.constructor.name]);
    if (T instanceof y.Left) var Ja = T.value0;else if (T instanceof y.Right) Ja = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 15 - line 236, column 20): " + [T.constructor.name]);
    return b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(fb(va.fromString(ba)))(function (Ca) {
      var Oa = b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray))),
          Va = r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)));
      if (Ca instanceof v.Nothing) Ca = new y.Left(Ja);else if (Ca instanceof v.Just) Ca = Ea.validate(va.toString(Ca.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 225, column 21 - line 227, column 43): " + [Ca.constructor.name]);
      return Oa(Va(Ca))(function (S) {
        return b.discard(b.discardUnit)(h.bindCofree(l.widgetAlternative(D.monoidArray)))(e.display(function () {
          if (S instanceof y.Right) return D.mempty(l.widgetMonoid(D.monoidArray));
          if (S instanceof y.Left) return hb(Y.showString)(new v.Just(S.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 228, column 13 - line 230, column 40): " + [S.constructor.name]);
        }()))(function () {
          return r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(S);
        });
      });
    });
  };

  c.checkBoxS = xb;
  c.showDescSig = ib;

  c.mkDesc = function (T) {
    return function (ba) {
      var Ja = cb(T)(rb),
          Ca = n.alt(l.widgetAlt(D.monoidArray))(p.text(g.widgetLiftWidget)(Ja))(p["code'"](l.widgetMultiAlternative(D.monoidArray))(l.widgetShiftMap)([p.text(g.widgetLiftWidget)(" ")]));
      return ba && !pa["null"](Ja) ? Ca : D.mempty(l.widgetMonoid(D.monoidArray));
    };
  };

  c.FreeTextPolicy = Ia;

  c.checkPolicy = function (T) {
    return function (ba) {
      if (T instanceof Ia) {
        var Ja = N.mapFlipped(y.functorEither);
        ba = va.fromString(pa.trim(ba));
        if (ba instanceof v.Just) ba = new y.Right(ba.value0);else if (ba instanceof v.Nothing) ba = new y.Left("Empty string when NonEmptyString expected.");else throw Error("Failed pattern match at Metajelo.FormUtil (line 438, column 22 - line 440, column 63): " + [ba.constructor.name]);
        return Ja(ba)(da.FreeTextPolicy.create);
      }

      if (T instanceof Ka) return N.mapFlipped(y.functorEither)(Pa.parsePublicURL(ba))(da.RefPolicy.create);
      throw Error("Failed pattern match at Metajelo.FormUtil (line 348, column 25 - line 350, column 52): " + [T.constructor.name]);
    };
  };

  c.polPolTypeIs = function (T) {
    if (T instanceof da.FreeTextPolicy) return Ia.value;
    if (T instanceof da.RefPolicy) return Ka.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 353, column 18 - line 355, column 29): " + [T.constructor.name]);
  };

  c.arrayView = Eb;

  c.nonEmptyArrayView = function (T) {
    return function (ba) {
      return b.bind(h.bindCofree(l.widgetAlternative(D.monoidArray)))(Eb(T)(G.second(G.strongFn)(Ma(C.foldableMaybe)(v.functorMaybe)(D.monoidArray)(x.toArray))(ba)))(function (Ja) {
        return r.pure(h.applicativeCofree(l.widgetAlternative(D.monoidArray)))(G.second(G.strongFn)(x.fromArray)(Ja));
      });
    };
  };

  c.errorDisplay = hb;

  c.runEffectInit = function (T) {
    return function (ba) {
      return e.step(T)(b.bind(l.widgetBind)(Da.liftEffect(l.widgetMonadEff(D.monoidArray))(ba))(function (Ja) {
        return r.pure(l.widgetApplicative)(e.step(Ja)(d.empty(l.widgetPlus(D.monoidArray))));
      }));
    };
  };

  c.evTargetElem = function (T) {
    return N.map(ia.functorEffect)(za.fromNode)(sa.target(T));
  };

  c.getInputTextLE = function (T) {
    return function (ba) {
      return Da.liftEffect(T)(vb(ba));
    };
  };

  c.isOptionMaybeBoolean = Cb;
  c.isOptionIdentifierType = ub;
  c.isOptionInstitutionType = lb;
  c.isOptionMaybeInstitutionContactType = m;
  c.isOptionMaybePolicyType = Ya;
  c.isOptionRelationType = tb;
  c.isOptionResourceTypeGeneral = sb;
  c.boundedEnumPolPolType = Ib;
  c.isOptionPolPolType = wb;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var c = a["Metajelo.View"],
      e = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      f = a["Concur.React.DOM"],
      l = a["Concur.React.Props"],
      p = a["Control.Alt"],
      k = a["Control.Bind"],
      n = a["Control.Category"],
      r = a["Data.Array"],
      w = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      h = a["Data.Foldable"],
      d = a["Data.Functor"],
      q = a["Data.HeytingAlgebra"],
      x = a["Data.Maybe"],
      t = a["Data.Monoid"],
      E = a["Data.Natural"],
      y = a["Data.Profunctor.Strong"],
      u = a["Data.Semigroup"],
      F = a["Data.Show"],
      C = a["Data.String.CodePoints"],
      N = a["Data.String.NonEmpty.Internal"],
      I = a["Data.String.Utils"],
      K = a["Data.Unfoldable"],
      M = a["Data.Unfoldable1"],
      L = a["DataCite.Types.Common"],
      U = a["Foreign.Object"],
      V = a["Metajelo.CSS.Common.ClassNames"],
      J = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      v = a["Metajelo.CSS.Web.ClassProps"],
      D = a["Metajelo.CSS.Web.Util"],
      O = a["Metajelo.Types"],
      B = a["Text.Email.Parser"],
      G = a["Text.URL.Validate"],
      P = function () {
    var H = d.map(d.functorArray)(C.singleton);
    return function (aa) {
      return H(C.toCodePointArray(aa));
    };
  }(),
      Y = function Y(H) {
    var aa = f.text(H);
    return function (sa) {
      return aa(N.toString(sa));
    };
  },
      pa = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)(" ")]),
      va = function () {
    var H = h.intercalate(h.foldableArray)(t.monoidArray)([pa]),
        aa = d.map(d.functorArray)(M.singleton(M.unfoldable1Array));
    return function (sa) {
      return H(aa(sa));
    };
  }(),
      z = function z(H) {
    return f.div(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.institutionPolicy])(va([function (aa) {
      var sa = function () {
        if (aa instanceof x.Nothing) return {
          text: "May apply to product (unverified)",
          cls: J.appliesMaybe
        };
        if (aa instanceof x.Just && aa.value0) return {
          text: "Applies to product",
          cls: J.appliesYes
        };
        if (aa instanceof x.Just && !aa.value0) return {
          text: "Does not apply to product",
          cls: J.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 272, column 10 - line 275, column 75): " + [aa.constructor.name]);
      }();

      return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([D.cList([V.applies, sa.cls])])([function (ha) {
        return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.appliesInfo])([f.text(e.widgetLiftWidget)(ha)]);
      }(sa.text)]);
    }(H.appliesToProduct), h.foldMap(h.foldableMaybe)(g.widgetMonoid(t.monoidArray))(function (aa) {
      return f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.policyType])([f.text(e.widgetLiftWidget)(F.show(O.showPolicyType)(aa))]), f.text(e.widgetLiftWidget)(" Policy:")]);
    })(H.policyType), function (aa) {
      var sa = f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.policy]),
          ha = M.singleton(M.unfoldable1Array);
      if (aa instanceof O.FreeTextPolicy) aa = Y(e.widgetLiftWidget)(aa.value0);else if (aa instanceof O.RefPolicy) aa = G.urlToString(aa.value0), aa = f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([f.text(e.widgetLiftWidget)(aa)]);else throw Error("Failed pattern match at Metajelo.View (line 265, column 5 - line 268, column 40): " + [aa.constructor.name]);
      return sa(ha(aa));
    }(H.policy)]));
  },
      ya = function ya(H) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.institutionName])([Y(e.widgetLiftWidget)(H.institutionName)]);
  },
      X = function X(H) {
    return function (aa) {
      return h.foldMap(h.foldableMaybe)(t.monoidArray)(n.identity(n.categoryFn))(r.init(aa));
    };
  },
      ka = function ka(H) {
    return function (aa) {
      return function (sa) {
        return function (ha) {
          return function (Ea) {
            var Pa = U.fromFoldableWith(H)(u.append(ha)),
                Q = d.map(aa)(y.fanout(n.categoryFn)(y.strongFn)(Ea)(M.singleton(sa)));
            return function (za) {
              return Pa(Q(za));
            };
          };
        };
      };
    };
  },
      Aa = function Aa(H) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.basicMetadata, v.creatorList])(d.mapFlipped(d.functorArray)(w.toArray(H))(function (aa) {
      return f.span_(g.widgetShiftMap)([v.creator])(Y(e.widgetLiftWidget)(aa));
    }));
  },
      R = function R(H) {
    var aa = B.toString(H.emailAddress),
        sa = f.text(e.widgetLiftWidget);
    if (H.contactType instanceof x.Nothing) H = ".";else if (H.contactType instanceof x.Just) H = " (" + (F.show(O.showInstitutionContactType)(H.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 199, column 24 - line 201, column 41): " + [H.contactType.constructor.name]);
    sa = sa(H);
    return f.span_(g.widgetShiftMap)([v.institutionContact])(p.alt(g.widgetAlt(t.monoidArray))(p.alt(g.widgetAlt(t.monoidArray))(f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)("Institution Contact: ")]))(f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.contactEmail, l.href("mailto:" + aa)])([f.text(e.widgetLiftWidget)(aa)])))(f.span_(g.widgetShiftMap)([v.contactType])(sa)));
  },
      ia = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)(", ")]),
      Da = function Da(H) {
    return f.span_(g.widgetShiftMap)([v.formatList])(h.intercalate(h.foldableArray)(g.widgetMonoid(t.monoidArray))(ia)(d.mapFlipped(d.functorArray)(H)(function (aa) {
      return f.span_(g.widgetShiftMap)([v.format])(Y(e.widgetLiftWidget)(aa));
    })));
  },
      na = function na(H) {
    return f.span_(g.widgetShiftMap)([])(h.intercalate(h.foldableArray)(g.widgetMonoid(t.monoidArray))(ia)(d.mapFlipped(d.functorArray)(w.toArray(H))(function (aa) {
      return f.span_(g.widgetShiftMap)([v.title])(Y(e.widgetLiftWidget)(aa));
    })));
  },
      ua = function ua(H) {
    return f["cite'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([Y(e.widgetLiftWidget)(H)]);
  },
      qa = function qa(H) {
    if (H.identifierType instanceof L.ARK) return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(N.toString(H.identifier))])([ua(H.identifier)]);

    if (H.identifierType instanceof L.ArXiv) {
      var aa = "https://arxiv.org/abs/" + N.toString(H.identifier);
      return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([ua(H.identifier)]);
    }

    if (H.identifierType instanceof L.Bibcode) return aa = "https://ui.adsabs.harvard.edu/abs/" + (N.toString(H.identifier) + "/abstract"), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([ua(H.identifier)]);
    if (H.identifierType instanceof L.DOI) return aa = "https://doi.org/" + N.toString(H.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([ua(H.identifier)]);
    if (H.identifierType instanceof L.EAN13) return ua(H.identifier);
    if (H.identifierType instanceof L.EISSN) return aa = "https://www.worldcat.org/ISSN/" + N.toString(H.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([ua(H.identifier)]);
    if (H.identifierType instanceof L.Handle) return aa = "http://hdl.handle.net/" + N.toString(H.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([ua(H.identifier)]);
    if (H.identifierType instanceof L.IGSN) return aa = "http://igsn.org/" + N.toString(H.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([ua(H.identifier)]);
    if (H.identifierType instanceof L.ISBN) return ua(H.identifier);
    if (H.identifierType instanceof L.ISSN) return aa = "https://www.worldcat.org/ISSN/" + N.toString(H.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([ua(H.identifier)]);
    if (H.identifierType instanceof L.ISTC) return ua(H.identifier);
    if (H.identifierType instanceof L.LISSN) return aa = "https://www.worldcat.org/ISSN/" + N.toString(H.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([ua(H.identifier)]);
    if (H.identifierType instanceof L.LSID) return aa = "http://www.lsid.info/resolver/?lsid=" + N.toString(H.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([ua(H.identifier)]);
    if (H.identifierType instanceof L.PMID) return aa = "https://www.ncbi.nlm.nih.gov/pubmed/" + N.toString(H.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(aa)])([ua(H.identifier)]);
    if (H.identifierType instanceof L.PURL) return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(N.toString(H.identifier))])([ua(H.identifier)]);
    if (H.identifierType instanceof L.UPC) return ua(H.identifier);
    if (H.identifierType instanceof L.URL) return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(N.toString(H.identifier))])([ua(H.identifier)]);
    if (H.identifierType instanceof L.URN) return ua(H.identifier);
    throw Error("Failed pattern match at Metajelo.View (line 221, column 1 - line 221, column 47): " + [H.constructor.name]);
  },
      Ba = function Ba(H) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.identifier])([f.span_(g.widgetShiftMap)([v.idType])(f.text(e.widgetLiftWidget)(F.show(L.showIdentifierType)(H.identifierType))), f.span_(g.widgetShiftMap)([v.idUrl])(qa(H))]);
  },
      Ha = function Ha(H) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.relatedId])([f.span_(g.widgetShiftMap)([v.relType])(f.text(e.widgetLiftWidget)(F.show(L.showRelationType)(H.relationType))), pa, Ba({
      identifier: H.identifier,
      identifierType: H.identifierType
    })]);
  },
      ea = function ea(H) {
    return function (aa) {
      return function (sa) {
        if (aa) return H;

        if (h.any(h.foldableArray)(q.heytingAlgebraBoolean)(function (Ea) {
          return I.endsWith(Ea)(H);
        })([";", ".", ","])) {
          var ha = P(H);
          return I.fromCharArray(X(t.monoidString)(ha)) + sa;
        }

        return H + sa;
      };
    };
  },
      ma = function ma(H) {
    var aa = ya(H),
        sa = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)("("), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.institutionId])([Ba(H.institutionID)]), f.text(e.widgetLiftWidget)("; "), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.institutionType])([f.text(e.widgetLiftWidget)(F.show(O.showInstitutionType)(H.institutionType))]), f.text(e.widgetLiftWidget)(ea(")")(x.isNothing(H.superOrganizationName))(","))]);
    if (H.superOrganizationName instanceof x.Nothing) var ha = t.mempty(g.widgetMonoid(t.monoidArray));else if (H.superOrganizationName instanceof x.Just) ha = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)("a member of "), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.superOrg])([f.text(e.widgetLiftWidget)(ea(N.toString(H.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 161, column 7 - line 167, column 10): " + [H.superOrganizationName.constructor.name]);
    return va([aa, sa, ha, R(H.institutionContact), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.sustainability])([f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.missionStatement, l.href(G.urlToString(H.institutionSustainability.missionStatementURL))])([f.text(e.widgetLiftWidget)("Mission Statement")]), f.text(e.widgetLiftWidget)("; "), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.fundingStatement, l.href(G.urlToString(H.institutionSustainability.fundingStatementURL))])([f.text(e.widgetLiftWidget)("Funding Statement")]), f.text(e.widgetLiftWidget)(".")]), f.ul(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.institutionPolicies])(d.map(d.functorArray)(function (Ea) {
      return f["li'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([z(Ea)]);
    })(w.toArray(H.institutionPolicies))), function (Ea) {
      if (Ea) Ea = "Versioned";else {
        if (Ea) throw Error("Failed pattern match at Metajelo.View (line 188, column 14 - line 190, column 31): " + [Ea.constructor.name]);
        Ea = "Unversioned";
      }
      return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.versioning])([f.text(e.widgetLiftWidget)(Ea)]);
    }(H.versioning)]);
  },
      da = function da(H) {
    if (H.resourceID instanceof x.Just) var aa = f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.resourceId])([Ba(H.resourceID.value0), f.text(e.widgetLiftWidget)(".")]);else if (H.resourceID instanceof x.Nothing) aa = t.mempty(g.widgetMonoid(t.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 127, column 17 - line 129, column 24): " + [H.resourceID.constructor.name]);
    var sa = [Aa(H.basicMetadata.creators), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.basicMetadata, v.pubyear])([f.text(e.widgetLiftWidget)(F.show(F.showInt)(E.natToInt(H.basicMetadata.publicationYear)))]), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.basicMetadata, v.title])([na(H.basicMetadata.titles), f.text(e.widgetLiftWidget)(ea("")(x.isNothing(H.resourceID))(","))])];
    aa = u.append(u.semigroupArray)(sa)([f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([ya(H.location), f.text(e.widgetLiftWidget)(".")]), aa]);
    return f.div(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.product])(va(u.append(u.semigroupArray)([f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.productCitation])([f["cite'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)(va(aa))])])(u.append(u.semigroupArray)([Da(H.format)])(ma(H.location)))));
  };

  c.spacify = va;

  c.mkRecordWidget = function (H) {
    var aa = function () {
      var Ea = d.map(b.functorNonEmptyArray)(function (Pa) {
        return f.li(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.relatedId])([Pa]);
      })(d.map(b.functorNonEmptyArray)(Ha)(H.relatedIdentifiers));
      return f.ul(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.relatedIdList])(w.toArray(Ea));
    }(),
        sa = ka(b.foldableNonEmptyArray)(b.functorNonEmptyArray)(b.unfoldable1NonEmptyArray)(b.semigroupNonEmptyArray)(function (Ea) {
      return F.show(L.showResourceTypeGeneral)(Ea.resourceType.generalType) + (": " + Ea.resourceType.description);
    })(H.supplementaryProducts),
        ha = function ha(Ea) {
      Ea = k.join(k.bindArray)(K.fromMaybe(K.unfoldableArray)(d.map(x.functorMaybe)(w.toArray)(U.lookup(Ea)(sa))));
      var Pa = f.span_(g.widgetShiftMap)([v.resourceType])(h.fold(h.foldableMaybe)(g.widgetMonoid(t.monoidArray))(d.mapFlipped(x.functorMaybe)(r.head(Ea))(function (Q) {
        return p.alt(g.widgetAlt(t.monoidArray))(p.alt(g.widgetAlt(t.monoidArray))(f.span_(g.widgetShiftMap)([v.resourceTypeGen])(f.text(e.widgetLiftWidget)(F.show(L.showResourceTypeGeneral)(Q.resourceType.generalType))))(f.span_(g.widgetShiftMap)([v.resourceTypeDescr])(f.text(e.widgetLiftWidget)(Q.resourceType.description))))(f["br'"](e.widgetLiftWidget));
      })));
      return f["div'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)(r.cons(Pa)(d.map(d.functorArray)(da)(Ea)));
    };

    F.show(L.showIdentifierType)(H.identifier.identifierType);
    return f.div(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.record])([f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.productsHeader])([f.span_(g.widgetShiftMap)([v.recordId])(Ba(H.identifier))]), f.ul(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.productList])(d.map(d.functorArray)(function (Ea) {
      return f.li_(g.widgetShiftMap)([v.productGroup])(ha(Ea));
    })(U.keys(sa))), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.relatedIdsHeader])([]), aa]);
  };

  c.mkSupplementaryProductWidget = da;
  c.locElems = ma;
})(PS);

(function (a) {
  a.pickFn = function (c, e) {
    for (var g = {}, f = 0; f < c.length; f++) {
      "undefined" !== typeof e[c[f]] && (g[c[f]] = e[c[f]]);
    }

    return g;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a.unsafeGet = function (c) {
    return function (e) {
      return e[c];
    };
  };

  a.unsafeSet = function (c) {
    return function (e) {
      return function (g) {
        var f = {},
            l;

        for (l in g) {
          ({}).hasOwnProperty.call(g, l) && (f[l] = g[l]);
        }

        f[c] = e;
        return f;
      };
    };
  };

  a.unsafeDelete = function (c) {
    return function (e) {
      var g = {},
          f;

      for (f in e) {
        f !== c && {}.hasOwnProperty.call(e, f) && (g[f] = e[f]);
      }

      return g;
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
      e = a["Data.Symbol"],
      g = a["Record.Unsafe"];

  c.get = function (f) {
    return function (l) {
      return function (p) {
        return function (k) {
          return g.unsafeGet(e.reflectSymbol(f)(p))(k);
        };
      };
    };
  };

  c.insert = function (f) {
    return function (l) {
      return function (p) {
        return function (k) {
          return function (n) {
            return function (r) {
              return g.unsafeSet(e.reflectSymbol(f)(k))(n)(r);
            };
          };
        };
      };
    };
  };

  c["delete"] = function (f) {
    return function (l) {
      return function (p) {
        return function (k) {
          return function (n) {
            return g.unsafeDelete(e.reflectSymbol(f)(k))(n);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var c = a["Record.Extra"],
      e = a["Data.List.Types"],
      g = a["Data.Monoid"],
      f = a["Data.Symbol"],
      l = a["Type.Data.RowList"],
      p = function p(k) {
    this.keysImpl = k;
  };

  a = new p(function (k) {
    return g.mempty(e.monoidList);
  });

  c.keys = function (k) {
    return function (n) {
      return function (r) {
        return (0, n.keysImpl)(l.RLProxy.value);
      };
    };
  };

  c.nilKeys = a;

  c.consKeys = function (k) {
    return function (n) {
      return new p(function (r) {
        r = (0, n.keysImpl)(l.RLProxy.value);
        var w = f.reflectSymbol(k)(f.SProxy.value);
        return new e.Cons(w, r);
      });
    };
  };
})(PS);

(function (a) {
  a.Option = a.Option || {};

  var c = a.Option,
      e = a.Option,
      g = a["Control.Monad.State.Class"],
      f = a["Control.Monad.State.Trans"],
      l = a["Data.Array"],
      p = a["Data.Function.Uncurried"],
      k = a["Data.Identity"],
      n = a["Data.List.Types"],
      r = a["Data.Maybe"],
      w = a["Data.Symbol"],
      b = a["Foreign.Object"],
      h = a.Record,
      d = a["Record.Extra"],
      q = a["Type.Data.Row"],
      x = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      t = function t(J) {
    this.getAllOption = J;
  },
      E = function E(J) {
    this["getAll'"] = J;
  },
      y = function y(J) {
    this.fromRecordOption = J;
  },
      u = function u(J) {
    this["fromRecord'"] = J;
  },
      F = function F(J) {
    return function (v) {
      return function (D) {
        D = l.fromFoldable(n.foldableList)(d.keys()(D)(q.RProxy.value));
        return p.runFn2(e.pickFn)(D);
      };
    };
  };

  a = new t(function (J) {
    return function (v) {
      return new r.Just({});
    };
  });

  var C = b.empty,
      N = new y(function (J) {
    return function (v) {
      return C;
    };
  }),
      I = function I(J) {
    return function (v) {
      return function (D) {
        return function (O) {
          var B = w.reflectSymbol(J)(w.SProxy.value),
              G = b.alter(function (P) {
            return v(P);
          })(B)(O);
          O = v(b.lookup(B)(O));
          return {
            option: G,
            value: O
          };
        };
      };
    };
  },
      K = function K(J) {
    return function (v) {
      return function (D) {
        return function (O) {
          return function (B) {
            return I(J)(function (G) {
              return r.Nothing.value;
            })(O)(B).option;
          };
        };
      };
    };
  },
      M = function M(J) {
    return function (v) {
      return function (D) {
        return function (O) {
          return I(J)(function (B) {
            return B;
          })(D)(O).value;
        };
      };
    };
  },
      L = function L(J) {
    return function (v) {
      return function (D) {
        return function (O) {
          return function (B) {
            return I(J)(function (G) {
              return new r.Just(O);
            })(D)(B).option;
          };
        };
      };
    };
  },
      U = function U(J) {
    return function (v) {
      return function (D) {
        return function (O) {
          return function (B) {
            if (O instanceof r.Just) return L(J)()(D)(O.value0)(B);
            if (O instanceof r.Nothing) return B;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [O.constructor.name]);
          };
        };
      };
    };
  },
      V = function V(J) {
    return function (v) {
      return function (D) {
        return function (O) {
          return function (B) {
            return function (G) {
              return I(J)(function (P) {
                return new r.Just(B);
              })(O)(G).option;
            };
          };
        };
      };
    };
  };

  c.fromRecord = function (J) {
    return J["fromRecord'"];
  };

  c.empty = C;
  c.get = M;

  c.getAll = function (J) {
    return J["getAll'"];
  };

  c.getSubset = function (J) {
    return function (v) {
      return function (D) {
        return function (O) {
          return function (B) {
            return (0, O["getAll'"])(F()()(D)(B));
          };
        };
      };
    };
  };

  c.getWithDefault = function (J) {
    return function (v) {
      return function (D) {
        return function (O) {
          return function (B) {
            B = M(J)()(O)(B);
            if (B instanceof r.Just) return B.value0;
            if (B instanceof r.Nothing) return D;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [B.constructor.name]);
          };
        };
      };
    };
  };

  c.maySetOptState = function (J) {
    return function (v) {
      return function (D) {
        return function (O) {
          return function (B) {
            return g.put(f.monadStateStateT(k.monadIdentity))(U(J)()(D)(O)(B));
          };
        };
      };
    };
  };

  c.fromRecordAny = function (J) {
    return function (v) {
      return new u((0, J.fromRecordOption)(x.value));
    };
  };

  c.fromRecordOptionNil = N;

  c.fromRecordOptionCons = function (J) {
    return function (v) {
      return function (D) {
        return function (O) {
          return function (B) {
            return function (G) {
              return new y(function (P) {
                return function (Y) {
                  var pa = h["delete"](J)()()(w.SProxy.value)(Y);
                  pa = (0, v.fromRecordOption)(x.value)(pa);
                  Y = h.get(J)()(w.SProxy.value)(Y);
                  return V(J)()()(w.SProxy.value)(Y)(pa);
                };
              });
            };
          };
        };
      };
    };
  };

  c.getAllAny = function (J) {
    return function (v) {
      return new E((0, v.getAllOption)(x.value));
    };
  };

  c.getAllOptionNil = a;

  c.getAllOptionCons = function (J) {
    return function (v) {
      return function (D) {
        return function (O) {
          return function (B) {
            return function (G) {
              return new t(function (P) {
                return function (Y) {
                  var pa = K(J)()()(w.SProxy.value)(Y);
                  pa = (0, G.getAllOption)(x.value)(pa);
                  Y = M(J)()(w.SProxy.value)(Y);

                  if (pa instanceof r.Just) {
                    if (Y instanceof r.Just) return new r.Just(h.insert(J)()()(w.SProxy.value)(Y.value0)(pa.value0));
                    if (Y instanceof r.Nothing) return r.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [Y.constructor.name]);
                  }

                  if (pa instanceof r.Nothing) return r.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [pa.constructor.name]);
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
    return function (e) {
      return e.item(c);
    };
  };
})(PS["Web.File.FileList"] = PS["Web.File.FileList"] || {});

(function (a) {
  a["Web.File.FileList"] = a["Web.File.FileList"] || {};
  var c = a["Web.File.FileList"],
      e = a["Data.Nullable"];

  a["Web.File.FileList"].item = function (g) {
    var f = c._item(g);

    return function (l) {
      return e.toMaybe(f(l));
    };
  };
})(PS);

(function (a) {
  a.eventListener = function (c) {
    return function () {
      return function (e) {
        return c(e)();
      };
    };
  };

  a.addEventListener = function (c) {
    return function (e) {
      return function (g) {
        return function (f) {
          return function () {
            return f.addEventListener(c, e, g);
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
    return function (e) {
      return function () {
        e.readAsText(c);
      };
    };
  };
})(PS["Web.File.FileReader"] = PS["Web.File.FileReader"] || {});

(function (a) {
  a["Web.File.FileReader"] = a["Web.File.FileReader"] || {};
  var c = a["Web.File.FileReader"],
      e = a["Web.File.FileReader"];
  c.toEventTarget = a["Unsafe.Coerce"].unsafeCoerce;
  c.fileReader = e.fileReader;
  c.result = e.result;
  c.readAsText = e.readAsText;
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
      e = a["Control.Monad.Except"],
      g = a["Data.Either"],
      f = a["Data.List.Types"],
      l = a["Data.Monoid"],
      p = a["Data.Show"],
      k = a["Effect.Aff"],
      n = a["Effect.Exception"],
      r = a.Foreign,
      w = a["Web.Event.EventTarget"],
      b = a["Web.File.FileReader"],
      h = a["Web.HTML.Event.EventTypes"];

  a = function (d) {
    return function (q) {
      return function (x) {
        return k.makeAff(function (t) {
          var E = function E(y) {
            return t(g.Right.create(y));
          };

          return function () {
            var y = b.fileReader(),
                u = b.toEventTarget(y),
                F = w.eventListener(function (N) {
              return t(g.Left.create(n.error("error")));
            })(),
                C = w.eventListener(function (N) {
              return function () {
                var I = b.result(y)();
                return g.either(function (K) {
                  return t(g.Left.create(n.error(p.show(f.showNonEmptyList(r.showForeignError))(K))));
                })(E)(e.runExcept(d(I)))();
              };
            })();
            w.addEventListener(h.error)(F)(!1)(u)();
            w.addEventListener(h.load)(C)(!1)(u)();
            q(x)(y)();
            return l.mempty(k.monoidCanceler);
          };
        });
      };
    };
  }(r.readString)(b.readAsText);

  c.readAsText = a;
})(PS);

(function (a) {
  a._read = function (c, e, g) {
    var f = Object.prototype.toString.call(g);
    return 0 === f.indexOf("[object HTML") && f.indexOf("Element]") === f.length - 8 ? e(g) : c;
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
      e = a["Web.HTML.HTMLElement"],
      g = a["Data.Maybe"];

  c.fromElement = function (f) {
    return e._read(g.Nothing.value, g.Just.create, f);
  };

  c.click = e.click;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var c = a["Metajelo.UI"],
      e = a.Affjax,
      g = a["Affjax.ResponseFormat"],
      f = a["Concur.Core.FRP"],
      l = a["Concur.Core.LiftWidget"],
      p = a["Concur.Core.Props"],
      k = a["Concur.Core.Types"],
      n = a["Concur.React.DOM"],
      r = a["Concur.React.Props"],
      w = a["Concur.React.Run"],
      b = a["Control.Applicative"],
      h = a["Control.Apply"],
      d = a["Control.Bind"],
      q = a["Control.Cofree"],
      x = a["Control.Monad.Except.Trans"],
      t = a["Control.Monad.Maybe.Trans"],
      E = a["Control.Monad.State"],
      y = a["Control.Monad.State.Class"],
      u = a["Control.Monad.State.Trans"],
      F = a["Control.Monad.Writer"],
      C = a["Control.Plus"],
      N = a["Data.Array"],
      I = a["Data.Array.NonEmpty"],
      K = a["Data.Array.NonEmpty.Internal"],
      M = a["Data.Bifunctor"],
      L = a["Data.Either"],
      U = a["Data.Enum"],
      V = a["Data.Foldable"],
      J = a["Data.Functor"],
      v = a["Data.Identity"],
      D = a["Data.Maybe"],
      O = a["Data.Maybe.First"],
      B = a["Data.Monoid"],
      G = a["Data.Newtype"],
      P = a["Data.Semigroup"],
      Y = a["Data.Show"],
      pa = a["Data.String.Common"],
      va = a["Data.String.NonEmpty.Internal"],
      z = a["Data.Symbol"],
      ya = a["Data.Traversable"],
      X = a["Data.Tuple"],
      ka = a["Data.UUID"],
      Aa = a["Data.Unit"],
      R = a["Data.Void"],
      ia = a["DataCite.JSON.Decode.Simple"],
      Da = a["DataCite.Types.Common"],
      na = a.Effect,
      ua = a["Effect.Aff.Class"],
      qa = a["Effect.Class"],
      Ba = a["Effect.Class.Console"],
      Ha = a["Effect.Exception"],
      ea = a["Effect.Now"],
      ma = a["Effect.Unsafe"],
      da = a.Global,
      H = a["Metajelo.CSS.UI.ClassProps"],
      aa = a["Metajelo.CSS.UI.Util"],
      sa = a["Metajelo.CSS.Web.ClassProps"],
      ha = a["Metajelo.FormUtil"],
      Ea = a["Metajelo.Types"],
      Pa = a["Metajelo.View"],
      Q = a["Metajelo.XPaths"],
      za = a["Metajelo.XPaths.Read"],
      ca = a["Metajelo.XPaths.Write"],
      la = a["Nonbili.DOM"],
      A = a.Option,
      W = a["Record.Extra"],
      ra = a["Text.URL.Validate"],
      ta = a["Web.DOM.Document"],
      wa = a["Web.DOM.Element"],
      Ia = a["Web.File.File"],
      Ka = a["Web.File.FileList"],
      Ga = a["Web.File.FileReader.Aff"],
      Sa = a["Web.HTML"],
      Ua = a["Web.HTML.HTMLDocument"],
      Za = a["Web.HTML.HTMLElement"],
      $a = a["Web.HTML.HTMLInputElement"],
      gb = a["Web.HTML.Window"],
      bb = function bb(S) {
    return function (Z) {
      return function (ja) {
        return function (fa) {
          return function (oa) {
            return J.mapFlipped(D.functorMaybe)(A.get(S)(Z)(ja)(fa))(function (xa) {
              return E.execState(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "descs_on";
              }))()(z.SProxy.value)(new D.Just(oa))))(xa);
            });
          };
        };
      };
    };
  },
      cb = function cb(S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.title])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.titleHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      return ha.textInput(S);
    }));
  },
      db = function db(S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.titleList])(ha.nonEmptyArrayView(cb)(S));
  },
      ib = function ib(S) {
    return function () {
      var Z = Sa.window();
      Z = gb.document(Z)();
      Z = Ua.toDocument(Z);
      Z = ta.createElement("a")(Z)();
      wa.setAttribute("download")("metajelo.xml")(Z)();
      wa.setAttribute("href")("data:text/plain;charset=utf-8," + S)(Z)();
      Z = Za.fromElement(Z);
      if (Z instanceof D.Just) Z = Za.click(Z.value0);else if (Z instanceof D.Nothing) Z = Ba.log(qa.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + S);else throw Error("Failed pattern match at Metajelo.UI (line 129, column 26 - line 133, column 18): " + [Z.constructor.name]);
      return Z;
    };
  },
      Qa = function Qa(S) {
    return function (Z) {
      return A.getWithDefault(S)()(A.empty);
    };
  },
      kb = function kb(S) {
    var Z = va.fromString("urn:uuid:"),
        ja = A.get(new z.IsSymbol(function () {
      return "identifier";
    }))()(z.SProxy.value)(S);
    return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(function () {
      if (ja instanceof D.Just) return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(new D.Just(ja.value0));
      if (ja instanceof D.Nothing) return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(ha.runEffectInit(ka.emptyUUID)(ka.genUUID))(function (fa) {
        return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(d.bind(D.bindMaybe)(Z)(function (oa) {
          return d.bind(D.bindMaybe)(va.fromString(ka.toString(fa)))(function (xa) {
            return b.pure(D.applicativeMaybe)(P.append(va.semigroupNonEmptyString)(oa)(xa));
          });
        }));
      });
      throw Error("Failed pattern match at Metajelo.UI (line 743, column 15 - line 750, column 30): " + [ja.constructor.name]);
    }())(function (fa) {
      return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "identifier";
      }))()(z.SProxy.value)(fa)))(function () {
        return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "identifierType";
        }))()(z.SProxy.value)(new D.Just(Da.URN.value)));
      }))(S));
    });
  },
      Xa = function Xa(S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.format])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.formatHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      return ha.textInput(S);
    }));
  },
      rb = function rb(S) {
    return function (Z) {
      return n.div_(q.shiftMapCofree(B.monoidArray))([H.formatList])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.formatListHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
        return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("formatEle")(S)))(function () {
          return ha.arrayView(Xa)(Z);
        });
      }));
    };
  },
      Ta = function Ta(S) {
    return function () {
      return {
        lastModified: ea.nowDateTime(),
        date: S.date,
        identifier: S.identifier,
        relatedIdentifiers: S.relatedIdentifiers,
        supplementaryProducts: S.supplementaryProducts
      };
    };
  },
      sb = function sb(S) {
    return function (Z) {
      var ja = J.map(K.functorNonEmptyArray)(function (Na) {
        return Na.title;
      })(Z.data.attributes.titles),
          fa = J.map(K.functorNonEmptyArray)(function (Na) {
        return Na.name;
      })(Z.data.attributes.creators);
      Z = Qa(new z.IsSymbol(function () {
        return "basicMetadata_opt";
      }))()(z.SProxy.value)(S);
      var oa = A.get(new z.IsSymbol(function () {
        return "creators";
      }))()(z.SProxy.value)(Z),
          xa = D.maybe(fa)(function (Na) {
        return P.append(K.semigroupNonEmptyArray)(Na)(fa);
      })(oa);
      oa = A.get(new z.IsSymbol(function () {
        return "titles";
      }))()(z.SProxy.value)(Z);
      oa = D.maybe(ja)(function (Na) {
        return P.append(K.semigroupNonEmptyArray)(Na)(ja);
      })(oa);
      var Fa = I.length(oa),
          La = I.length(xa);
      Z = E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "titles";
      }))()(z.SProxy.value)(new D.Just(oa))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "_numTitles";
        }))()(z.SProxy.value)(new D.Just(Fa))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "creators";
          }))()(z.SProxy.value)(new D.Just(xa))))(function () {
            return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "_numCreators";
            }))()(z.SProxy.value)(new D.Just(La)));
          });
        });
      }))(Z);
      return E.execState(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "basicMetadata_opt";
      }))()(z.SProxy.value)(new D.Just(Z))))(S);
    };
  },
      tb = function tb(S) {
    var Z = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "fundingStatementURL";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "missionStatementURL";
    }))(A.fromRecordOptionNil)()()()())()()()())())(S),
        ja = new L.Right(S.missionStatementURL),
        fa = new L.Right(S.fundingStatementURL);
    return E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(z.SProxy.value)(new D.Just(ja))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(z.SProxy.value)(new D.Just(fa))))(function () {
        return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "descs_on";
        }))()(z.SProxy.value)(new D.Just(!0)));
      });
    }))(Z);
  },
      lb = function lb(S) {
    var Z = new L.Right(S.url);
    S = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "relationType";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "url";
    }))(A.fromRecordOptionNil)()()()())()()()())())(S);
    return E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "url_Ei";
    }))()(z.SProxy.value)(new D.Just(Z))))(function () {
      return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "descs_on";
      }))()(z.SProxy.value)(new D.Just(!0)));
    }))(S);
  },
      ub = function ub(S) {
    if (S.policy instanceof Ea.FreeTextPolicy) var Z = new D.Just(S.policy.value0);else if (S.policy instanceof Ea.RefPolicy) Z = va.fromString(ra.urlToString(S.policy.value0));else throw Error("Failed pattern match at Metajelo.UI (line 438, column 20 - line 440, column 54): " + [S.policy.constructor.name]);
    var ja = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "appliesToProduct";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "policy";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "policyType";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())())(S);
    return E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "policy_str";
    }))()(z.SProxy.value)(Z)))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "polPolType";
      }))()(z.SProxy.value)(D.Just.create(ha.polPolTypeIs(S.policy)))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "policy_ei";
        }))()(z.SProxy.value)(D.Just.create(new L.Right(S.policy)))))(function () {
          return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "descs_on";
          }))()(z.SProxy.value)(new D.Just(!0)));
        });
      });
    }))(ja);
  },
      mb = function mb(S) {
    return E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "email_Ei";
    }))()(z.SProxy.value)(D.Just.create(new L.Right(S.emailAddress)))))(function () {
      return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "descs_on";
      }))()(z.SProxy.value)(new D.Just(!0)));
    }))(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "contactType";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "emailAddress";
    }))(A.fromRecordOptionNil)()()()())()()()())())(S));
  },
      vb = function vb(S) {
    var Z = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "institutionContact";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "institutionID";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "institutionName";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "institutionPolicies";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "institutionSustainability";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "institutionType";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "superOrganizationName";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "versioning";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(S),
        ja = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifierType";
    }))(A.fromRecordOptionNil)()()()())()()()())())(S.institutionID),
        fa = mb(S.institutionContact),
        oa = tb(S.institutionSustainability),
        xa = J.map(K.functorNonEmptyArray)(ub)(S.institutionPolicies),
        Fa = I.length(S.institutionPolicies);
    return E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "institutionID_opt";
    }))()(z.SProxy.value)(new D.Just(ja))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "_numPolicies";
      }))()(z.SProxy.value)(new D.Just(Fa))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "iSustain_opt";
        }))()(z.SProxy.value)(new D.Just(oa))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "institutionContact_opt";
          }))()(z.SProxy.value)(new D.Just(fa))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "institutionPolicies_opt";
            }))()(z.SProxy.value)(new D.Just(xa))))(function () {
              return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "descs_on";
              }))()(z.SProxy.value)(new D.Just(!0)));
            });
          });
        });
      });
    }))(Z);
  },
      Wa = function Wa(S) {
    var Z = I.length(S.titles),
        ja = I.length(S.creators);
    return E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "_numTitles";
    }))()(z.SProxy.value)(new D.Just(Z))))(function () {
      return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "_numCreators";
      }))()(z.SProxy.value)(new D.Just(ja)));
    }))(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "creators";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "publicationYear";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "titles";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())())(S));
  },
      nb = function nb(S) {
    var Z = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "basicMetadata";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "format";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "location";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "resourceID";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "resourceType";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(S),
        ja = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "description";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "generalType";
    }))(A.fromRecordOptionNil)()()()())()()()())())(S.resourceType),
        fa = J.map(D.functorMaybe)(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifierType";
    }))(A.fromRecordOptionNil)()()()())()()()())()))(S.resourceID),
        oa = J.map(D.functorMaybe)(lb)(S.resourceMetadataSource),
        xa = vb(S.location),
        Fa = Wa(S.basicMetadata),
        La = N.length(S.format);
    return E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(z.SProxy.value)(new D.Just(Fa))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "resourceID_opt";
      }))()(z.SProxy.value)(fa)))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "resourceType_opt";
        }))()(z.SProxy.value)(new D.Just(ja))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "_numFormats";
          }))()(z.SProxy.value)(new D.Just(La))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(z.SProxy.value)(oa)))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(z.SProxy.value)(new D.Just(xa))))(function () {
                return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "descs_on";
                }))()(z.SProxy.value)(new D.Just(!0)));
              });
            });
          });
        });
      });
    }))(Z);
  },
      wb = function wb(S) {
    var Z = J.map(K.functorNonEmptyArray)(nb)(S.supplementaryProducts),
        ja = J.map(K.functorNonEmptyArray)(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifierType";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "relationType";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())()))(S.relatedIdentifiers),
        fa = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "date";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "lastModified";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "supplementaryProducts";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(S),
        oa = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifierType";
    }))(A.fromRecordOptionNil)()()()())()()()())())(S.identifier),
        xa = I.length(S.supplementaryProducts),
        Fa = I.length(S.relatedIdentifiers);
    return E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "identifier_opt";
    }))()(z.SProxy.value)(new D.Just(oa))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "date_Ei";
      }))()(z.SProxy.value)(D.Just.create(new L.Right(S.date)))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "_numRelIds";
        }))()(z.SProxy.value)(new D.Just(Fa))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "relId_opts";
          }))()(z.SProxy.value)(new D.Just(ja))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "_numSupProds";
            }))()(z.SProxy.value)(new D.Just(xa))))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "supProd_opts";
              }))()(z.SProxy.value)(new D.Just(Z))))(function () {
                return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "descs_on";
                }))()(z.SProxy.value)(new D.Just(!0)));
              });
            });
          });
        });
      });
    }))(fa);
  },
      Ra = function () {
    var S = M.lmap(L.bifunctorEither)(function (ja) {
      return Ha.error("Error reading XML - please make sure it is well-formed.");
    }),
        Z = d.bind(k.widgetBind)(n.input(l.widgetLiftWidget)([r._type("file"), J.map(p.functorProps)(ha.evTargetElem)(r.onChange)]))(function (ja) {
      return d.bind(k.widgetBind)(qa.liftEffect(k.widgetMonadEff(B.monoidArray))(t.runMaybeT(d.bind(t.bindMaybeT(na.monadEffect))(ja)(function (fa) {
        return d.bind(t.bindMaybeT(na.monadEffect))(t.MaybeT(b.pure(na.applicativeEffect)($a.fromElement(fa))))(function (oa) {
          return d.bind(t.bindMaybeT(na.monadEffect))(t.MaybeT($a.files(oa)))(function (xa) {
            return d.bind(t.bindMaybeT(na.monadEffect))(t.MaybeT(b.pure(na.applicativeEffect)(Ka.item(0)(xa))))(function (Fa) {
              return b.pure(t.applicativeMaybeT(na.monadEffect))(Ia.toBlob(Fa));
            });
          });
        });
      }))))(function (fa) {
        if (fa instanceof D.Nothing) return Z;
        if (fa instanceof D.Just) return d.bind(k.widgetBind)(ua.liftAff(k.widgetMonadAff(B.monoidArray))(Ga.readAsText(fa.value0)))(function (oa) {
          return d.bind(k.widgetBind)(qa.liftEffect(k.widgetMonadEff(B.monoidArray))(x.runExceptT(d.bind(x.bindExceptT(na.monadEffect))(x.ExceptT(J.map(na.functorEffect)(S)(Ha["try"](Q.getDefaultParseEnv(oa)))))(function (xa) {
            return x.ExceptT(Ha["try"](za.readRecord(xa)));
          }))))(function (xa) {
            if (xa instanceof L.Right) return b.pure(k.widgetApplicative)(xa.value0);

            if (xa instanceof L.Left) {
              var Fa = xa.value0;
              xa = n.div(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([]);
              var La = Z,
                  Na = n.div_(k.widgetShiftMap)([sa.errorDisplayBox]),
                  ab = n.div_(k.widgetShiftMap)([]),
                  jb = n.span(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([sa.errorDisplay]),
                  Ab = n.text(l.widgetLiftWidget);
              Fa = "Couldn't decode MetajeloXML: " + Y.show(Ha.showError)(Fa);
              return xa([La, Na(ab(jb([Ab(Fa)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 158, column 11 - line 160, column 37): " + [xa.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 151, column 7 - line 160, column 37): " + [fa.constructor.name]);
      });
    });
    return f.loopW(A.empty)(function (ja) {
      return n.div_(k.widgetShiftMap)([])(d.bind(k.widgetBind)(Z)(function (fa) {
        return b.pure(k.widgetApplicative)(wb(fa));
      }));
    });
  }(),
      ob = function ob(S) {
    var Z = n.div_(k.widgetShiftMap)([sa.errorDisplayBox])(n.div_(k.widgetShiftMap)([])(n.span(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([sa.errorDisplay])([n.text(l.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        ja = function ja(fa) {
      return function (oa) {
        var xa = function xa(Fa) {
          return f.step(Fa)(d.bind(k.widgetBind)(n.button_(k.widgetShiftMap)([H.downloadBtn, r.onClick, r.disabled(pa["null"](Fa))])(n.text(l.widgetLiftWidget)("Download")))(function () {
            return d.bind(k.widgetBind)(qa.liftEffect(k.widgetMonadEff(B.monoidArray))(fa))(function () {
              return b.pure(k.widgetApplicative)(xa(Fa));
            });
          }));
        };

        return f.dyn(xa(oa));
      };
    };

    return n.div_(k.widgetShiftMap)([])(function () {
      var fa = da.encodeURIComponent(S);
      return d.bind(k.widgetBind)(qa.liftEffect(k.widgetMonadEff(B.monoidArray))(ib(D.fromMaybe("")(fa))))(function (oa) {
        return D.maybe(Z)(ja(oa))(fa);
      });
    }());
  },
      Ma = function () {
    var S = aa.mjUiClassPfx + "dataCiteDOI_Input",
        Z = function Z(fa) {
      var oa = n.div(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([]),
          xa = ja,
          Fa = n.div_(k.widgetShiftMap)([sa.errorDisplayBox]),
          La = n.div_(k.widgetShiftMap)([]),
          Na = n.span(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([sa.errorDisplay]),
          ab = n.text(l.widgetLiftWidget);
      fa = "In DataCite retrieval: " + Y.show(Ha.showError)(fa);
      return oa([xa, Fa(La(Na([ab(fa)])))]);
    },
        ja = n.div_(k.widgetShiftMap)([])(d.discard(d.discardUnit)(k.widgetBind)(J["void"](k.widgetFunctor)(n.button_(k.widgetShiftMap)([r.onClick])(n.text(l.widgetLiftWidget)("Retrieve DataCite Record"))))(function () {
      return d.bind(k.widgetBind)(n.span(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([])([n.input(l.widgetLiftWidget)([r._id(S), r.placeholder("Input DOI here")]), h.applySecond(k.widgetApply)(n.button_(k.widgetShiftMap)([r.onClick])(n.text(l.widgetLiftWidget)("Retrieve")))(ha.getInputTextLE(k.widgetMonadEff(B.monoidArray))(S)), J.voidRight(k.widgetFunctor)(D.Nothing.value)(n.button_(k.widgetShiftMap)([r.onClick])(n.text(l.widgetLiftWidget)("Cancel")))]))(function (fa) {
        if (fa instanceof D.Nothing) return ja;

        if (fa instanceof D.Just) {
          fa = ra.parsePublicURL("https://api.datacite.org/dois/" + fa.value0);
          if (fa instanceof L.Left) return Z(Ha.error(fa.value0));
          if (fa instanceof L.Right) return d.bind(k.widgetBind)(ua.liftAff(k.widgetMonadAff(B.monoidArray))(e.get(g.string)(ra.urlToString(fa.value0))))(function (oa) {
            if (oa instanceof L.Left) oa = Z(Ha.error("GET /api response failed to decode: " + e.printError(oa.value0)));else if (oa instanceof L.Right) oa = b.pure(k.widgetApplicative)(D.Just.create(ia.readRecordJSON(oa.value0.body)));else throw Error("Failed pattern match at Metajelo.UI (line 200, column 27 - line 203, column 67): " + [oa.constructor.name]);
            return oa;
          });
          throw Error("Failed pattern match at Metajelo.UI (line 193, column 21 - line 197, column 32): " + [fa.constructor.name]);
        }

        throw Error("Failed pattern match at Metajelo.UI (line 191, column 7 - line 197, column 32): " + [fa.constructor.name]);
      });
    }));

    return f.loopW(D.Nothing.value)(function (fa) {
      return n.div_(k.widgetShiftMap)([])(ja);
    });
  }(),
      fb = function fb(S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.creator])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.creatorHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      return ha.textInput(S);
    }));
  },
      hb = function hb(S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.creatorList])(ha.nonEmptyArrayView(fb)(S));
  },
      pb = function pb(S) {
    return function (Z) {
      var ja = J.map(J.functorArray)(function (xa) {
        return xa.tab;
      })(S),
          fa = J.map(J.functorArray)(function (xa) {
        return xa.page;
      })(S),
          oa = n["div'"](k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([n.text(l.widgetLiftWidget)("No pages to show!")]);
      return d.bind(k.widgetBind)(function (xa) {
        return function (Fa) {
          return function (La) {
            return n.div(xa)(Fa)([H.sideBarGrid])([n.div(xa)(Fa)([H.sideBarMenu])([n.div(xa)(Fa)([H.sideBarCol])(La)])]);
          };
        };
      }(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([n.nav(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([H.sideBarNav])(function (xa) {
        return J.map(J.functorArray)(function (Fa) {
          return d.discard(d.discardUnit)(k.widgetBind)(J["void"](k.widgetFunctor)(n.div(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([r.onClick, H.sideBarTab])([J.map(k.widgetFunctor)(R.absurd)(X.snd(Fa))])))(function () {
            return b.pure(k.widgetApplicative)(X.fst(Fa));
          });
        })(N.zip(N.range(0)(N.length(xa)))(xa));
      }(ja)), J.voidRight(k.widgetFunctor)(Z)(function (xa) {
        return D.fromMaybe(oa)(N.index(fa)(xa));
      }(Z))]))(function (xa) {
        return pb(S)(xa);
      });
    };
  },
      qb = function qb(S) {
    var Z = function Z(ja) {
      return f.step(ja)(d.bind(k.widgetBind)(n.button_(k.widgetShiftMap)([H.clipBtn, r.onClick, r.disabled(pa["null"](ja))])(n.text(l.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return d.bind(k.widgetBind)(qa.liftEffect(k.widgetMonadEff(B.monoidArray))(la.copyToClipboard(ja)))(function () {
          return b.pure(k.widgetApplicative)(Z(ja));
        });
      }));
    };

    return f.dyn(Z(S));
  },
      yb = function yb(S) {
    var Z = function Z(ja) {
      return D.maybe(b.pure(na.applicativeEffect)(""))(ca.recordToString)(ja);
    };

    return d.bind(k.widgetBind)(qa.liftEffect(k.widgetMonadEff(B.monoidArray))(ya.sequence(ya.traversableMaybe)(na.applicativeEffect)(J.map(D.functorMaybe)(Ta)(S))))(function (ja) {
      return n.div(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([H.recPreview])([n.div_(k.widgetShiftMap)([H.recPreviewHeader])(C.empty(k.widgetPlus(B.monoidArray))), d.bind(k.widgetBind)(qa.liftEffect(k.widgetMonadEff(B.monoidArray))(Z(ja)))(function (fa) {
        return n.div(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([H.previewButtons])([ob(fa), qb(fa)]);
      }), n["br'"](l.widgetLiftWidget), V.fold(V.foldableMaybe)(k.widgetMonoid(B.monoidArray))(J.map(D.functorMaybe)(Pa.mkRecordWidget)(ja))]);
    });
  },
      zb = function zb(S) {
    return function (Z) {
      return function (ja) {
        ja = {
          tab: n.text(l.widgetLiftWidget)("Preview"),
          page: yb(S)
        };
        var fa = {
          tab: n.text(l.widgetLiftWidget)("DataCite Retrieval"),
          page: n.text(l.widgetLiftWidget)("TODO")
        };
        return pb([ja, fa])(0);
      };
    };
  },
      Cb = function Cb(S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.sustainability])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.sustainabilityHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.span_(q.shiftMapCofree(B.monoidArray))([H.missionStatement])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.missionStatementHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
        return ha.urlInput(A.getWithDefault(new z.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(new L.Left(""))(z.SProxy.value)(S));
      })))(function (Z) {
        var ja = L.hush(Z);
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.span_(q.shiftMapCofree(B.monoidArray))([H.fundingStatement])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.fundingStatementHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
          return ha.urlInput(A.getWithDefault(new z.IsSymbol(function () {
            return "fundingUrl_Ei";
          }))()(new L.Left(""))(z.SProxy.value)(S));
        })))(function (fa) {
          var oa = L.hush(fa);
          return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "missionUrl_Ei";
          }))()(z.SProxy.value)(new D.Just(Z))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "missionStatementURL";
            }))()(z.SProxy.value)(ja)))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "fundingUrl_Ei";
              }))()(z.SProxy.value)(new D.Just(fa))))(function () {
                return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "fundingStatementURL";
                }))()(z.SProxy.value)(oa));
              });
            });
          }))(S));
        });
      });
    }));
  },
      m = function m(S) {
    return function (Z) {
      return n.div_(q.shiftMapCofree(B.monoidArray))([H.resourceType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.resourceTypeHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
        return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("resourceTypeEle")(S)))(function () {
          return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("resourceTypeSTyp")(S)))(function () {
            return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.resourceTypeGen])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.resourceTypeGenHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
              return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.menuSignal(Da.boundedEnumResourceTypeGeneral)(ha.isOptionResourceTypeGeneral)(A.get(new z.IsSymbol(function () {
                return "generalType";
              }))()(z.SProxy.value)(Z)));
            })))(function (ja) {
              return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.resourceTypeDescr])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.resourceTypeDescrHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
                return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.textInput(d.join(D.bindMaybe)(J.map(D.functorMaybe)(va.fromString)(A.get(new z.IsSymbol(function () {
                  return "description";
                }))()(z.SProxy.value)(Z)))));
              })))(function (fa) {
                return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "description";
                }))()(z.SProxy.value)(J.map(D.functorMaybe)(va.toString)(fa))))(function () {
                  return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                    return "generalType";
                  }))()(z.SProxy.value)(ja));
                }))(Z));
              });
            });
          });
        });
      }));
    };
  },
      Ya = function Ya(S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.resourceMDSource])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.resourceMDSourceHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      var Z = A.getWithDefault(new z.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(z.SProxy.value)(S);
      return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([])(n.span_(q.shiftMapCofree(B.monoidArray))([H.url])(ha.urlInput(A.getWithDefault(new z.IsSymbol(function () {
        return "url_Ei";
      }))()(new L.Left(""))(z.SProxy.value)(S)))))(function (ja) {
        var fa = L.hush(ja);
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.relType])(n.span_(q.shiftMapCofree(B.monoidArray))([])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([H.relTypeHeader])(C.empty(C.plusArray))))(function () {
          return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("relationTypeSTyp")(Z)))(function () {
            return ha.menuSignal(Da.boundedEnumRelationType)(ha.isOptionRelationType)(A.get(new z.IsSymbol(function () {
              return "relationType";
            }))()(z.SProxy.value)(S));
          });
        }))))(function (oa) {
          return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "url_Ei";
          }))()(z.SProxy.value)(new D.Just(ja))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "url";
            }))()(z.SProxy.value)(fa)))(function () {
              return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "relationType";
              }))()(z.SProxy.value)(oa));
            });
          }))(S));
        });
      });
    }));
  },
      eb = function eb(S) {
    var Z = D.fromMaybe(A.empty)(S);
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.relatedId])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.relatedIdHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([])(n.span_(q.shiftMapCofree(B.monoidArray))([H.id])(ha.textInput(A.get(new z.IsSymbol(function () {
        return "identifier";
      }))()(z.SProxy.value)(Z)))))(function (ja) {
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([])(n.span_(q.shiftMapCofree(B.monoidArray))([H.idType])(ha.menuSignal(Da.boundedEnumIdentifierType)(ha.isOptionIdentifierType)(A.get(new z.IsSymbol(function () {
          return "identifierType";
        }))()(z.SProxy.value)(Z)))))(function (fa) {
          return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.relType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.span_(k.widgetShiftMap)([H.relTypeHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
            return ha.menuSignal(Da.boundedEnumRelationType)(ha.isOptionRelationType)(A.get(new z.IsSymbol(function () {
              return "relationType";
            }))()(z.SProxy.value)(Z));
          })))(function (oa) {
            return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(D.Just.create(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "identifier";
            }))()(z.SProxy.value)(ja)))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "identifierType";
              }))()(z.SProxy.value)(fa)))(function () {
                return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "relationType";
                }))()(z.SProxy.value)(oa));
              });
            }))(Z)));
          });
        });
      });
    }));
  },
      xb = function xb(S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.relatedIds])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.relatedIdsHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      return n.div_(q.shiftMapCofree(B.monoidArray))([H.relatedIdList])(ha.nonEmptyArrayView(eb)(S));
    }));
  },
      Hb = function Hb(S) {
    var Z = D.fromMaybe(A.empty)(S);
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.institutionPolicy])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.institutionPolicyHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      var ja = A.getWithDefault(new z.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(z.SProxy.value)(Z);
      return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.policy])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.policyHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
        return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.menuSignal(ha.boundedEnumPolPolType)(ha.isOptionPolPolType)(D.Just.create(A.getWithDefault(new z.IsSymbol(function () {
          return "polPolType";
        }))()(ha.FreeTextPolicy.value)(z.SProxy.value)(Z))));
      })))(function (fa) {
        var oa = D.fromMaybe(ha.FreeTextPolicy.value)(fa);
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([])(n.span_(q.shiftMapCofree(B.monoidArray))([H.policy])(ha.textInput(A.get(new z.IsSymbol(function () {
          return "policy_str";
        }))()(z.SProxy.value)(Z)))))(function (xa) {
          var Fa = ha.checkPolicy(oa)(D.maybe("")(va.toString)(xa));
          return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(function () {
            if (Fa instanceof L.Right) return B.mempty(k.widgetMonoid(B.monoidArray));
            if (Fa instanceof L.Left) return ha.errorDisplay(Y.showString)(new D.Just(Fa.value0));
            throw Error("Failed pattern match at Metajelo.UI (line 905, column 13 - line 907, column 40): " + [Fa.constructor.name]);
          }()))(function () {
            var La = L.hush(Fa);
            return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.policyType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.policyTypeHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
              return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.menuSignal(U.boundedEnumMaybe(Ea.smallBoundedPolicyType)(Ea.boundedEnumPolicyType))(ha.isOptionMaybePolicyType)(A.get(new z.IsSymbol(function () {
                return "policyType";
              }))()(z.SProxy.value)(Z)));
            })))(function (Na) {
              return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.applies])(n.span_(q.shiftMapCofree(B.monoidArray))([])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.appliesHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
                return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("appliesToProductAttr")(ja)))(function () {
                  return ha.menuSignal(U.boundedEnumMaybe(U.smallBoundedBoolean)(U.boundedEnumBoolean))(ha.isOptionMaybeBoolean)(A.get(new z.IsSymbol(function () {
                    return "appliesToProduct";
                  }))()(z.SProxy.value)(Z));
                });
              }))))(function (ab) {
                return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(D.Just.create(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "polPolType";
                }))()(z.SProxy.value)(new D.Just(oa))))(function () {
                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                    return "policy_str";
                  }))()(z.SProxy.value)(xa)))(function () {
                    return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                      return "policy_ei";
                    }))()(z.SProxy.value)(new D.Just(Fa))))(function () {
                      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                        return "policy";
                      }))()(z.SProxy.value)(La)))(function () {
                        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                          return "policyType";
                        }))()(z.SProxy.value)(Na)))(function () {
                          return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                            return "appliesToProduct";
                          }))()(z.SProxy.value)(ab));
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
    }));
  },
      Ib = function Ib(S) {
    return function (Z) {
      var ja = J.mapFlipped(D.functorMaybe)(X.snd(Z))(function (fa) {
        return J.mapFlipped(K.functorNonEmptyArray)(fa)(function (oa) {
          return E.execState(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "descs_on";
          }))()(z.SProxy.value)(new D.Just(S))))(oa);
        });
      });
      return n.div_(q.shiftMapCofree(B.monoidArray))([H.institutionPolicies])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.institutionPoliciesHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
        return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("institutionPoliciesEle")(S)))(function () {
          return ha.nonEmptyArrayView(Hb)(new X.Tuple(X.fst(Z), ja));
        });
      }));
    };
  },
      Db = function Db(S) {
    return function (Z) {
      return n.div_(q.shiftMapCofree(B.monoidArray))([H.identifier])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("identifierTypeSTyp")(S)))(function () {
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.id])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.idHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
          return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.textInput(A.get(new z.IsSymbol(function () {
            return "identifier";
          }))()(z.SProxy.value)(Z)));
        })))(function (ja) {
          return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.idType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.span_(k.widgetShiftMap)([H.idTypeHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
            return ha.menuSignal(Da.boundedEnumIdentifierType)(ha.isOptionIdentifierType)(A.get(new z.IsSymbol(function () {
              return "identifierType";
            }))()(z.SProxy.value)(Z));
          })))(function (fa) {
            return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "identifier";
            }))()(z.SProxy.value)(ja)))(function () {
              return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "identifierType";
              }))()(z.SProxy.value)(fa));
            }))(Z));
          });
        });
      }));
    };
  },
      Jb = function Jb(S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.institutionContact])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.institutionContactHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.contactEmail])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.contactEmailHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
        return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.emailInput(A.getWithDefault(new z.IsSymbol(function () {
          return "email_Ei";
        }))()(new L.Left(""))(z.SProxy.value)(S)));
      })))(function (Z) {
        var ja = L.hush(Z);
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.contactType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.contactTypeHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
          return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.menuSignal(U.boundedEnumMaybe(Ea.smallBoundedInstitutionContactType)(Ea.boundedEnumInstitutionContactType))(ha.isOptionMaybeInstitutionContactType)(A.get(new z.IsSymbol(function () {
            return "contactType";
          }))()(z.SProxy.value)(S)));
        })))(function (fa) {
          return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "email_Ei";
          }))()(z.SProxy.value)(new D.Just(Z))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "emailAddress";
            }))()(z.SProxy.value)(ja)))(function () {
              return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "contactType";
              }))()(z.SProxy.value)(fa));
            });
          }))(S));
        });
      });
    }));
  },
      Eb = function Eb(S) {
    var Z = D.fromMaybe(A.empty)(S);
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.location])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.locationHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      var ja = A.getWithDefault(new z.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(z.SProxy.value)(Z);
      return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("locationEle")(ja)))(function () {
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([])(n.span_(q.shiftMapCofree(B.monoidArray))([H.institutionId])(Db(ja)(Qa(new z.IsSymbol(function () {
          return "institutionID_opt";
        }))()(z.SProxy.value)(Z)))))(function (fa) {
          var oa = A.getAll(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
            return "identifier";
          }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
            return "identifierType";
          }))()()()()(A.getAllOptionNil))))(fa);
          return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.institutionName])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.institutionNameHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
            return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.textInput(A.get(new z.IsSymbol(function () {
              return "institutionName";
            }))()(z.SProxy.value)(Z)));
          })))(function (xa) {
            return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.institutionType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.institutionTypeHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
              return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.menuSignal(Ea.boundedEnumInstitutionType)(ha.isOptionInstitutionType)(A.get(new z.IsSymbol(function () {
                return "institutionType";
              }))()(z.SProxy.value)(Z)));
            })))(function (Fa) {
              return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n["br'"](l.widgetLiftWidget)))(function () {
                return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.superOrg])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.superOrgHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
                  return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.textInput(d.join(D.bindMaybe)(A.get(new z.IsSymbol(function () {
                    return "superOrganizationName";
                  }))()(z.SProxy.value)(Z))));
                })))(function (La) {
                  return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(Jb(Qa(new z.IsSymbol(function () {
                    return "institutionContact_opt";
                  }))()(z.SProxy.value)(Z)))(function (Na) {
                    var ab = A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                      return "contactType";
                    }))(W.consKeys(new z.IsSymbol(function () {
                      return "emailAddress";
                    }))(W.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                      return "contactType";
                    }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                      return "emailAddress";
                    }))()()()()(A.getAllOptionNil))))(Na);
                    return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(Cb(Qa(new z.IsSymbol(function () {
                      return "iSustain_opt";
                    }))()(z.SProxy.value)(Z)))(function (jb) {
                      var Ab = A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))(W.consKeys(new z.IsSymbol(function () {
                        return "missionStatementURL";
                      }))(W.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                        return "missionStatementURL";
                      }))()()()()(A.getAllOptionNil))))(jb);
                      return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(Ib(ja)(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
                        return "_numPolicies";
                      }))()(1)(z.SProxy.value)(Z), A.get(new z.IsSymbol(function () {
                        return "institutionPolicies_opt";
                      }))()(z.SProxy.value)(Z))))(function (Bb) {
                        var Fb = X.fst(Bb),
                            Gb = X.snd(Bb),
                            Lb = d.join(D.bindMaybe)(J.map(D.functorMaybe)(ya.sequence(K.traversableNonEmptyArray)(D.applicativeMaybe))(J.map(D.functorMaybe)(J.map(K.functorNonEmptyArray)(A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                          return "appliesToProduct";
                        }))(W.consKeys(new z.IsSymbol(function () {
                          return "policy";
                        }))(W.consKeys(new z.IsSymbol(function () {
                          return "policyType";
                        }))(W.nilKeys))))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "appliesToProduct";
                        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "policy";
                        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "policyType";
                        }))()()()()(A.getAllOptionNil)))))))(Gb)));
                        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.versioning])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.versioningHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
                          return n.span_(q.shiftMapCofree(B.monoidArray))([])(ha.checkBoxS(A.getWithDefault(new z.IsSymbol(function () {
                            return "versioning";
                          }))()(!1)(z.SProxy.value)(Z)));
                        })))(function (Kb) {
                          return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                            return "institutionID_opt";
                          }))()(z.SProxy.value)(new D.Just(fa))))(function () {
                            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                              return "institutionID";
                            }))()(z.SProxy.value)(oa)))(function () {
                              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                return "institutionName";
                              }))()(z.SProxy.value)(xa)))(function () {
                                return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                  return "institutionType";
                                }))()(z.SProxy.value)(Fa)))(function () {
                                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                    return "superOrganizationName";
                                  }))()(z.SProxy.value)(new D.Just(La))))(function () {
                                    return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                      return "institutionContact_opt";
                                    }))()(z.SProxy.value)(new D.Just(Na))))(function () {
                                      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                        return "institutionContact";
                                      }))()(z.SProxy.value)(ab)))(function () {
                                        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                          return "iSustain_opt";
                                        }))()(z.SProxy.value)(new D.Just(jb))))(function () {
                                          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                            return "institutionSustainability";
                                          }))()(z.SProxy.value)(Ab)))(function () {
                                            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                              return "_numPolicies";
                                            }))()(z.SProxy.value)(new D.Just(Fb))))(function () {
                                              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                return "institutionPolicies_opt";
                                              }))()(z.SProxy.value)(Gb)))(function () {
                                                return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                  return "institutionPolicies";
                                                }))()(z.SProxy.value)(Lb)))(function () {
                                                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                    return "versioning";
                                                  }))()(z.SProxy.value)(new D.Just(Kb))))(function () {
                                                    return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                      return "descs_on";
                                                    }))()(z.SProxy.value)(new D.Just(ja)));
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
                          }))(Z)))(function (Mb) {
                            return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(new D.Just(Mb));
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
      T = function T(S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.basicMetadata])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.basicMetadataHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(db(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
        return "_numTitles";
      }))()(1)(z.SProxy.value)(S), A.get(new z.IsSymbol(function () {
        return "titles";
      }))()(z.SProxy.value)(S))))(function (Z) {
        var ja = X.fst(Z),
            fa = X.snd(Z);
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(hb(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
          return "_numCreators";
        }))()(1)(z.SProxy.value)(S), A.get(new z.IsSymbol(function () {
          return "creators";
        }))()(z.SProxy.value)(S))))(function (oa) {
          var xa = X.fst(oa),
              Fa = X.snd(oa);
          return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.pubyear])(n.span_(q.shiftMapCofree(B.monoidArray))([])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.pubyearHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
            return ha.natInput(A.get(new z.IsSymbol(function () {
              return "publicationYear";
            }))()(z.SProxy.value)(S));
          }))))(function (La) {
            return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "titles";
            }))()(z.SProxy.value)(fa)))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "_numTitles";
              }))()(z.SProxy.value)(new D.Just(ja))))(function () {
                return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "creators";
                }))()(z.SProxy.value)(Fa)))(function () {
                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                    return "_numCreators";
                  }))()(z.SProxy.value)(new D.Just(xa))))(function () {
                    return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                      return "publicationYear";
                    }))()(z.SProxy.value)(La));
                  });
                });
              });
            }))(S));
          });
        });
      });
    }));
  },
      ba = function ba(S) {
    var Z = D.fromMaybe(A.empty)(S);
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.product])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.productHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(Ma)(function (ja) {
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(function () {
          if (ja instanceof D.Nothing) return Z;

          if (ja instanceof D.Just) {
            var fa = F.runWriter(G.unwrap(ia.newtypeJSONWithErr)(ja.value0));
            if (fa.value0 instanceof L.Right) return sb(Z)(fa.value0.value0);
            if (fa.value0 instanceof L.Left) return Z;
            throw Error("Failed pattern match at Metajelo.UI (line 565, column 10 - line 567, column 27): " + [fa.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Metajelo.UI (line 561, column 21 - line 567, column 27): " + [ja.constructor.name]);
        }()))(function (fa) {
          var oa = A.getWithDefault(new z.IsSymbol(function () {
            return "descs_on";
          }))()(!0)(z.SProxy.value)(fa);
          return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("supplementaryProductEle")(oa)))(function () {
            return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(T(Qa(new z.IsSymbol(function () {
              return "basicMetadata_opt";
            }))()(z.SProxy.value)(fa)))(function (xa) {
              var Fa = A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                return "creators";
              }))(W.consKeys(new z.IsSymbol(function () {
                return "publicationYear";
              }))(W.consKeys(new z.IsSymbol(function () {
                return "titles";
              }))(W.nilKeys))))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "creators";
              }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "publicationYear";
              }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "titles";
              }))()()()()(A.getAllOptionNil)))))(xa);
              return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.resourceId])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.resourceIdHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
                return Db(oa)(Qa(new z.IsSymbol(function () {
                  return "resourceID_opt";
                }))()(z.SProxy.value)(fa));
              })))(function (La) {
                var Na = A.getAll(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                  return "identifier";
                }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                  return "identifierType";
                }))()()()()(A.getAllOptionNil))))(La);
                return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(m(oa)(Qa(new z.IsSymbol(function () {
                  return "resourceType_opt";
                }))()(z.SProxy.value)(fa)))(function (ab) {
                  var jb = A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                    return "description";
                  }))(W.consKeys(new z.IsSymbol(function () {
                    return "generalType";
                  }))(W.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                    return "description";
                  }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                    return "generalType";
                  }))()()()()(A.getAllOptionNil))))(ab);
                  return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(rb(oa)(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
                    return "_numFormats";
                  }))()(0)(z.SProxy.value)(fa), A.getWithDefault(new z.IsSymbol(function () {
                    return "format";
                  }))()([])(z.SProxy.value)(fa))))(function (Ab) {
                    var Bb = X.fst(Ab),
                        Fb = X.snd(Ab);
                    return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(Ya(D.fromMaybe(A.empty)(bb(new z.IsSymbol(function () {
                      return "resMdsOpts_opt";
                    }))()(z.SProxy.value)(fa)(oa))))(function (Gb) {
                      var Lb = A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                        return "relationType";
                      }))(W.consKeys(new z.IsSymbol(function () {
                        return "url";
                      }))(W.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                        return "relationType";
                      }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                        return "url";
                      }))()()()()(A.getAllOptionNil))))(Gb);
                      return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(Eb(bb(new z.IsSymbol(function () {
                        return "locationOpts_opt";
                      }))()(z.SProxy.value)(fa)(oa)))(function (Kb) {
                        var Mb = d.join(D.bindMaybe)(J.map(D.functorMaybe)(A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                          return "institutionContact";
                        }))(W.consKeys(new z.IsSymbol(function () {
                          return "institutionID";
                        }))(W.consKeys(new z.IsSymbol(function () {
                          return "institutionName";
                        }))(W.consKeys(new z.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(W.consKeys(new z.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(W.consKeys(new z.IsSymbol(function () {
                          return "institutionType";
                        }))(W.consKeys(new z.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(W.consKeys(new z.IsSymbol(function () {
                          return "versioning";
                        }))(W.nilKeys)))))))))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(A.getAllOptionNil)))))))))))(Kb));
                        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                          return "basicMetadata_opt";
                        }))()(z.SProxy.value)(new D.Just(xa))))(function () {
                          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                            return "basicMetadata";
                          }))()(z.SProxy.value)(Fa)))(function () {
                            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                              return "resourceID_opt";
                            }))()(z.SProxy.value)(new D.Just(La))))(function () {
                              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                return "resourceID";
                              }))()(z.SProxy.value)(new D.Just(Na))))(function () {
                                return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                  return "resourceType_opt";
                                }))()(z.SProxy.value)(new D.Just(ab))))(function () {
                                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                    return "resourceType";
                                  }))()(z.SProxy.value)(jb)))(function () {
                                    return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                      return "_numFormats";
                                    }))()(z.SProxy.value)(new D.Just(Bb))))(function () {
                                      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                        return "format";
                                      }))()(z.SProxy.value)(new D.Just(Fb))))(function () {
                                        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                          return "resMdsOpts_opt";
                                        }))()(z.SProxy.value)(new D.Just(Gb))))(function () {
                                          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                            return "resourceMetadataSource";
                                          }))()(z.SProxy.value)(new D.Just(Lb))))(function () {
                                            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                              return "locationOpts_opt";
                                            }))()(z.SProxy.value)(Kb)))(function () {
                                              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                return "location";
                                              }))()(z.SProxy.value)(Mb)))(function () {
                                                return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                  return "descs_on";
                                                }))()(z.SProxy.value)(new D.Just(oa)));
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
                        }))(fa)))(function (Nb) {
                          return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(new D.Just(Nb));
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
      Ja = function Ja(S) {
    return function (Z) {
      var ja = J.mapFlipped(D.functorMaybe)(X.snd(Z))(function (fa) {
        return J.mapFlipped(K.functorNonEmptyArray)(fa)(function (oa) {
          return E.execState(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "descs_on";
          }))()(z.SProxy.value)(new D.Just(S))))(oa);
        });
      });
      return n.div_(q.shiftMapCofree(B.monoidArray))([H.products])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.span_(k.widgetShiftMap)([H.productsHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
        return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("supplementaryProductsEle")(S)))(function () {
          return n.div_(q.shiftMapCofree(B.monoidArray))([H.productList])(ha.nonEmptyArrayView(ba)(new X.Tuple(X.fst(Z), ja)));
        });
      }));
    };
  },
      Ca = function Ca(S) {
    var Z = A.getWithDefault(new z.IsSymbol(function () {
      return "descs_on";
    }))()(!0)(z.SProxy.value)(S);
    return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("recordEle")(Z)))(function () {
      return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("recordTypeCTyp")(Z)))(function () {
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(kb(Qa(new z.IsSymbol(function () {
          return "identifier_opt";
        }))()(z.SProxy.value)(S)))(function (ja) {
          var fa = A.getAll(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
            return "identifier";
          }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
            return "identifierType";
          }))()()()()(A.getAllOptionNil))))(ja);
          A.getWithDefault(new z.IsSymbol(function () {
            return "date_Ei";
          }))()(new L.Left(""))(z.SProxy.value)(S);
          return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.date])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.dateHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
            return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(ha.mkDesc("dateEle")(Z)))(function () {
              return ha.dateInput(A.getWithDefault(new z.IsSymbol(function () {
                return "date_Ei";
              }))()(new L.Left(""))(z.SProxy.value)(S));
            });
          })))(function (oa) {
            var xa = L.hush(oa);
            return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(xb(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
              return "_numRelIds";
            }))()(0)(z.SProxy.value)(S), A.get(new z.IsSymbol(function () {
              return "relId_opts";
            }))()(z.SProxy.value)(S))))(function (Fa) {
              var La = X.fst(Fa),
                  Na = X.snd(Fa),
                  ab = d.join(D.bindMaybe)(J.map(D.functorMaybe)(ya.sequence(K.traversableNonEmptyArray)(D.applicativeMaybe))(J.map(D.functorMaybe)(J.map(K.functorNonEmptyArray)(A.getAll(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "identifier";
              }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "identifierType";
              }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "relationType";
              }))()()()()(A.getAllOptionNil)))))))(Na)));
              return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(Ja(Z)(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
                return "_numSupProds";
              }))()(0)(z.SProxy.value)(S), A.get(new z.IsSymbol(function () {
                return "supProd_opts";
              }))()(z.SProxy.value)(S))))(function (jb) {
                var Ab = X.fst(jb),
                    Bb = X.snd(jb),
                    Fb = d.join(D.bindMaybe)(J.map(D.functorMaybe)(ya.sequence(K.traversableNonEmptyArray)(D.applicativeMaybe))(J.map(D.functorMaybe)(J.map(K.functorNonEmptyArray)(A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                  return "basicMetadata";
                }))(W.consKeys(new z.IsSymbol(function () {
                  return "format";
                }))(W.consKeys(new z.IsSymbol(function () {
                  return "location";
                }))(W.consKeys(new z.IsSymbol(function () {
                  return "resourceID";
                }))(W.consKeys(new z.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))(W.consKeys(new z.IsSymbol(function () {
                  return "resourceType";
                }))(W.nilKeys)))))))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                  return "basicMetadata";
                }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                  return "format";
                }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                  return "location";
                }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                  return "resourceID";
                }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                  return "resourceType";
                }))()()()()(A.getAllOptionNil))))))))))(Bb)));
                return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "identifier_opt";
                }))()(z.SProxy.value)(new D.Just(ja))))(function () {
                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                    return "identifier";
                  }))()(z.SProxy.value)(fa)))(function () {
                    return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                      return "date_Ei";
                    }))()(z.SProxy.value)(new D.Just(oa))))(function () {
                      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                        return "date";
                      }))()(z.SProxy.value)(xa)))(function () {
                        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                          return "_numRelIds";
                        }))()(z.SProxy.value)(new D.Just(La))))(function () {
                          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                            return "relId_opts";
                          }))()(z.SProxy.value)(Na)))(function () {
                            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                              return "relatedIdentifiers";
                            }))()(z.SProxy.value)(ab)))(function () {
                              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                return "_numSupProds";
                              }))()(z.SProxy.value)(new D.Just(Ab))))(function () {
                                return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                  return "supProd_opts";
                                }))()(z.SProxy.value)(Bb)))(function () {
                                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                    return "supplementaryProducts";
                                  }))()(z.SProxy.value)(Fb)))(function () {
                                    return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                      return "descs_on";
                                    }))()(z.SProxy.value)(new D.Just(Z)));
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                }))(S));
              });
            });
          });
        });
      });
    });
  },
      Oa = f.loopS(B.monoidArray)(A.empty)(function (S) {
    return n.div_(q.shiftMapCofree(B.monoidArray))([H.record])(n.div_(q.shiftMapCofree(B.monoidArray))([H.recFlexBox])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([H.recordHeader])(C.empty(k.widgetPlus(B.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.recEditor])(function () {
        var Z = A.getWithDefault(new z.IsSymbol(function () {
          return "descs_on";
        }))()(!0)(z.SProxy.value)(S);
        return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(ha.showDescSig(Z))(function (ja) {
          return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(Ra)(function (fa) {
            var oa = A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
              return "date";
            }))(W.consKeys(new z.IsSymbol(function () {
              return "identifier";
            }))(W.consKeys(new z.IsSymbol(function () {
              return "lastModified";
            }))(W.consKeys(new z.IsSymbol(function () {
              return "relatedIdentifiers";
            }))(W.consKeys(new z.IsSymbol(function () {
              return "supplementaryProducts";
            }))(W.nilKeys))))))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
              return "date";
            }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
              return "identifier";
            }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
              return "lastModified";
            }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
              return "relatedIdentifiers";
            }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
              return "supplementaryProducts";
            }))()()()()(A.getAllOptionNil)))))))(fa);
            fa = D.isNothing(oa) ? S : fa;
            return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(Ca(fa))(function (xa) {
              var Fa = A.get(new z.IsSymbol(function () {
                return "lastModified";
              }))()(z.SProxy.value)(xa),
                  La = ma.unsafePerformEffect(ea.nowDateTime);
              return d.bind(q.bindCofree(k.widgetAlternative(B.monoidArray)))(b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(P.append(O.semigroupFirst)(Fa)(O.First(new D.Just(La)))))(function (Na) {
                return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(E.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "lastModified";
                }))()(z.SProxy.value)(Na)))(function () {
                  return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                    return "descs_on";
                  }))()(z.SProxy.value)(new D.Just(ja)));
                }))(xa));
              });
            });
          });
        });
      }()))(function (Z) {
        var ja = A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
          return "date";
        }))(W.consKeys(new z.IsSymbol(function () {
          return "identifier";
        }))(W.consKeys(new z.IsSymbol(function () {
          return "lastModified";
        }))(W.consKeys(new z.IsSymbol(function () {
          return "relatedIdentifiers";
        }))(W.consKeys(new z.IsSymbol(function () {
          return "supplementaryProducts";
        }))(W.nilKeys))))))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
          return "date";
        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
          return "identifier";
        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
          return "lastModified";
        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
          return "relatedIdentifiers";
        }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
          return "supplementaryProducts";
        }))()()()()(A.getAllOptionNil)))))))(Z);
        return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(B.monoidArray)))(n.div_(q.shiftMapCofree(B.monoidArray))([H.sideBar])(f.display(zb(ja)(Aa.unit)(0))))(function () {
          return b.pure(q.applicativeCofree(k.widgetAlternative(B.monoidArray)))(Z);
        });
      });
    })));
  }),
      Va = n["div'"](k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([n.div(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([H.page])(b.pure(b.applicativeArray)(f.dyn(Oa)))]);

  c.runFormSPA = function (S) {
    return w.runWidgetInDom(S)(Va);
  };

  c.page = Va;
  c.utf8DataAttr = "data:text/plain;charset=utf-8";
  c.downloadButton = ob;
  c.mkDLAnchorAndClicker = ib;
  c.uploadButtonSig = Ra;
  c.dataCiteButtonSig = Ma;
  c.fillWithDataCite = sb;
  c.copyButton = qb;
  c.fillMetajeloRecordExtra = wb;
  c.fillSProdExtra = nb;
  c.fillBasicMetadataExtra = Wa;
  c.fillLocationRowExtra = vb;
  c.fillIContactExtra = mb;
  c.fillSustainExtra = tb;
  c.fillPolicyExtra = ub;
  c.fillResourceMDSExtra = lb;
  c.accumulateMetajeloRecord = Oa;
  c.recWidg = yb;
  c.finalizeRecord = Ta;
  c.accumulateMetajeloRecUI = Ca;
  c.accumulateSuppProd = ba;
  c.supProdSigArray = Ja;
  c.accumulateLocation = Eb;
  c.accumulateSustain = Cb;
  c.accumulateIdent = Db;
  c.genRecIdent = kb;
  c.accumulateRelatedIdent = eb;
  c.relIdSigArray = xb;
  c.accumulateBasicMetadata = T;
  c.accumulateResType = m;
  c.formatSignal = Xa;
  c.formatSigArray = rb;
  c.titleSignal = cb;
  c.titleSigArray = db;
  c.creatorSignal = fb;
  c.creatorSigArray = hb;
  c.accumulateResMdSource = Ya;
  c.accumulateContact = Jb;
  c.accumulatePolicy = Hb;
  c.policySigArray = Ib;
  c.getOpt = Qa;
  c.updateDescOn = bb;
  c.makeSidebar = zb;
  c.createTabWidget = pb;
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
//# sourceMappingURL=prod.bf1146eb.js.map