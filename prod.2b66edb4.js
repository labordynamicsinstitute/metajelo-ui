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
/** @license React v16.13.1
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

exports.version = "16.13.1";
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
/** @license React v16.13.1
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
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";

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
/** @license React v16.13.1
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
},version:"16.13.1"};module.exports=ab.default||ab;

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

$jscomp.polyfill = function (a, c, f, k) {
  c && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, c, f, k) : $jscomp.polyfillUnisolated(a, c, f, k));
};

$jscomp.polyfillUnisolated = function (a, c, f, k) {
  f = $jscomp.global;
  a = a.split(".");

  for (k = 0; k < a.length - 1; k++) {
    var g = a[k];
    if (!(g in f)) return;
    f = f[g];
  }

  a = a[a.length - 1];
  k = f[a];
  c = c(k);
  c != k && null != c && $jscomp.defineProperty(f, a, {
    configurable: !0,
    writable: !0,
    value: c
  });
};

$jscomp.polyfillIsolated = function (a, c, f, k) {
  var g = a.split(".");
  a = 1 === g.length;
  k = g[0];
  k = !a && k in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;

  for (var b = 0; b < g.length - 1; b++) {
    var e = g[b];
    if (!(e in k)) return;
    k = k[e];
  }

  g = g[g.length - 1];
  f = $jscomp.IS_SYMBOL_NATIVE && "es6" === f ? k[g] : null;
  c = c(f);
  null != c && (a ? $jscomp.defineProperty($jscomp.polyfills, g, {
    configurable: !0,
    writable: !0,
    value: c
  }) : c !== f && ($jscomp.propertyToPolyfillSymbol[g] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(g) : $jscomp.POLYFILL_PREFIX + g, g = $jscomp.propertyToPolyfillSymbol[g], $jscomp.defineProperty(k, g, {
    configurable: !0,
    writable: !0,
    value: c
  })));
};

$jscomp.initSymbol = function () {};

$jscomp.polyfill("Symbol", function (a) {
  if (a) return a;

  var c = function c(g, b) {
    this.$jscomp$symbol$id_ = g;
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
      k = function k(g) {
    if (this instanceof k) throw new TypeError("Symbol is not a constructor");
    return new c("jscomp_symbol_" + (g || "") + "_" + f++, g);
  };

  return k;
}, "es6", "es3");

$jscomp.initSymbolIterator = function () {};

$jscomp.polyfill("Symbol.iterator", function (a) {
  if (a) return a;
  a = Symbol("Symbol.iterator");

  for (var c = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), f = 0; f < c.length; f++) {
    var k = $jscomp.global[c[f]];
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

$jscomp.checkStringArgs = function (a, c, f) {
  if (null == a) throw new TypeError("The 'this' value for String.prototype." + f + " must not be null or undefined");
  if (c instanceof RegExp) throw new TypeError("First argument to String.prototype." + f + " must not be a regular expression");
  return a + "";
};

$jscomp.polyfill("String.prototype.codePointAt", function (a) {
  return a ? a : function (c) {
    var f = $jscomp.checkStringArgs(this, null, "codePointAt"),
        k = f.length;
    c = Number(c) || 0;

    if (0 <= c && c < k) {
      c |= 0;
      var g = f.charCodeAt(c);
      if (55296 > g || 56319 < g || c + 1 === k) return g;
      c = f.charCodeAt(c + 1);
      return 56320 > c || 57343 < c ? g : 1024 * (g - 55296) + c + 9216;
    }
  };
}, "es6", "es3");
$jscomp.polyfill("String.fromCodePoint", function (a) {
  return a ? a : function (c) {
    for (var f = "", k = 0; k < arguments.length; k++) {
      var g = Number(arguments[k]);
      if (0 > g || 1114111 < g || g !== Math.floor(g)) throw new RangeError("invalid_code_point " + g);
      65535 >= g ? f += String.fromCharCode(g) : (g -= 65536, f += String.fromCharCode(g >>> 10 & 1023 | 55296), f += String.fromCharCode(g & 1023 | 56320));
    }

    return f;
  };
}, "es6", "es3");
$jscomp.polyfill("Array.from", function (a) {
  return a ? a : function (c, f, k) {
    f = null != f ? f : function (d) {
      return d;
    };
    var g = [],
        b = "undefined" != typeof Symbol && Symbol.iterator && c[Symbol.iterator];

    if ("function" == typeof b) {
      c = b.call(c);

      for (var e = 0; !(b = c.next()).done;) {
        g.push(f.call(k, b.value, e++));
      }
    } else for (b = c.length, e = 0; e < b; e++) {
      g.push(f.call(k, c[e], e));
    }

    return g;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.endsWith", function (a) {
  return a ? a : function (c, f) {
    var k = $jscomp.checkStringArgs(this, c, "endsWith");
    c += "";
    void 0 === f && (f = k.length);
    f = Math.max(0, Math.min(f | 0, k.length));

    for (var g = c.length; 0 < g && 0 < f;) {
      if (k[--f] != c[--g]) return !1;
    }

    return 0 >= g;
  };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function (a) {
  return a ? a : function (c, f) {
    var k = $jscomp.checkStringArgs(this, c, "startsWith");
    c += "";
    var g = k.length,
        b = c.length;
    f = Math.max(0, Math.min(f | 0, k.length));

    for (var e = 0; e < b && f < g;) {
      if (k[f++] != c[e++]) return !1;
    }

    return e >= b;
  };
}, "es6", "es3");

$jscomp.iteratorFromArray = function (a, c) {
  a instanceof String && (a += "");
  var f = 0,
      k = !1,
      g = {
    next: function next() {
      if (!k && f < a.length) {
        var b = f++;
        return {
          value: c(b, a[b]),
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
    return $jscomp.iteratorFromArray(this, function (c) {
      return c;
    });
  };
}, "es6", "es3");

$jscomp.findInternal = function (a, c, f) {
  a instanceof String && (a = String(a));

  for (var k = a.length, g = 0; g < k; g++) {
    var b = a[g];
    if (c.call(f, b, g, a)) return {
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
      for (var k = c.length, g = f.length, b = Array(k * g), e = 0, d = 0; d < k; d++) {
        for (var n = c[d], m = 0; m < g; m++) {
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
    return function (k) {
      return function (g) {
        return f(k(g));
      };
    };
  });

  a.compose = function (f) {
    return f.compose;
  };

  a.composeFlipped = function (f) {
    return function (k) {
      return function (g) {
        return (0, f.compose)(g)(k);
      };
    };
  };

  a.semigroupoidFn = c;
})(PS);

(function (a) {
  a["Control.Category"] = a["Control.Category"] || {};
  var c = a["Control.Category"],
      f = a["Control.Semigroupoid"];
  a = new function (k, g) {
    this.Semigroupoid0 = k;
    this.identity = g;
  }(function () {
    return f.semigroupoidFn;
  }, function (k) {
    return k;
  });

  c.identity = function (k) {
    return k.identity;
  };

  c.categoryFn = a;
})(PS);

(function (a) {
  a["Data.Function"] = a["Data.Function"] || {};
  a = a["Data.Function"];

  a.flip = function (c) {
    return function (f) {
      return function (k) {
        return c(k)(f);
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
      for (var k = f.length, g = Array(k), b = 0; b < k; b++) {
        g[b] = c(f[b]);
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
  var c = a["Data.Functor"],
      f = a["Data.Functor"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Function"],
      b = a["Data.Unit"];

  a = function a(e) {
    this.map = e;
  };

  k = new a(k.compose(k.semigroupoidFn));
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
    return (0, e.map)(g["const"](b.unit));
  };

  c.voidRight = function (e) {
    return function (d) {
      return (0, e.map)(g["const"](d));
    };
  };

  c.voidLeft = function (e) {
    return function (d) {
      return function (n) {
        return (0, e.map)(g["const"](n))(d);
      };
    };
  };

  c.flap = function (e) {
    return function (d) {
      return function (n) {
        return (0, e.map)(function (m) {
          return m(n);
        })(d);
      };
    };
  };

  c.functorFn = k;
  c.functorArray = f;
})(PS);

(function (a) {
  a["Control.Apply"] = a["Control.Apply"] || {};
  var c = a["Control.Apply"],
      f = a["Control.Apply"],
      k = a["Control.Category"],
      g = a["Data.Function"],
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

  c.applyFirst = function (d) {
    return function (n) {
      return function (m) {
        return (0, d.apply)(b.map(d.Functor0())(g["const"])(n))(m);
      };
    };
  };

  c.applySecond = function (d) {
    return function (n) {
      return function (m) {
        return (0, d.apply)(b.map(d.Functor0())(g["const"](k.identity(k.categoryFn)))(n))(m);
      };
    };
  };

  c.lift2 = function (d) {
    return function (n) {
      return function (m) {
        return function (l) {
          return (0, d.apply)(b.map(d.Functor0())(n)(m))(l);
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
      f = a["Control.Apply"],
      k = a["Data.Unit"];

  a = function a(b, e) {
    this.Apply0 = b;
    this.pure = e;
  };

  var g = new a(function () {
    return f.applyArray;
  }, function (b) {
    return [b];
  });
  c.Applicative = a;

  c.pure = function (b) {
    return b.pure;
  };

  c.liftA1 = function (b) {
    return function (e) {
      return function (d) {
        return f.apply(b.Apply0())((0, b.pure)(e))(d);
      };
    };
  };

  c.unless = function (b) {
    return function (e) {
      return function (d) {
        if (!e) return d;
        if (e) return (0, b.pure)(k.unit);
        throw Error("Failed pattern match at Control.Applicative (line 62, column 1 - line 62, column 65): " + [e.constructor.name, d.constructor.name]);
      };
    };
  };

  c.applicativeArray = g;
})(PS);

(function (a) {
  a.arrayBind = function (c) {
    return function (f) {
      for (var k = [], g = 0, b = c.length; g < b; g++) {
        Array.prototype.push.apply(k, f(c[g]));
      }

      return k;
    };
  };
})(PS["Control.Bind"] = PS["Control.Bind"] || {});

(function (a) {
  a["Control.Bind"] = a["Control.Bind"] || {};

  var c = a["Control.Bind"],
      f = a["Control.Apply"],
      k = a["Control.Category"],
      g = a["Data.Function"],
      b = function b(d, n) {
    this.Apply0 = d;
    this.bind = n;
  };

  a = new b(function () {
    return f.applyArray;
  }, a["Control.Bind"].arrayBind);
  var e = new function (d) {
    this.discard = d;
  }(function (d) {
    return d.bind;
  });
  c.Bind = b;

  c.bind = function (d) {
    return d.bind;
  };

  c.bindFlipped = function (d) {
    return g.flip(d.bind);
  };

  c.discard = function (d) {
    return d.discard;
  };

  c.join = function (d) {
    return function (n) {
      return (0, d.bind)(n)(k.identity(k.categoryFn));
    };
  };

  c.bindArray = a;
  c.discardUnit = e;
})(PS);

(function (a) {
  a["Control.Monad"] = a["Control.Monad"] || {};
  var c = a["Control.Monad"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"];

  c.Monad = function (g, b) {
    this.Applicative0 = g;
    this.Bind1 = b;
  };

  c.ap = function (g) {
    return function (b) {
      return function (e) {
        return k.bind(g.Bind1())(b)(function (d) {
          return k.bind(g.Bind1())(e)(function (n) {
            return f.pure(g.Applicative0())(d(n));
          });
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Lazy"] = a["Control.Lazy"] || {};
  a = a["Control.Lazy"];

  a.defer = function (c) {
    return c.defer;
  };

  a.Lazy = function (c) {
    this.defer = c;
  };
})(PS);

(function (a) {
  a["Data.Bifunctor"] = a["Data.Bifunctor"] || {};
  var c = a["Data.Bifunctor"],
      f = a["Control.Category"];

  c.bimap = function (k) {
    return k.bimap;
  };

  c.Bifunctor = function (k) {
    this.bimap = k;
  };

  c.lmap = function (k) {
    return function (g) {
      return (0, k.bimap)(g)(f.identity(f.categoryFn));
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
    return function (k) {
      return function (g) {
        return function (b) {
          return function (e) {
            return b < e ? f : b === e ? k : g;
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
    return function (k) {
      return f === k;
    };
  };

  a.eqBooleanImpl = c;
  a.eqIntImpl = c;
  a.eqCharImpl = c;
  a.eqStringImpl = c;
})(PS["Data.Eq"] = PS["Data.Eq"] || {});

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
  a.unsafeGet = function (c) {
    return function (f) {
      return f[c];
    };
  };

  a.unsafeSet = function (c) {
    return function (f) {
      return function (k) {
        var g = {},
            b;

        for (b in k) {
          ({}).hasOwnProperty.call(k, b) && (g[b] = k[b]);
        }

        g[c] = f;
        return g;
      };
    };
  };

  a.unsafeDelete = function (c) {
    return function (f) {
      var k = {},
          g;

      for (g in f) {
        g !== c && {}.hasOwnProperty.call(f, g) && (k[g] = f[g]);
      }

      return k;
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
  a["Data.Eq"] = a["Data.Eq"] || {};

  var c = a["Data.Eq"],
      f = a["Data.Eq"],
      k = a["Data.Symbol"],
      g = a["Record.Unsafe"],
      b = a["Type.Data.RowList"],
      e = function e(r) {
    this.eqRecord = r;
  },
      d = function d(r) {
    this.eq = r;
  };

  a = new d(f.eqStringImpl);
  var n = new e(function (r) {
    return function (x) {
      return function (z) {
        return !0;
      };
    };
  }),
      m = new d(f.eqIntImpl),
      l = new d(f.eqCharImpl);
  f = new d(f.eqBooleanImpl);
  c.Eq = d;

  c.eq = function (r) {
    return r.eq;
  };

  c.eqBoolean = f;
  c.eqInt = m;
  c.eqChar = l;
  c.eqString = a;

  c.eqRec = function (r) {
    return function (x) {
      return new d((0, x.eqRecord)(b.RLProxy.value));
    };
  };

  c.eqRowNil = n;

  c.eqRowCons = function (r) {
    return function (x) {
      return function (z) {
        return function (t) {
          return new e(function (q) {
            return function (u) {
              return function (A) {
                var y = (0, r.eqRecord)(b.RLProxy.value)(u)(A),
                    B = k.reflectSymbol(z)(k.SProxy.value);
                B = g.unsafeGet(B);
                return (0, t.eq)(B(u))(B(A)) && y;
              };
            };
          });
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Ordering"] = a["Data.Ordering"] || {};
  a = a["Data.Ordering"];

  var c = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      f = function () {
    function g() {}

    g.value = new g();
    return g;
  }(),
      k = function () {
    function g() {}

    g.value = new g();
    return g;
  }();

  a.LT = c;
  a.GT = f;
  a.EQ = k;
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
  a = new function (f, k, g, b) {
    this.add = f;
    this.mul = k;
    this.one = g;
    this.zero = b;
  }(a.intAdd, a.intMul, 1, 0);

  c.zero = function (f) {
    return f.zero;
  };

  c.semiringInt = a;
})(PS);

(function (a) {
  a["Data.Ring"] = a["Data.Ring"] || {};
  var c = a["Data.Ring"],
      f = a["Data.Semiring"];
  a = new function (k, g) {
    this.Semiring0 = k;
    this.sub = g;
  }(function () {
    return f.semiringInt;
  }, a["Data.Ring"].intSub);

  c.negate = function (k) {
    return function (g) {
      return (0, k.sub)(f.zero(k.Semiring0()))(g);
    };
  };

  c.ringInt = a;
})(PS);

(function (a) {
  a["Data.Ord"] = a["Data.Ord"] || {};
  var c = a["Data.Ord"],
      f = a["Data.Ord"],
      k = a["Data.Eq"],
      g = a["Data.Ordering"],
      b = a["Data.Ring"],
      e = a["Data.Semiring"];

  a = function a(l, r) {
    this.Eq0 = l;
    this.compare = r;
  };

  var d = new a(function () {
    return k.eqInt;
  }, f.ordIntImpl(g.LT.value)(g.EQ.value)(g.GT.value)),
      n = new a(function () {
    return k.eqChar;
  }, f.ordCharImpl(g.LT.value)(g.EQ.value)(g.GT.value));
  f = new a(function () {
    return k.eqBoolean;
  }, f.ordBooleanImpl(g.LT.value)(g.EQ.value)(g.GT.value));

  var m = function m(l) {
    return function (r) {
      return function (x) {
        return (0, l.compare)(r)(x) instanceof g.LT ? !1 : !0;
      };
    };
  };

  c.Ord = a;

  c.compare = function (l) {
    return l.compare;
  };

  c.max = function (l) {
    return function (r) {
      return function (x) {
        var z = (0, l.compare)(r)(x);
        if (z instanceof g.LT) return x;
        if (z instanceof g.EQ || z instanceof g.GT) return r;
        throw Error("Failed pattern match at Data.Ord (line 167, column 3 - line 170, column 12): " + [z.constructor.name]);
      };
    };
  };

  c.abs = function (l) {
    return function (r) {
      return function (x) {
        return m(l)(x)(e.zero(r.Semiring0())) ? x : b.negate(r)(x);
      };
    };
  };

  c.ordBoolean = f;
  c.ordInt = d;
  c.ordChar = n;
})(PS);

(function (a) {
  a["Data.Bounded"] = a["Data.Bounded"] || {};
  var c = a["Data.Bounded"],
      f = a["Data.Bounded"],
      k = a["Data.Ord"];

  a = function a(e, d, n) {
    this.Ord0 = e;
    this.bottom = d;
    this.top = n;
  };

  var g = new a(function () {
    return k.ordInt;
  }, f.bottomInt, f.topInt);
  f = new a(function () {
    return k.ordChar;
  }, f.bottomChar, f.topChar);
  var b = new a(function () {
    return k.ordBoolean;
  }, !1, !0);
  c.Bounded = a;

  c.bottom = function (e) {
    return e.bottom;
  };

  c.top = function (e) {
    return e.top;
  };

  c.boundedBoolean = b;
  c.boundedInt = g;
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
    return '"' + c.replace(/[\0-\x1F\x7F"\\]/g, function (k, g) {
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
      g = g < f && "0" <= c[g] && "9" >= c[g] ? "\\&" : "";
      return "\\" + k.charCodeAt(0).toString(10) + g;
    }) + '"';
  };

  a.showArrayImpl = function (c) {
    return function (f) {
      for (var k = [], g = 0, b = f.length; g < b; g++) {
        k[g] = c(f[g]);
      }

      return "[" + k.join(",") + "]";
    };
  };

  a.cons = function (c) {
    return function (f) {
      return [c].concat(f);
    };
  };

  a.join = function (c) {
    return function (f) {
      return f.join(c);
    };
  };
})(PS["Data.Show"] = PS["Data.Show"] || {});

(function (a) {
  a["Data.Show"] = a["Data.Show"] || {};

  var c = a["Data.Show"],
      f = a["Data.Show"],
      k = a["Data.Symbol"],
      g = a["Record.Unsafe"],
      b = a["Type.Data.RowList"],
      e = function e(x) {
    this.showRecordFields = x;
  },
      d = function d(x) {
    this.show = x;
  };

  a = new d(f.showStringImpl);
  var n = new e(function (x) {
    return function (z) {
      return [];
    };
  }),
      m = new d(f.showIntImpl),
      l = new d(f.showCharImpl),
      r = new d(function (x) {
    if (x) return "true";
    if (!x) return "false";
    throw Error("Failed pattern match at Data.Show (line 20, column 1 - line 22, column 23): " + [x.constructor.name]);
  });
  c.Show = d;

  c.show = function (x) {
    return x.show;
  };

  c.showBoolean = r;
  c.showInt = m;
  c.showChar = l;
  c.showString = a;

  c.showArray = function (x) {
    return new d(f.showArrayImpl(x.show));
  };

  c.showRecord = function (x) {
    return function (z) {
      return new d(function (t) {
        t = (0, z.showRecordFields)(b.RLProxy.value)(t);
        return 0 === t.length ? "{}" : f.join(" ")(["{", f.join(", ")(t), "}"]);
      });
    };
  };

  c.showRecordFieldsNil = n;

  c.showRecordFieldsCons = function (x) {
    return function (z) {
      return function (t) {
        return new e(function (q) {
          return function (u) {
            var A = (0, z.showRecordFields)(b.RLProxy.value)(u),
                y = k.reflectSymbol(x)(k.SProxy.value);
            u = g.unsafeGet(y)(u);
            return f.cons(f.join(": ")([y, (0, t.show)(u)]))(A);
          };
        });
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Maybe"] = a["Data.Maybe"] || {};

  var c = a["Data.Maybe"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Data.Bounded"],
      d = a["Data.Eq"],
      n = a["Data.Function"],
      m = a["Data.Functor"],
      l = a["Data.Ord"],
      r = a["Data.Ordering"],
      x = a["Data.Show"],
      z = function () {
    function w() {}

    w.value = new w();
    return w;
  }(),
      t = function () {
    function w(F) {
      this.value0 = F;
    }

    w.create = function (F) {
      return new w(F);
    };

    return w;
  }(),
      q = function q(w) {
    return function (F) {
      return function (E) {
        if (E instanceof z) return w;
        if (E instanceof t) return F(E.value0);
        throw Error("Failed pattern match at Data.Maybe (line 217, column 1 - line 217, column 51): " + [w.constructor.name, F.constructor.name, E.constructor.name]);
      };
    };
  };

  a = q(!0)(n["const"](!1));
  n = q(!1)(n["const"](!0));

  var u = new m.Functor(function (w) {
    return function (F) {
      return F instanceof t ? new t(w(F.value0)) : z.value;
    };
  }),
      A = function A(w) {
    return new d.Eq(function (F) {
      return function (E) {
        return F instanceof z && E instanceof z ? !0 : F instanceof t && E instanceof t ? d.eq(w)(F.value0)(E.value0) : !1;
      };
    });
  },
      y = function y(w) {
    return new l.Ord(function () {
      return A(w.Eq0());
    }, function (F) {
      return function (E) {
        if (F instanceof z && E instanceof z) return r.EQ.value;
        if (F instanceof z) return r.LT.value;
        if (E instanceof z) return r.GT.value;
        if (F instanceof t && E instanceof t) return l.compare(w)(F.value0)(E.value0);
        throw Error("Failed pattern match at Data.Maybe (line 194, column 1 - line 194, column 51): " + [F.constructor.name, E.constructor.name]);
      };
    });
  },
      B = new k.Apply(function () {
    return u;
  }, function (w) {
    return function (F) {
      if (w instanceof t) return m.map(u)(w.value0)(F);
      if (w instanceof z) return z.value;
      throw Error("Failed pattern match at Data.Maybe (line 67, column 1 - line 69, column 30): " + [w.constructor.name, F.constructor.name]);
    };
  });

  k = new g.Bind(function () {
    return B;
  }, function (w) {
    return function (F) {
      if (w instanceof t) return F(w.value0);
      if (w instanceof z) return z.value;
      throw Error("Failed pattern match at Data.Maybe (line 125, column 1 - line 127, column 28): " + [w.constructor.name, F.constructor.name]);
    };
  });
  f = new f.Applicative(function () {
    return B;
  }, t.create);
  c.Nothing = z;
  c.Just = t;
  c.maybe = q;

  c.fromMaybe = function (w) {
    return q(w)(b.identity(b.categoryFn));
  };

  c.isJust = n;
  c.isNothing = a;

  c.fromJust = function (w) {
    return function (F) {
      if (F instanceof t) return F.value0;
      throw Error("Failed pattern match at Data.Maybe (line 268, column 1 - line 268, column 46): " + [F.constructor.name]);
    };
  };

  c.functorMaybe = u;
  c.applyMaybe = B;
  c.applicativeMaybe = f;
  c.bindMaybe = k;
  c.eqMaybe = A;
  c.ordMaybe = y;

  c.boundedMaybe = function (w) {
    return new e.Bounded(function () {
      return y(w.Ord0());
    }, z.value, new t(e.top(w)));
  };

  c.showMaybe = function (w) {
    return new x.Show(function (F) {
      if (F instanceof t) return "(Just " + (x.show(w)(F.value0) + ")");
      if (F instanceof z) return "Nothing";
      throw Error("Failed pattern match at Data.Maybe (line 205, column 1 - line 207, column 28): " + [F.constructor.name]);
    });
  };
})(PS);

(function (a) {
  a["Data.Either"] = a["Data.Either"] || {};

  var c = a["Data.Either"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Bifunctor"],
      d = a["Data.Function"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      l = function () {
    function u(A) {
      this.value0 = A;
    }

    u.create = function (A) {
      return new u(A);
    };

    return u;
  }(),
      r = function () {
    function u(A) {
      this.value0 = A;
    }

    u.create = function (A) {
      return new u(A);
    };

    return u;
  }(),
      x = new n.Functor(function (u) {
    return function (A) {
      if (A instanceof l) return new l(A.value0);
      if (A instanceof r) return new r(u(A.value0));
      throw Error("Failed pattern match at Data.Either (line 38, column 1 - line 38, column 52): " + [A.constructor.name]);
    };
  });

  a = function a(u) {
    return function (A) {
      return function (y) {
        if (y instanceof l) return u(y.value0);
        if (y instanceof r) return A(y.value0);
        throw Error("Failed pattern match at Data.Either (line 238, column 1 - line 238, column 64): " + [u.constructor.name, A.constructor.name, y.constructor.name]);
      };
    };
  };

  d = a(d["const"](m.Nothing.value))(m.Just.create);
  e = new e.Bifunctor(function (u) {
    return function (A) {
      return function (y) {
        if (y instanceof l) return new l(u(y.value0));
        if (y instanceof r) return new r(A(y.value0));
        throw Error("Failed pattern match at Data.Either (line 46, column 1 - line 48, column 36): " + [u.constructor.name, A.constructor.name, y.constructor.name]);
      };
    };
  });
  var z = new k.Apply(function () {
    return x;
  }, function (u) {
    return function (A) {
      if (u instanceof l) return new l(u.value0);
      if (u instanceof r) return n.map(x)(u.value0)(A);
      throw Error("Failed pattern match at Data.Either (line 82, column 1 - line 84, column 30): " + [u.constructor.name, A.constructor.name]);
    };
  }),
      t = new g.Bind(function () {
    return z;
  }, a(function (u) {
    return function (A) {
      return new l(u);
    };
  })(function (u) {
    return function (A) {
      return A(u);
    };
  })),
      q = new f.Applicative(function () {
    return z;
  }, r.create);
  f = new b.Monad(function () {
    return q;
  }, function () {
    return t;
  });
  c.Left = l;
  c.Right = r;
  c.either = a;
  c.hush = d;
  c.functorEither = x;
  c.bifunctorEither = e;
  c.applicativeEither = q;
  c.bindEither = t;
  c.monadEither = f;
})(PS);

(function (a) {
  a["Control.Monad.Rec.Class"] = a["Control.Monad.Rec.Class"] || {};

  var c = a["Control.Monad.Rec.Class"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      g = function () {
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

      for (var l = !1, r; !l;) {
        if (r = m, r instanceof g) m = n(r.value0), r = void 0;else if (r instanceof b) l = !0, r = r.value0;else throw Error("Failed pattern match at Control.Monad.Rec.Class (line 93, column 3 - line 93, column 25): " + [r.constructor.name]);
      }

      return r;
    };
  },
      d = new a(function () {
    return k.monadEither;
  }, function (n) {
    return function (m) {
      return e(function (l) {
        if (l instanceof k.Left) return new b(new k.Left(l.value0));
        if (l instanceof k.Right && l.value0 instanceof g) return new g(n(l.value0.value0));
        if (l instanceof k.Right && l.value0 instanceof b) return new b(new k.Right(l.value0.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 121, column 7 - line 121, column 33): " + [l.constructor.name]);
      })(n(m));
    };
  });

  f = new f.Bifunctor(function (n) {
    return function (m) {
      return function (l) {
        if (l instanceof g) return new g(n(l.value0));
        if (l instanceof b) return new b(m(l.value0));
        throw Error("Failed pattern match at Control.Monad.Rec.Class (line 29, column 1 - line 31, column 34): " + [n.constructor.name, m.constructor.name, l.constructor.name]);
      };
    };
  });
  c.Loop = g;
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
      return function (k) {
        for (var g = f, b = k.length - 1; 0 <= b; b--) {
          g = c(k[b])(g);
        }

        return g;
      };
    };
  };

  a.foldlArray = function (c) {
    return function (f) {
      return function (k) {
        for (var g = f, b = k.length, e = 0; e < b; e++) {
          g = c(g)(k[e]);
        }

        return g;
      };
    };
  };
})(PS["Data.Foldable"] = PS["Data.Foldable"] || {});

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
  var f = new function (k, g, b, e, d, n) {
    this.conj = k;
    this.disj = g;
    this.ff = b;
    this.implies = e;
    this.not = d;
    this.tt = n;
  }(a.boolConj, a.boolDisj, !1, function (k) {
    return function (g) {
      return (0, f.disj)((0, f.not)(k))(g);
    };
  }, a.boolNot, !0);

  c.ff = function (k) {
    return k.ff;
  };

  c.disj = function (k) {
    return k.disj;
  };

  c.not = function (k) {
    return k.not;
  };

  c.heytingAlgebraBoolean = f;
})(PS);

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
      k = function k(g) {
    this.append = g;
  };

  a = new k(f.concatString);
  f = new k(f.concatArray);
  c.Semigroup = k;

  c.append = function (g) {
    return g.append;
  };

  c.semigroupString = a;

  c.semigroupFn = function (g) {
    return new k(function (b) {
      return function (e) {
        return function (d) {
          return (0, g.append)(b(d))(e(d));
        };
      };
    });
  };

  c.semigroupArray = f;
})(PS);

(function (a) {
  a["Data.Monoid"] = a["Data.Monoid"] || {};

  var c = a["Data.Monoid"],
      f = a["Data.Semigroup"],
      k = function k(b, e) {
    this.Semigroup0 = b;
    this.mempty = e;
  };

  a = new k(function () {
    return f.semigroupString;
  }, "");
  var g = new k(function () {
    return f.semigroupArray;
  }, []);
  c.Monoid = k;

  c.mempty = function (b) {
    return b.mempty;
  };

  c.monoidFn = function (b) {
    return new k(function () {
      return f.semigroupFn(b.Semigroup0());
    }, function (e) {
      return b.mempty;
    });
  };

  c.monoidString = a;
  c.monoidArray = g;
})(PS);

(function (a) {
  a["Data.Monoid.Disj"] = a["Data.Monoid.Disj"] || {};

  var c = a["Data.Monoid.Disj"],
      f = a["Data.HeytingAlgebra"],
      k = a["Data.Monoid"],
      g = a["Data.Semigroup"],
      b = function b(e) {
    return new g.Semigroup(function (d) {
      return function (n) {
        return f.disj(e)(d)(n);
      };
    });
  };

  c.Disj = function (e) {
    return e;
  };

  c.monoidDisj = function (e) {
    return new k.Monoid(function () {
      return b(e);
    }, f.ff(e));
  };
})(PS);

(function (a) {
  a["Data.Newtype"] = a["Data.Newtype"] || {};

  var c = a["Data.Newtype"],
      f = a["Data.Functor"],
      k = function k(g, b) {
    this.unwrap = g;
    this.wrap = b;
  };

  a = new k(function (g) {
    return g;
  }, a["Data.Monoid.Disj"].Disj);

  c.unwrap = function (g) {
    return g.unwrap;
  };

  c.wrap = function (g) {
    return g.wrap;
  };

  c.Newtype = k;

  c.alaF = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return function (m) {
              var l = f.map(b)(d.unwrap),
                  r = f.map(g)(e.wrap);
              return function (x) {
                return l(m(r(x)));
              };
            };
          };
        };
      };
    };
  };

  c.over = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          var n = b.wrap,
              m = g.unwrap;
          return function (l) {
            return n(d(m(l)));
          };
        };
      };
    };
  };

  c.under = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          var n = b.unwrap,
              m = g.wrap;
          return function (l) {
            return n(d(m(l)));
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
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Eq"],
      d = a["Data.Function"],
      n = a["Data.Functor"],
      m = a["Data.HeytingAlgebra"],
      l = a["Data.Maybe"],
      r = a["Data.Monoid"],
      x = a["Data.Monoid.Disj"],
      z = a["Data.Newtype"],
      t = a["Data.Semigroup"],
      q = a["Data.Unit"];

  a = function a(E, v, C) {
    this.foldMap = E;
    this.foldl = v;
    this.foldr = C;
  };

  var u = function u(E) {
    return function (v) {
      return function (C) {
        return (0, v.foldr)(function () {
          var L = g.applySecond(E.Apply0());
          return function (G) {
            return L(C(G));
          };
        }())(k.pure(E)(q.unit));
      };
    };
  },
      A = new a(function (E) {
    return function (v) {
      return function (C) {
        if (C instanceof l.Nothing) return r.mempty(E);
        if (C instanceof l.Just) return v(C.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [v.constructor.name, C.constructor.name]);
      };
    };
  }, function (E) {
    return function (v) {
      return function (C) {
        if (C instanceof l.Nothing) return v;
        if (C instanceof l.Just) return E(v)(C.value0);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [E.constructor.name, v.constructor.name, C.constructor.name]);
      };
    };
  }, function (E) {
    return function (v) {
      return function (C) {
        if (C instanceof l.Nothing) return v;
        if (C instanceof l.Just) return E(C.value0)(v);
        throw Error("Failed pattern match at Data.Foldable (line 129, column 1 - line 135, column 27): " + [E.constructor.name, v.constructor.name, C.constructor.name]);
      };
    };
  }),
      y = function y(E) {
    return function (v) {
      return function (C) {
        return (0, E.foldr)(function (L) {
          return function (G) {
            return t.append(v.Semigroup0())(C(L))(G);
          };
        })(r.mempty(v));
      };
    };
  },
      B = new a(function (E) {
    return y(B)(E);
  }, f.foldlArray, f.foldrArray),
      w = function w(E) {
    return function (v) {
      return z.alaF(n.functorFn)(n.functorFn)(z.newtypeDisj)(z.newtypeDisj)(x.Disj)((0, E.foldMap)(x.monoidDisj(v)));
    };
  },
      F = function F(E) {
    return function (v) {
      var C = w(E)(m.heytingAlgebraBoolean),
          L = e.eq(v);
      return function (G) {
        return C(L(G));
      };
    };
  };

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
    return function (v) {
      return (0, E.foldMap)(v)(b.identity(b.categoryFn));
    };
  };

  c.traverse_ = u;

  c.for_ = function (E) {
    return function (v) {
      return d.flip(u(E)(v));
    };
  };

  c.intercalate = function (E) {
    return function (v) {
      return function (C) {
        return function (L) {
          return (0, E.foldl)(function (G) {
            return function (X) {
              return G.init ? {
                init: !1,
                acc: X
              } : {
                init: !1,
                acc: t.append(v.Semigroup0())(G.acc)(t.append(v.Semigroup0())(C)(X))
              };
            };
          })({
            init: !0,
            acc: r.mempty(v)
          })(L).acc;
        };
      };
    };
  };

  c.any = w;

  c.notElem = function (E) {
    return function (v) {
      return function (C) {
        var L = m.not(m.heytingAlgebraBoolean),
            G = F(E)(v)(C);
        return function (X) {
          return L(G(X));
        };
      };
    };
  };

  c.find = function (E) {
    return function (v) {
      return (0, E.foldl)(function (C) {
        return function (L) {
          return C instanceof l.Nothing && v(L) ? new l.Just(L) : C;
        };
      })(l.Nothing.value);
    };
  };

  c.foldableArray = B;
  c.foldableMaybe = A;
})(PS);

(function (a) {
  a["Data.NonEmpty"] = a["Data.NonEmpty"] || {};

  var c = a["Data.NonEmpty"],
      f = a["Control.Plus"],
      k = a["Data.Foldable"],
      g = a["Data.Functor"],
      b = a["Data.Semigroup"],
      e = a["Data.Show"],
      d = function () {
    function n(m, l) {
      this.value0 = m;
      this.value1 = l;
    }

    n.create = function (m) {
      return function (l) {
        return new n(m, l);
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
      return new e.Show(function (l) {
        return "(NonEmpty " + (e.show(n)(l.value0) + (" " + (e.show(m)(l.value1) + ")")));
      });
    };
  };

  c.functorNonEmpty = function (n) {
    return new g.Functor(function (m) {
      return function (l) {
        return new d(m(l.value0), g.map(n)(m)(l.value1));
      };
    });
  };

  c.foldableNonEmpty = function (n) {
    return new k.Foldable(function (m) {
      return function (l) {
        return function (r) {
          return b.append(m.Semigroup0())(l(r.value0))(k.foldMap(n)(m)(l)(r.value1));
        };
      };
    }, function (m) {
      return function (l) {
        return function (r) {
          return k.foldl(n)(m)(m(l)(r.value0))(r.value1);
        };
      };
    }, function (m) {
      return function (l) {
        return function (r) {
          return m(r.value0)(k.foldr(n)(m)(l)(r.value1));
        };
      };
    });
  };
})(PS);

(function (a) {
  a["Data.List.Types"] = a["Data.List.Types"] || {};

  var c = a["Data.List.Types"],
      f = a["Control.Alt"],
      k = a["Control.Plus"],
      g = a["Data.Foldable"],
      b = a["Data.Function"],
      e = a["Data.Functor"],
      d = a["Data.Monoid"],
      n = a["Data.NonEmpty"],
      m = a["Data.Semigroup"],
      l = a["Data.Show"],
      r = function () {
    function w() {}

    w.value = new w();
    return w;
  }(),
      x = function () {
    function w(F, E) {
      this.value0 = F;
      this.value1 = E;
    }

    w.create = function (F) {
      return function (E) {
        return new w(F, E);
      };
    };

    return w;
  }(),
      z = new e.Functor(function (w) {
    return function (F) {
      return function (E) {
        function v(X, M) {
          if (M instanceof x && M.value1 instanceof x && M.value1.value1 instanceof x) C = new x(M, X), E = M.value1.value1.value1;else return L = !0, function (K) {
            return function (O) {
              for (var p = K, Q = !1, I; !Q;) {
                I = p;
                var R = O;
                I instanceof x && I.value0 instanceof x && I.value0.value1 instanceof x && I.value0.value1.value1 instanceof x ? (p = I.value1, O = new x(w(I.value0.value0), new x(w(I.value0.value1.value0), new x(w(I.value0.value1.value1.value0), R))), I = void 0) : (Q = !0, I = R);
              }

              return I;
            };
          }(X)(function (K) {
            return K instanceof x && K.value1 instanceof x && K.value1.value1 instanceof r ? new x(w(K.value0), new x(w(K.value1.value0), r.value)) : K instanceof x && K.value1 instanceof r ? new x(w(K.value0), r.value) : r.value;
          }(M));
        }

        for (var C = F, L = !1, G; !L;) {
          G = v(C, E);
        }

        return G;
      };
    }(r.value);
  });

  a = n.functorNonEmpty(z);

  var t = new g.Foldable(function (w) {
    return function (F) {
      return g.foldl(t)(function (E) {
        var v = m.append(w.Semigroup0())(E);
        return function (C) {
          return v(F(C));
        };
      })(d.mempty(w));
    };
  }, function (w) {
    return function (F) {
      return function (E) {
        for (var v = F, C = !1, L; !C;) {
          L = v;
          var G = E;
          if (G instanceof r) C = !0;else {
            if (G instanceof x) v = w(L)(G.value0), E = G.value1;else throw Error("Failed pattern match at Data.List.Types (line 109, column 12 - line 111, column 30): " + [G.constructor.name]);
            L = void 0;
          }
        }

        return L;
      };
    };
  }, function (w) {
    return function (F) {
      var E = g.foldl(t)(b.flip(x.create))(r.value),
          v = g.foldl(t)(b.flip(w))(F);
      return function (C) {
        return v(E(C));
      };
    };
  }),
      q = n.foldableNonEmpty(t),
      u = new m.Semigroup(function (w) {
    return function (F) {
      return g.foldr(t)(x.create)(F)(w);
    };
  }),
      A = new d.Monoid(function () {
    return u;
  }, r.value),
      y = function y(w) {
    return new l.Show(function (F) {
      return F instanceof r ? "Nil" : "(" + (g.intercalate(t)(d.monoidString)(" : ")(e.map(z)(l.show(w))(F)) + " : Nil)");
    });
  },
      B = new f.Alt(function () {
    return z;
  }, m.append(u));

  f = new k.Plus(function () {
    return B;
  }, r.value);
  c.Nil = r;
  c.Cons = x;

  c.NonEmptyList = function (w) {
    return w;
  };

  c.monoidList = A;
  c.foldableList = t;
  c.plusList = f;

  c.showNonEmptyList = function (w) {
    return new l.Show(function (F) {
      return "(NonEmptyList " + (l.show(n.showNonEmpty(w)(y(w)))(F) + ")");
    });
  };

  c.functorNonEmptyList = a;
  c.foldableNonEmptyList = q;
})(PS);

(function (a) {
  a["Data.List"] = a["Data.List"] || {};

  var c = a["Data.List"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      d = a["Control.Monad.Rec.Class"],
      n = a["Data.Bifunctor"],
      m = a["Data.Functor"],
      l = a["Data.List.Types"],
      r = a["Data.Unit"],
      x = function () {
    return function (q) {
      return function (u) {
        for (var A = q, y = !1, B; !y;) {
          B = A;
          var w = u;
          if (w instanceof l.Nil) y = !0;else {
            if (w instanceof l.Cons) A = new l.Cons(w.value0, B), u = w.value1;else throw Error("Failed pattern match at Data.List (line 368, column 3 - line 368, column 19): " + [B.constructor.name, w.constructor.name]);
            B = void 0;
          }
        }

        return B;
      };
    }(l.Nil.value);
  }(),
      z = function z(q) {
    return function (u) {
      return function (A) {
        return g.apply(q.Applicative0().Apply0())(m.map(q.Plus1().Alt0().Functor0())(l.Cons.create)(A))(e.defer(u)(function (y) {
          return t(q)(u)(A);
        }));
      };
    };
  },
      t = function t(q) {
    return function (u) {
      return function (A) {
        return f.alt(q.Plus1().Alt0())(z(q)(u)(A))(k.pure(q.Applicative0())(l.Nil.value));
      };
    };
  };

  c.some = z;

  c.manyRec = function (q) {
    return function (u) {
      return function (A) {
        return d.tailRecM(q)(function (y) {
          return b.bind(q.Monad0().Bind1())(f.alt(u.Plus1().Alt0())(m.map(u.Plus1().Alt0().Functor0())(d.Loop.create)(A))(k.pure(u.Applicative0())(new d.Done(r.unit))))(function (B) {
            return k.pure(u.Applicative0())(n.bimap(d.bifunctorStep)(function (w) {
              return new l.Cons(w, y);
            })(function (w) {
              return x(y);
            })(B));
          });
        })(l.Nil.value);
      };
    };
  };

  c.reverse = x;
})(PS);

(function (a) {
  a["Data.Tuple"] = a["Data.Tuple"] || {};
  var c = a["Data.Tuple"];
  a = a["Data.Functor"];

  var f = function () {
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
      return new f(g.value0, k(g.value1));
    };
  });
  c.Tuple = f;

  c.fst = function (k) {
    return k.value0;
  };

  c.snd = function (k) {
    return k.value1;
  };

  c.functorTuple = a;
})(PS);

(function (a) {
  a["Data.CatQueue"] = a["Data.CatQueue"] || {};

  var c = a["Data.CatQueue"],
      f = a["Data.List"],
      k = a["Data.List.Types"],
      g = a["Data.Maybe"],
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

  a = new e(k.Nil.value, k.Nil.value);
  c.empty = a;

  c["null"] = function (d) {
    return d.value0 instanceof k.Nil && d.value1 instanceof k.Nil ? !0 : !1;
  };

  c.snoc = function (d) {
    return function (n) {
      return new e(d.value0, new k.Cons(n, d.value1));
    };
  };

  c.uncons = function (d) {
    for (var n = !1, m; !n;) {
      if (m = d, m.value0 instanceof k.Nil && m.value1 instanceof k.Nil) n = !0, m = g.Nothing.value;else if (m.value0 instanceof k.Nil) d = new e(f.reverse(m.value1), k.Nil.value), m = void 0;else if (m.value0 instanceof k.Cons) n = !0, m = new g.Just(new b.Tuple(m.value0.value0, new e(m.value0.value1, m.value1)));else throw Error("Failed pattern match at Data.CatQueue (line 83, column 1 - line 83, column 63): " + [m.constructor.name]);
    }

    return m;
  };
})(PS);

(function (a) {
  a["Data.CatList"] = a["Data.CatList"] || {};

  var c = a["Data.CatList"],
      f = a["Data.CatQueue"],
      k = a["Data.List.Types"],
      g = a["Data.Maybe"],
      b = a["Data.Semigroup"],
      e = a["Data.Tuple"],
      d = function () {
    function r() {}

    r.value = new r();
    return r;
  }(),
      n = function () {
    function r(x, z) {
      this.value0 = x;
      this.value1 = z;
    }

    r.create = function (x) {
      return function (z) {
        return new r(x, z);
      };
    };

    return r;
  }(),
      m = function m(r) {
    return function (x) {
      if (r instanceof d) return x;
      if (x instanceof d) return r;
      if (r instanceof n) return new n(r.value0, f.snoc(r.value1)(x));
      throw Error("Failed pattern match at Data.CatList (line 109, column 1 - line 109, column 54): " + [r.constructor.name, x.constructor.name]);
    };
  },
      l = function l(r) {
    return function (x) {
      return function (z) {
        var t = function t(q) {
          return function (u) {
            return function (A) {
              for (var y = q, B = u, w = !1, F; !w;) {
                F = y;
                var E = B,
                    v = A;
                if (v instanceof k.Nil) w = !0, F = E;else {
                  if (v instanceof k.Cons) y = F, B = F(E)(v.value0), A = v.value1;else throw Error("Failed pattern match at Data.CatList (line 125, column 3 - line 125, column 59): " + [F.constructor.name, E.constructor.name, v.constructor.name]);
                  F = void 0;
                }
              }

              return F;
            };
          };
        };

        return function (q) {
          return function (u) {
            function A(F, E) {
              F = f.uncons(F);
              if (F instanceof g.Nothing) return B = !0, t(function (v) {
                return function (C) {
                  return C(v);
                };
              })(x)(E);
              if (F instanceof g.Just) y = F.value0.value1, u = new k.Cons(r(F.value0.value0), E);else throw Error("Failed pattern match at Data.CatList (line 121, column 14 - line 123, column 67): " + [F.constructor.name]);
            }

            for (var y = q, B = !1, w; !B;) {
              w = A(y, u);
            }

            return w;
          };
        }(z)(k.Nil.value);
      };
    };
  };

  a = d.value;
  b = new b.Semigroup(m);
  c.empty = a;

  c.snoc = function (r) {
    return function (x) {
      return m(r)(new n(x, f.empty));
    };
  };

  c.uncons = function (r) {
    if (r instanceof d) return g.Nothing.value;

    if (r instanceof n) {
      var x = g.Just,
          z = e.Tuple,
          t = r.value0;
      r = f["null"](r.value1) ? d.value : l(m)(d.value)(r.value1);
      return new x(new z(t, r));
    }

    throw Error("Failed pattern match at Data.CatList (line 100, column 1 - line 100, column 61): " + [r.constructor.name]);
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
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.CatList"],
      d = a["Data.Either"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      l = a["Data.Semigroup"],
      r = a["Unsafe.Coerce"],
      x = function () {
    function F(E, v) {
      this.value0 = E;
      this.value1 = v;
    }

    F.create = function (E) {
      return function (v) {
        return new F(E, v);
      };
    };

    return F;
  }(),
      z = function () {
    function F(E) {
      this.value0 = E;
    }

    F.create = function (E) {
      return new F(E);
    };

    return F;
  }(),
      t = function () {
    function F(E, v) {
      this.value0 = E;
      this.value1 = v;
    }

    F.create = function (E) {
      return function (v) {
        return new F(E, v);
      };
    };

    return F;
  }(),
      q = function q(F) {
    function E(L) {
      var G = function G(M) {
        return function (K) {
          return new x(M.value0, l.append(e.semigroupCatList)(M.value1)(K));
        };
      };

      if (L.value0 instanceof z) {
        var X = e.uncons(L.value1);
        if (X instanceof m.Nothing) return v = !0, new z(L.value0.value0);

        if (X instanceof m.Just) {
          F = G((0, X.value0.value0)(L.value0.value0))(X.value0.value1);
          return;
        }

        throw Error("Failed pattern match at Control.Monad.Free (line 227, column 7 - line 231, column 64): " + [X.constructor.name]);
      }

      if (L.value0 instanceof t) return v = !0, new t(L.value0.value0, function (M) {
        return G(L.value0.value1(M))(L.value1);
      });
      throw Error("Failed pattern match at Control.Monad.Free (line 225, column 3 - line 233, column 56): " + [L.value0.constructor.name]);
    }

    for (var v = !1, C; !v;) {
      C = E(F);
    }

    return C;
  },
      u = function u(F) {
    return function (E) {
      return function (v) {
        v = q(v);
        if (v instanceof z) return E(v.value0);
        if (v instanceof t) return F(v.value0)(v.value1);
        throw Error("Failed pattern match at Control.Monad.Free (line 213, column 17 - line 215, column 20): " + [v.constructor.name]);
      };
    };
  };

  a = new b.Monad(function () {
    return w;
  }, function () {
    return y;
  });
  var A = new n.Functor(function (F) {
    return function (E) {
      return g.bindFlipped(y)(function () {
        var v = f.pure(w);
        return function (C) {
          return v(F(C));
        };
      }())(E);
    };
  }),
      y = new g.Bind(function () {
    return B;
  }, function (F) {
    return function (E) {
      return new x(F.value0, e.snoc(F.value1)(E));
    };
  }),
      B = new k.Apply(function () {
    return A;
  }, b.ap(a)),
      w = new f.Applicative(function () {
    return B;
  }, function (F) {
    return new x(z.create(F), e.empty);
  });

  c.wrap = function (F) {
    return new x(new t(F, r.unsafeCoerce), e.empty);
  };

  c.liftF = function (F) {
    return new x(new t(F, function () {
      var E = f.pure(w);
      return function (v) {
        return E(v);
      };
    }()), e.empty);
  };

  c.resume = function (F) {
    return u(function (E) {
      return function (v) {
        return new d.Left(n.map(F)(v)(E));
      };
    })(d.Right.create);
  };

  c["resume'"] = u;
  c.freeFunctor = A;
  c.freeBind = y;
  c.freeApplicative = w;
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

  a.Parallel = function (c, f, k, g) {
    this.Applicative1 = c;
    this.Monad0 = f;
    this.parallel = k;
    this.sequential = g;
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
      for (var k = c > f ? -1 : 1, g = Array(k * (f - c) + 1), b = c, e = 0; b !== f;) {
        g[e++] = b, b += k;
      }

      g[e] = b;
      return g;
    };
  };

  a.fromFoldableImpl = function () {
    function c(g, b) {
      this.head = g;
      this.tail = b;
    }

    function f(g) {
      return function (b) {
        return new c(g, b);
      };
    }

    var k = {};
    return function (g) {
      return function (b) {
        var e = [],
            d = 0;

        for (b = g(f)(k)(b); b !== k;) {
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
      var k = c.slice();
      k.push(f);
      return k;
    };
  };

  a["uncons'"] = function (c) {
    return function (f) {
      return function (k) {
        return 0 === k.length ? c({}) : f(k[0])(k.slice(1));
      };
    };
  };

  a.indexImpl = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return 0 > g || g >= k.length ? f : c(k[g]);
        };
      };
    };
  };

  a._updateAt = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            if (0 > k || k >= b.length) return f;
            b = b.slice();
            b[k] = g;
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
      return function (k) {
        return k.slice(c, f);
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
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Category"],
      n = a["Control.Lazy"],
      m = a["Data.Boolean"],
      l = a["Data.Foldable"],
      r = a["Data.Function"],
      x = a["Data.Functor"],
      z = a["Data.Maybe"];
  a = f._updateAt(z.Just.create)(z.Nothing.value);

  var t = f["uncons'"](r["const"](z.Nothing.value))(function (w) {
    return function (F) {
      return new z.Just({
        head: w,
        tail: F
      });
    };
  }),
      q = function q(w) {
    return [w];
  },
      u = function u(w) {
    return function (F) {
      return function (E) {
        return b.apply(w.Applicative0().Apply0())(x.map(w.Plus1().Alt0().Functor0())(f.cons)(E))(n.defer(F)(function (v) {
          return A(w)(F)(E);
        }));
      };
    };
  },
      A = function A(w) {
    return function (F) {
      return function (E) {
        return k.alt(w.Plus1().Alt0())(u(w)(F)(E))(g.pure(w.Applicative0())([]));
      };
    };
  },
      y = f.indexImpl(z.Just.create)(z.Nothing.value),
      B = r.flip(e.bind(e.bindArray));

  e = function (w) {
    return B(function () {
      var F = z.maybe([])(q);
      return function (E) {
        return F(w(E));
      };
    }());
  }(d.identity(d.categoryFn));

  c.fromFoldable = function (w) {
    return f.fromFoldableImpl(l.foldr(w));
  };

  c.singleton = q;
  c.some = u;

  c.head = function (w) {
    return y(w)(0);
  };

  c.init = function (w) {
    if (0 === f.length(w)) return z.Nothing.value;
    if (m.otherwise) return new z.Just(f.slice(0)(f.length(w) - 1 | 0)(w));
    throw Error("Failed pattern match at Data.Array (line 323, column 1 - line 323, column 45): " + [w.constructor.name]);
  };

  c.uncons = t;
  c.updateAt = a;
  c.concatMap = B;
  c.catMaybes = e;
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
      k = a["Data.Boolean"],
      g = a["Data.Maybe"];
  a = a["Unsafe.Coerce"];
  var b = a.unsafeCoerce,
      e = a.unsafeCoerce,
      d = a.unsafeCoerce;

  a = function (m) {
    var l = g.fromJust();
    return function (r) {
      return l(m(d(r)));
    };
  }(f.uncons);

  var n = function (m) {
    return function (l) {
      return m(d(l));
    };
  }(f.length);

  c.fromArray = function (m) {
    if (0 < f.length(m)) return new g.Just(e(m));
    if (k.otherwise) return g.Nothing.value;
    throw Error("Failed pattern match at Data.Array.NonEmpty (line 134, column 1 - line 134, column 58): " + [m.constructor.name]);
  };

  c.toArray = d;

  c.singleton = function (m) {
    return e(f.singleton(m));
  };

  c.length = n;

  c["cons'"] = function (m) {
    return function (l) {
      return e(f.cons(m)(l));
    };
  };

  c.snoc = function (m) {
    return function (l) {
      return e(f.snoc(d(m))(l));
    };
  };

  c.uncons = a;

  c.updateAt = function (m) {
    return function (l) {
      var r = f.updateAt(m)(l);
      return function (x) {
        return b(r(d(x)));
      };
    };
  };
})(PS);

(function (a) {
  a.fold1Impl = function (c) {
    return function (f) {
      for (var k = f[0], g = f.length, b = 1; b < g; b++) {
        k = c(k)(f[b]);
      }

      return k;
    };
  };
})(PS["Data.Array.NonEmpty.Internal"] = PS["Data.Array.NonEmpty.Internal"] || {});

(function (a) {
  a.mapWithIndexArray = function (c) {
    return function (f) {
      for (var k = f.length, g = Array(k), b = 0; b < k; b++) {
        g[b] = c(b)(f[b]);
      }

      return g;
    };
  };
})(PS["Data.FunctorWithIndex"] = PS["Data.FunctorWithIndex"] || {});

(function (a) {
  a["Data.FunctorWithIndex"] = a["Data.FunctorWithIndex"] || {};
  var c = a["Data.FunctorWithIndex"],
      f = a["Data.Functor"];
  a = new function (k, g) {
    this.Functor0 = k;
    this.mapWithIndex = g;
  }(function () {
    return f.functorArray;
  }, a["Data.FunctorWithIndex"].mapWithIndexArray);

  c.mapWithIndex = function (k) {
    return k.mapWithIndex;
  };

  c.functorWithIndexArray = a;
})(PS);

(function (a) {
  a["Data.FoldableWithIndex"] = a["Data.FoldableWithIndex"] || {};

  var c = a["Data.FoldableWithIndex"],
      f = a["Data.Foldable"],
      k = a["Data.FunctorWithIndex"],
      g = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = function () {
    function m(l, r) {
      this.value0 = l;
      this.value1 = r;
    }

    m.create = function (l) {
      return function (r) {
        return new m(l, r);
      };
    };

    return m;
  }(),
      d = function d(m) {
    return function (l) {
      return function (r) {
        return (0, m.foldrWithIndex)(function (x) {
          return function (z) {
            return function (t) {
              return b.append(l.Semigroup0())(r(x)(z))(t);
            };
          };
        })(g.mempty(l));
      };
    };
  },
      n = new function (m, l, r, x) {
    this.Foldable0 = m;
    this.foldMapWithIndex = l;
    this.foldlWithIndex = r;
    this.foldrWithIndex = x;
  }(function () {
    return f.foldableArray;
  }, function (m) {
    return d(n)(m);
  }, function (m) {
    return function (l) {
      var r = f.foldl(f.foldableArray)(function (z) {
        return function (t) {
          return m(t.value0)(z)(t.value1);
        };
      })(l),
          x = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (z) {
        return r(x(z));
      };
    };
  }, function (m) {
    return function (l) {
      var r = f.foldr(f.foldableArray)(function (z) {
        return function (t) {
          return m(z.value0)(z.value1)(t);
        };
      })(l),
          x = k.mapWithIndex(k.functorWithIndexArray)(e.create);
      return function (z) {
        return r(x(z));
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

  c.Foldable1 = function (k, g, b) {
    this.Foldable0 = k;
    this.fold1 = g;
    this.foldMap1 = b;
  };

  c.foldMap1 = function (k) {
    return k.foldMap1;
  };

  c.foldMap1Default = function (k) {
    return function (g) {
      return function (b) {
        return function (e) {
          var d = (0, k.fold1)(b),
              n = f.map(g)(e);
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

    function k(b) {
      return function (e) {
        return function (d) {
          return [b, e, d];
        };
      };
    }

    function g(b) {
      return function (e) {
        return b.concat(e);
      };
    }

    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return function (m) {
              function l(r, x) {
                switch (x - r) {
                  case 0:
                    return d([]);

                  case 1:
                    return e(c)(n(m[r]));

                  case 2:
                    return b(e(f)(n(m[r])))(n(m[r + 1]));

                  case 3:
                    return b(b(e(k)(n(m[r])))(n(m[r + 1])))(n(m[r + 2]));

                  default:
                    var z = r + 2 * Math.floor((x - r) / 4);
                    return b(e(g)(l(r, z)))(l(z, x));
                }
              }

              return l(0, m.length);
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
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Category"],
      e = a["Data.Foldable"],
      d = a["Data.Functor"],
      n = a["Data.Maybe"];

  a = function a(x, z, t, q) {
    this.Foldable1 = x;
    this.Functor0 = z;
    this.sequence = t;
    this.traverse = q;
  };

  var m = new a(function () {
    return e.foldableMaybe;
  }, function () {
    return n.functorMaybe;
  }, function (x) {
    return function (z) {
      if (z instanceof n.Nothing) return k.pure(x)(n.Nothing.value);
      if (z instanceof n.Just) return d.map(x.Apply0().Functor0())(n.Just.create)(z.value0);
      throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [z.constructor.name]);
    };
  }, function (x) {
    return function (z) {
      return function (t) {
        if (t instanceof n.Nothing) return k.pure(x)(n.Nothing.value);
        if (t instanceof n.Just) return d.map(x.Apply0().Functor0())(n.Just.create)(z(t.value0));
        throw Error("Failed pattern match at Data.Traversable (line 86, column 1 - line 90, column 33): " + [z.constructor.name, t.constructor.name]);
      };
    };
  }),
      l = function l(x) {
    return function (z) {
      return (0, x.traverse)(z)(b.identity(b.categoryFn));
    };
  },
      r = new a(function () {
    return e.foldableArray;
  }, function () {
    return d.functorArray;
  }, function (x) {
    return l(r)(x);
  }, function (x) {
    return f.traverseArrayImpl(g.apply(x.Apply0()))(d.map(x.Apply0().Functor0()))(k.pure(x));
  });

  c.traverse = function (x) {
    return x.traverse;
  };

  c.sequence = function (x) {
    return x.sequence;
  };

  c.traversableArray = r;
  c.traversableMaybe = m;
})(PS);

(function (a) {
  a.unfoldr1ArrayImpl = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (e) {
              for (var d = [];;) {
                e = b(e);
                d.push(k(e));
                e = g(e);
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
      k = a["Data.Maybe"],
      g = a["Data.Tuple"];
  a = new function (e) {
    this.unfoldr1 = e;
  }(a["Data.Unfoldable1"].unfoldr1ArrayImpl(k.isNothing)(k.fromJust())(g.fst)(g.snd));

  var b = function b(e) {
    return function (d) {
      return function (n) {
        return (0, e.unfoldr1)(function (m) {
          if (0 >= m) return new g.Tuple(n, k.Nothing.value);
          if (f.otherwise) return new g.Tuple(n, new k.Just(m - 1 | 0));
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
      k = a["Data.Semigroup"],
      g = a["Data.Semigroup.Foldable"],
      b = a["Data.Unfoldable1"].unfoldable1Array,
      e = a["Data.Traversable"].traversableArray,
      d = k.semigroupArray,
      n = a["Data.Functor"].functorArray,
      m = a["Data.FoldableWithIndex"].foldableWithIndexArray,
      l = a["Data.Foldable"].foldableArray,
      r = new g.Foldable1(function () {
    return l;
  }, function (x) {
    return f.fold1Impl(k.append(x));
  }, function (x) {
    return g.foldMap1Default(r)(n)(x);
  });
  c.semigroupNonEmptyArray = d;
  c.functorNonEmptyArray = n;
  c.foldableNonEmptyArray = l;
  c.foldableWithIndexNonEmptyArray = m;
  c.foldable1NonEmptyArray = r;
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
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"];
  a = a["Data.Functor"];
  var d = new e.Monad(function () {
    return l;
  }, function () {
    return n;
  }),
      n = new b.Bind(function () {
    return m;
  }, f.bindE),
      m = new g.Apply(function () {
    return r;
  }, e.ap(d)),
      l = new k.Applicative(function () {
    return m;
  }, f.pureE),
      r = new a.Functor(k.liftA1(l));
  c.functorEffect = r;
  c.applyEffect = m;
  c.applicativeEffect = l;
  c.bindEffect = n;
  c.monadEffect = d;
})(PS);

(function (a) {
  var c = function () {
    function f() {
      this.last = this.head = null;
      this.size = 0;
    }

    function k(m, l) {
      this.queue = m;
      this.value = l;
      this.prev = this.next = null;
    }

    function g(m) {
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
      } catch (l) {
        setTimeout(function () {
          throw l;
        }, 0);
      }
    }

    function e(m) {
      switch (m.size) {
        case 0:
          return null;

        case 1:
          var l = m.head;
          m.head = null;
          break;

        case 2:
          l = m.last;
          m.head.next = null;
          m.last = null;
          break;

        default:
          l = m.last, m.last = l.prev, m.last.next = null;
      }

      l.prev = null;
      l.queue = null;
      m.size--;
      return l.value;
    }

    function d(m) {
      switch (m.size) {
        case 0:
          return null;

        case 1:
          var l = m.head;
          m.head = null;
          break;

        case 2:
          l = m.head;
          m.last.prev = null;
          m.head = m.last;
          m.last = null;
          break;

        default:
          l = m.head, m.head = l.next, m.head.prev = null;
      }

      l.next = null;
      l.queue = null;
      m.size--;
      return l.value;
    }

    var n = {};
    g.EMPTY = n;

    g.putLast = function (m, l) {
      l = new k(m, l);

      switch (m.size) {
        case 0:
          m.head = l;
          break;

        case 1:
          l.prev = m.head;
          m.head.next = l;
          m.last = l;
          break;

        default:
          l.prev = m.last, m.last.next = l, m.last = l;
      }

      m.size++;
      return l;
    };

    g.takeLast = e;
    g.takeHead = d;

    g.deleteCell = function (m) {
      null !== m.queue && (m.queue.last === m ? e(m.queue) : m.queue.head === m ? d(m.queue) : (m.prev && (m.prev.next = m.next), m.next && (m.next.prev = m.prev), m.queue.size--, m.queue = null, m.value = null, m.next = null, m.prev = null));
    };

    g.drainVar = function (m, l) {
      if (!l.draining) {
        var r = l.puts,
            x = l.takes,
            z = l.reads,
            t,
            q;

        for (l.draining = !0;;) {
          var u = t = null;
          var A = l.value;
          var y = z.size;

          if (null !== l.error) {
            for (A = m.left(l.error); t = d(r);) {
              b(t.cb(A));
            }

            for (; u = d(z);) {
              b(u(A));
            }

            for (; q = d(x);) {
              b(q(A));
            }

            break;
          }

          A === n && (t = d(r)) && (l.value = A = t.value);

          if (A !== n) {
            for (q = d(x); y-- && (u = d(z));) {
              b(u(m.right(A)));
            }

            null !== q && (l.value = n, b(q(m.right(A))));
          }

          null !== t && b(t.cb(m.right(void 0)));
          if (l.value === n && 0 === r.size || l.value !== n && 0 === x.size) break;
        }

        l.draining = !1;
      }
    };

    return g;
  }();

  a.empty = function () {
    return new c(c.EMPTY);
  };

  a._takeVar = function (f, k, g) {
    return function () {
      var b = c.putLast(k.takes, g);
      c.drainVar(f, k);
      return function () {
        c.deleteCell(b);
      };
    };
  };

  a._tryPutVar = function (f, k, g) {
    return function () {
      return g.value === c.EMPTY && null === g.error ? (g.value = k, c.drainVar(f, g), !0) : !1;
    };
  };

  a._tryTakeVar = function (f, k) {
    return function () {
      var g = k.value;
      if (g === c.EMPTY) return f.nothing;
      k.value = c.EMPTY;
      c.drainVar(f, k);
      return f.just(g);
    };
  };
})(PS["Effect.AVar"] = PS["Effect.AVar"] || {});

(function (a) {
  a["Effect.AVar"] = a["Effect.AVar"] || {};
  var c = a["Effect.AVar"],
      f = a["Effect.AVar"],
      k = a["Data.Either"];
  a = a["Data.Maybe"];

  var g = function () {
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
    left: k.Left.create,
    right: k.Right.create,
    nothing: a.Nothing.value,
    just: a.Just.create,
    killed: g.create,
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
    function f(z, t, q, u) {
      this.tag = z;
      this._1 = t;
      this._2 = q;
      this._3 = u;
    }

    function k(z) {
      var t = function t(q, u, A) {
        return new f(z, q, u, A);
      };

      t.tag = z;
      return t;
    }

    function g(z) {
      return new f("Pure", void 0);
    }

    function b(z) {
      try {
        z();
      } catch (t) {
        setTimeout(function () {
          throw t;
        }, 0);
      }
    }

    function e(z, t, q) {
      try {
        return t(q());
      } catch (u) {
        return z(u);
      }
    }

    function d(z, t, q) {
      try {
        return t(q)();
      } catch (u) {
        return q(z(u))(), g;
      }
    }

    function n(z, t, q) {
      function u(O) {
        for (var p, Q, I;;) {
          switch (I = Q = p = null, B) {
            case 2:
              B = 1;

              try {
                w = v(w), null === C ? v = null : (v = C._1, C = C._2);
              } catch (fa) {
                B = 5, F = z.left(fa), w = null;
              }

              break;

            case 3:
              z.isLeft(w) ? (B = 5, F = w, w = null) : null === v ? B = 5 : (B = 2, w = z.fromRight(w));
              break;

            case 1:
              switch (w.tag) {
                case "Bind":
                  v && (C = new f("Cons", v, C));
                  v = w._2;
                  B = 1;
                  w = w._1;
                  break;

                case "Pure":
                  null === v ? (B = 5, w = z.right(w._1)) : (B = 2, w = w._1);
                  break;

                case "Sync":
                  B = 3;
                  w = e(z.left, z.right, w._1);
                  break;

                case "Async":
                  B = 4;
                  w = d(z.left, w._1, function (fa) {
                    return function () {
                      y === O && (y++, x.enqueue(function () {
                        y === O + 1 && (B = 3, w = fa, u(y));
                      }));
                    };
                  });
                  return;

                case "Throw":
                  B = 5;
                  F = z.left(w._1);
                  w = null;
                  break;

                case "Catch":
                  L = null === v ? new f("Cons", w, L, E) : new f("Cons", w, new f("Cons", new f("Resume", v, C), L, E), E);
                  C = v = null;
                  B = 1;
                  w = w._1;
                  break;

                case "Bracket":
                  G++;
                  L = null === v ? new f("Cons", w, L, E) : new f("Cons", w, new f("Cons", new f("Resume", v, C), L, E), E);
                  C = v = null;
                  B = 1;
                  w = w._1;
                  break;

                case "Fork":
                  B = 3;
                  p = n(z, t, w._2);
                  t && t.register(p);
                  w._1 && p.run();
                  w = z.right(p);
                  break;

                case "Sequential":
                  B = 1, w = l(z, t, w._1);
              }

              break;

            case 5:
              C = v = null;
              if (null === L) B = 6, w = E || F || w;else switch (p = L._3, I = L._1, L = L._2, I.tag) {
                case "Catch":
                  E && E !== p && 0 === G ? B = 5 : F && (B = 1, w = I._2(z.fromLeft(F)), F = null);
                  break;

                case "Resume":
                  E && E !== p && 0 === G || F ? B = 5 : (v = I._1, C = I._2, B = 2, w = z.fromRight(w));
                  break;

                case "Bracket":
                  G--;
                  null === F && (Q = z.fromRight(w), L = new f("Cons", new f("Release", I._2, Q), L, p), E === p || 0 < G) && (B = 1, w = I._3(Q));
                  break;

                case "Release":
                  L = new f("Cons", new f("Finalized", w, F), L, E);
                  B = 1;
                  w = E && E !== p && 0 === G ? I._1.killed(z.fromLeft(E))(I._2) : F ? I._1.failed(z.fromLeft(F))(I._2) : I._1.completed(z.fromRight(w))(I._2);
                  F = null;
                  G++;
                  break;

                case "Finalizer":
                  G++;
                  L = new f("Cons", new f("Finalized", w, F), L, E);
                  B = 1;
                  w = I._1;
                  break;

                case "Finalized":
                  G--, B = 5, w = I._1, F = I._2;
              }
              break;

            case 6:
              for (var R in M) {
                M.hasOwnProperty(R) && (K = K && M[R].rethrow, b(M[R].handler(w)));
              }

              M = null;
              E && F ? setTimeout(function () {
                throw z.fromLeft(F);
              }, 0) : z.isLeft(w) && K && setTimeout(function () {
                if (K) throw z.fromLeft(w);
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

      function A(O) {
        return function () {
          if (6 === B) return K = K && O.rethrow, O.handler(w)(), function () {};
          var p = X++;
          M = M || {};
          M[p] = O;
          return function () {
            null !== M && delete M[p];
          };
        };
      }

      var y = 0,
          B = 0,
          w = q,
          F = null,
          E = null,
          v = null,
          C = null,
          L = null,
          G = 0,
          X = 0,
          M = null,
          K = !0;
      return {
        kill: function kill(O, p) {
          return function () {
            if (6 === B) return p(z.right(void 0))(), function () {};
            var Q = A({
              rethrow: !1,
              handler: function handler() {
                return p(z.right(void 0));
              }
            })();

            switch (B) {
              case 0:
                E = z.left(O);
                B = 6;
                w = E;
                u(y);
                break;

              case 4:
                null === E && (E = z.left(O));
                0 === G && (4 === B && (L = new f("Cons", new f("Finalizer", w(O)), L, E)), B = 5, F = w = null, u(++y));
                break;

              default:
                null === E && (E = z.left(O)), 0 === G && (B = 5, F = w = null);
            }

            return Q;
          };
        },
        join: function join(O) {
          return function () {
            var p = A({
              rethrow: !1,
              handler: O
            })();
            0 === B && u(y);
            return p;
          };
        },
        onComplete: A,
        isSuspended: function isSuspended() {
          return 0 === B;
        },
        run: function run() {
          0 === B && (x.isDraining() ? u(y) : x.enqueue(function () {
            u(y);
          }));
        }
      };
    }

    function m(z, t, q, u) {
      function A(M, K, O) {
        var p = K,
            Q = null,
            I = null,
            R = 0;
        K = {};

        a: for (;;) {
          var fa = null;

          switch (p.tag) {
            case "Forked":
              p._3 === r && (fa = E[p._1], K[R++] = fa.kill(M, function (T) {
                return function () {
                  R--;
                  0 === R && O(T)();
                };
              }));
              if (null === Q) break a;
              p = Q._2;
              null === I ? Q = null : (Q = I._1, I = I._2);
              break;

            case "Map":
              p = p._2;
              break;

            case "Apply":
            case "Alt":
              Q && (I = new f("Cons", Q, I)), Q = p, p = p._1;
          }
        }

        if (0 === R) O(z.right(void 0))();else for (M = 0, fa = R; M < fa; M++) {
          K[M] = K[M]();
        }
        return K;
      }

      function y(M, K, O) {
        var p, Q;

        if (z.isLeft(M)) {
          var I = M;
          var R = null;
        } else R = M, I = null;

        for (;;) {
          var fa = Q = p = M = null;
          if (null !== G) break;

          if (null === K) {
            u(I || R)();
            break;
          }

          if (K._3 !== r) break;

          switch (K.tag) {
            case "Map":
              null === I ? (K._3 = z.right(K._1(z.fromRight(R))), R = K._3) : K._3 = I;
              break;

            case "Apply":
              M = K._1._3;
              p = K._2._3;

              if (I) {
                if (K._3 = I, Q = !0, fa = v++, C[fa] = A(L, I === M ? K._2 : K._1, function () {
                  return function () {
                    delete C[fa];
                    Q ? Q = !1 : null === O ? y(I, null, null) : y(I, O._1, O._2);
                  };
                }), Q) {
                  Q = !1;
                  return;
                }
              } else {
                if (M === r || p === r) return;
                R = z.right(z.fromRight(M)(z.fromRight(p)));
                K._3 = R;
              }

              break;

            case "Alt":
              M = K._1._3;
              p = K._2._3;
              if (M === r && z.isLeft(p) || p === r && z.isLeft(M)) return;
              if (M !== r && z.isLeft(M) && p !== r && z.isLeft(p)) I = R === M ? p : M, R = null, K._3 = I;else if (K._3 = R, Q = !0, fa = v++, C[fa] = A(L, R === M ? K._2 : K._1, function () {
                return function () {
                  delete C[fa];
                  Q ? Q = !1 : null === O ? y(R, null, null) : y(R, O._1, O._2);
                };
              }), Q) {
                Q = !1;
                return;
              }
          }

          null === O ? K = null : (K = O._1, O = O._2);
        }
      }

      function B(M) {
        return function (K) {
          return function () {
            delete E[M._1];
            M._3 = K;
            y(K, M._2._1, M._2._2);
          };
        };
      }

      function w(M, K) {
        G = z.left(M);
        var O;

        for (O in C) {
          if (C.hasOwnProperty(O)) {
            var p = C[O];

            for (O in p) {
              if (p.hasOwnProperty(O)) p[O]();
            }
          }
        }

        C = null;
        var Q = A(M, X, K);
        return function (I) {
          return new f("Async", function (R) {
            return function () {
              for (var fa in Q) {
                if (Q.hasOwnProperty(fa)) Q[fa]();
              }

              return g;
            };
          });
        };
      }

      var F = 0,
          E = {},
          v = 0,
          C = {},
          L = Error("[ParAff] Early exit"),
          G = null,
          X = r;

      (function () {
        var M = 1,
            K = q,
            O = null,
            p = null;

        a: for (;;) {
          switch (M) {
            case 1:
              switch (K.tag) {
                case "Map":
                  O && (p = new f("Cons", O, p));
                  O = new f("Map", K._1, r, r);
                  K = K._2;
                  break;

                case "Apply":
                  O && (p = new f("Cons", O, p));
                  O = new f("Apply", r, K._2, r);
                  K = K._1;
                  break;

                case "Alt":
                  O && (p = new f("Cons", O, p));
                  O = new f("Alt", r, K._2, r);
                  K = K._1;
                  break;

                default:
                  var Q = F++;
                  M = 5;
                  var I = K;
                  K = new f("Forked", Q, new f("Cons", O, p), r);
                  I = n(z, t, I);
                  I.onComplete({
                    rethrow: !1,
                    handler: B(K)
                  })();
                  E[Q] = I;
                  t && t.register(I);
              }

              break;

            case 5:
              if (null === O) break a;
              O._1 === r ? (O._1 = K, M = 1, K = O._2, O._2 = r) : (O._2 = K, K = O, null === p ? O = null : (O = p._1, p = p._2));
          }
        }

        X = K;

        for (Q = 0; Q < F; Q++) {
          E[Q].run();
        }
      })();

      return function (M) {
        return new f("Async", function (K) {
          return function () {
            return w(M, K);
          };
        });
      };
    }

    function l(z, t, q) {
      return new f("Async", function (u) {
        return function () {
          return m(z, t, q, u);
        };
      });
    }

    var r = {},
        x = function () {
      function z() {
        for (A = !0; 0 !== t;) {
          t--;
          var y = u[q];
          u[q] = void 0;
          q = (q + 1) % 1024;
          y();
        }

        A = !1;
      }

      var t = 0,
          q = 0,
          u = Array(1024),
          A = !1;
      return {
        isDraining: function isDraining() {
          return A;
        },
        enqueue: function enqueue(y) {
          if (1024 === t) {
            var B = A;
            z();
            A = B;
          }

          u[(q + t) % 1024] = y;
          t++;
          A || z();
        }
      };
    }();

    f.EMPTY = r;
    f.Pure = k("Pure");
    f.Throw = k("Throw");
    f.Catch = k("Catch");
    f.Sync = k("Sync");
    f.Async = k("Async");
    f.Bind = k("Bind");
    f.Bracket = k("Bracket");
    f.Fork = k("Fork");
    f.Seq = k("Sequential");
    f.ParMap = k("Map");
    f.ParApply = k("Apply");
    f.ParAlt = k("Alt");
    f.Fiber = n;

    f.Supervisor = function (z) {
      var t = {},
          q = 0,
          u = 0;
      return {
        register: function register(A) {
          var y = q++;
          A.onComplete({
            rethrow: !0,
            handler: function handler(B) {
              return function () {
                u--;
                delete t[y];
              };
            }
          })();
          t[y] = A;
          u++;
        },
        isEmpty: function isEmpty() {
          return 0 === u;
        },
        killAll: function killAll(A, y) {
          return function () {
            function B(v) {
              F[v] = t[v].kill(A, function (C) {
                return function () {
                  delete F[v];
                  w--;
                  z.isLeft(C) && z.fromLeft(C) && setTimeout(function () {
                    throw z.fromLeft(C);
                  }, 0);
                  0 === w && y();
                };
              })();
            }

            if (0 === u) return y();
            var w = 0,
                F = {},
                E;

            for (E in t) {
              t.hasOwnProperty(E) && (w++, B(E));
            }

            t = {};
            u = q = 0;
            return function (v) {
              return new f("Sync", function () {
                for (var C in F) {
                  if (F.hasOwnProperty(C)) F[C]();
                }
              });
            };
          };
        }
      };
    };

    f.Scheduler = x;
    f.nonCanceler = g;
    return f;
  }();

  a._pure = c.Pure;
  a._throwError = c.Throw;

  a._catchError = function (f) {
    return function (k) {
      return c.Catch(f, k);
    };
  };

  a._map = function (f) {
    return function (k) {
      return k.tag === c.Pure.tag ? c.Pure(f(k._1)) : c.Bind(k, function (g) {
        return c.Pure(f(g));
      });
    };
  };

  a._bind = function (f) {
    return function (k) {
      return c.Bind(f, k);
    };
  };

  a._liftEffect = c.Sync;

  a._parAffMap = function (f) {
    return function (k) {
      return c.ParMap(f, k);
    };
  };

  a._parAffApply = function (f) {
    return function (k) {
      return c.ParApply(f, k);
    };
  };

  a._parAffAlt = function (f) {
    return function (k) {
      return c.ParAlt(f, k);
    };
  };

  a.makeAff = c.Async;

  a._makeFiber = function (f, k) {
    return function () {
      return c.Fiber(f, null, k);
    };
  };

  a._delay = function () {
    function f(k, g) {
      return 0 === k && "undefined" !== typeof setImmediate ? setImmediate(g) : setTimeout(g, k);
    }

    return function (k, g) {
      return c.Async(function (b) {
        return function () {
          var e = f(g, b(k()));
          return function () {
            return c.Sync(function () {
              var d = 0 === g && "undefined" !== typeof clearImmediate ? clearImmediate(e) : clearTimeout(e);
              return k(d);
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
      k = a["Data.Either"],
      g = a["Data.Functor"];

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
      return (0, b.catchError)(g.map(b.MonadThrow0().Monad0().Bind1().Apply0().Functor0())(k.Right.create)(e))(function () {
        var d = f.pure(b.MonadThrow0().Monad0().Applicative0());
        return function (n) {
          return d(k.Left.create(n));
        };
      }());
    };
  };
})(PS);

(function (a) {
  a["Control.Parallel"] = a["Control.Parallel"] || {};

  var c = a["Control.Category"],
      f = a["Control.Parallel.Class"],
      k = a["Data.Foldable"],
      g = function g(b) {
    return function (e) {
      return function (d) {
        var n = f.sequential(b),
            m = k.traverse_(b.Applicative1())(e)(function () {
          var l = f.parallel(b);
          return function (r) {
            return l(d(r));
          };
        }());
        return function (l) {
          return n(m(l));
        };
      };
    };
  };

  a["Control.Parallel"].parSequence_ = function (b) {
    return function (e) {
      return g(b)(e)(c.identity(c.categoryFn));
    };
  };
})(PS);

(function (a) {
  a["Effect.Class"] = a["Effect.Class"] || {};
  var c = a["Effect.Class"],
      f = a["Control.Category"],
      k = a.Effect;

  a = function a(g, b) {
    this.Monad0 = g;
    this.liftEffect = b;
  };

  f = new a(function () {
    return k.monadEffect;
  }, f.identity(f.categoryFn));

  c.liftEffect = function (g) {
    return g.liftEffect;
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
        } catch (k) {
          return k instanceof Error || "[object Error]" === Object.prototype.toString.call(k) ? c(k)() : c(Error(k.toString()))();
        }
      };
    };
  };
})(PS["Effect.Exception"] = PS["Effect.Exception"] || {});

(function (a) {
  a["Effect.Exception"] = a["Effect.Exception"] || {};
  var c = a["Effect.Exception"],
      f = a["Effect.Exception"],
      k = a["Control.Applicative"],
      g = a["Data.Either"],
      b = a["Data.Functor"],
      e = a.Effect;
  a = new a["Data.Show"].Show(f.showErrorImpl);

  c["throw"] = function (d) {
    return f.throwException(f.error(d));
  };

  c["try"] = function (d) {
    return f.catchException(function () {
      var n = k.pure(e.applicativeEffect);
      return function (m) {
        return n(g.Left.create(m));
      };
    }())(b.map(e.functorEffect)(g.Right.create)(d));
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

  a["Partial.Unsafe"].unsafeCrashWith = function (k) {
    return c.unsafePartial(function (g) {
      return f.crashWith()(k);
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff"] = a["Effect.Aff"] || {};
  var c = a["Effect.Aff"],
      f = a["Effect.Aff"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Monad"],
      n = a["Control.Monad.Error.Class"],
      m = a["Control.Parallel"],
      l = a["Control.Parallel.Class"],
      r = a["Control.Plus"],
      x = a["Data.Either"],
      z = a["Data.Foldable"],
      t = a["Data.Function"],
      q = a["Data.Functor"],
      u = a["Data.Monoid"],
      A = a["Data.Semigroup"],
      y = a["Data.Unit"],
      B = a.Effect,
      w = a["Effect.Class"],
      F = a["Effect.Exception"],
      E = a["Partial.Unsafe"];
  a = a["Unsafe.Coerce"];

  var v = new q.Functor(f._parAffMap),
      C = new q.Functor(f._map),
      L = function () {
    return {
      isLeft: function isLeft(aa) {
        if (aa instanceof x.Left) return !0;
        if (aa instanceof x.Right) return !1;
        throw Error("Failed pattern match at Effect.Aff (line 390, column 12 - line 392, column 20): " + [aa.constructor.name]);
      },
      fromLeft: function fromLeft(aa) {
        if (aa instanceof x.Left) return aa.value0;
        if (aa instanceof x.Right) return E.unsafeCrashWith("unsafeFromLeft: Right");
        throw Error("Failed pattern match at Effect.Aff (line 395, column 20 - line 397, column 54): " + [aa.constructor.name]);
      },
      fromRight: function fromRight(aa) {
        if (aa instanceof x.Right) return aa.value0;
        if (aa instanceof x.Left) return E.unsafeCrashWith("unsafeFromRight: Left");
        throw Error("Failed pattern match at Effect.Aff (line 400, column 21 - line 402, column 54): " + [aa.constructor.name]);
      },
      left: x.Left.create,
      right: x.Right.create
    };
  }(),
      G = function G(aa) {
    return function () {
      var ja = f._makeFiber(L, aa)();

      ja.run();
      return ja;
    };
  },
      X = new b.Apply(function () {
    return v;
  }, f._parAffApply),
      M = new d.Monad(function () {
    return p;
  }, function () {
    return K;
  }),
      K = new e.Bind(function () {
    return O;
  }, f._bind),
      O = new b.Apply(function () {
    return C;
  }, d.ap(M)),
      p = new g.Applicative(function () {
    return O;
  }, f._pure),
      Q = new w.MonadEffect(function () {
    return M;
  }, f._liftEffect);

  b = function () {
    var aa = w.liftEffect(Q);
    return function (ja) {
      return t["const"](aa(ja));
    };
  }();

  var I = new n.MonadThrow(function () {
    return M;
  }, f._throwError),
      R = new n.MonadError(function () {
    return I;
  }, f._catchError),
      fa = function fa(aa) {
    return function (ja) {
      return G(e.bindFlipped(K)(function () {
        var va = w.liftEffect(Q);
        return function (N) {
          return va(aa(N));
        };
      }())(n["try"](R)(ja)));
    };
  },
      T = new l.Parallel(function () {
    return V;
  }, function () {
    return M;
  }, a.unsafeCoerce, f._sequential),
      V = new g.Applicative(function () {
    return X;
  }, function () {
    var aa = l.parallel(T),
        ja = g.pure(p);
    return function (va) {
      return aa(ja(va));
    };
  }()),
      ca = new A.Semigroup(function (aa) {
    return function (ja) {
      return function (va) {
        return m.parSequence_(T)(z.foldableArray)([aa(va), ja(va)]);
      };
    };
  });

  A = t["const"](g.pure(p)(y.unit));
  var ha = new u.Monoid(function () {
    return ca;
  }, A);
  A = f.makeAff(function (aa) {
    return g.pure(B.applicativeEffect)(u.mempty(ha));
  });
  var da = new k.Alt(function () {
    return v;
  }, f._parAffAlt),
      Y = new k.Alt(function () {
    return C;
  }, function (aa) {
    return function (ja) {
      return n.catchError(R)(aa)(t["const"](ja));
    };
  });
  k = new r.Plus(function () {
    return Y;
  }, n.throwError(I)(F.error("Always fails")));
  r = new r.Plus(function () {
    return da;
  }, l.parallel(T)(r.empty(k)));

  c.runAff_ = function (aa) {
    return function (ja) {
      return q["void"](B.functorEffect)(fa(aa)(ja));
    };
  };

  c.delay = function (aa) {
    return f._delay(x.Right.create, aa);
  };

  c.never = A;
  c.effectCanceler = b;
  c.functorAff = C;
  c.applicativeAff = p;
  c.bindAff = K;
  c.monadEffectAff = Q;
  c.altParAff = da;
  c.plusParAff = r;
  c.parallelAff = T;
  c.monoidCanceler = ha;
  c.makeAff = f.makeAff;
})(PS);

(function (a) {
  a["Effect.Aff.AVar"] = a["Effect.Aff.AVar"] || {};
  var c = a["Effect.AVar"],
      f = a["Effect.Aff"];

  a["Effect.Aff.AVar"].take = function (k) {
    return f.makeAff(function (g) {
      return function () {
        var b = c.take(k)(g)();
        return f.effectCanceler(b);
      };
    });
  };
})(PS);

(function (a) {
  a["Effect.Aff.Class"] = a["Effect.Aff.Class"] || {};
  var c = a["Effect.Aff.Class"],
      f = a["Control.Category"],
      k = a["Effect.Aff"];

  a = function a(g, b) {
    this.MonadEffect0 = g;
    this.liftAff = b;
  };

  f = new a(function () {
    return k.monadEffectAff;
  }, f.identity(f.categoryFn));

  c.liftAff = function (g) {
    return g.liftAff;
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
  var c = a["Effect.Console"],
      f = a["Effect.Console"],
      k = a["Data.Show"];

  c.logShow = function (g) {
    return function (b) {
      return f.log(k.show(g)(b));
    };
  };

  c.log = f.log;
})(PS);

(function (a) {
  a["Concur.Core.Types"] = a["Concur.Core.Types"] || {};
  var c = a["Concur.Core.Types"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Category"],
      d = a["Control.Monad"],
      n = a["Control.Monad.Free"],
      m = a["Control.MultiAlternative"],
      l = a["Control.Parallel.Class"],
      r = a["Control.Plus"],
      x = a["Data.Array.NonEmpty"],
      z = a["Data.Array.NonEmpty.Internal"],
      t = a["Data.Either"],
      q = a["Data.FoldableWithIndex"],
      u = a["Data.Functor"],
      A = a["Data.Maybe"],
      y = a["Data.Monoid"],
      B = a["Data.Semigroup"],
      w = a["Data.Semigroup.Foldable"],
      F = a["Data.Show"],
      E = a["Data.Tuple"],
      v = a.Effect,
      C = a["Effect.AVar"],
      L = a["Effect.Aff"],
      G = a["Effect.Aff.AVar"],
      X = a["Effect.Aff.Class"],
      M = a["Effect.Class"],
      K = a["Effect.Console"],
      O = a["Effect.Exception"];
  a = new a["Control.ShiftMap"].ShiftMap(function (W) {
    return W(e.identity(e.categoryFn));
  });

  var p = n.freeFunctor,
      Q = n.freeBind,
      I = n.freeApplicative,
      R = new d.Monad(function () {
    return I;
  }, function () {
    return Q;
  }),
      fa = function fa(W) {
    return W;
  },
      T = function T(W) {
    return n["resume'"](function (D) {
      return function (U) {
        return new t.Right(u.map(W)(U)(D));
      };
    })(t.Left.create);
  },
      V = new u.Functor(function (W) {
    return function (D) {
      if (D instanceof t.Right) D = new t.Right({
        cont: u.map(L.functorAff)(W)(D.value0.cont),
        view: D.value0.view
      });else if (D instanceof t.Left) D = new t.Left(u.map(v.functorEffect)(W)(D.value0));else throw Error("Failed pattern match at Concur.Core.Types (line 45, column 5 - line 45, column 57): " + [D.constructor.name]);
      return D;
    };
  }),
      ca = function ca(W) {
    return n.liftF(t.Left.create(W));
  },
      ha = function ha(W) {
    return new M.MonadEffect(function () {
      return R;
    }, ca);
  },
      da = function da(W) {
    return n.liftF(new t.Right({
      view: W,
      cont: L.never
    }));
  },
      Y = function Y(W) {
    return new B.Semigroup(function (D) {
      return function (U) {
        return m.orr(ja(W))([D, U]);
      };
    });
  },
      aa = function aa(W) {
    return new r.Plus(function () {
      return va(W);
    }, da(y.mempty(W)));
  },
      ja = function ja(W) {
    return new m.MultiAlternative(function () {
      return aa(W);
    }, function (D) {
      var U = function U(Z) {
        return function (ka) {
          return function (ia) {
            var la = u.map(z.functorNonEmptyArray)(function (qa) {
              return n.wrap(t.Right.create(qa));
            })(ka);
            return b.bind(L.bindAff)(l.sequential(L.parallelAff)(q.foldlWithIndex(z.foldableWithIndexNonEmptyArray)(function (qa) {
              return function (sa) {
                return function (xa) {
                  return f.alt(L.altParAff)(l.parallel(L.parallelAff)(u.map(L.functorAff)(E.Tuple.create(qa))(xa)))(sa);
                };
              };
            })(r.empty(L.plusParAff))(ia)))(function (qa) {
              return g.pure(L.applicativeAff)(H(Z)(A.fromMaybe(la)(x.updateAt(qa.value0)(qa.value1)(la))));
            });
          };
        };
      },
          P = function P(Z) {
        return function (ka) {
          return n.wrap(new t.Right({
            view: w.foldMap1(z.foldable1NonEmptyArray)(Z.Semigroup0())(function (ia) {
              return ia.view;
            })(ka),
            cont: U(Z)(ka)(u.map(z.functorNonEmptyArray)(function (ia) {
              return ia.cont;
            })(ka))
          }));
        };
      },
          J = function J(Z) {
        return function (ka) {
          return function (ia) {
            var la = x.uncons(ia),
                qa = T(V)(la.head);
            if (qa instanceof t.Left) return g.pure(n.freeApplicative)(qa.value0);

            if (qa instanceof t.Right) {
              if (qa.value0 instanceof t.Left) return n.wrap(new t.Left(function () {
                var sa = qa.value0.value0();
                return J(Z)(ka)(x["cons'"](sa)(la.tail));
              }));
              if (qa.value0 instanceof t.Right) return na(Z)(x.snoc(ka)(qa.value0.value0))(la.tail);
              throw Error("Failed pattern match at Concur.Core.Types (line 138, column 34 - line 142, column 61): " + [qa.value0.constructor.name]);
            }

            throw Error("Failed pattern match at Concur.Core.Types (line 136, column 10 - line 142, column 61): " + [qa.constructor.name]);
          };
        };
      },
          na = function na(Z) {
        return function (ka) {
          return function (ia) {
            ia = x.fromArray(ia);
            if (ia instanceof A.Nothing) return P(Z)(ka);
            if (ia instanceof A.Just) return J(Z)(ka)(ia.value0);
            throw Error("Failed pattern match at Concur.Core.Types (line 113, column 31 - line 116, column 49): " + [ia.constructor.name]);
          };
        };
      },
          H = function H(Z) {
        return function (ka) {
          var ia = x.uncons(ka),
              la = T(V)(ia.head);
          if (la instanceof t.Left) return g.pure(n.freeApplicative)(la.value0);

          if (la instanceof t.Right) {
            if (la.value0 instanceof t.Left) return n.wrap(new t.Left(function () {
              var qa = la.value0.value0();
              return H(Z)(x["cons'"](qa)(ia.tail));
            }));
            if (la.value0 instanceof t.Right) return na(Z)(x.singleton(la.value0.value0))(ia.tail);
            throw Error("Failed pattern match at Concur.Core.Types (line 101, column 34 - line 105, column 63): " + [la.value0.constructor.name]);
          }

          throw Error("Failed pattern match at Concur.Core.Types (line 99, column 10 - line 105, column 63): " + [la.constructor.name]);
        };
      };

      D = x.fromArray(D);
      if (D instanceof A.Just) return H(W)(u.map(z.functorNonEmptyArray)(fa)(D.value0));
      if (D instanceof A.Nothing) return r.empty(aa(W));
      throw Error("Failed pattern match at Concur.Core.Types (line 88, column 13 - line 90, column 21): " + [D.constructor.name]);
    });
  },
      va = function va(W) {
    return new f.Alt(function () {
      return p;
    }, B.append(Y(W)));
  },
      N = function N(W) {
    return function (D) {
      var U = function U(P) {
        return function (J) {
          if (J instanceof t.Left) return K.log("Aff failed - " + F.show(O.showError)(J.value0));
          if (J instanceof t.Right) return u["void"](v.functorEffect)(C.tryPut(J.value0)(P));
          throw Error("Failed pattern match at Concur.Core.Types (line 237, column 3 - line 237, column 55): " + [P.constructor.name, J.constructor.name]);
        };
      };

      return n.wrap(new t.Left(function () {
        var P = C.empty();
        L.runAff_(U(P))(D)();
        var J = C.tryTake(P)();
        if (J instanceof A.Just) return g.pure(n.freeApplicative)(J.value0);
        if (J instanceof A.Nothing) return n.liftF(new t.Right({
          view: W,
          cont: G.take(P)
        }));
        throw Error("Failed pattern match at Concur.Core.Types (line 232, column 8 - line 234, column 75): " + [J.constructor.name]);
      }));
    };
  };

  c.WidgetStep = function (W) {
    return W;
  };

  c.Widget = function (W) {
    return W;
  };

  c.unWidget = fa;
  c.resume = T;
  c.display = da;
  c.functorWidgetStep = V;
  c.widgetFunctor = p;
  c.widgetBind = Q;
  c.widgetApplicative = I;
  c.widgetMonad = R;
  c.widgetShiftMap = a;
  c.widgetMultiAlternative = ja;

  c.widgetMonoid = function (W) {
    return new y.Monoid(function () {
      return Y(W);
    }, r.empty(aa(W)));
  };

  c.widgetAlt = va;
  c.widgetPlus = aa;

  c.widgetAlternative = function (W) {
    return new k.Alternative(function () {
      return I;
    }, function () {
      return aa(W);
    });
  };

  c.widgetMonadEff = ha;

  c.widgetMonadAff = function (W) {
    return new X.MonadAff(function () {
      return ha(W);
    }, N(y.mempty(W)));
  };
})(PS);

(function (a) {
  a["Concur.Core"] = a["Concur.Core"] || {};

  var c = a["Concur.Core"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Monad.Free"],
      e = a["Control.Parallel.Class"],
      d = a["Data.Either"],
      n = a["Data.Functor"],
      m = a.Effect,
      l = a["Effect.AVar"],
      r = a["Effect.Aff"],
      x = a["Effect.Aff.AVar"],
      z = a["Effect.Aff.Class"],
      t = function t(q) {
    return function (u) {
      var A = f.resume(f.functorWidgetStep)(u);
      if (A instanceof d.Left) return g.pure(b.freeApplicative)(A.value0);

      if (A instanceof d.Right) {
        if (A.value0 instanceof d.Left) return b.wrap(f.WidgetStep(new d.Left(function () {
          var y = A.value0.value0();
          return t(q)(y);
        })));
        if (A.value0 instanceof d.Right) return b.wrap(f.WidgetStep(new d.Left(function () {
          var y = l.empty(),
              B = e.sequential(r.parallelAff)(k.alt(r.altParAff)(e.parallel(r.parallelAff)(z.liftAff(z.monadAffAff)(x.take(y))))(e.parallel(r.parallelAff)(n.map(r.functorAff)(t(q))(A.value0.value0.cont))));
          return b.wrap(f.WidgetStep(new d.Right({
            view: q(function (w) {
              return n["void"](m.functorEffect)(l.tryPut(g.pure(b.freeApplicative)(w))(y));
            })(A.value0.value0.view),
            cont: B
          })));
        })));
        throw Error("Failed pattern match at Concur.Core (line 36, column 28 - line 49, column 10): " + [A.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core (line 34, column 26 - line 49, column 10): " + [A.constructor.name]);
    };
  };

  c.mkLeafWidget = function (q) {
    return f.Widget(b.wrap(f.WidgetStep(new d.Left(function () {
      var u = l.empty();
      return b.wrap(f.WidgetStep(new d.Right({
        view: q(function (A) {
          return n["void"](m.functorEffect)(l.tryPut(g.pure(b.freeApplicative)(A))(u));
        }),
        cont: z.liftAff(z.monadAffAff)(x.take(u))
      })));
    }))));
  };

  c.mkNodeWidget = function (q) {
    return function (u) {
      return t(q)(u);
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
      if (b instanceof f) return new f(b.value0);
      if (b instanceof k) return new k(function (e) {
        return b.value0(function (d) {
          return e(g(d));
        });
      });
      throw Error("Failed pattern match at Concur.Core.Props (line 13, column 1 - line 15, column 48): " + [g.constructor.name, b.constructor.name]);
    };
  });
  c.PrimProp = f;
  c.Handler = k;

  c.mkProp = function (g) {
    return function (b) {
      if (b instanceof f) return b.value0;
      if (b instanceof k) return b.value0(g);
      throw Error("Failed pattern match at Concur.Core.Props (line 18, column 1 - line 22, column 7): " + [g.constructor.name, b.constructor.name]);
    };
  };

  c.functorProps = a;
})(PS);

(function (a) {
  a["Concur.Core.DOM"] = a["Concur.Core.DOM"] || {};

  var c = a["Concur.Core.DOM"],
      f = a["Concur.Core"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Control.MultiAlternative"],
      e = a["Control.ShiftMap"],
      d = a["Data.Functor"],
      n = function n(m) {
    return function (l) {
      return function (r) {
        return function (x) {
          return e.shiftMap(m)(function (z) {
            return function (t) {
              return f.mkNodeWidget(function (q) {
                return function (u) {
                  return r(d.map(l)(function () {
                    var A = g.mkProp(q),
                        y = d.map(g.functorProps)(z);
                    return function (B) {
                      return A(y(B));
                    };
                  }())(x))(u);
                };
              })(t);
            };
          });
        };
      };
    };
  };

  c.el = n;

  c.elLeaf = function (m) {
    return function (l) {
      return function (r) {
        return function (x) {
          return k.liftWidget(m)(f.mkLeafWidget(function (z) {
            return r(d.map(l)(g.mkProp(z))(x));
          }));
        };
      };
    };
  };

  c["el'"] = function (m) {
    return function (l) {
      return function (r) {
        return function (x) {
          return function (z) {
            var t = n(m)(r)(x)(z),
                q = b.orr(l);
            return function (u) {
              return t(q(u));
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
      k = a["Control.Applicative"],
      g = a["Control.Monad.Free"],
      b = a["Data.Either"],
      e = a["Data.Functor"],
      d = a["Data.Monoid"],
      n = a["Data.Tuple"],
      m = a.Effect,
      l = a["Effect.Aff"],
      r = function r(z) {
    return function (t) {
      var q = g.resume(f.functorWidgetStep)(f.unWidget(t));
      if (q instanceof b.Right) return k.pure(m.applicativeEffect)(new n.Tuple(t, d.mempty(z)));

      if (q instanceof b.Left) {
        if (q.value0 instanceof b.Left) return function () {
          var u = q.value0.value0();
          return r(z)(u)();
        };
        if (q.value0 instanceof b.Right) return k.pure(m.applicativeEffect)(new n.Tuple(g.wrap(new b.Right(q.value0.value0)), q.value0.value0.view));
        throw Error("Failed pattern match at Concur.Core.Discharge (line 43, column 27 - line 47, column 77): " + [q.value0.constructor.name]);
      }

      throw Error("Failed pattern match at Concur.Core.Discharge (line 41, column 28 - line 47, column 77): " + [q.constructor.name]);
    };
  },
      x = function x(z) {
    return function (t) {
      return function (q) {
        var u = g.resume(f.functorWidgetStep)(q);
        if (u instanceof b.Right) return k.pure(m.applicativeEffect)(d.mempty(z));

        if (u instanceof b.Left) {
          if (u.value0 instanceof b.Left) return function () {
            var A = u.value0.value0();
            return x(z)(t)(A)();
          };
          if (u.value0 instanceof b.Right) return function () {
            l.runAff_(function () {
              var A = e.map(b.functorEither)(f.Widget);
              return function (y) {
                return t(A(y));
              };
            }())(u.value0.value0.cont)();
            return u.value0.value0.view;
          };
          throw Error("Failed pattern match at Concur.Core.Discharge (line 26, column 28 - line 32, column 19): " + [u.value0.constructor.name]);
        }

        throw Error("Failed pattern match at Concur.Core.Discharge (line 24, column 32 - line 32, column 19): " + [u.constructor.name]);
      };
    };
  };

  c.discharge = x;
  c.dischargePartialEffect = r;
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
  a = new a["Data.Functor"].Functor(function (k) {
    return function (g) {
      return f.defer(function (b) {
        return k(f.force(g));
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
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Comonad"],
      n = a["Control.Extend"],
      m = a["Control.Monad"],
      l = a["Control.Plus"],
      r = a["Control.ShiftMap"],
      x = a["Data.Functor"],
      z = a["Data.Lazy"],
      t = a["Data.Tuple"],
      q = function q(C) {
    return t.snd(z.force(C));
  },
      u = function u(C) {
    return function (L) {
      return z.defer(function (G) {
        return new t.Tuple(C, L);
      });
    };
  },
      A = function A(C) {
    return t.fst(z.force(C));
  },
      y = function y(C) {
    return new x.Functor(function (L) {
      var G = function G(X) {
        return x.map(z.functorLazy)(function (M) {
          return new t.Tuple(L(M.value0), x.map(C)(G)(M.value1));
        })(X);
      };

      return G;
    });
  },
      B = function B(C) {
    return new n.Extend(function () {
      return y(C);
    }, function (L) {
      var G = function G(X) {
        return x.map(z.functorLazy)(function (M) {
          return new t.Tuple(L(X), x.map(C)(G)(M.value1));
        })(X);
      };

      return G;
    });
  },
      w = function w(C) {
    return new m.Monad(function () {
      return v(C);
    }, function () {
      return F(C);
    });
  },
      F = function F(C) {
    return new e.Bind(function () {
      return E(C);
    }, function (L) {
      return function (G) {
        var X = function X(K) {
          return function (O) {
            var p = x.map(C.Plus1().Alt0().Functor0())(X(K))(q(O)),
                Q = x.map(C.Plus1().Alt0().Functor0())(M)(q(K));
            return u(A(O))(k.alt(C.Plus1().Alt0())(Q)(p));
          };
        },
            M = function M(K) {
          return X(K)(G(A(K)));
        };

        return M(L);
      };
    });
  },
      E = function E(C) {
    return new b.Apply(function () {
      return y(C.Plus1().Alt0().Functor0());
    }, m.ap(w(C)));
  },
      v = function v(C) {
    return new g.Applicative(function () {
      return E(C);
    }, function (L) {
      return u(L)(l.empty(C.Plus1()));
    });
  };

  c.mkCofree = u;
  c.tail = q;

  c.comonadCofree = function (C) {
    return new d.Comonad(function () {
      return B(C);
    }, A);
  };

  c.applicativeCofree = v;
  c.bindCofree = F;

  c.shiftMapCofree = function (C) {
    return new r.ShiftMap(function (L) {
      return function (G) {
        return z.defer(function (X) {
          X = z.force(G);
          return new t.Tuple(X.value0, L(g.pure(v(f.widgetAlternative(C))))(X.value1));
        });
      };
    });
  };
})(PS);

(function (a) {
  a["Concur.Core.FRP"] = a["Concur.Core.FRP"] || {};

  var c = a["Concur.Core.FRP"],
      f = a["Concur.Core.Types"],
      k = a["Control.Alt"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Cofree"],
      d = a["Control.Comonad"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      l = a["Data.Unit"],
      r = a["Effect.Aff"],
      x = a["Effect.Aff.Class"],
      z = e.tail,
      t = e.mkCofree,
      q = function q(y) {
    return function (B) {
      return t(y)(n.map(f.widgetFunctor)(function (w) {
        return q(w)(B);
      })(B(y)));
    };
  },
      u = function u(y) {
    return function (B) {
      return function (w) {
        var F = w(B);
        return t(d.extract(e.comonadCofree(f.widgetFunctor))(F))(b.bind(f.widgetBind)(z(F))(function (E) {
          return g.pure(f.widgetApplicative)(u(y)(d.extract(e.comonadCofree(f.widgetFunctor))(E))(w));
        }));
      };
    };
  },
      A = function A(y) {
    return b.bind(f.widgetBind)(z(y))(A);
  };

  c.step = t;

  c.display = function (y) {
    return t(l.unit)(y);
  };

  c.loopW = q;
  c.loopS = u;
  c.dyn = A;

  c.debounce = function (y) {
    return function (B) {
      return function (w) {
        return function (F) {
          var E = function E(C) {
            return function (L) {
              return b.bind(f.widgetBind)(k.alt(f.widgetAlt(y))(n.map(f.widgetFunctor)(m.Just.create)(L(C)))(n.voidRight(f.widgetFunctor)(m.Nothing.value)(x.liftAff(f.widgetMonadAff(y))(r.delay(B)))))(function (G) {
                if (G instanceof m.Nothing) return g.pure(f.widgetApplicative)(v(C)(L));
                if (G instanceof m.Just) return E(G.value0)(L);
                throw Error("Failed pattern match at Concur.Core.FRP (line 199, column 7 - line 203, column 28): " + [G.constructor.name]);
              });
            };
          },
              v = function v(C) {
            return function (L) {
              return t(C)(b.bind(f.widgetBind)(L(C))(function (G) {
                return E(G)(L);
              }));
            };
          };

          return v(w)(F);
        };
      };
    };
  };
})(PS);

(function (a) {
  function c(g) {
    return function (b) {
      return function (e) {
        return f.createElement.apply(f, [g, b].concat(e));
      };
    };
  }

  var f = require("react"),
      k = function (g) {
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
          e[d] = function (m, l) {
            return n(m)(l)();
          };

          break;

        case "componentDidUpdate":
          e[d] = function (m, l, r) {
            return n(m)(l)(r)();
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
          e.UNSAFE_componentWillUpdate = function (m, l) {
            return n(m)(l)();
          };

          break;

        default:
          throw Error("[purescript-react] Not a component property: " + d);
      }
    }

    return function (e) {
      return function (d) {
        var n = function n(m) {
          g.call(this, m);
          m = d(this)();

          for (var l in m) {
            b(this, l, m[l]);
          }
        };

        n.displayName = e;
        n.prototype = Object.create(g.prototype);
        return n.prototype.constructor = n;
      };
    };
  }(f.Component);

  a.componentImpl = k;
  a.fragment = f.Fragment;

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

  a.createElementImpl = c;
  a.createElementTagName = c;

  a.createLeafElementImpl = function (g) {
    return function (b) {
      return f.createElement(g, b);
    };
  };

  a.createElementTagNameDynamic = function (g) {
    return function (b) {
      return function (e) {
        return f.createElement(g, b, e);
      };
    };
  };
})(PS.React = PS.React || {});

(function (a) {
  a.React = a.React || {};
  var c = a.React,
      f = a.React;
  a = f.setStateImpl;
  var k = new function (g) {
    this.toElement = g;
  }((0, f.createElementImpl)(f.fragment)({}));

  c.component = function (g) {
    return f.componentImpl;
  };

  c.writeState = a;

  c.createLeafElement = function (g) {
    return f.createLeafElementImpl;
  };

  c.toElement = function (g) {
    return g.toElement;
  };

  c.isReactElementArray = k;
  c.getState = f.getState;
  c.createElementTagName = f.createElementTagName;
  c.createElementTagNameDynamic = f.createElementTagNameDynamic;
})(PS);

(function (a) {
  a["Concur.React"] = a["Concur.React"] || {};

  var c = a["Concur.Core.Discharge"],
      f = a["Data.Either"],
      k = a["Data.Functor"],
      g = a["Data.Monoid"],
      b = a["Data.Show"],
      e = a["Data.Unit"],
      d = a.Effect,
      n = a["Effect.Console"],
      m = a["Effect.Exception"],
      l = a.React,
      r = function r(x) {
    var z = function z(q) {
      return l.toElement(l.isReactElementArray)(q.view);
    },
        t = function t(q) {
      return function (u) {
        if (u instanceof f.Right) return function () {
          var A = c.discharge(g.monoidArray)(t(q))(u.value0)();
          return k["void"](d.functorEffect)(l.writeState(q)({
            view: A
          }))();
        };
        if (u instanceof f.Left) return function () {
          n.log("FAILED! " + b.show(m.showError)(u.value0))();
          return e.unit;
        };
        throw Error("Failed pattern match at Concur.React (line 31, column 3 - line 33, column 50): " + [q.constructor.name, u.constructor.name]);
      };
    };

    return l.component()("Concur")(function (q) {
      return function () {
        var u = c.dischargePartialEffect(g.monoidArray)(x)();
        return {
          state: {
            view: u.value1
          },
          render: k.map(d.functorEffect)(z)(l.getState(q)),
          componentDidMount: t(q)(new f.Right(u.value0))
        };
      };
    });
  };

  a["Concur.React"].renderComponent = function (x) {
    return l.createLeafElement()(r(x))({});
  };
})(PS);

(function (a) {
  require("react");

  a.unsafeMkProps = function (c) {
    return function (f) {
      var k = {};
      k[c] = f;
      return k;
    };
  };

  a.unsafeUnfoldProps = function (c) {
    return function (f) {
      var k = {},
          g = {};
      g[c] = k;

      for (var b in f) {
        f.hasOwnProperty(b) && (k[b] = f[b]);
      }

      return g;
    };
  };

  a.unsafeFromPropsArray = function (c) {
    for (var f = {}, k = 0, g = c.length; k < g; k++) {
      var b = c[k],
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
      k = a["Effect.Uncurried"];
  a = f.unsafeMkProps("value");
  var g = f.unsafeMkProps("target"),
      b = f.unsafeUnfoldProps("style"),
      e = f.unsafeMkProps("href"),
      d = f.unsafeMkProps("disabled"),
      n = f.unsafeMkProps("defaultValue"),
      m = f.unsafeMkProps("className"),
      l = f.unsafeMkProps("checked"),
      r = f.unsafeMkProps("type");
  c.style = b;
  c.checked = l;
  c.className = m;
  c.defaultValue = n;
  c.disabled = d;
  c.href = e;
  c.target = g;
  c._type = r;
  c.value = a;

  c.onChange = function (x) {
    return f.unsafeMkProps("onChange")(k.mkEffectFn1(x));
  };

  c.onClick = function (x) {
    return f.unsafeMkProps("onClick")(k.mkEffectFn1(x));
  };

  c.unsafeFromPropsArray = f.unsafeFromPropsArray;
})(PS);

(function (a) {
  a["React.DOM"] = a["React.DOM"] || {};
  var c = a["React.DOM"],
      f = a.React,
      k = a["React.DOM.Props"];
  a = a["Unsafe.Coerce"].unsafeCoerce;

  var g = function g(t) {
    return function (q) {
      return function (u) {
        if (t) {
          if (t) var A = f.createElementTagNameDynamic;else throw Error("Failed pattern match at React.DOM (line 15, column 5 - line 17, column 55): " + [t.constructor.name]);
        } else A = f.createElementTagName;
        return A(q)(k.unsafeFromPropsArray(u));
      };
    };
  },
      b = g(!1)("option"),
      e = g(!1)("select"),
      d = g(!1)("span"),
      n = g(!1)("ul"),
      m = g(!1)("li"),
      l = g(!1)("div"),
      r = g(!1)("cite"),
      x = g(!1)("button"),
      z = g(!1)("a");

  c.text = a;
  c.a = z;

  c.br = function (t) {
    return g(!1)("br")(t)([]);
  };

  c.button = x;
  c.cite = r;
  c.div = l;

  c.input = function (t) {
    return g(!1)("input")(t)([]);
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
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Types"],
      b = a["Data.Functor"],
      e = a["React.DOM"],
      d = function d(q) {
    return function (u) {
      return function (A) {
        return [q(u)(A)];
      };
    };
  },
      n = function n(q) {
    return function (u) {
      return f.elLeaf(q)(b.functorArray)(function (A) {
        return [u(A)];
      });
    };
  },
      m = function m(q) {
    return function (u) {
      return function (A) {
        return f["el'"](q)(u)(b.functorArray)(d(A));
      };
    };
  },
      l = function l(q) {
    return function (u) {
      return m(u)(q)(e.li);
    };
  },
      r = function r(q) {
    return function (u) {
      return m(u)(q)(e.span);
    };
  },
      x = function x(q) {
    return function (u) {
      return f.el(q)(b.functorArray)(d(u));
    };
  },
      z = function z(q) {
    return function (u) {
      return m(u)(q)(e.div);
    };
  },
      t = function t(q) {
    return function (u) {
      return m(u)(q)(e.cite);
    };
  };

  c.text = function (q) {
    return function (u) {
      return k.liftWidget(q)(g.display([e.text(u)]));
    };
  };

  c.a = function (q) {
    return function (u) {
      return m(u)(q)(e.a);
    };
  };

  c["br'"] = function (q) {
    return n(q)(e.br)([]);
  };

  c.button_ = function (q) {
    return x(q)(e.button);
  };

  c.button = function (q) {
    return function (u) {
      return m(u)(q)(e.button);
    };
  };

  c["cite'"] = function (q) {
    return function (u) {
      return t(q)(u)([]);
    };
  };

  c.div_ = function (q) {
    return x(q)(e.div);
  };

  c.div = z;

  c["div'"] = function (q) {
    return function (u) {
      return z(q)(u)([]);
    };
  };

  c.input = function (q) {
    return n(q)(e.input);
  };

  c.li_ = function (q) {
    return x(q)(e.li);
  };

  c.li = l;

  c["li'"] = function (q) {
    return function (u) {
      return l(q)(u)([]);
    };
  };

  c.option = function (q) {
    return function (u) {
      return m(u)(q)(e.option);
    };
  };

  c.select = function (q) {
    return function (u) {
      return m(u)(q)(e.select);
    };
  };

  c.span_ = function (q) {
    return x(q)(e.span);
  };

  c.span = r;

  c["span'"] = function (q) {
    return function (u) {
      return r(q)(u)([]);
    };
  };

  c.ul_ = function (q) {
    return x(q)(e.ul);
  };

  c.ul = function (q) {
    return function (u) {
      return m(u)(q)(e.ul);
    };
  };
})(PS);

(function (a) {
  a["Concur.React.Props"] = a["Concur.React.Props"] || {};
  var c = a["Concur.React.Props"],
      f = a["Concur.Core.Props"],
      k = a["Data.Array"],
      g = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Data.Monoid"],
      d = a["React.DOM.Props"];
  a = new f.Handler(d.onClick);

  var n = new f.Handler(d.onChange),
      m = function m(r) {
    return f.PrimProp.create(d.className(r));
  },
      l = function () {
    var r = g.intercalate(g.foldableArray)(e.monoidString)(" "),
        x = k.concatMap(b.maybe([])(function (z) {
      return [z];
    }));
    return function (z) {
      return m(r(x(z)));
    };
  }();

  c.classList = l;

  c.unsafeTargetValue = function (r) {
    return r.target.value;
  };

  c.style = function (r) {
    return f.PrimProp.create(d.style(r));
  };

  c.checked = function (r) {
    return f.PrimProp.create(d.checked(r));
  };

  c.className = m;

  c.defaultValue = function (r) {
    return f.PrimProp.create(d.defaultValue(r));
  };

  c.disabled = function (r) {
    return f.PrimProp.create(d.disabled(r));
  };

  c.href = function (r) {
    return f.PrimProp.create(d.href(r));
  };

  c._type = function (r) {
    return f.PrimProp.create(d._type(r));
  };

  c.value = function (r) {
    return f.PrimProp.create(d.value(r));
  };

  c.onChange = n;
  c.onClick = a;
})(PS);

(function (a) {
  var c = require("react-dom");

  require("react-dom/server");

  a.renderImpl = function (f, k) {
    return c.render(f, k);
  };
})(PS.ReactDOM = PS.ReactDOM || {});

(function (a) {
  a["null"] = null;

  a.nullable = function (c, f, k) {
    return null == c ? f : k(c);
  };

  a.notNull = function (c) {
    return c;
  };
})(PS["Data.Nullable"] = PS["Data.Nullable"] || {});

(function (a) {
  a["Data.Nullable"] = a["Data.Nullable"] || {};
  var c = a["Data.Nullable"],
      f = a["Data.Nullable"],
      k = a["Data.Maybe"];
  a = k.maybe(f["null"])(f.notNull);

  c.toMaybe = function (g) {
    return f.nullable(g, k.Nothing.value, k.Just.create);
  };

  c.toNullable = a;
})(PS);

(function (a) {
  a.ReactDOM = a.ReactDOM || {};
  var c = a.ReactDOM,
      f = a["Data.Functor"],
      k = a["Data.Nullable"],
      g = a.Effect;

  a.ReactDOM.render = function (b) {
    return function (e) {
      return f.map(g.functorEffect)(k.toMaybe)(function () {
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
      k = a["Data.Nullable"],
      g = a.Effect;

  a["Web.DOM.NonElementParentNode"].getElementById = function (b) {
    var e = f.map(g.functorEffect)(k.toMaybe),
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
      k = a["Data.Maybe"],
      g = a["Data.Unit"],
      b = a.Effect,
      e = a.ReactDOM,
      d = a["Web.DOM.NonElementParentNode"],
      n = a["Web.HTML"],
      m = a["Web.HTML.HTMLDocument"],
      l = a["Web.HTML.Window"];

  a["Concur.React.Run"].runWidgetInDom = function (r) {
    return function (x) {
      return function () {
        var z = n.window();
        z = l.document(z)();
        z = m.toNonElementParentNode(z);
        z = d.getElementById(r)(z)();
        if (z instanceof k.Nothing) return g.unit;
        if (z instanceof k.Just) return f["void"](b.functorEffect)(e.render(c.renderComponent(x))(z.value0))();
        throw Error("Failed pattern match at Concur.React.Run (line 23, column 3 - line 25, column 65): " + [z.constructor.name]);
      };
    };
  };
})(PS);

(function (a) {
  a["Control.Monad.State.Class"] = a["Control.Monad.State.Class"] || {};
  var c = a["Control.Monad.State.Class"],
      f = a["Data.Tuple"],
      k = a["Data.Unit"];

  c.state = function (g) {
    return g.state;
  };

  c.MonadState = function (g, b) {
    this.Monad0 = g;
    this.state = b;
  };

  c.get = function (g) {
    return (0, g.state)(function (b) {
      return new f.Tuple(b, b);
    });
  };

  c.gets = function (g) {
    return function (b) {
      return (0, g.state)(function (e) {
        return new f.Tuple(b(e), e);
      });
    };
  };

  c.put = function (g) {
    return function (b) {
      return (0, g.state)(function (e) {
        return new f.Tuple(k.unit, b);
      });
    };
  };

  c.modify_ = function (g) {
    return function (b) {
      return (0, g.state)(function (e) {
        return new f.Tuple(k.unit, b(e));
      });
    };
  };
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
  a["Control.Monad.Except.Trans"] = a["Control.Monad.Except.Trans"] || {};

  var c = a["Control.Monad.Except.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.Error.Class"],
      d = a["Control.Monad.State.Class"],
      n = a["Control.Monad.Trans.Class"],
      m = a["Data.Either"],
      l = a["Data.Functor"],
      r = new n.MonadTrans(function (y) {
    return function (B) {
      return g.bind(y.Bind1())(B)(function (w) {
        return f.pure(y.Applicative0())(new m.Right(w));
      });
    };
  }),
      x = function x(y) {
    return function (B) {
      return y(B);
    };
  },
      z = function z(y) {
    return new l.Functor(function (B) {
      return x(l.map(y)(l.map(m.functorEither)(B)));
    });
  },
      t = function t(y) {
    return new b.Monad(function () {
      return A(y);
    }, function () {
      return q(y);
    });
  },
      q = function q(y) {
    return new g.Bind(function () {
      return u(y);
    }, function (B) {
      return function (w) {
        return g.bind(y.Bind1())(B)(m.either(function () {
          var F = f.pure(y.Applicative0());
          return function (E) {
            return F(m.Left.create(E));
          };
        }())(function (F) {
          return w(F);
        }));
      };
    });
  },
      u = function u(y) {
    return new k.Apply(function () {
      return z(y.Bind1().Apply0().Functor0());
    }, b.ap(t(y)));
  },
      A = function A(y) {
    return new f.Applicative(function () {
      return u(y);
    }, function () {
      var B = f.pure(y.Applicative0());
      return function (w) {
        return B(m.Right.create(w));
      };
    }());
  };

  c.ExceptT = function (y) {
    return y;
  };

  c.runExceptT = function (y) {
    return y;
  };

  c.functorExceptT = z;
  c.applyExceptT = u;
  c.applicativeExceptT = A;
  c.bindExceptT = q;

  c.monadThrowExceptT = function (y) {
    return new e.MonadThrow(function () {
      return t(y);
    }, function () {
      var B = f.pure(y.Applicative0());
      return function (w) {
        return B(m.Left.create(w));
      };
    }());
  };

  c.monadStateExceptT = function (y) {
    return new d.MonadState(function () {
      return t(y.Monad0());
    }, function (B) {
      return n.lift(r)(y.Monad0())(d.state(y)(B));
    });
  };
})(PS);

(function (a) {
  a["Data.Identity"] = a["Data.Identity"] || {};

  var c = a["Data.Identity"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      d = function d(x) {
    return x;
  };

  a = new a["Data.Newtype"].Newtype(function (x) {
    return x;
  }, d);
  var n = new e.Functor(function (x) {
    return function (z) {
      return x(z);
    };
  }),
      m = new k.Apply(function () {
    return n;
  }, function (x) {
    return function (z) {
      return x(z);
    };
  }),
      l = new g.Bind(function () {
    return m;
  }, function (x) {
    return function (z) {
      return z(x);
    };
  }),
      r = new f.Applicative(function () {
    return m;
  }, d);
  f = new b.Monad(function () {
    return r;
  }, function () {
    return l;
  });
  c.newtypeIdentity = a;
  c.functorIdentity = n;
  c.monadIdentity = f;
})(PS);

(function (a) {
  a["Control.Monad.Except"] = a["Control.Monad.Except"] || {};
  var c = a["Control.Monad.Except"],
      f = a["Control.Monad.Except.Trans"],
      k = a["Data.Identity"],
      g = a["Data.Newtype"];

  a = function () {
    var b = g.unwrap(k.newtypeIdentity);
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
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Data.Functor"],
      d = a["Data.Maybe"],
      n = function n(z) {
    return new e.Functor(function (t) {
      return function (q) {
        return e.map(z)(e.map(d.functorMaybe)(t))(q);
      };
    });
  },
      m = function m(z) {
    return new b.Monad(function () {
      return x(z);
    }, function () {
      return l(z);
    });
  },
      l = function l(z) {
    return new g.Bind(function () {
      return r(z);
    }, function (t) {
      return function (q) {
        return g.bind(z.Bind1())(t)(function (u) {
          if (u instanceof d.Nothing) return f.pure(z.Applicative0())(d.Nothing.value);
          if (u instanceof d.Just) return q(u.value0);
          throw Error("Failed pattern match at Control.Monad.Maybe.Trans (line 54, column 11 - line 56, column 42): " + [u.constructor.name]);
        });
      };
    });
  },
      r = function r(z) {
    return new k.Apply(function () {
      return n(z.Bind1().Apply0().Functor0());
    }, b.ap(m(z)));
  },
      x = function x(z) {
    return new f.Applicative(function () {
      return r(z);
    }, function () {
      var t = f.pure(z.Applicative0());
      return function (q) {
        return t(d.Just.create(q));
      };
    }());
  };

  c.MaybeT = function (z) {
    return z;
  };

  c.runMaybeT = function (z) {
    return z;
  };

  c.applicativeMaybeT = x;
  c.bindMaybeT = l;
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
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Control.Monad"],
      d = new a["Data.Functor"].Functor(f.map_);
  a = new e.Monad(function () {
    return l;
  }, function () {
    return n;
  });
  var n = new b.Bind(function () {
    return m;
  }, f.bind_),
      m = new g.Apply(function () {
    return d;
  }, e.ap(a)),
      l = new k.Applicative(function () {
    return m;
  }, f.pure_);
  c.applicativeST = l;
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
  a["Control.Monad.State.Trans"] = a["Control.Monad.State.Trans"] || {};
  var c = a["Control.Monad.State.Trans"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Monad"],
      e = a["Control.Monad.State.Class"],
      d = a["Data.Functor"],
      n = a["Data.Tuple"],
      m = a["Data.Unit"];
  a = new a["Control.Lazy"].Lazy(function (q) {
    return function (u) {
      return q(m.unit)(u);
    };
  });

  var l = function l(q) {
    return new d.Functor(function (u) {
      return function (A) {
        return function (y) {
          return d.map(q)(function (B) {
            return new n.Tuple(u(B.value0), B.value1);
          })(A(y));
        };
      };
    });
  },
      r = function r(q) {
    return new b.Monad(function () {
      return t(q);
    }, function () {
      return x(q);
    });
  },
      x = function x(q) {
    return new g.Bind(function () {
      return z(q);
    }, function (u) {
      return function (A) {
        return function (y) {
          return g.bind(q.Bind1())(u(y))(function (B) {
            return A(B.value0)(B.value1);
          });
        };
      };
    });
  },
      z = function z(q) {
    return new k.Apply(function () {
      return l(q.Bind1().Apply0().Functor0());
    }, b.ap(r(q)));
  },
      t = function t(q) {
    return new f.Applicative(function () {
      return z(q);
    }, function (u) {
      return function (A) {
        return f.pure(q.Applicative0())(new n.Tuple(u, A));
      };
    });
  };

  c.StateT = function (q) {
    return q;
  };

  c.runStateT = function (q) {
    return q;
  };

  c.evalStateT = function (q) {
    return function (u) {
      return function (A) {
        return d.map(q)(n.fst)(u(A));
      };
    };
  };

  c.functorStateT = l;
  c.bindStateT = x;
  c.monadStateT = r;
  c.lazyStateT = a;

  c.monadStateStateT = function (q) {
    return new e.MonadState(function () {
      return r(q);
    }, function (u) {
      return function () {
        var A = f.pure(q.Applicative0());
        return function (y) {
          return A(u(y));
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
      k = a["Control.Apply"],
      g = a["Data.Bounded"],
      b = a["Data.Functor"],
      e = a["Data.Maybe"],
      d = a["Data.Newtype"],
      n = a["Data.Ord"],
      m = a["Data.Tuple"],
      l = a["Data.Unfoldable1"];

  a = function a(v) {
    return v;
  };

  var r = function r(v) {
    this.Bounded0 = v;
  },
      x = function x(v, C, L) {
    this.Ord0 = v;
    this.pred = C;
    this.succ = L;
  },
      z = function z(v, C, L, G, X) {
    this.Bounded0 = v;
    this.Enum1 = C;
    this.cardinality = L;
    this.fromEnum = G;
    this.toEnum = X;
  },
      t = new r(function () {
    return g.boundedBoolean;
  }),
      q = new d.Newtype(function (v) {
    return v;
  }, a),
      u = function u(v) {
    return new x(function () {
      return e.ordMaybe(v.Enum1().Ord0());
    }, function (C) {
      if (C instanceof e.Nothing) return e.Nothing.value;
      if (C instanceof e.Just) return new e.Just((0, v.Enum1().pred)(C.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [C.constructor.name]);
    }, function (C) {
      if (C instanceof e.Nothing) return new e.Just(new e.Just(g.bottom(v.Bounded0())));
      if (C instanceof e.Just) return b.map(e.functorMaybe)(e.Just.create)((0, v.Enum1().succ)(C.value0));
      throw Error("Failed pattern match at Data.Enum (line 82, column 1 - line 86, column 32): " + [C.constructor.name]);
    });
  },
      A = new x(function () {
    return n.ordBoolean;
  }, function (v) {
    return v ? new e.Just(!1) : e.Nothing.value;
  }, function (v) {
    return v ? e.Nothing.value : new e.Just(!0);
  }),
      y = function y(v) {
    return function (C) {
      return function (L) {
        return v(C(L) + 1 | 0);
      };
    };
  },
      B = function B(v) {
    return function (C) {
      return function (L) {
        return v(C(L) - 1 | 0);
      };
    };
  },
      w = function w(v) {
    return v >= g.bottom(g.boundedInt) && v <= g.top(g.boundedInt) ? new e.Just(f.fromCharCode(v)) : e.Nothing.value;
  },
      F = new x(function () {
    return n.ordChar;
  }, B(w)(f.toCharCode), y(w)(f.toCharCode));

  w = new z(function () {
    return g.boundedChar;
  }, function () {
    return F;
  }, f.toCharCode(g.top(g.boundedChar)) - f.toCharCode(g.bottom(g.boundedChar)) | 0, f.toCharCode, w);
  var E = new z(function () {
    return g.boundedBoolean;
  }, function () {
    return A;
  }, 2, function (v) {
    if (!v) return 0;
    if (v) return 1;
    throw Error("Failed pattern match at Data.Enum (line 120, column 1 - line 126, column 20): " + [v.constructor.name]);
  }, function (v) {
    return 0 === v ? new e.Just(!1) : 1 === v ? new e.Just(!0) : e.Nothing.value;
  });
  c.Enum = x;
  c.BoundedEnum = z;

  c.toEnum = function (v) {
    return v.toEnum;
  };

  c.fromEnum = function (v) {
    return v.fromEnum;
  };

  c.toEnumWithDefaults = function (v) {
    return function (C) {
      return function (L) {
        return function (G) {
          var X = (0, v.toEnum)(G);
          if (X instanceof e.Just) return X.value0;
          if (X instanceof e.Nothing) return G < (0, v.fromEnum)(g.bottom(v.Bounded0())) ? C : L;
          throw Error("Failed pattern match at Data.Enum (line 160, column 33 - line 162, column 62): " + [X.constructor.name]);
        };
      };
    };
  };

  c.Cardinality = a;

  c.upFromIncluding = function (v) {
    return function (C) {
      return l.unfoldr1(C)(k.apply(k.applyFn)(m.Tuple.create)(v.succ));
    };
  };

  c.defaultSucc = y;
  c.defaultPred = B;
  c.SmallBounded = r;
  c.boundedEnumBoolean = E;
  c.boundedEnumChar = w;
  c.newtypeCardinality = q;

  c.boundedEnumMaybe = function (v) {
    return function (C) {
      return new z(function () {
        return e.boundedMaybe(C.Bounded0());
      }, function () {
        return u(C);
      }, d.unwrap(q)(C.cardinality) + 1 | 0, function (L) {
        if (L instanceof e.Nothing) return 0;
        if (L instanceof e.Just) return (0, C.fromEnum)(L.value0) + 1 | 0;
        throw Error("Failed pattern match at Data.Enum (line 334, column 1 - line 340, column 39): " + [L.constructor.name]);
      }, function (L) {
        return 0 === L ? e.Nothing.value : b.map(e.functorMaybe)(e.Just.create)((0, C.toEnum)(L - 1 | 0));
      });
    };
  };

  c.smallBoundedBoolean = t;
})(PS);

(function (a) {
  a["Data.Char"] = a["Data.Char"] || {};
  var c = a["Data.Char"];
  a = a["Data.Enum"];
  a = a.toEnum(a.boundedEnumChar);
  c.fromCharCode = a;
})(PS);

(function (a) {
  a["Data.CommutativeRing"] = a["Data.CommutativeRing"] || {};
  var c = a["Data.CommutativeRing"],
      f = a["Data.Ring"];
  a = new function (k) {
    this.Ring0 = k;
  }(function () {
    return f.ringInt;
  });
  c.commutativeRingInt = a;
})(PS);

(function (a) {
  a["Data.Const"] = a["Data.Const"] || {};

  var c = a["Data.Const"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Data.Functor"],
      b = a["Data.Monoid"],
      e = a["Data.Semigroup"],
      d = function d(l) {
    return l;
  };

  a = new a["Data.Newtype"].Newtype(function (l) {
    return l;
  }, d);

  var n = new g.Functor(function (l) {
    return function (r) {
      return r;
    };
  }),
      m = function m(l) {
    return new k.Apply(function () {
      return n;
    }, function (r) {
      return function (x) {
        return e.append(l)(r)(x);
      };
    });
  };

  c.Const = d;
  c.newtypeConst = a;

  c.applicativeConst = function (l) {
    return new f.Applicative(function () {
      return m(l.Semigroup0());
    }, function (r) {
      return b.mempty(l);
    });
  };
})(PS);

(function (a) {
  var c = function c(f, k, g) {
    k = new Date(Date.UTC(f, k, g));
    0 <= f && 100 > f && k.setUTCFullYear(f);
    return k;
  };

  a.canonicalDateImpl = function (f, k, g, b) {
    k = c(k, g - 1, b);
    return f(k.getUTCFullYear())(k.getUTCMonth() + 1)(k.getUTCDate());
  };

  a.calcWeekday = function (f, k, g) {
    return c(f, k - 1, g).getUTCDay();
  };
})(PS["Data.Date"] = PS["Data.Date"] || {});

(function (a) {
  a["Data.Date.Component"] = a["Data.Date.Component"] || {};

  var c = a["Data.Date.Component"],
      f = a["Data.Boolean"],
      k = a["Data.Bounded"],
      g = a["Data.Enum"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      d = a["Data.Ord"],
      n = a["Data.Ordering"],
      m = a["Data.Show"],
      l = function () {
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
      z = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      t = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      q = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      u = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      A = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      y = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      B = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      w = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      F = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      E = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      v = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      C = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      L = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      G = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      X = function () {
    function D() {}

    D.value = new D();
    return D;
  }(),
      M = function () {
    function D() {}

    D.value = new D();
    return D;
  }();

  a = new m.Show(function (D) {
    if (D instanceof l) return "Monday";
    if (D instanceof r) return "Tuesday";
    if (D instanceof x) return "Wednesday";
    if (D instanceof z) return "Thursday";
    if (D instanceof t) return "Friday";
    if (D instanceof q) return "Saturday";
    if (D instanceof u) return "Sunday";
    throw Error("Failed pattern match at Data.Date.Component (line 184, column 1 - line 191, column 25): " + [D.constructor.name]);
  });
  m = new m.Show(function (D) {
    if (D instanceof A) return "January";
    if (D instanceof y) return "February";
    if (D instanceof B) return "March";
    if (D instanceof w) return "April";
    if (D instanceof F) return "May";
    if (D instanceof E) return "June";
    if (D instanceof v) return "July";
    if (D instanceof C) return "August";
    if (D instanceof L) return "September";
    if (D instanceof G) return "October";
    if (D instanceof X) return "November";
    if (D instanceof M) return "December";
    throw Error("Failed pattern match at Data.Date.Component (line 101, column 1 - line 113, column 29): " + [D.constructor.name]);
  });
  var K = d.ordInt,
      O = d.ordInt,
      p = new b.Eq(function (D) {
    return function (U) {
      return D instanceof l && U instanceof l || D instanceof r && U instanceof r || D instanceof x && U instanceof x || D instanceof z && U instanceof z || D instanceof t && U instanceof t || D instanceof q && U instanceof q || D instanceof u && U instanceof u ? !0 : !1;
    };
  }),
      Q = new d.Ord(function () {
    return p;
  }, function (D) {
    return function (U) {
      if (D instanceof l && U instanceof l) return n.EQ.value;
      if (D instanceof l) return n.LT.value;
      if (U instanceof l) return n.GT.value;
      if (D instanceof r && U instanceof r) return n.EQ.value;
      if (D instanceof r) return n.LT.value;
      if (U instanceof r) return n.GT.value;
      if (D instanceof x && U instanceof x) return n.EQ.value;
      if (D instanceof x) return n.LT.value;
      if (U instanceof x) return n.GT.value;
      if (D instanceof z && U instanceof z) return n.EQ.value;
      if (D instanceof z) return n.LT.value;
      if (U instanceof z) return n.GT.value;
      if (D instanceof t && U instanceof t) return n.EQ.value;
      if (D instanceof t) return n.LT.value;
      if (U instanceof t) return n.GT.value;
      if (D instanceof q && U instanceof q) return n.EQ.value;
      if (D instanceof q) return n.LT.value;
      if (U instanceof q) return n.GT.value;
      if (D instanceof u && U instanceof u) return n.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 154, column 1 - line 154, column 42): " + [D.constructor.name, U.constructor.name]);
    };
  }),
      I = new b.Eq(function (D) {
    return function (U) {
      return D instanceof A && U instanceof A || D instanceof y && U instanceof y || D instanceof B && U instanceof B || D instanceof w && U instanceof w || D instanceof F && U instanceof F || D instanceof E && U instanceof E || D instanceof v && U instanceof v || D instanceof C && U instanceof C || D instanceof L && U instanceof L || D instanceof G && U instanceof G || D instanceof X && U instanceof X || D instanceof M && U instanceof M ? !0 : !1;
    };
  }),
      R = new d.Ord(function () {
    return I;
  }, function (D) {
    return function (U) {
      if (D instanceof A && U instanceof A) return n.EQ.value;
      if (D instanceof A) return n.LT.value;
      if (U instanceof A) return n.GT.value;
      if (D instanceof y && U instanceof y) return n.EQ.value;
      if (D instanceof y) return n.LT.value;
      if (U instanceof y) return n.GT.value;
      if (D instanceof B && U instanceof B) return n.EQ.value;
      if (D instanceof B) return n.LT.value;
      if (U instanceof B) return n.GT.value;
      if (D instanceof w && U instanceof w) return n.EQ.value;
      if (D instanceof w) return n.LT.value;
      if (U instanceof w) return n.GT.value;
      if (D instanceof F && U instanceof F) return n.EQ.value;
      if (D instanceof F) return n.LT.value;
      if (U instanceof F) return n.GT.value;
      if (D instanceof E && U instanceof E) return n.EQ.value;
      if (D instanceof E) return n.LT.value;
      if (U instanceof E) return n.GT.value;
      if (D instanceof v && U instanceof v) return n.EQ.value;
      if (D instanceof v) return n.LT.value;
      if (U instanceof v) return n.GT.value;
      if (D instanceof C && U instanceof C) return n.EQ.value;
      if (D instanceof C) return n.LT.value;
      if (U instanceof C) return n.GT.value;
      if (D instanceof L && U instanceof L) return n.EQ.value;
      if (D instanceof L) return n.LT.value;
      if (U instanceof L) return n.GT.value;
      if (D instanceof G && U instanceof G) return n.EQ.value;
      if (D instanceof G) return n.LT.value;
      if (U instanceof G) return n.GT.value;
      if (D instanceof X && U instanceof X) return n.EQ.value;
      if (D instanceof X) return n.LT.value;
      if (U instanceof X) return n.GT.value;
      if (D instanceof M && U instanceof M) return n.EQ.value;
      throw Error("Failed pattern match at Data.Date.Component (line 61, column 1 - line 61, column 38): " + [D.constructor.name, U.constructor.name]);
    };
  }),
      fa = new k.Bounded(function () {
    return K;
  }, -271820, 275759),
      T = new k.Bounded(function () {
    return Q;
  }, l.value, u.value),
      V = new k.Bounded(function () {
    return R;
  }, A.value, M.value),
      ca = new g.BoundedEnum(function () {
    return fa;
  }, function () {
    return ha;
  }, 547580, function (D) {
    return D;
  }, function (D) {
    if (-271820 <= D && 275759 >= D) return new e.Just(D);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 35, column 1 - line 40, column 24): " + [D.constructor.name]);
  }),
      ha = new g.Enum(function () {
    return K;
  }, function () {
    var D = g.toEnum(ca),
        U = g.fromEnum(ca);
    return function (P) {
      return D(U(P) - 1 | 0);
    };
  }(), function () {
    var D = g.toEnum(ca),
        U = g.fromEnum(ca);
    return function (P) {
      return D(U(P) + 1 | 0);
    };
  }()),
      da = new g.BoundedEnum(function () {
    return T;
  }, function () {
    return Y;
  }, 7, function (D) {
    if (D instanceof l) return 1;
    if (D instanceof r) return 2;
    if (D instanceof x) return 3;
    if (D instanceof z) return 4;
    if (D instanceof t) return 5;
    if (D instanceof q) return 6;
    if (D instanceof u) return 7;
    throw Error("Failed pattern match at Data.Date.Component (line 175, column 14 - line 182, column 16): " + [D.constructor.name]);
  }, function (D) {
    return 1 === D ? new e.Just(l.value) : 2 === D ? new e.Just(r.value) : 3 === D ? new e.Just(x.value) : 4 === D ? new e.Just(z.value) : 5 === D ? new e.Just(t.value) : 6 === D ? new e.Just(q.value) : 7 === D ? new e.Just(u.value) : e.Nothing.value;
  }),
      Y = new g.Enum(function () {
    return Q;
  }, function () {
    var D = g.toEnum(da),
        U = g.fromEnum(da);
    return function (P) {
      return D(U(P) - 1 | 0);
    };
  }(), function () {
    var D = g.toEnum(da),
        U = g.fromEnum(da);
    return function (P) {
      return D(U(P) + 1 | 0);
    };
  }()),
      aa = new g.BoundedEnum(function () {
    return V;
  }, function () {
    return ja;
  }, 12, function (D) {
    if (D instanceof A) return 1;
    if (D instanceof y) return 2;
    if (D instanceof B) return 3;
    if (D instanceof w) return 4;
    if (D instanceof F) return 5;
    if (D instanceof E) return 6;
    if (D instanceof v) return 7;
    if (D instanceof C) return 8;
    if (D instanceof L) return 9;
    if (D instanceof G) return 10;
    if (D instanceof X) return 11;
    if (D instanceof M) return 12;
    throw Error("Failed pattern match at Data.Date.Component (line 87, column 14 - line 99, column 19): " + [D.constructor.name]);
  }, function (D) {
    return 1 === D ? new e.Just(A.value) : 2 === D ? new e.Just(y.value) : 3 === D ? new e.Just(B.value) : 4 === D ? new e.Just(w.value) : 5 === D ? new e.Just(F.value) : 6 === D ? new e.Just(E.value) : 7 === D ? new e.Just(v.value) : 8 === D ? new e.Just(C.value) : 9 === D ? new e.Just(L.value) : 10 === D ? new e.Just(G.value) : 11 === D ? new e.Just(X.value) : 12 === D ? new e.Just(M.value) : e.Nothing.value;
  }),
      ja = new g.Enum(function () {
    return R;
  }, function () {
    var D = g.toEnum(aa),
        U = g.fromEnum(aa);
    return function (P) {
      return D(U(P) - 1 | 0);
    };
  }(), function () {
    var D = g.toEnum(aa),
        U = g.fromEnum(aa);
    return function (P) {
      return D(U(P) + 1 | 0);
    };
  }()),
      va = new k.Bounded(function () {
    return O;
  }, 1, 31),
      N = new g.BoundedEnum(function () {
    return va;
  }, function () {
    return W;
  }, 31, function (D) {
    return D;
  }, function (D) {
    if (1 <= D && 31 >= D) return new e.Just(D);
    if (f.otherwise) return e.Nothing.value;
    throw Error("Failed pattern match at Data.Date.Component (line 133, column 1 - line 138, column 23): " + [D.constructor.name]);
  }),
      W = new g.Enum(function () {
    return O;
  }, function () {
    var D = g.toEnum(N),
        U = g.fromEnum(N);
    return function (P) {
      return D(U(P) - 1 | 0);
    };
  }(), function () {
    var D = g.toEnum(N),
        U = g.fromEnum(N);
    return function (P) {
      return D(U(P) + 1 | 0);
    };
  }());
  c.January = A;
  c.February = y;
  c.March = B;
  c.April = w;
  c.May = F;
  c.June = E;
  c.July = v;
  c.August = C;
  c.September = L;
  c.October = G;
  c.November = X;
  c.December = M;
  c.boundedYear = fa;
  c.boundedEnumYear = ca;
  c.boundedMonth = V;
  c.boundedEnumMonth = aa;
  c.showMonth = m;
  c.boundedDay = va;
  c.boundedEnumDay = N;
  c.boundedEnumWeekday = da;
  c.showWeekday = a;
})(PS);

(function (a) {
  a["Data.Date"] = a["Data.Date"] || {};

  var c = a["Data.Date"],
      f = a["Data.Date"],
      k = a["Data.Date.Component"],
      g = a["Data.Enum"],
      b = a["Data.Maybe"],
      e = function () {
    function d(n, m, l) {
      this.value0 = n;
      this.value1 = m;
      this.value2 = l;
    }

    d.create = function (n) {
      return function (m) {
        return function (l) {
          return new d(n, m, l);
        };
      };
    };

    return d;
  }();

  c.canonicalDate = function (d) {
    return function (n) {
      return function (m) {
        return f.canonicalDateImpl(function (l) {
          return function (r) {
            return function (x) {
              return new e(l, b.fromJust()(g.toEnum(k.boundedEnumMonth)(r)), x);
            };
          };
        }, d, g.fromEnum(k.boundedEnumMonth)(n), m);
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

  c.weekday = function (d) {
    d = f.calcWeekday(d.value0, g.fromEnum(k.boundedEnumMonth)(d.value1), d.value2);
    return 0 === d ? b.fromJust()(g.toEnum(k.boundedEnumWeekday)(7)) : b.fromJust()(g.toEnum(k.boundedEnumWeekday)(d));
  };
})(PS);

(function (a) {
  a["Data.DateTime"] = a["Data.DateTime"] || {};
  a = a["Data.DateTime"];

  var c = function () {
    function f(k, g) {
      this.value0 = k;
      this.value1 = g;
    }

    f.create = function (k) {
      return function (g) {
        return new f(k, g);
      };
    };

    return f;
  }();

  a.DateTime = c;
})(PS);

(function (a) {
  a.fromDateTimeImpl = function (c, f, k, g, b, e, d) {
    f = new Date(Date.UTC(c, f - 1, k, g, b, e, d));
    0 <= c && 100 > c && f.setUTCFullYear(c);
    return f.getTime();
  };

  a.toDateTimeImpl = function (c) {
    return function (f) {
      f = new Date(f);
      return c(f.getUTCFullYear())(f.getUTCMonth() + 1)(f.getUTCDate())(f.getUTCHours())(f.getUTCMinutes())(f.getUTCSeconds())(f.getUTCMilliseconds());
    };
  };
})(PS["Data.DateTime.Instant"] = PS["Data.DateTime.Instant"] || {});

(function (a) {
  a["Data.Time"] = a["Data.Time"] || {};
  a = a["Data.Time"];

  var c = function () {
    function f(k, g, b, e) {
      this.value0 = k;
      this.value1 = g;
      this.value2 = b;
      this.value3 = e;
    }

    f.create = function (k) {
      return function (g) {
        return function (b) {
          return function (e) {
            return new f(k, g, b, e);
          };
        };
      };
    };

    return f;
  }();

  a.Time = c;

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
  var c = a["Data.DateTime.Instant"],
      f = a["Data.DateTime.Instant"],
      k = a["Data.Date"],
      g = a["Data.Date.Component"],
      b = a["Data.DateTime"],
      e = a["Data.Enum"],
      d = a["Data.Maybe"],
      n = a["Data.Time"];

  a = function () {
    return f.toDateTimeImpl(function (m) {
      return function (l) {
        return function (r) {
          return function (x) {
            return function (z) {
              return function (t) {
                return function (q) {
                  return new b.DateTime(k.canonicalDate(m)(d.fromJust()(e.toEnum(g.boundedEnumMonth)(l)))(r), new n.Time(x, z, t, q));
                };
              };
            };
          };
        };
      };
    });
  }();

  c.unInstant = function (m) {
    return m;
  };

  c.fromDateTime = function (m) {
    return f.fromDateTimeImpl(k.year(m.value0), e.fromEnum(g.boundedEnumMonth)(k.month(m.value0)), k.day(m.value0), n.hour(m.value1), n.minute(m.value1), n.second(m.value1), n.millisecond(m.value1));
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
      k = a["Data.CommutativeRing"];
  a = new function (g, b, e, d) {
    this.CommutativeRing0 = g;
    this.degree = b;
    this.div = e;
    this.mod = d;
  }(function () {
    return k.commutativeRingInt;
  }, f.intDegree, f.intDiv, f.intMod);

  c.div = function (g) {
    return g.div;
  };

  c.mod = function (g) {
    return g.mod;
  };

  c.euclideanRingInt = a;
})(PS);

(function (a) {
  a.split = function (c) {
    return function (f) {
      return f.split(c);
    };
  };

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

  c.split = a.split;
  c.toUpper = a.toUpper;
  c.trim = a.trim;
})(PS);

(function (a) {
  a["Data.String.Pattern"] = a["Data.String.Pattern"] || {};

  var c = a["Data.String.Pattern"],
      f = function f(k) {
    return k;
  };

  a = new a["Data.Newtype"].Newtype(function (k) {
    return k;
  }, f);
  c.Pattern = f;
  c.newtypePattern = a;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Pos"] = a["Text.Parsing.Parser.Pos"] || {};
  var c = a["Text.Parsing.Parser.Pos"],
      f = a["Data.EuclideanRing"],
      k = a["Data.Foldable"],
      g = a["Data.Newtype"],
      b = a["Data.String.Common"],
      e = a["Data.String.Pattern"];
  c.initialPos = {
    line: 1,
    column: 1
  };

  c.updatePosString = function (d) {
    return function (n) {
      return k.foldl(k.foldableArray)(function (m) {
        return function (l) {
          return "\n" === l || "\r" === l ? {
            line: m.line + 1 | 0,
            column: 1
          } : "\t" === l ? {
            line: m.line,
            column: (m.column + 8 | 0) - f.mod(f.euclideanRingInt)(m.column - 1 | 0)(8) | 0
          } : {
            line: m.line,
            column: m.column + 1 | 0
          };
        };
      })(d)(b.split(g.wrap(e.newtypePattern)(""))(n));
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser"] = a["Text.Parsing.Parser"] || {};

  var c = a["Text.Parsing.Parser"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Bind"],
      e = a["Control.Lazy"],
      d = a["Control.Monad.Error.Class"],
      n = a["Control.Monad.Except.Trans"],
      m = a["Control.Monad.State.Class"],
      l = a["Control.Monad.State.Trans"],
      r = a["Control.Plus"],
      x = a["Data.Either"],
      z = a["Data.Identity"],
      t = a["Data.Newtype"],
      q = a["Data.Tuple"],
      u = a["Text.Parsing.Parser.Pos"],
      A = function () {
    function p(Q, I, R) {
      this.value0 = Q;
      this.value1 = I;
      this.value2 = R;
    }

    p.create = function (Q) {
      return function (I) {
        return function (R) {
          return new p(Q, I, R);
        };
      };
    };

    return p;
  }(),
      y = function () {
    function p(Q, I) {
      this.value0 = Q;
      this.value1 = I;
    }

    p.create = function (Q) {
      return function (I) {
        return new p(Q, I);
      };
    };

    return p;
  }();

  a = function a(p) {
    return p;
  };

  var B = new t.Newtype(function (p) {
    return p;
  }, a),
      w = function w(p) {
    return function (Q) {
      return function (I) {
        var R = new A(Q, u.initialPos, !1);
        return l.evalStateT(p.Bind1().Apply0().Functor0())(n.runExceptT(t.unwrap(B)(I)))(R);
      };
    };
  },
      F = function F(p) {
    return n.monadStateExceptT(l.monadStateStateT(p));
  },
      E = function E(p) {
    return m.gets(F(p))(function (Q) {
      return Q.value1;
    });
  },
      v = new e.Lazy(function (p) {
    return e.defer(l.lazyStateT)(function () {
      var Q = t.unwrap(B);
      return function (I) {
        return n.runExceptT(Q(p(I)));
      };
    }());
  }),
      C = function C(p) {
    return n.functorExceptT(l.functorStateT(p));
  },
      L = function L(p) {
    return function (Q) {
      return function (I) {
        return d.throwError(n.monadThrowExceptT(l.monadStateT(p)))(new y(Q, I));
      };
    };
  },
      G = function G(p) {
    return n.bindExceptT(l.monadStateT(p));
  },
      X = function X(p) {
    return function (Q) {
      return b.bindFlipped(G(p))(L(p)(Q))(E(p));
    };
  },
      M = function M(p) {
    return n.applicativeExceptT(l.monadStateT(p));
  },
      K = function K(p) {
    return new f.Alt(function () {
      return C(p.Bind1().Apply0().Functor0());
    }, function (Q) {
      return function (I) {
        return n.ExceptT(l.StateT(function (R) {
          return b.bind(p.Bind1())(l.runStateT(n.runExceptT(t.unwrap(B)(Q)))(new A(R.value0, R.value1, !1)))(function (fa) {
            return fa.value0 instanceof x.Left && !fa.value1.value2 ? l.runStateT(n.runExceptT(t.unwrap(B)(I)))(R) : g.pure(p.Applicative0())(new q.Tuple(fa.value0, fa.value1));
          });
        }));
      };
    });
  },
      O = function O(p) {
    return new r.Plus(function () {
      return K(p);
    }, X(p)("No alternative"));
  };

  c.ParseError = y;

  c.parseErrorMessage = function (p) {
    return p.value0;
  };

  c.parseErrorPosition = function (p) {
    return p.value1;
  };

  c.ParseState = A;
  c.ParserT = a;

  c.runParser = function (p) {
    var Q = t.unwrap(z.newtypeIdentity),
        I = w(z.monadIdentity)(p);
    return function (R) {
      return Q(I(R));
    };
  };

  c.fail = X;
  c.newtypeParserT = B;
  c.lazyParserT = v;
  c.functorParserT = C;

  c.applyParserT = function (p) {
    return n.applyExceptT(l.monadStateT(p));
  };

  c.applicativeParserT = M;
  c.bindParserT = G;
  c.monadStateParserT = F;
  c.altParserT = K;
  c.plusParserT = O;

  c.alternativeParserT = function (p) {
    return new k.Alternative(function () {
      return M(p);
    }, function () {
      return O(p);
    });
  };
})(PS);

(function (a) {
  a["Text.Parsing.Parser.Combinators"] = a["Text.Parsing.Parser.Combinators"] || {};
  var c = a["Text.Parsing.Parser.Combinators"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Control.Monad.Except.Trans"],
      e = a["Control.Monad.State.Trans"],
      d = a["Control.Plus"],
      n = a["Data.Either"],
      m = a["Data.Foldable"],
      l = a["Data.Newtype"],
      r = a["Data.Tuple"],
      x = a["Text.Parsing.Parser"];

  c.withErrorMessage = function (z) {
    return function (t) {
      return function (q) {
        return f.alt(x.altParserT(z))(t)(x.fail(z)("Expected " + q));
      };
    };
  };

  c["try"] = function (z) {
    return function (t) {
      return x.ParserT(b.ExceptT(e.StateT(function (q) {
        return g.bind(z.Bind1())(e.runStateT(b.runExceptT(l.unwrap(x.newtypeParserT)(t)))(q))(function (u) {
          return u.value0 instanceof n.Left ? k.pure(z.Applicative0())(new r.Tuple(u.value0, new x.ParseState(u.value1.value0, u.value1.value1, q.value2))) : k.pure(z.Applicative0())(new r.Tuple(u.value0, u.value1));
        });
      })));
    };
  };

  c.tryRethrow = function (z) {
    return function (t) {
      return x.ParserT(b.ExceptT(e.StateT(function (q) {
        return g.bind(z.Bind1())(e.runStateT(b.runExceptT(l.unwrap(x.newtypeParserT)(t)))(q))(function (u) {
          return u.value0 instanceof n.Left ? k.pure(z.Applicative0())(new r.Tuple(new n.Left(new x.ParseError(u.value0.value0.value0, q.value1)), new x.ParseState(u.value1.value0, u.value1.value1, q.value2))) : k.pure(z.Applicative0())(new r.Tuple(u.value0, u.value1));
        });
      })));
    };
  };

  c.choice = function (z) {
    return function (t) {
      return m.foldl(z)(f.alt(x.altParserT(t)))(d.empty(x.plusParserT(t)));
    };
  };
})(PS);

(function (a) {
  var c = "function" === typeof Array.from,
      f = "undefined" !== typeof Symbol && null != Symbol && "undefined" !== typeof Symbol.iterator && "function" === typeof String.prototype[Symbol.iterator],
      k = "function" === typeof String.prototype.fromCodePoint,
      g = "function" === typeof String.prototype.codePointAt;

  a._unsafeCodePointAt0 = function (b) {
    return g ? function (e) {
      return e.codePointAt(0);
    } : b;
  };

  a._codePointAt = function (b) {
    return function (e) {
      return function (d) {
        return function (n) {
          return function (m) {
            return function (l) {
              var r = l.length;
              if (0 > m || m >= r) return d;
              if (f) for (l = l[Symbol.iterator](), r = m;; --r) {
                var x = l.next();
                if (x.done) return d;
                if (0 === r) return e(n(x.value));
              }
              return b(m)(l);
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
    return function (e) {
      return f ? function (d) {
        var n = "";
        d = d[Symbol.iterator]();

        for (var m = 0; m < e; ++m) {
          var l = d.next();
          if (l.done) break;
          n += l.value;
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
  a.fromNumberImpl = function (c) {
    return function (f) {
      return function (k) {
        return (k | 0) === k ? c(k) : f;
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

  a._encodeURIComponent = function (c) {
    return function (f, k, g) {
      try {
        return k(c(g));
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
      k = a["Data.Function"],
      g = a["Data.Maybe"];

  c.encodeURIComponent = function (b) {
    return f._encodeURIComponent(k["const"](g.Nothing.value), g.Just.create, b);
  };

  c.infinity = f.infinity;
})(PS);

(function (a) {
  a.floor = Math.floor;
  a.round = Math.round;
})(PS.Math = PS.Math || {});

(function (a) {
  a.Math = a.Math || {};
  var c = a.Math;
  a = a.Math;
  c.floor = a.floor;
  c.round = a.round;
})(PS);

(function (a) {
  a["Data.Int"] = a["Data.Int"] || {};

  var c = a["Data.Int"],
      f = a["Data.Int"],
      k = a["Data.Boolean"],
      g = a["Data.Bounded"],
      b = a["Data.Maybe"],
      e = a.Global,
      d = a.Math,
      n = f.fromNumberImpl(b.Just.create)(b.Nothing.value),
      m = function m(l) {
    if (l === e.infinity || l === -e.infinity) return 0;
    if (l >= f.toNumber(g.top(g.boundedInt))) return g.top(g.boundedInt);
    if (l <= f.toNumber(g.bottom(g.boundedInt))) return g.bottom(g.boundedInt);
    if (k.otherwise) return b.fromMaybe(0)(n(l));
    throw Error("Failed pattern match at Data.Int (line 66, column 1 - line 66, column 29): " + [l.constructor.name]);
  };

  c.floor = function (l) {
    return m(d.floor(l));
  };

  c.round = function (l) {
    return m(d.round(l));
  };

  c.hexadecimal = 16;
  c.toNumber = f.toNumber;
  c.toStringAs = f.toStringAs;
})(PS);

(function (a) {
  a.fromCharArray = function (c) {
    return c.join("");
  };

  a.toCharArray = function (c) {
    return c.split("");
  };

  a.singleton = function (c) {
    return c;
  };

  a._charAt = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return 0 <= k && k < g.length ? c(g.charAt(k)) : f;
        };
      };
    };
  };

  a.length = function (c) {
    return c.length;
  };

  a._indexOf = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          g = g.indexOf(k);
          return -1 === g ? f : c(g);
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
  a["Data.String.CodeUnits"] = a["Data.String.CodeUnits"] || {};

  var c = a["Data.String.CodeUnits"],
      f = a["Data.String.CodeUnits"],
      k = a["Data.Maybe"],
      g = a["Data.String.Unsafe"],
      b = f._indexOf(k.Just.create)(k.Nothing.value);

  f._charAt(k.Just.create)(k.Nothing.value);

  c.contains = function (e) {
    var d = b(e);
    return function (n) {
      return k.isJust(d(n));
    };
  };

  c.uncons = function (e) {
    return "" === e ? k.Nothing.value : new k.Just({
      head: g.charAt(0)(e),
      tail: f.drop(1)(e)
    });
  };

  c.indexOf = b;
  c.singleton = f.singleton;
  c.fromCharArray = f.fromCharArray;
  c.toCharArray = f.toCharArray;
  c.length = f.length;
  c.take = f.take;
  c.drop = f.drop;
})(PS);

(function (a) {
  a.unfoldrArrayImpl = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (e) {
              for (var d = [];;) {
                e = b(e);
                if (c(e)) return d;
                e = f(e);
                d.push(k(e));
                e = g(e);
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
      k = a["Data.Functor"],
      g = a["Data.Maybe"],
      b = a["Data.Tuple"],
      e = a["Data.Unfoldable1"];
  a = new function (d, n) {
    this.Unfoldable10 = d;
    this.unfoldr = n;
  }(function () {
    return e.unfoldable1Array;
  }, a["Data.Unfoldable"].unfoldrArrayImpl(g.isNothing)(g.fromJust())(b.fst)(b.snd));

  c.unfoldr = function (d) {
    return d.unfoldr;
  };

  c.fromMaybe = function (d) {
    return (0, d.unfoldr)(function (n) {
      return k.map(g.functorMaybe)(f.flip(b.Tuple.create)(g.Nothing.value))(n);
    });
  };

  c.unfoldableArray = a;
})(PS);

(function (a) {
  a["Data.String.CodePoints"] = a["Data.String.CodePoints"] || {};

  var c = a["Data.String.CodePoints"],
      f = a["Data.String.CodePoints"],
      k = a["Data.Array"],
      g = a["Data.Boolean"],
      b = a["Data.Bounded"],
      e = a["Data.Enum"],
      d = a["Data.Eq"],
      n = a["Data.EuclideanRing"],
      m = a["Data.Functor"],
      l = a["Data.Int"],
      r = a["Data.Maybe"],
      x = a["Data.Ord"],
      z = a["Data.String.CodeUnits"],
      t = a["Data.String.Common"],
      q = a["Data.String.Unsafe"],
      u = a["Data.Tuple"],
      A = a["Data.Unfoldable"],
      y = function y(I) {
    return function (R) {
      return ((1024 * (I - 55296 | 0) | 0) + (R - 56320 | 0) | 0) + 65536 | 0;
    };
  };

  a = new a["Data.Show"].Show(function (I) {
    return "(CodePoint 0x" + (t.toUpper(l.toStringAs(l.hexadecimal)(I)) + ")");
  });

  var B = function B(I) {
    var R = z.length(I);
    if (0 === R) return r.Nothing.value;
    if (1 === R) return new r.Just({
      head: e.fromEnum(e.boundedEnumChar)(q.charAt(0)(I)),
      tail: ""
    });
    R = e.fromEnum(e.boundedEnumChar)(q.charAt(1)(I));
    var fa = e.fromEnum(e.boundedEnumChar)(q.charAt(0)(I));
    return 55296 <= fa && 56319 >= fa && 56320 <= R && 57343 >= R ? new r.Just({
      head: y(fa)(R),
      tail: z.drop(2)(I)
    }) : new r.Just({
      head: fa,
      tail: z.drop(1)(I)
    });
  },
      w = function w(I) {
    return m.map(r.functorMaybe)(function (R) {
      return new u.Tuple(R.head, R.tail);
    })(B(I));
  },
      F = f._unsafeCodePointAt0(function (I) {
    var R = e.fromEnum(e.boundedEnumChar)(q.charAt(0)(I));
    return 55296 <= R && 56319 >= R && 1 < z.length(I) && (I = e.fromEnum(e.boundedEnumChar)(q.charAt(1)(I)), 56320 <= I && 57343 >= I) ? y(R)(I) : R;
  }),
      E = f._toCodePointArray(function (I) {
    return A.unfoldr(A.unfoldableArray)(w)(I);
  })(F),
      v = function v(I) {
    return k.length(E(I));
  },
      C = function () {
    var I = e.toEnumWithDefaults(e.boundedEnumChar)(b.bottom(b.boundedChar))(b.top(b.boundedChar));
    return function (R) {
      return z.singleton(I(R));
    };
  }(),
      L = f._singleton(function (I) {
    if (65535 >= I) return C(I);
    var R = n.div(n.euclideanRingInt)(I - 65536 | 0)(1024) + 55296 | 0;
    I = n.mod(n.euclideanRingInt)(I - 65536 | 0)(1024) + 56320 | 0;
    return C(R) + C(I);
  }),
      G = function G(I) {
    return function (R) {
      if (1 > I) return "";
      var fa = B(R);
      return fa instanceof r.Just ? L(fa.value0.head) + G(I - 1 | 0)(fa.value0.tail) : R;
    };
  },
      X = f._take(G),
      M = new d.Eq(function (I) {
    return function (R) {
      return I === R;
    };
  }),
      K = new x.Ord(function () {
    return M;
  }, function (I) {
    return function (R) {
      return x.compare(x.ordInt)(I)(R);
    };
  }),
      O = function O(I) {
    return function (R) {
      for (var fa = I, T = !1, V; !T;) {
        V = fa;
        var ca = B(R);
        ca instanceof r.Just ? 0 === V ? (T = !0, V = new r.Just(ca.value0.head)) : (fa = V - 1 | 0, R = ca.value0.tail, V = void 0) : (T = !0, V = r.Nothing.value);
      }

      return V;
    };
  },
      p = new b.Bounded(function () {
    return K;
  }, 0, 1114111);

  d = new e.BoundedEnum(function () {
    return p;
  }, function () {
    return Q;
  }, 1114112, function (I) {
    return I;
  }, function (I) {
    if (0 <= I && 1114111 >= I) return new r.Just(I);
    if (g.otherwise) return r.Nothing.value;
    throw Error("Failed pattern match at Data.String.CodePoints (line 63, column 1 - line 68, column 26): " + [I.constructor.name]);
  });
  var Q = new e.Enum(function () {
    return K;
  }, e.defaultPred(e.toEnum(d))(e.fromEnum(d)), e.defaultSucc(e.toEnum(d))(e.fromEnum(d)));
  c.singleton = L;
  c.toCodePointArray = E;

  c.codePointAt = function (I) {
    return function (R) {
      return 0 > I || 0 === I && "" === R ? r.Nothing.value : 0 === I ? new r.Just(F(R)) : f._codePointAt(O)(r.Just.create)(r.Nothing.value)(F)(I)(R);
    };
  };

  c.length = v;

  c.indexOf = function (I) {
    return function (R) {
      return m.map(r.functorMaybe)(function (fa) {
        return v(z.take(fa)(R));
      })(z.indexOf(I)(R));
    };
  };

  c.take = X;

  c.drop = function (I) {
    return function (R) {
      return z.drop(z.length(X(I)(R)))(R);
    };
  };

  c.showCodePoint = a;
  c.boundedEnumCodePoint = d;
})(PS);

(function (a) {
  a["Text.Parsing.Parser.String"] = a["Text.Parsing.Parser.String"] || {};
  var c = a["Text.Parsing.Parser.String"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Control.Monad.State.Class"],
      b = a["Data.Eq"],
      e = a["Data.Foldable"],
      d = a["Data.Function"],
      n = a["Data.Maybe"],
      m = a["Data.Newtype"],
      l = a["Data.Show"],
      r = a["Data.String.CodePoints"],
      x = a["Data.String.CodeUnits"],
      z = a["Data.String.Pattern"],
      t = a["Text.Parsing.Parser"],
      q = a["Text.Parsing.Parser.Combinators"],
      u = a["Text.Parsing.Parser.Pos"];
  a = new function (B, w, F, E) {
    this.drop = B;
    this.indexOf = w;
    this["null"] = F;
    this.uncons = E;
  }(r.drop, r.indexOf, a["Data.String.Common"]["null"], x.uncons);

  var A = function A(B) {
    return function (w) {
      return k.bind(t.bindParserT(w))(g.gets(t.monadStateParserT(w))(function (F) {
        return F.value0;
      }))(function (F) {
        var E = (0, B.uncons)(F);
        if (E instanceof n.Nothing) return t.fail(w)("Unexpected EOF");
        if (E instanceof n.Just) return k.discard(k.discardUnit)(t.bindParserT(w))(g.modify_(t.monadStateParserT(w))(function (v) {
          return new t.ParseState(E.value0.tail, u.updatePosString(v.value1)(x.singleton(E.value0.head)), !0);
        }))(function () {
          return f.pure(t.applicativeParserT(w))(E.value0.head);
        });
        throw Error("Failed pattern match at Text.Parsing.Parser.String (line 56, column 3 - line 63, column 16): " + [E.constructor.name]);
      });
    };
  },
      y = function y(B) {
    return function (w) {
      return function (F) {
        return q.tryRethrow(w)(k.bind(t.bindParserT(w))(A(B)(w))(function (E) {
          return F(E) ? f.pure(t.applicativeParserT(w))(E) : t.fail(w)("Character '" + (x.singleton(E) + "' did not satisfy predicate"));
        }));
      };
    };
  };

  c.eof = function (B) {
    return function (w) {
      return k.bind(t.bindParserT(w))(g.gets(t.monadStateParserT(w))(function (F) {
        return F.value0;
      }))(function (F) {
        return f.unless(t.applicativeParserT(w))((0, B["null"])(F))(t.fail(w)("Expected EOF"));
      });
    };
  };

  c.string = function (B) {
    return function (w) {
      return function (F) {
        return k.bind(t.bindParserT(w))(g.gets(t.monadStateParserT(w))(function (E) {
          return E.value0;
        }))(function (E) {
          var v = (0, B.indexOf)(m.wrap(z.newtypePattern)(F))(E);
          return v instanceof n.Just && 0 === v.value0 ? k.discard(k.discardUnit)(t.bindParserT(w))(g.modify_(t.monadStateParserT(w))(function (C) {
            return new t.ParseState((0, B.drop)(r.length(F))(E), u.updatePosString(C.value1)(F), !0);
          }))(function () {
            return f.pure(t.applicativeParserT(w))(F);
          }) : t.fail(w)("Expected " + l.show(l.showString)(F));
        });
      };
    };
  };

  c.noneOf = function (B) {
    return function (w) {
      return function (F) {
        return q.withErrorMessage(w)(y(B)(w)(d.flip(e.notElem(e.foldableArray)(b.eqChar))(F)))("none of " + l.show(l.showArray(l.showChar))(F));
      };
    };
  };

  c.stringLikeString = a;
})(PS);

(function (a) {
  a["Data.Formatter.Parser.Utils"] = a["Data.Formatter.Parser.Utils"] || {};

  var c = a["Data.Formatter.Parser.Utils"],
      f = a["Control.Apply"],
      k = a["Data.Bifunctor"],
      g = a["Data.Either"],
      b = a["Data.Functor"],
      e = a["Data.Identity"],
      d = a["Data.Show"],
      n = a["Text.Parsing.Parser"],
      m = a["Text.Parsing.Parser.Combinators"],
      l = a["Text.Parsing.Parser.String"],
      r = function r(x) {
    var z = n.parseErrorMessage(x);
    x = n.parseErrorPosition(x);
    x = "(line " + (d.show(d.showInt)(x.line) + (", col " + (d.show(d.showInt)(x.column) + ")")));
    return z + (" " + x);
  };

  c.oneOfAs = function (x) {
    return function (z) {
      return function (t) {
        return function (q) {
          return function (u) {
            return m.choice(z)(t)(b.map(x)(function (A) {
              return b.voidLeft(n.functorParserT(t.Bind1().Apply0().Functor0()))(q(A.value0))(A.value1);
            })(u));
          };
        };
      };
    };
  };

  c.runP = function (x) {
    return function (z) {
      return function (t) {
        return k.lmap(g.bifunctorEither)(r)(n.runParser(t)(f.applyFirst(n.applyParserT(e.monadIdentity))(z)(l.eof(x)(e.monadIdentity))));
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Time.Component"] = a["Data.Time.Component"] || {};
  var c = a["Data.Time.Component"],
      f = a["Data.Boolean"],
      k = a["Data.Bounded"],
      g = a["Data.Enum"],
      b = a["Data.Maybe"];
  a = a["Data.Ord"];
  var e = a.ordInt,
      d = a.ordInt,
      n = a.ordInt,
      m = a.ordInt,
      l = new k.Bounded(function () {
    return e;
  }, 0, 59),
      r = new k.Bounded(function () {
    return d;
  }, 0, 59),
      x = new k.Bounded(function () {
    return n;
  }, 0, 999),
      z = new k.Bounded(function () {
    return m;
  }, 0, 23),
      t = new g.BoundedEnum(function () {
    return l;
  }, function () {
    return q;
  }, 60, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 59 >= E) return new b.Just(E);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 90, column 1 - line 95, column 26): " + [E.constructor.name]);
  }),
      q = new g.Enum(function () {
    return e;
  }, function () {
    var E = g.toEnum(t),
        v = g.fromEnum(t);
    return function (C) {
      return E(v(C) - 1 | 0);
    };
  }(), function () {
    var E = g.toEnum(t),
        v = g.fromEnum(t);
    return function (C) {
      return E(v(C) + 1 | 0);
    };
  }()),
      u = new g.BoundedEnum(function () {
    return r;
  }, function () {
    return A;
  }, 60, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 59 >= E) return new b.Just(E);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 61, column 1 - line 66, column 26): " + [E.constructor.name]);
  }),
      A = new g.Enum(function () {
    return d;
  }, function () {
    var E = g.toEnum(u),
        v = g.fromEnum(u);
    return function (C) {
      return E(v(C) - 1 | 0);
    };
  }(), function () {
    var E = g.toEnum(u),
        v = g.fromEnum(u);
    return function (C) {
      return E(v(C) + 1 | 0);
    };
  }()),
      y = new g.BoundedEnum(function () {
    return x;
  }, function () {
    return B;
  }, 1E3, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 999 >= E) return new b.Just(E);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 120, column 1 - line 125, column 31): " + [E.constructor.name]);
  }),
      B = new g.Enum(function () {
    return n;
  }, function () {
    var E = g.toEnum(y),
        v = g.fromEnum(y);
    return function (C) {
      return E(v(C) - 1 | 0);
    };
  }(), function () {
    var E = g.toEnum(y),
        v = g.fromEnum(y);
    return function (C) {
      return E(v(C) + 1 | 0);
    };
  }()),
      w = new g.BoundedEnum(function () {
    return z;
  }, function () {
    return F;
  }, 24, function (E) {
    return E;
  }, function (E) {
    if (0 <= E && 23 >= E) return new b.Just(E);
    if (f.otherwise) return b.Nothing.value;
    throw Error("Failed pattern match at Data.Time.Component (line 32, column 1 - line 37, column 24): " + [E.constructor.name]);
  }),
      F = new g.Enum(function () {
    return m;
  }, function () {
    var E = g.toEnum(w),
        v = g.fromEnum(w);
    return function (C) {
      return E(v(C) - 1 | 0);
    };
  }(), function () {
    var E = g.toEnum(w),
        v = g.fromEnum(w);
    return function (C) {
      return E(v(C) + 1 | 0);
    };
  }());
  c.boundedHour = z;
  c.boundedEnumHour = w;
  c.boundedMinute = r;
  c.boundedEnumMinute = u;
  c.boundedSecond = l;
  c.boundedEnumSecond = t;
  c.boundedMillisecond = x;
  c.boundedEnumMillisecond = y;
})(PS);

(function (a) {
  a["Data.Time.Duration"] = a["Data.Time.Duration"] || {};
  var c = a["Data.Time.Duration"];
  a = new a["Data.Newtype"].Newtype(function (f) {
    return f;
  }, function (f) {
    return f;
  });
  c.newtypeMilliseconds = a;
})(PS);

(function (a) {
  a["Data.Formatter.DateTime"] = a["Data.Formatter.DateTime"] || {};

  var c = a["Data.Formatter.DateTime"],
      f = a["Control.Alt"],
      k = a["Data.Array"],
      g = a["Data.Boolean"],
      b = a["Data.Date"],
      e = a["Data.Date.Component"],
      d = a["Data.DateTime.Instant"],
      n = a["Data.Either"],
      m = a["Data.Enum"],
      l = a["Data.EuclideanRing"],
      r = a["Data.Foldable"],
      x = a["Data.Formatter.Parser.Utils"],
      z = a["Data.Functor"],
      t = a["Data.Identity"],
      q = a["Data.Int"],
      u = a["Data.List"],
      A = a["Data.List.Types"],
      y = a["Data.Monoid"],
      B = a["Data.Newtype"],
      w = a["Data.Ord"],
      F = a["Data.Ring"],
      E = a["Data.Show"],
      v = a["Data.String.CodePoints"],
      C = a["Data.String.CodeUnits"],
      L = a["Data.Time"],
      G = a["Data.Time.Component"],
      X = a["Data.Time.Duration"],
      M = a["Data.Tuple"],
      K = a["Text.Parsing.Parser"],
      O = a["Text.Parsing.Parser.Combinators"],
      p = a["Text.Parsing.Parser.String"],
      Q = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      I = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      R = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      fa = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      T = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      V = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ca = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ha = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      da = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      Y = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      aa = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ja = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      va = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      N = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      W = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      D = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      U = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      P = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      J = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      na = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      H = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      Z = function () {
    function S() {}

    S.value = new S();
    return S;
  }(),
      ka = function () {
    function S(ua) {
      this.value0 = ua;
    }

    S.create = function (ua) {
      return new S(ua);
    };

    return S;
  }(),
      ia = function ia(S) {
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

  a = z.mapFlipped(K.functorParserT(t.functorIdentity))(k.some(K.alternativeParserT(t.monadIdentity))(K.lazyParserT)(p.noneOf(p.stringLikeString)(t.monadIdentity)(C.toCharArray("YMDEHhamsS"))))(C.fromCharArray);

  var la = function la(S) {
    if (0 > S) return "-" + la(-S | 0);
    if (10 > S) return "0" + E.show(E.showInt)(S);
    if (g.otherwise) return E.show(E.showInt)(S);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 192, column 1 - line 192, column 30): " + [S.constructor.name]);
  },
      qa = function qa(S) {
    if (0 > S) return "-" + qa(-S | 0);
    if (10 > S) return "000" + E.show(E.showInt)(S);
    if (100 > S) return "00" + E.show(E.showInt)(S);
    if (1E3 > S) return "0" + E.show(E.showInt)(S);
    if (g.otherwise) return E.show(E.showInt)(S);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 205, column 1 - line 205, column 33): " + [S.constructor.name]);
  },
      sa = function sa(S) {
    if (0 > S) return "-" + sa(-S | 0);
    if (10 > S) return "00" + E.show(E.showInt)(S);
    if (100 > S) return "0" + E.show(E.showInt)(S);
    if (g.otherwise) return E.show(E.showInt)(S);
    throw Error("Failed pattern match at Data.Formatter.DateTime (line 198, column 1 - line 198, column 30): " + [S.constructor.name]);
  };

  f = f.alt(K.altParserT(t.monadIdentity))(x.oneOfAs(z.functorArray)(r.foldableArray)(t.monadIdentity)(function () {
    var S = O["try"](t.monadIdentity),
        ua = p.string(p.stringLikeString)(t.monadIdentity);
    return function (Fa) {
      return S(ua(Fa));
    };
  }())([new M.Tuple("YYYY", Q.value), new M.Tuple("YY", I.value), new M.Tuple("Y", R.value), new M.Tuple("MMMM", fa.value), new M.Tuple("MMM", T.value), new M.Tuple("MM", V.value), new M.Tuple("DD", ca.value), new M.Tuple("D", ha.value), new M.Tuple("E", Y.value), new M.Tuple("X", da.value), new M.Tuple("dddd", aa.value), new M.Tuple("ddd", ja.value), new M.Tuple("HH", va.value), new M.Tuple("hh", N.value), new M.Tuple("a", W.value), new M.Tuple("mm", U.value), new M.Tuple("m", D.value), new M.Tuple("ss", J.value), new M.Tuple("s", P.value), new M.Tuple("SSS", na.value), new M.Tuple("SS", Z.value), new M.Tuple("S", H.value)]))(z.map(K.functorParserT(t.functorIdentity))(ka.create)(a));

  var xa = function xa(S) {
    S = E.show(E.showInt)(w.abs(w.ordInt)(F.ringInt)(S));
    var ua = v.length(S);
    return 1 === ua ? "0" + S : 2 === ua ? S : v.drop(ua - 2 | 0)(S);
  };

  u = u.some(K.alternativeParserT(t.monadIdentity))(K.lazyParserT)(f);

  var Ga = x.runP(p.stringLikeString)(u),
      Ba = function Ba(S) {
    return 0 === S ? 12 : S;
  },
      Ja = function Ja(S) {
    return function (ua) {
      if (ua instanceof Q) return qa(m.fromEnum(e.boundedEnumYear)(b.year(S.value0)));
      if (ua instanceof I) return xa(m.fromEnum(e.boundedEnumYear)(b.year(S.value0)));
      if (ua instanceof R) return E.show(E.showInt)(m.fromEnum(e.boundedEnumYear)(b.year(S.value0)));
      if (ua instanceof fa) return E.show(e.showMonth)(b.month(S.value0));
      if (ua instanceof T) return ia(b.month(S.value0));
      if (ua instanceof V) return la(m.fromEnum(e.boundedEnumMonth)(b.month(S.value0)));
      if (ua instanceof ca) return la(m.fromEnum(e.boundedEnumDay)(b.day(S.value0)));
      if (ua instanceof ha) return E.show(E.showInt)(m.fromEnum(e.boundedEnumDay)(b.day(S.value0)));
      if (ua instanceof da) return E.show(E.showInt)(q.floor(B.unwrap(X.newtypeMilliseconds)(d.unInstant(d.fromDateTime(S))) / 1E3));
      if (ua instanceof Y) return E.show(E.showInt)(m.fromEnum(e.boundedEnumWeekday)(b.weekday(S.value0)));
      if (ua instanceof aa) return E.show(e.showWeekday)(b.weekday(S.value0));
      if (ua instanceof ja) return v.take(3)(E.show(e.showWeekday)(b.weekday(S.value0)));
      if (ua instanceof va) return la(m.fromEnum(G.boundedEnumHour)(L.hour(S.value1)));
      if (ua instanceof N) return la(Ba(l.mod(l.euclideanRingInt)(m.fromEnum(G.boundedEnumHour)(L.hour(S.value1)))(12)));
      if (ua instanceof W) return 12 <= m.fromEnum(G.boundedEnumHour)(L.hour(S.value1)) ? "PM" : "AM";
      if (ua instanceof D) return E.show(E.showInt)(m.fromEnum(G.boundedEnumMinute)(L.minute(S.value1)));
      if (ua instanceof U) return la(m.fromEnum(G.boundedEnumMinute)(L.minute(S.value1)));
      if (ua instanceof P) return E.show(E.showInt)(m.fromEnum(G.boundedEnumSecond)(L.second(S.value1)));
      if (ua instanceof J) return la(m.fromEnum(G.boundedEnumSecond)(L.second(S.value1)));
      if (ua instanceof na) return sa(m.fromEnum(G.boundedEnumMillisecond)(L.millisecond(S.value1)));
      if (ua instanceof H) return E.show(E.showInt)(function (Fa) {
        return l.div(l.euclideanRingInt)(Fa)(100);
      }(m.fromEnum(G.boundedEnumMillisecond)(L.millisecond(S.value1))));
      if (ua instanceof Z) return la(function (Fa) {
        return l.div(l.euclideanRingInt)(Fa)(10);
      }(m.fromEnum(G.boundedEnumMillisecond)(L.millisecond(S.value1))));
      if (ua instanceof ka) return ua.value0;
      throw Error("Failed pattern match at Data.Formatter.DateTime (line 167, column 38 - line 190, column 20): " + [ua.constructor.name]);
    };
  },
      Ka = function Ka(S) {
    return function (ua) {
      return r.foldMap(A.foldableList)(y.monoidString)(Ja(ua))(S);
    };
  };

  c.formatDateTime = function (S) {
    return function (ua) {
      return z.mapFlipped(n.functorEither)(Ga(S))(function (Fa) {
        return Ka(Fa)(ua);
      });
    };
  };
})(PS);

(function (a) {
  a.runFn2 = function (c) {
    return function (f) {
      return function (k) {
        return c(f, k);
      };
    };
  };

  a.runFn4 = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return c(f, k, g, b);
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
    function g(b) {
      this.value0 = b;
    }

    g.create = function (b) {
      return new g(b);
    };

    return g;
  }(),
      f = function () {
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
  a.Inl = c;
  a.Inr = f;

  a.Constructor = function (g) {
    return g;
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Bounded"] = a["Data.Generic.Rep.Bounded"] || {};

  var c = a["Data.Generic.Rep.Bounded"],
      f = a["Data.Generic.Rep"],
      k = function k(n) {
    this["genericTop'"] = n;
  },
      g = function g(n) {
    this["genericBottom'"] = n;
  };

  a = new k(f.NoArguments.value);

  var b = function b(n) {
    return n["genericTop'"];
  },
      e = new g(f.NoArguments.value),
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
    return new g(new f.Inl(d(n)));
  };

  c.genericBottomConstructor = function (n) {
    return new g(d(n));
  };

  c.genericTopNoArguments = a;

  c.genericTopSum = function (n) {
    return new k(new f.Inr(b(n)));
  };

  c.genericTopConstructor = function (n) {
    return new k(b(n));
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Enum"] = a["Data.Generic.Rep.Enum"] || {};

  var c = a["Data.Generic.Rep.Enum"],
      f = a["Data.Boolean"],
      k = a["Data.Enum"],
      g = a["Data.Functor"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Maybe"],
      n = a["Data.Newtype"],
      m = function m(A, y) {
    this["genericPred'"] = A;
    this["genericSucc'"] = y;
  },
      l = function l(A, y, B) {
    this["genericCardinality'"] = A;
    this["genericFromEnum'"] = y;
    this["genericToEnum'"] = B;
  },
      r = function r(A) {
    return A["genericToEnum'"];
  },
      x = function x(A) {
    return A["genericSucc'"];
  },
      z = function z(A) {
    return A["genericPred'"];
  },
      t = function t(A) {
    return A["genericFromEnum'"];
  };

  a = new m(function (A) {
    return d.Nothing.value;
  }, function (A) {
    return d.Nothing.value;
  });

  var q = function q(A) {
    return A["genericCardinality'"];
  },
      u = new l(1, function (A) {
    return 0;
  }, function (A) {
    return 0 === A ? new d.Just(b.NoArguments.value) : d.Nothing.value;
  });

  c.genericPred = function (A) {
    return function (y) {
      var B = g.map(d.functorMaybe)(b.to(A)),
          w = z(y),
          F = b.from(A);
      return function (E) {
        return B(w(F(E)));
      };
    };
  };

  c.genericSucc = function (A) {
    return function (y) {
      var B = g.map(d.functorMaybe)(b.to(A)),
          w = x(y),
          F = b.from(A);
      return function (E) {
        return B(w(F(E)));
      };
    };
  };

  c.genericCardinality = function (A) {
    return function (y) {
      return n.unwrap(k.newtypeCardinality)(q(y));
    };
  };

  c.genericToEnum = function (A) {
    return function (y) {
      var B = g.map(d.functorMaybe)(b.to(A)),
          w = r(y);
      return function (F) {
        return B(w(F));
      };
    };
  };

  c.genericFromEnum = function (A) {
    return function (y) {
      var B = t(y),
          w = b.from(A);
      return function (F) {
        return B(w(F));
      };
    };
  };

  c.genericEnumNoArguments = a;

  c.genericEnumConstructor = function (A) {
    return new m(function (y) {
      return g.map(d.functorMaybe)(b.Constructor)(z(A)(y));
    }, function (y) {
      return g.map(d.functorMaybe)(b.Constructor)(x(A)(y));
    });
  };

  c.genericEnumSum = function (A) {
    return function (y) {
      return function (B) {
        return function (w) {
          return new m(function (F) {
            if (F instanceof b.Inl) return g.map(d.functorMaybe)(b.Inl.create)(z(A)(F.value0));

            if (F instanceof b.Inr) {
              F = z(B)(F.value0);
              if (F instanceof d.Nothing) return new d.Just(new b.Inl(e["genericTop'"](y)));
              if (F instanceof d.Just) return new d.Just(new b.Inr(F.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 30, column 14 - line 32, column 31): " + [F.constructor.name]);
            }

            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 28, column 18 - line 32, column 31): " + [F.constructor.name]);
          }, function (F) {
            if (F instanceof b.Inl) {
              F = x(A)(F.value0);
              if (F instanceof d.Nothing) return new d.Just(new b.Inr(e["genericBottom'"](w)));
              if (F instanceof d.Just) return new d.Just(new b.Inl(F.value0));
              throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 34, column 14 - line 36, column 31): " + [F.constructor.name]);
            }

            if (F instanceof b.Inr) return g.map(d.functorMaybe)(b.Inr.create)(x(B)(F.value0));
            throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 33, column 18 - line 37, column 36): " + [F.constructor.name]);
          });
        };
      };
    };
  };

  c.genericBoundedEnumNoArguments = u;

  c.genericBoundedEnumConstructor = function (A) {
    return new l(n.unwrap(k.newtypeCardinality)(q(A)), function (y) {
      return t(A)(y);
    }, function (y) {
      return g.map(d.functorMaybe)(b.Constructor)(r(A)(y));
    });
  };

  c.genericBoundedEnumSum = function (A) {
    return function (y) {
      return new l(k.Cardinality(n.unwrap(k.newtypeCardinality)(q(A)) + n.unwrap(k.newtypeCardinality)(q(y)) | 0), function (B) {
        if (B instanceof b.Inl) return t(A)(B.value0);
        if (B instanceof b.Inr) return t(y)(B.value0) + n.unwrap(k.newtypeCardinality)(q(A)) | 0;
        throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 87, column 22 - line 89, column 80): " + [B.constructor.name]);
      }, function (B) {
        var w = q(A);
        if (0 <= B && B < w) B = g.map(d.functorMaybe)(b.Inl.create)(r(A)(B));else if (f.otherwise) B = g.map(d.functorMaybe)(b.Inr.create)(r(y)(B - w | 0));else throw Error("Failed pattern match at Data.Generic.Rep.Enum (line 83, column 5 - line 83, column 43): " + [w.constructor.name]);
        return B;
      });
    };
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Eq"] = a["Data.Generic.Rep.Eq"] || {};

  var c = a["Data.Generic.Rep.Eq"],
      f = a["Data.Generic.Rep"],
      k = function k(g) {
    this["genericEq'"] = g;
  };

  a = new k(function (g) {
    return function (b) {
      return !0;
    };
  });

  c.genericEq = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return (0, b["genericEq'"])(f.from(g)(e))(f.from(g)(d));
        };
      };
    };
  };

  c.genericEqNoArguments = a;

  c.genericEqSum = function (g) {
    return function (b) {
      return new k(function (e) {
        return function (d) {
          return e instanceof f.Inl && d instanceof f.Inl ? (0, g["genericEq'"])(e.value0)(d.value0) : e instanceof f.Inr && d instanceof f.Inr ? (0, b["genericEq'"])(e.value0)(d.value0) : !1;
        };
      });
    };
  };

  c.genericEqConstructor = function (g) {
    return new k(function (b) {
      return function (e) {
        return (0, g["genericEq'"])(b)(e);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Ord"] = a["Data.Generic.Rep.Ord"] || {};

  var c = a["Data.Generic.Rep.Ord"],
      f = a["Data.Generic.Rep"],
      k = a["Data.Ordering"],
      g = function g(e) {
    this["genericCompare'"] = e;
  };

  a = new g(function (e) {
    return function (d) {
      return k.EQ.value;
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
      return new g(function (n) {
        return function (m) {
          if (n instanceof f.Inl && m instanceof f.Inl) return b(e)(n.value0)(m.value0);
          if (n instanceof f.Inr && m instanceof f.Inr) return b(d)(n.value0)(m.value0);
          if (n instanceof f.Inl && m instanceof f.Inr) return k.LT.value;
          if (n instanceof f.Inr && m instanceof f.Inl) return k.GT.value;
          throw Error("Failed pattern match at Data.Generic.Rep.Ord (line 19, column 1 - line 23, column 41): " + [n.constructor.name, m.constructor.name]);
        };
      });
    };
  };

  c.genericOrdConstructor = function (e) {
    return new g(function (d) {
      return function (n) {
        return b(e)(d)(n);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Generic.Rep.Show"] = a["Data.Generic.Rep.Show"] || {};

  var c = a["Data.Generic.Rep.Show"],
      f = a["Data.Foldable"],
      k = a["Data.Generic.Rep"],
      g = a["Data.Monoid"],
      b = a["Data.Semigroup"],
      e = a["Data.Show"],
      d = a["Data.Symbol"],
      n = function n(l) {
    this.genericShowArgs = l;
  },
      m = function m(l) {
    this["genericShow'"] = l;
  };

  a = new n(function (l) {
    return [];
  });

  c.genericShow = function (l) {
    return function (r) {
      return function (x) {
        return (0, r["genericShow'"])(k.from(l)(x));
      };
    };
  };

  c.genericShowArgsNoArguments = a;

  c.genericShowSum = function (l) {
    return function (r) {
      return new m(function (x) {
        if (x instanceof k.Inl) return (0, l["genericShow'"])(x.value0);
        if (x instanceof k.Inr) return (0, r["genericShow'"])(x.value0);
        throw Error("Failed pattern match at Data.Generic.Rep.Show (line 26, column 1 - line 28, column 40): " + [x.constructor.name]);
      });
    };
  };

  c.genericShowConstructor = function (l) {
    return function (r) {
      return new m(function (x) {
        var z = d.reflectSymbol(r)(d.SProxy.value);
        x = (0, l.genericShowArgs)(x);
        return 0 === x.length ? z : "(" + (f.intercalate(f.foldableArray)(g.monoidString)(" ")(b.append(b.semigroupArray)([z])(x)) + ")");
      });
    };
  };

  c.genericShowArgsArgument = function (l) {
    return new n(function (r) {
      return [e.show(l)(r)];
    });
  };
})(PS);

(function (a) {
  a["Data.Lens.Internal.Wander"] = a["Data.Lens.Internal.Wander"] || {};

  a["Data.Lens.Internal.Wander"].Wander = function (c, f, k) {
    this.Choice1 = c;
    this.Strong0 = f;
    this.wander = k;
  };
})(PS);

(function (a) {
  a["Data.Profunctor"] = a["Data.Profunctor"] || {};
  var c = a["Data.Profunctor"],
      f = a["Control.Category"];

  a = function a(g) {
    this.dimap = g;
  };

  var k = new a(function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return b(e(g(d)));
        };
      };
    };
  });

  c.dimap = function (g) {
    return g.dimap;
  };

  c.Profunctor = a;

  c.rmap = function (g) {
    return function (b) {
      return (0, g.dimap)(f.identity(f.categoryFn))(b);
    };
  };

  c.profunctorFn = k;
})(PS);

(function (a) {
  a["Data.Profunctor.Choice"] = a["Data.Profunctor.Choice"] || {};
  a = a["Data.Profunctor.Choice"];

  a.right = function (c) {
    return c.right;
  };

  a.Choice = function (c, f, k) {
    this.Profunctor0 = c;
    this.left = f;
    this.right = k;
  };
})(PS);

(function (a) {
  a["Data.Profunctor.Strong"] = a["Data.Profunctor.Strong"] || {};

  var c = a["Data.Profunctor.Strong"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Profunctor"],
      b = a["Data.Tuple"],
      e = function e(n, m, l) {
    this.Profunctor0 = n;
    this.first = m;
    this.second = l;
  };

  a = new e(function () {
    return g.profunctorFn;
  }, function (n) {
    return function (m) {
      return new b.Tuple(n(m.value0), m.value1);
    };
  }, a["Data.Functor"].map(b.functorTuple));

  var d = function d(n) {
    return function (m) {
      return function (l) {
        return function (r) {
          return k.composeFlipped(n.Semigroupoid0())((0, m.first)(l))((0, m.second)(r));
        };
      };
    };
  };

  c.first = function (n) {
    return n.first;
  };

  c.second = function (n) {
    return n.second;
  };

  c.Strong = e;

  c.fanout = function (n) {
    return function (m) {
      return function (l) {
        return function (r) {
          var x = g.dimap(m.Profunctor0())(f.identity(f.categoryFn))(function (z) {
            return new b.Tuple(z, z);
          })(f.identity(n));
          return k.composeFlipped(n.Semigroupoid0())(x)(d(n)(m)(l)(r));
        };
      };
    };
  };

  c.strongFn = a;
})(PS);

(function (a) {
  a["Data.Lens.Internal.Forget"] = a["Data.Lens.Internal.Forget"] || {};

  var c = a["Data.Lens.Internal.Forget"],
      f = a["Data.Const"],
      k = a["Data.Either"],
      g = a["Data.Functor"],
      b = a["Data.Lens.Internal.Wander"],
      e = a["Data.Monoid"],
      d = a["Data.Newtype"],
      n = a["Data.Profunctor.Choice"],
      m = a["Data.Profunctor.Strong"],
      l = a["Data.Tuple"],
      r = function r(q) {
    return q;
  },
      x = new a["Data.Profunctor"].Profunctor(function (q) {
    return function (u) {
      return function (A) {
        return function (y) {
          return A(q(y));
        };
      };
    };
  }),
      z = new m.Strong(function () {
    return x;
  }, function (q) {
    return function (u) {
      return q(l.fst(u));
    };
  }, function (q) {
    return function (u) {
      return q(l.snd(u));
    };
  });

  a = new d.Newtype(function (q) {
    return q;
  }, r);

  var t = function t(q) {
    return new n.Choice(function () {
      return x;
    }, function (u) {
      return k.either(u)(e.mempty(e.monoidFn(q)));
    }, function (u) {
      return k.either(e.mempty(e.monoidFn(q)))(u);
    });
  };

  c.Forget = r;
  c.newtypeForget = a;
  c.strongForget = z;

  c.wanderForget = function (q) {
    return new b.Wander(function () {
      return t(q);
    }, function () {
      return z;
    }, function (u) {
      return function (A) {
        return d.alaF(g.functorFn)(g.functorFn)(f.newtypeConst)(f.newtypeConst)(f.Const)(u(f.applicativeConst(q)))(A);
      };
    });
  };
})(PS);

(function (a) {
  a["Data.Maybe.First"] = a["Data.Maybe.First"] || {};

  var c = a["Data.Maybe.First"],
      f = a["Data.Maybe"],
      k = a["Data.Monoid"],
      g = a["Data.Newtype"],
      b = function b(d) {
    return d;
  },
      e = new a["Data.Semigroup"].Semigroup(function (d) {
    return function (n) {
      return d instanceof f.Just ? d : n;
    };
  });

  a = new g.Newtype(function (d) {
    return d;
  }, b);
  k = new k.Monoid(function () {
    return e;
  }, f.Nothing.value);
  c.First = b;
  c.newtypeFirst = a;
  c.semigroupFirst = e;
  c.monoidFirst = k;
})(PS);

(function (a) {
  a["Data.Lens.Fold"] = a["Data.Lens.Fold"] || {};
  var c = a["Data.Lens.Fold"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Maybe"],
      g = a["Data.Maybe.First"],
      b = a["Data.Newtype"],
      e = b.under(f.newtypeForget)(f.newtypeForget)(f.Forget);

  c.preview = function (d) {
    var n = b.unwrap(g.newtypeFirst),
        m = e(d)(function (l) {
      return g.First(k.Just.create(l));
    });
    return function (l) {
      return n(m(l));
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Getter"] = a["Data.Lens.Getter"] || {};
  var c = a["Control.Category"],
      f = a["Data.Lens.Internal.Forget"],
      k = a["Data.Newtype"];

  a["Data.Lens.Getter"].view = function (g) {
    return k.unwrap(f.newtypeForget)(g(c.identity(c.categoryFn)));
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso"] = a["Data.Lens.Iso"] || {};
  var c = a["Data.Profunctor"];

  a["Data.Lens.Iso"].iso = function (f) {
    return function (k) {
      return function (g) {
        return function (b) {
          return c.dimap(g)(f)(k)(b);
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Iso.Newtype"] = a["Data.Lens.Iso.Newtype"] || {};
  var c = a["Data.Lens.Iso"],
      f = a["Data.Newtype"];

  a["Data.Lens.Iso.Newtype"]._Newtype = function (k) {
    return function (g) {
      return function (b) {
        return c.iso(f.unwrap(k))(f.wrap(g))(b);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Lens"] = a["Data.Lens.Lens"] || {};

  var c = a["Data.Profunctor"],
      f = a["Data.Profunctor.Strong"],
      k = a["Data.Tuple"],
      g = function g(b) {
    return function (e) {
      return function (d) {
        return c.dimap(e.Profunctor0())(b)(function (n) {
          return n.value1(n.value0);
        })(f.first(e)(d));
      };
    };
  };

  a["Data.Lens.Lens"].lens = function (b) {
    return function (e) {
      return function (d) {
        return g(function (n) {
          return new k.Tuple(b(n), function (m) {
            return e(n)(m);
          });
        })(d);
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Prism"] = a["Data.Lens.Prism"] || {};

  var c = a["Control.Category"],
      f = a["Data.Either"],
      k = a["Data.Maybe"],
      g = a["Data.Profunctor"],
      b = a["Data.Profunctor.Choice"],
      e = function e(d) {
    return function (n) {
      return function (m) {
        return function (l) {
          return g.dimap(m.Profunctor0())(n)(f.either(c.identity(c.categoryFn))(c.identity(c.categoryFn)))(b.right(m)(g.rmap(m.Profunctor0())(d)(l)));
        };
      };
    };
  };

  a["Data.Lens.Prism"]["prism'"] = function (d) {
    return function (n) {
      return function (m) {
        return e(d)(function (l) {
          return k.maybe(new f.Left(l))(f.Right.create)(n(l));
        })(m);
      };
    };
  };
})(PS);

(function (a) {
  a.Record = a.Record || {};
  var c = a.Record,
      f = a["Data.Symbol"],
      k = a["Record.Unsafe"];

  c.get = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return k.unsafeGet(f.reflectSymbol(g)(e))(d);
        };
      };
    };
  };

  c.set = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return function (m) {
              return k.unsafeSet(f.reflectSymbol(g)(d))(n)(m);
            };
          };
        };
      };
    };
  };

  c.insert = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return function (m) {
              return k.unsafeSet(f.reflectSymbol(g)(d))(n)(m);
            };
          };
        };
      };
    };
  };

  c["delete"] = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return k.unsafeDelete(f.reflectSymbol(g)(d))(n);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.Lens.Record"] = a["Data.Lens.Record"] || {};
  var c = a["Data.Function"],
      f = a["Data.Lens.Lens"],
      k = a.Record;

  a["Data.Lens.Record"].prop = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return function (n) {
            return f.lens(k.get(g)()(d))(c.flip(k.set(g)()()(d)))(n);
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.List.NonEmpty"] = a["Data.List.NonEmpty"] || {};
  var c = a["Data.List.NonEmpty"],
      f = a["Data.List.Types"],
      k = a["Data.NonEmpty"];

  a = function () {
    var g = k.singleton(f.plusList);
    return function (b) {
      return f.NonEmptyList(g(b));
    };
  }();

  c.singleton = a;
})(PS);

(function (a) {
  a["Data.Natural"] = a["Data.Natural"] || {};
  a = a["Data.Natural"];

  a.intToNat = function (c) {
    return 0 <= c ? c : 0;
  };

  a.natToInt = function (c) {
    return c;
  };
})(PS);

(function (a) {
  a["Data.String.NonEmpty.Internal"] = a["Data.String.NonEmpty.Internal"] || {};
  var c = a["Data.String.NonEmpty.Internal"],
      f = a["Data.Maybe"],
      k = a["Data.Show"];
  a = new k.Show(function (g) {
    return "(NonEmptyString.unsafeFromString " + (k.show(k.showString)(g) + ")");
  });

  c.fromString = function (g) {
    return "" === g ? f.Nothing.value : new f.Just(g);
  };

  c.toString = function (g) {
    return g;
  };

  c.showNonEmptyString = a;
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
  a["Data.Variant"] = a["Data.Variant"] || {};
  var c = a["Data.Symbol"];

  a["Data.Variant"].inj = function (f) {
    return function (k) {
      return function (g) {
        return function (b) {
          return {
            type: c.reflectSymbol(k)(g),
            value: b
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Data.XPath"] = a["Data.XPath"] || {};
  var c = a["Data.XPath"],
      f = a["Data.Semigroup"],
      k = new function (g, b, e, d, n, m) {
    this.Semigroup0 = g;
    this.at = b;
    this.pathAppend = e;
    this.pathAppendNSx = d;
    this.root = n;
    this.xx = m;
  }(function () {
    return f.semigroupString;
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

  c.pathAppend = function (g) {
    return g.pathAppend;
  };

  c.pathAppendNSx = function (g) {
    return g.pathAppendNSx;
  };

  c.at = function (g) {
    return g.at;
  };

  c.xx = function (g) {
    return g.xx;
  };

  c.root = function (g) {
    return g.root;
  };

  c.stringXPath = k;
})(PS);

(function (a) {
  a["Effect.Class.Console"] = a["Effect.Class.Console"] || {};
  var c = a["Effect.Class.Console"],
      f = a["Effect.Class"],
      k = a["Effect.Console"];

  c.log = function (g) {
    var b = f.liftEffect(g);
    return function (e) {
      return b(k.log(e));
    };
  };

  c.logShow = function (g) {
    return function (b) {
      var e = f.liftEffect(g),
          d = k.logShow(b);
      return function (n) {
        return e(d(n));
      };
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
      k = a["Data.DateTime.Instant"];
  a = a["Data.Functor"].map(a.Effect.functorEffect)(k.toDateTime)(f.now);
  c.nowDateTime = a;
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
      k = a["Control.Applicative"],
      g = a["Control.Monad.Error.Class"],
      b = a["Control.Monad.Except.Trans"],
      e = a["Data.Boolean"],
      d = a["Data.Identity"],
      n = a["Data.List.NonEmpty"],
      m = a["Data.Show"],
      l = function () {
    function u(A) {
      this.value0 = A;
    }

    u.create = function (A) {
      return new u(A);
    };

    return u;
  }(),
      r = function () {
    function u(A, y) {
      this.value0 = A;
      this.value1 = y;
    }

    u.create = function (A) {
      return function (y) {
        return new u(A, y);
      };
    };

    return u;
  }(),
      x = function () {
    function u(A, y) {
      this.value0 = A;
      this.value1 = y;
    }

    u.create = function (A) {
      return function (y) {
        return new u(A, y);
      };
    };

    return u;
  }(),
      z = function () {
    function u(A, y) {
      this.value0 = A;
      this.value1 = y;
    }

    u.create = function (A) {
      return function (y) {
        return new u(A, y);
      };
    };

    return u;
  }(),
      t = new m.Show(function (u) {
    if (u instanceof l) return "(ForeignError " + (m.show(m.showString)(u.value0) + ")");
    if (u instanceof x) return "(ErrorAtIndex " + (m.show(m.showInt)(u.value0) + (" " + (m.show(t)(u.value1) + ")")));
    if (u instanceof z) return "(ErrorAtProperty " + (m.show(m.showString)(u.value0) + (" " + (m.show(t)(u.value1) + ")")));
    if (u instanceof r) return "(TypeMismatch " + (m.show(m.showString)(u.value0) + (" " + (m.show(m.showString)(u.value1) + ")")));
    throw Error("Failed pattern match at Foreign (line 63, column 1 - line 67, column 89): " + [u.constructor.name]);
  }),
      q = function () {
    var u = g.throwError(b.monadThrowExceptT(d.monadIdentity));
    return function (A) {
      return u(n.singleton(A));
    };
  }();

  a = function (u) {
    return function (A) {
      if (f.tagOf(A) === u) return k.pure(b.applicativeExceptT(d.monadIdentity))(f.unsafeFromForeign(A));
      if (e.otherwise) return q(new r(u, f.tagOf(A)));
      throw Error("Failed pattern match at Foreign (line 106, column 1 - line 106, column 55): " + [u.constructor.name, A.constructor.name]);
    };
  }("String");

  c.readString = a;
  c.showForeignError = t;
})(PS);

(function (a) {
  function c(f) {
    return function (k) {
      var g = [],
          b;

      for (b in k) {
        hasOwnProperty.call(k, b) && g.push(f(b)(k[b]));
      }

      return g;
    };
  }

  a._copyST = function (f) {
    return function () {
      var k = {},
          g;

      for (g in f) {
        hasOwnProperty.call(f, g) && (k[g] = f[g]);
      }

      return k;
    };
  };

  a.empty = {};

  a.runST = function (f) {
    return f();
  };

  a._lookup = function (f, k, g, b) {
    return g in b ? k(b[g]) : f;
  };

  a._lookupST = function (f, k, g, b) {
    return function () {
      return g in b ? k(b[g]) : f;
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
      return function (k) {
        return function () {
          k[c] = f;
          return k;
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
      k = a["Control.Monad.ST.Internal"],
      g = a["Data.Foldable"],
      b = a["Data.Maybe"],
      e = a["Foreign.Object.ST"],
      d = f._copyST,
      n = function n(r) {
    return function (x) {
      return f.runST(function () {
        var z = d(x)();
        r(z)();
        return z;
      });
    };
  },
      m = a["Data.Function.Uncurried"].runFn4(f._lookup)(b.Nothing.value)(b.Just.create),
      l = function l(r) {
    return function (x) {
      return n(e.poke(r)(x));
    };
  };

  c.lookup = m;

  c.fromFoldableWith = function (r) {
    return function (x) {
      return function (z) {
        return f.runST(function () {
          var t = e["new"]();
          g.for_(k.applicativeST)(r)(z)(function (q) {
            return function () {
              var u = f._lookupST(q.value1, x(q.value1), q.value0, t)();

              return e.poke(q.value0)(u)(t)();
            };
          })();
          return t;
        });
      };
    };
  };

  c.alter = function (r) {
    return function (x) {
      return function (z) {
        var t = r(m(x)(z));
        if (t instanceof b.Nothing) return n(e["delete"](x))(z);
        if (t instanceof b.Just) return l(x)(t.value0)(z);
        throw Error("Failed pattern match at Foreign.Object (line 206, column 15 - line 208, column 25): " + [t.constructor.name]);
      };
    };
  };

  c.empty = f.empty;
  c.keys = f.keys;
})(PS);

(function (a) {
  a["Formless.Data.FormFieldResult"] = a["Formless.Data.FormFieldResult"] || {};
  var c = a["Formless.Data.FormFieldResult"],
      f = a["Data.Either"],
      k = a["Data.Lens.Prism"],
      g = a["Data.Maybe"];

  a = function () {
    function d() {}

    d.value = new d();
    return d;
  }();

  var b = function () {
    function d(n) {
      this.value0 = n;
    }

    d.create = function (n) {
      return new d(n);
    };

    return d;
  }(),
      e = function () {
    function d(n) {
      this.value0 = n;
    }

    d.create = function (n) {
      return new d(n);
    };

    return d;
  }();

  c.NotValidated = a;
  c.Error = b;

  c.fromEither = function (d) {
    if (d instanceof f.Left) return new b(d.value0);
    if (d instanceof f.Right) return new e(d.value0);
    throw Error("Failed pattern match at Formless.Data.FormFieldResult (line 44, column 14 - line 46, column 23): " + [d.constructor.name]);
  };

  c.toMaybe = function (d) {
    return d instanceof e ? new g.Just(d.value0) : g.Nothing.value;
  };

  c._Error = function (d) {
    return k["prism'"](b.create)(function (n) {
      return n instanceof b ? new g.Just(n.value0) : g.Nothing.value;
    })(d);
  };
})(PS);

(function (a) {
  a["Formless.Types.Form"] = a["Formless.Types.Form"] || {};
  var c = a["Formless.Types.Form"],
      f = a["Data.Newtype"];

  a = function a(n) {
    return n;
  };

  var k = function () {
    function n() {}

    n.value = new n();
    return n;
  }(),
      g = function g(n) {
    return n;
  },
      b = new f.Newtype(function (n) {
    return n;
  }, a),
      e = new f.Newtype(function (n) {
    return n;
  }, function (n) {
    return n;
  }),
      d = new f.Newtype(function (n) {
    return n;
  }, function (n) {
    return n;
  });

  f = new f.Newtype(function (n) {
    return n;
  }, g);
  c.FormProxy = k;
  c.OutputField = a;
  c.FormField = g;
  c.newtypeInputField = d;

  c.eqInputField = function (n) {
    return n;
  };

  c.newtypeOutputField = b;
  c.newtypeInputFunction = e;
  c.newtypeFormField = f;
})(PS);

(function (a) {
  a["Formless.Validation"] = a["Formless.Validation"] || {};
  var c = a["Formless.Validation"],
      f = a["Control.Applicative"],
      k = a["Data.Either"],
      g = a["Data.Function"],
      b = a["Data.Newtype"],
      e = new b.Newtype(function (d) {
    return d;
  }, function (d) {
    return d;
  });

  c.runValidation = function (d) {
    return b.unwrap(e);
  };

  c.hoistFn_ = function (d) {
    return function (n) {
      return g["const"](function () {
        var m = f.pure(d.Applicative0()),
            l = f.pure(k.applicativeEither);
        return function (r) {
          return m(l(n(r)));
        };
      }());
    };
  };

  c.hoistFnE = function (d) {
    return function (n) {
      return function (m) {
        var l = f.pure(d.Applicative0()),
            r = n(m);
        return function (x) {
          return l(r(x));
        };
      };
    };
  };

  c.hoistFnE_ = function (d) {
    return function (n) {
      return g["const"](function () {
        var m = f.pure(d.Applicative0());
        return function (l) {
          return m(n(l));
        };
      }());
    };
  };

  c.newtypeValidation = e;
})(PS);

(function (a) {
  a.copyRecord = function (c) {
    var f = {},
        k;

    for (k in c) {
      ({}).hasOwnProperty.call(c, k) && (f[k] = c[k]);
    }

    return f;
  };

  a.unsafeInsert = function (c) {
    return function (f) {
      return function (k) {
        k[c] = f;
        return k;
      };
    };
  };

  a.unsafeModify = function (c) {
    return function (f) {
      return function (k) {
        k[c] = f(k[c]);
        return k;
      };
    };
  };
})(PS["Record.Builder"] = PS["Record.Builder"] || {});

(function (a) {
  a["Record.Builder"] = a["Record.Builder"] || {};
  var c = a["Record.Builder"],
      f = a["Record.Builder"],
      k = a["Data.Symbol"],
      g = a["Control.Semigroupoid"].semigroupoidFn;
  a = a["Control.Category"].categoryFn;

  c.build = function (b) {
    return function (e) {
      return b(f.copyRecord(e));
    };
  };

  c.insert = function (b) {
    return function (e) {
      return function (d) {
        return function (n) {
          return function (m) {
            return function (l) {
              return f.unsafeInsert(k.reflectSymbol(d)(n))(m)(l);
            };
          };
        };
      };
    };
  };

  c.modify = function (b) {
    return function (e) {
      return function (d) {
        return function (n) {
          return function (m) {
            return function (l) {
              return f.unsafeModify(k.reflectSymbol(d)(n))(m)(l);
            };
          };
        };
      };
    };
  };

  c.semigroupoidBuilder = g;
  c.categoryBuilder = a;
})(PS);

(function (a) {
  a["Formless.Internal.Transform"] = a["Formless.Internal.Transform"] || {};

  var c = a["Formless.Internal.Transform"],
      f = a["Control.Applicative"],
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Control.Category"],
      e = a["Control.Semigroupoid"],
      d = a["Data.Functor"],
      n = a["Data.Maybe"],
      m = a["Data.Newtype"],
      l = a["Data.Symbol"],
      r = a["Data.Tuple"],
      x = a["Formless.Data.FormFieldResult"],
      z = a["Formless.Types.Form"],
      t = a["Formless.Validation"],
      q = a.Record,
      u = a["Record.Builder"],
      A = a["Record.Unsafe"],
      y = a["Type.Data.RowList"],
      B = function B(T) {
    this.validateAllBuilder = T;
  },
      w = function w(T) {
    this.setFormFieldsTouchedBuilder = T;
  },
      F = function F(T) {
    this.replaceFormFieldInputsBuilder = T;
  },
      E = function E(T) {
    this.modifyAllBuilder = T;
  },
      v = function v(T) {
    this.inputFieldsToFormFieldsBuilder = T;
  },
      C = function C(T) {
    this.formFieldsToInputFieldsBuilder = T;
  },
      L = function L(T) {
    this.formFieldsToMaybeOutputBuilder = T;
  },
      G = function G(T) {
    this.countErrorsImpl = T;
  },
      X = function X(T) {
    this.allTouchedImpl = T;
  };

  a = new w(function (T) {
    return function (V) {
      return b.identity(u.categoryBuilder);
    };
  });
  var M = new F(function (T) {
    return function (V) {
      return function (ca) {
        return b.identity(u.categoryBuilder);
      };
    };
  }),
      K = new G(function (T) {
    return function (V) {
      return 0;
    };
  }),
      O = new X(function (T) {
    return function (V) {
      return !0;
    };
  }),
      p = new E(function (T) {
    return function (V) {
      return function (ca) {
        return b.identity(u.categoryBuilder);
      };
    };
  }),
      Q = new C(function (T) {
    return function (V) {
      return b.identity(u.categoryBuilder);
    };
  }),
      I = new v(function (T) {
    return function (V) {
      return b.identity(u.categoryBuilder);
    };
  }),
      R = d.flap(d.functorFn)(u.build)({}),
      fa = new L(function (T) {
    return function (V) {
      return new n.Just(b.identity(u.categoryBuilder));
    };
  });
  c.fromScratch = R;

  c.allTouched = function (T) {
    return function (V) {
      return function (ca) {
        var ha = (0, V.allTouchedImpl)(y.RLProxy.value),
            da = m.unwrap(ca);
        return function (Y) {
          return ha(da(Y));
        };
      };
    };
  };

  c.countErrors = function (T) {
    return function (V) {
      return function (ca) {
        var ha = (0, V.countErrorsImpl)(y.RLProxy.value),
            da = m.unwrap(ca);
        return function (Y) {
          return ha(da(Y));
        };
      };
    };
  };

  c.setFormFieldsTouched = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          ha = (0, V.setFormFieldsTouchedBuilder)(y.RLProxy.value)(m.unwrap(ca)(ha));
          return m.wrap(ca)(R(ha));
        };
      };
    };
  };

  c.formFieldsToInputFields = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            da = (0, V.formFieldsToInputFieldsBuilder)(y.RLProxy.value)(m.unwrap(ha)(da));
            return m.wrap(ca)(R(da));
          };
        };
      };
    };
  };

  c.inputFieldsToFormFields = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            da = (0, V.inputFieldsToFormFieldsBuilder)(y.RLProxy.value)(m.unwrap(ca)(da));
            return m.wrap(ha)(R(da));
          };
        };
      };
    };
  };

  c.formFieldsToMaybeOutputFields = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            da = (0, ha.formFieldsToMaybeOutputBuilder)(y.RLProxy.value)(m.unwrap(V)(da));
            return d.map(n.functorMaybe)(m.wrap(ca))(d.map(n.functorMaybe)(R)(da));
          };
        };
      };
    };
  };

  c.replaceFormFieldInputs = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            return function (Y) {
              Y = (0, V.replaceFormFieldInputsBuilder)(m.unwrap(ca)(da))(y.RLProxy.value)(m.unwrap(ha)(Y));
              return m.wrap(ha)(R(Y));
            };
          };
        };
      };
    };
  };

  c.modifyAll = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            return function (Y) {
              Y = (0, V.modifyAllBuilder)(m.unwrap(ca)(da))(y.RLProxy.value)(m.unwrap(ha)(Y));
              return m.wrap(ha)(R(Y));
            };
          };
        };
      };
    };
  };

  c.validateAll = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            return function (Y) {
              return function (aa) {
                aa = (0, ca.validateAllBuilder)(m.unwrap(ha)(Y))(y.RLProxy.value)(m.unwrap(da)(aa));
                return d.map(V.Bind1().Apply0().Functor0())(m.wrap(da))(d.map(V.Bind1().Apply0().Functor0())(R)(aa));
              };
            };
          };
        };
      };
    };
  };

  c.unsafeModifyInputVariant = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            var Y = function () {
              var ja = m.unwrap(T)(ha);
              return new r.Tuple(ja.type, ja.value);
            }(),
                aa = function () {
              var ja = A.unsafeGet(r.fst(Y))(m.unwrap(V)(da));
              return z.FormField({
                input: m.unwrap(z.newtypeInputFunction)(r.snd(Y))(ja.input),
                touched: ja.touched,
                result: ca(ja.result)
              });
            }();

            return m.wrap(V)(A.unsafeSet(r.fst(Y))(aa)(m.unwrap(V)(da)));
          };
        };
      };
    };
  };

  c.unsafeRunValidationVariant = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            return function (Y) {
              return function (aa) {
                var ja = m.unwrap(V)(da).type;
                return function () {
                  var va = A.unsafeGet(ja)(m.unwrap(ca)(aa));
                  return g.bind(T.Bind1())(t.runValidation(T)(A.unsafeGet(ja)(m.unwrap(ha)(Y)))(aa)(va.input))(function (N) {
                    N = A.unsafeSet(ja)(z.FormField({
                      input: va.input,
                      touched: va.touched,
                      result: x.fromEither(N)
                    }))(m.unwrap(ca)(aa));
                    return f.pure(T.Applicative0())(m.wrap(ca)(N));
                  });
                }();
              };
            };
          };
        };
      };
    };
  };

  c.setFormFieldsTouchedNil = a;

  c.setFormFieldsTouchedCons = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return new w(function (da) {
            return function (Y) {
              var aa = (0, ca.setFormFieldsTouchedBuilder)(y.RLProxy.value)(Y);
              Y = m.over(z.newtypeFormField)(z.newtypeFormField)(z.FormField)(function (ja) {
                return {
                  touched: !0,
                  input: ja.input,
                  result: ja.result
                };
              })(q.get(T)()(l.SProxy.value)(Y));
              Y = u.insert()()(T)(l.SProxy.value)(Y);
              return e.compose(u.semigroupoidBuilder)(Y)(aa);
            };
          });
        };
      };
    };
  };

  c.inputFieldsToInputNil = Q;

  c.inputFieldsToInputCons = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return new C(function (da) {
            return function (Y) {
              var aa = (0, ca.formFieldsToInputFieldsBuilder)(y.RLProxy.value)(Y);
              Y = q.get(T)()(l.SProxy.value)(Y).input;
              Y = u.insert()()(T)(l.SProxy.value)(Y);
              return e.compose(u.semigroupoidBuilder)(Y)(aa);
            };
          });
        };
      };
    };
  };

  c.inputFieldsToFormFieldsNil = I;

  c.inputFieldsToFormFieldsCons = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return new v(function (da) {
            return function (Y) {
              var aa = (0, ca.inputFieldsToFormFieldsBuilder)(y.RLProxy.value)(Y);
              Y = {
                input: q.get(T)()(l.SProxy.value)(Y),
                touched: !1,
                result: x.NotValidated.value
              };
              Y = u.insert()()(T)(l.SProxy.value)(Y);
              return e.compose(u.semigroupoidBuilder)(Y)(aa);
            };
          });
        };
      };
    };
  };

  c.formFieldsToMaybeOutputNil = fa;

  c.formFieldsToMaybeOutputCons = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return new L(function (da) {
            return function (Y) {
              var aa = (0, ca.formFieldsToMaybeOutputBuilder)(y.RLProxy.value)(Y);
              Y = d.map(n.functorMaybe)(z.OutputField)(x.toMaybe(m.unwrap(z.newtypeFormField)(q.get(T)()(l.SProxy.value)(Y)).result));
              return k.apply(n.applyMaybe)(d.map(n.functorMaybe)(function (ja) {
                return function (va) {
                  return e.compose(u.semigroupoidBuilder)(u.insert()()(T)(l.SProxy.value)(ja))(va);
                };
              })(Y))(aa);
            };
          });
        };
      };
    };
  };

  c.nilCountErrors = K;

  c.consCountErrors = function (T) {
    return function (V) {
      return function (ca) {
        return new G(function (ha) {
          return function (da) {
            var Y = m.unwrap(z.newtypeFormField)(q.get(T)()(l.SProxy.value)(da)).result instanceof x.Error ? 1 : 0;
            return Y + (0, ca.countErrorsImpl)(y.RLProxy.value)(da) | 0;
          };
        });
      };
    };
  };

  c.nilAllTouched = O;

  c.consAllTouched = function (T) {
    return function (V) {
      return function (ca) {
        return new X(function (ha) {
          return function (da) {
            return m.unwrap(z.newtypeFormField)(q.get(T)()(l.SProxy.value)(da)).touched ? (0, ca.allTouchedImpl)(y.RLProxy.value)(da) : !1;
          };
        });
      };
    };
  };

  c.applyToValidationNil = function (T) {
    return new B(function (V) {
      return function (ca) {
        return function (ha) {
          return f.pure(T.Applicative0())(b.identity(u.categoryBuilder));
        };
      };
    });
  };

  c.applyToValidationCons = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            return function (Y) {
              return function (aa) {
                return new B(function (ja) {
                  return function (va) {
                    return function (N) {
                      var W = (0, aa.validateAllBuilder)(ja)(y.RLProxy.value)(N),
                          D = function () {
                        var U = m.unwrap(t.newtypeValidation)(q.get(T)()(l.SProxy.value)(ja)),
                            P = m.unwrap(z.newtypeFormField)(q.get(T)()(l.SProxy.value)(N));
                        return g.bind(V.Bind1())(U(m.wrap(ha)(N))(P.input))(function (J) {
                          var na = f.pure(V.Applicative0()),
                              H = m.wrap(z.newtypeFormField),
                              Z = {},
                              ka;

                          for (ka in P) {
                            ({}).hasOwnProperty.call(P, ka) && (Z[ka] = P[ka]);
                          }

                          Z.result = x.fromEither(J);
                          return na(H(Z));
                        });
                      }();

                      return k.apply(V.Bind1().Apply0())(d.map(V.Bind1().Apply0().Functor0())(function (U) {
                        return function (P) {
                          return e.compose(u.semigroupoidBuilder)(u.insert()()(T)(l.SProxy.value)(U))(P);
                        };
                      })(D))(W);
                    };
                  };
                });
              };
            };
          };
        };
      };
    };
  };

  c.modifyAllNil = p;

  c.modifyAllCons = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            return function (Y) {
              return function (aa) {
                return new E(function (ja) {
                  return function (va) {
                    return function (N) {
                      var W = (0, aa.modifyAllBuilder)(ja)(y.RLProxy.value)(N),
                          D = m.unwrap(V)(q.get(T)()(l.SProxy.value)(ja));
                      N = q.get(T)()(l.SProxy.value)(N);
                      N = u.insert()()(T)(l.SProxy.value)(m.over(ca)(ca)(z.FormField)(function (U) {
                        return {
                          input: D(U.input),
                          result: U.result,
                          touched: U.touched
                        };
                      })(N));
                      return e.compose(u.semigroupoidBuilder)(N)(W);
                    };
                  };
                });
              };
            };
          };
        };
      };
    };
  };

  c.replaceFormFieldInputsTouchedNil = M;

  c.replaceFormFieldInputsTouchedCons = function (T) {
    return function (V) {
      return function (ca) {
        return function (ha) {
          return function (da) {
            return function (Y) {
              return function (aa) {
                return new F(function (ja) {
                  return function (va) {
                    return function (N) {
                      var W = (0, aa.replaceFormFieldInputsBuilder)(ja)(y.RLProxy.value)(N);
                      m.unwrap(ca)(q.get(T)()(l.SProxy.value)(N));
                      N = q.get(T)()(l.SProxy.value)(ja);
                      N = u.insert()()(T)(l.SProxy.value)(z.FormField({
                        input: m.unwrap(V)(N),
                        touched: !1,
                        result: x.NotValidated.value
                      }));
                      return e.compose(u.semigroupoidBuilder)(N)(W);
                    };
                  };
                });
              };
            };
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Formless.Types.Query"] = a["Formless.Types.Query"] || {};

  var c = a["Formless.Types.Query"],
      f = a["Data.Eq"],
      k = a["Data.Newtype"],
      g = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      b = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      e = function () {
    function y() {}

    y.value = new y();
    return y;
  }();

  a = function () {
    function y(B) {
      this.value0 = B;
    }

    y.create = function (B) {
      return new y(B);
    };

    return y;
  }();

  var d = function () {
    function y(B) {
      this.value0 = B;
    }

    y.create = function (B) {
      return new y(B);
    };

    return y;
  }(),
      n = function () {
    function y(B, w) {
      this.value0 = B;
      this.value1 = w;
    }

    y.create = function (B) {
      return function (w) {
        return new y(B, w);
      };
    };

    return y;
  }(),
      m = function () {
    function y(B) {
      this.value0 = B;
    }

    y.create = function (B) {
      return new y(B);
    };

    return y;
  }(),
      l = function () {
    function y(B) {
      this.value0 = B;
    }

    y.create = function (B) {
      return new y(B);
    };

    return y;
  }(),
      r = function () {
    function y(B) {
      this.value0 = B;
    }

    y.create = function (B) {
      return new y(B);
    };

    return y;
  }(),
      x = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      z = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      t = function () {
    function y() {}

    y.value = new y();
    return y;
  }(),
      q = function () {
    function y(B) {
      this.value0 = B;
    }

    y.create = function (B) {
      return new y(B);
    };

    return y;
  }(),
      u = function () {
    function y(B, w) {
      this.value0 = B;
      this.value1 = w;
    }

    y.create = function (B) {
      return function (w) {
        return new y(B, w);
      };
    };

    return y;
  }(),
      A = function A(y) {
    return y;
  };

  k = new k.Newtype(function (y) {
    return y;
  }, A);
  f = new f.Eq(function (y) {
    return function (B) {
      return y instanceof g && B instanceof g || y instanceof b && B instanceof b || y instanceof e && B instanceof e ? !0 : !1;
    };
  });
  c.Modify = a;
  c.Validate = d;
  c.ModifyValidate = n;
  c.Reset = m;
  c.SetAll = l;
  c.ModifyAll = r;
  c.ResetAll = x;
  c.ValidateAll = z;
  c.Submit = t;
  c.LoadForm = q;
  c.AndThen = u;
  c.InternalState = A;
  c.Invalid = g;
  c.Incomplete = b;
  c.Valid = e;
  c.newtypeInternalState = k;
  c.eqValidStatus = f;
})(PS);

(function (a) {
  a["Formless.Component"] = a["Formless.Component"] || {};

  var c = a["Control.Applicative"],
      f = a["Control.Bind"],
      k = a["Control.Category"],
      g = a["Data.Either"],
      b = a["Data.Eq"],
      e = a["Data.Maybe"],
      d = a["Data.Newtype"],
      n = a["Formless.Internal.Transform"],
      m = a["Formless.Types.Query"],
      l = function l(r) {
    return function (x) {
      return function (z) {
        return function (t) {
          return function (q) {
            return function (u) {
              return function (A) {
                return function (y) {
                  return function (B) {
                    return function (w) {
                      return function (F) {
                        return function (E) {
                          return function (v) {
                            return function (C) {
                              return function (L) {
                                return function (G) {
                                  return function (X) {
                                    return function (M) {
                                      return function (K) {
                                        return function (O) {
                                          return function (p) {
                                            return function (Q) {
                                              return function (I) {
                                                var R = function R(V) {
                                                  var ca = n.countErrors()(u)(L)(V.form),
                                                      ha = !b.eq(b.eqRec()(z))(d.unwrap(v)(n.formFieldsToInputFields()(q)(v)(L)(V.form)))(d.unwrap(v)(d.unwrap(m.newtypeInternalState)(V.internal).initialInputs));
                                                  return c.pure(p.Applicative0())(g.Left.create(function () {
                                                    return d.unwrap(m.newtypeInternalState)(V.internal).allTouched ? {
                                                      validity: 0 !== V.errors ? m.Invalid.value : m.Valid.value,
                                                      errors: ca,
                                                      dirty: ha,
                                                      form: V.form,
                                                      internal: V.internal,
                                                      submitAttempts: V.submitAttempts,
                                                      submitting: V.submitting
                                                    } : n.allTouched()(A)(L)(V.form) ? {
                                                      validity: 0 !== V.errors ? m.Invalid.value : m.Valid.value,
                                                      internal: d.over(m.newtypeInternalState)(m.newtypeInternalState)(m.InternalState)(function (da) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: da.initialInputs,
                                                          validators: da.validators
                                                        };
                                                      })(V.internal),
                                                      errors: ca,
                                                      dirty: ha,
                                                      form: V.form,
                                                      submitAttempts: V.submitAttempts,
                                                      submitting: V.submitting
                                                    } : {
                                                      validity: m.Incomplete.value,
                                                      errors: ca,
                                                      dirty: ha,
                                                      form: V.form,
                                                      internal: V.internal,
                                                      submitAttempts: V.submitAttempts,
                                                      submitting: V.submitting
                                                    };
                                                  }()));
                                                },
                                                    fa = function fa(V) {
                                                  var ca = {
                                                    submitAttempts: V.submitAttempts + 1 | 0,
                                                    submitting: !0,
                                                    internal: V.internal,
                                                    form: V.form,
                                                    dirty: V.dirty,
                                                    errors: V.errors,
                                                    validity: V.validity
                                                  },
                                                      ha = d.unwrap(m.newtypeInternalState)(ca.internal);

                                                  V = function () {
                                                    return ha.allTouched ? ca : {
                                                      form: n.setFormFieldsTouched()(y)(L)(ca.form),
                                                      internal: d.over(m.newtypeInternalState)(m.newtypeInternalState)(m.InternalState)(function (da) {
                                                        return {
                                                          allTouched: !0,
                                                          initialInputs: da.initialInputs,
                                                          validators: da.validators
                                                        };
                                                      })(ca.internal),
                                                      submitAttempts: ca.submitAttempts,
                                                      submitting: ca.submitting,
                                                      dirty: ca.dirty,
                                                      errors: ca.errors,
                                                      validity: ca.validity
                                                    };
                                                  }();

                                                  return f.bind(p.Bind1())(l()()(z)(t)(q)(u)(A)(y)(B)(w)(F)(E)(v)(C)(L)(G)(X)(M)(K)(O)(p)(m.ValidateAll.value)(V))(function (da) {
                                                    if (da instanceof g.Right) return c.pure(p.Applicative0())(new g.Right(da.value0));

                                                    if (da instanceof g.Left) {
                                                      var Y = {
                                                        submitting: !1,
                                                        dirty: da.value0.dirty,
                                                        errors: da.value0.errors,
                                                        form: da.value0.form,
                                                        internal: da.value0.internal,
                                                        submitAttempts: da.value0.submitAttempts,
                                                        validity: da.value0.validity
                                                      };
                                                      return c.pure(p.Applicative0())(function () {
                                                        if (b.eq(m.eqValidStatus)(Y.validity)(m.Valid.value)) {
                                                          var aa = n.formFieldsToMaybeOutputFields()(L)(G)(E)(da.value0.form);
                                                          if (aa instanceof e.Nothing) return new g.Left(Y);
                                                          if (aa instanceof e.Just) return new g.Right(aa.value0);
                                                          throw Error("Failed pattern match at Formless.Component (line 201, column 16 - line 203, column 36): " + [aa.constructor.name]);
                                                        }

                                                        return new g.Left(Y);
                                                      }());
                                                    }

                                                    throw Error("Failed pattern match at Formless.Component (line 192, column 5 - line 204, column 31): " + [da.constructor.name]);
                                                  });
                                                };

                                                if (Q instanceof m.Modify) return R({
                                                  form: n.unsafeModifyInputVariant(K)(L)(k.identity(k.categoryFn))(Q.value0)(I.form),
                                                  internal: I.internal,
                                                  errors: I.errors,
                                                  dirty: I.dirty,
                                                  validity: I.validity,
                                                  submitAttempts: I.submitAttempts,
                                                  submitting: I.submitting
                                                });
                                                if (Q instanceof m.Validate) return f.bind(p.Bind1())(n.unsafeRunValidationVariant(p)(O)(L)(X)(Q.value0)(d.unwrap(m.newtypeInternalState)(I.internal).validators)(I.form))(function (V) {
                                                  return R({
                                                    form: V,
                                                    internal: I.internal,
                                                    errors: I.errors,
                                                    dirty: I.dirty,
                                                    validity: I.validity,
                                                    submitAttempts: I.submitAttempts,
                                                    submitting: I.submitting
                                                  });
                                                });

                                                if (Q instanceof m.ModifyValidate) {
                                                  fa = function fa(V) {
                                                    var ca = d.unwrap(m.newtypeInternalState)(V.internal).validators;
                                                    return f.bind(p.Bind1())(n.unsafeRunValidationVariant(p)(O)(L)(X)(Q.value1)(ca)(V.form))(function (ha) {
                                                      return c.pure(p.Applicative0())({
                                                        form: ha,
                                                        internal: V.internal,
                                                        dirty: V.dirty,
                                                        errors: V.errors,
                                                        submitAttempts: V.submitAttempts,
                                                        submitting: V.submitting,
                                                        validity: V.validity
                                                      });
                                                    });
                                                  };

                                                  var T = function T(V) {
                                                    return function (ca) {
                                                      return {
                                                        validity: ca.validity,
                                                        dirty: ca.dirty,
                                                        submitting: ca.submitting,
                                                        errors: ca.errors,
                                                        submitAttempts: ca.submitAttempts,
                                                        form: n.unsafeModifyInputVariant(K)(L)(V)(Q.value1)(ca.form),
                                                        internal: ca.internal
                                                      };
                                                    };
                                                  };

                                                  if (Q.value0 instanceof e.Nothing || Q.value0 instanceof e.Just) return T = T(k.identity(k.categoryFn))(I), f.bind(p.Bind1())(fa(T))(function (V) {
                                                    return R(V);
                                                  });
                                                  throw Error("Failed pattern match at Formless.Component (line 67, column 5 - line 81, column 26): " + [Q.value0.constructor.name]);
                                                }

                                                if (Q instanceof m.Reset) return R({
                                                  form: n.unsafeModifyInputVariant(K)(L)(k.identity(k.categoryFn))(Q.value0)(I.form),
                                                  internal: d.over(m.newtypeInternalState)(m.newtypeInternalState)(m.InternalState)(function (V) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: V.initialInputs,
                                                      validators: V.validators
                                                    };
                                                  })(I.internal),
                                                  errors: I.errors,
                                                  dirty: I.dirty,
                                                  validity: I.validity,
                                                  submitAttempts: I.submitAttempts,
                                                  submitting: I.submitting
                                                });
                                                if (Q instanceof m.SetAll) return R({
                                                  form: n.replaceFormFieldInputs()(B)(v)(L)(Q.value0)(I.form),
                                                  internal: I.internal,
                                                  errors: I.errors,
                                                  dirty: I.dirty,
                                                  validity: I.validity,
                                                  submitAttempts: I.submitAttempts,
                                                  submitting: I.submitting
                                                });
                                                if (Q instanceof m.ModifyAll) return R({
                                                  form: n.modifyAll()(w)(C)(L)(Q.value0)(I.form),
                                                  internal: I.internal,
                                                  errors: I.errors,
                                                  dirty: I.dirty,
                                                  validity: I.validity,
                                                  submitAttempts: I.submitAttempts,
                                                  submitting: I.submitting
                                                });
                                                if (Q instanceof m.ValidateAll) return f.bind(p.Bind1())(n.validateAll()(p)(F)(X)(L)(d.unwrap(m.newtypeInternalState)(I.internal).validators)(I.form))(function (V) {
                                                  return R({
                                                    form: V,
                                                    internal: I.internal,
                                                    errors: I.errors,
                                                    dirty: I.dirty,
                                                    validity: I.validity,
                                                    submitAttempts: I.submitAttempts,
                                                    submitting: I.submitting
                                                  });
                                                });
                                                if (Q instanceof m.Submit) return fa(I);
                                                if (Q instanceof m.ResetAll) return c.pure(p.Applicative0())(g.Left.create({
                                                  validity: m.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: n.replaceFormFieldInputs()(B)(v)(L)(d.unwrap(m.newtypeInternalState)(I.internal).initialInputs)(I.form),
                                                  internal: d.over(m.newtypeInternalState)(m.newtypeInternalState)(m.InternalState)(function (V) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: V.initialInputs,
                                                      validators: V.validators
                                                    };
                                                  })(I.internal)
                                                }));
                                                if (Q instanceof m.LoadForm) return c.pure(p.Applicative0())(g.Left.create({
                                                  validity: m.Incomplete.value,
                                                  dirty: !1,
                                                  errors: 0,
                                                  submitAttempts: 0,
                                                  submitting: !1,
                                                  form: n.replaceFormFieldInputs()(B)(v)(L)(Q.value0)(I.form),
                                                  internal: d.over(m.newtypeInternalState)(m.newtypeInternalState)(m.InternalState)(function (V) {
                                                    return {
                                                      allTouched: !1,
                                                      initialInputs: Q.value0,
                                                      validators: V.validators
                                                    };
                                                  })(I.internal)
                                                }));
                                                if (Q instanceof m.AndThen) return f.bind(p.Bind1())(l()()(z)(t)(q)(u)(A)(y)(B)(w)(F)(E)(v)(C)(L)(G)(X)(M)(K)(O)(p)(Q.value0)(I))(function (V) {
                                                  if (V instanceof g.Left) return l()()(z)(t)(q)(u)(A)(y)(B)(w)(F)(E)(v)(C)(L)(G)(X)(M)(K)(O)(p)(Q.value1)(V.value0);
                                                  if (V instanceof g.Right) return c.pure(p.Applicative0())(new g.Right(V.value0));
                                                  throw Error("Failed pattern match at Formless.Component (line 136, column 5 - line 138, column 38): " + [V.constructor.name]);
                                                });
                                                throw Error("Failed pattern match at Formless.Component (line 44, column 17 - line 138, column 38): " + [Q.constructor.name]);
                                              };
                                            };
                                          };
                                        };
                                      };
                                    };
                                  };
                                };
                              };
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  };

  a["Formless.Component"].eval = l;
})(PS);

(function (a) {
  a["Formless.Query"] = a["Formless.Query"] || {};
  var c = a["Formless.Query"],
      f = a["Data.Function"],
      k = a["Data.Maybe"],
      g = a["Data.Newtype"],
      b = a["Data.Variant"],
      e = a["Formless.Types.Form"],
      d = a["Formless.Types.Query"];
  c.submit = d.Submit.value;

  c.set = function (n) {
    return function (m) {
      return function (l) {
        return function (r) {
          return function (x) {
            return new d.Modify(g.wrap(m)(b.inj()(n)(r)(g.wrap(e.newtypeInputFunction)(f["const"](x)))));
          };
        };
      };
    };
  };

  c.setValidate = function (n) {
    return function (m) {
      return function (l) {
        return function (r) {
          return function (x) {
            return new d.ModifyValidate(k.Nothing.value, g.wrap(m)(b.inj()(n)(r)(g.wrap(e.newtypeInputFunction)(f["const"](x)))));
          };
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Formless.Retrieve"] = a["Formless.Retrieve"] || {};

  var c = a["Formless.Retrieve"],
      f = a["Data.Lens.Fold"],
      k = a["Data.Lens.Getter"],
      g = a["Data.Lens.Internal.Forget"],
      b = a["Data.Lens.Iso.Newtype"],
      e = a["Data.Lens.Record"],
      d = a["Data.Maybe.First"],
      n = a["Data.Symbol"],
      m = a["Formless.Data.FormFieldResult"],
      l = a["Formless.Types.Form"],
      r = function r(q) {
    return function (u) {
      return function (A) {
        return function (y) {
          return function (B) {
            var w = b._Newtype(u)(u)(B.Profunctor0()),
                F = e.prop(q)()()(y)(B),
                E = b._Newtype(l.newtypeFormField)(l.newtypeFormField)(B.Profunctor0());

            return function (v) {
              return w(F(E(v)));
            };
          };
        };
      };
    };
  },
      x = function x(q) {
    return function (u) {
      return function (A) {
        return function (y) {
          return function (B) {
            var w = r(q)(u)()(y)(B),
                F = e.prop(new n.IsSymbol(function () {
              return "input";
            }))()()(n.SProxy.value)(B);
            return function (E) {
              return w(F(E));
            };
          };
        };
      };
    };
  },
      z = function z(q) {
    return function (u) {
      return function (A) {
        return function (y) {
          return function (B) {
            var w = r(q)(u)()(y)(B),
                F = e.prop(new n.IsSymbol(function () {
              return "result";
            }))()()(n.SProxy.value)(B);
            return function (E) {
              return w(F(E));
            };
          };
        };
      };
    };
  },
      t = function t(q) {
    return function (u) {
      return function (A) {
        return function (y) {
          return function (B) {
            var w = z(q)(u)()(y)(B.Strong0()),
                F = m._Error(B.Choice1());

            return function (E) {
              return w(F(E));
            };
          };
        };
      };
    };
  };

  c.getInput = function (q) {
    return function (u) {
      return function (A) {
        return function (y) {
          return k.view(x(q)(u)()(y)(g.strongForget));
        };
      };
    };
  };

  c.getError = function (q) {
    return function (u) {
      return function (A) {
        return function (y) {
          return f.preview(t(q)(u)()(y)(g.wanderForget(d.monoidFirst)));
        };
      };
    };
  };
})(PS);

(function (a) {
  a["Heterogeneous.Mapping"] = a["Heterogeneous.Mapping"] || {};

  var c = a["Heterogeneous.Mapping"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Symbol"],
      b = a["Record.Builder"],
      e = a["Type.Data.RowList"],
      d = function d(l) {
    this.mappingWithIndex = l;
  },
      n = function n(l) {
    this.mapRecordWithIndexBuilder = l;
  },
      m = function m(l) {
    this.hmap = l;
  };

  a = new n(function (l) {
    return function (r) {
      return f.identity(b.categoryBuilder);
    };
  });

  c.hmap = function (l) {
    return l.hmap;
  };

  c.Mapping = function (l) {
    this.mapping = l;
  };

  c.constMapping = function (l) {
    return new d(function (r) {
      return function (x) {
        return (0, l.mapping)(r);
      };
    });
  };

  c.hmapRecord = function (l) {
    return function (r) {
      return new m(function () {
        var x = (0, r.mapRecordWithIndexBuilder)(e.RLProxy.value);
        return function (z) {
          return b.build(x(z));
        };
      }());
    };
  };

  c.mapRecordWithIndexCons = function (l) {
    return function (r) {
      return function (x) {
        return function (z) {
          return function (t) {
            return new n(function (q) {
              return function (u) {
                return k.compose(b.semigroupoidBuilder)(b.modify()()(l)(g.SProxy.value)((0, r.mappingWithIndex)(u)(g.SProxy.value)))((0, x.mapRecordWithIndexBuilder)(e.RLProxy.value)(u));
              };
            });
          };
        };
      };
    };
  };

  c.mapRecordWithIndexNil = a;
})(PS);

(function (a) {
  a["Formless.Transform.Record"] = a["Formless.Transform.Record"] || {};

  var c = a["Formless.Transform.Record"],
      f = a["Data.Newtype"],
      k = a["Heterogeneous.Mapping"],
      g = function () {
    function e() {}

    e.value = new e();
    return e;
  }(),
      b = function () {
    function e() {}

    e.value = new e();
    return e;
  }();

  c.unwrapOutputFields = function (e) {
    return function (d) {
      var n = k.hmap(d)(b.value),
          m = f.unwrap(e);
      return function (l) {
        return n(m(l));
      };
    };
  };

  c.wrapInputFields = function (e) {
    return function (d) {
      var n = f.wrap(e),
          m = k.hmap(d)(g.value);
      return function (l) {
        return n(m(l));
      };
    };
  };

  c.unwrapField = function (e) {
    return new k.Mapping(function (d) {
      return f.unwrap(e);
    });
  };

  c.wrapField = function (e) {
    return new k.Mapping(function (d) {
      return f.wrap(e);
    });
  };
})(PS);

(function (a) {
  a["Formless.Transform.Row"] = a["Formless.Transform.Row"] || {};

  var c = a["Formless.Transform.Row"],
      f = a["Control.Category"],
      k = a["Control.Semigroupoid"],
      g = a["Data.Symbol"],
      b = a["Formless.Internal.Transform"],
      e = a["Record.Builder"],
      d = a["Type.Data.RowList"],
      n = function n(m) {
    this.makeSProxiesBuilder = m;
  };

  a = new n(function (m) {
    return f.identity(e.categoryBuilder);
  });

  c.mkSProxies = function (m) {
    return function (l) {
      return function (r) {
        return function (x) {
          x = (0, r.makeSProxiesBuilder)(d.RLProxy.value);
          return b.fromScratch(x);
        };
      };
    };
  };

  c.makeSProxiesNil = a;

  c.makeSProxiesCons = function (m) {
    return function (l) {
      return function (r) {
        return new n(function (x) {
          x = (0, r.makeSProxiesBuilder)(d.RLProxy.value);
          var z = e.insert()()(m)(g.SProxy.value)(g.SProxy.value);
          return k.compose(e.semigroupoidBuilder)(z)(x);
        });
      };
    };
  };
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
      k = a["Data.Maybe"];

  a["Metajelo.CSS.Common.Util"].cList = function (g) {
    return c.classList(f.map(f.functorArray)(k.Just.create)(g));
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
      k = a["Metajelo.CSS.UI.ClassNamesPrivate"],
      g = a["Metajelo.CSS.UI.Util"];
  a = g.mjUiClass(f.versioning);
  var b = g.mjUiClass(f.url),
      e = g.mjUiClass(k.tooltip),
      d = g.mjUiClass(f.title),
      n = g.mjUiClass(f.sustainability),
      m = g.mjUiClass(f.superOrg),
      l = g.mjUiClass(f.resourceTypeGen),
      r = g.mjUiClass(f.resourceTypeDescr),
      x = g.mjUiClass(f.resourceType),
      z = g.mjUiClass(f.resourceMDSource),
      t = g.mjUiClass(f.resourceId),
      q = g.mjUiClass(f.relatedIdsHeader),
      u = g.mjUiClass(f.relatedIds),
      A = g.mjUiClass(f.relatedIdList),
      y = g.mjUiClass(f.relatedId),
      B = g.mjUiClass(f.relType),
      w = g.mjUiClass(f.recordId),
      F = g.mjUiClass(f.record),
      E = g.mjUiClass(k.recPreview),
      v = g.mjUiClass(f.pubyear),
      C = g.mjUiClass(f.productsHeader),
      L = g.mjUiClass(f.products),
      G = g.mjUiClass(f.productList),
      X = g.mjUiClass(f.product),
      M = g.mjUiClass(k.prodPreview),
      K = g.mjUiClass(k.previewButtons),
      O = g.mjUiClass(f.policyType),
      p = g.mjUiClass(f.policy),
      Q = g.mjUiClass(k.page),
      I = g.mjUiClass(f.missionStatement),
      R = g.mjUiClass(f.location),
      fa = g.mjUiClass(k.locPreview),
      T = g.mjUiClass(f.institutionType),
      V = g.mjUiClass(f.institutionPolicy),
      ca = g.mjUiClass(f.institutionPolicies),
      ha = g.mjUiClass(f.institutionName),
      da = g.mjUiClass(f.institutionId),
      Y = g.mjUiClass(f.institutionContact),
      aa = g.mjUiClass(f.identifier),
      ja = g.mjUiClass(f.idType),
      va = g.mjUiClass(f.id),
      N = g.mjUiClass(f.fundingStatement),
      W = g.mjUiClass(f.formatList),
      D = g.mjUiClass(f.format),
      U = g.mjUiClass(k.downloadBtn),
      P = g.mjUiClass(k.date),
      J = g.mjUiClass(f.creator),
      na = g.mjUiClass(f.contactType),
      H = g.mjUiClass(f.contactEmail);
  k = g.mjUiClass(k.clipBtn);
  var Z = g.mjUiClass(f.basicMetadata);
  f = g.mjUiClass(f.applies);
  c.page = Q;
  c.date = P;
  c.recPreview = E;
  c.prodPreview = M;
  c.locPreview = fa;
  c.tooltip = e;
  c.downloadBtn = U;
  c.clipBtn = k;
  c.previewButtons = K;
  c.record = F;
  c.recordId = w;
  c.product = X;
  c.productList = G;
  c.productsHeader = C;
  c.products = L;
  c.location = R;
  c.sustainability = n;
  c.missionStatement = I;
  c.fundingStatement = N;
  c.identifier = aa;
  c.id = va;
  c.idType = ja;
  c.relatedId = y;
  c.relType = B;
  c.relatedIdList = A;
  c.relatedIdsHeader = q;
  c.relatedIds = u;
  c.basicMetadata = Z;
  c.creator = J;
  c.pubyear = v;
  c.title = d;
  c.resourceId = t;
  c.resourceType = x;
  c.resourceTypeGen = l;
  c.resourceTypeDescr = r;
  c.resourceMDSource = z;
  c.institutionName = ha;
  c.institutionId = da;
  c.institutionType = T;
  c.institutionContact = Y;
  c.contactEmail = H;
  c.contactType = na;
  c.institutionPolicy = V;
  c.institutionPolicies = ca;
  c.policy = p;
  c.policyType = O;
  c.applies = f;
  c.superOrg = m;
  c.versioning = a;
  c.format = D;
  c.formatList = W;
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
      k = a["Data.Functor"],
      g = a["Metajelo.CSS.Common.Util"],
      b = function b(e) {
    return "metajelo_" + e;
  };

  a = function () {
    var e = k.map(k.functorArray)(b);
    return function (d) {
      return g.cList(e(d));
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
      k = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      g = a["Metajelo.CSS.Web.Util"];
  a = g.mjWebClass(f.versioning);
  g.mjWebClass(f.url);
  var b = g.mjWebClass(f.title),
      e = g.mjWebClass(f.sustainability),
      d = g.mjWebClass(f.superOrg),
      n = g.mjWebClass(f.resourceTypeGen),
      m = g.mjWebClass(f.resourceTypeDescr),
      l = g.mjWebClass(f.resourceType),
      r = g.mjWebClass(f.resourceId),
      x = g.mjWebClass(f.relatedIdsHeader),
      z = g.mjWebClass(f.relatedIdList),
      t = g.mjWebClass(f.relatedId),
      q = g.mjWebClass(f.relType),
      u = g.mjWebClass(f.recordId),
      A = g.mjWebClass(f.record),
      y = g.mjWebClass(f.pubyear),
      B = g.mjWebClass(f.productsHeader),
      w = g.mjWebClass(f.productList),
      F = g.mjWebClass(k.productGroup),
      E = g.mjWebClass(k.productCitation),
      v = g.mjWebClass(f.product),
      C = g.mjWebClass(f.policyType),
      L = g.mjWebClass(f.policy),
      G = g.cList([f.url, f.missionStatement]),
      X = g.mjWebClass(f.institutionType),
      M = g.mjWebClass(f.institutionPolicy),
      K = g.mjWebClass(f.institutionPolicies),
      O = g.mjWebClass(f.institutionName),
      p = g.mjWebClass(f.institutionId),
      Q = g.mjWebClass(f.institutionContact),
      I = g.mjWebClass(f.identifier),
      R = g.cList([f.url, k.idUrl]),
      fa = g.mjWebClass(f.idType),
      T = g.cList([f.url, f.fundingStatement]),
      V = g.mjWebClass(k.errorDisplayBox),
      ca = g.mjWebClass(k.errorDisplay),
      ha = g.mjWebClass(f.creator),
      da = g.mjWebClass(f.contactType),
      Y = g.mjWebClass(f.contactEmail);
  f = g.mjWebClass(f.basicMetadata);
  k = g.mjWebClass(k.appliesInfo);
  c.productGroup = F;
  c.productCitation = E;
  c.appliesInfo = k;
  c.idUrl = R;
  c.errorDisplayBox = V;
  c.errorDisplay = ca;
  c.record = A;
  c.recordId = u;
  c.product = v;
  c.productList = w;
  c.productsHeader = B;
  c.sustainability = e;
  c.missionStatement = G;
  c.fundingStatement = T;
  c.identifier = I;
  c.idType = fa;
  c.relatedId = t;
  c.relType = q;
  c.relatedIdList = z;
  c.relatedIdsHeader = x;
  c.basicMetadata = f;
  c.creator = ha;
  c.pubyear = y;
  c.title = b;
  c.resourceId = r;
  c.resourceType = l;
  c.resourceTypeGen = n;
  c.resourceTypeDescr = m;
  c.institutionName = O;
  c.institutionId = p;
  c.institutionType = X;
  c.institutionContact = Q;
  c.contactEmail = Y;
  c.contactType = da;
  c.institutionPolicy = M;
  c.institutionPolicies = K;
  c.policy = L;
  c.policyType = C;
  c.superOrg = d;
  c.versioning = a;
})(PS);

(function (a) {
  a._validateURL = function (c) {
    return function (f) {
      if (!f || !/^https?:\/\//.test(f)) return "Unknown or missing protocol format in url: " + f;
      var k = document.createElement("a");
      k.href = f;

      if (c) {
        if (k.username) return "URL " + f + " contains a username: " + k.username;
        if (k.password) return "URL " + f + " contains a password: " + k.password;
      }

      return /\.[^0-9.]/.test(k.hostname) ? /(\s|^\.|\.$)/.test(k.hostname) ? "Hostname '" + k.href + "' contains whitespace in " + f : k.href.toLowerCase().replace(/\/+$/g, "") !== f.toLowerCase().replace(/\/+$/g, "") ? "Unkown error: supplied URL " + f + " doesn't match parsed href " + k.href : "SUCCESS" : "Invalid hostname '" + k.href + "' in " + f;
    };
  };
})(PS["Text.URL.Validate"] = PS["Text.URL.Validate"] || {});

(function (a) {
  a["Text.URL.Validate"] = a["Text.URL.Validate"] || {};
  var c = a["Text.URL.Validate"],
      f = a["Text.URL.Validate"],
      k = a["Data.Either"],
      g = a["Data.Maybe"],
      b = a["Data.Show"],
      e = a["Data.String.NonEmpty.Internal"];
  a = new b.Show(function (n) {
    return b.show(e.showNonEmptyString)(n);
  });

  var d = function d(n) {
    return function (m) {
      var l = "SUCCESS" === m ? !0 : !1;

      if (l) {
        m = e.fromString(n);
        if (m instanceof g.Just) return new k.Right(m.value0);
        if (m instanceof g.Nothing) return new k.Left("Empty URL");
        throw Error("Failed pattern match at Text.URL.Validate (line 54, column 11 - line 56, column 32): " + [m.constructor.name]);
      }

      if (!l) return new k.Left(m);
      throw Error("Failed pattern match at Text.URL.Validate (line 53, column 29 - line 57, column 23): " + [l.constructor.name]);
    };
  };

  c.parsePublicURL = function (n) {
    var m = f._validateURL(!0)(n);

    return d(n)(m);
  };

  c.urlToNEString = function (n) {
    return n;
  };

  c.urlToString = function (n) {
    return e.toString(n);
  };

  c.showURL = a;
})(PS);

(function (a) {
  a["Metajelo.Types"] = a["Metajelo.Types"] || {};

  var c = a["Metajelo.Types"],
      f = a["Data.Bounded"],
      k = a["Data.Enum"],
      g = a["Data.Eq"],
      b = a["Data.Generic.Rep"],
      e = a["Data.Generic.Rep.Bounded"],
      d = a["Data.Generic.Rep.Enum"],
      n = a["Data.Generic.Rep.Eq"],
      m = a["Data.Generic.Rep.Ord"],
      l = a["Data.Generic.Rep.Show"],
      r = a["Data.Ord"],
      x = a["Data.Show"],
      z = a["Data.String.NonEmpty.Internal"],
      t = a["Data.Symbol"],
      q = a["Text.URL.Validate"],
      u = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      A = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      y = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      B = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      w = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      F = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      E = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      v = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      C = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      L = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      G = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      X = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      M = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      K = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      O = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      p = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Q = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      I = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      R = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      fa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      T = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      V = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ca = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ha = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      da = function () {
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
      ja = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      va = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      N = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      W = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      D = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      U = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      P = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      J = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      na = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      H = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Z = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ka = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ia = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      la = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      qa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      sa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      xa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ga = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ba = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ja = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ka = function () {
    function h(Ha) {
      this.value0 = Ha;
    }

    h.create = function (Ha) {
      return new h(Ha);
    };

    return h;
  }(),
      S = function () {
    function h(Ha) {
      this.value0 = Ha;
    }

    h.create = function (Ha) {
      return new h(Ha);
    };

    return h;
  }(),
      ua = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Fa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Oa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      eb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ya = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Pa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ia = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Za = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Qa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ra = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Sa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ta = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Ua = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Va = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      $a = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ab = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Wa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      bb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      La = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      cb = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      Xa = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      ba = function () {
    function h() {}

    h.value = new h();
    return h;
  }(),
      oa = new x.Show(function (h) {
    if (h instanceof ua) return "commercial";
    if (h instanceof Fa) return "non-profit";
    if (h instanceof Oa) return "governmental";
    throw Error("Failed pattern match at Metajelo.Types (line 237, column 1 - line 240, column 37): " + [h.constructor.name]);
  }),
      ya = new x.Show(function (h) {
    return "dataCustodian";
  }),
      za = new b.Generic(function (h) {
    if (h instanceof u) return new b.Inl(b.NoArguments.value);
    if (h instanceof A) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof y) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof B) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof w) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof F) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof E) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof v) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (h instanceof C) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (h instanceof L) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (h instanceof G) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (h instanceof X) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (h instanceof M) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (h instanceof K) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return u.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return A.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return y.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return B.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return w.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return F.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return E.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return v.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return C.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return L.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return G.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return X.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return M.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return K.value;
    throw Error("Failed pattern match at Metajelo.Types (line 140, column 1 - line 140, column 76): " + [h.constructor.name]);
  }),
      ea = new x.Show(l.genericShow(za)(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Audiovisual";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Dataset";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Event";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Image";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "InteractiveResource";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Model";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "PhysicalObject";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "ResourceCollection";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Service";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Software";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Sound";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Text";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Workflow";
  })))(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Other";
  }))))))))))))))))),
      ma = new b.Generic(function (h) {
    if (h instanceof O) return new b.Inl(b.NoArguments.value);
    if (h instanceof p) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof Q) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof I) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof R) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof fa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof T) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof V) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (h instanceof ca) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (h instanceof ha) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (h instanceof da) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (h instanceof Y) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (h instanceof aa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (h instanceof ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (h instanceof va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (h instanceof N) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (h instanceof W) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (h instanceof D) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))));
    if (h instanceof U) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))));
    if (h instanceof P) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))));
    if (h instanceof J) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))));
    if (h instanceof na) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))));
    if (h instanceof H) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))))))))));
    if (h instanceof Z) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))))))))))));
    if (h instanceof ka) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value))))))))))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return O.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return p.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return Q.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return I.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return R.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return fa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return T.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return V.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ca.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ha.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return da.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Y.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return aa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ja.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return va.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return N.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return W.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return D.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return U.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return P.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return J.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return na.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return H.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Z.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ka.value;
    throw Error("Failed pattern match at Metajelo.Types (line 197, column 1 - line 197, column 62): " + [h.constructor.name]);
  }),
      pa = new x.Show(l.genericShow(ma)(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsCitedBy";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Cites";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsSupplementTo";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsSupplementedBy";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsContinuedBy";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Continues";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsNewVersionOf";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsPreviousVersionOf";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsPartOf";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "HasPart";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsReferencedBy";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "References";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsDocumentedBy";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Documents";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsCompiledBy";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Compiles";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsVariantFormOf";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsOriginalFormOf";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsIdenticalTo";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "HasMetadata";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsMetadataFor";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "Reviews";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsReviewedBy";
  })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsDerivedFrom";
  })))(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
    return "IsSourceOf";
  })))))))))))))))))))))))))))),
      ra = new b.Generic(function (h) {
    if (h instanceof ia) return new b.Inl(b.NoArguments.value);
    if (h instanceof la) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof qa) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof xa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof Ga) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof Ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof Ja) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))));
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return ia.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return la.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return qa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return sa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return xa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return Ga.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ba.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return Ja.value;
    throw Error("Failed pattern match at Metajelo.Types (line 307, column 1 - line 307, column 58): " + [h.constructor.name]);
  }),
      ta = new x.Show(function (h) {
    return h instanceof Ja ? "Terms of Use" : l.genericShow(ra)(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Access";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Collection";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Data";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Metadata";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Preservation";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Submission";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Quality";
    })))(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "TermsOfUse";
    }))))))))))(h);
  }),
      wa = new b.Generic(function (h) {
    if (h instanceof Ka) return new b.Inl(h.value0);
    if (h instanceof S) return new b.Inr(h.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return new Ka(h.value0);
    if (h instanceof b.Inr) return new S(h.value0);
    throw Error("Failed pattern match at Metajelo.Types (line 340, column 1 - line 340, column 50): " + [h.constructor.name]);
  }),
      Aa = new x.Show(l.genericShow(wa)(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsArgument(z.showNonEmptyString))(new t.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(l.genericShowConstructor(l.genericShowArgsArgument(q.showURL))(new t.IsSymbol(function () {
    return "RefPolicy";
  }))))),
      Da = new b.Generic(function (h) {
    if (h instanceof ua) return new b.Inl(b.NoArguments.value);
    if (h instanceof Fa) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof Oa) return new b.Inr(new b.Inr(b.NoArguments.value));
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return ua.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return Fa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr) return Oa.value;
    throw Error("Failed pattern match at Metajelo.Types (line 236, column 1 - line 236, column 68): " + [h.constructor.name]);
  }),
      Ea = new b.Generic(function (h) {
    return b.NoArguments.value;
  }, function (h) {
    return eb.value;
  }),
      Ca = new b.Generic(function (h) {
    if (h instanceof Ya) return new b.Inl(b.NoArguments.value);
    if (h instanceof Pa) return new b.Inr(new b.Inl(b.NoArguments.value));
    if (h instanceof Ia) return new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)));
    if (h instanceof Za) return new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))));
    if (h instanceof Qa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))));
    if (h instanceof Ra) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))));
    if (h instanceof Sa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))));
    if (h instanceof Ta) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))));
    if (h instanceof Ua) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))));
    if (h instanceof Va) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))));
    if (h instanceof $a) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))));
    if (h instanceof ab) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))));
    if (h instanceof Wa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))));
    if (h instanceof bb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))));
    if (h instanceof La) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))));
    if (h instanceof cb) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value))))))))))))))));
    if (h instanceof Xa) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inl(b.NoArguments.value)))))))))))))))));
    if (h instanceof ba) return new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(new b.Inr(b.NoArguments.value)))))))))))))))));
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [h.constructor.name]);
  }, function (h) {
    if (h instanceof b.Inl) return Ya.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inl) return Pa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inl) return Ia.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inl) return Za.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inl) return Qa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inl) return Ra.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Sa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ta.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Ua.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Va.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return $a.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return ab.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Wa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return bb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return La.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return cb.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inl) return Xa.value;
    if (h instanceof b.Inr && h.value0 instanceof b.Inr && h.value0.value0 instanceof b.Inr && h.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr && h.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0.value0 instanceof b.Inr) return ba.value;
    throw Error("Failed pattern match at Metajelo.Types (line 74, column 1 - line 74, column 66): " + [h.constructor.name]);
  }),
      Ma = new x.Show(function (h) {
    return h instanceof Pa ? "arXiv" : h instanceof Ia ? "bibcode" : l.genericShow(Ca)(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ARK";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ArXiv";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Bibcode";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "DOI";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "EAN13";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "EISSN";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "Handle";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "IGSN";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ISBN";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ISSN";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "ISTC";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "LISSN";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "LSID";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "PMID";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "PURL";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "UPC";
    })))(l.genericShowSum(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "URL";
    })))(l.genericShowConstructor(l.genericShowArgsNoArguments)(new t.IsSymbol(function () {
      return "URN";
    }))))))))))))))))))))(h);
  }),
      Na = new g.Eq(n.genericEq(za)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))))))))),
      db = new r.Ord(function () {
    return Na;
  }, function (h) {
    return function (Ha) {
      return m.genericCompare(za)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))))))))(h)(Ha);
    };
  }),
      ib = new g.Eq(n.genericEq(ma)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))))))))))))))))))))))))),
      fb = new r.Ord(function () {
    return ib;
  }, function (h) {
    return function (Ha) {
      return m.genericCompare(ma)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments))))))))))))))))))))))))))(h)(Ha);
    };
  }),
      gb = new g.Eq(n.genericEq(ra)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))),
      hb = new r.Ord(function () {
    return gb;
  }, function (h) {
    return function (Ha) {
      return m.genericCompare(ra)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))(h)(Ha);
    };
  }),
      jb = new g.Eq(n.genericEq(Da)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments))))),
      kb = new r.Ord(function () {
    return jb;
  }, function (h) {
    return function (Ha) {
      return m.genericCompare(Da)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments))))(h)(Ha);
    };
  }),
      lb = new g.Eq(n.genericEq(Ea)(n.genericEqConstructor(n.genericEqNoArguments))),
      mb = new r.Ord(function () {
    return lb;
  }, function (h) {
    return function (Ha) {
      return m.genericCompare(Ea)(m.genericOrdConstructor(m.genericOrdNoArguments))(h)(Ha);
    };
  }),
      qb = new g.Eq(n.genericEq(Ca)(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqSum(n.genericEqConstructor(n.genericEqNoArguments))(n.genericEqConstructor(n.genericEqNoArguments)))))))))))))))))))),
      nb = new r.Ord(function () {
    return qb;
  }, function (h) {
    return function (Ha) {
      return m.genericCompare(Ca)(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdSum(m.genericOrdConstructor(m.genericOrdNoArguments))(m.genericOrdConstructor(m.genericOrdNoArguments)))))))))))))))))))(h)(Ha);
    };
  }),
      rb = new k.Enum(function () {
    return db;
  }, d.genericPred(za)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(za)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      sb = new k.Enum(function () {
    return fb;
  }, d.genericPred(ma)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(ma)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      tb = new k.Enum(function () {
    return hb;
  }, d.genericPred(ra)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(ra)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      ub = new k.Enum(function () {
    return kb;
  }, d.genericPred(Da)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Da)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      vb = new k.Enum(function () {
    return mb;
  }, d.genericPred(Ea)(d.genericEnumConstructor(d.genericEnumNoArguments)), d.genericSucc(Ea)(d.genericEnumConstructor(d.genericEnumNoArguments))),
      wb = new k.Enum(function () {
    return nb;
  }, d.genericPred(Ca)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments)))), d.genericSucc(Ca)(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumSum(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericTopConstructor(e.genericTopNoArguments))(d.genericEnumConstructor(d.genericEnumNoArguments))(e.genericBottomConstructor(e.genericBottomNoArguments)))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))))),
      xb = new f.Bounded(function () {
    return db;
  }, e.genericBottom(za)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(za)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))),
      yb = new f.Bounded(function () {
    return fb;
  }, e.genericBottom(ma)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(ma)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))))))))))))))))))))))))),
      ob = new f.Bounded(function () {
    return hb;
  }, e.genericBottom(ra)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(ra)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))),
      zb = new k.SmallBounded(function () {
    return ob;
  }),
      Ab = new f.Bounded(function () {
    return kb;
  }, e.genericBottom(Da)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Da)(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments))))),
      pb = new f.Bounded(function () {
    return mb;
  }, e.genericBottom(Ea)(e.genericBottomConstructor(e.genericBottomNoArguments)), e.genericTop(Ea)(e.genericTopConstructor(e.genericTopNoArguments))),
      Bb = new k.SmallBounded(function () {
    return pb;
  }),
      Cb = new f.Bounded(function () {
    return nb;
  }, e.genericBottom(Ca)(e.genericBottomSum(e.genericBottomConstructor(e.genericBottomNoArguments))), e.genericTop(Ca)(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopSum(e.genericTopConstructor(e.genericTopNoArguments)))))))))))))))))))),
      Db = new k.BoundedEnum(function () {
    return xb;
  }, function () {
    return rb;
  }, d.genericCardinality(za)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericFromEnum(za)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))), d.genericToEnum(za)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))),
      Eb = new k.BoundedEnum(function () {
    return yb;
  }, function () {
    return sb;
  }, d.genericCardinality(ma)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericFromEnum(ma)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))))))))))))))))))), d.genericToEnum(ma)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))))))))))),
      Fb = new k.BoundedEnum(function () {
    return ob;
  }, function () {
    return tb;
  }, d.genericCardinality(ra)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericFromEnum(ra)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))), d.genericToEnum(ra)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))))))))),
      Gb = new k.BoundedEnum(function () {
    return Ab;
  }, function () {
    return ub;
  }, d.genericCardinality(Da)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericFromEnum(Da)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)))), d.genericToEnum(Da)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))),
      Hb = new k.BoundedEnum(function () {
    return pb;
  }, function () {
    return vb;
  }, d.genericCardinality(Ea)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericFromEnum(Ea)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments)), d.genericToEnum(Ea)(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))),
      Ib = new k.BoundedEnum(function () {
    return Cb;
  }, function () {
    return wb;
  }, d.genericCardinality(Ca)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericFromEnum(Ca)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))), d.genericToEnum(Ca)(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumSum(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))(d.genericBoundedEnumConstructor(d.genericBoundedEnumNoArguments))))))))))))))))))));

  c.ARK = Ya;
  c.ArXiv = Pa;
  c.Bibcode = Ia;
  c.DOI = Za;
  c.EAN13 = Qa;
  c.EISSN = Ra;
  c.Handle = Sa;
  c.IGSN = Ta;
  c.ISBN = Ua;
  c.ISSN = Va;
  c.ISTC = $a;
  c.LISSN = ab;
  c.LSID = Wa;
  c.PMID = bb;
  c.PURL = La;
  c.UPC = cb;
  c.URL = Xa;
  c.URN = ba;
  c.Audiovisual = u;
  c.Dataset = A;
  c.Event = y;
  c.Image = B;
  c.InteractiveResource = w;
  c.Model = F;
  c.PhysicalObject = E;
  c.ResourceCollection = v;
  c.Service = C;
  c.Software = L;
  c.Sound = G;
  c.Text = X;
  c.Workflow = M;
  c.Other = K;
  c.IsCitedBy = O;
  c.Cites = p;
  c.IsSupplementTo = Q;
  c.IsSupplementedBy = I;
  c.IsContinuedBy = R;
  c.Continues = fa;
  c.IsNewVersionOf = T;
  c.IsPreviousVersionOf = V;
  c.IsPartOf = ca;
  c.HasPart = ha;
  c.IsReferencedBy = da;
  c.References = Y;
  c.IsDocumentedBy = aa;
  c.Documents = ja;
  c.IsCompiledBy = va;
  c.Compiles = N;
  c.IsVariantFormOf = W;
  c.IsOriginalFormOf = D;
  c.IsIdenticalTo = U;
  c.HasMetadata = P;
  c.IsMetadataFor = J;
  c.Reviews = na;
  c.IsReviewedBy = H;
  c.IsDerivedFrom = Z;
  c.IsSourceOf = ka;
  c.Commercial = ua;
  c.NonProfit = Fa;
  c.Governmental = Oa;
  c.DataCustodian = eb;
  c.Access = ia;
  c.Collection = la;
  c.Data = qa;
  c.Metadata = sa;
  c.Preservation = xa;
  c.Submission = Ga;
  c.Quality = Ba;
  c.TermsOfUse = Ja;
  c.FreeTextPolicy = Ka;
  c.RefPolicy = S;
  c.showIdentifierType = Ma;
  c.boundedEnumIdentifierType = Ib;
  c.showResourceTypeGeneral = ea;
  c.boundedEnumResourceTypeGeneral = Db;
  c.showRelationType = pa;
  c.boundedEnumRelationType = Eb;
  c.showInstitutionType = oa;
  c.boundedEnumInstitutionType = Gb;
  c.eqInstitutionContactType = lb;
  c.showInstitutionContactType = ya;
  c.boundedEnumInstitutionContactType = Hb;
  c.smallBoundedInstitutionContactType = Bb;
  c.showPolicyType = ta;
  c.eqPolicyType = gb;
  c.boundedEnumPolicyType = Fb;
  c.smallBoundedPolicyType = zb;
  c.showPolicy = Aa;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser"] = a["Text.Parsing.StringParser"] || {};
  var c = a["Text.Parsing.StringParser"],
      f = a["Control.Alt"],
      k = a["Control.Alternative"],
      g = a["Control.Applicative"],
      b = a["Control.Apply"],
      e = a["Control.Bind"],
      d = a["Control.Monad"],
      n = a["Control.Monad.Rec.Class"],
      m = a["Control.Plus"],
      l = a["Data.Bifunctor"],
      r = a["Data.Boolean"],
      x = a["Data.Either"],
      z = a["Data.Functor"];
  a = a["Data.Show"];

  var t = function () {
    function v(C) {
      this.value0 = C;
    }

    v.create = function (C) {
      return new v(C);
    };

    return v;
  }();

  a = new a.Show(function (v) {
    return v.value0;
  });

  var q = new z.Functor(function (v) {
    return function (C) {
      var L = z.map(x.functorEither)(function (G) {
        return {
          result: v(G.result),
          suffix: G.suffix
        };
      });
      return function (G) {
        return L(C(G));
      };
    };
  }),
      u = function u(v) {
    return function (C) {
      return new x.Left({
        pos: C.pos,
        error: new t(v)
      });
    };
  },
      A = new b.Apply(function () {
    return q;
  }, function (v) {
    return function (C) {
      return function (L) {
        return e.bind(x.bindEither)(v(L))(function (G) {
          return e.bind(x.bindEither)(C(G.suffix))(function (X) {
            return g.pure(x.applicativeEither)({
              result: G.result(X.result),
              suffix: X.suffix
            });
          });
        });
      };
    };
  }),
      y = new e.Bind(function () {
    return A;
  }, function (v) {
    return function (C) {
      return function (L) {
        return e.bind(x.bindEither)(v(L))(function (G) {
          return C(G.result)(G.suffix);
        });
      };
    };
  }),
      B = new g.Applicative(function () {
    return A;
  }, function (v) {
    return function (C) {
      return new x.Right({
        result: v,
        suffix: C
      });
    };
  }),
      w = new d.Monad(function () {
    return B;
  }, function () {
    return y;
  });

  b = new n.MonadRec(function () {
    return w;
  }, function (v) {
    return function (C) {
      var L = function L(G) {
        if (G.result instanceof n.Loop) return new n.Loop({
          state: G.result.value0,
          str: G.suffix
        });
        if (G.result instanceof n.Done) return new n.Done({
          result: G.result.value0,
          suffix: G.suffix
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser (line 88, column 7 - line 88, column 70): " + [G.constructor.name]);
      };

      return function (G) {
        return n.tailRecM(n.monadRecEither)(function (X) {
          return z.map(x.functorEither)(L)(v(X.state)(X.str));
        })({
          state: C,
          str: G
        });
      };
    };
  });
  var F = new f.Alt(function () {
    return q;
  }, function (v) {
    return function (C) {
      return function (L) {
        var G = v(L);

        if (G instanceof x.Left) {
          if (L.pos === G.value0.pos) return C(L);
          if (r.otherwise) return new x.Left({
            error: G.value0.error,
            pos: G.value0.pos
          });
        }

        return G;
      };
    };
  }),
      E = new m.Plus(function () {
    return F;
  }, u("No alternative"));
  f = new k.Alternative(function () {
    return B;
  }, function () {
    return E;
  });
  c.ParseError = t;

  c.runParser = function (v) {
    return function (C) {
      return l.bimap(x.bifunctorEither)(function (L) {
        return L.error;
      })(function (L) {
        return L.result;
      })(v({
        str: C,
        pos: 0
      }));
    };
  };

  c.fail = u;

  c["try"] = function (v) {
    return function (C) {
      return l.lmap(x.bifunctorEither)(function (L) {
        return {
          pos: C.pos,
          error: L.error
        };
      })(v(C));
    };
  };

  c.showParseError = a;
  c.functorParser = q;
  c.applyParser = A;
  c.applicativeParser = B;
  c.altParser = F;
  c.alternativeParser = f;
  c.bindParser = y;
  c.monadRecParser = b;
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.Combinators"] = a["Text.Parsing.StringParser.Combinators"] || {};

  var c = a["Text.Parsing.StringParser.Combinators"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Functor"],
      d = a["Data.NonEmpty"],
      n = a["Data.Unit"],
      m = a["Text.Parsing.StringParser"],
      l = a["Data.List"].manyRec(m.monadRecParser)(m.alternativeParser),
      r = function r(x) {
    return function (z) {
      return new d.NonEmpty(x, z);
    };
  };

  c.many = l;

  c.many1 = function (x) {
    return g.apply(m.applyParser)(e.map(m.functorParser)(r)(x))(l(x));
  };

  c.withError = function (x) {
    return function (z) {
      return f.alt(m.altParser)(x)(m.fail(z));
    };
  };

  c.optional = function (x) {
    return f.alt(m.altParser)(b.bind(m.bindParser)(x)(function (z) {
      return k.pure(m.applicativeParser)(n.unit);
    }))(k.pure(m.applicativeParser)(n.unit));
  };

  c.sepBy1 = function (x) {
    return function (z) {
      return b.bind(m.bindParser)(x)(function (t) {
        return b.bind(m.bindParser)(l(g.applySecond(m.applyParser)(z)(x)))(function (q) {
          return k.pure(m.applicativeParser)(r(t)(q));
        });
      });
    };
  };
})(PS);

(function (a) {
  a["Text.Parsing.StringParser.CodePoints"] = a["Text.Parsing.StringParser.CodePoints"] || {};

  var c = a["Text.Parsing.StringParser.CodePoints"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Data.Char"],
      b = a["Data.Either"],
      e = a["Data.Enum"],
      d = a["Data.Maybe"],
      n = a["Data.Show"],
      m = a["Data.String.CodePoints"],
      l = a["Data.Unit"],
      r = a["Text.Parsing.StringParser"],
      x = a["Text.Parsing.StringParser.Combinators"],
      z = function () {
    var q = function () {
      var u = e.fromEnum(m.boundedEnumCodePoint);
      return function (A) {
        return g.fromCharCode(u(A));
      };
    }();

    return function (u) {
      var A = m.codePointAt(u.pos)(u.str);

      if (A instanceof d.Just) {
        var y = q(A.value0);
        if (y instanceof d.Just) return new b.Right({
          result: y.value0,
          suffix: {
            str: u.str,
            pos: u.pos + 1 | 0
          }
        });
        if (y instanceof d.Nothing) return new b.Left({
          pos: u.pos,
          error: r.ParseError.create("CodePoint " + (n.show(m.showCodePoint)(A.value0) + " is not a character"))
        });
        throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 53, column 16 - line 55, column 100): " + [y.constructor.name]);
      }

      if (A instanceof d.Nothing) return new b.Left({
        pos: u.pos,
        error: new r.ParseError("Unexpected EOF")
      });
      throw Error("Failed pattern match at Text.Parsing.StringParser.CodePoints (line 52, column 3 - line 56, column 64): " + [A.constructor.name]);
    };
  }(),
      t = function t(q) {
    return r["try"](k.bind(r.bindParser)(z)(function (u) {
      return q(u) ? f.pure(r.applicativeParser)(u) : r.fail("Character " + (n.show(n.showChar)(u) + " did not satisfy predicate"));
    }));
  };

  c.eof = function (q) {
    return q.pos < m.length(q.str) ? new b.Left({
      pos: q.pos,
      error: new r.ParseError("Expected EOF")
    }) : new b.Right({
      result: l.unit,
      suffix: q
    });
  };

  c.satisfy = t;

  c["char"] = function (q) {
    return x.withError(t(function (u) {
      return u === q;
    }))("Could not match character " + n.show(n.showChar)(q));
  };
})(PS);

(function (a) {
  a["Text.Email.Parser"] = a["Text.Email.Parser"] || {};

  var c = a["Text.Email.Parser"],
      f = a["Control.Alt"],
      k = a["Control.Applicative"],
      g = a["Control.Apply"],
      b = a["Control.Bind"],
      e = a["Data.Char"],
      d = a["Data.Foldable"],
      n = a["Data.Functor"],
      m = a["Data.List.Types"],
      l = a["Data.Maybe"],
      r = a["Data.Monoid"],
      x = a["Data.String.CodeUnits"],
      z = a["Data.String.Pattern"],
      t = a["Data.Unit"],
      q = a["Text.Parsing.StringParser"],
      u = a["Text.Parsing.StringParser.CodePoints"],
      A = a["Text.Parsing.StringParser.Combinators"],
      y = function (N) {
    var W = l.fromJust();
    return function (D) {
      return W(e.fromCharCode(D));
    };
  }(),
      B = function B(N) {
    return n.map(q.functorParser)(function () {
      var W = d.fold(m.foldableNonEmptyList)(r.monoidString),
          D = n.map(m.functorNonEmptyList)(x.singleton);
      return function (U) {
        return W(D(U));
      };
    }())(A.many1(u.satisfy(N)));
  },
      w = function w(N) {
    return b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(N))(function () {
      return b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(F(N)))(function () {
        return k.pure(q.applicativeParser)(t.unit);
      });
    });
  },
      F = function F(N) {
    return f.alt(q.altParser)(w(N))(k.pure(q.applicativeParser)(t.unit));
  },
      E = function E(N) {
    return b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(u.satisfy(N)))(function () {
      return b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(F(u.satisfy(N))))(function () {
        return k.pure(q.applicativeParser)(t.unit);
      });
    });
  },
      v = u["char"](y(0)),
      C = u["char"]("\n");

  a = function a(N) {
    return " " === N || "\t" === N;
  };

  var L = u.satisfy(a),
      G = E(a),
      X = function X(N) {
    return function (W) {
      return function (D) {
        return D >= N && D <= W;
      };
    };
  };

  a = X(y(33))(y(126));

  var M = u.satisfy(a),
      K = function K(N) {
    return function (W) {
      return x.contains(z.Pattern(x.singleton(W)))(N);
    };
  },
      O = function O(N) {
    return X(y(1))(y(8))(N) || X(y(14))(y(31))(N) || K("\x0B\f\x7F")(N);
  },
      p = function p(N) {
    return X(y(33))(y(39))(N) || X(y(42))(y(91))(N) || X(y(93))(y(126))(N) || O(N);
  },
      Q = function Q(N) {
    return X(y(33))(y(90))(N) || X(y(94))(y(126))(N) || O(N);
  },
      I = u.satisfy(O),
      R = u["char"]("\r"),
      fa = n["void"](q.functorParser)(g.applySecond(q.applyParser)(R)(C)),
      T = function () {
    var N = w(g.applySecond(q.applyParser)(fa)(G)),
        W = g.applySecond(q.applyParser)(G)(A.optional(g.applySecond(q.applyParser)(fa)(G)));
    return f.alt(q.altParser)(W)(N);
  }(),
      V = function () {
    var N = b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(u["char"]("\\")))(function () {
      return f.alt(q.altParser)(f.alt(q.altParser)(f.alt(q.altParser)(f.alt(q.altParser)(f.alt(q.altParser)(M)(L))(C))(R))(I))(v);
    });
    return b.bind(q.bindParser)(N)(function (W) {
      return k.pure(q.applicativeParser)("\\" + x.singleton(W));
    });
  }(),
      ca = f.alt(q.altParser)(B(function (N) {
    return K(x.singleton(y(33)))(N) || X(y(35))(y(91))(N) || X(y(93))(y(126))(N) || O(N);
  }))(V),
      ha = function () {
    var N = b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(u["char"]('"')))(function () {
      return b.bind(q.bindParser)(A.many(g.applySecond(q.applyParser)(A.optional(T))(ca)))(function (W) {
        return b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(A.optional(T)))(function () {
          return b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(u["char"]('"')))(function () {
            return k.pure(q.applicativeParser)(W);
          });
        });
      });
    });
    return n.map(q.functorParser)(function (W) {
      return '"' + (d.fold(m.foldableList)(r.monoidString)(W) + '"');
    })(N);
  }(),
      da = b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(u["char"]("(")))(function () {
    return b.discard(b.discardUnit)(q.bindParser)(F(f.alt(q.altParser)(f.alt(q.altParser)(f.alt(q.altParser)(E(p))(n["void"](q.functorParser)(V)))(da))(T)))(function () {
      return b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(u["char"](")")))(function () {
        return k.pure(q.applicativeParser)(t.unit);
      });
    });
  }),
      Y = F(f.alt(q.altParser)(da)(T));

  a = b.discard(b.discardUnit)(q.bindParser)(A.optional(Y))(function () {
    return b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(u["char"]("[")))(function () {
      return b.bind(q.bindParser)(A.many(g.applySecond(q.applyParser)(A.optional(T))(B(Q))))(function (N) {
        return b.discard(b.discardUnit)(q.bindParser)(A.optional(T))(function () {
          return b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(u["char"]("]")))(function () {
            return b.discard(b.discardUnit)(q.bindParser)(A.optional(Y))(function () {
              return k.pure(q.applicativeParser)("[" + (d.fold(m.foldableList)(r.monoidString)(N) + "]"));
            });
          });
        });
      });
    });
  });

  var aa = function () {
    return B(function (N) {
      return "0" <= N && "9" >= N || "a" <= N && "z" >= N || "A" <= N && "Z" >= N || K("!#$%&'*+/=?^_`{|}~-")(N);
    });
  }(),
      ja = function () {
    var N = b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(A.optional(Y)))(function () {
      return b.bind(q.bindParser)(f.alt(q.altParser)(aa)(ha))(function (W) {
        return b.discard(b.discardUnit)(q.bindParser)(n["void"](q.functorParser)(A.optional(Y)))(function () {
          return k.pure(q.applicativeParser)(W);
        });
      });
    });
    N = A.sepBy1(N)(u["char"]("."));
    return n.map(q.functorParser)(d.intercalate(m.foldableNonEmptyList)(r.monoidString)("."))(N);
  }(),
      va = f.alt(q.altParser)(ja)(a);

  a = b.bind(q.bindParser)(ja)(function (N) {
    return b.bind(q.bindParser)(u["char"]("@"))(function () {
      return b.bind(q.bindParser)(va)(function (W) {
        return b.bind(q.bindParser)(u.eof)(function () {
          return k.pure(q.applicativeParser)({
            localPart: N,
            domainPart: W
          });
        });
      });
    });
  });
  c.addrSpec = a;

  c.toString = function (N) {
    return N.localPart + ("@" + N.domainPart);
  };
})(PS);

(function (a) {
  a["Text.Email.Validate"] = a["Text.Email.Validate"] || {};
  var c = a["Text.Email.Validate"],
      f = a["Data.Bifunctor"],
      k = a["Data.Either"],
      g = a["Data.Show"],
      b = a["Text.Email.Parser"],
      e = a["Text.Parsing.StringParser"];

  a = function () {
    var d = f.lmap(k.bifunctorEither)(g.show(e.showParseError));
    return function (n) {
      n = e.runParser(b.addrSpec)(n);
      return d(n);
    };
  }();

  c.validate = a;
})(PS);

(function (a) {
  a["Metajelo.Validation"] = a["Metajelo.Validation"] || {};

  var c = a["Metajelo.Validation"],
      f = a["Control.Category"],
      k = a["Data.Bifunctor"],
      g = a["Data.Either"],
      b = a["Data.Maybe"],
      e = a["Data.Show"],
      d = a["Data.String.Common"],
      n = a["Data.String.NonEmpty.Internal"],
      m = a["Formless.Validation"],
      l = a["Text.Email.Validate"],
      r = function () {
    function B() {}

    B.value = new B();
    return B;
  }(),
      x = function () {
    function B(w) {
      this.value0 = w;
    }

    B.create = function (w) {
      return new B(w);
    };

    return B;
  }(),
      z = function () {
    function B(w) {
      this.value0 = w;
    }

    B.create = function (w) {
      return new B(w);
    };

    return B;
  }(),
      t = function () {
    function B(w) {
      this.value0 = w;
    }

    B.create = function (w) {
      return new B(w);
    };

    return B;
  }(),
      q = function () {
    function B(w) {
      this.value0 = w;
    }

    B.create = function (w) {
      return new B(w);
    };

    return B;
  }(),
      u = function () {
    function B(w) {
      this.value0 = w;
    }

    B.create = function (w) {
      return new B(w);
    };

    return B;
  }(),
      A = function () {
    function B(w, F) {
      this.value0 = w;
      this.value1 = F;
    }

    B.create = function (w) {
      return function (F) {
        return new B(w, F);
      };
    };

    return B;
  }(),
      y = function y(B) {
    this.toText = B;
  };

  a = new y(f.identity(f.categoryFn));
  y = new y(function (B) {
    if (B instanceof r) return "This field is required.";
    if (B instanceof z) return "Invalid input: " + B.value0;
    if (B instanceof x) return "Email validation error: " + B.value0;
    if (B instanceof t) return "You must enter at least " + (e.show(e.showInt)(B.value0) + " characters.");
    if (B instanceof q) return "You must enter less than " + (e.show(e.showInt)(B.value0) + " characters.");
    if (B instanceof u) return 'Could not parse "' + (B.value0 + '" to a valid integer.');
    if (B instanceof A) return 'This field contains "' + (B.value1 + ('" but must be equal to "' + (B.value0 + '" to validate.')));
    throw Error("Failed pattern match at Metajelo.Validation (line 35, column 1 - line 42, column 126): " + [B.constructor.name]);
  });

  c.toText = function (B) {
    return B.toText;
  };

  c.dummy = function (B) {
    return m.hoistFn_(B)(f.identity(f.categoryFn));
  };

  c.emailFormat = function (B) {
    return m.hoistFnE_(B)(function (w) {
      return k.lmap(g.bifunctorEither)(function (F) {
        return new x(F);
      })(l.validate(w));
    });
  };

  c.readNEStringEi = function (B) {
    B = n.fromString(d.trim(B));
    if (B instanceof b.Just) return new g.Right(B.value0);
    if (B instanceof b.Nothing) return new g.Left("Empty string when NonEmptyString expected.");
    throw Error("Failed pattern match at Metajelo.Validation (line 110, column 22 - line 112, column 63): " + [B.constructor.name]);
  };

  c.toTextFieldError = y;
  c.toTextString = a;
})(PS);

(function (a) {
  a.makeDOMParser = function () {
    return new DOMParser();
  };

  a.parseFromString = function (c) {
    return function (f) {
      return function (k) {
        return function () {
          return k.parseFromString(f, c);
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
      return function (k) {
        return function () {
          return k.getElementsByTagNameNS(c, f);
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
      return function (k) {
        return function () {
          return k.createElementNS(c, f);
        };
      };
    };
  };
})(PS["Web.DOM.Document"] = PS["Web.DOM.Document"] || {});

(function (a) {
  a._unsafeReadProtoTagged = function (c, f, k, g) {
    if ("undefined" !== typeof window) return k = window[k], null != k && g instanceof k ? f(g) : c;

    for (var b = g; null != b;) {
      b = Object.getPrototypeOf(b);
      var e = b.constructor.name;
      if (e === k) return f(g);
      if ("Object" === e) break;
    }

    return c;
  };
})(PS["Web.Internal.FFI"] = PS["Web.Internal.FFI"] || {});

(function (a) {
  a["Web.Internal.FFI"] = a["Web.Internal.FFI"] || {};
  var c = a["Web.Internal.FFI"],
      f = a["Data.Maybe"];

  a["Web.Internal.FFI"].unsafeReadProtoTagged = function (k) {
    return function (g) {
      return c._unsafeReadProtoTagged(f.Nothing.value, f.Just.create, k, g);
    };
  };
})(PS);

(function (a) {
  a["Web.DOM.Document"] = a["Web.DOM.Document"] || {};
  var c = a["Web.DOM.Document"],
      f = a["Web.DOM.Document"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Document");

  var e = function () {
    var d = k.map(b.functorEffect)(g.toMaybe);
    return function (n) {
      return d(f._documentElement(n));
    };
  }();

  c.fromNode = a;
  c.documentElement = e;

  c.getElementsByTagNameNS = function (d) {
    return f._getElementsByTagNameNS(g.toNullable(d));
  };

  c.createElementNS = function (d) {
    return f._createElementNS(g.toNullable(d));
  };

  c.getElementsByTagName = f.getElementsByTagName;
  c.createElement = f.createElement;
})(PS);

(function (a) {
  var c = function c(f) {
    return function (k) {
      return k[f];
    };
  };

  a._prefix = c("prefix");
  a.localName = c("localName");

  a.setAttribute = function (f) {
    return function (k) {
      return function (g) {
        return function () {
          g.setAttribute(f, k);
          return {};
        };
      };
    };
  };

  a._getAttribute = function (f) {
    return function (k) {
      return function () {
        return k.getAttribute(f);
      };
    };
  };
})(PS["Web.DOM.Element"] = PS["Web.DOM.Element"] || {});

(function (a) {
  a["Web.DOM.Element"] = a["Web.DOM.Element"] || {};
  var c = a["Web.DOM.Element"],
      f = a["Web.DOM.Element"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect,
      e = a["Unsafe.Coerce"].unsafeCoerce;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("Element");
  c.fromNode = a;
  c.toNode = e;

  c.prefix = function (d) {
    return g.toMaybe(f._prefix(d));
  };

  c.getAttribute = function (d) {
    var n = k.map(b.functorEffect)(g.toMaybe),
        m = f._getAttribute(d);

    return function (l) {
      return n(m(l));
    };
  };

  c.localName = f.localName;
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
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;

  c.item = function (e) {
    var d = k.map(b.functorEffect)(g.toMaybe),
        n = f._item(e);

    return function (m) {
      return d(n(m));
    };
  };

  c.toArray = f.toArray;
})(PS);

(function (a) {
  var c = function c(f) {
    return function (k) {
      return function () {
        return k[f];
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
    return function (k) {
      return function () {
        k.textContent = f;
        return {};
      };
    };
  };

  a.appendChild = function (f) {
    return function (k) {
      return function () {
        return k.appendChild(f);
      };
    };
  };
})(PS["Web.DOM.Node"] = PS["Web.DOM.Node"] || {});

(function (a) {
  a["Web.DOM.Node"] = a["Web.DOM.Node"] || {};
  var c = a["Web.DOM.Node"],
      f = a["Web.DOM.Node"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;

  a = function () {
    var e = k.map(b.functorEffect)(g.toMaybe);
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
      k = a["Control.Applicative"],
      g = a["Control.Bind"],
      b = a["Data.Array"],
      e = a["Data.Either"],
      d = a["Data.Functor"],
      n = a["Data.Maybe"],
      m = a.Effect,
      l = a["Web.DOM.Document"],
      r = a["Web.DOM.Element"],
      x = a["Web.DOM.HTMLCollection"],
      z = a["Web.DOM.Node"],
      t = function t(u) {
    return function (A) {
      if (u instanceof n.Nothing) return new e.Right(A);
      if (u instanceof n.Just) return new e.Left(u.value0);
      throw Error("Failed pattern match at Web.DOM.DOMParser (line 73, column 30 - line 75, column 21): " + [u.constructor.name]);
    };
  },
      q = function q(u) {
    return function () {
      var A = g.join(m.bindEffect)(d.map(m.functorEffect)(x.toArray)(l.getElementsByTagName("parsererror")(u)))();
      A = b.head(A);
      A = d.map(n.functorMaybe)(r.toNode)(A);
      if (A instanceof n.Nothing) A = k.pure(m.applicativeEffect)(n.Nothing.value);else if (A instanceof n.Just) A = d.map(m.functorEffect)(n.Just.create)(z.textContent(A.value0));else throw Error("Failed pattern match at Web.DOM.DOMParser (line 65, column 23 - line 67, column 45): " + [A.constructor.name]);
      return A();
    };
  };

  c.parseXMLFromString = function (u) {
    return function (A) {
      return function () {
        var y = f.parseFromString("application/xml")(u)(A)(),
            B = q(y)();
        return t(B)(y);
      };
    };
  };

  c.makeDOMParser = f.makeDOMParser;
})(PS);

(function (a) {
  a.evaluateInternal = function (c) {
    return function (f) {
      return function (k) {
        return function (g) {
          return function (b) {
            return function (e) {
              return function () {
                return e.evaluate(c, f, k, g, b);
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
      k = a["Data.Eq"],
      g = a["Data.Maybe"],
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
      d = new k.Eq(function (n) {
    return function (m) {
      return n === m;
    };
  });

  c.res2SnapType = function (n) {
    return k.eq(d)(n)(f.unordered_node_snapshot_type) ? new g.Just(b.value) : k.eq(d)(n)(f.ordered_node_snapshot_type) ? new g.Just(e.value) : g.Nothing.value;
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
      k = a["Control.Applicative"],
      g = a["Data.Array"],
      b = a["Data.Functor"],
      e = a["Data.Int"],
      d = a["Data.Maybe"],
      n = a["Data.Monoid"],
      m = a["Data.Natural"],
      l = a["Data.Nullable"],
      r = a["Data.Traversable"],
      x = a.Effect,
      z = a["Web.DOM.Document"],
      t = a["Web.DOM.Document.XPath.ResultType"],
      q = a["Web.DOM.Element"],
      u = a["Web.DOM.Node"],
      A = function () {
    var B = b.map(x.functorEffect)(function (w) {
      return m.intToNat(e.round(w));
    });
    return function (w) {
      return B(f.snapshotLengthInternal(w));
    };
  }(),
      y = function y(B) {
    return function (w) {
      return b.map(x.functorEffect)(l.toMaybe)(f.snapshotItemInternal(B)(e.toNumber(m.natToInt(w))));
    };
  };

  a = function () {
    var B = b.map(x.functorEffect)(l.toMaybe);
    return function (w) {
      return B(f.singleNodeValueInternal(w));
    };
  }();

  c.evaluate = function (B) {
    return function (w) {
      return function (F) {
        return function (E) {
          return function (v) {
            return function (C) {
              return f.evaluateInternal(B)(w)(l.toNullable(F))(E)(l.toNullable(v))(C);
            };
          };
        };
      };
    };
  };

  c.evaluateNumber = function (B) {
    return function (w) {
      return function (F) {
        return function (E) {
          return function (v) {
            return function () {
              var C = f.evaluateInternal(B)(w)(l.toNullable(F))(t.number_type)(l.toNullable(E))(v)();
              return f.numberValue(C)();
            };
          };
        };
      };
    };
  };

  c.evaluateString = function (B) {
    return function (w) {
      return function (F) {
        return function (E) {
          return function (v) {
            return function () {
              var C = f.evaluateInternal(B)(w)(l.toNullable(F))(t.string_type)(l.toNullable(E))(v)();
              return f.stringValue(C)();
            };
          };
        };
      };
    };
  };

  c.evaluateBoolean = function (B) {
    return function (w) {
      return function (F) {
        return function (E) {
          return function (v) {
            return function () {
              var C = f.evaluateInternal(B)(w)(l.toNullable(F))(t.boolean_type)(l.toNullable(E))(v)();
              return f.booleanValue(C)();
            };
          };
        };
      };
    };
  };

  c.singleNodeValue = a;

  c.snapshot = function (B) {
    var w = t.res2SnapType(f.resultType(B)),
        F = y(B);
    w = b.map(d.functorMaybe)(function (E) {
      return function () {
        var v = A(B)();
        v = m.natToInt(v);
        v = b.map(b.functorArray)(m.intToNat)(g.range(0)(v - 1 | 0));
        v = r.sequence(r.traversableArray)(x.applicativeEffect)(b.map(b.functorArray)(F)(v))();
        return g.catMaybes(v);
      };
    })(w);
    if (w instanceof d.Nothing) return k.pure(x.applicativeEffect)(n.mempty(n.monoidArray));
    if (w instanceof d.Just) return w.value0;
    throw Error("Failed pattern match at Web.DOM.Document.XPath (line 117, column 18 - line 119, column 24): " + [w.constructor.name]);
  };

  c.lookupNamespaceURI = function (B) {
    return function (w) {
      return l.toMaybe(f.lookupNamespaceURIInternal(B)(w));
    };
  };

  c.defaultNSResolver = function (B) {
    return function (w) {
      var F = function F(E) {
        return function () {
          var v = z.documentElement(E)();
          if (v instanceof d.Nothing) return B;
          if (v instanceof d.Just) return q.toNode(v.value0);
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 170, column 14 - line 172, column 40): " + [v.constructor.name]);
        };
      };

      return function () {
        var E = u.ownerDocument(B)(),
            v = function () {
          if (E instanceof d.Nothing) {
            var C = z.fromNode(B);
            if (C instanceof d.Nothing) return B;
            if (C instanceof d.Just) return F(C.value0)();
            throw Error("Failed pattern match at Web.DOM.Document.XPath (line 161, column 16 - line 163, column 57): " + [C.constructor.name]);
          }

          if (E instanceof d.Just) return F(E.value0)();
          throw Error("Failed pattern match at Web.DOM.Document.XPath (line 160, column 19 - line 164, column 35): " + [E.constructor.name]);
        }();

        return f.createNSResolver(v)(w);
      };
    };
  };

  c.customNSResolver = f.customNSResolver;
})(PS);

(function (a) {
  a["Metajelo.XPaths"] = a["Metajelo.XPaths"] || {};
  var c = a["Metajelo.XPaths"],
      f = a["Control.Applicative"],
      k = a["Control.Bind"],
      g = a["Data.Array.NonEmpty"],
      b = a["Data.Array.NonEmpty.Internal"],
      e = a["Data.Either"],
      d = a["Data.Foldable"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      l = a["Data.Traversable"],
      r = a["Data.XPath"],
      x = a.Effect,
      z = a["Effect.Exception"],
      t = a["Web.DOM.DOMParser"],
      q = a["Web.DOM.Document"],
      u = a["Web.DOM.Document.XPath"],
      A = a["Web.DOM.Document.XPath.ResultType"],
      y = a["Web.DOM.Element"],
      B = a["Web.DOM.HTMLCollection"],
      w = r.pathAppendNSx(r.stringXPath)(r.root(r.stringXPath))("record");
  a = r.pathAppendNSx(r.stringXPath)(w)("relatedIdentifier");
  var F = r.pathAppendNSx(r.stringXPath)(w)("supplementaryProducts");
  F = r.pathAppendNSx(r.stringXPath)(F)("supplementaryProduct");

  var E = function E(K) {
    return function (O) {
      return {
        any: function any(p) {
          return function (Q) {
            return function (I) {
              return u.evaluate(Q)(p)(O)(I)(m.Nothing.value)(K);
            };
          };
        },
        num: function num(p) {
          return function (Q) {
            return u.evaluateNumber(Q)(p)(O)(m.Nothing.value)(K);
          };
        },
        str: function str(p) {
          return function (Q) {
            return u.evaluateString(Q)(p)(O)(m.Nothing.value)(K);
          };
        },
        bool: function bool(p) {
          return function (Q) {
            return u.evaluateBoolean(Q)(p)(O)(m.Nothing.value)(K);
          };
        },
        nodeMay: function nodeMay(p) {
          return function (Q) {
            return k.bind(x.bindEffect)(u.evaluate(Q)(p)(O)(A.any_unordered_node_type)(m.Nothing.value)(K))(u.singleNodeValue);
          };
        }
      };
    };
  },
      v = g["cons'"]("http://ourdomain.cornell.edu/reuse/v.01")([]),
      C = function C(K) {
    var O = function O(p) {
      return function () {
        var Q = q.getElementsByTagNameNS(new m.Just(p))("record")(K)();
        return B.item(0)(Q)();
      };
    };

    return function () {
      var p = q.getElementsByTagName("record")(K)();
      p = B.item(0)(p)();
      if (p instanceof m.Nothing) p = l.sequence(b.traversableNonEmptyArray)(x.applicativeEffect)(n.map(b.functorNonEmptyArray)(O)(v))(), p = k.join(m.bindMaybe)(d.find(b.foldableNonEmptyArray)(m.isJust)(p));else if (p instanceof m.Just) p = new m.Just(p.value0);else throw Error("Failed pattern match at Metajelo.XPaths (line 275, column 16 - line 279, column 38): " + [p.constructor.name]);
      return n.map(m.functorMaybe)(y.toNode)(p);
    };
  };

  g = r.pathAppendNSx(r.stringXPath)(w)("lastModified");

  var L = r.pathAppendNSx(r.stringXPath)(w)("identifier"),
      G = r.pathAppend(r.stringXPath)(L)(r.at(r.stringXPath)("identifierType")),
      X = function X(K) {
    var O = function O(p) {
      return m.fromMaybe("http://ourdomain.cornell.edu/reuse/v.01")(p);
    };

    if (K instanceof m.Nothing) return f.pure(x.applicativeEffect)("http://ourdomain.cornell.edu/reuse/v.01");
    if (K instanceof m.Just) return n.map(x.functorEffect)(O)(y.getAttribute("xmlns")(K.value0));
    throw Error("Failed pattern match at Metajelo.XPaths (line 183, column 3 - line 185, column 59): " + [K.constructor.name]);
  },
      M = function M(K) {
    return function (O) {
      var p = function p(Q) {
        return function (I) {
          return function (R) {
            R = u.lookupNamespaceURI(Q)(R);
            if (R instanceof m.Nothing) return I;
            if (R instanceof m.Just) return R.value0;
            throw Error("Failed pattern match at Metajelo.XPaths (line 200, column 39 - line 202, column 20): " + [R.constructor.name]);
          };
        };
      };

      return function () {
        var Q = u.defaultNSResolver(K)(O)(),
            I = y.fromNode(K);
        I = X(I)();
        return u.customNSResolver(p(Q)(I));
      };
    };
  };

  r = r.pathAppendNSx(r.stringXPath)(w)("date");
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
  c.idTypeRootAP = G;
  c.idRootP = L;
  c.dateRootP = r;
  c.lastModRootP = g;
  c.relIdRootP = a;
  c.sProdRootP = F;

  c.getDefaultParseEnv = function (K) {
    return function () {
      var O = t.makeDOMParser();
      O = t.parseXMLFromString(K)(O)();
      if (O instanceof e.Left) O = z["throw"]("XML parsing error: " + O.value0)();else if (O instanceof e.Right) O = O.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 243, column 13 - line 245, column 26): " + [O.constructor.name]);
      var p = C(O)();
      if (p instanceof m.Nothing) p = z["throw"]("Could not find <record> node!")();else if (p instanceof m.Just) p = p.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 247, column 14 - line 249, column 23): " + [p.constructor.name]);
      var Q = y.fromNode(p);
      if (Q instanceof m.Nothing) Q = z["throw"]("<record> node could not be cast to an element!")();else if (Q instanceof m.Just) Q = Q.value0;else throw Error("Failed pattern match at Metajelo.XPaths (line 250, column 14 - line 252, column 23): " + [Q.constructor.name]);
      var I = X(new m.Just(Q))(),
          R = M(p)(O)();
      R = E(O)(new m.Just(R));
      return {
        doc: O,
        ns: I,
        recNode: p,
        recElem: Q,
        xeval: R,
        xevalRoot: {
          any: R.any(p),
          num: R.num(p),
          str: R.str(p),
          bool: R.bool(p),
          nodeMay: R.nodeMay(p)
        }
      };
    };
  };

  c.unsafeSingleNodeValue = function (K) {
    return function (O) {
      return function (p) {
        return function () {
          var Q = K.xeval.nodeMay(O)(p)();
          if (Q instanceof m.Just) return Q.value0;
          if (Q instanceof m.Nothing) return z["throw"]("Couldn't find required node at: " + p)();
          throw Error("Failed pattern match at Metajelo.XPaths (line 292, column 3 - line 294, column 40): " + [Q.constructor.name]);
        };
      };
    };
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
      k = a["Control.Apply"],
      g = a["Control.Bind"],
      b = a["Data.Array"],
      e = a["Data.Array.NonEmpty"],
      d = a["Data.Either"],
      n = a["Data.Functor"],
      m = a["Data.Maybe"],
      l = a["Data.String.Common"],
      r = a["Data.String.NonEmpty.Internal"],
      x = a["Data.String.Utils"],
      z = a["Data.Traversable"],
      t = a["Data.XPath"],
      q = a.Effect,
      u = a["Effect.Exception"],
      A = a["Metajelo.Types"],
      y = a["Metajelo.XPaths"],
      B = a["Text.Email.Validate"],
      w = a["Text.URL.Validate"],
      F = a["Web.DOM.Document.XPath"],
      E = a["Web.DOM.Document.XPath.ResultType"],
      v = a["Web.DOM.Element"],
      C = a["Web.DOM.Node"],
      L = a["Web.DOM.NodeList"],
      G = function G(J) {
    if (J instanceof d.Right) return f.pure(q.applicativeEffect)(J.value0);
    if (J instanceof d.Left) return u["throw"](J.value0);
    throw Error("Failed pattern match at Metajelo.XPaths.Read (line 444, column 19 - line 446, column 24): " + [J.constructor.name]);
  },
      X = function X(J) {
    return "Audiovisual" === J ? f.pure(d.applicativeEither)(A.Audiovisual.value) : "Dataset" === J ? f.pure(d.applicativeEither)(A.Dataset.value) : "Event" === J ? f.pure(d.applicativeEither)(A.Event.value) : "Image" === J ? f.pure(d.applicativeEither)(A.Image.value) : "InteractiveResource" === J ? f.pure(d.applicativeEither)(A.InteractiveResource.value) : "Model" === J ? f.pure(d.applicativeEither)(A.Model.value) : "PhysicalObject" === J ? f.pure(d.applicativeEither)(A.PhysicalObject.value) : "ResourceCollection" === J ? f.pure(d.applicativeEither)(A.ResourceCollection.value) : "Service" === J ? f.pure(d.applicativeEither)(A.Service.value) : "Software" === J ? f.pure(d.applicativeEither)(A.Software.value) : "Sound" === J ? f.pure(d.applicativeEither)(A.Sound.value) : "Text" === J ? f.pure(d.applicativeEither)(A.Text.value) : "Workflow" === J ? f.pure(d.applicativeEither)(A.Workflow.value) : "Other" === J ? f.pure(d.applicativeEither)(A.Other.value) : d.Left.create("Unknown ResourceTypeGeneral: '" + (J + "'"));
  },
      M = function M(J) {
    return function (na) {
      return function () {
        var H = y.unsafeSingleNodeValue(J)(na)(t.xx(t.stringXPath)(y.resTypeP))(),
            Z = J.xeval.str(H)(".")();
        H = J.xeval.str(H)(t.at(t.stringXPath)(y.resTypeGenAT))();
        H = G(X(H))();
        return {
          description: Z,
          generalType: H
        };
      };
    };
  },
      K = function K(J) {
    return "IsCitedBy" === J ? f.pure(d.applicativeEither)(A.IsCitedBy.value) : "Cites" === J ? f.pure(d.applicativeEither)(A.Cites.value) : "IsSupplementTo" === J ? f.pure(d.applicativeEither)(A.IsSupplementTo.value) : "IsSupplementedBy" === J ? f.pure(d.applicativeEither)(A.IsSupplementedBy.value) : "IsContinuedBy" === J ? f.pure(d.applicativeEither)(A.IsContinuedBy.value) : "Continues" === J ? f.pure(d.applicativeEither)(A.Continues.value) : "IsNewVersionOf" === J ? f.pure(d.applicativeEither)(A.IsNewVersionOf.value) : "IsPreviousVersionOf" === J ? f.pure(d.applicativeEither)(A.IsPreviousVersionOf.value) : "IsPartOf" === J ? f.pure(d.applicativeEither)(A.IsPartOf.value) : "HasPart" === J ? f.pure(d.applicativeEither)(A.HasPart.value) : "IsReferencedBy" === J ? f.pure(d.applicativeEither)(A.IsReferencedBy.value) : "References" === J ? f.pure(d.applicativeEither)(A.References.value) : "IsDocumentedBy" === J ? f.pure(d.applicativeEither)(A.IsDocumentedBy.value) : "Documents" === J ? f.pure(d.applicativeEither)(A.Documents.value) : "IsCompiledBy" === J ? f.pure(d.applicativeEither)(A.IsCompiledBy.value) : "Compiles" === J ? f.pure(d.applicativeEither)(A.Compiles.value) : "IsVariantFormOf" === J ? f.pure(d.applicativeEither)(A.IsVariantFormOf.value) : "IsOriginalFormOf" === J ? f.pure(d.applicativeEither)(A.IsOriginalFormOf.value) : "IsIdenticalTo" === J ? f.pure(d.applicativeEither)(A.IsIdenticalTo.value) : "HasMetadata" === J ? f.pure(d.applicativeEither)(A.HasMetadata.value) : "IsMetadataFor" === J ? f.pure(d.applicativeEither)(A.IsMetadataFor.value) : "Reviews" === J ? f.pure(d.applicativeEither)(A.Reviews.value) : "IsReviewedBy" === J ? f.pure(d.applicativeEither)(A.IsReviewedBy.value) : "IsDerivedFrom" === J ? f.pure(d.applicativeEither)(A.IsDerivedFrom.value) : "IsSourceOf" === J ? f.pure(d.applicativeEither)(A.IsSourceOf.value) : d.Left.create("Unknown RelationType: '" + (J + "'"));
  },
      O = function O(J) {
    return "Access" === J ? f.pure(d.applicativeEither)(new m.Just(A.Access.value)) : "Collection" === J ? f.pure(d.applicativeEither)(new m.Just(A.Collection.value)) : "Data" === J ? f.pure(d.applicativeEither)(new m.Just(A.Data.value)) : "Metadata" === J ? f.pure(d.applicativeEither)(new m.Just(A.Metadata.value)) : "Preservation" === J ? f.pure(d.applicativeEither)(new m.Just(A.Preservation.value)) : "Submission" === J ? f.pure(d.applicativeEither)(new m.Just(A.Submission.value)) : "Quality" === J ? f.pure(d.applicativeEither)(new m.Just(A.Quality.value)) : "Terms of Use" === J ? f.pure(d.applicativeEither)(new m.Just(A.TermsOfUse.value)) : "" === J ? f.pure(d.applicativeEither)(m.Nothing.value) : d.Left.create("Unknown PolicyType: '" + (J + "'"));
  },
      p = function p(J) {
    return function (na) {
      na = r.fromString(l.trim(na));
      if (na instanceof m.Nothing) return d.Left.create("Empty string found for " + J);
      if (na instanceof m.Just) return new d.Right(na.value0);
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 57, column 3 - line 59, column 26): " + [na.constructor.name]);
    };
  },
      Q = function Q(J) {
    return function () {
      var na = J.xevalRoot.str(y.lastModRootP)();
      return G(p("ModDate")(na))();
    };
  },
      I = function I(J) {
    return "commercial" === J ? f.pure(d.applicativeEither)(A.Commercial.value) : "non-profit" === J ? f.pure(d.applicativeEither)(A.NonProfit.value) : "governmental" === J ? f.pure(d.applicativeEither)(A.Governmental.value) : d.Left.create("Unknown InstitutionType: '" + (J + "'"));
  },
      R = function R(J) {
    return "dataCustodian" === J ? f.pure(d.applicativeEither)(new m.Just(A.DataCustodian.value)) : "" === J ? f.pure(d.applicativeEither)(m.Nothing.value) : d.Left.create("Unknown InstitutionContactType: '" + (J + "'"));
  },
      fa = function fa(J) {
    return "ARK" === J ? f.pure(d.applicativeEither)(A.ARK.value) : "arXiv" === J ? f.pure(d.applicativeEither)(A.ArXiv.value) : "bibcode" === J ? f.pure(d.applicativeEither)(A.Bibcode.value) : "DOI" === J ? f.pure(d.applicativeEither)(A.DOI.value) : "EAN13" === J ? f.pure(d.applicativeEither)(A.EAN13.value) : "EISSN" === J ? f.pure(d.applicativeEither)(A.EISSN.value) : "Handle" === J ? f.pure(d.applicativeEither)(A.Handle.value) : "IGSN" === J ? f.pure(d.applicativeEither)(A.IGSN.value) : "ISBN" === J ? f.pure(d.applicativeEither)(A.ISBN.value) : "ISSN" === J ? f.pure(d.applicativeEither)(A.ISSN.value) : "ISTC" === J ? f.pure(d.applicativeEither)(A.ISTC.value) : "LISSN" === J ? f.pure(d.applicativeEither)(A.LISSN.value) : "LSID" === J ? f.pure(d.applicativeEither)(A.LSID.value) : "PMID" === J ? f.pure(d.applicativeEither)(A.PMID.value) : "PURL" === J ? f.pure(d.applicativeEither)(A.PURL.value) : "UPC" === J ? f.pure(d.applicativeEither)(A.UPC.value) : "URL" === J ? f.pure(d.applicativeEither)(A.URL.value) : "URN" === J ? f.pure(d.applicativeEither)(A.URN.value) : d.Left.create("Unknown IdentifierType: '" + (J + "'"));
  },
      T = function T(J) {
    return function (na) {
      var H = function H(ka) {
        return function () {
          var ia = J.xeval.str(ka)(t.at(t.stringXPath)(y.idTypeAT))();
          return G(fa(ia))();
        };
      },
          Z = function Z(ka) {
        return function () {
          var ia = J.xeval.str(ka)(".")();
          return G(p("InstitutionID")(ia))();
        };
      };

      return function () {
        var ka = y.unsafeSingleNodeValue(J)(na)(t.xx(t.stringXPath)(y.instIdP))(),
            ia = Z(ka)();
        ka = H(ka)();
        return {
          id: ia,
          idType: ka
        };
      };
    };
  },
      V = function V(J) {
    var na = function na(ia) {
      return function () {
        var la = J.xeval.str(ia)(t.at(t.stringXPath)(y.relTypeAT))();
        return G(K(la))();
      };
    },
        H = function H(ia) {
      return function () {
        var la = J.xeval.str(ia)(t.at(t.stringXPath)(y.relIdTypeAT))();
        return G(fa(la))();
      };
    },
        Z = function Z(ia) {
      return function () {
        var la = J.xeval.str(ia)(".")();
        return G(p("RelatedIdentifier")(la))();
      };
    },
        ka = function ka(ia) {
      return function () {
        var la = Z(ia)(),
            qa = H(ia)(),
            sa = na(ia)();
        return {
          id: la,
          idType: qa,
          relType: sa
        };
      };
    };

    return function () {
      var ia = J.xevalRoot.any(y.relIdRootP)(E.ordered_node_snapshot_type)();
      ia = F.snapshot(ia)();
      ia = z.sequence(z.traversableArray)(q.applicativeEffect)(n.map(n.functorArray)(ka)(ia))();
      ia = e.fromArray(ia);
      if (ia instanceof m.Just) return ia.value0;
      if (ia instanceof m.Nothing) return u["throw"]("At least one relatedIdentifier is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 107, column 3 - line 109, column 67): " + [ia.constructor.name]);
    };
  },
      ca = function ca(J) {
    return function (na) {
      var H = function H(ia) {
        return function () {
          var la = J.xeval.str(ia)(t.at(t.stringXPath)(y.resIdTypeAT))();
          return G(fa(la))();
        };
      },
          Z = function Z(ia) {
        return function () {
          var la = J.xeval.str(ia)(".")();
          return G(p("ResourceID")(la))();
        };
      },
          ka = function ka(ia) {
        return function (la) {
          return z.sequence(z.traversableMaybe)(q.applicativeEffect)(g.bind(m.bindMaybe)(ia)(function (qa) {
            return g.bind(m.bindMaybe)(la)(function (sa) {
              return f.pure(m.applicativeMaybe)(k.lift2(q.applyEffect)(function (xa) {
                return function (Ga) {
                  return {
                    id: xa,
                    idType: Ga
                  };
                };
              })(qa)(sa));
            });
          }));
        };
      };

      return function () {
        var ia = J.xeval.nodeMay(na)(t.xx(t.stringXPath)(y.resIdP))(),
            la = n.map(m.functorMaybe)(Z)(ia);
        ia = n.map(m.functorMaybe)(H)(ia);
        return ka(la)(ia)();
      };
    };
  },
      ha = function ha(J) {
    return function () {
      var na = J.xevalRoot.str(y.idRootP)();
      na = G(p("Identifier")(na))();
      var H = J.xevalRoot.str(y.idTypeRootAP)();
      H = G(fa(H))();
      return {
        id: na,
        idType: H
      };
    };
  },
      da = function da(J) {
    return function (na) {
      var H = function H(Z) {
        return function () {
          var ka = J.xeval.str(Z)(".")();
          return G(p("Format")(ka))();
        };
      };

      return function () {
        var Z = J.xeval.any(na)(t.pathAppendNSx(t.stringXPath)(t.xx(t.stringXPath)(y.formatCP))(y.formatP))(E.ordered_node_snapshot_type)();
        Z = F.snapshot(Z)();
        return z.sequence(z.traversableArray)(q.applicativeEffect)(n.map(n.functorArray)(H)(Z))();
      };
    };
  },
      Y = function Y(J) {
    return function () {
      var na = J.xevalRoot.str(y.dateRootP)();
      return G(p("Date")(na))();
    };
  },
      aa = function aa(J) {
    return "0" === J ? f.pure(d.applicativeEither)(!1) : "1" === J ? f.pure(d.applicativeEither)(!0) : "false" === J ? f.pure(d.applicativeEither)(!1) : "true" === J ? f.pure(d.applicativeEither)(!0) : d.Left.create("Invalid xs:boolean value: '" + (J + "'"));
  },
      ja = function ja(J) {
    return "" === J ? f.pure(d.applicativeEither)(m.Nothing.value) : n.map(d.functorEither)(m.Just.create)(aa(J));
  },
      va = function va(J) {
    return function (na) {
      var H = t.pathAppendNSx(t.stringXPath)(t.xx(t.stringXPath)(y.instPolicyCP))(y.instPolicyP),
          Z = function Z(ka) {
        return function () {
          var ia = C.childNodes(ka)();
          ia = L.toArray(ia)();
          ia = b.head(b.filter(function (Ba) {
            return !x.startsWith("#")(C.nodeName(Ba));
          })(ia));
          if (ia instanceof m.Just) var la = ia.value0;else if (ia instanceof m.Nothing) la = u["throw"]("Couldn't find child node of " + C.nodeName(ka))();else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 390, column 30 - line 392, column 80): " + [ia.constructor.name]);
          var qa = J.xeval.str(la)(".")(),
              sa = G(p("Policy")(qa))();

          ia = function () {
            var Ba = n.map(m.functorMaybe)(v.localName)(v.fromNode(la));
            if (Ba instanceof m.Just && Ba.value0 === y.freeTextPolicyP) return new A.FreeTextPolicy(sa);

            if (Ba instanceof m.Just && Ba.value0 === y.refPolicyP) {
              Ba = w.parsePublicURL(qa);
              if (Ba instanceof d.Left) return u["throw"]("In refPolicy URL parsing: " + Ba.value0)();
              if (Ba instanceof d.Right) return new A.RefPolicy(Ba.value0);
              throw Error("Failed pattern match at Metajelo.XPaths.Read (line 397, column 37 - line 399, column 45): " + [Ba.constructor.name]);
            }

            if (Ba instanceof m.Just) return u["throw"]("invalid element '" + (Ba.value0 + "' as child of institutionPolicy"))();
            if (Ba instanceof m.Nothing) return u["throw"]("unable to convert policy child Node with name '" + (C.nodeName(la) + "' to an Element"))();
            throw Error("Failed pattern match at Metajelo.XPaths.Read (line 395, column 17 - line 403, column 56): " + [Ba.constructor.name]);
          }();

          var xa = J.xeval.str(ka)(t.at(t.stringXPath)(y.polTypeAT))();
          xa = G(O(xa))();
          var Ga = J.xeval.str(ka)(t.at(t.stringXPath)(y.appliesToProdAT))();
          Ga = G(ja(Ga))();
          return {
            policy: ia,
            policyType: xa,
            appliesToProduct: Ga
          };
        };
      };

      return function () {
        var ka = J.xeval.any(na)(H)(E.ordered_node_snapshot_type)();
        ka = F.snapshot(ka)();
        ka = z.sequence(z.traversableArray)(q.applicativeEffect)(n.map(n.functorArray)(Z)(ka))();
        ka = e.fromArray(ka);
        if (ka instanceof m.Just) return ka.value0;
        if (ka instanceof m.Nothing) return u["throw"]("At least one institutionPolicy is required!")();
        throw Error("Failed pattern match at Metajelo.XPaths.Read (line 377, column 3 - line 379, column 67): " + [ka.constructor.name]);
      };
    };
  },
      N = function N(J) {
    return function (na) {
      var H = function H(ka) {
        return function () {
          var ia = J.xeval.str(ka)(t.xx(t.stringXPath)(y.pubYearP))();
          return G(p("PubYear")(ia))();
        };
      },
          Z = t.xx(t.stringXPath)(y.basicMetaP);

      return function () {
        var ka = y.unsafeSingleNodeValue(J)(na)(Z)(),
            ia = J.xeval.str(ka)(t.xx(t.stringXPath)(y.titleP))(),
            la = J.xeval.str(ka)(t.xx(t.stringXPath)(y.creatorP))();
        ia = G(p("Title")(ia))();
        la = G(p("Creator")(la))();
        ka = H(ka)();
        return {
          title: ia,
          creator: la,
          publicationYear: ka
        };
      };
    };
  },
      W = function W(J) {
    return function (na) {
      return function (H) {
        return function () {
          var Z = J.xeval.str(H)(na)();
          Z = w.parsePublicURL(Z);
          if (Z instanceof d.Left) return u["throw"](Z.value0)();
          if (Z instanceof d.Right) return Z.value0;
          throw Error("Failed pattern match at Metajelo.XPaths.Read (line 438, column 3 - line 440, column 26): " + [Z.constructor.name]);
        };
      };
    };
  },
      D = function D(J) {
    return function (na) {
      var H = function H(la) {
        return function () {
          var qa = la();
          return G(p("SuperOrg")(qa))();
        };
      },
          Z = function Z(la) {
        return function () {
          var qa = J.xeval.nodeMay(la)(t.xx(t.stringXPath)(y.superOrgNameP))();
          return z.sequence(z.traversableMaybe)(q.applicativeEffect)(n.map(m.functorMaybe)(function (sa) {
            return H(J.xeval.str(sa)("."));
          })(qa))();
        };
      },
          ka = function ka(la) {
        return function () {
          var qa = y.unsafeSingleNodeValue(J)(la)(t.xx(t.stringXPath)(y.instSustainP))(),
              sa = W(J)(t.xx(t.stringXPath)(y.missionUrlP))(qa)();
          qa = W(J)(t.xx(t.stringXPath)(y.fundingUrlP))(qa)();
          return {
            missionStatementURL: sa,
            fundingStatementURL: qa
          };
        };
      },
          ia = function ia(la) {
        var qa = t.xx(t.stringXPath)(y.instContactP);
        return function () {
          var sa = y.unsafeSingleNodeValue(J)(la)(qa)(),
              xa = J.xeval.str(sa)(t.at(t.stringXPath)(y.instContactTypeAT))();
          xa = G(R(xa))();
          sa = J.xeval.str(sa)(".")();
          sa = B.validate(sa);
          if (sa instanceof d.Left) sa = u["throw"]("Error in validating email address for InstitutionContact: " + sa.value0)();else if (sa instanceof d.Right) sa = sa.value0;else throw Error("Failed pattern match at Metajelo.XPaths.Read (line 341, column 23 - line 345, column 28): " + [sa.constructor.name]);
          return {
            emailAddress: sa,
            contactType: xa
          };
        };
      };

      return function () {
        var la = y.unsafeSingleNodeValue(J)(na)(t.xx(t.stringXPath)(y.locP))(),
            qa = T(J)(la)(),
            sa = g.join(q.bindEffect)(n.mapFlipped(q.functorEffect)(J.xeval.str(la)(t.xx(t.stringXPath)(y.instNameP)))(function (S) {
          return G(p("Institution Name")(S));
        }))(),
            xa = J.xeval.str(la)(t.xx(t.stringXPath)(y.instTypeP))();
        xa = G(I(xa))();
        var Ga = Z(la)(),
            Ba = ia(la)(),
            Ja = ka(la)(),
            Ka = va(J)(la)();
        la = J.xeval.str(la)(t.xx(t.stringXPath)(y.versioningP))();
        la = G(aa(la))();
        return {
          institutionID: qa,
          institutionName: sa,
          institutionType: xa,
          superOrganizationName: Ga,
          institutionContact: Ba,
          institutionSustainability: Ja,
          institutionPolicies: Ka,
          versioning: la
        };
      };
    };
  },
      U = function U(J) {
    return function (na) {
      var H = function H(ka) {
        return function () {
          var ia = J.xeval.str(ka)(t.at(t.stringXPath)(y.relTypeAT))();
          return G(K(ia))();
        };
      },
          Z = function Z(ka) {
        return function (ia) {
          return z.sequence(z.traversableMaybe)(q.applicativeEffect)(g.bind(m.bindMaybe)(ka)(function (la) {
            return g.bind(m.bindMaybe)(ia)(function (qa) {
              return f.pure(m.applicativeMaybe)(k.lift2(q.applyEffect)(function (sa) {
                return function (xa) {
                  return {
                    url: sa,
                    relationType: xa
                  };
                };
              })(la)(qa));
            });
          }));
        };
      };

      return function () {
        var ka = J.xeval.nodeMay(na)(t.xx(t.stringXPath)(y.resMetaSourceP))(),
            ia = n.map(m.functorMaybe)(W(J)("."))(ka);
        ka = n.map(m.functorMaybe)(H)(ka);
        return Z(ia)(ka)();
      };
    };
  },
      P = function P(J) {
    var na = function na(H) {
      return function () {
        var Z = N(J)(H)(),
            ka = ca(J)(H)(),
            ia = M(J)(H)(),
            la = da(J)(H)(),
            qa = U(J)(H)(),
            sa = D(J)(H)();
        return {
          basicMetadata: Z,
          resourceID: ka,
          resourceType: ia,
          format: la,
          resourceMetadataSource: qa,
          location: sa
        };
      };
    };

    return function () {
      var H = J.xevalRoot.any(y.sProdRootP)(E.ordered_node_snapshot_type)();
      H = F.snapshot(H)();
      H = z.sequence(z.traversableArray)(q.applicativeEffect)(n.map(n.functorArray)(na)(H))();
      H = e.fromArray(H);
      if (H instanceof m.Just) return H.value0;
      if (H instanceof m.Nothing) return u["throw"]("At least one SupplementaryProduct is required!")();
      throw Error("Failed pattern match at Metajelo.XPaths.Read (line 165, column 3 - line 167, column 70): " + [H.constructor.name]);
    };
  };

  c.readRecord = function (J) {
    return function () {
      var na = ha(J)(),
          H = Y(J)(),
          Z = Q(J)(),
          ka = V(J)(),
          ia = P(J)();
      return {
        identifier: na,
        date: H,
        lastModified: Z,
        relatedIdentifiers: ka,
        supplementaryProducts: ia
      };
    };
  };

  c.readIdentifierType = fa;
  c.readRelationType = K;
  c.readResourceTypeGeneral = X;
  c.readInstitutionType = I;
  c.readInstitutionContactType = R;
  c.readPolicyType = O;
  c.readBoolean = aa;
  c.rightOrThrow = G;
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
      k = a["Data.Symbol"];

  a = function (g) {
    return function (b) {
      return function (e) {
        return function (d) {
          return f.unsafeGet(k.reflectSymbol(b)(e))(d);
        };
      };
    };
  }()(new k.IsSymbol(function () {
    return "target";
  }))(k.SProxy.value);

  c.target = a;
})(PS);

(function (a) {
  a["Metajelo.FormUtil"] = a["Metajelo.FormUtil"] || {};

  var c = a["Metajelo.FormUtil"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      n = a["Control.Applicative"],
      m = a["Control.Apply"],
      l = a["Control.Bind"],
      r = a["Control.Cofree"],
      x = a["Data.Array"],
      z = a["Data.Array.NonEmpty"],
      t = a["Data.Bounded"],
      q = a["Data.Date"],
      u = a["Data.Date.Component"],
      A = a["Data.DateTime"],
      y = a["Data.Either"],
      B = a["Data.Enum"],
      w = a["Data.Eq"],
      F = a["Data.Foldable"],
      E = a["Data.Formatter.DateTime"],
      v = a["Data.Functor"],
      C = a["Data.Generic.Rep"],
      L = a["Data.Generic.Rep.Bounded"],
      G = a["Data.Generic.Rep.Enum"],
      X = a["Data.Generic.Rep.Eq"],
      M = a["Data.Generic.Rep.Ord"],
      K = a["Data.Generic.Rep.Show"],
      O = a["Data.Maybe"],
      p = a["Data.Monoid"],
      Q = a["Data.Ord"],
      I = a["Data.Profunctor.Strong"],
      R = a["Data.Semigroup"],
      fa = a["Data.Show"],
      T = a["Data.String.Common"],
      V = a["Data.String.NonEmpty.Internal"],
      ca = a["Data.Symbol"],
      ha = a["Data.Time"],
      da = a["Data.Time.Component"],
      Y = a["Data.Traversable"],
      aa = a["Data.Tuple"],
      ja = a["Data.Unfoldable1"],
      va = a.Effect,
      N = a["Formless.Internal.Transform"],
      W = a["Formless.Query"],
      D = a["Formless.Retrieve"],
      U = a["Formless.Types.Query"],
      P = a["Metajelo.Types"],
      J = a["Metajelo.Validation"],
      na = a["Metajelo.XPaths.Read"],
      H = a["React.SyntheticEvent"],
      Z = a["Text.URL.Validate"],
      ka = a["Web.DOM.Element"],
      ia = function () {
    function ba() {}

    ba.value = new ba();
    return ba;
  }(),
      la = function () {
    function ba() {}

    ba.value = new ba();
    return ba;
  }(),
      qa = function () {
    function ba(oa) {
      this.value0 = oa;
    }

    ba.create = function (oa) {
      return new ba(oa);
    };

    return ba;
  }(),
      sa = function () {
    function ba(oa) {
      this.value0 = oa;
    }

    ba.create = function (oa) {
      return new ba(oa);
    };

    return ba;
  }(),
      xa = function xa(ba, oa, ya) {
    this.fromOptionValue = ba;
    this.toOptionLabel = oa;
    this.toOptionValue = ya;
  },
      Ga = function Ga(ba) {
    if (ba instanceof qa || ba instanceof sa) return ba.value0;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 286, column 1 - line 286, column 34): " + [ba.constructor.name]);
  },
      Ba = function Ba(ba) {
    return e.input(k.widgetLiftWidget)([d.value(ba), v.map(g.functorProps)(d.unsafeTargetValue)(d.onChange)]);
  },
      Ja = function Ja(ba) {
    return l.bind(r.bindCofree(b.widgetAlternative(p.monoidArray)))(ba)(function (oa) {
      return n.pure(r.applicativeCofree(b.widgetAlternative(p.monoidArray)))(V.fromString(T.trim(oa)));
    });
  },
      Ka = function Ka(ba) {
    return function (oa) {
      return oa < ba ? [] : x.range(ba)(oa);
    };
  },
      S = function S(ba) {
    return "FreeTextPolicy" === ba ? n.pure(y.applicativeEither)(ia.value) : "RefPolicy" === ba ? n.pure(y.applicativeEither)(la.value) : y.Left.create("Unknown Policy: '" + (ba + "'"));
  },
      ua = function ua(ba) {
    return function (oa) {
      return F.fold(F.foldableMaybe)(p.monoidString)(v.map(O.functorMaybe)(fa.show(ba))(oa));
    };
  };

  a = new xa(function (ba) {
    return O.fromJust()(y.hush(na.readResourceTypeGeneral(ba)));
  }, fa.show(P.showResourceTypeGeneral), fa.show(P.showResourceTypeGeneral));

  var Fa = new xa(function (ba) {
    return O.fromJust()(y.hush(na.readRelationType(ba)));
  }, fa.show(P.showRelationType), fa.show(P.showRelationType)),
      Oa = new xa(function (ba) {
    return O.fromJust()(y.hush(na.readInstitutionType(ba)));
  }, fa.show(P.showInstitutionType), fa.show(P.showInstitutionType)),
      eb = new xa(function (ba) {
    return O.fromJust()(y.hush(na.readIdentifierType(ba)));
  }, fa.show(P.showIdentifierType), fa.show(P.showIdentifierType)),
      Ya = function Ya(ba) {
    return ba instanceof qa ? !0 : !1;
  },
      Pa = function (ba) {
    return function (oa) {
      return function (ya) {
        return function (za) {
          return function (ea) {
            return function (ma) {
              return function (pa) {
                return new A.DateTime(q.canonicalDate(O.fromMaybe(t.bottom(u.boundedYear))(B.toEnum(u.boundedEnumYear)(ba)))(O.fromMaybe(t.bottom(u.boundedMonth))(B.toEnum(u.boundedEnumMonth)(oa)))(O.fromMaybe(t.bottom(u.boundedDay))(B.toEnum(u.boundedEnumDay)(ya))), new ha.Time(O.fromMaybe(t.bottom(da.boundedHour))(B.toEnum(da.boundedEnumHour)(za)), O.fromMaybe(t.bottom(da.boundedMinute))(B.toEnum(da.boundedEnumMinute)(ea)), O.fromMaybe(t.bottom(da.boundedSecond))(B.toEnum(da.boundedEnumSecond)(ma)), O.fromMaybe(t.bottom(da.boundedMillisecond))(B.toEnum(da.boundedEnumMillisecond)(pa))));
              };
            };
          };
        };
      };
    };
  }(0)(0)(0)(0)(0)(0)(0),
      Ia = new C.Generic(function (ba) {
    if (ba instanceof ia) return new C.Inl(C.NoArguments.value);
    if (ba instanceof la) return new C.Inr(C.NoArguments.value);
    throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 1 - line 234, column 58): " + [ba.constructor.name]);
  }, function (ba) {
    if (ba instanceof C.Inl) return ia.value;
    if (ba instanceof C.Inr) return la.value;
    throw Error("Failed pattern match at Metajelo.FormUtil (line 234, column 1 - line 234, column 58): " + [ba.constructor.name]);
  });

  K = new fa.Show(K.genericShow(Ia)(K.genericShowSum(K.genericShowConstructor(K.genericShowArgsNoArguments)(new ca.IsSymbol(function () {
    return "FreeTextPolicy";
  })))(K.genericShowConstructor(K.genericShowArgsNoArguments)(new ca.IsSymbol(function () {
    return "RefPolicy";
  })))));
  K = new xa(function () {
    var ba = O.fromMaybe(ia.value);
    return function (oa) {
      return ba(y.hush(S(oa)));
    };
  }(), fa.show(K), fa.show(K));

  var Za = new v.Functor(function (ba) {
    return function (oa) {
      if (oa instanceof qa) return qa.create(v.map(O.functorMaybe)(ba)(oa.value0));
      if (oa instanceof sa) return sa.create(v.map(O.functorMaybe)(ba)(oa.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 273, column 1 - line 275, column 48): " + [ba.constructor.name, oa.constructor.name]);
    };
  }),
      Qa = function Qa(ba) {
    return function (oa) {
      return function (ya) {
        return f.step(ya)(function () {
          var za = O.isJust(ya) ? !0 : !1;
          return l.bind(b.widgetBind)(e.select(b.widgetMultiAlternative(p.monoidArray))(b.widgetShiftMap)([d.value(O.maybe("")(oa.toOptionValue)(ya)), v.map(g.functorProps)(function () {
            var ea = oa.fromOptionValue;
            return function (ma) {
              return ea(d.unsafeTargetValue(ma));
            };
          }())(d.onChange)])(x.cons(e.option(b.widgetMultiAlternative(p.monoidArray))(b.widgetShiftMap)([d.disabled(za)])([e.text(k.widgetLiftWidget)("Select ...")]))(v.mapFlipped(v.functorArray)(B.upFromIncluding(ba.Enum1())(ja.unfoldable1Array)(t.bottom(ba.Bounded0())))(function (ea) {
            return e.option(b.widgetMultiAlternative(p.monoidArray))(b.widgetShiftMap)([d.value((0, oa.toOptionValue)(ea))])([e.text(k.widgetLiftWidget)((0, oa.toOptionLabel)(ea))]);
          }))))(function (ea) {
            return n.pure(b.widgetApplicative)(Qa(ba)(oa)(new O.Just(ea)));
          });
        }());
      };
    };
  },
      Ra = function Ra(ba) {
    return function (oa) {
      return function (ya) {
        return function (za) {
          return function (ea) {
            return F.fold(ba)(ya)(v.map(oa)(za)(ea));
          };
        };
      };
    };
  },
      Sa = function Sa(ba) {
    ba = Ra(F.foldableMaybe)(O.functorMaybe)(p.monoidString)(V.toString)(ba);
    ba = f.debounce(p.monoidArray)(500)(ba)(Ba);
    return Ja(ba);
  },
      Ta = function Ta(ba) {
    return O.maybe(p.mempty(b.widgetMonoid(p.monoidArray)))(function (oa) {
      return e.div(b.widgetMultiAlternative(p.monoidArray))(b.widgetShiftMap)([d.style({
        color: "red"
      })])([e.text(k.widgetLiftWidget)(J.toText(ba)(oa))]);
    });
  },
      Ua = new w.Eq(X.genericEq(Ia)(X.genericEqSum(X.genericEqConstructor(X.genericEqNoArguments))(X.genericEqConstructor(X.genericEqNoArguments)))),
      Va = new Q.Ord(function () {
    return Ua;
  }, function (ba) {
    return function (oa) {
      return M.genericCompare(Ia)(M.genericOrdSum(M.genericOrdConstructor(M.genericOrdNoArguments))(M.genericOrdConstructor(M.genericOrdNoArguments)))(ba)(oa);
    };
  }),
      $a = new B.Enum(function () {
    return Va;
  }, G.genericPred(Ia)(G.genericEnumSum(G.genericEnumConstructor(G.genericEnumNoArguments))(L.genericTopConstructor(L.genericTopNoArguments))(G.genericEnumConstructor(G.genericEnumNoArguments))(L.genericBottomConstructor(L.genericBottomNoArguments))), G.genericSucc(Ia)(G.genericEnumSum(G.genericEnumConstructor(G.genericEnumNoArguments))(L.genericTopConstructor(L.genericTopNoArguments))(G.genericEnumConstructor(G.genericEnumNoArguments))(L.genericBottomConstructor(L.genericBottomNoArguments))));

  ca = function ca(ba) {
    return function (oa) {
      return oa instanceof O.Nothing ? "(None)" : ua(ba)(oa);
    };
  };

  w = new xa(function (ba) {
    return y.hush(na.readBoolean(ba));
  }, ca(fa.showBoolean), ua(fa.showBoolean));
  X = new xa(function () {
    var ba = l.join(O.bindMaybe);
    return function (oa) {
      return ba(y.hush(na.readInstitutionContactType(oa)));
    };
  }(), ca(P.showInstitutionContactType), ua(P.showInstitutionContactType));
  P = new xa(function () {
    var ba = l.join(O.bindMaybe);
    return function (oa) {
      return ba(y.hush(na.readPolicyType(oa)));
    };
  }(), ca(P.showPolicyType), ua(P.showPolicyType));

  var ab = function ab(ba) {
    return v.voidRight(b.widgetFunctor)(!ba)(e.input(k.widgetLiftWidget)([d._type("checkbox"), d.checked(ba), d.onChange]));
  },
      Wa = function Wa(ba) {
    var oa = ab(ba);
    return f.step(ba)(l.bind(b.widgetBind)(oa)(function (ya) {
      return n.pure(b.widgetApplicative)(Wa(ya));
    }));
  },
      bb = new t.Bounded(function () {
    return Va;
  }, L.genericBottom(Ia)(L.genericBottomSum(L.genericBottomConstructor(L.genericBottomNoArguments))), L.genericTop(Ia)(L.genericTopSum(L.genericTopConstructor(L.genericTopNoArguments))));

  L = new B.BoundedEnum(function () {
    return bb;
  }, function () {
    return $a;
  }, G.genericCardinality(Ia)(G.genericBoundedEnumSum(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))), G.genericFromEnum(Ia)(G.genericBoundedEnumSum(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))), G.genericToEnum(Ia)(G.genericBoundedEnumSum(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))(G.genericBoundedEnumConstructor(G.genericBoundedEnumNoArguments))));

  var La = new m.Apply(function () {
    return Za;
  }, function (ba) {
    return function (oa) {
      if (ba instanceof qa && oa instanceof qa || ba instanceof qa && oa instanceof sa || ba instanceof sa && oa instanceof qa) return qa.create(m.apply(O.applyMaybe)(ba.value0)(oa.value0));
      if (ba instanceof sa && oa instanceof sa) return sa.create(m.apply(O.applyMaybe)(ba.value0)(oa.value0));
      throw Error("Failed pattern match at Metajelo.FormUtil (line 276, column 1 - line 280, column 63): " + [ba.constructor.name, oa.constructor.name]);
    };
  }),
      cb = new n.Applicative(function () {
    return La;
  }, function (ba) {
    return qa.create(new O.Just(ba));
  }),
      Xa = function Xa(ba) {
    return function (oa) {
      var ya = aa.snd(oa),
          za = aa.fst(oa),
          ea = new qa(O.Nothing.value);

      oa = function () {
        var ta = Q.max(Q.ordInt)(0)(za - x.length(ya) | 0);
        return R.append(R.semigroupArray)(v.map(v.functorArray)(n.pure(cb))(ya))(v.mapFlipped(v.functorArray)(Ka(1)(ta))(function (wa) {
          return ea;
        }));
      }();

      var ma = function ma(ta) {
        return f.step(ta)(l.bind(b.widgetBind)(v.voidRight(b.widgetFunctor)(sa.create(Ga(ta)))(e.button(b.widgetMultiAlternative(p.monoidArray))(b.widgetShiftMap)([d.onClick])([e.text(k.widgetLiftWidget)("Delete")])))(function (wa) {
          return n.pure(b.widgetApplicative)(ma(wa));
        }));
      },
          pa = function pa(ta) {
        return e.li_(r.shiftMapCofree(p.monoidArray))([])(l.bind(r.bindCofree(b.widgetAlternative(p.monoidArray)))(ba(Ga(ta)))(function (wa) {
          return l.bind(r.bindCofree(b.widgetAlternative(p.monoidArray)))(ma(new qa(wa)))(function (Aa) {
            return n.pure(r.applicativeCofree(b.widgetAlternative(p.monoidArray)))(Aa);
          });
        }));
      },
          ra = function ra(ta) {
        if (ta instanceof sa) return f.step(new sa(O.Nothing.value))(p.mempty(b.widgetMonoid(p.monoidArray)));
        if (ta instanceof qa) return pa(ta);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 307, column 23 - line 309, column 35): " + [ta.constructor.name]);
      };

      return e.div_(r.shiftMapCofree(p.monoidArray))([])(l.bind(r.bindCofree(b.widgetAlternative(p.monoidArray)))(function (ta) {
        return function (wa) {
          return f.loopS(p.monoidArray)(new aa.Tuple(ta, wa))(function (Aa) {
            return e.ul_(r.shiftMapCofree(p.monoidArray))([])(function () {
              aa.fst(Aa);
              var Da = aa.snd(Aa);
              return l.bind(r.bindCofree(b.widgetAlternative(p.monoidArray)))(f.step(0)(v.voidRight(b.widgetFunctor)(n.pure(r.applicativeCofree(b.widgetAlternative(p.monoidArray)))(1))(e.button(b.widgetMultiAlternative(p.monoidArray))(b.widgetShiftMap)([d.onClick])([e.text(k.widgetLiftWidget)("Add item")]))))(function (Ea) {
                return l.bind(r.bindCofree(b.widgetAlternative(p.monoidArray)))(Y.traverse(Y.traversableArray)(r.applicativeCofree(b.widgetAlternative(p.monoidArray)))(ra)(Da))(function (Ca) {
                  Ca = x.filter(Ya)(Ca);
                  var Ma = x.length(Ca) + Ea | 0,
                      Na = v.mapFlipped(v.functorArray)(Ka(1)(Ea))(function (db) {
                    return ea;
                  });
                  return n.pure(r.applicativeCofree(b.widgetAlternative(p.monoidArray)))(aa.Tuple.create(Ma)(R.append(R.semigroupArray)(Ca)(Na)));
                });
              });
            }());
          });
        };
      }(za)(oa))(function (ta) {
        return n.pure(r.applicativeCofree(b.widgetAlternative(p.monoidArray)))(I.second(I.strongFn)(function () {
          var wa = v.map(v.functorArray)(Ga);
          return function (Aa) {
            return x.catMaybes(wa(Aa));
          };
        }())(ta));
      }));
    };
  };

  c.menu = function (ba) {
    return function (oa) {
      return function (ya) {
        return function (za) {
          return function (ea) {
            return function (ma) {
              return function (pa) {
                return function (ra) {
                  return function (ta) {
                    return e.select(b.widgetMultiAlternative(p.monoidArray))(b.widgetShiftMap)([d.defaultValue((0, oa.toOptionValue)(D.getInput(ba)(za)()(ta)(ra))), v.map(g.functorProps)(function () {
                      var wa = W.set(ba)(ma)()(ta),
                          Aa = oa.fromOptionValue;
                      return function (Da) {
                        return wa(Aa(d.unsafeTargetValue(Da)));
                      };
                    }())(d.onChange)])(v.mapFlipped(v.functorArray)(B.upFromIncluding(ya.Enum1())(ja.unfoldable1Array)(t.bottom(ya.Bounded0())))(function (wa) {
                      return e.option(b.widgetMultiAlternative(p.monoidArray))(b.widgetShiftMap)([d.value((0, oa.toOptionValue)(wa))])([e.text(k.widgetLiftWidget)((0, oa.toOptionLabel)(wa))]);
                    }));
                  };
                };
              };
            };
          };
        };
      };
    };
  };

  c.menuSignal = Qa;
  c.textInput = Sa;

  c.urlInput = function (ba) {
    if (ba instanceof y.Left) var oa = "";else if (ba instanceof y.Right) oa = V.toString(Z.urlToNEString(ba.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 169, column 15 - line 171, column 48): " + [ba.constructor.name]);
    if (ba instanceof y.Left) var ya = ba.value0;else if (ba instanceof y.Right) ya = "";else throw Error("Failed pattern match at Metajelo.FormUtil (line 165, column 15 - line 167, column 20): " + [ba.constructor.name]);
    return l.bind(r.bindCofree(b.widgetAlternative(p.monoidArray)))(Sa(V.fromString(oa)))(function (za) {
      var ea = l.bind(r.bindCofree(b.widgetAlternative(p.monoidArray))),
          ma = n.pure(r.applicativeCofree(b.widgetAlternative(p.monoidArray)));
      if (za instanceof O.Nothing) za = new y.Left(ya);else if (za instanceof O.Just) za = Z.parsePublicURL(V.toString(za.value0));else throw Error("Failed pattern match at Metajelo.FormUtil (line 156, column 19 - line 158, column 46): " + [za.constructor.name]);
      return ea(ma(za))(function (pa) {
        return l.discard(l.discardUnit)(r.bindCofree(b.widgetAlternative(p.monoidArray)))(f.display(function () {
          if (pa instanceof y.Right) return p.mempty(b.widgetMonoid(p.monoidArray));
          if (pa instanceof y.Left) return Ta(J.toTextString)(new O.Just(pa.value0));
          throw Error("Failed pattern match at Metajelo.FormUtil (line 159, column 13 - line 161, column 40): " + [pa.constructor.name]);
        }()))(function () {
          return n.pure(r.applicativeCofree(b.widgetAlternative(p.monoidArray)))(pa);
        });
      });
    });
  };

  c.checkBoxS = Wa;
  c.FreeTextPolicy = ia;
  c.RefPolicy = la;

  c.formSaveButton = function (ba) {
    ba = ba.dirty ? [d.onClick] : [d.disabled(!0)];
    return e.button(b.widgetMultiAlternative(p.monoidArray))(b.widgetShiftMap)(ba)([e.text(k.widgetLiftWidget)("Save")]);
  };

  c.arrayView = Xa;

  c.nonEmptyArrayView = function (ba) {
    return function (oa) {
      return l.bind(r.bindCofree(b.widgetAlternative(p.monoidArray)))(Xa(ba)(I.second(I.strongFn)(Ra(F.foldableMaybe)(O.functorMaybe)(p.monoidArray)(z.toArray))(oa)))(function (ya) {
        return n.pure(r.applicativeCofree(b.widgetAlternative(p.monoidArray)))(I.second(I.strongFn)(z.fromArray)(ya));
      });
    };
  };

  c.errorDisplay = Ta;

  c.initFormState = function (ba) {
    return function (oa) {
      return function (ya) {
        return function (za) {
          return function (ea) {
            return function (ma) {
              return {
                validity: U.Incomplete.value,
                dirty: !1,
                submitting: !1,
                errors: 0,
                submitAttempts: 0,
                form: N.inputFieldsToFormFields()(oa)(ya)(za)(ea),
                internal: {
                  initialInputs: ea,
                  validators: ma,
                  allTouched: !1
                }
              };
            };
          };
        };
      };
    };
  };

  c.formatXsdDate = function (ba) {
    var oa = E.formatDateTime("YYYY-MM-DD")(ba);
    return function () {
      if (oa instanceof y.Left) return new y.Left(oa.value0);

      if (oa instanceof y.Right) {
        var ya = V.fromString(oa.value0);
        if (ya instanceof O.Nothing) return new y.Left("Empty Date output from formatXsdDate");
        if (ya instanceof O.Just) return new y.Right(ya.value0);
        throw Error("Failed pattern match at Metajelo.FormUtil (line 413, column 27 - line 415, column 30): " + [ya.constructor.name]);
      }

      throw Error("Failed pattern match at Metajelo.FormUtil (line 411, column 15 - line 415, column 30): " + [oa.constructor.name]);
    }();
  };

  c.initDate = Pa;

  c.evTargetElem = function (ba) {
    return v.map(va.functorEffect)(ka.fromNode)(H.target(ba));
  };

  c.isOptionMaybeBoolean = w;
  c.isOptionIdentifierType = eb;
  c.isOptionInstitutionType = Oa;
  c.isOptionMaybeInstitutionContactType = X;
  c.isOptionMaybePolicyType = P;
  c.isOptionRelationType = Fa;
  c.isOptionResourceTypeGeneral = a;
  c.eqPolPolType = Ua;
  c.boundedEnumPolPolType = L;
  c.isOptionPolPolType = K;
})(PS);

(function (a) {
  a["Metajelo.View"] = a["Metajelo.View"] || {};

  var c = a["Metajelo.View"],
      f = a["Concur.Core.LiftWidget"],
      k = a["Concur.Core.Types"],
      g = a["Concur.React.DOM"],
      b = a["Concur.React.Props"],
      e = a["Control.Alt"],
      d = a["Control.Bind"],
      n = a["Control.Category"],
      m = a["Data.Array"],
      l = a["Data.Array.NonEmpty"],
      r = a["Data.Array.NonEmpty.Internal"],
      x = a["Data.Foldable"],
      z = a["Data.Functor"],
      t = a["Data.HeytingAlgebra"],
      q = a["Data.Maybe"],
      u = a["Data.Monoid"],
      A = a["Data.Profunctor.Strong"],
      y = a["Data.Semigroup"],
      B = a["Data.Show"],
      w = a["Data.String.CodePoints"],
      F = a["Data.String.NonEmpty.Internal"],
      E = a["Data.String.Utils"],
      v = a["Data.Unfoldable"],
      C = a["Data.Unfoldable1"],
      L = a["Foreign.Object"],
      G = a["Metajelo.CSS.Common.ClassNames"],
      X = a["Metajelo.CSS.Web.ClassNamesPrivate"],
      M = a["Metajelo.CSS.Web.ClassProps"],
      K = a["Metajelo.CSS.Web.Util"],
      O = a["Metajelo.Types"],
      p = a["Text.Email.Parser"],
      Q = a["Text.URL.Validate"],
      I = function () {
    var P = z.map(z.functorArray)(w.singleton);
    return function (J) {
      return P(w.toCodePointArray(J));
    };
  }(),
      R = function R(P) {
    var J = g.text(P);
    return function (na) {
      return J(F.toString(na));
    };
  },
      fa = g["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)(" ")]),
      T = function () {
    var P = x.intercalate(x.foldableArray)(u.monoidArray)([fa]),
        J = z.map(z.functorArray)(C.singleton(C.unfoldable1Array));
    return function (na) {
      return P(J(na));
    };
  }(),
      V = function V(P) {
    return g.div(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.institutionPolicy])(T([function (J) {
      var na = function () {
        if (J instanceof q.Nothing) return {
          text: "May apply to product (unverified)",
          cls: X.appliesMaybe
        };
        if (J instanceof q.Just && J.value0) return {
          text: "Applies to product",
          cls: X.appliesYes
        };
        if (J instanceof q.Just && !J.value0) return {
          text: "Does not apply to product",
          cls: X.appliesNo
        };
        throw Error("Failed pattern match at Metajelo.View (line 258, column 10 - line 261, column 75): " + [J.constructor.name]);
      }();

      return g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([K.cList([G.applies, na.cls])])([function (H) {
        return g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.appliesInfo])([g.text(f.widgetLiftWidget)(H)]);
      }(na.text)]);
    }(P.appliesToProduct), x.foldMap(x.foldableMaybe)(k.widgetMonoid(u.monoidArray))(function (J) {
      return g["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.policyType])([g.text(f.widgetLiftWidget)(B.show(O.showPolicyType)(J))]), g.text(f.widgetLiftWidget)(" Policy:")]);
    })(P.policyType), function (J) {
      var na = g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.policy]),
          H = C.singleton(C.unfoldable1Array);
      if (J instanceof O.FreeTextPolicy) J = R(f.widgetLiftWidget)(J.value0);else if (J instanceof O.RefPolicy) J = Q.urlToString(J.value0), J = g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([g.text(f.widgetLiftWidget)(J)]);else throw Error("Failed pattern match at Metajelo.View (line 251, column 5 - line 254, column 40): " + [J.constructor.name]);
      return na(H(J));
    }(P.policy)]));
  },
      ca = function ca(P) {
    return g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.institutionName])([R(f.widgetLiftWidget)(P.institutionName)]);
  },
      ha = function ha(P) {
    return function (J) {
      return x.foldMap(x.foldableMaybe)(u.monoidArray)(n.identity(n.categoryFn))(m.init(J));
    };
  },
      da = function da(P) {
    return function (J) {
      return function (na) {
        return function (H) {
          return function (Z) {
            var ka = L.fromFoldableWith(P)(y.append(H)),
                ia = z.map(J)(A.fanout(n.categoryFn)(A.strongFn)(Z)(C.singleton(na)));
            return function (la) {
              return ka(ia(la));
            };
          };
        };
      };
    };
  },
      Y = function Y(P) {
    var J = p.toString(P.emailAddress),
        na = g.text(f.widgetLiftWidget);
    if (P.contactType instanceof q.Nothing) P = ".";else if (P.contactType instanceof q.Just) P = " (" + (B.show(O.showInstitutionContactType)(P.contactType.value0) + ").");else throw Error("Failed pattern match at Metajelo.View (line 185, column 24 - line 187, column 41): " + [P.contactType.constructor.name]);
    na = na(P);
    return g.span_(k.widgetShiftMap)([M.institutionContact])(e.alt(k.widgetAlt(u.monoidArray))(e.alt(k.widgetAlt(u.monoidArray))(g["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("Institution Contact: ")]))(g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.contactEmail, b.href("mailto:" + J)])([g.text(f.widgetLiftWidget)(J)])))(g.span_(k.widgetShiftMap)([M.contactType])(na)));
  },
      aa = function aa(P) {
    return g["cite'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([R(f.widgetLiftWidget)(P)]);
  },
      ja = function ja(P) {
    if (P.idType instanceof O.ARK) return g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(F.toString(P.id))])([aa(P.id)]);

    if (P.idType instanceof O.ArXiv) {
      var J = "https://arxiv.org/abs/" + F.toString(P.id);
      return g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([aa(P.id)]);
    }

    if (P.idType instanceof O.Bibcode) return J = "https://ui.adsabs.harvard.edu/abs/" + (F.toString(P.id) + "/abstract"), g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([aa(P.id)]);
    if (P.idType instanceof O.DOI) return J = "https://doi.org/" + F.toString(P.id), g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([aa(P.id)]);
    if (P.idType instanceof O.EAN13) return aa(P.id);
    if (P.idType instanceof O.EISSN) return J = "https://www.worldcat.org/ISSN/" + F.toString(P.id), g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([aa(P.id)]);
    if (P.idType instanceof O.Handle) return J = "http://hdl.handle.net/" + F.toString(P.id), g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([aa(P.id)]);
    if (P.idType instanceof O.IGSN) return J = "http://igsn.org/" + F.toString(P.id), g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([aa(P.id)]);
    if (P.idType instanceof O.ISBN) return aa(P.id);
    if (P.idType instanceof O.ISSN) return J = "https://www.worldcat.org/ISSN/" + F.toString(P.id), g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([aa(P.id)]);
    if (P.idType instanceof O.ISTC) return aa(P.id);
    if (P.idType instanceof O.LISSN) return J = "https://www.worldcat.org/ISSN/" + F.toString(P.id), g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([aa(P.id)]);
    if (P.idType instanceof O.LSID) return J = "http://www.lsid.info/resolver/?lsid=" + F.toString(P.id), g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([aa(P.id)]);
    if (P.idType instanceof O.PMID) return J = "https://www.ncbi.nlm.nih.gov/pubmed/" + F.toString(P.id), g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(J)])([aa(P.id)]);
    if (P.idType instanceof O.PURL) return g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(F.toString(P.id))])([aa(P.id)]);
    if (P.idType instanceof O.UPC) return aa(P.id);
    if (P.idType instanceof O.URL) return g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([b.href(F.toString(P.id))])([aa(P.id)]);
    if (P.idType instanceof O.URN) return aa(P.id);
    throw Error("Failed pattern match at Metajelo.View (line 207, column 1 - line 207, column 47): " + [P.constructor.name]);
  },
      va = function va(P) {
    return g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.identifier])([g.span_(k.widgetShiftMap)([M.idType])(g.text(f.widgetLiftWidget)(B.show(O.showIdentifierType)(P.idType))), g.span_(k.widgetShiftMap)([M.idUrl])(ja(P))]);
  },
      N = function N(P) {
    return g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.relatedId])([g.span_(k.widgetShiftMap)([M.relType])(g.text(f.widgetLiftWidget)(B.show(O.showRelationType)(P.relType))), fa, va({
      id: P.id,
      idType: P.idType
    })]);
  },
      W = function W(P) {
    return function (J) {
      return function (na) {
        if (J) return P;

        if (x.any(x.foldableArray)(t.heytingAlgebraBoolean)(function (Z) {
          return E.endsWith(Z)(P);
        })([";", ".", ","])) {
          var H = I(P);
          return E.fromCharArray(ha(u.monoidString)(H)) + na;
        }

        return P + na;
      };
    };
  },
      D = function D(P) {
    var J = ca(P),
        na = g["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("("), g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.institutionId])([va(P.institutionID)]), g.text(f.widgetLiftWidget)("; "), g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.institutionType])([g.text(f.widgetLiftWidget)(B.show(O.showInstitutionType)(P.institutionType))]), g.text(f.widgetLiftWidget)(W(")")(q.isNothing(P.superOrganizationName))(","))]);
    if (P.superOrganizationName instanceof q.Nothing) var H = u.mempty(k.widgetMonoid(u.monoidArray));else if (P.superOrganizationName instanceof q.Just) H = g["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([g.text(f.widgetLiftWidget)("a member of "), g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.superOrg])([g.text(f.widgetLiftWidget)(W(F.toString(P.superOrganizationName.value0))(!1)("."))])]);else throw Error("Failed pattern match at Metajelo.View (line 147, column 7 - line 153, column 10): " + [P.superOrganizationName.constructor.name]);
    return T([J, na, H, Y(P.institutionContact), g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.sustainability])([g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.missionStatement, b.href(Q.urlToString(P.institutionSustainability.missionStatementURL))])([g.text(f.widgetLiftWidget)("Mission Statement")]), g.text(f.widgetLiftWidget)("; "), g.a(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.fundingStatement, b.href(Q.urlToString(P.institutionSustainability.fundingStatementURL))])([g.text(f.widgetLiftWidget)("Funding Statement")]), g.text(f.widgetLiftWidget)(".")]), g.ul(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.institutionPolicies])(z.map(z.functorArray)(function (Z) {
      return g["li'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([V(Z)]);
    })(l.toArray(P.institutionPolicies))), function (Z) {
      if (Z) Z = "Versioned";else {
        if (Z) throw Error("Failed pattern match at Metajelo.View (line 174, column 14 - line 176, column 31): " + [Z.constructor.name]);
        Z = "Unversioned";
      }
      return g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.versioning])([g.text(f.widgetLiftWidget)(Z)]);
    }(P.versioning)]);
  },
      U = function U(P) {
    if (P.resourceID instanceof q.Just) var J = g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.resourceId])([va(P.resourceID.value0), g.text(f.widgetLiftWidget)(".")]);else if (P.resourceID instanceof q.Nothing) J = u.mempty(k.widgetMonoid(u.monoidArray));else throw Error("Failed pattern match at Metajelo.View (line 125, column 17 - line 127, column 24): " + [P.resourceID.constructor.name]);
    var na = [g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.basicMetadata, M.creator])([R(f.widgetLiftWidget)(P.basicMetadata.creator)]), g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.basicMetadata, M.pubyear])([R(f.widgetLiftWidget)(P.basicMetadata.publicationYear)]), g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.basicMetadata, M.title])([g.text(f.widgetLiftWidget)(W(F.toString(P.basicMetadata.title))(q.isNothing(P.resourceID))(","))])];
    J = y.append(y.semigroupArray)(na)([g["span'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([ca(P.location), g.text(f.widgetLiftWidget)(".")]), J]);
    return g.div(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.product])(T(y.append(y.semigroupArray)([g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.productCitation])([g["cite'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)(T(J))])])(D(P.location))));
  };

  c.spacify = T;

  c.mkRecordWidget = function (P) {
    var J = function () {
      var Z = z.map(r.functorNonEmptyArray)(function (ka) {
        return g.li(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.relatedId])([ka]);
      })(z.map(r.functorNonEmptyArray)(N)(P.relatedIdentifiers));
      return g.ul(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.relatedIdList])(l.toArray(Z));
    }(),
        na = da(r.foldableNonEmptyArray)(r.functorNonEmptyArray)(r.unfoldable1NonEmptyArray)(r.semigroupNonEmptyArray)(function (Z) {
      return B.show(O.showResourceTypeGeneral)(Z.resourceType.generalType) + (": " + Z.resourceType.description);
    })(P.supplementaryProducts),
        H = function H(Z) {
      Z = d.join(d.bindArray)(v.fromMaybe(v.unfoldableArray)(z.map(q.functorMaybe)(l.toArray)(L.lookup(Z)(na))));
      var ka = g.span_(k.widgetShiftMap)([M.resourceType])(x.fold(x.foldableMaybe)(k.widgetMonoid(u.monoidArray))(z.mapFlipped(q.functorMaybe)(m.head(Z))(function (ia) {
        return e.alt(k.widgetAlt(u.monoidArray))(e.alt(k.widgetAlt(u.monoidArray))(g.span_(k.widgetShiftMap)([M.resourceTypeGen])(g.text(f.widgetLiftWidget)(B.show(O.showResourceTypeGeneral)(ia.resourceType.generalType))))(g.span_(k.widgetShiftMap)([M.resourceTypeDescr])(g.text(f.widgetLiftWidget)(ia.resourceType.description))))(g["br'"](f.widgetLiftWidget));
      })));
      return g["div'"](k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)(m.cons(ka)(z.map(z.functorArray)(U)(Z)));
    };

    B.show(O.showIdentifierType)(P.identifier.idType);
    return g.div(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.record])([g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.productsHeader])([g.span_(k.widgetShiftMap)([M.recordId])(va(P.identifier))]), g.ul(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.productList])(z.map(z.functorArray)(function (Z) {
      return g.li_(k.widgetShiftMap)([M.productGroup])(H(Z));
    })(L.keys(na))), g.span(k.widgetMultiAlternative(u.monoidArray))(k.widgetShiftMap)([M.relatedIdsHeader])([]), J]);
  };

  c.mkSupplementaryProductWidget = U;
  c.locElems = D;
  c.contactWidg = Y;
  c.ipolicyWidg = V;
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionContact"] = a["Metajelo.Forms.InstitutionContact"] || {};

  var c = a["Metajelo.Forms.InstitutionContact"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      n = a["Control.Applicative"],
      m = a["Control.Bind"],
      l = a["Control.Cofree"],
      r = a["Data.Either"],
      x = a["Data.Enum"],
      z = a["Data.Eq"],
      t = a["Data.Foldable"],
      q = a["Data.Functor"],
      u = a["Data.Maybe"],
      A = a["Data.Monoid"],
      y = a["Data.Newtype"],
      B = a["Data.Symbol"],
      w = a["Formless.Component"],
      F = a["Formless.Internal.Transform"],
      E = a["Formless.Query"],
      v = a["Formless.Retrieve"],
      C = a["Formless.Transform.Record"],
      L = a["Formless.Transform.Row"],
      G = a["Formless.Types.Form"],
      X = a["Heterogeneous.Mapping"],
      M = a["Metajelo.CSS.UI.ClassProps"],
      K = a["Metajelo.FormUtil"],
      O = a["Metajelo.Types"],
      p = a["Metajelo.Validation"],
      Q = a["Metajelo.View"],
      I = a["Text.Email.Parser"],
      R = {
    email1: p.emailFormat(b.widgetMonad),
    contactType: p.dummy(b.widgetMonad)
  },
      fa = function fa(da) {
    return function (Y) {
      return function (aa) {
        return L.mkSProxies()(Y)(aa)(G.FormProxy.value);
      };
    };
  },
      T = new y.Newtype(function (da) {
    return da;
  }, function (da) {
    return da;
  }),
      V = {
    email1: "",
    contactType: u.Nothing.value
  },
      ca = function ca(da) {
    if (da instanceof u.Nothing) return V;
    if (da instanceof u.Just) return {
      email1: I.toString(da.value0.emailAddress),
      contactType: da.value0.contactType
    };
    throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 49, column 1 - line 49, column 57): " + [da.constructor.name]);
  },
      ha = function ha(da) {
    return m.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([e.input(k.widgetLiftWidget)([M.contactEmail, d.defaultValue(v.getInput(new B.IsSymbol(function () {
      return "email1";
    }))(T)()(fa()(T)(L.makeSProxiesCons(new B.IsSymbol(function () {
      return "contactType";
    }))()(L.makeSProxiesCons(new B.IsSymbol(function () {
      return "email1";
    }))()(L.makeSProxiesNil))).email1)(da.form)), q.map(g.functorProps)(function () {
      var Y = E.setValidate(new B.IsSymbol(function () {
        return "email1";
      }))(T)()(fa()(T)(L.makeSProxiesCons(new B.IsSymbol(function () {
        return "contactType";
      }))()(L.makeSProxiesCons(new B.IsSymbol(function () {
        return "email1";
      }))()(L.makeSProxiesNil))).email1);
      return function (aa) {
        return Y(d.unsafeTargetValue(aa));
      };
    }())(d.onChange)]), K.errorDisplay(p.toTextFieldError)(v.getError(new B.IsSymbol(function () {
      return "email1";
    }))(T)()(fa()(T)(L.makeSProxiesCons(new B.IsSymbol(function () {
      return "contactType";
    }))()(L.makeSProxiesCons(new B.IsSymbol(function () {
      return "email1";
    }))()(L.makeSProxiesNil))).email1)(da.form)), e.span_(b.widgetShiftMap)([M.contactType])(K.menu(new B.IsSymbol(function () {
      return "contactType";
    }))(K.isOptionMaybeInstitutionContactType)(x.boundedEnumMaybe(O.smallBoundedInstitutionContactType)(O.boundedEnumInstitutionContactType))(T)()(T)()(da.form)(fa()(T)(L.makeSProxiesCons(new B.IsSymbol(function () {
      return "contactType";
    }))()(L.makeSProxiesCons(new B.IsSymbol(function () {
      return "email1";
    }))()(L.makeSProxiesNil))).contactType)), e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([q.voidRight(b.widgetFunctor)(E.submit)(K.formSaveButton(da))])]))(function (Y) {
      return m.bind(b.widgetBind)(w.eval()()(z.eqRowCons(z.eqRowCons(z.eqRowNil)()(new B.IsSymbol(function () {
        return "email1";
      }))(G.eqInputField(z.eqString)))()(new B.IsSymbol(function () {
        return "contactType";
      }))(G.eqInputField(u.eqMaybe(O.eqInstitutionContactType))))(F.inputFieldsToFormFieldsCons(new B.IsSymbol(function () {
        return "contactType";
      }))()(F.inputFieldsToFormFieldsCons(new B.IsSymbol(function () {
        return "email1";
      }))()(F.inputFieldsToFormFieldsNil)())())(F.inputFieldsToInputCons(new B.IsSymbol(function () {
        return "contactType";
      }))()(F.inputFieldsToInputCons(new B.IsSymbol(function () {
        return "email1";
      }))()(F.inputFieldsToInputNil)())())(F.consCountErrors(new B.IsSymbol(function () {
        return "contactType";
      }))()(F.consCountErrors(new B.IsSymbol(function () {
        return "email1";
      }))()(F.nilCountErrors)))(F.consAllTouched(new B.IsSymbol(function () {
        return "contactType";
      }))()(F.consAllTouched(new B.IsSymbol(function () {
        return "email1";
      }))()(F.nilAllTouched)))(F.setFormFieldsTouchedCons(new B.IsSymbol(function () {
        return "contactType";
      }))()(F.setFormFieldsTouchedCons(new B.IsSymbol(function () {
        return "email1";
      }))()(F.setFormFieldsTouchedNil)())())(F.replaceFormFieldInputsTouchedCons(new B.IsSymbol(function () {
        return "contactType";
      }))(G.newtypeInputField)(G.newtypeFormField)()()()(F.replaceFormFieldInputsTouchedCons(new B.IsSymbol(function () {
        return "email1";
      }))(G.newtypeInputField)(G.newtypeFormField)()()()(F.replaceFormFieldInputsTouchedNil)))(F.modifyAllCons(new B.IsSymbol(function () {
        return "contactType";
      }))(G.newtypeInputFunction)(G.newtypeFormField)()()()(F.modifyAllCons(new B.IsSymbol(function () {
        return "email1";
      }))(G.newtypeInputFunction)(G.newtypeFormField)()()()(F.modifyAllNil)))(F.applyToValidationCons(new B.IsSymbol(function () {
        return "contactType";
      }))(b.widgetMonad)()(T)()()(F.applyToValidationCons(new B.IsSymbol(function () {
        return "email1";
      }))(b.widgetMonad)()(T)()()(F.applyToValidationNil(b.widgetMonad))))(F.formFieldsToMaybeOutputCons(new B.IsSymbol(function () {
        return "contactType";
      }))()(F.formFieldsToMaybeOutputCons(new B.IsSymbol(function () {
        return "email1";
      }))()(F.formFieldsToMaybeOutputNil)())())(T)(T)(T)(T)(T)(T)(T)(T)(b.widgetMonad)(Y)(da))(function (aa) {
        if (aa instanceof r.Left) return ha(aa.value0);
        if (aa instanceof r.Right) return aa = C.unwrapOutputFields(T)(X.hmapRecord()(X.mapRecordWithIndexCons(new B.IsSymbol(function () {
          return "contactType";
        }))(X.constMapping(C.unwrapField(G.newtypeOutputField)))(X.mapRecordWithIndexCons(new B.IsSymbol(function () {
          return "email1";
        }))(X.constMapping(C.unwrapField(G.newtypeOutputField)))(X.mapRecordWithIndexNil)()())()()))(aa.value0), n.pure(b.widgetApplicative)({
          emailAddress: aa.email1,
          contactType: aa.contactType
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionContact (line 75, column 3 - line 79, column 70): " + [aa.constructor.name]);
      });
    });
  };

  c.contactSignal = function (da) {
    var Y = function Y(aa) {
      return f.step(aa)(m.bind(b.widgetBind)(n.pure(b.widgetApplicative)(C.wrapInputFields(T)(X.hmapRecord()(X.mapRecordWithIndexCons(new B.IsSymbol(function () {
        return "contactType";
      }))(X.constMapping(C.wrapField(G.newtypeInputField)))(X.mapRecordWithIndexCons(new B.IsSymbol(function () {
        return "email1";
      }))(X.constMapping(C.wrapField(G.newtypeInputField)))(X.mapRecordWithIndexNil)()())()()))(ca(aa))))(function (ja) {
        return m.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([ha(K.initFormState()(F.inputFieldsToFormFieldsCons(new B.IsSymbol(function () {
          return "contactType";
        }))()(F.inputFieldsToFormFieldsCons(new B.IsSymbol(function () {
          return "email1";
        }))()(F.inputFieldsToFormFieldsNil)())())(T)(T)(ja)(R)), t.foldMap(t.foldableMaybe)(b.widgetMonoid(A.monoidArray))(Q.contactWidg)(aa)]))(function (va) {
          return n.pure(b.widgetApplicative)(Y(new u.Just(va)));
        });
      }));
    };

    return e.div_(l.shiftMapCofree(A.monoidArray))([M.institutionContact])(Y(da));
  };
})(PS);

(function (a) {
  a["Metajelo.Forms.InstitutionPolicy"] = a["Metajelo.Forms.InstitutionPolicy"] || {};

  var c = a["Metajelo.Forms.InstitutionPolicy"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      n = a["Control.Applicative"],
      m = a["Control.Bind"],
      l = a["Control.Cofree"],
      r = a["Data.Either"],
      x = a["Data.Enum"],
      z = a["Data.Eq"],
      t = a["Data.Foldable"],
      q = a["Data.Functor"],
      u = a["Data.Maybe"],
      A = a["Data.Monoid"],
      y = a["Data.Show"],
      B = a["Data.String.NonEmpty.Internal"],
      w = a["Data.Symbol"],
      F = a["Effect.Class"],
      E = a["Effect.Class.Console"],
      v = a["Formless.Component"],
      C = a["Formless.Internal.Transform"],
      L = a["Formless.Query"],
      G = a["Formless.Retrieve"],
      X = a["Formless.Transform.Record"],
      M = a["Formless.Transform.Row"],
      K = a["Formless.Types.Form"],
      O = a["Formless.Validation"],
      p = a["Heterogeneous.Mapping"],
      Q = a["Metajelo.CSS.UI.ClassProps"],
      I = a["Metajelo.FormUtil"],
      R = a["Metajelo.Types"],
      fa = a["Metajelo.Validation"],
      T = a["Metajelo.View"],
      V = a["Text.URL.Validate"],
      ca = function ca(N) {
    return function (W) {
      return function (D) {
        return M.mkSProxies()(W)(D)(K.FormProxy.value);
      };
    };
  },
      ha = new a["Data.Newtype"].Newtype(function (N) {
    return N;
  }, function (N) {
    return N;
  }),
      da = function da(N) {
    return m.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([e.span_(b.widgetShiftMap)([Q.policy])(I.menu(new w.IsSymbol(function () {
      return "polPolType";
    }))(I.isOptionPolPolType)(I.boundedEnumPolPolType)(ha)()(ha)()(N.form)(ca()(ha)(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "appliesToProd";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "polPolType";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "policy";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "policyType";
    }))()(M.makeSProxiesNil))))).polPolType)), e.input(k.widgetLiftWidget)([d.defaultValue(G.getInput(new w.IsSymbol(function () {
      return "policy";
    }))(ha)()(ca()(ha)(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "appliesToProd";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "polPolType";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "policy";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "policyType";
    }))()(M.makeSProxiesNil))))).policy)(N.form)), q.map(g.functorProps)(function () {
      var W = L.setValidate(new w.IsSymbol(function () {
        return "policy";
      }))(ha)()(ca()(ha)(M.makeSProxiesCons(new w.IsSymbol(function () {
        return "appliesToProd";
      }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
        return "polPolType";
      }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
        return "policy";
      }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
        return "policyType";
      }))()(M.makeSProxiesNil))))).policy);
      return function (D) {
        return W(d.unsafeTargetValue(D));
      };
    }())(d.onChange)]), I.errorDisplay(fa.toTextString)(G.getError(new w.IsSymbol(function () {
      return "policy";
    }))(ha)()(ca()(ha)(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "appliesToProd";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "polPolType";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "policy";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "policyType";
    }))()(M.makeSProxiesNil))))).policy)(N.form)), e.span_(b.widgetShiftMap)([Q.policyType])(I.menu(new w.IsSymbol(function () {
      return "policyType";
    }))(I.isOptionMaybePolicyType)(x.boundedEnumMaybe(R.smallBoundedPolicyType)(R.boundedEnumPolicyType))(ha)()(ha)()(N.form)(ca()(ha)(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "appliesToProd";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "polPolType";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "policy";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "policyType";
    }))()(M.makeSProxiesNil))))).policyType)), e.span_(b.widgetShiftMap)([Q.applies])(I.menu(new w.IsSymbol(function () {
      return "appliesToProd";
    }))(I.isOptionMaybeBoolean)(x.boundedEnumMaybe(x.smallBoundedBoolean)(x.boundedEnumBoolean))(ha)()(ha)()(N.form)(ca()(ha)(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "appliesToProd";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "polPolType";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "policy";
    }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
      return "policyType";
    }))()(M.makeSProxiesNil))))).appliesToProd)), e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([q.voidRight(b.widgetFunctor)(L.submit)(I.formSaveButton(N))])]))(function (W) {
      return m.bind(b.widgetBind)(v.eval()()(z.eqRowCons(z.eqRowCons(z.eqRowCons(z.eqRowCons(z.eqRowNil)()(new w.IsSymbol(function () {
        return "policyType";
      }))(K.eqInputField(u.eqMaybe(R.eqPolicyType))))()(new w.IsSymbol(function () {
        return "policy";
      }))(K.eqInputField(z.eqString)))()(new w.IsSymbol(function () {
        return "polPolType";
      }))(K.eqInputField(I.eqPolPolType)))()(new w.IsSymbol(function () {
        return "appliesToProd";
      }))(K.eqInputField(u.eqMaybe(z.eqBoolean))))(C.inputFieldsToFormFieldsCons(new w.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.inputFieldsToFormFieldsCons(new w.IsSymbol(function () {
        return "polPolType";
      }))()(C.inputFieldsToFormFieldsCons(new w.IsSymbol(function () {
        return "policy";
      }))()(C.inputFieldsToFormFieldsCons(new w.IsSymbol(function () {
        return "policyType";
      }))()(C.inputFieldsToFormFieldsNil)())())())())(C.inputFieldsToInputCons(new w.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.inputFieldsToInputCons(new w.IsSymbol(function () {
        return "polPolType";
      }))()(C.inputFieldsToInputCons(new w.IsSymbol(function () {
        return "policy";
      }))()(C.inputFieldsToInputCons(new w.IsSymbol(function () {
        return "policyType";
      }))()(C.inputFieldsToInputNil)())())())())(C.consCountErrors(new w.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.consCountErrors(new w.IsSymbol(function () {
        return "polPolType";
      }))()(C.consCountErrors(new w.IsSymbol(function () {
        return "policy";
      }))()(C.consCountErrors(new w.IsSymbol(function () {
        return "policyType";
      }))()(C.nilCountErrors)))))(C.consAllTouched(new w.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.consAllTouched(new w.IsSymbol(function () {
        return "polPolType";
      }))()(C.consAllTouched(new w.IsSymbol(function () {
        return "policy";
      }))()(C.consAllTouched(new w.IsSymbol(function () {
        return "policyType";
      }))()(C.nilAllTouched)))))(C.setFormFieldsTouchedCons(new w.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.setFormFieldsTouchedCons(new w.IsSymbol(function () {
        return "polPolType";
      }))()(C.setFormFieldsTouchedCons(new w.IsSymbol(function () {
        return "policy";
      }))()(C.setFormFieldsTouchedCons(new w.IsSymbol(function () {
        return "policyType";
      }))()(C.setFormFieldsTouchedNil)())())())())(C.replaceFormFieldInputsTouchedCons(new w.IsSymbol(function () {
        return "appliesToProd";
      }))(K.newtypeInputField)(K.newtypeFormField)()()()(C.replaceFormFieldInputsTouchedCons(new w.IsSymbol(function () {
        return "polPolType";
      }))(K.newtypeInputField)(K.newtypeFormField)()()()(C.replaceFormFieldInputsTouchedCons(new w.IsSymbol(function () {
        return "policy";
      }))(K.newtypeInputField)(K.newtypeFormField)()()()(C.replaceFormFieldInputsTouchedCons(new w.IsSymbol(function () {
        return "policyType";
      }))(K.newtypeInputField)(K.newtypeFormField)()()()(C.replaceFormFieldInputsTouchedNil)))))(C.modifyAllCons(new w.IsSymbol(function () {
        return "appliesToProd";
      }))(K.newtypeInputFunction)(K.newtypeFormField)()()()(C.modifyAllCons(new w.IsSymbol(function () {
        return "polPolType";
      }))(K.newtypeInputFunction)(K.newtypeFormField)()()()(C.modifyAllCons(new w.IsSymbol(function () {
        return "policy";
      }))(K.newtypeInputFunction)(K.newtypeFormField)()()()(C.modifyAllCons(new w.IsSymbol(function () {
        return "policyType";
      }))(K.newtypeInputFunction)(K.newtypeFormField)()()()(C.modifyAllNil)))))(C.applyToValidationCons(new w.IsSymbol(function () {
        return "appliesToProd";
      }))(b.widgetMonad)()(ha)()()(C.applyToValidationCons(new w.IsSymbol(function () {
        return "polPolType";
      }))(b.widgetMonad)()(ha)()()(C.applyToValidationCons(new w.IsSymbol(function () {
        return "policy";
      }))(b.widgetMonad)()(ha)()()(C.applyToValidationCons(new w.IsSymbol(function () {
        return "policyType";
      }))(b.widgetMonad)()(ha)()()(C.applyToValidationNil(b.widgetMonad))))))(C.formFieldsToMaybeOutputCons(new w.IsSymbol(function () {
        return "appliesToProd";
      }))()(C.formFieldsToMaybeOutputCons(new w.IsSymbol(function () {
        return "polPolType";
      }))()(C.formFieldsToMaybeOutputCons(new w.IsSymbol(function () {
        return "policy";
      }))()(C.formFieldsToMaybeOutputCons(new w.IsSymbol(function () {
        return "policyType";
      }))()(C.formFieldsToMaybeOutputNil)())())())())(ha)(ha)(ha)(ha)(ha)(ha)(ha)(ha)(b.widgetMonad)(W)(N))(function (D) {
        if (D instanceof r.Left) return da(D.value0);
        if (D instanceof r.Right) return D = X.unwrapOutputFields(ha)(p.hmapRecord()(p.mapRecordWithIndexCons(new w.IsSymbol(function () {
          return "appliesToProd";
        }))(p.constMapping(X.unwrapField(K.newtypeOutputField)))(p.mapRecordWithIndexCons(new w.IsSymbol(function () {
          return "polPolType";
        }))(p.constMapping(X.unwrapField(K.newtypeOutputField)))(p.mapRecordWithIndexCons(new w.IsSymbol(function () {
          return "policy";
        }))(p.constMapping(X.unwrapField(K.newtypeOutputField)))(p.mapRecordWithIndexCons(new w.IsSymbol(function () {
          return "policyType";
        }))(p.constMapping(X.unwrapField(K.newtypeOutputField)))(p.mapRecordWithIndexNil)()())()())()())()()))(D.value0), n.pure(b.widgetApplicative)({
          policy: D.policy,
          policyType: D.policyType,
          appliesToProduct: D.appliesToProd
        });
        throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 102, column 3 - line 110, column 8): " + [D.constructor.name]);
      });
    });
  },
      Y = {
    polPolType: I.FreeTextPolicy.value,
    policy: "",
    policyType: u.Nothing.value,
    appliesToProd: u.Nothing.value
  },
      aa = function aa(N) {
    if (N instanceof u.Nothing) return Y;

    if (N instanceof u.Just) {
      var W = N.value0.policy;
      if (W instanceof R.FreeTextPolicy) W = I.FreeTextPolicy.value;else if (W instanceof R.RefPolicy) W = I.RefPolicy.value;else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 62, column 1 - line 62, column 38): " + [W.constructor.name]);
      var D = N.value0.policy;
      if (D instanceof R.FreeTextPolicy) D = B.toString(D.value0);else if (D instanceof R.RefPolicy) D = V.urlToString(D.value0);else throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 66, column 1 - line 66, column 36): " + [D.constructor.name]);
      return {
        polPolType: W,
        policy: D,
        policyType: N.value0.policyType,
        appliesToProd: N.value0.appliesToProduct
      };
    }

    throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 70, column 1 - line 70, column 56): " + [N.constructor.name]);
  },
      ja = {
    polPolType: fa.dummy(b.widgetMonad),
    policy: function (N) {
      return O.hoistFnE(N)(function (W) {
        return function (D) {
          var U = G.getInput(new w.IsSymbol(function () {
            return "polPolType";
          }))(ha)()(ca()(ha)(M.makeSProxiesCons(new w.IsSymbol(function () {
            return "appliesToProd";
          }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
            return "polPolType";
          }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
            return "policy";
          }))()(M.makeSProxiesCons(new w.IsSymbol(function () {
            return "policyType";
          }))()(M.makeSProxiesNil))))).polPolType)(W);
          if (U instanceof I.FreeTextPolicy) return q.mapFlipped(r.functorEither)(fa.readNEStringEi(D))(R.FreeTextPolicy.create);
          if (U instanceof I.RefPolicy) return q.mapFlipped(r.functorEither)(V.parsePublicURL(D))(R.RefPolicy.create);
          throw Error("Failed pattern match at Metajelo.Forms.InstitutionPolicy (line 128, column 6 - line 130, column 54): " + [U.constructor.name]);
        };
      });
    }(b.widgetMonad),
    policyType: fa.dummy(b.widgetMonad),
    appliesToProd: fa.dummy(b.widgetMonad)
  },
      va = function va(N) {
    var W = function W(D) {
      return f.step(D)(m.bind(b.widgetBind)(n.pure(b.widgetApplicative)(X.wrapInputFields(ha)(p.hmapRecord()(p.mapRecordWithIndexCons(new w.IsSymbol(function () {
        return "appliesToProd";
      }))(p.constMapping(X.wrapField(K.newtypeInputField)))(p.mapRecordWithIndexCons(new w.IsSymbol(function () {
        return "polPolType";
      }))(p.constMapping(X.wrapField(K.newtypeInputField)))(p.mapRecordWithIndexCons(new w.IsSymbol(function () {
        return "policy";
      }))(p.constMapping(X.wrapField(K.newtypeInputField)))(p.mapRecordWithIndexCons(new w.IsSymbol(function () {
        return "policyType";
      }))(p.constMapping(X.wrapField(K.newtypeInputField)))(p.mapRecordWithIndexNil)()())()())()())()()))(aa(D))))(function (U) {
        return m.bind(b.widgetBind)(e["div'"](b.widgetMultiAlternative(A.monoidArray))(b.widgetShiftMap)([da(I.initFormState()(C.inputFieldsToFormFieldsCons(new w.IsSymbol(function () {
          return "appliesToProd";
        }))()(C.inputFieldsToFormFieldsCons(new w.IsSymbol(function () {
          return "polPolType";
        }))()(C.inputFieldsToFormFieldsCons(new w.IsSymbol(function () {
          return "policy";
        }))()(C.inputFieldsToFormFieldsCons(new w.IsSymbol(function () {
          return "policyType";
        }))()(C.inputFieldsToFormFieldsNil)())())())())(ha)(ha)(U)(ja)), t.foldMap(t.foldableMaybe)(b.widgetMonoid(A.monoidArray))(T.ipolicyWidg)(D)]))(function (P) {
          return m.discard(m.discardUnit)(b.widgetBind)(F.liftEffect(b.widgetMonadEff(A.monoidArray))(E.logShow(F.monadEffectEffect)(y.showRecord()(y.showRecordFieldsCons(new w.IsSymbol(function () {
            return "appliesToProduct";
          }))(y.showRecordFieldsCons(new w.IsSymbol(function () {
            return "policy";
          }))(y.showRecordFieldsCons(new w.IsSymbol(function () {
            return "policyType";
          }))(y.showRecordFieldsNil)(u.showMaybe(R.showPolicyType)))(R.showPolicy))(u.showMaybe(y.showBoolean))))(P)))(function () {
            return n.pure(b.widgetApplicative)(W(new u.Just(P)));
          });
        });
      }));
    };

    return e.div_(l.shiftMapCofree(A.monoidArray))([Q.institutionPolicy])(W(N));
  };

  c.policySigArray = function (N) {
    return e.div_(l.shiftMapCofree(A.monoidArray))([Q.institutionPolicies])(I.nonEmptyArrayView(va)(N));
  };
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

  var c = a["Control.Applicative"],
      f = a["Data.Array.NonEmpty.Internal"],
      k = a["Data.Foldable"],
      g = a["Data.Functor"],
      b = a["Data.Maybe"],
      e = a["Data.Show"],
      d = a["Data.Traversable"],
      n = a["Data.Unit"],
      m = a["Data.XPath"],
      l = a.Effect,
      r = a["Metajelo.Types"],
      x = a["Metajelo.XPaths"],
      z = a["Nonbili.DOM"],
      t = a["Text.Email.Parser"],
      q = a["Text.URL.Validate"],
      u = a["Web.DOM.Document"],
      A = a["Web.DOM.Element"],
      y = a["Web.DOM.Node"],
      B = function B(N) {
    return function (W) {
      return function (D) {
        return function (U) {
          var P = A.fromNode(D);
          return function () {
            d.sequence(d.traversableMaybe)(l.applicativeEffect)(g.mapFlipped(b.functorMaybe)(P)(function (J) {
              return A.setAttribute(N)(e.show(r.showIdentifierType)(U))(J);
            }))();
            return n.unit;
          };
        };
      };
    };
  },
      w = a["Data.String.NonEmpty.Internal"].toString,
      F = function F(N) {
    return function (W) {
      return function (D) {
        return function (U) {
          return function () {
            y.setTextContent(w(U.id))(D)();
            return B(N)(W)(D)(U.idType)();
          };
        };
      };
    };
  },
      E = function E(N) {
    return function (W) {
      return function () {
        var D = x.unsafeSingleNodeValue(N)(N.recNode)(m.xx(m.stringXPath)(x.idP))();
        return F(x.idTypeAT)(N)(D)(W)();
      };
    };
  },
      v = function v(N) {
    return function (W) {
      return function () {
        d.sequence(d.traversableMaybe)(l.applicativeEffect)(g.map(b.functorMaybe)(y.setTextContent(w(N)))(W))();
        return n.unit;
      };
    };
  },
      C = function C(N) {
    return function (W) {
      return function () {
        var D = N.xevalRoot.nodeMay(x.dateRootP)();
        return v(W)(D)();
      };
    };
  },
      L = function L(N) {
    return function (W) {
      return function () {
        var D = N.xevalRoot.nodeMay(x.lastModRootP)();
        return v(W)(D)();
      };
    };
  },
      G = function G(N) {
    return function (W) {
      var D = A.prefix(N.recElem);
      return function () {
        if (D instanceof b.Just) var U = D.value0 + ":";else if (D instanceof b.Nothing) U = "";else throw Error("Failed pattern match at Metajelo.XPaths.Write (line 235, column 20 - line 237, column 18): " + [D.constructor.name]);
        U += W;
        return u.createElementNS(new b.Just(N.ns))(U)(N.doc)();
      };
    };
  },
      X = function X(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = G(N)(D)();
          y.appendChild(A.toNode(U))(W)();
          return U;
        };
      };
    };
  },
      M = function M(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = g.map(l.functorEffect)(A.toNode)(X(N)(W)(x.basicMetaP))(),
              P = g.map(l.functorEffect)(A.toNode)(X(N)(U)(x.titleP))();
          y.setTextContent(w(D.title))(P)();
          P = g.map(l.functorEffect)(A.toNode)(X(N)(U)(x.creatorP))();
          y.setTextContent(w(D.creator))(P)();
          U = g.map(l.functorEffect)(A.toNode)(X(N)(U)(x.pubYearP))();
          return y.setTextContent(w(D.publicationYear))(U)();
        };
      };
    };
  },
      K = function K(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = X(N)(W)(x.instContactP)();
          d.sequence(d.traversableMaybe)(l.applicativeEffect)(g.mapFlipped(b.functorMaybe)(D.contactType)(function (P) {
            return A.setAttribute(x.instContactTypeAT)(e.show(r.showInstitutionContactType)(P))(U);
          }))();
          return y.setTextContent(t.toString(D.emailAddress))(A.toNode(U))();
        };
      };
    };
  },
      O = function O(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = g.map(l.functorEffect)(A.toNode)(X(N)(W)(x.instIdP))();
          return F(x.idTypeAT)(N)(U)(D)();
        };
      };
    };
  },
      p = function p(N) {
    return function (W) {
      return k.for_(l.applicativeEffect)(f.foldableNonEmptyArray)(W)(function (D) {
        return function () {
          var U = X(N)(N.recNode)(x.relIdP)(),
              P = A.toNode(U);
          y.setTextContent(w(D.id))(P)();
          A.setAttribute(x.relIdTypeAT)(e.show(r.showIdentifierType)(D.idType))(U)();
          return A.setAttribute(x.relTypeAT)(e.show(r.showRelationType)(D.relType))(U)();
        };
      });
    };
  },
      Q = function Q(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = g.map(l.functorEffect)(A.toNode)(X(N)(W)(x.resIdP))();
          return F(x.resIdTypeAT)(N)(U)(D)();
        };
      };
    };
  },
      I = function I(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = X(N)(W)(x.resMetaSourceP)();
          y.setTextContent(q.urlToString(D.url))(A.toNode(U))();
          return A.setAttribute(x.relTypeAT)(e.show(r.showRelationType)(D.relationType))(U)();
        };
      };
    };
  },
      R = function R(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = X(N)(W)(x.resTypeP)();
          y.setTextContent(D.description)(A.toNode(U))();
          return A.setAttribute(x.resTypeGenAT)(e.show(r.showResourceTypeGeneral)(D.generalType))(U)();
        };
      };
    };
  },
      fa = function fa(N) {
    return function (W) {
      return function (D) {
        return function (U) {
          return function () {
            var P = g.map(l.functorEffect)(A.toNode)(X(W)(D)(N))();
            return y.setTextContent(U)(P)();
          };
        };
      };
    };
  },
      T = function T(N) {
    return function (W) {
      return function (D) {
        return function (U) {
          return fa(N)(W)(D)(w(U));
        };
      };
    };
  },
      V = function V(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = g.map(l.functorEffect)(A.toNode)(X(N)(W)(x.formatCP))();
          return k.for_(l.applicativeEffect)(k.foldableArray)(D)(function (P) {
            return T(x.formatP)(N)(U)(P);
          })();
        };
      };
    };
  },
      ca = function ca(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = X(N)(W)(x.instPolicyP)(),
              P = A.toNode(U);
          d.sequence(d.traversableMaybe)(l.applicativeEffect)(g.mapFlipped(b.functorMaybe)(D.policyType)(function (J) {
            return A.setAttribute(x.polTypeAT)(e.show(r.showPolicyType)(J))(U);
          }))();
          d.sequence(d.traversableMaybe)(l.applicativeEffect)(g.mapFlipped(b.functorMaybe)(D.appliesToProduct)(function (J) {
            return A.setAttribute(x.appliesToProdAT)(e.show(e.showBoolean)(J))(U);
          }))();
          if (D.policy instanceof r.FreeTextPolicy) return T(x.freeTextPolicyP)(N)(P)(D.policy.value0)();
          if (D.policy instanceof r.RefPolicy) return T(x.refPolicyP)(N)(P)(q.urlToNEString(D.policy.value0))();
          throw Error("Failed pattern match at Metajelo.XPaths.Write (line 202, column 3 - line 205, column 27): " + [D.policy.constructor.name]);
        };
      };
    };
  },
      ha = function ha(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = g.map(l.functorEffect)(A.toNode)(X(N)(W)(x.instPolicyCP))();
          return k.for_(l.applicativeEffect)(f.foldableNonEmptyArray)(D)(function (P) {
            return ca(N)(U)(P);
          })();
        };
      };
    };
  },
      da = function da(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = g.map(l.functorEffect)(A.toNode)(X(N)(W)(x.instSustainP))();
          T(x.missionUrlP)(N)(U)(q.urlToNEString(D.missionStatementURL))();
          return T(x.fundingUrlP)(N)(U)(q.urlToNEString(D.fundingStatementURL))();
        };
      };
    };
  },
      Y = function Y(N) {
    return function (W) {
      return function (D) {
        return function () {
          var U = X(N)(W)(x.locP)(),
              P = A.toNode(U);
          O(N)(P)(D.institutionID)();
          T(x.instNameP)(N)(P)(D.institutionName)();
          fa(x.instTypeP)(N)(P)(e.show(r.showInstitutionType)(D.institutionType))();
          d.sequence(d.traversableMaybe)(l.applicativeEffect)(g.mapFlipped(b.functorMaybe)(D.superOrganizationName)(function (J) {
            return T(x.superOrgNameP)(N)(P)(J);
          }))();
          K(N)(P)(D.institutionContact)();
          da(N)(P)(D.institutionSustainability)();
          ha(N)(P)(D.institutionPolicies)();
          return fa(x.versioningP)(N)(P)(e.show(e.showBoolean)(D.versioning))();
        };
      };
    };
  },
      aa = function aa(N) {
    return function (W) {
      return function () {
        var D = x.unsafeSingleNodeValue(N)(N.recNode)(m.xx(m.stringXPath)(x.sProdCP))(),
            U = g.map(l.functorEffect)(A.toNode)(X(N)(D)(x.sProdP))();
        M(N)(U)(W.basicMetadata)();
        d.sequence(d.traversableMaybe)(l.applicativeEffect)(g.mapFlipped(b.functorMaybe)(W.resourceID)(function (P) {
          return Q(N)(U)(P);
        }))();
        R(N)(U)(W.resourceType)();
        V(N)(U)(W.format)();
        d.sequence(d.traversableMaybe)(l.applicativeEffect)(g.mapFlipped(b.functorMaybe)(W.resourceMetadataSource)(function (P) {
          return I(N)(U)(P);
        }))();
        return Y(N)(U)(W.location)();
      };
    };
  },
      ja = function ja(N) {
    return function (W) {
      return k.for_(l.applicativeEffect)(f.foldableNonEmptyArray)(W)(function (D) {
        return aa(N)(D);
      });
    };
  },
      va = function va(N) {
    return function (W) {
      return function () {
        E(N)(W.identifier)();
        C(N)(W.date)();
        L(N)(W.lastModified)();
        p(N)(W.relatedIdentifiers)();
        return ja(N)(W.supplementaryProducts)();
      };
    };
  };

  a["Metajelo.XPaths.Write"].recordToString = function (N) {
    return function () {
      var W = x.getDefaultParseEnv('<?xml version="1.0" encoding="UTF-8"?>\n<record xmlns:re3="http://www.re3data.org/schema/2-2"\n xmlns:datacite="http://datacite.org/schema/kernel-4"\n xmlns="http://ourdomain.cornell.edu/reuse/v.01"\n xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n xsi:schemaLocation="http://ourdomain.cornell.edu/reuse/v.01 file:/Users/clagoze/Downloads/metajelo-master/schema/xsd/reproMetadata0.7.xsd">\n    <identifier></identifier>\n    <date></date>\n    <lastModified></lastModified>\n    <supplementaryProducts>\n    </supplementaryProducts>\n</record>\n')();
      va(W)(N)();
      W = u.documentElement(W.doc)();
      return b.maybe(c.pure(l.applicativeEffect)(""))(z.outerHTML)(W)();
    };
  };
})(PS);

(function (a) {
  a.pickFn = function (c, f) {
    for (var k = {}, g = 0; g < c.length; g++) {
      "undefined" !== typeof f[c[g]] && (k[c[g]] = f[c[g]]);
    }

    return k;
  };
})(PS.Option = PS.Option || {});

(function (a) {
  a["Record.Extra"] = a["Record.Extra"] || {};

  var c = a["Record.Extra"],
      f = a["Data.List.Types"],
      k = a["Data.Monoid"],
      g = a["Data.Symbol"],
      b = a["Type.Data.RowList"],
      e = function e(d) {
    this.keysImpl = d;
  };

  a = new e(function (d) {
    return k.mempty(f.monoidList);
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
        var l = g.reflectSymbol(d)(g.SProxy.value);
        return new f.Cons(l, m);
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
      k = a["Control.Monad.State.Class"],
      g = a["Control.Monad.State.Trans"],
      b = a["Data.Array"],
      e = a["Data.Function.Uncurried"],
      d = a["Data.Identity"],
      n = a["Data.List.Types"],
      m = a["Data.Maybe"],
      l = a["Data.Symbol"],
      r = a["Foreign.Object"],
      x = a.Record,
      z = a["Record.Extra"],
      t = a["Type.Data.Row"],
      q = function () {
    function K() {}

    K.value = new K();
    return K;
  }(),
      u = function u(K) {
    this.getAllOption = K;
  },
      A = function A(K) {
    this["getAll'"] = K;
  },
      y = function y(K) {
    this.fromRecordOption = K;
  },
      B = function B(K) {
    this["fromRecord'"] = K;
  },
      w = function w(K) {
    return function (O) {
      return function (p) {
        p = b.fromFoldable(n.foldableList)(z.keys()(p)(t.RProxy.value));
        return e.runFn2(f.pickFn)(p);
      };
    };
  };

  a = new u(function (K) {
    return function (O) {
      return new m.Just({});
    };
  });

  var F = r.empty,
      E = new y(function (K) {
    return function (O) {
      return F;
    };
  }),
      v = function v(K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          var I = l.reflectSymbol(K)(l.SProxy.value),
              R = r.alter(function (fa) {
            return O(fa);
          })(I)(Q);
          Q = O(r.lookup(I)(Q));
          return {
            option: R,
            value: Q
          };
        };
      };
    };
  },
      C = function C(K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          return function (I) {
            return v(K)(function (R) {
              return m.Nothing.value;
            })(Q)(I).option;
          };
        };
      };
    };
  },
      L = function L(K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          return v(K)(function (I) {
            return I;
          })(p)(Q).value;
        };
      };
    };
  },
      G = function G(K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          return function (I) {
            return v(K)(function (R) {
              return new m.Just(Q);
            })(p)(I).option;
          };
        };
      };
    };
  },
      X = function X(K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          return function (I) {
            if (Q instanceof m.Just) return G(K)()(p)(Q.value0)(I);
            if (Q instanceof m.Nothing) return I;
            throw Error("Failed pattern match at Option (line 1408, column 25 - line 1410, column 28): " + [Q.constructor.name]);
          };
        };
      };
    };
  },
      M = function M(K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          return function (I) {
            return function (R) {
              return v(K)(function (fa) {
                return new m.Just(I);
              })(Q)(R).option;
            };
          };
        };
      };
    };
  };

  c.fromRecord = function (K) {
    return K["fromRecord'"];
  };

  c.empty = F;
  c.get = L;

  c.getAll = function (K) {
    return K["getAll'"];
  };

  c.getSubset = function (K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          return function (I) {
            return (0, Q["getAll'"])(w()()(p)(I));
          };
        };
      };
    };
  };

  c.getWithDefault = function (K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          return function (I) {
            I = L(K)()(Q)(I);
            if (I instanceof m.Just) return I.value0;
            if (I instanceof m.Nothing) return p;
            throw Error("Failed pattern match at Option (line 1257, column 39 - line 1259, column 32): " + [I.constructor.name]);
          };
        };
      };
    };
  };

  c.maySetOptState = function (K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          return function (I) {
            return k.put(g.monadStateStateT(d.monadIdentity))(X(K)()(p)(Q)(I));
          };
        };
      };
    };
  };

  c.fromRecordAny = function (K) {
    return function (O) {
      return new B((0, K.fromRecordOption)(q.value));
    };
  };

  c.fromRecordOptionNil = E;

  c.fromRecordOptionCons = function (K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          return function (I) {
            return function (R) {
              return new y(function (fa) {
                return function (T) {
                  var V = x["delete"](K)()()(l.SProxy.value)(T);
                  V = (0, O.fromRecordOption)(q.value)(V);
                  T = x.get(K)()(l.SProxy.value)(T);
                  return M(K)()()(l.SProxy.value)(T)(V);
                };
              });
            };
          };
        };
      };
    };
  };

  c.getAllAny = function (K) {
    return function (O) {
      return new A((0, O.getAllOption)(q.value));
    };
  };

  c.getAllOptionNil = a;

  c.getAllOptionCons = function (K) {
    return function (O) {
      return function (p) {
        return function (Q) {
          return function (I) {
            return function (R) {
              return new u(function (fa) {
                return function (T) {
                  var V = C(K)()()(l.SProxy.value)(T);
                  V = (0, R.getAllOption)(q.value)(V);
                  T = L(K)()(l.SProxy.value)(T);

                  if (V instanceof m.Just) {
                    if (T instanceof m.Just) return new m.Just(x.insert(K)()()(l.SProxy.value)(T.value0)(V.value0));
                    if (T instanceof m.Nothing) return m.Nothing.value;
                    throw Error("Failed pattern match at Option (line 567, column 31 - line 569, column 47): " + [T.constructor.name]);
                  }

                  if (V instanceof m.Nothing) return m.Nothing.value;
                  throw Error("Failed pattern match at Option (line 566, column 27 - line 570, column 45): " + [V.constructor.name]);
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

  a["Web.File.FileList"].item = function (k) {
    var g = c._item(k);

    return function (b) {
      return f.toMaybe(g(b));
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
      return function (k) {
        return function (g) {
          return function () {
            return g.addEventListener(c, f, k);
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
      k = a["Data.Either"],
      g = a["Data.List.Types"],
      b = a["Data.Monoid"],
      e = a["Data.Show"],
      d = a["Effect.Aff"],
      n = a["Effect.Exception"],
      m = a.Foreign,
      l = a["Web.Event.EventTarget"],
      r = a["Web.File.FileReader"],
      x = a["Web.HTML.Event.EventTypes"];

  a = function (z) {
    return function (t) {
      return function (q) {
        return d.makeAff(function (u) {
          var A = function A(y) {
            return u(k.Right.create(y));
          };

          return function () {
            var y = r.fileReader(),
                B = r.toEventTarget(y),
                w = l.eventListener(function (E) {
              return u(k.Left.create(n.error("error")));
            })(),
                F = l.eventListener(function (E) {
              return function () {
                var v = r.result(y)();
                return k.either(function (C) {
                  return u(k.Left.create(n.error(e.show(g.showNonEmptyList(m.showForeignError))(C))));
                })(A)(f.runExcept(z(v)))();
              };
            })();
            l.addEventListener(x.error)(w)(!1)(B)();
            l.addEventListener(x.load)(F)(!1)(B)();
            t(q)(y)();
            return b.mempty(d.monoidCanceler);
          };
        });
      };
    };
  }(m.readString)(r.readAsText);

  c.readAsText = a;
})(PS);

(function (a) {
  a._read = function (c, f, k) {
    var g = Object.prototype.toString.call(k);
    return 0 === g.indexOf("[object HTML") && g.indexOf("Element]") === g.length - 8 ? f(k) : c;
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
      k = a["Data.Maybe"];

  c.fromElement = function (g) {
    return f._read(k.Nothing.value, k.Just.create, g);
  };

  c.click = f.click;
})(PS);

(function (a) {
  a._files = function (c) {
    return function () {
      return c.files;
    };
  };
})(PS["Web.HTML.HTMLInputElement"] = PS["Web.HTML.HTMLInputElement"] || {});

(function (a) {
  a["Web.HTML.HTMLInputElement"] = a["Web.HTML.HTMLInputElement"] || {};
  var c = a["Web.HTML.HTMLInputElement"],
      f = a["Web.HTML.HTMLInputElement"],
      k = a["Data.Functor"],
      g = a["Data.Nullable"],
      b = a.Effect;
  a = a["Web.Internal.FFI"].unsafeReadProtoTagged("HTMLInputElement");

  var e = function () {
    var d = k.map(b.functorEffect)(g.toMaybe);
    return function (n) {
      return d(f._files(n));
    };
  }();

  c.fromElement = a;
  c.files = e;
})(PS);

(function (a) {
  a["Metajelo.UI"] = a["Metajelo.UI"] || {};

  var c = a["Metajelo.UI"],
      f = a["Concur.Core.FRP"],
      k = a["Concur.Core.LiftWidget"],
      g = a["Concur.Core.Props"],
      b = a["Concur.Core.Types"],
      e = a["Concur.React.DOM"],
      d = a["Concur.React.Props"],
      n = a["Concur.React.Run"],
      m = a["Control.Applicative"],
      l = a["Control.Bind"],
      r = a["Control.Cofree"],
      x = a["Control.Monad.Maybe.Trans"],
      z = a["Control.Monad.State"],
      t = a["Control.Monad.State.Class"],
      q = a["Control.Monad.State.Trans"],
      u = a["Control.Plus"],
      A = a["Data.Array"],
      y = a["Data.Array.NonEmpty"],
      B = a["Data.Array.NonEmpty.Internal"],
      w = a["Data.Either"],
      F = a["Data.Foldable"],
      E = a["Data.Functor"],
      v = a["Data.Identity"],
      C = a["Data.Maybe"],
      L = a["Data.Maybe.First"],
      G = a["Data.Monoid"],
      X = a["Data.Semigroup"],
      M = a["Data.Show"],
      K = a["Data.String.Common"],
      O = a["Data.String.NonEmpty.Internal"],
      p = a["Data.Symbol"],
      Q = a["Data.Traversable"],
      I = a["Data.Tuple"],
      R = a.Effect,
      fa = a["Effect.Aff.Class"],
      T = a["Effect.Class"],
      V = a["Effect.Class.Console"],
      ca = a["Effect.Exception"],
      ha = a["Effect.Now"],
      da = a.Global,
      Y = a["Metajelo.CSS.UI.ClassProps"],
      aa = a["Metajelo.CSS.Web.ClassProps"],
      ja = a["Metajelo.FormUtil"],
      va = a["Metajelo.Forms.InstitutionContact"],
      N = a["Metajelo.Forms.InstitutionPolicy"],
      W = a["Metajelo.Types"],
      D = a["Metajelo.View"],
      U = a["Metajelo.XPaths"],
      P = a["Metajelo.XPaths.Read"],
      J = a["Metajelo.XPaths.Write"],
      na = a["Nonbili.DOM"],
      H = a.Option,
      Z = a["Record.Extra"],
      ka = a["Web.DOM.Document"],
      ia = a["Web.DOM.Element"],
      la = a["Web.File.File"],
      qa = a["Web.File.FileList"],
      sa = a["Web.File.FileReader.Aff"],
      xa = a["Web.HTML"],
      Ga = a["Web.HTML.HTMLDocument"],
      Ba = a["Web.HTML.HTMLElement"],
      Ja = a["Web.HTML.HTMLInputElement"],
      Ka = a["Web.HTML.Window"],
      S = function S(ea) {
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.tooltip])(ea);
  };

  a = e.div_(b.widgetShiftMap)([Y.tooltip])(u.empty(b.widgetPlus(G.monoidArray)));

  var ua = function ua(ea) {
    return function () {
      var ma = xa.window();
      ma = Ka.document(ma)();
      ma = Ga.toDocument(ma);
      ma = ka.createElement("a")(ma)();
      ia.setAttribute("download")("metajelo.xml")(ma)();
      ia.setAttribute("href")("data:text/plain;charset=utf-8," + ea)(ma)();
      ma = Ba.fromElement(ma);
      if (ma instanceof C.Just) ma = Ba.click(ma.value0);else if (ma instanceof C.Nothing) ma = V.log(T.monadEffectEffect)("Couldn't create HTMLElement to click with encoded string" + ea);else throw Error("Failed pattern match at Metajelo.UI (line 112, column 26 - line 116, column 18): " + [ma.constructor.name]);
      return ma;
    };
  },
      Fa = function Fa(ea) {
    return function (ma) {
      return H.getWithDefault(ea)()(H.empty);
    };
  },
      Oa = function Oa(ea) {
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.format])(S(ja.textInput(ea)));
  },
      eb = function eb(ea) {
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.formatList])(ja.arrayView(Oa)(ea));
  },
      Ya = function Ya(ea) {
    return function () {
      return {
        lastModified: l.join(R.bindEffect)(E.map(R.functorEffect)(E.map(E.functorFn)(P.rightOrThrow)(ja.formatXsdDate))(ha.nowDateTime))(),
        date: ea.date,
        identifier: ea.identifier,
        relatedIdentifiers: ea.relatedIdentifiers,
        supplementaryProducts: ea.supplementaryProducts
      };
    };
  },
      Pa = function Pa(ea) {
    var ma = H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "fundingStatementURL";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "missionStatementURL";
    }))(H.fromRecordOptionNil)()()()())()()()())())(ea),
        pa = new w.Right(ea.missionStatementURL),
        ra = new w.Right(ea.fundingStatementURL);
    return z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(p.SProxy.value)(new C.Just(pa))))(function () {
      return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(p.SProxy.value)(new C.Just(ra)));
    }))(ma);
  },
      Ia = function Ia(ea) {
    var ma = new w.Right(ea.url);
    ea = H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "relationType";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "url";
    }))(H.fromRecordOptionNil)()()()())()()()())())(ea);
    return z.execState(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
      return "url_Ei";
    }))()(p.SProxy.value)(new C.Just(ma))))(ea);
  },
      Za = function Za(ea) {
    var ma = H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "institutionContact";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "institutionID";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "institutionName";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "institutionPolicies";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "institutionSustainability";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "institutionType";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "superOrganizationName";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "versioning";
    }))(H.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())()()()())()()()())())(ea),
        pa = H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "id";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "idType";
    }))(H.fromRecordOptionNil)()()()())()()()())())(ea.institutionID),
        ra = Pa(ea.institutionSustainability),
        ta = y.length(ea.institutionPolicies);
    return z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
      return "institutionID_opt";
    }))()(p.SProxy.value)(new C.Just(pa))))(function () {
      return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
        return "_numPolicies";
      }))()(p.SProxy.value)(new C.Just(ta))))(function () {
        return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
          return "iSustain_opt";
        }))()(p.SProxy.value)(new C.Just(ra)));
      });
    }))(ma);
  },
      Qa = function Qa(ea) {
    var ma = H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "basicMetadata";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "format";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "location";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "resourceID";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "resourceMetadataSource";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "resourceType";
    }))(H.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())()()()())())(ea),
        pa = H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "description";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "generalType";
    }))(H.fromRecordOptionNil)()()()())()()()())())(ea.resourceType),
        ra = E.map(C.functorMaybe)(H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "id";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "idType";
    }))(H.fromRecordOptionNil)()()()())()()()())()))(ea.resourceID),
        ta = E.map(C.functorMaybe)(Ia)(ea.resourceMetadataSource),
        wa = Za(ea.location),
        Aa = H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "creator";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "publicationYear";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "title";
    }))(H.fromRecordOptionNil)()()()())()()()())()()()())())(ea.basicMetadata),
        Da = A.length(ea.format);
    return z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(p.SProxy.value)(new C.Just(Aa))))(function () {
      return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
        return "resourceID_opt";
      }))()(p.SProxy.value)(ra)))(function () {
        return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
          return "resourceType_opt";
        }))()(p.SProxy.value)(new C.Just(pa))))(function () {
          return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
            return "_numFormats";
          }))()(p.SProxy.value)(new C.Just(Da))))(function () {
            return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(p.SProxy.value)(ta)))(function () {
              return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(p.SProxy.value)(new C.Just(wa)));
            });
          });
        });
      });
    }))(ma);
  },
      Ra = function Ra(ea) {
    var ma = E.map(B.functorNonEmptyArray)(Qa)(ea.supplementaryProducts),
        pa = E.map(B.functorNonEmptyArray)(H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "id";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "idType";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "relType";
    }))(H.fromRecordOptionNil)()()()())()()()())()()()())()))(ea.relatedIdentifiers),
        ra = H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "date";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "identifier";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "lastModified";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "relatedIdentifiers";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "supplementaryProducts";
    }))(H.fromRecordOptionNil)()()()())()()()())()()()())()()()())()()()())())(ea),
        ta = H.fromRecord(H.fromRecordAny(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "id";
    }))(H.fromRecordOptionCons(new p.IsSymbol(function () {
      return "idType";
    }))(H.fromRecordOptionNil)()()()())()()()())())(ea.identifier),
        wa = y.length(ea.supplementaryProducts),
        Aa = y.length(ea.relatedIdentifiers);
    return z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
      return "identifier_opt";
    }))()(p.SProxy.value)(new C.Just(ta))))(function () {
      return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
        return "_numRelIds";
      }))()(p.SProxy.value)(new C.Just(Aa))))(function () {
        return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
          return "relId_opts";
        }))()(p.SProxy.value)(new C.Just(pa))))(function () {
          return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
            return "_numSupProds";
          }))()(p.SProxy.value)(new C.Just(wa))))(function () {
            return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
              return "supProd_opts";
            }))()(p.SProxy.value)(new C.Just(ma)));
          });
        });
      });
    }))(ra);
  },
      Sa = function () {
    var ea = l.bind(b.widgetBind)(e.input(k.widgetLiftWidget)([d._type("file"), E.map(g.functorProps)(ja.evTargetElem)(d.onChange)]))(function (ma) {
      return l.bind(b.widgetBind)(T.liftEffect(b.widgetMonadEff(G.monoidArray))(x.runMaybeT(l.bind(x.bindMaybeT(R.monadEffect))(ma)(function (pa) {
        return l.bind(x.bindMaybeT(R.monadEffect))(x.MaybeT(m.pure(R.applicativeEffect)(Ja.fromElement(pa))))(function (ra) {
          return l.bind(x.bindMaybeT(R.monadEffect))(x.MaybeT(Ja.files(ra)))(function (ta) {
            return l.bind(x.bindMaybeT(R.monadEffect))(x.MaybeT(m.pure(R.applicativeEffect)(qa.item(0)(ta))))(function (wa) {
              return m.pure(x.applicativeMaybeT(R.monadEffect))(la.toBlob(wa));
            });
          });
        });
      }))))(function (pa) {
        if (pa instanceof C.Nothing) return ea;
        if (pa instanceof C.Just) return l.bind(b.widgetBind)(fa.liftAff(b.widgetMonadAff(G.monoidArray))(sa.readAsText(pa.value0)))(function (ra) {
          return l.bind(b.widgetBind)(T.liftEffect(b.widgetMonadEff(G.monoidArray))(U.getDefaultParseEnv(ra)))(function (ta) {
            return l.bind(b.widgetBind)(T.liftEffect(b.widgetMonadEff(G.monoidArray))(ca["try"](P.readRecord(ta))))(function (wa) {
              if (wa instanceof w.Right) return m.pure(b.widgetApplicative)(wa.value0);

              if (wa instanceof w.Left) {
                var Aa = wa.value0;
                wa = e.div_(b.widgetShiftMap)([aa.errorDisplayBox]);
                var Da = e.div_(b.widgetShiftMap)([]),
                    Ea = e.span(b.widgetMultiAlternative(G.monoidArray))(b.widgetShiftMap)([aa.errorDisplay]),
                    Ca = e.text(k.widgetLiftWidget);
                Aa = "Couldn't decode MetajeloXML: " + M.show(ca.showError)(Aa);
                return wa(Da(Ea([Ca(Aa)])));
              }

              throw Error("Failed pattern match at Metajelo.UI (line 138, column 11 - line 140, column 37): " + [wa.constructor.name]);
            });
          });
        });
        throw Error("Failed pattern match at Metajelo.UI (line 132, column 7 - line 140, column 37): " + [pa.constructor.name]);
      });
    });
    return f.loopW(H.empty)(function (ma) {
      return e.div_(b.widgetShiftMap)([])(l.bind(b.widgetBind)(ea)(function (pa) {
        return m.pure(b.widgetApplicative)(Ra(pa));
      }));
    });
  }(),
      Ta = function Ta(ea) {
    var ma = e.div_(b.widgetShiftMap)([aa.errorDisplayBox])(e.div_(b.widgetShiftMap)([])(e.span(b.widgetMultiAlternative(G.monoidArray))(b.widgetShiftMap)([aa.errorDisplay])([e.text(k.widgetLiftWidget)("Couldn't encode XML, please copy to clipboard instead.")]))),
        pa = function pa(ra) {
      return function (ta) {
        var wa = function wa(Aa) {
          return f.step(Aa)(l.bind(b.widgetBind)(e.button_(b.widgetShiftMap)([Y.downloadBtn, d.onClick, d.disabled(K["null"](Aa))])(e.text(k.widgetLiftWidget)("Download")))(function () {
            return l.bind(b.widgetBind)(T.liftEffect(b.widgetMonadEff(G.monoidArray))(ra))(function () {
              return m.pure(b.widgetApplicative)(wa(Aa));
            });
          }));
        };

        return f.dyn(wa(ta));
      };
    };

    return e.div_(b.widgetShiftMap)([])(function () {
      var ra = da.encodeURIComponent(ea);
      return l.bind(b.widgetBind)(T.liftEffect(b.widgetMonadEff(G.monoidArray))(ua(C.fromMaybe("")(ra))))(function (ta) {
        return C.maybe(ma)(pa(ta))(ra);
      });
    }());
  },
      Ua = function Ua(ea) {
    var ma = function ma(pa) {
      return f.step(pa)(l.bind(b.widgetBind)(e.button_(b.widgetShiftMap)([Y.clipBtn, d.onClick, d.disabled(K["null"](pa))])(e.text(k.widgetLiftWidget)("Copy to Clipboard")))(function () {
        return l.bind(b.widgetBind)(T.liftEffect(b.widgetMonadEff(G.monoidArray))(na.copyToClipboard(pa)))(function () {
          return m.pure(b.widgetApplicative)(ma(pa));
        });
      }));
    };

    return f.dyn(ma(ea));
  },
      Va = function Va(ea) {
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.sustainability])(l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.span_(r.shiftMapCofree(G.monoidArray))([Y.missionStatement])(ja.urlInput(H.getWithDefault(new p.IsSymbol(function () {
      return "missionUrl_Ei";
    }))()(new w.Left(""))(p.SProxy.value)(ea))))(function (ma) {
      var pa = w.hush(ma);
      return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.span_(r.shiftMapCofree(G.monoidArray))([Y.fundingStatement])(ja.urlInput(H.getWithDefault(new p.IsSymbol(function () {
        return "fundingUrl_Ei";
      }))()(new w.Left(""))(p.SProxy.value)(ea))))(function (ra) {
        var ta = w.hush(ra);
        return m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
          return "missionUrl_Ei";
        }))()(p.SProxy.value)(new C.Just(ma))))(function () {
          return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
            return "missionStatementURL";
          }))()(p.SProxy.value)(pa)))(function () {
            return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
              return "fundingUrl_Ei";
            }))()(p.SProxy.value)(new C.Just(ra))))(function () {
              return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                return "fundingStatementURL";
              }))()(p.SProxy.value)(ta));
            });
          });
        }))(ea));
      });
    }));
  },
      $a = function $a(ea) {
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.resourceType])(l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.resourceTypeGen])(ja.menuSignal(W.boundedEnumResourceTypeGeneral)(ja.isOptionResourceTypeGeneral)(H.get(new p.IsSymbol(function () {
      return "generalType";
    }))()(p.SProxy.value)(ea)))))(function (ma) {
      return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.resourceTypeDescr])(ja.textInput(l.join(C.bindMaybe)(E.map(C.functorMaybe)(O.fromString)(H.get(new p.IsSymbol(function () {
        return "description";
      }))()(p.SProxy.value)(ea)))))))(function (pa) {
        return m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
          return "description";
        }))()(p.SProxy.value)(E.map(C.functorMaybe)(O.toString)(pa))))(function () {
          return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
            return "generalType";
          }))()(p.SProxy.value)(ma));
        }))(ea));
      });
    }));
  },
      ab = function ab(ea) {
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.resourceMDSource])(l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.url])(ja.urlInput(H.getWithDefault(new p.IsSymbol(function () {
      return "url_Ei";
    }))()(new w.Left(""))(p.SProxy.value)(ea)))))(function (ma) {
      var pa = w.hush(ma);
      return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.relType])(ja.menuSignal(W.boundedEnumRelationType)(ja.isOptionRelationType)(H.get(new p.IsSymbol(function () {
        return "relationType";
      }))()(p.SProxy.value)(ea)))))(function (ra) {
        return m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
          return "url_Ei";
        }))()(p.SProxy.value)(new C.Just(ma))))(function () {
          return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
            return "url";
          }))()(p.SProxy.value)(pa)))(function () {
            return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
              return "relationType";
            }))()(p.SProxy.value)(ra));
          });
        }))(ea));
      });
    }));
  },
      Wa = function Wa(ea) {
    var ma = C.fromMaybe(H.empty)(ea);
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.relatedId])(l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.id])(ja.textInput(H.get(new p.IsSymbol(function () {
      return "id";
    }))()(p.SProxy.value)(ma)))))(function (pa) {
      return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.idType])(ja.menuSignal(W.boundedEnumIdentifierType)(ja.isOptionIdentifierType)(H.get(new p.IsSymbol(function () {
        return "idType";
      }))()(p.SProxy.value)(ma)))))(function (ra) {
        return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.relType])(ja.menuSignal(W.boundedEnumRelationType)(ja.isOptionRelationType)(H.get(new p.IsSymbol(function () {
          return "relType";
        }))()(p.SProxy.value)(ma)))))(function (ta) {
          return m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(C.Just.create(z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
            return "id";
          }))()(p.SProxy.value)(pa)))(function () {
            return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
              return "idType";
            }))()(p.SProxy.value)(ra)))(function () {
              return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                return "relType";
              }))()(p.SProxy.value)(ta));
            });
          }))(ma)));
        });
      });
    }));
  },
      bb = function bb(ea) {
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.relatedIds])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.relatedIdsHeader])(e.div_(r.shiftMapCofree(G.monoidArray))([Y.relatedIdList])(ja.nonEmptyArrayView(Wa)(ea))));
  },
      La = function La(ea) {
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.identifier])(l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.id])(ja.textInput(H.get(new p.IsSymbol(function () {
      return "id";
    }))()(p.SProxy.value)(ea)))))(function (ma) {
      return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.idType])(ja.menuSignal(W.boundedEnumIdentifierType)(ja.isOptionIdentifierType)(H.get(new p.IsSymbol(function () {
        return "idType";
      }))()(p.SProxy.value)(ea)))))(function (pa) {
        return m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
          return "id";
        }))()(p.SProxy.value)(ma)))(function () {
          return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
            return "idType";
          }))()(p.SProxy.value)(pa));
        }))(ea));
      });
    }));
  },
      cb = function cb(ea) {
    var ma = function ma(ra) {
      return e.div(b.widgetMultiAlternative(G.monoidArray))(b.widgetShiftMap)([Y.locPreview])([e["br'"](k.widgetLiftWidget), F.foldMap(F.foldableMaybe)(b.widgetMonoid(G.monoidArray))(function (ta) {
        return F.fold(F.foldableArray)(b.widgetMonoid(G.monoidArray))(D.spacify(D.locElems(ta)));
      })(ra)]);
    },
        pa = C.fromMaybe(H.empty)(ea);

    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.location])(l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.institutionId])(La(Fa(new p.IsSymbol(function () {
      return "institutionID_opt";
    }))()(p.SProxy.value)(pa)))))(function (ra) {
      var ta = H.getAll(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
        return "id";
      }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
        return "idType";
      }))()()()()(H.getAllOptionNil))))(ra);
      return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.institutionName])(ja.textInput(H.get(new p.IsSymbol(function () {
        return "institutionName";
      }))()(p.SProxy.value)(pa)))))(function (wa) {
        return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.institutionType])(ja.menuSignal(W.boundedEnumInstitutionType)(ja.isOptionInstitutionType)(H.get(new p.IsSymbol(function () {
          return "institutionType";
        }))()(p.SProxy.value)(pa)))))(function (Aa) {
          return l.discard(l.discardUnit)(r.bindCofree(b.widgetAlternative(G.monoidArray)))(f.display(e["br'"](k.widgetLiftWidget)))(function () {
            return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.superOrg])(ja.textInput(l.join(C.bindMaybe)(H.get(new p.IsSymbol(function () {
              return "superOrganizationName";
            }))()(p.SProxy.value)(pa))))))(function (Da) {
              return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(va.contactSignal(H.get(new p.IsSymbol(function () {
                return "institutionContact";
              }))()(p.SProxy.value)(pa)))(function (Ea) {
                return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(Va(Fa(new p.IsSymbol(function () {
                  return "iSustain_opt";
                }))()(p.SProxy.value)(pa)))(function (Ca) {
                  var Ma = H.getSubset()()(Z.consKeys(new p.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))(Z.consKeys(new p.IsSymbol(function () {
                    return "missionStatementURL";
                  }))(Z.nilKeys)))(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
                    return "fundingStatementURL";
                  }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                    return "missionStatementURL";
                  }))()()()()(H.getAllOptionNil))))(Ca);
                  return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(N.policySigArray(new I.Tuple(H.getWithDefault(new p.IsSymbol(function () {
                    return "_numPolicies";
                  }))()(1)(p.SProxy.value)(pa), H.get(new p.IsSymbol(function () {
                    return "institutionPolicies";
                  }))()(p.SProxy.value)(pa))))(function (Na) {
                    var db = I.fst(Na),
                        ib = I.snd(Na);
                    return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.versioning])(ja.checkBoxS(H.getWithDefault(new p.IsSymbol(function () {
                      return "versioning";
                    }))()(!1)(p.SProxy.value)(pa)))))(function (fb) {
                      return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                        return "institutionID_opt";
                      }))()(p.SProxy.value)(new C.Just(ra))))(function () {
                        return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                          return "institutionID";
                        }))()(p.SProxy.value)(ta)))(function () {
                          return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                            return "institutionName";
                          }))()(p.SProxy.value)(wa)))(function () {
                            return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                              return "institutionType";
                            }))()(p.SProxy.value)(Aa)))(function () {
                              return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                return "superOrganizationName";
                              }))()(p.SProxy.value)(new C.Just(Da))))(function () {
                                return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                  return "institutionContact";
                                }))()(p.SProxy.value)(Ea)))(function () {
                                  return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                    return "iSustain_opt";
                                  }))()(p.SProxy.value)(new C.Just(Ca))))(function () {
                                    return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                      return "institutionSustainability";
                                    }))()(p.SProxy.value)(Ma)))(function () {
                                      return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                        return "_numPolicies";
                                      }))()(p.SProxy.value)(new C.Just(db))))(function () {
                                        return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                          return "institutionPolicies";
                                        }))()(p.SProxy.value)(ib)))(function () {
                                          return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                            return "versioning";
                                          }))()(p.SProxy.value)(new C.Just(fb)));
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      }))(pa)))(function (gb) {
                        var hb = H.getSubset()()(Z.consKeys(new p.IsSymbol(function () {
                          return "institutionContact";
                        }))(Z.consKeys(new p.IsSymbol(function () {
                          return "institutionID";
                        }))(Z.consKeys(new p.IsSymbol(function () {
                          return "institutionName";
                        }))(Z.consKeys(new p.IsSymbol(function () {
                          return "institutionPolicies";
                        }))(Z.consKeys(new p.IsSymbol(function () {
                          return "institutionSustainability";
                        }))(Z.consKeys(new p.IsSymbol(function () {
                          return "institutionType";
                        }))(Z.consKeys(new p.IsSymbol(function () {
                          return "superOrganizationName";
                        }))(Z.consKeys(new p.IsSymbol(function () {
                          return "versioning";
                        }))(Z.nilKeys)))))))))(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionContact";
                        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionID";
                        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionName";
                        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionPolicies";
                        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionSustainability";
                        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                          return "institutionType";
                        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                          return "superOrganizationName";
                        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                          return "versioning";
                        }))()()()()(H.getAllOptionNil))))))))))(gb);
                        return l.discard(l.discardUnit)(r.bindCofree(b.widgetAlternative(G.monoidArray)))(f.display(ma(hb)))(function () {
                          return m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(new C.Just(gb));
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
      Xa = function Xa(ea) {
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.basicMetadata])(l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.title])(ja.textInput(H.get(new p.IsSymbol(function () {
      return "title";
    }))()(p.SProxy.value)(ea)))))(function (ma) {
      return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.creator])(ja.textInput(H.get(new p.IsSymbol(function () {
        return "creator";
      }))()(p.SProxy.value)(ea)))))(function (pa) {
        return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.pubyear])(ja.textInput(H.get(new p.IsSymbol(function () {
          return "publicationYear";
        }))()(p.SProxy.value)(ea)))))(function (ra) {
          return m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
            return "title";
          }))()(p.SProxy.value)(ma)))(function () {
            return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
              return "creator";
            }))()(p.SProxy.value)(pa)))(function () {
              return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                return "publicationYear";
              }))()(p.SProxy.value)(ra));
            });
          }))(ea));
        });
      });
    }));
  },
      ba = function ba(ea) {
    var ma = function ma(ra) {
      return e.div(b.widgetMultiAlternative(G.monoidArray))(b.widgetShiftMap)([Y.prodPreview])([e["br'"](k.widgetLiftWidget), F.fold(F.foldableMaybe)(b.widgetMonoid(G.monoidArray))(E.map(C.functorMaybe)(D.mkSupplementaryProductWidget)(ra))]);
    },
        pa = C.fromMaybe(H.empty)(ea);

    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.product])(l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(Xa(Fa(new p.IsSymbol(function () {
      return "basicMetadata_opt";
    }))()(p.SProxy.value)(pa)))(function (ra) {
      var ta = H.getAll(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
        return "creator";
      }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
        return "publicationYear";
      }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
        return "title";
      }))()()()()(H.getAllOptionNil)))))(ra);
      return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([Y.resourceId])(La(Fa(new p.IsSymbol(function () {
        return "resourceID_opt";
      }))()(p.SProxy.value)(pa))))(function (wa) {
        var Aa = H.getAll(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
          return "id";
        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
          return "idType";
        }))()()()()(H.getAllOptionNil))))(wa);
        return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))($a(Fa(new p.IsSymbol(function () {
          return "resourceType_opt";
        }))()(p.SProxy.value)(pa)))(function (Da) {
          var Ea = H.getSubset()()(Z.consKeys(new p.IsSymbol(function () {
            return "description";
          }))(Z.consKeys(new p.IsSymbol(function () {
            return "generalType";
          }))(Z.nilKeys)))(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
            return "description";
          }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
            return "generalType";
          }))()()()()(H.getAllOptionNil))))(Da);
          return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(eb(new I.Tuple(H.getWithDefault(new p.IsSymbol(function () {
            return "_numFormats";
          }))()(0)(p.SProxy.value)(pa), H.getWithDefault(new p.IsSymbol(function () {
            return "format";
          }))()([])(p.SProxy.value)(pa))))(function (Ca) {
            var Ma = I.fst(Ca),
                Na = I.snd(Ca);
            return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(ab(Fa(new p.IsSymbol(function () {
              return "resMdsOpts_opt";
            }))()(p.SProxy.value)(pa)))(function (db) {
              var ib = H.getSubset()()(Z.consKeys(new p.IsSymbol(function () {
                return "relationType";
              }))(Z.consKeys(new p.IsSymbol(function () {
                return "url";
              }))(Z.nilKeys)))(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
                return "relationType";
              }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                return "url";
              }))()()()()(H.getAllOptionNil))))(db);
              return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(cb(H.get(new p.IsSymbol(function () {
                return "locationOpts_opt";
              }))()(p.SProxy.value)(pa)))(function (fb) {
                var gb = l.join(C.bindMaybe)(E.map(C.functorMaybe)(H.getSubset()()(Z.consKeys(new p.IsSymbol(function () {
                  return "institutionContact";
                }))(Z.consKeys(new p.IsSymbol(function () {
                  return "institutionID";
                }))(Z.consKeys(new p.IsSymbol(function () {
                  return "institutionName";
                }))(Z.consKeys(new p.IsSymbol(function () {
                  return "institutionPolicies";
                }))(Z.consKeys(new p.IsSymbol(function () {
                  return "institutionSustainability";
                }))(Z.consKeys(new p.IsSymbol(function () {
                  return "institutionType";
                }))(Z.consKeys(new p.IsSymbol(function () {
                  return "superOrganizationName";
                }))(Z.consKeys(new p.IsSymbol(function () {
                  return "versioning";
                }))(Z.nilKeys)))))))))(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionContact";
                }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionID";
                }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionName";
                }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionPolicies";
                }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionSustainability";
                }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                  return "institutionType";
                }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                  return "superOrganizationName";
                }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                  return "versioning";
                }))()()()()(H.getAllOptionNil)))))))))))(fb));
                return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                  return "basicMetadata_opt";
                }))()(p.SProxy.value)(new C.Just(ra))))(function () {
                  return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                    return "basicMetadata";
                  }))()(p.SProxy.value)(ta)))(function () {
                    return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                      return "resourceID_opt";
                    }))()(p.SProxy.value)(new C.Just(wa))))(function () {
                      return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                        return "resourceID";
                      }))()(p.SProxy.value)(new C.Just(Aa))))(function () {
                        return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                          return "resourceType_opt";
                        }))()(p.SProxy.value)(new C.Just(Da))))(function () {
                          return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                            return "resourceType";
                          }))()(p.SProxy.value)(Ea)))(function () {
                            return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                              return "_numFormats";
                            }))()(p.SProxy.value)(new C.Just(Ma))))(function () {
                              return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                return "format";
                              }))()(p.SProxy.value)(new C.Just(Na))))(function () {
                                return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                  return "resMdsOpts_opt";
                                }))()(p.SProxy.value)(new C.Just(db))))(function () {
                                  return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                    return "resourceMetadataSource";
                                  }))()(p.SProxy.value)(new C.Just(ib))))(function () {
                                    return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                      return "locationOpts_opt";
                                    }))()(p.SProxy.value)(fb)))(function () {
                                      return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                                        return "location";
                                      }))()(p.SProxy.value)(gb));
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
                }))(pa)))(function (hb) {
                  var jb = H.getSubset()()(Z.consKeys(new p.IsSymbol(function () {
                    return "basicMetadata";
                  }))(Z.consKeys(new p.IsSymbol(function () {
                    return "format";
                  }))(Z.consKeys(new p.IsSymbol(function () {
                    return "location";
                  }))(Z.consKeys(new p.IsSymbol(function () {
                    return "resourceID";
                  }))(Z.consKeys(new p.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))(Z.consKeys(new p.IsSymbol(function () {
                    return "resourceType";
                  }))(Z.nilKeys)))))))(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
                    return "basicMetadata";
                  }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                    return "format";
                  }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                    return "location";
                  }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                    return "resourceID";
                  }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                    return "resourceMetadataSource";
                  }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                    return "resourceType";
                  }))()()()()(H.getAllOptionNil))))))))(hb);
                  return l.discard(l.discardUnit)(r.bindCofree(b.widgetAlternative(G.monoidArray)))(f.display(ma(jb)))(function () {
                    return m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(new C.Just(hb));
                  });
                });
              });
            });
          });
        });
      });
    }));
  },
      oa = function oa(ea) {
    return e.div_(r.shiftMapCofree(G.monoidArray))([Y.products])(e.span_(r.shiftMapCofree(G.monoidArray))([Y.productsHeader])(e.div_(r.shiftMapCofree(G.monoidArray))([Y.productList])(ja.nonEmptyArrayView(ba)(ea))));
  },
      ya = function ya(ea) {
    return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(e.div_(r.shiftMapCofree(G.monoidArray))([Y.recordId])(La(Fa(new p.IsSymbol(function () {
      return "identifier_opt";
    }))()(p.SProxy.value)(ea))))(function (ma) {
      var pa = H.getAll(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
        return "id";
      }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
        return "idType";
      }))()()()()(H.getAllOptionNil))))(ma);
      return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(E.map(E.functorFn)(e.div_(r.shiftMapCofree(G.monoidArray))([Y.date]))(ja.textInput)(H.get(new p.IsSymbol(function () {
        return "date";
      }))()(p.SProxy.value)(ea)))(function (ra) {
        return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(bb(new I.Tuple(H.getWithDefault(new p.IsSymbol(function () {
          return "_numRelIds";
        }))()(0)(p.SProxy.value)(ea), H.get(new p.IsSymbol(function () {
          return "relId_opts";
        }))()(p.SProxy.value)(ea))))(function (ta) {
          var wa = I.fst(ta),
              Aa = I.snd(ta),
              Da = l.join(C.bindMaybe)(E.map(C.functorMaybe)(Q.sequence(B.traversableNonEmptyArray)(C.applicativeMaybe))(E.map(C.functorMaybe)(E.map(B.functorNonEmptyArray)(H.getAll(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
            return "id";
          }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
            return "idType";
          }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
            return "relType";
          }))()()()()(H.getAllOptionNil)))))))(Aa)));
          return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(oa(new I.Tuple(H.getWithDefault(new p.IsSymbol(function () {
            return "_numSupProds";
          }))()(0)(p.SProxy.value)(ea), H.get(new p.IsSymbol(function () {
            return "supProd_opts";
          }))()(p.SProxy.value)(ea))))(function (Ea) {
            var Ca = I.fst(Ea),
                Ma = I.snd(Ea),
                Na = l.join(C.bindMaybe)(E.map(C.functorMaybe)(Q.sequence(B.traversableNonEmptyArray)(C.applicativeMaybe))(E.map(C.functorMaybe)(E.map(B.functorNonEmptyArray)(H.getSubset()()(Z.consKeys(new p.IsSymbol(function () {
              return "basicMetadata";
            }))(Z.consKeys(new p.IsSymbol(function () {
              return "format";
            }))(Z.consKeys(new p.IsSymbol(function () {
              return "location";
            }))(Z.consKeys(new p.IsSymbol(function () {
              return "resourceID";
            }))(Z.consKeys(new p.IsSymbol(function () {
              return "resourceMetadataSource";
            }))(Z.consKeys(new p.IsSymbol(function () {
              return "resourceType";
            }))(Z.nilKeys)))))))(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
              return "basicMetadata";
            }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
              return "format";
            }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
              return "location";
            }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
              return "resourceID";
            }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
              return "resourceMetadataSource";
            }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
              return "resourceType";
            }))()()()()(H.getAllOptionNil))))))))))(Ma)));
            return m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(z.execState(l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
              return "identifier_opt";
            }))()(p.SProxy.value)(new C.Just(ma))))(function () {
              return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                return "identifier";
              }))()(p.SProxy.value)(pa)))(function () {
                return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                  return "date";
                }))()(p.SProxy.value)(ra)))(function () {
                  return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                    return "_numRelIds";
                  }))()(p.SProxy.value)(new C.Just(wa))))(function () {
                    return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                      return "relId_opts";
                    }))()(p.SProxy.value)(Aa)))(function () {
                      return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                        return "relatedIdentifiers";
                      }))()(p.SProxy.value)(Da)))(function () {
                        return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                          return "_numSupProds";
                        }))()(p.SProxy.value)(new C.Just(Ca))))(function () {
                          return l.discard(l.discardUnit)(q.bindStateT(v.monadIdentity))(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                            return "supProd_opts";
                          }))()(p.SProxy.value)(Ma)))(function () {
                            return l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
                              return "supplementaryProducts";
                            }))()(p.SProxy.value)(Na));
                          });
                        });
                      });
                    });
                  });
                });
              });
            }))(ea));
          });
        });
      });
    });
  };

  u = function () {
    var ea = function ea(ma) {
      var pa = function pa(ra) {
        return C.maybe(m.pure(R.applicativeEffect)(""))(J.recordToString)(ra);
      };

      return l.bind(b.widgetBind)(T.liftEffect(b.widgetMonadEff(G.monoidArray))(Q.sequence(Q.traversableMaybe)(R.applicativeEffect)(E.map(C.functorMaybe)(Ya)(ma))))(function (ra) {
        return e.div(b.widgetMultiAlternative(G.monoidArray))(b.widgetShiftMap)([Y.recPreview])([l.bind(b.widgetBind)(T.liftEffect(b.widgetMonadEff(G.monoidArray))(pa(ra)))(function (ta) {
          return e.div(b.widgetMultiAlternative(G.monoidArray))(b.widgetShiftMap)([Y.previewButtons])([Ta(ta), Ua(ta)]);
        }), e["br'"](k.widgetLiftWidget), F.fold(F.foldableMaybe)(b.widgetMonoid(G.monoidArray))(E.map(C.functorMaybe)(D.mkRecordWidget)(ra))]);
      });
    };

    return f.loopS(G.monoidArray)(H.empty)(function (ma) {
      return e.div_(r.shiftMapCofree(G.monoidArray))([Y.record])(l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(Sa)(function (pa) {
        var ra = H.getSubset()()(Z.consKeys(new p.IsSymbol(function () {
          return "date";
        }))(Z.consKeys(new p.IsSymbol(function () {
          return "identifier";
        }))(Z.consKeys(new p.IsSymbol(function () {
          return "lastModified";
        }))(Z.consKeys(new p.IsSymbol(function () {
          return "relatedIdentifiers";
        }))(Z.consKeys(new p.IsSymbol(function () {
          return "supplementaryProducts";
        }))(Z.nilKeys))))))(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
          return "date";
        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
          return "identifier";
        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
          return "lastModified";
        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
          return "relatedIdentifiers";
        }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
          return "supplementaryProducts";
        }))()()()()(H.getAllOptionNil)))))))(pa);
        pa = C.isNothing(ra) ? ma : pa;
        return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(ya(pa))(function (ta) {
          var wa = ja.formatXsdDate(ja.initDate);
          wa = w.hush(wa);
          var Aa = H.get(new p.IsSymbol(function () {
            return "lastModified";
          }))()(p.SProxy.value)(ta);
          return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(X.append(L.semigroupFirst)(Aa)(wa)))(function (Da) {
            return l.bind(r.bindCofree(b.widgetAlternative(G.monoidArray)))(m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(z.execState(l.bind(q.bindStateT(v.monadIdentity))(t.get(q.monadStateStateT(v.monadIdentity)))(H.maySetOptState(new p.IsSymbol(function () {
              return "lastModified";
            }))()(p.SProxy.value)(Da)))(ta)))(function (Ea) {
              var Ca = H.getSubset()()(Z.consKeys(new p.IsSymbol(function () {
                return "date";
              }))(Z.consKeys(new p.IsSymbol(function () {
                return "identifier";
              }))(Z.consKeys(new p.IsSymbol(function () {
                return "lastModified";
              }))(Z.consKeys(new p.IsSymbol(function () {
                return "relatedIdentifiers";
              }))(Z.consKeys(new p.IsSymbol(function () {
                return "supplementaryProducts";
              }))(Z.nilKeys))))))(H.getAllAny()(H.getAllOptionCons(new p.IsSymbol(function () {
                return "date";
              }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                return "identifier";
              }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                return "lastModified";
              }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                return "relatedIdentifiers";
              }))()()()()(H.getAllOptionCons(new p.IsSymbol(function () {
                return "supplementaryProducts";
              }))()()()()(H.getAllOptionNil)))))))(Ea);
              return l.discard(l.discardUnit)(r.bindCofree(b.widgetAlternative(G.monoidArray)))(f.display(ea(Ca)))(function () {
                return m.pure(r.applicativeCofree(b.widgetAlternative(G.monoidArray)))(Ea);
              });
            });
          });
        });
      }));
    });
  }();

  var za = e["div'"](b.widgetMultiAlternative(G.monoidArray))(b.widgetShiftMap)([e.div(b.widgetMultiAlternative(G.monoidArray))(b.widgetShiftMap)([Y.page])(m.pure(m.applicativeArray)(f.dyn(u)))]);

  c.runFormSPA = function (ea) {
    return n.runWidgetInDom(ea)(za);
  };

  c.page = za;
  c.utf8DataAttr = "data:text/plain;charset=utf-8";
  c.downloadButton = Ta;
  c.mkDLAnchorAndClicker = ua;
  c.uploadButtonSig = Sa;
  c.copyButton = Ua;
  c.fillMetajeloRecordExtra = Ra;
  c.fillSProdExtra = Qa;
  c.fillLocationRowExtra = Za;
  c.fillSustainExtra = Pa;
  c.fillResourceMDSExtra = Ia;
  c.accumulateMetajeloRecord = u;
  c.finalizeRecord = Ya;
  c.accumulateMetajeloRecUI = ya;
  c.accumulateSuppProd = ba;
  c.supProdSigArray = oa;
  c.accumulateLocation = cb;
  c.accumulateSustain = Va;
  c.accumulateIdent = La;
  c.accumulateRelatedIdent = Wa;
  c.relIdSigArray = bb;
  c.accumulateBasicMetaData = Xa;
  c.accumulateResType = $a;
  c.formatSignal = Oa;
  c.formatSigArray = eb;
  c.accumulateResMdSource = ab;
  c.tooltip = a;
  c.tooltipS = S;
  c.getOpt = Fa;
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
//# sourceMappingURL=prod.2b66edb4.js.map