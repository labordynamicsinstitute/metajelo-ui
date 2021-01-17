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

  for (var k = 0; k < f.length - 1; k++) {
    var p = f[k];
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

  var c = function c(f, k) {
    this.$jscomp$symbol$id_ = f;
    $jscomp.defineProperty(this, "description", {
      configurable: !0,
      writable: !0,
      value: k
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
        var k = e++;
        return {
          value: c(k, a[k]),
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
    e = null != e ? e : function (l) {
      return l;
    };
    var f = [],
        k = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];

    if ("function" == typeof k) {
      c = k.call(c);

      for (var p = 0; !(k = c.next()).done;) {
        f.push(e.call(g, k.value, p++));
      }
    } else for (k = c.length, p = 0; p < k; p++) {
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
        k = c.length;
    e = Math.max(0, Math.min(e | 0, g.length));

    for (var p = 0; p < k && e < f;) {
      if (g[e++] != c[p++]) return !1;
    }

    return p >= k;
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, c, e) {
  a instanceof String && (a = String(a));

  for (var g = a.length, f = 0; f < g; f++) {
    var k = a[f];
    if (c.call(e, k, f, a)) return {
      i: f,
      v: k
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
      return function (f, k) {
        var p = c.newXHR(),
            l = c.fixupUrl(g.url, p);
        p.open(g.method || "GET", l, !0, g.username, g.password);
        if (g.headers) try {
          l = 0;

          for (var n; null != (n = g.headers[l]); l++) {
            p.setRequestHeader(n.field, n.value);
          }
        } catch (q) {
          f(q);
        }

        n = function n(q) {
          return function () {
            f(Error(q + ": " + g.method + " " + g.url));
          };
        };

        p.onerror = n("AJAX request failed");
        p.ontimeout = n("AJAX request timed out");

        p.onload = function () {
          k({
            status: p.status,
            statusText: p.statusText,
            headers: p.getAllResponseHeaders().split("\r\n").filter(function (q) {
              return 0 < q.length;
            }).map(function (q) {
              var w = q.indexOf(":");
              return e(q.substring(0, w))(q.substring(w + 2));
            }),
            body: c.getResponse(p)
          });
        };

        p.responseType = g.responseType;
        p.withCredentials = g.withCredentials;
        p.send(g.content);
        return function (q, w, b) {
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
      for (var g = c.length, f = e.length, k = Array(g * f), p = 0, l = 0; l < g; l++) {
        for (var n = c[l], q = 0; q < f; q++) {
          k[p++] = n(e[q]);
        }
      }

      return k;
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
      for (var g = e.length, f = Array(g), k = 0; k < g; k++) {
        f[k] = c(e[k]);
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
      k = a["Data.Unit"];

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
    return function (l) {
      return function (n) {
        return (0, p.map)(n)(l);
      };
    };
  };

  c["void"] = function (p) {
    return (0, p.map)(f["const"](k.unit));
  };

  c.voidRight = function (p) {
    return function (l) {
      return (0, p.map)(f["const"](l));
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
      k = a["Data.Functor"];

  a = function a(l, n) {
    this.Functor0 = l;
    this.apply = n;
  };

  var p = new a(function () {
    return k.functorFn;
  }, function (l) {
    return function (n) {
      return function (q) {
        return l(q)(n(q));
      };
    };
  });
  e = new a(function () {
    return k.functorArray;
  }, e.arrayApply);
  c.Apply = a;

  c.apply = function (l) {
    return l.apply;
  };

  c.applySecond = function (l) {
    return function (n) {
      return function (q) {
        return (0, l.apply)(k.map(l.Functor0())(f["const"](g.identity(g.categoryFn)))(n))(q);
      };
    };
  };

  c.lift2 = function (l) {
    return function (n) {
      return function (q) {
        return function (w) {
          return (0, l.apply)(k.map(l.Functor0())(n)(q))(w);
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

  a = function a(f, k) {
    this.Apply0 = f;
    this.pure = k;
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
    return function (k) {
      return function (p) {
        return e.apply(f.Apply0())((0, f.pure)(k))(p);
      };
    };
  };

  c.applicativeArray = g;
})(PS);

(function (a) {
  a.arrayBind = function (c) {
    return function (e) {
      for (var g = [], f = 0, k = c.length; f < k; f++) {
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
      k = function k(n, q) {
    this.Apply0 = n;
    this.bind = q;
  };

  a = new k(function () {
    return e.applyArray;
  }, a["Control.Bind"].arrayBind);

  var p = function p(n) {
    return f.flip(n.bind);
  },
      l = new function (n) {
    this.discard = n;
  }(function (n) {
    return n.bind;
  });

  c.Bind = k;

  c.bind = function (n) {
    return n.bind;
  };

  c.bindFlipped = p;

  c.discard = function (n) {
    return n.discard;
  };

  c.join = function (n) {
    return function (q) {
      return (0, n.bind)(q)(g.identity(g.categoryFn));
    };
  };

  c.composeKleisliFlipped = function (n) {
    return function (q) {
      return function (w) {
        return function (b) {
          return p(n)(q)(w(b));
        };
      };
    };
  };

  c.bindArray = a;
  c.discardUnit = l;
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
        return function (k) {
          return function (p) {
            return k < p ? e : k === p ? g : f;
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
      k = new a(e.eqCharImpl);
  e = new a(e.eqBooleanImpl);
  c.Eq = a;

  c.eq = function (p) {
    return p.eq;
  };

  c.eqBoolean = e;
  c.eqInt = f;
  c.eqChar = k;
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

  a = function a(l, n) {
    this.Eq0 = l;
    this.compare = n;
  };

  var k = new a(function () {
    return g.eqInt;
  }, e.ordIntImpl(f.LT.value)(f.EQ.value)(f.GT.value)),
      p = new a(function () {
    return g.eqChar;
  }, e.ordCharImpl(f.LT.value)(f.EQ.value)(f.GT.value));
  e = new a(function () {
    return g.eqBoolean;
  }, e.ordBooleanImpl(f.LT.value)(f.EQ.value)(f.GT.value));
  c.Ord = a;

  c.compare = function (l) {
    return l.compare;
  };

  c.max = function (l) {
    return function (n) {
      return function (q) {
        var w = (0, l.compare)(n)(q);
        if (w instanceof f.LT) return q;
        if (w instanceof f.EQ || w instanceof f.GT) return n;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [w.constructor.name]);
      };
    };
  };

  c.ordBoolean = e;
  c.ordInt = k;
  c.ordChar = p;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var c = a["Data.Bounded"],
      e = a["Data.Bounded"],
      g = a["Data.Ord"];

  a = function a(p, l, n) {
    this.Ord0 = p;
    this.bottom = l;
    this.top = n;
  };

  var f = new a(function () {
    return g.ordInt;
  }, e.bottomInt, e.topInt);
  e = new a(function () {
    return g.ordChar;
  }, e.bottomChar, e.topChar);
  var k = new a(function () {
    return g.ordBoolean;
  }, !1, !0);
  c.Bounded = a;

  c.bottom = function (p) {
    return p.bottom;
  };

  c.top = function (p) {
    return p.top;
  };

  c.boundedBoolean = k;
  c.boundedInt = f;
  c.boundedChar = e;
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var c = a["Data.Maybe"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      f = a["Control.Bind"],
      k = a["Control.Category"],
      p = a["Data.Bounded"],
      l = a["Data.Eq"],
      n = a["Data.Function"],
      q = a["Data.Functor"],
      w = a["Data.Ord"],
      b = a["Data.Ordering"],
      h = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      d = function () {
    function u(D) {
      this.value0 = D;
    }

    u.create = function (D) {
      return new u(D);
    };

    return u;
  }(),
      r = function r(u) {
    return function (D) {
      return function (E) {
        if (E instanceof h) return u;
        if (E instanceof d) return D(E.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [u.constructor.name, D.constructor.name, E.constructor.name]);
      };
    };
  };

  a = r(!0)(n["const"](!1));
  n = r(!1)(n["const"](!0));

  var x = new q.Functor(function (u) {
    return function (D) {
      return D instanceof d ? new d(u(D.value0)) : h.value;
    };
  }),
      t = function t(u) {
    return new l.Eq(function (D) {
      return function (E) {
        return D instanceof h && E instanceof h ? !0 : D instanceof d && E instanceof d ? l.eq(u)(D.value0)(E.value0) : !1;
      };
    });
  },
      C = function C(u) {
    return new w.Ord(function () {
      return t(u.Eq0());
    }, function (D) {
      return function (E) {
        if (D instanceof h && E instanceof h) return b.EQ.value;
        if (D instanceof h) return b.LT.value;
        if (E instanceof h) return b.GT.value;
        if (D instanceof d && E instanceof d) return w.compare(u)(D.value0)(E.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [D.constructor.name, E.constructor.name]);
      };
    });
  },
      y = new g.Apply(function () {
    return x;
  }, function (u) {
    return function (D) {
      if (u instanceof d) return q.map(x)(u.value0)(D);
      if (u instanceof h) return h.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [u.constructor.name, D.constructor.name]);
    };
  });

  g = new f.Bind(function () {
    return y;
  }, function (u) {
    return function (D) {
      if (u instanceof d) return D(u.value0);
      if (u instanceof h) return h.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [u.constructor.name, D.constructor.name]);
    };
  });
  e = new e.Applicative(function () {
    return y;
  }, d.create);
  c.Nothing = h;
  c.Just = d;
  c.maybe = r;

  c.fromMaybe = function (u) {
    return r(u)(k.identity(k.categoryFn));
  };

  c.isJust = n;
  c.isNothing = a;

  c.fromJust = function (u) {
    return function (D) {
      if (D instanceof d) return D.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [D.constructor.name]);
    };
  };

  c.functorMaybe = x;
  c.applyMaybe = y;
  c.applicativeMaybe = e;
  c.bindMaybe = g;
  c.ordMaybe = C;

  c.boundedMaybe = function (u) {
    return new p.Bounded(function () {
      return C(u.Ord0());
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
      k = function () {
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
      l = function () {
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
      q = function () {
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
  c.Document = k;
  c.String = p;
  c.FormData = l;
  c.FormURLEncoded = n;
  c.Json = q;

  c.toMediaType = function (w) {
    return w instanceof n ? new e.Just(g.applicationFormURLEncoded) : w instanceof q ? new e.Just(g.applicationJSON) : e.Nothing.value;
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
  var e = new function (g, f, k, p, l, n) {
    this.conj = g;
    this.disj = f;
    this.ff = k;
    this.implies = p;
    this.not = l;
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
    return function (l) {
      return g.unit;
    };
  }),
      k = new a(e.concatString);
  e = new a(e.concatArray);
  c.Semigroup = a;

  c.append = function (p) {
    return p.append;
  };

  c.semigroupString = k;
  c.semigroupUnit = f;
  c.semigroupArray = e;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var c = a["Data.Monoid"],
      e = a["Data.Semigroup"],
      g = function g(p, l) {
    this.Semigroup0 = p;
    this.mempty = l;
  };

  a = new g(function () {
    return e.semigroupUnit;
  }, a["Data.Unit"].unit);
  var f = new g(function () {
    return e.semigroupString;
  }, ""),
      k = new g(function () {
    return e.semigroupArray;
  }, []);
  c.Monoid = g;

  c.mempty = function (p) {
    return p.mempty;
  };

  c.monoidUnit = a;
  c.monoidString = f;
  c.monoidArray = k;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var c = a["Data.Monoid.Disj"],
      e = a["Data.HeytingAlgebra"],
      g = a["Data.Monoid"],
      f = a["Data.Semigroup"],
      k = function k(p) {
    return new f.Semigroup(function (l) {
      return function (n) {
        return e.disj(p)(l)(n);
      };
    });
  };

  c.Disj = function (p) {
    return p;
  };

  c.monoidDisj = function (p) {
    return new g.Monoid(function () {
      return k(p);
    }, e.ff(p));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var c = a["Data.Newtype"],
      e = a["Data.Functor"],
      g = function g(f, k) {
    this.unwrap = f;
    this.wrap = k;
  };

  a = new g(function (f) {
    return f;
  }, a["Data.Monoid.Disj"].Disj);

  c.unwrap = function (f) {
    return f.unwrap;
  };

  c.Newtype = g;

  c.alaF = function (f) {
    return function (k) {
      return function (p) {
        return function (l) {
          return function (n) {
            return function (q) {
              var w = e.map(k)(l.unwrap),
                  b = e.map(f)(p.wrap);
              return function (h) {
                return w(q(b(h)));
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
    function l(n) {
      this.value0 = n;
    }

    l.create = function (n) {
      return new l(n);
    };

    return l;
  }(),
      k = function () {
    function l(n) {
      this.value0 = n;
    }

    l.create = function (n) {
      return new l(n);
    };

    return l;
  }(),
      p = function () {
    function l(n, q) {
      this.value0 = n;
      this.value1 = q;
    }

    l.create = function (n) {
      return function (q) {
        return new l(n, q);
      };
    };

    return l;
  }();

  c.Accept = f;
  c.ContentType = k;

  c.name = function (l) {
    if (l instanceof f) return "Accept";
    if (l instanceof k) return "Content-Type";
    if (l instanceof p) return l.value0;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 21, column 1 - line 21, column 32): " + [l.constructor.name]);
  };

  c.value = function (l) {
    if (l instanceof f || l instanceof k) return g.unwrap(e.newtypeMediaType)(l.value0);
    if (l instanceof p) return l.value1;
    throw Error("Failed pattern match at Affjax.RequestHeader (line 26, column 1 - line 26, column 33): " + [l.constructor.name]);
  };
})(PS);

(function (a) {
  a["Affjax.ResponseFormat"] = a["Affjax.ResponseFormat"] || {};

  var c = a["Affjax.ResponseFormat"],
      e = a["Control.Category"],
      g = a["Data.Maybe"],
      f = a["Data.MediaType.Common"],
      k = function () {
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
      l = function () {
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
      q = function () {
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

  a = new q(e.identity(e.categoryFn));
  e = new w(e.identity(e.categoryFn));
  c.ArrayBuffer = k;
  c.Blob = p;
  c.Document = l;
  c.Json = n;
  c.String = q;
  c.Ignore = w;
  c.string = a;
  c.ignore = e;

  c.toResponseType = function (b) {
    if (b instanceof k) return "arraybuffer";
    if (b instanceof p) return "blob";
    if (b instanceof l) return "document";
    if (b instanceof n || b instanceof q) return "text";
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

  a = function a(k, p) {
    this.Applicative0 = k;
    this.Bind1 = p;
  };

  var f = new a(function () {
    return e.applicativeArray;
  }, function () {
    return g.bindArray;
  });
  c.Monad = a;

  c.ap = function (k) {
    return function (p) {
      return function (l) {
        return g.bind(k.Bind1())(p)(function (n) {
          return g.bind(k.Bind1())(l)(function (q) {
            return e.pure(k.Applicative0())(n(q));
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
      k = a["Control.Monad"],
      p = a["Data.Bifunctor"],
      l = a["Data.Function"],
      n = a["Data.Functor"],
      q = a["Data.Maybe"],
      w = function () {
    function t(C) {
      this.value0 = C;
    }

    t.create = function (C) {
      return new t(C);
    };

    return t;
  }(),
      b = function () {
    function t(C) {
      this.value0 = C;
    }

    t.create = function (C) {
      return new t(C);
    };

    return t;
  }(),
      h = new n.Functor(function (t) {
    return function (C) {
      if (C instanceof w) return new w(C.value0);
      if (C instanceof b) return new b(t(C.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [C.constructor.name]);
    };
  });

  a = function a(t) {
    return function (C) {
      return function (y) {
        if (y instanceof w) return t(y.value0);
        if (y instanceof b) return C(y.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [t.constructor.name, C.constructor.name, y.constructor.name]);
      };
    };
  };

  l = a(l["const"](q.Nothing.value))(q.Just.create);
  p = new p.Bifunctor(function (t) {
    return function (C) {
      return function (y) {
        if (y instanceof w) return new w(t(y.value0));
        if (y instanceof b) return new b(C(y.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [t.constructor.name, C.constructor.name, y.constructor.name]);
      };
    };
  });
  var d = new g.Apply(function () {
    return h;
  }, function (t) {
    return function (C) {
      if (t instanceof w) return new w(t.value0);
      if (t instanceof b) return n.map(h)(t.value0)(C);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [t.constructor.name, C.constructor.name]);
    };
  }),
      r = new f.Bind(function () {
    return d;
  }, a(function (t) {
    return function (C) {
      return new w(t);
    };
  })(function (t) {
    return function (C) {
      return C(t);
    };
  })),
      x = new e.Applicative(function () {
    return d;
  }, b.create);
  e = new k.Monad(function () {
    return x;
  }, function () {
    return r;
  });
  c.Left = w;
  c.Right = b;
  c.either = a;

  c.note = function (t) {
    return q.maybe(new w(t))(b.create);
  };

  c.hush = l;
  c.functorEither = h;
  c.bifunctorEither = p;
  c.applicativeEither = x;
  c.bindEither = r;
  c.monadEither = e;
})(PS);

(function (a) {
  a["Control.Monad.Error.Class"] = a["Control.Monad.Error.Class"] || {};
  var c = a["Control.Monad.Error.Class"],
      e = a["Control.Applicative"],
      g = a["Data.Either"],
      f = a["Data.Functor"];

  c.catchError = function (k) {
    return k.catchError;
  };

  c.throwError = function (k) {
    return k.throwError;
  };

  c.MonadThrow = function (k, p) {
    this.Monad0 = k;
    this.throwError = p;
  };

  c.MonadError = function (k, p) {
    this.MonadThrow0 = k;
    this.catchError = p;
  };

  c["try"] = function (k) {
    return function (p) {
      return (0, k.catchError)(f.map(k.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(g.Right.create)(p))(function () {
        var l = e.pure(k.MonadThrow0().Monad0().Applicative0());
        return function (n) {
          return l(g.Left.create(n));
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

  a = function a(f, k) {
    this.Functor0 = f;
    this.alt = k;
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
      k = a["Control.Bind"],
      p = a["Control.Monad"],
      l = a["Control.Monad.Error.Class"],
      n = a["Control.Monad.Trans.Class"],
      q = a["Control.Monad.Writer.Class"],
      w = a["Data.Either"],
      b = a["Data.Functor"],
      h = a["Data.Semigroup"],
      d = function d(E) {
    return E;
  };

  a = new a["Data.Newtype"].Newtype(function (E) {
    return E;
  }, d);

  var r = new n.MonadTrans(function (E) {
    return function (N) {
      return k.bind(E.Bind1())(N)(function (H) {
        return g.pure(E.Applicative0())(new w.Right(H));
      });
    };
  }),
      x = function x(E) {
    return function (N) {
      return E(N);
    };
  },
      t = function t(E) {
    return new b.Functor(function (N) {
      return x(b.map(E)(b.map(w.functorEither)(N)));
    });
  },
      C = function C(E) {
    return new p.Monad(function () {
      return D(E);
    }, function () {
      return y(E);
    });
  },
      y = function y(E) {
    return new k.Bind(function () {
      return u(E);
    }, function (N) {
      return function (H) {
        return k.bind(E.Bind1())(N)(w.either(function () {
          var J = g.pure(E.Applicative0());
          return function (M) {
            return J(w.Left.create(M));
          };
        }())(function (J) {
          return H(J);
        }));
      };
    });
  },
      u = function u(E) {
    return new f.Apply(function () {
      return t(E.Bind1().Apply0().Functor0());
    }, p.ap(C(E)));
  },
      D = function D(E) {
    return new g.Applicative(function () {
      return u(E);
    }, function () {
      var N = g.pure(E.Applicative0());
      return function (H) {
        return N(w.Right.create(H));
      };
    }());
  };

  c.ExceptT = d;

  c.runExceptT = function (E) {
    return E;
  };

  c.withExceptT = function (E) {
    return function (N) {
      return function (H) {
        return b.map(E)(function (J) {
          return function (M) {
            if (M instanceof w.Right) return new w.Right(M.value0);
            if (M instanceof w.Left) return new w.Left(J(M.value0));
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 42, column 3 - line 42, column 32): " + [J.constructor.name, M.constructor.name]);
          };
        }(N))(H);
      };
    };
  };

  c.newtypeExceptT = a;
  c.functorExceptT = t;
  c.applicativeExceptT = D;
  c.bindExceptT = y;

  c.altExceptT = function (E) {
    return function (N) {
      return new e.Alt(function () {
        return t(N.Bind1().Apply0().Functor0());
      }, function (H) {
        return function (J) {
          return k.bind(N.Bind1())(H)(function (M) {
            if (M instanceof w.Right) return g.pure(N.Applicative0())(new w.Right(M.value0));
            if (M instanceof w.Left) return k.bind(N.Bind1())(J)(function (L) {
              if (L instanceof w.Right) return g.pure(N.Applicative0())(new w.Right(L.value0));
              if (L instanceof w.Left) return g.pure(N.Applicative0())(new w.Left(h.append(E)(M.value0)(L.value0)));
              throw Error("Failed pattern match at Control.Monad.Except.Trans (line 86, column 9 - line 88, column 49): " + [L.constructor.name]);
            });
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 82, column 5 - line 88, column 49): " + [M.constructor.name]);
          });
        };
      });
    };
  };

  c.monadThrowExceptT = function (E) {
    return new l.MonadThrow(function () {
      return C(E);
    }, function () {
      var N = g.pure(E.Applicative0());
      return function (H) {
        return N(w.Left.create(H));
      };
    }());
  };

  c.monadTellExceptT = function (E) {
    return new q.MonadTell(function () {
      return C(E.Monad0());
    }, function () {
      var N = n.lift(r)(E.Monad0()),
          H = q.tell(E);
      return function (J) {
        return N(H(J));
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
      k = a["Control.Monad"],
      p = a["Data.Functor"],
      l = function l(h) {
    return h;
  };

  a = new a["Data.Newtype"].Newtype(function (h) {
    return h;
  }, l);
  var n = new p.Functor(function (h) {
    return function (d) {
      return h(d);
    };
  }),
      q = new g.Apply(function () {
    return n;
  }, function (h) {
    return function (d) {
      return h(d);
    };
  }),
      w = new f.Bind(function () {
    return q;
  }, function (h) {
    return function (d) {
      return d(h);
    };
  }),
      b = new e.Applicative(function () {
    return q;
  }, l);
  e = new k.Monad(function () {
    return b;
  }, function () {
    return w;
  });
  c.Identity = l;
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

  var k = function () {
    var p = f.unwrap(g.newtypeIdentity);
    return function (l) {
      return p(e.runExceptT(l));
    };
  }();

  c.runExcept = k;
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
          k;

      for (k in g) {
        hasOwnProperty.call(g, k) && f.push(e(k)(g[k]));
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
        return function (k) {
          function p(q) {
            return function (w) {
              return g(w)(q)(k[q]);
            };
          }

          var l = f,
              n;

          for (n in k) {
            hasOwnProperty.call(k, n) && (l = e(l)(p(n)));
          }

          return l;
        };
      };
    };
  };

  a._lookup = function (e, g, f, k) {
    return f in k ? g(k[f]) : e;
  };

  a._lookupST = function (e, g, f, k) {
    return function () {
      return f in k ? g(k[f]) : e;
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
      k = a["Control.Bind"],
      p = a["Control.Monad"],
      l = new a["Data.Functor"].Functor(e.map_);
  a = new p.Monad(function () {
    return w;
  }, function () {
    return n;
  });
  var n = new k.Bind(function () {
    return q;
  }, e.bind_),
      q = new f.Apply(function () {
    return l;
  }, p.ap(a)),
      w = new g.Applicative(function () {
    return q;
  }, e.pure_);
  c.applicativeST = w;
  c.monadST = a;
})(PS);

(function (a) {
  a.foldrArray = function (c) {
    return function (e) {
      return function (g) {
        for (var f = e, k = g.length - 1; 0 <= k; k--) {
          f = c(g[k])(f);
        }

        return f;
      };
    };
  };

  a.foldlArray = function (c) {
    return function (e) {
      return function (g) {
        for (var f = e, k = g.length, p = 0; p < k; p++) {
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
      k = a["Control.Category"],
      p = a["Data.Function"],
      l = a["Data.Functor"],
      n = a["Data.Maybe"],
      q = a["Data.Monoid"],
      w = a["Data.Monoid.Disj"],
      b = a["Data.Newtype"],
      h = a["Data.Semigroup"],
      d = a["Data.Unit"];

  a = function a(y, u, D) {
    this.foldMap = y;
    this.foldl = u;
    this.foldr = D;
  };

  var r = function r(y) {
    return function (u) {
      return function (D) {
        return (0, u.foldr)(function () {
          var E = f.applySecond(y.Apply0());
          return function (N) {
            return E(D(N));
          };
        }())(g.pure(y)(d.unit));
      };
    };
  },
      x = new a(function (y) {
    return function (u) {
      return function (D) {
        if (D instanceof n.Nothing) return q.mempty(y);
        if (D instanceof n.Just) return u(D.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [u.constructor.name, D.constructor.name]);
      };
    };
  }, function (y) {
    return function (u) {
      return function (D) {
        if (D instanceof n.Nothing) return u;
        if (D instanceof n.Just) return y(u)(D.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [y.constructor.name, u.constructor.name, D.constructor.name]);
      };
    };
  }, function (y) {
    return function (u) {
      return function (D) {
        if (D instanceof n.Nothing) return u;
        if (D instanceof n.Just) return y(D.value0)(u);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [y.constructor.name, u.constructor.name, D.constructor.name]);
      };
    };
  }),
      t = function t(y) {
    return function (u) {
      return function (D) {
        return (0, y.foldr)(function (E) {
          return function (N) {
            return h.append(u.Semigroup0())(D(E))(N);
          };
        })(q.mempty(u));
      };
    };
  },
      C = new a(function (y) {
    return t(C)(y);
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
      return (0, y.foldMap)(u)(k.identity(k.categoryFn));
    };
  };

  c.traverse_ = r;

  c.for_ = function (y) {
    return function (u) {
      return p.flip(r(y)(u));
    };
  };

  c.intercalate = function (y) {
    return function (u) {
      return function (D) {
        return function (E) {
          return (0, y.foldl)(function (N) {
            return function (H) {
              return N.init ? {
                init: !1,
                acc: H
              } : {
                init: !1,
                acc: h.append(u.Semigroup0())(N.acc)(h.append(u.Semigroup0())(D)(H))
              };
            };
          })({
            init: !0,
            acc: q.mempty(u)
          })(E).acc;
        };
      };
    };
  };

  c.any = function (y) {
    return function (u) {
      return b.alaF(l.functorFn)(l.functorFn)(b.newtypeDisj)(b.newtypeDisj)(w.Disj)((0, y.foldMap)(w.monoidDisj(u)));
    };
  };

  c.find = function (y) {
    return function (u) {
      return (0, y.foldl)(function (D) {
        return function (E) {
          return D instanceof n.Nothing && u(E) ? new n.Just(E) : D;
        };
      })(n.Nothing.value);
    };
  };

  c.foldableArray = C;
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
          return function (k) {
            return c(e, g, f, k);
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
      k = a["Control.Monad.ST.Internal"],
      p = a["Data.Foldable"],
      l = a["Data.Maybe"],
      n = a["Foreign.Object.ST"],
      q = a["Unsafe.Coerce"],
      w = e._copyST,
      b = function b(t) {
    return function (C) {
      return e.runST(function () {
        var y = w(C)();
        t(y)();
        return y;
      });
    };
  },
      h = a["Data.Function.Uncurried"].runFn4(e._lookup)(l.Nothing.value)(l.Just.create),
      d = function d(t) {
    return function (C) {
      return b(n.poke(t)(C));
    };
  },
      r = function r(t) {
    return function (C) {
      return function (y) {
        return e._foldM(f.bind(t.Bind1()))(C)(g.pure(t.Applicative0())(y));
      };
    };
  },
      x = function x(t) {
    return b(function (C) {
      return r(k.monadST)(function (y) {
        return function (u) {
          return function (D) {
            return n.poke(u)(D)(y);
          };
        };
      })(C)(t);
    });
  };

  c.lookup = h;

  c.fromFoldableWith = function (t) {
    return function (C) {
      return function (y) {
        return e.runST(function () {
          var u = n["new"]();
          p.for_(k.applicativeST)(t)(y)(function (D) {
            return function () {
              var E = e._lookupST(D.value1, C(D.value1), D.value0, u)();

              return n.poke(D.value0)(E)(u)();
            };
          })();
          return u;
        });
      };
    };
  };

  c.fromHomogeneous = function (t) {
    return q.unsafeCoerce;
  };

  c.alter = function (t) {
    return function (C) {
      return function (y) {
        var u = t(h(C)(y));
        if (u instanceof l.Nothing) return b(n["delete"](C))(y);
        if (u instanceof l.Just) return d(C)(u.value0)(y);
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
      for (var g = c > e ? -1 : 1, f = Array(g * (e - c) + 1), k = c, p = 0; k !== e;) {
        f[p++] = k, k += g;
      }

      f[p] = k;
      return f;
    };
  };

  a.fromFoldableImpl = function () {
    function c(f, k) {
      this.head = f;
      this.tail = k;
    }

    function e(f) {
      return function (k) {
        return new c(f, k);
      };
    }

    var g = {};
    return function (f) {
      return function (k) {
        var p = [],
            l = 0;

        for (k = f(e)(g)(k); k !== g;) {
          p[l++] = k.head, k = k.tail;
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
          return function (k) {
            if (0 > g || g >= k.length) return e;
            k = k.slice();
            k[g] = f;
            return c(k);
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
        for (var f = e.length < g.length ? e.length : g.length, k = Array(f), p = 0; p < f; p++) {
          k[p] = c(e[p])(g[p]);
        }

        return k;
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
    function g(f, k) {
      this.value0 = f;
      this.value1 = k;
    }

    g.create = function (f) {
      return function (k) {
        return new g(f, k);
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
      k = a["Data.Boolean"],
      p = a["Data.Foldable"],
      l = a["Data.Function"],
      n = a["Data.Maybe"];
  a = e.zipWith(a["Data.Tuple"].Tuple.create);

  var q = e._updateAt(n.Just.create)(n.Nothing.value),
      w = e["uncons'"](l["const"](n.Nothing.value))(function (r) {
    return function (x) {
      return new n.Just({
        head: r,
        tail: x
      });
    };
  }),
      b = function b(r) {
    return [r];
  },
      h = e.indexImpl(n.Just.create)(n.Nothing.value),
      d = l.flip(g.bind(g.bindArray));

  g = function (r) {
    return d(function () {
      var x = n.maybe([])(b);
      return function (t) {
        return x(r(t));
      };
    }());
  }(f.identity(f.categoryFn));

  c.fromFoldable = function (r) {
    return e.fromFoldableImpl(p.foldr(r));
  };

  c.singleton = b;

  c.head = function (r) {
    return h(r)(0);
  };

  c.init = function (r) {
    if (0 === e.length(r)) return n.Nothing.value;
    if (k.otherwise) return new n.Just(e.slice(0)(e.length(r) - 1 | 0)(r));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [r.constructor.name]);
  };

  c.uncons = w;
  c.index = h;
  c.updateAt = q;
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
    function c(k) {
      return [k];
    }

    function e(k) {
      return function (p) {
        return [k, p];
      };
    }

    function g(k) {
      return function (p) {
        return function (l) {
          return [k, p, l];
        };
      };
    }

    function f(k) {
      return function (p) {
        return k.concat(p);
      };
    }

    return function (k) {
      return function (p) {
        return function (l) {
          return function (n) {
            return function (q) {
              function w(b, h) {
                switch (h - b) {
                  case 0:
                    return l([]);

                  case 1:
                    return p(c)(n(q[b]));

                  case 2:
                    return k(p(e)(n(q[b])))(n(q[b + 1]));

                  case 3:
                    return k(k(p(g)(n(q[b])))(n(q[b + 1])))(n(q[b + 2]));

                  default:
                    var d = b + 2 * Math.floor((h - b) / 4);
                    return k(p(f)(w(b, d)))(w(d, h));
                }
              }

              return w(0, q.length);
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
      k = a["Control.Category"],
      p = a["Data.Foldable"],
      l = a["Data.Functor"],
      n = a["Data.Maybe"];

  a = function a(h, d, r, x) {
    this.Foldable1 = h;
    this.Functor0 = d;
    this.sequence = r;
    this.traverse = x;
  };

  var q = new a(function () {
    return p.foldableMaybe;
  }, function () {
    return n.functorMaybe;
  }, function (h) {
    return function (d) {
      if (d instanceof n.Nothing) return g.pure(h)(n.Nothing.value);
      if (d instanceof n.Just) return l.map(h.Apply0().Functor0())(n.Just.create)(d.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [d.constructor.name]);
    };
  }, function (h) {
    return function (d) {
      return function (r) {
        if (r instanceof n.Nothing) return g.pure(h)(n.Nothing.value);
        if (r instanceof n.Just) return l.map(h.Apply0().Functor0())(n.Just.create)(d(r.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [d.constructor.name, r.constructor.name]);
      };
    };
  }),
      w = function w(h) {
    return function (d) {
      return (0, h.traverse)(d)(k.identity(k.categoryFn));
    };
  },
      b = new a(function () {
    return p.foldableArray;
  }, function () {
    return l.functorArray;
  }, function (h) {
    return w(b)(h);
  }, function (h) {
    return e.traverseArrayImpl(f.apply(h.Apply0()))(l.map(h.Apply0().Functor0()))(g.pure(h));
  });

  c.traverse = function (h) {
    return h.traverse;
  };

  c.sequence = function (h) {
    return h.sequence;
  };

  c.traversableArray = b;
  c.traversableMaybe = q;
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
      } catch (k) {
        return e(k.message);
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

  c.encodeURIComponent = function (k) {
    return e._encodeURIComponent(g["const"](f.Nothing.value), f.Just.create, k);
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
      k = a["Data.String.Common"],
      p = a["Data.Traversable"],
      l = a.Global;

  a = function () {
    var n = g.map(f.functorMaybe)(k.joinWith("&")),
        q = p.traverse(p.traversableArray)(f.applicativeMaybe)(function (w) {
      if (w.value1 instanceof f.Nothing) return l.encodeURIComponent(w.value0);
      if (w.value1 instanceof f.Just) return e.apply(f.applyMaybe)(g.map(f.functorMaybe)(function (b) {
        return function (h) {
          return b + ("=" + h);
        };
      })(l.encodeURIComponent(w.value0)))(l.encodeURIComponent(w.value1.value0));
      throw Error("Failed pattern match at Data.FormURLEncoded (line 37, column 18 - line 39, column 108): " + [w.constructor.name]);
    });
    return function (w) {
      return n(q(w));
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
  var k = new a(function (p) {
    if (p) return "true";
    if (!p) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [p.constructor.name]);
  });
  c.Show = a;

  c.show = function (p) {
    return p.show;
  };

  c.showBoolean = k;
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
    function D() {}

    D.value = new D();
    return D;
  }(),
      f = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      k = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      p = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      l = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      n = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      q = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      w = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      b = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      h = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      d = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      r = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      x = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      t = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      C = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      y = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      u = new a.Show(function (D) {
    if (D instanceof g) return "OPTIONS";
    if (D instanceof f) return "GET";
    if (D instanceof k) return "HEAD";
    if (D instanceof p) return "POST";
    if (D instanceof l) return "PUT";
    if (D instanceof n) return "DELETE";
    if (D instanceof q) return "TRACE";
    if (D instanceof w) return "CONNECT";
    if (D instanceof b) return "PROPFIND";
    if (D instanceof h) return "PROPPATCH";
    if (D instanceof d) return "MKCOL";
    if (D instanceof r) return "COPY";
    if (D instanceof x) return "MOVE";
    if (D instanceof t) return "LOCK";
    if (D instanceof C) return "UNLOCK";
    if (D instanceof y) return "PATCH";
    throw Error("Failed pattern match at Data.HTTP.Method (line 40, column 1 - line 56, column 23): " + [D.constructor.name]);
  });

  e = e.either(a.show(u))(function (D) {
    return D;
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
    function n(q) {
      this.value0 = q;
    }

    n.create = function (q) {
      return new n(q);
    };

    return n;
  }(),
      k = function () {
    function n(q) {
      this.value0 = q;
    }

    n.create = function (q) {
      return new n(q);
    };

    return n;
  }();

  a = function a(n, q) {
    this.Monad0 = n;
    this.tailRecM = q;
  };

  var p = function p(n) {
    return function (q) {
      q = n(q);

      for (var w = !1, b; !w;) {
        if (b = q, b instanceof f) q = n(b.value0), b = void 0;else if (b instanceof k) w = !0, b = b.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [b.constructor.name]);
      }

      return b;
    };
  },
      l = new a(function () {
    return g.monadEither;
  }, function (n) {
    return function (q) {
      return p(function (w) {
        if (w instanceof g.Left) return new k(new g.Left(w.value0));
        if (w instanceof g.Right && w.value0 instanceof f) return new f(n(w.value0.value0));
        if (w instanceof g.Right && w.value0 instanceof k) return new k(new g.Right(w.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [w.constructor.name]);
      })(n(q));
    };
  });

  e = new e.Bifunctor(function (n) {
    return function (q) {
      return function (w) {
        if (w instanceof f) return new f(n(w.value0));
        if (w instanceof k) return new k(q(w.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [n.constructor.name, q.constructor.name, w.constructor.name]);
      };
    };
  });
  c.Loop = f;
  c.Done = k;
  c.MonadRec = a;

  c.tailRecM = function (n) {
    return n.tailRecM;
  };

  c.bifunctorStep = e;
  c.monadRecEither = l;
})(PS);

(function (a) {
  a["Control.Plus"] = a["Control.Plus"] || {};
  var c = a["Control.Plus"],
      e = a["Control.Alt"];

  a = function a(f, k) {
    this.Alt0 = f;
    this.empty = k;
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
      k = a["Data.Semigroup"],
      p = a["Data.Show"],
      l = function () {
    function n(q, w) {
      this.value0 = q;
      this.value1 = w;
    }

    n.create = function (q) {
      return function (w) {
        return new n(q, w);
      };
    };

    return n;
  }();

  c.NonEmpty = l;

  c.singleton = function (n) {
    return function (q) {
      return new l(q, e.empty(n));
    };
  };

  c.showNonEmpty = function (n) {
    return function (q) {
      return new p.Show(function (w) {
        return "(NonEmpty " + (p.show(n)(w.value0) + (" " + (p.show(q)(w.value1) + ")")));
      });
    };
  };

  c.functorNonEmpty = function (n) {
    return new f.Functor(function (q) {
      return function (w) {
        return new l(q(w.value0), f.map(n)(q)(w.value1));
      };
    });
  };

  c.foldableNonEmpty = function (n) {
    return new g.Foldable(function (q) {
      return function (w) {
        return function (b) {
          return k.append(q.Semigroup0())(w(b.value0))(g.foldMap(n)(q)(w)(b.value1));
        };
      };
    }, function (q) {
      return function (w) {
        return function (b) {
          return g.foldl(n)(q)(q(w)(b.value0))(b.value1);
        };
      };
    }, function (q) {
      return function (w) {
        return function (b) {
          return q(b.value0)(g.foldr(n)(q)(w)(b.value1));
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
      k = a["Control.Plus"],
      p = a["Data.Foldable"],
      l = a["Data.Function"],
      n = a["Data.Functor"],
      q = a["Data.Monoid"],
      w = a["Data.NonEmpty"],
      b = a["Data.Semigroup"],
      h = a["Data.Show"],
      d = function () {
    function L() {}

    L.value = new L();
    return L;
  }(),
      r = function () {
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
        function I(G, F) {
          if (F instanceof r && F.value1 instanceof r && F.value1.value1 instanceof r) v = new r(F, G), V = F.value1.value1.value1;else return B = !0, function (P) {
            return function (Y) {
              for (var pa = P, va = !1, z; !va;) {
                z = pa;
                var xa = Y;
                z instanceof r && z.value0 instanceof r && z.value0.value1 instanceof r && z.value0.value1.value1 instanceof r ? (pa = z.value1, Y = new r(L(z.value0.value0), new r(L(z.value0.value1.value0), new r(L(z.value0.value1.value1.value0), xa))), z = void 0) : (va = !0, z = xa);
              }

              return z;
            };
          }(G)(function (P) {
            return P instanceof r && P.value1 instanceof r && P.value1.value1 instanceof d ? new r(L(P.value0), new r(L(P.value1.value0), d.value)) : P instanceof r && P.value1 instanceof d ? new r(L(P.value0), d.value) : d.value;
          }(F));
        }

        for (var v = U, B = !1, O; !B;) {
          O = I(v, V);
        }

        return O;
      };
    }(d.value);
  }),
      t = w.functorNonEmpty(x),
      C = new p.Foldable(function (L) {
    return function (U) {
      return p.foldl(C)(function (V) {
        var I = b.append(L.Semigroup0())(V);
        return function (v) {
          return I(U(v));
        };
      })(q.mempty(L));
    };
  }, function (L) {
    return function (U) {
      return function (V) {
        for (var I = U, v = !1, B; !v;) {
          B = I;
          var O = V;
          if (O instanceof d) v = !0;else {
            if (O instanceof r) I = L(B)(O.value0), V = O.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [O.constructor.name]);
            B = void 0;
          }
        }

        return B;
      };
    };
  }, function (L) {
    return function (U) {
      var V = p.foldl(C)(l.flip(r.create))(d.value),
          I = p.foldl(C)(l.flip(L))(U);
      return function (v) {
        return I(V(v));
      };
    };
  });

  a = w.foldableNonEmpty(C);

  var y = new b.Semigroup(function (L) {
    return function (U) {
      return p.foldr(C)(r.create)(U)(L);
    };
  }),
      u = new q.Monoid(function () {
    return y;
  }, d.value),
      D = new b.Semigroup(function (L) {
    return function (U) {
      return new w.NonEmpty(L.value0, b.append(y)(L.value1)(new r(U.value0, U.value1)));
    };
  }),
      E = function E(L) {
    return new h.Show(function (U) {
      return U instanceof d ? "Nil" : "(" + (p.intercalate(C)(q.monoidString)(" : ")(n.map(x)(h.show(L))(U)) + " : Nil)");
    });
  },
      N = new f.Apply(function () {
    return x;
  }, function (L) {
    return function (U) {
      if (L instanceof d) return d.value;
      if (L instanceof r) return b.append(y)(n.map(x)(L.value0)(U))(f.apply(N)(L.value1)(U));
      throw Error("Failed pattern match at Data.List.Types (line 155, column 1 - line 157, column 48): " + [L.constructor.name, U.constructor.name]);
    };
  }),
      H = new f.Apply(function () {
    return t;
  }, function (L) {
    return function (U) {
      return new w.NonEmpty(L.value0(U.value0), b.append(y)(f.apply(N)(L.value1)(new r(U.value0, d.value)))(f.apply(N)(new r(L.value0, L.value1))(U.value1)));
    };
  }),
      J = new e.Alt(function () {
    return x;
  }, b.append(y)),
      M = new k.Plus(function () {
    return J;
  }, d.value);

  e = new g.Applicative(function () {
    return H;
  }, function () {
    var L = w.singleton(M);
    return function (U) {
      return L(U);
    };
  }());
  c.Nil = d;
  c.Cons = r;

  c.NonEmptyList = function (L) {
    return L;
  };

  c.monoidList = u;
  c.foldableList = C;
  c.plusList = M;

  c.showNonEmptyList = function (L) {
    return new h.Show(function (U) {
      return "(NonEmptyList " + (h.show(w.showNonEmpty(L)(E(L)))(U) + ")");
    });
  };

  c.functorNonEmptyList = t;
  c.applicativeNonEmptyList = e;
  c.semigroupNonEmptyList = D;
  c.foldableNonEmptyList = a;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var c = a["Data.List"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      f = a["Control.Bind"],
      k = a["Control.Monad.Rec.Class"],
      p = a["Data.Bifunctor"],
      l = a["Data.Functor"],
      n = a["Data.List.Types"],
      q = a["Data.Maybe"],
      w = a["Data.Unit"],
      b = function () {
    return function (h) {
      return function (d) {
        for (var r = h, x = !1, t; !x;) {
          t = r;
          var C = d;
          if (C instanceof n.Nil) x = !0;else {
            if (C instanceof n.Cons) r = new n.Cons(C.value0, t), d = C.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [t.constructor.name, C.constructor.name]);
            t = void 0;
          }
        }

        return t;
      };
    }(n.Nil.value);
  }();

  c.manyRec = function (h) {
    return function (d) {
      return function (r) {
        return k.tailRecM(h)(function (x) {
          return f.bind(h.Monad0().Bind1())(e.alt(d.Plus1().Alt0())(l.map(d.Plus1().Alt0().Functor0())(k.Loop.create)(r))(g.pure(d.Applicative0())(new k.Done(w.unit))))(function (t) {
            return g.pure(d.Applicative0())(p.bimap(k.bifunctorStep)(function (C) {
              return new n.Cons(C, x);
            })(function (C) {
              return b(x);
            })(t));
          });
        })(n.Nil.value);
      };
    };
  };

  c.uncons = function (h) {
    if (h instanceof n.Nil) return q.Nothing.value;
    if (h instanceof n.Cons) return new q.Just({
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
          return function (k) {
            return function (p) {
              for (var l = [];;) {
                p = k(p);
                if (c(p)) return l;
                p = e(p);
                l.push(g(p));
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
          return function (k) {
            return function (p) {
              for (var l = [];;) {
                p = k(p);
                l.push(g(p));
                p = f(p);
                if (c(p)) return l;
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

  var k = function k(p) {
    return function (l) {
      return function (n) {
        return (0, p.unfoldr1)(function (q) {
          if (0 >= q) return new f.Tuple(n, g.Nothing.value);
          if (e.otherwise) return new f.Tuple(n, new g.Just(q - 1 | 0));
          throw Error("Failed pattern match at Data.Unfoldable1 (line 64, column 5 - line 64, column 39): " + [q.constructor.name]);
        })(l - 1 | 0);
      };
    };
  };

  c.unfoldr1 = function (p) {
    return p.unfoldr1;
  };

  c.singleton = function (p) {
    return k(p)(1);
  };

  c.unfoldable1Array = a;
})(PS);

(function (a) {
  a["Data.Unfoldable"] = a["Data.Unfoldable"] || {};
  var c = a["Data.Unfoldable"],
      e = a["Data.Function"],
      g = a["Data.Functor"],
      f = a["Data.Maybe"],
      k = a["Data.Tuple"],
      p = a["Data.Unfoldable1"];
  a = new function (l, n) {
    this.Unfoldable10 = l;
    this.unfoldr = n;
  }(function () {
    return p.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(f.isNothing)(f.fromJust())(k.fst)(k.snd));

  c.unfoldr = function (l) {
    return l.unfoldr;
  };

  c.fromMaybe = function (l) {
    return (0, l.unfoldr)(function (n) {
      return g.map(f.functorMaybe)(e.flip(k.Tuple.create)(f.Nothing.value))(n);
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
      k = a["Data.Maybe"],
      p = a["Data.NonEmpty"],
      l = a["Data.Tuple"],
      n = a["Data.Unfoldable"];

  a = function () {
    var q = p.singleton(f.plusList);
    return function (w) {
      return f.NonEmptyList(q(w));
    };
  }();

  c.toUnfoldable = function (q) {
    var w = n.unfoldr(q)(function (b) {
      return e.map(k.functorMaybe)(function (h) {
        return new l.Tuple(h.head, h.tail);
      })(g.uncons(b));
    });
    return function (b) {
      return w(new f.Cons(b.value0, b.value1));
    };
  };

  c.singleton = a;

  c.head = function (q) {
    return q.value0;
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
    function e(d, r, x, t) {
      this.tag = d;
      this._1 = r;
      this._2 = x;
      this._3 = t;
    }

    function g(d) {
      var r = function r(x, t, C) {
        return new e(d, x, t, C);
      };

      r.tag = d;
      return r;
    }

    function f(d) {
      return new e("Pure", void 0);
    }

    function k(d) {
      try {
        d();
      } catch (r) {
        setTimeout(function () {
          throw r;
        }, 0);
      }
    }

    function p(d, r, x) {
      try {
        return r(x());
      } catch (t) {
        return d(t);
      }
    }

    function l(d, r, x) {
      try {
        return r(x)();
      } catch (t) {
        return x(d(t))(), f;
      }
    }

    function n(d, r, x) {
      function t(v) {
        for (var B, O, G;;) {
          switch (G = O = B = null, u) {
            case 2:
              u = 1;

              try {
                D = H(D), null === J ? H = null : (H = J._1, J = J._2);
              } catch (P) {
                u = 5, E = d.left(P), D = null;
              }

              break;

            case 3:
              d.isLeft(D) ? (u = 5, E = D, D = null) : null === H ? u = 5 : (u = 2, D = d.fromRight(D));
              break;

            case 1:
              switch (D.tag) {
                case "Bind":
                  H && (J = new e("Cons", H, J));
                  H = D._2;
                  u = 1;
                  D = D._1;
                  break;

                case "Pure":
                  null === H ? (u = 5, D = d.right(D._1)) : (u = 2, D = D._1);
                  break;

                case "Sync":
                  u = 3;
                  D = p(d.left, d.right, D._1);
                  break;

                case "Async":
                  u = 4;
                  D = l(d.left, D._1, function (P) {
                    return function () {
                      y === v && (y++, h.enqueue(function () {
                        y === v + 1 && (u = 3, D = P, t(y));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  u = 5;
                  E = d.left(D._1);
                  D = null;
                  break;

                case "Catch":
                  M = null === H ? new e("Cons", D, M, N) : new e("Cons", D, new e("Cons", new e("Resume", H, J), M, N), N);
                  J = H = null;
                  u = 1;
                  D = D._1;
                  break;

                case "Bracket":
                  L++;
                  M = null === H ? new e("Cons", D, M, N) : new e("Cons", D, new e("Cons", new e("Resume", H, J), M, N), N);
                  J = H = null;
                  u = 1;
                  D = D._1;
                  break;

                case "Fork":
                  u = 3;
                  B = n(d, r, D._2);
                  r && r.register(B);
                  D._1 && B.run();
                  D = d.right(B);
                  break;

                case "Sequential":
                  u = 1, D = w(d, r, D._1);
              }

              break;

            case 5:
              J = H = null;
              if (null === M) u = 6, D = N || E || D;else switch (B = M._3, G = M._1, M = M._2, G.tag) {
                case "Catch":
                  N && N !== B && 0 === L ? u = 5 : E && (u = 1, D = G._2(d.fromLeft(E)), E = null);
                  break;

                case "Resume":
                  N && N !== B && 0 === L || E ? u = 5 : (H = G._1, J = G._2, u = 2, D = d.fromRight(D));
                  break;

                case "Bracket":
                  L--;
                  null === E && (O = d.fromRight(D), M = new e("Cons", new e("Release", G._2, O), M, B), N === B || 0 < L) && (u = 1, D = G._3(O));
                  break;

                case "Release":
                  M = new e("Cons", new e("Finalized", D, E), M, N);
                  u = 1;
                  D = N && N !== B && 0 === L ? G._1.killed(d.fromLeft(N))(G._2) : E ? G._1.failed(d.fromLeft(E))(G._2) : G._1.completed(d.fromRight(D))(G._2);
                  E = null;
                  L++;
                  break;

                case "Finalizer":
                  L++;
                  M = new e("Cons", new e("Finalized", D, E), M, N);
                  u = 1;
                  D = G._1;
                  break;

                case "Finalized":
                  L--, u = 5, D = G._1, E = G._2;
              }
              break;

            case 6:
              for (var F in V) {
                V.hasOwnProperty(F) && (I = I && V[F].rethrow, k(V[F].handler(D)));
              }

              V = null;
              N && E ? setTimeout(function () {
                throw d.fromLeft(E);
              }, 0) : d.isLeft(D) && I && setTimeout(function () {
                if (I) throw d.fromLeft(D);
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

      function C(v) {
        return function () {
          if (6 === u) return I = I && v.rethrow, v.handler(D)(), function () {};
          var B = U++;
          V = V || {};
          V[B] = v;
          return function () {
            null !== V && delete V[B];
          };
        };
      }

      var y = 0,
          u = 0,
          D = x,
          E = null,
          N = null,
          H = null,
          J = null,
          M = null,
          L = 0,
          U = 0,
          V = null,
          I = !0;
      return {
        kill: function kill(v, B) {
          return function () {
            if (6 === u) return B(d.right(void 0))(), function () {};
            var O = C({
              rethrow: !1,
              handler: function handler() {
                return B(d.right(void 0));
              }
            })();

            switch (u) {
              case 0:
                N = d.left(v);
                u = 6;
                D = N;
                t(y);
                break;

              case 4:
                null === N && (N = d.left(v));
                0 === L && (4 === u && (M = new e("Cons", new e("Finalizer", D(v)), M, N)), u = 5, E = D = null, t(++y));
                break;

              default:
                null === N && (N = d.left(v)), 0 === L && (u = 5, E = D = null);
            }

            return O;
          };
        },
        join: function join(v) {
          return function () {
            var B = C({
              rethrow: !1,
              handler: v
            })();
            0 === u && t(y);
            return B;
          };
        },
        onComplete: C,
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

    function q(d, r, x, t) {
      function C(V, I, v) {
        var B = I,
            O = null,
            G = null,
            F = 0;
        I = {};

        a: for (;;) {
          var P = null;

          switch (B.tag) {
            case "Forked":
              B._3 === b && (P = N[B._1], I[F++] = P.kill(V, function (Y) {
                return function () {
                  F--;
                  0 === F && v(Y)();
                };
              }));
              if (null === O) break a;
              B = O._2;
              null === G ? O = null : (O = G._1, G = G._2);
              break;

            case "Map":
              B = B._2;
              break;

            case "Apply":
            case "Alt":
              O && (G = new e("Cons", O, G)), O = B, B = B._1;
          }
        }

        if (0 === F) v(d.right(void 0))();else for (V = 0, P = F; V < P; V++) {
          I[V] = I[V]();
        }
        return I;
      }

      function y(V, I, v) {
        var B, O;

        if (d.isLeft(V)) {
          var G = V;
          var F = null;
        } else F = V, G = null;

        for (;;) {
          var P = O = B = V = null;
          if (null !== L) break;

          if (null === I) {
            t(G || F)();
            break;
          }

          if (I._3 !== b) break;

          switch (I.tag) {
            case "Map":
              null === G ? (I._3 = d.right(I._1(d.fromRight(F))), F = I._3) : I._3 = G;
              break;

            case "Apply":
              V = I._1._3;
              B = I._2._3;

              if (G) {
                if (I._3 = G, O = !0, P = H++, J[P] = C(M, G === V ? I._2 : I._1, function () {
                  return function () {
                    delete J[P];
                    O ? O = !1 : null === v ? y(G, null, null) : y(G, v._1, v._2);
                  };
                }), O) {
                  O = !1;
                  return;
                }
              } else {
                if (V === b || B === b) return;
                F = d.right(d.fromRight(V)(d.fromRight(B)));
                I._3 = F;
              }

              break;

            case "Alt":
              V = I._1._3;
              B = I._2._3;
              if (V === b && d.isLeft(B) || B === b && d.isLeft(V)) return;
              if (V !== b && d.isLeft(V) && B !== b && d.isLeft(B)) G = F === V ? B : V, F = null, I._3 = G;else if (I._3 = F, O = !0, P = H++, J[P] = C(M, F === V ? I._2 : I._1, function () {
                return function () {
                  delete J[P];
                  O ? O = !1 : null === v ? y(F, null, null) : y(F, v._1, v._2);
                };
              }), O) {
                O = !1;
                return;
              }
          }

          null === v ? I = null : (I = v._1, v = v._2);
        }
      }

      function u(V) {
        return function (I) {
          return function () {
            delete N[V._1];
            V._3 = I;
            y(I, V._2._1, V._2._2);
          };
        };
      }

      function D(V, I) {
        L = d.left(V);
        var v;

        for (v in J) {
          if (J.hasOwnProperty(v)) {
            var B = J[v];

            for (v in B) {
              if (B.hasOwnProperty(v)) B[v]();
            }
          }
        }

        J = null;
        var O = C(V, U, I);
        return function (G) {
          return new e("Async", function (F) {
            return function () {
              for (var P in O) {
                if (O.hasOwnProperty(P)) O[P]();
              }

              return f;
            };
          });
        };
      }

      var E = 0,
          N = {},
          H = 0,
          J = {},
          M = Error("[ParAff] Early exit"),
          L = null,
          U = b;

      (function () {
        var V = 1,
            I = x,
            v = null,
            B = null;

        a: for (;;) {
          switch (V) {
            case 1:
              switch (I.tag) {
                case "Map":
                  v && (B = new e("Cons", v, B));
                  v = new e("Map", I._1, b, b);
                  I = I._2;
                  break;

                case "Apply":
                  v && (B = new e("Cons", v, B));
                  v = new e("Apply", b, I._2, b);
                  I = I._1;
                  break;

                case "Alt":
                  v && (B = new e("Cons", v, B));
                  v = new e("Alt", b, I._2, b);
                  I = I._1;
                  break;

                default:
                  var O = E++;
                  V = 5;
                  var G = I;
                  I = new e("Forked", O, new e("Cons", v, B), b);
                  G = n(d, r, G);
                  G.onComplete({
                    rethrow: !1,
                    handler: u(I)
                  })();
                  N[O] = G;
                  r && r.register(G);
              }

              break;

            case 5:
              if (null === v) break a;
              v._1 === b ? (v._1 = I, V = 1, I = v._2, v._2 = b) : (v._2 = I, I = v, null === B ? v = null : (v = B._1, B = B._2));
          }
        }

        U = I;

        for (O = 0; O < E; O++) {
          N[O].run();
        }
      })();

      return function (V) {
        return new e("Async", function (I) {
          return function () {
            return D(V, I);
          };
        });
      };
    }

    function w(d, r, x) {
      return new e("Async", function (t) {
        return function () {
          return q(d, r, x, t);
        };
      });
    }

    var b = {},
        h = function () {
      function d() {
        for (C = !0; 0 !== r;) {
          r--;
          var y = t[x];
          t[x] = void 0;
          x = (x + 1) % 1024;
          y();
        }

        C = !1;
      }

      var r = 0,
          x = 0,
          t = Array(1024),
          C = !1;
      return {
        isDraining: function isDraining() {
          return C;
        },
        enqueue: function enqueue(y) {
          if (1024 === r) {
            var u = C;
            d();
            C = u;
          }

          t[(x + r) % 1024] = y;
          r++;
          C || d();
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
      var r = {},
          x = 0,
          t = 0;
      return {
        register: function register(C) {
          var y = x++;
          C.onComplete({
            rethrow: !0,
            handler: function handler(u) {
              return function () {
                t--;
                delete r[y];
              };
            }
          })();
          r[y] = C;
          t++;
        },
        isEmpty: function isEmpty() {
          return 0 === t;
        },
        killAll: function killAll(C, y) {
          return function () {
            function u(H) {
              E[H] = r[H].kill(C, function (J) {
                return function () {
                  delete E[H];
                  D--;
                  d.isLeft(J) && d.fromLeft(J) && setTimeout(function () {
                    throw d.fromLeft(J);
                  }, 0);
                  0 === D && y();
                };
              })();
            }

            if (0 === t) return y();
            var D = 0,
                E = {},
                N;

            for (N in r) {
              r.hasOwnProperty(N) && (D++, u(N));
            }

            r = {};
            t = x = 0;
            return function (H) {
              return new e("Sync", function () {
                for (var J in E) {
                  if (E.hasOwnProperty(J)) E[J]();
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
      return c.Async(function (k) {
        return function () {
          var p = e(f, k(g()));
          return function () {
            return c.Sync(function () {
              var l = 0 === f && "undefined" !== typeof clearImmediate ? clearImmediate(p) : clearTimeout(p);
              return g(l);
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
      f = function f(k) {
    return function (p) {
      return function (l) {
        var n = e.sequential(k),
            q = g.traverse_(k.Applicative1())(p)(function () {
          var w = e.parallel(k);
          return function (b) {
            return w(l(b));
          };
        }());
        return function (w) {
          return n(q(w));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (k) {
    return function (p) {
      return f(k)(p)(c.identity(c.categoryFn));
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
      k = a["Control.Bind"],
      p = a["Control.Monad"],
      l = a["Data.Functor"],
      n = a["Data.Monoid"],
      q = a["Data.Semigroup"];
  a = new p.Monad(function () {
    return h;
  }, function () {
    return w;
  });
  var w = new k.Bind(function () {
    return b;
  }, e.bindE),
      b = new f.Apply(function () {
    return d;
  }, p.ap(a)),
      h = new g.Applicative(function () {
    return b;
  }, e.pureE),
      d = new l.Functor(g.liftA1(h));
  c.functorEffect = d;
  c.applyEffect = b;
  c.applicativeEffect = h;
  c.bindEffect = w;
  c.monadEffect = a;

  c.monoidEffect = function (r) {
    return new n.Monoid(function () {
      var x = r.Semigroup0();
      return new q.Semigroup(f.lift2(b)(q.append(x)));
    }, e.pureE(n.mempty(r)));
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var c = a["Effect.Class"],
      e = a["Control.Category"],
      g = a.Effect;

  a = function a(f, k) {
    this.Monad0 = f;
    this.liftEffect = k;
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
      k = a["Data.Functor"],
      p = a.Effect;
  a = new a["Data.Show"].Show(e.showErrorImpl);

  c["throw"] = function (l) {
    return e.throwException(e.error(l));
  };

  c["try"] = function (l) {
    return e.catchException(function () {
      var n = g.pure(p.applicativeEffect);
      return function (q) {
        return n(f.Left.create(q));
      };
    }())(k.map(p.functorEffect)(f.Right.create)(l));
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
      k = a["Control.Apply"],
      p = a["Control.Bind"],
      l = a["Control.Monad"],
      n = a["Control.Monad.Error.Class"],
      q = a["Control.Parallel"],
      w = a["Control.Parallel.Class"],
      b = a["Control.Plus"],
      h = a["Data.Either"],
      d = a["Data.Foldable"],
      r = a["Data.Function"],
      x = a["Data.Functor"],
      t = a["Data.Monoid"],
      C = a["Data.Semigroup"],
      y = a["Data.Unit"],
      u = a.Effect,
      D = a["Effect.Class"],
      E = a["Effect.Exception"],
      N = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var H = new x.Functor(e._parAffMap),
      J = new x.Functor(e._map),
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
      U = new k.Apply(function () {
    return H;
  }, e._parAffApply),
      V = new l.Monad(function () {
    return B;
  }, function () {
    return I;
  }),
      I = new p.Bind(function () {
    return v;
  }, e._bind),
      v = new k.Apply(function () {
    return J;
  }, l.ap(V)),
      B = new f.Applicative(function () {
    return v;
  }, e._pure),
      O = new D.MonadEffect(function () {
    return V;
  }, e._liftEffect);

  k = function () {
    var ka = D.liftEffect(O);
    return function (Aa) {
      return r["const"](ka(Aa));
    };
  }();

  var G = new n.MonadThrow(function () {
    return V;
  }, e._throwError),
      F = new n.MonadError(function () {
    return G;
  }, e._catchError),
      P = function P(ka) {
    return function (Aa) {
      return L(p.bindFlipped(I)(function () {
        var R = D.liftEffect(O);
        return function (ia) {
          return R(ka(ia));
        };
      }())(n["try"](F)(Aa)));
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
        Aa = f.pure(B);
    return function (R) {
      return ka(Aa(R));
    };
  }()),
      va = new C.Semigroup(function (ka) {
    return function (Aa) {
      return function (R) {
        return q.parSequence_(Y)(d.foldableArray)([ka(R), Aa(R)]);
      };
    };
  });

  C = r["const"](f.pure(B)(y.unit));
  var z = new t.Monoid(function () {
    return va;
  }, C);
  y = e.makeAff(function (ka) {
    return f.pure(u.applicativeEffect)(t.mempty(z));
  });
  var xa = new g.Alt(function () {
    return H;
  }, e._parAffAlt),
      X = new g.Alt(function () {
    return J;
  }, function (ka) {
    return function (Aa) {
      return n.catchError(F)(ka)(r["const"](Aa));
    };
  });
  g = new b.Plus(function () {
    return X;
  }, n.throwError(G)(E.error("Always fails")));
  b = new b.Plus(function () {
    return xa;
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
  c.nonCanceler = C;
  c.effectCanceler = k;
  c.functorAff = J;
  c.applicativeAff = B;
  c.bindAff = I;
  c.monadErrorAff = F;
  c.monadEffectAff = O;
  c.altParAff = xa;
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
        var k = g(function (p) {
          return f(c.Left.create(p))();
        }, function (p) {
          return f(c.Right.create(p))();
        });
        return function (p) {
          return e.makeAff(function (l) {
            return function () {
              k(p, function (n) {
                return l(c.Left.create(n))();
              }, function (n) {
                return l(c.Right.create(n))();
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
      k = a["Control.Monad.Except.Trans"],
      p = a["Data.Boolean"],
      l = a["Data.Identity"],
      n = a["Data.List.NonEmpty"],
      q = a["Data.Show"],
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
    function y(u, D) {
      this.value0 = u;
      this.value1 = D;
    }

    y.create = function (u) {
      return function (D) {
        return new y(u, D);
      };
    };

    return y;
  }(),
      h = function () {
    function y(u, D) {
      this.value0 = u;
      this.value1 = D;
    }

    y.create = function (u) {
      return function (D) {
        return new y(u, D);
      };
    };

    return y;
  }(),
      d = function () {
    function y(u, D) {
      this.value0 = u;
      this.value1 = D;
    }

    y.create = function (u) {
      return function (D) {
        return new y(u, D);
      };
    };

    return y;
  }(),
      r = new q.Show(function (y) {
    if (y instanceof w) return "(ForeignError " + (q.show(q.showString)(y.value0) + ")");
    if (y instanceof h) return "(ErrorAtIndex " + (q.show(q.showInt)(y.value0) + (" " + (q.show(r)(y.value1) + ")")));
    if (y instanceof d) return "(ErrorAtProperty " + (q.show(q.showString)(y.value0) + (" " + (q.show(r)(y.value1) + ")")));
    if (y instanceof b) return "(TypeMismatch " + (q.show(q.showString)(y.value0) + (" " + (q.show(q.showString)(y.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [y.constructor.name]);
  }),
      x = function x(y) {
    if (y instanceof w) return y.value0;
    if (y instanceof h) return "Error at array index " + (q.show(q.showInt)(y.value0) + (": " + x(y.value1)));
    if (y instanceof d) return "Error at property " + (q.show(q.showString)(y.value0) + (": " + x(y.value1)));
    if (y instanceof b) return "Type mismatch: expected " + (y.value0 + (", found " + y.value1));
    throw Error("Failed pattern match at Foreign (line 72, column 1 - line 72, column 45): " + [y.constructor.name]);
  },
      t = function () {
    var y = f.throwError(k.monadThrowExceptT(l.monadIdentity));
    return function (u) {
      return y(n.singleton(u));
    };
  }();

  a = function a(y) {
    return function (u) {
      if (e.tagOf(u) === y) return g.pure(k.applicativeExceptT(l.monadIdentity))(e.unsafeFromForeign(u));
      if (p.otherwise) return t(new b(y, e.tagOf(u)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [y.constructor.name, u.constructor.name]);
    };
  };

  var C = a("String");
  c.ForeignError = w;
  c.TypeMismatch = b;
  c.ErrorAtIndex = h;
  c.ErrorAtProperty = d;
  c.renderForeignError = x;
  c.unsafeReadTagged = a;
  c.readString = C;

  c.readArray = function (y) {
    if (e.isArray(y)) return g.pure(k.applicativeExceptT(l.monadIdentity))(e.unsafeFromForeign(y));
    if (p.otherwise) return t(new b("array", e.tagOf(y)));
    throw Error("Failed pattern match at Foreign (line 147, column 1 - line 147, column 42): " + [y.constructor.name]);
  };

  c.fail = t;
  c.showForeignError = r;
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
      k = a["Affjax.ResponseFormat"],
      p = a["Affjax.ResponseHeader"],
      l = a["Control.Applicative"],
      n = a["Control.Bind"],
      q = a["Control.Monad.Error.Class"],
      w = a["Control.Monad.Except"],
      b = a["Control.Monad.Except.Trans"],
      h = a["Data.Argonaut.Core"],
      d = a["Data.Argonaut.Parser"],
      r = a["Data.Array"],
      x = a["Data.Either"],
      t = a["Data.Eq"],
      C = a["Data.Foldable"],
      y = a["Data.FormURLEncoded"],
      u = a["Data.Function"],
      D = a["Data.Functor"],
      E = a["Data.HTTP.Method"],
      N = a["Data.HeytingAlgebra"],
      H = a["Data.Identity"],
      J = a["Data.List.NonEmpty"],
      M = a["Data.Maybe"],
      L = a["Data.Nullable"],
      U = a["Data.Unit"],
      V = a["Effect.Aff"],
      I = a["Effect.Aff.Compat"],
      v = a["Effect.Exception"],
      B = a.Foreign,
      O = function () {
    function X(ka) {
      this.value0 = ka;
    }

    X.create = function (ka) {
      return new X(ka);
    };

    return X;
  }(),
      G = function () {
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
      F = function () {
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
      return "" === qa ? l.pure(b.applicativeExceptT(H.monadIdentity))(h.jsonEmptyObject) : x.either(function (Ba) {
        return B.fail(B.ForeignError.create(Ba));
      })(l.pure(b.applicativeExceptT(H.monadIdentity)))(d.jsonParser(qa));
    },
        Aa = function () {
      if (X.responseFormat instanceof k.ArrayBuffer) return B.unsafeReadTagged("ArrayBuffer");
      if (X.responseFormat instanceof k.Blob) return B.unsafeReadTagged("Blob");
      if (X.responseFormat instanceof k.Document) return B.unsafeReadTagged("Document");
      if (X.responseFormat instanceof k.Json) return n.composeKleisliFlipped(b.bindExceptT(H.monadIdentity))(function (qa) {
        return X.responseFormat.value0(ka(qa));
      })(B.unsafeReadTagged("String"));
      if (X.responseFormat instanceof k.String) return B.unsafeReadTagged("String");
      if (X.responseFormat instanceof k.Ignore) return u["const"](X.responseFormat.value0(l.pure(b.applicativeExceptT(H.monadIdentity))(U.unit)));
      throw Error("Failed pattern match at Affjax (line 237, column 18 - line 243, column 57): " + [X.responseFormat.constructor.name]);
    }(),
        R = function R(qa) {
      if (qa instanceof g.ArrayView) return x.Right.create(qa.value0(B.unsafeToForeign));
      if (qa instanceof g.Blob || qa instanceof g.Document || qa instanceof g.String || qa instanceof g.FormData) return x.Right.create(B.unsafeToForeign(qa.value0));
      if (qa instanceof g.FormURLEncoded) return x.note("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(D.map(M.functorMaybe)(B.unsafeToForeign)(y.encode(qa.value0)));
      if (qa instanceof g.Json) return x.Right.create(B.unsafeToForeign(h.stringify(qa.value0)));
      throw Error("Failed pattern match at Affjax (line 203, column 20 - line 218, column 69): " + [qa.constructor.name]);
    },
        ia = function ia(qa) {
      return function (Ba) {
        return qa instanceof M.Just && !C.any(C.foldableArray)(N.heytingAlgebraBoolean)(u.on(t.eq(t.eqString))(f.name)(qa.value0))(Ba) ? r.snoc(Ba)(qa.value0) : Ba;
      };
    },
        Da = function Da(qa) {
      return ia(D.map(M.functorMaybe)(f.ContentType.create)(n.bindFlipped(M.bindMaybe)(g.toMediaType)(qa)))(ia(D.map(M.functorMaybe)(f.Accept.create)(k.toMediaType(X.responseFormat)))(X.headers));
    },
        na = function na(qa) {
      return {
        method: E.print(X.method),
        url: X.url,
        headers: D.map(D.functorArray)(function (Ba) {
          return {
            field: f.name(Ba),
            value: f.value(Ba)
          };
        })(Da(X.content)),
        content: qa,
        responseType: k.toResponseType(X.responseFormat),
        username: L.toNullable(X.username),
        password: L.toNullable(X.password),
        withCredentials: X.withCredentials
      };
    },
        ua = function ua(qa) {
      return D.mapFlipped(V.functorAff)(q["try"](V.monadErrorAff)(I.fromEffectFnAff(e._ajax(p.ResponseHeader.create, na(qa)))))(function (Ba) {
        if (Ba instanceof x.Right) {
          var Ga = w.runExcept(Aa(Ba.value0.body));
          if (Ga instanceof x.Left) return new x.Left(new G(J.head(Ga.value0), Ba.value0));
          if (Ga instanceof x.Right) return new x.Right({
            body: Ga.value0,
            headers: Ba.value0.headers,
            status: Ba.value0.status,
            statusText: Ba.value0.statusText
          });
          throw Error("Failed pattern match at Affjax (line 184, column 9 - line 186, column 52): " + [Ga.constructor.name]);
        }

        if (Ba instanceof x.Left) return new x.Left(new F(Ba.value0));
        throw Error("Failed pattern match at Affjax (line 182, column 86 - line 188, column 28): " + [Ba.constructor.name]);
      });
    };

    if (X.content instanceof M.Nothing) return ua(L.toNullable(M.Nothing.value));

    if (X.content instanceof M.Just) {
      R = R(X.content.value0);
      if (R instanceof x.Right) return ua(L.toNullable(new M.Just(R.value0)));
      if (R instanceof x.Left) return l.pure(V.applicativeAff)(new x.Left(new O(R.value0)));
      throw Error("Failed pattern match at Affjax (line 173, column 7 - line 177, column 48): " + [R.constructor.name]);
    }

    throw Error("Failed pattern match at Affjax (line 169, column 3 - line 177, column 48): " + [X.content.constructor.name]);
  },
      Y = new x.Left(E.GET.value),
      pa = [],
      va = M.Nothing.value,
      z = M.Nothing.value,
      xa = M.Nothing.value;

  c.printError = function (X) {
    if (X instanceof O) return "There was a problem with the request content: " + X.value0;
    if (X instanceof G) return "There was a problem with the response body: " + B.renderForeignError(X.value0);
    if (X instanceof F) return "There was a problem making the request: " + v.message(X.value0);
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
        password: xa,
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
      k = a["Data.Tuple"],
      p = function () {
    function l(n, q) {
      this.value0 = n;
      this.value1 = q;
    }

    l.create = function (n) {
      return function (q) {
        return new l(n, q);
      };
    };

    return l;
  }();

  a = new p(g.Nil.value, g.Nil.value);
  c.empty = a;

  c["null"] = function (l) {
    return l.value0 instanceof g.Nil && l.value1 instanceof g.Nil ? !0 : !1;
  };

  c.snoc = function (l) {
    return function (n) {
      return new p(l.value0, new g.Cons(n, l.value1));
    };
  };

  c.uncons = function (l) {
    for (var n = !1, q; !n;) {
      if (q = l, q.value0 instanceof g.Nil && q.value1 instanceof g.Nil) n = !0, q = f.Nothing.value;else if (q.value0 instanceof g.Nil) l = new p(e.reverse(q.value1), g.Nil.value), q = void 0;else if (q.value0 instanceof g.Cons) n = !0, q = new f.Just(new k.Tuple(q.value0.value0, new p(q.value0.value1, q.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [q.constructor.name]);
    }

    return q;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var c = a["Data.CatList"],
      e = a["Data.CatQueue"],
      g = a["Data.List.Types"],
      f = a["Data.Maybe"],
      k = a["Data.Semigroup"],
      p = a["Data.Tuple"],
      l = function () {
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
      q = function q(b) {
    return function (h) {
      if (b instanceof l) return h;
      if (h instanceof l) return b;
      if (b instanceof n) return new n(b.value0, e.snoc(b.value1)(h));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [b.constructor.name, h.constructor.name]);
    };
  },
      w = function w(b) {
    return function (h) {
      return function (d) {
        var r = function r(x) {
          return function (t) {
            return function (C) {
              for (var y = x, u = t, D = !1, E; !D;) {
                E = y;
                var N = u,
                    H = C;
                if (H instanceof g.Nil) D = !0, E = N;else {
                  if (H instanceof g.Cons) y = E, u = E(N)(H.value0), C = H.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [E.constructor.name, N.constructor.name, H.constructor.name]);
                  E = void 0;
                }
              }

              return E;
            };
          };
        };

        return function (x) {
          return function (t) {
            function C(E, N) {
              E = e.uncons(E);
              if (E instanceof f.Nothing) return u = !0, r(function (H) {
                return function (J) {
                  return J(H);
                };
              })(h)(N);
              if (E instanceof f.Just) y = E.value0.value1, t = new g.Cons(b(E.value0.value0), N);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [E.constructor.name]);
            }

            for (var y = x, u = !1, D; !u;) {
              D = C(y, t);
            }

            return D;
          };
        }(d)(g.Nil.value);
      };
    };
  };

  a = l.value;
  k = new k.Semigroup(q);
  c.empty = a;

  c.snoc = function (b) {
    return function (h) {
      return q(b)(new n(h, e.empty));
    };
  };

  c.uncons = function (b) {
    if (b instanceof l) return f.Nothing.value;

    if (b instanceof n) {
      var h = f.Just,
          d = p.Tuple,
          r = b.value0;
      b = e["null"](b.value1) ? l.value : w(q)(l.value)(b.value1);
      return new h(new d(r, b));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [b.constructor.name]);
  };

  c.semigroupCatList = k;
})(PS);

(function (a) {
  a["Control.Monad.Free"] = a["Control.Monad.Free"] || {};

  var c = a["Control.Monad.Free"],
      e = a["Control.Applicative"],
      g = a["Control.Apply"],
      f = a["Control.Bind"],
      k = a["Control.Monad"],
      p = a["Data.CatList"],
      l = a["Data.Either"],
      n = a["Data.Functor"],
      q = a["Data.Maybe"],
      w = a["Data.Semigroup"],
      b = a["Unsafe.Coerce"],
      h = function () {
    function E(N, H) {
      this.value0 = N;
      this.value1 = H;
    }

    E.create = function (N) {
      return function (H) {
        return new E(N, H);
      };
    };

    return E;
  }(),
      d = function () {
    function E(N) {
      this.value0 = N;
    }

    E.create = function (N) {
      return new E(N);
    };

    return E;
  }(),
      r = function () {
    function E(N, H) {
      this.value0 = N;
      this.value1 = H;
    }

    E.create = function (N) {
      return function (H) {
        return new E(N, H);
      };
    };

    return E;
  }(),
      x = function x(E) {
    function N(M) {
      var L = function L(V) {
        return function (I) {
          return new h(V.value0, w.append(p.semigroupCatList)(V.value1)(I));
        };
      };

      if (M.value0 instanceof d) {
        var U = p.uncons(M.value1);
        if (U instanceof q.Nothing) return H = !0, new d(M.value0.value0);

        if (U instanceof q.Just) {
          E = L((0, U.value0.value0)(M.value0.value0))(U.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [U.constructor.name]);
      }

      if (M.value0 instanceof r) return H = !0, new r(M.value0.value0, function (V) {
        return L(M.value0.value1(V))(M.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [M.value0.constructor.name]);
    }

    for (var H = !1, J; !H;) {
      J = N(E);
    }

    return J;
  },
      t = function t(E) {
    return function (N) {
      return function (H) {
        H = x(H);
        if (H instanceof d) return N(H.value0);
        if (H instanceof r) return E(H.value0)(H.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [H.constructor.name]);
      };
    };
  };

  a = new k.Monad(function () {
    return D;
  }, function () {
    return y;
  });
  var C = new n.Functor(function (E) {
    return function (N) {
      return f.bindFlipped(y)(function () {
        var H = e.pure(D);
        return function (J) {
          return H(E(J));
        };
      }())(N);
    };
  }),
      y = new f.Bind(function () {
    return u;
  }, function (E) {
    return function (N) {
      return new h(E.value0, p.snoc(E.value1)(N));
    };
  }),
      u = new g.Apply(function () {
    return C;
  }, k.ap(a)),
      D = new e.Applicative(function () {
    return u;
  }, function (E) {
    return new h(d.create(E), p.empty);
  });

  c.wrap = function (E) {
    return new h(new r(E, b.unsafeCoerce), p.empty);
  };

  c.liftF = function (E) {
    return new h(new r(E, function () {
      var N = e.pure(D);
      return function (H) {
        return N(H);
      };
    }()), p.empty);
  };

  c.resume = function (E) {
    return t(function (N) {
      return function (H) {
        return new l.Left(n.map(E)(H)(N));
      };
    })(l.Right.create);
  };

  c["resume'"] = t;
  c.freeFunctor = C;
  c.freeBind = y;
  c.freeApplicative = D;
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
  var k = a.unsafeCoerce,
      p = a.unsafeCoerce,
      l = a.unsafeCoerce;

  a = function (q) {
    var w = f.fromJust();
    return function (b) {
      return w(q(l(b)));
    };
  }(e.uncons);

  var n = function (q) {
    return function (w) {
      return q(l(w));
    };
  }(e.length);

  c.fromArray = function (q) {
    if (0 < e.length(q)) return new f.Just(p(q));
    if (g.otherwise) return f.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [q.constructor.name]);
  };

  c.toArray = l;

  c.singleton = function (q) {
    return p(e.singleton(q));
  };

  c.length = n;

  c["cons'"] = function (q) {
    return function (w) {
      return p(e.cons(q)(w));
    };
  };

  c.snoc = function (q) {
    return function (w) {
      return p(e.snoc(l(q))(w));
    };
  };

  c.uncons = a;

  c.updateAt = function (q) {
    return function (w) {
      var b = e.updateAt(q)(w);
      return function (h) {
        return k(b(l(h)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (c) {
    return function (e) {
      for (var g = e[0], f = e.length, k = 1; k < f; k++) {
        g = c(g)(e[k]);
      }

      return g;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (c) {
    return function (e) {
      for (var g = e.length, f = Array(g), k = 0; k < g; k++) {
        f[k] = c(k)(e[k]);
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
      k = a["Data.Semigroup"],
      p = function () {
    function q(w, b) {
      this.value0 = w;
      this.value1 = b;
    }

    q.create = function (w) {
      return function (b) {
        return new q(w, b);
      };
    };

    return q;
  }(),
      l = function l(q) {
    return function (w) {
      return function (b) {
        return (0, q.foldrWithIndex)(function (h) {
          return function (d) {
            return function (r) {
              return k.append(w.Semigroup0())(b(h)(d))(r);
            };
          };
        })(f.mempty(w));
      };
    };
  },
      n = new function (q, w, b, h) {
    this.Foldable0 = q;
    this.foldMapWithIndex = w;
    this.foldlWithIndex = b;
    this.foldrWithIndex = h;
  }(function () {
    return e.foldableArray;
  }, function (q) {
    return l(n)(q);
  }, function (q) {
    return function (w) {
      var b = e.foldl(e.foldableArray)(function (d) {
        return function (r) {
          return q(r.value0)(d)(r.value1);
        };
      })(w),
          h = g.mapWithIndex(g.functorWithIndexArray)(p.create);
      return function (d) {
        return b(h(d));
      };
    };
  }, function (q) {
    return function (w) {
      var b = e.foldr(e.foldableArray)(function (d) {
        return function (r) {
          return q(d.value0)(d.value1)(r);
        };
      })(w),
          h = g.mapWithIndex(g.functorWithIndexArray)(p.create);
      return function (d) {
        return b(h(d));
      };
    };
  });

  c.foldlWithIndex = function (q) {
    return q.foldlWithIndex;
  };

  c.foldableWithIndexArray = n;
})(PS);

(function (a) {
  a["Data.Semigroup.Foldable"] = a["Data.Semigroup.Foldable"] || {};
  var c = a["Data.Semigroup.Foldable"],
      e = a["Data.Functor"];

  c.Foldable1 = function (g, f, k) {
    this.Foldable0 = g;
    this.fold1 = f;
    this.foldMap1 = k;
  };

  c.foldMap1 = function (g) {
    return g.foldMap1;
  };

  c.foldMap1Default = function (g) {
    return function (f) {
      return function (k) {
        return function (p) {
          var l = (0, g.fold1)(k),
              n = e.map(f)(p);
          return function (q) {
            return l(n(q));
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
      k = a["Data.Unfoldable1"].unfoldable1Array,
      p = a["Data.Traversable"].traversableArray,
      l = g.semigroupArray,
      n = a["Data.Functor"].functorArray,
      q = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      w = a["Data.Foldable"].foldableArray,
      b = new f.Foldable1(function () {
    return w;
  }, function (h) {
    return e.fold1Impl(g.append(h));
  }, function (h) {
    return f.foldMap1Default(b)(n)(h);
  });
  c.semigroupNonEmptyArray = l;
  c.functorNonEmptyArray = n;
  c.foldableNonEmptyArray = w;
  c.foldableWithIndexNonEmptyArray = q;
  c.foldable1NonEmptyArray = b;
  c.unfoldable1NonEmptyArray = k;
  c.traversableNonEmptyArray = p;
})(PS);

(function (a) {
  var c = function () {
    function e() {
      this.last = this.head = null;
      this.size = 0;
    }

    function g(q, w) {
      this.queue = q;
      this.value = w;
      this.prev = this.next = null;
    }

    function f(q) {
      this.draining = !1;
      this.error = null;
      this.value = q;
      this.takes = new e();
      this.reads = new e();
      this.puts = new e();
    }

    function k(q) {
      try {
        q();
      } catch (w) {
        setTimeout(function () {
          throw w;
        }, 0);
      }
    }

    function p(q) {
      switch (q.size) {
        case 0:
          return null;

        case 1:
          var w = q.head;
          q.head = null;
          break;

        case 2:
          w = q.last;
          q.head.next = null;
          q.last = null;
          break;

        default:
          w = q.last, q.last = w.prev, q.last.next = null;
      }

      w.prev = null;
      w.queue = null;
      q.size--;
      return w.value;
    }

    function l(q) {
      switch (q.size) {
        case 0:
          return null;

        case 1:
          var w = q.head;
          q.head = null;
          break;

        case 2:
          w = q.head;
          q.last.prev = null;
          q.head = q.last;
          q.last = null;
          break;

        default:
          w = q.head, q.head = w.next, q.head.prev = null;
      }

      w.next = null;
      w.queue = null;
      q.size--;
      return w.value;
    }

    var n = {};
    f.EMPTY = n;

    f.putLast = function (q, w) {
      w = new g(q, w);

      switch (q.size) {
        case 0:
          q.head = w;
          break;

        case 1:
          w.prev = q.head;
          q.head.next = w;
          q.last = w;
          break;

        default:
          w.prev = q.last, q.last.next = w, q.last = w;
      }

      q.size++;
      return w;
    };

    f.takeLast = p;
    f.takeHead = l;

    f.deleteCell = function (q) {
      null !== q.queue && (q.queue.last === q ? p(q.queue) : q.queue.head === q ? l(q.queue) : (q.prev && (q.prev.next = q.next), q.next && (q.next.prev = q.prev), q.queue.size--, q.queue = null, q.value = null, q.next = null, q.prev = null));
    };

    f.drainVar = function (q, w) {
      if (!w.draining) {
        var b = w.puts,
            h = w.takes,
            d = w.reads,
            r,
            x;

        for (w.draining = !0;;) {
          var t = r = null;
          var C = w.value;
          var y = d.size;

          if (null !== w.error) {
            for (C = q.left(w.error); r = l(b);) {
              k(r.cb(C));
            }

            for (; t = l(d);) {
              k(t(C));
            }

            for (; x = l(h);) {
              k(x(C));
            }

            break;
          }

          C === n && (r = l(b)) && (w.value = C = r.value);

          if (C !== n) {
            for (x = l(h); y-- && (t = l(d));) {
              k(t(q.right(C)));
            }

            null !== x && (w.value = n, k(x(q.right(C))));
          }

          null !== r && k(r.cb(q.right(void 0)));
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
      var k = c.putLast(g.takes, f);
      c.drainVar(e, g);
      return function () {
        c.deleteCell(k);
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
    function n(q) {
      this.value0 = q;
    }

    n.create = function (q) {
      return new n(q);
    };

    return n;
  }(),
      k = function () {
    function n(q) {
      this.value0 = q;
    }

    n.create = function (q) {
      return new n(q);
    };

    return n;
  }(),
      p = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      l = {
    left: g.Left.create,
    right: g.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: f.create,
    filled: k.create,
    empty: p.value
  };

  c.take = function (n) {
    return function (q) {
      return e._takeVar(l, n, q);
    };
  };

  c.tryTake = function (n) {
    return e._tryTakeVar(l, n);
  };

  c.tryPut = function (n) {
    return function (q) {
      return e._tryPutVar(l, n, q);
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
        var k = c.take(g)(f)();
        return e.effectCanceler(k);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var c = a["Effect.Aff.Class"],
      e = a["Control.Category"],
      g = a["Effect.Aff"];

  a = function a(f, k) {
    this.MonadEffect0 = f;
    this.liftAff = k;
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
      k = a["Control.Bind"],
      p = a["Control.Category"],
      l = a["Control.Monad"],
      n = a["Control.Monad.Free"],
      q = a["Control.MultiAlternative"],
      w = a["Control.Parallel.Class"],
      b = a["Control.Plus"],
      h = a["Data.Array.NonEmpty"],
      d = a["Data.Array.NonEmpty.Internal"],
      r = a["Data.Either"],
      x = a["Data.FoldableWithIndex"],
      t = a["Data.Functor"],
      C = a["Data.Maybe"],
      y = a["Data.Monoid"],
      u = a["Data.Semigroup"],
      D = a["Data.Semigroup.Foldable"],
      E = a["Data.Show"],
      N = a["Data.Tuple"],
      H = a.Effect,
      J = a["Effect.AVar"],
      M = a["Effect.Aff"],
      L = a["Effect.Aff.AVar"],
      U = a["Effect.Aff.Class"],
      V = a["Effect.Class"],
      I = a["Effect.Console"],
      v = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (na) {
    return na(p.identity(p.categoryFn));
  });

  var B = n.freeFunctor,
      O = n.freeBind,
      G = n.freeApply,
      F = n.freeApplicative,
      P = new l.Monad(function () {
    return F;
  }, function () {
    return O;
  }),
      Y = function Y(na) {
    return na;
  },
      pa = function pa(na) {
    return n["resume'"](function (ua) {
      return function (qa) {
        return new r.Right(t.map(na)(qa)(ua));
      };
    })(r.Left.create);
  },
      va = new t.Functor(function (na) {
    return function (ua) {
      if (ua instanceof r.Right) ua = new r.Right({
        cont: t.map(M.functorAff)(na)(ua.value0.cont),
        view: ua.value0.view
      });else if (ua instanceof r.Left) ua = new r.Left(t.map(H.functorEffect)(na)(ua.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [ua.constructor.name]);
      return ua;
    };
  }),
      z = function z(na) {
    return n.liftF(r.Left.create(na));
  },
      xa = function xa(na) {
    return new V.MonadEffect(function () {
      return P;
    }, z);
  },
      X = function X(na) {
    return n.liftF(new r.Right({
      view: na,
      cont: M.never
    }));
  },
      ka = function ka(na) {
    return new u.Semigroup(function (ua) {
      return function (qa) {
        return q.orr(R(na))([ua, qa]);
      };
    });
  },
      Aa = function Aa(na) {
    return new b.Plus(function () {
      return ia(na);
    }, X(y.mempty(na)));
  },
      R = function R(na) {
    return new q.MultiAlternative(function () {
      return Aa(na);
    }, function (ua) {
      var qa = function qa(da) {
        return function (K) {
          return function (aa) {
            var ra = t.map(d.functorNonEmptyArray)(function (ha) {
              return n.wrap(r.Right.create(ha));
            })(K);
            return k.bind(M.bindAff)(w.sequential(M.parallelAff)(x.foldlWithIndex(d.foldableWithIndexNonEmptyArray)(function (ha) {
              return function (Ea) {
                return function (Oa) {
                  return e.alt(M.altParAff)(w.parallel(M.parallelAff)(t.map(M.functorAff)(N.Tuple.create(ha))(Oa)))(Ea);
                };
              };
            })(b.empty(M.plusParAff))(aa)))(function (ha) {
              return f.pure(M.applicativeAff)(la(da)(C.fromMaybe(ra)(h.updateAt(ha.value0)(ha.value1)(ra))));
            });
          };
        };
      },
          Ba = function Ba(da) {
        return function (K) {
          return n.wrap(new r.Right({
            view: D.foldMap1(d.foldable1NonEmptyArray)(da.Semigroup0())(function (aa) {
              return aa.view;
            })(K),
            cont: qa(da)(K)(t.map(d.functorNonEmptyArray)(function (aa) {
              return aa.cont;
            })(K))
          }));
        };
      },
          Ga = function Ga(da) {
        return function (K) {
          return function (aa) {
            var ra = h.uncons(aa),
                ha = pa(va)(ra.head);
            if (ha instanceof r.Left) return f.pure(n.freeApplicative)(ha.value0);

            if (ha instanceof r.Right) {
              if (ha.value0 instanceof r.Left) return n.wrap(new r.Left(function () {
                var Ea = ha.value0.value0();
                return Ga(da)(K)(h["cons'"](Ea)(ra.tail));
              }));
              if (ha.value0 instanceof r.Right) return ea(da)(h.snoc(K)(ha.value0.value0))(ra.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [ha.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [ha.constructor.name]);
          };
        };
      },
          ea = function ea(da) {
        return function (K) {
          return function (aa) {
            aa = h.fromArray(aa);
            if (aa instanceof C.Nothing) return Ba(da)(K);
            if (aa instanceof C.Just) return Ga(da)(K)(aa.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [aa.constructor.name]);
          };
        };
      },
          la = function la(da) {
        return function (K) {
          var aa = h.uncons(K),
              ra = pa(va)(aa.head);
          if (ra instanceof r.Left) return f.pure(n.freeApplicative)(ra.value0);

          if (ra instanceof r.Right) {
            if (ra.value0 instanceof r.Left) return n.wrap(new r.Left(function () {
              var ha = ra.value0.value0();
              return la(da)(h["cons'"](ha)(aa.tail));
            }));
            if (ra.value0 instanceof r.Right) return ea(da)(h.singleton(ra.value0.value0))(aa.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [ra.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [ra.constructor.name]);
        };
      };

      ua = h.fromArray(ua);
      if (ua instanceof C.Just) return la(na)(t.map(d.functorNonEmptyArray)(Y)(ua.value0));
      if (ua instanceof C.Nothing) return b.empty(Aa(na));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [ua.constructor.name]);
    });
  },
      ia = function ia(na) {
    return new e.Alt(function () {
      return B;
    }, u.append(ka(na)));
  },
      Da = function Da(na) {
    return function (ua) {
      var qa = function qa(Ba) {
        return function (Ga) {
          if (Ga instanceof r.Left) return I.log("Aff failed - " + E.show(v.showError)(Ga.value0));
          if (Ga instanceof r.Right) return t["void"](H.functorEffect)(J.tryPut(Ga.value0)(Ba));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [Ba.constructor.name, Ga.constructor.name]);
        };
      };

      return n.wrap(new r.Left(function () {
        var Ba = J.empty();
        M.runAff_(qa(Ba))(ua)();
        var Ga = J.tryTake(Ba)();
        if (Ga instanceof C.Just) return f.pure(n.freeApplicative)(Ga.value0);
        if (Ga instanceof C.Nothing) return n.liftF(new r.Right({
          view: na,
          cont: L.take(Ba)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [Ga.constructor.name]);
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
  c.widgetFunctor = B;
  c.widgetBind = O;
  c.widgetApplicative = F;
  c.widgetApply = G;
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
      return F;
    }, function () {
      return Aa(na);
    });
  };

  c.widgetMonadEff = xa;

  c.widgetMonadAff = function (na) {
    return new U.MonadAff(function () {
      return xa(na);
    }, Da(y.mempty(na)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var c = a["Concur.Core"],
      e = a["Concur.Core.Types"],
      g = a["Control.Alt"],
      f = a["Control.Applicative"],
      k = a["Control.Monad.Free"],
      p = a["Control.Parallel.Class"],
      l = a["Data.Either"],
      n = a["Data.Functor"],
      q = a.Effect,
      w = a["Effect.AVar"],
      b = a["Effect.Aff"],
      h = a["Effect.Aff.AVar"],
      d = a["Effect.Aff.Class"],
      r = function r(x) {
    return function (t) {
      var C = e.resume(e.functorWidgetStep)(t);
      if (C instanceof l.Left) return f.pure(k.freeApplicative)(C.value0);

      if (C instanceof l.Right) {
        if (C.value0 instanceof l.Left) return k.wrap(e.WidgetStep(new l.Left(function () {
          var y = C.value0.value0();
          return r(x)(y);
        })));
        if (C.value0 instanceof l.Right) return k.wrap(e.WidgetStep(new l.Left(function () {
          var y = w.empty(),
              u = p.sequential(b.parallelAff)(g.alt(b.altParAff)(p.parallel(b.parallelAff)(d.liftAff(d.monadAffAff)(h.take(y))))(p.parallel(b.parallelAff)(n.map(b.functorAff)(r(x))(C.value0.value0.cont))));
          return k.wrap(e.WidgetStep(new l.Right({
            view: x(function (D) {
              return n["void"](q.functorEffect)(w.tryPut(f.pure(k.freeApplicative)(D))(y));
            })(C.value0.value0.view),
            cont: u
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [C.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [C.constructor.name]);
    };
  };

  c.mkLeafWidget = function (x) {
    return e.Widget(k.wrap(e.WidgetStep(new l.Left(function () {
      var t = w.empty();
      return k.wrap(e.WidgetStep(new l.Right({
        view: x(function (C) {
          return n["void"](q.functorEffect)(w.tryPut(f.pure(k.freeApplicative)(C))(t));
        }),
        cont: d.liftAff(d.monadAffAff)(h.take(t))
      })));
    }))));
  };

  c.mkNodeWidget = function (x) {
    return function (t) {
      return r(x)(t);
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
    function f(k) {
      this.value0 = k;
    }

    f.create = function (k) {
      return new f(k);
    };

    return f;
  }(),
      g = function () {
    function f(k) {
      this.value0 = k;
    }

    f.create = function (k) {
      return new f(k);
    };

    return f;
  }();

  a = new a.Functor(function (f) {
    return function (k) {
      if (k instanceof e) return new e(k.value0);
      if (k instanceof g) return new g(function (p) {
        return k.value0(function (l) {
          return p(f(l));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [f.constructor.name, k.constructor.name]);
    };
  });
  c.PrimProp = e;
  c.Handler = g;

  c.mkProp = function (f) {
    return function (k) {
      if (k instanceof e) return k.value0;
      if (k instanceof g) return k.value0(f);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [f.constructor.name, k.constructor.name]);
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
      k = a["Control.MultiAlternative"],
      p = a["Control.ShiftMap"],
      l = a["Data.Functor"],
      n = function n(q) {
    return function (w) {
      return function (b) {
        return function (h) {
          return p.shiftMap(q)(function (d) {
            return function (r) {
              return e.mkNodeWidget(function (x) {
                return function (t) {
                  return b(l.map(w)(function () {
                    var C = f.mkProp(x),
                        y = l.map(f.functorProps)(d);
                    return function (u) {
                      return C(y(u));
                    };
                  }())(h))(t);
                };
              })(r);
            };
          });
        };
      };
    };
  };

  c.el = n;

  c.elLeaf = function (q) {
    return function (w) {
      return function (b) {
        return function (h) {
          return g.liftWidget(q)(e.mkLeafWidget(function (d) {
            return b(l.map(w)(f.mkProp(d))(h));
          }));
        };
      };
    };
  };

  c["el'"] = function (q) {
    return function (w) {
      return function (b) {
        return function (h) {
          return function (d) {
            var r = n(q)(b)(h)(d),
                x = k.orr(w);
            return function (t) {
              return r(x(t));
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
      k = a["Data.Either"],
      p = a["Data.Functor"],
      l = a["Data.Monoid"],
      n = a["Data.Tuple"],
      q = a.Effect,
      w = a["Effect.Aff"],
      b = function b(d) {
    return function (r) {
      var x = f.resume(e.functorWidgetStep)(e.unWidget(r));
      if (x instanceof k.Right) return g.pure(q.applicativeEffect)(new n.Tuple(r, l.mempty(d)));

      if (x instanceof k.Left) {
        if (x.value0 instanceof k.Left) return function () {
          var t = x.value0.value0();
          return b(d)(t)();
        };
        if (x.value0 instanceof k.Right) return g.pure(q.applicativeEffect)(new n.Tuple(f.wrap(new k.Right(x.value0.value0)), x.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [x.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [x.constructor.name]);
    };
  },
      h = function h(d) {
    return function (r) {
      return function (x) {
        var t = f.resume(e.functorWidgetStep)(x);
        if (t instanceof k.Right) return g.pure(q.applicativeEffect)(l.mempty(d));

        if (t instanceof k.Left) {
          if (t.value0 instanceof k.Left) return function () {
            var C = t.value0.value0();
            return h(d)(r)(C)();
          };
          if (t.value0 instanceof k.Right) return function () {
            w.runAff_(function () {
              var C = p.map(k.functorEither)(e.Widget);
              return function (y) {
                return r(C(y));
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
      return e.defer(function (k) {
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
      k = a["Control.Apply"],
      p = a["Control.Bind"],
      l = a["Control.Comonad"],
      n = a["Control.Extend"],
      q = a["Control.Monad"],
      w = a["Control.Plus"],
      b = a["Control.ShiftMap"],
      h = a["Data.Functor"],
      d = a["Data.Lazy"],
      r = a["Data.Tuple"],
      x = function x(J) {
    return r.snd(d.force(J));
  },
      t = function t(J) {
    return function (M) {
      return d.defer(function (L) {
        return new r.Tuple(J, M);
      });
    };
  },
      C = function C(J) {
    return r.fst(d.force(J));
  },
      y = function y(J) {
    return new h.Functor(function (M) {
      var L = function L(U) {
        return h.map(d.functorLazy)(function (V) {
          return new r.Tuple(M(V.value0), h.map(J)(L)(V.value1));
        })(U);
      };

      return L;
    });
  },
      u = function u(J) {
    return new n.Extend(function () {
      return y(J);
    }, function (M) {
      var L = function L(U) {
        return h.map(d.functorLazy)(function (V) {
          return new r.Tuple(M(U), h.map(J)(L)(V.value1));
        })(U);
      };

      return L;
    });
  },
      D = function D(J) {
    return new q.Monad(function () {
      return H(J);
    }, function () {
      return E(J);
    });
  },
      E = function E(J) {
    return new p.Bind(function () {
      return N(J);
    }, function (M) {
      return function (L) {
        var U = function U(I) {
          return function (v) {
            var B = h.map(J.Plus1().Alt0().Functor0())(U(I))(x(v)),
                O = h.map(J.Plus1().Alt0().Functor0())(V)(x(I));
            return t(C(v))(g.alt(J.Plus1().Alt0())(O)(B));
          };
        },
            V = function V(I) {
          return U(I)(L(C(I)));
        };

        return V(M);
      };
    });
  },
      N = function N(J) {
    return new k.Apply(function () {
      return y(J.Plus1().Alt0().Functor0());
    }, q.ap(D(J)));
  },
      H = function H(J) {
    return new f.Applicative(function () {
      return N(J);
    }, function (M) {
      return t(M)(w.empty(J.Plus1()));
    });
  };

  c.mkCofree = t;
  c.tail = x;

  c.comonadCofree = function (J) {
    return new l.Comonad(function () {
      return u(J);
    }, C);
  };

  c.applicativeCofree = H;
  c.bindCofree = E;

  c.shiftMapCofree = function (J) {
    return new b.ShiftMap(function (M) {
      return function (L) {
        return d.defer(function (U) {
          U = d.force(L);
          return new r.Tuple(U.value0, M(f.pure(H(e.widgetAlternative(J))))(U.value1));
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
      k = a["Control.Bind"],
      p = a["Control.Cofree"],
      l = a["Control.Comonad"],
      n = a["Data.Functor"],
      q = a["Data.Maybe"],
      w = a["Data.Unit"],
      b = a["Effect.Aff"],
      h = a["Effect.Aff.Class"],
      d = p.tail,
      r = p.mkCofree,
      x = function x(y) {
    return function (u) {
      return r(y)(n.map(e.widgetFunctor)(function (D) {
        return x(D)(u);
      })(u(y)));
    };
  },
      t = function t(y) {
    return function (u) {
      return function (D) {
        var E = D(u);
        return r(l.extract(p.comonadCofree(e.widgetFunctor))(E))(k.bind(e.widgetBind)(d(E))(function (N) {
          return f.pure(e.widgetApplicative)(t(y)(l.extract(p.comonadCofree(e.widgetFunctor))(N))(D));
        }));
      };
    };
  },
      C = function C(y) {
    return k.bind(e.widgetBind)(d(y))(C);
  };

  c.step = r;

  c.display = function (y) {
    return r(w.unit)(y);
  };

  c.loopW = x;
  c.loopS = t;
  c.dyn = C;

  c.debounce = function (y) {
    return function (u) {
      return function (D) {
        return function (E) {
          var N = function N(J) {
            return function (M) {
              return k.bind(e.widgetBind)(g.alt(e.widgetAlt(y))(n.map(e.widgetFunctor)(q.Just.create)(M(J)))(n.voidRight(e.widgetFunctor)(q.Nothing.value)(h.liftAff(e.widgetMonadAff(y))(b.delay(u)))))(function (L) {
                if (L instanceof q.Nothing) return f.pure(e.widgetApplicative)(H(J)(M));
                if (L instanceof q.Just) return N(L.value0)(M);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [L.constructor.name]);
              });
            };
          },
              H = function H(J) {
            return function (M) {
              return r(J)(k.bind(e.widgetBind)(M(J))(function (L) {
                return N(L)(M);
              }));
            };
          };

          return H(D)(E);
        };
      };
    };
  };
})(PS);

(function (a) {
  function c(f) {
    return function (k) {
      return function (p) {
        return e.createElement.apply(e, [f, k].concat(p));
      };
    };
  }

  var e = require("react"),
      g = function (f) {
    function k(p, l, n) {
      switch (l) {
        case "state":
        case "render":
        case "componentDidMount":
        case "componentWillUnmount":
          p[l] = n;
          break;

        case "componentDidCatch":
        case "componentWillUpdate":
        case "shouldComponentUpdate":
        case "getSnapshotBeforeUpdate":
          p[l] = function (q, w) {
            return n(q)(w)();
          };

          break;

        case "componentDidUpdate":
          p[l] = function (q, w, b) {
            return n(q)(w)(b)();
          };

          break;

        case "unsafeComponentWillMount":
          p.UNSAFE_componentWillMount = n;
          break;

        case "unsafeComponentWillReceiveProps":
          p.UNSAFE_componentWillReceiveProps = function (q) {
            return n(q)();
          };

          break;

        case "unsafeComponentWillUpdate":
          p.UNSAFE_componentWillUpdate = function (q, w) {
            return n(q)(w)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + l);
      }
    }

    return function (p) {
      return function (l) {
        var n = function n(q) {
          f.call(this, q);
          q = l(this)();

          for (var w in q) {
            k(this, w, q[w]);
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
    return function (k) {
      return function () {
        f.setState(k);
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
    return function (k) {
      return e.createElement(f, k);
    };
  };

  a.createElementTagNameDynamic = function (f) {
    return function (k) {
      return function (p) {
        return e.createElement(f, k, p);
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
      k = a["Data.Functor"],
      p = a["Data.Monoid"],
      l = a["Data.Show"],
      n = a["Data.Unit"],
      q = a.Effect,
      w = a["Effect.Console"],
      b = a["Effect.Exception"],
      h = a.React,
      d = function (r) {
    return function (x) {
      var t = function t(y) {
        return h.toElement(h.isReactElementArray)(y.view);
      },
          C = function C(y) {
        return function (u) {
          if (u instanceof f.Right) return function () {
            var D = e.discharge(p.monoidArray)(C(y))(u.value0)();
            return k["void"](q.functorEffect)(h.writeState(y)({
              view: D
            }))();
          };
          if (u instanceof f.Left) return function () {
            w.log("FAILED! " + l.show(b.showError)(u.value0))();
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
            render: k.map(q.functorEffect)(t)(h.getState(y)),
            componentDidMount: g.applySecond(q.applyEffect)(r)(C(y)(new f.Right(u.value0)))
          };
        };
      });
    };
  }(p.mempty(q.monoidEffect(p.monoidUnit)));

  c.renderComponent = function (r) {
    return h.createLeafElement()(d(r))({});
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

      for (var k in e) {
        e.hasOwnProperty(k) && (g[k] = e[k]);
      }

      return f;
    };
  };

  a.unsafeFromPropsArray = function (c) {
    for (var e = {}, g = 0, f = c.length; g < f; g++) {
      var k = c[g],
          p;

      for (p in k) {
        k.hasOwnProperty(p) && (e[p] = k[p]);
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
      k = e.unsafeUnfoldProps("style"),
      p = e.unsafeMkProps("placeholder"),
      l = e.unsafeMkProps("href"),
      n = e.unsafeMkProps("disabled"),
      q = e.unsafeMkProps("defaultValue"),
      w = e.unsafeMkProps("className"),
      b = e.unsafeMkProps("checked"),
      h = e.unsafeMkProps("type"),
      d = e.unsafeMkProps("id");
  c.style = k;
  c.checked = b;
  c.className = w;
  c.defaultValue = q;
  c.disabled = n;
  c.href = l;
  c._id = d;
  c.placeholder = p;
  c.target = f;
  c._type = h;
  c.value = a;

  c.onChange = function (r) {
    return e.unsafeMkProps("onChange")(g.mkEffectFn1(r));
  };

  c.onClick = function (r) {
    return e.unsafeMkProps("onClick")(g.mkEffectFn1(r));
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
    return function (C) {
      return function (y) {
        if (t) {
          if (t) var u = e.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [t.constructor.name]);
        } else u = e.createElementTagName;
        return u(C)(g.unsafeFromPropsArray(y));
      };
    };
  },
      k = f(!1)("nav"),
      p = f(!1)("option"),
      l = f(!1)("select"),
      n = f(!1)("span"),
      q = f(!1)("ul"),
      w = f(!1)("li"),
      b = f(!1)("div"),
      h = f(!1)("code"),
      d = f(!1)("cite"),
      r = f(!1)("button"),
      x = f(!1)("a");

  c.text = a;
  c.a = x;

  c.br = function (t) {
    return f(!1)("br")(t)([]);
  };

  c.button = r;
  c.cite = d;
  c.code = h;
  c.div = b;

  c.input = function (t) {
    return f(!1)("input")(t)([]);
  };

  c.li = w;
  c.nav = k;
  c.option = p;
  c.select = l;
  c.span = n;
  c.ul = q;
})(PS);

(function (a) {
  a["Concur.React.DOM"] = a["Concur.React.DOM"] || {};

  var c = a["Concur.React.DOM"],
      e = a["Concur.Core.DOM"],
      g = a["Concur.Core.LiftWidget"],
      f = a["Concur.Core.Types"],
      k = a["Data.Functor"],
      p = a["React.DOM"],
      l = function l(t) {
    return function (C) {
      return function (y) {
        return [t(C)(y)];
      };
    };
  },
      n = function n(t) {
    return function (C) {
      return e.elLeaf(t)(k.functorArray)(function (y) {
        return [C(y)];
      });
    };
  },
      q = function q(t) {
    return function (C) {
      return function (y) {
        return e["el'"](t)(C)(k.functorArray)(l(y));
      };
    };
  },
      w = function w(t) {
    return function (C) {
      return q(C)(t)(p.li);
    };
  },
      b = function b(t) {
    return function (C) {
      return q(C)(t)(p.span);
    };
  },
      h = function h(t) {
    return function (C) {
      return e.el(t)(k.functorArray)(l(C));
    };
  },
      d = function d(t) {
    return function (C) {
      return q(C)(t)(p.div);
    };
  },
      r = function r(t) {
    return function (C) {
      return q(C)(t)(p.code);
    };
  },
      x = function x(t) {
    return function (C) {
      return q(C)(t)(p.cite);
    };
  };

  c.text = function (t) {
    return function (C) {
      return g.liftWidget(t)(f.display([p.text(C)]));
    };
  };

  c.a = function (t) {
    return function (C) {
      return q(C)(t)(p.a);
    };
  };

  c["br'"] = function (t) {
    return n(t)(p.br)([]);
  };

  c.button_ = function (t) {
    return h(t)(p.button);
  };

  c.button = function (t) {
    return function (C) {
      return q(C)(t)(p.button);
    };
  };

  c["cite'"] = function (t) {
    return function (C) {
      return x(t)(C)([]);
    };
  };

  c["code'"] = function (t) {
    return function (C) {
      return r(t)(C)([]);
    };
  };

  c.div_ = function (t) {
    return h(t)(p.div);
  };

  c.div = d;

  c["div'"] = function (t) {
    return function (C) {
      return d(t)(C)([]);
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
    return function (C) {
      return w(t)(C)([]);
    };
  };

  c.nav = function (t) {
    return function (C) {
      return q(C)(t)(p.nav);
    };
  };

  c.option = function (t) {
    return function (C) {
      return q(C)(t)(p.option);
    };
  };

  c.select = function (t) {
    return function (C) {
      return q(C)(t)(p.select);
    };
  };

  c.span_ = function (t) {
    return h(t)(p.span);
  };

  c.span = b;

  c["span'"] = function (t) {
    return function (C) {
      return b(t)(C)([]);
    };
  };

  c.ul_ = function (t) {
    return h(t)(p.ul);
  };

  c.ul = function (t) {
    return function (C) {
      return q(C)(t)(p.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var c = a["Concur.React.Props"],
      e = a["Concur.Core.Props"],
      g = a["Data.Array"],
      f = a["Data.Foldable"],
      k = a["Data.Maybe"],
      p = a["Data.Monoid"],
      l = a["React.DOM.Props"];
  a = new e.Handler(l.onClick);

  var n = new e.Handler(l.onChange),
      q = function q(b) {
    return e.PrimProp.create(l.className(b));
  },
      w = function () {
    var b = f.intercalate(f.foldableArray)(p.monoidString)(" "),
        h = g.concatMap(k.maybe([])(function (d) {
      return [d];
    }));
    return function (d) {
      return q(b(h(d)));
    };
  }();

  c.classList = w;

  c.unsafeTargetValue = function (b) {
    return b.target.value;
  };

  c.style = function (b) {
    return e.PrimProp.create(l.style(b));
  };

  c.checked = function (b) {
    return e.PrimProp.create(l.checked(b));
  };

  c.className = q;

  c.defaultValue = function (b) {
    return e.PrimProp.create(l.defaultValue(b));
  };

  c.disabled = function (b) {
    return e.PrimProp.create(l.disabled(b));
  };

  c.href = function (b) {
    return e.PrimProp.create(l.href(b));
  };

  c._id = function (b) {
    return e.PrimProp.create(l._id(b));
  };

  c.placeholder = function (b) {
    return e.PrimProp.create(l.placeholder(b));
  };

  c._type = function (b) {
    return e.PrimProp.create(l._type(b));
  };

  c.value = function (b) {
    return e.PrimProp.create(l.value(b));
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

  a.ReactDOM.render = function (k) {
    return function (p) {
      return e.map(f.functorEffect)(g.toMaybe)(function () {
        return c.renderImpl(k, p);
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

  a["Web.DOM.NonElementParentNode"].getElementById = function (k) {
    var p = e.map(f.functorEffect)(g.toMaybe),
        l = c._getElementById(k);

    return function (n) {
      return p(l(n));
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
      k = a.Effect,
      p = a.ReactDOM,
      l = a["Web.DOM.NonElementParentNode"],
      n = a["Web.HTML"],
      q = a["Web.HTML.HTMLDocument"],
      w = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (b) {
    return function (h) {
      return function () {
        var d = n.window();
        d = w.document(d)();
        d = q.toNonElementParentNode(d);
        d = l.getElementById(b)(d)();
        if (d instanceof g.Nothing) return f.unit;
        if (d instanceof g.Just) return e["void"](k.functorEffect)(p.render(c.renderComponent(h))(d.value0))();
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
      k = a["Control.Monad"],
      p = a["Data.Functor"],
      l = a["Data.Maybe"],
      n = function n(d) {
    return new p.Functor(function (r) {
      return function (x) {
        return p.map(d)(p.map(l.functorMaybe)(r))(x);
      };
    });
  },
      q = function q(d) {
    return new k.Monad(function () {
      return h(d);
    }, function () {
      return w(d);
    });
  },
      w = function w(d) {
    return new f.Bind(function () {
      return b(d);
    }, function (r) {
      return function (x) {
        return f.bind(d.Bind1())(r)(function (t) {
          if (t instanceof l.Nothing) return e.pure(d.Applicative0())(l.Nothing.value);
          if (t instanceof l.Just) return x(t.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [t.constructor.name]);
        });
      };
    });
  },
      b = function b(d) {
    return new g.Apply(function () {
      return n(d.Bind1().Apply0().Functor0());
    }, k.ap(q(d)));
  },
      h = function h(d) {
    return new e.Applicative(function () {
      return b(d);
    }, function () {
      var r = e.pure(d.Applicative0());
      return function (x) {
        return r(l.Just.create(x));
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

  c.MonadState = function (f, k) {
    this.Monad0 = f;
    this.state = k;
  };

  c.get = function (f) {
    return (0, f.state)(function (k) {
      return new e.Tuple(k, k);
    });
  };

  c.put = function (f) {
    return function (k) {
      return (0, f.state)(function (p) {
        return new e.Tuple(g.unit, k);
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
      k = a["Control.Monad"],
      p = a["Control.Monad.State.Class"],
      l = a["Data.Functor"],
      n = a["Data.Tuple"],
      q = function q(r) {
    return new l.Functor(function (x) {
      return function (t) {
        return function (C) {
          return l.map(r)(function (y) {
            return new n.Tuple(x(y.value0), y.value1);
          })(t(C));
        };
      };
    });
  },
      w = function w(r) {
    return new k.Monad(function () {
      return d(r);
    }, function () {
      return b(r);
    });
  },
      b = function b(r) {
    return new f.Bind(function () {
      return h(r);
    }, function (x) {
      return function (t) {
        return function (C) {
          return f.bind(r.Bind1())(x(C))(function (y) {
            return t(y.value0)(y.value1);
          });
        };
      };
    });
  },
      h = function h(r) {
    return new g.Apply(function () {
      return q(r.Bind1().Apply0().Functor0());
    }, k.ap(w(r)));
  },
      d = function d(r) {
    return new e.Applicative(function () {
      return h(r);
    }, function (x) {
      return function (t) {
        return e.pure(r.Applicative0())(new n.Tuple(x, t));
      };
    });
  };

  c.bindStateT = b;

  c.monadStateStateT = function (r) {
    return new p.MonadState(function () {
      return w(r);
    }, function (x) {
      return function () {
        var t = e.pure(r.Applicative0());
        return function (C) {
          return t(x(C));
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
      k = a["Control.Monad"],
      p = a["Control.Monad.Writer.Class"],
      l = a["Data.Functor"],
      n = a["Data.Monoid"],
      q = a["Data.Semigroup"],
      w = a["Data.Tuple"],
      b = a["Data.Unit"],
      h = function h(y) {
    return function (u) {
      return y(u);
    };
  },
      d = function d(y) {
    return new l.Functor(function (u) {
      return h(l.map(y)(function (D) {
        return new w.Tuple(u(D.value0), D.value1);
      }));
    });
  },
      r = function r(y) {
    return function (u) {
      return new g.Apply(function () {
        return d(u.Functor0());
      }, function (D) {
        return function (E) {
          return g.apply(u)(l.map(u.Functor0())(function (N) {
            return function (H) {
              return new w.Tuple(N.value0(H.value0), q.append(y)(N.value1)(H.value1));
            };
          })(D))(E);
        };
      });
    };
  },
      x = function x(y) {
    return function (u) {
      return new f.Bind(function () {
        return r(y)(u.Apply0());
      }, function (D) {
        return function (E) {
          return f.bind(u)(D)(function (N) {
            var H = E(N.value0);
            return l.map(u.Apply0().Functor0())(function (J) {
              return new w.Tuple(J.value0, q.append(y)(N.value1)(J.value1));
            })(H);
          });
        };
      });
    };
  },
      t = function t(y) {
    return function (u) {
      return new e.Applicative(function () {
        return r(y.Semigroup0())(u.Apply0());
      }, function (D) {
        return e.pure(u)(new w.Tuple(D, n.mempty(y)));
      });
    };
  },
      C = function C(y) {
    return function (u) {
      return new k.Monad(function () {
        return t(y)(u.Applicative0());
      }, function () {
        return x(y.Semigroup0())(u.Bind1());
      });
    };
  };

  c.runWriterT = function (y) {
    return y;
  };

  c.monadWriterT = C;

  c.monadTellWriterT = function (y) {
    return function (u) {
      return new p.MonadTell(function () {
        return C(y)(u);
      }, function () {
        var D = e.pure(u.Applicative0()),
            E = w.Tuple.create(b.unit);
        return function (N) {
          return D(E(N));
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
    var k = f.unwrap(g.newtypeIdentity);
    return function (p) {
      return k(e.runWriterT(p));
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
      k = a["Data.Functor"],
      p = a["Data.Maybe"],
      l = a["Data.Newtype"],
      n = a["Data.Ord"],
      q = a["Data.Tuple"],
      w = a["Data.Unfoldable1"];

  a = function a(H) {
    return H;
  };

  var b = function b(H) {
    this.Bounded0 = H;
  },
      h = function h(H, J, M) {
    this.Ord0 = H;
    this.pred = J;
    this.succ = M;
  },
      d = function d(H, J, M, L, U) {
    this.Bounded0 = H;
    this.Enum1 = J;
    this.cardinality = M;
    this.fromEnum = L;
    this.toEnum = U;
  },
      r = new b(function () {
    return f.boundedBoolean;
  }),
      x = new l.Newtype(function (H) {
    return H;
  }, a),
      t = function t(H) {
    return new h(function () {
      return p.ordMaybe(H.Enum1().Ord0());
    }, function (J) {
      if (J instanceof p.Nothing) return p.Nothing.value;
      if (J instanceof p.Just) return new p.Just((0, H.Enum1().pred)(J.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [J.constructor.name]);
    }, function (J) {
      if (J instanceof p.Nothing) return new p.Just(new p.Just(f.bottom(H.Bounded0())));
      if (J instanceof p.Just) return k.map(p.functorMaybe)(p.Just.create)((0, H.Enum1().succ)(J.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [J.constructor.name]);
    });
  },
      C = new h(function () {
    return n.ordBoolean;
  }, function (H) {
    return H ? new p.Just(!1) : p.Nothing.value;
  }, function (H) {
    return H ? p.Nothing.value : new p.Just(!0);
  }),
      y = function y(H) {
    return function (J) {
      return function (M) {
        return H(J(M) + 1 | 0);
      };
    };
  },
      u = function u(H) {
    return function (J) {
      return function (M) {
        return H(J(M) - 1 | 0);
      };
    };
  },
      D = function D(H) {
    return H >= f.bottom(f.boundedInt) && H <= f.top(f.boundedInt) ? new p.Just(e.fromCharCode(H)) : p.Nothing.value;
  },
      E = new h(function () {
    return n.ordChar;
  }, u(D)(e.toCharCode), y(D)(e.toCharCode));

  D = new d(function () {
    return f.boundedChar;
  }, function () {
    return E;
  }, e.toCharCode(f.top(f.boundedChar)) - e.toCharCode(f.bottom(f.boundedChar)) | 0, e.toCharCode, D);
  var N = new d(function () {
    return f.boundedBoolean;
  }, function () {
    return C;
  }, 2, function (H) {
    if (!H) return 0;
    if (H) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [H.constructor.name]);
  }, function (H) {
    return 0 === H ? new p.Just(!1) : 1 === H ? new p.Just(!0) : p.Nothing.value;
  });
  c.Enum = h;
  c.BoundedEnum = d;

  c.toEnum = function (H) {
    return H.toEnum;
  };

  c.fromEnum = function (H) {
    return H.fromEnum;
  };

  c.toEnumWithDefaults = function (H) {
    return function (J) {
      return function (M) {
        return function (L) {
          var U = (0, H.toEnum)(L);
          if (U instanceof p.Just) return U.value0;
          if (U instanceof p.Nothing) return L < (0, H.fromEnum)(f.bottom(H.Bounded0())) ? J : M;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [U.constructor.name]);
        };
      };
    };
  };

  c.Cardinality = a;

  c.upFromIncluding = function (H) {
    return function (J) {
      return w.unfoldr1(J)(g.apply(g.applyFn)(q.Tuple.create)(H.succ));
    };
  };

  c.defaultSucc = y;
  c.defaultPred = u;
  c.SmallBounded = b;
  c.boundedEnumBoolean = N;
  c.boundedEnumChar = D;
  c.newtypeCardinality = x;

  c.boundedEnumMaybe = function (H) {
    return function (J) {
      return new d(function () {
        return p.boundedMaybe(J.Bounded0());
      }, function () {
        return t(J);
      }, l.unwrap(x)(J.cardinality) + 1 | 0, function (M) {
        if (M instanceof p.Nothing) return 0;
        if (M instanceof p.Just) return (0, J.fromEnum)(M.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [M.constructor.name]);
      }, function (M) {
        return 0 === M ? p.Nothing.value : k.map(p.functorMaybe)(p.Just.create)((0, J.toEnum)(M - 1 | 0));
      });
    };
  };

  c.smallBoundedBoolean = r;
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
  a = new function (e, g, f, k) {
    this.add = e;
    this.mul = g;
    this.one = f;
    this.zero = k;
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
      k = a["Data.Eq"],
      p = a["Data.Maybe"],
      l = a["Data.Ord"],
      n = a["Data.Ordering"],
      q = function () {
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
      r = function () {
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
      C = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      y = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      u = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      D = function () {
    function F() {}

    F.value = new F();
    return F;
  }(),
      E = l.ordInt,
      N = l.ordInt;

  a = k.eqInt;
  var H = new k.Eq(function (F) {
    return function (P) {
      return F instanceof q && P instanceof q || F instanceof w && P instanceof w || F instanceof b && P instanceof b || F instanceof h && P instanceof h || F instanceof d && P instanceof d || F instanceof r && P instanceof r || F instanceof x && P instanceof x || F instanceof t && P instanceof t || F instanceof C && P instanceof C || F instanceof y && P instanceof y || F instanceof u && P instanceof u || F instanceof D && P instanceof D ? !0 : !1;
    };
  }),
      J = new l.Ord(function () {
    return H;
  }, function (F) {
    return function (P) {
      if (F instanceof q && P instanceof q) return n.EQ.value;
      if (F instanceof q) return n.LT.value;
      if (P instanceof q) return n.GT.value;
      if (F instanceof w && P instanceof w) return n.EQ.value;
      if (F instanceof w) return n.LT.value;
      if (P instanceof w) return n.GT.value;
      if (F instanceof b && P instanceof b) return n.EQ.value;
      if (F instanceof b) return n.LT.value;
      if (P instanceof b) return n.GT.value;
      if (F instanceof h && P instanceof h) return n.EQ.value;
      if (F instanceof h) return n.LT.value;
      if (P instanceof h) return n.GT.value;
      if (F instanceof d && P instanceof d) return n.EQ.value;
      if (F instanceof d) return n.LT.value;
      if (P instanceof d) return n.GT.value;
      if (F instanceof r && P instanceof r) return n.EQ.value;
      if (F instanceof r) return n.LT.value;
      if (P instanceof r) return n.GT.value;
      if (F instanceof x && P instanceof x) return n.EQ.value;
      if (F instanceof x) return n.LT.value;
      if (P instanceof x) return n.GT.value;
      if (F instanceof t && P instanceof t) return n.EQ.value;
      if (F instanceof t) return n.LT.value;
      if (P instanceof t) return n.GT.value;
      if (F instanceof C && P instanceof C) return n.EQ.value;
      if (F instanceof C) return n.LT.value;
      if (P instanceof C) return n.GT.value;
      if (F instanceof y && P instanceof y) return n.EQ.value;
      if (F instanceof y) return n.LT.value;
      if (P instanceof y) return n.GT.value;
      if (F instanceof u && P instanceof u) return n.EQ.value;
      if (F instanceof u) return n.LT.value;
      if (P instanceof u) return n.GT.value;
      if (F instanceof D && P instanceof D) return n.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [F.constructor.name, P.constructor.name]);
    };
  });
  k = k.eqInt;
  var M = new g.Bounded(function () {
    return E;
  }, -271820, 275759),
      L = new g.Bounded(function () {
    return J;
  }, q.value, D.value),
      U = new f.BoundedEnum(function () {
    return M;
  }, function () {
    return V;
  }, 547580, function (F) {
    return F;
  }, function (F) {
    if (-271820 <= F && 275759 >= F) return new p.Just(F);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [F.constructor.name]);
  }),
      V = new f.Enum(function () {
    return E;
  }, function () {
    var F = f.toEnum(U),
        P = f.fromEnum(U);
    return function (Y) {
      return F(P(Y) - 1 | 0);
    };
  }(), function () {
    var F = f.toEnum(U),
        P = f.fromEnum(U);
    return function (Y) {
      return F(P(Y) + 1 | 0);
    };
  }()),
      I = new f.BoundedEnum(function () {
    return L;
  }, function () {
    return v;
  }, 12, function (F) {
    if (F instanceof q) return 1;
    if (F instanceof w) return 2;
    if (F instanceof b) return 3;
    if (F instanceof h) return 4;
    if (F instanceof d) return 5;
    if (F instanceof r) return 6;
    if (F instanceof x) return 7;
    if (F instanceof t) return 8;
    if (F instanceof C) return 9;
    if (F instanceof y) return 10;
    if (F instanceof u) return 11;
    if (F instanceof D) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [F.constructor.name]);
  }, function (F) {
    return 1 === F ? new p.Just(q.value) : 2 === F ? new p.Just(w.value) : 3 === F ? new p.Just(b.value) : 4 === F ? new p.Just(h.value) : 5 === F ? new p.Just(d.value) : 6 === F ? new p.Just(r.value) : 7 === F ? new p.Just(x.value) : 8 === F ? new p.Just(t.value) : 9 === F ? new p.Just(C.value) : 10 === F ? new p.Just(y.value) : 11 === F ? new p.Just(u.value) : 12 === F ? new p.Just(D.value) : p.Nothing.value;
  }),
      v = new f.Enum(function () {
    return J;
  }, function () {
    var F = f.toEnum(I),
        P = f.fromEnum(I);
    return function (Y) {
      return F(P(Y) - 1 | 0);
    };
  }(), function () {
    var F = f.toEnum(I),
        P = f.fromEnum(I);
    return function (Y) {
      return F(P(Y) + 1 | 0);
    };
  }()),
      B = new g.Bounded(function () {
    return N;
  }, 1, 31),
      O = new f.BoundedEnum(function () {
    return B;
  }, function () {
    return G;
  }, 31, function (F) {
    return F;
  }, function (F) {
    if (1 <= F && 31 >= F) return new p.Just(F);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [F.constructor.name]);
  }),
      G = new f.Enum(function () {
    return N;
  }, function () {
    var F = f.toEnum(O),
        P = f.fromEnum(O);
    return function (Y) {
      return F(P(Y) - 1 | 0);
    };
  }(), function () {
    var F = f.toEnum(O),
        P = f.fromEnum(O);
    return function (Y) {
      return F(P(Y) + 1 | 0);
    };
  }());
  c.eqYear = a;
  c.ordYear = E;
  c.boundedYear = M;
  c.boundedEnumYear = U;
  c.eqMonth = H;
  c.ordMonth = J;
  c.boundedMonth = L;
  c.boundedEnumMonth = I;
  c.eqDay = k;
  c.ordDay = N;
  c.boundedDay = B;
  c.boundedEnumDay = O;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var c = a["Data.Date"],
      e = a["Data.Date"],
      g = a["Data.Bounded"],
      f = a["Data.Date.Component"],
      k = a["Data.Enum"],
      p = a["Data.Eq"],
      l = a["Data.Maybe"],
      n = a["Data.Ord"],
      q = a["Data.Ordering"],
      w = function () {
    function d(r, x, t) {
      this.value0 = r;
      this.value1 = x;
      this.value2 = t;
    }

    d.create = function (r) {
      return function (x) {
        return function (t) {
          return new d(r, x, t);
        };
      };
    };

    return d;
  }(),
      b = new p.Eq(function (d) {
    return function (r) {
      return p.eq(f.eqYear)(d.value0)(r.value0) && p.eq(f.eqMonth)(d.value1)(r.value1) && p.eq(f.eqDay)(d.value2)(r.value2);
    };
  }),
      h = new n.Ord(function () {
    return b;
  }, function (d) {
    return function (r) {
      var x = n.compare(f.ordYear)(d.value0)(r.value0);
      if (x instanceof q.LT) return q.LT.value;
      if (x instanceof q.GT) return q.GT.value;
      x = n.compare(f.ordMonth)(d.value1)(r.value1);
      return x instanceof q.LT ? q.LT.value : x instanceof q.GT ? q.GT.value : n.compare(f.ordDay)(d.value2)(r.value2);
    };
  });

  a = new g.Bounded(function () {
    return h;
  }, new w(g.bottom(f.boundedYear), g.bottom(f.boundedMonth), g.bottom(f.boundedDay)), new w(g.top(f.boundedYear), g.top(f.boundedMonth), g.top(f.boundedDay)));

  c.canonicalDate = function (d) {
    return function (r) {
      return function (x) {
        return e.canonicalDateImpl(function (t) {
          return function (C) {
            return function (y) {
              return new w(t, l.fromJust()(k.toEnum(f.boundedEnumMonth)(C)), y);
            };
          };
        }, d, k.fromEnum(f.boundedEnumMonth)(r), x);
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
      k = a["Data.Eq"],
      p = a["Data.Maybe"];
  a = a["Data.Ord"];
  var l = a.ordInt,
      n = a.ordInt,
      q = a.ordInt,
      w = a.ordInt,
      b = a = k.eqInt,
      h = k.eqInt;
  k = k.eqInt;
  var d = new g.Bounded(function () {
    return l;
  }, 0, 59),
      r = new g.Bounded(function () {
    return n;
  }, 0, 59),
      x = new g.Bounded(function () {
    return q;
  }, 0, 999),
      t = new g.Bounded(function () {
    return w;
  }, 0, 23),
      C = new f.BoundedEnum(function () {
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
    return l;
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
      u = new f.BoundedEnum(function () {
    return r;
  }, function () {
    return D;
  }, 60, function (M) {
    return M;
  }, function (M) {
    if (0 <= M && 59 >= M) return new p.Just(M);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [M.constructor.name]);
  }),
      D = new f.Enum(function () {
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
      E = new f.BoundedEnum(function () {
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
    return q;
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
      H = new f.BoundedEnum(function () {
    return t;
  }, function () {
    return J;
  }, 24, function (M) {
    return M;
  }, function (M) {
    if (0 <= M && 23 >= M) return new p.Just(M);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [M.constructor.name]);
  }),
      J = new f.Enum(function () {
    return w;
  }, function () {
    var M = f.toEnum(H),
        L = f.fromEnum(H);
    return function (U) {
      return M(L(U) - 1 | 0);
    };
  }(), function () {
    var M = f.toEnum(H),
        L = f.fromEnum(H);
    return function (U) {
      return M(L(U) + 1 | 0);
    };
  }());
  c.eqHour = k;
  c.ordHour = w;
  c.boundedHour = t;
  c.boundedEnumHour = H;
  c.eqMinute = b;
  c.ordMinute = n;
  c.boundedMinute = r;
  c.boundedEnumMinute = u;
  c.eqSecond = a;
  c.ordSecond = l;
  c.boundedSecond = d;
  c.boundedEnumSecond = C;
  c.eqMillisecond = h;
  c.ordMillisecond = q;
  c.boundedMillisecond = x;
  c.boundedEnumMillisecond = E;
})(PS);

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  var c = a["Data.Time"],
      e = a["Data.Bounded"],
      g = a["Data.Eq"],
      f = a["Data.Ord"],
      k = a["Data.Ordering"],
      p = a["Data.Time.Component"];

  a = function () {
    function q(w, b, h, d) {
      this.value0 = w;
      this.value1 = b;
      this.value2 = h;
      this.value3 = d;
    }

    q.create = function (w) {
      return function (b) {
        return function (h) {
          return function (d) {
            return new q(w, b, h, d);
          };
        };
      };
    };

    return q;
  }();

  var l = new g.Eq(function (q) {
    return function (w) {
      return g.eq(p.eqHour)(q.value0)(w.value0) && g.eq(p.eqMinute)(q.value1)(w.value1) && g.eq(p.eqSecond)(q.value2)(w.value2) && g.eq(p.eqMillisecond)(q.value3)(w.value3);
    };
  }),
      n = new f.Ord(function () {
    return l;
  }, function (q) {
    return function (w) {
      var b = f.compare(p.ordHour)(q.value0)(w.value0);
      if (b instanceof k.LT) return k.LT.value;
      if (b instanceof k.GT) return k.GT.value;
      b = f.compare(p.ordMinute)(q.value1)(w.value1);
      if (b instanceof k.LT) return k.LT.value;
      if (b instanceof k.GT) return k.GT.value;
      b = f.compare(p.ordSecond)(q.value2)(w.value2);
      return b instanceof k.LT ? k.LT.value : b instanceof k.GT ? k.GT.value : f.compare(p.ordMillisecond)(q.value3)(w.value3);
    };
  });
  e = new e.Bounded(function () {
    return n;
  }, new a(e.bottom(p.boundedHour), e.bottom(p.boundedMinute), e.bottom(p.boundedSecond), e.bottom(p.boundedMillisecond)), new a(e.top(p.boundedHour), e.top(p.boundedMinute), e.top(p.boundedSecond), e.top(p.boundedMillisecond)));
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

  c.eqTime = l;
  c.ordTime = n;
  c.boundedTime = e;
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  var c = a["Data.DateTime"],
      e = a["Data.Bounded"],
      g = a["Data.Date"],
      f = a["Data.Eq"],
      k = a["Data.Ord"],
      p = a["Data.Ordering"],
      l = a["Data.Time"];

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
      return f.eq(g.eqDate)(w.value0)(b.value0) && f.eq(l.eqTime)(w.value1)(b.value1);
    };
  }),
      q = new k.Ord(function () {
    return n;
  }, function (w) {
    return function (b) {
      var h = k.compare(g.ordDate)(w.value0)(b.value0);
      return h instanceof p.LT ? p.LT.value : h instanceof p.GT ? p.GT.value : k.compare(l.ordTime)(w.value1)(b.value1);
    };
  });
  e = new e.Bounded(function () {
    return q;
  }, new a(e.bottom(g.boundedDate), e.bottom(l.boundedTime)), new a(e.top(g.boundedDate), e.top(l.boundedTime)));
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
      k = a["Data.Date.Component"],
      p = a["Data.DateTime"],
      l = a["Data.Enum"],
      n = a["Data.Maybe"],
      q = a["Data.Time"];

  a = function () {
    return e.toDateTimeImpl(function (w) {
      return function (b) {
        return function (h) {
          return function (d) {
            return function (r) {
              return function (x) {
                return function (t) {
                  return new p.DateTime(f.canonicalDate(w)(n.fromJust()(l.toEnum(k.boundedEnumMonth)(b)))(h), new q.Time(d, r, x, t));
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
      k = a["Control.Plus"],
      p = a["Data.Either"],
      l = a["Data.Function"],
      n = function n(h) {
    return function (d) {
      return function (r) {
        if (r instanceof p.Left) return h;
        if (r instanceof p.Right) return d(r.value0);
        throw Error("Failed pattern match at Data.Either.Extra (line 29, column 1 - line 29, column 58): " + [h.constructor.name, d.constructor.name, r.constructor.name]);
      };
    };
  },
      q = function q(h) {
    return function (d) {
      return function (r) {
        if (r instanceof p.Left) return d(r.value0);
        if (r instanceof p.Right) return h;
        throw Error("Failed pattern match at Data.Either.Extra (line 18, column 1 - line 18, column 57): " + [h.constructor.name, d.constructor.name, r.constructor.name]);
      };
    };
  },
      w = function w(h) {
    return function (d) {
      return function (r) {
        return l.flip(g.bind(h.Bind1()))(n(k.empty(d))(function () {
          var x = e.pure(h.Applicative0());
          return function (t) {
            return x(r(t));
          };
        }()));
      };
    };
  },
      b = function b(h) {
    return function (d) {
      return function (r) {
        return l.flip(g.bind(h.Bind1()))(q(k.empty(d))(function () {
          var x = e.pure(h.Applicative0());
          return function (t) {
            return x(r(t));
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
  a = new function (f, k, p, l) {
    this.CommutativeRing0 = f;
    this.degree = k;
    this.div = p;
    this.mod = l;
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
    function f(k) {
      this.value0 = k;
    }

    f.create = function (k) {
      return new f(k);
    };

    return f;
  }(),
      e = function () {
    function f(k) {
      this.value0 = k;
    }

    f.create = function (k) {
      return new f(k);
    };

    return f;
  }(),
      g = function () {
    function f() {}

    f.value = new f();
    return f;
  }();

  a.Generic = function (f, k) {
    this.from = f;
    this.to = k;
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

  var k = function k(n) {
    return n["genericTop'"];
  },
      p = new f(e.NoArguments.value),
      l = function l(n) {
    return n["genericBottom'"];
  };

  c["genericBottom'"] = l;

  c.genericBottom = function (n) {
    return function (q) {
      return e.to(n)(l(q));
    };
  };

  c["genericTop'"] = k;

  c.genericTop = function (n) {
    return function (q) {
      return e.to(n)(k(q));
    };
  };

  c.genericBottomNoArguments = p;

  c.genericBottomSum = function (n) {
    return new f(new e.Inl(l(n)));
  };

  c.genericBottomConstructor = function (n) {
    return new f(l(n));
  };

  c.genericTopNoArguments = a;

  c.genericTopSum = function (n) {
    return new g(new e.Inr(k(n)));
  };

  c.genericTopConstructor = function (n) {
    return new g(k(n));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var c = a["Data.Generic.Rep.Enum"],
      e = a["Data.Boolean"],
      g = a["Data.Enum"],
      f = a["Data.Functor"],
      k = a["Data.Generic.Rep"],
      p = a["Data.Generic.Rep.Bounded"],
      l = a["Data.Maybe"],
      n = a["Data.Newtype"],
      q = function q(C, y) {
    this["genericPred'"] = C;
    this["genericSucc'"] = y;
  },
      w = function w(C, y, u) {
    this["genericCardinality'"] = C;
    this["genericFromEnum'"] = y;
    this["genericToEnum'"] = u;
  },
      b = function b(C) {
    return C["genericToEnum'"];
  },
      h = function h(C) {
    return C["genericSucc'"];
  },
      d = function d(C) {
    return C["genericPred'"];
  },
      r = function r(C) {
    return C["genericFromEnum'"];
  };

  a = new q(function (C) {
    return l.Nothing.value;
  }, function (C) {
    return l.Nothing.value;
  });

  var x = function x(C) {
    return C["genericCardinality'"];
  },
      t = new w(1, function (C) {
    return 0;
  }, function (C) {
    return 0 === C ? new l.Just(k.NoArguments.value) : l.Nothing.value;
  });

  c.genericPred = function (C) {
    return function (y) {
      var u = f.map(l.functorMaybe)(k.to(C)),
          D = d(y),
          E = k.from(C);
      return function (N) {
        return u(D(E(N)));
      };
    };
  };

  c.genericSucc = function (C) {
    return function (y) {
      var u = f.map(l.functorMaybe)(k.to(C)),
          D = h(y),
          E = k.from(C);
      return function (N) {
        return u(D(E(N)));
      };
    };
  };

  c.genericCardinality = function (C) {
    return function (y) {
      return n.unwrap(g.newtypeCardinality)(x(y));
    };
  };

  c.genericToEnum = function (C) {
    return function (y) {
      var u = f.map(l.functorMaybe)(k.to(C)),
          D = b(y);
      return function (E) {
        return u(D(E));
      };
    };
  };

  c.genericFromEnum = function (C) {
    return function (y) {
      var u = r(y),
          D = k.from(C);
      return function (E) {
        return u(D(E));
      };
    };
  };

  c.genericEnumNoArguments = a;

  c.genericEnumConstructor = function (C) {
    return new q(function (y) {
      return f.map(l.functorMaybe)(k.Constructor)(d(C)(y));
    }, function (y) {
      return f.map(l.functorMaybe)(k.Constructor)(h(C)(y));
    });
  };

  c.genericEnumSum = function (C) {
    return function (y) {
      return function (u) {
        return function (D) {
          return new q(function (E) {
            if (E instanceof k.Inl) return f.map(l.functorMaybe)(k.Inl.create)(d(C)(E.value0));

            if (E instanceof k.Inr) {
              E = d(u)(E.value0);
              if (E instanceof l.Nothing) return new l.Just(new k.Inl(p["genericTop'"](y)));
              if (E instanceof l.Just) return new l.Just(new k.Inr(E.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [E.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [E.constructor.name]);
          }, function (E) {
            if (E instanceof k.Inl) {
              E = h(C)(E.value0);
              if (E instanceof l.Nothing) return new l.Just(new k.Inr(p["genericBottom'"](D)));
              if (E instanceof l.Just) return new l.Just(new k.Inl(E.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [E.constructor.name]);
            }

            if (E instanceof k.Inr) return f.map(l.functorMaybe)(k.Inr.create)(h(u)(E.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [E.constructor.name]);
          });
        };
      };
    };
  };

  c.genericBoundedEnumNoArguments = t;

  c.genericBoundedEnumConstructor = function (C) {
    return new w(n.unwrap(g.newtypeCardinality)(x(C)), function (y) {
      return r(C)(y);
    }, function (y) {
      return f.map(l.functorMaybe)(k.Constructor)(b(C)(y));
    });
  };

  c.genericBoundedEnumSum = function (C) {
    return function (y) {
      return new w(g.Cardinality(n.unwrap(g.newtypeCardinality)(x(C)) + n.unwrap(g.newtypeCardinality)(x(y)) | 0), function (u) {
        if (u instanceof k.Inl) return r(C)(u.value0);
        if (u instanceof k.Inr) return r(y)(u.value0) + n.unwrap(g.newtypeCardinality)(x(C)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [u.constructor.name]);
      }, function (u) {
        var D = x(C);
        if (0 <= u && u < D) u = f.map(l.functorMaybe)(k.Inl.create)(b(C)(u));else if (e.otherwise) u = f.map(l.functorMaybe)(k.Inr.create)(b(y)(u - D | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [D.constructor.name]);
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
    return function (k) {
      return !0;
    };
  });

  c.genericEq = function (f) {
    return function (k) {
      return function (p) {
        return function (l) {
          return (0, k["genericEq'"])(e.from(f)(p))(e.from(f)(l));
        };
      };
    };
  };

  c.genericEqNoArguments = a;

  c.genericEqSum = function (f) {
    return function (k) {
      return new g(function (p) {
        return function (l) {
          return p instanceof e.Inl && l instanceof e.Inl ? (0, f["genericEq'"])(p.value0)(l.value0) : p instanceof e.Inr && l instanceof e.Inr ? (0, k["genericEq'"])(p.value0)(l.value0) : !1;
        };
      });
    };
  };

  c.genericEqConstructor = function (f) {
    return new g(function (k) {
      return function (p) {
        return (0, f["genericEq'"])(k)(p);
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
    return function (l) {
      return g.EQ.value;
    };
  });

  var k = function k(p) {
    return p["genericCompare'"];
  };

  c.genericCompare = function (p) {
    return function (l) {
      return function (n) {
        return function (q) {
          return k(l)(e.from(p)(n))(e.from(p)(q));
        };
      };
    };
  };

  c.genericOrdNoArguments = a;

  c.genericOrdSum = function (p) {
    return function (l) {
      return new f(function (n) {
        return function (q) {
          if (n instanceof e.Inl && q instanceof e.Inl) return k(p)(n.value0)(q.value0);
          if (n instanceof e.Inr && q instanceof e.Inr) return k(l)(n.value0)(q.value0);
          if (n instanceof e.Inl && q instanceof e.Inr) return g.LT.value;
          if (n instanceof e.Inr && q instanceof e.Inl) return g.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [n.constructor.name, q.constructor.name]);
        };
      });
    };
  };

  c.genericOrdConstructor = function (p) {
    return new f(function (l) {
      return function (n) {
        return k(p)(l)(n);
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
      k = a["Data.Semigroup"],
      p = a["Data.Symbol"],
      l = function l(n) {
    this["genericShow'"] = n;
  };

  a = new function (n) {
    this.genericShowArgs = n;
  }(function (n) {
    return [];
  });

  c.genericShow = function (n) {
    return function (q) {
      return function (w) {
        return (0, q["genericShow'"])(g.from(n)(w));
      };
    };
  };

  c.genericShowArgsNoArguments = a;

  c.genericShowSum = function (n) {
    return function (q) {
      return new l(function (w) {
        if (w instanceof g.Inl) return (0, n["genericShow'"])(w.value0);
        if (w instanceof g.Inr) return (0, q["genericShow'"])(w.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [w.constructor.name]);
      });
    };
  };

  c.genericShowConstructor = function (n) {
    return function (q) {
      return new l(function (w) {
        var b = p.reflectSymbol(q)(p.SProxy.value);
        w = (0, n.genericShowArgs)(w);
        return 0 === w.length ? b : "(" + (e.intercalate(e.foldableArray)(f.monoidString)(" ")(k.append(k.semigroupArray)([b])(w)) + ")");
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
      k = a["Data.Maybe"],
      p = a.Global,
      l = a.Math,
      n = e.fromNumberImpl(k.Just.create)(k.Nothing.value),
      q = function q(w) {
    if (w === p.infinity || w === -p.infinity) return 0;
    if (w >= e.toNumber(f.top(f.boundedInt))) return f.top(f.boundedInt);
    if (w <= e.toNumber(f.bottom(f.boundedInt))) return f.bottom(f.boundedInt);
    if (g.otherwise) return k.fromMaybe(0)(n(w));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [w.constructor.name]);
  };

  c.round = function (w) {
    return q(l.round(w));
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
      k = a["Data.DateTime.Instant"],
      p = a["Data.Enum"],
      l = a["Data.Functor"],
      n = a["Data.Int"],
      q = a["Data.Maybe"],
      w = a["Data.Time"],
      b = a["Data.Time.Component"],
      h = a["Data.Time.Duration"];
  a = a["Control.Bind"].composeKleisliFlipped(q.bindMaybe)(function (d) {
    return k.instant(h.Milliseconds(d));
  })(e.toInstantImpl(q.Just.create)(q.Nothing.value));
  l = l.map(l.functorFn)(l.map(q.functorMaybe)(k.toDateTime))(a);

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

  c.toDateTime = l;

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
        return function (k) {
          return g(f(e(k)));
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
      k = a["Data.Tuple"];
  a = new function (l, n, q) {
    this.Profunctor0 = l;
    this.first = n;
    this.second = q;
  }(function () {
    return f.profunctorFn;
  }, function (l) {
    return function (n) {
      return new k.Tuple(l(n.value0), n.value1);
    };
  }, a["Data.Functor"].map(k.functorTuple));

  var p = function p(l) {
    return function (n) {
      return function (q) {
        return function (w) {
          return g.composeFlipped(l.Semigroupoid0())((0, n.first)(q))((0, n.second)(w));
        };
      };
    };
  };

  c.second = function (l) {
    return l.second;
  };

  c.fanout = function (l) {
    return function (n) {
      return function (q) {
        return function (w) {
          var b = f.dimap(n.Profunctor0())(e.identity(e.categoryFn))(function (h) {
            return new k.Tuple(h, h);
          })(e.identity(l));
          return g.composeFlipped(l.Semigroupoid0())(b)(p(l)(n)(q)(w));
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

  a._unsafeCodePointAt0 = function (k) {
    return f ? function (p) {
      return p.codePointAt(0);
    } : k;
  };

  a._codePointAt = function (k) {
    return function (p) {
      return function (l) {
        return function (n) {
          return function (q) {
            return function (w) {
              var b = w.length;
              if (0 > q || q >= b) return l;
              if (e) for (w = w[Symbol.iterator](), b = q;; --b) {
                var h = w.next();
                if (h.done) return l;
                if (0 === b) return p(n(h.value));
              }
              return k(q)(w);
            };
          };
        };
      };
    };
  };

  a._singleton = function (k) {
    return g ? String.fromCodePoint : k;
  };

  a._take = function (k) {
    return function (p) {
      return e ? function (l) {
        var n = "";
        l = l[Symbol.iterator]();

        for (var q = 0; q < p; ++q) {
          var w = l.next();
          if (w.done) break;
          n += w.value;
        }

        return n;
      } : k(p);
    };
  };

  a._toCodePointArray = function (k) {
    return function (p) {
      return c ? function (l) {
        return Array.from(l, p);
      } : k;
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
      k = e._indexOf(g.Just.create)(g.Nothing.value);

  c.stripSuffix = function (p) {
    return function (l) {
      var n = f(p)(l);
      return n instanceof g.Just && n.value0 === (e.length(l) - e.length(p) | 0) ? g.Just.create(e.take(n.value0)(l)) : g.Nothing.value;
    };
  };

  c.contains = function (p) {
    var l = k(p);
    return function (n) {
      return g.isJust(l(n));
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
      k = a["Data.Bounded"],
      p = a["Data.Enum"],
      l = a["Data.Eq"],
      n = a["Data.EuclideanRing"],
      q = a["Data.Functor"],
      w = a["Data.Int"],
      b = a["Data.Maybe"],
      h = a["Data.Ord"],
      d = a["Data.String.CodeUnits"],
      r = a["Data.String.Common"],
      x = a["Data.String.Unsafe"],
      t = a["Data.Tuple"],
      C = a["Data.Unfoldable"],
      y = function y(B) {
    return function (O) {
      return ((1024 * (B - 55296 | 0) | 0) + (O - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (B) {
    return "(CodePoint 0x" + (r.toUpper(w.toStringAs(w.hexadecimal)(B)) + ")");
  });

  var u = function u(B) {
    var O = d.length(B);
    if (0 === O) return b.Nothing.value;
    if (1 === O) return new b.Just({
      head: p.fromEnum(p.boundedEnumChar)(x.charAt(0)(B)),
      tail: ""
    });
    O = p.fromEnum(p.boundedEnumChar)(x.charAt(1)(B));
    var G = p.fromEnum(p.boundedEnumChar)(x.charAt(0)(B));
    return 55296 <= G && 56319 >= G && 56320 <= O && 57343 >= O ? new b.Just({
      head: y(G)(O),
      tail: d.drop(2)(B)
    }) : new b.Just({
      head: G,
      tail: d.drop(1)(B)
    });
  },
      D = function D(B) {
    return q.map(b.functorMaybe)(function (O) {
      return new t.Tuple(O.head, O.tail);
    })(u(B));
  },
      E = e._unsafeCodePointAt0(function (B) {
    var O = p.fromEnum(p.boundedEnumChar)(x.charAt(0)(B));
    return 55296 <= O && 56319 >= O && 1 < d.length(B) && (B = p.fromEnum(p.boundedEnumChar)(x.charAt(1)(B)), 56320 <= B && 57343 >= B) ? y(O)(B) : O;
  }),
      N = e._toCodePointArray(function (B) {
    return C.unfoldr(C.unfoldableArray)(D)(B);
  })(E),
      H = function () {
    var B = p.toEnumWithDefaults(p.boundedEnumChar)(k.bottom(k.boundedChar))(k.top(k.boundedChar));
    return function (O) {
      return d.singleton(B(O));
    };
  }(),
      J = e._singleton(function (B) {
    if (65535 >= B) return H(B);
    var O = n.div(n.euclideanRingInt)(B - 65536 | 0)(1024) + 55296 | 0;
    B = n.mod(n.euclideanRingInt)(B - 65536 | 0)(1024) + 56320 | 0;
    return H(O) + H(B);
  }),
      M = function M(B) {
    return function (O) {
      if (1 > B) return "";
      var G = u(O);
      return G instanceof b.Just ? J(G.value0.head) + M(B - 1 | 0)(G.value0.tail) : O;
    };
  };

  e._take(M);

  var L = new l.Eq(function (B) {
    return function (O) {
      return B === O;
    };
  }),
      U = new h.Ord(function () {
    return L;
  }, function (B) {
    return function (O) {
      return h.compare(h.ordInt)(B)(O);
    };
  }),
      V = function V(B) {
    return function (O) {
      for (var G = B, F = !1, P; !F;) {
        P = G;
        var Y = u(O);
        Y instanceof b.Just ? 0 === P ? (F = !0, P = new b.Just(Y.value0.head)) : (G = P - 1 | 0, O = Y.value0.tail, P = void 0) : (F = !0, P = b.Nothing.value);
      }

      return P;
    };
  },
      I = new k.Bounded(function () {
    return U;
  }, 0, 1114111);

  l = new p.BoundedEnum(function () {
    return I;
  }, function () {
    return v;
  }, 1114112, function (B) {
    return B;
  }, function (B) {
    if (0 <= B && 1114111 >= B) return new b.Just(B);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [B.constructor.name]);
  });
  var v = new p.Enum(function () {
    return U;
  }, p.defaultPred(p.toEnum(l))(p.fromEnum(l)), p.defaultSucc(p.toEnum(l))(p.fromEnum(l)));
  c.singleton = J;
  c.toCodePointArray = N;

  c.codePointAt = function (B) {
    return function (O) {
      return 0 > B || 0 === B && "" === O ? b.Nothing.value : 0 === B ? new b.Just(E(O)) : e._codePointAt(V)(b.Just.create)(b.Nothing.value)(E)(B)(O);
    };
  };

  c.length = function (B) {
    return g.length(N(B));
  };

  c.showCodePoint = a;
  c.boundedEnumCodePoint = l;
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
      k = function k(l) {
    return function (n) {
      return function (q) {
        var w = f.sequence(l.Traversable2())(n),
            b = g.mapWithIndex(l.FunctorWithIndex0())(q);
        return function (h) {
          return w(b(h));
        };
      };
    };
  },
      p = new function (l, n, q, w) {
    this.FoldableWithIndex1 = l;
    this.FunctorWithIndex0 = n;
    this.Traversable2 = q;
    this.traverseWithIndex = w;
  }(function () {
    return e.foldableWithIndexArray;
  }, function () {
    return g.functorWithIndexArray;
  }, function () {
    return f.traversableArray;
  }, function (l) {
    return k(p)(l);
  });

  c.traverseWithIndex = function (l) {
    return l.traverseWithIndex;
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
    var k = g.pure(f.applicativeEffect);
    return function (p) {
      return k(p);
    };
  }());
  c.emptyUUID = "00000000-0000-0000-0000-000000000000";
  c.genUUID = a;

  c.toString = function (k) {
    return k;
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
      g = new function (f, k, p, l, n, q) {
    this.Semigroup0 = f;
    this.at = k;
    this.pathAppend = p;
    this.pathAppendNSx = l;
    this.root = n;
    this.xx = q;
  }(function () {
    return e.semigroupString;
  }, function (f) {
    return "@" + f;
  }, function (f) {
    return function (k) {
      return f === g.root ? g.root + k : f + ("/" + k);
    };
  }, function (f) {
    return function (k) {
      return f === g.root ? g.root + ("x:" + k) : f + ("/x:" + k);
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
      k = a.Foreign;

  a["Foreign.Index"].readProp = function (p) {
    return function (l) {
      return c.unsafeReadPropImpl(k.fail(new k.TypeMismatch("object", k.typeOf(l))), e.pure(g.applicativeExceptT(f.monadIdentity)), p, l);
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

  c.build = function (k) {
    return function (p) {
      return k(e.copyRecord(p));
    };
  };

  c.insert = function (k) {
    return function (p) {
      return function (l) {
        return function (n) {
          return function (q) {
            return function (w) {
              return e.unsafeInsert(g.reflectSymbol(l)(n))(q)(w);
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
      k = a["Control.Bind"],
      p = a["Control.Category"],
      l = a["Control.Monad.Except"],
      n = a["Control.Monad.Except.Trans"],
      q = a["Control.Semigroupoid"],
      w = a["Data.Bifunctor"],
      b = a["Data.Either"],
      h = a["Data.Function"],
      d = a["Data.Functor"],
      r = a["Data.Identity"],
      x = a["Data.List.Types"],
      t = a["Data.Maybe"],
      C = a["Data.Semigroup"],
      y = a["Data.Symbol"],
      u = a["Data.TraversableWithIndex"],
      D = a["Effect.Exception"],
      E = a["Effect.Uncurried"],
      N = a["Effect.Unsafe"],
      H = a.Foreign,
      J = a["Foreign.Index"],
      M = a["Record.Builder"],
      L = a["Type.Data.RowList"],
      U = function U(F) {
    this.getFields = F;
  },
      V = function V(F) {
    this.readImpl = F;
  };

  a = new V(H.readString);

  var I = new V(g.pure(n.applicativeExceptT(r.monadIdentity))),
      v = new U(function (F) {
    return function (P) {
      return g.pure(n.applicativeExceptT(r.monadIdentity))(p.identity(M.categoryBuilder));
    };
  }),
      B = function () {
    var F = w.lmap(b.bifunctorEither)(function () {
      var Y = g.pure(x.applicativeNonEmptyList);
      return function (pa) {
        return Y(H.ForeignError.create(D.message(pa)));
      };
    }()),
        P = E.runEffectFn1(e._parseJSON);
    return function (Y) {
      return n.ExceptT(r.Identity(F(N.unsafePerformEffect(D["try"](P(Y))))));
    };
  }(),
      O = function O(F) {
    return function (P) {
      return function (Y) {
        if (P instanceof b.Left && Y instanceof b.Right) return new b.Left(P.value0);
        if (P instanceof b.Left && Y instanceof b.Left) return new b.Left(C.append(F)(P.value0)(Y.value0));
        if (P instanceof b.Right && Y instanceof b.Left) return new b.Left(Y.value0);
        if (P instanceof b.Right && Y instanceof b.Right) return new b.Right(P.value0(Y.value0));
        throw Error("Failed pattern match at Simple.JSON (line 234, column 1 - line 234, column 90): " + [P.constructor.name, Y.constructor.name]);
      };
    };
  },
      G = function G(F) {
    return function (P) {
      return function (Y) {
        return function (pa) {
          return n.ExceptT(f.apply(P.Apply0())(d.map(P.Apply0().Functor0())(O(F))(n.runExceptT(Y)))(n.runExceptT(pa)));
        };
      };
    };
  };

  c["readJSON'"] = function (F) {
    return k.composeKleisliFlipped(n.bindExceptT(r.monadIdentity))(F.readImpl)(B);
  };

  c["read'"] = function (F) {
    return F.readImpl;
  };

  c.ReadForeign = V;

  c.readImpl = function (F) {
    return F.readImpl;
  };

  c.readForeign = I;
  c.readString = a;

  c.readArray = function (F) {
    return new V(function () {
      return k.composeKleisliFlipped(n.bindExceptT(r.monadIdentity))(u.traverseWithIndex(u.traversableWithIndexArray)(n.applicativeExceptT(r.monadIdentity))(function (P) {
        return function (Y) {
          return l.withExcept(d.map(x.functorNonEmptyList)(H.ErrorAtIndex.create(P)))((0, F.readImpl)(Y));
        };
      }))(H.readArray);
    }());
  };

  c.readMaybe = function (F) {
    return new V(function () {
      return function (P) {
        return function (Y) {
          return H.isNull(Y) || H.isUndefined(Y) ? g.pure(n.applicativeExceptT(r.monadIdentity))(t.Nothing.value) : d.map(n.functorExceptT(r.functorIdentity))(t.Just.create)(P(Y));
        };
      }(F.readImpl);
    }());
  };

  c.readRecord = function (F) {
    return function (P) {
      return new V(function (Y) {
        return d.map(n.functorExceptT(r.functorIdentity))(h.flip(M.build)({}))((0, P.getFields)(L.RLProxy.value)(Y));
      });
    };
  };

  c.readFieldsCons = function (F) {
    return function (P) {
      return function (Y) {
        return function (pa) {
          return function (va) {
            return new U(function (z) {
              return function (xa) {
                var X = (0, Y.getFields)(L.RLProxy.value)(xa),
                    ka = y.reflectSymbol(F)(y.SProxy.value),
                    Aa = l.withExcept(d.map(x.functorNonEmptyList)(H.ErrorAtProperty.create(ka)));
                xa = k.bind(n.bindExceptT(r.monadIdentity))(Aa(k.bindFlipped(n.bindExceptT(r.monadIdentity))(P.readImpl)(J.readProp(ka)(xa))))(function (R) {
                  return g.pure(n.applicativeExceptT(r.monadIdentity))(M.insert()()(F)(y.SProxy.value)(R));
                });
                return G(x.semigroupNonEmptyList)(r.applicativeIdentity)(d.map(n.functorExceptT(r.functorIdentity))(q.compose(M.semigroupoidBuilder))(xa))(X);
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
      k = a["Control.Monad.Error.Class"],
      p = a["Control.Monad.Except.Trans"],
      l = a["Data.Bounded"],
      n = a["Data.Enum"],
      q = a["Data.Eq"],
      w = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      h = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Generic.Rep.Enum"],
      r = a["Data.Generic.Rep.Eq"],
      x = a["Data.Generic.Rep.Ord"],
      t = a["Data.Generic.Rep.Show"],
      C = a["Data.Identity"],
      y = a["Data.List.Types"],
      u = a["Data.Ord"],
      D = a["Data.Show"],
      E = a["Data.Symbol"],
      N = a.Foreign,
      H = a["Simple.JSON"],
      J = function () {
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
      I = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      v = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      B = function () {
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
      F = function () {
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
      xa = function () {
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
      Ga = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ea = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      la = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      da = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      K = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      aa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ra = function () {
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
      Oa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Q = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ya = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ca = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ma = function () {
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
      sa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ta = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      za = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ja = function () {
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
      Sa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Va = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      $a = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ab = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      hb = function () {
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
      eb = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      jb = function jb(m) {
    this.enumReadForeignImpl = m;
  },
      Qa = new b.Generic(function (m) {
    if (m instanceof J) return new b.Inl(b.NoArguments.value);
    if (m instanceof M) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (m instanceof L) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (m instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (m instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (m instanceof I) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (m instanceof v) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (m instanceof B) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (m instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (m instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (m instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (m instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (m instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (m instanceof pa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof b.Inl) return J.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inl) return M.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inl) return L.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inl) return U.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inl) return I.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return v.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return B.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Y.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return pa.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [m.constructor.name]);
  }),
      nb = new D.Show(t.genericShow(Qa)(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Audiovisual";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Dataset";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Event";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Image";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "InteractiveResource";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Model";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "PhysicalObject";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "ResourceCollection";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Service";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Software";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Sound";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Text";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Workflow";
  })))(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      Ya = new b.Generic(function (m) {
    if (m instanceof va) return new b.Inl(b.NoArguments.value);
    if (m instanceof z) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (m instanceof xa) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
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
    if (m instanceof Ga) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (m instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (m instanceof la) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (m instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (m instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (m instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (m instanceof ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (m instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (m instanceof Ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (m instanceof Oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (m instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (m instanceof ya) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof b.Inl) return va.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inl) return z.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inl) return xa.value;
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
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ga.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return la.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return K.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return aa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ra.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ea.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Oa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ya.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [m.constructor.name]);
  }),
      vb = new D.Show(t.genericShow(Ya)(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsCitedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Cites";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsSupplementTo";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsContinuedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Continues";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsPartOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "HasPart";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsReferencedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "References";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Documents";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsCompiledBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Compiles";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "HasMetadata";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsMetadataFor";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "Reviews";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsReviewedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      Ta = new b.Generic(function (m) {
    if (m instanceof ca) return new b.Inl(b.NoArguments.value);
    if (m instanceof ma) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (m instanceof A) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (m instanceof W) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (m instanceof sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (m instanceof ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (m instanceof za) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (m instanceof Ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (m instanceof Ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (m instanceof Ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (m instanceof Sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (m instanceof Va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (m instanceof $a) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (m instanceof ab) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (m instanceof hb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (m instanceof cb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (m instanceof db) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (m instanceof eb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof b.Inl) return ca.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inl) return ma.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inl) return A.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inl) return W.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inl) return sa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inl) return ta.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return za.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ja.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ka.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ha.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Sa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Va.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return $a.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ab.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return hb.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return cb.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return db.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return eb.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [m.constructor.name]);
  }),
      wb = new D.Show(function (m) {
    return m instanceof ma ? "arXiv" : m instanceof A ? "bibcode" : t.genericShow(Ta)(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "ARK";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "ArXiv";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "Bibcode";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "DOI";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "EAN13";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "EISSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "Handle";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "IGSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "ISBN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "ISSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "ISTC";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "LISSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "LSID";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "PMID";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "PURL";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "UPC";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "URL";
    })))(t.genericShowConstructor(t.genericShowArgsNoArguments)(new E.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(m);
  }),
      xb = new q.Eq(r.genericEq(Qa)(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqConstructor(r.genericEqNoArguments)))))))))))))))),
      ob = new u.Ord(function () {
    return xb;
  }, function (m) {
    return function (Wa) {
      return x.genericCompare(Qa)(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdConstructor(x.genericOrdNoArguments)))))))))))))))(m)(Wa);
    };
  }),
      yb = new q.Eq(r.genericEq(Ya)(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqConstructor(r.genericEqNoArguments))))))))))))))))))))))))))),
      pb = new u.Ord(function () {
    return yb;
  }, function (m) {
    return function (Wa) {
      return x.genericCompare(Ya)(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdConstructor(x.genericOrdNoArguments))))))))))))))))))))))))))(m)(Wa);
    };
  }),
      zb = new q.Eq(r.genericEq(Ta)(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqSum(r.genericEqConstructor(r.genericEqNoArguments))(r.genericEqConstructor(r.genericEqNoArguments)))))))))))))))))))),
      Xa = new u.Ord(function () {
    return zb;
  }, function (m) {
    return function (Wa) {
      return x.genericCompare(Ta)(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdSum(x.genericOrdConstructor(x.genericOrdNoArguments))(x.genericOrdConstructor(x.genericOrdNoArguments)))))))))))))))))))(m)(Wa);
    };
  }),
      qb = new n.Enum(function () {
    return ob;
  }, d.genericPred(Qa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), d.genericSucc(Qa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      Ab = new n.Enum(function () {
    return pb;
  }, d.genericPred(Ya)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), d.genericSucc(Ya)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      Ra = function Ra(m) {
    return function (Wa) {
      return new jb(function (bb) {
        return e.alt(p.altExceptT(y.semigroupNonEmptyList)(C.monadIdentity))(w.map(p.functorExceptT(C.functorIdentity))(b.Inl.create)((0, m.enumReadForeignImpl)(bb)))(w.map(p.functorExceptT(C.functorIdentity))(b.Inr.create)((0, Wa.enumReadForeignImpl)(bb)));
      });
    };
  },
      rb = new n.Enum(function () {
    return Xa;
  }, d.genericPred(Ta)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), d.genericSucc(Ta)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      Pa = function Pa(m) {
    return new jb(function (Wa) {
      var bb = E.reflectSymbol(m)(E.SProxy.value);
      return f.bind(p.bindExceptT(C.monadIdentity))(H.readImpl(H.readString)(Wa))(function (kb) {
        return kb === bb ? g.pure(p.applicativeExceptT(C.monadIdentity))(b.NoArguments.value) : k.throwError(p.monadThrowExceptT(C.monadIdentity))(g.pure(y.applicativeNonEmptyList)(N.ForeignError.create("Enum string " + (kb + (" did not match expected string " + bb)))));
      });
    });
  },
      fb = new H.ReadForeign(function (m) {
    return function (Wa) {
      return function (bb) {
        return w.map(p.functorExceptT(C.functorIdentity))(b.to(m))((0, Wa.enumReadForeignImpl)(bb));
      };
    };
  }(Ta)(Ra(Pa(new E.IsSymbol(function () {
    return "ARK";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "ArXiv";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "Bibcode";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "DOI";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "EAN13";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "EISSN";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "Handle";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "IGSN";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "ISBN";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "ISSN";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "ISTC";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "LISSN";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "LSID";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "PMID";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "PURL";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "UPC";
  })))(Ra(Pa(new E.IsSymbol(function () {
    return "URL";
  })))(Pa(new E.IsSymbol(function () {
    return "URN";
  }))))))))))))))))))))),
      ib = new l.Bounded(function () {
    return ob;
  }, h.genericBottom(Qa)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(Qa)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments)))))))))))))))),
      sb = new l.Bounded(function () {
    return pb;
  }, h.genericBottom(Ya)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(Ya)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments))))))))))))))))))))))))))),
      tb = new l.Bounded(function () {
    return Xa;
  }, h.genericBottom(Ta)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(Ta)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments)))))))))))))))))))),
      Bb = new n.BoundedEnum(function () {
    return ib;
  }, function () {
    return qb;
  }, d.genericCardinality(Qa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericFromEnum(Qa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericToEnum(Qa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))),
      lb = new n.BoundedEnum(function () {
    return sb;
  }, function () {
    return Ab;
  }, d.genericCardinality(Ya)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericFromEnum(Ya)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericToEnum(Ya)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Cb = new n.BoundedEnum(function () {
    return tb;
  }, function () {
    return rb;
  }, d.genericCardinality(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericFromEnum(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericToEnum(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))));

  c.ARK = ca;
  c.ArXiv = ma;
  c.Bibcode = A;
  c.DOI = W;
  c.EAN13 = sa;
  c.EISSN = ta;
  c.Handle = za;
  c.IGSN = Ja;
  c.ISBN = Ka;
  c.ISSN = Ha;
  c.ISTC = Sa;
  c.LISSN = Va;
  c.LSID = $a;
  c.PMID = ab;
  c.PURL = hb;
  c.UPC = cb;
  c.URL = db;
  c.URN = eb;
  c.IsCitedBy = va;
  c.Cites = z;
  c.IsSupplementTo = xa;
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
  c.Documents = Ga;
  c.IsCompiledBy = ea;
  c.Compiles = la;
  c.IsVariantFormOf = da;
  c.IsOriginalFormOf = K;
  c.IsIdenticalTo = aa;
  c.HasMetadata = ra;
  c.IsMetadataFor = ha;
  c.Reviews = Ea;
  c.IsReviewedBy = Oa;
  c.IsDerivedFrom = Q;
  c.IsSourceOf = ya;
  c.Audiovisual = J;
  c.Dataset = M;
  c.Event = L;
  c.Image = U;
  c.InteractiveResource = V;
  c.Model = I;
  c.PhysicalObject = v;
  c.ResourceCollection = B;
  c.Service = O;
  c.Software = G;
  c.Sound = F;
  c.Text = P;
  c.Workflow = Y;
  c.Other = pa;

  c.altIdToId = function (m) {
    return {
      identifier: m.alternateIdentifier,
      identifierType: m.alternateIdentifierType
    };
  };

  c.showIdentifierType = wb;
  c.boundedEnumIdentifierType = Cb;
  c.identifierTypeReadForeign = fb;
  c.showRelationType = vb;
  c.boundedEnumRelationType = lb;
  c.showResourceTypeGeneral = nb;
  c.boundedEnumResourceTypeGeneral = Bb;
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
      k = a["Control.Monad.Error.Class"],
      p = a["Control.Monad.Except"],
      l = a["Control.Monad.Except.Trans"],
      n = a["Control.Monad.Writer"],
      q = a["Control.Monad.Writer.Class"],
      w = a["Control.Monad.Writer.Trans"],
      b = a["Control.Plus"],
      h = a["Data.Array.NonEmpty"],
      d = a["Data.Array.NonEmpty.Internal"],
      r = a["Data.Either"],
      x = a["Data.Either.Extra"],
      t = a["Data.Foldable"],
      C = a["Data.Functor"],
      y = a["Data.Identity"],
      u = a["Data.Lazy"],
      D = a["Data.List.NonEmpty"],
      E = a["Data.List.Types"],
      N = a["Data.Maybe"],
      H = a["Data.Monoid"],
      J = a["Data.Newtype"],
      M = a["Data.String.NonEmpty.Internal"],
      L = a["Data.Symbol"],
      U = a["Data.Traversable"],
      V = a["Data.Tuple"],
      I = a["Data.Unfoldable"],
      v = a["DataCite.JSON.Util"],
      B = a["DataCite.Types.Common"],
      O = a.Foreign,
      G = a["Foreign.Index"],
      F = a["Simple.JSON"];
  a = a["Type.Data.Row"];

  var P = new J.Newtype(function (ca) {
    return ca;
  }, function (ca) {
    return ca;
  }),
      Y = new J.Newtype(function (ca) {
    return ca;
  }, function (ca) {
    return ca;
  }),
      pa = w.monadTellWriterT(H.monoidArray)(y.monadIdentity),
      va = w.monadWriterT(H.monoidArray)(y.monadIdentity),
      z = l.monadThrowExceptT(va),
      xa = l.monadTellExceptT(pa),
      X = l.bindExceptT(va),
      ka = l.applicativeExceptT(va),
      Aa = function Aa(ca) {
    return function (ma) {
      var A = n.runWriter(J.unwrap(P)(l.runExceptT(J.unwrap(Y)(ma))));
      if (A.value0 instanceof r.Left) return g.discard(g.discardUnit)(X)(q.tell(xa)(D.toUnfoldable(I.unfoldableArray)(A.value0.value0)))(function () {
        return e.pure(ka)(ca);
      });
      if (A.value0 instanceof r.Right) return ma;
      throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 70, column 28 - line 74, column 24): " + [A.value0.constructor.name]);
    };
  },
      R = function R(ca) {
    return O.isNull(ca) || O.isUndefined(ca);
  },
      ia = function ia(ca) {
    var ma = e.pure(ca.Applicative0()),
        A = J.unwrap(y.newtypeIdentity);
    return function (W) {
      return ma(A(W));
    };
  },
      Da = function Da(ca) {
    var ma = ia(ca),
        A = J.unwrap(l.newtypeExceptT);
    return function (W) {
      return l.ExceptT(ma(A(W)));
    };
  },
      na = function na(ca) {
    var ma = Da(va),
        A = F["read'"](ca);
    return function (W) {
      return ma(A(W));
    };
  },
      ua = function ua(ca) {
    return Aa("")(na(F.readString)(ca));
  },
      qa = function qa(ca) {
    return function (ma) {
      return g.bind(X)(ua(ma))(function (A) {
        A = M.fromString(A);
        if (A instanceof N.Just) return e.pure(ka)(A.value0);
        if (A instanceof N.Nothing) return k.throwError(z)(e.pure(E.applicativeNonEmptyList)(O.ForeignError.create("Nonempty string expected in:\n" + u.force(ca))));
        throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 194, column 3 - line 197, column 55): " + [A.constructor.name]);
      });
    };
  },
      Ba = function Ba(ca) {
    return function (ma) {
      return g.bind(X)(qa(ca)(ma.alternateIdentifier))(function (A) {
        var W = na(B.identifierTypeReadForeign)(ma.alternateIdentifierType);
        return g.bind(X)(Aa(B.Handle.value)(W))(function (sa) {
          return e.pure(ka)(B.altIdToId({
            alternateIdentifier: A,
            alternateIdentifierType: sa
          }));
        });
      });
    };
  },
      Ga = function Ga(ca) {
    return function (ma) {
      return function (A) {
        return Ba(ma)(A);
      };
    };
  },
      ea = function ea(ca) {
    return function (ma) {
      return g.bind(X)(qa(ca)(ma.identifier))(function (A) {
        var W = na(B.identifierTypeReadForeign)(ma.identifierType);
        return g.bind(X)(Aa(B.Handle.value)(W))(function (sa) {
          return e.pure(ka)({
            identifier: A,
            identifierType: sa
          });
        });
      });
    };
  },
      la = function la(ca) {
    return function (ma) {
      return function (A) {
        return ea(ma)(A);
      };
    };
  },
      da = function () {
    var ca = Da(va);
    return function (ma) {
      return ca(O.readArray(ma));
    };
  }(),
      K = function K(ca) {
    return function (ma) {
      return function (A) {
        return g.bind(X)(da(A))(function (W) {
          var sa = C.map(C.functorArray)(function () {
            var ta = F["read'"](ca);
            return function (za) {
              return p.runExcept(ta(za));
            };
          }())(W);
          return g.discard(g.discardUnit)(X)(t.traverse_(ka)(t.foldableArray)(q.tell(xa))(C.map(C.functorArray)(D.toUnfoldable(I.unfoldableArray))(x.catLefts(f.monadArray)(b.plusArray)(sa))))(function () {
            var ta = x.catRights(f.monadArray)(b.plusArray)(sa);
            ta = h.fromArray(ta);
            if (ta instanceof N.Just) return e.pure(ka)(ta.value0);
            if (ta instanceof N.Nothing) return k.throwError(z)(e.pure(E.applicativeNonEmptyList)(O.ForeignError.create("Nonempty array expected in:\n" + u.force(ma))));
            throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 206, column 3 - line 209, column 54): " + [ta.constructor.name]);
          });
        });
      };
    };
  },
      aa = function aa(ca) {
    return function (ma) {
      return function (A) {
        return g.bind(X)(da(A))(function (W) {
          W = C.map(C.functorArray)(function () {
            var za = J.unwrap(P),
                Ja = J.unwrap(Y),
                Ka = ma(ca);
            return function (Ha) {
              return n.runWriter(za(l.runExceptT(Ja(Ka(Ha)))));
            };
          }())(W);
          var sa = C.map(C.functorArray)(V.fst)(W),
              ta = C.map(C.functorArray)(V.snd)(W);
          return g.discard(g.discardUnit)(X)(t.traverse_(ka)(t.foldableArray)(q.tell(xa))(C.map(C.functorArray)(D.toUnfoldable(I.unfoldableArray))(x.catLefts(f.monadArray)(b.plusArray)(sa))))(function () {
            return g.discard(g.discardUnit)(X)(t.traverse_(ka)(t.foldableArray)(q.tell(xa))(ta))(function () {
              var za = x.catRights(f.monadArray)(b.plusArray)(sa);
              za = h.fromArray(za);
              if (za instanceof N.Just) return e.pure(ka)(za.value0);
              if (za instanceof N.Nothing) return k.throwError(z)(e.pure(E.applicativeNonEmptyList)(O.ForeignError.create("Nonempty array expected in:\n" + u.force(ca))));
              throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 224, column 3 - line 227, column 54): " + [za.constructor.name]);
            });
          });
        });
      };
    };
  },
      ra = function ra(ca) {
    var ma = Da(va),
        A = F["readJSON'"](ca);
    return function (W) {
      return ma(A(W));
    };
  },
      ha = function ha(ca) {
    return function (ma) {
      return Da(va)(G.readProp(ca)(ma));
    };
  },
      Ea = function Ea(ca) {
    return function (ma) {
      return g.bind(X)(ha("title")(ma))(function (A) {
        return g.bind(X)(qa(ca)(A))(function (W) {
          return e.pure(ka)({
            title: W
          });
        });
      });
    };
  },
      Oa = a.RProxy.value,
      Q = function Q(ca) {
    return function (ma) {
      return u.defer(function (A) {
        return "Couldn't read for " + (ma + (" in: \n" + u.force(ca)));
      });
    };
  },
      ya = function ya(ca) {
    var ma = v.tryPrettyJson(ca),
        A = Q(ma),
        W = function W(ta) {
      return R(ta.type) && R(ta.identifier) && R(ta.identifierType) ? e.pure(ka)(N.Nothing.value) : g.bind(X)(na(F.readString)(ta.type))(function (za) {
        var Ja = M.fromString(za);
        return g.bind(X)(ea(A("container"))(ta))(function (Ka) {
          return e.pure(ka)(N.Just.create({
            type: Ja,
            identifier: Ka.identifier,
            identifierType: Ka.identifierType
          }));
        });
      });
    },
        sa = function sa(ta) {
      return U.traverse(d.traversableNonEmptyArray)(ka)(function (za) {
        return g.bind(X)(qa(A("Creator name"))(za.name))(function (Ja) {
          return g.bind(X)(U.traverse(U.traversableArray)(ka)(qa(A("Creator affiliations")))(za.affiliation))(function (Ka) {
            return e.pure(ka)({
              name: Ja,
              nameType: g.bind(N.bindMaybe)(za.nameType)(M.fromString),
              givenName: g.bind(N.bindMaybe)(za.givenName)(M.fromString),
              familyName: g.bind(N.bindMaybe)(za.familyName)(M.fromString),
              affiliation: Ka
            });
          });
        });
      })(ta);
    };

    return g.bind(X)(ra(F.readRecord()(F.readFieldsCons(new L.IsSymbol(function () {
      return "data";
    }))(F.readRecord()(F.readFieldsCons(new L.IsSymbol(function () {
      return "attributes";
    }))(F.readRecord()(F.readFieldsCons(new L.IsSymbol(function () {
      return "alternateIdentifiers";
    }))(F.readArray(F.readRecord()(F.readFieldsCons(new L.IsSymbol(function () {
      return "alternateIdentifier";
    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
      return "alternateIdentifierType";
    }))(F.readForeign)(F.readFieldsNil)()())()())))(F.readFieldsCons(new L.IsSymbol(function () {
      return "container";
    }))(F.readRecord()(F.readFieldsCons(new L.IsSymbol(function () {
      return "identifier";
    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
      return "identifierType";
    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
      return "type";
    }))(F.readForeign)(F.readFieldsNil)()())()())()()))(F.readFieldsCons(new L.IsSymbol(function () {
      return "creators";
    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
      return "doi";
    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
      return "identifiers";
    }))(F.readArray(F.readRecord()(F.readFieldsCons(new L.IsSymbol(function () {
      return "identifier";
    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
      return "identifierType";
    }))(F.readForeign)(F.readFieldsNil)()())()())))(F.readFieldsCons(new L.IsSymbol(function () {
      return "prefix";
    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
      return "publisher";
    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
      return "suffix";
    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
      return "titles";
    }))(F.readForeign)(F.readFieldsNil)()())()())()())()())()())()())()())()())()()))(F.readFieldsCons(new L.IsSymbol(function () {
      return "id";
    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
      return "relationships";
    }))(F.readRecord()(F.readFieldsNil))(F.readFieldsCons(new L.IsSymbol(function () {
      return "type";
    }))(F.readForeign)(F.readFieldsNil)()())()())()())()()))(F.readFieldsNil)()()))(ca))(function (ta) {
      return g.bind(X)(qa(A("data.id"))(ta.data.id))(function (za) {
        return g.bind(X)(qa(A("data.type"))(ta.data.type))(function (Ja) {
          return g.bind(X)(qa(A("data.attributes.doi"))(ta.data.attributes.doi))(function (Ka) {
            return g.bind(X)(qa(A("data.attributes.prefix"))(ta.data.attributes.prefix))(function (Ha) {
              return g.bind(X)(qa(A("data.attributes.suffix"))(ta.data.attributes.suffix))(function (Sa) {
                return g.bind(X)(U.traverse(U.traversableArray)(ka)(la(Oa)(A("data.attributes.identifiers")))(ta.data.attributes.identifiers))(function (Va) {
                  return g.bind(X)(U.traverse(U.traversableArray)(ka)(Ga(Oa)(A("data.attributes.alternateIdentifiers")))(ta.data.attributes.alternateIdentifiers))(function ($a) {
                    return g.bind(X)(K(F.readRecord()(F.readFieldsCons(new L.IsSymbol(function () {
                      return "affiliation";
                    }))(F.readArray(F.readForeign))(F.readFieldsCons(new L.IsSymbol(function () {
                      return "familyName";
                    }))(F.readMaybe(F.readString))(F.readFieldsCons(new L.IsSymbol(function () {
                      return "givenName";
                    }))(F.readMaybe(F.readString))(F.readFieldsCons(new L.IsSymbol(function () {
                      return "name";
                    }))(F.readForeign)(F.readFieldsCons(new L.IsSymbol(function () {
                      return "nameType";
                    }))(F.readMaybe(F.readString))(F.readFieldsNil)()())()())()())()())()()))(A("data.attributes.creators"))(ta.data.attributes.creators))(function (ab) {
                      return g.bind(X)(sa(ab))(function (hb) {
                        return g.bind(X)(aa(A("data.attributes.titles"))(Ea)(ta.data.attributes.titles))(function (cb) {
                          return g.bind(X)(qa(A("data.attributes.publisher"))(ta.data.attributes.publisher))(function (db) {
                            return g.bind(X)(W(ta.data.attributes.container))(function (eb) {
                              return e.pure(ka)({
                                data: {
                                  id: za,
                                  type: Ja,
                                  attributes: {
                                    doi: Ka,
                                    prefix: Ha,
                                    suffix: Sa,
                                    identifiers: Va,
                                    alternateIdentifiers: $a,
                                    creators: hb,
                                    titles: cb,
                                    publisher: db,
                                    container: eb
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
    return l.runExceptT(J.unwrap(Y)(ya(v.preParse(ca))));
  };

  c.newtypeJSONWithErr = P;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var c = a["Effect.Class"],
      e = a["Effect.Console"];

  a["Effect.Class.Console"].log = function (g) {
    var f = c.liftEffect(g);
    return function (k) {
      return f(e.log(k));
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
      f = a["Metajelo.CSS.UI.Util"];
  a = f.mjUiClass(e.versioning);
  var k = f.mjUiClass(e.url),
      p = f.mjUiClass(e.titleList),
      l = f.mjUiClass(e.title),
      n = f.mjUiClass(e.sustainability),
      q = f.mjUiClass(e.superOrg),
      w = f.mjUiClass(g.sideBarTab),
      b = f.mjUiClass(g.sideBar),
      h = f.mjUiClass(g.sideBarMenu),
      d = f.mjUiClass(g.sideBarGrid),
      r = f.mjUiClass(g.sideBarCol),
      x = f.mjUiClass(g.sideBar),
      t = f.mjUiClass(e.resourceTypeGen),
      C = f.mjUiClass(e.resourceTypeDescr),
      y = f.mjUiClass(e.resourceType),
      u = f.mjUiClass(e.resourceMDSource),
      D = f.mjUiClass(e.resourceId),
      E = f.mjUiClass(e.relatedIdsHeader),
      N = f.mjUiClass(e.relatedIds),
      H = f.mjUiClass(e.relatedIdList),
      J = f.mjUiClass(e.relatedId),
      M = f.mjUiClass(e.relType),
      L = f.mjUiClass(e.record),
      U = f.mjUiClass(g.recPreview),
      V = f.mjUiClass(g.recFlexBox),
      I = f.mjUiClass(g.recEditor),
      v = f.mjUiClass(e.pubyear),
      B = f.mjUiClass(e.productsHeader),
      O = f.mjUiClass(e.products),
      G = f.mjUiClass(e.productList),
      F = f.mjUiClass(e.product),
      P = f.mjUiClass(g.prodPreview),
      Y = f.mjUiClass(g.previewButtons),
      pa = f.mjUiClass(e.policyType),
      va = f.mjUiClass(e.policy),
      z = f.mjUiClass(g.page),
      xa = f.mjUiClass(e.missionStatement),
      X = f.mjUiClass(e.location),
      ka = f.mjUiClass(g.locPreview),
      Aa = f.mjUiClass(e.institutionType),
      R = f.mjUiClass(e.institutionPolicy),
      ia = f.mjUiClass(e.institutionPolicies),
      Da = f.mjUiClass(e.institutionName),
      na = f.mjUiClass(e.institutionId),
      ua = f.mjUiClass(e.institutionContact),
      qa = f.mjUiClass(e.identifier),
      Ba = f.mjUiClass(e.idType),
      Ga = f.mjUiClass(e.id),
      ea = f.mjUiClass(e.fundingStatement),
      la = f.mjUiClass(e.formatList),
      da = f.mjUiClass(e.format),
      K = f.mjUiClass(g.downloadBtn),
      aa = f.mjUiClass(g.deleteItem),
      ra = f.mjUiClass(g.date),
      ha = f.mjUiClass(e.creatorList),
      Ea = f.mjUiClass(e.creator),
      Oa = f.mjUiClass(e.contactType),
      Q = f.mjUiClass(e.contactEmail),
      ya = f.mjUiClass(g.clipBtn),
      ca = f.mjUiClass(e.basicMetadata);
  e = f.mjUiClass(e.applies);
  g = f.mjUiClass(g.addItem);
  c.page = z;
  c.date = ra;
  c.recFlexBox = V;
  c.recPreview = U;
  c.recEditor = I;
  c.sideBar = x;
  c.sideBarNav = b;
  c.sideBarTab = w;
  c.sideBarGrid = d;
  c.sideBarMenu = h;
  c.sideBarCol = r;
  c.prodPreview = P;
  c.locPreview = ka;
  c.downloadBtn = K;
  c.clipBtn = ya;
  c.previewButtons = Y;
  c.addItem = g;
  c.deleteItem = aa;
  c.record = L;
  c.product = F;
  c.productList = G;
  c.productsHeader = B;
  c.products = O;
  c.location = X;
  c.sustainability = n;
  c.missionStatement = xa;
  c.fundingStatement = ea;
  c.identifier = qa;
  c.id = Ga;
  c.idType = Ba;
  c.relatedId = J;
  c.relType = M;
  c.relatedIdList = H;
  c.relatedIdsHeader = E;
  c.relatedIds = N;
  c.basicMetadata = ca;
  c.creator = Ea;
  c.creatorList = ha;
  c.pubyear = v;
  c.title = l;
  c.titleList = p;
  c.resourceId = D;
  c.resourceType = y;
  c.resourceTypeGen = t;
  c.resourceTypeDescr = C;
  c.resourceMDSource = u;
  c.institutionName = Da;
  c.institutionId = na;
  c.institutionType = Aa;
  c.institutionContact = ua;
  c.contactEmail = Q;
  c.contactType = Oa;
  c.institutionPolicy = R;
  c.institutionPolicies = ia;
  c.policy = va;
  c.policyType = pa;
  c.applies = e;
  c.superOrg = q;
  c.versioning = a;
  c.format = da;
  c.formatList = la;
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
      k = function k(p) {
    return "metajelo_" + p;
  };

  a = function () {
    var p = g.map(g.functorArray)(k);
    return function (l) {
      return f.cList(p(l));
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
  var k = f.mjWebClass(e.title),
      p = f.mjWebClass(e.sustainability),
      l = f.mjWebClass(e.superOrg),
      n = f.mjWebClass(e.resourceTypeGen),
      q = f.mjWebClass(e.resourceTypeDescr),
      w = f.mjWebClass(e.resourceType),
      b = f.mjWebClass(e.resourceId),
      h = f.mjWebClass(e.relatedIdsHeader),
      d = f.mjWebClass(e.relatedIdList),
      r = f.mjWebClass(e.relatedId),
      x = f.mjWebClass(e.relType),
      t = f.mjWebClass(e.recordId),
      C = f.mjWebClass(e.record),
      y = f.mjWebClass(e.pubyear),
      u = f.mjWebClass(e.productsHeader),
      D = f.mjWebClass(e.productList),
      E = f.mjWebClass(g.productGroup),
      N = f.mjWebClass(g.productCitation),
      H = f.mjWebClass(e.product),
      J = f.mjWebClass(e.policyType),
      M = f.mjWebClass(e.policy),
      L = f.cList([e.url, e.missionStatement]),
      U = f.mjWebClass(e.institutionType),
      V = f.mjWebClass(e.institutionPolicy),
      I = f.mjWebClass(e.institutionPolicies),
      v = f.mjWebClass(e.institutionName),
      B = f.mjWebClass(e.institutionId),
      O = f.mjWebClass(e.institutionContact),
      G = f.mjWebClass(e.identifier),
      F = f.cList([e.url, g.idUrl]),
      P = f.mjWebClass(e.idType),
      Y = f.cList([e.url, e.fundingStatement]),
      pa = f.mjWebClass(e.formatList),
      va = f.mjWebClass(e.format),
      z = f.mjWebClass(g.errorDisplayBox),
      xa = f.mjWebClass(g.errorDisplay),
      X = f.mjWebClass(e.creatorList),
      ka = f.mjWebClass(e.creator),
      Aa = f.mjWebClass(e.contactType),
      R = f.mjWebClass(e.contactEmail);
  e = f.mjWebClass(e.basicMetadata);
  g = f.mjWebClass(g.appliesInfo);
  c.productGroup = E;
  c.productCitation = N;
  c.appliesInfo = g;
  c.idUrl = F;
  c.errorDisplayBox = z;
  c.errorDisplay = xa;
  c.record = C;
  c.recordId = t;
  c.product = H;
  c.productList = D;
  c.productsHeader = u;
  c.sustainability = p;
  c.missionStatement = L;
  c.fundingStatement = Y;
  c.identifier = G;
  c.idType = P;
  c.relatedId = r;
  c.relType = x;
  c.relatedIdList = d;
  c.relatedIdsHeader = h;
  c.basicMetadata = e;
  c.creator = ka;
  c.creatorList = X;
  c.pubyear = y;
  c.title = k;
  c.resourceId = b;
  c.resourceType = w;
  c.resourceTypeGen = n;
  c.resourceTypeDescr = q;
  c.institutionName = v;
  c.institutionId = B;
  c.institutionType = U;
  c.institutionContact = O;
  c.contactEmail = R;
  c.contactType = Aa;
  c.institutionPolicy = V;
  c.institutionPolicies = I;
  c.policy = M;
  c.policyType = J;
  c.superOrg = l;
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
      k = a["Data.Generic.Rep"],
      p = a["Data.Generic.Rep.Bounded"],
      l = a["Data.Generic.Rep.Enum"],
      n = a["Data.Generic.Rep.Eq"],
      q = a["Data.Generic.Rep.Ord"],
      w = a["Data.Generic.Rep.Show"],
      b = a["Data.Ord"],
      h = a["Data.Show"],
      d = a["Data.Symbol"],
      r = function () {
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
      C = function () {
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
      D = function () {
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
      H = function () {
    function R() {}

    R.value = new R();
    return R;
  }(),
      J = function () {
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
    if (R instanceof H) return "commercial";
    if (R instanceof J) return "non-profit";
    if (R instanceof M) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 102, column 1 - line 105, column 37): " + [R.constructor.name]);
  }),
      V = new h.Show(function (R) {
    return "dataCustodian";
  }),
      I = new k.Generic(function (R) {
    if (R instanceof r) return new k.Inl(k.NoArguments.value);
    if (R instanceof x) return new k.Inr(new k.Inl(k.NoArguments.value));
    if (R instanceof t) return new k.Inr(new k.Inr(new k.Inl(k.NoArguments.value)));
    if (R instanceof C) return new k.Inr(new k.Inr(new k.Inr(new k.Inl(k.NoArguments.value))));
    if (R instanceof y) return new k.Inr(new k.Inr(new k.Inr(new k.Inr(new k.Inl(k.NoArguments.value)))));
    if (R instanceof u) return new k.Inr(new k.Inr(new k.Inr(new k.Inr(new k.Inr(new k.Inl(k.NoArguments.value))))));
    if (R instanceof D) return new k.Inr(new k.Inr(new k.Inr(new k.Inr(new k.Inr(new k.Inr(new k.Inl(k.NoArguments.value)))))));
    if (R instanceof E) return new k.Inr(new k.Inr(new k.Inr(new k.Inr(new k.Inr(new k.Inr(new k.Inr(k.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [R.constructor.name]);
  }, function (R) {
    if (R instanceof k.Inl) return r.value;
    if (R instanceof k.Inr && R.value0 instanceof k.Inl) return x.value;
    if (R instanceof k.Inr && R.value0 instanceof k.Inr && R.value0.value0 instanceof k.Inl) return t.value;
    if (R instanceof k.Inr && R.value0 instanceof k.Inr && R.value0.value0 instanceof k.Inr && R.value0.value0.value0 instanceof k.Inl) return C.value;
    if (R instanceof k.Inr && R.value0 instanceof k.Inr && R.value0.value0 instanceof k.Inr && R.value0.value0.value0 instanceof k.Inr && R.value0.value0.value0.value0 instanceof k.Inl) return y.value;
    if (R instanceof k.Inr && R.value0 instanceof k.Inr && R.value0.value0 instanceof k.Inr && R.value0.value0.value0 instanceof k.Inr && R.value0.value0.value0.value0 instanceof k.Inr && R.value0.value0.value0.value0.value0 instanceof k.Inl) return u.value;
    if (R instanceof k.Inr && R.value0 instanceof k.Inr && R.value0.value0 instanceof k.Inr && R.value0.value0.value0 instanceof k.Inr && R.value0.value0.value0.value0 instanceof k.Inr && R.value0.value0.value0.value0.value0 instanceof k.Inr && R.value0.value0.value0.value0.value0.value0 instanceof k.Inl) return D.value;
    if (R instanceof k.Inr && R.value0 instanceof k.Inr && R.value0.value0 instanceof k.Inr && R.value0.value0.value0 instanceof k.Inr && R.value0.value0.value0.value0 instanceof k.Inr && R.value0.value0.value0.value0.value0 instanceof k.Inr && R.value0.value0.value0.value0.value0.value0 instanceof k.Inr) return E.value;
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [R.constructor.name]);
  });

  h = new h.Show(function (R) {
    return R instanceof E ? "Terms of Use" : w.genericShow(I)(w.genericShowSum(w.genericShowConstructor(w.genericShowArgsNoArguments)(new d.IsSymbol(function () {
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
  var v = new k.Generic(function (R) {
    if (R instanceof H) return new k.Inl(k.NoArguments.value);
    if (R instanceof J) return new k.Inr(new k.Inl(k.NoArguments.value));
    if (R instanceof M) return new k.Inr(new k.Inr(k.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [R.constructor.name]);
  }, function (R) {
    if (R instanceof k.Inl) return H.value;
    if (R instanceof k.Inr && R.value0 instanceof k.Inl) return J.value;
    if (R instanceof k.Inr && R.value0 instanceof k.Inr) return M.value;
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [R.constructor.name]);
  }),
      B = new k.Generic(function (R) {
    return k.NoArguments.value;
  }, function (R) {
    return L.value;
  }),
      O = new f.Eq(n.genericEq(I)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))),
      G = new b.Ord(function () {
    return O;
  }, function (R) {
    return function (ia) {
      return q.genericCompare(I)(q.genericOrdSum(q.genericOrdConstructor(q.genericOrdNoArguments))(q.genericOrdSum(q.genericOrdConstructor(q.genericOrdNoArguments))(q.genericOrdSum(q.genericOrdConstructor(q.genericOrdNoArguments))(q.genericOrdSum(q.genericOrdConstructor(q.genericOrdNoArguments))(q.genericOrdSum(q.genericOrdConstructor(q.genericOrdNoArguments))(q.genericOrdSum(q.genericOrdConstructor(q.genericOrdNoArguments))(q.genericOrdSum(q.genericOrdConstructor(q.genericOrdNoArguments))(q.genericOrdConstructor(q.genericOrdNoArguments)))))))))(R)(ia);
    };
  }),
      F = new f.Eq(n.genericEq(v)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))),
      P = new b.Ord(function () {
    return F;
  }, function (R) {
    return function (ia) {
      return q.genericCompare(v)(q.genericOrdSum(q.genericOrdConstructor(q.genericOrdNoArguments))(q.genericOrdSum(q.genericOrdConstructor(q.genericOrdNoArguments))(q.genericOrdConstructor(q.genericOrdNoArguments))))(R)(ia);
    };
  }),
      Y = new f.Eq(n.genericEq(B)(n.genericEqConstructor(n.genericEqNoArguments))),
      pa = new b.Ord(function () {
    return Y;
  }, function (R) {
    return function (ia) {
      return q.genericCompare(B)(q.genericOrdConstructor(q.genericOrdNoArguments))(R)(ia);
    };
  }),
      va = new g.Enum(function () {
    return G;
  }, l.genericPred(I)(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments)))), l.genericSucc(I)(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))),
      z = new g.Enum(function () {
    return P;
  }, l.genericPred(v)(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments)))), l.genericSucc(v)(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumSum(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(l.genericEnumConstructor(l.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))),
      xa = new g.Enum(function () {
    return pa;
  }, l.genericPred(B)(l.genericEnumConstructor(l.genericEnumNoArguments)), l.genericSucc(B)(l.genericEnumConstructor(l.genericEnumNoArguments))),
      X = new e.Bounded(function () {
    return G;
  }, p.genericBottom(I)(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))), p.genericTop(I)(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopConstructor(p.genericTopNoArguments))))))))));
  f = new g.SmallBounded(function () {
    return X;
  });
  var ka = new e.Bounded(function () {
    return P;
  }, p.genericBottom(v)(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))), p.genericTop(v)(p.genericTopSum(p.genericTopSum(p.genericTopConstructor(p.genericTopNoArguments))))),
      Aa = new e.Bounded(function () {
    return pa;
  }, p.genericBottom(B)(p.genericBottomConstructor(p.genericBottomNoArguments)), p.genericTop(B)(p.genericTopConstructor(p.genericTopNoArguments)));
  e = new g.SmallBounded(function () {
    return Aa;
  });
  p = new g.BoundedEnum(function () {
    return X;
  }, function () {
    return va;
  }, l.genericCardinality(I)(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))))))))), l.genericFromEnum(I)(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))))))))), l.genericToEnum(I)(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))))))))));
  n = new g.BoundedEnum(function () {
    return ka;
  }, function () {
    return z;
  }, l.genericCardinality(v)(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments)))), l.genericFromEnum(v)(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments)))), l.genericToEnum(v)(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumSum(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments))(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments)))));
  g = new g.BoundedEnum(function () {
    return Aa;
  }, function () {
    return xa;
  }, l.genericCardinality(B)(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments)), l.genericFromEnum(B)(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments)), l.genericToEnum(B)(l.genericBoundedEnumConstructor(l.genericBoundedEnumNoArguments)));
  c.DataCustodian = L;
  c.Commercial = H;
  c.NonProfit = J;
  c.Governmental = M;
  c.FreeTextPolicy = a;
  c.RefPolicy = N;
  c.Access = r;
  c.Collection = x;
  c.Data = t;
  c.Metadata = C;
  c.Preservation = y;
  c.Submission = u;
  c.Quality = D;
  c.TermsOfUse = E;
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

    for (var k = f; null != k;) {
      k = Object.getPrototypeOf(k);
      var p = k.constructor.name;
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
      k = a.Effect,
      p = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var l = function () {
    var n = g.map(k.functorEffect)(f.toMaybe);
    return function (q) {
      return n(e._documentElement(q));
    };
  }();

  c.fromNode = a;
  c.toNonElementParentNode = p;
  c.documentElement = l;

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
      k = a.Effect,
      p = a["Unsafe.Coerce"],
      l = p.unsafeCoerce;
  p = p.unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  c.fromNode = a;
  c.toNode = p;
  c.toParentNode = l;

  c.prefix = function (n) {
    return f.toMaybe(e._prefix(n));
  };

  c.getAttribute = function (n) {
    var q = g.map(k.functorEffect)(f.toMaybe),
        w = e._getAttribute(n);

    return function (b) {
      return q(w(b));
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
      k = a.Effect;

  c.item = function (p) {
    var l = g.map(k.functorEffect)(f.toMaybe),
        n = e._item(p);

    return function (q) {
      return l(n(q));
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
      k = a.Effect;

  a = function () {
    var p = g.map(k.functorEffect)(f.toMaybe);
    return function (l) {
      return p(e._ownerDocument(l));
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
      k = a["Data.Array"],
      p = a["Data.Either"],
      l = a["Data.Functor"],
      n = a["Data.Maybe"],
      q = a.Effect,
      w = a["Web.DOM.Document"],
      b = a["Web.DOM.Element"],
      h = a["Web.DOM.HTMLCollection"],
      d = a["Web.DOM.Node"],
      r = function r(t) {
    return function (C) {
      if (t instanceof n.Nothing) return new p.Right(C);
      if (t instanceof n.Just) return new p.Left(t.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [t.constructor.name]);
    };
  },
      x = function x(t) {
    return function () {
      var C = f.join(q.bindEffect)(l.map(q.functorEffect)(h.toArray)(w.getElementsByTagName("parsererror")(t)))();
      C = k.head(C);
      C = l.map(n.functorMaybe)(b.toNode)(C);
      if (C instanceof n.Nothing) C = g.pure(q.applicativeEffect)(n.Nothing.value);else if (C instanceof n.Just) C = l.map(q.functorEffect)(n.Just.create)(d.textContent(C.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [C.constructor.name]);
      return C();
    };
  };

  c.parseXMLFromString = function (t) {
    return function (C) {
      return function () {
        var y = e.parseFromString("application/xml")(t)(C)(),
            u = x(y)();
        return r(u)(y);
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
          return function (k) {
            return function (p) {
              return function () {
                return p.evaluate(c, e, g, f, k);
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
      k = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      p = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      l = new g.Eq(function (n) {
    return function (q) {
      return n === q;
    };
  });

  c.res2SnapType = function (n) {
    return g.eq(l)(n)(e.unordered_node_snapshot_type) ? new f.Just(k.value) : g.eq(l)(n)(e.ordered_node_snapshot_type) ? new f.Just(p.value) : f.Nothing.value;
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
      k = a["Data.Functor"],
      p = a["Data.Int"],
      l = a["Data.Maybe"],
      n = a["Data.Monoid"],
      q = a["Data.Natural"],
      w = a["Data.Nullable"],
      b = a["Data.Traversable"],
      h = a.Effect,
      d = a["Web.DOM.Document"],
      r = a["Web.DOM.Document.XPath.ResultType"],
      x = a["Web.DOM.Element"],
      t = a["Web.DOM.Node"],
      C = function () {
    var u = k.map(h.functorEffect)(function (D) {
      return q.intToNat(p.round(D));
    });
    return function (D) {
      return u(e.snapshotLengthInternal(D));
    };
  }(),
      y = function y(u) {
    return function (D) {
      return k.map(h.functorEffect)(w.toMaybe)(e.snapshotItemInternal(u)(p.toNumber(q.natToInt(D))));
    };
  };

  a = function () {
    var u = k.map(h.functorEffect)(w.toMaybe);
    return function (D) {
      return u(e.singleNodeValueInternal(D));
    };
  }();

  c.evaluate = function (u) {
    return function (D) {
      return function (E) {
        return function (N) {
          return function (H) {
            return function (J) {
              return e.evaluateInternal(u)(D)(w.toNullable(E))(N)(w.toNullable(H))(J);
            };
          };
        };
      };
    };
  };

  c.evaluateNumber = function (u) {
    return function (D) {
      return function (E) {
        return function (N) {
          return function (H) {
            return function () {
              var J = e.evaluateInternal(u)(D)(w.toNullable(E))(r.number_type)(w.toNullable(N))(H)();
              return e.numberValue(J)();
            };
          };
        };
      };
    };
  };

  c.evaluateString = function (u) {
    return function (D) {
      return function (E) {
        return function (N) {
          return function (H) {
            return function () {
              var J = e.evaluateInternal(u)(D)(w.toNullable(E))(r.string_type)(w.toNullable(N))(H)();
              return e.stringValue(J)();
            };
          };
        };
      };
    };
  };

  c.evaluateBoolean = function (u) {
    return function (D) {
      return function (E) {
        return function (N) {
          return function (H) {
            return function () {
              var J = e.evaluateInternal(u)(D)(w.toNullable(E))(r.boolean_type)(w.toNullable(N))(H)();
              return e.booleanValue(J)();
            };
          };
        };
      };
    };
  };

  c.singleNodeValue = a;

  c.snapshot = function (u) {
    var D = r.res2SnapType(e.resultType(u)),
        E = y(u);
    D = k.map(l.functorMaybe)(function (N) {
      return function () {
        var H = C(u)();
        H = q.natToInt(H);
        H = k.map(k.functorArray)(q.intToNat)(f.range(0)(H - 1 | 0));
        H = b.sequence(b.traversableArray)(h.applicativeEffect)(k.map(k.functorArray)(E)(H))();
        return f.catMaybes(H);
      };
    })(D);
    if (D instanceof l.Nothing) return g.pure(h.applicativeEffect)(n.mempty(n.monoidArray));
    if (D instanceof l.Just) return D.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [D.constructor.name]);
  };

  c.lookupNamespaceURI = function (u) {
    return function (D) {
      return w.toMaybe(e.lookupNamespaceURIInternal(u)(D));
    };
  };

  c.defaultNSResolver = function (u) {
    return function (D) {
      var E = function E(N) {
        return function () {
          var H = d.documentElement(N)();
          if (H instanceof l.Nothing) return u;
          if (H instanceof l.Just) return x.toNode(H.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [H.constructor.name]);
        };
      };

      return function () {
        var N = t.ownerDocument(u)(),
            H = function () {
          if (N instanceof l.Nothing) {
            var J = d.fromNode(u);
            if (J instanceof l.Nothing) return u;
            if (J instanceof l.Just) return E(J.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [J.constructor.name]);
          }

          if (N instanceof l.Just) return E(N.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [N.constructor.name]);
        }();

        return e.createNSResolver(H)(D);
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
      k = a["Data.Array.NonEmpty.Internal"],
      p = a["Data.Either"],
      l = a["Data.Foldable"],
      n = a["Data.Functor"],
      q = a["Data.Maybe"],
      w = a["Data.String.Common"],
      b = a["Data.String.NonEmpty.Internal"],
      h = a["Data.Traversable"],
      d = a["Data.XPath"],
      r = a.Effect,
      x = a["Effect.Exception"],
      t = a["Web.DOM.DOMParser"],
      C = a["Web.DOM.Document"],
      y = a["Web.DOM.Document.XPath"],
      u = a["Web.DOM.Document.XPath.ResultType"],
      D = a["Web.DOM.Element"],
      E = a["Web.DOM.HTMLCollection"],
      N = d.pathAppendNSx(d.stringXPath)(d.root(d.stringXPath))("record");
  a = d.pathAppendNSx(d.stringXPath)(N)("relatedIdentifier");
  var H = d.pathAppendNSx(d.stringXPath)(N)("supplementaryProducts");
  H = d.pathAppendNSx(d.stringXPath)(H)("supplementaryProduct");

  var J = function J(O) {
    return function (G) {
      return {
        any: function any(F) {
          return function (P) {
            return function (Y) {
              return y.evaluate(P)(F)(G)(Y)(q.Nothing.value)(O);
            };
          };
        },
        num: function num(F) {
          return function (P) {
            return y.evaluateNumber(P)(F)(G)(q.Nothing.value)(O);
          };
        },
        str: function str(F) {
          return function (P) {
            return y.evaluateString(P)(F)(G)(q.Nothing.value)(O);
          };
        },
        bool: function bool(F) {
          return function (P) {
            return y.evaluateBoolean(P)(F)(G)(q.Nothing.value)(O);
          };
        },
        nodeMay: function nodeMay(F) {
          return function (P) {
            return g.bind(r.bindEffect)(y.evaluate(P)(F)(G)(u.any_unordered_node_type)(q.Nothing.value)(O))(y.singleNodeValue);
          };
        }
      };
    };
  },
      M = f["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      L = function L(O) {
    var G = function G(F) {
      return function () {
        var P = C.getElementsByTagNameNS(new q.Just(F))("record")(O)();
        return E.item(0)(P)();
      };
    };

    return function () {
      var F = C.getElementsByTagName("record")(O)();
      F = E.item(0)(F)();
      if (F instanceof q.Nothing) F = h.sequence(k.traversableNonEmptyArray)(r.applicativeEffect)(n.map(k.functorNonEmptyArray)(G)(M))(), F = g.join(q.bindMaybe)(l.find(k.foldableNonEmptyArray)(q.isJust)(F));else if (F instanceof q.Just) F = new q.Just(F.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 277, column 16 - line 281, column 38): " + [F.constructor.name]);
      return n.map(q.functorMaybe)(D.toNode)(F);
    };
  },
      U = d.pathAppendNSx(d.stringXPath)(N)("lastModified"),
      V = d.pathAppendNSx(d.stringXPath)(N)("identifier"),
      I = d.pathAppend(d.stringXPath)(V)(d.at(d.stringXPath)("identifierType")),
      v = function v(O) {
    var G = function G(F) {
      return q.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(F);
    };

    if (O instanceof q.Nothing) return e.pure(r.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (O instanceof q.Just) return n.map(r.functorEffect)(G)(D.getAttribute("xmlns")(O.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 185, column 3 - line 187, column 59): " + [O.constructor.name]);
  },
      B = function B(O) {
    return function (G) {
      var F = function F(P) {
        return function (Y) {
          return function (pa) {
            pa = y.lookupNamespaceURI(P)(pa);
            if (pa instanceof q.Nothing) return Y;
            if (pa instanceof q.Just) return pa.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 202, column 39 - line 204, column 20): " + [pa.constructor.name]);
          };
        };
      };

      return function () {
        var P = y.defaultNSResolver(O)(G)(),
            Y = D.fromNode(O);
        Y = v(Y)();
        return y.customNSResolver(F(P)(Y));
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
  c.idTypeRootAP = I;
  c.idRootP = V;
  c.dateRootP = d;
  c.lastModRootP = U;
  c.relIdRootP = a;
  c.sProdRootP = H;

  c.getDefaultParseEnv = function (O) {
    return function () {
      var G = t.makeDOMParser();
      G = t.parseXMLFromString(O)(G)();
      if (G instanceof p.Left) G = x["throw"]("XML parsing error: " + G.value0)();else if (G instanceof p.Right) G = G.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 245, column 13 - line 247, column 26): " + [G.constructor.name]);
      var F = L(G)();
      if (F instanceof q.Nothing) F = x["throw"]("Could not find <record> node!")();else if (F instanceof q.Just) F = F.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 249, column 14 - line 251, column 23): " + [F.constructor.name]);
      var P = D.fromNode(F);
      if (P instanceof q.Nothing) P = x["throw"]("<record> node could not be cast to an element!")();else if (P instanceof q.Just) P = P.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 252, column 14 - line 254, column 23): " + [P.constructor.name]);
      var Y = v(new q.Just(P))(),
          pa = B(F)(G)();
      pa = J(G)(new q.Just(pa));
      return {
        doc: G,
        ns: Y,
        recNode: F,
        recElem: P,
        xeval: pa,
        xevalRoot: {
          any: pa.any(F),
          num: pa.num(F),
          str: pa.str(F),
          bool: pa.bool(F),
          nodeMay: pa.nodeMay(F)
        }
      };
    };
  };

  c.unsafeSingleNodeValue = function (O) {
    return function (G) {
      return function (F) {
        return function () {
          var P = O.xeval.nodeMay(G)(F)();
          if (P instanceof q.Just) return P.value0;
          if (P instanceof q.Nothing) return x["throw"]("Couldn't find required node at: " + F)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 294, column 3 - line 296, column 40): " + [P.constructor.name]);
        };
      };
    };
  };

  c.readNonEmptyString = function (O) {
    return function (G) {
      G = b.fromString(w.trim(G));
      if (G instanceof q.Nothing) return p.Left.create("Empty string found for " + O);
      if (G instanceof q.Just) return new p.Right(G.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 303, column 3 - line 305, column 26): " + [G.constructor.name]);
    };
  };

  c.readNonEmptyArray = function (O) {
    return function (G) {
      G = f.fromArray(G);
      if (G instanceof q.Nothing) return p.Left.create("Empty array found for " + O);
      if (G instanceof q.Just) return new p.Right(G.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 310, column 3 - line 312, column 26): " + [G.constructor.name]);
    };
  };

  c.rightOrThrow = function (O) {
    if (O instanceof p.Right) return e.pure(r.applicativeEffect)(O.value0);
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
      k = a["Control.Apply"],
      p = a["Control.Bind"],
      l = a["Control.Monad"],
      n = a["Control.Monad.Rec.Class"],
      q = a["Control.Plus"],
      w = a["Data.Bifunctor"],
      b = a["Data.Boolean"],
      h = a["Data.Either"],
      d = a["Data.Functor"];
  a = a["Data.Show"];

  var r = function () {
    function H(J) {
      this.value0 = J;
    }

    H.create = function (J) {
      return new H(J);
    };

    return H;
  }();

  a = new a.Show(function (H) {
    return H.value0;
  });

  var x = new d.Functor(function (H) {
    return function (J) {
      var M = d.map(h.functorEither)(function (L) {
        return {
          result: H(L.result),
          suffix: L.suffix
        };
      });
      return function (L) {
        return M(J(L));
      };
    };
  }),
      t = function t(H) {
    return function (J) {
      return new h.Left({
        pos: J.pos,
        error: new r(H)
      });
    };
  },
      C = new k.Apply(function () {
    return x;
  }, function (H) {
    return function (J) {
      return function (M) {
        return p.bind(h.bindEither)(H(M))(function (L) {
          return p.bind(h.bindEither)(J(L.suffix))(function (U) {
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
    return C;
  }, function (H) {
    return function (J) {
      return function (M) {
        return p.bind(h.bindEither)(H(M))(function (L) {
          return J(L.result)(L.suffix);
        });
      };
    };
  }),
      u = new f.Applicative(function () {
    return C;
  }, function (H) {
    return function (J) {
      return new h.Right({
        result: H,
        suffix: J
      });
    };
  }),
      D = new l.Monad(function () {
    return u;
  }, function () {
    return y;
  });

  k = new n.MonadRec(function () {
    return D;
  }, function (H) {
    return function (J) {
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
          return d.map(h.functorEither)(M)(H(U.state)(U.str));
        })({
          state: J,
          str: L
        });
      };
    };
  });
  var E = new e.Alt(function () {
    return x;
  }, function (H) {
    return function (J) {
      return function (M) {
        var L = H(M);

        if (L instanceof h.Left) {
          if (M.pos === L.value0.pos) return J(M);
          if (b.otherwise) return new h.Left({
            error: L.value0.error,
            pos: L.value0.pos
          });
        }

        return L;
      };
    };
  }),
      N = new q.Plus(function () {
    return E;
  }, t("No alternative"));
  e = new g.Alternative(function () {
    return u;
  }, function () {
    return N;
  });
  c.ParseError = r;

  c.runParser = function (H) {
    return function (J) {
      return w.bimap(h.bifunctorEither)(function (M) {
        return M.error;
      })(function (M) {
        return M.result;
      })(H({
        str: J,
        pos: 0
      }));
    };
  };

  c.fail = t;

  c["try"] = function (H) {
    return function (J) {
      return w.lmap(h.bifunctorEither)(function (M) {
        return {
          pos: J.pos,
          error: M.error
        };
      })(H(J));
    };
  };

  c.showParseError = a;
  c.functorParser = x;
  c.applyParser = C;
  c.applicativeParser = u;
  c.altParser = E;
  c.alternativeParser = e;
  c.bindParser = y;
  c.monadRecParser = k;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var c = a["Text.Parsing.StringParser.Combinators"],
      e = a["Control.Alt"],
      g = a["Control.Applicative"],
      f = a["Control.Apply"],
      k = a["Control.Bind"],
      p = a["Data.Functor"],
      l = a["Data.NonEmpty"],
      n = a["Data.Unit"],
      q = a["Text.Parsing.StringParser"],
      w = a["Data.List"].manyRec(q.monadRecParser)(q.alternativeParser),
      b = function b(h) {
    return function (d) {
      return new l.NonEmpty(h, d);
    };
  };

  c.many = w;

  c.many1 = function (h) {
    return f.apply(q.applyParser)(p.map(q.functorParser)(b)(h))(w(h));
  };

  c.withError = function (h) {
    return function (d) {
      return e.alt(q.altParser)(h)(q.fail(d));
    };
  };

  c.optional = function (h) {
    return e.alt(q.altParser)(k.bind(q.bindParser)(h)(function (d) {
      return g.pure(q.applicativeParser)(n.unit);
    }))(g.pure(q.applicativeParser)(n.unit));
  };

  c.sepBy1 = function (h) {
    return function (d) {
      return k.bind(q.bindParser)(h)(function (r) {
        return k.bind(q.bindParser)(w(f.applySecond(q.applyParser)(d)(h)))(function (x) {
          return g.pure(q.applicativeParser)(b(r)(x));
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
      k = a["Data.Either"],
      p = a["Data.Enum"],
      l = a["Data.Maybe"],
      n = a["Data.Show"],
      q = a["Data.String.CodePoints"],
      w = a["Data.Unit"],
      b = a["Text.Parsing.StringParser"],
      h = a["Text.Parsing.StringParser.Combinators"],
      d = function () {
    var x = function () {
      var t = p.fromEnum(q.boundedEnumCodePoint);
      return function (C) {
        return f.fromCharCode(t(C));
      };
    }();

    return function (t) {
      var C = q.codePointAt(t.pos)(t.str);

      if (C instanceof l.Just) {
        var y = x(C.value0);
        if (y instanceof l.Just) return new k.Right({
          result: y.value0,
          suffix: {
            str: t.str,
            pos: t.pos + 1 | 0
          }
        });
        if (y instanceof l.Nothing) return new k.Left({
          pos: t.pos,
          error: b.ParseError.create("CodePoint " + (n.show(q.showCodePoint)(C.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [y.constructor.name]);
      }

      if (C instanceof l.Nothing) return new k.Left({
        pos: t.pos,
        error: new b.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [C.constructor.name]);
    };
  }(),
      r = function r(x) {
    return b["try"](g.bind(b.bindParser)(d)(function (t) {
      return x(t) ? e.pure(b.applicativeParser)(t) : b.fail("Character " + (n.show(n.showChar)(t) + " did not satisfy predicate"));
    }));
  };

  c.eof = function (x) {
    return x.pos < q.length(x.str) ? new k.Left({
      pos: x.pos,
      error: new b.ParseError("Expected EOF")
    }) : new k.Right({
      result: w.unit,
      suffix: x
    });
  };

  c.satisfy = r;

  c["char"] = function (x) {
    return h.withError(r(function (t) {
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
      k = a["Control.Bind"],
      p = a["Data.Char"],
      l = a["Data.Foldable"],
      n = a["Data.Functor"],
      q = a["Data.List.Types"],
      w = a["Data.Maybe"],
      b = a["Data.Monoid"],
      h = a["Data.String.CodeUnits"],
      d = a["Data.String.Pattern"],
      r = a["Data.Unit"],
      x = a["Text.Parsing.StringParser"],
      t = a["Text.Parsing.StringParser.CodePoints"],
      C = a["Text.Parsing.StringParser.Combinators"],
      y = function (ia) {
    var Da = w.fromJust();
    return function (na) {
      return Da(p.fromCharCode(na));
    };
  }(),
      u = function u(ia) {
    return n.map(x.functorParser)(function () {
      var Da = l.fold(q.foldableNonEmptyList)(b.monoidString),
          na = n.map(q.functorNonEmptyList)(h.singleton);
      return function (ua) {
        return Da(na(ua));
      };
    }())(C.many1(t.satisfy(ia)));
  },
      D = function D(ia) {
    return k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(ia))(function () {
      return k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(E(ia)))(function () {
        return g.pure(x.applicativeParser)(r.unit);
      });
    });
  },
      E = function E(ia) {
    return e.alt(x.altParser)(D(ia))(g.pure(x.applicativeParser)(r.unit));
  },
      N = function N(ia) {
    return k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t.satisfy(ia)))(function () {
      return k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(E(t.satisfy(ia))))(function () {
        return g.pure(x.applicativeParser)(r.unit);
      });
    });
  },
      H = t["char"](y(0)),
      J = t["char"]("\n");

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
      I = function I(ia) {
    return function (Da) {
      return h.contains(d.Pattern(h.singleton(Da)))(ia);
    };
  },
      v = function v(ia) {
    return U(y(1))(y(8))(ia) || U(y(14))(y(31))(ia) || I("\x0B\f\x7F")(ia);
  },
      B = function B(ia) {
    return U(y(33))(y(39))(ia) || U(y(42))(y(91))(ia) || U(y(93))(y(126))(ia) || v(ia);
  },
      O = function O(ia) {
    return U(y(33))(y(90))(ia) || U(y(94))(y(126))(ia) || v(ia);
  },
      G = t.satisfy(v),
      F = t["char"]("\r"),
      P = n["void"](x.functorParser)(f.applySecond(x.applyParser)(F)(J)),
      Y = function () {
    var ia = D(f.applySecond(x.applyParser)(P)(L)),
        Da = f.applySecond(x.applyParser)(L)(C.optional(f.applySecond(x.applyParser)(P)(L)));
    return e.alt(x.altParser)(Da)(ia);
  }(),
      pa = function () {
    var ia = k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]("\\")))(function () {
      return e.alt(x.altParser)(e.alt(x.altParser)(e.alt(x.altParser)(e.alt(x.altParser)(e.alt(x.altParser)(V)(M))(J))(F))(G))(H);
    });
    return k.bind(x.bindParser)(ia)(function (Da) {
      return g.pure(x.applicativeParser)("\\" + h.singleton(Da));
    });
  }(),
      va = e.alt(x.altParser)(u(function (ia) {
    return I(h.singleton(y(33)))(ia) || U(y(35))(y(91))(ia) || U(y(93))(y(126))(ia) || v(ia);
  }))(pa),
      z = function () {
    var ia = k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]('"')))(function () {
      return k.bind(x.bindParser)(C.many(f.applySecond(x.applyParser)(C.optional(Y))(va)))(function (Da) {
        return k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(C.optional(Y)))(function () {
          return k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]('"')))(function () {
            return g.pure(x.applicativeParser)(Da);
          });
        });
      });
    });
    return n.map(x.functorParser)(function (Da) {
      return '"' + (l.fold(q.foldableList)(b.monoidString)(Da) + '"');
    })(ia);
  }(),
      xa = k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]("(")))(function () {
    return k.discard(k.discardUnit)(x.bindParser)(E(e.alt(x.altParser)(e.alt(x.altParser)(e.alt(x.altParser)(N(B))(n["void"](x.functorParser)(pa)))(xa))(Y)))(function () {
      return k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"](")")))(function () {
        return g.pure(x.applicativeParser)(r.unit);
      });
    });
  }),
      X = E(e.alt(x.altParser)(xa)(Y));

  a = k.discard(k.discardUnit)(x.bindParser)(C.optional(X))(function () {
    return k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]("[")))(function () {
      return k.bind(x.bindParser)(C.many(f.applySecond(x.applyParser)(C.optional(Y))(u(O))))(function (ia) {
        return k.discard(k.discardUnit)(x.bindParser)(C.optional(Y))(function () {
          return k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(t["char"]("]")))(function () {
            return k.discard(k.discardUnit)(x.bindParser)(C.optional(X))(function () {
              return g.pure(x.applicativeParser)("[" + (l.fold(q.foldableList)(b.monoidString)(ia) + "]"));
            });
          });
        });
      });
    });
  });

  var ka = function () {
    return u(function (ia) {
      return "0" <= ia && "9" >= ia || "a" <= ia && "z" >= ia || "A" <= ia && "Z" >= ia || I("!#$%&'*+/=?^_`{|}~-")(ia);
    });
  }(),
      Aa = function () {
    var ia = k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(C.optional(X)))(function () {
      return k.bind(x.bindParser)(e.alt(x.altParser)(ka)(z))(function (Da) {
        return k.discard(k.discardUnit)(x.bindParser)(n["void"](x.functorParser)(C.optional(X)))(function () {
          return g.pure(x.applicativeParser)(Da);
        });
      });
    });
    ia = C.sepBy1(ia)(t["char"]("."));
    return n.map(x.functorParser)(l.intercalate(q.foldableNonEmptyList)(b.monoidString)("."))(ia);
  }(),
      R = e.alt(x.altParser)(Aa)(a);

  a = k.bind(x.bindParser)(Aa)(function (ia) {
    return k.bind(x.bindParser)(t["char"]("@"))(function () {
      return k.bind(x.bindParser)(R)(function (Da) {
        return k.bind(x.bindParser)(t.eof)(function () {
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
      k = a["Text.Email.Parser"],
      p = a["Text.Parsing.StringParser"];

  a = function () {
    var l = e.lmap(g.bifunctorEither)(f.show(p.showParseError));
    return function (n) {
      n = p.runParser(k.addrSpec)(n);
      return l(n);
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
      k = a["Data.String.NonEmpty.Internal"],
      p = function p(l) {
    return function (n) {
      var q = "SUCCESS" === n ? !0 : !1;

      if (q) {
        n = k.fromString(l);
        if (n instanceof f.Just) return new g.Right(n.value0);
        if (n instanceof f.Nothing) return new g.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [n.constructor.name]);
      }

      if (!q) return new g.Left(n);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [q.constructor.name]);
    };
  };

  c.parsePublicURL = function (l) {
    var n = e._validateURL(!0)(l);

    return p(l)(n);
  };

  c.urlToNEString = function (l) {
    return l;
  };

  c.urlToString = function (l) {
    return k.toString(l);
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
      k = a["Control.Monad"],
      p = a["Control.Plus"],
      l = a["Data.Array"],
      n = a["Data.Array.NonEmpty"],
      q = a["Data.Bounded"],
      w = a["Data.DateTime"],
      b = a["Data.Either"],
      h = a["Data.Either.Extra"],
      d = a["Data.Functor"],
      r = a["Data.Int"],
      x = a["Data.JSDate"],
      t = a["Data.Maybe"],
      C = a["Data.Natural"],
      y = a["Data.String.CodePoints"],
      u = a["Data.String.CodeUnits"],
      D = a["Data.String.NonEmpty.Internal"],
      E = a["Data.String.Utils"],
      N = a["Data.Traversable"],
      H = a["Data.XPath"],
      J = a["DataCite.Types.Common"],
      M = a.Effect,
      L = a["Effect.Exception"],
      U = a.Global,
      V = a["Metajelo.Types"],
      I = a["Metajelo.XPaths"],
      v = a["Text.Email.Validate"],
      B = a["Text.URL.Validate"],
      O = a["Web.DOM.Document.XPath"],
      G = a["Web.DOM.Document.XPath.ResultType"],
      F = a["Web.DOM.Element"],
      P = a["Web.DOM.Node"],
      Y = a["Web.DOM.NodeList"],
      pa = function pa(Q) {
    return "Audiovisual" === Q ? e.pure(b.applicativeEither)(J.Audiovisual.value) : "Dataset" === Q ? e.pure(b.applicativeEither)(J.Dataset.value) : "Event" === Q ? e.pure(b.applicativeEither)(J.Event.value) : "Image" === Q ? e.pure(b.applicativeEither)(J.Image.value) : "InteractiveResource" === Q ? e.pure(b.applicativeEither)(J.InteractiveResource.value) : "Model" === Q ? e.pure(b.applicativeEither)(J.Model.value) : "PhysicalObject" === Q ? e.pure(b.applicativeEither)(J.PhysicalObject.value) : "ResourceCollection" === Q ? e.pure(b.applicativeEither)(J.ResourceCollection.value) : "Service" === Q ? e.pure(b.applicativeEither)(J.Service.value) : "Software" === Q ? e.pure(b.applicativeEither)(J.Software.value) : "Sound" === Q ? e.pure(b.applicativeEither)(J.Sound.value) : "Text" === Q ? e.pure(b.applicativeEither)(J.Text.value) : "Workflow" === Q ? e.pure(b.applicativeEither)(J.Workflow.value) : "Other" === Q ? e.pure(b.applicativeEither)(J.Other.value) : b.Left.create("Unknown ResourceTypeGeneral: '" + (Q + "'"));
  },
      va = function va(Q) {
    return function (ya) {
      return function () {
        var ca = I.unsafeSingleNodeValue(Q)(ya)(H.xx(H.stringXPath)(I.resTypeP))(),
            ma = Q.xeval.str(ca)(".")();
        ca = Q.xeval.str(ca)(H.at(H.stringXPath)(I.resTypeGenAT))();
        ca = I.rightOrThrow(pa(ca))();
        return {
          description: ma,
          generalType: ca
        };
      };
    };
  },
      z = function z(Q) {
    return "IsCitedBy" === Q ? e.pure(b.applicativeEither)(J.IsCitedBy.value) : "Cites" === Q ? e.pure(b.applicativeEither)(J.Cites.value) : "IsSupplementTo" === Q ? e.pure(b.applicativeEither)(J.IsSupplementTo.value) : "IsSupplementedBy" === Q ? e.pure(b.applicativeEither)(J.IsSupplementedBy.value) : "IsContinuedBy" === Q ? e.pure(b.applicativeEither)(J.IsContinuedBy.value) : "Continues" === Q ? e.pure(b.applicativeEither)(J.Continues.value) : "IsNewVersionOf" === Q ? e.pure(b.applicativeEither)(J.IsNewVersionOf.value) : "IsPreviousVersionOf" === Q ? e.pure(b.applicativeEither)(J.IsPreviousVersionOf.value) : "IsPartOf" === Q ? e.pure(b.applicativeEither)(J.IsPartOf.value) : "HasPart" === Q ? e.pure(b.applicativeEither)(J.HasPart.value) : "IsReferencedBy" === Q ? e.pure(b.applicativeEither)(J.IsReferencedBy.value) : "References" === Q ? e.pure(b.applicativeEither)(J.References.value) : "IsDocumentedBy" === Q ? e.pure(b.applicativeEither)(J.IsDocumentedBy.value) : "Documents" === Q ? e.pure(b.applicativeEither)(J.Documents.value) : "IsCompiledBy" === Q ? e.pure(b.applicativeEither)(J.IsCompiledBy.value) : "Compiles" === Q ? e.pure(b.applicativeEither)(J.Compiles.value) : "IsVariantFormOf" === Q ? e.pure(b.applicativeEither)(J.IsVariantFormOf.value) : "IsOriginalFormOf" === Q ? e.pure(b.applicativeEither)(J.IsOriginalFormOf.value) : "IsIdenticalTo" === Q ? e.pure(b.applicativeEither)(J.IsIdenticalTo.value) : "HasMetadata" === Q ? e.pure(b.applicativeEither)(J.HasMetadata.value) : "IsMetadataFor" === Q ? e.pure(b.applicativeEither)(J.IsMetadataFor.value) : "Reviews" === Q ? e.pure(b.applicativeEither)(J.Reviews.value) : "IsReviewedBy" === Q ? e.pure(b.applicativeEither)(J.IsReviewedBy.value) : "IsDerivedFrom" === Q ? e.pure(b.applicativeEither)(J.IsDerivedFrom.value) : "IsSourceOf" === Q ? e.pure(b.applicativeEither)(J.IsSourceOf.value) : b.Left.create("Unknown RelationType: '" + (Q + "'"));
  },
      xa = function xa(Q) {
    return "Access" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Access.value)) : "Collection" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Collection.value)) : "Data" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Data.value)) : "Metadata" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Metadata.value)) : "Preservation" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Preservation.value)) : "Submission" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Submission.value)) : "Quality" === Q ? e.pure(b.applicativeEither)(new t.Just(V.Quality.value)) : "Terms of Use" === Q ? e.pure(b.applicativeEither)(new t.Just(V.TermsOfUse.value)) : "" === Q ? e.pure(b.applicativeEither)(t.Nothing.value) : b.Left.create("Unknown PolicyType: '" + (Q + "'"));
  },
      X = function X(Q) {
    return function (ya) {
      return function (ca) {
        return function () {
          var ma = Q.xeval.any(ca)(H.xx(H.stringXPath)(ya))(G.ordered_node_snapshot_type)();
          ma = O.snapshot(ma)();
          ma = N.traverse(N.traversableArray)(M.applicativeEffect)(function (A) {
            return Q.xeval.str(A)(".");
          })(ma)();
          ma = d.map(d.functorArray)(function (A) {
            return I.readNonEmptyString(ya)(A);
          })(ma);
          h.catLefts(k.monadArray)(p.plusArray)(ma);
          ma = h.catRights(k.monadArray)(p.plusArray)(ma);
          return I.readNonEmptyArray(ya + "s")(ma);
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
    return "ARK" === Q ? e.pure(b.applicativeEither)(J.ARK.value) : "arXiv" === Q ? e.pure(b.applicativeEither)(J.ArXiv.value) : "bibcode" === Q ? e.pure(b.applicativeEither)(J.Bibcode.value) : "DOI" === Q ? e.pure(b.applicativeEither)(J.DOI.value) : "EAN13" === Q ? e.pure(b.applicativeEither)(J.EAN13.value) : "EISSN" === Q ? e.pure(b.applicativeEither)(J.EISSN.value) : "Handle" === Q ? e.pure(b.applicativeEither)(J.Handle.value) : "IGSN" === Q ? e.pure(b.applicativeEither)(J.IGSN.value) : "ISBN" === Q ? e.pure(b.applicativeEither)(J.ISBN.value) : "ISSN" === Q ? e.pure(b.applicativeEither)(J.ISSN.value) : "ISTC" === Q ? e.pure(b.applicativeEither)(J.ISTC.value) : "LISSN" === Q ? e.pure(b.applicativeEither)(J.LISSN.value) : "LSID" === Q ? e.pure(b.applicativeEither)(J.LSID.value) : "PMID" === Q ? e.pure(b.applicativeEither)(J.PMID.value) : "PURL" === Q ? e.pure(b.applicativeEither)(J.PURL.value) : "UPC" === Q ? e.pure(b.applicativeEither)(J.UPC.value) : "URL" === Q ? e.pure(b.applicativeEither)(J.URL.value) : "URN" === Q ? e.pure(b.applicativeEither)(J.URN.value) : b.Left.create("Unknown IdentifierType: '" + (Q + "'"));
  },
      ia = function ia(Q) {
    return function (ya) {
      var ca = function ca(A) {
        return function () {
          var W = Q.xeval.str(A)(H.at(H.stringXPath)(I.idTypeAT))();
          return I.rightOrThrow(R(W))();
        };
      },
          ma = function ma(A) {
        return function () {
          var W = Q.xeval.str(A)(".")();
          return I.rightOrThrow(I.readNonEmptyString("InstitutionID")(W))();
        };
      };

      return function () {
        var A = I.unsafeSingleNodeValue(Q)(ya)(H.xx(H.stringXPath)(I.instIdP))(),
            W = ma(A)();
        A = ca(A)();
        return {
          identifier: W,
          identifierType: A
        };
      };
    };
  },
      Da = function Da(Q) {
    var ya = function ya(W) {
      return function () {
        var sa = Q.xeval.str(W)(H.at(H.stringXPath)(I.relTypeAT))();
        return I.rightOrThrow(z(sa))();
      };
    },
        ca = function ca(W) {
      return function () {
        var sa = Q.xeval.str(W)(H.at(H.stringXPath)(I.relIdTypeAT))();
        return I.rightOrThrow(R(sa))();
      };
    },
        ma = function ma(W) {
      return function () {
        var sa = Q.xeval.str(W)(".")();
        return I.rightOrThrow(I.readNonEmptyString("RelatedIdentifier")(sa))();
      };
    },
        A = function A(W) {
      return function () {
        var sa = ma(W)(),
            ta = ca(W)(),
            za = ya(W)();
        return {
          identifier: sa,
          identifierType: ta,
          relationType: za
        };
      };
    };

    return function () {
      var W = Q.xevalRoot.any(I.relIdRootP)(G.ordered_node_snapshot_type)();
      W = O.snapshot(W)();
      W = N.sequence(N.traversableArray)(M.applicativeEffect)(d.map(d.functorArray)(A)(W))();
      W = n.fromArray(W);
      if (W instanceof t.Just) return W.value0;
      if (W instanceof t.Nothing) return L["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 112, column 3 - line 114, column 67): " + [W.constructor.name]);
    };
  },
      na = function na(Q) {
    return function (ya) {
      var ca = function ca(W) {
        return function () {
          var sa = Q.xeval.str(W)(H.at(H.stringXPath)(I.resIdTypeAT))();
          return I.rightOrThrow(R(sa))();
        };
      },
          ma = function ma(W) {
        return function () {
          var sa = Q.xeval.str(W)(".")();
          return I.rightOrThrow(I.readNonEmptyString("ResourceID")(sa))();
        };
      },
          A = function A(W) {
        return function (sa) {
          return N.sequence(N.traversableMaybe)(M.applicativeEffect)(f.bind(t.bindMaybe)(W)(function (ta) {
            return f.bind(t.bindMaybe)(sa)(function (za) {
              return e.pure(t.applicativeMaybe)(g.lift2(M.applyEffect)(function (Ja) {
                return function (Ka) {
                  return {
                    identifier: Ja,
                    identifierType: Ka
                  };
                };
              })(ta)(za));
            });
          }));
        };
      };

      return function () {
        var W = Q.xeval.nodeMay(ya)(H.xx(H.stringXPath)(I.resIdP))(),
            sa = d.map(t.functorMaybe)(ma)(W);
        W = d.map(t.functorMaybe)(ca)(W);
        return A(sa)(W)();
      };
    };
  },
      ua = function ua(Q) {
    return function () {
      var ya = Q.xevalRoot.str(I.idRootP)();
      ya = I.rightOrThrow(I.readNonEmptyString("Identifier")(ya))();
      var ca = Q.xevalRoot.str(I.idTypeRootAP)();
      ca = I.rightOrThrow(R(ca))();
      return {
        identifier: ya,
        identifierType: ca
      };
    };
  },
      qa = function qa(Q) {
    return function (ya) {
      var ca = function ca(ma) {
        return function () {
          var A = Q.xeval.str(ma)(".")();
          return I.rightOrThrow(I.readNonEmptyString("Format")(A))();
        };
      };

      return function () {
        var ma = Q.xeval.any(ya)(H.pathAppendNSx(H.stringXPath)(H.xx(H.stringXPath)(I.formatCP))(I.formatP))(G.ordered_node_snapshot_type)();
        ma = O.snapshot(ma)();
        return N.traverse(N.traversableArray)(M.applicativeEffect)(ca)(ma)();
      };
    };
  },
      Ba = function Ba(Q) {
    return "0" === Q ? e.pure(b.applicativeEither)(!1) : "1" === Q ? e.pure(b.applicativeEither)(!0) : "false" === Q ? e.pure(b.applicativeEither)(!1) : "true" === Q ? e.pure(b.applicativeEither)(!0) : b.Left.create("Invalid xs:boolean value: '" + (Q + "'"));
  },
      Ga = function Ga(Q) {
    return "" === Q ? e.pure(b.applicativeEither)(t.Nothing.value) : d.map(b.functorEither)(t.Just.create)(Ba(Q));
  },
      ea = function ea(Q) {
    return function (ya) {
      var ca = H.pathAppendNSx(H.stringXPath)(H.xx(H.stringXPath)(I.instPolicyCP))(I.instPolicyP),
          ma = function ma(A) {
        return function () {
          var W = P.childNodes(A)();
          W = Y.toArray(W)();
          W = l.head(l.filter(function (Ha) {
            return !E.startsWith("#")(P.nodeName(Ha));
          })(W));
          if (W instanceof t.Just) var sa = W.value0;else if (W instanceof t.Nothing) sa = L["throw"]("Couldn't find child node of " + P.nodeName(A))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 394, column 30 - line 396, column 80): " + [W.constructor.name]);
          var ta = Q.xeval.str(sa)(".")(),
              za = I.rightOrThrow(I.readNonEmptyString("Policy")(ta))();

          W = function () {
            var Ha = d.map(t.functorMaybe)(F.localName)(F.fromNode(sa));
            if (Ha instanceof t.Just && Ha.value0 === I.freeTextPolicyP) return new V.FreeTextPolicy(za);

            if (Ha instanceof t.Just && Ha.value0 === I.refPolicyP) {
              Ha = B.parsePublicURL(ta);
              if (Ha instanceof b.Left) return L["throw"]("In refPolicy URL parsing: " + Ha.value0)();
              if (Ha instanceof b.Right) return new V.RefPolicy(Ha.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 401, column 37 - line 403, column 45): " + [Ha.constructor.name]);
            }

            if (Ha instanceof t.Just) return L["throw"]("invalid element '" + (Ha.value0 + "' as child of institutionPolicy"))();
            if (Ha instanceof t.Nothing) return L["throw"]("unable to convert policy child Node with name '" + (P.nodeName(sa) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 399, column 17 - line 407, column 56): " + [Ha.constructor.name]);
          }();

          var Ja = Q.xeval.str(A)(H.at(H.stringXPath)(I.polTypeAT))();
          Ja = I.rightOrThrow(xa(Ja))();
          var Ka = Q.xeval.str(A)(H.at(H.stringXPath)(I.appliesToProdAT))();
          Ka = I.rightOrThrow(Ga(Ka))();
          return {
            policy: W,
            policyType: Ja,
            appliesToProduct: Ka
          };
        };
      };

      return function () {
        var A = Q.xeval.any(ya)(ca)(G.ordered_node_snapshot_type)();
        A = O.snapshot(A)();
        A = N.sequence(N.traversableArray)(M.applicativeEffect)(d.map(d.functorArray)(ma)(A))();
        A = n.fromArray(A);
        if (A instanceof t.Just) return A.value0;
        if (A instanceof t.Nothing) return L["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 381, column 3 - line 383, column 67): " + [A.constructor.name]);
      };
    };
  },
      la = function la(Q) {
    return function (ya) {
      var ca = function ca(A) {
        return function () {
          var W = Q.xeval.str(A)(H.xx(H.stringXPath)(I.pubYearP))();
          W = I.rightOrThrow(I.readNonEmptyString("PubYear")(W))();
          return C.intToNat(r.round(U.readInt(10)(D.toString(W))));
        };
      },
          ma = H.xx(H.stringXPath)(I.basicMetaP);

      return function () {
        var A = I.unsafeSingleNodeValue(Q)(ya)(ma)(),
            W = f.bindFlipped(M.bindEffect)(I.rightOrThrow)(X(Q)(I.titleP)(A))(),
            sa = f.bindFlipped(M.bindEffect)(I.rightOrThrow)(X(Q)(I.creatorP)(A))();
        A = ca(A)();
        return {
          titles: W,
          creators: sa,
          publicationYear: A
        };
      };
    };
  },
      da = function da(Q) {
    var ya = D.toString(Q);
    return function () {
      var ca = u.stripSuffix("Z")(ya);
      if (ca instanceof t.Just) ca = 10 >= y.length(ca.value0) ? ca.value0 + "T00:00:00.000Z" : ya;else if (ca instanceof t.Nothing) ca = ya;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 98, column 24 - line 100, column 23): " + [ca.constructor.name]);
      ca = x.parse(ca)();
      return t.fromMaybe(q.bottom(w.boundedDateTime))(x.toDateTime(ca));
    };
  },
      K = function K(Q) {
    return function () {
      var ya = Q.xevalRoot.str(I.dateRootP)();
      ya = I.rightOrThrow(I.readNonEmptyString("Date")(ya))();
      return da(ya)();
    };
  },
      aa = function aa(Q) {
    return function () {
      var ya = Q.xevalRoot.str(I.lastModRootP)();
      ya = I.rightOrThrow(I.readNonEmptyString("ModDate")(ya))();
      return da(ya)();
    };
  },
      ra = function ra(Q) {
    return function (ya) {
      return function (ca) {
        return function () {
          var ma = Q.xeval.str(ca)(ya)();
          ma = B.parsePublicURL(ma);
          if (ma instanceof b.Left) return L["throw"](ma.value0)();
          if (ma instanceof b.Right) return ma.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 442, column 3 - line 444, column 26): " + [ma.constructor.name]);
        };
      };
    };
  },
      ha = function ha(Q) {
    return function (ya) {
      var ca = function ca(sa) {
        return function () {
          var ta = sa();
          return I.rightOrThrow(I.readNonEmptyString("SuperOrg")(ta))();
        };
      },
          ma = function ma(sa) {
        return function () {
          var ta = Q.xeval.nodeMay(sa)(H.xx(H.stringXPath)(I.superOrgNameP))();
          return N.traverse(N.traversableMaybe)(M.applicativeEffect)(function (za) {
            return ca(Q.xeval.str(za)("."));
          })(ta)();
        };
      },
          A = function A(sa) {
        return function () {
          var ta = I.unsafeSingleNodeValue(Q)(sa)(H.xx(H.stringXPath)(I.instSustainP))(),
              za = ra(Q)(H.xx(H.stringXPath)(I.missionUrlP))(ta)();
          ta = ra(Q)(H.xx(H.stringXPath)(I.fundingUrlP))(ta)();
          return {
            missionStatementURL: za,
            fundingStatementURL: ta
          };
        };
      },
          W = function W(sa) {
        var ta = H.xx(H.stringXPath)(I.instContactP);
        return function () {
          var za = I.unsafeSingleNodeValue(Q)(sa)(ta)(),
              Ja = Q.xeval.str(za)(H.at(H.stringXPath)(I.instContactTypeAT))();
          Ja = I.rightOrThrow(Aa(Ja))();
          za = Q.xeval.str(za)(".")();
          za = v.validate(za);
          if (za instanceof b.Left) za = L["throw"]("Error in validating email address for InstitutionContact: " + za.value0)();else if (za instanceof b.Right) za = za.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 345, column 23 - line 349, column 28): " + [za.constructor.name]);
          return {
            emailAddress: za,
            contactType: Ja
          };
        };
      };

      return function () {
        var sa = I.unsafeSingleNodeValue(Q)(ya)(H.xx(H.stringXPath)(I.locP))(),
            ta = ia(Q)(sa)(),
            za = f.join(M.bindEffect)(d.mapFlipped(M.functorEffect)(Q.xeval.str(sa)(H.xx(H.stringXPath)(I.instNameP)))(function ($a) {
          return I.rightOrThrow(I.readNonEmptyString("Institution Name")($a));
        }))(),
            Ja = Q.xeval.str(sa)(H.xx(H.stringXPath)(I.instTypeP))();
        Ja = I.rightOrThrow(ka(Ja))();
        var Ka = ma(sa)(),
            Ha = W(sa)(),
            Sa = A(sa)(),
            Va = ea(Q)(sa)();
        sa = Q.xeval.str(sa)(H.xx(H.stringXPath)(I.versioningP))();
        sa = I.rightOrThrow(Ba(sa))();
        return {
          institutionID: ta,
          institutionName: za,
          institutionType: Ja,
          superOrganizationName: Ka,
          institutionContact: Ha,
          institutionSustainability: Sa,
          institutionPolicies: Va,
          versioning: sa
        };
      };
    };
  },
      Ea = function Ea(Q) {
    return function (ya) {
      var ca = function ca(A) {
        return function () {
          var W = Q.xeval.str(A)(H.at(H.stringXPath)(I.relTypeAT))();
          return I.rightOrThrow(z(W))();
        };
      },
          ma = function ma(A) {
        return function (W) {
          return N.sequence(N.traversableMaybe)(M.applicativeEffect)(f.bind(t.bindMaybe)(A)(function (sa) {
            return f.bind(t.bindMaybe)(W)(function (ta) {
              return e.pure(t.applicativeMaybe)(g.lift2(M.applyEffect)(function (za) {
                return function (Ja) {
                  return {
                    url: za,
                    relationType: Ja
                  };
                };
              })(sa)(ta));
            });
          }));
        };
      };

      return function () {
        var A = Q.xeval.nodeMay(ya)(H.xx(H.stringXPath)(I.resMetaSourceP))(),
            W = d.map(t.functorMaybe)(ra(Q)("."))(A);
        A = d.map(t.functorMaybe)(ca)(A);
        return ma(W)(A)();
      };
    };
  },
      Oa = function Oa(Q) {
    var ya = function ya(ca) {
      return function () {
        var ma = la(Q)(ca)(),
            A = na(Q)(ca)(),
            W = va(Q)(ca)(),
            sa = qa(Q)(ca)(),
            ta = Ea(Q)(ca)(),
            za = ha(Q)(ca)();
        return {
          basicMetadata: ma,
          resourceID: A,
          resourceType: W,
          format: sa,
          resourceMetadataSource: ta,
          location: za
        };
      };
    };

    return function () {
      var ca = Q.xevalRoot.any(I.sProdRootP)(G.ordered_node_snapshot_type)();
      ca = O.snapshot(ca)();
      ca = N.sequence(N.traversableArray)(M.applicativeEffect)(d.map(d.functorArray)(ya)(ca))();
      ca = n.fromArray(ca);
      if (ca instanceof t.Just) return ca.value0;
      if (ca instanceof t.Nothing) return L["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 170, column 3 - line 172, column 70): " + [ca.constructor.name]);
    };
  };

  c.readRecord = function (Q) {
    return function () {
      var ya = ua(Q)(),
          ca = K(Q)(),
          ma = aa(Q)(),
          A = Da(Q)(),
          W = Oa(Q)();
      return {
        identifier: ya,
        date: ca,
        lastModified: ma,
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
  c.readPolicyType = xa;
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
      k = a["Data.Functor"],
      p = a["Data.JSDate"],
      l = a["Data.Maybe"],
      n = a["Data.Natural"],
      q = a["Data.Show"],
      w = a["Data.Traversable"],
      b = a["Data.Unit"],
      h = a["Data.XPath"],
      d = a["DataCite.Types.Common"],
      r = a.Effect,
      x = a["Metajelo.Types"],
      t = a["Metajelo.XPaths"],
      C = a["Nonbili.DOM"],
      y = a["Text.Email.Parser"],
      u = a["Text.URL.Validate"],
      D = a["Web.DOM.Document"],
      E = a["Web.DOM.Element"],
      N = a["Web.DOM.Node"],
      H = function H(ea) {
    return function (la) {
      return function (da) {
        return function (K) {
          var aa = E.fromNode(da);
          return function () {
            w.sequence(w.traversableMaybe)(r.applicativeEffect)(k.mapFlipped(l.functorMaybe)(aa)(function (ra) {
              return E.setAttribute(ea)(q.show(d.showIdentifierType)(K))(ra);
            }))();
            return b.unit;
          };
        };
      };
    };
  },
      J = a["Data.String.NonEmpty.Internal"].toString,
      M = function M(ea) {
    return function (la) {
      return function (da) {
        return function (K) {
          return function () {
            N.setTextContent(J(K.identifier))(da)();
            return H(ea)(la)(da)(K.identifierType)();
          };
        };
      };
    };
  },
      L = function L(ea) {
    return function (la) {
      return function () {
        var da = t.unsafeSingleNodeValue(ea)(ea.recNode)(h.xx(h.stringXPath)(t.idP))();
        return M(t.idTypeAT)(ea)(da)(la)();
      };
    };
  },
      U = function U(ea) {
    return function (la) {
      return function () {
        w.sequence(w.traversableMaybe)(r.applicativeEffect)(k.map(l.functorMaybe)(N.setTextContent(J(ea)))(la))();
        return b.unit;
      };
    };
  },
      V = function V(ea) {
    return function () {
      var la = p.toISOString(p.fromDateTime(ea))();
      return t.rightOrThrow(t.readNonEmptyString("(generic date)")(la))();
    };
  },
      I = function I(ea) {
    return function (la) {
      return function () {
        var da = V(la)(),
            K = ea.xevalRoot.nodeMay(t.dateRootP)();
        return U(da)(K)();
      };
    };
  },
      v = function v(ea) {
    return function (la) {
      return function () {
        var da = V(la)(),
            K = ea.xevalRoot.nodeMay(t.lastModRootP)();
        return U(da)(K)();
      };
    };
  },
      B = function B(ea) {
    return function (la) {
      var da = E.prefix(ea.recElem);
      return function () {
        if (da instanceof l.Just) var K = da.value0 + ":";else if (da instanceof l.Nothing) K = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 250, column 20 - line 252, column 18): " + [da.constructor.name]);
        K += la;
        return D.createElementNS(new l.Just(ea.ns))(K)(ea.doc)();
      };
    };
  },
      O = function O(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = B(ea)(da)();
          N.appendChild(E.toNode(K))(la)();
          return K;
        };
      };
    };
  },
      G = function G(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = O(ea)(la)(t.instContactP)();
          w.sequence(w.traversableMaybe)(r.applicativeEffect)(k.mapFlipped(l.functorMaybe)(da.contactType)(function (aa) {
            return E.setAttribute(t.instContactTypeAT)(q.show(x.showInstitutionContactType)(aa))(K);
          }))();
          return N.setTextContent(y.toString(da.emailAddress))(E.toNode(K))();
        };
      };
    };
  },
      F = function F(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = k.map(r.functorEffect)(E.toNode)(O(ea)(la)(t.instIdP))();
          return M(t.idTypeAT)(ea)(K)(da)();
        };
      };
    };
  },
      P = function P(ea) {
    return function (la) {
      return f.for_(r.applicativeEffect)(g.foldableNonEmptyArray)(la)(function (da) {
        return function () {
          var K = O(ea)(ea.recNode)(t.relIdP)(),
              aa = E.toNode(K);
          N.setTextContent(J(da.identifier))(aa)();
          E.setAttribute(t.relIdTypeAT)(q.show(d.showIdentifierType)(da.identifierType))(K)();
          return E.setAttribute(t.relTypeAT)(q.show(d.showRelationType)(da.relationType))(K)();
        };
      });
    };
  },
      Y = function Y(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = k.map(r.functorEffect)(E.toNode)(O(ea)(la)(t.resIdP))();
          return M(t.resIdTypeAT)(ea)(K)(da)();
        };
      };
    };
  },
      pa = function pa(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = O(ea)(la)(t.resMetaSourceP)();
          N.setTextContent(u.urlToString(da.url))(E.toNode(K))();
          return E.setAttribute(t.relTypeAT)(q.show(d.showRelationType)(da.relationType))(K)();
        };
      };
    };
  },
      va = function va(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = O(ea)(la)(t.resTypeP)();
          N.setTextContent(da.description)(E.toNode(K))();
          return E.setAttribute(t.resTypeGenAT)(q.show(d.showResourceTypeGeneral)(da.generalType))(K)();
        };
      };
    };
  },
      z = function z(ea) {
    return function (la) {
      return function (da) {
        return function (K) {
          return function () {
            var aa = k.map(r.functorEffect)(E.toNode)(O(la)(da)(ea))();
            return N.setTextContent(K)(aa)();
          };
        };
      };
    };
  },
      xa = function xa(ea) {
    return function (la) {
      return function (da) {
        return function (K) {
          return z(ea)(la)(da)(J(K));
        };
      };
    };
  },
      X = function X(ea) {
    return function (la) {
      return function (da) {
        return f.for_(r.applicativeEffect)(g.foldableNonEmptyArray)(da)(function (K) {
          return xa(t.creatorP)(ea)(la)(K);
        });
      };
    };
  },
      ka = function ka(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = k.map(r.functorEffect)(E.toNode)(O(ea)(la)(t.formatCP))();
          return f.for_(r.applicativeEffect)(f.foldableArray)(da)(function (aa) {
            return xa(t.formatP)(ea)(K)(aa);
          })();
        };
      };
    };
  },
      Aa = function Aa(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = O(ea)(la)(t.instPolicyP)(),
              aa = E.toNode(K);
          w.sequence(w.traversableMaybe)(r.applicativeEffect)(k.mapFlipped(l.functorMaybe)(da.policyType)(function (ra) {
            return E.setAttribute(t.polTypeAT)(q.show(x.showPolicyType)(ra))(K);
          }))();
          w.sequence(w.traversableMaybe)(r.applicativeEffect)(k.mapFlipped(l.functorMaybe)(da.appliesToProduct)(function (ra) {
            return E.setAttribute(t.appliesToProdAT)(q.show(q.showBoolean)(ra))(K);
          }))();
          if (da.policy instanceof x.FreeTextPolicy) return xa(t.freeTextPolicyP)(ea)(aa)(da.policy.value0)();
          if (da.policy instanceof x.RefPolicy) return xa(t.refPolicyP)(ea)(aa)(u.urlToNEString(da.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 217, column 3 - line 220, column 27): " + [da.policy.constructor.name]);
        };
      };
    };
  },
      R = function R(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = k.map(r.functorEffect)(E.toNode)(O(ea)(la)(t.instPolicyCP))();
          return f.for_(r.applicativeEffect)(g.foldableNonEmptyArray)(da)(function (aa) {
            return Aa(ea)(K)(aa);
          })();
        };
      };
    };
  },
      ia = function ia(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = k.map(r.functorEffect)(E.toNode)(O(ea)(la)(t.instSustainP))();
          xa(t.missionUrlP)(ea)(K)(u.urlToNEString(da.missionStatementURL))();
          return xa(t.fundingUrlP)(ea)(K)(u.urlToNEString(da.fundingStatementURL))();
        };
      };
    };
  },
      Da = function Da(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = O(ea)(la)(t.locP)(),
              aa = E.toNode(K);
          F(ea)(aa)(da.institutionID)();
          xa(t.instNameP)(ea)(aa)(da.institutionName)();
          z(t.instTypeP)(ea)(aa)(q.show(x.showInstitutionType)(da.institutionType))();
          w.sequence(w.traversableMaybe)(r.applicativeEffect)(k.mapFlipped(l.functorMaybe)(da.superOrganizationName)(function (ra) {
            return xa(t.superOrgNameP)(ea)(aa)(ra);
          }))();
          G(ea)(aa)(da.institutionContact)();
          ia(ea)(aa)(da.institutionSustainability)();
          R(ea)(aa)(da.institutionPolicies)();
          return z(t.versioningP)(ea)(aa)(q.show(q.showBoolean)(da.versioning))();
        };
      };
    };
  },
      na = function na(ea) {
    return function (la) {
      return function (da) {
        return f.for_(r.applicativeEffect)(g.foldableNonEmptyArray)(da)(function (K) {
          return xa(t.titleP)(ea)(la)(K);
        });
      };
    };
  },
      ua = function ua(ea) {
    return function (la) {
      return function (da) {
        return function () {
          var K = k.map(r.functorEffect)(E.toNode)(O(ea)(la)(t.basicMetaP))();
          na(ea)(K)(da.titles)();
          X(ea)(K)(da.creators)();
          K = k.map(r.functorEffect)(E.toNode)(O(ea)(K)(t.pubYearP))();
          return N.setTextContent(q.show(n.showNatural)(da.publicationYear))(K)();
        };
      };
    };
  },
      qa = function qa(ea) {
    return function (la) {
      return function () {
        var da = t.unsafeSingleNodeValue(ea)(ea.recNode)(h.xx(h.stringXPath)(t.sProdCP))(),
            K = k.map(r.functorEffect)(E.toNode)(O(ea)(da)(t.sProdP))();
        ua(ea)(K)(la.basicMetadata)();
        w.sequence(w.traversableMaybe)(r.applicativeEffect)(k.mapFlipped(l.functorMaybe)(la.resourceID)(function (aa) {
          return Y(ea)(K)(aa);
        }))();
        va(ea)(K)(la.resourceType)();
        ka(ea)(K)(la.format)();
        w.sequence(w.traversableMaybe)(r.applicativeEffect)(k.mapFlipped(l.functorMaybe)(la.resourceMetadataSource)(function (aa) {
          return pa(ea)(K)(aa);
        }))();
        return Da(ea)(K)(la.location)();
      };
    };
  },
      Ba = function Ba(ea) {
    return function (la) {
      return f.for_(r.applicativeEffect)(g.foldableNonEmptyArray)(la)(function (da) {
        return qa(ea)(da);
      });
    };
  },
      Ga = function Ga(ea) {
    return function (la) {
      return function () {
        L(ea)(la.identifier)();
        I(ea)(la.date)();
        v(ea)(la.lastModified)();
        P(ea)(la.relatedIdentifiers)();
        return Ba(ea)(la.supplementaryProducts)();
      };
    };
  };

  c.recordToString = function (ea) {
    return function () {
      var la = t.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      Ga(la)(ea)();
      la = D.documentElement(la.doc)();
      return l.maybe(e.pure(r.applicativeEffect)(""))(C.outerHTML)(la)();
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
    return function (k) {
      return function (p) {
        return function (l) {
          return e.unsafeGet(g.reflectSymbol(k)(p))(l);
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
      k = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("HTMLInputElement");

  var p = function () {
    var l = g.map(k.functorEffect)(f.toMaybe);
    return function (n) {
      return l(e._files(n));
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
      k = a["Concur.Core.Types"],
      p = a["Concur.React.DOM"],
      l = a["Concur.React.Props"],
      n = a["Control.Alt"],
      q = a["Control.Applicative"],
      w = a["Control.Apply"],
      b = a["Control.Bind"],
      h = a["Control.Cofree"],
      d = a["Control.Plus"],
      r = a["Data.Array"],
      x = a["Data.Array.NonEmpty"],
      t = a["Data.Bifunctor"],
      C = a["Data.Bounded"],
      y = a["Data.Either"],
      u = a["Data.Enum"],
      D = a["Data.Eq"],
      E = a["Data.Foldable"],
      N = a["Data.Functor"],
      H = a["Data.Generic.Rep"],
      J = a["Data.Generic.Rep.Bounded"],
      M = a["Data.Generic.Rep.Enum"],
      L = a["Data.Generic.Rep.Eq"],
      U = a["Data.Generic.Rep.Ord"],
      V = a["Data.Generic.Rep.Show"],
      I = a["Data.Int"],
      v = a["Data.Maybe"],
      B = a["Data.Monoid"],
      O = a["Data.Natural"],
      G = a["Data.Ord"],
      F = a["Data.Profunctor.Strong"],
      P = a["Data.Semigroup"],
      Y = a["Data.Show"],
      pa = a["Data.String.Common"],
      va = a["Data.String.NonEmpty.Internal"],
      z = a["Data.Symbol"],
      xa = a["Data.Traversable"],
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
      Ga = a.Global,
      ea = a["Metajelo.CSS.UI.ClassProps"],
      la = a["Metajelo.SchemaInfo"],
      da = a["Metajelo.Types"],
      K = a["Metajelo.XPaths.Read"],
      aa = a["Metajelo.XPaths.Write"],
      ra = a["React.SyntheticEvent"],
      ha = a["Text.Email.Parser"],
      Ea = a["Text.Email.Validate"],
      Oa = a["Text.URL.Validate"],
      Q = a["Web.DOM.Document"],
      ya = a["Web.DOM.Element"],
      ca = a["Web.DOM.HTMLCollection"],
      ma = a["Web.DOM.NonElementParentNode"],
      A = a["Web.DOM.ParentNode"],
      W = a["Web.HTML"],
      sa = a["Web.HTML.HTMLDocument"],
      ta = a["Web.HTML.HTMLInputElement"],
      za = a["Web.HTML.Window"],
      Ja = function () {
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
      Va = function Va(T, ba, Ia) {
    this.fromOptionValue = T;
    this.toOptionLabel = ba;
    this.toOptionValue = Ia;
  },
      $a = function $a() {
    var T = W.window();
    T = za.document(T)();
    return sa.toDocument(T);
  },
      ab = function ab(T) {
    if (T instanceof Ha || T instanceof Sa) return T.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 376, column 1 - line 376, column 34): " + [T.constructor.name]);
  },
      hb = function hb(T) {
    return p.input(g.widgetLiftWidget)([l.defaultValue(T), N.map(f.functorProps)(l.unsafeTargetValue)(l.onChange)]);
  },
      cb = function cb(T) {
    return b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(T)(function (ba) {
      return q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(va.fromString(pa.trim(ba)));
    });
  },
      db = function db(T) {
    return function (ba) {
      ba = Ba.lookup(T)(ba);
      if (ba instanceof v.Just) return ba.value0;
      if (ba instanceof v.Nothing) return "";
      throw Error("Failed pattern match at Metajelo.FormUtil (line 90, column 21 - line 92, column 16): " + [ba.constructor.name]);
    };
  },
      eb = function eb(T) {
    var ba = T ? "Hide Descriptions" : "Show Descriptions";
    return p.div_(k.widgetShiftMap)([])(N.voidRight(k.widgetFunctor)(!T)(p.button_(k.widgetShiftMap)([l.onClick])(p.text(g.widgetLiftWidget)(ba))));
  },
      jb = function jb(T) {
    return e.step(T)(b.bind(k.widgetBind)(eb(T))(function (ba) {
      return q.pure(k.widgetApplicative)(jb(ba));
    }));
  },
      Qa = function Qa(T) {
    return function (ba) {
      return function (Ia) {
        return function () {
          var Ca = $a();
          Ca = Q.toNonElementParentNode(Ca);
          Ca = ma.getElementById(T)(Ca)();
          if (Ca instanceof v.Just) return Ca = ya.toParentNode(Ca.value0), Ca = A.children(Ca)(), Ca = ca.toArray(Ca)(), Ca = r.filter(function (Na) {
            return ya.tagName(Na) === ba;
          })(Ca), Ca = r.catMaybes(N.map(N.functorArray)(ta.fromElement)(Ca)), E.for_(ia.applicativeEffect)(E.foldableArray)(Ca)(ta.setValue(Ia))();
          if (Ca instanceof v.Nothing) return Aa.unit;
          throw Error("Failed pattern match at Metajelo.FormUtil (line 506, column 3 - line 519, column 25): " + [Ca.constructor.name]);
        };
      };
    };
  },
      nb = function nb(T) {
    return function (ba) {
      return ba < T ? [] : r.range(T)(ba);
    };
  },
      Ya = function Ya(T) {
    return "FreeTextPolicy" === T ? q.pure(y.applicativeEither)(Ja.value) : "RefPolicy" === T ? q.pure(y.applicativeEither)(Ka.value) : y.Left.create("Unknown Policy: '" + (T + "'"));
  },
      vb = Ba.unions(E.foldableArray)([la.descrAttrMap, la.descrCTypMap, la.descrEleMap, la.descrSTypMap]),
      Ta = function Ta(T) {
    return function (ba) {
      return E.fold(E.foldableMaybe)(B.monoidString)(N.map(v.functorMaybe)(Y.show(T))(ba));
    };
  },
      wb = new Va(function (T) {
    return v.fromJust()(y.hush(K.readResourceTypeGeneral(T)));
  }, Y.show(R.showResourceTypeGeneral), Y.show(R.showResourceTypeGeneral)),
      xb = new Va(function (T) {
    return v.fromJust()(y.hush(K.readRelationType(T)));
  }, Y.show(R.showRelationType), Y.show(R.showRelationType)),
      ob = new Va(function (T) {
    return v.fromJust()(y.hush(K.readInstitutionType(T)));
  }, Y.show(da.showInstitutionType), Y.show(da.showInstitutionType)),
      yb = new Va(function (T) {
    return v.fromJust()(y.hush(K.readIdentifierType(T)));
  }, Y.show(R.showIdentifierType), Y.show(R.showIdentifierType)),
      pb = function pb(T) {
    return T instanceof Ha ? !0 : !1;
  },
      zb = function zb(T) {
    return function () {
      var ba = $a();
      ba = Q.toNonElementParentNode(ba);
      ba = ma.getElementById(T)(ba)();
      return xa.traverse(xa.traversableMaybe)(ia.applicativeEffect)(ta.value)(b.bind(v.bindMaybe)(ba)(function (Ia) {
        return ta.fromElement(Ia);
      }))();
    };
  },
      Xa = new H.Generic(function (T) {
    if (T instanceof Ja) return new H.Inl(H.NoArguments.value);
    if (T instanceof Ka) return new H.Inr(H.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 318, column 1 - line 318, column 58): " + [T.constructor.name]);
  }, function (T) {
    if (T instanceof H.Inl) return Ja.value;
    if (T instanceof H.Inr) return Ka.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 318, column 1 - line 318, column 58): " + [T.constructor.name]);
  }),
      qb = new Y.Show(V.genericShow(Xa)(V.genericShowSum(V.genericShowConstructor(V.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(V.genericShowConstructor(V.genericShowArgsNoArguments)(new z.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      Ab = new Va(function () {
    var T = v.fromMaybe(Ja.value);
    return function (ba) {
      return T(y.hush(Ya(ba)));
    };
  }(), Y.show(qb), Y.show(qb)),
      Ra = new N.Functor(function (T) {
    return function (ba) {
      if (ba instanceof Ha) return Ha.create(N.map(v.functorMaybe)(T)(ba.value0));
      if (ba instanceof Sa) return Sa.create(N.map(v.functorMaybe)(T)(ba.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 363, column 1 - line 365, column 48): " + [T.constructor.name, ba.constructor.name]);
    };
  }),
      rb = function rb(T) {
    return function (ba) {
      return function (Ia) {
        return e.step(Ia)(function () {
          var Ca = v.isJust(Ia) ? !0 : !1;
          return b.bind(k.widgetBind)(p.select(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([l.value(v.maybe("")(ba.toOptionValue)(Ia)), N.map(f.functorProps)(function () {
            var Na = ba.fromOptionValue;
            return function (Ua) {
              return Na(l.unsafeTargetValue(Ua));
            };
          }())(l.onChange)])(r.cons(p.option(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([l.disabled(Ca)])([p.text(g.widgetLiftWidget)("Select ...")]))(N.mapFlipped(N.functorArray)(u.upFromIncluding(T.Enum1())(ka.unfoldable1Array)(C.bottom(T.Bounded0())))(function (Na) {
            return p.option(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([l.value((0, ba.toOptionValue)(Na))])([p.text(g.widgetLiftWidget)((0, ba.toOptionLabel)(Na))]);
          }))))(function (Na) {
            return q.pure(k.widgetApplicative)(rb(T)(ba)(new v.Just(Na)));
          });
        }());
      };
    };
  },
      Pa = function Pa(T) {
    return function (ba) {
      return function (Ia) {
        return function (Ca) {
          return function (Na) {
            return E.fold(T)(Ia)(N.map(ba)(Ca)(Na));
          };
        };
      };
    };
  },
      fb = function fb(T) {
    T = Pa(E.foldableMaybe)(v.functorMaybe)(B.monoidString)(va.toString)(T);
    T = e.debounce(B.monoidArray)(1E3)(T)(hb);
    return cb(T);
  },
      ib = function ib(T) {
    return v.maybe(B.mempty(k.widgetMonoid(B.monoidArray)))(function (ba) {
      return p.div(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([l.style({
        color: "red"
      })])([p.text(g.widgetLiftWidget)(Y.show(T)(ba))]);
    });
  },
      sb = new D.Eq(L.genericEq(Xa)(L.genericEqSum(L.genericEqConstructor(L.genericEqNoArguments))(L.genericEqConstructor(L.genericEqNoArguments)))),
      tb = new G.Ord(function () {
    return sb;
  }, function (T) {
    return function (ba) {
      return U.genericCompare(Xa)(U.genericOrdSum(U.genericOrdConstructor(U.genericOrdNoArguments))(U.genericOrdConstructor(U.genericOrdNoArguments)))(T)(ba);
    };
  }),
      Bb = new u.Enum(function () {
    return tb;
  }, M.genericPred(Xa)(M.genericEnumSum(M.genericEnumConstructor(M.genericEnumNoArguments))(J.genericTopConstructor(J.genericTopNoArguments))(M.genericEnumConstructor(M.genericEnumNoArguments))(J.genericBottomConstructor(J.genericBottomNoArguments))), M.genericSucc(Xa)(M.genericEnumSum(M.genericEnumConstructor(M.genericEnumNoArguments))(J.genericTopConstructor(J.genericTopNoArguments))(M.genericEnumConstructor(M.genericEnumNoArguments))(J.genericBottomConstructor(J.genericBottomNoArguments)))),
      lb = function lb(T) {
    return function (ba) {
      return ba instanceof v.Nothing ? "(None)" : Ta(T)(ba);
    };
  },
      Cb = new Va(function (T) {
    return y.hush(K.readBoolean(T));
  }, lb(Y.showBoolean), Ta(Y.showBoolean)),
      m = new Va(function () {
    var T = b.join(v.bindMaybe);
    return function (ba) {
      return T(y.hush(K.readInstitutionContactType(ba)));
    };
  }(), lb(da.showInstitutionContactType), Ta(da.showInstitutionContactType)),
      Wa = new Va(function () {
    var T = b.join(v.bindMaybe);
    return function (ba) {
      return T(y.hush(K.readPolicyType(ba)));
    };
  }(), lb(da.showPolicyType), Ta(da.showPolicyType)),
      bb = function bb(T) {
    return N.voidRight(k.widgetFunctor)(!T)(p.input(g.widgetLiftWidget)([l._type("checkbox"), l.checked(T), l.onChange]));
  },
      kb = function kb(T) {
    return e.step(T)(b.bind(k.widgetBind)(bb(T))(function (ba) {
      return q.pure(k.widgetApplicative)(kb(ba));
    }));
  },
      Hb = new C.Bounded(function () {
    return tb;
  }, J.genericBottom(Xa)(J.genericBottomSum(J.genericBottomConstructor(J.genericBottomNoArguments))), J.genericTop(Xa)(J.genericTopSum(J.genericTopConstructor(J.genericTopNoArguments)))),
      Ib = new u.BoundedEnum(function () {
    return Hb;
  }, function () {
    return Bb;
  }, M.genericCardinality(Xa)(M.genericBoundedEnumSum(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments))(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments))), M.genericFromEnum(Xa)(M.genericBoundedEnumSum(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments))(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments))), M.genericToEnum(Xa)(M.genericBoundedEnumSum(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments))(M.genericBoundedEnumConstructor(M.genericBoundedEnumNoArguments)))),
      Db = new w.Apply(function () {
    return Ra;
  }, function (T) {
    return function (ba) {
      if (T instanceof Ha && ba instanceof Ha || T instanceof Ha && ba instanceof Sa || T instanceof Sa && ba instanceof Ha) return Ha.create(w.apply(v.applyMaybe)(T.value0)(ba.value0));
      if (T instanceof Sa && ba instanceof Sa) return Sa.create(w.apply(v.applyMaybe)(T.value0)(ba.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 366, column 1 - line 370, column 63): " + [T.constructor.name, ba.constructor.name]);
    };
  }),
      Jb = new q.Applicative(function () {
    return Db;
  }, function (T) {
    return Ha.create(new v.Just(T));
  }),
      Eb = function Eb(T) {
    return function (ba) {
      var Ia = X.snd(ba),
          Ca = X.fst(ba),
          Na = new Ha(v.Nothing.value);

      ba = function () {
        var ja = G.max(G.ordInt)(0)(Ca - r.length(Ia) | 0);
        return P.append(P.semigroupArray)(N.map(N.functorArray)(q.pure(Jb))(Ia))(N.mapFlipped(N.functorArray)(nb(1)(ja))(function (fa) {
          return Na;
        }));
      }();

      var Ua = function Ua(ja) {
        return e.step(ja)(b.bind(k.widgetBind)(N.voidRight(k.widgetFunctor)(Sa.create(ab(ja)))(p.button(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([l.onClick, ea.deleteItem])([p.text(g.widgetLiftWidget)("Delete")])))(function (fa) {
          return q.pure(k.widgetApplicative)(Ua(fa));
        }));
      },
          S = function S(ja) {
        return p.li_(h.shiftMapCofree(B.monoidArray))([])(b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(T(ab(ja)))(function (fa) {
          return b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(Ua(new Ha(fa)))(function (oa) {
            return q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(oa);
          });
        }));
      },
          Z = function Z(ja) {
        if (ja instanceof Sa) return e.step(new Sa(v.Nothing.value))(B.mempty(k.widgetMonoid(B.monoidArray)));
        if (ja instanceof Ha) return S(ja);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 397, column 23 - line 399, column 35): " + [ja.constructor.name]);
      };

      return p.div_(h.shiftMapCofree(B.monoidArray))([])(b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(function (ja) {
        return function (fa) {
          return e.loopS(B.monoidArray)(new X.Tuple(ja, fa))(function (oa) {
            return p.ul_(h.shiftMapCofree(B.monoidArray))([])(function () {
              X.fst(oa);
              var wa = X.snd(oa);
              return b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(xa.traverse(xa.traversableArray)(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(Z)(wa))(function (Fa) {
                return b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(e.step(0)(N.voidRight(k.widgetFunctor)(q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(1))(p.button(k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([l.onClick, ea.addItem])([p.text(g.widgetLiftWidget)("Add item")]))))(function (La) {
                  var Ma = r.filter(pb)(Fa),
                      Za = r.length(Ma) + La | 0;
                  La = N.mapFlipped(N.functorArray)(nb(1)(La))(function (gb) {
                    return Na;
                  });
                  return q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(X.Tuple.create(Za)(P.append(P.semigroupArray)(Ma)(La)));
                });
              });
            }());
          });
        };
      }(Ca)(ba))(function (ja) {
        return q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(F.second(F.strongFn)(function () {
          var fa = N.map(N.functorArray)(ab);
          return function (oa) {
            return r.catMaybes(fa(oa));
          };
        }())(ja));
      }));
    };
  };

  c.menuSignal = rb;
  c.textInput = fb;

  c.dateInput = function (T) {
    var ba = qa.unsafePerformEffect(function (Na) {
      return function () {
        var Ua = ua.nowDateTime();
        Ua = v.fromMaybe(Ua)(y.hush(Na));
        Ua = na["try"](aa.dateTimeToStr(Ua))();
        return t.lmap(y.bifunctorEither)(Y.show(na.showError))(Ua);
      };
    }(T));
    T = b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)));
    var Ia = q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)));
    if (ba instanceof y.Left) var Ca = "";else if (ba instanceof y.Right) Ca = va.toString(ba.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 170, column 31 - line 172, column 34): " + [ba.constructor.name]);
    return T(Ia(Ca))(function (Na) {
      var Ua = b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray))),
          S = q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)));
      if (ba instanceof y.Left) var Z = ba.value0;else if (ba instanceof y.Right) Z = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 173, column 21 - line 175, column 18): " + [ba.constructor.name]);
      return Ua(S(Z))(function (ja) {
        return b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(p.div_(h.shiftMapCofree(B.monoidArray))([l._id("mjUI_dateInput")])(fb(va.fromString(Na))))(function (fa) {
          return b.discard(b.discardUnit)(h.bindCofree(k.widgetAlternative(B.monoidArray)))(q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(qa.unsafePerformEffect(Qa("mjUI_dateInput")("INPUT")(Na))))(function () {
            return b.discard(b.discardUnit)(h.bindCofree(k.widgetAlternative(B.monoidArray)))(e.display(function () {
              if (ba instanceof y.Right) return B.mempty(k.widgetMonoid(B.monoidArray));
              if (ba instanceof y.Left) return ib(Y.showString)(new v.Just(ba.value0));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 179, column 13 - line 181, column 40): " + [ba.constructor.name]);
            }()))(function () {
              if (fa instanceof v.Just) return q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(qa.unsafePerformEffect(N.map(ia.functorEffect)(t.lmap(y.bifunctorEither)(Y.show(na.showError)))(na["try"](K.parseDate(fa.value0)))));
              if (fa instanceof v.Nothing) return q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(new y.Left("no date input"));
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
      return function (Ia) {
        return ba(O.natToInt(Ia));
      };
    }()))(va.fromString);
    return b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(fb(T))(function (ba) {
      return q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(N.map(v.functorMaybe)(function () {
        var Ia = Ga.readInt(10);
        return function (Ca) {
          return O.intToNat(I.round(Ia(va.toString(Ca))));
        };
      }())(ba));
    });
  };

  c.urlInput = function (T) {
    if (T instanceof y.Left) var ba = "";else if (T instanceof y.Right) ba = va.toString(Oa.urlToNEString(T.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 218, column 15 - line 220, column 48): " + [T.constructor.name]);
    if (T instanceof y.Left) var Ia = T.value0;else if (T instanceof y.Right) Ia = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 214, column 15 - line 216, column 20): " + [T.constructor.name]);
    return b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(fb(va.fromString(ba)))(function (Ca) {
      var Na = b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray))),
          Ua = q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)));
      if (Ca instanceof v.Nothing) Ca = new y.Left(Ia);else if (Ca instanceof v.Just) Ca = Oa.parsePublicURL(va.toString(Ca.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 205, column 19 - line 207, column 46): " + [Ca.constructor.name]);
      return Na(Ua(Ca))(function (S) {
        return b.discard(b.discardUnit)(h.bindCofree(k.widgetAlternative(B.monoidArray)))(e.display(function () {
          if (S instanceof y.Right) return B.mempty(k.widgetMonoid(B.monoidArray));
          if (S instanceof y.Left) return ib(Y.showString)(new v.Just(S.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 208, column 13 - line 210, column 40): " + [S.constructor.name]);
        }()))(function () {
          return q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(S);
        });
      });
    });
  };

  c.emailInput = function (T) {
    if (T instanceof y.Left) var ba = "";else if (T instanceof y.Right) ba = ha.toString(T.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 238, column 15 - line 240, column 33): " + [T.constructor.name]);
    if (T instanceof y.Left) var Ia = T.value0;else if (T instanceof y.Right) Ia = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 15 - line 236, column 20): " + [T.constructor.name]);
    return b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(fb(va.fromString(ba)))(function (Ca) {
      var Na = b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray))),
          Ua = q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)));
      if (Ca instanceof v.Nothing) Ca = new y.Left(Ia);else if (Ca instanceof v.Just) Ca = Ea.validate(va.toString(Ca.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 225, column 21 - line 227, column 43): " + [Ca.constructor.name]);
      return Na(Ua(Ca))(function (S) {
        return b.discard(b.discardUnit)(h.bindCofree(k.widgetAlternative(B.monoidArray)))(e.display(function () {
          if (S instanceof y.Right) return B.mempty(k.widgetMonoid(B.monoidArray));
          if (S instanceof y.Left) return ib(Y.showString)(new v.Just(S.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 228, column 13 - line 230, column 40): " + [S.constructor.name]);
        }()))(function () {
          return q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(S);
        });
      });
    });
  };

  c.checkBoxS = kb;
  c.showDescSig = jb;

  c.mkDesc = function (T) {
    return function (ba) {
      var Ia = db(T)(vb),
          Ca = n.alt(k.widgetAlt(B.monoidArray))(p.text(g.widgetLiftWidget)(Ia))(p["code'"](k.widgetMultiAlternative(B.monoidArray))(k.widgetShiftMap)([p.text(g.widgetLiftWidget)(" ")]));
      return ba && !pa["null"](Ia) ? Ca : B.mempty(k.widgetMonoid(B.monoidArray));
    };
  };

  c.FreeTextPolicy = Ja;

  c.checkPolicy = function (T) {
    return function (ba) {
      if (T instanceof Ja) {
        var Ia = N.mapFlipped(y.functorEither);
        ba = va.fromString(pa.trim(ba));
        if (ba instanceof v.Just) ba = new y.Right(ba.value0);else if (ba instanceof v.Nothing) ba = new y.Left("Empty string when NonEmptyString expected.");else throw Error("Failed pattern match at Metajelo.FormUtil (line 438, column 22 - line 440, column 63): " + [ba.constructor.name]);
        return Ia(ba)(da.FreeTextPolicy.create);
      }

      if (T instanceof Ka) return N.mapFlipped(y.functorEither)(Oa.parsePublicURL(ba))(da.RefPolicy.create);
      throw Error("Failed pattern match at Metajelo.FormUtil (line 348, column 25 - line 350, column 52): " + [T.constructor.name]);
    };
  };

  c.polPolTypeIs = function (T) {
    if (T instanceof da.FreeTextPolicy) return Ja.value;
    if (T instanceof da.RefPolicy) return Ka.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 353, column 18 - line 355, column 29): " + [T.constructor.name]);
  };

  c.arrayView = Eb;

  c.nonEmptyArrayView = function (T) {
    return function (ba) {
      return b.bind(h.bindCofree(k.widgetAlternative(B.monoidArray)))(Eb(T)(F.second(F.strongFn)(Pa(E.foldableMaybe)(v.functorMaybe)(B.monoidArray)(x.toArray))(ba)))(function (Ia) {
        return q.pure(h.applicativeCofree(k.widgetAlternative(B.monoidArray)))(F.second(F.strongFn)(x.fromArray)(Ia));
      });
    };
  };

  c.errorDisplay = ib;

  c.runEffectInit = function (T) {
    return function (ba) {
      return e.step(T)(b.bind(k.widgetBind)(Da.liftEffect(k.widgetMonadEff(B.monoidArray))(ba))(function (Ia) {
        return q.pure(k.widgetApplicative)(e.step(Ia)(d.empty(k.widgetPlus(B.monoidArray))));
      }));
    };
  };

  c.evTargetElem = function (T) {
    return N.map(ia.functorEffect)(ya.fromNode)(ra.target(T));
  };

  c.getInputTextLE = function (T) {
    return function (ba) {
      return Da.liftEffect(T)(zb(ba));
    };
  };

  c.isOptionMaybeBoolean = Cb;
  c.isOptionIdentifierType = yb;
  c.isOptionInstitutionType = ob;
  c.isOptionMaybeInstitutionContactType = m;
  c.isOptionMaybePolicyType = Wa;
  c.isOptionRelationType = xb;
  c.isOptionResourceTypeGeneral = wb;
  c.boundedEnumPolPolType = Ib;
  c.isOptionPolPolType = Ab;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var c = a["Metajelo.View"],
      e = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      f = a["Concur.React.DOM"],
      k = a["Concur.React.Props"],
      p = a["Control.Alt"],
      l = a["Control.Bind"],
      n = a["Control.Category"],
      q = a["Data.Array"],
      w = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      h = a["Data.Foldable"],
      d = a["Data.Functor"],
      r = a["Data.HeytingAlgebra"],
      x = a["Data.Maybe"],
      t = a["Data.Monoid"],
      C = a["Data.Natural"],
      y = a["Data.Profunctor.Strong"],
      u = a["Data.Semigroup"],
      D = a["Data.Show"],
      E = a["Data.String.CodePoints"],
      N = a["Data.String.NonEmpty.Internal"],
      H = a["Data.String.Utils"],
      J = a["Data.Unfoldable"],
      M = a["Data.Unfoldable1"],
      L = a["DataCite.Types.Common"],
      U = a["Foreign.Object"],
      V = a["Metajelo.CSS.Common.ClassNames"],
      I = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      v = a["Metajelo.CSS.Web.ClassProps"],
      B = a["Metajelo.CSS.Web.Util"],
      O = a["Metajelo.Types"],
      G = a["Text.Email.Parser"],
      F = a["Text.URL.Validate"],
      P = function () {
    var K = d.map(d.functorArray)(E.singleton);
    return function (aa) {
      return K(E.toCodePointArray(aa));
    };
  }(),
      Y = function Y(K) {
    var aa = f.text(K);
    return function (ra) {
      return aa(N.toString(ra));
    };
  },
      pa = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)(" ")]),
      va = function () {
    var K = h.intercalate(h.foldableArray)(t.monoidArray)([pa]),
        aa = d.map(d.functorArray)(M.singleton(M.unfoldable1Array));
    return function (ra) {
      return K(aa(ra));
    };
  }(),
      z = function z(K) {
    return f.div(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.institutionPolicy])(va([function (aa) {
      var ra = function () {
        if (aa instanceof x.Nothing) return {
          text: "May apply to product (unverified)",
          cls: I.appliesMaybe
        };
        if (aa instanceof x.Just && aa.value0) return {
          text: "Applies to product",
          cls: I.appliesYes
        };
        if (aa instanceof x.Just && !aa.value0) return {
          text: "Does not apply to product",
          cls: I.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 272, column 10 - line 275, column 75): " + [aa.constructor.name]);
      }();

      return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([B.cList([V.applies, ra.cls])])([function (ha) {
        return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.appliesInfo])([f.text(e.widgetLiftWidget)(ha)]);
      }(ra.text)]);
    }(K.appliesToProduct), h.foldMap(h.foldableMaybe)(g.widgetMonoid(t.monoidArray))(function (aa) {
      return f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.policyType])([f.text(e.widgetLiftWidget)(D.show(O.showPolicyType)(aa))]), f.text(e.widgetLiftWidget)(" Policy:")]);
    })(K.policyType), function (aa) {
      var ra = f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.policy]),
          ha = M.singleton(M.unfoldable1Array);
      if (aa instanceof O.FreeTextPolicy) aa = Y(e.widgetLiftWidget)(aa.value0);else if (aa instanceof O.RefPolicy) aa = F.urlToString(aa.value0), aa = f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([f.text(e.widgetLiftWidget)(aa)]);else throw Error("Failed pattern match at Metajelo.View (line 265, column 5 - line 268, column 40): " + [aa.constructor.name]);
      return ra(ha(aa));
    }(K.policy)]));
  },
      xa = function xa(K) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.institutionName])([Y(e.widgetLiftWidget)(K.institutionName)]);
  },
      X = function X(K) {
    return function (aa) {
      return h.foldMap(h.foldableMaybe)(t.monoidArray)(n.identity(n.categoryFn))(q.init(aa));
    };
  },
      ka = function ka(K) {
    return function (aa) {
      return function (ra) {
        return function (ha) {
          return function (Ea) {
            var Oa = U.fromFoldableWith(K)(u.append(ha)),
                Q = d.map(aa)(y.fanout(n.categoryFn)(y.strongFn)(Ea)(M.singleton(ra)));
            return function (ya) {
              return Oa(Q(ya));
            };
          };
        };
      };
    };
  },
      Aa = function Aa(K) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.basicMetadata, v.creatorList])(d.mapFlipped(d.functorArray)(w.toArray(K))(function (aa) {
      return f.span_(g.widgetShiftMap)([v.creator])(Y(e.widgetLiftWidget)(aa));
    }));
  },
      R = function R(K) {
    var aa = G.toString(K.emailAddress),
        ra = f.text(e.widgetLiftWidget);
    if (K.contactType instanceof x.Nothing) K = ".";else if (K.contactType instanceof x.Just) K = " (" + (D.show(O.showInstitutionContactType)(K.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 199, column 24 - line 201, column 41): " + [K.contactType.constructor.name]);
    ra = ra(K);
    return f.span_(g.widgetShiftMap)([v.institutionContact])(p.alt(g.widgetAlt(t.monoidArray))(p.alt(g.widgetAlt(t.monoidArray))(f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)("Institution Contact: ")]))(f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.contactEmail, k.href("mailto:" + aa)])([f.text(e.widgetLiftWidget)(aa)])))(f.span_(g.widgetShiftMap)([v.contactType])(ra)));
  },
      ia = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)(", ")]),
      Da = function Da(K) {
    return f.span_(g.widgetShiftMap)([v.formatList])(h.intercalate(h.foldableArray)(g.widgetMonoid(t.monoidArray))(ia)(d.mapFlipped(d.functorArray)(K)(function (aa) {
      return f.span_(g.widgetShiftMap)([v.format])(Y(e.widgetLiftWidget)(aa));
    })));
  },
      na = function na(K) {
    return f.span_(g.widgetShiftMap)([])(h.intercalate(h.foldableArray)(g.widgetMonoid(t.monoidArray))(ia)(d.mapFlipped(d.functorArray)(w.toArray(K))(function (aa) {
      return f.span_(g.widgetShiftMap)([v.title])(Y(e.widgetLiftWidget)(aa));
    })));
  },
      ua = function ua(K) {
    return f["cite'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([Y(e.widgetLiftWidget)(K)]);
  },
      qa = function qa(K) {
    if (K.identifierType instanceof L.ARK) return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(N.toString(K.identifier))])([ua(K.identifier)]);

    if (K.identifierType instanceof L.ArXiv) {
      var aa = "https://arxiv.org/abs/" + N.toString(K.identifier);
      return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([ua(K.identifier)]);
    }

    if (K.identifierType instanceof L.Bibcode) return aa = "https://ui.adsabs.harvard.edu/abs/" + (N.toString(K.identifier) + "/abstract"), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([ua(K.identifier)]);
    if (K.identifierType instanceof L.DOI) return aa = "https://doi.org/" + N.toString(K.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([ua(K.identifier)]);
    if (K.identifierType instanceof L.EAN13) return ua(K.identifier);
    if (K.identifierType instanceof L.EISSN) return aa = "https://www.worldcat.org/ISSN/" + N.toString(K.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([ua(K.identifier)]);
    if (K.identifierType instanceof L.Handle) return aa = "http://hdl.handle.net/" + N.toString(K.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([ua(K.identifier)]);
    if (K.identifierType instanceof L.IGSN) return aa = "http://igsn.org/" + N.toString(K.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([ua(K.identifier)]);
    if (K.identifierType instanceof L.ISBN) return ua(K.identifier);
    if (K.identifierType instanceof L.ISSN) return aa = "https://www.worldcat.org/ISSN/" + N.toString(K.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([ua(K.identifier)]);
    if (K.identifierType instanceof L.ISTC) return ua(K.identifier);
    if (K.identifierType instanceof L.LISSN) return aa = "https://www.worldcat.org/ISSN/" + N.toString(K.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([ua(K.identifier)]);
    if (K.identifierType instanceof L.LSID) return aa = "http://www.lsid.info/resolver/?lsid=" + N.toString(K.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([ua(K.identifier)]);
    if (K.identifierType instanceof L.PMID) return aa = "https://www.ncbi.nlm.nih.gov/pubmed/" + N.toString(K.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(aa)])([ua(K.identifier)]);
    if (K.identifierType instanceof L.PURL) return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(N.toString(K.identifier))])([ua(K.identifier)]);
    if (K.identifierType instanceof L.UPC) return ua(K.identifier);
    if (K.identifierType instanceof L.URL) return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([k.href(N.toString(K.identifier))])([ua(K.identifier)]);
    if (K.identifierType instanceof L.URN) return ua(K.identifier);
    throw Error("Failed pattern match at Metajelo.View (line 221, column 1 - line 221, column 47): " + [K.constructor.name]);
  },
      Ba = function Ba(K) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.identifier])([f.span_(g.widgetShiftMap)([v.idType])(f.text(e.widgetLiftWidget)(D.show(L.showIdentifierType)(K.identifierType))), f.span_(g.widgetShiftMap)([v.idUrl])(qa(K))]);
  },
      Ga = function Ga(K) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.relatedId])([f.span_(g.widgetShiftMap)([v.relType])(f.text(e.widgetLiftWidget)(D.show(L.showRelationType)(K.relationType))), pa, Ba({
      identifier: K.identifier,
      identifierType: K.identifierType
    })]);
  },
      ea = function ea(K) {
    return function (aa) {
      return function (ra) {
        if (aa) return K;

        if (h.any(h.foldableArray)(r.heytingAlgebraBoolean)(function (Ea) {
          return H.endsWith(Ea)(K);
        })([";", ".", ","])) {
          var ha = P(K);
          return H.fromCharArray(X(t.monoidString)(ha)) + ra;
        }

        return K + ra;
      };
    };
  },
      la = function la(K) {
    var aa = xa(K),
        ra = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)("("), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.institutionId])([Ba(K.institutionID)]), f.text(e.widgetLiftWidget)("; "), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.institutionType])([f.text(e.widgetLiftWidget)(D.show(O.showInstitutionType)(K.institutionType))]), f.text(e.widgetLiftWidget)(ea(")")(x.isNothing(K.superOrganizationName))(","))]);
    if (K.superOrganizationName instanceof x.Nothing) var ha = t.mempty(g.widgetMonoid(t.monoidArray));else if (K.superOrganizationName instanceof x.Just) ha = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)("a member of "), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.superOrg])([f.text(e.widgetLiftWidget)(ea(N.toString(K.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 161, column 7 - line 167, column 10): " + [K.superOrganizationName.constructor.name]);
    return va([aa, ra, ha, R(K.institutionContact), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.sustainability])([f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.missionStatement, k.href(F.urlToString(K.institutionSustainability.missionStatementURL))])([f.text(e.widgetLiftWidget)("Mission Statement")]), f.text(e.widgetLiftWidget)("; "), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.fundingStatement, k.href(F.urlToString(K.institutionSustainability.fundingStatementURL))])([f.text(e.widgetLiftWidget)("Funding Statement")]), f.text(e.widgetLiftWidget)(".")]), f.ul(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.institutionPolicies])(d.map(d.functorArray)(function (Ea) {
      return f["li'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([z(Ea)]);
    })(w.toArray(K.institutionPolicies))), function (Ea) {
      if (Ea) Ea = "Versioned";else {
        if (Ea) throw Error("Failed pattern match at Metajelo.View (line 188, column 14 - line 190, column 31): " + [Ea.constructor.name]);
        Ea = "Unversioned";
      }
      return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.versioning])([f.text(e.widgetLiftWidget)(Ea)]);
    }(K.versioning)]);
  },
      da = function da(K) {
    if (K.resourceID instanceof x.Just) var aa = f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.resourceId])([Ba(K.resourceID.value0), f.text(e.widgetLiftWidget)(".")]);else if (K.resourceID instanceof x.Nothing) aa = t.mempty(g.widgetMonoid(t.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 127, column 17 - line 129, column 24): " + [K.resourceID.constructor.name]);
    var ra = [Aa(K.basicMetadata.creators), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.basicMetadata, v.pubyear])([f.text(e.widgetLiftWidget)(D.show(D.showInt)(C.natToInt(K.basicMetadata.publicationYear)))]), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.basicMetadata, v.title])([na(K.basicMetadata.titles), f.text(e.widgetLiftWidget)(ea("")(x.isNothing(K.resourceID))(","))])];
    aa = u.append(u.semigroupArray)(ra)([f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([xa(K.location), f.text(e.widgetLiftWidget)(".")]), aa]);
    return f.div(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.product])(va(u.append(u.semigroupArray)([f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.productCitation])([f["cite'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)(va(aa))])])(u.append(u.semigroupArray)([Da(K.format)])(la(K.location)))));
  };

  c.spacify = va;

  c.mkRecordWidget = function (K) {
    var aa = function () {
      var Ea = d.map(b.functorNonEmptyArray)(function (Oa) {
        return f.li(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.relatedId])([Oa]);
      })(d.map(b.functorNonEmptyArray)(Ga)(K.relatedIdentifiers));
      return f.ul(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.relatedIdList])(w.toArray(Ea));
    }(),
        ra = ka(b.foldableNonEmptyArray)(b.functorNonEmptyArray)(b.unfoldable1NonEmptyArray)(b.semigroupNonEmptyArray)(function (Ea) {
      return D.show(L.showResourceTypeGeneral)(Ea.resourceType.generalType) + (": " + Ea.resourceType.description);
    })(K.supplementaryProducts),
        ha = function ha(Ea) {
      Ea = l.join(l.bindArray)(J.fromMaybe(J.unfoldableArray)(d.map(x.functorMaybe)(w.toArray)(U.lookup(Ea)(ra))));
      var Oa = f.span_(g.widgetShiftMap)([v.resourceType])(h.fold(h.foldableMaybe)(g.widgetMonoid(t.monoidArray))(d.mapFlipped(x.functorMaybe)(q.head(Ea))(function (Q) {
        return p.alt(g.widgetAlt(t.monoidArray))(p.alt(g.widgetAlt(t.monoidArray))(f.span_(g.widgetShiftMap)([v.resourceTypeGen])(f.text(e.widgetLiftWidget)(D.show(L.showResourceTypeGeneral)(Q.resourceType.generalType))))(f.span_(g.widgetShiftMap)([v.resourceTypeDescr])(f.text(e.widgetLiftWidget)(Q.resourceType.description))))(f["br'"](e.widgetLiftWidget));
      })));
      return f["div'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)(q.cons(Oa)(d.map(d.functorArray)(da)(Ea)));
    };

    D.show(L.showIdentifierType)(K.identifier.identifierType);
    return f.div(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.record])([f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.productsHeader])([f.span_(g.widgetShiftMap)([v.recordId])(Ba(K.identifier))]), f.ul(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.productList])(d.map(d.functorArray)(function (Ea) {
      return f.li_(g.widgetShiftMap)([v.productGroup])(ha(Ea));
    })(U.keys(ra))), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([v.relatedIdsHeader])([]), aa]);
  };

  c.mkSupplementaryProductWidget = da;
  c.locElems = la;
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
            k;

        for (k in g) {
          ({}).hasOwnProperty.call(g, k) && (f[k] = g[k]);
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
    return function (k) {
      return function (p) {
        return function (l) {
          return g.unsafeGet(e.reflectSymbol(f)(p))(l);
        };
      };
    };
  };

  c.insert = function (f) {
    return function (k) {
      return function (p) {
        return function (l) {
          return function (n) {
            return function (q) {
              return g.unsafeSet(e.reflectSymbol(f)(l))(n)(q);
            };
          };
        };
      };
    };
  };

  c["delete"] = function (f) {
    return function (k) {
      return function (p) {
        return function (l) {
          return function (n) {
            return g.unsafeDelete(e.reflectSymbol(f)(l))(n);
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
      k = a["Type.Data.RowList"],
      p = function p(l) {
    this.keysImpl = l;
  };

  a = new p(function (l) {
    return g.mempty(e.monoidList);
  });

  c.keys = function (l) {
    return function (n) {
      return function (q) {
        return (0, n.keysImpl)(k.RLProxy.value);
      };
    };
  };

  c.nilKeys = a;

  c.consKeys = function (l) {
    return function (n) {
      return new p(function (q) {
        q = (0, n.keysImpl)(k.RLProxy.value);
        var w = f.reflectSymbol(l)(f.SProxy.value);
        return new e.Cons(w, q);
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
      k = a["Data.Array"],
      p = a["Data.Function.Uncurried"],
      l = a["Data.Identity"],
      n = a["Data.List.Types"],
      q = a["Data.Maybe"],
      w = a["Data.Symbol"],
      b = a["Foreign.Object"],
      h = a.Record,
      d = a["Record.Extra"],
      r = a["Type.Data.Row"],
      x = function () {
    function I() {}

    I.value = new I();
    return I;
  }(),
      t = function t(I) {
    this.getAllOption = I;
  },
      C = function C(I) {
    this["getAll'"] = I;
  },
      y = function y(I) {
    this.fromRecordOption = I;
  },
      u = function u(I) {
    this["fromRecord'"] = I;
  },
      D = function D(I) {
    return function (v) {
      return function (B) {
        B = k.fromFoldable(n.foldableList)(d.keys()(B)(r.RProxy.value));
        return p.runFn2(e.pickFn)(B);
      };
    };
  };

  a = new t(function (I) {
    return function (v) {
      return new q.Just({});
    };
  });

  var E = b.empty,
      N = new y(function (I) {
    return function (v) {
      return E;
    };
  }),
      H = function H(I) {
    return function (v) {
      return function (B) {
        return function (O) {
          var G = w.reflectSymbol(I)(w.SProxy.value),
              F = b.alter(function (P) {
            return v(P);
          })(G)(O);
          O = v(b.lookup(G)(O));
          return {
            option: F,
            value: O
          };
        };
      };
    };
  },
      J = function J(I) {
    return function (v) {
      return function (B) {
        return function (O) {
          return function (G) {
            return H(I)(function (F) {
              return q.Nothing.value;
            })(O)(G).option;
          };
        };
      };
    };
  },
      M = function M(I) {
    return function (v) {
      return function (B) {
        return function (O) {
          return H(I)(function (G) {
            return G;
          })(B)(O).value;
        };
      };
    };
  },
      L = function L(I) {
    return function (v) {
      return function (B) {
        return function (O) {
          return function (G) {
            return H(I)(function (F) {
              return new q.Just(O);
            })(B)(G).option;
          };
        };
      };
    };
  },
      U = function U(I) {
    return function (v) {
      return function (B) {
        return function (O) {
          return function (G) {
            if (O instanceof q.Just) return L(I)()(B)(O.value0)(G);
            if (O instanceof q.Nothing) return G;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [O.constructor.name]);
          };
        };
      };
    };
  },
      V = function V(I) {
    return function (v) {
      return function (B) {
        return function (O) {
          return function (G) {
            return function (F) {
              return H(I)(function (P) {
                return new q.Just(G);
              })(O)(F).option;
            };
          };
        };
      };
    };
  };

  c.fromRecord = function (I) {
    return I["fromRecord'"];
  };

  c.empty = E;
  c.get = M;

  c.getAll = function (I) {
    return I["getAll'"];
  };

  c.getSubset = function (I) {
    return function (v) {
      return function (B) {
        return function (O) {
          return function (G) {
            return (0, O["getAll'"])(D()()(B)(G));
          };
        };
      };
    };
  };

  c.getWithDefault = function (I) {
    return function (v) {
      return function (B) {
        return function (O) {
          return function (G) {
            G = M(I)()(O)(G);
            if (G instanceof q.Just) return G.value0;
            if (G instanceof q.Nothing) return B;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [G.constructor.name]);
          };
        };
      };
    };
  };

  c.maySetOptState = function (I) {
    return function (v) {
      return function (B) {
        return function (O) {
          return function (G) {
            return g.put(f.monadStateStateT(l.monadIdentity))(U(I)()(B)(O)(G));
          };
        };
      };
    };
  };

  c.fromRecordAny = function (I) {
    return function (v) {
      return new u((0, I.fromRecordOption)(x.value));
    };
  };

  c.fromRecordOptionNil = N;

  c.fromRecordOptionCons = function (I) {
    return function (v) {
      return function (B) {
        return function (O) {
          return function (G) {
            return function (F) {
              return new y(function (P) {
                return function (Y) {
                  var pa = h["delete"](I)()()(w.SProxy.value)(Y);
                  pa = (0, v.fromRecordOption)(x.value)(pa);
                  Y = h.get(I)()(w.SProxy.value)(Y);
                  return V(I)()()(w.SProxy.value)(Y)(pa);
                };
              });
            };
          };
        };
      };
    };
  };

  c.getAllAny = function (I) {
    return function (v) {
      return new C((0, v.getAllOption)(x.value));
    };
  };

  c.getAllOptionNil = a;

  c.getAllOptionCons = function (I) {
    return function (v) {
      return function (B) {
        return function (O) {
          return function (G) {
            return function (F) {
              return new t(function (P) {
                return function (Y) {
                  var pa = J(I)()()(w.SProxy.value)(Y);
                  pa = (0, F.getAllOption)(x.value)(pa);
                  Y = M(I)()(w.SProxy.value)(Y);

                  if (pa instanceof q.Just) {
                    if (Y instanceof q.Just) return new q.Just(h.insert(I)()()(w.SProxy.value)(Y.value0)(pa.value0));
                    if (Y instanceof q.Nothing) return q.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [Y.constructor.name]);
                  }

                  if (pa instanceof q.Nothing) return q.Nothing.value;
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

    return function (k) {
      return e.toMaybe(f(k));
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
      k = a["Data.Monoid"],
      p = a["Data.Show"],
      l = a["Effect.Aff"],
      n = a["Effect.Exception"],
      q = a.Foreign,
      w = a["Web.Event.EventTarget"],
      b = a["Web.File.FileReader"],
      h = a["Web.HTML.Event.EventTypes"];

  a = function (d) {
    return function (r) {
      return function (x) {
        return l.makeAff(function (t) {
          var C = function C(y) {
            return t(g.Right.create(y));
          };

          return function () {
            var y = b.fileReader(),
                u = b.toEventTarget(y),
                D = w.eventListener(function (N) {
              return t(g.Left.create(n.error("error")));
            })(),
                E = w.eventListener(function (N) {
              return function () {
                var H = b.result(y)();
                return g.either(function (J) {
                  return t(g.Left.create(n.error(p.show(f.showNonEmptyList(q.showForeignError))(J))));
                })(C)(e.runExcept(d(H)))();
              };
            })();
            w.addEventListener(h.error)(D)(!1)(u)();
            w.addEventListener(h.load)(E)(!1)(u)();
            r(x)(y)();
            return k.mempty(l.monoidCanceler);
          };
        });
      };
    };
  }(q.readString)(b.readAsText);

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
      k = a["Concur.Core.LiftWidget"],
      p = a["Concur.Core.Props"],
      l = a["Concur.Core.Types"],
      n = a["Concur.React.DOM"],
      q = a["Concur.React.Props"],
      w = a["Concur.React.Run"],
      b = a["Control.Applicative"],
      h = a["Control.Apply"],
      d = a["Control.Bind"],
      r = a["Control.Cofree"],
      x = a["Control.Monad.Except.Trans"],
      t = a["Control.Monad.Maybe.Trans"],
      C = a["Control.Monad.State"],
      y = a["Control.Monad.State.Class"],
      u = a["Control.Monad.State.Trans"],
      D = a["Control.Monad.Writer"],
      E = a["Control.Plus"],
      N = a["Data.Array"],
      H = a["Data.Array.NonEmpty"],
      J = a["Data.Array.NonEmpty.Internal"],
      M = a["Data.Bifunctor"],
      L = a["Data.Either"],
      U = a["Data.Enum"],
      V = a["Data.Foldable"],
      I = a["Data.Functor"],
      v = a["Data.Identity"],
      B = a["Data.Maybe"],
      O = a["Data.Maybe.First"],
      G = a["Data.Monoid"],
      F = a["Data.Newtype"],
      P = a["Data.Semigroup"],
      Y = a["Data.Show"],
      pa = a["Data.String.Common"],
      va = a["Data.String.NonEmpty.Internal"],
      z = a["Data.Symbol"],
      xa = a["Data.Traversable"],
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
      Ga = a["Effect.Exception"],
      ea = a["Effect.Now"],
      la = a["Effect.Unsafe"],
      da = a.Global,
      K = a["Metajelo.CSS.UI.ClassProps"],
      aa = a["Metajelo.CSS.UI.Util"],
      ra = a["Metajelo.CSS.Web.ClassProps"],
      ha = a["Metajelo.FormUtil"],
      Ea = a["Metajelo.Types"],
      Oa = a["Metajelo.View"],
      Q = a["Metajelo.XPaths"],
      ya = a["Metajelo.XPaths.Read"],
      ca = a["Metajelo.XPaths.Write"],
      ma = a["Nonbili.DOM"],
      A = a.Option,
      W = a["Record.Extra"],
      sa = a["Text.URL.Validate"],
      ta = a["Web.DOM.Document"],
      za = a["Web.DOM.Element"],
      Ja = a["Web.File.File"],
      Ka = a["Web.File.FileList"],
      Ha = a["Web.File.FileReader.Aff"],
      Sa = a["Web.HTML"],
      Va = a["Web.HTML.HTMLDocument"],
      $a = a["Web.HTML.HTMLElement"],
      ab = a["Web.HTML.HTMLInputElement"],
      hb = a["Web.HTML.Window"],
      cb = function cb(S) {
    return function (Z) {
      return function (ja) {
        return function (fa) {
          return function (oa) {
            return I.mapFlipped(B.functorMaybe)(A.get(S)(Z)(ja)(fa))(function (wa) {
              return C.execState(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "descs_on";
              }))()(z.SProxy.value)(new B.Just(oa))))(wa);
            });
          };
        };
      };
    };
  },
      db = function db(S) {
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.title])(ha.textInput(S));
  },
      eb = function eb(S) {
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.titleList])(ha.nonEmptyArrayView(db)(S));
  },
      jb = function jb(S) {
    return function () {
      var Z = Sa.window();
      Z = hb.document(Z)();
      Z = Va.toDocument(Z);
      Z = ta.createElement("a")(Z)();
      za.setAttribute("download")("metajelo.xml")(Z)();
      za.setAttribute("href")("data:text/plain;charset=utf-8," + S)(Z)();
      Z = $a.fromElement(Z);
      if (Z instanceof B.Just) Z = $a.click(Z.value0);else if (Z instanceof B.Nothing) Z = Ba.log(qa.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + S);else throw Error("Failed pattern match at Metajelo.UI (line 129, column 26 - line 133, column 18): " + [Z.constructor.name]);
      return Z;
    };
  },
      Qa = function Qa(S) {
    return function (Z) {
      return A.getWithDefault(S)()(A.empty);
    };
  },
      nb = function nb(S) {
    var Z = va.fromString("urn:uuid:"),
        ja = A.get(new z.IsSymbol(function () {
      return "identifier";
    }))()(z.SProxy.value)(S);
    return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(function () {
      if (ja instanceof B.Just) return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(new B.Just(ja.value0));
      if (ja instanceof B.Nothing) return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(ha.runEffectInit(ka.emptyUUID)(ka.genUUID))(function (fa) {
        return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(d.bind(B.bindMaybe)(Z)(function (oa) {
          return d.bind(B.bindMaybe)(va.fromString(ka.toString(fa)))(function (wa) {
            return b.pure(B.applicativeMaybe)(P.append(va.semigroupNonEmptyString)(oa)(wa));
          });
        }));
      });
      throw Error("Failed pattern match at Metajelo.UI (line 729, column 15 - line 736, column 30): " + [ja.constructor.name]);
    }())(function (fa) {
      return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "identifier";
      }))()(z.SProxy.value)(fa)))(function () {
        return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "identifierType";
        }))()(z.SProxy.value)(new B.Just(Da.URN.value)));
      }))(S));
    });
  },
      Ya = function Ya(S) {
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.format])(ha.textInput(S));
  },
      vb = function vb(S) {
    return function (Z) {
      return n.div_(r.shiftMapCofree(G.monoidArray))([K.formatList])(d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("formatEle")(S)))(function () {
        return ha.arrayView(Ya)(Z);
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
      wb = function wb(S) {
    return function (Z) {
      var ja = I.map(J.functorNonEmptyArray)(function (Ma) {
        return Ma.title;
      })(Z.data.attributes.titles),
          fa = I.map(J.functorNonEmptyArray)(function (Ma) {
        return Ma.name;
      })(Z.data.attributes.creators);
      Z = Qa(new z.IsSymbol(function () {
        return "basicMetadata_opt";
      }))()(z.SProxy.value)(S);
      var oa = A.get(new z.IsSymbol(function () {
        return "creators";
      }))()(z.SProxy.value)(Z),
          wa = B.maybe(fa)(function (Ma) {
        return P.append(J.semigroupNonEmptyArray)(Ma)(fa);
      })(oa);
      oa = A.get(new z.IsSymbol(function () {
        return "titles";
      }))()(z.SProxy.value)(Z);
      oa = B.maybe(ja)(function (Ma) {
        return P.append(J.semigroupNonEmptyArray)(Ma)(ja);
      })(oa);
      var Fa = H.length(oa),
          La = H.length(wa);
      Z = C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "titles";
      }))()(z.SProxy.value)(new B.Just(oa))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "_numTitles";
        }))()(z.SProxy.value)(new B.Just(Fa))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "creators";
          }))()(z.SProxy.value)(new B.Just(wa))))(function () {
            return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "_numCreators";
            }))()(z.SProxy.value)(new B.Just(La)));
          });
        });
      }))(Z);
      return C.execState(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "basicMetadata_opt";
      }))()(z.SProxy.value)(new B.Just(Z))))(S);
    };
  },
      xb = function xb(S) {
    var Z = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "fundingStatementURL";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "missionStatementURL";
    }))(A.fromRecordOptionNil)()()()())()()()())())(S),
        ja = new L.Right(S.missionStatementURL),
        fa = new L.Right(S.fundingStatementURL);
    return C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(z.SProxy.value)(new B.Just(ja))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(z.SProxy.value)(new B.Just(fa))))(function () {
        return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "descs_on";
        }))()(z.SProxy.value)(new B.Just(!0)));
      });
    }))(Z);
  },
      ob = function ob(S) {
    var Z = new L.Right(S.url);
    S = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "relationType";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "url";
    }))(A.fromRecordOptionNil)()()()())()()()())())(S);
    return C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "url_Ei";
    }))()(z.SProxy.value)(new B.Just(Z))))(function () {
      return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "descs_on";
      }))()(z.SProxy.value)(new B.Just(!0)));
    }))(S);
  },
      yb = function yb(S) {
    if (S.policy instanceof Ea.FreeTextPolicy) var Z = new B.Just(S.policy.value0);else if (S.policy instanceof Ea.RefPolicy) Z = va.fromString(sa.urlToString(S.policy.value0));else throw Error("Failed pattern match at Metajelo.UI (line 438, column 20 - line 440, column 54): " + [S.policy.constructor.name]);
    var ja = A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "appliesToProduct";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "policy";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "policyType";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())())(S);
    return C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "policy_str";
    }))()(z.SProxy.value)(Z)))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "polPolType";
      }))()(z.SProxy.value)(B.Just.create(ha.polPolTypeIs(S.policy)))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "policy_ei";
        }))()(z.SProxy.value)(B.Just.create(new L.Right(S.policy)))))(function () {
          return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "descs_on";
          }))()(z.SProxy.value)(new B.Just(!0)));
        });
      });
    }))(ja);
  },
      pb = function pb(S) {
    return C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "email_Ei";
    }))()(z.SProxy.value)(B.Just.create(new L.Right(S.emailAddress)))))(function () {
      return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "descs_on";
      }))()(z.SProxy.value)(new B.Just(!0)));
    }))(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "contactType";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "emailAddress";
    }))(A.fromRecordOptionNil)()()()())()()()())())(S));
  },
      zb = function zb(S) {
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
        fa = pb(S.institutionContact),
        oa = xb(S.institutionSustainability),
        wa = I.map(J.functorNonEmptyArray)(yb)(S.institutionPolicies),
        Fa = H.length(S.institutionPolicies);
    return C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "institutionID_opt";
    }))()(z.SProxy.value)(new B.Just(ja))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "_numPolicies";
      }))()(z.SProxy.value)(new B.Just(Fa))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "iSustain_opt";
        }))()(z.SProxy.value)(new B.Just(oa))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "institutionContact_opt";
          }))()(z.SProxy.value)(new B.Just(fa))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "institutionPolicies_opt";
            }))()(z.SProxy.value)(new B.Just(wa))))(function () {
              return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "descs_on";
              }))()(z.SProxy.value)(new B.Just(!0)));
            });
          });
        });
      });
    }))(Z);
  },
      Xa = function Xa(S) {
    var Z = H.length(S.titles),
        ja = H.length(S.creators);
    return C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "_numTitles";
    }))()(z.SProxy.value)(new B.Just(Z))))(function () {
      return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "_numCreators";
      }))()(z.SProxy.value)(new B.Just(ja)));
    }))(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "creators";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "publicationYear";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "titles";
    }))(A.fromRecordOptionNil)()()()())()()()())()()()())())(S));
  },
      qb = function qb(S) {
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
        fa = I.map(B.functorMaybe)(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifier";
    }))(A.fromRecordOptionCons(new z.IsSymbol(function () {
      return "identifierType";
    }))(A.fromRecordOptionNil)()()()())()()()())()))(S.resourceID),
        oa = I.map(B.functorMaybe)(ob)(S.resourceMetadataSource),
        wa = zb(S.location),
        Fa = Xa(S.basicMetadata),
        La = N.length(S.format);
    return C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(z.SProxy.value)(new B.Just(Fa))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "resourceID_opt";
      }))()(z.SProxy.value)(fa)))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "resourceType_opt";
        }))()(z.SProxy.value)(new B.Just(ja))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "_numFormats";
          }))()(z.SProxy.value)(new B.Just(La))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(z.SProxy.value)(oa)))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(z.SProxy.value)(new B.Just(wa))))(function () {
                return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "descs_on";
                }))()(z.SProxy.value)(new B.Just(!0)));
              });
            });
          });
        });
      });
    }))(Z);
  },
      Ab = function Ab(S) {
    var Z = I.map(J.functorNonEmptyArray)(qb)(S.supplementaryProducts),
        ja = I.map(J.functorNonEmptyArray)(A.fromRecord(A.fromRecordAny(A.fromRecordOptionCons(new z.IsSymbol(function () {
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
        wa = H.length(S.supplementaryProducts),
        Fa = H.length(S.relatedIdentifiers);
    return C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
      return "identifier_opt";
    }))()(z.SProxy.value)(new B.Just(oa))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
        return "date_Ei";
      }))()(z.SProxy.value)(B.Just.create(new L.Right(S.date)))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "_numRelIds";
        }))()(z.SProxy.value)(new B.Just(Fa))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "relId_opts";
          }))()(z.SProxy.value)(new B.Just(ja))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "_numSupProds";
            }))()(z.SProxy.value)(new B.Just(wa))))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "supProd_opts";
              }))()(z.SProxy.value)(new B.Just(Z))))(function () {
                return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "descs_on";
                }))()(z.SProxy.value)(new B.Just(!0)));
              });
            });
          });
        });
      });
    }))(fa);
  },
      Ra = function () {
    var S = M.lmap(L.bifunctorEither)(function (ja) {
      return Ga.error("Error reading XML - please make sure it is well-formed.");
    }),
        Z = d.bind(l.widgetBind)(n.input(k.widgetLiftWidget)([q._type("file"), I.map(p.functorProps)(ha.evTargetElem)(q.onChange)]))(function (ja) {
      return d.bind(l.widgetBind)(qa.liftEffect(l.widgetMonadEff(G.monoidArray))(t.runMaybeT(d.bind(t.bindMaybeT(na.monadEffect))(ja)(function (fa) {
        return d.bind(t.bindMaybeT(na.monadEffect))(t.MaybeT(b.pure(na.applicativeEffect)(ab.fromElement(fa))))(function (oa) {
          return d.bind(t.bindMaybeT(na.monadEffect))(t.MaybeT(ab.files(oa)))(function (wa) {
            return d.bind(t.bindMaybeT(na.monadEffect))(t.MaybeT(b.pure(na.applicativeEffect)(Ka.item(0)(wa))))(function (Fa) {
              return b.pure(t.applicativeMaybeT(na.monadEffect))(Ja.toBlob(Fa));
            });
          });
        });
      }))))(function (fa) {
        if (fa instanceof B.Nothing) return Z;
        if (fa instanceof B.Just) return d.bind(l.widgetBind)(ua.liftAff(l.widgetMonadAff(G.monoidArray))(Ha.readAsText(fa.value0)))(function (oa) {
          return d.bind(l.widgetBind)(qa.liftEffect(l.widgetMonadEff(G.monoidArray))(x.runExceptT(d.bind(x.bindExceptT(na.monadEffect))(x.ExceptT(I.map(na.functorEffect)(S)(Ga["try"](Q.getDefaultParseEnv(oa)))))(function (wa) {
            return x.ExceptT(Ga["try"](ya.readRecord(wa)));
          }))))(function (wa) {
            if (wa instanceof L.Right) return b.pure(l.widgetApplicative)(wa.value0);

            if (wa instanceof L.Left) {
              var Fa = wa.value0;
              wa = n.div(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([]);
              var La = Z,
                  Ma = n.div_(l.widgetShiftMap)([ra.errorDisplayBox]),
                  Za = n.div_(l.widgetShiftMap)([]),
                  gb = n.span(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([ra.errorDisplay]),
                  mb = n.text(k.widgetLiftWidget);
              Fa = "Couldn't decode MetajeloXML: " + Y.show(Ga.showError)(Fa);
              return wa([La, Ma(Za(gb([mb(Fa)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 158, column 11 - line 160, column 37): " + [wa.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 151, column 7 - line 160, column 37): " + [fa.constructor.name]);
      });
    });
    return f.loopW(A.empty)(function (ja) {
      return n.div_(l.widgetShiftMap)([])(d.bind(l.widgetBind)(Z)(function (fa) {
        return b.pure(l.widgetApplicative)(Ab(fa));
      }));
    });
  }(),
      rb = function rb(S) {
    var Z = n.div_(l.widgetShiftMap)([ra.errorDisplayBox])(n.div_(l.widgetShiftMap)([])(n.span(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([ra.errorDisplay])([n.text(k.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        ja = function ja(fa) {
      return function (oa) {
        var wa = function wa(Fa) {
          return f.step(Fa)(d.bind(l.widgetBind)(n.button_(l.widgetShiftMap)([K.downloadBtn, q.onClick, q.disabled(pa["null"](Fa))])(n.text(k.widgetLiftWidget)("Download")))(function () {
            return d.bind(l.widgetBind)(qa.liftEffect(l.widgetMonadEff(G.monoidArray))(fa))(function () {
              return b.pure(l.widgetApplicative)(wa(Fa));
            });
          }));
        };

        return f.dyn(wa(oa));
      };
    };

    return n.div_(l.widgetShiftMap)([])(function () {
      var fa = da.encodeURIComponent(S);
      return d.bind(l.widgetBind)(qa.liftEffect(l.widgetMonadEff(G.monoidArray))(jb(B.fromMaybe("")(fa))))(function (oa) {
        return B.maybe(Z)(ja(oa))(fa);
      });
    }());
  },
      Pa = function () {
    var S = aa.mjUiClassPfx + "dataCiteDOI_Input",
        Z = function Z(fa) {
      var oa = n.div(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([]),
          wa = ja,
          Fa = n.div_(l.widgetShiftMap)([ra.errorDisplayBox]),
          La = n.div_(l.widgetShiftMap)([]),
          Ma = n.span(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([ra.errorDisplay]),
          Za = n.text(k.widgetLiftWidget);
      fa = "In DataCite retrieval: " + Y.show(Ga.showError)(fa);
      return oa([wa, Fa(La(Ma([Za(fa)])))]);
    },
        ja = n.div_(l.widgetShiftMap)([])(d.discard(d.discardUnit)(l.widgetBind)(I["void"](l.widgetFunctor)(n.button_(l.widgetShiftMap)([q.onClick])(n.text(k.widgetLiftWidget)("Retrieve DataCite Record"))))(function () {
      return d.bind(l.widgetBind)(n.span(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([])([n.input(k.widgetLiftWidget)([q._id(S), q.placeholder("Input DOI here")]), h.applySecond(l.widgetApply)(n.button_(l.widgetShiftMap)([q.onClick])(n.text(k.widgetLiftWidget)("Retrieve")))(ha.getInputTextLE(l.widgetMonadEff(G.monoidArray))(S)), I.voidRight(l.widgetFunctor)(B.Nothing.value)(n.button_(l.widgetShiftMap)([q.onClick])(n.text(k.widgetLiftWidget)("Cancel")))]))(function (fa) {
        if (fa instanceof B.Nothing) return ja;

        if (fa instanceof B.Just) {
          fa = sa.parsePublicURL("https://api.datacite.org/dois/" + fa.value0);
          if (fa instanceof L.Left) return Z(Ga.error(fa.value0));
          if (fa instanceof L.Right) return d.bind(l.widgetBind)(ua.liftAff(l.widgetMonadAff(G.monoidArray))(e.get(g.string)(sa.urlToString(fa.value0))))(function (oa) {
            if (oa instanceof L.Left) oa = Z(Ga.error("GET /api response failed to decode: " + e.printError(oa.value0)));else if (oa instanceof L.Right) oa = b.pure(l.widgetApplicative)(B.Just.create(ia.readRecordJSON(oa.value0.body)));else throw Error("Failed pattern match at Metajelo.UI (line 200, column 27 - line 203, column 67): " + [oa.constructor.name]);
            return oa;
          });
          throw Error("Failed pattern match at Metajelo.UI (line 193, column 21 - line 197, column 32): " + [fa.constructor.name]);
        }

        throw Error("Failed pattern match at Metajelo.UI (line 191, column 7 - line 197, column 32): " + [fa.constructor.name]);
      });
    }));

    return f.loopW(B.Nothing.value)(function (fa) {
      return n.div_(l.widgetShiftMap)([])(ja);
    });
  }(),
      fb = function fb(S) {
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.creator])(ha.textInput(S));
  },
      ib = function ib(S) {
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.creatorList])(ha.nonEmptyArrayView(fb)(S));
  },
      sb = function sb(S) {
    return function (Z) {
      var ja = I.map(I.functorArray)(function (wa) {
        return wa.tab;
      })(S),
          fa = I.map(I.functorArray)(function (wa) {
        return wa.page;
      })(S),
          oa = n["div'"](l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([n.text(k.widgetLiftWidget)("No pages to show!")]);
      return d.bind(l.widgetBind)(function (wa) {
        return function (Fa) {
          return function (La) {
            return n.div(wa)(Fa)([K.sideBarGrid])([n.div(wa)(Fa)([K.sideBarMenu])([n.div(wa)(Fa)([K.sideBarCol])(La)])]);
          };
        };
      }(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([n.nav(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([K.sideBarNav])(function (wa) {
        return I.map(I.functorArray)(function (Fa) {
          return d.discard(d.discardUnit)(l.widgetBind)(I["void"](l.widgetFunctor)(n.div(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([q.onClick, K.sideBarTab])([I.map(l.widgetFunctor)(R.absurd)(X.snd(Fa))])))(function () {
            return b.pure(l.widgetApplicative)(X.fst(Fa));
          });
        })(N.zip(N.range(0)(N.length(wa)))(wa));
      }(ja)), I.voidRight(l.widgetFunctor)(Z)(function (wa) {
        return B.fromMaybe(oa)(N.index(fa)(wa));
      }(Z))]))(function (wa) {
        return sb(S)(wa);
      });
    };
  },
      tb = function tb(S) {
    var Z = function Z(ja) {
      return f.step(ja)(d.bind(l.widgetBind)(n.button_(l.widgetShiftMap)([K.clipBtn, q.onClick, q.disabled(pa["null"](ja))])(n.text(k.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return d.bind(l.widgetBind)(qa.liftEffect(l.widgetMonadEff(G.monoidArray))(ma.copyToClipboard(ja)))(function () {
          return b.pure(l.widgetApplicative)(Z(ja));
        });
      }));
    };

    return f.dyn(Z(S));
  },
      Bb = function Bb(S) {
    var Z = function Z(ja) {
      return B.maybe(b.pure(na.applicativeEffect)(""))(ca.recordToString)(ja);
    };

    return d.bind(l.widgetBind)(qa.liftEffect(l.widgetMonadEff(G.monoidArray))(xa.sequence(xa.traversableMaybe)(na.applicativeEffect)(I.map(B.functorMaybe)(Ta)(S))))(function (ja) {
      return n.div(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([K.recPreview])([d.bind(l.widgetBind)(qa.liftEffect(l.widgetMonadEff(G.monoidArray))(Z(ja)))(function (fa) {
        return n.div(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([K.previewButtons])([rb(fa), tb(fa)]);
      }), n["br'"](k.widgetLiftWidget), V.fold(V.foldableMaybe)(l.widgetMonoid(G.monoidArray))(I.map(B.functorMaybe)(Oa.mkRecordWidget)(ja))]);
    });
  },
      lb = function lb(S) {
    return function (Z) {
      return function (ja) {
        ja = {
          tab: n.text(k.widgetLiftWidget)("Preview"),
          page: Bb(S)
        };
        var fa = {
          tab: n.text(k.widgetLiftWidget)("DataCite Retrieval"),
          page: n.text(k.widgetLiftWidget)("TODO")
        };
        return sb([ja, fa])(0);
      };
    };
  },
      Cb = function Cb(S) {
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.sustainability])(d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.span_(r.shiftMapCofree(G.monoidArray))([K.missionStatement])(ha.urlInput(A.getWithDefault(new z.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new L.Left(""))(z.SProxy.value)(S))))(function (Z) {
      var ja = L.hush(Z);
      return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.span_(r.shiftMapCofree(G.monoidArray))([K.fundingStatement])(ha.urlInput(A.getWithDefault(new z.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new L.Left(""))(z.SProxy.value)(S))))(function (fa) {
        var oa = L.hush(fa);
        return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(z.SProxy.value)(new B.Just(Z))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "missionStatementURL";
          }))()(z.SProxy.value)(ja)))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(z.SProxy.value)(new B.Just(fa))))(function () {
              return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(z.SProxy.value)(oa));
            });
          });
        }))(S));
      });
    }));
  },
      m = function m(S) {
    return function (Z) {
      return n.div_(r.shiftMapCofree(G.monoidArray))([K.resourceType])(d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("resourceTypeEle")(S)))(function () {
        return d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("resourceTypeSTyp")(S)))(function () {
          return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.resourceTypeGen])(ha.menuSignal(Da.boundedEnumResourceTypeGeneral)(ha.isOptionResourceTypeGeneral)(A.get(new z.IsSymbol(function () {
            return "generalType";
          }))()(z.SProxy.value)(Z)))))(function (ja) {
            return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.resourceTypeDescr])(ha.textInput(d.join(B.bindMaybe)(I.map(B.functorMaybe)(va.fromString)(A.get(new z.IsSymbol(function () {
              return "description";
            }))()(z.SProxy.value)(Z)))))))(function (fa) {
              return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "description";
              }))()(z.SProxy.value)(I.map(B.functorMaybe)(va.toString)(fa))))(function () {
                return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "generalType";
                }))()(z.SProxy.value)(ja));
              }))(Z));
            });
          });
        });
      }));
    };
  },
      Wa = function Wa(S) {
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.resourceMDSource])(function () {
      var Z = A.getWithDefault(new z.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(z.SProxy.value)(S);
      return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.url])(ha.urlInput(A.getWithDefault(new z.IsSymbol(function () {
        return "url_Ei";
      }))()(new L.Left(""))(z.SProxy.value)(S)))))(function (ja) {
        var fa = L.hush(ja);
        return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([K.relType])(n.span_(r.shiftMapCofree(G.monoidArray))([])(d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("relationTypeSTyp")(Z)))(function () {
          return ha.menuSignal(Da.boundedEnumRelationType)(ha.isOptionRelationType)(A.get(new z.IsSymbol(function () {
            return "relationType";
          }))()(z.SProxy.value)(S));
        }))))(function (oa) {
          return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "url_Ei";
          }))()(z.SProxy.value)(new B.Just(ja))))(function () {
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
    }());
  },
      bb = function bb(S) {
    var Z = B.fromMaybe(A.empty)(S);
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.relatedId])(d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.id])(ha.textInput(A.get(new z.IsSymbol(function () {
      return "identifier";
    }))()(z.SProxy.value)(Z)))))(function (ja) {
      return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.idType])(ha.menuSignal(Da.boundedEnumIdentifierType)(ha.isOptionIdentifierType)(A.get(new z.IsSymbol(function () {
        return "identifierType";
      }))()(z.SProxy.value)(Z)))))(function (fa) {
        return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.relType])(ha.menuSignal(Da.boundedEnumRelationType)(ha.isOptionRelationType)(A.get(new z.IsSymbol(function () {
          return "relationType";
        }))()(z.SProxy.value)(Z)))))(function (oa) {
          return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(B.Just.create(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
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
    }));
  },
      kb = function kb(S) {
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.relatedIds])(d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(n.span_(l.widgetShiftMap)([K.relatedIdsHeader])(E.empty(l.widgetPlus(G.monoidArray)))))(function () {
      return n.div_(r.shiftMapCofree(G.monoidArray))([K.relatedIdList])(ha.nonEmptyArrayView(bb)(S));
    }));
  },
      Hb = function Hb(S) {
    var Z = B.fromMaybe(A.empty)(S);
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.institutionPolicy])(function () {
      var ja = A.getWithDefault(new z.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(z.SProxy.value)(Z);
      return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.policy])(ha.menuSignal(ha.boundedEnumPolPolType)(ha.isOptionPolPolType)(B.Just.create(A.getWithDefault(new z.IsSymbol(function () {
        return "polPolType";
      }))()(ha.FreeTextPolicy.value)(z.SProxy.value)(Z))))))(function (fa) {
        var oa = B.fromMaybe(ha.FreeTextPolicy.value)(fa);
        return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.policy])(ha.textInput(A.get(new z.IsSymbol(function () {
          return "policy_str";
        }))()(z.SProxy.value)(Z)))))(function (wa) {
          var Fa = ha.checkPolicy(oa)(B.maybe("")(va.toString)(wa));
          return d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(function () {
            if (Fa instanceof L.Right) return G.mempty(l.widgetMonoid(G.monoidArray));
            if (Fa instanceof L.Left) return ha.errorDisplay(Y.showString)(new B.Just(Fa.value0));
            throw Error("Failed pattern match at Metajelo.UI (line 868, column 13 - line 870, column 40): " + [Fa.constructor.name]);
          }()))(function () {
            var La = L.hush(Fa);
            return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([K.policyType])(n.span_(r.shiftMapCofree(G.monoidArray))([])(ha.menuSignal(U.boundedEnumMaybe(Ea.smallBoundedPolicyType)(Ea.boundedEnumPolicyType))(ha.isOptionMaybePolicyType)(A.get(new z.IsSymbol(function () {
              return "policyType";
            }))()(z.SProxy.value)(Z)))))(function (Ma) {
              return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([K.applies])(n.span_(r.shiftMapCofree(G.monoidArray))([])(d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("appliesToProductAttr")(ja)))(function () {
                return ha.menuSignal(U.boundedEnumMaybe(U.smallBoundedBoolean)(U.boundedEnumBoolean))(ha.isOptionMaybeBoolean)(A.get(new z.IsSymbol(function () {
                  return "appliesToProduct";
                }))()(z.SProxy.value)(Z));
              }))))(function (Za) {
                return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(B.Just.create(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "polPolType";
                }))()(z.SProxy.value)(new B.Just(oa))))(function () {
                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                    return "policy_str";
                  }))()(z.SProxy.value)(wa)))(function () {
                    return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                      return "policy_ei";
                    }))()(z.SProxy.value)(new B.Just(Fa))))(function () {
                      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                        return "policy";
                      }))()(z.SProxy.value)(La)))(function () {
                        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                          return "policyType";
                        }))()(z.SProxy.value)(Ma)))(function () {
                          return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                            return "appliesToProduct";
                          }))()(z.SProxy.value)(Za));
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
  },
      Ib = function Ib(S) {
    return function (Z) {
      var ja = I.mapFlipped(B.functorMaybe)(X.snd(Z))(function (fa) {
        return I.mapFlipped(J.functorNonEmptyArray)(fa)(function (oa) {
          return C.execState(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "descs_on";
          }))()(z.SProxy.value)(new B.Just(S))))(oa);
        });
      });
      return n.div_(r.shiftMapCofree(G.monoidArray))([K.institutionPolicies])(d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("institutionPoliciesEle")(S)))(function () {
        return ha.nonEmptyArrayView(Hb)(new X.Tuple(X.fst(Z), ja));
      }));
    };
  },
      Db = function Db(S) {
    return function (Z) {
      return n.div_(r.shiftMapCofree(G.monoidArray))([K.identifier])(d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("identifierTypeSTyp")(S)))(function () {
        return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.id])(ha.textInput(A.get(new z.IsSymbol(function () {
          return "identifier";
        }))()(z.SProxy.value)(Z)))))(function (ja) {
          return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.idType])(ha.menuSignal(Da.boundedEnumIdentifierType)(ha.isOptionIdentifierType)(A.get(new z.IsSymbol(function () {
            return "identifierType";
          }))()(z.SProxy.value)(Z)))))(function (fa) {
            return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
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
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.institutionContact])(d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.contactEmail])(ha.emailInput(A.getWithDefault(new z.IsSymbol(function () {
      return "email_Ei";
    }))()(new L.Left(""))(z.SProxy.value)(S)))))(function (Z) {
      var ja = L.hush(Z);
      return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.contactType])(ha.menuSignal(U.boundedEnumMaybe(Ea.smallBoundedInstitutionContactType)(Ea.boundedEnumInstitutionContactType))(ha.isOptionMaybeInstitutionContactType)(A.get(new z.IsSymbol(function () {
        return "contactType";
      }))()(z.SProxy.value)(S)))))(function (fa) {
        return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
          return "email_Ei";
        }))()(z.SProxy.value)(new B.Just(Z))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "emailAddress";
          }))()(z.SProxy.value)(ja)))(function () {
            return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "contactType";
            }))()(z.SProxy.value)(fa));
          });
        }))(S));
      });
    }));
  },
      Eb = function Eb(S) {
    var Z = B.fromMaybe(A.empty)(S);
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.location])(function () {
      var ja = A.getWithDefault(new z.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(z.SProxy.value)(Z);
      return d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("locationEle")(ja)))(function () {
        return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.institutionId])(Db(ja)(Qa(new z.IsSymbol(function () {
          return "institutionID_opt";
        }))()(z.SProxy.value)(Z)))))(function (fa) {
          var oa = A.getAll(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
            return "identifier";
          }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
            return "identifierType";
          }))()()()()(A.getAllOptionNil))))(fa);
          return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.institutionName])(ha.textInput(A.get(new z.IsSymbol(function () {
            return "institutionName";
          }))()(z.SProxy.value)(Z)))))(function (wa) {
            return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.institutionType])(ha.menuSignal(Ea.boundedEnumInstitutionType)(ha.isOptionInstitutionType)(A.get(new z.IsSymbol(function () {
              return "institutionType";
            }))()(z.SProxy.value)(Z)))))(function (Fa) {
              return d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(n["br'"](k.widgetLiftWidget)))(function () {
                return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.superOrg])(ha.textInput(d.join(B.bindMaybe)(A.get(new z.IsSymbol(function () {
                  return "superOrganizationName";
                }))()(z.SProxy.value)(Z))))))(function (La) {
                  return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(Jb(Qa(new z.IsSymbol(function () {
                    return "institutionContact_opt";
                  }))()(z.SProxy.value)(Z)))(function (Ma) {
                    var Za = A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                      return "contactType";
                    }))(W.consKeys(new z.IsSymbol(function () {
                      return "emailAddress";
                    }))(W.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                      return "contactType";
                    }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                      return "emailAddress";
                    }))()()()()(A.getAllOptionNil))))(Ma);
                    return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(Cb(Qa(new z.IsSymbol(function () {
                      return "iSustain_opt";
                    }))()(z.SProxy.value)(Z)))(function (gb) {
                      var mb = A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))(W.consKeys(new z.IsSymbol(function () {
                        return "missionStatementURL";
                      }))(W.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                        return "missionStatementURL";
                      }))()()()()(A.getAllOptionNil))))(gb);
                      return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(Ib(ja)(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
                        return "_numPolicies";
                      }))()(1)(z.SProxy.value)(Z), A.get(new z.IsSymbol(function () {
                        return "institutionPolicies_opt";
                      }))()(z.SProxy.value)(Z))))(function (ub) {
                        var Fb = X.fst(ub),
                            Gb = X.snd(ub),
                            Lb = d.join(B.bindMaybe)(I.map(B.functorMaybe)(xa.sequence(J.traversableNonEmptyArray)(B.applicativeMaybe))(I.map(B.functorMaybe)(I.map(J.functorNonEmptyArray)(A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
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
                        return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.versioning])(ha.checkBoxS(A.getWithDefault(new z.IsSymbol(function () {
                          return "versioning";
                        }))()(!1)(z.SProxy.value)(Z)))))(function (Kb) {
                          return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                            return "institutionID_opt";
                          }))()(z.SProxy.value)(new B.Just(fa))))(function () {
                            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                              return "institutionID";
                            }))()(z.SProxy.value)(oa)))(function () {
                              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                return "institutionName";
                              }))()(z.SProxy.value)(wa)))(function () {
                                return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                  return "institutionType";
                                }))()(z.SProxy.value)(Fa)))(function () {
                                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                    return "superOrganizationName";
                                  }))()(z.SProxy.value)(new B.Just(La))))(function () {
                                    return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                      return "institutionContact_opt";
                                    }))()(z.SProxy.value)(new B.Just(Ma))))(function () {
                                      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                        return "institutionContact";
                                      }))()(z.SProxy.value)(Za)))(function () {
                                        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                          return "iSustain_opt";
                                        }))()(z.SProxy.value)(new B.Just(gb))))(function () {
                                          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                            return "institutionSustainability";
                                          }))()(z.SProxy.value)(mb)))(function () {
                                            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                              return "_numPolicies";
                                            }))()(z.SProxy.value)(new B.Just(Fb))))(function () {
                                              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                return "institutionPolicies_opt";
                                              }))()(z.SProxy.value)(Gb)))(function () {
                                                return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                  return "institutionPolicies";
                                                }))()(z.SProxy.value)(Lb)))(function () {
                                                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                    return "versioning";
                                                  }))()(z.SProxy.value)(new B.Just(Kb))))(function () {
                                                    return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                      return "descs_on";
                                                    }))()(z.SProxy.value)(new B.Just(ja)));
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
                            return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(new B.Just(Mb));
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
      T = function T(S) {
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.basicMetadata])(d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(eb(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
      return "_numTitles";
    }))()(1)(z.SProxy.value)(S), A.get(new z.IsSymbol(function () {
      return "titles";
    }))()(z.SProxy.value)(S))))(function (Z) {
      var ja = X.fst(Z),
          fa = X.snd(Z);
      return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(ib(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
        return "_numCreators";
      }))()(1)(z.SProxy.value)(S), A.get(new z.IsSymbol(function () {
        return "creators";
      }))()(z.SProxy.value)(S))))(function (oa) {
        var wa = X.fst(oa),
            Fa = X.snd(oa);
        return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([])(n.span_(r.shiftMapCofree(G.monoidArray))([K.pubyear])(ha.natInput(A.get(new z.IsSymbol(function () {
          return "publicationYear";
        }))()(z.SProxy.value)(S)))))(function (La) {
          return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "titles";
          }))()(z.SProxy.value)(fa)))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
              return "_numTitles";
            }))()(z.SProxy.value)(new B.Just(ja))))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "creators";
              }))()(z.SProxy.value)(Fa)))(function () {
                return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "_numCreators";
                }))()(z.SProxy.value)(new B.Just(wa))))(function () {
                  return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                    return "publicationYear";
                  }))()(z.SProxy.value)(La));
                });
              });
            });
          }))(S));
        });
      });
    }));
  },
      ba = function ba(S) {
    var Z = B.fromMaybe(A.empty)(S);
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.product])(d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(Pa)(function (ja) {
      return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(function () {
        if (ja instanceof B.Nothing) return Z;

        if (ja instanceof B.Just) {
          var fa = D.runWriter(F.unwrap(ia.newtypeJSONWithErr)(ja.value0));
          if (fa.value0 instanceof L.Right) return wb(Z)(fa.value0.value0);
          if (fa.value0 instanceof L.Left) return Z;
          throw Error("Failed pattern match at Metajelo.UI (line 561, column 10 - line 563, column 27): " + [fa.value0.constructor.name]);
        }

        throw Error("Failed pattern match at Metajelo.UI (line 557, column 21 - line 563, column 27): " + [ja.constructor.name]);
      }()))(function (fa) {
        var oa = A.getWithDefault(new z.IsSymbol(function () {
          return "descs_on";
        }))()(!0)(z.SProxy.value)(fa);
        return d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("supplementaryProductEle")(oa)))(function () {
          return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(T(Qa(new z.IsSymbol(function () {
            return "basicMetadata_opt";
          }))()(z.SProxy.value)(fa)))(function (wa) {
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
            }))()()()()(A.getAllOptionNil)))))(wa);
            return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([K.resourceId])(Db(oa)(Qa(new z.IsSymbol(function () {
              return "resourceID_opt";
            }))()(z.SProxy.value)(fa))))(function (La) {
              var Ma = A.getAll(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "identifier";
              }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "identifierType";
              }))()()()()(A.getAllOptionNil))))(La);
              return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(m(oa)(Qa(new z.IsSymbol(function () {
                return "resourceType_opt";
              }))()(z.SProxy.value)(fa)))(function (Za) {
                var gb = A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
                  return "description";
                }))(W.consKeys(new z.IsSymbol(function () {
                  return "generalType";
                }))(W.nilKeys)))(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                  return "description";
                }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                  return "generalType";
                }))()()()()(A.getAllOptionNil))))(Za);
                return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(vb(oa)(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
                  return "_numFormats";
                }))()(0)(z.SProxy.value)(fa), A.getWithDefault(new z.IsSymbol(function () {
                  return "format";
                }))()([])(z.SProxy.value)(fa))))(function (mb) {
                  var ub = X.fst(mb),
                      Fb = X.snd(mb);
                  return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(Wa(B.fromMaybe(A.empty)(cb(new z.IsSymbol(function () {
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
                    return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(Eb(cb(new z.IsSymbol(function () {
                      return "locationOpts_opt";
                    }))()(z.SProxy.value)(fa)(oa)))(function (Kb) {
                      var Mb = d.join(B.bindMaybe)(I.map(B.functorMaybe)(A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
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
                      return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                        return "basicMetadata_opt";
                      }))()(z.SProxy.value)(new B.Just(wa))))(function () {
                        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                          return "basicMetadata";
                        }))()(z.SProxy.value)(Fa)))(function () {
                          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                            return "resourceID_opt";
                          }))()(z.SProxy.value)(new B.Just(La))))(function () {
                            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                              return "resourceID";
                            }))()(z.SProxy.value)(new B.Just(Ma))))(function () {
                              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                return "resourceType_opt";
                              }))()(z.SProxy.value)(new B.Just(Za))))(function () {
                                return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                  return "resourceType";
                                }))()(z.SProxy.value)(gb)))(function () {
                                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                    return "_numFormats";
                                  }))()(z.SProxy.value)(new B.Just(ub))))(function () {
                                    return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                      return "format";
                                    }))()(z.SProxy.value)(new B.Just(Fb))))(function () {
                                      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                        return "resMdsOpts_opt";
                                      }))()(z.SProxy.value)(new B.Just(Gb))))(function () {
                                        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                          return "resourceMetadataSource";
                                        }))()(z.SProxy.value)(new B.Just(Lb))))(function () {
                                          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                            return "locationOpts_opt";
                                          }))()(z.SProxy.value)(Kb)))(function () {
                                            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                              return "location";
                                            }))()(z.SProxy.value)(Mb)))(function () {
                                              return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                                return "descs_on";
                                              }))()(z.SProxy.value)(new B.Just(oa)));
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
                        return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(new B.Just(Nb));
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
      Ia = function Ia(S) {
    return function (Z) {
      var ja = I.mapFlipped(B.functorMaybe)(X.snd(Z))(function (fa) {
        return I.mapFlipped(J.functorNonEmptyArray)(fa)(function (oa) {
          return C.execState(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
            return "descs_on";
          }))()(z.SProxy.value)(new B.Just(S))))(oa);
        });
      });
      return n.div_(r.shiftMapCofree(G.monoidArray))([K.products])(d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(n.span_(l.widgetShiftMap)([K.productsHeader])(ha.mkDesc("supplementaryProductsEle")(S))))(function () {
        return n.div_(r.shiftMapCofree(G.monoidArray))([K.productList])(ha.nonEmptyArrayView(ba)(new X.Tuple(X.fst(Z), ja)));
      }));
    };
  },
      Ca = function Ca(S) {
    var Z = A.getWithDefault(new z.IsSymbol(function () {
      return "descs_on";
    }))()(!0)(z.SProxy.value)(S);
    return d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("recordEle")(Z)))(function () {
      return d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("recordTypeCTyp")(Z)))(function () {
        return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(nb(Qa(new z.IsSymbol(function () {
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
          return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([K.date])(d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(f.display(ha.mkDesc("dateEle")(Z)))(function () {
            return ha.dateInput(A.getWithDefault(new z.IsSymbol(function () {
              return "date_Ei";
            }))()(new L.Left(""))(z.SProxy.value)(S));
          })))(function (oa) {
            var wa = L.hush(oa);
            return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(kb(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
              return "_numRelIds";
            }))()(0)(z.SProxy.value)(S), A.get(new z.IsSymbol(function () {
              return "relId_opts";
            }))()(z.SProxy.value)(S))))(function (Fa) {
              var La = X.fst(Fa),
                  Ma = X.snd(Fa),
                  Za = d.join(B.bindMaybe)(I.map(B.functorMaybe)(xa.sequence(J.traversableNonEmptyArray)(B.applicativeMaybe))(I.map(B.functorMaybe)(I.map(J.functorNonEmptyArray)(A.getAll(A.getAllAny()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "identifier";
              }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "identifierType";
              }))()()()()(A.getAllOptionCons(new z.IsSymbol(function () {
                return "relationType";
              }))()()()()(A.getAllOptionNil)))))))(Ma)));
              return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(Ia(Z)(new X.Tuple(A.getWithDefault(new z.IsSymbol(function () {
                return "_numSupProds";
              }))()(0)(z.SProxy.value)(S), A.get(new z.IsSymbol(function () {
                return "supProd_opts";
              }))()(z.SProxy.value)(S))))(function (gb) {
                var mb = X.fst(gb),
                    ub = X.snd(gb),
                    Fb = d.join(B.bindMaybe)(I.map(B.functorMaybe)(xa.sequence(J.traversableNonEmptyArray)(B.applicativeMaybe))(I.map(B.functorMaybe)(I.map(J.functorNonEmptyArray)(A.getSubset()()(W.consKeys(new z.IsSymbol(function () {
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
                }))()()()()(A.getAllOptionNil))))))))))(ub)));
                return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "identifier_opt";
                }))()(z.SProxy.value)(new B.Just(ja))))(function () {
                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                    return "identifier";
                  }))()(z.SProxy.value)(fa)))(function () {
                    return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                      return "date_Ei";
                    }))()(z.SProxy.value)(new B.Just(oa))))(function () {
                      return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                        return "date";
                      }))()(z.SProxy.value)(wa)))(function () {
                        return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                          return "_numRelIds";
                        }))()(z.SProxy.value)(new B.Just(La))))(function () {
                          return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                            return "relId_opts";
                          }))()(z.SProxy.value)(Ma)))(function () {
                            return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                              return "relatedIdentifiers";
                            }))()(z.SProxy.value)(Za)))(function () {
                              return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                return "_numSupProds";
                              }))()(z.SProxy.value)(new B.Just(mb))))(function () {
                                return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                  return "supProd_opts";
                                }))()(z.SProxy.value)(ub)))(function () {
                                  return d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                    return "supplementaryProducts";
                                  }))()(z.SProxy.value)(Fb)))(function () {
                                    return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                                      return "descs_on";
                                    }))()(z.SProxy.value)(new B.Just(Z)));
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
      Na = f.loopS(G.monoidArray)(A.empty)(function (S) {
    return n.div_(r.shiftMapCofree(G.monoidArray))([K.record])(n.div_(r.shiftMapCofree(G.monoidArray))([K.recFlexBox])(d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([K.recEditor])(function () {
      var Z = A.getWithDefault(new z.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(z.SProxy.value)(S);
      return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(ha.showDescSig(Z))(function (ja) {
        return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(Ra)(function (fa) {
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
          fa = B.isNothing(oa) ? S : fa;
          return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(Ca(fa))(function (wa) {
            var Fa = A.get(new z.IsSymbol(function () {
              return "lastModified";
            }))()(z.SProxy.value)(wa),
                La = la.unsafePerformEffect(ea.nowDateTime);
            return d.bind(r.bindCofree(l.widgetAlternative(G.monoidArray)))(b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(P.append(O.semigroupFirst)(Fa)(O.First(new B.Just(La)))))(function (Ma) {
              return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(C.execState(d.discard(d.discardUnit)(u.bindStateT(v.monadIdentity))(d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                return "lastModified";
              }))()(z.SProxy.value)(Ma)))(function () {
                return d.bind(u.bindStateT(v.monadIdentity))(y.get(u.monadStateStateT(v.monadIdentity)))(A.maySetOptState(new z.IsSymbol(function () {
                  return "descs_on";
                }))()(z.SProxy.value)(new B.Just(ja)));
              }))(wa));
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
      return d.discard(d.discardUnit)(r.bindCofree(l.widgetAlternative(G.monoidArray)))(n.div_(r.shiftMapCofree(G.monoidArray))([K.sideBar])(f.display(lb(ja)(Aa.unit)(0))))(function () {
        return b.pure(r.applicativeCofree(l.widgetAlternative(G.monoidArray)))(Z);
      });
    })));
  }),
      Ua = n["div'"](l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([n.div(l.widgetMultiAlternative(G.monoidArray))(l.widgetShiftMap)([K.page])(b.pure(b.applicativeArray)(f.dyn(Na)))]);

  c.runFormSPA = function (S) {
    return w.runWidgetInDom(S)(Ua);
  };

  c.page = Ua;
  c.utf8DataAttr = "data:text/plain;charset=utf-8";
  c.downloadButton = rb;
  c.mkDLAnchorAndClicker = jb;
  c.uploadButtonSig = Ra;
  c.dataCiteButtonSig = Pa;
  c.fillWithDataCite = wb;
  c.copyButton = tb;
  c.fillMetajeloRecordExtra = Ab;
  c.fillSProdExtra = qb;
  c.fillBasicMetadataExtra = Xa;
  c.fillLocationRowExtra = zb;
  c.fillIContactExtra = pb;
  c.fillSustainExtra = xb;
  c.fillPolicyExtra = yb;
  c.fillResourceMDSExtra = ob;
  c.accumulateMetajeloRecord = Na;
  c.recWidg = Bb;
  c.finalizeRecord = Ta;
  c.accumulateMetajeloRecUI = Ca;
  c.accumulateSuppProd = ba;
  c.supProdSigArray = Ia;
  c.accumulateLocation = Eb;
  c.accumulateSustain = Cb;
  c.accumulateIdent = Db;
  c.genRecIdent = nb;
  c.accumulateRelatedIdent = bb;
  c.relIdSigArray = kb;
  c.accumulateBasicMetadata = T;
  c.accumulateResType = m;
  c.formatSignal = Ya;
  c.formatSigArray = vb;
  c.titleSignal = db;
  c.titleSigArray = eb;
  c.creatorSignal = fb;
  c.creatorSigArray = ib;
  c.accumulateResMdSource = Wa;
  c.accumulateContact = Jb;
  c.accumulatePolicy = Hb;
  c.policySigArray = Ib;
  c.getOpt = Qa;
  c.updateDescOn = cb;
  c.makeSidebar = lb;
  c.createTabWidget = sb;
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
//# sourceMappingURL=prod.f7de7b3e.js.map