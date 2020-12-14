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

},{"./lib/rng":"fDBh","./lib/bytesToUuid":"dAjQ"}],"xbCx":[function(require,module,exports) {
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

$jscomp.polyfill = function (a, c, f, l) {
  c && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, c, f, l) : $jscomp.polyfillUnisolated(a, c, f, l));
};

$jscomp.polyfillUnisolated = function (a, c, f, l) {
  f = $jscomp.global;
  a = a.split(".");

  for (l = 0; l < a.length - 1; l++) {
    var h = a[l];
    if (!(h in f)) return;
    f = f[h];
  }

  a = a[a.length - 1];
  l = f[a];
  c = c(l);
  c != l && null != c && $jscomp.defineProperty(f, a, {
    configurable: !0,
    writable: !0,
    value: c
  });
};

$jscomp.polyfillIsolated = function (a, c, f, l) {
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
  c = c(f);
  null != c && (a ? $jscomp.defineProperty($jscomp.polyfills, h, {
    configurable: !0,
    writable: !0,
    value: c
  }) : c !== f && ($jscomp.propertyToPolyfillSymbol[h] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(h) : $jscomp.POLYFILL_PREFIX + h, h = $jscomp.propertyToPolyfillSymbol[h], $jscomp.defineProperty(l, h, {
    configurable: !0,
    writable: !0,
    value: c
  })));
};

$jscomp.initSymbol = function () {};

$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;

  var c = function c(h, b) {
    this.$jscomp$symbol$id_ = h;
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
      l = function l(h) {
    if (this instanceof l) throw new TypeError("Symbol is not a constructor");
    return new c("jscomp_symbol_" + (h || "") + "_" + f++, h);
  };

  return l;
}, "es6", "es3");

$jscomp.initSymbolIterator = function () {};

$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var c = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), f = 0; f < c.length; f++) {
    var l = $jscomp.global[c[f]];
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

$jscomp.checkStringArgs = function (a, c, f) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + f + " must not be null or undefined");
  if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + f + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (c) {
    var f = $jscomp.checkStringArgs(this, null, "codePointAt"),
        l = f.length;
    c = Number(c) || 0;

    if (0 <= c && c < l) {
      c |= 0;
      var h = f.charCodeAt(c);
      if (55296 > h || 56319 < h || c + 1 === l) return h;
      c = f.charCodeAt(c + 1);
      return 56320 > c || 57343 < c ? h : 1024 * (h - 55296) + c + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (c) {
    for (var f = "", l = 0; l < arguments.length; l++) {
      var h = Number(arguments[l]);
      if (0 > h || 1114111 < h || h !== Math.floor(h)) throw new RangeError("invalid_code_point " + h);
      65535 >= h ? f += String.fromCharCode(h) : (h -= 65536, f += String.fromCharCode(h >>> 10 & 1023 | 55296), f += String.fromCharCode(h & 1023 | 56320));
    }

    return f;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (c, f, l) {
    f = null != f ? f : function (d) {
      return d;
    };
    var h = [],
        b = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];

    if ("function" == typeof b) {
      c = b.call(c);

      for (var e = 0; !(b = c.next()).done;) {
        h.push(f.call(l, b.value, e++));
      }
    } else for (b = c.length, e = 0; e < b; e++) {
      h.push(f.call(l, c[e], e));
    }

    return h;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (c, f) {
    var l = $jscomp.checkStringArgs(this, c, "endsWith");
    c += "";
    void 0 === f && (f = l.length);
    f = Math.max(0, Math.min(f | 0, l.length));

    for (var h = c.length; 0 < h && 0 < f;) {
      if (l[--f] != c[--h]) return !1;
    }

    return 0 >= h;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (c, f) {
    var l = $jscomp.checkStringArgs(this, c, "startsWith");
    c += "";
    var h = l.length,
        b = c.length;
    f = Math.max(0, Math.min(f | 0, l.length));

    for (var e = 0; e < b && f < h;) {
      if (l[f++] != c[e++]) return !1;
    }

    return e >= b;
  };
}, "es6", "es3");

$jscomp.iteratorFromArray = function (a, c) {
  a instanceof String && (a += "");
  var f = 0,
      l = !1,
      h = {
    next: function next() {
      if (!l && f < a.length) {
        var b = f++;
        return {
          value: c(b, a[b]),
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
    return $jscomp.iteratorFromArray(this, function (c) {
      return c;
    });
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, c, f) {
  a instanceof String && (a = String(a));

  for (var l = a.length, h = 0; h < l; h++) {
    var b = a[h];
    if (c.call(f, b, h, a)) return {
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
      for (var l = c.length, h = f.length, b = Array(l * h), e = 0, d = 0; d < l; d++) {
        for (var n = c[d], m = 0; m < h; m++) {
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
  var c = new function (f) {
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

  a.semigroupoidFn = c;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var c = a["Control.Category"],
      f = a["Control.Semigroupoid"];
  a = new function (l, h) {
    this.Semigroupoid0 = l;
    this.identity = h;
  }(function () {
    return f.semigroupoidFn;
  }, function (l) {
    return l;
  });

  c.identity = function (l) {
    return l.identity;
  };

  c.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (c) {
    return function (f) {
      return function (l) {
        return c(l)(f);
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
      for (var l = f.length, h = Array(l), b = 0; b < l; b++) {
        h[b] = c(f[b]);
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
  var c = a["Data.Functor"],
      f = a["Data.Functor"],
      l = a["Control.Semigroupoid"],
      h = a["Data.Function"],
      b = a["Data.Unit"];

  a = function a(e) {
    this.map = e;
  };

  l = new a(l.compose(l.semigroupoidFn));
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
    return (0, e.map)(h["const"](b.unit));
  };

  c.voidRight = function (e) {
    return function (d) {
      return (0, e.map)(h["const"](d));
    };
  };

  c.functorFn = l;
  c.functorArray = f;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var c = a["Control.Apply"],
      f = a["Control.Apply"],
      l = a["Control.Category"],
      h = a["Data.Function"],
      b = a["Data.Functor"];

  a = function a(d, n) {
    this.Functor0 = d;
    this.apply = n;
  };

  var e = new a(function () {
    return b.functorFn;
  }, function (d) {
    return function (n) {
      return function (m) {
        return d(m)(n(m));
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

  c.applySecond = function (d) {
    return function (n) {
      return function (m) {
        return (0, d.apply)(b.map(d.Functor0())(h["const"](l.identity(l.categoryFn)))(n))(m);
      };
    };
  };

  c.lift2 = function (d) {
    return function (n) {
      return function (m) {
        return function (k) {
          return (0, d.apply)(b.map(d.Functor0())(n)(m))(k);
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
      f = a["Control.Apply"];

  a = function a(h, b) {
    this.Apply0 = h;
    this.pure = b;
  };

  var l = new a(function () {
    return f.applyArray;
  }, function (h) {
    return [h];
  });
  c.Applicative = a;

  c.pure = function (h) {
    return h.pure;
  };

  c.liftA1 = function (h) {
    return function (b) {
      return function (e) {
        return f.apply(h.Apply0())((0, h.pure)(b))(e);
      };
    };
  };

  c.applicativeArray = l;
})(PS);

(function (a) {
  a.arrayBind = function (c) {
    return function (f) {
      for (var l = [], h = 0, b = c.length; h < b; h++) {
        Array.prototype.push.apply(l, f(c[h]));
      }

      return l;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var c = a["Control.Bind"],
      f = a["Control.Apply"],
      l = a["Control.Category"],
      h = a["Data.Function"],
      b = function b(n, m) {
    this.Apply0 = n;
    this.bind = m;
  };

  a = new b(function () {
    return f.applyArray;
  }, a["Control.Bind"].arrayBind);

  var e = function e(n) {
    return h.flip(n.bind);
  },
      d = new function (n) {
    this.discard = n;
  }(function (n) {
    return n.bind;
  });

  c.Bind = b;

  c.bind = function (n) {
    return n.bind;
  };

  c.bindFlipped = e;

  c.discard = function (n) {
    return n.discard;
  };

  c.join = function (n) {
    return function (m) {
      return (0, n.bind)(m)(l.identity(l.categoryFn));
    };
  };

  c.composeKleisliFlipped = function (n) {
    return function (m) {
      return function (k) {
        return function (q) {
          return e(n)(m)(k(q));
        };
      };
    };
  };

  c.bindArray = a;
  c.discardUnit = d;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var c = a["Control.Monad"],
      f = a["Control.Applicative"],
      l = a["Control.Bind"];

  c.Monad = function (h, b) {
    this.Applicative0 = h;
    this.Bind1 = b;
  };

  c.ap = function (h) {
    return function (b) {
      return function (e) {
        return l.bind(h.Bind1())(b)(function (d) {
          return l.bind(h.Bind1())(e)(function (n) {
            return f.pure(h.Applicative0())(d(n));
          });
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var c = a["Data.Bifunctor"],
      f = a["Control.Category"];

  c.bimap = function (l) {
    return l.bimap;
  };

  c.Bifunctor = function (l) {
    this.bimap = l;
  };

  c.lmap = function (l) {
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
  var c = function c(f) {
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

  a.ordBooleanImpl = c;
  a.ordIntImpl = c;
  a.ordCharImpl = c;
})(PS["Data.Ord"] = PS["Data.Ord"] || {});

(function (a) {
  var c = function c(f) {
    return function (l) {
      return f === l;
    };
  };

  a.eqBooleanImpl = c;
  a.eqIntImpl = c;
  a.eqCharImpl = c;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});

(function (a) {
  a["Data.Eq"] = a["Data.Eq"] || {};
  var c = a["Data.Eq"],
      f = a["Data.Eq"];

  a = function a(b) {
    this.eq = b;
  };

  var l = new a(f.eqIntImpl),
      h = new a(f.eqCharImpl);
  f = new a(f.eqBooleanImpl);
  c.Eq = a;

  c.eq = function (b) {
    return b.eq;
  };

  c.eqBoolean = f;
  c.eqInt = l;
  c.eqChar = h;
})(PS);

(function (a) {
  a["Data.Ordering"] = a["Data.Ordering"] || {};
  a = a["Data.Ordering"];

  var c = function () {
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

  a.LT = c;
  a.GT = f;
  a.EQ = l;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var c = a["Data.Ord"],
      f = a["Data.Ord"],
      l = a["Data.Eq"],
      h = a["Data.Ordering"];

  a = function a(d, n) {
    this.Eq0 = d;
    this.compare = n;
  };

  var b = new a(function () {
    return l.eqInt;
  }, f.ordIntImpl(h.LT.value)(h.EQ.value)(h.GT.value)),
      e = new a(function () {
    return l.eqChar;
  }, f.ordCharImpl(h.LT.value)(h.EQ.value)(h.GT.value));
  f = new a(function () {
    return l.eqBoolean;
  }, f.ordBooleanImpl(h.LT.value)(h.EQ.value)(h.GT.value));
  c.Ord = a;

  c.compare = function (d) {
    return d.compare;
  };

  c.max = function (d) {
    return function (n) {
      return function (m) {
        var k = (0, d.compare)(n)(m);
        if (k instanceof h.LT) return m;
        if (k instanceof h.EQ || k instanceof h.GT) return n;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [k.constructor.name]);
      };
    };
  };

  c.ordBoolean = f;
  c.ordInt = b;
  c.ordChar = e;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var c = a["Data.Bounded"],
      f = a["Data.Bounded"],
      l = a["Data.Ord"];

  a = function a(e, d, n) {
    this.Ord0 = e;
    this.bottom = d;
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
  c.Bounded = a;

  c.bottom = function (e) {
    return e.bottom;
  };

  c.top = function (e) {
    return e.top;
  };

  c.boundedBoolean = b;
  c.boundedInt = h;
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
    return '"' + c.replace(/[\0-\x1F\x7F"\\]/g, function (l, h) {
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
      h = h < f && "0" <= c[h] && "9" >= c[h] ? "\\&" : "";
      return "\\" + l.charCodeAt(0).toString(10) + h;
    }) + '"';
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};
  var c = a["Data.Show"],
      f = a["Data.Show"];

  a = function a(e) {
    this.show = e;
  };

  var l = new a(f.showStringImpl),
      h = new a(f.showIntImpl);
  f = new a(f.showCharImpl);
  var b = new a(function (e) {
    if (e) return "true";
    if (!e) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [e.constructor.name]);
  });
  c.Show = a;

  c.show = function (e) {
    return e.show;
  };

  c.showBoolean = b;
  c.showInt = h;
  c.showChar = f;
  c.showString = l;
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var c = a["Data.Maybe"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Data.Bounded"],
      d = a["Data.Eq"],
      n = a["Data.Function"],
      m = a["Data.Functor"],
      k = a["Data.Ord"],
      q = a["Data.Ordering"],
      y = a["Data.Show"],
      r = function () {
    function x() {}

    x.value = new x();
    return x;
  }(),
      z = function () {
    function x(D) {
      this.value0 = D;
    }

    x.create = function (D) {
      return new x(D);
    };

    return x;
  }(),
      t = function t(x) {
    return function (D) {
      return function (N) {
        if (N instanceof r) return x;
        if (N instanceof z) return D(N.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [x.constructor.name, D.constructor.name, N.constructor.name]);
      };
    };
  };

  a = t(!0)(n["const"](!1));
  n = t(!1)(n["const"](!0));

  var p = new m.Functor(function (x) {
    return function (D) {
      return D instanceof z ? new z(x(D.value0)) : r.value;
    };
  }),
      A = function A(x) {
    return new d.Eq(function (D) {
      return function (N) {
        return D instanceof r && N instanceof r ? !0 : D instanceof z && N instanceof z ? d.eq(x)(D.value0)(N.value0) : !1;
      };
    });
  },
      E = function E(x) {
    return new k.Ord(function () {
      return A(x.Eq0());
    }, function (D) {
      return function (N) {
        if (D instanceof r && N instanceof r) return q.EQ.value;
        if (D instanceof r) return q.LT.value;
        if (N instanceof r) return q.GT.value;
        if (D instanceof z && N instanceof z) return k.compare(x)(D.value0)(N.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [D.constructor.name, N.constructor.name]);
      };
    });
  },
      H = new l.Apply(function () {
    return p;
  }, function (x) {
    return function (D) {
      if (x instanceof z) return m.map(p)(x.value0)(D);
      if (x instanceof r) return r.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [x.constructor.name, D.constructor.name]);
    };
  });

  l = new h.Bind(function () {
    return H;
  }, function (x) {
    return function (D) {
      if (x instanceof z) return D(x.value0);
      if (x instanceof r) return r.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [x.constructor.name, D.constructor.name]);
    };
  });
  f = new f.Applicative(function () {
    return H;
  }, z.create);
  c.Nothing = r;
  c.Just = z;
  c.maybe = t;

  c.fromMaybe = function (x) {
    return t(x)(b.identity(b.categoryFn));
  };

  c.isJust = n;
  c.isNothing = a;

  c.fromJust = function (x) {
    return function (D) {
      if (D instanceof z) return D.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [D.constructor.name]);
    };
  };

  c.functorMaybe = p;
  c.applyMaybe = H;
  c.applicativeMaybe = f;
  c.bindMaybe = l;
  c.ordMaybe = E;

  c.boundedMaybe = function (x) {
    return new e.Bounded(function () {
      return E(x.Ord0());
    }, r.value, new z(e.top(x)));
  };

  c.showMaybe = function (x) {
    return new y.Show(function (D) {
      if (D instanceof z) return "(Just " + (y.show(x)(D.value0) + ")");
      if (D instanceof r) return "Nothing";
      throw Error("Failed pattern match at Data.Maybe (line 205, column 1 - line 207, column 28): " + [D.constructor.name]);
    });
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var c = a["Data.Either"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Bifunctor"],
      d = a["Data.Function"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      k = function () {
    function p(A) {
      this.value0 = A;
    }

    p.create = function (A) {
      return new p(A);
    };

    return p;
  }(),
      q = function () {
    function p(A) {
      this.value0 = A;
    }

    p.create = function (A) {
      return new p(A);
    };

    return p;
  }(),
      y = new n.Functor(function (p) {
    return function (A) {
      if (A instanceof k) return new k(A.value0);
      if (A instanceof q) return new q(p(A.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [A.constructor.name]);
    };
  });

  a = function a(p) {
    return function (A) {
      return function (E) {
        if (E instanceof k) return p(E.value0);
        if (E instanceof q) return A(E.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [p.constructor.name, A.constructor.name, E.constructor.name]);
      };
    };
  };

  d = a(d["const"](m.Nothing.value))(m.Just.create);
  e = new e.Bifunctor(function (p) {
    return function (A) {
      return function (E) {
        if (E instanceof k) return new k(p(E.value0));
        if (E instanceof q) return new q(A(E.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [p.constructor.name, A.constructor.name, E.constructor.name]);
      };
    };
  });
  var r = new l.Apply(function () {
    return y;
  }, function (p) {
    return function (A) {
      if (p instanceof k) return new k(p.value0);
      if (p instanceof q) return n.map(y)(p.value0)(A);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [p.constructor.name, A.constructor.name]);
    };
  }),
      z = new h.Bind(function () {
    return r;
  }, a(function (p) {
    return function (A) {
      return new k(p);
    };
  })(function (p) {
    return function (A) {
      return A(p);
    };
  })),
      t = new f.Applicative(function () {
    return r;
  }, q.create);
  f = new b.Monad(function () {
    return t;
  }, function () {
    return z;
  });
  c.Left = k;
  c.Right = q;
  c.either = a;
  c.hush = d;
  c.functorEither = y;
  c.bifunctorEither = e;
  c.applicativeEither = t;
  c.bindEither = z;
  c.monadEither = f;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var c = a["Control.Monad.Rec.Class"],
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
      d = new a(function () {
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
  c.Loop = h;
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
      return function (l) {
        for (var h = f, b = l.length - 1; 0 <= b; b--) {
          h = c(l[b])(h);
        }

        return h;
      };
    };
  };

  a.foldlArray = function (c) {
    return function (f) {
      return function (l) {
        for (var h = f, b = l.length, e = 0; e < b; e++) {
          h = c(h)(l[e]);
        }

        return h;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

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
      l = a["Data.Unit"];

  a = function a(e) {
    this.append = e;
  };

  var h = new a(function (e) {
    return function (d) {
      return l.unit;
    };
  }),
      b = new a(f.concatString);
  f = new a(f.concatArray);
  c.Semigroup = a;

  c.append = function (e) {
    return e.append;
  };

  c.semigroupString = b;
  c.semigroupUnit = h;
  c.semigroupArray = f;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var c = a["Data.Monoid"],
      f = a["Data.Semigroup"],
      l = function l(e, d) {
    this.Semigroup0 = e;
    this.mempty = d;
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
  c.Monoid = l;

  c.mempty = function (e) {
    return e.mempty;
  };

  c.monoidUnit = a;
  c.monoidString = h;
  c.monoidArray = b;
})(PS);

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
  var f = new function (l, h, b, e, d, n) {
    this.conj = l;
    this.disj = h;
    this.ff = b;
    this.implies = e;
    this.not = d;
    this.tt = n;
  }(a.boolConj, a.boolDisj, !1, function (l) {
    return function (h) {
      return (0, f.disj)((0, f.not)(l))(h);
    };
  }, a.boolNot, !0);

  c.ff = function (l) {
    return l.ff;
  };

  c.disj = function (l) {
    return l.disj;
  };

  c.heytingAlgebraBoolean = f;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var c = a["Data.Monoid.Disj"],
      f = a["Data.HeytingAlgebra"],
      l = a["Data.Monoid"],
      h = a["Data.Semigroup"],
      b = function b(e) {
    return new h.Semigroup(function (d) {
      return function (n) {
        return f.disj(e)(d)(n);
      };
    });
  };

  c.Disj = function (e) {
    return e;
  };

  c.monoidDisj = function (e) {
    return new l.Monoid(function () {
      return b(e);
    }, f.ff(e));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var c = a["Data.Newtype"],
      f = a["Data.Functor"],
      l = function l(h, b) {
    this.unwrap = h;
    this.wrap = b;
  };

  a = new l(function (h) {
    return h;
  }, a["Data.Monoid.Disj"].Disj);

  c.unwrap = function (h) {
    return h.unwrap;
  };

  c.Newtype = l;

  c.alaF = function (h) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return function (m) {
              var k = f.map(b)(d.unwrap),
                  q = f.map(h)(e.wrap);
              return function (y) {
                return k(m(q(y)));
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
  a["Data.Foldable"] = a["Data.Foldable"] || {};
  var c = a["Data.Foldable"],
      f = a["Data.Foldable"],
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Function"],
      d = a["Data.Functor"],
      n = a["Data.Maybe"],
      m = a["Data.Monoid"],
      k = a["Data.Monoid.Disj"],
      q = a["Data.Newtype"],
      y = a["Data.Semigroup"],
      r = a["Data.Unit"];

  a = function a(E, H, x) {
    this.foldMap = E;
    this.foldl = H;
    this.foldr = x;
  };

  var z = function z(E) {
    return function (H) {
      return function (x) {
        return (0, H.foldr)(function () {
          var D = h.applySecond(E.Apply0());
          return function (N) {
            return D(x(N));
          };
        }())(l.pure(E)(r.unit));
      };
    };
  },
      t = new a(function (E) {
    return function (H) {
      return function (x) {
        if (x instanceof n.Nothing) return m.mempty(E);
        if (x instanceof n.Just) return H(x.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [H.constructor.name, x.constructor.name]);
      };
    };
  }, function (E) {
    return function (H) {
      return function (x) {
        if (x instanceof n.Nothing) return H;
        if (x instanceof n.Just) return E(H)(x.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [E.constructor.name, H.constructor.name, x.constructor.name]);
      };
    };
  }, function (E) {
    return function (H) {
      return function (x) {
        if (x instanceof n.Nothing) return H;
        if (x instanceof n.Just) return E(x.value0)(H);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [E.constructor.name, H.constructor.name, x.constructor.name]);
      };
    };
  }),
      p = function p(E) {
    return function (H) {
      return function (x) {
        return (0, E.foldr)(function (D) {
          return function (N) {
            return y.append(H.Semigroup0())(x(D))(N);
          };
        })(m.mempty(H));
      };
    };
  },
      A = new a(function (E) {
    return p(A)(E);
  }, f.foldlArray, f.foldrArray);

  c.Foldable = a;

  c.foldr = function (E) {
    return E.foldr;
  };

  c.foldl = function (E) {
    return E.foldl;
  };

  c.foldMap = function (E) {
    return E.foldMap;
  };

  c.fold = function (E) {
    return function (H) {
      return (0, E.foldMap)(H)(b.identity(b.categoryFn));
    };
  };

  c.traverse_ = z;

  c.for_ = function (E) {
    return function (H) {
      return e.flip(z(E)(H));
    };
  };

  c.intercalate = function (E) {
    return function (H) {
      return function (x) {
        return function (D) {
          return (0, E.foldl)(function (N) {
            return function (G) {
              return N.init ? {
                init: !1,
                acc: G
              } : {
                init: !1,
                acc: y.append(H.Semigroup0())(N.acc)(y.append(H.Semigroup0())(x)(G))
              };
            };
          })({
            init: !0,
            acc: m.mempty(H)
          })(D).acc;
        };
      };
    };
  };

  c.any = function (E) {
    return function (H) {
      return q.alaF(d.functorFn)(d.functorFn)(q.newtypeDisj)(q.newtypeDisj)(k.Disj)((0, E.foldMap)(k.monoidDisj(H)));
    };
  };

  c.find = function (E) {
    return function (H) {
      return (0, E.foldl)(function (x) {
        return function (D) {
          return x instanceof n.Nothing && H(D) ? new n.Just(D) : x;
        };
      })(n.Nothing.value);
    };
  };

  c.foldableArray = A;
  c.foldableMaybe = t;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var c = a["Data.NonEmpty"],
      f = a["Control.Plus"],
      l = a["Data.Foldable"],
      h = a["Data.Functor"],
      b = a["Data.Semigroup"],
      e = a["Data.Show"],
      d = function () {
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

  c.NonEmpty = d;

  c.singleton = function (n) {
    return function (m) {
      return new d(m, f.empty(n));
    };
  };

  c.showNonEmpty = function (n) {
    return function (m) {
      return new e.Show(function (k) {
        return "(NonEmpty " + (e.show(n)(k.value0) + (" " + (e.show(m)(k.value1) + ")")));
      });
    };
  };

  c.functorNonEmpty = function (n) {
    return new h.Functor(function (m) {
      return function (k) {
        return new d(m(k.value0), h.map(n)(m)(k.value1));
      };
    });
  };

  c.foldableNonEmpty = function (n) {
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

  var c = a["Data.List.Types"],
      f = a["Control.Alt"],
      l = a["Control.Plus"],
      h = a["Data.Foldable"],
      b = a["Data.Function"],
      e = a["Data.Functor"],
      d = a["Data.Monoid"],
      n = a["Data.NonEmpty"],
      m = a["Data.Semigroup"],
      k = a["Data.Show"],
      q = function () {
    function x() {}

    x.value = new x();
    return x;
  }(),
      y = function () {
    function x(D, N) {
      this.value0 = D;
      this.value1 = N;
    }

    x.create = function (D) {
      return function (N) {
        return new x(D, N);
      };
    };

    return x;
  }(),
      r = new e.Functor(function (x) {
    return function (D) {
      return function (N) {
        function G(B, M) {
          if (M instanceof y && M.value1 instanceof y && M.value1.value1 instanceof y) C = new y(M, B), N = M.value1.value1.value1;else return J = !0, function (I) {
            return function (w) {
              for (var F = I, O = !1, Q; !O;) {
                Q = F;
                var X = w;
                Q instanceof y && Q.value0 instanceof y && Q.value0.value1 instanceof y && Q.value0.value1.value1 instanceof y ? (F = Q.value1, w = new y(x(Q.value0.value0), new y(x(Q.value0.value1.value0), new y(x(Q.value0.value1.value1.value0), X))), Q = void 0) : (O = !0, Q = X);
              }

              return Q;
            };
          }(B)(function (I) {
            return I instanceof y && I.value1 instanceof y && I.value1.value1 instanceof q ? new y(x(I.value0), new y(x(I.value1.value0), q.value)) : I instanceof y && I.value1 instanceof q ? new y(x(I.value0), q.value) : q.value;
          }(M));
        }

        for (var C = D, J = !1, U; !J;) {
          U = G(C, N);
        }

        return U;
      };
    }(q.value);
  });

  a = n.functorNonEmpty(r);

  var z = new h.Foldable(function (x) {
    return function (D) {
      return h.foldl(z)(function (N) {
        var G = m.append(x.Semigroup0())(N);
        return function (C) {
          return G(D(C));
        };
      })(d.mempty(x));
    };
  }, function (x) {
    return function (D) {
      return function (N) {
        for (var G = D, C = !1, J; !C;) {
          J = G;
          var U = N;
          if (U instanceof q) C = !0;else {
            if (U instanceof y) G = x(J)(U.value0), N = U.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [U.constructor.name]);
            J = void 0;
          }
        }

        return J;
      };
    };
  }, function (x) {
    return function (D) {
      var N = h.foldl(z)(b.flip(y.create))(q.value),
          G = h.foldl(z)(b.flip(x))(D);
      return function (C) {
        return G(N(C));
      };
    };
  }),
      t = n.foldableNonEmpty(z),
      p = new m.Semigroup(function (x) {
    return function (D) {
      return h.foldr(z)(y.create)(D)(x);
    };
  }),
      A = new d.Monoid(function () {
    return p;
  }, q.value),
      E = function E(x) {
    return new k.Show(function (D) {
      return D instanceof q ? "Nil" : "(" + (h.intercalate(z)(d.monoidString)(" : ")(e.map(r)(k.show(x))(D)) + " : Nil)");
    });
  },
      H = new f.Alt(function () {
    return r;
  }, m.append(p));

  f = new l.Plus(function () {
    return H;
  }, q.value);
  c.Nil = q;
  c.Cons = y;

  c.NonEmptyList = function (x) {
    return x;
  };

  c.monoidList = A;
  c.foldableList = z;
  c.plusList = f;

  c.showNonEmptyList = function (x) {
    return new k.Show(function (D) {
      return "(NonEmptyList " + (k.show(n.showNonEmpty(x)(E(x)))(D) + ")");
    });
  };

  c.functorNonEmptyList = a;
  c.foldableNonEmptyList = t;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var c = a["Data.List"],
      f = a["Control.Alt"],
      l = a["Control.Applicative"],
      h = a["Control.Bind"],
      b = a["Control.Monad.Rec.Class"],
      e = a["Data.Bifunctor"],
      d = a["Data.Functor"],
      n = a["Data.List.Types"],
      m = a["Data.Unit"],
      k = function () {
    return function (q) {
      return function (y) {
        for (var r = q, z = !1, t; !z;) {
          t = r;
          var p = y;
          if (p instanceof n.Nil) z = !0;else {
            if (p instanceof n.Cons) r = new n.Cons(p.value0, t), y = p.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [t.constructor.name, p.constructor.name]);
            t = void 0;
          }
        }

        return t;
      };
    }(n.Nil.value);
  }();

  c.manyRec = function (q) {
    return function (y) {
      return function (r) {
        return b.tailRecM(q)(function (z) {
          return h.bind(q.Monad0().Bind1())(f.alt(y.Plus1().Alt0())(d.map(y.Plus1().Alt0().Functor0())(b.Loop.create)(r))(l.pure(y.Applicative0())(new b.Done(m.unit))))(function (t) {
            return l.pure(y.Applicative0())(e.bimap(b.bifunctorStep)(function (p) {
              return new n.Cons(p, z);
            })(function (p) {
              return k(z);
            })(t));
          });
        })(n.Nil.value);
      };
    };
  };

  c.reverse = k;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var c = a["Data.Tuple"];
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
  c.Tuple = f;

  c.fst = function (l) {
    return l.value0;
  };

  c.snd = function (l) {
    return l.value1;
  };

  c.functorTuple = a;
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var c = a["Data.CatQueue"],
      f = a["Data.List"],
      l = a["Data.List.Types"],
      h = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = function () {
    function d(n, m) {
      this.value0 = n;
      this.value1 = m;
    }

    d.create = function (n) {
      return function (m) {
        return new d(n, m);
      };
    };

    return d;
  }();

  a = new e(l.Nil.value, l.Nil.value);
  c.empty = a;

  c["null"] = function (d) {
    return d.value0 instanceof l.Nil && d.value1 instanceof l.Nil ? !0 : !1;
  };

  c.snoc = function (d) {
    return function (n) {
      return new e(d.value0, new l.Cons(n, d.value1));
    };
  };

  c.uncons = function (d) {
    for (var n = !1, m; !n;) {
      if (m = d, m.value0 instanceof l.Nil && m.value1 instanceof l.Nil) n = !0, m = h.Nothing.value;else if (m.value0 instanceof l.Nil) d = new e(f.reverse(m.value1), l.Nil.value), m = void 0;else if (m.value0 instanceof l.Cons) n = !0, m = new h.Just(new b.Tuple(m.value0.value0, new e(m.value0.value1, m.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [m.constructor.name]);
    }

    return m;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var c = a["Data.CatList"],
      f = a["Data.CatQueue"],
      l = a["Data.List.Types"],
      h = a["Data.Maybe"],
      b = a["Data.Semigroup"],
      e = a["Data.Tuple"],
      d = function () {
    function q() {}

    q.value = new q();
    return q;
  }(),
      n = function () {
    function q(y, r) {
      this.value0 = y;
      this.value1 = r;
    }

    q.create = function (y) {
      return function (r) {
        return new q(y, r);
      };
    };

    return q;
  }(),
      m = function m(q) {
    return function (y) {
      if (q instanceof d) return y;
      if (y instanceof d) return q;
      if (q instanceof n) return new n(q.value0, f.snoc(q.value1)(y));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [q.constructor.name, y.constructor.name]);
    };
  },
      k = function k(q) {
    return function (y) {
      return function (r) {
        var z = function z(t) {
          return function (p) {
            return function (A) {
              for (var E = t, H = p, x = !1, D; !x;) {
                D = E;
                var N = H,
                    G = A;
                if (G instanceof l.Nil) x = !0, D = N;else {
                  if (G instanceof l.Cons) E = D, H = D(N)(G.value0), A = G.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [D.constructor.name, N.constructor.name, G.constructor.name]);
                  D = void 0;
                }
              }

              return D;
            };
          };
        };

        return function (t) {
          return function (p) {
            function A(D, N) {
              D = f.uncons(D);
              if (D instanceof h.Nothing) return H = !0, z(function (G) {
                return function (C) {
                  return C(G);
                };
              })(y)(N);
              if (D instanceof h.Just) E = D.value0.value1, p = new l.Cons(q(D.value0.value0), N);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [D.constructor.name]);
            }

            for (var E = t, H = !1, x; !H;) {
              x = A(E, p);
            }

            return x;
          };
        }(r)(l.Nil.value);
      };
    };
  };

  a = d.value;
  b = new b.Semigroup(m);
  c.empty = a;

  c.snoc = function (q) {
    return function (y) {
      return m(q)(new n(y, f.empty));
    };
  };

  c.uncons = function (q) {
    if (q instanceof d) return h.Nothing.value;

    if (q instanceof n) {
      var y = h.Just,
          r = e.Tuple,
          z = q.value0;
      q = f["null"](q.value1) ? d.value : k(m)(d.value)(q.value1);
      return new y(new r(z, q));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [q.constructor.name]);
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
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.CatList"],
      d = a["Data.Either"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      k = a["Data.Semigroup"],
      q = a["Unsafe.Coerce"],
      y = function () {
    function D(N, G) {
      this.value0 = N;
      this.value1 = G;
    }

    D.create = function (N) {
      return function (G) {
        return new D(N, G);
      };
    };

    return D;
  }(),
      r = function () {
    function D(N) {
      this.value0 = N;
    }

    D.create = function (N) {
      return new D(N);
    };

    return D;
  }(),
      z = function () {
    function D(N, G) {
      this.value0 = N;
      this.value1 = G;
    }

    D.create = function (N) {
      return function (G) {
        return new D(N, G);
      };
    };

    return D;
  }(),
      t = function t(D) {
    function N(J) {
      var U = function U(M) {
        return function (I) {
          return new y(M.value0, k.append(e.semigroupCatList)(M.value1)(I));
        };
      };

      if (J.value0 instanceof r) {
        var B = e.uncons(J.value1);
        if (B instanceof m.Nothing) return G = !0, new r(J.value0.value0);

        if (B instanceof m.Just) {
          D = U((0, B.value0.value0)(J.value0.value0))(B.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [B.constructor.name]);
      }

      if (J.value0 instanceof z) return G = !0, new z(J.value0.value0, function (M) {
        return U(J.value0.value1(M))(J.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [J.value0.constructor.name]);
    }

    for (var G = !1, C; !G;) {
      C = N(D);
    }

    return C;
  },
      p = function p(D) {
    return function (N) {
      return function (G) {
        G = t(G);
        if (G instanceof r) return N(G.value0);
        if (G instanceof z) return D(G.value0)(G.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [G.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return x;
  }, function () {
    return E;
  });
  var A = new n.Functor(function (D) {
    return function (N) {
      return h.bindFlipped(E)(function () {
        var G = f.pure(x);
        return function (C) {
          return G(D(C));
        };
      }())(N);
    };
  }),
      E = new h.Bind(function () {
    return H;
  }, function (D) {
    return function (N) {
      return new y(D.value0, e.snoc(D.value1)(N));
    };
  }),
      H = new l.Apply(function () {
    return A;
  }, b.ap(a)),
      x = new f.Applicative(function () {
    return H;
  }, function (D) {
    return new y(r.create(D), e.empty);
  });

  c.wrap = function (D) {
    return new y(new z(D, q.unsafeCoerce), e.empty);
  };

  c.liftF = function (D) {
    return new y(new z(D, function () {
      var N = f.pure(x);
      return function (G) {
        return N(G);
      };
    }()), e.empty);
  };

  c.resume = function (D) {
    return p(function (N) {
      return function (G) {
        return new d.Left(n.map(D)(G)(N));
      };
    })(d.Right.create);
  };

  c["resume'"] = p;
  c.freeFunctor = A;
  c.freeBind = E;
  c.freeApplicative = x;
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

  a.Parallel = function (c, f, l, h) {
    this.Applicative1 = c;
    this.Monad0 = f;
    this.parallel = l;
    this.sequential = h;
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
      for (var l = c > f ? -1 : 1, h = Array(l * (f - c) + 1), b = c, e = 0; b !== f;) {
        h[e++] = b, b += l;
      }

      h[e] = b;
      return h;
    };
  };

  a.fromFoldableImpl = function () {
    function c(h, b) {
      this.head = h;
      this.tail = b;
    }

    function f(h) {
      return function (b) {
        return new c(h, b);
      };
    }

    var l = {};
    return function (h) {
      return function (b) {
        var e = [],
            d = 0;

        for (b = h(f)(l)(b); b !== l;) {
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
      var l = c.slice();
      l.push(f);
      return l;
    };
  };

  a["uncons'"] = function (c) {
    return function (f) {
      return function (l) {
        return 0 === l.length ? c({}) : f(l[0])(l.slice(1));
      };
    };
  };

  a.indexImpl = function (c) {
    return function (f) {
      return function (l) {
        return function (h) {
          return 0 > h || h >= l.length ? f : c(l[h]);
        };
      };
    };
  };

  a._updateAt = function (c) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function (b) {
            if (0 > l || l >= b.length) return f;
            b = b.slice();
            b[l] = h;
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
      return function (l) {
        return l.slice(c, f);
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
      l = a["Control.Bind"],
      h = a["Control.Category"],
      b = a["Data.Boolean"],
      e = a["Data.Foldable"],
      d = a["Data.Function"],
      n = a["Data.Maybe"];
  a = f._updateAt(n.Just.create)(n.Nothing.value);

  var m = f["uncons'"](d["const"](n.Nothing.value))(function (r) {
    return function (z) {
      return new n.Just({
        head: r,
        tail: z
      });
    };
  }),
      k = function k(r) {
    return [r];
  },
      q = f.indexImpl(n.Just.create)(n.Nothing.value),
      y = d.flip(l.bind(l.bindArray));

  l = function (r) {
    return y(function () {
      var z = n.maybe([])(k);
      return function (t) {
        return z(r(t));
      };
    }());
  }(h.identity(h.categoryFn));

  c.fromFoldable = function (r) {
    return f.fromFoldableImpl(e.foldr(r));
  };

  c.singleton = k;

  c.head = function (r) {
    return q(r)(0);
  };

  c.init = function (r) {
    if (0 === f.length(r)) return n.Nothing.value;
    if (b.otherwise) return new n.Just(f.slice(0)(f.length(r) - 1 | 0)(r));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [r.constructor.name]);
  };

  c.uncons = m;
  c.updateAt = a;
  c.concatMap = y;
  c.catMaybes = l;
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
      l = a["Data.Boolean"],
      h = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var b = a.unsafeCoerce,
      e = a.unsafeCoerce,
      d = a.unsafeCoerce;

  a = function (m) {
    var k = h.fromJust();
    return function (q) {
      return k(m(d(q)));
    };
  }(f.uncons);

  var n = function (m) {
    return function (k) {
      return m(d(k));
    };
  }(f.length);

  c.fromArray = function (m) {
    if (0 < f.length(m)) return new h.Just(e(m));
    if (l.otherwise) return h.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [m.constructor.name]);
  };

  c.toArray = d;

  c.singleton = function (m) {
    return e(f.singleton(m));
  };

  c.length = n;

  c["cons'"] = function (m) {
    return function (k) {
      return e(f.cons(m)(k));
    };
  };

  c.snoc = function (m) {
    return function (k) {
      return e(f.snoc(d(m))(k));
    };
  };

  c.uncons = a;

  c.updateAt = function (m) {
    return function (k) {
      var q = f.updateAt(m)(k);
      return function (y) {
        return b(q(d(y)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (c) {
    return function (f) {
      for (var l = f[0], h = f.length, b = 1; b < h; b++) {
        l = c(l)(f[b]);
      }

      return l;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (c) {
    return function (f) {
      for (var l = f.length, h = Array(l), b = 0; b < l; b++) {
        h[b] = c(b)(f[b]);
      }

      return h;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var c = a["Data.FunctorWithIndex"],
      f = a["Data.Functor"];
  a = new function (l, h) {
    this.Functor0 = l;
    this.mapWithIndex = h;
  }(function () {
    return f.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  c.mapWithIndex = function (l) {
    return l.mapWithIndex;
  };

  c.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var c = a["Data.FoldableWithIndex"],
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
      d = function d(m) {
    return function (k) {
      return function (q) {
        return (0, m.foldrWithIndex)(function (y) {
          return function (r) {
            return function (z) {
              return b.append(k.Semigroup0())(q(y)(r))(z);
            };
          };
        })(h.mempty(k));
      };
    };
  },
      n = new function (m, k, q, y) {
    this.Foldable0 = m;
    this.foldMapWithIndex = k;
    this.foldlWithIndex = q;
    this.foldrWithIndex = y;
  }(function () {
    return f.foldableArray;
  }, function (m) {
    return d(n)(m);
  }, function (m) {
    return function (k) {
      var q = f.foldl(f.foldableArray)(function (r) {
        return function (z) {
          return m(z.value0)(r)(z.value1);
        };
      })(k),
          y = l.mapWithIndex(l.functorWithIndexArray)(e.create);
      return function (r) {
        return q(y(r));
      };
    };
  }, function (m) {
    return function (k) {
      var q = f.foldr(f.foldableArray)(function (r) {
        return function (z) {
          return m(r.value0)(r.value1)(z);
        };
      })(k),
          y = l.mapWithIndex(l.functorWithIndexArray)(e.create);
      return function (r) {
        return q(y(r));
      };
    };
  });

  c.foldlWithIndex = function (m) {
    return m.foldlWithIndex;
  };

  c.foldableWithIndexArray = n;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var c = a["Data.Semigroup.Foldable"],
      f = a["Data.Functor"];

  c.Foldable1 = function (l, h, b) {
    this.Foldable0 = l;
    this.fold1 = h;
    this.foldMap1 = b;
  };

  c.foldMap1 = function (l) {
    return l.foldMap1;
  };

  c.foldMap1Default = function (l) {
    return function (h) {
      return function (b) {
        return function (e) {
          var d = (0, l.fold1)(b),
              n = f.map(h)(e);
          return function (m) {
            return d(n(m));
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

    function l(b) {
      return function (e) {
        return function (d) {
          return [b, e, d];
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
        return function (d) {
          return function (n) {
            return function (m) {
              function k(q, y) {
                switch (y - q) {
                  case 0:
                    return d([]);

                  case 1:
                    return e(c)(n(m[q]));

                  case 2:
                    return b(e(f)(n(m[q])))(n(m[q + 1]));

                  case 3:
                    return b(b(e(l)(n(m[q])))(n(m[q + 1])))(n(m[q + 2]));

                  default:
                    var r = q + 2 * Math.floor((y - q) / 4);
                    return b(e(h)(k(q, r)))(k(r, y));
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
  var c = a["Data.Traversable"],
      f = a["Data.Traversable"],
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Foldable"],
      d = a["Data.Functor"],
      n = a["Data.Maybe"];

  a = function a(y, r, z, t) {
    this.Foldable1 = y;
    this.Functor0 = r;
    this.sequence = z;
    this.traverse = t;
  };

  var m = new a(function () {
    return e.foldableMaybe;
  }, function () {
    return n.functorMaybe;
  }, function (y) {
    return function (r) {
      if (r instanceof n.Nothing) return l.pure(y)(n.Nothing.value);
      if (r instanceof n.Just) return d.map(y.Apply0().Functor0())(n.Just.create)(r.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [r.constructor.name]);
    };
  }, function (y) {
    return function (r) {
      return function (z) {
        if (z instanceof n.Nothing) return l.pure(y)(n.Nothing.value);
        if (z instanceof n.Just) return d.map(y.Apply0().Functor0())(n.Just.create)(r(z.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [r.constructor.name, z.constructor.name]);
      };
    };
  }),
      k = function k(y) {
    return function (r) {
      return (0, y.traverse)(r)(b.identity(b.categoryFn));
    };
  },
      q = new a(function () {
    return e.foldableArray;
  }, function () {
    return d.functorArray;
  }, function (y) {
    return k(q)(y);
  }, function (y) {
    return f.traverseArrayImpl(h.apply(y.Apply0()))(d.map(y.Apply0().Functor0()))(l.pure(y));
  });

  c.traverse = function (y) {
    return y.traverse;
  };

  c.sequence = function (y) {
    return y.sequence;
  };

  c.traversableArray = q;
  c.traversableMaybe = m;
})(PS);

(function (a) {
  a.unfoldr1ArrayImpl = function (c) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function (b) {
            return function (e) {
              for (var d = [];;) {
                e = b(e);
                d.push(l(e));
                e = h(e);
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
      l = a["Data.Maybe"],
      h = a["Data.Tuple"];
  a = new function (e) {
    this.unfoldr1 = e;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(l.isNothing)(l.fromJust())(h.fst)(h.snd));

  var b = function b(e) {
    return function (d) {
      return function (n) {
        return (0, e.unfoldr1)(function (m) {
          if (0 >= m) return new h.Tuple(n, l.Nothing.value);
          if (f.otherwise) return new h.Tuple(n, new l.Just(m - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [m.constructor.name]);
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
      l = a["Data.Semigroup"],
      h = a["Data.Semigroup.Foldable"],
      b = a["Data.Unfoldable1"].unfoldable1Array,
      e = a["Data.Traversable"].traversableArray,
      d = l.semigroupArray,
      n = a["Data.Functor"].functorArray,
      m = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      k = a["Data.Foldable"].foldableArray,
      q = new h.Foldable1(function () {
    return k;
  }, function (y) {
    return f.fold1Impl(l.append(y));
  }, function (y) {
    return h.foldMap1Default(q)(n)(y);
  });
  c.semigroupNonEmptyArray = d;
  c.functorNonEmptyArray = n;
  c.foldableNonEmptyArray = k;
  c.foldableWithIndexNonEmptyArray = m;
  c.foldable1NonEmptyArray = q;
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
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"],
      d = a["Data.Functor"],
      n = a["Data.Monoid"],
      m = a["Data.Semigroup"];
  a = new e.Monad(function () {
    return y;
  }, function () {
    return k;
  });
  var k = new b.Bind(function () {
    return q;
  }, f.bindE),
      q = new h.Apply(function () {
    return r;
  }, e.ap(a)),
      y = new l.Applicative(function () {
    return q;
  }, f.pureE),
      r = new d.Functor(l.liftA1(y));
  c.functorEffect = r;
  c.applyEffect = q;
  c.applicativeEffect = y;
  c.bindEffect = k;
  c.monadEffect = a;

  c.monoidEffect = function (z) {
    return new n.Monoid(function () {
      var t = z.Semigroup0();
      return new m.Semigroup(h.lift2(q)(m.append(t)));
    }, f.pureE(n.mempty(z)));
  };
})(PS);

(function (a) {
  var c = function () {
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

    function d(m) {
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
    h.takeHead = d;

    h.deleteCell = function (m) {
      null !== m.queue && (m.queue.last === m ? e(m.queue) : m.queue.head === m ? d(m.queue) : (m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), m.queue.size--, m.queue = null, m.value = null, m.next = null, m.prev = null));
    };

    h.drainVar = function (m, k) {
      if (!k.draining) {
        var q = k.puts,
            y = k.takes,
            r = k.reads,
            z,
            t;

        for (k.draining = !0;;) {
          var p = z = null;
          var A = k.value;
          var E = r.size;

          if (null !== k.error) {
            for (A = m.left(k.error); z = d(q);) {
              b(z.cb(A));
            }

            for (; p = d(r);) {
              b(p(A));
            }

            for (; t = d(y);) {
              b(t(A));
            }

            break;
          }

          A === n && (z = d(q)) && (k.value = A = z.value);

          if (A !== n) {
            for (t = d(y); E-- && (p = d(r));) {
              b(p(m.right(A)));
            }

            null !== t && (k.value = n, b(t(m.right(A))));
          }

          null !== z && b(z.cb(m.right(void 0)));
          if (k.value === n && 0 === q.size || k.value !== n && 0 === y.size) break;
        }

        k.draining = !1;
      }
    };

    return h;
  }();

  a.empty = function () {
    return new c(c.EMPTY);
  };

  a._takeVar = function (f, l, h) {
    return function () {
      var b = c.putLast(l.takes, h);
      c.drainVar(f, l);
      return function () {
        c.deleteCell(b);
      };
    };
  };

  a._tryPutVar = function (f, l, h) {
    return function () {
      return h.value === c.EMPTY && null === h.error ? (h.value = l, c.drainVar(f, h), !0) : !1;
    };
  };

  a._tryTakeVar = function (f, l) {
    return function () {
      var h = l.value;
      if (h === c.EMPTY) return f.nothing;
      l.value = c.EMPTY;
      c.drainVar(f, l);
      return f.just(h);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var c = a["Effect.AVar"],
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
      d = {
    left: l.Left.create,
    right: l.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: h.create,
    filled: b.create,
    empty: e.value
  };

  c.take = function (n) {
    return function (m) {
      return f._takeVar(d, n, m);
    };
  };

  c.tryTake = function (n) {
    return f._tryTakeVar(d, n);
  };

  c.tryPut = function (n) {
    return function (m) {
      return f._tryPutVar(d, n, m);
    };
  };

  c.empty = f.empty;
})(PS);

(function (a) {
  var c = function () {
    function f(r, z, t, p) {
      this.tag = r;
      this._1 = z;
      this._2 = t;
      this._3 = p;
    }

    function l(r) {
      var z = function z(t, p, A) {
        return new f(r, t, p, A);
      };

      z.tag = r;
      return z;
    }

    function h(r) {
      return new f("Pure", void 0);
    }

    function b(r) {
      try {
        r();
      } catch (z) {
        setTimeout(function () {
          throw z;
        }, 0);
      }
    }

    function e(r, z, t) {
      try {
        return z(t());
      } catch (p) {
        return r(p);
      }
    }

    function d(r, z, t) {
      try {
        return z(t)();
      } catch (p) {
        return t(r(p))(), h;
      }
    }

    function n(r, z, t) {
      function p(w) {
        for (var F, O, Q;;) {
          switch (Q = O = F = null, H) {
            case 2:
              H = 1;

              try {
                x = G(x), null === C ? G = null : (G = C._1, C = C._2);
              } catch (v) {
                H = 5, D = r.left(v), x = null;
              }

              break;

            case 3:
              r.isLeft(x) ? (H = 5, D = x, x = null) : null === G ? H = 5 : (H = 2, x = r.fromRight(x));
              break;

            case 1:
              switch (x.tag) {
                case "Bind":
                  G && (C = new f("Cons", G, C));
                  G = x._2;
                  H = 1;
                  x = x._1;
                  break;

                case "Pure":
                  null === G ? (H = 5, x = r.right(x._1)) : (H = 2, x = x._1);
                  break;

                case "Sync":
                  H = 3;
                  x = e(r.left, r.right, x._1);
                  break;

                case "Async":
                  H = 4;
                  x = d(r.left, x._1, function (v) {
                    return function () {
                      E === w && (E++, y.enqueue(function () {
                        E === w + 1 && (H = 3, x = v, p(E));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  H = 5;
                  D = r.left(x._1);
                  x = null;
                  break;

                case "Catch":
                  J = null === G ? new f("Cons", x, J, N) : new f("Cons", x, new f("Cons", new f("Resume", G, C), J, N), N);
                  C = G = null;
                  H = 1;
                  x = x._1;
                  break;

                case "Bracket":
                  U++;
                  J = null === G ? new f("Cons", x, J, N) : new f("Cons", x, new f("Cons", new f("Resume", G, C), J, N), N);
                  C = G = null;
                  H = 1;
                  x = x._1;
                  break;

                case "Fork":
                  H = 3;
                  F = n(r, z, x._2);
                  z && z.register(F);
                  x._1 && F.run();
                  x = r.right(F);
                  break;

                case "Sequential":
                  H = 1, x = k(r, z, x._1);
              }

              break;

            case 5:
              C = G = null;
              if (null === J) H = 6, x = N || D || x;else switch (F = J._3, Q = J._1, J = J._2, Q.tag) {
                case "Catch":
                  N && N !== F && 0 === U ? H = 5 : D && (H = 1, x = Q._2(r.fromLeft(D)), D = null);
                  break;

                case "Resume":
                  N && N !== F && 0 === U || D ? H = 5 : (G = Q._1, C = Q._2, H = 2, x = r.fromRight(x));
                  break;

                case "Bracket":
                  U--;
                  null === D && (O = r.fromRight(x), J = new f("Cons", new f("Release", Q._2, O), J, F), N === F || 0 < U) && (H = 1, x = Q._3(O));
                  break;

                case "Release":
                  J = new f("Cons", new f("Finalized", x, D), J, N);
                  H = 1;
                  x = N && N !== F && 0 === U ? Q._1.killed(r.fromLeft(N))(Q._2) : D ? Q._1.failed(r.fromLeft(D))(Q._2) : Q._1.completed(r.fromRight(x))(Q._2);
                  D = null;
                  U++;
                  break;

                case "Finalizer":
                  U++;
                  J = new f("Cons", new f("Finalized", x, D), J, N);
                  H = 1;
                  x = Q._1;
                  break;

                case "Finalized":
                  U--, H = 5, x = Q._1, D = Q._2;
              }
              break;

            case 6:
              for (var X in M) {
                M.hasOwnProperty(X) && (I = I && M[X].rethrow, b(M[X].handler(x)));
              }

              M = null;
              N && D ? setTimeout(function () {
                throw r.fromLeft(D);
              }, 0) : r.isLeft(x) && I && setTimeout(function () {
                if (I) throw r.fromLeft(x);
              }, 0);
              return;

            case 0:
              H = 1;
              break;

            case 4:
              return;
          }
        }
      }

      function A(w) {
        return function () {
          if (6 === H) return I = I && w.rethrow, w.handler(x)(), function () {};
          var F = B++;
          M = M || {};
          M[F] = w;
          return function () {
            null !== M && delete M[F];
          };
        };
      }

      var E = 0,
          H = 0,
          x = t,
          D = null,
          N = null,
          G = null,
          C = null,
          J = null,
          U = 0,
          B = 0,
          M = null,
          I = !0;
      return {
        kill: function kill(w, F) {
          return function () {
            if (6 === H) return F(r.right(void 0))(), function () {};
            var O = A({
              rethrow: !1,
              handler: function handler() {
                return F(r.right(void 0));
              }
            })();

            switch (H) {
              case 0:
                N = r.left(w);
                H = 6;
                x = N;
                p(E);
                break;

              case 4:
                null === N && (N = r.left(w));
                0 === U && (4 === H && (J = new f("Cons", new f("Finalizer", x(w)), J, N)), H = 5, D = x = null, p(++E));
                break;

              default:
                null === N && (N = r.left(w)), 0 === U && (H = 5, D = x = null);
            }

            return O;
          };
        },
        join: function join(w) {
          return function () {
            var F = A({
              rethrow: !1,
              handler: w
            })();
            0 === H && p(E);
            return F;
          };
        },
        onComplete: A,
        isSuspended: function isSuspended() {
          return 0 === H;
        },
        run: function run() {
          0 === H && (y.isDraining() ? p(E) : y.enqueue(function () {
            p(E);
          }));
        }
      };
    }

    function m(r, z, t, p) {
      function A(M, I, w) {
        var F = I,
            O = null,
            Q = null,
            X = 0;
        I = {};

        a: for (;;) {
          var v = null;

          switch (F.tag) {
            case "Forked":
              F._3 === q && (v = N[F._1], I[X++] = v.kill(M, function (ea) {
                return function () {
                  X--;
                  0 === X && w(ea)();
                };
              }));
              if (null === O) break a;
              F = O._2;
              null === Q ? O = null : (O = Q._1, Q = Q._2);
              break;

            case "Map":
              F = F._2;
              break;

            case "Apply":
            case "Alt":
              O && (Q = new f("Cons", O, Q)), O = F, F = F._1;
          }
        }

        if (0 === X) w(r.right(void 0))();else for (M = 0, v = X; M < v; M++) {
          I[M] = I[M]();
        }
        return I;
      }

      function E(M, I, w) {
        var F, O;

        if (r.isLeft(M)) {
          var Q = M;
          var X = null;
        } else X = M, Q = null;

        for (;;) {
          var v = O = F = M = null;
          if (null !== U) break;

          if (null === I) {
            p(Q || X)();
            break;
          }

          if (I._3 !== q) break;

          switch (I.tag) {
            case "Map":
              null === Q ? (I._3 = r.right(I._1(r.fromRight(X))), X = I._3) : I._3 = Q;
              break;

            case "Apply":
              M = I._1._3;
              F = I._2._3;

              if (Q) {
                if (I._3 = Q, O = !0, v = G++, C[v] = A(J, Q === M ? I._2 : I._1, function () {
                  return function () {
                    delete C[v];
                    O ? O = !1 : null === w ? E(Q, null, null) : E(Q, w._1, w._2);
                  };
                }), O) {
                  O = !1;
                  return;
                }
              } else {
                if (M === q || F === q) return;
                X = r.right(r.fromRight(M)(r.fromRight(F)));
                I._3 = X;
              }

              break;

            case "Alt":
              M = I._1._3;
              F = I._2._3;
              if (M === q && r.isLeft(F) || F === q && r.isLeft(M)) return;
              if (M !== q && r.isLeft(M) && F !== q && r.isLeft(F)) Q = X === M ? F : M, X = null, I._3 = Q;else if (I._3 = X, O = !0, v = G++, C[v] = A(J, X === M ? I._2 : I._1, function () {
                return function () {
                  delete C[v];
                  O ? O = !1 : null === w ? E(X, null, null) : E(X, w._1, w._2);
                };
              }), O) {
                O = !1;
                return;
              }
          }

          null === w ? I = null : (I = w._1, w = w._2);
        }
      }

      function H(M) {
        return function (I) {
          return function () {
            delete N[M._1];
            M._3 = I;
            E(I, M._2._1, M._2._2);
          };
        };
      }

      function x(M, I) {
        U = r.left(M);
        var w;

        for (w in C) {
          if (C.hasOwnProperty(w)) {
            var F = C[w];

            for (w in F) {
              if (F.hasOwnProperty(w)) F[w]();
            }
          }
        }

        C = null;
        var O = A(M, B, I);
        return function (Q) {
          return new f("Async", function (X) {
            return function () {
              for (var v in O) {
                if (O.hasOwnProperty(v)) O[v]();
              }

              return h;
            };
          });
        };
      }

      var D = 0,
          N = {},
          G = 0,
          C = {},
          J = Error("[ParAff] Early exit"),
          U = null,
          B = q;

      (function () {
        var M = 1,
            I = t,
            w = null,
            F = null;

        a: for (;;) {
          switch (M) {
            case 1:
              switch (I.tag) {
                case "Map":
                  w && (F = new f("Cons", w, F));
                  w = new f("Map", I._1, q, q);
                  I = I._2;
                  break;

                case "Apply":
                  w && (F = new f("Cons", w, F));
                  w = new f("Apply", q, I._2, q);
                  I = I._1;
                  break;

                case "Alt":
                  w && (F = new f("Cons", w, F));
                  w = new f("Alt", q, I._2, q);
                  I = I._1;
                  break;

                default:
                  var O = D++;
                  M = 5;
                  var Q = I;
                  I = new f("Forked", O, new f("Cons", w, F), q);
                  Q = n(r, z, Q);
                  Q.onComplete({
                    rethrow: !1,
                    handler: H(I)
                  })();
                  N[O] = Q;
                  z && z.register(Q);
              }

              break;

            case 5:
              if (null === w) break a;
              w._1 === q ? (w._1 = I, M = 1, I = w._2, w._2 = q) : (w._2 = I, I = w, null === F ? w = null : (w = F._1, F = F._2));
          }
        }

        B = I;

        for (O = 0; O < D; O++) {
          N[O].run();
        }
      })();

      return function (M) {
        return new f("Async", function (I) {
          return function () {
            return x(M, I);
          };
        });
      };
    }

    function k(r, z, t) {
      return new f("Async", function (p) {
        return function () {
          return m(r, z, t, p);
        };
      });
    }

    var q = {},
        y = function () {
      function r() {
        for (A = !0; 0 !== z;) {
          z--;
          var E = p[t];
          p[t] = void 0;
          t = (t + 1) % 1024;
          E();
        }

        A = !1;
      }

      var z = 0,
          t = 0,
          p = Array(1024),
          A = !1;
      return {
        isDraining: function isDraining() {
          return A;
        },
        enqueue: function enqueue(E) {
          if (1024 === z) {
            var H = A;
            r();
            A = H;
          }

          p[(t + z) % 1024] = E;
          z++;
          A || r();
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

    f.Supervisor = function (r) {
      var z = {},
          t = 0,
          p = 0;
      return {
        register: function register(A) {
          var E = t++;
          A.onComplete({
            rethrow: !0,
            handler: function handler(H) {
              return function () {
                p--;
                delete z[E];
              };
            }
          })();
          z[E] = A;
          p++;
        },
        isEmpty: function isEmpty() {
          return 0 === p;
        },
        killAll: function killAll(A, E) {
          return function () {
            function H(G) {
              D[G] = z[G].kill(A, function (C) {
                return function () {
                  delete D[G];
                  x--;
                  r.isLeft(C) && r.fromLeft(C) && setTimeout(function () {
                    throw r.fromLeft(C);
                  }, 0);
                  0 === x && E();
                };
              })();
            }

            if (0 === p) return E();
            var x = 0,
                D = {},
                N;

            for (N in z) {
              z.hasOwnProperty(N) && (x++, H(N));
            }

            z = {};
            p = t = 0;
            return function (G) {
              return new f("Sync", function () {
                for (var C in D) {
                  if (D.hasOwnProperty(C)) D[C]();
                }
              });
            };
          };
        }
      };
    };

    f.Scheduler = y;
    f.nonCanceler = h;
    return f;
  }();

  a._pure = c.Pure;
  a._throwError = c.Throw;

  a._catchError = function (f) {
    return function (l) {
      return c.Catch(f, l);
    };
  };

  a._map = function (f) {
    return function (l) {
      return l.tag === c.Pure.tag ? c.Pure(f(l._1)) : c.Bind(l, function (h) {
        return c.Pure(f(h));
      });
    };
  };

  a._bind = function (f) {
    return function (l) {
      return c.Bind(f, l);
    };
  };

  a._liftEffect = c.Sync;

  a._parAffMap = function (f) {
    return function (l) {
      return c.ParMap(f, l);
    };
  };

  a._parAffApply = function (f) {
    return function (l) {
      return c.ParApply(f, l);
    };
  };

  a._parAffAlt = function (f) {
    return function (l) {
      return c.ParAlt(f, l);
    };
  };

  a.makeAff = c.Async;

  a._makeFiber = function (f, l) {
    return function () {
      return c.Fiber(f, null, l);
    };
  };

  a._delay = function () {
    function f(l, h) {
      return 0 === l && "undefined" !== typeof setImmediate ? setImmediate(h) : setTimeout(h, l);
    }

    return function (l, h) {
      return c.Async(function (b) {
        return function () {
          var e = f(h, b(l()));
          return function () {
            return c.Sync(function () {
              var d = 0 === h && "undefined" !== typeof clearImmediate ? clearImmediate(e) : clearTimeout(e);
              return l(d);
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
      l = a["Data.Either"],
      h = a["Data.Functor"];

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
      return (0, b.catchError)(h.map(b.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(l.Right.create)(e))(function () {
        var d = f.pure(b.MonadThrow0().Monad0().Applicative0());
        return function (n) {
          return d(l.Left.create(n));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var c = a["Control.Category"],
      f = a["Control.Parallel.Class"],
      l = a["Data.Foldable"],
      h = function h(b) {
    return function (e) {
      return function (d) {
        var n = f.sequential(b),
            m = l.traverse_(b.Applicative1())(e)(function () {
          var k = f.parallel(b);
          return function (q) {
            return k(d(q));
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
      return h(b)(e)(c.identity(c.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var c = a["Effect.Class"],
      f = a["Control.Category"],
      l = a.Effect;

  a = function a(h, b) {
    this.Monad0 = h;
    this.liftEffect = b;
  };

  f = new a(function () {
    return l.monadEffect;
  }, f.identity(f.categoryFn));

  c.liftEffect = function (h) {
    return h.liftEffect;
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
        } catch (l) {
          return l instanceof Error || "[object Error]" === Object.prototype.toString.call(l) ? c(l)() : c(Error(l.toString()))();
        }
      };
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var c = a["Effect.Exception"],
      f = a["Effect.Exception"],
      l = a["Control.Applicative"],
      h = a["Data.Either"],
      b = a["Data.Functor"],
      e = a.Effect;
  a = new a["Data.Show"].Show(f.showErrorImpl);

  c["throw"] = function (d) {
    return f.throwException(f.error(d));
  };

  c["try"] = function (d) {
    return f.catchException(function () {
      var n = l.pure(e.applicativeEffect);
      return function (m) {
        return n(h.Left.create(m));
      };
    }())(b.map(e.functorEffect)(h.Right.create)(d));
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

  a["Partial.Unsafe"].unsafeCrashWith = function (l) {
    return c.unsafePartial(function (h) {
      return f.crashWith()(l);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var c = a["Effect.Aff"],
      f = a["Effect.Aff"],
      l = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Monad"],
      n = a["Control.Monad.Error.Class"],
      m = a["Control.Parallel"],
      k = a["Control.Parallel.Class"],
      q = a["Control.Plus"],
      y = a["Data.Either"],
      r = a["Data.Foldable"],
      z = a["Data.Function"],
      t = a["Data.Functor"],
      p = a["Data.Monoid"],
      A = a["Data.Semigroup"],
      E = a["Data.Unit"],
      H = a.Effect,
      x = a["Effect.Class"],
      D = a["Effect.Exception"],
      N = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var G = new t.Functor(f._parAffMap),
      C = new t.Functor(f._map),
      J = function () {
    return {
      isLeft: function isLeft(na) {
        if (na instanceof y.Left) return !0;
        if (na instanceof y.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [na.constructor.name]);
      },
      fromLeft: function fromLeft(na) {
        if (na instanceof y.Left) return na.value0;
        if (na instanceof y.Right) return N.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [na.constructor.name]);
      },
      fromRight: function fromRight(na) {
        if (na instanceof y.Right) return na.value0;
        if (na instanceof y.Left) return N.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [na.constructor.name]);
      },
      left: y.Left.create,
      right: y.Right.create
    };
  }(),
      U = function U(na) {
    return function () {
      var oa = f._makeFiber(J, na)();

      oa.run();
      return oa;
    };
  },
      B = new b.Apply(function () {
    return G;
  }, f._parAffApply),
      M = new d.Monad(function () {
    return F;
  }, function () {
    return I;
  }),
      I = new e.Bind(function () {
    return w;
  }, f._bind),
      w = new b.Apply(function () {
    return C;
  }, d.ap(M)),
      F = new h.Applicative(function () {
    return w;
  }, f._pure),
      O = new x.MonadEffect(function () {
    return M;
  }, f._liftEffect);

  b = function () {
    var na = x.liftEffect(O);
    return function (oa) {
      return z["const"](na(oa));
    };
  }();

  var Q = new n.MonadThrow(function () {
    return M;
  }, f._throwError),
      X = new n.MonadError(function () {
    return Q;
  }, f._catchError),
      v = function v(na) {
    return function (oa) {
      return U(e.bindFlipped(I)(function () {
        var Da = x.liftEffect(O);
        return function (ba) {
          return Da(na(ba));
        };
      }())(n["try"](X)(oa)));
    };
  },
      ea = new k.Parallel(function () {
    return la;
  }, function () {
    return M;
  }, a.unsafeCoerce, f._sequential),
      la = new h.Applicative(function () {
    return B;
  }, function () {
    var na = k.parallel(ea),
        oa = h.pure(F);
    return function (Da) {
      return na(oa(Da));
    };
  }()),
      P = new A.Semigroup(function (na) {
    return function (oa) {
      return function (Da) {
        return m.parSequence_(ea)(r.foldableArray)([na(Da), oa(Da)]);
      };
    };
  });

  A = z["const"](h.pure(F)(E.unit));
  var aa = new p.Monoid(function () {
    return P;
  }, A);
  A = f.makeAff(function (na) {
    return h.pure(H.applicativeEffect)(p.mempty(aa));
  });
  var sa = new l.Alt(function () {
    return G;
  }, f._parAffAlt),
      wa = new l.Alt(function () {
    return C;
  }, function (na) {
    return function (oa) {
      return n.catchError(X)(na)(z["const"](oa));
    };
  });
  l = new q.Plus(function () {
    return wa;
  }, n.throwError(Q)(D.error("Always fails")));
  q = new q.Plus(function () {
    return sa;
  }, k.parallel(ea)(q.empty(l)));

  c.runAff_ = function (na) {
    return function (oa) {
      return t["void"](H.functorEffect)(v(na)(oa));
    };
  };

  c.delay = function (na) {
    return f._delay(y.Right.create, na);
  };

  c.never = A;
  c.effectCanceler = b;
  c.functorAff = C;
  c.applicativeAff = F;
  c.bindAff = I;
  c.monadEffectAff = O;
  c.altParAff = sa;
  c.plusParAff = q;
  c.parallelAff = ea;
  c.monoidCanceler = aa;
  c.makeAff = f.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var c = a["Effect.AVar"],
      f = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (l) {
    return f.makeAff(function (h) {
      return function () {
        var b = c.take(l)(h)();
        return f.effectCanceler(b);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var c = a["Effect.Aff.Class"],
      f = a["Control.Category"],
      l = a["Effect.Aff"];

  a = function a(h, b) {
    this.MonadEffect0 = h;
    this.liftAff = b;
  };

  f = new a(function () {
    return l.monadEffectAff;
  }, f.identity(f.categoryFn));

  c.liftAff = function (h) {
    return h.liftAff;
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
  a["Effect.Console"].log = a["Effect.Console"].log;
})(PS);

(function (a) {
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};
  var c = a["Concur.Core.Types"],
      f = a["Control.Alt"],
      l = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Category"],
      d = a["Control.Monad"],
      n = a["Control.Monad.Free"],
      m = a["Control.MultiAlternative"],
      k = a["Control.Parallel.Class"],
      q = a["Control.Plus"],
      y = a["Data.Array.NonEmpty"],
      r = a["Data.Array.NonEmpty.Internal"],
      z = a["Data.Either"],
      t = a["Data.FoldableWithIndex"],
      p = a["Data.Functor"],
      A = a["Data.Maybe"],
      E = a["Data.Monoid"],
      H = a["Data.Semigroup"],
      x = a["Data.Semigroup.Foldable"],
      D = a["Data.Show"],
      N = a["Data.Tuple"],
      G = a.Effect,
      C = a["Effect.AVar"],
      J = a["Effect.Aff"],
      U = a["Effect.Aff.AVar"],
      B = a["Effect.Aff.Class"],
      M = a["Effect.Class"],
      I = a["Effect.Console"],
      w = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (fa) {
    return fa(e.identity(e.categoryFn));
  });

  var F = n.freeFunctor,
      O = n.freeBind,
      Q = n.freeApplicative,
      X = new d.Monad(function () {
    return Q;
  }, function () {
    return O;
  }),
      v = function v(fa) {
    return fa;
  },
      ea = function ea(fa) {
    return n["resume'"](function (Z) {
      return function (Ca) {
        return new z.Right(p.map(fa)(Ca)(Z));
      };
    })(z.Left.create);
  },
      la = new p.Functor(function (fa) {
    return function (Z) {
      if (Z instanceof z.Right) Z = new z.Right({
        cont: p.map(J.functorAff)(fa)(Z.value0.cont),
        view: Z.value0.view
      });else if (Z instanceof z.Left) Z = new z.Left(p.map(G.functorEffect)(fa)(Z.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [Z.constructor.name]);
      return Z;
    };
  }),
      P = function P(fa) {
    return n.liftF(z.Left.create(fa));
  },
      aa = function aa(fa) {
    return new M.MonadEffect(function () {
      return X;
    }, P);
  },
      sa = function sa(fa) {
    return n.liftF(new z.Right({
      view: fa,
      cont: J.never
    }));
  },
      wa = function wa(fa) {
    return new H.Semigroup(function (Z) {
      return function (Ca) {
        return m.orr(oa(fa))([Z, Ca]);
      };
    });
  },
      na = function na(fa) {
    return new q.Plus(function () {
      return Da(fa);
    }, sa(E.mempty(fa)));
  },
      oa = function oa(fa) {
    return new m.MultiAlternative(function () {
      return na(fa);
    }, function (Z) {
      var Ca = function Ca(ka) {
        return function (pa) {
          return function (xa) {
            var u = p.map(r.functorNonEmptyArray)(function (V) {
              return n.wrap(z.Right.create(V));
            })(pa);
            return b.bind(J.bindAff)(k.sequential(J.parallelAff)(t.foldlWithIndex(r.foldableWithIndexNonEmptyArray)(function (V) {
              return function (ia) {
                return function (ta) {
                  return f.alt(J.altParAff)(k.parallel(J.parallelAff)(p.map(J.functorAff)(N.Tuple.create(V))(ta)))(ia);
                };
              };
            })(q.empty(J.plusParAff))(xa)))(function (V) {
              return h.pure(J.applicativeAff)(Y(ka)(A.fromMaybe(u)(y.updateAt(V.value0)(V.value1)(u))));
            });
          };
        };
      },
          R = function R(ka) {
        return function (pa) {
          return n.wrap(new z.Right({
            view: x.foldMap1(r.foldable1NonEmptyArray)(ka.Semigroup0())(function (xa) {
              return xa.view;
            })(pa),
            cont: Ca(ka)(pa)(p.map(r.functorNonEmptyArray)(function (xa) {
              return xa.cont;
            })(pa))
          }));
        };
      },
          K = function K(ka) {
        return function (pa) {
          return function (xa) {
            var u = y.uncons(xa),
                V = ea(la)(u.head);
            if (V instanceof z.Left) return h.pure(n.freeApplicative)(V.value0);

            if (V instanceof z.Right) {
              if (V.value0 instanceof z.Left) return n.wrap(new z.Left(function () {
                var ia = V.value0.value0();
                return K(ka)(pa)(y["cons'"](ia)(u.tail));
              }));
              if (V.value0 instanceof z.Right) return T(ka)(y.snoc(pa)(V.value0.value0))(u.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [V.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [V.constructor.name]);
          };
        };
      },
          T = function T(ka) {
        return function (pa) {
          return function (xa) {
            xa = y.fromArray(xa);
            if (xa instanceof A.Nothing) return R(ka)(pa);
            if (xa instanceof A.Just) return K(ka)(pa)(xa.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [xa.constructor.name]);
          };
        };
      },
          Y = function Y(ka) {
        return function (pa) {
          var xa = y.uncons(pa),
              u = ea(la)(xa.head);
          if (u instanceof z.Left) return h.pure(n.freeApplicative)(u.value0);

          if (u instanceof z.Right) {
            if (u.value0 instanceof z.Left) return n.wrap(new z.Left(function () {
              var V = u.value0.value0();
              return Y(ka)(y["cons'"](V)(xa.tail));
            }));
            if (u.value0 instanceof z.Right) return T(ka)(y.singleton(u.value0.value0))(xa.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [u.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [u.constructor.name]);
        };
      };

      Z = y.fromArray(Z);
      if (Z instanceof A.Just) return Y(fa)(p.map(r.functorNonEmptyArray)(v)(Z.value0));
      if (Z instanceof A.Nothing) return q.empty(na(fa));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [Z.constructor.name]);
    });
  },
      Da = function Da(fa) {
    return new f.Alt(function () {
      return F;
    }, H.append(wa(fa)));
  },
      ba = function ba(fa) {
    return function (Z) {
      var Ca = function Ca(R) {
        return function (K) {
          if (K instanceof z.Left) return I.log("Aff failed - " + D.show(w.showError)(K.value0));
          if (K instanceof z.Right) return p["void"](G.functorEffect)(C.tryPut(K.value0)(R));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [R.constructor.name, K.constructor.name]);
        };
      };

      return n.wrap(new z.Left(function () {
        var R = C.empty();
        J.runAff_(Ca(R))(Z)();
        var K = C.tryTake(R)();
        if (K instanceof A.Just) return h.pure(n.freeApplicative)(K.value0);
        if (K instanceof A.Nothing) return n.liftF(new z.Right({
          view: fa,
          cont: U.take(R)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [K.constructor.name]);
      }));
    };
  };

  c.WidgetStep = function (fa) {
    return fa;
  };

  c.Widget = function (fa) {
    return fa;
  };

  c.unWidget = v;
  c.resume = ea;
  c.display = sa;
  c.functorWidgetStep = la;
  c.widgetFunctor = F;
  c.widgetBind = O;
  c.widgetApplicative = Q;
  c.widgetShiftMap = a;
  c.widgetMultiAlternative = oa;

  c.widgetMonoid = function (fa) {
    return new E.Monoid(function () {
      return wa(fa);
    }, q.empty(na(fa)));
  };

  c.widgetAlt = Da;
  c.widgetPlus = na;

  c.widgetAlternative = function (fa) {
    return new l.Alternative(function () {
      return Q;
    }, function () {
      return na(fa);
    });
  };

  c.widgetMonadEff = aa;

  c.widgetMonadAff = function (fa) {
    return new B.MonadAff(function () {
      return aa(fa);
    }, ba(E.mempty(fa)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var c = a["Concur.Core"],
      f = a["Concur.Core.Types"],
      l = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Monad.Free"],
      e = a["Control.Parallel.Class"],
      d = a["Data.Either"],
      n = a["Data.Functor"],
      m = a.Effect,
      k = a["Effect.AVar"],
      q = a["Effect.Aff"],
      y = a["Effect.Aff.AVar"],
      r = a["Effect.Aff.Class"],
      z = function z(t) {
    return function (p) {
      var A = f.resume(f.functorWidgetStep)(p);
      if (A instanceof d.Left) return h.pure(b.freeApplicative)(A.value0);

      if (A instanceof d.Right) {
        if (A.value0 instanceof d.Left) return b.wrap(f.WidgetStep(new d.Left(function () {
          var E = A.value0.value0();
          return z(t)(E);
        })));
        if (A.value0 instanceof d.Right) return b.wrap(f.WidgetStep(new d.Left(function () {
          var E = k.empty(),
              H = e.sequential(q.parallelAff)(l.alt(q.altParAff)(e.parallel(q.parallelAff)(r.liftAff(r.monadAffAff)(y.take(E))))(e.parallel(q.parallelAff)(n.map(q.functorAff)(z(t))(A.value0.value0.cont))));
          return b.wrap(f.WidgetStep(new d.Right({
            view: t(function (x) {
              return n["void"](m.functorEffect)(k.tryPut(h.pure(b.freeApplicative)(x))(E));
            })(A.value0.value0.view),
            cont: H
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [A.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [A.constructor.name]);
    };
  };

  c.mkLeafWidget = function (t) {
    return f.Widget(b.wrap(f.WidgetStep(new d.Left(function () {
      var p = k.empty();
      return b.wrap(f.WidgetStep(new d.Right({
        view: t(function (A) {
          return n["void"](m.functorEffect)(k.tryPut(h.pure(b.freeApplicative)(A))(p));
        }),
        cont: r.liftAff(r.monadAffAff)(y.take(p))
      })));
    }))));
  };

  c.mkNodeWidget = function (t) {
    return function (p) {
      return z(t)(p);
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
        return b.value0(function (d) {
          return e(h(d));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [h.constructor.name, b.constructor.name]);
    };
  });
  c.PrimProp = f;
  c.Handler = l;

  c.mkProp = function (h) {
    return function (b) {
      if (b instanceof f) return b.value0;
      if (b instanceof l) return b.value0(h);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [h.constructor.name, b.constructor.name]);
    };
  };

  c.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var c = a["Concur.Core.DOM"],
      f = a["Concur.Core"],
      l = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Control.MultiAlternative"],
      e = a["Control.ShiftMap"],
      d = a["Data.Functor"],
      n = function n(m) {
    return function (k) {
      return function (q) {
        return function (y) {
          return e.shiftMap(m)(function (r) {
            return function (z) {
              return f.mkNodeWidget(function (t) {
                return function (p) {
                  return q(d.map(k)(function () {
                    var A = h.mkProp(t),
                        E = d.map(h.functorProps)(r);
                    return function (H) {
                      return A(E(H));
                    };
                  }())(y))(p);
                };
              })(z);
            };
          });
        };
      };
    };
  };

  c.el = n;

  c.elLeaf = function (m) {
    return function (k) {
      return function (q) {
        return function (y) {
          return l.liftWidget(m)(f.mkLeafWidget(function (r) {
            return q(d.map(k)(h.mkProp(r))(y));
          }));
        };
      };
    };
  };

  c["el'"] = function (m) {
    return function (k) {
      return function (q) {
        return function (y) {
          return function (r) {
            var z = n(m)(q)(y)(r),
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

  var c = a["Concur.Core.Discharge"],
      f = a["Concur.Core.Types"],
      l = a["Control.Applicative"],
      h = a["Control.Monad.Free"],
      b = a["Data.Either"],
      e = a["Data.Functor"],
      d = a["Data.Monoid"],
      n = a["Data.Tuple"],
      m = a.Effect,
      k = a["Effect.Aff"],
      q = function q(r) {
    return function (z) {
      var t = h.resume(f.functorWidgetStep)(f.unWidget(z));
      if (t instanceof b.Right) return l.pure(m.applicativeEffect)(new n.Tuple(z, d.mempty(r)));

      if (t instanceof b.Left) {
        if (t.value0 instanceof b.Left) return function () {
          var p = t.value0.value0();
          return q(r)(p)();
        };
        if (t.value0 instanceof b.Right) return l.pure(m.applicativeEffect)(new n.Tuple(h.wrap(new b.Right(t.value0.value0)), t.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [t.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [t.constructor.name]);
    };
  },
      y = function y(r) {
    return function (z) {
      return function (t) {
        var p = h.resume(f.functorWidgetStep)(t);
        if (p instanceof b.Right) return l.pure(m.applicativeEffect)(d.mempty(r));

        if (p instanceof b.Left) {
          if (p.value0 instanceof b.Left) return function () {
            var A = p.value0.value0();
            return y(r)(z)(A)();
          };
          if (p.value0 instanceof b.Right) return function () {
            k.runAff_(function () {
              var A = e.map(b.functorEither)(f.Widget);
              return function (E) {
                return z(A(E));
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

  c.discharge = y;
  c.dischargePartialEffect = q;
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
  a = new a["Data.Functor"].Functor(function (l) {
    return function (h) {
      return f.defer(function (b) {
        return l(f.force(h));
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
      l = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Comonad"],
      n = a["Control.Extend"],
      m = a["Control.Monad"],
      k = a["Control.Plus"],
      q = a["Control.ShiftMap"],
      y = a["Data.Functor"],
      r = a["Data.Lazy"],
      z = a["Data.Tuple"],
      t = function t(C) {
    return z.snd(r.force(C));
  },
      p = function p(C) {
    return function (J) {
      return r.defer(function (U) {
        return new z.Tuple(C, J);
      });
    };
  },
      A = function A(C) {
    return z.fst(r.force(C));
  },
      E = function E(C) {
    return new y.Functor(function (J) {
      var U = function U(B) {
        return y.map(r.functorLazy)(function (M) {
          return new z.Tuple(J(M.value0), y.map(C)(U)(M.value1));
        })(B);
      };

      return U;
    });
  },
      H = function H(C) {
    return new n.Extend(function () {
      return E(C);
    }, function (J) {
      var U = function U(B) {
        return y.map(r.functorLazy)(function (M) {
          return new z.Tuple(J(B), y.map(C)(U)(M.value1));
        })(B);
      };

      return U;
    });
  },
      x = function x(C) {
    return new m.Monad(function () {
      return G(C);
    }, function () {
      return D(C);
    });
  },
      D = function D(C) {
    return new e.Bind(function () {
      return N(C);
    }, function (J) {
      return function (U) {
        var B = function B(I) {
          return function (w) {
            var F = y.map(C.Plus1().Alt0().Functor0())(B(I))(t(w)),
                O = y.map(C.Plus1().Alt0().Functor0())(M)(t(I));
            return p(A(w))(l.alt(C.Plus1().Alt0())(O)(F));
          };
        },
            M = function M(I) {
          return B(I)(U(A(I)));
        };

        return M(J);
      };
    });
  },
      N = function N(C) {
    return new b.Apply(function () {
      return E(C.Plus1().Alt0().Functor0());
    }, m.ap(x(C)));
  },
      G = function G(C) {
    return new h.Applicative(function () {
      return N(C);
    }, function (J) {
      return p(J)(k.empty(C.Plus1()));
    });
  };

  c.mkCofree = p;
  c.tail = t;

  c.comonadCofree = function (C) {
    return new d.Comonad(function () {
      return H(C);
    }, A);
  };

  c.applicativeCofree = G;
  c.bindCofree = D;

  c.shiftMapCofree = function (C) {
    return new q.ShiftMap(function (J) {
      return function (U) {
        return r.defer(function (B) {
          B = r.force(U);
          return new z.Tuple(B.value0, J(h.pure(G(f.widgetAlternative(C))))(B.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var c = a["Concur.Core.FRP"],
      f = a["Concur.Core.Types"],
      l = a["Control.Alt"],
      h = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Cofree"],
      d = a["Control.Comonad"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      k = a["Data.Unit"],
      q = a["Effect.Aff"],
      y = a["Effect.Aff.Class"],
      r = e.tail,
      z = e.mkCofree,
      t = function t(E) {
    return function (H) {
      return z(E)(n.map(f.widgetFunctor)(function (x) {
        return t(x)(H);
      })(H(E)));
    };
  },
      p = function p(E) {
    return function (H) {
      return function (x) {
        var D = x(H);
        return z(d.extract(e.comonadCofree(f.widgetFunctor))(D))(b.bind(f.widgetBind)(r(D))(function (N) {
          return h.pure(f.widgetApplicative)(p(E)(d.extract(e.comonadCofree(f.widgetFunctor))(N))(x));
        }));
      };
    };
  },
      A = function A(E) {
    return b.bind(f.widgetBind)(r(E))(A);
  };

  c.step = z;

  c.display = function (E) {
    return z(k.unit)(E);
  };

  c.loopW = t;
  c.loopS = p;
  c.dyn = A;

  c.debounce = function (E) {
    return function (H) {
      return function (x) {
        return function (D) {
          var N = function N(C) {
            return function (J) {
              return b.bind(f.widgetBind)(l.alt(f.widgetAlt(E))(n.map(f.widgetFunctor)(m.Just.create)(J(C)))(n.voidRight(f.widgetFunctor)(m.Nothing.value)(y.liftAff(f.widgetMonadAff(E))(q.delay(H)))))(function (U) {
                if (U instanceof m.Nothing) return h.pure(f.widgetApplicative)(G(C)(J));
                if (U instanceof m.Just) return N(U.value0)(J);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [U.constructor.name]);
              });
            };
          },
              G = function G(C) {
            return function (J) {
              return z(C)(b.bind(f.widgetBind)(J(C))(function (U) {
                return N(U)(J);
              }));
            };
          };

          return G(x)(D);
        };
      };
    };
  };
})(PS);

(function (a) {
  function c(h) {
    return function (b) {
      return function (e) {
        return f.createElement.apply(f, [h, b].concat(e));
      };
    };
  }

  var f = require("react"),
      l = function (h) {
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
          e[d] = function (m, k) {
            return n(m)(k)();
          };

          break;

        case "componentDidUpdate":
          e[d] = function (m, k, q) {
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
          throw Error("[purescript-react] Not a component property: " + d);
      }
    }

    return function (e) {
      return function (d) {
        var n = function n(m) {
          h.call(this, m);
          m = d(this)();

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

  a.createElementImpl = c;
  a.createElementTagName = c;

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
  var c = a.React,
      f = a.React;
  a = f.setStateImpl;
  var l = new function (h) {
    this.toElement = h;
  }((0, f.createElementImpl)(f.fragment)({}));

  c.component = function (h) {
    return f.componentImpl;
  };

  c.writeState = a;

  c.createLeafElement = function (h) {
    return f.createLeafElementImpl;
  };

  c.toElement = function (h) {
    return h.toElement;
  };

  c.isReactElementArray = l;
  c.getState = f.getState;
  c.createElementTagName = f.createElementTagName;
  c.createElementTagNameDynamic = f.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var c = a["Concur.React"],
      f = a["Concur.Core.Discharge"],
      l = a["Control.Apply"],
      h = a["Data.Either"],
      b = a["Data.Functor"],
      e = a["Data.Monoid"],
      d = a["Data.Show"],
      n = a["Data.Unit"],
      m = a.Effect,
      k = a["Effect.Console"],
      q = a["Effect.Exception"],
      y = a.React,
      r = function (z) {
    return function (t) {
      var p = function p(E) {
        return y.toElement(y.isReactElementArray)(E.view);
      },
          A = function A(E) {
        return function (H) {
          if (H instanceof h.Right) return function () {
            var x = f.discharge(e.monoidArray)(A(E))(H.value0)();
            return b["void"](m.functorEffect)(y.writeState(E)({
              view: x
            }))();
          };
          if (H instanceof h.Left) return function () {
            k.log("FAILED! " + d.show(q.showError)(H.value0))();
            return n.unit;
          };
          throw Error("Failed pattern match at Concur.React (line 32, column 5 - line 34, column 52): " + [E.constructor.name, H.constructor.name]);
        };
      };

      return y.component()("Concur")(function (E) {
        return function () {
          var H = f.dischargePartialEffect(e.monoidArray)(t)();
          return {
            state: {
              view: H.value1
            },
            render: b.map(m.functorEffect)(p)(y.getState(E)),
            componentDidMount: l.applySecond(m.applyEffect)(z)(A(E)(new h.Right(H.value0)))
          };
        };
      });
    };
  }(e.mempty(m.monoidEffect(e.monoidUnit)));

  c.renderComponent = function (z) {
    return y.createLeafElement()(r(z))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (c) {
    return function (f) {
      var l = {};
      l[c] = f;
      return l;
    };
  };

  a.unsafeUnfoldProps = function (c) {
    return function (f) {
      var l = {},
          h = {};
      h[c] = l;

      for (var b in f) {
        f.hasOwnProperty(b) && (l[b] = f[b]);
      }

      return h;
    };
  };

  a.unsafeFromPropsArray = function (c) {
    for (var f = {}, l = 0, h = c.length; l < h; l++) {
      var b = c[l],
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
      l = a["Effect.Uncurried"];
  a = f.unsafeMkProps("value");
  var h = f.unsafeMkProps("target"),
      b = f.unsafeUnfoldProps("style"),
      e = f.unsafeMkProps("href"),
      d = f.unsafeMkProps("disabled"),
      n = f.unsafeMkProps("defaultValue"),
      m = f.unsafeMkProps("className"),
      k = f.unsafeMkProps("checked"),
      q = f.unsafeMkProps("type"),
      y = f.unsafeMkProps("id");
  c.style = b;
  c.checked = k;
  c.className = m;
  c.defaultValue = n;
  c.disabled = d;
  c.href = e;
  c._id = y;
  c.target = h;
  c._type = q;
  c.value = a;

  c.onChange = function (r) {
    return f.unsafeMkProps("onChange")(l.mkEffectFn1(r));
  };

  c.onClick = function (r) {
    return f.unsafeMkProps("onClick")(l.mkEffectFn1(r));
  };

  c.unsafeFromPropsArray = f.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var c = a["React.DOM"],
      f = a.React,
      l = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var h = function h(z) {
    return function (t) {
      return function (p) {
        if (z) {
          if (z) var A = f.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [z.constructor.name]);
        } else A = f.createElementTagName;
        return A(t)(l.unsafeFromPropsArray(p));
      };
    };
  },
      b = h(!1)("option"),
      e = h(!1)("select"),
      d = h(!1)("span"),
      n = h(!1)("ul"),
      m = h(!1)("li"),
      k = h(!1)("div"),
      q = h(!1)("cite"),
      y = h(!1)("button"),
      r = h(!1)("a");

  c.text = a;
  c.a = r;

  c.br = function (z) {
    return h(!1)("br")(z)([]);
  };

  c.button = y;
  c.cite = q;
  c.div = k;

  c.input = function (z) {
    return h(!1)("input")(z)([]);
  };

  c.li = m;
  c.option = b;
  c.select = e;
  c.span = d;
  c.ul = n;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var c = a["Concur.React.DOM"],
      f = a["Concur.Core.DOM"],
      l = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Types"],
      b = a["Data.Functor"],
      e = a["React.DOM"],
      d = function d(t) {
    return function (p) {
      return function (A) {
        return [t(p)(A)];
      };
    };
  },
      n = function n(t) {
    return function (p) {
      return f.elLeaf(t)(b.functorArray)(function (A) {
        return [p(A)];
      });
    };
  },
      m = function m(t) {
    return function (p) {
      return function (A) {
        return f["el'"](t)(p)(b.functorArray)(d(A));
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
      y = function y(t) {
    return function (p) {
      return f.el(t)(b.functorArray)(d(p));
    };
  },
      r = function r(t) {
    return function (p) {
      return m(p)(t)(e.div);
    };
  },
      z = function z(t) {
    return function (p) {
      return m(p)(t)(e.cite);
    };
  };

  c.text = function (t) {
    return function (p) {
      return l.liftWidget(t)(h.display([e.text(p)]));
    };
  };

  c.a = function (t) {
    return function (p) {
      return m(p)(t)(e.a);
    };
  };

  c["br'"] = function (t) {
    return n(t)(e.br)([]);
  };

  c.button_ = function (t) {
    return y(t)(e.button);
  };

  c.button = function (t) {
    return function (p) {
      return m(p)(t)(e.button);
    };
  };

  c["cite'"] = function (t) {
    return function (p) {
      return z(t)(p)([]);
    };
  };

  c.div_ = function (t) {
    return y(t)(e.div);
  };

  c.div = r;

  c["div'"] = function (t) {
    return function (p) {
      return r(t)(p)([]);
    };
  };

  c.input = function (t) {
    return n(t)(e.input);
  };

  c.li_ = function (t) {
    return y(t)(e.li);
  };

  c.li = k;

  c["li'"] = function (t) {
    return function (p) {
      return k(t)(p)([]);
    };
  };

  c.option = function (t) {
    return function (p) {
      return m(p)(t)(e.option);
    };
  };

  c.select = function (t) {
    return function (p) {
      return m(p)(t)(e.select);
    };
  };

  c.span_ = function (t) {
    return y(t)(e.span);
  };

  c.span = q;

  c["span'"] = function (t) {
    return function (p) {
      return q(t)(p)([]);
    };
  };

  c.ul_ = function (t) {
    return y(t)(e.ul);
  };

  c.ul = function (t) {
    return function (p) {
      return m(p)(t)(e.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var c = a["Concur.React.Props"],
      f = a["Concur.Core.Props"],
      l = a["Data.Array"],
      h = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Data.Monoid"],
      d = a["React.DOM.Props"];
  a = new f.Handler(d.onClick);

  var n = new f.Handler(d.onChange),
      m = function m(q) {
    return f.PrimProp.create(d.className(q));
  },
      k = function () {
    var q = h.intercalate(h.foldableArray)(e.monoidString)(" "),
        y = l.concatMap(b.maybe([])(function (r) {
      return [r];
    }));
    return function (r) {
      return m(q(y(r)));
    };
  }();

  c.classList = k;

  c.unsafeTargetValue = function (q) {
    return q.target.value;
  };

  c.style = function (q) {
    return f.PrimProp.create(d.style(q));
  };

  c.checked = function (q) {
    return f.PrimProp.create(d.checked(q));
  };

  c.className = m;

  c.defaultValue = function (q) {
    return f.PrimProp.create(d.defaultValue(q));
  };

  c.disabled = function (q) {
    return f.PrimProp.create(d.disabled(q));
  };

  c.href = function (q) {
    return f.PrimProp.create(d.href(q));
  };

  c._id = function (q) {
    return f.PrimProp.create(d._id(q));
  };

  c._type = function (q) {
    return f.PrimProp.create(d._type(q));
  };

  c.value = function (q) {
    return f.PrimProp.create(d.value(q));
  };

  c.onChange = n;
  c.onClick = a;
})(PS);

(function (a) {
  var c = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (f, l) {
    return c.render(f, l);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a["null"] = null;

  a.nullable = function (c, f, l) {
    return null == c ? f : l(c);
  };

  a.notNull = function (c) {
    return c;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var c = a["Data.Nullable"],
      f = a["Data.Nullable"],
      l = a["Data.Maybe"];
  a = l.maybe(f["null"])(f.notNull);

  c.toMaybe = function (h) {
    return f.nullable(h, l.Nothing.value, l.Just.create);
  };

  c.toNullable = a;
})(PS);

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var c = a.ReactDOM,
      f = a["Data.Functor"],
      l = a["Data.Nullable"],
      h = a.Effect;

  a.ReactDOM.render = function (b) {
    return function (e) {
      return f.map(h.functorEffect)(l.toMaybe)(function () {
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
      l = a["Data.Nullable"],
      h = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (b) {
    var e = f.map(h.functorEffect)(l.toMaybe),
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
      l = a["Data.Maybe"],
      h = a["Data.Unit"],
      b = a.Effect,
      e = a.ReactDOM,
      d = a["Web.DOM.NonElementParentNode"],
      n = a["Web.HTML"],
      m = a["Web.HTML.HTMLDocument"],
      k = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (q) {
    return function (y) {
      return function () {
        var r = n.window();
        r = k.document(r)();
        r = m.toNonElementParentNode(r);
        r = d.getElementById(q)(r)();
        if (r instanceof l.Nothing) return h.unit;
        if (r instanceof l.Just) return f["void"](b.functorEffect)(e.render(c.renderComponent(y))(r.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [r.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var c = a["Control.Monad.Except.Trans"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.Error.Class"],
      d = a["Data.Either"],
      n = a["Data.Functor"],
      m = function m(t) {
    return function (p) {
      return t(p);
    };
  },
      k = function k(t) {
    return new n.Functor(function (p) {
      return m(n.map(t)(n.map(d.functorEither)(p)));
    });
  },
      q = function q(t) {
    return new b.Monad(function () {
      return z(t);
    }, function () {
      return y(t);
    });
  },
      y = function y(t) {
    return new h.Bind(function () {
      return r(t);
    }, function (p) {
      return function (A) {
        return h.bind(t.Bind1())(p)(d.either(function () {
          var E = f.pure(t.Applicative0());
          return function (H) {
            return E(d.Left.create(H));
          };
        }())(function (E) {
          return A(E);
        }));
      };
    });
  },
      r = function r(t) {
    return new l.Apply(function () {
      return k(t.Bind1().Apply0().Functor0());
    }, b.ap(q(t)));
  },
      z = function z(t) {
    return new f.Applicative(function () {
      return r(t);
    }, function () {
      var p = f.pure(t.Applicative0());
      return function (A) {
        return p(d.Right.create(A));
      };
    }());
  };

  c.ExceptT = function (t) {
    return t;
  };

  c.runExceptT = function (t) {
    return t;
  };

  c.applicativeExceptT = z;
  c.bindExceptT = y;

  c.monadThrowExceptT = function (t) {
    return new e.MonadThrow(function () {
      return q(t);
    }, function () {
      var p = f.pure(t.Applicative0());
      return function (A) {
        return p(d.Left.create(A));
      };
    }());
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var c = a["Data.Identity"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      d = function d(y) {
    return y;
  };

  a = new a["Data.Newtype"].Newtype(function (y) {
    return y;
  }, d);
  var n = new e.Functor(function (y) {
    return function (r) {
      return y(r);
    };
  }),
      m = new l.Apply(function () {
    return n;
  }, function (y) {
    return function (r) {
      return y(r);
    };
  }),
      k = new h.Bind(function () {
    return m;
  }, function (y) {
    return function (r) {
      return r(y);
    };
  }),
      q = new f.Applicative(function () {
    return m;
  }, d);
  f = new b.Monad(function () {
    return q;
  }, function () {
    return k;
  });
  c.newtypeIdentity = a;
  c.monadIdentity = f;
})(PS);

(function (a) {
  a["Control.Monad.Except"] = a["Control.Monad.Except"] || {};
  var c = a["Control.Monad.Except"],
      f = a["Control.Monad.Except.Trans"],
      l = a["Data.Identity"],
      h = a["Data.Newtype"];

  a = function () {
    var b = h.unwrap(l.newtypeIdentity);
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
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      d = a["Data.Maybe"],
      n = function n(r) {
    return new e.Functor(function (z) {
      return function (t) {
        return e.map(r)(e.map(d.functorMaybe)(z))(t);
      };
    });
  },
      m = function m(r) {
    return new b.Monad(function () {
      return y(r);
    }, function () {
      return k(r);
    });
  },
      k = function k(r) {
    return new h.Bind(function () {
      return q(r);
    }, function (z) {
      return function (t) {
        return h.bind(r.Bind1())(z)(function (p) {
          if (p instanceof d.Nothing) return f.pure(r.Applicative0())(d.Nothing.value);
          if (p instanceof d.Just) return t(p.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [p.constructor.name]);
        });
      };
    });
  },
      q = function q(r) {
    return new l.Apply(function () {
      return n(r.Bind1().Apply0().Functor0());
    }, b.ap(m(r)));
  },
      y = function y(r) {
    return new f.Applicative(function () {
      return q(r);
    }, function () {
      var z = f.pure(r.Applicative0());
      return function (t) {
        return z(d.Just.create(t));
      };
    }());
  };

  c.MaybeT = function (r) {
    return r;
  };

  c.runMaybeT = function (r) {
    return r;
  };

  c.applicativeMaybeT = y;
  c.bindMaybeT = k;
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
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"],
      d = new a["Data.Functor"].Functor(f.map_);
  a = new e.Monad(function () {
    return k;
  }, function () {
    return n;
  });
  var n = new b.Bind(function () {
    return m;
  }, f.bind_),
      m = new h.Apply(function () {
    return d;
  }, e.ap(a)),
      k = new l.Applicative(function () {
    return m;
  }, f.pure_);
  c.applicativeST = k;
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
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var c = a["Control.Monad.State.Class"],
      f = a["Data.Tuple"],
      l = a["Data.Unit"];

  c.MonadState = function (h, b) {
    this.Monad0 = h;
    this.state = b;
  };

  c.get = function (h) {
    return (0, h.state)(function (b) {
      return new f.Tuple(b, b);
    });
  };

  c.put = function (h) {
    return function (b) {
      return (0, h.state)(function (e) {
        return new f.Tuple(l.unit, b);
      });
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};

  var c = a["Control.Monad.State.Trans"],
      f = a["Control.Applicative"],
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.State.Class"],
      d = a["Data.Functor"],
      n = a["Data.Tuple"],
      m = function m(z) {
    return new d.Functor(function (t) {
      return function (p) {
        return function (A) {
          return d.map(z)(function (E) {
            return new n.Tuple(t(E.value0), E.value1);
          })(p(A));
        };
      };
    });
  },
      k = function k(z) {
    return new b.Monad(function () {
      return r(z);
    }, function () {
      return q(z);
    });
  },
      q = function q(z) {
    return new h.Bind(function () {
      return y(z);
    }, function (t) {
      return function (p) {
        return function (A) {
          return h.bind(z.Bind1())(t(A))(function (E) {
            return p(E.value0)(E.value1);
          });
        };
      };
    });
  },
      y = function y(z) {
    return new l.Apply(function () {
      return m(z.Bind1().Apply0().Functor0());
    }, b.ap(k(z)));
  },
      r = function r(z) {
    return new f.Applicative(function () {
      return y(z);
    }, function (t) {
      return function (p) {
        return f.pure(z.Applicative0())(new n.Tuple(t, p));
      };
    });
  };

  c.bindStateT = q;

  c.monadStateStateT = function (z) {
    return new e.MonadState(function () {
      return k(z);
    }, function (t) {
      return function () {
        var p = f.pure(z.Applicative0());
        return function (A) {
          return p(t(A));
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
      l = a["Control.Apply"],
      h = a["Data.Bounded"],
      b = a["Data.Functor"],
      e = a["Data.Maybe"],
      d = a["Data.Newtype"],
      n = a["Data.Ord"],
      m = a["Data.Tuple"],
      k = a["Data.Unfoldable1"];

  a = function a(G) {
    return G;
  };

  var q = function q(G) {
    this.Bounded0 = G;
  },
      y = function y(G, C, J) {
    this.Ord0 = G;
    this.pred = C;
    this.succ = J;
  },
      r = function r(G, C, J, U, B) {
    this.Bounded0 = G;
    this.Enum1 = C;
    this.cardinality = J;
    this.fromEnum = U;
    this.toEnum = B;
  },
      z = new q(function () {
    return h.boundedBoolean;
  }),
      t = new d.Newtype(function (G) {
    return G;
  }, a),
      p = function p(G) {
    return new y(function () {
      return e.ordMaybe(G.Enum1().Ord0());
    }, function (C) {
      if (C instanceof e.Nothing) return e.Nothing.value;
      if (C instanceof e.Just) return new e.Just((0, G.Enum1().pred)(C.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [C.constructor.name]);
    }, function (C) {
      if (C instanceof e.Nothing) return new e.Just(new e.Just(h.bottom(G.Bounded0())));
      if (C instanceof e.Just) return b.map(e.functorMaybe)(e.Just.create)((0, G.Enum1().succ)(C.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [C.constructor.name]);
    });
  },
      A = new y(function () {
    return n.ordBoolean;
  }, function (G) {
    return G ? new e.Just(!1) : e.Nothing.value;
  }, function (G) {
    return G ? e.Nothing.value : new e.Just(!0);
  }),
      E = function E(G) {
    return function (C) {
      return function (J) {
        return G(C(J) + 1 | 0);
      };
    };
  },
      H = function H(G) {
    return function (C) {
      return function (J) {
        return G(C(J) - 1 | 0);
      };
    };
  },
      x = function x(G) {
    return G >= h.bottom(h.boundedInt) && G <= h.top(h.boundedInt) ? new e.Just(f.fromCharCode(G)) : e.Nothing.value;
  },
      D = new y(function () {
    return n.ordChar;
  }, H(x)(f.toCharCode), E(x)(f.toCharCode));

  x = new r(function () {
    return h.boundedChar;
  }, function () {
    return D;
  }, f.toCharCode(h.top(h.boundedChar)) - f.toCharCode(h.bottom(h.boundedChar)) | 0, f.toCharCode, x);
  var N = new r(function () {
    return h.boundedBoolean;
  }, function () {
    return A;
  }, 2, function (G) {
    if (!G) return 0;
    if (G) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [G.constructor.name]);
  }, function (G) {
    return 0 === G ? new e.Just(!1) : 1 === G ? new e.Just(!0) : e.Nothing.value;
  });
  c.Enum = y;
  c.BoundedEnum = r;

  c.toEnum = function (G) {
    return G.toEnum;
  };

  c.fromEnum = function (G) {
    return G.fromEnum;
  };

  c.toEnumWithDefaults = function (G) {
    return function (C) {
      return function (J) {
        return function (U) {
          var B = (0, G.toEnum)(U);
          if (B instanceof e.Just) return B.value0;
          if (B instanceof e.Nothing) return U < (0, G.fromEnum)(h.bottom(G.Bounded0())) ? C : J;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [B.constructor.name]);
        };
      };
    };
  };

  c.Cardinality = a;

  c.upFromIncluding = function (G) {
    return function (C) {
      return k.unfoldr1(C)(l.apply(l.applyFn)(m.Tuple.create)(G.succ));
    };
  };

  c.defaultSucc = E;
  c.defaultPred = H;
  c.SmallBounded = q;
  c.boundedEnumBoolean = N;
  c.boundedEnumChar = x;
  c.newtypeCardinality = t;

  c.boundedEnumMaybe = function (G) {
    return function (C) {
      return new r(function () {
        return e.boundedMaybe(C.Bounded0());
      }, function () {
        return p(C);
      }, d.unwrap(t)(C.cardinality) + 1 | 0, function (J) {
        if (J instanceof e.Nothing) return 0;
        if (J instanceof e.Just) return (0, C.fromEnum)(J.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [J.constructor.name]);
      }, function (J) {
        return 0 === J ? e.Nothing.value : b.map(e.functorMaybe)(e.Just.create)((0, C.toEnum)(J - 1 | 0));
      });
    };
  };

  c.smallBoundedBoolean = z;
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
  a = new function (f, l, h, b) {
    this.add = f;
    this.mul = l;
    this.one = h;
    this.zero = b;
  }(a.intAdd, a.intMul, 1, 0);
  c.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var c = a["Data.Ring"],
      f = a["Data.Semiring"];
  a = new function (l, h) {
    this.Semiring0 = l;
    this.sub = h;
  }(function () {
    return f.semiringInt;
  }, a["Data.Ring"].intSub);
  c.ringInt = a;
})(PS);

(function (a) {
  a["Data.CommutativeRing"] = a["Data.CommutativeRing"] || {};
  var c = a["Data.CommutativeRing"],
      f = a["Data.Ring"];
  a = new function (l) {
    this.Ring0 = l;
  }(function () {
    return f.ringInt;
  });
  c.commutativeRingInt = a;
})(PS);

(function (a) {
  a.canonicalDateImpl = function (c, f, l, h) {
    l = new Date(Date.UTC(f, l - 1, h));
    0 <= f && 100 > f && l.setUTCFullYear(f);
    return c(l.getUTCFullYear())(l.getUTCMonth() + 1)(l.getUTCDate());
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var c = a["Data.Date.Component"],
      f = a["Data.Boolean"],
      l = a["Data.Bounded"],
      h = a["Data.Enum"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      d = a["Data.Ord"],
      n = a["Data.Ordering"],
      m = a["Data.Show"],
      k = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      q = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      y = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      r = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      z = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      t = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      p = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      A = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      E = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      H = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      x = function () {
    function P() {}

    P.value = new P();
    return P;
  }(),
      D = function () {
    function P() {}

    P.value = new P();
    return P;
  }();

  a = new m.Show(function (P) {
    return "(Year " + (m.show(m.showInt)(P) + ")");
  });
  var N = new m.Show(function (P) {
    if (P instanceof k) return "January";
    if (P instanceof q) return "February";
    if (P instanceof y) return "March";
    if (P instanceof r) return "April";
    if (P instanceof z) return "May";
    if (P instanceof t) return "June";
    if (P instanceof p) return "July";
    if (P instanceof A) return "August";
    if (P instanceof E) return "September";
    if (P instanceof H) return "October";
    if (P instanceof x) return "November";
    if (P instanceof D) return "December";
    throw Error("Failed pattern match at Data.Date.Component (line 101, column 1 - line 113, column 29): " + [P.constructor.name]);
  }),
      G = new m.Show(function (P) {
    return "(Day " + (m.show(m.showInt)(P) + ")");
  }),
      C = d.ordInt,
      J = d.ordInt,
      U = b.eqInt,
      B = new b.Eq(function (P) {
    return function (aa) {
      return P instanceof k && aa instanceof k || P instanceof q && aa instanceof q || P instanceof y && aa instanceof y || P instanceof r && aa instanceof r || P instanceof z && aa instanceof z || P instanceof t && aa instanceof t || P instanceof p && aa instanceof p || P instanceof A && aa instanceof A || P instanceof E && aa instanceof E || P instanceof H && aa instanceof H || P instanceof x && aa instanceof x || P instanceof D && aa instanceof D ? !0 : !1;
    };
  }),
      M = new d.Ord(function () {
    return B;
  }, function (P) {
    return function (aa) {
      if (P instanceof k && aa instanceof k) return n.EQ.value;
      if (P instanceof k) return n.LT.value;
      if (aa instanceof k) return n.GT.value;
      if (P instanceof q && aa instanceof q) return n.EQ.value;
      if (P instanceof q) return n.LT.value;
      if (aa instanceof q) return n.GT.value;
      if (P instanceof y && aa instanceof y) return n.EQ.value;
      if (P instanceof y) return n.LT.value;
      if (aa instanceof y) return n.GT.value;
      if (P instanceof r && aa instanceof r) return n.EQ.value;
      if (P instanceof r) return n.LT.value;
      if (aa instanceof r) return n.GT.value;
      if (P instanceof z && aa instanceof z) return n.EQ.value;
      if (P instanceof z) return n.LT.value;
      if (aa instanceof z) return n.GT.value;
      if (P instanceof t && aa instanceof t) return n.EQ.value;
      if (P instanceof t) return n.LT.value;
      if (aa instanceof t) return n.GT.value;
      if (P instanceof p && aa instanceof p) return n.EQ.value;
      if (P instanceof p) return n.LT.value;
      if (aa instanceof p) return n.GT.value;
      if (P instanceof A && aa instanceof A) return n.EQ.value;
      if (P instanceof A) return n.LT.value;
      if (aa instanceof A) return n.GT.value;
      if (P instanceof E && aa instanceof E) return n.EQ.value;
      if (P instanceof E) return n.LT.value;
      if (aa instanceof E) return n.GT.value;
      if (P instanceof H && aa instanceof H) return n.EQ.value;
      if (P instanceof H) return n.LT.value;
      if (aa instanceof H) return n.GT.value;
      if (P instanceof x && aa instanceof x) return n.EQ.value;
      if (P instanceof x) return n.LT.value;
      if (aa instanceof x) return n.GT.value;
      if (P instanceof D && aa instanceof D) return n.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [P.constructor.name, aa.constructor.name]);
    };
  });
  b = b.eqInt;
  var I = new l.Bounded(function () {
    return C;
  }, -271820, 275759),
      w = new l.Bounded(function () {
    return M;
  }, k.value, D.value),
      F = new h.BoundedEnum(function () {
    return I;
  }, function () {
    return O;
  }, 547580, function (P) {
    return P;
  }, function (P) {
    if (-271820 <= P && 275759 >= P) return new e.Just(P);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [P.constructor.name]);
  }),
      O = new h.Enum(function () {
    return C;
  }, function () {
    var P = h.toEnum(F),
        aa = h.fromEnum(F);
    return function (sa) {
      return P(aa(sa) - 1 | 0);
    };
  }(), function () {
    var P = h.toEnum(F),
        aa = h.fromEnum(F);
    return function (sa) {
      return P(aa(sa) + 1 | 0);
    };
  }()),
      Q = new h.BoundedEnum(function () {
    return w;
  }, function () {
    return X;
  }, 12, function (P) {
    if (P instanceof k) return 1;
    if (P instanceof q) return 2;
    if (P instanceof y) return 3;
    if (P instanceof r) return 4;
    if (P instanceof z) return 5;
    if (P instanceof t) return 6;
    if (P instanceof p) return 7;
    if (P instanceof A) return 8;
    if (P instanceof E) return 9;
    if (P instanceof H) return 10;
    if (P instanceof x) return 11;
    if (P instanceof D) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [P.constructor.name]);
  }, function (P) {
    return 1 === P ? new e.Just(k.value) : 2 === P ? new e.Just(q.value) : 3 === P ? new e.Just(y.value) : 4 === P ? new e.Just(r.value) : 5 === P ? new e.Just(z.value) : 6 === P ? new e.Just(t.value) : 7 === P ? new e.Just(p.value) : 8 === P ? new e.Just(A.value) : 9 === P ? new e.Just(E.value) : 10 === P ? new e.Just(H.value) : 11 === P ? new e.Just(x.value) : 12 === P ? new e.Just(D.value) : e.Nothing.value;
  }),
      X = new h.Enum(function () {
    return M;
  }, function () {
    var P = h.toEnum(Q),
        aa = h.fromEnum(Q);
    return function (sa) {
      return P(aa(sa) - 1 | 0);
    };
  }(), function () {
    var P = h.toEnum(Q),
        aa = h.fromEnum(Q);
    return function (sa) {
      return P(aa(sa) + 1 | 0);
    };
  }()),
      v = new l.Bounded(function () {
    return J;
  }, 1, 31),
      ea = new h.BoundedEnum(function () {
    return v;
  }, function () {
    return la;
  }, 31, function (P) {
    return P;
  }, function (P) {
    if (1 <= P && 31 >= P) return new e.Just(P);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [P.constructor.name]);
  }),
      la = new h.Enum(function () {
    return J;
  }, function () {
    var P = h.toEnum(ea),
        aa = h.fromEnum(ea);
    return function (sa) {
      return P(aa(sa) - 1 | 0);
    };
  }(), function () {
    var P = h.toEnum(ea),
        aa = h.fromEnum(ea);
    return function (sa) {
      return P(aa(sa) + 1 | 0);
    };
  }());
  c.eqYear = U;
  c.ordYear = C;
  c.boundedYear = I;
  c.boundedEnumYear = F;
  c.showYear = a;
  c.eqMonth = B;
  c.ordMonth = M;
  c.boundedMonth = w;
  c.boundedEnumMonth = Q;
  c.showMonth = N;
  c.eqDay = b;
  c.ordDay = J;
  c.boundedDay = v;
  c.boundedEnumDay = ea;
  c.showDay = G;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var c = a["Data.Date"],
      f = a["Data.Date"],
      l = a["Data.Bounded"],
      h = a["Data.Date.Component"],
      b = a["Data.Enum"],
      e = a["Data.Eq"],
      d = a["Data.Maybe"],
      n = a["Data.Ord"],
      m = a["Data.Ordering"],
      k = a["Data.Show"],
      q = function () {
    function z(t, p, A) {
      this.value0 = t;
      this.value1 = p;
      this.value2 = A;
    }

    z.create = function (t) {
      return function (p) {
        return function (A) {
          return new z(t, p, A);
        };
      };
    };

    return z;
  }();

  a = new k.Show(function (z) {
    return "(Date " + (k.show(h.showYear)(z.value0) + (" " + (k.show(h.showMonth)(z.value1) + (" " + (k.show(h.showDay)(z.value2) + ")")))));
  });
  var y = new e.Eq(function (z) {
    return function (t) {
      return e.eq(h.eqYear)(z.value0)(t.value0) && e.eq(h.eqMonth)(z.value1)(t.value1) && e.eq(h.eqDay)(z.value2)(t.value2);
    };
  }),
      r = new n.Ord(function () {
    return y;
  }, function (z) {
    return function (t) {
      var p = n.compare(h.ordYear)(z.value0)(t.value0);
      if (p instanceof m.LT) return m.LT.value;
      if (p instanceof m.GT) return m.GT.value;
      p = n.compare(h.ordMonth)(z.value1)(t.value1);
      return p instanceof m.LT ? m.LT.value : p instanceof m.GT ? m.GT.value : n.compare(h.ordDay)(z.value2)(t.value2);
    };
  });
  l = new l.Bounded(function () {
    return r;
  }, new q(l.bottom(h.boundedYear), l.bottom(h.boundedMonth), l.bottom(h.boundedDay)), new q(l.top(h.boundedYear), l.top(h.boundedMonth), l.top(h.boundedDay)));

  c.canonicalDate = function (z) {
    return function (t) {
      return function (p) {
        return f.canonicalDateImpl(function (A) {
          return function (E) {
            return function (H) {
              return new q(A, d.fromJust()(b.toEnum(h.boundedEnumMonth)(E)), H);
            };
          };
        }, z, b.fromEnum(h.boundedEnumMonth)(t), p);
      };
    };
  };

  c.year = function (z) {
    return z.value0;
  };

  c.month = function (z) {
    return z.value1;
  };

  c.day = function (z) {
    return z.value2;
  };

  c.eqDate = y;
  c.ordDate = r;
  c.boundedDate = l;
  c.showDate = a;
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var c = a["Data.Time.Component"],
      f = a["Data.Boolean"],
      l = a["Data.Bounded"],
      h = a["Data.Enum"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      d = a["Data.Ord"],
      n = a["Data.Show"];
  a = new n.Show(function (w) {
    return "(Second " + (n.show(n.showInt)(w) + ")");
  });
  var m = new n.Show(function (w) {
    return "(Minute " + (n.show(n.showInt)(w) + ")");
  }),
      k = new n.Show(function (w) {
    return "(Millisecond " + (n.show(n.showInt)(w) + ")");
  }),
      q = new n.Show(function (w) {
    return "(Hour " + (n.show(n.showInt)(w) + ")");
  }),
      y = d.ordInt,
      r = d.ordInt,
      z = d.ordInt,
      t = d.ordInt,
      p = d = b.eqInt,
      A = b.eqInt;
  b = b.eqInt;
  var E = new l.Bounded(function () {
    return y;
  }, 0, 59),
      H = new l.Bounded(function () {
    return r;
  }, 0, 59),
      x = new l.Bounded(function () {
    return z;
  }, 0, 999),
      D = new l.Bounded(function () {
    return t;
  }, 0, 23),
      N = new h.BoundedEnum(function () {
    return E;
  }, function () {
    return G;
  }, 60, function (w) {
    return w;
  }, function (w) {
    if (0 <= w && 59 >= w) return new e.Just(w);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [w.constructor.name]);
  }),
      G = new h.Enum(function () {
    return y;
  }, function () {
    var w = h.toEnum(N),
        F = h.fromEnum(N);
    return function (O) {
      return w(F(O) - 1 | 0);
    };
  }(), function () {
    var w = h.toEnum(N),
        F = h.fromEnum(N);
    return function (O) {
      return w(F(O) + 1 | 0);
    };
  }()),
      C = new h.BoundedEnum(function () {
    return H;
  }, function () {
    return J;
  }, 60, function (w) {
    return w;
  }, function (w) {
    if (0 <= w && 59 >= w) return new e.Just(w);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [w.constructor.name]);
  }),
      J = new h.Enum(function () {
    return r;
  }, function () {
    var w = h.toEnum(C),
        F = h.fromEnum(C);
    return function (O) {
      return w(F(O) - 1 | 0);
    };
  }(), function () {
    var w = h.toEnum(C),
        F = h.fromEnum(C);
    return function (O) {
      return w(F(O) + 1 | 0);
    };
  }()),
      U = new h.BoundedEnum(function () {
    return x;
  }, function () {
    return B;
  }, 1E3, function (w) {
    return w;
  }, function (w) {
    if (0 <= w && 999 >= w) return new e.Just(w);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [w.constructor.name]);
  }),
      B = new h.Enum(function () {
    return z;
  }, function () {
    var w = h.toEnum(U),
        F = h.fromEnum(U);
    return function (O) {
      return w(F(O) - 1 | 0);
    };
  }(), function () {
    var w = h.toEnum(U),
        F = h.fromEnum(U);
    return function (O) {
      return w(F(O) + 1 | 0);
    };
  }()),
      M = new h.BoundedEnum(function () {
    return D;
  }, function () {
    return I;
  }, 24, function (w) {
    return w;
  }, function (w) {
    if (0 <= w && 23 >= w) return new e.Just(w);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [w.constructor.name]);
  }),
      I = new h.Enum(function () {
    return t;
  }, function () {
    var w = h.toEnum(M),
        F = h.fromEnum(M);
    return function (O) {
      return w(F(O) - 1 | 0);
    };
  }(), function () {
    var w = h.toEnum(M),
        F = h.fromEnum(M);
    return function (O) {
      return w(F(O) + 1 | 0);
    };
  }());
  c.eqHour = b;
  c.ordHour = t;
  c.boundedHour = D;
  c.boundedEnumHour = M;
  c.showHour = q;
  c.eqMinute = p;
  c.ordMinute = r;
  c.boundedMinute = H;
  c.boundedEnumMinute = C;
  c.showMinute = m;
  c.eqSecond = d;
  c.ordSecond = y;
  c.boundedSecond = E;
  c.boundedEnumSecond = N;
  c.showSecond = a;
  c.eqMillisecond = A;
  c.ordMillisecond = z;
  c.boundedMillisecond = x;
  c.boundedEnumMillisecond = U;
  c.showMillisecond = k;
})(PS);

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  var c = a["Data.Time"],
      f = a["Data.Bounded"],
      l = a["Data.Eq"],
      h = a["Data.Ord"],
      b = a["Data.Ordering"],
      e = a["Data.Show"],
      d = a["Data.Time.Component"];

  a = function () {
    function q(y, r, z, t) {
      this.value0 = y;
      this.value1 = r;
      this.value2 = z;
      this.value3 = t;
    }

    q.create = function (y) {
      return function (r) {
        return function (z) {
          return function (t) {
            return new q(y, r, z, t);
          };
        };
      };
    };

    return q;
  }();

  var n = new e.Show(function (q) {
    return "(Time " + (e.show(d.showHour)(q.value0) + (" " + (e.show(d.showMinute)(q.value1) + (" " + (e.show(d.showSecond)(q.value2) + (" " + (e.show(d.showMillisecond)(q.value3) + ")")))))));
  }),
      m = new l.Eq(function (q) {
    return function (y) {
      return l.eq(d.eqHour)(q.value0)(y.value0) && l.eq(d.eqMinute)(q.value1)(y.value1) && l.eq(d.eqSecond)(q.value2)(y.value2) && l.eq(d.eqMillisecond)(q.value3)(y.value3);
    };
  }),
      k = new h.Ord(function () {
    return m;
  }, function (q) {
    return function (y) {
      var r = h.compare(d.ordHour)(q.value0)(y.value0);
      if (r instanceof b.LT) return b.LT.value;
      if (r instanceof b.GT) return b.GT.value;
      r = h.compare(d.ordMinute)(q.value1)(y.value1);
      if (r instanceof b.LT) return b.LT.value;
      if (r instanceof b.GT) return b.GT.value;
      r = h.compare(d.ordSecond)(q.value2)(y.value2);
      return r instanceof b.LT ? b.LT.value : r instanceof b.GT ? b.GT.value : h.compare(d.ordMillisecond)(q.value3)(y.value3);
    };
  });
  f = new f.Bounded(function () {
    return k;
  }, new a(f.bottom(d.boundedHour), f.bottom(d.boundedMinute), f.bottom(d.boundedSecond), f.bottom(d.boundedMillisecond)), new a(f.top(d.boundedHour), f.top(d.boundedMinute), f.top(d.boundedSecond), f.top(d.boundedMillisecond)));
  c.Time = a;

  c.hour = function (q) {
    return q.value0;
  };

  c.minute = function (q) {
    return q.value1;
  };

  c.second = function (q) {
    return q.value2;
  };

  c.millisecond = function (q) {
    return q.value3;
  };

  c.eqTime = m;
  c.ordTime = k;
  c.boundedTime = f;
  c.showTime = n;
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  var c = a["Data.DateTime"],
      f = a["Data.Bounded"],
      l = a["Data.Date"],
      h = a["Data.Eq"],
      b = a["Data.Ord"],
      e = a["Data.Ordering"],
      d = a["Data.Show"],
      n = a["Data.Time"];

  a = function () {
    function y(r, z) {
      this.value0 = r;
      this.value1 = z;
    }

    y.create = function (r) {
      return function (z) {
        return new y(r, z);
      };
    };

    return y;
  }();

  var m = new d.Show(function (y) {
    return "(DateTime " + (d.show(l.showDate)(y.value0) + (" " + (d.show(n.showTime)(y.value1) + ")")));
  }),
      k = new h.Eq(function (y) {
    return function (r) {
      return h.eq(l.eqDate)(y.value0)(r.value0) && h.eq(n.eqTime)(y.value1)(r.value1);
    };
  }),
      q = new b.Ord(function () {
    return k;
  }, function (y) {
    return function (r) {
      var z = b.compare(l.ordDate)(y.value0)(r.value0);
      return z instanceof e.LT ? e.LT.value : z instanceof e.GT ? e.GT.value : b.compare(n.ordTime)(y.value1)(r.value1);
    };
  });
  f = new f.Bounded(function () {
    return q;
  }, new a(f.bottom(l.boundedDate), f.bottom(n.boundedTime)), new a(f.top(l.boundedDate), f.top(n.boundedTime)));
  c.DateTime = a;
  c.boundedDateTime = f;
  c.showDateTime = m;
})(PS);

(function (a) {
  a.toDateTimeImpl = function (c) {
    return function (f) {
      f = new Date(f);
      return c(f.getUTCFullYear())(f.getUTCMonth() + 1)(f.getUTCDate())(f.getUTCHours())(f.getUTCMinutes())(f.getUTCSeconds())(f.getUTCMilliseconds());
    };
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.DateTime.Instant"] = a["Data.DateTime.Instant"] || {};
  var c = a["Data.DateTime.Instant"],
      f = a["Data.DateTime.Instant"],
      l = a["Data.Boolean"],
      h = a["Data.Date"],
      b = a["Data.Date.Component"],
      e = a["Data.DateTime"],
      d = a["Data.Enum"],
      n = a["Data.Maybe"],
      m = a["Data.Time"];

  a = function () {
    return f.toDateTimeImpl(function (k) {
      return function (q) {
        return function (y) {
          return function (r) {
            return function (z) {
              return function (t) {
                return function (p) {
                  return new e.DateTime(h.canonicalDate(k)(n.fromJust()(d.toEnum(b.boundedEnumMonth)(q)))(y), new m.Time(r, z, t, p));
                };
              };
            };
          };
        };
      };
    });
  }();

  c.instant = function (k) {
    if (-86399778816E5 <= k && 8639977881599999 >= k) return new n.Just(k);
    if (l.otherwise) return n.Nothing.value;
    throw Error("Failed pattern match at Data.DateTime.Instant (line 44, column 1 - line 44, column 41): " + [k.constructor.name]);
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
      l = a["Data.CommutativeRing"];
  a = new function (h, b, e, d) {
    this.CommutativeRing0 = h;
    this.degree = b;
    this.div = e;
    this.mod = d;
  }(function () {
    return l.commutativeRingInt;
  }, f.intDegree, f.intDiv, f.intMod);

  c.div = function (h) {
    return h.div;
  };

  c.mod = function (h) {
    return h.mod;
  };

  c.euclideanRingInt = a;
})(PS);

(function (a) {
  a.runFn2 = function (c) {
    return function (f) {
      return function (l) {
        return c(f, l);
      };
    };
  };

  a.runFn4 = function (c) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function (b) {
            return c(f, l, h, b);
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
  a.Inl = c;
  a.Inr = f;

  a.Constructor = function (h) {
    return h;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var c = a["Data.Generic.Rep.Bounded"],
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
      d = function d(n) {
    return n["genericBottom'"];
  };

  c["genericBottom'"] = d;

  c.genericBottom = function (n) {
    return function (m) {
      return f.to(n)(d(m));
    };
  };

  c["genericTop'"] = b;

  c.genericTop = function (n) {
    return function (m) {
      return f.to(n)(b(m));
    };
  };

  c.genericBottomNoArguments = e;

  c.genericBottomSum = function (n) {
    return new h(new f.Inl(d(n)));
  };

  c.genericBottomConstructor = function (n) {
    return new h(d(n));
  };

  c.genericTopNoArguments = a;

  c.genericTopSum = function (n) {
    return new l(new f.Inr(b(n)));
  };

  c.genericTopConstructor = function (n) {
    return new l(b(n));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var c = a["Data.Generic.Rep.Enum"],
      f = a["Data.Boolean"],
      l = a["Data.Enum"],
      h = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Maybe"],
      n = a["Data.Newtype"],
      m = function m(A, E) {
    this["genericPred'"] = A;
    this["genericSucc'"] = E;
  },
      k = function k(A, E, H) {
    this["genericCardinality'"] = A;
    this["genericFromEnum'"] = E;
    this["genericToEnum'"] = H;
  },
      q = function q(A) {
    return A["genericToEnum'"];
  },
      y = function y(A) {
    return A["genericSucc'"];
  },
      r = function r(A) {
    return A["genericPred'"];
  },
      z = function z(A) {
    return A["genericFromEnum'"];
  };

  a = new m(function (A) {
    return d.Nothing.value;
  }, function (A) {
    return d.Nothing.value;
  });

  var t = function t(A) {
    return A["genericCardinality'"];
  },
      p = new k(1, function (A) {
    return 0;
  }, function (A) {
    return 0 === A ? new d.Just(b.NoArguments.value) : d.Nothing.value;
  });

  c.genericPred = function (A) {
    return function (E) {
      var H = h.map(d.functorMaybe)(b.to(A)),
          x = r(E),
          D = b.from(A);
      return function (N) {
        return H(x(D(N)));
      };
    };
  };

  c.genericSucc = function (A) {
    return function (E) {
      var H = h.map(d.functorMaybe)(b.to(A)),
          x = y(E),
          D = b.from(A);
      return function (N) {
        return H(x(D(N)));
      };
    };
  };

  c.genericCardinality = function (A) {
    return function (E) {
      return n.unwrap(l.newtypeCardinality)(t(E));
    };
  };

  c.genericToEnum = function (A) {
    return function (E) {
      var H = h.map(d.functorMaybe)(b.to(A)),
          x = q(E);
      return function (D) {
        return H(x(D));
      };
    };
  };

  c.genericFromEnum = function (A) {
    return function (E) {
      var H = z(E),
          x = b.from(A);
      return function (D) {
        return H(x(D));
      };
    };
  };

  c.genericEnumNoArguments = a;

  c.genericEnumConstructor = function (A) {
    return new m(function (E) {
      return h.map(d.functorMaybe)(b.Constructor)(r(A)(E));
    }, function (E) {
      return h.map(d.functorMaybe)(b.Constructor)(y(A)(E));
    });
  };

  c.genericEnumSum = function (A) {
    return function (E) {
      return function (H) {
        return function (x) {
          return new m(function (D) {
            if (D instanceof b.Inl) return h.map(d.functorMaybe)(b.Inl.create)(r(A)(D.value0));

            if (D instanceof b.Inr) {
              D = r(H)(D.value0);
              if (D instanceof d.Nothing) return new d.Just(new b.Inl(e["genericTop'"](E)));
              if (D instanceof d.Just) return new d.Just(new b.Inr(D.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [D.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [D.constructor.name]);
          }, function (D) {
            if (D instanceof b.Inl) {
              D = y(A)(D.value0);
              if (D instanceof d.Nothing) return new d.Just(new b.Inr(e["genericBottom'"](x)));
              if (D instanceof d.Just) return new d.Just(new b.Inl(D.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [D.constructor.name]);
            }

            if (D instanceof b.Inr) return h.map(d.functorMaybe)(b.Inr.create)(y(H)(D.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [D.constructor.name]);
          });
        };
      };
    };
  };

  c.genericBoundedEnumNoArguments = p;

  c.genericBoundedEnumConstructor = function (A) {
    return new k(n.unwrap(l.newtypeCardinality)(t(A)), function (E) {
      return z(A)(E);
    }, function (E) {
      return h.map(d.functorMaybe)(b.Constructor)(q(A)(E));
    });
  };

  c.genericBoundedEnumSum = function (A) {
    return function (E) {
      return new k(l.Cardinality(n.unwrap(l.newtypeCardinality)(t(A)) + n.unwrap(l.newtypeCardinality)(t(E)) | 0), function (H) {
        if (H instanceof b.Inl) return z(A)(H.value0);
        if (H instanceof b.Inr) return z(E)(H.value0) + n.unwrap(l.newtypeCardinality)(t(A)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [H.constructor.name]);
      }, function (H) {
        var x = t(A);
        if (0 <= H && H < x) H = h.map(d.functorMaybe)(b.Inl.create)(q(A)(H));else if (f.otherwise) H = h.map(d.functorMaybe)(b.Inr.create)(q(E)(H - x | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [x.constructor.name]);
        return H;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var c = a["Data.Generic.Rep.Eq"],
      f = a["Data.Generic.Rep"],
      l = function l(h) {
    this["genericEq'"] = h;
  };

  a = new l(function (h) {
    return function (b) {
      return !0;
    };
  });

  c.genericEq = function (h) {
    return function (b) {
      return function (e) {
        return function (d) {
          return (0, b["genericEq'"])(f.from(h)(e))(f.from(h)(d));
        };
      };
    };
  };

  c.genericEqNoArguments = a;

  c.genericEqSum = function (h) {
    return function (b) {
      return new l(function (e) {
        return function (d) {
          return e instanceof f.Inl && d instanceof f.Inl ? (0, h["genericEq'"])(e.value0)(d.value0) : e instanceof f.Inr && d instanceof f.Inr ? (0, b["genericEq'"])(e.value0)(d.value0) : !1;
        };
      });
    };
  };

  c.genericEqConstructor = function (h) {
    return new l(function (b) {
      return function (e) {
        return (0, h["genericEq'"])(b)(e);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var c = a["Data.Generic.Rep.Ord"],
      f = a["Data.Generic.Rep"],
      l = a["Data.Ordering"],
      h = function h(e) {
    this["genericCompare'"] = e;
  };

  a = new h(function (e) {
    return function (d) {
      return l.EQ.value;
    };
  });

  var b = function b(e) {
    return e["genericCompare'"];
  };

  c.genericCompare = function (e) {
    return function (d) {
      return function (n) {
        return function (m) {
          return b(d)(f.from(e)(n))(f.from(e)(m));
        };
      };
    };
  };

  c.genericOrdNoArguments = a;

  c.genericOrdSum = function (e) {
    return function (d) {
      return new h(function (n) {
        return function (m) {
          if (n instanceof f.Inl && m instanceof f.Inl) return b(e)(n.value0)(m.value0);
          if (n instanceof f.Inr && m instanceof f.Inr) return b(d)(n.value0)(m.value0);
          if (n instanceof f.Inl && m instanceof f.Inr) return l.LT.value;
          if (n instanceof f.Inr && m instanceof f.Inl) return l.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [n.constructor.name, m.constructor.name]);
        };
      });
    };
  };

  c.genericOrdConstructor = function (e) {
    return new h(function (d) {
      return function (n) {
        return b(e)(d)(n);
      };
    });
  };
})(PS);

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
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var c = a["Data.Generic.Rep.Show"],
      f = a["Data.Foldable"],
      l = a["Data.Generic.Rep"],
      h = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = a["Data.Symbol"],
      d = function d(n) {
    this["genericShow'"] = n;
  };

  a = new function (n) {
    this.genericShowArgs = n;
  }(function (n) {
    return [];
  });

  c.genericShow = function (n) {
    return function (m) {
      return function (k) {
        return (0, m["genericShow'"])(l.from(n)(k));
      };
    };
  };

  c.genericShowArgsNoArguments = a;

  c.genericShowSum = function (n) {
    return function (m) {
      return new d(function (k) {
        if (k instanceof l.Inl) return (0, n["genericShow'"])(k.value0);
        if (k instanceof l.Inr) return (0, m["genericShow'"])(k.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [k.constructor.name]);
      });
    };
  };

  c.genericShowConstructor = function (n) {
    return function (m) {
      return new d(function (k) {
        var q = e.reflectSymbol(m)(e.SProxy.value);
        k = (0, n.genericShowArgs)(k);
        return 0 === k.length ? q : "(" + (f.intercalate(f.foldableArray)(h.monoidString)(" ")(b.append(b.semigroupArray)([q])(k)) + ")");
      });
    };
  };
})(PS);

(function (a) {
  a.fromNumberImpl = function (c) {
    return function (f) {
      return function (l) {
        return (l | 0) === l ? c(l) : f;
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

  a.readInt = function (c) {
    return function (f) {
      return parseInt(f, c);
    };
  };

  a._encodeURIComponent = function (c) {
    return function (f, l, h) {
      try {
        return l(c(h));
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
      l = a["Data.Function"],
      h = a["Data.Maybe"];

  c.encodeURIComponent = function (b) {
    return f._encodeURIComponent(l["const"](h.Nothing.value), h.Just.create, b);
  };

  c.infinity = f.infinity;
  c.readInt = f.readInt;
})(PS);

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
      f = a["Data.Int"],
      l = a["Data.Boolean"],
      h = a["Data.Bounded"],
      b = a["Data.Maybe"],
      e = a.Global,
      d = a.Math,
      n = f.fromNumberImpl(b.Just.create)(b.Nothing.value),
      m = function m(k) {
    if (k === e.infinity || k === -e.infinity) return 0;
    if (k >= f.toNumber(h.top(h.boundedInt))) return h.top(h.boundedInt);
    if (k <= f.toNumber(h.bottom(h.boundedInt))) return h.bottom(h.boundedInt);
    if (l.otherwise) return b.fromMaybe(0)(n(k));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [k.constructor.name]);
  };

  c.round = function (k) {
    return m(d.round(k));
  };

  c.hexadecimal = 16;
  c.toNumber = f.toNumber;
  c.toStringAs = f.toStringAs;
})(PS);

(function (a) {
  a.toInstantImpl = function (c) {
    return function (f) {
      return function (l) {
        l = l.getTime();
        return isNaN(l) ? f : c(l);
      };
    };
  };

  a.jsdate = function (c) {
    var f = c.year;
    c = new Date(Date.UTC(f, c.month, c.day, c.hour, c.minute, c.second, c.millisecond));
    0 <= f && 100 > f && c.setUTCFullYear(f);
    return c;
  };

  a.dateMethodEff = function (c, f) {
    return function () {
      return f[c]();
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
      f = a["Data.JSDate"],
      l = a["Data.Date"],
      h = a["Data.Date.Component"],
      b = a["Data.DateTime.Instant"],
      e = a["Data.Enum"],
      d = a["Data.Functor"],
      n = a["Data.Int"],
      m = a["Data.Maybe"],
      k = a["Data.Time"],
      q = a["Data.Time.Component"],
      y = a["Data.Time.Duration"];
  a = a["Control.Bind"].composeKleisliFlipped(m.bindMaybe)(function (r) {
    return b.instant(y.Milliseconds(r));
  })(f.toInstantImpl(m.Just.create)(m.Nothing.value));
  d = d.map(d.functorFn)(d.map(m.functorMaybe)(b.toDateTime))(a);

  c.fromDateTime = function (r) {
    return f.jsdate({
      year: n.toNumber(e.fromEnum(h.boundedEnumYear)(l.year(r.value0))),
      month: n.toNumber(e.fromEnum(h.boundedEnumMonth)(l.month(r.value0)) - 1 | 0),
      day: n.toNumber(e.fromEnum(h.boundedEnumDay)(l.day(r.value0))),
      hour: n.toNumber(e.fromEnum(q.boundedEnumHour)(k.hour(r.value1))),
      minute: n.toNumber(e.fromEnum(q.boundedEnumMinute)(k.minute(r.value1))),
      second: n.toNumber(e.fromEnum(q.boundedEnumSecond)(k.second(r.value1))),
      millisecond: n.toNumber(e.fromEnum(q.boundedEnumMillisecond)(k.millisecond(r.value1)))
    });
  };

  c.toDateTime = d;

  c.toISOString = function (r) {
    return f.dateMethodEff("toISOString", r);
  };

  c.parse = f.parse;
})(PS);

(function (a) {
  a["Data.List.NonEmpty"] = a["Data.List.NonEmpty"] || {};
  var c = a["Data.List.NonEmpty"],
      f = a["Data.List.Types"],
      l = a["Data.NonEmpty"];

  a = function () {
    var h = l.singleton(f.plusList);
    return function (b) {
      return f.NonEmptyList(h(b));
    };
  }();

  c.singleton = a;
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};
  var c = a["Data.Maybe.First"],
      f = a["Data.Maybe"];
  a = new a["Data.Semigroup"].Semigroup(function (l) {
    return function (h) {
      return l instanceof f.Just ? l : h;
    };
  });

  c.First = function (l) {
    return l;
  };

  c.semigroupFirst = a;
})(PS);

(function (a) {
  a["Data.Natural"] = a["Data.Natural"] || {};
  var c = a["Data.Natural"],
      f = a["Data.Show"];
  a = new f.Show(function () {
    var l = f.show(f.showInt);
    return function (h) {
      return l(h);
    };
  }());

  c.intToNat = function (l) {
    return 0 <= l ? l : 0;
  };

  c.natToInt = function (l) {
    return l;
  };

  c.showNatural = a;
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  a = a["Data.Profunctor"];
  var c = new function (f) {
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

  a.profunctorFn = c;
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};
  var c = a["Data.Profunctor.Strong"],
      f = a["Control.Category"],
      l = a["Control.Semigroupoid"],
      h = a["Data.Profunctor"],
      b = a["Data.Tuple"];
  a = new function (d, n, m) {
    this.Profunctor0 = d;
    this.first = n;
    this.second = m;
  }(function () {
    return h.profunctorFn;
  }, function (d) {
    return function (n) {
      return new b.Tuple(d(n.value0), n.value1);
    };
  }, a["Data.Functor"].map(b.functorTuple));

  var e = function e(d) {
    return function (n) {
      return function (m) {
        return function (k) {
          return l.composeFlipped(d.Semigroupoid0())((0, n.first)(m))((0, n.second)(k));
        };
      };
    };
  };

  c.second = function (d) {
    return d.second;
  };

  c.fanout = function (d) {
    return function (n) {
      return function (m) {
        return function (k) {
          var q = h.dimap(n.Profunctor0())(f.identity(f.categoryFn))(function (y) {
            return new b.Tuple(y, y);
          })(f.identity(d));
          return l.composeFlipped(d.Semigroupoid0())(q)(e(d)(n)(m)(k));
        };
      };
    };
  };

  c.strongFn = a;
})(PS);

(function (a) {
  var c = "function" === typeof Array.from,
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
      return function (d) {
        return function (n) {
          return function (m) {
            return function (k) {
              var q = k.length;
              if (0 > m || m >= q) return d;
              if (f) for (k = k[Symbol.iterator](), q = m;; --q) {
                var y = k.next();
                if (y.done) return d;
                if (0 === q) return e(n(y.value));
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
      return f ? function (d) {
        var n = "";
        d = d[Symbol.iterator]();

        for (var m = 0; m < e; ++m) {
          var k = d.next();
          if (k.done) break;
          n += k.value;
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
  a.singleton = function (c) {
    return c;
  };

  a.length = function (c) {
    return c.length;
  };

  a._indexOf = function (c) {
    return function (f) {
      return function (l) {
        return function (h) {
          h = h.indexOf(l);
          return -1 === h ? f : c(h);
        };
      };
    };
  };

  a._lastIndexOf = function (c) {
    return function (f) {
      return function (l) {
        return function (h) {
          h = h.lastIndexOf(l);
          return -1 === h ? f : c(h);
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
  a["Data.String.CodeUnits"] = a["Data.String.CodeUnits"] || {};

  var c = a["Data.String.CodeUnits"],
      f = a["Data.String.CodeUnits"],
      l = a["Data.Maybe"],
      h = f._lastIndexOf(l.Just.create)(l.Nothing.value),
      b = f._indexOf(l.Just.create)(l.Nothing.value);

  c.stripSuffix = function (e) {
    return function (d) {
      var n = h(e)(d);
      return n instanceof l.Just && n.value0 === (f.length(d) - f.length(e) | 0) ? l.Just.create(f.take(n.value0)(d)) : l.Nothing.value;
    };
  };

  c.contains = function (e) {
    var d = b(e);
    return function (n) {
      return l.isJust(d(n));
    };
  };

  c.singleton = f.singleton;
  c.length = f.length;
  c.drop = f.drop;
})(PS);

(function (a) {
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

  c.toUpper = a.toUpper;
  c.trim = a.trim;
})(PS);

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
  a.unfoldrArrayImpl = function (c) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function (b) {
            return function (e) {
              for (var d = [];;) {
                e = b(e);
                if (c(e)) return d;
                e = f(e);
                d.push(l(e));
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
  var c = a["Data.Unfoldable"],
      f = a["Data.Function"],
      l = a["Data.Functor"],
      h = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = a["Data.Unfoldable1"];
  a = new function (d, n) {
    this.Unfoldable10 = d;
    this.unfoldr = n;
  }(function () {
    return e.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(h.isNothing)(h.fromJust())(b.fst)(b.snd));

  c.unfoldr = function (d) {
    return d.unfoldr;
  };

  c.fromMaybe = function (d) {
    return (0, d.unfoldr)(function (n) {
      return l.map(h.functorMaybe)(f.flip(b.Tuple.create)(h.Nothing.value))(n);
    });
  };

  c.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var c = a["Data.String.CodePoints"],
      f = a["Data.String.CodePoints"],
      l = a["Data.Array"],
      h = a["Data.Boolean"],
      b = a["Data.Bounded"],
      e = a["Data.Enum"],
      d = a["Data.Eq"],
      n = a["Data.EuclideanRing"],
      m = a["Data.Functor"],
      k = a["Data.Int"],
      q = a["Data.Maybe"],
      y = a["Data.Ord"],
      r = a["Data.String.CodeUnits"],
      z = a["Data.String.Common"],
      t = a["Data.String.Unsafe"],
      p = a["Data.Tuple"],
      A = a["Data.Unfoldable"],
      E = function E(F) {
    return function (O) {
      return ((1024 * (F - 55296 | 0) | 0) + (O - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (F) {
    return "(CodePoint 0x" + (z.toUpper(k.toStringAs(k.hexadecimal)(F)) + ")");
  });

  var H = function H(F) {
    var O = r.length(F);
    if (0 === O) return q.Nothing.value;
    if (1 === O) return new q.Just({
      head: e.fromEnum(e.boundedEnumChar)(t.charAt(0)(F)),
      tail: ""
    });
    O = e.fromEnum(e.boundedEnumChar)(t.charAt(1)(F));
    var Q = e.fromEnum(e.boundedEnumChar)(t.charAt(0)(F));
    return 55296 <= Q && 56319 >= Q && 56320 <= O && 57343 >= O ? new q.Just({
      head: E(Q)(O),
      tail: r.drop(2)(F)
    }) : new q.Just({
      head: Q,
      tail: r.drop(1)(F)
    });
  },
      x = function x(F) {
    return m.map(q.functorMaybe)(function (O) {
      return new p.Tuple(O.head, O.tail);
    })(H(F));
  },
      D = f._unsafeCodePointAt0(function (F) {
    var O = e.fromEnum(e.boundedEnumChar)(t.charAt(0)(F));
    return 55296 <= O && 56319 >= O && 1 < r.length(F) && (F = e.fromEnum(e.boundedEnumChar)(t.charAt(1)(F)), 56320 <= F && 57343 >= F) ? E(O)(F) : O;
  }),
      N = f._toCodePointArray(function (F) {
    return A.unfoldr(A.unfoldableArray)(x)(F);
  })(D),
      G = function () {
    var F = e.toEnumWithDefaults(e.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (O) {
      return r.singleton(F(O));
    };
  }(),
      C = f._singleton(function (F) {
    if (65535 >= F) return G(F);
    var O = n.div(n.euclideanRingInt)(F - 65536 | 0)(1024) + 55296 | 0;
    F = n.mod(n.euclideanRingInt)(F - 65536 | 0)(1024) + 56320 | 0;
    return G(O) + G(F);
  }),
      J = function J(F) {
    return function (O) {
      if (1 > F) return "";
      var Q = H(O);
      return Q instanceof q.Just ? C(Q.value0.head) + J(F - 1 | 0)(Q.value0.tail) : O;
    };
  };

  f._take(J);

  var U = new d.Eq(function (F) {
    return function (O) {
      return F === O;
    };
  }),
      B = new y.Ord(function () {
    return U;
  }, function (F) {
    return function (O) {
      return y.compare(y.ordInt)(F)(O);
    };
  }),
      M = function M(F) {
    return function (O) {
      for (var Q = F, X = !1, v; !X;) {
        v = Q;
        var ea = H(O);
        ea instanceof q.Just ? 0 === v ? (X = !0, v = new q.Just(ea.value0.head)) : (Q = v - 1 | 0, O = ea.value0.tail, v = void 0) : (X = !0, v = q.Nothing.value);
      }

      return v;
    };
  },
      I = new b.Bounded(function () {
    return B;
  }, 0, 1114111);

  d = new e.BoundedEnum(function () {
    return I;
  }, function () {
    return w;
  }, 1114112, function (F) {
    return F;
  }, function (F) {
    if (0 <= F && 1114111 >= F) return new q.Just(F);
    if (h.otherwise) return q.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [F.constructor.name]);
  });
  var w = new e.Enum(function () {
    return B;
  }, e.defaultPred(e.toEnum(d))(e.fromEnum(d)), e.defaultSucc(e.toEnum(d))(e.fromEnum(d)));
  c.singleton = C;
  c.toCodePointArray = N;

  c.codePointAt = function (F) {
    return function (O) {
      return 0 > F || 0 === F && "" === O ? q.Nothing.value : 0 === F ? new q.Just(D(O)) : f._codePointAt(M)(q.Just.create)(q.Nothing.value)(D)(F)(O);
    };
  };

  c.length = function (F) {
    return l.length(N(F));
  };

  c.showCodePoint = a;
  c.boundedEnumCodePoint = d;
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var c = a["Data.String.NonEmpty.Internal"],
      f = a["Data.Maybe"];
  a = a["Data.Semigroup"].semigroupString;

  c.fromString = function (l) {
    return "" === l ? f.Nothing.value : new f.Just(l);
  };

  c.toString = function (l) {
    return l;
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
  var c = null;

  a.getUUIDImpl = function () {
    null === c && (c = require("uuid/v4"));
    return c();
  };
})(PS["Data.UUID"] = PS["Data.UUID"] || {});

(function (a) {
  a["Data.UUID"] = a["Data.UUID"] || {};
  var c = a["Data.UUID"],
      f = a["Data.UUID"],
      l = a["Control.Applicative"],
      h = a.Effect;
  a = a["Control.Bind"].bind(h.bindEffect)(f.getUUIDImpl)(function () {
    var b = l.pure(h.applicativeEffect);
    return function (e) {
      return b(e);
    };
  }());
  c.emptyUUID = "00000000-0000-0000-0000-000000000000";
  c.genUUID = a;

  c.toString = function (b) {
    return b;
  };
})(PS);

(function (a) {
  a["Data.XPath"] = a["Data.XPath"] || {};
  var c = a["Data.XPath"],
      f = a["Data.Semigroup"],
      l = new function (h, b, e, d, n, m) {
    this.Semigroup0 = h;
    this.at = b;
    this.pathAppend = e;
    this.pathAppendNSx = d;
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

  c.pathAppend = function (h) {
    return h.pathAppend;
  };

  c.pathAppendNSx = function (h) {
    return h.pathAppendNSx;
  };

  c.at = function (h) {
    return h.at;
  };

  c.xx = function (h) {
    return h.xx;
  };

  c.root = function (h) {
    return h.root;
  };

  c.stringXPath = l;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var c = a["Effect.Class"],
      f = a["Effect.Console"];

  a["Effect.Class.Console"].log = function (l) {
    var h = c.liftEffect(l);
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
  var c = a["Effect.Now"],
      f = a["Effect.Now"],
      l = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(l.toDateTime)(f.now);
  c.nowDateTime = a;
})(PS);

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
      l = a["Control.Applicative"],
      h = a["Control.Monad.Error.Class"],
      b = a["Control.Monad.Except.Trans"],
      e = a["Data.Boolean"],
      d = a["Data.Identity"],
      n = a["Data.List.NonEmpty"],
      m = a["Data.Show"],
      k = function () {
    function p(A) {
      this.value0 = A;
    }

    p.create = function (A) {
      return new p(A);
    };

    return p;
  }(),
      q = function () {
    function p(A, E) {
      this.value0 = A;
      this.value1 = E;
    }

    p.create = function (A) {
      return function (E) {
        return new p(A, E);
      };
    };

    return p;
  }(),
      y = function () {
    function p(A, E) {
      this.value0 = A;
      this.value1 = E;
    }

    p.create = function (A) {
      return function (E) {
        return new p(A, E);
      };
    };

    return p;
  }(),
      r = function () {
    function p(A, E) {
      this.value0 = A;
      this.value1 = E;
    }

    p.create = function (A) {
      return function (E) {
        return new p(A, E);
      };
    };

    return p;
  }(),
      z = new m.Show(function (p) {
    if (p instanceof k) return "(ForeignError " + (m.show(m.showString)(p.value0) + ")");
    if (p instanceof y) return "(ErrorAtIndex " + (m.show(m.showInt)(p.value0) + (" " + (m.show(z)(p.value1) + ")")));
    if (p instanceof r) return "(ErrorAtProperty " + (m.show(m.showString)(p.value0) + (" " + (m.show(z)(p.value1) + ")")));
    if (p instanceof q) return "(TypeMismatch " + (m.show(m.showString)(p.value0) + (" " + (m.show(m.showString)(p.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [p.constructor.name]);
  }),
      t = function () {
    var p = h.throwError(b.monadThrowExceptT(d.monadIdentity));
    return function (A) {
      return p(n.singleton(A));
    };
  }();

  a = function (p) {
    return function (A) {
      if (f.tagOf(A) === p) return l.pure(b.applicativeExceptT(d.monadIdentity))(f.unsafeFromForeign(A));
      if (e.otherwise) return t(new q(p, f.tagOf(A)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [p.constructor.name, A.constructor.name]);
    };
  }("String");

  c.readString = a;
  c.showForeignError = z;
})(PS);

(function (a) {
  function c(f) {
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
      return function (l) {
        return function () {
          l[c] = f;
          return l;
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
      l = a["Control.Monad.ST.Internal"],
      h = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Foreign.Object.ST"],
      d = f._copyST,
      n = function n(q) {
    return function (y) {
      return f.runST(function () {
        var r = d(y)();
        q(r)();
        return r;
      });
    };
  },
      m = a["Data.Function.Uncurried"].runFn4(f._lookup)(b.Nothing.value)(b.Just.create),
      k = function k(q) {
    return function (y) {
      return n(e.poke(q)(y));
    };
  };

  c.lookup = m;

  c.fromFoldableWith = function (q) {
    return function (y) {
      return function (r) {
        return f.runST(function () {
          var z = e["new"]();
          h.for_(l.applicativeST)(q)(r)(function (t) {
            return function () {
              var p = f._lookupST(t.value1, y(t.value1), t.value0, z)();

              return e.poke(t.value0)(p)(z)();
            };
          })();
          return z;
        });
      };
    };
  };

  c.alter = function (q) {
    return function (y) {
      return function (r) {
        var z = q(m(y)(r));
        if (z instanceof b.Nothing) return n(e["delete"](y))(r);
        if (z instanceof b.Just) return k(y)(z.value0)(r);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [z.constructor.name]);
      };
    };
  };

  c.empty = f.empty;
  c.keys = f.keys;
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
      l = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (h) {
    return c.classList(f.map(f.functorArray)(l.Just.create)(h));
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
      l = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      h = a["Metajelo.CSS.UI.Util"];
  a = h.mjUiClass(f.versioning);
  var b = h.mjUiClass(f.url),
      e = h.mjUiClass(l.tooltip),
      d = h.mjUiClass(f.title),
      n = h.mjUiClass(f.sustainability),
      m = h.mjUiClass(f.superOrg),
      k = h.mjUiClass(f.resourceTypeGen),
      q = h.mjUiClass(f.resourceTypeDescr),
      y = h.mjUiClass(f.resourceType),
      r = h.mjUiClass(f.resourceMDSource),
      z = h.mjUiClass(f.resourceId),
      t = h.mjUiClass(f.relatedIdsHeader),
      p = h.mjUiClass(f.relatedIds),
      A = h.mjUiClass(f.relatedIdList),
      E = h.mjUiClass(f.relatedId),
      H = h.mjUiClass(f.relType),
      x = h.mjUiClass(f.record),
      D = h.mjUiClass(l.recPreview),
      N = h.mjUiClass(f.pubyear),
      G = h.mjUiClass(f.productsHeader),
      C = h.mjUiClass(f.products),
      J = h.mjUiClass(f.productList),
      U = h.mjUiClass(f.product),
      B = h.mjUiClass(l.prodPreview),
      M = h.mjUiClass(l.previewButtons),
      I = h.mjUiClass(f.policyType),
      w = h.mjUiClass(f.policy),
      F = h.mjUiClass(l.page),
      O = h.mjUiClass(f.missionStatement),
      Q = h.mjUiClass(f.location),
      X = h.mjUiClass(l.locPreview),
      v = h.mjUiClass(f.institutionType),
      ea = h.mjUiClass(f.institutionPolicy),
      la = h.mjUiClass(f.institutionPolicies),
      P = h.mjUiClass(f.institutionName),
      aa = h.mjUiClass(f.institutionId),
      sa = h.mjUiClass(f.institutionContact),
      wa = h.mjUiClass(f.identifier),
      na = h.mjUiClass(f.idType),
      oa = h.mjUiClass(f.id),
      Da = h.mjUiClass(f.fundingStatement),
      ba = h.mjUiClass(f.formatList),
      fa = h.mjUiClass(f.format),
      Z = h.mjUiClass(l.downloadBtn),
      Ca = h.mjUiClass(l.date),
      R = h.mjUiClass(f.creator),
      K = h.mjUiClass(f.contactType),
      T = h.mjUiClass(f.contactEmail);
  l = h.mjUiClass(l.clipBtn);
  var Y = h.mjUiClass(f.basicMetadata);
  f = h.mjUiClass(f.applies);
  c.page = F;
  c.date = Ca;
  c.recPreview = D;
  c.prodPreview = B;
  c.locPreview = X;
  c.tooltip = e;
  c.downloadBtn = Z;
  c.clipBtn = l;
  c.previewButtons = M;
  c.record = x;
  c.product = U;
  c.productList = J;
  c.productsHeader = G;
  c.products = C;
  c.location = Q;
  c.sustainability = n;
  c.missionStatement = O;
  c.fundingStatement = Da;
  c.identifier = wa;
  c.id = oa;
  c.idType = na;
  c.relatedId = E;
  c.relType = H;
  c.relatedIdList = A;
  c.relatedIdsHeader = t;
  c.relatedIds = p;
  c.basicMetadata = Y;
  c.creator = R;
  c.pubyear = N;
  c.title = d;
  c.resourceId = z;
  c.resourceType = y;
  c.resourceTypeGen = k;
  c.resourceTypeDescr = q;
  c.resourceMDSource = r;
  c.institutionName = P;
  c.institutionId = aa;
  c.institutionType = v;
  c.institutionContact = sa;
  c.contactEmail = T;
  c.contactType = K;
  c.institutionPolicy = ea;
  c.institutionPolicies = la;
  c.policy = w;
  c.policyType = I;
  c.applies = f;
  c.superOrg = m;
  c.versioning = a;
  c.format = fa;
  c.formatList = ba;
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
      l = a["Data.Functor"],
      h = a["Metajelo.CSS.Common.Util"],
      b = function b(e) {
    return "metajelo_" + e;
  };

  a = function () {
    var e = l.map(l.functorArray)(b);
    return function (d) {
      return h.cList(e(d));
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
      l = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      h = a["Metajelo.CSS.Web.Util"];
  a = h.mjWebClass(f.versioning);
  h.mjWebClass(f.url);
  var b = h.mjWebClass(f.title),
      e = h.mjWebClass(f.sustainability),
      d = h.mjWebClass(f.superOrg),
      n = h.mjWebClass(f.resourceTypeGen),
      m = h.mjWebClass(f.resourceTypeDescr),
      k = h.mjWebClass(f.resourceType),
      q = h.mjWebClass(f.resourceId),
      y = h.mjWebClass(f.relatedIdsHeader),
      r = h.mjWebClass(f.relatedIdList),
      z = h.mjWebClass(f.relatedId),
      t = h.mjWebClass(f.relType),
      p = h.mjWebClass(f.recordId),
      A = h.mjWebClass(f.record),
      E = h.mjWebClass(f.pubyear),
      H = h.mjWebClass(f.productsHeader),
      x = h.mjWebClass(f.productList),
      D = h.mjWebClass(l.productGroup),
      N = h.mjWebClass(l.productCitation),
      G = h.mjWebClass(f.product),
      C = h.mjWebClass(f.policyType),
      J = h.mjWebClass(f.policy),
      U = h.cList([f.url, f.missionStatement]),
      B = h.mjWebClass(f.institutionType),
      M = h.mjWebClass(f.institutionPolicy),
      I = h.mjWebClass(f.institutionPolicies),
      w = h.mjWebClass(f.institutionName),
      F = h.mjWebClass(f.institutionId),
      O = h.mjWebClass(f.institutionContact),
      Q = h.mjWebClass(f.identifier),
      X = h.cList([f.url, l.idUrl]),
      v = h.mjWebClass(f.idType),
      ea = h.cList([f.url, f.fundingStatement]),
      la = h.mjWebClass(l.errorDisplayBox),
      P = h.mjWebClass(l.errorDisplay),
      aa = h.mjWebClass(f.creator),
      sa = h.mjWebClass(f.contactType),
      wa = h.mjWebClass(f.contactEmail);
  f = h.mjWebClass(f.basicMetadata);
  l = h.mjWebClass(l.appliesInfo);
  c.productGroup = D;
  c.productCitation = N;
  c.appliesInfo = l;
  c.idUrl = X;
  c.errorDisplayBox = la;
  c.errorDisplay = P;
  c.record = A;
  c.recordId = p;
  c.product = G;
  c.productList = x;
  c.productsHeader = H;
  c.sustainability = e;
  c.missionStatement = U;
  c.fundingStatement = ea;
  c.identifier = Q;
  c.idType = v;
  c.relatedId = z;
  c.relType = t;
  c.relatedIdList = r;
  c.relatedIdsHeader = y;
  c.basicMetadata = f;
  c.creator = aa;
  c.pubyear = E;
  c.title = b;
  c.resourceId = q;
  c.resourceType = k;
  c.resourceTypeGen = n;
  c.resourceTypeDescr = m;
  c.institutionName = w;
  c.institutionId = F;
  c.institutionType = B;
  c.institutionContact = O;
  c.contactEmail = wa;
  c.contactType = sa;
  c.institutionPolicy = M;
  c.institutionPolicies = I;
  c.policy = J;
  c.policyType = C;
  c.superOrg = d;
  c.versioning = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var c = a["Metajelo.Types"],
      f = a["Data.Bounded"],
      l = a["Data.Enum"],
      h = a["Data.Eq"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Generic.Rep.Enum"],
      n = a["Data.Generic.Rep.Eq"],
      m = a["Data.Generic.Rep.Ord"],
      k = a["Data.Generic.Rep.Show"],
      q = a["Data.Ord"],
      y = a["Data.Show"],
      r = a["Data.Symbol"],
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
      A = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      E = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      H = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      x = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      D = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      N = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      G = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      C = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      J = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      U = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      B = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      M = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      I = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      w = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      F = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      O = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Q = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      X = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      v = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ea = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      la = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      P = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      aa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      sa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      wa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      na = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      oa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Da = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ba = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      fa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Z = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ca = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      R = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      K = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      T = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Y = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ka = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      pa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      xa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      u = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      V = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ia = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ta = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ma = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ha = function () {
    function g(Ha) {
      this.value0 = Ha;
    }

    g.create = function (Ha) {
      return new g(Ha);
    };

    return g;
  }(),
      qa = function () {
    function g(Ha) {
      this.value0 = Ha;
    }

    g.create = function (Ha) {
      return new g(Ha);
    };

    return g;
  }(),
      za = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      va = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ba = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ia = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      ua = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ga = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ka = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ya = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Wa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Qa = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      cb = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      db = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Za = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      eb = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      Ua = function () {
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
      Ma = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      $a = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      sb = new y.Show(function (g) {
    if (g instanceof za) return "commercial";
    if (g instanceof va) return "non-profit";
    if (g instanceof Ba) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 239, column 1 - line 242, column 37): " + [g.constructor.name]);
  }),
      tb = new y.Show(function (g) {
    return "dataCustodian";
  }),
      Oa = new b.Generic(function (g) {
    if (g instanceof z) return new b.Inl(b.NoArguments.value);
    if (g instanceof t) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (g instanceof p) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (g instanceof A) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (g instanceof E) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (g instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (g instanceof x) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (g instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (g instanceof N) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (g instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (g instanceof C) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (g instanceof J) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (g instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (g instanceof B) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 142, column 1 - line 142, column 76): " + [g.constructor.name]);
  }, function (g) {
    if (g instanceof b.Inl) return z.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inl) return t.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inl) return p.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inl) return A.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inl) return E.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return x.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return N.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return C.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return J.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return U.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return B.value;
    throw Error("Failed pattern match at Metajelo.Types (line 142, column 1 - line 142, column 76): " + [g.constructor.name]);
  }),
      lb = new y.Show(k.genericShow(Oa)(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Audiovisual";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Dataset";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Event";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Image";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "InteractiveResource";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Model";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "PhysicalObject";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "ResourceCollection";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Service";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Software";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Sound";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Text";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Workflow";
  })))(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      Ja = new b.Generic(function (g) {
    if (g instanceof M) return new b.Inl(b.NoArguments.value);
    if (g instanceof I) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (g instanceof w) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (g instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (g instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (g instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (g instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (g instanceof v) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (g instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (g instanceof la) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (g instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (g instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (g instanceof sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (g instanceof wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (g instanceof na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (g instanceof oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (g instanceof Da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (g instanceof ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (g instanceof fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (g instanceof Z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (g instanceof Ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (g instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (g instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (g instanceof T) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (g instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 199, column 1 - line 199, column 62): " + [g.constructor.name]);
  }, function (g) {
    if (g instanceof b.Inl) return M.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inl) return I.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inl) return w.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inl) return F.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return X.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return v.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return la.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return aa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return sa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return wa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return na.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return oa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Da.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ba.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Z.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ca.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return K.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return T.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Y.value;
    throw Error("Failed pattern match at Metajelo.Types (line 199, column 1 - line 199, column 62): " + [g.constructor.name]);
  }),
      ab = new y.Show(k.genericShow(Ja)(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsCitedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Cites";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsSupplementTo";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsContinuedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Continues";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsPartOf";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "HasPart";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsReferencedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "References";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Documents";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsCompiledBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Compiles";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "HasMetadata";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsMetadataFor";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "Reviews";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsReviewedBy";
  })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      Ra = new b.Generic(function (g) {
    if (g instanceof ka) return new b.Inl(b.NoArguments.value);
    if (g instanceof pa) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (g instanceof xa) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (g instanceof u) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (g instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (g instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (g instanceof ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (g instanceof ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 309, column 1 - line 309, column 58): " + [g.constructor.name]);
  }, function (g) {
    if (g instanceof b.Inl) return ka.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inl) return pa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inl) return xa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inl) return u.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ta.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ma.value;
    throw Error("Failed pattern match at Metajelo.Types (line 309, column 1 - line 309, column 58): " + [g.constructor.name]);
  }),
      mb = new y.Show(function (g) {
    return g instanceof ma ? "Terms of Use" : k.genericShow(Ra)(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Access";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Collection";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Data";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Metadata";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Preservation";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Submission";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Quality";
    })))(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(g);
  }),
      Ta = new b.Generic(function (g) {
    if (g instanceof za) return new b.Inl(b.NoArguments.value);
    if (g instanceof va) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (g instanceof Ba) return new b.Inr(new b.Inr(b.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 238, column 1 - line 238, column 68): " + [g.constructor.name]);
  }, function (g) {
    if (g instanceof b.Inl) return za.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inl) return va.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr) return Ba.value;
    throw Error("Failed pattern match at Metajelo.Types (line 238, column 1 - line 238, column 68): " + [g.constructor.name]);
  }),
      Na = new b.Generic(function (g) {
    return b.NoArguments.value;
  }, function (g) {
    return Ia.value;
  }),
      Sa = new b.Generic(function (g) {
    if (g instanceof ua) return new b.Inl(b.NoArguments.value);
    if (g instanceof Ga) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (g instanceof Ka) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (g instanceof Ya) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (g instanceof Wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (g instanceof Qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (g instanceof cb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (g instanceof db) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (g instanceof Za) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (g instanceof eb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (g instanceof Ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (g instanceof fb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (g instanceof gb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (g instanceof hb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (g instanceof ib) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (g instanceof jb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (g instanceof Ma) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (g instanceof $a) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 76, column 1 - line 76, column 66): " + [g.constructor.name]);
  }, function (g) {
    if (g instanceof b.Inl) return ua.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inl) return Ga.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inl) return Ka.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inl) return Ya.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inl) return Wa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inl) return Qa.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return cb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return db.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Za.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return eb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ua.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return fb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return gb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return hb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ib.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return jb.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ma.value;
    if (g instanceof b.Inr && g.value0 instanceof b.Inr && g.value0.value0 instanceof b.Inr && g.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && g.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return $a.value;
    throw Error("Failed pattern match at Metajelo.Types (line 76, column 1 - line 76, column 66): " + [g.constructor.name]);
  }),
      ub = new y.Show(function (g) {
    return g instanceof Ga ? "arXiv" : g instanceof Ka ? "bibcode" : k.genericShow(Sa)(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ARK";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ArXiv";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Bibcode";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "DOI";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "EAN13";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "EISSN";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "Handle";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "IGSN";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ISBN";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ISSN";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "ISTC";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "LISSN";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "LSID";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "PMID";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "PURL";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "UPC";
    })))(k.genericShowSum(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "URL";
    })))(k.genericShowConstructor(k.genericShowArgsNoArguments)(new r.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(g);
  }),
      vb = new h.Eq(n.genericEq(Oa)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))))))))),
      nb = new q.Ord(function () {
    return vb;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(Oa)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))))))))(g)(Ha);
    };
  }),
      ob = new h.Eq(n.genericEq(Ja)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))))))))))))))))))))))))),
      pb = new q.Ord(function () {
    return ob;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(Ja)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments))))))))))))))))))))))))))(g)(Ha);
    };
  }),
      wb = new h.Eq(n.genericEq(Ra)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))),
      qb = new q.Ord(function () {
    return wb;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(Ra)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))(g)(Ha);
    };
  }),
      W = new h.Eq(n.genericEq(Ta)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))),
      da = new q.Ord(function () {
    return W;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(Ta)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments))))(g)(Ha);
    };
  }),
      L = new h.Eq(n.genericEq(Na)(n.genericEqConstructor(n.genericEqNoArguments))),
      S = new q.Ord(function () {
    return L;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(Na)(m.genericOrdConstructor(m.genericOrdNoArguments))(g)(Ha);
    };
  }),
      ja = new h.Eq(n.genericEq(Sa)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))))))))))))),
      ca = new q.Ord(function () {
    return ja;
  }, function (g) {
    return function (Ha) {
      return m.genericCompare(Sa)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))))))))))))(g)(Ha);
    };
  }),
      ra = new l.Enum(function () {
    return nb;
  }, d.genericPred(Oa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Oa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      ya = new l.Enum(function () {
    return pb;
  }, d.genericPred(Ja)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Ja)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      Aa = new l.Enum(function () {
    return qb;
  }, d.genericPred(Ra)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Ra)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      La = new l.Enum(function () {
    return da;
  }, d.genericPred(Ta)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Ta)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      Ea = new l.Enum(function () {
    return S;
  }, d.genericPred(Na)(d.genericEnumConstructor(d.genericEnumNoArguments)), d.genericSucc(Na)(d.genericEnumConstructor(d.genericEnumNoArguments))),
      Fa = new l.Enum(function () {
    return ca;
  }, d.genericPred(Sa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Sa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      Pa = new f.Bounded(function () {
    return nb;
  }, e.genericBottom(Oa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Oa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))),
      rb = new f.Bounded(function () {
    return pb;
  }, e.genericBottom(Ja)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Ja)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))))))))))))))))))))))))),
      Va = new f.Bounded(function () {
    return qb;
  }, e.genericBottom(Ra)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Ra)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))),
      Xa = new l.SmallBounded(function () {
    return Va;
  }),
      kb = new f.Bounded(function () {
    return da;
  }, e.genericBottom(Ta)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Ta)(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))),
      bb = new f.Bounded(function () {
    return S;
  }, e.genericBottom(Na)(e.genericBottomConstructor(e.genericBottomNoArguments)), e.genericTop(Na)(e.genericTopConstructor(e.genericTopNoArguments))),
      xb = new l.SmallBounded(function () {
    return bb;
  }),
      yb = new f.Bounded(function () {
    return ca;
  }, e.genericBottom(Sa)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Sa)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))))))),
      zb = new l.BoundedEnum(function () {
    return Pa;
  }, function () {
    return ra;
  }, d.genericCardinality(Oa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericFromEnum(Oa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericToEnum(Oa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))),
      Ab = new l.BoundedEnum(function () {
    return rb;
  }, function () {
    return ya;
  }, d.genericCardinality(Ja)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericFromEnum(Ja)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericToEnum(Ja)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Bb = new l.BoundedEnum(function () {
    return Va;
  }, function () {
    return Aa;
  }, d.genericCardinality(Ra)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericFromEnum(Ra)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericToEnum(Ra)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))),
      Cb = new l.BoundedEnum(function () {
    return kb;
  }, function () {
    return La;
  }, d.genericCardinality(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericFromEnum(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericToEnum(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))),
      Db = new l.BoundedEnum(function () {
    return bb;
  }, function () {
    return Ea;
  }, d.genericCardinality(Na)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericFromEnum(Na)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericToEnum(Na)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))),
      Eb = new l.BoundedEnum(function () {
    return yb;
  }, function () {
    return Fa;
  }, d.genericCardinality(Sa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericFromEnum(Sa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericToEnum(Sa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))));

  c.ARK = ua;
  c.ArXiv = Ga;
  c.Bibcode = Ka;
  c.DOI = Ya;
  c.EAN13 = Wa;
  c.EISSN = Qa;
  c.Handle = cb;
  c.IGSN = db;
  c.ISBN = Za;
  c.ISSN = eb;
  c.ISTC = Ua;
  c.LISSN = fb;
  c.LSID = gb;
  c.PMID = hb;
  c.PURL = ib;
  c.UPC = jb;
  c.URL = Ma;
  c.URN = $a;
  c.Audiovisual = z;
  c.Dataset = t;
  c.Event = p;
  c.Image = A;
  c.InteractiveResource = E;
  c.Model = H;
  c.PhysicalObject = x;
  c.ResourceCollection = D;
  c.Service = N;
  c.Software = G;
  c.Sound = C;
  c.Text = J;
  c.Workflow = U;
  c.Other = B;
  c.IsCitedBy = M;
  c.Cites = I;
  c.IsSupplementTo = w;
  c.IsSupplementedBy = F;
  c.IsContinuedBy = O;
  c.Continues = Q;
  c.IsNewVersionOf = X;
  c.IsPreviousVersionOf = v;
  c.IsPartOf = ea;
  c.HasPart = la;
  c.IsReferencedBy = P;
  c.References = aa;
  c.IsDocumentedBy = sa;
  c.Documents = wa;
  c.IsCompiledBy = na;
  c.Compiles = oa;
  c.IsVariantFormOf = Da;
  c.IsOriginalFormOf = ba;
  c.IsIdenticalTo = fa;
  c.HasMetadata = Z;
  c.IsMetadataFor = Ca;
  c.Reviews = R;
  c.IsReviewedBy = K;
  c.IsDerivedFrom = T;
  c.IsSourceOf = Y;
  c.Commercial = za;
  c.NonProfit = va;
  c.Governmental = Ba;
  c.DataCustodian = Ia;
  c.Access = ka;
  c.Collection = pa;
  c.Data = xa;
  c.Metadata = u;
  c.Preservation = V;
  c.Submission = ia;
  c.Quality = ta;
  c.TermsOfUse = ma;
  c.FreeTextPolicy = ha;
  c.RefPolicy = qa;
  c.showIdentifierType = ub;
  c.boundedEnumIdentifierType = Eb;
  c.showResourceTypeGeneral = lb;
  c.boundedEnumResourceTypeGeneral = zb;
  c.showRelationType = ab;
  c.boundedEnumRelationType = Ab;
  c.showInstitutionType = sb;
  c.boundedEnumInstitutionType = Cb;
  c.showInstitutionContactType = tb;
  c.boundedEnumInstitutionContactType = Db;
  c.smallBoundedInstitutionContactType = xb;
  c.showPolicyType = mb;
  c.boundedEnumPolicyType = Bb;
  c.smallBoundedPolicyType = Xa;
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (c) {
    return function (f) {
      return function (l) {
        return function () {
          return l.parseFromString(f, c);
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
      return function (l) {
        return function () {
          return l.getElementsByTagNameNS(c, f);
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
      return function (l) {
        return function () {
          return l.createElementNS(c, f);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (c, f, l, h) {
    if ("undefined" !== typeof window) return l = window[l], null != l && h instanceof l ? f(h) : c;

    for (var b = h; null != b;) {
      b = Object.getPrototypeOf(b);
      var e = b.constructor.name;
      if (e === l) return f(h);
      if ("Object" === e) break;
    }

    return c;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var c = a["Web.Internal.FFI"],
      f = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (l) {
    return function (h) {
      return c._unsafeReadProtoTagged(f.Nothing.value, f.Just.create, l, h);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var c = a["Web.DOM.Document"],
      f = a["Web.DOM.Document"],
      l = a["Data.Functor"],
      h = a["Data.Nullable"],
      b = a.Effect,
      e = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var d = function () {
    var n = l.map(b.functorEffect)(h.toMaybe);
    return function (m) {
      return n(f._documentElement(m));
    };
  }();

  c.fromNode = a;
  c.toNonElementParentNode = e;
  c.documentElement = d;

  c.getElementsByTagNameNS = function (n) {
    return f._getElementsByTagNameNS(h.toNullable(n));
  };

  c.createElementNS = function (n) {
    return f._createElementNS(h.toNullable(n));
  };

  c.getElementsByTagName = f.getElementsByTagName;
  c.createElement = f.createElement;
})(PS);

(function (a) {
  var c = function c(f) {
    return function (l) {
      return l[f];
    };
  };

  a._prefix = c("prefix");
  a.localName = c("localName");
  a.tagName = c("tagName");

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
  var c = a["Web.DOM.Element"],
      f = a["Web.DOM.Element"],
      l = a["Data.Functor"],
      h = a["Data.Nullable"],
      b = a.Effect,
      e = a["Unsafe.Coerce"],
      d = e.unsafeCoerce;
  e = e.unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  c.fromNode = a;
  c.toNode = e;
  c.toParentNode = d;

  c.prefix = function (n) {
    return h.toMaybe(f._prefix(n));
  };

  c.getAttribute = function (n) {
    var m = l.map(b.functorEffect)(h.toMaybe),
        k = f._getAttribute(n);

    return function (q) {
      return m(k(q));
    };
  };

  c.localName = f.localName;
  c.tagName = f.tagName;
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
      l = a["Data.Functor"],
      h = a["Data.Nullable"],
      b = a.Effect;

  c.item = function (e) {
    var d = l.map(b.functorEffect)(h.toMaybe),
        n = f._item(e);

    return function (m) {
      return d(n(m));
    };
  };

  c.toArray = f.toArray;
})(PS);

(function (a) {
  var c = function c(f) {
    return function (l) {
      return function () {
        return l[f];
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
  var c = a["Web.DOM.Node"],
      f = a["Web.DOM.Node"],
      l = a["Data.Functor"],
      h = a["Data.Nullable"],
      b = a.Effect;

  a = function () {
    var e = l.map(b.functorEffect)(h.toMaybe);
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
      l = a["Control.Applicative"],
      h = a["Control.Bind"],
      b = a["Data.Array"],
      e = a["Data.Either"],
      d = a["Data.Functor"],
      n = a["Data.Maybe"],
      m = a.Effect,
      k = a["Web.DOM.Document"],
      q = a["Web.DOM.Element"],
      y = a["Web.DOM.HTMLCollection"],
      r = a["Web.DOM.Node"],
      z = function z(p) {
    return function (A) {
      if (p instanceof n.Nothing) return new e.Right(A);
      if (p instanceof n.Just) return new e.Left(p.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [p.constructor.name]);
    };
  },
      t = function t(p) {
    return function () {
      var A = h.join(m.bindEffect)(d.map(m.functorEffect)(y.toArray)(k.getElementsByTagName("parsererror")(p)))();
      A = b.head(A);
      A = d.map(n.functorMaybe)(q.toNode)(A);
      if (A instanceof n.Nothing) A = l.pure(m.applicativeEffect)(n.Nothing.value);else if (A instanceof n.Just) A = d.map(m.functorEffect)(n.Just.create)(r.textContent(A.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [A.constructor.name]);
      return A();
    };
  };

  c.parseXMLFromString = function (p) {
    return function (A) {
      return function () {
        var E = f.parseFromString("application/xml")(p)(A)(),
            H = t(E)();
        return z(H)(E);
      };
    };
  };

  c.makeDOMParser = f.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (c) {
    return function (f) {
      return function (l) {
        return function (h) {
          return function (b) {
            return function (e) {
              return function () {
                return e.evaluate(c, f, l, h, b);
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
      d = new l.Eq(function (n) {
    return function (m) {
      return n === m;
    };
  });

  c.res2SnapType = function (n) {
    return l.eq(d)(n)(f.unordered_node_snapshot_type) ? new h.Just(b.value) : l.eq(d)(n)(f.ordered_node_snapshot_type) ? new h.Just(e.value) : h.Nothing.value;
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
      l = a["Control.Applicative"],
      h = a["Data.Array"],
      b = a["Data.Functor"],
      e = a["Data.Int"],
      d = a["Data.Maybe"],
      n = a["Data.Monoid"],
      m = a["Data.Natural"],
      k = a["Data.Nullable"],
      q = a["Data.Traversable"],
      y = a.Effect,
      r = a["Web.DOM.Document"],
      z = a["Web.DOM.Document.XPath.ResultType"],
      t = a["Web.DOM.Element"],
      p = a["Web.DOM.Node"],
      A = function () {
    var H = b.map(y.functorEffect)(function (x) {
      return m.intToNat(e.round(x));
    });
    return function (x) {
      return H(f.snapshotLengthInternal(x));
    };
  }(),
      E = function E(H) {
    return function (x) {
      return b.map(y.functorEffect)(k.toMaybe)(f.snapshotItemInternal(H)(e.toNumber(m.natToInt(x))));
    };
  };

  a = function () {
    var H = b.map(y.functorEffect)(k.toMaybe);
    return function (x) {
      return H(f.singleNodeValueInternal(x));
    };
  }();

  c.evaluate = function (H) {
    return function (x) {
      return function (D) {
        return function (N) {
          return function (G) {
            return function (C) {
              return f.evaluateInternal(H)(x)(k.toNullable(D))(N)(k.toNullable(G))(C);
            };
          };
        };
      };
    };
  };

  c.evaluateNumber = function (H) {
    return function (x) {
      return function (D) {
        return function (N) {
          return function (G) {
            return function () {
              var C = f.evaluateInternal(H)(x)(k.toNullable(D))(z.number_type)(k.toNullable(N))(G)();
              return f.numberValue(C)();
            };
          };
        };
      };
    };
  };

  c.evaluateString = function (H) {
    return function (x) {
      return function (D) {
        return function (N) {
          return function (G) {
            return function () {
              var C = f.evaluateInternal(H)(x)(k.toNullable(D))(z.string_type)(k.toNullable(N))(G)();
              return f.stringValue(C)();
            };
          };
        };
      };
    };
  };

  c.evaluateBoolean = function (H) {
    return function (x) {
      return function (D) {
        return function (N) {
          return function (G) {
            return function () {
              var C = f.evaluateInternal(H)(x)(k.toNullable(D))(z.boolean_type)(k.toNullable(N))(G)();
              return f.booleanValue(C)();
            };
          };
        };
      };
    };
  };

  c.singleNodeValue = a;

  c.snapshot = function (H) {
    var x = z.res2SnapType(f.resultType(H)),
        D = E(H);
    x = b.map(d.functorMaybe)(function (N) {
      return function () {
        var G = A(H)();
        G = m.natToInt(G);
        G = b.map(b.functorArray)(m.intToNat)(h.range(0)(G - 1 | 0));
        G = q.sequence(q.traversableArray)(y.applicativeEffect)(b.map(b.functorArray)(D)(G))();
        return h.catMaybes(G);
      };
    })(x);
    if (x instanceof d.Nothing) return l.pure(y.applicativeEffect)(n.mempty(n.monoidArray));
    if (x instanceof d.Just) return x.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [x.constructor.name]);
  };

  c.lookupNamespaceURI = function (H) {
    return function (x) {
      return k.toMaybe(f.lookupNamespaceURIInternal(H)(x));
    };
  };

  c.defaultNSResolver = function (H) {
    return function (x) {
      var D = function D(N) {
        return function () {
          var G = r.documentElement(N)();
          if (G instanceof d.Nothing) return H;
          if (G instanceof d.Just) return t.toNode(G.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [G.constructor.name]);
        };
      };

      return function () {
        var N = p.ownerDocument(H)(),
            G = function () {
          if (N instanceof d.Nothing) {
            var C = r.fromNode(H);
            if (C instanceof d.Nothing) return H;
            if (C instanceof d.Just) return D(C.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [C.constructor.name]);
          }

          if (N instanceof d.Just) return D(N.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [N.constructor.name]);
        }();

        return f.createNSResolver(G)(x);
      };
    };
  };

  c.customNSResolver = f.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var c = a["Metajelo.XPaths"],
      f = a["Control.Applicative"],
      l = a["Control.Bind"],
      h = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      e = a["Data.Either"],
      d = a["Data.Foldable"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      k = a["Data.String.Common"],
      q = a["Data.String.NonEmpty.Internal"],
      y = a["Data.Traversable"],
      r = a["Data.XPath"],
      z = a.Effect,
      t = a["Effect.Exception"],
      p = a["Web.DOM.DOMParser"],
      A = a["Web.DOM.Document"],
      E = a["Web.DOM.Document.XPath"],
      H = a["Web.DOM.Document.XPath.ResultType"],
      x = a["Web.DOM.Element"],
      D = a["Web.DOM.HTMLCollection"],
      N = r.pathAppendNSx(r.stringXPath)(r.root(r.stringXPath))("record");
  a = r.pathAppendNSx(r.stringXPath)(N)("relatedIdentifier");
  var G = r.pathAppendNSx(r.stringXPath)(N)("supplementaryProducts");
  G = r.pathAppendNSx(r.stringXPath)(G)("supplementaryProduct");

  var C = function C(F) {
    return function (O) {
      return {
        any: function any(Q) {
          return function (X) {
            return function (v) {
              return E.evaluate(X)(Q)(O)(v)(m.Nothing.value)(F);
            };
          };
        },
        num: function num(Q) {
          return function (X) {
            return E.evaluateNumber(X)(Q)(O)(m.Nothing.value)(F);
          };
        },
        str: function str(Q) {
          return function (X) {
            return E.evaluateString(X)(Q)(O)(m.Nothing.value)(F);
          };
        },
        bool: function bool(Q) {
          return function (X) {
            return E.evaluateBoolean(X)(Q)(O)(m.Nothing.value)(F);
          };
        },
        nodeMay: function nodeMay(Q) {
          return function (X) {
            return l.bind(z.bindEffect)(E.evaluate(X)(Q)(O)(H.any_unordered_node_type)(m.Nothing.value)(F))(E.singleNodeValue);
          };
        }
      };
    };
  },
      J = h["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      U = function U(F) {
    var O = function O(Q) {
      return function () {
        var X = A.getElementsByTagNameNS(new m.Just(Q))("record")(F)();
        return D.item(0)(X)();
      };
    };

    return function () {
      var Q = A.getElementsByTagName("record")(F)();
      Q = D.item(0)(Q)();
      if (Q instanceof m.Nothing) Q = y.sequence(b.traversableNonEmptyArray)(z.applicativeEffect)(n.map(b.functorNonEmptyArray)(O)(J))(), Q = l.join(m.bindMaybe)(d.find(b.foldableNonEmptyArray)(m.isJust)(Q));else if (Q instanceof m.Just) Q = new m.Just(Q.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 277, column 16 - line 281, column 38): " + [Q.constructor.name]);
      return n.map(m.functorMaybe)(x.toNode)(Q);
    };
  };

  h = r.pathAppendNSx(r.stringXPath)(N)("lastModified");

  var B = r.pathAppendNSx(r.stringXPath)(N)("identifier"),
      M = r.pathAppend(r.stringXPath)(B)(r.at(r.stringXPath)("identifierType")),
      I = function I(F) {
    var O = function O(Q) {
      return m.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(Q);
    };

    if (F instanceof m.Nothing) return f.pure(z.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (F instanceof m.Just) return n.map(z.functorEffect)(O)(x.getAttribute("xmlns")(F.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 185, column 3 - line 187, column 59): " + [F.constructor.name]);
  },
      w = function w(F) {
    return function (O) {
      var Q = function Q(X) {
        return function (v) {
          return function (ea) {
            ea = E.lookupNamespaceURI(X)(ea);
            if (ea instanceof m.Nothing) return v;
            if (ea instanceof m.Just) return ea.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 202, column 39 - line 204, column 20): " + [ea.constructor.name]);
          };
        };
      };

      return function () {
        var X = E.defaultNSResolver(F)(O)(),
            v = x.fromNode(F);
        v = I(v)();
        return E.customNSResolver(Q(X)(v));
      };
    };
  };

  r = r.pathAppendNSx(r.stringXPath)(N)("date");
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
  c.idTypeRootAP = M;
  c.idRootP = B;
  c.dateRootP = r;
  c.lastModRootP = h;
  c.relIdRootP = a;
  c.sProdRootP = G;

  c.getDefaultParseEnv = function (F) {
    return function () {
      var O = p.makeDOMParser();
      O = p.parseXMLFromString(F)(O)();
      if (O instanceof e.Left) O = t["throw"]("XML parsing error: " + O.value0)();else if (O instanceof e.Right) O = O.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 245, column 13 - line 247, column 26): " + [O.constructor.name]);
      var Q = U(O)();
      if (Q instanceof m.Nothing) Q = t["throw"]("Could not find <record> node!")();else if (Q instanceof m.Just) Q = Q.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 249, column 14 - line 251, column 23): " + [Q.constructor.name]);
      var X = x.fromNode(Q);
      if (X instanceof m.Nothing) X = t["throw"]("<record> node could not be cast to an element!")();else if (X instanceof m.Just) X = X.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 252, column 14 - line 254, column 23): " + [X.constructor.name]);
      var v = I(new m.Just(X))(),
          ea = w(Q)(O)();
      ea = C(O)(new m.Just(ea));
      return {
        doc: O,
        ns: v,
        recNode: Q,
        recElem: X,
        xeval: ea,
        xevalRoot: {
          any: ea.any(Q),
          num: ea.num(Q),
          str: ea.str(Q),
          bool: ea.bool(Q),
          nodeMay: ea.nodeMay(Q)
        }
      };
    };
  };

  c.unsafeSingleNodeValue = function (F) {
    return function (O) {
      return function (Q) {
        return function () {
          var X = F.xeval.nodeMay(O)(Q)();
          if (X instanceof m.Just) return X.value0;
          if (X instanceof m.Nothing) return t["throw"]("Couldn't find required node at: " + Q)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 294, column 3 - line 296, column 40): " + [X.constructor.name]);
        };
      };
    };
  };

  c.readNonEmptyString = function (F) {
    return function (O) {
      O = q.fromString(k.trim(O));
      if (O instanceof m.Nothing) return e.Left.create("Empty string found for " + F);
      if (O instanceof m.Just) return new e.Right(O.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 303, column 3 - line 305, column 26): " + [O.constructor.name]);
    };
  };

  c.rightOrThrow = function (F) {
    if (F instanceof e.Right) return f.pure(z.applicativeEffect)(F.value0);
    if (F instanceof e.Left) return t["throw"](F.value0);
    throw Error("Failed pattern match at Metajelo.XPaths (line 308, column 19 - line 310, column 24): " + [F.constructor.name]);
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var c = a["Text.Parsing.StringParser"],
      f = a["Control.Alt"],
      l = a["Control.Alternative"],
      h = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Monad"],
      n = a["Control.Monad.Rec.Class"],
      m = a["Control.Plus"],
      k = a["Data.Bifunctor"],
      q = a["Data.Boolean"],
      y = a["Data.Either"],
      r = a["Data.Functor"];
  a = a["Data.Show"];

  var z = function () {
    function G(C) {
      this.value0 = C;
    }

    G.create = function (C) {
      return new G(C);
    };

    return G;
  }();

  a = new a.Show(function (G) {
    return G.value0;
  });

  var t = new r.Functor(function (G) {
    return function (C) {
      var J = r.map(y.functorEither)(function (U) {
        return {
          result: G(U.result),
          suffix: U.suffix
        };
      });
      return function (U) {
        return J(C(U));
      };
    };
  }),
      p = function p(G) {
    return function (C) {
      return new y.Left({
        pos: C.pos,
        error: new z(G)
      });
    };
  },
      A = new b.Apply(function () {
    return t;
  }, function (G) {
    return function (C) {
      return function (J) {
        return e.bind(y.bindEither)(G(J))(function (U) {
          return e.bind(y.bindEither)(C(U.suffix))(function (B) {
            return h.pure(y.applicativeEither)({
              result: U.result(B.result),
              suffix: B.suffix
            });
          });
        });
      };
    };
  }),
      E = new e.Bind(function () {
    return A;
  }, function (G) {
    return function (C) {
      return function (J) {
        return e.bind(y.bindEither)(G(J))(function (U) {
          return C(U.result)(U.suffix);
        });
      };
    };
  }),
      H = new h.Applicative(function () {
    return A;
  }, function (G) {
    return function (C) {
      return new y.Right({
        result: G,
        suffix: C
      });
    };
  }),
      x = new d.Monad(function () {
    return H;
  }, function () {
    return E;
  });

  b = new n.MonadRec(function () {
    return x;
  }, function (G) {
    return function (C) {
      var J = function J(U) {
        if (U.result instanceof n.Loop) return new n.Loop({
          state: U.result.value0,
          str: U.suffix
        });
        if (U.result instanceof n.Done) return new n.Done({
          result: U.result.value0,
          suffix: U.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [U.constructor.name]);
      };

      return function (U) {
        return n.tailRecM(n.monadRecEither)(function (B) {
          return r.map(y.functorEither)(J)(G(B.state)(B.str));
        })({
          state: C,
          str: U
        });
      };
    };
  });
  var D = new f.Alt(function () {
    return t;
  }, function (G) {
    return function (C) {
      return function (J) {
        var U = G(J);

        if (U instanceof y.Left) {
          if (J.pos === U.value0.pos) return C(J);
          if (q.otherwise) return new y.Left({
            error: U.value0.error,
            pos: U.value0.pos
          });
        }

        return U;
      };
    };
  }),
      N = new m.Plus(function () {
    return D;
  }, p("No alternative"));
  f = new l.Alternative(function () {
    return H;
  }, function () {
    return N;
  });
  c.ParseError = z;

  c.runParser = function (G) {
    return function (C) {
      return k.bimap(y.bifunctorEither)(function (J) {
        return J.error;
      })(function (J) {
        return J.result;
      })(G({
        str: C,
        pos: 0
      }));
    };
  };

  c.fail = p;

  c["try"] = function (G) {
    return function (C) {
      return k.lmap(y.bifunctorEither)(function (J) {
        return {
          pos: C.pos,
          error: J.error
        };
      })(G(C));
    };
  };

  c.showParseError = a;
  c.functorParser = t;
  c.applyParser = A;
  c.applicativeParser = H;
  c.altParser = D;
  c.alternativeParser = f;
  c.bindParser = E;
  c.monadRecParser = b;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var c = a["Text.Parsing.StringParser.Combinators"],
      f = a["Control.Alt"],
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Functor"],
      d = a["Data.NonEmpty"],
      n = a["Data.Unit"],
      m = a["Text.Parsing.StringParser"],
      k = a["Data.List"].manyRec(m.monadRecParser)(m.alternativeParser),
      q = function q(y) {
    return function (r) {
      return new d.NonEmpty(y, r);
    };
  };

  c.many = k;

  c.many1 = function (y) {
    return h.apply(m.applyParser)(e.map(m.functorParser)(q)(y))(k(y));
  };

  c.withError = function (y) {
    return function (r) {
      return f.alt(m.altParser)(y)(m.fail(r));
    };
  };

  c.optional = function (y) {
    return f.alt(m.altParser)(b.bind(m.bindParser)(y)(function (r) {
      return l.pure(m.applicativeParser)(n.unit);
    }))(l.pure(m.applicativeParser)(n.unit));
  };

  c.sepBy1 = function (y) {
    return function (r) {
      return b.bind(m.bindParser)(y)(function (z) {
        return b.bind(m.bindParser)(k(h.applySecond(m.applyParser)(r)(y)))(function (t) {
          return l.pure(m.applicativeParser)(q(z)(t));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var c = a["Text.Parsing.StringParser.CodePoints"],
      f = a["Control.Applicative"],
      l = a["Control.Bind"],
      h = a["Data.Char"],
      b = a["Data.Either"],
      e = a["Data.Enum"],
      d = a["Data.Maybe"],
      n = a["Data.Show"],
      m = a["Data.String.CodePoints"],
      k = a["Data.Unit"],
      q = a["Text.Parsing.StringParser"],
      y = a["Text.Parsing.StringParser.Combinators"],
      r = function () {
    var t = function () {
      var p = e.fromEnum(m.boundedEnumCodePoint);
      return function (A) {
        return h.fromCharCode(p(A));
      };
    }();

    return function (p) {
      var A = m.codePointAt(p.pos)(p.str);

      if (A instanceof d.Just) {
        var E = t(A.value0);
        if (E instanceof d.Just) return new b.Right({
          result: E.value0,
          suffix: {
            str: p.str,
            pos: p.pos + 1 | 0
          }
        });
        if (E instanceof d.Nothing) return new b.Left({
          pos: p.pos,
          error: q.ParseError.create("CodePoint " + (n.show(m.showCodePoint)(A.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [E.constructor.name]);
      }

      if (A instanceof d.Nothing) return new b.Left({
        pos: p.pos,
        error: new q.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [A.constructor.name]);
    };
  }(),
      z = function z(t) {
    return q["try"](l.bind(q.bindParser)(r)(function (p) {
      return t(p) ? f.pure(q.applicativeParser)(p) : q.fail("Character " + (n.show(n.showChar)(p) + " did not satisfy predicate"));
    }));
  };

  c.eof = function (t) {
    return t.pos < m.length(t.str) ? new b.Left({
      pos: t.pos,
      error: new q.ParseError("Expected EOF")
    }) : new b.Right({
      result: k.unit,
      suffix: t
    });
  };

  c.satisfy = z;

  c["char"] = function (t) {
    return y.withError(z(function (p) {
      return p === t;
    }))("Could not match character " + n.show(n.showChar)(t));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var c = a["Text.Email.Parser"],
      f = a["Control.Alt"],
      l = a["Control.Applicative"],
      h = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Char"],
      d = a["Data.Foldable"],
      n = a["Data.Functor"],
      m = a["Data.List.Types"],
      k = a["Data.Maybe"],
      q = a["Data.Monoid"],
      y = a["Data.String.CodeUnits"],
      r = a["Data.String.Pattern"],
      z = a["Data.Unit"],
      t = a["Text.Parsing.StringParser"],
      p = a["Text.Parsing.StringParser.CodePoints"],
      A = a["Text.Parsing.StringParser.Combinators"],
      E = function (ba) {
    var fa = k.fromJust();
    return function (Z) {
      return fa(e.fromCharCode(Z));
    };
  }(),
      H = function H(ba) {
    return n.map(t.functorParser)(function () {
      var fa = d.fold(m.foldableNonEmptyList)(q.monoidString),
          Z = n.map(m.functorNonEmptyList)(y.singleton);
      return function (Ca) {
        return fa(Z(Ca));
      };
    }())(A.many1(p.satisfy(ba)));
  },
      x = function x(ba) {
    return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(ba))(function () {
      return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(D(ba)))(function () {
        return l.pure(t.applicativeParser)(z.unit);
      });
    });
  },
      D = function D(ba) {
    return f.alt(t.altParser)(x(ba))(l.pure(t.applicativeParser)(z.unit));
  },
      N = function N(ba) {
    return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p.satisfy(ba)))(function () {
      return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(D(p.satisfy(ba))))(function () {
        return l.pure(t.applicativeParser)(z.unit);
      });
    });
  },
      G = p["char"](E(0)),
      C = p["char"]("\n");

  a = function a(ba) {
    return " " === ba || "\t" === ba;
  };

  var J = p.satisfy(a),
      U = N(a),
      B = function B(ba) {
    return function (fa) {
      return function (Z) {
        return Z >= ba && Z <= fa;
      };
    };
  };

  a = B(E(33))(E(126));

  var M = p.satisfy(a),
      I = function I(ba) {
    return function (fa) {
      return y.contains(r.Pattern(y.singleton(fa)))(ba);
    };
  },
      w = function w(ba) {
    return B(E(1))(E(8))(ba) || B(E(14))(E(31))(ba) || I("\x0B\f\x7F")(ba);
  },
      F = function F(ba) {
    return B(E(33))(E(39))(ba) || B(E(42))(E(91))(ba) || B(E(93))(E(126))(ba) || w(ba);
  },
      O = function O(ba) {
    return B(E(33))(E(90))(ba) || B(E(94))(E(126))(ba) || w(ba);
  },
      Q = p.satisfy(w),
      X = p["char"]("\r"),
      v = n["void"](t.functorParser)(h.applySecond(t.applyParser)(X)(C)),
      ea = function () {
    var ba = x(h.applySecond(t.applyParser)(v)(U)),
        fa = h.applySecond(t.applyParser)(U)(A.optional(h.applySecond(t.applyParser)(v)(U)));
    return f.alt(t.altParser)(fa)(ba);
  }(),
      la = function () {
    var ba = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("\\")))(function () {
      return f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(M)(J))(C))(X))(Q))(G);
    });
    return b.bind(t.bindParser)(ba)(function (fa) {
      return l.pure(t.applicativeParser)("\\" + y.singleton(fa));
    });
  }(),
      P = f.alt(t.altParser)(H(function (ba) {
    return I(y.singleton(E(33)))(ba) || B(E(35))(E(91))(ba) || B(E(93))(E(126))(ba) || w(ba);
  }))(la),
      aa = function () {
    var ba = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]('"')))(function () {
      return b.bind(t.bindParser)(A.many(h.applySecond(t.applyParser)(A.optional(ea))(P)))(function (fa) {
        return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(A.optional(ea)))(function () {
          return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]('"')))(function () {
            return l.pure(t.applicativeParser)(fa);
          });
        });
      });
    });
    return n.map(t.functorParser)(function (fa) {
      return '"' + (d.fold(m.foldableList)(q.monoidString)(fa) + '"');
    })(ba);
  }(),
      sa = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("(")))(function () {
    return b.discard(b.discardUnit)(t.bindParser)(D(f.alt(t.altParser)(f.alt(t.altParser)(f.alt(t.altParser)(N(F))(n["void"](t.functorParser)(la)))(sa))(ea)))(function () {
      return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"](")")))(function () {
        return l.pure(t.applicativeParser)(z.unit);
      });
    });
  }),
      wa = D(f.alt(t.altParser)(sa)(ea));

  a = b.discard(b.discardUnit)(t.bindParser)(A.optional(wa))(function () {
    return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("[")))(function () {
      return b.bind(t.bindParser)(A.many(h.applySecond(t.applyParser)(A.optional(ea))(H(O))))(function (ba) {
        return b.discard(b.discardUnit)(t.bindParser)(A.optional(ea))(function () {
          return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(p["char"]("]")))(function () {
            return b.discard(b.discardUnit)(t.bindParser)(A.optional(wa))(function () {
              return l.pure(t.applicativeParser)("[" + (d.fold(m.foldableList)(q.monoidString)(ba) + "]"));
            });
          });
        });
      });
    });
  });

  var na = function () {
    return H(function (ba) {
      return "0" <= ba && "9" >= ba || "a" <= ba && "z" >= ba || "A" <= ba && "Z" >= ba || I("!#$%&'*+/=?^_`{|}~-")(ba);
    });
  }(),
      oa = function () {
    var ba = b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(A.optional(wa)))(function () {
      return b.bind(t.bindParser)(f.alt(t.altParser)(na)(aa))(function (fa) {
        return b.discard(b.discardUnit)(t.bindParser)(n["void"](t.functorParser)(A.optional(wa)))(function () {
          return l.pure(t.applicativeParser)(fa);
        });
      });
    });
    ba = A.sepBy1(ba)(p["char"]("."));
    return n.map(t.functorParser)(d.intercalate(m.foldableNonEmptyList)(q.monoidString)("."))(ba);
  }(),
      Da = f.alt(t.altParser)(oa)(a);

  a = b.bind(t.bindParser)(oa)(function (ba) {
    return b.bind(t.bindParser)(p["char"]("@"))(function () {
      return b.bind(t.bindParser)(Da)(function (fa) {
        return b.bind(t.bindParser)(p.eof)(function () {
          return l.pure(t.applicativeParser)({
            localPart: ba,
            domainPart: fa
          });
        });
      });
    });
  });
  c.addrSpec = a;

  c.toString = function (ba) {
    return ba.localPart + ("@" + ba.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var c = a["Text.Email.Validate"],
      f = a["Data.Bifunctor"],
      l = a["Data.Either"],
      h = a["Data.Show"],
      b = a["Text.Email.Parser"],
      e = a["Text.Parsing.StringParser"];

  a = function () {
    var d = f.lmap(l.bifunctorEither)(h.show(e.showParseError));
    return function (n) {
      n = e.runParser(b.addrSpec)(n);
      return d(n);
    };
  }();

  c.validate = a;
})(PS);

(function (a) {
  a._validateURL = function (c) {
    return function (f) {
      if (!f || !/^https?:\/\//.test(f)) return "Unknown or missing protocol format in url: " + f;
      var l = document.createElement("a");
      l.href = f;

      if (c) {
        if (l.username) return "URL " + f + " contains a username: " + l.username;
        if (l.password) return "URL " + f + " contains a password: " + l.password;
      }

      return /\.[^0-9.]/.test(l.hostname) ? /(\s|^\.|\.$)/.test(l.hostname) ? "Hostname '" + l.href + "' contains whitespace in " + f : l.href.toLowerCase().replace(/\/+$/g, "") !== f.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + f + " doesn't match parsed href " + l.href : "SUCCESS" : "Invalid hostname '" + l.href + "' in " + f;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};

  var c = a["Text.URL.Validate"],
      f = a["Text.URL.Validate"],
      l = a["Data.Either"],
      h = a["Data.Maybe"],
      b = a["Data.String.NonEmpty.Internal"],
      e = function e(d) {
    return function (n) {
      var m = "SUCCESS" === n ? !0 : !1;

      if (m) {
        n = b.fromString(d);
        if (n instanceof h.Just) return new l.Right(n.value0);
        if (n instanceof h.Nothing) return new l.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [n.constructor.name]);
      }

      if (!m) return new l.Left(n);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [m.constructor.name]);
    };
  };

  c.parsePublicURL = function (d) {
    var n = f._validateURL(!0)(d);

    return e(d)(n);
  };

  c.urlToNEString = function (d) {
    return d;
  };

  c.urlToString = function (d) {
    return b.toString(d);
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
      l = a["Control.Apply"],
      h = a["Control.Bind"],
      b = a["Data.Array"],
      e = a["Data.Array.NonEmpty"],
      d = a["Data.Bounded"],
      n = a["Data.DateTime"],
      m = a["Data.Either"],
      k = a["Data.Functor"],
      q = a["Data.Int"],
      y = a["Data.JSDate"],
      r = a["Data.Maybe"],
      z = a["Data.Natural"],
      t = a["Data.String.CodePoints"],
      p = a["Data.String.CodeUnits"],
      A = a["Data.String.NonEmpty.Internal"],
      E = a["Data.String.Utils"],
      H = a["Data.Traversable"],
      x = a["Data.XPath"],
      D = a.Effect,
      N = a["Effect.Exception"],
      G = a.Global,
      C = a["Metajelo.Types"],
      J = a["Metajelo.XPaths"],
      U = a["Text.Email.Validate"],
      B = a["Text.URL.Validate"],
      M = a["Web.DOM.Document.XPath"],
      I = a["Web.DOM.Document.XPath.ResultType"],
      w = a["Web.DOM.Element"],
      F = a["Web.DOM.Node"],
      O = a["Web.DOM.NodeList"],
      Q = function Q(u) {
    return "Audiovisual" === u ? f.pure(m.applicativeEither)(C.Audiovisual.value) : "Dataset" === u ? f.pure(m.applicativeEither)(C.Dataset.value) : "Event" === u ? f.pure(m.applicativeEither)(C.Event.value) : "Image" === u ? f.pure(m.applicativeEither)(C.Image.value) : "InteractiveResource" === u ? f.pure(m.applicativeEither)(C.InteractiveResource.value) : "Model" === u ? f.pure(m.applicativeEither)(C.Model.value) : "PhysicalObject" === u ? f.pure(m.applicativeEither)(C.PhysicalObject.value) : "ResourceCollection" === u ? f.pure(m.applicativeEither)(C.ResourceCollection.value) : "Service" === u ? f.pure(m.applicativeEither)(C.Service.value) : "Software" === u ? f.pure(m.applicativeEither)(C.Software.value) : "Sound" === u ? f.pure(m.applicativeEither)(C.Sound.value) : "Text" === u ? f.pure(m.applicativeEither)(C.Text.value) : "Workflow" === u ? f.pure(m.applicativeEither)(C.Workflow.value) : "Other" === u ? f.pure(m.applicativeEither)(C.Other.value) : m.Left.create("Unknown ResourceTypeGeneral: '" + (u + "'"));
  },
      X = function X(u) {
    return function (V) {
      return function () {
        var ia = J.unsafeSingleNodeValue(u)(V)(x.xx(x.stringXPath)(J.resTypeP))(),
            ta = u.xeval.str(ia)(".")();
        ia = u.xeval.str(ia)(x.at(x.stringXPath)(J.resTypeGenAT))();
        ia = J.rightOrThrow(Q(ia))();
        return {
          description: ta,
          generalType: ia
        };
      };
    };
  },
      v = function v(u) {
    return "IsCitedBy" === u ? f.pure(m.applicativeEither)(C.IsCitedBy.value) : "Cites" === u ? f.pure(m.applicativeEither)(C.Cites.value) : "IsSupplementTo" === u ? f.pure(m.applicativeEither)(C.IsSupplementTo.value) : "IsSupplementedBy" === u ? f.pure(m.applicativeEither)(C.IsSupplementedBy.value) : "IsContinuedBy" === u ? f.pure(m.applicativeEither)(C.IsContinuedBy.value) : "Continues" === u ? f.pure(m.applicativeEither)(C.Continues.value) : "IsNewVersionOf" === u ? f.pure(m.applicativeEither)(C.IsNewVersionOf.value) : "IsPreviousVersionOf" === u ? f.pure(m.applicativeEither)(C.IsPreviousVersionOf.value) : "IsPartOf" === u ? f.pure(m.applicativeEither)(C.IsPartOf.value) : "HasPart" === u ? f.pure(m.applicativeEither)(C.HasPart.value) : "IsReferencedBy" === u ? f.pure(m.applicativeEither)(C.IsReferencedBy.value) : "References" === u ? f.pure(m.applicativeEither)(C.References.value) : "IsDocumentedBy" === u ? f.pure(m.applicativeEither)(C.IsDocumentedBy.value) : "Documents" === u ? f.pure(m.applicativeEither)(C.Documents.value) : "IsCompiledBy" === u ? f.pure(m.applicativeEither)(C.IsCompiledBy.value) : "Compiles" === u ? f.pure(m.applicativeEither)(C.Compiles.value) : "IsVariantFormOf" === u ? f.pure(m.applicativeEither)(C.IsVariantFormOf.value) : "IsOriginalFormOf" === u ? f.pure(m.applicativeEither)(C.IsOriginalFormOf.value) : "IsIdenticalTo" === u ? f.pure(m.applicativeEither)(C.IsIdenticalTo.value) : "HasMetadata" === u ? f.pure(m.applicativeEither)(C.HasMetadata.value) : "IsMetadataFor" === u ? f.pure(m.applicativeEither)(C.IsMetadataFor.value) : "Reviews" === u ? f.pure(m.applicativeEither)(C.Reviews.value) : "IsReviewedBy" === u ? f.pure(m.applicativeEither)(C.IsReviewedBy.value) : "IsDerivedFrom" === u ? f.pure(m.applicativeEither)(C.IsDerivedFrom.value) : "IsSourceOf" === u ? f.pure(m.applicativeEither)(C.IsSourceOf.value) : m.Left.create("Unknown RelationType: '" + (u + "'"));
  },
      ea = function ea(u) {
    return "Access" === u ? f.pure(m.applicativeEither)(new r.Just(C.Access.value)) : "Collection" === u ? f.pure(m.applicativeEither)(new r.Just(C.Collection.value)) : "Data" === u ? f.pure(m.applicativeEither)(new r.Just(C.Data.value)) : "Metadata" === u ? f.pure(m.applicativeEither)(new r.Just(C.Metadata.value)) : "Preservation" === u ? f.pure(m.applicativeEither)(new r.Just(C.Preservation.value)) : "Submission" === u ? f.pure(m.applicativeEither)(new r.Just(C.Submission.value)) : "Quality" === u ? f.pure(m.applicativeEither)(new r.Just(C.Quality.value)) : "Terms of Use" === u ? f.pure(m.applicativeEither)(new r.Just(C.TermsOfUse.value)) : "" === u ? f.pure(m.applicativeEither)(r.Nothing.value) : m.Left.create("Unknown PolicyType: '" + (u + "'"));
  },
      la = function la(u) {
    return "commercial" === u ? f.pure(m.applicativeEither)(C.Commercial.value) : "non-profit" === u ? f.pure(m.applicativeEither)(C.NonProfit.value) : "governmental" === u ? f.pure(m.applicativeEither)(C.Governmental.value) : m.Left.create("Unknown InstitutionType: '" + (u + "'"));
  },
      P = function P(u) {
    return "dataCustodian" === u ? f.pure(m.applicativeEither)(new r.Just(C.DataCustodian.value)) : "" === u ? f.pure(m.applicativeEither)(r.Nothing.value) : m.Left.create("Unknown InstitutionContactType: '" + (u + "'"));
  },
      aa = function aa(u) {
    return "ARK" === u ? f.pure(m.applicativeEither)(C.ARK.value) : "arXiv" === u ? f.pure(m.applicativeEither)(C.ArXiv.value) : "bibcode" === u ? f.pure(m.applicativeEither)(C.Bibcode.value) : "DOI" === u ? f.pure(m.applicativeEither)(C.DOI.value) : "EAN13" === u ? f.pure(m.applicativeEither)(C.EAN13.value) : "EISSN" === u ? f.pure(m.applicativeEither)(C.EISSN.value) : "Handle" === u ? f.pure(m.applicativeEither)(C.Handle.value) : "IGSN" === u ? f.pure(m.applicativeEither)(C.IGSN.value) : "ISBN" === u ? f.pure(m.applicativeEither)(C.ISBN.value) : "ISSN" === u ? f.pure(m.applicativeEither)(C.ISSN.value) : "ISTC" === u ? f.pure(m.applicativeEither)(C.ISTC.value) : "LISSN" === u ? f.pure(m.applicativeEither)(C.LISSN.value) : "LSID" === u ? f.pure(m.applicativeEither)(C.LSID.value) : "PMID" === u ? f.pure(m.applicativeEither)(C.PMID.value) : "PURL" === u ? f.pure(m.applicativeEither)(C.PURL.value) : "UPC" === u ? f.pure(m.applicativeEither)(C.UPC.value) : "URL" === u ? f.pure(m.applicativeEither)(C.URL.value) : "URN" === u ? f.pure(m.applicativeEither)(C.URN.value) : m.Left.create("Unknown IdentifierType: '" + (u + "'"));
  },
      sa = function sa(u) {
    return function (V) {
      var ia = function ia(ma) {
        return function () {
          var ha = u.xeval.str(ma)(x.at(x.stringXPath)(J.idTypeAT))();
          return J.rightOrThrow(aa(ha))();
        };
      },
          ta = function ta(ma) {
        return function () {
          var ha = u.xeval.str(ma)(".")();
          return J.rightOrThrow(J.readNonEmptyString("InstitutionID")(ha))();
        };
      };

      return function () {
        var ma = J.unsafeSingleNodeValue(u)(V)(x.xx(x.stringXPath)(J.instIdP))(),
            ha = ta(ma)();
        ma = ia(ma)();
        return {
          id: ha,
          idType: ma
        };
      };
    };
  },
      wa = function wa(u) {
    var V = function V(ha) {
      return function () {
        var qa = u.xeval.str(ha)(x.at(x.stringXPath)(J.relTypeAT))();
        return J.rightOrThrow(v(qa))();
      };
    },
        ia = function ia(ha) {
      return function () {
        var qa = u.xeval.str(ha)(x.at(x.stringXPath)(J.relIdTypeAT))();
        return J.rightOrThrow(aa(qa))();
      };
    },
        ta = function ta(ha) {
      return function () {
        var qa = u.xeval.str(ha)(".")();
        return J.rightOrThrow(J.readNonEmptyString("RelatedIdentifier")(qa))();
      };
    },
        ma = function ma(ha) {
      return function () {
        var qa = ta(ha)(),
            za = ia(ha)(),
            va = V(ha)();
        return {
          id: qa,
          idType: za,
          relType: va
        };
      };
    };

    return function () {
      var ha = u.xevalRoot.any(J.relIdRootP)(I.ordered_node_snapshot_type)();
      ha = M.snapshot(ha)();
      ha = H.sequence(H.traversableArray)(D.applicativeEffect)(k.map(k.functorArray)(ma)(ha))();
      ha = e.fromArray(ha);
      if (ha instanceof r.Just) return ha.value0;
      if (ha instanceof r.Nothing) return N["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 120, column 3 - line 122, column 67): " + [ha.constructor.name]);
    };
  },
      na = function na(u) {
    return function (V) {
      var ia = function ia(ha) {
        return function () {
          var qa = u.xeval.str(ha)(x.at(x.stringXPath)(J.resIdTypeAT))();
          return J.rightOrThrow(aa(qa))();
        };
      },
          ta = function ta(ha) {
        return function () {
          var qa = u.xeval.str(ha)(".")();
          return J.rightOrThrow(J.readNonEmptyString("ResourceID")(qa))();
        };
      },
          ma = function ma(ha) {
        return function (qa) {
          return H.sequence(H.traversableMaybe)(D.applicativeEffect)(h.bind(r.bindMaybe)(ha)(function (za) {
            return h.bind(r.bindMaybe)(qa)(function (va) {
              return f.pure(r.applicativeMaybe)(l.lift2(D.applyEffect)(function (Ba) {
                return function (Ia) {
                  return {
                    id: Ba,
                    idType: Ia
                  };
                };
              })(za)(va));
            });
          }));
        };
      };

      return function () {
        var ha = u.xeval.nodeMay(V)(x.xx(x.stringXPath)(J.resIdP))(),
            qa = k.map(r.functorMaybe)(ta)(ha);
        ha = k.map(r.functorMaybe)(ia)(ha);
        return ma(qa)(ha)();
      };
    };
  },
      oa = function oa(u) {
    return function () {
      var V = u.xevalRoot.str(J.idRootP)();
      V = J.rightOrThrow(J.readNonEmptyString("Identifier")(V))();
      var ia = u.xevalRoot.str(J.idTypeRootAP)();
      ia = J.rightOrThrow(aa(ia))();
      return {
        id: V,
        idType: ia
      };
    };
  },
      Da = function Da(u) {
    return function (V) {
      var ia = function ia(ta) {
        return function () {
          var ma = u.xeval.str(ta)(".")();
          return J.rightOrThrow(J.readNonEmptyString("Format")(ma))();
        };
      };

      return function () {
        var ta = u.xeval.any(V)(x.pathAppendNSx(x.stringXPath)(x.xx(x.stringXPath)(J.formatCP))(J.formatP))(I.ordered_node_snapshot_type)();
        ta = M.snapshot(ta)();
        return H.sequence(H.traversableArray)(D.applicativeEffect)(k.map(k.functorArray)(ia)(ta))();
      };
    };
  },
      ba = function ba(u) {
    return "0" === u ? f.pure(m.applicativeEither)(!1) : "1" === u ? f.pure(m.applicativeEither)(!0) : "false" === u ? f.pure(m.applicativeEither)(!1) : "true" === u ? f.pure(m.applicativeEither)(!0) : m.Left.create("Invalid xs:boolean value: '" + (u + "'"));
  },
      fa = function fa(u) {
    return "" === u ? f.pure(m.applicativeEither)(r.Nothing.value) : k.map(m.functorEither)(r.Just.create)(ba(u));
  },
      Z = function Z(u) {
    return function (V) {
      var ia = x.pathAppendNSx(x.stringXPath)(x.xx(x.stringXPath)(J.instPolicyCP))(J.instPolicyP),
          ta = function ta(ma) {
        return function () {
          var ha = F.childNodes(ma)();
          ha = O.toArray(ha)();
          ha = b.head(b.filter(function (ua) {
            return !E.startsWith("#")(F.nodeName(ua));
          })(ha));
          if (ha instanceof r.Just) var qa = ha.value0;else if (ha instanceof r.Nothing) qa = N["throw"]("Couldn't find child node of " + F.nodeName(ma))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 404, column 30 - line 406, column 80): " + [ha.constructor.name]);
          var za = u.xeval.str(qa)(".")(),
              va = J.rightOrThrow(J.readNonEmptyString("Policy")(za))();

          ha = function () {
            var ua = k.map(r.functorMaybe)(w.localName)(w.fromNode(qa));
            if (ua instanceof r.Just && ua.value0 === J.freeTextPolicyP) return new C.FreeTextPolicy(va);

            if (ua instanceof r.Just && ua.value0 === J.refPolicyP) {
              ua = B.parsePublicURL(za);
              if (ua instanceof m.Left) return N["throw"]("In refPolicy URL parsing: " + ua.value0)();
              if (ua instanceof m.Right) return new C.RefPolicy(ua.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 411, column 37 - line 413, column 45): " + [ua.constructor.name]);
            }

            if (ua instanceof r.Just) return N["throw"]("invalid element '" + (ua.value0 + "' as child of institutionPolicy"))();
            if (ua instanceof r.Nothing) return N["throw"]("unable to convert policy child Node with name '" + (F.nodeName(qa) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 409, column 17 - line 417, column 56): " + [ua.constructor.name]);
          }();

          var Ba = u.xeval.str(ma)(x.at(x.stringXPath)(J.polTypeAT))();
          Ba = J.rightOrThrow(ea(Ba))();
          var Ia = u.xeval.str(ma)(x.at(x.stringXPath)(J.appliesToProdAT))();
          Ia = J.rightOrThrow(fa(Ia))();
          return {
            policy: ha,
            policyType: Ba,
            appliesToProduct: Ia
          };
        };
      };

      return function () {
        var ma = u.xeval.any(V)(ia)(I.ordered_node_snapshot_type)();
        ma = M.snapshot(ma)();
        ma = H.sequence(H.traversableArray)(D.applicativeEffect)(k.map(k.functorArray)(ta)(ma))();
        ma = e.fromArray(ma);
        if (ma instanceof r.Just) return ma.value0;
        if (ma instanceof r.Nothing) return N["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 391, column 3 - line 393, column 67): " + [ma.constructor.name]);
      };
    };
  },
      Ca = function Ca(u) {
    return function (V) {
      var ia = function ia(ma) {
        return function () {
          var ha = u.xeval.str(ma)(x.xx(x.stringXPath)(J.pubYearP))();
          ha = J.rightOrThrow(J.readNonEmptyString("PubYear")(ha))();
          return z.intToNat(q.round(G.readInt(10)(A.toString(ha))));
        };
      },
          ta = x.xx(x.stringXPath)(J.basicMetaP);

      return function () {
        var ma = J.unsafeSingleNodeValue(u)(V)(ta)(),
            ha = u.xeval.str(ma)(x.xx(x.stringXPath)(J.titleP))(),
            qa = u.xeval.str(ma)(x.xx(x.stringXPath)(J.creatorP))();
        ha = J.rightOrThrow(J.readNonEmptyString("Title")(ha))();
        qa = J.rightOrThrow(J.readNonEmptyString("Creator")(qa))();
        ma = ia(ma)();
        return {
          title: ha,
          creator: qa,
          publicationYear: ma
        };
      };
    };
  },
      R = function R(u) {
    var V = A.toString(u);
    return function () {
      var ia = p.stripSuffix("Z")(V);
      if (ia instanceof r.Just) ia = 10 >= t.length(ia.value0) ? ia.value0 + "T00:00:00.000Z" : V;else if (ia instanceof r.Nothing) ia = V;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 106, column 24 - line 108, column 23): " + [ia.constructor.name]);
      ia = y.parse(ia)();
      return r.fromMaybe(d.bottom(n.boundedDateTime))(y.toDateTime(ia));
    };
  },
      K = function K(u) {
    return function () {
      var V = u.xevalRoot.str(J.dateRootP)();
      V = J.rightOrThrow(J.readNonEmptyString("Date")(V))();
      return R(V)();
    };
  },
      T = function T(u) {
    return function () {
      var V = u.xevalRoot.str(J.lastModRootP)();
      V = J.rightOrThrow(J.readNonEmptyString("ModDate")(V))();
      return R(V)();
    };
  },
      Y = function Y(u) {
    return function (V) {
      return function (ia) {
        return function () {
          var ta = u.xeval.str(ia)(V)();
          ta = B.parsePublicURL(ta);
          if (ta instanceof m.Left) return N["throw"](ta.value0)();
          if (ta instanceof m.Right) return ta.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 452, column 3 - line 454, column 26): " + [ta.constructor.name]);
        };
      };
    };
  },
      ka = function ka(u) {
    return function (V) {
      var ia = function ia(qa) {
        return function () {
          var za = qa();
          return J.rightOrThrow(J.readNonEmptyString("SuperOrg")(za))();
        };
      },
          ta = function ta(qa) {
        return function () {
          var za = u.xeval.nodeMay(qa)(x.xx(x.stringXPath)(J.superOrgNameP))();
          return H.sequence(H.traversableMaybe)(D.applicativeEffect)(k.map(r.functorMaybe)(function (va) {
            return ia(u.xeval.str(va)("."));
          })(za))();
        };
      },
          ma = function ma(qa) {
        return function () {
          var za = J.unsafeSingleNodeValue(u)(qa)(x.xx(x.stringXPath)(J.instSustainP))(),
              va = Y(u)(x.xx(x.stringXPath)(J.missionUrlP))(za)();
          za = Y(u)(x.xx(x.stringXPath)(J.fundingUrlP))(za)();
          return {
            missionStatementURL: va,
            fundingStatementURL: za
          };
        };
      },
          ha = function ha(qa) {
        var za = x.xx(x.stringXPath)(J.instContactP);
        return function () {
          var va = J.unsafeSingleNodeValue(u)(qa)(za)(),
              Ba = u.xeval.str(va)(x.at(x.stringXPath)(J.instContactTypeAT))();
          Ba = J.rightOrThrow(P(Ba))();
          va = u.xeval.str(va)(".")();
          va = U.validate(va);
          if (va instanceof m.Left) va = N["throw"]("Error in validating email address for InstitutionContact: " + va.value0)();else if (va instanceof m.Right) va = va.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 355, column 23 - line 359, column 28): " + [va.constructor.name]);
          return {
            emailAddress: va,
            contactType: Ba
          };
        };
      };

      return function () {
        var qa = J.unsafeSingleNodeValue(u)(V)(x.xx(x.stringXPath)(J.locP))(),
            za = sa(u)(qa)(),
            va = h.join(D.bindEffect)(k.mapFlipped(D.functorEffect)(u.xeval.str(qa)(x.xx(x.stringXPath)(J.instNameP)))(function (Ya) {
          return J.rightOrThrow(J.readNonEmptyString("Institution Name")(Ya));
        }))(),
            Ba = u.xeval.str(qa)(x.xx(x.stringXPath)(J.instTypeP))();
        Ba = J.rightOrThrow(la(Ba))();
        var Ia = ta(qa)(),
            ua = ha(qa)(),
            Ga = ma(qa)(),
            Ka = Z(u)(qa)();
        qa = u.xeval.str(qa)(x.xx(x.stringXPath)(J.versioningP))();
        qa = J.rightOrThrow(ba(qa))();
        return {
          institutionID: za,
          institutionName: va,
          institutionType: Ba,
          superOrganizationName: Ia,
          institutionContact: ua,
          institutionSustainability: Ga,
          institutionPolicies: Ka,
          versioning: qa
        };
      };
    };
  },
      pa = function pa(u) {
    return function (V) {
      var ia = function ia(ma) {
        return function () {
          var ha = u.xeval.str(ma)(x.at(x.stringXPath)(J.relTypeAT))();
          return J.rightOrThrow(v(ha))();
        };
      },
          ta = function ta(ma) {
        return function (ha) {
          return H.sequence(H.traversableMaybe)(D.applicativeEffect)(h.bind(r.bindMaybe)(ma)(function (qa) {
            return h.bind(r.bindMaybe)(ha)(function (za) {
              return f.pure(r.applicativeMaybe)(l.lift2(D.applyEffect)(function (va) {
                return function (Ba) {
                  return {
                    url: va,
                    relationType: Ba
                  };
                };
              })(qa)(za));
            });
          }));
        };
      };

      return function () {
        var ma = u.xeval.nodeMay(V)(x.xx(x.stringXPath)(J.resMetaSourceP))(),
            ha = k.map(r.functorMaybe)(Y(u)("."))(ma);
        ma = k.map(r.functorMaybe)(ia)(ma);
        return ta(ha)(ma)();
      };
    };
  },
      xa = function xa(u) {
    var V = function V(ia) {
      return function () {
        var ta = Ca(u)(ia)(),
            ma = na(u)(ia)(),
            ha = X(u)(ia)(),
            qa = Da(u)(ia)(),
            za = pa(u)(ia)(),
            va = ka(u)(ia)();
        return {
          basicMetadata: ta,
          resourceID: ma,
          resourceType: ha,
          format: qa,
          resourceMetadataSource: za,
          location: va
        };
      };
    };

    return function () {
      var ia = u.xevalRoot.any(J.sProdRootP)(I.ordered_node_snapshot_type)();
      ia = M.snapshot(ia)();
      ia = H.sequence(H.traversableArray)(D.applicativeEffect)(k.map(k.functorArray)(V)(ia))();
      ia = e.fromArray(ia);
      if (ia instanceof r.Just) return ia.value0;
      if (ia instanceof r.Nothing) return N["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 178, column 3 - line 180, column 70): " + [ia.constructor.name]);
    };
  };

  c.readRecord = function (u) {
    return function () {
      var V = oa(u)(),
          ia = K(u)(),
          ta = T(u)(),
          ma = wa(u)(),
          ha = xa(u)();
      return {
        identifier: V,
        date: ia,
        lastModified: ta,
        relatedIdentifiers: ma,
        supplementaryProducts: ha
      };
    };
  };

  c.readIdentifierType = aa;
  c.parseDate = R;
  c.readRelationType = v;
  c.readResourceTypeGeneral = Q;
  c.readInstitutionType = la;
  c.readInstitutionContactType = P;
  c.readPolicyType = ea;
  c.readBoolean = ba;
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

  var c = a["Metajelo.XPaths.Write"],
      f = a["Control.Applicative"],
      l = a["Data.Array.NonEmpty.Internal"],
      h = a["Data.Foldable"],
      b = a["Data.Functor"],
      e = a["Data.JSDate"],
      d = a["Data.Maybe"],
      n = a["Data.Natural"],
      m = a["Data.Show"],
      k = a["Data.Traversable"],
      q = a["Data.Unit"],
      y = a["Data.XPath"],
      r = a.Effect,
      z = a["Metajelo.Types"],
      t = a["Metajelo.XPaths"],
      p = a["Nonbili.DOM"],
      A = a["Text.Email.Parser"],
      E = a["Text.URL.Validate"],
      H = a["Web.DOM.Document"],
      x = a["Web.DOM.Element"],
      D = a["Web.DOM.Node"],
      N = function N(R) {
    return function (K) {
      return function (T) {
        return function (Y) {
          var ka = x.fromNode(T);
          return function () {
            k.sequence(k.traversableMaybe)(r.applicativeEffect)(b.mapFlipped(d.functorMaybe)(ka)(function (pa) {
              return x.setAttribute(R)(m.show(z.showIdentifierType)(Y))(pa);
            }))();
            return q.unit;
          };
        };
      };
    };
  },
      G = a["Data.String.NonEmpty.Internal"].toString,
      C = function C(R) {
    return function (K) {
      return function (T) {
        return function (Y) {
          return function () {
            D.setTextContent(G(Y.id))(T)();
            return N(R)(K)(T)(Y.idType)();
          };
        };
      };
    };
  },
      J = function J(R) {
    return function (K) {
      return function () {
        var T = t.unsafeSingleNodeValue(R)(R.recNode)(y.xx(y.stringXPath)(t.idP))();
        return C(t.idTypeAT)(R)(T)(K)();
      };
    };
  },
      U = function U(R) {
    return function (K) {
      return function () {
        k.sequence(k.traversableMaybe)(r.applicativeEffect)(b.map(d.functorMaybe)(D.setTextContent(G(R)))(K))();
        return q.unit;
      };
    };
  },
      B = function B(R) {
    return function () {
      var K = e.toISOString(e.fromDateTime(R))();
      return t.rightOrThrow(t.readNonEmptyString("(generic date)")(K))();
    };
  },
      M = function M(R) {
    return function (K) {
      return function () {
        var T = B(K)(),
            Y = R.xevalRoot.nodeMay(t.dateRootP)();
        return U(T)(Y)();
      };
    };
  },
      I = function I(R) {
    return function (K) {
      return function () {
        var T = B(K)(),
            Y = R.xevalRoot.nodeMay(t.lastModRootP)();
        return U(T)(Y)();
      };
    };
  },
      w = function w(R) {
    return function (K) {
      var T = x.prefix(R.recElem);
      return function () {
        if (T instanceof d.Just) var Y = T.value0 + ":";else if (T instanceof d.Nothing) Y = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 244, column 20 - line 246, column 18): " + [T.constructor.name]);
        Y += K;
        return H.createElementNS(new d.Just(R.ns))(Y)(R.doc)();
      };
    };
  },
      F = function F(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = w(R)(T)();
          D.appendChild(x.toNode(Y))(K)();
          return Y;
        };
      };
    };
  },
      O = function O(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = b.map(r.functorEffect)(x.toNode)(F(R)(K)(t.basicMetaP))(),
              ka = b.map(r.functorEffect)(x.toNode)(F(R)(Y)(t.titleP))();
          D.setTextContent(G(T.title))(ka)();
          ka = b.map(r.functorEffect)(x.toNode)(F(R)(Y)(t.creatorP))();
          D.setTextContent(G(T.creator))(ka)();
          Y = b.map(r.functorEffect)(x.toNode)(F(R)(Y)(t.pubYearP))();
          return D.setTextContent(m.show(n.showNatural)(T.publicationYear))(Y)();
        };
      };
    };
  },
      Q = function Q(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = F(R)(K)(t.instContactP)();
          k.sequence(k.traversableMaybe)(r.applicativeEffect)(b.mapFlipped(d.functorMaybe)(T.contactType)(function (ka) {
            return x.setAttribute(t.instContactTypeAT)(m.show(z.showInstitutionContactType)(ka))(Y);
          }))();
          return D.setTextContent(A.toString(T.emailAddress))(x.toNode(Y))();
        };
      };
    };
  },
      X = function X(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = b.map(r.functorEffect)(x.toNode)(F(R)(K)(t.instIdP))();
          return C(t.idTypeAT)(R)(Y)(T)();
        };
      };
    };
  },
      v = function v(R) {
    return function (K) {
      return h.for_(r.applicativeEffect)(l.foldableNonEmptyArray)(K)(function (T) {
        return function () {
          var Y = F(R)(R.recNode)(t.relIdP)(),
              ka = x.toNode(Y);
          D.setTextContent(G(T.id))(ka)();
          x.setAttribute(t.relIdTypeAT)(m.show(z.showIdentifierType)(T.idType))(Y)();
          return x.setAttribute(t.relTypeAT)(m.show(z.showRelationType)(T.relType))(Y)();
        };
      });
    };
  },
      ea = function ea(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = b.map(r.functorEffect)(x.toNode)(F(R)(K)(t.resIdP))();
          return C(t.resIdTypeAT)(R)(Y)(T)();
        };
      };
    };
  },
      la = function la(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = F(R)(K)(t.resMetaSourceP)();
          D.setTextContent(E.urlToString(T.url))(x.toNode(Y))();
          return x.setAttribute(t.relTypeAT)(m.show(z.showRelationType)(T.relationType))(Y)();
        };
      };
    };
  },
      P = function P(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = F(R)(K)(t.resTypeP)();
          D.setTextContent(T.description)(x.toNode(Y))();
          return x.setAttribute(t.resTypeGenAT)(m.show(z.showResourceTypeGeneral)(T.generalType))(Y)();
        };
      };
    };
  },
      aa = function aa(R) {
    return function (K) {
      return function (T) {
        return function (Y) {
          return function () {
            var ka = b.map(r.functorEffect)(x.toNode)(F(K)(T)(R))();
            return D.setTextContent(Y)(ka)();
          };
        };
      };
    };
  },
      sa = function sa(R) {
    return function (K) {
      return function (T) {
        return function (Y) {
          return aa(R)(K)(T)(G(Y));
        };
      };
    };
  },
      wa = function wa(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = b.map(r.functorEffect)(x.toNode)(F(R)(K)(t.formatCP))();
          return h.for_(r.applicativeEffect)(h.foldableArray)(T)(function (ka) {
            return sa(t.formatP)(R)(Y)(ka);
          })();
        };
      };
    };
  },
      na = function na(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = F(R)(K)(t.instPolicyP)(),
              ka = x.toNode(Y);
          k.sequence(k.traversableMaybe)(r.applicativeEffect)(b.mapFlipped(d.functorMaybe)(T.policyType)(function (pa) {
            return x.setAttribute(t.polTypeAT)(m.show(z.showPolicyType)(pa))(Y);
          }))();
          k.sequence(k.traversableMaybe)(r.applicativeEffect)(b.mapFlipped(d.functorMaybe)(T.appliesToProduct)(function (pa) {
            return x.setAttribute(t.appliesToProdAT)(m.show(m.showBoolean)(pa))(Y);
          }))();
          if (T.policy instanceof z.FreeTextPolicy) return sa(t.freeTextPolicyP)(R)(ka)(T.policy.value0)();
          if (T.policy instanceof z.RefPolicy) return sa(t.refPolicyP)(R)(ka)(E.urlToNEString(T.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 211, column 3 - line 214, column 27): " + [T.policy.constructor.name]);
        };
      };
    };
  },
      oa = function oa(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = b.map(r.functorEffect)(x.toNode)(F(R)(K)(t.instPolicyCP))();
          return h.for_(r.applicativeEffect)(l.foldableNonEmptyArray)(T)(function (ka) {
            return na(R)(Y)(ka);
          })();
        };
      };
    };
  },
      Da = function Da(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = b.map(r.functorEffect)(x.toNode)(F(R)(K)(t.instSustainP))();
          sa(t.missionUrlP)(R)(Y)(E.urlToNEString(T.missionStatementURL))();
          return sa(t.fundingUrlP)(R)(Y)(E.urlToNEString(T.fundingStatementURL))();
        };
      };
    };
  },
      ba = function ba(R) {
    return function (K) {
      return function (T) {
        return function () {
          var Y = F(R)(K)(t.locP)(),
              ka = x.toNode(Y);
          X(R)(ka)(T.institutionID)();
          sa(t.instNameP)(R)(ka)(T.institutionName)();
          aa(t.instTypeP)(R)(ka)(m.show(z.showInstitutionType)(T.institutionType))();
          k.sequence(k.traversableMaybe)(r.applicativeEffect)(b.mapFlipped(d.functorMaybe)(T.superOrganizationName)(function (pa) {
            return sa(t.superOrgNameP)(R)(ka)(pa);
          }))();
          Q(R)(ka)(T.institutionContact)();
          Da(R)(ka)(T.institutionSustainability)();
          oa(R)(ka)(T.institutionPolicies)();
          return aa(t.versioningP)(R)(ka)(m.show(m.showBoolean)(T.versioning))();
        };
      };
    };
  },
      fa = function fa(R) {
    return function (K) {
      return function () {
        var T = t.unsafeSingleNodeValue(R)(R.recNode)(y.xx(y.stringXPath)(t.sProdCP))(),
            Y = b.map(r.functorEffect)(x.toNode)(F(R)(T)(t.sProdP))();
        O(R)(Y)(K.basicMetadata)();
        k.sequence(k.traversableMaybe)(r.applicativeEffect)(b.mapFlipped(d.functorMaybe)(K.resourceID)(function (ka) {
          return ea(R)(Y)(ka);
        }))();
        P(R)(Y)(K.resourceType)();
        wa(R)(Y)(K.format)();
        k.sequence(k.traversableMaybe)(r.applicativeEffect)(b.mapFlipped(d.functorMaybe)(K.resourceMetadataSource)(function (ka) {
          return la(R)(Y)(ka);
        }))();
        return ba(R)(Y)(K.location)();
      };
    };
  },
      Z = function Z(R) {
    return function (K) {
      return h.for_(r.applicativeEffect)(l.foldableNonEmptyArray)(K)(function (T) {
        return fa(R)(T);
      });
    };
  },
      Ca = function Ca(R) {
    return function (K) {
      return function () {
        J(R)(K.identifier)();
        M(R)(K.date)();
        I(R)(K.lastModified)();
        v(R)(K.relatedIdentifiers)();
        return Z(R)(K.supplementaryProducts)();
      };
    };
  };

  c.recordToString = function (R) {
    return function () {
      var K = t.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      Ca(K)(R)();
      K = H.documentElement(K.doc)();
      return d.maybe(f.pure(r.applicativeEffect)(""))(p.outerHTML)(K)();
    };
  };

  c.dateTimeToStr = B;
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
      l = a["Data.Symbol"];

  a = function (h) {
    return function (b) {
      return function (e) {
        return function (d) {
          return f.unsafeGet(l.reflectSymbol(b)(e))(d);
        };
      };
    };
  }()(new l.IsSymbol(function () {
    return "target";
  }))(l.SProxy.value);

  c.target = a;
})(PS);

(function (a) {
  a.children = function (c) {
    return function (f) {
      return function () {
        return f[c];
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

  a.setValue = function (c) {
    return function (f) {
      return function () {
        f.value = c;
      };
    };
  };
})(PS["Web.HTML.HTMLInputElement"] = PS["Web.HTML.HTMLInputElement"] || {});

(function (a) {
  a["Web.HTML.HTMLInputElement"] = a["Web.HTML.HTMLInputElement"] || {};
  var c = a["Web.HTML.HTMLInputElement"],
      f = a["Web.HTML.HTMLInputElement"],
      l = a["Data.Functor"],
      h = a["Data.Nullable"],
      b = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("HTMLInputElement");

  var e = function () {
    var d = l.map(b.functorEffect)(h.toMaybe);
    return function (n) {
      return d(f._files(n));
    };
  }();

  c.fromElement = a;
  c.files = e;
  c.setValue = f.setValue;
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var c = a["Metajelo.FormUtil"],
      f = a["Concur.Core.FRP"],
      l = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      n = a["Control.Applicative"],
      m = a["Control.Apply"],
      k = a["Control.Bind"],
      q = a["Control.Cofree"],
      y = a["Control.Plus"],
      r = a["Data.Array"],
      z = a["Data.Array.NonEmpty"],
      t = a["Data.Bifunctor"],
      p = a["Data.Bounded"],
      A = a["Data.Either"],
      E = a["Data.Enum"],
      H = a["Data.Eq"],
      x = a["Data.Foldable"],
      D = a["Data.Functor"],
      N = a["Data.Generic.Rep"],
      G = a["Data.Generic.Rep.Bounded"],
      C = a["Data.Generic.Rep.Enum"],
      J = a["Data.Generic.Rep.Eq"],
      U = a["Data.Generic.Rep.Ord"],
      B = a["Data.Generic.Rep.Show"],
      M = a["Data.Int"],
      I = a["Data.Maybe"],
      w = a["Data.Monoid"],
      F = a["Data.Natural"],
      O = a["Data.Ord"],
      Q = a["Data.Profunctor.Strong"],
      X = a["Data.Semigroup"],
      v = a["Data.Show"],
      ea = a["Data.String.Common"],
      la = a["Data.String.NonEmpty.Internal"],
      P = a["Data.Symbol"],
      aa = a["Data.Traversable"],
      sa = a["Data.Tuple"],
      wa = a["Data.Unfoldable1"],
      na = a.Effect,
      oa = a["Effect.Class"],
      Da = a["Effect.Class.Console"],
      ba = a["Effect.Exception"],
      fa = a["Effect.Now"],
      Z = a["Effect.Unsafe"],
      Ca = a.Global,
      R = a["Metajelo.Types"],
      K = a["Metajelo.XPaths.Read"],
      T = a["Metajelo.XPaths.Write"],
      Y = a["React.SyntheticEvent"],
      ka = a["Text.Email.Parser"],
      pa = a["Text.Email.Validate"],
      xa = a["Text.URL.Validate"],
      u = a["Web.DOM.Document"],
      V = a["Web.DOM.Element"],
      ia = a["Web.DOM.HTMLCollection"],
      ta = a["Web.DOM.NonElementParentNode"],
      ma = a["Web.DOM.ParentNode"],
      ha = a["Web.HTML"],
      qa = a["Web.HTML.HTMLDocument"],
      za = a["Web.HTML.HTMLInputElement"],
      va = a["Web.HTML.Window"],
      Ba = function () {
    function L() {}

    L.value = new L();
    return L;
  }(),
      Ia = function () {
    function L() {}

    L.value = new L();
    return L;
  }(),
      ua = function () {
    function L(S) {
      this.value0 = S;
    }

    L.create = function (S) {
      return new L(S);
    };

    return L;
  }(),
      Ga = function () {
    function L(S) {
      this.value0 = S;
    }

    L.create = function (S) {
      return new L(S);
    };

    return L;
  }(),
      Ka = function Ka(L, S, ja) {
    this.fromOptionValue = L;
    this.toOptionLabel = S;
    this.toOptionValue = ja;
  },
      Ya = function Ya() {
    var L = ha.window();
    L = va.document(L)();
    return qa.toDocument(L);
  },
      Wa = function Wa(L) {
    if (L instanceof ua || L instanceof Ga) return L.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 343, column 1 - line 343, column 34): " + [L.constructor.name]);
  },
      Qa = function Qa(L) {
    return e.input(l.widgetLiftWidget)([d.defaultValue(L), D.map(h.functorProps)(d.unsafeTargetValue)(d.onChange)]);
  },
      cb = function cb(L) {
    return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(L)(function (S) {
      return n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(la.fromString(ea.trim(S)));
    });
  },
      db = function db(L) {
    return function (S) {
      return function (ja) {
        return function () {
          var ca = Ya();
          ca = u.toNonElementParentNode(ca);
          ca = ta.getElementById(L)(ca)();
          if (ca instanceof I.Just) return ca = V.toParentNode(ca.value0), ca = ma.children(ca)(), ca = ia.toArray(ca)(), ca = r.filter(function (ra) {
            return V.tagName(ra) === S;
          })(ca), ca = r.catMaybes(D.map(D.functorArray)(za.fromElement)(ca)), x.for_(na.applicativeEffect)(x.foldableArray)(ca)(za.setValue(ja))();
          if (ca instanceof I.Nothing) return Da.log(oa.monadEffectEffect)("in setChildByTag, couldn't find element with id " + L)();
          throw Error("Failed pattern match at Metajelo.FormUtil (line 472, column 3 - line 485, column 78): " + [ca.constructor.name]);
        };
      };
    };
  },
      Za = function Za(L) {
    return function (S) {
      return S < L ? [] : r.range(L)(S);
    };
  },
      eb = function eb(L) {
    return "FreeTextPolicy" === L ? n.pure(A.applicativeEither)(Ba.value) : "RefPolicy" === L ? n.pure(A.applicativeEither)(Ia.value) : A.Left.create("Unknown Policy: '" + (L + "'"));
  },
      Ua = function Ua(L) {
    return function (S) {
      return x.fold(x.foldableMaybe)(w.monoidString)(D.map(I.functorMaybe)(v.show(L))(S));
    };
  },
      fb = new Ka(function (L) {
    return I.fromJust()(A.hush(K.readResourceTypeGeneral(L)));
  }, v.show(R.showResourceTypeGeneral), v.show(R.showResourceTypeGeneral)),
      gb = new Ka(function (L) {
    return I.fromJust()(A.hush(K.readRelationType(L)));
  }, v.show(R.showRelationType), v.show(R.showRelationType)),
      hb = new Ka(function (L) {
    return I.fromJust()(A.hush(K.readInstitutionType(L)));
  }, v.show(R.showInstitutionType), v.show(R.showInstitutionType)),
      ib = new Ka(function (L) {
    return I.fromJust()(A.hush(K.readIdentifierType(L)));
  }, v.show(R.showIdentifierType), v.show(R.showIdentifierType)),
      jb = function jb(L) {
    return L instanceof ua ? !0 : !1;
  },
      Ma = new N.Generic(function (L) {
    if (L instanceof Ba) return new N.Inl(N.NoArguments.value);
    if (L instanceof Ia) return new N.Inr(N.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 285, column 1 - line 285, column 58): " + [L.constructor.name]);
  }, function (L) {
    if (L instanceof N.Inl) return Ba.value;
    if (L instanceof N.Inr) return Ia.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 285, column 1 - line 285, column 58): " + [L.constructor.name]);
  }),
      $a = new v.Show(B.genericShow(Ma)(B.genericShowSum(B.genericShowConstructor(B.genericShowArgsNoArguments)(new P.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(B.genericShowConstructor(B.genericShowArgsNoArguments)(new P.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      sb = new Ka(function () {
    var L = I.fromMaybe(Ba.value);
    return function (S) {
      return L(A.hush(eb(S)));
    };
  }(), v.show($a), v.show($a)),
      tb = new D.Functor(function (L) {
    return function (S) {
      if (S instanceof ua) return ua.create(D.map(I.functorMaybe)(L)(S.value0));
      if (S instanceof Ga) return Ga.create(D.map(I.functorMaybe)(L)(S.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 330, column 1 - line 332, column 48): " + [L.constructor.name, S.constructor.name]);
    };
  }),
      Oa = function Oa(L) {
    return function (S) {
      return function (ja) {
        return f.step(ja)(function () {
          var ca = I.isJust(ja) ? !0 : !1;
          return k.bind(b.widgetBind)(e.select(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([d.value(I.maybe("")(S.toOptionValue)(ja)), D.map(h.functorProps)(function () {
            var ra = S.fromOptionValue;
            return function (ya) {
              return ra(d.unsafeTargetValue(ya));
            };
          }())(d.onChange)])(r.cons(e.option(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([d.disabled(ca)])([e.text(l.widgetLiftWidget)("Select ...")]))(D.mapFlipped(D.functorArray)(E.upFromIncluding(L.Enum1())(wa.unfoldable1Array)(p.bottom(L.Bounded0())))(function (ra) {
            return e.option(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([d.value((0, S.toOptionValue)(ra))])([e.text(l.widgetLiftWidget)((0, S.toOptionLabel)(ra))]);
          }))))(function (ra) {
            return n.pure(b.widgetApplicative)(Oa(L)(S)(new I.Just(ra)));
          });
        }());
      };
    };
  },
      lb = function lb(L) {
    return function (S) {
      return function (ja) {
        return function (ca) {
          return function (ra) {
            return x.fold(L)(ja)(D.map(S)(ca)(ra));
          };
        };
      };
    };
  },
      Ja = function Ja(L) {
    L = lb(x.foldableMaybe)(I.functorMaybe)(w.monoidString)(la.toString)(L);
    L = f.debounce(w.monoidArray)(2E3)(L)(Qa);
    return cb(L);
  },
      ab = function ab(L) {
    return I.maybe(w.mempty(b.widgetMonoid(w.monoidArray)))(function (S) {
      return e.div(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([d.style({
        color: "red"
      })])([e.text(l.widgetLiftWidget)(v.show(L)(S))]);
    });
  },
      Ra = new H.Eq(J.genericEq(Ma)(J.genericEqSum(J.genericEqConstructor(J.genericEqNoArguments))(J.genericEqConstructor(J.genericEqNoArguments)))),
      mb = new O.Ord(function () {
    return Ra;
  }, function (L) {
    return function (S) {
      return U.genericCompare(Ma)(U.genericOrdSum(U.genericOrdConstructor(U.genericOrdNoArguments))(U.genericOrdConstructor(U.genericOrdNoArguments)))(L)(S);
    };
  }),
      Ta = new E.Enum(function () {
    return mb;
  }, C.genericPred(Ma)(C.genericEnumSum(C.genericEnumConstructor(C.genericEnumNoArguments))(G.genericTopConstructor(G.genericTopNoArguments))(C.genericEnumConstructor(C.genericEnumNoArguments))(G.genericBottomConstructor(G.genericBottomNoArguments))), C.genericSucc(Ma)(C.genericEnumSum(C.genericEnumConstructor(C.genericEnumNoArguments))(G.genericTopConstructor(G.genericTopNoArguments))(C.genericEnumConstructor(C.genericEnumNoArguments))(G.genericBottomConstructor(G.genericBottomNoArguments)))),
      Na = function Na(L) {
    return function (S) {
      return S instanceof I.Nothing ? "(None)" : Ua(L)(S);
    };
  },
      Sa = new Ka(function (L) {
    return A.hush(K.readBoolean(L));
  }, Na(v.showBoolean), Ua(v.showBoolean)),
      ub = new Ka(function () {
    var L = k.join(I.bindMaybe);
    return function (S) {
      return L(A.hush(K.readInstitutionContactType(S)));
    };
  }(), Na(R.showInstitutionContactType), Ua(R.showInstitutionContactType)),
      vb = new Ka(function () {
    var L = k.join(I.bindMaybe);
    return function (S) {
      return L(A.hush(K.readPolicyType(S)));
    };
  }(), Na(R.showPolicyType), Ua(R.showPolicyType)),
      nb = function nb(L) {
    return D.voidRight(b.widgetFunctor)(!L)(e.input(l.widgetLiftWidget)([d._type("checkbox"), d.checked(L), d.onChange]));
  },
      ob = function ob(L) {
    var S = nb(L);
    return f.step(L)(k.bind(b.widgetBind)(S)(function (ja) {
      return n.pure(b.widgetApplicative)(ob(ja));
    }));
  },
      pb = new p.Bounded(function () {
    return mb;
  }, G.genericBottom(Ma)(G.genericBottomSum(G.genericBottomConstructor(G.genericBottomNoArguments))), G.genericTop(Ma)(G.genericTopSum(G.genericTopConstructor(G.genericTopNoArguments)))),
      wb = new E.BoundedEnum(function () {
    return pb;
  }, function () {
    return Ta;
  }, C.genericCardinality(Ma)(C.genericBoundedEnumSum(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))), C.genericFromEnum(Ma)(C.genericBoundedEnumSum(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))), C.genericToEnum(Ma)(C.genericBoundedEnumSum(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments))(C.genericBoundedEnumConstructor(C.genericBoundedEnumNoArguments)))),
      qb = new m.Apply(function () {
    return tb;
  }, function (L) {
    return function (S) {
      if (L instanceof ua && S instanceof ua || L instanceof ua && S instanceof Ga || L instanceof Ga && S instanceof ua) return ua.create(m.apply(I.applyMaybe)(L.value0)(S.value0));
      if (L instanceof Ga && S instanceof Ga) return Ga.create(m.apply(I.applyMaybe)(L.value0)(S.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 333, column 1 - line 337, column 63): " + [L.constructor.name, S.constructor.name]);
    };
  }),
      W = new n.Applicative(function () {
    return qb;
  }, function (L) {
    return ua.create(new I.Just(L));
  }),
      da = function da(L) {
    return function (S) {
      var ja = sa.snd(S),
          ca = sa.fst(S),
          ra = new ua(I.Nothing.value);

      S = function () {
        var Ea = O.max(O.ordInt)(0)(ca - r.length(ja) | 0);
        return X.append(X.semigroupArray)(D.map(D.functorArray)(n.pure(W))(ja))(D.mapFlipped(D.functorArray)(Za(1)(Ea))(function (Fa) {
          return ra;
        }));
      }();

      var ya = function ya(Ea) {
        return f.step(Ea)(k.bind(b.widgetBind)(D.voidRight(b.widgetFunctor)(Ga.create(Wa(Ea)))(e.button(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([d.onClick])([e.text(l.widgetLiftWidget)("Delete")])))(function (Fa) {
          return n.pure(b.widgetApplicative)(ya(Fa));
        }));
      },
          Aa = function Aa(Ea) {
        return e.li_(q.shiftMapCofree(w.monoidArray))([])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(L(Wa(Ea)))(function (Fa) {
          return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(ya(new ua(Fa)))(function (Pa) {
            return n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Pa);
          });
        }));
      },
          La = function La(Ea) {
        if (Ea instanceof Ga) return f.step(new Ga(I.Nothing.value))(w.mempty(b.widgetMonoid(w.monoidArray)));
        if (Ea instanceof ua) return Aa(Ea);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 364, column 23 - line 366, column 35): " + [Ea.constructor.name]);
      };

      return e.div_(q.shiftMapCofree(w.monoidArray))([])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(function (Ea) {
        return function (Fa) {
          return f.loopS(w.monoidArray)(new sa.Tuple(Ea, Fa))(function (Pa) {
            return e.ul_(q.shiftMapCofree(w.monoidArray))([])(function () {
              sa.fst(Pa);
              var rb = sa.snd(Pa);
              return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(f.step(0)(D.voidRight(b.widgetFunctor)(n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(1))(e.button(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([d.onClick])([e.text(l.widgetLiftWidget)("Add item")]))))(function (Va) {
                return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(aa.traverse(aa.traversableArray)(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(La)(rb))(function (Xa) {
                  Xa = r.filter(jb)(Xa);
                  var kb = r.length(Xa) + Va | 0,
                      bb = D.mapFlipped(D.functorArray)(Za(1)(Va))(function (xb) {
                    return ra;
                  });
                  return n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(sa.Tuple.create(kb)(X.append(X.semigroupArray)(Xa)(bb)));
                });
              });
            }());
          });
        };
      }(ca)(S))(function (Ea) {
        return n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Q.second(Q.strongFn)(function () {
          var Fa = D.map(D.functorArray)(Wa);
          return function (Pa) {
            return r.catMaybes(Fa(Pa));
          };
        }())(Ea));
      }));
    };
  };

  c.menuSignal = Oa;
  c.textInput = Ja;

  c.dateInput = function (L) {
    var S = Z.unsafePerformEffect(function (ra) {
      return function () {
        var ya = fa.nowDateTime();
        ya = I.fromMaybe(ya)(A.hush(ra));
        ya = ba["try"](T.dateTimeToStr(ya))();
        return t.lmap(A.bifunctorEither)(v.show(ba.showError))(ya);
      };
    }(L));
    L = k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)));
    var ja = n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)));
    if (S instanceof A.Left) var ca = "";else if (S instanceof A.Right) ca = la.toString(S.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 152, column 31 - line 154, column 34): " + [S.constructor.name]);
    return L(ja(ca))(function (ra) {
      var ya = k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray))),
          Aa = n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)));
      if (S instanceof A.Left) var La = S.value0;else if (S instanceof A.Right) La = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 155, column 21 - line 157, column 18): " + [S.constructor.name]);
      return ya(Aa(La))(function (Ea) {
        return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([d._id("mjUI_dateInput")])(Ja(la.fromString(ra))))(function (Fa) {
          return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Z.unsafePerformEffect(db("mjUI_dateInput")("INPUT")(ra))))(function () {
            return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(f.display(function () {
              if (S instanceof A.Right) return w.mempty(b.widgetMonoid(w.monoidArray));
              if (S instanceof A.Left) return ab(v.showString)(new I.Just(S.value0));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 161, column 13 - line 163, column 40): " + [S.constructor.name]);
            }()))(function () {
              if (Fa instanceof I.Just) return n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Z.unsafePerformEffect(D.map(na.functorEffect)(t.lmap(A.bifunctorEither)(v.show(ba.showError)))(ba["try"](K.parseDate(Fa.value0)))));
              if (Fa instanceof I.Nothing) return n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(new A.Left("no date input"));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 164, column 3 - line 167, column 43): " + [Fa.constructor.name]);
            });
          });
        });
      });
    });
  };

  c.natInput = function (L) {
    L = k.bind(I.bindMaybe)(D.mapFlipped(I.functorMaybe)(L)(function () {
      var S = v.show(v.showInt);
      return function (ja) {
        return S(F.natToInt(ja));
      };
    }()))(la.fromString);
    return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(Ja(L))(function (S) {
      return n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(D.map(I.functorMaybe)(function () {
        var ja = Ca.readInt(10);
        return function (ca) {
          return F.intToNat(M.round(ja(la.toString(ca))));
        };
      }())(S));
    });
  };

  c.urlInput = function (L) {
    if (L instanceof A.Left) var S = "";else if (L instanceof A.Right) S = la.toString(xa.urlToNEString(L.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 200, column 15 - line 202, column 48): " + [L.constructor.name]);
    if (L instanceof A.Left) var ja = L.value0;else if (L instanceof A.Right) ja = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 196, column 15 - line 198, column 20): " + [L.constructor.name]);
    return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(Ja(la.fromString(S)))(function (ca) {
      var ra = k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray))),
          ya = n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)));
      if (ca instanceof I.Nothing) ca = new A.Left(ja);else if (ca instanceof I.Just) ca = xa.parsePublicURL(la.toString(ca.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 187, column 19 - line 189, column 46): " + [ca.constructor.name]);
      return ra(ya(ca))(function (Aa) {
        return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(f.display(function () {
          if (Aa instanceof A.Right) return w.mempty(b.widgetMonoid(w.monoidArray));
          if (Aa instanceof A.Left) return ab(v.showString)(new I.Just(Aa.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 190, column 13 - line 192, column 40): " + [Aa.constructor.name]);
        }()))(function () {
          return n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Aa);
        });
      });
    });
  };

  c.emailInput = function (L) {
    if (L instanceof A.Left) var S = "";else if (L instanceof A.Right) S = ka.toString(L.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 220, column 15 - line 222, column 33): " + [L.constructor.name]);
    if (L instanceof A.Left) var ja = L.value0;else if (L instanceof A.Right) ja = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 216, column 15 - line 218, column 20): " + [L.constructor.name]);
    return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(Ja(la.fromString(S)))(function (ca) {
      var ra = k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray))),
          ya = n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)));
      if (ca instanceof I.Nothing) ca = new A.Left(ja);else if (ca instanceof I.Just) ca = pa.validate(la.toString(ca.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 207, column 21 - line 209, column 43): " + [ca.constructor.name]);
      return ra(ya(ca))(function (Aa) {
        return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(f.display(function () {
          if (Aa instanceof A.Right) return w.mempty(b.widgetMonoid(w.monoidArray));
          if (Aa instanceof A.Left) return ab(v.showString)(new I.Just(Aa.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 210, column 13 - line 212, column 40): " + [Aa.constructor.name]);
        }()))(function () {
          return n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Aa);
        });
      });
    });
  };

  c.checkBoxS = ob;
  c.FreeTextPolicy = Ba;

  c.checkPolicy = function (L) {
    return function (S) {
      if (L instanceof Ba) {
        var ja = D.mapFlipped(A.functorEither);
        S = la.fromString(ea.trim(S));
        if (S instanceof I.Just) S = new A.Right(S.value0);else if (S instanceof I.Nothing) S = new A.Left("Empty string when NonEmptyString expected.");else throw Error("Failed pattern match at Metajelo.FormUtil (line 404, column 22 - line 406, column 63): " + [S.constructor.name]);
        return ja(S)(R.FreeTextPolicy.create);
      }

      if (L instanceof Ia) return D.mapFlipped(A.functorEither)(xa.parsePublicURL(S))(R.RefPolicy.create);
      throw Error("Failed pattern match at Metajelo.FormUtil (line 315, column 25 - line 317, column 52): " + [L.constructor.name]);
    };
  };

  c.polPolTypeIs = function (L) {
    if (L instanceof R.FreeTextPolicy) return Ba.value;
    if (L instanceof R.RefPolicy) return Ia.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 320, column 18 - line 322, column 29): " + [L.constructor.name]);
  };

  c.arrayView = da;

  c.nonEmptyArrayView = function (L) {
    return function (S) {
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(da(L)(Q.second(Q.strongFn)(lb(x.foldableMaybe)(I.functorMaybe)(w.monoidArray)(z.toArray))(S)))(function (ja) {
        return n.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Q.second(Q.strongFn)(z.fromArray)(ja));
      });
    };
  };

  c.errorDisplay = ab;

  c.runEffectInit = function (L) {
    return function (S) {
      return f.step(L)(k.bind(b.widgetBind)(oa.liftEffect(b.widgetMonadEff(w.monoidArray))(S))(function (ja) {
        return n.pure(b.widgetApplicative)(f.step(ja)(y.empty(b.widgetPlus(w.monoidArray))));
      }));
    };
  };

  c.evTargetElem = function (L) {
    return D.map(na.functorEffect)(V.fromNode)(Y.target(L));
  };

  c.isOptionMaybeBoolean = Sa;
  c.isOptionIdentifierType = ib;
  c.isOptionInstitutionType = hb;
  c.isOptionMaybeInstitutionContactType = ub;
  c.isOptionMaybePolicyType = vb;
  c.isOptionRelationType = gb;
  c.isOptionResourceTypeGeneral = fb;
  c.boundedEnumPolPolType = wb;
  c.isOptionPolPolType = sb;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var c = a["Metajelo.View"],
      f = a["Concur.Core.LiftWidget"],
      l = a["Concur.Core.Types"],
      h = a["Concur.React.DOM"],
      b = a["Concur.React.Props"],
      e = a["Control.Alt"],
      d = a["Control.Bind"],
      n = a["Control.Category"],
      m = a["Data.Array"],
      k = a["Data.Array.NonEmpty"],
      q = a["Data.Array.NonEmpty.Internal"],
      y = a["Data.Foldable"],
      r = a["Data.Functor"],
      z = a["Data.HeytingAlgebra"],
      t = a["Data.Maybe"],
      p = a["Data.Monoid"],
      A = a["Data.Natural"],
      E = a["Data.Profunctor.Strong"],
      H = a["Data.Semigroup"],
      x = a["Data.Show"],
      D = a["Data.String.CodePoints"],
      N = a["Data.String.NonEmpty.Internal"],
      G = a["Data.String.Utils"],
      C = a["Data.Unfoldable"],
      J = a["Data.Unfoldable1"],
      U = a["Foreign.Object"],
      B = a["Metajelo.CSS.Common.ClassNames"],
      M = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      I = a["Metajelo.CSS.Web.ClassProps"],
      w = a["Metajelo.CSS.Web.Util"],
      F = a["Metajelo.Types"],
      O = a["Text.Email.Parser"],
      Q = a["Text.URL.Validate"],
      X = function () {
    var K = r.map(r.functorArray)(D.singleton);
    return function (T) {
      return K(D.toCodePointArray(T));
    };
  }(),
      v = function v(K) {
    var T = h.text(K);
    return function (Y) {
      return T(N.toString(Y));
    };
  },
      ea = h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([h.text(f.widgetLiftWidget)(" ")]),
      la = function () {
    var K = y.intercalate(y.foldableArray)(p.monoidArray)([ea]),
        T = r.map(r.functorArray)(J.singleton(J.unfoldable1Array));
    return function (Y) {
      return K(T(Y));
    };
  }(),
      P = function P(K) {
    return h.div(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.institutionPolicy])(la([function (T) {
      var Y = function () {
        if (T instanceof t.Nothing) return {
          text: "May apply to product (unverified)",
          cls: M.appliesMaybe
        };
        if (T instanceof t.Just && T.value0) return {
          text: "Applies to product",
          cls: M.appliesYes
        };
        if (T instanceof t.Just && !T.value0) return {
          text: "Does not apply to product",
          cls: M.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 259, column 10 - line 262, column 75): " + [T.constructor.name]);
      }();

      return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([w.cList([B.applies, Y.cls])])([function (ka) {
        return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.appliesInfo])([h.text(f.widgetLiftWidget)(ka)]);
      }(Y.text)]);
    }(K.appliesToProduct), y.foldMap(y.foldableMaybe)(l.widgetMonoid(p.monoidArray))(function (T) {
      return h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.policyType])([h.text(f.widgetLiftWidget)(x.show(F.showPolicyType)(T))]), h.text(f.widgetLiftWidget)(" Policy:")]);
    })(K.policyType), function (T) {
      var Y = h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.policy]),
          ka = J.singleton(J.unfoldable1Array);
      if (T instanceof F.FreeTextPolicy) T = v(f.widgetLiftWidget)(T.value0);else if (T instanceof F.RefPolicy) T = Q.urlToString(T.value0), T = h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([h.text(f.widgetLiftWidget)(T)]);else throw Error("Failed pattern match at Metajelo.View (line 252, column 5 - line 255, column 40): " + [T.constructor.name]);
      return Y(ka(T));
    }(K.policy)]));
  },
      aa = function aa(K) {
    return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.institutionName])([v(f.widgetLiftWidget)(K.institutionName)]);
  },
      sa = function sa(K) {
    return function (T) {
      return y.foldMap(y.foldableMaybe)(p.monoidArray)(n.identity(n.categoryFn))(m.init(T));
    };
  },
      wa = function wa(K) {
    return function (T) {
      return function (Y) {
        return function (ka) {
          return function (pa) {
            var xa = U.fromFoldableWith(K)(H.append(ka)),
                u = r.map(T)(E.fanout(n.categoryFn)(E.strongFn)(pa)(J.singleton(Y)));
            return function (V) {
              return xa(u(V));
            };
          };
        };
      };
    };
  },
      na = function na(K) {
    var T = O.toString(K.emailAddress),
        Y = h.text(f.widgetLiftWidget);
    if (K.contactType instanceof t.Nothing) K = ".";else if (K.contactType instanceof t.Just) K = " (" + (x.show(F.showInstitutionContactType)(K.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 186, column 24 - line 188, column 41): " + [K.contactType.constructor.name]);
    Y = Y(K);
    return h.span_(l.widgetShiftMap)([I.institutionContact])(e.alt(l.widgetAlt(p.monoidArray))(e.alt(l.widgetAlt(p.monoidArray))(h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([h.text(f.widgetLiftWidget)("Institution Contact: ")]))(h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.contactEmail, b.href("mailto:" + T)])([h.text(f.widgetLiftWidget)(T)])))(h.span_(l.widgetShiftMap)([I.contactType])(Y)));
  },
      oa = function oa(K) {
    return h["cite'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([v(f.widgetLiftWidget)(K)]);
  },
      Da = function Da(K) {
    if (K.idType instanceof F.ARK) return h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(N.toString(K.id))])([oa(K.id)]);

    if (K.idType instanceof F.ArXiv) {
      var T = "https://arxiv.org/abs/" + N.toString(K.id);
      return h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([oa(K.id)]);
    }

    if (K.idType instanceof F.Bibcode) return T = "https://ui.adsabs.harvard.edu/abs/" + (N.toString(K.id) + "/abstract"), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([oa(K.id)]);
    if (K.idType instanceof F.DOI) return T = "https://doi.org/" + N.toString(K.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([oa(K.id)]);
    if (K.idType instanceof F.EAN13) return oa(K.id);
    if (K.idType instanceof F.EISSN) return T = "https://www.worldcat.org/ISSN/" + N.toString(K.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([oa(K.id)]);
    if (K.idType instanceof F.Handle) return T = "http://hdl.handle.net/" + N.toString(K.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([oa(K.id)]);
    if (K.idType instanceof F.IGSN) return T = "http://igsn.org/" + N.toString(K.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([oa(K.id)]);
    if (K.idType instanceof F.ISBN) return oa(K.id);
    if (K.idType instanceof F.ISSN) return T = "https://www.worldcat.org/ISSN/" + N.toString(K.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([oa(K.id)]);
    if (K.idType instanceof F.ISTC) return oa(K.id);
    if (K.idType instanceof F.LISSN) return T = "https://www.worldcat.org/ISSN/" + N.toString(K.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([oa(K.id)]);
    if (K.idType instanceof F.LSID) return T = "http://www.lsid.info/resolver/?lsid=" + N.toString(K.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([oa(K.id)]);
    if (K.idType instanceof F.PMID) return T = "https://www.ncbi.nlm.nih.gov/pubmed/" + N.toString(K.id), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(T)])([oa(K.id)]);
    if (K.idType instanceof F.PURL) return h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(N.toString(K.id))])([oa(K.id)]);
    if (K.idType instanceof F.UPC) return oa(K.id);
    if (K.idType instanceof F.URL) return h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([b.href(N.toString(K.id))])([oa(K.id)]);
    if (K.idType instanceof F.URN) return oa(K.id);
    throw Error("Failed pattern match at Metajelo.View (line 208, column 1 - line 208, column 47): " + [K.constructor.name]);
  },
      ba = function ba(K) {
    return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.identifier])([h.span_(l.widgetShiftMap)([I.idType])(h.text(f.widgetLiftWidget)(x.show(F.showIdentifierType)(K.idType))), h.span_(l.widgetShiftMap)([I.idUrl])(Da(K))]);
  },
      fa = function fa(K) {
    return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.relatedId])([h.span_(l.widgetShiftMap)([I.relType])(h.text(f.widgetLiftWidget)(x.show(F.showRelationType)(K.relType))), ea, ba({
      id: K.id,
      idType: K.idType
    })]);
  },
      Z = function Z(K) {
    return function (T) {
      return function (Y) {
        if (T) return K;

        if (y.any(y.foldableArray)(z.heytingAlgebraBoolean)(function (pa) {
          return G.endsWith(pa)(K);
        })([";", ".", ","])) {
          var ka = X(K);
          return G.fromCharArray(sa(p.monoidString)(ka)) + Y;
        }

        return K + Y;
      };
    };
  },
      Ca = function Ca(K) {
    var T = aa(K),
        Y = h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([h.text(f.widgetLiftWidget)("("), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.institutionId])([ba(K.institutionID)]), h.text(f.widgetLiftWidget)("; "), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.institutionType])([h.text(f.widgetLiftWidget)(x.show(F.showInstitutionType)(K.institutionType))]), h.text(f.widgetLiftWidget)(Z(")")(t.isNothing(K.superOrganizationName))(","))]);
    if (K.superOrganizationName instanceof t.Nothing) var ka = p.mempty(l.widgetMonoid(p.monoidArray));else if (K.superOrganizationName instanceof t.Just) ka = h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([h.text(f.widgetLiftWidget)("a member of "), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.superOrg])([h.text(f.widgetLiftWidget)(Z(N.toString(K.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 148, column 7 - line 154, column 10): " + [K.superOrganizationName.constructor.name]);
    return la([T, Y, ka, na(K.institutionContact), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.sustainability])([h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.missionStatement, b.href(Q.urlToString(K.institutionSustainability.missionStatementURL))])([h.text(f.widgetLiftWidget)("Mission Statement")]), h.text(f.widgetLiftWidget)("; "), h.a(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.fundingStatement, b.href(Q.urlToString(K.institutionSustainability.fundingStatementURL))])([h.text(f.widgetLiftWidget)("Funding Statement")]), h.text(f.widgetLiftWidget)(".")]), h.ul(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.institutionPolicies])(r.map(r.functorArray)(function (pa) {
      return h["li'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([P(pa)]);
    })(k.toArray(K.institutionPolicies))), function (pa) {
      if (pa) pa = "Versioned";else {
        if (pa) throw Error("Failed pattern match at Metajelo.View (line 175, column 14 - line 177, column 31): " + [pa.constructor.name]);
        pa = "Unversioned";
      }
      return h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.versioning])([h.text(f.widgetLiftWidget)(pa)]);
    }(K.versioning)]);
  },
      R = function R(K) {
    if (K.resourceID instanceof t.Just) var T = h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.resourceId])([ba(K.resourceID.value0), h.text(f.widgetLiftWidget)(".")]);else if (K.resourceID instanceof t.Nothing) T = p.mempty(l.widgetMonoid(p.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 126, column 17 - line 128, column 24): " + [K.resourceID.constructor.name]);
    var Y = [h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.basicMetadata, I.creator])([v(f.widgetLiftWidget)(K.basicMetadata.creator)]), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.basicMetadata, I.pubyear])([h.text(f.widgetLiftWidget)(x.show(x.showInt)(A.natToInt(K.basicMetadata.publicationYear)))]), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.basicMetadata, I.title])([h.text(f.widgetLiftWidget)(Z(N.toString(K.basicMetadata.title))(t.isNothing(K.resourceID))(","))])];
    T = H.append(H.semigroupArray)(Y)([h["span'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([aa(K.location), h.text(f.widgetLiftWidget)(".")]), T]);
    return h.div(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.product])(la(H.append(H.semigroupArray)([h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.productCitation])([h["cite'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)(la(T))])])(Ca(K.location))));
  };

  c.spacify = la;

  c.mkRecordWidget = function (K) {
    var T = function () {
      var pa = r.map(q.functorNonEmptyArray)(function (xa) {
        return h.li(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.relatedId])([xa]);
      })(r.map(q.functorNonEmptyArray)(fa)(K.relatedIdentifiers));
      return h.ul(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.relatedIdList])(k.toArray(pa));
    }(),
        Y = wa(q.foldableNonEmptyArray)(q.functorNonEmptyArray)(q.unfoldable1NonEmptyArray)(q.semigroupNonEmptyArray)(function (pa) {
      return x.show(F.showResourceTypeGeneral)(pa.resourceType.generalType) + (": " + pa.resourceType.description);
    })(K.supplementaryProducts),
        ka = function ka(pa) {
      pa = d.join(d.bindArray)(C.fromMaybe(C.unfoldableArray)(r.map(t.functorMaybe)(k.toArray)(U.lookup(pa)(Y))));
      var xa = h.span_(l.widgetShiftMap)([I.resourceType])(y.fold(y.foldableMaybe)(l.widgetMonoid(p.monoidArray))(r.mapFlipped(t.functorMaybe)(m.head(pa))(function (u) {
        return e.alt(l.widgetAlt(p.monoidArray))(e.alt(l.widgetAlt(p.monoidArray))(h.span_(l.widgetShiftMap)([I.resourceTypeGen])(h.text(f.widgetLiftWidget)(x.show(F.showResourceTypeGeneral)(u.resourceType.generalType))))(h.span_(l.widgetShiftMap)([I.resourceTypeDescr])(h.text(f.widgetLiftWidget)(u.resourceType.description))))(h["br'"](f.widgetLiftWidget));
      })));
      return h["div'"](l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)(m.cons(xa)(r.map(r.functorArray)(R)(pa)));
    };

    x.show(F.showIdentifierType)(K.identifier.idType);
    return h.div(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.record])([h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.productsHeader])([h.span_(l.widgetShiftMap)([I.recordId])(ba(K.identifier))]), h.ul(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.productList])(r.map(r.functorArray)(function (pa) {
      return h.li_(l.widgetShiftMap)([I.productGroup])(ka(pa));
    })(U.keys(Y))), h.span(l.widgetMultiAlternative(p.monoidArray))(l.widgetShiftMap)([I.relatedIdsHeader])([]), T]);
  };

  c.mkSupplementaryProductWidget = R;
  c.locElems = Ca;
})(PS);

(function (a) {
  a.pickFn = function (c, f) {
    for (var l = {}, h = 0; h < c.length; h++) {
      "undefined" !== typeof f[c[h]] && (l[c[h]] = f[c[h]]);
    }

    return l;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a.unsafeGet = function (c) {
    return function (f) {
      return f[c];
    };
  };

  a.unsafeSet = function (c) {
    return function (f) {
      return function (l) {
        var h = {},
            b;

        for (b in l) {
          ({}).hasOwnProperty.call(l, b) && (h[b] = l[b]);
        }

        h[c] = f;
        return h;
      };
    };
  };

  a.unsafeDelete = function (c) {
    return function (f) {
      var l = {},
          h;

      for (h in f) {
        h !== c && {}.hasOwnProperty.call(f, h) && (l[h] = f[h]);
      }

      return l;
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
      f = a["Data.Symbol"],
      l = a["Record.Unsafe"];

  c.get = function (h) {
    return function (b) {
      return function (e) {
        return function (d) {
          return l.unsafeGet(f.reflectSymbol(h)(e))(d);
        };
      };
    };
  };

  c.insert = function (h) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return function (m) {
              return l.unsafeSet(f.reflectSymbol(h)(d))(n)(m);
            };
          };
        };
      };
    };
  };

  c["delete"] = function (h) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return l.unsafeDelete(f.reflectSymbol(h)(d))(n);
          };
        };
      };
    };
  };
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
  a["Record.Extra"] = a["Record.Extra"] || {};

  var c = a["Record.Extra"],
      f = a["Data.List.Types"],
      l = a["Data.Monoid"],
      h = a["Data.Symbol"],
      b = a["Type.Data.RowList"],
      e = function e(d) {
    this.keysImpl = d;
  };

  a = new e(function (d) {
    return l.mempty(f.monoidList);
  });

  c.keys = function (d) {
    return function (n) {
      return function (m) {
        return (0, n.keysImpl)(b.RLProxy.value);
      };
    };
  };

  c.nilKeys = a;

  c.consKeys = function (d) {
    return function (n) {
      return new e(function (m) {
        m = (0, n.keysImpl)(b.RLProxy.value);
        var k = h.reflectSymbol(d)(h.SProxy.value);
        return new f.Cons(k, m);
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
      l = a["Control.Monad.State.Class"],
      h = a["Control.Monad.State.Trans"],
      b = a["Data.Array"],
      e = a["Data.Function.Uncurried"],
      d = a["Data.Identity"],
      n = a["Data.List.Types"],
      m = a["Data.Maybe"],
      k = a["Data.Symbol"],
      q = a["Foreign.Object"],
      y = a.Record,
      r = a["Record.Extra"],
      z = a["Type.Data.Row"],
      t = function () {
    function I() {}

    I.value = new I();
    return I;
  }(),
      p = function p(I) {
    this.getAllOption = I;
  },
      A = function A(I) {
    this["getAll'"] = I;
  },
      E = function E(I) {
    this.fromRecordOption = I;
  },
      H = function H(I) {
    this["fromRecord'"] = I;
  },
      x = function x(I) {
    return function (w) {
      return function (F) {
        F = b.fromFoldable(n.foldableList)(r.keys()(F)(z.RProxy.value));
        return e.runFn2(f.pickFn)(F);
      };
    };
  };

  a = new p(function (I) {
    return function (w) {
      return new m.Just({});
    };
  });

  var D = q.empty,
      N = new E(function (I) {
    return function (w) {
      return D;
    };
  }),
      G = function G(I) {
    return function (w) {
      return function (F) {
        return function (O) {
          var Q = k.reflectSymbol(I)(k.SProxy.value),
              X = q.alter(function (v) {
            return w(v);
          })(Q)(O);
          O = w(q.lookup(Q)(O));
          return {
            option: X,
            value: O
          };
        };
      };
    };
  },
      C = function C(I) {
    return function (w) {
      return function (F) {
        return function (O) {
          return function (Q) {
            return G(I)(function (X) {
              return m.Nothing.value;
            })(O)(Q).option;
          };
        };
      };
    };
  },
      J = function J(I) {
    return function (w) {
      return function (F) {
        return function (O) {
          return G(I)(function (Q) {
            return Q;
          })(F)(O).value;
        };
      };
    };
  },
      U = function U(I) {
    return function (w) {
      return function (F) {
        return function (O) {
          return function (Q) {
            return G(I)(function (X) {
              return new m.Just(O);
            })(F)(Q).option;
          };
        };
      };
    };
  },
      B = function B(I) {
    return function (w) {
      return function (F) {
        return function (O) {
          return function (Q) {
            if (O instanceof m.Just) return U(I)()(F)(O.value0)(Q);
            if (O instanceof m.Nothing) return Q;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [O.constructor.name]);
          };
        };
      };
    };
  },
      M = function M(I) {
    return function (w) {
      return function (F) {
        return function (O) {
          return function (Q) {
            return function (X) {
              return G(I)(function (v) {
                return new m.Just(Q);
              })(O)(X).option;
            };
          };
        };
      };
    };
  };

  c.fromRecord = function (I) {
    return I["fromRecord'"];
  };

  c.empty = D;
  c.get = J;

  c.getAll = function (I) {
    return I["getAll'"];
  };

  c.getSubset = function (I) {
    return function (w) {
      return function (F) {
        return function (O) {
          return function (Q) {
            return (0, O["getAll'"])(x()()(F)(Q));
          };
        };
      };
    };
  };

  c.getWithDefault = function (I) {
    return function (w) {
      return function (F) {
        return function (O) {
          return function (Q) {
            Q = J(I)()(O)(Q);
            if (Q instanceof m.Just) return Q.value0;
            if (Q instanceof m.Nothing) return F;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [Q.constructor.name]);
          };
        };
      };
    };
  };

  c.maySetOptState = function (I) {
    return function (w) {
      return function (F) {
        return function (O) {
          return function (Q) {
            return l.put(h.monadStateStateT(d.monadIdentity))(B(I)()(F)(O)(Q));
          };
        };
      };
    };
  };

  c.fromRecordAny = function (I) {
    return function (w) {
      return new H((0, I.fromRecordOption)(t.value));
    };
  };

  c.fromRecordOptionNil = N;

  c.fromRecordOptionCons = function (I) {
    return function (w) {
      return function (F) {
        return function (O) {
          return function (Q) {
            return function (X) {
              return new E(function (v) {
                return function (ea) {
                  var la = y["delete"](I)()()(k.SProxy.value)(ea);
                  la = (0, w.fromRecordOption)(t.value)(la);
                  ea = y.get(I)()(k.SProxy.value)(ea);
                  return M(I)()()(k.SProxy.value)(ea)(la);
                };
              });
            };
          };
        };
      };
    };
  };

  c.getAllAny = function (I) {
    return function (w) {
      return new A((0, w.getAllOption)(t.value));
    };
  };

  c.getAllOptionNil = a;

  c.getAllOptionCons = function (I) {
    return function (w) {
      return function (F) {
        return function (O) {
          return function (Q) {
            return function (X) {
              return new p(function (v) {
                return function (ea) {
                  var la = C(I)()()(k.SProxy.value)(ea);
                  la = (0, X.getAllOption)(t.value)(la);
                  ea = J(I)()(k.SProxy.value)(ea);

                  if (la instanceof m.Just) {
                    if (ea instanceof m.Just) return new m.Just(y.insert(I)()()(k.SProxy.value)(ea.value0)(la.value0));
                    if (ea instanceof m.Nothing) return m.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [ea.constructor.name]);
                  }

                  if (la instanceof m.Nothing) return m.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [la.constructor.name]);
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

  a["Web.File.FileList"].item = function (l) {
    var h = c._item(l);

    return function (b) {
      return f.toMaybe(h(b));
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
      return function (l) {
        return function (h) {
          return function () {
            return h.addEventListener(c, f, l);
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
      l = a["Data.Either"],
      h = a["Data.List.Types"],
      b = a["Data.Monoid"],
      e = a["Data.Show"],
      d = a["Effect.Aff"],
      n = a["Effect.Exception"],
      m = a.Foreign,
      k = a["Web.Event.EventTarget"],
      q = a["Web.File.FileReader"],
      y = a["Web.HTML.Event.EventTypes"];

  a = function (r) {
    return function (z) {
      return function (t) {
        return d.makeAff(function (p) {
          var A = function A(E) {
            return p(l.Right.create(E));
          };

          return function () {
            var E = q.fileReader(),
                H = q.toEventTarget(E),
                x = k.eventListener(function (N) {
              return p(l.Left.create(n.error("error")));
            })(),
                D = k.eventListener(function (N) {
              return function () {
                var G = q.result(E)();
                return l.either(function (C) {
                  return p(l.Left.create(n.error(e.show(h.showNonEmptyList(m.showForeignError))(C))));
                })(A)(f.runExcept(r(G)))();
              };
            })();
            k.addEventListener(y.error)(x)(!1)(H)();
            k.addEventListener(y.load)(D)(!1)(H)();
            z(t)(E)();
            return b.mempty(d.monoidCanceler);
          };
        });
      };
    };
  }(m.readString)(q.readAsText);

  c.readAsText = a;
})(PS);

(function (a) {
  a._read = function (c, f, l) {
    var h = Object.prototype.toString.call(l);
    return 0 === h.indexOf("[object HTML") && h.indexOf("Element]") === h.length - 8 ? f(l) : c;
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
      l = a["Data.Maybe"];

  c.fromElement = function (h) {
    return f._read(l.Nothing.value, l.Just.create, h);
  };

  c.click = f.click;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var c = a["Metajelo.UI"],
      f = a["Concur.Core.FRP"],
      l = a["Concur.Core.LiftWidget"],
      h = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      n = a["Concur.React.Run"],
      m = a["Control.Applicative"],
      k = a["Control.Bind"],
      q = a["Control.Cofree"],
      y = a["Control.Monad.Except.Trans"],
      r = a["Control.Monad.Maybe.Trans"],
      z = a["Control.Monad.State"],
      t = a["Control.Monad.State.Class"],
      p = a["Control.Monad.State.Trans"],
      A = a["Control.Plus"],
      E = a["Data.Array"],
      H = a["Data.Array.NonEmpty"],
      x = a["Data.Array.NonEmpty.Internal"],
      D = a["Data.Bifunctor"],
      N = a["Data.DateTime"],
      G = a["Data.Either"],
      C = a["Data.Enum"],
      J = a["Data.Foldable"],
      U = a["Data.Functor"],
      B = a["Data.Identity"],
      M = a["Data.Maybe"],
      I = a["Data.Maybe.First"],
      w = a["Data.Monoid"],
      F = a["Data.Semigroup"],
      O = a["Data.Show"],
      Q = a["Data.String.Common"],
      X = a["Data.String.NonEmpty.Internal"],
      v = a["Data.Symbol"],
      ea = a["Data.Traversable"],
      la = a["Data.Tuple"],
      P = a["Data.UUID"],
      aa = a.Effect,
      sa = a["Effect.Aff.Class"],
      wa = a["Effect.Class"],
      na = a["Effect.Class.Console"],
      oa = a["Effect.Exception"],
      Da = a["Effect.Now"],
      ba = a["Effect.Unsafe"],
      fa = a.Global,
      Z = a["Metajelo.CSS.UI.ClassProps"],
      Ca = a["Metajelo.CSS.Web.ClassProps"],
      R = a["Metajelo.FormUtil"],
      K = a["Metajelo.Types"],
      T = a["Metajelo.View"],
      Y = a["Metajelo.XPaths"],
      ka = a["Metajelo.XPaths.Read"],
      pa = a["Metajelo.XPaths.Write"],
      xa = a["Nonbili.DOM"],
      u = a.Option,
      V = a["Record.Extra"],
      ia = a["Text.URL.Validate"],
      ta = a["Web.DOM.Document"],
      ma = a["Web.DOM.Element"],
      ha = a["Web.File.File"],
      qa = a["Web.File.FileList"],
      za = a["Web.File.FileReader.Aff"],
      va = a["Web.HTML"],
      Ba = a["Web.HTML.HTMLDocument"],
      Ia = a["Web.HTML.HTMLElement"],
      ua = a["Web.HTML.HTMLInputElement"],
      Ga = a["Web.HTML.Window"],
      Ka = function Ka(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.tooltip])(W);
  },
      Ya = e.div_(b.widgetShiftMap)([Z.tooltip])(A.empty(b.widgetPlus(w.monoidArray))),
      Wa = function Wa(W) {
    return function () {
      var da = va.window();
      da = Ga.document(da)();
      da = Ba.toDocument(da);
      da = ta.createElement("a")(da)();
      ma.setAttribute("download")("metajelo.xml")(da)();
      ma.setAttribute("href")("data:text/plain;charset=utf-8," + W)(da)();
      da = Ia.fromElement(da);
      if (da instanceof M.Just) da = Ia.click(da.value0);else if (da instanceof M.Nothing) da = na.log(wa.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + W);else throw Error("Failed pattern match at Metajelo.UI (line 118, column 26 - line 122, column 18): " + [da.constructor.name]);
      return da;
    };
  },
      Qa = function Qa(W) {
    return function (da) {
      return u.getWithDefault(W)()(u.empty);
    };
  },
      cb = function cb(W) {
    var da = X.fromString("urn:uuid:"),
        L = u.get(new v.IsSymbol(function () {
      return "id";
    }))()(v.SProxy.value)(W);
    return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(function () {
      if (L instanceof M.Just) return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(new M.Just(L.value0));
      if (L instanceof M.Nothing) return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(R.runEffectInit(P.emptyUUID)(P.genUUID))(function (S) {
        return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(k.bind(M.bindMaybe)(da)(function (ja) {
          return k.bind(M.bindMaybe)(X.fromString(P.toString(S)))(function (ca) {
            return m.pure(M.applicativeMaybe)(F.append(X.semigroupNonEmptyString)(ja)(ca));
          });
        }));
      });
      throw Error("Failed pattern match at Metajelo.UI (line 584, column 15 - line 591, column 30): " + [L.constructor.name]);
    }())(function (S) {
      return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
        return "id";
      }))()(v.SProxy.value)(S)))(function () {
        return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
          return "idType";
        }))()(v.SProxy.value)(new M.Just(K.URN.value)));
      }))(W));
    });
  },
      db = function db(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.format])(Ka(R.textInput(W)));
  },
      Za = function Za(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.formatList])(R.arrayView(db)(W));
  },
      eb = function eb(W) {
    return function () {
      return {
        lastModified: Da.nowDateTime(),
        date: W.date,
        identifier: W.identifier,
        relatedIdentifiers: W.relatedIdentifiers,
        supplementaryProducts: W.supplementaryProducts
      };
    };
  },
      Ua = function Ua(W) {
    var da = u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "fundingStatementURL";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "missionStatementURL";
    }))(u.fromRecordOptionNil)()()()())()()()())())(W),
        L = new G.Right(W.missionStatementURL),
        S = new G.Right(W.fundingStatementURL);
    return z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(v.SProxy.value)(new M.Just(L))))(function () {
      return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(v.SProxy.value)(new M.Just(S)));
    }))(da);
  },
      fb = function fb(W) {
    var da = new G.Right(W.url);
    W = u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "relationType";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "url";
    }))(u.fromRecordOptionNil)()()()())()()()())())(W);
    return z.execState(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
      return "url_Ei";
    }))()(v.SProxy.value)(new M.Just(da))))(W);
  },
      gb = function gb(W) {
    if (W.policy instanceof K.FreeTextPolicy) var da = new M.Just(W.policy.value0);else if (W.policy instanceof K.RefPolicy) da = X.fromString(ia.urlToString(W.policy.value0));else throw Error("Failed pattern match at Metajelo.UI (line 330, column 20 - line 332, column 54): " + [W.policy.constructor.name]);
    var L = u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "appliesToProduct";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "policy";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "policyType";
    }))(u.fromRecordOptionNil)()()()())()()()())()()()())())(W);
    return z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
      return "policy_str";
    }))()(v.SProxy.value)(da)))(function () {
      return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
        return "polPolType";
      }))()(v.SProxy.value)(M.Just.create(R.polPolTypeIs(W.policy)))))(function () {
        return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
          return "policy_ei";
        }))()(v.SProxy.value)(M.Just.create(new G.Right(W.policy))));
      });
    }))(L);
  },
      hb = function hb(W) {
    return z.execState(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
      return "email_Ei";
    }))()(v.SProxy.value)(M.Just.create(new G.Right(W.emailAddress)))))(u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "contactType";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "emailAddress";
    }))(u.fromRecordOptionNil)()()()())()()()())())(W));
  },
      ib = function ib(W) {
    var da = u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionContact";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionID";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionName";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionPolicies";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionSustainability";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "institutionType";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "superOrganizationName";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "versioning";
    }))(u.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(W),
        L = u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "id";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "idType";
    }))(u.fromRecordOptionNil)()()()())()()()())())(W.institutionID),
        S = hb(W.institutionContact),
        ja = Ua(W.institutionSustainability),
        ca = U.map(x.functorNonEmptyArray)(gb)(W.institutionPolicies),
        ra = H.length(W.institutionPolicies);
    return z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
      return "institutionID_opt";
    }))()(v.SProxy.value)(new M.Just(L))))(function () {
      return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
        return "_numPolicies";
      }))()(v.SProxy.value)(new M.Just(ra))))(function () {
        return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
          return "iSustain_opt";
        }))()(v.SProxy.value)(new M.Just(ja))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
            return "institutionContact_opt";
          }))()(v.SProxy.value)(new M.Just(S))))(function () {
            return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
              return "institutionPolicies_opt";
            }))()(v.SProxy.value)(new M.Just(ca)));
          });
        });
      });
    }))(da);
  },
      jb = function jb(W) {
    var da = u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "basicMetadata";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "format";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "location";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "resourceID";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "resourceType";
    }))(u.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(W),
        L = u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "description";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "generalType";
    }))(u.fromRecordOptionNil)()()()())()()()())())(W.resourceType),
        S = U.map(M.functorMaybe)(u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "id";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "idType";
    }))(u.fromRecordOptionNil)()()()())()()()())()))(W.resourceID),
        ja = U.map(M.functorMaybe)(fb)(W.resourceMetadataSource),
        ca = ib(W.location),
        ra = u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "creator";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "publicationYear";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "title";
    }))(u.fromRecordOptionNil)()()()())()()()())()()()())())(W.basicMetadata),
        ya = E.length(W.format);
    return z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(v.SProxy.value)(new M.Just(ra))))(function () {
      return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
        return "resourceID_opt";
      }))()(v.SProxy.value)(S)))(function () {
        return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
          return "resourceType_opt";
        }))()(v.SProxy.value)(new M.Just(L))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
            return "_numFormats";
          }))()(v.SProxy.value)(new M.Just(ya))))(function () {
            return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(v.SProxy.value)(ja)))(function () {
              return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(v.SProxy.value)(new M.Just(ca)));
            });
          });
        });
      });
    }))(da);
  },
      Ma = function Ma(W) {
    var da = U.map(x.functorNonEmptyArray)(jb)(W.supplementaryProducts),
        L = U.map(x.functorNonEmptyArray)(u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "id";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "idType";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "relType";
    }))(u.fromRecordOptionNil)()()()())()()()())()()()())()))(W.relatedIdentifiers),
        S = u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "date";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "identifier";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "lastModified";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "supplementaryProducts";
    }))(u.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(W),
        ja = u.fromRecord(u.fromRecordAny(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "id";
    }))(u.fromRecordOptionCons(new v.IsSymbol(function () {
      return "idType";
    }))(u.fromRecordOptionNil)()()()())()()()())())(W.identifier),
        ca = H.length(W.supplementaryProducts),
        ra = H.length(W.relatedIdentifiers);
    return z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
      return "identifier_opt";
    }))()(v.SProxy.value)(new M.Just(ja))))(function () {
      return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
        return "date_Ei";
      }))()(v.SProxy.value)(M.Just.create(new G.Right(W.date)))))(function () {
        return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
          return "_numRelIds";
        }))()(v.SProxy.value)(new M.Just(ra))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
            return "relId_opts";
          }))()(v.SProxy.value)(new M.Just(L))))(function () {
            return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
              return "_numSupProds";
            }))()(v.SProxy.value)(new M.Just(ca))))(function () {
              return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                return "supProd_opts";
              }))()(v.SProxy.value)(new M.Just(da)));
            });
          });
        });
      });
    }))(S);
  },
      $a = function () {
    var W = D.lmap(G.bifunctorEither)(function (L) {
      return oa.error("Error reading XML - please make sure it is well-formed.");
    }),
        da = k.bind(b.widgetBind)(e.input(l.widgetLiftWidget)([d._type("file"), U.map(h.functorProps)(R.evTargetElem)(d.onChange)]))(function (L) {
      return k.bind(b.widgetBind)(wa.liftEffect(b.widgetMonadEff(w.monoidArray))(r.runMaybeT(k.bind(r.bindMaybeT(aa.monadEffect))(L)(function (S) {
        return k.bind(r.bindMaybeT(aa.monadEffect))(r.MaybeT(m.pure(aa.applicativeEffect)(ua.fromElement(S))))(function (ja) {
          return k.bind(r.bindMaybeT(aa.monadEffect))(r.MaybeT(ua.files(ja)))(function (ca) {
            return k.bind(r.bindMaybeT(aa.monadEffect))(r.MaybeT(m.pure(aa.applicativeEffect)(qa.item(0)(ca))))(function (ra) {
              return m.pure(r.applicativeMaybeT(aa.monadEffect))(ha.toBlob(ra));
            });
          });
        });
      }))))(function (S) {
        if (S instanceof M.Nothing) return da;
        if (S instanceof M.Just) return k.bind(b.widgetBind)(sa.liftAff(b.widgetMonadAff(w.monoidArray))(za.readAsText(S.value0)))(function (ja) {
          return k.bind(b.widgetBind)(wa.liftEffect(b.widgetMonadEff(w.monoidArray))(y.runExceptT(k.bind(y.bindExceptT(aa.monadEffect))(y.ExceptT(U.map(aa.functorEffect)(W)(oa["try"](Y.getDefaultParseEnv(ja)))))(function (ca) {
            return y.ExceptT(oa["try"](ka.readRecord(ca)));
          }))))(function (ca) {
            if (ca instanceof G.Right) return m.pure(b.widgetApplicative)(ca.value0);

            if (ca instanceof G.Left) {
              var ra = ca.value0;
              ca = e.div(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([]);
              var ya = da,
                  Aa = e.div_(b.widgetShiftMap)([Ca.errorDisplayBox]),
                  La = e.div_(b.widgetShiftMap)([]),
                  Ea = e.span(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([Ca.errorDisplay]),
                  Fa = e.text(l.widgetLiftWidget);
              ra = "Couldn't decode MetajeloXML: " + O.show(oa.showError)(ra);
              return ca([ya, Aa(La(Ea([Fa(ra)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 146, column 11 - line 148, column 37): " + [ca.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 139, column 7 - line 148, column 37): " + [S.constructor.name]);
      });
    });
    return f.loopW(u.empty)(function (L) {
      return e.div_(b.widgetShiftMap)([])(k.bind(b.widgetBind)(da)(function (S) {
        return m.pure(b.widgetApplicative)(Ma(S));
      }));
    });
  }(),
      sb = function sb(W) {
    var da = e.div_(b.widgetShiftMap)([Ca.errorDisplayBox])(e.div_(b.widgetShiftMap)([])(e.span(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([Ca.errorDisplay])([e.text(l.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        L = function L(S) {
      return function (ja) {
        var ca = function ca(ra) {
          return f.step(ra)(k.bind(b.widgetBind)(e.button_(b.widgetShiftMap)([Z.downloadBtn, d.onClick, d.disabled(Q["null"](ra))])(e.text(l.widgetLiftWidget)("Download")))(function () {
            return k.bind(b.widgetBind)(wa.liftEffect(b.widgetMonadEff(w.monoidArray))(S))(function () {
              return m.pure(b.widgetApplicative)(ca(ra));
            });
          }));
        };

        return f.dyn(ca(ja));
      };
    };

    return e.div_(b.widgetShiftMap)([])(function () {
      var S = fa.encodeURIComponent(W);
      return k.bind(b.widgetBind)(wa.liftEffect(b.widgetMonadEff(w.monoidArray))(Wa(M.fromMaybe("")(S))))(function (ja) {
        return M.maybe(da)(L(ja))(S);
      });
    }());
  },
      tb = function tb(W) {
    var da = function da(L) {
      return f.step(L)(k.bind(b.widgetBind)(e.button_(b.widgetShiftMap)([Z.clipBtn, d.onClick, d.disabled(Q["null"](L))])(e.text(l.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return k.bind(b.widgetBind)(wa.liftEffect(b.widgetMonadEff(w.monoidArray))(xa.copyToClipboard(L)))(function () {
          return m.pure(b.widgetApplicative)(da(L));
        });
      }));
    };

    return f.dyn(da(W));
  },
      Oa = function Oa(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.sustainability])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.span_(q.shiftMapCofree(w.monoidArray))([Z.missionStatement])(R.urlInput(u.getWithDefault(new v.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new G.Left(""))(v.SProxy.value)(W))))(function (da) {
      var L = G.hush(da);
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.span_(q.shiftMapCofree(w.monoidArray))([Z.fundingStatement])(R.urlInput(u.getWithDefault(new v.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new G.Left(""))(v.SProxy.value)(W))))(function (S) {
        var ja = G.hush(S);
        return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(v.SProxy.value)(new M.Just(da))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
            return "missionStatementURL";
          }))()(v.SProxy.value)(L)))(function () {
            return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(v.SProxy.value)(new M.Just(S))))(function () {
              return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(v.SProxy.value)(ja));
            });
          });
        }))(W));
      });
    }));
  },
      lb = function lb(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.resourceType])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.resourceTypeGen])(R.menuSignal(K.boundedEnumResourceTypeGeneral)(R.isOptionResourceTypeGeneral)(u.get(new v.IsSymbol(function () {
      return "generalType";
    }))()(v.SProxy.value)(W)))))(function (da) {
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.resourceTypeDescr])(R.textInput(k.join(M.bindMaybe)(U.map(M.functorMaybe)(X.fromString)(u.get(new v.IsSymbol(function () {
        return "description";
      }))()(v.SProxy.value)(W)))))))(function (L) {
        return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
          return "description";
        }))()(v.SProxy.value)(U.map(M.functorMaybe)(X.toString)(L))))(function () {
          return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
            return "generalType";
          }))()(v.SProxy.value)(da));
        }))(W));
      });
    }));
  },
      Ja = function Ja(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.resourceMDSource])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.url])(R.urlInput(u.getWithDefault(new v.IsSymbol(function () {
      return "url_Ei";
    }))()(new G.Left(""))(v.SProxy.value)(W)))))(function (da) {
      var L = G.hush(da);
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.relType])(R.menuSignal(K.boundedEnumRelationType)(R.isOptionRelationType)(u.get(new v.IsSymbol(function () {
        return "relationType";
      }))()(v.SProxy.value)(W)))))(function (S) {
        return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
          return "url_Ei";
        }))()(v.SProxy.value)(new M.Just(da))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
            return "url";
          }))()(v.SProxy.value)(L)))(function () {
            return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
              return "relationType";
            }))()(v.SProxy.value)(S));
          });
        }))(W));
      });
    }));
  },
      ab = function ab(W) {
    var da = M.fromMaybe(u.empty)(W);
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.relatedId])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.id])(R.textInput(u.get(new v.IsSymbol(function () {
      return "id";
    }))()(v.SProxy.value)(da)))))(function (L) {
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.idType])(R.menuSignal(K.boundedEnumIdentifierType)(R.isOptionIdentifierType)(u.get(new v.IsSymbol(function () {
        return "idType";
      }))()(v.SProxy.value)(da)))))(function (S) {
        return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.relType])(R.menuSignal(K.boundedEnumRelationType)(R.isOptionRelationType)(u.get(new v.IsSymbol(function () {
          return "relType";
        }))()(v.SProxy.value)(da)))))(function (ja) {
          return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(M.Just.create(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
            return "id";
          }))()(v.SProxy.value)(L)))(function () {
            return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
              return "idType";
            }))()(v.SProxy.value)(S)))(function () {
              return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                return "relType";
              }))()(v.SProxy.value)(ja));
            });
          }))(da)));
        });
      });
    }));
  },
      Ra = function Ra(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.relatedIds])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.relatedIdsHeader])(e.div_(q.shiftMapCofree(w.monoidArray))([Z.relatedIdList])(R.nonEmptyArrayView(ab)(W))));
  },
      mb = function mb(W) {
    var da = M.fromMaybe(u.empty)(W);
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.institutionPolicy])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.policy])(R.menuSignal(R.boundedEnumPolPolType)(R.isOptionPolPolType)(M.Just.create(u.getWithDefault(new v.IsSymbol(function () {
      return "polPolType";
    }))()(R.FreeTextPolicy.value)(v.SProxy.value)(da))))))(function (L) {
      var S = M.fromMaybe(R.FreeTextPolicy.value)(L);
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.policy])(R.textInput(u.get(new v.IsSymbol(function () {
        return "policy_str";
      }))()(v.SProxy.value)(da)))))(function (ja) {
        var ca = R.checkPolicy(S)(M.maybe("")(X.toString)(ja));
        return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(f.display(function () {
          if (ca instanceof G.Right) return w.mempty(b.widgetMonoid(w.monoidArray));
          if (ca instanceof G.Left) return R.errorDisplay(O.showString)(new M.Just(ca.value0));
          throw Error("Failed pattern match at Metajelo.UI (line 692, column 13 - line 694, column 40): " + [ca.constructor.name]);
        }()))(function () {
          var ra = G.hush(ca);
          return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.policyType])(R.menuSignal(C.boundedEnumMaybe(K.smallBoundedPolicyType)(K.boundedEnumPolicyType))(R.isOptionMaybePolicyType)(u.get(new v.IsSymbol(function () {
            return "policyType";
          }))()(v.SProxy.value)(da)))))(function (ya) {
            return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.applies])(R.menuSignal(C.boundedEnumMaybe(C.smallBoundedBoolean)(C.boundedEnumBoolean))(R.isOptionMaybeBoolean)(u.get(new v.IsSymbol(function () {
              return "appliesToProduct";
            }))()(v.SProxy.value)(da)))))(function (Aa) {
              return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(M.Just.create(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                return "polPolType";
              }))()(v.SProxy.value)(new M.Just(S))))(function () {
                return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                  return "policy_str";
                }))()(v.SProxy.value)(ja)))(function () {
                  return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                    return "policy_ei";
                  }))()(v.SProxy.value)(new M.Just(ca))))(function () {
                    return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                      return "policy";
                    }))()(v.SProxy.value)(ra)))(function () {
                      return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                        return "policyType";
                      }))()(v.SProxy.value)(ya)))(function () {
                        return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                          return "appliesToProduct";
                        }))()(v.SProxy.value)(Aa));
                      });
                    });
                  });
                });
              }))(da)));
            });
          });
        });
      });
    }));
  },
      Ta = function Ta(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.institutionPolicies])(R.nonEmptyArrayView(mb)(W));
  },
      Na = function Na(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.identifier])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.id])(R.textInput(u.get(new v.IsSymbol(function () {
      return "id";
    }))()(v.SProxy.value)(W)))))(function (da) {
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.idType])(R.menuSignal(K.boundedEnumIdentifierType)(R.isOptionIdentifierType)(u.get(new v.IsSymbol(function () {
        return "idType";
      }))()(v.SProxy.value)(W)))))(function (L) {
        return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
          return "id";
        }))()(v.SProxy.value)(da)))(function () {
          return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
            return "idType";
          }))()(v.SProxy.value)(L));
        }))(W));
      });
    }));
  },
      Sa = function Sa(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.institutionContact])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.contactEmail])(R.emailInput(u.getWithDefault(new v.IsSymbol(function () {
      return "email_Ei";
    }))()(new G.Left(""))(v.SProxy.value)(W)))))(function (da) {
      var L = G.hush(da);
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.contactType])(R.menuSignal(C.boundedEnumMaybe(K.smallBoundedInstitutionContactType)(K.boundedEnumInstitutionContactType))(R.isOptionMaybeInstitutionContactType)(u.get(new v.IsSymbol(function () {
        return "contactType";
      }))()(v.SProxy.value)(W)))))(function (S) {
        return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
          return "email_Ei";
        }))()(v.SProxy.value)(new M.Just(da))))(function () {
          return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
            return "emailAddress";
          }))()(v.SProxy.value)(L)))(function () {
            return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
              return "contactType";
            }))()(v.SProxy.value)(S));
          });
        }))(W));
      });
    }));
  },
      ub = function ub(W) {
    var da = function da(S) {
      return e.div(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([Z.locPreview])([e["br'"](l.widgetLiftWidget), J.foldMap(J.foldableMaybe)(b.widgetMonoid(w.monoidArray))(function (ja) {
        return J.fold(J.foldableArray)(b.widgetMonoid(w.monoidArray))(T.spacify(T.locElems(ja)));
      })(S)]);
    },
        L = M.fromMaybe(u.empty)(W);

    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.location])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.institutionId])(Na(Qa(new v.IsSymbol(function () {
      return "institutionID_opt";
    }))()(v.SProxy.value)(L)))))(function (S) {
      var ja = u.getAll(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
        return "id";
      }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
        return "idType";
      }))()()()()(u.getAllOptionNil))))(S);
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.institutionName])(R.textInput(u.get(new v.IsSymbol(function () {
        return "institutionName";
      }))()(v.SProxy.value)(L)))))(function (ca) {
        return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.institutionType])(R.menuSignal(K.boundedEnumInstitutionType)(R.isOptionInstitutionType)(u.get(new v.IsSymbol(function () {
          return "institutionType";
        }))()(v.SProxy.value)(L)))))(function (ra) {
          return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(f.display(e["br'"](l.widgetLiftWidget)))(function () {
            return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.superOrg])(R.textInput(k.join(M.bindMaybe)(u.get(new v.IsSymbol(function () {
              return "superOrganizationName";
            }))()(v.SProxy.value)(L))))))(function (ya) {
              return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(Sa(Qa(new v.IsSymbol(function () {
                return "institutionContact_opt";
              }))()(v.SProxy.value)(L)))(function (Aa) {
                var La = u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
                  return "contactType";
                }))(V.consKeys(new v.IsSymbol(function () {
                  return "emailAddress";
                }))(V.nilKeys)))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
                  return "contactType";
                }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                  return "emailAddress";
                }))()()()()(u.getAllOptionNil))))(Aa);
                return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(Oa(Qa(new v.IsSymbol(function () {
                  return "iSustain_opt";
                }))()(v.SProxy.value)(L)))(function (Ea) {
                  var Fa = u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))(V.consKeys(new v.IsSymbol(function () {
                    return "missionStatementURL";
                  }))(V.nilKeys)))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "missionStatementURL";
                  }))()()()()(u.getAllOptionNil))))(Ea);
                  return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(Ta(new la.Tuple(u.getWithDefault(new v.IsSymbol(function () {
                    return "_numPolicies";
                  }))()(1)(v.SProxy.value)(L), u.get(new v.IsSymbol(function () {
                    return "institutionPolicies_opt";
                  }))()(v.SProxy.value)(L))))(function (Pa) {
                    var rb = la.fst(Pa),
                        Va = la.snd(Pa),
                        Xa = k.join(M.bindMaybe)(U.map(M.functorMaybe)(ea.sequence(x.traversableNonEmptyArray)(M.applicativeMaybe))(U.map(M.functorMaybe)(U.map(x.functorNonEmptyArray)(u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
                      return "appliesToProduct";
                    }))(V.consKeys(new v.IsSymbol(function () {
                      return "policy";
                    }))(V.consKeys(new v.IsSymbol(function () {
                      return "policyType";
                    }))(V.nilKeys))))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
                      return "appliesToProduct";
                    }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                      return "policy";
                    }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                      return "policyType";
                    }))()()()()(u.getAllOptionNil)))))))(Va)));
                    return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.versioning])(R.checkBoxS(u.getWithDefault(new v.IsSymbol(function () {
                      return "versioning";
                    }))()(!1)(v.SProxy.value)(L)))))(function (kb) {
                      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                        return "institutionID_opt";
                      }))()(v.SProxy.value)(new M.Just(S))))(function () {
                        return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                          return "institutionID";
                        }))()(v.SProxy.value)(ja)))(function () {
                          return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                            return "institutionName";
                          }))()(v.SProxy.value)(ca)))(function () {
                            return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                              return "institutionType";
                            }))()(v.SProxy.value)(ra)))(function () {
                              return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                return "superOrganizationName";
                              }))()(v.SProxy.value)(new M.Just(ya))))(function () {
                                return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                  return "institutionContact_opt";
                                }))()(v.SProxy.value)(new M.Just(Aa))))(function () {
                                  return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                    return "institutionContact";
                                  }))()(v.SProxy.value)(La)))(function () {
                                    return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                      return "iSustain_opt";
                                    }))()(v.SProxy.value)(new M.Just(Ea))))(function () {
                                      return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                        return "institutionSustainability";
                                      }))()(v.SProxy.value)(Fa)))(function () {
                                        return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                          return "_numPolicies";
                                        }))()(v.SProxy.value)(new M.Just(rb))))(function () {
                                          return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                            return "institutionPolicies_opt";
                                          }))()(v.SProxy.value)(Va)))(function () {
                                            return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                              return "institutionPolicies";
                                            }))()(v.SProxy.value)(Xa)))(function () {
                                              return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                                return "versioning";
                                              }))()(v.SProxy.value)(new M.Just(kb)));
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
                      }))(L)))(function (bb) {
                        var xb = u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
                          return "institutionContact";
                        }))(V.consKeys(new v.IsSymbol(function () {
                          return "institutionID";
                        }))(V.consKeys(new v.IsSymbol(function () {
                          return "institutionName";
                        }))(V.consKeys(new v.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(V.consKeys(new v.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(V.consKeys(new v.IsSymbol(function () {
                          return "institutionType";
                        }))(V.consKeys(new v.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(V.consKeys(new v.IsSymbol(function () {
                          return "versioning";
                        }))(V.nilKeys)))))))))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(u.getAllOptionNil))))))))))(bb);
                        return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(f.display(da(xb)))(function () {
                          return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(new M.Just(bb));
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
      vb = function vb(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.basicMetadata])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.title])(R.textInput(u.get(new v.IsSymbol(function () {
      return "title";
    }))()(v.SProxy.value)(W)))))(function (da) {
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.creator])(R.textInput(u.get(new v.IsSymbol(function () {
        return "creator";
      }))()(v.SProxy.value)(W)))))(function (L) {
        return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.pubyear])(R.natInput(u.get(new v.IsSymbol(function () {
          return "publicationYear";
        }))()(v.SProxy.value)(W)))))(function (S) {
          return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
            return "title";
          }))()(v.SProxy.value)(da)))(function () {
            return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
              return "creator";
            }))()(v.SProxy.value)(L)))(function () {
              return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                return "publicationYear";
              }))()(v.SProxy.value)(S));
            });
          }))(W));
        });
      });
    }));
  },
      nb = function nb(W) {
    var da = function da(S) {
      return e.div(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([Z.prodPreview])([e["br'"](l.widgetLiftWidget), J.fold(J.foldableMaybe)(b.widgetMonoid(w.monoidArray))(U.map(M.functorMaybe)(T.mkSupplementaryProductWidget)(S))]);
    },
        L = M.fromMaybe(u.empty)(W);

    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.product])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(vb(Qa(new v.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(v.SProxy.value)(L)))(function (S) {
      var ja = u.getAll(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
        return "creator";
      }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
        return "publicationYear";
      }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
        return "title";
      }))()()()()(u.getAllOptionNil)))))(S);
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(e.div_(q.shiftMapCofree(w.monoidArray))([Z.resourceId])(Na(Qa(new v.IsSymbol(function () {
        return "resourceID_opt";
      }))()(v.SProxy.value)(L))))(function (ca) {
        var ra = u.getAll(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
          return "id";
        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
          return "idType";
        }))()()()()(u.getAllOptionNil))))(ca);
        return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(lb(Qa(new v.IsSymbol(function () {
          return "resourceType_opt";
        }))()(v.SProxy.value)(L)))(function (ya) {
          var Aa = u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
            return "description";
          }))(V.consKeys(new v.IsSymbol(function () {
            return "generalType";
          }))(V.nilKeys)))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
            return "description";
          }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
            return "generalType";
          }))()()()()(u.getAllOptionNil))))(ya);
          return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(Za(new la.Tuple(u.getWithDefault(new v.IsSymbol(function () {
            return "_numFormats";
          }))()(0)(v.SProxy.value)(L), u.getWithDefault(new v.IsSymbol(function () {
            return "format";
          }))()([])(v.SProxy.value)(L))))(function (La) {
            var Ea = la.fst(La),
                Fa = la.snd(La);
            return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(Ja(Qa(new v.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(v.SProxy.value)(L)))(function (Pa) {
              var rb = u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
                return "relationType";
              }))(V.consKeys(new v.IsSymbol(function () {
                return "url";
              }))(V.nilKeys)))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
                return "relationType";
              }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                return "url";
              }))()()()()(u.getAllOptionNil))))(Pa);
              return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(ub(u.get(new v.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(v.SProxy.value)(L)))(function (Va) {
                var Xa = k.join(M.bindMaybe)(U.map(M.functorMaybe)(u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
                  return "institutionContact";
                }))(V.consKeys(new v.IsSymbol(function () {
                  return "institutionID";
                }))(V.consKeys(new v.IsSymbol(function () {
                  return "institutionName";
                }))(V.consKeys(new v.IsSymbol(function () {
                  return "institutionPolicies";
                }))(V.consKeys(new v.IsSymbol(function () {
                  return "institutionSustainability";
                }))(V.consKeys(new v.IsSymbol(function () {
                  return "institutionType";
                }))(V.consKeys(new v.IsSymbol(function () {
                  return "superOrganizationName";
                }))(V.consKeys(new v.IsSymbol(function () {
                  return "versioning";
                }))(V.nilKeys)))))))))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
                  return "institutionContact";
                }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                  return "institutionID";
                }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                  return "institutionName";
                }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                  return "institutionPolicies";
                }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                  return "institutionSustainability";
                }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                  return "institutionType";
                }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                  return "superOrganizationName";
                }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                  return "versioning";
                }))()()()()(u.getAllOptionNil)))))))))))(Va));
                return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                  return "basicMetadata_opt";
                }))()(v.SProxy.value)(new M.Just(S))))(function () {
                  return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                    return "basicMetadata";
                  }))()(v.SProxy.value)(ja)))(function () {
                    return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                      return "resourceID_opt";
                    }))()(v.SProxy.value)(new M.Just(ca))))(function () {
                      return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                        return "resourceID";
                      }))()(v.SProxy.value)(new M.Just(ra))))(function () {
                        return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                          return "resourceType_opt";
                        }))()(v.SProxy.value)(new M.Just(ya))))(function () {
                          return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                            return "resourceType";
                          }))()(v.SProxy.value)(Aa)))(function () {
                            return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                              return "_numFormats";
                            }))()(v.SProxy.value)(new M.Just(Ea))))(function () {
                              return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                return "format";
                              }))()(v.SProxy.value)(new M.Just(Fa))))(function () {
                                return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                  return "resMdsOpts_opt";
                                }))()(v.SProxy.value)(new M.Just(Pa))))(function () {
                                  return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                    return "resourceMetadataSource";
                                  }))()(v.SProxy.value)(new M.Just(rb))))(function () {
                                    return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                      return "locationOpts_opt";
                                    }))()(v.SProxy.value)(Va)))(function () {
                                      return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                        return "location";
                                      }))()(v.SProxy.value)(Xa));
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
                }))(L)))(function (kb) {
                  var bb = u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
                    return "basicMetadata";
                  }))(V.consKeys(new v.IsSymbol(function () {
                    return "format";
                  }))(V.consKeys(new v.IsSymbol(function () {
                    return "location";
                  }))(V.consKeys(new v.IsSymbol(function () {
                    return "resourceID";
                  }))(V.consKeys(new v.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))(V.consKeys(new v.IsSymbol(function () {
                    return "resourceType";
                  }))(V.nilKeys)))))))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "basicMetadata";
                  }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "format";
                  }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "location";
                  }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "resourceID";
                  }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "resourceType";
                  }))()()()()(u.getAllOptionNil))))))))(kb);
                  return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(f.display(da(bb)))(function () {
                    return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(new M.Just(kb));
                  });
                });
              });
            });
          });
        });
      });
    }));
  },
      ob = function ob(W) {
    return e.div_(q.shiftMapCofree(w.monoidArray))([Z.products])(e.span_(q.shiftMapCofree(w.monoidArray))([Z.productsHeader])(e.div_(q.shiftMapCofree(w.monoidArray))([Z.productList])(R.nonEmptyArrayView(nb)(W))));
  },
      pb = function pb(W) {
    return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(cb(Qa(new v.IsSymbol(function () {
      return "identifier_opt";
    }))()(v.SProxy.value)(W)))(function (da) {
      var L = u.getAll(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
        return "id";
      }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
        return "idType";
      }))()()()()(u.getAllOptionNil))))(da);
      u.getWithDefault(new v.IsSymbol(function () {
        return "date_Ei";
      }))()(new G.Left(""))(v.SProxy.value)(W);
      return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(U.map(U.functorFn)(e.div_(q.shiftMapCofree(w.monoidArray))([Z.date]))(R.dateInput)(u.getWithDefault(new v.IsSymbol(function () {
        return "date_Ei";
      }))()(new G.Left(""))(v.SProxy.value)(W)))(function (S) {
        var ja = G.hush(S);
        return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(Ra(new la.Tuple(u.getWithDefault(new v.IsSymbol(function () {
          return "_numRelIds";
        }))()(0)(v.SProxy.value)(W), u.get(new v.IsSymbol(function () {
          return "relId_opts";
        }))()(v.SProxy.value)(W))))(function (ca) {
          var ra = la.fst(ca),
              ya = la.snd(ca),
              Aa = k.join(M.bindMaybe)(U.map(M.functorMaybe)(ea.sequence(x.traversableNonEmptyArray)(M.applicativeMaybe))(U.map(M.functorMaybe)(U.map(x.functorNonEmptyArray)(u.getAll(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
            return "id";
          }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
            return "idType";
          }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
            return "relType";
          }))()()()()(u.getAllOptionNil)))))))(ya)));
          return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(ob(new la.Tuple(u.getWithDefault(new v.IsSymbol(function () {
            return "_numSupProds";
          }))()(0)(v.SProxy.value)(W), u.get(new v.IsSymbol(function () {
            return "supProd_opts";
          }))()(v.SProxy.value)(W))))(function (La) {
            var Ea = la.fst(La),
                Fa = la.snd(La),
                Pa = k.join(M.bindMaybe)(U.map(M.functorMaybe)(ea.sequence(x.traversableNonEmptyArray)(M.applicativeMaybe))(U.map(M.functorMaybe)(U.map(x.functorNonEmptyArray)(u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
              return "basicMetadata";
            }))(V.consKeys(new v.IsSymbol(function () {
              return "format";
            }))(V.consKeys(new v.IsSymbol(function () {
              return "location";
            }))(V.consKeys(new v.IsSymbol(function () {
              return "resourceID";
            }))(V.consKeys(new v.IsSymbol(function () {
              return "resourceMetadataSource";
            }))(V.consKeys(new v.IsSymbol(function () {
              return "resourceType";
            }))(V.nilKeys)))))))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
              return "basicMetadata";
            }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
              return "format";
            }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
              return "location";
            }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
              return "resourceID";
            }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
              return "resourceMetadataSource";
            }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
              return "resourceType";
            }))()()()()(u.getAllOptionNil))))))))))(Fa)));
            return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
              return "identifier_opt";
            }))()(v.SProxy.value)(new M.Just(da))))(function () {
              return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                return "identifier";
              }))()(v.SProxy.value)(L)))(function () {
                return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                  return "date_Ei";
                }))()(v.SProxy.value)(new M.Just(S))))(function () {
                  return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                    return "date";
                  }))()(v.SProxy.value)(ja)))(function () {
                    return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                      return "_numRelIds";
                    }))()(v.SProxy.value)(new M.Just(ra))))(function () {
                      return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                        return "relId_opts";
                      }))()(v.SProxy.value)(ya)))(function () {
                        return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                          return "relatedIdentifiers";
                        }))()(v.SProxy.value)(Aa)))(function () {
                          return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                            return "_numSupProds";
                          }))()(v.SProxy.value)(new M.Just(Ea))))(function () {
                            return k.discard(k.discardUnit)(p.bindStateT(B.monadIdentity))(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                              return "supProd_opts";
                            }))()(v.SProxy.value)(Fa)))(function () {
                              return k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                                return "supplementaryProducts";
                              }))()(v.SProxy.value)(Pa));
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
  },
      wb = function () {
    var W = function W(da) {
      var L = function L(S) {
        return M.maybe(m.pure(aa.applicativeEffect)(""))(pa.recordToString)(S);
      };

      return k.bind(b.widgetBind)(wa.liftEffect(b.widgetMonadEff(w.monoidArray))(ea.sequence(ea.traversableMaybe)(aa.applicativeEffect)(U.map(M.functorMaybe)(eb)(da))))(function (S) {
        return e.div(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([Z.recPreview])([k.bind(b.widgetBind)(wa.liftEffect(b.widgetMonadEff(w.monoidArray))(L(S)))(function (ja) {
          return e.div(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([Z.previewButtons])([sb(ja), tb(ja)]);
        }), e["br'"](l.widgetLiftWidget), J.fold(J.foldableMaybe)(b.widgetMonoid(w.monoidArray))(U.map(M.functorMaybe)(T.mkRecordWidget)(S))]);
      });
    };

    return f.loopS(w.monoidArray)(u.empty)(function (da) {
      return e.div_(q.shiftMapCofree(w.monoidArray))([Z.record])(k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))($a)(function (L) {
        var S = u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
          return "date";
        }))(V.consKeys(new v.IsSymbol(function () {
          return "identifier";
        }))(V.consKeys(new v.IsSymbol(function () {
          return "lastModified";
        }))(V.consKeys(new v.IsSymbol(function () {
          return "relatedIdentifiers";
        }))(V.consKeys(new v.IsSymbol(function () {
          return "supplementaryProducts";
        }))(V.nilKeys))))))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
          return "date";
        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
          return "identifier";
        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
          return "lastModified";
        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
          return "relatedIdentifiers";
        }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
          return "supplementaryProducts";
        }))()()()()(u.getAllOptionNil)))))))(L);
        L = M.isNothing(S) ? da : L;
        return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(pb(L))(function (ja) {
          var ca = u.get(new v.IsSymbol(function () {
            return "lastModified";
          }))()(v.SProxy.value)(ja),
              ra = ba.unsafePerformEffect(Da.nowDateTime);
          return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(ba.unsafePerformEffect(na.log(wa.monadEffectEffect)("nowTime is: " + O.show(N.showDateTime)(ra)))))(function () {
            return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(F.append(I.semigroupFirst)(ca)(I.First(new M.Just(ra)))))(function (ya) {
              return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(ba.unsafePerformEffect(na.log(wa.monadEffectEffect)("xsdDateMay is: " + O.show(M.showMaybe(N.showDateTime))(ya)))))(function () {
                return k.bind(q.bindCofree(b.widgetAlternative(w.monoidArray)))(m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(z.execState(k.bind(p.bindStateT(B.monadIdentity))(t.get(p.monadStateStateT(B.monadIdentity)))(u.maySetOptState(new v.IsSymbol(function () {
                  return "lastModified";
                }))()(v.SProxy.value)(ya)))(ja)))(function (Aa) {
                  var La = u.getSubset()()(V.consKeys(new v.IsSymbol(function () {
                    return "date";
                  }))(V.consKeys(new v.IsSymbol(function () {
                    return "identifier";
                  }))(V.consKeys(new v.IsSymbol(function () {
                    return "lastModified";
                  }))(V.consKeys(new v.IsSymbol(function () {
                    return "relatedIdentifiers";
                  }))(V.consKeys(new v.IsSymbol(function () {
                    return "supplementaryProducts";
                  }))(V.nilKeys))))))(u.getAllAny()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "date";
                  }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "identifier";
                  }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "lastModified";
                  }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "relatedIdentifiers";
                  }))()()()()(u.getAllOptionCons(new v.IsSymbol(function () {
                    return "supplementaryProducts";
                  }))()()()()(u.getAllOptionNil)))))))(Aa);
                  return k.discard(k.discardUnit)(q.bindCofree(b.widgetAlternative(w.monoidArray)))(f.display(W(La)))(function () {
                    return m.pure(q.applicativeCofree(b.widgetAlternative(w.monoidArray)))(Aa);
                  });
                });
              });
            });
          });
        });
      }));
    });
  }(),
      qb = e["div'"](b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([e.div(b.widgetMultiAlternative(w.monoidArray))(b.widgetShiftMap)([Z.page])(m.pure(m.applicativeArray)(f.dyn(wb)))]);

  c.runFormSPA = function (W) {
    return n.runWidgetInDom(W)(qb);
  };

  c.page = qb;
  c.utf8DataAttr = "data:text/plain;charset=utf-8";
  c.downloadButton = sb;
  c.mkDLAnchorAndClicker = Wa;
  c.uploadButtonSig = $a;
  c.copyButton = tb;
  c.fillMetajeloRecordExtra = Ma;
  c.fillSProdExtra = jb;
  c.fillLocationRowExtra = ib;
  c.fillIContactExtra = hb;
  c.fillSustainExtra = Ua;
  c.fillPolicyExtra = gb;
  c.fillResourceMDSExtra = fb;
  c.accumulateMetajeloRecord = wb;
  c.finalizeRecord = eb;
  c.accumulateMetajeloRecUI = pb;
  c.accumulateSuppProd = nb;
  c.supProdSigArray = ob;
  c.accumulateLocation = ub;
  c.accumulateSustain = Oa;
  c.accumulateIdent = Na;
  c.genRecIdent = cb;
  c.accumulateRelatedIdent = ab;
  c.relIdSigArray = Ra;
  c.accumulateBasicMetaData = vb;
  c.accumulateResType = lb;
  c.formatSignal = db;
  c.formatSigArray = Za;
  c.accumulateResMdSource = Ja;
  c.accumulateContact = Sa;
  c.accumulatePolicy = mb;
  c.policySigArray = Ta;
  c.tooltip = Ya;
  c.tooltipS = Ka;
  c.getOpt = Qa;
})(PS);

module.exports = PS["Metajelo.UI"];
},{"react":"n8MK","react-dom":"NKHc","react-dom/server":"KpxE","uuid/v4":"hYHi"}],"Focm":[function(require,module,exports) {
"use strict";

var MetajeloUI = _interopRequireWildcard(require("./index.opt.js"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// var Metajelo = require("../output/Metajelo"); // For bower
window.MetajeloUI = MetajeloUI;
},{"./index.opt.js":"xbCx"}]},{},["Focm"], null)
//# sourceMappingURL=prod.db285d1f.js.map