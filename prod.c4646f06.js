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

$jscomp.polyfill = function (a, d, e, h) {
  d && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, d, e, h) : $jscomp.polyfillUnisolated(a, d, e, h));
};

$jscomp.polyfillUnisolated = function (a, d, e, h) {
  e = $jscomp.global;
  a = a.split(".");

  for (h = 0; h < a.length - 1; h++) {
    var g = a[h];
    if (!(g in e)) return;
    e = e[g];
  }

  a = a[a.length - 1];
  h = e[a];
  d = d(h);
  d != h && null != d && $jscomp.defineProperty(e, a, {
    configurable: !0,
    writable: !0,
    value: d
  });
};

$jscomp.polyfillIsolated = function (a, d, e, h) {
  var g = a.split(".");
  a = 1 === g.length;
  h = g[0];
  h = !a && h in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var b = 0; b < g.length - 1; b++) {
    var f = g[b];
    if (!(f in h)) return;
    h = h[f];
  }

  g = g[g.length - 1];
  e = $jscomp.IS_SYMBOL_NATIVE && "es6" === e ? h[g] : null;
  d = d(e);
  null != d && (a ? $jscomp.defineProperty($jscomp.polyfills, g, {
    configurable: !0,
    writable: !0,
    value: d
  }) : d !== e && ($jscomp.propertyToPolyfillSymbol[g] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(g) : $jscomp.POLYFILL_PREFIX + g, g = $jscomp.propertyToPolyfillSymbol[g], $jscomp.defineProperty(h, g, {
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
      h = function h(g) {
    if (this instanceof h) throw new TypeError("Symbol is not a constructor");
    return new d("jscomp_symbol_" + (g || "") + "_" + e++, g);
  };

  return h;
}, "es6", "es3");

$jscomp.initSymbolIterator = function () {};

$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var d = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), e = 0; e < d.length; e++) {
    var h = $jscomp.global[d[e]];
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

$jscomp.iteratorFromArray = function (a, d) {
  a instanceof String && (a += "");
  var e = 0,
      h = !1,
      g = {
    next: function next() {
      if (!h && e < a.length) {
        var b = e++;
        return {
          value: d(b, a[b]),
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
        h = e.length;
    d = Number(d) || 0;

    if (0 <= d && d < h) {
      d |= 0;
      var g = e.charCodeAt(d);
      if (55296 > g || 56319 < g || d + 1 === h) return g;
      d = e.charCodeAt(d + 1);
      return 56320 > d || 57343 < d ? g : 1024 * (g - 55296) + d + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (d) {
    for (var e = "", h = 0; h < arguments.length; h++) {
      var g = Number(arguments[h]);
      if (0 > g || 1114111 < g || g !== Math.floor(g)) throw new RangeError("invalid_code_point " + g);
      65535 >= g ? e += String.fromCharCode(g) : (g -= 65536, e += String.fromCharCode(g >>> 10 & 1023 | 55296), e += String.fromCharCode(g & 1023 | 56320));
    }

    return e;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (d, e, h) {
    e = null != e ? e : function (c) {
      return c;
    };
    var g = [],
        b = "undefined" != typeof Symbol && Symbol.iterator && d[Symbol.iterator];

    if ("function" == typeof b) {
      d = b.call(d);

      for (var f = 0; !(b = d.next()).done;) {
        g.push(e.call(h, b.value, f++));
      }
    } else for (b = d.length, f = 0; f < b; f++) {
      g.push(e.call(h, d[f], f));
    }

    return g;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (d, e) {
    var h = $jscomp.checkStringArgs(this, d, "endsWith");
    d += "";
    void 0 === e && (e = h.length);
    e = Math.max(0, Math.min(e | 0, h.length));

    for (var g = d.length; 0 < g && 0 < e;) {
      if (h[--e] != d[--g]) return !1;
    }

    return 0 >= g;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (d, e) {
    var h = $jscomp.checkStringArgs(this, d, "startsWith");
    d += "";
    var g = h.length,
        b = d.length;
    e = Math.max(0, Math.min(e | 0, h.length));

    for (var f = 0; f < b && e < g;) {
      if (h[e++] != d[f++]) return !1;
    }

    return f >= b;
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, d, e) {
  a instanceof String && (a = String(a));

  for (var h = a.length, g = 0; g < h; g++) {
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
    }, d.fixupUrl = function (e, h) {
      return null === h.nodejsBaseUrl ? (h = module.require("url"), e = h.parse(e), e.protocol = e.protocol || "http:", e.hostname = e.hostname || "localhost", h.format(e)) : e || "/";
    }, d.getResponse = function (e) {
      return e.response;
    });
    return function (e, h) {
      return function (g, b) {
        var f = d.newXHR(),
            c = d.fixupUrl(h.url, f);
        f.open(h.method || "GET", c, !0, h.username, h.password);
        if (h.headers) try {
          c = 0;

          for (var k; null != (k = h.headers[c]); c++) {
            f.setRequestHeader(k.field, k.value);
          }
        } catch (m) {
          g(m);
        }

        k = function k(m) {
          return function () {
            g(Error(m + ": " + h.method + " " + h.url));
          };
        };

        f.onerror = k("AJAX request failed");
        f.ontimeout = k("AJAX request timed out");

        f.onload = function () {
          b({
            status: f.status,
            statusText: f.statusText,
            headers: f.getAllResponseHeaders().split("\r\n").filter(function (m) {
              return 0 < m.length;
            }).map(function (m) {
              var q = m.indexOf(":");
              return e(m.substring(0, q))(m.substring(q + 2));
            }),
            body: d.getResponse(f)
          });
        };

        f.responseType = h.responseType;
        f.withCredentials = h.withCredentials;
        f.send(h.content);
        return function (m, q, t) {
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
      for (var h = d.length, g = e.length, b = Array(h * g), f = 0, c = 0; c < h; c++) {
        for (var k = d[c], m = 0; m < g; m++) {
          b[f++] = k(e[m]);
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
    return function (h) {
      return function (g) {
        return e(h(g));
      };
    };
  });

  a.compose = function (e) {
    return e.compose;
  };

  a.composeFlipped = function (e) {
    return function (h) {
      return function (g) {
        return (0, e.compose)(g)(h);
      };
    };
  };

  a.semigroupoidFn = d;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var d = a["Control.Category"],
      e = a["Control.Semigroupoid"];
  a = new function (h, g) {
    this.Semigroupoid0 = h;
    this.identity = g;
  }(function () {
    return e.semigroupoidFn;
  }, function (h) {
    return h;
  });

  d.identity = function (h) {
    return h.identity;
  };

  d.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (d) {
    return function (e) {
      return function (h) {
        return d(h)(e);
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
      return function (h) {
        return function (g) {
          return d(e(h))(e(g));
        };
      };
    };
  };
})(PS);

(function (a) {
  a.arrayMap = function (d) {
    return function (e) {
      for (var h = e.length, g = Array(h), b = 0; b < h; b++) {
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
      h = a["Control.Semigroupoid"],
      g = a["Data.Function"],
      b = a["Data.Unit"];

  a = function a(f) {
    this.map = f;
  };

  h = new a(h.compose(h.semigroupoidFn));
  e = new a(e.arrayMap);
  d.Functor = a;

  d.map = function (f) {
    return f.map;
  };

  d.mapFlipped = function (f) {
    return function (c) {
      return function (k) {
        return (0, f.map)(k)(c);
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

  d.functorFn = h;
  d.functorArray = e;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var d = a["Control.Apply"],
      e = a["Control.Apply"],
      h = a["Control.Category"],
      g = a["Data.Function"],
      b = a["Data.Functor"];

  a = function a(c, k) {
    this.Functor0 = c;
    this.apply = k;
  };

  var f = new a(function () {
    return b.functorFn;
  }, function (c) {
    return function (k) {
      return function (m) {
        return c(m)(k(m));
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
    return function (k) {
      return function (m) {
        return (0, c.apply)(b.map(c.Functor0())(g["const"](h.identity(h.categoryFn)))(k))(m);
      };
    };
  };

  d.lift2 = function (c) {
    return function (k) {
      return function (m) {
        return function (q) {
          return (0, c.apply)(b.map(c.Functor0())(k)(m))(q);
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

  var h = new a(function () {
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

  d.applicativeArray = h;
})(PS);

(function (a) {
  a.arrayBind = function (d) {
    return function (e) {
      for (var h = [], g = 0, b = d.length; g < b; g++) {
        Array.prototype.push.apply(h, e(d[g]));
      }

      return h;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var d = a["Control.Bind"],
      e = a["Control.Apply"],
      h = a["Control.Category"],
      g = a["Data.Function"],
      b = function b(k, m) {
    this.Apply0 = k;
    this.bind = m;
  };

  a = new b(function () {
    return e.applyArray;
  }, a["Control.Bind"].arrayBind);

  var f = function f(k) {
    return g.flip(k.bind);
  },
      c = new function (k) {
    this.discard = k;
  }(function (k) {
    return k.bind;
  });

  d.Bind = b;

  d.bind = function (k) {
    return k.bind;
  };

  d.bindFlipped = f;

  d.discard = function (k) {
    return k.discard;
  };

  d.join = function (k) {
    return function (m) {
      return (0, k.bind)(m)(h.identity(h.categoryFn));
    };
  };

  d.composeKleisliFlipped = function (k) {
    return function (m) {
      return function (q) {
        return function (t) {
          return f(k)(m)(q(t));
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
    return function (h) {
      return function (g) {
        return function (b) {
          return function (f) {
            return b < f ? e : b === f ? h : g;
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
    return function (h) {
      return e === h;
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

  var h = new a(e.eqStringImpl),
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
  d.eqString = h;
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
      h = function () {
    function g() {}

    g.value = new g();
    return g;
  }();

  a.LT = d;
  a.GT = e;
  a.EQ = h;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var d = a["Data.Ord"],
      e = a["Data.Ord"],
      h = a["Data.Eq"],
      g = a["Data.Ordering"];

  a = function a(c, k) {
    this.Eq0 = c;
    this.compare = k;
  };

  var b = new a(function () {
    return h.eqInt;
  }, e.ordIntImpl(g.LT.value)(g.EQ.value)(g.GT.value)),
      f = new a(function () {
    return h.eqChar;
  }, e.ordCharImpl(g.LT.value)(g.EQ.value)(g.GT.value));
  e = new a(function () {
    return h.eqBoolean;
  }, e.ordBooleanImpl(g.LT.value)(g.EQ.value)(g.GT.value));
  d.Ord = a;

  d.compare = function (c) {
    return c.compare;
  };

  d.max = function (c) {
    return function (k) {
      return function (m) {
        var q = (0, c.compare)(k)(m);
        if (q instanceof g.LT) return m;
        if (q instanceof g.EQ || q instanceof g.GT) return k;
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
      h = a["Data.Ord"];

  a = function a(f, c, k) {
    this.Ord0 = f;
    this.bottom = c;
    this.top = k;
  };

  var g = new a(function () {
    return h.ordInt;
  }, e.bottomInt, e.topInt);
  e = new a(function () {
    return h.ordChar;
  }, e.bottomChar, e.topChar);
  var b = new a(function () {
    return h.ordBoolean;
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
      h = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Category"],
      f = a["Data.Bounded"],
      c = a["Data.Eq"],
      k = a["Data.Function"],
      m = a["Data.Functor"],
      q = a["Data.Ord"],
      t = a["Data.Ordering"],
      n = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      r = function () {
    function D(z) {
      this.value0 = z;
    }

    D.create = function (z) {
      return new D(z);
    };

    return D;
  }(),
      C = function C(D) {
    return function (z) {
      return function (F) {
        if (F instanceof n) return D;
        if (F instanceof r) return z(F.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [D.constructor.name, z.constructor.name, F.constructor.name]);
      };
    };
  };

  a = C(!0)(k["const"](!1));
  k = C(!1)(k["const"](!0));

  var B = new m.Functor(function (D) {
    return function (z) {
      return z instanceof r ? new r(D(z.value0)) : n.value;
    };
  }),
      v = function v(D) {
    return new c.Eq(function (z) {
      return function (F) {
        return z instanceof n && F instanceof n ? !0 : z instanceof r && F instanceof r ? c.eq(D)(z.value0)(F.value0) : !1;
      };
    });
  },
      x = function x(D) {
    return new q.Ord(function () {
      return v(D.Eq0());
    }, function (z) {
      return function (F) {
        if (z instanceof n && F instanceof n) return t.EQ.value;
        if (z instanceof n) return t.LT.value;
        if (F instanceof n) return t.GT.value;
        if (z instanceof r && F instanceof r) return q.compare(D)(z.value0)(F.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [z.constructor.name, F.constructor.name]);
      };
    });
  },
      p = new h.Apply(function () {
    return B;
  }, function (D) {
    return function (z) {
      if (D instanceof r) return m.map(B)(D.value0)(z);
      if (D instanceof n) return n.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [D.constructor.name, z.constructor.name]);
    };
  });

  h = new g.Bind(function () {
    return p;
  }, function (D) {
    return function (z) {
      if (D instanceof r) return z(D.value0);
      if (D instanceof n) return n.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [D.constructor.name, z.constructor.name]);
    };
  });
  e = new e.Applicative(function () {
    return p;
  }, r.create);
  d.Nothing = n;
  d.Just = r;
  d.maybe = C;

  d.fromMaybe = function (D) {
    return C(D)(b.identity(b.categoryFn));
  };

  d.isJust = k;
  d.isNothing = a;

  d.fromJust = function (D) {
    return function (z) {
      if (z instanceof r) return z.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [z.constructor.name]);
    };
  };

  d.functorMaybe = B;
  d.applyMaybe = p;
  d.applicativeMaybe = e;
  d.bindMaybe = h;
  d.ordMaybe = x;

  d.boundedMaybe = function (D) {
    return new f.Bounded(function () {
      return x(D.Ord0());
    }, n.value, new r(f.top(D)));
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
      h = a["Data.MediaType.Common"];

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
      k = function () {
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
  }();

  d.ArrayView = a;
  d.Blob = g;
  d.Document = b;
  d.String = f;
  d.FormData = c;
  d.FormURLEncoded = k;
  d.Json = m;

  d.toMediaType = function (q) {
    return q instanceof k ? new e.Just(h.applicationFormURLEncoded) : q instanceof m ? new e.Just(h.applicationJSON) : e.Nothing.value;
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
  var e = new function (h, g, b, f, c, k) {
    this.conj = h;
    this.disj = g;
    this.ff = b;
    this.implies = f;
    this.not = c;
    this.tt = k;
  }(a.boolConj, a.boolDisj, !1, function (h) {
    return function (g) {
      return (0, e.disj)((0, e.not)(h))(g);
    };
  }, a.boolNot, !0);

  d.ff = function (h) {
    return h.ff;
  };

  d.disj = function (h) {
    return h.disj;
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
      h = a["Data.Unit"];

  a = function a(f) {
    this.append = f;
  };

  var g = new a(function (f) {
    return function (c) {
      return h.unit;
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
      h = function h(f, c) {
    this.Semigroup0 = f;
    this.mempty = c;
  };

  a = new h(function () {
    return e.semigroupUnit;
  }, a["Data.Unit"].unit);
  var g = new h(function () {
    return e.semigroupString;
  }, ""),
      b = new h(function () {
    return e.semigroupArray;
  }, []);
  d.Monoid = h;

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
      h = a["Data.Monoid"],
      g = a["Data.Semigroup"],
      b = function b(f) {
    return new g.Semigroup(function (c) {
      return function (k) {
        return e.disj(f)(c)(k);
      };
    });
  };

  d.Disj = function (f) {
    return f;
  };

  d.monoidDisj = function (f) {
    return new h.Monoid(function () {
      return b(f);
    }, e.ff(f));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var d = a["Data.Newtype"],
      e = a["Data.Functor"],
      h = function h(g, b) {
    this.unwrap = g;
    this.wrap = b;
  };

  a = new h(function (g) {
    return g;
  }, a["Data.Monoid.Disj"].Disj);

  d.unwrap = function (g) {
    return g.unwrap;
  };

  d.Newtype = h;

  d.alaF = function (g) {
    return function (b) {
      return function (f) {
        return function (c) {
          return function (k) {
            return function (m) {
              var q = e.map(b)(c.unwrap),
                  t = e.map(g)(f.wrap);
              return function (n) {
                return q(m(t(n)));
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
      h = a["Data.Newtype"],
      g = function () {
    function c(k) {
      this.value0 = k;
    }

    c.create = function (k) {
      return new c(k);
    };

    return c;
  }(),
      b = function () {
    function c(k) {
      this.value0 = k;
    }

    c.create = function (k) {
      return new c(k);
    };

    return c;
  }(),
      f = function () {
    function c(k, m) {
      this.value0 = k;
      this.value1 = m;
    }

    c.create = function (k) {
      return function (m) {
        return new c(k, m);
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
    if (c instanceof g || c instanceof b) return h.unwrap(e.newtypeMediaType)(c.value0);
    if (c instanceof f) return c.value1;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): " + [c.constructor.name]);
  };
})(PS);

(function (a) {
  a["Affjax.ResponseFormat"] = a["Affjax.ResponseFormat"] || {};

  var d = a["Affjax.ResponseFormat"],
      e = a["Control.Category"],
      h = a["Data.Maybe"],
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
      k = function () {
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
      q = function () {
    function t(n) {
      this.value0 = n;
    }

    t.create = function (n) {
      return new t(n);
    };

    return t;
  }();

  a = new m(e.identity(e.categoryFn));
  e = new q(e.identity(e.categoryFn));
  d.ArrayBuffer = b;
  d.Blob = f;
  d.Document = c;
  d.Json = k;
  d.String = m;
  d.Ignore = q;
  d.string = a;
  d.ignore = e;

  d.toResponseType = function (t) {
    if (t instanceof b) return "arraybuffer";
    if (t instanceof f) return "blob";
    if (t instanceof c) return "document";
    if (t instanceof k || t instanceof m) return "text";
    if (t instanceof q) return "";
    throw Error("Failed pattern match at Affjax.ResponseFormat (line 46, column 3 - line 52, column 19): " + [t.constructor.name]);
  };

  d.toMediaType = function (t) {
    return t instanceof k ? new h.Just(g.applicationJSON) : h.Nothing.value;
  };
})(PS);

(function (a) {
  a["Affjax.ResponseHeader"] = a["Affjax.ResponseHeader"] || {};
  a = a["Affjax.ResponseHeader"];

  var d = function () {
    function e(h, g) {
      this.value0 = h;
      this.value1 = g;
    }

    e.create = function (h) {
      return function (g) {
        return new e(h, g);
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
      h = a["Control.Bind"];

  a = function a(b, f) {
    this.Applicative0 = b;
    this.Bind1 = f;
  };

  var g = new a(function () {
    return e.applicativeArray;
  }, function () {
    return h.bindArray;
  });
  d.Monad = a;

  d.ap = function (b) {
    return function (f) {
      return function (c) {
        return h.bind(b.Bind1())(f)(function (k) {
          return h.bind(b.Bind1())(c)(function (m) {
            return e.pure(b.Applicative0())(k(m));
          });
        });
      };
    };
  };

  d.monadArray = g;
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var d = a["Data.Bifunctor"],
      e = a["Control.Category"];

  d.bimap = function (h) {
    return h.bimap;
  };

  d.Bifunctor = function (h) {
    this.bimap = h;
  };

  d.lmap = function (h) {
    return function (g) {
      return (0, h.bimap)(g)(e.identity(e.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var d = a["Data.Either"],
      e = a["Control.Applicative"],
      h = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Data.Bifunctor"],
      c = a["Data.Function"],
      k = a["Data.Functor"],
      m = a["Data.Maybe"],
      q = function () {
    function v(x) {
      this.value0 = x;
    }

    v.create = function (x) {
      return new v(x);
    };

    return v;
  }(),
      t = function () {
    function v(x) {
      this.value0 = x;
    }

    v.create = function (x) {
      return new v(x);
    };

    return v;
  }(),
      n = new k.Functor(function (v) {
    return function (x) {
      if (x instanceof q) return new q(x.value0);
      if (x instanceof t) return new t(v(x.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [x.constructor.name]);
    };
  });

  a = function a(v) {
    return function (x) {
      return function (p) {
        if (p instanceof q) return v(p.value0);
        if (p instanceof t) return x(p.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [v.constructor.name, x.constructor.name, p.constructor.name]);
      };
    };
  };

  c = a(c["const"](m.Nothing.value))(m.Just.create);
  f = new f.Bifunctor(function (v) {
    return function (x) {
      return function (p) {
        if (p instanceof q) return new q(v(p.value0));
        if (p instanceof t) return new t(x(p.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [v.constructor.name, x.constructor.name, p.constructor.name]);
      };
    };
  });
  var r = new h.Apply(function () {
    return n;
  }, function (v) {
    return function (x) {
      if (v instanceof q) return new q(v.value0);
      if (v instanceof t) return k.map(n)(v.value0)(x);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [v.constructor.name, x.constructor.name]);
    };
  }),
      C = new g.Bind(function () {
    return r;
  }, a(function (v) {
    return function (x) {
      return new q(v);
    };
  })(function (v) {
    return function (x) {
      return x(v);
    };
  })),
      B = new e.Applicative(function () {
    return r;
  }, t.create);
  e = new b.Monad(function () {
    return B;
  }, function () {
    return C;
  });
  d.Left = q;
  d.Right = t;
  d.either = a;

  d.note = function (v) {
    return m.maybe(new q(v))(t.create);
  };

  d.hush = c;
  d.functorEither = n;
  d.bifunctorEither = f;
  d.applicativeEither = B;
  d.bindEither = C;
  d.monadEither = e;
})(PS);

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var d = a["Control.Monad.Error.Class"],
      e = a["Control.Applicative"],
      h = a["Data.Either"],
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
      return (0, b.catchError)(g.map(b.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(h.Right.create)(f))(function () {
        var c = e.pure(b.MonadThrow0().Monad0().Applicative0());
        return function (k) {
          return c(h.Left.create(k));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var d = a["Control.Monad.Except.Trans"],
      e = a["Control.Applicative"],
      h = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Control.Monad.Error.Class"],
      c = a["Data.Either"],
      k = a["Data.Functor"],
      m = function m(B) {
    return function (v) {
      return B(v);
    };
  },
      q = function q(B) {
    return new k.Functor(function (v) {
      return m(k.map(B)(k.map(c.functorEither)(v)));
    });
  },
      t = function t(B) {
    return new b.Monad(function () {
      return C(B);
    }, function () {
      return n(B);
    });
  },
      n = function n(B) {
    return new g.Bind(function () {
      return r(B);
    }, function (v) {
      return function (x) {
        return g.bind(B.Bind1())(v)(c.either(function () {
          var p = e.pure(B.Applicative0());
          return function (D) {
            return p(c.Left.create(D));
          };
        }())(function (p) {
          return x(p);
        }));
      };
    });
  },
      r = function r(B) {
    return new h.Apply(function () {
      return q(B.Bind1().Apply0().Functor0());
    }, b.ap(t(B)));
  },
      C = function C(B) {
    return new e.Applicative(function () {
      return r(B);
    }, function () {
      var v = e.pure(B.Applicative0());
      return function (x) {
        return v(c.Right.create(x));
      };
    }());
  };

  d.ExceptT = function (B) {
    return B;
  };

  d.runExceptT = function (B) {
    return B;
  };

  d.applicativeExceptT = C;
  d.bindExceptT = n;

  d.monadThrowExceptT = function (B) {
    return new f.MonadThrow(function () {
      return t(B);
    }, function () {
      var v = e.pure(B.Applicative0());
      return function (x) {
        return v(c.Left.create(x));
      };
    }());
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var d = a["Data.Identity"],
      e = a["Control.Applicative"],
      h = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Data.Functor"],
      c = function c(n) {
    return n;
  };

  a = new a["Data.Newtype"].Newtype(function (n) {
    return n;
  }, c);
  var k = new f.Functor(function (n) {
    return function (r) {
      return n(r);
    };
  }),
      m = new h.Apply(function () {
    return k;
  }, function (n) {
    return function (r) {
      return n(r);
    };
  }),
      q = new g.Bind(function () {
    return m;
  }, function (n) {
    return function (r) {
      return r(n);
    };
  }),
      t = new e.Applicative(function () {
    return m;
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
      h = a["Data.Identity"],
      g = a["Data.Newtype"];

  a = function () {
    var b = g.unwrap(h.newtypeIdentity);
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
    return function (h) {
      var g = [],
          b;

      for (b in h) {
        hasOwnProperty.call(h, b) && g.push(e(b)(h[b]));
      }

      return g;
    };
  }

  a._copyST = function (e) {
    return function () {
      var h = {},
          g;

      for (g in e) {
        hasOwnProperty.call(e, g) && (h[g] = e[g]);
      }

      return h;
    };
  };

  a.empty = {};

  a.runST = function (e) {
    return e();
  };

  a._foldM = function (e) {
    return function (h) {
      return function (g) {
        return function (b) {
          function f(m) {
            return function (q) {
              return h(q)(m)(b[m]);
            };
          }

          var c = g,
              k;

          for (k in b) {
            hasOwnProperty.call(b, k) && (c = e(c)(f(k)));
          }

          return c;
        };
      };
    };
  };

  a._lookup = function (e, h, g, b) {
    return g in b ? h(b[g]) : e;
  };

  a._lookupST = function (e, h, g, b) {
    return function () {
      return g in b ? h(b[g]) : e;
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
      h = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      f = a["Control.Monad"],
      c = new a["Data.Functor"].Functor(e.map_);
  a = new f.Monad(function () {
    return q;
  }, function () {
    return k;
  });
  var k = new b.Bind(function () {
    return m;
  }, e.bind_),
      m = new g.Apply(function () {
    return c;
  }, f.ap(a)),
      q = new h.Applicative(function () {
    return m;
  }, e.pure_);
  d.applicativeST = q;
  d.monadST = a;
})(PS);

(function (a) {
  a.foldrArray = function (d) {
    return function (e) {
      return function (h) {
        for (var g = e, b = h.length - 1; 0 <= b; b--) {
          g = d(h[b])(g);
        }

        return g;
      };
    };
  };

  a.foldlArray = function (d) {
    return function (e) {
      return function (h) {
        for (var g = e, b = h.length, f = 0; f < b; f++) {
          g = d(g)(h[f]);
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
      h = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Category"],
      f = a["Data.Function"],
      c = a["Data.Functor"],
      k = a["Data.Maybe"],
      m = a["Data.Monoid"],
      q = a["Data.Monoid.Disj"],
      t = a["Data.Newtype"],
      n = a["Data.Semigroup"],
      r = a["Data.Unit"];

  a = function a(p, D, z) {
    this.foldMap = p;
    this.foldl = D;
    this.foldr = z;
  };

  var C = function C(p) {
    return function (D) {
      return function (z) {
        return (0, D.foldr)(function () {
          var F = g.applySecond(p.Apply0());
          return function (L) {
            return F(z(L));
          };
        }())(h.pure(p)(r.unit));
      };
    };
  },
      B = new a(function (p) {
    return function (D) {
      return function (z) {
        if (z instanceof k.Nothing) return m.mempty(p);
        if (z instanceof k.Just) return D(z.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [D.constructor.name, z.constructor.name]);
      };
    };
  }, function (p) {
    return function (D) {
      return function (z) {
        if (z instanceof k.Nothing) return D;
        if (z instanceof k.Just) return p(D)(z.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [p.constructor.name, D.constructor.name, z.constructor.name]);
      };
    };
  }, function (p) {
    return function (D) {
      return function (z) {
        if (z instanceof k.Nothing) return D;
        if (z instanceof k.Just) return p(z.value0)(D);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [p.constructor.name, D.constructor.name, z.constructor.name]);
      };
    };
  }),
      v = function v(p) {
    return function (D) {
      return function (z) {
        return (0, p.foldr)(function (F) {
          return function (L) {
            return n.append(D.Semigroup0())(z(F))(L);
          };
        })(m.mempty(D));
      };
    };
  },
      x = new a(function (p) {
    return v(x)(p);
  }, e.foldlArray, e.foldrArray);

  d.Foldable = a;

  d.foldr = function (p) {
    return p.foldr;
  };

  d.foldl = function (p) {
    return p.foldl;
  };

  d.foldMap = function (p) {
    return p.foldMap;
  };

  d.fold = function (p) {
    return function (D) {
      return (0, p.foldMap)(D)(b.identity(b.categoryFn));
    };
  };

  d.traverse_ = C;

  d.for_ = function (p) {
    return function (D) {
      return f.flip(C(p)(D));
    };
  };

  d.intercalate = function (p) {
    return function (D) {
      return function (z) {
        return function (F) {
          return (0, p.foldl)(function (L) {
            return function (E) {
              return L.init ? {
                init: !1,
                acc: E
              } : {
                init: !1,
                acc: n.append(D.Semigroup0())(L.acc)(n.append(D.Semigroup0())(z)(E))
              };
            };
          })({
            init: !0,
            acc: m.mempty(D)
          })(F).acc;
        };
      };
    };
  };

  d.any = function (p) {
    return function (D) {
      return t.alaF(c.functorFn)(c.functorFn)(t.newtypeDisj)(t.newtypeDisj)(q.Disj)((0, p.foldMap)(q.monoidDisj(D)));
    };
  };

  d.find = function (p) {
    return function (D) {
      return (0, p.foldl)(function (z) {
        return function (F) {
          return z instanceof k.Nothing && D(F) ? new k.Just(F) : z;
        };
      })(k.Nothing.value);
    };
  };

  d.foldableArray = x;
  d.foldableMaybe = B;
})(PS);

(function (a) {
  a.runFn2 = function (d) {
    return function (e) {
      return function (h) {
        return d(e, h);
      };
    };
  };

  a.runFn4 = function (d) {
    return function (e) {
      return function (h) {
        return function (g) {
          return function (b) {
            return d(e, h, g, b);
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
      return function (h) {
        return function () {
          h[d] = e;
          return h;
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
      h = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Control.Monad.ST.Internal"],
      f = a["Data.Foldable"],
      c = a["Data.Maybe"],
      k = a["Foreign.Object.ST"],
      m = a["Unsafe.Coerce"],
      q = e._copyST,
      t = function t(v) {
    return function (x) {
      return e.runST(function () {
        var p = q(x)();
        v(p)();
        return p;
      });
    };
  },
      n = a["Data.Function.Uncurried"].runFn4(e._lookup)(c.Nothing.value)(c.Just.create),
      r = function r(v) {
    return function (x) {
      return t(k.poke(v)(x));
    };
  },
      C = function C(v) {
    return function (x) {
      return function (p) {
        return e._foldM(g.bind(v.Bind1()))(x)(h.pure(v.Applicative0())(p));
      };
    };
  },
      B = function B(v) {
    return t(function (x) {
      return C(b.monadST)(function (p) {
        return function (D) {
          return function (z) {
            return k.poke(D)(z)(p);
          };
        };
      })(x)(v);
    });
  };

  d.lookup = n;

  d.fromFoldableWith = function (v) {
    return function (x) {
      return function (p) {
        return e.runST(function () {
          var D = k["new"]();
          f.for_(b.applicativeST)(v)(p)(function (z) {
            return function () {
              var F = e._lookupST(z.value1, x(z.value1), z.value0, D)();

              return k.poke(z.value0)(F)(D)();
            };
          })();
          return D;
        });
      };
    };
  };

  d.fromHomogeneous = function (v) {
    return m.unsafeCoerce;
  };

  d.alter = function (v) {
    return function (x) {
      return function (p) {
        var D = v(n(x)(p));
        if (D instanceof c.Nothing) return t(k["delete"](x))(p);
        if (D instanceof c.Just) return r(x)(D.value0)(p);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [D.constructor.name]);
      };
    };
  };

  d.unions = function (v) {
    return f.foldl(v)(B)(e.empty);
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
  a._jsonParser = function (d, e, h) {
    try {
      return e(JSON.parse(h));
    } catch (g) {
      return d(g.message);
    }
  };
})(PS["Data.Argonaut.Parser"] = PS["Data.Argonaut.Parser"] || {});

(function (a) {
  a["Data.Argonaut.Parser"] = a["Data.Argonaut.Parser"] || {};
  var d = a["Data.Argonaut.Parser"],
      e = a["Data.Either"];

  a["Data.Argonaut.Parser"].jsonParser = function (h) {
    return d._jsonParser(e.Left.create, e.Right.create, h);
  };
})(PS);

(function (a) {
  a.range = function (d) {
    return function (e) {
      for (var h = d > e ? -1 : 1, g = Array(h * (e - d) + 1), b = d, f = 0; b !== e;) {
        g[f++] = b, b += h;
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

    var h = {};
    return function (g) {
      return function (b) {
        var f = [],
            c = 0;

        for (b = g(e)(h)(b); b !== h;) {
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
      var h = d.slice();
      h.push(e);
      return h;
    };
  };

  a["uncons'"] = function (d) {
    return function (e) {
      return function (h) {
        return 0 === h.length ? d({}) : e(h[0])(h.slice(1));
      };
    };
  };

  a.indexImpl = function (d) {
    return function (e) {
      return function (h) {
        return function (g) {
          return 0 > g || g >= h.length ? e : d(h[g]);
        };
      };
    };
  };

  a._updateAt = function (d) {
    return function (e) {
      return function (h) {
        return function (g) {
          return function (b) {
            if (0 > h || h >= b.length) return e;
            b = b.slice();
            b[h] = g;
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
      return function (h) {
        return h.slice(d, e);
      };
    };
  };

  a.zipWith = function (d) {
    return function (e) {
      return function (h) {
        for (var g = e.length < h.length ? e.length : h.length, b = Array(g), f = 0; f < g; f++) {
          b[f] = d(e[f])(h[f]);
        }

        return b;
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
  var d = a["Data.Tuple"];
  a = a["Data.Functor"];

  var e = function () {
    function h(g, b) {
      this.value0 = g;
      this.value1 = b;
    }

    h.create = function (g) {
      return function (b) {
        return new h(g, b);
      };
    };

    return h;
  }();

  a = new a.Functor(function (h) {
    return function (g) {
      return new e(g.value0, h(g.value1));
    };
  });
  d.Tuple = e;

  d.fst = function (h) {
    return h.value0;
  };

  d.snd = function (h) {
    return h.value1;
  };

  d.functorTuple = a;
})(PS);

(function (a) {
  a["Data.Array"] = a["Data.Array"] || {};
  var d = a["Data.Array"],
      e = a["Data.Array"],
      h = a["Control.Bind"],
      g = a["Control.Category"],
      b = a["Data.Boolean"],
      f = a["Data.Foldable"],
      c = a["Data.Function"],
      k = a["Data.Maybe"];
  a = e.zipWith(a["Data.Tuple"].Tuple.create);

  var m = e._updateAt(k.Just.create)(k.Nothing.value),
      q = e["uncons'"](c["const"](k.Nothing.value))(function (C) {
    return function (B) {
      return new k.Just({
        head: C,
        tail: B
      });
    };
  }),
      t = function t(C) {
    return [C];
  },
      n = e.indexImpl(k.Just.create)(k.Nothing.value),
      r = c.flip(h.bind(h.bindArray));

  h = function (C) {
    return r(function () {
      var B = k.maybe([])(t);
      return function (v) {
        return B(C(v));
      };
    }());
  }(g.identity(g.categoryFn));

  d.fromFoldable = function (C) {
    return e.fromFoldableImpl(f.foldr(C));
  };

  d.singleton = t;

  d.head = function (C) {
    return n(C)(0);
  };

  d.init = function (C) {
    if (0 === e.length(C)) return k.Nothing.value;
    if (b.otherwise) return new k.Just(e.slice(0)(e.length(C) - 1 | 0)(C));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [C.constructor.name]);
  };

  d.uncons = q;
  d.index = n;
  d.updateAt = m;
  d.concatMap = r;
  d.catMaybes = h;
  d.zip = a;
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

    function h(b) {
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
          return function (k) {
            return function (m) {
              function q(t, n) {
                switch (n - t) {
                  case 0:
                    return c([]);

                  case 1:
                    return f(d)(k(m[t]));

                  case 2:
                    return b(f(e)(k(m[t])))(k(m[t + 1]));

                  case 3:
                    return b(b(f(h)(k(m[t])))(k(m[t + 1])))(k(m[t + 2]));

                  default:
                    var r = t + 2 * Math.floor((n - t) / 4);
                    return b(f(g)(q(t, r)))(q(r, n));
                }
              }

              return q(0, m.length);
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
      h = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Category"],
      f = a["Data.Foldable"],
      c = a["Data.Functor"],
      k = a["Data.Maybe"];

  a = function a(n, r, C, B) {
    this.Foldable1 = n;
    this.Functor0 = r;
    this.sequence = C;
    this.traverse = B;
  };

  var m = new a(function () {
    return f.foldableMaybe;
  }, function () {
    return k.functorMaybe;
  }, function (n) {
    return function (r) {
      if (r instanceof k.Nothing) return h.pure(n)(k.Nothing.value);
      if (r instanceof k.Just) return c.map(n.Apply0().Functor0())(k.Just.create)(r.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [r.constructor.name]);
    };
  }, function (n) {
    return function (r) {
      return function (C) {
        if (C instanceof k.Nothing) return h.pure(n)(k.Nothing.value);
        if (C instanceof k.Just) return c.map(n.Apply0().Functor0())(k.Just.create)(r(C.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [r.constructor.name, C.constructor.name]);
      };
    };
  }),
      q = function q(n) {
    return function (r) {
      return (0, n.traverse)(r)(b.identity(b.categoryFn));
    };
  },
      t = new a(function () {
    return f.foldableArray;
  }, function () {
    return c.functorArray;
  }, function (n) {
    return q(t)(n);
  }, function (n) {
    return e.traverseArrayImpl(g.apply(n.Apply0()))(c.map(n.Apply0().Functor0()))(h.pure(n));
  });

  d.traverse = function (n) {
    return n.traverse;
  };

  d.sequence = function (n) {
    return n.sequence;
  };

  d.traversableArray = t;
  d.traversableMaybe = m;
})(PS);

(function (a) {
  a.infinity = Infinity;

  a.readInt = function (d) {
    return function (e) {
      return parseInt(e, d);
    };
  };

  a._encodeURIComponent = function (d) {
    return function (e, h, g) {
      try {
        return h(d(g));
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
      h = a["Data.Function"],
      g = a["Data.Maybe"];

  d.encodeURIComponent = function (b) {
    return e._encodeURIComponent(h["const"](g.Nothing.value), g.Just.create, b);
  };

  d.infinity = e.infinity;
  d.readInt = e.readInt;
})(PS);

(function (a) {
  a["Data.FormURLEncoded"] = a["Data.FormURLEncoded"] || {};
  var d = a["Data.FormURLEncoded"],
      e = a["Control.Apply"],
      h = a["Data.Functor"],
      g = a["Data.Maybe"],
      b = a["Data.String.Common"],
      f = a["Data.Traversable"],
      c = a.Global;

  a = function () {
    var k = h.map(g.functorMaybe)(b.joinWith("&")),
        m = f.traverse(f.traversableArray)(g.applicativeMaybe)(function (q) {
      if (q.value1 instanceof g.Nothing) return c.encodeURIComponent(q.value0);
      if (q.value1 instanceof g.Just) return e.apply(g.applyMaybe)(h.map(g.functorMaybe)(function (t) {
        return function (n) {
          return t + ("=" + n);
        };
      })(c.encodeURIComponent(q.value0)))(c.encodeURIComponent(q.value1.value0));
      throw Error("Failed pattern match at Data.FormURLEncoded (line 37, column 18 - line 39, column 108): " + [q.constructor.name]);
    });
    return function (q) {
      return k(m(q));
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
    return '"' + d.replace(/[\0-\x1F\x7F"\\]/g, function (h, g) {
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

      g += 1;
      g = g < e && "0" <= d[g] && "9" >= d[g] ? "\\&" : "";
      return "\\" + h.charCodeAt(0).toString(10) + g;
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

  var h = new a(e.showStringImpl),
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
  d.showString = h;
})(PS);

(function (a) {
  a["Data.HTTP.Method"] = a["Data.HTTP.Method"] || {};
  var d = a["Data.HTTP.Method"],
      e = a["Data.Either"];
  a = a["Data.Show"];

  var h = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      g = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      b = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      f = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      c = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      k = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      m = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      q = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      t = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      n = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      r = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      C = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      B = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      v = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      x = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      p = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      D = new a.Show(function (z) {
    if (z instanceof h) return "OPTIONS";
    if (z instanceof g) return "GET";
    if (z instanceof b) return "HEAD";
    if (z instanceof f) return "POST";
    if (z instanceof c) return "PUT";
    if (z instanceof k) return "DELETE";
    if (z instanceof m) return "TRACE";
    if (z instanceof q) return "CONNECT";
    if (z instanceof t) return "PROPFIND";
    if (z instanceof n) return "PROPPATCH";
    if (z instanceof r) return "MKCOL";
    if (z instanceof C) return "COPY";
    if (z instanceof B) return "MOVE";
    if (z instanceof v) return "LOCK";
    if (z instanceof x) return "UNLOCK";
    if (z instanceof p) return "PATCH";
    throw Error("Failed pattern match at Data.HTTP.Method (line 40, column 1 - line 56, column 23): " + [z.constructor.name]);
  });

  e = e.either(a.show(D))(function (z) {
    return z;
  });
  d.GET = g;
  d.print = e;
})(PS);

(function (a) {
  a["Control.Alt"] = a["Control.Alt"] || {};
  var d = a["Control.Alt"],
      e = a["Data.Functor"],
      h = a["Data.Semigroup"];

  a = function a(g, b) {
    this.Functor0 = g;
    this.alt = b;
  };

  h = new a(function () {
    return e.functorArray;
  }, h.append(h.semigroupArray));
  d.Alt = a;

  d.alt = function (g) {
    return g.alt;
  };

  d.altArray = h;
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  var d = a["Control.Plus"],
      e = a["Control.Alt"];

  a = function a(g, b) {
    this.Alt0 = g;
    this.empty = b;
  };

  var h = new a(function () {
    return e.altArray;
  }, []);
  d.Plus = a;

  d.empty = function (g) {
    return g.empty;
  };

  d.plusArray = h;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var d = a["Data.NonEmpty"],
      e = a["Control.Plus"],
      h = a["Data.Foldable"],
      g = a["Data.Functor"],
      b = a["Data.Semigroup"],
      f = a["Data.Show"],
      c = function () {
    function k(m, q) {
      this.value0 = m;
      this.value1 = q;
    }

    k.create = function (m) {
      return function (q) {
        return new k(m, q);
      };
    };

    return k;
  }();

  d.NonEmpty = c;

  d.singleton = function (k) {
    return function (m) {
      return new c(m, e.empty(k));
    };
  };

  d.showNonEmpty = function (k) {
    return function (m) {
      return new f.Show(function (q) {
        return "(NonEmpty " + (f.show(k)(q.value0) + (" " + (f.show(m)(q.value1) + ")")));
      });
    };
  };

  d.functorNonEmpty = function (k) {
    return new g.Functor(function (m) {
      return function (q) {
        return new c(m(q.value0), g.map(k)(m)(q.value1));
      };
    });
  };

  d.foldableNonEmpty = function (k) {
    return new h.Foldable(function (m) {
      return function (q) {
        return function (t) {
          return b.append(m.Semigroup0())(q(t.value0))(h.foldMap(k)(m)(q)(t.value1));
        };
      };
    }, function (m) {
      return function (q) {
        return function (t) {
          return h.foldl(k)(m)(m(q)(t.value0))(t.value1);
        };
      };
    }, function (m) {
      return function (q) {
        return function (t) {
          return m(t.value0)(h.foldr(k)(m)(q)(t.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var d = a["Data.List.Types"],
      e = a["Control.Alt"],
      h = a["Control.Plus"],
      g = a["Data.Foldable"],
      b = a["Data.Function"],
      f = a["Data.Functor"],
      c = a["Data.Monoid"],
      k = a["Data.NonEmpty"],
      m = a["Data.Semigroup"],
      q = a["Data.Show"],
      t = function () {
    function z() {}

    z.value = new z();
    return z;
  }(),
      n = function () {
    function z(F, L) {
      this.value0 = F;
      this.value1 = L;
    }

    z.create = function (F) {
      return function (L) {
        return new z(F, L);
      };
    };

    return z;
  }(),
      r = new f.Functor(function (z) {
    return function (F) {
      return function (L) {
        function E(y, K) {
          if (K instanceof n && K.value1 instanceof n && K.value1.value1 instanceof n) G = new n(K, y), L = K.value1.value1.value1;else return J = !0, function (I) {
            return function (A) {
              for (var O = I, N = !1, Q; !N;) {
                Q = O;
                var H = A;
                Q instanceof n && Q.value0 instanceof n && Q.value0.value1 instanceof n && Q.value0.value1.value1 instanceof n ? (O = Q.value1, A = new n(z(Q.value0.value0), new n(z(Q.value0.value1.value0), new n(z(Q.value0.value1.value1.value0), H))), Q = void 0) : (N = !0, Q = H);
              }

              return Q;
            };
          }(y)(function (I) {
            return I instanceof n && I.value1 instanceof n && I.value1.value1 instanceof t ? new n(z(I.value0), new n(z(I.value1.value0), t.value)) : I instanceof n && I.value1 instanceof t ? new n(z(I.value0), t.value) : t.value;
          }(K));
        }

        for (var G = F, J = !1, P; !J;) {
          P = E(G, L);
        }

        return P;
      };
    }(t.value);
  });

  a = k.functorNonEmpty(r);

  var C = new g.Foldable(function (z) {
    return function (F) {
      return g.foldl(C)(function (L) {
        var E = m.append(z.Semigroup0())(L);
        return function (G) {
          return E(F(G));
        };
      })(c.mempty(z));
    };
  }, function (z) {
    return function (F) {
      return function (L) {
        for (var E = F, G = !1, J; !G;) {
          J = E;
          var P = L;
          if (P instanceof t) G = !0;else {
            if (P instanceof n) E = z(J)(P.value0), L = P.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [P.constructor.name]);
            J = void 0;
          }
        }

        return J;
      };
    };
  }, function (z) {
    return function (F) {
      var L = g.foldl(C)(b.flip(n.create))(t.value),
          E = g.foldl(C)(b.flip(z))(F);
      return function (G) {
        return E(L(G));
      };
    };
  }),
      B = k.foldableNonEmpty(C),
      v = new m.Semigroup(function (z) {
    return function (F) {
      return g.foldr(C)(n.create)(F)(z);
    };
  }),
      x = new c.Monoid(function () {
    return v;
  }, t.value),
      p = function p(z) {
    return new q.Show(function (F) {
      return F instanceof t ? "Nil" : "(" + (g.intercalate(C)(c.monoidString)(" : ")(f.map(r)(q.show(z))(F)) + " : Nil)");
    });
  },
      D = new e.Alt(function () {
    return r;
  }, m.append(v));

  e = new h.Plus(function () {
    return D;
  }, t.value);
  d.Nil = t;
  d.Cons = n;

  d.NonEmptyList = function (z) {
    return z;
  };

  d.monoidList = x;
  d.foldableList = C;
  d.plusList = e;

  d.showNonEmptyList = function (z) {
    return new q.Show(function (F) {
      return "(NonEmptyList " + (q.show(k.showNonEmpty(z)(p(z)))(F) + ")");
    });
  };

  d.functorNonEmptyList = a;
  d.foldableNonEmptyList = B;
})(PS);

(function (a) {
  a["Data.List.NonEmpty"] = a["Data.List.NonEmpty"] || {};
  var d = a["Data.List.NonEmpty"],
      e = a["Data.List.Types"],
      h = a["Data.NonEmpty"];

  a = function () {
    var g = h.singleton(e.plusList);
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

  a.nullable = function (d, e, h) {
    return null == d ? e : h(d);
  };

  a.notNull = function (d) {
    return d;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var d = a["Data.Nullable"],
      e = a["Data.Nullable"],
      h = a["Data.Maybe"];
  a = h.maybe(e["null"])(e.notNull);

  d.toMaybe = function (g) {
    return e.nullable(g, h.Nothing.value, h.Just.create);
  };

  d.toNullable = a;
})(PS);

(function (a) {
  var d = function () {
    function e(r, C, B, v) {
      this.tag = r;
      this._1 = C;
      this._2 = B;
      this._3 = v;
    }

    function h(r) {
      var C = function C(B, v, x) {
        return new e(r, B, v, x);
      };

      C.tag = r;
      return C;
    }

    function g(r) {
      return new e("Pure", void 0);
    }

    function b(r) {
      try {
        r();
      } catch (C) {
        setTimeout(function () {
          throw C;
        }, 0);
      }
    }

    function f(r, C, B) {
      try {
        return C(B());
      } catch (v) {
        return r(v);
      }
    }

    function c(r, C, B) {
      try {
        return C(B)();
      } catch (v) {
        return B(r(v))(), g;
      }
    }

    function k(r, C, B) {
      function v(A) {
        for (var O, N, Q;;) {
          switch (Q = N = O = null, D) {
            case 2:
              D = 1;

              try {
                z = E(z), null === G ? E = null : (E = G._1, G = G._2);
              } catch (X) {
                D = 5, F = r.left(X), z = null;
              }

              break;

            case 3:
              r.isLeft(z) ? (D = 5, F = z, z = null) : null === E ? D = 5 : (D = 2, z = r.fromRight(z));
              break;

            case 1:
              switch (z.tag) {
                case "Bind":
                  E && (G = new e("Cons", E, G));
                  E = z._2;
                  D = 1;
                  z = z._1;
                  break;

                case "Pure":
                  null === E ? (D = 5, z = r.right(z._1)) : (D = 2, z = z._1);
                  break;

                case "Sync":
                  D = 3;
                  z = f(r.left, r.right, z._1);
                  break;

                case "Async":
                  D = 4;
                  z = c(r.left, z._1, function (X) {
                    return function () {
                      p === A && (p++, n.enqueue(function () {
                        p === A + 1 && (D = 3, z = X, v(p));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  D = 5;
                  F = r.left(z._1);
                  z = null;
                  break;

                case "Catch":
                  J = null === E ? new e("Cons", z, J, L) : new e("Cons", z, new e("Cons", new e("Resume", E, G), J, L), L);
                  G = E = null;
                  D = 1;
                  z = z._1;
                  break;

                case "Bracket":
                  P++;
                  J = null === E ? new e("Cons", z, J, L) : new e("Cons", z, new e("Cons", new e("Resume", E, G), J, L), L);
                  G = E = null;
                  D = 1;
                  z = z._1;
                  break;

                case "Fork":
                  D = 3;
                  O = k(r, C, z._2);
                  C && C.register(O);
                  z._1 && O.run();
                  z = r.right(O);
                  break;

                case "Sequential":
                  D = 1, z = q(r, C, z._1);
              }

              break;

            case 5:
              G = E = null;
              if (null === J) D = 6, z = L || F || z;else switch (O = J._3, Q = J._1, J = J._2, Q.tag) {
                case "Catch":
                  L && L !== O && 0 === P ? D = 5 : F && (D = 1, z = Q._2(r.fromLeft(F)), F = null);
                  break;

                case "Resume":
                  L && L !== O && 0 === P || F ? D = 5 : (E = Q._1, G = Q._2, D = 2, z = r.fromRight(z));
                  break;

                case "Bracket":
                  P--;
                  null === F && (N = r.fromRight(z), J = new e("Cons", new e("Release", Q._2, N), J, O), L === O || 0 < P) && (D = 1, z = Q._3(N));
                  break;

                case "Release":
                  J = new e("Cons", new e("Finalized", z, F), J, L);
                  D = 1;
                  z = L && L !== O && 0 === P ? Q._1.killed(r.fromLeft(L))(Q._2) : F ? Q._1.failed(r.fromLeft(F))(Q._2) : Q._1.completed(r.fromRight(z))(Q._2);
                  F = null;
                  P++;
                  break;

                case "Finalizer":
                  P++;
                  J = new e("Cons", new e("Finalized", z, F), J, L);
                  D = 1;
                  z = Q._1;
                  break;

                case "Finalized":
                  P--, D = 5, z = Q._1, F = Q._2;
              }
              break;

            case 6:
              for (var H in K) {
                K.hasOwnProperty(H) && (I = I && K[H].rethrow, b(K[H].handler(z)));
              }

              K = null;
              L && F ? setTimeout(function () {
                throw r.fromLeft(F);
              }, 0) : r.isLeft(z) && I && setTimeout(function () {
                if (I) throw r.fromLeft(z);
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

      function x(A) {
        return function () {
          if (6 === D) return I = I && A.rethrow, A.handler(z)(), function () {};
          var O = y++;
          K = K || {};
          K[O] = A;
          return function () {
            null !== K && delete K[O];
          };
        };
      }

      var p = 0,
          D = 0,
          z = B,
          F = null,
          L = null,
          E = null,
          G = null,
          J = null,
          P = 0,
          y = 0,
          K = null,
          I = !0;
      return {
        kill: function kill(A, O) {
          return function () {
            if (6 === D) return O(r.right(void 0))(), function () {};
            var N = x({
              rethrow: !1,
              handler: function handler() {
                return O(r.right(void 0));
              }
            })();

            switch (D) {
              case 0:
                L = r.left(A);
                D = 6;
                z = L;
                v(p);
                break;

              case 4:
                null === L && (L = r.left(A));
                0 === P && (4 === D && (J = new e("Cons", new e("Finalizer", z(A)), J, L)), D = 5, F = z = null, v(++p));
                break;

              default:
                null === L && (L = r.left(A)), 0 === P && (D = 5, F = z = null);
            }

            return N;
          };
        },
        join: function join(A) {
          return function () {
            var O = x({
              rethrow: !1,
              handler: A
            })();
            0 === D && v(p);
            return O;
          };
        },
        onComplete: x,
        isSuspended: function isSuspended() {
          return 0 === D;
        },
        run: function run() {
          0 === D && (n.isDraining() ? v(p) : n.enqueue(function () {
            v(p);
          }));
        }
      };
    }

    function m(r, C, B, v) {
      function x(K, I, A) {
        var O = I,
            N = null,
            Q = null,
            H = 0;
        I = {};

        a: for (;;) {
          var X = null;

          switch (O.tag) {
            case "Forked":
              O._3 === t && (X = L[O._1], I[H++] = X.kill(K, function (u) {
                return function () {
                  H--;
                  0 === H && A(u)();
                };
              }));
              if (null === N) break a;
              O = N._2;
              null === Q ? N = null : (N = Q._1, Q = Q._2);
              break;

            case "Map":
              O = O._2;
              break;

            case "Apply":
            case "Alt":
              N && (Q = new e("Cons", N, Q)), N = O, O = O._1;
          }
        }

        if (0 === H) A(r.right(void 0))();else for (K = 0, X = H; K < X; K++) {
          I[K] = I[K]();
        }
        return I;
      }

      function p(K, I, A) {
        var O, N;

        if (r.isLeft(K)) {
          var Q = K;
          var H = null;
        } else H = K, Q = null;

        for (;;) {
          var X = N = O = K = null;
          if (null !== P) break;

          if (null === I) {
            v(Q || H)();
            break;
          }

          if (I._3 !== t) break;

          switch (I.tag) {
            case "Map":
              null === Q ? (I._3 = r.right(I._1(r.fromRight(H))), H = I._3) : I._3 = Q;
              break;

            case "Apply":
              K = I._1._3;
              O = I._2._3;

              if (Q) {
                if (I._3 = Q, N = !0, X = E++, G[X] = x(J, Q === K ? I._2 : I._1, function () {
                  return function () {
                    delete G[X];
                    N ? N = !1 : null === A ? p(Q, null, null) : p(Q, A._1, A._2);
                  };
                }), N) {
                  N = !1;
                  return;
                }
              } else {
                if (K === t || O === t) return;
                H = r.right(r.fromRight(K)(r.fromRight(O)));
                I._3 = H;
              }

              break;

            case "Alt":
              K = I._1._3;
              O = I._2._3;
              if (K === t && r.isLeft(O) || O === t && r.isLeft(K)) return;
              if (K !== t && r.isLeft(K) && O !== t && r.isLeft(O)) Q = H === K ? O : K, H = null, I._3 = Q;else if (I._3 = H, N = !0, X = E++, G[X] = x(J, H === K ? I._2 : I._1, function () {
                return function () {
                  delete G[X];
                  N ? N = !1 : null === A ? p(H, null, null) : p(H, A._1, A._2);
                };
              }), N) {
                N = !1;
                return;
              }
          }

          null === A ? I = null : (I = A._1, A = A._2);
        }
      }

      function D(K) {
        return function (I) {
          return function () {
            delete L[K._1];
            K._3 = I;
            p(I, K._2._1, K._2._2);
          };
        };
      }

      function z(K, I) {
        P = r.left(K);
        var A;

        for (A in G) {
          if (G.hasOwnProperty(A)) {
            var O = G[A];

            for (A in O) {
              if (O.hasOwnProperty(A)) O[A]();
            }
          }
        }

        G = null;
        var N = x(K, y, I);
        return function (Q) {
          return new e("Async", function (H) {
            return function () {
              for (var X in N) {
                if (N.hasOwnProperty(X)) N[X]();
              }

              return g;
            };
          });
        };
      }

      var F = 0,
          L = {},
          E = 0,
          G = {},
          J = Error("[ParAff] Early exit"),
          P = null,
          y = t;

      (function () {
        var K = 1,
            I = B,
            A = null,
            O = null;

        a: for (;;) {
          switch (K) {
            case 1:
              switch (I.tag) {
                case "Map":
                  A && (O = new e("Cons", A, O));
                  A = new e("Map", I._1, t, t);
                  I = I._2;
                  break;

                case "Apply":
                  A && (O = new e("Cons", A, O));
                  A = new e("Apply", t, I._2, t);
                  I = I._1;
                  break;

                case "Alt":
                  A && (O = new e("Cons", A, O));
                  A = new e("Alt", t, I._2, t);
                  I = I._1;
                  break;

                default:
                  var N = F++;
                  K = 5;
                  var Q = I;
                  I = new e("Forked", N, new e("Cons", A, O), t);
                  Q = k(r, C, Q);
                  Q.onComplete({
                    rethrow: !1,
                    handler: D(I)
                  })();
                  L[N] = Q;
                  C && C.register(Q);
              }

              break;

            case 5:
              if (null === A) break a;
              A._1 === t ? (A._1 = I, K = 1, I = A._2, A._2 = t) : (A._2 = I, I = A, null === O ? A = null : (A = O._1, O = O._2));
          }
        }

        y = I;

        for (N = 0; N < F; N++) {
          L[N].run();
        }
      })();

      return function (K) {
        return new e("Async", function (I) {
          return function () {
            return z(K, I);
          };
        });
      };
    }

    function q(r, C, B) {
      return new e("Async", function (v) {
        return function () {
          return m(r, C, B, v);
        };
      });
    }

    var t = {},
        n = function () {
      function r() {
        for (x = !0; 0 !== C;) {
          C--;
          var p = v[B];
          v[B] = void 0;
          B = (B + 1) % 1024;
          p();
        }

        x = !1;
      }

      var C = 0,
          B = 0,
          v = Array(1024),
          x = !1;
      return {
        isDraining: function isDraining() {
          return x;
        },
        enqueue: function enqueue(p) {
          if (1024 === C) {
            var D = x;
            r();
            x = D;
          }

          v[(B + C) % 1024] = p;
          C++;
          x || r();
        }
      };
    }();

    e.EMPTY = t;
    e.Pure = h("Pure");
    e.Throw = h("Throw");
    e.Catch = h("Catch");
    e.Sync = h("Sync");
    e.Async = h("Async");
    e.Bind = h("Bind");
    e.Bracket = h("Bracket");
    e.Fork = h("Fork");
    e.Seq = h("Sequential");
    e.ParMap = h("Map");
    e.ParApply = h("Apply");
    e.ParAlt = h("Alt");
    e.Fiber = k;

    e.Supervisor = function (r) {
      var C = {},
          B = 0,
          v = 0;
      return {
        register: function register(x) {
          var p = B++;
          x.onComplete({
            rethrow: !0,
            handler: function handler(D) {
              return function () {
                v--;
                delete C[p];
              };
            }
          })();
          C[p] = x;
          v++;
        },
        isEmpty: function isEmpty() {
          return 0 === v;
        },
        killAll: function killAll(x, p) {
          return function () {
            function D(E) {
              F[E] = C[E].kill(x, function (G) {
                return function () {
                  delete F[E];
                  z--;
                  r.isLeft(G) && r.fromLeft(G) && setTimeout(function () {
                    throw r.fromLeft(G);
                  }, 0);
                  0 === z && p();
                };
              })();
            }

            if (0 === v) return p();
            var z = 0,
                F = {},
                L;

            for (L in C) {
              C.hasOwnProperty(L) && (z++, D(L));
            }

            C = {};
            v = B = 0;
            return function (E) {
              return new e("Sync", function () {
                for (var G in F) {
                  if (F.hasOwnProperty(G)) F[G]();
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
    return function (h) {
      return d.Catch(e, h);
    };
  };

  a._map = function (e) {
    return function (h) {
      return h.tag === d.Pure.tag ? d.Pure(e(h._1)) : d.Bind(h, function (g) {
        return d.Pure(e(g));
      });
    };
  };

  a._bind = function (e) {
    return function (h) {
      return d.Bind(e, h);
    };
  };

  a._liftEffect = d.Sync;

  a._parAffMap = function (e) {
    return function (h) {
      return d.ParMap(e, h);
    };
  };

  a._parAffApply = function (e) {
    return function (h) {
      return d.ParApply(e, h);
    };
  };

  a._parAffAlt = function (e) {
    return function (h) {
      return d.ParAlt(e, h);
    };
  };

  a.makeAff = d.Async;

  a._makeFiber = function (e, h) {
    return function () {
      return d.Fiber(e, null, h);
    };
  };

  a._delay = function () {
    function e(h, g) {
      return 0 === h && "undefined" !== typeof setImmediate ? setImmediate(g) : setTimeout(g, h);
    }

    return function (h, g) {
      return d.Async(function (b) {
        return function () {
          var f = e(g, b(h()));
          return function () {
            return d.Sync(function () {
              var c = 0 === g && "undefined" !== typeof clearImmediate ? clearImmediate(f) : clearTimeout(f);
              return h(c);
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

  a.Parallel = function (d, e, h, g) {
    this.Applicative1 = d;
    this.Monad0 = e;
    this.parallel = h;
    this.sequential = g;
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var d = a["Control.Category"],
      e = a["Control.Parallel.Class"],
      h = a["Data.Foldable"],
      g = function g(b) {
    return function (f) {
      return function (c) {
        var k = e.sequential(b),
            m = h.traverse_(b.Applicative1())(f)(function () {
          var q = e.parallel(b);
          return function (t) {
            return q(c(t));
          };
        }());
        return function (q) {
          return k(m(q));
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
      h = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      f = a["Control.Monad"],
      c = a["Data.Functor"],
      k = a["Data.Monoid"],
      m = a["Data.Semigroup"];
  a = new f.Monad(function () {
    return n;
  }, function () {
    return q;
  });
  var q = new b.Bind(function () {
    return t;
  }, e.bindE),
      t = new g.Apply(function () {
    return r;
  }, f.ap(a)),
      n = new h.Applicative(function () {
    return t;
  }, e.pureE),
      r = new c.Functor(h.liftA1(n));
  d.functorEffect = r;
  d.applyEffect = t;
  d.applicativeEffect = n;
  d.bindEffect = q;
  d.monadEffect = a;

  d.monoidEffect = function (C) {
    return new k.Monoid(function () {
      var B = C.Semigroup0();
      return new m.Semigroup(g.lift2(t)(m.append(B)));
    }, e.pureE(k.mempty(C)));
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var d = a["Effect.Class"],
      e = a["Control.Category"],
      h = a.Effect;

  a = function a(g, b) {
    this.Monad0 = g;
    this.liftEffect = b;
  };

  e = new a(function () {
    return h.monadEffect;
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
        } catch (h) {
          return h instanceof Error || "[object Error]" === Object.prototype.toString.call(h) ? d(h)() : d(Error(h.toString()))();
        }
      };
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var d = a["Effect.Exception"],
      e = a["Effect.Exception"],
      h = a["Control.Applicative"],
      g = a["Data.Either"],
      b = a["Data.Functor"],
      f = a.Effect;
  a = new a["Data.Show"].Show(e.showErrorImpl);

  d["throw"] = function (c) {
    return e.throwException(e.error(c));
  };

  d["try"] = function (c) {
    return e.catchException(function () {
      var k = h.pure(f.applicativeEffect);
      return function (m) {
        return k(g.Left.create(m));
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

  a["Partial.Unsafe"].unsafeCrashWith = function (h) {
    return d.unsafePartial(function (g) {
      return e.crashWith()(h);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var d = a["Effect.Aff"],
      e = a["Effect.Aff"],
      h = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      f = a["Control.Bind"],
      c = a["Control.Monad"],
      k = a["Control.Monad.Error.Class"],
      m = a["Control.Parallel"],
      q = a["Control.Parallel.Class"],
      t = a["Control.Plus"],
      n = a["Data.Either"],
      r = a["Data.Foldable"],
      C = a["Data.Function"],
      B = a["Data.Functor"],
      v = a["Data.Monoid"],
      x = a["Data.Semigroup"],
      p = a["Data.Unit"],
      D = a.Effect,
      z = a["Effect.Class"],
      F = a["Effect.Exception"],
      L = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var E = new B.Functor(e._parAffMap),
      G = new B.Functor(e._map),
      J = function () {
    return {
      isLeft: function isLeft(ia) {
        if (ia instanceof n.Left) return !0;
        if (ia instanceof n.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [ia.constructor.name]);
      },
      fromLeft: function fromLeft(ia) {
        if (ia instanceof n.Left) return ia.value0;
        if (ia instanceof n.Right) return L.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [ia.constructor.name]);
      },
      fromRight: function fromRight(ia) {
        if (ia instanceof n.Right) return ia.value0;
        if (ia instanceof n.Left) return L.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [ia.constructor.name]);
      },
      left: n.Left.create,
      right: n.Right.create
    };
  }(),
      P = function P(ia) {
    return function () {
      var ra = e._makeFiber(J, ia)();

      ra.run();
      return ra;
    };
  },
      y = new b.Apply(function () {
    return E;
  }, e._parAffApply),
      K = new c.Monad(function () {
    return O;
  }, function () {
    return I;
  }),
      I = new f.Bind(function () {
    return A;
  }, e._bind),
      A = new b.Apply(function () {
    return G;
  }, c.ap(K)),
      O = new g.Applicative(function () {
    return A;
  }, e._pure),
      N = new z.MonadEffect(function () {
    return K;
  }, e._liftEffect);

  b = function () {
    var ia = z.liftEffect(N);
    return function (ra) {
      return C["const"](ia(ra));
    };
  }();

  var Q = new k.MonadThrow(function () {
    return K;
  }, e._throwError),
      H = new k.MonadError(function () {
    return Q;
  }, e._catchError),
      X = function X(ia) {
    return function (ra) {
      return P(f.bindFlipped(I)(function () {
        var S = z.liftEffect(N);
        return function (ca) {
          return S(ia(ca));
        };
      }())(k["try"](H)(ra)));
    };
  },
      u = new q.Parallel(function () {
    return ka;
  }, function () {
    return K;
  }, a.unsafeCoerce, e._sequential),
      ka = new g.Applicative(function () {
    return y;
  }, function () {
    var ia = q.parallel(u),
        ra = g.pure(O);
    return function (S) {
      return ia(ra(S));
    };
  }()),
      ma = new x.Semigroup(function (ia) {
    return function (ra) {
      return function (S) {
        return m.parSequence_(u)(r.foldableArray)([ia(S), ra(S)]);
      };
    };
  });

  x = C["const"](g.pure(O)(p.unit));
  var Da = new v.Monoid(function () {
    return ma;
  }, x);
  p = e.makeAff(function (ia) {
    return g.pure(D.applicativeEffect)(v.mempty(Da));
  });
  var Ba = new h.Alt(function () {
    return E;
  }, e._parAffAlt),
      ha = new h.Alt(function () {
    return G;
  }, function (ia) {
    return function (ra) {
      return k.catchError(H)(ia)(C["const"](ra));
    };
  });
  h = new t.Plus(function () {
    return ha;
  }, k.throwError(Q)(F.error("Always fails")));
  t = new t.Plus(function () {
    return Ba;
  }, q.parallel(u)(t.empty(h)));

  d.runAff_ = function (ia) {
    return function (ra) {
      return B["void"](D.functorEffect)(X(ia)(ra));
    };
  };

  d.delay = function (ia) {
    return e._delay(n.Right.create, ia);
  };

  d.never = p;
  d.nonCanceler = x;
  d.effectCanceler = b;
  d.functorAff = G;
  d.applicativeAff = O;
  d.bindAff = I;
  d.monadErrorAff = H;
  d.monadEffectAff = N;
  d.altParAff = Ba;
  d.plusParAff = t;
  d.parallelAff = u;
  d.monoidCanceler = Da;
  d.makeAff = e.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.Compat"] = a["Effect.Aff.Compat"] || {};
  var d = a["Data.Either"],
      e = a["Effect.Aff"];

  a["Effect.Aff.Compat"].fromEffectFnAff = function (h) {
    return e.makeAff(function (g) {
      return function () {
        var b = h(function (f) {
          return g(d.Left.create(f))();
        }, function (f) {
          return g(d.Right.create(f))();
        });
        return function (f) {
          return e.makeAff(function (c) {
            return function () {
              b(f, function (k) {
                return c(d.Left.create(k))();
              }, function (k) {
                return c(d.Right.create(k))();
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
      h = a["Control.Applicative"],
      g = a["Control.Monad.Error.Class"],
      b = a["Control.Monad.Except.Trans"],
      f = a["Data.Boolean"],
      c = a["Data.Identity"],
      k = a["Data.List.NonEmpty"],
      m = a["Data.Show"],
      q = function () {
    function p(D) {
      this.value0 = D;
    }

    p.create = function (D) {
      return new p(D);
    };

    return p;
  }(),
      t = function () {
    function p(D, z) {
      this.value0 = D;
      this.value1 = z;
    }

    p.create = function (D) {
      return function (z) {
        return new p(D, z);
      };
    };

    return p;
  }(),
      n = function () {
    function p(D, z) {
      this.value0 = D;
      this.value1 = z;
    }

    p.create = function (D) {
      return function (z) {
        return new p(D, z);
      };
    };

    return p;
  }(),
      r = function () {
    function p(D, z) {
      this.value0 = D;
      this.value1 = z;
    }

    p.create = function (D) {
      return function (z) {
        return new p(D, z);
      };
    };

    return p;
  }(),
      C = new m.Show(function (p) {
    if (p instanceof q) return "(ForeignError " + (m.show(m.showString)(p.value0) + ")");
    if (p instanceof n) return "(ErrorAtIndex " + (m.show(m.showInt)(p.value0) + (" " + (m.show(C)(p.value1) + ")")));
    if (p instanceof r) return "(ErrorAtProperty " + (m.show(m.showString)(p.value0) + (" " + (m.show(C)(p.value1) + ")")));
    if (p instanceof t) return "(TypeMismatch " + (m.show(m.showString)(p.value0) + (" " + (m.show(m.showString)(p.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [p.constructor.name]);
  }),
      B = function B(p) {
    if (p instanceof q) return p.value0;
    if (p instanceof n) return "Error at array index " + (m.show(m.showInt)(p.value0) + (": " + B(p.value1)));
    if (p instanceof r) return "Error at property " + (m.show(m.showString)(p.value0) + (": " + B(p.value1)));
    if (p instanceof t) return "Type mismatch: expected " + (p.value0 + (", found " + p.value1));
    throw Error("Failed pattern match at Foreign (line 72, column 1 - line 72, column 45): " + [p.constructor.name]);
  },
      v = function () {
    var p = g.throwError(b.monadThrowExceptT(c.monadIdentity));
    return function (D) {
      return p(k.singleton(D));
    };
  }();

  a = function a(p) {
    return function (D) {
      if (e.tagOf(D) === p) return h.pure(b.applicativeExceptT(c.monadIdentity))(e.unsafeFromForeign(D));
      if (f.otherwise) return v(new t(p, e.tagOf(D)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [p.constructor.name, D.constructor.name]);
    };
  };

  var x = a("String");
  d.ForeignError = q;
  d.renderForeignError = B;
  d.unsafeReadTagged = a;
  d.readString = x;
  d.fail = v;
  d.showForeignError = C;
  d.unsafeToForeign = e.unsafeToForeign;
})(PS);

(function (a) {
  a.Affjax = a.Affjax || {};

  var d = a.Affjax,
      e = a.Affjax,
      h = a["Affjax.RequestBody"],
      g = a["Affjax.RequestHeader"],
      b = a["Affjax.ResponseFormat"],
      f = a["Affjax.ResponseHeader"],
      c = a["Control.Applicative"],
      k = a["Control.Bind"],
      m = a["Control.Monad.Error.Class"],
      q = a["Control.Monad.Except"],
      t = a["Control.Monad.Except.Trans"],
      n = a["Data.Argonaut.Core"],
      r = a["Data.Argonaut.Parser"],
      C = a["Data.Array"],
      B = a["Data.Either"],
      v = a["Data.Eq"],
      x = a["Data.Foldable"],
      p = a["Data.FormURLEncoded"],
      D = a["Data.Function"],
      z = a["Data.Functor"],
      F = a["Data.HTTP.Method"],
      L = a["Data.HeytingAlgebra"],
      E = a["Data.Identity"],
      G = a["Data.List.NonEmpty"],
      J = a["Data.Maybe"],
      P = a["Data.Nullable"],
      y = a["Data.Unit"],
      K = a["Effect.Aff"],
      I = a["Effect.Aff.Compat"],
      A = a["Effect.Exception"],
      O = a.Foreign,
      N = function () {
    function ha(ia) {
      this.value0 = ia;
    }

    ha.create = function (ia) {
      return new ha(ia);
    };

    return ha;
  }(),
      Q = function () {
    function ha(ia, ra) {
      this.value0 = ia;
      this.value1 = ra;
    }

    ha.create = function (ia) {
      return function (ra) {
        return new ha(ia, ra);
      };
    };

    return ha;
  }(),
      H = function () {
    function ha(ia) {
      this.value0 = ia;
    }

    ha.create = function (ia) {
      return new ha(ia);
    };

    return ha;
  }(),
      X = function X(ha) {
    var ia = function ia(ua) {
      return "" === ua ? c.pure(t.applicativeExceptT(E.monadIdentity))(n.jsonEmptyObject) : B.either(function (va) {
        return O.fail(O.ForeignError.create(va));
      })(c.pure(t.applicativeExceptT(E.monadIdentity)))(r.jsonParser(ua));
    },
        ra = function () {
      if (ha.responseFormat instanceof b.ArrayBuffer) return O.unsafeReadTagged("ArrayBuffer");
      if (ha.responseFormat instanceof b.Blob) return O.unsafeReadTagged("Blob");
      if (ha.responseFormat instanceof b.Document) return O.unsafeReadTagged("Document");
      if (ha.responseFormat instanceof b.Json) return k.composeKleisliFlipped(t.bindExceptT(E.monadIdentity))(function (ua) {
        return ha.responseFormat.value0(ia(ua));
      })(O.unsafeReadTagged("String"));
      if (ha.responseFormat instanceof b.String) return O.unsafeReadTagged("String");
      if (ha.responseFormat instanceof b.Ignore) return D["const"](ha.responseFormat.value0(c.pure(t.applicativeExceptT(E.monadIdentity))(y.unit)));
      throw Error("Failed pattern match at Affjax (line 237, column 18 - line 243, column 57): " + [ha.responseFormat.constructor.name]);
    }(),
        S = function S(ua) {
      if (ua instanceof h.ArrayView) return B.Right.create(ua.value0(O.unsafeToForeign));
      if (ua instanceof h.Blob || ua instanceof h.Document || ua instanceof h.String || ua instanceof h.FormData) return B.Right.create(O.unsafeToForeign(ua.value0));
      if (ua instanceof h.FormURLEncoded) return B.note("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(z.map(J.functorMaybe)(O.unsafeToForeign)(p.encode(ua.value0)));
      if (ua instanceof h.Json) return B.Right.create(O.unsafeToForeign(n.stringify(ua.value0)));
      throw Error("Failed pattern match at Affjax (line 203, column 20 - line 218, column 69): " + [ua.constructor.name]);
    },
        ca = function ca(ua) {
      return function (va) {
        return ua instanceof J.Just && !x.any(x.foldableArray)(L.heytingAlgebraBoolean)(D.on(v.eq(v.eqString))(g.name)(ua.value0))(va) ? C.snoc(va)(ua.value0) : va;
      };
    },
        fa = function fa(ua) {
      return ca(z.map(J.functorMaybe)(g.ContentType.create)(k.bindFlipped(J.bindMaybe)(h.toMediaType)(ua)))(ca(z.map(J.functorMaybe)(g.Accept.create)(b.toMediaType(ha.responseFormat)))(ha.headers));
    },
        wa = function wa(ua) {
      return {
        method: F.print(ha.method),
        url: ha.url,
        headers: z.map(z.functorArray)(function (va) {
          return {
            field: g.name(va),
            value: g.value(va)
          };
        })(fa(ha.content)),
        content: ua,
        responseType: b.toResponseType(ha.responseFormat),
        username: P.toNullable(ha.username),
        password: P.toNullable(ha.password),
        withCredentials: ha.withCredentials
      };
    },
        ya = function ya(ua) {
      return z.mapFlipped(K.functorAff)(m["try"](K.monadErrorAff)(I.fromEffectFnAff(e._ajax(f.ResponseHeader.create, wa(ua)))))(function (va) {
        if (va instanceof B.Right) {
          var Ja = q.runExcept(ra(va.value0.body));
          if (Ja instanceof B.Left) return new B.Left(new Q(G.head(Ja.value0), va.value0));
          if (Ja instanceof B.Right) return new B.Right({
            body: Ja.value0,
            headers: va.value0.headers,
            status: va.value0.status,
            statusText: va.value0.statusText
          });
          throw Error("Failed pattern match at Affjax (line 184, column 9 - line 186, column 52): " + [Ja.constructor.name]);
        }

        if (va instanceof B.Left) return new B.Left(new H(va.value0));
        throw Error("Failed pattern match at Affjax (line 182, column 86 - line 188, column 28): " + [va.constructor.name]);
      });
    };

    if (ha.content instanceof J.Nothing) return ya(P.toNullable(J.Nothing.value));

    if (ha.content instanceof J.Just) {
      S = S(ha.content.value0);
      if (S instanceof B.Right) return ya(P.toNullable(new J.Just(S.value0)));
      if (S instanceof B.Left) return c.pure(K.applicativeAff)(new B.Left(new N(S.value0)));
      throw Error("Failed pattern match at Affjax (line 173, column 7 - line 177, column 48): " + [S.constructor.name]);
    }

    throw Error("Failed pattern match at Affjax (line 169, column 3 - line 177, column 48): " + [ha.content.constructor.name]);
  },
      u = new B.Left(F.GET.value),
      ka = [],
      ma = J.Nothing.value,
      Da = J.Nothing.value,
      Ba = J.Nothing.value;

  d.printError = function (ha) {
    if (ha instanceof N) return "There was a problem with the request content: " + ha.value0;
    if (ha instanceof Q) return "There was a problem with the response body: " + O.renderForeignError(ha.value0);
    if (ha instanceof H) return "There was a problem making the request: " + A.message(ha.value0);
    throw Error("Failed pattern match at Affjax (line 91, column 14 - line 97, column 66): " + [ha.constructor.name]);
  };

  d.get = function (ha) {
    return function (ia) {
      return X({
        method: u,
        url: ia,
        headers: ka,
        content: ma,
        username: Da,
        password: Ba,
        withCredentials: !1,
        responseFormat: ha
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
      h = a["Data.Either"],
      g = function () {
    function k(m) {
      this.value0 = m;
    }

    k.create = function (m) {
      return new k(m);
    };

    return k;
  }(),
      b = function () {
    function k(m) {
      this.value0 = m;
    }

    k.create = function (m) {
      return new k(m);
    };

    return k;
  }();

  a = function a(k, m) {
    this.Monad0 = k;
    this.tailRecM = m;
  };

  var f = function f(k) {
    return function (m) {
      m = k(m);

      for (var q = !1, t; !q;) {
        if (t = m, t instanceof g) m = k(t.value0), t = void 0;else if (t instanceof b) q = !0, t = t.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [t.constructor.name]);
      }

      return t;
    };
  },
      c = new a(function () {
    return h.monadEither;
  }, function (k) {
    return function (m) {
      return f(function (q) {
        if (q instanceof h.Left) return new b(new h.Left(q.value0));
        if (q instanceof h.Right && q.value0 instanceof g) return new g(k(q.value0.value0));
        if (q instanceof h.Right && q.value0 instanceof b) return new b(new h.Right(q.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [q.constructor.name]);
      })(k(m));
    };
  });

  e = new e.Bifunctor(function (k) {
    return function (m) {
      return function (q) {
        if (q instanceof g) return new g(k(q.value0));
        if (q instanceof b) return new b(m(q.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [k.constructor.name, m.constructor.name, q.constructor.name]);
      };
    };
  });
  d.Loop = g;
  d.Done = b;
  d.MonadRec = a;

  d.tailRecM = function (k) {
    return k.tailRecM;
  };

  d.bifunctorStep = e;
  d.monadRecEither = c;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var d = a["Data.List"],
      e = a["Control.Alt"],
      h = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Control.Monad.Rec.Class"],
      f = a["Data.Bifunctor"],
      c = a["Data.Functor"],
      k = a["Data.List.Types"],
      m = a["Data.Unit"],
      q = function () {
    return function (t) {
      return function (n) {
        for (var r = t, C = !1, B; !C;) {
          B = r;
          var v = n;
          if (v instanceof k.Nil) C = !0;else {
            if (v instanceof k.Cons) r = new k.Cons(v.value0, B), n = v.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [B.constructor.name, v.constructor.name]);
            B = void 0;
          }
        }

        return B;
      };
    }(k.Nil.value);
  }();

  d.manyRec = function (t) {
    return function (n) {
      return function (r) {
        return b.tailRecM(t)(function (C) {
          return g.bind(t.Monad0().Bind1())(e.alt(n.Plus1().Alt0())(c.map(n.Plus1().Alt0().Functor0())(b.Loop.create)(r))(h.pure(n.Applicative0())(new b.Done(m.unit))))(function (B) {
            return h.pure(n.Applicative0())(f.bimap(b.bifunctorStep)(function (v) {
              return new k.Cons(v, C);
            })(function (v) {
              return q(C);
            })(B));
          });
        })(k.Nil.value);
      };
    };
  };

  d.reverse = q;
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var d = a["Data.CatQueue"],
      e = a["Data.List"],
      h = a["Data.List.Types"],
      g = a["Data.Maybe"],
      b = a["Data.Tuple"],
      f = function () {
    function c(k, m) {
      this.value0 = k;
      this.value1 = m;
    }

    c.create = function (k) {
      return function (m) {
        return new c(k, m);
      };
    };

    return c;
  }();

  a = new f(h.Nil.value, h.Nil.value);
  d.empty = a;

  d["null"] = function (c) {
    return c.value0 instanceof h.Nil && c.value1 instanceof h.Nil ? !0 : !1;
  };

  d.snoc = function (c) {
    return function (k) {
      return new f(c.value0, new h.Cons(k, c.value1));
    };
  };

  d.uncons = function (c) {
    for (var k = !1, m; !k;) {
      if (m = c, m.value0 instanceof h.Nil && m.value1 instanceof h.Nil) k = !0, m = g.Nothing.value;else if (m.value0 instanceof h.Nil) c = new f(e.reverse(m.value1), h.Nil.value), m = void 0;else if (m.value0 instanceof h.Cons) k = !0, m = new g.Just(new b.Tuple(m.value0.value0, new f(m.value0.value1, m.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [m.constructor.name]);
    }

    return m;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var d = a["Data.CatList"],
      e = a["Data.CatQueue"],
      h = a["Data.List.Types"],
      g = a["Data.Maybe"],
      b = a["Data.Semigroup"],
      f = a["Data.Tuple"],
      c = function () {
    function t() {}

    t.value = new t();
    return t;
  }(),
      k = function () {
    function t(n, r) {
      this.value0 = n;
      this.value1 = r;
    }

    t.create = function (n) {
      return function (r) {
        return new t(n, r);
      };
    };

    return t;
  }(),
      m = function m(t) {
    return function (n) {
      if (t instanceof c) return n;
      if (n instanceof c) return t;
      if (t instanceof k) return new k(t.value0, e.snoc(t.value1)(n));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [t.constructor.name, n.constructor.name]);
    };
  },
      q = function q(t) {
    return function (n) {
      return function (r) {
        var C = function C(B) {
          return function (v) {
            return function (x) {
              for (var p = B, D = v, z = !1, F; !z;) {
                F = p;
                var L = D,
                    E = x;
                if (E instanceof h.Nil) z = !0, F = L;else {
                  if (E instanceof h.Cons) p = F, D = F(L)(E.value0), x = E.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [F.constructor.name, L.constructor.name, E.constructor.name]);
                  F = void 0;
                }
              }

              return F;
            };
          };
        };

        return function (B) {
          return function (v) {
            function x(F, L) {
              F = e.uncons(F);
              if (F instanceof g.Nothing) return D = !0, C(function (E) {
                return function (G) {
                  return G(E);
                };
              })(n)(L);
              if (F instanceof g.Just) p = F.value0.value1, v = new h.Cons(t(F.value0.value0), L);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [F.constructor.name]);
            }

            for (var p = B, D = !1, z; !D;) {
              z = x(p, v);
            }

            return z;
          };
        }(r)(h.Nil.value);
      };
    };
  };

  a = c.value;
  b = new b.Semigroup(m);
  d.empty = a;

  d.snoc = function (t) {
    return function (n) {
      return m(t)(new k(n, e.empty));
    };
  };

  d.uncons = function (t) {
    if (t instanceof c) return g.Nothing.value;

    if (t instanceof k) {
      var n = g.Just,
          r = f.Tuple,
          C = t.value0;
      t = e["null"](t.value1) ? c.value : q(m)(c.value)(t.value1);
      return new n(new r(C, t));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [t.constructor.name]);
  };

  d.semigroupCatList = b;
})(PS);

(function (a) {
  a["Control.Monad.Free"] = a["Control.Monad.Free"] || {};

  var d = a["Control.Monad.Free"],
      e = a["Control.Applicative"],
      h = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Data.CatList"],
      c = a["Data.Either"],
      k = a["Data.Functor"],
      m = a["Data.Maybe"],
      q = a["Data.Semigroup"],
      t = a["Unsafe.Coerce"],
      n = function () {
    function F(L, E) {
      this.value0 = L;
      this.value1 = E;
    }

    F.create = function (L) {
      return function (E) {
        return new F(L, E);
      };
    };

    return F;
  }(),
      r = function () {
    function F(L) {
      this.value0 = L;
    }

    F.create = function (L) {
      return new F(L);
    };

    return F;
  }(),
      C = function () {
    function F(L, E) {
      this.value0 = L;
      this.value1 = E;
    }

    F.create = function (L) {
      return function (E) {
        return new F(L, E);
      };
    };

    return F;
  }(),
      B = function B(F) {
    function L(J) {
      var P = function P(K) {
        return function (I) {
          return new n(K.value0, q.append(f.semigroupCatList)(K.value1)(I));
        };
      };

      if (J.value0 instanceof r) {
        var y = f.uncons(J.value1);
        if (y instanceof m.Nothing) return E = !0, new r(J.value0.value0);

        if (y instanceof m.Just) {
          F = P((0, y.value0.value0)(J.value0.value0))(y.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [y.constructor.name]);
      }

      if (J.value0 instanceof C) return E = !0, new C(J.value0.value0, function (K) {
        return P(J.value0.value1(K))(J.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [J.value0.constructor.name]);
    }

    for (var E = !1, G; !E;) {
      G = L(F);
    }

    return G;
  },
      v = function v(F) {
    return function (L) {
      return function (E) {
        E = B(E);
        if (E instanceof r) return L(E.value0);
        if (E instanceof C) return F(E.value0)(E.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [E.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return z;
  }, function () {
    return p;
  });
  var x = new k.Functor(function (F) {
    return function (L) {
      return g.bindFlipped(p)(function () {
        var E = e.pure(z);
        return function (G) {
          return E(F(G));
        };
      }())(L);
    };
  }),
      p = new g.Bind(function () {
    return D;
  }, function (F) {
    return function (L) {
      return new n(F.value0, f.snoc(F.value1)(L));
    };
  }),
      D = new h.Apply(function () {
    return x;
  }, b.ap(a)),
      z = new e.Applicative(function () {
    return D;
  }, function (F) {
    return new n(r.create(F), f.empty);
  });

  d.wrap = function (F) {
    return new n(new C(F, t.unsafeCoerce), f.empty);
  };

  d.liftF = function (F) {
    return new n(new C(F, function () {
      var L = e.pure(z);
      return function (E) {
        return L(E);
      };
    }()), f.empty);
  };

  d.resume = function (F) {
    return v(function (L) {
      return function (E) {
        return new c.Left(k.map(F)(E)(L));
      };
    })(c.Right.create);
  };

  d["resume'"] = v;
  d.freeFunctor = x;
  d.freeBind = p;
  d.freeApplicative = z;
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
      h = a["Data.Boolean"],
      g = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var b = a.unsafeCoerce,
      f = a.unsafeCoerce,
      c = a.unsafeCoerce;

  a = function (m) {
    var q = g.fromJust();
    return function (t) {
      return q(m(c(t)));
    };
  }(e.uncons);

  var k = function (m) {
    return function (q) {
      return m(c(q));
    };
  }(e.length);

  d.fromArray = function (m) {
    if (0 < e.length(m)) return new g.Just(f(m));
    if (h.otherwise) return g.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [m.constructor.name]);
  };

  d.toArray = c;

  d.singleton = function (m) {
    return f(e.singleton(m));
  };

  d.length = k;

  d["cons'"] = function (m) {
    return function (q) {
      return f(e.cons(m)(q));
    };
  };

  d.snoc = function (m) {
    return function (q) {
      return f(e.snoc(c(m))(q));
    };
  };

  d.uncons = a;

  d.updateAt = function (m) {
    return function (q) {
      var t = e.updateAt(m)(q);
      return function (n) {
        return b(t(c(n)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (d) {
    return function (e) {
      for (var h = e[0], g = e.length, b = 1; b < g; b++) {
        h = d(h)(e[b]);
      }

      return h;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (d) {
    return function (e) {
      for (var h = e.length, g = Array(h), b = 0; b < h; b++) {
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
  a = new function (h, g) {
    this.Functor0 = h;
    this.mapWithIndex = g;
  }(function () {
    return e.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  d.mapWithIndex = function (h) {
    return h.mapWithIndex;
  };

  d.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var d = a["Data.FoldableWithIndex"],
      e = a["Data.Foldable"],
      h = a["Data.FunctorWithIndex"],
      g = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      f = function () {
    function m(q, t) {
      this.value0 = q;
      this.value1 = t;
    }

    m.create = function (q) {
      return function (t) {
        return new m(q, t);
      };
    };

    return m;
  }(),
      c = function c(m) {
    return function (q) {
      return function (t) {
        return (0, m.foldrWithIndex)(function (n) {
          return function (r) {
            return function (C) {
              return b.append(q.Semigroup0())(t(n)(r))(C);
            };
          };
        })(g.mempty(q));
      };
    };
  },
      k = new function (m, q, t, n) {
    this.Foldable0 = m;
    this.foldMapWithIndex = q;
    this.foldlWithIndex = t;
    this.foldrWithIndex = n;
  }(function () {
    return e.foldableArray;
  }, function (m) {
    return c(k)(m);
  }, function (m) {
    return function (q) {
      var t = e.foldl(e.foldableArray)(function (r) {
        return function (C) {
          return m(C.value0)(r)(C.value1);
        };
      })(q),
          n = h.mapWithIndex(h.functorWithIndexArray)(f.create);
      return function (r) {
        return t(n(r));
      };
    };
  }, function (m) {
    return function (q) {
      var t = e.foldr(e.foldableArray)(function (r) {
        return function (C) {
          return m(r.value0)(r.value1)(C);
        };
      })(q),
          n = h.mapWithIndex(h.functorWithIndexArray)(f.create);
      return function (r) {
        return t(n(r));
      };
    };
  });

  d.foldlWithIndex = function (m) {
    return m.foldlWithIndex;
  };

  d.foldableWithIndexArray = k;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var d = a["Data.Semigroup.Foldable"],
      e = a["Data.Functor"];

  d.Foldable1 = function (h, g, b) {
    this.Foldable0 = h;
    this.fold1 = g;
    this.foldMap1 = b;
  };

  d.foldMap1 = function (h) {
    return h.foldMap1;
  };

  d.foldMap1Default = function (h) {
    return function (g) {
      return function (b) {
        return function (f) {
          var c = (0, h.fold1)(b),
              k = e.map(g)(f);
          return function (m) {
            return c(k(m));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a.unfoldr1ArrayImpl = function (d) {
    return function (e) {
      return function (h) {
        return function (g) {
          return function (b) {
            return function (f) {
              for (var c = [];;) {
                f = b(f);
                c.push(h(f));
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
      h = a["Data.Maybe"],
      g = a["Data.Tuple"];
  a = new function (f) {
    this.unfoldr1 = f;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(h.isNothing)(h.fromJust())(g.fst)(g.snd));

  var b = function b(f) {
    return function (c) {
      return function (k) {
        return (0, f.unfoldr1)(function (m) {
          if (0 >= m) return new g.Tuple(k, h.Nothing.value);
          if (e.otherwise) return new g.Tuple(k, new h.Just(m - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [m.constructor.name]);
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
      h = a["Data.Semigroup"],
      g = a["Data.Semigroup.Foldable"],
      b = a["Data.Unfoldable1"].unfoldable1Array,
      f = a["Data.Traversable"].traversableArray,
      c = h.semigroupArray,
      k = a["Data.Functor"].functorArray,
      m = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      q = a["Data.Foldable"].foldableArray,
      t = new g.Foldable1(function () {
    return q;
  }, function (n) {
    return e.fold1Impl(h.append(n));
  }, function (n) {
    return g.foldMap1Default(t)(k)(n);
  });
  d.semigroupNonEmptyArray = c;
  d.functorNonEmptyArray = k;
  d.foldableNonEmptyArray = q;
  d.foldableWithIndexNonEmptyArray = m;
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

    function h(m, q) {
      this.queue = m;
      this.value = q;
      this.prev = this.next = null;
    }

    function g(m) {
      this.draining = !1;
      this.error = null;
      this.value = m;
      this.takes = new e();
      this.reads = new e();
      this.puts = new e();
    }

    function b(m) {
      try {
        m();
      } catch (q) {
        setTimeout(function () {
          throw q;
        }, 0);
      }
    }

    function f(m) {
      switch (m.size) {
        case 0:
          return null;

        case 1:
          var q = m.head;
          m.head = null;
          break;

        case 2:
          q = m.last;
          m.head.next = null;
          m.last = null;
          break;

        default:
          q = m.last, m.last = q.prev, m.last.next = null;
      }

      q.prev = null;
      q.queue = null;
      m.size--;
      return q.value;
    }

    function c(m) {
      switch (m.size) {
        case 0:
          return null;

        case 1:
          var q = m.head;
          m.head = null;
          break;

        case 2:
          q = m.head;
          m.last.prev = null;
          m.head = m.last;
          m.last = null;
          break;

        default:
          q = m.head, m.head = q.next, m.head.prev = null;
      }

      q.next = null;
      q.queue = null;
      m.size--;
      return q.value;
    }

    var k = {};
    g.EMPTY = k;

    g.putLast = function (m, q) {
      q = new h(m, q);

      switch (m.size) {
        case 0:
          m.head = q;
          break;

        case 1:
          q.prev = m.head;
          m.head.next = q;
          m.last = q;
          break;

        default:
          q.prev = m.last, m.last.next = q, m.last = q;
      }

      m.size++;
      return q;
    };

    g.takeLast = f;
    g.takeHead = c;

    g.deleteCell = function (m) {
      null !== m.queue && (m.queue.last === m ? f(m.queue) : m.queue.head === m ? c(m.queue) : (m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), m.queue.size--, m.queue = null, m.value = null, m.next = null, m.prev = null));
    };

    g.drainVar = function (m, q) {
      if (!q.draining) {
        var t = q.puts,
            n = q.takes,
            r = q.reads,
            C,
            B;

        for (q.draining = !0;;) {
          var v = C = null;
          var x = q.value;
          var p = r.size;

          if (null !== q.error) {
            for (x = m.left(q.error); C = c(t);) {
              b(C.cb(x));
            }

            for (; v = c(r);) {
              b(v(x));
            }

            for (; B = c(n);) {
              b(B(x));
            }

            break;
          }

          x === k && (C = c(t)) && (q.value = x = C.value);

          if (x !== k) {
            for (B = c(n); p-- && (v = c(r));) {
              b(v(m.right(x)));
            }

            null !== B && (q.value = k, b(B(m.right(x))));
          }

          null !== C && b(C.cb(m.right(void 0)));
          if (q.value === k && 0 === t.size || q.value !== k && 0 === n.size) break;
        }

        q.draining = !1;
      }
    };

    return g;
  }();

  a.empty = function () {
    return new d(d.EMPTY);
  };

  a._takeVar = function (e, h, g) {
    return function () {
      var b = d.putLast(h.takes, g);
      d.drainVar(e, h);
      return function () {
        d.deleteCell(b);
      };
    };
  };

  a._tryPutVar = function (e, h, g) {
    return function () {
      return g.value === d.EMPTY && null === g.error ? (g.value = h, d.drainVar(e, g), !0) : !1;
    };
  };

  a._tryTakeVar = function (e, h) {
    return function () {
      var g = h.value;
      if (g === d.EMPTY) return e.nothing;
      h.value = d.EMPTY;
      d.drainVar(e, h);
      return e.just(g);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var d = a["Effect.AVar"],
      e = a["Effect.AVar"],
      h = a["Data.Either"];
  a = a["Data.Maybe"];

  var g = function () {
    function k(m) {
      this.value0 = m;
    }

    k.create = function (m) {
      return new k(m);
    };

    return k;
  }(),
      b = function () {
    function k(m) {
      this.value0 = m;
    }

    k.create = function (m) {
      return new k(m);
    };

    return k;
  }(),
      f = function () {
    function k() {}

    k.value = new k();
    return k;
  }(),
      c = {
    left: h.Left.create,
    right: h.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: g.create,
    filled: b.create,
    empty: f.value
  };

  d.take = function (k) {
    return function (m) {
      return e._takeVar(c, k, m);
    };
  };

  d.tryTake = function (k) {
    return e._tryTakeVar(c, k);
  };

  d.tryPut = function (k) {
    return function (m) {
      return e._tryPutVar(c, k, m);
    };
  };

  d.empty = e.empty;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var d = a["Effect.AVar"],
      e = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (h) {
    return e.makeAff(function (g) {
      return function () {
        var b = d.take(h)(g)();
        return e.effectCanceler(b);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var d = a["Effect.Aff.Class"],
      e = a["Control.Category"],
      h = a["Effect.Aff"];

  a = function a(g, b) {
    this.MonadEffect0 = g;
    this.liftAff = b;
  };

  e = new a(function () {
    return h.monadEffectAff;
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
      h = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      f = a["Control.Category"],
      c = a["Control.Monad"],
      k = a["Control.Monad.Free"],
      m = a["Control.MultiAlternative"],
      q = a["Control.Parallel.Class"],
      t = a["Control.Plus"],
      n = a["Data.Array.NonEmpty"],
      r = a["Data.Array.NonEmpty.Internal"],
      C = a["Data.Either"],
      B = a["Data.FoldableWithIndex"],
      v = a["Data.Functor"],
      x = a["Data.Maybe"],
      p = a["Data.Monoid"],
      D = a["Data.Semigroup"],
      z = a["Data.Semigroup.Foldable"],
      F = a["Data.Show"],
      L = a["Data.Tuple"],
      E = a.Effect,
      G = a["Effect.AVar"],
      J = a["Effect.Aff"],
      P = a["Effect.Aff.AVar"],
      y = a["Effect.Aff.Class"],
      K = a["Effect.Class"],
      I = a["Effect.Console"],
      A = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (fa) {
    return fa(f.identity(f.categoryFn));
  });

  var O = k.freeFunctor,
      N = k.freeBind,
      Q = k.freeApplicative,
      H = new c.Monad(function () {
    return Q;
  }, function () {
    return N;
  }),
      X = function X(fa) {
    return fa;
  },
      u = function u(fa) {
    return k["resume'"](function (wa) {
      return function (ya) {
        return new C.Right(v.map(fa)(ya)(wa));
      };
    })(C.Left.create);
  },
      ka = new v.Functor(function (fa) {
    return function (wa) {
      if (wa instanceof C.Right) wa = new C.Right({
        cont: v.map(J.functorAff)(fa)(wa.value0.cont),
        view: wa.value0.view
      });else if (wa instanceof C.Left) wa = new C.Left(v.map(E.functorEffect)(fa)(wa.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [wa.constructor.name]);
      return wa;
    };
  }),
      ma = function ma(fa) {
    return k.liftF(C.Left.create(fa));
  },
      Da = function Da(fa) {
    return new K.MonadEffect(function () {
      return H;
    }, ma);
  },
      Ba = function Ba(fa) {
    return k.liftF(new C.Right({
      view: fa,
      cont: J.never
    }));
  },
      ha = function ha(fa) {
    return new D.Semigroup(function (wa) {
      return function (ya) {
        return m.orr(ra(fa))([wa, ya]);
      };
    });
  },
      ia = function ia(fa) {
    return new t.Plus(function () {
      return S(fa);
    }, Ba(p.mempty(fa)));
  },
      ra = function ra(fa) {
    return new m.MultiAlternative(function () {
      return ia(fa);
    }, function (wa) {
      var ya = function ya(aa) {
        return function (U) {
          return function (M) {
            var Y = v.map(r.functorNonEmptyArray)(function (oa) {
              return k.wrap(C.Right.create(oa));
            })(U);
            return b.bind(J.bindAff)(q.sequential(J.parallelAff)(B.foldlWithIndex(r.foldableWithIndexNonEmptyArray)(function (oa) {
              return function (Ha) {
                return function (Ca) {
                  return e.alt(J.altParAff)(q.parallel(J.parallelAff)(v.map(J.functorAff)(L.Tuple.create(oa))(Ca)))(Ha);
                };
              };
            })(t.empty(J.plusParAff))(M)))(function (oa) {
              return g.pure(J.applicativeAff)(T(aa)(x.fromMaybe(Y)(n.updateAt(oa.value0)(oa.value1)(Y))));
            });
          };
        };
      },
          ua = function ua(aa) {
        return function (U) {
          return k.wrap(new C.Right({
            view: z.foldMap1(r.foldable1NonEmptyArray)(aa.Semigroup0())(function (M) {
              return M.view;
            })(U),
            cont: ya(aa)(U)(v.map(r.functorNonEmptyArray)(function (M) {
              return M.cont;
            })(U))
          }));
        };
      },
          va = function va(aa) {
        return function (U) {
          return function (M) {
            var Y = n.uncons(M),
                oa = u(ka)(Y.head);
            if (oa instanceof C.Left) return g.pure(k.freeApplicative)(oa.value0);

            if (oa instanceof C.Right) {
              if (oa.value0 instanceof C.Left) return k.wrap(new C.Left(function () {
                var Ha = oa.value0.value0();
                return va(aa)(U)(n["cons'"](Ha)(Y.tail));
              }));
              if (oa.value0 instanceof C.Right) return Ja(aa)(n.snoc(U)(oa.value0.value0))(Y.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [oa.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [oa.constructor.name]);
          };
        };
      },
          Ja = function Ja(aa) {
        return function (U) {
          return function (M) {
            M = n.fromArray(M);
            if (M instanceof x.Nothing) return ua(aa)(U);
            if (M instanceof x.Just) return va(aa)(U)(M.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [M.constructor.name]);
          };
        };
      },
          T = function T(aa) {
        return function (U) {
          var M = n.uncons(U),
              Y = u(ka)(M.head);
          if (Y instanceof C.Left) return g.pure(k.freeApplicative)(Y.value0);

          if (Y instanceof C.Right) {
            if (Y.value0 instanceof C.Left) return k.wrap(new C.Left(function () {
              var oa = Y.value0.value0();
              return T(aa)(n["cons'"](oa)(M.tail));
            }));
            if (Y.value0 instanceof C.Right) return Ja(aa)(n.singleton(Y.value0.value0))(M.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [Y.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [Y.constructor.name]);
        };
      };

      wa = n.fromArray(wa);
      if (wa instanceof x.Just) return T(fa)(v.map(r.functorNonEmptyArray)(X)(wa.value0));
      if (wa instanceof x.Nothing) return t.empty(ia(fa));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [wa.constructor.name]);
    });
  },
      S = function S(fa) {
    return new e.Alt(function () {
      return O;
    }, D.append(ha(fa)));
  },
      ca = function ca(fa) {
    return function (wa) {
      var ya = function ya(ua) {
        return function (va) {
          if (va instanceof C.Left) return I.log("Aff failed - " + F.show(A.showError)(va.value0));
          if (va instanceof C.Right) return v["void"](E.functorEffect)(G.tryPut(va.value0)(ua));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [ua.constructor.name, va.constructor.name]);
        };
      };

      return k.wrap(new C.Left(function () {
        var ua = G.empty();
        J.runAff_(ya(ua))(wa)();
        var va = G.tryTake(ua)();
        if (va instanceof x.Just) return g.pure(k.freeApplicative)(va.value0);
        if (va instanceof x.Nothing) return k.liftF(new C.Right({
          view: fa,
          cont: P.take(ua)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [va.constructor.name]);
      }));
    };
  };

  d.WidgetStep = function (fa) {
    return fa;
  };

  d.Widget = function (fa) {
    return fa;
  };

  d.unWidget = X;
  d.resume = u;
  d.display = Ba;
  d.functorWidgetStep = ka;
  d.widgetFunctor = O;
  d.widgetBind = N;
  d.widgetApplicative = Q;
  d.widgetShiftMap = a;
  d.widgetMultiAlternative = ra;

  d.widgetMonoid = function (fa) {
    return new p.Monoid(function () {
      return ha(fa);
    }, t.empty(ia(fa)));
  };

  d.widgetAlt = S;
  d.widgetPlus = ia;

  d.widgetAlternative = function (fa) {
    return new h.Alternative(function () {
      return Q;
    }, function () {
      return ia(fa);
    });
  };

  d.widgetMonadEff = Da;

  d.widgetMonadAff = function (fa) {
    return new y.MonadAff(function () {
      return Da(fa);
    }, ca(p.mempty(fa)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var d = a["Concur.Core"],
      e = a["Concur.Core.Types"],
      h = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Monad.Free"],
      f = a["Control.Parallel.Class"],
      c = a["Data.Either"],
      k = a["Data.Functor"],
      m = a.Effect,
      q = a["Effect.AVar"],
      t = a["Effect.Aff"],
      n = a["Effect.Aff.AVar"],
      r = a["Effect.Aff.Class"],
      C = function C(B) {
    return function (v) {
      var x = e.resume(e.functorWidgetStep)(v);
      if (x instanceof c.Left) return g.pure(b.freeApplicative)(x.value0);

      if (x instanceof c.Right) {
        if (x.value0 instanceof c.Left) return b.wrap(e.WidgetStep(new c.Left(function () {
          var p = x.value0.value0();
          return C(B)(p);
        })));
        if (x.value0 instanceof c.Right) return b.wrap(e.WidgetStep(new c.Left(function () {
          var p = q.empty(),
              D = f.sequential(t.parallelAff)(h.alt(t.altParAff)(f.parallel(t.parallelAff)(r.liftAff(r.monadAffAff)(n.take(p))))(f.parallel(t.parallelAff)(k.map(t.functorAff)(C(B))(x.value0.value0.cont))));
          return b.wrap(e.WidgetStep(new c.Right({
            view: B(function (z) {
              return k["void"](m.functorEffect)(q.tryPut(g.pure(b.freeApplicative)(z))(p));
            })(x.value0.value0.view),
            cont: D
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [x.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [x.constructor.name]);
    };
  };

  d.mkLeafWidget = function (B) {
    return e.Widget(b.wrap(e.WidgetStep(new c.Left(function () {
      var v = q.empty();
      return b.wrap(e.WidgetStep(new c.Right({
        view: B(function (x) {
          return k["void"](m.functorEffect)(q.tryPut(g.pure(b.freeApplicative)(x))(v));
        }),
        cont: r.liftAff(r.monadAffAff)(n.take(v))
      })));
    }))));
  };

  d.mkNodeWidget = function (B) {
    return function (v) {
      return C(B)(v);
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
      h = function () {
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
      if (b instanceof h) return new h(function (f) {
        return b.value0(function (c) {
          return f(g(c));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [g.constructor.name, b.constructor.name]);
    };
  });
  d.PrimProp = e;
  d.Handler = h;

  d.mkProp = function (g) {
    return function (b) {
      if (b instanceof e) return b.value0;
      if (b instanceof h) return b.value0(g);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [g.constructor.name, b.constructor.name]);
    };
  };

  d.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var d = a["Concur.Core.DOM"],
      e = a["Concur.Core"],
      h = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Control.MultiAlternative"],
      f = a["Control.ShiftMap"],
      c = a["Data.Functor"],
      k = function k(m) {
    return function (q) {
      return function (t) {
        return function (n) {
          return f.shiftMap(m)(function (r) {
            return function (C) {
              return e.mkNodeWidget(function (B) {
                return function (v) {
                  return t(c.map(q)(function () {
                    var x = g.mkProp(B),
                        p = c.map(g.functorProps)(r);
                    return function (D) {
                      return x(p(D));
                    };
                  }())(n))(v);
                };
              })(C);
            };
          });
        };
      };
    };
  };

  d.el = k;

  d.elLeaf = function (m) {
    return function (q) {
      return function (t) {
        return function (n) {
          return h.liftWidget(m)(e.mkLeafWidget(function (r) {
            return t(c.map(q)(g.mkProp(r))(n));
          }));
        };
      };
    };
  };

  d["el'"] = function (m) {
    return function (q) {
      return function (t) {
        return function (n) {
          return function (r) {
            var C = k(m)(t)(n)(r),
                B = b.orr(q);
            return function (v) {
              return C(B(v));
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
      h = a["Control.Applicative"],
      g = a["Control.Monad.Free"],
      b = a["Data.Either"],
      f = a["Data.Functor"],
      c = a["Data.Monoid"],
      k = a["Data.Tuple"],
      m = a.Effect,
      q = a["Effect.Aff"],
      t = function t(r) {
    return function (C) {
      var B = g.resume(e.functorWidgetStep)(e.unWidget(C));
      if (B instanceof b.Right) return h.pure(m.applicativeEffect)(new k.Tuple(C, c.mempty(r)));

      if (B instanceof b.Left) {
        if (B.value0 instanceof b.Left) return function () {
          var v = B.value0.value0();
          return t(r)(v)();
        };
        if (B.value0 instanceof b.Right) return h.pure(m.applicativeEffect)(new k.Tuple(g.wrap(new b.Right(B.value0.value0)), B.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [B.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [B.constructor.name]);
    };
  },
      n = function n(r) {
    return function (C) {
      return function (B) {
        var v = g.resume(e.functorWidgetStep)(B);
        if (v instanceof b.Right) return h.pure(m.applicativeEffect)(c.mempty(r));

        if (v instanceof b.Left) {
          if (v.value0 instanceof b.Left) return function () {
            var x = v.value0.value0();
            return n(r)(C)(x)();
          };
          if (v.value0 instanceof b.Right) return function () {
            q.runAff_(function () {
              var x = f.map(b.functorEither)(e.Widget);
              return function (p) {
                return C(x(p));
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
  a = new a["Data.Functor"].Functor(function (h) {
    return function (g) {
      return e.defer(function (b) {
        return h(e.force(g));
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
      h = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      f = a["Control.Bind"],
      c = a["Control.Comonad"],
      k = a["Control.Extend"],
      m = a["Control.Monad"],
      q = a["Control.Plus"],
      t = a["Control.ShiftMap"],
      n = a["Data.Functor"],
      r = a["Data.Lazy"],
      C = a["Data.Tuple"],
      B = function B(G) {
    return C.snd(r.force(G));
  },
      v = function v(G) {
    return function (J) {
      return r.defer(function (P) {
        return new C.Tuple(G, J);
      });
    };
  },
      x = function x(G) {
    return C.fst(r.force(G));
  },
      p = function p(G) {
    return new n.Functor(function (J) {
      var P = function P(y) {
        return n.map(r.functorLazy)(function (K) {
          return new C.Tuple(J(K.value0), n.map(G)(P)(K.value1));
        })(y);
      };

      return P;
    });
  },
      D = function D(G) {
    return new k.Extend(function () {
      return p(G);
    }, function (J) {
      var P = function P(y) {
        return n.map(r.functorLazy)(function (K) {
          return new C.Tuple(J(y), n.map(G)(P)(K.value1));
        })(y);
      };

      return P;
    });
  },
      z = function z(G) {
    return new m.Monad(function () {
      return E(G);
    }, function () {
      return F(G);
    });
  },
      F = function F(G) {
    return new f.Bind(function () {
      return L(G);
    }, function (J) {
      return function (P) {
        var y = function y(I) {
          return function (A) {
            var O = n.map(G.Plus1().Alt0().Functor0())(y(I))(B(A)),
                N = n.map(G.Plus1().Alt0().Functor0())(K)(B(I));
            return v(x(A))(h.alt(G.Plus1().Alt0())(N)(O));
          };
        },
            K = function K(I) {
          return y(I)(P(x(I)));
        };

        return K(J);
      };
    });
  },
      L = function L(G) {
    return new b.Apply(function () {
      return p(G.Plus1().Alt0().Functor0());
    }, m.ap(z(G)));
  },
      E = function E(G) {
    return new g.Applicative(function () {
      return L(G);
    }, function (J) {
      return v(J)(q.empty(G.Plus1()));
    });
  };

  d.mkCofree = v;
  d.tail = B;

  d.comonadCofree = function (G) {
    return new c.Comonad(function () {
      return D(G);
    }, x);
  };

  d.applicativeCofree = E;
  d.bindCofree = F;

  d.shiftMapCofree = function (G) {
    return new t.ShiftMap(function (J) {
      return function (P) {
        return r.defer(function (y) {
          y = r.force(P);
          return new C.Tuple(y.value0, J(g.pure(E(e.widgetAlternative(G))))(y.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var d = a["Concur.Core.FRP"],
      e = a["Concur.Core.Types"],
      h = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      f = a["Control.Cofree"],
      c = a["Control.Comonad"],
      k = a["Data.Functor"],
      m = a["Data.Maybe"],
      q = a["Data.Unit"],
      t = a["Effect.Aff"],
      n = a["Effect.Aff.Class"],
      r = f.tail,
      C = f.mkCofree,
      B = function B(p) {
    return function (D) {
      return C(p)(k.map(e.widgetFunctor)(function (z) {
        return B(z)(D);
      })(D(p)));
    };
  },
      v = function v(p) {
    return function (D) {
      return function (z) {
        var F = z(D);
        return C(c.extract(f.comonadCofree(e.widgetFunctor))(F))(b.bind(e.widgetBind)(r(F))(function (L) {
          return g.pure(e.widgetApplicative)(v(p)(c.extract(f.comonadCofree(e.widgetFunctor))(L))(z));
        }));
      };
    };
  },
      x = function x(p) {
    return b.bind(e.widgetBind)(r(p))(x);
  };

  d.step = C;

  d.display = function (p) {
    return C(q.unit)(p);
  };

  d.loopW = B;
  d.loopS = v;
  d.dyn = x;

  d.debounce = function (p) {
    return function (D) {
      return function (z) {
        return function (F) {
          var L = function L(G) {
            return function (J) {
              return b.bind(e.widgetBind)(h.alt(e.widgetAlt(p))(k.map(e.widgetFunctor)(m.Just.create)(J(G)))(k.voidRight(e.widgetFunctor)(m.Nothing.value)(n.liftAff(e.widgetMonadAff(p))(t.delay(D)))))(function (P) {
                if (P instanceof m.Nothing) return g.pure(e.widgetApplicative)(E(G)(J));
                if (P instanceof m.Just) return L(P.value0)(J);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [P.constructor.name]);
              });
            };
          },
              E = function E(G) {
            return function (J) {
              return C(G)(b.bind(e.widgetBind)(J(G))(function (P) {
                return L(P)(J);
              }));
            };
          };

          return E(z)(F);
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
      h = function (g) {
    function b(f, c, k) {
      switch (c) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          f[c] = k;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          f[c] = function (m, q) {
            return k(m)(q)();
          };

          break;

        case "componentDidUpdate":
          f[c] = function (m, q, t) {
            return k(m)(q)(t)();
          };

          break;

        case "unsafeComponentWillMount":
          f.UNSAFE_componentWillMount = k;
          break;

        case "unsafeComponentWillReceiveProps":
          f.UNSAFE_componentWillReceiveProps = function (m) {
            return k(m)();
          };

          break;

        case "unsafeComponentWillUpdate":
          f.UNSAFE_componentWillUpdate = function (m, q) {
            return k(m)(q)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + c);
      }
    }

    return function (f) {
      return function (c) {
        var k = function k(m) {
          g.call(this, m);
          m = c(this)();

          for (var q in m) {
            b(this, q, m[q]);
          }
        };

        k.displayName = f;
        k.prototype = Object.create(g.prototype);
        return k.prototype.constructor = k;
      };
    };
  }(e.Component);

  a.componentImpl = h;
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
  var h = new function (g) {
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

  d.isReactElementArray = h;
  d.getState = e.getState;
  d.createElementTagName = e.createElementTagName;
  d.createElementTagNameDynamic = e.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var d = a["Concur.React"],
      e = a["Concur.Core.Discharge"],
      h = a["Control.Apply"],
      g = a["Data.Either"],
      b = a["Data.Functor"],
      f = a["Data.Monoid"],
      c = a["Data.Show"],
      k = a["Data.Unit"],
      m = a.Effect,
      q = a["Effect.Console"],
      t = a["Effect.Exception"],
      n = a.React,
      r = function (C) {
    return function (B) {
      var v = function v(p) {
        return n.toElement(n.isReactElementArray)(p.view);
      },
          x = function x(p) {
        return function (D) {
          if (D instanceof g.Right) return function () {
            var z = e.discharge(f.monoidArray)(x(p))(D.value0)();
            return b["void"](m.functorEffect)(n.writeState(p)({
              view: z
            }))();
          };
          if (D instanceof g.Left) return function () {
            q.log("FAILED! " + c.show(t.showError)(D.value0))();
            return k.unit;
          };
          throw Error("Failed pattern match at Concur.React (line 32, column 5 - line 34, column 52): " + [p.constructor.name, D.constructor.name]);
        };
      };

      return n.component()("Concur")(function (p) {
        return function () {
          var D = e.dischargePartialEffect(f.monoidArray)(B)();
          return {
            state: {
              view: D.value1
            },
            render: b.map(m.functorEffect)(v)(n.getState(p)),
            componentDidMount: h.applySecond(m.applyEffect)(C)(x(p)(new g.Right(D.value0)))
          };
        };
      });
    };
  }(f.mempty(m.monoidEffect(f.monoidUnit)));

  d.renderComponent = function (C) {
    return n.createLeafElement()(r(C))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (d) {
    return function (e) {
      var h = {};
      h[d] = e;
      return h;
    };
  };

  a.unsafeUnfoldProps = function (d) {
    return function (e) {
      var h = {},
          g = {};
      g[d] = h;

      for (var b in e) {
        e.hasOwnProperty(b) && (h[b] = e[b]);
      }

      return g;
    };
  };

  a.unsafeFromPropsArray = function (d) {
    for (var e = {}, h = 0, g = d.length; h < g; h++) {
      var b = d[h],
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
      h = a["Effect.Uncurried"];
  a = e.unsafeMkProps("value");
  var g = e.unsafeMkProps("target"),
      b = e.unsafeUnfoldProps("style"),
      f = e.unsafeMkProps("href"),
      c = e.unsafeMkProps("disabled"),
      k = e.unsafeMkProps("defaultValue"),
      m = e.unsafeMkProps("className"),
      q = e.unsafeMkProps("checked"),
      t = e.unsafeMkProps("type"),
      n = e.unsafeMkProps("id");
  d.style = b;
  d.checked = q;
  d.className = m;
  d.defaultValue = k;
  d.disabled = c;
  d.href = f;
  d._id = n;
  d.target = g;
  d._type = t;
  d.value = a;

  d.onChange = function (r) {
    return e.unsafeMkProps("onChange")(h.mkEffectFn1(r));
  };

  d.onClick = function (r) {
    return e.unsafeMkProps("onClick")(h.mkEffectFn1(r));
  };

  d.unsafeFromPropsArray = e.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var d = a["React.DOM"],
      e = a.React,
      h = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var g = function g(v) {
    return function (x) {
      return function (p) {
        if (v) {
          if (v) var D = e.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [v.constructor.name]);
        } else D = e.createElementTagName;
        return D(x)(h.unsafeFromPropsArray(p));
      };
    };
  },
      b = g(!1)("nav"),
      f = g(!1)("option"),
      c = g(!1)("select"),
      k = g(!1)("span"),
      m = g(!1)("ul"),
      q = g(!1)("li"),
      t = g(!1)("div"),
      n = g(!1)("code"),
      r = g(!1)("cite"),
      C = g(!1)("button"),
      B = g(!1)("a");

  d.text = a;
  d.a = B;

  d.br = function (v) {
    return g(!1)("br")(v)([]);
  };

  d.button = C;
  d.cite = r;
  d.code = n;
  d.div = t;

  d.input = function (v) {
    return g(!1)("input")(v)([]);
  };

  d.li = q;
  d.nav = b;
  d.option = f;
  d.select = c;
  d.span = k;
  d.ul = m;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var d = a["Concur.React.DOM"],
      e = a["Concur.Core.DOM"],
      h = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      b = a["Data.Functor"],
      f = a["React.DOM"],
      c = function c(v) {
    return function (x) {
      return function (p) {
        return [v(x)(p)];
      };
    };
  },
      k = function k(v) {
    return function (x) {
      return e.elLeaf(v)(b.functorArray)(function (p) {
        return [x(p)];
      });
    };
  },
      m = function m(v) {
    return function (x) {
      return function (p) {
        return e["el'"](v)(x)(b.functorArray)(c(p));
      };
    };
  },
      q = function q(v) {
    return function (x) {
      return m(x)(v)(f.li);
    };
  },
      t = function t(v) {
    return function (x) {
      return m(x)(v)(f.span);
    };
  },
      n = function n(v) {
    return function (x) {
      return e.el(v)(b.functorArray)(c(x));
    };
  },
      r = function r(v) {
    return function (x) {
      return m(x)(v)(f.div);
    };
  },
      C = function C(v) {
    return function (x) {
      return m(x)(v)(f.code);
    };
  },
      B = function B(v) {
    return function (x) {
      return m(x)(v)(f.cite);
    };
  };

  d.text = function (v) {
    return function (x) {
      return h.liftWidget(v)(g.display([f.text(x)]));
    };
  };

  d.a = function (v) {
    return function (x) {
      return m(x)(v)(f.a);
    };
  };

  d["br'"] = function (v) {
    return k(v)(f.br)([]);
  };

  d.button_ = function (v) {
    return n(v)(f.button);
  };

  d.button = function (v) {
    return function (x) {
      return m(x)(v)(f.button);
    };
  };

  d["cite'"] = function (v) {
    return function (x) {
      return B(v)(x)([]);
    };
  };

  d["code'"] = function (v) {
    return function (x) {
      return C(v)(x)([]);
    };
  };

  d.div_ = function (v) {
    return n(v)(f.div);
  };

  d.div = r;

  d["div'"] = function (v) {
    return function (x) {
      return r(v)(x)([]);
    };
  };

  d.input = function (v) {
    return k(v)(f.input);
  };

  d.li_ = function (v) {
    return n(v)(f.li);
  };

  d.li = q;

  d["li'"] = function (v) {
    return function (x) {
      return q(v)(x)([]);
    };
  };

  d.nav = function (v) {
    return function (x) {
      return m(x)(v)(f.nav);
    };
  };

  d.option = function (v) {
    return function (x) {
      return m(x)(v)(f.option);
    };
  };

  d.select = function (v) {
    return function (x) {
      return m(x)(v)(f.select);
    };
  };

  d.span_ = function (v) {
    return n(v)(f.span);
  };

  d.span = t;

  d["span'"] = function (v) {
    return function (x) {
      return t(v)(x)([]);
    };
  };

  d.ul_ = function (v) {
    return n(v)(f.ul);
  };

  d.ul = function (v) {
    return function (x) {
      return m(x)(v)(f.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var d = a["Concur.React.Props"],
      e = a["Concur.Core.Props"],
      h = a["Data.Array"],
      g = a["Data.Foldable"],
      b = a["Data.Maybe"],
      f = a["Data.Monoid"],
      c = a["React.DOM.Props"];
  a = new e.Handler(c.onClick);

  var k = new e.Handler(c.onChange),
      m = function m(t) {
    return e.PrimProp.create(c.className(t));
  },
      q = function () {
    var t = g.intercalate(g.foldableArray)(f.monoidString)(" "),
        n = h.concatMap(b.maybe([])(function (r) {
      return [r];
    }));
    return function (r) {
      return m(t(n(r)));
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

  d.className = m;

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

  d.onChange = k;
  d.onClick = a;
})(PS);

(function (a) {
  var d = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (e, h) {
    return d.render(e, h);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var d = a.ReactDOM,
      e = a["Data.Functor"],
      h = a["Data.Nullable"],
      g = a.Effect;

  a.ReactDOM.render = function (b) {
    return function (f) {
      return e.map(g.functorEffect)(h.toMaybe)(function () {
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
      h = a["Data.Nullable"],
      g = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (b) {
    var f = e.map(g.functorEffect)(h.toMaybe),
        c = d._getElementById(b);

    return function (k) {
      return f(c(k));
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
      h = a["Data.Maybe"],
      g = a["Data.Unit"],
      b = a.Effect,
      f = a.ReactDOM,
      c = a["Web.DOM.NonElementParentNode"],
      k = a["Web.HTML"],
      m = a["Web.HTML.HTMLDocument"],
      q = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (t) {
    return function (n) {
      return function () {
        var r = k.window();
        r = q.document(r)();
        r = m.toNonElementParentNode(r);
        r = c.getElementById(t)(r)();
        if (r instanceof h.Nothing) return g.unit;
        if (r instanceof h.Just) return e["void"](b.functorEffect)(f.render(d.renderComponent(n))(r.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [r.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Maybe.Trans"] = a["Control.Monad.Maybe.Trans"] || {};

  var d = a["Control.Monad.Maybe.Trans"],
      e = a["Control.Applicative"],
      h = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Data.Functor"],
      c = a["Data.Maybe"],
      k = function k(r) {
    return new f.Functor(function (C) {
      return function (B) {
        return f.map(r)(f.map(c.functorMaybe)(C))(B);
      };
    });
  },
      m = function m(r) {
    return new b.Monad(function () {
      return n(r);
    }, function () {
      return q(r);
    });
  },
      q = function q(r) {
    return new g.Bind(function () {
      return t(r);
    }, function (C) {
      return function (B) {
        return g.bind(r.Bind1())(C)(function (v) {
          if (v instanceof c.Nothing) return e.pure(r.Applicative0())(c.Nothing.value);
          if (v instanceof c.Just) return B(v.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [v.constructor.name]);
        });
      };
    });
  },
      t = function t(r) {
    return new h.Apply(function () {
      return k(r.Bind1().Apply0().Functor0());
    }, b.ap(m(r)));
  },
      n = function n(r) {
    return new e.Applicative(function () {
      return t(r);
    }, function () {
      var C = e.pure(r.Applicative0());
      return function (B) {
        return C(c.Just.create(B));
      };
    }());
  };

  d.MaybeT = function (r) {
    return r;
  };

  d.runMaybeT = function (r) {
    return r;
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
      h = a["Data.Unit"];

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
        return new e.Tuple(h.unit, b);
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};

  var d = a["Control.Monad.State.Trans"],
      e = a["Control.Applicative"],
      h = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Control.Monad.State.Class"],
      c = a["Data.Functor"],
      k = a["Data.Tuple"],
      m = function m(C) {
    return new c.Functor(function (B) {
      return function (v) {
        return function (x) {
          return c.map(C)(function (p) {
            return new k.Tuple(B(p.value0), p.value1);
          })(v(x));
        };
      };
    });
  },
      q = function q(C) {
    return new b.Monad(function () {
      return r(C);
    }, function () {
      return t(C);
    });
  },
      t = function t(C) {
    return new g.Bind(function () {
      return n(C);
    }, function (B) {
      return function (v) {
        return function (x) {
          return g.bind(C.Bind1())(B(x))(function (p) {
            return v(p.value0)(p.value1);
          });
        };
      };
    });
  },
      n = function n(C) {
    return new h.Apply(function () {
      return m(C.Bind1().Apply0().Functor0());
    }, b.ap(q(C)));
  },
      r = function r(C) {
    return new e.Applicative(function () {
      return n(C);
    }, function (B) {
      return function (v) {
        return e.pure(C.Applicative0())(new k.Tuple(B, v));
      };
    });
  };

  d.bindStateT = t;

  d.monadStateStateT = function (C) {
    return new f.MonadState(function () {
      return q(C);
    }, function (B) {
      return function () {
        var v = e.pure(C.Applicative0());
        return function (x) {
          return v(B(x));
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
      h = a["Control.Apply"],
      g = a["Data.Bounded"],
      b = a["Data.Functor"],
      f = a["Data.Maybe"],
      c = a["Data.Newtype"],
      k = a["Data.Ord"],
      m = a["Data.Tuple"],
      q = a["Data.Unfoldable1"];

  a = function a(E) {
    return E;
  };

  var t = function t(E) {
    this.Bounded0 = E;
  },
      n = function n(E, G, J) {
    this.Ord0 = E;
    this.pred = G;
    this.succ = J;
  },
      r = function r(E, G, J, P, y) {
    this.Bounded0 = E;
    this.Enum1 = G;
    this.cardinality = J;
    this.fromEnum = P;
    this.toEnum = y;
  },
      C = new t(function () {
    return g.boundedBoolean;
  }),
      B = new c.Newtype(function (E) {
    return E;
  }, a),
      v = function v(E) {
    return new n(function () {
      return f.ordMaybe(E.Enum1().Ord0());
    }, function (G) {
      if (G instanceof f.Nothing) return f.Nothing.value;
      if (G instanceof f.Just) return new f.Just((0, E.Enum1().pred)(G.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [G.constructor.name]);
    }, function (G) {
      if (G instanceof f.Nothing) return new f.Just(new f.Just(g.bottom(E.Bounded0())));
      if (G instanceof f.Just) return b.map(f.functorMaybe)(f.Just.create)((0, E.Enum1().succ)(G.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [G.constructor.name]);
    });
  },
      x = new n(function () {
    return k.ordBoolean;
  }, function (E) {
    return E ? new f.Just(!1) : f.Nothing.value;
  }, function (E) {
    return E ? f.Nothing.value : new f.Just(!0);
  }),
      p = function p(E) {
    return function (G) {
      return function (J) {
        return E(G(J) + 1 | 0);
      };
    };
  },
      D = function D(E) {
    return function (G) {
      return function (J) {
        return E(G(J) - 1 | 0);
      };
    };
  },
      z = function z(E) {
    return E >= g.bottom(g.boundedInt) && E <= g.top(g.boundedInt) ? new f.Just(e.fromCharCode(E)) : f.Nothing.value;
  },
      F = new n(function () {
    return k.ordChar;
  }, D(z)(e.toCharCode), p(z)(e.toCharCode));

  z = new r(function () {
    return g.boundedChar;
  }, function () {
    return F;
  }, e.toCharCode(g.top(g.boundedChar)) - e.toCharCode(g.bottom(g.boundedChar)) | 0, e.toCharCode, z);
  var L = new r(function () {
    return g.boundedBoolean;
  }, function () {
    return x;
  }, 2, function (E) {
    if (!E) return 0;
    if (E) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [E.constructor.name]);
  }, function (E) {
    return 0 === E ? new f.Just(!1) : 1 === E ? new f.Just(!0) : f.Nothing.value;
  });
  d.Enum = n;
  d.BoundedEnum = r;

  d.toEnum = function (E) {
    return E.toEnum;
  };

  d.fromEnum = function (E) {
    return E.fromEnum;
  };

  d.toEnumWithDefaults = function (E) {
    return function (G) {
      return function (J) {
        return function (P) {
          var y = (0, E.toEnum)(P);
          if (y instanceof f.Just) return y.value0;
          if (y instanceof f.Nothing) return P < (0, E.fromEnum)(g.bottom(E.Bounded0())) ? G : J;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [y.constructor.name]);
        };
      };
    };
  };

  d.Cardinality = a;

  d.upFromIncluding = function (E) {
    return function (G) {
      return q.unfoldr1(G)(h.apply(h.applyFn)(m.Tuple.create)(E.succ));
    };
  };

  d.defaultSucc = p;
  d.defaultPred = D;
  d.SmallBounded = t;
  d.boundedEnumBoolean = L;
  d.boundedEnumChar = z;
  d.newtypeCardinality = B;

  d.boundedEnumMaybe = function (E) {
    return function (G) {
      return new r(function () {
        return f.boundedMaybe(G.Bounded0());
      }, function () {
        return v(G);
      }, c.unwrap(B)(G.cardinality) + 1 | 0, function (J) {
        if (J instanceof f.Nothing) return 0;
        if (J instanceof f.Just) return (0, G.fromEnum)(J.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [J.constructor.name]);
      }, function (J) {
        return 0 === J ? f.Nothing.value : b.map(f.functorMaybe)(f.Just.create)((0, G.toEnum)(J - 1 | 0));
      });
    };
  };

  d.smallBoundedBoolean = C;
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
  a = new function (e, h, g, b) {
    this.add = e;
    this.mul = h;
    this.one = g;
    this.zero = b;
  }(a.intAdd, a.intMul, 1, 0);
  d.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var d = a["Data.Ring"],
      e = a["Data.Semiring"];
  a = new function (h, g) {
    this.Semiring0 = h;
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
  a = new function (h) {
    this.Ring0 = h;
  }(function () {
    return e.ringInt;
  });
  d.commutativeRingInt = a;
})(PS);

(function (a) {
  a.canonicalDateImpl = function (d, e, h, g) {
    h = new Date(Date.UTC(e, h - 1, g));
    0 <= e && 100 > e && h.setUTCFullYear(e);
    return d(h.getUTCFullYear())(h.getUTCMonth() + 1)(h.getUTCDate());
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var d = a["Data.Date.Component"],
      e = a["Data.Boolean"],
      h = a["Data.Bounded"],
      g = a["Data.Enum"],
      b = a["Data.Eq"],
      f = a["Data.Maybe"],
      c = a["Data.Ord"],
      k = a["Data.Ordering"],
      m = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      q = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      t = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      n = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      r = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      C = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      B = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      v = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      x = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      p = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      D = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      z = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      F = c.ordInt,
      L = c.ordInt;

  a = b.eqInt;
  var E = new b.Eq(function (H) {
    return function (X) {
      return H instanceof m && X instanceof m || H instanceof q && X instanceof q || H instanceof t && X instanceof t || H instanceof n && X instanceof n || H instanceof r && X instanceof r || H instanceof C && X instanceof C || H instanceof B && X instanceof B || H instanceof v && X instanceof v || H instanceof x && X instanceof x || H instanceof p && X instanceof p || H instanceof D && X instanceof D || H instanceof z && X instanceof z ? !0 : !1;
    };
  }),
      G = new c.Ord(function () {
    return E;
  }, function (H) {
    return function (X) {
      if (H instanceof m && X instanceof m) return k.EQ.value;
      if (H instanceof m) return k.LT.value;
      if (X instanceof m) return k.GT.value;
      if (H instanceof q && X instanceof q) return k.EQ.value;
      if (H instanceof q) return k.LT.value;
      if (X instanceof q) return k.GT.value;
      if (H instanceof t && X instanceof t) return k.EQ.value;
      if (H instanceof t) return k.LT.value;
      if (X instanceof t) return k.GT.value;
      if (H instanceof n && X instanceof n) return k.EQ.value;
      if (H instanceof n) return k.LT.value;
      if (X instanceof n) return k.GT.value;
      if (H instanceof r && X instanceof r) return k.EQ.value;
      if (H instanceof r) return k.LT.value;
      if (X instanceof r) return k.GT.value;
      if (H instanceof C && X instanceof C) return k.EQ.value;
      if (H instanceof C) return k.LT.value;
      if (X instanceof C) return k.GT.value;
      if (H instanceof B && X instanceof B) return k.EQ.value;
      if (H instanceof B) return k.LT.value;
      if (X instanceof B) return k.GT.value;
      if (H instanceof v && X instanceof v) return k.EQ.value;
      if (H instanceof v) return k.LT.value;
      if (X instanceof v) return k.GT.value;
      if (H instanceof x && X instanceof x) return k.EQ.value;
      if (H instanceof x) return k.LT.value;
      if (X instanceof x) return k.GT.value;
      if (H instanceof p && X instanceof p) return k.EQ.value;
      if (H instanceof p) return k.LT.value;
      if (X instanceof p) return k.GT.value;
      if (H instanceof D && X instanceof D) return k.EQ.value;
      if (H instanceof D) return k.LT.value;
      if (X instanceof D) return k.GT.value;
      if (H instanceof z && X instanceof z) return k.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [H.constructor.name, X.constructor.name]);
    };
  });
  b = b.eqInt;
  var J = new h.Bounded(function () {
    return F;
  }, -271820, 275759),
      P = new h.Bounded(function () {
    return G;
  }, m.value, z.value),
      y = new g.BoundedEnum(function () {
    return J;
  }, function () {
    return K;
  }, 547580, function (H) {
    return H;
  }, function (H) {
    if (-271820 <= H && 275759 >= H) return new f.Just(H);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [H.constructor.name]);
  }),
      K = new g.Enum(function () {
    return F;
  }, function () {
    var H = g.toEnum(y),
        X = g.fromEnum(y);
    return function (u) {
      return H(X(u) - 1 | 0);
    };
  }(), function () {
    var H = g.toEnum(y),
        X = g.fromEnum(y);
    return function (u) {
      return H(X(u) + 1 | 0);
    };
  }()),
      I = new g.BoundedEnum(function () {
    return P;
  }, function () {
    return A;
  }, 12, function (H) {
    if (H instanceof m) return 1;
    if (H instanceof q) return 2;
    if (H instanceof t) return 3;
    if (H instanceof n) return 4;
    if (H instanceof r) return 5;
    if (H instanceof C) return 6;
    if (H instanceof B) return 7;
    if (H instanceof v) return 8;
    if (H instanceof x) return 9;
    if (H instanceof p) return 10;
    if (H instanceof D) return 11;
    if (H instanceof z) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [H.constructor.name]);
  }, function (H) {
    return 1 === H ? new f.Just(m.value) : 2 === H ? new f.Just(q.value) : 3 === H ? new f.Just(t.value) : 4 === H ? new f.Just(n.value) : 5 === H ? new f.Just(r.value) : 6 === H ? new f.Just(C.value) : 7 === H ? new f.Just(B.value) : 8 === H ? new f.Just(v.value) : 9 === H ? new f.Just(x.value) : 10 === H ? new f.Just(p.value) : 11 === H ? new f.Just(D.value) : 12 === H ? new f.Just(z.value) : f.Nothing.value;
  }),
      A = new g.Enum(function () {
    return G;
  }, function () {
    var H = g.toEnum(I),
        X = g.fromEnum(I);
    return function (u) {
      return H(X(u) - 1 | 0);
    };
  }(), function () {
    var H = g.toEnum(I),
        X = g.fromEnum(I);
    return function (u) {
      return H(X(u) + 1 | 0);
    };
  }()),
      O = new h.Bounded(function () {
    return L;
  }, 1, 31),
      N = new g.BoundedEnum(function () {
    return O;
  }, function () {
    return Q;
  }, 31, function (H) {
    return H;
  }, function (H) {
    if (1 <= H && 31 >= H) return new f.Just(H);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [H.constructor.name]);
  }),
      Q = new g.Enum(function () {
    return L;
  }, function () {
    var H = g.toEnum(N),
        X = g.fromEnum(N);
    return function (u) {
      return H(X(u) - 1 | 0);
    };
  }(), function () {
    var H = g.toEnum(N),
        X = g.fromEnum(N);
    return function (u) {
      return H(X(u) + 1 | 0);
    };
  }());
  d.eqYear = a;
  d.ordYear = F;
  d.boundedYear = J;
  d.boundedEnumYear = y;
  d.eqMonth = E;
  d.ordMonth = G;
  d.boundedMonth = P;
  d.boundedEnumMonth = I;
  d.eqDay = b;
  d.ordDay = L;
  d.boundedDay = O;
  d.boundedEnumDay = N;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var d = a["Data.Date"],
      e = a["Data.Date"],
      h = a["Data.Bounded"],
      g = a["Data.Date.Component"],
      b = a["Data.Enum"],
      f = a["Data.Eq"],
      c = a["Data.Maybe"],
      k = a["Data.Ord"],
      m = a["Data.Ordering"],
      q = function () {
    function r(C, B, v) {
      this.value0 = C;
      this.value1 = B;
      this.value2 = v;
    }

    r.create = function (C) {
      return function (B) {
        return function (v) {
          return new r(C, B, v);
        };
      };
    };

    return r;
  }(),
      t = new f.Eq(function (r) {
    return function (C) {
      return f.eq(g.eqYear)(r.value0)(C.value0) && f.eq(g.eqMonth)(r.value1)(C.value1) && f.eq(g.eqDay)(r.value2)(C.value2);
    };
  }),
      n = new k.Ord(function () {
    return t;
  }, function (r) {
    return function (C) {
      var B = k.compare(g.ordYear)(r.value0)(C.value0);
      if (B instanceof m.LT) return m.LT.value;
      if (B instanceof m.GT) return m.GT.value;
      B = k.compare(g.ordMonth)(r.value1)(C.value1);
      return B instanceof m.LT ? m.LT.value : B instanceof m.GT ? m.GT.value : k.compare(g.ordDay)(r.value2)(C.value2);
    };
  });

  a = new h.Bounded(function () {
    return n;
  }, new q(h.bottom(g.boundedYear), h.bottom(g.boundedMonth), h.bottom(g.boundedDay)), new q(h.top(g.boundedYear), h.top(g.boundedMonth), h.top(g.boundedDay)));

  d.canonicalDate = function (r) {
    return function (C) {
      return function (B) {
        return e.canonicalDateImpl(function (v) {
          return function (x) {
            return function (p) {
              return new q(v, c.fromJust()(b.toEnum(g.boundedEnumMonth)(x)), p);
            };
          };
        }, r, b.fromEnum(g.boundedEnumMonth)(C), B);
      };
    };
  };

  d.year = function (r) {
    return r.value0;
  };

  d.month = function (r) {
    return r.value1;
  };

  d.day = function (r) {
    return r.value2;
  };

  d.eqDate = t;
  d.ordDate = n;
  d.boundedDate = a;
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var d = a["Data.Time.Component"],
      e = a["Data.Boolean"],
      h = a["Data.Bounded"],
      g = a["Data.Enum"],
      b = a["Data.Eq"],
      f = a["Data.Maybe"];
  a = a["Data.Ord"];
  var c = a.ordInt,
      k = a.ordInt,
      m = a.ordInt,
      q = a.ordInt,
      t = a = b.eqInt,
      n = b.eqInt;
  b = b.eqInt;
  var r = new h.Bounded(function () {
    return c;
  }, 0, 59),
      C = new h.Bounded(function () {
    return k;
  }, 0, 59),
      B = new h.Bounded(function () {
    return m;
  }, 0, 999),
      v = new h.Bounded(function () {
    return q;
  }, 0, 23),
      x = new g.BoundedEnum(function () {
    return r;
  }, function () {
    return p;
  }, 60, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 59 >= J) return new f.Just(J);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [J.constructor.name]);
  }),
      p = new g.Enum(function () {
    return c;
  }, function () {
    var J = g.toEnum(x),
        P = g.fromEnum(x);
    return function (y) {
      return J(P(y) - 1 | 0);
    };
  }(), function () {
    var J = g.toEnum(x),
        P = g.fromEnum(x);
    return function (y) {
      return J(P(y) + 1 | 0);
    };
  }()),
      D = new g.BoundedEnum(function () {
    return C;
  }, function () {
    return z;
  }, 60, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 59 >= J) return new f.Just(J);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [J.constructor.name]);
  }),
      z = new g.Enum(function () {
    return k;
  }, function () {
    var J = g.toEnum(D),
        P = g.fromEnum(D);
    return function (y) {
      return J(P(y) - 1 | 0);
    };
  }(), function () {
    var J = g.toEnum(D),
        P = g.fromEnum(D);
    return function (y) {
      return J(P(y) + 1 | 0);
    };
  }()),
      F = new g.BoundedEnum(function () {
    return B;
  }, function () {
    return L;
  }, 1E3, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 999 >= J) return new f.Just(J);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [J.constructor.name]);
  }),
      L = new g.Enum(function () {
    return m;
  }, function () {
    var J = g.toEnum(F),
        P = g.fromEnum(F);
    return function (y) {
      return J(P(y) - 1 | 0);
    };
  }(), function () {
    var J = g.toEnum(F),
        P = g.fromEnum(F);
    return function (y) {
      return J(P(y) + 1 | 0);
    };
  }()),
      E = new g.BoundedEnum(function () {
    return v;
  }, function () {
    return G;
  }, 24, function (J) {
    return J;
  }, function (J) {
    if (0 <= J && 23 >= J) return new f.Just(J);
    if (e.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [J.constructor.name]);
  }),
      G = new g.Enum(function () {
    return q;
  }, function () {
    var J = g.toEnum(E),
        P = g.fromEnum(E);
    return function (y) {
      return J(P(y) - 1 | 0);
    };
  }(), function () {
    var J = g.toEnum(E),
        P = g.fromEnum(E);
    return function (y) {
      return J(P(y) + 1 | 0);
    };
  }());
  d.eqHour = b;
  d.ordHour = q;
  d.boundedHour = v;
  d.boundedEnumHour = E;
  d.eqMinute = t;
  d.ordMinute = k;
  d.boundedMinute = C;
  d.boundedEnumMinute = D;
  d.eqSecond = a;
  d.ordSecond = c;
  d.boundedSecond = r;
  d.boundedEnumSecond = x;
  d.eqMillisecond = n;
  d.ordMillisecond = m;
  d.boundedMillisecond = B;
  d.boundedEnumMillisecond = F;
})(PS);

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  var d = a["Data.Time"],
      e = a["Data.Bounded"],
      h = a["Data.Eq"],
      g = a["Data.Ord"],
      b = a["Data.Ordering"],
      f = a["Data.Time.Component"];

  a = function () {
    function m(q, t, n, r) {
      this.value0 = q;
      this.value1 = t;
      this.value2 = n;
      this.value3 = r;
    }

    m.create = function (q) {
      return function (t) {
        return function (n) {
          return function (r) {
            return new m(q, t, n, r);
          };
        };
      };
    };

    return m;
  }();

  var c = new h.Eq(function (m) {
    return function (q) {
      return h.eq(f.eqHour)(m.value0)(q.value0) && h.eq(f.eqMinute)(m.value1)(q.value1) && h.eq(f.eqSecond)(m.value2)(q.value2) && h.eq(f.eqMillisecond)(m.value3)(q.value3);
    };
  }),
      k = new g.Ord(function () {
    return c;
  }, function (m) {
    return function (q) {
      var t = g.compare(f.ordHour)(m.value0)(q.value0);
      if (t instanceof b.LT) return b.LT.value;
      if (t instanceof b.GT) return b.GT.value;
      t = g.compare(f.ordMinute)(m.value1)(q.value1);
      if (t instanceof b.LT) return b.LT.value;
      if (t instanceof b.GT) return b.GT.value;
      t = g.compare(f.ordSecond)(m.value2)(q.value2);
      return t instanceof b.LT ? b.LT.value : t instanceof b.GT ? b.GT.value : g.compare(f.ordMillisecond)(m.value3)(q.value3);
    };
  });
  e = new e.Bounded(function () {
    return k;
  }, new a(e.bottom(f.boundedHour), e.bottom(f.boundedMinute), e.bottom(f.boundedSecond), e.bottom(f.boundedMillisecond)), new a(e.top(f.boundedHour), e.top(f.boundedMinute), e.top(f.boundedSecond), e.top(f.boundedMillisecond)));
  d.Time = a;

  d.hour = function (m) {
    return m.value0;
  };

  d.minute = function (m) {
    return m.value1;
  };

  d.second = function (m) {
    return m.value2;
  };

  d.millisecond = function (m) {
    return m.value3;
  };

  d.eqTime = c;
  d.ordTime = k;
  d.boundedTime = e;
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  var d = a["Data.DateTime"],
      e = a["Data.Bounded"],
      h = a["Data.Date"],
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

  var k = new g.Eq(function (q) {
    return function (t) {
      return g.eq(h.eqDate)(q.value0)(t.value0) && g.eq(c.eqTime)(q.value1)(t.value1);
    };
  }),
      m = new b.Ord(function () {
    return k;
  }, function (q) {
    return function (t) {
      var n = b.compare(h.ordDate)(q.value0)(t.value0);
      return n instanceof f.LT ? f.LT.value : n instanceof f.GT ? f.GT.value : b.compare(c.ordTime)(q.value1)(t.value1);
    };
  });
  e = new e.Bounded(function () {
    return m;
  }, new a(e.bottom(h.boundedDate), e.bottom(c.boundedTime)), new a(e.top(h.boundedDate), e.top(c.boundedTime)));
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
      h = a["Data.Boolean"],
      g = a["Data.Date"],
      b = a["Data.Date.Component"],
      f = a["Data.DateTime"],
      c = a["Data.Enum"],
      k = a["Data.Maybe"],
      m = a["Data.Time"];

  a = function () {
    return e.toDateTimeImpl(function (q) {
      return function (t) {
        return function (n) {
          return function (r) {
            return function (C) {
              return function (B) {
                return function (v) {
                  return new f.DateTime(g.canonicalDate(q)(k.fromJust()(c.toEnum(b.boundedEnumMonth)(t)))(n), new m.Time(r, C, B, v));
                };
              };
            };
          };
        };
      };
    });
  }();

  d.instant = function (q) {
    if (-86399778816E5 <= q && 8639977881599999 >= q) return new k.Just(q);
    if (h.otherwise) return k.Nothing.value;
    throw Error("Failed pattern match at Data.DateTime.Instant (line 44, column 1 - line 44, column 41): " + [q.constructor.name]);
  };

  d.toDateTime = a;
})(PS);

(function (a) {
  a["Data.Either.Extra"] = a["Data.Either.Extra"] || {};

  var d = a["Data.Either.Extra"],
      e = a["Control.Applicative"],
      h = a["Control.Bind"],
      g = a["Control.Category"],
      b = a["Control.Plus"],
      f = a["Data.Either"],
      c = a["Data.Function"],
      k = function k(n) {
    return function (r) {
      return function (C) {
        if (C instanceof f.Left) return n;
        if (C instanceof f.Right) return r(C.value0);
        throw Error("Failed pattern match at Data.Either.Extra (line 29, column 1 - line 29, column 58): " + [n.constructor.name, r.constructor.name, C.constructor.name]);
      };
    };
  },
      m = function m(n) {
    return function (r) {
      return function (C) {
        if (C instanceof f.Left) return r(C.value0);
        if (C instanceof f.Right) return n;
        throw Error("Failed pattern match at Data.Either.Extra (line 18, column 1 - line 18, column 57): " + [n.constructor.name, r.constructor.name, C.constructor.name]);
      };
    };
  },
      q = function q(n) {
    return function (r) {
      return function (C) {
        return c.flip(h.bind(n.Bind1()))(k(b.empty(r))(function () {
          var B = e.pure(n.Applicative0());
          return function (v) {
            return B(C(v));
          };
        }()));
      };
    };
  },
      t = function t(n) {
    return function (r) {
      return function (C) {
        return c.flip(h.bind(n.Bind1()))(m(b.empty(r))(function () {
          var B = e.pure(n.Applicative0());
          return function (v) {
            return B(C(v));
          };
        }()));
      };
    };
  };

  d.catLefts = function (n) {
    return function (r) {
      return t(n)(r)(g.identity(g.categoryFn));
    };
  };

  d.catRights = function (n) {
    return function (r) {
      return q(n)(r)(g.identity(g.categoryFn));
    };
  };
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
      h = a["Data.CommutativeRing"];
  a = new function (g, b, f, c) {
    this.CommutativeRing0 = g;
    this.degree = b;
    this.div = f;
    this.mod = c;
  }(function () {
    return h.commutativeRingInt;
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
      h = function () {
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

  a.NoArguments = h;
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
      h = function h(k) {
    this["genericTop'"] = k;
  },
      g = function g(k) {
    this["genericBottom'"] = k;
  };

  a = new h(e.NoArguments.value);

  var b = function b(k) {
    return k["genericTop'"];
  },
      f = new g(e.NoArguments.value),
      c = function c(k) {
    return k["genericBottom'"];
  };

  d["genericBottom'"] = c;

  d.genericBottom = function (k) {
    return function (m) {
      return e.to(k)(c(m));
    };
  };

  d["genericTop'"] = b;

  d.genericTop = function (k) {
    return function (m) {
      return e.to(k)(b(m));
    };
  };

  d.genericBottomNoArguments = f;

  d.genericBottomSum = function (k) {
    return new g(new e.Inl(c(k)));
  };

  d.genericBottomConstructor = function (k) {
    return new g(c(k));
  };

  d.genericTopNoArguments = a;

  d.genericTopSum = function (k) {
    return new h(new e.Inr(b(k)));
  };

  d.genericTopConstructor = function (k) {
    return new h(b(k));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var d = a["Data.Generic.Rep.Enum"],
      e = a["Data.Boolean"],
      h = a["Data.Enum"],
      g = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      f = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Maybe"],
      k = a["Data.Newtype"],
      m = function m(x, p) {
    this["genericPred'"] = x;
    this["genericSucc'"] = p;
  },
      q = function q(x, p, D) {
    this["genericCardinality'"] = x;
    this["genericFromEnum'"] = p;
    this["genericToEnum'"] = D;
  },
      t = function t(x) {
    return x["genericToEnum'"];
  },
      n = function n(x) {
    return x["genericSucc'"];
  },
      r = function r(x) {
    return x["genericPred'"];
  },
      C = function C(x) {
    return x["genericFromEnum'"];
  };

  a = new m(function (x) {
    return c.Nothing.value;
  }, function (x) {
    return c.Nothing.value;
  });

  var B = function B(x) {
    return x["genericCardinality'"];
  },
      v = new q(1, function (x) {
    return 0;
  }, function (x) {
    return 0 === x ? new c.Just(b.NoArguments.value) : c.Nothing.value;
  });

  d.genericPred = function (x) {
    return function (p) {
      var D = g.map(c.functorMaybe)(b.to(x)),
          z = r(p),
          F = b.from(x);
      return function (L) {
        return D(z(F(L)));
      };
    };
  };

  d.genericSucc = function (x) {
    return function (p) {
      var D = g.map(c.functorMaybe)(b.to(x)),
          z = n(p),
          F = b.from(x);
      return function (L) {
        return D(z(F(L)));
      };
    };
  };

  d.genericCardinality = function (x) {
    return function (p) {
      return k.unwrap(h.newtypeCardinality)(B(p));
    };
  };

  d.genericToEnum = function (x) {
    return function (p) {
      var D = g.map(c.functorMaybe)(b.to(x)),
          z = t(p);
      return function (F) {
        return D(z(F));
      };
    };
  };

  d.genericFromEnum = function (x) {
    return function (p) {
      var D = C(p),
          z = b.from(x);
      return function (F) {
        return D(z(F));
      };
    };
  };

  d.genericEnumNoArguments = a;

  d.genericEnumConstructor = function (x) {
    return new m(function (p) {
      return g.map(c.functorMaybe)(b.Constructor)(r(x)(p));
    }, function (p) {
      return g.map(c.functorMaybe)(b.Constructor)(n(x)(p));
    });
  };

  d.genericEnumSum = function (x) {
    return function (p) {
      return function (D) {
        return function (z) {
          return new m(function (F) {
            if (F instanceof b.Inl) return g.map(c.functorMaybe)(b.Inl.create)(r(x)(F.value0));

            if (F instanceof b.Inr) {
              F = r(D)(F.value0);
              if (F instanceof c.Nothing) return new c.Just(new b.Inl(f["genericTop'"](p)));
              if (F instanceof c.Just) return new c.Just(new b.Inr(F.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [F.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [F.constructor.name]);
          }, function (F) {
            if (F instanceof b.Inl) {
              F = n(x)(F.value0);
              if (F instanceof c.Nothing) return new c.Just(new b.Inr(f["genericBottom'"](z)));
              if (F instanceof c.Just) return new c.Just(new b.Inl(F.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [F.constructor.name]);
            }

            if (F instanceof b.Inr) return g.map(c.functorMaybe)(b.Inr.create)(n(D)(F.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [F.constructor.name]);
          });
        };
      };
    };
  };

  d.genericBoundedEnumNoArguments = v;

  d.genericBoundedEnumConstructor = function (x) {
    return new q(k.unwrap(h.newtypeCardinality)(B(x)), function (p) {
      return C(x)(p);
    }, function (p) {
      return g.map(c.functorMaybe)(b.Constructor)(t(x)(p));
    });
  };

  d.genericBoundedEnumSum = function (x) {
    return function (p) {
      return new q(h.Cardinality(k.unwrap(h.newtypeCardinality)(B(x)) + k.unwrap(h.newtypeCardinality)(B(p)) | 0), function (D) {
        if (D instanceof b.Inl) return C(x)(D.value0);
        if (D instanceof b.Inr) return C(p)(D.value0) + k.unwrap(h.newtypeCardinality)(B(x)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [D.constructor.name]);
      }, function (D) {
        var z = B(x);
        if (0 <= D && D < z) D = g.map(c.functorMaybe)(b.Inl.create)(t(x)(D));else if (e.otherwise) D = g.map(c.functorMaybe)(b.Inr.create)(t(p)(D - z | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [z.constructor.name]);
        return D;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var d = a["Data.Generic.Rep.Eq"],
      e = a["Data.Generic.Rep"],
      h = function h(g) {
    this["genericEq'"] = g;
  };

  a = new h(function (g) {
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
      return new h(function (f) {
        return function (c) {
          return f instanceof e.Inl && c instanceof e.Inl ? (0, g["genericEq'"])(f.value0)(c.value0) : f instanceof e.Inr && c instanceof e.Inr ? (0, b["genericEq'"])(f.value0)(c.value0) : !1;
        };
      });
    };
  };

  d.genericEqConstructor = function (g) {
    return new h(function (b) {
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
      h = a["Data.Ordering"],
      g = function g(f) {
    this["genericCompare'"] = f;
  };

  a = new g(function (f) {
    return function (c) {
      return h.EQ.value;
    };
  });

  var b = function b(f) {
    return f["genericCompare'"];
  };

  d.genericCompare = function (f) {
    return function (c) {
      return function (k) {
        return function (m) {
          return b(c)(e.from(f)(k))(e.from(f)(m));
        };
      };
    };
  };

  d.genericOrdNoArguments = a;

  d.genericOrdSum = function (f) {
    return function (c) {
      return new g(function (k) {
        return function (m) {
          if (k instanceof e.Inl && m instanceof e.Inl) return b(f)(k.value0)(m.value0);
          if (k instanceof e.Inr && m instanceof e.Inr) return b(c)(k.value0)(m.value0);
          if (k instanceof e.Inl && m instanceof e.Inr) return h.LT.value;
          if (k instanceof e.Inr && m instanceof e.Inl) return h.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [k.constructor.name, m.constructor.name]);
        };
      });
    };
  };

  d.genericOrdConstructor = function (f) {
    return new g(function (c) {
      return function (k) {
        return b(f)(c)(k);
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
      h = a["Data.Generic.Rep"],
      g = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      f = a["Data.Symbol"],
      c = function c(k) {
    this["genericShow'"] = k;
  };

  a = new function (k) {
    this.genericShowArgs = k;
  }(function (k) {
    return [];
  });

  d.genericShow = function (k) {
    return function (m) {
      return function (q) {
        return (0, m["genericShow'"])(h.from(k)(q));
      };
    };
  };

  d.genericShowArgsNoArguments = a;

  d.genericShowSum = function (k) {
    return function (m) {
      return new c(function (q) {
        if (q instanceof h.Inl) return (0, k["genericShow'"])(q.value0);
        if (q instanceof h.Inr) return (0, m["genericShow'"])(q.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [q.constructor.name]);
      });
    };
  };

  d.genericShowConstructor = function (k) {
    return function (m) {
      return new c(function (q) {
        var t = f.reflectSymbol(m)(f.SProxy.value);
        q = (0, k.genericShowArgs)(q);
        return 0 === q.length ? t : "(" + (e.intercalate(e.foldableArray)(g.monoidString)(" ")(b.append(b.semigroupArray)([t])(q)) + ")");
      });
    };
  };
})(PS);

(function (a) {
  a.fromNumberImpl = function (d) {
    return function (e) {
      return function (h) {
        return (h | 0) === h ? d(h) : e;
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
      h = a["Data.Boolean"],
      g = a["Data.Bounded"],
      b = a["Data.Maybe"],
      f = a.Global,
      c = a.Math,
      k = e.fromNumberImpl(b.Just.create)(b.Nothing.value),
      m = function m(q) {
    if (q === f.infinity || q === -f.infinity) return 0;
    if (q >= e.toNumber(g.top(g.boundedInt))) return g.top(g.boundedInt);
    if (q <= e.toNumber(g.bottom(g.boundedInt))) return g.bottom(g.boundedInt);
    if (h.otherwise) return b.fromMaybe(0)(k(q));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [q.constructor.name]);
  };

  d.round = function (q) {
    return m(c.round(q));
  };

  d.hexadecimal = 16;
  d.toNumber = e.toNumber;
  d.toStringAs = e.toStringAs;
})(PS);

(function (a) {
  a.toInstantImpl = function (d) {
    return function (e) {
      return function (h) {
        h = h.getTime();
        return isNaN(h) ? e : d(h);
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
      h = a["Data.Date"],
      g = a["Data.Date.Component"],
      b = a["Data.DateTime.Instant"],
      f = a["Data.Enum"],
      c = a["Data.Functor"],
      k = a["Data.Int"],
      m = a["Data.Maybe"],
      q = a["Data.Time"],
      t = a["Data.Time.Component"],
      n = a["Data.Time.Duration"];
  a = a["Control.Bind"].composeKleisliFlipped(m.bindMaybe)(function (r) {
    return b.instant(n.Milliseconds(r));
  })(e.toInstantImpl(m.Just.create)(m.Nothing.value));
  c = c.map(c.functorFn)(c.map(m.functorMaybe)(b.toDateTime))(a);

  d.fromDateTime = function (r) {
    return e.jsdate({
      year: k.toNumber(f.fromEnum(g.boundedEnumYear)(h.year(r.value0))),
      month: k.toNumber(f.fromEnum(g.boundedEnumMonth)(h.month(r.value0)) - 1 | 0),
      day: k.toNumber(f.fromEnum(g.boundedEnumDay)(h.day(r.value0))),
      hour: k.toNumber(f.fromEnum(t.boundedEnumHour)(q.hour(r.value1))),
      minute: k.toNumber(f.fromEnum(t.boundedEnumMinute)(q.minute(r.value1))),
      second: k.toNumber(f.fromEnum(t.boundedEnumSecond)(q.second(r.value1))),
      millisecond: k.toNumber(f.fromEnum(t.boundedEnumMillisecond)(q.millisecond(r.value1)))
    });
  };

  d.toDateTime = c;

  d.toISOString = function (r) {
    return e.dateMethodEff("toISOString", r);
  };

  d.parse = e.parse;
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};
  var d = a["Data.Maybe.First"],
      e = a["Data.Maybe"];
  a = new a["Data.Semigroup"].Semigroup(function (h) {
    return function (g) {
      return h instanceof e.Just ? h : g;
    };
  });

  d.First = function (h) {
    return h;
  };

  d.semigroupFirst = a;
})(PS);

(function (a) {
  a["Data.Natural"] = a["Data.Natural"] || {};
  var d = a["Data.Natural"],
      e = a["Data.Show"];
  a = new e.Show(function () {
    var h = e.show(e.showInt);
    return function (g) {
      return h(g);
    };
  }());

  d.intToNat = function (h) {
    return 0 <= h ? h : 0;
  };

  d.natToInt = function (h) {
    return h;
  };

  d.showNatural = a;
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  a = a["Data.Profunctor"];
  var d = new function (e) {
    this.dimap = e;
  }(function (e) {
    return function (h) {
      return function (g) {
        return function (b) {
          return h(g(e(b)));
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
      h = a["Control.Semigroupoid"],
      g = a["Data.Profunctor"],
      b = a["Data.Tuple"];
  a = new function (c, k, m) {
    this.Profunctor0 = c;
    this.first = k;
    this.second = m;
  }(function () {
    return g.profunctorFn;
  }, function (c) {
    return function (k) {
      return new b.Tuple(c(k.value0), k.value1);
    };
  }, a["Data.Functor"].map(b.functorTuple));

  var f = function f(c) {
    return function (k) {
      return function (m) {
        return function (q) {
          return h.composeFlipped(c.Semigroupoid0())((0, k.first)(m))((0, k.second)(q));
        };
      };
    };
  };

  d.second = function (c) {
    return c.second;
  };

  d.fanout = function (c) {
    return function (k) {
      return function (m) {
        return function (q) {
          var t = g.dimap(k.Profunctor0())(e.identity(e.categoryFn))(function (n) {
            return new b.Tuple(n, n);
          })(e.identity(c));
          return h.composeFlipped(c.Semigroupoid0())(t)(f(c)(k)(m)(q));
        };
      };
    };
  };

  d.strongFn = a;
})(PS);

(function (a) {
  var d = "function" === typeof Array.from,
      e = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      h = "function" === typeof String.prototype.fromCodePoint,
      g = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (b) {
    return g ? function (f) {
      return f.codePointAt(0);
    } : b;
  };

  a._codePointAt = function (b) {
    return function (f) {
      return function (c) {
        return function (k) {
          return function (m) {
            return function (q) {
              var t = q.length;
              if (0 > m || m >= t) return c;
              if (e) for (q = q[Symbol.iterator](), t = m;; --t) {
                var n = q.next();
                if (n.done) return c;
                if (0 === t) return f(k(n.value));
              }
              return b(m)(q);
            };
          };
        };
      };
    };
  };

  a._singleton = function (b) {
    return h ? String.fromCodePoint : b;
  };

  a._take = function (b) {
    return function (f) {
      return e ? function (c) {
        var k = "";
        c = c[Symbol.iterator]();

        for (var m = 0; m < f; ++m) {
          var q = c.next();
          if (q.done) break;
          k += q.value;
        }

        return k;
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
      return function (h) {
        return function (g) {
          g = g.indexOf(h);
          return -1 === g ? e : d(g);
        };
      };
    };
  };

  a._lastIndexOf = function (d) {
    return function (e) {
      return function (h) {
        return function (g) {
          g = g.lastIndexOf(h);
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
      h = a["Data.Maybe"],
      g = e._lastIndexOf(h.Just.create)(h.Nothing.value),
      b = e._indexOf(h.Just.create)(h.Nothing.value);

  d.stripSuffix = function (f) {
    return function (c) {
      var k = g(f)(c);
      return k instanceof h.Just && k.value0 === (e.length(c) - e.length(f) | 0) ? h.Just.create(e.take(k.value0)(c)) : h.Nothing.value;
    };
  };

  d.contains = function (f) {
    var c = b(f);
    return function (k) {
      return h.isJust(c(k));
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
      return function (h) {
        return function (g) {
          return function (b) {
            return function (f) {
              for (var c = [];;) {
                f = b(f);
                if (d(f)) return c;
                f = e(f);
                c.push(h(f));
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
      h = a["Data.Functor"],
      g = a["Data.Maybe"],
      b = a["Data.Tuple"],
      f = a["Data.Unfoldable1"];
  a = new function (c, k) {
    this.Unfoldable10 = c;
    this.unfoldr = k;
  }(function () {
    return f.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(g.isNothing)(g.fromJust())(b.fst)(b.snd));

  d.unfoldr = function (c) {
    return c.unfoldr;
  };

  d.fromMaybe = function (c) {
    return (0, c.unfoldr)(function (k) {
      return h.map(g.functorMaybe)(e.flip(b.Tuple.create)(g.Nothing.value))(k);
    });
  };

  d.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var d = a["Data.String.CodePoints"],
      e = a["Data.String.CodePoints"],
      h = a["Data.Array"],
      g = a["Data.Boolean"],
      b = a["Data.Bounded"],
      f = a["Data.Enum"],
      c = a["Data.Eq"],
      k = a["Data.EuclideanRing"],
      m = a["Data.Functor"],
      q = a["Data.Int"],
      t = a["Data.Maybe"],
      n = a["Data.Ord"],
      r = a["Data.String.CodeUnits"],
      C = a["Data.String.Common"],
      B = a["Data.String.Unsafe"],
      v = a["Data.Tuple"],
      x = a["Data.Unfoldable"],
      p = function p(N) {
    return function (Q) {
      return ((1024 * (N - 55296 | 0) | 0) + (Q - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (N) {
    return "(CodePoint 0x" + (C.toUpper(q.toStringAs(q.hexadecimal)(N)) + ")");
  });

  var D = function D(N) {
    var Q = r.length(N);
    if (0 === Q) return t.Nothing.value;
    if (1 === Q) return new t.Just({
      head: f.fromEnum(f.boundedEnumChar)(B.charAt(0)(N)),
      tail: ""
    });
    Q = f.fromEnum(f.boundedEnumChar)(B.charAt(1)(N));
    var H = f.fromEnum(f.boundedEnumChar)(B.charAt(0)(N));
    return 55296 <= H && 56319 >= H && 56320 <= Q && 57343 >= Q ? new t.Just({
      head: p(H)(Q),
      tail: r.drop(2)(N)
    }) : new t.Just({
      head: H,
      tail: r.drop(1)(N)
    });
  },
      z = function z(N) {
    return m.map(t.functorMaybe)(function (Q) {
      return new v.Tuple(Q.head, Q.tail);
    })(D(N));
  },
      F = e._unsafeCodePointAt0(function (N) {
    var Q = f.fromEnum(f.boundedEnumChar)(B.charAt(0)(N));
    return 55296 <= Q && 56319 >= Q && 1 < r.length(N) && (N = f.fromEnum(f.boundedEnumChar)(B.charAt(1)(N)), 56320 <= N && 57343 >= N) ? p(Q)(N) : Q;
  }),
      L = e._toCodePointArray(function (N) {
    return x.unfoldr(x.unfoldableArray)(z)(N);
  })(F),
      E = function () {
    var N = f.toEnumWithDefaults(f.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (Q) {
      return r.singleton(N(Q));
    };
  }(),
      G = e._singleton(function (N) {
    if (65535 >= N) return E(N);
    var Q = k.div(k.euclideanRingInt)(N - 65536 | 0)(1024) + 55296 | 0;
    N = k.mod(k.euclideanRingInt)(N - 65536 | 0)(1024) + 56320 | 0;
    return E(Q) + E(N);
  }),
      J = function J(N) {
    return function (Q) {
      if (1 > N) return "";
      var H = D(Q);
      return H instanceof t.Just ? G(H.value0.head) + J(N - 1 | 0)(H.value0.tail) : Q;
    };
  },
      P = e._take(J),
      y = new c.Eq(function (N) {
    return function (Q) {
      return N === Q;
    };
  }),
      K = new n.Ord(function () {
    return y;
  }, function (N) {
    return function (Q) {
      return n.compare(n.ordInt)(N)(Q);
    };
  }),
      I = function I(N) {
    return function (Q) {
      for (var H = N, X = !1, u; !X;) {
        u = H;
        var ka = D(Q);
        ka instanceof t.Just ? 0 === u ? (X = !0, u = new t.Just(ka.value0.head)) : (H = u - 1 | 0, Q = ka.value0.tail, u = void 0) : (X = !0, u = t.Nothing.value);
      }

      return u;
    };
  },
      A = new b.Bounded(function () {
    return K;
  }, 0, 1114111);

  c = new f.BoundedEnum(function () {
    return A;
  }, function () {
    return O;
  }, 1114112, function (N) {
    return N;
  }, function (N) {
    if (0 <= N && 1114111 >= N) return new t.Just(N);
    if (g.otherwise) return t.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [N.constructor.name]);
  });
  var O = new f.Enum(function () {
    return K;
  }, f.defaultPred(f.toEnum(c))(f.fromEnum(c)), f.defaultSucc(f.toEnum(c))(f.fromEnum(c)));
  d.singleton = G;
  d.toCodePointArray = L;

  d.codePointAt = function (N) {
    return function (Q) {
      return 0 > N || 0 === N && "" === Q ? t.Nothing.value : 0 === N ? new t.Just(F(Q)) : e._codePointAt(I)(t.Just.create)(t.Nothing.value)(F)(N)(Q);
    };
  };

  d.length = function (N) {
    return h.length(L(N));
  };

  d.take = P;
  d.showCodePoint = a;
  d.boundedEnumCodePoint = c;
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var d = a["Data.String.NonEmpty.Internal"],
      e = a["Data.Maybe"];
  a = a["Data.Semigroup"].semigroupString;

  d.fromString = function (h) {
    return "" === h ? e.Nothing.value : new e.Just(h);
  };

  d.toString = function (h) {
    return h;
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
      h = a["Control.Applicative"],
      g = a.Effect;
  a = a["Control.Bind"].bind(g.bindEffect)(e.getUUIDImpl)(function () {
    var b = h.pure(g.applicativeEffect);
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
  a["Data.Void"] = a["Data.Void"] || {};

  a["Data.Void"].absurd = function (d) {
    for (;;) {
      ;
    }
  };
})(PS);

(function (a) {
  a["Data.XPath"] = a["Data.XPath"] || {};
  var d = a["Data.XPath"],
      e = a["Data.Semigroup"],
      h = new function (g, b, f, c, k, m) {
    this.Semigroup0 = g;
    this.at = b;
    this.pathAppend = f;
    this.pathAppendNSx = c;
    this.root = k;
    this.xx = m;
  }(function () {
    return e.semigroupString;
  }, function (g) {
    return "@" + g;
  }, function (g) {
    return function (b) {
      return g === h.root ? h.root + b : g + ("/" + b);
    };
  }, function (g) {
    return function (b) {
      return g === h.root ? h.root + ("x:" + b) : g + ("/x:" + b);
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

  d.stringXPath = h;
})(PS);

(function (a) {
  a["DataCite.Types.Common"] = a["DataCite.Types.Common"] || {};

  var d = a["DataCite.Types.Common"],
      e = a["Data.Bounded"],
      h = a["Data.Enum"],
      g = a["Data.Eq"],
      b = a["Data.Generic.Rep"],
      f = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Generic.Rep.Enum"],
      k = a["Data.Generic.Rep.Eq"],
      m = a["Data.Generic.Rep.Ord"],
      q = a["Data.Generic.Rep.Show"],
      t = a["Data.Ord"],
      n = a["Data.Show"],
      r = a["Data.Symbol"],
      C = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      B = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      v = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      x = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      p = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      D = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      z = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      F = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      L = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      E = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      G = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      J = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      P = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      y = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      K = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      I = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      A = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      O = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      N = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Q = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      H = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      X = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      u = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ka = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ma = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Da = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ba = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ha = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ia = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ra = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      S = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ca = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      fa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      wa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ya = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ua = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      va = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ja = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      T = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      aa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      U = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      M = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Y = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      oa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ha = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ca = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ma = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      w = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      da = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      la = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      xa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      na = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ja = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      ta = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ga = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Aa = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ia = function () {
    function l() {}

    l.value = new l();
    return l;
  }(),
      Ea = new b.Generic(function (l) {
    if (l instanceof C) return new b.Inl(b.NoArguments.value);
    if (l instanceof B) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (l instanceof v) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (l instanceof x) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (l instanceof p) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (l instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (l instanceof z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (l instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (l instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (l instanceof E) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (l instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (l instanceof J) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (l instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (l instanceof y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [l.constructor.name]);
  }, function (l) {
    if (l instanceof b.Inl) return C.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inl) return B.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inl) return v.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inl) return x.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inl) return p.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return z.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return L.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return E.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return J.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return y.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [l.constructor.name]);
  });

  a = new n.Show(q.genericShow(Ea)(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Audiovisual";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Dataset";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Event";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Image";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "InteractiveResource";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Model";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "PhysicalObject";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "ResourceCollection";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Service";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Software";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Sound";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Text";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Workflow";
  })))(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Other";
  })))))))))))))))));
  var za = new b.Generic(function (l) {
    if (l instanceof K) return new b.Inl(b.NoArguments.value);
    if (l instanceof I) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (l instanceof A) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (l instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (l instanceof N) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (l instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (l instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (l instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (l instanceof u) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (l instanceof ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (l instanceof ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (l instanceof Da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (l instanceof Ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (l instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (l instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (l instanceof ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (l instanceof S) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (l instanceof ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (l instanceof fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (l instanceof wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (l instanceof ya) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (l instanceof ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (l instanceof va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (l instanceof Ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (l instanceof T) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [l.constructor.name]);
  }, function (l) {
    if (l instanceof b.Inl) return K.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inl) return I.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inl) return A.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inl) return O.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inl) return N.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return X.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return u.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ka.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ma.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Da.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ba.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ra.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return S.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ca.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return wa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ya.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ua.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return va.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ja.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return T.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [l.constructor.name]);
  }),
      Na = new n.Show(q.genericShow(za)(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsCitedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Cites";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsSupplementTo";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsContinuedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Continues";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsPartOf";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "HasPart";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsReferencedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "References";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Documents";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsCompiledBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Compiles";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "HasMetadata";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsMetadataFor";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Reviews";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsReviewedBy";
  })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      La = new b.Generic(function (l) {
    if (l instanceof aa) return new b.Inl(b.NoArguments.value);
    if (l instanceof U) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (l instanceof M) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (l instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (l instanceof oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (l instanceof Ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (l instanceof Ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (l instanceof Ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (l instanceof w) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (l instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (l instanceof la) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (l instanceof xa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (l instanceof na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (l instanceof ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (l instanceof ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (l instanceof Ga) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (l instanceof Aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (l instanceof Ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [l.constructor.name]);
  }, function (l) {
    if (l instanceof b.Inl) return aa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inl) return U.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inl) return M.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inl) return Y.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inl) return oa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inl) return Ha.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ca.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ma.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return w.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return la.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return xa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return na.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ja.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ta.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ga.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Aa.value;
    if (l instanceof b.Inr && l.value0 instanceof b.Inr && l.value0.value0 instanceof b.Inr && l.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && l.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Ia.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [l.constructor.name]);
  });
  n = new n.Show(function (l) {
    return l instanceof U ? "arXiv" : l instanceof M ? "bibcode" : q.genericShow(La)(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ARK";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ArXiv";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Bibcode";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "DOI";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "EAN13";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "EISSN";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Handle";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "IGSN";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ISBN";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ISSN";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ISTC";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "LISSN";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "LSID";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "PMID";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "PURL";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "UPC";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "URL";
    })))(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(l);
  });
  var Ta = new g.Eq(k.genericEq(Ea)(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqConstructor(k.genericEqNoArguments)))))))))))))))),
      Za = new t.Ord(function () {
    return Ta;
  }, function (l) {
    return function (Ua) {
      return m.genericCompare(Ea)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))))))))(l)(Ua);
    };
  }),
      cb = new g.Eq(k.genericEq(za)(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqConstructor(k.genericEqNoArguments))))))))))))))))))))))))))),
      Oa = new t.Ord(function () {
    return cb;
  }, function (l) {
    return function (Ua) {
      return m.genericCompare(za)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments))))))))))))))))))))))))))(l)(Ua);
    };
  }),
      db = new g.Eq(k.genericEq(La)(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqConstructor(k.genericEqNoArguments)))))))))))))))))))),
      Xa = new t.Ord(function () {
    return db;
  }, function (l) {
    return function (Ua) {
      return m.genericCompare(La)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))))))))))))(l)(Ua);
    };
  }),
      eb = new h.Enum(function () {
    return Za;
  }, c.genericPred(Ea)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), c.genericSucc(Ea)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      $a = new h.Enum(function () {
    return Oa;
  }, c.genericPred(za)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), c.genericSucc(za)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      fb = new h.Enum(function () {
    return Xa;
  }, c.genericPred(La)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), c.genericSucc(La)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      gb = new e.Bounded(function () {
    return Za;
  }, f.genericBottom(Ea)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(Ea)(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments)))))))))))))))),
      Wa = new e.Bounded(function () {
    return Oa;
  }, f.genericBottom(za)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(za)(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments))))))))))))))))))))))))))),
      hb = new e.Bounded(function () {
    return Xa;
  }, f.genericBottom(La)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(La)(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments))))))))))))))))))));
  e = new h.BoundedEnum(function () {
    return gb;
  }, function () {
    return eb;
  }, c.genericCardinality(Ea)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericFromEnum(Ea)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))), c.genericToEnum(Ea)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))));
  g = new h.BoundedEnum(function () {
    return Wa;
  }, function () {
    return $a;
  }, c.genericCardinality(za)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericFromEnum(za)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))), c.genericToEnum(za)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))))))))))))))))))))))))));
  h = new h.BoundedEnum(function () {
    return hb;
  }, function () {
    return fb;
  }, c.genericCardinality(La)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericFromEnum(La)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))), c.genericToEnum(La)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))))))))))))));
  d.ARK = aa;
  d.ArXiv = U;
  d.Bibcode = M;
  d.DOI = Y;
  d.EAN13 = oa;
  d.EISSN = Ha;
  d.Handle = Ca;
  d.IGSN = Ma;
  d.ISBN = w;
  d.ISSN = da;
  d.ISTC = la;
  d.LISSN = xa;
  d.LSID = na;
  d.PMID = ja;
  d.PURL = ta;
  d.UPC = Ga;
  d.URL = Aa;
  d.URN = Ia;
  d.IsCitedBy = K;
  d.Cites = I;
  d.IsSupplementTo = A;
  d.IsSupplementedBy = O;
  d.IsContinuedBy = N;
  d.Continues = Q;
  d.IsNewVersionOf = H;
  d.IsPreviousVersionOf = X;
  d.IsPartOf = u;
  d.HasPart = ka;
  d.IsReferencedBy = ma;
  d.References = Da;
  d.IsDocumentedBy = Ba;
  d.Documents = ha;
  d.IsCompiledBy = ia;
  d.Compiles = ra;
  d.IsVariantFormOf = S;
  d.IsOriginalFormOf = ca;
  d.IsIdenticalTo = fa;
  d.HasMetadata = wa;
  d.IsMetadataFor = ya;
  d.Reviews = ua;
  d.IsReviewedBy = va;
  d.IsDerivedFrom = Ja;
  d.IsSourceOf = T;
  d.Audiovisual = C;
  d.Dataset = B;
  d.Event = v;
  d.Image = x;
  d.InteractiveResource = p;
  d.Model = D;
  d.PhysicalObject = z;
  d.ResourceCollection = F;
  d.Service = L;
  d.Software = E;
  d.Sound = G;
  d.Text = J;
  d.Workflow = P;
  d.Other = y;
  d.showIdentifierType = n;
  d.boundedEnumIdentifierType = h;
  d.showRelationType = Na;
  d.boundedEnumRelationType = g;
  d.showResourceTypeGeneral = a;
  d.boundedEnumResourceTypeGeneral = e;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var d = a["Effect.Class"],
      e = a["Effect.Console"];

  a["Effect.Class.Console"].log = function (h) {
    var g = d.liftEffect(h);
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
      h = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(h.toDateTime)(e.now);
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
  a.creatorList = "creatorList";
  a.pubyear = "pubyear";
  a.title = "title";
  a.titleList = "titleList";
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
      h = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (g) {
    return d.classList(e.map(e.functorArray)(h.Just.create)(g));
  };
})(PS);

(function (a) {
  a["Metajelo.CSS.UI.ClassNamesPrivate"] = a["Metajelo.CSS.UI.ClassNamesPrivate"] || {};
  a = a["Metajelo.CSS.UI.ClassNamesPrivate"];
  a.page = "page";
  a.date = "date";
  a.recFlexBox = "recFlexBox";
  a.recPreview = "recPreview";
  a.recEditor = "recEditor";
  a.sideBar = "sideBar";
  a.sideBarTab = "sideBarTab";
  a.sideBarGrid = "sideBarGrid";
  a.sideBarMenu = "sideBarMenu";
  a.sideBarCol = "sideBarCol";
  a.prodPreview = "prodPreview";
  a.locPreview = "locPreview";
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
      h = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      g = a["Metajelo.CSS.UI.Util"];
  a = g.mjUiClass(e.versioning);
  var b = g.mjUiClass(e.url),
      f = g.mjUiClass(e.titleList),
      c = g.mjUiClass(e.title),
      k = g.mjUiClass(e.sustainability),
      m = g.mjUiClass(e.superOrg),
      q = g.mjUiClass(h.sideBarTab),
      t = g.mjUiClass(h.sideBar),
      n = g.mjUiClass(h.sideBarMenu),
      r = g.mjUiClass(h.sideBarGrid),
      C = g.mjUiClass(h.sideBarCol),
      B = g.mjUiClass(h.sideBar),
      v = g.mjUiClass(e.resourceTypeGen),
      x = g.mjUiClass(e.resourceTypeDescr),
      p = g.mjUiClass(e.resourceType),
      D = g.mjUiClass(e.resourceMDSource),
      z = g.mjUiClass(e.resourceId),
      F = g.mjUiClass(e.relatedIdsHeader),
      L = g.mjUiClass(e.relatedIds),
      E = g.mjUiClass(e.relatedIdList),
      G = g.mjUiClass(e.relatedId),
      J = g.mjUiClass(e.relType),
      P = g.mjUiClass(e.record),
      y = g.mjUiClass(h.recPreview),
      K = g.mjUiClass(h.recFlexBox),
      I = g.mjUiClass(h.recEditor),
      A = g.mjUiClass(e.pubyear),
      O = g.mjUiClass(e.productsHeader),
      N = g.mjUiClass(e.products),
      Q = g.mjUiClass(e.productList),
      H = g.mjUiClass(e.product),
      X = g.mjUiClass(h.prodPreview),
      u = g.mjUiClass(h.previewButtons),
      ka = g.mjUiClass(e.policyType),
      ma = g.mjUiClass(e.policy),
      Da = g.mjUiClass(h.page),
      Ba = g.mjUiClass(e.missionStatement),
      ha = g.mjUiClass(e.location),
      ia = g.mjUiClass(h.locPreview),
      ra = g.mjUiClass(e.institutionType),
      S = g.mjUiClass(e.institutionPolicy),
      ca = g.mjUiClass(e.institutionPolicies),
      fa = g.mjUiClass(e.institutionName),
      wa = g.mjUiClass(e.institutionId),
      ya = g.mjUiClass(e.institutionContact),
      ua = g.mjUiClass(e.identifier),
      va = g.mjUiClass(e.idType),
      Ja = g.mjUiClass(e.id),
      T = g.mjUiClass(e.fundingStatement),
      aa = g.mjUiClass(e.formatList),
      U = g.mjUiClass(e.format),
      M = g.mjUiClass(h.downloadBtn),
      Y = g.mjUiClass(h.date),
      oa = g.mjUiClass(e.creatorList),
      Ha = g.mjUiClass(e.creator),
      Ca = g.mjUiClass(e.contactType),
      Ma = g.mjUiClass(e.contactEmail);
  h = g.mjUiClass(h.clipBtn);
  var w = g.mjUiClass(e.basicMetadata);
  e = g.mjUiClass(e.applies);
  d.page = Da;
  d.date = Y;
  d.recFlexBox = K;
  d.recPreview = y;
  d.recEditor = I;
  d.sideBar = B;
  d.sideBarNav = t;
  d.sideBarTab = q;
  d.sideBarGrid = r;
  d.sideBarMenu = n;
  d.sideBarCol = C;
  d.prodPreview = X;
  d.locPreview = ia;
  d.downloadBtn = M;
  d.clipBtn = h;
  d.previewButtons = u;
  d.record = P;
  d.product = H;
  d.productList = Q;
  d.productsHeader = O;
  d.products = N;
  d.location = ha;
  d.sustainability = k;
  d.missionStatement = Ba;
  d.fundingStatement = T;
  d.identifier = ua;
  d.id = Ja;
  d.idType = va;
  d.relatedId = G;
  d.relType = J;
  d.relatedIdList = E;
  d.relatedIdsHeader = F;
  d.relatedIds = L;
  d.basicMetadata = w;
  d.creator = Ha;
  d.creatorList = oa;
  d.pubyear = A;
  d.title = c;
  d.titleList = f;
  d.resourceId = z;
  d.resourceType = p;
  d.resourceTypeGen = v;
  d.resourceTypeDescr = x;
  d.resourceMDSource = D;
  d.institutionName = fa;
  d.institutionId = wa;
  d.institutionType = ra;
  d.institutionContact = ya;
  d.contactEmail = Ma;
  d.contactType = Ca;
  d.institutionPolicy = S;
  d.institutionPolicies = ca;
  d.policy = ma;
  d.policyType = ka;
  d.applies = e;
  d.superOrg = m;
  d.versioning = a;
  d.format = U;
  d.formatList = aa;
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
      h = a["Data.Functor"],
      g = a["Metajelo.CSS.Common.Util"],
      b = function b(f) {
    return "metajelo_" + f;
  };

  a = function () {
    var f = h.map(h.functorArray)(b);
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
      h = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      g = a["Metajelo.CSS.Web.Util"];
  a = g.mjWebClass(e.versioning);
  g.mjWebClass(e.url);
  var b = g.mjWebClass(e.title),
      f = g.mjWebClass(e.sustainability),
      c = g.mjWebClass(e.superOrg),
      k = g.mjWebClass(e.resourceTypeGen),
      m = g.mjWebClass(e.resourceTypeDescr),
      q = g.mjWebClass(e.resourceType),
      t = g.mjWebClass(e.resourceId),
      n = g.mjWebClass(e.relatedIdsHeader),
      r = g.mjWebClass(e.relatedIdList),
      C = g.mjWebClass(e.relatedId),
      B = g.mjWebClass(e.relType),
      v = g.mjWebClass(e.recordId),
      x = g.mjWebClass(e.record),
      p = g.mjWebClass(e.pubyear),
      D = g.mjWebClass(e.productsHeader),
      z = g.mjWebClass(e.productList),
      F = g.mjWebClass(h.productGroup),
      L = g.mjWebClass(h.productCitation),
      E = g.mjWebClass(e.product),
      G = g.mjWebClass(e.policyType),
      J = g.mjWebClass(e.policy),
      P = g.cList([e.url, e.missionStatement]),
      y = g.mjWebClass(e.institutionType),
      K = g.mjWebClass(e.institutionPolicy),
      I = g.mjWebClass(e.institutionPolicies),
      A = g.mjWebClass(e.institutionName),
      O = g.mjWebClass(e.institutionId),
      N = g.mjWebClass(e.institutionContact),
      Q = g.mjWebClass(e.identifier),
      H = g.cList([e.url, h.idUrl]),
      X = g.mjWebClass(e.idType),
      u = g.cList([e.url, e.fundingStatement]),
      ka = g.mjWebClass(e.formatList),
      ma = g.mjWebClass(e.format),
      Da = g.mjWebClass(h.errorDisplayBox),
      Ba = g.mjWebClass(h.errorDisplay),
      ha = g.mjWebClass(e.creatorList),
      ia = g.mjWebClass(e.creator),
      ra = g.mjWebClass(e.contactType),
      S = g.mjWebClass(e.contactEmail);
  e = g.mjWebClass(e.basicMetadata);
  h = g.mjWebClass(h.appliesInfo);
  d.productGroup = F;
  d.productCitation = L;
  d.appliesInfo = h;
  d.idUrl = H;
  d.errorDisplayBox = Da;
  d.errorDisplay = Ba;
  d.record = x;
  d.recordId = v;
  d.product = E;
  d.productList = z;
  d.productsHeader = D;
  d.sustainability = f;
  d.missionStatement = P;
  d.fundingStatement = u;
  d.identifier = Q;
  d.idType = X;
  d.relatedId = C;
  d.relType = B;
  d.relatedIdList = r;
  d.relatedIdsHeader = n;
  d.basicMetadata = e;
  d.creator = ia;
  d.creatorList = ha;
  d.pubyear = p;
  d.title = b;
  d.resourceId = t;
  d.resourceType = q;
  d.resourceTypeGen = k;
  d.resourceTypeDescr = m;
  d.institutionName = A;
  d.institutionId = O;
  d.institutionType = y;
  d.institutionContact = N;
  d.contactEmail = S;
  d.contactType = ra;
  d.institutionPolicy = K;
  d.institutionPolicies = I;
  d.policy = J;
  d.policyType = G;
  d.superOrg = c;
  d.versioning = a;
  d.format = ma;
  d.formatList = ka;
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
  var h = e.fromHomogeneous()({
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
  d.descrCTypMap = h;
  d.descrEleMap = g;
  d.descrSTypMap = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var d = a["Metajelo.Types"],
      e = a["Data.Bounded"],
      h = a["Data.Enum"],
      g = a["Data.Eq"],
      b = a["Data.Generic.Rep"],
      f = a["Data.Generic.Rep.Bounded"],
      c = a["Data.Generic.Rep.Enum"],
      k = a["Data.Generic.Rep.Eq"],
      m = a["Data.Generic.Rep.Ord"],
      q = a["Data.Generic.Rep.Show"],
      t = a["Data.Ord"],
      n = a["Data.Show"],
      r = a["Data.Symbol"],
      C = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      B = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      v = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      x = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      p = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      D = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      z = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      F = function () {
    function S() {}

    S.value = new S();
    return S;
  }();

  a = function () {
    function S(ca) {
      this.value0 = ca;
    }

    S.create = function (ca) {
      return new S(ca);
    };

    return S;
  }();

  var L = function () {
    function S(ca) {
      this.value0 = ca;
    }

    S.create = function (ca) {
      return new S(ca);
    };

    return S;
  }(),
      E = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      G = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      J = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      P = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      y = new n.Show(function (S) {
    if (S instanceof E) return "commercial";
    if (S instanceof G) return "non-profit";
    if (S instanceof J) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 102, column 1 - line 105, column 37): " + [S.constructor.name]);
  }),
      K = new n.Show(function (S) {
    return "dataCustodian";
  }),
      I = new b.Generic(function (S) {
    if (S instanceof C) return new b.Inl(b.NoArguments.value);
    if (S instanceof B) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (S instanceof v) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (S instanceof x) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (S instanceof p) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (S instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (S instanceof z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (S instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [S.constructor.name]);
  }, function (S) {
    if (S instanceof b.Inl) return C.value;
    if (S instanceof b.Inr && S.value0 instanceof b.Inl) return B.value;
    if (S instanceof b.Inr && S.value0 instanceof b.Inr && S.value0.value0 instanceof b.Inl) return v.value;
    if (S instanceof b.Inr && S.value0 instanceof b.Inr && S.value0.value0 instanceof b.Inr && S.value0.value0.value0 instanceof b.Inl) return x.value;
    if (S instanceof b.Inr && S.value0 instanceof b.Inr && S.value0.value0 instanceof b.Inr && S.value0.value0.value0 instanceof b.Inr && S.value0.value0.value0.value0 instanceof b.Inl) return p.value;
    if (S instanceof b.Inr && S.value0 instanceof b.Inr && S.value0.value0 instanceof b.Inr && S.value0.value0.value0 instanceof b.Inr && S.value0.value0.value0.value0 instanceof b.Inr && S.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (S instanceof b.Inr && S.value0 instanceof b.Inr && S.value0.value0 instanceof b.Inr && S.value0.value0.value0 instanceof b.Inr && S.value0.value0.value0.value0 instanceof b.Inr && S.value0.value0.value0.value0.value0 instanceof b.Inr && S.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return z.value;
    if (S instanceof b.Inr && S.value0 instanceof b.Inr && S.value0.value0 instanceof b.Inr && S.value0.value0.value0 instanceof b.Inr && S.value0.value0.value0.value0 instanceof b.Inr && S.value0.value0.value0.value0.value0 instanceof b.Inr && S.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return F.value;
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [S.constructor.name]);
  });

  n = new n.Show(function (S) {
    return S instanceof F ? "Terms of Use" : q.genericShow(I)(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Access";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Collection";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Data";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Metadata";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Preservation";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Submission";
    })))(q.genericShowSum(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Quality";
    })))(q.genericShowConstructor(q.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(S);
  });
  var A = new b.Generic(function (S) {
    if (S instanceof E) return new b.Inl(b.NoArguments.value);
    if (S instanceof G) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (S instanceof J) return new b.Inr(new b.Inr(b.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [S.constructor.name]);
  }, function (S) {
    if (S instanceof b.Inl) return E.value;
    if (S instanceof b.Inr && S.value0 instanceof b.Inl) return G.value;
    if (S instanceof b.Inr && S.value0 instanceof b.Inr) return J.value;
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [S.constructor.name]);
  }),
      O = new b.Generic(function (S) {
    return b.NoArguments.value;
  }, function (S) {
    return P.value;
  }),
      N = new g.Eq(k.genericEq(I)(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqConstructor(k.genericEqNoArguments)))))))))),
      Q = new t.Ord(function () {
    return N;
  }, function (S) {
    return function (ca) {
      return m.genericCompare(I)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))(S)(ca);
    };
  }),
      H = new g.Eq(k.genericEq(A)(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqSum(k.genericEqConstructor(k.genericEqNoArguments))(k.genericEqConstructor(k.genericEqNoArguments))))),
      X = new t.Ord(function () {
    return H;
  }, function (S) {
    return function (ca) {
      return m.genericCompare(A)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments))))(S)(ca);
    };
  }),
      u = new g.Eq(k.genericEq(O)(k.genericEqConstructor(k.genericEqNoArguments))),
      ka = new t.Ord(function () {
    return u;
  }, function (S) {
    return function (ca) {
      return m.genericCompare(O)(m.genericOrdConstructor(m.genericOrdNoArguments))(S)(ca);
    };
  }),
      ma = new h.Enum(function () {
    return Q;
  }, c.genericPred(I)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), c.genericSucc(I)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      Da = new h.Enum(function () {
    return X;
  }, c.genericPred(A)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments)))), c.genericSucc(A)(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumSum(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericTopConstructor(f.genericTopNoArguments))(c.genericEnumConstructor(c.genericEnumNoArguments))(f.genericBottomConstructor(f.genericBottomNoArguments)))(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))))),
      Ba = new h.Enum(function () {
    return ka;
  }, c.genericPred(O)(c.genericEnumConstructor(c.genericEnumNoArguments)), c.genericSucc(O)(c.genericEnumConstructor(c.genericEnumNoArguments))),
      ha = new e.Bounded(function () {
    return Q;
  }, f.genericBottom(I)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(I)(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments))))))))));
  g = new h.SmallBounded(function () {
    return ha;
  });
  var ia = new e.Bounded(function () {
    return X;
  }, f.genericBottom(A)(f.genericBottomSum(f.genericBottomConstructor(f.genericBottomNoArguments))), f.genericTop(A)(f.genericTopSum(f.genericTopSum(f.genericTopConstructor(f.genericTopNoArguments))))),
      ra = new e.Bounded(function () {
    return ka;
  }, f.genericBottom(O)(f.genericBottomConstructor(f.genericBottomNoArguments)), f.genericTop(O)(f.genericTopConstructor(f.genericTopNoArguments)));
  e = new h.SmallBounded(function () {
    return ra;
  });
  f = new h.BoundedEnum(function () {
    return ha;
  }, function () {
    return ma;
  }, c.genericCardinality(I)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericFromEnum(I)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))), c.genericToEnum(I)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))))))))));
  k = new h.BoundedEnum(function () {
    return ia;
  }, function () {
    return Da;
  }, c.genericCardinality(A)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericFromEnum(A)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))), c.genericToEnum(A)(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumSum(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments))(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)))));
  h = new h.BoundedEnum(function () {
    return ra;
  }, function () {
    return Ba;
  }, c.genericCardinality(O)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericFromEnum(O)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)), c.genericToEnum(O)(c.genericBoundedEnumConstructor(c.genericBoundedEnumNoArguments)));
  d.DataCustodian = P;
  d.Commercial = E;
  d.NonProfit = G;
  d.Governmental = J;
  d.FreeTextPolicy = a;
  d.RefPolicy = L;
  d.Access = C;
  d.Collection = B;
  d.Data = v;
  d.Metadata = x;
  d.Preservation = p;
  d.Submission = D;
  d.Quality = z;
  d.TermsOfUse = F;
  d.showInstitutionType = y;
  d.boundedEnumInstitutionType = k;
  d.showInstitutionContactType = K;
  d.boundedEnumInstitutionContactType = h;
  d.smallBoundedInstitutionContactType = e;
  d.showPolicyType = n;
  d.boundedEnumPolicyType = f;
  d.smallBoundedPolicyType = g;
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (d) {
    return function (e) {
      return function (h) {
        return function () {
          return h.parseFromString(e, d);
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
      return function (h) {
        return function () {
          return h.getElementsByTagNameNS(d, e);
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
      return function (h) {
        return function () {
          return h.createElementNS(d, e);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (d, e, h, g) {
    if ("undefined" !== typeof window) return h = window[h], null != h && g instanceof h ? e(g) : d;

    for (var b = g; null != b;) {
      b = Object.getPrototypeOf(b);
      var f = b.constructor.name;
      if (f === h) return e(g);
      if ("Object" === f) break;
    }

    return d;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var d = a["Web.Internal.FFI"],
      e = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (h) {
    return function (g) {
      return d._unsafeReadProtoTagged(e.Nothing.value, e.Just.create, h, g);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var d = a["Web.DOM.Document"],
      e = a["Web.DOM.Document"],
      h = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect,
      f = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var c = function () {
    var k = h.map(b.functorEffect)(g.toMaybe);
    return function (m) {
      return k(e._documentElement(m));
    };
  }();

  d.fromNode = a;
  d.toNonElementParentNode = f;
  d.documentElement = c;

  d.getElementsByTagNameNS = function (k) {
    return e._getElementsByTagNameNS(g.toNullable(k));
  };

  d.createElementNS = function (k) {
    return e._createElementNS(g.toNullable(k));
  };

  d.getElementsByTagName = e.getElementsByTagName;
  d.createElement = e.createElement;
})(PS);

(function (a) {
  var d = function d(e) {
    return function (h) {
      return h[e];
    };
  };

  a._prefix = d("prefix");
  a.localName = d("localName");
  a.tagName = d("tagName");

  a.setAttribute = function (e) {
    return function (h) {
      return function (g) {
        return function () {
          g.setAttribute(e, h);
          return {};
        };
      };
    };
  };

  a._getAttribute = function (e) {
    return function (h) {
      return function () {
        return h.getAttribute(e);
      };
    };
  };
})(PS["Web.DOM.Element"] = PS["Web.DOM.Element"] || {});

(function (a) {
  a["Web.DOM.Element"] = a["Web.DOM.Element"] || {};
  var d = a["Web.DOM.Element"],
      e = a["Web.DOM.Element"],
      h = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect,
      f = a["Unsafe.Coerce"],
      c = f.unsafeCoerce;
  f = f.unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  d.fromNode = a;
  d.toNode = f;
  d.toParentNode = c;

  d.prefix = function (k) {
    return g.toMaybe(e._prefix(k));
  };

  d.getAttribute = function (k) {
    var m = h.map(b.functorEffect)(g.toMaybe),
        q = e._getAttribute(k);

    return function (t) {
      return m(q(t));
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
      h = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;

  d.item = function (f) {
    var c = h.map(b.functorEffect)(g.toMaybe),
        k = e._item(f);

    return function (m) {
      return c(k(m));
    };
  };

  d.toArray = e.toArray;
})(PS);

(function (a) {
  var d = function d(e) {
    return function (h) {
      return function () {
        return h[e];
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
    return function (h) {
      return function () {
        h.textContent = e;
        return {};
      };
    };
  };

  a.appendChild = function (e) {
    return function (h) {
      return function () {
        return h.appendChild(e);
      };
    };
  };
})(PS["Web.DOM.Node"] = PS["Web.DOM.Node"] || {});

(function (a) {
  a["Web.DOM.Node"] = a["Web.DOM.Node"] || {};
  var d = a["Web.DOM.Node"],
      e = a["Web.DOM.Node"],
      h = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;

  a = function () {
    var f = h.map(b.functorEffect)(g.toMaybe);
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
      h = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Data.Array"],
      f = a["Data.Either"],
      c = a["Data.Functor"],
      k = a["Data.Maybe"],
      m = a.Effect,
      q = a["Web.DOM.Document"],
      t = a["Web.DOM.Element"],
      n = a["Web.DOM.HTMLCollection"],
      r = a["Web.DOM.Node"],
      C = function C(v) {
    return function (x) {
      if (v instanceof k.Nothing) return new f.Right(x);
      if (v instanceof k.Just) return new f.Left(v.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [v.constructor.name]);
    };
  },
      B = function B(v) {
    return function () {
      var x = g.join(m.bindEffect)(c.map(m.functorEffect)(n.toArray)(q.getElementsByTagName("parsererror")(v)))();
      x = b.head(x);
      x = c.map(k.functorMaybe)(t.toNode)(x);
      if (x instanceof k.Nothing) x = h.pure(m.applicativeEffect)(k.Nothing.value);else if (x instanceof k.Just) x = c.map(m.functorEffect)(k.Just.create)(r.textContent(x.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [x.constructor.name]);
      return x();
    };
  };

  d.parseXMLFromString = function (v) {
    return function (x) {
      return function () {
        var p = e.parseFromString("application/xml")(v)(x)(),
            D = B(p)();
        return C(D)(p);
      };
    };
  };

  d.makeDOMParser = e.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (d) {
    return function (e) {
      return function (h) {
        return function (g) {
          return function (b) {
            return function (f) {
              return function () {
                return f.evaluate(d, e, h, g, b);
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
      h = a["Data.Eq"],
      g = a["Data.Maybe"],
      b = function () {
    function k() {}

    k.value = new k();
    return k;
  }(),
      f = function () {
    function k() {}

    k.value = new k();
    return k;
  }(),
      c = new h.Eq(function (k) {
    return function (m) {
      return k === m;
    };
  });

  d.res2SnapType = function (k) {
    return h.eq(c)(k)(e.unordered_node_snapshot_type) ? new g.Just(b.value) : h.eq(c)(k)(e.ordered_node_snapshot_type) ? new g.Just(f.value) : g.Nothing.value;
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
      h = a["Control.Applicative"],
      g = a["Data.Array"],
      b = a["Data.Functor"],
      f = a["Data.Int"],
      c = a["Data.Maybe"],
      k = a["Data.Monoid"],
      m = a["Data.Natural"],
      q = a["Data.Nullable"],
      t = a["Data.Traversable"],
      n = a.Effect,
      r = a["Web.DOM.Document"],
      C = a["Web.DOM.Document.XPath.ResultType"],
      B = a["Web.DOM.Element"],
      v = a["Web.DOM.Node"],
      x = function () {
    var D = b.map(n.functorEffect)(function (z) {
      return m.intToNat(f.round(z));
    });
    return function (z) {
      return D(e.snapshotLengthInternal(z));
    };
  }(),
      p = function p(D) {
    return function (z) {
      return b.map(n.functorEffect)(q.toMaybe)(e.snapshotItemInternal(D)(f.toNumber(m.natToInt(z))));
    };
  };

  a = function () {
    var D = b.map(n.functorEffect)(q.toMaybe);
    return function (z) {
      return D(e.singleNodeValueInternal(z));
    };
  }();

  d.evaluate = function (D) {
    return function (z) {
      return function (F) {
        return function (L) {
          return function (E) {
            return function (G) {
              return e.evaluateInternal(D)(z)(q.toNullable(F))(L)(q.toNullable(E))(G);
            };
          };
        };
      };
    };
  };

  d.evaluateNumber = function (D) {
    return function (z) {
      return function (F) {
        return function (L) {
          return function (E) {
            return function () {
              var G = e.evaluateInternal(D)(z)(q.toNullable(F))(C.number_type)(q.toNullable(L))(E)();
              return e.numberValue(G)();
            };
          };
        };
      };
    };
  };

  d.evaluateString = function (D) {
    return function (z) {
      return function (F) {
        return function (L) {
          return function (E) {
            return function () {
              var G = e.evaluateInternal(D)(z)(q.toNullable(F))(C.string_type)(q.toNullable(L))(E)();
              return e.stringValue(G)();
            };
          };
        };
      };
    };
  };

  d.evaluateBoolean = function (D) {
    return function (z) {
      return function (F) {
        return function (L) {
          return function (E) {
            return function () {
              var G = e.evaluateInternal(D)(z)(q.toNullable(F))(C.boolean_type)(q.toNullable(L))(E)();
              return e.booleanValue(G)();
            };
          };
        };
      };
    };
  };

  d.singleNodeValue = a;

  d.snapshot = function (D) {
    var z = C.res2SnapType(e.resultType(D)),
        F = p(D);
    z = b.map(c.functorMaybe)(function (L) {
      return function () {
        var E = x(D)();
        E = m.natToInt(E);
        E = b.map(b.functorArray)(m.intToNat)(g.range(0)(E - 1 | 0));
        E = t.sequence(t.traversableArray)(n.applicativeEffect)(b.map(b.functorArray)(F)(E))();
        return g.catMaybes(E);
      };
    })(z);
    if (z instanceof c.Nothing) return h.pure(n.applicativeEffect)(k.mempty(k.monoidArray));
    if (z instanceof c.Just) return z.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [z.constructor.name]);
  };

  d.lookupNamespaceURI = function (D) {
    return function (z) {
      return q.toMaybe(e.lookupNamespaceURIInternal(D)(z));
    };
  };

  d.defaultNSResolver = function (D) {
    return function (z) {
      var F = function F(L) {
        return function () {
          var E = r.documentElement(L)();
          if (E instanceof c.Nothing) return D;
          if (E instanceof c.Just) return B.toNode(E.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [E.constructor.name]);
        };
      };

      return function () {
        var L = v.ownerDocument(D)(),
            E = function () {
          if (L instanceof c.Nothing) {
            var G = r.fromNode(D);
            if (G instanceof c.Nothing) return D;
            if (G instanceof c.Just) return F(G.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [G.constructor.name]);
          }

          if (L instanceof c.Just) return F(L.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [L.constructor.name]);
        }();

        return e.createNSResolver(E)(z);
      };
    };
  };

  d.customNSResolver = e.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var d = a["Metajelo.XPaths"],
      e = a["Control.Applicative"],
      h = a["Control.Bind"],
      g = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      f = a["Data.Either"],
      c = a["Data.Foldable"],
      k = a["Data.Functor"],
      m = a["Data.Maybe"],
      q = a["Data.String.Common"],
      t = a["Data.String.NonEmpty.Internal"],
      n = a["Data.Traversable"],
      r = a["Data.XPath"],
      C = a.Effect,
      B = a["Effect.Exception"],
      v = a["Web.DOM.DOMParser"],
      x = a["Web.DOM.Document"],
      p = a["Web.DOM.Document.XPath"],
      D = a["Web.DOM.Document.XPath.ResultType"],
      z = a["Web.DOM.Element"],
      F = a["Web.DOM.HTMLCollection"],
      L = r.pathAppendNSx(r.stringXPath)(r.root(r.stringXPath))("record");
  a = r.pathAppendNSx(r.stringXPath)(L)("relatedIdentifier");
  var E = r.pathAppendNSx(r.stringXPath)(L)("supplementaryProducts");
  E = r.pathAppendNSx(r.stringXPath)(E)("supplementaryProduct");

  var G = function G(N) {
    return function (Q) {
      return {
        any: function any(H) {
          return function (X) {
            return function (u) {
              return p.evaluate(X)(H)(Q)(u)(m.Nothing.value)(N);
            };
          };
        },
        num: function num(H) {
          return function (X) {
            return p.evaluateNumber(X)(H)(Q)(m.Nothing.value)(N);
          };
        },
        str: function str(H) {
          return function (X) {
            return p.evaluateString(X)(H)(Q)(m.Nothing.value)(N);
          };
        },
        bool: function bool(H) {
          return function (X) {
            return p.evaluateBoolean(X)(H)(Q)(m.Nothing.value)(N);
          };
        },
        nodeMay: function nodeMay(H) {
          return function (X) {
            return h.bind(C.bindEffect)(p.evaluate(X)(H)(Q)(D.any_unordered_node_type)(m.Nothing.value)(N))(p.singleNodeValue);
          };
        }
      };
    };
  },
      J = g["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      P = function P(N) {
    var Q = function Q(H) {
      return function () {
        var X = x.getElementsByTagNameNS(new m.Just(H))("record")(N)();
        return F.item(0)(X)();
      };
    };

    return function () {
      var H = x.getElementsByTagName("record")(N)();
      H = F.item(0)(H)();
      if (H instanceof m.Nothing) H = n.sequence(b.traversableNonEmptyArray)(C.applicativeEffect)(k.map(b.functorNonEmptyArray)(Q)(J))(), H = h.join(m.bindMaybe)(c.find(b.foldableNonEmptyArray)(m.isJust)(H));else if (H instanceof m.Just) H = new m.Just(H.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 277, column 16 - line 281, column 38): " + [H.constructor.name]);
      return k.map(m.functorMaybe)(z.toNode)(H);
    };
  },
      y = r.pathAppendNSx(r.stringXPath)(L)("lastModified"),
      K = r.pathAppendNSx(r.stringXPath)(L)("identifier"),
      I = r.pathAppend(r.stringXPath)(K)(r.at(r.stringXPath)("identifierType")),
      A = function A(N) {
    var Q = function Q(H) {
      return m.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(H);
    };

    if (N instanceof m.Nothing) return e.pure(C.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (N instanceof m.Just) return k.map(C.functorEffect)(Q)(z.getAttribute("xmlns")(N.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 185, column 3 - line 187, column 59): " + [N.constructor.name]);
  },
      O = function O(N) {
    return function (Q) {
      var H = function H(X) {
        return function (u) {
          return function (ka) {
            ka = p.lookupNamespaceURI(X)(ka);
            if (ka instanceof m.Nothing) return u;
            if (ka instanceof m.Just) return ka.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 202, column 39 - line 204, column 20): " + [ka.constructor.name]);
          };
        };
      };

      return function () {
        var X = p.defaultNSResolver(N)(Q)(),
            u = z.fromNode(N);
        u = A(u)();
        return p.customNSResolver(H(X)(u));
      };
    };
  };

  r = r.pathAppendNSx(r.stringXPath)(L)("date");
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
  d.idTypeRootAP = I;
  d.idRootP = K;
  d.dateRootP = r;
  d.lastModRootP = y;
  d.relIdRootP = a;
  d.sProdRootP = E;

  d.getDefaultParseEnv = function (N) {
    return function () {
      var Q = v.makeDOMParser();
      Q = v.parseXMLFromString(N)(Q)();
      if (Q instanceof f.Left) Q = B["throw"]("XML parsing error: " + Q.value0)();else if (Q instanceof f.Right) Q = Q.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 245, column 13 - line 247, column 26): " + [Q.constructor.name]);
      var H = P(Q)();
      if (H instanceof m.Nothing) H = B["throw"]("Could not find <record> node!")();else if (H instanceof m.Just) H = H.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 249, column 14 - line 251, column 23): " + [H.constructor.name]);
      var X = z.fromNode(H);
      if (X instanceof m.Nothing) X = B["throw"]("<record> node could not be cast to an element!")();else if (X instanceof m.Just) X = X.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 252, column 14 - line 254, column 23): " + [X.constructor.name]);
      var u = A(new m.Just(X))(),
          ka = O(H)(Q)();
      ka = G(Q)(new m.Just(ka));
      return {
        doc: Q,
        ns: u,
        recNode: H,
        recElem: X,
        xeval: ka,
        xevalRoot: {
          any: ka.any(H),
          num: ka.num(H),
          str: ka.str(H),
          bool: ka.bool(H),
          nodeMay: ka.nodeMay(H)
        }
      };
    };
  };

  d.unsafeSingleNodeValue = function (N) {
    return function (Q) {
      return function (H) {
        return function () {
          var X = N.xeval.nodeMay(Q)(H)();
          if (X instanceof m.Just) return X.value0;
          if (X instanceof m.Nothing) return B["throw"]("Couldn't find required node at: " + H)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 294, column 3 - line 296, column 40): " + [X.constructor.name]);
        };
      };
    };
  };

  d.readNonEmptyString = function (N) {
    return function (Q) {
      Q = t.fromString(q.trim(Q));
      if (Q instanceof m.Nothing) return f.Left.create("Empty string found for " + N);
      if (Q instanceof m.Just) return new f.Right(Q.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 303, column 3 - line 305, column 26): " + [Q.constructor.name]);
    };
  };

  d.readNonEmptyArray = function (N) {
    return function (Q) {
      Q = g.fromArray(Q);
      if (Q instanceof m.Nothing) return f.Left.create("Empty array found for " + N);
      if (Q instanceof m.Just) return new f.Right(Q.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 310, column 3 - line 312, column 26): " + [Q.constructor.name]);
    };
  };

  d.rightOrThrow = function (N) {
    if (N instanceof f.Right) return e.pure(C.applicativeEffect)(N.value0);
    if (N instanceof f.Left) return B["throw"](N.value0);
    throw Error("Failed pattern match at Metajelo.XPaths (line 315, column 19 - line 317, column 24): " + [N.constructor.name]);
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var d = a["Text.Parsing.StringParser"],
      e = a["Control.Alt"],
      h = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      f = a["Control.Bind"],
      c = a["Control.Monad"],
      k = a["Control.Monad.Rec.Class"],
      m = a["Control.Plus"],
      q = a["Data.Bifunctor"],
      t = a["Data.Boolean"],
      n = a["Data.Either"],
      r = a["Data.Functor"];
  a = a["Data.Show"];

  var C = function () {
    function E(G) {
      this.value0 = G;
    }

    E.create = function (G) {
      return new E(G);
    };

    return E;
  }();

  a = new a.Show(function (E) {
    return E.value0;
  });

  var B = new r.Functor(function (E) {
    return function (G) {
      var J = r.map(n.functorEither)(function (P) {
        return {
          result: E(P.result),
          suffix: P.suffix
        };
      });
      return function (P) {
        return J(G(P));
      };
    };
  }),
      v = function v(E) {
    return function (G) {
      return new n.Left({
        pos: G.pos,
        error: new C(E)
      });
    };
  },
      x = new b.Apply(function () {
    return B;
  }, function (E) {
    return function (G) {
      return function (J) {
        return f.bind(n.bindEither)(E(J))(function (P) {
          return f.bind(n.bindEither)(G(P.suffix))(function (y) {
            return g.pure(n.applicativeEither)({
              result: P.result(y.result),
              suffix: y.suffix
            });
          });
        });
      };
    };
  }),
      p = new f.Bind(function () {
    return x;
  }, function (E) {
    return function (G) {
      return function (J) {
        return f.bind(n.bindEither)(E(J))(function (P) {
          return G(P.result)(P.suffix);
        });
      };
    };
  }),
      D = new g.Applicative(function () {
    return x;
  }, function (E) {
    return function (G) {
      return new n.Right({
        result: E,
        suffix: G
      });
    };
  }),
      z = new c.Monad(function () {
    return D;
  }, function () {
    return p;
  });

  b = new k.MonadRec(function () {
    return z;
  }, function (E) {
    return function (G) {
      var J = function J(P) {
        if (P.result instanceof k.Loop) return new k.Loop({
          state: P.result.value0,
          str: P.suffix
        });
        if (P.result instanceof k.Done) return new k.Done({
          result: P.result.value0,
          suffix: P.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [P.constructor.name]);
      };

      return function (P) {
        return k.tailRecM(k.monadRecEither)(function (y) {
          return r.map(n.functorEither)(J)(E(y.state)(y.str));
        })({
          state: G,
          str: P
        });
      };
    };
  });
  var F = new e.Alt(function () {
    return B;
  }, function (E) {
    return function (G) {
      return function (J) {
        var P = E(J);

        if (P instanceof n.Left) {
          if (J.pos === P.value0.pos) return G(J);
          if (t.otherwise) return new n.Left({
            error: P.value0.error,
            pos: P.value0.pos
          });
        }

        return P;
      };
    };
  }),
      L = new m.Plus(function () {
    return F;
  }, v("No alternative"));
  e = new h.Alternative(function () {
    return D;
  }, function () {
    return L;
  });
  d.ParseError = C;

  d.runParser = function (E) {
    return function (G) {
      return q.bimap(n.bifunctorEither)(function (J) {
        return J.error;
      })(function (J) {
        return J.result;
      })(E({
        str: G,
        pos: 0
      }));
    };
  };

  d.fail = v;

  d["try"] = function (E) {
    return function (G) {
      return q.lmap(n.bifunctorEither)(function (J) {
        return {
          pos: G.pos,
          error: J.error
        };
      })(E(G));
    };
  };

  d.showParseError = a;
  d.functorParser = B;
  d.applyParser = x;
  d.applicativeParser = D;
  d.altParser = F;
  d.alternativeParser = e;
  d.bindParser = p;
  d.monadRecParser = b;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var d = a["Text.Parsing.StringParser.Combinators"],
      e = a["Control.Alt"],
      h = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      f = a["Data.Functor"],
      c = a["Data.NonEmpty"],
      k = a["Data.Unit"],
      m = a["Text.Parsing.StringParser"],
      q = a["Data.List"].manyRec(m.monadRecParser)(m.alternativeParser),
      t = function t(n) {
    return function (r) {
      return new c.NonEmpty(n, r);
    };
  };

  d.many = q;

  d.many1 = function (n) {
    return g.apply(m.applyParser)(f.map(m.functorParser)(t)(n))(q(n));
  };

  d.withError = function (n) {
    return function (r) {
      return e.alt(m.altParser)(n)(m.fail(r));
    };
  };

  d.optional = function (n) {
    return e.alt(m.altParser)(b.bind(m.bindParser)(n)(function (r) {
      return h.pure(m.applicativeParser)(k.unit);
    }))(h.pure(m.applicativeParser)(k.unit));
  };

  d.sepBy1 = function (n) {
    return function (r) {
      return b.bind(m.bindParser)(n)(function (C) {
        return b.bind(m.bindParser)(q(g.applySecond(m.applyParser)(r)(n)))(function (B) {
          return h.pure(m.applicativeParser)(t(C)(B));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var d = a["Text.Parsing.StringParser.CodePoints"],
      e = a["Control.Applicative"],
      h = a["Control.Bind"],
      g = a["Data.Char"],
      b = a["Data.Either"],
      f = a["Data.Enum"],
      c = a["Data.Maybe"],
      k = a["Data.Show"],
      m = a["Data.String.CodePoints"],
      q = a["Data.Unit"],
      t = a["Text.Parsing.StringParser"],
      n = a["Text.Parsing.StringParser.Combinators"],
      r = function () {
    var B = function () {
      var v = f.fromEnum(m.boundedEnumCodePoint);
      return function (x) {
        return g.fromCharCode(v(x));
      };
    }();

    return function (v) {
      var x = m.codePointAt(v.pos)(v.str);

      if (x instanceof c.Just) {
        var p = B(x.value0);
        if (p instanceof c.Just) return new b.Right({
          result: p.value0,
          suffix: {
            str: v.str,
            pos: v.pos + 1 | 0
          }
        });
        if (p instanceof c.Nothing) return new b.Left({
          pos: v.pos,
          error: t.ParseError.create("CodePoint " + (k.show(m.showCodePoint)(x.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [p.constructor.name]);
      }

      if (x instanceof c.Nothing) return new b.Left({
        pos: v.pos,
        error: new t.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [x.constructor.name]);
    };
  }(),
      C = function C(B) {
    return t["try"](h.bind(t.bindParser)(r)(function (v) {
      return B(v) ? e.pure(t.applicativeParser)(v) : t.fail("Character " + (k.show(k.showChar)(v) + " did not satisfy predicate"));
    }));
  };

  d.eof = function (B) {
    return B.pos < m.length(B.str) ? new b.Left({
      pos: B.pos,
      error: new t.ParseError("Expected EOF")
    }) : new b.Right({
      result: q.unit,
      suffix: B
    });
  };

  d.satisfy = C;

  d["char"] = function (B) {
    return n.withError(C(function (v) {
      return v === B;
    }))("Could not match character " + k.show(k.showChar)(B));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var d = a["Text.Email.Parser"],
      e = a["Control.Alt"],
      h = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      f = a["Data.Char"],
      c = a["Data.Foldable"],
      k = a["Data.Functor"],
      m = a["Data.List.Types"],
      q = a["Data.Maybe"],
      t = a["Data.Monoid"],
      n = a["Data.String.CodeUnits"],
      r = a["Data.String.Pattern"],
      C = a["Data.Unit"],
      B = a["Text.Parsing.StringParser"],
      v = a["Text.Parsing.StringParser.CodePoints"],
      x = a["Text.Parsing.StringParser.Combinators"],
      p = function (ca) {
    var fa = q.fromJust();
    return function (wa) {
      return fa(f.fromCharCode(wa));
    };
  }(),
      D = function D(ca) {
    return k.map(B.functorParser)(function () {
      var fa = c.fold(m.foldableNonEmptyList)(t.monoidString),
          wa = k.map(m.functorNonEmptyList)(n.singleton);
      return function (ya) {
        return fa(wa(ya));
      };
    }())(x.many1(v.satisfy(ca)));
  },
      z = function z(ca) {
    return b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(ca))(function () {
      return b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(F(ca)))(function () {
        return h.pure(B.applicativeParser)(C.unit);
      });
    });
  },
      F = function F(ca) {
    return e.alt(B.altParser)(z(ca))(h.pure(B.applicativeParser)(C.unit));
  },
      L = function L(ca) {
    return b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(v.satisfy(ca)))(function () {
      return b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(F(v.satisfy(ca))))(function () {
        return h.pure(B.applicativeParser)(C.unit);
      });
    });
  },
      E = v["char"](p(0)),
      G = v["char"]("\n");

  a = function a(ca) {
    return " " === ca || "\t" === ca;
  };

  var J = v.satisfy(a),
      P = L(a),
      y = function y(ca) {
    return function (fa) {
      return function (wa) {
        return wa >= ca && wa <= fa;
      };
    };
  };

  a = y(p(33))(p(126));

  var K = v.satisfy(a),
      I = function I(ca) {
    return function (fa) {
      return n.contains(r.Pattern(n.singleton(fa)))(ca);
    };
  },
      A = function A(ca) {
    return y(p(1))(p(8))(ca) || y(p(14))(p(31))(ca) || I("\x0B\f\x7F")(ca);
  },
      O = function O(ca) {
    return y(p(33))(p(39))(ca) || y(p(42))(p(91))(ca) || y(p(93))(p(126))(ca) || A(ca);
  },
      N = function N(ca) {
    return y(p(33))(p(90))(ca) || y(p(94))(p(126))(ca) || A(ca);
  },
      Q = v.satisfy(A),
      H = v["char"]("\r"),
      X = k["void"](B.functorParser)(g.applySecond(B.applyParser)(H)(G)),
      u = function () {
    var ca = z(g.applySecond(B.applyParser)(X)(P)),
        fa = g.applySecond(B.applyParser)(P)(x.optional(g.applySecond(B.applyParser)(X)(P)));
    return e.alt(B.altParser)(fa)(ca);
  }(),
      ka = function () {
    var ca = b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(v["char"]("\\")))(function () {
      return e.alt(B.altParser)(e.alt(B.altParser)(e.alt(B.altParser)(e.alt(B.altParser)(e.alt(B.altParser)(K)(J))(G))(H))(Q))(E);
    });
    return b.bind(B.bindParser)(ca)(function (fa) {
      return h.pure(B.applicativeParser)("\\" + n.singleton(fa));
    });
  }(),
      ma = e.alt(B.altParser)(D(function (ca) {
    return I(n.singleton(p(33)))(ca) || y(p(35))(p(91))(ca) || y(p(93))(p(126))(ca) || A(ca);
  }))(ka),
      Da = function () {
    var ca = b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(v["char"]('"')))(function () {
      return b.bind(B.bindParser)(x.many(g.applySecond(B.applyParser)(x.optional(u))(ma)))(function (fa) {
        return b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(x.optional(u)))(function () {
          return b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(v["char"]('"')))(function () {
            return h.pure(B.applicativeParser)(fa);
          });
        });
      });
    });
    return k.map(B.functorParser)(function (fa) {
      return '"' + (c.fold(m.foldableList)(t.monoidString)(fa) + '"');
    })(ca);
  }(),
      Ba = b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(v["char"]("(")))(function () {
    return b.discard(b.discardUnit)(B.bindParser)(F(e.alt(B.altParser)(e.alt(B.altParser)(e.alt(B.altParser)(L(O))(k["void"](B.functorParser)(ka)))(Ba))(u)))(function () {
      return b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(v["char"](")")))(function () {
        return h.pure(B.applicativeParser)(C.unit);
      });
    });
  }),
      ha = F(e.alt(B.altParser)(Ba)(u));

  a = b.discard(b.discardUnit)(B.bindParser)(x.optional(ha))(function () {
    return b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(v["char"]("[")))(function () {
      return b.bind(B.bindParser)(x.many(g.applySecond(B.applyParser)(x.optional(u))(D(N))))(function (ca) {
        return b.discard(b.discardUnit)(B.bindParser)(x.optional(u))(function () {
          return b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(v["char"]("]")))(function () {
            return b.discard(b.discardUnit)(B.bindParser)(x.optional(ha))(function () {
              return h.pure(B.applicativeParser)("[" + (c.fold(m.foldableList)(t.monoidString)(ca) + "]"));
            });
          });
        });
      });
    });
  });

  var ia = function () {
    return D(function (ca) {
      return "0" <= ca && "9" >= ca || "a" <= ca && "z" >= ca || "A" <= ca && "Z" >= ca || I("!#$%&'*+/=?^_`{|}~-")(ca);
    });
  }(),
      ra = function () {
    var ca = b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(x.optional(ha)))(function () {
      return b.bind(B.bindParser)(e.alt(B.altParser)(ia)(Da))(function (fa) {
        return b.discard(b.discardUnit)(B.bindParser)(k["void"](B.functorParser)(x.optional(ha)))(function () {
          return h.pure(B.applicativeParser)(fa);
        });
      });
    });
    ca = x.sepBy1(ca)(v["char"]("."));
    return k.map(B.functorParser)(c.intercalate(m.foldableNonEmptyList)(t.monoidString)("."))(ca);
  }(),
      S = e.alt(B.altParser)(ra)(a);

  a = b.bind(B.bindParser)(ra)(function (ca) {
    return b.bind(B.bindParser)(v["char"]("@"))(function () {
      return b.bind(B.bindParser)(S)(function (fa) {
        return b.bind(B.bindParser)(v.eof)(function () {
          return h.pure(B.applicativeParser)({
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
      h = a["Data.Either"],
      g = a["Data.Show"],
      b = a["Text.Email.Parser"],
      f = a["Text.Parsing.StringParser"];

  a = function () {
    var c = e.lmap(h.bifunctorEither)(g.show(f.showParseError));
    return function (k) {
      k = f.runParser(b.addrSpec)(k);
      return c(k);
    };
  }();

  d.validate = a;
})(PS);

(function (a) {
  a._validateURL = function (d) {
    return function (e) {
      if (!e || !/^https?:\/\//.test(e)) return "Unknown or missing protocol format in url: " + e;
      var h = document.createElement("a");
      h.href = e;

      if (d) {
        if (h.username) return "URL " + e + " contains a username: " + h.username;
        if (h.password) return "URL " + e + " contains a password: " + h.password;
      }

      return /\.[^0-9.]/.test(h.hostname) ? /(\s|^\.|\.$)/.test(h.hostname) ? "Hostname '" + h.href + "' contains whitespace in " + e : h.href.toLowerCase().replace(/\/+$/g, "") !== e.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + e + " doesn't match parsed href " + h.href : "SUCCESS" : "Invalid hostname '" + h.href + "' in " + e;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};

  var d = a["Text.URL.Validate"],
      e = a["Text.URL.Validate"],
      h = a["Data.Either"],
      g = a["Data.Maybe"],
      b = a["Data.String.NonEmpty.Internal"],
      f = function f(c) {
    return function (k) {
      var m = "SUCCESS" === k ? !0 : !1;

      if (m) {
        k = b.fromString(c);
        if (k instanceof g.Just) return new h.Right(k.value0);
        if (k instanceof g.Nothing) return new h.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [k.constructor.name]);
      }

      if (!m) return new h.Left(k);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [m.constructor.name]);
    };
  };

  d.parsePublicURL = function (c) {
    var k = e._validateURL(!0)(c);

    return f(c)(k);
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
      h = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      f = a["Control.Plus"],
      c = a["Data.Array"],
      k = a["Data.Array.NonEmpty"],
      m = a["Data.Bounded"],
      q = a["Data.DateTime"],
      t = a["Data.Either"],
      n = a["Data.Either.Extra"],
      r = a["Data.Functor"],
      C = a["Data.Int"],
      B = a["Data.JSDate"],
      v = a["Data.Maybe"],
      x = a["Data.Natural"],
      p = a["Data.String.CodePoints"],
      D = a["Data.String.CodeUnits"],
      z = a["Data.String.NonEmpty.Internal"],
      F = a["Data.String.Utils"],
      L = a["Data.Traversable"],
      E = a["Data.XPath"],
      G = a["DataCite.Types.Common"],
      J = a.Effect,
      P = a["Effect.Exception"],
      y = a.Global,
      K = a["Metajelo.Types"],
      I = a["Metajelo.XPaths"],
      A = a["Text.Email.Validate"],
      O = a["Text.URL.Validate"],
      N = a["Web.DOM.Document.XPath"],
      Q = a["Web.DOM.Document.XPath.ResultType"],
      H = a["Web.DOM.Element"],
      X = a["Web.DOM.Node"],
      u = a["Web.DOM.NodeList"],
      ka = function ka(w) {
    return "Audiovisual" === w ? e.pure(t.applicativeEither)(G.Audiovisual.value) : "Dataset" === w ? e.pure(t.applicativeEither)(G.Dataset.value) : "Event" === w ? e.pure(t.applicativeEither)(G.Event.value) : "Image" === w ? e.pure(t.applicativeEither)(G.Image.value) : "InteractiveResource" === w ? e.pure(t.applicativeEither)(G.InteractiveResource.value) : "Model" === w ? e.pure(t.applicativeEither)(G.Model.value) : "PhysicalObject" === w ? e.pure(t.applicativeEither)(G.PhysicalObject.value) : "ResourceCollection" === w ? e.pure(t.applicativeEither)(G.ResourceCollection.value) : "Service" === w ? e.pure(t.applicativeEither)(G.Service.value) : "Software" === w ? e.pure(t.applicativeEither)(G.Software.value) : "Sound" === w ? e.pure(t.applicativeEither)(G.Sound.value) : "Text" === w ? e.pure(t.applicativeEither)(G.Text.value) : "Workflow" === w ? e.pure(t.applicativeEither)(G.Workflow.value) : "Other" === w ? e.pure(t.applicativeEither)(G.Other.value) : t.Left.create("Unknown ResourceTypeGeneral: '" + (w + "'"));
  },
      ma = function ma(w) {
    return function (da) {
      return function () {
        var la = I.unsafeSingleNodeValue(w)(da)(E.xx(E.stringXPath)(I.resTypeP))(),
            xa = w.xeval.str(la)(".")();
        la = w.xeval.str(la)(E.at(E.stringXPath)(I.resTypeGenAT))();
        la = I.rightOrThrow(ka(la))();
        return {
          description: xa,
          generalType: la
        };
      };
    };
  },
      Da = function Da(w) {
    return "IsCitedBy" === w ? e.pure(t.applicativeEither)(G.IsCitedBy.value) : "Cites" === w ? e.pure(t.applicativeEither)(G.Cites.value) : "IsSupplementTo" === w ? e.pure(t.applicativeEither)(G.IsSupplementTo.value) : "IsSupplementedBy" === w ? e.pure(t.applicativeEither)(G.IsSupplementedBy.value) : "IsContinuedBy" === w ? e.pure(t.applicativeEither)(G.IsContinuedBy.value) : "Continues" === w ? e.pure(t.applicativeEither)(G.Continues.value) : "IsNewVersionOf" === w ? e.pure(t.applicativeEither)(G.IsNewVersionOf.value) : "IsPreviousVersionOf" === w ? e.pure(t.applicativeEither)(G.IsPreviousVersionOf.value) : "IsPartOf" === w ? e.pure(t.applicativeEither)(G.IsPartOf.value) : "HasPart" === w ? e.pure(t.applicativeEither)(G.HasPart.value) : "IsReferencedBy" === w ? e.pure(t.applicativeEither)(G.IsReferencedBy.value) : "References" === w ? e.pure(t.applicativeEither)(G.References.value) : "IsDocumentedBy" === w ? e.pure(t.applicativeEither)(G.IsDocumentedBy.value) : "Documents" === w ? e.pure(t.applicativeEither)(G.Documents.value) : "IsCompiledBy" === w ? e.pure(t.applicativeEither)(G.IsCompiledBy.value) : "Compiles" === w ? e.pure(t.applicativeEither)(G.Compiles.value) : "IsVariantFormOf" === w ? e.pure(t.applicativeEither)(G.IsVariantFormOf.value) : "IsOriginalFormOf" === w ? e.pure(t.applicativeEither)(G.IsOriginalFormOf.value) : "IsIdenticalTo" === w ? e.pure(t.applicativeEither)(G.IsIdenticalTo.value) : "HasMetadata" === w ? e.pure(t.applicativeEither)(G.HasMetadata.value) : "IsMetadataFor" === w ? e.pure(t.applicativeEither)(G.IsMetadataFor.value) : "Reviews" === w ? e.pure(t.applicativeEither)(G.Reviews.value) : "IsReviewedBy" === w ? e.pure(t.applicativeEither)(G.IsReviewedBy.value) : "IsDerivedFrom" === w ? e.pure(t.applicativeEither)(G.IsDerivedFrom.value) : "IsSourceOf" === w ? e.pure(t.applicativeEither)(G.IsSourceOf.value) : t.Left.create("Unknown RelationType: '" + (w + "'"));
  },
      Ba = function Ba(w) {
    return "Access" === w ? e.pure(t.applicativeEither)(new v.Just(K.Access.value)) : "Collection" === w ? e.pure(t.applicativeEither)(new v.Just(K.Collection.value)) : "Data" === w ? e.pure(t.applicativeEither)(new v.Just(K.Data.value)) : "Metadata" === w ? e.pure(t.applicativeEither)(new v.Just(K.Metadata.value)) : "Preservation" === w ? e.pure(t.applicativeEither)(new v.Just(K.Preservation.value)) : "Submission" === w ? e.pure(t.applicativeEither)(new v.Just(K.Submission.value)) : "Quality" === w ? e.pure(t.applicativeEither)(new v.Just(K.Quality.value)) : "Terms of Use" === w ? e.pure(t.applicativeEither)(new v.Just(K.TermsOfUse.value)) : "" === w ? e.pure(t.applicativeEither)(v.Nothing.value) : t.Left.create("Unknown PolicyType: '" + (w + "'"));
  },
      ha = function ha(w) {
    return function (da) {
      return function (la) {
        return function () {
          var xa = w.xeval.any(la)(E.xx(E.stringXPath)(da))(Q.ordered_node_snapshot_type)();
          xa = N.snapshot(xa)();
          xa = L.traverse(L.traversableArray)(J.applicativeEffect)(function (na) {
            return w.xeval.str(na)(".");
          })(xa)();
          xa = r.map(r.functorArray)(function (na) {
            return I.readNonEmptyString(da)(na);
          })(xa);
          n.catLefts(b.monadArray)(f.plusArray)(xa);
          xa = n.catRights(b.monadArray)(f.plusArray)(xa);
          return I.readNonEmptyArray(da + "s")(xa);
        };
      };
    };
  },
      ia = function ia(w) {
    return "commercial" === w ? e.pure(t.applicativeEither)(K.Commercial.value) : "non-profit" === w ? e.pure(t.applicativeEither)(K.NonProfit.value) : "governmental" === w ? e.pure(t.applicativeEither)(K.Governmental.value) : t.Left.create("Unknown InstitutionType: '" + (w + "'"));
  },
      ra = function ra(w) {
    return "dataCustodian" === w ? e.pure(t.applicativeEither)(new v.Just(K.DataCustodian.value)) : "" === w ? e.pure(t.applicativeEither)(v.Nothing.value) : t.Left.create("Unknown InstitutionContactType: '" + (w + "'"));
  },
      S = function S(w) {
    return "ARK" === w ? e.pure(t.applicativeEither)(G.ARK.value) : "arXiv" === w ? e.pure(t.applicativeEither)(G.ArXiv.value) : "bibcode" === w ? e.pure(t.applicativeEither)(G.Bibcode.value) : "DOI" === w ? e.pure(t.applicativeEither)(G.DOI.value) : "EAN13" === w ? e.pure(t.applicativeEither)(G.EAN13.value) : "EISSN" === w ? e.pure(t.applicativeEither)(G.EISSN.value) : "Handle" === w ? e.pure(t.applicativeEither)(G.Handle.value) : "IGSN" === w ? e.pure(t.applicativeEither)(G.IGSN.value) : "ISBN" === w ? e.pure(t.applicativeEither)(G.ISBN.value) : "ISSN" === w ? e.pure(t.applicativeEither)(G.ISSN.value) : "ISTC" === w ? e.pure(t.applicativeEither)(G.ISTC.value) : "LISSN" === w ? e.pure(t.applicativeEither)(G.LISSN.value) : "LSID" === w ? e.pure(t.applicativeEither)(G.LSID.value) : "PMID" === w ? e.pure(t.applicativeEither)(G.PMID.value) : "PURL" === w ? e.pure(t.applicativeEither)(G.PURL.value) : "UPC" === w ? e.pure(t.applicativeEither)(G.UPC.value) : "URL" === w ? e.pure(t.applicativeEither)(G.URL.value) : "URN" === w ? e.pure(t.applicativeEither)(G.URN.value) : t.Left.create("Unknown IdentifierType: '" + (w + "'"));
  },
      ca = function ca(w) {
    return function (da) {
      var la = function la(na) {
        return function () {
          var ja = w.xeval.str(na)(E.at(E.stringXPath)(I.idTypeAT))();
          return I.rightOrThrow(S(ja))();
        };
      },
          xa = function xa(na) {
        return function () {
          var ja = w.xeval.str(na)(".")();
          return I.rightOrThrow(I.readNonEmptyString("InstitutionID")(ja))();
        };
      };

      return function () {
        var na = I.unsafeSingleNodeValue(w)(da)(E.xx(E.stringXPath)(I.instIdP))(),
            ja = xa(na)();
        na = la(na)();
        return {
          identifier: ja,
          identifierType: na
        };
      };
    };
  },
      fa = function fa(w) {
    var da = function da(ja) {
      return function () {
        var ta = w.xeval.str(ja)(E.at(E.stringXPath)(I.relTypeAT))();
        return I.rightOrThrow(Da(ta))();
      };
    },
        la = function la(ja) {
      return function () {
        var ta = w.xeval.str(ja)(E.at(E.stringXPath)(I.relIdTypeAT))();
        return I.rightOrThrow(S(ta))();
      };
    },
        xa = function xa(ja) {
      return function () {
        var ta = w.xeval.str(ja)(".")();
        return I.rightOrThrow(I.readNonEmptyString("RelatedIdentifier")(ta))();
      };
    },
        na = function na(ja) {
      return function () {
        var ta = xa(ja)(),
            Ga = la(ja)(),
            Aa = da(ja)();
        return {
          identifier: ta,
          identifierType: Ga,
          relationType: Aa
        };
      };
    };

    return function () {
      var ja = w.xevalRoot.any(I.relIdRootP)(Q.ordered_node_snapshot_type)();
      ja = N.snapshot(ja)();
      ja = L.sequence(L.traversableArray)(J.applicativeEffect)(r.map(r.functorArray)(na)(ja))();
      ja = k.fromArray(ja);
      if (ja instanceof v.Just) return ja.value0;
      if (ja instanceof v.Nothing) return P["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 112, column 3 - line 114, column 67): " + [ja.constructor.name]);
    };
  },
      wa = function wa(w) {
    return function (da) {
      var la = function la(ja) {
        return function () {
          var ta = w.xeval.str(ja)(E.at(E.stringXPath)(I.resIdTypeAT))();
          return I.rightOrThrow(S(ta))();
        };
      },
          xa = function xa(ja) {
        return function () {
          var ta = w.xeval.str(ja)(".")();
          return I.rightOrThrow(I.readNonEmptyString("ResourceID")(ta))();
        };
      },
          na = function na(ja) {
        return function (ta) {
          return L.sequence(L.traversableMaybe)(J.applicativeEffect)(g.bind(v.bindMaybe)(ja)(function (Ga) {
            return g.bind(v.bindMaybe)(ta)(function (Aa) {
              return e.pure(v.applicativeMaybe)(h.lift2(J.applyEffect)(function (Ia) {
                return function (Ea) {
                  return {
                    identifier: Ia,
                    identifierType: Ea
                  };
                };
              })(Ga)(Aa));
            });
          }));
        };
      };

      return function () {
        var ja = w.xeval.nodeMay(da)(E.xx(E.stringXPath)(I.resIdP))(),
            ta = r.map(v.functorMaybe)(xa)(ja);
        ja = r.map(v.functorMaybe)(la)(ja);
        return na(ta)(ja)();
      };
    };
  },
      ya = function ya(w) {
    return function () {
      var da = w.xevalRoot.str(I.idRootP)();
      da = I.rightOrThrow(I.readNonEmptyString("Identifier")(da))();
      var la = w.xevalRoot.str(I.idTypeRootAP)();
      la = I.rightOrThrow(S(la))();
      return {
        identifier: da,
        identifierType: la
      };
    };
  },
      ua = function ua(w) {
    return function (da) {
      var la = function la(xa) {
        return function () {
          var na = w.xeval.str(xa)(".")();
          return I.rightOrThrow(I.readNonEmptyString("Format")(na))();
        };
      };

      return function () {
        var xa = w.xeval.any(da)(E.pathAppendNSx(E.stringXPath)(E.xx(E.stringXPath)(I.formatCP))(I.formatP))(Q.ordered_node_snapshot_type)();
        xa = N.snapshot(xa)();
        return L.traverse(L.traversableArray)(J.applicativeEffect)(la)(xa)();
      };
    };
  },
      va = function va(w) {
    return "0" === w ? e.pure(t.applicativeEither)(!1) : "1" === w ? e.pure(t.applicativeEither)(!0) : "false" === w ? e.pure(t.applicativeEither)(!1) : "true" === w ? e.pure(t.applicativeEither)(!0) : t.Left.create("Invalid xs:boolean value: '" + (w + "'"));
  },
      Ja = function Ja(w) {
    return "" === w ? e.pure(t.applicativeEither)(v.Nothing.value) : r.map(t.functorEither)(v.Just.create)(va(w));
  },
      T = function T(w) {
    return function (da) {
      var la = E.pathAppendNSx(E.stringXPath)(E.xx(E.stringXPath)(I.instPolicyCP))(I.instPolicyP),
          xa = function xa(na) {
        return function () {
          var ja = X.childNodes(na)();
          ja = u.toArray(ja)();
          ja = c.head(c.filter(function (za) {
            return !F.startsWith("#")(X.nodeName(za));
          })(ja));
          if (ja instanceof v.Just) var ta = ja.value0;else if (ja instanceof v.Nothing) ta = P["throw"]("Couldn't find child node of " + X.nodeName(na))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 394, column 30 - line 396, column 80): " + [ja.constructor.name]);
          var Ga = w.xeval.str(ta)(".")(),
              Aa = I.rightOrThrow(I.readNonEmptyString("Policy")(Ga))();

          ja = function () {
            var za = r.map(v.functorMaybe)(H.localName)(H.fromNode(ta));
            if (za instanceof v.Just && za.value0 === I.freeTextPolicyP) return new K.FreeTextPolicy(Aa);

            if (za instanceof v.Just && za.value0 === I.refPolicyP) {
              za = O.parsePublicURL(Ga);
              if (za instanceof t.Left) return P["throw"]("In refPolicy URL parsing: " + za.value0)();
              if (za instanceof t.Right) return new K.RefPolicy(za.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 401, column 37 - line 403, column 45): " + [za.constructor.name]);
            }

            if (za instanceof v.Just) return P["throw"]("invalid element '" + (za.value0 + "' as child of institutionPolicy"))();
            if (za instanceof v.Nothing) return P["throw"]("unable to convert policy child Node with name '" + (X.nodeName(ta) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 399, column 17 - line 407, column 56): " + [za.constructor.name]);
          }();

          var Ia = w.xeval.str(na)(E.at(E.stringXPath)(I.polTypeAT))();
          Ia = I.rightOrThrow(Ba(Ia))();
          var Ea = w.xeval.str(na)(E.at(E.stringXPath)(I.appliesToProdAT))();
          Ea = I.rightOrThrow(Ja(Ea))();
          return {
            policy: ja,
            policyType: Ia,
            appliesToProduct: Ea
          };
        };
      };

      return function () {
        var na = w.xeval.any(da)(la)(Q.ordered_node_snapshot_type)();
        na = N.snapshot(na)();
        na = L.sequence(L.traversableArray)(J.applicativeEffect)(r.map(r.functorArray)(xa)(na))();
        na = k.fromArray(na);
        if (na instanceof v.Just) return na.value0;
        if (na instanceof v.Nothing) return P["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 381, column 3 - line 383, column 67): " + [na.constructor.name]);
      };
    };
  },
      aa = function aa(w) {
    return function (da) {
      var la = function la(na) {
        return function () {
          var ja = w.xeval.str(na)(E.xx(E.stringXPath)(I.pubYearP))();
          ja = I.rightOrThrow(I.readNonEmptyString("PubYear")(ja))();
          return x.intToNat(C.round(y.readInt(10)(z.toString(ja))));
        };
      },
          xa = E.xx(E.stringXPath)(I.basicMetaP);

      return function () {
        var na = I.unsafeSingleNodeValue(w)(da)(xa)(),
            ja = g.bindFlipped(J.bindEffect)(I.rightOrThrow)(ha(w)(I.titleP)(na))(),
            ta = g.bindFlipped(J.bindEffect)(I.rightOrThrow)(ha(w)(I.creatorP)(na))();
        na = la(na)();
        return {
          titles: ja,
          creators: ta,
          publicationYear: na
        };
      };
    };
  },
      U = function U(w) {
    var da = z.toString(w);
    return function () {
      var la = D.stripSuffix("Z")(da);
      if (la instanceof v.Just) la = 10 >= p.length(la.value0) ? la.value0 + "T00:00:00.000Z" : da;else if (la instanceof v.Nothing) la = da;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 98, column 24 - line 100, column 23): " + [la.constructor.name]);
      la = B.parse(la)();
      return v.fromMaybe(m.bottom(q.boundedDateTime))(B.toDateTime(la));
    };
  },
      M = function M(w) {
    return function () {
      var da = w.xevalRoot.str(I.dateRootP)();
      da = I.rightOrThrow(I.readNonEmptyString("Date")(da))();
      return U(da)();
    };
  },
      Y = function Y(w) {
    return function () {
      var da = w.xevalRoot.str(I.lastModRootP)();
      da = I.rightOrThrow(I.readNonEmptyString("ModDate")(da))();
      return U(da)();
    };
  },
      oa = function oa(w) {
    return function (da) {
      return function (la) {
        return function () {
          var xa = w.xeval.str(la)(da)();
          xa = O.parsePublicURL(xa);
          if (xa instanceof t.Left) return P["throw"](xa.value0)();
          if (xa instanceof t.Right) return xa.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 442, column 3 - line 444, column 26): " + [xa.constructor.name]);
        };
      };
    };
  },
      Ha = function Ha(w) {
    return function (da) {
      var la = function la(ta) {
        return function () {
          var Ga = ta();
          return I.rightOrThrow(I.readNonEmptyString("SuperOrg")(Ga))();
        };
      },
          xa = function xa(ta) {
        return function () {
          var Ga = w.xeval.nodeMay(ta)(E.xx(E.stringXPath)(I.superOrgNameP))();
          return L.traverse(L.traversableMaybe)(J.applicativeEffect)(function (Aa) {
            return la(w.xeval.str(Aa)("."));
          })(Ga)();
        };
      },
          na = function na(ta) {
        return function () {
          var Ga = I.unsafeSingleNodeValue(w)(ta)(E.xx(E.stringXPath)(I.instSustainP))(),
              Aa = oa(w)(E.xx(E.stringXPath)(I.missionUrlP))(Ga)();
          Ga = oa(w)(E.xx(E.stringXPath)(I.fundingUrlP))(Ga)();
          return {
            missionStatementURL: Aa,
            fundingStatementURL: Ga
          };
        };
      },
          ja = function ja(ta) {
        var Ga = E.xx(E.stringXPath)(I.instContactP);
        return function () {
          var Aa = I.unsafeSingleNodeValue(w)(ta)(Ga)(),
              Ia = w.xeval.str(Aa)(E.at(E.stringXPath)(I.instContactTypeAT))();
          Ia = I.rightOrThrow(ra(Ia))();
          Aa = w.xeval.str(Aa)(".")();
          Aa = A.validate(Aa);
          if (Aa instanceof t.Left) Aa = P["throw"]("Error in validating email address for InstitutionContact: " + Aa.value0)();else if (Aa instanceof t.Right) Aa = Aa.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 345, column 23 - line 349, column 28): " + [Aa.constructor.name]);
          return {
            emailAddress: Aa,
            contactType: Ia
          };
        };
      };

      return function () {
        var ta = I.unsafeSingleNodeValue(w)(da)(E.xx(E.stringXPath)(I.locP))(),
            Ga = ca(w)(ta)(),
            Aa = g.join(J.bindEffect)(r.mapFlipped(J.functorEffect)(w.xeval.str(ta)(E.xx(E.stringXPath)(I.instNameP)))(function (Ta) {
          return I.rightOrThrow(I.readNonEmptyString("Institution Name")(Ta));
        }))(),
            Ia = w.xeval.str(ta)(E.xx(E.stringXPath)(I.instTypeP))();
        Ia = I.rightOrThrow(ia(Ia))();
        var Ea = xa(ta)(),
            za = ja(ta)(),
            Na = na(ta)(),
            La = T(w)(ta)();
        ta = w.xeval.str(ta)(E.xx(E.stringXPath)(I.versioningP))();
        ta = I.rightOrThrow(va(ta))();
        return {
          institutionID: Ga,
          institutionName: Aa,
          institutionType: Ia,
          superOrganizationName: Ea,
          institutionContact: za,
          institutionSustainability: Na,
          institutionPolicies: La,
          versioning: ta
        };
      };
    };
  },
      Ca = function Ca(w) {
    return function (da) {
      var la = function la(na) {
        return function () {
          var ja = w.xeval.str(na)(E.at(E.stringXPath)(I.relTypeAT))();
          return I.rightOrThrow(Da(ja))();
        };
      },
          xa = function xa(na) {
        return function (ja) {
          return L.sequence(L.traversableMaybe)(J.applicativeEffect)(g.bind(v.bindMaybe)(na)(function (ta) {
            return g.bind(v.bindMaybe)(ja)(function (Ga) {
              return e.pure(v.applicativeMaybe)(h.lift2(J.applyEffect)(function (Aa) {
                return function (Ia) {
                  return {
                    url: Aa,
                    relationType: Ia
                  };
                };
              })(ta)(Ga));
            });
          }));
        };
      };

      return function () {
        var na = w.xeval.nodeMay(da)(E.xx(E.stringXPath)(I.resMetaSourceP))(),
            ja = r.map(v.functorMaybe)(oa(w)("."))(na);
        na = r.map(v.functorMaybe)(la)(na);
        return xa(ja)(na)();
      };
    };
  },
      Ma = function Ma(w) {
    var da = function da(la) {
      return function () {
        var xa = aa(w)(la)(),
            na = wa(w)(la)(),
            ja = ma(w)(la)(),
            ta = ua(w)(la)(),
            Ga = Ca(w)(la)(),
            Aa = Ha(w)(la)();
        return {
          basicMetadata: xa,
          resourceID: na,
          resourceType: ja,
          format: ta,
          resourceMetadataSource: Ga,
          location: Aa
        };
      };
    };

    return function () {
      var la = w.xevalRoot.any(I.sProdRootP)(Q.ordered_node_snapshot_type)();
      la = N.snapshot(la)();
      la = L.sequence(L.traversableArray)(J.applicativeEffect)(r.map(r.functorArray)(da)(la))();
      la = k.fromArray(la);
      if (la instanceof v.Just) return la.value0;
      if (la instanceof v.Nothing) return P["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 170, column 3 - line 172, column 70): " + [la.constructor.name]);
    };
  };

  d.readRecord = function (w) {
    return function () {
      var da = ya(w)(),
          la = M(w)(),
          xa = Y(w)(),
          na = fa(w)(),
          ja = Ma(w)();
      return {
        identifier: da,
        date: la,
        lastModified: xa,
        relatedIdentifiers: na,
        supplementaryProducts: ja
      };
    };
  };

  d.readIdentifierType = S;
  d.parseDate = U;
  d.readRelationType = Da;
  d.readResourceTypeGeneral = ka;
  d.readInstitutionType = ia;
  d.readInstitutionContactType = ra;
  d.readPolicyType = Ba;
  d.readBoolean = va;
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
      h = a["Data.Array.NonEmpty.Internal"],
      g = a["Data.Foldable"],
      b = a["Data.Functor"],
      f = a["Data.JSDate"],
      c = a["Data.Maybe"],
      k = a["Data.Natural"],
      m = a["Data.Show"],
      q = a["Data.Traversable"],
      t = a["Data.Unit"],
      n = a["Data.XPath"],
      r = a["DataCite.Types.Common"],
      C = a.Effect,
      B = a["Metajelo.Types"],
      v = a["Metajelo.XPaths"],
      x = a["Nonbili.DOM"],
      p = a["Text.Email.Parser"],
      D = a["Text.URL.Validate"],
      z = a["Web.DOM.Document"],
      F = a["Web.DOM.Element"],
      L = a["Web.DOM.Node"],
      E = function E(T) {
    return function (aa) {
      return function (U) {
        return function (M) {
          var Y = F.fromNode(U);
          return function () {
            q.sequence(q.traversableMaybe)(C.applicativeEffect)(b.mapFlipped(c.functorMaybe)(Y)(function (oa) {
              return F.setAttribute(T)(m.show(r.showIdentifierType)(M))(oa);
            }))();
            return t.unit;
          };
        };
      };
    };
  },
      G = a["Data.String.NonEmpty.Internal"].toString,
      J = function J(T) {
    return function (aa) {
      return function (U) {
        return function (M) {
          return function () {
            L.setTextContent(G(M.identifier))(U)();
            return E(T)(aa)(U)(M.identifierType)();
          };
        };
      };
    };
  },
      P = function P(T) {
    return function (aa) {
      return function () {
        var U = v.unsafeSingleNodeValue(T)(T.recNode)(n.xx(n.stringXPath)(v.idP))();
        return J(v.idTypeAT)(T)(U)(aa)();
      };
    };
  },
      y = function y(T) {
    return function (aa) {
      return function () {
        q.sequence(q.traversableMaybe)(C.applicativeEffect)(b.map(c.functorMaybe)(L.setTextContent(G(T)))(aa))();
        return t.unit;
      };
    };
  },
      K = function K(T) {
    return function () {
      var aa = f.toISOString(f.fromDateTime(T))();
      return v.rightOrThrow(v.readNonEmptyString("(generic date)")(aa))();
    };
  },
      I = function I(T) {
    return function (aa) {
      return function () {
        var U = K(aa)(),
            M = T.xevalRoot.nodeMay(v.dateRootP)();
        return y(U)(M)();
      };
    };
  },
      A = function A(T) {
    return function (aa) {
      return function () {
        var U = K(aa)(),
            M = T.xevalRoot.nodeMay(v.lastModRootP)();
        return y(U)(M)();
      };
    };
  },
      O = function O(T) {
    return function (aa) {
      var U = F.prefix(T.recElem);
      return function () {
        if (U instanceof c.Just) var M = U.value0 + ":";else if (U instanceof c.Nothing) M = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 250, column 20 - line 252, column 18): " + [U.constructor.name]);
        M += aa;
        return z.createElementNS(new c.Just(T.ns))(M)(T.doc)();
      };
    };
  },
      N = function N(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = O(T)(U)();
          L.appendChild(F.toNode(M))(aa)();
          return M;
        };
      };
    };
  },
      Q = function Q(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = N(T)(aa)(v.instContactP)();
          q.sequence(q.traversableMaybe)(C.applicativeEffect)(b.mapFlipped(c.functorMaybe)(U.contactType)(function (Y) {
            return F.setAttribute(v.instContactTypeAT)(m.show(B.showInstitutionContactType)(Y))(M);
          }))();
          return L.setTextContent(p.toString(U.emailAddress))(F.toNode(M))();
        };
      };
    };
  },
      H = function H(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = b.map(C.functorEffect)(F.toNode)(N(T)(aa)(v.instIdP))();
          return J(v.idTypeAT)(T)(M)(U)();
        };
      };
    };
  },
      X = function X(T) {
    return function (aa) {
      return g.for_(C.applicativeEffect)(h.foldableNonEmptyArray)(aa)(function (U) {
        return function () {
          var M = N(T)(T.recNode)(v.relIdP)(),
              Y = F.toNode(M);
          L.setTextContent(G(U.identifier))(Y)();
          F.setAttribute(v.relIdTypeAT)(m.show(r.showIdentifierType)(U.identifierType))(M)();
          return F.setAttribute(v.relTypeAT)(m.show(r.showRelationType)(U.relationType))(M)();
        };
      });
    };
  },
      u = function u(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = b.map(C.functorEffect)(F.toNode)(N(T)(aa)(v.resIdP))();
          return J(v.resIdTypeAT)(T)(M)(U)();
        };
      };
    };
  },
      ka = function ka(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = N(T)(aa)(v.resMetaSourceP)();
          L.setTextContent(D.urlToString(U.url))(F.toNode(M))();
          return F.setAttribute(v.relTypeAT)(m.show(r.showRelationType)(U.relationType))(M)();
        };
      };
    };
  },
      ma = function ma(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = N(T)(aa)(v.resTypeP)();
          L.setTextContent(U.description)(F.toNode(M))();
          return F.setAttribute(v.resTypeGenAT)(m.show(r.showResourceTypeGeneral)(U.generalType))(M)();
        };
      };
    };
  },
      Da = function Da(T) {
    return function (aa) {
      return function (U) {
        return function (M) {
          return function () {
            var Y = b.map(C.functorEffect)(F.toNode)(N(aa)(U)(T))();
            return L.setTextContent(M)(Y)();
          };
        };
      };
    };
  },
      Ba = function Ba(T) {
    return function (aa) {
      return function (U) {
        return function (M) {
          return Da(T)(aa)(U)(G(M));
        };
      };
    };
  },
      ha = function ha(T) {
    return function (aa) {
      return function (U) {
        return g.for_(C.applicativeEffect)(h.foldableNonEmptyArray)(U)(function (M) {
          return Ba(v.creatorP)(T)(aa)(M);
        });
      };
    };
  },
      ia = function ia(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = b.map(C.functorEffect)(F.toNode)(N(T)(aa)(v.formatCP))();
          return g.for_(C.applicativeEffect)(g.foldableArray)(U)(function (Y) {
            return Ba(v.formatP)(T)(M)(Y);
          })();
        };
      };
    };
  },
      ra = function ra(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = N(T)(aa)(v.instPolicyP)(),
              Y = F.toNode(M);
          q.sequence(q.traversableMaybe)(C.applicativeEffect)(b.mapFlipped(c.functorMaybe)(U.policyType)(function (oa) {
            return F.setAttribute(v.polTypeAT)(m.show(B.showPolicyType)(oa))(M);
          }))();
          q.sequence(q.traversableMaybe)(C.applicativeEffect)(b.mapFlipped(c.functorMaybe)(U.appliesToProduct)(function (oa) {
            return F.setAttribute(v.appliesToProdAT)(m.show(m.showBoolean)(oa))(M);
          }))();
          if (U.policy instanceof B.FreeTextPolicy) return Ba(v.freeTextPolicyP)(T)(Y)(U.policy.value0)();
          if (U.policy instanceof B.RefPolicy) return Ba(v.refPolicyP)(T)(Y)(D.urlToNEString(U.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 217, column 3 - line 220, column 27): " + [U.policy.constructor.name]);
        };
      };
    };
  },
      S = function S(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = b.map(C.functorEffect)(F.toNode)(N(T)(aa)(v.instPolicyCP))();
          return g.for_(C.applicativeEffect)(h.foldableNonEmptyArray)(U)(function (Y) {
            return ra(T)(M)(Y);
          })();
        };
      };
    };
  },
      ca = function ca(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = b.map(C.functorEffect)(F.toNode)(N(T)(aa)(v.instSustainP))();
          Ba(v.missionUrlP)(T)(M)(D.urlToNEString(U.missionStatementURL))();
          return Ba(v.fundingUrlP)(T)(M)(D.urlToNEString(U.fundingStatementURL))();
        };
      };
    };
  },
      fa = function fa(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = N(T)(aa)(v.locP)(),
              Y = F.toNode(M);
          H(T)(Y)(U.institutionID)();
          Ba(v.instNameP)(T)(Y)(U.institutionName)();
          Da(v.instTypeP)(T)(Y)(m.show(B.showInstitutionType)(U.institutionType))();
          q.sequence(q.traversableMaybe)(C.applicativeEffect)(b.mapFlipped(c.functorMaybe)(U.superOrganizationName)(function (oa) {
            return Ba(v.superOrgNameP)(T)(Y)(oa);
          }))();
          Q(T)(Y)(U.institutionContact)();
          ca(T)(Y)(U.institutionSustainability)();
          S(T)(Y)(U.institutionPolicies)();
          return Da(v.versioningP)(T)(Y)(m.show(m.showBoolean)(U.versioning))();
        };
      };
    };
  },
      wa = function wa(T) {
    return function (aa) {
      return function (U) {
        return g.for_(C.applicativeEffect)(h.foldableNonEmptyArray)(U)(function (M) {
          return Ba(v.titleP)(T)(aa)(M);
        });
      };
    };
  },
      ya = function ya(T) {
    return function (aa) {
      return function (U) {
        return function () {
          var M = b.map(C.functorEffect)(F.toNode)(N(T)(aa)(v.basicMetaP))();
          wa(T)(M)(U.titles)();
          ha(T)(M)(U.creators)();
          M = b.map(C.functorEffect)(F.toNode)(N(T)(M)(v.pubYearP))();
          return L.setTextContent(m.show(k.showNatural)(U.publicationYear))(M)();
        };
      };
    };
  },
      ua = function ua(T) {
    return function (aa) {
      return function () {
        var U = v.unsafeSingleNodeValue(T)(T.recNode)(n.xx(n.stringXPath)(v.sProdCP))(),
            M = b.map(C.functorEffect)(F.toNode)(N(T)(U)(v.sProdP))();
        ya(T)(M)(aa.basicMetadata)();
        q.sequence(q.traversableMaybe)(C.applicativeEffect)(b.mapFlipped(c.functorMaybe)(aa.resourceID)(function (Y) {
          return u(T)(M)(Y);
        }))();
        ma(T)(M)(aa.resourceType)();
        ia(T)(M)(aa.format)();
        q.sequence(q.traversableMaybe)(C.applicativeEffect)(b.mapFlipped(c.functorMaybe)(aa.resourceMetadataSource)(function (Y) {
          return ka(T)(M)(Y);
        }))();
        return fa(T)(M)(aa.location)();
      };
    };
  },
      va = function va(T) {
    return function (aa) {
      return g.for_(C.applicativeEffect)(h.foldableNonEmptyArray)(aa)(function (U) {
        return ua(T)(U);
      });
    };
  },
      Ja = function Ja(T) {
    return function (aa) {
      return function () {
        P(T)(aa.identifier)();
        I(T)(aa.date)();
        A(T)(aa.lastModified)();
        X(T)(aa.relatedIdentifiers)();
        return va(T)(aa.supplementaryProducts)();
      };
    };
  };

  d.recordToString = function (T) {
    return function () {
      var aa = v.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      Ja(aa)(T)();
      aa = z.documentElement(aa.doc)();
      return c.maybe(e.pure(C.applicativeEffect)(""))(x.outerHTML)(aa)();
    };
  };

  d.dateTimeToStr = K;
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
      h = a["Data.Symbol"];

  a = function (g) {
    return function (b) {
      return function (f) {
        return function (c) {
          return e.unsafeGet(h.reflectSymbol(b)(f))(c);
        };
      };
    };
  }()(new h.IsSymbol(function () {
    return "target";
  }))(h.SProxy.value);

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
      h = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("HTMLInputElement");

  var f = function () {
    var c = h.map(b.functorEffect)(g.toMaybe);
    return function (k) {
      return c(e._files(k));
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
      h = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      f = a["Concur.React.DOM"],
      c = a["Concur.React.Props"],
      k = a["Control.Alt"],
      m = a["Control.Applicative"],
      q = a["Control.Apply"],
      t = a["Control.Bind"],
      n = a["Control.Cofree"],
      r = a["Control.Plus"],
      C = a["Data.Array"],
      B = a["Data.Array.NonEmpty"],
      v = a["Data.Bifunctor"],
      x = a["Data.Bounded"],
      p = a["Data.Either"],
      D = a["Data.Enum"],
      z = a["Data.Eq"],
      F = a["Data.Foldable"],
      L = a["Data.Functor"],
      E = a["Data.Generic.Rep"],
      G = a["Data.Generic.Rep.Bounded"],
      J = a["Data.Generic.Rep.Enum"],
      P = a["Data.Generic.Rep.Eq"],
      y = a["Data.Generic.Rep.Ord"],
      K = a["Data.Generic.Rep.Show"],
      I = a["Data.Int"],
      A = a["Data.Maybe"],
      O = a["Data.Monoid"],
      N = a["Data.Natural"],
      Q = a["Data.Ord"],
      H = a["Data.Profunctor.Strong"],
      X = a["Data.Semigroup"],
      u = a["Data.Show"],
      ka = a["Data.String.Common"],
      ma = a["Data.String.NonEmpty.Internal"],
      Da = a["Data.Symbol"],
      Ba = a["Data.Traversable"],
      ha = a["Data.Tuple"],
      ia = a["Data.Unfoldable1"],
      ra = a["Data.Unit"],
      S = a["DataCite.Types.Common"],
      ca = a.Effect,
      fa = a["Effect.Class"],
      wa = a["Effect.Exception"],
      ya = a["Effect.Now"],
      ua = a["Effect.Unsafe"],
      va = a["Foreign.Object"],
      Ja = a.Global,
      T = a["Metajelo.SchemaInfo"],
      aa = a["Metajelo.Types"],
      U = a["Metajelo.XPaths.Read"],
      M = a["Metajelo.XPaths.Write"],
      Y = a["React.SyntheticEvent"],
      oa = a["Text.Email.Parser"],
      Ha = a["Text.Email.Validate"],
      Ca = a["Text.URL.Validate"],
      Ma = a["Web.DOM.Document"],
      w = a["Web.DOM.Element"],
      da = a["Web.DOM.HTMLCollection"],
      la = a["Web.DOM.NonElementParentNode"],
      xa = a["Web.DOM.ParentNode"],
      na = a["Web.HTML"],
      ja = a["Web.HTML.HTMLDocument"],
      ta = a["Web.HTML.HTMLInputElement"],
      Ga = a["Web.HTML.Window"],
      Aa = function () {
    function W() {}

    W.value = new W();
    return W;
  }(),
      Ia = function () {
    function W() {}

    W.value = new W();
    return W;
  }(),
      Ea = function () {
    function W(Z) {
      this.value0 = Z;
    }

    W.create = function (Z) {
      return new W(Z);
    };

    return W;
  }(),
      za = function () {
    function W(Z) {
      this.value0 = Z;
    }

    W.create = function (Z) {
      return new W(Z);
    };

    return W;
  }(),
      Na = function Na(W, Z, R) {
    this.fromOptionValue = W;
    this.toOptionLabel = Z;
    this.toOptionValue = R;
  },
      La = function La() {
    var W = na.window();
    W = Ga.document(W)();
    return ja.toDocument(W);
  },
      Ta = function Ta(W) {
    if (W instanceof Ea || W instanceof za) return W.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 375, column 1 - line 375, column 34): " + [W.constructor.name]);
  },
      Za = function Za(W) {
    return f.input(h.widgetLiftWidget)([c.defaultValue(W), L.map(g.functorProps)(c.unsafeTargetValue)(c.onChange)]);
  },
      cb = function cb(W) {
    return t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(W)(function (Z) {
      return m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(ma.fromString(ka.trim(Z)));
    });
  },
      Oa = function Oa(W) {
    return function (Z) {
      Z = va.lookup(W)(Z);
      if (Z instanceof A.Just) return Z.value0;
      if (Z instanceof A.Nothing) return "";
      throw Error("Failed pattern match at Metajelo.FormUtil (line 89, column 21 - line 91, column 16): " + [Z.constructor.name]);
    };
  },
      db = function db(W) {
    var Z = W ? "Hide Descriptions" : "Show Descriptions";
    return f.div_(b.widgetShiftMap)([])(L.voidRight(b.widgetFunctor)(!W)(f.button_(b.widgetShiftMap)([c.onClick])(f.text(h.widgetLiftWidget)(Z))));
  },
      Xa = function Xa(W) {
    return e.step(W)(t.bind(b.widgetBind)(db(W))(function (Z) {
      return m.pure(b.widgetApplicative)(Xa(Z));
    }));
  },
      eb = function eb(W) {
    return function (Z) {
      return function (R) {
        return function () {
          var V = La();
          V = Ma.toNonElementParentNode(V);
          V = la.getElementById(W)(V)();
          if (V instanceof A.Just) return V = w.toParentNode(V.value0), V = xa.children(V)(), V = da.toArray(V)(), V = C.filter(function (ba) {
            return w.tagName(ba) === Z;
          })(V), V = C.catMaybes(L.map(L.functorArray)(ta.fromElement)(V)), F.for_(ca.applicativeEffect)(F.foldableArray)(V)(ta.setValue(R))();
          if (V instanceof A.Nothing) return ra.unit;
          throw Error("Failed pattern match at Metajelo.FormUtil (line 504, column 3 - line 517, column 25): " + [V.constructor.name]);
        };
      };
    };
  },
      $a = function $a(W) {
    return function (Z) {
      return Z < W ? [] : C.range(W)(Z);
    };
  },
      fb = function fb(W) {
    return "FreeTextPolicy" === W ? m.pure(p.applicativeEither)(Aa.value) : "RefPolicy" === W ? m.pure(p.applicativeEither)(Ia.value) : p.Left.create("Unknown Policy: '" + (W + "'"));
  },
      gb = va.unions(F.foldableArray)([T.descrAttrMap, T.descrCTypMap, T.descrEleMap, T.descrSTypMap]),
      Wa = function Wa(W) {
    return function (Z) {
      return F.fold(F.foldableMaybe)(O.monoidString)(L.map(A.functorMaybe)(u.show(W))(Z));
    };
  },
      hb = new Na(function (W) {
    return A.fromJust()(p.hush(U.readResourceTypeGeneral(W)));
  }, u.show(S.showResourceTypeGeneral), u.show(S.showResourceTypeGeneral)),
      l = new Na(function (W) {
    return A.fromJust()(p.hush(U.readRelationType(W)));
  }, u.show(S.showRelationType), u.show(S.showRelationType)),
      Ua = new Na(function (W) {
    return A.fromJust()(p.hush(U.readInstitutionType(W)));
  }, u.show(aa.showInstitutionType), u.show(aa.showInstitutionType)),
      rb = new Na(function (W) {
    return A.fromJust()(p.hush(U.readIdentifierType(W)));
  }, u.show(S.showIdentifierType), u.show(S.showIdentifierType)),
      sb = function sb(W) {
    return W instanceof Ea ? !0 : !1;
  },
      Pa = new E.Generic(function (W) {
    if (W instanceof Aa) return new E.Inl(E.NoArguments.value);
    if (W instanceof Ia) return new E.Inr(E.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 317, column 1 - line 317, column 58): " + [W.constructor.name]);
  }, function (W) {
    if (W instanceof E.Inl) return Aa.value;
    if (W instanceof E.Inr) return Ia.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 317, column 1 - line 317, column 58): " + [W.constructor.name]);
  }),
      lb = new u.Show(K.genericShow(Pa)(K.genericShowSum(K.genericShowConstructor(K.genericShowArgsNoArguments)(new Da.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(K.genericShowConstructor(K.genericShowArgsNoArguments)(new Da.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      tb = new Na(function () {
    var W = A.fromMaybe(Aa.value);
    return function (Z) {
      return W(p.hush(fb(Z)));
    };
  }(), u.show(lb), u.show(lb)),
      ub = new L.Functor(function (W) {
    return function (Z) {
      if (Z instanceof Ea) return Ea.create(L.map(A.functorMaybe)(W)(Z.value0));
      if (Z instanceof za) return za.create(L.map(A.functorMaybe)(W)(Z.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 362, column 1 - line 364, column 48): " + [W.constructor.name, Z.constructor.name]);
    };
  }),
      ib = function ib(W) {
    return function (Z) {
      return function (R) {
        return e.step(R)(function () {
          var V = A.isJust(R) ? !0 : !1;
          return t.bind(b.widgetBind)(f.select(b.widgetMultiAlternative(O.monoidArray))(b.widgetShiftMap)([c.value(A.maybe("")(Z.toOptionValue)(R)), L.map(g.functorProps)(function () {
            var ba = Z.fromOptionValue;
            return function (ea) {
              return ba(c.unsafeTargetValue(ea));
            };
          }())(c.onChange)])(C.cons(f.option(b.widgetMultiAlternative(O.monoidArray))(b.widgetShiftMap)([c.disabled(V)])([f.text(h.widgetLiftWidget)("Select ...")]))(L.mapFlipped(L.functorArray)(D.upFromIncluding(W.Enum1())(ia.unfoldable1Array)(x.bottom(W.Bounded0())))(function (ba) {
            return f.option(b.widgetMultiAlternative(O.monoidArray))(b.widgetShiftMap)([c.value((0, Z.toOptionValue)(ba))])([f.text(h.widgetLiftWidget)((0, Z.toOptionLabel)(ba))]);
          }))))(function (ba) {
            return m.pure(b.widgetApplicative)(ib(W)(Z)(new A.Just(ba)));
          });
        }());
      };
    };
  },
      mb = function mb(W) {
    return function (Z) {
      return function (R) {
        return function (V) {
          return function (ba) {
            return F.fold(W)(R)(L.map(Z)(V)(ba));
          };
        };
      };
    };
  },
      Ya = function Ya(W) {
    W = mb(F.foldableMaybe)(A.functorMaybe)(O.monoidString)(ma.toString)(W);
    W = e.debounce(O.monoidArray)(1E3)(W)(Za);
    return cb(W);
  },
      ab = function ab(W) {
    return A.maybe(O.mempty(b.widgetMonoid(O.monoidArray)))(function (Z) {
      return f.div(b.widgetMultiAlternative(O.monoidArray))(b.widgetShiftMap)([c.style({
        color: "red"
      })])([f.text(h.widgetLiftWidget)(u.show(W)(Z))]);
    });
  },
      vb = new z.Eq(P.genericEq(Pa)(P.genericEqSum(P.genericEqConstructor(P.genericEqNoArguments))(P.genericEqConstructor(P.genericEqNoArguments)))),
      nb = new Q.Ord(function () {
    return vb;
  }, function (W) {
    return function (Z) {
      return y.genericCompare(Pa)(y.genericOrdSum(y.genericOrdConstructor(y.genericOrdNoArguments))(y.genericOrdConstructor(y.genericOrdNoArguments)))(W)(Z);
    };
  }),
      wb = new D.Enum(function () {
    return nb;
  }, J.genericPred(Pa)(J.genericEnumSum(J.genericEnumConstructor(J.genericEnumNoArguments))(G.genericTopConstructor(G.genericTopNoArguments))(J.genericEnumConstructor(J.genericEnumNoArguments))(G.genericBottomConstructor(G.genericBottomNoArguments))), J.genericSucc(Pa)(J.genericEnumSum(J.genericEnumConstructor(J.genericEnumNoArguments))(G.genericTopConstructor(G.genericTopNoArguments))(J.genericEnumConstructor(J.genericEnumNoArguments))(G.genericBottomConstructor(G.genericBottomNoArguments)))),
      jb = function jb(W) {
    return function (Z) {
      return Z instanceof A.Nothing ? "(None)" : Wa(W)(Z);
    };
  },
      xb = new Na(function (W) {
    return p.hush(U.readBoolean(W));
  }, jb(u.showBoolean), Wa(u.showBoolean)),
      yb = new Na(function () {
    var W = t.join(A.bindMaybe);
    return function (Z) {
      return W(p.hush(U.readInstitutionContactType(Z)));
    };
  }(), jb(aa.showInstitutionContactType), Wa(aa.showInstitutionContactType)),
      zb = new Na(function () {
    var W = t.join(A.bindMaybe);
    return function (Z) {
      return W(p.hush(U.readPolicyType(Z)));
    };
  }(), jb(aa.showPolicyType), Wa(aa.showPolicyType)),
      ob = function ob(W) {
    return L.voidRight(b.widgetFunctor)(!W)(f.input(h.widgetLiftWidget)([c._type("checkbox"), c.checked(W), c.onChange]));
  },
      pb = function pb(W) {
    return e.step(W)(t.bind(b.widgetBind)(ob(W))(function (Z) {
      return m.pure(b.widgetApplicative)(pb(Z));
    }));
  },
      Ab = new x.Bounded(function () {
    return nb;
  }, G.genericBottom(Pa)(G.genericBottomSum(G.genericBottomConstructor(G.genericBottomNoArguments))), G.genericTop(Pa)(G.genericTopSum(G.genericTopConstructor(G.genericTopNoArguments)))),
      Bb = new D.BoundedEnum(function () {
    return Ab;
  }, function () {
    return wb;
  }, J.genericCardinality(Pa)(J.genericBoundedEnumSum(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))), J.genericFromEnum(Pa)(J.genericBoundedEnumSum(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))), J.genericToEnum(Pa)(J.genericBoundedEnumSum(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments))(J.genericBoundedEnumConstructor(J.genericBoundedEnumNoArguments)))),
      Cb = new q.Apply(function () {
    return ub;
  }, function (W) {
    return function (Z) {
      if (W instanceof Ea && Z instanceof Ea || W instanceof Ea && Z instanceof za || W instanceof za && Z instanceof Ea) return Ea.create(q.apply(A.applyMaybe)(W.value0)(Z.value0));
      if (W instanceof za && Z instanceof za) return za.create(q.apply(A.applyMaybe)(W.value0)(Z.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 365, column 1 - line 369, column 63): " + [W.constructor.name, Z.constructor.name]);
    };
  }),
      Db = new m.Applicative(function () {
    return Cb;
  }, function (W) {
    return Ea.create(new A.Just(W));
  }),
      qb = function qb(W) {
    return function (Z) {
      var R = ha.snd(Z),
          V = ha.fst(Z),
          ba = new Ea(A.Nothing.value);

      Z = function () {
        var sa = Q.max(Q.ordInt)(0)(V - C.length(R) | 0);
        return X.append(X.semigroupArray)(L.map(L.functorArray)(m.pure(Db))(R))(L.mapFlipped(L.functorArray)($a(1)(sa))(function (Fa) {
          return ba;
        }));
      }();

      var ea = function ea(sa) {
        return e.step(sa)(t.bind(b.widgetBind)(L.voidRight(b.widgetFunctor)(za.create(Ta(sa)))(f.button(b.widgetMultiAlternative(O.monoidArray))(b.widgetShiftMap)([c.onClick])([f.text(h.widgetLiftWidget)("Delete")])))(function (Fa) {
          return m.pure(b.widgetApplicative)(ea(Fa));
        }));
      },
          pa = function pa(sa) {
        return f.li_(n.shiftMapCofree(O.monoidArray))([])(t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(W(Ta(sa)))(function (Fa) {
          return t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(ea(new Ea(Fa)))(function (Ka) {
            return m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(Ka);
          });
        }));
      },
          qa = function qa(sa) {
        if (sa instanceof za) return e.step(new za(A.Nothing.value))(O.mempty(b.widgetMonoid(O.monoidArray)));
        if (sa instanceof Ea) return pa(sa);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 396, column 23 - line 398, column 35): " + [sa.constructor.name]);
      };

      return f.div_(n.shiftMapCofree(O.monoidArray))([])(t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(function (sa) {
        return function (Fa) {
          return e.loopS(O.monoidArray)(new ha.Tuple(sa, Fa))(function (Ka) {
            return f.ul_(n.shiftMapCofree(O.monoidArray))([])(function () {
              ha.fst(Ka);
              var Qa = ha.snd(Ka);
              return t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(e.step(0)(L.voidRight(b.widgetFunctor)(m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(1))(f.button(b.widgetMultiAlternative(O.monoidArray))(b.widgetShiftMap)([c.onClick])([f.text(h.widgetLiftWidget)("Add item")]))))(function (Ra) {
                return t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(Ba.traverse(Ba.traversableArray)(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(qa)(Qa))(function (Sa) {
                  Sa = C.filter(sb)(Sa);
                  var Va = C.length(Sa) + Ra | 0,
                      bb = L.mapFlipped(L.functorArray)($a(1)(Ra))(function (kb) {
                    return ba;
                  });
                  return m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(ha.Tuple.create(Va)(X.append(X.semigroupArray)(Sa)(bb)));
                });
              });
            }());
          });
        };
      }(V)(Z))(function (sa) {
        return m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(H.second(H.strongFn)(function () {
          var Fa = L.map(L.functorArray)(Ta);
          return function (Ka) {
            return C.catMaybes(Fa(Ka));
          };
        }())(sa));
      }));
    };
  };

  d.menuSignal = ib;
  d.textInput = Ya;

  d.dateInput = function (W) {
    var Z = ua.unsafePerformEffect(function (ba) {
      return function () {
        var ea = ya.nowDateTime();
        ea = A.fromMaybe(ea)(p.hush(ba));
        ea = wa["try"](M.dateTimeToStr(ea))();
        return v.lmap(p.bifunctorEither)(u.show(wa.showError))(ea);
      };
    }(W));
    W = t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)));
    var R = m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)));
    if (Z instanceof p.Left) var V = "";else if (Z instanceof p.Right) V = ma.toString(Z.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 169, column 31 - line 171, column 34): " + [Z.constructor.name]);
    return W(R(V))(function (ba) {
      var ea = t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray))),
          pa = m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)));
      if (Z instanceof p.Left) var qa = Z.value0;else if (Z instanceof p.Right) qa = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 172, column 21 - line 174, column 18): " + [Z.constructor.name]);
      return ea(pa(qa))(function (sa) {
        return t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(f.div_(n.shiftMapCofree(O.monoidArray))([c._id("mjUI_dateInput")])(Ya(ma.fromString(ba))))(function (Fa) {
          return t.discard(t.discardUnit)(n.bindCofree(b.widgetAlternative(O.monoidArray)))(m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(ua.unsafePerformEffect(eb("mjUI_dateInput")("INPUT")(ba))))(function () {
            return t.discard(t.discardUnit)(n.bindCofree(b.widgetAlternative(O.monoidArray)))(e.display(function () {
              if (Z instanceof p.Right) return O.mempty(b.widgetMonoid(O.monoidArray));
              if (Z instanceof p.Left) return ab(u.showString)(new A.Just(Z.value0));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 178, column 13 - line 180, column 40): " + [Z.constructor.name]);
            }()))(function () {
              if (Fa instanceof A.Just) return m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(ua.unsafePerformEffect(L.map(ca.functorEffect)(v.lmap(p.bifunctorEither)(u.show(wa.showError)))(wa["try"](U.parseDate(Fa.value0)))));
              if (Fa instanceof A.Nothing) return m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(new p.Left("no date input"));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 181, column 3 - line 184, column 43): " + [Fa.constructor.name]);
            });
          });
        });
      });
    });
  };

  d.natInput = function (W) {
    W = t.bind(A.bindMaybe)(L.mapFlipped(A.functorMaybe)(W)(function () {
      var Z = u.show(u.showInt);
      return function (R) {
        return Z(N.natToInt(R));
      };
    }()))(ma.fromString);
    return t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(Ya(W))(function (Z) {
      return m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(L.map(A.functorMaybe)(function () {
        var R = Ja.readInt(10);
        return function (V) {
          return N.intToNat(I.round(R(ma.toString(V))));
        };
      }())(Z));
    });
  };

  d.urlInput = function (W) {
    if (W instanceof p.Left) var Z = "";else if (W instanceof p.Right) Z = ma.toString(Ca.urlToNEString(W.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 217, column 15 - line 219, column 48): " + [W.constructor.name]);
    if (W instanceof p.Left) var R = W.value0;else if (W instanceof p.Right) R = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 213, column 15 - line 215, column 20): " + [W.constructor.name]);
    return t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(Ya(ma.fromString(Z)))(function (V) {
      var ba = t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray))),
          ea = m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)));
      if (V instanceof A.Nothing) V = new p.Left(R);else if (V instanceof A.Just) V = Ca.parsePublicURL(ma.toString(V.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 204, column 19 - line 206, column 46): " + [V.constructor.name]);
      return ba(ea(V))(function (pa) {
        return t.discard(t.discardUnit)(n.bindCofree(b.widgetAlternative(O.monoidArray)))(e.display(function () {
          if (pa instanceof p.Right) return O.mempty(b.widgetMonoid(O.monoidArray));
          if (pa instanceof p.Left) return ab(u.showString)(new A.Just(pa.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 207, column 13 - line 209, column 40): " + [pa.constructor.name]);
        }()))(function () {
          return m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(pa);
        });
      });
    });
  };

  d.emailInput = function (W) {
    if (W instanceof p.Left) var Z = "";else if (W instanceof p.Right) Z = oa.toString(W.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 237, column 15 - line 239, column 33): " + [W.constructor.name]);
    if (W instanceof p.Left) var R = W.value0;else if (W instanceof p.Right) R = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 233, column 15 - line 235, column 20): " + [W.constructor.name]);
    return t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(Ya(ma.fromString(Z)))(function (V) {
      var ba = t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray))),
          ea = m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)));
      if (V instanceof A.Nothing) V = new p.Left(R);else if (V instanceof A.Just) V = Ha.validate(ma.toString(V.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 224, column 21 - line 226, column 43): " + [V.constructor.name]);
      return ba(ea(V))(function (pa) {
        return t.discard(t.discardUnit)(n.bindCofree(b.widgetAlternative(O.monoidArray)))(e.display(function () {
          if (pa instanceof p.Right) return O.mempty(b.widgetMonoid(O.monoidArray));
          if (pa instanceof p.Left) return ab(u.showString)(new A.Just(pa.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 227, column 13 - line 229, column 40): " + [pa.constructor.name]);
        }()))(function () {
          return m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(pa);
        });
      });
    });
  };

  d.checkBoxS = pb;
  d.showDescSig = Xa;

  d.mkDesc = function (W) {
    return function (Z) {
      var R = Oa(W)(gb),
          V = k.alt(b.widgetAlt(O.monoidArray))(f.text(h.widgetLiftWidget)(R))(f["code'"](b.widgetMultiAlternative(O.monoidArray))(b.widgetShiftMap)([f.text(h.widgetLiftWidget)(" ")]));
      return Z && !ka["null"](R) ? V : O.mempty(b.widgetMonoid(O.monoidArray));
    };
  };

  d.FreeTextPolicy = Aa;

  d.checkPolicy = function (W) {
    return function (Z) {
      if (W instanceof Aa) {
        var R = L.mapFlipped(p.functorEither);
        Z = ma.fromString(ka.trim(Z));
        if (Z instanceof A.Just) Z = new p.Right(Z.value0);else if (Z instanceof A.Nothing) Z = new p.Left("Empty string when NonEmptyString expected.");else throw Error("Failed pattern match at Metajelo.FormUtil (line 436, column 22 - line 438, column 63): " + [Z.constructor.name]);
        return R(Z)(aa.FreeTextPolicy.create);
      }

      if (W instanceof Ia) return L.mapFlipped(p.functorEither)(Ca.parsePublicURL(Z))(aa.RefPolicy.create);
      throw Error("Failed pattern match at Metajelo.FormUtil (line 347, column 25 - line 349, column 52): " + [W.constructor.name]);
    };
  };

  d.polPolTypeIs = function (W) {
    if (W instanceof aa.FreeTextPolicy) return Aa.value;
    if (W instanceof aa.RefPolicy) return Ia.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 352, column 18 - line 354, column 29): " + [W.constructor.name]);
  };

  d.arrayView = qb;

  d.nonEmptyArrayView = function (W) {
    return function (Z) {
      return t.bind(n.bindCofree(b.widgetAlternative(O.monoidArray)))(qb(W)(H.second(H.strongFn)(mb(F.foldableMaybe)(A.functorMaybe)(O.monoidArray)(B.toArray))(Z)))(function (R) {
        return m.pure(n.applicativeCofree(b.widgetAlternative(O.monoidArray)))(H.second(H.strongFn)(B.fromArray)(R));
      });
    };
  };

  d.errorDisplay = ab;

  d.runEffectInit = function (W) {
    return function (Z) {
      return e.step(W)(t.bind(b.widgetBind)(fa.liftEffect(b.widgetMonadEff(O.monoidArray))(Z))(function (R) {
        return m.pure(b.widgetApplicative)(e.step(R)(r.empty(b.widgetPlus(O.monoidArray))));
      }));
    };
  };

  d.evTargetElem = function (W) {
    return L.map(ca.functorEffect)(w.fromNode)(Y.target(W));
  };

  d.isOptionMaybeBoolean = xb;
  d.isOptionIdentifierType = rb;
  d.isOptionInstitutionType = Ua;
  d.isOptionMaybeInstitutionContactType = yb;
  d.isOptionMaybePolicyType = zb;
  d.isOptionRelationType = l;
  d.isOptionResourceTypeGeneral = hb;
  d.boundedEnumPolPolType = Bb;
  d.isOptionPolPolType = tb;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var d = a["Metajelo.View"],
      e = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      g = a["Concur.React.DOM"],
      b = a["Concur.React.Props"],
      f = a["Control.Alt"],
      c = a["Control.Bind"],
      k = a["Control.Category"],
      m = a["Data.Array"],
      q = a["Data.Array.NonEmpty"],
      t = a["Data.Array.NonEmpty.Internal"],
      n = a["Data.Foldable"],
      r = a["Data.Functor"],
      C = a["Data.HeytingAlgebra"],
      B = a["Data.Maybe"],
      v = a["Data.Monoid"],
      x = a["Data.Natural"],
      p = a["Data.Profunctor.Strong"],
      D = a["Data.Semigroup"],
      z = a["Data.Show"],
      F = a["Data.String.CodePoints"],
      L = a["Data.String.NonEmpty.Internal"],
      E = a["Data.String.Utils"],
      G = a["Data.Unfoldable"],
      J = a["Data.Unfoldable1"],
      P = a["DataCite.Types.Common"],
      y = a["Foreign.Object"],
      K = a["Metajelo.CSS.Common.ClassNames"],
      I = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      A = a["Metajelo.CSS.Web.ClassProps"],
      O = a["Metajelo.CSS.Web.Util"],
      N = a["Metajelo.Types"],
      Q = a["Text.Email.Parser"],
      H = a["Text.URL.Validate"],
      X = function () {
    var M = r.map(r.functorArray)(F.singleton);
    return function (Y) {
      return M(F.toCodePointArray(Y));
    };
  }(),
      u = function u(M) {
    var Y = g.text(M);
    return function (oa) {
      return Y(L.toString(oa));
    };
  },
      ka = g["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([g.text(e.widgetLiftWidget)(" ")]),
      ma = function () {
    var M = n.intercalate(n.foldableArray)(v.monoidArray)([ka]),
        Y = r.map(r.functorArray)(J.singleton(J.unfoldable1Array));
    return function (oa) {
      return M(Y(oa));
    };
  }(),
      Da = function Da(M) {
    return g.div(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.institutionPolicy])(ma([function (Y) {
      var oa = function () {
        if (Y instanceof B.Nothing) return {
          text: "May apply to product (unverified)",
          cls: I.appliesMaybe
        };
        if (Y instanceof B.Just && Y.value0) return {
          text: "Applies to product",
          cls: I.appliesYes
        };
        if (Y instanceof B.Just && !Y.value0) return {
          text: "Does not apply to product",
          cls: I.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 272, column 10 - line 275, column 75): " + [Y.constructor.name]);
      }();

      return g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([O.cList([K.applies, oa.cls])])([function (Ha) {
        return g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.appliesInfo])([g.text(e.widgetLiftWidget)(Ha)]);
      }(oa.text)]);
    }(M.appliesToProduct), n.foldMap(n.foldableMaybe)(h.widgetMonoid(v.monoidArray))(function (Y) {
      return g["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.policyType])([g.text(e.widgetLiftWidget)(z.show(N.showPolicyType)(Y))]), g.text(e.widgetLiftWidget)(" Policy:")]);
    })(M.policyType), function (Y) {
      var oa = g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.policy]),
          Ha = J.singleton(J.unfoldable1Array);
      if (Y instanceof N.FreeTextPolicy) Y = u(e.widgetLiftWidget)(Y.value0);else if (Y instanceof N.RefPolicy) Y = H.urlToString(Y.value0), Y = g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([g.text(e.widgetLiftWidget)(Y)]);else throw Error("Failed pattern match at Metajelo.View (line 265, column 5 - line 268, column 40): " + [Y.constructor.name]);
      return oa(Ha(Y));
    }(M.policy)]));
  },
      Ba = function Ba(M) {
    return g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.institutionName])([u(e.widgetLiftWidget)(M.institutionName)]);
  },
      ha = function ha(M) {
    return function (Y) {
      return n.foldMap(n.foldableMaybe)(v.monoidArray)(k.identity(k.categoryFn))(m.init(Y));
    };
  },
      ia = function ia(M) {
    return function (Y) {
      return function (oa) {
        return function (Ha) {
          return function (Ca) {
            var Ma = y.fromFoldableWith(M)(D.append(Ha)),
                w = r.map(Y)(p.fanout(k.categoryFn)(p.strongFn)(Ca)(J.singleton(oa)));
            return function (da) {
              return Ma(w(da));
            };
          };
        };
      };
    };
  },
      ra = function ra(M) {
    return g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.basicMetadata, A.creatorList])(r.mapFlipped(r.functorArray)(q.toArray(M))(function (Y) {
      return g.span_(h.widgetShiftMap)([A.creator])(u(e.widgetLiftWidget)(Y));
    }));
  },
      S = function S(M) {
    var Y = Q.toString(M.emailAddress),
        oa = g.text(e.widgetLiftWidget);
    if (M.contactType instanceof B.Nothing) M = ".";else if (M.contactType instanceof B.Just) M = " (" + (z.show(N.showInstitutionContactType)(M.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 199, column 24 - line 201, column 41): " + [M.contactType.constructor.name]);
    oa = oa(M);
    return g.span_(h.widgetShiftMap)([A.institutionContact])(f.alt(h.widgetAlt(v.monoidArray))(f.alt(h.widgetAlt(v.monoidArray))(g["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([g.text(e.widgetLiftWidget)("Institution Contact: ")]))(g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.contactEmail, b.href("mailto:" + Y)])([g.text(e.widgetLiftWidget)(Y)])))(g.span_(h.widgetShiftMap)([A.contactType])(oa)));
  },
      ca = g["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([g.text(e.widgetLiftWidget)(", ")]),
      fa = function fa(M) {
    return g.span_(h.widgetShiftMap)([A.formatList])(n.intercalate(n.foldableArray)(h.widgetMonoid(v.monoidArray))(ca)(r.mapFlipped(r.functorArray)(M)(function (Y) {
      return g.span_(h.widgetShiftMap)([A.format])(u(e.widgetLiftWidget)(Y));
    })));
  },
      wa = function wa(M) {
    return g.span_(h.widgetShiftMap)([])(n.intercalate(n.foldableArray)(h.widgetMonoid(v.monoidArray))(ca)(r.mapFlipped(r.functorArray)(q.toArray(M))(function (Y) {
      return g.span_(h.widgetShiftMap)([A.title])(u(e.widgetLiftWidget)(Y));
    })));
  },
      ya = function ya(M) {
    return g["cite'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([u(e.widgetLiftWidget)(M)]);
  },
      ua = function ua(M) {
    if (M.identifierType instanceof P.ARK) return g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(L.toString(M.identifier))])([ya(M.identifier)]);

    if (M.identifierType instanceof P.ArXiv) {
      var Y = "https://arxiv.org/abs/" + L.toString(M.identifier);
      return g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([ya(M.identifier)]);
    }

    if (M.identifierType instanceof P.Bibcode) return Y = "https://ui.adsabs.harvard.edu/abs/" + (L.toString(M.identifier) + "/abstract"), g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([ya(M.identifier)]);
    if (M.identifierType instanceof P.DOI) return Y = "https://doi.org/" + L.toString(M.identifier), g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([ya(M.identifier)]);
    if (M.identifierType instanceof P.EAN13) return ya(M.identifier);
    if (M.identifierType instanceof P.EISSN) return Y = "https://www.worldcat.org/ISSN/" + L.toString(M.identifier), g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([ya(M.identifier)]);
    if (M.identifierType instanceof P.Handle) return Y = "http://hdl.handle.net/" + L.toString(M.identifier), g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([ya(M.identifier)]);
    if (M.identifierType instanceof P.IGSN) return Y = "http://igsn.org/" + L.toString(M.identifier), g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([ya(M.identifier)]);
    if (M.identifierType instanceof P.ISBN) return ya(M.identifier);
    if (M.identifierType instanceof P.ISSN) return Y = "https://www.worldcat.org/ISSN/" + L.toString(M.identifier), g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([ya(M.identifier)]);
    if (M.identifierType instanceof P.ISTC) return ya(M.identifier);
    if (M.identifierType instanceof P.LISSN) return Y = "https://www.worldcat.org/ISSN/" + L.toString(M.identifier), g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([ya(M.identifier)]);
    if (M.identifierType instanceof P.LSID) return Y = "http://www.lsid.info/resolver/?lsid=" + L.toString(M.identifier), g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([ya(M.identifier)]);
    if (M.identifierType instanceof P.PMID) return Y = "https://www.ncbi.nlm.nih.gov/pubmed/" + L.toString(M.identifier), g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(Y)])([ya(M.identifier)]);
    if (M.identifierType instanceof P.PURL) return g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(L.toString(M.identifier))])([ya(M.identifier)]);
    if (M.identifierType instanceof P.UPC) return ya(M.identifier);
    if (M.identifierType instanceof P.URL) return g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([b.href(L.toString(M.identifier))])([ya(M.identifier)]);
    if (M.identifierType instanceof P.URN) return ya(M.identifier);
    throw Error("Failed pattern match at Metajelo.View (line 221, column 1 - line 221, column 47): " + [M.constructor.name]);
  },
      va = function va(M) {
    return g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.identifier])([g.span_(h.widgetShiftMap)([A.idType])(g.text(e.widgetLiftWidget)(z.show(P.showIdentifierType)(M.identifierType))), g.span_(h.widgetShiftMap)([A.idUrl])(ua(M))]);
  },
      Ja = function Ja(M) {
    return g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.relatedId])([g.span_(h.widgetShiftMap)([A.relType])(g.text(e.widgetLiftWidget)(z.show(P.showRelationType)(M.relationType))), ka, va({
      identifier: M.identifier,
      identifierType: M.identifierType
    })]);
  },
      T = function T(M) {
    return function (Y) {
      return function (oa) {
        if (Y) return M;

        if (n.any(n.foldableArray)(C.heytingAlgebraBoolean)(function (Ca) {
          return E.endsWith(Ca)(M);
        })([";", ".", ","])) {
          var Ha = X(M);
          return E.fromCharArray(ha(v.monoidString)(Ha)) + oa;
        }

        return M + oa;
      };
    };
  },
      aa = function aa(M) {
    var Y = Ba(M),
        oa = g["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([g.text(e.widgetLiftWidget)("("), g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.institutionId])([va(M.institutionID)]), g.text(e.widgetLiftWidget)("; "), g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.institutionType])([g.text(e.widgetLiftWidget)(z.show(N.showInstitutionType)(M.institutionType))]), g.text(e.widgetLiftWidget)(T(")")(B.isNothing(M.superOrganizationName))(","))]);
    if (M.superOrganizationName instanceof B.Nothing) var Ha = v.mempty(h.widgetMonoid(v.monoidArray));else if (M.superOrganizationName instanceof B.Just) Ha = g["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([g.text(e.widgetLiftWidget)("a member of "), g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.superOrg])([g.text(e.widgetLiftWidget)(T(L.toString(M.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 161, column 7 - line 167, column 10): " + [M.superOrganizationName.constructor.name]);
    return ma([Y, oa, Ha, S(M.institutionContact), g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.sustainability])([g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.missionStatement, b.href(H.urlToString(M.institutionSustainability.missionStatementURL))])([g.text(e.widgetLiftWidget)("Mission Statement")]), g.text(e.widgetLiftWidget)("; "), g.a(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.fundingStatement, b.href(H.urlToString(M.institutionSustainability.fundingStatementURL))])([g.text(e.widgetLiftWidget)("Funding Statement")]), g.text(e.widgetLiftWidget)(".")]), g.ul(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.institutionPolicies])(r.map(r.functorArray)(function (Ca) {
      return g["li'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([Da(Ca)]);
    })(q.toArray(M.institutionPolicies))), function (Ca) {
      if (Ca) Ca = "Versioned";else {
        if (Ca) throw Error("Failed pattern match at Metajelo.View (line 188, column 14 - line 190, column 31): " + [Ca.constructor.name]);
        Ca = "Unversioned";
      }
      return g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.versioning])([g.text(e.widgetLiftWidget)(Ca)]);
    }(M.versioning)]);
  },
      U = function U(M) {
    if (M.resourceID instanceof B.Just) var Y = g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.resourceId])([va(M.resourceID.value0), g.text(e.widgetLiftWidget)(".")]);else if (M.resourceID instanceof B.Nothing) Y = v.mempty(h.widgetMonoid(v.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 127, column 17 - line 129, column 24): " + [M.resourceID.constructor.name]);
    var oa = [ra(M.basicMetadata.creators), g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.basicMetadata, A.pubyear])([g.text(e.widgetLiftWidget)(z.show(z.showInt)(x.natToInt(M.basicMetadata.publicationYear)))]), g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.basicMetadata, A.title])([wa(M.basicMetadata.titles), g.text(e.widgetLiftWidget)(T("")(B.isNothing(M.resourceID))(","))])];
    Y = D.append(D.semigroupArray)(oa)([g["span'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([Ba(M.location), g.text(e.widgetLiftWidget)(".")]), Y]);
    return g.div(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.product])(ma(D.append(D.semigroupArray)([g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.productCitation])([g["cite'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)(ma(Y))])])(D.append(D.semigroupArray)([fa(M.format)])(aa(M.location)))));
  };

  d.spacify = ma;

  d.mkRecordWidget = function (M) {
    var Y = function () {
      var Ca = r.map(t.functorNonEmptyArray)(function (Ma) {
        return g.li(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.relatedId])([Ma]);
      })(r.map(t.functorNonEmptyArray)(Ja)(M.relatedIdentifiers));
      return g.ul(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.relatedIdList])(q.toArray(Ca));
    }(),
        oa = ia(t.foldableNonEmptyArray)(t.functorNonEmptyArray)(t.unfoldable1NonEmptyArray)(t.semigroupNonEmptyArray)(function (Ca) {
      return z.show(P.showResourceTypeGeneral)(Ca.resourceType.generalType) + (": " + Ca.resourceType.description);
    })(M.supplementaryProducts),
        Ha = function Ha(Ca) {
      Ca = c.join(c.bindArray)(G.fromMaybe(G.unfoldableArray)(r.map(B.functorMaybe)(q.toArray)(y.lookup(Ca)(oa))));
      var Ma = g.span_(h.widgetShiftMap)([A.resourceType])(n.fold(n.foldableMaybe)(h.widgetMonoid(v.monoidArray))(r.mapFlipped(B.functorMaybe)(m.head(Ca))(function (w) {
        return f.alt(h.widgetAlt(v.monoidArray))(f.alt(h.widgetAlt(v.monoidArray))(g.span_(h.widgetShiftMap)([A.resourceTypeGen])(g.text(e.widgetLiftWidget)(z.show(P.showResourceTypeGeneral)(w.resourceType.generalType))))(g.span_(h.widgetShiftMap)([A.resourceTypeDescr])(g.text(e.widgetLiftWidget)(w.resourceType.description))))(g["br'"](e.widgetLiftWidget));
      })));
      return g["div'"](h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)(m.cons(Ma)(r.map(r.functorArray)(U)(Ca)));
    };

    z.show(P.showIdentifierType)(M.identifier.identifierType);
    return g.div(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.record])([g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.productsHeader])([g.span_(h.widgetShiftMap)([A.recordId])(va(M.identifier))]), g.ul(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.productList])(r.map(r.functorArray)(function (Ca) {
      return g.li_(h.widgetShiftMap)([A.productGroup])(Ha(Ca));
    })(y.keys(oa))), g.span(h.widgetMultiAlternative(v.monoidArray))(h.widgetShiftMap)([A.relatedIdsHeader])([]), Y]);
  };

  d.mkSupplementaryProductWidget = U;
  d.locElems = aa;
})(PS);

(function (a) {
  a.pickFn = function (d, e) {
    for (var h = {}, g = 0; g < d.length; g++) {
      "undefined" !== typeof e[d[g]] && (h[d[g]] = e[d[g]]);
    }

    return h;
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
      return function (h) {
        var g = {},
            b;

        for (b in h) {
          ({}).hasOwnProperty.call(h, b) && (g[b] = h[b]);
        }

        g[d] = e;
        return g;
      };
    };
  };

  a.unsafeDelete = function (d) {
    return function (e) {
      var h = {},
          g;

      for (g in e) {
        g !== d && {}.hasOwnProperty.call(e, g) && (h[g] = e[g]);
      }

      return h;
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
      h = a["Record.Unsafe"];

  d.get = function (g) {
    return function (b) {
      return function (f) {
        return function (c) {
          return h.unsafeGet(e.reflectSymbol(g)(f))(c);
        };
      };
    };
  };

  d.insert = function (g) {
    return function (b) {
      return function (f) {
        return function (c) {
          return function (k) {
            return function (m) {
              return h.unsafeSet(e.reflectSymbol(g)(c))(k)(m);
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
          return function (k) {
            return h.unsafeDelete(e.reflectSymbol(g)(c))(k);
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
      h = a["Data.Monoid"],
      g = a["Data.Symbol"],
      b = a["Type.Data.RowList"],
      f = function f(c) {
    this.keysImpl = c;
  };

  a = new f(function (c) {
    return h.mempty(e.monoidList);
  });

  d.keys = function (c) {
    return function (k) {
      return function (m) {
        return (0, k.keysImpl)(b.RLProxy.value);
      };
    };
  };

  d.nilKeys = a;

  d.consKeys = function (c) {
    return function (k) {
      return new f(function (m) {
        m = (0, k.keysImpl)(b.RLProxy.value);
        var q = g.reflectSymbol(c)(g.SProxy.value);
        return new e.Cons(q, m);
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
      h = a["Control.Monad.State.Class"],
      g = a["Control.Monad.State.Trans"],
      b = a["Data.Array"],
      f = a["Data.Function.Uncurried"],
      c = a["Data.Identity"],
      k = a["Data.List.Types"],
      m = a["Data.Maybe"],
      q = a["Data.Symbol"],
      t = a["Foreign.Object"],
      n = a.Record,
      r = a["Record.Extra"],
      C = a["Type.Data.Row"],
      B = function () {
    function I() {}

    I.value = new I();
    return I;
  }(),
      v = function v(I) {
    this.getAllOption = I;
  },
      x = function x(I) {
    this["getAll'"] = I;
  },
      p = function p(I) {
    this.fromRecordOption = I;
  },
      D = function D(I) {
    this["fromRecord'"] = I;
  },
      z = function z(I) {
    return function (A) {
      return function (O) {
        O = b.fromFoldable(k.foldableList)(r.keys()(O)(C.RProxy.value));
        return f.runFn2(e.pickFn)(O);
      };
    };
  };

  a = new v(function (I) {
    return function (A) {
      return new m.Just({});
    };
  });

  var F = t.empty,
      L = new p(function (I) {
    return function (A) {
      return F;
    };
  }),
      E = function E(I) {
    return function (A) {
      return function (O) {
        return function (N) {
          var Q = q.reflectSymbol(I)(q.SProxy.value),
              H = t.alter(function (X) {
            return A(X);
          })(Q)(N);
          N = A(t.lookup(Q)(N));
          return {
            option: H,
            value: N
          };
        };
      };
    };
  },
      G = function G(I) {
    return function (A) {
      return function (O) {
        return function (N) {
          return function (Q) {
            return E(I)(function (H) {
              return m.Nothing.value;
            })(N)(Q).option;
          };
        };
      };
    };
  },
      J = function J(I) {
    return function (A) {
      return function (O) {
        return function (N) {
          return E(I)(function (Q) {
            return Q;
          })(O)(N).value;
        };
      };
    };
  },
      P = function P(I) {
    return function (A) {
      return function (O) {
        return function (N) {
          return function (Q) {
            return E(I)(function (H) {
              return new m.Just(N);
            })(O)(Q).option;
          };
        };
      };
    };
  },
      y = function y(I) {
    return function (A) {
      return function (O) {
        return function (N) {
          return function (Q) {
            if (N instanceof m.Just) return P(I)()(O)(N.value0)(Q);
            if (N instanceof m.Nothing) return Q;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [N.constructor.name]);
          };
        };
      };
    };
  },
      K = function K(I) {
    return function (A) {
      return function (O) {
        return function (N) {
          return function (Q) {
            return function (H) {
              return E(I)(function (X) {
                return new m.Just(Q);
              })(N)(H).option;
            };
          };
        };
      };
    };
  };

  d.fromRecord = function (I) {
    return I["fromRecord'"];
  };

  d.empty = F;
  d.get = J;

  d.getAll = function (I) {
    return I["getAll'"];
  };

  d.getSubset = function (I) {
    return function (A) {
      return function (O) {
        return function (N) {
          return function (Q) {
            return (0, N["getAll'"])(z()()(O)(Q));
          };
        };
      };
    };
  };

  d.getWithDefault = function (I) {
    return function (A) {
      return function (O) {
        return function (N) {
          return function (Q) {
            Q = J(I)()(N)(Q);
            if (Q instanceof m.Just) return Q.value0;
            if (Q instanceof m.Nothing) return O;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [Q.constructor.name]);
          };
        };
      };
    };
  };

  d.maySetOptState = function (I) {
    return function (A) {
      return function (O) {
        return function (N) {
          return function (Q) {
            return h.put(g.monadStateStateT(c.monadIdentity))(y(I)()(O)(N)(Q));
          };
        };
      };
    };
  };

  d.fromRecordAny = function (I) {
    return function (A) {
      return new D((0, I.fromRecordOption)(B.value));
    };
  };

  d.fromRecordOptionNil = L;

  d.fromRecordOptionCons = function (I) {
    return function (A) {
      return function (O) {
        return function (N) {
          return function (Q) {
            return function (H) {
              return new p(function (X) {
                return function (u) {
                  var ka = n["delete"](I)()()(q.SProxy.value)(u);
                  ka = (0, A.fromRecordOption)(B.value)(ka);
                  u = n.get(I)()(q.SProxy.value)(u);
                  return K(I)()()(q.SProxy.value)(u)(ka);
                };
              });
            };
          };
        };
      };
    };
  };

  d.getAllAny = function (I) {
    return function (A) {
      return new x((0, A.getAllOption)(B.value));
    };
  };

  d.getAllOptionNil = a;

  d.getAllOptionCons = function (I) {
    return function (A) {
      return function (O) {
        return function (N) {
          return function (Q) {
            return function (H) {
              return new v(function (X) {
                return function (u) {
                  var ka = G(I)()()(q.SProxy.value)(u);
                  ka = (0, H.getAllOption)(B.value)(ka);
                  u = J(I)()(q.SProxy.value)(u);

                  if (ka instanceof m.Just) {
                    if (u instanceof m.Just) return new m.Just(n.insert(I)()()(q.SProxy.value)(u.value0)(ka.value0));
                    if (u instanceof m.Nothing) return m.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [u.constructor.name]);
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
    return function (e) {
      return e.item(d);
    };
  };
})(PS["Web.File.FileList"] = PS["Web.File.FileList"] || {});

(function (a) {
  a["Web.File.FileList"] = a["Web.File.FileList"] || {};
  var d = a["Web.File.FileList"],
      e = a["Data.Nullable"];

  a["Web.File.FileList"].item = function (h) {
    var g = d._item(h);

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
      return function (h) {
        return function (g) {
          return function () {
            return g.addEventListener(d, e, h);
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
      h = a["Data.Either"],
      g = a["Data.List.Types"],
      b = a["Data.Monoid"],
      f = a["Data.Show"],
      c = a["Effect.Aff"],
      k = a["Effect.Exception"],
      m = a.Foreign,
      q = a["Web.Event.EventTarget"],
      t = a["Web.File.FileReader"],
      n = a["Web.HTML.Event.EventTypes"];

  a = function (r) {
    return function (C) {
      return function (B) {
        return c.makeAff(function (v) {
          var x = function x(p) {
            return v(h.Right.create(p));
          };

          return function () {
            var p = t.fileReader(),
                D = t.toEventTarget(p),
                z = q.eventListener(function (L) {
              return v(h.Left.create(k.error("error")));
            })(),
                F = q.eventListener(function (L) {
              return function () {
                var E = t.result(p)();
                return h.either(function (G) {
                  return v(h.Left.create(k.error(f.show(g.showNonEmptyList(m.showForeignError))(G))));
                })(x)(e.runExcept(r(E)))();
              };
            })();
            q.addEventListener(n.error)(z)(!1)(D)();
            q.addEventListener(n.load)(F)(!1)(D)();
            C(B)(p)();
            return b.mempty(c.monoidCanceler);
          };
        });
      };
    };
  }(m.readString)(t.readAsText);

  d.readAsText = a;
})(PS);

(function (a) {
  a._read = function (d, e, h) {
    var g = Object.prototype.toString.call(h);
    return 0 === g.indexOf("[object HTML") && g.indexOf("Element]") === g.length - 8 ? e(h) : d;
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
      h = a["Data.Maybe"];

  d.fromElement = function (g) {
    return e._read(h.Nothing.value, h.Just.create, g);
  };

  d.click = e.click;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var d = a["Metajelo.UI"],
      e = a.Affjax,
      h = a["Affjax.ResponseFormat"],
      g = a["Concur.Core.FRP"],
      b = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Props"],
      c = a["Concur.Core.Types"],
      k = a["Concur.React.DOM"],
      m = a["Concur.React.Props"],
      q = a["Concur.React.Run"],
      t = a["Control.Applicative"],
      n = a["Control.Bind"],
      r = a["Control.Cofree"],
      C = a["Control.Monad.Except.Trans"],
      B = a["Control.Monad.Maybe.Trans"],
      v = a["Control.Monad.State"],
      x = a["Control.Monad.State.Class"],
      p = a["Control.Monad.State.Trans"],
      D = a["Data.Array"],
      z = a["Data.Array.NonEmpty"],
      F = a["Data.Array.NonEmpty.Internal"],
      L = a["Data.Bifunctor"],
      E = a["Data.Either"],
      G = a["Data.Enum"],
      J = a["Data.Foldable"],
      P = a["Data.Functor"],
      y = a["Data.Identity"],
      K = a["Data.Maybe"],
      I = a["Data.Maybe.First"],
      A = a["Data.Monoid"],
      O = a["Data.Semigroup"],
      N = a["Data.Show"],
      Q = a["Data.String.CodePoints"],
      H = a["Data.String.Common"],
      X = a["Data.String.NonEmpty.Internal"],
      u = a["Data.Symbol"],
      ka = a["Data.Traversable"],
      ma = a["Data.Tuple"],
      Da = a["Data.UUID"],
      Ba = a["Data.Unit"],
      ha = a["Data.Void"],
      ia = a["DataCite.Types.Common"],
      ra = a.Effect,
      S = a["Effect.Aff"],
      ca = a["Effect.Aff.Class"],
      fa = a["Effect.Class"],
      wa = a["Effect.Class.Console"],
      ya = a["Effect.Exception"],
      ua = a["Effect.Now"],
      va = a["Effect.Unsafe"],
      Ja = a.Global,
      T = a["Metajelo.CSS.UI.ClassProps"],
      aa = a["Metajelo.CSS.Web.ClassProps"],
      U = a["Metajelo.FormUtil"],
      M = a["Metajelo.Types"],
      Y = a["Metajelo.View"],
      oa = a["Metajelo.XPaths"],
      Ha = a["Metajelo.XPaths.Read"],
      Ca = a["Metajelo.XPaths.Write"],
      Ma = a["Nonbili.DOM"],
      w = a.Option,
      da = a["Record.Extra"],
      la = a["Text.URL.Validate"],
      xa = a["Web.DOM.Document"],
      na = a["Web.DOM.Element"],
      ja = a["Web.File.File"],
      ta = a["Web.File.FileList"],
      Ga = a["Web.File.FileReader.Aff"],
      Aa = a["Web.HTML"],
      Ia = a["Web.HTML.HTMLDocument"],
      Ea = a["Web.HTML.HTMLElement"],
      za = a["Web.HTML.HTMLInputElement"],
      Na = a["Web.HTML.Window"],
      La = function La(R) {
    return function (V) {
      return function (ba) {
        return function (ea) {
          return function (pa) {
            return P.mapFlipped(K.functorMaybe)(w.get(R)(V)(ba)(ea))(function (qa) {
              return v.execState(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "descs_on";
              }))()(u.SProxy.value)(new K.Just(pa))))(qa);
            });
          };
        };
      };
    };
  },
      Ta = function Ta(R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.title])(U.textInput(R));
  },
      Za = function Za(R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.titleList])(U.nonEmptyArrayView(Ta)(R));
  },
      cb = function cb(R) {
    return function () {
      var V = Aa.window();
      V = Na.document(V)();
      V = Ia.toDocument(V);
      V = xa.createElement("a")(V)();
      na.setAttribute("download")("metajelo.xml")(V)();
      na.setAttribute("href")("data:text/plain;charset=utf-8," + R)(V)();
      V = Ea.fromElement(V);
      if (V instanceof K.Just) V = Ea.click(V.value0);else if (V instanceof K.Nothing) V = wa.log(fa.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + R);else throw Error("Failed pattern match at Metajelo.UI (line 132, column 26 - line 136, column 18): " + [V.constructor.name]);
      return V;
    };
  },
      Oa = function Oa(R) {
    return function (V) {
      return w.getWithDefault(R)()(w.empty);
    };
  },
      db = function db(R) {
    var V = X.fromString("urn:uuid:"),
        ba = w.get(new u.IsSymbol(function () {
      return "identifier";
    }))()(u.SProxy.value)(R);
    return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(function () {
      if (ba instanceof K.Just) return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(new K.Just(ba.value0));
      if (ba instanceof K.Nothing) return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(U.runEffectInit(Da.emptyUUID)(Da.genUUID))(function (ea) {
        return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(n.bind(K.bindMaybe)(V)(function (pa) {
          return n.bind(K.bindMaybe)(X.fromString(Da.toString(ea)))(function (qa) {
            return t.pure(K.applicativeMaybe)(O.append(X.semigroupNonEmptyString)(pa)(qa));
          });
        }));
      });
      throw Error("Failed pattern match at Metajelo.UI (line 648, column 15 - line 655, column 30): " + [ba.constructor.name]);
    }())(function (ea) {
      return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
        return "identifier";
      }))()(u.SProxy.value)(ea)))(function () {
        return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
          return "identifierType";
        }))()(u.SProxy.value)(new K.Just(ia.URN.value)));
      }))(R));
    });
  },
      Xa = function Xa(R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.format])(U.textInput(R));
  },
      eb = function eb(R) {
    return function (V) {
      return k.div_(r.shiftMapCofree(A.monoidArray))([T.formatList])(n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("formatEle")(R)))(function () {
        return U.arrayView(Xa)(V);
      }));
    };
  },
      $a = function $a(R) {
    return function () {
      return {
        lastModified: ua.nowDateTime(),
        date: R.date,
        identifier: R.identifier,
        relatedIdentifiers: R.relatedIdentifiers,
        supplementaryProducts: R.supplementaryProducts
      };
    };
  },
      fb = function fb(R) {
    var V = w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "fundingStatementURL";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "missionStatementURL";
    }))(w.fromRecordOptionNil)()()()())()()()())())(R),
        ba = new E.Right(R.missionStatementURL),
        ea = new E.Right(R.fundingStatementURL);
    return v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(u.SProxy.value)(new K.Just(ba))))(function () {
      return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(u.SProxy.value)(new K.Just(ea))))(function () {
        return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
          return "descs_on";
        }))()(u.SProxy.value)(new K.Just(!0)));
      });
    }))(V);
  },
      gb = function gb(R) {
    var V = new E.Right(R.url);
    R = w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "relationType";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "url";
    }))(w.fromRecordOptionNil)()()()())()()()())())(R);
    return v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
      return "url_Ei";
    }))()(u.SProxy.value)(new K.Just(V))))(function () {
      return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
        return "descs_on";
      }))()(u.SProxy.value)(new K.Just(!0)));
    }))(R);
  },
      Wa = function Wa(R) {
    if (R.policy instanceof M.FreeTextPolicy) var V = new K.Just(R.policy.value0);else if (R.policy instanceof M.RefPolicy) V = X.fromString(la.urlToString(R.policy.value0));else throw Error("Failed pattern match at Metajelo.UI (line 374, column 20 - line 376, column 54): " + [R.policy.constructor.name]);
    var ba = w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "appliesToProduct";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "policy";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "policyType";
    }))(w.fromRecordOptionNil)()()()())()()()())()()()())())(R);
    return v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
      return "policy_str";
    }))()(u.SProxy.value)(V)))(function () {
      return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
        return "polPolType";
      }))()(u.SProxy.value)(K.Just.create(U.polPolTypeIs(R.policy)))))(function () {
        return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
          return "policy_ei";
        }))()(u.SProxy.value)(K.Just.create(new E.Right(R.policy)))))(function () {
          return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "descs_on";
          }))()(u.SProxy.value)(new K.Just(!0)));
        });
      });
    }))(ba);
  },
      hb = function hb(R) {
    return v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
      return "email_Ei";
    }))()(u.SProxy.value)(K.Just.create(new E.Right(R.emailAddress)))))(function () {
      return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
        return "descs_on";
      }))()(u.SProxy.value)(new K.Just(!0)));
    }))(w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "contactType";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "emailAddress";
    }))(w.fromRecordOptionNil)()()()())()()()())())(R));
  },
      l = function l(R) {
    var V = w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionContact";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionID";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionName";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionPolicies";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionSustainability";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "institutionType";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "superOrganizationName";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "versioning";
    }))(w.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(R),
        ba = w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "identifier";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "identifierType";
    }))(w.fromRecordOptionNil)()()()())()()()())())(R.institutionID),
        ea = hb(R.institutionContact),
        pa = fb(R.institutionSustainability),
        qa = P.map(F.functorNonEmptyArray)(Wa)(R.institutionPolicies),
        sa = z.length(R.institutionPolicies);
    return v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
      return "institutionID_opt";
    }))()(u.SProxy.value)(new K.Just(ba))))(function () {
      return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
        return "_numPolicies";
      }))()(u.SProxy.value)(new K.Just(sa))))(function () {
        return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
          return "iSustain_opt";
        }))()(u.SProxy.value)(new K.Just(pa))))(function () {
          return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "institutionContact_opt";
          }))()(u.SProxy.value)(new K.Just(ea))))(function () {
            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
              return "institutionPolicies_opt";
            }))()(u.SProxy.value)(new K.Just(qa))))(function () {
              return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "descs_on";
              }))()(u.SProxy.value)(new K.Just(!0)));
            });
          });
        });
      });
    }))(V);
  },
      Ua = function Ua(R) {
    var V = z.length(R.titles),
        ba = z.length(R.creators);
    return v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
      return "_numTitles";
    }))()(u.SProxy.value)(new K.Just(V))))(function () {
      return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
        return "_numCreators";
      }))()(u.SProxy.value)(new K.Just(ba)));
    }))(w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "creators";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "publicationYear";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "titles";
    }))(w.fromRecordOptionNil)()()()())()()()())()()()())())(R));
  },
      rb = function rb(R) {
    var V = w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "basicMetadata";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "format";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "location";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "resourceID";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "resourceType";
    }))(w.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(R),
        ba = w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "description";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "generalType";
    }))(w.fromRecordOptionNil)()()()())()()()())())(R.resourceType),
        ea = P.map(K.functorMaybe)(w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "identifier";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "identifierType";
    }))(w.fromRecordOptionNil)()()()())()()()())()))(R.resourceID),
        pa = P.map(K.functorMaybe)(gb)(R.resourceMetadataSource),
        qa = l(R.location),
        sa = Ua(R.basicMetadata),
        Fa = D.length(R.format);
    return v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(u.SProxy.value)(new K.Just(sa))))(function () {
      return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
        return "resourceID_opt";
      }))()(u.SProxy.value)(ea)))(function () {
        return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
          return "resourceType_opt";
        }))()(u.SProxy.value)(new K.Just(ba))))(function () {
          return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "_numFormats";
          }))()(u.SProxy.value)(new K.Just(Fa))))(function () {
            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(u.SProxy.value)(pa)))(function () {
              return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(u.SProxy.value)(new K.Just(qa))))(function () {
                return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                  return "descs_on";
                }))()(u.SProxy.value)(new K.Just(!0)));
              });
            });
          });
        });
      });
    }))(V);
  },
      sb = function sb(R) {
    var V = P.map(F.functorNonEmptyArray)(rb)(R.supplementaryProducts),
        ba = P.map(F.functorNonEmptyArray)(w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "identifier";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "identifierType";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "relationType";
    }))(w.fromRecordOptionNil)()()()())()()()())()()()())()))(R.relatedIdentifiers),
        ea = w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "date";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "identifier";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "lastModified";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "supplementaryProducts";
    }))(w.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(R),
        pa = w.fromRecord(w.fromRecordAny(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "identifier";
    }))(w.fromRecordOptionCons(new u.IsSymbol(function () {
      return "identifierType";
    }))(w.fromRecordOptionNil)()()()())()()()())())(R.identifier),
        qa = z.length(R.supplementaryProducts),
        sa = z.length(R.relatedIdentifiers);
    return v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
      return "identifier_opt";
    }))()(u.SProxy.value)(new K.Just(pa))))(function () {
      return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
        return "date_Ei";
      }))()(u.SProxy.value)(K.Just.create(new E.Right(R.date)))))(function () {
        return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
          return "_numRelIds";
        }))()(u.SProxy.value)(new K.Just(sa))))(function () {
          return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "relId_opts";
          }))()(u.SProxy.value)(new K.Just(ba))))(function () {
            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
              return "_numSupProds";
            }))()(u.SProxy.value)(new K.Just(qa))))(function () {
              return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "supProd_opts";
              }))()(u.SProxy.value)(new K.Just(V))))(function () {
                return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                  return "descs_on";
                }))()(u.SProxy.value)(new K.Just(!0)));
              });
            });
          });
        });
      });
    }))(ea);
  },
      Pa = function () {
    var R = L.lmap(E.bifunctorEither)(function (ba) {
      return ya.error("Error reading XML - please make sure it is well-formed.");
    }),
        V = n.bind(c.widgetBind)(k.input(b.widgetLiftWidget)([m._type("file"), P.map(f.functorProps)(U.evTargetElem)(m.onChange)]))(function (ba) {
      return n.bind(c.widgetBind)(fa.liftEffect(c.widgetMonadEff(A.monoidArray))(B.runMaybeT(n.bind(B.bindMaybeT(ra.monadEffect))(ba)(function (ea) {
        return n.bind(B.bindMaybeT(ra.monadEffect))(B.MaybeT(t.pure(ra.applicativeEffect)(za.fromElement(ea))))(function (pa) {
          return n.bind(B.bindMaybeT(ra.monadEffect))(B.MaybeT(za.files(pa)))(function (qa) {
            return n.bind(B.bindMaybeT(ra.monadEffect))(B.MaybeT(t.pure(ra.applicativeEffect)(ta.item(0)(qa))))(function (sa) {
              return t.pure(B.applicativeMaybeT(ra.monadEffect))(ja.toBlob(sa));
            });
          });
        });
      }))))(function (ea) {
        if (ea instanceof K.Nothing) return V;
        if (ea instanceof K.Just) return n.bind(c.widgetBind)(ca.liftAff(c.widgetMonadAff(A.monoidArray))(Ga.readAsText(ea.value0)))(function (pa) {
          return n.bind(c.widgetBind)(fa.liftEffect(c.widgetMonadEff(A.monoidArray))(C.runExceptT(n.bind(C.bindExceptT(ra.monadEffect))(C.ExceptT(P.map(ra.functorEffect)(R)(ya["try"](oa.getDefaultParseEnv(pa)))))(function (qa) {
            return C.ExceptT(ya["try"](Ha.readRecord(qa)));
          }))))(function (qa) {
            if (qa instanceof E.Right) return t.pure(c.widgetApplicative)(qa.value0);

            if (qa instanceof E.Left) {
              var sa = qa.value0;
              qa = k.div(c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([]);
              var Fa = V,
                  Ka = k.div_(c.widgetShiftMap)([aa.errorDisplayBox]),
                  Qa = k.div_(c.widgetShiftMap)([]),
                  Ra = k.span(c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([aa.errorDisplay]),
                  Sa = k.text(b.widgetLiftWidget);
              sa = "Couldn't decode MetajeloXML: " + N.show(ya.showError)(sa);
              return qa([Fa, Ka(Qa(Ra([Sa(sa)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 160, column 11 - line 162, column 37): " + [qa.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 153, column 7 - line 162, column 37): " + [ea.constructor.name]);
      });
    });
    return g.loopW(w.empty)(function (ba) {
      return k.div_(c.widgetShiftMap)([])(n.bind(c.widgetBind)(V)(function (ea) {
        return t.pure(c.widgetApplicative)(sb(ea));
      }));
    });
  }(),
      lb = function lb(R) {
    var V = k.div_(c.widgetShiftMap)([aa.errorDisplayBox])(k.div_(c.widgetShiftMap)([])(k.span(c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([aa.errorDisplay])([k.text(b.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        ba = function ba(ea) {
      return function (pa) {
        var qa = function qa(sa) {
          return g.step(sa)(n.bind(c.widgetBind)(k.button_(c.widgetShiftMap)([T.downloadBtn, m.onClick, m.disabled(H["null"](sa))])(k.text(b.widgetLiftWidget)("Download")))(function () {
            return n.bind(c.widgetBind)(fa.liftEffect(c.widgetMonadEff(A.monoidArray))(ea))(function () {
              return t.pure(c.widgetApplicative)(qa(sa));
            });
          }));
        };

        return g.dyn(qa(pa));
      };
    };

    return k.div_(c.widgetShiftMap)([])(function () {
      var ea = Ja.encodeURIComponent(R);
      return n.bind(c.widgetBind)(fa.liftEffect(c.widgetMonadEff(A.monoidArray))(cb(K.fromMaybe("")(ea))))(function (pa) {
        return K.maybe(V)(ba(pa))(ea);
      });
    }());
  },
      tb = function tb(R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.creator])(U.textInput(R));
  },
      ub = function ub(R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.creatorList])(U.nonEmptyArrayView(tb)(R));
  },
      ib = function ib(R) {
    return function (V) {
      var ba = P.map(P.functorArray)(function (qa) {
        return qa.tab;
      })(R),
          ea = P.map(P.functorArray)(function (qa) {
        return qa.page;
      })(R),
          pa = k["div'"](c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([k.text(b.widgetLiftWidget)("No pages to show!")]);
      return n.bind(c.widgetBind)(function (qa) {
        return function (sa) {
          return function (Fa) {
            return k.div(qa)(sa)([T.sideBarGrid])([k.div(qa)(sa)([T.sideBarMenu])([k.div(qa)(sa)([T.sideBarCol])(Fa)])]);
          };
        };
      }(c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([k.nav(c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([T.sideBarNav])(function (qa) {
        return P.map(P.functorArray)(function (sa) {
          return n.discard(n.discardUnit)(c.widgetBind)(P["void"](c.widgetFunctor)(k.div(c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([m.onClick, T.sideBarTab])([P.map(c.widgetFunctor)(ha.absurd)(ma.snd(sa))])))(function () {
            return t.pure(c.widgetApplicative)(ma.fst(sa));
          });
        })(D.zip(D.range(0)(D.length(qa)))(qa));
      }(ba)), P.voidRight(c.widgetFunctor)(V)(function (qa) {
        return K.fromMaybe(pa)(D.index(ea)(qa));
      }(V))]))(function (qa) {
        return ib(R)(qa);
      });
    };
  },
      mb = function mb(R) {
    var V = function V(ba) {
      return g.step(ba)(n.bind(c.widgetBind)(k.button_(c.widgetShiftMap)([T.clipBtn, m.onClick, m.disabled(H["null"](ba))])(k.text(b.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return n.bind(c.widgetBind)(fa.liftEffect(c.widgetMonadEff(A.monoidArray))(Ma.copyToClipboard(ba)))(function () {
          return t.pure(c.widgetApplicative)(V(ba));
        });
      }));
    };

    return g.dyn(V(R));
  },
      Ya = function Ya(R) {
    var V = function V(ba) {
      return K.maybe(t.pure(ra.applicativeEffect)(""))(Ca.recordToString)(ba);
    };

    return n.bind(c.widgetBind)(fa.liftEffect(c.widgetMonadEff(A.monoidArray))(ka.sequence(ka.traversableMaybe)(ra.applicativeEffect)(P.map(K.functorMaybe)($a)(R))))(function (ba) {
      return k.div(c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([T.recPreview])([n.bind(c.widgetBind)(fa.liftEffect(c.widgetMonadEff(A.monoidArray))(V(ba)))(function (ea) {
        return k.div(c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([T.previewButtons])([lb(ea), mb(ea)]);
      }), k["br'"](b.widgetLiftWidget), J.fold(J.foldableMaybe)(c.widgetMonoid(A.monoidArray))(P.map(K.functorMaybe)(Y.mkRecordWidget)(ba))]);
    });
  },
      ab = function ab(R) {
    return function (V) {
      return function (ba) {
        ba = {
          tab: k.text(b.widgetLiftWidget)("Preview"),
          page: Ya(R)
        };
        var ea = {
          tab: k.text(b.widgetLiftWidget)("DataCite Retrieval"),
          page: k.text(b.widgetLiftWidget)("TODO")
        };
        return ib([ba, ea])(0);
      };
    };
  },
      vb = function vb(R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.sustainability])(n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.span_(r.shiftMapCofree(A.monoidArray))([T.missionStatement])(U.urlInput(w.getWithDefault(new u.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new E.Left(""))(u.SProxy.value)(R))))(function (V) {
      var ba = E.hush(V);
      return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.span_(r.shiftMapCofree(A.monoidArray))([T.fundingStatement])(U.urlInput(w.getWithDefault(new u.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new E.Left(""))(u.SProxy.value)(R))))(function (ea) {
        var pa = E.hush(ea);
        return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(u.SProxy.value)(new K.Just(V))))(function () {
          return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "missionStatementURL";
          }))()(u.SProxy.value)(ba)))(function () {
            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(u.SProxy.value)(new K.Just(ea))))(function () {
              return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(u.SProxy.value)(pa));
            });
          });
        }))(R));
      });
    }));
  },
      nb = function nb(R) {
    return function (V) {
      return k.div_(r.shiftMapCofree(A.monoidArray))([T.resourceType])(n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("resourceTypeEle")(R)))(function () {
        return n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("resourceTypeSTyp")(R)))(function () {
          return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.resourceTypeGen])(U.menuSignal(ia.boundedEnumResourceTypeGeneral)(U.isOptionResourceTypeGeneral)(w.get(new u.IsSymbol(function () {
            return "generalType";
          }))()(u.SProxy.value)(V)))))(function (ba) {
            return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.resourceTypeDescr])(U.textInput(n.join(K.bindMaybe)(P.map(K.functorMaybe)(X.fromString)(w.get(new u.IsSymbol(function () {
              return "description";
            }))()(u.SProxy.value)(V)))))))(function (ea) {
              return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "description";
              }))()(u.SProxy.value)(P.map(K.functorMaybe)(X.toString)(ea))))(function () {
                return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                  return "generalType";
                }))()(u.SProxy.value)(ba));
              }))(V));
            });
          });
        });
      }));
    };
  },
      wb = function wb(R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.resourceMDSource])(function () {
      var V = w.getWithDefault(new u.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(u.SProxy.value)(R);
      return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.url])(U.urlInput(w.getWithDefault(new u.IsSymbol(function () {
        return "url_Ei";
      }))()(new E.Left(""))(u.SProxy.value)(R)))))(function (ba) {
        var ea = E.hush(ba);
        return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([T.relType])(k.span_(r.shiftMapCofree(A.monoidArray))([])(n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("relationTypeSTyp")(V)))(function () {
          return U.menuSignal(ia.boundedEnumRelationType)(U.isOptionRelationType)(w.get(new u.IsSymbol(function () {
            return "relationType";
          }))()(u.SProxy.value)(R));
        }))))(function (pa) {
          return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "url_Ei";
          }))()(u.SProxy.value)(new K.Just(ba))))(function () {
            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
              return "url";
            }))()(u.SProxy.value)(ea)))(function () {
              return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "relationType";
              }))()(u.SProxy.value)(pa));
            });
          }))(R));
        });
      });
    }());
  },
      jb = function jb(R) {
    var V = K.fromMaybe(w.empty)(R);
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.relatedId])(n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.id])(U.textInput(w.get(new u.IsSymbol(function () {
      return "identifier";
    }))()(u.SProxy.value)(V)))))(function (ba) {
      return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.idType])(U.menuSignal(ia.boundedEnumIdentifierType)(U.isOptionIdentifierType)(w.get(new u.IsSymbol(function () {
        return "identifierType";
      }))()(u.SProxy.value)(V)))))(function (ea) {
        return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.relType])(U.menuSignal(ia.boundedEnumRelationType)(U.isOptionRelationType)(w.get(new u.IsSymbol(function () {
          return "relationType";
        }))()(u.SProxy.value)(V)))))(function (pa) {
          return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(K.Just.create(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "identifier";
          }))()(u.SProxy.value)(ba)))(function () {
            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
              return "identifierType";
            }))()(u.SProxy.value)(ea)))(function () {
              return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "relationType";
              }))()(u.SProxy.value)(pa));
            });
          }))(V)));
        });
      });
    }));
  },
      xb = function xb(R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.relatedIds])(k.span_(r.shiftMapCofree(A.monoidArray))([T.relatedIdsHeader])(k.div_(r.shiftMapCofree(A.monoidArray))([T.relatedIdList])(U.nonEmptyArrayView(jb)(R))));
  },
      yb = function yb(R) {
    var V = K.fromMaybe(w.empty)(R);
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.institutionPolicy])(function () {
      var ba = w.getWithDefault(new u.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(u.SProxy.value)(V);
      return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.policy])(U.menuSignal(U.boundedEnumPolPolType)(U.isOptionPolPolType)(K.Just.create(w.getWithDefault(new u.IsSymbol(function () {
        return "polPolType";
      }))()(U.FreeTextPolicy.value)(u.SProxy.value)(V))))))(function (ea) {
        var pa = K.fromMaybe(U.FreeTextPolicy.value)(ea);
        return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.policy])(U.textInput(w.get(new u.IsSymbol(function () {
          return "policy_str";
        }))()(u.SProxy.value)(V)))))(function (qa) {
          var sa = U.checkPolicy(pa)(K.maybe("")(X.toString)(qa));
          return n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(function () {
            if (sa instanceof E.Right) return A.mempty(c.widgetMonoid(A.monoidArray));
            if (sa instanceof E.Left) return U.errorDisplay(N.showString)(new K.Just(sa.value0));
            throw Error("Failed pattern match at Metajelo.UI (line 786, column 13 - line 788, column 40): " + [sa.constructor.name]);
          }()))(function () {
            var Fa = E.hush(sa);
            return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([T.policyType])(k.span_(r.shiftMapCofree(A.monoidArray))([])(U.menuSignal(G.boundedEnumMaybe(M.smallBoundedPolicyType)(M.boundedEnumPolicyType))(U.isOptionMaybePolicyType)(w.get(new u.IsSymbol(function () {
              return "policyType";
            }))()(u.SProxy.value)(V)))))(function (Ka) {
              return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([T.applies])(k.span_(r.shiftMapCofree(A.monoidArray))([])(n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("appliesToProductAttr")(ba)))(function () {
                return U.menuSignal(G.boundedEnumMaybe(G.smallBoundedBoolean)(G.boundedEnumBoolean))(U.isOptionMaybeBoolean)(w.get(new u.IsSymbol(function () {
                  return "appliesToProduct";
                }))()(u.SProxy.value)(V));
              }))))(function (Qa) {
                return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(K.Just.create(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                  return "polPolType";
                }))()(u.SProxy.value)(new K.Just(pa))))(function () {
                  return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                    return "policy_str";
                  }))()(u.SProxy.value)(qa)))(function () {
                    return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                      return "policy_ei";
                    }))()(u.SProxy.value)(new K.Just(sa))))(function () {
                      return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                        return "policy";
                      }))()(u.SProxy.value)(Fa)))(function () {
                        return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                          return "policyType";
                        }))()(u.SProxy.value)(Ka)))(function () {
                          return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                            return "appliesToProduct";
                          }))()(u.SProxy.value)(Qa));
                        });
                      });
                    });
                  });
                }))(V)));
              });
            });
          });
        });
      });
    }());
  },
      zb = function zb(R) {
    return function (V) {
      var ba = P.mapFlipped(K.functorMaybe)(ma.snd(V))(function (ea) {
        return P.mapFlipped(F.functorNonEmptyArray)(ea)(function (pa) {
          return v.execState(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "descs_on";
          }))()(u.SProxy.value)(new K.Just(R))))(pa);
        });
      });
      return k.div_(r.shiftMapCofree(A.monoidArray))([T.institutionPolicies])(n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("institutionPoliciesEle")(R)))(function () {
        return U.nonEmptyArrayView(yb)(new ma.Tuple(ma.fst(V), ba));
      }));
    };
  },
      ob = function ob(R) {
    return function (V) {
      return k.div_(r.shiftMapCofree(A.monoidArray))([T.identifier])(n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("identifierTypeSTyp")(R)))(function () {
        return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.id])(U.textInput(w.get(new u.IsSymbol(function () {
          return "identifier";
        }))()(u.SProxy.value)(V)))))(function (ba) {
          return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.idType])(U.menuSignal(ia.boundedEnumIdentifierType)(U.isOptionIdentifierType)(w.get(new u.IsSymbol(function () {
            return "identifierType";
          }))()(u.SProxy.value)(V)))))(function (ea) {
            return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
              return "identifier";
            }))()(u.SProxy.value)(ba)))(function () {
              return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "identifierType";
              }))()(u.SProxy.value)(ea));
            }))(V));
          });
        });
      }));
    };
  },
      pb = function pb(R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.institutionContact])(n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.contactEmail])(U.emailInput(w.getWithDefault(new u.IsSymbol(function () {
      return "email_Ei";
    }))()(new E.Left(""))(u.SProxy.value)(R)))))(function (V) {
      var ba = E.hush(V);
      return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.contactType])(U.menuSignal(G.boundedEnumMaybe(M.smallBoundedInstitutionContactType)(M.boundedEnumInstitutionContactType))(U.isOptionMaybeInstitutionContactType)(w.get(new u.IsSymbol(function () {
        return "contactType";
      }))()(u.SProxy.value)(R)))))(function (ea) {
        return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
          return "email_Ei";
        }))()(u.SProxy.value)(new K.Just(V))))(function () {
          return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "emailAddress";
          }))()(u.SProxy.value)(ba)))(function () {
            return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
              return "contactType";
            }))()(u.SProxy.value)(ea));
          });
        }))(R));
      });
    }));
  },
      Ab = function Ab(R) {
    var V = K.fromMaybe(w.empty)(R);
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.location])(function () {
      var ba = w.getWithDefault(new u.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(u.SProxy.value)(V);
      return n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("locationEle")(ba)))(function () {
        return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.institutionId])(ob(ba)(Oa(new u.IsSymbol(function () {
          return "institutionID_opt";
        }))()(u.SProxy.value)(V)))))(function (ea) {
          var pa = w.getAll(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "identifier";
          }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "identifierType";
          }))()()()()(w.getAllOptionNil))))(ea);
          return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.institutionName])(U.textInput(w.get(new u.IsSymbol(function () {
            return "institutionName";
          }))()(u.SProxy.value)(V)))))(function (qa) {
            return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.institutionType])(U.menuSignal(M.boundedEnumInstitutionType)(U.isOptionInstitutionType)(w.get(new u.IsSymbol(function () {
              return "institutionType";
            }))()(u.SProxy.value)(V)))))(function (sa) {
              return n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(k["br'"](b.widgetLiftWidget)))(function () {
                return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.superOrg])(U.textInput(n.join(K.bindMaybe)(w.get(new u.IsSymbol(function () {
                  return "superOrganizationName";
                }))()(u.SProxy.value)(V))))))(function (Fa) {
                  return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(pb(Oa(new u.IsSymbol(function () {
                    return "institutionContact_opt";
                  }))()(u.SProxy.value)(V)))(function (Ka) {
                    var Qa = w.getSubset()()(da.consKeys(new u.IsSymbol(function () {
                      return "contactType";
                    }))(da.consKeys(new u.IsSymbol(function () {
                      return "emailAddress";
                    }))(da.nilKeys)))(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
                      return "contactType";
                    }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                      return "emailAddress";
                    }))()()()()(w.getAllOptionNil))))(Ka);
                    return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(vb(Oa(new u.IsSymbol(function () {
                      return "iSustain_opt";
                    }))()(u.SProxy.value)(V)))(function (Ra) {
                      var Sa = w.getSubset()()(da.consKeys(new u.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))(da.consKeys(new u.IsSymbol(function () {
                        return "missionStatementURL";
                      }))(da.nilKeys)))(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                        return "missionStatementURL";
                      }))()()()()(w.getAllOptionNil))))(Ra);
                      return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(zb(ba)(new ma.Tuple(w.getWithDefault(new u.IsSymbol(function () {
                        return "_numPolicies";
                      }))()(1)(u.SProxy.value)(V), w.get(new u.IsSymbol(function () {
                        return "institutionPolicies_opt";
                      }))()(u.SProxy.value)(V))))(function (Va) {
                        var bb = ma.fst(Va),
                            kb = ma.snd(Va),
                            Eb = n.join(K.bindMaybe)(P.map(K.functorMaybe)(ka.sequence(F.traversableNonEmptyArray)(K.applicativeMaybe))(P.map(K.functorMaybe)(P.map(F.functorNonEmptyArray)(w.getSubset()()(da.consKeys(new u.IsSymbol(function () {
                          return "appliesToProduct";
                        }))(da.consKeys(new u.IsSymbol(function () {
                          return "policy";
                        }))(da.consKeys(new u.IsSymbol(function () {
                          return "policyType";
                        }))(da.nilKeys))))(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
                          return "appliesToProduct";
                        }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                          return "policy";
                        }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                          return "policyType";
                        }))()()()()(w.getAllOptionNil)))))))(kb)));
                        return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.versioning])(U.checkBoxS(w.getWithDefault(new u.IsSymbol(function () {
                          return "versioning";
                        }))()(!1)(u.SProxy.value)(V)))))(function (Fb) {
                          return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                            return "institutionID_opt";
                          }))()(u.SProxy.value)(new K.Just(ea))))(function () {
                            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                              return "institutionID";
                            }))()(u.SProxy.value)(pa)))(function () {
                              return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                return "institutionName";
                              }))()(u.SProxy.value)(qa)))(function () {
                                return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                  return "institutionType";
                                }))()(u.SProxy.value)(sa)))(function () {
                                  return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                    return "superOrganizationName";
                                  }))()(u.SProxy.value)(new K.Just(Fa))))(function () {
                                    return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                      return "institutionContact_opt";
                                    }))()(u.SProxy.value)(new K.Just(Ka))))(function () {
                                      return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                        return "institutionContact";
                                      }))()(u.SProxy.value)(Qa)))(function () {
                                        return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                          return "iSustain_opt";
                                        }))()(u.SProxy.value)(new K.Just(Ra))))(function () {
                                          return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                            return "institutionSustainability";
                                          }))()(u.SProxy.value)(Sa)))(function () {
                                            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                              return "_numPolicies";
                                            }))()(u.SProxy.value)(new K.Just(bb))))(function () {
                                              return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                                return "institutionPolicies_opt";
                                              }))()(u.SProxy.value)(kb)))(function () {
                                                return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                                  return "institutionPolicies";
                                                }))()(u.SProxy.value)(Eb)))(function () {
                                                  return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                                    return "versioning";
                                                  }))()(u.SProxy.value)(new K.Just(Fb))))(function () {
                                                    return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                                      return "descs_on";
                                                    }))()(u.SProxy.value)(new K.Just(ba)));
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
                          }))(V)))(function (Gb) {
                            return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(new K.Just(Gb));
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
      Bb = function Bb(R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.basicMetadata])(n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(Za(new ma.Tuple(w.getWithDefault(new u.IsSymbol(function () {
      return "_numTitles";
    }))()(1)(u.SProxy.value)(R), w.get(new u.IsSymbol(function () {
      return "titles";
    }))()(u.SProxy.value)(R))))(function (V) {
      var ba = ma.fst(V),
          ea = ma.snd(V);
      return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(ub(new ma.Tuple(w.getWithDefault(new u.IsSymbol(function () {
        return "_numCreators";
      }))()(1)(u.SProxy.value)(R), w.get(new u.IsSymbol(function () {
        return "creators";
      }))()(u.SProxy.value)(R))))(function (pa) {
        var qa = ma.fst(pa),
            sa = ma.snd(pa);
        return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([])(k.span_(r.shiftMapCofree(A.monoidArray))([T.pubyear])(U.natInput(w.get(new u.IsSymbol(function () {
          return "publicationYear";
        }))()(u.SProxy.value)(R)))))(function (Fa) {
          return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "titles";
          }))()(u.SProxy.value)(ea)))(function () {
            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
              return "_numTitles";
            }))()(u.SProxy.value)(new K.Just(ba))))(function () {
              return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "creators";
              }))()(u.SProxy.value)(sa)))(function () {
                return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                  return "_numCreators";
                }))()(u.SProxy.value)(new K.Just(qa))))(function () {
                  return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                    return "publicationYear";
                  }))()(u.SProxy.value)(Fa));
                });
              });
            });
          }))(R));
        });
      });
    }));
  },
      Cb = function Cb(R) {
    var V = K.fromMaybe(w.empty)(R);
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.product])(function () {
      var ba = w.getWithDefault(new u.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(u.SProxy.value)(V);
      return n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("supplementaryProductEle")(ba)))(function () {
        return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(Bb(Oa(new u.IsSymbol(function () {
          return "basicMetadata_opt";
        }))()(u.SProxy.value)(V)))(function (ea) {
          var pa = w.getSubset()()(da.consKeys(new u.IsSymbol(function () {
            return "creators";
          }))(da.consKeys(new u.IsSymbol(function () {
            return "publicationYear";
          }))(da.consKeys(new u.IsSymbol(function () {
            return "titles";
          }))(da.nilKeys))))(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "creators";
          }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "publicationYear";
          }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "titles";
          }))()()()()(w.getAllOptionNil)))))(ea);
          return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([T.resourceId])(ob(ba)(Oa(new u.IsSymbol(function () {
            return "resourceID_opt";
          }))()(u.SProxy.value)(V))))(function (qa) {
            var sa = w.getAll(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
              return "identifier";
            }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
              return "identifierType";
            }))()()()()(w.getAllOptionNil))))(qa);
            return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(nb(ba)(Oa(new u.IsSymbol(function () {
              return "resourceType_opt";
            }))()(u.SProxy.value)(V)))(function (Fa) {
              var Ka = w.getSubset()()(da.consKeys(new u.IsSymbol(function () {
                return "description";
              }))(da.consKeys(new u.IsSymbol(function () {
                return "generalType";
              }))(da.nilKeys)))(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
                return "description";
              }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                return "generalType";
              }))()()()()(w.getAllOptionNil))))(Fa);
              return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(eb(ba)(new ma.Tuple(w.getWithDefault(new u.IsSymbol(function () {
                return "_numFormats";
              }))()(0)(u.SProxy.value)(V), w.getWithDefault(new u.IsSymbol(function () {
                return "format";
              }))()([])(u.SProxy.value)(V))))(function (Qa) {
                var Ra = ma.fst(Qa),
                    Sa = ma.snd(Qa);
                return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(wb(K.fromMaybe(w.empty)(La(new u.IsSymbol(function () {
                  return "resMdsOpts_opt";
                }))()(u.SProxy.value)(V)(ba))))(function (Va) {
                  var bb = w.getSubset()()(da.consKeys(new u.IsSymbol(function () {
                    return "relationType";
                  }))(da.consKeys(new u.IsSymbol(function () {
                    return "url";
                  }))(da.nilKeys)))(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
                    return "relationType";
                  }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                    return "url";
                  }))()()()()(w.getAllOptionNil))))(Va);
                  return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(Ab(La(new u.IsSymbol(function () {
                    return "locationOpts_opt";
                  }))()(u.SProxy.value)(V)(ba)))(function (kb) {
                    var Eb = n.join(K.bindMaybe)(P.map(K.functorMaybe)(w.getSubset()()(da.consKeys(new u.IsSymbol(function () {
                      return "institutionContact";
                    }))(da.consKeys(new u.IsSymbol(function () {
                      return "institutionID";
                    }))(da.consKeys(new u.IsSymbol(function () {
                      return "institutionName";
                    }))(da.consKeys(new u.IsSymbol(function () {
                      return "institutionPolicies";
                    }))(da.consKeys(new u.IsSymbol(function () {
                      return "institutionSustainability";
                    }))(da.consKeys(new u.IsSymbol(function () {
                      return "institutionType";
                    }))(da.consKeys(new u.IsSymbol(function () {
                      return "superOrganizationName";
                    }))(da.consKeys(new u.IsSymbol(function () {
                      return "versioning";
                    }))(da.nilKeys)))))))))(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionContact";
                    }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionID";
                    }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionName";
                    }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionPolicies";
                    }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionSustainability";
                    }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                      return "institutionType";
                    }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                      return "superOrganizationName";
                    }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                      return "versioning";
                    }))()()()()(w.getAllOptionNil)))))))))))(kb));
                    return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                      return "basicMetadata_opt";
                    }))()(u.SProxy.value)(new K.Just(ea))))(function () {
                      return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                        return "basicMetadata";
                      }))()(u.SProxy.value)(pa)))(function () {
                        return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                          return "resourceID_opt";
                        }))()(u.SProxy.value)(new K.Just(qa))))(function () {
                          return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                            return "resourceID";
                          }))()(u.SProxy.value)(new K.Just(sa))))(function () {
                            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                              return "resourceType_opt";
                            }))()(u.SProxy.value)(new K.Just(Fa))))(function () {
                              return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                return "resourceType";
                              }))()(u.SProxy.value)(Ka)))(function () {
                                return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                  return "_numFormats";
                                }))()(u.SProxy.value)(new K.Just(Ra))))(function () {
                                  return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                    return "format";
                                  }))()(u.SProxy.value)(new K.Just(Sa))))(function () {
                                    return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                      return "resMdsOpts_opt";
                                    }))()(u.SProxy.value)(new K.Just(Va))))(function () {
                                      return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                        return "resourceMetadataSource";
                                      }))()(u.SProxy.value)(new K.Just(bb))))(function () {
                                        return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                          return "locationOpts_opt";
                                        }))()(u.SProxy.value)(kb)))(function () {
                                          return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                            return "location";
                                          }))()(u.SProxy.value)(Eb)))(function () {
                                            return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                              return "descs_on";
                                            }))()(u.SProxy.value)(new K.Just(ba)));
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
                    }))(V)))(function (Fb) {
                      return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(new K.Just(Fb));
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
      Db = function Db(R) {
    return function (V) {
      var ba = P.mapFlipped(K.functorMaybe)(ma.snd(V))(function (ea) {
        return P.mapFlipped(F.functorNonEmptyArray)(ea)(function (pa) {
          return v.execState(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
            return "descs_on";
          }))()(u.SProxy.value)(new K.Just(R))))(pa);
        });
      });
      return k.div_(r.shiftMapCofree(A.monoidArray))([T.products])(k.span_(r.shiftMapCofree(A.monoidArray))([T.productsHeader])(n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("supplementaryProductsEle")(R)))(function () {
        return k.div_(r.shiftMapCofree(A.monoidArray))([T.productList])(U.nonEmptyArrayView(Cb)(new ma.Tuple(ma.fst(V), ba)));
      })));
    };
  },
      qb = function qb(R) {
    var V = w.getWithDefault(new u.IsSymbol(function () {
      return "descs_on";
    }))()(!0)(u.SProxy.value)(R);
    return n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("recordEle")(V)))(function () {
      return n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("recordTypeCTyp")(V)))(function () {
        return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(db(Oa(new u.IsSymbol(function () {
          return "identifier_opt";
        }))()(u.SProxy.value)(R)))(function (ba) {
          var ea = w.getAll(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "identifier";
          }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "identifierType";
          }))()()()()(w.getAllOptionNil))))(ba);
          w.getWithDefault(new u.IsSymbol(function () {
            return "date_Ei";
          }))()(new E.Left(""))(u.SProxy.value)(R);
          return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([T.date])(n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(g.display(U.mkDesc("dateEle")(V)))(function () {
            return U.dateInput(w.getWithDefault(new u.IsSymbol(function () {
              return "date_Ei";
            }))()(new E.Left(""))(u.SProxy.value)(R));
          })))(function (pa) {
            var qa = E.hush(pa);
            return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(xb(new ma.Tuple(w.getWithDefault(new u.IsSymbol(function () {
              return "_numRelIds";
            }))()(0)(u.SProxy.value)(R), w.get(new u.IsSymbol(function () {
              return "relId_opts";
            }))()(u.SProxy.value)(R))))(function (sa) {
              var Fa = ma.fst(sa),
                  Ka = ma.snd(sa),
                  Qa = n.join(K.bindMaybe)(P.map(K.functorMaybe)(ka.sequence(F.traversableNonEmptyArray)(K.applicativeMaybe))(P.map(K.functorMaybe)(P.map(F.functorNonEmptyArray)(w.getAll(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
                return "identifier";
              }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                return "identifierType";
              }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                return "relationType";
              }))()()()()(w.getAllOptionNil)))))))(Ka)));
              return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(Db(V)(new ma.Tuple(w.getWithDefault(new u.IsSymbol(function () {
                return "_numSupProds";
              }))()(0)(u.SProxy.value)(R), w.get(new u.IsSymbol(function () {
                return "supProd_opts";
              }))()(u.SProxy.value)(R))))(function (Ra) {
                var Sa = ma.fst(Ra),
                    Va = ma.snd(Ra),
                    bb = n.join(K.bindMaybe)(P.map(K.functorMaybe)(ka.sequence(F.traversableNonEmptyArray)(K.applicativeMaybe))(P.map(K.functorMaybe)(P.map(F.functorNonEmptyArray)(w.getSubset()()(da.consKeys(new u.IsSymbol(function () {
                  return "basicMetadata";
                }))(da.consKeys(new u.IsSymbol(function () {
                  return "format";
                }))(da.consKeys(new u.IsSymbol(function () {
                  return "location";
                }))(da.consKeys(new u.IsSymbol(function () {
                  return "resourceID";
                }))(da.consKeys(new u.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))(da.consKeys(new u.IsSymbol(function () {
                  return "resourceType";
                }))(da.nilKeys)))))))(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
                  return "basicMetadata";
                }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                  return "format";
                }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                  return "location";
                }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                  return "resourceID";
                }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
                  return "resourceType";
                }))()()()()(w.getAllOptionNil))))))))))(Va)));
                return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                  return "identifier_opt";
                }))()(u.SProxy.value)(new K.Just(ba))))(function () {
                  return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                    return "identifier";
                  }))()(u.SProxy.value)(ea)))(function () {
                    return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                      return "date_Ei";
                    }))()(u.SProxy.value)(new K.Just(pa))))(function () {
                      return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                        return "date";
                      }))()(u.SProxy.value)(qa)))(function () {
                        return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                          return "_numRelIds";
                        }))()(u.SProxy.value)(new K.Just(Fa))))(function () {
                          return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                            return "relId_opts";
                          }))()(u.SProxy.value)(Ka)))(function () {
                            return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                              return "relatedIdentifiers";
                            }))()(u.SProxy.value)(Qa)))(function () {
                              return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                return "_numSupProds";
                              }))()(u.SProxy.value)(new K.Just(Sa))))(function () {
                                return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                  return "supProd_opts";
                                }))()(u.SProxy.value)(Va)))(function () {
                                  return n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                    return "supplementaryProducts";
                                  }))()(u.SProxy.value)(bb)))(function () {
                                    return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                                      return "descs_on";
                                    }))()(u.SProxy.value)(new K.Just(V)));
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                }))(R));
              });
            });
          });
        });
      });
    });
  },
      W = g.loopS(A.monoidArray)(w.empty)(function (R) {
    return k.div_(r.shiftMapCofree(A.monoidArray))([T.record])(k.div_(r.shiftMapCofree(A.monoidArray))([T.recFlexBox])(n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([T.recEditor])(function () {
      var V = w.getWithDefault(new u.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(u.SProxy.value)(R);
      return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(U.showDescSig(V))(function (ba) {
        return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(Pa)(function (ea) {
          var pa = w.getSubset()()(da.consKeys(new u.IsSymbol(function () {
            return "date";
          }))(da.consKeys(new u.IsSymbol(function () {
            return "identifier";
          }))(da.consKeys(new u.IsSymbol(function () {
            return "lastModified";
          }))(da.consKeys(new u.IsSymbol(function () {
            return "relatedIdentifiers";
          }))(da.consKeys(new u.IsSymbol(function () {
            return "supplementaryProducts";
          }))(da.nilKeys))))))(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "date";
          }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "identifier";
          }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "lastModified";
          }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "relatedIdentifiers";
          }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
            return "supplementaryProducts";
          }))()()()()(w.getAllOptionNil)))))))(ea);
          ea = K.isNothing(pa) ? R : ea;
          return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(qb(ea))(function (qa) {
            var sa = w.get(new u.IsSymbol(function () {
              return "lastModified";
            }))()(u.SProxy.value)(qa),
                Fa = va.unsafePerformEffect(ua.nowDateTime);
            return n.bind(r.bindCofree(c.widgetAlternative(A.monoidArray)))(t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(O.append(I.semigroupFirst)(sa)(I.First(new K.Just(Fa)))))(function (Ka) {
              return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(v.execState(n.discard(n.discardUnit)(p.bindStateT(y.monadIdentity))(n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                return "lastModified";
              }))()(u.SProxy.value)(Ka)))(function () {
                return n.bind(p.bindStateT(y.monadIdentity))(x.get(p.monadStateStateT(y.monadIdentity)))(w.maySetOptState(new u.IsSymbol(function () {
                  return "descs_on";
                }))()(u.SProxy.value)(new K.Just(ba)));
              }))(qa));
            });
          });
        });
      });
    }()))(function (V) {
      var ba = w.getSubset()()(da.consKeys(new u.IsSymbol(function () {
        return "date";
      }))(da.consKeys(new u.IsSymbol(function () {
        return "identifier";
      }))(da.consKeys(new u.IsSymbol(function () {
        return "lastModified";
      }))(da.consKeys(new u.IsSymbol(function () {
        return "relatedIdentifiers";
      }))(da.consKeys(new u.IsSymbol(function () {
        return "supplementaryProducts";
      }))(da.nilKeys))))))(w.getAllAny()(w.getAllOptionCons(new u.IsSymbol(function () {
        return "date";
      }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
        return "identifier";
      }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
        return "lastModified";
      }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
        return "relatedIdentifiers";
      }))()()()()(w.getAllOptionCons(new u.IsSymbol(function () {
        return "supplementaryProducts";
      }))()()()()(w.getAllOptionNil)))))))(V);
      return n.discard(n.discardUnit)(r.bindCofree(c.widgetAlternative(A.monoidArray)))(k.div_(r.shiftMapCofree(A.monoidArray))([T.sideBar])(g.display(ab(ba)(Ba.unit)(0))))(function () {
        return t.pure(r.applicativeCofree(c.widgetAlternative(A.monoidArray)))(V);
      });
    })));
  }),
      Z = n.bind(c.widgetBind)(ca.liftAff(c.widgetMonadAff(A.monoidArray))(n.bind(S.bindAff)(e.get(h.string)("https://api.datacite.org/dois/10.3886/E100590V1"))(function (R) {
    if (R instanceof E.Left) return wa.log(S.monadEffectAff)("GET /api response failed to decode: " + e.printError(R.value0));
    if (R instanceof E.Right) return wa.log(S.monadEffectAff)("Received response, first 100 chars: " + Q.take(100)(R.value0.body));
    throw Error("Failed pattern match at Metajelo.UI (line 82, column 5 - line 86, column 79): " + [R.constructor.name]);
  })))(function () {
    return k["div'"](c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([k.div(c.widgetMultiAlternative(A.monoidArray))(c.widgetShiftMap)([T.page])(t.pure(t.applicativeArray)(g.dyn(W)))]);
  });

  d.runFormSPA = function (R) {
    return q.runWidgetInDom(R)(Z);
  };

  d.page = Z;
  d.utf8DataAttr = "data:text/plain;charset=utf-8";
  d.downloadButton = lb;
  d.mkDLAnchorAndClicker = cb;
  d.uploadButtonSig = Pa;
  d.copyButton = mb;
  d.fillMetajeloRecordExtra = sb;
  d.fillSProdExtra = rb;
  d.fillBasicMetadataExtra = Ua;
  d.fillLocationRowExtra = l;
  d.fillIContactExtra = hb;
  d.fillSustainExtra = fb;
  d.fillPolicyExtra = Wa;
  d.fillResourceMDSExtra = gb;
  d.accumulateMetajeloRecord = W;
  d.recWidg = Ya;
  d.finalizeRecord = $a;
  d.accumulateMetajeloRecUI = qb;
  d.accumulateSuppProd = Cb;
  d.supProdSigArray = Db;
  d.accumulateLocation = Ab;
  d.accumulateSustain = vb;
  d.accumulateIdent = ob;
  d.genRecIdent = db;
  d.accumulateRelatedIdent = jb;
  d.relIdSigArray = xb;
  d.accumulateBasicMetadata = Bb;
  d.accumulateResType = nb;
  d.formatSignal = Xa;
  d.formatSigArray = eb;
  d.titleSignal = Ta;
  d.titleSigArray = Za;
  d.creatorSignal = tb;
  d.creatorSigArray = ub;
  d.accumulateResMdSource = wb;
  d.accumulateContact = pb;
  d.accumulatePolicy = yb;
  d.policySigArray = zb;
  d.getOpt = Oa;
  d.updateDescOn = La;
  d.makeSidebar = ab;
  d.createTabWidget = ib;
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
//# sourceMappingURL=prod.c4646f06.js.map