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
              var y = r.indexOf(":");
              return e(r.substring(0, y))(r.substring(y + 2));
            }),
            body: c.getResponse(p)
          });
        };

        p.responseType = g.responseType;
        p.withCredentials = g.withCredentials;
        p.send(g.content);
        return function (r, y, b) {
          try {
            p.abort();
          } catch (h) {
            return y(h);
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
        return function (y) {
          return (0, k.apply)(l.map(k.Functor0())(n)(r))(y);
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
      return function (y) {
        return function (b) {
          return p(n)(r)(y(b));
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
        var y = (0, k.compare)(n)(r);
        if (y instanceof f.LT) return r;
        if (y instanceof f.EQ || y instanceof f.GT) return n;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [y.constructor.name]);
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
      y = a["Data.Ord"],
      b = a["Data.Ordering"],
      h = function () {
    function u() {}

    u.value = new u();
    return u;
  }(),
      d = function () {
    function u(E) {
      this.value0 = E;
    }

    u.create = function (E) {
      return new u(E);
    };

    return u;
  }(),
      q = function q(u) {
    return function (E) {
      return function (B) {
        if (B instanceof h) return u;
        if (B instanceof d) return E(B.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [u.constructor.name, E.constructor.name, B.constructor.name]);
      };
    };
  };

  a = q(!0)(n["const"](!1));
  n = q(!1)(n["const"](!0));

  var w = new r.Functor(function (u) {
    return function (E) {
      return E instanceof d ? new d(u(E.value0)) : h.value;
    };
  }),
      t = function t(u) {
    return new k.Eq(function (E) {
      return function (B) {
        return E instanceof h && B instanceof h ? !0 : E instanceof d && B instanceof d ? k.eq(u)(E.value0)(B.value0) : !1;
      };
    });
  },
      D = function D(u) {
    return new y.Ord(function () {
      return t(u.Eq0());
    }, function (E) {
      return function (B) {
        if (E instanceof h && B instanceof h) return b.EQ.value;
        if (E instanceof h) return b.LT.value;
        if (B instanceof h) return b.GT.value;
        if (E instanceof d && B instanceof d) return y.compare(u)(E.value0)(B.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [E.constructor.name, B.constructor.name]);
      };
    });
  },
      z = new g.Apply(function () {
    return w;
  }, function (u) {
    return function (E) {
      if (u instanceof d) return r.map(w)(u.value0)(E);
      if (u instanceof h) return h.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [u.constructor.name, E.constructor.name]);
    };
  });

  g = new f.Bind(function () {
    return z;
  }, function (u) {
    return function (E) {
      if (u instanceof d) return E(u.value0);
      if (u instanceof h) return h.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [u.constructor.name, E.constructor.name]);
    };
  });
  e = new e.Applicative(function () {
    return z;
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
    return function (E) {
      if (E instanceof d) return E.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [E.constructor.name]);
    };
  };

  c.functorMaybe = w;
  c.applyMaybe = z;
  c.applicativeMaybe = e;
  c.bindMaybe = g;
  c.ordMaybe = D;

  c.boundedMaybe = function (u) {
    return new p.Bounded(function () {
      return D(u.Ord0());
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
      l = function () {
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
      k = function () {
    function y(b) {
      this.value0 = b;
    }

    y.create = function (b) {
      return new y(b);
    };

    return y;
  }(),
      n = function () {
    function y(b) {
      this.value0 = b;
    }

    y.create = function (b) {
      return new y(b);
    };

    return y;
  }(),
      r = function () {
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
  c.Document = l;
  c.String = p;
  c.FormData = k;
  c.FormURLEncoded = n;
  c.Json = r;

  c.toMediaType = function (y) {
    return y instanceof n ? new e.Just(g.applicationFormURLEncoded) : y instanceof r ? new e.Just(g.applicationJSON) : e.Nothing.value;
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
              var y = e.map(l)(k.unwrap),
                  b = e.map(f)(p.wrap);
              return function (h) {
                return y(r(b(h)));
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
      y = function () {
    function b(h) {
      this.value0 = h;
    }

    b.create = function (h) {
      return new b(h);
    };

    return b;
  }();

  a = new r(e.identity(e.categoryFn));
  e = new y(e.identity(e.categoryFn));
  c.ArrayBuffer = l;
  c.Blob = p;
  c.Document = k;
  c.Json = n;
  c.String = r;
  c.Ignore = y;
  c.string = a;
  c.ignore = e;

  c.toResponseType = function (b) {
    if (b instanceof l) return "arraybuffer";
    if (b instanceof p) return "blob";
    if (b instanceof k) return "document";
    if (b instanceof n || b instanceof r) return "text";
    if (b instanceof y) return "";
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
      y = function () {
    function t(D) {
      this.value0 = D;
    }

    t.create = function (D) {
      return new t(D);
    };

    return t;
  }(),
      b = function () {
    function t(D) {
      this.value0 = D;
    }

    t.create = function (D) {
      return new t(D);
    };

    return t;
  }(),
      h = new n.Functor(function (t) {
    return function (D) {
      if (D instanceof y) return new y(D.value0);
      if (D instanceof b) return new b(t(D.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [D.constructor.name]);
    };
  });

  a = function a(t) {
    return function (D) {
      return function (z) {
        if (z instanceof y) return t(z.value0);
        if (z instanceof b) return D(z.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [t.constructor.name, D.constructor.name, z.constructor.name]);
      };
    };
  };

  k = a(k["const"](r.Nothing.value))(r.Just.create);
  p = new p.Bifunctor(function (t) {
    return function (D) {
      return function (z) {
        if (z instanceof y) return new y(t(z.value0));
        if (z instanceof b) return new b(D(z.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [t.constructor.name, D.constructor.name, z.constructor.name]);
      };
    };
  });
  var d = new g.Apply(function () {
    return h;
  }, function (t) {
    return function (D) {
      if (t instanceof y) return new y(t.value0);
      if (t instanceof b) return n.map(h)(t.value0)(D);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [t.constructor.name, D.constructor.name]);
    };
  }),
      q = new f.Bind(function () {
    return d;
  }, a(function (t) {
    return function (D) {
      return new y(t);
    };
  })(function (t) {
    return function (D) {
      return D(t);
    };
  })),
      w = new e.Applicative(function () {
    return d;
  }, b.create);
  e = new l.Monad(function () {
    return w;
  }, function () {
    return q;
  });
  c.Left = y;
  c.Right = b;
  c.either = a;

  c.note = function (t) {
    return r.maybe(new y(t))(b.create);
  };

  c.hush = k;
  c.functorEither = h;
  c.bifunctorEither = p;
  c.applicativeEither = w;
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
      y = a["Data.Either"],
      b = a["Data.Functor"],
      h = a["Data.Semigroup"],
      d = function d(B) {
    return B;
  };

  a = new a["Data.Newtype"].Newtype(function (B) {
    return B;
  }, d);

  var q = new n.MonadTrans(function (B) {
    return function (M) {
      return l.bind(B.Bind1())(M)(function (G) {
        return g.pure(B.Applicative0())(new y.Right(G));
      });
    };
  }),
      w = function w(B) {
    return function (M) {
      return B(M);
    };
  },
      t = function t(B) {
    return new b.Functor(function (M) {
      return w(b.map(B)(b.map(y.functorEither)(M)));
    });
  },
      D = function D(B) {
    return new p.Monad(function () {
      return E(B);
    }, function () {
      return z(B);
    });
  },
      z = function z(B) {
    return new l.Bind(function () {
      return u(B);
    }, function (M) {
      return function (G) {
        return l.bind(B.Bind1())(M)(y.either(function () {
          var I = g.pure(B.Applicative0());
          return function (L) {
            return I(y.Left.create(L));
          };
        }())(function (I) {
          return G(I);
        }));
      };
    });
  },
      u = function u(B) {
    return new f.Apply(function () {
      return t(B.Bind1().Apply0().Functor0());
    }, p.ap(D(B)));
  },
      E = function E(B) {
    return new g.Applicative(function () {
      return u(B);
    }, function () {
      var M = g.pure(B.Applicative0());
      return function (G) {
        return M(y.Right.create(G));
      };
    }());
  };

  c.ExceptT = d;

  c.runExceptT = function (B) {
    return B;
  };

  c.withExceptT = function (B) {
    return function (M) {
      return function (G) {
        return b.map(B)(function (I) {
          return function (L) {
            if (L instanceof y.Right) return new y.Right(L.value0);
            if (L instanceof y.Left) return new y.Left(I(L.value0));
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 42, column 3 - line 42, column 32): " + [I.constructor.name, L.constructor.name]);
          };
        }(M))(G);
      };
    };
  };

  c.newtypeExceptT = a;
  c.functorExceptT = t;
  c.applicativeExceptT = E;
  c.bindExceptT = z;

  c.altExceptT = function (B) {
    return function (M) {
      return new e.Alt(function () {
        return t(M.Bind1().Apply0().Functor0());
      }, function (G) {
        return function (I) {
          return l.bind(M.Bind1())(G)(function (L) {
            if (L instanceof y.Right) return g.pure(M.Applicative0())(new y.Right(L.value0));
            if (L instanceof y.Left) return l.bind(M.Bind1())(I)(function (J) {
              if (J instanceof y.Right) return g.pure(M.Applicative0())(new y.Right(J.value0));
              if (J instanceof y.Left) return g.pure(M.Applicative0())(new y.Left(h.append(B)(L.value0)(J.value0)));
              throw Error("Failed pattern match at Control.Monad.Except.Trans (line 86, column 9 - line 88, column 49): " + [J.constructor.name]);
            });
            throw Error("Failed pattern match at Control.Monad.Except.Trans (line 82, column 5 - line 88, column 49): " + [L.constructor.name]);
          });
        };
      });
    };
  };

  c.monadThrowExceptT = function (B) {
    return new k.MonadThrow(function () {
      return D(B);
    }, function () {
      var M = g.pure(B.Applicative0());
      return function (G) {
        return M(y.Left.create(G));
      };
    }());
  };

  c.monadTellExceptT = function (B) {
    return new r.MonadTell(function () {
      return D(B.Monad0());
    }, function () {
      var M = n.lift(q)(B.Monad0()),
          G = r.tell(B);
      return function (I) {
        return M(G(I));
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
      y = new f.Bind(function () {
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
    return y;
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
            return function (y) {
              return g(y)(r)(l[r]);
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
    return y;
  }, function () {
    return n;
  });
  var n = new l.Bind(function () {
    return r;
  }, e.bind_),
      r = new f.Apply(function () {
    return k;
  }, p.ap(a)),
      y = new g.Applicative(function () {
    return r;
  }, e.pure_);
  c.applicativeST = y;
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
      y = a["Data.Monoid.Disj"],
      b = a["Data.Newtype"],
      h = a["Data.Semigroup"],
      d = a["Data.Unit"];

  a = function a(z, u, E) {
    this.foldMap = z;
    this.foldl = u;
    this.foldr = E;
  };

  var q = function q(z) {
    return function (u) {
      return function (E) {
        return (0, u.foldr)(function () {
          var B = f.applySecond(z.Apply0());
          return function (M) {
            return B(E(M));
          };
        }())(g.pure(z)(d.unit));
      };
    };
  },
      w = new a(function (z) {
    return function (u) {
      return function (E) {
        if (E instanceof n.Nothing) return r.mempty(z);
        if (E instanceof n.Just) return u(E.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [u.constructor.name, E.constructor.name]);
      };
    };
  }, function (z) {
    return function (u) {
      return function (E) {
        if (E instanceof n.Nothing) return u;
        if (E instanceof n.Just) return z(u)(E.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [z.constructor.name, u.constructor.name, E.constructor.name]);
      };
    };
  }, function (z) {
    return function (u) {
      return function (E) {
        if (E instanceof n.Nothing) return u;
        if (E instanceof n.Just) return z(E.value0)(u);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [z.constructor.name, u.constructor.name, E.constructor.name]);
      };
    };
  }),
      t = function t(z) {
    return function (u) {
      return function (E) {
        return (0, z.foldr)(function (B) {
          return function (M) {
            return h.append(u.Semigroup0())(E(B))(M);
          };
        })(r.mempty(u));
      };
    };
  },
      D = new a(function (z) {
    return t(D)(z);
  }, e.foldlArray, e.foldrArray);

  c.Foldable = a;

  c.foldr = function (z) {
    return z.foldr;
  };

  c.foldl = function (z) {
    return z.foldl;
  };

  c.foldMap = function (z) {
    return z.foldMap;
  };

  c.fold = function (z) {
    return function (u) {
      return (0, z.foldMap)(u)(l.identity(l.categoryFn));
    };
  };

  c.traverse_ = q;

  c.for_ = function (z) {
    return function (u) {
      return p.flip(q(z)(u));
    };
  };

  c.intercalate = function (z) {
    return function (u) {
      return function (E) {
        return function (B) {
          return (0, z.foldl)(function (M) {
            return function (G) {
              return M.init ? {
                init: !1,
                acc: G
              } : {
                init: !1,
                acc: h.append(u.Semigroup0())(M.acc)(h.append(u.Semigroup0())(E)(G))
              };
            };
          })({
            init: !0,
            acc: r.mempty(u)
          })(B).acc;
        };
      };
    };
  };

  c.any = function (z) {
    return function (u) {
      return b.alaF(k.functorFn)(k.functorFn)(b.newtypeDisj)(b.newtypeDisj)(y.Disj)((0, z.foldMap)(y.monoidDisj(u)));
    };
  };

  c.find = function (z) {
    return function (u) {
      return (0, z.foldl)(function (E) {
        return function (B) {
          return E instanceof n.Nothing && u(B) ? new n.Just(B) : E;
        };
      })(n.Nothing.value);
    };
  };

  c.foldableArray = D;
  c.foldableMaybe = w;
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
      y = e._copyST,
      b = function b(t) {
    return function (D) {
      return e.runST(function () {
        var z = y(D)();
        t(z)();
        return z;
      });
    };
  },
      h = a["Data.Function.Uncurried"].runFn4(e._lookup)(k.Nothing.value)(k.Just.create),
      d = function d(t) {
    return function (D) {
      return b(n.poke(t)(D));
    };
  },
      q = function q(t) {
    return function (D) {
      return function (z) {
        return e._foldM(f.bind(t.Bind1()))(D)(g.pure(t.Applicative0())(z));
      };
    };
  },
      w = function w(t) {
    return b(function (D) {
      return q(l.monadST)(function (z) {
        return function (u) {
          return function (E) {
            return n.poke(u)(E)(z);
          };
        };
      })(D)(t);
    });
  };

  c.lookup = h;

  c.fromFoldableWith = function (t) {
    return function (D) {
      return function (z) {
        return e.runST(function () {
          var u = n["new"]();
          p.for_(l.applicativeST)(t)(z)(function (E) {
            return function () {
              var B = e._lookupST(E.value1, D(E.value1), E.value0, u)();

              return n.poke(E.value0)(B)(u)();
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
    return function (D) {
      return function (z) {
        var u = t(h(D)(z));
        if (u instanceof k.Nothing) return b(n["delete"](D))(z);
        if (u instanceof k.Just) return d(D)(u.value0)(z);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [u.constructor.name]);
      };
    };
  };

  c.unions = function (t) {
    return p.foldl(t)(w)(e.empty);
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
      y = e["uncons'"](k["const"](n.Nothing.value))(function (w) {
    return function (t) {
      return new n.Just({
        head: w,
        tail: t
      });
    };
  }),
      b = function b(w) {
    return [w];
  },
      h = function h(w) {
    return 0 === e.length(w);
  },
      d = e.indexImpl(n.Just.create)(n.Nothing.value),
      q = k.flip(g.bind(g.bindArray));

  g = function (w) {
    return q(function () {
      var t = n.maybe([])(b);
      return function (D) {
        return t(w(D));
      };
    }());
  }(f.identity(f.categoryFn));

  c.fromFoldable = function (w) {
    return e.fromFoldableImpl(p.foldr(w));
  };

  c.singleton = b;
  c["null"] = h;

  c.head = function (w) {
    return d(w)(0);
  };

  c.init = function (w) {
    if (h(w)) return n.Nothing.value;
    if (l.otherwise) return new n.Just(e.slice(0)(e.length(w) - 1 | 0)(w));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [w.constructor.name]);
  };

  c.uncons = y;
  c.index = d;
  c.updateAt = r;
  c.concatMap = q;
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
              function y(b, h) {
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
                    return l(p(f)(y(b, d)))(y(d, h));
                }
              }

              return y(0, r.length);
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

  a = function a(h, d, q, w) {
    this.Foldable1 = h;
    this.Functor0 = d;
    this.sequence = q;
    this.traverse = w;
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
      y = function y(h) {
    return function (d) {
      return (0, h.traverse)(d)(l.identity(l.categoryFn));
    };
  },
      b = new a(function () {
    return p.foldableArray;
  }, function () {
    return k.functorArray;
  }, function (h) {
    return y(b)(h);
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
        r = p.traverse(p.traversableArray)(f.applicativeMaybe)(function (y) {
      if (y.value1 instanceof f.Nothing) return k.encodeURIComponent(y.value0);
      if (y.value1 instanceof f.Just) return e.apply(f.applyMaybe)(g.map(f.functorMaybe)(function (b) {
        return function (h) {
          return b + ("=" + h);
        };
      })(k.encodeURIComponent(y.value0)))(k.encodeURIComponent(y.value1.value0));
      throw Error("Failed pattern match at Data.FormURLEncoded (line 37, column 18 - line 39, column 108): " + [y.constructor.name]);
    });
    return function (y) {
      return n(r(y));
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
    function E() {}

    E.value = new E();
    return E;
  }(),
      f = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      l = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      p = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      k = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      n = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      r = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      y = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      b = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      h = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      d = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      q = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      w = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      t = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      D = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      z = function () {
    function E() {}

    E.value = new E();
    return E;
  }(),
      u = new a.Show(function (E) {
    if (E instanceof g) return "OPTIONS";
    if (E instanceof f) return "GET";
    if (E instanceof l) return "HEAD";
    if (E instanceof p) return "POST";
    if (E instanceof k) return "PUT";
    if (E instanceof n) return "DELETE";
    if (E instanceof r) return "TRACE";
    if (E instanceof y) return "CONNECT";
    if (E instanceof b) return "PROPFIND";
    if (E instanceof h) return "PROPPATCH";
    if (E instanceof d) return "MKCOL";
    if (E instanceof q) return "COPY";
    if (E instanceof w) return "MOVE";
    if (E instanceof t) return "LOCK";
    if (E instanceof D) return "UNLOCK";
    if (E instanceof z) return "PATCH";
    throw Error("Failed pattern match at Data.HTTP.Method (line 40, column 1 - line 56, column 23): " + [E.constructor.name]);
  });

  e = e.either(a.show(u))(function (E) {
    return E;
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

      for (var y = !1, b; !y;) {
        if (b = r, b instanceof f) r = n(b.value0), b = void 0;else if (b instanceof l) y = !0, b = b.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [b.constructor.name]);
      }

      return b;
    };
  },
      k = new a(function () {
    return g.monadEither;
  }, function (n) {
    return function (r) {
      return p(function (y) {
        if (y instanceof g.Left) return new l(new g.Left(y.value0));
        if (y instanceof g.Right && y.value0 instanceof f) return new f(n(y.value0.value0));
        if (y instanceof g.Right && y.value0 instanceof l) return new l(new g.Right(y.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [y.constructor.name]);
      })(n(r));
    };
  });

  e = new e.Bifunctor(function (n) {
    return function (r) {
      return function (y) {
        if (y instanceof f) return new f(n(y.value0));
        if (y instanceof l) return new l(r(y.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [n.constructor.name, r.constructor.name, y.constructor.name]);
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
    function n(r, y) {
      this.value0 = r;
      this.value1 = y;
    }

    n.create = function (r) {
      return function (y) {
        return new n(r, y);
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
      return new p.Show(function (y) {
        return "(NonEmpty " + (p.show(n)(y.value0) + (" " + (p.show(r)(y.value1) + ")")));
      });
    };
  };

  c.functorNonEmpty = function (n) {
    return new f.Functor(function (r) {
      return function (y) {
        return new k(r(y.value0), f.map(n)(r)(y.value1));
      };
    });
  };

  c.foldableNonEmpty = function (n) {
    return new g.Foldable(function (r) {
      return function (y) {
        return function (b) {
          return l.append(r.Semigroup0())(y(b.value0))(g.foldMap(n)(r)(y)(b.value1));
        };
      };
    }, function (r) {
      return function (y) {
        return function (b) {
          return g.foldl(n)(r)(r(y)(b.value0))(b.value1);
        };
      };
    }, function (r) {
      return function (y) {
        return function (b) {
          return r(b.value0)(g.foldr(n)(r)(y)(b.value1));
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
      y = a["Data.NonEmpty"],
      b = a["Data.Semigroup"],
      h = a["Data.Show"],
      d = function () {
    function J() {}

    J.value = new J();
    return J;
  }(),
      q = function () {
    function J(V, X) {
      this.value0 = V;
      this.value1 = X;
    }

    J.create = function (V) {
      return function (X) {
        return new J(V, X);
      };
    };

    return J;
  }(),
      w = new n.Functor(function (J) {
    return function (V) {
      return function (X) {
        function H(R, v) {
          if (v instanceof q && v.value1 instanceof q && v.value1.value1 instanceof q) x = new q(v, R), X = v.value1.value1.value1;else return K = !0, function (P) {
            return function (Y) {
              for (var ra = P, za = !1, Aa; !za;) {
                Aa = ra;
                var A = Y;
                Aa instanceof q && Aa.value0 instanceof q && Aa.value0.value1 instanceof q && Aa.value0.value1.value1 instanceof q ? (ra = Aa.value1, Y = new q(J(Aa.value0.value0), new q(J(Aa.value0.value1.value0), new q(J(Aa.value0.value1.value1.value0), A))), Aa = void 0) : (za = !0, Aa = A);
              }

              return Aa;
            };
          }(R)(function (P) {
            return P instanceof q && P.value1 instanceof q && P.value1.value1 instanceof d ? new q(J(P.value0), new q(J(P.value1.value0), d.value)) : P instanceof q && P.value1 instanceof d ? new q(J(P.value0), d.value) : d.value;
          }(v));
        }

        for (var x = V, K = !1, F; !K;) {
          F = H(x, X);
        }

        return F;
      };
    }(d.value);
  }),
      t = y.functorNonEmpty(w),
      D = new p.Foldable(function (J) {
    return function (V) {
      return p.foldl(D)(function (X) {
        var H = b.append(J.Semigroup0())(X);
        return function (x) {
          return H(V(x));
        };
      })(r.mempty(J));
    };
  }, function (J) {
    return function (V) {
      return function (X) {
        for (var H = V, x = !1, K; !x;) {
          K = H;
          var F = X;
          if (F instanceof d) x = !0;else {
            if (F instanceof q) H = J(K)(F.value0), X = F.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [F.constructor.name]);
            K = void 0;
          }
        }

        return K;
      };
    };
  }, function (J) {
    return function (V) {
      var X = p.foldl(D)(k.flip(q.create))(d.value),
          H = p.foldl(D)(k.flip(J))(V);
      return function (x) {
        return H(X(x));
      };
    };
  });

  a = y.foldableNonEmpty(D);

  var z = new b.Semigroup(function (J) {
    return function (V) {
      return p.foldr(D)(q.create)(V)(J);
    };
  }),
      u = new r.Monoid(function () {
    return z;
  }, d.value),
      E = new b.Semigroup(function (J) {
    return function (V) {
      return new y.NonEmpty(J.value0, b.append(z)(J.value1)(new q(V.value0, V.value1)));
    };
  }),
      B = function B(J) {
    return new h.Show(function (V) {
      return V instanceof d ? "Nil" : "(" + (p.intercalate(D)(r.monoidString)(" : ")(n.map(w)(h.show(J))(V)) + " : Nil)");
    });
  },
      M = new f.Apply(function () {
    return w;
  }, function (J) {
    return function (V) {
      if (J instanceof d) return d.value;
      if (J instanceof q) return b.append(z)(n.map(w)(J.value0)(V))(f.apply(M)(J.value1)(V));
      throw Error("Failed pattern match at Data.List.Types (line 155, column 1 - line 157, column 48): " + [J.constructor.name, V.constructor.name]);
    };
  }),
      G = new f.Apply(function () {
    return t;
  }, function (J) {
    return function (V) {
      return new y.NonEmpty(J.value0(V.value0), b.append(z)(f.apply(M)(J.value1)(new q(V.value0, d.value)))(f.apply(M)(new q(J.value0, J.value1))(V.value1)));
    };
  }),
      I = new e.Alt(function () {
    return w;
  }, b.append(z)),
      L = new l.Plus(function () {
    return I;
  }, d.value);

  e = new g.Applicative(function () {
    return G;
  }, function () {
    var J = y.singleton(L);
    return function (V) {
      return J(V);
    };
  }());
  c.Nil = d;
  c.Cons = q;

  c.NonEmptyList = function (J) {
    return J;
  };

  c.monoidList = u;
  c.foldableList = D;
  c.plusList = L;

  c.showNonEmptyList = function (J) {
    return new h.Show(function (V) {
      return "(NonEmptyList " + (h.show(y.showNonEmpty(J)(B(J)))(V) + ")");
    });
  };

  c.functorNonEmptyList = t;
  c.applicativeNonEmptyList = e;
  c.semigroupNonEmptyList = E;
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
      y = a["Data.Unit"],
      b = function () {
    return function (h) {
      return function (d) {
        for (var q = h, w = !1, t; !w;) {
          t = q;
          var D = d;
          if (D instanceof n.Nil) w = !0;else {
            if (D instanceof n.Cons) q = new n.Cons(D.value0, t), d = D.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [t.constructor.name, D.constructor.name]);
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
        return l.tailRecM(h)(function (w) {
          return f.bind(h.Monad0().Bind1())(e.alt(d.Plus1().Alt0())(k.map(d.Plus1().Alt0().Functor0())(l.Loop.create)(q))(g.pure(d.Applicative0())(new l.Done(y.unit))))(function (t) {
            return g.pure(d.Applicative0())(p.bimap(l.bifunctorStep)(function (D) {
              return new n.Cons(D, w);
            })(function (D) {
              return b(w);
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
    return function (y) {
      return f.NonEmptyList(r(y));
    };
  }();

  c.toUnfoldable = function (r) {
    var y = n.unfoldr(r)(function (b) {
      return e.map(l.functorMaybe)(function (h) {
        return new k.Tuple(h.head, h.tail);
      })(g.uncons(b));
    });
    return function (b) {
      return y(new f.Cons(b.value0, b.value1));
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
    function e(d, q, w, t) {
      this.tag = d;
      this._1 = q;
      this._2 = w;
      this._3 = t;
    }

    function g(d) {
      var q = function q(w, t, D) {
        return new e(d, w, t, D);
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

    function p(d, q, w) {
      try {
        return q(w());
      } catch (t) {
        return d(t);
      }
    }

    function k(d, q, w) {
      try {
        return q(w)();
      } catch (t) {
        return w(d(t))(), f;
      }
    }

    function n(d, q, w) {
      function t(x) {
        for (var K, F, R;;) {
          switch (R = F = K = null, u) {
            case 2:
              u = 1;

              try {
                E = G(E), null === I ? G = null : (G = I._1, I = I._2);
              } catch (P) {
                u = 5, B = d.left(P), E = null;
              }

              break;

            case 3:
              d.isLeft(E) ? (u = 5, B = E, E = null) : null === G ? u = 5 : (u = 2, E = d.fromRight(E));
              break;

            case 1:
              switch (E.tag) {
                case "Bind":
                  G && (I = new e("Cons", G, I));
                  G = E._2;
                  u = 1;
                  E = E._1;
                  break;

                case "Pure":
                  null === G ? (u = 5, E = d.right(E._1)) : (u = 2, E = E._1);
                  break;

                case "Sync":
                  u = 3;
                  E = p(d.left, d.right, E._1);
                  break;

                case "Async":
                  u = 4;
                  E = k(d.left, E._1, function (P) {
                    return function () {
                      z === x && (z++, h.enqueue(function () {
                        z === x + 1 && (u = 3, E = P, t(z));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  u = 5;
                  B = d.left(E._1);
                  E = null;
                  break;

                case "Catch":
                  L = null === G ? new e("Cons", E, L, M) : new e("Cons", E, new e("Cons", new e("Resume", G, I), L, M), M);
                  I = G = null;
                  u = 1;
                  E = E._1;
                  break;

                case "Bracket":
                  J++;
                  L = null === G ? new e("Cons", E, L, M) : new e("Cons", E, new e("Cons", new e("Resume", G, I), L, M), M);
                  I = G = null;
                  u = 1;
                  E = E._1;
                  break;

                case "Fork":
                  u = 3;
                  K = n(d, q, E._2);
                  q && q.register(K);
                  E._1 && K.run();
                  E = d.right(K);
                  break;

                case "Sequential":
                  u = 1, E = y(d, q, E._1);
              }

              break;

            case 5:
              I = G = null;
              if (null === L) u = 6, E = M || B || E;else switch (K = L._3, R = L._1, L = L._2, R.tag) {
                case "Catch":
                  M && M !== K && 0 === J ? u = 5 : B && (u = 1, E = R._2(d.fromLeft(B)), B = null);
                  break;

                case "Resume":
                  M && M !== K && 0 === J || B ? u = 5 : (G = R._1, I = R._2, u = 2, E = d.fromRight(E));
                  break;

                case "Bracket":
                  J--;
                  null === B && (F = d.fromRight(E), L = new e("Cons", new e("Release", R._2, F), L, K), M === K || 0 < J) && (u = 1, E = R._3(F));
                  break;

                case "Release":
                  L = new e("Cons", new e("Finalized", E, B), L, M);
                  u = 1;
                  E = M && M !== K && 0 === J ? R._1.killed(d.fromLeft(M))(R._2) : B ? R._1.failed(d.fromLeft(B))(R._2) : R._1.completed(d.fromRight(E))(R._2);
                  B = null;
                  J++;
                  break;

                case "Finalizer":
                  J++;
                  L = new e("Cons", new e("Finalized", E, B), L, M);
                  u = 1;
                  E = R._1;
                  break;

                case "Finalized":
                  J--, u = 5, E = R._1, B = R._2;
              }
              break;

            case 6:
              for (var v in X) {
                X.hasOwnProperty(v) && (H = H && X[v].rethrow, l(X[v].handler(E)));
              }

              X = null;
              M && B ? setTimeout(function () {
                throw d.fromLeft(B);
              }, 0) : d.isLeft(E) && H && setTimeout(function () {
                if (H) throw d.fromLeft(E);
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

      function D(x) {
        return function () {
          if (6 === u) return H = H && x.rethrow, x.handler(E)(), function () {};
          var K = V++;
          X = X || {};
          X[K] = x;
          return function () {
            null !== X && delete X[K];
          };
        };
      }

      var z = 0,
          u = 0,
          E = w,
          B = null,
          M = null,
          G = null,
          I = null,
          L = null,
          J = 0,
          V = 0,
          X = null,
          H = !0;
      return {
        kill: function kill(x, K) {
          return function () {
            if (6 === u) return K(d.right(void 0))(), function () {};
            var F = D({
              rethrow: !1,
              handler: function handler() {
                return K(d.right(void 0));
              }
            })();

            switch (u) {
              case 0:
                M = d.left(x);
                u = 6;
                E = M;
                t(z);
                break;

              case 4:
                null === M && (M = d.left(x));
                0 === J && (4 === u && (L = new e("Cons", new e("Finalizer", E(x)), L, M)), u = 5, B = E = null, t(++z));
                break;

              default:
                null === M && (M = d.left(x)), 0 === J && (u = 5, B = E = null);
            }

            return F;
          };
        },
        join: function join(x) {
          return function () {
            var K = D({
              rethrow: !1,
              handler: x
            })();
            0 === u && t(z);
            return K;
          };
        },
        onComplete: D,
        isSuspended: function isSuspended() {
          return 0 === u;
        },
        run: function run() {
          0 === u && (h.isDraining() ? t(z) : h.enqueue(function () {
            t(z);
          }));
        }
      };
    }

    function r(d, q, w, t) {
      function D(X, H, x) {
        var K = H,
            F = null,
            R = null,
            v = 0;
        H = {};

        a: for (;;) {
          var P = null;

          switch (K.tag) {
            case "Forked":
              K._3 === b && (P = M[K._1], H[v++] = P.kill(X, function (Y) {
                return function () {
                  v--;
                  0 === v && x(Y)();
                };
              }));
              if (null === F) break a;
              K = F._2;
              null === R ? F = null : (F = R._1, R = R._2);
              break;

            case "Map":
              K = K._2;
              break;

            case "Apply":
            case "Alt":
              F && (R = new e("Cons", F, R)), F = K, K = K._1;
          }
        }

        if (0 === v) x(d.right(void 0))();else for (X = 0, P = v; X < P; X++) {
          H[X] = H[X]();
        }
        return H;
      }

      function z(X, H, x) {
        var K, F;

        if (d.isLeft(X)) {
          var R = X;
          var v = null;
        } else v = X, R = null;

        for (;;) {
          var P = F = K = X = null;
          if (null !== J) break;

          if (null === H) {
            t(R || v)();
            break;
          }

          if (H._3 !== b) break;

          switch (H.tag) {
            case "Map":
              null === R ? (H._3 = d.right(H._1(d.fromRight(v))), v = H._3) : H._3 = R;
              break;

            case "Apply":
              X = H._1._3;
              K = H._2._3;

              if (R) {
                if (H._3 = R, F = !0, P = G++, I[P] = D(L, R === X ? H._2 : H._1, function () {
                  return function () {
                    delete I[P];
                    F ? F = !1 : null === x ? z(R, null, null) : z(R, x._1, x._2);
                  };
                }), F) {
                  F = !1;
                  return;
                }
              } else {
                if (X === b || K === b) return;
                v = d.right(d.fromRight(X)(d.fromRight(K)));
                H._3 = v;
              }

              break;

            case "Alt":
              X = H._1._3;
              K = H._2._3;
              if (X === b && d.isLeft(K) || K === b && d.isLeft(X)) return;
              if (X !== b && d.isLeft(X) && K !== b && d.isLeft(K)) R = v === X ? K : X, v = null, H._3 = R;else if (H._3 = v, F = !0, P = G++, I[P] = D(L, v === X ? H._2 : H._1, function () {
                return function () {
                  delete I[P];
                  F ? F = !1 : null === x ? z(v, null, null) : z(v, x._1, x._2);
                };
              }), F) {
                F = !1;
                return;
              }
          }

          null === x ? H = null : (H = x._1, x = x._2);
        }
      }

      function u(X) {
        return function (H) {
          return function () {
            delete M[X._1];
            X._3 = H;
            z(H, X._2._1, X._2._2);
          };
        };
      }

      function E(X, H) {
        J = d.left(X);
        var x;

        for (x in I) {
          if (I.hasOwnProperty(x)) {
            var K = I[x];

            for (x in K) {
              if (K.hasOwnProperty(x)) K[x]();
            }
          }
        }

        I = null;
        var F = D(X, V, H);
        return function (R) {
          return new e("Async", function (v) {
            return function () {
              for (var P in F) {
                if (F.hasOwnProperty(P)) F[P]();
              }

              return f;
            };
          });
        };
      }

      var B = 0,
          M = {},
          G = 0,
          I = {},
          L = Error("[ParAff] Early exit"),
          J = null,
          V = b;

      (function () {
        var X = 1,
            H = w,
            x = null,
            K = null;

        a: for (;;) {
          switch (X) {
            case 1:
              switch (H.tag) {
                case "Map":
                  x && (K = new e("Cons", x, K));
                  x = new e("Map", H._1, b, b);
                  H = H._2;
                  break;

                case "Apply":
                  x && (K = new e("Cons", x, K));
                  x = new e("Apply", b, H._2, b);
                  H = H._1;
                  break;

                case "Alt":
                  x && (K = new e("Cons", x, K));
                  x = new e("Alt", b, H._2, b);
                  H = H._1;
                  break;

                default:
                  var F = B++;
                  X = 5;
                  var R = H;
                  H = new e("Forked", F, new e("Cons", x, K), b);
                  R = n(d, q, R);
                  R.onComplete({
                    rethrow: !1,
                    handler: u(H)
                  })();
                  M[F] = R;
                  q && q.register(R);
              }

              break;

            case 5:
              if (null === x) break a;
              x._1 === b ? (x._1 = H, X = 1, H = x._2, x._2 = b) : (x._2 = H, H = x, null === K ? x = null : (x = K._1, K = K._2));
          }
        }

        V = H;

        for (F = 0; F < B; F++) {
          M[F].run();
        }
      })();

      return function (X) {
        return new e("Async", function (H) {
          return function () {
            return E(X, H);
          };
        });
      };
    }

    function y(d, q, w) {
      return new e("Async", function (t) {
        return function () {
          return r(d, q, w, t);
        };
      });
    }

    var b = {},
        h = function () {
      function d() {
        for (D = !0; 0 !== q;) {
          q--;
          var z = t[w];
          t[w] = void 0;
          w = (w + 1) % 1024;
          z();
        }

        D = !1;
      }

      var q = 0,
          w = 0,
          t = Array(1024),
          D = !1;
      return {
        isDraining: function isDraining() {
          return D;
        },
        enqueue: function enqueue(z) {
          if (1024 === q) {
            var u = D;
            d();
            D = u;
          }

          t[(w + q) % 1024] = z;
          q++;
          D || d();
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
          w = 0,
          t = 0;
      return {
        register: function register(D) {
          var z = w++;
          D.onComplete({
            rethrow: !0,
            handler: function handler(u) {
              return function () {
                t--;
                delete q[z];
              };
            }
          })();
          q[z] = D;
          t++;
        },
        isEmpty: function isEmpty() {
          return 0 === t;
        },
        killAll: function killAll(D, z) {
          return function () {
            function u(G) {
              B[G] = q[G].kill(D, function (I) {
                return function () {
                  delete B[G];
                  E--;
                  d.isLeft(I) && d.fromLeft(I) && setTimeout(function () {
                    throw d.fromLeft(I);
                  }, 0);
                  0 === E && z();
                };
              })();
            }

            if (0 === t) return z();
            var E = 0,
                B = {},
                M;

            for (M in q) {
              q.hasOwnProperty(M) && (E++, u(M));
            }

            q = {};
            t = w = 0;
            return function (G) {
              return new e("Sync", function () {
                for (var I in B) {
                  if (B.hasOwnProperty(I)) B[I]();
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
          var y = e.parallel(l);
          return function (b) {
            return y(k(b));
          };
        }());
        return function (y) {
          return n(r(y));
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
    return y;
  });
  var y = new l.Bind(function () {
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
  c.bindEffect = y;
  c.monadEffect = a;

  c.monoidEffect = function (q) {
    return new n.Monoid(function () {
      var w = q.Semigroup0();
      return new r.Semigroup(f.lift2(b)(r.append(w)));
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
      y = a["Control.Parallel.Class"],
      b = a["Control.Plus"],
      h = a["Data.Either"],
      d = a["Data.Foldable"],
      q = a["Data.Function"],
      w = a["Data.Functor"],
      t = a["Data.Monoid"],
      D = a["Data.Semigroup"],
      z = a["Data.Unit"],
      u = a.Effect,
      E = a["Effect.Class"],
      B = a["Effect.Exception"],
      M = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var G = new w.Functor(e._parAffMap),
      I = new w.Functor(e._map),
      L = function () {
    return {
      isLeft: function isLeft(ca) {
        if (ca instanceof h.Left) return !0;
        if (ca instanceof h.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [ca.constructor.name]);
      },
      fromLeft: function fromLeft(ca) {
        if (ca instanceof h.Left) return ca.value0;
        if (ca instanceof h.Right) return M.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [ca.constructor.name]);
      },
      fromRight: function fromRight(ca) {
        if (ca instanceof h.Right) return ca.value0;
        if (ca instanceof h.Left) return M.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [ca.constructor.name]);
      },
      left: h.Left.create,
      right: h.Right.create
    };
  }(),
      J = function J(ca) {
    return function () {
      var xa = e._makeFiber(L, ca)();

      xa.run();
      return xa;
    };
  },
      V = new l.Apply(function () {
    return G;
  }, e._parAffApply),
      X = new k.Monad(function () {
    return K;
  }, function () {
    return H;
  }),
      H = new p.Bind(function () {
    return x;
  }, e._bind),
      x = new l.Apply(function () {
    return I;
  }, k.ap(X)),
      K = new f.Applicative(function () {
    return x;
  }, e._pure),
      F = new E.MonadEffect(function () {
    return X;
  }, e._liftEffect);

  l = function () {
    var ca = E.liftEffect(F);
    return function (xa) {
      return q["const"](ca(xa));
    };
  }();

  var R = new n.MonadThrow(function () {
    return X;
  }, e._throwError),
      v = new n.MonadError(function () {
    return R;
  }, e._catchError),
      P = function P(ca) {
    return function (xa) {
      return J(p.bindFlipped(H)(function () {
        var Q = E.liftEffect(F);
        return function (ja) {
          return Q(ca(ja));
        };
      }())(n["try"](v)(xa)));
    };
  },
      Y = new y.Parallel(function () {
    return ra;
  }, function () {
    return X;
  }, a.unsafeCoerce, e._sequential),
      ra = new f.Applicative(function () {
    return V;
  }, function () {
    var ca = y.parallel(Y),
        xa = f.pure(K);
    return function (Q) {
      return ca(xa(Q));
    };
  }()),
      za = new D.Semigroup(function (ca) {
    return function (xa) {
      return function (Q) {
        return r.parSequence_(Y)(d.foldableArray)([ca(Q), xa(Q)]);
      };
    };
  });

  D = q["const"](f.pure(K)(z.unit));
  var Aa = new t.Monoid(function () {
    return za;
  }, D);
  z = e.makeAff(function (ca) {
    return f.pure(u.applicativeEffect)(t.mempty(Aa));
  });
  var A = new g.Alt(function () {
    return G;
  }, e._parAffAlt),
      da = new g.Alt(function () {
    return I;
  }, function (ca) {
    return function (xa) {
      return n.catchError(v)(ca)(q["const"](xa));
    };
  });
  g = new b.Plus(function () {
    return da;
  }, n.throwError(R)(B.error("Always fails")));
  b = new b.Plus(function () {
    return A;
  }, y.parallel(Y)(b.empty(g)));

  c.runAff_ = function (ca) {
    return function (xa) {
      return w["void"](u.functorEffect)(P(ca)(xa));
    };
  };

  c.delay = function (ca) {
    return e._delay(h.Right.create, ca);
  };

  c.never = z;
  c.nonCanceler = D;
  c.effectCanceler = l;
  c.functorAff = I;
  c.applicativeAff = K;
  c.bindAff = H;
  c.monadErrorAff = v;
  c.monadEffectAff = F;
  c.altParAff = A;
  c.plusParAff = b;
  c.parallelAff = Y;
  c.monoidCanceler = Aa;
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
      y = function () {
    function z(u) {
      this.value0 = u;
    }

    z.create = function (u) {
      return new z(u);
    };

    return z;
  }(),
      b = function () {
    function z(u, E) {
      this.value0 = u;
      this.value1 = E;
    }

    z.create = function (u) {
      return function (E) {
        return new z(u, E);
      };
    };

    return z;
  }(),
      h = function () {
    function z(u, E) {
      this.value0 = u;
      this.value1 = E;
    }

    z.create = function (u) {
      return function (E) {
        return new z(u, E);
      };
    };

    return z;
  }(),
      d = function () {
    function z(u, E) {
      this.value0 = u;
      this.value1 = E;
    }

    z.create = function (u) {
      return function (E) {
        return new z(u, E);
      };
    };

    return z;
  }(),
      q = new r.Show(function (z) {
    if (z instanceof y) return "(ForeignError " + (r.show(r.showString)(z.value0) + ")");
    if (z instanceof h) return "(ErrorAtIndex " + (r.show(r.showInt)(z.value0) + (" " + (r.show(q)(z.value1) + ")")));
    if (z instanceof d) return "(ErrorAtProperty " + (r.show(r.showString)(z.value0) + (" " + (r.show(q)(z.value1) + ")")));
    if (z instanceof b) return "(TypeMismatch " + (r.show(r.showString)(z.value0) + (" " + (r.show(r.showString)(z.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [z.constructor.name]);
  }),
      w = function w(z) {
    if (z instanceof y) return z.value0;
    if (z instanceof h) return "Error at array index " + (r.show(r.showInt)(z.value0) + (": " + w(z.value1)));
    if (z instanceof d) return "Error at property " + (r.show(r.showString)(z.value0) + (": " + w(z.value1)));
    if (z instanceof b) return "Type mismatch: expected " + (z.value0 + (", found " + z.value1));
    throw Error("Failed pattern match at Foreign (line 72, column 1 - line 72, column 45): " + [z.constructor.name]);
  },
      t = function () {
    var z = f.throwError(l.monadThrowExceptT(k.monadIdentity));
    return function (u) {
      return z(n.singleton(u));
    };
  }();

  a = function a(z) {
    return function (u) {
      if (e.tagOf(u) === z) return g.pure(l.applicativeExceptT(k.monadIdentity))(e.unsafeFromForeign(u));
      if (p.otherwise) return t(new b(z, e.tagOf(u)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [z.constructor.name, u.constructor.name]);
    };
  };

  var D = a("String");
  c.ForeignError = y;
  c.TypeMismatch = b;
  c.ErrorAtIndex = h;
  c.ErrorAtProperty = d;
  c.renderForeignError = w;
  c.unsafeReadTagged = a;
  c.readString = D;

  c.readArray = function (z) {
    if (e.isArray(z)) return g.pure(l.applicativeExceptT(k.monadIdentity))(e.unsafeFromForeign(z));
    if (p.otherwise) return t(new b("array", e.tagOf(z)));
    throw Error("Failed pattern match at Foreign (line 147, column 1 - line 147, column 42): " + [z.constructor.name]);
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
      y = a["Control.Monad.Except"],
      b = a["Control.Monad.Except.Trans"],
      h = a["Data.Argonaut.Core"],
      d = a["Data.Argonaut.Parser"],
      q = a["Data.Array"],
      w = a["Data.Either"],
      t = a["Data.Eq"],
      D = a["Data.Foldable"],
      z = a["Data.FormURLEncoded"],
      u = a["Data.Function"],
      E = a["Data.Functor"],
      B = a["Data.HTTP.Method"],
      M = a["Data.HeytingAlgebra"],
      G = a["Data.Identity"],
      I = a["Data.List.NonEmpty"],
      L = a["Data.Maybe"],
      J = a["Data.Nullable"],
      V = a["Data.Unit"],
      X = a["Effect.Aff"],
      H = a["Effect.Aff.Compat"],
      x = a["Effect.Exception"],
      K = a.Foreign,
      F = function () {
    function da(ca) {
      this.value0 = ca;
    }

    da.create = function (ca) {
      return new da(ca);
    };

    return da;
  }(),
      R = function () {
    function da(ca, xa) {
      this.value0 = ca;
      this.value1 = xa;
    }

    da.create = function (ca) {
      return function (xa) {
        return new da(ca, xa);
      };
    };

    return da;
  }(),
      v = function () {
    function da(ca) {
      this.value0 = ca;
    }

    da.create = function (ca) {
      return new da(ca);
    };

    return da;
  }(),
      P = function P(da) {
    var ca = function ca(qa) {
      return "" === qa ? k.pure(b.applicativeExceptT(G.monadIdentity))(h.jsonEmptyObject) : w.either(function (Ba) {
        return K.fail(K.ForeignError.create(Ba));
      })(k.pure(b.applicativeExceptT(G.monadIdentity)))(d.jsonParser(qa));
    },
        xa = function () {
      if (da.responseFormat instanceof l.ArrayBuffer) return K.unsafeReadTagged("ArrayBuffer");
      if (da.responseFormat instanceof l.Blob) return K.unsafeReadTagged("Blob");
      if (da.responseFormat instanceof l.Document) return K.unsafeReadTagged("Document");
      if (da.responseFormat instanceof l.Json) return n.composeKleisliFlipped(b.bindExceptT(G.monadIdentity))(function (qa) {
        return da.responseFormat.value0(ca(qa));
      })(K.unsafeReadTagged("String"));
      if (da.responseFormat instanceof l.String) return K.unsafeReadTagged("String");
      if (da.responseFormat instanceof l.Ignore) return u["const"](da.responseFormat.value0(k.pure(b.applicativeExceptT(G.monadIdentity))(V.unit)));
      throw Error("Failed pattern match at Affjax (line 237, column 18 - line 243, column 57): " + [da.responseFormat.constructor.name]);
    }(),
        Q = function Q(qa) {
      if (qa instanceof g.ArrayView) return w.Right.create(qa.value0(K.unsafeToForeign));
      if (qa instanceof g.Blob || qa instanceof g.Document || qa instanceof g.String || qa instanceof g.FormData) return w.Right.create(K.unsafeToForeign(qa.value0));
      if (qa instanceof g.FormURLEncoded) return w.note("Body contains values that cannot be encoded as application/x-www-form-urlencoded")(E.map(L.functorMaybe)(K.unsafeToForeign)(z.encode(qa.value0)));
      if (qa instanceof g.Json) return w.Right.create(K.unsafeToForeign(h.stringify(qa.value0)));
      throw Error("Failed pattern match at Affjax (line 203, column 20 - line 218, column 69): " + [qa.constructor.name]);
    },
        ja = function ja(qa) {
      return function (Ba) {
        return qa instanceof L.Just && !D.any(D.foldableArray)(M.heytingAlgebraBoolean)(u.on(t.eq(t.eqString))(f.name)(qa.value0))(Ba) ? q.snoc(Ba)(qa.value0) : Ba;
      };
    },
        Fa = function Fa(qa) {
      return ja(E.map(L.functorMaybe)(f.ContentType.create)(n.bindFlipped(L.bindMaybe)(g.toMediaType)(qa)))(ja(E.map(L.functorMaybe)(f.Accept.create)(l.toMediaType(da.responseFormat)))(da.headers));
    },
        ta = function ta(qa) {
      return {
        method: B.print(da.method),
        url: da.url,
        headers: E.map(E.functorArray)(function (Ba) {
          return {
            field: f.name(Ba),
            value: f.value(Ba)
          };
        })(Fa(da.content)),
        content: qa,
        responseType: l.toResponseType(da.responseFormat),
        username: J.toNullable(da.username),
        password: J.toNullable(da.password),
        withCredentials: da.withCredentials
      };
    },
        va = function va(qa) {
      return E.mapFlipped(X.functorAff)(r["try"](X.monadErrorAff)(H.fromEffectFnAff(e._ajax(p.ResponseHeader.create, ta(qa)))))(function (Ba) {
        if (Ba instanceof w.Right) {
          var Ha = y.runExcept(xa(Ba.value0.body));
          if (Ha instanceof w.Left) return new w.Left(new R(I.head(Ha.value0), Ba.value0));
          if (Ha instanceof w.Right) return new w.Right({
            body: Ha.value0,
            headers: Ba.value0.headers,
            status: Ba.value0.status,
            statusText: Ba.value0.statusText
          });
          throw Error("Failed pattern match at Affjax (line 184, column 9 - line 186, column 52): " + [Ha.constructor.name]);
        }

        if (Ba instanceof w.Left) return new w.Left(new v(Ba.value0));
        throw Error("Failed pattern match at Affjax (line 182, column 86 - line 188, column 28): " + [Ba.constructor.name]);
      });
    };

    if (da.content instanceof L.Nothing) return va(J.toNullable(L.Nothing.value));

    if (da.content instanceof L.Just) {
      Q = Q(da.content.value0);
      if (Q instanceof w.Right) return va(J.toNullable(new L.Just(Q.value0)));
      if (Q instanceof w.Left) return k.pure(X.applicativeAff)(new w.Left(new F(Q.value0)));
      throw Error("Failed pattern match at Affjax (line 173, column 7 - line 177, column 48): " + [Q.constructor.name]);
    }

    throw Error("Failed pattern match at Affjax (line 169, column 3 - line 177, column 48): " + [da.content.constructor.name]);
  },
      Y = new w.Left(B.GET.value),
      ra = [],
      za = L.Nothing.value,
      Aa = L.Nothing.value,
      A = L.Nothing.value;

  c.printError = function (da) {
    if (da instanceof F) return "There was a problem with the request content: " + da.value0;
    if (da instanceof R) return "There was a problem with the response body: " + K.renderForeignError(da.value0);
    if (da instanceof v) return "There was a problem making the request: " + x.message(da.value0);
    throw Error("Failed pattern match at Affjax (line 91, column 14 - line 97, column 66): " + [da.constructor.name]);
  };

  c.get = function (da) {
    return function (ca) {
      return P({
        method: Y,
        url: ca,
        headers: ra,
        content: za,
        username: Aa,
        password: A,
        withCredentials: !1,
        responseFormat: da
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
      y = function y(b) {
    return function (h) {
      return function (d) {
        var q = function q(w) {
          return function (t) {
            return function (D) {
              for (var z = w, u = t, E = !1, B; !E;) {
                B = z;
                var M = u,
                    G = D;
                if (G instanceof g.Nil) E = !0, B = M;else {
                  if (G instanceof g.Cons) z = B, u = B(M)(G.value0), D = G.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [B.constructor.name, M.constructor.name, G.constructor.name]);
                  B = void 0;
                }
              }

              return B;
            };
          };
        };

        return function (w) {
          return function (t) {
            function D(B, M) {
              B = e.uncons(B);
              if (B instanceof f.Nothing) return u = !0, q(function (G) {
                return function (I) {
                  return I(G);
                };
              })(h)(M);
              if (B instanceof f.Just) z = B.value0.value1, t = new g.Cons(b(B.value0.value0), M);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [B.constructor.name]);
            }

            for (var z = w, u = !1, E; !u;) {
              E = D(z, t);
            }

            return E;
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
      b = e["null"](b.value1) ? k.value : y(r)(k.value)(b.value1);
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
      y = a["Data.Semigroup"],
      b = a["Unsafe.Coerce"],
      h = function () {
    function B(M, G) {
      this.value0 = M;
      this.value1 = G;
    }

    B.create = function (M) {
      return function (G) {
        return new B(M, G);
      };
    };

    return B;
  }(),
      d = function () {
    function B(M) {
      this.value0 = M;
    }

    B.create = function (M) {
      return new B(M);
    };

    return B;
  }(),
      q = function () {
    function B(M, G) {
      this.value0 = M;
      this.value1 = G;
    }

    B.create = function (M) {
      return function (G) {
        return new B(M, G);
      };
    };

    return B;
  }(),
      w = function w(B) {
    function M(L) {
      var J = function J(X) {
        return function (H) {
          return new h(X.value0, y.append(p.semigroupCatList)(X.value1)(H));
        };
      };

      if (L.value0 instanceof d) {
        var V = p.uncons(L.value1);
        if (V instanceof r.Nothing) return G = !0, new d(L.value0.value0);

        if (V instanceof r.Just) {
          B = J((0, V.value0.value0)(L.value0.value0))(V.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [V.constructor.name]);
      }

      if (L.value0 instanceof q) return G = !0, new q(L.value0.value0, function (X) {
        return J(L.value0.value1(X))(L.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [L.value0.constructor.name]);
    }

    for (var G = !1, I; !G;) {
      I = M(B);
    }

    return I;
  },
      t = function t(B) {
    return function (M) {
      return function (G) {
        G = w(G);
        if (G instanceof d) return M(G.value0);
        if (G instanceof q) return B(G.value0)(G.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [G.constructor.name]);
      };
    };
  };

  a = new l.Monad(function () {
    return E;
  }, function () {
    return z;
  });
  var D = new n.Functor(function (B) {
    return function (M) {
      return f.bindFlipped(z)(function () {
        var G = e.pure(E);
        return function (I) {
          return G(B(I));
        };
      }())(M);
    };
  }),
      z = new f.Bind(function () {
    return u;
  }, function (B) {
    return function (M) {
      return new h(B.value0, p.snoc(B.value1)(M));
    };
  }),
      u = new g.Apply(function () {
    return D;
  }, l.ap(a)),
      E = new e.Applicative(function () {
    return u;
  }, function (B) {
    return new h(d.create(B), p.empty);
  });

  c.wrap = function (B) {
    return new h(new q(B, b.unsafeCoerce), p.empty);
  };

  c.liftF = function (B) {
    return new h(new q(B, function () {
      var M = e.pure(E);
      return function (G) {
        return M(G);
      };
    }()), p.empty);
  };

  c.resume = function (B) {
    return t(function (M) {
      return function (G) {
        return new k.Left(n.map(B)(G)(M));
      };
    })(k.Right.create);
  };

  c["resume'"] = t;
  c.freeFunctor = D;
  c.freeBind = z;
  c.freeApplicative = E;
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
    var y = f.fromJust();
    return function (b) {
      return y(r(k(b)));
    };
  }(e.uncons);

  var n = function (r) {
    return function (y) {
      return r(k(y));
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
    return function (y) {
      return p(e.cons(r)(y));
    };
  };

  c.snoc = function (r) {
    return function (y) {
      return p(e.snoc(k(r))(y));
    };
  };

  c.uncons = a;

  c.updateAt = function (r) {
    return function (y) {
      var b = e.updateAt(r)(y);
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
    function r(y, b) {
      this.value0 = y;
      this.value1 = b;
    }

    r.create = function (y) {
      return function (b) {
        return new r(y, b);
      };
    };

    return r;
  }(),
      k = function k(r) {
    return function (y) {
      return function (b) {
        return (0, r.foldrWithIndex)(function (h) {
          return function (d) {
            return function (q) {
              return l.append(y.Semigroup0())(b(h)(d))(q);
            };
          };
        })(f.mempty(y));
      };
    };
  },
      n = new function (r, y, b, h) {
    this.Foldable0 = r;
    this.foldMapWithIndex = y;
    this.foldlWithIndex = b;
    this.foldrWithIndex = h;
  }(function () {
    return e.foldableArray;
  }, function (r) {
    return k(n)(r);
  }, function (r) {
    return function (y) {
      var b = e.foldl(e.foldableArray)(function (d) {
        return function (q) {
          return r(q.value0)(d)(q.value1);
        };
      })(y),
          h = g.mapWithIndex(g.functorWithIndexArray)(p.create);
      return function (d) {
        return b(h(d));
      };
    };
  }, function (r) {
    return function (y) {
      var b = e.foldr(e.foldableArray)(function (d) {
        return function (q) {
          return r(d.value0)(d.value1)(q);
        };
      })(y),
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
      y = a["Data.Foldable"].foldableArray,
      b = new f.Foldable1(function () {
    return y;
  }, function (h) {
    return e.fold1Impl(g.append(h));
  }, function (h) {
    return f.foldMap1Default(b)(n)(h);
  });
  c.semigroupNonEmptyArray = k;
  c.functorNonEmptyArray = n;
  c.foldableNonEmptyArray = y;
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

    function g(r, y) {
      this.queue = r;
      this.value = y;
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
      } catch (y) {
        setTimeout(function () {
          throw y;
        }, 0);
      }
    }

    function p(r) {
      switch (r.size) {
        case 0:
          return null;

        case 1:
          var y = r.head;
          r.head = null;
          break;

        case 2:
          y = r.last;
          r.head.next = null;
          r.last = null;
          break;

        default:
          y = r.last, r.last = y.prev, r.last.next = null;
      }

      y.prev = null;
      y.queue = null;
      r.size--;
      return y.value;
    }

    function k(r) {
      switch (r.size) {
        case 0:
          return null;

        case 1:
          var y = r.head;
          r.head = null;
          break;

        case 2:
          y = r.head;
          r.last.prev = null;
          r.head = r.last;
          r.last = null;
          break;

        default:
          y = r.head, r.head = y.next, r.head.prev = null;
      }

      y.next = null;
      y.queue = null;
      r.size--;
      return y.value;
    }

    var n = {};
    f.EMPTY = n;

    f.putLast = function (r, y) {
      y = new g(r, y);

      switch (r.size) {
        case 0:
          r.head = y;
          break;

        case 1:
          y.prev = r.head;
          r.head.next = y;
          r.last = y;
          break;

        default:
          y.prev = r.last, r.last.next = y, r.last = y;
      }

      r.size++;
      return y;
    };

    f.takeLast = p;
    f.takeHead = k;

    f.deleteCell = function (r) {
      null !== r.queue && (r.queue.last === r ? p(r.queue) : r.queue.head === r ? k(r.queue) : (r.prev && (r.prev.next = r.next), r.next && (r.next.prev = r.prev), r.queue.size--, r.queue = null, r.value = null, r.next = null, r.prev = null));
    };

    f.drainVar = function (r, y) {
      if (!y.draining) {
        var b = y.puts,
            h = y.takes,
            d = y.reads,
            q,
            w;

        for (y.draining = !0;;) {
          var t = q = null;
          var D = y.value;
          var z = d.size;

          if (null !== y.error) {
            for (D = r.left(y.error); q = k(b);) {
              l(q.cb(D));
            }

            for (; t = k(d);) {
              l(t(D));
            }

            for (; w = k(h);) {
              l(w(D));
            }

            break;
          }

          D === n && (q = k(b)) && (y.value = D = q.value);

          if (D !== n) {
            for (w = k(h); z-- && (t = k(d));) {
              l(t(r.right(D)));
            }

            null !== w && (y.value = n, l(w(r.right(D))));
          }

          null !== q && l(q.cb(r.right(void 0)));
          if (y.value === n && 0 === b.size || y.value !== n && 0 === h.size) break;
        }

        y.draining = !1;
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
      y = a["Control.Parallel.Class"],
      b = a["Control.Plus"],
      h = a["Data.Array.NonEmpty"],
      d = a["Data.Array.NonEmpty.Internal"],
      q = a["Data.Either"],
      w = a["Data.FoldableWithIndex"],
      t = a["Data.Functor"],
      D = a["Data.Maybe"],
      z = a["Data.Monoid"],
      u = a["Data.Semigroup"],
      E = a["Data.Semigroup.Foldable"],
      B = a["Data.Show"],
      M = a["Data.Tuple"],
      G = a.Effect,
      I = a["Effect.AVar"],
      L = a["Effect.Aff"],
      J = a["Effect.Aff.AVar"],
      V = a["Effect.Aff.Class"],
      X = a["Effect.Class"],
      H = a["Effect.Console"],
      x = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (ta) {
    return ta(p.identity(p.categoryFn));
  });

  var K = n.freeFunctor,
      F = n.freeBind,
      R = n.freeApply,
      v = n.freeApplicative,
      P = new k.Monad(function () {
    return v;
  }, function () {
    return F;
  }),
      Y = function Y(ta) {
    return ta;
  },
      ra = function ra(ta) {
    return n["resume'"](function (va) {
      return function (qa) {
        return new q.Right(t.map(ta)(qa)(va));
      };
    })(q.Left.create);
  },
      za = new t.Functor(function (ta) {
    return function (va) {
      if (va instanceof q.Right) va = new q.Right({
        cont: t.map(L.functorAff)(ta)(va.value0.cont),
        view: va.value0.view
      });else if (va instanceof q.Left) va = new q.Left(t.map(G.functorEffect)(ta)(va.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [va.constructor.name]);
      return va;
    };
  }),
      Aa = function Aa(ta) {
    return n.liftF(q.Left.create(ta));
  },
      A = function A(ta) {
    return new X.MonadEffect(function () {
      return P;
    }, Aa);
  },
      da = function da(ta) {
    return n.liftF(new q.Right({
      view: ta,
      cont: L.never
    }));
  },
      ca = function ca(ta) {
    return new u.Semigroup(function (va) {
      return function (qa) {
        return r.orr(Q(ta))([va, qa]);
      };
    });
  },
      xa = function xa(ta) {
    return new b.Plus(function () {
      return ja(ta);
    }, da(z.mempty(ta)));
  },
      Q = function Q(ta) {
    return new r.MultiAlternative(function () {
      return xa(ta);
    }, function (va) {
      var qa = function qa(ea) {
        return function (N) {
          return function (Z) {
            var T = t.map(d.functorNonEmptyArray)(function (Ga) {
              return n.wrap(q.Right.create(Ga));
            })(N);
            return l.bind(L.bindAff)(y.sequential(L.parallelAff)(w.foldlWithIndex(d.foldableWithIndexNonEmptyArray)(function (Ga) {
              return function (Ea) {
                return function (oa) {
                  return e.alt(L.altParAff)(y.parallel(L.parallelAff)(t.map(L.functorAff)(M.Tuple.create(Ga))(oa)))(Ea);
                };
              };
            })(b.empty(L.plusParAff))(Z)))(function (Ga) {
              return f.pure(L.applicativeAff)(la(ea)(D.fromMaybe(T)(h.updateAt(Ga.value0)(Ga.value1)(T))));
            });
          };
        };
      },
          Ba = function Ba(ea) {
        return function (N) {
          return n.wrap(new q.Right({
            view: E.foldMap1(d.foldable1NonEmptyArray)(ea.Semigroup0())(function (Z) {
              return Z.view;
            })(N),
            cont: qa(ea)(N)(t.map(d.functorNonEmptyArray)(function (Z) {
              return Z.cont;
            })(N))
          }));
        };
      },
          Ha = function Ha(ea) {
        return function (N) {
          return function (Z) {
            var T = h.uncons(Z),
                Ga = ra(za)(T.head);
            if (Ga instanceof q.Left) return f.pure(n.freeApplicative)(Ga.value0);

            if (Ga instanceof q.Right) {
              if (Ga.value0 instanceof q.Left) return n.wrap(new q.Left(function () {
                var Ea = Ga.value0.value0();
                return Ha(ea)(N)(h["cons'"](Ea)(T.tail));
              }));
              if (Ga.value0 instanceof q.Right) return ha(ea)(h.snoc(N)(Ga.value0.value0))(T.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [Ga.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [Ga.constructor.name]);
          };
        };
      },
          ha = function ha(ea) {
        return function (N) {
          return function (Z) {
            Z = h.fromArray(Z);
            if (Z instanceof D.Nothing) return Ba(ea)(N);
            if (Z instanceof D.Just) return Ha(ea)(N)(Z.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [Z.constructor.name]);
          };
        };
      },
          la = function la(ea) {
        return function (N) {
          var Z = h.uncons(N),
              T = ra(za)(Z.head);
          if (T instanceof q.Left) return f.pure(n.freeApplicative)(T.value0);

          if (T instanceof q.Right) {
            if (T.value0 instanceof q.Left) return n.wrap(new q.Left(function () {
              var Ga = T.value0.value0();
              return la(ea)(h["cons'"](Ga)(Z.tail));
            }));
            if (T.value0 instanceof q.Right) return ha(ea)(h.singleton(T.value0.value0))(Z.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [T.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [T.constructor.name]);
        };
      };

      va = h.fromArray(va);
      if (va instanceof D.Just) return la(ta)(t.map(d.functorNonEmptyArray)(Y)(va.value0));
      if (va instanceof D.Nothing) return b.empty(xa(ta));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [va.constructor.name]);
    });
  },
      ja = function ja(ta) {
    return new e.Alt(function () {
      return K;
    }, u.append(ca(ta)));
  },
      Fa = function Fa(ta) {
    return function (va) {
      var qa = function qa(Ba) {
        return function (Ha) {
          if (Ha instanceof q.Left) return H.log("Aff failed - " + B.show(x.showError)(Ha.value0));
          if (Ha instanceof q.Right) return t["void"](G.functorEffect)(I.tryPut(Ha.value0)(Ba));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [Ba.constructor.name, Ha.constructor.name]);
        };
      };

      return n.wrap(new q.Left(function () {
        var Ba = I.empty();
        L.runAff_(qa(Ba))(va)();
        var Ha = I.tryTake(Ba)();
        if (Ha instanceof D.Just) return f.pure(n.freeApplicative)(Ha.value0);
        if (Ha instanceof D.Nothing) return n.liftF(new q.Right({
          view: ta,
          cont: J.take(Ba)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [Ha.constructor.name]);
      }));
    };
  };

  c.WidgetStep = function (ta) {
    return ta;
  };

  c.Widget = function (ta) {
    return ta;
  };

  c.unWidget = Y;
  c.resume = ra;
  c.display = da;
  c.functorWidgetStep = za;
  c.widgetFunctor = K;
  c.widgetBind = F;
  c.widgetApplicative = v;
  c.widgetApply = R;
  c.widgetShiftMap = a;
  c.widgetMultiAlternative = Q;

  c.widgetMonoid = function (ta) {
    return new z.Monoid(function () {
      return ca(ta);
    }, b.empty(xa(ta)));
  };

  c.widgetAlt = ja;
  c.widgetPlus = xa;

  c.widgetAlternative = function (ta) {
    return new g.Alternative(function () {
      return v;
    }, function () {
      return xa(ta);
    });
  };

  c.widgetMonadEff = A;

  c.widgetMonadAff = function (ta) {
    return new V.MonadAff(function () {
      return A(ta);
    }, Fa(z.mempty(ta)));
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
      y = a["Effect.AVar"],
      b = a["Effect.Aff"],
      h = a["Effect.Aff.AVar"],
      d = a["Effect.Aff.Class"],
      q = function q(w) {
    return function (t) {
      var D = e.resume(e.functorWidgetStep)(t);
      if (D instanceof k.Left) return f.pure(l.freeApplicative)(D.value0);

      if (D instanceof k.Right) {
        if (D.value0 instanceof k.Left) return l.wrap(e.WidgetStep(new k.Left(function () {
          var z = D.value0.value0();
          return q(w)(z);
        })));
        if (D.value0 instanceof k.Right) return l.wrap(e.WidgetStep(new k.Left(function () {
          var z = y.empty(),
              u = p.sequential(b.parallelAff)(g.alt(b.altParAff)(p.parallel(b.parallelAff)(d.liftAff(d.monadAffAff)(h.take(z))))(p.parallel(b.parallelAff)(n.map(b.functorAff)(q(w))(D.value0.value0.cont))));
          return l.wrap(e.WidgetStep(new k.Right({
            view: w(function (E) {
              return n["void"](r.functorEffect)(y.tryPut(f.pure(l.freeApplicative)(E))(z));
            })(D.value0.value0.view),
            cont: u
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [D.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [D.constructor.name]);
    };
  };

  c.mkLeafWidget = function (w) {
    return e.Widget(l.wrap(e.WidgetStep(new k.Left(function () {
      var t = y.empty();
      return l.wrap(e.WidgetStep(new k.Right({
        view: w(function (D) {
          return n["void"](r.functorEffect)(y.tryPut(f.pure(l.freeApplicative)(D))(t));
        }),
        cont: d.liftAff(d.monadAffAff)(h.take(t))
      })));
    }))));
  };

  c.mkNodeWidget = function (w) {
    return function (t) {
      return q(w)(t);
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
    return function (y) {
      return function (b) {
        return function (h) {
          return p.shiftMap(r)(function (d) {
            return function (q) {
              return e.mkNodeWidget(function (w) {
                return function (t) {
                  return b(k.map(y)(function () {
                    var D = f.mkProp(w),
                        z = k.map(f.functorProps)(d);
                    return function (u) {
                      return D(z(u));
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
    return function (y) {
      return function (b) {
        return function (h) {
          return g.liftWidget(r)(e.mkLeafWidget(function (d) {
            return b(k.map(y)(f.mkProp(d))(h));
          }));
        };
      };
    };
  };

  c["el'"] = function (r) {
    return function (y) {
      return function (b) {
        return function (h) {
          return function (d) {
            var q = n(r)(b)(h)(d),
                w = l.orr(y);
            return function (t) {
              return q(w(t));
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
      y = a["Effect.Aff"],
      b = function b(d) {
    return function (q) {
      var w = f.resume(e.functorWidgetStep)(e.unWidget(q));
      if (w instanceof l.Right) return g.pure(r.applicativeEffect)(new n.Tuple(q, k.mempty(d)));

      if (w instanceof l.Left) {
        if (w.value0 instanceof l.Left) return function () {
          var t = w.value0.value0();
          return b(d)(t)();
        };
        if (w.value0 instanceof l.Right) return g.pure(r.applicativeEffect)(new n.Tuple(f.wrap(new l.Right(w.value0.value0)), w.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [w.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [w.constructor.name]);
    };
  },
      h = function h(d) {
    return function (q) {
      return function (w) {
        var t = f.resume(e.functorWidgetStep)(w);
        if (t instanceof l.Right) return g.pure(r.applicativeEffect)(k.mempty(d));

        if (t instanceof l.Left) {
          if (t.value0 instanceof l.Left) return function () {
            var D = t.value0.value0();
            return h(d)(q)(D)();
          };
          if (t.value0 instanceof l.Right) return function () {
            y.runAff_(function () {
              var D = p.map(l.functorEither)(e.Widget);
              return function (z) {
                return q(D(z));
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
      y = a["Control.Plus"],
      b = a["Control.ShiftMap"],
      h = a["Data.Functor"],
      d = a["Data.Lazy"],
      q = a["Data.Tuple"],
      w = function w(I) {
    return q.snd(d.force(I));
  },
      t = function t(I) {
    return function (L) {
      return d.defer(function (J) {
        return new q.Tuple(I, L);
      });
    };
  },
      D = function D(I) {
    return q.fst(d.force(I));
  },
      z = function z(I) {
    return new h.Functor(function (L) {
      var J = function J(V) {
        return h.map(d.functorLazy)(function (X) {
          return new q.Tuple(L(X.value0), h.map(I)(J)(X.value1));
        })(V);
      };

      return J;
    });
  },
      u = function u(I) {
    return new n.Extend(function () {
      return z(I);
    }, function (L) {
      var J = function J(V) {
        return h.map(d.functorLazy)(function (X) {
          return new q.Tuple(L(V), h.map(I)(J)(X.value1));
        })(V);
      };

      return J;
    });
  },
      E = function E(I) {
    return new r.Monad(function () {
      return G(I);
    }, function () {
      return B(I);
    });
  },
      B = function B(I) {
    return new p.Bind(function () {
      return M(I);
    }, function (L) {
      return function (J) {
        var V = function V(H) {
          return function (x) {
            var K = h.map(I.Plus1().Alt0().Functor0())(V(H))(w(x)),
                F = h.map(I.Plus1().Alt0().Functor0())(X)(w(H));
            return t(D(x))(g.alt(I.Plus1().Alt0())(F)(K));
          };
        },
            X = function X(H) {
          return V(H)(J(D(H)));
        };

        return X(L);
      };
    });
  },
      M = function M(I) {
    return new l.Apply(function () {
      return z(I.Plus1().Alt0().Functor0());
    }, r.ap(E(I)));
  },
      G = function G(I) {
    return new f.Applicative(function () {
      return M(I);
    }, function (L) {
      return t(L)(y.empty(I.Plus1()));
    });
  };

  c.mkCofree = t;
  c.tail = w;

  c.comonadCofree = function (I) {
    return new k.Comonad(function () {
      return u(I);
    }, D);
  };

  c.applicativeCofree = G;
  c.bindCofree = B;

  c.shiftMapCofree = function (I) {
    return new b.ShiftMap(function (L) {
      return function (J) {
        return d.defer(function (V) {
          V = d.force(J);
          return new q.Tuple(V.value0, L(f.pure(G(e.widgetAlternative(I))))(V.value1));
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
      y = a["Data.Unit"],
      b = a["Effect.Aff"],
      h = a["Effect.Aff.Class"],
      d = p.tail,
      q = p.mkCofree,
      w = function w(z) {
    return function (u) {
      return q(z)(n.map(e.widgetFunctor)(function (E) {
        return w(E)(u);
      })(u(z)));
    };
  },
      t = function t(z) {
    return function (u) {
      return function (E) {
        var B = E(u);
        return q(k.extract(p.comonadCofree(e.widgetFunctor))(B))(l.bind(e.widgetBind)(d(B))(function (M) {
          return f.pure(e.widgetApplicative)(t(z)(k.extract(p.comonadCofree(e.widgetFunctor))(M))(E));
        }));
      };
    };
  },
      D = function D(z) {
    return l.bind(e.widgetBind)(d(z))(D);
  };

  c.step = q;

  c.display = function (z) {
    return q(y.unit)(z);
  };

  c.loopW = w;
  c.loopS = t;
  c.dyn = D;

  c.debounce = function (z) {
    return function (u) {
      return function (E) {
        return function (B) {
          var M = function M(I) {
            return function (L) {
              return l.bind(e.widgetBind)(g.alt(e.widgetAlt(z))(n.map(e.widgetFunctor)(r.Just.create)(L(I)))(n.voidRight(e.widgetFunctor)(r.Nothing.value)(h.liftAff(e.widgetMonadAff(z))(b.delay(u)))))(function (J) {
                if (J instanceof r.Nothing) return f.pure(e.widgetApplicative)(G(I)(L));
                if (J instanceof r.Just) return M(J.value0)(L);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [J.constructor.name]);
              });
            };
          },
              G = function G(I) {
            return function (L) {
              return q(I)(l.bind(e.widgetBind)(L(I))(function (J) {
                return M(J)(L);
              }));
            };
          };

          return G(E)(B);
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
          p[k] = function (r, y) {
            return n(r)(y)();
          };

          break;

        case "componentDidUpdate":
          p[k] = function (r, y, b) {
            return n(r)(y)(b)();
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
          p.UNSAFE_componentWillUpdate = function (r, y) {
            return n(r)(y)();
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

          for (var y in r) {
            l(this, y, r[y]);
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
      y = a["Effect.Console"],
      b = a["Effect.Exception"],
      h = a.React,
      d = function (q) {
    return function (w) {
      var t = function t(z) {
        return h.toElement(h.isReactElementArray)(z.view);
      },
          D = function D(z) {
        return function (u) {
          if (u instanceof f.Right) return function () {
            var E = e.discharge(p.monoidArray)(D(z))(u.value0)();
            return l["void"](r.functorEffect)(h.writeState(z)({
              view: E
            }))();
          };
          if (u instanceof f.Left) return function () {
            y.log("FAILED! " + k.show(b.showError)(u.value0))();
            return n.unit;
          };
          throw Error("Failed pattern match at Concur.React (line 32, column 5 - line 34, column 52): " + [z.constructor.name, u.constructor.name]);
        };
      };

      return h.component()("Concur")(function (z) {
        return function () {
          var u = e.dischargePartialEffect(p.monoidArray)(w)();
          return {
            state: {
              view: u.value1
            },
            render: l.map(r.functorEffect)(t)(h.getState(z)),
            componentDidMount: g.applySecond(r.applyEffect)(q)(D(z)(new f.Right(u.value0)))
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
      y = e.unsafeMkProps("className"),
      b = e.unsafeMkProps("checked"),
      h = e.unsafeMkProps("type"),
      d = e.unsafeMkProps("id");
  c.style = l;
  c.checked = b;
  c.className = y;
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
    return function (D) {
      return function (z) {
        if (t) {
          if (t) var u = e.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [t.constructor.name]);
        } else u = e.createElementTagName;
        return u(D)(g.unsafeFromPropsArray(z));
      };
    };
  },
      l = f(!1)("nav"),
      p = f(!1)("option"),
      k = f(!1)("select"),
      n = f(!1)("span"),
      r = f(!1)("ul"),
      y = f(!1)("li"),
      b = f(!1)("div"),
      h = f(!1)("code"),
      d = f(!1)("cite"),
      q = f(!1)("button"),
      w = f(!1)("a");

  c.text = a;
  c.a = w;

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

  c.li = y;
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
    return function (D) {
      return function (z) {
        return [t(D)(z)];
      };
    };
  },
      n = function n(t) {
    return function (D) {
      return e.elLeaf(t)(l.functorArray)(function (z) {
        return [D(z)];
      });
    };
  },
      r = function r(t) {
    return function (D) {
      return function (z) {
        return e["el'"](t)(D)(l.functorArray)(k(z));
      };
    };
  },
      y = function y(t) {
    return function (D) {
      return r(D)(t)(p.li);
    };
  },
      b = function b(t) {
    return function (D) {
      return r(D)(t)(p.span);
    };
  },
      h = function h(t) {
    return function (D) {
      return e.el(t)(l.functorArray)(k(D));
    };
  },
      d = function d(t) {
    return function (D) {
      return r(D)(t)(p.div);
    };
  },
      q = function q(t) {
    return function (D) {
      return r(D)(t)(p.code);
    };
  },
      w = function w(t) {
    return function (D) {
      return r(D)(t)(p.cite);
    };
  };

  c.text = function (t) {
    return function (D) {
      return g.liftWidget(t)(f.display([p.text(D)]));
    };
  };

  c.a = function (t) {
    return function (D) {
      return r(D)(t)(p.a);
    };
  };

  c["br'"] = function (t) {
    return n(t)(p.br)([]);
  };

  c.button_ = function (t) {
    return h(t)(p.button);
  };

  c.button = function (t) {
    return function (D) {
      return r(D)(t)(p.button);
    };
  };

  c["cite'"] = function (t) {
    return function (D) {
      return w(t)(D)([]);
    };
  };

  c["code'"] = function (t) {
    return function (D) {
      return q(t)(D)([]);
    };
  };

  c.div_ = function (t) {
    return h(t)(p.div);
  };

  c.div = d;

  c["div'"] = function (t) {
    return function (D) {
      return d(t)(D)([]);
    };
  };

  c.input = function (t) {
    return n(t)(p.input);
  };

  c.li_ = function (t) {
    return h(t)(p.li);
  };

  c.li = y;

  c["li'"] = function (t) {
    return function (D) {
      return y(t)(D)([]);
    };
  };

  c.nav = function (t) {
    return function (D) {
      return r(D)(t)(p.nav);
    };
  };

  c.option = function (t) {
    return function (D) {
      return r(D)(t)(p.option);
    };
  };

  c.select = function (t) {
    return function (D) {
      return r(D)(t)(p.select);
    };
  };

  c.span_ = function (t) {
    return h(t)(p.span);
  };

  c.span = b;

  c["span'"] = function (t) {
    return function (D) {
      return b(t)(D)([]);
    };
  };

  c.ul_ = function (t) {
    return h(t)(p.ul);
  };

  c.ul = function (t) {
    return function (D) {
      return r(D)(t)(p.ul);
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
      y = function () {
    var b = f.intercalate(f.foldableArray)(p.monoidString)(" "),
        h = g.concatMap(l.maybe([])(function (d) {
      return [d];
    }));
    return function (d) {
      return r(b(h(d)));
    };
  }();

  c.classList = y;

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
      y = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (b) {
    return function (h) {
      return function () {
        var d = n.window();
        d = y.document(d)();
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
      return function (w) {
        return p.map(d)(p.map(k.functorMaybe)(q))(w);
      };
    });
  },
      r = function r(d) {
    return new l.Monad(function () {
      return h(d);
    }, function () {
      return y(d);
    });
  },
      y = function y(d) {
    return new f.Bind(function () {
      return b(d);
    }, function (q) {
      return function (w) {
        return f.bind(d.Bind1())(q)(function (t) {
          if (t instanceof k.Nothing) return e.pure(d.Applicative0())(k.Nothing.value);
          if (t instanceof k.Just) return w(t.value0);
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
      return function (w) {
        return q(k.Just.create(w));
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
  c.bindMaybeT = y;
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
    return new k.Functor(function (w) {
      return function (t) {
        return function (D) {
          return k.map(q)(function (z) {
            return new n.Tuple(w(z.value0), z.value1);
          })(t(D));
        };
      };
    });
  },
      y = function y(q) {
    return new l.Monad(function () {
      return d(q);
    }, function () {
      return b(q);
    });
  },
      b = function b(q) {
    return new f.Bind(function () {
      return h(q);
    }, function (w) {
      return function (t) {
        return function (D) {
          return f.bind(q.Bind1())(w(D))(function (z) {
            return t(z.value0)(z.value1);
          });
        };
      };
    });
  },
      h = function h(q) {
    return new g.Apply(function () {
      return r(q.Bind1().Apply0().Functor0());
    }, l.ap(y(q)));
  },
      d = function d(q) {
    return new e.Applicative(function () {
      return h(q);
    }, function (w) {
      return function (t) {
        return e.pure(q.Applicative0())(new n.Tuple(w, t));
      };
    });
  };

  c.bindStateT = b;

  c.monadStateStateT = function (q) {
    return new p.MonadState(function () {
      return y(q);
    }, function (w) {
      return function () {
        var t = e.pure(q.Applicative0());
        return function (D) {
          return t(w(D));
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
      y = a["Data.Tuple"],
      b = a["Data.Unit"],
      h = function h(z) {
    return function (u) {
      return z(u);
    };
  },
      d = function d(z) {
    return new k.Functor(function (u) {
      return h(k.map(z)(function (E) {
        return new y.Tuple(u(E.value0), E.value1);
      }));
    });
  },
      q = function q(z) {
    return function (u) {
      return new g.Apply(function () {
        return d(u.Functor0());
      }, function (E) {
        return function (B) {
          return g.apply(u)(k.map(u.Functor0())(function (M) {
            return function (G) {
              return new y.Tuple(M.value0(G.value0), r.append(z)(M.value1)(G.value1));
            };
          })(E))(B);
        };
      });
    };
  },
      w = function w(z) {
    return function (u) {
      return new f.Bind(function () {
        return q(z)(u.Apply0());
      }, function (E) {
        return function (B) {
          return f.bind(u)(E)(function (M) {
            var G = B(M.value0);
            return k.map(u.Apply0().Functor0())(function (I) {
              return new y.Tuple(I.value0, r.append(z)(M.value1)(I.value1));
            })(G);
          });
        };
      });
    };
  },
      t = function t(z) {
    return function (u) {
      return new e.Applicative(function () {
        return q(z.Semigroup0())(u.Apply0());
      }, function (E) {
        return e.pure(u)(new y.Tuple(E, n.mempty(z)));
      });
    };
  },
      D = function D(z) {
    return function (u) {
      return new l.Monad(function () {
        return t(z)(u.Applicative0());
      }, function () {
        return w(z.Semigroup0())(u.Bind1());
      });
    };
  };

  c.runWriterT = function (z) {
    return z;
  };

  c.monadWriterT = D;

  c.monadTellWriterT = function (z) {
    return function (u) {
      return new p.MonadTell(function () {
        return D(z)(u);
      }, function () {
        var E = e.pure(u.Applicative0()),
            B = y.Tuple.create(b.unit);
        return function (M) {
          return E(B(M));
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
      y = a["Data.Unfoldable1"];

  a = function a(G) {
    return G;
  };

  var b = function b(G) {
    this.Bounded0 = G;
  },
      h = function h(G, I, L) {
    this.Ord0 = G;
    this.pred = I;
    this.succ = L;
  },
      d = function d(G, I, L, J, V) {
    this.Bounded0 = G;
    this.Enum1 = I;
    this.cardinality = L;
    this.fromEnum = J;
    this.toEnum = V;
  },
      q = new b(function () {
    return f.boundedBoolean;
  }),
      w = new k.Newtype(function (G) {
    return G;
  }, a),
      t = function t(G) {
    return new h(function () {
      return p.ordMaybe(G.Enum1().Ord0());
    }, function (I) {
      if (I instanceof p.Nothing) return p.Nothing.value;
      if (I instanceof p.Just) return new p.Just((0, G.Enum1().pred)(I.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [I.constructor.name]);
    }, function (I) {
      if (I instanceof p.Nothing) return new p.Just(new p.Just(f.bottom(G.Bounded0())));
      if (I instanceof p.Just) return l.map(p.functorMaybe)(p.Just.create)((0, G.Enum1().succ)(I.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [I.constructor.name]);
    });
  },
      D = new h(function () {
    return n.ordBoolean;
  }, function (G) {
    return G ? new p.Just(!1) : p.Nothing.value;
  }, function (G) {
    return G ? p.Nothing.value : new p.Just(!0);
  }),
      z = function z(G) {
    return function (I) {
      return function (L) {
        return G(I(L) + 1 | 0);
      };
    };
  },
      u = function u(G) {
    return function (I) {
      return function (L) {
        return G(I(L) - 1 | 0);
      };
    };
  },
      E = function E(G) {
    return G >= f.bottom(f.boundedInt) && G <= f.top(f.boundedInt) ? new p.Just(e.fromCharCode(G)) : p.Nothing.value;
  },
      B = new h(function () {
    return n.ordChar;
  }, u(E)(e.toCharCode), z(E)(e.toCharCode));

  E = new d(function () {
    return f.boundedChar;
  }, function () {
    return B;
  }, e.toCharCode(f.top(f.boundedChar)) - e.toCharCode(f.bottom(f.boundedChar)) | 0, e.toCharCode, E);
  var M = new d(function () {
    return f.boundedBoolean;
  }, function () {
    return D;
  }, 2, function (G) {
    if (!G) return 0;
    if (G) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [G.constructor.name]);
  }, function (G) {
    return 0 === G ? new p.Just(!1) : 1 === G ? new p.Just(!0) : p.Nothing.value;
  });
  c.Enum = h;
  c.BoundedEnum = d;

  c.toEnum = function (G) {
    return G.toEnum;
  };

  c.fromEnum = function (G) {
    return G.fromEnum;
  };

  c.toEnumWithDefaults = function (G) {
    return function (I) {
      return function (L) {
        return function (J) {
          var V = (0, G.toEnum)(J);
          if (V instanceof p.Just) return V.value0;
          if (V instanceof p.Nothing) return J < (0, G.fromEnum)(f.bottom(G.Bounded0())) ? I : L;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [V.constructor.name]);
        };
      };
    };
  };

  c.Cardinality = a;

  c.upFromIncluding = function (G) {
    return function (I) {
      return y.unfoldr1(I)(g.apply(g.applyFn)(r.Tuple.create)(G.succ));
    };
  };

  c.defaultSucc = z;
  c.defaultPred = u;
  c.SmallBounded = b;
  c.boundedEnumBoolean = M;
  c.boundedEnumChar = E;
  c.newtypeCardinality = w;

  c.boundedEnumMaybe = function (G) {
    return function (I) {
      return new d(function () {
        return p.boundedMaybe(I.Bounded0());
      }, function () {
        return t(I);
      }, k.unwrap(w)(I.cardinality) + 1 | 0, function (L) {
        if (L instanceof p.Nothing) return 0;
        if (L instanceof p.Just) return (0, I.fromEnum)(L.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [L.constructor.name]);
      }, function (L) {
        return 0 === L ? p.Nothing.value : l.map(p.functorMaybe)(p.Just.create)((0, I.toEnum)(L - 1 | 0));
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
    function v() {}

    v.value = new v();
    return v;
  }(),
      y = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      b = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      h = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      d = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      q = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      w = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      t = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      D = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      z = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      u = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      E = function () {
    function v() {}

    v.value = new v();
    return v;
  }(),
      B = k.ordInt,
      M = k.ordInt;

  a = l.eqInt;
  var G = new l.Eq(function (v) {
    return function (P) {
      return v instanceof r && P instanceof r || v instanceof y && P instanceof y || v instanceof b && P instanceof b || v instanceof h && P instanceof h || v instanceof d && P instanceof d || v instanceof q && P instanceof q || v instanceof w && P instanceof w || v instanceof t && P instanceof t || v instanceof D && P instanceof D || v instanceof z && P instanceof z || v instanceof u && P instanceof u || v instanceof E && P instanceof E ? !0 : !1;
    };
  }),
      I = new k.Ord(function () {
    return G;
  }, function (v) {
    return function (P) {
      if (v instanceof r && P instanceof r) return n.EQ.value;
      if (v instanceof r) return n.LT.value;
      if (P instanceof r) return n.GT.value;
      if (v instanceof y && P instanceof y) return n.EQ.value;
      if (v instanceof y) return n.LT.value;
      if (P instanceof y) return n.GT.value;
      if (v instanceof b && P instanceof b) return n.EQ.value;
      if (v instanceof b) return n.LT.value;
      if (P instanceof b) return n.GT.value;
      if (v instanceof h && P instanceof h) return n.EQ.value;
      if (v instanceof h) return n.LT.value;
      if (P instanceof h) return n.GT.value;
      if (v instanceof d && P instanceof d) return n.EQ.value;
      if (v instanceof d) return n.LT.value;
      if (P instanceof d) return n.GT.value;
      if (v instanceof q && P instanceof q) return n.EQ.value;
      if (v instanceof q) return n.LT.value;
      if (P instanceof q) return n.GT.value;
      if (v instanceof w && P instanceof w) return n.EQ.value;
      if (v instanceof w) return n.LT.value;
      if (P instanceof w) return n.GT.value;
      if (v instanceof t && P instanceof t) return n.EQ.value;
      if (v instanceof t) return n.LT.value;
      if (P instanceof t) return n.GT.value;
      if (v instanceof D && P instanceof D) return n.EQ.value;
      if (v instanceof D) return n.LT.value;
      if (P instanceof D) return n.GT.value;
      if (v instanceof z && P instanceof z) return n.EQ.value;
      if (v instanceof z) return n.LT.value;
      if (P instanceof z) return n.GT.value;
      if (v instanceof u && P instanceof u) return n.EQ.value;
      if (v instanceof u) return n.LT.value;
      if (P instanceof u) return n.GT.value;
      if (v instanceof E && P instanceof E) return n.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [v.constructor.name, P.constructor.name]);
    };
  });
  l = l.eqInt;
  var L = new g.Bounded(function () {
    return B;
  }, -271820, 275759),
      J = new g.Bounded(function () {
    return I;
  }, r.value, E.value),
      V = new f.BoundedEnum(function () {
    return L;
  }, function () {
    return X;
  }, 547580, function (v) {
    return v;
  }, function (v) {
    if (-271820 <= v && 275759 >= v) return new p.Just(v);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [v.constructor.name]);
  }),
      X = new f.Enum(function () {
    return B;
  }, function () {
    var v = f.toEnum(V),
        P = f.fromEnum(V);
    return function (Y) {
      return v(P(Y) - 1 | 0);
    };
  }(), function () {
    var v = f.toEnum(V),
        P = f.fromEnum(V);
    return function (Y) {
      return v(P(Y) + 1 | 0);
    };
  }()),
      H = new f.BoundedEnum(function () {
    return J;
  }, function () {
    return x;
  }, 12, function (v) {
    if (v instanceof r) return 1;
    if (v instanceof y) return 2;
    if (v instanceof b) return 3;
    if (v instanceof h) return 4;
    if (v instanceof d) return 5;
    if (v instanceof q) return 6;
    if (v instanceof w) return 7;
    if (v instanceof t) return 8;
    if (v instanceof D) return 9;
    if (v instanceof z) return 10;
    if (v instanceof u) return 11;
    if (v instanceof E) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [v.constructor.name]);
  }, function (v) {
    return 1 === v ? new p.Just(r.value) : 2 === v ? new p.Just(y.value) : 3 === v ? new p.Just(b.value) : 4 === v ? new p.Just(h.value) : 5 === v ? new p.Just(d.value) : 6 === v ? new p.Just(q.value) : 7 === v ? new p.Just(w.value) : 8 === v ? new p.Just(t.value) : 9 === v ? new p.Just(D.value) : 10 === v ? new p.Just(z.value) : 11 === v ? new p.Just(u.value) : 12 === v ? new p.Just(E.value) : p.Nothing.value;
  }),
      x = new f.Enum(function () {
    return I;
  }, function () {
    var v = f.toEnum(H),
        P = f.fromEnum(H);
    return function (Y) {
      return v(P(Y) - 1 | 0);
    };
  }(), function () {
    var v = f.toEnum(H),
        P = f.fromEnum(H);
    return function (Y) {
      return v(P(Y) + 1 | 0);
    };
  }()),
      K = new g.Bounded(function () {
    return M;
  }, 1, 31),
      F = new f.BoundedEnum(function () {
    return K;
  }, function () {
    return R;
  }, 31, function (v) {
    return v;
  }, function (v) {
    if (1 <= v && 31 >= v) return new p.Just(v);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [v.constructor.name]);
  }),
      R = new f.Enum(function () {
    return M;
  }, function () {
    var v = f.toEnum(F),
        P = f.fromEnum(F);
    return function (Y) {
      return v(P(Y) - 1 | 0);
    };
  }(), function () {
    var v = f.toEnum(F),
        P = f.fromEnum(F);
    return function (Y) {
      return v(P(Y) + 1 | 0);
    };
  }());
  c.eqYear = a;
  c.ordYear = B;
  c.boundedYear = L;
  c.boundedEnumYear = V;
  c.eqMonth = G;
  c.ordMonth = I;
  c.boundedMonth = J;
  c.boundedEnumMonth = H;
  c.eqDay = l;
  c.ordDay = M;
  c.boundedDay = K;
  c.boundedEnumDay = F;
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
      y = function () {
    function d(q, w, t) {
      this.value0 = q;
      this.value1 = w;
      this.value2 = t;
    }

    d.create = function (q) {
      return function (w) {
        return function (t) {
          return new d(q, w, t);
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
      var w = n.compare(f.ordYear)(d.value0)(q.value0);
      if (w instanceof r.LT) return r.LT.value;
      if (w instanceof r.GT) return r.GT.value;
      w = n.compare(f.ordMonth)(d.value1)(q.value1);
      return w instanceof r.LT ? r.LT.value : w instanceof r.GT ? r.GT.value : n.compare(f.ordDay)(d.value2)(q.value2);
    };
  });

  a = new g.Bounded(function () {
    return h;
  }, new y(g.bottom(f.boundedYear), g.bottom(f.boundedMonth), g.bottom(f.boundedDay)), new y(g.top(f.boundedYear), g.top(f.boundedMonth), g.top(f.boundedDay)));

  c.canonicalDate = function (d) {
    return function (q) {
      return function (w) {
        return e.canonicalDateImpl(function (t) {
          return function (D) {
            return function (z) {
              return new y(t, k.fromJust()(l.toEnum(f.boundedEnumMonth)(D)), z);
            };
          };
        }, d, l.fromEnum(f.boundedEnumMonth)(q), w);
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
      y = a.ordInt,
      b = a = l.eqInt,
      h = l.eqInt;
  l = l.eqInt;
  var d = new g.Bounded(function () {
    return k;
  }, 0, 59),
      q = new g.Bounded(function () {
    return n;
  }, 0, 59),
      w = new g.Bounded(function () {
    return r;
  }, 0, 999),
      t = new g.Bounded(function () {
    return y;
  }, 0, 23),
      D = new f.BoundedEnum(function () {
    return d;
  }, function () {
    return z;
  }, 60, function (L) {
    return L;
  }, function (L) {
    if (0 <= L && 59 >= L) return new p.Just(L);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [L.constructor.name]);
  }),
      z = new f.Enum(function () {
    return k;
  }, function () {
    var L = f.toEnum(D),
        J = f.fromEnum(D);
    return function (V) {
      return L(J(V) - 1 | 0);
    };
  }(), function () {
    var L = f.toEnum(D),
        J = f.fromEnum(D);
    return function (V) {
      return L(J(V) + 1 | 0);
    };
  }()),
      u = new f.BoundedEnum(function () {
    return q;
  }, function () {
    return E;
  }, 60, function (L) {
    return L;
  }, function (L) {
    if (0 <= L && 59 >= L) return new p.Just(L);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [L.constructor.name]);
  }),
      E = new f.Enum(function () {
    return n;
  }, function () {
    var L = f.toEnum(u),
        J = f.fromEnum(u);
    return function (V) {
      return L(J(V) - 1 | 0);
    };
  }(), function () {
    var L = f.toEnum(u),
        J = f.fromEnum(u);
    return function (V) {
      return L(J(V) + 1 | 0);
    };
  }()),
      B = new f.BoundedEnum(function () {
    return w;
  }, function () {
    return M;
  }, 1E3, function (L) {
    return L;
  }, function (L) {
    if (0 <= L && 999 >= L) return new p.Just(L);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [L.constructor.name]);
  }),
      M = new f.Enum(function () {
    return r;
  }, function () {
    var L = f.toEnum(B),
        J = f.fromEnum(B);
    return function (V) {
      return L(J(V) - 1 | 0);
    };
  }(), function () {
    var L = f.toEnum(B),
        J = f.fromEnum(B);
    return function (V) {
      return L(J(V) + 1 | 0);
    };
  }()),
      G = new f.BoundedEnum(function () {
    return t;
  }, function () {
    return I;
  }, 24, function (L) {
    return L;
  }, function (L) {
    if (0 <= L && 23 >= L) return new p.Just(L);
    if (e.otherwise) return p.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [L.constructor.name]);
  }),
      I = new f.Enum(function () {
    return y;
  }, function () {
    var L = f.toEnum(G),
        J = f.fromEnum(G);
    return function (V) {
      return L(J(V) - 1 | 0);
    };
  }(), function () {
    var L = f.toEnum(G),
        J = f.fromEnum(G);
    return function (V) {
      return L(J(V) + 1 | 0);
    };
  }());
  c.eqHour = l;
  c.ordHour = y;
  c.boundedHour = t;
  c.boundedEnumHour = G;
  c.eqMinute = b;
  c.ordMinute = n;
  c.boundedMinute = q;
  c.boundedEnumMinute = u;
  c.eqSecond = a;
  c.ordSecond = k;
  c.boundedSecond = d;
  c.boundedEnumSecond = D;
  c.eqMillisecond = h;
  c.ordMillisecond = r;
  c.boundedMillisecond = w;
  c.boundedEnumMillisecond = B;
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
    function r(y, b, h, d) {
      this.value0 = y;
      this.value1 = b;
      this.value2 = h;
      this.value3 = d;
    }

    r.create = function (y) {
      return function (b) {
        return function (h) {
          return function (d) {
            return new r(y, b, h, d);
          };
        };
      };
    };

    return r;
  }();

  var k = new g.Eq(function (r) {
    return function (y) {
      return g.eq(p.eqHour)(r.value0)(y.value0) && g.eq(p.eqMinute)(r.value1)(y.value1) && g.eq(p.eqSecond)(r.value2)(y.value2) && g.eq(p.eqMillisecond)(r.value3)(y.value3);
    };
  }),
      n = new f.Ord(function () {
    return k;
  }, function (r) {
    return function (y) {
      var b = f.compare(p.ordHour)(r.value0)(y.value0);
      if (b instanceof l.LT) return l.LT.value;
      if (b instanceof l.GT) return l.GT.value;
      b = f.compare(p.ordMinute)(r.value1)(y.value1);
      if (b instanceof l.LT) return l.LT.value;
      if (b instanceof l.GT) return l.GT.value;
      b = f.compare(p.ordSecond)(r.value2)(y.value2);
      return b instanceof l.LT ? l.LT.value : b instanceof l.GT ? l.GT.value : f.compare(p.ordMillisecond)(r.value3)(y.value3);
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
    function y(b, h) {
      this.value0 = b;
      this.value1 = h;
    }

    y.create = function (b) {
      return function (h) {
        return new y(b, h);
      };
    };

    return y;
  }();

  var n = new f.Eq(function (y) {
    return function (b) {
      return f.eq(g.eqDate)(y.value0)(b.value0) && f.eq(k.eqTime)(y.value1)(b.value1);
    };
  }),
      r = new l.Ord(function () {
    return n;
  }, function (y) {
    return function (b) {
      var h = l.compare(g.ordDate)(y.value0)(b.value0);
      return h instanceof p.LT ? p.LT.value : h instanceof p.GT ? p.GT.value : l.compare(k.ordTime)(y.value1)(b.value1);
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
    return e.toDateTimeImpl(function (y) {
      return function (b) {
        return function (h) {
          return function (d) {
            return function (q) {
              return function (w) {
                return function (t) {
                  return new p.DateTime(f.canonicalDate(y)(n.fromJust()(k.toEnum(l.boundedEnumMonth)(b)))(h), new r.Time(d, q, w, t));
                };
              };
            };
          };
        };
      };
    });
  }();

  c.instant = function (y) {
    if (-86399778816E5 <= y && 8639977881599999 >= y) return new n.Just(y);
    if (g.otherwise) return n.Nothing.value;
    throw Error("Failed pattern match at Data.DateTime.Instant (line 44, column 1 - line 44, column 41): " + [y.constructor.name]);
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
      y = function y(h) {
    return function (d) {
      return function (q) {
        return k.flip(g.bind(h.Bind1()))(n(l.empty(d))(function () {
          var w = e.pure(h.Applicative0());
          return function (t) {
            return w(q(t));
          };
        }()));
      };
    };
  },
      b = function b(h) {
    return function (d) {
      return function (q) {
        return k.flip(g.bind(h.Bind1()))(r(l.empty(d))(function () {
          var w = e.pure(h.Applicative0());
          return function (t) {
            return w(q(t));
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
      return y(h)(d)(f.identity(f.categoryFn));
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
      r = function r(D, z) {
    this["genericPred'"] = D;
    this["genericSucc'"] = z;
  },
      y = function y(D, z, u) {
    this["genericCardinality'"] = D;
    this["genericFromEnum'"] = z;
    this["genericToEnum'"] = u;
  },
      b = function b(D) {
    return D["genericToEnum'"];
  },
      h = function h(D) {
    return D["genericSucc'"];
  },
      d = function d(D) {
    return D["genericPred'"];
  },
      q = function q(D) {
    return D["genericFromEnum'"];
  };

  a = new r(function (D) {
    return k.Nothing.value;
  }, function (D) {
    return k.Nothing.value;
  });

  var w = function w(D) {
    return D["genericCardinality'"];
  },
      t = new y(1, function (D) {
    return 0;
  }, function (D) {
    return 0 === D ? new k.Just(l.NoArguments.value) : k.Nothing.value;
  });

  c.genericPred = function (D) {
    return function (z) {
      var u = f.map(k.functorMaybe)(l.to(D)),
          E = d(z),
          B = l.from(D);
      return function (M) {
        return u(E(B(M)));
      };
    };
  };

  c.genericSucc = function (D) {
    return function (z) {
      var u = f.map(k.functorMaybe)(l.to(D)),
          E = h(z),
          B = l.from(D);
      return function (M) {
        return u(E(B(M)));
      };
    };
  };

  c.genericCardinality = function (D) {
    return function (z) {
      return n.unwrap(g.newtypeCardinality)(w(z));
    };
  };

  c.genericToEnum = function (D) {
    return function (z) {
      var u = f.map(k.functorMaybe)(l.to(D)),
          E = b(z);
      return function (B) {
        return u(E(B));
      };
    };
  };

  c.genericFromEnum = function (D) {
    return function (z) {
      var u = q(z),
          E = l.from(D);
      return function (B) {
        return u(E(B));
      };
    };
  };

  c.genericEnumNoArguments = a;

  c.genericEnumConstructor = function (D) {
    return new r(function (z) {
      return f.map(k.functorMaybe)(l.Constructor)(d(D)(z));
    }, function (z) {
      return f.map(k.functorMaybe)(l.Constructor)(h(D)(z));
    });
  };

  c.genericEnumSum = function (D) {
    return function (z) {
      return function (u) {
        return function (E) {
          return new r(function (B) {
            if (B instanceof l.Inl) return f.map(k.functorMaybe)(l.Inl.create)(d(D)(B.value0));

            if (B instanceof l.Inr) {
              B = d(u)(B.value0);
              if (B instanceof k.Nothing) return new k.Just(new l.Inl(p["genericTop'"](z)));
              if (B instanceof k.Just) return new k.Just(new l.Inr(B.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [B.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [B.constructor.name]);
          }, function (B) {
            if (B instanceof l.Inl) {
              B = h(D)(B.value0);
              if (B instanceof k.Nothing) return new k.Just(new l.Inr(p["genericBottom'"](E)));
              if (B instanceof k.Just) return new k.Just(new l.Inl(B.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [B.constructor.name]);
            }

            if (B instanceof l.Inr) return f.map(k.functorMaybe)(l.Inr.create)(h(u)(B.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [B.constructor.name]);
          });
        };
      };
    };
  };

  c.genericBoundedEnumNoArguments = t;

  c.genericBoundedEnumConstructor = function (D) {
    return new y(n.unwrap(g.newtypeCardinality)(w(D)), function (z) {
      return q(D)(z);
    }, function (z) {
      return f.map(k.functorMaybe)(l.Constructor)(b(D)(z));
    });
  };

  c.genericBoundedEnumSum = function (D) {
    return function (z) {
      return new y(g.Cardinality(n.unwrap(g.newtypeCardinality)(w(D)) + n.unwrap(g.newtypeCardinality)(w(z)) | 0), function (u) {
        if (u instanceof l.Inl) return q(D)(u.value0);
        if (u instanceof l.Inr) return q(z)(u.value0) + n.unwrap(g.newtypeCardinality)(w(D)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [u.constructor.name]);
      }, function (u) {
        var E = w(D);
        if (0 <= u && u < E) u = f.map(k.functorMaybe)(l.Inl.create)(b(D)(u));else if (e.otherwise) u = f.map(k.functorMaybe)(l.Inr.create)(b(z)(u - E | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [E.constructor.name]);
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
      return function (y) {
        return (0, r["genericShow'"])(g.from(n)(y));
      };
    };
  };

  c.genericShowArgsNoArguments = a;

  c.genericShowSum = function (n) {
    return function (r) {
      return new k(function (y) {
        if (y instanceof g.Inl) return (0, n["genericShow'"])(y.value0);
        if (y instanceof g.Inr) return (0, r["genericShow'"])(y.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [y.constructor.name]);
      });
    };
  };

  c.genericShowConstructor = function (n) {
    return function (r) {
      return new k(function (y) {
        var b = p.reflectSymbol(r)(p.SProxy.value);
        y = (0, n.genericShowArgs)(y);
        return 0 === y.length ? b : "(" + (e.intercalate(e.foldableArray)(f.monoidString)(" ")(l.append(l.semigroupArray)([b])(y)) + ")");
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
      r = function r(y) {
    if (y === p.infinity || y === -p.infinity) return 0;
    if (y >= e.toNumber(f.top(f.boundedInt))) return f.top(f.boundedInt);
    if (y <= e.toNumber(f.bottom(f.boundedInt))) return f.bottom(f.boundedInt);
    if (g.otherwise) return l.fromMaybe(0)(n(y));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [y.constructor.name]);
  };

  c.round = function (y) {
    return r(k.round(y));
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
      y = a["Data.Time"],
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
      hour: n.toNumber(p.fromEnum(b.boundedEnumHour)(y.hour(d.value1))),
      minute: n.toNumber(p.fromEnum(b.boundedEnumMinute)(y.minute(d.value1))),
      second: n.toNumber(p.fromEnum(b.boundedEnumSecond)(y.second(d.value1))),
      millisecond: n.toNumber(p.fromEnum(b.boundedEnumMillisecond)(y.millisecond(d.value1)))
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
        return function (y) {
          return g.composeFlipped(k.Semigroupoid0())((0, n.first)(r))((0, n.second)(y));
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
        return function (y) {
          var b = f.dimap(n.Profunctor0())(e.identity(e.categoryFn))(function (h) {
            return new l.Tuple(h, h);
          })(e.identity(k));
          return g.composeFlipped(k.Semigroupoid0())(b)(p(k)(n)(r)(y));
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
            return function (y) {
              var b = y.length;
              if (0 > r || r >= b) return k;
              if (e) for (y = y[Symbol.iterator](), b = r;; --b) {
                var h = y.next();
                if (h.done) return k;
                if (0 === b) return p(n(h.value));
              }
              return l(r)(y);
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
          var y = k.next();
          if (y.done) break;
          n += y.value;
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
      y = a["Data.Int"],
      b = a["Data.Maybe"],
      h = a["Data.Ord"],
      d = a["Data.String.CodeUnits"],
      q = a["Data.String.Common"],
      w = a["Data.String.Unsafe"],
      t = a["Data.Tuple"],
      D = a["Data.Unfoldable"],
      z = function z(K) {
    return function (F) {
      return ((1024 * (K - 55296 | 0) | 0) + (F - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (K) {
    return "(CodePoint 0x" + (q.toUpper(y.toStringAs(y.hexadecimal)(K)) + ")");
  });

  var u = function u(K) {
    var F = d.length(K);
    if (0 === F) return b.Nothing.value;
    if (1 === F) return new b.Just({
      head: p.fromEnum(p.boundedEnumChar)(w.charAt(0)(K)),
      tail: ""
    });
    F = p.fromEnum(p.boundedEnumChar)(w.charAt(1)(K));
    var R = p.fromEnum(p.boundedEnumChar)(w.charAt(0)(K));
    return 55296 <= R && 56319 >= R && 56320 <= F && 57343 >= F ? new b.Just({
      head: z(R)(F),
      tail: d.drop(2)(K)
    }) : new b.Just({
      head: R,
      tail: d.drop(1)(K)
    });
  },
      E = function E(K) {
    return r.map(b.functorMaybe)(function (F) {
      return new t.Tuple(F.head, F.tail);
    })(u(K));
  },
      B = e._unsafeCodePointAt0(function (K) {
    var F = p.fromEnum(p.boundedEnumChar)(w.charAt(0)(K));
    return 55296 <= F && 56319 >= F && 1 < d.length(K) && (K = p.fromEnum(p.boundedEnumChar)(w.charAt(1)(K)), 56320 <= K && 57343 >= K) ? z(F)(K) : F;
  }),
      M = e._toCodePointArray(function (K) {
    return D.unfoldr(D.unfoldableArray)(E)(K);
  })(B),
      G = function () {
    var K = p.toEnumWithDefaults(p.boundedEnumChar)(l.bottom(l.boundedChar))(l.top(l.boundedChar));
    return function (F) {
      return d.singleton(K(F));
    };
  }(),
      I = e._singleton(function (K) {
    if (65535 >= K) return G(K);
    var F = n.div(n.euclideanRingInt)(K - 65536 | 0)(1024) + 55296 | 0;
    K = n.mod(n.euclideanRingInt)(K - 65536 | 0)(1024) + 56320 | 0;
    return G(F) + G(K);
  }),
      L = function L(K) {
    return function (F) {
      if (1 > K) return "";
      var R = u(F);
      return R instanceof b.Just ? I(R.value0.head) + L(K - 1 | 0)(R.value0.tail) : F;
    };
  };

  e._take(L);

  var J = new k.Eq(function (K) {
    return function (F) {
      return K === F;
    };
  }),
      V = new h.Ord(function () {
    return J;
  }, function (K) {
    return function (F) {
      return h.compare(h.ordInt)(K)(F);
    };
  }),
      X = function X(K) {
    return function (F) {
      for (var R = K, v = !1, P; !v;) {
        P = R;
        var Y = u(F);
        Y instanceof b.Just ? 0 === P ? (v = !0, P = new b.Just(Y.value0.head)) : (R = P - 1 | 0, F = Y.value0.tail, P = void 0) : (v = !0, P = b.Nothing.value);
      }

      return P;
    };
  },
      H = new l.Bounded(function () {
    return V;
  }, 0, 1114111);

  k = new p.BoundedEnum(function () {
    return H;
  }, function () {
    return x;
  }, 1114112, function (K) {
    return K;
  }, function (K) {
    if (0 <= K && 1114111 >= K) return new b.Just(K);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [K.constructor.name]);
  });
  var x = new p.Enum(function () {
    return V;
  }, p.defaultPred(p.toEnum(k))(p.fromEnum(k)), p.defaultSucc(p.toEnum(k))(p.fromEnum(k)));
  c.singleton = I;
  c.toCodePointArray = M;

  c.codePointAt = function (K) {
    return function (F) {
      return 0 > K || 0 === K && "" === F ? b.Nothing.value : 0 === K ? new b.Just(B(F)) : e._codePointAt(X)(b.Just.create)(b.Nothing.value)(B)(K)(F);
    };
  };

  c.length = function (K) {
    return g.length(M(K));
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
        var y = f.sequence(k.Traversable2())(n),
            b = g.mapWithIndex(k.FunctorWithIndex0())(r);
        return function (h) {
          return y(b(h));
        };
      };
    };
  },
      p = new function (k, n, r, y) {
    this.FoldableWithIndex1 = k;
    this.FunctorWithIndex0 = n;
    this.Traversable2 = r;
    this.traverseWithIndex = y;
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
            return function (y) {
              return e.unsafeInsert(g.reflectSymbol(k)(n))(r)(y);
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
      y = a["Data.Bifunctor"],
      b = a["Data.Either"],
      h = a["Data.Function"],
      d = a["Data.Functor"],
      q = a["Data.Identity"],
      w = a["Data.List.Types"],
      t = a["Data.Maybe"],
      D = a["Data.Semigroup"],
      z = a["Data.Symbol"],
      u = a["Data.TraversableWithIndex"],
      E = a["Effect.Exception"],
      B = a["Effect.Uncurried"],
      M = a["Effect.Unsafe"],
      G = a.Foreign,
      I = a["Foreign.Index"],
      L = a["Record.Builder"],
      J = a["Type.Data.RowList"],
      V = function V(v) {
    this.getFields = v;
  },
      X = function X(v) {
    this.readImpl = v;
  };

  a = new X(G.readString);

  var H = new X(g.pure(n.applicativeExceptT(q.monadIdentity))),
      x = new V(function (v) {
    return function (P) {
      return g.pure(n.applicativeExceptT(q.monadIdentity))(p.identity(L.categoryBuilder));
    };
  }),
      K = function () {
    var v = y.lmap(b.bifunctorEither)(function () {
      var Y = g.pure(w.applicativeNonEmptyList);
      return function (ra) {
        return Y(G.ForeignError.create(E.message(ra)));
      };
    }()),
        P = B.runEffectFn1(e._parseJSON);
    return function (Y) {
      return n.ExceptT(q.Identity(v(M.unsafePerformEffect(E["try"](P(Y))))));
    };
  }(),
      F = function F(v) {
    return function (P) {
      return function (Y) {
        if (P instanceof b.Left && Y instanceof b.Right) return new b.Left(P.value0);
        if (P instanceof b.Left && Y instanceof b.Left) return new b.Left(D.append(v)(P.value0)(Y.value0));
        if (P instanceof b.Right && Y instanceof b.Left) return new b.Left(Y.value0);
        if (P instanceof b.Right && Y instanceof b.Right) return new b.Right(P.value0(Y.value0));
        throw Error("Failed pattern match at Simple.JSON (line 234, column 1 - line 234, column 90): " + [P.constructor.name, Y.constructor.name]);
      };
    };
  },
      R = function R(v) {
    return function (P) {
      return function (Y) {
        return function (ra) {
          return n.ExceptT(f.apply(P.Apply0())(d.map(P.Apply0().Functor0())(F(v))(n.runExceptT(Y)))(n.runExceptT(ra)));
        };
      };
    };
  };

  c["readJSON'"] = function (v) {
    return l.composeKleisliFlipped(n.bindExceptT(q.monadIdentity))(v.readImpl)(K);
  };

  c["read'"] = function (v) {
    return v.readImpl;
  };

  c.ReadForeign = X;

  c.readImpl = function (v) {
    return v.readImpl;
  };

  c.readForeign = H;
  c.readString = a;

  c.readArray = function (v) {
    return new X(function () {
      return l.composeKleisliFlipped(n.bindExceptT(q.monadIdentity))(u.traverseWithIndex(u.traversableWithIndexArray)(n.applicativeExceptT(q.monadIdentity))(function (P) {
        return function (Y) {
          return k.withExcept(d.map(w.functorNonEmptyList)(G.ErrorAtIndex.create(P)))((0, v.readImpl)(Y));
        };
      }))(G.readArray);
    }());
  };

  c.readMaybe = function (v) {
    return new X(function () {
      return function (P) {
        return function (Y) {
          return G.isNull(Y) || G.isUndefined(Y) ? g.pure(n.applicativeExceptT(q.monadIdentity))(t.Nothing.value) : d.map(n.functorExceptT(q.functorIdentity))(t.Just.create)(P(Y));
        };
      }(v.readImpl);
    }());
  };

  c.readRecord = function (v) {
    return function (P) {
      return new X(function (Y) {
        return d.map(n.functorExceptT(q.functorIdentity))(h.flip(L.build)({}))((0, P.getFields)(J.RLProxy.value)(Y));
      });
    };
  };

  c.readFieldsCons = function (v) {
    return function (P) {
      return function (Y) {
        return function (ra) {
          return function (za) {
            return new V(function (Aa) {
              return function (A) {
                var da = (0, Y.getFields)(J.RLProxy.value)(A),
                    ca = z.reflectSymbol(v)(z.SProxy.value),
                    xa = k.withExcept(d.map(w.functorNonEmptyList)(G.ErrorAtProperty.create(ca)));
                A = l.bind(n.bindExceptT(q.monadIdentity))(xa(l.bindFlipped(n.bindExceptT(q.monadIdentity))(P.readImpl)(I.readProp(ca)(A))))(function (Q) {
                  return g.pure(n.applicativeExceptT(q.monadIdentity))(L.insert()()(v)(z.SProxy.value)(Q));
                });
                return R(w.semigroupNonEmptyList)(q.applicativeIdentity)(d.map(n.functorExceptT(q.functorIdentity))(r.compose(L.semigroupoidBuilder))(A))(da);
              };
            });
          };
        };
      };
    };
  };

  c.readFieldsNil = x;
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
      y = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      h = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Generic.Rep.Enum"],
      q = a["Data.Generic.Rep.Eq"],
      w = a["Data.Generic.Rep.Ord"],
      t = a["Data.Generic.Rep.Show"],
      D = a["Data.Identity"],
      z = a["Data.List.Types"],
      u = a["Data.Ord"],
      E = a["Data.Show"],
      B = a["Data.Symbol"],
      M = a.Foreign,
      G = a["Simple.JSON"],
      I = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      L = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      J = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      V = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      X = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      H = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      x = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      K = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      F = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      R = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      v = function () {
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
      ra = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      za = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Aa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      A = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      da = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ca = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      xa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Q = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ja = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Fa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ta = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      va = function () {
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
      ha = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      la = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ea = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      N = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Z = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      T = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ga = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ea = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      oa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      O = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ya = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ba = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      na = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      fa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ka = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      C = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      ia = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      wa = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ja = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      La = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ia = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ra = function () {
    function m() {}

    m.value = new m();
    return m;
  }(),
      Ua = function () {
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
      jb = function jb(m) {
    this.enumReadForeignImpl = m;
  },
      Ya = new b.Generic(function (m) {
    if (m instanceof I) return new b.Inl(b.NoArguments.value);
    if (m instanceof L) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (m instanceof J) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (m instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (m instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (m instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (m instanceof x) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (m instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (m instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (m instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (m instanceof v) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (m instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (m instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (m instanceof ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof b.Inl) return I.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inl) return L.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inl) return J.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inl) return V.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inl) return X.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return x.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return K.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return v.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Y.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ra.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 155, column 1 - line 155, column 76): " + [m.constructor.name]);
  }),
      mb = new E.Show(t.genericShow(Ya)(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Audiovisual";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Dataset";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Event";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Image";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "InteractiveResource";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Model";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "PhysicalObject";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "ResourceCollection";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Service";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Software";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Sound";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Text";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Workflow";
  })))(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      Pa = new b.Generic(function (m) {
    if (m instanceof za) return new b.Inl(b.NoArguments.value);
    if (m instanceof Aa) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (m instanceof A) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (m instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (m instanceof ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (m instanceof xa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (m instanceof Q) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (m instanceof ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (m instanceof Fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (m instanceof ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (m instanceof va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (m instanceof qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (m instanceof Ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (m instanceof Ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (m instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (m instanceof la) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (m instanceof ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (m instanceof N) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (m instanceof Z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (m instanceof T) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (m instanceof Ga) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (m instanceof Ea) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (m instanceof oa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (m instanceof O) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (m instanceof ya) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof b.Inl) return za.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inl) return Aa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inl) return A.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inl) return da.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inl) return ca.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inl) return xa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Q.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ja.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Fa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ta.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return va.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return qa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ba.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ha.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return la.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ea.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return N.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Z.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return T.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ga.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ea.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return oa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return O.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ya.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 112, column 1 - line 112, column 62): " + [m.constructor.name]);
  }),
      tb = new E.Show(t.genericShow(Pa)(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsCitedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Cites";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsSupplementTo";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsContinuedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Continues";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsPartOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "HasPart";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsReferencedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "References";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Documents";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsCompiledBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Compiles";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "HasMetadata";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsMetadataFor";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "Reviews";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsReviewedBy";
  })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      Ta = new b.Generic(function (m) {
    if (m instanceof ba) return new b.Inl(b.NoArguments.value);
    if (m instanceof na) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (m instanceof fa) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (m instanceof ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (m instanceof C) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (m instanceof ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (m instanceof wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (m instanceof Ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (m instanceof La) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (m instanceof Ia) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (m instanceof Ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (m instanceof Ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (m instanceof $a) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (m instanceof ab) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (m instanceof cb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (m instanceof db) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (m instanceof gb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (m instanceof bb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [m.constructor.name]);
  }, function (m) {
    if (m instanceof b.Inl) return ba.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inl) return na.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inl) return fa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inl) return ka.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inl) return C.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inl) return ia.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return wa.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ja.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return La.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ia.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ra.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ua.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return $a.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ab.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return cb.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return db.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return gb.value;
    if (m instanceof b.Inr && m.value0 instanceof b.Inr && m.value0.value0 instanceof b.Inr && m.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && m.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return bb.value;
    throw Error("Failed pattern match at DataCite.Types.Common (line 46, column 1 - line 46, column 66): " + [m.constructor.name]);
  }),
      ub = new E.Show(function (m) {
    return m instanceof na ? "arXiv" : m instanceof fa ? "bibcode" : t.genericShow(Ta)(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "ARK";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "ArXiv";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "Bibcode";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "DOI";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "EAN13";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "EISSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "Handle";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "IGSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "ISBN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "ISSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "ISTC";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "LISSN";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "LSID";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "PMID";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "PURL";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "UPC";
    })))(t.genericShowSum(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "URL";
    })))(t.genericShowConstructor(t.genericShowArgsNoArguments)(new B.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(m);
  }),
      vb = new r.Eq(q.genericEq(Ya)(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqConstructor(q.genericEqNoArguments)))))))))))))))),
      nb = new u.Ord(function () {
    return vb;
  }, function (m) {
    return function (Za) {
      return w.genericCompare(Ya)(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdConstructor(w.genericOrdNoArguments)))))))))))))))(m)(Za);
    };
  }),
      wb = new r.Eq(q.genericEq(Pa)(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqConstructor(q.genericEqNoArguments))))))))))))))))))))))))))),
      ob = new u.Ord(function () {
    return wb;
  }, function (m) {
    return function (Za) {
      return w.genericCompare(Pa)(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdConstructor(w.genericOrdNoArguments))))))))))))))))))))))))))(m)(Za);
    };
  }),
      xb = new r.Eq(q.genericEq(Ta)(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqSum(q.genericEqConstructor(q.genericEqNoArguments))(q.genericEqConstructor(q.genericEqNoArguments)))))))))))))))))))),
      Wa = new u.Ord(function () {
    return xb;
  }, function (m) {
    return function (Za) {
      return w.genericCompare(Ta)(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdSum(w.genericOrdConstructor(w.genericOrdNoArguments))(w.genericOrdConstructor(w.genericOrdNoArguments)))))))))))))))))))(m)(Za);
    };
  }),
      pb = new n.Enum(function () {
    return nb;
  }, d.genericPred(Ya)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), d.genericSucc(Ya)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      yb = new n.Enum(function () {
    return ob;
  }, d.genericPred(Pa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), d.genericSucc(Pa)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      Qa = function Qa(m) {
    return function (Za) {
      return new jb(function (eb) {
        return e.alt(p.altExceptT(z.semigroupNonEmptyList)(D.monadIdentity))(y.map(p.functorExceptT(D.functorIdentity))(b.Inl.create)((0, m.enumReadForeignImpl)(eb)))(y.map(p.functorExceptT(D.functorIdentity))(b.Inr.create)((0, Za.enumReadForeignImpl)(eb)));
      });
    };
  },
      qb = new n.Enum(function () {
    return Wa;
  }, d.genericPred(Ta)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments)))), d.genericSucc(Ta)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericTopConstructor(h.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(h.genericBottomConstructor(h.genericBottomNoArguments)))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))))),
      Ma = function Ma(m) {
    return new jb(function (Za) {
      var eb = B.reflectSymbol(m)(B.SProxy.value);
      return f.bind(p.bindExceptT(D.monadIdentity))(G.readImpl(G.readString)(Za))(function (zb) {
        return zb === eb ? g.pure(p.applicativeExceptT(D.monadIdentity))(b.NoArguments.value) : l.throwError(p.monadThrowExceptT(D.monadIdentity))(g.pure(z.applicativeNonEmptyList)(M.ForeignError.create("Enum string " + (zb + (" did not match expected string " + eb)))));
      });
    });
  },
      fb = new G.ReadForeign(function (m) {
    return function (Za) {
      return function (eb) {
        return y.map(p.functorExceptT(D.functorIdentity))(b.to(m))((0, Za.enumReadForeignImpl)(eb));
      };
    };
  }(Ta)(Qa(Ma(new B.IsSymbol(function () {
    return "ARK";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "ArXiv";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "Bibcode";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "DOI";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "EAN13";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "EISSN";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "Handle";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "IGSN";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "ISBN";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "ISSN";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "ISTC";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "LISSN";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "LSID";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "PMID";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "PURL";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "UPC";
  })))(Qa(Ma(new B.IsSymbol(function () {
    return "URL";
  })))(Ma(new B.IsSymbol(function () {
    return "URN";
  }))))))))))))))))))))),
      hb = new k.Bounded(function () {
    return nb;
  }, h.genericBottom(Ya)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(Ya)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments)))))))))))))))),
      Ab = new k.Bounded(function () {
    return ob;
  }, h.genericBottom(Pa)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(Pa)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments))))))))))))))))))))))))))),
      rb = new k.Bounded(function () {
    return Wa;
  }, h.genericBottom(Ta)(h.genericBottomSum(h.genericBottomConstructor(h.genericBottomNoArguments))), h.genericTop(Ta)(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopSum(h.genericTopConstructor(h.genericTopNoArguments)))))))))))))))))))),
      sb = new n.BoundedEnum(function () {
    return hb;
  }, function () {
    return pb;
  }, d.genericCardinality(Ya)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericFromEnum(Ya)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericToEnum(Ya)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))),
      kb = new n.BoundedEnum(function () {
    return Ab;
  }, function () {
    return yb;
  }, d.genericCardinality(Pa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericFromEnum(Pa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericToEnum(Pa)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Bb = new n.BoundedEnum(function () {
    return rb;
  }, function () {
    return qb;
  }, d.genericCardinality(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericFromEnum(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericToEnum(Ta)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))));

  c.ARK = ba;
  c.ArXiv = na;
  c.Bibcode = fa;
  c.DOI = ka;
  c.EAN13 = C;
  c.EISSN = ia;
  c.Handle = wa;
  c.IGSN = Ja;
  c.ISBN = La;
  c.ISSN = Ia;
  c.ISTC = Ra;
  c.LISSN = Ua;
  c.LSID = $a;
  c.PMID = ab;
  c.PURL = cb;
  c.UPC = db;
  c.URL = gb;
  c.URN = bb;
  c.IsCitedBy = za;
  c.Cites = Aa;
  c.IsSupplementTo = A;
  c.IsSupplementedBy = da;
  c.IsContinuedBy = ca;
  c.Continues = xa;
  c.IsNewVersionOf = Q;
  c.IsPreviousVersionOf = ja;
  c.IsPartOf = Fa;
  c.HasPart = ta;
  c.IsReferencedBy = va;
  c.References = qa;
  c.IsDocumentedBy = Ba;
  c.Documents = Ha;
  c.IsCompiledBy = ha;
  c.Compiles = la;
  c.IsVariantFormOf = ea;
  c.IsOriginalFormOf = N;
  c.IsIdenticalTo = Z;
  c.HasMetadata = T;
  c.IsMetadataFor = Ga;
  c.Reviews = Ea;
  c.IsReviewedBy = oa;
  c.IsDerivedFrom = O;
  c.IsSourceOf = ya;
  c.Audiovisual = I;
  c.Dataset = L;
  c.Event = J;
  c.Image = V;
  c.InteractiveResource = X;
  c.Model = H;
  c.PhysicalObject = x;
  c.ResourceCollection = K;
  c.Service = F;
  c.Software = R;
  c.Sound = v;
  c.Text = P;
  c.Workflow = Y;
  c.Other = ra;

  c.altIdToId = function (m) {
    return {
      identifier: m.alternateIdentifier,
      identifierType: m.alternateIdentifierType
    };
  };

  c.showIdentifierType = ub;
  c.boundedEnumIdentifierType = Bb;
  c.identifierTypeReadForeign = fb;
  c.showRelationType = tb;
  c.boundedEnumRelationType = kb;
  c.showResourceTypeGeneral = mb;
  c.boundedEnumResourceTypeGeneral = sb;
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
      y = a["Control.Monad.Writer.Trans"],
      b = a["Control.Plus"],
      h = a["Data.Array.NonEmpty"],
      d = a["Data.Array.NonEmpty.Internal"],
      q = a["Data.Either"],
      w = a["Data.Either.Extra"],
      t = a["Data.Foldable"],
      D = a["Data.Functor"],
      z = a["Data.Identity"],
      u = a["Data.Lazy"],
      E = a["Data.List.NonEmpty"],
      B = a["Data.List.Types"],
      M = a["Data.Maybe"],
      G = a["Data.Monoid"],
      I = a["Data.Newtype"],
      L = a["Data.String.NonEmpty.Internal"],
      J = a["Data.Symbol"],
      V = a["Data.Traversable"],
      X = a["Data.Tuple"],
      H = a["Data.Unfoldable"],
      x = a["DataCite.JSON.Util"],
      K = a["DataCite.Types.Common"],
      F = a.Foreign,
      R = a["Foreign.Index"],
      v = a["Simple.JSON"];
  a = a["Type.Data.Row"];

  var P = new I.Newtype(function (ba) {
    return ba;
  }, function (ba) {
    return ba;
  }),
      Y = new I.Newtype(function (ba) {
    return ba;
  }, function (ba) {
    return ba;
  }),
      ra = y.monadTellWriterT(G.monoidArray)(z.monadIdentity),
      za = y.monadWriterT(G.monoidArray)(z.monadIdentity),
      Aa = k.monadThrowExceptT(za),
      A = k.monadTellExceptT(ra),
      da = k.bindExceptT(za),
      ca = k.applicativeExceptT(za),
      xa = function xa(ba) {
    return function (na) {
      var fa = n.runWriter(I.unwrap(P)(k.runExceptT(I.unwrap(Y)(na))));
      if (fa.value0 instanceof q.Left) return g.discard(g.discardUnit)(da)(r.tell(A)(E.toUnfoldable(H.unfoldableArray)(fa.value0.value0)))(function () {
        return e.pure(ca)(ba);
      });
      if (fa.value0 instanceof q.Right) return na;
      throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 70, column 28 - line 74, column 24): " + [fa.value0.constructor.name]);
    };
  },
      Q = function Q(ba) {
    return F.isNull(ba) || F.isUndefined(ba);
  },
      ja = function ja(ba) {
    var na = e.pure(ba.Applicative0()),
        fa = I.unwrap(z.newtypeIdentity);
    return function (ka) {
      return na(fa(ka));
    };
  },
      Fa = function Fa(ba) {
    var na = ja(ba),
        fa = I.unwrap(k.newtypeExceptT);
    return function (ka) {
      return k.ExceptT(na(fa(ka)));
    };
  },
      ta = function ta(ba) {
    var na = Fa(za),
        fa = v["read'"](ba);
    return function (ka) {
      return na(fa(ka));
    };
  },
      va = function va(ba) {
    return xa("")(ta(v.readString)(ba));
  },
      qa = function qa(ba) {
    return function (na) {
      return g.bind(da)(va(na))(function (fa) {
        fa = L.fromString(fa);
        if (fa instanceof M.Just) return e.pure(ca)(fa.value0);
        if (fa instanceof M.Nothing) return l.throwError(Aa)(e.pure(B.applicativeNonEmptyList)(F.ForeignError.create("Nonempty string expected in:\n" + u.force(ba))));
        throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 194, column 3 - line 197, column 55): " + [fa.constructor.name]);
      });
    };
  },
      Ba = function Ba(ba) {
    return function (na) {
      return g.bind(da)(qa(ba)(na.alternateIdentifier))(function (fa) {
        var ka = ta(K.identifierTypeReadForeign)(na.alternateIdentifierType);
        return g.bind(da)(xa(K.Handle.value)(ka))(function (C) {
          return e.pure(ca)(K.altIdToId({
            alternateIdentifier: fa,
            alternateIdentifierType: C
          }));
        });
      });
    };
  },
      Ha = function Ha(ba) {
    return function (na) {
      return function (fa) {
        return Ba(na)(fa);
      };
    };
  },
      ha = function ha(ba) {
    return function (na) {
      return g.bind(da)(qa(ba)(na.identifier))(function (fa) {
        var ka = ta(K.identifierTypeReadForeign)(na.identifierType);
        return g.bind(da)(xa(K.Handle.value)(ka))(function (C) {
          return e.pure(ca)({
            identifier: fa,
            identifierType: C
          });
        });
      });
    };
  },
      la = function la(ba) {
    return function (na) {
      return function (fa) {
        return ha(na)(fa);
      };
    };
  },
      ea = function () {
    var ba = Fa(za);
    return function (na) {
      return ba(F.readArray(na));
    };
  }(),
      N = function N(ba) {
    return function (na) {
      return function (fa) {
        return g.bind(da)(ea(fa))(function (ka) {
          var C = D.map(D.functorArray)(function () {
            var ia = v["read'"](ba);
            return function (wa) {
              return p.runExcept(ia(wa));
            };
          }())(ka);
          return g.discard(g.discardUnit)(da)(t.traverse_(ca)(t.foldableArray)(r.tell(A))(D.map(D.functorArray)(E.toUnfoldable(H.unfoldableArray))(w.catLefts(f.monadArray)(b.plusArray)(C))))(function () {
            var ia = w.catRights(f.monadArray)(b.plusArray)(C);
            ia = h.fromArray(ia);
            if (ia instanceof M.Just) return e.pure(ca)(ia.value0);
            if (ia instanceof M.Nothing) return l.throwError(Aa)(e.pure(B.applicativeNonEmptyList)(F.ForeignError.create("Nonempty array expected in:\n" + u.force(na))));
            throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 206, column 3 - line 209, column 54): " + [ia.constructor.name]);
          });
        });
      };
    };
  },
      Z = function Z(ba) {
    return function (na) {
      return function (fa) {
        return g.bind(da)(ea(fa))(function (ka) {
          ka = D.map(D.functorArray)(function () {
            var wa = I.unwrap(P),
                Ja = I.unwrap(Y),
                La = na(ba);
            return function (Ia) {
              return n.runWriter(wa(k.runExceptT(Ja(La(Ia)))));
            };
          }())(ka);
          var C = D.map(D.functorArray)(X.fst)(ka),
              ia = D.map(D.functorArray)(X.snd)(ka);
          return g.discard(g.discardUnit)(da)(t.traverse_(ca)(t.foldableArray)(r.tell(A))(D.map(D.functorArray)(E.toUnfoldable(H.unfoldableArray))(w.catLefts(f.monadArray)(b.plusArray)(C))))(function () {
            return g.discard(g.discardUnit)(da)(t.traverse_(ca)(t.foldableArray)(r.tell(A))(ia))(function () {
              var wa = w.catRights(f.monadArray)(b.plusArray)(C);
              wa = h.fromArray(wa);
              if (wa instanceof M.Just) return e.pure(ca)(wa.value0);
              if (wa instanceof M.Nothing) return l.throwError(Aa)(e.pure(B.applicativeNonEmptyList)(F.ForeignError.create("Nonempty array expected in:\n" + u.force(ba))));
              throw Error("Failed pattern match at DataCite.JSON.Decode.Simple (line 224, column 3 - line 227, column 54): " + [wa.constructor.name]);
            });
          });
        });
      };
    };
  },
      T = function T(ba) {
    var na = Fa(za),
        fa = v["readJSON'"](ba);
    return function (ka) {
      return na(fa(ka));
    };
  },
      Ga = function Ga(ba) {
    return function (na) {
      return Fa(za)(R.readProp(ba)(na));
    };
  },
      Ea = function Ea(ba) {
    return function (na) {
      return g.bind(da)(Ga("title")(na))(function (fa) {
        return g.bind(da)(qa(ba)(fa))(function (ka) {
          return e.pure(ca)({
            title: ka
          });
        });
      });
    };
  },
      oa = a.RProxy.value,
      O = function O(ba) {
    return function (na) {
      return u.defer(function (fa) {
        return "Couldn't read for " + (na + (" in: \n" + u.force(ba)));
      });
    };
  },
      ya = function ya(ba) {
    var na = x.tryPrettyJson(ba),
        fa = O(na),
        ka = function ka(ia) {
      return Q(ia.type) && Q(ia.identifier) && Q(ia.identifierType) ? e.pure(ca)(M.Nothing.value) : g.bind(da)(ta(v.readString)(ia.type))(function (wa) {
        var Ja = L.fromString(wa);
        return g.bind(da)(ha(fa("container"))(ia))(function (La) {
          return e.pure(ca)(M.Just.create({
            type: Ja,
            identifier: La.identifier,
            identifierType: La.identifierType
          }));
        });
      });
    },
        C = function C(ia) {
      return V.traverse(d.traversableNonEmptyArray)(ca)(function (wa) {
        return g.bind(da)(qa(fa("Creator name"))(wa.name))(function (Ja) {
          return g.bind(da)(V.traverse(V.traversableArray)(ca)(qa(fa("Creator affiliations")))(wa.affiliation))(function (La) {
            return e.pure(ca)({
              name: Ja,
              nameType: g.bind(M.bindMaybe)(wa.nameType)(L.fromString),
              givenName: g.bind(M.bindMaybe)(wa.givenName)(L.fromString),
              familyName: g.bind(M.bindMaybe)(wa.familyName)(L.fromString),
              affiliation: La
            });
          });
        });
      })(ia);
    };

    return g.bind(da)(T(v.readRecord()(v.readFieldsCons(new J.IsSymbol(function () {
      return "data";
    }))(v.readRecord()(v.readFieldsCons(new J.IsSymbol(function () {
      return "attributes";
    }))(v.readRecord()(v.readFieldsCons(new J.IsSymbol(function () {
      return "alternateIdentifiers";
    }))(v.readArray(v.readRecord()(v.readFieldsCons(new J.IsSymbol(function () {
      return "alternateIdentifier";
    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
      return "alternateIdentifierType";
    }))(v.readForeign)(v.readFieldsNil)()())()())))(v.readFieldsCons(new J.IsSymbol(function () {
      return "container";
    }))(v.readRecord()(v.readFieldsCons(new J.IsSymbol(function () {
      return "identifier";
    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
      return "identifierType";
    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
      return "type";
    }))(v.readForeign)(v.readFieldsNil)()())()())()()))(v.readFieldsCons(new J.IsSymbol(function () {
      return "creators";
    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
      return "doi";
    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
      return "identifiers";
    }))(v.readArray(v.readRecord()(v.readFieldsCons(new J.IsSymbol(function () {
      return "identifier";
    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
      return "identifierType";
    }))(v.readForeign)(v.readFieldsNil)()())()())))(v.readFieldsCons(new J.IsSymbol(function () {
      return "prefix";
    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
      return "publisher";
    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
      return "suffix";
    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
      return "titles";
    }))(v.readForeign)(v.readFieldsNil)()())()())()())()())()())()())()())()())()()))(v.readFieldsCons(new J.IsSymbol(function () {
      return "id";
    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
      return "relationships";
    }))(v.readRecord()(v.readFieldsNil))(v.readFieldsCons(new J.IsSymbol(function () {
      return "type";
    }))(v.readForeign)(v.readFieldsNil)()())()())()())()()))(v.readFieldsNil)()()))(ba))(function (ia) {
      return g.bind(da)(qa(fa("data.id"))(ia.data.id))(function (wa) {
        return g.bind(da)(qa(fa("data.type"))(ia.data.type))(function (Ja) {
          return g.bind(da)(qa(fa("data.attributes.doi"))(ia.data.attributes.doi))(function (La) {
            return g.bind(da)(qa(fa("data.attributes.prefix"))(ia.data.attributes.prefix))(function (Ia) {
              return g.bind(da)(qa(fa("data.attributes.suffix"))(ia.data.attributes.suffix))(function (Ra) {
                return g.bind(da)(V.traverse(V.traversableArray)(ca)(la(oa)(fa("data.attributes.identifiers")))(ia.data.attributes.identifiers))(function (Ua) {
                  return g.bind(da)(V.traverse(V.traversableArray)(ca)(Ha(oa)(fa("data.attributes.alternateIdentifiers")))(ia.data.attributes.alternateIdentifiers))(function ($a) {
                    return g.bind(da)(N(v.readRecord()(v.readFieldsCons(new J.IsSymbol(function () {
                      return "affiliation";
                    }))(v.readArray(v.readForeign))(v.readFieldsCons(new J.IsSymbol(function () {
                      return "familyName";
                    }))(v.readMaybe(v.readString))(v.readFieldsCons(new J.IsSymbol(function () {
                      return "givenName";
                    }))(v.readMaybe(v.readString))(v.readFieldsCons(new J.IsSymbol(function () {
                      return "name";
                    }))(v.readForeign)(v.readFieldsCons(new J.IsSymbol(function () {
                      return "nameType";
                    }))(v.readMaybe(v.readString))(v.readFieldsNil)()())()())()())()())()()))(fa("data.attributes.creators"))(ia.data.attributes.creators))(function (ab) {
                      return g.bind(da)(C(ab))(function (cb) {
                        return g.bind(da)(Z(fa("data.attributes.titles"))(Ea)(ia.data.attributes.titles))(function (db) {
                          return g.bind(da)(qa(fa("data.attributes.publisher"))(ia.data.attributes.publisher))(function (gb) {
                            return g.bind(da)(ka(ia.data.attributes.container))(function (bb) {
                              return e.pure(ca)({
                                data: {
                                  id: wa,
                                  type: Ja,
                                  attributes: {
                                    doi: La,
                                    prefix: Ia,
                                    suffix: Ra,
                                    identifiers: Ua,
                                    alternateIdentifiers: $a,
                                    creators: cb,
                                    titles: db,
                                    publisher: gb,
                                    container: bb
                                  },
                                  relationships: ia.data.relationships
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

  c.readRecordJSON = function (ba) {
    return k.runExceptT(I.unwrap(Y)(ya(x.preParse(ba))));
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
  a.uploadDescr = "uploadDescr";
  a.reloadDescr = "reloadDescr";
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
      n = f.mjUiClass(g.uploadDescr),
      r = f.mjUiClass(e.titleList),
      y = f.mjUiClass(e.titleHeader),
      b = f.mjUiClass(e.title),
      h = f.mjUiClass(e.sustainabilityHeader),
      d = f.mjUiClass(e.sustainability),
      q = f.mjUiClass(e.superOrgHeader),
      w = f.mjUiClass(e.superOrg),
      t = f.mjUiClass(g.sideBarTab),
      D = f.mjUiClass(g.sideBar),
      z = f.mjUiClass(g.sideBarMenu),
      u = f.mjUiClass(g.sideBarGrid),
      E = f.mjUiClass(g.sideBarCol),
      B = f.mjUiClass(g.sideBar),
      M = f.mjUiClass(e.resourceTypeHeader),
      G = f.mjUiClass(e.resourceTypeGenHeader),
      I = f.mjUiClass(e.resourceTypeGen),
      L = f.mjUiClass(e.resourceTypeDescrHeader),
      J = f.mjUiClass(e.resourceTypeDescr),
      V = f.mjUiClass(e.resourceType),
      X = f.mjUiClass(e.resourceMDSourceHeader),
      H = f.mjUiClass(e.resourceMDSource),
      x = f.mjUiClass(e.resourceIdHeader),
      K = f.mjUiClass(e.resourceId),
      F = f.mjUiClass(g.reloadDescr),
      R = f.mjUiClass(e.relatedIdsHeader),
      v = f.mjUiClass(e.relatedIds),
      P = f.mjUiClass(e.relatedIdList),
      Y = f.mjUiClass(e.relatedIdHeader),
      ra = f.mjUiClass(e.relatedId),
      za = f.mjUiClass(e.relTypeHeader),
      Aa = f.mjUiClass(e.relType),
      A = f.mjUiClass(e.recordHeader),
      da = f.mjUiClass(e.record),
      ca = f.mjUiClass(g.recPreviewHeader),
      xa = f.mjUiClass(g.recPreview),
      Q = f.mjUiClass(g.recFlexBox),
      ja = f.mjUiClass(g.recEditor),
      Fa = f.mjUiClass(e.pubyearHeader),
      ta = f.mjUiClass(e.pubyear),
      va = f.mjUiClass(e.productsHeader),
      qa = f.mjUiClass(e.products),
      Ba = f.mjUiClass(e.productList),
      Ha = f.mjUiClass(e.productHeader),
      ha = f.mjUiClass(e.product),
      la = f.mjUiClass(g.prodPreviewHeader),
      ea = f.mjUiClass(g.prodPreview),
      N = f.mjUiClass(g.previewButtons),
      Z = f.mjUiClass(e.policyTypeHeader),
      T = f.mjUiClass(e.policyType),
      Ga = f.mjUiClass(e.policyHeader),
      Ea = f.mjUiClass(e.policy),
      oa = f.mjUiClass(g.page),
      O = f.mjUiClass(e.missionStatementHeader),
      ya = f.mjUiClass(e.missionStatement),
      ba = f.mjUiClass(e.locationHeader),
      na = f.mjUiClass(e.location),
      fa = f.mjUiClass(g.locPreviewHeader),
      ka = f.mjUiClass(g.locPreview),
      C = f.mjUiClass(e.institutionTypeHeader),
      ia = f.mjUiClass(e.institutionType),
      wa = f.mjUiClass(e.institutionPolicyHeader),
      Ja = f.mjUiClass(e.institutionPolicy),
      La = f.mjUiClass(e.institutionPoliciesHeader),
      Ia = f.mjUiClass(e.institutionPolicies),
      Ra = f.mjUiClass(e.institutionNameHeader),
      Ua = f.mjUiClass(e.institutionName),
      $a = f.mjUiClass(e.institutionId),
      ab = f.mjUiClass(e.institutionContactHeader),
      cb = f.mjUiClass(e.institutionContact),
      db = f.mjUiClass(e.identifier),
      gb = f.mjUiClass(e.idTypeHeader),
      bb = f.mjUiClass(e.idType),
      jb = f.mjUiClass(e.idHeader),
      Ya = f.mjUiClass(e.id),
      mb = f.mjUiClass(e.fundingStatementHeader),
      Pa = f.mjUiClass(e.fundingStatement),
      tb = f.mjUiClass(e.formatListHeader),
      Ta = f.mjUiClass(e.formatList),
      ub = f.mjUiClass(e.formatHeader),
      vb = f.mjUiClass(e.format),
      nb = f.mjUiClass(g.downloadBtn),
      wb = f.mjUiClass(g.deleteItem),
      ob = f.mjUiClass(g.dateHeader),
      xb = f.mjUiClass(g.date),
      Wa = f.mjUiClass(e.creatorList),
      pb = f.mjUiClass(e.creatorHeader),
      yb = f.mjUiClass(e.creator),
      Qa = f.mjUiClass(e.contactTypeHeader),
      qb = f.mjUiClass(e.contactType),
      Ma = f.mjUiClass(e.contactEmailHeader),
      fb = f.mjUiClass(e.contactEmail),
      hb = f.mjUiClass(g.clipBtn),
      Ab = f.mjUiClass(e.basicMetadataHeader),
      rb = f.mjUiClass(e.basicMetadata),
      sb = f.mjUiClass(e.appliesHeader),
      kb = f.mjUiClass(e.applies),
      Bb = f.mjUiClass(g.addItem);
  c.page = oa;
  c.date = xb;
  c.dateHeader = ob;
  c.recFlexBox = Q;
  c.recPreview = xa;
  c.recPreviewHeader = ca;
  c.recEditor = ja;
  c.sideBar = B;
  c.sideBarNav = D;
  c.sideBarTab = t;
  c.sideBarGrid = u;
  c.sideBarMenu = z;
  c.sideBarCol = E;
  c.prodPreview = ea;
  c.prodPreviewHeader = la;
  c.locPreview = ka;
  c.locPreviewHeader = fa;
  c.downloadBtn = nb;
  c.clipBtn = hb;
  c.previewButtons = N;
  c.addItem = Bb;
  c.deleteItem = wb;
  c.uploadDescr = n;
  c.reloadDescr = F;
  c.record = da;
  c.recordHeader = A;
  c.product = ha;
  c.productHeader = Ha;
  c.productList = Ba;
  c.productsHeader = va;
  c.products = qa;
  c.location = na;
  c.locationHeader = ba;
  c.sustainability = d;
  c.sustainabilityHeader = h;
  c.missionStatement = ya;
  c.missionStatementHeader = O;
  c.fundingStatement = Pa;
  c.fundingStatementHeader = mb;
  c.identifier = db;
  c.id = Ya;
  c.idHeader = jb;
  c.idType = bb;
  c.idTypeHeader = gb;
  c.relatedId = ra;
  c.relatedIdHeader = Y;
  c.relType = Aa;
  c.relTypeHeader = za;
  c.relatedIdList = P;
  c.relatedIdsHeader = R;
  c.relatedIds = v;
  c.basicMetadata = rb;
  c.basicMetadataHeader = Ab;
  c.creator = yb;
  c.creatorHeader = pb;
  c.creatorList = Wa;
  c.pubyear = ta;
  c.pubyearHeader = Fa;
  c.title = b;
  c.titleHeader = y;
  c.titleList = r;
  c.resourceId = K;
  c.resourceIdHeader = x;
  c.resourceType = V;
  c.resourceTypeHeader = M;
  c.resourceTypeGen = I;
  c.resourceTypeGenHeader = G;
  c.resourceTypeDescr = J;
  c.resourceTypeDescrHeader = L;
  c.resourceMDSource = H;
  c.resourceMDSourceHeader = X;
  c.institutionName = Ua;
  c.institutionNameHeader = Ra;
  c.institutionId = $a;
  c.institutionType = ia;
  c.institutionTypeHeader = C;
  c.institutionContact = cb;
  c.institutionContactHeader = ab;
  c.contactEmail = fb;
  c.contactEmailHeader = Ma;
  c.contactType = qb;
  c.contactTypeHeader = Qa;
  c.institutionPolicy = Ja;
  c.institutionPolicyHeader = wa;
  c.institutionPolicies = Ia;
  c.institutionPoliciesHeader = La;
  c.policy = Ea;
  c.policyHeader = Ga;
  c.policyType = T;
  c.policyTypeHeader = Z;
  c.applies = kb;
  c.appliesHeader = sb;
  c.superOrg = w;
  c.superOrgHeader = q;
  c.versioning = p;
  c.versioningHeader = l;
  c.format = vb;
  c.formatHeader = ub;
  c.formatList = Ta;
  c.formatListHeader = tb;
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
      y = f.mjWebClass(e.resourceType),
      b = f.mjWebClass(e.resourceId),
      h = f.mjWebClass(e.relatedIdsHeader),
      d = f.mjWebClass(e.relatedIdList),
      q = f.mjWebClass(e.relatedId),
      w = f.mjWebClass(e.relType),
      t = f.mjWebClass(e.recordId),
      D = f.mjWebClass(e.record),
      z = f.mjWebClass(e.pubyear),
      u = f.mjWebClass(e.productsHeader),
      E = f.mjWebClass(e.productList),
      B = f.mjWebClass(g.productGroup),
      M = f.mjWebClass(g.productCitation),
      G = f.mjWebClass(e.product),
      I = f.mjWebClass(e.policyType),
      L = f.mjWebClass(e.policy),
      J = f.cList([e.url, e.missionStatement]),
      V = f.mjWebClass(e.institutionType),
      X = f.mjWebClass(e.institutionPolicy),
      H = f.mjWebClass(e.institutionPolicies),
      x = f.mjWebClass(e.institutionName),
      K = f.mjWebClass(e.institutionId),
      F = f.mjWebClass(e.institutionContact),
      R = f.mjWebClass(e.identifier),
      v = f.cList([e.url, g.idUrl]),
      P = f.mjWebClass(e.idType),
      Y = f.cList([e.url, e.fundingStatement]),
      ra = f.mjWebClass(e.formatList),
      za = f.mjWebClass(e.format),
      Aa = f.mjWebClass(g.errorDisplayBox),
      A = f.mjWebClass(g.errorDisplay),
      da = f.mjWebClass(e.creatorList),
      ca = f.mjWebClass(e.creator),
      xa = f.mjWebClass(e.contactType),
      Q = f.mjWebClass(e.contactEmail);
  e = f.mjWebClass(e.basicMetadata);
  g = f.mjWebClass(g.appliesInfo);
  c.productGroup = B;
  c.productCitation = M;
  c.appliesInfo = g;
  c.idUrl = v;
  c.errorDisplayBox = Aa;
  c.errorDisplay = A;
  c.record = D;
  c.recordId = t;
  c.product = G;
  c.productList = E;
  c.productsHeader = u;
  c.sustainability = p;
  c.missionStatement = J;
  c.fundingStatement = Y;
  c.identifier = R;
  c.idType = P;
  c.relatedId = q;
  c.relType = w;
  c.relatedIdList = d;
  c.relatedIdsHeader = h;
  c.basicMetadata = e;
  c.creator = ca;
  c.creatorList = da;
  c.pubyear = z;
  c.title = l;
  c.resourceId = b;
  c.resourceType = y;
  c.resourceTypeGen = n;
  c.resourceTypeDescr = r;
  c.institutionName = x;
  c.institutionId = K;
  c.institutionType = V;
  c.institutionContact = F;
  c.contactEmail = Q;
  c.contactType = xa;
  c.institutionPolicy = X;
  c.institutionPolicies = H;
  c.policy = L;
  c.policyType = I;
  c.superOrg = k;
  c.versioning = a;
  c.format = za;
  c.formatList = ra;
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
      y = a["Data.Generic.Rep.Show"],
      b = a["Data.Ord"],
      h = a["Data.Show"],
      d = a["Data.Symbol"],
      q = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      w = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      t = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      D = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      z = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      u = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      E = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      B = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }();

  a = function () {
    function Q(ja) {
      this.value0 = ja;
    }

    Q.create = function (ja) {
      return new Q(ja);
    };

    return Q;
  }();

  var M = function () {
    function Q(ja) {
      this.value0 = ja;
    }

    Q.create = function (ja) {
      return new Q(ja);
    };

    return Q;
  }(),
      G = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      I = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      L = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      J = function () {
    function Q() {}

    Q.value = new Q();
    return Q;
  }(),
      V = new h.Show(function (Q) {
    if (Q instanceof G) return "commercial";
    if (Q instanceof I) return "non-profit";
    if (Q instanceof L) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 102, column 1 - line 105, column 37): " + [Q.constructor.name]);
  }),
      X = new h.Show(function (Q) {
    return "dataCustodian";
  }),
      H = new l.Generic(function (Q) {
    if (Q instanceof q) return new l.Inl(l.NoArguments.value);
    if (Q instanceof w) return new l.Inr(new l.Inl(l.NoArguments.value));
    if (Q instanceof t) return new l.Inr(new l.Inr(new l.Inl(l.NoArguments.value)));
    if (Q instanceof D) return new l.Inr(new l.Inr(new l.Inr(new l.Inl(l.NoArguments.value))));
    if (Q instanceof z) return new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inl(l.NoArguments.value)))));
    if (Q instanceof u) return new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inl(l.NoArguments.value))))));
    if (Q instanceof E) return new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inl(l.NoArguments.value)))))));
    if (Q instanceof B) return new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(new l.Inr(l.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [Q.constructor.name]);
  }, function (Q) {
    if (Q instanceof l.Inl) return q.value;
    if (Q instanceof l.Inr && Q.value0 instanceof l.Inl) return w.value;
    if (Q instanceof l.Inr && Q.value0 instanceof l.Inr && Q.value0.value0 instanceof l.Inl) return t.value;
    if (Q instanceof l.Inr && Q.value0 instanceof l.Inr && Q.value0.value0 instanceof l.Inr && Q.value0.value0.value0 instanceof l.Inl) return D.value;
    if (Q instanceof l.Inr && Q.value0 instanceof l.Inr && Q.value0.value0 instanceof l.Inr && Q.value0.value0.value0 instanceof l.Inr && Q.value0.value0.value0.value0 instanceof l.Inl) return z.value;
    if (Q instanceof l.Inr && Q.value0 instanceof l.Inr && Q.value0.value0 instanceof l.Inr && Q.value0.value0.value0 instanceof l.Inr && Q.value0.value0.value0.value0 instanceof l.Inr && Q.value0.value0.value0.value0.value0 instanceof l.Inl) return u.value;
    if (Q instanceof l.Inr && Q.value0 instanceof l.Inr && Q.value0.value0 instanceof l.Inr && Q.value0.value0.value0 instanceof l.Inr && Q.value0.value0.value0.value0 instanceof l.Inr && Q.value0.value0.value0.value0.value0 instanceof l.Inr && Q.value0.value0.value0.value0.value0.value0 instanceof l.Inl) return E.value;
    if (Q instanceof l.Inr && Q.value0 instanceof l.Inr && Q.value0.value0 instanceof l.Inr && Q.value0.value0.value0 instanceof l.Inr && Q.value0.value0.value0.value0 instanceof l.Inr && Q.value0.value0.value0.value0.value0 instanceof l.Inr && Q.value0.value0.value0.value0.value0.value0 instanceof l.Inr) return B.value;
    throw Error("Failed pattern match at Metajelo.Types (line 172, column 1 - line 172, column 58): " + [Q.constructor.name]);
  });

  h = new h.Show(function (Q) {
    return Q instanceof B ? "Terms of Use" : y.genericShow(H)(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Access";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Collection";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Data";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Metadata";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Preservation";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Submission";
    })))(y.genericShowSum(y.genericShowConstructor(y.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "Quality";
    })))(y.genericShowConstructor(y.genericShowArgsNoArguments)(new d.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(Q);
  });
  var x = new l.Generic(function (Q) {
    if (Q instanceof G) return new l.Inl(l.NoArguments.value);
    if (Q instanceof I) return new l.Inr(new l.Inl(l.NoArguments.value));
    if (Q instanceof L) return new l.Inr(new l.Inr(l.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [Q.constructor.name]);
  }, function (Q) {
    if (Q instanceof l.Inl) return G.value;
    if (Q instanceof l.Inr && Q.value0 instanceof l.Inl) return I.value;
    if (Q instanceof l.Inr && Q.value0 instanceof l.Inr) return L.value;
    throw Error("Failed pattern match at Metajelo.Types (line 101, column 1 - line 101, column 68): " + [Q.constructor.name]);
  }),
      K = new l.Generic(function (Q) {
    return l.NoArguments.value;
  }, function (Q) {
    return J.value;
  }),
      F = new f.Eq(n.genericEq(H)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))),
      R = new b.Ord(function () {
    return F;
  }, function (Q) {
    return function (ja) {
      return r.genericCompare(H)(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdConstructor(r.genericOrdNoArguments)))))))))(Q)(ja);
    };
  }),
      v = new f.Eq(n.genericEq(x)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))),
      P = new b.Ord(function () {
    return v;
  }, function (Q) {
    return function (ja) {
      return r.genericCompare(x)(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdSum(r.genericOrdConstructor(r.genericOrdNoArguments))(r.genericOrdConstructor(r.genericOrdNoArguments))))(Q)(ja);
    };
  }),
      Y = new f.Eq(n.genericEq(K)(n.genericEqConstructor(n.genericEqNoArguments))),
      ra = new b.Ord(function () {
    return Y;
  }, function (Q) {
    return function (ja) {
      return r.genericCompare(K)(r.genericOrdConstructor(r.genericOrdNoArguments))(Q)(ja);
    };
  }),
      za = new g.Enum(function () {
    return R;
  }, k.genericPred(H)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments)))), k.genericSucc(H)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))),
      Aa = new g.Enum(function () {
    return P;
  }, k.genericPred(x)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments)))), k.genericSucc(x)(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumSum(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericTopConstructor(p.genericTopNoArguments))(k.genericEnumConstructor(k.genericEnumNoArguments))(p.genericBottomConstructor(p.genericBottomNoArguments)))(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))))),
      A = new g.Enum(function () {
    return ra;
  }, k.genericPred(K)(k.genericEnumConstructor(k.genericEnumNoArguments)), k.genericSucc(K)(k.genericEnumConstructor(k.genericEnumNoArguments))),
      da = new e.Bounded(function () {
    return R;
  }, p.genericBottom(H)(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))), p.genericTop(H)(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopSum(p.genericTopConstructor(p.genericTopNoArguments))))))))));
  f = new g.SmallBounded(function () {
    return da;
  });
  var ca = new e.Bounded(function () {
    return P;
  }, p.genericBottom(x)(p.genericBottomSum(p.genericBottomConstructor(p.genericBottomNoArguments))), p.genericTop(x)(p.genericTopSum(p.genericTopSum(p.genericTopConstructor(p.genericTopNoArguments))))),
      xa = new e.Bounded(function () {
    return ra;
  }, p.genericBottom(K)(p.genericBottomConstructor(p.genericBottomNoArguments)), p.genericTop(K)(p.genericTopConstructor(p.genericTopNoArguments)));
  e = new g.SmallBounded(function () {
    return xa;
  });
  p = new g.BoundedEnum(function () {
    return da;
  }, function () {
    return za;
  }, k.genericCardinality(H)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))), k.genericFromEnum(H)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))), k.genericToEnum(H)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))))))))));
  n = new g.BoundedEnum(function () {
    return ca;
  }, function () {
    return Aa;
  }, k.genericCardinality(x)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))), k.genericFromEnum(x)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))), k.genericToEnum(x)(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumSum(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments))(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)))));
  g = new g.BoundedEnum(function () {
    return xa;
  }, function () {
    return A;
  }, k.genericCardinality(K)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)), k.genericFromEnum(K)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)), k.genericToEnum(K)(k.genericBoundedEnumConstructor(k.genericBoundedEnumNoArguments)));
  c.DataCustodian = J;
  c.Commercial = G;
  c.NonProfit = I;
  c.Governmental = L;
  c.FreeTextPolicy = a;
  c.RefPolicy = M;
  c.Access = q;
  c.Collection = w;
  c.Data = t;
  c.Metadata = D;
  c.Preservation = z;
  c.Submission = u;
  c.Quality = E;
  c.TermsOfUse = B;
  c.showInstitutionType = V;
  c.boundedEnumInstitutionType = n;
  c.showInstitutionContactType = X;
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
        y = e._getAttribute(n);

    return function (b) {
      return r(y(b));
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
      y = a["Web.DOM.Document"],
      b = a["Web.DOM.Element"],
      h = a["Web.DOM.HTMLCollection"],
      d = a["Web.DOM.Node"],
      q = function q(t) {
    return function (D) {
      if (t instanceof n.Nothing) return new p.Right(D);
      if (t instanceof n.Just) return new p.Left(t.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [t.constructor.name]);
    };
  },
      w = function w(t) {
    return function () {
      var D = f.join(r.bindEffect)(k.map(r.functorEffect)(h.toArray)(y.getElementsByTagName("parsererror")(t)))();
      D = l.head(D);
      D = k.map(n.functorMaybe)(b.toNode)(D);
      if (D instanceof n.Nothing) D = g.pure(r.applicativeEffect)(n.Nothing.value);else if (D instanceof n.Just) D = k.map(r.functorEffect)(n.Just.create)(d.textContent(D.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [D.constructor.name]);
      return D();
    };
  };

  c.parseXMLFromString = function (t) {
    return function (D) {
      return function () {
        var z = e.parseFromString("application/xml")(t)(D)(),
            u = w(z)();
        return q(u)(z);
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
      y = a["Data.Nullable"],
      b = a["Data.Traversable"],
      h = a.Effect,
      d = a["Web.DOM.Document"],
      q = a["Web.DOM.Document.XPath.ResultType"],
      w = a["Web.DOM.Element"],
      t = a["Web.DOM.Node"],
      D = function () {
    var u = l.map(h.functorEffect)(function (E) {
      return r.intToNat(p.round(E));
    });
    return function (E) {
      return u(e.snapshotLengthInternal(E));
    };
  }(),
      z = function z(u) {
    return function (E) {
      return l.map(h.functorEffect)(y.toMaybe)(e.snapshotItemInternal(u)(p.toNumber(r.natToInt(E))));
    };
  };

  a = function () {
    var u = l.map(h.functorEffect)(y.toMaybe);
    return function (E) {
      return u(e.singleNodeValueInternal(E));
    };
  }();

  c.evaluate = function (u) {
    return function (E) {
      return function (B) {
        return function (M) {
          return function (G) {
            return function (I) {
              return e.evaluateInternal(u)(E)(y.toNullable(B))(M)(y.toNullable(G))(I);
            };
          };
        };
      };
    };
  };

  c.evaluateNumber = function (u) {
    return function (E) {
      return function (B) {
        return function (M) {
          return function (G) {
            return function () {
              var I = e.evaluateInternal(u)(E)(y.toNullable(B))(q.number_type)(y.toNullable(M))(G)();
              return e.numberValue(I)();
            };
          };
        };
      };
    };
  };

  c.evaluateString = function (u) {
    return function (E) {
      return function (B) {
        return function (M) {
          return function (G) {
            return function () {
              var I = e.evaluateInternal(u)(E)(y.toNullable(B))(q.string_type)(y.toNullable(M))(G)();
              return e.stringValue(I)();
            };
          };
        };
      };
    };
  };

  c.evaluateBoolean = function (u) {
    return function (E) {
      return function (B) {
        return function (M) {
          return function (G) {
            return function () {
              var I = e.evaluateInternal(u)(E)(y.toNullable(B))(q.boolean_type)(y.toNullable(M))(G)();
              return e.booleanValue(I)();
            };
          };
        };
      };
    };
  };

  c.singleNodeValue = a;

  c.snapshot = function (u) {
    var E = q.res2SnapType(e.resultType(u)),
        B = z(u);
    E = l.map(k.functorMaybe)(function (M) {
      return function () {
        var G = D(u)();
        G = r.natToInt(G);
        G = l.map(l.functorArray)(r.intToNat)(f.range(0)(G - 1 | 0));
        G = b.sequence(b.traversableArray)(h.applicativeEffect)(l.map(l.functorArray)(B)(G))();
        return f.catMaybes(G);
      };
    })(E);
    if (E instanceof k.Nothing) return g.pure(h.applicativeEffect)(n.mempty(n.monoidArray));
    if (E instanceof k.Just) return E.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [E.constructor.name]);
  };

  c.lookupNamespaceURI = function (u) {
    return function (E) {
      return y.toMaybe(e.lookupNamespaceURIInternal(u)(E));
    };
  };

  c.defaultNSResolver = function (u) {
    return function (E) {
      var B = function B(M) {
        return function () {
          var G = d.documentElement(M)();
          if (G instanceof k.Nothing) return u;
          if (G instanceof k.Just) return w.toNode(G.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [G.constructor.name]);
        };
      };

      return function () {
        var M = t.ownerDocument(u)(),
            G = function () {
          if (M instanceof k.Nothing) {
            var I = d.fromNode(u);
            if (I instanceof k.Nothing) return u;
            if (I instanceof k.Just) return B(I.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [I.constructor.name]);
          }

          if (M instanceof k.Just) return B(M.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [M.constructor.name]);
        }();

        return e.createNSResolver(G)(E);
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
      y = a["Data.String.Common"],
      b = a["Data.String.NonEmpty.Internal"],
      h = a["Data.Traversable"],
      d = a["Data.XPath"],
      q = a.Effect,
      w = a["Effect.Exception"],
      t = a["Web.DOM.DOMParser"],
      D = a["Web.DOM.Document"],
      z = a["Web.DOM.Document.XPath"],
      u = a["Web.DOM.Document.XPath.ResultType"],
      E = a["Web.DOM.Element"],
      B = a["Web.DOM.HTMLCollection"],
      M = d.pathAppendNSx(d.stringXPath)(d.root(d.stringXPath))("record");
  a = d.pathAppendNSx(d.stringXPath)(M)("relatedIdentifier");
  var G = d.pathAppendNSx(d.stringXPath)(M)("supplementaryProducts");
  G = d.pathAppendNSx(d.stringXPath)(G)("supplementaryProduct");

  var I = function I(F) {
    return function (R) {
      return {
        any: function any(v) {
          return function (P) {
            return function (Y) {
              return z.evaluate(P)(v)(R)(Y)(r.Nothing.value)(F);
            };
          };
        },
        num: function num(v) {
          return function (P) {
            return z.evaluateNumber(P)(v)(R)(r.Nothing.value)(F);
          };
        },
        str: function str(v) {
          return function (P) {
            return z.evaluateString(P)(v)(R)(r.Nothing.value)(F);
          };
        },
        bool: function bool(v) {
          return function (P) {
            return z.evaluateBoolean(P)(v)(R)(r.Nothing.value)(F);
          };
        },
        nodeMay: function nodeMay(v) {
          return function (P) {
            return g.bind(q.bindEffect)(z.evaluate(P)(v)(R)(u.any_unordered_node_type)(r.Nothing.value)(F))(z.singleNodeValue);
          };
        }
      };
    };
  },
      L = f["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      J = function J(F) {
    var R = function R(v) {
      return function () {
        var P = D.getElementsByTagNameNS(new r.Just(v))("record")(F)();
        return B.item(0)(P)();
      };
    };

    return function () {
      var v = D.getElementsByTagName("record")(F)();
      v = B.item(0)(v)();
      if (v instanceof r.Nothing) v = h.sequence(l.traversableNonEmptyArray)(q.applicativeEffect)(n.map(l.functorNonEmptyArray)(R)(L))(), v = g.join(r.bindMaybe)(k.find(l.foldableNonEmptyArray)(r.isJust)(v));else if (v instanceof r.Just) v = new r.Just(v.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 277, column 16 - line 281, column 38): " + [v.constructor.name]);
      return n.map(r.functorMaybe)(E.toNode)(v);
    };
  },
      V = d.pathAppendNSx(d.stringXPath)(M)("lastModified"),
      X = d.pathAppendNSx(d.stringXPath)(M)("identifier"),
      H = d.pathAppend(d.stringXPath)(X)(d.at(d.stringXPath)("identifierType")),
      x = function x(F) {
    var R = function R(v) {
      return r.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(v);
    };

    if (F instanceof r.Nothing) return e.pure(q.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (F instanceof r.Just) return n.map(q.functorEffect)(R)(E.getAttribute("xmlns")(F.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 185, column 3 - line 187, column 59): " + [F.constructor.name]);
  },
      K = function K(F) {
    return function (R) {
      var v = function v(P) {
        return function (Y) {
          return function (ra) {
            ra = z.lookupNamespaceURI(P)(ra);
            if (ra instanceof r.Nothing) return Y;
            if (ra instanceof r.Just) return ra.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 202, column 39 - line 204, column 20): " + [ra.constructor.name]);
          };
        };
      };

      return function () {
        var P = z.defaultNSResolver(F)(R)(),
            Y = E.fromNode(F);
        Y = x(Y)();
        return z.customNSResolver(v(P)(Y));
      };
    };
  };

  d = d.pathAppendNSx(d.stringXPath)(M)("date");
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
  c.idTypeRootAP = H;
  c.idRootP = X;
  c.dateRootP = d;
  c.lastModRootP = V;
  c.relIdRootP = a;
  c.sProdRootP = G;

  c.getDefaultParseEnv = function (F) {
    return function () {
      var R = t.makeDOMParser();
      R = t.parseXMLFromString(F)(R)();
      if (R instanceof p.Left) R = w["throw"]("XML parsing error: " + R.value0)();else if (R instanceof p.Right) R = R.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 245, column 13 - line 247, column 26): " + [R.constructor.name]);
      var v = J(R)();
      if (v instanceof r.Nothing) v = w["throw"]("Could not find <record> node!")();else if (v instanceof r.Just) v = v.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 249, column 14 - line 251, column 23): " + [v.constructor.name]);
      var P = E.fromNode(v);
      if (P instanceof r.Nothing) P = w["throw"]("<record> node could not be cast to an element!")();else if (P instanceof r.Just) P = P.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 252, column 14 - line 254, column 23): " + [P.constructor.name]);
      var Y = x(new r.Just(P))(),
          ra = K(v)(R)();
      ra = I(R)(new r.Just(ra));
      return {
        doc: R,
        ns: Y,
        recNode: v,
        recElem: P,
        xeval: ra,
        xevalRoot: {
          any: ra.any(v),
          num: ra.num(v),
          str: ra.str(v),
          bool: ra.bool(v),
          nodeMay: ra.nodeMay(v)
        }
      };
    };
  };

  c.unsafeSingleNodeValue = function (F) {
    return function (R) {
      return function (v) {
        return function () {
          var P = F.xeval.nodeMay(R)(v)();
          if (P instanceof r.Just) return P.value0;
          if (P instanceof r.Nothing) return w["throw"]("Couldn't find required node at: " + v)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 294, column 3 - line 296, column 40): " + [P.constructor.name]);
        };
      };
    };
  };

  c.readNonEmptyString = function (F) {
    return function (R) {
      R = b.fromString(y.trim(R));
      if (R instanceof r.Nothing) return p.Left.create("Empty string found for " + F);
      if (R instanceof r.Just) return new p.Right(R.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 303, column 3 - line 305, column 26): " + [R.constructor.name]);
    };
  };

  c.readNonEmptyArray = function (F) {
    return function (R) {
      R = f.fromArray(R);
      if (R instanceof r.Nothing) return p.Left.create("Empty array found for " + F);
      if (R instanceof r.Just) return new p.Right(R.value0);
      throw Error("Failed pattern match at Metajelo.XPaths (line 310, column 3 - line 312, column 26): " + [R.constructor.name]);
    };
  };

  c.rightOrThrow = function (F) {
    if (F instanceof p.Right) return e.pure(q.applicativeEffect)(F.value0);
    if (F instanceof p.Left) return w["throw"](F.value0);
    throw Error("Failed pattern match at Metajelo.XPaths (line 315, column 19 - line 317, column 24): " + [F.constructor.name]);
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
      y = a["Data.Bifunctor"],
      b = a["Data.Boolean"],
      h = a["Data.Either"],
      d = a["Data.Functor"];
  a = a["Data.Show"];

  var q = function () {
    function G(I) {
      this.value0 = I;
    }

    G.create = function (I) {
      return new G(I);
    };

    return G;
  }();

  a = new a.Show(function (G) {
    return G.value0;
  });

  var w = new d.Functor(function (G) {
    return function (I) {
      var L = d.map(h.functorEither)(function (J) {
        return {
          result: G(J.result),
          suffix: J.suffix
        };
      });
      return function (J) {
        return L(I(J));
      };
    };
  }),
      t = function t(G) {
    return function (I) {
      return new h.Left({
        pos: I.pos,
        error: new q(G)
      });
    };
  },
      D = new l.Apply(function () {
    return w;
  }, function (G) {
    return function (I) {
      return function (L) {
        return p.bind(h.bindEither)(G(L))(function (J) {
          return p.bind(h.bindEither)(I(J.suffix))(function (V) {
            return f.pure(h.applicativeEither)({
              result: J.result(V.result),
              suffix: V.suffix
            });
          });
        });
      };
    };
  }),
      z = new p.Bind(function () {
    return D;
  }, function (G) {
    return function (I) {
      return function (L) {
        return p.bind(h.bindEither)(G(L))(function (J) {
          return I(J.result)(J.suffix);
        });
      };
    };
  }),
      u = new f.Applicative(function () {
    return D;
  }, function (G) {
    return function (I) {
      return new h.Right({
        result: G,
        suffix: I
      });
    };
  }),
      E = new k.Monad(function () {
    return u;
  }, function () {
    return z;
  });

  l = new n.MonadRec(function () {
    return E;
  }, function (G) {
    return function (I) {
      var L = function L(J) {
        if (J.result instanceof n.Loop) return new n.Loop({
          state: J.result.value0,
          str: J.suffix
        });
        if (J.result instanceof n.Done) return new n.Done({
          result: J.result.value0,
          suffix: J.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [J.constructor.name]);
      };

      return function (J) {
        return n.tailRecM(n.monadRecEither)(function (V) {
          return d.map(h.functorEither)(L)(G(V.state)(V.str));
        })({
          state: I,
          str: J
        });
      };
    };
  });
  var B = new e.Alt(function () {
    return w;
  }, function (G) {
    return function (I) {
      return function (L) {
        var J = G(L);

        if (J instanceof h.Left) {
          if (L.pos === J.value0.pos) return I(L);
          if (b.otherwise) return new h.Left({
            error: J.value0.error,
            pos: J.value0.pos
          });
        }

        return J;
      };
    };
  }),
      M = new r.Plus(function () {
    return B;
  }, t("No alternative"));
  e = new g.Alternative(function () {
    return u;
  }, function () {
    return M;
  });
  c.ParseError = q;

  c.runParser = function (G) {
    return function (I) {
      return y.bimap(h.bifunctorEither)(function (L) {
        return L.error;
      })(function (L) {
        return L.result;
      })(G({
        str: I,
        pos: 0
      }));
    };
  };

  c.fail = t;

  c["try"] = function (G) {
    return function (I) {
      return y.lmap(h.bifunctorEither)(function (L) {
        return {
          pos: I.pos,
          error: L.error
        };
      })(G(I));
    };
  };

  c.showParseError = a;
  c.functorParser = w;
  c.applyParser = D;
  c.applicativeParser = u;
  c.altParser = B;
  c.alternativeParser = e;
  c.bindParser = z;
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
      y = a["Data.List"].manyRec(r.monadRecParser)(r.alternativeParser),
      b = function b(h) {
    return function (d) {
      return new k.NonEmpty(h, d);
    };
  };

  c.many = y;

  c.many1 = function (h) {
    return f.apply(r.applyParser)(p.map(r.functorParser)(b)(h))(y(h));
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
        return l.bind(r.bindParser)(y(f.applySecond(r.applyParser)(d)(h)))(function (w) {
          return g.pure(r.applicativeParser)(b(q)(w));
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
      y = a["Data.Unit"],
      b = a["Text.Parsing.StringParser"],
      h = a["Text.Parsing.StringParser.Combinators"],
      d = function () {
    var w = function () {
      var t = p.fromEnum(r.boundedEnumCodePoint);
      return function (D) {
        return f.fromCharCode(t(D));
      };
    }();

    return function (t) {
      var D = r.codePointAt(t.pos)(t.str);

      if (D instanceof k.Just) {
        var z = w(D.value0);
        if (z instanceof k.Just) return new l.Right({
          result: z.value0,
          suffix: {
            str: t.str,
            pos: t.pos + 1 | 0
          }
        });
        if (z instanceof k.Nothing) return new l.Left({
          pos: t.pos,
          error: b.ParseError.create("CodePoint " + (n.show(r.showCodePoint)(D.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [z.constructor.name]);
      }

      if (D instanceof k.Nothing) return new l.Left({
        pos: t.pos,
        error: new b.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [D.constructor.name]);
    };
  }(),
      q = function q(w) {
    return b["try"](g.bind(b.bindParser)(d)(function (t) {
      return w(t) ? e.pure(b.applicativeParser)(t) : b.fail("Character " + (n.show(n.showChar)(t) + " did not satisfy predicate"));
    }));
  };

  c.eof = function (w) {
    return w.pos < r.length(w.str) ? new l.Left({
      pos: w.pos,
      error: new b.ParseError("Expected EOF")
    }) : new l.Right({
      result: y.unit,
      suffix: w
    });
  };

  c.satisfy = q;

  c["char"] = function (w) {
    return h.withError(q(function (t) {
      return t === w;
    }))("Could not match character " + n.show(n.showChar)(w));
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
      y = a["Data.Maybe"],
      b = a["Data.Monoid"],
      h = a["Data.String.CodeUnits"],
      d = a["Data.String.Pattern"],
      q = a["Data.Unit"],
      w = a["Text.Parsing.StringParser"],
      t = a["Text.Parsing.StringParser.CodePoints"],
      D = a["Text.Parsing.StringParser.Combinators"],
      z = function (ja) {
    var Fa = y.fromJust();
    return function (ta) {
      return Fa(p.fromCharCode(ta));
    };
  }(),
      u = function u(ja) {
    return n.map(w.functorParser)(function () {
      var Fa = k.fold(r.foldableNonEmptyList)(b.monoidString),
          ta = n.map(r.functorNonEmptyList)(h.singleton);
      return function (va) {
        return Fa(ta(va));
      };
    }())(D.many1(t.satisfy(ja)));
  },
      E = function E(ja) {
    return l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(ja))(function () {
      return l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(B(ja)))(function () {
        return g.pure(w.applicativeParser)(q.unit);
      });
    });
  },
      B = function B(ja) {
    return e.alt(w.altParser)(E(ja))(g.pure(w.applicativeParser)(q.unit));
  },
      M = function M(ja) {
    return l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(t.satisfy(ja)))(function () {
      return l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(B(t.satisfy(ja))))(function () {
        return g.pure(w.applicativeParser)(q.unit);
      });
    });
  },
      G = t["char"](z(0)),
      I = t["char"]("\n");

  a = function a(ja) {
    return " " === ja || "\t" === ja;
  };

  var L = t.satisfy(a),
      J = M(a),
      V = function V(ja) {
    return function (Fa) {
      return function (ta) {
        return ta >= ja && ta <= Fa;
      };
    };
  };

  a = V(z(33))(z(126));

  var X = t.satisfy(a),
      H = function H(ja) {
    return function (Fa) {
      return h.contains(d.Pattern(h.singleton(Fa)))(ja);
    };
  },
      x = function x(ja) {
    return V(z(1))(z(8))(ja) || V(z(14))(z(31))(ja) || H("\x0B\f\x7F")(ja);
  },
      K = function K(ja) {
    return V(z(33))(z(39))(ja) || V(z(42))(z(91))(ja) || V(z(93))(z(126))(ja) || x(ja);
  },
      F = function F(ja) {
    return V(z(33))(z(90))(ja) || V(z(94))(z(126))(ja) || x(ja);
  },
      R = t.satisfy(x),
      v = t["char"]("\r"),
      P = n["void"](w.functorParser)(f.applySecond(w.applyParser)(v)(I)),
      Y = function () {
    var ja = E(f.applySecond(w.applyParser)(P)(J)),
        Fa = f.applySecond(w.applyParser)(J)(D.optional(f.applySecond(w.applyParser)(P)(J)));
    return e.alt(w.altParser)(Fa)(ja);
  }(),
      ra = function () {
    var ja = l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(t["char"]("\\")))(function () {
      return e.alt(w.altParser)(e.alt(w.altParser)(e.alt(w.altParser)(e.alt(w.altParser)(e.alt(w.altParser)(X)(L))(I))(v))(R))(G);
    });
    return l.bind(w.bindParser)(ja)(function (Fa) {
      return g.pure(w.applicativeParser)("\\" + h.singleton(Fa));
    });
  }(),
      za = e.alt(w.altParser)(u(function (ja) {
    return H(h.singleton(z(33)))(ja) || V(z(35))(z(91))(ja) || V(z(93))(z(126))(ja) || x(ja);
  }))(ra),
      Aa = function () {
    var ja = l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(t["char"]('"')))(function () {
      return l.bind(w.bindParser)(D.many(f.applySecond(w.applyParser)(D.optional(Y))(za)))(function (Fa) {
        return l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(D.optional(Y)))(function () {
          return l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(t["char"]('"')))(function () {
            return g.pure(w.applicativeParser)(Fa);
          });
        });
      });
    });
    return n.map(w.functorParser)(function (Fa) {
      return '"' + (k.fold(r.foldableList)(b.monoidString)(Fa) + '"');
    })(ja);
  }(),
      A = l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(t["char"]("(")))(function () {
    return l.discard(l.discardUnit)(w.bindParser)(B(e.alt(w.altParser)(e.alt(w.altParser)(e.alt(w.altParser)(M(K))(n["void"](w.functorParser)(ra)))(A))(Y)))(function () {
      return l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(t["char"](")")))(function () {
        return g.pure(w.applicativeParser)(q.unit);
      });
    });
  }),
      da = B(e.alt(w.altParser)(A)(Y));

  a = l.discard(l.discardUnit)(w.bindParser)(D.optional(da))(function () {
    return l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(t["char"]("[")))(function () {
      return l.bind(w.bindParser)(D.many(f.applySecond(w.applyParser)(D.optional(Y))(u(F))))(function (ja) {
        return l.discard(l.discardUnit)(w.bindParser)(D.optional(Y))(function () {
          return l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(t["char"]("]")))(function () {
            return l.discard(l.discardUnit)(w.bindParser)(D.optional(da))(function () {
              return g.pure(w.applicativeParser)("[" + (k.fold(r.foldableList)(b.monoidString)(ja) + "]"));
            });
          });
        });
      });
    });
  });

  var ca = function () {
    return u(function (ja) {
      return "0" <= ja && "9" >= ja || "a" <= ja && "z" >= ja || "A" <= ja && "Z" >= ja || H("!#$%&'*+/=?^_`{|}~-")(ja);
    });
  }(),
      xa = function () {
    var ja = l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(D.optional(da)))(function () {
      return l.bind(w.bindParser)(e.alt(w.altParser)(ca)(Aa))(function (Fa) {
        return l.discard(l.discardUnit)(w.bindParser)(n["void"](w.functorParser)(D.optional(da)))(function () {
          return g.pure(w.applicativeParser)(Fa);
        });
      });
    });
    ja = D.sepBy1(ja)(t["char"]("."));
    return n.map(w.functorParser)(k.intercalate(r.foldableNonEmptyList)(b.monoidString)("."))(ja);
  }(),
      Q = e.alt(w.altParser)(xa)(a);

  a = l.bind(w.bindParser)(xa)(function (ja) {
    return l.bind(w.bindParser)(t["char"]("@"))(function () {
      return l.bind(w.bindParser)(Q)(function (Fa) {
        return l.bind(w.bindParser)(t.eof)(function () {
          return g.pure(w.applicativeParser)({
            localPart: ja,
            domainPart: Fa
          });
        });
      });
    });
  });
  c.addrSpec = a;

  c.toString = function (ja) {
    return ja.localPart + ("@" + ja.domainPart);
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
      y = a["Data.DateTime"],
      b = a["Data.Either"],
      h = a["Data.Either.Extra"],
      d = a["Data.Functor"],
      q = a["Data.Int"],
      w = a["Data.JSDate"],
      t = a["Data.Maybe"],
      D = a["Data.Natural"],
      z = a["Data.String.CodePoints"],
      u = a["Data.String.CodeUnits"],
      E = a["Data.String.NonEmpty.Internal"],
      B = a["Data.String.Utils"],
      M = a["Data.Traversable"],
      G = a["Data.XPath"],
      I = a["DataCite.Types.Common"],
      L = a.Effect,
      J = a["Effect.Exception"],
      V = a.Global,
      X = a["Metajelo.Types"],
      H = a["Metajelo.XPaths"],
      x = a["Text.Email.Validate"],
      K = a["Text.URL.Validate"],
      F = a["Web.DOM.Document.XPath"],
      R = a["Web.DOM.Document.XPath.ResultType"],
      v = a["Web.DOM.Element"],
      P = a["Web.DOM.Node"],
      Y = a["Web.DOM.NodeList"],
      ra = function ra(O) {
    return "Audiovisual" === O ? e.pure(b.applicativeEither)(I.Audiovisual.value) : "Dataset" === O ? e.pure(b.applicativeEither)(I.Dataset.value) : "Event" === O ? e.pure(b.applicativeEither)(I.Event.value) : "Image" === O ? e.pure(b.applicativeEither)(I.Image.value) : "InteractiveResource" === O ? e.pure(b.applicativeEither)(I.InteractiveResource.value) : "Model" === O ? e.pure(b.applicativeEither)(I.Model.value) : "PhysicalObject" === O ? e.pure(b.applicativeEither)(I.PhysicalObject.value) : "ResourceCollection" === O ? e.pure(b.applicativeEither)(I.ResourceCollection.value) : "Service" === O ? e.pure(b.applicativeEither)(I.Service.value) : "Software" === O ? e.pure(b.applicativeEither)(I.Software.value) : "Sound" === O ? e.pure(b.applicativeEither)(I.Sound.value) : "Text" === O ? e.pure(b.applicativeEither)(I.Text.value) : "Workflow" === O ? e.pure(b.applicativeEither)(I.Workflow.value) : "Other" === O ? e.pure(b.applicativeEither)(I.Other.value) : b.Left.create("Unknown ResourceTypeGeneral: '" + (O + "'"));
  },
      za = function za(O) {
    return function (ya) {
      return function () {
        var ba = H.unsafeSingleNodeValue(O)(ya)(G.xx(G.stringXPath)(H.resTypeP))(),
            na = O.xeval.str(ba)(".")();
        ba = O.xeval.str(ba)(G.at(G.stringXPath)(H.resTypeGenAT))();
        ba = H.rightOrThrow(ra(ba))();
        return {
          description: na,
          generalType: ba
        };
      };
    };
  },
      Aa = function Aa(O) {
    return "IsCitedBy" === O ? e.pure(b.applicativeEither)(I.IsCitedBy.value) : "Cites" === O ? e.pure(b.applicativeEither)(I.Cites.value) : "IsSupplementTo" === O ? e.pure(b.applicativeEither)(I.IsSupplementTo.value) : "IsSupplementedBy" === O ? e.pure(b.applicativeEither)(I.IsSupplementedBy.value) : "IsContinuedBy" === O ? e.pure(b.applicativeEither)(I.IsContinuedBy.value) : "Continues" === O ? e.pure(b.applicativeEither)(I.Continues.value) : "IsNewVersionOf" === O ? e.pure(b.applicativeEither)(I.IsNewVersionOf.value) : "IsPreviousVersionOf" === O ? e.pure(b.applicativeEither)(I.IsPreviousVersionOf.value) : "IsPartOf" === O ? e.pure(b.applicativeEither)(I.IsPartOf.value) : "HasPart" === O ? e.pure(b.applicativeEither)(I.HasPart.value) : "IsReferencedBy" === O ? e.pure(b.applicativeEither)(I.IsReferencedBy.value) : "References" === O ? e.pure(b.applicativeEither)(I.References.value) : "IsDocumentedBy" === O ? e.pure(b.applicativeEither)(I.IsDocumentedBy.value) : "Documents" === O ? e.pure(b.applicativeEither)(I.Documents.value) : "IsCompiledBy" === O ? e.pure(b.applicativeEither)(I.IsCompiledBy.value) : "Compiles" === O ? e.pure(b.applicativeEither)(I.Compiles.value) : "IsVariantFormOf" === O ? e.pure(b.applicativeEither)(I.IsVariantFormOf.value) : "IsOriginalFormOf" === O ? e.pure(b.applicativeEither)(I.IsOriginalFormOf.value) : "IsIdenticalTo" === O ? e.pure(b.applicativeEither)(I.IsIdenticalTo.value) : "HasMetadata" === O ? e.pure(b.applicativeEither)(I.HasMetadata.value) : "IsMetadataFor" === O ? e.pure(b.applicativeEither)(I.IsMetadataFor.value) : "Reviews" === O ? e.pure(b.applicativeEither)(I.Reviews.value) : "IsReviewedBy" === O ? e.pure(b.applicativeEither)(I.IsReviewedBy.value) : "IsDerivedFrom" === O ? e.pure(b.applicativeEither)(I.IsDerivedFrom.value) : "IsSourceOf" === O ? e.pure(b.applicativeEither)(I.IsSourceOf.value) : b.Left.create("Unknown RelationType: '" + (O + "'"));
  },
      A = function A(O) {
    return "Access" === O ? e.pure(b.applicativeEither)(new t.Just(X.Access.value)) : "Collection" === O ? e.pure(b.applicativeEither)(new t.Just(X.Collection.value)) : "Data" === O ? e.pure(b.applicativeEither)(new t.Just(X.Data.value)) : "Metadata" === O ? e.pure(b.applicativeEither)(new t.Just(X.Metadata.value)) : "Preservation" === O ? e.pure(b.applicativeEither)(new t.Just(X.Preservation.value)) : "Submission" === O ? e.pure(b.applicativeEither)(new t.Just(X.Submission.value)) : "Quality" === O ? e.pure(b.applicativeEither)(new t.Just(X.Quality.value)) : "Terms of Use" === O ? e.pure(b.applicativeEither)(new t.Just(X.TermsOfUse.value)) : "" === O ? e.pure(b.applicativeEither)(t.Nothing.value) : b.Left.create("Unknown PolicyType: '" + (O + "'"));
  },
      da = function da(O) {
    return function (ya) {
      return function (ba) {
        return function () {
          var na = O.xeval.any(ba)(G.xx(G.stringXPath)(ya))(R.ordered_node_snapshot_type)();
          na = F.snapshot(na)();
          na = M.traverse(M.traversableArray)(L.applicativeEffect)(function (fa) {
            return O.xeval.str(fa)(".");
          })(na)();
          na = d.map(d.functorArray)(function (fa) {
            return H.readNonEmptyString(ya)(fa);
          })(na);
          h.catLefts(l.monadArray)(p.plusArray)(na);
          na = h.catRights(l.monadArray)(p.plusArray)(na);
          return H.readNonEmptyArray(ya + "s")(na);
        };
      };
    };
  },
      ca = function ca(O) {
    return "commercial" === O ? e.pure(b.applicativeEither)(X.Commercial.value) : "non-profit" === O ? e.pure(b.applicativeEither)(X.NonProfit.value) : "governmental" === O ? e.pure(b.applicativeEither)(X.Governmental.value) : b.Left.create("Unknown InstitutionType: '" + (O + "'"));
  },
      xa = function xa(O) {
    return "dataCustodian" === O ? e.pure(b.applicativeEither)(new t.Just(X.DataCustodian.value)) : "" === O ? e.pure(b.applicativeEither)(t.Nothing.value) : b.Left.create("Unknown InstitutionContactType: '" + (O + "'"));
  },
      Q = function Q(O) {
    return "ARK" === O ? e.pure(b.applicativeEither)(I.ARK.value) : "arXiv" === O ? e.pure(b.applicativeEither)(I.ArXiv.value) : "bibcode" === O ? e.pure(b.applicativeEither)(I.Bibcode.value) : "DOI" === O ? e.pure(b.applicativeEither)(I.DOI.value) : "EAN13" === O ? e.pure(b.applicativeEither)(I.EAN13.value) : "EISSN" === O ? e.pure(b.applicativeEither)(I.EISSN.value) : "Handle" === O ? e.pure(b.applicativeEither)(I.Handle.value) : "IGSN" === O ? e.pure(b.applicativeEither)(I.IGSN.value) : "ISBN" === O ? e.pure(b.applicativeEither)(I.ISBN.value) : "ISSN" === O ? e.pure(b.applicativeEither)(I.ISSN.value) : "ISTC" === O ? e.pure(b.applicativeEither)(I.ISTC.value) : "LISSN" === O ? e.pure(b.applicativeEither)(I.LISSN.value) : "LSID" === O ? e.pure(b.applicativeEither)(I.LSID.value) : "PMID" === O ? e.pure(b.applicativeEither)(I.PMID.value) : "PURL" === O ? e.pure(b.applicativeEither)(I.PURL.value) : "UPC" === O ? e.pure(b.applicativeEither)(I.UPC.value) : "URL" === O ? e.pure(b.applicativeEither)(I.URL.value) : "URN" === O ? e.pure(b.applicativeEither)(I.URN.value) : b.Left.create("Unknown IdentifierType: '" + (O + "'"));
  },
      ja = function ja(O) {
    return function (ya) {
      var ba = function ba(fa) {
        return function () {
          var ka = O.xeval.str(fa)(G.at(G.stringXPath)(H.idTypeAT))();
          return H.rightOrThrow(Q(ka))();
        };
      },
          na = function na(fa) {
        return function () {
          var ka = O.xeval.str(fa)(".")();
          return H.rightOrThrow(H.readNonEmptyString("InstitutionID")(ka))();
        };
      };

      return function () {
        var fa = H.unsafeSingleNodeValue(O)(ya)(G.xx(G.stringXPath)(H.instIdP))(),
            ka = na(fa)();
        fa = ba(fa)();
        return {
          identifier: ka,
          identifierType: fa
        };
      };
    };
  },
      Fa = function Fa(O) {
    var ya = function ya(ka) {
      return function () {
        var C = O.xeval.str(ka)(G.at(G.stringXPath)(H.relTypeAT))();
        return H.rightOrThrow(Aa(C))();
      };
    },
        ba = function ba(ka) {
      return function () {
        var C = O.xeval.str(ka)(G.at(G.stringXPath)(H.relIdTypeAT))();
        return H.rightOrThrow(Q(C))();
      };
    },
        na = function na(ka) {
      return function () {
        var C = O.xeval.str(ka)(".")();
        return H.rightOrThrow(H.readNonEmptyString("RelatedIdentifier")(C))();
      };
    },
        fa = function fa(ka) {
      return function () {
        var C = na(ka)(),
            ia = ba(ka)(),
            wa = ya(ka)();
        return {
          identifier: C,
          identifierType: ia,
          relationType: wa
        };
      };
    };

    return function () {
      var ka = O.xevalRoot.any(H.relIdRootP)(R.ordered_node_snapshot_type)();
      ka = F.snapshot(ka)();
      ka = M.sequence(M.traversableArray)(L.applicativeEffect)(d.map(d.functorArray)(fa)(ka))();
      ka = n.fromArray(ka);
      if (ka instanceof t.Just) return ka.value0;
      if (ka instanceof t.Nothing) return J["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 112, column 3 - line 114, column 67): " + [ka.constructor.name]);
    };
  },
      ta = function ta(O) {
    return function (ya) {
      var ba = function ba(ka) {
        return function () {
          var C = O.xeval.str(ka)(G.at(G.stringXPath)(H.resIdTypeAT))();
          return H.rightOrThrow(Q(C))();
        };
      },
          na = function na(ka) {
        return function () {
          var C = O.xeval.str(ka)(".")();
          return H.rightOrThrow(H.readNonEmptyString("ResourceID")(C))();
        };
      },
          fa = function fa(ka) {
        return function (C) {
          return M.sequence(M.traversableMaybe)(L.applicativeEffect)(f.bind(t.bindMaybe)(ka)(function (ia) {
            return f.bind(t.bindMaybe)(C)(function (wa) {
              return e.pure(t.applicativeMaybe)(g.lift2(L.applyEffect)(function (Ja) {
                return function (La) {
                  return {
                    identifier: Ja,
                    identifierType: La
                  };
                };
              })(ia)(wa));
            });
          }));
        };
      };

      return function () {
        var ka = O.xeval.nodeMay(ya)(G.xx(G.stringXPath)(H.resIdP))(),
            C = d.map(t.functorMaybe)(na)(ka);
        ka = d.map(t.functorMaybe)(ba)(ka);
        return fa(C)(ka)();
      };
    };
  },
      va = function va(O) {
    return function () {
      var ya = O.xevalRoot.str(H.idRootP)();
      ya = H.rightOrThrow(H.readNonEmptyString("Identifier")(ya))();
      var ba = O.xevalRoot.str(H.idTypeRootAP)();
      ba = H.rightOrThrow(Q(ba))();
      return {
        identifier: ya,
        identifierType: ba
      };
    };
  },
      qa = function qa(O) {
    return function (ya) {
      var ba = function ba(na) {
        return function () {
          var fa = O.xeval.str(na)(".")();
          return H.rightOrThrow(H.readNonEmptyString("Format")(fa))();
        };
      };

      return function () {
        var na = O.xeval.any(ya)(G.pathAppendNSx(G.stringXPath)(G.xx(G.stringXPath)(H.formatCP))(H.formatP))(R.ordered_node_snapshot_type)();
        na = F.snapshot(na)();
        return M.traverse(M.traversableArray)(L.applicativeEffect)(ba)(na)();
      };
    };
  },
      Ba = function Ba(O) {
    return "0" === O ? e.pure(b.applicativeEither)(!1) : "1" === O ? e.pure(b.applicativeEither)(!0) : "false" === O ? e.pure(b.applicativeEither)(!1) : "true" === O ? e.pure(b.applicativeEither)(!0) : b.Left.create("Invalid xs:boolean value: '" + (O + "'"));
  },
      Ha = function Ha(O) {
    return "" === O ? e.pure(b.applicativeEither)(t.Nothing.value) : d.map(b.functorEither)(t.Just.create)(Ba(O));
  },
      ha = function ha(O) {
    return function (ya) {
      var ba = G.pathAppendNSx(G.stringXPath)(G.xx(G.stringXPath)(H.instPolicyCP))(H.instPolicyP),
          na = function na(fa) {
        return function () {
          var ka = P.childNodes(fa)();
          ka = Y.toArray(ka)();
          ka = k.head(k.filter(function (Ia) {
            return !B.startsWith("#")(P.nodeName(Ia));
          })(ka));
          if (ka instanceof t.Just) var C = ka.value0;else if (ka instanceof t.Nothing) C = J["throw"]("Couldn't find child node of " + P.nodeName(fa))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 394, column 30 - line 396, column 80): " + [ka.constructor.name]);
          var ia = O.xeval.str(C)(".")(),
              wa = H.rightOrThrow(H.readNonEmptyString("Policy")(ia))();

          ka = function () {
            var Ia = d.map(t.functorMaybe)(v.localName)(v.fromNode(C));
            if (Ia instanceof t.Just && Ia.value0 === H.freeTextPolicyP) return new X.FreeTextPolicy(wa);

            if (Ia instanceof t.Just && Ia.value0 === H.refPolicyP) {
              Ia = K.parsePublicURL(ia);
              if (Ia instanceof b.Left) return J["throw"]("In refPolicy URL parsing: " + Ia.value0)();
              if (Ia instanceof b.Right) return new X.RefPolicy(Ia.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 401, column 37 - line 403, column 45): " + [Ia.constructor.name]);
            }

            if (Ia instanceof t.Just) return J["throw"]("invalid element '" + (Ia.value0 + "' as child of institutionPolicy"))();
            if (Ia instanceof t.Nothing) return J["throw"]("unable to convert policy child Node with name '" + (P.nodeName(C) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 399, column 17 - line 407, column 56): " + [Ia.constructor.name]);
          }();

          var Ja = O.xeval.str(fa)(G.at(G.stringXPath)(H.polTypeAT))();
          Ja = H.rightOrThrow(A(Ja))();
          var La = O.xeval.str(fa)(G.at(G.stringXPath)(H.appliesToProdAT))();
          La = H.rightOrThrow(Ha(La))();
          return {
            policy: ka,
            policyType: Ja,
            appliesToProduct: La
          };
        };
      };

      return function () {
        var fa = O.xeval.any(ya)(ba)(R.ordered_node_snapshot_type)();
        fa = F.snapshot(fa)();
        fa = M.sequence(M.traversableArray)(L.applicativeEffect)(d.map(d.functorArray)(na)(fa))();
        fa = n.fromArray(fa);
        if (fa instanceof t.Just) return fa.value0;
        if (fa instanceof t.Nothing) return J["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 381, column 3 - line 383, column 67): " + [fa.constructor.name]);
      };
    };
  },
      la = function la(O) {
    return function (ya) {
      var ba = function ba(fa) {
        return function () {
          var ka = O.xeval.str(fa)(G.xx(G.stringXPath)(H.pubYearP))();
          ka = H.rightOrThrow(H.readNonEmptyString("PubYear")(ka))();
          return D.intToNat(q.round(V.readInt(10)(E.toString(ka))));
        };
      },
          na = G.xx(G.stringXPath)(H.basicMetaP);

      return function () {
        var fa = H.unsafeSingleNodeValue(O)(ya)(na)(),
            ka = f.bindFlipped(L.bindEffect)(H.rightOrThrow)(da(O)(H.titleP)(fa))(),
            C = f.bindFlipped(L.bindEffect)(H.rightOrThrow)(da(O)(H.creatorP)(fa))();
        fa = ba(fa)();
        return {
          titles: ka,
          creators: C,
          publicationYear: fa
        };
      };
    };
  },
      ea = function ea(O) {
    var ya = E.toString(O);
    return function () {
      var ba = u.stripSuffix("Z")(ya);
      if (ba instanceof t.Just) ba = 10 >= z.length(ba.value0) ? ba.value0 + "T00:00:00.000Z" : ya;else if (ba instanceof t.Nothing) ba = ya;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 98, column 24 - line 100, column 23): " + [ba.constructor.name]);
      ba = w.parse(ba)();
      return t.fromMaybe(r.bottom(y.boundedDateTime))(w.toDateTime(ba));
    };
  },
      N = function N(O) {
    return function () {
      var ya = O.xevalRoot.str(H.dateRootP)();
      ya = H.rightOrThrow(H.readNonEmptyString("Date")(ya))();
      return ea(ya)();
    };
  },
      Z = function Z(O) {
    return function () {
      var ya = O.xevalRoot.str(H.lastModRootP)();
      ya = H.rightOrThrow(H.readNonEmptyString("ModDate")(ya))();
      return ea(ya)();
    };
  },
      T = function T(O) {
    return function (ya) {
      return function (ba) {
        return function () {
          var na = O.xeval.str(ba)(ya)();
          na = K.parsePublicURL(na);
          if (na instanceof b.Left) return J["throw"](na.value0)();
          if (na instanceof b.Right) return na.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 442, column 3 - line 444, column 26): " + [na.constructor.name]);
        };
      };
    };
  },
      Ga = function Ga(O) {
    return function (ya) {
      var ba = function ba(C) {
        return function () {
          var ia = C();
          return H.rightOrThrow(H.readNonEmptyString("SuperOrg")(ia))();
        };
      },
          na = function na(C) {
        return function () {
          var ia = O.xeval.nodeMay(C)(G.xx(G.stringXPath)(H.superOrgNameP))();
          return M.traverse(M.traversableMaybe)(L.applicativeEffect)(function (wa) {
            return ba(O.xeval.str(wa)("."));
          })(ia)();
        };
      },
          fa = function fa(C) {
        return function () {
          var ia = H.unsafeSingleNodeValue(O)(C)(G.xx(G.stringXPath)(H.instSustainP))(),
              wa = T(O)(G.xx(G.stringXPath)(H.missionUrlP))(ia)();
          ia = T(O)(G.xx(G.stringXPath)(H.fundingUrlP))(ia)();
          return {
            missionStatementURL: wa,
            fundingStatementURL: ia
          };
        };
      },
          ka = function ka(C) {
        var ia = G.xx(G.stringXPath)(H.instContactP);
        return function () {
          var wa = H.unsafeSingleNodeValue(O)(C)(ia)(),
              Ja = O.xeval.str(wa)(G.at(G.stringXPath)(H.instContactTypeAT))();
          Ja = H.rightOrThrow(xa(Ja))();
          wa = O.xeval.str(wa)(".")();
          wa = x.validate(wa);
          if (wa instanceof b.Left) wa = J["throw"]("Error in validating email address for InstitutionContact: " + wa.value0)();else if (wa instanceof b.Right) wa = wa.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 345, column 23 - line 349, column 28): " + [wa.constructor.name]);
          return {
            emailAddress: wa,
            contactType: Ja
          };
        };
      };

      return function () {
        var C = H.unsafeSingleNodeValue(O)(ya)(G.xx(G.stringXPath)(H.locP))(),
            ia = ja(O)(C)(),
            wa = f.join(L.bindEffect)(d.mapFlipped(L.functorEffect)(O.xeval.str(C)(G.xx(G.stringXPath)(H.instNameP)))(function ($a) {
          return H.rightOrThrow(H.readNonEmptyString("Institution Name")($a));
        }))(),
            Ja = O.xeval.str(C)(G.xx(G.stringXPath)(H.instTypeP))();
        Ja = H.rightOrThrow(ca(Ja))();
        var La = na(C)(),
            Ia = ka(C)(),
            Ra = fa(C)(),
            Ua = ha(O)(C)();
        C = O.xeval.str(C)(G.xx(G.stringXPath)(H.versioningP))();
        C = H.rightOrThrow(Ba(C))();
        return {
          institutionID: ia,
          institutionName: wa,
          institutionType: Ja,
          superOrganizationName: La,
          institutionContact: Ia,
          institutionSustainability: Ra,
          institutionPolicies: Ua,
          versioning: C
        };
      };
    };
  },
      Ea = function Ea(O) {
    return function (ya) {
      var ba = function ba(fa) {
        return function () {
          var ka = O.xeval.str(fa)(G.at(G.stringXPath)(H.relTypeAT))();
          return H.rightOrThrow(Aa(ka))();
        };
      },
          na = function na(fa) {
        return function (ka) {
          return M.sequence(M.traversableMaybe)(L.applicativeEffect)(f.bind(t.bindMaybe)(fa)(function (C) {
            return f.bind(t.bindMaybe)(ka)(function (ia) {
              return e.pure(t.applicativeMaybe)(g.lift2(L.applyEffect)(function (wa) {
                return function (Ja) {
                  return {
                    url: wa,
                    relationType: Ja
                  };
                };
              })(C)(ia));
            });
          }));
        };
      };

      return function () {
        var fa = O.xeval.nodeMay(ya)(G.xx(G.stringXPath)(H.resMetaSourceP))(),
            ka = d.map(t.functorMaybe)(T(O)("."))(fa);
        fa = d.map(t.functorMaybe)(ba)(fa);
        return na(ka)(fa)();
      };
    };
  },
      oa = function oa(O) {
    var ya = function ya(ba) {
      return function () {
        var na = la(O)(ba)(),
            fa = ta(O)(ba)(),
            ka = za(O)(ba)(),
            C = qa(O)(ba)(),
            ia = Ea(O)(ba)(),
            wa = Ga(O)(ba)();
        return {
          basicMetadata: na,
          resourceID: fa,
          resourceType: ka,
          format: C,
          resourceMetadataSource: ia,
          location: wa
        };
      };
    };

    return function () {
      var ba = O.xevalRoot.any(H.sProdRootP)(R.ordered_node_snapshot_type)();
      ba = F.snapshot(ba)();
      ba = M.sequence(M.traversableArray)(L.applicativeEffect)(d.map(d.functorArray)(ya)(ba))();
      ba = n.fromArray(ba);
      if (ba instanceof t.Just) return ba.value0;
      if (ba instanceof t.Nothing) return J["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 170, column 3 - line 172, column 70): " + [ba.constructor.name]);
    };
  };

  c.readRecord = function (O) {
    return function () {
      var ya = va(O)(),
          ba = N(O)(),
          na = Z(O)(),
          fa = Fa(O)(),
          ka = oa(O)();
      return {
        identifier: ya,
        date: ba,
        lastModified: na,
        relatedIdentifiers: fa,
        supplementaryProducts: ka
      };
    };
  };

  c.readIdentifierType = Q;
  c.parseDate = ea;
  c.readRelationType = Aa;
  c.readResourceTypeGeneral = ra;
  c.readInstitutionType = ca;
  c.readInstitutionContactType = xa;
  c.readPolicyType = A;
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
      y = a["Data.Traversable"],
      b = a["Data.Unit"],
      h = a["Data.XPath"],
      d = a["DataCite.Types.Common"],
      q = a.Effect,
      w = a["Metajelo.Types"],
      t = a["Metajelo.XPaths"],
      D = a["Nonbili.DOM"],
      z = a["Text.Email.Parser"],
      u = a["Text.URL.Validate"],
      E = a["Web.DOM.Document"],
      B = a["Web.DOM.Element"],
      M = a["Web.DOM.Node"],
      G = function G(ha) {
    return function (la) {
      return function (ea) {
        return function (N) {
          var Z = B.fromNode(ea);
          return function () {
            y.sequence(y.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(Z)(function (T) {
              return B.setAttribute(ha)(r.show(d.showIdentifierType)(N))(T);
            }))();
            return b.unit;
          };
        };
      };
    };
  },
      I = a["Data.String.NonEmpty.Internal"].toString,
      L = function L(ha) {
    return function (la) {
      return function (ea) {
        return function (N) {
          return function () {
            M.setTextContent(I(N.identifier))(ea)();
            return G(ha)(la)(ea)(N.identifierType)();
          };
        };
      };
    };
  },
      J = function J(ha) {
    return function (la) {
      return function () {
        var ea = t.unsafeSingleNodeValue(ha)(ha.recNode)(h.xx(h.stringXPath)(t.idP))();
        return L(t.idTypeAT)(ha)(ea)(la)();
      };
    };
  },
      V = function V(ha) {
    return function (la) {
      return function () {
        y.sequence(y.traversableMaybe)(q.applicativeEffect)(l.map(k.functorMaybe)(M.setTextContent(I(ha)))(la))();
        return b.unit;
      };
    };
  },
      X = function X(ha) {
    return function () {
      var la = p.toISOString(p.fromDateTime(ha))();
      return t.rightOrThrow(t.readNonEmptyString("(generic date)")(la))();
    };
  },
      H = function H(ha) {
    return function (la) {
      return function () {
        var ea = X(la)(),
            N = ha.xevalRoot.nodeMay(t.dateRootP)();
        return V(ea)(N)();
      };
    };
  },
      x = function x(ha) {
    return function (la) {
      return function () {
        var ea = X(la)(),
            N = ha.xevalRoot.nodeMay(t.lastModRootP)();
        return V(ea)(N)();
      };
    };
  },
      K = function K(ha) {
    return function (la) {
      var ea = B.prefix(ha.recElem);
      return function () {
        if (ea instanceof k.Just) var N = ea.value0 + ":";else if (ea instanceof k.Nothing) N = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 250, column 20 - line 252, column 18): " + [ea.constructor.name]);
        N += la;
        return E.createElementNS(new k.Just(ha.ns))(N)(ha.doc)();
      };
    };
  },
      F = function F(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = K(ha)(ea)();
          M.appendChild(B.toNode(N))(la)();
          return N;
        };
      };
    };
  },
      R = function R(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = F(ha)(la)(t.instContactP)();
          y.sequence(y.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(ea.contactType)(function (Z) {
            return B.setAttribute(t.instContactTypeAT)(r.show(w.showInstitutionContactType)(Z))(N);
          }))();
          return M.setTextContent(z.toString(ea.emailAddress))(B.toNode(N))();
        };
      };
    };
  },
      v = function v(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = l.map(q.functorEffect)(B.toNode)(F(ha)(la)(t.instIdP))();
          return L(t.idTypeAT)(ha)(N)(ea)();
        };
      };
    };
  },
      P = function P(ha) {
    return function (la) {
      return f.for_(q.applicativeEffect)(g.foldableNonEmptyArray)(la)(function (ea) {
        return function () {
          var N = F(ha)(ha.recNode)(t.relIdP)(),
              Z = B.toNode(N);
          M.setTextContent(I(ea.identifier))(Z)();
          B.setAttribute(t.relIdTypeAT)(r.show(d.showIdentifierType)(ea.identifierType))(N)();
          return B.setAttribute(t.relTypeAT)(r.show(d.showRelationType)(ea.relationType))(N)();
        };
      });
    };
  },
      Y = function Y(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = l.map(q.functorEffect)(B.toNode)(F(ha)(la)(t.resIdP))();
          return L(t.resIdTypeAT)(ha)(N)(ea)();
        };
      };
    };
  },
      ra = function ra(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = F(ha)(la)(t.resMetaSourceP)();
          M.setTextContent(u.urlToString(ea.url))(B.toNode(N))();
          return B.setAttribute(t.relTypeAT)(r.show(d.showRelationType)(ea.relationType))(N)();
        };
      };
    };
  },
      za = function za(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = F(ha)(la)(t.resTypeP)();
          M.setTextContent(ea.description)(B.toNode(N))();
          return B.setAttribute(t.resTypeGenAT)(r.show(d.showResourceTypeGeneral)(ea.generalType))(N)();
        };
      };
    };
  },
      Aa = function Aa(ha) {
    return function (la) {
      return function (ea) {
        return function (N) {
          return function () {
            var Z = l.map(q.functorEffect)(B.toNode)(F(la)(ea)(ha))();
            return M.setTextContent(N)(Z)();
          };
        };
      };
    };
  },
      A = function A(ha) {
    return function (la) {
      return function (ea) {
        return function (N) {
          return Aa(ha)(la)(ea)(I(N));
        };
      };
    };
  },
      da = function da(ha) {
    return function (la) {
      return function (ea) {
        return f.for_(q.applicativeEffect)(g.foldableNonEmptyArray)(ea)(function (N) {
          return A(t.creatorP)(ha)(la)(N);
        });
      };
    };
  },
      ca = function ca(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = l.map(q.functorEffect)(B.toNode)(F(ha)(la)(t.formatCP))();
          return f.for_(q.applicativeEffect)(f.foldableArray)(ea)(function (Z) {
            return A(t.formatP)(ha)(N)(Z);
          })();
        };
      };
    };
  },
      xa = function xa(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = F(ha)(la)(t.instPolicyP)(),
              Z = B.toNode(N);
          y.sequence(y.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(ea.policyType)(function (T) {
            return B.setAttribute(t.polTypeAT)(r.show(w.showPolicyType)(T))(N);
          }))();
          y.sequence(y.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(ea.appliesToProduct)(function (T) {
            return B.setAttribute(t.appliesToProdAT)(r.show(r.showBoolean)(T))(N);
          }))();
          if (ea.policy instanceof w.FreeTextPolicy) return A(t.freeTextPolicyP)(ha)(Z)(ea.policy.value0)();
          if (ea.policy instanceof w.RefPolicy) return A(t.refPolicyP)(ha)(Z)(u.urlToNEString(ea.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 217, column 3 - line 220, column 27): " + [ea.policy.constructor.name]);
        };
      };
    };
  },
      Q = function Q(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = l.map(q.functorEffect)(B.toNode)(F(ha)(la)(t.instPolicyCP))();
          return f.for_(q.applicativeEffect)(g.foldableNonEmptyArray)(ea)(function (Z) {
            return xa(ha)(N)(Z);
          })();
        };
      };
    };
  },
      ja = function ja(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = l.map(q.functorEffect)(B.toNode)(F(ha)(la)(t.instSustainP))();
          A(t.missionUrlP)(ha)(N)(u.urlToNEString(ea.missionStatementURL))();
          return A(t.fundingUrlP)(ha)(N)(u.urlToNEString(ea.fundingStatementURL))();
        };
      };
    };
  },
      Fa = function Fa(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = F(ha)(la)(t.locP)(),
              Z = B.toNode(N);
          v(ha)(Z)(ea.institutionID)();
          A(t.instNameP)(ha)(Z)(ea.institutionName)();
          Aa(t.instTypeP)(ha)(Z)(r.show(w.showInstitutionType)(ea.institutionType))();
          y.sequence(y.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(ea.superOrganizationName)(function (T) {
            return A(t.superOrgNameP)(ha)(Z)(T);
          }))();
          R(ha)(Z)(ea.institutionContact)();
          ja(ha)(Z)(ea.institutionSustainability)();
          Q(ha)(Z)(ea.institutionPolicies)();
          return Aa(t.versioningP)(ha)(Z)(r.show(r.showBoolean)(ea.versioning))();
        };
      };
    };
  },
      ta = function ta(ha) {
    return function (la) {
      return function (ea) {
        return f.for_(q.applicativeEffect)(g.foldableNonEmptyArray)(ea)(function (N) {
          return A(t.titleP)(ha)(la)(N);
        });
      };
    };
  },
      va = function va(ha) {
    return function (la) {
      return function (ea) {
        return function () {
          var N = l.map(q.functorEffect)(B.toNode)(F(ha)(la)(t.basicMetaP))();
          ta(ha)(N)(ea.titles)();
          da(ha)(N)(ea.creators)();
          N = l.map(q.functorEffect)(B.toNode)(F(ha)(N)(t.pubYearP))();
          return M.setTextContent(r.show(n.showNatural)(ea.publicationYear))(N)();
        };
      };
    };
  },
      qa = function qa(ha) {
    return function (la) {
      return function () {
        var ea = t.unsafeSingleNodeValue(ha)(ha.recNode)(h.xx(h.stringXPath)(t.sProdCP))(),
            N = l.map(q.functorEffect)(B.toNode)(F(ha)(ea)(t.sProdP))();
        va(ha)(N)(la.basicMetadata)();
        y.sequence(y.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(la.resourceID)(function (Z) {
          return Y(ha)(N)(Z);
        }))();
        za(ha)(N)(la.resourceType)();
        ca(ha)(N)(la.format)();
        y.sequence(y.traversableMaybe)(q.applicativeEffect)(l.mapFlipped(k.functorMaybe)(la.resourceMetadataSource)(function (Z) {
          return ra(ha)(N)(Z);
        }))();
        return Fa(ha)(N)(la.location)();
      };
    };
  },
      Ba = function Ba(ha) {
    return function (la) {
      return f.for_(q.applicativeEffect)(g.foldableNonEmptyArray)(la)(function (ea) {
        return qa(ha)(ea);
      });
    };
  },
      Ha = function Ha(ha) {
    return function (la) {
      return function () {
        J(ha)(la.identifier)();
        H(ha)(la.date)();
        x(ha)(la.lastModified)();
        P(ha)(la.relatedIdentifiers)();
        return Ba(ha)(la.supplementaryProducts)();
      };
    };
  };

  c.recordToString = function (ha) {
    return function () {
      var la = t.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      Ha(la)(ha)();
      la = E.documentElement(la.doc)();
      return k.maybe(e.pure(q.applicativeEffect)(""))(D.outerHTML)(la)();
    };
  };

  c.dateTimeToStr = X;
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
      y = a["Control.Apply"],
      b = a["Control.Bind"],
      h = a["Control.Cofree"],
      d = a["Control.Plus"],
      q = a["Data.Array"],
      w = a["Data.Array.NonEmpty"],
      t = a["Data.Bifunctor"],
      D = a["Data.Bounded"],
      z = a["Data.Either"],
      u = a["Data.Enum"],
      E = a["Data.Eq"],
      B = a["Data.Foldable"],
      M = a["Data.Functor"],
      G = a["Data.Generic.Rep"],
      I = a["Data.Generic.Rep.Bounded"],
      L = a["Data.Generic.Rep.Enum"],
      J = a["Data.Generic.Rep.Eq"],
      V = a["Data.Generic.Rep.Ord"],
      X = a["Data.Generic.Rep.Show"],
      H = a["Data.Int"],
      x = a["Data.Maybe"],
      K = a["Data.Monoid"],
      F = a["Data.Natural"],
      R = a["Data.Ord"],
      v = a["Data.Profunctor.Strong"],
      P = a["Data.Semigroup"],
      Y = a["Data.Show"],
      ra = a["Data.String.Common"],
      za = a["Data.String.NonEmpty.Internal"],
      Aa = a["Data.Symbol"],
      A = a["Data.Traversable"],
      da = a["Data.Tuple"],
      ca = a["Data.Unfoldable1"],
      xa = a["Data.Unit"],
      Q = a["DataCite.Types.Common"],
      ja = a.Effect,
      Fa = a["Effect.Class"],
      ta = a["Effect.Exception"],
      va = a["Effect.Now"],
      qa = a["Effect.Unsafe"],
      Ba = a["Foreign.Object"],
      Ha = a.Global,
      ha = a["Metajelo.CSS.UI.ClassProps"],
      la = a["Metajelo.SchemaInfo"],
      ea = a["Metajelo.Types"],
      N = a["Metajelo.XPaths.Read"],
      Z = a["Metajelo.XPaths.Write"],
      T = a["React.SyntheticEvent"],
      Ga = a["Text.Email.Parser"],
      Ea = a["Text.Email.Validate"],
      oa = a["Text.URL.Validate"],
      O = a["Web.DOM.Document"],
      ya = a["Web.DOM.Element"],
      ba = a["Web.DOM.HTMLCollection"],
      na = a["Web.DOM.NonElementParentNode"],
      fa = a["Web.DOM.ParentNode"],
      ka = a["Web.HTML"],
      C = a["Web.HTML.HTMLDocument"],
      ia = a["Web.HTML.HTMLInputElement"],
      wa = a["Web.HTML.Window"],
      Ja = function () {
    function U() {}

    U.value = new U();
    return U;
  }(),
      La = function () {
    function U() {}

    U.value = new U();
    return U;
  }(),
      Ia = function () {
    function U(aa) {
      this.value0 = aa;
    }

    U.create = function (aa) {
      return new U(aa);
    };

    return U;
  }(),
      Ra = function () {
    function U(aa) {
      this.value0 = aa;
    }

    U.create = function (aa) {
      return new U(aa);
    };

    return U;
  }(),
      Ua = function Ua(U, aa, Ka) {
    this.fromOptionValue = U;
    this.toOptionLabel = aa;
    this.toOptionValue = Ka;
  },
      $a = function $a() {
    var U = ka.window();
    U = wa.document(U)();
    return C.toDocument(U);
  },
      ab = function ab(U) {
    if (U instanceof Ia || U instanceof Ra) return U.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 376, column 1 - line 376, column 34): " + [U.constructor.name]);
  },
      cb = function cb(U) {
    return p.input(g.widgetLiftWidget)([k.defaultValue(U), M.map(f.functorProps)(k.unsafeTargetValue)(k.onChange)]);
  },
      db = function db(U) {
    return b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(U)(function (aa) {
      return r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(za.fromString(ra.trim(aa)));
    });
  },
      gb = function gb(U) {
    return function (aa) {
      aa = Ba.lookup(U)(aa);
      if (aa instanceof x.Just) return aa.value0;
      if (aa instanceof x.Nothing) return "";
      throw Error("Failed pattern match at Metajelo.FormUtil (line 90, column 21 - line 92, column 16): " + [aa.constructor.name]);
    };
  },
      bb = function bb(U) {
    var aa = U ? "Hide Descriptions" : "Show Descriptions";
    return p.div_(l.widgetShiftMap)([])(M.voidRight(l.widgetFunctor)(!U)(p.button_(l.widgetShiftMap)([k.onClick])(p.text(g.widgetLiftWidget)(aa))));
  },
      jb = function jb(U) {
    return e.step(U)(b.bind(l.widgetBind)(bb(U))(function (aa) {
      return r.pure(l.widgetApplicative)(jb(aa));
    }));
  },
      Ya = function Ya(U) {
    return function (aa) {
      return function (Ka) {
        return function () {
          var Ca = $a();
          Ca = O.toNonElementParentNode(Ca);
          Ca = na.getElementById(U)(Ca)();
          if (Ca instanceof x.Just) return Ca = ya.toParentNode(Ca.value0), Ca = fa.children(Ca)(), Ca = ba.toArray(Ca)(), Ca = q.filter(function (Na) {
            return ya.tagName(Na) === aa;
          })(Ca), Ca = q.catMaybes(M.map(M.functorArray)(ia.fromElement)(Ca)), B.for_(ja.applicativeEffect)(B.foldableArray)(Ca)(ia.setValue(Ka))();
          if (Ca instanceof x.Nothing) return xa.unit;
          throw Error("Failed pattern match at Metajelo.FormUtil (line 506, column 3 - line 519, column 25): " + [Ca.constructor.name]);
        };
      };
    };
  },
      mb = function mb(U) {
    return function (aa) {
      return aa < U ? [] : q.range(U)(aa);
    };
  },
      Pa = function Pa(U) {
    return "FreeTextPolicy" === U ? r.pure(z.applicativeEither)(Ja.value) : "RefPolicy" === U ? r.pure(z.applicativeEither)(La.value) : z.Left.create("Unknown Policy: '" + (U + "'"));
  },
      tb = Ba.unions(B.foldableArray)([la.descrAttrMap, la.descrCTypMap, la.descrEleMap, la.descrSTypMap]),
      Ta = function Ta(U) {
    return function (aa) {
      return B.fold(B.foldableMaybe)(K.monoidString)(M.map(x.functorMaybe)(Y.show(U))(aa));
    };
  },
      ub = new Ua(function (U) {
    return x.fromJust()(z.hush(N.readResourceTypeGeneral(U)));
  }, Y.show(Q.showResourceTypeGeneral), Y.show(Q.showResourceTypeGeneral)),
      vb = new Ua(function (U) {
    return x.fromJust()(z.hush(N.readRelationType(U)));
  }, Y.show(Q.showRelationType), Y.show(Q.showRelationType)),
      nb = new Ua(function (U) {
    return x.fromJust()(z.hush(N.readInstitutionType(U)));
  }, Y.show(ea.showInstitutionType), Y.show(ea.showInstitutionType)),
      wb = new Ua(function (U) {
    return x.fromJust()(z.hush(N.readIdentifierType(U)));
  }, Y.show(Q.showIdentifierType), Y.show(Q.showIdentifierType)),
      ob = function ob(U) {
    return U instanceof Ia ? !0 : !1;
  },
      xb = function xb(U) {
    return function () {
      var aa = $a();
      aa = O.toNonElementParentNode(aa);
      aa = na.getElementById(U)(aa)();
      return A.traverse(A.traversableMaybe)(ja.applicativeEffect)(ia.value)(b.bind(x.bindMaybe)(aa)(function (Ka) {
        return ia.fromElement(Ka);
      }))();
    };
  },
      Wa = new G.Generic(function (U) {
    if (U instanceof Ja) return new G.Inl(G.NoArguments.value);
    if (U instanceof La) return new G.Inr(G.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 318, column 1 - line 318, column 58): " + [U.constructor.name]);
  }, function (U) {
    if (U instanceof G.Inl) return Ja.value;
    if (U instanceof G.Inr) return La.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 318, column 1 - line 318, column 58): " + [U.constructor.name]);
  }),
      pb = new Y.Show(X.genericShow(Wa)(X.genericShowSum(X.genericShowConstructor(X.genericShowArgsNoArguments)(new Aa.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(X.genericShowConstructor(X.genericShowArgsNoArguments)(new Aa.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      yb = new Ua(function () {
    var U = x.fromMaybe(Ja.value);
    return function (aa) {
      return U(z.hush(Pa(aa)));
    };
  }(), Y.show(pb), Y.show(pb)),
      Qa = new M.Functor(function (U) {
    return function (aa) {
      if (aa instanceof Ia) return Ia.create(M.map(x.functorMaybe)(U)(aa.value0));
      if (aa instanceof Ra) return Ra.create(M.map(x.functorMaybe)(U)(aa.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 363, column 1 - line 365, column 48): " + [U.constructor.name, aa.constructor.name]);
    };
  }),
      qb = function qb(U) {
    return function (aa) {
      return function (Ka) {
        return e.step(Ka)(function () {
          var Ca = x.isJust(Ka) ? !0 : !1;
          return b.bind(l.widgetBind)(p.select(l.widgetMultiAlternative(K.monoidArray))(l.widgetShiftMap)([k.value(x.maybe("")(aa.toOptionValue)(Ka)), M.map(f.functorProps)(function () {
            var Na = aa.fromOptionValue;
            return function (Va) {
              return Na(k.unsafeTargetValue(Va));
            };
          }())(k.onChange)])(q.cons(p.option(l.widgetMultiAlternative(K.monoidArray))(l.widgetShiftMap)([k.disabled(Ca)])([p.text(g.widgetLiftWidget)("Select ...")]))(M.mapFlipped(M.functorArray)(u.upFromIncluding(U.Enum1())(ca.unfoldable1Array)(D.bottom(U.Bounded0())))(function (Na) {
            return p.option(l.widgetMultiAlternative(K.monoidArray))(l.widgetShiftMap)([k.value((0, aa.toOptionValue)(Na))])([p.text(g.widgetLiftWidget)((0, aa.toOptionLabel)(Na))]);
          }))))(function (Na) {
            return r.pure(l.widgetApplicative)(qb(U)(aa)(new x.Just(Na)));
          });
        }());
      };
    };
  },
      Ma = function Ma(U) {
    return function (aa) {
      return function (Ka) {
        return function (Ca) {
          return function (Na) {
            return B.fold(U)(Ka)(M.map(aa)(Ca)(Na));
          };
        };
      };
    };
  },
      fb = function fb(U) {
    U = Ma(B.foldableMaybe)(x.functorMaybe)(K.monoidString)(za.toString)(U);
    U = e.debounce(K.monoidArray)(1E3)(U)(cb);
    return db(U);
  },
      hb = function hb(U) {
    return x.maybe(K.mempty(l.widgetMonoid(K.monoidArray)))(function (aa) {
      return p.div(l.widgetMultiAlternative(K.monoidArray))(l.widgetShiftMap)([k.style({
        color: "red"
      })])([p.text(g.widgetLiftWidget)(Y.show(U)(aa))]);
    });
  },
      Ab = new E.Eq(J.genericEq(Wa)(J.genericEqSum(J.genericEqConstructor(J.genericEqNoArguments))(J.genericEqConstructor(J.genericEqNoArguments)))),
      rb = new R.Ord(function () {
    return Ab;
  }, function (U) {
    return function (aa) {
      return V.genericCompare(Wa)(V.genericOrdSum(V.genericOrdConstructor(V.genericOrdNoArguments))(V.genericOrdConstructor(V.genericOrdNoArguments)))(U)(aa);
    };
  }),
      sb = new u.Enum(function () {
    return rb;
  }, L.genericPred(Wa)(L.genericEnumSum(L.genericEnumConstructor(L.genericEnumNoArguments))(I.genericTopConstructor(I.genericTopNoArguments))(L.genericEnumConstructor(L.genericEnumNoArguments))(I.genericBottomConstructor(I.genericBottomNoArguments))), L.genericSucc(Wa)(L.genericEnumSum(L.genericEnumConstructor(L.genericEnumNoArguments))(I.genericTopConstructor(I.genericTopNoArguments))(L.genericEnumConstructor(L.genericEnumNoArguments))(I.genericBottomConstructor(I.genericBottomNoArguments)))),
      kb = function kb(U) {
    return function (aa) {
      return aa instanceof x.Nothing ? "(None)" : Ta(U)(aa);
    };
  },
      Bb = new Ua(function (U) {
    return z.hush(N.readBoolean(U));
  }, kb(Y.showBoolean), Ta(Y.showBoolean)),
      m = new Ua(function () {
    var U = b.join(x.bindMaybe);
    return function (aa) {
      return U(z.hush(N.readInstitutionContactType(aa)));
    };
  }(), kb(ea.showInstitutionContactType), Ta(ea.showInstitutionContactType)),
      Za = new Ua(function () {
    var U = b.join(x.bindMaybe);
    return function (aa) {
      return U(z.hush(N.readPolicyType(aa)));
    };
  }(), kb(ea.showPolicyType), Ta(ea.showPolicyType)),
      eb = function eb(U) {
    return M.voidRight(l.widgetFunctor)(!U)(p.input(g.widgetLiftWidget)([k._type("checkbox"), k.checked(U), k.onChange]));
  },
      zb = function zb(U) {
    return e.step(U)(b.bind(l.widgetBind)(eb(U))(function (aa) {
      return r.pure(l.widgetApplicative)(zb(aa));
    }));
  },
      Hb = new D.Bounded(function () {
    return rb;
  }, I.genericBottom(Wa)(I.genericBottomSum(I.genericBottomConstructor(I.genericBottomNoArguments))), I.genericTop(Wa)(I.genericTopSum(I.genericTopConstructor(I.genericTopNoArguments)))),
      Ib = new u.BoundedEnum(function () {
    return Hb;
  }, function () {
    return sb;
  }, L.genericCardinality(Wa)(L.genericBoundedEnumSum(L.genericBoundedEnumConstructor(L.genericBoundedEnumNoArguments))(L.genericBoundedEnumConstructor(L.genericBoundedEnumNoArguments))), L.genericFromEnum(Wa)(L.genericBoundedEnumSum(L.genericBoundedEnumConstructor(L.genericBoundedEnumNoArguments))(L.genericBoundedEnumConstructor(L.genericBoundedEnumNoArguments))), L.genericToEnum(Wa)(L.genericBoundedEnumSum(L.genericBoundedEnumConstructor(L.genericBoundedEnumNoArguments))(L.genericBoundedEnumConstructor(L.genericBoundedEnumNoArguments)))),
      Jb = new y.Apply(function () {
    return Qa;
  }, function (U) {
    return function (aa) {
      if (U instanceof Ia && aa instanceof Ia || U instanceof Ia && aa instanceof Ra || U instanceof Ra && aa instanceof Ia) return Ia.create(y.apply(x.applyMaybe)(U.value0)(aa.value0));
      if (U instanceof Ra && aa instanceof Ra) return Ra.create(y.apply(x.applyMaybe)(U.value0)(aa.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 366, column 1 - line 370, column 63): " + [U.constructor.name, aa.constructor.name]);
    };
  }),
      Kb = new r.Applicative(function () {
    return Jb;
  }, function (U) {
    return Ia.create(new x.Just(U));
  }),
      Fb = function Fb(U) {
    return function (aa) {
      var Ka = da.snd(aa),
          Ca = da.fst(aa),
          Na = new Ia(x.Nothing.value);

      aa = function () {
        var S = R.max(R.ordInt)(0)(Ca - q.length(Ka) | 0);
        return P.append(P.semigroupArray)(M.map(M.functorArray)(r.pure(Kb))(Ka))(M.mapFlipped(M.functorArray)(mb(1)(S))(function (W) {
          return Na;
        }));
      }();

      var Va = function Va(S) {
        return e.step(S)(b.bind(l.widgetBind)(M.voidRight(l.widgetFunctor)(Ra.create(ab(S)))(p.button(l.widgetMultiAlternative(K.monoidArray))(l.widgetShiftMap)([k.onClick, ha.deleteItem])([p.text(g.widgetLiftWidget)("Delete")])))(function (W) {
          return r.pure(l.widgetApplicative)(Va(W));
        }));
      },
          Xa = function Xa(S) {
        return p.li_(h.shiftMapCofree(K.monoidArray))([])(b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(U(ab(S)))(function (W) {
          return b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(Va(new Ia(W)))(function (pa) {
            return r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(pa);
          });
        }));
      },
          Db = function Db(S) {
        if (S instanceof Ra) return e.step(new Ra(x.Nothing.value))(K.mempty(l.widgetMonoid(K.monoidArray)));
        if (S instanceof Ia) return Xa(S);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 397, column 23 - line 399, column 35): " + [S.constructor.name]);
      };

      return p.div_(h.shiftMapCofree(K.monoidArray))([])(b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(function (S) {
        return function (W) {
          return e.loopS(K.monoidArray)(new da.Tuple(S, W))(function (pa) {
            return p.ul_(h.shiftMapCofree(K.monoidArray))([])(function () {
              da.fst(pa);
              var ma = da.snd(pa);
              return b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(A.traverse(A.traversableArray)(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(Db)(ma))(function (sa) {
                return b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(e.step(0)(M.voidRight(l.widgetFunctor)(r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(1))(p.button(l.widgetMultiAlternative(K.monoidArray))(l.widgetShiftMap)([k.onClick, ha.addItem])([p.text(g.widgetLiftWidget)("Add item")]))))(function (ua) {
                  var Da = q.filter(ob)(sa),
                      Sa = q.length(Da) + ua | 0;
                  ua = M.mapFlipped(M.functorArray)(mb(1)(ua))(function (Oa) {
                    return Na;
                  });
                  return r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(da.Tuple.create(Sa)(P.append(P.semigroupArray)(Da)(ua)));
                });
              });
            }());
          });
        };
      }(Ca)(aa))(function (S) {
        return r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(v.second(v.strongFn)(function () {
          var W = M.map(M.functorArray)(ab);
          return function (pa) {
            return q.catMaybes(W(pa));
          };
        }())(S));
      }));
    };
  };

  c.menuSignal = qb;
  c.textInput = fb;

  c.dateInput = function (U) {
    var aa = qa.unsafePerformEffect(function (Na) {
      return function () {
        var Va = va.nowDateTime();
        Va = x.fromMaybe(Va)(z.hush(Na));
        Va = ta["try"](Z.dateTimeToStr(Va))();
        return t.lmap(z.bifunctorEither)(Y.show(ta.showError))(Va);
      };
    }(U));
    U = b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)));
    var Ka = r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)));
    if (aa instanceof z.Left) var Ca = "";else if (aa instanceof z.Right) Ca = za.toString(aa.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 170, column 31 - line 172, column 34): " + [aa.constructor.name]);
    return U(Ka(Ca))(function (Na) {
      var Va = b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray))),
          Xa = r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)));
      if (aa instanceof z.Left) var Db = aa.value0;else if (aa instanceof z.Right) Db = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 173, column 21 - line 175, column 18): " + [aa.constructor.name]);
      return Va(Xa(Db))(function (S) {
        return b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(p.div_(h.shiftMapCofree(K.monoidArray))([k._id("mjUI_dateInput")])(fb(za.fromString(Na))))(function (W) {
          return b.discard(b.discardUnit)(h.bindCofree(l.widgetAlternative(K.monoidArray)))(r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(qa.unsafePerformEffect(Ya("mjUI_dateInput")("INPUT")(Na))))(function () {
            return b.discard(b.discardUnit)(h.bindCofree(l.widgetAlternative(K.monoidArray)))(e.display(function () {
              if (aa instanceof z.Right) return K.mempty(l.widgetMonoid(K.monoidArray));
              if (aa instanceof z.Left) return hb(Y.showString)(new x.Just(aa.value0));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 179, column 13 - line 181, column 40): " + [aa.constructor.name]);
            }()))(function () {
              if (W instanceof x.Just) return r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(qa.unsafePerformEffect(M.map(ja.functorEffect)(t.lmap(z.bifunctorEither)(Y.show(ta.showError)))(ta["try"](N.parseDate(W.value0)))));
              if (W instanceof x.Nothing) return r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(new z.Left("no date input"));
              throw Error("Failed pattern match at Metajelo.FormUtil (line 182, column 3 - line 185, column 43): " + [W.constructor.name]);
            });
          });
        });
      });
    });
  };

  c.natInput = function (U) {
    U = b.bind(x.bindMaybe)(M.mapFlipped(x.functorMaybe)(U)(function () {
      var aa = Y.show(Y.showInt);
      return function (Ka) {
        return aa(F.natToInt(Ka));
      };
    }()))(za.fromString);
    return b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(fb(U))(function (aa) {
      return r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(M.map(x.functorMaybe)(function () {
        var Ka = Ha.readInt(10);
        return function (Ca) {
          return F.intToNat(H.round(Ka(za.toString(Ca))));
        };
      }())(aa));
    });
  };

  c.urlInput = function (U) {
    if (U instanceof z.Left) var aa = "";else if (U instanceof z.Right) aa = za.toString(oa.urlToNEString(U.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 218, column 15 - line 220, column 48): " + [U.constructor.name]);
    if (U instanceof z.Left) var Ka = U.value0;else if (U instanceof z.Right) Ka = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 214, column 15 - line 216, column 20): " + [U.constructor.name]);
    return b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(fb(za.fromString(aa)))(function (Ca) {
      var Na = b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray))),
          Va = r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)));
      if (Ca instanceof x.Nothing) Ca = new z.Left(Ka);else if (Ca instanceof x.Just) Ca = oa.parsePublicURL(za.toString(Ca.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 205, column 19 - line 207, column 46): " + [Ca.constructor.name]);
      return Na(Va(Ca))(function (Xa) {
        return b.discard(b.discardUnit)(h.bindCofree(l.widgetAlternative(K.monoidArray)))(e.display(function () {
          if (Xa instanceof z.Right) return K.mempty(l.widgetMonoid(K.monoidArray));
          if (Xa instanceof z.Left) return hb(Y.showString)(new x.Just(Xa.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 208, column 13 - line 210, column 40): " + [Xa.constructor.name]);
        }()))(function () {
          return r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(Xa);
        });
      });
    });
  };

  c.emailInput = function (U) {
    if (U instanceof z.Left) var aa = "";else if (U instanceof z.Right) aa = Ga.toString(U.value0);else throw Error("Failed pattern match at Metajelo.FormUtil (line 238, column 15 - line 240, column 33): " + [U.constructor.name]);
    if (U instanceof z.Left) var Ka = U.value0;else if (U instanceof z.Right) Ka = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 15 - line 236, column 20): " + [U.constructor.name]);
    return b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(fb(za.fromString(aa)))(function (Ca) {
      var Na = b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray))),
          Va = r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)));
      if (Ca instanceof x.Nothing) Ca = new z.Left(Ka);else if (Ca instanceof x.Just) Ca = Ea.validate(za.toString(Ca.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 225, column 21 - line 227, column 43): " + [Ca.constructor.name]);
      return Na(Va(Ca))(function (Xa) {
        return b.discard(b.discardUnit)(h.bindCofree(l.widgetAlternative(K.monoidArray)))(e.display(function () {
          if (Xa instanceof z.Right) return K.mempty(l.widgetMonoid(K.monoidArray));
          if (Xa instanceof z.Left) return hb(Y.showString)(new x.Just(Xa.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 228, column 13 - line 230, column 40): " + [Xa.constructor.name]);
        }()))(function () {
          return r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(Xa);
        });
      });
    });
  };

  c.checkBoxS = zb;
  c.showDescSig = jb;

  c.mkDesc = function (U) {
    return function (aa) {
      var Ka = gb(U)(tb),
          Ca = n.alt(l.widgetAlt(K.monoidArray))(p.text(g.widgetLiftWidget)(Ka))(p["code'"](l.widgetMultiAlternative(K.monoidArray))(l.widgetShiftMap)([p.text(g.widgetLiftWidget)(" ")]));
      return aa && !ra["null"](Ka) ? Ca : K.mempty(l.widgetMonoid(K.monoidArray));
    };
  };

  c.FreeTextPolicy = Ja;

  c.checkPolicy = function (U) {
    return function (aa) {
      if (U instanceof Ja) {
        var Ka = M.mapFlipped(z.functorEither);
        aa = za.fromString(ra.trim(aa));
        if (aa instanceof x.Just) aa = new z.Right(aa.value0);else if (aa instanceof x.Nothing) aa = new z.Left("Empty string when NonEmptyString expected.");else throw Error("Failed pattern match at Metajelo.FormUtil (line 438, column 22 - line 440, column 63): " + [aa.constructor.name]);
        return Ka(aa)(ea.FreeTextPolicy.create);
      }

      if (U instanceof La) return M.mapFlipped(z.functorEither)(oa.parsePublicURL(aa))(ea.RefPolicy.create);
      throw Error("Failed pattern match at Metajelo.FormUtil (line 348, column 25 - line 350, column 52): " + [U.constructor.name]);
    };
  };

  c.polPolTypeIs = function (U) {
    if (U instanceof ea.FreeTextPolicy) return Ja.value;
    if (U instanceof ea.RefPolicy) return La.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 353, column 18 - line 355, column 29): " + [U.constructor.name]);
  };

  c.arrayView = Fb;

  c.nonEmptyArrayView = function (U) {
    return function (aa) {
      return b.bind(h.bindCofree(l.widgetAlternative(K.monoidArray)))(Fb(U)(v.second(v.strongFn)(Ma(B.foldableMaybe)(x.functorMaybe)(K.monoidArray)(w.toArray))(aa)))(function (Ka) {
        return r.pure(h.applicativeCofree(l.widgetAlternative(K.monoidArray)))(v.second(v.strongFn)(w.fromArray)(Ka));
      });
    };
  };

  c.errorDisplay = hb;

  c.runEffectInit = function (U) {
    return function (aa) {
      return e.step(U)(b.bind(l.widgetBind)(Fa.liftEffect(l.widgetMonadEff(K.monoidArray))(aa))(function (Ka) {
        return r.pure(l.widgetApplicative)(e.step(Ka)(d.empty(l.widgetPlus(K.monoidArray))));
      }));
    };
  };

  c.evTargetElem = function (U) {
    return M.map(ja.functorEffect)(ya.fromNode)(T.target(U));
  };

  c.getInputTextLE = function (U) {
    return function (aa) {
      return Fa.liftEffect(U)(xb(aa));
    };
  };

  c.isOptionMaybeBoolean = Bb;
  c.isOptionIdentifierType = wb;
  c.isOptionInstitutionType = nb;
  c.isOptionMaybeInstitutionContactType = m;
  c.isOptionMaybePolicyType = Za;
  c.isOptionRelationType = vb;
  c.isOptionResourceTypeGeneral = ub;
  c.boundedEnumPolPolType = Ib;
  c.isOptionPolPolType = yb;
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
      y = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      h = a["Data.Foldable"],
      d = a["Data.Functor"],
      q = a["Data.HeytingAlgebra"],
      w = a["Data.Maybe"],
      t = a["Data.Monoid"],
      D = a["Data.Natural"],
      z = a["Data.Profunctor.Strong"],
      u = a["Data.Semigroup"],
      E = a["Data.Show"],
      B = a["Data.String.CodePoints"],
      M = a["Data.String.NonEmpty.Internal"],
      G = a["Data.String.Utils"],
      I = a["Data.Unfoldable"],
      L = a["Data.Unfoldable1"],
      J = a["DataCite.Types.Common"],
      V = a["Foreign.Object"],
      X = a["Metajelo.CSS.Common.ClassNames"],
      H = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      x = a["Metajelo.CSS.Web.ClassProps"],
      K = a["Metajelo.CSS.Web.Util"],
      F = a["Metajelo.Types"],
      R = a["Text.Email.Parser"],
      v = a["Text.URL.Validate"],
      P = function () {
    var N = d.map(d.functorArray)(B.singleton);
    return function (Z) {
      return N(B.toCodePointArray(Z));
    };
  }(),
      Y = function Y(N) {
    var Z = f.text(N);
    return function (T) {
      return Z(M.toString(T));
    };
  },
      ra = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)(" ")]),
      za = function () {
    var N = h.intercalate(h.foldableArray)(t.monoidArray)([ra]),
        Z = d.map(d.functorArray)(L.singleton(L.unfoldable1Array));
    return function (T) {
      return N(Z(T));
    };
  }(),
      Aa = function Aa(N) {
    return f.div(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.institutionPolicy])(za([function (Z) {
      var T = function () {
        if (Z instanceof w.Nothing) return {
          text: "May apply to product (unverified)",
          cls: H.appliesMaybe
        };
        if (Z instanceof w.Just && Z.value0) return {
          text: "Applies to product",
          cls: H.appliesYes
        };
        if (Z instanceof w.Just && !Z.value0) return {
          text: "Does not apply to product",
          cls: H.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 272, column 10 - line 275, column 75): " + [Z.constructor.name]);
      }();

      return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([K.cList([X.applies, T.cls])])([function (Ga) {
        return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.appliesInfo])([f.text(e.widgetLiftWidget)(Ga)]);
      }(T.text)]);
    }(N.appliesToProduct), h.foldMap(h.foldableMaybe)(g.widgetMonoid(t.monoidArray))(function (Z) {
      return f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.policyType])([f.text(e.widgetLiftWidget)(E.show(F.showPolicyType)(Z))]), f.text(e.widgetLiftWidget)(" Policy:")]);
    })(N.policyType), function (Z) {
      var T = f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.policy]),
          Ga = L.singleton(L.unfoldable1Array);
      if (Z instanceof F.FreeTextPolicy) Z = Y(e.widgetLiftWidget)(Z.value0);else if (Z instanceof F.RefPolicy) Z = v.urlToString(Z.value0), Z = f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([f.text(e.widgetLiftWidget)(Z)]);else throw Error("Failed pattern match at Metajelo.View (line 265, column 5 - line 268, column 40): " + [Z.constructor.name]);
      return T(Ga(Z));
    }(N.policy)]));
  },
      A = function A(N) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.institutionName])([Y(e.widgetLiftWidget)(N.institutionName)]);
  },
      da = function da(N) {
    return function (Z) {
      return h.foldMap(h.foldableMaybe)(t.monoidArray)(n.identity(n.categoryFn))(r.init(Z));
    };
  },
      ca = function ca(N) {
    return function (Z) {
      return function (T) {
        return function (Ga) {
          return function (Ea) {
            var oa = V.fromFoldableWith(N)(u.append(Ga)),
                O = d.map(Z)(z.fanout(n.categoryFn)(z.strongFn)(Ea)(L.singleton(T)));
            return function (ya) {
              return oa(O(ya));
            };
          };
        };
      };
    };
  },
      xa = function xa(N) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.basicMetadata, x.creatorList])(d.mapFlipped(d.functorArray)(y.toArray(N))(function (Z) {
      return f.span_(g.widgetShiftMap)([x.creator])(Y(e.widgetLiftWidget)(Z));
    }));
  },
      Q = function Q(N) {
    var Z = R.toString(N.emailAddress),
        T = f.text(e.widgetLiftWidget);
    if (N.contactType instanceof w.Nothing) N = ".";else if (N.contactType instanceof w.Just) N = " (" + (E.show(F.showInstitutionContactType)(N.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 199, column 24 - line 201, column 41): " + [N.contactType.constructor.name]);
    T = T(N);
    return f.span_(g.widgetShiftMap)([x.institutionContact])(p.alt(g.widgetAlt(t.monoidArray))(p.alt(g.widgetAlt(t.monoidArray))(f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)("Institution Contact: ")]))(f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.contactEmail, l.href("mailto:" + Z)])([f.text(e.widgetLiftWidget)(Z)])))(f.span_(g.widgetShiftMap)([x.contactType])(T)));
  },
      ja = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)(", ")]),
      Fa = function Fa(N) {
    return f.span_(g.widgetShiftMap)([x.formatList])(h.intercalate(h.foldableArray)(g.widgetMonoid(t.monoidArray))(ja)(d.mapFlipped(d.functorArray)(N)(function (Z) {
      return f.span_(g.widgetShiftMap)([x.format])(Y(e.widgetLiftWidget)(Z));
    })));
  },
      ta = function ta(N) {
    return f.span_(g.widgetShiftMap)([])(h.intercalate(h.foldableArray)(g.widgetMonoid(t.monoidArray))(ja)(d.mapFlipped(d.functorArray)(y.toArray(N))(function (Z) {
      return f.span_(g.widgetShiftMap)([x.title])(Y(e.widgetLiftWidget)(Z));
    })));
  },
      va = function va(N) {
    return f["cite'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([Y(e.widgetLiftWidget)(N)]);
  },
      qa = function qa(N) {
    if (N.identifierType instanceof J.ARK) return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(M.toString(N.identifier))])([va(N.identifier)]);

    if (N.identifierType instanceof J.ArXiv) {
      var Z = "https://arxiv.org/abs/" + M.toString(N.identifier);
      return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([va(N.identifier)]);
    }

    if (N.identifierType instanceof J.Bibcode) return Z = "https://ui.adsabs.harvard.edu/abs/" + (M.toString(N.identifier) + "/abstract"), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([va(N.identifier)]);
    if (N.identifierType instanceof J.DOI) return Z = "https://doi.org/" + M.toString(N.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([va(N.identifier)]);
    if (N.identifierType instanceof J.EAN13) return va(N.identifier);
    if (N.identifierType instanceof J.EISSN) return Z = "https://www.worldcat.org/ISSN/" + M.toString(N.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([va(N.identifier)]);
    if (N.identifierType instanceof J.Handle) return Z = "http://hdl.handle.net/" + M.toString(N.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([va(N.identifier)]);
    if (N.identifierType instanceof J.IGSN) return Z = "http://igsn.org/" + M.toString(N.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([va(N.identifier)]);
    if (N.identifierType instanceof J.ISBN) return va(N.identifier);
    if (N.identifierType instanceof J.ISSN) return Z = "https://www.worldcat.org/ISSN/" + M.toString(N.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([va(N.identifier)]);
    if (N.identifierType instanceof J.ISTC) return va(N.identifier);
    if (N.identifierType instanceof J.LISSN) return Z = "https://www.worldcat.org/ISSN/" + M.toString(N.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([va(N.identifier)]);
    if (N.identifierType instanceof J.LSID) return Z = "http://www.lsid.info/resolver/?lsid=" + M.toString(N.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([va(N.identifier)]);
    if (N.identifierType instanceof J.PMID) return Z = "https://www.ncbi.nlm.nih.gov/pubmed/" + M.toString(N.identifier), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(Z)])([va(N.identifier)]);
    if (N.identifierType instanceof J.PURL) return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(M.toString(N.identifier))])([va(N.identifier)]);
    if (N.identifierType instanceof J.UPC) return va(N.identifier);
    if (N.identifierType instanceof J.URL) return f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([l.href(M.toString(N.identifier))])([va(N.identifier)]);
    if (N.identifierType instanceof J.URN) return va(N.identifier);
    throw Error("Failed pattern match at Metajelo.View (line 221, column 1 - line 221, column 47): " + [N.constructor.name]);
  },
      Ba = function Ba(N) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.identifier])([f.span_(g.widgetShiftMap)([x.idType])(f.text(e.widgetLiftWidget)(E.show(J.showIdentifierType)(N.identifierType))), f.span_(g.widgetShiftMap)([x.idUrl])(qa(N))]);
  },
      Ha = function Ha(N) {
    return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.relatedId])([f.span_(g.widgetShiftMap)([x.relType])(f.text(e.widgetLiftWidget)(E.show(J.showRelationType)(N.relationType))), ra, Ba({
      identifier: N.identifier,
      identifierType: N.identifierType
    })]);
  },
      ha = function ha(N) {
    return function (Z) {
      return function (T) {
        if (Z) return N;

        if (h.any(h.foldableArray)(q.heytingAlgebraBoolean)(function (Ea) {
          return G.endsWith(Ea)(N);
        })([";", ".", ","])) {
          var Ga = P(N);
          return G.fromCharArray(da(t.monoidString)(Ga)) + T;
        }

        return N + T;
      };
    };
  },
      la = function la(N) {
    var Z = A(N),
        T = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)("("), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.institutionId])([Ba(N.institutionID)]), f.text(e.widgetLiftWidget)("; "), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.institutionType])([f.text(e.widgetLiftWidget)(E.show(F.showInstitutionType)(N.institutionType))]), f.text(e.widgetLiftWidget)(ha(")")(w.isNothing(N.superOrganizationName))(","))]);
    if (N.superOrganizationName instanceof w.Nothing) var Ga = t.mempty(g.widgetMonoid(t.monoidArray));else if (N.superOrganizationName instanceof w.Just) Ga = f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([f.text(e.widgetLiftWidget)("a member of "), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.superOrg])([f.text(e.widgetLiftWidget)(ha(M.toString(N.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 161, column 7 - line 167, column 10): " + [N.superOrganizationName.constructor.name]);
    return za([Z, T, Ga, Q(N.institutionContact), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.sustainability])([f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.missionStatement, l.href(v.urlToString(N.institutionSustainability.missionStatementURL))])([f.text(e.widgetLiftWidget)("Mission Statement")]), f.text(e.widgetLiftWidget)("; "), f.a(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.fundingStatement, l.href(v.urlToString(N.institutionSustainability.fundingStatementURL))])([f.text(e.widgetLiftWidget)("Funding Statement")]), f.text(e.widgetLiftWidget)(".")]), f.ul(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.institutionPolicies])(d.map(d.functorArray)(function (Ea) {
      return f["li'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([Aa(Ea)]);
    })(y.toArray(N.institutionPolicies))), function (Ea) {
      if (Ea) Ea = "Versioned";else {
        if (Ea) throw Error("Failed pattern match at Metajelo.View (line 188, column 14 - line 190, column 31): " + [Ea.constructor.name]);
        Ea = "Unversioned";
      }
      return f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.versioning])([f.text(e.widgetLiftWidget)(Ea)]);
    }(N.versioning)]);
  },
      ea = function ea(N) {
    if (N.resourceID instanceof w.Just) var Z = f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.resourceId])([Ba(N.resourceID.value0), f.text(e.widgetLiftWidget)(".")]);else if (N.resourceID instanceof w.Nothing) Z = t.mempty(g.widgetMonoid(t.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 127, column 17 - line 129, column 24): " + [N.resourceID.constructor.name]);
    var T = [xa(N.basicMetadata.creators), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.basicMetadata, x.pubyear])([f.text(e.widgetLiftWidget)(E.show(E.showInt)(D.natToInt(N.basicMetadata.publicationYear)))]), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.basicMetadata, x.title])([ta(N.basicMetadata.titles), f.text(e.widgetLiftWidget)(ha("")(w.isNothing(N.resourceID))(","))])];
    Z = u.append(u.semigroupArray)(T)([f["span'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([A(N.location), f.text(e.widgetLiftWidget)(".")]), Z]);
    return f.div(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.product])(za(u.append(u.semigroupArray)([f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.productCitation])([f["cite'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)(za(Z))])])(u.append(u.semigroupArray)([Fa(N.format)])(la(N.location)))));
  };

  c.spacify = za;

  c.mkRecordWidget = function (N) {
    var Z = function () {
      var Ea = d.map(b.functorNonEmptyArray)(function (oa) {
        return f.li(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.relatedId])([oa]);
      })(d.map(b.functorNonEmptyArray)(Ha)(N.relatedIdentifiers));
      return f.ul(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.relatedIdList])(y.toArray(Ea));
    }(),
        T = ca(b.foldableNonEmptyArray)(b.functorNonEmptyArray)(b.unfoldable1NonEmptyArray)(b.semigroupNonEmptyArray)(function (Ea) {
      return E.show(J.showResourceTypeGeneral)(Ea.resourceType.generalType) + (": " + Ea.resourceType.description);
    })(N.supplementaryProducts),
        Ga = function Ga(Ea) {
      Ea = k.join(k.bindArray)(I.fromMaybe(I.unfoldableArray)(d.map(w.functorMaybe)(y.toArray)(V.lookup(Ea)(T))));
      var oa = f.span_(g.widgetShiftMap)([x.resourceType])(h.fold(h.foldableMaybe)(g.widgetMonoid(t.monoidArray))(d.mapFlipped(w.functorMaybe)(r.head(Ea))(function (O) {
        return p.alt(g.widgetAlt(t.monoidArray))(p.alt(g.widgetAlt(t.monoidArray))(f.span_(g.widgetShiftMap)([x.resourceTypeGen])(f.text(e.widgetLiftWidget)(E.show(J.showResourceTypeGeneral)(O.resourceType.generalType))))(f.span_(g.widgetShiftMap)([x.resourceTypeDescr])(f.text(e.widgetLiftWidget)(O.resourceType.description))))(f["br'"](e.widgetLiftWidget));
      })));
      return f["div'"](g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)(r.cons(oa)(d.map(d.functorArray)(ea)(Ea)));
    };

    E.show(J.showIdentifierType)(N.identifier.identifierType);
    return f.div(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.record])([f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.productsHeader])([f.span_(g.widgetShiftMap)([x.recordId])(Ba(N.identifier))]), f.ul(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.productList])(d.map(d.functorArray)(function (Ea) {
      return f.li_(g.widgetShiftMap)([x.productGroup])(Ga(Ea));
    })(V.keys(T))), f.span(g.widgetMultiAlternative(t.monoidArray))(g.widgetShiftMap)([x.relatedIdsHeader])([]), Z]);
  };

  c.mkSupplementaryProductWidget = ea;
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
        var y = f.reflectSymbol(k)(f.SProxy.value);
        return new e.Cons(y, r);
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
      y = a["Data.Symbol"],
      b = a["Foreign.Object"],
      h = a.Record,
      d = a["Record.Extra"],
      q = a["Type.Data.Row"],
      w = function () {
    function H() {}

    H.value = new H();
    return H;
  }(),
      t = function t(H) {
    this.getAllOption = H;
  },
      D = function D(H) {
    this["getAll'"] = H;
  },
      z = function z(H) {
    this.fromRecordOption = H;
  },
      u = function u(H) {
    this["fromRecord'"] = H;
  },
      E = function E(H) {
    return function (x) {
      return function (K) {
        K = l.fromFoldable(n.foldableList)(d.keys()(K)(q.RProxy.value));
        return p.runFn2(e.pickFn)(K);
      };
    };
  };

  a = new t(function (H) {
    return function (x) {
      return new r.Just({});
    };
  });

  var B = b.empty,
      M = new z(function (H) {
    return function (x) {
      return B;
    };
  }),
      G = function G(H) {
    return function (x) {
      return function (K) {
        return function (F) {
          var R = y.reflectSymbol(H)(y.SProxy.value),
              v = b.alter(function (P) {
            return x(P);
          })(R)(F);
          F = x(b.lookup(R)(F));
          return {
            option: v,
            value: F
          };
        };
      };
    };
  },
      I = function I(H) {
    return function (x) {
      return function (K) {
        return function (F) {
          return function (R) {
            return G(H)(function (v) {
              return r.Nothing.value;
            })(F)(R).option;
          };
        };
      };
    };
  },
      L = function L(H) {
    return function (x) {
      return function (K) {
        return function (F) {
          return G(H)(function (R) {
            return R;
          })(K)(F).value;
        };
      };
    };
  },
      J = function J(H) {
    return function (x) {
      return function (K) {
        return function (F) {
          return function (R) {
            return G(H)(function (v) {
              return new r.Just(F);
            })(K)(R).option;
          };
        };
      };
    };
  },
      V = function V(H) {
    return function (x) {
      return function (K) {
        return function (F) {
          return function (R) {
            if (F instanceof r.Just) return J(H)()(K)(F.value0)(R);
            if (F instanceof r.Nothing) return R;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [F.constructor.name]);
          };
        };
      };
    };
  },
      X = function X(H) {
    return function (x) {
      return function (K) {
        return function (F) {
          return function (R) {
            return function (v) {
              return G(H)(function (P) {
                return new r.Just(R);
              })(F)(v).option;
            };
          };
        };
      };
    };
  };

  c.fromRecord = function (H) {
    return H["fromRecord'"];
  };

  c.empty = B;
  c.get = L;

  c.getAll = function (H) {
    return H["getAll'"];
  };

  c.getSubset = function (H) {
    return function (x) {
      return function (K) {
        return function (F) {
          return function (R) {
            return (0, F["getAll'"])(E()()(K)(R));
          };
        };
      };
    };
  };

  c.getWithDefault = function (H) {
    return function (x) {
      return function (K) {
        return function (F) {
          return function (R) {
            R = L(H)()(F)(R);
            if (R instanceof r.Just) return R.value0;
            if (R instanceof r.Nothing) return K;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [R.constructor.name]);
          };
        };
      };
    };
  };

  c.maySetOptState = function (H) {
    return function (x) {
      return function (K) {
        return function (F) {
          return function (R) {
            return g.put(f.monadStateStateT(k.monadIdentity))(V(H)()(K)(F)(R));
          };
        };
      };
    };
  };

  c.fromRecordAny = function (H) {
    return function (x) {
      return new u((0, H.fromRecordOption)(w.value));
    };
  };

  c.fromRecordOptionNil = M;

  c.fromRecordOptionCons = function (H) {
    return function (x) {
      return function (K) {
        return function (F) {
          return function (R) {
            return function (v) {
              return new z(function (P) {
                return function (Y) {
                  var ra = h["delete"](H)()()(y.SProxy.value)(Y);
                  ra = (0, x.fromRecordOption)(w.value)(ra);
                  Y = h.get(H)()(y.SProxy.value)(Y);
                  return X(H)()()(y.SProxy.value)(Y)(ra);
                };
              });
            };
          };
        };
      };
    };
  };

  c.getAllAny = function (H) {
    return function (x) {
      return new D((0, x.getAllOption)(w.value));
    };
  };

  c.getAllOptionNil = a;

  c.getAllOptionCons = function (H) {
    return function (x) {
      return function (K) {
        return function (F) {
          return function (R) {
            return function (v) {
              return new t(function (P) {
                return function (Y) {
                  var ra = I(H)()()(y.SProxy.value)(Y);
                  ra = (0, v.getAllOption)(w.value)(ra);
                  Y = L(H)()(y.SProxy.value)(Y);

                  if (ra instanceof r.Just) {
                    if (Y instanceof r.Just) return new r.Just(h.insert(H)()()(y.SProxy.value)(Y.value0)(ra.value0));
                    if (Y instanceof r.Nothing) return r.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [Y.constructor.name]);
                  }

                  if (ra instanceof r.Nothing) return r.Nothing.value;
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
      y = a["Web.Event.EventTarget"],
      b = a["Web.File.FileReader"],
      h = a["Web.HTML.Event.EventTypes"];

  a = function (d) {
    return function (q) {
      return function (w) {
        return k.makeAff(function (t) {
          var D = function D(z) {
            return t(g.Right.create(z));
          };

          return function () {
            var z = b.fileReader(),
                u = b.toEventTarget(z),
                E = y.eventListener(function (M) {
              return t(g.Left.create(n.error("error")));
            })(),
                B = y.eventListener(function (M) {
              return function () {
                var G = b.result(z)();
                return g.either(function (I) {
                  return t(g.Left.create(n.error(p.show(f.showNonEmptyList(r.showForeignError))(I))));
                })(D)(e.runExcept(d(G)))();
              };
            })();
            y.addEventListener(h.error)(E)(!1)(u)();
            y.addEventListener(h.load)(B)(!1)(u)();
            q(w)(z)();
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
      y = a["Concur.React.Run"],
      b = a["Control.Applicative"],
      h = a["Control.Apply"],
      d = a["Control.Bind"],
      q = a["Control.Cofree"],
      w = a["Control.Monad.Except.Trans"],
      t = a["Control.Monad.Maybe.Trans"],
      D = a["Control.Monad.State"],
      z = a["Control.Monad.State.Class"],
      u = a["Control.Monad.State.Trans"],
      E = a["Control.Monad.Writer"],
      B = a["Control.Plus"],
      M = a["Data.Array"],
      G = a["Data.Array.NonEmpty"],
      I = a["Data.Array.NonEmpty.Internal"],
      L = a["Data.Bifunctor"],
      J = a["Data.Either"],
      V = a["Data.Enum"],
      X = a["Data.Foldable"],
      H = a["Data.Functor"],
      x = a["Data.Identity"],
      K = a["Data.List.NonEmpty"],
      F = a["Data.Maybe"],
      R = a["Data.Maybe.First"],
      v = a["Data.Monoid"],
      P = a["Data.Newtype"],
      Y = a["Data.Semigroup"],
      ra = a["Data.Show"],
      za = a["Data.String.Common"],
      Aa = a["Data.String.NonEmpty.Internal"],
      A = a["Data.Symbol"],
      da = a["Data.Traversable"],
      ca = a["Data.Tuple"],
      xa = a["Data.UUID"],
      Q = a["Data.Unfoldable"],
      ja = a["Data.Unit"],
      Fa = a["Data.Void"],
      ta = a["DataCite.JSON.Decode.Simple"],
      va = a["DataCite.Types.Common"],
      qa = a.Effect,
      Ba = a["Effect.Aff.Class"],
      Ha = a["Effect.Class"],
      ha = a["Effect.Class.Console"],
      la = a["Effect.Exception"],
      ea = a["Effect.Now"],
      N = a["Effect.Unsafe"],
      Z = a.Global,
      T = a["Metajelo.CSS.UI.ClassProps"],
      Ga = a["Metajelo.CSS.UI.Util"],
      Ea = a["Metajelo.CSS.Web.ClassProps"],
      oa = a["Metajelo.FormUtil"],
      O = a["Metajelo.Types"],
      ya = a["Metajelo.View"],
      ba = a["Metajelo.XPaths"],
      na = a["Metajelo.XPaths.Read"],
      fa = a["Metajelo.XPaths.Write"],
      ka = a["Nonbili.DOM"],
      C = a.Option,
      ia = a["Record.Extra"],
      wa = a["Text.URL.Validate"],
      Ja = a["Web.DOM.Document"],
      La = a["Web.DOM.Element"],
      Ia = a["Web.File.File"],
      Ra = a["Web.File.FileList"],
      Ua = a["Web.File.FileReader.Aff"],
      $a = a["Web.HTML"],
      ab = a["Web.HTML.HTMLDocument"],
      cb = a["Web.HTML.HTMLElement"],
      db = a["Web.HTML.HTMLInputElement"],
      gb = a["Web.HTML.Window"],
      bb = function bb(S) {
    return function (W) {
      return function (pa) {
        return function (ma) {
          return function (sa) {
            return H.mapFlipped(F.functorMaybe)(C.get(S)(W)(pa)(ma))(function (ua) {
              return D.execState(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                return "descs_on";
              }))()(A.SProxy.value)(new F.Just(sa))))(ua);
            });
          };
        };
      };
    };
  },
      jb = function jb(S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.title])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.titleHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      return oa.textInput(S);
    }));
  },
      Ya = function Ya(S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.titleList])(oa.nonEmptyArrayView(jb)(S));
  },
      mb = function mb(S) {
    return function () {
      var W = $a.window();
      W = gb.document(W)();
      W = ab.toDocument(W);
      W = Ja.createElement("a")(W)();
      La.setAttribute("download")("metajelo.xml")(W)();
      La.setAttribute("href")("data:text/plain;charset=utf-8," + S)(W)();
      W = cb.fromElement(W);
      if (W instanceof F.Just) W = cb.click(W.value0);else if (W instanceof F.Nothing) W = ha.log(Ha.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + S);else throw Error("Failed pattern match at Metajelo.UI (line 131, column 26 - line 135, column 18): " + [W.constructor.name]);
      return W;
    };
  },
      Pa = function Pa(S) {
    return function (W) {
      return C.getWithDefault(S)()(C.empty);
    };
  },
      tb = function tb(S) {
    var W = Aa.fromString("urn:uuid:"),
        pa = C.get(new A.IsSymbol(function () {
      return "identifier";
    }))()(A.SProxy.value)(S);
    return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(function () {
      if (pa instanceof F.Just) return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(new F.Just(pa.value0));
      if (pa instanceof F.Nothing) return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(oa.runEffectInit(xa.emptyUUID)(xa.genUUID))(function (ma) {
        return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(d.bind(F.bindMaybe)(W)(function (sa) {
          return d.bind(F.bindMaybe)(Aa.fromString(xa.toString(ma)))(function (ua) {
            return b.pure(F.applicativeMaybe)(Y.append(Aa.semigroupNonEmptyString)(sa)(ua));
          });
        }));
      });
      throw Error("Failed pattern match at Metajelo.UI (line 762, column 15 - line 769, column 30): " + [pa.constructor.name]);
    }())(function (ma) {
      return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "identifier";
      }))()(A.SProxy.value)(ma)))(function () {
        return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
          return "identifierType";
        }))()(A.SProxy.value)(new F.Just(va.URN.value)));
      }))(S));
    });
  },
      Ta = function Ta(S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.format])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.formatHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      return oa.textInput(S);
    }));
  },
      ub = function ub(S) {
    return function (W) {
      return n.div_(q.shiftMapCofree(v.monoidArray))([T.formatList])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.formatListHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
        return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("formatEle")(S)))(function () {
          return oa.arrayView(Ta)(W);
        });
      }));
    };
  },
      vb = function vb(S) {
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
      nb = function nb(S) {
    return function (W) {
      var pa = H.map(I.functorNonEmptyArray)(function (Oa) {
        return Oa.title;
      })(W.data.attributes.titles),
          ma = H.map(I.functorNonEmptyArray)(function (Oa) {
        return Oa.name;
      })(W.data.attributes.creators);
      W = Pa(new A.IsSymbol(function () {
        return "basicMetadata_opt";
      }))()(A.SProxy.value)(S);
      var sa = C.get(new A.IsSymbol(function () {
        return "creators";
      }))()(A.SProxy.value)(W),
          ua = F.maybe(ma)(function (Oa) {
        return Y.append(I.semigroupNonEmptyArray)(Oa)(ma);
      })(sa);
      sa = C.get(new A.IsSymbol(function () {
        return "titles";
      }))()(A.SProxy.value)(W);
      sa = F.maybe(pa)(function (Oa) {
        return Y.append(I.semigroupNonEmptyArray)(Oa)(pa);
      })(sa);
      var Da = G.length(sa),
          Sa = G.length(ua);
      W = D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "titles";
      }))()(A.SProxy.value)(new F.Just(sa))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
          return "_numTitles";
        }))()(A.SProxy.value)(new F.Just(Da))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "creators";
          }))()(A.SProxy.value)(new F.Just(ua))))(function () {
            return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
              return "_numCreators";
            }))()(A.SProxy.value)(new F.Just(Sa)));
          });
        });
      }))(W);
      return D.execState(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "basicMetadata_opt";
      }))()(A.SProxy.value)(new F.Just(W))))(S);
    };
  },
      wb = function wb(S) {
    var W = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "fundingStatementURL";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "missionStatementURL";
    }))(C.fromRecordOptionNil)()()()())()()()())())(S),
        pa = new J.Right(S.missionStatementURL),
        ma = new J.Right(S.fundingStatementURL);
    return D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(A.SProxy.value)(new F.Just(pa))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(A.SProxy.value)(new F.Just(ma))))(function () {
        return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
          return "descs_on";
        }))()(A.SProxy.value)(new F.Just(!0)));
      });
    }))(W);
  },
      ob = function ob(S) {
    var W = new J.Right(S.url);
    S = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "relationType";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "url";
    }))(C.fromRecordOptionNil)()()()())()()()())())(S);
    return D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
      return "url_Ei";
    }))()(A.SProxy.value)(new F.Just(W))))(function () {
      return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "descs_on";
      }))()(A.SProxy.value)(new F.Just(!0)));
    }))(S);
  },
      xb = function xb(S) {
    if (S.policy instanceof O.FreeTextPolicy) var W = new F.Just(S.policy.value0);else if (S.policy instanceof O.RefPolicy) W = Aa.fromString(wa.urlToString(S.policy.value0));else throw Error("Failed pattern match at Metajelo.UI (line 461, column 20 - line 463, column 54): " + [S.policy.constructor.name]);
    var pa = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "appliesToProduct";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "policy";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "policyType";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())())(S);
    return D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
      return "policy_str";
    }))()(A.SProxy.value)(W)))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "polPolType";
      }))()(A.SProxy.value)(F.Just.create(oa.polPolTypeIs(S.policy)))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
          return "policy_ei";
        }))()(A.SProxy.value)(F.Just.create(new J.Right(S.policy)))))(function () {
          return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "descs_on";
          }))()(A.SProxy.value)(new F.Just(!0)));
        });
      });
    }))(pa);
  },
      Wa = function Wa(S) {
    return D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
      return "email_Ei";
    }))()(A.SProxy.value)(F.Just.create(new J.Right(S.emailAddress)))))(function () {
      return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "descs_on";
      }))()(A.SProxy.value)(new F.Just(!0)));
    }))(C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "contactType";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "emailAddress";
    }))(C.fromRecordOptionNil)()()()())()()()())())(S));
  },
      pb = function pb(S) {
    var W = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "institutionContact";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "institutionID";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "institutionName";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "institutionPolicies";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "institutionSustainability";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "institutionType";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "superOrganizationName";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "versioning";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(S),
        pa = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "identifier";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "identifierType";
    }))(C.fromRecordOptionNil)()()()())()()()())())(S.institutionID),
        ma = Wa(S.institutionContact),
        sa = wb(S.institutionSustainability),
        ua = H.map(I.functorNonEmptyArray)(xb)(S.institutionPolicies),
        Da = G.length(S.institutionPolicies);
    return D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
      return "institutionID_opt";
    }))()(A.SProxy.value)(new F.Just(pa))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "_numPolicies";
      }))()(A.SProxy.value)(new F.Just(Da))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
          return "iSustain_opt";
        }))()(A.SProxy.value)(new F.Just(sa))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "institutionContact_opt";
          }))()(A.SProxy.value)(new F.Just(ma))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
              return "institutionPolicies_opt";
            }))()(A.SProxy.value)(new F.Just(ua))))(function () {
              return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                return "descs_on";
              }))()(A.SProxy.value)(new F.Just(!0)));
            });
          });
        });
      });
    }))(W);
  },
      yb = function yb(S) {
    var W = G.length(S.titles),
        pa = G.length(S.creators);
    return D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
      return "_numTitles";
    }))()(A.SProxy.value)(new F.Just(W))))(function () {
      return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "_numCreators";
      }))()(A.SProxy.value)(new F.Just(pa)));
    }))(C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "creators";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "publicationYear";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "titles";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())())(S));
  },
      Qa = function Qa(S) {
    var W = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "basicMetadata";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "format";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "location";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "resourceID";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "resourceType";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(S),
        pa = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "description";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "generalType";
    }))(C.fromRecordOptionNil)()()()())()()()())())(S.resourceType),
        ma = H.map(F.functorMaybe)(C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "identifier";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "identifierType";
    }))(C.fromRecordOptionNil)()()()())()()()())()))(S.resourceID),
        sa = H.map(F.functorMaybe)(ob)(S.resourceMetadataSource),
        ua = pb(S.location),
        Da = yb(S.basicMetadata),
        Sa = M.length(S.format);
    return D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(A.SProxy.value)(new F.Just(Da))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "resourceID_opt";
      }))()(A.SProxy.value)(ma)))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
          return "resourceType_opt";
        }))()(A.SProxy.value)(new F.Just(pa))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "_numFormats";
          }))()(A.SProxy.value)(new F.Just(Sa))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(A.SProxy.value)(sa)))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(A.SProxy.value)(new F.Just(ua))))(function () {
                return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                  return "descs_on";
                }))()(A.SProxy.value)(new F.Just(!0)));
              });
            });
          });
        });
      });
    }))(W);
  },
      qb = function qb(S) {
    var W = H.map(I.functorNonEmptyArray)(Qa)(S.supplementaryProducts),
        pa = H.map(I.functorNonEmptyArray)(C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "identifier";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "identifierType";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "relationType";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())()))(S.relatedIdentifiers),
        ma = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "date";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "identifier";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "lastModified";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "supplementaryProducts";
    }))(C.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(S),
        sa = C.fromRecord(C.fromRecordAny(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "identifier";
    }))(C.fromRecordOptionCons(new A.IsSymbol(function () {
      return "identifierType";
    }))(C.fromRecordOptionNil)()()()())()()()())())(S.identifier),
        ua = G.length(S.supplementaryProducts),
        Da = G.length(S.relatedIdentifiers);
    return D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
      return "identifier_opt";
    }))()(A.SProxy.value)(new F.Just(sa))))(function () {
      return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
        return "date_Ei";
      }))()(A.SProxy.value)(F.Just.create(new J.Right(S.date)))))(function () {
        return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
          return "_numRelIds";
        }))()(A.SProxy.value)(new F.Just(Da))))(function () {
          return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "relId_opts";
          }))()(A.SProxy.value)(new F.Just(pa))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
              return "_numSupProds";
            }))()(A.SProxy.value)(new F.Just(ua))))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                return "supProd_opts";
              }))()(A.SProxy.value)(new F.Just(W))))(function () {
                return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                  return "descs_on";
                }))()(A.SProxy.value)(new F.Just(!0)));
              });
            });
          });
        });
      });
    }))(ma);
  },
      Ma = function () {
    var S = L.lmap(J.bifunctorEither)(function (pa) {
      return la.error("Error reading XML - please make sure it is well-formed.");
    }),
        W = d.bind(k.widgetBind)(n.span(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([])([n.div_(k.widgetShiftMap)([T.uploadDescr])(B.empty(k.widgetPlus(v.monoidArray))), n.input(l.widgetLiftWidget)([r._type("file"), H.map(p.functorProps)(oa.evTargetElem)(r.onChange)])]))(function (pa) {
      return d.bind(k.widgetBind)(Ha.liftEffect(k.widgetMonadEff(v.monoidArray))(t.runMaybeT(d.bind(t.bindMaybeT(qa.monadEffect))(pa)(function (ma) {
        return d.bind(t.bindMaybeT(qa.monadEffect))(t.MaybeT(b.pure(qa.applicativeEffect)(db.fromElement(ma))))(function (sa) {
          return d.bind(t.bindMaybeT(qa.monadEffect))(t.MaybeT(db.files(sa)))(function (ua) {
            return d.bind(t.bindMaybeT(qa.monadEffect))(t.MaybeT(b.pure(qa.applicativeEffect)(Ra.item(0)(ua))))(function (Da) {
              return b.pure(t.applicativeMaybeT(qa.monadEffect))(Ia.toBlob(Da));
            });
          });
        });
      }))))(function (ma) {
        if (ma instanceof F.Nothing) return W;
        if (ma instanceof F.Just) return d.bind(k.widgetBind)(Ba.liftAff(k.widgetMonadAff(v.monoidArray))(Ua.readAsText(ma.value0)))(function (sa) {
          return d.bind(k.widgetBind)(Ha.liftEffect(k.widgetMonadEff(v.monoidArray))(w.runExceptT(d.bind(w.bindExceptT(qa.monadEffect))(w.ExceptT(H.map(qa.functorEffect)(S)(la["try"](ba.getDefaultParseEnv(sa)))))(function (ua) {
            return w.ExceptT(la["try"](na.readRecord(ua)));
          }))))(function (ua) {
            if (ua instanceof J.Right) return b.pure(k.widgetApplicative)(ua.value0);

            if (ua instanceof J.Left) {
              var Da = ua.value0;
              ua = n.div(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([]);
              var Sa = W,
                  Oa = n.div_(k.widgetShiftMap)([Ea.errorDisplayBox]),
                  ib = n.div_(k.widgetShiftMap)([]),
                  lb = n.span(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([Ea.errorDisplay]),
                  Eb = n.text(l.widgetLiftWidget);
              Da = "Couldn't decode MetajeloXML: " + ra.show(la.showError)(Da);
              return ua([Sa, Oa(ib(lb([Eb(Da)])))]);
            }

            throw Error("Failed pattern match at Metajelo.UI (line 163, column 11 - line 165, column 37): " + [ua.constructor.name]);
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 156, column 7 - line 165, column 37): " + [ma.constructor.name]);
      });
    });
    return f.loopW(C.empty)(function (pa) {
      return n.div_(k.widgetShiftMap)([])(d.bind(k.widgetBind)(W)(function (ma) {
        return b.pure(k.widgetApplicative)(qb(ma));
      }));
    });
  }(),
      fb = function fb(S) {
    var W = n.div_(k.widgetShiftMap)([Ea.errorDisplayBox])(n.div_(k.widgetShiftMap)([])(n.span(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([Ea.errorDisplay])([n.text(l.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        pa = function pa(ma) {
      return function (sa) {
        var ua = function ua(Da) {
          return f.step(Da)(d.bind(k.widgetBind)(n.button_(k.widgetShiftMap)([T.downloadBtn, r.onClick, r.disabled(za["null"](Da))])(n.text(l.widgetLiftWidget)("Download XML")))(function () {
            return d.bind(k.widgetBind)(Ha.liftEffect(k.widgetMonadEff(v.monoidArray))(ma))(function () {
              return b.pure(k.widgetApplicative)(ua(Da));
            });
          }));
        };

        return f.dyn(ua(sa));
      };
    };

    return n.div_(k.widgetShiftMap)([])(function () {
      var ma = Z.encodeURIComponent(S);
      return d.bind(k.widgetBind)(Ha.liftEffect(k.widgetMonadEff(v.monoidArray))(mb(F.fromMaybe("")(ma))))(function (sa) {
        return F.maybe(W)(pa(sa))(ma);
      });
    }());
  },
      hb = function () {
    var S = Ga.mjUiClassPfx + "dataCiteDOI_Input",
        W = function W(ma) {
      var sa = n.div(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([]),
          ua = pa,
          Da = n.div_(k.widgetShiftMap)([Ea.errorDisplayBox]),
          Sa = n.div_(k.widgetShiftMap)([]),
          Oa = n.span(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([Ea.errorDisplay]),
          ib = n.text(l.widgetLiftWidget);
      ma = "In DataCite retrieval: " + ra.show(la.showError)(ma);
      return sa([ua, Da(Sa(Oa([ib(ma)])))]);
    },
        pa = n.div_(k.widgetShiftMap)([])(d.discard(d.discardUnit)(k.widgetBind)(H["void"](k.widgetFunctor)(n.button_(k.widgetShiftMap)([r.onClick])(n.text(l.widgetLiftWidget)("Retrieve DataCite Record"))))(function () {
      return d.bind(k.widgetBind)(n.span(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([])([n.input(l.widgetLiftWidget)([r._id(S), r.placeholder("Input DOI here")]), h.applySecond(k.widgetApply)(n.button_(k.widgetShiftMap)([r.onClick])(n.text(l.widgetLiftWidget)("Retrieve")))(oa.getInputTextLE(k.widgetMonadEff(v.monoidArray))(S)), H.voidRight(k.widgetFunctor)(F.Nothing.value)(n.button_(k.widgetShiftMap)([r.onClick])(n.text(l.widgetLiftWidget)("Cancel")))]))(function (ma) {
        if (ma instanceof F.Nothing) return pa;

        if (ma instanceof F.Just) {
          ma = wa.parsePublicURL("https://api.datacite.org/dois/" + ma.value0);
          if (ma instanceof J.Left) return W(la.error(ma.value0));
          if (ma instanceof J.Right) return d.bind(k.widgetBind)(Ba.liftAff(k.widgetMonadAff(v.monoidArray))(e.get(g.string)(wa.urlToString(ma.value0))))(function (sa) {
            if (sa instanceof J.Left) sa = W(la.error("GET /api response failed to decode: " + e.printError(sa.value0)));else if (sa instanceof J.Right) sa = b.pure(k.widgetApplicative)(F.Just.create(ta.readRecordJSON(sa.value0.body)));else throw Error("Failed pattern match at Metajelo.UI (line 207, column 27 - line 210, column 67): " + [sa.constructor.name]);
            return sa;
          });
          throw Error("Failed pattern match at Metajelo.UI (line 200, column 21 - line 204, column 32): " + [ma.constructor.name]);
        }

        throw Error("Failed pattern match at Metajelo.UI (line 198, column 7 - line 204, column 32): " + [ma.constructor.name]);
      });
    }));

    return f.loopW(F.Nothing.value)(function (ma) {
      return n.div_(k.widgetShiftMap)([])(pa);
    });
  }(),
      Ab = function Ab(S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.creator])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.creatorHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      return oa.textInput(S);
    }));
  },
      rb = function rb(S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.creatorList])(oa.nonEmptyArrayView(Ab)(S));
  },
      sb = function sb(S) {
    return function (W) {
      var pa = H.map(H.functorArray)(function (ua) {
        return ua.tab;
      })(S),
          ma = H.map(H.functorArray)(function (ua) {
        return ua.page;
      })(S),
          sa = n["div'"](k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([n.text(l.widgetLiftWidget)("No pages to show!")]);
      return d.bind(k.widgetBind)(function (ua) {
        return function (Da) {
          return function (Sa) {
            return n.div(ua)(Da)([T.sideBarGrid])([n.div(ua)(Da)([T.sideBarMenu])([n.div(ua)(Da)([T.sideBarCol])(Sa)])]);
          };
        };
      }(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([n.nav(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([T.sideBarNav])(function (ua) {
        return H.map(H.functorArray)(function (Da) {
          return d.discard(d.discardUnit)(k.widgetBind)(H["void"](k.widgetFunctor)(n.div(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([r.onClick, T.sideBarTab])([H.map(k.widgetFunctor)(Fa.absurd)(ca.snd(Da))])))(function () {
            return b.pure(k.widgetApplicative)(ca.fst(Da));
          });
        })(M.zip(M.range(0)(M.length(ua)))(ua));
      }(pa)), H.voidRight(k.widgetFunctor)(W)(function (ua) {
        return F.fromMaybe(sa)(M.index(ma)(ua));
      }(W))]))(function (ua) {
        return sb(S)(ua);
      });
    };
  },
      kb = function kb(S) {
    var W = function W(pa) {
      return f.step(pa)(d.bind(k.widgetBind)(n.button_(k.widgetShiftMap)([T.clipBtn, r.onClick, r.disabled(za["null"](pa))])(n.text(l.widgetLiftWidget)("Copy XML to Clipboard")))(function () {
        return d.bind(k.widgetBind)(Ha.liftEffect(k.widgetMonadEff(v.monoidArray))(ka.copyToClipboard(pa)))(function () {
          return b.pure(k.widgetApplicative)(W(pa));
        });
      }));
    };

    return f.dyn(W(S));
  },
      Bb = function Bb(S) {
    var W = function W(pa) {
      return F.maybe(b.pure(qa.applicativeEffect)(""))(fa.recordToString)(pa);
    };

    return d.bind(k.widgetBind)(Ha.liftEffect(k.widgetMonadEff(v.monoidArray))(da.sequence(da.traversableMaybe)(qa.applicativeEffect)(H.map(F.functorMaybe)(vb)(S))))(function (pa) {
      return n.div(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([T.recPreview])([n.div_(k.widgetShiftMap)([T.recPreviewHeader])(B.empty(k.widgetPlus(v.monoidArray))), d.bind(k.widgetBind)(Ha.liftEffect(k.widgetMonadEff(v.monoidArray))(W(pa)))(function (ma) {
        return n.div(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([T.previewButtons])([fb(ma), kb(ma)]);
      }), n["br'"](l.widgetLiftWidget), X.fold(X.foldableMaybe)(k.widgetMonoid(v.monoidArray))(H.map(F.functorMaybe)(ya.mkRecordWidget)(pa))]);
    });
  },
      m = function m(S) {
    return function (W) {
      return function (pa) {
        pa = {
          tab: n.text(l.widgetLiftWidget)("Preview"),
          page: Bb(S)
        };
        var ma = {
          tab: n.text(l.widgetLiftWidget)("DataCite Retrieval"),
          page: n.text(l.widgetLiftWidget)("TODO")
        };
        return sb([pa, ma])(0);
      };
    };
  },
      Za = function Za(S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.sustainability])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.sustainabilityHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.span_(q.shiftMapCofree(v.monoidArray))([T.missionStatement])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.missionStatementHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
        return oa.urlInput(C.getWithDefault(new A.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(new J.Left(""))(A.SProxy.value)(S));
      })))(function (W) {
        var pa = J.hush(W);
        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.span_(q.shiftMapCofree(v.monoidArray))([T.fundingStatement])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.fundingStatementHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
          return oa.urlInput(C.getWithDefault(new A.IsSymbol(function () {
            return "fundingUrl_Ei";
          }))()(new J.Left(""))(A.SProxy.value)(S));
        })))(function (ma) {
          var sa = J.hush(ma);
          return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "missionUrl_Ei";
          }))()(A.SProxy.value)(new F.Just(W))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
              return "missionStatementURL";
            }))()(A.SProxy.value)(pa)))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                return "fundingUrl_Ei";
              }))()(A.SProxy.value)(new F.Just(ma))))(function () {
                return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                  return "fundingStatementURL";
                }))()(A.SProxy.value)(sa));
              });
            });
          }))(S));
        });
      });
    }));
  },
      eb = function eb(S) {
    return function (W) {
      return n.div_(q.shiftMapCofree(v.monoidArray))([T.resourceType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.resourceTypeHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
        return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("resourceTypeEle")(S)))(function () {
          return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("resourceTypeSTyp")(S)))(function () {
            return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.resourceTypeGen])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.resourceTypeGenHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
              return oa.menuSignal(va.boundedEnumResourceTypeGeneral)(oa.isOptionResourceTypeGeneral)(C.get(new A.IsSymbol(function () {
                return "generalType";
              }))()(A.SProxy.value)(W));
            })))(function (pa) {
              return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.resourceTypeDescr])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.resourceTypeDescrHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
                return oa.textInput(d.join(F.bindMaybe)(H.map(F.functorMaybe)(Aa.fromString)(C.get(new A.IsSymbol(function () {
                  return "description";
                }))()(A.SProxy.value)(W))));
              })))(function (ma) {
                return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                  return "description";
                }))()(A.SProxy.value)(H.map(F.functorMaybe)(Aa.toString)(ma))))(function () {
                  return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                    return "generalType";
                  }))()(A.SProxy.value)(pa));
                }))(W));
              });
            });
          });
        });
      }));
    };
  },
      zb = function zb(S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.resourceMDSource])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.resourceMDSourceHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      var W = C.getWithDefault(new A.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(A.SProxy.value)(S);
      return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.url])(oa.urlInput(C.getWithDefault(new A.IsSymbol(function () {
        return "url_Ei";
      }))()(new J.Left(""))(A.SProxy.value)(S))))(function (pa) {
        var ma = J.hush(pa);
        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.relType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([T.relTypeHeader])(B.empty(B.plusArray))))(function () {
          return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("relationTypeSTyp")(W)))(function () {
            return oa.menuSignal(va.boundedEnumRelationType)(oa.isOptionRelationType)(C.get(new A.IsSymbol(function () {
              return "relationType";
            }))()(A.SProxy.value)(S));
          });
        })))(function (sa) {
          return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "url_Ei";
          }))()(A.SProxy.value)(new F.Just(pa))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
              return "url";
            }))()(A.SProxy.value)(ma)))(function () {
              return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                return "relationType";
              }))()(A.SProxy.value)(sa));
            });
          }))(S));
        });
      });
    }));
  },
      Hb = function Hb(S) {
    var W = F.fromMaybe(C.empty)(S);
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.relatedId])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.relatedIdHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.id])(oa.textInput(C.get(new A.IsSymbol(function () {
        return "identifier";
      }))()(A.SProxy.value)(W))))(function (pa) {
        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.idType])(oa.menuSignal(va.boundedEnumIdentifierType)(oa.isOptionIdentifierType)(C.get(new A.IsSymbol(function () {
          return "identifierType";
        }))()(A.SProxy.value)(W))))(function (ma) {
          return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.relType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.relTypeHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
            return oa.menuSignal(va.boundedEnumRelationType)(oa.isOptionRelationType)(C.get(new A.IsSymbol(function () {
              return "relationType";
            }))()(A.SProxy.value)(W));
          })))(function (sa) {
            return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(F.Just.create(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
              return "identifier";
            }))()(A.SProxy.value)(pa)))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                return "identifierType";
              }))()(A.SProxy.value)(ma)))(function () {
                return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                  return "relationType";
                }))()(A.SProxy.value)(sa));
              });
            }))(W)));
          });
        });
      });
    }));
  },
      Ib = function Ib(S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.relatedIds])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.relatedIdsHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      return n.div_(q.shiftMapCofree(v.monoidArray))([T.relatedIdList])(oa.nonEmptyArrayView(Hb)(S));
    }));
  },
      Jb = function Jb(S) {
    var W = F.fromMaybe(C.empty)(S);
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.institutionPolicy])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.institutionPolicyHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      var pa = C.getWithDefault(new A.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(A.SProxy.value)(W);
      return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.policy])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.policyHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
        return oa.menuSignal(oa.boundedEnumPolPolType)(oa.isOptionPolPolType)(F.Just.create(C.getWithDefault(new A.IsSymbol(function () {
          return "polPolType";
        }))()(oa.FreeTextPolicy.value)(A.SProxy.value)(W)));
      })))(function (ma) {
        var sa = F.fromMaybe(oa.FreeTextPolicy.value)(ma);
        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.policy])(oa.textInput(C.get(new A.IsSymbol(function () {
          return "policy_str";
        }))()(A.SProxy.value)(W))))(function (ua) {
          var Da = oa.checkPolicy(sa)(F.maybe("")(Aa.toString)(ua));
          return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(function () {
            if (Da instanceof J.Right) return v.mempty(k.widgetMonoid(v.monoidArray));
            if (Da instanceof J.Left) return oa.errorDisplay(ra.showString)(new F.Just(Da.value0));
            throw Error("Failed pattern match at Metajelo.UI (line 920, column 13 - line 922, column 40): " + [Da.constructor.name]);
          }()))(function () {
            var Sa = J.hush(Da);
            return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.policyType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.policyTypeHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
              return oa.menuSignal(V.boundedEnumMaybe(O.smallBoundedPolicyType)(O.boundedEnumPolicyType))(oa.isOptionMaybePolicyType)(C.get(new A.IsSymbol(function () {
                return "policyType";
              }))()(A.SProxy.value)(W));
            })))(function (Oa) {
              return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.applies])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.appliesHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
                return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("appliesToProductAttr")(pa)))(function () {
                  return oa.menuSignal(V.boundedEnumMaybe(V.smallBoundedBoolean)(V.boundedEnumBoolean))(oa.isOptionMaybeBoolean)(C.get(new A.IsSymbol(function () {
                    return "appliesToProduct";
                  }))()(A.SProxy.value)(W));
                });
              })))(function (ib) {
                return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(F.Just.create(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                  return "polPolType";
                }))()(A.SProxy.value)(new F.Just(sa))))(function () {
                  return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                    return "policy_str";
                  }))()(A.SProxy.value)(ua)))(function () {
                    return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                      return "policy_ei";
                    }))()(A.SProxy.value)(new F.Just(Da))))(function () {
                      return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                        return "policy";
                      }))()(A.SProxy.value)(Sa)))(function () {
                        return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                          return "policyType";
                        }))()(A.SProxy.value)(Oa)))(function () {
                          return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                            return "appliesToProduct";
                          }))()(A.SProxy.value)(ib));
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
      Kb = function Kb(S) {
    return function (W) {
      var pa = H.mapFlipped(F.functorMaybe)(ca.snd(W))(function (ma) {
        return H.mapFlipped(I.functorNonEmptyArray)(ma)(function (sa) {
          return D.execState(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "descs_on";
          }))()(A.SProxy.value)(new F.Just(S))))(sa);
        });
      });
      return n.div_(q.shiftMapCofree(v.monoidArray))([T.institutionPolicies])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.institutionPoliciesHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
        return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("institutionPoliciesEle")(S)))(function () {
          return oa.nonEmptyArrayView(Jb)(new ca.Tuple(ca.fst(W), pa));
        });
      }));
    };
  },
      Fb = function Fb(S) {
    return function (W) {
      return n.div_(q.shiftMapCofree(v.monoidArray))([T.identifier])(d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.id])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.idHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
        return oa.textInput(C.get(new A.IsSymbol(function () {
          return "identifier";
        }))()(A.SProxy.value)(W));
      })))(function (pa) {
        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.idType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.idTypeHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
          return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("identifierTypeSTyp")(S)))(function () {
            return oa.menuSignal(va.boundedEnumIdentifierType)(oa.isOptionIdentifierType)(C.get(new A.IsSymbol(function () {
              return "identifierType";
            }))()(A.SProxy.value)(W));
          });
        })))(function (ma) {
          return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "identifier";
          }))()(A.SProxy.value)(pa)))(function () {
            return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
              return "identifierType";
            }))()(A.SProxy.value)(ma));
          }))(W));
        });
      }));
    };
  },
      U = function U(S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.institutionContact])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.institutionContactHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.contactEmail])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.contactEmailHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
        return oa.emailInput(C.getWithDefault(new A.IsSymbol(function () {
          return "email_Ei";
        }))()(new J.Left(""))(A.SProxy.value)(S));
      })))(function (W) {
        var pa = J.hush(W);
        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.contactType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.contactTypeHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
          return oa.menuSignal(V.boundedEnumMaybe(O.smallBoundedInstitutionContactType)(O.boundedEnumInstitutionContactType))(oa.isOptionMaybeInstitutionContactType)(C.get(new A.IsSymbol(function () {
            return "contactType";
          }))()(A.SProxy.value)(S));
        })))(function (ma) {
          return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "email_Ei";
          }))()(A.SProxy.value)(new F.Just(W))))(function () {
            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
              return "emailAddress";
            }))()(A.SProxy.value)(pa)))(function () {
              return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                return "contactType";
              }))()(A.SProxy.value)(ma));
            });
          }))(S));
        });
      });
    }));
  },
      aa = function aa(S) {
    var W = F.fromMaybe(C.empty)(S);
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.location])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.locationHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      var pa = C.getWithDefault(new A.IsSymbol(function () {
        return "descs_on";
      }))()(!0)(A.SProxy.value)(W);
      return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("locationEle")(pa)))(function () {
        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([])(n.span_(q.shiftMapCofree(v.monoidArray))([T.institutionId])(Fb(pa)(Pa(new A.IsSymbol(function () {
          return "institutionID_opt";
        }))()(A.SProxy.value)(W)))))(function (ma) {
          var sa = C.getAll(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
            return "identifier";
          }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
            return "identifierType";
          }))()()()()(C.getAllOptionNil))))(ma);
          return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.institutionName])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.institutionNameHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
            return oa.textInput(C.get(new A.IsSymbol(function () {
              return "institutionName";
            }))()(A.SProxy.value)(W));
          })))(function (ua) {
            return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.institutionType])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.institutionTypeHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
              return oa.menuSignal(O.boundedEnumInstitutionType)(oa.isOptionInstitutionType)(C.get(new A.IsSymbol(function () {
                return "institutionType";
              }))()(A.SProxy.value)(W));
            })))(function (Da) {
              return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n["br'"](l.widgetLiftWidget)))(function () {
                return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.superOrg])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.superOrgHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
                  return oa.textInput(d.join(F.bindMaybe)(C.get(new A.IsSymbol(function () {
                    return "superOrganizationName";
                  }))()(A.SProxy.value)(W)));
                })))(function (Sa) {
                  return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(U(Pa(new A.IsSymbol(function () {
                    return "institutionContact_opt";
                  }))()(A.SProxy.value)(W)))(function (Oa) {
                    var ib = C.getSubset()()(ia.consKeys(new A.IsSymbol(function () {
                      return "contactType";
                    }))(ia.consKeys(new A.IsSymbol(function () {
                      return "emailAddress";
                    }))(ia.nilKeys)))(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                      return "contactType";
                    }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                      return "emailAddress";
                    }))()()()()(C.getAllOptionNil))))(Oa);
                    return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(Za(Pa(new A.IsSymbol(function () {
                      return "iSustain_opt";
                    }))()(A.SProxy.value)(W)))(function (lb) {
                      var Eb = C.getSubset()()(ia.consKeys(new A.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))(ia.consKeys(new A.IsSymbol(function () {
                        return "missionStatementURL";
                      }))(ia.nilKeys)))(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                        return "fundingStatementURL";
                      }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                        return "missionStatementURL";
                      }))()()()()(C.getAllOptionNil))))(lb);
                      return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(Kb(pa)(new ca.Tuple(C.getWithDefault(new A.IsSymbol(function () {
                        return "_numPolicies";
                      }))()(1)(A.SProxy.value)(W), C.get(new A.IsSymbol(function () {
                        return "institutionPolicies_opt";
                      }))()(A.SProxy.value)(W))))(function (Cb) {
                        var Gb = ca.fst(Cb),
                            Lb = ca.snd(Cb),
                            Mb = d.join(F.bindMaybe)(H.map(F.functorMaybe)(da.sequence(I.traversableNonEmptyArray)(F.applicativeMaybe))(H.map(F.functorMaybe)(H.map(I.functorNonEmptyArray)(C.getSubset()()(ia.consKeys(new A.IsSymbol(function () {
                          return "appliesToProduct";
                        }))(ia.consKeys(new A.IsSymbol(function () {
                          return "policy";
                        }))(ia.consKeys(new A.IsSymbol(function () {
                          return "policyType";
                        }))(ia.nilKeys))))(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "appliesToProduct";
                        }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "policy";
                        }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "policyType";
                        }))()()()()(C.getAllOptionNil)))))))(Lb)));
                        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.versioning])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.versioningHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
                          return oa.checkBoxS(C.getWithDefault(new A.IsSymbol(function () {
                            return "versioning";
                          }))()(!1)(A.SProxy.value)(W));
                        })))(function (Ob) {
                          return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                            return "institutionID_opt";
                          }))()(A.SProxy.value)(new F.Just(ma))))(function () {
                            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                              return "institutionID";
                            }))()(A.SProxy.value)(sa)))(function () {
                              return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                return "institutionName";
                              }))()(A.SProxy.value)(ua)))(function () {
                                return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                  return "institutionType";
                                }))()(A.SProxy.value)(Da)))(function () {
                                  return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                    return "superOrganizationName";
                                  }))()(A.SProxy.value)(new F.Just(Sa))))(function () {
                                    return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                      return "institutionContact_opt";
                                    }))()(A.SProxy.value)(new F.Just(Oa))))(function () {
                                      return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                        return "institutionContact";
                                      }))()(A.SProxy.value)(ib)))(function () {
                                        return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                          return "iSustain_opt";
                                        }))()(A.SProxy.value)(new F.Just(lb))))(function () {
                                          return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                            return "institutionSustainability";
                                          }))()(A.SProxy.value)(Eb)))(function () {
                                            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                              return "_numPolicies";
                                            }))()(A.SProxy.value)(new F.Just(Gb))))(function () {
                                              return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                                return "institutionPolicies_opt";
                                              }))()(A.SProxy.value)(Lb)))(function () {
                                                return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                                  return "institutionPolicies";
                                                }))()(A.SProxy.value)(Mb)))(function () {
                                                  return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                                    return "versioning";
                                                  }))()(A.SProxy.value)(new F.Just(Ob))))(function () {
                                                    return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                                      return "descs_on";
                                                    }))()(A.SProxy.value)(new F.Just(pa)));
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
                          }))(W)))(function (Nb) {
                            return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(new F.Just(Nb));
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
      Ka = function Ka(S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.basicMetadata])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.basicMetadataHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(Ya(new ca.Tuple(C.getWithDefault(new A.IsSymbol(function () {
        return "_numTitles";
      }))()(1)(A.SProxy.value)(S), C.get(new A.IsSymbol(function () {
        return "titles";
      }))()(A.SProxy.value)(S))))(function (W) {
        var pa = ca.fst(W),
            ma = ca.snd(W);
        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(rb(new ca.Tuple(C.getWithDefault(new A.IsSymbol(function () {
          return "_numCreators";
        }))()(1)(A.SProxy.value)(S), C.get(new A.IsSymbol(function () {
          return "creators";
        }))()(A.SProxy.value)(S))))(function (sa) {
          var ua = ca.fst(sa),
              Da = ca.snd(sa);
          return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.pubyear])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.pubyearHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
            return oa.natInput(C.get(new A.IsSymbol(function () {
              return "publicationYear";
            }))()(A.SProxy.value)(S));
          })))(function (Sa) {
            return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
              return "titles";
            }))()(A.SProxy.value)(ma)))(function () {
              return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                return "_numTitles";
              }))()(A.SProxy.value)(new F.Just(pa))))(function () {
                return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                  return "creators";
                }))()(A.SProxy.value)(Da)))(function () {
                  return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                    return "_numCreators";
                  }))()(A.SProxy.value)(new F.Just(ua))))(function () {
                    return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                      return "publicationYear";
                    }))()(A.SProxy.value)(Sa));
                  });
                });
              });
            }))(S));
          });
        });
      });
    }));
  },
      Ca = function Ca(S) {
    var W = F.fromMaybe(C.empty)(S);
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.product])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.productHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(hb)(function (pa) {
        var ma = H.map(F.functorMaybe)(function () {
          var sa = P.unwrap(ta.newtypeJSONWithErr);
          return function (ua) {
            return E.runWriter(sa(ua));
          };
        }())(pa);
        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(function () {
          if (ma instanceof F.Nothing) return W;

          if (ma instanceof F.Just) {
            if (ma.value0.value0 instanceof J.Right) return nb(W)(ma.value0.value0.value0);
            if (ma.value0.value0 instanceof J.Left) return W;
            throw Error("Failed pattern match at Metajelo.UI (line 588, column 47 - line 590, column 25): " + [ma.value0.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Metajelo.UI (line 586, column 21 - line 590, column 25): " + [ma.constructor.name]);
        }()))(function (sa) {
          var ua = C.getWithDefault(new A.IsSymbol(function () {
            return "descs_on";
          }))()(!0)(A.SProxy.value)(sa);
          return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("supplementaryProductEle")(ua)))(function () {
            return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(Ka(Pa(new A.IsSymbol(function () {
              return "basicMetadata_opt";
            }))()(A.SProxy.value)(sa)))(function (Da) {
              var Sa = C.getSubset()()(ia.consKeys(new A.IsSymbol(function () {
                return "creators";
              }))(ia.consKeys(new A.IsSymbol(function () {
                return "publicationYear";
              }))(ia.consKeys(new A.IsSymbol(function () {
                return "titles";
              }))(ia.nilKeys))))(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "creators";
              }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "publicationYear";
              }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "titles";
              }))()()()()(C.getAllOptionNil)))))(Da);
              return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.resourceId])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.resourceIdHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
                return Fb(ua)(Pa(new A.IsSymbol(function () {
                  return "resourceID_opt";
                }))()(A.SProxy.value)(sa));
              })))(function (Oa) {
                var ib = C.getAll(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                  return "identifier";
                }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                  return "identifierType";
                }))()()()()(C.getAllOptionNil))))(Oa);
                return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(eb(ua)(Pa(new A.IsSymbol(function () {
                  return "resourceType_opt";
                }))()(A.SProxy.value)(sa)))(function (lb) {
                  var Eb = C.getSubset()()(ia.consKeys(new A.IsSymbol(function () {
                    return "description";
                  }))(ia.consKeys(new A.IsSymbol(function () {
                    return "generalType";
                  }))(ia.nilKeys)))(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                    return "description";
                  }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                    return "generalType";
                  }))()()()()(C.getAllOptionNil))))(lb);
                  return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(ub(ua)(new ca.Tuple(C.getWithDefault(new A.IsSymbol(function () {
                    return "_numFormats";
                  }))()(0)(A.SProxy.value)(sa), C.getWithDefault(new A.IsSymbol(function () {
                    return "format";
                  }))()([])(A.SProxy.value)(sa))))(function (Cb) {
                    var Gb = ca.fst(Cb),
                        Lb = ca.snd(Cb);
                    return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(zb(F.fromMaybe(C.empty)(bb(new A.IsSymbol(function () {
                      return "resMdsOpts_opt";
                    }))()(A.SProxy.value)(sa)(ua))))(function (Mb) {
                      var Ob = C.getSubset()()(ia.consKeys(new A.IsSymbol(function () {
                        return "relationType";
                      }))(ia.consKeys(new A.IsSymbol(function () {
                        return "url";
                      }))(ia.nilKeys)))(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                        return "relationType";
                      }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                        return "url";
                      }))()()()()(C.getAllOptionNil))))(Mb);
                      return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(aa(bb(new A.IsSymbol(function () {
                        return "locationOpts_opt";
                      }))()(A.SProxy.value)(sa)(ua)))(function (Nb) {
                        var Pb = d.join(F.bindMaybe)(H.map(F.functorMaybe)(C.getSubset()()(ia.consKeys(new A.IsSymbol(function () {
                          return "institutionContact";
                        }))(ia.consKeys(new A.IsSymbol(function () {
                          return "institutionID";
                        }))(ia.consKeys(new A.IsSymbol(function () {
                          return "institutionName";
                        }))(ia.consKeys(new A.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(ia.consKeys(new A.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(ia.consKeys(new A.IsSymbol(function () {
                          return "institutionType";
                        }))(ia.consKeys(new A.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(ia.consKeys(new A.IsSymbol(function () {
                          return "versioning";
                        }))(ia.nilKeys)))))))))(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(C.getAllOptionNil)))))))))))(Nb));
                        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                          return "basicMetadata_opt";
                        }))()(A.SProxy.value)(new F.Just(Da))))(function () {
                          return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                            return "basicMetadata";
                          }))()(A.SProxy.value)(Sa)))(function () {
                            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                              return "resourceID_opt";
                            }))()(A.SProxy.value)(new F.Just(Oa))))(function () {
                              return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                return "resourceID";
                              }))()(A.SProxy.value)(new F.Just(ib))))(function () {
                                return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                  return "resourceType_opt";
                                }))()(A.SProxy.value)(new F.Just(lb))))(function () {
                                  return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                    return "resourceType";
                                  }))()(A.SProxy.value)(Eb)))(function () {
                                    return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                      return "_numFormats";
                                    }))()(A.SProxy.value)(new F.Just(Gb))))(function () {
                                      return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                        return "format";
                                      }))()(A.SProxy.value)(new F.Just(Lb))))(function () {
                                        return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                          return "resMdsOpts_opt";
                                        }))()(A.SProxy.value)(new F.Just(Mb))))(function () {
                                          return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                            return "resourceMetadataSource";
                                          }))()(A.SProxy.value)(new F.Just(Ob))))(function () {
                                            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                              return "locationOpts_opt";
                                            }))()(A.SProxy.value)(Nb)))(function () {
                                              return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                                return "location";
                                              }))()(A.SProxy.value)(Pb)))(function () {
                                                return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                                  return "descs_on";
                                                }))()(A.SProxy.value)(new F.Just(ua)));
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
                        }))(sa)))(function (Qb) {
                          return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(new F.Just(Qb));
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
      Na = function Na(S) {
    return function (W) {
      var pa = H.mapFlipped(F.functorMaybe)(ca.snd(W))(function (ma) {
        return H.mapFlipped(I.functorNonEmptyArray)(ma)(function (sa) {
          return D.execState(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
            return "descs_on";
          }))()(A.SProxy.value)(new F.Just(S))))(sa);
        });
      });
      return n.div_(q.shiftMapCofree(v.monoidArray))([T.products])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.productsHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
        return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("supplementaryProductsEle")(S)))(function () {
          return n.div_(q.shiftMapCofree(v.monoidArray))([T.productList])(oa.nonEmptyArrayView(Ca)(new ca.Tuple(ca.fst(W), pa)));
        });
      }));
    };
  },
      Va = function Va(S) {
    var W = C.getWithDefault(new A.IsSymbol(function () {
      return "descs_on";
    }))()(!0)(A.SProxy.value)(S);
    return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("recordEle")(W)))(function () {
      return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("recordTypeCTyp")(W)))(function () {
        return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(tb(Pa(new A.IsSymbol(function () {
          return "identifier_opt";
        }))()(A.SProxy.value)(S)))(function (pa) {
          var ma = C.getAll(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
            return "identifier";
          }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
            return "identifierType";
          }))()()()()(C.getAllOptionNil))))(pa);
          C.getWithDefault(new A.IsSymbol(function () {
            return "date_Ei";
          }))()(new J.Left(""))(A.SProxy.value)(S);
          return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.date])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.dateHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
            return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(oa.mkDesc("dateEle")(W)))(function () {
              return oa.dateInput(C.getWithDefault(new A.IsSymbol(function () {
                return "date_Ei";
              }))()(new J.Left(""))(A.SProxy.value)(S));
            });
          })))(function (sa) {
            var ua = J.hush(sa);
            return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(Ib(new ca.Tuple(C.getWithDefault(new A.IsSymbol(function () {
              return "_numRelIds";
            }))()(0)(A.SProxy.value)(S), C.get(new A.IsSymbol(function () {
              return "relId_opts";
            }))()(A.SProxy.value)(S))))(function (Da) {
              var Sa = ca.fst(Da),
                  Oa = ca.snd(Da),
                  ib = d.join(F.bindMaybe)(H.map(F.functorMaybe)(da.sequence(I.traversableNonEmptyArray)(F.applicativeMaybe))(H.map(F.functorMaybe)(H.map(I.functorNonEmptyArray)(C.getAll(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "identifier";
              }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "identifierType";
              }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "relationType";
              }))()()()()(C.getAllOptionNil)))))))(Oa)));
              return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(Na(W)(new ca.Tuple(C.getWithDefault(new A.IsSymbol(function () {
                return "_numSupProds";
              }))()(0)(A.SProxy.value)(S), C.get(new A.IsSymbol(function () {
                return "supProd_opts";
              }))()(A.SProxy.value)(S))))(function (lb) {
                var Eb = ca.fst(lb),
                    Cb = ca.snd(lb),
                    Gb = d.join(F.bindMaybe)(H.map(F.functorMaybe)(da.sequence(I.traversableNonEmptyArray)(F.applicativeMaybe))(H.map(F.functorMaybe)(H.map(I.functorNonEmptyArray)(C.getSubset()()(ia.consKeys(new A.IsSymbol(function () {
                  return "basicMetadata";
                }))(ia.consKeys(new A.IsSymbol(function () {
                  return "format";
                }))(ia.consKeys(new A.IsSymbol(function () {
                  return "location";
                }))(ia.consKeys(new A.IsSymbol(function () {
                  return "resourceID";
                }))(ia.consKeys(new A.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))(ia.consKeys(new A.IsSymbol(function () {
                  return "resourceType";
                }))(ia.nilKeys)))))))(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                  return "basicMetadata";
                }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                  return "format";
                }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                  return "location";
                }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                  return "resourceID";
                }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                  return "resourceMetadataSource";
                }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                  return "resourceType";
                }))()()()()(C.getAllOptionNil))))))))))(Cb)));
                return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                  return "identifier_opt";
                }))()(A.SProxy.value)(new F.Just(pa))))(function () {
                  return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                    return "identifier";
                  }))()(A.SProxy.value)(ma)))(function () {
                    return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                      return "date_Ei";
                    }))()(A.SProxy.value)(new F.Just(sa))))(function () {
                      return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                        return "date";
                      }))()(A.SProxy.value)(ua)))(function () {
                        return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                          return "_numRelIds";
                        }))()(A.SProxy.value)(new F.Just(Sa))))(function () {
                          return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                            return "relId_opts";
                          }))()(A.SProxy.value)(Oa)))(function () {
                            return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                              return "relatedIdentifiers";
                            }))()(A.SProxy.value)(ib)))(function () {
                              return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                return "_numSupProds";
                              }))()(A.SProxy.value)(new F.Just(Eb))))(function () {
                                return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                  return "supProd_opts";
                                }))()(A.SProxy.value)(Cb)))(function () {
                                  return d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                    return "supplementaryProducts";
                                  }))()(A.SProxy.value)(Gb)))(function () {
                                    return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                                      return "descs_on";
                                    }))()(A.SProxy.value)(new F.Just(W)));
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
      Xa = f.loopS(v.monoidArray)(C.empty)(function (S) {
    return n.div_(q.shiftMapCofree(v.monoidArray))([T.record])(d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.recordHeader])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
      return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(f.display(n.div_(k.widgetShiftMap)([T.reloadDescr])(B.empty(k.widgetPlus(v.monoidArray)))))(function () {
        return n.div_(q.shiftMapCofree(v.monoidArray))([T.recFlexBox])(d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.recEditor])(function () {
          var W = C.getWithDefault(new A.IsSymbol(function () {
            return "descs_on";
          }))()(!0)(A.SProxy.value)(S);
          return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(oa.showDescSig(W))(function (pa) {
            return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(Ma)(function (ma) {
              var sa = C.getSubset()()(ia.consKeys(new A.IsSymbol(function () {
                return "date";
              }))(ia.consKeys(new A.IsSymbol(function () {
                return "identifier";
              }))(ia.consKeys(new A.IsSymbol(function () {
                return "lastModified";
              }))(ia.consKeys(new A.IsSymbol(function () {
                return "relatedIdentifiers";
              }))(ia.consKeys(new A.IsSymbol(function () {
                return "supplementaryProducts";
              }))(ia.nilKeys))))))(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "date";
              }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "identifier";
              }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "lastModified";
              }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "relatedIdentifiers";
              }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
                return "supplementaryProducts";
              }))()()()()(C.getAllOptionNil)))))))(ma);
              ma = F.isNothing(sa) ? S : ma;
              return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(Va(ma))(function (ua) {
                var Da = C.get(new A.IsSymbol(function () {
                  return "lastModified";
                }))()(A.SProxy.value)(ua),
                    Sa = N.unsafePerformEffect(ea.nowDateTime);
                return d.bind(q.bindCofree(k.widgetAlternative(v.monoidArray)))(b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(Y.append(R.semigroupFirst)(Da)(R.First(new F.Just(Sa)))))(function (Oa) {
                  return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(D.execState(d.discard(d.discardUnit)(u.bindStateT(x.monadIdentity))(d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                    return "lastModified";
                  }))()(A.SProxy.value)(Oa)))(function () {
                    return d.bind(u.bindStateT(x.monadIdentity))(z.get(u.monadStateStateT(x.monadIdentity)))(C.maySetOptState(new A.IsSymbol(function () {
                      return "descs_on";
                    }))()(A.SProxy.value)(new F.Just(pa)));
                  }))(ua));
                });
              });
            });
          });
        }()))(function (W) {
          var pa = C.getSubset()()(ia.consKeys(new A.IsSymbol(function () {
            return "date";
          }))(ia.consKeys(new A.IsSymbol(function () {
            return "identifier";
          }))(ia.consKeys(new A.IsSymbol(function () {
            return "lastModified";
          }))(ia.consKeys(new A.IsSymbol(function () {
            return "relatedIdentifiers";
          }))(ia.consKeys(new A.IsSymbol(function () {
            return "supplementaryProducts";
          }))(ia.nilKeys))))))(C.getAllAny()(C.getAllOptionCons(new A.IsSymbol(function () {
            return "date";
          }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
            return "identifier";
          }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
            return "lastModified";
          }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
            return "relatedIdentifiers";
          }))()()()()(C.getAllOptionCons(new A.IsSymbol(function () {
            return "supplementaryProducts";
          }))()()()()(C.getAllOptionNil)))))))(W);
          return d.discard(d.discardUnit)(q.bindCofree(k.widgetAlternative(v.monoidArray)))(n.div_(q.shiftMapCofree(v.monoidArray))([T.sideBar])(f.display(m(pa)(ja.unit)(0))))(function () {
            return b.pure(q.applicativeCofree(k.widgetAlternative(v.monoidArray)))(W);
          });
        }));
      });
    }));
  }),
      Db = n["div'"](k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([n.div(k.widgetMultiAlternative(v.monoidArray))(k.widgetShiftMap)([T.page])(b.pure(b.applicativeArray)(f.dyn(Xa)))]);

  c.runFormSPA = function (S) {
    return y.runWidgetInDom(S)(Db);
  };

  c.page = Db;
  c.utf8DataAttr = "data:text/plain;charset=utf-8";
  c.downloadButton = fb;
  c.mkDLAnchorAndClicker = mb;
  c.uploadButtonSig = Ma;
  c.dataCiteButtonSig = hb;
  c.fillWithDataCite = nb;

  c.dataCiteErrorWidg = function (S) {
    return function (W) {
      if (W instanceof F.Nothing) return B.empty(k.widgetPlus(v.monoidArray));

      if (W instanceof F.Just) {
        if (W.value0.value0 instanceof J.Left) K.toUnfoldable(Q.unfoldableArray)(W.value0.value0.value0);else if (!(W.value0.value0 instanceof J.Right)) throw Error("Failed pattern match at Metajelo.UI (line 250, column 21 - line 252, column 22): " + [W.value0.value0.constructor.name]);
        return B.empty(k.widgetPlus(v.monoidArray));
      }

      throw Error("Failed pattern match at Metajelo.UI (line 246, column 37 - line 253, column 13): " + [W.constructor.name]);
    };
  };

  c.copyButton = kb;
  c.fillMetajeloRecordExtra = qb;
  c.fillSProdExtra = Qa;
  c.fillBasicMetadataExtra = yb;
  c.fillLocationRowExtra = pb;
  c.fillIContactExtra = Wa;
  c.fillSustainExtra = wb;
  c.fillPolicyExtra = xb;
  c.fillResourceMDSExtra = ob;
  c.accumulateMetajeloRecord = Xa;
  c.recWidg = Bb;
  c.finalizeRecord = vb;
  c.accumulateMetajeloRecUI = Va;
  c.accumulateSuppProd = Ca;
  c.supProdSigArray = Na;
  c.accumulateLocation = aa;
  c.accumulateSustain = Za;
  c.accumulateIdent = Fb;
  c.genRecIdent = tb;
  c.accumulateRelatedIdent = Hb;
  c.relIdSigArray = Ib;
  c.accumulateBasicMetadata = Ka;
  c.accumulateResType = eb;
  c.formatSignal = Ta;
  c.formatSigArray = ub;
  c.titleSignal = jb;
  c.titleSigArray = Ya;
  c.creatorSignal = Ab;
  c.creatorSigArray = rb;
  c.accumulateResMdSource = zb;
  c.accumulateContact = U;
  c.accumulatePolicy = Jb;
  c.policySigArray = Kb;
  c.getOpt = Pa;
  c.updateDescOn = bb;
  c.makeSidebar = m;
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
//# sourceMappingURL=prod.fc1e9863.js.map